"use strict";
exports.id = 71;
exports.ids = [71];
exports.modules = {

/***/ 165:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ campaign)
});

// EXTERNAL MODULE: ./ethereum/web3.js
var web3 = __webpack_require__(156);
;// CONCATENATED MODULE: ./ethereum/build/Campaign.json
const Campaign_namespaceObject = JSON.parse('{"Mt":[{"inputs":[{"internalType":"uint256","name":"minimum","type":"uint256"},{"internalType":"address","name":"creator","type":"address"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"string","name":"imageUrl","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"indexOfRequest","type":"uint256"}],"name":"approveRequest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"approvers","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"approversCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"campaignDescription","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"campaignImageUrl","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"campaignName","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"contribute","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"string","name":"description","type":"string"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"address","name":"recipient","type":"address"}],"name":"createRequest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"indexOfRequest","type":"uint256"}],"name":"finalizeRequest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getCampaignCurrentValue","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getRequestsCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getSummary","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"manager","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minimumContribution","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"requests","outputs":[{"internalType":"string","name":"description","type":"string"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"bool","name":"complete","type":"bool"},{"internalType":"uint256","name":"approvalCount","type":"uint256"}],"stateMutability":"view","type":"function"}]}');
;// CONCATENATED MODULE: ./ethereum/campaign.js


/* harmony default export */ const campaign = ((address)=>{
    // Create the campaign instance.
    return new web3/* default.eth.Contract */.Z.eth.Contract(Campaign_namespaceObject.Mt, address);
});


/***/ }),

/***/ 156:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(519);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_0__);

let web3;
//  && window.ethereum.networkVersion === '4' *************************************************
if (false) {} else {
    // We are on the Next.js server or the user does not have MetaMask.
    // Please replace provider url with your own.
    const provider = new (web3__WEBPACK_IMPORTED_MODULE_0___default().providers.HttpProvider)("https://rinkeby.infura.io/v3/a570e084d3d346559c59552c8e7a19a2");
    web3 = new (web3__WEBPACK_IMPORTED_MODULE_0___default())(provider);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (web3);


/***/ }),

/***/ 262:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const routes = __webpack_require__(662)();
routes.add("/campaigns/new", "/campaigns/new").add("/campaigns/:address", "/campaigns/display").add("/campaigns/:address/requests", "campaigns/requests/index").add("/campaigns/:address/requests/new", "campaigns/requests/new");
module.exports = routes;


/***/ })

};
;