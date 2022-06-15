"use strict";(self.webpackChunkmt_guideline=self.webpackChunkmt_guideline||[]).push([[205],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(n),f=o,h=m["".concat(l,".").concat(f)]||m[f]||u[f]||a;return n?r.createElement(h,i(i({ref:t},s),{},{components:n})):r.createElement(h,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},626:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={sidebar_position:2},l="Configure the Project",p={unversionedId:"workflow/new-project/configure-the-project",id:"workflow/new-project/configure-the-project",title:"Configure the Project",description:"Once you have the repo cloned to your machine it's time to configure the project to fit the client needs.",source:"@site/docs/workflow/new-project/configure-the-project.md",sourceDirName:"workflow/new-project",slug:"/workflow/new-project/configure-the-project",permalink:"/docs/workflow/new-project/configure-the-project",draft:!1,editUrl:"https://github.com/MasterteamSA/masterteamsa.github.io/tree/master/docs/workflow/new-project/configure-the-project.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"workflowSidebar",previous:{title:"Create a new repository",permalink:"/docs/workflow/new-project/create-new-repo"},next:{title:"Build your project",permalink:"/docs/workflow/new-project/build-your-project"}},s={},u=[{value:"Change the Port Number",id:"change-the-port-number",level:2},{value:"Configure the Project for the Client",id:"configure-the-project-for-the-client",level:2},{value:"Branding Images",id:"branding-images",level:3},{value:"Config.js",id:"configjs",level:3}],m={toc:u};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"configure-the-project"},"Configure the Project"),(0,a.kt)("p",null,"Once you have the repo cloned to your machine it's time to configure the project to fit the client needs."),(0,a.kt)("h2",{id:"change-the-port-number"},"Change the Port Number"),(0,a.kt)("p",null,"We usually use different port number for each client to make it easier to develop for multiple clients without having to deal with clearing data all the time."),(0,a.kt)("p",null,"The port number for ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"PPlus"))," projects starts from ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"3000")),", the port number for ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"SPlus"))," projects starts from ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"4000"))," and the port number for ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Diwan"))," projects starts from ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"5000")),"."),(0,a.kt)("p",null,"This number will be a simple increment from the last use number for each product we have and it will be configured in the run script in the ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'{\n  "scripts": {\n    "start": "cross-env PORT=3009 react-scripts start", // change port number here\n }\n}\n')),(0,a.kt)("h2",{id:"configure-the-project-for-the-client"},"Configure the Project for the Client"),(0,a.kt)("p",null,"Most of the client basic configuration will be done in the ",(0,a.kt)("inlineCode",{parentName:"p"},"/public/local/")," directory, there we have both our ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Branding Images"))," and ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"config.js"))," file."),(0,a.kt)("h3",{id:"branding-images"},"Branding Images"),(0,a.kt)("p",null,"For every client we have to change the Logo that will be used throughout the system and the favicon to match the client brand."),(0,a.kt)("p",null,"This is as simple as just replacing the ",(0,a.kt)("inlineCode",{parentName:"p"},"/public/local/logo.png")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"/public/local/favicon.ico")," files with the new ones."),(0,a.kt)("h3",{id:"configjs"},"Config.js"),(0,a.kt)("p",null,"This is our main configuration file located in the ",(0,a.kt)("inlineCode",{parentName:"p"},"/public/local/")," directory."),(0,a.kt)("p",null,"This file can control many things which you can read more about ",(0,a.kt)("a",{parentName:"p",href:"https://google.com"},"here"),", but the following are the things that we change for almost every client."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"API_URL"))," and ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"THEME_COLOR"))," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"env")," variable and the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"title"))," which can be configured at the bottom of the configuration file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="/public/local/config.js"',title:'"/public/local/config.js"'},"window.env = {\n  // The url for the api service\n  API_URL: 'http://www.sample.com/mobile/',\n  // The main color that will be used throughout the system\n  THEME_COLOR: '#00B3C6',\n}\n\n// Set the tab title\ndocument.title = 'P+ | Client';\n")))}f.isMDXComponent=!0}}]);