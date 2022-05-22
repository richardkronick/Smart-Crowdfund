(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[49],{57845:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/campaigns/display",function(){return n(9792)}])},5172:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(85893),o=(n(67294),n(80967));function a(){return(0,r.jsx)("div",{className:"row justify-content-md-center",style:{marginTop:"6rem",marginBottom:"2rem"},children:(0,r.jsx)(o.Z,{negative:!0,children:"Something went wrong. Most likely you are not connected to MetaMask, or you are not on the Rinkeby network. Please connect to Rinkeby via MetaMask and refresh the page."})})}},9792:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return W}});var r=n(34051),o=n.n(r),a=n(85893),i=n(67294),s=n(63762),c=n(18005),u=n(80967),l=n(80650),f=n(83165),p=n(67156),h=n(75424),d=n(60416),m=n(68156),g=n(50262);function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t,n,r,o,a,i){try{var s=e[a](i),c=s.value}catch(u){return void n(u)}s.done?t(c):Promise.resolve(c).then(r,o)}function v(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){y(a,r,o,i,s,"next",e)}function s(e){y(a,r,o,i,s,"throw",e)}i(void 0)}))}}function w(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function C(e){return C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},C(e)}function _(e,t){return!t||"object"!==T(t)&&"function"!==typeof t?b(e):t}function k(e,t){return k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},k(e,t)}var T=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function E(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=C(e);if(t){var o=C(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return _(this,n)}}var O=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}(s,e);var t,n,r,i=E(s);function s(){var e;w(this,s),j(b(e=i.apply(this,arguments)),"state",{value:"",errorMessage:"",loading:!1,showMessage:!1,messageHeader:"",messageContent:""});var t=b(e);return j(b(e),"onSubmit",function(){var e=v(o().mark((function e(n){var r,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),t.setState({loading:!0,errorMessage:"",showMessage:!0,messageHeader:"Please wait...",messageContent:"Your transaction is in progress and could take up to 30 seconds to process once initiated."}),e.prev=2,r=(0,f.Z)(t.props.address),e.next=6,p.Z.eth.getAccounts();case 6:return a=e.sent,e.next=9,r.methods.contribute().send({from:a[0],value:p.Z.utils.toWei(t.state.value,"ether")});case 9:t.setState({showMessage:!0,messageHeader:"Transaction was successful.",messageContent:"Congratulations! You are now an official contributor to this campign and have contributed ".concat(t.state.value," ETH.")}),g.Router.replaceRoute("/campaigns/".concat(t.props.address)),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),t.setState({errorMessage:e.t0.message,showMessage:!1});case 16:t.setState({loading:!1,value:""});case 17:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(t){return e.apply(this,arguments)}}()),e}return t=s,(n=[{key:"render",value:function(){var e=this;return(0,a.jsxs)(h.Z,{onSubmit:this.onSubmit,error:!!this.state.errorMessage,success:!!this.state.showMessage,children:[(0,a.jsxs)(h.Z.Field,{children:[(0,a.jsx)("label",{children:"Enter the amount to contribute in ETH to this campaign."}),(0,a.jsx)(d.Z,{value:this.state.value,onChange:function(t){return e.setState({value:t.target.value})},label:"ETH",labelPosition:"right",focus:!0,placeholder:"Contribution amount in ETH"})]}),(0,a.jsx)(m.Z,{error:!0,header:"Something went wrong. Please check your input again.",content:this.state.errorMessage}),(0,a.jsx)(m.Z,{success:!0,header:this.state.messageHeader,content:this.state.messageContent}),(0,a.jsx)(u.Z,{loading:this.state.loading,primary:!0,children:"Contribute!"}),(0,a.jsx)("div",{style:{marginTop:"2rem"},children:"Note that you may contribute to a campaign more than once, but will not be granted additional voting and approval rights with subsequent contributions."})]})}}])&&x(t.prototype,n),r&&x(t,r),s}(i.Component),P=O,Z=n(5172);function R(e,t,n,r,o,a,i){try{var s=e[a](i),c=s.value}catch(u){return void n(u)}s.done?t(c):Promise.resolve(c).then(r,o)}function M(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function B(e){return B=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},B(e)}function H(e,t){return!t||"object"!==N(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function q(e,t){return q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},q(e,t)}var N=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function I(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=B(e);if(t){var o=B(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return H(this,n)}}var D=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&q(e,t)}(h,e);var t,n,r,i=I(h);function h(){return M(this,h),i.apply(this,arguments)}return t=h,r=[{key:"getInitialProps",value:function(e){return(t=o().mark((function t(){var n,r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=2,n=(0,f.Z)(e.query.address),t.next=6,n.methods.getSummary().call();case 6:r=t.sent,t.next=12;break;case 9:return t.prev=9,t.t0=t.catch(2),t.abrupt("return",{error:!0});case 12:return t.abrupt("return",{minimumContribution:r[0],balance:r[1],requestsCount:r[2],approversCount:r[3],manager:r[4],address:e.query.address,name:r[5],description:r[6],imageUrl:r[7]});case 13:case"end":return t.stop()}}),t,null,[[2,9]])})),function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function i(e){R(a,r,o,i,s,"next",e)}function s(e){R(a,r,o,i,s,"throw",e)}i(void 0)}))})();var t}}],(n=[{key:"renderCampaignDetails",value:function(){var e=this.props,t=e.minimumContribution,n=e.balance,r=e.requestsCount,o=e.approversCount,i=e.manager,c=e.name,u=e.description,l=e.imageUrl,f=[{header:"What is the purpose of ".concat(c,"?"),description:'"'.concat(u,'"'),meta:"This is the description of this campaign.",color:"blue",fluid:!0,image:l,id:"campaignImage"},{header:"Address of manager",description:"This is the address of the manager of this campaign. They can create spending requests that contributers can vote to approve or decline.",meta:i,color:"blue",fluid:!0},{header:"Minimum Contribution: ".concat(t," wei"),description:"In order to become a contributer and approver for this campaign you need to contribute at least ".concat(t," wei."),color:"blue",fluid:!0},{header:"Number of Requests for this Campaign: ".concat(r),description:"This is the number of requests for this contract to withdraw and use some amount of money from this campaign contract, which must be approved by a majority.",color:"blue",fluid:!0},{header:"Number of contributors: ".concat(o),description:"This is the number of individuals who have already contributed to this campaign and are able to vote on how this campaign spends its contribution proceeds.",color:"blue",fluid:!0},{header:"ETH Campaign Balance: ".concat(p.Z.utils.fromWei(n,"ether")," ETH"),description:"This is the current amount in ETH that has already been donated to this campaign, has not yet been spent and is available for spending requests.",color:"blue",fluid:!0}];return(0,a.jsx)(s.Z.Group,{items:f})}},{key:"onImageError",value:function(){document.getElementById("campaignImage").getElementsByTagName("img")[0].src="https://images.unsplash.com/photo-1589561253898-768105ca91a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"}},{key:"render",value:function(){return this.props.error?(0,a.jsx)(Z.Z,{}):(0,a.jsxs)("div",{style:{marginBottom:"3rem"},children:[(0,a.jsxs)("div",{style:{marginBottom:"2rem"},children:[(0,a.jsxs)("h2",{style:{marginBottom:"2rem"},children:["Campaign Details for ",(0,a.jsx)("span",{style:{color:"#0275d8"},children:this.props.name})]}),(0,a.jsxs)(c.Z,{children:[(0,a.jsx)(c.Z.Column,{mobile:16,tablet:16,computer:9,children:this.renderCampaignDetails()}),(0,a.jsx)(c.Z.Column,{computer:1}),(0,a.jsxs)(c.Z.Column,{mobile:16,tablet:16,computer:6,children:[(0,a.jsx)("hr",{}),(0,a.jsxs)(c.Z.Row,{style:{marginBottom:"6rem",marginTop:"3rem"},children:[(0,a.jsx)("h3",{style:{marginBottom:"2rem"},children:"Become a Contributor!"}),(0,a.jsx)(P,{address:this.props.address})]}),(0,a.jsx)("hr",{}),(0,a.jsxs)(c.Z.Row,{style:{marginTop:"6rem"},children:[(0,a.jsx)("h4",{children:"View the current spending requests for this campaign"}),(0,a.jsx)(g.Link,{route:"/campaigns/".concat(this.props.address,"/requests"),children:(0,a.jsx)("a",{children:(0,a.jsx)(u.Z,{primary:!0,children:"View Requests"})})})]})]})]})]}),(0,a.jsx)("a",{href:"https://converter.murkin.me/",target:"_blank",children:"Wei to ETH conversion"}),(0,a.jsx)(l.Z,{src:this.props.imageUrl,hidden:!0,onError:this.onImageError})]})}}])&&S(t.prototype,n),r&&S(t,r),h}(i.Component),W=D}},function(e){e.O(0,[482,714,389,578,299,762,774,888,179],(function(){return t=57845,e(e.s=t);var t}));var t=e.O();_N_E=t}]);