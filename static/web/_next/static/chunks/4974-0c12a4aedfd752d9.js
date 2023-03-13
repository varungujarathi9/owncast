"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4974],{44974:function(e,t,n){let a;n.d(t,{me:function(){return Z},FI:function(){return I},Q:function(){return v},L4:function(){return _},j$:function(){return k},ZA:function(){return L},g1:function(){return w},g8:function(){return F},db:function(){return T},ap:function(){return M},di:function(){return U},pT:function(){return P},hz:function(){return D},YW:function(){return H},We:function(){return G},RI:function(){return b},pH:function(){return Y},Gt:function(){return m}});var o,i,s=n(67294),r=n(4480),c=n(99717);let l=(0,s.createContext)(class{static async getConfig(){let e=await fetch("/api/config"),t=await e.json();return t}});var u=n(81453);let d=(0,s.createContext)(class{static async getChatHistory(e){let t=await (0,u.$l)("".concat("/api/chat","?accessToken=").concat(e));return t}static async registerUser(e){let t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({displayName:e})},n=await (0,u.$l)("/api/chat/register",t);return n}});var E=n(28997);class h{createAndConnect(e){let t=new URL(e);t.protocol="https:"===window.location.protocol?"wss:":"ws:",t.pathname="/ws",t.port="3000"===window.location.port?"8080":window.location.port,t.searchParams.append("accessToken",this.accessToken),console.debug("connecting to ",t.toString());let n=new WebSocket(t.toString());n.onopen=this.onOpen.bind(this),n.onerror=this.onError.bind(this),n.onmessage=this.onMessage.bind(this),this.websocket=n}onOpen(){this.websocketReconnectTimer&&clearTimeout(this.websocketReconnectTimer)}onError(e){console.error("Chat has been disconnected and is likely not working for you. It's possible you were removed from chat. If this is a server configuration issue, visit troubleshooting steps to resolve. https://owncast.online/docs/troubleshooting/#chat-is-disabled: ".concat("Socket error: ".concat(e))),this.websocket.close(),this.isShutdown||this.scheduleReconnect()}scheduleReconnect(){this.websocketReconnectTimer&&clearTimeout(this.websocketReconnectTimer),this.backOff*=2,this.websocketReconnectTimer=setTimeout(this.createAndConnect,5e3+Math.min(this.backOff,1e4))}shutdown(){this.isShutdown=!0,this.websocket.close()}onMessage(e){let t;let n=e.data.split("\n");for(let e=0;e<n.length;e++){try{t=JSON.parse(n[e]),this.handleMessage&&this.handleMessage(t)}catch(e){console.error(e,e.data);return}if(!t.type){console.error("No type provided",t);return}if(t.type===E.C.PING){this.sendPong();return}}}isConnected(){var e,t;return(null===(e=this.websocket)||void 0===e?void 0:e.readyState)===(null===(t=this.websocket)||void 0===t?void 0:t.OPEN)}send(e){e.type&&E.C[e.type]||console.warn('Outbound message: Unknown socket message type: "'.concat(e.type,'" sent.'));let t=JSON.stringify(e);this.websocket.send(t)}sendPong(){let e={type:E.C.PONG};this.send(e)}constructor(e,t,n){this.isShutdown=!1,this.backOff=1e3,this.accessToken=e,this.path=t,this.websocketReconnectTimer=null,this.isShutdown=!1,this.createAndConnect=this.createAndConnect.bind(this),this.shutdown=this.shutdown.bind(this),this.createAndConnect(n)}}var f=n(4723);(o=i||(i={})).Loading="LOADING",o.Loaded="LOADED",o.Online="ONLINE",o.Offline="OFFLINE",o.NeedsRegister="NEEDS_REGISTER",o.Fail="FAIL";let g=(0,f.C)({id:"appState",initial:"loading",predictableActionArguments:!0,states:{loading:{meta:{chatAvailable:!1,chatLoading:!1,videoAvailable:!1,appLoading:!0},on:{NEEDS_REGISTER:{target:"loading"},LOADED:{target:"ready"},FAIL:{target:"serverFailure"}}},ready:{initial:"offline",states:{online:{meta:{chatAvailable:!0,chatLoading:!1,videoAvailable:!0,appLoading:!1},on:{OFFLINE:{target:"goodbye"}}},offline:{meta:{chatAvailable:!1,chatLoading:!1,videoAvailable:!1,appLoading:!1},on:{ONLINE:{target:"online"}}},goodbye:{on:{ONLINE:{target:"online"}},meta:{chatAvailable:!0,chatLoading:!1,videoAvailable:!1,appLoading:!1},after:{3e5:{target:"offline"}}}}},serverFailure:{type:"final"},userfailure:{type:"final"}}});var y=n(61225),N=n(63516),S=function(e,t,n){let{user:a}=e,{id:o,displayName:i,displayColor:s,scopes:r,authenticated:c}=a;t(c),n({id:o.toString(),displayName:i,displayColor:s,isModerator:null==r?void 0:r.includes("MODERATOR")})};let p=(0,s.createContext)(class{static async getStatus(){let e=await fetch("/api/status"),t=await e.json();return t}});var C=function(e,t){t(t=>[...t,e])};r.zl.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED=!1;let A="accessToken",O=!1,R="Cannot connect to the Owncast service. Please check your internet connection or if needed, double check this Owncast server is running.",b=(0,r.cn)({key:"serverStatusState",default:{online:!1,viewerCount:0,serverTime:new Date}}),w=(0,r.cn)({key:"clientConfigState",default:{name:"",summary:"",offlineMessage:"",logo:"",tags:[],version:"",nsfw:!1,extraPageContent:"",socialHandles:[],chatDisabled:!1,externalActions:[],customStyles:"",appearanceVariables:new Map,maxSocketPayloadSize:0,federation:{enabled:!1,account:"",followerCount:0},notifications:{browser:{enabled:!1,publicKey:""}},authentication:{indieAuthEnabled:!1}}}),I=(0,r.cn)({key:"accessTokenAtom",default:null}),T=(0,r.cn)({key:"currentUserAtom",default:null}),k=(0,r.cn)({key:"chatMessages",default:[]}),_=(0,r.cn)({key:"chatAuthenticatedAtom",default:!1}),m=(0,r.cn)({key:"websocketServiceAtom",default:null,dangerouslyAllowMutability:!0}),v=(0,r.cn)({key:"appState",default:{chatAvailable:!1,chatLoading:!0,videoAvailable:!1,appLoading:!0}}),D=(0,r.cn)({key:"isMobileAtom",default:void 0}),L=(0,r.cn)({key:"chatVisibilityToggleAtom",default:!0}),G=(0,r.cn)({key:"isVideoPlayingAtom",default:!1}),M=(0,r.cn)({key:"fatalErrorStateAtom",default:null}),F=(0,r.cn)({key:"clockSkewAtom",default:0}),V=(0,r.cn)({key:"removedMessageIds",default:[]}),P=(0,r.nZ)({key:"isChatVisibleSelector",get:e=>{let{get:t}=e,n=t(v),a=t(L),o=t(I);return o&&n.chatAvailable&&a}}),U=(0,r.nZ)({key:"isChatAvailableSelector",get:e=>{let{get:t}=e,n=t(v),a=t(I);return a&&n.chatAvailable}}),H=(0,r.nZ)({key:"isOnlineSelector",get:e=>{let{get:t}=e,n=t(v),a=t(G);return n.videoAvailable||a}}),Y=(0,r.nZ)({key:"visibleChatMessagesSelector",get:e=>{let{get:t}=e,n=t(k),a=t(V);return n.filter(e=>!a.includes(e.id))}}),Z=()=>{let e;let t=(0,s.useContext)(l),n=(0,s.useContext)(d),o=(0,s.useContext)(p),[u,f,D]=(0,c.e)(g),[L,G]=(0,r.FV)(T),P=(0,r.Zl)(_),[U,H]=(0,r.FV)(w),[,Y]=(0,r.FV)(b),Z=(0,r.Zl)(F),[x,J]=(0,r.FV)(k),[j,B]=(0,r.FV)(I),K=(0,r.Zl)(v),W=(0,r.Zl)(M),X=(0,r.Zl)(m),[$,Q]=(0,r.FV)(V),[q,z]=(0,s.useState)(!1),ee=(e,t)=>{W({title:e,message:t})},et=e=>{f(e)},en=e=>{if(u.matches("loading")){let t=[i.Loaded];e.online?t.push(i.Online):t.push(i.Offline),et(t);return}e.online&&u.matches("ready")?et([i.Online]):e.online||u.matches("ready.offline")||et([i.Offline])},ea=async()=>{try{let e=await t.getConfig();H(e),W(null),z(!0)}catch(e){ee("Unable to reach Owncast server",R),console.error("ClientConfigService -> getConfig() ERROR: \n",e)}},eo=async()=>{try{let e=await o.getStatus();en(e),Y(e);let{serverTime:t}=e,n=new Date(t).getTime()-Date.now();Z(n),W(null)}catch(e){et([i.Fail]),ee("Unable to reach Owncast server",R),console.error("serverStatusState -> getStatus() ERROR: \n",e)}},ei=async e=>{let t=(0,y.$o)(A);if(t){B(t);return}try{et([i.NeedsRegister]);let t=await n.registerUser(e),{accessToken:a,displayName:o,displayColor:s}=t;if(!a)return;G({...L,displayName:o,displayColor:s}),B(a),(0,y.qQ)(A,a)}catch(e){et([i.Fail]),console.error("ChatService -> registerUser() ERROR: \n".concat(e))}},es=()=>{(0,y.qQ)(A,""),B(null),ei()},er=e=>{let{ids:t,visible:n}=e;if(n){let e=$.filter(e=>!t.includes(e));Q(e)}else{let e=[...$,...t];Q(e)}},ec=e=>{switch(e.type){case E.C.ERROR_NEEDS_REGISTRATION:es();break;case E.C.CONNECTED_USER_INFO:if(S(e,P,G),e){var t;let n=new E.s(e);!O&&(null===(t=n.user)||void 0===t?void 0:t.isModerator())&&(J(t=>[...t,e]),O=!0)}break;case E.C.CHAT:J(t=>[...t,e]);break;case E.C.NAME_CHANGE:C(e,J);break;case E.C.USER_JOINED:J(t=>[...t,e]);break;case E.C.SYSTEM:J(t=>[...t,e]);break;case E.C.CHAT_ACTION:J(t=>[...t,e]);break;case E.C.FEDIVERSE_ENGAGEMENT_FOLLOW:J(t=>[...t,e]);break;case E.C.FEDIVERSE_ENGAGEMENT_LIKE:J(t=>[...t,e]);break;case E.C.FEDIVERSE_ENGAGEMENT_REPOST:J(t=>[...t,e]);break;case E.C.VISIBILITY_UPDATE:er(e);break;default:console.error("Unknown socket message type: ",e.type)}},el=async()=>{try{let e=await n.getChatHistory(j);J(t=>[...t,...e])}catch(e){console.error("ChatService -> getChatHistory() ERROR: \n".concat(e))}},eu=async()=>{try{let{socketHostOverride:t}=U,n=window.location;n.hash="";let a=n.toString().replaceAll("#","");(e=new h(j,"/ws",t||a)).handleMessage=ec,X(e)}catch(e){console.error("ChatService -> startChat() ERROR: \n".concat(e))}},ed=()=>{};return(0,s.useEffect)(()=>{try{if(window.configHydration){let e=JSON.parse(window.configHydration);H(e),z(!0)}}catch(e){console.error("Error parsing config hydration",e)}try{if(window.statusHydration){let e=JSON.parse(window.statusHydration);Y(e),en(e)}}catch(e){console.error("error parsing status hydration",e)}},[]),(0,s.useEffect)(()=>{!U.chatDisabled&&j&&q&&eu()},[q,j]),(0,s.useEffect)(()=>{ed()},[x]),(0,s.useEffect)(()=>(ea(),ei(),eo(),clearInterval(a),a=setInterval(()=>{eo()},5e3),()=>{clearInterval(a)}),[]),(0,s.useEffect)(()=>{j&&el()},[j]),(0,s.useEffect)(()=>{D.onTransition(e=>{let t=(0,N.YR)(e.meta);K(t)})},[]),null}},28997:function(e,t,n){n.d(t,{C:function(){return o},s:function(){return s}});var a,o,i=n(25449);(a=o||(o={})).CHAT="CHAT",a.PING="PING",a.NAME_CHANGE="NAME_CHANGE",a.COLOR_CHANGE="COLOR_CHANGE",a.PONG="PONG",a.SYSTEM="SYSTEM",a.USER_JOINED="USER_JOINED",a.CHAT_ACTION="CHAT_ACTION",a.FEDIVERSE_ENGAGEMENT_FOLLOW="FEDIVERSE_ENGAGEMENT_FOLLOW",a.FEDIVERSE_ENGAGEMENT_LIKE="FEDIVERSE_ENGAGEMENT_LIKE",a.FEDIVERSE_ENGAGEMENT_REPOST="FEDIVERSE_ENGAGEMENT_REPOST",a.CONNECTED_USER_INFO="CONNECTED_USER_INFO",a.ERROR_USER_DISABLED="ERROR_USER_DISABLED",a.ERROR_NEEDS_REGISTRATION="ERROR_NEEDS_REGISTRATION",a.ERROR_MAX_CONNECTIONS_EXCEEDED="ERROR_MAX_CONNECTIONS_EXCEEDED",a.VISIBILITY_UPDATE="VISIBILITY-UPDATE";class s{constructor(e){this.id=e.id,this.timestamp=e.timestamp,this.type=e.type,this.body=e.body,e.user&&(this.user=new i.n(e.user))}}},25449:function(e,t,n){n.d(t,{n:function(){return a}});class a{constructor(e){this.isModerator=()=>!!this.scopes&&0!==this.scopes.length&&this.scopes.includes("moderator"),this.id=e.id,this.displayName=e.displayName,this.displayColor=e.displayColor,this.createdAt=e.createdAt,this.previousNames=e.previousNames,this.nameChangedAt=e.nameChangedAt,this.scopes=e.scopes,this.authenticated=e.authenticated}}},63516:function(e,t,n){function a(e,t){return 1===t?e:"".concat(e,"s")}function o(e){let t="string"==typeof e?new Date(e):e;return(new Date-t)/864e5}function i(e){return Object.keys(e).reduce((t,n)=>{let a=e[n];return Object.assign(t,a),t},{})}n.d(t,{Xb:function(){return o},YR:function(){return i},_6:function(){return a}})},61225:function(e,t,n){n.d(t,{$o:function(){return o},dA:function(){return a},qQ:function(){return i}});let a={username:"username",hasDisplayedNotificationModal:"HAS_DISPLAYED_NOTIFICATION_MODAL",userVisitCount:"USER_VISIT_COUNT"};function o(e){try{return localStorage.getItem(e)}catch(e){}return null}function i(e,t){try{return""!==t&&null!==t?localStorage.setItem(e,t):localStorage.removeItem(e),!0}catch(e){}return!1}}}]);