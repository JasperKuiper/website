"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[11428],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return f}});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=r.createContext({}),u=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=u(t.components);return r.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,l=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),d=u(n),f=o,h=d["".concat(l,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(h,i(i({ref:e},c),{},{components:n})):r.createElement(h,i({ref:e},c))}));function f(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},50721:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),i=["components"],s={},l="Installation notes",u={unversionedId:"charts/stable/authentik/installation_notes",id:"charts/stable/authentik/installation_notes",title:"Installation notes",description:"Credentials",source:"@site/docs/charts/stable/authentik/installation_notes.md",sourceDirName:"charts/stable/authentik",slug:"/charts/stable/authentik/installation_notes",permalink:"/docs/charts/stable/authentik/installation_notes",draft:!1,editUrl:"https://github.com/truecharts/website/tree/master/docs/charts/stable/authentik/installation_notes.md",tags:[],version:"current",frontMatter:{},sidebar:"chartsSidebar",previous:{title:"How-To",permalink:"/docs/charts/stable/authentik/how_to"},next:{title:"autobrr",permalink:"/docs/charts/stable/autobrr/"}},c={},p=[{value:"Credentials",id:"credentials",level:2},{value:"Outposts",id:"outposts",level:2},{value:"Host",id:"host",level:3},{value:"Host Browser",id:"host-browser",level:3},{value:"Token",id:"token",level:3}],d={toc:p};function f(t){var e=t.components,n=(0,o.Z)(t,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"installation-notes"},"Installation notes"),(0,a.kt)("h2",{id:"credentials"},"Credentials"),(0,a.kt)("p",null,"Default username: ",(0,a.kt)("inlineCode",{parentName:"p"},"akadmin")),(0,a.kt)("h2",{id:"outposts"},"Outposts"),(0,a.kt)("p",null,"Enable each outpost by simple setting ",(0,a.kt)("inlineCode",{parentName:"p"},"enabled")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),".\nScale users, just have to check the checkbox"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"You have to create an outpost in the GUI first.\nAnd afterwards enable it.\nApplications > Outposts")),(0,a.kt)("h3",{id:"host"},"Host"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"host")," should not need to be overridden. Defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"https://localhost:9443")),(0,a.kt)("h3",{id:"host-browser"},"Host Browser"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"host_browser")," by default is set to the first ingress host you set"),(0,a.kt)("h3",{id:"token"},"Token"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"token")," is only needed if you accidentally deleted the bootstrap token within the UI."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"You can get one from Applications > Outposts > View Deployment Info")))}f.isMDXComponent=!0}}]);