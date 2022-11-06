"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[93533],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},30017:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),o=["components"],l={},s="TrueCharts Application Installation Walk-through",p={unversionedId:"manual/SCALE Apps/app-install/ingress",id:"manual/SCALE Apps/app-install/ingress",title:"TrueCharts Application Installation Walk-through",description:"Ingress",source:"@site/docs/manual/SCALE Apps/app-install/ingress.md",sourceDirName:"manual/SCALE Apps/app-install",slug:"/manual/SCALE Apps/app-install/ingress",permalink:"/docs/manual/SCALE Apps/app-install/ingress",draft:!1,editUrl:"https://github.com/truecharts/website/tree/master/docs/manual/SCALE Apps/app-install/ingress.md",tags:[],version:"current",frontMatter:{},sidebar:"manualSidebar",previous:{title:"TrueCharts Application Installation Walk-through",permalink:"/docs/manual/SCALE Apps/app-install/documentation"},next:{title:"TrueCharts Application Installation Walk-through",permalink:"/docs/manual/SCALE Apps/app-install/networking"}},u={},c=[{value:"Ingress",id:"ingress",level:2},{value:"<code>Ingress</code>",id:"ingress-1",level:3},{value:"Main Ingress",id:"main-ingress",level:3}],m={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"truecharts-application-installation-walk-through"},"TrueCharts Application Installation Walk-through"),(0,i.kt)("h2",{id:"ingress"},"Ingress"),(0,i.kt)("p",null,"Ingress or more commonly known as Reverse Proxy settings can configured here. This is the way that Kubernetes connects your Applications in containers to FQDNs (fully qualified domain names). If one chooses to enable this one must have a Reverse Proxy also installed and something resolve the DNS name of the FQDN specified."),(0,i.kt)("h3",{id:"ingress-1"},(0,i.kt)("inlineCode",{parentName:"h3"},"Ingress")),(0,i.kt)("admonition",{title:"Reverse Proxy support",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Currently the ",(0,i.kt)("inlineCode",{parentName:"p"},"Reverse Proxy")," of choice for ",(0,i.kt)("inlineCode",{parentName:"p"},"TrueCharts")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"Traefik"),". Enabling ",(0,i.kt)("inlineCode",{parentName:"p"},"Ingress")," will configure settings for use with the ",(0,i.kt)("inlineCode",{parentName:"p"},"Traefik")," application. Other reverse proxies may be used by users however they won't be affected by anything in the menu below and come without support from the ",(0,i.kt)("inlineCode",{parentName:"p"},"TrueCharts")," team.")),(0,i.kt)("h3",{id:"main-ingress"},"Main Ingress"),(0,i.kt)("p",null,"A step by step guide to this section is included in the ",(0,i.kt)("a",{parentName:"p",href:"https://truecharts.org/docs/manual/SCALE%20Apps/add-ingress"},"manual")," along with a video guide. Please refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://truecharts.org/docs/charts/stable/traefik/"},(0,i.kt)("inlineCode",{parentName:"a"},"Traefik"))," documentation for more info."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Hosts")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"HostName")," (required): Enter your FQDN here (app.mydomain.com)"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Paths")," : Must have one but may have multiple paths."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Path")," (required): ",(0,i.kt)("inlineCode",{parentName:"li"},"/")," is entered by default."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Path Type")," (required): ",(0,i.kt)("inlineCode",{parentName:"li"},"Prefix")," is entered by default."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"TLS-Settings")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Certificate Hosts"),": Must have one but multiple may be used."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Host"),": (required) Enter FQDN for HTTPS (app.mydomain.com)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Select TrueNAS SCALE Certificate"),": Choose the Certificate created for your domain (see ",(0,i.kt)("a",{parentName:"li",href:"https://truecharts.org/docs/manual/SCALE%20Apps/adding-letsencrypt"},"manual")," if you haven't done this yet)"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Traefik Middlewares"),": Any ",(0,i.kt)("inlineCode",{parentName:"p"},"Traefik")," middlewares may be added here")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Add Manual Custom Ingresses")," (expert): Enables advanced custom Ingress settings that may be used by expert users."))))}d.isMDXComponent=!0}}]);