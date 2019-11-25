/*! vue-ydui v1.2.0 by YDCSS (c) 2019 Licensed MIT */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ydui=t():e.ydui=t()}(this,function(){return function(e){function t(i){if(r[i])return r[i].exports;var n=r[i]={exports:{},id:i,loaded:!1};return e[i].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var r={};return t.m=e,t.c=r,t.p="/dist/",t(0)}({0:function(e,t,r){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.PreviewItem=t.PreviewHeader=t.Preview=void 0;var n=r(207),o=i(n),a=r(205),d=i(a),s=r(206),l=i(s);t.Preview=o.default,t.PreviewHeader=d.default,t.PreviewItem=l.default},1:function(e,t){e.exports=function(e,t,r,i){var n,o=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(n=e,o=e.default);var d="function"==typeof o?o.options:o;if(t&&(d.render=t.render,d.staticRenderFns=t.staticRenderFns),r&&(d._scopeId=r),i){var s=d.computed||(d.computed={});Object.keys(i).forEach(function(e){var t=i[e];s[e]=function(){return t}})}return{esModule:n,exports:o,options:d}}},2:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var r=this[t];r[2]?e.push("@media "+r[2]+"{"+r[1]+"}"):e.push(r[1])}return e.join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},n=0;n<this.length;n++){var o=this[n][0];"number"==typeof o&&(i[o]=!0)}for(n=0;n<t.length;n++){var a=t[n];"number"==typeof a[0]&&i[a[0]]||(r&&!a[2]?a[2]=r:r&&(a[2]="("+a[2]+") and ("+r+")"),e.push(a))}},e}},3:function(e,t,r){function i(e){for(var t=0;t<e.length;t++){var r=e[t],i=p[r.id];if(i){i.refs++;for(var n=0;n<i.parts.length;n++)i.parts[n](r.parts[n]);for(;n<r.parts.length;n++)i.parts.push(o(r.parts[n]));i.parts.length>r.parts.length&&(i.parts.length=r.parts.length)}else{for(var a=[],n=0;n<r.parts.length;n++)a.push(o(r.parts[n]));p[r.id]={id:r.id,refs:1,parts:a}}}}function n(){var e=document.createElement("style");return e.type="text/css",c.appendChild(e),e}function o(e){var t,r,i=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(i){if(g)return x;i.parentNode.removeChild(i)}if(v){var o=u++;i=f||(f=n()),t=a.bind(null,i,o,!1),r=a.bind(null,i,o,!0)}else i=n(),t=d.bind(null,i),r=function(){i.parentNode.removeChild(i)};return t(e),function(i){if(i){if(i.css===e.css&&i.media===e.media&&i.sourceMap===e.sourceMap)return;t(e=i)}else r()}}function a(e,t,r,i){var n=r?"":i.css;if(e.styleSheet)e.styleSheet.cssText=h(t,n);else{var o=document.createTextNode(n),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function d(e,t){var r=t.css,i=t.media,n=t.sourceMap;if(i&&e.setAttribute("media",i),n&&(r+="\n/*# sourceURL="+n.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var s="undefined"!=typeof document,l=r(4),p={},c=s&&(document.head||document.getElementsByTagName("head")[0]),f=null,u=0,g=!1,x=function(){},v="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,r){g=r;var n=l(e,t);return i(n),function(t){for(var r=[],o=0;o<n.length;o++){var a=n[o],d=p[a.id];d.refs--,r.push(d)}t?(n=l(e,t),i(n)):n=[];for(var o=0;o<r.length;o++){var d=r[o];if(0===d.refs){for(var s=0;s<d.parts.length;s++)d.parts[s]();delete p[d.id]}}}};var h=function(){var e=[];return function(t,r){return e[t]=r,e.filter(Boolean).join("\n")}}()},4:function(e,t){e.exports=function(e,t){for(var r=[],i={},n=0;n<t.length;n++){var o=t[n],a=o[0],d=o[1],s=o[2],l=o[3],p={id:e+":"+n,css:d,media:s,sourceMap:l};i[a]?i[a].parts.push(p):r.push(i[a]={id:a,parts:[p]})}return r}},80:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"yd-preview-header"}},81:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"yd-preview-item"}},82:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"yd-preview",props:{buttons:[Array]},methods:{clickHander:function(e){"function"==typeof e&&e()}}}},131:function(e,t,r){t=e.exports=r(2)(),t.push([e.id,'.yd-preview{background-color:#fff;position:relative;z-index:2}.yd-preview:before{top:-1px}.yd-preview:after,.yd-preview:before{content:"";position:absolute;z-index:0;left:0;width:100%;height:1px;background-image:-webkit-gradient(linear,left bottom,left top,color-stop(50%,#d9d9d9),color-stop(50%,transparent));background-image:-webkit-linear-gradient(bottom,#d9d9d9 50%,transparent 0);background-image:linear-gradient(0deg,#d9d9d9 50%,transparent 0)}.yd-preview:after{bottom:0}.yd-preview-header{height:50px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin-left:12px;padding-right:12px;position:relative;color:#999;font-size:14px;margin-bottom:10px}.yd-preview-header:after{height:1px;position:absolute;z-index:0;bottom:0;left:0;content:"";width:100%;background-image:-webkit-gradient(linear,left bottom,left top,color-stop(50%,#d9d9d9),color-stop(50%,transparent));background-image:-webkit-linear-gradient(bottom,#d9d9d9 50%,transparent 0);background-image:linear-gradient(0deg,#d9d9d9 50%,transparent 0)}.yd-preview-header>*{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.yd-preview-header>:first-child{margin-right:10px}.yd-preview-header>:last-child{text-align:right;color:#333;font-size:16px}.yd-preview-item{padding:0 12px;font-size:13px;color:#999;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding-bottom:7px}.yd-preview-item>*{display:block}.yd-preview-item>:first-child{min-width:55px;text-align-last:justify;margin-right:20px;height:100%;text-align:right}.yd-preview-item>:last-child{word-break:normal;word-wrap:break-word;text-align:right;line-height:22px;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.yd-preview-item:last-child{padding-bottom:12px}.yd-preview-footer{height:50px;-ms-flex-align:center;font-size:14px;color:#999;margin-top:5px}.yd-preview-footer,.yd-preview-footer>*{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.yd-preview-footer>*{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;height:inherit;-ms-flex-align:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.yd-preview-footer>:not(:first-child):after{content:"";position:absolute;z-index:0;top:0;left:0;width:1px;height:100%;background-image:-webkit-gradient(linear,right top,left top,color-stop(50%,#d9d9d9),color-stop(50%,transparent));background-image:-webkit-linear-gradient(right,#d9d9d9 50%,transparent 0);background-image:linear-gradient(270deg,#d9d9d9 50%,transparent 0)}.yd-preview-footer:before{content:"";position:absolute;z-index:0;top:-1px;left:0;width:100%;height:1px;background-image:-webkit-gradient(linear,left bottom,left top,color-stop(50%,#d9d9d9),color-stop(50%,transparent));background-image:-webkit-linear-gradient(bottom,#d9d9d9 50%,transparent 0);background-image:linear-gradient(0deg,#d9d9d9 50%,transparent 0)}',""])},205:function(e,t,r){var i=r(1)(r(80),r(241),null,null);e.exports=i.exports},206:function(e,t,r){var i=r(1)(r(81),r(245),null,null);e.exports=i.exports},207:function(e,t,r){r(322);var i=r(1)(r(82),r(268),null,null);e.exports=i.exports},241:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"yd-preview-header"},[e._t("left"),e._v(" "),e._t("right")],2)},staticRenderFns:[]}},245:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"yd-preview-item"},[e._t("left"),e._v(" "),e._t("right")],2)},staticRenderFns:[]}},268:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"yd-preview"},[e._t("default"),e._v(" "),e.buttons.length>0?r("div",{staticClass:"yd-preview-footer"},[e._l(e.buttons,function(t){return["object"==typeof t.link?[r("router-link",{style:{color:t.color},attrs:{to:t.link},nativeOn:{click:function(r){e.clickHander(t.click)}}},[e._v(e._s(t.text))])]:[r("a",{style:{color:t.color},attrs:{href:t.link?t.link:"javascript:;"},on:{click:function(r){e.clickHander(t.click)}}},[e._v(e._s(t.text))])]]})],2):e._e()],2)},staticRenderFns:[]}},322:function(e,t,r){var i=r(131);"string"==typeof i&&(i=[[e.id,i,""]]),i.locals&&(e.exports=i.locals);r(3)("2646b695",i,!0)}})});
//# sourceMappingURL=index.js.map