"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 172:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(831);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "row justify-content-md-center",
        style: {
            marginTop: "6rem",
            marginBottom: "2rem"
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
            negative: true,
            children: "Something went wrong. Most likely you are not connected to MetaMask, or you are not on the Rinkeby network. Please connect to Rinkeby via MetaMask and refresh the page."
        })
    });
});


/***/ }),

/***/ 579:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__(831);
;// CONCATENATED MODULE: external "react-image-fallback"
const external_react_image_fallback_namespaceObject = require("react-image-fallback");
var external_react_image_fallback_default = /*#__PURE__*/__webpack_require__.n(external_react_image_fallback_namespaceObject);
// EXTERNAL MODULE: ./ethereum/factory.js + 1 modules
var factory = __webpack_require__(400);
// EXTERNAL MODULE: ./ethereum/campaign.js + 1 modules
var ethereum_campaign = __webpack_require__(165);
// EXTERNAL MODULE: ./components/Error.js
var Error = __webpack_require__(172);
// EXTERNAL MODULE: ./routes.js
var routes = __webpack_require__(262);
;// CONCATENATED MODULE: ./pages/index.js








class CampaignIndex extends external_react_.Component {
    static async getInitialProps() {
        let campaigns;
        try {
            campaigns = await factory/* default.methods.getDeployedCampaigns */.Z.methods.getDeployedCampaigns().call();
        } catch (error) {
            return {
                error: true
            };
        }
        const summaries = [];
        for (const address of campaigns){
            const campaign = (0,ethereum_campaign/* default */.Z)(address);
            const summary = await campaign.methods.getSummary().call();
            const summaryDetails = {
                address: address,
                campaignName: summary[5],
                campaignDescription: summary[6],
                imageUrl: summary[7]
            };
            summaries.push(summaryDetails);
        }
        return {
            campaigns,
            summaries
        };
    }
    renderCampaigns() {
        const items = [];
        for(let i = 0; i < this.props.summaries.length; i++){
            const summary = this.props.summaries[i];
            const item = {
                header: summary.campaignName,
                description: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: summary.campaignDescription
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(routes.Link, {
                            route: `/campaigns/${summary.address}`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                children: "View Campaign"
                            })
                        })
                    ]
                }),
                fluid: false,
                image: /*#__PURE__*/ jsx_runtime_.jsx(routes.Link, {
                    route: `/campaigns/${summary.address}`,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_image_fallback_default()), {
                        src: summary.imageUrl,
                        fallbackImage: "https://images.unsplash.com/photo-1589561253898-768105ca91a8",
                        role: "button"
                    })
                }),
                onError: this.addDefaultSrc
            };
            items.push(item);
        }
        return /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Card.Group, {
            centered: true,
            items: items
        });
    }
    render() {
        return this.props.error ? /*#__PURE__*/ jsx_runtime_.jsx(Error/* default */.Z, {}) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "row justify-content-md-center",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-sm-auto",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(routes.Link, {
                                    route: "campaigns/new",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Button, {
                                            content: "Create Campaign",
                                            icon: "add",
                                            primary: true,
                                            labelPosition: "right",
                                            floated: "right",
                                            size: "massive"
                                        })
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("hr", {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "row justify-content-md-center",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-sm-auto",
                                style: {
                                    marginBottom: "1rem"
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    children: "Open Campaigns"
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: this.renderCampaigns()
                })
            ]
        });
    }
}
/* harmony default export */ const pages = (CampaignIndex);


/***/ }),

/***/ 662:
/***/ ((module) => {

module.exports = require("next-routes");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 831:
/***/ ((module) => {

module.exports = require("semantic-ui-react");

/***/ }),

/***/ 519:
/***/ ((module) => {

module.exports = require("web3");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [71,400], () => (__webpack_exec__(579)));
module.exports = __webpack_exports__;

})();