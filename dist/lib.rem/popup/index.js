/*!
 * vue-ydui
 *             v:1.2.0
 *             build:2019-12-05 17:35:52
 *             by YDCSS (c)  Licensed MIT
 *             由于原作者已经基本不维护此组件库，所以我在此基础上又新增几个组件
 *             msb-special 组件为新建递归组件(组件支持排序，字段为order)
 *             inputType:枚举值;
 *             input:输入框
 *             list:下拉列表,options [{value,text}]
 *             select,yz-select:下拉列表,options [{factorValue,factorName}]
 *             search-select:带搜索的下拉列表
 *             datetime:日期控件
 *             addressInput:地址选择控件
 *             
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.ydui=e():t.ydui=e()}(this,function(){return function(t){function e(n){if(o[n])return o[n].exports;var i=o[n]={exports:{},id:n,loaded:!1};return t[n].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var o={};return e.m=t,e.c=o,e.p="/dist/",e(0)}({0:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.PopupCity=e.Popup=void 0;var i=o(210),r=n(i),s=o(211),a=n(s);e.Popup=r.default,e.PopupCity=a.default},1:function(t,e){t.exports=function(t,e,o,n){var i,r=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(i=t,r=t.default);var a="function"==typeof r?r.options:r;if(e&&(a.render=e.render,a.staticRenderFns=e.staticRenderFns),o&&(a._scopeId=o),n){var l=a.computed||(a.computed={});Object.keys(n).forEach(function(t){var e=n[t];l[t]=function(){return e}})}return{esModule:i,exports:r,options:a}}},2:function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var o=this[e];o[2]?t.push("@media "+o[2]+"{"+o[1]+"}"):t.push(o[1])}return t.join("")},t.i=function(e,o){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},i=0;i<this.length;i++){var r=this[i][0];"number"==typeof r&&(n[r]=!0)}for(i=0;i<e.length;i++){var s=e[i];"number"==typeof s[0]&&n[s[0]]||(o&&!s[2]?s[2]=o:o&&(s[2]="("+s[2]+") and ("+o+")"),t.push(s))}},t}},3:function(t,e,o){function n(t){for(var e=0;e<t.length;e++){var o=t[e],n=p[o.id];if(n){n.refs++;for(var i=0;i<n.parts.length;i++)n.parts[i](o.parts[i]);for(;i<o.parts.length;i++)n.parts.push(r(o.parts[i]));n.parts.length>o.parts.length&&(n.parts.length=o.parts.length)}else{for(var s=[],i=0;i<o.parts.length;i++)s.push(r(o.parts[i]));p[o.id]={id:o.id,refs:1,parts:s}}}}function i(){var t=document.createElement("style");return t.type="text/css",u.appendChild(t),t}function r(t){var e,o,n=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(n){if(h)return m;n.parentNode.removeChild(n)}if(y){var r=f++;n=d||(d=i()),e=s.bind(null,n,r,!1),o=s.bind(null,n,r,!0)}else n=i(),e=a.bind(null,n),o=function(){n.parentNode.removeChild(n)};return e(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;e(t=n)}else o()}}function s(t,e,o,n){var i=o?"":n.css;if(t.styleSheet)t.styleSheet.cssText=v(e,i);else{var r=document.createTextNode(i),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(r,s[e]):t.appendChild(r)}}function a(t,e){var o=e.css,n=e.media,i=e.sourceMap;if(n&&t.setAttribute("media",n),i&&(o+="\n/*# sourceURL="+i.sources[0]+" */",o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),t.styleSheet)t.styleSheet.cssText=o;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(o))}}var l="undefined"!=typeof document,c=o(4),p={},u=l&&(document.head||document.getElementsByTagName("head")[0]),d=null,f=0,h=!1,m=function(){},y="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,o){h=o;var i=c(t,e);return n(i),function(e){for(var o=[],r=0;r<i.length;r++){var s=i[r],a=p[s.id];a.refs--,o.push(a)}e?(i=c(t,e),n(i)):i=[];for(var r=0;r<o.length;r++){var a=o[r];if(0===a.refs){for(var l=0;l<a.parts.length;l++)a.parts[l]();delete p[a.id]}}}};var v=function(){var t=[];return function(e,o){return t[e]=o,t.filter(Boolean).join("\n")}}()},4:function(t,e){t.exports=function(t,e){for(var o=[],n={},i=0;i<e.length;i++){var r=e[i],s=r[0],a=r[1],l=r[2],c=r[3],p={id:t+":"+i,css:a,media:l,sourceMap:c};n[s]?n[s].parts.push(p):o.push(n[s]={id:s,parts:[p]})}return o}},5:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(){var t=function(t){t.preventDefault(),t.stopPropagation()},e=!1;return{lock:function(o){e||(e=!0,(o||document).addEventListener("touchmove",t))},unlock:function(o){e=!1,(o||document).removeEventListener("touchmove",t)}}}(),n=function(t){var e=void 0;return{lock:function(){e=document.scrollingElement.scrollTop,document.body.classList.add(t),document.body.style.top=-e+"px"},unlock:function(){document.body.classList.remove(t),document.scrollingElement.scrollTop=e}}}("g-fix-ios-prevent-scroll"),i=!!(window.navigator&&window.navigator.userAgent||"").match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),r=function(t){var e=/^#([a-fA-F0-9]){3}(([a-fA-F0-9]){3})?$/,o=/^[rR][gG][bB][aA]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){3}\s*(\.|\d+\.)?\d+\s*\)$/,n=/^[rR][gG][bB]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){2}(25[0-5]|2[0-4]\d|1?\d{1,2})\s*\)$/;return e.test(t)||o.test(t)||n.test(t)},s=function(t){for(var e=t.offsetTop;t=t.offsetParent;)e+=t.offsetTop;return e},a=function(t){for(var e=t;e&&"HTML"!==e.tagName&&"BODY"!==e.tagName&&1===e.nodeType;){var o=document.defaultView.getComputedStyle(e).overflowY;if("scroll"===o||"auto"===o)return e;e=e.parentNode}return window},l=function(t,e){var o=t===window?document.body.offsetHeight:t.offsetHeight,n=t===window?0:t.getBoundingClientRect().top,i=e.getBoundingClientRect().top-n,r=i+e.offsetHeight;return i>=0&&i<o||r>0&&r<=o},c=function(t,e){return e=e||"",!(0===e.replace(/\s/g,"").length||!t)&&new RegExp(" "+e+" ").test(" "+t.className+" ")},p=function(t,e){c(t,e)||(t.className=""===t.className?e:t.className+" "+e)},u=function(t,e){if(c(t,e)){for(var o=" "+t.className.replace(/[\t\r\n]/g,"")+" ";o.indexOf(" "+e+" ")>=0;)o=o.replace(" "+e+" "," ");t.className=o.replace(/^\s+|\s+$/g,"")}},d=function(t,e,o){t instanceof Array||console.error("sortBy Error:","arr is not an array");for(var n=[],i=[],r=!1,s=0;s<t.length;s++){var a=t[s],l=a&&a[e]||"";(i[s]=new String(l))._obj=a}for(var c=0;c<t.length;c++){if("number"==typeof t[c][e]){r=!0;break}if("string"==typeof t[c][e]){r=!1;break}}r?i.sort(function(t,e){return t-e}):i.sort();for(var p=0;p<t.length;p++)n[p]=i[p]._obj;return"desc"===o&&n.reverse(),n},f=function(t){function e(o,n,i){if(o===n)return void("function"==typeof r&&r());var s=o+i>n?n:o+i;o>n&&(s=o-i<n?n:o-i),t===window?window.scrollTo(s,s):t.scrollTop=s,window.requestAnimationFrame(function(){return e(s,n,i)})}var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments[2],i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500,r=arguments[4];window.requestAnimationFrame||(window.requestAnimationFrame=window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return window.setTimeout(t,1e3/60)});var s=Math.abs(o-n),a=Math.ceil(s/i*50);e(o,n,a)};e.pageScroll=o,e.preventScroll=n,e.isIOS=i,e.isColor=r,e.getPos=s,e.getScrollview=a,e.checkInview=l,e.addClass=p,e.removeClass=u,e.scrollTop=f,e.sortBy=d},8:function(t,e,o){o(12);var n=o(1)(o(9),o(11),null,null);t.exports=n.exports},9:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(5);e.default={name:"yd-mask",data:function(){return{show:this.value}},props:{value:{type:Boolean,default:!1},bgcolor:{type:String,default:"#000"},zindex:{default:1500},opacity:{default:.5},animated:{type:Boolean,default:!0}},watch:{value:function(t){var e=this;this.show=t,n.isIOS&&(t?(0,n.addClass)(this.scrollView,"g-fix-ios-overflow-scrolling-bug"):setTimeout(function(){(0,n.removeClass)(e.scrollView,"g-fix-ios-overflow-scrolling-bug")},200))}},computed:{styles:function(){var t={"z-index":this.zindex,"background-color":this.bgcolor};return this.show&&(t.opacity=this.opacity,t["pointer-events"]="auto"),t}},mounted:function(){this.scrollView=(0,n.getScrollview)(this.$el)},beforeDestroy:function(){n.isIOS&&(0,n.removeClass)(this.scrollView,"g-fix-ios-overflow-scrolling-bug")}}},10:function(t,e,o){e=t.exports=o(2)(),e.push([t.id,".yd-mask{position:fixed;bottom:0;right:0;left:0;top:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;pointer-events:none;-webkit-transition:opacity .2s ease-in;transition:opacity .2s ease-in;opacity:0}",""])},11:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"yd-mask",style:t.styles},[t._t("default")],2)},staticRenderFns:[]}},12:function(t,e,o){var n=o(10);"string"==typeof n&&(n=[[t.id,n,""]]),n.locals&&(t.exports=n.locals);o(3)("006b3452",n,!0)},80:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=o(5),r=o(8),s=n(r);e.default={name:"yd-popup",components:{"yd-mask":s.default},data:function(){return{show:this.value}},props:{position:{validator:function(t){return["bottom","center","left","right"].indexOf(t)>-1},default:"bottom"},height:{type:String,default:"auto"},width:{type:String,default:"auto"},value:{type:Boolean},closeOnMasker:{type:Boolean,default:!0},maskerOpacity:{validator:function(t){return/^([0]|[1-9]\d*)?(\.\d*)?$/.test(t)},default:.5}},watch:{value:function(t){t?i.preventScroll.lock():i.preventScroll.unlock(),this.show=t}},computed:{classes:function(){return("center"===this.position?"yd-popup-center ":"yd-popup yd-popup-"+this.position)+(this.show?" yd-popup-show ":"")},styles:function(){return"left"===this.position||"right"===this.position?{width:this.width}:"bottom"===this.position?{width:"100%",height:this.height}:{width:this.width,height:this.height}}},methods:{close:function(){this.closeOnMasker&&(this.show=!1,this.$emit("input",!1))}},beforeDestroy:function(){i.preventScroll.unlock()}}},81:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=o(5),r=o(8),s=n(r),a=o(!function(){var t=new Error('Cannot find module "../../accordion/index"');throw t.code="MODULE_NOT_FOUND",t}()),l=o(!function(){var t=new Error('Cannot find module "../../checklist/index"');throw t.code="MODULE_NOT_FOUND",t}()),c=o(!function(){var t=new Error('Cannot find module "../../button/index"');throw t.code="MODULE_NOT_FOUND",t}());e.default={name:"yd-popup-city",components:{"yd-mask":s.default,"yd-accordion":a.Accordion,"yd-accordion-item":a.AccordionItem,"yd-checklist":l.CheckList,"yd-checklist-item":l.CheckListItem,"yd-button":c.Button},data:function(){return{show:this.popupData.open,cityList:this.cityData,select:[]}},props:{popupData:{type:Object,default:{open:!1,value:""}},position:{validator:function(t){return["bottom","center","left","right"].indexOf(t)>-1},default:"bottom"},cityData:{type:Array},height:{type:String,default:"auto"},width:{type:String,default:"auto"},closeOnMasker:{type:Boolean,default:!0},maxCity:{type:Number,default:13}},watch:{"popupData.open":function(t){t?i.preventScroll.lock():i.preventScroll.unlock(),this.show=t}},computed:{classes:function(){return("center"===this.position?"yd-popup-center ":"yd-popup yd-popup-"+this.position)+(this.show?" yd-popup-show ":"")},styles:function(){return"left"===this.position||"right"===this.position?{width:this.width}:"bottom"===this.position?{width:"100%",height:this.height}:{width:this.width,height:this.height}},selectCity:function(){var t=this;return t.select=[],this.cityList.forEach(function(e){t.select=t.select.concat(e.select)}),t.select.length>t.maxCity?(this.$dialog.notify({mes:"最多只能选择"+t.maxCity+"个城市,多选无效",timeout:5e3}),t.select.slice(0,t.maxCity-1)):t.select}},methods:{close:function(){if(this.closeOnMasker){this.show=!1;var t=this.popupData,e="";this.select.forEach(function(t){e+=t+";"}),e.length>0&&(e=e.substring(0,e.length-1)),t.open=!1,t.value=e,this.$emit("input",t),this.$emit("select-city",e)}}},destroyed:function(){i.preventScroll.unlock()}}},130:function(t,e,o){e=t.exports=o(2)(),e.push([t.id,".yd-popup{position:fixed;background-color:#fff;z-index:1501;-webkit-transition:-webkit-transform .2s;transition:-webkit-transform .2s;transition:transform .2s;transition:transform .2s,-webkit-transform .2s;pointer-events:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.yd-popup-content{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;position:relative;overflow-y:auto;-webkit-overflow-scrolling:touch}.yd-popup-left{-webkit-transform:translate(-100%);transform:translate(-100%);left:0;top:0;height:100%}.yd-popup-right{-webkit-transform:translate(100%);transform:translate(100%);right:0;top:0;height:100%}.yd-popup-bottom{-webkit-transform:translateY(100%);transform:translateY(100%);right:0;bottom:0}.yd-popup-show{pointer-events:auto;-webkit-transform:translate(0);transform:translate(0)}.yd-popup-center{background-color:#fff;z-index:1502;position:fixed;top:50%;left:50%;opacity:0;-webkit-transform:translate(-50%,-50%) scale(.95);transform:translate(-50%,-50%) scale(.95);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-transition:-webkit-transform .1s;transition:-webkit-transform .1s;transition:transform .1s;transition:transform .1s,-webkit-transform .1s;border-radius:2px}.yd-popup-center,.yd-popup-center *{pointer-events:none}.yd-popup-center.yd-popup-show{opacity:1;-webkit-transform:translate(-50%,-50%) scale(1);transform:translate(-50%,-50%) scale(1);pointer-events:auto}.yd-popup-center.yd-popup-show *{pointer-events:auto}",""])},147:function(t,e,o){e=t.exports=o(2)(),e.push([t.id,".yd-popup{position:fixed;background-color:#fff;z-index:1501;-webkit-transition:-webkit-transform .2s;transition:-webkit-transform .2s;transition:transform .2s;transition:transform .2s,-webkit-transform .2s;pointer-events:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.yd-popup-content{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;position:relative;overflow-y:auto;-webkit-overflow-scrolling:touch}.yd-popup-left{-webkit-transform:translate(-100%);transform:translate(-100%);left:0;top:0;height:100%}.yd-popup-right{-webkit-transform:translate(100%);transform:translate(100%);right:0;top:0;height:100%}.yd-popup-bottom{-webkit-transform:translateY(100%);transform:translateY(100%);right:0;bottom:0}.yd-popup-show{pointer-events:auto;-webkit-transform:translate(0);transform:translate(0)}.yd-popup-center{background-color:#fff;z-index:1502;position:fixed;top:50%;left:50%;opacity:0;-webkit-transform:translate(-50%,-50%) scale(.95);transform:translate(-50%,-50%) scale(.95);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-transition:-webkit-transform .1s;transition:-webkit-transform .1s;transition:transform .1s;transition:transform .1s,-webkit-transform .1s;border-radius:2px}.yd-popup-center,.yd-popup-center *{pointer-events:none}.yd-popup-center.yd-popup-show{opacity:1;-webkit-transform:translate(-50%,-50%) scale(1);transform:translate(-50%,-50%) scale(1);pointer-events:auto}.yd-popup-center.yd-popup-show *{pointer-events:auto}.yd-notify{background-color:#f23030;line-height:.24rem}.popup-head{margin:8px;font-size:.28rem}.popup-city-item{margin:4px}.popup-head-content{padding:8px}.yd-accordion-title{min-height:.8rem}.yd-checklist-item-icon{padding:8px 13px}.yd-popup-accordion-title{font-size:.32rem}",""])},210:function(t,e,o){o(327);var n=o(1)(o(80),o(266),null,null);t.exports=n.exports},211:function(t,e,o){o(344);var n=o(1)(o(81),o(295),null,null);t.exports=n.exports},266:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("yd-mask",{attrs:{opacity:t.maskerOpacity},nativeOn:{click:function(e){return t.close(e)}},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}}),t._v(" "),o("div",{ref:"box",class:t.classes,style:t.styles},[t.$slots.top&&"center"!==t.position?o("div",{ref:"top"},[t._t("top")],2):t._e(),t._v(" "),o("div",{staticClass:"yd-popup-content"},[o("div",{ref:"content"},[t._t("default")],2)]),t._v(" "),t.$slots.bottom&&"center"!==t.position?o("div",{ref:"bottom"},[t._t("bottom")],2):t._e()])],1)},staticRenderFns:[]}},295:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("yd-mask",{model:{value:t.show,callback:function(e){t.show=e},expression:"show"}}),t._v(" "),o("div",{ref:"box",class:t.classes,style:t.styles},[o("div",{ref:"top"},[o("div",{staticStyle:{padding:"4px"}},[o("div",{staticClass:"popup-head "},[t._v("已选择的城市")]),t._v(" "),t.selectCity.length>0?o("div",{staticClass:"popup-head-content",staticStyle:{"border-bottom":"1px solid #D9D9D9","border-top":"1px solid #D9D9D9"}},[o("div",t._l(t.selectCity,function(e,n){return o("span",{key:n,staticClass:"popup-city-item",domProps:{textContent:t._s(e)}})}),0)]):t._e()])]),t._v(" "),o("div",{staticClass:"yd-popup-content"},[o("div",{ref:"content"},[o("yd-accordion",{attrs:{accordion:""}},t._l(t.cityList,function(e,n){return o("yd-accordion-item",{key:n},[o("span",{staticClass:"yd-popup-accordion-title",attrs:{slot:"title"},domProps:{textContent:t._s(e.region)},slot:"title"}),t._v(" "),o("yd-checklist",{model:{value:e.select,callback:function(o){t.$set(e,"select",o)},expression:"obj.select"}},t._l(e.cityList,function(e,n){return o("yd-checklist-item",{key:n,attrs:{val:e}},[o("div",{staticStyle:{height:"48px","line-height":"50px","font-size":"0.26rem"},domProps:{textContent:t._s(e)}})])}),1)],1)}),1)],1)]),t._v(" "),o("div",{ref:"bottom"},[o("yd-button",{staticStyle:{width:"100%"},attrs:{bgcolor:"#005bac",color:"#fff",type:"primary"},nativeOn:{click:function(e){return t.close(e)}}},[t._v("确认")])],1)])],1)},staticRenderFns:[]}},327:function(t,e,o){var n=o(130);"string"==typeof n&&(n=[[t.id,n,""]]),n.locals&&(t.exports=n.locals);o(3)("45a0c2e4",n,!0)},344:function(t,e,o){var n=o(147);"string"==typeof n&&(n=[[t.id,n,""]]),n.locals&&(t.exports=n.locals);o(3)("268ec129",n,!0)}})});
//# sourceMappingURL=index.js.map