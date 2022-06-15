"use strict";(self.webpackChunkmt_guideline=self.webpackChunkmt_guideline||[]).push([[655],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(f,c(c({ref:t},l),{},{components:n})):r.createElement(f,c({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=u;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var p=2;p<i;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4980:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return m}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),c=["components"],a={sidebar_position:2},s="File Structure",p={unversionedId:"components/new-component/file-structure",id:"components/new-component/file-structure",title:"File Structure",description:"All new components will be created inside the src/components folder inside it's own folder which is named with the",source:"@site/docs/components/new-component/file-structure.md",sourceDirName:"components/new-component",slug:"/components/new-component/file-structure",permalink:"/docs/components/new-component/file-structure",draft:!1,editUrl:"https://github.com/MasterteamSA/masterteamsa.github.io/tree/master/docs/components/new-component/file-structure.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"componentsSidebar",previous:{title:"Components Intro",permalink:"/docs/components/intro"},next:{title:"Typescript and CSS modules",permalink:"/docs/components/new-component/typescript-modules"}},l={},m=[],u={toc:m};function d(e){var t=e.components,n=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"file-structure"},"File Structure"),(0,i.kt)("p",null,"All new components will be created inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"src/components")," folder inside it's own folder which is named with the\ncomponent name using ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"PascalCase")),", for example ",(0,i.kt)("inlineCode",{parentName:"p"},"Component"),"."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Please make sure to use proper english when naming the component, for example ",(0,i.kt)("inlineCode",{parentName:"p"},"Checkbox")," is correct but ",(0,i.kt)("inlineCode",{parentName:"p"},"CheckBox")," is\nnot."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-git",metastring:'title="Folder Structure"',title:'"Folder','Structure"':!0},".\n+-- src\n| +-- components\n| | +-- Button\n| | +-- Component\n| | +-- AnotherComponent\n\n")),(0,i.kt)("p",null,"All new components will have 4 files in their directory."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-git",metastring:'title="src/components/"',title:'"src/components/"'},".\n+-- Component\n| +-- index.tsx // this contains the component code\n| +-- Component.test.tsx // this contains the unit tests for the component\n| +-- Component.stories.tsx // this contains the storybook config & docs for the component\n| +-- components.module.scss // this contains the component styles\n\n")))}d.isMDXComponent=!0}}]);