"use strict";
(() => {
var exports = {};
exports.id = 189;
exports.ids = [189];
exports.modules = {

/***/ 889:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(831);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(165);
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(156);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(262);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_5__);






class NewRequest extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
    state = {
        value: "",
        description: "",
        recipient: "",
        errorMessage: "",
        loading: false,
        showMessage: false,
        messageHeader: "",
        messageContent: ""
    };
    static async getInitialProps(props) {
        const { address  } = props.query;
        return {
            address
        };
    }
    onSubmit = async (event)=>{
        // Prevent submission to server.
        event.preventDefault();
        // Set loading details.
        this.setState({
            loading: true,
            errorMessage: "",
            showMessage: true,
            messageHeader: "Please wait...",
            messageContent: "Your transaction is in progress and could take up to 30 seconds to process once initiated."
        });
        const { description , value , recipient  } = this.state;
        try {
            // Get the campaign instance.
            const campaign = (0,_ethereum_campaign__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(this.props.address);
            // Get ETH accounts and attempt to create a campaign request.
            const accounts = await _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__/* ["default"].eth.getAccounts */ .Z.eth.getAccounts();
            await campaign.methods.createRequest(description, _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__/* ["default"].utils.toWei */ .Z.utils.toWei(value, "ether"), recipient).send({
                from: accounts[0]
            });
            // Contribution was successful. Show success message.
            this.setState({
                value: "",
                description: "",
                recipient: "",
                showMessage: true,
                messageHeader: "Transaction was successful.",
                messageContent: `Congratulations! Your request was created with the following description: "${description}" for the amount of ${value} ETH with the recipient address of "${recipient}".`
            });
        } catch (error) {
            // Catch and display the error.
            this.setState({
                errorMessage: error.message,
                showMessage: false
            });
        }
        this.setState({
            loading: false
        });
    };
    render() {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_routes__WEBPACK_IMPORTED_MODULE_5__.Link, {
                    route: `/campaigns/${this.props.address}/requests`,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        children: "<< Back to Requests"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                    style: {
                        marginTop: "1rem"
                    },
                    children: "Create a New Request"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        style: {
                            marginBottom: "2rem"
                        },
                        children: "Note that only the manager can create requests. If you attempt to do so and are not the manager, it will be rejected and you will lose your gas."
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form, {
                    onSubmit: this.onSubmit,
                    error: !!this.state.errorMessage,
                    success: !!this.state.showMessage,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Field, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    children: "Request description - what is the purpose of this request? What will the funds be used for?"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
                                    value: this.state.description,
                                    onChange: (event)=>this.setState({
                                            description: event.target.value
                                        })
                                    ,
                                    label: "Description",
                                    labelPosition: "right",
                                    focus: true,
                                    placeholder: "Description of this request"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Field, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    children: "Value in ETH - how much is being requested?"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
                                    value: this.state.value,
                                    onChange: (event)=>this.setState({
                                            value: event.target.value
                                        })
                                    ,
                                    label: "ETH",
                                    labelPosition: "right",
                                    focus: true,
                                    placeholder: "Request value in ETH"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Field, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    children: "Recipient ETH address - who is receiving this ETH in exchange for their services?"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
                                    value: this.state.recipient,
                                    onChange: (event)=>this.setState({
                                            recipient: event.target.value
                                        })
                                    ,
                                    label: "Ethereum address",
                                    labelPosition: "right",
                                    focus: true,
                                    placeholder: "Ethereum address of the recipient"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Message, {
                            error: true,
                            header: "Something went wrong. Please check your input again.",
                            content: this.state.errorMessage
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Message, {
                            success: true,
                            header: this.state.messageHeader,
                            content: this.state.messageContent
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                            loading: this.state.loading,
                            primary: true,
                            children: "Create"
                        })
                    ]
                })
            ]
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewRequest);


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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [71], () => (__webpack_exec__(889)));
module.exports = __webpack_exports__;

})();