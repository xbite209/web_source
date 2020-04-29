!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.DOMPurify=t()}(this,function(){"use strict";function e(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function t(e){return function(t){for(var r=arguments.length,n=Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return m(e,t,n)}}function r(e){return function(){for(var t=arguments.length,r=Array(t),n=0;n<t;n++)r[n]=arguments[n];return y(e,r)}}function n(e,t){c&&c(e,null);for(var r=t.length;r--;){var n=t[r];if("string"==typeof n){var o=x(n);o!==n&&(s(t)||(t[r]=o),n=o)}e[n]=!0}return e}function o(e){var t={},r=void 0;for(r in e)m(l,e,[r])&&(t[r]=e[r]);return t}function i(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V(),t=function(e){return a(e)};if(t.version="2.0.8",t.removed=[],!e||!e.document||9!==e.document.nodeType)return t.isSupported=!1,t;var r=e.document,l=!1,c=!1,s=e.document,f=e.DocumentFragment,p=e.HTMLTemplateElement,m=e.Node,y=e.NodeFilter,X=e.NamedNodeMap,$=void 0===X?e.NamedNodeMap||e.MozNamedAttrMap:X,J=e.Text,Q=e.Comment,Z=e.DOMParser,ee=e.trustedTypes;if("function"==typeof p){var te=s.createElement("template");te.content&&te.content.ownerDocument&&(s=te.content.ownerDocument)}var re=Y(ee,r),ne=re?re.createHTML(""):"",oe=s,ie=oe.implementation,ae=oe.createNodeIterator,le=oe.getElementsByTagName,ce=oe.createDocumentFragment,se=r.importNode,ue={};t.isSupported=ie&&void 0!==ie.createHTMLDocument&&9!==s.documentMode;var de=j,fe=U,pe=P,me=W,ye=q,ge=G,he=B,ve=null,be=n({},[].concat(i(O),i(w),i(D),i(R),i(H))),Te=null,Ae=n({},[].concat(i(C),i(F),i(z),i(I))),xe=null,Se=null,Le=!0,Ee=!0,Me=!1,ke=!1,_e=!1,Ne=!1,Oe=!1,we=!1,De=!1,Re=!1,He=!1,Ce=!1,Fe=!0,ze=!0,Ie=!1,je={},Ue=n({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","plaintext","script","style","svg","template","thead","title","video","xmp"]),Pe=n({},["audio","video","img","source","image"]),We=null,Be=n({},["alt","class","for","id","label","name","pattern","placeholder","summary","title","value","style","xmlns"]),qe=null,Ge=s.createElement("form"),Ke=function(e){qe&&qe===e||(e&&"object"===(void 0===e?"undefined":K(e))||(e={}),ve="ALLOWED_TAGS"in e?n({},e.ALLOWED_TAGS):be,Te="ALLOWED_ATTR"in e?n({},e.ALLOWED_ATTR):Ae,We="ADD_URI_SAFE_ATTR"in e?n(o(Be),e.ADD_URI_SAFE_ATTR):Be,xe="FORBID_TAGS"in e?n({},e.FORBID_TAGS):{},Se="FORBID_ATTR"in e?n({},e.FORBID_ATTR):{},je="USE_PROFILES"in e&&e.USE_PROFILES,Le=!1!==e.ALLOW_ARIA_ATTR,Ee=!1!==e.ALLOW_DATA_ATTR,Me=e.ALLOW_UNKNOWN_PROTOCOLS||!1,ke=e.SAFE_FOR_JQUERY||!1,_e=e.SAFE_FOR_TEMPLATES||!1,Ne=e.WHOLE_DOCUMENT||!1,De=e.RETURN_DOM||!1,Re=e.RETURN_DOM_FRAGMENT||!1,He=e.RETURN_DOM_IMPORT||!1,Ce=e.RETURN_TRUSTED_TYPE||!1,we=e.FORCE_BODY||!1,Fe=!1!==e.SANITIZE_DOM,ze=!1!==e.KEEP_CONTENT,Ie=e.IN_PLACE||!1,he=e.ALLOWED_URI_REGEXP||he,_e&&(Ee=!1),Re&&(De=!0),je&&(ve=n({},[].concat(i(H))),Te=[],!0===je.html&&(n(ve,O),n(Te,C)),!0===je.svg&&(n(ve,w),n(Te,F),n(Te,I)),!0===je.svgFilters&&(n(ve,D),n(Te,F),n(Te,I)),!0===je.mathMl&&(n(ve,R),n(Te,z),n(Te,I))),e.ADD_TAGS&&(ve===be&&(ve=o(ve)),n(ve,e.ADD_TAGS)),e.ADD_ATTR&&(Te===Ae&&(Te=o(Te)),n(Te,e.ADD_ATTR)),e.ADD_URI_SAFE_ATTR&&n(We,e.ADD_URI_SAFE_ATTR),ze&&(ve["#text"]=!0),Ne&&n(ve,["html","head","body"]),ve.table&&(n(ve,["tbody"]),delete xe.tbody),d&&d(e),qe=e)},Ve=function(e){T(t.removed,{element:e});try{e.parentNode.removeChild(e)}catch(t){e.outerHTML=ne}},Ye=function(e,r){try{T(t.removed,{attribute:r.getAttributeNode(e),from:r})}catch(e){T(t.removed,{attribute:null,from:r})}r.removeAttribute(e)},Xe=function(e){var t=void 0,r=void 0;if(we)e="<remove></remove>"+e;else{var o=S(e,/^[\s]+/);r=o&&o[0]}var i=re?re.createHTML(e):e;if(l)try{t=(new Z).parseFromString(i,"text/html")}catch(e){}if(c&&n(xe,["title"]),!t||!t.documentElement){var a=(t=ie.createHTMLDocument("")).body;a.parentNode.removeChild(a.parentNode.firstElementChild),a.outerHTML=i}return e&&r&&t.body.insertBefore(s.createTextNode(r),t.body.childNodes[0]||null),le.call(t,Ne?"html":"body")[0]};t.isSupported&&(function(){try{Xe('<svg><p><textarea><img src="</textarea><img src=x abc=1//">').querySelector("svg img")&&(l=!0)}catch(e){}}(),function(){try{var e=Xe("<x/><title>&lt;/title&gt;&lt;img&gt;");k(/<\/title/,e.querySelector("title").innerHTML)&&(c=!0)}catch(e){}}());var $e=function(e){return ae.call(e.ownerDocument||e,e,y.SHOW_ELEMENT|y.SHOW_COMMENT|y.SHOW_TEXT,function(){return y.FILTER_ACCEPT},!1)},Je=function(e){return!(e instanceof J||e instanceof Q)&&!("string"==typeof e.nodeName&&"string"==typeof e.textContent&&"function"==typeof e.removeChild&&e.attributes instanceof $&&"function"==typeof e.removeAttribute&&"function"==typeof e.setAttribute&&"string"==typeof e.namespaceURI)},Qe=function(e){return"object"===(void 0===m?"undefined":K(m))?e instanceof m:e&&"object"===(void 0===e?"undefined":K(e))&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},Ze=function(e,r,n){ue[e]&&g(ue[e],function(e){e.call(t,r,n,qe)})},et=function(e){var r=void 0;if(Ze("beforeSanitizeElements",e,null),Je(e))return Ve(e),!0;var n=x(e.nodeName);if(Ze("uponSanitizeElement",e,{tagName:n,allowedTags:ve}),("svg"===n||"math"===n)&&0!==e.querySelectorAll("p, br").length)return Ve(e),!0;if(!ve[n]||xe[n]){if(ze&&!Ue[n]&&"function"==typeof e.insertAdjacentHTML)try{var o=e.innerHTML;e.insertAdjacentHTML("AfterEnd",re?re.createHTML(o):o)}catch(e){}return Ve(e),!0}return"noscript"===n&&k(/<\/noscript/i,e.innerHTML)?(Ve(e),!0):"noembed"===n&&k(/<\/noembed/i,e.innerHTML)?(Ve(e),!0):(!ke||e.firstElementChild||e.content&&e.content.firstElementChild||!k(/</g,e.textContent)||(T(t.removed,{element:e.cloneNode()}),e.innerHTML?e.innerHTML=L(e.innerHTML,/</g,"&lt;"):e.innerHTML=L(e.textContent,/</g,"&lt;")),_e&&3===e.nodeType&&(r=e.textContent,r=L(r,de," "),r=L(r,fe," "),e.textContent!==r&&(T(t.removed,{element:e.cloneNode()}),e.textContent=r)),Ze("afterSanitizeElements",e,null),!1)},tt=function(e,t,r){if(Fe&&("id"===t||"name"===t)&&(r in s||r in Ge))return!1;if(Ee&&k(pe,t));else if(Le&&k(me,t));else{if(!Te[t]||Se[t])return!1;if(We[t]);else if(k(he,L(r,ge,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==E(r,"data:")||!Pe[e]){if(Me&&!k(ye,L(r,ge,"")));else if(r)return!1}else;}return!0},rt=function(e){var r=void 0,n=void 0,o=void 0,i=void 0,a=void 0;Ze("beforeSanitizeAttributes",e,null);var l=e.attributes;if(l){var c={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:Te};for(a=l.length;a--;){var s=r=l[a],d=s.name,f=s.namespaceURI;if(n=M(r.value),o=x(d),c.attrName=o,c.attrValue=n,c.keepAttr=!0,c.forceKeepAttr=void 0,Ze("uponSanitizeAttribute",e,c),n=c.attrValue,!c.forceKeepAttr){if("name"===o&&"IMG"===e.nodeName&&l.id)i=l.id,l=A(l,[]),Ye("id",e),Ye(d,e),h(l,i)>a&&e.setAttribute("id",i.value);else{if("INPUT"===e.nodeName&&"type"===o&&"file"===n&&c.keepAttr&&(Te[o]||!Se[o]))continue;"id"===d&&e.setAttribute(d,""),Ye(d,e)}if(c.keepAttr)if(ke&&k(/\/>/i,n))Ye(d,e);else if(k(/svg|math/i,e.namespaceURI)&&k(_("</("+v(u(Ue),"|")+")","i"),n))Ye(d,e);else{_e&&(n=L(n,de," "),n=L(n,fe," "));var p=e.nodeName.toLowerCase();if(tt(p,o,n))try{f?e.setAttributeNS(f,d,n):e.setAttribute(d,n),b(t.removed)}catch(e){}}}}Ze("afterSanitizeAttributes",e,null)}},nt=function e(t){var r=void 0,n=$e(t);for(Ze("beforeSanitizeShadowDOM",t,null);r=n.nextNode();)Ze("uponSanitizeShadowNode",r,null),et(r)||(r.content instanceof f&&e(r.content),rt(r));Ze("afterSanitizeShadowDOM",t,null)};return t.sanitize=function(n,o){var i=void 0,a=void 0,l=void 0,c=void 0,s=void 0;if(n||(n="\x3c!--\x3e"),"string"!=typeof n&&!Qe(n)){if("function"!=typeof n.toString)throw N("toString is not a function");if("string"!=typeof(n=n.toString()))throw N("dirty is not a string, aborting")}if(!t.isSupported){if("object"===K(e.toStaticHTML)||"function"==typeof e.toStaticHTML){if("string"==typeof n)return e.toStaticHTML(n);if(Qe(n))return e.toStaticHTML(n.outerHTML)}return n}if(Oe||Ke(o),t.removed=[],"string"==typeof n&&(Ie=!1),Ie);else if(n instanceof m)1===(a=(i=Xe("\x3c!--\x3e")).ownerDocument.importNode(n,!0)).nodeType&&"BODY"===a.nodeName?i=a:"HTML"===a.nodeName?i=a:i.appendChild(a);else{if(!De&&!_e&&!Ne&&Ce&&-1===n.indexOf("<"))return re?re.createHTML(n):n;if(!(i=Xe(n)))return De?null:ne}i&&we&&Ve(i.firstChild);for(var u=$e(Ie?n:i);l=u.nextNode();)3===l.nodeType&&l===c||et(l)||(l.content instanceof f&&nt(l.content),rt(l),c=l);if(c=null,Ie)return n;if(De){if(Re)for(s=ce.call(i.ownerDocument);i.firstChild;)s.appendChild(i.firstChild);else s=i;return He&&(s=se.call(r,s,!0)),s}var d=Ne?i.outerHTML:i.innerHTML;return _e&&(d=L(d,de," "),d=L(d,fe," ")),re&&Ce?re.createHTML(d):d},t.setConfig=function(e){Ke(e),Oe=!0},t.clearConfig=function(){qe=null,Oe=!1},t.isValidAttribute=function(e,t,r){qe||Ke({});var n=x(e),o=x(t);return tt(n,o,r)},t.addHook=function(e,t){"function"==typeof t&&(ue[e]=ue[e]||[],T(ue[e],t))},t.removeHook=function(e){ue[e]&&b(ue[e])},t.removeHooks=function(e){ue[e]&&(ue[e]=[])},t.removeAllHooks=function(){ue={}},t}var l=Object.hasOwnProperty,c=Object.setPrototypeOf,s=Object.isFrozen,u=Object.keys,d=Object.freeze,f=Object.seal,p="undefined"!=typeof Reflect&&Reflect,m=p.apply,y=p.construct;m||(m=function(e,t,r){return e.apply(t,r)}),d||(d=function(e){return e}),f||(f=function(e){return e}),y||(y=function(t,r){return new(Function.prototype.bind.apply(t,[null].concat(e(r))))});var g=t(Array.prototype.forEach),h=t(Array.prototype.indexOf),v=t(Array.prototype.join),b=t(Array.prototype.pop),T=t(Array.prototype.push),A=t(Array.prototype.slice),x=t(String.prototype.toLowerCase),S=t(String.prototype.match),L=t(String.prototype.replace),E=t(String.prototype.indexOf),M=t(String.prototype.trim),k=t(RegExp.prototype.test),_=r(RegExp),N=r(TypeError),O=d(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),w=d(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","audio","canvas","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","video","view","vkern"]),D=d(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),R=d(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),H=d(["#text"]),C=d(["accept","action","align","alt","autocomplete","background","bgcolor","border","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","coords","crossorigin","datetime","default","dir","disabled","download","enctype","face","for","headers","height","hidden","high","href","hreflang","id","integrity","ismap","label","lang","list","loop","low","max","maxlength","media","method","min","minlength","multiple","name","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","type","usemap","valign","value","width","xmlns"]),F=d(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","tabindex","targetx","targety","transform","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),z=d(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),I=d(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),j=f(/\{\{[\s\S]*|[\s\S]*\}\}/gm),U=f(/<%[\s\S]*|[\s\S]*%>/gm),P=f(/^data-[\-\w.\u00B7-\uFFFF]/),W=f(/^aria-[\-\w]+$/),B=f(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),q=f(/^(?:\w+script|data):/i),G=f(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205f\u3000]/g),K="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},V=function(){return"undefined"==typeof window?null:window},Y=function(e,t){if("object"!==(void 0===e?"undefined":K(e))||"function"!=typeof e.createPolicy)return null;var r=null;t.currentScript&&t.currentScript.hasAttribute("data-tt-policy-suffix")&&(r=t.currentScript.getAttribute("data-tt-policy-suffix"));var n="dompurify"+(r?"#"+r:"");try{return e.createPolicy(n,{createHTML:function(e){return e}})}catch(e){return console.warn("TrustedTypes policy "+n+" could not be created."),null}};return a()});
