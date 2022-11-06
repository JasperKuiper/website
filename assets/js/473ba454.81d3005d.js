"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[24076],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=o,f=d["".concat(u,".").concat(h)]||d[h]||p[h]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},71053:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),i=["components"],s={},u="App Network Options",l={unversionedId:"manual/SCALE Apps/networking",id:"manual/SCALE Apps/networking",title:"App Network Options",description:"TrueCharts contain a number of networking options, some super-easy, others quite-advanced. In this document we will try to give a general overview what the general configuration options are and what are their downside and upsides.",source:"@site/docs/manual/SCALE Apps/networking.md",sourceDirName:"manual/SCALE Apps",slug:"/manual/SCALE Apps/networking",permalink:"/docs/manual/SCALE Apps/networking",draft:!1,editUrl:"https://github.com/truecharts/website/tree/master/docs/manual/SCALE Apps/networking.md",tags:[],version:"current",frontMatter:{},sidebar:"manualSidebar",previous:{title:"TrueCharts Application Installation Walk-through",permalink:"/docs/manual/SCALE Apps/app-install/storage"},next:{title:"PCI(-E) Devices Passthrough",permalink:"/docs/manual/SCALE Apps/pci-passthrough"}},c={},p=[{value:"General Choices",id:"general-choices",level:2},{value:"LoadBalancer",id:"loadbalancer",level:3},{value:"ClusterIP",id:"clusterip",level:3},{value:"Host Networking",id:"host-networking",level:3}],d={toc:p};function h(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"app-network-options"},"App Network Options"),(0,a.kt)("p",null,"TrueCharts contain a number of networking options, some super-easy, others quite-advanced. In this document we will try to give a general overview what the general configuration options are and what are their downside and upsides."),(0,a.kt)("h2",{id:"general-choices"},"General Choices"),(0,a.kt)("h3",{id:"loadbalancer"},"LoadBalancer"),(0,a.kt)("p",null,"Loadbalancer service exposes ports to the host. However it can do so in lower ranges than NodePort, making it a great solution for things like DNS servers."),(0,a.kt)("h3",{id:"clusterip"},"ClusterIP"),(0,a.kt)("p",null,"ClusterIP creates a service that is only available on the internal kubernetes network. Ports are not exposed to the host."),(0,a.kt)("p",null,"ClusterIP is recommended when apps are configured to use ingress (Traefik)."),(0,a.kt)("h3",{id:"host-networking"},"Host Networking"),(0,a.kt)("p",null,"This option is considered to be an advanced option and is rarely needed. It connects the network-stack of the host to the App."),(0,a.kt)("p",null,"The reason this is not needed in most Apps, is because we already have great options to deal with most forms of network traffic and every maintainer has the goal to make sure you don't need this setting."),(0,a.kt)("p",null,"Please refer to the documentation of individual Apps or the Support-Discussions section on github, if you think you might need this setting in your specific use case"))}h.isMDXComponent=!0}}]);