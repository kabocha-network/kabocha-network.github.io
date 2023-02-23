"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9548],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(r),d=a,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9822:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:4},l="RPC",o={unversionedId:"Supersig/rpc",id:"Supersig/rpc",title:"RPC",description:"RPC functions",source:"@site/docs/Supersig/rpc.md",sourceDirName:"Supersig",slug:"/Supersig/rpc",permalink:"/docs/Supersig/rpc",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Supersig/rpc.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Pallet Overview",permalink:"/docs/Supersig/pallet-overview"},next:{title:"Supersig User Interface",permalink:"/docs/Supersig/supersig-ui"}},s={},p=[{value:"RPC functions",id:"rpc-functions",level:2},{value:"cURL",id:"curl",level:2},{value:"Example",id:"example",level:3},{value:"Use RPC functions for your own chain",id:"use-rpc-functions-for-your-own-chain",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"rpc"},"RPC"),(0,a.kt)("h2",{id:"rpc-functions"},"RPC functions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"superSig_getUserSupersigs")," ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Find what supersigs your associated to."),(0,a.kt)("li",{parentName:"ul"},"Parameter(s):",(0,a.kt)("inlineCode",{parentName:"li"},"who: AccountId")," the AccountId you'd like to check"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"superSig_listMembers"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Get list of members related to supersig. "),(0,a.kt)("li",{parentName:"ul"},"Parameter(s): ",(0,a.kt)("inlineCode",{parentName:"li"},"SupersigId")," (nonce)"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"superSig_listProposals"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Get list of proposals (calls) connected to a supersig. "),(0,a.kt)("li",{parentName:"ul"},"Parameter(s): ",(0,a.kt)("inlineCode",{parentName:"li"},"SupersigId")," (nonce)"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"superSig_getProposalState"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Get the state of votes after youve submitted a call for voting. "),(0,a.kt)("li",{parentName:"ul"},"Parameter(s): ",(0,a.kt)("inlineCode",{parentName:"li"},"SupersigId")," (nonce)")))),(0,a.kt)("h2",{id:"curl"},"cURL"),(0,a.kt)("p",null,"Use cURL to make rpc calls:"),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"List Members")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"superSig_listMembers")),(0,a.kt)("p",null,"From our example we make a jsonrpc call through cURL, (assuming that your chain is running on port 9933)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl -sS -H "Content-Type: application/json" -d \'{"id":1, "jsonrpc":"2.0", "method": "superSig_listMembers", "params": ["INSERT ACCOUNTID OF SUPERSIG"]}\' http://localhost:9933/\n')),(0,a.kt)("p",null,"Result:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc":"2.0","result":\n  [\n    ["5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY","Standard"], ["5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty","Standard"], ["5FLSigC9HGRKVhB9FiEo4Y3koPsNmBmLJbpXg2mp1hXcS59Y","Standard"]  //Charlie\n  ],\n  "id":1\n} //Alice, Bob and Charlie\'s accounts related to Supersig[0]\n')),(0,a.kt)("h2",{id:"use-rpc-functions-for-your-own-chain"},"Use RPC functions for your own chain"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fork a node template containing ",(0,a.kt)("inlineCode",{parentName:"li"},"pallet_supersig")," and RPC functions ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/decentration/substrate-supersig-template"},"here")),(0,a.kt)("li",{parentName:"ul"},"View the RPC section of the pallet ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/kabocha-network/pallet_supersig/tree/polkadot-v0.9.28"},"here")),(0,a.kt)("li",{parentName:"ul"},"See how the RPC functions are added to the runtime ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/decentration/substrate-supersig-template/blob/6fbce881471ef6b5730bb8bf4b68f2ee20f58025/runtime/src/lib.rs#L518"},"here"))))}m.isMDXComponent=!0}}]);