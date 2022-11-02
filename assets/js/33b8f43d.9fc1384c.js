"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[39262],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},39921:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),o=["components"],l={},s="Installation Notes",p={unversionedId:"charts/incubator/invitarr/installation_notes",id:"charts/incubator/invitarr/installation_notes",title:"Installation Notes",description:"- Create a discord bot here.",source:"@site/docs/charts/incubator/invitarr/installation_notes.md",sourceDirName:"charts/incubator/invitarr",slug:"/charts/incubator/invitarr/installation_notes",permalink:"/docs/charts/incubator/invitarr/installation_notes",draft:!1,editUrl:"https://github.com/truecharts/website/tree/master/docs/charts/incubator/invitarr/installation_notes.md",tags:[],version:"current",frontMatter:{},sidebar:"chartsSidebar",previous:{title:"Changelog",permalink:"/docs/charts/incubator/invitarr/CHANGELOG"},next:{title:"ipmi-tools",permalink:"/docs/charts/incubator/ipmi-tools/"}},c={},u=[],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"installation-notes"},"Installation Notes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Create a discord bot ",(0,i.kt)("a",{parentName:"p",href:"https://discord.com/developers/applications"},"here"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Enable Intents else bot will not ",(0,i.kt)("em",{parentName:"p"},"DM")," users after they get the role.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Invite the bot with ",(0,i.kt)("inlineCode",{parentName:"p"},"Administrator")," permission.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"In your discord server run the following commands in any channel that the bot has access to, you will be DM by the bot for the reply:")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},".setupplex")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Authenticate with your ",(0,i.kt)("em",{parentName:"li"},(0,i.kt)("strong",{parentName:"em"},"plex"))," ",(0,i.kt)("inlineCode",{parentName:"li"},"username")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"email")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"token")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"password"),"."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},".roleadd @role")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"This is the role that will trigger the bot to get the email from the user and invite them to Plex."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},".setuplibs")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"By default when a user is invited to plex they will have access to all Libraries. However you can bypass that with the above command.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"a comma separated list. Remember this is case sensitive. No spaces before or after comma. Example: ",(0,i.kt)("inlineCode",{parentName:"li"},"Animes,Movies,Tv Shows"),".")))))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Auto Plex invite only works when someone is given this role and won't message the user if they already have this role.")))}d.isMDXComponent=!0}}]);