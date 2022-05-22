"use strict";
(() => {
var exports = {};
exports.id = 49;
exports.ids = [49];
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

/***/ 792:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ display)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__(831);
// EXTERNAL MODULE: ./ethereum/campaign.js + 1 modules
var ethereum_campaign = __webpack_require__(165);
// EXTERNAL MODULE: ./ethereum/web3.js
var web3 = __webpack_require__(156);
// EXTERNAL MODULE: ./routes.js
var routes = __webpack_require__(262);
;// CONCATENATED MODULE: ./components/ContributionForm.js






class ContributionForm extends external_react_.Component {
    state = {
        value: "",
        errorMessage: "",
        loading: false,
        showMessage: false,
        messageHeader: "",
        messageContent: ""
    };
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
        try {
            // Get the campaign instance.
            const campaign = (0,ethereum_campaign/* default */.Z)(this.props.address);
            // Get ETH accounts and attempt to contribute the campaign.
            const accounts = await web3/* default.eth.getAccounts */.Z.eth.getAccounts();
            await campaign.methods.contribute().send({
                from: accounts[0],
                value: web3/* default.utils.toWei */.Z.utils.toWei(this.state.value, "ether")
            });
            // Contribution was successful. Show success message.
            this.setState({
                showMessage: true,
                messageHeader: "Transaction was successful.",
                messageContent: `Congratulations! You are now an official contributor to this campign and have contributed ${this.state.value} ETH.`
            });
            // Refresh the page.
            routes.Router.replaceRoute(`/campaigns/${this.props.address}`);
        } catch (error) {
            // Catch and display the error.
            this.setState({
                errorMessage: error.message,
                showMessage: false
            });
        }
        this.setState({
            loading: false,
            value: ""
        });
    };
    render() {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Form, {
            onSubmit: this.onSubmit,
            error: !!this.state.errorMessage,
            success: !!this.state.showMessage,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Form.Field, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                            children: "Enter the amount to contribute in ETH to this campaign."
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Input, {
                            value: this.state.value,
                            onChange: (event)=>this.setState({
                                    value: event.target.value
                                })
                            ,
                            label: "ETH",
                            labelPosition: "right",
                            focus: true,
                            placeholder: "Contribution amount in ETH"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Message, {
                    error: true,
                    header: "Something went wrong. Please check your input again.",
                    content: this.state.errorMessage
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Message, {
                    success: true,
                    header: this.state.messageHeader,
                    content: this.state.messageContent
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Button, {
                    loading: this.state.loading,
                    primary: true,
                    children: "Contribute!"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    style: {
                        marginTop: "2rem"
                    },
                    children: "Note that you may contribute to a campaign more than once, but will not be granted additional voting and approval rights with subsequent contributions."
                })
            ]
        });
    }
}
/* harmony default export */ const components_ContributionForm = (ContributionForm);

// EXTERNAL MODULE: ./components/Error.js
var Error = __webpack_require__(172);
;// CONCATENATED MODULE: ./pages/campaigns/display.js








class DisplayCampaign extends external_react_.Component {
    static async getInitialProps(props) {
        let campaign;
        let summary;
        try {
            campaign = (0,ethereum_campaign/* default */.Z)(props.query.address);
            summary = await campaign.methods.getSummary().call();
        } catch (error) {
            return {
                error: true
            };
        }
        return {
            minimumContribution: summary[0],
            balance: summary[1],
            requestsCount: summary[2],
            approversCount: summary[3],
            manager: summary[4],
            address: props.query.address,
            name: summary[5],
            description: summary[6],
            imageUrl: summary[7]
        };
    }
    renderCampaignDetails() {
        const { minimumContribution , balance , requestsCount , approversCount , manager , name , description , imageUrl  } = this.props;
        const details = [
            {
                header: `What is the purpose of ${name}?`,
                description: `"${description}"`,
                meta: "This is the description of this campaign.",
                color: "blue",
                fluid: true,
                image: imageUrl,
                id: "campaignImage"
            },
            {
                header: "Address of manager",
                description: "This is the address of the manager of this campaign. They can create spending requests that contributers can vote to approve or decline.",
                meta: manager,
                color: "blue",
                fluid: true
            },
            {
                header: `Minimum Contribution: ${minimumContribution} wei`,
                description: `In order to become a contributer and approver for this campaign you need to contribute at least ${minimumContribution} wei.`,
                color: "blue",
                fluid: true
            },
            {
                header: `Number of Requests for this Campaign: ${requestsCount}`,
                description: "This is the number of requests for this contract to withdraw and use some amount of money from this campaign contract, which must be approved by a majority.",
                color: "blue",
                fluid: true
            },
            {
                header: `Number of contributors: ${approversCount}`,
                description: "This is the number of individuals who have already contributed to this campaign and are able to vote on how this campaign spends its contribution proceeds.",
                color: "blue",
                fluid: true
            },
            {
                header: `ETH Campaign Balance: ${web3/* default.utils.fromWei */.Z.utils.fromWei(balance, "ether")} ETH`,
                description: "This is the current amount in ETH that has already been donated to this campaign, has not yet been spent and is available for spending requests.",
                color: "blue",
                fluid: true
            }, 
        ];
        return /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Card.Group, {
            items: details
        });
    }
    onImageError() {
        // Return default image.
        let image = document.getElementById("campaignImage").getElementsByTagName("img")[0];
        image.src = "https://images.unsplash.com/photo-1589561253898-768105ca91a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80";
    }
    render() {
        return this.props.error ? /*#__PURE__*/ jsx_runtime_.jsx(Error/* default */.Z, {}) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            style: {
                marginBottom: "3rem"
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    style: {
                        marginBottom: "2rem"
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                            style: {
                                marginBottom: "2rem"
                            },
                            children: [
                                "Campaign Details for ",
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    style: {
                                        color: "#0275d8"
                                    },
                                    children: this.props.name
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Grid, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Grid.Column, {
                                    mobile: 16,
                                    tablet: 16,
                                    computer: 9,
                                    children: this.renderCampaignDetails()
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Grid.Column, {
                                    computer: 1
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Grid.Column, {
                                    mobile: 16,
                                    tablet: 16,
                                    computer: 6,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("hr", {}),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Grid.Row, {
                                            style: {
                                                marginBottom: "6rem",
                                                marginTop: "3rem"
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                    style: {
                                                        marginBottom: "2rem"
                                                    },
                                                    children: "Become a Contributor!"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(components_ContributionForm, {
                                                    address: this.props.address
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("hr", {}),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Grid.Row, {
                                            style: {
                                                marginTop: "6rem"
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                    children: "View the current spending requests for this campaign"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(routes.Link, {
                                                    route: `/campaigns/${this.props.address}/requests`,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Button, {
                                                            primary: true,
                                                            children: "View Requests"
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    href: "https://converter.murkin.me/",
                    target: "_blank",
                    children: "Wei to ETH conversion"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Image, {
                    src: this.props.imageUrl,
                    hidden: true,
                    onError: this.onImageError
                })
            ]
        });
    }
}
/* harmony default export */ const display = (DisplayCampaign);


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
var __webpack_exports__ = __webpack_require__.X(0, [71], () => (__webpack_exec__(792)));
module.exports = __webpack_exports__;

})();