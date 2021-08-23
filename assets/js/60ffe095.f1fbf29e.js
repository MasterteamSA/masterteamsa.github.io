(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{78:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var o=n(3),r=n(7),i=(n(0),n(92)),a={sidebar_position:2},c={unversionedId:"workflow/new-project/configure-the-project",id:"workflow/new-project/configure-the-project",isDocsHomePage:!1,title:"Configure the Project",description:"Once you have the repo cloned to your machine it's time to configure the project to fit the client needs.",source:"@site/docs/workflow/new-project/configure-the-project.md",sourceDirName:"workflow/new-project",slug:"/workflow/new-project/configure-the-project",permalink:"/docs/workflow/new-project/configure-the-project",editUrl:"https://github.com/MasterteamSA/masterteamsa.github.io/tree/master/docs/workflow/new-project/configure-the-project.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"workflowSidebar",previous:{title:"Create a new repository",permalink:"/docs/workflow/new-project/create-new-repo"},next:{title:"Deploy your site",permalink:"/docs/workflow/new-project/deploy-your-site"}},l=[{value:"Change the Port Number",id:"change-the-port-number",children:[]},{value:"Configure the Project for the Client",id:"configure-the-project-for-the-client",children:[{value:"Branding Images",id:"branding-images",children:[]},{value:"Config.js",id:"configjs",children:[]}]}],s={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Once you have the repo cloned to your machine it's time to configure the project to fit the client needs."),Object(i.b)("h2",{id:"change-the-port-number"},"Change the Port Number"),Object(i.b)("p",null,"We usually use different port number for each client to make it easier to develop for multiple clients without having to deal with clearing data all the time."),Object(i.b)("p",null,"The port number for ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"PPlus"))," projects starts from ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"3000"))," and the port number for ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"SPlus"))," projects starts from ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"4000")),"."),Object(i.b)("p",null,"This number will be a simple increment from the last use number for each product we have and it will be configured in the run script in the ",Object(i.b)("inlineCode",{parentName:"p"},"package.json")," file."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'{\n  "scripts": {\n    "start": "cross-env PORT=3009 react-scripts start", // change port number here\n }\n}\n')),Object(i.b)("h2",{id:"configure-the-project-for-the-client"},"Configure the Project for the Client"),Object(i.b)("p",null,"Most of the client basic configuration will be done in the ",Object(i.b)("inlineCode",{parentName:"p"},"/public/local/")," directory, there we have both our ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"Branding Images"))," and ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"config.js"))," file."),Object(i.b)("h3",{id:"branding-images"},"Branding Images"),Object(i.b)("p",null,"For every client we have to change the Logo that will be used throughout the system and the favicon to match the client brand."),Object(i.b)("p",null,"This is as simple as just replacing the ",Object(i.b)("inlineCode",{parentName:"p"},"/public/local/logo.png")," and ",Object(i.b)("inlineCode",{parentName:"p"},"/public/local/favicon.ico")," files with the new ones."),Object(i.b)("h3",{id:"configjs"},"Config.js"),Object(i.b)("p",null,"This is our main configuration file located in the ",Object(i.b)("inlineCode",{parentName:"p"},"/public/local/")," directory."),Object(i.b)("p",null,"This file can control many things which you can read more about ",Object(i.b)("a",{parentName:"p",href:"https://google.com"},"here"),", but the following are the things that we change for almost every client."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"API_URL"))," and ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"THEME_COLOR"))," in the ",Object(i.b)("inlineCode",{parentName:"p"},"env")," variable and the ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"title"))," which can be configured at the bottom of the configuration file."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js",metastring:'title="/public/local/config.js"',title:'"/public/local/config.js"'},"window.env = {\n  // The url for the api service\n  API_URL: 'http://www.sample.com/mobile/',\n  // The main color that will be used throughout the system\n  THEME_COLOR: '#00B3C6',\n}\n\n// Set the tab title\ndocument.title = 'P+ | Client';\n")))}p.isMDXComponent=!0}}]);