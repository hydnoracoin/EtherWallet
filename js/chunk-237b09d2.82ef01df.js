(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-237b09d2"],{a675:function(e,s,t){"use strict";(function(e){t("6b54");var r=t("cebc"),a=t("539d"),i=t("55c1"),n=t("ce96"),o=t("2f62");t("6983");s["a"]={components:{"interface-bottom-text":a["a"],"interface-container-title":i["a"]},data:function(){return{message:"",error:{show:!1,msg:""},showMessage:!1}},computed:Object(r["a"])({},Object(o["b"])({web3:"web3"})),watch:{message:function(e){this.message=e,this.error={show:!1,msg:""}}},methods:{copyToClipboard:function(){this.$refs.signature.select(),document.execCommand("copy"),window.getSelection().removeAllRanges()},deleteInput:function(){this.$refs.signature.value=""},verifyMessage:function(){var s=JSON.parse(this.message),t=n["d"].hashPersonalMessage(n["d"].toBuffer(s.msg)),r=e.from(n["d"].getNakedAddress(s.sig),"hex");if(65!==r.length)return this.error.show=!0,void(this.error.msg="Something went terribly WRONG!!!!");r[64]=0===r[64]||1===r[64]?r[64]+27:r[64],"3"===s.version?"trezor"===s.signer?t=n["d"].getTrezorHash(s.msg):"ledger"===s.signer&&(t=n["d"].hashPersonalMessage(e.from(s.msg))):"1"===s.version&&(t=this.web3.utils.sha3(s.msg));var a=n["d"].ecrecover(t,r[64],r.slice(0,32),r.slice(32,64));n["d"].getNakedAddress(s.address)!==n["d"].pubToAddress(a).toString("hex")?(this.error.show=!0,this.error.msg="Something went terribly WRONG!!!!"):this.showMessage=!0}}}}).call(this,t("1c35").Buffer)},bb65:function(e,s,t){"use strict";t.r(s);var r=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"verify-message-container"},[t("interface-container-title",{attrs:{title:e.$t("common.verifyMessage")}}),t("div",{staticClass:"content-container"},[t("div",{staticClass:"send-form"},[t("div",{staticClass:"title-container"},[t("div",{staticClass:"title"},[t("h4",[e._v("Signature:")]),t("div",{staticClass:"copy-buttons"},[t("span",{on:{click:e.deleteInput}},[e._v(e._s(e.$t("common.clear")))]),t("span",{on:{click:e.copyToClipboard}},[e._v(e._s(e.$t("common.copy")))])])])]),t("div",{staticClass:"the-form signature"},[t("textarea",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:e.message,expression:"message"}],ref:"signature",staticClass:"custom-textarea-1",attrs:{name:"verify"},domProps:{value:e.message},on:{input:function(s){s.target.composing||(e.message=s.target.value)}}})]),t("div",[""!==e.message&&!0===e.showMessage?t("p",[e._v("\n          "+e._s(JSON.parse(e.message).address)+"\n          "+e._s(e.$t("interface.verifiedMessage"))+":"),JSON.parse(e.message).msg.length>20?t("br"):e._e(),t("b",[e._v(e._s(JSON.parse(e.message).msg))])]):e._e(),""!==e.message&&!0===e.error.show?t("p",[e._v(e._s(e.error.show))]):e._e(),e.errors.has("verify")?t("p",[e._v(e._s(e.errors.first("verify")))]):e._e()])]),t("div",{staticClass:"submit-button-container"},[t("div",{staticClass:"buttons"},[t("button",{class:[e.errors.has("verify")||!0===e.error.show||""===e.message?"disabled":"","submit-button large-round-button-green-filled clickable"],on:{click:e.verifyMessage}},[e._v("\n          "+e._s(e.$t("common.verifyMessage"))+"\n        ")])]),t("interface-bottom-text",{attrs:{"link-text":e.$t("interface.helpCenter"),question:e.$t("interface.haveIssues"),link:"https://kb.myetherwallet.com"}})],1)])],1)},a=[],i=t("a675"),n=i["a"],o=(t("dd60"),t("2877")),c=Object(o["a"])(n,r,a,!1,null,"21c24a44",null),l=c.exports;t.d(s,"default",function(){return l})},bbac:function(e,s,t){},dd60:function(e,s,t){"use strict";var r=t("bbac"),a=t.n(r);a.a}}]);
//# sourceMappingURL=chunk-237b09d2.82ef01df.js.map