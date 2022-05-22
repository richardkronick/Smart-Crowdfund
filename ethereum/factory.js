import web3 from './web3.js';
import CampaignFactory from './build/CampaignFactory.json';

const contractAddress = '0x6CA606B71D4ABA138f47C67764CAdE8f2f0CeBE7';

const instance = new web3.eth.Contract(CampaignFactory.abi, contractAddress);

export default instance;