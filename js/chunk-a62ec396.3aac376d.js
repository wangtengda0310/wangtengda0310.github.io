(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a62ec396"],{"0d35":function(t,n,e){"use strict";e("96cf");var r=e("3b8d"),a=e("7c15");e("6d93");function i(t,n){return o.apply(this,arguments)}function o(){return o=Object(r["a"])(regeneratorRuntime.mark((function t(n,e){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("/api/wxpaycallback.xml",{method:"post",headers:{Accept:"application/xml","Content-Type":"application/xml"},body:"<xml><appid><![CDATA[wx2421b1c4370ec43b]]></appid><attach><![CDATA[".concat(n,"]]></attach><bank_type><![CDATA[CFT]]></bank_type><fee_type><![CDATA[CNY]]></fee_type><is_subscribe><![CDATA[Y]]></is_subscribe><mch_id><![CDATA[10000100]]></mch_id><nonce_str><![CDATA[5d2b6c2a8db53831f7eda20af46e531c]]></nonce_str><openid><![CDATA[oUpF8uMEb4qRXf22hE3X68TekukE]]></openid><out_trade_no><![CDATA[").concat(e,"]]></out_trade_no><result_code><![CDATA[SUCCESS]]></result_code><return_code><![CDATA[SUCCESS]]></return_code><sign><![CDATA[B552ED6B279343CB493C5DD0D78AB241]]></sign><time_end><![CDATA[20140903131540]]></time_end><total_fee>1</total_fee><coupon_fee><![CDATA[10]]></coupon_fee><coupon_count><![CDATA[1]]></coupon_count><coupon_type><![CDATA[CASH]]></coupon_type><coupon_id><![CDATA[10000]]></coupon_id><coupon_fee><![CDATA[100]]></coupon_fee><trade_type><![CDATA[JSAPI]]></trade_type><transaction_id><![CDATA[").concat(Date.now(),"]]></transaction_id></xml>")});case 3:return r=t.sent,console.log("xml",r),t.next=7,r.text();case 7:return a=t.sent,t.abrupt("return",a);case 11:t.prev=11,t.t0=t["catch"](0),void 0!==t.t0&&console.log("ajaxPost error",t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])}))),o.apply(this,arguments)}var s=e("4901");n["a"]={testGrit:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(n,e,r,o,c){var l,d,m,f,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:l={platform:n,openId:e,masterId:r,orderId:o},alert("production"),alert(this.$store.state.isWx),t.next=14;break;case 6:return d=t.sent,console.log("prepay",JSON.stringify(d)),alert("点击发送支付回调"),t.next=11,i("test pay grit",Date.now());case 11:this.paySuccess(),t.next=32;break;case 14:if(!this.$store.state.isWx){t.next=21;break}return t.next=17,a["a"].testGritPrepay(l);case 17:m=t.sent,s["a"].payJSAPI(m,this.paySuccess),t.next=32;break;case 21:if(!this.$store.state.isMobile){t.next=28;break}return t.next=24,a["a"].h5PrepayMaster(l);case 24:f=t.sent,window.location.href=f.url,t.next=32;break;case 28:return t.next=30,a["a"].testGritPrepay(l);case 30:u=t.sent,plus.payment.getChannels((function(t){plus.payment.request(t[0],u,this.paySuccess)}),(function(t){alert("获取支付通道列表失败："+t.message)}));case 32:case"end":return t.stop()}}),t,this)})));function n(n,e,r,a,i){return t.apply(this,arguments)}return n}()}},"1fb0":function(t,n,e){t.exports=e.p+"img/poster-short.572d8330.png"},"46bf":function(t,n,e){"use strict";e.r(n);e("96cf");var r=e("3b8d"),a=(e("7c15"),e("0d35"),function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})));function n(){return t.apply(this,arguments)}}(),{components:{},beforeCreate:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})));function n(){return t.apply(this,arguments)}return n}(),data:function(){return{list:[{name:"孙国荣",picture:e("1fb0"),desc:"穷的就剩一身肉了"}]}},methods:{details:function(t){this.$router.push({name:"trainerDetail"})}}}),i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"master-list-container"},[e("div",{staticClass:"content"},t._l(t.list,(function(n,r){return e("div",{key:r,staticClass:"item",on:{click:function(e){return t.details(n)}}},[e("div",{staticClass:"item1"},[t._m(0,!0),t._v(" "),e("div",{staticClass:"info"},[e("div",{staticClass:"line1"},[t._v(t._s(n.name))]),t._v(" "),e("div",{staticClass:"line2"},[t._v(t._s(n.desc))])])])])})),0)])},o=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"icon"},[e("img",{attrs:{src:"item.picture"}})])}],s=e("2455");function c(t){e("ce2d")}var l=!1,d=c,m="data-v-637d2615",f=null,u=Object(s["a"])(a,i,o,l,d,m,f);n["default"]=u.exports},ce2d:function(t,n,e){var r=e("e9a9");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var a=e("499e").default;a("c17e2990",r,!0,{})},e9a9:function(t,n,e){n=t.exports=e("2350")(!1),n.push([t.i,"/* basic common style */\n.flex-row[data-v-637d2615] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\n.flex-col[data-v-637d2615] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.space-around[data-v-637d2615] {\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n}\n.space-between[data-v-637d2615] {\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.flex-start[data-v-637d2615] {\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n}\n.align-items-center[data-v-637d2615] {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.flex-end[data-v-637d2615] {\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n}\n.full-width[data-v-637d2615] {\n  width: 100%;\n}\n/* 动画 */\n@-webkit-keyframes rotate-data-v-637d2615 {\n0% {\n    -webkit-transform: rotate(0);\n            transform: rotate(0);\n}\n25% {\n    -webkit-transform: rotate(-180deg);\n            transform: rotate(-180deg);\n}\n50% {\n    -webkit-transform: rotate(-360deg);\n            transform: rotate(-360deg);\n}\n75% {\n    -webkit-transform: rotate(-540deg);\n            transform: rotate(-540deg);\n}\n100% {\n    -webkit-transform: rotate(-720deg);\n            transform: rotate(-720deg);\n}\n}\n@keyframes rotate-data-v-637d2615 {\n0% {\n    -webkit-transform: rotate(0);\n            transform: rotate(0);\n}\n25% {\n    -webkit-transform: rotate(-180deg);\n            transform: rotate(-180deg);\n}\n50% {\n    -webkit-transform: rotate(-360deg);\n            transform: rotate(-360deg);\n}\n75% {\n    -webkit-transform: rotate(-540deg);\n            transform: rotate(-540deg);\n}\n100% {\n    -webkit-transform: rotate(-720deg);\n            transform: rotate(-720deg);\n}\n}\n.master-list-container .content .item[data-v-637d2615] {\n  width: 7.5rem;\n  background: #ffffff;\n  margin-top: 0.2rem;\n  padding-bottom: 0.2rem;\n}\n.master-list-container .content .item .item1[data-v-637d2615] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  height: 1.88rem;\n  position: relative;\n}\n.master-list-container .content .item .item1 .icon[data-v-637d2615] {\n  margin-left: 0.32rem;\n  margin-top: 0.2rem;\n}\n.master-list-container .content .item .item1 .icon img[data-v-637d2615] {\n  width: 1.68rem;\n  height: 1.68rem;\n  background: #d8d8d8;\n  border-radius: 0.12rem;\n}\n.master-list-container .content .item .item1 .info[data-v-637d2615] {\n  margin-left: 0.2rem;\n  margin-top: 0.2rem;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  height: 1.68rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n}\n.master-list-container .content .item .item1 .info .line1[data-v-637d2615] {\n  height: 0.44rem;\n  font-size: 0.32rem;\n  font-family: PingFangSC-Semibold, PingFang SC;\n  font-weight: 600;\n  color: #333333;\n  line-height: 0.44rem;\n}\n.master-list-container .content .item .item1 .info .line2[data-v-637d2615] {\n  width: 4.26;\n  height: 0.34rem;\n  font-size: 0.24rem;\n  font-family: PingFangSC-Regular, PingFang SC;\n  font-weight: 400;\n  color: #333333;\n  line-height: 0.34rem;\n}\n.master-list-container .content .item .item1 .info .line3[data-v-637d2615] {\n  width: 100%;\n  height: 0.28rem;\n  font-size: 0.2rem;\n  font-family: PingFangSC-Regular, PingFang SC;\n  font-weight: 400;\n  color: #333333;\n  line-height: 0.28rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\n.master-list-container .content .item .item1 .info .line3 div[data-v-637d2615] {\n  height: 0.28rem;\n  background: #ededed;\n  margin-right: 0.14rem;\n}\n",""])}}]);