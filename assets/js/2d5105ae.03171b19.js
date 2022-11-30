"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[87839],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var l=r.createContext({}),c=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=c(t.components);return r.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,a=t.originalType,l=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),f=c(n),d=i,h=f["".concat(l,".").concat(d)]||f[d]||u[d]||a;return n?r.createElement(h,o(o({ref:e},p),{},{components:n})):r.createElement(h,o({ref:e},p))}));function d(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=n.length,o=new Array(a);o[0]=f;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},24155:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var r=n(83117),i=n(80102),a=(n(67294),n(3905)),o=["components"],s={},l="Initial install",c={unversionedId:"charts/stable/snipe-it/installation_notes",id:"charts/stable/snipe-it/installation_notes",title:"Initial install",description:"Snipe-it's pre-flight check can't detect if you are running behind a proxy, so for the initial installation it's suggested to go without ingress.",source:"@site/docs/charts/stable/snipe-it/installation_notes.md",sourceDirName:"charts/stable/snipe-it",slug:"/charts/stable/snipe-it/installation_notes",permalink:"/docs/charts/stable/snipe-it/installation_notes",draft:!1,editUrl:"https://github.com/truecharts/website/tree/master/docs/charts/stable/snipe-it/installation_notes.md",tags:[],version:"current",frontMatter:{},sidebar:"chartsSidebar",previous:{title:"Changelog",permalink:"/docs/charts/stable/snipe-it/CHANGELOG"},next:{title:"sonarr",permalink:"/docs/charts/stable/sonarr/"}},p={},u=[],f={toc:u};function d(t){var e=t.components,n=(0,i.Z)(t,o);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"initial-install"},"Initial install"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Snipe-it"),"'s pre-flight check ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/snipe/snipe-it/issues/10779"},"can't detect")," if you are running behind a proxy, so for the initial installation it's suggested to go without ingress."),(0,a.kt)("p",null,"Complete the setup then go back and enable ingress."),(0,a.kt)("p",null,"Also keep in mind that you should have ",(0,a.kt)("inlineCode",{parentName:"p"},"172.16.0.0/16")," in your ",(0,a.kt)("inlineCode",{parentName:"p"},"APP_TRUSTED_PROXIES"),". If you want to add more trusted proxies. It's a comma separated list and you can do it like that ",(0,a.kt)("inlineCode",{parentName:"p"},"172.16.0.0/16,192.168.1.0/24"),"."),(0,a.kt)("p",null,"If it fails to load the initla setup screen the first time you install it, stop the app and start it again. It should work right after that.\nThis bug has been reported ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/snipe/snipe-it/issues/10945"},"upstream")))}d.isMDXComponent=!0}}]);