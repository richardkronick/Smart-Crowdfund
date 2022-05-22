"use strict";
exports.id = 400;
exports.ids = [400];
exports.modules = {

/***/ 400:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ factory)
});

// EXTERNAL MODULE: ./ethereum/web3.js
var web3 = __webpack_require__(156);
;// CONCATENATED MODULE: ./ethereum/build/CampaignFactory.json
const CampaignFactory_namespaceObject = JSON.parse('{"Mt":[{"inputs":[{"internalType":"uint256","name":"minimum","type":"uint256"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"string","name":"imageUrl","type":"string"}],"name":"createCampaign","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"deployedCampaigns","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getDeployedCampaigns","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"}]}');
;// CONCATENATED MODULE: ./ethereum/factory.js


const contractAddress = "0x6CA606B71D4ABA138f47C67764CAdE8f2f0CeBE7";
const instance = new web3/* default.eth.Contract */.Z.eth.Contract(CampaignFactory_namespaceObject.Mt, contractAddress);
/* harmony default export */ const factory = (instance);


/***/ })

};
;