"use strict";(self.webpackChunknym_docs=self.webpackChunknym_docs||[]).push([[3527],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=i,y=p["".concat(u,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(y,a(a({ref:t},c),{},{components:n})):r.createElement(y,a({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3983:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],l={sidebar_label:"Run Nym Nodes",description:"How to build the Nym platform. Nym is relatively simple to build and run on Mac OS X, Linux, and Windows.",hide_title:!1,title:"Run Nym Nodes"},u=void 0,s={unversionedId:"run-nym-nodes/index",id:"run-nym-nodes/index",isDocsHomePage:!1,title:"Run Nym Nodes",description:"How to build the Nym platform. Nym is relatively simple to build and run on Mac OS X, Linux, and Windows.",source:"@site/docs/run-nym-nodes/index.md",sourceDirName:"run-nym-nodes",slug:"/run-nym-nodes/index",permalink:"/docs/current/run-nym-nodes/index",version:"current",lastUpdatedAt:1629392756,formattedLastUpdatedAt:"8/19/2021",frontMatter:{sidebar_label:"Run Nym Nodes",description:"How to build the Nym platform. Nym is relatively simple to build and run on Mac OS X, Linux, and Windows.",hide_title:!1,title:"Run Nym Nodes"},sidebar:"sidebar",previous:{title:"Links",permalink:"/docs/current/overview/links"},next:{title:"Incentives",permalink:"/docs/current/run-nym-nodes/incentives"}},c=[{value:"Installing pre-built binaries",id:"installing-pre-built-binaries",children:[]},{value:"Building Nym",id:"building-nym",children:[]}],d={toc:c};function p(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"installing-pre-built-binaries"},"Installing pre-built binaries"),(0,o.kt)("p",null,"The Nym ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nymtech/nym/releases"},"release page")," has pre-built binaries which ",(0,o.kt)("em",{parentName:"p"},"should")," work on Ubuntu 20.04 and other Debian-based systems, but at this stage cannot be guaranteed to work everywhere."),(0,o.kt)("p",null,"Later, when we're focused more on things like packaging, we will ensure that all components get built for all operating systems. There is a third-party install script which can be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gyrusdentatus/nym_autoinstall"},"here"),", although this may not always be up to date with the newest version of the testnet."),(0,o.kt)("p",null,"If the pre-built binaries don't work or are unavailable for your system, you will need to build the platform yourself."),(0,o.kt)("h3",{id:"building-nym"},"Building Nym"),(0,o.kt)("p",null,"Nym has two main codebases:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the Nym platform (",(0,o.kt)("a",{parentName:"li",href:"build-nym"},"build instructions"),"), written in Rust. This contains all of our code ",(0,o.kt)("em",{parentName:"li"},"except")," for the validators."),(0,o.kt)("li",{parentName:"ul"},"the Nym validators (",(0,o.kt)("a",{parentName:"li",href:"validators"},"build instructions"),"), written in Go.")))}p.isMDXComponent=!0}}]);