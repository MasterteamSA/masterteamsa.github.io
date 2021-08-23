(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{76:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(3),o=n(7),i=(n(0),n(92)),a={sidebar_position:3},s={unversionedId:"components/linking",id:"components/linking",isDocsHomePage:!1,title:"Linking the Library to your Project",description:"To test the library in your project before your changes are published, we can use the npm link feature as follows.",source:"@site/docs/components/linking.md",sourceDirName:"components",slug:"/components/linking",permalink:"/docs/components/linking",editUrl:"https://github.com/MasterteamSA/masterteamsa.github.io/tree/master/docs/components/linking.md",version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"componentsSidebar",previous:{title:"Components Intro",permalink:"/docs/components/intro"},next:{title:"File Structure",permalink:"/docs/components/new-component/file-structure"}},c=[],l={toc:c};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"To test the library in your project before your changes are published, we can use the ",Object(i.b)("inlineCode",{parentName:"p"},"npm link")," feature as follows."),Object(i.b)("p",null,"First of all we have to build the library so while in the components library base directory run the build command."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash",metastring:'title="/library-base-directory"',title:'"/library-base-directory"'},"npm run build\n")),Object(i.b)("p",null,"Then we need to link the library in our system using the following."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash",metastring:'title="/library-base-directory"',title:'"/library-base-directory"'},"npm link\n")),Object(i.b)("p",null,"To use the linked library in your project, just run the following command in your project directory."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash",metastring:'title="/your-project-base-directory"',title:'"/your-project-base-directory"'},"npm link @masterteam/mt-design-react\n")),Object(i.b)("p",null,"Now we're all done and ready to use the library in our project by just importing the components we need."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js",metastring:'title="src/containers/SomePage.js"',title:'"src/containers/SomePage.js"'},"  import { Component } from '@masterteam/mt-design-react';\n")))}b.isMDXComponent=!0}}]);