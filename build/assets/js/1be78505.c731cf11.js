(self.webpackChunknym_docs=self.webpackChunknym_docs||[]).push([[9514],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5747:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return je}});var r=n(7294),a=n(3905),o=n(2263),l=n(6291),c=n(261),i=n(6010),s=n(3018),u=n(3783),d=n(7898),p=n(5537),m=n(7462),f=function(e){return r.createElement("svg",(0,m.Z)({width:"20",height:"20","aria-hidden":"true"},e),r.createElement("g",{fill:"#7a7a7a"},r.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),r.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},h=n(4973),y=n(3366),v=n(6742),b=n(3919),g=n(8617),k="menuLinkText_1J2g",E=["items"],C=["item"],Z=["item","onItemClick","activePath"],_=["item","onItemClick","activePath"],N=function e(t,n){return"link"===t.type?(0,s.Mg)(t.href,n):"category"===t.type&&t.items.some((function(t){return e(t,n)}))},T=(0,r.memo)((function(e){var t=e.items,n=(0,y.Z)(e,E);return r.createElement(r.Fragment,null,t.map((function(e,t){return r.createElement(j,(0,m.Z)({key:t,item:e},n))})))}));function j(e){var t=e.item,n=(0,y.Z)(e,C);switch(t.type){case"category":return 0===t.items.length?null:r.createElement(S,(0,m.Z)({item:t},n));case"link":default:return r.createElement(x,(0,m.Z)({item:t},n))}}function S(e){var t,n=e.item,a=e.onItemClick,o=e.activePath,l=(0,y.Z)(e,Z),c=n.items,u=n.label,d=n.collapsible,p=N(n,o),f=(0,s.uR)({initialState:function(){return!!d&&(!p&&n.collapsed)}}),h=f.collapsed,v=f.setCollapsed,b=f.toggleCollapsed;return function(e){var t=e.isActive,n=e.collapsed,a=e.setCollapsed,o=(0,s.D9)(t);(0,r.useEffect)((function(){t&&!o&&n&&a(!1)}),[t,o,n])}({isActive:p,collapsed:h,setCollapsed:v}),r.createElement("li",{className:(0,i.Z)("menu__list-item",{"menu__list-item--collapsed":h})},r.createElement("a",(0,m.Z)({className:(0,i.Z)("menu__link",(t={"menu__link--sublist":d,"menu__link--active":d&&p},t[k]=!d,t)),onClick:d?function(e){e.preventDefault(),b()}:void 0,href:d?"#":void 0},l),u),r.createElement(s.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:h},r.createElement(T,{items:c,tabIndex:h?-1:0,onItemClick:a,activePath:o})))}function x(e){var t=e.item,n=e.onItemClick,a=e.activePath,o=(0,y.Z)(e,_),l=t.href,c=t.label,s=N(t,a);return r.createElement("li",{className:"menu__list-item",key:c},r.createElement(v.Z,(0,m.Z)({className:(0,i.Z)("menu__link",{"menu__link--active":s}),to:l},(0,b.Z)(l)&&{isNavLink:!0,exact:!0,onClick:n},o),(0,b.Z)(l)?c:r.createElement("span",null,c,r.createElement(g.Z,null))))}var O="sidebar_15mo",P="sidebarWithHideableNavbar_267A",w="sidebarHidden_2kNb",I="sidebarLogo_3h0W",L="menu_Bmed",B="menuWithAnnouncementBar_2WvA",A="collapseSidebarButton_1CGd",D="collapseSidebarButtonIcon_3E-R";function M(e){var t=e.onClick;return r.createElement("button",{type:"button",title:(0,h.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,h.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,i.Z)("button button--secondary button--outline",A),onClick:t},r.createElement(f,{className:D}))}function R(e){var t,n,a=e.path,o=e.sidebar,l=e.onCollapse,c=e.isHidden,u=function(){var e=(0,s.nT)().isClosed,t=(0,r.useState)(!e),n=t[0],a=t[1];return(0,d.Z)((function(t){var n=t.scrollY;e||a(0===n)})),n}(),m=(0,s.LU)(),f=m.navbar.hideOnScroll,h=m.hideableSidebar,y=(0,s.nT)().isClosed;return r.createElement("div",{className:(0,i.Z)(O,(t={},t[P]=f,t[w]=c,t))},f&&r.createElement(p.Z,{tabIndex:-1,className:I}),r.createElement("nav",{className:(0,i.Z)("menu thin-scrollbar",L,(n={},n[B]=!y&&u,n))},r.createElement("ul",{className:"menu__list"},r.createElement(T,{items:o,activePath:a}))),h&&r.createElement(M,{onClick:l}))}var F=function(e){var t=e.toggleSidebar,n=e.sidebar,a=e.path;return r.createElement("ul",{className:"menu__list"},r.createElement(T,{items:n,activePath:a,onItemClick:function(){return t()}}))};function H(e){return r.createElement(s.Cv,{component:F,props:e})}var z=r.memo(R),W=r.memo(H);function U(e){var t=(0,u.Z)(),n="desktop"===t||"ssr"===t,a="mobile"===t;return r.createElement(r.Fragment,null,n&&r.createElement(z,e),a&&r.createElement(W,e))}var Y={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},$={Prism:n(7410).Z,theme:Y};function V(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function J(){return(J=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var K=/\r\n|\r|\n/,G=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},X=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},q=function(e,t){var n=e.plain,r=Object.create(null),a=e.styles.reduce((function(e,n){var r=n.languages,a=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=J({},e[t],a);e[t]=n})),e}),r);return a.root=n,a.plain=J({},n,{backgroundColor:null}),a};function Q(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var ee=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),V(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?q(e.theme,e.language):void 0;return t.themeDict=n})),V(this,"getLineProps",(function(e){var n=e.key,r=e.className,a=e.style,o=J({},Q(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(o.style=l.plain),void 0!==a&&(o.style=void 0!==o.style?J({},o.style,a):a),void 0!==n&&(o.key=n),r&&(o.className+=" "+r),o})),V(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,a=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===a&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===a&&!r)return o[n[0]];var l=r?{display:"inline-block"}:{},c=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[l].concat(c))}})),V(this,"getTokenProps",(function(e){var n=e.key,r=e.className,a=e.style,o=e.token,l=J({},Q(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==a&&(l.style=void 0!==l.style?J({},l.style,a):a),void 0!==n&&(l.key=n),r&&(l.className+=" "+r),l})),V(this,"tokenize",(function(e,t,n,r){var a={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",a);var o=a.tokens=e.tokenize(a.code,a.grammar,a.language);return e.hooks.run("after-tokenize",a),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,a=e.children,o=this.getThemeDict(this.props),l=t.languages[n];return a({tokens:function(e){for(var t=[[]],n=[e],r=[0],a=[e.length],o=0,l=0,c=[],i=[c];l>-1;){for(;(o=r[l]++)<a[l];){var s=void 0,u=t[l],d=n[l][o];if("string"==typeof d?(u=l>0?u:["plain"],s=d):(u=X(u,d.type),d.alias&&(u=X(u,d.alias)),s=d.content),"string"==typeof s){var p=s.split(K),m=p.length;c.push({types:u,content:p[0]});for(var f=1;f<m;f++)G(c),i.push(c=[]),c.push({types:u,content:p[f]})}else l++,t.push(u),n.push(s),r.push(0),a.push(s.length)}l--,t.pop(),n.pop(),r.pop(),a.pop()}return G(c),i}(void 0!==l?this.tokenize(t,r,l,n):[r]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component);var te=n(7594),ne=n.n(te),re={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},ae=n(5350),oe=function(){var e=(0,s.LU)().prism,t=(0,ae.Z)().isDarkTheme,n=e.theme||re,r=e.darkTheme||n;return t?r:n},le="codeBlockContainer_K1bP",ce="codeBlockContent_hGly",ie="codeBlockTitle_eoMF",se="codeBlock_23N8",ue="copyButton_Ue-o",de="codeBlockLines_39YC",pe=/{([\d,-]+)}/,me=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),r=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+r+")\\s*$")};function fe(e){var t=e.children,n=e.className,a=e.metastring,o=e.title,l=(0,s.LU)().prism,c=(0,r.useState)(!1),u=c[0],d=c[1],p=(0,r.useState)(!1),f=p[0],y=p[1];(0,r.useEffect)((function(){y(!0)}),[]);var v=(0,s.bc)(a)||o,b=(0,r.useRef)(null),g=[],k=oe(),E=Array.isArray(t)?t.join(""):t;if(a&&pe.test(a)){var C=a.match(pe)[1];g=ne()(C).filter((function(e){return e>0}))}var Z=n&&n.replace(/language-/,"");!Z&&l.defaultLanguage&&(Z=l.defaultLanguage);var _=E.replace(/\n$/,"");if(0===g.length&&void 0!==Z){for(var N,T="",j=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return me(["js","jsBlock"]);case"jsx":case"tsx":return me(["js","jsBlock","jsx"]);case"html":return me(["js","jsBlock","html"]);case"python":case"py":return me(["python"]);default:return me()}}(Z),S=E.replace(/\n$/,"").split("\n"),x=0;x<S.length;){var O=x+1,P=S[x].match(j);if(null!==P){switch(P.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":T+=O+",";break;case"highlight-start":N=O;break;case"highlight-end":T+=N+"-"+(O-1)+","}S.splice(x,1)}else x+=1}g=ne()(T),_=S.join("\n")}var w=function(){!function(e,t){var n=(void 0===t?{}:t).target,r=void 0===n?document.body:n,a=document.createElement("textarea"),o=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";var l=document.getSelection(),c=!1;l.rangeCount>0&&(c=l.getRangeAt(0)),r.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;var i=!1;try{i=document.execCommand("copy")}catch(s){}a.remove(),c&&(l.removeAllRanges(),l.addRange(c)),o&&o.focus()}(_),d(!0),setTimeout((function(){return d(!1)}),2e3)};return r.createElement(ee,(0,m.Z)({},$,{key:String(f),theme:k,code:_,language:Z}),(function(e){var t=e.className,n=e.style,a=e.tokens,o=e.getLineProps,l=e.getTokenProps;return r.createElement("div",{className:le},v&&r.createElement("div",{style:n,className:ie},v),r.createElement("div",{className:(0,i.Z)(ce,Z)},r.createElement("pre",{tabIndex:0,className:(0,i.Z)(t,se,"thin-scrollbar"),style:n},r.createElement("code",{className:de},a.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=o({line:e,key:t});return g.includes(t+1)&&(n.className+=" docusaurus-highlight-code-line"),r.createElement("span",(0,m.Z)({key:t},n),e.map((function(e,t){return r.createElement("span",(0,m.Z)({key:t},l({token:e,key:t})))})))})))),r.createElement("button",{ref:b,type:"button","aria-label":(0,h.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,i.Z)(ue,"clean-btn"),onClick:w},u?r.createElement(h.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):r.createElement(h.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}var he=n(6159),ye="details_1VDD";function ve(e){var t=Object.assign({},e);return r.createElement(s.PO,(0,m.Z)({},t,{className:(0,i.Z)("alert alert--info",ye,t.className)}))}var be={code:function(e){var t=e.children;return(0,r.isValidElement)(t)?t:t.includes("\n")?r.createElement(fe,e):r.createElement("code",e)},a:function(e){return r.createElement(v.Z,e)},pre:function(e){var t,n=e.children;return(0,r.isValidElement)(null==n||null==(t=n.props)?void 0:t.children)?null==n?void 0:n.props.children:r.createElement(fe,(0,r.isValidElement)(n)?null==n?void 0:n.props:Object.assign({},e))},details:function(e){var t=r.Children.toArray(e.children),n=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),a=r.createElement(r.Fragment,null,t.filter((function(e){return e!==n})));return r.createElement(ve,(0,m.Z)({},e,{summary:n}),a)},h1:(0,he.Z)("h1"),h2:(0,he.Z)("h2"),h3:(0,he.Z)("h3"),h4:(0,he.Z)("h4"),h5:(0,he.Z)("h5"),h6:(0,he.Z)("h6")},ge=n(4608),ke="backToTopButton_35hR",Ee="backToTopButtonShow_18ls";function Ce(){var e=(0,r.useRef)(null);return{smoothScrollTop:function(){var t;e.current=(t=null,function e(){var n=document.documentElement.scrollTop;n>0&&(t=requestAnimationFrame(e),window.scrollTo(0,Math.floor(.85*n)))}(),function(){t&&cancelAnimationFrame(t)})},cancelScrollToTop:function(){return null==e.current?void 0:e.current()}}}var Ze=function(){var e,t=Ce(),n=t.smoothScrollTop,a=t.cancelScrollToTop,o=(0,r.useState)(!1),l=o[0],c=o[1];return(0,d.Z)((function(e,t){var n=e.scrollY;if(t){var r=n<t.scrollY;if(r||a(),n<300)c(!1);else if(r){var o=document.documentElement.scrollHeight;n+window.innerHeight<o&&c(!0)}else c(!1)}}),[]),r.createElement("button",{className:(0,i.Z)("clean-btn",ke,(e={},e[Ee]=l,e)),type:"button",title:"Scroll to top",onClick:function(){return n()}},r.createElement("svg",{viewBox:"0 0 24 24",width:"28"},r.createElement("path",{d:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",fill:"currentColor"})))},_e=n(5977),Ne={docPage:"docPage_31aa",docMainContainer:"docMainContainer_3ufF",docSidebarContainer:"docSidebarContainer_3Kbt",docMainContainerEnhanced:"docMainContainerEnhanced_3NYZ",docSidebarContainerHidden:"docSidebarContainerHidden_3pA8",collapsedDocSidebar:"collapsedDocSidebar_2JMH",expandSidebarButtonIcon:"expandSidebarButtonIcon_1naQ",docItemWrapperEnhanced:"docItemWrapperEnhanced_2vyJ"};function Te(e){var t,n,l,u=e.currentDocRoute,d=e.versionMetadata,p=e.children,m=(0,o.Z)().isClient,y=d.pluginId,v=d.version,b=u.sidebar,g=b?d.docsSidebars[b]:void 0,k=(0,r.useState)(!1),E=k[0],C=k[1],Z=(0,r.useState)(!1),_=Z[0],N=Z[1],T=(0,r.useCallback)((function(){_&&N(!1),C(!E)}),[_]);return r.createElement(c.Z,{key:m,wrapperClassName:s.kM.wrapper.docPages,pageClassName:s.kM.page.docPage,searchMetadatas:{version:v,tag:(0,s.os)(y,v)}},r.createElement("div",{className:Ne.docPage},r.createElement(Ze,null),g&&r.createElement("aside",{className:(0,i.Z)(Ne.docSidebarContainer,(t={},t[Ne.docSidebarContainerHidden]=E,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(Ne.docSidebarContainer)&&E&&N(!0)}},r.createElement(U,{key:b,sidebar:g,path:u.path,onCollapse:T,isHidden:_}),_&&r.createElement("div",{className:Ne.collapsedDocSidebar,title:(0,h.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,h.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:T,onClick:T},r.createElement(f,{className:Ne.expandSidebarButtonIcon}))),r.createElement("main",{className:(0,i.Z)(Ne.docMainContainer,(n={},n[Ne.docMainContainerEnhanced]=E||!g,n))},r.createElement("div",{className:(0,i.Z)("container padding-top--md padding-bottom--lg",Ne.docItemWrapper,(l={},l[Ne.docItemWrapperEnhanced]=E,l))},r.createElement(a.Zo,{components:be},p)))))}var je=function(e){var t=e.route.routes,n=e.versionMetadata,a=e.location,o=t.find((function(e){return(0,_e.LX)(a.pathname,e)}));return o?r.createElement(Te,{currentDocRoute:o,versionMetadata:n},(0,l.Z)(t,{versionMetadata:n})):r.createElement(ge.default,e)}},6159:function(e,t,n){"use strict";n.d(t,{N:function(){return p},Z:function(){return m}});var r=n(3366),a=n(7462),o=n(7294),l=n(6010),c=n(4973),i=n(3018),s="enhancedAnchor_2LWZ",u="h1Heading_27L5",d=["id"],p=function(e){var t=Object.assign({},e);return o.createElement("header",null,o.createElement("h1",(0,a.Z)({},t,{id:void 0,className:u}),t.children))},m=function(e){return"h1"===e?p:(t=e,function(e){var n,a=e.id,u=(0,r.Z)(e,d),p=(0,i.LU)().navbar.hideOnScroll;return a?o.createElement(t,u,o.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,l.Z)("anchor",(n={},n[s]=!p,n)),id:a}),u.children,o.createElement("a",{className:"hash-link",href:"#"+a,title:(0,c.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):o.createElement(t,u)});var t}},7594:function(e,t){function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,a,o]=t;if(r&&o){r=parseInt(r),o=parseInt(o);const e=r<o?1:-1;"-"!==a&&".."!==a&&"\u2025"!==a||(o+=e);for(let t=r;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);