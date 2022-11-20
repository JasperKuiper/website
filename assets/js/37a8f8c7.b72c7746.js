"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6877],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(r),d=o,f=m["".concat(u,".").concat(d)]||m[d]||c[d]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},79327:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c}});var n=r(83117),o=r(80102),a=(r(67294),r(3905)),i=["components"],s={slug:"Docker-Compose on TrueNAS SCALE using TrueCharts",title:"Docker-Compose on TrueNAS SCALE using TrueCharts",authors:["ornias"]},u=void 0,l={permalink:"/blog/Docker-Compose on TrueNAS SCALE using TrueCharts",source:"@site/blog/06-03-2022-docker-compose.md",title:"Docker-Compose on TrueNAS SCALE using TrueCharts",description:"From the early stages of TrueNAS SCALE development, we\u2019ve read many complaints about the fact docker-compose wasn\u2019t supported by TrueNAS SCALE. It\u2019s understandable, as it\u2019s one of the most used docker deployment options for home users.",date:"2022-11-20T12:43:54.643Z",formattedDate:"November 20, 2022",tags:[],readingTime:1.63,hasTruncateMarker:!1,authors:[{name:"Kjeld Schouten-Lebbing",title:"Founder of TrueCharts",url:"https://github.com/Ornias",imageURL:"https://github.com/Ornias.png",key:"ornias"}],frontMatter:{slug:"Docker-Compose on TrueNAS SCALE using TrueCharts",title:"Docker-Compose on TrueNAS SCALE using TrueCharts",authors:["ornias"]},nextItem:{title:"Meet TrueCharts - the First App Store for TrueNAS SCALE",permalink:"/blog/Meet TrueCharts - the First App Store for TrueNAS SCALE"}},p={authorsImageUrls:[void 0]},c=[],m={toc:c};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"From the early stages of TrueNAS SCALE development, we\u2019ve read many complaints about the fact docker-compose wasn\u2019t supported by TrueNAS SCALE. It\u2019s understandable, as it\u2019s one of the most used docker deployment options for home users."),(0,a.kt)("p",null,"The TrueNAS SCALE community has figured out interesting ways to enable Docker-Compose. But this approaches all have a number of downsides:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"It's not future proof, it can be nuked permanently and without warning, with any TrueNAS SCALE update.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"It inherently breaks SCALE Applications and often even requires those to be disabled.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"There is no support for this work-around."))),(0,a.kt)("p",null,"To solve this problem, we\u2019ve decided to take matters into our own hands. We are glad to finally announce our solution:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Docker-Compose Application for TrueNAS SCALE by TrueCharts")),(0,a.kt)("p",null,"It\u2019s designed from the ground up, to give users nearly the same experience as running Docker-Compose on the host system, and even contains some nice tweaks:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"It\u2019s fully backed by TrueNAS SCALE Applications, so it will survive updates.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"There is a GUI option to input your Docker-Compose file, that will survive reboots.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Completely self-contained, and will not modify the default docker stack.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Fully compatible to run alongside other TrueNAS SCALE Applications, so you can easily migrate your Docker-Compose applications to TrueNAS SCALE Applications.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"We are your support if the application does not work as advertised."))),(0,a.kt)("p",null,"All with just one caveat:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The Docker-Compose command has to be executed from inside the container shell.")),(0,a.kt)("p",null,"We based our solution on the official Docker-in-Docker container by Docker, with some added tooling to optimize it for single-container deployments. Perhaps most interestingly, the container has native access to ",(0,a.kt)("inlineCode",{parentName:"p"},"/mnt"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"/root")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"/cluster"),", so you can work with your containers like you\u2019re working on the host."),(0,a.kt)("p",null,"With this in place we hope that TrueNAS SCALE can finally start to fill the big shoes of solutions like Unraid and TrueNAS Core and give the community what they want, not just what they need!"))}d.isMDXComponent=!0}}]);