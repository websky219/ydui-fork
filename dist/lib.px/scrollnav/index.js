/*! vue-ydui v1.2.0 by YDCSS (c) 2019 Licensed MIT */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ydui=t():e.ydui=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="/dist/",t(0)}({0:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.ScrollNavPanel=t.ScrollNav=void 0;var r=n(216),i=o(r),l=n(215),s=o(l);t.ScrollNav=i.default,t.ScrollNavPanel=s.default},1:function(e,t){e.exports=function(e,t,n,o){var r,i=e=e||{},l=typeof e.default;"object"!==l&&"function"!==l||(r=e,i=e.default);var s="function"==typeof i?i.options:i;if(t&&(s.render=t.render,s.staticRenderFns=t.staticRenderFns),n&&(s._scopeId=n),o){var a=s.computed||(s.computed={});Object.keys(o).forEach(function(e){var t=o[e];a[e]=function(){return t}})}return{esModule:r,exports:i,options:s}}},2:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<t.length;r++){var l=t[r];"number"==typeof l[0]&&o[l[0]]||(n&&!l[2]?l[2]=n:n&&(l[2]="("+l[2]+") and ("+n+")"),e.push(l))}},e}},3:function(e,t,n){function o(e){for(var t=0;t<e.length;t++){var n=e[t],o=d[n.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](n.parts[r]);for(;r<n.parts.length;r++)o.parts.push(i(n.parts[r]));o.parts.length>n.parts.length&&(o.parts.length=n.parts.length)}else{for(var l=[],r=0;r<n.parts.length;r++)l.push(i(n.parts[r]));d[n.id]={id:n.id,refs:1,parts:l}}}}function r(){var e=document.createElement("style");return e.type="text/css",f.appendChild(e),e}function i(e){var t,n,o=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(o){if(p)return h;o.parentNode.removeChild(o)}if(g){var i=v++;o=u||(u=r()),t=l.bind(null,o,i,!1),n=l.bind(null,o,i,!0)}else o=r(),t=s.bind(null,o),n=function(){o.parentNode.removeChild(o)};return t(e),function(o){if(o){if(o.css===e.css&&o.media===e.media&&o.sourceMap===e.sourceMap)return;t(e=o)}else n()}}function l(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=m(t,r);else{var i=document.createTextNode(r),l=e.childNodes;l[t]&&e.removeChild(l[t]),l.length?e.insertBefore(i,l[t]):e.appendChild(i)}}function s(e,t){var n=t.css,o=t.media,r=t.sourceMap;if(o&&e.setAttribute("media",o),r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var a="undefined"!=typeof document,c=n(4),d={},f=a&&(document.head||document.getElementsByTagName("head")[0]),u=null,v=0,p=!1,h=function(){},g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){p=n;var r=c(e,t);return o(r),function(t){for(var n=[],i=0;i<r.length;i++){var l=r[i],s=d[l.id];s.refs--,n.push(s)}t?(r=c(e,t),o(r)):r=[];for(var i=0;i<n.length;i++){var s=n[i];if(0===s.refs){for(var a=0;a<s.parts.length;a++)s.parts[a]();delete d[s.id]}}}};var m=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},4:function(e,t){e.exports=function(e,t){for(var n=[],o={},r=0;r<t.length;r++){var i=t[r],l=i[0],s=i[1],a=i[2],c=i[3],d={id:e+":"+r,css:s,media:a,sourceMap:c};o[l]?o[l].parts.push(d):n.push(o[l]={id:l,parts:[d]})}return n}},5:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){var e=function(e){e.preventDefault(),e.stopPropagation()},t=!1;return{lock:function(n){t||(t=!0,(n||document).addEventListener("touchmove",e))},unlock:function(n){t=!1,(n||document).removeEventListener("touchmove",e)}}}(),o=function(e){var t=void 0;return{lock:function(){t=document.scrollingElement.scrollTop,document.body.classList.add(e),document.body.style.top=-t+"px"},unlock:function(){document.body.classList.remove(e),document.scrollingElement.scrollTop=t}}}("g-fix-ios-prevent-scroll"),r=!!(window.navigator&&window.navigator.userAgent||"").match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),i=function(e){var t=/^#([a-fA-F0-9]){3}(([a-fA-F0-9]){3})?$/,n=/^[rR][gG][bB][aA]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){3}\s*(\.|\d+\.)?\d+\s*\)$/,o=/^[rR][gG][bB]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){2}(25[0-5]|2[0-4]\d|1?\d{1,2})\s*\)$/;return t.test(e)||n.test(e)||o.test(e)},l=function(e){for(var t=e.offsetTop;e=e.offsetParent;)t+=e.offsetTop;return t},s=function(e){for(var t=e;t&&"HTML"!==t.tagName&&"BODY"!==t.tagName&&1===t.nodeType;){var n=document.defaultView.getComputedStyle(t).overflowY;if("scroll"===n||"auto"===n)return t;t=t.parentNode}return window},a=function(e,t){var n=e===window?document.body.offsetHeight:e.offsetHeight,o=e===window?0:e.getBoundingClientRect().top,r=t.getBoundingClientRect().top-o,i=r+t.offsetHeight;return r>=0&&r<n||i>0&&i<=n},c=function(e,t){return t=t||"",!(0===t.replace(/\s/g,"").length||!e)&&new RegExp(" "+t+" ").test(" "+e.className+" ")},d=function(e,t){c(e,t)||(e.className=""===e.className?t:e.className+" "+t)},f=function(e,t){if(c(e,t)){for(var n=" "+e.className.replace(/[\t\r\n]/g,"")+" ";n.indexOf(" "+t+" ")>=0;)n=n.replace(" "+t+" "," ");e.className=n.replace(/^\s+|\s+$/g,"")}},u=function(e){function t(n,o,r){if(n===o)return void("function"==typeof i&&i());var l=n+r>o?o:n+r;n>o&&(l=n-r<o?o:n-r),e===window?window.scrollTo(l,l):e.scrollTop=l,window.requestAnimationFrame(function(){return t(l,o,r)})}var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o=arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500,i=arguments[4];window.requestAnimationFrame||(window.requestAnimationFrame=window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(e){return window.setTimeout(e,1e3/60)});var l=Math.abs(n-o),s=Math.ceil(l/r*50);t(n,o,s)};t.pageScroll=n,t.preventScroll=o,t.isIOS=r,t.isColor=i,t.getPos=l,t.getScrollview=s,t.checkInview=a,t.addClass=d,t.removeClass=f,t.scrollTop=u},90:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"yd-scrollnav-panel",props:{label:String},mounted:function(){this.$parent.addItem({label:this.label,_uid:this._uid})}}},91:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(5);t.default={name:"yd-scrollnav",data:function(){return{toggle:!1,activeIndex:this.index,navList:[],currentOffset:0,currentPosition:0,scrolling:!1}},props:{index:{validator:function(e){return/^(([1-9]\d*)|0)$/.test(e)},default:0},height:{validator:function(e){return/^(\.|\d+\.)?\d+(px|rem)$/.test(e)},default:"45px"},color:{validator:function(e){return!e||(0,o.isColor)(e)},default:"#333"},currentColor:{validator:function(e){return!e||(0,o.isColor)(e)},default:"#F00"},toggleText:{type:String,default:"切换分类"},bgcolor:{validator:function(e){return!e||(0,o.isColor)(e)},default:"#FFF"},borderColor:{validator:function(e){return!e||(0,o.isColor)(e)},default:"#EFEFEF"},callback:{type:Function}},watch:{activeIndex:function(e){this.scrollNav(this.navList[e]._uid)},index:function(e){this.activeIndex=e,this.scrollContent(e)}},methods:{init:function(){this.scrollView=this.$refs.scrollView,this.contentOffsetTop=this.scrollView.getBoundingClientRect().top,this.bindEvent(),this.index>0&&(this.scrollNav(this.navList[this.index]._uid,!1),this.scrollContent(this.index,!1))},addItem:function(e){this.navList.push(e)},bindEvent:function(){this.scrollView.addEventListener("scroll",this.scrollHandler),window.addEventListener("resize",this.scrollHandler)},getPanels:function(){return this.$children.filter(function(e){return"yd-scrollnav-panel"===e.$options.name})},scrollHandler:function(){var e=this;if(!this.scrolling){var t=this.getPanels(),n=t.length,o=this.scrollView;return o.scrollTop>=t[0].$el.offsetHeight*n-o.offsetHeight?void(this.activeIndex=n-1):void t.forEach(function(t,n){t.$el.getBoundingClientRect().top<=o.offsetHeight/2+e.contentOffsetTop&&(e.activeIndex=n)})}},scrollNav:function(e){var t=this,n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],o=~~this.$refs.nav.offsetWidth/2;this.navList.every(function(r,i){if(r._uid===e){var l=t.$refs["navitem_"+i][0],s=l.offsetLeft-o+l.offsetWidth/2;return t.scrollLeft(t.currentOffset,s,n,function(){t.callback&&t.callback(i)}),!1}return!0})},scrollContent:function(e){var t=this,n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.toggle=!1,this.activeIndex=e,this.scrolling=!0;var r=this.getPanels()[e].$el,i=n&&(window.navigator&&window.navigator.userAgent||"").indexOf("MicroMessenger")<0?500:0;(0,o.scrollTop)(this.scrollView,this.currentPosition,r.offsetTop-this.$refs.navbox.offsetHeight,i,function(){t.scrolling=!1}),this.currentPosition=r.offsetTop-this.$refs.navbox.offsetHeight},scrollLeft:function(e,t,n,o){function r(e,t,n){if(e===t)return void(o&&o());var i=e+n>t?t:e+n;e>t&&(i=e-n<t?t:e-n),s.$refs.nav.scrollLeft=i,s.currentOffset=i,window.requestAnimationFrame(function(){return r(i,t,n)})}var i=Math.abs(e-t),l=n?Math.ceil(i/600*50):i,s=this;r(e,t,l)}},mounted:function(){this.$nextTick(this.init)},beforeDestroy:function(){this.scrollView.removeEventListener("scroll",this.scrollHandler),window.removeEventListener("resize",this.scrollHandler)}}},144:function(e,t,n){t=e.exports=n(2)(),t.push([e.id,'.yd-scrollnav{position:absolute;top:0;left:0;height:100%;width:100%;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.yd-scrollnav,.yd-scrollnav-tab{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.yd-scrollnav-tab{position:relative}.yd-scrollnav-tab-item{white-space:nowrap;overflow-x:auto;overflow-y:hidden;-webkit-overflow-scrolling:touch;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.yd-scrollnav-tab-item>li{padding:0 10px;font-size:14px;display:inline-block;position:relative;height:inherit}.yd-scrollnav-tab-item>li.yd-scrollnav-current{color:currentColor!important;padding-left:16px}.yd-scrollnav-tab-item>li.yd-scrollnav-current>i{width:16px;height:inherit;position:absolute;top:0;left:.5px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.yd-scrollnav-tab-item>li.yd-scrollnav-current>i:before{content:"\\E651";font-family:YDUI-INLAY;font-size:16px;line-height:1}.yd-scrollnav-tab-item>li>span,.yd-scrollnav-toggle{height:inherit;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.yd-scrollnav-toggle{width:50px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.yd-scrollnav-toggle:after{content:"\\E68C";font-family:YDUI-INLAY;display:block;-webkit-transform:rotate(0deg);transform:rotate(0deg);-webkit-transition:-webkit-transform .08s linear;transition:-webkit-transform .08s linear;transition:transform .08s linear;transition:transform .08s linear,-webkit-transform .08s linear;font-size:16px;color:currentColor}.yd-scrollnav-toggle-active:after{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.yd-scrollnav-unfold{position:absolute;z-index:2;width:100%;top:0;pointer-events:none;opacity:0;-webkit-transform:translateY(-100%);transform:translateY(-100%);-webkit-transition:all .08s linear;transition:all .08s linear}.yd-scrollnav-unfold-active{opacity:1;-webkit-transform:translate(0);transform:translate(0)}.yd-scrollnav-unfold-header{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;border-width:0 0 1px;border-style:solid}.yd-scrollnav-unfold-header>div{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;padding-left:15px;font-size:14px;color:#333}.yd-scrollnav-unfold-header>span{width:50px}.yd-scrollnav-unfold>ul{pointer-events:auto;overflow:hidden;padding-bottom:10px;padding-top:10px}.yd-scrollnav-unfold>ul>li{float:left;width:33.333%;padding-left:15px;line-height:35px;font-size:14px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.yd-scrollnav-unfold>ul>li.yd-scrollnav-current{color:currentColor!important}.yd-scrollnav-content{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;overflow-y:auto;overflow-x:hidden;-webkit-overflow-scrolling:touch}',""])},215:function(e,t,n){var o=n(1)(n(90),n(233),null,null);e.exports=o.exports},216:function(e,t,n){n(335);var o=n(1)(n(91),n(290),null,null);e.exports=o.exports},233:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._t("default")],2)},staticRenderFns:[]}},290:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"yd-scrollnav"},[n("div",{ref:"navbox",staticClass:"yd-scrollnav-tab",style:{color:e.color,backgroundColor:e.bgcolor}},[n("div",{staticClass:"yd-scrollnav-unfold",class:e.toggle?"yd-scrollnav-unfold-active":""},[n("div",{staticClass:"yd-scrollnav-unfold-header",style:{height:e.height,borderColor:e.borderColor}},[n("div",{style:{backgroundColor:e.bgcolor},domProps:{innerHTML:e._s(e.toggleText)}}),e._v(" "),n("span")]),e._v(" "),n("ul",{style:{color:e.currentColor,backgroundColor:e.bgcolor}},e._l(e.navList,function(t,o){return n("li",{key:o,class:e.activeIndex===o?"yd-scrollnav-current":"",style:{color:e.color},on:{click:function(t){t.stopPropagation(),e.scrollContent(o)}}},[e._v(e._s(t.label)+"\n                ")])}))]),e._v(" "),n("ul",{ref:"nav",staticClass:"yd-scrollnav-tab-item",style:{color:e.currentColor,height:e.height}},e._l(e.navList,function(t,o){return n("li",{key:o,ref:"navitem_"+o,refInFor:!0,class:e.activeIndex===o?"yd-scrollnav-current":"",style:{color:e.color},on:{click:function(t){t.stopPropagation(),e.scrollContent(o)}}},[n("i"),n("span",[e._v(e._s(t.label))])])})),e._v(" "),n("div",{staticClass:"yd-scrollnav-toggle",class:e.toggle?"yd-scrollnav-toggle-active":"",on:{click:function(t){e.toggle=!e.toggle}}})]),e._v(" "),n("div",{ref:"scrollView",staticClass:"yd-scrollnav-content"},[e._t("default")],2)])},staticRenderFns:[]}},335:function(e,t,n){var o=n(144);"string"==typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals);n(3)("63688aa5",o,!0)}})});
//# sourceMappingURL=index.js.map