"use strict";
(() => {
var exports = {};
exports.id = 73;
exports.ids = [73];
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

/***/ 85:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ requests)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__(831);
// EXTERNAL MODULE: ./routes.js
var routes = __webpack_require__(262);
// EXTERNAL MODULE: ./ethereum/campaign.js + 1 modules
var ethereum_campaign = __webpack_require__(165);
// EXTERNAL MODULE: ./ethereum/web3.js
var web3 = __webpack_require__(156);
;// CONCATENATED MODULE: ./components/RequestRow.js






class RequestRow extends external_react_.Component {
    state = {
        value: "",
        errorMessage: "",
        loadingApproval: false,
        loadingFinalization: false,
        showMessage: false,
        messageContent: ""
    };
    onApprove = async ()=>{
        this.initializeLoading(false);
        try {
            const campaign = (0,ethereum_campaign/* default */.Z)(this.props.address);
            const accounts = await web3/* default.eth.getAccounts */.Z.eth.getAccounts();
            await campaign.methods.approveRequest(this.props.id).send({
                from: accounts[0]
            });
            // Approval was successful. Show success message.
            this.setState({
                showMessage: true,
                messageHeader: "Transaction was successful.",
                messageContent: `You have successfully approved this request.`
            });
        } catch (error) {
            // Catch and display the error.
            this.setState({
                errorMessage: error.message,
                showMessage: false,
                loadingFinalization: false,
                loadingApproval: false
            });
        }
        this.setState({
            loadingFinalization: false,
            loadingApproval: false,
            value: ""
        });
        // Refresh the page to the updated state.
        routes.Router.pushRoute(`/campaigns/${this.props.address}/requests`);
    };
    onFinalize = async ()=>{
        this.initializeLoading(true);
        try {
            const campaign = (0,ethereum_campaign/* default */.Z)(this.props.address);
            const accounts = await web3/* default.eth.getAccounts */.Z.eth.getAccounts();
            await campaign.methods.finalizeRequest(this.props.id).send({
                from: accounts[0]
            });
            // Finalization was successful. Show success message.
            this.setState({
                showMessage: true,
                messageHeader: "Transaction was successful.",
                messageContent: `This request has now been finalized.`
            });
        } catch (error) {
            // Catch and display the error.
            this.setState({
                errorMessage: error.message,
                showMessage: false,
                loadingFinalization: false,
                loadingApproval: false
            });
        }
        this.setState({
            loadingFinalization: false,
            loadingApproval: false,
            value: ""
        });
        // Refresh the page to update state.
        routes.Router.pushRoute(`/campaigns/${this.props.address}/requests`);
    };
    initializeLoading = (isFinalization)=>{
        // Set loading details.
        this.setState({
            loadingFinalization: isFinalization,
            loadingApproval: !isFinalization,
            errorMessage: "",
            showMessage: true,
            messageContent: "Please wait... Your transaction is in progress and could take up to 30 seconds to process once initiated."
        });
    };
    render() {
        const { Row , Cell  } = external_semantic_ui_react_.Table;
        const { id , request , contributorCount  } = this.props;
        const readyToBeFinalized = request.approvalCount > contributorCount / 2;
        const finalizedMessage = "This request has already been approved and finalized";
        const approvedMessage = "This request has already been approved and can now be finalized by the manager.";
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Row, {
            disabled: request.complete,
            error: !!this.state.errorMessage,
            positive: !!this.state.showMessage,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Cell, {
                    children: id
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Cell, {
                    children: request.description
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Cell, {
                    children: [
                        web3/* default.utils.fromWei */.Z.utils.fromWei(request.value, "ether"),
                        " ETH"
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Cell, {
                    children: request.recipient
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Cell, {
                    positive: readyToBeFinalized,
                    children: [
                        request.approvalCount,
                        " / ",
                        contributorCount
                    ]
                }),
                request.complete ? /*#__PURE__*/ jsx_runtime_.jsx(Cell, {}) : /*#__PURE__*/ jsx_runtime_.jsx(Cell, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Button, {
                        color: "blue",
                        basic: true,
                        loading: this.state.loadingApproval,
                        onClick: this.onApprove,
                        children: "Approve"
                    })
                }),
                request.complete ? /*#__PURE__*/ jsx_runtime_.jsx(Cell, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Button, {
                        disabled: true,
                        color: "purple",
                        basic: true,
                        onClick: this.onFinalize,
                        children: "Finalized"
                    })
                }) : readyToBeFinalized ? /*#__PURE__*/ jsx_runtime_.jsx(Cell, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Button, {
                        color: "purple",
                        basic: true,
                        loading: this.state.loadingFinalization,
                        onClick: this.onFinalize,
                        children: "Finalize"
                    })
                }) : /*#__PURE__*/ jsx_runtime_.jsx(Cell, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Button, {
                        disabled: true,
                        color: "purple",
                        basic: true,
                        onClick: this.onFinalize,
                        children: "Finalize"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Cell, {
                    children: this.state.errorMessage ? this.state.errorMessage : this.state.showMessage ? this.state.messageContent : request.complete ? finalizedMessage : readyToBeFinalized ? approvedMessage : "This request does not have more than 50% approval and cannot be finalized until it does so."
                })
            ]
        });
    }
}
/* harmony default export */ const components_RequestRow = (RequestRow);

