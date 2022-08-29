"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[33055],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(r),m=o,f=p["".concat(u,".").concat(m)]||p[m]||l[m]||i;return r?n.createElement(f,a(a({ref:t},d),{},{components:r})):n.createElement(f,a({ref:t},d))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},56334:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return l}});var n=r(83117),o=r(80102),i=(r(67294),r(3905)),a=["components"],s={},u="05 - Adding additional storage",c={unversionedId:"docs/SCALE Apps/Quick-Start Guides/add-storage",id:"docs/SCALE Apps/Quick-Start Guides/add-storage",title:"05 - Adding additional storage",description:"We  provide the option to mount as many host folders as you want.",source:"@site/docs/docs/SCALE Apps/Quick-Start Guides/05-add-storage.md",sourceDirName:"docs/SCALE Apps/Quick-Start Guides",slug:"/docs/SCALE Apps/Quick-Start Guides/add-storage",permalink:"/docs/docs/SCALE Apps/Quick-Start Guides/add-storage",draft:!1,editUrl:"https://github.com/truecharts/website/tree/master/docs/docs/SCALE Apps/Quick-Start Guides/05-add-storage.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{}},d={},l=[{value:"Permissions",id:"permissions",level:2},{value:"Video Guide",id:"video-guide",level:2},{value:"Additional Documentation",id:"additional-documentation",level:3}],p={toc:l};function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"05---adding-additional-storage"},"05 - Adding additional storage"),(0,i.kt)("p",null,"We  provide the option to mount as many host folders as you want."),(0,i.kt)("p",null,"hostPathMounts are actually quite simple:\nIt mounts a directory from your TrueNAS SCALE system, directly to a directory inside the App you're installing."),(0,i.kt)("h2",{id:"permissions"},"Permissions"),(0,i.kt)("p",null,"We offer an optional automatic set the permissions according to App fsGroup or PUID."),(0,i.kt)("p",null,"Setting permissions automatically means we ",(0,i.kt)("inlineCode",{parentName:"p"},"chown")," the folder and all folder within it, to a group of your choice.\nHowever, we only do so when installing or updating an app."),(0,i.kt)("p",null,"Please be aware that automatically setting ownership/permissions, does mean it overrides your current CHOWN and CHMOD settings. This could break things and yes, it will destroy your system if used carelessly. It's also not wise to enable the automatic permissions on mounted shares from an external system."),(0,i.kt)("h2",{id:"video-guide"},"Video Guide"),(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/aktv1r-KRI0",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),(0,i.kt)("h3",{id:"additional-documentation"},"Additional Documentation"))}m.isMDXComponent=!0}}]);