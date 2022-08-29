"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7585],{3905:function(e,t,o){o.d(t,{Zo:function(){return l},kt:function(){return d}});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function p(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=r.createContext({}),s=function(e){var t=r.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},l=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=s(o),d=n,k=m["".concat(c,".").concat(d)]||m[d]||u[d]||a;return o?r.createElement(k,i(i({ref:t},l),{},{components:o})):r.createElement(k,i({ref:t},l))}));function d(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var s=2;s<a;s++)i[s]=o[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},66794:function(e,t,o){o.r(t),o.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return u}});var r=o(83117),n=o(80102),a=(o(67294),o(3905)),i=["components"],p={},c="13 - Docker-Compose on SCALE",s={unversionedId:"docs/SCALE Apps/Quick-Start Guides/docker-compose",id:"docs/SCALE Apps/Quick-Start Guides/docker-compose",title:"13 - Docker-Compose on SCALE",description:'While Docker-Compose is not officially supported by iX Systems, we have designed a special "Docker-Compose" App, that is available in the "core" train.',source:"@site/docs/docs/SCALE Apps/Quick-Start Guides/13-docker-compose.md",sourceDirName:"docs/SCALE Apps/Quick-Start Guides",slug:"/docs/SCALE Apps/Quick-Start Guides/docker-compose",permalink:"/docs/docs/SCALE Apps/Quick-Start Guides/docker-compose",draft:!1,editUrl:"https://github.com/truecharts/website/tree/master/docs/docs/SCALE Apps/Quick-Start Guides/13-docker-compose.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{}},l={},u=[{value:"Video Guide",id:"video-guide",level:2}],m={toc:u};function d(e){var t=e.components,o=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"13---docker-compose-on-scale"},"13 - Docker-Compose on SCALE"),(0,a.kt)("p",null,'While Docker-Compose is not officially supported by iX Systems, we have designed a special "Docker-Compose" App, that is available in the "core" train.\nThis App can be used to easily deploy a compose file in a completely isolated docker-compose environment.'),(0,a.kt)("p",null,"Our Docker-Compose app has the following features:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Binding ports to the host, directly from docker-compose")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Internal Docker-Compose networks")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"/mnt"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"/root")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"/cluster")," are directly accessible inside the Docker-Compose container by default")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The docker-images and docker volumes, are saved in a special PVC inside the Apps system of TrueNAS SCALE")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Compose files can be automatically loaded on the start of our Docker-Compose App")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Will fully survive updates of TrueNAS SCALE")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Will not alter the Host OS")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Can be combined with SCALE App, to enable users to slowly migrate from docker-compose to native SCALE Apps"))),(0,a.kt)("p",null,"A few things to be aware of:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"To issue commands to docker or docker compose, you need to be inside the Docker-Compose App shell (not the host Shell)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Please ensure your Docker-Compose networks do not conflict with the Kubernetes networks listed in the settings of the SCALE Apps system.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'Please be aware that Docker-Compose containers, by cannot reach inside the kubernetes network. So you cannot combine a "Launch Docker" container with a Docker-Compose hosted database for example.'))),(0,a.kt)("p",null,"Simply put:\nOur docker-compose solution works almost like using it on the host, but without compromising the Appliance OS that is TrueNAS SCALE."),(0,a.kt)("h2",{id:"video-guide"},"Video Guide"),(0,a.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/QXooywQSfJY",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))}d.isMDXComponent=!0}}]);