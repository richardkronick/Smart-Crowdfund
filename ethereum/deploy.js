const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
 
const compiledFactory = require('./build/CampaignFactory.json');
 
// Replace the values of the two variables below.
// The first is a seed phrase, the second is an Infura node endpoint.
const provider = new HDWalletProvider(
  'one two three four five six seven eight nine ten eleven twelve',
  'https://rinkeby.infura.io/v3/a570e084d3d346559c59552c8e7a19a2'
);
 
const web3 = new Web3(provider);
 
const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
 
  console.log('Attempting to deploy from account', accounts[0]);
 
  const result = await new web3.eth.Contract(compiledFactory.abi)
    .deploy({ data: '0x' + compiledFactory.evm.bytecode.object })
    .send({ gas: '10000000', from: accounts[0] });
 
  console.log(compiledFactory.abi);  
  console.log('The contract was deployed to', result.options.address);

  provider.engine.stop();
};
 
deploy();