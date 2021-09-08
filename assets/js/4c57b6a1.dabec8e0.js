"use strict";(self.webpackChunkmt_guideline=self.webpackChunkmt_guideline||[]).push([[718],{8889:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return r},default:function(){return c}});var o=n(7462),s=n(3366),a=(n(7294),n(3905)),i={sidebar_position:2},p="Typescript and CSS modules",l={unversionedId:"components/new-component/typescript-modules",id:"components/new-component/typescript-modules",isDocsHomePage:!1,title:"Typescript and CSS modules",description:"When building the component keep in mind that using Typescript and CSS modules is required to have it approved.",source:"@site/docs/components/new-component/typescript-modules.md",sourceDirName:"components/new-component",slug:"/components/new-component/typescript-modules",permalink:"/docs/components/new-component/typescript-modules",editUrl:"https://github.com/MasterteamSA/masterteamsa.github.io/tree/master/docs/components/new-component/typescript-modules.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"componentsSidebar",previous:{title:"File Structure",permalink:"/docs/components/new-component/file-structure"}},r=[{value:"Typescript",id:"typescript",children:[{value:"Component props",id:"component-props",children:[]},{value:"Global props",id:"global-props",children:[]}]},{value:"CSS modules",id:"css-modules",children:[{value:"Global styles",id:"global-styles",children:[]}]}],d={toc:r};function c(e){var t=e.components,n=(0,s.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"typescript-and-css-modules"},"Typescript and CSS modules"),(0,a.kt)("p",null,"When building the component keep in mind that using ",(0,a.kt)("inlineCode",{parentName:"p"},"Typescript")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"CSS modules")," is required to have it approved."),(0,a.kt)("h2",{id:"typescript"},"Typescript"),(0,a.kt)("p",null,"All the component code should be written in typescript with the correct types implemented for everything the component needs like the props and such."),(0,a.kt)("h3",{id:"component-props"},"Component props"),(0,a.kt)("p",null,"The component props must be created as an interface which is named ",(0,a.kt)("inlineCode",{parentName:"p"},"ComponentName")," followed by ",(0,a.kt)("inlineCode",{parentName:"p"},"Props")," and it also should be exported with the component, so for example a ",(0,a.kt)("inlineCode",{parentName:"p"},"Button")," component file should look something like this."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"export interface ButtonProps {\n// Your code here\n}\n\nconst Button: React.FC<ButtonProps> = (props) => {\n  // Your code here\n};\n\nexport default Button;\n")),(0,a.kt)("h3",{id:"global-props"},"Global props"),(0,a.kt)("p",null,"We have global types which you can find in the ",(0,a.kt)("inlineCode",{parentName:"p"},"src/types")," folder which are accessible globally in the project. so make sure the type you need is not available there beforeyou create it."),(0,a.kt)("h2",{id:"css-modules"},"CSS modules"),(0,a.kt)("p",null,"All the component styles should be scoped to the component and to achieve that we use CSS modules."),(0,a.kt)("p",null,"It works exactly like writing any other style sheet with the difference of having the ",(0,a.kt)("inlineCode",{parentName:"p"},"*.module.*")," in the name of the file and the way we use import and use the styles."),(0,a.kt)("p",null,"Here is an example of how we use it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import styles from './Button.module.scss'; // this is how we import the styles\n\nconst Button = () => {\n return <div className={styles.button}/> // this is how we use the class\n}\n")),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Any class declared here will not be available to any other component which is what we want, but keep this in mind. and please don't import other components styles in your component."))),(0,a.kt)("h3",{id:"global-styles"},"Global styles"),(0,a.kt)("p",null,"We have global styles which you can find in the ",(0,a.kt)("inlineCode",{parentName:"p"},"*.scss")," files at the root of the project. these files contain classes that are commonly used and are not scoped to anythingso you can just use them if needed."),(0,a.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Most of these classes styles can be achieved by using the layout component we already have like ",(0,a.kt)("inlineCode",{parentName:"p"},"Row")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Space")," so only use the classes if 100% necessary."))))}c.isMDXComponent=!0}}]);