"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[90117],{3905:function(e,t,a){a.d(t,{Zo:function(){return h},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),p=s(a),m=r,d=p["".concat(c,".").concat(m)]||p[m]||u[m]||l;return a?n.createElement(d,i(i({ref:t},h),{},{components:a})):n.createElement(d,i({ref:t},h))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},72112:function(e,t,a){a.r(t),a.d(t,{assets:function(){return h},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});var n=a(83117),r=a(80102),l=(a(67294),a(3905)),i=["components"],o={},c="lancache-monolithic",s={unversionedId:"charts/stable/lancache-monolithic/index",id:"charts/stable/lancache-monolithic/index",title:"lancache-monolithic",description:"A monolithic lancache service capable of caching all CDNs in a single instance.",source:"@site/docs/charts/stable/lancache-monolithic/index.md",sourceDirName:"charts/stable/lancache-monolithic",slug:"/charts/stable/lancache-monolithic/",permalink:"/docs/charts/stable/lancache-monolithic/",draft:!1,editUrl:"https://github.com/truecharts/website/tree/master/docs/charts/stable/lancache-monolithic/index.md",tags:[],version:"current",frontMatter:{},sidebar:"chartsSidebar",previous:{title:"Installation Notes",permalink:"/docs/charts/stable/lancache-dns/installation_notes"},next:{title:"Changelog",permalink:"/docs/charts/stable/lancache-monolithic/CHANGELOG"}},h={},u=[{value:"Source Code",id:"source-code",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Installing the Chart",id:"installing-the-chart",level:2},{value:"TrueNAS SCALE",id:"truenas-scale",level:3},{value:"Helm",id:"helm",level:3},{value:"Uninstall",id:"uninstall",level:2},{value:"TrueNAS SCALE",id:"truenas-scale-1",level:3},{value:"Helm",id:"helm-1",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Helm",id:"helm-2",level:3},{value:"Available Settings",id:"available-settings",level:4},{value:"Configure using the command line",id:"configure-using-the-command-line",level:4},{value:"Configure using a yaml file",id:"configure-using-a-yaml-file",level:4},{value:"Connecting to other charts",id:"connecting-to-other-charts",level:4},{value:"Support",id:"support",level:2},{value:"Sponsor TrueCharts",id:"sponsor-truecharts",level:2}],p={toc:u};function m(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"lancache-monolithic"},"lancache-monolithic"),(0,l.kt)("p",null,"A monolithic lancache service capable of caching all CDNs in a single instance."),(0,l.kt)("p",null,"TrueCharts can be installed as both ",(0,l.kt)("em",{parentName:"p"},"normal")," Helm Charts or as Apps on TrueNAS SCALE."),(0,l.kt)("p",null,"This readme is just an automatically generated general guide on installing our Helm Charts and Apps.\nFor more information, please click here: ",(0,l.kt)("a",{parentName:"p",href:"https://truecharts.org/docs/charts/stable/lancache-monolithic"},"lancache-monolithic")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"This chart is not maintained by the upstream project and any issues with the chart should be raised ",(0,l.kt)("a",{parentName:"strong",href:"https://github.com/truecharts/charts/issues/new/choose"},"here"))),(0,l.kt)("h2",{id:"source-code"},"Source Code"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/truecharts/charts/tree/master/charts/stable/lancache-monolithic"},"https://github.com/truecharts/charts/tree/master/charts/stable/lancache-monolithic")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://hub.docker.com/r/lancachenet/monolithic"},"https://hub.docker.com/r/lancachenet/monolithic")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/lancachenet/monolithic"},"https://github.com/lancachenet/monolithic"))),(0,l.kt)("h2",{id:"requirements"},"Requirements"),(0,l.kt)("p",null,"Kubernetes: ",(0,l.kt)("inlineCode",{parentName:"p"},">=1.16.0-0")),(0,l.kt)("h2",{id:"dependencies"},"Dependencies"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Repository"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Version"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://library-charts.truecharts.org"},"https://library-charts.truecharts.org")),(0,l.kt)("td",{parentName:"tr",align:null},"common"),(0,l.kt)("td",{parentName:"tr",align:null},"10.8.0")))),(0,l.kt)("h2",{id:"installing-the-chart"},"Installing the Chart"),(0,l.kt)("h3",{id:"truenas-scale"},"TrueNAS SCALE"),(0,l.kt)("p",null,"To install this Chart on TrueNAS SCALE check our ",(0,l.kt)("a",{parentName:"p",href:"https://truecharts.org/docs/manual/SCALE%20Apps/Installing-an-App"},"Quick-Start Guide"),"."),(0,l.kt)("h3",{id:"helm"},"Helm"),(0,l.kt)("p",null,"To install the chart with the release name ",(0,l.kt)("inlineCode",{parentName:"p"},"lancache-monolithic")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"helm repo add TrueCharts https://charts.truecharts.org\nhelm repo update\nhelm install lancache-monolithic TrueCharts/lancache-monolithic\n")),(0,l.kt)("h2",{id:"uninstall"},"Uninstall"),(0,l.kt)("h3",{id:"truenas-scale-1"},"TrueNAS SCALE"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Upgrading, Rolling Back and Uninstalling the Chart")),(0,l.kt)("p",null,"To upgrade, rollback or delete this Chart from TrueNAS SCALE check our ",(0,l.kt)("a",{parentName:"p",href:"https://truecharts.org/docs/manual/SCALE%20Apps/Upgrade-rollback-delete-an-App"},"Quick-Start Guide"),"."),(0,l.kt)("h3",{id:"helm-1"},"Helm"),(0,l.kt)("p",null,"To uninstall the ",(0,l.kt)("inlineCode",{parentName:"p"},"lancache-monolithic")," deployment"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"helm uninstall lancache-monolithic\n")),(0,l.kt)("h2",{id:"configuration"},"Configuration"),(0,l.kt)("h3",{id:"helm-2"},"Helm"),(0,l.kt)("h4",{id:"available-settings"},"Available Settings"),(0,l.kt)("p",null,"Read through the values.yaml file. It has several commented out suggested values.\nOther values may be used from the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/truecharts/library-charts/tree/main/charts/stable/common/values.yaml"},"values.yaml")," from the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/truecharts/library-charts/tree/main/charts/common"},"common library"),"."),(0,l.kt)("h4",{id:"configure-using-the-command-line"},"Configure using the command line"),(0,l.kt)("p",null,"Specify each parameter using the ",(0,l.kt)("inlineCode",{parentName:"p"},"--set key=value[,key=value]")," argument to ",(0,l.kt)("inlineCode",{parentName:"p"},"helm install"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},'helm install lancache-monolithic \\\n  --set env.TZ="America/New York" \\\n    TrueCharts/lancache-monolithic\n')),(0,l.kt)("h4",{id:"configure-using-a-yaml-file"},"Configure using a yaml file"),(0,l.kt)("p",null,"Alternatively, a YAML file that specifies the values for the above parameters can be provided while installing the chart."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"helm install lancache-monolithic TrueCharts/lancache-monolithic -f values.yaml\n")),(0,l.kt)("h4",{id:"connecting-to-other-charts"},"Connecting to other charts"),(0,l.kt)("p",null,"If you need to connect this Chart to other Charts on TrueNAS SCALE, please refer to our ",(0,l.kt)("a",{parentName:"p",href:"https://truecharts.org/docs/manual/SCALE%20Apps/linking-apps"},"Linking Charts Internally")," quick-start guide."),(0,l.kt)("h2",{id:"support"},"Support"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Please check our ",(0,l.kt)("a",{parentName:"li",href:"https://truecharts.org/docs/manual/SCALE%20Apps/Important-MUST-READ"},"quick-start guides for TrueNAS SCALE"),"."),(0,l.kt)("li",{parentName:"ul"},"See the ",(0,l.kt)("a",{parentName:"li",href:"https://truecharts.org"},"Website")),(0,l.kt)("li",{parentName:"ul"},"Check our ",(0,l.kt)("a",{parentName:"li",href:"https://discord.gg/tVsPTHWTtr"},"Discord")),(0,l.kt)("li",{parentName:"ul"},"Open a ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/truecharts/apps/issues/new/choose"},"issue"))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"sponsor-truecharts"},"Sponsor TrueCharts"),(0,l.kt)("p",null,"TrueCharts can only exist due to the incredible effort of our staff.\nPlease consider making a ",(0,l.kt)("a",{parentName:"p",href:"https://truecharts.org/sponsor"},"donation")," or contributing back to the project any way you can!"),(0,l.kt)("hr",null),(0,l.kt)("p",null,"All Rights Reserved - The TrueCharts Project"))}m.isMDXComponent=!0}}]);