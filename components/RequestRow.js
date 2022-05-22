import React, { Component } from 'react';
import { Button, Table } from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import Campaign from '../ethereum/campaign';
import { Router } from '../routes';

class RequestRow extends Component {
    state = {
        value: '',
        errorMessage: '',
        loadingApproval: false,
        loadingFinalization: false,
        showMessage: false,
        messageContent: ''
    }

    onApprove = async () => {
        this.initializeLoading(false);
        try {
            const campaign = Campaign(this.props.address);
            const accounts = await web3.eth.getAccounts();
            await campaign.methods.approveRequest(this.props.id).send({
                from: accounts[0]
            });

            // Approval was successful. Show success message.
            this.setState({
                showMessage: true,
                messageHeader: 'Transaction was successful.',
                messageContent: `You have successfully approved this request.`
            });
        } catch (error) {
            // Catch and display the error.
            this.setState({ errorMessage: error.message, showMessage: false, loadingFinalization: false, loadingApproval: false });
        }

        this.setState({ loadingFinalization: false, loadingApproval: false, value: '' });

        // Refresh the page to the updated state.
        Router.pushRoute(`/campaigns/${ this.props.address }/requests`);
    }

    onFinalize = async () => {
        this.initializeLoading(true);
        try {
            const campaign = Campaign(this.props.address);
            const accounts = await web3.eth.getAccounts();
            await campaign.methods.finalizeRequest(this.props.id).send({
                from: accounts[0]
            });

            // Finalization was successful. Show success message.
            this.setState({
                showMessage: true,
                messageHeader: 'Transaction was successful.',
                messageContent: `This request has now been finalized.`
            }); 
        } catch (error) {
            // Catch and display the error.
            this.setState({ errorMessage: error.message, showMessage: false, loadingFinalization: false, loadingApproval: false });
        }
        
        this.setState({ loadingFinalization: false, loadingApproval: false, value: '' });

        // Refresh the page to update state.
        Router.pushRoute(`/campaigns/${ this.props.address }/requests`);
    }

    initializeLoading = (isFinalization) => {
        // Set loading details.
        this.setState({
            loadingFinalization: isFinalization,
            loadingApproval: !isFinalization,
            errorMessage: '',
            showMessage: true,
            messageContent: 'Please wait... Your transaction is in progress and could take up to 30 seconds to process once initiated.'
        });
    }

    render() {
        const { Row, Cell } = Table;
        const { id, request, contributorCount } = this.props;
        const readyToBeFinalized = request.approvalCount > contributorCount / 2;
        const finalizedMessage = 'This request has already been approved and finalized';
        const approvedMessage = 'This request has already been approved and can now be finalized by the manager.';

        return (
            <Row disabled={request.complete} error={ !!this.state.errorMessage } positive={ !!this.state.showMessage }>
                <Cell>{ id }</Cell>
                <Cell>{ request.description }</Cell>
                <Cell>{ web3.utils.fromWei(request.value, 'ether') } ETH</Cell>
                <Cell>{ request.recipient }</Cell>
                <Cell positive={readyToBeFinalized}>{ request.approvalCount } / { contributorCount }</Cell>
                {
                    request.complete ? <Cell></Cell> :
                    <Cell>
                        <Button color="blue" basic loading={ this.state.loadingApproval } onClick={ this.onApprove }>
                            Approve
                        </Button>
                    </Cell>
                }
                {
                    request.complete ?
                    <Cell>
                        <Button disabled color="purple" basic onClick={this.onFinalize}>
                            Finalized
                        </Button>
                    </Cell>
                    : readyToBeFinalized ?
                    <Cell>
                        <Button color="purple" basic loading={ this.state.loadingFinalization }onClick={this.onFinalize}>
                            Finalize
                        </Button>
                    </Cell>
                    :
                    <Cell>
                        <Button disabled color="purple" basic onClick={this.onFinalize}>
                            Finalize
                        </Button>
                    </Cell>
                }
                <Cell>
                    {this.state.errorMessage ? this.state.errorMessage : 
                    this.state.showMessage ? this.state.messageContent :
                    request.complete ? finalizedMessage : 
                    readyToBeFinalized ? approvedMessage :
                    'This request does not have more than 50% approval and cannot be finalized until it does so.'}
                </Cell>
            </Row>
        );
    }
}

export default RequestRow;