// EXTERNAL MODULE: ./components/Error.js
var Error = __webpack_require__(172);
;// CONCATENATED MODULE: ./pages/campaigns/requests/index.js







class RequestIndex extends external_react_.Component {
    static async getInitialProps(props) {
        const { address  } = props.query;
        let campaign;
        let requestCount;
        let contributorCount;
        let requests;
        try {
            // Get the campaign's number of requests and contributors.
            campaign = (0,ethereum_campaign/* default */.Z)(address);
            requestCount = await campaign.methods.getRequestsCount().call();
            contributorCount = await campaign.methods.approversCount().call();
            // Solidity does not support returning an array of structs.
            requests = await Promise.all(Array(parseInt(requestCount)).fill().map((element, index)=>{
                return campaign.methods.requests(index).call();
            }));
        } catch (error) {
            return {
                error: true
            };
        }
        return {
            address,
            requests,
            requestCount,
            contributorCount,
            campaign
        };
    }
    renderTableRows() {
        return this.props.requests.map((request, index)=>{
            return /*#__PURE__*/ jsx_runtime_.jsx(components_RequestRow, {
                id: index,
                request: request,
                address: this.props.address,
                contributorCount: this.props.contributorCount
            }, index);
        });
    }
    render() {
        const { Header , Row , HeaderCell , Body  } = external_semantic_ui_react_.Table;
        return this.props.error ? /*#__PURE__*/ jsx_runtime_.jsx(Error/* default */.Z, {}) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                    children: "Campaign Requests"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: "Requests can be finalized here by the manager only. The option will be available once more than 50% of contributors have approved the request. If you attempt to finalize a request and are not a manager, it will get rejected and you will lose your gas."
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: "If you have already contributed to this campaign, you can approve requests here."
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                            children: [
                                "This campaign has a total of ",
                                this.props.requestCount,
                                " requests."
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Table, {
                    celled: true,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Header, {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Row, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(HeaderCell, {
                                        children: "ID"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(HeaderCell, {
                                        children: "Description"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(HeaderCell, {
                                        children: "Amount"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(HeaderCell, {
                                        children: "Recipient"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(HeaderCell, {
                                        children: "Approval Count"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(HeaderCell, {
                                        children: "Approve"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(HeaderCell, {
                                        children: "Finalize"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(HeaderCell, {
                                        children: "Comment"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Body, {
                            children: this.renderTableRows()
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row justify-content-md-center",
                    children: this.props.requestCount == 0 && "This campaign has no requests."
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("hr", {}),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    children: "If you are the campaign manager, you can create a new spending request here."
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(routes.Link, {
                    route: `/campaigns/${this.props.address}/requests/new`,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Button, {
                            primary: true,
                            children: "Create Request"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("hr", {})
            ]
        });
    }
}
/* harmony default export */ const requests = (RequestIndex);


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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [71], () => (__webpack_exec__(85)));
module.exports = __webpack_exports__;

})();