/*!
 * vue-ydui
 *             v:1.2.0
 *             build:2019-12-04 17:59:18
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
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.ydui=e():t.ydui=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return t[r].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="/dist/",e(0)}({0:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.Spinner=void 0;var i=n(221),a=r(i);e.Spinner=a.default},1:function(t,e){t.exports=function(t,e,n,r){var i,a=t=t||{},o=typeof t.default;"object"!==o&&"function"!==o||(i=t,a=t.default);var s="function"==typeof a?a.options:a;if(e&&(s.render=e.render,s.staticRenderFns=e.staticRenderFns),n&&(s._scopeId=n),r){var u=s.computed||(s.computed={});Object.keys(r).forEach(function(t){var e=r[t];u[t]=function(){return e}})}return{esModule:i,exports:a,options:s}}},2:function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var a=this[i][0];"number"==typeof a&&(r[a]=!0)}for(i=0;i<e.length;i++){var o=e[i];"number"==typeof o[0]&&r[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),t.push(o))}},t}},3:function(t,e,n){function r(t){for(var e=0;e<t.length;e++){var n=t[e],r=l[n.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](n.parts[i]);for(;i<n.parts.length;i++)r.parts.push(a(n.parts[i]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var o=[],i=0;i<n.parts.length;i++)o.push(a(n.parts[i]));l[n.id]={id:n.id,refs:1,parts:o}}}}function i(){var t=document.createElement("style");return t.type="text/css",c.appendChild(t),t}function a(t){var e,n,r=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(r){if(h)return m;r.parentNode.removeChild(r)}if(g){var a=f++;r=p||(p=i()),e=o.bind(null,r,a,!1),n=o.bind(null,r,a,!0)}else r=i(),e=s.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}function o(t,e,n,r){var i=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=v(e,i);else{var a=document.createTextNode(i),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(a,o[e]):t.appendChild(a)}}function s(t,e){var n=e.css,r=e.media,i=e.sourceMap;if(r&&t.setAttribute("media",r),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var u="undefined"!=typeof document,d=n(4),l={},c=u&&(document.head||document.getElementsByTagName("head")[0]),p=null,f=0,h=!1,m=function(){},g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n){h=n;var i=d(t,e);return r(i),function(e){for(var n=[],a=0;a<i.length;a++){var o=i[a],s=l[o.id];s.refs--,n.push(s)}e?(i=d(t,e),r(i)):i=[];for(var a=0;a<n.length;a++){var s=n[a];if(0===s.refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete l[s.id]}}}};var v=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},4:function(t,e){t.exports=function(t,e){for(var n=[],r={},i=0;i<e.length;i++){var a=e[i],o=a[0],s=a[1],u=a[2],d=a[3],l={id:t+":"+i,css:s,media:u,sourceMap:d};r[o]?r[o].parts.push(l):n.push(r[o]={id:o,parts:[l]})}return n}},96:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"yd-spinner",data:function(){return{counter:0,tapParams:{timer:null,tapStartTime:0},parms:{max:0,min:-1}}},computed:{boxStyle:function(){return"square"===this.buttonStyle?{height:this.height,width:this.width}:{height:this.height}},btnStyle:function(){if("square"===this.buttonStyle)return{};var t=this.height;return{width:t,height:t}}},watch:{value:function(t){this.callback(this.val,t),this.setDefalutValue()}},props:{callback:{type:Function,default:function(){}},val:{type:[Boolean,String,Number],default:""},unit:{default:1,validator:function(t){return/^([1-9]\d*)$/.test(t)}},max:{default:0,validator:function(t){return/^(([1-9]\d*)|0)$/.test(t)}},min:{default:-1,validator:function(t){return/^((-?([1-9]\d*))|0)$/.test(t)}},longpress:{type:Boolean,default:!0},readonly:{type:Boolean,default:!1},value:{validator:function(t){return/^(([1-9]\d*)|0)$/.test(t)}},width:{validator:function(t){return/^(\.|\d+\.)?\d+(px|rem)$/.test(t)},default:"100px"},height:{validator:function(t){return/^(\.|\d+\.)?\d+(px|rem)$/.test(t)},default:"30px"},buttonStyle:{validator:function(t){return["square","circle"].indexOf(t)>-1},default:"square"}},methods:{init:function(){this.checkParameters()&&(this.setDefalutValue(),this.bindEvents())},checkParameters:function(){var t=~~this.max,e=~~this.unit,n=~~this.min;return t<e&&0!==t?(console.error("[YDUI warn]: The parameter 'max'("+t+") must be greater than or equal to 'unit'("+e+")."),!1):t%e!==0?(console.error("[YDUI warn]: The parameter 'max'("+t+") and 'unit'("+e+") must be multiple."),!1):n%e!==0&&n>=0?(console.error("[YDUI warn]: The parameter 'min'("+n+") and 'unit'("+e+") must be multiple."),!1):!(t<n&&0!==t)||(console.error("[YDUI warn]: The parameter 'max'("+t+") must be greater than to 'min'("+n+")."),!1)},setDefalutValue:function(){var t=~~this.unit,e=~~this.min,n=~~this.value;return~~n>0?void this.setValue(n):void this.setValue(e<0?t:e)},calculation:function(t){var e=~~this.max,n=~~this.min<0?~~this.unit:~~this.min,r=~~this.unit;if(!this.readonly){var i=~~this.counter,a=void 0;if("add"===t){if(a=i+r,0!==e&&a>e)return}else if(a=i-r,a<n)return;this.$emit("input",a),this.longpress&&this.longpressHandler(t)}},setValue:function(t){var e=~~this.max,n=~~this.min<0?~~this.unit:~~this.min,r=~~this.unit;/^(([1-9]\d*)|0)$/.test(t)||(t=r),t>e&&0!==e&&(t=e),t%r>0&&(t=t-t%r+r,t>e&&0!==e&&(t-=r)),t<n&&(t=n-n%r),this.counter=t},longpressHandler:function(t){var e=this,n=(new Date).getTime()/1e3,r=n-this.tapParams.tapStartTime;r<1&&(r=.5);var i=10*r;30===r&&(i=50),r>=40&&(i=100),this.tapParams.timer=setTimeout(function(){e.calculation(t)},1e3/i)},clearTapTimer:function(){clearTimeout(this.tapParams.timer)},bindEvents:function(){var t=this,e=this.$refs.add,n=this.$refs.minus,r={mousedownEvent:"touchstart",mouseupEvent:"touchend"},i=window.Modernizr&&!!window.Modernizr.touch||function(){return!!("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)}();i||(r.mousedownEvent="mousedown",r.mouseupEvent="mouseup"),e.addEventListener(r.mousedownEvent,function(n){t.longpress&&(n.preventDefault(),n.stopPropagation(),t.tapParams.tapStartTime=(new Date).getTime()/1e3,e.addEventListener(r.mouseupEvent,t.clearTapTimer)),t.calculation("add")}),n.addEventListener(r.mousedownEvent,function(e){t.longpress&&(e.preventDefault(),e.stopPropagation(),t.tapParams.tapStartTime=(new Date).getTime()/1e3,n.addEventListener(r.mouseupEvent,t.clearTapTimer)),t.calculation("minus")}),this.$refs.numInput.addEventListener("change",function(){t.setValue(~~t.counter),t.$emit("input",~~t.counter),t.callback(t.val,~~t.counter)})}},mounted:function(){this.$nextTick(this.init)}}},118:function(t,e,n){e=t.exports=n(2)(),e.push([t.id,'.yd-spinner{border-radius:1px;display:inline-block}.yd-spinner,.yd-spinner>span{position:relative;overflow:hidden}.yd-spinner>span{float:left;width:25%;height:100%;text-align:center;font-weight:700;color:#666;letter-spacing:0;background-color:#fafafa}.yd-spinner>span:active{background-color:#eee}.yd-spinner>span>i:after{font-family:YDUI-INLAY;color:#777;font-size:8px;position:absolute;top:50%;left:50%;-webkit-transform:translate(-45%,-40%);transform:translate(-45%,-40%)}.yd-spinner>span:last-child>i:after{content:"\\E602"}.yd-spinner>span:first-child>i:after{content:"\\E60B"}.yd-spinner>input{letter-spacing:0;float:left;height:inherit;text-align:center;color:#666;border:none;font-size:13px;background-color:#fff}.yd-spinner-square:after{top:-1px;top:0}.yd-spinner-square:after,.yd-spinner-square:before{content:"";position:absolute;z-index:5;left:0;width:100%;height:1px;background-image:-webkit-gradient(linear,left bottom,left top,color-stop(50%,#d9d9d9),color-stop(50%,transparent));background-image:-webkit-linear-gradient(bottom,#d9d9d9 50%,transparent 0);background-image:linear-gradient(0deg,#d9d9d9 50%,transparent 0)}.yd-spinner-square:before{bottom:0}.yd-spinner-square>span:last-child:after{content:"";position:absolute;z-index:5;top:0;right:0;width:1px;height:100%;background-image:-webkit-gradient(linear,left top,right top,color-stop(50%,#d9d9d9),color-stop(50%,transparent));background-image:-webkit-linear-gradient(left,#d9d9d9 50%,transparent 0);background-image:linear-gradient(90deg,#d9d9d9 50%,transparent 0)}.yd-spinner-square>span:first-child:before{content:"";position:absolute;z-index:5;top:0;left:0;width:1px;height:100%;background-image:-webkit-gradient(linear,right top,left top,color-stop(50%,#d9d9d9),color-stop(50%,transparent));background-image:-webkit-linear-gradient(right,#d9d9d9 50%,transparent 0);background-image:linear-gradient(270deg,#d9d9d9 50%,transparent 0)}.yd-spinner-circle>span{border-radius:100px;display:block;background-color:#f5f5f5}',""])},221:function(t,e,n){n(309);var r=n(1)(n(96),n(243),null,null);t.exports=r.exports},243:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"yd-spinner",class:"circle"===t.buttonStyle?"yd-spinner-circle":"yd-spinner-square",style:t.boxStyle},[n("span",{ref:"minus",style:t.btnStyle},[n("i")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.counter,expression:"counter"}],ref:"numInput",staticClass:"yd-spinner-input",style:{width:"circle"===t.buttonStyle?t.width:"50%"},attrs:{type:"number",pattern:"[0-9]*",readonly:t.readonly,placeholder:""},domProps:{value:t.counter},on:{input:function(e){e.target.composing||(t.counter=e.target.value)}}}),t._v(" "),n("span",{ref:"add",style:t.btnStyle},[n("i")])])},staticRenderFns:[]}},309:function(t,e,n){var r=n(118);"string"==typeof r&&(r=[[t.id,r,""]]),r.locals&&(t.exports=r.locals);n(3)("05c388b0",r,!0)}})});
//# sourceMappingURL=index.js.map