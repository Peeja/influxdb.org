window.Modernizr=function(t,e,n){function i(t){p.cssText=t}function r(t,e){return typeof t===e}var o,a,s,c="2.6.2",u={},l=!0,f=e.documentElement,h="modernizr",d=e.createElement(h),p=d.style,m={}.toString,v=" -webkit- -moz- -o- -ms- ".split(" "),g={svg:"http://www.w3.org/2000/svg"},y={},b=[],w=b.slice,x=function(t,n,i,r){var o,a,s,c,u=e.createElement("div"),l=e.body,d=l||e.createElement("body");if(parseInt(i,10))for(;i--;)s=e.createElement("div"),s.id=r?r[i]:h+(i+1),u.appendChild(s);return o=["&#173;",'<style id="s',h,'">',t,"</style>"].join(""),u.id=h,(l?u:d).innerHTML+=o,d.appendChild(u),l||(d.style.background="",d.style.overflow="hidden",c=f.style.overflow,f.style.overflow="hidden",f.appendChild(d)),a=n(u,t),l?u.parentNode.removeChild(u):(d.parentNode.removeChild(d),f.style.overflow=c),!!a},E=function(e){var n=t.matchMedia||t.msMatchMedia;if(n)return n(e).matches;var i;return x("@media "+e+" { #"+h+" { position: absolute; } }",function(e){i="absolute"==(t.getComputedStyle?getComputedStyle(e,null):e.currentStyle).position}),i},_={}.hasOwnProperty;s=r(_,"undefined")||r(_.call,"undefined")?function(t,e){return e in t&&r(t.constructor.prototype[e],"undefined")}:function(t,e){return _.call(t,e)},Function.prototype.bind||(Function.prototype.bind=function(t){var e=this;if("function"!=typeof e)throw new TypeError;var n=w.call(arguments,1),i=function(){if(this instanceof i){var r=function(){};r.prototype=e.prototype;var o=new r,a=e.apply(o,n.concat(w.call(arguments)));return Object(a)===a?a:o}return e.apply(t,n.concat(w.call(arguments)))};return i}),y.touch=function(){var n;return"ontouchstart"in t||t.DocumentTouch&&e instanceof DocumentTouch?n=!0:x(["@media (",v.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(t){n=9===t.offsetTop}),n},y.svg=function(){return!!e.createElementNS&&!!e.createElementNS(g.svg,"svg").createSVGRect},y.inlinesvg=function(){var t=e.createElement("div");return t.innerHTML="<svg/>",(t.firstChild&&t.firstChild.namespaceURI)==g.svg},y.svgclippaths=function(){return!!e.createElementNS&&/SVGClipPath/.test(m.call(e.createElementNS(g.svg,"clipPath")))};for(var C in y)s(y,C)&&(a=C.toLowerCase(),u[a]=y[C](),b.push((u[a]?"":"no-")+a));return u.addTest=function(t,e){if("object"==typeof t)for(var i in t)s(t,i)&&u.addTest(i,t[i]);else{if(t=t.toLowerCase(),u[t]!==n)return u;e="function"==typeof e?e():e,"undefined"!=typeof l&&l&&(f.className+=" "+(e?"":"no-")+t),u[t]=e}return u},i(""),d=o=null,function(t,e){function n(t,e){var n=t.createElement("p"),i=t.getElementsByTagName("head")[0]||t.documentElement;return n.innerHTML="x<style>"+e+"</style>",i.insertBefore(n.lastChild,i.firstChild)}function i(){var t=g.elements;return"string"==typeof t?t.split(" "):t}function r(t){var e=v[t[p]];return e||(e={},m++,t[p]=m,v[m]=e),e}function o(t,n,i){if(n||(n=e),l)return n.createElement(t);i||(i=r(n));var o;return o=i.cache[t]?i.cache[t].cloneNode():d.test(t)?(i.cache[t]=i.createElem(t)).cloneNode():i.createElem(t),o.canHaveChildren&&!h.test(t)?i.frag.appendChild(o):o}function a(t,n){if(t||(t=e),l)return t.createDocumentFragment();n=n||r(t);for(var o=n.frag.cloneNode(),a=0,s=i(),c=s.length;c>a;a++)o.createElement(s[a]);return o}function s(t,e){e.cache||(e.cache={},e.createElem=t.createElement,e.createFrag=t.createDocumentFragment,e.frag=e.createFrag()),t.createElement=function(n){return g.shivMethods?o(n,t,e):e.createElem(n)},t.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+i().join().replace(/\w+/g,function(t){return e.createElem(t),e.frag.createElement(t),'c("'+t+'")'})+");return n}")(g,e.frag)}function c(t){t||(t=e);var i=r(t);return g.shivCSS&&!u&&!i.hasCSS&&(i.hasCSS=!!n(t,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),l||s(t,i),t}var u,l,f=t.html5||{},h=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,d=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,p="_html5shiv",m=0,v={};!function(){try{var t=e.createElement("a");t.innerHTML="<xyz></xyz>",u="hidden"in t,l=1==t.childNodes.length||function(){e.createElement("a");var t=e.createDocumentFragment();return"undefined"==typeof t.cloneNode||"undefined"==typeof t.createDocumentFragment||"undefined"==typeof t.createElement}()}catch(n){u=!0,l=!0}}();var g={elements:f.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:f.shivCSS!==!1,supportsUnknownElements:l,shivMethods:f.shivMethods!==!1,type:"default",shivDocument:c,createElement:o,createDocumentFragment:a};t.html5=g,c(e)}(this,e),u._version=c,u._prefixes=v,u.mq=E,u.testStyles=x,f.className=f.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(l?" js "+b.join(" "):""),u}(this,this.document),function(t,e,n){function i(t){return"[object Function]"==v.call(t)}function r(t){return"string"==typeof t}function o(){}function a(t){return!t||"loaded"==t||"complete"==t||"uninitialized"==t}function s(){var t=g.shift();y=1,t?t.t?p(function(){("c"==t.t?h.injectCss:h.injectJs)(t.s,0,t.a,t.x,t.e,1)},0):(t(),s()):y=0}function c(t,n,i,r,o,c,u){function l(e){if(!d&&a(f.readyState)&&(b.r=d=1,!y&&s(),f.onload=f.onreadystatechange=null,e)){"img"!=t&&p(function(){x.removeChild(f)},50);for(var i in j[n])j[n].hasOwnProperty(i)&&j[n][i].onload()}}var u=u||h.errorTimeout,f=e.createElement(t),d=0,v=0,b={t:i,s:n,e:o,a:c,x:u};1===j[n]&&(v=1,j[n]=[]),"object"==t?f.data=n:(f.src=n,f.type=t),f.width=f.height="0",f.onerror=f.onload=f.onreadystatechange=function(){l.call(this,v)},g.splice(r,0,b),"img"!=t&&(v||2===j[n]?(x.insertBefore(f,w?null:m),p(l,u)):j[n].push(f))}function u(t,e,n,i,o){return y=0,e=e||"j",r(t)?c("c"==e?_:E,t,e,this.i++,n,i,o):(g.splice(this.i++,0,t),1==g.length&&s()),this}function l(){var t=h;return t.loader={load:u,i:0},t}var f,h,d=e.documentElement,p=t.setTimeout,m=e.getElementsByTagName("script")[0],v={}.toString,g=[],y=0,b="MozAppearance"in d.style,w=b&&!!e.createRange().compareNode,x=w?d:m.parentNode,d=t.opera&&"[object Opera]"==v.call(t.opera),d=!!e.attachEvent&&!d,E=b?"object":d?"script":"img",_=d?"script":E,C=Array.isArray||function(t){return"[object Array]"==v.call(t)},T=[],j={},S={timeout:function(t,e){return e.length&&(t.timeout=e[0]),t}};h=function(t){function e(t){var e,n,i,t=t.split("!"),r=T.length,o=t.pop(),a=t.length,o={url:o,origUrl:o,prefixes:t};for(n=0;a>n;n++)i=t[n].split("="),(e=S[i.shift()])&&(o=e(o,i));for(n=0;r>n;n++)o=T[n](o);return o}function a(t,r,o,a,s){var c=e(t),u=c.autoCallback;c.url.split(".").pop().split("?").shift(),c.bypass||(r&&(r=i(r)?r:r[t]||r[a]||r[t.split("/").pop().split("?")[0]]),c.instead?c.instead(t,r,o,a,s):(j[c.url]?c.noexec=!0:j[c.url]=1,o.load(c.url,c.forceCSS||!c.forceJS&&"css"==c.url.split(".").pop().split("?").shift()?"c":n,c.noexec,c.attrs,c.timeout),(i(r)||i(u))&&o.load(function(){l(),r&&r(c.origUrl,s,a),u&&u(c.origUrl,s,a),j[c.url]=2})))}function s(t,e){function n(t,n){if(t){if(r(t))n||(f=function(){var t=[].slice.call(arguments);h.apply(this,t),d()}),a(t,f,e,0,u);else if(Object(t)===t)for(c in s=function(){var e,n=0;for(e in t)t.hasOwnProperty(e)&&n++;return n}(),t)t.hasOwnProperty(c)&&(!n&&!--s&&(i(f)?f=function(){var t=[].slice.call(arguments);h.apply(this,t),d()}:f[c]=function(t){return function(){var e=[].slice.call(arguments);t&&t.apply(this,e),d()}}(h[c])),a(t[c],f,e,c,u))}else!n&&d()}var s,c,u=!!t.test,l=t.load||t.both,f=t.callback||o,h=f,d=t.complete||o;n(u?t.yep:t.nope,!!l),l&&n(l)}var c,u,f=this.yepnope.loader;if(r(t))a(t,0,f,0);else if(C(t))for(c=0;c<t.length;c++)u=t[c],r(u)?a(u,0,f,0):C(u)?h(u):Object(u)===u&&s(u,f);else Object(t)===t&&s(t,f)},h.addPrefix=function(t,e){S[t]=e},h.addFilter=function(t){T.push(t)},h.errorTimeout=1e4,null==e.readyState&&e.addEventListener&&(e.readyState="loading",e.addEventListener("DOMContentLoaded",f=function(){e.removeEventListener("DOMContentLoaded",f,0),e.readyState="complete"},0)),t.yepnope=l(),t.yepnope.executeStack=s,t.yepnope.injectJs=function(t,n,i,r,c,u){var l,f,d=e.createElement("script"),r=r||h.errorTimeout;d.src=t;for(f in i)d.setAttribute(f,i[f]);n=u?s:n||o,d.onreadystatechange=d.onload=function(){!l&&a(d.readyState)&&(l=1,n(),d.onload=d.onreadystatechange=null)},p(function(){l||(l=1,n(1))},r),c?d.onload():m.parentNode.insertBefore(d,m)},t.yepnope.injectCss=function(t,n,i,r,a,c){var u,r=e.createElement("link"),n=c?s:n||o;r.href=t,r.rel="stylesheet",r.type="text/css";for(u in i)r.setAttribute(u,i[u]);a||(m.parentNode.insertBefore(r,m),p(n,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))},Modernizr.addTest("ie8compat",function(){return!window.addEventListener&&document.documentMode&&7===document.documentMode});