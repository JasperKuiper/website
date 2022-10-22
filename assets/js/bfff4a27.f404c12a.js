"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[83118],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(t),m=o,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return t?r.createElement(h,s(s({ref:n},u),{},{components:t})):r.createElement(h,s({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=p;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},3473:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return d}});var r=t(83117),o=t(80102),a=(t(67294),t(3905)),s=["components"],i={},l="How To",c={unversionedId:"charts/incubator/minecraft-bungeecord/How-To",id:"charts/incubator/minecraft-bungeecord/How-To",title:"How To",description:"The following sections are just examples and may not represent best practices or all use cases.",source:"@site/docs/charts/incubator/minecraft-bungeecord/How-To.md",sourceDirName:"charts/incubator/minecraft-bungeecord",slug:"/charts/incubator/minecraft-bungeecord/How-To",permalink:"/docs/charts/incubator/minecraft-bungeecord/How-To",draft:!1,editUrl:"https://github.com/truecharts/website/tree/master/docs/charts/incubator/minecraft-bungeecord/How-To.md",tags:[],version:"current",frontMatter:{},sidebar:"chartsSidebar",previous:{title:"Changelog",permalink:"/docs/charts/incubator/minecraft-bungeecord/CHANGELOG"},next:{title:"Installation Notes",permalink:"/docs/charts/incubator/minecraft-bungeecord/installation_notes"}},u={},d=[{value:"Bungeecord / WaterFall",id:"bungeecord--waterfall",level:2},{value:"Velocity",id:"velocity",level:2}],p={toc:d};function m(e){var n=e.components,t=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to"},"How To"),(0,a.kt)("p",null,"The following sections are just ",(0,a.kt)("em",{parentName:"p"},"examples")," and may not represent best practices or all use cases.\nThe only tested servers were Spigot Based variants by PaperMC, Paper version ",(0,a.kt)("strong",{parentName:"p"},"1.19.2"),", the latest current MC version."),(0,a.kt)("p",null,"A MC limbo instance was also tested but only works with Bungeecord/Waterfall, but needs some work to manually set it up."),(0,a.kt)("h2",{id:"bungeecord--waterfall"},"Bungeecord / WaterFall"),(0,a.kt)("p",null,"Spigot compatible server(s) need to be set ",(0,a.kt)("strong",{parentName:"p"},"offline")," by unchecking ",(0,a.kt)("strong",{parentName:"p"},"Enable/Disable Online Mode")," in minecraft-java instance(s)."),(0,a.kt)("p",null,"Then modify a single value in ",(0,a.kt)("strong",{parentName:"p"},"/data/spigot.yml")," in each server:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"bungeecord: true\n")),(0,a.kt)("p",null,"Then in this file(assuming its paper) ",(0,a.kt)("strong",{parentName:"p"},"/config/paper-global.yml"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"bungee-cord:\n  online-mode: true\n")),(0,a.kt)("p",null,"This is a sample ",(0,a.kt)("strong",{parentName:"p"},"config.yml")," that you can create in the ",(0,a.kt)("strong",{parentName:"p"},"/config")," dir."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'connection_throttle: 4000\nconnection_throttle_limit: 3\ntimeout: 30000\npermissions:\n  default:\n    - bungeecord.command.server\n    - bungeecord.command.list\n  admin:\n    - bungeecord.command.alert\n    - bungeecord.command.end\n    - bungeecord.command.ip\n    - bungeecord.command.reload\nnetwork_compression_threshold: 256\nservers:\n  lobby:\n    motd: "&1My Lobby MC"\n    address: MY_PRIVATE_IP:25566 # Set this as your local IP, NOT 0.0.0.0 or cluster URL.\n    restricted: false\n  survival:\n    motd: "&1My Survival MC"\n    address: MY_PRIVATE_IP:25567 # Set this as your local IP, NOT 0.0.0.0 or cluster URL.\n    restricted: false\n  creative:\n    motd: "&1My Creative MC"\n    address: MY_PRIVATE_IP:25568 # Set this as your local IP, NOT 0.0.0.0 or cluster URL.\n    restricted: false\nplayer_limit: -1\nprevent_proxy_connections: false\nserver_connect_timeout: 5000\nremote_ping_timeout: 5000\nforge_support: false\nremote_ping_cache: -1\nlog_commands: false\nlog_pings: true\nip_forward: true # needs to be true\ndisabled_commands:\n  - disabledcommandhere\ngroups:\n  md_5:\n    - admin\nlisteners:\n  - host: 0.0.0.0:25577 # leave this as `0.0.0.0:25577`\n    query_port: 25577 # leave port as is.\n    motd: "&1Another Bungee server" # change this to whatever you like\n    max_players: 2\n    force_default_server: false\n    tab_size: 60\n    forced_hosts:\n      pvp.md-5.net: pvp\n    tab_list: GLOBAL_PING\n    bind_local_address: true # should be kept true\n    ping_passthrough: false\n    query_enabled: false\n    proxy_protocol: false\n    priorities:\n      - lobby\n      - survival\n      - creative\nonline_mode: true # needs to true\n')),(0,a.kt)("h2",{id:"velocity"},"Velocity"),(0,a.kt)("p",null,"Here's a sample of a ",(0,a.kt)("strong",{parentName:"p"},"velocity.toml")," that you can place in ",(0,a.kt)("strong",{parentName:"p"},"/config")," dir."),(0,a.kt)("p",null,"You can create a file called ",(0,a.kt)("strong",{parentName:"p"},"secrets")," in ",(0,a.kt)("strong",{parentName:"p"},"/config")," dir and apply the name to this value like so -> ",(0,a.kt)("strong",{parentName:"p"},'forwarding-secret-file = "./secret"'),"."),(0,a.kt)("p",null,"The contents of the secret file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"MyForwardingSecret\n")),(0,a.kt)("p",null,"For every MC (Spigot) instance you want proxied by Velocity, you need to make sure ",(0,a.kt)("strong",{parentName:"p"},"bungeecord")," in ",(0,a.kt)("strong",{parentName:"p"},"/data/spigot.yml")," is set to:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"bungeecord: false\n")),(0,a.kt)("p",null,"Then in this file(assuming you are running paper) ",(0,a.kt)("strong",{parentName:"p"},"/config/paper-global.yml"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"bungee-cord:\n    online-mode: false # needs to be `false`.\n    # ....\n    velocity:\n    enabled: true\n    online-mode: true\n    secret: MySuperSecretFromConfig # the actual value and NOT the name of the file.\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'# Config version. Do not change this\nconfig-version = "2.5"\n\n# What port should the proxy be bound to? By default, we\'ll bind to all addresses on port 25577.\nbind = "0.0.0.0:25577" # leave alone, dont change.\n\n# What should be the MOTD? This gets displayed when the player adds your server to\n# their server list. Legacy color codes and JSON are accepted.\nmotd = "&#09add3A Velocity Server"\n\n# What should we display for the maximum number of players? (Velocity does not support a cap\n# on the number of players online.)\nshow-max-players = 420\n\n# Should we authenticate players with Mojang? By default, this is on.\nonline-mode = true\n\n# Should the proxy enforce the new public key security standard? By default, this is on.\nforce-key-authentication = true\n\n# If client\'s ISP/AS sent from this proxy is different from the one from Mojang\'s\n# authentication server, the player is kicked. This disallows some VPN and proxy\n# connections but is a weak form of protection.\nprevent-client-proxy-connections = false\n\n# Should we forward IP addresses and other data to backend servers?\n# Available options:\n# - "none":        No forwarding will be done. All players will appear to be connecting\n#                  from the proxy and will have offline-mode UUIDs.\n# - "legacy":      Forward player IPs and UUIDs in a BungeeCord-compatible format. Use this\n#                  if you run servers using Minecraft 1.12 or lower.\n# - "bungeeguard": Forward player IPs and UUIDs in a format supported by the BungeeGuard\n#                  plugin. Use this if you run servers using Minecraft 1.12 or lower, and are\n#                  unable to implement network level firewalling (on a shared host).\n# - "modern":      Forward player IPs and UUIDs as part of the login process using\n#                  Velocity\'s native forwarding. Only applicable for Minecraft 1.13 or higher.\nplayer-info-forwarding-mode = "modern"\n\n# If you are using modern or BungeeGuard IP forwarding, configure a file that contains a unique secret here.\n# The file is expected to be UTF-8 encoded and not empty.\nforwarding-secret-file = "./secret"\n\n# Announce whether or not your server supports Forge. If you run a modded server, we\n# suggest turning this on.\n#\n# If your network runs one modpack consistently, consider using ping-passthrough = "mods"\n# instead for a nicer display in the server list.\nannounce-forge = false\n\n# If enabled (default is false) and the proxy is in online mode, Velocity will kick\n# any existing player who is online if a duplicate connection attempt is made.\nkick-existing-players = false\n\n# Should Velocity pass server list ping requests to a backend server?\n# Available options:\n# - "disabled":    No pass-through will be done. The velocity.toml and server-icon.png\n#                  will determine the initial server list ping response.\n# - "mods":        Passes only the mod list from your backend server into the response.\n#                  The first server in your try list (or forced host) with a mod list will be\n#                  used. If no backend servers can be contacted, Velocity won\'t display any\n#                  mod information.\n# - "description": Uses the description and mod list from the backend server. The first\n#                  server in the try (or forced host) list that responds is used for the\n#                  description and mod list.\n# - "all":         Uses the backend server\'s response as the proxy response. The Velocity\n#                  configuration is used if no servers could be contacted.\nping-passthrough = "DISABLED"\n\n# If not enabled (default is true) player IP addresses will be replaced by <ip address withheld> in logs\nenable-player-address-logging = true\n\n[servers]\n# Configure your servers here. Each key represents the server\'s name, and the value\n# represents the IP address of the server to connect to.\nlobby = "MY_PRIVATE_IP:25566"\nsurvival = "MY_PRIVATE_IP:25567"\ncreative = "MY_PRIVATE_IP:25568"\n\n# In what order we should try servers when a player logs in or is kicked from aserver.\ntry = [\n    "lobby"\n]\n\n[forced-hosts]\n# Configure your forced hosts here.\n"lobby.mydomain.com" = [\n    "lobby"\n]\n"survival.mydomain.com" = [\n    "survival"\n]\n"creative.mydomain.com" = [\n    "creative"\n]\n\n[advanced]\n# How large a Minecraft packet has to be before we compress it. Setting this to zero will\n# compress all packets, and setting it to -1 will disable compression entirely.\ncompression-threshold = 256\n\n# How much compression should be done (from 0-9). The default is -1, which uses the\n# default level of 6.\ncompression-level = -1\n\n# How fast (in milliseconds) are clients allowed to connect after the last connection? By\n# default, this is three seconds. Disable this by setting this to 0.\nlogin-ratelimit = 3000\n\n# Specify a custom timeout for connection timeouts here. The default is five seconds.\nconnection-timeout = 5000\n\n# Specify a read timeout for connections here. The default is 30 seconds.\nread-timeout = 30000\n\n# Enables compatibility with HAProxy\'s PROXY protocol. If you don\'t know what this is for, then\n# don\'t enable it.\nhaproxy-protocol = false\n\n# Enables TCP fast open support on the proxy. Requires the proxy to run on Linux.\ntcp-fast-open = true # any issues, set \'false\'.\n\n# Enables BungeeCord plugin messaging channel support on Velocity.\nbungee-plugin-message-channel = true\n\n# Shows ping requests to the proxy from clients.\nshow-ping-requests = false\n\n# By default, Velocity will attempt to gracefully handle situations where the user unexpectedly\n# loses connection to the server without an explicit disconnect message by attempting to fall the\n# user back, except in the case of read timeouts. BungeeCord will disconnect the user instead. You\n# can disable this setting to use the BungeeCord behavior.\nfailover-on-unexpected-server-disconnect = true\n\n# Declares the proxy commands to 1.13+ clients.\nannounce-proxy-commands = true\n\n# Enables the logging of commands\nlog-command-executions = false\n\n# Enables logging of player connections when connecting to the proxy, switching servers\n# and disconnecting from the proxy.\nlog-player-connections = true\n\n[query]\n# Whether to enable responding to GameSpy 4 query responses or not.\nenabled = false\n\n# If query is enabled, on what port should the query protocol listen on?\nport = 25577 # DONT CHANGE THIS PORT.\n\n# This is the map name that is reported to the query services.\nmap = "Velocity"\n\n# Whether plugins should be shown in query response by default or not\nshow-plugins = false\n')),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"There's currently a known issue with ",(0,a.kt)("strong",{parentName:"p"},"limbo server")," when attemptng to connect to a ",(0,a.kt)("strong",{parentName:"p"},"1.19.2")," velocity proxy server and using ",(0,a.kt)("strong",{parentName:"p"},'player-info-forwarding-mode = "modern"'),". You can track the current issue here ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/LOOHP/Limbo/issues/50"},"issue 50"),"."),(0,a.kt)("p",{parentName:"admonition"},"Bungeecord/waterfall are ",(0,a.kt)("em",{parentName:"p"},"not")," affected."),(0,a.kt)("p",{parentName:"admonition"},"Sources:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.spigotmc.org/wiki/bungeecord-configuration-guide/"},"bungeecord | waterfall config.yml")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/PaperMC/Velocity/blob/dev/3.0.0/proxy/src/main/resources/default-velocity.toml"},"velocity.toml")))))}m.isMDXComponent=!0}}]);