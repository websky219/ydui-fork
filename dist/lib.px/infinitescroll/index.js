/*! vue-ydui v1.2.0 by YDCSS (c) 2019 Licensed MIT */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ydui=t():e.ydui=t()}(this,function(){return function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={exports:{},id:i,loaded:!1};return e[i].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="/dist/",t(0)}({0:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.InfiniteScroll=void 0;var o=n(188),s=i(o);t.InfiniteScroll=s.default},1:function(e,t){e.exports=function(e,t,n,i){var o,s=e=e||{},r=typeof e.default;"object"!==r&&"function"!==r||(o=e,s=e.default);var a="function"==typeof s?s.options:s;if(t&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns),n&&(a._scopeId=n),i){var l=a.computed||(a.computed={});Object.keys(i).forEach(function(e){var t=i[e];l[e]=function(){return t}})}return{esModule:o,exports:s,options:a}}},2:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},o=0;o<this.length;o++){var s=this[o][0];"number"==typeof s&&(i[s]=!0)}for(o=0;o<t.length;o++){var r=t[o];"number"==typeof r[0]&&i[r[0]]||(n&&!r[2]?r[2]=n:n&&(r[2]="("+r[2]+") and ("+n+")"),e.push(r))}},e}},3:function(e,t,n){function i(e){for(var t=0;t<e.length;t++){var n=e[t],i=d[n.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](n.parts[o]);for(;o<n.parts.length;o++)i.parts.push(s(n.parts[o]));i.parts.length>n.parts.length&&(i.parts.length=n.parts.length)}else{for(var r=[],o=0;o<n.parts.length;o++)r.push(s(n.parts[o]));d[n.id]={id:n.id,refs:1,parts:r}}}}function o(){var e=document.createElement("style");return e.type="text/css",u.appendChild(e),e}function s(e){var t,n,i=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(i){if(v)return h;i.parentNode.removeChild(i)}if(m){var s=p++;i=f||(f=o()),t=r.bind(null,i,s,!1),n=r.bind(null,i,s,!0)}else i=o(),t=a.bind(null,i),n=function(){i.parentNode.removeChild(i)};return t(e),function(i){if(i){if(i.css===e.css&&i.media===e.media&&i.sourceMap===e.sourceMap)return;t(e=i)}else n()}}function r(e,t,n,i){var o=n?"":i.css;if(e.styleSheet)e.styleSheet.cssText=g(t,o);else{var s=document.createTextNode(o),r=e.childNodes;r[t]&&e.removeChild(r[t]),r.length?e.insertBefore(s,r[t]):e.appendChild(s)}}function a(e,t){var n=t.css,i=t.media,o=t.sourceMap;if(i&&e.setAttribute("media",i),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var l="undefined"!=typeof document,c=n(4),d={},u=l&&(document.head||document.getElementsByTagName("head")[0]),f=null,p=0,v=!1,h=function(){},m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){v=n;var o=c(e,t);return i(o),function(t){for(var n=[],s=0;s<o.length;s++){var r=o[s],a=d[r.id];a.refs--,n.push(a)}t?(o=c(e,t),i(o)):o=[];for(var s=0;s<n.length;s++){var a=n[s];if(0===a.refs){for(var l=0;l<a.parts.length;l++)a.parts[l]();delete d[a.id]}}}};var g=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},4:function(e,t){e.exports=function(e,t){for(var n=[],i={},o=0;o<t.length;o++){var s=t[o],r=s[0],a=s[1],l=s[2],c=s[3],d={id:e+":"+o,css:a,media:l,sourceMap:c};i[r]?i[r].parts.push(d):n.push(i[r]={id:r,parts:[d]})}return n}},5:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){var e=function(e){e.preventDefault(),e.stopPropagation()},t=!1;return{lock:function(n){t||(t=!0,(n||document).addEventListener("touchmove",e))},unlock:function(n){t=!1,(n||document).removeEventListener("touchmove",e)}}}(),i=function(e){var t=void 0;return{lock:function(){t=document.scrollingElement.scrollTop,document.body.classList.add(e),document.body.style.top=-t+"px"},unlock:function(){document.body.classList.remove(e),document.scrollingElement.scrollTop=t}}}("g-fix-ios-prevent-scroll"),o=!!(window.navigator&&window.navigator.userAgent||"").match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),s=function(e){var t=/^#([a-fA-F0-9]){3}(([a-fA-F0-9]){3})?$/,n=/^[rR][gG][bB][aA]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){3}\s*(\.|\d+\.)?\d+\s*\)$/,i=/^[rR][gG][bB]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){2}(25[0-5]|2[0-4]\d|1?\d{1,2})\s*\)$/;return t.test(e)||n.test(e)||i.test(e)},r=function(e){for(var t=e.offsetTop;e=e.offsetParent;)t+=e.offsetTop;return t},a=function(e){for(var t=e;t&&"HTML"!==t.tagName&&"BODY"!==t.tagName&&1===t.nodeType;){var n=document.defaultView.getComputedStyle(t).overflowY;if("scroll"===n||"auto"===n)return t;t=t.parentNode}return window},l=function(e,t){var n=e===window?document.body.offsetHeight:e.offsetHeight,i=e===window?0:e.getBoundingClientRect().top,o=t.getBoundingClientRect().top-i,s=o+t.offsetHeight;return o>=0&&o<n||s>0&&s<=n},c=function(e,t){return t=t||"",!(0===t.replace(/\s/g,"").length||!e)&&new RegExp(" "+t+" ").test(" "+e.className+" ")},d=function(e,t){c(e,t)||(e.className=""===e.className?t:e.className+" "+t)},u=function(e,t){if(c(e,t)){for(var n=" "+e.className.replace(/[\t\r\n]/g,"")+" ";n.indexOf(" "+t+" ")>=0;)n=n.replace(" "+t+" "," ");e.className=n.replace(/^\s+|\s+$/g,"")}},f=function(e){function t(n,i,o){if(n===i)return void("function"==typeof s&&s());var r=n+o>i?i:n+o;n>i&&(r=n-o<i?i:n-o),e===window?window.scrollTo(r,r):e.scrollTop=r,window.requestAnimationFrame(function(){return t(r,i,o)})}var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments[2],o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500,s=arguments[4];window.requestAnimationFrame||(window.requestAnimationFrame=window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(e){return window.setTimeout(e,1e3/60)});var r=Math.abs(n-i),a=Math.ceil(r/o*50);t(n,i,a)};t.pageScroll=n,t.preventScroll=i,t.isIOS=o,t.isColor=s,t.getPos=r,t.getScrollview=a,t.checkInview=l,t.addClass=d,t.removeClass=u,t.scrollTop=f},64:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(189),s=i(o),r=n(5);t.default={name:"yd-infinitescroll",components:{Loading:s.default},data:function(){return{isLoading:!1,isDone:!1,num:1}},props:{callback:{type:Function},distance:{default:0,validator:function(e){return/^\d*$/.test(e)}},scrollTop:{type:Boolean,default:!0}},methods:{init:function(){var e=this;this.scrollview=(0,r.getScrollview)(this.$el),this.scrollTop&&(this.scrollview===window?window.scrollTo(0,0):this.scrollview.scrollTop=0),this.scrollview.addEventListener("scroll",this.throttledCheck,!1),this.$on("ydui.infinitescroll.loadedDone",function(){e.isLoading=!1,e.isDone=!0}),this.$on("ydui.infinitescroll.finishLoad",function(t){e.isLoading=!1}),this.$on("ydui.infinitescroll.reInit",function(){e.isLoading=!1,e.isDone=!1})},scrollHandler:function(){if(!this.isLoading&&!this.isDone){var e=this.scrollview,t=document.body.offsetHeight,n=e===window,i=n?0:e.getBoundingClientRect().top,o=n?t:e.offsetHeight;if(!e)return void console.warn("Can't find the scrollview!");if(!this.$refs.tag)return void console.warn("Can't find the refs.tag!");var s=Math.floor(this.$refs.tag.getBoundingClientRect().top)-1,r=this.distance&&this.distance>0?~~this.distance:Math.floor(t/10);s>i&&s-(r+i)*this.num<=t&&this.$el.offsetHeight>o&&(this.isLoading=!0,this.callback&&this.callback(),this.num++)}},throttle:function(e,t){clearTimeout(e.tId),e.tId=setTimeout(function(){e.call(t)},30)},throttledCheck:function(){this.throttle(this.scrollHandler)}},mounted:function(){this.$nextTick(this.init)},beforeDestroy:function(){this.scrollview.removeEventListener("scroll",this.throttledCheck)}}},148:function(e,t,n){t=e.exports=n(2)(),t.push([e.id,".yd-list-loading{padding:5px 0;text-align:center;font-size:13px;color:#999;height:33px;box-sizing:content-box}.yd-list-loading-box{height:33px;overflow:hidden;line-height:33px}.yd-list-loading img{height:33px;display:inline-block}.yd-list-loading svg{width:33px;height:33px}.yd-list-donetip{font-size:12px;text-align:center;padding:12px 0;color:#777}",""])},188:function(e,t,n){n(339);var i=n(1)(n(64),n(297),null,null);e.exports=i.exports},189:function(e,t,n){var i=n(1)(null,n(240),null,null);e.exports=i.exports},240:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{staticClass:"lds-ellipsis",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"}},[n("circle",{attrs:{cx:"84",cy:"50",r:"5.04711",fill:"#f3b72e"}},[n("animate",{attrs:{attributeName:"r",values:"10;0;0;0;0",keyTimes:"0;0.25;0.5;0.75;1",keySplines:"0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1",calcMode:"spline",dur:"1.7s",repeatCount:"indefinite",begin:"0s"}}),e._v(" "),n("animate",{attrs:{attributeName:"cx",values:"84;84;84;84;84",keyTimes:"0;0.25;0.5;0.75;1",keySplines:"0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1",calcMode:"spline",dur:"1.7s",repeatCount:"indefinite",begin:"0s"}})]),e._v(" "),n("circle",{attrs:{cx:"66.8398",cy:"50",r:"10",fill:"#E8574E"}},[n("animate",{attrs:{attributeName:"r",values:"0;10;10;10;0",keyTimes:"0;0.25;0.5;0.75;1",keySplines:"0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1",calcMode:"spline",dur:"1.7s",repeatCount:"indefinite",begin:"-0.85s"}}),e._v(" "),n("animate",{attrs:{attributeName:"cx",values:"16;16;50;84;84",keyTimes:"0;0.25;0.5;0.75;1",keySplines:"0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1",calcMode:"spline",dur:"1.7s",repeatCount:"indefinite",begin:"-0.85s"}})]),e._v(" "),n("circle",{attrs:{cx:"32.8398",cy:"50",r:"10",fill:"#43A976"}},[n("animate",{attrs:{attributeName:"r",values:"0;10;10;10;0",keyTimes:"0;0.25;0.5;0.75;1",keySplines:"0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1",calcMode:"spline",dur:"1.7s",repeatCount:"indefinite",begin:"-0.425s"}}),e._v(" "),n("animate",{attrs:{attributeName:"cx",values:"16;16;50;84;84",keyTimes:"0;0.25;0.5;0.75;1",keySplines:"0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1",calcMode:"spline",dur:"1.7s",repeatCount:"indefinite",begin:"-0.425s"}})]),e._v(" "),n("circle",{attrs:{cx:"16",cy:"50",r:"4.95289",fill:"#304153"}},[n("animate",{attrs:{attributeName:"r",values:"0;10;10;10;0",keyTimes:"0;0.25;0.5;0.75;1",keySplines:"0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1",calcMode:"spline",dur:"1.7s",repeatCount:"indefinite",begin:"0s"}}),e._v(" "),n("animate",{attrs:{attributeName:"cx",values:"16;16;50;84;84",keyTimes:"0;0.25;0.5;0.75;1",keySplines:"0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1",calcMode:"spline",dur:"1.7s",repeatCount:"indefinite",begin:"0s"}})]),e._v(" "),n("circle",{attrs:{cx:"16",cy:"50",r:"0",fill:"#f3b72e"}},[n("animate",{attrs:{attributeName:"r",values:"0;0;10;10;10",keyTimes:"0;0.25;0.5;0.75;1",keySplines:"0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1",calcMode:"spline",dur:"1.7s",repeatCount:"indefinite",begin:"0s"}}),e._v(" "),n("animate",{attrs:{attributeName:"cx",values:"16;16;16;50;84",keyTimes:"0;0.25;0.5;0.75;1",keySplines:"0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1",calcMode:"spline",dur:"1.7s",repeatCount:"indefinite",begin:"0s"}})])])},staticRenderFns:[]}},297:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._t("list"),e._v(" "),n("div",{ref:"tag",staticStyle:{height:"0"}}),e._v(" "),e.isDone?e._e():n("div",{staticClass:"yd-list-loading"},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.isLoading,expression:"isLoading"}]},[e._t("loadingTip",[n("loading")])],2)]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!e.isLoading&&e.isDone,expression:"!isLoading && isDone"}],staticClass:"yd-list-donetip"},[e._t("doneTip",[e._v("没有更多数据了")])],2)],2)},staticRenderFns:[]}},339:function(e,t,n){var i=n(148);"string"==typeof i&&(i=[[e.id,i,""]]),i.locals&&(e.exports=i.locals);n(3)("5a0aecec",i,!0)}})});
//# sourceMappingURL=index.js.map