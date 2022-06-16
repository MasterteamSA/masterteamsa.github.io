"use strict";(self.webpackChunkmt_guideline=self.webpackChunkmt_guideline||[]).push([[799],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8232:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:1},s="Create a new repository",p={unversionedId:"workflow/new-project/create-new-repo",id:"workflow/new-project/create-new-repo",title:"Create a new repository",description:"The first step to start a new client project is to create a new repository which uses the templete of one of the",source:"@site/docs/workflow/new-project/create-new-repo.md",sourceDirName:"workflow/new-project",slug:"/workflow/new-project/create-new-repo",permalink:"/docs/workflow/new-project/create-new-repo",draft:!1,editUrl:"https://github.com/MasterteamSA/masterteamsa.github.io/tree/master/docs/workflow/new-project/create-new-repo.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"workflowSidebar",previous:{title:"Development Environment",permalink:"/docs/workflow/development-environment"},next:{title:"Configure the Project",permalink:"/docs/workflow/new-project/configure-the-project"}},c={},u=[{value:"New repo settings",id:"new-repo-settings",level:2},{value:"Template selection",id:"template-selection",level:3},{value:"Repository owner and name",id:"repository-owner-and-name",level:3},{value:"Repository access",id:"repository-access",level:3},{value:"Create the repo",id:"create-the-repo",level:3},{value:"Add team access",id:"add-team-access",level:2},{value:"Done",id:"done",level:2}],m={toc:u};function d(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"create-a-new-repository"},"Create a new repository"),(0,o.kt)("p",null,"The first step to start a new client project is to create a new repository which uses the templete of one of the\nproducts repos which are the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},(0,o.kt)("a",{parentName:"em",href:"https://github.com/MasterteamSA/pplus-web"},"PPlus")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},(0,o.kt)("a",{parentName:"em",href:"https://github.com/MasterteamSA/splus-web"},"SPlus")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},(0,o.kt)("a",{parentName:"em",href:"https://github.com/MasterteamSA/diwan-web"},"Diwan"))))),(0,o.kt)("p",null,"to do that we start by clicking the ",(0,o.kt)("inlineCode",{parentName:"p"},"New repository")," button, located in the header bar or the organization page."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Create Button",src:n(7564).Z,width:"2880",height:"1590"})),(0,o.kt)("h2",{id:"new-repo-settings"},"New repo settings"),(0,o.kt)("p",null,"This will take you to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Create a new repository")," page where you have to configure a few settings."),(0,o.kt)("h3",{id:"template-selection"},"Template selection"),(0,o.kt)("p",null,"First of all you should select the template you want the repo to be based on according the needed product."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"MasterteamSA/pplus-web")," for pplus"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"MasterteamSA/splus-web")," for splus"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"MasterteamSA/diwan-web")," for diwan")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Templete Selection",src:n(9321).Z,width:"1526",height:"508"})),(0,o.kt)("h3",{id:"repository-owner-and-name"},"Repository owner and name"),(0,o.kt)("p",null,"Then you have to select the owner and name of the repository."),(0,o.kt)("p",null,"For the owner make sure to always select ",(0,o.kt)("inlineCode",{parentName:"p"},"MasterteamSA"),"."),(0,o.kt)("p",null,"For the naming of the repository it should be handled as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"PPlus: ",(0,o.kt)("inlineCode",{parentName:"li"},"pplus-{{client-name}}-web"),"."),(0,o.kt)("li",{parentName:"ul"},"SPlus: ",(0,o.kt)("inlineCode",{parentName:"li"},"splus-{{client-name}}-web"),"."),(0,o.kt)("li",{parentName:"ul"},"Diwan: ",(0,o.kt)("inlineCode",{parentName:"li"},"diwan-{{client-name}}-web"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Owner and Name",src:n(1458).Z,width:"1594",height:"406"})),(0,o.kt)("h3",{id:"repository-access"},"Repository access"),(0,o.kt)("p",null,"Make sure the repository is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"Private"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Repository Access",src:n(4904).Z,width:"1594",height:"256"})),(0,o.kt)("h3",{id:"create-the-repo"},"Create the repo"),(0,o.kt)("p",null,"Finally just click the ",(0,o.kt)("inlineCode",{parentName:"p"},"Create repository")," button to create the repository."),(0,o.kt)("h2",{id:"add-team-access"},"Add team access"),(0,o.kt)("p",null,"After you create the new repository you have to manually set the team access for it, you can do that by following these\nsteps:"),(0,o.kt)("p",null,"1- go to ",(0,o.kt)("inlineCode",{parentName:"p"},"Settings")," -> ",(0,o.kt)("inlineCode",{parentName:"p"},"Manage access")," -> ",(0,o.kt)("inlineCode",{parentName:"p"},"Invite teams or people")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Team Access",src:n(1686).Z,width:"2880",height:"1584"})),(0,o.kt)("p",null,"2- in the modal just type ",(0,o.kt)("inlineCode",{parentName:"p"},"frontend")," and select the ",(0,o.kt)("inlineCode",{parentName:"p"},"MasterteamSA/frontend")," option"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Select Team",src:n(9625).Z,width:"1008",height:"1020"})),(0,o.kt)("p",null,"3- select ",(0,o.kt)("inlineCode",{parentName:"p"},"Write")," from the role list, then click the ",(0,o.kt)("inlineCode",{parentName:"p"},"Add")," button"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Select Role",src:n(9503).Z,width:"1034",height:"1376"})),(0,o.kt)("h2",{id:"done"},"Done"),(0,o.kt)("p",null,"Now you're ready to clone the repository and start working, to see what are the first things to do after you clone the\nrepository please check ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},(0,o.kt)("a",{parentName:"em",href:"/docs/workflow/new-project/configure-the-project"},"Configure the Project"))),"."))}d.isMDXComponent=!0},7564:function(e,t,n){t.Z=n.p+"assets/images/create-button-afce9637cb7b61c0c2b32907dd2cf20a.png"},1458:function(e,t,n){t.Z=n.p+"assets/images/owner-name-3bdb452797faa8aaa35a34cbe13f386d.png"},4904:function(e,t,n){t.Z=n.p+"assets/images/repo-access-6d96f072e49cb22dc315bae90781441d.png"},9503:function(e,t,n){t.Z=n.p+"assets/images/select-role-3223b7b39ea9a6d1bc750381b1a9a4ad.png"},9625:function(e,t,n){t.Z=n.p+"assets/images/select-team-afbf6ac36edce654af6c4c50bf040ac0.png"},1686:function(e,t,n){t.Z=n.p+"assets/images/team-access-909477a4a613ab8ac1f3eb54c816fe7d.png"},9321:function(e,t,n){t.Z=n.p+"assets/images/template-selection-4d95378772d7b7c1d8732a474f9370cf.png"}}]);