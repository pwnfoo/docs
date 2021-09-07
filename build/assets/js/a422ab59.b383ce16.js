"use strict";(self.webpackChunknym_docs=self.webpackChunknym_docs||[]).push([[7571],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return c}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=m(n),c=i,h=u["".concat(s,".").concat(c)]||u[c]||p[c]||o;return n?a.createElement(h,r(r({ref:t},d),{},{components:n})):a.createElement(h,r({ref:t},d))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var m=2;m<o;m++)r[m]=n[m];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3795:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return m},toc:function(){return d},default:function(){return u}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),r=["components"],l={sidebar_label:"Mixnodes",description:"Mixnodes accept Sphinx packets, shuffle packets together, and forward them onwards, providing strong privacy for internet users.",hide_title:!1,title:"Mixnodes"},s=void 0,m={unversionedId:"run-nym-nodes/mixnodes",id:"run-nym-nodes/mixnodes",isDocsHomePage:!1,title:"Mixnodes",description:"Mixnodes accept Sphinx packets, shuffle packets together, and forward them onwards, providing strong privacy for internet users.",source:"@site/docs/run-nym-nodes/mixnodes.md",sourceDirName:"run-nym-nodes",slug:"/run-nym-nodes/mixnodes",permalink:"/docs/current/run-nym-nodes/mixnodes",version:"current",lastUpdatedAt:1629392756,formattedLastUpdatedAt:"8/19/2021",frontMatter:{sidebar_label:"Mixnodes",description:"Mixnodes accept Sphinx packets, shuffle packets together, and forward them onwards, providing strong privacy for internet users.",hide_title:!1,title:"Mixnodes"},sidebar:"sidebar",previous:{title:"Building Nym",permalink:"/docs/current/run-nym-nodes/build-nym"},next:{title:"Validators",permalink:"/docs/current/run-nym-nodes/validators"}},d=[{value:"Running a mixnode for the first time",id:"running-a-mixnode-for-the-first-time",children:[]},{value:"Upgrading your mixnode from an earlier version",id:"upgrading-your-mixnode-from-an-earlier-version",children:[]},{value:"Initialize your mixnode",id:"initialize-your-mixnode",children:[]},{value:"Claim your mixnode in Telegram to receive tokens",id:"claim-your-mixnode-in-telegram-to-receive-tokens",children:[]},{value:"Run your mixnode",id:"run-your-mixnode",children:[]},{value:"Configure your firewall",id:"configure-your-firewall",children:[]},{value:"Describe your mixnode (optional)",id:"describe-your-mixnode-optional",children:[]},{value:"Automating your mixnode with systemd",id:"automating-your-mixnode-with-systemd",children:[]},{value:"Checking that your node is mixing correctly",id:"checking-that-your-node-is-mixing-correctly",children:[]},{value:"Viewing command help",id:"viewing-command-help",children:[]},{value:"Virtual IPs and hosting via Google &amp; AWS",id:"virtual-ips-and-hosting-via-google--aws",children:[]},{value:"Mixnode Hardware Specs",id:"mixnode-hardware-specs",children:[]},{value:"Metrics",id:"metrics",children:[]},{value:"Mixnode port reference",id:"mixnode-port-reference",children:[]}],p={toc:d};function u(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The Nym mixnode was built in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/current/run-nym-nodes/build-nym/"},"building nym")," section. If you haven't yet built Nym and want to run the code, go there first."))),(0,o.kt)("h3",{id:"running-a-mixnode-for-the-first-time"},"Running a mixnode for the first time"),(0,o.kt)("p",null,"After your build is finished, the ",(0,o.kt)("inlineCode",{parentName:"p"},"nym-mixnode")," binary will be located in ",(0,o.kt)("inlineCode",{parentName:"p"},"/path/to/nym/target/release/")," directory. You may move or copy it to wherever you wish (for example, you may wish to compile your binaries once locally and then move them to different machines)."),(0,o.kt)("p",null,"Alternatively, you can fetch the binaries from our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nymtech/nym/releases"},"releases page"),"."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Please note that unless you ran a mixnode in the Finney testnet, ",(0,o.kt)("strong",{parentName:"p"},"you will not be able to get PUNKs and bond your mixnode for the Milhon testnet"),".\nInstead please look into ",(0,o.kt)("a",{parentName:"p",href:"https://medium.com/nymtech/nym-delegated-staking-reputation-rewards-and-community-selection-bf0f346f7301"},"delegated staking")," for how you can get involved. "))),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you ",(0,o.kt)("strong",{parentName:"p"},"do")," delegate your PUNKs to others and shut down your node, remember to ",(0,o.kt)("strong",{parentName:"p"},"save the keys located in ",(0,o.kt)("inlineCode",{parentName:"strong"},"$HOME/.nym"),"!")))),(0,o.kt)("h3",{id:"upgrading-your-mixnode-from-an-earlier-version"},"Upgrading your mixnode from an earlier version"),(0,o.kt)("p",null,"If you have already been running a node on the Nym network ",(0,o.kt)("inlineCode",{parentName:"p"},"v0.10.0")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"0.10.1"),", grab the new binaries from our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nymtech/nym/releases"},"releases page")," and use the ",(0,o.kt)("inlineCode",{parentName:"p"},"upgrade")," command to upgrade your configs in place."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"./nym-mixnode upgrade --id your-node-id\n")),(0,o.kt)("p",null,"Claim your mixnode in the new testnet by following the steps in the 'Claim your mixnode in Telegram to receive tokens' section below. "),(0,o.kt)("h3",{id:"initialize-your-mixnode"},"Initialize your mixnode"),(0,o.kt)("p",null,"Here's how you initialize a mixnode if you are running one locally for testing, or just curious:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"./nym-mixnode init --id winston-smithnode --host $(curl ifconfig.me)\n")),(0,o.kt)("p",null,"To participate in the Nym testnet, ",(0,o.kt)("inlineCode",{parentName:"p"},"--host")," must be publicly routable on the internet. It can be either an Ipv4 or IPv6 address. Your node ",(0,o.kt)("em",{parentName:"p"},"must")," be able to send TCP data using ",(0,o.kt)("em",{parentName:"p"},"both")," IPv4 and IPv6 (as other nodes you talk to may use either protocol). The ",(0,o.kt)("inlineCode",{parentName:"p"},"$(curl ifconfig.me)")," command above returns your IP automatically using an external service."),(0,o.kt)("p",null,"You can install ",(0,o.kt)("inlineCode",{parentName:"p"},"curl")," with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt-get install curl\n")),(0,o.kt)("p",null,"Alternatively, you can enter your IP manually wish. If you do this, remember to enter your IP ",(0,o.kt)("strong",{parentName:"p"},"without")," any port information."),(0,o.kt)("p",null,"You can pick any ",(0,o.kt)("inlineCode",{parentName:"p"},"--id")," you want."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"init")," command will refuse to destroy existing mixnode keys."),(0,o.kt)("p",null,"During the ",(0,o.kt)("inlineCode",{parentName:"p"},"init")," process you will have the option to change the ",(0,o.kt)("inlineCode",{parentName:"p"},"http_api"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"verloc")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"mixnode")," ports from their default settings. If you wish to change these in the future you can edit their values in the ",(0,o.kt)("inlineCode",{parentName:"p"},"config.toml")," file created by the initialization process, which is located at ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.nym/mixnodes/<your-id>/"),"."),(0,o.kt)("h3",{id:"claim-your-mixnode-in-telegram-to-receive-tokens"},"Claim your mixnode in Telegram to receive tokens"),(0,o.kt)("p",null,"In order to take part in Testnet Milhon each mixnode operator needs to get PUNK, and bond them in the blockchain. "),(0,o.kt)("p",null,"Go to the ",(0,o.kt)("a",{parentName:"p",href:"https://testnet-milhon-wallet.nymtech.net/"},"Milhon Testnet web wallet")," and create a Nym address. It will look something like ",(0,o.kt)("inlineCode",{parentName:"p"},"punk1rytmasg5kavx4xasa0zg0u69jus8fn0r5j7nnt"),". ",(0,o.kt)("strong",{parentName:"p"},"Be sure to write down your mnemonic!")),(0,o.kt)("p",null,"Once you have a Nym testnet address, ask the Telegram bot for tokens. Run the ",(0,o.kt)("inlineCode",{parentName:"p"},"sign")," command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"./nym-mixnode sign --id winston-smithnode --text \"@<YOUR_TELEGRAM_USERNAME> <YOUR_PUNK_WALLET_ADDRESS>\"\n\n\n      _ __  _   _ _ __ ___\n     | '_ \\| | | | '_ \\ _ \\\n     | | | | |_| | | | | | |\n     |_| |_|\\__, |_| |_| |_|\n            |___/\n\n             (mixnode - version 0.11.0)\n\n    \nSigning the text \"@winston_smithnode_telegram punk1rytmasg5kavx4xasa0zg0u69jus8fn0r5j7nnt\" using your mixnode's Ed25519 identity key...\n\nSignature is: 3Zo2uMmK5x1WcMQWfqrd9MWw3N4updUBsAPM4tejfWMfMjS55jxsjyMXZ2pwBCJbhvBxkREBJ8R9ED2UcMRJprrU\n\nYou can claim your mixnode in Telegram by talking to our bot. To do so:\n\n* go to the 'https://t.me/nympunkbot' channel\n* copy the following line of text, and paste it into the channel\n\n/transfer punk1rytmasg5kavx4xasa0zg0u69jus8fn0r5j7nnt 3Zo2uMmK5x1WcMQWfqrd9MWw3N4updUBsAPM4tejfWMfMjS55jxsjyMXZ2pwBCJbhvBxkREBJ8R9ED2UcMRJprrU\n")),(0,o.kt)("p",null,"Then enter the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://t.me/nympunkbot"},"@nympunkbot"))," channel on Telegram and talk to the bot to associate your Telegram username with your mixnode key:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"/transfer punk1rytmasg5kavx4xasa0zg0u69jus8fn0r5j7nnt 3Zo2uMmK5x1WcMQWfqrd9MWw3N4updUBsAPM4tejfWMfMjS55jxsjyMXZ2pwBCJbhvBxkREBJ8R9ED2UcMRJprrU\n")),(0,o.kt)("p",null,"This proves to the bot that your username owns the mixnode. "),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"Do not send tokens to ",(0,o.kt)("inlineCode",{parentName:"strong"},"punk10pyejy66429refv3g35g2t7am0was7yalwrzen")," thinking this is your address - this is the address of the mixnet smart contract"),"."))),(0,o.kt)("h3",{id:"run-your-mixnode"},"Run your mixnode"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"./nym-mixnode run --id winston-smithnode\n")),(0,o.kt)("p",null,"Should return a nice clean startup:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'\n\n      _ __  _   _ _ __ ___\n     | \'_ \\| | | | \'_ \\ _ \\\n     | | | | |_| | | | | | |\n     |_| |_|\\__, |_| |_| |_|\n            |___/\n\n             (mixnode - version 0.11.0)\n\n    \nStarting mixnode winston-smithnode...\nValidator servers: ["http://testnet-milhon-validator1.nymtech.net:1317", "http://testnet-milhon-validator2.nymtech.net:1317"]\nListening for incoming packets on 89.144.210.254\nAnnouncing the following address: 89.144.210.254\n\nTo bond your mixnode, go to https://testnet-milhon-wallet.nymtech.net/.  You will need to provide the following:\n    Identity key: D5yLugjknoZ8gwEjQVvFSVckNPur6qYLSPFsKJcZUruR\n    Sphinx key: Fh7BjMTYv4KAzXjoFzsz3PUpJ2wT2i6fsSTDQQuJ916Y\n    Address: 89.144.210.254\n    Version: 0.11.0\n    \n 2021-07-21T13:31:34.672Z INFO  nym_mixnode::node > Starting nym mixnode\n 2021-07-21T13:31:35.083Z INFO  nym_mixnode::node > Starting node stats controller...\n 2021-07-21T13:31:35.084Z INFO  nym_mixnode::node > Starting packet delay-forwarder...\n 2021-07-21T13:31:35.084Z INFO  nym_mixnode::node > Starting socket listener...\n 2021-07-21T13:31:35.084Z INFO  nym_mixnode::node::listener > Running mix listener on "89.144.210.254:1789"\n 2021-07-21T13:31:35.084Z INFO  nym_mixnode::node           > Starting the round-trip-time measurer...\n\n\n')),(0,o.kt)("p",null,"Now bond your mixnode in the ",(0,o.kt)("a",{parentName:"p",href:"https://testnet-milhon-wallet.nymtech.net/"},"Milhon web wallet")," before running your node. "),(0,o.kt)("p",null,"If everything worked, you'll see your node running on the ",(0,o.kt)("a",{parentName:"p",href:"https://testnet-milhon-explorer.nymtech.net"},"Milhon network explorer"),"."),(0,o.kt)("p",null,"Note that your node's public identity key is displayed during startup, you can use it to identify your node in the list."),(0,o.kt)("p",null,"Keep reading to find out more about configuration options or troubleshooting if you're having issues. There are also some tips for running on AWS and other cloud providers, some of which require minor additional setup."),(0,o.kt)("p",null,"Have a look at the saved configuration files to see more configuration options."),(0,o.kt)("h3",{id:"configure-your-firewall"},"Configure your firewall"),(0,o.kt)("p",null,"The following commands will allow you to set up a firewall using ",(0,o.kt)("inlineCode",{parentName:"p"},"ufw"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# check if you have ufw installed\nufw version\n# if it is not installed, install with\nsudo apt install ufw -y\n# enable ufw\nsudo ufw enable\n# check the status of the firewall\nsudo ufw status\n")),(0,o.kt)("p",null,"Finally open your mixnode's p2p port, as well as ports for ssh, http, and https connections, and ports ",(0,o.kt)("inlineCode",{parentName:"p"},"8000")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"1790")," for verloc and measurement pings:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"sudo ufw allow 1789,1790,8000,22,80,443/tcp\n# check the status of the firewall\nsudo ufw status\n")),(0,o.kt)("p",null,"For more information about your mixnode's port configuration, check the ",(0,o.kt)("a",{parentName:"p",href:"#mixnode-port-reference"},"mixnode port reference table")," below."),(0,o.kt)("h3",{id:"describe-your-mixnode-optional"},"Describe your mixnode (optional)"),(0,o.kt)("p",null,"In order to easily identify your node via human-readable information later on in the development of the testnet when delegated staking is implemented, you can ",(0,o.kt)("inlineCode",{parentName:"p"},"describe")," your mixnode with the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"./nym-mixnode describe --id winston-smithnode\n")),(0,o.kt)("p",null,"Which will output something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"\n      _ __  _   _ _ __ ___\n     | '_ \\| | | | '_ \\ _ \\\n     | | | | |_| | | | | | |\n     |_| |_|\\__, |_| |_| |_|\n            |___/\n\n             (mixnode - version 0.11.0)\n\n\nname: winston-smithnode\ndescription: nym-mixnode hosted on Linode VPS in <location> with the following specs: <specs>.\nlink, e.g. https://mixnode.yourdomain.com: mixnode.mydomain.net\n")),(0,o.kt)("p",null,"This information will be shown in a (not yet built) mixnode page in in the Network Explorer, and help people make delegated staking decisions."),(0,o.kt)("h3",{id:"automating-your-mixnode-with-systemd"},"Automating your mixnode with systemd"),(0,o.kt)("p",null,"Although it's not totally necessary, it's useful to have the mixnode automatically start at system boot time. Here's a systemd service file to do that:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"[Unit]\nDescription=Nym Mixnode (0.11.0)\nStartLimitInterval=350\nStartLimitBurst=10\n\n[Service]\nUser=nym\nLimitNOFILE=65536\nExecStart=/home/nym/nym-mixnode run --id mix0100\nKillSignal=SIGINT\nRestart=on-failure\nRestartSec=30\n\n[Install]\nWantedBy=multi-user.target\n")),(0,o.kt)("p",null,"Put the above file onto your system at ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/systemd/system/nym-mixnode.service"),"."),(0,o.kt)("p",null,"Change the path in ",(0,o.kt)("inlineCode",{parentName:"p"},"ExecStart")," to point at your mixnode binary (",(0,o.kt)("inlineCode",{parentName:"p"},"nym-mixnode"),"), and the ",(0,o.kt)("inlineCode",{parentName:"p"},"User")," so it is the user you are running as."),(0,o.kt)("p",null,"If you have built nym on your server, and your username is ",(0,o.kt)("inlineCode",{parentName:"p"},"jetpanther"),", then the start command might look like this:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ExecStart=/home/jetpanther/nym/target/release/nym-mixnode run --id your-id"),". Basically, you want the full ",(0,o.kt)("inlineCode",{parentName:"p"},"/path/to/nym-mixnode run --id whatever-your-node-id-is")),(0,o.kt)("p",null,"Then run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl enable nym-mixnode.service\n")),(0,o.kt)("p",null,"Start your node:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"service nym-mixnode start\n")),(0,o.kt)("p",null,"This will cause your node to start at system boot time. If you restart your machine, the node will come back up automatically."),(0,o.kt)("p",null,"You can also do ",(0,o.kt)("inlineCode",{parentName:"p"},"service nym-mixnode stop")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"service nym-mixnode restart"),"."),(0,o.kt)("p",null,"Note: if you make any changes to your systemd script after you've enabled it, you will need to run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl daemon-reload\n")),(0,o.kt)("p",null,"This lets your operating system know it's ok to reload the service configuration."),(0,o.kt)("h4",{id:"set-the-ulimit"},"Set the ulimit"),(0,o.kt)("p",null,"Linux machines limit how many open files a user is allowed to have. This is called a ",(0,o.kt)("inlineCode",{parentName:"p"},"ulimit"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ulimit")," is 1024 by default on most systems. It needs to be set higher, because mixnodes make and receive a lot of connections to other nodes."),(0,o.kt)("p",null,"If you see errors such as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'Failed to accept incoming connection - Os { code: 24, kind: Other, message: "Too many open files" }\n')),(0,o.kt)("p",null,"This means that the operating system is preventing network connections from being made."),(0,o.kt)("h5",{id:"set-the-ulimit-via-systemd-service-file"},"Set the ulimit via ",(0,o.kt)("inlineCode",{parentName:"h5"},"systemd")," service file"),(0,o.kt)("p",null,"Query the ",(0,o.kt)("inlineCode",{parentName:"p"},"ulimit")," of your mixnode with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"grep -i \"open files\" /proc/$(ps -A -o pid,cmd|grep nym-mixnode | grep -v grep |head -n 1 | awk '{print $1}')/limits\n")),(0,o.kt)("p",null,"You'll get back the hard and soft limits, which looks something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"Max open files            65536                65536                files\n")),(0,o.kt)("p",null,"If your output is ",(0,o.kt)("strong",{parentName:"p"},"the same as above"),", your node will not encounter any ",(0,o.kt)("inlineCode",{parentName:"p"},"ulimit")," related issues."),(0,o.kt)("p",null,"However if either value is ",(0,o.kt)("inlineCode",{parentName:"p"},"1024"),", you must raise the limit via the systemd service file. Add the line:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"LimitNOFILE=65536\n")),(0,o.kt)("p",null,"Reload the daemon:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl daemon-reload\n")),(0,o.kt)("p",null,"or execute this as root for system-wide setting of ",(0,o.kt)("inlineCode",{parentName:"p"},"ulimit"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'echo "DefaultLimitNOFILE=65535" >> /etc/systemd/system.conf\n')),(0,o.kt)("p",null,"Reboot your machine and restart your node. When it comes back, use ",(0,o.kt)("inlineCode",{parentName:"p"},'cat /proc/$(pidof nym-mixnode)/limits | grep "Max open files"')," to make sure the limit has changed to 65535."),(0,o.kt)("h5",{id:"set-the-ulimit-on-non-systemd-based-distributions"},"Set the ulimit on ",(0,o.kt)("inlineCode",{parentName:"h5"},"non-systemd")," based distributions"),(0,o.kt)("p",null,"Edit ",(0,o.kt)("inlineCode",{parentName:"p"},"etc/security/conf")," and add the following lines:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# Example hard limit for max opened files\nusername        hard nofile 4096\n# Example soft limit for max opened files\nusername        soft nofile 4096\n")),(0,o.kt)("p",null,"Then reboot your server and restart your mixnode."),(0,o.kt)("h3",{id:"checking-that-your-node-is-mixing-correctly"},"Checking that your node is mixing correctly"),(0,o.kt)("p",null,"Once you've started your mixnode and it connects to the testnet validator, your node will automatically show up in the ",(0,o.kt)("a",{parentName:"p",href:"https://testnet-milhon-explorer.nymtech.net/"},"Nym testnet explorer"),", or checkout the ",(0,o.kt)("a",{parentName:"p",href:"https://nodes.guru/nym/leaderboard"},"leaderboard interface")," created by community member Evgeny Garanin from ",(0,o.kt)("a",{parentName:"p",href:"https://nodes.guru"},"Nodes Guru"),"."),(0,o.kt)("p",null,"For more details see ",(0,o.kt)("a",{parentName:"p",href:"https://nymtech.net/docs/run-nym-nodes/troubleshooting/#how-can-i-tell-my-node-is-up-and-running-and-mixing-traffic"},"Troubleshooting FAQ")),(0,o.kt)("h3",{id:"viewing-command-help"},"Viewing command help"),(0,o.kt)("p",null,"See all available options by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"./nym-mixnode --help\n")),(0,o.kt)("p",null,"Subcommand help is also available, e.g.:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"./nym-mixnode upgrade --help\n")),(0,o.kt)("h3",{id:"virtual-ips-and-hosting-via-google--aws"},"Virtual IPs and hosting via Google & AWS"),(0,o.kt)("p",null,"On some services (AWS, Google, etc), the machine's available bind address is not the same as the public IP address. In this case, bind ",(0,o.kt)("inlineCode",{parentName:"p"},"--host")," to the local machine address returned by ",(0,o.kt)("inlineCode",{parentName:"p"},"ifconfig"),", but also specify ",(0,o.kt)("inlineCode",{parentName:"p"},"--announce-host")," with the public IP. Please make sure that you pass the correct, routable ",(0,o.kt)("inlineCode",{parentName:"p"},"--announce-host"),"."),(0,o.kt)("p",null,"For example, on a Google machine, you may see the following output from the ",(0,o.kt)("inlineCode",{parentName:"p"},"ifconfig")," command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"ens4: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1460\n        inet 10.126.5.7  netmask 255.255.255.255  broadcast 0.0.0.0\n        ...\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"ens4")," interface has the IP ",(0,o.kt)("inlineCode",{parentName:"p"},"10.126.5.7"),". But this isn't the public IP of the machine, it's the IP of the machine on Google's internal network. Google uses virtual routing, so the public IP of this machine is something else, maybe ",(0,o.kt)("inlineCode",{parentName:"p"},"36.68.243.18"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"nym-mixnode init --host 10.126.5.7"),", initializes the mixnode, but no packets will be routed because ",(0,o.kt)("inlineCode",{parentName:"p"},"10.126.5.7")," is not on the public internet."),(0,o.kt)("p",null,"Trying ",(0,o.kt)("inlineCode",{parentName:"p"},"nym-mixnode init --host 36.68.243.18"),", you'll get back a startup error saying ",(0,o.kt)("inlineCode",{parentName:"p"},"AddrNotAvailable"),". This is because the mixnode doesn't know how to bind to a host that's not in the output of ",(0,o.kt)("inlineCode",{parentName:"p"},"ifconfig"),"."),(0,o.kt)("p",null,"The right thing to do in this situation is ",(0,o.kt)("inlineCode",{parentName:"p"},"nym-mixnode init --host 10.126.5.7 --announce-host 36.68.243.18"),"."),(0,o.kt)("p",null,"This will bind the mixnode to the available host ",(0,o.kt)("inlineCode",{parentName:"p"},"10.126.5.7"),", but announce the mixnode's public IP to the directory server as ",(0,o.kt)("inlineCode",{parentName:"p"},"36.68.243.18"),". It's up to you as a node operator to ensure that your public and private IPs match up properly."),(0,o.kt)("h3",{id:"mixnode-hardware-specs"},"Mixnode Hardware Specs"),(0,o.kt)("p",null,"For the moment, we haven't put a great amount of effort into optimizing concurrency to increase throughput. So don't bother provisioning a beastly server with multiple cores."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Processors: 2 cores are fine. Get the fastest CPUs you can afford."),(0,o.kt)("li",{parentName:"ul"},"RAM: Memory requirements are very low - typically a mixnode may use only a few hundred MB of RAM."),(0,o.kt)("li",{parentName:"ul"},"Disks: The mixnodes require no disk space beyond a few bytes for the configuration files")),(0,o.kt)("p",null,"This will change when we get a chance to start doing performance optimizations in a more serious way. Sphinx packet decryption is CPU-bound, so once we optimise, more fast cores will be better."),(0,o.kt)("h3",{id:"metrics"},"Metrics"),(0,o.kt)("p",null,"There are currently two options for getting information about your mixnode. ",(0,o.kt)("inlineCode",{parentName:"p"},"description")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"verloc")," are accessed via your mixnode's http API, whilst ",(0,o.kt)("inlineCode",{parentName:"p"},"report")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"history")," are reported by the Nym node status API."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Endpoint"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Command"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"/report")),(0,o.kt)("td",{parentName:"tr",align:null},"Returns the most recent node status test report"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"curl https://testnet-milhon-validator1.nymtech.net/api/v1/status/mixnode/<YOUR_NODE_ID>/report"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"/history")),(0,o.kt)("td",{parentName:"tr",align:null},"Returns all previous test reports"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"curl https://testnet-milhon-validator1.nymtech.net/api/v1/status/mixnode/<YOUR_NODE_ID>/history"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"/description")),(0,o.kt)("td",{parentName:"tr",align:null},"Returns the description of your node set with the ",(0,o.kt)("inlineCode",{parentName:"td"},"describe")," command."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"curl <YOUR_NODE_IP>:8000/description"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"/verloc")),(0,o.kt)("td",{parentName:"tr",align:null},"Returns the verloc information of your node, which is updated every 12 hours."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"curl <YOUR_NODE_IP>:8000/verloc"))))),(0,o.kt)("p",null,"There several metrics of interest returned by ",(0,o.kt)("inlineCode",{parentName:"p"},"/report")," regarding your mixnode's uptime and package-mixing capabilities:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"mostRecentIPV4"),": returns a ",(0,o.kt)("inlineCode",{parentName:"li"},"bool")," for whether the most recent IPv4 connectivity test was successful."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"last5MinutesIPV4"),": returns IPv4 connectivity as a percentage over the last five minutes."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"lastHourIPV4"),": returns IPv4 connectivity as a percentage over the last hour."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"lastDayIPV4"),": returns IPv4 connectivity as a percentage over the 24 hours."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"mostRecentIPV6"),": returns a ",(0,o.kt)("inlineCode",{parentName:"li"},"bool")," for whether the most recent IPv6 connectivity test was successful."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"last5MinutesIPV6"),": returns IPv6 connectivity as a percentage over the last five minutes."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"lastHourIPV6"),": returns IPv6 connectivity as a percentage over the last hour."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"lastDayIPV6"),": returns IPv6 connectivity as a percentage over the 24 hours.")),(0,o.kt)("h3",{id:"mixnode-port-reference"},"Mixnode port reference"),(0,o.kt)("p",null,"All mixnode-specific port configuration can be found in ",(0,o.kt)("inlineCode",{parentName:"p"},"$HOME/.nym/mixnodes/<your-id>/config/config.toml"),". If you do edit any port configs, remember to restart your mixnode."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Default port"),(0,o.kt)("th",{parentName:"tr",align:null},"Use"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"1789")),(0,o.kt)("td",{parentName:"tr",align:null},"Listen for mixnet traffic")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"1790")),(0,o.kt)("td",{parentName:"tr",align:null},"Listen for VerLoc traffic")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"8000")),(0,o.kt)("td",{parentName:"tr",align:null},"Metrics http API endpoint")))))}u.isMDXComponent=!0}}]);