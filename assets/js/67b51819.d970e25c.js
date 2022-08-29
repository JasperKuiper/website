"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[69163],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=p(r),d=o,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},24129:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return u}});var n=r(83117),o=r(80102),a=(r(67294),r(3905)),i=["components"],c={},s="Common Library Chart",p={unversionedId:"docs/development/common-libary",id:"docs/development/common-libary",title:"Common Library Chart",description:"In Helm 3, their team introduced the concept of a Library chart.",source:"@site/docs/docs/development/common-libary.md",sourceDirName:"docs/development",slug:"/docs/development/common-libary",permalink:"/docs/docs/development/common-libary",draft:!1,editUrl:"https://github.com/truecharts/website/tree/master/docs/docs/development/common-libary.md",tags:[],version:"current",frontMatter:{}},l={},u=[],m={toc:u};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"common-library-chart"},"Common Library Chart"),(0,a.kt)("p",null,"In Helm 3, their team introduced the concept of a ",(0,a.kt)("a",{parentName:"p",href:"https://helm.sh/docs/topics/library_charts/"},"Library chart"),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"A library chart is a type of Helm chart that defines chart primitives or definitions which can be shared by Helm templates in other charts. This allows users to share snippets of code that can be re-used across charts, avoiding repetition and keeping charts DRY.")),(0,a.kt)("p",null,"The first version of our Common library was ported from k8s-at-home, which they introduced because they saw many charts requiring only a few select configuration options in their Helm charts."),(0,a.kt)("p",null,"Let's take for example, Sonarr, Sabnzbd, Overseerr. Each of these charts only require setting ",(0,a.kt)("inlineCode",{parentName:"p"},"service"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"port"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"persistence"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ingress")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"image")," since state and app configuration is handled by the application itself. In order to stay somewhat DRY (Don't Repeat Yourself) and keeping with Helm 3 usage for a Library chart, we saw this pattern and decided it was worth it for us to create a library. This means each one of these app charts has a dependency on what we call the ",(0,a.kt)("inlineCode",{parentName:"p"},"common")," library."))}d.isMDXComponent=!0}}]);