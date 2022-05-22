const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider({ gasLimit: 10000000 }));

const compiledFactory = require('../ethereum/build/CampaignFactory.json');
const compiledCampaign = require('../ethereum/build/Campaign.json');

let accounts;
let factory;
let campaignAddress;
let campaign;

beforeEach(async () => {
    // Get a list of all accounts
    accounts = await web3.eth.getAccounts();

    factory = await new web3.eth.Contract(compiledFactory.abi)
        .deploy({ data: compiledFactory.evm.bytecode.object })
        .send({ from: accounts[0], gas: '10000000' });

    await factory.methods.createCampaign('100', 'project name', 'test description', 'text_url').send({
        from: accounts[0],
        gas: '10000000'
    });

    [campaignAddress] = await factory.methods.getDeployedCampaigns().call();
    campaign = await new web3.eth.Contract(
        compiledCampaign.abi,
        campaignAddress
    );
});

describe('Campaigns', () => {
    it('successfully deploys a factory and a campaign', () => {
        assert.ok(factory.options.address);
        assert.ok(campaign.options.address);
    });

    it('ensures that the campaign creator is the manager', async () => {
        const manager = await campaign.methods.manager().call();
        assert.equal(accounts[0], manager);
    });

    it('allows people to contribute and get added as an approver', async () => {
        await campaign.methods.contribute().send({
            value: '200',
            from: accounts[1]
        });
        const isContributer = await campaign.methods.approvers(accounts[1]).call();
        const approversCount = await campaign.methods.approversCount().call();
        assert(isContributer);
        assert.equal(1, approversCount);
    });

    it('requires a contribution greater than the minumum', async () => {
        try {
            await campaign.methods.contribute().send({
                value: '1',
                from: accounts[1]
            });
            assert(false);
        } catch(err) {
            assert(err);
        }
    });

    it('allows a manager to create a request', async () => {
        const description = 'hire a web developer';
        const value = '100';
        const recipient = accounts[1];
        await campaign.methods.createRequest(description, value, recipient).send({
                from: accounts[0],
                gas: '1000000'
        });
        const request = await campaign.methods.requests(0).call();

        assert(request);
        assert.equal(description, request.description);
        assert.equal(value, request.value);
        assert.equal(recipient, request.recipient);
    });

    it('prevents a non-manager from creating a request', async () => {
        try {
            await campaign.methods.createRequest('hire a web developer', '100', accounts[2]).send({
                    from: accounts[1],
                    gas: '1000000'
            });
            assert(false);
        } catch(err) {
            assert(err);
        }
    });

    it('returns an error if the request does not exist.', async () => {
        try {
            await campaign.methods.approveRequest(1).send({
                from: accounts[0],
                gas: '1000000'
            });
            assert(false);
        } catch(err) {
            assert(err);
        }
    });

    it('processes requests end to end', async () => {
        // Contribute to the campaign.
        await campaign.methods.contribute().send({
            value: web3.utils.toWei('5', 'ether'),
            from: accounts[0]
        });

        // The manager creates a request.
        const description = 'hire a web developer';
        const value = web3.utils.toWei('3', 'ether');
        const recipient = accounts[1];
        await campaign.methods.createRequest(description, value, recipient).send({
                from: accounts[0],
                gas: '1000000'
        });

        // Approve the request.
        await campaign.methods.approveRequest(0).send({
            from: accounts[0],
            gas: '1000000'
        });

        let originalRecipientBalance = await web3.eth.getBalance(accounts[1]);
        originalRecipientBalance = web3.utils.fromWei(originalRecipientBalance, 'ether');
        originalRecipientBalance = parseFloat(originalRecipientBalance);

        // Finalize the request.
        await campaign.methods.finalizeRequest(0).send({
            from: accounts[0],
            gas: '1000000'
        });

        // Get the balance of the recipient to check that the ETH was sent.
        let recipientBalance = await web3.eth.getBalance(accounts[1]);
        recipientBalance = web3.utils.fromWei(recipientBalance, 'ether');
        recipientBalance = parseFloat(recipientBalance);

        assert(originalRecipientBalance < recipientBalance);
    });

    it('only allows approvers to approve a request.', async () => {
        // Contribute to the campaign.
        await campaign.methods.contribute().send({
            value: '1000',
            from: accounts[0]
        });

        // The manager creates a request.
        const description = 'hire a web developer';
        const value = '100';
        const recipient = accounts[1];
        await campaign.methods.createRequest(description, value, recipient).send({
                from: accounts[0],
                gas: '1000000'
        });

        try {
            // Approve the request from an account that isn't an approver.
            await campaign.methods.approveRequest(0).send({
                from: accounts[2],
                gas: '1000000'
            });
            assert(false);
        } catch(err) {
            assert(err);
        }
    });
        
    it('prevents approvers from approving a request more than once.', async () => {
        // Contribute to the campaign.
        await campaign.methods.contribute().send({
            value: '1000',
            from: accounts[0]
        });

        // The manager creates a request.
        const description = 'hire a web developer';
        const value = '100';
        const recipient = accounts[1];
        await campaign.methods.createRequest(description, value, recipient).send({
                from: accounts[0],
                gas: '1000000'
        });

        // Approve the request.
        await campaign.methods.approveRequest(0).send({
            from: accounts[0],
            gas: '1000000'
        });

        try {
            // Try to approve the request again with the same approver.
            await campaign.methods.approveRequest(0).send({
                from: accounts[0],
                gas: '1000000'
            });
            assert(false);
        } catch(err) {
            assert(err);
        }
    });

    it('prevent finalizing a request that has already been completed.', async () => {
        // Contribute to the campaign.
        await campaign.methods.contribute().send({
            value: '1000',
            from: accounts[0]
        });

        // The manager creates a request.
        const description = 'hire a web developer';
        const value =  '100';
        const recipient = accounts[1];
        await campaign.methods.createRequest(description, value, recipient).send({
                from: accounts[0],
                gas: '1000000'
        });

        // Approve the request.
        await campaign.methods.approveRequest(0).send({
            from: accounts[0],
            gas: '1000000'
        });

        let originalRecipientBalance = await web3.eth.getBalance(accounts[1]);
        originalRecipientBalance = web3.utils.fromWei(originalRecipientBalance, 'ether');
        originalRecipientBalance = parseFloat(originalRecipientBalance);

        // Finalize the request.
        await campaign.methods.finalizeRequest(0).send({
            from: accounts[0],
            gas: '1000000'
        });

        try {
            // Try to finalize a request that has already been finalized.
            await campaign.methods.finalizeRequest(0).send({
                from: accounts[0],
                gas: '1000000'
            });
            assert(false);
        } catch(err) {
            assert(err);
        }
    });

    it('requires a majority for approval.', async () => {
        // Contribute to the campaign.
        await campaign.methods.contribute().send({
            value: '1000',
            from: accounts[0]
        });
        await campaign.methods.contribute().send({
            value: '1000',
            from: accounts[2]
        });

        // The manager creates a request.
        const description = 'hire a web developer';
        const value = '100';
        const recipient = accounts[1];
        await campaign.methods.createRequest(description, value, recipient).send({
                from: accounts[0],
                gas: '1000000'
        });

        // Approve the request from one of the approvers.
        await campaign.methods.approveRequest(0).send({
            from: accounts[0],
            gas: '1000000'
        });

        try {
            // Try to finalize a request that has already been finalized.
            await campaign.methods.finalizeRequest(0).send({
                from: accounts[0],
                gas: '1000000'
            });
            assert(false);
        } catch(err) {
            assert(err);
        }
    });
});