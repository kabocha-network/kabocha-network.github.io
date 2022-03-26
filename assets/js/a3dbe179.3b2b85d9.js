"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9813],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return h}});var o=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(a),h=r,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||n;return a?o.createElement(m,i(i({ref:t},c),{},{components:a})):o.createElement(m,i({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<n;u++)i[u]=a[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}p.displayName="MDXCreateElement"},2371:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var o=a(7462),r=a(3366),n=(a(7294),a(3905)),i=["components"],l={sidebar_position:2},s="Become a Validator on Pop-Art",u={unversionedId:"pop-art-basics/become-a-validator",id:"pop-art-basics/become-a-validator",title:"Become a Validator on Pop-Art",description:"alt text",source:"@site/docs/pop-art-basics/become-a-validator.md",sourceDirName:"pop-art-basics",slug:"/pop-art-basics/become-a-validator",permalink:"/docs/pop-art-basics/become-a-validator",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/pop-art-basics/become-a-validator.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Become a Validator on Pop-Art",permalink:"/docs/kabocha-docs/become-a-validator"},next:{title:"Become a Validator on Pop-Art",permalink:"/docs/publiks/become-a-validator"}},c={},d=[{value:"Launch a Validator (summary)",id:"launch-a-validator-summary",level:2},{value:"Launch a node",id:"launch-a-node",level:2},{value:"Boot to the correct network",id:"boot-to-the-correct-network",level:3},{value:"Register new validators",id:"register-new-validators",level:2},{value:"Get some POP tokens",id:"get-some-pop-tokens",level:3},{value:"Ask Sudo to register you",id:"ask-sudo-to-register-you",level:3},{value:"Rotate Keys",id:"rotate-keys",level:2},{value:"Fork this relay chain and launch youre own network",id:"fork-this-relay-chain-and-launch-youre-own-network",level:2},{value:"Submit keys",id:"submit-keys",level:3},{value:"Make sure validators are working",id:"make-sure-validators-are-working",level:3},{value:"Create your first Post",id:"create-your-first-post",level:3}],p={toc:d};function h(e){var t=e.components,a=(0,r.Z)(e,i);return(0,n.kt)("wrapper",(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"become-a-validator-on-pop-art"},"Become a Validator on Pop-Art"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/Kabocha-Network/polkadot/blob/master/images/pop-art.jpg?raw=true?raw=true",alt:"alt text"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Repo"),": ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/kabocha-network/relay-chain/edit/v0.9.16-n1/"},"https://github.com/kabocha-network/relay-chain/edit/v0.9.16-n1/"),"  "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Branch"),": v0.9.16-n1"),(0,n.kt)("p",null,"This branch contains Pop-Art, a custom Rococo relay staging network. It is intended for projects in the Substrate ecosytem (and Edgeware/Kabocha community), so that people can test their parachain integrations, and get experiecne as a validator in a shared network. "),(0,n.kt)("h2",{id:"launch-a-validator-summary"},"Launch a Validator (summary)"),(0,n.kt)("p",null,"To launch a validator you will need to:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Make an account on Pop-Art relay, get some POP tokens and get that account registered as a validator by an admin."),(0,n.kt)("li",{parentName:"ul"},"Submit BABE and GRANDPA keys to your node keystore."),(0,n.kt)("li",{parentName:"ul"},"Rotate keys then submit keys via an extrinsic.")),(0,n.kt)("p",null,"Then you should start to be included to participate in validation on Pop-Art."),(0,n.kt)("p",null,"Below is a more detailed guide:"),(0,n.kt)("h2",{id:"launch-a-node"},"Launch a node"),(0,n.kt)("p",null,"First you need to compile and launch your node with the --validator flag and the correct chain spec in order to make sure it is peering with the correct network, then you will be able to convert this node into a working validator through a few steps shared below: "),(0,n.kt)("h3",{id:"boot-to-the-correct-network"},"Boot to the correct network"),(0,n.kt)("p",null,"Make sure nodes are peering, and do that through running the correct chain spec and booting through an node in that network. "),(0,n.kt)("p",null,"Example of a command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"./target/release/polkadot \\\n--\u200avalidator \\\n--\u200abase-path /tmp/relay/MyVal1 \\ specify your db path\n--\u200achain ./specs/pop-art-3-val.json \\\n--\u200aport 30333 \\\n--\u200aws-port 9944 \\\n--\u200arpc-port 9933 \\\n--\u200arpc-methods=Unsafe \\\n--\u200aname <INSERT CUSTOM NAME> \\\n--\u200atelemetry-url 'wss://telemetry.polkadot.io/submit/ 0' \\\n--\u200anode-key <INSERT-KEY> optional\n")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"In this instance, our chain spec contains bootnodes, but if you come across a chain spec without any bootnodes, ask someone who is running a node to provide you with a bootnode address and then add the ",(0,n.kt)("inlineCode",{parentName:"em"},"\u2014 bootnodes")," tag to your command.")),(0,n.kt)("h2",{id:"register-new-validators"},"Register new validators"),(0,n.kt)("h3",{id:"get-some-pop-tokens"},"Get some POP tokens"),(0,n.kt)("p",null,"Ask in the ",(0,n.kt)("a",{parentName:"p",href:"https://matrix.to/#/#kabocha.technical:matrix.org"},"Kabocha Technical Chat"),' for some POP so that you can add "existential deposit" to your (stash) AccountIds of their validators.'),(0,n.kt)("h3",{id:"ask-sudo-to-register-you"},"Ask Sudo to register you"),(0,n.kt)("p",null," Ask Sudo to register your AccountIds as Validators\nAsk the sudo to register your validators as via the ",(0,n.kt)("inlineCode",{parentName:"p"},"sudo > validatorManager > registerValidators")),(0,n.kt)("h2",{id:"rotate-keys"},"Rotate Keys"),(0,n.kt)("p",null,"Now they are registered you (and your partner) can \u201crotate keys\u201d, so that new keys are generated and populated in all the session key fields for your validators."),(0,n.kt)("p",null,"Submitting calls via RPC can be long winded, so a neat trick is to submit the BABE and GRANDPA so the chain produces and finalizes blocks, then you can run author_rotateKeys for each of your validators, which will then generate all your other keys automatically."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'curl -H \u2018Content-Type: application/json\u2019 --data \u2018{ \u201cjsonrpc\u201d:\u201d2.0", \u201cmethod\u201d:\u201dauthor_rotateKeys\u201d, \u201cid\u201d:1 }\u2019 http://127.0.0.1:9933 \n')),(0,n.kt)("p",null,"Make the RPC call in the terminal of your where your validator\u2019s node is located, which should look like this:"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/1400/1*9TxE-iVRz7qxgi3xD_VgWw.png",alt:"3 author_rotateKeys calls for my 3 validators. If you have one validator you only need to make the call once."})),(0,n.kt)("p",null,"Once you have generated the returned hex result you need to submit them as an extrinsic for all the validators you\u2019ve done that for."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"session > setKeys(keys, proof)")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/1400/0*pWs9X_HF_OcuLWJt.png",alt:"The UI for the setKeys extrinsic call"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Be conscious of the account you are using to set the keys."),(0,n.kt)("li",{parentName:"ul"},"In \u201cproof\u201d just add 0x00 (not guaranteed to be secure)."),(0,n.kt)("li",{parentName:"ul"},"Submit transaction")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Wait for an epoch to see the changes, and other validators.")),(0,n.kt)("p",null,"A guide for people who forked this relay and need a workflow to add validators."),(0,n.kt)("h2",{id:"fork-this-relay-chain-and-launch-youre-own-network"},"Fork this relay chain and launch youre own network"),(0,n.kt)("p",null,"//ToDo"),(0,n.kt)("h3",{id:"submit-keys"},"Submit keys"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Create BABE and GRANDPA keys.")),(0,n.kt)("p",null,"This guide assumes you have the sudo account, you've launched your validators, have submitted your babe and grandpa keys and are producing and finalizing blocks."),(0,n.kt)("h3",{id:"make-sure-validators-are-working"},"Make sure validators are working"),(0,n.kt)("p",null,"Make sure your nodes are producing blocks and finalizing, if they are not, restart nodes, and add keys again, (or use the author_hasKey RPC method to check they have the correct keys)."),(0,n.kt)("h3",{id:"create-your-first-post"},"Create your first Post"),(0,n.kt)("p",null,"Create a file at ",(0,n.kt)("inlineCode",{parentName:"p"},"blog/2021-02-28-greetings.md"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-md",metastring:'title="blog/2021-02-28-greetings.md"',title:'"blog/2021-02-28-greetings.md"'},"---\nslug: greetings\ntitle: Greetings!\nauthors:\n  - name: Joel Marcey\n    title: Co-creator of Docusaurus 1\n    url: https://github.com/JoelMarcey\n    image_url: https://github.com/JoelMarcey.png\n  - name: S\xe9bastien Lorber\n    title: Docusaurus maintainer\n    url: https://sebastienlorber.com\n    image_url: https://github.com/slorber.png\ntags: [greetings]\n---\n\nCongratulations, you have made your first post!\n\nFeel free to play around and edit this post as much you like.\n")),(0,n.kt)("p",null,"A new blog post is now available at ",(0,n.kt)("inlineCode",{parentName:"p"},"http://localhost:3000/blog/greetings"),"."))}h.isMDXComponent=!0}}]);