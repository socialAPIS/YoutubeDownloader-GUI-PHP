(window.youtubeDownloader=window.youtubeDownloader||[]).push([[14],{"0d7f0986bcd2f33d8a2a":function(e,t,n){"use strict";(function(e){function r(e){return e&&"object"===typeof e&&"default"in e?e.default:e}Object.defineProperty(t,"__esModule",{value:!0});var o,i,a,c,u=r(n("8a2d1b95e05b6a321e74")),f=r(n("7830fb198d99e49e14ff")),d=r(n("ecab4188101df42db36a")),s=r(n("8af190b70a6bc55c6f1b")),l=r(n("83406643bfb209d249f4")),p="bodyAttributes",b="htmlAttributes",h="titleAttributes",y={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},m=(Object.keys(y).map(function(e){return y[e]}),"charset"),v="cssText",g="href",w="http-equiv",T="innerHTML",j="itemprop",O="name",x="property",C="rel",S="src",A={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},E="defaultTitle",k="defer",I="encodeSpecialCharacters",P="onChangeClientState",R="titleTemplate",L=Object.keys(A).reduce(function(e,t){return e[A[t]]=t,e},{}),M=[y.NOSCRIPT,y.SCRIPT,y.STYLE],D="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},N=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},_=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},H=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},q=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t},z=function(e){return!1===(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Y=function(e){var t=W(e,y.TITLE),n=W(e,R);if(n&&t)return n.replace(/%s/g,function(){return Array.isArray(t)?t.join(""):t});var r=W(e,E);return t||r||void 0},F=function(e){return W(e,P)||function(){}},B=function(e,t){return t.filter(function(t){return"undefined"!==typeof t[e]}).map(function(t){return t[e]}).reduce(function(e,t){return U({},e,t)},{})},V=function(e,t){return t.filter(function(e){return"undefined"!==typeof e[y.BASE]}).map(function(e){return e[y.BASE]}).reverse().reduce(function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t},[])},K=function(e,t,n){var r={};return n.filter(function(t){return!!Array.isArray(t[e])||("undefined"!==typeof t[e]&&X("Helmet: "+e+' should be of type "Array". Instead found type "'+D(t[e])+'"'),!1)}).map(function(t){return t[e]}).reverse().reduce(function(e,n){var o={};n.filter(function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],u=c.toLowerCase();-1===t.indexOf(u)||n===C&&"canonical"===e[n].toLowerCase()||u===C&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(c)||c!==T&&c!==v&&c!==j||(n=c)}if(!n||!e[n])return!1;var f=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][f]&&(o[n][f]=!0,!0)}).reverse().forEach(function(t){return e.push(t)});for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],u=l({},r[c],o[c]);r[c]=u}return e},[]).reverse()},W=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},$=(o=Date.now(),function(e){var t=Date.now();t-o>16?(o=t,e(t)):setTimeout(function(){$(e)},0)}),G=function(e){return clearTimeout(e)},J="undefined"!==typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:e.requestAnimationFrame||$,Q="undefined"!==typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||G:e.cancelAnimationFrame||G,X=function(e){return console&&"function"===typeof console.warn&&console.warn(e)},Z=null,ee=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,f=e.scriptTags,d=e.styleTags,s=e.title,l=e.titleAttributes;re(y.BODY,r),re(y.HTML,o),ne(s,l);var p={baseTag:oe(y.BASE,n),linkTags:oe(y.LINK,i),metaTags:oe(y.META,a),noscriptTags:oe(y.NOSCRIPT,c),scriptTags:oe(y.SCRIPT,f),styleTags:oe(y.STYLE,d)},b={},h={};Object.keys(p).forEach(function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(b[e]=n),r.length&&(h[e]=p[e].oldTags)}),t&&t(),u(e,b,h)},te=function(e){return Array.isArray(e)?e.join(""):e},ne=function(e,t){"undefined"!==typeof e&&document.title!==e&&(document.title=te(e)),re(y.TITLE,t)},re=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var u=a[c],f=t[u]||"";n.getAttribute(u)!==f&&n.setAttribute(u,f),-1===o.indexOf(u)&&o.push(u);var d=i.indexOf(u);-1!==d&&i.splice(d,1)}for(var s=i.length-1;s>=0;s--)n.removeAttribute(i[s]);o.length===i.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==a.join(",")&&n.setAttribute("data-react-helmet",a.join(","))}},oe=function(e,t){var n=document.head||document.querySelector(y.HEAD),r=n.querySelectorAll(e+"[data-react-helmet]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach(function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===T)n.innerHTML=t.innerHTML;else if(r===v)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c="undefined"===typeof t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute("data-react-helmet","true"),o.some(function(e,t){return a=t,n.isEqualNode(e)})?o.splice(a,1):i.push(n)}),o.forEach(function(e){return e.parentNode.removeChild(e)}),i.forEach(function(e){return n.appendChild(e)}),{oldTags:o,newTags:i}},ie=function(e){return Object.keys(e).reduce(function(t,n){var r="undefined"!==typeof e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r},"")},ae=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[A[n]||n]=e[n],t},t)},ce=function(e,t,n){switch(e){case y.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})["data-react-helmet"]=!0,o=ae(n,r),[s.createElement(y.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=ie(n),i=te(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+z(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+z(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case p:case b:return{toComponent:function(){return ae(t)},toString:function(){return ie(t)}};default:return{toComponent:function(){return function(e,t){return t.map(function(t,n){var r,o=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(t).forEach(function(e){var n=A[e]||e;if(n===T||n===v){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]}),s.createElement(e,o)})}(e,t)},toString:function(){return function(e,t,n){return t.reduce(function(t,r){var o=Object.keys(r).filter(function(e){return!(e===T||e===v)}).reduce(function(e,t){var o="undefined"===typeof r[t]?t:t+'="'+z(r[t],n)+'"';return e?e+" "+o:o},""),i=r.innerHTML||r.cssText||"",a=-1===M.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")},"")}(e,t,n)}}}},ue=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.scriptTags,f=e.styleTags,d=e.title,s=void 0===d?"":d,l=e.titleAttributes;return{base:ce(y.BASE,t,r),bodyAttributes:ce(p,n,r),htmlAttributes:ce(b,o,r),link:ce(y.LINK,i,r),meta:ce(y.META,a,r),noscript:ce(y.NOSCRIPT,c,r),script:ce(y.SCRIPT,u,r),style:ce(y.STYLE,f,r),title:ce(y.TITLE,{title:s,titleAttributes:l},r)}},fe=f(function(e){return{baseTag:V([g],e),bodyAttributes:B(p,e),defer:W(e,k),encode:W(e,I),htmlAttributes:B(b,e),linkTags:K(y.LINK,[C,g],e),metaTags:K(y.META,[O,m,w,x,j],e),noscriptTags:K(y.NOSCRIPT,[T],e),onChangeClientState:F(e),scriptTags:K(y.SCRIPT,[S,T],e),styleTags:K(y.STYLE,[v],e),title:Y(e),titleAttributes:B(h,e)}},function(e){Z&&Q(Z),e.defer?Z=J(function(){ee(e,function(){Z=null})}):(ee(e),Z=null)},ue)(function(){return null}),de=(i=fe,c=a=function(e){function t(){return N(this,t),q(this,e.apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!d(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case y.SCRIPT:case y.NOSCRIPT:return{innerHTML:t};case y.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return U({},r,((t={})[n.type]=[].concat(r[n.type]||[],[U({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case y.TITLE:return U({},o,((t={})[r.type]=a,t.titleAttributes=U({},i),t));case y.BODY:return U({},o,{bodyAttributes:U({},i)});case y.HTML:return U({},o,{htmlAttributes:U({},i)})}return U({},o,((n={})[r.type]=U({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=U({},t);return Object.keys(e).forEach(function(t){var r;n=U({},n,((r={})[t]=e[t],r))}),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return s.Children.forEach(e,function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[L[n]||n]=e[n],t},t)}(H(o,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case y.LINK:case y.META:case y.NOSCRIPT:case y.SCRIPT:case y.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}}),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=H(e,["children"]),r=U({},n);return t&&(r=this.mapChildrenToProps(t,r)),s.createElement(i,r)},_(t,null,[{key:"canUseDOM",set:function(e){i.canUseDOM=e}}]),t}(s.Component),a.propTypes={base:u.object,bodyAttributes:u.object,children:u.oneOfType([u.arrayOf(u.node),u.node]),defaultTitle:u.string,defer:u.bool,encodeSpecialCharacters:u.bool,htmlAttributes:u.object,link:u.arrayOf(u.object),meta:u.arrayOf(u.object),noscript:u.arrayOf(u.object),onChangeClientState:u.func,script:u.arrayOf(u.object),style:u.arrayOf(u.object),title:u.string,titleAttributes:u.object,titleTemplate:u.string},a.defaultProps={defer:!0,encodeSpecialCharacters:!0},a.peek=i.peek,a.rewind=function(){var e=i.rewind();return e||(e=ue({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},c);de.renderStatic=de.rewind,t.Helmet=de}).call(this,n("698d75b157f24ae829cc"))},"37dbd87abf4dc1ab9168":function(e,t,n){"use strict";var r=n("0b3cb19af78752326f59").b.h1.withConfig({componentId:"qzs4lu-0"})(["font-size:36px;margin-top:20px;margin-bottom:10px;font-family:inherit;font-weight:500;line-height:1.1;color:inherit;margin:.67em 0;"]);t.a=r},"40e4c102dde323450d41":function(e,t,n){"use strict";n.r(t);var r=n("8af190b70a6bc55c6f1b"),o=(n("8a2d1b95e05b6a321e74"),n("0d7f0986bcd2f33d8a2a"),n("d7dd51e1bf6bfc2c9c3d")),i=n("ab4cb61bcb2dc161defb"),a=n("a28fc3c963a1d4d1a2e5"),c=n("d95b0cf107403b178365"),u=n("adc20f99e57c573c589c"),f=n("5e98cee1846dbfd41421"),d=n("7edf83707012a871cdfb"),s=(n("eaa6aefff0cab73b47af"),{}),l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;return Object(d.a)(e,function(e){t.type})},p=(n("d782b72bc5b680c7122c"),n("f363639bc5c3c97af546"),n("a72b40110d9c31c9b5c5"),regeneratorRuntime.mark(b));function b(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},p)}var h,y=n("16997720f81c903088c2"),m=n("0b3cb19af78752326f59"),v=m.b.div.withConfig({componentId:"19rkjmi-0"})(["min-height:20px;padding:19px;margin-bottom:20px;background-color:#f5f5f5;border:1px solid #e3e3e3;border-radius:4px;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,0.05);box-shadow:inset 0 1px 1px rgba(0,0,0,0.05);"]),g=n("37dbd87abf4dc1ab9168"),w=n("6542cd13fd5dd1bcffd4"),T=m.b.img.withConfig({componentId:"6pmsw7-0"})(["float:right;width:150px;margin-right:15px;"]),j=m.b.div.withConfig({componentId:"6pmsw7-1"})(["display:flex;"]),O=(m.b.div.withConfig({componentId:"6pmsw7-2"})(["width:auto;"]),m.b.div.withConfig({componentId:"6pmsw7-3"})(["text-align:center;"])),x=m.b.h3.withConfig({componentId:"6pmsw7-4"})(["margin:0 0;"]),C=m.b.p.withConfig({componentId:"6pmsw7-5"})(["  white-space:pre;font-size:11px;margin:10px;"]),S=m.b.div.withConfig({componentId:"6pmsw7-6"})(["height:100%;width:100%;background:#eaeaea;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;padding:10px;margin:10px 0;display:flex;flex-wrap:wrap;"]),A=m.b.div.withConfig({componentId:"6pmsw7-7"})(["height:70px;width:120px;padding:10px;text-align:center;margin:6px;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;"]),E=m.b.a.withConfig({componentId:"6pmsw7-8"})(["box-shadow:inset 0px 39px 0px -24px #e67a73;background-color:#e4685d;display:inline-block;border:0px;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;cursor:pointer;outline:none;color:#ffffff;font-family:Arial;font-size:15px;margin-top:3px;padding:10px 15px;text-decoration:none;text-shadow:0px 1px 0px #b23e35;&:hover{background-color:#eb675e;}&:active{position:relative;top:1px;}"]),k=m.b.p.withConfig({componentId:"6pmsw7-9"})(["margin:0;color:#fff2da;"]);function I(e,t,n,r){h||(h="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&o)for(var a in o)void 0===t[a]&&(t[a]=o[a]);else t||(t=o||{});if(1===i)t.children=r;else if(i>1){for(var c=new Array(i),u=0;u<i;u++)c[u]=arguments[u+3];t.children=c}return{$$typeof:h,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function P(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(t,"VideoInfoContainer",function(){return N}),n.d(t,"mapDispatchToProps",function(){return U});var R="VideoInfoContainer",L=I(k,{},void 0,"Only audio"),M=I(g.a,{},void 0,"Download"),D=I("h3",{},void 0,"Description");function N(e){var t,n,o,i,a,d=e.videoPlayerResponse;function s(){if(null===d)return"";if(!1===d.error){var e=d.player_response.playerVideos.videos,t=d.player_response.playerVideos.audios;return[].concat(P(e),P(t)).map(function(e,t){var n=!0;void 0!=e.audioUrl&&(n=!1);var r=e.format.includes("audio"),o=void 0!==e.audioUrl?e.audioUrl:e.videoUrl,i=void 0!==e.size?e.size:"";return I(A,{style:n?{backgroundColor:"#e67e22"}:{backgroundColor:"#6061e6"}},t,r?L:I(k,{},void 0,"".concat(e.sizeFormat," ").concat(i,"\n")," video ",n?"with ":"without ","sound"),I(E,{target:"_blank",href:o},void 0,"Download"))})}}function p(e){return null===d?"error":void 0!==d.player_response.videoInfo&&void 0!==d.player_response.videoInfo[e]?d.player_response.videoInfo[e]:"error"}return Object(c.a)({key:R,reducer:l}),Object(u.a)({key:R,saga:b}),Object(r.useEffect)(function(){null!==d&&void 0!==d||f.a.push("/")}),s(),I(y.a,{},void 0,I(v,{},void 0,M,I("div",{},void 0,I(j,{},void 0,I("div",{},void 0,I(T,{src:"https://i.ytimg.com/vi_webp/".concat(p("videoId"),"/hqdefault.webp")})),I("div",{},void 0,I("h4",{},void 0,"Video Title: ",p("tittle")),I("h5",{},void 0,"Uploader: ",p("channel")),I("h5",{},void 0,"Video Duration: ",(t=p("duration"),n=parseInt(t),o=Math.floor(n/3600),i=Math.floor((n-3600*o)/60),a=n-3600*o-60*i,o<10&&(o="0"+o),i<10&&(i="0"+i),a<10&&(a="0"+a),o>0?o+":"+i+":"+a:i+":"+a)),I("h5",{},void 0,"External Link: ",I("a",{href:"https://www.youtube.com/watch?v=".concat(p("videoId"))},void 0,p("tittle"))))),I(S,{},void 0,s()),I(x,{},void 0,D,I(C,{},void 0,p("description"))),I(O,{},void 0,I(E,{onClick:function(e){f.a.push("/")}},void 0,"Convert Another Video")))))}var _=Object(a.b)({videoPlayerResponse:Object(w.a)()});function U(e){return{}}var H=Object(o.connect)(_,U);t.default=Object(i.compose)(H,r.memo)(N)},"6542cd13fd5dd1bcffd4":function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n("a28fc3c963a1d4d1a2e5"),o=n("c4ec0be7fefbdf794ace"),i=function(e){return e.global||o.b},a=function(){return Object(r.a)(i,function(e){return e.videoPlayerResponse})}},"7830fb198d99e49e14ff":function(e,t,n){"use strict";function r(e){return e&&"object"===typeof e&&"default"in e?e.default:e}var o=n("8af190b70a6bc55c6f1b"),i=r(o),a=r(n("f66a9a2f451f5f6cfabf")),c=r(n("a88d2aa2cbd689d523e2"));e.exports=function(e,t,n){if("function"!==typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!==typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!==typeof n&&"function"!==typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!==typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u=[],f=void 0;function d(){f=e(u.map(function(e){return e.props})),s.canUseDOM?t(f):n&&(f=n(f))}var s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.peek=function(){return f},t.rewind=function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=f;return f=void 0,u=[],e},t.prototype.shouldComponentUpdate=function(e){return!c(e,this.props)},t.prototype.componentWillMount=function(){u.push(this),d()},t.prototype.componentDidUpdate=function(){d()},t.prototype.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),d()},t.prototype.render=function(){return i.createElement(r,this.props)},t}(o.Component);return s.displayName="SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")",s.canUseDOM=a.canUseDOM,s}}},a28fc3c963a1d4d1a2e5:function(e,t,n){"use strict";function r(e,t){return e===t}n.d(t,"a",function(){return o}),n.d(t,"b",function(){return i});var o=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return function(){for(var t=arguments.length,r=Array(t),o=0;o<t;o++)r[o]=arguments[o];var i=0,a=r.pop(),c=function(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every(function(e){return"function"===typeof e})){var n=t.map(function(e){return typeof e}).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+n+"]")}return t}(r),u=e.apply(void 0,[function(){return i++,a.apply(null,arguments)}].concat(n)),f=e(function(){for(var e=[],t=c.length,n=0;n<t;n++)e.push(c[n].apply(null,arguments));return u.apply(null,e)});return f.resultFunc=a,f.dependencies=c,f.recomputations=function(){return i},f.resetRecomputations=function(){return i=0},f}}(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r,n=null,o=null;return function(){return function(e,t,n){if(null===t||null===n||t.length!==n.length)return!1;for(var r=t.length,o=0;o<r;o++)if(!e(t[o],n[o]))return!1;return!0}(t,n,arguments)||(o=e.apply(null,arguments)),n=arguments,o}});function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o;if("object"!==typeof e)throw new Error("createStructuredSelector expects first argument to be an object where each property is a selector, instead received a "+typeof e);var n=Object.keys(e);return t(n.map(function(t){return e[t]}),function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.reduce(function(e,t,r){return e[n[r]]=t,e},{})})}},a72b40110d9c31c9b5c5:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var r=n("fcb99a06256635f70435");function o(e){return{type:r.a,videoPlayerResponse:e}}},a88d2aa2cbd689d523e2:function(e,t){e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(t),u=0;u<i.length;u++){var f=i[u];if(!c(f))return!1;var d=e[f],s=t[f];if(!1===(o=n?n.call(r,d,s,f):void 0)||void 0===o&&d!==s)return!1}return!0}},adc20f99e57c573c589c:function(e,t,n){"use strict";var r=n("8af190b70a6bc55c6f1b"),o=n.n(r),i=(n("5ef9de3df8d92ea0e41c"),n("d7dd51e1bf6bfc2c9c3d")),a=n("f2873ecf7390fe7d7c89"),c=n.n(a),u=n("5fa3f8487e09c6182715"),f=n.n(u),d=n("f3b0ff1628e56352bcbf"),s=n.n(d),l=n("a1cf5d6fa4ed65a6ddd5"),p=n.n(l),b=n("6a4f9c383785f9168266"),h=n.n(b),y=n("cc13decd9f9c09598c2f"),m="@@saga-injector/daemon",v="@@saga-injector/once-till-unmount";function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){w(e,t,n[t])})}return e}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var T=["@@saga-injector/restart-on-remount",m,v],j=function(e){return h()(f()(e)&&!p()(e),"(app/utils...) injectSaga: Expected `key` to be a non empty string")},O=function(e){var t={saga:s.a,mode:function(e){return f()(e)&&T.includes(e)}};h()(c()(e,t),"(app/utils...) injectSaga: Expected a valid saga descriptor")};function x(e,t){return function(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=arguments.length>2?arguments[2]:void 0;t||Object(y.a)(e);var i=g({},r,{mode:r.mode||m}),a=i.saga,c=i.mode;j(n),O(i);var u=Reflect.has(e.injectedSagas,n);(!u||u&&c!==m&&c!==v)&&(e.injectedSagas[n]=g({},i,{task:e.runSaga(a,o)}))}}function C(e,t){return function(n){if(t||Object(y.a)(e),j(n),Reflect.has(e.injectedSagas,n)){var r=e.injectedSagas[n];r.mode&&r.mode!==m&&(r.task.cancel(),e.injectedSagas[n]="done")}}}function S(e){return Object(y.a)(e),{injectSaga:x(e,!0),ejectSaga:C(e,!0)}}n.d(t,"a",function(){return A});var A=function(e){var t=e.key,n=e.saga,r=e.mode,a=o.a.useContext(i.ReactReduxContext);o.a.useEffect(function(){var e=S(a.store);return e.injectSaga(t,{saga:n,mode:r}),function(){e.ejectSaga(t)}},[])}},cc13decd9f9c09598c2f:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var r=n("d3a850c4000d77bccc89"),o=n.n(r),i=n("f3b0ff1628e56352bcbf"),a=n.n(i),c=n("f2873ecf7390fe7d7c89"),u=n.n(c),f=n("6a4f9c383785f9168266"),d=n.n(f);function s(e){var t={dispatch:a.a,subscribe:a.a,getState:a.a,replaceReducer:a.a,runSaga:a.a,injectedReducers:o.a,injectedSagas:o.a};d()(u()(e,t),"(app/utils...) injectors: Expected a valid redux store")}},d95b0cf107403b178365:function(e,t,n){"use strict";var r=n("8af190b70a6bc55c6f1b"),o=n.n(r),i=(n("5ef9de3df8d92ea0e41c"),n("d7dd51e1bf6bfc2c9c3d")),a=n("5fa3f8487e09c6182715"),c=n.n(a),u=n("f3b0ff1628e56352bcbf"),f=n.n(u),d=n("a1cf5d6fa4ed65a6ddd5"),s=n.n(d),l=n("6a4f9c383785f9168266"),p=n.n(l),b=n("cc13decd9f9c09598c2f"),h=n("491cc2e27aa2b4221847");function y(e,t){return function(n,r){t||Object(b.a)(e),p()(c()(n)&&!s()(n)&&f()(r),"(app/utils...) injectReducer: Expected `reducer` to be a reducer function"),Reflect.has(e.injectedReducers,n)&&e.injectedReducers[n]===r||(e.injectedReducers[n]=r,e.replaceReducer(Object(h.a)(e.injectedReducers)))}}function m(e){return Object(b.a)(e),{injectReducer:y(e,!0)}}n.d(t,"a",function(){return v});var v=function(e){var t=e.key,n=e.reducer,r=o.a.useContext(i.ReactReduxContext);o.a.useEffect(function(){m(r.store).injectReducer(t,n)},[])}},eaa6aefff0cab73b47af:function(e,t){},ecab4188101df42db36a:function(e,t,n){"use strict";var r=Array.isArray,o=Object.keys,i=Object.prototype.hasOwnProperty,a="undefined"!==typeof Element;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var c,u,f,d=r(t),s=r(n);if(d&&s){if((u=t.length)!=n.length)return!1;for(c=u;0!==c--;)if(!e(t[c],n[c]))return!1;return!0}if(d!=s)return!1;var l=t instanceof Date,p=n instanceof Date;if(l!=p)return!1;if(l&&p)return t.getTime()==n.getTime();var b=t instanceof RegExp,h=n instanceof RegExp;if(b!=h)return!1;if(b&&h)return t.toString()==n.toString();var y=o(t);if((u=y.length)!==o(n).length)return!1;for(c=u;0!==c--;)if(!i.call(n,y[c]))return!1;if(a&&t instanceof Element&&n instanceof Element)return t===n;for(c=u;0!==c--;)if(("_owner"!==(f=y[c])||!t.$$typeof)&&!e(t[f],n[f]))return!1;return!0}return t!==t&&n!==n}(e,t)}catch(e){if(e.message&&e.message.match(/stack|recursion/i)||-2146828260===e.number)return console.warn("Warning: react-fast-compare does not handle circular references.",e.name,e.message),!1;throw e}}},f363639bc5c3c97af546:function(e,t,n){"use strict";function r(e){return 204===e.status||205===e.status?null:e.json()}function o(e){if(e.status>=200&&e.status<300)return e;var t=new Error(e.statusText);throw t.response=e,t}function i(e,t){return fetch(e,t).then(o).then(r)}n.d(t,"a",function(){return i})}}]);