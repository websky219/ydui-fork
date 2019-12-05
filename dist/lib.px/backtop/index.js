/*!
 * vue-ydui
 *             v:1.2.0
 *             build:2019-12-05 17:36:07
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
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ydui=t():e.ydui=t()}(this,function(){return function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={exports:{},id:n,loaded:!1};return e[n].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var o={};return t.m=e,t.c=o,t.p="/dist/",t(0)}({0:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.BackTop=void 0;var r=o(162),i=n(r);t.BackTop=i.default},1:function(e,t){e.exports=function(e,t,o,n){var r,i=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(r=e,i=e.default);var a="function"==typeof i?i.options:i;if(t&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns),o&&(a._scopeId=o),n){var l=a.computed||(a.computed={});Object.keys(n).forEach(function(e){var t=n[e];l[e]=function(){return t}})}return{esModule:r,exports:i,options:a}}},2:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var o=this[t];o[2]?e.push("@media "+o[2]+"{"+o[1]+"}"):e.push(o[1])}return e.join("")},e.i=function(t,o){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(n[i]=!0)}for(r=0;r<t.length;r++){var s=t[r];"number"==typeof s[0]&&n[s[0]]||(o&&!s[2]?s[2]=o:o&&(s[2]="("+s[2]+") and ("+o+")"),e.push(s))}},e}},3:function(e,t,o){function n(e){for(var t=0;t<e.length;t++){var o=e[t],n=u[o.id];if(n){n.refs++;for(var r=0;r<n.parts.length;r++)n.parts[r](o.parts[r]);for(;r<o.parts.length;r++)n.parts.push(i(o.parts[r]));n.parts.length>o.parts.length&&(n.parts.length=o.parts.length)}else{for(var s=[],r=0;r<o.parts.length;r++)s.push(i(o.parts[r]));u[o.id]={id:o.id,refs:1,parts:s}}}}function r(){var e=document.createElement("style");return e.type="text/css",d.appendChild(e),e}function i(e){var t,o,n=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(n){if(h)return m;n.parentNode.removeChild(n)}if(v){var i=p++;n=f||(f=r()),t=s.bind(null,n,i,!1),o=s.bind(null,n,i,!0)}else n=r(),t=a.bind(null,n),o=function(){n.parentNode.removeChild(n)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else o()}}function s(e,t,o,n){var r=o?"":n.css;if(e.styleSheet)e.styleSheet.cssText=g(t,r);else{var i=document.createTextNode(r),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}function a(e,t){var o=t.css,n=t.media,r=t.sourceMap;if(n&&e.setAttribute("media",n),r&&(o+="\n/*# sourceURL="+r.sources[0]+" */",o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var l="undefined"!=typeof document,c=o(4),u={},d=l&&(document.head||document.getElementsByTagName("head")[0]),f=null,p=0,h=!1,m=function(){},v="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,o){h=o;var r=c(e,t);return n(r),function(t){for(var o=[],i=0;i<r.length;i++){var s=r[i],a=u[s.id];a.refs--,o.push(a)}t?(r=c(e,t),n(r)):r=[];for(var i=0;i<o.length;i++){var a=o[i];if(0===a.refs){for(var l=0;l<a.parts.length;l++)a.parts[l]();delete u[a.id]}}}};var g=function(){var e=[];return function(t,o){return e[t]=o,e.filter(Boolean).join("\n")}}()},4:function(e,t){e.exports=function(e,t){for(var o=[],n={},r=0;r<t.length;r++){var i=t[r],s=i[0],a=i[1],l=i[2],c=i[3],u={id:e+":"+r,css:a,media:l,sourceMap:c};n[s]?n[s].parts.push(u):o.push(n[s]={id:s,parts:[u]})}return o}},5:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){var e=function(e){e.preventDefault(),e.stopPropagation()},t=!1;return{lock:function(o){t||(t=!0,(o||document).addEventListener("touchmove",e))},unlock:function(o){t=!1,(o||document).removeEventListener("touchmove",e)}}}(),n=function(e){var t=void 0;return{lock:function(){t=document.scrollingElement.scrollTop,document.body.classList.add(e),document.body.style.top=-t+"px"},unlock:function(){document.body.classList.remove(e),document.scrollingElement.scrollTop=t}}}("g-fix-ios-prevent-scroll"),r=!!(window.navigator&&window.navigator.userAgent||"").match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),i=function(e){var t=/^#([a-fA-F0-9]){3}(([a-fA-F0-9]){3})?$/,o=/^[rR][gG][bB][aA]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){3}\s*(\.|\d+\.)?\d+\s*\)$/,n=/^[rR][gG][bB]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){2}(25[0-5]|2[0-4]\d|1?\d{1,2})\s*\)$/;return t.test(e)||o.test(e)||n.test(e)},s=function(e){for(var t=e.offsetTop;e=e.offsetParent;)t+=e.offsetTop;return t},a=function(e){for(var t=e;t&&"HTML"!==t.tagName&&"BODY"!==t.tagName&&1===t.nodeType;){var o=document.defaultView.getComputedStyle(t).overflowY;if("scroll"===o||"auto"===o)return t;t=t.parentNode}return window},l=function(e,t){var o=e===window?document.body.offsetHeight:e.offsetHeight,n=e===window?0:e.getBoundingClientRect().top,r=t.getBoundingClientRect().top-n,i=r+t.offsetHeight;return r>=0&&r<o||i>0&&i<=o},c=function(e,t){return t=t||"",!(0===t.replace(/\s/g,"").length||!e)&&new RegExp(" "+t+" ").test(" "+e.className+" ")},u=function(e,t){c(e,t)||(e.className=""===e.className?t:e.className+" "+t)},d=function(e,t){if(c(e,t)){for(var o=" "+e.className.replace(/[\t\r\n]/g,"")+" ";o.indexOf(" "+t+" ")>=0;)o=o.replace(" "+t+" "," ");e.className=o.replace(/^\s+|\s+$/g,"")}},f=function(e,t,o){e instanceof Array||console.error("sortBy Error:","arr is not an array");for(var n=[],r=[],i=!1,s=0;s<e.length;s++){var a=e[s],l=a&&a[t]||"";(r[s]=new String(l))._obj=a}for(var c=0;c<e.length;c++){if("number"==typeof e[c][t]){i=!0;break}if("string"==typeof e[c][t]){i=!1;break}}i?r.sort(function(e,t){return e-t}):r.sort();for(var u=0;u<e.length;u++)n[u]=r[u]._obj;return"desc"===o&&n.reverse(),n},p=function(e){function t(o,n,r){if(o===n)return void("function"==typeof i&&i());var s=o+r>n?n:o+r;o>n&&(s=o-r<n?n:o-r),e===window?window.scrollTo(s,s):e.scrollTop=s,window.requestAnimationFrame(function(){return t(s,n,r)})}var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500,i=arguments[4];window.requestAnimationFrame||(window.requestAnimationFrame=window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(e){return window.setTimeout(e,1e3/60)});var s=Math.abs(o-n),a=Math.ceil(s/r*50);t(o,n,a)};t.pageScroll=o,t.preventScroll=n,t.isIOS=r,t.isColor=i,t.getPos=s,t.getScrollview=a,t.checkInview=l,t.addClass=u,t.removeClass=d,t.scrollTop=p,t.sortBy=f},38:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(5);t.default={name:"yd-backtop",data:function(){return{show:!1}},props:{right:{type:String,default:"5%"},bottom:{type:String,default:"70px"}},methods:{backtop:function(){var e=0;e=this.scrollView===window?document.documentElement&&document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop:this.scrollView.scrollTop,(0,n.scrollTop)(this.scrollView,e,0)},scrollHandler:function(){var e=window.pageYOffset,t=window.innerHeight;this.scrollView!==window&&(e=this.scrollView.scrollTop,t=this.scrollView.offsetHeight),this.show=e>=t/2},throttle:function(e,t){clearTimeout(e.tId),e.tId=setTimeout(function(){e.call(t)},50)},throttledCheck:function(){this.throttle(this.scrollHandler)}},mounted:function(){this.scrollView=(0,n.getScrollview)(this.$el),this.scrollView.addEventListener("scroll",this.throttledCheck,!1),this.scrollView.addEventListener("resize",this.scrollHandler,!1)},beforeDestroy:function(){this.scrollView.removeEventListener("scroll",this.throttledCheck,!1),this.scrollView.removeEventListener("resize",this.scrollHandler,!1)}}},135:function(e,t,o){t=e.exports=o(2)(),t.push([e.id,'.yd-backtop{position:fixed;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;z-index:1000}.yd-backtop-inlay{border:1px solid silver;width:50px;height:50px;border-radius:50%;background-color:hsla(0,0%,100%,.85)}.yd-backtop-inlay:after{font-family:YDUI-INLAY;content:"\\E788";font-size:25px;color:silver}',""])},162:function(e,t,o){o(326);var n=o(1)(o(38),o(275),null,null);e.exports=n.exports},275:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],on:{click:function(t){return t.stopPropagation(),e.backtop(t)}}},[o("div",{staticClass:"yd-backtop",class:!e.$slots.default&&"yd-backtop-inlay",style:{right:e.right,bottom:e.bottom}},[e.$slots.default?e._t("default"):e._e()],2)])},staticRenderFns:[]}},326:function(e,t,o){var n=o(135);"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals);o(3)("3f1727d2",n,!0)}})});
//# sourceMappingURL=index.js.map