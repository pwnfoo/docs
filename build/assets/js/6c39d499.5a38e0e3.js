"use strict";(self.webpackChunknym_docs=self.webpackChunknym_docs||[]).push([[7206],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6650:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={sidebar_label:"Use Apps",description:"Tutorials for building Privacy Enhanced Applications (or integrating existing apps with Nym)",hide_title:!1,title:"Use Apps with Nym"},l=void 0,p={unversionedId:"use-apps/index",id:"version-0.11.0/use-apps/index",isDocsHomePage:!1,title:"Use Apps with Nym",description:"Tutorials for building Privacy Enhanced Applications (or integrating existing apps with Nym)",source:"@site/versioned_docs/version-0.11.0/use-apps/index.md",sourceDirName:"use-apps",slug:"/use-apps/index",permalink:"/docs/0.11.0/use-apps/index",version:"0.11.0",lastUpdatedAt:1629392815,formattedLastUpdatedAt:"8/19/2021",frontMatter:{sidebar_label:"Use Apps",description:"Tutorials for building Privacy Enhanced Applications (or integrating existing apps with Nym)",hide_title:!1,title:"Use Apps with Nym"},sidebar:"version-0.11.0/sidebar",previous:{title:"Mixnode Troubleshooting FAQ",permalink:"/docs/0.11.0/run-nym-nodes/troubleshooting"},next:{title:"Blockstream Green",permalink:"/docs/0.11.0/use-apps/blockstream-green"}},c=[{value:"Running the nym-socks5-client",id:"running-the-nym-socks5-client",children:[]}],u={toc:c};function m(e){var t=e.components,s=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The Nym SOCKS5 Client was built in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/0.11.0/run-nym-nodes/build-nym/"},"building nym")," section. If you haven't yet built Nym and want to run the code on this page, go there first."))),(0,i.kt)("p",null,"Nym is a general purpose system. We aim to provide the strongest possible protections for internet traffic and transactions."),(0,i.kt)("p",null,"The system is still very young, but it's starting to be able to do useful work. You can start using it today."),(0,i.kt)("p",null,"Many existing applications are able to use the SOCKS5 proxy protocol. They can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"nym-socks5-client")," to bounce their network traffic through the Nym network, like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Socks5 architecture",src:n(3741).Z})),(0,i.kt)("p",null,"The Nym network already runs the mixnet, and the ",(0,i.kt)("inlineCode",{parentName:"p"},"nym-network-requester")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"nym-client")," components. In order to use existing applications with Nym, you only need to set up the ",(0,i.kt)("inlineCode",{parentName:"p"},"nym-socks5-client"),"."),(0,i.kt)("p",null,"Note that the nym-network-requester we're running works only for specific applications. We are not running an open proxy, we have an allowed list of applications that can use the mixnet (currently Blockstream Green, Electrum, and KeyBase). We can add other applications upon request, just come talk to us in our dev chat. Or, you can ",(0,i.kt)("a",{parentName:"p",href:"/docs/0.11.0/run-nym-nodes/requester"},"set up your own")," ",(0,i.kt)("inlineCode",{parentName:"p"},"nym-network-requester"),", it's not very hard to do if you have access to a server."),(0,i.kt)("p",null,"The Nym SOCKS5 proxy runs on your local machine and exposes a SOCKS5 network proxy on a port. You can use it just like you would any other SOCKS5 proxy: you add drop the proxy address in an application's proxy settings, and all your TCP traffic is routed through the proxy. This makes it the easiest way to enable strong network privacy in existing applications, as many apps already support SOCKS5 out of the box. In this sense it's very similar to other socks proxies."),(0,i.kt)("p",null,"The Nym SOCKS5 proxy, though, does something quite interesting and different. Rather than simply copy data between TCP streams and making requests directly from the machine it's running on, it does the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"takes a TCP data stream in, e.g. a request from a crypto wallet"),(0,i.kt)("li",{parentName:"ul"},"chops up the TCP stream into multiple Sphinx packets, assigning sequence numbers to them, while leaving the TCP connection open for more data"),(0,i.kt)("li",{parentName:"ul"},"sends the Sphinx packets through the mixnet to a nym-network-requester. Packets are shuffled and mixed as they transit the mixnet."),(0,i.kt)("li",{parentName:"ul"},"nym-network-requester reassembles the original TCP stream using the sequence numbers, and makes the intended request."),(0,i.kt)("li",{parentName:"ul"},"nym-network-requester then does the whole process in reverse, chopping up the response into Sphinx packets and sending it back through the mixnet to the crypto wallet."),(0,i.kt)("li",{parentName:"ul"},'The crypto wallet receives its data, without even noticing that it wasn\'t talking to a "normal" SOCKS5 proxy.')),(0,i.kt)("h2",{id:"running-the-nym-socks5-client"},"Running the nym-socks5-client"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"Obligatory disclaimer time:")," The Nym mixnet is still under construction and has not undergone a security audit. Do not rely on it for strong privacy (yet)."))),(0,i.kt)("p",null,"After building the Nym platform code, initialize the client:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"nym-socks5-client init --id my-socks5-client --provider AFB7kzofcDSJ1feEJsfHE5uxq4wJecLz8MkWVywAzMCu.DZex1uSmS5iLxbc1zR96T1dDs9Wmi8ko7qjX4ACCTYQR@8yGFbT5feDpPmH66TveVjonpUn3tpvjobdvEWRbsTH9i\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"--provider")," field needs to be filled with the Nym address of a ",(0,i.kt)("inlineCode",{parentName:"p"},"nym-network-requester")," that can make network requests on your behalf. The address in the above example is one that we are currently running for the Milhon Testnet, but you can also ",(0,i.kt)("a",{parentName:"p",href:"/docs/0.11.0/run-nym-nodes/requester/"},"run your own")," if you want."),(0,i.kt)("p",null,"Then run the socks5 client locally:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"nym-socks5-client run --id my-socks5-client\n")),(0,i.kt)("p",null,"This will start up a SOCKS5 proxy on your local machine, at ",(0,i.kt)("inlineCode",{parentName:"p"},"localhost:1080"),"."),(0,i.kt)("p",null,"In the next few sections, we will show you how to run it with some existing applications. Later, we will discuss how you can use any application that can use SOCKS5 with Nym."))}m.isMDXComponent=!0},3741:function(e,t,n){t.Z=n.p+"assets/images/nym-socks5-architecture-a1772344a6311bf32464f68e63ccad06.png"}}]);