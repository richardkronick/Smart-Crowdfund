"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 511:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__(831);
// EXTERNAL MODULE: ./routes.js
var routes = __webpack_require__(262);
;// CONCATENATED MODULE: ./components/Header.js




/* harmony default export */ const Header = (()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "row justify-content-md-center",
                style: {
                    marginTop: "2rem",
                    marginBottom: "2rem"
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Button, {
                    basic: true,
                    color: "grey",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                "This application exists on the ",
                                /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                    children: "Ethereum Rinkeby test network"
                                }),
                                " and is for demo purposes only. Using on the mainnet could cause you to lose your ETH gas and on other test networks it will not function properly because the contract does not exist on those networks. This site requires",
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "https://www.google.com/search?q=metamask+extension",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    children: " the MetaMask browser extension "
                                }),
                                "to function properly."
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("hr", {}),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                "The purpose of this site is to demonstrate how blockchain can improve crowdfunding by allowing contributors to have a say in how the funds are spent and can solve the issue of campaign creators abusing the funds of their contributors. Created with React, Javascript and Solidity on the Ethereum Rinkeby Blockchain by ",
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "https://www.richardkronick.com",
                                    target: "_blank",
                                    children: "Richard Kronick"
                                }),
                                "."
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Menu, {
                style: {
                    marginTop: "2rem",
                    marginBottom: "2rem"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(routes.Link, {
                        route: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "item",
                            children: "Smart Crowdfunder"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Menu.Menu, {
                        position: "right",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(routes.Link, {
                                route: "/",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "item",
                                    children: "View Campaigns"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(routes.Link, {
                                route: "/campaigns/new",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                    className: "item",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Icon, {
                                            name: "add"
                                        }),
                                        " New Campaign"
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
});

;// CONCATENATED MODULE: ./components/Footer.js



/* harmony default export */ const Footer = (()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "row justify-content-md-center",
        style: {
            marginTop: "6rem",
            marginBottom: "2rem"
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Button, {
            basic: true,
            children: [
                "Created with React, Javascript and Solidity on the Ethereum Rinkeby Blockchain by ",
                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    href: "https://www.richardkronick.com",
                    target: "_blank",
                    children: "Richard Kronick"
                }),
                ". View the ",
                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    href: "https://github.com/richardkronick/smart-campaigner",
                    target: "_blank",
                    children: "code at Github"
                }),
                "."
            ]
        })
    });
});

;// CONCATENATED MODULE: ./components/Layout.js





/* harmony default export */ const Layout = ((props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Container, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
            props.children,
            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
        ]
    });
});

;// CONCATENATED MODULE: ./pages/_app.js




const AppLayout = ({ Component , pageProps  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(Layout, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    });
};
/* harmony default export */ const _app = (AppLayout);


/***/ }),

/***/ 262:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const routes = __webpack_require__(662)();
routes.add("/campaigns/new", "/campaigns/new").add("/campaigns/:address", "/campaigns/display").add("/campaigns/:address/requests", "campaigns/requests/index").add("/campaigns/:address/requests/new", "campaigns/requests/new");
module.exports = routes;


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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(511));
module.exports = __webpack_exports__;

})();