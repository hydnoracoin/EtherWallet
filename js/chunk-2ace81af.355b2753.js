(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2ace81af"],{"29f8":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"sign-message-container"},[s("interface-container-title",{attrs:{title:t.$t("common.signMessage")}}),s("div",{staticClass:"content-container"},[s("div",{staticClass:"send-form"},[s("p",[t._v(t._s(t.$t("interface.signMessageDesc")))]),s("div",{staticClass:"title-container"},[s("div",{staticClass:"title"},[s("h4",[t._v(t._s(t.$t("interface.txSideMenuMessage")))])])]),s("div",{staticClass:"the-form"},[s("textarea",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:t.message,expression:"message"}],staticClass:"custom-textarea-1",attrs:{name:"message"},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value)}}}),s("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("message"),expression:"errors.has('message')"}]},[t._v("\n          "+t._s(t.errors.first("message"))+"\n        ")])])]),s("div",{staticClass:"send-form"},[s("div",{staticClass:"title-container"},[s("div",{staticClass:"title"},[s("h4",[t._v(t._s(t.$t("common.signature")))]),s("popover",{attrs:{popcontent:t.$t("popover.signature")}}),s("div",{staticClass:"copy-buttons"},[s("button",{staticClass:"title-button",on:{click:function(e){return t.deleteInputText("signature")}}},[t._v("\n              "+t._s(t.$t("common.clear"))+"\n            ")]),s("button",{staticClass:"title-button",on:{click:function(e){return t.copyToClipboard("signature")}}},[t._v("\n              "+t._s(t.$t("common.copy"))+"\n            ")])])],1)]),s("div",{staticClass:"the-form domain-name"},[s("textarea",{ref:"signature",staticClass:"custom-textarea-1",attrs:{disabled:""}})])]),s("div",{staticClass:"submit-button-container"},[s("div",{staticClass:"buttons"},[s("button",{class:[t.message.length>0?"":"disabled","submit-button large-round-button-green-filled clickable"],on:{click:t.signMessage}},[t._v("\n          "+t._s(t.$t("common.sign"))+"\n        ")])]),s("interface-bottom-text",{attrs:{"link-text":t.$t("interface.helpCenter"),question:t.$t("interface.haveIssues"),link:"https://kb.myetherwallet.com"}})],1)])],1)},n=[],i=s("f499"),c=s.n(i),o=s("cebc"),r=s("2f62"),l=s("ce96"),u=s("539d"),d=s("55c1"),m=s("19c9"),g={name:"SignMessage",components:{"interface-bottom-text":u["a"],"interface-container-title":d["a"],"success-modal":m["a"]},data:function(){return{message:""}},computed:Object(o["a"])({},Object(r["b"])({account:"account",web3:"web3"})),methods:{signMessage:function(){var t=this;this.web3.eth.sign(this.message,this.account.address).then(function(e){t.$refs.signature.value=c()({address:t.account.address,msg:t.message,sig:e,version:"3",signer:t.account.isHardware?t.account.identifier:"MEW"},null,2)}).catch(function(t){Object(l["c"])(t,!1)})},copyToClipboard:function(t){this.$refs[t].select(),document.execCommand("copy"),window.getSelection().removeAllRanges()},deleteInputText:function(t){this.$refs[t].value=""}}},v=g,f=(s("3d6a"),s("2877")),p=Object(f["a"])(v,a,n,!1,null,"936b7a6c",null),b=p.exports;s.d(e,"default",function(){return b})},"3d6a":function(t,e,s){"use strict";var a=s("51dc"),n=s.n(a);n.a},"51dc":function(t,e,s){}}]);
//# sourceMappingURL=chunk-2ace81af.355b2753.js.map