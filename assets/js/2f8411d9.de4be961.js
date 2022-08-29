"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[90351],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(t),m=r,f=d["".concat(p,".").concat(m)]||d[m]||c[m]||i;return t?a.createElement(f,o(o({ref:n},u),{},{components:t})):a.createElement(f,o({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},73122:function(e,n,t){t.r(n),t.d(n,{LinkGenerator:function(){return m},assets:function(){return c},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return d}});var a=t(83117),r=t(80102),i=t(67294),o=t(3905),l=["components"],p={},s="06 - Linking Apps Internally",u={unversionedId:"docs/SCALE Apps/Quick-Start Guides/linking-apps",id:"docs/SCALE Apps/Quick-Start Guides/linking-apps",title:"06 - Linking Apps Internally",description:"We often need to connect individual apps together, for example: Sonarr and SABnzbd. This means we first need to know how to reach those Apps.",source:"@site/docs/docs/SCALE Apps/Quick-Start Guides/06-linking-apps.md",sourceDirName:"docs/SCALE Apps/Quick-Start Guides",slug:"/docs/SCALE Apps/Quick-Start Guides/linking-apps",permalink:"/docs/docs/SCALE Apps/Quick-Start Guides/linking-apps",draft:!1,editUrl:"https://github.com/truecharts/website/tree/master/docs/docs/SCALE Apps/Quick-Start Guides/06-linking-apps.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{}},c={},d=[{value:"Linking Apps Internally",id:"linking-apps-internally",level:2},{value:"Internal Domain Name generator",id:"internal-domain-name-generator",level:2},{value:"Example",id:"example",level:3},{value:"Video Guide",id:"video-guide",level:3},{value:"Additional Documentation",id:"additional-documentation",level:3}],m=function(e){e.children,e.color;var n=(0,i.useState)(""),t=n[0],a=n[1],r=(0,i.useState)(""),l=r[0],p=r[1],s=(0,i.useState)(""),u=s[0],c=s[1],d=(0,i.useState)(""),m=d[0],f=d[1];return(0,i.useEffect)((function(){var e="";(e=t.includes(l)?t:t+"-"+l,u&&(e=e+"-"+u),t&&l)?f(e+".ix-"+t+".svc.cluster.local"):f("")}),[t,l,u]),(0,o.kt)("div",null,(0,o.kt)("div",null,(0,o.kt)("span",null,"Internal DNS Generator")),(0,o.kt)("form",{onSubmit:function(e){e.preventDefault()}},(0,o.kt)("div",null,(0,o.kt)("label",null,"App Name"),(0,o.kt)("input",{required:!0,id:"name",value:t,onChange:function(e){a(e.target.value)},type:"text",placeholder:"my-plex-app"})),(0,o.kt)("div",null,(0,o.kt)("label",null,"Application"),(0,o.kt)("input",{required:!0,id:"app",value:l,onChange:function(e){p(e.target.value)},type:"text",placeholder:"plex"})),(0,o.kt)("div",null,(0,o.kt)("label",null,"Service (Optional)"),(0,o.kt)("input",{id:"service",value:u,onChange:function(e){c(e.target.value)},type:"text",placeholder:""}))),(0,o.kt)("span",null,"Internal DNS: ",m," "),m?(0,o.kt)("button",{onClick:function(){navigator.clipboard.writeText(m)}},"Copy"):"")},f={toc:d,LinkGenerator:m};function k(e){var n=e.components,i=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},f,i,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"06---linking-apps-internally"},"06 - Linking Apps Internally"),(0,o.kt)("p",null,"We often need to connect individual apps together, for example: Sonarr and SABnzbd. This means we first need to know how to reach those Apps."),(0,o.kt)("h2",{id:"linking-apps-internally"},"Linking Apps Internally"),(0,o.kt)("p",null,"The backend for TrueNAS SCALE Apps is Kubernetes. Linking apps together in Kubernetes is done slightly differently than in other systems, as you can't point directly to other containers using their IP address."),(0,o.kt)("p",null,"Instead we need to use their internal(!) domain name. Please beware: this name is only available between Apps and can not be reached from the host/node or your own PC."),(0,o.kt)("p",null,"The format for internal domain name for the main service is explained bellow.\nPlease replace ",(0,o.kt)("inlineCode",{parentName:"p"},"$NAME")," with the name you gave your App when installing and ",(0,o.kt)("inlineCode",{parentName:"p"},"$APP")," with the name the app has on the catalog where is needed."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"If your app name ",(0,o.kt)("em",{parentName:"strong"},"contains")," the name of the app as in the catalog, the format is as follows.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"$NAME.ix-$NAME.svc.cluster.local"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"If your app name ",(0,o.kt)("em",{parentName:"strong"},"does NOT contain")," the name of the app as in the catalog, the format is as follows.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"$NAME-$APP.ix-$NAME.svc.cluster.local"))),(0,o.kt)("p",null,"If you need to reach a different service (which is not often the case!), you need a slightly different format, where ",(0,o.kt)("inlineCode",{parentName:"p"},"$SVCNAME")," is the name of the service you want to reach:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"If your app name ",(0,o.kt)("em",{parentName:"strong"},"contains")," the name of the app as in the catalog, the format is as follows.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"$NAME-$SVCNAME.ix-$NAME.svc.cluster.local"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"If your app name ",(0,o.kt)("em",{parentName:"strong"},"does NOT contain")," the name of the app as in the catalog, the format is as follows.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"$NAME-$APPNAME-$SVCNAME.ix-$NAME.svc.cluster.local"))),(0,o.kt)("h2",{id:"internal-domain-name-generator"},"Internal Domain Name generator"),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("p",null,'To reach an app named "my-sabnzbd-app" or "sabnzbd\' (name contains the catalog app name) within Sonarr, we can use the following internal domain name:'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"sabnzbd.ix-sabnzbd.svc.cluster.local")," or"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"sabnzbd.ix-sabnzbd"))),(0,o.kt)("p",null,'To reach an app named "sab" (name does NOT contain catalog app name) within Sonarr, we can use the following internal domain name:'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"sab-sabnzbd.ix-sab.svc.cluster.local")," or"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"sab-sabnzbd.ix-sab"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"linking-example-sonarrsabnzbd",src:t(77521).Z,width:"1420",height:"698"})),(0,o.kt)("h3",{id:"video-guide"},"Video Guide"),(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/mWJL-XDgH98",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),(0,o.kt)("h3",{id:"additional-documentation"},"Additional Documentation"),(0,o.kt)("p",null,"For more help troubleshooting DNS resolution in Kubernetes, review the official documentation: ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/"},"https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/")),(0,o.kt)(m,{mdxType:"LinkGenerator"}))}k.isMDXComponent=!0},77521:function(e,n,t){n.Z=t.p+"assets/images/linking-example-sonarrsabnzbd-76bfa1e1987cdfdffdbaaec39ccfc8a3.png"}}]);