/*! vue-ydui v1.2.0 by YDCSS (c) 2019 Licensed MIT */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.ydui=e():t.ydui=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return t[r].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="/dist/",e(0)}({0:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.TabBarOther=e.TabBarItem=e.TabBar=void 0;var i=n(227),a=r(i),o=n(225),s=r(o),l=n(226),c=r(l);e.TabBar=a.default,e.TabBarItem=s.default,e.TabBarOther=c.default},1:function(t,e){t.exports=function(t,e,n,r){var i,a=t=t||{},o=typeof t.default;"object"!==o&&"function"!==o||(i=t,a=t.default);var s="function"==typeof a?a.options:a;if(e&&(s.render=e.render,s.staticRenderFns=e.staticRenderFns),n&&(s._scopeId=n),r){var l=s.computed||(s.computed={});Object.keys(r).forEach(function(t){var e=r[t];l[t]=function(){return e}})}return{esModule:i,exports:a,options:s}}},2:function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var a=this[i][0];"number"==typeof a&&(r[a]=!0)}for(i=0;i<e.length;i++){var o=e[i];"number"==typeof o[0]&&r[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),t.push(o))}},t}},3:function(t,e,n){function r(t){for(var e=0;e<t.length;e++){var n=t[e],r=d[n.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](n.parts[i]);for(;i<n.parts.length;i++)r.parts.push(a(n.parts[i]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var o=[],i=0;i<n.parts.length;i++)o.push(a(n.parts[i]));d[n.id]={id:n.id,refs:1,parts:o}}}}function i(){var t=document.createElement("style");return t.type="text/css",u.appendChild(t),t}function a(t){var e,n,r=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(r){if(b)return m;r.parentNode.removeChild(r)}if(v){var a=p++;r=f||(f=i()),e=o.bind(null,r,a,!1),n=o.bind(null,r,a,!0)}else r=i(),e=s.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}function o(t,e,n,r){var i=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=g(e,i);else{var a=document.createTextNode(i),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(a,o[e]):t.appendChild(a)}}function s(t,e){var n=e.css,r=e.media,i=e.sourceMap;if(r&&t.setAttribute("media",r),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var l="undefined"!=typeof document,c=n(4),d={},u=l&&(document.head||document.getElementsByTagName("head")[0]),f=null,p=0,b=!1,m=function(){},v="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n){b=n;var i=c(t,e);return r(i),function(e){for(var n=[],a=0;a<i.length;a++){var o=i[a],s=d[o.id];s.refs--,n.push(s)}e?(i=c(t,e),r(i)):i=[];for(var a=0;a<n.length;a++){var s=n[a];if(0===s.refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete d[s.id]}}}};var g=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},4:function(t,e){t.exports=function(t,e){for(var n=[],r={},i=0;i<e.length;i++){var a=e[i],o=a[0],s=a[1],l=a[2],c=a[3],d={id:t+":"+i,css:s,media:l,sourceMap:c};r[o]?r[o].parts.push(d):n.push(r[o]={id:o,parts:[d]})}return n}},5:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){var t=function(t){t.preventDefault(),t.stopPropagation()},e=!1;return{lock:function(n){e||(e=!0,(n||document).addEventListener("touchmove",t))},unlock:function(n){e=!1,(n||document).removeEventListener("touchmove",t)}}}(),r=function(t){var e=void 0;return{lock:function(){e=document.scrollingElement.scrollTop,document.body.classList.add(t),document.body.style.top=-e+"px"},unlock:function(){document.body.classList.remove(t),document.scrollingElement.scrollTop=e}}}("g-fix-ios-prevent-scroll"),i=!!(window.navigator&&window.navigator.userAgent||"").match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),a=function(t){var e=/^#([a-fA-F0-9]){3}(([a-fA-F0-9]){3})?$/,n=/^[rR][gG][bB][aA]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){3}\s*(\.|\d+\.)?\d+\s*\)$/,r=/^[rR][gG][bB]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){2}(25[0-5]|2[0-4]\d|1?\d{1,2})\s*\)$/;return e.test(t)||n.test(t)||r.test(t)},o=function(t){for(var e=t.offsetTop;t=t.offsetParent;)e+=t.offsetTop;return e},s=function(t){for(var e=t;e&&"HTML"!==e.tagName&&"BODY"!==e.tagName&&1===e.nodeType;){var n=document.defaultView.getComputedStyle(e).overflowY;if("scroll"===n||"auto"===n)return e;e=e.parentNode}return window},l=function(t,e){var n=t===window?document.body.offsetHeight:t.offsetHeight,r=t===window?0:t.getBoundingClientRect().top,i=e.getBoundingClientRect().top-r,a=i+e.offsetHeight;return i>=0&&i<n||a>0&&a<=n},c=function(t,e){return e=e||"",!(0===e.replace(/\s/g,"").length||!t)&&new RegExp(" "+e+" ").test(" "+t.className+" ")},d=function(t,e){c(t,e)||(t.className=""===t.className?e:t.className+" "+e)},u=function(t,e){if(c(t,e)){for(var n=" "+t.className.replace(/[\t\r\n]/g,"")+" ";n.indexOf(" "+e+" ")>=0;)n=n.replace(" "+e+" "," ");t.className=n.replace(/^\s+|\s+$/g,"")}},f=function(t){function e(n,r,i){if(n===r)return void("function"==typeof a&&a());var o=n+i>r?r:n+i;n>r&&(o=n-i<r?r:n-i),t===window?window.scrollTo(o,o):t.scrollTop=o,window.requestAnimationFrame(function(){return e(o,r,i)})}var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments[2],i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500,a=arguments[4];window.requestAnimationFrame||(window.requestAnimationFrame=window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return window.setTimeout(t,1e3/60)});var o=Math.abs(n-r),s=Math.ceil(o/i*50);e(n,r,s)};e.pageScroll=n,e.preventScroll=r,e.isIOS=i,e.isColor=a,e.getPos=o,e.getScrollview=s,e.checkInview=l,e.addClass=d,e.removeClass=u,e.scrollTop=f},102:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"yd-tabbar-item",data:function(){return{isCurrent:!1}},props:{type:{validator:function(t){return["link","a"].indexOf(t)>-1},default:"link"},tag:String,link:{type:[String,Object],default:""},title:String,active:Boolean,dot:Boolean},computed:{classes:function(){return this.active||this.isCurrent?"yd-tabbar-active":""},styles:function(){return{color:this.active||this.isCurrent?this.$parent.activeColor:this.$parent.color}}}}},103:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"yd-tabbar-other",props:{type:{validator:function(t){return["link","a"].indexOf(t)>-1},default:"link"},link:{type:[String,Object],default:""}}}},104:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(5);e.default={name:"yd-tabbar",data:function(){return{activeIndex:this.value,barHeight:"auto"}},props:{value:Number,fixed:Boolean,exact:{type:Boolean,default:!0},activeClass:{type:String,default:"router-link-active"},activeColor:{validator:function(t){return!t||(0,r.isColor)(t)},default:"#09BB07"},bgcolor:{validator:function(t){return!t||(0,r.isColor)(t)},default:"#FFF"},color:{validator:function(t){return!t||(0,r.isColor)(t)},default:"#979797"},fontsize:{validator:function(t){return/^(\.|\d+\.)?\d+(px|rem)$/.test(t)},default:".22rem"},padding:{validator:function(t){return 0===Number(t)||/^(\.|\d+\.)?\d+(px|rem)$/.test(t)},default:".06rem"},borderColor:{validator:function(t){return!t||(0,r.isColor)(t)},default:"#E4E4E4"}},computed:{classes:function(){return this.fixed?"yd-tabbar-fixed":""},styles:function(){return{color:this.borderColor,backgroundColor:this.bgcolor,fontSize:this.fontsize,padding:this.padding+" 0"}}},methods:{setCurrent:function(t){var e=this,n=this.$children.filter(function(t){return"yd-tabbar-item"===t.$options.name});n.forEach(function(n,r){e.$set(n,"isCurrent",t===r)})}},watch:{value:function(t){this.setCurrent(t)}},mounted:function(){this.setCurrent(this.activeIndex)}}},125:function(t,e,n){e=t.exports=n(2)(),e.push([t.id,'.yd-tabbar{width:100%;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.yd-tabbar:after{content:"";position:absolute;z-index:0;top:-1px;left:0;width:100%;height:1px;background-image:-webkit-gradient(linear,left bottom,left top,color-stop(50%,currentColor),color-stop(50%,transparent));background-image:-webkit-linear-gradient(bottom,currentColor 50%,transparent 0);background-image:linear-gradient(0deg,currentColor 50%,transparent 0)}.yd-tabbar-fixed{position:fixed;bottom:0;left:0;z-index:100}.yd-tabbar-item{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.yd-tabbar-active,.yd-tabbar-active .yd-tabbar-icon{color:inherit}.yd-tabbar-badge{top:-.1rem;margin-left:-.15rem}.yd-tabbar-badge,.yd-tabbar-dot{position:absolute;left:100%;z-index:999}.yd-tabbar-dot{display:block;width:8px;height:8px;background-color:#ef4f4f;border-radius:50%;border:1px solid #fff;top:0;margin-left:-4px}.yd-tabbar-icon{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative}.yd-tabbar-icon img{height:inherit}.yd-tabbar-txt{display:inline-block;font-size:inherit}.yd-tabbar-other{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100%;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.yd-tabbar-other img{display:block}',""])},225:function(t,e,n){var r=n(1)(n(102),n(296),null,null);t.exports=r.exports},226:function(t,e,n){var r=n(1)(n(103),n(252),null,null);t.exports=r.exports},227:function(t,e,n){n(313);var r=n(1)(n(104),n(257),null,null);t.exports=r.exports},252:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"yd-tabbar-other"},[t._t("default")],2)},staticRenderFns:[]}},257:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{ref:"navbar",staticClass:"yd-tabbar",class:t.classes,style:t.styles},[t._t("default")],2)},staticRenderFns:[]}},296:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return"link"===t.type?n("router-link",{staticClass:"yd-tabbar-item",class:t.classes,style:t.styles,attrs:{to:t.link,exact:t.$parent.exact,"active-class":t.$parent.activeClass,tag:t.tag}},[n("span",{staticClass:"yd-tabbar-icon"},[t._t("icon"),t._v(" "),n("span",{staticClass:"yd-tabbar-badge"},[t._t("badge")],2),t._v(" "),t.dot?n("span",{staticClass:"yd-tabbar-dot"}):t._e()],2),t._v(" "),t.title?n("span",{staticClass:"yd-tabbar-txt"},[t._v(t._s(t.title))]):t._e()]):n("a",{staticClass:"yd-tabbar-item",class:t.classes,style:t.styles,attrs:{href:t.link}},[n("span",{staticClass:"yd-tabbar-icon"},[t._t("icon"),t._v(" "),n("span",{staticClass:"yd-tabbar-badge"},[t._t("badge")],2),t._v(" "),t.dot?n("span",{staticClass:"yd-tabbar-dot"}):t._e()],2),t._v(" "),t.title?n("span",{staticClass:"yd-tabbar-txt"},[t._v(t._s(t.title))]):t._e()])},staticRenderFns:[]}},313:function(t,e,n){var r=n(125);"string"==typeof r&&(r=[[t.id,r,""]]),r.locals&&(t.exports=r.locals);n(3)("0168550c",r,!0)}})});
//# sourceMappingURL=index.js.map