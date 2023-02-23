"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3868],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(a),d=n,h=c["".concat(l,".").concat(d)]||c[d]||m[d]||i;return a?r.createElement(h,o(o({ref:t},u),{},{components:a})):r.createElement(h,o({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:n,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3847:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const i={sidebar_position:2},o="Supersig Tutorial",s={unversionedId:"Supersig/supersig-tutorial",id:"Supersig/supersig-tutorial",title:"Supersig Tutorial",description:"Follow a blog post guide about the quick set up of a substrate node template containing supersig, and polkadot-js apps fork here.",source:"@site/docs/Supersig/supersig-tutorial.md",sourceDirName:"Supersig",slug:"/Supersig/supersig-tutorial",permalink:"/docs/Supersig/supersig-tutorial",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Supersig/supersig-tutorial.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/Supersig/introduction"},next:{title:"Pallet Overview",permalink:"/docs/Supersig/pallet-overview"}},l={},p=[{value:"Create a supersig account",id:"create-a-supersig-account",level:2},{value:"Name the Supersig Address (and fund it)",id:"name-the-supersig-address-and-fund-it",level:2},{value:"Make a call from your Supersig",id:"make-a-call-from-your-supersig",level:2},{value:"Members vote/sign transactions",id:"members-votesign-transactions",level:2},{value:"Add/remove members",id:"addremove-members",level:2},{value:"Get Information about your Supersig",id:"get-information-about-your-supersig",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...i}=e;return(0,n.kt)(c,(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"supersig-tutorial"},"Supersig Tutorial"),(0,n.kt)("admonition",{title:"Walk Through Blog Post",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Follow a blog post guide about the quick set up of a substrate node template containing supersig, and polkadot-js apps fork ",(0,n.kt)("a",{parentName:"p",href:"https://decentration.medium.com/setup-for-running-and-testing-supersig-m3-bc1ddfc25f43"},"here"),".")),(0,n.kt)("p",null,"In this tutorial you require a node-template with supersig pallet (and rpc functions) added."),(0,n.kt)("p",null,"Repo: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/decentration/substrate-supersig-template.git"},"substrate-supersig-template")),(0,n.kt)("h2",{id:"create-a-supersig-account"},"Create a supersig account"),(0,n.kt)("p",null,"Go to ",(0,n.kt)("inlineCode",{parentName:"p"},"Governance > Supersig > Create/Approve > supersig > createSupersig(members)")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Alternatively Go to ",(0,n.kt)("inlineCode",{parentName:"em"},"Developer > Extrinsics > supersig > createSupersig(members)"))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"createSupersig",src:a(6517).Z,width:"3346",height:"1566"}),"\n",(0,n.kt)("em",{parentName:"p"},"Notice how if you are the creator of the supersig, you must also add yourself as a member.")," "),(0,n.kt)("h2",{id:"name-the-supersig-address-and-fund-it"},"Name the Supersig Address (and fund it)"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"SupersigCreated",src:a(2688).Z,width:"3348",height:"1222"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Give the supersig a name."),(0,n.kt)("li",{parentName:"ul"},"Fund the supersig account from any account that has funds. ")),(0,n.kt)("admonition",{title:"Register your Supersig's identity with registrar",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"If the blockchain you are creating your supersig has the identity pallet (like Kabocha) then you can make a proposal to register your supersig to have an identity so it becomes a known entity. ")),(0,n.kt)("h2",{id:"make-a-call-from-your-supersig"},"Make a call from your Supersig"),(0,n.kt)("p",null,"Now that your supersig is funded and has members, you can create a proposal. Thereafter the members of the supersig can vote for it.  "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"submitCall",src:a(7653).Z,width:"3316",height:"466"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"You can click the ",(0,n.kt)("em",{parentName:"p"},"Propose")," button from the dashboard. ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Or you can go to ",(0,n.kt)("inlineCode",{parentName:"p"},"Governance > Supersig > Create/Approve > submitCall(supersigAccount, call)")))),(0,n.kt)("admonition",{title:"The Proposer is not automatically a Voter",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"If you created a proposal you will also need to vote on it. Votes are not automatically counted by the proposer. ")),(0,n.kt)("h2",{id:"members-votesign-transactions"},"Members vote/sign transactions"),(0,n.kt)("p",null,"Go to ",(0,n.kt)("inlineCode",{parentName:"p"},"Governance > Supersig > Dashboard > Vote")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"ApproveCall",src:a(337).Z,width:"3278",height:"628"}),"\n",(0,n.kt)("em",{parentName:"p"},"A simpleMajority of members sign a call for the supersig account.")," "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Notice that Alice created the call, but she also has to approve the call. "),(0,n.kt)("li",{parentName:"ul"},"The callId here is ",(0,n.kt)("inlineCode",{parentName:"li"},"0")," which is a call nonce. This is the first ever call from this supersig so we know it is zero. "),(0,n.kt)("li",{parentName:"ul"},"You can also view the call nonce from the event log or from  ",(0,n.kt)("inlineCode",{parentName:"li"},"> chain_state"),". "),(0,n.kt)("li",{parentName:"ul"},"Remeber to approve a call, you need to be a member with a sufficiently funded balance. ")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"CallVoted",src:a(848).Z,width:"3240",height:"1576"}),"\n",(0,n.kt)("em",{parentName:"p"},"Alice has voted on Call with nonce of ",(0,n.kt)("inlineCode",{parentName:"em"},"0"),". Now we just need one of the 2 other members to make a simpleMajority.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"CallExecution",src:a(2333).Z,width:"3240",height:"1580"}),"\n",(0,n.kt)("em",{parentName:"p"},"Bob voted and then the simpleMajority threshold was reached and the Call was executed. Ferdie now receives his balance of 500.")),(0,n.kt)("h2",{id:"addremove-members"},"Add/remove members"),(0,n.kt)("p",null,"Go to ",(0,n.kt)("inlineCode",{parentName:"p"},"Governance > Supersig > Create/Approve > submitCall > addMembers(newMembers)")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Or go to ",(0,n.kt)("inlineCode",{parentName:"em"},"Developer > Extrinsics > supersig > addMembers(newMembers)"))),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"A common mistake")),(0,n.kt)("p",{parentName:"admonition"},"Here is a common way to submit a call. In this example we want to add a member, but just because the call is a supersig call it doesn't mean we can skip starting with ",(0,n.kt)("inlineCode",{parentName:"p"},"submitCall"),"\n",(0,n.kt)("img",{alt:"AddMemberIncorrect",src:a(1328).Z,width:"3240",height:"1440"}),"\n",(0,n.kt)("em",{parentName:"p"},"In this example we add Dave as a member, which also requires simpleMajority vote. But wait, it did not work because we need to submitCall then addMember within the call."))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"The correct way"),"\n",(0,n.kt)("img",{alt:"AddMember",src:a(4067).Z,width:"3240",height:"1440"}),"\n",(0,n.kt)("em",{parentName:"p"},"Now we have wrapped the addMember call correctly within submitCall, and have selected the Supersig we want to interact with.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Add a member (Dave)"),(0,n.kt)("li",{parentName:"ul"},"In this example we add Dave as ",(0,n.kt)("inlineCode",{parentName:"li"},"master"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"This means he will have 50% voting power. And no matter how many members there are, if he votes then only one other person is required to create a ",(0,n.kt)("inlineCode",{parentName:"li"},"simpleMajority"),".")))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"AddMember",src:a(2825).Z,width:"1644",height:"1440"}),"\n",(0,n.kt)("em",{parentName:"p"},"This is the second ever call for the Supersig. So the ",(0,n.kt)("inlineCode",{parentName:"em"},"callId")," is now ",(0,n.kt)("inlineCode",{parentName:"em"},"1"),".")),(0,n.kt)("p",null,"Supersig members need to vote in order to accept Dave as a member. "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"AddMember",src:a(1022).Z,width:"3240",height:"1440"}),"\n",(0,n.kt)("em",{parentName:"p"},"Dont't forget to add the correct callId when voting for the call.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"CallExecutionDave",src:a(1800).Z,width:"3222",height:"1440"}),"\n",(0,n.kt)("em",{parentName:"p"},"...Alice and Bob vote and Dave is now a member of the Supersig.")," "),(0,n.kt)("h2",{id:"get-information-about-your-supersig"},"Get Information about your Supersig"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Find your AccountNonce from your AccountId")),(0,n.kt)("p",null,"Go to ",(0,n.kt)("inlineCode",{parentName:"p"},"Developer > Runtime Calls > accountNonceApi > accountNonce(accountId)")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"AccountNonce",src:a(8641).Z,width:"3222",height:"1000"}),"\n",(0,n.kt)("em",{parentName:"p"},"select your AccountId to get your AccountNonce")),(0,n.kt)("p",null,"Your AccountNonce is the number of your Supersig that is used to represent your supersig. Here we find the nonce is ",(0,n.kt)("inlineCode",{parentName:"p"},"0"),"."),(0,n.kt)("p",null,"In our exmaple, there are now 4 members in the Supersig, 3 ",(0,n.kt)("inlineCode",{parentName:"p"},"Standard")," members, and 1 ",(0,n.kt)("inlineCode",{parentName:"p"},"Master")," member. But if we lose track of this let's check from the chain state. "),(0,n.kt)("p",null,"Go to ",(0,n.kt)("inlineCode",{parentName:"p"},"Developer > chain state > supersig > members(u128, AccountId32): PalletSupersigRole")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"ChainStateMembers",src:a(6643).Z,width:"3222",height:"1564"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Select the id of the supersig. In this case we know theres only one, so it's ",(0,n.kt)("inlineCode",{parentName:"li"},"0")),(0,n.kt)("li",{parentName:"ul"},"For the second parameter ",(0,n.kt)("inlineCode",{parentName:"li"},"Option<AccountId32>")," untick the box so that we can get a list of all the ",(0,n.kt)("inlineCode",{parentName:"li"},"Members")," of the selected supersig."),(0,n.kt)("li",{parentName:"ul"},"As we can see from the screenshot there are 4 accounts, each with their Member type (standard or master). ")),(0,n.kt)("hr",null))}m.isMDXComponent=!0},8641:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/AccountNonce-68fc66db58f6b2a0562f53d4c10aa2be.png"},4067:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/AddMember-fa9c778f3c46cbda82631e82ef889ac3.png"},2825:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/AddMemberCallSubmitted-1f1a4e2e3ba9d7fec553010f38a82865.png"},1328:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/AddMemberIncorrect-ef42fa7b2b95e0ee7a02ba4b8b9485b9.png"},337:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/ApproveCall-6cba7461ac2956f1fb02dca642fedee4.png"},1022:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/ApproveCallNewId-eb23ca8b68930bc0cd06a9fb3f1dafca.png"},2333:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/CallExecution-53a9ffd63a9928a8121a04dac06451dd.png"},1800:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/CallExecutionDave-20ef742d7ce842e15fbbfcb9d7cfd3a9.png"},848:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/CallVoted-46366dc78a19d77e8df9b2c1da6c8148.png"},6643:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/ChainStateMembers-de60c9d0a5bef5442a5a5ba149eb9782.png"},2688:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/SupersigCreated-4a21b60286ce9312df5467386712cb66.png"},6517:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/createSupersig-36d17183e73b361e0730aa8ded0583e3.png"},7653:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/submitCall-0de37a4f1308b45db98b0a70314832c4.png"}}]);