"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[47922],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=u(r),d=i,m=f["".concat(c,".").concat(d)]||f[d]||p[d]||a;return r?n.createElement(m,o(o({ref:t},s),{},{components:r})):n.createElement(m,o({ref:t},s))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},11230:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var n=r(83117),i=r(80102),a=(r(67294),r(3905)),o=["components"],l={},c="Input Validation",u={unversionedId:"charts/stable/fireflyiii/validation",id:"charts/stable/fireflyiii/validation",title:"Input Validation",description:"APP_KEY",source:"@site/docs/charts/stable/fireflyiii/validation.md",sourceDirName:"charts/stable/fireflyiii",slug:"/charts/stable/fireflyiii/validation",permalink:"/docs/charts/stable/fireflyiii/validation",draft:!1,editUrl:"https://github.com/truecharts/website/tree/master/docs/charts/stable/fireflyiii/validation.md",tags:[],version:"current",frontMatter:{},sidebar:"chartsSidebar",previous:{title:"Important Notes",permalink:"/docs/charts/stable/fireflyiii/installation_notes"},next:{title:"firefox",permalink:"/docs/charts/stable/firefox/"}},s={},p=[],f={toc:p};function d(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"input-validation"},"Input Validation"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"APP_KEY")),"\nAccepted formats are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Letters, Numbers, Symbols, Exactly 32 characters (eg. ",(0,a.kt)("inlineCode",{parentName:"li"},"!oqVA9o2@br#$6vAyk8LLrDm54X5EtjD"),") - It accepts ",(0,a.kt)("inlineCode",{parentName:"li"},"a-z"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"A-Z"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"0-9")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"!@#$%^&*?"))),(0,a.kt)("p",null,"You can try live ",(0,a.kt)("a",{parentName:"p",href:"https://regex101.com/r/OR879w/1"},"here"),"\nRegex used to match this: ",(0,a.kt)("inlineCode",{parentName:"p"},"[a-zA-Z0-9!@#$%^&*?]{32}")),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"If you find a field that you think it needs validation, please open an issue on github")))}d.isMDXComponent=!0}}]);