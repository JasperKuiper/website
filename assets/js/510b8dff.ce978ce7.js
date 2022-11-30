"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[14500],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(r),m=o,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=p;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:o,l[1]=u;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},61934:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return d}});var n=r(83117),o=r(80102),a=(r(67294),r(3905)),l=["components"],u={},i="How-To",s={unversionedId:"charts/stable/cloudflareddns/setup-guide",id:"charts/stable/cloudflareddns/setup-guide",title:"How-To",description:"So you've followed some of our TrueNAS guides, setup your domain name, certificates and use Cloudflare for your DNS management, however you don't have a static IP, then this guide is for you. This quick guide will help you go through the steps to use Cloudflareddns to update your dynamic IP along with your entire deployment so that even if you change IP your domain will point to the right address.",source:"@site/docs/charts/stable/cloudflareddns/setup-guide.md",sourceDirName:"charts/stable/cloudflareddns",slug:"/charts/stable/cloudflareddns/setup-guide",permalink:"/docs/charts/stable/cloudflareddns/setup-guide",draft:!1,editUrl:"https://github.com/truecharts/website/tree/master/docs/charts/stable/cloudflareddns/setup-guide.md",tags:[],version:"current",frontMatter:{},sidebar:"chartsSidebar",previous:{title:"Changelog",permalink:"/docs/charts/stable/cloudflareddns/CHANGELOG"},next:{title:"code-server",permalink:"/docs/charts/stable/code-server/"}},c={},d=[{value:"Requirements",id:"requirements",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Cloudflareddns Chart Setup",id:"cloudflareddns-chart-setup",level:2},{value:"Support",id:"support",level:2}],p={toc:d};function m(e){var t=e.components,u=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},p,u,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to"},"How-To"),(0,a.kt)("p",null,"So you've followed some of our TrueNAS guides, setup your domain name, certificates and use Cloudflare for your DNS management, however you don't have a static IP, then this guide is for you. This quick guide will help you go through the steps to use Cloudflareddns to update your dynamic IP along with your entire deployment so that even if you change IP your domain will point to the right address."),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("p",null,"Domain name (can be purchased through Cloudflare or etc)"),(0,a.kt)("p",null,"Cloudflare DNS management"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Sign up for Cloudflare free")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Point your nameservers to the ones Cloudflare assigns to you"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"cloudflare-ns",src:r(94629).Z,width:"1294",height:"352"})))),(0,a.kt)("p",null,"Cloudflareddns chart"),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"This guide assumes you've followed our main ",(0,a.kt)("a",{parentName:"p",href:"https://truecharts.org/docs/manual/SCALE%20Apps/Quick-Start%20Guides/adding-letsencrypt"},"Quick-Start Guide")," with your domain on TrueNAS and done the configuration for your DNS on Cloudflare\n(see this video on our YouTube channel)"),(0,a.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/watch?v=hJVghecs3rE",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,a.kt)("p",null,"The recommended way is to setup CNAMEs for your subdomains (charts) and keep your A record pointed to your base domain, such as below"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"cloudflare-dns",src:r(95146).Z,width:"1636",height:"772"})),(0,a.kt)("p",null,"To keep things simple, one can simply use the Global API key from Cloudflare that you previously used inside our guides to setup your certificates, in case you forget it's in the page below"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"cloudflare-api-keys",src:r(53107).Z,width:"2880",height:"1148"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Alternatively")," you can create an API Token, with the following permissions:\nClick ",(0,a.kt)("inlineCode",{parentName:"p"},"Create Token")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Use Template")," on the Edit zone DNS."),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"Zone - DNS - Edit"),(0,a.kt)("li",{parentName:"ul"},"Zone - Zone - Read")),(0,a.kt)("p",{parentName:"blockquote"},"And the following Zone resources"),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Include - Specific zone - yourdomain.com"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"cloudflare-token",src:r(19001).Z,width:"1435",height:"723"}))))),(0,a.kt)("h2",{id:"cloudflareddns-chart-setup"},"Cloudflareddns Chart Setup"),(0,a.kt)("p",null,"Step 1-2: Name chart and leave defaults for Step 2"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"cloudflare-name",src:r(25129).Z,width:"774",height:"511"})),(0,a.kt)("p",null,"Step 3:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"cloudflare-config",src:r(12569).Z,width:"590",height:"1233"})),(0,a.kt)("p",null,"Use Global API key from Cloudflare Domain Overview page (see above) for the ",(0,a.kt)("inlineCode",{parentName:"p"},"CF_APIKEY")," field"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Change ",(0,a.kt)("inlineCode",{parentName:"li"},"CF_USER")," to your Cloudflare Email Account"),(0,a.kt)("li",{parentName:"ul"},"Change ",(0,a.kt)("inlineCode",{parentName:"li"},"CF_HOSTS")," to your DNS Zone A record (mydomain.com)"),(0,a.kt)("li",{parentName:"ul"},"Change ",(0,a.kt)("inlineCode",{parentName:"li"},"CF_ZONES")," to the same Zone (mydomain.com)"),(0,a.kt)("li",{parentName:"ul"},"Change ",(0,a.kt)("inlineCode",{parentName:"li"},"CF_RECORDTYPES")," to A if you're only changing your main domain")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Alternatively")," (Only if you created an API Token)"),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"Change ",(0,a.kt)("inlineCode",{parentName:"li"},"CF_APITOKEN")," to your generated Token"),(0,a.kt)("li",{parentName:"ul"},"Change ",(0,a.kt)("inlineCode",{parentName:"li"},"CF_HOSTS")," to your ",(0,a.kt)("inlineCode",{parentName:"li"},"yourdomain.com")," (or the record you want to update)"),(0,a.kt)("li",{parentName:"ul"},"Change ",(0,a.kt)("inlineCode",{parentName:"li"},"CF_ZONES")," to your Zone ID (Found in your Cloudflare dashboard, on the right column)"),(0,a.kt)("li",{parentName:"ul"},"Change ",(0,a.kt)("inlineCode",{parentName:"li"},"CF_RECORDTYPES")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"A")," if you want to update an A record"))),(0,a.kt)("p",null,"If you're using or changing specific A records or CNAMEs you may want to refer to the upstream documentation for more examples ",(0,a.kt)("a",{parentName:"p",href:"https://hotio.dev/containers/cloudflareddns/"},"here"),")"),(0,a.kt)("p",null,"Steps 4-8: Adjust as necessary but defaults are fine"),(0,a.kt)("h2",{id:"support"},"Support"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If you need more details or have a more custom setup the documentation on the ",(0,a.kt)("a",{parentName:"li",href:"https://hotio.dev/containers/cloudflareddns/"},"upstream")," is very complete so check the descriptions of the options there."),(0,a.kt)("li",{parentName:"ul"},"You can also reach us using ",(0,a.kt)("a",{parentName:"li",href:"https://discord.gg/tVsPTHWTtr"},"Discord")," for real-time feedback and support"),(0,a.kt)("li",{parentName:"ul"},"If you found a bug in our chart, open a Github ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/truecharts/apps/issues/new/choose"},"issue"))),(0,a.kt)("hr",null),(0,a.kt)("p",null,"All Rights Reserved - The TrueCharts Project"))}m.isMDXComponent=!0},53107:function(e,t,r){t.Z=r.p+"assets/images/cloudflare-api-keys-7cbb62bc90aeb9ee62afe6fc12e2056f.png"},12569:function(e,t,r){t.Z=r.p+"assets/images/cloudflare-config-22b977bb02c5976efdebebaec73ef5bb.png"},95146:function(e,t,r){t.Z=r.p+"assets/images/cloudflare-dns-ef4175fa0990a1f7714be0309b7912cc.png"},25129:function(e,t,r){t.Z=r.p+"assets/images/cloudflare-name-18c04c08e55798cda8aaca67b316653c.png"},94629:function(e,t,r){t.Z=r.p+"assets/images/cloudflare-ns-7a6e5a9f3210f078bdb330ddec12c53d.png"},19001:function(e,t,r){t.Z=r.p+"assets/images/cloudflare-token-ce3789f4134c14ef0cbd2e96e091682e.png"}}]);