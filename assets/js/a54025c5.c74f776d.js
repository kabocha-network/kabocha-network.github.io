"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3158],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(r),h=o,f=d["".concat(c,".").concat(h)]||d[h]||p[h]||n;return r?a.createElement(f,s(s({ref:t},u),{},{components:r})):a.createElement(f,s({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,s=new Array(n);s[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:o,s[1]=i;for(var l=2;l<n;l++)s[l]=r[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},4487:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>n,metadata:()=>i,toc:()=>l});var a=r(7462),o=(r(7294),r(3905));const n={slug:"pop",title:"Introducing Proof of Proposal (PoP)",authors:["ramsey","rich"],tags:["decentration","technical steward"]},s="Proof of Proposal (PoP)",i={permalink:"/blog/pop",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2021-08-26-welcome/pop.md",source:"@site/blog/2021-08-26-welcome/pop.md",title:"Introducing Proof of Proposal (PoP)",description:"Intro",date:"2021-08-26T00:00:00.000Z",formattedDate:"August 26, 2021",tags:[{label:"decentration",permalink:"/blog/tags/decentration"},{label:"technical steward",permalink:"/blog/tags/technical-steward"}],readingTime:1.73,hasTruncateMarker:!1,authors:[{name:"Ramsey",title:"founder of Decentration",url:"https://github.com/decentration",imageURL:"https://docs.decentration.org/img/decentration.svg",key:"ramsey"},{name:"Richard Wells",title:"Network Steward for Kabocha, founder of Decent Partners",url:"https://decent.partners",imageURL:"https://images.squarespace-cdn.com/content/v1/5dc16cecc298f37108871bc9/1576594866129-LIKU8SVVA20BWCUWJ8EX/white_transparent.png?format=1500w",key:"rich"}],frontMatter:{slug:"pop",title:"Introducing Proof of Proposal (PoP)",authors:["ramsey","rich"],tags:["decentration","technical steward"]},prevItem:{title:"Welcome",permalink:"/blog/welcome"},nextItem:{title:"Decent Partners Initial Post",permalink:"/blog/decent-partners--initial-post"}},c={authorsImageUrls:[void 0,void 0]},l=[{value:"Intro",id:"intro",level:2},{value:"Whatis the process for Edgeware and general &quot;DotSama&quot;?",id:"whatis-the-process-for-edgeware-and-general-dotsama",level:2},{value:"What about the democracy governed treasury account for Kabocha?",id:"what-about-the-democracy-governed-treasury-account-for-kabocha",level:2}],u={toc:l},d="wrapper";function p(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"intro"},"Intro"),(0,o.kt)("p",null,"Kabocha is making some changes from the standard (Substrate) funding process, by adding our Proof of Proposal (PoP) mechanism. We are minting new coins for successfully funded project proposals, rather than taking it from the treasury, which is the current process. This means that KAB stimulus will be directed to a project, creator, founder or team. "),(0,o.kt)("h2",{id:"whatis-the-process-for-edgeware-and-general-dotsama"},'Whatis the process for Edgeware and general "DotSama"?'),(0,o.kt)("p",null,"In Edgeware (and generally the same for DotSama) we have a treasury that releases funds through a proposal system. This is made available through wiring a few different pallets together to make the democracy pallet. A combination of yearly inflation and share of transaction fees (and a few other less significant things) puts coins into the treasury. The treasury sits at roughly 10% of the network. This has been a great way to fund people working in the Edgeware ecosystem. "),(0,o.kt)("p",null,"In Bitcoin, Satoshi aligned incentives to securing the network by allowing rewards for miners. He designed a fixed reward mechanism that inflated the coin base over a period of ~100 years.\nIn the current fiat world, the central bank prints money to stimulate the economy, or at least that is their stated intention. If the stimulus went directly to fund and support human endeavour. The important part of it must be that value is produced, which is greater or equal to the money that is printed, else the debasement would devalue everyone. "),(0,o.kt)("h2",{id:"what-about-the-democracy-governed-treasury-account-for-kabocha"},"What about the democracy governed treasury account for Kabocha?"),(0,o.kt)("p",null,"We are keeping the treasury which accrues not just our native coins, but also other assets such as KSM and DOT. As well as non-fungible assets such as creative productions, deeds, treasury notes, and genesis mints from creators that get funded by Kabocha. These other mix of currencies can be provided as part of a project's proposal so that there is liquidity pools available to fund project expenses. The KAB currency that projects receive can then be kept as more of stake thus relieving downward pressure on the exchanges, and aligning the Project to Kabocha long term."))}p.isMDXComponent=!0}}]);