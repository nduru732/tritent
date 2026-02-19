function yx(r,s){for(var d=0;d<s.length;d++){const c=s[d];if(typeof c!="string"&&!Array.isArray(c)){for(const f in c)if(f!=="default"&&!(f in r)){const p=Object.getOwnPropertyDescriptor(c,f);p&&Object.defineProperty(r,f,p.get?p:{enumerable:!0,get:()=>c[f]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))c(f);new MutationObserver(f=>{for(const p of f)if(p.type==="childList")for(const g of p.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&c(g)}).observe(document,{childList:!0,subtree:!0});function d(f){const p={};return f.integrity&&(p.integrity=f.integrity),f.referrerPolicy&&(p.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?p.credentials="include":f.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function c(f){if(f.ep)return;f.ep=!0;const p=d(f);fetch(f.href,p)}})();function bx(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var nd={exports:{}},Ar={};var Hh;function vx(){if(Hh)return Ar;Hh=1;var r=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function d(c,f,p){var g=null;if(p!==void 0&&(g=""+p),f.key!==void 0&&(g=""+f.key),"key"in f){p={};for(var y in f)y!=="key"&&(p[y]=f[y])}else p=f;return f=p.ref,{$$typeof:r,type:c,key:g,ref:f!==void 0?f:null,props:p}}return Ar.Fragment=s,Ar.jsx=d,Ar.jsxs=d,Ar}var Yh;function jx(){return Yh||(Yh=1,nd.exports=vx()),nd.exports}var n=jx(),id={exports:{}},je={};var qh;function wx(){if(qh)return je;qh=1;var r=Symbol.for("react.transitional.element"),s=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),p=Symbol.for("react.consumer"),g=Symbol.for("react.context"),y=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),k=Symbol.iterator;function _(C){return C===null||typeof C!="object"?null:(C=k&&C[k]||C["@@iterator"],typeof C=="function"?C:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},z=Object.assign,T={};function D(C,Q,ne){this.props=C,this.context=Q,this.refs=T,this.updater=ne||A}D.prototype.isReactComponent={},D.prototype.setState=function(C,Q){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,C,Q,"setState")},D.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function G(){}G.prototype=D.prototype;function K(C,Q,ne){this.props=C,this.context=Q,this.refs=T,this.updater=ne||A}var q=K.prototype=new G;q.constructor=K,z(q,D.prototype),q.isPureReactComponent=!0;var S=Array.isArray;function U(){}var $={H:null,A:null,T:null,S:null},re=Object.prototype.hasOwnProperty;function be(C,Q,ne){var M=ne.ref;return{$$typeof:r,type:C,key:Q,ref:M!==void 0?M:null,props:ne}}function ie(C,Q){return be(C.type,Q,C.props)}function de(C){return typeof C=="object"&&C!==null&&C.$$typeof===r}function we(C){var Q={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function(ne){return Q[ne]})}var W=/\/+/g;function F(C,Q){return typeof C=="object"&&C!==null&&C.key!=null?we(""+C.key):Q.toString(36)}function ye(C){switch(C.status){case"fulfilled":return C.value;case"rejected":throw C.reason;default:switch(typeof C.status=="string"?C.then(U,U):(C.status="pending",C.then(function(Q){C.status==="pending"&&(C.status="fulfilled",C.value=Q)},function(Q){C.status==="pending"&&(C.status="rejected",C.reason=Q)})),C.status){case"fulfilled":return C.value;case"rejected":throw C.reason}}throw C}function H(C,Q,ne,M,J){var P=typeof C;(P==="undefined"||P==="boolean")&&(C=null);var fe=!1;if(C===null)fe=!0;else switch(P){case"bigint":case"string":case"number":fe=!0;break;case"object":switch(C.$$typeof){case r:case s:fe=!0;break;case j:return fe=C._init,H(fe(C._payload),Q,ne,M,J)}}if(fe)return J=J(C),fe=M===""?"."+F(C,0):M,S(J)?(ne="",fe!=null&&(ne=fe.replace(W,"$&/")+"/"),H(J,Q,ne,"",function(Ae){return Ae})):J!=null&&(de(J)&&(J=ie(J,ne+(J.key==null||C&&C.key===J.key?"":(""+J.key).replace(W,"$&/")+"/")+fe)),Q.push(J)),1;fe=0;var ve=M===""?".":M+":";if(S(C))for(var he=0;he<C.length;he++)M=C[he],P=ve+F(M,he),fe+=H(M,Q,ne,P,J);else if(he=_(C),typeof he=="function")for(C=he.call(C),he=0;!(M=C.next()).done;)M=M.value,P=ve+F(M,he++),fe+=H(M,Q,ne,P,J);else if(P==="object"){if(typeof C.then=="function")return H(ye(C),Q,ne,M,J);throw Q=String(C),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.")}return fe}function I(C,Q,ne){if(C==null)return C;var M=[],J=0;return H(C,M,"","",function(P){return Q.call(ne,P,J++)}),M}function ue(C){if(C._status===-1){var Q=C._result;Q=Q(),Q.then(function(ne){(C._status===0||C._status===-1)&&(C._status=1,C._result=ne)},function(ne){(C._status===0||C._status===-1)&&(C._status=2,C._result=ne)}),C._status===-1&&(C._status=0,C._result=Q)}if(C._status===1)return C._result.default;throw C._result}var Ee=typeof reportError=="function"?reportError:function(C){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof C=="object"&&C!==null&&typeof C.message=="string"?String(C.message):String(C),error:C});if(!window.dispatchEvent(Q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",C);return}console.error(C)},Te={map:I,forEach:function(C,Q,ne){I(C,function(){Q.apply(this,arguments)},ne)},count:function(C){var Q=0;return I(C,function(){Q++}),Q},toArray:function(C){return I(C,function(Q){return Q})||[]},only:function(C){if(!de(C))throw Error("React.Children.only expected to receive a single React element child.");return C}};return je.Activity=v,je.Children=Te,je.Component=D,je.Fragment=d,je.Profiler=f,je.PureComponent=K,je.StrictMode=c,je.Suspense=b,je.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=$,je.__COMPILER_RUNTIME={__proto__:null,c:function(C){return $.H.useMemoCache(C)}},je.cache=function(C){return function(){return C.apply(null,arguments)}},je.cacheSignal=function(){return null},je.cloneElement=function(C,Q,ne){if(C==null)throw Error("The argument must be a React element, but you passed "+C+".");var M=z({},C.props),J=C.key;if(Q!=null)for(P in Q.key!==void 0&&(J=""+Q.key),Q)!re.call(Q,P)||P==="key"||P==="__self"||P==="__source"||P==="ref"&&Q.ref===void 0||(M[P]=Q[P]);var P=arguments.length-2;if(P===1)M.children=ne;else if(1<P){for(var fe=Array(P),ve=0;ve<P;ve++)fe[ve]=arguments[ve+2];M.children=fe}return be(C.type,J,M)},je.createContext=function(C){return C={$$typeof:g,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null},C.Provider=C,C.Consumer={$$typeof:p,_context:C},C},je.createElement=function(C,Q,ne){var M,J={},P=null;if(Q!=null)for(M in Q.key!==void 0&&(P=""+Q.key),Q)re.call(Q,M)&&M!=="key"&&M!=="__self"&&M!=="__source"&&(J[M]=Q[M]);var fe=arguments.length-2;if(fe===1)J.children=ne;else if(1<fe){for(var ve=Array(fe),he=0;he<fe;he++)ve[he]=arguments[he+2];J.children=ve}if(C&&C.defaultProps)for(M in fe=C.defaultProps,fe)J[M]===void 0&&(J[M]=fe[M]);return be(C,P,J)},je.createRef=function(){return{current:null}},je.forwardRef=function(C){return{$$typeof:y,render:C}},je.isValidElement=de,je.lazy=function(C){return{$$typeof:j,_payload:{_status:-1,_result:C},_init:ue}},je.memo=function(C,Q){return{$$typeof:m,type:C,compare:Q===void 0?null:Q}},je.startTransition=function(C){var Q=$.T,ne={};$.T=ne;try{var M=C(),J=$.S;J!==null&&J(ne,M),typeof M=="object"&&M!==null&&typeof M.then=="function"&&M.then(U,Ee)}catch(P){Ee(P)}finally{Q!==null&&ne.types!==null&&(Q.types=ne.types),$.T=Q}},je.unstable_useCacheRefresh=function(){return $.H.useCacheRefresh()},je.use=function(C){return $.H.use(C)},je.useActionState=function(C,Q,ne){return $.H.useActionState(C,Q,ne)},je.useCallback=function(C,Q){return $.H.useCallback(C,Q)},je.useContext=function(C){return $.H.useContext(C)},je.useDebugValue=function(){},je.useDeferredValue=function(C,Q){return $.H.useDeferredValue(C,Q)},je.useEffect=function(C,Q){return $.H.useEffect(C,Q)},je.useEffectEvent=function(C){return $.H.useEffectEvent(C)},je.useId=function(){return $.H.useId()},je.useImperativeHandle=function(C,Q,ne){return $.H.useImperativeHandle(C,Q,ne)},je.useInsertionEffect=function(C,Q){return $.H.useInsertionEffect(C,Q)},je.useLayoutEffect=function(C,Q){return $.H.useLayoutEffect(C,Q)},je.useMemo=function(C,Q){return $.H.useMemo(C,Q)},je.useOptimistic=function(C,Q){return $.H.useOptimistic(C,Q)},je.useReducer=function(C,Q,ne){return $.H.useReducer(C,Q,ne)},je.useRef=function(C){return $.H.useRef(C)},je.useState=function(C){return $.H.useState(C)},je.useSyncExternalStore=function(C,Q,ne){return $.H.useSyncExternalStore(C,Q,ne)},je.useTransition=function(){return $.H.useTransition()},je.version="19.2.4",je}var $h;function zd(){return $h||($h=1,id.exports=wx()),id.exports}var h=zd();const On=bx(h),Sx=yx({__proto__:null,default:On},[h]);var rd={exports:{}},Mr={},ld={exports:{}},sd={};var Gh;function kx(){return Gh||(Gh=1,(function(r){function s(H,I){var ue=H.length;H.push(I);e:for(;0<ue;){var Ee=ue-1>>>1,Te=H[Ee];if(0<f(Te,I))H[Ee]=I,H[ue]=Te,ue=Ee;else break e}}function d(H){return H.length===0?null:H[0]}function c(H){if(H.length===0)return null;var I=H[0],ue=H.pop();if(ue!==I){H[0]=ue;e:for(var Ee=0,Te=H.length,C=Te>>>1;Ee<C;){var Q=2*(Ee+1)-1,ne=H[Q],M=Q+1,J=H[M];if(0>f(ne,ue))M<Te&&0>f(J,ne)?(H[Ee]=J,H[M]=ue,Ee=M):(H[Ee]=ne,H[Q]=ue,Ee=Q);else if(M<Te&&0>f(J,ue))H[Ee]=J,H[M]=ue,Ee=M;else break e}}return I}function f(H,I){var ue=H.sortIndex-I.sortIndex;return ue!==0?ue:H.id-I.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var p=performance;r.unstable_now=function(){return p.now()}}else{var g=Date,y=g.now();r.unstable_now=function(){return g.now()-y}}var b=[],m=[],j=1,v=null,k=3,_=!1,A=!1,z=!1,T=!1,D=typeof setTimeout=="function"?setTimeout:null,G=typeof clearTimeout=="function"?clearTimeout:null,K=typeof setImmediate<"u"?setImmediate:null;function q(H){for(var I=d(m);I!==null;){if(I.callback===null)c(m);else if(I.startTime<=H)c(m),I.sortIndex=I.expirationTime,s(b,I);else break;I=d(m)}}function S(H){if(z=!1,q(H),!A)if(d(b)!==null)A=!0,U||(U=!0,we());else{var I=d(m);I!==null&&ye(S,I.startTime-H)}}var U=!1,$=-1,re=5,be=-1;function ie(){return T?!0:!(r.unstable_now()-be<re)}function de(){if(T=!1,U){var H=r.unstable_now();be=H;var I=!0;try{e:{A=!1,z&&(z=!1,G($),$=-1),_=!0;var ue=k;try{t:{for(q(H),v=d(b);v!==null&&!(v.expirationTime>H&&ie());){var Ee=v.callback;if(typeof Ee=="function"){v.callback=null,k=v.priorityLevel;var Te=Ee(v.expirationTime<=H);if(H=r.unstable_now(),typeof Te=="function"){v.callback=Te,q(H),I=!0;break t}v===d(b)&&c(b),q(H)}else c(b);v=d(b)}if(v!==null)I=!0;else{var C=d(m);C!==null&&ye(S,C.startTime-H),I=!1}}break e}finally{v=null,k=ue,_=!1}I=void 0}}finally{I?we():U=!1}}}var we;if(typeof K=="function")we=function(){K(de)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,F=W.port2;W.port1.onmessage=de,we=function(){F.postMessage(null)}}else we=function(){D(de,0)};function ye(H,I){$=D(function(){H(r.unstable_now())},I)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(H){H.callback=null},r.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):re=0<H?Math.floor(1e3/H):5},r.unstable_getCurrentPriorityLevel=function(){return k},r.unstable_next=function(H){switch(k){case 1:case 2:case 3:var I=3;break;default:I=k}var ue=k;k=I;try{return H()}finally{k=ue}},r.unstable_requestPaint=function(){T=!0},r.unstable_runWithPriority=function(H,I){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var ue=k;k=H;try{return I()}finally{k=ue}},r.unstable_scheduleCallback=function(H,I,ue){var Ee=r.unstable_now();switch(typeof ue=="object"&&ue!==null?(ue=ue.delay,ue=typeof ue=="number"&&0<ue?Ee+ue:Ee):ue=Ee,H){case 1:var Te=-1;break;case 2:Te=250;break;case 5:Te=1073741823;break;case 4:Te=1e4;break;default:Te=5e3}return Te=ue+Te,H={id:j++,callback:I,priorityLevel:H,startTime:ue,expirationTime:Te,sortIndex:-1},ue>Ee?(H.sortIndex=ue,s(m,H),d(b)===null&&H===d(m)&&(z?(G($),$=-1):z=!0,ye(S,ue-Ee))):(H.sortIndex=Te,s(b,H),A||_||(A=!0,U||(U=!0,we()))),H},r.unstable_shouldYield=ie,r.unstable_wrapCallback=function(H){var I=k;return function(){var ue=k;k=I;try{return H.apply(this,arguments)}finally{k=ue}}}})(sd)),sd}var Vh;function zx(){return Vh||(Vh=1,ld.exports=kx()),ld.exports}var od={exports:{}},jt={};var Xh;function Cx(){if(Xh)return jt;Xh=1;var r=zd();function s(b){var m="https://react.dev/errors/"+b;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var j=2;j<arguments.length;j++)m+="&args[]="+encodeURIComponent(arguments[j])}return"Minified React error #"+b+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(){}var c={d:{f:d,r:function(){throw Error(s(522))},D:d,C:d,L:d,m:d,X:d,S:d,M:d},p:0,findDOMNode:null},f=Symbol.for("react.portal");function p(b,m,j){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:v==null?null:""+v,children:b,containerInfo:m,implementation:j}}var g=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function y(b,m){if(b==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return jt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,jt.createPortal=function(b,m){var j=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(s(299));return p(b,m,null,j)},jt.flushSync=function(b){var m=g.T,j=c.p;try{if(g.T=null,c.p=2,b)return b()}finally{g.T=m,c.p=j,c.d.f()}},jt.preconnect=function(b,m){typeof b=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,c.d.C(b,m))},jt.prefetchDNS=function(b){typeof b=="string"&&c.d.D(b)},jt.preinit=function(b,m){if(typeof b=="string"&&m&&typeof m.as=="string"){var j=m.as,v=y(j,m.crossOrigin),k=typeof m.integrity=="string"?m.integrity:void 0,_=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;j==="style"?c.d.S(b,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:v,integrity:k,fetchPriority:_}):j==="script"&&c.d.X(b,{crossOrigin:v,integrity:k,fetchPriority:_,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},jt.preinitModule=function(b,m){if(typeof b=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var j=y(m.as,m.crossOrigin);c.d.M(b,{crossOrigin:j,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&c.d.M(b)},jt.preload=function(b,m){if(typeof b=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var j=m.as,v=y(j,m.crossOrigin);c.d.L(b,j,{crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},jt.preloadModule=function(b,m){if(typeof b=="string")if(m){var j=y(m.as,m.crossOrigin);c.d.m(b,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:j,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else c.d.m(b)},jt.requestFormReset=function(b){c.d.r(b)},jt.unstable_batchedUpdates=function(b,m){return b(m)},jt.useFormState=function(b,m,j){return g.H.useFormState(b,m,j)},jt.useFormStatus=function(){return g.H.useHostTransitionStatus()},jt.version="19.2.4",jt}var Qh;function Nx(){if(Qh)return od.exports;Qh=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(s){console.error(s)}}return r(),od.exports=Cx(),od.exports}var Zh;function _x(){if(Zh)return Mr;Zh=1;var r=zx(),s=zd(),d=Nx();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function p(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function g(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function y(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function b(e){if(p(e)!==e)throw Error(c(188))}function m(e){var t=e.alternate;if(!t){if(t=p(e),t===null)throw Error(c(188));return t!==e?null:e}for(var a=e,i=t;;){var l=a.return;if(l===null)break;var o=l.alternate;if(o===null){if(i=l.return,i!==null){a=i;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===a)return b(l),e;if(o===i)return b(l),t;o=o.sibling}throw Error(c(188))}if(a.return!==i.return)a=l,i=o;else{for(var u=!1,x=l.child;x;){if(x===a){u=!0,a=l,i=o;break}if(x===i){u=!0,i=l,a=o;break}x=x.sibling}if(!u){for(x=o.child;x;){if(x===a){u=!0,a=o,i=l;break}if(x===i){u=!0,i=o,a=l;break}x=x.sibling}if(!u)throw Error(c(189))}}if(a.alternate!==i)throw Error(c(190))}if(a.tag!==3)throw Error(c(188));return a.stateNode.current===a?e:t}function j(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=j(e),t!==null)return t;e=e.sibling}return null}var v=Object.assign,k=Symbol.for("react.element"),_=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),z=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),D=Symbol.for("react.profiler"),G=Symbol.for("react.consumer"),K=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),U=Symbol.for("react.suspense_list"),$=Symbol.for("react.memo"),re=Symbol.for("react.lazy"),be=Symbol.for("react.activity"),ie=Symbol.for("react.memo_cache_sentinel"),de=Symbol.iterator;function we(e){return e===null||typeof e!="object"?null:(e=de&&e[de]||e["@@iterator"],typeof e=="function"?e:null)}var W=Symbol.for("react.client.reference");function F(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===W?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case z:return"Fragment";case D:return"Profiler";case T:return"StrictMode";case S:return"Suspense";case U:return"SuspenseList";case be:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case A:return"Portal";case K:return e.displayName||"Context";case G:return(e._context.displayName||"Context")+".Consumer";case q:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case $:return t=e.displayName||null,t!==null?t:F(e.type)||"Memo";case re:t=e._payload,e=e._init;try{return F(e(t))}catch{}}return null}var ye=Array.isArray,H=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I=d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ue={pending:!1,data:null,method:null,action:null},Ee=[],Te=-1;function C(e){return{current:e}}function Q(e){0>Te||(e.current=Ee[Te],Ee[Te]=null,Te--)}function ne(e,t){Te++,Ee[Te]=e.current,e.current=t}var M=C(null),J=C(null),P=C(null),fe=C(null);function ve(e,t){switch(ne(P,t),ne(J,e),ne(M,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?oh(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=oh(t),e=ch(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Q(M),ne(M,e)}function he(){Q(M),Q(J),Q(P)}function Ae(e){e.memoizedState!==null&&ne(fe,e);var t=M.current,a=ch(t,e.type);t!==a&&(ne(J,e),ne(M,a))}function Fe(e){J.current===e&&(Q(M),Q(J)),fe.current===e&&(Q(fe),_r._currentValue=ue)}var ga,Li;function ma(e){if(ga===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);ga=t&&t[1]||"",Li=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ga+e+Li}var Hn=!1;function Hi(e,t){if(!e||Hn)return"";Hn=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var Z=function(){throw Error()};if(Object.defineProperty(Z.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Z,[])}catch(Y){var L=Y}Reflect.construct(e,[],Z)}else{try{Z.call()}catch(Y){L=Y}e.call(Z.prototype)}}else{try{throw Error()}catch(Y){L=Y}(Z=e())&&typeof Z.catch=="function"&&Z.catch(function(){})}}catch(Y){if(Y&&L&&typeof Y.stack=="string")return[Y.stack,L.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=i.DetermineComponentFrameRoot(),u=o[0],x=o[1];if(u&&x){var w=u.split(`
`),O=x.split(`
`);for(l=i=0;i<w.length&&!w[i].includes("DetermineComponentFrameRoot");)i++;for(;l<O.length&&!O[l].includes("DetermineComponentFrameRoot");)l++;if(i===w.length||l===O.length)for(i=w.length-1,l=O.length-1;1<=i&&0<=l&&w[i]!==O[l];)l--;for(;1<=i&&0<=l;i--,l--)if(w[i]!==O[l]){if(i!==1||l!==1)do if(i--,l--,0>l||w[i]!==O[l]){var V=`
`+w[i].replace(" at new "," at ");return e.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",e.displayName)),V}while(1<=i&&0<=l);break}}}finally{Hn=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ma(a):""}function Jr(e,t){switch(e.tag){case 26:case 27:case 5:return ma(e.type);case 16:return ma("Lazy");case 13:return e.child!==t&&t!==null?ma("Suspense Fallback"):ma("Suspense");case 19:return ma("SuspenseList");case 0:case 15:return Hi(e.type,!1);case 11:return Hi(e.type.render,!1);case 1:return Hi(e.type,!0);case 31:return ma("Activity");default:return""}}function Yi(e){try{var t="",a=null;do t+=Jr(e,a),a=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Yn=Object.prototype.hasOwnProperty,pn=r.unstable_scheduleCallback,qn=r.unstable_cancelCallback,Ir=r.unstable_shouldYield,Fr=r.unstable_requestPaint,vt=r.unstable_now,Pr=r.unstable_getCurrentPriorityLevel,el=r.unstable_ImmediatePriority,tl=r.unstable_UserBlockingPriority,$n=r.unstable_NormalPriority,fn=r.unstable_LowPriority,al=r.unstable_IdlePriority,$s=r.log,Gs=r.unstable_setDisableYieldValue,E=null,te=null;function Xe(e){if(typeof $s=="function"&&Gs(e),te&&typeof te.setStrictMode=="function")try{te.setStrictMode(E,e)}catch{}}var He=Math.clz32?Math.clz32:nl,ea=Math.log,Gn=Math.LN2;function nl(e){return e>>>=0,e===0?32:31-(ea(e)/Gn|0)|0}var hn=256,gn=262144,il=4194304;function mn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function rl(e,t,a){var i=e.pendingLanes;if(i===0)return 0;var l=0,o=e.suspendedLanes,u=e.pingedLanes;e=e.warmLanes;var x=i&134217727;return x!==0?(i=x&~o,i!==0?l=mn(i):(u&=x,u!==0?l=mn(u):a||(a=x&~e,a!==0&&(l=mn(a))))):(x=i&~o,x!==0?l=mn(x):u!==0?l=mn(u):a||(a=i&~e,a!==0&&(l=mn(a)))),l===0?0:t!==0&&t!==l&&(t&o)===0&&(o=l&-l,a=t&-t,o>=a||o===32&&(a&4194048)!==0)?t:l}function qi(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function r0(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $d(){var e=il;return il<<=1,(il&62914560)===0&&(il=4194304),e}function Vs(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function $i(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function l0(e,t,a,i,l,o){var u=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var x=e.entanglements,w=e.expirationTimes,O=e.hiddenUpdates;for(a=u&~a;0<a;){var V=31-He(a),Z=1<<V;x[V]=0,w[V]=-1;var L=O[V];if(L!==null)for(O[V]=null,V=0;V<L.length;V++){var Y=L[V];Y!==null&&(Y.lane&=-536870913)}a&=~Z}i!==0&&Gd(e,i,0),o!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=o&~(u&~t))}function Gd(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-He(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|a&261930}function Vd(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var i=31-He(a),l=1<<i;l&t|e[i]&t&&(e[i]|=t),a&=~l}}function Xd(e,t){var a=t&-t;return a=(a&42)!==0?1:Xs(a),(a&(e.suspendedLanes|t))!==0?0:a}function Xs(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Qs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Qd(){var e=I.p;return e!==0?e:(e=window.event,e===void 0?32:Ah(e.type))}function Zd(e,t){var a=I.p;try{return I.p=e,t()}finally{I.p=a}}var Ha=Math.random().toString(36).slice(2),ht="__reactFiber$"+Ha,kt="__reactProps$"+Ha,Vn="__reactContainer$"+Ha,Zs="__reactEvents$"+Ha,s0="__reactListeners$"+Ha,o0="__reactHandles$"+Ha,Wd="__reactResources$"+Ha,Gi="__reactMarker$"+Ha;function Ws(e){delete e[ht],delete e[kt],delete e[Zs],delete e[s0],delete e[o0]}function Xn(e){var t=e[ht];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Vn]||a[ht]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=mh(e);e!==null;){if(a=e[ht])return a;e=mh(e)}return t}e=a,a=e.parentNode}return null}function Qn(e){if(e=e[ht]||e[Vn]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Vi(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function Zn(e){var t=e[Wd];return t||(t=e[Wd]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function ut(e){e[Gi]=!0}var Kd=new Set,Jd={};function xn(e,t){Wn(e,t),Wn(e+"Capture",t)}function Wn(e,t){for(Jd[e]=t,e=0;e<t.length;e++)Kd.add(t[e])}var c0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Id={},Fd={};function d0(e){return Yn.call(Fd,e)?!0:Yn.call(Id,e)?!1:c0.test(e)?Fd[e]=!0:(Id[e]=!0,!1)}function ll(e,t,a){if(d0(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function sl(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function xa(e,t,a,i){if(i===null)e.removeAttribute(a);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+i)}}function Gt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Pd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function u0(e,t,a){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var l=i.get,o=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(u){a=""+u,o.call(this,u)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return a},setValue:function(u){a=""+u},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ks(e){if(!e._valueTracker){var t=Pd(e)?"checked":"value";e._valueTracker=u0(e,t,""+e[t])}}function eu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),i="";return e&&(i=Pd(e)?e.checked?"true":"false":e.value),e=i,e!==a?(t.setValue(e),!0):!1}function ol(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var p0=/[\n"\\]/g;function Vt(e){return e.replace(p0,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Js(e,t,a,i,l,o,u,x){e.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.type=u:e.removeAttribute("type"),t!=null?u==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Gt(t)):e.value!==""+Gt(t)&&(e.value=""+Gt(t)):u!=="submit"&&u!=="reset"||e.removeAttribute("value"),t!=null?Is(e,u,Gt(t)):a!=null?Is(e,u,Gt(a)):i!=null&&e.removeAttribute("value"),l==null&&o!=null&&(e.defaultChecked=!!o),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.name=""+Gt(x):e.removeAttribute("name")}function tu(e,t,a,i,l,o,u,x){if(o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.type=o),t!=null||a!=null){if(!(o!=="submit"&&o!=="reset"||t!=null)){Ks(e);return}a=a!=null?""+Gt(a):"",t=t!=null?""+Gt(t):a,x||t===e.value||(e.value=t),e.defaultValue=t}i=i??l,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=x?e.checked:!!i,e.defaultChecked=!!i,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.name=u),Ks(e)}function Is(e,t,a){t==="number"&&ol(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Kn(e,t,a,i){if(e=e.options,t){t={};for(var l=0;l<a.length;l++)t["$"+a[l]]=!0;for(a=0;a<e.length;a++)l=t.hasOwnProperty("$"+e[a].value),e[a].selected!==l&&(e[a].selected=l),l&&i&&(e[a].defaultSelected=!0)}else{for(a=""+Gt(a),t=null,l=0;l<e.length;l++){if(e[l].value===a){e[l].selected=!0,i&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function au(e,t,a){if(t!=null&&(t=""+Gt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+Gt(a):""}function nu(e,t,a,i){if(t==null){if(i!=null){if(a!=null)throw Error(c(92));if(ye(i)){if(1<i.length)throw Error(c(93));i=i[0]}a=i}a==null&&(a=""),t=a}a=Gt(t),e.defaultValue=a,i=e.textContent,i===a&&i!==""&&i!==null&&(e.value=i),Ks(e)}function Jn(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var f0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function iu(e,t,a){var i=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,a):typeof a!="number"||a===0||f0.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function ru(e,t,a){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,a!=null){for(var i in a)!a.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var l in t)i=t[l],t.hasOwnProperty(l)&&a[l]!==i&&iu(e,l,i)}else for(var o in t)t.hasOwnProperty(o)&&iu(e,o,t[o])}function Fs(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var h0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),g0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function cl(e){return g0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ya(){}var Ps=null;function eo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var In=null,Fn=null;function lu(e){var t=Qn(e);if(t&&(e=t.stateNode)){var a=e[kt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Js(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Vt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var i=a[t];if(i!==e&&i.form===e.form){var l=i[kt]||null;if(!l)throw Error(c(90));Js(i,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<a.length;t++)i=a[t],i.form===e.form&&eu(i)}break e;case"textarea":au(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Kn(e,!!a.multiple,t,!1)}}}var to=!1;function su(e,t,a){if(to)return e(t,a);to=!0;try{var i=e(t);return i}finally{if(to=!1,(In!==null||Fn!==null)&&(Jl(),In&&(t=In,e=Fn,Fn=In=null,lu(t),e)))for(t=0;t<e.length;t++)lu(e[t])}}function Xi(e,t){var a=e.stateNode;if(a===null)return null;var i=a[kt]||null;if(i===null)return null;a=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(c(231,t,typeof a));return a}var ba=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ao=!1;if(ba)try{var Qi={};Object.defineProperty(Qi,"passive",{get:function(){ao=!0}}),window.addEventListener("test",Qi,Qi),window.removeEventListener("test",Qi,Qi)}catch{ao=!1}var Ya=null,no=null,dl=null;function ou(){if(dl)return dl;var e,t=no,a=t.length,i,l="value"in Ya?Ya.value:Ya.textContent,o=l.length;for(e=0;e<a&&t[e]===l[e];e++);var u=a-e;for(i=1;i<=u&&t[a-i]===l[o-i];i++);return dl=l.slice(e,1<i?1-i:void 0)}function ul(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function pl(){return!0}function cu(){return!1}function zt(e){function t(a,i,l,o,u){this._reactName=a,this._targetInst=l,this.type=i,this.nativeEvent=o,this.target=u,this.currentTarget=null;for(var x in e)e.hasOwnProperty(x)&&(a=e[x],this[x]=a?a(o):o[x]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?pl:cu,this.isPropagationStopped=cu,this}return v(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=pl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=pl)},persist:function(){},isPersistent:pl}),t}var yn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fl=zt(yn),Zi=v({},yn,{view:0,detail:0}),m0=zt(Zi),io,ro,Wi,hl=v({},Zi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:so,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Wi&&(Wi&&e.type==="mousemove"?(io=e.screenX-Wi.screenX,ro=e.screenY-Wi.screenY):ro=io=0,Wi=e),io)},movementY:function(e){return"movementY"in e?e.movementY:ro}}),du=zt(hl),x0=v({},hl,{dataTransfer:0}),y0=zt(x0),b0=v({},Zi,{relatedTarget:0}),lo=zt(b0),v0=v({},yn,{animationName:0,elapsedTime:0,pseudoElement:0}),j0=zt(v0),w0=v({},yn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),S0=zt(w0),k0=v({},yn,{data:0}),uu=zt(k0),z0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},C0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},N0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=N0[e])?!!t[e]:!1}function so(){return _0}var E0=v({},Zi,{key:function(e){if(e.key){var t=z0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ul(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?C0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:so,charCode:function(e){return e.type==="keypress"?ul(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ul(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),R0=zt(E0),T0=v({},hl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),pu=zt(T0),A0=v({},Zi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:so}),M0=zt(A0),D0=v({},yn,{propertyName:0,elapsedTime:0,pseudoElement:0}),B0=zt(D0),O0=v({},hl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),U0=zt(O0),L0=v({},yn,{newState:0,oldState:0}),H0=zt(L0),Y0=[9,13,27,32],oo=ba&&"CompositionEvent"in window,Ki=null;ba&&"documentMode"in document&&(Ki=document.documentMode);var q0=ba&&"TextEvent"in window&&!Ki,fu=ba&&(!oo||Ki&&8<Ki&&11>=Ki),hu=" ",gu=!1;function mu(e,t){switch(e){case"keyup":return Y0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Pn=!1;function $0(e,t){switch(e){case"compositionend":return xu(t);case"keypress":return t.which!==32?null:(gu=!0,hu);case"textInput":return e=t.data,e===hu&&gu?null:e;default:return null}}function G0(e,t){if(Pn)return e==="compositionend"||!oo&&mu(e,t)?(e=ou(),dl=no=Ya=null,Pn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return fu&&t.locale!=="ko"?null:t.data;default:return null}}var V0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!V0[e.type]:t==="textarea"}function bu(e,t,a,i){In?Fn?Fn.push(i):Fn=[i]:In=i,t=ns(t,"onChange"),0<t.length&&(a=new fl("onChange","change",null,a,i),e.push({event:a,listeners:t}))}var Ji=null,Ii=null;function X0(e){ah(e,0)}function gl(e){var t=Vi(e);if(eu(t))return e}function vu(e,t){if(e==="change")return t}var ju=!1;if(ba){var co;if(ba){var uo="oninput"in document;if(!uo){var wu=document.createElement("div");wu.setAttribute("oninput","return;"),uo=typeof wu.oninput=="function"}co=uo}else co=!1;ju=co&&(!document.documentMode||9<document.documentMode)}function Su(){Ji&&(Ji.detachEvent("onpropertychange",ku),Ii=Ji=null)}function ku(e){if(e.propertyName==="value"&&gl(Ii)){var t=[];bu(t,Ii,e,eo(e)),su(X0,t)}}function Q0(e,t,a){e==="focusin"?(Su(),Ji=t,Ii=a,Ji.attachEvent("onpropertychange",ku)):e==="focusout"&&Su()}function Z0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return gl(Ii)}function W0(e,t){if(e==="click")return gl(t)}function K0(e,t){if(e==="input"||e==="change")return gl(t)}function J0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Mt=typeof Object.is=="function"?Object.is:J0;function Fi(e,t){if(Mt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),i=Object.keys(t);if(a.length!==i.length)return!1;for(i=0;i<a.length;i++){var l=a[i];if(!Yn.call(t,l)||!Mt(e[l],t[l]))return!1}return!0}function zu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Cu(e,t){var a=zu(e);e=0;for(var i;a;){if(a.nodeType===3){if(i=e+a.textContent.length,e<=t&&i>=t)return{node:a,offset:t-e};e=i}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=zu(a)}}function Nu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Nu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function _u(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=ol(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=ol(e.document)}return t}function po(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var I0=ba&&"documentMode"in document&&11>=document.documentMode,ei=null,fo=null,Pi=null,ho=!1;function Eu(e,t,a){var i=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ho||ei==null||ei!==ol(i)||(i=ei,"selectionStart"in i&&po(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Pi&&Fi(Pi,i)||(Pi=i,i=ns(fo,"onSelect"),0<i.length&&(t=new fl("onSelect","select",null,t,a),e.push({event:t,listeners:i}),t.target=ei)))}function bn(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var ti={animationend:bn("Animation","AnimationEnd"),animationiteration:bn("Animation","AnimationIteration"),animationstart:bn("Animation","AnimationStart"),transitionrun:bn("Transition","TransitionRun"),transitionstart:bn("Transition","TransitionStart"),transitioncancel:bn("Transition","TransitionCancel"),transitionend:bn("Transition","TransitionEnd")},go={},Ru={};ba&&(Ru=document.createElement("div").style,"AnimationEvent"in window||(delete ti.animationend.animation,delete ti.animationiteration.animation,delete ti.animationstart.animation),"TransitionEvent"in window||delete ti.transitionend.transition);function vn(e){if(go[e])return go[e];if(!ti[e])return e;var t=ti[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Ru)return go[e]=t[a];return e}var Tu=vn("animationend"),Au=vn("animationiteration"),Mu=vn("animationstart"),F0=vn("transitionrun"),P0=vn("transitionstart"),em=vn("transitioncancel"),Du=vn("transitionend"),Bu=new Map,mo="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");mo.push("scrollEnd");function ta(e,t){Bu.set(e,t),xn(t,[e])}var ml=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Xt=[],ai=0,xo=0;function xl(){for(var e=ai,t=xo=ai=0;t<e;){var a=Xt[t];Xt[t++]=null;var i=Xt[t];Xt[t++]=null;var l=Xt[t];Xt[t++]=null;var o=Xt[t];if(Xt[t++]=null,i!==null&&l!==null){var u=i.pending;u===null?l.next=l:(l.next=u.next,u.next=l),i.pending=l}o!==0&&Ou(a,l,o)}}function yl(e,t,a,i){Xt[ai++]=e,Xt[ai++]=t,Xt[ai++]=a,Xt[ai++]=i,xo|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function yo(e,t,a,i){return yl(e,t,a,i),bl(e)}function jn(e,t){return yl(e,null,null,t),bl(e)}function Ou(e,t,a){e.lanes|=a;var i=e.alternate;i!==null&&(i.lanes|=a);for(var l=!1,o=e.return;o!==null;)o.childLanes|=a,i=o.alternate,i!==null&&(i.childLanes|=a),o.tag===22&&(e=o.stateNode,e===null||e._visibility&1||(l=!0)),e=o,o=o.return;return e.tag===3?(o=e.stateNode,l&&t!==null&&(l=31-He(a),e=o.hiddenUpdates,i=e[l],i===null?e[l]=[t]:i.push(t),t.lane=a|536870912),o):null}function bl(e){if(50<jr)throw jr=0,Nc=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ni={};function tm(e,t,a,i){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Dt(e,t,a,i){return new tm(e,t,a,i)}function bo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function va(e,t){var a=e.alternate;return a===null?(a=Dt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Uu(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function vl(e,t,a,i,l,o){var u=0;if(i=e,typeof e=="function")bo(e)&&(u=1);else if(typeof e=="string")u=lx(e,a,M.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case be:return e=Dt(31,a,t,l),e.elementType=be,e.lanes=o,e;case z:return wn(a.children,l,o,t);case T:u=8,l|=24;break;case D:return e=Dt(12,a,t,l|2),e.elementType=D,e.lanes=o,e;case S:return e=Dt(13,a,t,l),e.elementType=S,e.lanes=o,e;case U:return e=Dt(19,a,t,l),e.elementType=U,e.lanes=o,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case K:u=10;break e;case G:u=9;break e;case q:u=11;break e;case $:u=14;break e;case re:u=16,i=null;break e}u=29,a=Error(c(130,e===null?"null":typeof e,"")),i=null}return t=Dt(u,a,t,l),t.elementType=e,t.type=i,t.lanes=o,t}function wn(e,t,a,i){return e=Dt(7,e,i,t),e.lanes=a,e}function vo(e,t,a){return e=Dt(6,e,null,t),e.lanes=a,e}function Lu(e){var t=Dt(18,null,null,0);return t.stateNode=e,t}function jo(e,t,a){return t=Dt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Hu=new WeakMap;function Qt(e,t){if(typeof e=="object"&&e!==null){var a=Hu.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Yi(t)},Hu.set(e,t),t)}return{value:e,source:t,stack:Yi(t)}}var ii=[],ri=0,jl=null,er=0,Zt=[],Wt=0,qa=null,oa=1,ca="";function ja(e,t){ii[ri++]=er,ii[ri++]=jl,jl=e,er=t}function Yu(e,t,a){Zt[Wt++]=oa,Zt[Wt++]=ca,Zt[Wt++]=qa,qa=e;var i=oa;e=ca;var l=32-He(i)-1;i&=~(1<<l),a+=1;var o=32-He(t)+l;if(30<o){var u=l-l%5;o=(i&(1<<u)-1).toString(32),i>>=u,l-=u,oa=1<<32-He(t)+l|a<<l|i,ca=o+e}else oa=1<<o|a<<l|i,ca=e}function wo(e){e.return!==null&&(ja(e,1),Yu(e,1,0))}function So(e){for(;e===jl;)jl=ii[--ri],ii[ri]=null,er=ii[--ri],ii[ri]=null;for(;e===qa;)qa=Zt[--Wt],Zt[Wt]=null,ca=Zt[--Wt],Zt[Wt]=null,oa=Zt[--Wt],Zt[Wt]=null}function qu(e,t){Zt[Wt++]=oa,Zt[Wt++]=ca,Zt[Wt++]=qa,oa=t.id,ca=t.overflow,qa=e}var gt=null,We=null,Re=!1,$a=null,Kt=!1,ko=Error(c(519));function Ga(e){var t=Error(c(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw tr(Qt(t,e)),ko}function $u(e){var t=e.stateNode,a=e.type,i=e.memoizedProps;switch(t[ht]=e,t[kt]=i,a){case"dialog":Ce("cancel",t),Ce("close",t);break;case"iframe":case"object":case"embed":Ce("load",t);break;case"video":case"audio":for(a=0;a<Sr.length;a++)Ce(Sr[a],t);break;case"source":Ce("error",t);break;case"img":case"image":case"link":Ce("error",t),Ce("load",t);break;case"details":Ce("toggle",t);break;case"input":Ce("invalid",t),tu(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":Ce("invalid",t);break;case"textarea":Ce("invalid",t),nu(t,i.value,i.defaultValue,i.children)}a=i.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||i.suppressHydrationWarning===!0||lh(t.textContent,a)?(i.popover!=null&&(Ce("beforetoggle",t),Ce("toggle",t)),i.onScroll!=null&&Ce("scroll",t),i.onScrollEnd!=null&&Ce("scrollend",t),i.onClick!=null&&(t.onclick=ya),t=!0):t=!1,t||Ga(e,!0)}function Gu(e){for(gt=e.return;gt;)switch(gt.tag){case 5:case 31:case 13:Kt=!1;return;case 27:case 3:Kt=!0;return;default:gt=gt.return}}function li(e){if(e!==gt)return!1;if(!Re)return Gu(e),Re=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||$c(e.type,e.memoizedProps)),a=!a),a&&We&&Ga(e),Gu(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));We=gh(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));We=gh(e)}else t===27?(t=We,nn(e.type)?(e=Zc,Zc=null,We=e):We=t):We=gt?It(e.stateNode.nextSibling):null;return!0}function Sn(){We=gt=null,Re=!1}function zo(){var e=$a;return e!==null&&(Et===null?Et=e:Et.push.apply(Et,e),$a=null),e}function tr(e){$a===null?$a=[e]:$a.push(e)}var Co=C(null),kn=null,wa=null;function Va(e,t,a){ne(Co,t._currentValue),t._currentValue=a}function Sa(e){e._currentValue=Co.current,Q(Co)}function No(e,t,a){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===a)break;e=e.return}}function _o(e,t,a,i){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var o=l.dependencies;if(o!==null){var u=l.child;o=o.firstContext;e:for(;o!==null;){var x=o;o=l;for(var w=0;w<t.length;w++)if(x.context===t[w]){o.lanes|=a,x=o.alternate,x!==null&&(x.lanes|=a),No(o.return,a,e),i||(u=null);break e}o=x.next}}else if(l.tag===18){if(u=l.return,u===null)throw Error(c(341));u.lanes|=a,o=u.alternate,o!==null&&(o.lanes|=a),No(u,a,e),u=null}else u=l.child;if(u!==null)u.return=l;else for(u=l;u!==null;){if(u===e){u=null;break}if(l=u.sibling,l!==null){l.return=u.return,u=l;break}u=u.return}l=u}}function si(e,t,a,i){e=null;for(var l=t,o=!1;l!==null;){if(!o){if((l.flags&524288)!==0)o=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var u=l.alternate;if(u===null)throw Error(c(387));if(u=u.memoizedProps,u!==null){var x=l.type;Mt(l.pendingProps.value,u.value)||(e!==null?e.push(x):e=[x])}}else if(l===fe.current){if(u=l.alternate,u===null)throw Error(c(387));u.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(_r):e=[_r])}l=l.return}e!==null&&_o(t,e,a,i),t.flags|=262144}function wl(e){for(e=e.firstContext;e!==null;){if(!Mt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function zn(e){kn=e,wa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function mt(e){return Vu(kn,e)}function Sl(e,t){return kn===null&&zn(e),Vu(e,t)}function Vu(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},wa===null){if(e===null)throw Error(c(308));wa=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else wa=wa.next=t;return a}var am=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},nm=r.unstable_scheduleCallback,im=r.unstable_NormalPriority,it={$$typeof:K,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Eo(){return{controller:new am,data:new Map,refCount:0}}function ar(e){e.refCount--,e.refCount===0&&nm(im,function(){e.controller.abort()})}var nr=null,Ro=0,oi=0,ci=null;function rm(e,t){if(nr===null){var a=nr=[];Ro=0,oi=Mc(),ci={status:"pending",value:void 0,then:function(i){a.push(i)}}}return Ro++,t.then(Xu,Xu),t}function Xu(){if(--Ro===0&&nr!==null){ci!==null&&(ci.status="fulfilled");var e=nr;nr=null,oi=0,ci=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function lm(e,t){var a=[],i={status:"pending",value:null,reason:null,then:function(l){a.push(l)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var l=0;l<a.length;l++)(0,a[l])(t)},function(l){for(i.status="rejected",i.reason=l,l=0;l<a.length;l++)(0,a[l])(void 0)}),i}var Qu=H.S;H.S=function(e,t){Rf=vt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&rm(e,t),Qu!==null&&Qu(e,t)};var Cn=C(null);function To(){var e=Cn.current;return e!==null?e:Qe.pooledCache}function kl(e,t){t===null?ne(Cn,Cn.current):ne(Cn,t.pool)}function Zu(){var e=To();return e===null?null:{parent:it._currentValue,pool:e}}var di=Error(c(460)),Ao=Error(c(474)),zl=Error(c(542)),Cl={then:function(){}};function Wu(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ku(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(ya,ya),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Iu(e),e;default:if(typeof t.status=="string")t.then(ya,ya);else{if(e=Qe,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=i}},function(i){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Iu(e),e}throw _n=t,di}}function Nn(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(_n=a,di):a}}var _n=null;function Ju(){if(_n===null)throw Error(c(459));var e=_n;return _n=null,e}function Iu(e){if(e===di||e===zl)throw Error(c(483))}var ui=null,ir=0;function Nl(e){var t=ir;return ir+=1,ui===null&&(ui=[]),Ku(ui,e,t)}function rr(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function _l(e,t){throw t.$$typeof===k?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Fu(e){function t(R,N){if(e){var B=R.deletions;B===null?(R.deletions=[N],R.flags|=16):B.push(N)}}function a(R,N){if(!e)return null;for(;N!==null;)t(R,N),N=N.sibling;return null}function i(R){for(var N=new Map;R!==null;)R.key!==null?N.set(R.key,R):N.set(R.index,R),R=R.sibling;return N}function l(R,N){return R=va(R,N),R.index=0,R.sibling=null,R}function o(R,N,B){return R.index=B,e?(B=R.alternate,B!==null?(B=B.index,B<N?(R.flags|=67108866,N):B):(R.flags|=67108866,N)):(R.flags|=1048576,N)}function u(R){return e&&R.alternate===null&&(R.flags|=67108866),R}function x(R,N,B,X){return N===null||N.tag!==6?(N=vo(B,R.mode,X),N.return=R,N):(N=l(N,B),N.return=R,N)}function w(R,N,B,X){var ge=B.type;return ge===z?V(R,N,B.props.children,X,B.key):N!==null&&(N.elementType===ge||typeof ge=="object"&&ge!==null&&ge.$$typeof===re&&Nn(ge)===N.type)?(N=l(N,B.props),rr(N,B),N.return=R,N):(N=vl(B.type,B.key,B.props,null,R.mode,X),rr(N,B),N.return=R,N)}function O(R,N,B,X){return N===null||N.tag!==4||N.stateNode.containerInfo!==B.containerInfo||N.stateNode.implementation!==B.implementation?(N=jo(B,R.mode,X),N.return=R,N):(N=l(N,B.children||[]),N.return=R,N)}function V(R,N,B,X,ge){return N===null||N.tag!==7?(N=wn(B,R.mode,X,ge),N.return=R,N):(N=l(N,B),N.return=R,N)}function Z(R,N,B){if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return N=vo(""+N,R.mode,B),N.return=R,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case _:return B=vl(N.type,N.key,N.props,null,R.mode,B),rr(B,N),B.return=R,B;case A:return N=jo(N,R.mode,B),N.return=R,N;case re:return N=Nn(N),Z(R,N,B)}if(ye(N)||we(N))return N=wn(N,R.mode,B,null),N.return=R,N;if(typeof N.then=="function")return Z(R,Nl(N),B);if(N.$$typeof===K)return Z(R,Sl(R,N),B);_l(R,N)}return null}function L(R,N,B,X){var ge=N!==null?N.key:null;if(typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint")return ge!==null?null:x(R,N,""+B,X);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case _:return B.key===ge?w(R,N,B,X):null;case A:return B.key===ge?O(R,N,B,X):null;case re:return B=Nn(B),L(R,N,B,X)}if(ye(B)||we(B))return ge!==null?null:V(R,N,B,X,null);if(typeof B.then=="function")return L(R,N,Nl(B),X);if(B.$$typeof===K)return L(R,N,Sl(R,B),X);_l(R,B)}return null}function Y(R,N,B,X,ge){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return R=R.get(B)||null,x(N,R,""+X,ge);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case _:return R=R.get(X.key===null?B:X.key)||null,w(N,R,X,ge);case A:return R=R.get(X.key===null?B:X.key)||null,O(N,R,X,ge);case re:return X=Nn(X),Y(R,N,B,X,ge)}if(ye(X)||we(X))return R=R.get(B)||null,V(N,R,X,ge,null);if(typeof X.then=="function")return Y(R,N,B,Nl(X),ge);if(X.$$typeof===K)return Y(R,N,B,Sl(N,X),ge);_l(N,X)}return null}function se(R,N,B,X){for(var ge=null,Me=null,ce=N,ke=N=0,_e=null;ce!==null&&ke<B.length;ke++){ce.index>ke?(_e=ce,ce=null):_e=ce.sibling;var De=L(R,ce,B[ke],X);if(De===null){ce===null&&(ce=_e);break}e&&ce&&De.alternate===null&&t(R,ce),N=o(De,N,ke),Me===null?ge=De:Me.sibling=De,Me=De,ce=_e}if(ke===B.length)return a(R,ce),Re&&ja(R,ke),ge;if(ce===null){for(;ke<B.length;ke++)ce=Z(R,B[ke],X),ce!==null&&(N=o(ce,N,ke),Me===null?ge=ce:Me.sibling=ce,Me=ce);return Re&&ja(R,ke),ge}for(ce=i(ce);ke<B.length;ke++)_e=Y(ce,R,ke,B[ke],X),_e!==null&&(e&&_e.alternate!==null&&ce.delete(_e.key===null?ke:_e.key),N=o(_e,N,ke),Me===null?ge=_e:Me.sibling=_e,Me=_e);return e&&ce.forEach(function(cn){return t(R,cn)}),Re&&ja(R,ke),ge}function me(R,N,B,X){if(B==null)throw Error(c(151));for(var ge=null,Me=null,ce=N,ke=N=0,_e=null,De=B.next();ce!==null&&!De.done;ke++,De=B.next()){ce.index>ke?(_e=ce,ce=null):_e=ce.sibling;var cn=L(R,ce,De.value,X);if(cn===null){ce===null&&(ce=_e);break}e&&ce&&cn.alternate===null&&t(R,ce),N=o(cn,N,ke),Me===null?ge=cn:Me.sibling=cn,Me=cn,ce=_e}if(De.done)return a(R,ce),Re&&ja(R,ke),ge;if(ce===null){for(;!De.done;ke++,De=B.next())De=Z(R,De.value,X),De!==null&&(N=o(De,N,ke),Me===null?ge=De:Me.sibling=De,Me=De);return Re&&ja(R,ke),ge}for(ce=i(ce);!De.done;ke++,De=B.next())De=Y(ce,R,ke,De.value,X),De!==null&&(e&&De.alternate!==null&&ce.delete(De.key===null?ke:De.key),N=o(De,N,ke),Me===null?ge=De:Me.sibling=De,Me=De);return e&&ce.forEach(function(xx){return t(R,xx)}),Re&&ja(R,ke),ge}function Ve(R,N,B,X){if(typeof B=="object"&&B!==null&&B.type===z&&B.key===null&&(B=B.props.children),typeof B=="object"&&B!==null){switch(B.$$typeof){case _:e:{for(var ge=B.key;N!==null;){if(N.key===ge){if(ge=B.type,ge===z){if(N.tag===7){a(R,N.sibling),X=l(N,B.props.children),X.return=R,R=X;break e}}else if(N.elementType===ge||typeof ge=="object"&&ge!==null&&ge.$$typeof===re&&Nn(ge)===N.type){a(R,N.sibling),X=l(N,B.props),rr(X,B),X.return=R,R=X;break e}a(R,N);break}else t(R,N);N=N.sibling}B.type===z?(X=wn(B.props.children,R.mode,X,B.key),X.return=R,R=X):(X=vl(B.type,B.key,B.props,null,R.mode,X),rr(X,B),X.return=R,R=X)}return u(R);case A:e:{for(ge=B.key;N!==null;){if(N.key===ge)if(N.tag===4&&N.stateNode.containerInfo===B.containerInfo&&N.stateNode.implementation===B.implementation){a(R,N.sibling),X=l(N,B.children||[]),X.return=R,R=X;break e}else{a(R,N);break}else t(R,N);N=N.sibling}X=jo(B,R.mode,X),X.return=R,R=X}return u(R);case re:return B=Nn(B),Ve(R,N,B,X)}if(ye(B))return se(R,N,B,X);if(we(B)){if(ge=we(B),typeof ge!="function")throw Error(c(150));return B=ge.call(B),me(R,N,B,X)}if(typeof B.then=="function")return Ve(R,N,Nl(B),X);if(B.$$typeof===K)return Ve(R,N,Sl(R,B),X);_l(R,B)}return typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint"?(B=""+B,N!==null&&N.tag===6?(a(R,N.sibling),X=l(N,B),X.return=R,R=X):(a(R,N),X=vo(B,R.mode,X),X.return=R,R=X),u(R)):a(R,N)}return function(R,N,B,X){try{ir=0;var ge=Ve(R,N,B,X);return ui=null,ge}catch(ce){if(ce===di||ce===zl)throw ce;var Me=Dt(29,ce,null,R.mode);return Me.lanes=X,Me.return=R,Me}}}var En=Fu(!0),Pu=Fu(!1),Xa=!1;function Mo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Do(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Qa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Za(e,t,a){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(Be&2)!==0){var l=i.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),i.pending=t,t=bl(e),Ou(e,null,a),t}return yl(e,i,t,a),bl(e)}function lr(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,a|=i,t.lanes=a,Vd(e,a)}}function Bo(e,t){var a=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,a===i)){var l=null,o=null;if(a=a.firstBaseUpdate,a!==null){do{var u={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};o===null?l=o=u:o=o.next=u,a=a.next}while(a!==null);o===null?l=o=t:o=o.next=t}else l=o=t;a={baseState:i.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:i.shared,callbacks:i.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Oo=!1;function sr(){if(Oo){var e=ci;if(e!==null)throw e}}function or(e,t,a,i){Oo=!1;var l=e.updateQueue;Xa=!1;var o=l.firstBaseUpdate,u=l.lastBaseUpdate,x=l.shared.pending;if(x!==null){l.shared.pending=null;var w=x,O=w.next;w.next=null,u===null?o=O:u.next=O,u=w;var V=e.alternate;V!==null&&(V=V.updateQueue,x=V.lastBaseUpdate,x!==u&&(x===null?V.firstBaseUpdate=O:x.next=O,V.lastBaseUpdate=w))}if(o!==null){var Z=l.baseState;u=0,V=O=w=null,x=o;do{var L=x.lane&-536870913,Y=L!==x.lane;if(Y?(Ne&L)===L:(i&L)===L){L!==0&&L===oi&&(Oo=!0),V!==null&&(V=V.next={lane:0,tag:x.tag,payload:x.payload,callback:null,next:null});e:{var se=e,me=x;L=t;var Ve=a;switch(me.tag){case 1:if(se=me.payload,typeof se=="function"){Z=se.call(Ve,Z,L);break e}Z=se;break e;case 3:se.flags=se.flags&-65537|128;case 0:if(se=me.payload,L=typeof se=="function"?se.call(Ve,Z,L):se,L==null)break e;Z=v({},Z,L);break e;case 2:Xa=!0}}L=x.callback,L!==null&&(e.flags|=64,Y&&(e.flags|=8192),Y=l.callbacks,Y===null?l.callbacks=[L]:Y.push(L))}else Y={lane:L,tag:x.tag,payload:x.payload,callback:x.callback,next:null},V===null?(O=V=Y,w=Z):V=V.next=Y,u|=L;if(x=x.next,x===null){if(x=l.shared.pending,x===null)break;Y=x,x=Y.next,Y.next=null,l.lastBaseUpdate=Y,l.shared.pending=null}}while(!0);V===null&&(w=Z),l.baseState=w,l.firstBaseUpdate=O,l.lastBaseUpdate=V,o===null&&(l.shared.lanes=0),Fa|=u,e.lanes=u,e.memoizedState=Z}}function ep(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function tp(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)ep(a[e],t)}var pi=C(null),El=C(0);function ap(e,t){e=Aa,ne(El,e),ne(pi,t),Aa=e|t.baseLanes}function Uo(){ne(El,Aa),ne(pi,pi.current)}function Lo(){Aa=El.current,Q(pi),Q(El)}var Bt=C(null),Jt=null;function Wa(e){var t=e.alternate;ne(tt,tt.current&1),ne(Bt,e),Jt===null&&(t===null||pi.current!==null||t.memoizedState!==null)&&(Jt=e)}function Ho(e){ne(tt,tt.current),ne(Bt,e),Jt===null&&(Jt=e)}function np(e){e.tag===22?(ne(tt,tt.current),ne(Bt,e),Jt===null&&(Jt=e)):Ka()}function Ka(){ne(tt,tt.current),ne(Bt,Bt.current)}function Ot(e){Q(Bt),Jt===e&&(Jt=null),Q(tt)}var tt=C(0);function Rl(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Xc(a)||Qc(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ka=0,Se=null,$e=null,rt=null,Tl=!1,fi=!1,Rn=!1,Al=0,cr=0,hi=null,sm=0;function Pe(){throw Error(c(321))}function Yo(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!Mt(e[a],t[a]))return!1;return!0}function qo(e,t,a,i,l,o){return ka=o,Se=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,H.H=e===null||e.memoizedState===null?Yp:ac,Rn=!1,o=a(i,l),Rn=!1,fi&&(o=rp(t,a,i,l)),ip(e),o}function ip(e){H.H=pr;var t=$e!==null&&$e.next!==null;if(ka=0,rt=$e=Se=null,Tl=!1,cr=0,hi=null,t)throw Error(c(300));e===null||lt||(e=e.dependencies,e!==null&&wl(e)&&(lt=!0))}function rp(e,t,a,i){Se=e;var l=0;do{if(fi&&(hi=null),cr=0,fi=!1,25<=l)throw Error(c(301));if(l+=1,rt=$e=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}H.H=qp,o=t(a,i)}while(fi);return o}function om(){var e=H.H,t=e.useState()[0];return t=typeof t.then=="function"?dr(t):t,e=e.useState()[0],($e!==null?$e.memoizedState:null)!==e&&(Se.flags|=1024),t}function $o(){var e=Al!==0;return Al=0,e}function Go(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Vo(e){if(Tl){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Tl=!1}ka=0,rt=$e=Se=null,fi=!1,cr=Al=0,hi=null}function St(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rt===null?Se.memoizedState=rt=e:rt=rt.next=e,rt}function at(){if($e===null){var e=Se.alternate;e=e!==null?e.memoizedState:null}else e=$e.next;var t=rt===null?Se.memoizedState:rt.next;if(t!==null)rt=t,$e=e;else{if(e===null)throw Se.alternate===null?Error(c(467)):Error(c(310));$e=e,e={memoizedState:$e.memoizedState,baseState:$e.baseState,baseQueue:$e.baseQueue,queue:$e.queue,next:null},rt===null?Se.memoizedState=rt=e:rt=rt.next=e}return rt}function Ml(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function dr(e){var t=cr;return cr+=1,hi===null&&(hi=[]),e=Ku(hi,e,t),t=Se,(rt===null?t.memoizedState:rt.next)===null&&(t=t.alternate,H.H=t===null||t.memoizedState===null?Yp:ac),e}function Dl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return dr(e);if(e.$$typeof===K)return mt(e)}throw Error(c(438,String(e)))}function Xo(e){var t=null,a=Se.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var i=Se.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Ml(),Se.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),i=0;i<e;i++)a[i]=ie;return t.index++,a}function za(e,t){return typeof t=="function"?t(e):t}function Bl(e){var t=at();return Qo(t,$e,e)}function Qo(e,t,a){var i=e.queue;if(i===null)throw Error(c(311));i.lastRenderedReducer=a;var l=e.baseQueue,o=i.pending;if(o!==null){if(l!==null){var u=l.next;l.next=o.next,o.next=u}t.baseQueue=l=o,i.pending=null}if(o=e.baseState,l===null)e.memoizedState=o;else{t=l.next;var x=u=null,w=null,O=t,V=!1;do{var Z=O.lane&-536870913;if(Z!==O.lane?(Ne&Z)===Z:(ka&Z)===Z){var L=O.revertLane;if(L===0)w!==null&&(w=w.next={lane:0,revertLane:0,gesture:null,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null}),Z===oi&&(V=!0);else if((ka&L)===L){O=O.next,L===oi&&(V=!0);continue}else Z={lane:0,revertLane:O.revertLane,gesture:null,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null},w===null?(x=w=Z,u=o):w=w.next=Z,Se.lanes|=L,Fa|=L;Z=O.action,Rn&&a(o,Z),o=O.hasEagerState?O.eagerState:a(o,Z)}else L={lane:Z,revertLane:O.revertLane,gesture:O.gesture,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null},w===null?(x=w=L,u=o):w=w.next=L,Se.lanes|=Z,Fa|=Z;O=O.next}while(O!==null&&O!==t);if(w===null?u=o:w.next=x,!Mt(o,e.memoizedState)&&(lt=!0,V&&(a=ci,a!==null)))throw a;e.memoizedState=o,e.baseState=u,e.baseQueue=w,i.lastRenderedState=o}return l===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Zo(e){var t=at(),a=t.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=e;var i=a.dispatch,l=a.pending,o=t.memoizedState;if(l!==null){a.pending=null;var u=l=l.next;do o=e(o,u.action),u=u.next;while(u!==l);Mt(o,t.memoizedState)||(lt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),a.lastRenderedState=o}return[o,i]}function lp(e,t,a){var i=Se,l=at(),o=Re;if(o){if(a===void 0)throw Error(c(407));a=a()}else a=t();var u=!Mt(($e||l).memoizedState,a);if(u&&(l.memoizedState=a,lt=!0),l=l.queue,Jo(cp.bind(null,i,l,e),[e]),l.getSnapshot!==t||u||rt!==null&&rt.memoizedState.tag&1){if(i.flags|=2048,gi(9,{destroy:void 0},op.bind(null,i,l,a,t),null),Qe===null)throw Error(c(349));o||(ka&127)!==0||sp(i,t,a)}return a}function sp(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=Se.updateQueue,t===null?(t=Ml(),Se.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function op(e,t,a,i){t.value=a,t.getSnapshot=i,dp(t)&&up(e)}function cp(e,t,a){return a(function(){dp(t)&&up(e)})}function dp(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!Mt(e,a)}catch{return!0}}function up(e){var t=jn(e,2);t!==null&&Rt(t,e,2)}function Wo(e){var t=St();if(typeof e=="function"){var a=e;if(e=a(),Rn){Xe(!0);try{a()}finally{Xe(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:za,lastRenderedState:e},t}function pp(e,t,a,i){return e.baseState=a,Qo(e,$e,typeof i=="function"?i:za)}function cm(e,t,a,i,l){if(Ll(e))throw Error(c(485));if(e=t.action,e!==null){var o={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){o.listeners.push(u)}};H.T!==null?a(!0):o.isTransition=!1,i(o),a=t.pending,a===null?(o.next=t.pending=o,fp(t,o)):(o.next=a.next,t.pending=a.next=o)}}function fp(e,t){var a=t.action,i=t.payload,l=e.state;if(t.isTransition){var o=H.T,u={};H.T=u;try{var x=a(l,i),w=H.S;w!==null&&w(u,x),hp(e,t,x)}catch(O){Ko(e,t,O)}finally{o!==null&&u.types!==null&&(o.types=u.types),H.T=o}}else try{o=a(l,i),hp(e,t,o)}catch(O){Ko(e,t,O)}}function hp(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(i){gp(e,t,i)},function(i){return Ko(e,t,i)}):gp(e,t,a)}function gp(e,t,a){t.status="fulfilled",t.value=a,mp(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,fp(e,a)))}function Ko(e,t,a){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=a,mp(t),t=t.next;while(t!==i)}e.action=null}function mp(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function xp(e,t){return t}function yp(e,t){if(Re){var a=Qe.formState;if(a!==null){e:{var i=Se;if(Re){if(We){t:{for(var l=We,o=Kt;l.nodeType!==8;){if(!o){l=null;break t}if(l=It(l.nextSibling),l===null){l=null;break t}}o=l.data,l=o==="F!"||o==="F"?l:null}if(l){We=It(l.nextSibling),i=l.data==="F!";break e}}Ga(i)}i=!1}i&&(t=a[0])}}return a=St(),a.memoizedState=a.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xp,lastRenderedState:t},a.queue=i,a=Up.bind(null,Se,i),i.dispatch=a,i=Wo(!1),o=tc.bind(null,Se,!1,i.queue),i=St(),l={state:t,dispatch:null,action:e,pending:null},i.queue=l,a=cm.bind(null,Se,l,o,a),l.dispatch=a,i.memoizedState=e,[t,a,!1]}function bp(e){var t=at();return vp(t,$e,e)}function vp(e,t,a){if(t=Qo(e,t,xp)[0],e=Bl(za)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=dr(t)}catch(u){throw u===di?zl:u}else i=t;t=at();var l=t.queue,o=l.dispatch;return a!==t.memoizedState&&(Se.flags|=2048,gi(9,{destroy:void 0},dm.bind(null,l,a),null)),[i,o,e]}function dm(e,t){e.action=t}function jp(e){var t=at(),a=$e;if(a!==null)return vp(t,a,e);at(),t=t.memoizedState,a=at();var i=a.queue.dispatch;return a.memoizedState=e,[t,i,!1]}function gi(e,t,a,i){return e={tag:e,create:a,deps:i,inst:t,next:null},t=Se.updateQueue,t===null&&(t=Ml(),Se.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(i=a.next,a.next=e,e.next=i,t.lastEffect=e),e}function wp(){return at().memoizedState}function Ol(e,t,a,i){var l=St();Se.flags|=e,l.memoizedState=gi(1|t,{destroy:void 0},a,i===void 0?null:i)}function Ul(e,t,a,i){var l=at();i=i===void 0?null:i;var o=l.memoizedState.inst;$e!==null&&i!==null&&Yo(i,$e.memoizedState.deps)?l.memoizedState=gi(t,o,a,i):(Se.flags|=e,l.memoizedState=gi(1|t,o,a,i))}function Sp(e,t){Ol(8390656,8,e,t)}function Jo(e,t){Ul(2048,8,e,t)}function um(e){Se.flags|=4;var t=Se.updateQueue;if(t===null)t=Ml(),Se.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function kp(e){var t=at().memoizedState;return um({ref:t,nextImpl:e}),function(){if((Be&2)!==0)throw Error(c(440));return t.impl.apply(void 0,arguments)}}function zp(e,t){return Ul(4,2,e,t)}function Cp(e,t){return Ul(4,4,e,t)}function Np(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function _p(e,t,a){a=a!=null?a.concat([e]):null,Ul(4,4,Np.bind(null,t,e),a)}function Io(){}function Ep(e,t){var a=at();t=t===void 0?null:t;var i=a.memoizedState;return t!==null&&Yo(t,i[1])?i[0]:(a.memoizedState=[e,t],e)}function Rp(e,t){var a=at();t=t===void 0?null:t;var i=a.memoizedState;if(t!==null&&Yo(t,i[1]))return i[0];if(i=e(),Rn){Xe(!0);try{e()}finally{Xe(!1)}}return a.memoizedState=[i,t],i}function Fo(e,t,a){return a===void 0||(ka&1073741824)!==0&&(Ne&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=Af(),Se.lanes|=e,Fa|=e,a)}function Tp(e,t,a,i){return Mt(a,t)?a:pi.current!==null?(e=Fo(e,a,i),Mt(e,t)||(lt=!0),e):(ka&42)===0||(ka&1073741824)!==0&&(Ne&261930)===0?(lt=!0,e.memoizedState=a):(e=Af(),Se.lanes|=e,Fa|=e,t)}function Ap(e,t,a,i,l){var o=I.p;I.p=o!==0&&8>o?o:8;var u=H.T,x={};H.T=x,tc(e,!1,t,a);try{var w=l(),O=H.S;if(O!==null&&O(x,w),w!==null&&typeof w=="object"&&typeof w.then=="function"){var V=lm(w,i);ur(e,t,V,Ht(e))}else ur(e,t,i,Ht(e))}catch(Z){ur(e,t,{then:function(){},status:"rejected",reason:Z},Ht())}finally{I.p=o,u!==null&&x.types!==null&&(u.types=x.types),H.T=u}}function pm(){}function Po(e,t,a,i){if(e.tag!==5)throw Error(c(476));var l=Mp(e).queue;Ap(e,l,t,ue,a===null?pm:function(){return Dp(e),a(i)})}function Mp(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ue,baseState:ue,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:za,lastRenderedState:ue},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:za,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Dp(e){var t=Mp(e);t.next===null&&(t=e.alternate.memoizedState),ur(e,t.next.queue,{},Ht())}function ec(){return mt(_r)}function Bp(){return at().memoizedState}function Op(){return at().memoizedState}function fm(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=Ht();e=Qa(a);var i=Za(t,e,a);i!==null&&(Rt(i,t,a),lr(i,t,a)),t={cache:Eo()},e.payload=t;return}t=t.return}}function hm(e,t,a){var i=Ht();a={lane:i,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ll(e)?Lp(t,a):(a=yo(e,t,a,i),a!==null&&(Rt(a,e,i),Hp(a,t,i)))}function Up(e,t,a){var i=Ht();ur(e,t,a,i)}function ur(e,t,a,i){var l={lane:i,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ll(e))Lp(t,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var u=t.lastRenderedState,x=o(u,a);if(l.hasEagerState=!0,l.eagerState=x,Mt(x,u))return yl(e,t,l,0),Qe===null&&xl(),!1}catch{}if(a=yo(e,t,l,i),a!==null)return Rt(a,e,i),Hp(a,t,i),!0}return!1}function tc(e,t,a,i){if(i={lane:2,revertLane:Mc(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Ll(e)){if(t)throw Error(c(479))}else t=yo(e,a,i,2),t!==null&&Rt(t,e,2)}function Ll(e){var t=e.alternate;return e===Se||t!==null&&t===Se}function Lp(e,t){fi=Tl=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Hp(e,t,a){if((a&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,a|=i,t.lanes=a,Vd(e,a)}}var pr={readContext:mt,use:Dl,useCallback:Pe,useContext:Pe,useEffect:Pe,useImperativeHandle:Pe,useLayoutEffect:Pe,useInsertionEffect:Pe,useMemo:Pe,useReducer:Pe,useRef:Pe,useState:Pe,useDebugValue:Pe,useDeferredValue:Pe,useTransition:Pe,useSyncExternalStore:Pe,useId:Pe,useHostTransitionStatus:Pe,useFormState:Pe,useActionState:Pe,useOptimistic:Pe,useMemoCache:Pe,useCacheRefresh:Pe};pr.useEffectEvent=Pe;var Yp={readContext:mt,use:Dl,useCallback:function(e,t){return St().memoizedState=[e,t===void 0?null:t],e},useContext:mt,useEffect:Sp,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Ol(4194308,4,Np.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Ol(4194308,4,e,t)},useInsertionEffect:function(e,t){Ol(4,2,e,t)},useMemo:function(e,t){var a=St();t=t===void 0?null:t;var i=e();if(Rn){Xe(!0);try{e()}finally{Xe(!1)}}return a.memoizedState=[i,t],i},useReducer:function(e,t,a){var i=St();if(a!==void 0){var l=a(t);if(Rn){Xe(!0);try{a(t)}finally{Xe(!1)}}}else l=t;return i.memoizedState=i.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},i.queue=e,e=e.dispatch=hm.bind(null,Se,e),[i.memoizedState,e]},useRef:function(e){var t=St();return e={current:e},t.memoizedState=e},useState:function(e){e=Wo(e);var t=e.queue,a=Up.bind(null,Se,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Io,useDeferredValue:function(e,t){var a=St();return Fo(a,e,t)},useTransition:function(){var e=Wo(!1);return e=Ap.bind(null,Se,e.queue,!0,!1),St().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var i=Se,l=St();if(Re){if(a===void 0)throw Error(c(407));a=a()}else{if(a=t(),Qe===null)throw Error(c(349));(Ne&127)!==0||sp(i,t,a)}l.memoizedState=a;var o={value:a,getSnapshot:t};return l.queue=o,Sp(cp.bind(null,i,o,e),[e]),i.flags|=2048,gi(9,{destroy:void 0},op.bind(null,i,o,a,t),null),a},useId:function(){var e=St(),t=Qe.identifierPrefix;if(Re){var a=ca,i=oa;a=(i&~(1<<32-He(i)-1)).toString(32)+a,t="_"+t+"R_"+a,a=Al++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=sm++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:ec,useFormState:yp,useActionState:yp,useOptimistic:function(e){var t=St();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=tc.bind(null,Se,!0,a),a.dispatch=t,[e,t]},useMemoCache:Xo,useCacheRefresh:function(){return St().memoizedState=fm.bind(null,Se)},useEffectEvent:function(e){var t=St(),a={impl:e};return t.memoizedState=a,function(){if((Be&2)!==0)throw Error(c(440));return a.impl.apply(void 0,arguments)}}},ac={readContext:mt,use:Dl,useCallback:Ep,useContext:mt,useEffect:Jo,useImperativeHandle:_p,useInsertionEffect:zp,useLayoutEffect:Cp,useMemo:Rp,useReducer:Bl,useRef:wp,useState:function(){return Bl(za)},useDebugValue:Io,useDeferredValue:function(e,t){var a=at();return Tp(a,$e.memoizedState,e,t)},useTransition:function(){var e=Bl(za)[0],t=at().memoizedState;return[typeof e=="boolean"?e:dr(e),t]},useSyncExternalStore:lp,useId:Bp,useHostTransitionStatus:ec,useFormState:bp,useActionState:bp,useOptimistic:function(e,t){var a=at();return pp(a,$e,e,t)},useMemoCache:Xo,useCacheRefresh:Op};ac.useEffectEvent=kp;var qp={readContext:mt,use:Dl,useCallback:Ep,useContext:mt,useEffect:Jo,useImperativeHandle:_p,useInsertionEffect:zp,useLayoutEffect:Cp,useMemo:Rp,useReducer:Zo,useRef:wp,useState:function(){return Zo(za)},useDebugValue:Io,useDeferredValue:function(e,t){var a=at();return $e===null?Fo(a,e,t):Tp(a,$e.memoizedState,e,t)},useTransition:function(){var e=Zo(za)[0],t=at().memoizedState;return[typeof e=="boolean"?e:dr(e),t]},useSyncExternalStore:lp,useId:Bp,useHostTransitionStatus:ec,useFormState:jp,useActionState:jp,useOptimistic:function(e,t){var a=at();return $e!==null?pp(a,$e,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Xo,useCacheRefresh:Op};qp.useEffectEvent=kp;function nc(e,t,a,i){t=e.memoizedState,a=a(i,t),a=a==null?t:v({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var ic={enqueueSetState:function(e,t,a){e=e._reactInternals;var i=Ht(),l=Qa(i);l.payload=t,a!=null&&(l.callback=a),t=Za(e,l,i),t!==null&&(Rt(t,e,i),lr(t,e,i))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var i=Ht(),l=Qa(i);l.tag=1,l.payload=t,a!=null&&(l.callback=a),t=Za(e,l,i),t!==null&&(Rt(t,e,i),lr(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=Ht(),i=Qa(a);i.tag=2,t!=null&&(i.callback=t),t=Za(e,i,a),t!==null&&(Rt(t,e,a),lr(t,e,a))}};function $p(e,t,a,i,l,o,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,o,u):t.prototype&&t.prototype.isPureReactComponent?!Fi(a,i)||!Fi(l,o):!0}function Gp(e,t,a,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,i),t.state!==e&&ic.enqueueReplaceState(t,t.state,null)}function Tn(e,t){var a=t;if("ref"in t){a={};for(var i in t)i!=="ref"&&(a[i]=t[i])}if(e=e.defaultProps){a===t&&(a=v({},a));for(var l in e)a[l]===void 0&&(a[l]=e[l])}return a}function Vp(e){ml(e)}function Xp(e){console.error(e)}function Qp(e){ml(e)}function Hl(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function Zp(e,t,a){try{var i=e.onCaughtError;i(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function rc(e,t,a){return a=Qa(a),a.tag=3,a.payload={element:null},a.callback=function(){Hl(e,t)},a}function Wp(e){return e=Qa(e),e.tag=3,e}function Kp(e,t,a,i){var l=a.type.getDerivedStateFromError;if(typeof l=="function"){var o=i.value;e.payload=function(){return l(o)},e.callback=function(){Zp(t,a,i)}}var u=a.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(e.callback=function(){Zp(t,a,i),typeof l!="function"&&(Pa===null?Pa=new Set([this]):Pa.add(this));var x=i.stack;this.componentDidCatch(i.value,{componentStack:x!==null?x:""})})}function gm(e,t,a,i,l){if(a.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=a.alternate,t!==null&&si(t,a,l,!0),a=Bt.current,a!==null){switch(a.tag){case 31:case 13:return Jt===null?Il():a.alternate===null&&et===0&&(et=3),a.flags&=-257,a.flags|=65536,a.lanes=l,i===Cl?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([i]):t.add(i),Rc(e,i,l)),!1;case 22:return a.flags|=65536,i===Cl?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([i]):a.add(i)),Rc(e,i,l)),!1}throw Error(c(435,a.tag))}return Rc(e,i,l),Il(),!1}if(Re)return t=Bt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,i!==ko&&(e=Error(c(422),{cause:i}),tr(Qt(e,a)))):(i!==ko&&(t=Error(c(423),{cause:i}),tr(Qt(t,a))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,i=Qt(i,a),l=rc(e.stateNode,i,l),Bo(e,l),et!==4&&(et=2)),!1;var o=Error(c(520),{cause:i});if(o=Qt(o,a),vr===null?vr=[o]:vr.push(o),et!==4&&(et=2),t===null)return!0;i=Qt(i,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=l&-l,a.lanes|=e,e=rc(a.stateNode,i,e),Bo(a,e),!1;case 1:if(t=a.type,o=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||o!==null&&typeof o.componentDidCatch=="function"&&(Pa===null||!Pa.has(o))))return a.flags|=65536,l&=-l,a.lanes|=l,l=Wp(l),Kp(l,e,a,i),Bo(a,l),!1}a=a.return}while(a!==null);return!1}var lc=Error(c(461)),lt=!1;function xt(e,t,a,i){t.child=e===null?Pu(t,null,a,i):En(t,e.child,a,i)}function Jp(e,t,a,i,l){a=a.render;var o=t.ref;if("ref"in i){var u={};for(var x in i)x!=="ref"&&(u[x]=i[x])}else u=i;return zn(t),i=qo(e,t,a,u,o,l),x=$o(),e!==null&&!lt?(Go(e,t,l),Ca(e,t,l)):(Re&&x&&wo(t),t.flags|=1,xt(e,t,i,l),t.child)}function Ip(e,t,a,i,l){if(e===null){var o=a.type;return typeof o=="function"&&!bo(o)&&o.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=o,Fp(e,t,o,i,l)):(e=vl(a.type,null,i,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!hc(e,l)){var u=o.memoizedProps;if(a=a.compare,a=a!==null?a:Fi,a(u,i)&&e.ref===t.ref)return Ca(e,t,l)}return t.flags|=1,e=va(o,i),e.ref=t.ref,e.return=t,t.child=e}function Fp(e,t,a,i,l){if(e!==null){var o=e.memoizedProps;if(Fi(o,i)&&e.ref===t.ref)if(lt=!1,t.pendingProps=i=o,hc(e,l))(e.flags&131072)!==0&&(lt=!0);else return t.lanes=e.lanes,Ca(e,t,l)}return sc(e,t,a,i,l)}function Pp(e,t,a,i){var l=i.children,o=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(o=o!==null?o.baseLanes|a:a,e!==null){for(i=t.child=e.child,l=0;i!==null;)l=l|i.lanes|i.childLanes,i=i.sibling;i=l&~o}else i=0,t.child=null;return ef(e,t,o,a,i)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&kl(t,o!==null?o.cachePool:null),o!==null?ap(t,o):Uo(),np(t);else return i=t.lanes=536870912,ef(e,t,o!==null?o.baseLanes|a:a,a,i)}else o!==null?(kl(t,o.cachePool),ap(t,o),Ka(),t.memoizedState=null):(e!==null&&kl(t,null),Uo(),Ka());return xt(e,t,l,a),t.child}function fr(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function ef(e,t,a,i,l){var o=To();return o=o===null?null:{parent:it._currentValue,pool:o},t.memoizedState={baseLanes:a,cachePool:o},e!==null&&kl(t,null),Uo(),np(t),e!==null&&si(e,t,i,!0),t.childLanes=l,null}function Yl(e,t){return t=$l({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function tf(e,t,a){return En(t,e.child,null,a),e=Yl(t,t.pendingProps),e.flags|=2,Ot(t),t.memoizedState=null,e}function mm(e,t,a){var i=t.pendingProps,l=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Re){if(i.mode==="hidden")return e=Yl(t,i),t.lanes=536870912,fr(null,e);if(Ho(t),(e=We)?(e=hh(e,Kt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:qa!==null?{id:oa,overflow:ca}:null,retryLane:536870912,hydrationErrors:null},a=Lu(e),a.return=t,t.child=a,gt=t,We=null)):e=null,e===null)throw Ga(t);return t.lanes=536870912,null}return Yl(t,i)}var o=e.memoizedState;if(o!==null){var u=o.dehydrated;if(Ho(t),l)if(t.flags&256)t.flags&=-257,t=tf(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(c(558));else if(lt||si(e,t,a,!1),l=(a&e.childLanes)!==0,lt||l){if(i=Qe,i!==null&&(u=Xd(i,a),u!==0&&u!==o.retryLane))throw o.retryLane=u,jn(e,u),Rt(i,e,u),lc;Il(),t=tf(e,t,a)}else e=o.treeContext,We=It(u.nextSibling),gt=t,Re=!0,$a=null,Kt=!1,e!==null&&qu(t,e),t=Yl(t,i),t.flags|=4096;return t}return e=va(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function ql(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(c(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function sc(e,t,a,i,l){return zn(t),a=qo(e,t,a,i,void 0,l),i=$o(),e!==null&&!lt?(Go(e,t,l),Ca(e,t,l)):(Re&&i&&wo(t),t.flags|=1,xt(e,t,a,l),t.child)}function af(e,t,a,i,l,o){return zn(t),t.updateQueue=null,a=rp(t,i,a,l),ip(e),i=$o(),e!==null&&!lt?(Go(e,t,o),Ca(e,t,o)):(Re&&i&&wo(t),t.flags|=1,xt(e,t,a,o),t.child)}function nf(e,t,a,i,l){if(zn(t),t.stateNode===null){var o=ni,u=a.contextType;typeof u=="object"&&u!==null&&(o=mt(u)),o=new a(i,o),t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=ic,t.stateNode=o,o._reactInternals=t,o=t.stateNode,o.props=i,o.state=t.memoizedState,o.refs={},Mo(t),u=a.contextType,o.context=typeof u=="object"&&u!==null?mt(u):ni,o.state=t.memoizedState,u=a.getDerivedStateFromProps,typeof u=="function"&&(nc(t,a,u,i),o.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(u=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),u!==o.state&&ic.enqueueReplaceState(o,o.state,null),or(t,i,o,l),sr(),o.state=t.memoizedState),typeof o.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){o=t.stateNode;var x=t.memoizedProps,w=Tn(a,x);o.props=w;var O=o.context,V=a.contextType;u=ni,typeof V=="object"&&V!==null&&(u=mt(V));var Z=a.getDerivedStateFromProps;V=typeof Z=="function"||typeof o.getSnapshotBeforeUpdate=="function",x=t.pendingProps!==x,V||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(x||O!==u)&&Gp(t,o,i,u),Xa=!1;var L=t.memoizedState;o.state=L,or(t,i,o,l),sr(),O=t.memoizedState,x||L!==O||Xa?(typeof Z=="function"&&(nc(t,a,Z,i),O=t.memoizedState),(w=Xa||$p(t,a,w,i,L,O,u))?(V||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=O),o.props=i,o.state=O,o.context=u,i=w):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{o=t.stateNode,Do(e,t),u=t.memoizedProps,V=Tn(a,u),o.props=V,Z=t.pendingProps,L=o.context,O=a.contextType,w=ni,typeof O=="object"&&O!==null&&(w=mt(O)),x=a.getDerivedStateFromProps,(O=typeof x=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==Z||L!==w)&&Gp(t,o,i,w),Xa=!1,L=t.memoizedState,o.state=L,or(t,i,o,l),sr();var Y=t.memoizedState;u!==Z||L!==Y||Xa||e!==null&&e.dependencies!==null&&wl(e.dependencies)?(typeof x=="function"&&(nc(t,a,x,i),Y=t.memoizedState),(V=Xa||$p(t,a,V,i,L,Y,w)||e!==null&&e.dependencies!==null&&wl(e.dependencies))?(O||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,Y,w),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,Y,w)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&L===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&L===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=Y),o.props=i,o.state=Y,o.context=w,i=V):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&L===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&L===e.memoizedState||(t.flags|=1024),i=!1)}return o=i,ql(e,t),i=(t.flags&128)!==0,o||i?(o=t.stateNode,a=i&&typeof a.getDerivedStateFromError!="function"?null:o.render(),t.flags|=1,e!==null&&i?(t.child=En(t,e.child,null,l),t.child=En(t,null,a,l)):xt(e,t,a,l),t.memoizedState=o.state,e=t.child):e=Ca(e,t,l),e}function rf(e,t,a,i){return Sn(),t.flags|=256,xt(e,t,a,i),t.child}var oc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function cc(e){return{baseLanes:e,cachePool:Zu()}}function dc(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=Lt),e}function lf(e,t,a){var i=t.pendingProps,l=!1,o=(t.flags&128)!==0,u;if((u=o)||(u=e!==null&&e.memoizedState===null?!1:(tt.current&2)!==0),u&&(l=!0,t.flags&=-129),u=(t.flags&32)!==0,t.flags&=-33,e===null){if(Re){if(l?Wa(t):Ka(),(e=We)?(e=hh(e,Kt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:qa!==null?{id:oa,overflow:ca}:null,retryLane:536870912,hydrationErrors:null},a=Lu(e),a.return=t,t.child=a,gt=t,We=null)):e=null,e===null)throw Ga(t);return Qc(e)?t.lanes=32:t.lanes=536870912,null}var x=i.children;return i=i.fallback,l?(Ka(),l=t.mode,x=$l({mode:"hidden",children:x},l),i=wn(i,l,a,null),x.return=t,i.return=t,x.sibling=i,t.child=x,i=t.child,i.memoizedState=cc(a),i.childLanes=dc(e,u,a),t.memoizedState=oc,fr(null,i)):(Wa(t),uc(t,x))}var w=e.memoizedState;if(w!==null&&(x=w.dehydrated,x!==null)){if(o)t.flags&256?(Wa(t),t.flags&=-257,t=pc(e,t,a)):t.memoizedState!==null?(Ka(),t.child=e.child,t.flags|=128,t=null):(Ka(),x=i.fallback,l=t.mode,i=$l({mode:"visible",children:i.children},l),x=wn(x,l,a,null),x.flags|=2,i.return=t,x.return=t,i.sibling=x,t.child=i,En(t,e.child,null,a),i=t.child,i.memoizedState=cc(a),i.childLanes=dc(e,u,a),t.memoizedState=oc,t=fr(null,i));else if(Wa(t),Qc(x)){if(u=x.nextSibling&&x.nextSibling.dataset,u)var O=u.dgst;u=O,i=Error(c(419)),i.stack="",i.digest=u,tr({value:i,source:null,stack:null}),t=pc(e,t,a)}else if(lt||si(e,t,a,!1),u=(a&e.childLanes)!==0,lt||u){if(u=Qe,u!==null&&(i=Xd(u,a),i!==0&&i!==w.retryLane))throw w.retryLane=i,jn(e,i),Rt(u,e,i),lc;Xc(x)||Il(),t=pc(e,t,a)}else Xc(x)?(t.flags|=192,t.child=e.child,t=null):(e=w.treeContext,We=It(x.nextSibling),gt=t,Re=!0,$a=null,Kt=!1,e!==null&&qu(t,e),t=uc(t,i.children),t.flags|=4096);return t}return l?(Ka(),x=i.fallback,l=t.mode,w=e.child,O=w.sibling,i=va(w,{mode:"hidden",children:i.children}),i.subtreeFlags=w.subtreeFlags&65011712,O!==null?x=va(O,x):(x=wn(x,l,a,null),x.flags|=2),x.return=t,i.return=t,i.sibling=x,t.child=i,fr(null,i),i=t.child,x=e.child.memoizedState,x===null?x=cc(a):(l=x.cachePool,l!==null?(w=it._currentValue,l=l.parent!==w?{parent:w,pool:w}:l):l=Zu(),x={baseLanes:x.baseLanes|a,cachePool:l}),i.memoizedState=x,i.childLanes=dc(e,u,a),t.memoizedState=oc,fr(e.child,i)):(Wa(t),a=e.child,e=a.sibling,a=va(a,{mode:"visible",children:i.children}),a.return=t,a.sibling=null,e!==null&&(u=t.deletions,u===null?(t.deletions=[e],t.flags|=16):u.push(e)),t.child=a,t.memoizedState=null,a)}function uc(e,t){return t=$l({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function $l(e,t){return e=Dt(22,e,null,t),e.lanes=0,e}function pc(e,t,a){return En(t,e.child,null,a),e=uc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function sf(e,t,a){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),No(e.return,t,a)}function fc(e,t,a,i,l,o){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:a,tailMode:l,treeForkCount:o}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=i,u.tail=a,u.tailMode=l,u.treeForkCount=o)}function of(e,t,a){var i=t.pendingProps,l=i.revealOrder,o=i.tail;i=i.children;var u=tt.current,x=(u&2)!==0;if(x?(u=u&1|2,t.flags|=128):u&=1,ne(tt,u),xt(e,t,i,a),i=Re?er:0,!x&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&sf(e,a,t);else if(e.tag===19)sf(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"forwards":for(a=t.child,l=null;a!==null;)e=a.alternate,e!==null&&Rl(e)===null&&(l=a),a=a.sibling;a=l,a===null?(l=t.child,t.child=null):(l=a.sibling,a.sibling=null),fc(t,!1,l,a,o,i);break;case"backwards":case"unstable_legacy-backwards":for(a=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Rl(e)===null){t.child=l;break}e=l.sibling,l.sibling=a,a=l,l=e}fc(t,!0,a,null,o,i);break;case"together":fc(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function Ca(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Fa|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(si(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,a=va(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=va(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function hc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&wl(e)))}function xm(e,t,a){switch(t.tag){case 3:ve(t,t.stateNode.containerInfo),Va(t,it,e.memoizedState.cache),Sn();break;case 27:case 5:Ae(t);break;case 4:ve(t,t.stateNode.containerInfo);break;case 10:Va(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Ho(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(Wa(t),t.flags|=128,null):(a&t.child.childLanes)!==0?lf(e,t,a):(Wa(t),e=Ca(e,t,a),e!==null?e.sibling:null);Wa(t);break;case 19:var l=(e.flags&128)!==0;if(i=(a&t.childLanes)!==0,i||(si(e,t,a,!1),i=(a&t.childLanes)!==0),l){if(i)return of(e,t,a);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),ne(tt,tt.current),i)break;return null;case 22:return t.lanes=0,Pp(e,t,a,t.pendingProps);case 24:Va(t,it,e.memoizedState.cache)}return Ca(e,t,a)}function cf(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)lt=!0;else{if(!hc(e,a)&&(t.flags&128)===0)return lt=!1,xm(e,t,a);lt=(e.flags&131072)!==0}else lt=!1,Re&&(t.flags&1048576)!==0&&Yu(t,er,t.index);switch(t.lanes=0,t.tag){case 16:e:{var i=t.pendingProps;if(e=Nn(t.elementType),t.type=e,typeof e=="function")bo(e)?(i=Tn(e,i),t.tag=1,t=nf(null,t,e,i,a)):(t.tag=0,t=sc(null,t,e,i,a));else{if(e!=null){var l=e.$$typeof;if(l===q){t.tag=11,t=Jp(null,t,e,i,a);break e}else if(l===$){t.tag=14,t=Ip(null,t,e,i,a);break e}}throw t=F(e)||e,Error(c(306,t,""))}}return t;case 0:return sc(e,t,t.type,t.pendingProps,a);case 1:return i=t.type,l=Tn(i,t.pendingProps),nf(e,t,i,l,a);case 3:e:{if(ve(t,t.stateNode.containerInfo),e===null)throw Error(c(387));i=t.pendingProps;var o=t.memoizedState;l=o.element,Do(e,t),or(t,i,null,a);var u=t.memoizedState;if(i=u.cache,Va(t,it,i),i!==o.cache&&_o(t,[it],a,!0),sr(),i=u.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:u.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=rf(e,t,i,a);break e}else if(i!==l){l=Qt(Error(c(424)),t),tr(l),t=rf(e,t,i,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,We=It(e.firstChild),gt=t,Re=!0,$a=null,Kt=!0,a=Pu(t,null,i,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Sn(),i===l){t=Ca(e,t,a);break e}xt(e,t,i,a)}t=t.child}return t;case 26:return ql(e,t),e===null?(a=vh(t.type,null,t.pendingProps,null))?t.memoizedState=a:Re||(a=t.type,e=t.pendingProps,i=is(P.current).createElement(a),i[ht]=t,i[kt]=e,yt(i,a,e),ut(i),t.stateNode=i):t.memoizedState=vh(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ae(t),e===null&&Re&&(i=t.stateNode=xh(t.type,t.pendingProps,P.current),gt=t,Kt=!0,l=We,nn(t.type)?(Zc=l,We=It(i.firstChild)):We=l),xt(e,t,t.pendingProps.children,a),ql(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Re&&((l=i=We)&&(i=Zm(i,t.type,t.pendingProps,Kt),i!==null?(t.stateNode=i,gt=t,We=It(i.firstChild),Kt=!1,l=!0):l=!1),l||Ga(t)),Ae(t),l=t.type,o=t.pendingProps,u=e!==null?e.memoizedProps:null,i=o.children,$c(l,o)?i=null:u!==null&&$c(l,u)&&(t.flags|=32),t.memoizedState!==null&&(l=qo(e,t,om,null,null,a),_r._currentValue=l),ql(e,t),xt(e,t,i,a),t.child;case 6:return e===null&&Re&&((e=a=We)&&(a=Wm(a,t.pendingProps,Kt),a!==null?(t.stateNode=a,gt=t,We=null,e=!0):e=!1),e||Ga(t)),null;case 13:return lf(e,t,a);case 4:return ve(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=En(t,null,i,a):xt(e,t,i,a),t.child;case 11:return Jp(e,t,t.type,t.pendingProps,a);case 7:return xt(e,t,t.pendingProps,a),t.child;case 8:return xt(e,t,t.pendingProps.children,a),t.child;case 12:return xt(e,t,t.pendingProps.children,a),t.child;case 10:return i=t.pendingProps,Va(t,t.type,i.value),xt(e,t,i.children,a),t.child;case 9:return l=t.type._context,i=t.pendingProps.children,zn(t),l=mt(l),i=i(l),t.flags|=1,xt(e,t,i,a),t.child;case 14:return Ip(e,t,t.type,t.pendingProps,a);case 15:return Fp(e,t,t.type,t.pendingProps,a);case 19:return of(e,t,a);case 31:return mm(e,t,a);case 22:return Pp(e,t,a,t.pendingProps);case 24:return zn(t),i=mt(it),e===null?(l=To(),l===null&&(l=Qe,o=Eo(),l.pooledCache=o,o.refCount++,o!==null&&(l.pooledCacheLanes|=a),l=o),t.memoizedState={parent:i,cache:l},Mo(t),Va(t,it,l)):((e.lanes&a)!==0&&(Do(e,t),or(t,null,null,a),sr()),l=e.memoizedState,o=t.memoizedState,l.parent!==i?(l={parent:i,cache:i},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),Va(t,it,i)):(i=o.cache,Va(t,it,i),i!==l.cache&&_o(t,[it],a,!0))),xt(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function Na(e){e.flags|=4}function gc(e,t,a,i,l){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(Of())e.flags|=8192;else throw _n=Cl,Ao}else e.flags&=-16777217}function df(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!zh(t))if(Of())e.flags|=8192;else throw _n=Cl,Ao}function Gl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?$d():536870912,e.lanes|=t,bi|=t)}function hr(e,t){if(!Re)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var i=null;a!==null;)a.alternate!==null&&(i=a),a=a.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Ke(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,i=0;if(t)for(var l=e.child;l!==null;)a|=l.lanes|l.childLanes,i|=l.subtreeFlags&65011712,i|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)a|=l.lanes|l.childLanes,i|=l.subtreeFlags,i|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=i,e.childLanes=a,t}function ym(e,t,a){var i=t.pendingProps;switch(So(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(t),null;case 1:return Ke(t),null;case 3:return a=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),Sa(it),he(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(li(t)?Na(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,zo())),Ke(t),null;case 26:var l=t.type,o=t.memoizedState;return e===null?(Na(t),o!==null?(Ke(t),df(t,o)):(Ke(t),gc(t,l,null,i,a))):o?o!==e.memoizedState?(Na(t),Ke(t),df(t,o)):(Ke(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&Na(t),Ke(t),gc(t,l,e,i,a)),null;case 27:if(Fe(t),a=P.current,l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Na(t);else{if(!i){if(t.stateNode===null)throw Error(c(166));return Ke(t),null}e=M.current,li(t)?$u(t):(e=xh(l,i,a),t.stateNode=e,Na(t))}return Ke(t),null;case 5:if(Fe(t),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Na(t);else{if(!i){if(t.stateNode===null)throw Error(c(166));return Ke(t),null}if(o=M.current,li(t))$u(t);else{var u=is(P.current);switch(o){case 1:o=u.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:o=u.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":o=u.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":o=u.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":o=u.createElement("div"),o.innerHTML="<script><\/script>",o=o.removeChild(o.firstChild);break;case"select":o=typeof i.is=="string"?u.createElement("select",{is:i.is}):u.createElement("select"),i.multiple?o.multiple=!0:i.size&&(o.size=i.size);break;default:o=typeof i.is=="string"?u.createElement(l,{is:i.is}):u.createElement(l)}}o[ht]=t,o[kt]=i;e:for(u=t.child;u!==null;){if(u.tag===5||u.tag===6)o.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===t)break e;for(;u.sibling===null;){if(u.return===null||u.return===t)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}t.stateNode=o;e:switch(yt(o,l,i),l){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&Na(t)}}return Ke(t),gc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Na(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(c(166));if(e=P.current,li(t)){if(e=t.stateNode,a=t.memoizedProps,i=null,l=gt,l!==null)switch(l.tag){case 27:case 5:i=l.memoizedProps}e[ht]=t,e=!!(e.nodeValue===a||i!==null&&i.suppressHydrationWarning===!0||lh(e.nodeValue,a)),e||Ga(t,!0)}else e=is(e).createTextNode(i),e[ht]=t,t.stateNode=e}return Ke(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(i=li(t),a!==null){if(e===null){if(!i)throw Error(c(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(557));e[ht]=t}else Sn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ke(t),e=!1}else a=zo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(Ot(t),t):(Ot(t),null);if((t.flags&128)!==0)throw Error(c(558))}return Ke(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=li(t),i!==null&&i.dehydrated!==null){if(e===null){if(!l)throw Error(c(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(c(317));l[ht]=t}else Sn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ke(t),l=!1}else l=zo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(Ot(t),t):(Ot(t),null)}return Ot(t),(t.flags&128)!==0?(t.lanes=a,t):(a=i!==null,e=e!==null&&e.memoizedState!==null,a&&(i=t.child,l=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(l=i.alternate.memoizedState.cachePool.pool),o=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),o!==l&&(i.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Gl(t,t.updateQueue),Ke(t),null);case 4:return he(),e===null&&Uc(t.stateNode.containerInfo),Ke(t),null;case 10:return Sa(t.type),Ke(t),null;case 19:if(Q(tt),i=t.memoizedState,i===null)return Ke(t),null;if(l=(t.flags&128)!==0,o=i.rendering,o===null)if(l)hr(i,!1);else{if(et!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(o=Rl(e),o!==null){for(t.flags|=128,hr(i,!1),e=o.updateQueue,t.updateQueue=e,Gl(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Uu(a,e),a=a.sibling;return ne(tt,tt.current&1|2),Re&&ja(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&vt()>Wl&&(t.flags|=128,l=!0,hr(i,!1),t.lanes=4194304)}else{if(!l)if(e=Rl(o),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,Gl(t,e),hr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!Re)return Ke(t),null}else 2*vt()-i.renderingStartTime>Wl&&a!==536870912&&(t.flags|=128,l=!0,hr(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(e=i.last,e!==null?e.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=vt(),e.sibling=null,a=tt.current,ne(tt,l?a&1|2:a&1),Re&&ja(t,i.treeForkCount),e):(Ke(t),null);case 22:case 23:return Ot(t),Lo(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(a&536870912)!==0&&(t.flags&128)===0&&(Ke(t),t.subtreeFlags&6&&(t.flags|=8192)):Ke(t),a=t.updateQueue,a!==null&&Gl(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==a&&(t.flags|=2048),e!==null&&Q(Cn),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Sa(it),Ke(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function bm(e,t){switch(So(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Sa(it),he(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Fe(t),null;case 31:if(t.memoizedState!==null){if(Ot(t),t.alternate===null)throw Error(c(340));Sn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Ot(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));Sn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Q(tt),null;case 4:return he(),null;case 10:return Sa(t.type),null;case 22:case 23:return Ot(t),Lo(),e!==null&&Q(Cn),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Sa(it),null;case 25:return null;default:return null}}function uf(e,t){switch(So(t),t.tag){case 3:Sa(it),he();break;case 26:case 27:case 5:Fe(t);break;case 4:he();break;case 31:t.memoizedState!==null&&Ot(t);break;case 13:Ot(t);break;case 19:Q(tt);break;case 10:Sa(t.type);break;case 22:case 23:Ot(t),Lo(),e!==null&&Q(Cn);break;case 24:Sa(it)}}function gr(e,t){try{var a=t.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var l=i.next;a=l;do{if((a.tag&e)===e){i=void 0;var o=a.create,u=a.inst;i=o(),u.destroy=i}a=a.next}while(a!==l)}}catch(x){qe(t,t.return,x)}}function Ja(e,t,a){try{var i=t.updateQueue,l=i!==null?i.lastEffect:null;if(l!==null){var o=l.next;i=o;do{if((i.tag&e)===e){var u=i.inst,x=u.destroy;if(x!==void 0){u.destroy=void 0,l=t;var w=a,O=x;try{O()}catch(V){qe(l,w,V)}}}i=i.next}while(i!==o)}}catch(V){qe(t,t.return,V)}}function pf(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{tp(t,a)}catch(i){qe(e,e.return,i)}}}function ff(e,t,a){a.props=Tn(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(i){qe(e,t,i)}}function mr(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof a=="function"?e.refCleanup=a(i):a.current=i}}catch(l){qe(e,t,l)}}function da(e,t){var a=e.ref,i=e.refCleanup;if(a!==null)if(typeof i=="function")try{i()}catch(l){qe(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(l){qe(e,t,l)}else a.current=null}function hf(e){var t=e.type,a=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&i.focus();break e;case"img":a.src?i.src=a.src:a.srcSet&&(i.srcset=a.srcSet)}}catch(l){qe(e,e.return,l)}}function mc(e,t,a){try{var i=e.stateNode;qm(i,e.type,a,t),i[kt]=t}catch(l){qe(e,e.return,l)}}function gf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&nn(e.type)||e.tag===4}function xc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||gf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&nn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function yc(e,t,a){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=ya));else if(i!==4&&(i===27&&nn(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(yc(e,t,a),e=e.sibling;e!==null;)yc(e,t,a),e=e.sibling}function Vl(e,t,a){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(i!==4&&(i===27&&nn(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Vl(e,t,a),e=e.sibling;e!==null;)Vl(e,t,a),e=e.sibling}function mf(e){var t=e.stateNode,a=e.memoizedProps;try{for(var i=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);yt(t,i,a),t[ht]=e,t[kt]=a}catch(o){qe(e,e.return,o)}}var _a=!1,st=!1,bc=!1,xf=typeof WeakSet=="function"?WeakSet:Set,pt=null;function vm(e,t){if(e=e.containerInfo,Yc=us,e=_u(e),po(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var i=a.getSelection&&a.getSelection();if(i&&i.rangeCount!==0){a=i.anchorNode;var l=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{a.nodeType,o.nodeType}catch{a=null;break e}var u=0,x=-1,w=-1,O=0,V=0,Z=e,L=null;t:for(;;){for(var Y;Z!==a||l!==0&&Z.nodeType!==3||(x=u+l),Z!==o||i!==0&&Z.nodeType!==3||(w=u+i),Z.nodeType===3&&(u+=Z.nodeValue.length),(Y=Z.firstChild)!==null;)L=Z,Z=Y;for(;;){if(Z===e)break t;if(L===a&&++O===l&&(x=u),L===o&&++V===i&&(w=u),(Y=Z.nextSibling)!==null)break;Z=L,L=Z.parentNode}Z=Y}a=x===-1||w===-1?null:{start:x,end:w}}else a=null}a=a||{start:0,end:0}}else a=null;for(qc={focusedElem:e,selectionRange:a},us=!1,pt=t;pt!==null;)if(t=pt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,pt=e;else for(;pt!==null;){switch(t=pt,o=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)l=e[a],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&o!==null){e=void 0,a=t,l=o.memoizedProps,o=o.memoizedState,i=a.stateNode;try{var se=Tn(a.type,l);e=i.getSnapshotBeforeUpdate(se,o),i.__reactInternalSnapshotBeforeUpdate=e}catch(me){qe(a,a.return,me)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Vc(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Vc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,pt=e;break}pt=t.return}}function yf(e,t,a){var i=a.flags;switch(a.tag){case 0:case 11:case 15:Ra(e,a),i&4&&gr(5,a);break;case 1:if(Ra(e,a),i&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(u){qe(a,a.return,u)}else{var l=Tn(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(u){qe(a,a.return,u)}}i&64&&pf(a),i&512&&mr(a,a.return);break;case 3:if(Ra(e,a),i&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{tp(e,t)}catch(u){qe(a,a.return,u)}}break;case 27:t===null&&i&4&&mf(a);case 26:case 5:Ra(e,a),t===null&&i&4&&hf(a),i&512&&mr(a,a.return);break;case 12:Ra(e,a);break;case 31:Ra(e,a),i&4&&jf(e,a);break;case 13:Ra(e,a),i&4&&wf(e,a),i&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Em.bind(null,a),Km(e,a))));break;case 22:if(i=a.memoizedState!==null||_a,!i){t=t!==null&&t.memoizedState!==null||st,l=_a;var o=st;_a=i,(st=t)&&!o?Ta(e,a,(a.subtreeFlags&8772)!==0):Ra(e,a),_a=l,st=o}break;case 30:break;default:Ra(e,a)}}function bf(e){var t=e.alternate;t!==null&&(e.alternate=null,bf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ws(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Je=null,Ct=!1;function Ea(e,t,a){for(a=a.child;a!==null;)vf(e,t,a),a=a.sibling}function vf(e,t,a){if(te&&typeof te.onCommitFiberUnmount=="function")try{te.onCommitFiberUnmount(E,a)}catch{}switch(a.tag){case 26:st||da(a,t),Ea(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:st||da(a,t);var i=Je,l=Ct;nn(a.type)&&(Je=a.stateNode,Ct=!1),Ea(e,t,a),zr(a.stateNode),Je=i,Ct=l;break;case 5:st||da(a,t);case 6:if(i=Je,l=Ct,Je=null,Ea(e,t,a),Je=i,Ct=l,Je!==null)if(Ct)try{(Je.nodeType===9?Je.body:Je.nodeName==="HTML"?Je.ownerDocument.body:Je).removeChild(a.stateNode)}catch(o){qe(a,t,o)}else try{Je.removeChild(a.stateNode)}catch(o){qe(a,t,o)}break;case 18:Je!==null&&(Ct?(e=Je,ph(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Ni(e)):ph(Je,a.stateNode));break;case 4:i=Je,l=Ct,Je=a.stateNode.containerInfo,Ct=!0,Ea(e,t,a),Je=i,Ct=l;break;case 0:case 11:case 14:case 15:Ja(2,a,t),st||Ja(4,a,t),Ea(e,t,a);break;case 1:st||(da(a,t),i=a.stateNode,typeof i.componentWillUnmount=="function"&&ff(a,t,i)),Ea(e,t,a);break;case 21:Ea(e,t,a);break;case 22:st=(i=st)||a.memoizedState!==null,Ea(e,t,a),st=i;break;default:Ea(e,t,a)}}function jf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ni(e)}catch(a){qe(t,t.return,a)}}}function wf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ni(e)}catch(a){qe(t,t.return,a)}}function jm(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new xf),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new xf),t;default:throw Error(c(435,e.tag))}}function Xl(e,t){var a=jm(e);t.forEach(function(i){if(!a.has(i)){a.add(i);var l=Rm.bind(null,e,i);i.then(l,l)}})}function Nt(e,t){var a=t.deletions;if(a!==null)for(var i=0;i<a.length;i++){var l=a[i],o=e,u=t,x=u;e:for(;x!==null;){switch(x.tag){case 27:if(nn(x.type)){Je=x.stateNode,Ct=!1;break e}break;case 5:Je=x.stateNode,Ct=!1;break e;case 3:case 4:Je=x.stateNode.containerInfo,Ct=!0;break e}x=x.return}if(Je===null)throw Error(c(160));vf(o,u,l),Je=null,Ct=!1,o=l.alternate,o!==null&&(o.return=null),l.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Sf(t,e),t=t.sibling}var aa=null;function Sf(e,t){var a=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Nt(t,e),_t(e),i&4&&(Ja(3,e,e.return),gr(3,e),Ja(5,e,e.return));break;case 1:Nt(t,e),_t(e),i&512&&(st||a===null||da(a,a.return)),i&64&&_a&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?i:a.concat(i))));break;case 26:var l=aa;if(Nt(t,e),_t(e),i&512&&(st||a===null||da(a,a.return)),i&4){var o=a!==null?a.memoizedState:null;if(i=e.memoizedState,a===null)if(i===null)if(e.stateNode===null){e:{i=e.type,a=e.memoizedProps,l=l.ownerDocument||l;t:switch(i){case"title":o=l.getElementsByTagName("title")[0],(!o||o[Gi]||o[ht]||o.namespaceURI==="http://www.w3.org/2000/svg"||o.hasAttribute("itemprop"))&&(o=l.createElement(i),l.head.insertBefore(o,l.querySelector("head > title"))),yt(o,i,a),o[ht]=e,ut(o),i=o;break e;case"link":var u=Sh("link","href",l).get(i+(a.href||""));if(u){for(var x=0;x<u.length;x++)if(o=u[x],o.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&o.getAttribute("rel")===(a.rel==null?null:a.rel)&&o.getAttribute("title")===(a.title==null?null:a.title)&&o.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){u.splice(x,1);break t}}o=l.createElement(i),yt(o,i,a),l.head.appendChild(o);break;case"meta":if(u=Sh("meta","content",l).get(i+(a.content||""))){for(x=0;x<u.length;x++)if(o=u[x],o.getAttribute("content")===(a.content==null?null:""+a.content)&&o.getAttribute("name")===(a.name==null?null:a.name)&&o.getAttribute("property")===(a.property==null?null:a.property)&&o.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&o.getAttribute("charset")===(a.charSet==null?null:a.charSet)){u.splice(x,1);break t}}o=l.createElement(i),yt(o,i,a),l.head.appendChild(o);break;default:throw Error(c(468,i))}o[ht]=e,ut(o),i=o}e.stateNode=i}else kh(l,e.type,e.stateNode);else e.stateNode=wh(l,i,e.memoizedProps);else o!==i?(o===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):o.count--,i===null?kh(l,e.type,e.stateNode):wh(l,i,e.memoizedProps)):i===null&&e.stateNode!==null&&mc(e,e.memoizedProps,a.memoizedProps)}break;case 27:Nt(t,e),_t(e),i&512&&(st||a===null||da(a,a.return)),a!==null&&i&4&&mc(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Nt(t,e),_t(e),i&512&&(st||a===null||da(a,a.return)),e.flags&32){l=e.stateNode;try{Jn(l,"")}catch(se){qe(e,e.return,se)}}i&4&&e.stateNode!=null&&(l=e.memoizedProps,mc(e,l,a!==null?a.memoizedProps:l)),i&1024&&(bc=!0);break;case 6:if(Nt(t,e),_t(e),i&4){if(e.stateNode===null)throw Error(c(162));i=e.memoizedProps,a=e.stateNode;try{a.nodeValue=i}catch(se){qe(e,e.return,se)}}break;case 3:if(ss=null,l=aa,aa=rs(t.containerInfo),Nt(t,e),aa=l,_t(e),i&4&&a!==null&&a.memoizedState.isDehydrated)try{Ni(t.containerInfo)}catch(se){qe(e,e.return,se)}bc&&(bc=!1,kf(e));break;case 4:i=aa,aa=rs(e.stateNode.containerInfo),Nt(t,e),_t(e),aa=i;break;case 12:Nt(t,e),_t(e);break;case 31:Nt(t,e),_t(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Xl(e,i)));break;case 13:Nt(t,e),_t(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Zl=vt()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Xl(e,i)));break;case 22:l=e.memoizedState!==null;var w=a!==null&&a.memoizedState!==null,O=_a,V=st;if(_a=O||l,st=V||w,Nt(t,e),st=V,_a=O,_t(e),i&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(a===null||w||_a||st||An(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){w=a=t;try{if(o=w.stateNode,l)u=o.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{x=w.stateNode;var Z=w.memoizedProps.style,L=Z!=null&&Z.hasOwnProperty("display")?Z.display:null;x.style.display=L==null||typeof L=="boolean"?"":(""+L).trim()}}catch(se){qe(w,w.return,se)}}}else if(t.tag===6){if(a===null){w=t;try{w.stateNode.nodeValue=l?"":w.memoizedProps}catch(se){qe(w,w.return,se)}}}else if(t.tag===18){if(a===null){w=t;try{var Y=w.stateNode;l?fh(Y,!0):fh(w.stateNode,!1)}catch(se){qe(w,w.return,se)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(a=i.retryQueue,a!==null&&(i.retryQueue=null,Xl(e,a))));break;case 19:Nt(t,e),_t(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Xl(e,i)));break;case 30:break;case 21:break;default:Nt(t,e),_t(e)}}function _t(e){var t=e.flags;if(t&2){try{for(var a,i=e.return;i!==null;){if(gf(i)){a=i;break}i=i.return}if(a==null)throw Error(c(160));switch(a.tag){case 27:var l=a.stateNode,o=xc(e);Vl(e,o,l);break;case 5:var u=a.stateNode;a.flags&32&&(Jn(u,""),a.flags&=-33);var x=xc(e);Vl(e,x,u);break;case 3:case 4:var w=a.stateNode.containerInfo,O=xc(e);yc(e,O,w);break;default:throw Error(c(161))}}catch(V){qe(e,e.return,V)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function kf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;kf(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Ra(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)yf(e,t.alternate,t),t=t.sibling}function An(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Ja(4,t,t.return),An(t);break;case 1:da(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&ff(t,t.return,a),An(t);break;case 27:zr(t.stateNode);case 26:case 5:da(t,t.return),An(t);break;case 22:t.memoizedState===null&&An(t);break;case 30:An(t);break;default:An(t)}e=e.sibling}}function Ta(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,l=e,o=t,u=o.flags;switch(o.tag){case 0:case 11:case 15:Ta(l,o,a),gr(4,o);break;case 1:if(Ta(l,o,a),i=o,l=i.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(O){qe(i,i.return,O)}if(i=o,l=i.updateQueue,l!==null){var x=i.stateNode;try{var w=l.shared.hiddenCallbacks;if(w!==null)for(l.shared.hiddenCallbacks=null,l=0;l<w.length;l++)ep(w[l],x)}catch(O){qe(i,i.return,O)}}a&&u&64&&pf(o),mr(o,o.return);break;case 27:mf(o);case 26:case 5:Ta(l,o,a),a&&i===null&&u&4&&hf(o),mr(o,o.return);break;case 12:Ta(l,o,a);break;case 31:Ta(l,o,a),a&&u&4&&jf(l,o);break;case 13:Ta(l,o,a),a&&u&4&&wf(l,o);break;case 22:o.memoizedState===null&&Ta(l,o,a),mr(o,o.return);break;case 30:break;default:Ta(l,o,a)}t=t.sibling}}function vc(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&ar(a))}function jc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ar(e))}function na(e,t,a,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)zf(e,t,a,i),t=t.sibling}function zf(e,t,a,i){var l=t.flags;switch(t.tag){case 0:case 11:case 15:na(e,t,a,i),l&2048&&gr(9,t);break;case 1:na(e,t,a,i);break;case 3:na(e,t,a,i),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ar(e)));break;case 12:if(l&2048){na(e,t,a,i),e=t.stateNode;try{var o=t.memoizedProps,u=o.id,x=o.onPostCommit;typeof x=="function"&&x(u,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(w){qe(t,t.return,w)}}else na(e,t,a,i);break;case 31:na(e,t,a,i);break;case 13:na(e,t,a,i);break;case 23:break;case 22:o=t.stateNode,u=t.alternate,t.memoizedState!==null?o._visibility&2?na(e,t,a,i):xr(e,t):o._visibility&2?na(e,t,a,i):(o._visibility|=2,mi(e,t,a,i,(t.subtreeFlags&10256)!==0||!1)),l&2048&&vc(u,t);break;case 24:na(e,t,a,i),l&2048&&jc(t.alternate,t);break;default:na(e,t,a,i)}}function mi(e,t,a,i,l){for(l=l&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var o=e,u=t,x=a,w=i,O=u.flags;switch(u.tag){case 0:case 11:case 15:mi(o,u,x,w,l),gr(8,u);break;case 23:break;case 22:var V=u.stateNode;u.memoizedState!==null?V._visibility&2?mi(o,u,x,w,l):xr(o,u):(V._visibility|=2,mi(o,u,x,w,l)),l&&O&2048&&vc(u.alternate,u);break;case 24:mi(o,u,x,w,l),l&&O&2048&&jc(u.alternate,u);break;default:mi(o,u,x,w,l)}t=t.sibling}}function xr(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,i=t,l=i.flags;switch(i.tag){case 22:xr(a,i),l&2048&&vc(i.alternate,i);break;case 24:xr(a,i),l&2048&&jc(i.alternate,i);break;default:xr(a,i)}t=t.sibling}}var yr=8192;function xi(e,t,a){if(e.subtreeFlags&yr)for(e=e.child;e!==null;)Cf(e,t,a),e=e.sibling}function Cf(e,t,a){switch(e.tag){case 26:xi(e,t,a),e.flags&yr&&e.memoizedState!==null&&sx(a,aa,e.memoizedState,e.memoizedProps);break;case 5:xi(e,t,a);break;case 3:case 4:var i=aa;aa=rs(e.stateNode.containerInfo),xi(e,t,a),aa=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=yr,yr=16777216,xi(e,t,a),yr=i):xi(e,t,a));break;default:xi(e,t,a)}}function Nf(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function br(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var i=t[a];pt=i,Ef(i,e)}Nf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)_f(e),e=e.sibling}function _f(e){switch(e.tag){case 0:case 11:case 15:br(e),e.flags&2048&&Ja(9,e,e.return);break;case 3:br(e);break;case 12:br(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ql(e)):br(e);break;default:br(e)}}function Ql(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var i=t[a];pt=i,Ef(i,e)}Nf(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Ja(8,t,t.return),Ql(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Ql(t));break;default:Ql(t)}e=e.sibling}}function Ef(e,t){for(;pt!==null;){var a=pt;switch(a.tag){case 0:case 11:case 15:Ja(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var i=a.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:ar(a.memoizedState.cache)}if(i=a.child,i!==null)i.return=a,pt=i;else e:for(a=e;pt!==null;){i=pt;var l=i.sibling,o=i.return;if(bf(i),i===a){pt=null;break e}if(l!==null){l.return=o,pt=l;break e}pt=o}}}var wm={getCacheForType:function(e){var t=mt(it),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return mt(it).controller.signal}},Sm=typeof WeakMap=="function"?WeakMap:Map,Be=0,Qe=null,ze=null,Ne=0,Ye=0,Ut=null,Ia=!1,yi=!1,wc=!1,Aa=0,et=0,Fa=0,Mn=0,Sc=0,Lt=0,bi=0,vr=null,Et=null,kc=!1,Zl=0,Rf=0,Wl=1/0,Kl=null,Pa=null,ct=0,en=null,vi=null,Ma=0,zc=0,Cc=null,Tf=null,jr=0,Nc=null;function Ht(){return(Be&2)!==0&&Ne!==0?Ne&-Ne:H.T!==null?Mc():Qd()}function Af(){if(Lt===0)if((Ne&536870912)===0||Re){var e=gn;gn<<=1,(gn&3932160)===0&&(gn=262144),Lt=e}else Lt=536870912;return e=Bt.current,e!==null&&(e.flags|=32),Lt}function Rt(e,t,a){(e===Qe&&(Ye===2||Ye===9)||e.cancelPendingCommit!==null)&&(ji(e,0),tn(e,Ne,Lt,!1)),$i(e,a),((Be&2)===0||e!==Qe)&&(e===Qe&&((Be&2)===0&&(Mn|=a),et===4&&tn(e,Ne,Lt,!1)),ua(e))}function Mf(e,t,a){if((Be&6)!==0)throw Error(c(327));var i=!a&&(t&127)===0&&(t&e.expiredLanes)===0||qi(e,t),l=i?Cm(e,t):Ec(e,t,!0),o=i;do{if(l===0){yi&&!i&&tn(e,t,0,!1);break}else{if(a=e.current.alternate,o&&!km(a)){l=Ec(e,t,!1),o=!1;continue}if(l===2){if(o=t,e.errorRecoveryDisabledLanes&o)var u=0;else u=e.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){t=u;e:{var x=e;l=vr;var w=x.current.memoizedState.isDehydrated;if(w&&(ji(x,u).flags|=256),u=Ec(x,u,!1),u!==2){if(wc&&!w){x.errorRecoveryDisabledLanes|=o,Mn|=o,l=4;break e}o=Et,Et=l,o!==null&&(Et===null?Et=o:Et.push.apply(Et,o))}l=u}if(o=!1,l!==2)continue}}if(l===1){ji(e,0),tn(e,t,0,!0);break}e:{switch(i=e,o=l,o){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:tn(i,t,Lt,!Ia);break e;case 2:Et=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(l=Zl+300-vt(),10<l)){if(tn(i,t,Lt,!Ia),rl(i,0,!0)!==0)break e;Ma=t,i.timeoutHandle=dh(Df.bind(null,i,a,Et,Kl,kc,t,Lt,Mn,bi,Ia,o,"Throttled",-0,0),l);break e}Df(i,a,Et,Kl,kc,t,Lt,Mn,bi,Ia,o,null,-0,0)}}break}while(!0);ua(e)}function Df(e,t,a,i,l,o,u,x,w,O,V,Z,L,Y){if(e.timeoutHandle=-1,Z=t.subtreeFlags,Z&8192||(Z&16785408)===16785408){Z={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ya},Cf(t,o,Z);var se=(o&62914560)===o?Zl-vt():(o&4194048)===o?Rf-vt():0;if(se=ox(Z,se),se!==null){Ma=o,e.cancelPendingCommit=se($f.bind(null,e,t,o,a,i,l,u,x,w,V,Z,null,L,Y)),tn(e,o,u,!O);return}}$f(e,t,o,a,i,l,u,x,w)}function km(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var i=0;i<a.length;i++){var l=a[i],o=l.getSnapshot;l=l.value;try{if(!Mt(o(),l))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function tn(e,t,a,i){t&=~Sc,t&=~Mn,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var l=t;0<l;){var o=31-He(l),u=1<<o;i[o]=-1,l&=~u}a!==0&&Gd(e,a,t)}function Jl(){return(Be&6)===0?(wr(0),!1):!0}function _c(){if(ze!==null){if(Ye===0)var e=ze.return;else e=ze,wa=kn=null,Vo(e),ui=null,ir=0,e=ze;for(;e!==null;)uf(e.alternate,e),e=e.return;ze=null}}function ji(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Vm(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Ma=0,_c(),Qe=e,ze=a=va(e.current,null),Ne=t,Ye=0,Ut=null,Ia=!1,yi=qi(e,t),wc=!1,bi=Lt=Sc=Mn=Fa=et=0,Et=vr=null,kc=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var l=31-He(i),o=1<<l;t|=e[l],i&=~o}return Aa=t,xl(),a}function Bf(e,t){Se=null,H.H=pr,t===di||t===zl?(t=Ju(),Ye=3):t===Ao?(t=Ju(),Ye=4):Ye=t===lc?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Ut=t,ze===null&&(et=1,Hl(e,Qt(t,e.current)))}function Of(){var e=Bt.current;return e===null?!0:(Ne&4194048)===Ne?Jt===null:(Ne&62914560)===Ne||(Ne&536870912)!==0?e===Jt:!1}function Uf(){var e=H.H;return H.H=pr,e===null?pr:e}function Lf(){var e=H.A;return H.A=wm,e}function Il(){et=4,Ia||(Ne&4194048)!==Ne&&Bt.current!==null||(yi=!0),(Fa&134217727)===0&&(Mn&134217727)===0||Qe===null||tn(Qe,Ne,Lt,!1)}function Ec(e,t,a){var i=Be;Be|=2;var l=Uf(),o=Lf();(Qe!==e||Ne!==t)&&(Kl=null,ji(e,t)),t=!1;var u=et;e:do try{if(Ye!==0&&ze!==null){var x=ze,w=Ut;switch(Ye){case 8:_c(),u=6;break e;case 3:case 2:case 9:case 6:Bt.current===null&&(t=!0);var O=Ye;if(Ye=0,Ut=null,wi(e,x,w,O),a&&yi){u=0;break e}break;default:O=Ye,Ye=0,Ut=null,wi(e,x,w,O)}}zm(),u=et;break}catch(V){Bf(e,V)}while(!0);return t&&e.shellSuspendCounter++,wa=kn=null,Be=i,H.H=l,H.A=o,ze===null&&(Qe=null,Ne=0,xl()),u}function zm(){for(;ze!==null;)Hf(ze)}function Cm(e,t){var a=Be;Be|=2;var i=Uf(),l=Lf();Qe!==e||Ne!==t?(Kl=null,Wl=vt()+500,ji(e,t)):yi=qi(e,t);e:do try{if(Ye!==0&&ze!==null){t=ze;var o=Ut;t:switch(Ye){case 1:Ye=0,Ut=null,wi(e,t,o,1);break;case 2:case 9:if(Wu(o)){Ye=0,Ut=null,Yf(t);break}t=function(){Ye!==2&&Ye!==9||Qe!==e||(Ye=7),ua(e)},o.then(t,t);break e;case 3:Ye=7;break e;case 4:Ye=5;break e;case 7:Wu(o)?(Ye=0,Ut=null,Yf(t)):(Ye=0,Ut=null,wi(e,t,o,7));break;case 5:var u=null;switch(ze.tag){case 26:u=ze.memoizedState;case 5:case 27:var x=ze;if(u?zh(u):x.stateNode.complete){Ye=0,Ut=null;var w=x.sibling;if(w!==null)ze=w;else{var O=x.return;O!==null?(ze=O,Fl(O)):ze=null}break t}}Ye=0,Ut=null,wi(e,t,o,5);break;case 6:Ye=0,Ut=null,wi(e,t,o,6);break;case 8:_c(),et=6;break e;default:throw Error(c(462))}}Nm();break}catch(V){Bf(e,V)}while(!0);return wa=kn=null,H.H=i,H.A=l,Be=a,ze!==null?0:(Qe=null,Ne=0,xl(),et)}function Nm(){for(;ze!==null&&!Ir();)Hf(ze)}function Hf(e){var t=cf(e.alternate,e,Aa);e.memoizedProps=e.pendingProps,t===null?Fl(e):ze=t}function Yf(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=af(a,t,t.pendingProps,t.type,void 0,Ne);break;case 11:t=af(a,t,t.pendingProps,t.type.render,t.ref,Ne);break;case 5:Vo(t);default:uf(a,t),t=ze=Uu(t,Aa),t=cf(a,t,Aa)}e.memoizedProps=e.pendingProps,t===null?Fl(e):ze=t}function wi(e,t,a,i){wa=kn=null,Vo(t),ui=null,ir=0;var l=t.return;try{if(gm(e,l,t,a,Ne)){et=1,Hl(e,Qt(a,e.current)),ze=null;return}}catch(o){if(l!==null)throw ze=l,o;et=1,Hl(e,Qt(a,e.current)),ze=null;return}t.flags&32768?(Re||i===1?e=!0:yi||(Ne&536870912)!==0?e=!1:(Ia=e=!0,(i===2||i===9||i===3||i===6)&&(i=Bt.current,i!==null&&i.tag===13&&(i.flags|=16384))),qf(t,e)):Fl(t)}function Fl(e){var t=e;do{if((t.flags&32768)!==0){qf(t,Ia);return}e=t.return;var a=ym(t.alternate,t,Aa);if(a!==null){ze=a;return}if(t=t.sibling,t!==null){ze=t;return}ze=t=e}while(t!==null);et===0&&(et=5)}function qf(e,t){do{var a=bm(e.alternate,e);if(a!==null){a.flags&=32767,ze=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){ze=e;return}ze=e=a}while(e!==null);et=6,ze=null}function $f(e,t,a,i,l,o,u,x,w){e.cancelPendingCommit=null;do Pl();while(ct!==0);if((Be&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));if(o=t.lanes|t.childLanes,o|=xo,l0(e,a,o,u,x,w),e===Qe&&(ze=Qe=null,Ne=0),vi=t,en=e,Ma=a,zc=o,Cc=l,Tf=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Tm($n,function(){return Zf(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=H.T,H.T=null,l=I.p,I.p=2,u=Be,Be|=4;try{vm(e,t,a)}finally{Be=u,I.p=l,H.T=i}}ct=1,Gf(),Vf(),Xf()}}function Gf(){if(ct===1){ct=0;var e=en,t=vi,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=H.T,H.T=null;var i=I.p;I.p=2;var l=Be;Be|=4;try{Sf(t,e);var o=qc,u=_u(e.containerInfo),x=o.focusedElem,w=o.selectionRange;if(u!==x&&x&&x.ownerDocument&&Nu(x.ownerDocument.documentElement,x)){if(w!==null&&po(x)){var O=w.start,V=w.end;if(V===void 0&&(V=O),"selectionStart"in x)x.selectionStart=O,x.selectionEnd=Math.min(V,x.value.length);else{var Z=x.ownerDocument||document,L=Z&&Z.defaultView||window;if(L.getSelection){var Y=L.getSelection(),se=x.textContent.length,me=Math.min(w.start,se),Ve=w.end===void 0?me:Math.min(w.end,se);!Y.extend&&me>Ve&&(u=Ve,Ve=me,me=u);var R=Cu(x,me),N=Cu(x,Ve);if(R&&N&&(Y.rangeCount!==1||Y.anchorNode!==R.node||Y.anchorOffset!==R.offset||Y.focusNode!==N.node||Y.focusOffset!==N.offset)){var B=Z.createRange();B.setStart(R.node,R.offset),Y.removeAllRanges(),me>Ve?(Y.addRange(B),Y.extend(N.node,N.offset)):(B.setEnd(N.node,N.offset),Y.addRange(B))}}}}for(Z=[],Y=x;Y=Y.parentNode;)Y.nodeType===1&&Z.push({element:Y,left:Y.scrollLeft,top:Y.scrollTop});for(typeof x.focus=="function"&&x.focus(),x=0;x<Z.length;x++){var X=Z[x];X.element.scrollLeft=X.left,X.element.scrollTop=X.top}}us=!!Yc,qc=Yc=null}finally{Be=l,I.p=i,H.T=a}}e.current=t,ct=2}}function Vf(){if(ct===2){ct=0;var e=en,t=vi,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=H.T,H.T=null;var i=I.p;I.p=2;var l=Be;Be|=4;try{yf(e,t.alternate,t)}finally{Be=l,I.p=i,H.T=a}}ct=3}}function Xf(){if(ct===4||ct===3){ct=0,Fr();var e=en,t=vi,a=Ma,i=Tf;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?ct=5:(ct=0,vi=en=null,Qf(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(Pa=null),Qs(a),t=t.stateNode,te&&typeof te.onCommitFiberRoot=="function")try{te.onCommitFiberRoot(E,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=H.T,l=I.p,I.p=2,H.T=null;try{for(var o=e.onRecoverableError,u=0;u<i.length;u++){var x=i[u];o(x.value,{componentStack:x.stack})}}finally{H.T=t,I.p=l}}(Ma&3)!==0&&Pl(),ua(e),l=e.pendingLanes,(a&261930)!==0&&(l&42)!==0?e===Nc?jr++:(jr=0,Nc=e):jr=0,wr(0)}}function Qf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ar(t)))}function Pl(){return Gf(),Vf(),Xf(),Zf()}function Zf(){if(ct!==5)return!1;var e=en,t=zc;zc=0;var a=Qs(Ma),i=H.T,l=I.p;try{I.p=32>a?32:a,H.T=null,a=Cc,Cc=null;var o=en,u=Ma;if(ct=0,vi=en=null,Ma=0,(Be&6)!==0)throw Error(c(331));var x=Be;if(Be|=4,_f(o.current),zf(o,o.current,u,a),Be=x,wr(0,!1),te&&typeof te.onPostCommitFiberRoot=="function")try{te.onPostCommitFiberRoot(E,o)}catch{}return!0}finally{I.p=l,H.T=i,Qf(e,t)}}function Wf(e,t,a){t=Qt(a,t),t=rc(e.stateNode,t,2),e=Za(e,t,2),e!==null&&($i(e,2),ua(e))}function qe(e,t,a){if(e.tag===3)Wf(e,e,a);else for(;t!==null;){if(t.tag===3){Wf(t,e,a);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Pa===null||!Pa.has(i))){e=Qt(a,e),a=Wp(2),i=Za(t,a,2),i!==null&&(Kp(a,i,t,e),$i(i,2),ua(i));break}}t=t.return}}function Rc(e,t,a){var i=e.pingCache;if(i===null){i=e.pingCache=new Sm;var l=new Set;i.set(t,l)}else l=i.get(t),l===void 0&&(l=new Set,i.set(t,l));l.has(a)||(wc=!0,l.add(a),e=_m.bind(null,e,t,a),t.then(e,e))}function _m(e,t,a){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Qe===e&&(Ne&a)===a&&(et===4||et===3&&(Ne&62914560)===Ne&&300>vt()-Zl?(Be&2)===0&&ji(e,0):Sc|=a,bi===Ne&&(bi=0)),ua(e)}function Kf(e,t){t===0&&(t=$d()),e=jn(e,t),e!==null&&($i(e,t),ua(e))}function Em(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Kf(e,a)}function Rm(e,t){var a=0;switch(e.tag){case 31:case 13:var i=e.stateNode,l=e.memoizedState;l!==null&&(a=l.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(c(314))}i!==null&&i.delete(t),Kf(e,a)}function Tm(e,t){return pn(e,t)}var es=null,Si=null,Tc=!1,ts=!1,Ac=!1,an=0;function ua(e){e!==Si&&e.next===null&&(Si===null?es=Si=e:Si=Si.next=e),ts=!0,Tc||(Tc=!0,Mm())}function wr(e,t){if(!Ac&&ts){Ac=!0;do for(var a=!1,i=es;i!==null;){if(e!==0){var l=i.pendingLanes;if(l===0)var o=0;else{var u=i.suspendedLanes,x=i.pingedLanes;o=(1<<31-He(42|e)+1)-1,o&=l&~(u&~x),o=o&201326741?o&201326741|1:o?o|2:0}o!==0&&(a=!0,Pf(i,o))}else o=Ne,o=rl(i,i===Qe?o:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(o&3)===0||qi(i,o)||(a=!0,Pf(i,o));i=i.next}while(a);Ac=!1}}function Am(){Jf()}function Jf(){ts=Tc=!1;var e=0;an!==0&&Gm()&&(e=an);for(var t=vt(),a=null,i=es;i!==null;){var l=i.next,o=If(i,t);o===0?(i.next=null,a===null?es=l:a.next=l,l===null&&(Si=a)):(a=i,(e!==0||(o&3)!==0)&&(ts=!0)),i=l}ct!==0&&ct!==5||wr(e),an!==0&&(an=0)}function If(e,t){for(var a=e.suspendedLanes,i=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes&-62914561;0<o;){var u=31-He(o),x=1<<u,w=l[u];w===-1?((x&a)===0||(x&i)!==0)&&(l[u]=r0(x,t)):w<=t&&(e.expiredLanes|=x),o&=~x}if(t=Qe,a=Ne,a=rl(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,a===0||e===t&&(Ye===2||Ye===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&qn(i),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||qi(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(i!==null&&qn(i),Qs(a)){case 2:case 8:a=tl;break;case 32:a=$n;break;case 268435456:a=al;break;default:a=$n}return i=Ff.bind(null,e),a=pn(a,i),e.callbackPriority=t,e.callbackNode=a,t}return i!==null&&i!==null&&qn(i),e.callbackPriority=2,e.callbackNode=null,2}function Ff(e,t){if(ct!==0&&ct!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Pl()&&e.callbackNode!==a)return null;var i=Ne;return i=rl(e,e===Qe?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(Mf(e,i,t),If(e,vt()),e.callbackNode!=null&&e.callbackNode===a?Ff.bind(null,e):null)}function Pf(e,t){if(Pl())return null;Mf(e,t,!0)}function Mm(){Xm(function(){(Be&6)!==0?pn(el,Am):Jf()})}function Mc(){if(an===0){var e=oi;e===0&&(e=hn,hn<<=1,(hn&261888)===0&&(hn=256)),an=e}return an}function eh(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:cl(""+e)}function th(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function Dm(e,t,a,i,l){if(t==="submit"&&a&&a.stateNode===l){var o=eh((l[kt]||null).action),u=i.submitter;u&&(t=(t=u[kt]||null)?eh(t.formAction):u.getAttribute("formAction"),t!==null&&(o=t,u=null));var x=new fl("action","action",null,i,l);e.push({event:x,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(an!==0){var w=u?th(l,u):new FormData(l);Po(a,{pending:!0,data:w,method:l.method,action:o},null,w)}}else typeof o=="function"&&(x.preventDefault(),w=u?th(l,u):new FormData(l),Po(a,{pending:!0,data:w,method:l.method,action:o},o,w))},currentTarget:l}]})}}for(var Dc=0;Dc<mo.length;Dc++){var Bc=mo[Dc],Bm=Bc.toLowerCase(),Om=Bc[0].toUpperCase()+Bc.slice(1);ta(Bm,"on"+Om)}ta(Tu,"onAnimationEnd"),ta(Au,"onAnimationIteration"),ta(Mu,"onAnimationStart"),ta("dblclick","onDoubleClick"),ta("focusin","onFocus"),ta("focusout","onBlur"),ta(F0,"onTransitionRun"),ta(P0,"onTransitionStart"),ta(em,"onTransitionCancel"),ta(Du,"onTransitionEnd"),Wn("onMouseEnter",["mouseout","mouseover"]),Wn("onMouseLeave",["mouseout","mouseover"]),Wn("onPointerEnter",["pointerout","pointerover"]),Wn("onPointerLeave",["pointerout","pointerover"]),xn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),xn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),xn("onBeforeInput",["compositionend","keypress","textInput","paste"]),xn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),xn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),xn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Sr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Um=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Sr));function ah(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var i=e[a],l=i.event;i=i.listeners;e:{var o=void 0;if(t)for(var u=i.length-1;0<=u;u--){var x=i[u],w=x.instance,O=x.currentTarget;if(x=x.listener,w!==o&&l.isPropagationStopped())break e;o=x,l.currentTarget=O;try{o(l)}catch(V){ml(V)}l.currentTarget=null,o=w}else for(u=0;u<i.length;u++){if(x=i[u],w=x.instance,O=x.currentTarget,x=x.listener,w!==o&&l.isPropagationStopped())break e;o=x,l.currentTarget=O;try{o(l)}catch(V){ml(V)}l.currentTarget=null,o=w}}}}function Ce(e,t){var a=t[Zs];a===void 0&&(a=t[Zs]=new Set);var i=e+"__bubble";a.has(i)||(nh(t,e,2,!1),a.add(i))}function Oc(e,t,a){var i=0;t&&(i|=4),nh(a,e,i,t)}var as="_reactListening"+Math.random().toString(36).slice(2);function Uc(e){if(!e[as]){e[as]=!0,Kd.forEach(function(a){a!=="selectionchange"&&(Um.has(a)||Oc(a,!1,e),Oc(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[as]||(t[as]=!0,Oc("selectionchange",!1,t))}}function nh(e,t,a,i){switch(Ah(t)){case 2:var l=ux;break;case 8:l=px;break;default:l=Fc}a=l.bind(null,t,a,e),l=void 0,!ao||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),i?l!==void 0?e.addEventListener(t,a,{capture:!0,passive:l}):e.addEventListener(t,a,!0):l!==void 0?e.addEventListener(t,a,{passive:l}):e.addEventListener(t,a,!1)}function Lc(e,t,a,i,l){var o=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var u=i.tag;if(u===3||u===4){var x=i.stateNode.containerInfo;if(x===l)break;if(u===4)for(u=i.return;u!==null;){var w=u.tag;if((w===3||w===4)&&u.stateNode.containerInfo===l)return;u=u.return}for(;x!==null;){if(u=Xn(x),u===null)return;if(w=u.tag,w===5||w===6||w===26||w===27){i=o=u;continue e}x=x.parentNode}}i=i.return}su(function(){var O=o,V=eo(a),Z=[];e:{var L=Bu.get(e);if(L!==void 0){var Y=fl,se=e;switch(e){case"keypress":if(ul(a)===0)break e;case"keydown":case"keyup":Y=R0;break;case"focusin":se="focus",Y=lo;break;case"focusout":se="blur",Y=lo;break;case"beforeblur":case"afterblur":Y=lo;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Y=du;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Y=y0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Y=M0;break;case Tu:case Au:case Mu:Y=j0;break;case Du:Y=B0;break;case"scroll":case"scrollend":Y=m0;break;case"wheel":Y=U0;break;case"copy":case"cut":case"paste":Y=S0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Y=pu;break;case"toggle":case"beforetoggle":Y=H0}var me=(t&4)!==0,Ve=!me&&(e==="scroll"||e==="scrollend"),R=me?L!==null?L+"Capture":null:L;me=[];for(var N=O,B;N!==null;){var X=N;if(B=X.stateNode,X=X.tag,X!==5&&X!==26&&X!==27||B===null||R===null||(X=Xi(N,R),X!=null&&me.push(kr(N,X,B))),Ve)break;N=N.return}0<me.length&&(L=new Y(L,se,null,a,V),Z.push({event:L,listeners:me}))}}if((t&7)===0){e:{if(L=e==="mouseover"||e==="pointerover",Y=e==="mouseout"||e==="pointerout",L&&a!==Ps&&(se=a.relatedTarget||a.fromElement)&&(Xn(se)||se[Vn]))break e;if((Y||L)&&(L=V.window===V?V:(L=V.ownerDocument)?L.defaultView||L.parentWindow:window,Y?(se=a.relatedTarget||a.toElement,Y=O,se=se?Xn(se):null,se!==null&&(Ve=p(se),me=se.tag,se!==Ve||me!==5&&me!==27&&me!==6)&&(se=null)):(Y=null,se=O),Y!==se)){if(me=du,X="onMouseLeave",R="onMouseEnter",N="mouse",(e==="pointerout"||e==="pointerover")&&(me=pu,X="onPointerLeave",R="onPointerEnter",N="pointer"),Ve=Y==null?L:Vi(Y),B=se==null?L:Vi(se),L=new me(X,N+"leave",Y,a,V),L.target=Ve,L.relatedTarget=B,X=null,Xn(V)===O&&(me=new me(R,N+"enter",se,a,V),me.target=B,me.relatedTarget=Ve,X=me),Ve=X,Y&&se)t:{for(me=Lm,R=Y,N=se,B=0,X=R;X;X=me(X))B++;X=0;for(var ge=N;ge;ge=me(ge))X++;for(;0<B-X;)R=me(R),B--;for(;0<X-B;)N=me(N),X--;for(;B--;){if(R===N||N!==null&&R===N.alternate){me=R;break t}R=me(R),N=me(N)}me=null}else me=null;Y!==null&&ih(Z,L,Y,me,!1),se!==null&&Ve!==null&&ih(Z,Ve,se,me,!0)}}e:{if(L=O?Vi(O):window,Y=L.nodeName&&L.nodeName.toLowerCase(),Y==="select"||Y==="input"&&L.type==="file")var Me=vu;else if(yu(L))if(ju)Me=K0;else{Me=Z0;var ce=Q0}else Y=L.nodeName,!Y||Y.toLowerCase()!=="input"||L.type!=="checkbox"&&L.type!=="radio"?O&&Fs(O.elementType)&&(Me=vu):Me=W0;if(Me&&(Me=Me(e,O))){bu(Z,Me,a,V);break e}ce&&ce(e,L,O),e==="focusout"&&O&&L.type==="number"&&O.memoizedProps.value!=null&&Is(L,"number",L.value)}switch(ce=O?Vi(O):window,e){case"focusin":(yu(ce)||ce.contentEditable==="true")&&(ei=ce,fo=O,Pi=null);break;case"focusout":Pi=fo=ei=null;break;case"mousedown":ho=!0;break;case"contextmenu":case"mouseup":case"dragend":ho=!1,Eu(Z,a,V);break;case"selectionchange":if(I0)break;case"keydown":case"keyup":Eu(Z,a,V)}var ke;if(oo)e:{switch(e){case"compositionstart":var _e="onCompositionStart";break e;case"compositionend":_e="onCompositionEnd";break e;case"compositionupdate":_e="onCompositionUpdate";break e}_e=void 0}else Pn?mu(e,a)&&(_e="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(_e="onCompositionStart");_e&&(fu&&a.locale!=="ko"&&(Pn||_e!=="onCompositionStart"?_e==="onCompositionEnd"&&Pn&&(ke=ou()):(Ya=V,no="value"in Ya?Ya.value:Ya.textContent,Pn=!0)),ce=ns(O,_e),0<ce.length&&(_e=new uu(_e,e,null,a,V),Z.push({event:_e,listeners:ce}),ke?_e.data=ke:(ke=xu(a),ke!==null&&(_e.data=ke)))),(ke=q0?$0(e,a):G0(e,a))&&(_e=ns(O,"onBeforeInput"),0<_e.length&&(ce=new uu("onBeforeInput","beforeinput",null,a,V),Z.push({event:ce,listeners:_e}),ce.data=ke)),Dm(Z,e,O,a,V)}ah(Z,t)})}function kr(e,t,a){return{instance:e,listener:t,currentTarget:a}}function ns(e,t){for(var a=t+"Capture",i=[];e!==null;){var l=e,o=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||o===null||(l=Xi(e,a),l!=null&&i.unshift(kr(e,l,o)),l=Xi(e,t),l!=null&&i.push(kr(e,l,o))),e.tag===3)return i;e=e.return}return[]}function Lm(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function ih(e,t,a,i,l){for(var o=t._reactName,u=[];a!==null&&a!==i;){var x=a,w=x.alternate,O=x.stateNode;if(x=x.tag,w!==null&&w===i)break;x!==5&&x!==26&&x!==27||O===null||(w=O,l?(O=Xi(a,o),O!=null&&u.unshift(kr(a,O,w))):l||(O=Xi(a,o),O!=null&&u.push(kr(a,O,w)))),a=a.return}u.length!==0&&e.push({event:t,listeners:u})}var Hm=/\r\n?/g,Ym=/\u0000|\uFFFD/g;function rh(e){return(typeof e=="string"?e:""+e).replace(Hm,`
`).replace(Ym,"")}function lh(e,t){return t=rh(t),rh(e)===t}function Ge(e,t,a,i,l,o){switch(a){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||Jn(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&Jn(e,""+i);break;case"className":sl(e,"class",i);break;case"tabIndex":sl(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":sl(e,a,i);break;case"style":ru(e,i,o);break;case"data":if(t!=="object"){sl(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(a);break}i=cl(""+i),e.setAttribute(a,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof o=="function"&&(a==="formAction"?(t!=="input"&&Ge(e,t,"name",l.name,l,null),Ge(e,t,"formEncType",l.formEncType,l,null),Ge(e,t,"formMethod",l.formMethod,l,null),Ge(e,t,"formTarget",l.formTarget,l,null)):(Ge(e,t,"encType",l.encType,l,null),Ge(e,t,"method",l.method,l,null),Ge(e,t,"target",l.target,l,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(a);break}i=cl(""+i),e.setAttribute(a,i);break;case"onClick":i!=null&&(e.onclick=ya);break;case"onScroll":i!=null&&Ce("scroll",e);break;case"onScrollEnd":i!=null&&Ce("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(c(61));if(a=i.__html,a!=null){if(l.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}a=cl(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,""+i):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":i===!0?e.setAttribute(a,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,i):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(a,i):e.removeAttribute(a);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(a):e.setAttribute(a,i);break;case"popover":Ce("beforetoggle",e),Ce("toggle",e),ll(e,"popover",i);break;case"xlinkActuate":xa(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":xa(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":xa(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":xa(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":xa(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":xa(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":xa(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":xa(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":xa(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":ll(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=h0.get(a)||a,ll(e,a,i))}}function Hc(e,t,a,i,l,o){switch(a){case"style":ru(e,i,o);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(c(61));if(a=i.__html,a!=null){if(l.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"children":typeof i=="string"?Jn(e,i):(typeof i=="number"||typeof i=="bigint")&&Jn(e,""+i);break;case"onScroll":i!=null&&Ce("scroll",e);break;case"onScrollEnd":i!=null&&Ce("scrollend",e);break;case"onClick":i!=null&&(e.onclick=ya);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Jd.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(l=a.endsWith("Capture"),t=a.slice(2,l?a.length-7:void 0),o=e[kt]||null,o=o!=null?o[a]:null,typeof o=="function"&&e.removeEventListener(t,o,l),typeof i=="function")){typeof o!="function"&&o!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,i,l);break e}a in e?e[a]=i:i===!0?e.setAttribute(a,""):ll(e,a,i)}}}function yt(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ce("error",e),Ce("load",e);var i=!1,l=!1,o;for(o in a)if(a.hasOwnProperty(o)){var u=a[o];if(u!=null)switch(o){case"src":i=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Ge(e,t,o,u,a,null)}}l&&Ge(e,t,"srcSet",a.srcSet,a,null),i&&Ge(e,t,"src",a.src,a,null);return;case"input":Ce("invalid",e);var x=o=u=l=null,w=null,O=null;for(i in a)if(a.hasOwnProperty(i)){var V=a[i];if(V!=null)switch(i){case"name":l=V;break;case"type":u=V;break;case"checked":w=V;break;case"defaultChecked":O=V;break;case"value":o=V;break;case"defaultValue":x=V;break;case"children":case"dangerouslySetInnerHTML":if(V!=null)throw Error(c(137,t));break;default:Ge(e,t,i,V,a,null)}}tu(e,o,x,w,O,u,l,!1);return;case"select":Ce("invalid",e),i=u=o=null;for(l in a)if(a.hasOwnProperty(l)&&(x=a[l],x!=null))switch(l){case"value":o=x;break;case"defaultValue":u=x;break;case"multiple":i=x;default:Ge(e,t,l,x,a,null)}t=o,a=u,e.multiple=!!i,t!=null?Kn(e,!!i,t,!1):a!=null&&Kn(e,!!i,a,!0);return;case"textarea":Ce("invalid",e),o=l=i=null;for(u in a)if(a.hasOwnProperty(u)&&(x=a[u],x!=null))switch(u){case"value":i=x;break;case"defaultValue":l=x;break;case"children":o=x;break;case"dangerouslySetInnerHTML":if(x!=null)throw Error(c(91));break;default:Ge(e,t,u,x,a,null)}nu(e,i,l,o);return;case"option":for(w in a)a.hasOwnProperty(w)&&(i=a[w],i!=null)&&(w==="selected"?e.selected=i&&typeof i!="function"&&typeof i!="symbol":Ge(e,t,w,i,a,null));return;case"dialog":Ce("beforetoggle",e),Ce("toggle",e),Ce("cancel",e),Ce("close",e);break;case"iframe":case"object":Ce("load",e);break;case"video":case"audio":for(i=0;i<Sr.length;i++)Ce(Sr[i],e);break;case"image":Ce("error",e),Ce("load",e);break;case"details":Ce("toggle",e);break;case"embed":case"source":case"link":Ce("error",e),Ce("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(O in a)if(a.hasOwnProperty(O)&&(i=a[O],i!=null))switch(O){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Ge(e,t,O,i,a,null)}return;default:if(Fs(t)){for(V in a)a.hasOwnProperty(V)&&(i=a[V],i!==void 0&&Hc(e,t,V,i,a,void 0));return}}for(x in a)a.hasOwnProperty(x)&&(i=a[x],i!=null&&Ge(e,t,x,i,a,null))}function qm(e,t,a,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,o=null,u=null,x=null,w=null,O=null,V=null;for(Y in a){var Z=a[Y];if(a.hasOwnProperty(Y)&&Z!=null)switch(Y){case"checked":break;case"value":break;case"defaultValue":w=Z;default:i.hasOwnProperty(Y)||Ge(e,t,Y,null,i,Z)}}for(var L in i){var Y=i[L];if(Z=a[L],i.hasOwnProperty(L)&&(Y!=null||Z!=null))switch(L){case"type":o=Y;break;case"name":l=Y;break;case"checked":O=Y;break;case"defaultChecked":V=Y;break;case"value":u=Y;break;case"defaultValue":x=Y;break;case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(c(137,t));break;default:Y!==Z&&Ge(e,t,L,Y,i,Z)}}Js(e,u,x,w,O,V,o,l);return;case"select":Y=u=x=L=null;for(o in a)if(w=a[o],a.hasOwnProperty(o)&&w!=null)switch(o){case"value":break;case"multiple":Y=w;default:i.hasOwnProperty(o)||Ge(e,t,o,null,i,w)}for(l in i)if(o=i[l],w=a[l],i.hasOwnProperty(l)&&(o!=null||w!=null))switch(l){case"value":L=o;break;case"defaultValue":x=o;break;case"multiple":u=o;default:o!==w&&Ge(e,t,l,o,i,w)}t=x,a=u,i=Y,L!=null?Kn(e,!!a,L,!1):!!i!=!!a&&(t!=null?Kn(e,!!a,t,!0):Kn(e,!!a,a?[]:"",!1));return;case"textarea":Y=L=null;for(x in a)if(l=a[x],a.hasOwnProperty(x)&&l!=null&&!i.hasOwnProperty(x))switch(x){case"value":break;case"children":break;default:Ge(e,t,x,null,i,l)}for(u in i)if(l=i[u],o=a[u],i.hasOwnProperty(u)&&(l!=null||o!=null))switch(u){case"value":L=l;break;case"defaultValue":Y=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(c(91));break;default:l!==o&&Ge(e,t,u,l,i,o)}au(e,L,Y);return;case"option":for(var se in a)L=a[se],a.hasOwnProperty(se)&&L!=null&&!i.hasOwnProperty(se)&&(se==="selected"?e.selected=!1:Ge(e,t,se,null,i,L));for(w in i)L=i[w],Y=a[w],i.hasOwnProperty(w)&&L!==Y&&(L!=null||Y!=null)&&(w==="selected"?e.selected=L&&typeof L!="function"&&typeof L!="symbol":Ge(e,t,w,L,i,Y));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var me in a)L=a[me],a.hasOwnProperty(me)&&L!=null&&!i.hasOwnProperty(me)&&Ge(e,t,me,null,i,L);for(O in i)if(L=i[O],Y=a[O],i.hasOwnProperty(O)&&L!==Y&&(L!=null||Y!=null))switch(O){case"children":case"dangerouslySetInnerHTML":if(L!=null)throw Error(c(137,t));break;default:Ge(e,t,O,L,i,Y)}return;default:if(Fs(t)){for(var Ve in a)L=a[Ve],a.hasOwnProperty(Ve)&&L!==void 0&&!i.hasOwnProperty(Ve)&&Hc(e,t,Ve,void 0,i,L);for(V in i)L=i[V],Y=a[V],!i.hasOwnProperty(V)||L===Y||L===void 0&&Y===void 0||Hc(e,t,V,L,i,Y);return}}for(var R in a)L=a[R],a.hasOwnProperty(R)&&L!=null&&!i.hasOwnProperty(R)&&Ge(e,t,R,null,i,L);for(Z in i)L=i[Z],Y=a[Z],!i.hasOwnProperty(Z)||L===Y||L==null&&Y==null||Ge(e,t,Z,L,i,Y)}function sh(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function $m(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),i=0;i<a.length;i++){var l=a[i],o=l.transferSize,u=l.initiatorType,x=l.duration;if(o&&x&&sh(u)){for(u=0,x=l.responseEnd,i+=1;i<a.length;i++){var w=a[i],O=w.startTime;if(O>x)break;var V=w.transferSize,Z=w.initiatorType;V&&sh(Z)&&(w=w.responseEnd,u+=V*(w<x?1:(x-O)/(w-O)))}if(--i,t+=8*(o+u)/(l.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Yc=null,qc=null;function is(e){return e.nodeType===9?e:e.ownerDocument}function oh(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ch(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function $c(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Gc=null;function Gm(){var e=window.event;return e&&e.type==="popstate"?e===Gc?!1:(Gc=e,!0):(Gc=null,!1)}var dh=typeof setTimeout=="function"?setTimeout:void 0,Vm=typeof clearTimeout=="function"?clearTimeout:void 0,uh=typeof Promise=="function"?Promise:void 0,Xm=typeof queueMicrotask=="function"?queueMicrotask:typeof uh<"u"?function(e){return uh.resolve(null).then(e).catch(Qm)}:dh;function Qm(e){setTimeout(function(){throw e})}function nn(e){return e==="head"}function ph(e,t){var a=t,i=0;do{var l=a.nextSibling;if(e.removeChild(a),l&&l.nodeType===8)if(a=l.data,a==="/$"||a==="/&"){if(i===0){e.removeChild(l),Ni(t);return}i--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")i++;else if(a==="html")zr(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,zr(a);for(var o=a.firstChild;o;){var u=o.nextSibling,x=o.nodeName;o[Gi]||x==="SCRIPT"||x==="STYLE"||x==="LINK"&&o.rel.toLowerCase()==="stylesheet"||a.removeChild(o),o=u}}else a==="body"&&zr(e.ownerDocument.body);a=l}while(a);Ni(t)}function fh(e,t){var a=e;e=0;do{var i=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),i&&i.nodeType===8)if(a=i.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=i}while(a)}function Vc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Vc(a),Ws(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Zm(e,t,a,i){for(;e.nodeType===1;){var l=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Gi])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(o=e.getAttribute("rel"),o==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(o!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(o=e.getAttribute("src"),(o!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&o&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var o=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===o)return e}else return e;if(e=It(e.nextSibling),e===null)break}return null}function Wm(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=It(e.nextSibling),e===null))return null;return e}function hh(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=It(e.nextSibling),e===null))return null;return e}function Xc(e){return e.data==="$?"||e.data==="$~"}function Qc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Km(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var i=function(){t(),a.removeEventListener("DOMContentLoaded",i)};a.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function It(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Zc=null;function gh(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return It(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function mh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function xh(e,t,a){switch(t=is(a),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function zr(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ws(e)}var Ft=new Map,yh=new Set;function rs(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Da=I.d;I.d={f:Jm,r:Im,D:Fm,C:Pm,L:ex,m:tx,X:nx,S:ax,M:ix};function Jm(){var e=Da.f(),t=Jl();return e||t}function Im(e){var t=Qn(e);t!==null&&t.tag===5&&t.type==="form"?Dp(t):Da.r(e)}var ki=typeof document>"u"?null:document;function bh(e,t,a){var i=ki;if(i&&typeof t=="string"&&t){var l=Vt(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof a=="string"&&(l+='[crossorigin="'+a+'"]'),yh.has(l)||(yh.add(l),e={rel:e,crossOrigin:a,href:t},i.querySelector(l)===null&&(t=i.createElement("link"),yt(t,"link",e),ut(t),i.head.appendChild(t)))}}function Fm(e){Da.D(e),bh("dns-prefetch",e,null)}function Pm(e,t){Da.C(e,t),bh("preconnect",e,t)}function ex(e,t,a){Da.L(e,t,a);var i=ki;if(i&&e&&t){var l='link[rel="preload"][as="'+Vt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(l+='[imagesrcset="'+Vt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(l+='[imagesizes="'+Vt(a.imageSizes)+'"]')):l+='[href="'+Vt(e)+'"]';var o=l;switch(t){case"style":o=zi(e);break;case"script":o=Ci(e)}Ft.has(o)||(e=v({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Ft.set(o,e),i.querySelector(l)!==null||t==="style"&&i.querySelector(Cr(o))||t==="script"&&i.querySelector(Nr(o))||(t=i.createElement("link"),yt(t,"link",e),ut(t),i.head.appendChild(t)))}}function tx(e,t){Da.m(e,t);var a=ki;if(a&&e){var i=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+Vt(i)+'"][href="'+Vt(e)+'"]',o=l;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=Ci(e)}if(!Ft.has(o)&&(e=v({rel:"modulepreload",href:e},t),Ft.set(o,e),a.querySelector(l)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Nr(o)))return}i=a.createElement("link"),yt(i,"link",e),ut(i),a.head.appendChild(i)}}}function ax(e,t,a){Da.S(e,t,a);var i=ki;if(i&&e){var l=Zn(i).hoistableStyles,o=zi(e);t=t||"default";var u=l.get(o);if(!u){var x={loading:0,preload:null};if(u=i.querySelector(Cr(o)))x.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Ft.get(o))&&Wc(e,a);var w=u=i.createElement("link");ut(w),yt(w,"link",e),w._p=new Promise(function(O,V){w.onload=O,w.onerror=V}),w.addEventListener("load",function(){x.loading|=1}),w.addEventListener("error",function(){x.loading|=2}),x.loading|=4,ls(u,t,i)}u={type:"stylesheet",instance:u,count:1,state:x},l.set(o,u)}}}function nx(e,t){Da.X(e,t);var a=ki;if(a&&e){var i=Zn(a).hoistableScripts,l=Ci(e),o=i.get(l);o||(o=a.querySelector(Nr(l)),o||(e=v({src:e,async:!0},t),(t=Ft.get(l))&&Kc(e,t),o=a.createElement("script"),ut(o),yt(o,"link",e),a.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},i.set(l,o))}}function ix(e,t){Da.M(e,t);var a=ki;if(a&&e){var i=Zn(a).hoistableScripts,l=Ci(e),o=i.get(l);o||(o=a.querySelector(Nr(l)),o||(e=v({src:e,async:!0,type:"module"},t),(t=Ft.get(l))&&Kc(e,t),o=a.createElement("script"),ut(o),yt(o,"link",e),a.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},i.set(l,o))}}function vh(e,t,a,i){var l=(l=P.current)?rs(l):null;if(!l)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=zi(a.href),a=Zn(l).hoistableStyles,i=a.get(t),i||(i={type:"style",instance:null,count:0,state:null},a.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=zi(a.href);var o=Zn(l).hoistableStyles,u=o.get(e);if(u||(l=l.ownerDocument||l,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},o.set(e,u),(o=l.querySelector(Cr(e)))&&!o._p&&(u.instance=o,u.state.loading=5),Ft.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ft.set(e,a),o||rx(l,e,a,u.state))),t&&i===null)throw Error(c(528,""));return u}if(t&&i!==null)throw Error(c(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ci(a),a=Zn(l).hoistableScripts,i=a.get(t),i||(i={type:"script",instance:null,count:0,state:null},a.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function zi(e){return'href="'+Vt(e)+'"'}function Cr(e){return'link[rel="stylesheet"]['+e+"]"}function jh(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function rx(e,t,a,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),yt(t,"link",a),ut(t),e.head.appendChild(t))}function Ci(e){return'[src="'+Vt(e)+'"]'}function Nr(e){return"script[async]"+e}function wh(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Vt(a.href)+'"]');if(i)return t.instance=i,ut(i),i;var l=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),ut(i),yt(i,"style",l),ls(i,a.precedence,e),t.instance=i;case"stylesheet":l=zi(a.href);var o=e.querySelector(Cr(l));if(o)return t.state.loading|=4,t.instance=o,ut(o),o;i=jh(a),(l=Ft.get(l))&&Wc(i,l),o=(e.ownerDocument||e).createElement("link"),ut(o);var u=o;return u._p=new Promise(function(x,w){u.onload=x,u.onerror=w}),yt(o,"link",i),t.state.loading|=4,ls(o,a.precedence,e),t.instance=o;case"script":return o=Ci(a.src),(l=e.querySelector(Nr(o)))?(t.instance=l,ut(l),l):(i=a,(l=Ft.get(o))&&(i=v({},a),Kc(i,l)),e=e.ownerDocument||e,l=e.createElement("script"),ut(l),yt(l,"link",i),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,ls(i,a.precedence,e));return t.instance}function ls(e,t,a){for(var i=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=i.length?i[i.length-1]:null,o=l,u=0;u<i.length;u++){var x=i[u];if(x.dataset.precedence===t)o=x;else if(o!==l)break}o?o.parentNode.insertBefore(e,o.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Wc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Kc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var ss=null;function Sh(e,t,a){if(ss===null){var i=new Map,l=ss=new Map;l.set(a,i)}else l=ss,i=l.get(a),i||(i=new Map,l.set(a,i));if(i.has(e))return i;for(i.set(e,null),a=a.getElementsByTagName(e),l=0;l<a.length;l++){var o=a[l];if(!(o[Gi]||o[ht]||e==="link"&&o.getAttribute("rel")==="stylesheet")&&o.namespaceURI!=="http://www.w3.org/2000/svg"){var u=o.getAttribute(t)||"";u=e+u;var x=i.get(u);x?x.push(o):i.set(u,[o])}}return i}function kh(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function lx(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function zh(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function sx(e,t,a,i){if(a.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var l=zi(i.href),o=t.querySelector(Cr(l));if(o){t=o._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=os.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=o,ut(o);return}o=t.ownerDocument||t,i=jh(i),(l=Ft.get(l))&&Wc(i,l),o=o.createElement("link"),ut(o);var u=o;u._p=new Promise(function(x,w){u.onload=x,u.onerror=w}),yt(o,"link",i),a.instance=o}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=os.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Jc=0;function ox(e,t){return e.stylesheets&&e.count===0&&ds(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var i=setTimeout(function(){if(e.stylesheets&&ds(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4+t);0<e.imgBytes&&Jc===0&&(Jc=62500*$m());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ds(e,e.stylesheets),e.unsuspend)){var o=e.unsuspend;e.unsuspend=null,o()}},(e.imgBytes>Jc?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(l)}}:null}function os(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ds(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var cs=null;function ds(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,cs=new Map,t.forEach(cx,e),cs=null,os.call(e))}function cx(e,t){if(!(t.state.loading&4)){var a=cs.get(e);if(a)var i=a.get(null);else{a=new Map,cs.set(e,a);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<l.length;o++){var u=l[o];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(a.set(u.dataset.precedence,u),i=u)}i&&a.set(null,i)}l=t.instance,u=l.getAttribute("data-precedence"),o=a.get(u)||i,o===i&&a.set(null,l),a.set(u,l),this.count++,i=os.bind(this),l.addEventListener("load",i),l.addEventListener("error",i),o?o.parentNode.insertBefore(l,o.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var _r={$$typeof:K,Provider:null,Consumer:null,_currentValue:ue,_currentValue2:ue,_threadCount:0};function dx(e,t,a,i,l,o,u,x,w){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Vs(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vs(0),this.hiddenUpdates=Vs(null),this.identifierPrefix=i,this.onUncaughtError=l,this.onCaughtError=o,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=w,this.incompleteTransitions=new Map}function Ch(e,t,a,i,l,o,u,x,w,O,V,Z){return e=new dx(e,t,a,u,w,O,V,Z,x),t=1,o===!0&&(t|=24),o=Dt(3,null,null,t),e.current=o,o.stateNode=e,t=Eo(),t.refCount++,e.pooledCache=t,t.refCount++,o.memoizedState={element:i,isDehydrated:a,cache:t},Mo(o),e}function Nh(e){return e?(e=ni,e):ni}function _h(e,t,a,i,l,o){l=Nh(l),i.context===null?i.context=l:i.pendingContext=l,i=Qa(t),i.payload={element:a},o=o===void 0?null:o,o!==null&&(i.callback=o),a=Za(e,i,t),a!==null&&(Rt(a,e,t),lr(a,e,t))}function Eh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Ic(e,t){Eh(e,t),(e=e.alternate)&&Eh(e,t)}function Rh(e){if(e.tag===13||e.tag===31){var t=jn(e,67108864);t!==null&&Rt(t,e,67108864),Ic(e,67108864)}}function Th(e){if(e.tag===13||e.tag===31){var t=Ht();t=Xs(t);var a=jn(e,t);a!==null&&Rt(a,e,t),Ic(e,t)}}var us=!0;function ux(e,t,a,i){var l=H.T;H.T=null;var o=I.p;try{I.p=2,Fc(e,t,a,i)}finally{I.p=o,H.T=l}}function px(e,t,a,i){var l=H.T;H.T=null;var o=I.p;try{I.p=8,Fc(e,t,a,i)}finally{I.p=o,H.T=l}}function Fc(e,t,a,i){if(us){var l=Pc(i);if(l===null)Lc(e,t,i,ps,a),Mh(e,i);else if(hx(l,e,t,a,i))i.stopPropagation();else if(Mh(e,i),t&4&&-1<fx.indexOf(e)){for(;l!==null;){var o=Qn(l);if(o!==null)switch(o.tag){case 3:if(o=o.stateNode,o.current.memoizedState.isDehydrated){var u=mn(o.pendingLanes);if(u!==0){var x=o;for(x.pendingLanes|=2,x.entangledLanes|=2;u;){var w=1<<31-He(u);x.entanglements[1]|=w,u&=~w}ua(o),(Be&6)===0&&(Wl=vt()+500,wr(0))}}break;case 31:case 13:x=jn(o,2),x!==null&&Rt(x,o,2),Jl(),Ic(o,2)}if(o=Pc(i),o===null&&Lc(e,t,i,ps,a),o===l)break;l=o}l!==null&&i.stopPropagation()}else Lc(e,t,i,null,a)}}function Pc(e){return e=eo(e),ed(e)}var ps=null;function ed(e){if(ps=null,e=Xn(e),e!==null){var t=p(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=g(t),e!==null)return e;e=null}else if(a===31){if(e=y(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return ps=e,null}function Ah(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Pr()){case el:return 2;case tl:return 8;case $n:case fn:return 32;case al:return 268435456;default:return 32}default:return 32}}var td=!1,rn=null,ln=null,sn=null,Er=new Map,Rr=new Map,on=[],fx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Mh(e,t){switch(e){case"focusin":case"focusout":rn=null;break;case"dragenter":case"dragleave":ln=null;break;case"mouseover":case"mouseout":sn=null;break;case"pointerover":case"pointerout":Er.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rr.delete(t.pointerId)}}function Tr(e,t,a,i,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:a,eventSystemFlags:i,nativeEvent:o,targetContainers:[l]},t!==null&&(t=Qn(t),t!==null&&Rh(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function hx(e,t,a,i,l){switch(t){case"focusin":return rn=Tr(rn,e,t,a,i,l),!0;case"dragenter":return ln=Tr(ln,e,t,a,i,l),!0;case"mouseover":return sn=Tr(sn,e,t,a,i,l),!0;case"pointerover":var o=l.pointerId;return Er.set(o,Tr(Er.get(o)||null,e,t,a,i,l)),!0;case"gotpointercapture":return o=l.pointerId,Rr.set(o,Tr(Rr.get(o)||null,e,t,a,i,l)),!0}return!1}function Dh(e){var t=Xn(e.target);if(t!==null){var a=p(t);if(a!==null){if(t=a.tag,t===13){if(t=g(a),t!==null){e.blockedOn=t,Zd(e.priority,function(){Th(a)});return}}else if(t===31){if(t=y(a),t!==null){e.blockedOn=t,Zd(e.priority,function(){Th(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function fs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Pc(e.nativeEvent);if(a===null){a=e.nativeEvent;var i=new a.constructor(a.type,a);Ps=i,a.target.dispatchEvent(i),Ps=null}else return t=Qn(a),t!==null&&Rh(t),e.blockedOn=a,!1;t.shift()}return!0}function Bh(e,t,a){fs(e)&&a.delete(t)}function gx(){td=!1,rn!==null&&fs(rn)&&(rn=null),ln!==null&&fs(ln)&&(ln=null),sn!==null&&fs(sn)&&(sn=null),Er.forEach(Bh),Rr.forEach(Bh)}function hs(e,t){e.blockedOn===t&&(e.blockedOn=null,td||(td=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,gx)))}var gs=null;function Oh(e){gs!==e&&(gs=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){gs===e&&(gs=null);for(var t=0;t<e.length;t+=3){var a=e[t],i=e[t+1],l=e[t+2];if(typeof i!="function"){if(ed(i||a)===null)continue;break}var o=Qn(a);o!==null&&(e.splice(t,3),t-=3,Po(o,{pending:!0,data:l,method:a.method,action:i},i,l))}}))}function Ni(e){function t(w){return hs(w,e)}rn!==null&&hs(rn,e),ln!==null&&hs(ln,e),sn!==null&&hs(sn,e),Er.forEach(t),Rr.forEach(t);for(var a=0;a<on.length;a++){var i=on[a];i.blockedOn===e&&(i.blockedOn=null)}for(;0<on.length&&(a=on[0],a.blockedOn===null);)Dh(a),a.blockedOn===null&&on.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(i=0;i<a.length;i+=3){var l=a[i],o=a[i+1],u=l[kt]||null;if(typeof o=="function")u||Oh(a);else if(u){var x=null;if(o&&o.hasAttribute("formAction")){if(l=o,u=o[kt]||null)x=u.formAction;else if(ed(l)!==null)continue}else x=u.action;typeof x=="function"?a[i+1]=x:(a.splice(i,3),i-=3),Oh(a)}}}function Uh(){function e(o){o.canIntercept&&o.info==="react-transition"&&o.intercept({handler:function(){return new Promise(function(u){return l=u})},focusReset:"manual",scroll:"manual"})}function t(){l!==null&&(l(),l=null),i||setTimeout(a,20)}function a(){if(!i&&!navigation.transition){var o=navigation.currentEntry;o&&o.url!=null&&navigation.navigate(o.url,{state:o.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),l!==null&&(l(),l=null)}}}function ad(e){this._internalRoot=e}ms.prototype.render=ad.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var a=t.current,i=Ht();_h(a,i,e,t,null,null)},ms.prototype.unmount=ad.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;_h(e.current,2,null,e,null,null),Jl(),t[Vn]=null}};function ms(e){this._internalRoot=e}ms.prototype.unstable_scheduleHydration=function(e){if(e){var t=Qd();e={blockedOn:null,target:e,priority:t};for(var a=0;a<on.length&&t!==0&&t<on[a].priority;a++);on.splice(a,0,e),a===0&&Dh(e)}};var Lh=s.version;if(Lh!=="19.2.4")throw Error(c(527,Lh,"19.2.4"));I.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=m(t),e=e!==null?j(e):null,e=e===null?null:e.stateNode,e};var mx={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:H,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xs.isDisabled&&xs.supportsFiber)try{E=xs.inject(mx),te=xs}catch{}}return Mr.createRoot=function(e,t){if(!f(e))throw Error(c(299));var a=!1,i="",l=Vp,o=Xp,u=Qp;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(o=t.onCaughtError),t.onRecoverableError!==void 0&&(u=t.onRecoverableError)),t=Ch(e,1,!1,null,null,a,i,null,l,o,u,Uh),e[Vn]=t.current,Uc(e),new ad(t)},Mr.hydrateRoot=function(e,t,a){if(!f(e))throw Error(c(299));var i=!1,l="",o=Vp,u=Xp,x=Qp,w=null;return a!=null&&(a.unstable_strictMode===!0&&(i=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(o=a.onUncaughtError),a.onCaughtError!==void 0&&(u=a.onCaughtError),a.onRecoverableError!==void 0&&(x=a.onRecoverableError),a.formState!==void 0&&(w=a.formState)),t=Ch(e,1,!0,t,a??null,i,l,w,o,u,x,Uh),t.context=Nh(null),a=t.current,i=Ht(),i=Xs(i),l=Qa(i),l.callback=null,Za(a,l,i),a=i,t.current.lanes=a,$i(t,a),ua(t),e[Vn]=t.current,Uc(e),new ms(t)},Mr.version="19.2.4",Mr}var Wh;function Ex(){if(Wh)return rd.exports;Wh=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(s){console.error(s)}}return r(),rd.exports=_x(),rd.exports}var Rx=Ex();function Tx(r={}){const{nonce:s,onScriptLoadSuccess:d,onScriptLoadError:c}=r,[f,p]=h.useState(!1),g=h.useRef(d);g.current=d;const y=h.useRef(c);return y.current=c,h.useEffect(()=>{const b=document.createElement("script");return b.src="https://accounts.google.com/gsi/client",b.async=!0,b.defer=!0,b.nonce=s,b.onload=()=>{var m;p(!0),(m=g.current)===null||m===void 0||m.call(g)},b.onerror=()=>{var m;p(!1),(m=y.current)===null||m===void 0||m.call(y)},document.body.appendChild(b),()=>{document.body.removeChild(b)}},[s]),f}const yg=h.createContext(null);function Ax({clientId:r,nonce:s,onScriptLoadSuccess:d,onScriptLoadError:c,children:f}){const p=Tx({nonce:s,onScriptLoadSuccess:d,onScriptLoadError:c}),g=h.useMemo(()=>({clientId:r,scriptLoadedSuccessfully:p}),[r,p]);return On.createElement(yg.Provider,{value:g},f)}function Mx(){const r=h.useContext(yg);if(!r)throw new Error("Google OAuth components must be used within GoogleOAuthProvider");return r}function Dx({flow:r="implicit",scope:s="",onSuccess:d,onError:c,onNonOAuthError:f,overrideScope:p,state:g,...y}){const{clientId:b,scriptLoadedSuccessfully:m}=Mx(),j=h.useRef(),v=h.useRef(d);v.current=d;const k=h.useRef(c);k.current=c;const _=h.useRef(f);_.current=f,h.useEffect(()=>{var T,D;if(!m)return;const G=r==="implicit"?"initTokenClient":"initCodeClient",K=(D=(T=window?.google)===null||T===void 0?void 0:T.accounts)===null||D===void 0?void 0:D.oauth2[G]({client_id:b,scope:p?s:`openid profile email ${s}`,callback:q=>{var S,U;if(q.error)return(S=k.current)===null||S===void 0?void 0:S.call(k,q);(U=v.current)===null||U===void 0||U.call(v,q)},error_callback:q=>{var S;(S=_.current)===null||S===void 0||S.call(_,q)},state:g,...y});j.current=K},[b,m,r,s,g]);const A=h.useCallback(T=>{var D;return(D=j.current)===null||D===void 0?void 0:D.requestAccessToken(T)},[]),z=h.useCallback(()=>{var T;return(T=j.current)===null||T===void 0?void 0:T.requestCode()},[]);return r==="implicit"?A:z}var Kh="popstate";function Bx(r={}){function s(c,f){let{pathname:p,search:g,hash:y}=c.location;return md("",{pathname:p,search:g,hash:y},f.state&&f.state.usr||null,f.state&&f.state.key||"default")}function d(c,f){return typeof f=="string"?f:Lr(f)}return Ux(s,d,null,r)}function Ie(r,s){if(r===!1||r===null||typeof r>"u")throw new Error(s)}function Pt(r,s){if(!r){typeof console<"u"&&console.warn(s);try{throw new Error(s)}catch{}}}function Ox(){return Math.random().toString(36).substring(2,10)}function Jh(r,s){return{usr:r.state,key:r.key,idx:s}}function md(r,s,d=null,c){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof s=="string"?Di(s):s,state:d,key:s&&s.key||c||Ox()}}function Lr({pathname:r="/",search:s="",hash:d=""}){return s&&s!=="?"&&(r+=s.charAt(0)==="?"?s:"?"+s),d&&d!=="#"&&(r+=d.charAt(0)==="#"?d:"#"+d),r}function Di(r){let s={};if(r){let d=r.indexOf("#");d>=0&&(s.hash=r.substring(d),r=r.substring(0,d));let c=r.indexOf("?");c>=0&&(s.search=r.substring(c),r=r.substring(0,c)),r&&(s.pathname=r)}return s}function Ux(r,s,d,c={}){let{window:f=document.defaultView,v5Compat:p=!1}=c,g=f.history,y="POP",b=null,m=j();m==null&&(m=0,g.replaceState({...g.state,idx:m},""));function j(){return(g.state||{idx:null}).idx}function v(){y="POP";let T=j(),D=T==null?null:T-m;m=T,b&&b({action:y,location:z.location,delta:D})}function k(T,D){y="PUSH";let G=md(z.location,T,D);m=j()+1;let K=Jh(G,m),q=z.createHref(G);try{g.pushState(K,"",q)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;f.location.assign(q)}p&&b&&b({action:y,location:z.location,delta:1})}function _(T,D){y="REPLACE";let G=md(z.location,T,D);m=j();let K=Jh(G,m),q=z.createHref(G);g.replaceState(K,"",q),p&&b&&b({action:y,location:z.location,delta:0})}function A(T){return Lx(T)}let z={get action(){return y},get location(){return r(f,g)},listen(T){if(b)throw new Error("A history only accepts one active listener");return f.addEventListener(Kh,v),b=T,()=>{f.removeEventListener(Kh,v),b=null}},createHref(T){return s(f,T)},createURL:A,encodeLocation(T){let D=A(T);return{pathname:D.pathname,search:D.search,hash:D.hash}},push:k,replace:_,go(T){return g.go(T)}};return z}function Lx(r,s=!1){let d="http://localhost";typeof window<"u"&&(d=window.location.origin!=="null"?window.location.origin:window.location.href),Ie(d,"No window.location.(origin|href) available to create URL");let c=typeof r=="string"?r:Lr(r);return c=c.replace(/ $/,"%20"),!s&&c.startsWith("//")&&(c=d+c),new URL(c,d)}function bg(r,s,d="/"){return Hx(r,s,d,!1)}function Hx(r,s,d,c){let f=typeof s=="string"?Di(s):s,p=Ua(f.pathname||"/",d);if(p==null)return null;let g=vg(r);Yx(g);let y=null;for(let b=0;y==null&&b<g.length;++b){let m=Ix(p);y=Kx(g[b],m,c)}return y}function vg(r,s=[],d=[],c="",f=!1){let p=(g,y,b=f,m)=>{let j={relativePath:m===void 0?g.path||"":m,caseSensitive:g.caseSensitive===!0,childrenIndex:y,route:g};if(j.relativePath.startsWith("/")){if(!j.relativePath.startsWith(c)&&b)return;Ie(j.relativePath.startsWith(c),`Absolute route path "${j.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),j.relativePath=j.relativePath.slice(c.length)}let v=Oa([c,j.relativePath]),k=d.concat(j);g.children&&g.children.length>0&&(Ie(g.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),vg(g.children,s,k,v,b)),!(g.path==null&&!g.index)&&s.push({path:v,score:Zx(v,g.index),routesMeta:k})};return r.forEach((g,y)=>{if(g.path===""||!g.path?.includes("?"))p(g,y);else for(let b of jg(g.path))p(g,y,!0,b)}),s}function jg(r){let s=r.split("/");if(s.length===0)return[];let[d,...c]=s,f=d.endsWith("?"),p=d.replace(/\?$/,"");if(c.length===0)return f?[p,""]:[p];let g=jg(c.join("/")),y=[];return y.push(...g.map(b=>b===""?p:[p,b].join("/"))),f&&y.push(...g),y.map(b=>r.startsWith("/")&&b===""?"/":b)}function Yx(r){r.sort((s,d)=>s.score!==d.score?d.score-s.score:Wx(s.routesMeta.map(c=>c.childrenIndex),d.routesMeta.map(c=>c.childrenIndex)))}var qx=/^:[\w-]+$/,$x=3,Gx=2,Vx=1,Xx=10,Qx=-2,Ih=r=>r==="*";function Zx(r,s){let d=r.split("/"),c=d.length;return d.some(Ih)&&(c+=Qx),s&&(c+=Gx),d.filter(f=>!Ih(f)).reduce((f,p)=>f+(qx.test(p)?$x:p===""?Vx:Xx),c)}function Wx(r,s){return r.length===s.length&&r.slice(0,-1).every((c,f)=>c===s[f])?r[r.length-1]-s[s.length-1]:0}function Kx(r,s,d=!1){let{routesMeta:c}=r,f={},p="/",g=[];for(let y=0;y<c.length;++y){let b=c[y],m=y===c.length-1,j=p==="/"?s:s.slice(p.length)||"/",v=_s({path:b.relativePath,caseSensitive:b.caseSensitive,end:m},j),k=b.route;if(!v&&m&&d&&!c[c.length-1].route.index&&(v=_s({path:b.relativePath,caseSensitive:b.caseSensitive,end:!1},j)),!v)return null;Object.assign(f,v.params),g.push({params:f,pathname:Oa([p,v.pathname]),pathnameBase:ty(Oa([p,v.pathnameBase])),route:k}),v.pathnameBase!=="/"&&(p=Oa([p,v.pathnameBase]))}return g}function _s(r,s){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[d,c]=Jx(r.path,r.caseSensitive,r.end),f=s.match(d);if(!f)return null;let p=f[0],g=p.replace(/(.)\/+$/,"$1"),y=f.slice(1);return{params:c.reduce((m,{paramName:j,isOptional:v},k)=>{if(j==="*"){let A=y[k]||"";g=p.slice(0,p.length-A.length).replace(/(.)\/+$/,"$1")}const _=y[k];return v&&!_?m[j]=void 0:m[j]=(_||"").replace(/%2F/g,"/"),m},{}),pathname:p,pathnameBase:g,pattern:r}}function Jx(r,s=!1,d=!0){Pt(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let c=[],f="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(g,y,b)=>(c.push({paramName:y,isOptional:b!=null}),b?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(c.push({paramName:"*"}),f+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):d?f+="\\/*$":r!==""&&r!=="/"&&(f+="(?:(?=\\/|$))"),[new RegExp(f,s?void 0:"i"),c]}function Ix(r){try{return r.split("/").map(s=>decodeURIComponent(s).replace(/\//g,"%2F")).join("/")}catch(s){return Pt(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${s}).`),r}}function Ua(r,s){if(s==="/")return r;if(!r.toLowerCase().startsWith(s.toLowerCase()))return null;let d=s.endsWith("/")?s.length-1:s.length,c=r.charAt(d);return c&&c!=="/"?null:r.slice(d)||"/"}var Fx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function Px(r,s="/"){let{pathname:d,search:c="",hash:f=""}=typeof r=="string"?Di(r):r,p;return d?(d=d.replace(/\/\/+/g,"/"),d.startsWith("/")?p=Fh(d.substring(1),"/"):p=Fh(d,s)):p=s,{pathname:p,search:ay(c),hash:ny(f)}}function Fh(r,s){let d=s.replace(/\/+$/,"").split("/");return r.split("/").forEach(f=>{f===".."?d.length>1&&d.pop():f!=="."&&d.push(f)}),d.length>1?d.join("/"):"/"}function cd(r,s,d,c){return`Cannot include a '${r}' character in a manually specified \`to.${s}\` field [${JSON.stringify(c)}].  Please separate it out to the \`to.${d}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function ey(r){return r.filter((s,d)=>d===0||s.route.path&&s.route.path.length>0)}function Cd(r){let s=ey(r);return s.map((d,c)=>c===s.length-1?d.pathname:d.pathnameBase)}function Nd(r,s,d,c=!1){let f;typeof r=="string"?f=Di(r):(f={...r},Ie(!f.pathname||!f.pathname.includes("?"),cd("?","pathname","search",f)),Ie(!f.pathname||!f.pathname.includes("#"),cd("#","pathname","hash",f)),Ie(!f.search||!f.search.includes("#"),cd("#","search","hash",f)));let p=r===""||f.pathname==="",g=p?"/":f.pathname,y;if(g==null)y=d;else{let v=s.length-1;if(!c&&g.startsWith("..")){let k=g.split("/");for(;k[0]==="..";)k.shift(),v-=1;f.pathname=k.join("/")}y=v>=0?s[v]:"/"}let b=Px(f,y),m=g&&g!=="/"&&g.endsWith("/"),j=(p||g===".")&&d.endsWith("/");return!b.pathname.endsWith("/")&&(m||j)&&(b.pathname+="/"),b}var Oa=r=>r.join("/").replace(/\/\/+/g,"/"),ty=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),ay=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,ny=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r,iy=class{constructor(r,s,d,c=!1){this.status=r,this.statusText=s||"",this.internal=c,d instanceof Error?(this.data=d.toString(),this.error=d):this.data=d}};function ry(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}function ly(r){return r.map(s=>s.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var wg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Sg(r,s){let d=r;if(typeof d!="string"||!Fx.test(d))return{absoluteURL:void 0,isExternal:!1,to:d};let c=d,f=!1;if(wg)try{let p=new URL(window.location.href),g=d.startsWith("//")?new URL(p.protocol+d):new URL(d),y=Ua(g.pathname,s);g.origin===p.origin&&y!=null?d=y+g.search+g.hash:f=!0}catch{Pt(!1,`<Link to="${d}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:c,isExternal:f,to:d}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var kg=["POST","PUT","PATCH","DELETE"];new Set(kg);var sy=["GET",...kg];new Set(sy);var Bi=h.createContext(null);Bi.displayName="DataRouter";var Bs=h.createContext(null);Bs.displayName="DataRouterState";var oy=h.createContext(!1),zg=h.createContext({isTransitioning:!1});zg.displayName="ViewTransition";var cy=h.createContext(new Map);cy.displayName="Fetchers";var dy=h.createContext(null);dy.displayName="Await";var qt=h.createContext(null);qt.displayName="Navigation";var Qr=h.createContext(null);Qr.displayName="Location";var sa=h.createContext({outlet:null,matches:[],isDataRoute:!1});sa.displayName="Route";var _d=h.createContext(null);_d.displayName="RouteError";var Cg="REACT_ROUTER_ERROR",uy="REDIRECT",py="ROUTE_ERROR_RESPONSE";function fy(r){if(r.startsWith(`${Cg}:${uy}:{`))try{let s=JSON.parse(r.slice(28));if(typeof s=="object"&&s&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.location=="string"&&typeof s.reloadDocument=="boolean"&&typeof s.replace=="boolean")return s}catch{}}function hy(r){if(r.startsWith(`${Cg}:${py}:{`))try{let s=JSON.parse(r.slice(40));if(typeof s=="object"&&s&&typeof s.status=="number"&&typeof s.statusText=="string")return new iy(s.status,s.statusText,s.data)}catch{}}function gy(r,{relative:s}={}){Ie(Oi(),"useHref() may be used only in the context of a <Router> component.");let{basename:d,navigator:c}=h.useContext(qt),{hash:f,pathname:p,search:g}=Zr(r,{relative:s}),y=p;return d!=="/"&&(y=p==="/"?d:Oa([d,p])),c.createHref({pathname:y,search:g,hash:f})}function Oi(){return h.useContext(Qr)!=null}function $t(){return Ie(Oi(),"useLocation() may be used only in the context of a <Router> component."),h.useContext(Qr).location}var Ng="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function _g(r){h.useContext(qt).static||h.useLayoutEffect(r)}function nt(){let{isDataRoute:r}=h.useContext(sa);return r?_y():my()}function my(){Ie(Oi(),"useNavigate() may be used only in the context of a <Router> component.");let r=h.useContext(Bi),{basename:s,navigator:d}=h.useContext(qt),{matches:c}=h.useContext(sa),{pathname:f}=$t(),p=JSON.stringify(Cd(c)),g=h.useRef(!1);return _g(()=>{g.current=!0}),h.useCallback((b,m={})=>{if(Pt(g.current,Ng),!g.current)return;if(typeof b=="number"){d.go(b);return}let j=Nd(b,JSON.parse(p),f,m.relative==="path");r==null&&s!=="/"&&(j.pathname=j.pathname==="/"?s:Oa([s,j.pathname])),(m.replace?d.replace:d.push)(j,m.state,m)},[s,d,p,f,r])}h.createContext(null);function Os(){let{matches:r}=h.useContext(sa),s=r[r.length-1];return s?s.params:{}}function Zr(r,{relative:s}={}){let{matches:d}=h.useContext(sa),{pathname:c}=$t(),f=JSON.stringify(Cd(d));return h.useMemo(()=>Nd(r,JSON.parse(f),c,s==="path"),[r,f,c,s])}function xy(r,s){return Eg(r,s)}function Eg(r,s,d,c,f){Ie(Oi(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:p}=h.useContext(qt),{matches:g}=h.useContext(sa),y=g[g.length-1],b=y?y.params:{},m=y?y.pathname:"/",j=y?y.pathnameBase:"/",v=y&&y.route;{let G=v&&v.path||"";Tg(m,!v||G.endsWith("*")||G.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${G}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${G}"> to <Route path="${G==="/"?"*":`${G}/*`}">.`)}let k=$t(),_;if(s){let G=typeof s=="string"?Di(s):s;Ie(j==="/"||G.pathname?.startsWith(j),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${j}" but pathname "${G.pathname}" was given in the \`location\` prop.`),_=G}else _=k;let A=_.pathname||"/",z=A;if(j!=="/"){let G=j.replace(/^\//,"").split("/");z="/"+A.replace(/^\//,"").split("/").slice(G.length).join("/")}let T=bg(r,{pathname:z});Pt(v||T!=null,`No routes matched location "${_.pathname}${_.search}${_.hash}" `),Pt(T==null||T[T.length-1].route.element!==void 0||T[T.length-1].route.Component!==void 0||T[T.length-1].route.lazy!==void 0,`Matched leaf route at location "${_.pathname}${_.search}${_.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let D=wy(T&&T.map(G=>Object.assign({},G,{params:Object.assign({},b,G.params),pathname:Oa([j,p.encodeLocation?p.encodeLocation(G.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:G.pathname]),pathnameBase:G.pathnameBase==="/"?j:Oa([j,p.encodeLocation?p.encodeLocation(G.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:G.pathnameBase])})),g,d,c,f);return s&&D?h.createElement(Qr.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",..._},navigationType:"POP"}},D):D}function yy(){let r=Ny(),s=ry(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),d=r instanceof Error?r.stack:null,c="rgba(200,200,200, 0.5)",f={padding:"0.5rem",backgroundColor:c},p={padding:"2px 4px",backgroundColor:c},g=null;return console.error("Error handled by React Router default ErrorBoundary:",r),g=h.createElement(h.Fragment,null,h.createElement("p",null,"💿 Hey developer 👋"),h.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",h.createElement("code",{style:p},"ErrorBoundary")," or"," ",h.createElement("code",{style:p},"errorElement")," prop on your route.")),h.createElement(h.Fragment,null,h.createElement("h2",null,"Unexpected Application Error!"),h.createElement("h3",{style:{fontStyle:"italic"}},s),d?h.createElement("pre",{style:f},d):null,g)}var by=h.createElement(yy,null),Rg=class extends h.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,s){return s.location!==r.location||s.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:s.error,location:s.location,revalidation:r.revalidation||s.revalidation}}componentDidCatch(r,s){this.props.onError?this.props.onError(r,s):console.error("React Router caught the following error during render",r)}render(){let r=this.state.error;if(this.context&&typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){const d=hy(r.digest);d&&(r=d)}let s=r!==void 0?h.createElement(sa.Provider,{value:this.props.routeContext},h.createElement(_d.Provider,{value:r,children:this.props.component})):this.props.children;return this.context?h.createElement(vy,{error:r},s):s}};Rg.contextType=oy;var dd=new WeakMap;function vy({children:r,error:s}){let{basename:d}=h.useContext(qt);if(typeof s=="object"&&s&&"digest"in s&&typeof s.digest=="string"){let c=fy(s.digest);if(c){let f=dd.get(s);if(f)throw f;let p=Sg(c.location,d);if(wg&&!dd.get(s))if(p.isExternal||c.reloadDocument)window.location.href=p.absoluteURL||p.to;else{const g=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(p.to,{replace:c.replace}));throw dd.set(s,g),g}return h.createElement("meta",{httpEquiv:"refresh",content:`0;url=${p.absoluteURL||p.to}`})}}return r}function jy({routeContext:r,match:s,children:d}){let c=h.useContext(Bi);return c&&c.static&&c.staticContext&&(s.route.errorElement||s.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=s.route.id),h.createElement(sa.Provider,{value:r},d)}function wy(r,s=[],d=null,c=null,f=null){if(r==null){if(!d)return null;if(d.errors)r=d.matches;else if(s.length===0&&!d.initialized&&d.matches.length>0)r=d.matches;else return null}let p=r,g=d?.errors;if(g!=null){let j=p.findIndex(v=>v.route.id&&g?.[v.route.id]!==void 0);Ie(j>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(g).join(",")}`),p=p.slice(0,Math.min(p.length,j+1))}let y=!1,b=-1;if(d)for(let j=0;j<p.length;j++){let v=p[j];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(b=j),v.route.id){let{loaderData:k,errors:_}=d,A=v.route.loader&&!k.hasOwnProperty(v.route.id)&&(!_||_[v.route.id]===void 0);if(v.route.lazy||A){y=!0,b>=0?p=p.slice(0,b+1):p=[p[0]];break}}}let m=d&&c?(j,v)=>{c(j,{location:d.location,params:d.matches?.[0]?.params??{},unstable_pattern:ly(d.matches),errorInfo:v})}:void 0;return p.reduceRight((j,v,k)=>{let _,A=!1,z=null,T=null;d&&(_=g&&v.route.id?g[v.route.id]:void 0,z=v.route.errorElement||by,y&&(b<0&&k===0?(Tg("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),A=!0,T=null):b===k&&(A=!0,T=v.route.hydrateFallbackElement||null)));let D=s.concat(p.slice(0,k+1)),G=()=>{let K;return _?K=z:A?K=T:v.route.Component?K=h.createElement(v.route.Component,null):v.route.element?K=v.route.element:K=j,h.createElement(jy,{match:v,routeContext:{outlet:j,matches:D,isDataRoute:d!=null},children:K})};return d&&(v.route.ErrorBoundary||v.route.errorElement||k===0)?h.createElement(Rg,{location:d.location,revalidation:d.revalidation,component:z,error:_,children:G(),routeContext:{outlet:null,matches:D,isDataRoute:!0},onError:m}):G()},null)}function Ed(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Sy(r){let s=h.useContext(Bi);return Ie(s,Ed(r)),s}function ky(r){let s=h.useContext(Bs);return Ie(s,Ed(r)),s}function zy(r){let s=h.useContext(sa);return Ie(s,Ed(r)),s}function Rd(r){let s=zy(r),d=s.matches[s.matches.length-1];return Ie(d.route.id,`${r} can only be used on routes that contain a unique "id"`),d.route.id}function Cy(){return Rd("useRouteId")}function Ny(){let r=h.useContext(_d),s=ky("useRouteError"),d=Rd("useRouteError");return r!==void 0?r:s.errors?.[d]}function _y(){let{router:r}=Sy("useNavigate"),s=Rd("useNavigate"),d=h.useRef(!1);return _g(()=>{d.current=!0}),h.useCallback(async(f,p={})=>{Pt(d.current,Ng),d.current&&(typeof f=="number"?await r.navigate(f):await r.navigate(f,{fromRouteId:s,...p}))},[r,s])}var Ph={};function Tg(r,s,d){!s&&!Ph[r]&&(Ph[r]=!0,Pt(!1,d))}h.memo(Ey);function Ey({routes:r,future:s,state:d,onError:c}){return Eg(r,void 0,d,c,s)}function Es({to:r,replace:s,state:d,relative:c}){Ie(Oi(),"<Navigate> may be used only in the context of a <Router> component.");let{static:f}=h.useContext(qt);Pt(!f,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:p}=h.useContext(sa),{pathname:g}=$t(),y=nt(),b=Nd(r,Cd(p),g,c==="path"),m=JSON.stringify(b);return h.useEffect(()=>{y(JSON.parse(m),{replace:s,state:d,relative:c})},[y,m,c,s,d]),null}function Ze(r){Ie(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Ry({basename:r="/",children:s=null,location:d,navigationType:c="POP",navigator:f,static:p=!1,unstable_useTransitions:g}){Ie(!Oi(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let y=r.replace(/^\/*/,"/"),b=h.useMemo(()=>({basename:y,navigator:f,static:p,unstable_useTransitions:g,future:{}}),[y,f,p,g]);typeof d=="string"&&(d=Di(d));let{pathname:m="/",search:j="",hash:v="",state:k=null,key:_="default"}=d,A=h.useMemo(()=>{let z=Ua(m,y);return z==null?null:{location:{pathname:z,search:j,hash:v,state:k,key:_},navigationType:c}},[y,m,j,v,k,_,c]);return Pt(A!=null,`<Router basename="${y}"> is not able to match the URL "${m}${j}${v}" because it does not start with the basename, so the <Router> won't render anything.`),A==null?null:h.createElement(qt.Provider,{value:b},h.createElement(Qr.Provider,{children:s,value:A}))}function Ty({children:r,location:s}){return xy(xd(r),s)}function xd(r,s=[]){let d=[];return h.Children.forEach(r,(c,f)=>{if(!h.isValidElement(c))return;let p=[...s,f];if(c.type===h.Fragment){d.push.apply(d,xd(c.props.children,p));return}Ie(c.type===Ze,`[${typeof c.type=="string"?c.type:c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ie(!c.props.index||!c.props.children,"An index route cannot have child routes.");let g={id:c.props.id||p.join("-"),caseSensitive:c.props.caseSensitive,element:c.props.element,Component:c.props.Component,index:c.props.index,path:c.props.path,middleware:c.props.middleware,loader:c.props.loader,action:c.props.action,hydrateFallbackElement:c.props.hydrateFallbackElement,HydrateFallback:c.props.HydrateFallback,errorElement:c.props.errorElement,ErrorBoundary:c.props.ErrorBoundary,hasErrorBoundary:c.props.hasErrorBoundary===!0||c.props.ErrorBoundary!=null||c.props.errorElement!=null,shouldRevalidate:c.props.shouldRevalidate,handle:c.props.handle,lazy:c.props.lazy};c.props.children&&(g.children=xd(c.props.children,p)),d.push(g)}),d}var Ss="get",ks="application/x-www-form-urlencoded";function Us(r){return typeof HTMLElement<"u"&&r instanceof HTMLElement}function Ay(r){return Us(r)&&r.tagName.toLowerCase()==="button"}function My(r){return Us(r)&&r.tagName.toLowerCase()==="form"}function Dy(r){return Us(r)&&r.tagName.toLowerCase()==="input"}function By(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function Oy(r,s){return r.button===0&&(!s||s==="_self")&&!By(r)}function yd(r=""){return new URLSearchParams(typeof r=="string"||Array.isArray(r)||r instanceof URLSearchParams?r:Object.keys(r).reduce((s,d)=>{let c=r[d];return s.concat(Array.isArray(c)?c.map(f=>[d,f]):[[d,c]])},[]))}function Uy(r,s){let d=yd(r);return s&&s.forEach((c,f)=>{d.has(f)||s.getAll(f).forEach(p=>{d.append(f,p)})}),d}var ys=null;function Ly(){if(ys===null)try{new FormData(document.createElement("form"),0),ys=!1}catch{ys=!0}return ys}var Hy=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function ud(r){return r!=null&&!Hy.has(r)?(Pt(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ks}"`),null):r}function Yy(r,s){let d,c,f,p,g;if(My(r)){let y=r.getAttribute("action");c=y?Ua(y,s):null,d=r.getAttribute("method")||Ss,f=ud(r.getAttribute("enctype"))||ks,p=new FormData(r)}else if(Ay(r)||Dy(r)&&(r.type==="submit"||r.type==="image")){let y=r.form;if(y==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let b=r.getAttribute("formaction")||y.getAttribute("action");if(c=b?Ua(b,s):null,d=r.getAttribute("formmethod")||y.getAttribute("method")||Ss,f=ud(r.getAttribute("formenctype"))||ud(y.getAttribute("enctype"))||ks,p=new FormData(y,r),!Ly()){let{name:m,type:j,value:v}=r;if(j==="image"){let k=m?`${m}.`:"";p.append(`${k}x`,"0"),p.append(`${k}y`,"0")}else m&&p.append(m,v)}}else{if(Us(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');d=Ss,c=null,f=ks,g=r}return p&&f==="text/plain"&&(g=p,p=void 0),{action:c,method:d.toLowerCase(),encType:f,formData:p,body:g}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Td(r,s){if(r===!1||r===null||typeof r>"u")throw new Error(s)}function qy(r,s,d,c){let f=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return d?f.pathname.endsWith("/")?f.pathname=`${f.pathname}_.${c}`:f.pathname=`${f.pathname}.${c}`:f.pathname==="/"?f.pathname=`_root.${c}`:s&&Ua(f.pathname,s)==="/"?f.pathname=`${s.replace(/\/$/,"")}/_root.${c}`:f.pathname=`${f.pathname.replace(/\/$/,"")}.${c}`,f}async function $y(r,s){if(r.id in s)return s[r.id];try{let d=await import(r.module);return s[r.id]=d,d}catch(d){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(d),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Gy(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function Vy(r,s,d){let c=await Promise.all(r.map(async f=>{let p=s.routes[f.route.id];if(p){let g=await $y(p,d);return g.links?g.links():[]}return[]}));return Wy(c.flat(1).filter(Gy).filter(f=>f.rel==="stylesheet"||f.rel==="preload").map(f=>f.rel==="stylesheet"?{...f,rel:"prefetch",as:"style"}:{...f,rel:"prefetch"}))}function eg(r,s,d,c,f,p){let g=(b,m)=>d[m]?b.route.id!==d[m].route.id:!0,y=(b,m)=>d[m].pathname!==b.pathname||d[m].route.path?.endsWith("*")&&d[m].params["*"]!==b.params["*"];return p==="assets"?s.filter((b,m)=>g(b,m)||y(b,m)):p==="data"?s.filter((b,m)=>{let j=c.routes[b.route.id];if(!j||!j.hasLoader)return!1;if(g(b,m)||y(b,m))return!0;if(b.route.shouldRevalidate){let v=b.route.shouldRevalidate({currentUrl:new URL(f.pathname+f.search+f.hash,window.origin),currentParams:d[0]?.params||{},nextUrl:new URL(r,window.origin),nextParams:b.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function Xy(r,s,{includeHydrateFallback:d}={}){return Qy(r.map(c=>{let f=s.routes[c.route.id];if(!f)return[];let p=[f.module];return f.clientActionModule&&(p=p.concat(f.clientActionModule)),f.clientLoaderModule&&(p=p.concat(f.clientLoaderModule)),d&&f.hydrateFallbackModule&&(p=p.concat(f.hydrateFallbackModule)),f.imports&&(p=p.concat(f.imports)),p}).flat(1))}function Qy(r){return[...new Set(r)]}function Zy(r){let s={},d=Object.keys(r).sort();for(let c of d)s[c]=r[c];return s}function Wy(r,s){let d=new Set;return new Set(s),r.reduce((c,f)=>{let p=JSON.stringify(Zy(f));return d.has(p)||(d.add(p),c.push({key:p,link:f})),c},[])}function Ag(){let r=h.useContext(Bi);return Td(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function Ky(){let r=h.useContext(Bs);return Td(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var Ad=h.createContext(void 0);Ad.displayName="FrameworkContext";function Mg(){let r=h.useContext(Ad);return Td(r,"You must render this element inside a <HydratedRouter> element"),r}function Jy(r,s){let d=h.useContext(Ad),[c,f]=h.useState(!1),[p,g]=h.useState(!1),{onFocus:y,onBlur:b,onMouseEnter:m,onMouseLeave:j,onTouchStart:v}=s,k=h.useRef(null);h.useEffect(()=>{if(r==="render"&&g(!0),r==="viewport"){let z=D=>{D.forEach(G=>{g(G.isIntersecting)})},T=new IntersectionObserver(z,{threshold:.5});return k.current&&T.observe(k.current),()=>{T.disconnect()}}},[r]),h.useEffect(()=>{if(c){let z=setTimeout(()=>{g(!0)},100);return()=>{clearTimeout(z)}}},[c]);let _=()=>{f(!0)},A=()=>{f(!1),g(!1)};return d?r!=="intent"?[p,k,{}]:[p,k,{onFocus:Dr(y,_),onBlur:Dr(b,A),onMouseEnter:Dr(m,_),onMouseLeave:Dr(j,A),onTouchStart:Dr(v,_)}]:[!1,k,{}]}function Dr(r,s){return d=>{r&&r(d),d.defaultPrevented||s(d)}}function Iy({page:r,...s}){let{router:d}=Ag(),c=h.useMemo(()=>bg(d.routes,r,d.basename),[d.routes,r,d.basename]);return c?h.createElement(Py,{page:r,matches:c,...s}):null}function Fy(r){let{manifest:s,routeModules:d}=Mg(),[c,f]=h.useState([]);return h.useEffect(()=>{let p=!1;return Vy(r,s,d).then(g=>{p||f(g)}),()=>{p=!0}},[r,s,d]),c}function Py({page:r,matches:s,...d}){let c=$t(),{future:f,manifest:p,routeModules:g}=Mg(),{basename:y}=Ag(),{loaderData:b,matches:m}=Ky(),j=h.useMemo(()=>eg(r,s,m,p,c,"data"),[r,s,m,p,c]),v=h.useMemo(()=>eg(r,s,m,p,c,"assets"),[r,s,m,p,c]),k=h.useMemo(()=>{if(r===c.pathname+c.search+c.hash)return[];let z=new Set,T=!1;if(s.forEach(G=>{let K=p.routes[G.route.id];!K||!K.hasLoader||(!j.some(q=>q.route.id===G.route.id)&&G.route.id in b&&g[G.route.id]?.shouldRevalidate||K.hasClientLoader?T=!0:z.add(G.route.id))}),z.size===0)return[];let D=qy(r,y,f.unstable_trailingSlashAwareDataRequests,"data");return T&&z.size>0&&D.searchParams.set("_routes",s.filter(G=>z.has(G.route.id)).map(G=>G.route.id).join(",")),[D.pathname+D.search]},[y,f.unstable_trailingSlashAwareDataRequests,b,c,p,j,s,r,g]),_=h.useMemo(()=>Xy(v,p),[v,p]),A=Fy(v);return h.createElement(h.Fragment,null,k.map(z=>h.createElement("link",{key:z,rel:"prefetch",as:"fetch",href:z,...d})),_.map(z=>h.createElement("link",{key:z,rel:"modulepreload",href:z,...d})),A.map(({key:z,link:T})=>h.createElement("link",{key:z,nonce:d.nonce,...T,crossOrigin:T.crossOrigin??d.crossOrigin})))}function e1(...r){return s=>{r.forEach(d=>{typeof d=="function"?d(s):d!=null&&(d.current=s)})}}var t1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{t1&&(window.__reactRouterVersion="7.13.0")}catch{}function a1({basename:r,children:s,unstable_useTransitions:d,window:c}){let f=h.useRef();f.current==null&&(f.current=Bx({window:c,v5Compat:!0}));let p=f.current,[g,y]=h.useState({action:p.action,location:p.location}),b=h.useCallback(m=>{d===!1?y(m):h.startTransition(()=>y(m))},[d]);return h.useLayoutEffect(()=>p.listen(b),[p,b]),h.createElement(Ry,{basename:r,children:s,location:g.location,navigationType:g.action,navigator:p,unstable_useTransitions:d})}var Dg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,pe=h.forwardRef(function({onClick:s,discover:d="render",prefetch:c="none",relative:f,reloadDocument:p,replace:g,state:y,target:b,to:m,preventScrollReset:j,viewTransition:v,unstable_defaultShouldRevalidate:k,..._},A){let{basename:z,unstable_useTransitions:T}=h.useContext(qt),D=typeof m=="string"&&Dg.test(m),G=Sg(m,z);m=G.to;let K=gy(m,{relative:f}),[q,S,U]=Jy(c,_),$=l1(m,{replace:g,state:y,target:b,preventScrollReset:j,relative:f,viewTransition:v,unstable_defaultShouldRevalidate:k,unstable_useTransitions:T});function re(ie){s&&s(ie),ie.defaultPrevented||$(ie)}let be=h.createElement("a",{..._,...U,href:G.absoluteURL||K,onClick:G.isExternal||p?s:re,ref:e1(A,S),target:b,"data-discover":!D&&d==="render"?"true":void 0});return q&&!D?h.createElement(h.Fragment,null,be,h.createElement(Iy,{page:K})):be});pe.displayName="Link";var n1=h.forwardRef(function({"aria-current":s="page",caseSensitive:d=!1,className:c="",end:f=!1,style:p,to:g,viewTransition:y,children:b,...m},j){let v=Zr(g,{relative:m.relative}),k=$t(),_=h.useContext(Bs),{navigator:A,basename:z}=h.useContext(qt),T=_!=null&&u1(v)&&y===!0,D=A.encodeLocation?A.encodeLocation(v).pathname:v.pathname,G=k.pathname,K=_&&_.navigation&&_.navigation.location?_.navigation.location.pathname:null;d||(G=G.toLowerCase(),K=K?K.toLowerCase():null,D=D.toLowerCase()),K&&z&&(K=Ua(K,z)||K);const q=D!=="/"&&D.endsWith("/")?D.length-1:D.length;let S=G===D||!f&&G.startsWith(D)&&G.charAt(q)==="/",U=K!=null&&(K===D||!f&&K.startsWith(D)&&K.charAt(D.length)==="/"),$={isActive:S,isPending:U,isTransitioning:T},re=S?s:void 0,be;typeof c=="function"?be=c($):be=[c,S?"active":null,U?"pending":null,T?"transitioning":null].filter(Boolean).join(" ");let ie=typeof p=="function"?p($):p;return h.createElement(pe,{...m,"aria-current":re,className:be,ref:j,style:ie,to:g,viewTransition:y},typeof b=="function"?b($):b)});n1.displayName="NavLink";var i1=h.forwardRef(({discover:r="render",fetcherKey:s,navigate:d,reloadDocument:c,replace:f,state:p,method:g=Ss,action:y,onSubmit:b,relative:m,preventScrollReset:j,viewTransition:v,unstable_defaultShouldRevalidate:k,..._},A)=>{let{unstable_useTransitions:z}=h.useContext(qt),T=c1(),D=d1(y,{relative:m}),G=g.toLowerCase()==="get"?"get":"post",K=typeof y=="string"&&Dg.test(y),q=S=>{if(b&&b(S),S.defaultPrevented)return;S.preventDefault();let U=S.nativeEvent.submitter,$=U?.getAttribute("formmethod")||g,re=()=>T(U||S.currentTarget,{fetcherKey:s,method:$,navigate:d,replace:f,state:p,relative:m,preventScrollReset:j,viewTransition:v,unstable_defaultShouldRevalidate:k});z&&d!==!1?h.startTransition(()=>re()):re()};return h.createElement("form",{ref:A,method:G,action:D,onSubmit:c?b:q,..._,"data-discover":!K&&r==="render"?"true":void 0})});i1.displayName="Form";function r1(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Bg(r){let s=h.useContext(Bi);return Ie(s,r1(r)),s}function l1(r,{target:s,replace:d,state:c,preventScrollReset:f,relative:p,viewTransition:g,unstable_defaultShouldRevalidate:y,unstable_useTransitions:b}={}){let m=nt(),j=$t(),v=Zr(r,{relative:p});return h.useCallback(k=>{if(Oy(k,s)){k.preventDefault();let _=d!==void 0?d:Lr(j)===Lr(v),A=()=>m(r,{replace:_,state:c,preventScrollReset:f,relative:p,viewTransition:g,unstable_defaultShouldRevalidate:y});b?h.startTransition(()=>A()):A()}},[j,m,v,d,c,s,r,f,p,g,y,b])}function Md(r){Pt(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let s=h.useRef(yd(r)),d=h.useRef(!1),c=$t(),f=h.useMemo(()=>Uy(c.search,d.current?null:s.current),[c.search]),p=nt(),g=h.useCallback((y,b)=>{const m=yd(typeof y=="function"?y(new URLSearchParams(f)):y);d.current=!0,p("?"+m,b)},[p,f]);return[f,g]}var s1=0,o1=()=>`__${String(++s1)}__`;function c1(){let{router:r}=Bg("useSubmit"),{basename:s}=h.useContext(qt),d=Cy(),c=r.fetch,f=r.navigate;return h.useCallback(async(p,g={})=>{let{action:y,method:b,encType:m,formData:j,body:v}=Yy(p,s);if(g.navigate===!1){let k=g.fetcherKey||o1();await c(k,d,g.action||y,{unstable_defaultShouldRevalidate:g.unstable_defaultShouldRevalidate,preventScrollReset:g.preventScrollReset,formData:j,body:v,formMethod:g.method||b,formEncType:g.encType||m,flushSync:g.flushSync})}else await f(g.action||y,{unstable_defaultShouldRevalidate:g.unstable_defaultShouldRevalidate,preventScrollReset:g.preventScrollReset,formData:j,body:v,formMethod:g.method||b,formEncType:g.encType||m,replace:g.replace,state:g.state,fromRouteId:d,flushSync:g.flushSync,viewTransition:g.viewTransition})},[c,f,s,d])}function d1(r,{relative:s}={}){let{basename:d}=h.useContext(qt),c=h.useContext(sa);Ie(c,"useFormAction must be used inside a RouteContext");let[f]=c.matches.slice(-1),p={...Zr(r||".",{relative:s})},g=$t();if(r==null){p.search=g.search;let y=new URLSearchParams(p.search),b=y.getAll("index");if(b.some(j=>j==="")){y.delete("index"),b.filter(v=>v).forEach(v=>y.append("index",v));let j=y.toString();p.search=j?`?${j}`:""}}return(!r||r===".")&&f.route.index&&(p.search=p.search?p.search.replace(/^\?/,"?index&"):"?index"),d!=="/"&&(p.pathname=p.pathname==="/"?d:Oa([d,p.pathname])),Lr(p)}function u1(r,{relative:s}={}){let d=h.useContext(zg);Ie(d!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:c}=Bg("useViewTransitionState"),f=Zr(r,{relative:s});if(!d.isTransitioning)return!1;let p=Ua(d.currentLocation.pathname,c)||d.currentLocation.pathname,g=Ua(d.nextLocation.pathname,c)||d.nextLocation.pathname;return _s(f.pathname,g)!=null||_s(f.pathname,p)!=null}const Og=(...r)=>r.filter((s,d,c)=>!!s&&s.trim()!==""&&c.indexOf(s)===d).join(" ").trim();const p1=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();const f1=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(s,d,c)=>c?c.toUpperCase():d.toLowerCase());const tg=r=>{const s=f1(r);return s.charAt(0).toUpperCase()+s.slice(1)};var h1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const g1=r=>{for(const s in r)if(s.startsWith("aria-")||s==="role"||s==="title")return!0;return!1};const m1=h.forwardRef(({color:r="currentColor",size:s=24,strokeWidth:d=2,absoluteStrokeWidth:c,className:f="",children:p,iconNode:g,...y},b)=>h.createElement("svg",{ref:b,...h1,width:s,height:s,stroke:r,strokeWidth:c?Number(d)*24/Number(s):d,className:Og("lucide",f),...!p&&!g1(y)&&{"aria-hidden":"true"},...y},[...g.map(([m,j])=>h.createElement(m,j)),...Array.isArray(p)?p:[p]]));const oe=(r,s)=>{const d=h.forwardRef(({className:c,...f},p)=>h.createElement(m1,{ref:p,iconNode:s,className:Og(`lucide-${p1(tg(r))}`,`lucide-${r}`,c),...f}));return d.displayName=tg(r),d};const x1=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Hr=oe("arrow-left",x1);const y1=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],ag=oe("arrow-right",y1);const b1=[["path",{d:"M10 4 8 6",key:"1rru8s"}],["path",{d:"M17 19v2",key:"ts1sot"}],["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"M7 19v2",key:"12npes"}],["path",{d:"M9 5 7.621 3.621A2.121 2.121 0 0 0 4 5v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5",key:"14ym8i"}]],Yr=oe("bath",b1);const v1=[["path",{d:"M2 4v16",key:"vw9hq8"}],["path",{d:"M2 8h18a2 2 0 0 1 2 2v10",key:"1dgv2r"}],["path",{d:"M2 17h20",key:"18nfp3"}],["path",{d:"M6 8v9",key:"1yriud"}]],qr=oe("bed",v1);const j1=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],w1=oe("bell",j1);const S1=[["path",{d:"M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z",key:"oz39mx"}]],Ug=oe("bookmark",S1);const k1=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],Lg=oe("briefcase",k1);const z1=[["path",{d:"M10 12h4",key:"a56b0p"}],["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M14 21v-3a2 2 0 0 0-4 0v3",key:"1rgiei"}],["path",{d:"M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",key:"secmi2"}],["path",{d:"M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16",key:"16ra0t"}]],C1=oe("building-2",z1);const N1=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],Dd=oe("calendar",N1);const _1=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",key:"18u6gg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],pd=oe("camera",_1);const E1=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],R1=oe("chart-column",E1);const T1=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]],A1=oe("check-check",T1);const M1=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],D1=oe("check",M1);const B1=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],$r=oe("chevron-left",B1);const O1=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Ri=oe("chevron-right",O1);const U1=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Ur=oe("clock",U1);const L1=[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]],Hg=oe("dollar-sign",L1);const H1=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]],Bd=oe("ellipsis-vertical",H1);const Y1=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Yg=oe("external-link",Y1);const q1=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],bd=oe("eye-off",q1);const $1=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],dt=oe("eye",$1);const G1=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],V1=oe("file-text",G1);const X1=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],Wr=oe("funnel",X1);const Q1=[["circle",{cx:"6",cy:"15",r:"4",key:"vux9w4"}],["circle",{cx:"18",cy:"15",r:"4",key:"18o8ve"}],["path",{d:"M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2",key:"1ag4bs"}],["path",{d:"M2.5 13 5 7c.7-1.3 1.4-2 3-2",key:"1hm1gs"}],["path",{d:"M21.5 13 19 7c-.7-1.3-1.5-2-3-2",key:"1r31ai"}]],Z1=oe("glasses",Q1);const W1=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],K1=oe("grid-3x3",W1);const J1=[["path",{d:"m11 17 2 2a1 1 0 1 0 3-3",key:"efffak"}],["path",{d:"m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4",key:"9pr0kb"}],["path",{d:"m21 3 1 11h-2",key:"1tisrp"}],["path",{d:"M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3",key:"1uvwmv"}],["path",{d:"M3 4h8",key:"1ep09j"}]],I1=oe("handshake",J1);const F1=[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]],P1=oe("hash",F1);const eb=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],ft=oe("heart",eb);const tb=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],Ba=oe("house",tb);const ab=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],vd=oe("image",ab);const nb=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]],ib=oe("layout-dashboard",nb);const rb=[["path",{d:"M3 5h.01",key:"18ugdj"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 19h.01",key:"noohij"}],["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 19h13",key:"m83p4d"}]],lb=oe("list",rb);const sb=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],Rs=oe("lock",sb);const ob=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],ng=oe("log-out",ob);const cb=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],Od=oe("mail",cb);const db=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],ha=oe("map-pin",db);const ub=[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]],Ti=oe("map",ub);const pb=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],fb=oe("menu",pb);const hb=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]],la=oe("message-circle",hb);const gb=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],mb=oe("message-square",gb);const xb=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],Un=oe("moon",xb);const yb=[["path",{d:"m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551",key:"1miecu"}]],bb=oe("paperclip",yb);const vb=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],ig=oe("pen",vb);const jb=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],Ls=oe("phone",jb);const wb=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],rg=oe("save",wb);const Sb=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],La=oe("search",Sb);const kb=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],zb=oe("send",kb);const Cb=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Nb=oe("settings",Cb);const _b=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],Ud=oe("share-2",_b);const Eb=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],qg=oe("shield",Eb);const Rb=[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]],Tb=oe("shopping-cart",Rb);const Ab=[["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M12 21v-9",key:"17s77i"}],["path",{d:"M12 8V3",key:"13r4qs"}],["path",{d:"M17 16h4",key:"h1uq16"}],["path",{d:"M19 12V3",key:"o1uvq1"}],["path",{d:"M19 21v-5",key:"qua636"}],["path",{d:"M3 14h4",key:"bcjad9"}],["path",{d:"M5 10V3",key:"cb8scm"}],["path",{d:"M5 21v-7",key:"1w1uti"}]],lg=oe("sliders-vertical",Ab);const Mb=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],Db=oe("smartphone",Mb);const Bb=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]],$g=oe("smile",Bb);const Ob=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],Gr=oe("square",Ob);const Ub=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],fd=oe("star",Ub);const Lb=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],Ln=oe("sun",Lb);const Hb=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],Yb=oe("trending-up",Hb);const qb=[["path",{d:"M12 4v16",key:"1654pz"}],["path",{d:"M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2",key:"e0r10z"}],["path",{d:"M9 20h6",key:"s66wpe"}]],$b=oe("type",qb);const Gb=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],Vb=oe("upload",Gb);const Xb=[["path",{d:"m16 11 2 2 4-4",key:"9rsbq5"}],["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],Qb=oe("user-check",Xb);const Zb=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]],Gg=oe("user-plus",Zb);const Wb=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Tt=oe("user",Wb);const Kb=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]],Vg=oe("video",Kb);const Jb=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],ra=oe("x",Jb),Xg=h.createContext();function Ib({children:r}){const[s,d]=h.useState(()=>localStorage.getItem("theme")||"light");h.useEffect(()=>{localStorage.setItem("theme",s),document.documentElement.setAttribute("data-theme",s)},[s]);const c=()=>{d(f=>f==="light"?"dark":"light")};return n.jsx(Xg.Provider,{value:{theme:s,toggleTheme:c},children:r})}function Ld(){const r=h.useContext(Xg);return r||{theme:"light",toggleTheme:()=>{}}}const Fb="$$material";function Pb(r){if(r.sheet)return r.sheet;for(var s=0;s<document.styleSheets.length;s++)if(document.styleSheets[s].ownerNode===r)return document.styleSheets[s]}function ev(r){var s=document.createElement("style");return s.setAttribute("data-emotion",r.key),r.nonce!==void 0&&s.setAttribute("nonce",r.nonce),s.appendChild(document.createTextNode("")),s.setAttribute("data-s",""),s}var tv=(function(){function r(d){var c=this;this._insertTag=function(f){var p;c.tags.length===0?c.insertionPoint?p=c.insertionPoint.nextSibling:c.prepend?p=c.container.firstChild:p=c.before:p=c.tags[c.tags.length-1].nextSibling,c.container.insertBefore(f,p),c.tags.push(f)},this.isSpeedy=d.speedy===void 0?!0:d.speedy,this.tags=[],this.ctr=0,this.nonce=d.nonce,this.key=d.key,this.container=d.container,this.prepend=d.prepend,this.insertionPoint=d.insertionPoint,this.before=null}var s=r.prototype;return s.hydrate=function(c){c.forEach(this._insertTag)},s.insert=function(c){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(ev(this));var f=this.tags[this.tags.length-1];if(this.isSpeedy){var p=Pb(f);try{p.insertRule(c,p.cssRules.length)}catch{}}else f.appendChild(document.createTextNode(c));this.ctr++},s.flush=function(){this.tags.forEach(function(c){var f;return(f=c.parentNode)==null?void 0:f.removeChild(c)}),this.tags=[],this.ctr=0},r})(),wt="-ms-",Ts="-moz-",Oe="-webkit-",Qg="comm",Hd="rule",Yd="decl",av="@import",Zg="@keyframes",nv="@layer",iv=Math.abs,Hs=String.fromCharCode,rv=Object.assign;function lv(r,s){return bt(r,0)^45?(((s<<2^bt(r,0))<<2^bt(r,1))<<2^bt(r,2))<<2^bt(r,3):0}function Wg(r){return r.trim()}function sv(r,s){return(r=s.exec(r))?r[0]:r}function Ue(r,s,d){return r.replace(s,d)}function jd(r,s){return r.indexOf(s)}function bt(r,s){return r.charCodeAt(s)|0}function Vr(r,s,d){return r.slice(s,d)}function pa(r){return r.length}function qd(r){return r.length}function bs(r,s){return s.push(r),r}function ov(r,s){return r.map(s).join("")}var Ys=1,Mi=1,Kg=0,At=0,ot=0,Ui="";function qs(r,s,d,c,f,p,g){return{value:r,root:s,parent:d,type:c,props:f,children:p,line:Ys,column:Mi,length:g,return:""}}function Br(r,s){return rv(qs("",null,null,"",null,null,0),r,{length:-r.length},s)}function cv(){return ot}function dv(){return ot=At>0?bt(Ui,--At):0,Mi--,ot===10&&(Mi=1,Ys--),ot}function Yt(){return ot=At<Kg?bt(Ui,At++):0,Mi++,ot===10&&(Mi=1,Ys++),ot}function fa(){return bt(Ui,At)}function zs(){return At}function Kr(r,s){return Vr(Ui,r,s)}function Xr(r){switch(r){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Jg(r){return Ys=Mi=1,Kg=pa(Ui=r),At=0,[]}function Ig(r){return Ui="",r}function Cs(r){return Wg(Kr(At-1,wd(r===91?r+2:r===40?r+1:r)))}function uv(r){for(;(ot=fa())&&ot<33;)Yt();return Xr(r)>2||Xr(ot)>3?"":" "}function pv(r,s){for(;--s&&Yt()&&!(ot<48||ot>102||ot>57&&ot<65||ot>70&&ot<97););return Kr(r,zs()+(s<6&&fa()==32&&Yt()==32))}function wd(r){for(;Yt();)switch(ot){case r:return At;case 34:case 39:r!==34&&r!==39&&wd(ot);break;case 40:r===41&&wd(r);break;case 92:Yt();break}return At}function fv(r,s){for(;Yt()&&r+ot!==57;)if(r+ot===84&&fa()===47)break;return"/*"+Kr(s,At-1)+"*"+Hs(r===47?r:Yt())}function hv(r){for(;!Xr(fa());)Yt();return Kr(r,At)}function gv(r){return Ig(Ns("",null,null,null,[""],r=Jg(r),0,[0],r))}function Ns(r,s,d,c,f,p,g,y,b){for(var m=0,j=0,v=g,k=0,_=0,A=0,z=1,T=1,D=1,G=0,K="",q=f,S=p,U=c,$=K;T;)switch(A=G,G=Yt()){case 40:if(A!=108&&bt($,v-1)==58){jd($+=Ue(Cs(G),"&","&\f"),"&\f")!=-1&&(D=-1);break}case 34:case 39:case 91:$+=Cs(G);break;case 9:case 10:case 13:case 32:$+=uv(A);break;case 92:$+=pv(zs()-1,7);continue;case 47:switch(fa()){case 42:case 47:bs(mv(fv(Yt(),zs()),s,d),b);break;default:$+="/"}break;case 123*z:y[m++]=pa($)*D;case 125*z:case 59:case 0:switch(G){case 0:case 125:T=0;case 59+j:D==-1&&($=Ue($,/\f/g,"")),_>0&&pa($)-v&&bs(_>32?og($+";",c,d,v-1):og(Ue($," ","")+";",c,d,v-2),b);break;case 59:$+=";";default:if(bs(U=sg($,s,d,m,j,f,y,K,q=[],S=[],v),p),G===123)if(j===0)Ns($,s,U,U,q,p,v,y,S);else switch(k===99&&bt($,3)===110?100:k){case 100:case 108:case 109:case 115:Ns(r,U,U,c&&bs(sg(r,U,U,0,0,f,y,K,f,q=[],v),S),f,S,v,y,c?q:S);break;default:Ns($,U,U,U,[""],S,0,y,S)}}m=j=_=0,z=D=1,K=$="",v=g;break;case 58:v=1+pa($),_=A;default:if(z<1){if(G==123)--z;else if(G==125&&z++==0&&dv()==125)continue}switch($+=Hs(G),G*z){case 38:D=j>0?1:($+="\f",-1);break;case 44:y[m++]=(pa($)-1)*D,D=1;break;case 64:fa()===45&&($+=Cs(Yt())),k=fa(),j=v=pa(K=$+=hv(zs())),G++;break;case 45:A===45&&pa($)==2&&(z=0)}}return p}function sg(r,s,d,c,f,p,g,y,b,m,j){for(var v=f-1,k=f===0?p:[""],_=qd(k),A=0,z=0,T=0;A<c;++A)for(var D=0,G=Vr(r,v+1,v=iv(z=g[A])),K=r;D<_;++D)(K=Wg(z>0?k[D]+" "+G:Ue(G,/&\f/g,k[D])))&&(b[T++]=K);return qs(r,s,d,f===0?Hd:y,b,m,j)}function mv(r,s,d){return qs(r,s,d,Qg,Hs(cv()),Vr(r,2,-2),0)}function og(r,s,d,c){return qs(r,s,d,Yd,Vr(r,0,c),Vr(r,c+1,-1),c)}function Ai(r,s){for(var d="",c=qd(r),f=0;f<c;f++)d+=s(r[f],f,r,s)||"";return d}function xv(r,s,d,c){switch(r.type){case nv:if(r.children.length)break;case av:case Yd:return r.return=r.return||r.value;case Qg:return"";case Zg:return r.return=r.value+"{"+Ai(r.children,c)+"}";case Hd:r.value=r.props.join(",")}return pa(d=Ai(r.children,c))?r.return=r.value+"{"+d+"}":""}function yv(r){var s=qd(r);return function(d,c,f,p){for(var g="",y=0;y<s;y++)g+=r[y](d,c,f,p)||"";return g}}function bv(r){return function(s){s.root||(s=s.return)&&r(s)}}var vv=function(s,d,c){for(var f=0,p=0;f=p,p=fa(),f===38&&p===12&&(d[c]=1),!Xr(p);)Yt();return Kr(s,At)},jv=function(s,d){var c=-1,f=44;do switch(Xr(f)){case 0:f===38&&fa()===12&&(d[c]=1),s[c]+=vv(At-1,d,c);break;case 2:s[c]+=Cs(f);break;case 4:if(f===44){s[++c]=fa()===58?"&\f":"",d[c]=s[c].length;break}default:s[c]+=Hs(f)}while(f=Yt());return s},wv=function(s,d){return Ig(jv(Jg(s),d))},cg=new WeakMap,Sv=function(s){if(!(s.type!=="rule"||!s.parent||s.length<1)){for(var d=s.value,c=s.parent,f=s.column===c.column&&s.line===c.line;c.type!=="rule";)if(c=c.parent,!c)return;if(!(s.props.length===1&&d.charCodeAt(0)!==58&&!cg.get(c))&&!f){cg.set(s,!0);for(var p=[],g=wv(d,p),y=c.props,b=0,m=0;b<g.length;b++)for(var j=0;j<y.length;j++,m++)s.props[m]=p[b]?g[b].replace(/&\f/g,y[j]):y[j]+" "+g[b]}}},kv=function(s){if(s.type==="decl"){var d=s.value;d.charCodeAt(0)===108&&d.charCodeAt(2)===98&&(s.return="",s.value="")}};function Fg(r,s){switch(lv(r,s)){case 5103:return Oe+"print-"+r+r;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Oe+r+r;case 5349:case 4246:case 4810:case 6968:case 2756:return Oe+r+Ts+r+wt+r+r;case 6828:case 4268:return Oe+r+wt+r+r;case 6165:return Oe+r+wt+"flex-"+r+r;case 5187:return Oe+r+Ue(r,/(\w+).+(:[^]+)/,Oe+"box-$1$2"+wt+"flex-$1$2")+r;case 5443:return Oe+r+wt+"flex-item-"+Ue(r,/flex-|-self/,"")+r;case 4675:return Oe+r+wt+"flex-line-pack"+Ue(r,/align-content|flex-|-self/,"")+r;case 5548:return Oe+r+wt+Ue(r,"shrink","negative")+r;case 5292:return Oe+r+wt+Ue(r,"basis","preferred-size")+r;case 6060:return Oe+"box-"+Ue(r,"-grow","")+Oe+r+wt+Ue(r,"grow","positive")+r;case 4554:return Oe+Ue(r,/([^-])(transform)/g,"$1"+Oe+"$2")+r;case 6187:return Ue(Ue(Ue(r,/(zoom-|grab)/,Oe+"$1"),/(image-set)/,Oe+"$1"),r,"")+r;case 5495:case 3959:return Ue(r,/(image-set\([^]*)/,Oe+"$1$`$1");case 4968:return Ue(Ue(r,/(.+:)(flex-)?(.*)/,Oe+"box-pack:$3"+wt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Oe+r+r;case 4095:case 3583:case 4068:case 2532:return Ue(r,/(.+)-inline(.+)/,Oe+"$1$2")+r;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(pa(r)-1-s>6)switch(bt(r,s+1)){case 109:if(bt(r,s+4)!==45)break;case 102:return Ue(r,/(.+:)(.+)-([^]+)/,"$1"+Oe+"$2-$3$1"+Ts+(bt(r,s+3)==108?"$3":"$2-$3"))+r;case 115:return~jd(r,"stretch")?Fg(Ue(r,"stretch","fill-available"),s)+r:r}break;case 4949:if(bt(r,s+1)!==115)break;case 6444:switch(bt(r,pa(r)-3-(~jd(r,"!important")&&10))){case 107:return Ue(r,":",":"+Oe)+r;case 101:return Ue(r,/(.+:)([^;!]+)(;|!.+)?/,"$1"+Oe+(bt(r,14)===45?"inline-":"")+"box$3$1"+Oe+"$2$3$1"+wt+"$2box$3")+r}break;case 5936:switch(bt(r,s+11)){case 114:return Oe+r+wt+Ue(r,/[svh]\w+-[tblr]{2}/,"tb")+r;case 108:return Oe+r+wt+Ue(r,/[svh]\w+-[tblr]{2}/,"tb-rl")+r;case 45:return Oe+r+wt+Ue(r,/[svh]\w+-[tblr]{2}/,"lr")+r}return Oe+r+wt+r+r}return r}var zv=function(s,d,c,f){if(s.length>-1&&!s.return)switch(s.type){case Yd:s.return=Fg(s.value,s.length);break;case Zg:return Ai([Br(s,{value:Ue(s.value,"@","@"+Oe)})],f);case Hd:if(s.length)return ov(s.props,function(p){switch(sv(p,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Ai([Br(s,{props:[Ue(p,/:(read-\w+)/,":"+Ts+"$1")]})],f);case"::placeholder":return Ai([Br(s,{props:[Ue(p,/:(plac\w+)/,":"+Oe+"input-$1")]}),Br(s,{props:[Ue(p,/:(plac\w+)/,":"+Ts+"$1")]}),Br(s,{props:[Ue(p,/:(plac\w+)/,wt+"input-$1")]})],f)}return""})}},Cv=[zv],Nv=function(s){var d=s.key;if(d==="css"){var c=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(c,function(z){var T=z.getAttribute("data-emotion");T.indexOf(" ")!==-1&&(document.head.appendChild(z),z.setAttribute("data-s",""))})}var f=s.stylisPlugins||Cv,p={},g,y=[];g=s.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+d+' "]'),function(z){for(var T=z.getAttribute("data-emotion").split(" "),D=1;D<T.length;D++)p[T[D]]=!0;y.push(z)});var b,m=[Sv,kv];{var j,v=[xv,bv(function(z){j.insert(z)})],k=yv(m.concat(f,v)),_=function(T){return Ai(gv(T),k)};b=function(T,D,G,K){j=G,_(T?T+"{"+D.styles+"}":D.styles),K&&(A.inserted[D.name]=!0)}}var A={key:d,sheet:new tv({key:d,container:g,nonce:s.nonce,speedy:s.speedy,prepend:s.prepend,insertionPoint:s.insertionPoint}),nonce:s.nonce,inserted:p,registered:{},insert:b};return A.sheet.hydrate(y),A},_v=h.createContext(typeof HTMLElement<"u"?Nv({key:"css"}):null);_v.Provider;var Ev=h.createContext({});function Rv(r){return Object.keys(r).length===0}function Tv(r=null){const s=h.useContext(Ev);return!s||Rv(s)?r:s}function Pg(r){var s,d,c="";if(typeof r=="string"||typeof r=="number")c+=r;else if(typeof r=="object")if(Array.isArray(r)){var f=r.length;for(s=0;s<f;s++)r[s]&&(d=Pg(r[s]))&&(c&&(c+=" "),c+=d)}else for(d in r)r[d]&&(c&&(c+=" "),c+=d);return c}function Av(){for(var r,s,d=0,c="",f=arguments.length;d<f;d++)(r=arguments[d])&&(s=Pg(r))&&(c&&(c+=" "),c+=s);return c}function e0(r,s,d=!1){const c={...s};for(const f in r)if(Object.prototype.hasOwnProperty.call(r,f)){const p=f;if(p==="components"||p==="slots")c[p]={...r[p],...c[p]};else if(p==="componentsProps"||p==="slotProps"){const g=r[p],y=s[p];if(!y)c[p]=g||{};else if(!g)c[p]=y;else{c[p]={...y};for(const b in g)if(Object.prototype.hasOwnProperty.call(g,b)){const m=b;c[p][m]=e0(g[m],y[m],d)}}}else p==="className"&&d&&s.className?c.className=Av(r?.className,s?.className):p==="style"&&d&&s.style?c.style={...r?.style,...s?.style}:c[p]===void 0&&(c[p]=r[p])}return c}function Mv(r){const{theme:s,name:d,props:c}=r;return!s||!s.components||!s.components[d]||!s.components[d].defaultProps?c:e0(s.components[d].defaultProps,c)}const Dv=typeof window<"u"?h.useLayoutEffect:h.useEffect;function Bv(r,s,d,c,f){const[p,g]=h.useState(()=>f&&d?d(r).matches:c?c(r).matches:s);return Dv(()=>{if(!d)return;const y=d(r),b=()=>{g(y.matches)};return b(),y.addEventListener("change",b),()=>{y.removeEventListener("change",b)}},[r,d]),p}const Ov={...Sx},t0=Ov.useSyncExternalStore;function Uv(r,s,d,c,f){const p=h.useCallback(()=>s,[s]),g=h.useMemo(()=>{if(f&&d)return()=>d(r).matches;if(c!==null){const{matches:j}=c(r);return()=>j}return p},[p,r,c,f,d]),[y,b]=h.useMemo(()=>{if(d===null)return[p,()=>()=>{}];const j=d(r);return[()=>j.matches,v=>(j.addEventListener("change",v),()=>{j.removeEventListener("change",v)})]},[p,d,r]);return t0(b,y,g)}function a0(r={}){const{themeId:s}=r;return function(c,f={}){let p=Tv();p&&s&&(p=p[s]||p);const g=typeof window<"u"&&typeof window.matchMedia<"u",{defaultMatches:y=!1,matchMedia:b=g?window.matchMedia:null,ssrMatchMedia:m=null,noSsr:j=!1}=Mv({name:"MuiUseMediaQuery",props:f,theme:p});let v=typeof c=="function"?c(p):c;return v=v.replace(/^@media( ?)/m,""),v.includes("print")&&console.warn(["MUI: You have provided a `print` query to the `useMediaQuery` hook.","Using the print media query to modify print styles can lead to unexpected results.","Consider using the `displayPrint` field in the `sx` prop instead.","More information about `displayPrint` on our docs: https://mui.com/system/display/#display-in-print."].join(`
`)),(t0!==void 0?Uv:Bv)(v,y,b,m,j)}}a0();const un=a0({themeId:Fb}),Lv="auth-channel",_i="auth_token",Or="auth_user";let Bn=null;typeof BroadcastChannel<"u"&&(Bn=new BroadcastChannel(Lv));Bn&&(Bn.onmessage=r=>{r.data.type==="LOGIN"?r.data.token&&r.data.user&&(sessionStorage.setItem(_i,r.data.token),sessionStorage.setItem(Or,JSON.stringify(r.data.user)),window.dispatchEvent(new CustomEvent("auth-login",{detail:r.data}))):r.data.type==="LOGOUT"&&window.dispatchEvent(new CustomEvent("auth-logout",{detail:r.data}))});const Le={getToken:()=>sessionStorage.getItem(_i),getUser:()=>{const r=sessionStorage.getItem(Or);return r?JSON.parse(r):null},setAuth:(r,s)=>{sessionStorage.setItem(_i,r),sessionStorage.setItem(Or,JSON.stringify(s)),Bn&&Bn.postMessage({type:"LOGIN",token:r,user:s})},clearAuth:()=>{sessionStorage.removeItem(_i),sessionStorage.removeItem(Or),Bn&&Bn.postMessage({type:"LOGOUT",timestamp:Date.now()})},isAuthenticated:()=>!!sessionStorage.getItem(_i),setToken:r=>{sessionStorage.setItem(_i,r)},setUser:r=>{sessionStorage.setItem(Or,JSON.stringify(r))}},ee="http://localhost:8000",le=()=>{const r=Le.getToken();return r?{Authorization:`Token ${r}`}:{}},ae=async r=>{let s;const d=r.headers.get("content-type");if(d&&d.includes("application/json"))s=await r.json();else{const c=await r.text();if(!r.ok)throw new Error(`Server error: ${r.status} - ${c.substring(0,200)}...`);return{message:c}}if(!r.ok){const c=new Error(s.error||s.detail||"An error occurred");throw c.response=r,c.data=s,c}return s},Hv={signup:async(r,s,d="",c,f=!1,p={},g=[])=>{const y=new FormData;y.append("email",r),y.append("password",s),y.append("name",c),y.append("is_landlord",!1),d&&d.trim()&&y.append("phone_number",d),p.pinned_location_lat&&y.append("pinned_location_lat",p.pinned_location_lat),p.pinned_location_lng&&y.append("pinned_location_lng",p.pinned_location_lng),p.locality&&y.append("locality",p.locality),g&&g.length>0&&g.forEach(m=>{y.append("images",m)});const b=await fetch(`${ee}/api/auth/signup/`,{method:"POST",body:y});return ae(b)},login:async(r,s)=>{const d=await fetch(`${ee}/api/auth/login/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:r,password:s})});return ae(d)},googleSignIn:async r=>{const s=await fetch(`${ee}/api/auth/google/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({access_token:r})});return ae(s)},logout:async()=>{const r=await fetch(`${ee}/api/auth/logout/`,{method:"POST",headers:{...le()}});return Le.clearAuth(),ae(r)},getCurrentUser:async()=>{const r=await fetch(`${ee}/api/auth/me/`,{headers:{...le()}});return ae(r)},searchUsers:async r=>{const s=await fetch(`${ee}/api/auth/search/?q=${encodeURIComponent(r)}`,{headers:{...le()}});return ae(s)}},Yv={getProfile:async()=>{const r=await fetch(`${ee}/api/auth/profile/`,{headers:{...le()}});return ae(r)},updateProfile:async r=>{const s=r instanceof FormData?r:(()=>{const c=new FormData;return Object.keys(r).forEach(f=>{r[f]!==void 0&&r[f]!==null&&r[f]!==""&&c.append(f,r[f])}),c})(),d=await fetch(`${ee}/api/auth/profile/`,{method:"PUT",headers:{...le()},body:s});return ae(d)},requestDeleteAccount:async()=>{const r=await fetch(`${ee}/api/auth/profile/delete/`,{method:"POST",headers:{...le()}});return ae(r)},cancelDeleteRequest:async()=>{const r=await fetch(`${ee}/api/auth/profile/delete/cancel/`,{method:"POST",headers:{...le()}});return ae(r)},uploadProfilePicture:async r=>{const s=new FormData;s.append("profile_picture",r);const d=await fetch(`${ee}/api/auth/profile/picture/`,{method:"POST",headers:{...le()},body:s});return ae(d)},getProfileById:async r=>{const s=await fetch(`${ee}/api/auth/profile/${r}/`,{headers:{...le()}});return ae(s)}},qv={getRecentSearches:async()=>{const r=await fetch(`${ee}/api/auth/recent-searches/`,{headers:{...le()}});return ae(r)},saveRecentSearch:async r=>{const s=await fetch(`${ee}/api/auth/recent-searches/save/`,{method:"POST",headers:{"Content-Type":"application/json",...le()},body:JSON.stringify({query:r.trim()})});return ae(s)}},$v={getDashboard:async()=>{const r=await fetch(`${ee}/api/admin/dashboard/`,{headers:{...le()}});return ae(r)},createUser:async(r,s,d,c=!1,f=!1,p={})=>{const g=await fetch(`${ee}/api/admin/users/create/`,{method:"POST",headers:{"Content-Type":"application/json",...le()},body:JSON.stringify({email:r,phone_number:s,password:d,is_landlord:c,is_verified:f,...p})});return ae(g)},getAllUsers:async()=>{const r=await fetch(`${ee}/api/admin/users/`,{headers:{...le()}});return ae(r)},updateUser:async(r,s)=>{const d=await fetch(`${ee}/api/admin/users/${r}/`,{method:"PUT",headers:{"Content-Type":"application/json",...le()},body:JSON.stringify(s)});return ae(d)},getAdminHouses:async()=>{const r=await fetch(`${ee}/api/admin/houses/`,{headers:{...le()}});return ae(r)},createAdminHouse:async r=>{const s=await fetch(`${ee}/api/admin/houses/create/`,{method:"POST",headers:{...le()},body:r});return ae(s)},approveHouse:async r=>{const s=await fetch(`${ee}/api/admin/houses/${r}/approve/`,{method:"POST",headers:{...le()}});return ae(s)},rejectHouse:async(r,s="")=>{const d=await fetch(`${ee}/api/admin/houses/${r}/reject/`,{method:"POST",headers:{"Content-Type":"application/json",...le()},body:JSON.stringify({rejection_reason:s})});return ae(d)},getDeleteRequests:async()=>{const r=await fetch(`${ee}/api/admin/delete-requests/`,{headers:{...le()}});return ae(r)},processDeleteRequest:async(r,s)=>{const d=await fetch(`${ee}/api/admin/delete-requests/${r}/process/`,{method:"POST",headers:{"Content-Type":"application/json",...le()},body:JSON.stringify({action:s})});return ae(d)},getSiteSettings:async()=>{const r=await fetch(`${ee}/api/settings/`,{headers:{...le()}});return ae(r)},updateSiteSettings:async r=>{const s=new FormData;Object.keys(r).forEach(c=>{r[c]!==void 0&&r[c]!==null&&s.append(c,r[c])});const d=await fetch(`${ee}/api/settings/`,{method:"PUT",headers:{...le()},body:s});return ae(d)},getAnalyticsSignups:async(r="month")=>{const s=await fetch(`${ee}/api/analytics/signups/?period=${r}`,{headers:{...le()}});return ae(s)},getAnalyticsVisits:async(r="month")=>{const s=await fetch(`${ee}/api/analytics/visits/?period=${r}`,{headers:{...le()}});return ae(s)},getAnalyticsHouses:async(r="month")=>{const s=await fetch(`${ee}/api/analytics/houses/?period=${r}`,{headers:{...le()}});return ae(s)},getSignupsByTime:async(r="day")=>{const s=await fetch(`${ee}/api/analytics/signups-by-time/?period=${r}`,{headers:{...le()}});return ae(s)},getVisitsByTime:async(r="day")=>{const s=await fetch(`${ee}/api/analytics/visits-by-time/?period=${r}`,{headers:{...le()}});return ae(s)},getHousesByTime:async(r="day")=>{const s=await fetch(`${ee}/api/analytics/houses-by-time/?period=${r}`,{headers:{...le()}});return ae(s)},getMostLikedHouses:async(r=10)=>{const s=await fetch(`${ee}/api/analytics/most-liked-houses/?limit=${r}`,{headers:{...le()}});return ae(s)},getHouseTypes:async()=>{const r=await fetch(`${ee}/api/analytics/house-types/`,{headers:{...le()}});return ae(r)},getLocations:async()=>{const r=await fetch(`${ee}/api/analytics/locations/`,{headers:{...le()}});return ae(r)},getMostSearchedPrices:async(r=20)=>{const s=await fetch(`${ee}/api/analytics/most-searched-prices/?limit=${r}`,{headers:{...le()}});return ae(s)},getAvailableHouses:async()=>{const r=await fetch(`${ee}/api/analytics/available-houses/`,{headers:{...le()}});return ae(r)},getAdminProAccounts:async()=>{const r=await fetch(`${ee}/api/analytics/admin-pro-accounts/`,{headers:{...le()}});return ae(r)},getAdminUsers:async()=>{const r=await fetch(`${ee}/api/admin/users/`,{headers:{...le()}});return ae(r)},getAdminHouses:async()=>{const r=await fetch(`${ee}/api/admin/houses/`,{headers:{...le()}});return ae(r)},getAdminDeleteRequests:async()=>{const r=await fetch(`${ee}/api/admin/delete-requests/`,{headers:{...le()}});return ae(r)},approveHouse:async r=>{const s=await fetch(`${ee}/api/admin/houses/${r}/approve/`,{method:"POST",headers:{...le()}});return ae(s)},processDeleteRequest:async(r,s)=>{const d=await fetch(`${ee}/api/admin/delete-requests/${r}/process/`,{method:"POST",headers:{"Content-Type":"application/json",...le()},body:JSON.stringify({action:s})});return ae(d)}},Gv={getHouses:async(r={})=>{const s=new URLSearchParams(r).toString(),d=await fetch(`${ee}/api/houses/${s?`?${s}`:""}`,{headers:{...le()}});return ae(d)},getHouse:async r=>{const s=await fetch(`${ee}/api/houses/${r}/`,{headers:{...le()}});return ae(s)},createHouse:async r=>{const s=await fetch(`${ee}/api/houses/create/`,{method:"POST",headers:{...le()},body:r});return ae(s)},updateHouse:async(r,s)=>{const d=await fetch(`${ee}/api/houses/${r}/update/`,{method:"PUT",headers:{"Content-Type":"application/json",...le()},body:JSON.stringify(s)});return ae(d)},requestDeleteHouse:async(r,s="")=>{const d=await fetch(`${ee}/api/houses/${r}/delete-request/`,{method:"POST",headers:{"Content-Type":"application/json",...le()},body:JSON.stringify({reason:s})});return ae(d)},likeHouse:async r=>{const s=await fetch(`${ee}/api/houses/${r}/like/`,{method:"POST",headers:{...le()}});return ae(s)},getMyHouses:async()=>{const r=await fetch(`${ee}/api/houses/my/`,{headers:{...le()}});return ae(r)}},Vv={getActivities:async(r=20)=>{const s=await fetch(`${ee}/api/activities/?limit=${r}`,{headers:{...le()}});return ae(s)},getRecentViews:async(r=20)=>{const s=await fetch(`${ee}/api/activities/recent/?limit=${r}`,{headers:{...le()}});return ae(s)},getLiked:async()=>{const r=await fetch(`${ee}/api/activities/liked/`,{headers:{...le()}});return ae(r)},getStats:async()=>{const r=await fetch(`${ee}/api/activities/stats/`,{headers:{...le()}});return ae(r)},trackContact:async r=>{const s=await fetch(`${ee}/api/activities/contact/`,{method:"POST",headers:{"Content-Type":"application/json",...le()},body:JSON.stringify({house_id:r})});return ae(s)},trackActivity:async(r,s,d="listing",c={})=>{const f=await fetch(`${ee}/api/activities/track/`,{method:"POST",headers:{"Content-Type":"application/json",...le()},body:JSON.stringify({activity_type:r,target_id:s,target_type:d,metadata:c})});return ae(f)}},Xv={list:async()=>{const r=await fetch(`${ee}/api/saved-searches/`,{headers:{...le()}});return ae(r)},create:async r=>{const s=await fetch(`${ee}/api/saved-searches/`,{method:"POST",headers:{"Content-Type":"application/json",...le()},body:JSON.stringify(r)});return ae(s)},delete:async r=>{const s=await fetch(`${ee}/api/saved-searches/${r}/`,{method:"DELETE",headers:{...le()}});if(s.status!==204)return ae(s)}},Qv={getUserLikes:async()=>{const r=await fetch(`${ee}/api/likes/`,{headers:{...le()}});return ae(r)}},Zv={sendMessage:async(r,s,d,c=null)=>{const f={content:d};r&&(f.recipient_id=r),s&&(f.house_id=s),c&&(f.phone_number=c);const p=await fetch(`${ee}/api/houses/messages/send/`,{method:"POST",headers:{"Content-Type":"application/json",...le()},body:JSON.stringify(f)});return ae(p)},getMessages:async(r=null)=>{const s=r?`${ee}/api/houses/messages/?with_user=${r}`:`${ee}/api/houses/messages/`,d=await fetch(s,{headers:{...le()}});return ae(d)},getConversations:async()=>{const r=await fetch(`${ee}/api/houses/conversations/`,{headers:{...le()}});return ae(r)},getUnreadCount:async()=>{const r=await fetch(`${ee}/api/houses/messages/unread-count/`,{headers:{...le()}});return ae(r)},markMessagesRead:async r=>{const s=await fetch(`${ee}/api/houses/messages/mark-read/`,{method:"POST",headers:{...le(),"Content-Type":"application/json"},body:JSON.stringify({recipient_id:r})});return ae(s)},searchUserByPhone:async r=>{const s=await fetch(`${ee}/api/auth/search-by-phone/`,{method:"POST",headers:{"Content-Type":"application/json",...le()},body:JSON.stringify({phone_number:r})});return ae(s)},searchUsers:async r=>{const s=await fetch(`${ee}/api/auth/search/?q=${encodeURIComponent(r)}`,{headers:{...le()}});return ae(s)}},dg={getMemes:async()=>{const r=await fetch(`${ee}/api/memes/`,{headers:{}});return ae(r)},createMeme:async r=>{const s=new FormData;Object.keys(r).forEach(c=>{r[c]!==void 0&&r[c]!==null&&s.append(c,r[c])});const d=await fetch(`${ee}/api/memes/create/`,{method:"POST",headers:{...le()},body:s});return ae(d)},likeMeme:async r=>{const s=await fetch(`${ee}/api/memes/${r}/like/`,{method:"POST",headers:{...le()}});return ae(s)}},Dn={getSignups:async(r="month")=>{const s=await fetch(`${ee}/api/analytics/signups/?period=${r}`,{headers:{...le()}});return ae(s)},getVisits:async(r="month")=>{const s=await fetch(`${ee}/api/analytics/visits/?period=${r}`,{headers:{...le()}});return ae(s)},getHouses:async(r="month")=>{const s=await fetch(`${ee}/api/analytics/houses/?period=${r}`,{headers:{...le()}});return ae(s)},getMostLiked:async()=>{const r=await fetch(`${ee}/api/analytics/most-liked/`,{headers:{}});return ae(r)},getMostSearchedPrices:async()=>{const r=await fetch(`${ee}/api/analytics/prices/`,{headers:{}});return ae(r)},getHouseTypes:async()=>{const r=await fetch(`${ee}/api/analytics/types/`,{headers:{}});return ae(r)},getLocations:async()=>{const r=await fetch(`${ee}/api/analytics/locations/`,{headers:{}});return ae(r)}},xe={auth:Hv,profile:Yv,admin:$v,houses:Gv,likes:Qv,messages:Zv,memes:dg,memes:dg,analytics:Dn,activities:Vv,savedSearches:Xv,userSearch:qv};function As({onSuccess:r,onError:s,text:d="Sign in with Google",variant:c="default"}){const f=Dx({onSuccess:async g=>{try{const y=await xe.auth.googleSignIn(g.access_token);y.token&&(Le.setToken(y.token),Le.setUser(y.user),y.is_new_user||y.needs_profile_completion?r&&r({...y,needsProfileCompletion:!0}):r&&r(y))}catch(y){console.error("Google sign-in error:",y),s&&s(y)}},onError:g=>{console.error("Google OAuth error:",g),s&&s(g)}}),p=c==="outlined"?{display:"flex",alignItems:"center",gap:"8px",padding:"12px 24px",border:"1px solid var(--border)",borderRadius:"8px",background:"var(--bg-primary)",color:"var(--text-primary)",cursor:"pointer",fontSize:"14px",fontWeight:"500",transition:"all 0.2s"}:{display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",padding:"12px 24px",border:"none",borderRadius:"8px",background:"#4285F4",color:"white",cursor:"pointer",fontSize:"14px",fontWeight:"500",transition:"all 0.2s",width:"100%"};return n.jsxs("button",{onClick:()=>f(),style:p,onMouseEnter:g=>{c==="outlined"?g.currentTarget.style.borderColor="var(--primary)":g.currentTarget.style.background="#357AE8"},onMouseLeave:g=>{c==="outlined"?g.currentTarget.style.borderColor="var(--border)":g.currentTarget.style.background="#4285F4"},children:[n.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",children:[n.jsx("path",{d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z",fill:"#4285F4"}),n.jsx("path",{d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z",fill:"#34A853"}),n.jsx("path",{d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z",fill:"#FBBC05"}),n.jsx("path",{d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z",fill:"#EA4335"})]}),d]})}function Wv({isOpen:r,onClose:s,onSuccess:d,onSwitchToRegister:c}){const f=nt(),[p,g]=h.useState(""),[y,b]=h.useState(""),[m,j]=h.useState(!1),[v,k]=h.useState(!1),[_,A]=h.useState(""),z=async D=>{D.preventDefault(),k(!0),A("");try{const G=await xe.auth.login(p,y);G.token&&(Le.setToken(G.token),Le.setUser(G.user),d&&d(G),s(),f("/"))}catch(G){A(G.message||"Invalid email or password")}finally{k(!1)}},T=D=>{D.needsProfileCompletion?d&&d(D):(s(),f("/"))};return r?n.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.5)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3,padding:"20px"},onClick:s,children:n.jsxs("div",{style:{background:"var(--bg-primary)",borderRadius:"16px",width:"100%",maxWidth:"440px",maxHeight:"90vh",overflow:"auto",boxShadow:"0 20px 60px rgba(0,0,0,0.3)"},onClick:D=>D.stopPropagation(),children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"24px",borderBottom:"1px solid var(--border)"},children:[n.jsx("h2",{style:{margin:0,fontSize:"24px",fontWeight:"600",color:"var(--text-primary)"},children:"🔐 Sign In to HouseHunt"}),n.jsx("button",{onClick:s,style:{background:"none",border:"none",cursor:"pointer",color:"var(--text-secondary)",padding:"4px"},children:n.jsx(ra,{size:24})})]}),n.jsxs("div",{style:{padding:"24px"},children:[n.jsx(As,{onSuccess:T,onError:D=>A(D.message)}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",margin:"24px 0",color:"var(--text-secondary)"},children:[n.jsx("div",{style:{flex:1,height:"1px",background:"var(--border)"}}),n.jsx("span",{style:{fontSize:"14px"},children:"OR"}),n.jsx("div",{style:{flex:1,height:"1px",background:"var(--border)"}})]}),n.jsxs("form",{onSubmit:z,children:[n.jsxs("div",{style:{marginBottom:"16px"},children:[n.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"8px",fontSize:"14px",fontWeight:"500",color:"var(--text-primary)"},children:[n.jsx(Od,{size:16}),"Email"]}),n.jsx("input",{type:"email",value:p,onChange:D=>g(D.target.value),placeholder:"john.doe@email.com",required:!0,style:{width:"100%",padding:"12px",border:"1px solid var(--border)",borderRadius:"8px",background:"var(--bg-secondary)",color:"var(--text-primary)",fontSize:"14px"}})]}),n.jsxs("div",{style:{marginBottom:"16px"},children:[n.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"8px",fontSize:"14px",fontWeight:"500",color:"var(--text-primary)"},children:[n.jsx(Rs,{size:16}),"Password"]}),n.jsxs("div",{style:{position:"relative"},children:[n.jsx("input",{type:m?"text":"password",value:y,onChange:D=>b(D.target.value),placeholder:"********",required:!0,style:{width:"100%",padding:"12px",paddingRight:"40px",border:"1px solid var(--border)",borderRadius:"8px",background:"var(--bg-secondary)",color:"var(--text-primary)",fontSize:"14px"}}),n.jsx("button",{type:"button",onClick:()=>j(!m),style:{position:"absolute",right:"8px",top:"50%",transform:"translateY(-50%)",background:"none",border:"none",cursor:"pointer",color:"var(--text-secondary)",padding:"4px"},children:m?n.jsx(bd,{size:18}):n.jsx(dt,{size:18})})]})]}),_&&n.jsx("div",{style:{padding:"12px",background:"rgba(239, 68, 68, 0.1)",color:"#ef4444",borderRadius:"8px",marginBottom:"16px",fontSize:"14px"},children:_}),n.jsx("div",{style:{marginBottom:"16px",textAlign:"right"},children:n.jsx("a",{href:"#",style:{fontSize:"14px",color:"var(--primary)",textDecoration:"none"},children:"Forgot Password?"})}),n.jsx("button",{type:"submit",disabled:v,style:{width:"100%",padding:"14px",background:v?"var(--text-secondary)":"var(--primary)",color:"white",border:"none",borderRadius:"8px",fontSize:"16px",fontWeight:"600",cursor:v?"not-allowed":"pointer",marginBottom:"16px"},children:v?"Signing in...":"Sign In"})]}),n.jsxs("div",{style:{textAlign:"center",fontSize:"14px",color:"var(--text-secondary)"},children:["Don't have an account?"," ",n.jsx("a",{href:"#",onClick:D=>{D.preventDefault(),s(),c&&c()},style:{color:"var(--primary)",textDecoration:"none",fontWeight:"500"},children:"Register"})]})]})]})}):null}function Kv({isOpen:r,onClose:s,onSuccess:d,onSwitchToSignIn:c}){const f=nt(),[p,g]=h.useState({name:"",email:"",password:"",confirmPassword:""}),[y,b]=h.useState(!1),[m,j]=h.useState(!1),[v,k]=h.useState(!1),[_,A]=h.useState(""),[z,T]=h.useState(!1),D=q=>{g({...p,[q.target.name]:q.target.value})},G=async q=>{if(q.preventDefault(),k(!0),A(""),p.password!==p.confirmPassword){A("Passwords do not match"),k(!1);return}if(!z){A("Please agree to Terms & Conditions"),k(!1);return}try{const S=await xe.auth.signup(p.email,p.password,"",p.name,!1,{},[]);S.token&&(Le.setToken(S.token),Le.setUser(S.user),d&&d(S),s(),f("/"))}catch(S){A(S.message||"Registration failed")}finally{k(!1)}},K=q=>{q.needsProfileCompletion?d&&d(q):(s(),f("/"))};return r?n.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.5)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3,padding:"20px"},onClick:s,children:n.jsxs("div",{style:{background:"var(--bg-primary)",borderRadius:"16px",width:"100%",maxWidth:"440px",maxHeight:"90vh",overflow:"auto",boxShadow:"0 20px 60px rgba(0,0,0,0.3)"},onClick:q=>q.stopPropagation(),children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"24px",borderBottom:"1px solid var(--border)"},children:[n.jsx("h2",{style:{margin:0,fontSize:"24px",fontWeight:"600",color:"var(--text-primary)"},children:"✨ Create Account"}),n.jsx("button",{onClick:s,style:{background:"none",border:"none",cursor:"pointer",color:"var(--text-secondary)",padding:"4px"},children:n.jsx(ra,{size:24})})]}),n.jsxs("div",{style:{padding:"24px"},children:[n.jsx(As,{text:"Sign up with Google",onSuccess:K,onError:q=>A(q.message)}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",margin:"24px 0",color:"var(--text-secondary)"},children:[n.jsx("div",{style:{flex:1,height:"1px",background:"var(--border)"}}),n.jsx("span",{style:{fontSize:"14px"},children:"OR"}),n.jsx("div",{style:{flex:1,height:"1px",background:"var(--border)"}})]}),n.jsxs("form",{onSubmit:G,children:[n.jsxs("div",{style:{marginBottom:"16px"},children:[n.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"8px",fontSize:"14px",fontWeight:"500",color:"var(--text-primary)"},children:[n.jsx(Tt,{size:16}),"Full Name"]}),n.jsx("input",{type:"text",name:"name",value:p.name,onChange:D,placeholder:"John Doe",required:!0,style:{width:"100%",padding:"12px",border:"1px solid var(--border)",borderRadius:"8px",background:"var(--bg-secondary)",color:"var(--text-primary)",fontSize:"14px"}})]}),n.jsxs("div",{style:{marginBottom:"16px"},children:[n.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"8px",fontSize:"14px",fontWeight:"500",color:"var(--text-primary)"},children:[n.jsx(Od,{size:16}),"Email"]}),n.jsx("input",{type:"email",name:"email",value:p.email,onChange:D,placeholder:"john.doe@email.com",required:!0,style:{width:"100%",padding:"12px",border:"1px solid var(--border)",borderRadius:"8px",background:"var(--bg-secondary)",color:"var(--text-primary)",fontSize:"14px"}})]}),n.jsxs("div",{style:{marginBottom:"16px"},children:[n.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"8px",fontSize:"14px",fontWeight:"500",color:"var(--text-primary)"},children:[n.jsx(Rs,{size:16}),"Password"]}),n.jsxs("div",{style:{position:"relative"},children:[n.jsx("input",{type:y?"text":"password",name:"password",value:p.password,onChange:D,placeholder:"********",required:!0,style:{width:"100%",padding:"12px",paddingRight:"40px",border:"1px solid var(--border)",borderRadius:"8px",background:"var(--bg-secondary)",color:"var(--text-primary)",fontSize:"14px"}}),n.jsx("button",{type:"button",onClick:()=>b(!y),style:{position:"absolute",right:"8px",top:"50%",transform:"translateY(-50%)",background:"none",border:"none",cursor:"pointer",color:"var(--text-secondary)",padding:"4px"},children:y?n.jsx(bd,{size:18}):n.jsx(dt,{size:18})})]})]}),n.jsxs("div",{style:{marginBottom:"16px"},children:[n.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"8px",fontSize:"14px",fontWeight:"500",color:"var(--text-primary)"},children:[n.jsx(Rs,{size:16}),"Confirm Password"]}),n.jsxs("div",{style:{position:"relative"},children:[n.jsx("input",{type:m?"text":"password",name:"confirmPassword",value:p.confirmPassword,onChange:D,placeholder:"********",required:!0,style:{width:"100%",padding:"12px",paddingRight:"40px",border:"1px solid var(--border)",borderRadius:"8px",background:"var(--bg-secondary)",color:"var(--text-primary)",fontSize:"14px"}}),n.jsx("button",{type:"button",onClick:()=>j(!m),style:{position:"absolute",right:"8px",top:"50%",transform:"translateY(-50%)",background:"none",border:"none",cursor:"pointer",color:"var(--text-secondary)",padding:"4px"},children:m?n.jsx(bd,{size:18}):n.jsx(dt,{size:18})})]})]}),n.jsxs("div",{style:{marginBottom:"16px",display:"flex",alignItems:"flex-start",gap:"8px"},children:[n.jsx("input",{type:"checkbox",id:"terms",checked:z,onChange:q=>T(q.target.checked),style:{marginTop:"4px",cursor:"pointer"}}),n.jsx("label",{htmlFor:"terms",style:{fontSize:"14px",color:"var(--text-secondary)",cursor:"pointer"},children:"I agree to Terms & Conditions"})]}),_&&n.jsx("div",{style:{padding:"12px",background:"rgba(239, 68, 68, 0.1)",color:"#ef4444",borderRadius:"8px",marginBottom:"16px",fontSize:"14px"},children:_}),n.jsx("button",{type:"submit",disabled:v,style:{width:"100%",padding:"14px",background:v?"var(--text-secondary)":"var(--primary)",color:"white",border:"none",borderRadius:"8px",fontSize:"16px",fontWeight:"600",cursor:v?"not-allowed":"pointer",marginBottom:"16px"},children:v?"Creating Account...":"Create Account"})]}),n.jsxs("div",{style:{textAlign:"center",fontSize:"14px",color:"var(--text-secondary)"},children:["Already have an account? ",n.jsx("a",{href:"#",onClick:q=>{q.preventDefault(),s(),c&&c()},style:{color:"var(--primary)",textDecoration:"none",fontWeight:"500"},children:"Sign In"})]})]})]})}):null}function Jv({isOpen:r,onClose:s,userData:d}){const c=nt(),[f,p]=h.useState({phone:"",location:""}),[g,y]=h.useState(!1),b=v=>{p({...f,[v.target.name]:v.target.value})},m=()=>{s(),c("/")},j=async()=>{y(!0);try{await xe.profile.updateProfile({phone_number:f.phone,locality:f.location}),s(),c("/")}catch(v){console.error("Profile update error:",v)}finally{y(!1)}};return r?n.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.5)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3,padding:"20px"},onClick:s,children:n.jsxs("div",{style:{background:"var(--bg-primary)",borderRadius:"16px",width:"100%",maxWidth:"440px",maxHeight:"90vh",overflow:"auto",boxShadow:"0 20px 60px rgba(0,0,0,0.3)"},onClick:v=>v.stopPropagation(),children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"24px",borderBottom:"1px solid var(--border)"},children:[n.jsxs("h2",{style:{margin:0,fontSize:"24px",fontWeight:"600",color:"var(--text-primary)"},children:["🎉 Welcome to HouseHunt",d?.name?`, ${d.name.split(" ")[0]}!`:"!"]}),n.jsx("button",{onClick:s,style:{background:"none",border:"none",cursor:"pointer",color:"var(--text-secondary)",padding:"4px"},children:n.jsx(ra,{size:24})})]}),n.jsxs("div",{style:{padding:"24px"},children:[d?.picture&&n.jsxs("div",{style:{textAlign:"center",marginBottom:"24px"},children:[n.jsx("img",{src:d.picture,alt:d.name,style:{width:"80px",height:"80px",borderRadius:"50%",marginBottom:"12px"}}),n.jsx("div",{style:{fontSize:"18px",fontWeight:"600",color:"var(--text-primary)",marginBottom:"4px"},children:d.name}),n.jsx("div",{style:{fontSize:"14px",color:"var(--text-secondary)"},children:d.email})]}),n.jsxs("div",{style:{marginBottom:"24px"},children:[n.jsx("p",{style:{fontSize:"14px",color:"var(--text-secondary)",marginBottom:"16px"},children:"Complete your profile to get started:"}),n.jsxs("div",{style:{marginBottom:"16px"},children:[n.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"8px",fontSize:"14px",fontWeight:"500",color:"var(--text-primary)"},children:[n.jsx(Ls,{size:16}),"Phone Number (Optional)"]}),n.jsx("input",{type:"tel",name:"phone",value:f.phone,onChange:b,placeholder:"(305) 555-1234",style:{width:"100%",padding:"12px",border:"1px solid var(--border)",borderRadius:"8px",background:"var(--bg-secondary)",color:"var(--text-primary)",fontSize:"14px"}})]}),n.jsxs("div",{style:{marginBottom:"16px"},children:[n.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"8px",fontSize:"14px",fontWeight:"500",color:"var(--text-primary)"},children:[n.jsx(ha,{size:16}),"Location"]}),n.jsx("input",{type:"text",name:"location",value:f.location,onChange:b,placeholder:"Miami, FL",style:{width:"100%",padding:"12px",border:"1px solid var(--border)",borderRadius:"8px",background:"var(--bg-secondary)",color:"var(--text-primary)",fontSize:"14px"}})]})]}),n.jsxs("div",{style:{display:"flex",gap:"12px"},children:[n.jsx("button",{onClick:m,style:{flex:1,padding:"12px",background:"transparent",border:"1px solid var(--border)",borderRadius:"8px",color:"var(--text-primary)",fontSize:"14px",fontWeight:"500",cursor:"pointer"},children:"Skip for now"}),n.jsx("button",{onClick:j,disabled:g,style:{flex:1,padding:"12px",background:g?"var(--text-secondary)":"var(--primary)",border:"none",borderRadius:"8px",color:"white",fontSize:"14px",fontWeight:"600",cursor:g?"not-allowed":"pointer"},children:g?"Saving...":"Save & Continue"})]})]})]})}):null}function Sd(){const r=nt(),{theme:s,toggleTheme:d}=Ld(),c=un("(max-width:768px)"),[f,p]=h.useState(!1),[g,y]=h.useState(!1),[b,m]=h.useState(!1),[j,v]=h.useState(null),[k,_]=h.useState(!1),A=Le.getUser(),z=!!Le.getToken(),T=D=>{D.needsProfileCompletion?(v(D.user||D),m(!0),p(!1),y(!1)):(r("/"),window.location.reload())};return n.jsxs(n.Fragment,{children:[n.jsxs("nav",{style:{background:"var(--bg-secondary)",borderBottom:"1px solid var(--border)",padding:c?"12px 16px":"16px 32px",position:"sticky",top:0,zIndex:100,backdropFilter:"blur(8px)"},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",maxWidth:"1400px",margin:"0 auto"},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:c?"12px":"24px"},children:[c&&n.jsx("button",{onClick:()=>_(!k),style:{background:"none",border:"none",cursor:"pointer",color:"var(--text-primary)",padding:"4px"},children:k?n.jsx(ra,{size:24}):n.jsx(fb,{size:24})}),n.jsxs(pe,{to:"/",style:{display:"flex",alignItems:"center",gap:"8px",textDecoration:"none",color:"var(--text-primary)"},children:[n.jsx("div",{style:{width:"32px",height:"32px",background:"linear-gradient(135deg, var(--primary), #06b6d4)",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontWeight:"700",fontSize:"18px"},children:"🏠"}),!c&&n.jsx("span",{style:{fontSize:"20px",fontWeight:"700"},children:"HouseHunt"})]}),!c&&n.jsxs("div",{style:{display:"flex",gap:"8px"},children:[n.jsx(pe,{to:"/",style:{padding:"8px 12px",borderRadius:"8px",textDecoration:"none",color:"var(--text-primary)",fontSize:"14px",fontWeight:"500"},children:"🏠 Home"}),n.jsx(pe,{to:"/listings?type=sale",style:{padding:"8px 12px",borderRadius:"8px",textDecoration:"none",color:"var(--text-primary)",fontSize:"14px"},children:"🔍 Buy"}),n.jsx(pe,{to:"/listings?type=rent",style:{padding:"8px 12px",borderRadius:"8px",textDecoration:"none",color:"var(--text-primary)",fontSize:"14px"},children:"📋 Rent"}),n.jsx(pe,{to:"/listings/create",style:{padding:"8px 12px",borderRadius:"8px",textDecoration:"none",color:"var(--text-primary)",fontSize:"14px"},children:"💰 Sell"}),n.jsx(pe,{to:"/memes",style:{padding:"8px 12px",borderRadius:"8px",textDecoration:"none",color:"var(--text-primary)",fontSize:"14px"},children:"😂 Memes"}),n.jsx(pe,{to:"/services",style:{padding:"8px 12px",borderRadius:"8px",textDecoration:"none",color:"var(--text-primary)",fontSize:"14px"},children:"🛠️ Services"})]})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[n.jsx("button",{onClick:d,style:{background:"none",border:"1px solid var(--border)",borderRadius:"8px",padding:"8px",cursor:"pointer",color:"var(--text-primary)",display:"flex",alignItems:"center",justifyContent:"center"},children:s==="dark"?n.jsx(Ln,{size:18}):n.jsx(Un,{size:18})}),n.jsx("button",{style:{background:"none",border:"1px solid var(--border)",borderRadius:"8px",padding:"8px",cursor:"pointer",color:"var(--text-primary)",display:"flex",alignItems:"center",justifyContent:"center"},children:n.jsx(La,{size:18})}),!c&&n.jsx("button",{style:{background:"none",border:"1px solid var(--border)",borderRadius:"8px",padding:"8px",cursor:"pointer",color:"var(--text-primary)",display:"flex",alignItems:"center",justifyContent:"center"},children:n.jsx(Wr,{size:18})}),z?n.jsxs(n.Fragment,{children:[n.jsxs(pe,{to:"/messages",style:{position:"relative",background:"none",border:"1px solid var(--border)",borderRadius:"8px",padding:"8px",cursor:"pointer",color:"var(--text-primary)",display:"flex",alignItems:"center",justifyContent:"center",textDecoration:"none"},children:[n.jsx(w1,{size:18}),n.jsx("span",{style:{position:"absolute",top:"-4px",right:"-4px",background:"#ef4444",color:"white",borderRadius:"50%",width:"16px",height:"16px",fontSize:"10px",display:"flex",alignItems:"center",justifyContent:"center"},children:"3"})]}),n.jsxs(pe,{to:"/profile",style:{display:"flex",alignItems:"center",gap:"8px",textDecoration:"none",color:"var(--text-primary)",padding:"6px 12px",borderRadius:"8px",border:"1px solid var(--border)"},children:[n.jsx(Tt,{size:18}),!c&&n.jsx("span",{style:{fontSize:"14px"},children:A?.name||A?.email?.split("@")[0]||"User"})]})]}):n.jsxs(n.Fragment,{children:[n.jsx("button",{onClick:()=>p(!0),style:{padding:"8px 16px",background:"transparent",border:"1px solid var(--border)",borderRadius:"8px",color:"var(--text-primary)",fontSize:"14px",cursor:"pointer"},children:"Sign In"}),n.jsx("button",{onClick:()=>y(!0),style:{padding:"8px 16px",background:"var(--primary)",border:"none",borderRadius:"8px",color:"white",fontSize:"14px",cursor:"pointer"},children:"Register"})]})]})]}),c&&k&&n.jsx("div",{style:{marginTop:"16px",paddingTop:"16px",borderTop:"1px solid var(--border)"},children:n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[n.jsx(pe,{to:"/",style:{padding:"12px",borderRadius:"8px",textDecoration:"none",color:"var(--text-primary)"},children:"🏠 Home"}),n.jsx(pe,{to:"/listings?type=sale",style:{padding:"12px",borderRadius:"8px",textDecoration:"none",color:"var(--text-primary)"},children:"🔍 Buy"}),n.jsx(pe,{to:"/listings?type=rent",style:{padding:"12px",borderRadius:"8px",textDecoration:"none",color:"var(--text-primary)"},children:"📋 Rent"}),n.jsx(pe,{to:"/listings/create",style:{padding:"12px",borderRadius:"8px",textDecoration:"none",color:"var(--text-primary)"},children:"💰 Sell"}),n.jsx(pe,{to:"/memes",style:{padding:"12px",borderRadius:"8px",textDecoration:"none",color:"var(--text-primary)"},children:"😂 Memes"}),n.jsx(pe,{to:"/services",style:{padding:"12px",borderRadius:"8px",textDecoration:"none",color:"var(--text-primary)"},children:"🛠️ Services"})]})})]}),c&&z&&n.jsxs("div",{style:{position:"fixed",bottom:0,left:0,right:0,background:"var(--bg-secondary)",borderTop:"1px solid var(--border)",padding:"8px",display:"flex",justifyContent:"space-around",zIndex:100},children:[n.jsxs(pe,{to:"/",style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"4px",textDecoration:"none",color:"var(--text-primary)",padding:"8px"},children:[n.jsx(Ba,{size:20}),n.jsx("span",{style:{fontSize:"10px"},children:"Home"})]}),n.jsxs(pe,{to:"/listings",style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"4px",textDecoration:"none",color:"var(--text-primary)",padding:"8px"},children:[n.jsx(La,{size:20}),n.jsx("span",{style:{fontSize:"10px"},children:"Search"})]}),n.jsxs(pe,{to:"/memes",style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"4px",textDecoration:"none",color:"var(--text-primary)",padding:"8px"},children:[n.jsx($g,{size:20}),n.jsx("span",{style:{fontSize:"10px"},children:"Memes"})]}),n.jsxs(pe,{to:"/profile",style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"4px",textDecoration:"none",color:"var(--text-primary)",padding:"8px"},children:[n.jsx(Tt,{size:20}),n.jsx("span",{style:{fontSize:"10px"},children:"Profile"})]})]}),n.jsx(Wv,{isOpen:f,onClose:()=>p(!1),onSuccess:T,onSwitchToRegister:()=>{p(!1),y(!0)}}),n.jsx(Kv,{isOpen:g,onClose:()=>y(!1),onSuccess:T,onSwitchToSignIn:()=>{y(!1),p(!0)}}),n.jsx(Jv,{isOpen:b,onClose:()=>{m(!1),r("/"),window.location.reload()},userData:j})]})}function Iv({houses:r}){const[s,d]=h.useState(null),[c,f]=h.useState(0),[p,g]=h.useState({}),[y,b]=h.useState(!1),[m,j]=h.useState(null),[v,k]=h.useState(!1),[_,A]=h.useState(""),[z,T]=h.useState(!1);h.useEffect(()=>{const W=window.matchMedia("(prefers-color-scheme: dark)"),F=ye=>b(ye);return F(W.matches),W.addEventListener("change",ye=>F(ye.matches)),()=>W.removeEventListener("change",ye=>F(ye.matches))},[]),h.useEffect(()=>{(async()=>{const F=Le.getToken(),ye=Le.getUser();if(F&&ye)try{const H=await xe.auth.getCurrentUser();j(H)}catch(H){console.error("Error fetching user:",H),Le.clearAuth()}})()},[]),h.useEffect(()=>{if(s){const W=window.scrollY;document.body.style.position="fixed",document.body.style.top=`-${W}px`,document.body.style.width="100%",document.body.style.overflow="hidden"}else{const W=document.body.style.top;document.body.style.position="",document.body.style.top="",document.body.style.width="",document.body.style.overflow="auto",W&&window.scrollTo(0,parseInt(W||"0")*-1)}return()=>{document.body.style.position="",document.body.style.top="",document.body.style.width="",document.body.style.overflow="auto"}},[s]);const D=W=>{W.stopPropagation(),s?.images&&f(F=>(F+1)%s.images.length)},G=W=>{W.stopPropagation(),s?.images&&f(F=>(F-1+s.images.length)%s.images.length)},K=W=>f(W),q=W=>{d(W),f(0)},S=()=>{d(null)},U=W=>{g(F=>({...F,[W]:!F[W]}))},$=async(W,F="house-image")=>{try{const H=await(await fetch(W)).blob(),I=window.URL.createObjectURL(H),ue=document.createElement("a");ue.href=I;const Te=(W.split("/").pop()||F).split(".").pop()||"jpg",C=`${s?.name.replace(/\s+/g,"-")}-${c+1}.${Te}`;ue.download=C,document.body.appendChild(ue),ue.click(),document.body.removeChild(ue),window.URL.revokeObjectURL(I)}catch(ye){console.error("Error downloading image:",ye);const H=document.createElement("a");H.href=W,H.download=`${s?.name.replace(/\s+/g,"-")}-${c+1}.jpg`,H.target="_blank",document.body.appendChild(H),H.click(),document.body.removeChild(H)}},re=async W=>{if(W.stopPropagation(),!m){alert("Please sign in to send messages");return}if(!s?.id){alert("House information not available");return}k(!0)},be=async()=>{if(!m){alert("Please sign in to send messages");return}if(!_.trim()){alert("Please enter a message");return}if(!s?.id){alert("House information not available");return}T(!0);try{await xe.messages.sendMessage(null,s.id,_.trim()),alert("Message sent successfully!"),A(""),k(!1)}catch(W){console.error("Error sending message:",W);let F="Failed to send message. Please try again.";W.data?.error?F=W.data.error:W.message&&(F=W.message),F.includes("not found")||F.includes("sign up")?alert(F+`

The message will be sent to the property owner's account.`):alert(F)}finally{T(!1)}},ie=()=>{if(navigator.share)navigator.share({title:s.name,text:`Check out this property: ${s.name} - ${s.type} in ${s.locality} for KES ${s.price?.toLocaleString()}`,url:window.location.href}).catch(W=>console.log("Error sharing:",W));else{const W=`${s.name} - ${s.type} in ${s.locality} for KES ${s.price?.toLocaleString()}`;navigator.clipboard.writeText(W).then(()=>{alert("Property details copied to clipboard!")}).catch(F=>{console.error("Failed to copy: ",F)})}},de=W=>W.contactType?W.contactType:W.isLandlord?"landlord":W.isCaretaker?"caretaker":W.phoneType?W.phoneType:"contact",we=W=>{switch(de(W)){case"landlord":return"Landlord";case"caretaker":return"Caretaker";default:return"Contact"}};return!r||!r.length?n.jsx("div",{style:{padding:"20px",paddingTop:"20px"},children:n.jsx("p",{children:"No houses to show"})}):n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"house-grid",children:r.map((W,F)=>n.jsxs("div",{className:"house-card",onClick:()=>q(W),children:[n.jsx("div",{className:"card-image",children:W.images?.[0]?n.jsx("img",{src:W.images[0]||void 0,alt:W.name,loading:"lazy"}):n.jsx("div",{className:"placeholder",children:"No Image"})}),n.jsxs("div",{className:"card-content",children:[n.jsxs("div",{className:"card-header",children:[n.jsx("h3",{children:W.name}),n.jsx("div",{className:"price-container",children:n.jsxs("span",{className:"price",children:["KES ",W.price?.toLocaleString()||"N/A"]})})]}),n.jsxs("div",{className:"card-details",children:[n.jsx("div",{className:"type",children:W.type}),n.jsx("div",{className:"location",children:W.locality})]}),n.jsx("a",{href:`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(W.locality||"")}`,target:"_blank",rel:"noopener noreferrer",onClick:ye=>ye.stopPropagation(),children:"View Map"})]})]},W.id||F))}),s&&n.jsx("div",{className:"overlay",onClick:S,children:n.jsxs("div",{className:`modal ${y?"dark":"light"}`,onClick:W=>W.stopPropagation(),children:[n.jsx("button",{className:"close-btn",onClick:S,children:"✕"}),n.jsx("button",{className:"floating-like-btn",onClick:()=>U(s.name),title:p[s.name]?"Unlike":"Like",children:p[s.name]?"❤️":"🤍"}),n.jsxs("div",{className:"image-section",children:[n.jsxs("div",{className:"main-image",children:[s.images?.[c]?n.jsxs("div",{className:"image-container",children:[n.jsx("img",{src:s.images[c]||void 0,alt:s.name,className:"responsive-image"}),n.jsxs("div",{className:"bottom-price",children:["KES ",s.price?.toLocaleString()||"N/A"]}),n.jsx("button",{className:"download-btn",onClick:W=>{W.stopPropagation(),$(s.images[c])},title:"Download this image",children:"⬇️"})]}):n.jsx("div",{className:"placeholder",children:"No Image"}),s.images?.length>1&&n.jsxs(n.Fragment,{children:[n.jsx("button",{className:"carousel-btn prev-btn",onClick:G,children:"‹"}),n.jsx("button",{className:"carousel-btn next-btn",onClick:D,children:"›"})]})]}),s.images?.length>1&&n.jsx("div",{className:"thumbnails",children:s.images.map((W,F)=>n.jsxs("div",{className:"thumbnail-wrapper",children:[n.jsx("div",{className:"thumbnail-container",children:n.jsx("img",{src:W||void 0,className:`thumbnail-image ${F===c?"selected":""}`,onClick:()=>K(F),alt:`Thumbnail ${F+1}`,loading:"lazy"})}),n.jsx("button",{className:"thumbnail-download-btn",onClick:ye=>{ye.stopPropagation(),$(W,`${s.name}-${F+1}`)},title:"Download this image",children:"⬇️"})]},F))})]}),n.jsx("div",{className:"content-section",children:n.jsxs("div",{className:"modal-content",children:[n.jsx("h2",{className:"property-title",children:s.name}),n.jsxs("div",{className:"details-container",children:[n.jsxs("div",{className:"detail-item",children:[n.jsx("span",{className:"detail-label",children:"Type:"}),n.jsx("span",{className:"detail-value",children:s.type})]}),n.jsxs("div",{className:"detail-item",children:[n.jsx("span",{className:"detail-label",children:"Location:"}),n.jsx("span",{className:"detail-value",children:s.locality})]}),s.landlordNumber?n.jsxs("div",{className:"detail-item contact-item",children:[n.jsxs("span",{className:"detail-label",children:[we(s),":"]}),n.jsx("span",{className:"contact-value",children:s.landlordNumber}),n.jsxs("div",{className:"contact-actions",children:[n.jsx("button",{className:"contact-action-btn chat-btn",onClick:re,title:"Send Message",children:"💬"}),n.jsx("button",{className:"contact-action-btn share-btn",onClick:W=>{W.stopPropagation(),ie()},title:"Share property",children:"🔗"})]})]}):n.jsx("div",{className:"detail-item contact-item",children:n.jsxs("div",{className:"contact-actions",style:{marginLeft:0},children:[n.jsx("button",{className:"contact-action-btn chat-btn",onClick:re,title:"Send Message",children:"💬"}),n.jsx("button",{className:"contact-action-btn share-btn",onClick:W=>{W.stopPropagation(),ie()},title:"Share property",children:"🔗"})]})})]}),n.jsxs("div",{className:"bottom-section",children:[n.jsx("div",{className:"image-counter",children:s.images?.length>0&&n.jsxs("span",{children:["Image ",c+1," of"," ",s.images.length]})}),n.jsx("a",{className:"map-link",href:`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(s.locality||"")}`,target:"_blank",rel:"noopener noreferrer",children:"View on Google Maps"})]})]})})]})}),v&&s&&n.jsx("div",{className:"chat-modal-overlay",onClick:()=>k(!1),children:n.jsxs("div",{className:"chat-modal",onClick:W=>W.stopPropagation(),children:[n.jsxs("div",{className:"chat-modal-header",children:[n.jsx("h3",{children:"Send Message"}),n.jsx("button",{className:"chat-close-btn",onClick:()=>k(!1),children:"✕"})]}),n.jsxs("div",{className:"chat-modal-content",children:[n.jsxs("div",{className:"chat-house-info",children:[n.jsxs("p",{children:[n.jsx("strong",{children:"Property:"})," ",s.name]}),n.jsxs("p",{children:[n.jsx("strong",{children:"Contact:"})," ",s.landlordNumber||s.landlord_phone||"Contact number stored in database"]}),n.jsx("p",{style:{fontSize:"12px",color:"var(--text-light)",marginTop:"8px"},children:"Message will be sent to the account matching the contact number stored for this property."})]}),n.jsx("textarea",{className:"chat-message-input",placeholder:"Type your message here...",value:_,onChange:W=>A(W.target.value),rows:"6"}),n.jsxs("div",{className:"chat-modal-actions",children:[n.jsx("button",{className:"chat-cancel-btn",onClick:()=>{k(!1),A("")},children:"Cancel"}),n.jsx("button",{className:"chat-send-btn",onClick:be,disabled:z||!_.trim(),children:z?"Sending...":"Send Message"})]})]})]})}),n.jsx("style",{children:`
        :root[data-theme='light'] { 
          --bg:#fff; 
          --text:#111827; 
          --text-secondary: #4b5563;
          --text-light: #6b7280;
          --link:#2563eb; 
          --link-light: #3b82f6;
          --accent: #f59e0b;
          --accent-light: #fbbf24;
          --card-shadow:rgba(0,0,0,0.08); 
          --card-shadow-hover:rgba(0,0,0,0.12);
          --modal-bg: #ffffff;
          --modal-text: #111827;
          --modal-border: #e5e7eb;
          --detail-bg: #f8fafc;
          --chip-bg: #f1f5f9;
          --row-bg: #f9fafb;
          --sms-blue: #3b82f6;
          --copy-gray: #6b7280;
          --share-green: #10b981;
        }
        :root[data-theme='dark'] { 
          --bg:#1e1e1e; 
          --text:#f9fafb; 
          --text-secondary: #d1d5db;
          --text-light: #9ca3af;
          --link:#4ea3ff; 
          --link-light: #60a5fa;
          --accent: #f59e0b;
          --accent-light: #fbbf24;
          --card-shadow:rgba(0,0,0,0.3); 
          --card-shadow-hover:rgba(0,0,0,0.4);
          --modal-bg: #1f2937;
          --modal-text: #f9fafb;
          --modal-border: #374151;
          --detail-bg: #111827;
          --chip-bg: #1e293b;
          --row-bg: #1e293b;
          --sms-blue: #60a5fa;
          --copy-gray: #9ca3af;
          --share-green: #34d399;
        }

        .house-grid { 
          display:grid; 
          gap:16px;
          padding:16px;
        }

        @media (max-width:550px) { 
          .house-grid { 
            grid-template-columns:1fr;
            padding: 6px;
            gap: 8px;
          }
          
          .house-card {
            margin: 0;
          }
        }
        
        @media (min-width:551px) and (max-width:800px) { 
          .house-grid { 
            grid-template-columns:repeat(2,1fr);
            padding: 16px;
            gap: 14px;
          } 
        }
        
        @media (min-width:801px) and (max-width:1023px) { 
          .house-grid { 
            grid-template-columns:repeat(3,1fr);
            padding: 20px;
            gap: 16px;
          } 
        }
        
        @media (min-width:1024px) { 
          .house-grid { 
            grid-template-columns:repeat(4,1fr);
            padding: 20px;
            gap: 16px;
          } 
        }

        .house-card{
          background:var(--bg); 
          color:var(--text); 
          border-radius:12px; 
          overflow:hidden; 
          box-shadow:0 2px 8px var(--card-shadow); 
          cursor:pointer; 
          display:flex; 
          flex-direction:row;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          border: 1px solid var(--modal-border);
          min-height: 140px;
          height: 140px;
          margin: 0;
        }
        
        .house-card:hover{
          box-shadow:0 4px 12px var(--card-shadow-hover);
          transform: translateY(-1px);
        }

        @media (max-width:550px) {
          .house-card { 
            flex-direction: row; 
            height: 140px;
            border-radius: 10px;
            margin: 0;
          }
          
          .house-card .card-image { 
            width:40%;
            height: 100%;
            flex-shrink: 0;
          }
          
          .house-card .card-content { 
            width:60%;
            padding:8px 10px;
            display:flex; 
            flex-direction:column; 
            justify-content: space-between;
            height: 100%;
          }
          
          .card-header {
            display: flex;
            flex-direction: column;
            gap: 4px;
            margin-bottom: 6px;
          }
          
          .card-header h3 {
            margin: 0;
            font-size: 1rem;
            font-weight: 600;
            line-height: 1.3;
            color: var(--text);
            display: block;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            max-height: 2.6em;
          }
          
          .price-container {
            margin: 2px 0;
          }
          
          .price {
            font-size: 1rem;
            font-weight: 700;
            color: var(--accent);
            line-height: 1.2;
            white-space: nowrap;
          }
          
          .card-details {
            display: flex;
            flex-direction: column;
            gap: 3px;
            margin-bottom: 6px;
            flex: 1;
          }
          
          .type {
            font-size: 0.9rem;
            color: var(--text);
            font-weight: 500;
            line-height: 1.3;
          }
          
          .location {
            font-size: 0.9rem;
            color: var(--text-light);
            font-weight: 400;
            line-height: 1.4;
            display: block;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            max-height: 2.8em;
          }
          
          .card-content a {
            font-size: 0.8rem;
            color: var(--link);
            text-decoration: none;
            font-weight: 500;
            padding: 2px 0;
            display: inline-block;
            line-height: 1.2;
            margin-top: auto;
          }
          
          .card-content a:hover {
            text-decoration: underline;
          }
        }

        @media (min-width:551px) {
          .house-card { 
            flex-direction: column; 
            height: 280px;
            min-height: 280px;
          }
          
          .house-card .card-image { 
            width:100%; 
            height:160px; 
            flex-shrink: 0;
          }
          
          .house-card .card-content { 
            width:100%; 
            padding:14px;
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            height: 120px;
          }
          
          .card-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            gap: 10px;
            margin-bottom: 8px;
          }
          
          .card-header h3 {
            margin: 0;
            font-size: 1.05rem;
            font-weight: 600;
            line-height: 1.3;
            color: var(--text);
            flex: 1;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            max-height: 2.6em;
          }
          
          .price-container {
            margin-top: 2px;
          }
          
          .price {
            font-size: 1.05rem;
            font-weight: 700;
            color: var(--accent);
            line-height: 1.2;
            white-space: nowrap;
          }
          
          .card-details {
            display: flex;
            flex-direction: column;
            gap: 6px;
            margin-bottom: 10px;
            flex: 1;
          }
          
          .type {
            font-size: 0.95rem;
            color: var(--text);
            font-weight: 500;
            line-height: 1.3;
          }
          
          .location {
            font-size: 0.95rem;
            color: var(--text-light);
            font-weight: 400;
            line-height: 1.4;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            max-height: 2.8em;
          }
          
          .card-content a {
            margin-top: auto;
            font-size: 0.9rem;
            color: var(--link);
            text-decoration: none;
            font-weight: 500;
            padding: 4px 0;
            display: inline-block;
            line-height: 1.3;
          }
          
          .card-content a:hover {
            text-decoration: underline;
          }
        }

        .card-image img, .placeholder{
          width:100%; 
          height:100%; 
          object-fit:cover; 
          display:block;
        }
        
        .placeholder{
          display:flex; 
          justify-content:center; 
          align-items:center; 
          background:#ccc; 
          color:#555; 
          font-size:0.85rem;
        }

        .overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.85);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
          padding: 20px;
          backdrop-filter: blur(8px);
          overflow: hidden;
        }

        .modal {
          background: var(--modal-bg);
          color: var(--modal-text);
          border-radius: 16px;
          width: 460px;
          height: 85vh;
          max-height: 85vh;
          min-height: 85vh;
          position: relative;
          border: 1px solid var(--modal-border);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .floating-like-btn {
          position: absolute;
          top: 16px;
          right: 16px;
          background: rgba(0, 0, 0, 0.7);
          color: white;
          border: none;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          font-size: 1.4rem;
          cursor: pointer;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(4px);
          transition: all 0.2s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }

        .floating-like-btn:hover {
          background: rgba(0, 0, 0, 0.9);
          transform: scale(1.1);
        }

        .image-section {
          flex: 0 0 calc(33.333% - 0px);
          display: flex;
          flex-direction: column;
          min-height: 0;
          max-height: calc(33.333%);
          overflow: hidden;
        }

        .main-image {
          position: relative;
          width: 100%;
          flex: 1;
          min-height: 0;
          overflow: hidden;
          background: #000;
          height: calc(100% - 60px);
        }

        .image-container {
          width: 100%;
          height: 100%;
          position: relative;
        }

        .responsive-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .bottom-price {
          position: absolute;
          bottom: 16px;
          left: 16px;
          background: rgba(0, 0, 0, 0.8);
          color: white;
          padding: 10px 16px;
          border-radius: 8px;
          font-weight: 700;
          font-size: 1.1rem;
          z-index: 5;
          backdrop-filter: blur(4px);
          white-space: nowrap;
        }

        .close-btn {
          position: absolute;
          top: 16px;
          right: 70px;
          background: rgba(0, 0, 0, 0.7);
          color: white;
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          font-size: 20px;
          cursor: pointer;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(4px);
          transition: background 0.2s ease;
        }

        .close-btn:hover {
          background: rgba(0, 0, 0, 0.9);
        }

        .download-btn {
          position: absolute;
          bottom: 16px;
          right: 16px;
          background: rgba(0, 0, 0, 0.7);
          color: white;
          border: none;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          font-size: 20px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(4px);
          transition: background 0.2s ease, transform 0.2s ease;
          z-index: 5;
        }

        .download-btn:hover {
          background: rgba(0, 0, 0, 0.9);
          transform: scale(1.1);
        }

        .carousel-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0, 0, 0, 0.7);
          color: white;
          border: none;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          font-size: 24px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(4px);
          transition: background 0.2s ease;
          z-index: 5;
        }

        .carousel-btn:hover {
          background: rgba(0, 0, 0, 0.9);
        }

        .prev-btn {
          left: 16px;
        }

        .next-btn {
          right: 16px;
        }

        .thumbnails {
          display: flex;
          gap: 8px;
          padding: 12px;
          overflow-x: auto;
          background: var(--modal-bg);
          border-top: 1px solid var(--modal-border);
          height: 60px;
          flex-shrink: 0;
          min-height: 60px;
          max-height: 60px;
        }

        .thumbnail-wrapper {
          position: relative;
          flex-shrink: 0;
          width: 60px;
          height: 45px;
        }

        .thumbnail-container {
          width: 100%;
          height: 100%;
          overflow: hidden;
          border-radius: 6px;
          background: #000;
        }

        .thumbnail-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          cursor: pointer;
          opacity: 0.6;
          transition: opacity 0.2s ease, transform 0.2s ease;
        }

        .thumbnail-image:hover {
          opacity: 0.8;
          transform: scale(1.05);
        }

        .thumbnail-image.selected {
          opacity: 1;
          border: 2px solid var(--link);
          transform: scale(1.05);
        }

        .thumbnail-download-btn {
          position: absolute;
          top: 4px;
          right: 4px;
          background: rgba(0, 0, 0, 0.8);
          color: white;
          border: none;
          width: 20px;
          height: 20px;
          border-radius: 3px;
          font-size: 10px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.2s ease;
        }

        .thumbnail-wrapper:hover .thumbnail-download-btn {
          opacity: 1;
        }

        .thumbnail-download-btn:hover {
          background: rgba(0, 0, 0, 1);
        }

        .content-section {
          flex: 0 0 66.667%;
          display: flex;
          flex-direction: column;
          min-height: 0;
          overflow-y: auto;
          overflow-x: hidden;
        }

        .modal-content {
          padding: 24px;
          display: flex;
          flex-direction: column;
          height: 100%;
          overflow: visible;
          gap: 20px;
        }

        .property-title {
          margin: 0;
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--modal-text);
          line-height: 1.2;
          flex-shrink: 0;
        }

        .details-container {
          display: flex;
          flex-direction: column;
          gap: 16px;
          flex: 1;
          min-height: 0;
        }

        .detail-item {
          display: flex;
          align-items: center;
          padding: 8px 0;
          border-bottom: 1px solid var(--modal-border);
        }

        .detail-item:last-child {
          border-bottom: none;
        }

        .detail-label {
          font-size: 0.95rem;
          color: var(--text-secondary);
          font-weight: 600;
          line-height: 1.2;
          min-width: 80px;
          flex-shrink: 0;
        }

        .detail-value {
          font-size: 1rem;
          color: var(--modal-text);
          font-weight: 500;
          line-height: 1.2;
          overflow: hidden;
          text-overflow: ellipsis;
          flex: 1;
        }

        .contact-item {
          display: flex;
          align-items: center;
          padding: 12px 0;
          border-bottom: none;
          margin-top: 8px;
          border-top: 1px solid var(--modal-border);
          padding-top: 16px;
        }

        .contact-value {
          font-size: 1.05rem;
          color: var(--link);
          font-weight: 600;
          line-height: 1.2;
          overflow: hidden;
          text-overflow: ellipsis;
          flex: 1;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .contact-actions {
          display: flex;
          gap: 8px;
          margin-left: auto;
          flex-shrink: 0;
        }

        .contact-action-btn {
          background: transparent;
          color: var(--text-secondary);
          border: 1px solid var(--modal-border);
          width: 36px;
          height: 36px;
          border-radius: 8px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          flex-shrink: 0;
          font-size: 1.1rem;
        }

        .contact-action-btn:hover {
          background: var(--detail-bg);
          transform: translateY(-1px);
        }

        .share-btn:hover {
          color: var(--share-green);
          border-color: var(--share-green);
        }

        .chat-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: saturate(180%) blur(20px);
          -webkit-backdrop-filter: saturate(180%) blur(20px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 3000;
          padding: 20px;
          animation: fadeIn 0.2s ease;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .chat-modal {
          background: var(--modal-bg);
          border-radius: 20px;
          width: 100%;
          max-width: 500px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          border: 0.5px solid var(--modal-border);
          overflow: hidden;
          animation: slideUp 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        .chat-modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 24px;
          border-bottom: 0.5px solid var(--modal-border);
          background: var(--modal-bg);
        }
        
        .chat-modal-header h3 {
          margin: 0;
          font-size: 20px;
          font-weight: 600;
          color: var(--modal-text);
          letter-spacing: -0.41px;
          font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif;
        }
        
        .chat-close-btn {
          background: transparent;
          border: none;
          font-size: 20px;
          color: var(--text-light);
          cursor: pointer;
          padding: 6px;
          border-radius: 8px;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          line-height: 1;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .chat-close-btn:hover {
          background: var(--detail-bg);
          color: var(--modal-text);
        }
        
        .chat-modal-content {
          padding: 24px;
        }
        
        .chat-house-info {
          background: var(--detail-bg);
          padding: 16px;
          border-radius: 12px;
          margin-bottom: 16px;
          border: 0.5px solid var(--modal-border);
        }
        
        .chat-house-info p {
          margin: 6px 0;
          font-size: 14px;
          color: var(--modal-text);
          font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif;
        }
        
        .chat-house-info strong {
          color: var(--modal-text);
          font-weight: 600;
        }
        
        .chat-message-input {
          width: 100%;
          padding: 12px 16px;
          border: 0.5px solid var(--modal-border);
          border-radius: 12px;
          background: var(--modal-bg);
          color: var(--modal-text);
          font-size: 15px;
          font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif;
          resize: vertical;
          min-height: 120px;
          margin-bottom: 16px;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          -webkit-font-smoothing: antialiased;
        }
        
        .chat-message-input:focus {
          outline: none;
          border-color: var(--link);
          box-shadow: 0 0 0 3px rgba(0, 122, 255, 0.1);
        }
        
        .chat-modal-actions {
          display: flex;
          gap: 12px;
          justify-content: flex-end;
        }
        
        .chat-cancel-btn,
        .chat-send-btn {
          padding: 10px 20px;
          border-radius: 10px;
          font-size: 15px;
          font-weight: 500;
          font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif;
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          border: none;
          min-height: 36px;
        }
        
        .chat-cancel-btn {
          background: var(--detail-bg);
          color: var(--modal-text);
        }
        
        .chat-cancel-btn:hover {
          background: var(--chip-bg);
        }
        
        .chat-send-btn {
          background: #007AFF;
          color: white;
        }
        
        .chat-send-btn:hover:not(:disabled) {
          background: #0051D5;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(0, 122, 255, 0.3);
        }
        
        .chat-send-btn:active:not(:disabled) {
          transform: translateY(0);
        }
        
        .chat-send-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .bottom-section {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 16px;
          border-top: 1px solid var(--modal-border);
          flex-shrink: 0;
        }

        .image-counter {
          text-align: center;
          font-size: 0.9rem;
          color: var(--text-light);
          padding: 8px 12px;
          background: var(--chip-bg);
          border-radius: 8px;
          white-space: nowrap;
        }

        .map-link {
          display: inline-block;
          padding: 12px 24px;
          background: var(--link);
          color: white;
          text-decoration: none;
          border-radius: 10px;
          font-weight: 700;
          transition: background 0.2s ease, transform 0.2s ease;
          font-size: 1rem;
          border: none;
          cursor: pointer;
          white-space: nowrap;
        }

        .map-link:hover {
          background: var(--link-light);
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .overlay {
            padding: 16px;
          }
          
          .modal {
            width: 100%;
            max-width: 420px;
            border-radius: 14px;
          }
          
          .modal-content {
            padding: 20px;
            gap: 16px;
          }
          
          .property-title {
            font-size: 1.3rem;
          }
          
          .bottom-price {
            font-size: 1rem;
            padding: 8px 14px;
            bottom: 12px;
            left: 12px;
          }
          
          .details-container {
            gap: 12px;
          }
          
          .detail-item {
            padding: 6px 0;
          }
          
          .contact-item {
            padding: 10px 0;
            padding-top: 12px;
          }
          
          .contact-action-btn {
            width: 34px;
            height: 34px;
            font-size: 1rem;
          }
          
          .detail-label {
            font-size: 0.9rem;
            min-width: 70px;
          }
          
          .detail-value {
            font-size: 0.95rem;
          }
          
          .contact-value {
            font-size: 1rem;
          }
          
          .thumbnails {
            padding: 10px;
            height: 55px;
          }
          
          .thumbnail-wrapper {
            width: 55px;
            height: 41px;
          }
          
          .carousel-btn {
            width: 40px;
            height: 40px;
            font-size: 20px;
          }
          
          .download-btn {
            width: 40px;
            height: 40px;
            font-size: 18px;
            bottom: 12px;
            right: 12px;
          }
          
          .floating-like-btn {
            width: 40px;
            height: 40px;
            font-size: 1.3rem;
            top: 12px;
            right: 12px;
          }
          
          .close-btn {
            width: 36px;
            height: 36px;
            font-size: 18px;
            top: 12px;
            right: 60px;
          }
          
          .map-link {
            padding: 10px 20px;
            font-size: 0.95rem;
          }
          
          .image-counter {
            font-size: 0.85rem;
            padding: 6px 10px;
          }
        }

        @media (max-width: 480px) {
          .overlay {
            padding: 12px;
          }
          
          .modal {
            width: 100%;
            max-width: 380px;
            border-radius: 12px;
          }
          
          .modal-content {
            padding: 16px;
            gap: 12px;
          }
          
          .property-title {
            font-size: 1.2rem;
          }
          
          .bottom-price {
            font-size: 0.9rem;
            padding: 6px 12px;
            bottom: 10px;
            left: 10px;
            border-radius: 6px;
          }
          
          .details-container {
            gap: 10px;
          }
          
          .detail-item {
            padding: 4px 0;
          }
          
          .contact-item {
            padding: 8px 0;
            padding-top: 10px;
          }
          
          .contact-action-btn {
            width: 32px;
            height: 32px;
            font-size: 0.95rem;
          }
          
          .detail-label {
            font-size: 0.85rem;
            min-width: 65px;
          }
          
          .detail-value {
            font-size: 0.9rem;
          }
          
          .contact-value {
            font-size: 0.95rem;
          }
          
          .map-link {
            padding: 10px 16px;
            font-size: 0.9rem;
            border-radius: 8px;
          }
          
          .floating-like-btn {
            width: 36px;
            height: 36px;
            font-size: 1.2rem;
            top: 10px;
            right: 10px;
          }
          
          .close-btn {
            width: 32px;
            height: 32px;
            font-size: 16px;
            top: 10px;
            right: 54px;
          }
          
          .thumbnails {
            padding: 8px;
            height: 50px;
          }
          
          .thumbnail-wrapper {
            width: 50px;
            height: 38px;
          }
        }

        @media (max-height: 700px) {
          .modal {
            height: 85vh;
          }
          
          .modal-content {
            padding: 20px;
            gap: 16px;
          }
          
          .property-title {
            font-size: 1.3rem;
          }
          
          .details-container {
            gap: 12px;
          }
          
          .detail-item {
            min-height: auto;
          }
          
          .map-link {
            padding: 10px 20px;
          }
        }

        .image-section, .content-section {
          flex-shrink: 0;
        }
      `})]})}const Fv=r=>({id:r.id,name:r.title,type:r.house_type,locality:r.locality||r.city,price:parseFloat(r.price),bedrooms:r.bedrooms,bathrooms:r.bathrooms,size:`${r.area} sq ft`,images:r.images?.map(s=>s.image)||[],landlordNumber:r.landlord_phone,description:r.description,available:r.availability==="available",postedDate:r.created_at,ownerEmail:r.owner_email,pinnedLocation:r.pinned_location,address:r.address});function Pv(){const[r,s]=h.useState([]),[d,c]=h.useState([]),[f,p]=h.useState(!0),[g,y]=h.useState(null),[b,m]=h.useState({searchQuery:"",priceRange:[0,5e5],houseType:"all",sortBy:"newest"});h.useEffect(()=>{(async()=>{try{p(!0);const _=(await xe.houses.getHouses()).map(Fv);s(_),c(_),y(null)}catch(k){console.error("Error fetching houses:",k),y("Failed to load houses. Please try again later.")}finally{p(!1)}})()},[]),h.useEffect(()=>{let v=[...r];if(b.searchQuery){const k=b.searchQuery.toLowerCase();v=v.filter(_=>_.name.toLowerCase().includes(k)||_.locality.toLowerCase().includes(k)||_.type.toLowerCase().includes(k)||_.description.toLowerCase().includes(k))}switch(v=v.filter(k=>k.price>=b.priceRange[0]&&k.price<=b.priceRange[1]),b.houseType!=="all"&&(v=v.filter(k=>k.type===b.houseType)),b.sortBy){case"price-low":v.sort((k,_)=>k.price-_.price);break;case"price-high":v.sort((k,_)=>_.price-k.price);break;case"newest":v.sort((k,_)=>new Date(_.postedDate)-new Date(k.postedDate));break;case"oldest":v.sort((k,_)=>new Date(k.postedDate)-new Date(_.postedDate));break}c(v)},[b,r]);const j=()=>{m({searchQuery:"",priceRange:[0,5e5],houseType:"all",sortBy:"newest"})};return[...new Set(r.map(v=>v.type))],n.jsxs(n.Fragment,{children:[n.jsx(Sd,{}),n.jsx("div",{className:"home-container",children:n.jsx("main",{id:"main-content",className:"main-content",children:f?n.jsxs("div",{className:"loading-container",children:[n.jsx("div",{className:"loading-spinner"}),n.jsx("p",{children:"Loading properties..."})]}):g?n.jsxs("div",{className:"error-container",children:[n.jsx("div",{className:"error-icon",children:"⚠️"}),n.jsx("h3",{children:"Error Loading Properties"}),n.jsx("p",{children:g}),n.jsx("button",{className:"apple-button apple-button-primary",onClick:()=>window.location.reload(),children:"Retry"})]}):d.length===0?n.jsxs("div",{className:"no-results",children:[n.jsx("div",{className:"no-results-icon",children:"🏠"}),n.jsx("h3",{children:"No properties found"}),n.jsx("p",{children:"Try adjusting your filters or search criteria"}),n.jsx("button",{className:"apple-button apple-button-secondary",onClick:j,children:"Clear All Filters"})]}):n.jsx(Iv,{houses:d})})}),n.jsx("style",{children:`
        .home-container {
          min-height: 100vh;
          background: var(--page-bg, #f8fafc);
          color: var(--page-text, #1e293b);
          transition: background 0.3s ease;
        }

        :root[data-theme="light"] .home-container {
          --page-bg: #f8fafc;
          --page-text: #1e293b;
          --card-bg: #ffffff;
          --border-color: #e2e8f0;
          --accent-color: #2563eb;
          --hover-color: #f1f5f9;
        }

        :root[data-theme="dark"] .home-container {
          --page-bg: #0f172a;
          --page-text: #f1f5f9;
          --card-bg: #1e293b;
          --border-color: #334155;
          --accent-color: #3b82f6;
          --hover-color: #334155;
        }

        /* Main Content */
        .main-content {
          min-height: calc(100vh - 64px); /* Full height minus navbar */
          padding: 0;
        }

        /* Loading State */
        .loading-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: calc(100vh - 64px);
          gap: 16px;
        }

        .loading-spinner {
          width: 40px;
          height: 40px;
          border: 3px solid var(--apple-gray-2);
          border-top-color: var(--apple-blue);
          border-radius: 50%;
          animation: spin 0.6s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .loading-container p {
          color: var(--page-text);
          font-size: 16px;
        }

        /* Error State */
        .error-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: calc(100vh - 64px);
          padding: 40px 20px;
          text-align: center;
        }

        .error-icon {
          font-size: 64px;
          margin-bottom: 24px;
        }

        .error-container h3 {
          font-size: 24px;
          margin-bottom: 12px;
          color: #ef4444;
        }

        .error-container p {
          color: var(--page-text);
          opacity: 0.7;
          margin-bottom: 24px;
          max-width: 400px;
        }

        .retry-button {
          /* Styles handled by apple-button classes */
        }

        /* No Results State */
        .no-results {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: calc(100vh - 64px);
          padding: 40px 20px;
          text-align: center;
        }

        .no-results-icon {
          font-size: 64px;
          margin-bottom: 24px;
          opacity: 0.5;
        }

        .no-results h3 {
          font-size: 24px;
          margin-bottom: 12px;
          color: var(--page-text);
        }

        .no-results p {
          color: var(--page-text);
          opacity: 0.7;
          margin-bottom: 24px;
          max-width: 400px;
        }

        .reset-button {
          padding: 12px 32px;
          background: var(--accent-color);
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .reset-button:hover {
          background: var(--accent-color);
          opacity: 0.9;
          transform: translateY(-1px);
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .no-results {
            padding: 60px 20px;
          }

          .no-results h3 {
            font-size: 20px;
          }

          .reset-button {
            padding: 10px 24px;
            font-size: 15px;
          }

          .no-results-icon {
            font-size: 48px;
          }
        }

        @media (max-width: 480px) {
          .no-results {
            padding: 40px 16px;
          }

          .no-results h3 {
            font-size: 18px;
          }

          .reset-button {
            padding: 8px 20px;
            font-size: 14px;
          }
        }
      `})]})}const e2="http://localhost:8000";function t2(r){const s=r?.images?.[0]?.image||r?.images?.[0];return s?s.startsWith("http")?s:`${e2}${s}`:"https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&auto=format&fit=crop"}function a2(r,s="sale"){if(r==null)return"";const d=Number(r).toLocaleString();return s==="rent"?`$${d}/mo`:`$${d}`}function Ei({house:r,isMobile:s,onLike:d,isLiked:c,showViews:f=!1}){const p=un("(max-width:768px)")||s,g=z=>{z.preventDefault(),z.stopPropagation(),d&&d(r.id)},y=t2(r),b=a2(r.price,r.listing_type),m=r.address||r.locality||r.city||"Location TBD",j=r.created_at?Math.floor((Date.now()-new Date(r.created_at).getTime())/(1e3*60*60*24)):0,v=j===0?"Today":j===1?"1d ago":`${j}d ago`,k=r.house_type||r.type||"House",_=r.likes_count||r.likes?.length||456,A=r.views_count||234;return p?n.jsx(pe,{to:`/listings/${r.id}`,style:{textDecoration:"none",color:"inherit",display:"block"},children:n.jsxs("article",{style:{display:"flex",gap:"12px",padding:"12px",background:"var(--bg-primary)",border:"1px solid var(--border)",borderRadius:"12px",marginBottom:"12px",transition:"transform 0.2s, box-shadow 0.2s"},onMouseEnter:z=>{z.currentTarget.style.transform="translateY(-2px)",z.currentTarget.style.boxShadow="0 4px 12px rgba(0,0,0,0.1)"},onMouseLeave:z=>{z.currentTarget.style.transform="translateY(0)",z.currentTarget.style.boxShadow="none"},children:[n.jsxs("div",{style:{position:"relative",flexShrink:0},children:[n.jsx("img",{src:y,alt:r.title||r.name,style:{width:"100px",height:"100px",objectFit:"cover",borderRadius:"8px"}}),n.jsx("button",{onClick:g,style:{position:"absolute",bottom:"4px",left:"4px",background:"rgba(0,0,0,0.6)",border:"none",borderRadius:"50%",width:"28px",height:"28px",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",color:c?"#ef4444":"white"},children:n.jsx(ft,{size:16,fill:c?"#ef4444":"none"})}),f&&n.jsxs("div",{style:{position:"absolute",bottom:"4px",right:"4px",background:"rgba(0,0,0,0.6)",color:"white",fontSize:"10px",padding:"2px 6px",borderRadius:"4px",display:"flex",alignItems:"center",gap:"4px"},children:[n.jsx(dt,{size:10}),A]})]}),n.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:"4px"},children:[n.jsx("div",{style:{fontSize:"18px",fontWeight:"600",color:"var(--text-primary)"},children:b}),n.jsx("div",{style:{fontSize:"14px",color:"var(--text-primary)",fontWeight:"500"},children:m}),n.jsxs("div",{style:{fontSize:"12px",color:"var(--text-secondary)",display:"flex",gap:"8px",alignItems:"center"},children:[n.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"4px"},children:[n.jsx(qr,{size:14})," ",r.bedrooms||0]}),n.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"4px"},children:[n.jsx(Yr,{size:14})," ",r.bathrooms||0]}),n.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"4px"},children:[n.jsx(Gr,{size:14})," ",r.area||0]})]}),n.jsxs("div",{style:{fontSize:"12px",color:"var(--text-secondary)",marginTop:"auto"},children:[k," • ",v]}),r.owner&&n.jsx("div",{style:{fontSize:"11px",color:"var(--text-secondary)"},children:r.owner.name||r.owner.email})]})]})}):n.jsx(pe,{to:`/listings/${r.id}`,style:{textDecoration:"none",color:"inherit",display:"block"},children:n.jsxs("article",{style:{background:"var(--bg-primary)",border:"1px solid var(--border)",borderRadius:"12px",overflow:"hidden",transition:"transform 0.2s, box-shadow 0.2s",cursor:"pointer"},onMouseEnter:z=>{z.currentTarget.style.transform="translateY(-4px)",z.currentTarget.style.boxShadow="0 8px 24px rgba(0,0,0,0.12)"},onMouseLeave:z=>{z.currentTarget.style.transform="translateY(0)",z.currentTarget.style.boxShadow="none"},children:[n.jsxs("div",{style:{position:"relative",width:"100%",height:"200px",overflow:"hidden"},children:[n.jsx("img",{src:y,alt:r.title||r.name,style:{width:"100%",height:"100%",objectFit:"cover"}}),n.jsx("button",{onClick:g,style:{position:"absolute",top:"8px",right:"8px",background:"rgba(255,255,255,0.9)",border:"none",borderRadius:"50%",width:"36px",height:"36px",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",color:c?"#ef4444":"var(--text-secondary)"},children:n.jsx(ft,{size:18,fill:c?"#ef4444":"none"})}),f&&n.jsxs("div",{style:{position:"absolute",bottom:"8px",left:"8px",background:"rgba(0,0,0,0.7)",color:"white",fontSize:"11px",padding:"4px 8px",borderRadius:"6px",display:"flex",alignItems:"center",gap:"4px"},children:[n.jsx(dt,{size:12}),A," views"]}),n.jsxs("div",{style:{position:"absolute",bottom:"8px",right:"8px",background:"rgba(0,0,0,0.7)",color:"white",fontSize:"11px",padding:"4px 8px",borderRadius:"6px"},children:["❤️ ",_," Saves"]})]}),n.jsxs("div",{style:{padding:"16px"},children:[n.jsx("div",{style:{fontSize:"20px",fontWeight:"600",color:"var(--text-primary)",marginBottom:"4px"},children:b}),n.jsx("div",{style:{fontSize:"14px",color:"var(--text-primary)",marginBottom:"4px"},children:m}),n.jsxs("div",{style:{fontSize:"13px",color:"var(--text-secondary)",display:"flex",gap:"12px",marginBottom:"8px"},children:[n.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"4px"},children:[n.jsx(qr,{size:14})," ",r.bedrooms||0]}),n.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"4px"},children:[n.jsx(Yr,{size:14})," ",r.bathrooms||0]}),n.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"4px"},children:[n.jsx(Gr,{size:14})," ",r.area||0," sqft"]})]}),n.jsxs("div",{style:{fontSize:"12px",color:"var(--text-secondary)"},children:[k," • ",v]}),r.owner&&n.jsx("div",{style:{fontSize:"12px",color:"var(--text-secondary)",marginTop:"4px"},children:r.owner.name||r.owner.email})]})]})})}function Ms({ad:r,isMobile:s}){return un("(max-width:768px)")||s?n.jsxs("article",{style:{display:"flex",gap:"12px",padding:"12px",background:"var(--bg-primary)",border:"1px solid var(--border)",borderRadius:"12px",marginBottom:"12px",position:"relative"},onClick:()=>r.url&&window.open(r.url,"_blank"),children:[n.jsx("div",{style:{position:"absolute",top:"8px",right:"8px",background:"var(--primary)",color:"white",fontSize:"9px",padding:"2px 6px",borderRadius:"4px",fontWeight:"600",textTransform:"uppercase"},children:"Sponsored"}),n.jsx("div",{style:{flexShrink:0},children:n.jsx("img",{src:r.image||"https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&auto=format&fit=crop",alt:r.title,style:{width:"100px",height:"100px",objectFit:"cover",borderRadius:"8px"}})}),n.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:"4px"},children:[n.jsx("div",{style:{fontSize:"12px",color:"var(--text-secondary)",fontWeight:"500"},children:"Sponsored"}),n.jsx("div",{style:{fontSize:"14px",fontWeight:"600",color:"var(--text-primary)"},children:r.companyName||r.title}),n.jsx("div",{style:{fontSize:"12px",color:"var(--text-secondary)"},children:r.description||"Learn More"}),n.jsx("div",{style:{fontSize:"11px",color:"var(--text-secondary)",marginTop:"auto"},children:"Ad • Promoted"})]})]}):n.jsxs("article",{style:{background:"var(--bg-primary)",border:"1px solid var(--border)",borderRadius:"12px",overflow:"hidden",position:"relative",cursor:"pointer",transition:"transform 0.2s"},onMouseEnter:c=>{c.currentTarget.style.transform="translateY(-4px)"},onMouseLeave:c=>{c.currentTarget.style.transform="translateY(0)"},onClick:()=>r.url&&window.open(r.url,"_blank"),children:[n.jsx("div",{style:{position:"absolute",top:"8px",right:"8px",background:"var(--primary)",color:"white",fontSize:"10px",padding:"4px 8px",borderRadius:"6px",fontWeight:"600",textTransform:"uppercase",zIndex:10},children:"Sponsored"}),n.jsx("div",{style:{position:"relative",width:"100%",height:"200px",overflow:"hidden"},children:n.jsx("img",{src:r.image||"https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&auto=format&fit=crop",alt:r.title,style:{width:"100%",height:"100%",objectFit:"cover"}})}),n.jsxs("div",{style:{padding:"16px"},children:[n.jsx("div",{style:{fontSize:"12px",color:"var(--text-secondary)",marginBottom:"4px",fontWeight:"500"},children:"Sponsored"}),n.jsx("div",{style:{fontSize:"18px",fontWeight:"600",color:"var(--text-primary)",marginBottom:"4px"},children:r.companyName||r.title}),n.jsx("div",{style:{fontSize:"13px",color:"var(--text-secondary)",marginBottom:"8px"},children:r.description||"Learn More"}),n.jsxs("div",{style:{fontSize:"11px",color:"var(--text-secondary)",display:"flex",alignItems:"center",gap:"4px"},children:[n.jsx(Yg,{size:12}),"Ad • Promoted"]})]})]})}function Ds({isOpen:r,onClose:s,filters:d,onApplyFilters:c,onClearFilters:f}){const p=un("(max-width:768px)"),[g,y]=h.useState(d||{priceRange:[0,1e7],propertyTypes:[],bedrooms:"any",bathrooms:"any",squareFootage:{min:"",max:""},features:[]}),b=["House","Apartment","Condo","Townhouse","Land","Commercial"],m=["Pool","Garage","Pet Friendly","Waterfront","Renovated"],j=z=>{y({...g,propertyTypes:g.propertyTypes.includes(z)?g.propertyTypes.filter(T=>T!==z):[...g.propertyTypes,z]})},v=z=>{y({...g,features:g.features.includes(z)?g.features.filter(T=>T!==z):[...g.features,z]})},k=()=>{c&&c(g),s()},_=()=>{const z={priceRange:[0,1e7],propertyTypes:[],bedrooms:"any",bathrooms:"any",squareFootage:{min:"",max:""},features:[]};y(z),f&&f(z)};if(!r)return null;const A=n.jsxs("div",{style:{padding:p?"20px":"24px"},children:[n.jsxs("div",{style:{marginBottom:"24px"},children:[n.jsx("label",{style:{display:"block",marginBottom:"12px",fontSize:"14px",fontWeight:"600",color:"var(--text-primary)"},children:"Price Range"}),n.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[n.jsx("input",{type:"number",value:g.priceRange[0],onChange:z=>y({...g,priceRange:[parseInt(z.target.value)||0,g.priceRange[1]]}),placeholder:"$0",style:{flex:1,padding:"10px",border:"1px solid var(--border)",borderRadius:"8px",background:"var(--bg-secondary)",color:"var(--text-primary)"}}),n.jsx("span",{style:{color:"var(--text-secondary)"},children:"to"}),n.jsx("input",{type:"number",value:g.priceRange[1],onChange:z=>y({...g,priceRange:[g.priceRange[0],parseInt(z.target.value)||1e7]}),placeholder:"$10M+",style:{flex:1,padding:"10px",border:"1px solid var(--border)",borderRadius:"8px",background:"var(--bg-secondary)",color:"var(--text-primary)"}})]})]}),n.jsxs("div",{style:{marginBottom:"24px"},children:[n.jsx("label",{style:{display:"block",marginBottom:"12px",fontSize:"14px",fontWeight:"600",color:"var(--text-primary)"},children:"Property Type"}),n.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px"},children:b.map(z=>n.jsxs("button",{onClick:()=>j(z),style:{padding:"8px 16px",border:`1px solid ${g.propertyTypes.includes(z)?"var(--primary)":"var(--border)"}`,borderRadius:"20px",background:g.propertyTypes.includes(z)?"var(--primary)":"var(--bg-secondary)",color:g.propertyTypes.includes(z)?"white":"var(--text-primary)",fontSize:"13px",cursor:"pointer"},children:[g.propertyTypes.includes(z)?"✅":"☐"," ",z]},z))})]}),n.jsxs("div",{style:{marginBottom:"24px",display:"flex",gap:"12px"},children:[n.jsxs("div",{style:{flex:1},children:[n.jsx("label",{style:{display:"block",marginBottom:"8px",fontSize:"14px",fontWeight:"600",color:"var(--text-primary)"},children:"Bedrooms"}),n.jsxs("select",{value:g.bedrooms,onChange:z=>y({...g,bedrooms:z.target.value}),style:{width:"100%",padding:"10px",border:"1px solid var(--border)",borderRadius:"8px",background:"var(--bg-secondary)",color:"var(--text-primary)"},children:[n.jsx("option",{value:"any",children:"Any"}),n.jsx("option",{value:"1",children:"1+"}),n.jsx("option",{value:"2",children:"2+"}),n.jsx("option",{value:"3",children:"3+"}),n.jsx("option",{value:"4",children:"4+"}),n.jsx("option",{value:"5",children:"5+"})]})]}),n.jsxs("div",{style:{flex:1},children:[n.jsx("label",{style:{display:"block",marginBottom:"8px",fontSize:"14px",fontWeight:"600",color:"var(--text-primary)"},children:"Bathrooms"}),n.jsxs("select",{value:g.bathrooms,onChange:z=>y({...g,bathrooms:z.target.value}),style:{width:"100%",padding:"10px",border:"1px solid var(--border)",borderRadius:"8px",background:"var(--bg-secondary)",color:"var(--text-primary)"},children:[n.jsx("option",{value:"any",children:"Any"}),n.jsx("option",{value:"1",children:"1+"}),n.jsx("option",{value:"2",children:"2+"}),n.jsx("option",{value:"3",children:"3+"}),n.jsx("option",{value:"4",children:"4+"})]})]})]}),n.jsxs("div",{style:{marginBottom:"24px"},children:[n.jsx("label",{style:{display:"block",marginBottom:"12px",fontSize:"14px",fontWeight:"600",color:"var(--text-primary)"},children:"Square Footage"}),n.jsxs("div",{style:{display:"flex",gap:"12px"},children:[n.jsx("input",{type:"number",value:g.squareFootage.min,onChange:z=>y({...g,squareFootage:{...g.squareFootage,min:z.target.value}}),placeholder:"Min",style:{flex:1,padding:"10px",border:"1px solid var(--border)",borderRadius:"8px",background:"var(--bg-secondary)",color:"var(--text-primary)"}}),n.jsx("span",{style:{color:"var(--text-secondary)",alignSelf:"center"},children:"to"}),n.jsx("input",{type:"number",value:g.squareFootage.max,onChange:z=>y({...g,squareFootage:{...g.squareFootage,max:z.target.value}}),placeholder:"Max",style:{flex:1,padding:"10px",border:"1px solid var(--border)",borderRadius:"8px",background:"var(--bg-secondary)",color:"var(--text-primary)"}})]})]}),n.jsxs("div",{style:{marginBottom:"24px"},children:[n.jsx("label",{style:{display:"block",marginBottom:"12px",fontSize:"14px",fontWeight:"600",color:"var(--text-primary)"},children:"Features"}),n.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px"},children:m.map(z=>n.jsxs("button",{onClick:()=>v(z),style:{padding:"8px 16px",border:`1px solid ${g.features.includes(z)?"var(--primary)":"var(--border)"}`,borderRadius:"20px",background:g.features.includes(z)?"var(--primary)":"var(--bg-secondary)",color:g.features.includes(z)?"white":"var(--text-primary)",fontSize:"13px",cursor:"pointer"},children:[g.features.includes(z)?"✅":"☐"," ",z]},z))})]}),n.jsxs("div",{style:{display:"flex",gap:"12px"},children:[n.jsx("button",{onClick:_,style:{flex:1,padding:"12px",background:"transparent",border:"1px solid var(--border)",borderRadius:"8px",color:"var(--text-primary)",fontSize:"14px",fontWeight:"500",cursor:"pointer"},children:"Clear All"}),n.jsx("button",{onClick:k,style:{flex:1,padding:"12px",background:"var(--primary)",border:"none",borderRadius:"8px",color:"white",fontSize:"14px",fontWeight:"600",cursor:"pointer"},children:"Apply Filters"})]})]});return p?n.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.5)",zIndex:1e3,display:r?"flex":"none",alignItems:"flex-end"},onClick:s,children:n.jsxs("div",{style:{background:"var(--bg-primary)",borderTopLeftRadius:"20px",borderTopRightRadius:"20px",width:"100%",maxHeight:"90vh",overflow:"auto"},onClick:z=>z.stopPropagation(),children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"20px",borderBottom:"1px solid var(--border)"},children:[n.jsxs("h3",{style:{margin:0,fontSize:"18px",fontWeight:"600",color:"var(--text-primary)",display:"flex",alignItems:"center",gap:"8px"},children:[n.jsx(lg,{size:18})," Filters"]}),n.jsx("button",{onClick:s,style:{background:"none",border:"none",cursor:"pointer",color:"var(--text-secondary)"},children:n.jsx(ra,{size:24})})]}),A]})}):n.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.5)",zIndex:1e3,display:r?"flex":"none",alignItems:"center",justifyContent:"flex-end"},onClick:s,children:n.jsxs("div",{style:{background:"var(--bg-primary)",width:"400px",height:"100%",overflow:"auto",boxShadow:"-4px 0 20px rgba(0,0,0,0.2)"},onClick:z=>z.stopPropagation(),children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"24px",borderBottom:"1px solid var(--border)"},children:[n.jsxs("h3",{style:{margin:0,fontSize:"20px",fontWeight:"600",color:"var(--text-primary)",display:"flex",alignItems:"center",gap:"8px"},children:[n.jsx(lg,{size:20})," Filters"]}),n.jsx("button",{onClick:s,style:{background:"none",border:"none",cursor:"pointer",color:"var(--text-secondary)"},children:n.jsx(ra,{size:24})})]}),A]})})}function n2(r){return{id:r.id,title:r.title,name:r.title,house_type:r.house_type,listing_type:r.listing_type,type:r.house_type,locality:r.locality||r.city,city:r.city,price:parseFloat(r.price),bedrooms:r.bedrooms,bathrooms:r.bathrooms,area:r.area,images:r.images||[],owner:r.owner,created_at:r.created_at,likes_count:r.likes_count||r.likes?.length||0,views_count:r.views_count||0}}function i2(){const r=un("(max-width:768px)"),s=!!Le.getToken(),d=Le.getUser(),[c,f]=h.useState([]),[p,g]=h.useState([]),[y,b]=h.useState(!0),[m,j]=h.useState(""),[v,k]=h.useState(!1),[_,A]=h.useState({priceRange:[0,1e7],propertyTypes:[],bedrooms:"any",bathrooms:"any"}),[z,T]=h.useState(0),[D]=h.useState([{name:"Miami Beach",city:"Miami, FL",listings:2345,avgPrice:"$450k",image:"https://images.unsplash.com/photo-1514214246283-42727a01d5c1?w=400"},{name:"New York",city:"New York, NY",listings:8901,avgPrice:"$1.2M",image:"https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400"},{name:"Los Angeles",city:"Los Angeles, CA",listings:5678,avgPrice:"$850k",image:"https://images.unsplash.com/photo-1515895309288-a3815ab7cf81?w=400"},{name:"Chicago",city:"Chicago, IL",listings:3456,avgPrice:"$375k",image:"https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=400"},{name:"Houston",city:"Houston, TX",listings:2123,avgPrice:"$320k",image:"https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400"},{name:"Phoenix",city:"Phoenix, AZ",listings:1890,avgPrice:"$410k",image:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400"},{name:"Philadelphia",city:"Philadelphia, PA",listings:2456,avgPrice:"$290k",image:"https://images.unsplash.com/photo-1514565131-fce0801e5785?w=400"},{name:"San Antonio",city:"San Antonio, TX",listings:1567,avgPrice:"$280k",image:"https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400"}]);h.useEffect(()=>{(async()=>{try{b(!0);const U=await xe.houses.getHouses(),$=Array.isArray(U)?U.map(n2):[];f($),g($.slice(0,5))}catch(U){console.error("Error fetching houses:",U),f([]),g([])}finally{b(!1)}})()},[]);const G=S=>{const U=document.getElementById("featured-listings");U&&(U.scrollLeft+=S==="right"?320:-320)},q=(S=>{const U=[];return S.forEach(($,re)=>{U.push($),(re+1)%8===0&&U.push({id:`ad-${re}`,isAd:!0,companyName:"MortgageDirect",description:"Low rates available!",image:"https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400"})}),U})(c.slice(0,24));return s?n.jsxs("div",{style:{minHeight:"100vh",background:"var(--bg-primary)",paddingBottom:r?"80px":"0"},children:[n.jsx(Sd,{}),n.jsxs("div",{style:{maxWidth:"1400px",margin:"0 auto",padding:r?"16px":"32px"},children:[n.jsx("div",{style:{background:"var(--bg-secondary)",borderRadius:"12px",padding:"24px",marginBottom:"32px",border:"1px solid var(--border)"},children:n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"16px"},children:[n.jsxs("div",{children:[n.jsxs("h2",{style:{margin:0,fontSize:"24px",fontWeight:"600",color:"var(--text-primary)",marginBottom:"8px"},children:["👋 Welcome back",d?.name?`, ${d.name.split(" ")[0]}!`:"!"]}),n.jsx("p",{style:{margin:0,fontSize:"14px",color:"var(--text-secondary)"},children:"Based on your activity: 3 new listings in Miami match your preferences. 2 price drops on saved properties."})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",padding:"8px 16px",background:"var(--bg-primary)",borderRadius:"8px",border:"1px solid var(--border)"},children:[n.jsx("span",{style:{fontSize:"12px",color:"var(--text-secondary)"},children:"G"}),n.jsx("span",{style:{fontSize:"12px",color:"var(--text-secondary)"},children:"Connected"})]})]})}),n.jsx("div",{style:{display:"flex",gap:"12px",marginBottom:"32px",overflowX:"auto",paddingBottom:"8px"},children:["📝 Add Listing","😂 Upload Meme","📋 My Listings","❤️ Saved","💬 Messages"].map((S,U)=>n.jsx(pe,{to:U===0?"/listings/create":U===1?"/memes":U===2||U===3?"/profile":"/messages",style:{padding:"12px 20px",background:"var(--bg-secondary)",border:"1px solid var(--border)",borderRadius:"8px",textDecoration:"none",color:"var(--text-primary)",fontSize:"14px",whiteSpace:"nowrap",fontWeight:"500"},children:S},U))}),n.jsxs("div",{style:{marginBottom:"32px"},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"20px"},children:[n.jsx("h3",{style:{margin:0,fontSize:"20px",fontWeight:"600",color:"var(--text-primary)"},children:"🔥 Recommended For You"}),n.jsx("select",{style:{padding:"8px 12px",border:"1px solid var(--border)",borderRadius:"8px",background:"var(--bg-secondary)",color:"var(--text-primary)",fontSize:"14px"},children:n.jsx("option",{children:"Based on your likes"})})]}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:r?"1fr":"repeat(4, 1fr)",gap:"20px"},children:c.slice(0,4).map(S=>n.jsxs("div",{children:[n.jsx(Ei,{house:S,isMobile:r}),n.jsx("div",{style:{marginTop:"8px",fontSize:"12px",color:"var(--primary)",fontWeight:"500"},children:"👍 89% match"})]},S.id))})]}),n.jsxs("div",{style:{marginBottom:"32px"},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"20px"},children:[n.jsx("h3",{style:{margin:0,fontSize:"20px",fontWeight:"600",color:"var(--text-primary)"},children:"👀 Recently Viewed"}),n.jsx("button",{style:{fontSize:"14px",color:"var(--text-secondary)",background:"none",border:"none",cursor:"pointer"},children:"Clear All"})]}),n.jsx("div",{style:{display:"flex",gap:"16px",overflowX:"auto",paddingBottom:"8px"},children:c.slice(0,5).map(S=>n.jsx("div",{style:{minWidth:r?"200px":"240px"},children:n.jsx(Ei,{house:S,isMobile:!1})},S.id))})]}),n.jsxs("div",{style:{marginBottom:"32px"},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"20px"},children:[n.jsx("h3",{style:{margin:0,fontSize:"20px",fontWeight:"600",color:"var(--text-primary)"},children:"❤️ Saved Properties"}),n.jsx(pe,{to:"/profile",style:{fontSize:"14px",color:"var(--primary)",textDecoration:"none"},children:"Manage Saved →"})]}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:r?"1fr":"repeat(4, 1fr)",gap:"20px"},children:c.slice(0,4).map(S=>n.jsx(Ei,{house:S,isMobile:r,isLiked:!0},S.id))})]})]})]}):n.jsxs("div",{style:{minHeight:"100vh",background:"var(--bg-primary)"},children:[n.jsx(Sd,{}),n.jsxs("div",{style:{maxWidth:"1400px",margin:"0 auto",padding:r?"16px":"32px"},children:[n.jsxs("section",{style:{textAlign:"center",padding:r?"40px 0":"80px 0",marginBottom:"60px"},children:[n.jsx("h1",{style:{fontSize:r?"32px":"48px",fontWeight:"700",color:"var(--text-primary)",marginBottom:"16px",lineHeight:"1.2"},children:"FIND YOUR DREAM HOME"}),n.jsx("p",{style:{fontSize:r?"16px":"20px",color:"var(--text-secondary)",marginBottom:"40px"},children:"Search millions of properties for sale and rent"}),n.jsxs("div",{style:{maxWidth:"800px",margin:"0 auto",background:"var(--bg-secondary)",borderRadius:"12px",padding:"16px",border:"1px solid var(--border)",boxShadow:"0 4px 20px rgba(0,0,0,0.1)"},children:[n.jsxs("div",{style:{display:"grid",gridTemplateColumns:r?"1fr":"2fr 1fr 1fr",gap:"12px",marginBottom:"12px"},children:[n.jsxs("div",{style:{position:"relative"},children:[n.jsx(ha,{size:18,style:{position:"absolute",left:"12px",top:"50%",transform:"translateY(-50%)",color:"var(--text-secondary)"}}),n.jsx("input",{type:"text",value:m,onChange:S=>j(S.target.value),placeholder:"Enter city, neighborhood, or ZIP",style:{width:"100%",padding:"12px 12px 12px 40px",border:"1px solid var(--border)",borderRadius:"8px",background:"var(--bg-primary)",color:"var(--text-primary)",fontSize:"14px"}})]}),n.jsx("select",{style:{padding:"12px",border:"1px solid var(--border)",borderRadius:"8px",background:"var(--bg-primary)",color:"var(--text-primary)",fontSize:"14px"},children:n.jsx("option",{children:"Property Type"})}),n.jsx("select",{style:{padding:"12px",border:"1px solid var(--border)",borderRadius:"8px",background:"var(--bg-primary)",color:"var(--text-primary)",fontSize:"14px"},children:n.jsx("option",{children:"Price Range"})})]}),n.jsxs("div",{style:{display:"grid",gridTemplateColumns:r?"1fr 1fr":"1fr 1fr 1fr 1fr",gap:"12px",marginBottom:"12px"},children:[n.jsx("select",{style:{padding:"12px",border:"1px solid var(--border)",borderRadius:"8px",background:"var(--bg-primary)",color:"var(--text-primary)",fontSize:"14px"},children:n.jsx("option",{children:"Beds: Any"})}),n.jsx("select",{style:{padding:"12px",border:"1px solid var(--border)",borderRadius:"8px",background:"var(--bg-primary)",color:"var(--text-primary)",fontSize:"14px"},children:n.jsx("option",{children:"Baths: Any"})}),!r&&n.jsxs(n.Fragment,{children:[n.jsxs("button",{onClick:()=>k(!0),style:{padding:"12px",border:"1px solid var(--border)",borderRadius:"8px",background:"var(--bg-primary)",color:"var(--text-primary)",fontSize:"14px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px"},children:[n.jsx("span",{children:"⚙️"})," Filters"]}),n.jsxs("button",{style:{padding:"12px",background:"var(--primary)",border:"none",borderRadius:"8px",color:"white",fontSize:"14px",fontWeight:"600",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px"},children:[n.jsx(La,{size:18})," Search"]})]})]}),r&&n.jsxs("div",{style:{display:"flex",gap:"12px"},children:[n.jsx("button",{onClick:()=>k(!0),style:{flex:1,padding:"12px",border:"1px solid var(--border)",borderRadius:"8px",background:"var(--bg-primary)",color:"var(--text-primary)",fontSize:"14px",cursor:"pointer"},children:"⚙️ Filters"}),n.jsx("button",{style:{flex:1,padding:"12px",background:"var(--primary)",border:"none",borderRadius:"8px",color:"white",fontSize:"14px",fontWeight:"600",cursor:"pointer"},children:"🔍 Search"})]})]}),n.jsx("div",{style:{display:"flex",gap:"12px",justifyContent:"center",flexWrap:"wrap",marginTop:"24px"},children:["🏠 Buy","📋 Rent","💰 Sold","🆕 New Listings","📉 Price Reduced"].map((S,U)=>n.jsx(pe,{to:`/listings${U===0?"?type=sale":U===1?"?type=rent":""}`,style:{padding:"10px 20px",background:"var(--bg-secondary)",border:"1px solid var(--border)",borderRadius:"20px",textDecoration:"none",color:"var(--text-primary)",fontSize:"14px",fontWeight:"500"},children:S},U))}),n.jsx("div",{style:{marginTop:"32px",padding:"16px",background:"var(--bg-secondary)",borderRadius:"12px",display:"inline-block"},children:n.jsx("div",{style:{fontSize:"14px",color:"var(--text-secondary)"},children:"⚡ Quick Stats: 12,345 Active Listings | 678 New This Week"})}),n.jsx("div",{style:{marginTop:"32px",maxWidth:"500px",margin:"32px auto 0"},children:n.jsx(As,{text:"Sign in with Google to save properties and get alerts",variant:"outlined"})})]}),n.jsxs("section",{style:{marginBottom:"60px"},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"24px"},children:[n.jsxs("div",{children:[n.jsx("h2",{style:{margin:0,fontSize:"24px",fontWeight:"600",color:"var(--text-primary)",marginBottom:"4px"},children:"Featured Properties"}),n.jsx("p",{style:{margin:0,fontSize:"14px",color:"var(--text-secondary)"},children:"Hand-picked properties just for you"})]}),!r&&n.jsxs(pe,{to:"/listings",style:{fontSize:"14px",color:"var(--primary)",textDecoration:"none",fontWeight:"500",display:"flex",alignItems:"center",gap:"4px"},children:["View All Properties ",n.jsx(ag,{size:16})]})]}),n.jsxs("div",{style:{position:"relative"},children:[!r&&n.jsxs(n.Fragment,{children:[n.jsx("button",{onClick:()=>G("left"),style:{position:"absolute",left:"-20px",top:"50%",transform:"translateY(-50%)",background:"var(--bg-secondary)",border:"1px solid var(--border)",borderRadius:"50%",width:"40px",height:"40px",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",zIndex:10},children:n.jsx($r,{size:20})}),n.jsx("button",{onClick:()=>G("right"),style:{position:"absolute",right:"-20px",top:"50%",transform:"translateY(-50%)",background:"var(--bg-secondary)",border:"1px solid var(--border)",borderRadius:"50%",width:"40px",height:"40px",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",zIndex:10},children:n.jsx(Ri,{size:20})})]}),n.jsx("div",{id:"featured-listings",style:{display:"flex",gap:"20px",overflowX:"auto",paddingBottom:"8px",scrollBehavior:"smooth"},children:p.map(S=>n.jsx("div",{style:{minWidth:r?"280px":"300px",flexShrink:0},children:n.jsx(Ei,{house:S,isMobile:!1})},S.id))})]})]}),n.jsxs("section",{style:{marginBottom:"60px"},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"24px"},children:[n.jsx("h2",{style:{margin:0,fontSize:"24px",fontWeight:"600",color:"var(--text-primary)"},children:"Popular Locations"}),!r&&n.jsx(pe,{to:"/listings",style:{fontSize:"14px",color:"var(--primary)",textDecoration:"none",fontWeight:"500"},children:"Explore All Cities →"})]}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:r?"1fr":"repeat(4, 1fr)",gap:"20px"},children:D.map((S,U)=>n.jsxs(pe,{to:`/listings?location=${S.city}`,style:{textDecoration:"none",color:"inherit",display:"block",background:"var(--bg-secondary)",borderRadius:"12px",overflow:"hidden",border:"1px solid var(--border)",transition:"transform 0.2s"},onMouseEnter:$=>{$.currentTarget.style.transform="translateY(-4px)"},onMouseLeave:$=>{$.currentTarget.style.transform="translateY(0)"},children:[n.jsx("div",{style:{position:"relative",width:"100%",height:"150px",overflow:"hidden"},children:n.jsx("img",{src:S.image,alt:S.name,style:{width:"100%",height:"100%",objectFit:"cover"}})}),n.jsxs("div",{style:{padding:"16px"},children:[n.jsx("h3",{style:{margin:0,fontSize:"16px",fontWeight:"600",color:"var(--text-primary)",marginBottom:"4px"},children:S.name}),n.jsx("div",{style:{fontSize:"12px",color:"var(--text-secondary)",marginBottom:"8px"},children:S.city}),n.jsxs("div",{style:{fontSize:"12px",color:"var(--text-secondary)"},children:[S.listings.toLocaleString()," listings"]}),n.jsxs("div",{style:{fontSize:"12px",color:"var(--text-primary)",fontWeight:"500",marginTop:"4px"},children:["Avg ",S.avgPrice]})]})]},U))})]}),n.jsxs("section",{style:{marginBottom:"60px"},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"24px"},children:[n.jsx("h2",{style:{margin:0,fontSize:"24px",fontWeight:"600",color:"var(--text-primary)"},children:"Recent Listings"}),!r&&n.jsx(pe,{to:"/listings",style:{fontSize:"14px",color:"var(--primary)",textDecoration:"none",fontWeight:"500"},children:"View All →"})]}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:r?"1fr":"repeat(4, 1fr)",gap:"20px"},children:q.map((S,U)=>S.isAd?n.jsx(Ms,{ad:S,isMobile:r},S.id):n.jsx(Ei,{house:S,isMobile:r,showViews:!0},S.id))}),n.jsx("div",{style:{textAlign:"center",marginTop:"32px"},children:n.jsxs(pe,{to:"/listings",style:{padding:"12px 24px",background:"var(--bg-secondary)",border:"1px solid var(--border)",borderRadius:"8px",textDecoration:"none",color:"var(--text-primary)",fontSize:"14px",fontWeight:"500",display:"inline-flex",alignItems:"center",gap:"8px"},children:["Load More Properties ",n.jsx(ag,{size:16})]})})]}),n.jsxs("section",{style:{marginBottom:"60px"},children:[n.jsx("h2",{style:{margin:0,fontSize:"24px",fontWeight:"600",color:"var(--text-primary)",marginBottom:"32px",textAlign:"center"},children:"Why Choose HouseHunt"}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:r?"repeat(2, 1fr)":"repeat(4, 1fr)",gap:"24px"},children:[{icon:D1,title:"Verified Listings",desc:"All listings verified by our team"},{icon:qg,title:"Secure Payments",desc:"End-to-end encrypted transactions"},{icon:Ur,title:"24/7 Support",desc:"Round-the-clock customer service"},{icon:Qb,title:"Expert Agents",desc:"Certified real estate professionals"},{icon:Z1,title:"Virtual Tours",desc:"360° views from anywhere"},{icon:Hg,title:"Price Match",desc:"Best price guarantee"},{icon:Db,title:"Mobile App",desc:"iOS & Android apps available"},{icon:I1,title:"Local Expertise",desc:"Neighborhood specialists"}].map((S,U)=>n.jsxs("div",{style:{textAlign:"center",padding:"24px",background:"var(--bg-secondary)",borderRadius:"12px",border:"1px solid var(--border)"},children:[n.jsx("div",{style:{width:"48px",height:"48px",margin:"0 auto 16px",background:"rgba(59, 130, 246, 0.1)",borderRadius:"12px",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--primary)"},children:n.jsx(S.icon,{size:24})}),n.jsx("h3",{style:{margin:0,fontSize:"16px",fontWeight:"600",color:"var(--text-primary)",marginBottom:"8px"},children:S.title}),n.jsx("p",{style:{margin:0,fontSize:"13px",color:"var(--text-secondary)",lineHeight:"1.5"},children:S.desc})]},U))})]}),n.jsxs("footer",{style:{borderTop:"1px solid var(--border)",paddingTop:"40px",marginTop:"60px"},children:[n.jsxs("div",{style:{display:"grid",gridTemplateColumns:r?"1fr":"repeat(4, 1fr)",gap:"32px",marginBottom:"32px"},children:[n.jsxs("div",{children:[n.jsx("h4",{style:{margin:0,fontSize:"14px",fontWeight:"600",color:"var(--text-primary)",marginBottom:"16px"},children:"COMPANY"}),n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:["About Us","Careers","Press","Blog","Contact"].map(S=>n.jsx(pe,{to:`/${S.toLowerCase().replace(" ","-")}`,style:{fontSize:"13px",color:"var(--text-secondary)",textDecoration:"none"},children:S},S))})]}),n.jsxs("div",{children:[n.jsx("h4",{style:{margin:0,fontSize:"14px",fontWeight:"600",color:"var(--text-primary)",marginBottom:"16px"},children:"RESOURCES"}),n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:["Help Center","Safety Tips","FAQ","Privacy Policy","Terms of Service"].map(S=>n.jsx(pe,{to:`/${S.toLowerCase().replace(" ","-")}`,style:{fontSize:"13px",color:"var(--text-secondary)",textDecoration:"none"},children:S},S))})]}),n.jsxs("div",{children:[n.jsx("h4",{style:{margin:0,fontSize:"14px",fontWeight:"600",color:"var(--text-primary)",marginBottom:"16px"},children:"EXPLORE"}),n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:["Cities","Neighborhoods","Schools","Agents","Developers"].map(S=>n.jsx(pe,{to:`/${S.toLowerCase()}`,style:{fontSize:"13px",color:"var(--text-secondary)",textDecoration:"none"},children:S},S))})]}),n.jsxs("div",{children:[n.jsx("h4",{style:{margin:0,fontSize:"14px",fontWeight:"600",color:"var(--text-primary)",marginBottom:"16px"},children:"CONNECT"}),n.jsx("div",{style:{display:"flex",gap:"12px",marginBottom:"16px"},children:["📱 App Store","🤖 Google Play","📘 Facebook","📸 Instagram","🐦 Twitter"].map(S=>n.jsx("a",{href:"#",style:{fontSize:"12px",color:"var(--text-secondary)",textDecoration:"none"},children:S},S))})]})]}),n.jsx("div",{style:{padding:"24px",background:"var(--bg-secondary)",borderRadius:"12px",marginBottom:"24px",textAlign:"center"},children:n.jsx(As,{text:"Sign in with Google to save properties and get personalized alerts",variant:"outlined"})}),n.jsxs("div",{style:{textAlign:"center",padding:"24px",borderTop:"1px solid var(--border)"},children:[n.jsx("div",{style:{fontSize:"12px",color:"var(--text-secondary)",marginBottom:"8px"},children:"© 2024 HouseHunt. All rights reserved."}),n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"16px"},children:[n.jsx("select",{style:{padding:"6px 12px",border:"1px solid var(--border)",borderRadius:"6px",background:"var(--bg-secondary)",color:"var(--text-primary)",fontSize:"12px"},children:n.jsx("option",{children:"English"})}),n.jsx("select",{style:{padding:"6px 12px",border:"1px solid var(--border)",borderRadius:"6px",background:"var(--bg-secondary)",color:"var(--text-primary)",fontSize:"12px"},children:n.jsx("option",{children:"USD"})})]})]})]})]}),n.jsx(Ds,{isOpen:v,onClose:()=>k(!1),filters:_,onApplyFilters:A})]})}function r2({onNewMessage:r,onSearch:s,searchQuery:d,onSearchChange:c}){const f=nt(),[p,g]=On.useState(typeof window<"u"&&window.innerWidth<640);return On.useEffect(()=>{const y=()=>g(window.innerWidth<640);return window.addEventListener("resize",y),()=>window.removeEventListener("resize",y)},[]),n.jsxs("header",{className:"unified-navbar",style:{background:"var(--bg-primary)",borderBottom:"1px solid var(--border)"},children:[n.jsxs("button",{type:"button",onClick:()=>f("/profile"),style:{display:"flex",alignItems:"center",gap:8,padding:"8px 12px",border:"none",background:"transparent",color:"var(--text-primary)",cursor:"pointer",borderRadius:"var(--radius)",fontSize:"var(--font-size-sm)"},children:[n.jsx(Hr,{size:20}),!p&&"Back to Profile"]}),n.jsxs("div",{style:{flex:1,display:"flex",alignItems:"center",gap:12,justifyContent:"center"},children:[n.jsx(la,{size:24}),n.jsx("span",{style:{fontWeight:"var(--font-weight-semibold)",fontSize:"var(--font-size-lg)"},children:"Messages"})]}),n.jsxs("div",{className:"nav-right",style:{display:"flex",alignItems:"center",gap:8},children:[c&&!p&&n.jsxs("div",{style:{position:"relative",display:"flex",alignItems:"center"},children:[n.jsx(La,{size:18,style:{position:"absolute",left:10,color:"var(--text-secondary)",pointerEvents:"none"}}),n.jsx("input",{type:"text",value:d||"",onChange:y=>c(y.target.value),placeholder:"Search conversations...",style:{padding:"8px 12px 8px 36px",border:"1px solid var(--border)",borderRadius:"var(--radius)",fontSize:"var(--font-size-sm)",background:"var(--bg-secondary)",color:"var(--text-primary)",width:200}})]}),r&&n.jsxs("button",{type:"button",onClick:r,style:{display:"flex",alignItems:"center",gap:6,padding:"8px 16px",border:"none",borderRadius:"var(--radius)",background:"var(--accent)",color:"#fff",cursor:"pointer",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)"},children:[n.jsx(Gg,{size:18}),!p&&n.jsx("span",{children:"New Message"})]}),n.jsx("button",{type:"button",onClick:()=>f("/profile"),className:"icon-btn","aria-label":"Profile",style:{width:40,height:40,display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"var(--radius)",border:"1px solid var(--border)",background:"var(--bg-secondary)",color:"var(--text-primary)",cursor:"pointer"},children:n.jsx(Tt,{size:20})})]})]})}function kd(){nt();const r=$t(),{conversationId:s}=Os(),[d,c]=h.useState([]),[f,p]=h.useState(null),[g,y]=h.useState([]),[b,m]=h.useState(""),[j,v]=h.useState(""),[k,_]=h.useState(""),[A,z]=h.useState([]),[T,D]=h.useState(!1),[G,K]=h.useState(!1),[q,S]=h.useState(!1),[U,$]=h.useState(new Set),re=h.useRef(null),be=h.useRef(null),ie=h.useRef(null),de=h.useRef(null),we=M=>{if(!M)return"Unknown";const J=M instanceof Date?M:new Date(M);if(isNaN(J.getTime()))return"Unknown";const fe=new Date-J,ve=Math.floor(fe/6e4),he=Math.floor(fe/36e5),Ae=Math.floor(fe/864e5);return ve<1?"Just now":ve<60?`${ve}m ago`:he<24?`${he}h ago`:Ae<7?`${Ae}d ago`:J.toLocaleDateString()},W=async()=>{try{const M=await xe.messages.getConversations(),J=await xe.auth.getCurrentUser(),P="http://localhost:8000",fe=(M||[]).map(he=>{const Ae=he.other_user||{},Fe=he.last_message,ga=Ae.profile_picture?Ae.profile_picture.startsWith("http")?Ae.profile_picture:`${P}${Ae.profile_picture}`:null;return{id:Ae.id,userId:Ae.id,name:Ae.name||Ae.email,avatar:ga||`https://ui-avatars.com/api/?name=${encodeURIComponent(Ae.name||Ae.email||"?")}&background=eaeaea`,lastMessage:Fe?Fe.content:"",time:Fe?we(Fe.created_at):"—",unread:he.unread_count||0,isOnline:!1,messages:[]}});c(fe);const ve=fe.reduce((he,Ae)=>he+Ae.unread,0);sessionStorage.setItem("unread_messages_count",String(ve)),window.dispatchEvent(new CustomEvent("unread-messages-updated",{detail:{count:ve}}))}catch(M){console.error("Error loading conversations:",M),c([])}};h.useEffect(()=>{W();const M=setInterval(W,3e4);return()=>clearInterval(M)},[]),h.useEffect(()=>{if(d.length===0)return;const M=s||r.state?.openWithUserId||new URLSearchParams(r.search).get("with");if(!M)return;const J=d.find(P=>String(P.userId)===String(M));J&&J!==f?ye(J):!J&&M&&!s&&xe.profile.getProfileById(M).then(P=>{const fe={id:P.id,userId:P.id,name:P.name||P.email,avatar:P.profile_picture?`http://localhost:8000${P.profile_picture}`:`https://ui-avatars.com/api/?name=${encodeURIComponent(P.name||P.email)}&background=eaeaea`,lastMessage:"",time:"Now",unread:0,isOnline:!1,messages:[]};c(ve=>[fe,...ve]),ye(fe)}).catch(()=>{})},[d,s,r.state?.openWithUserId,r.search]),h.useEffect(()=>{if(d.length===0)return;const M=s||r.state?.openWithUserId||new URLSearchParams(r.search).get("with");if(!M)return;const J=d.find(P=>String(P.userId)===String(M));J&&J!==f?ye(J):!J&&M&&xe.profile.getProfileById(M).then(P=>{const fe={id:P.id,userId:P.id,name:P.name||P.email,avatar:P.profile_picture?`http://localhost:8000${P.profile_picture}`:`https://ui-avatars.com/api/?name=${encodeURIComponent(P.name||P.email)}&background=eaeaea`,lastMessage:"",time:"Now",unread:0,isOnline:!1,messages:[]};c(ve=>[fe,...ve]),ye(fe)}).catch(()=>{})},[d,s,r.state?.openWithUserId,r.search]),h.useEffect(()=>{F()},[g,f]),h.useEffect(()=>()=>{de.current&&clearTimeout(de.current)},[]);const F=()=>{re.current?.scrollIntoView({behavior:"smooth"})},ye=async M=>{p(M),y([]);try{const J=await xe.messages.getMessages(M.userId),P=await xe.auth.getCurrentUser(),ve=(Array.isArray(J)?J:[]).map(he=>({id:he.id,conversationId:M.id,senderId:he.sender?.id??he.sender,senderName:he.sender?.id===P.id?"You":he.sender?.name||he.sender?.email||"?",content:he.content,timestamp:new Date(he.created_at),isRead:he.is_read,isSender:(he.sender?.id??he.sender)===P.id,house:he.house}));y(ve.sort((he,Ae)=>he.timestamp-Ae.timestamp))}catch(J){console.error("Error loading messages:",J)}try{await xe.messages.markMessagesRead(M.userId)}catch(J){console.error("Error marking messages as read:",J)}c(J=>{const P=J.map(ve=>ve.id===M.id?{...ve,unread:0}:ve),fe=P.reduce((ve,he)=>ve+he.unread,0);return sessionStorage.setItem("unread_messages_count",String(fe)),window.dispatchEvent(new CustomEvent("unread-messages-updated",{detail:{count:fe}})),P})},H=async()=>{if(!b.trim()||!f)return;const M=b.trim();m("");try{const J=await xe.messages.sendMessage(f.userId,null,M),P=await xe.auth.getCurrentUser(),fe={id:J.id,conversationId:f.id,senderId:P.id,senderName:"You",content:J.content,timestamp:new Date(J.created_at),isRead:J.is_read,isSender:!0,house:J.house};y(ve=>[...ve,fe]),c(ve=>{const he=ve.map(Fe=>Fe.id===f.id?{...Fe,lastMessage:M,time:C(new Date),messages:[...Fe.messages||[],fe]}:Fe),Ae=he.reduce((Fe,ga)=>Fe+ga.unread,0);return sessionStorage.setItem("unread_messages_count",Ae.toString()),window.dispatchEvent(new CustomEvent("unread-messages-updated",{detail:{count:Ae}})),he}),setTimeout(()=>{F()},100)}catch(J){console.error("Error sending message:",J),m(M),alert("Failed to send message: "+(J.message||"Please try again"))}},I=M=>{M.key==="Enter"&&!M.shiftKey&&(M.preventDefault(),H())},ue=async M=>{const J=M?M.trim():"";J&&J.length>=2&&K(!0);try{if(J&&J.length===1){z([]),K(!1);return}const P=await xe.auth.searchUsers(J||"");z(P||[])}catch(P){console.error("Error searching users:",P),console.error("Search query was:",M),z([])}finally{K(!1)}};h.useEffect(()=>{T&&A.length===0&&!G&&ue("")},[T]);const Ee=async M=>{try{const J=d.find(P=>P.userId===M.id);if(J)ye(J);else{const P={id:M.id,userId:M.id,name:M.name||M.email,avatar:M.profile_picture||`https://ui-avatars.com/api/?name=${encodeURIComponent(M.name||M.email)}&background=random`,lastMessage:"",time:"Now",unread:0,isOnline:!1,messages:[]};c(fe=>[P,...fe]),p(P),y([])}D(!1),_(""),z([])}catch(J){console.error("Error starting conversation:",J),alert("Failed to start conversation. Please try again.")}},Te=d.filter(M=>M.name.toLowerCase().includes(j.toLowerCase())||M.lastMessage.toLowerCase().includes(j.toLowerCase())),C=M=>{if(!M)return"Unknown";const J=M instanceof Date?M:new Date(M);if(isNaN(J.getTime()))return"Unknown";const fe=new Date-J,ve=Math.floor(fe/6e4),he=Math.floor(fe/36e5),Ae=Math.floor(fe/864e5);return ve<1?"Just now":ve<60?`${ve}m ago`:he<24?`${he}h ago`:Ae<7?`${Ae}d ago`:J.toLocaleDateString()},Q=()=>d.reduce((M,J)=>M+J.unread,0),ne=()=>{D(!0)};return n.jsxs(n.Fragment,{children:[n.jsx(r2,{onNewMessage:ne,searchQuery:j,onSearchChange:v}),n.jsxs("div",{className:"messages-page",children:[n.jsxs("div",{className:"messages-container",children:[n.jsx("div",{className:"messages-sidebar",children:T?n.jsxs("div",{className:"user-search-section",children:[n.jsxs("div",{className:"user-search-header",children:[n.jsx("button",{className:"back-to-conversations-btn",onClick:()=>{D(!1),_(""),z([])},children:n.jsx($r,{size:20})}),n.jsx("h3",{children:"Search Users"})]}),n.jsxs("div",{className:"user-search-box",children:[n.jsx(La,{size:20,className:"search-icon"}),n.jsx("input",{ref:ie,type:"text",placeholder:"Search by name, email, or phone...",value:k,onChange:M=>{const J=M.target.value;_(J),de.current&&clearTimeout(de.current),de.current=setTimeout(()=>{ue(J)},150)},className:"user-search-input"}),G&&n.jsx("div",{className:"search-spinner",children:"Searching..."})]}),n.jsx("div",{className:"user-search-results",children:G&&A.length===0&&k.length>=2?n.jsx("div",{className:"search-hint",children:"Searching..."}):A.length>0?n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"results-header",children:n.jsx("p",{children:k?`Found ${A.length} user(s)`:`All Users (${A.length})`})}),A.map(M=>n.jsxs("div",{className:"user-search-result-item",onClick:()=>Ee(M),children:[n.jsx("div",{className:"user-avatar",children:n.jsx("img",{src:M.profile_picture||`https://ui-avatars.com/api/?name=${encodeURIComponent(M.name||M.email)}&background=random`,alt:M.name||M.email})}),n.jsxs("div",{className:"user-info",children:[n.jsx("h4",{children:M.name||M.email}),n.jsx("p",{children:M.email}),M.phone_number&&n.jsx("p",{className:"user-phone",children:M.phone_number}),M.is_verified&&n.jsx("span",{className:"verified-badge",children:"✓ Verified"})]}),n.jsx(ChevronRight,{size:20,className:"chevron-icon"})]},M.id))]}):k.length>=2?n.jsxs("div",{className:"no-results",children:['No users found matching "',k,'"']}):k.length===0?n.jsx("div",{className:"search-hint",children:"Type to search users or browse all users above"}):k.length===1?n.jsx("div",{className:"search-hint",children:"Type at least 2 characters to search"}):null})]}):n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"search-section",children:n.jsxs("div",{className:"search-box",children:[n.jsx(La,{size:20,className:"search-icon"}),n.jsx("input",{ref:be,type:"text",placeholder:"Search conversations...",value:j,onChange:M=>v(M.target.value),className:"search-input"})]})}),n.jsxs("div",{className:"conversations-header",children:[n.jsx("h3",{children:"Conversations"}),n.jsx("span",{className:"unread-badge",children:Q()>0&&`${Q()} new`})]}),n.jsx("div",{className:"conversations-list",children:Te.map(M=>n.jsxs("div",{className:`conversation-item ${f?.id===M.id?"active":""}`,onClick:()=>ye(M),children:[n.jsxs("div",{className:"conversation-avatar",children:[n.jsx("img",{src:M.avatar||`https://ui-avatars.com/api/?name=${encodeURIComponent(M.name||"U")}&background=random`,alt:M.name}),M.isOnline&&U.has(M.id)&&n.jsx("div",{className:"online-status"})]}),n.jsxs("div",{className:"conversation-info",children:[n.jsxs("div",{className:"conversation-header",children:[n.jsx("h4",{children:M.name}),n.jsx("span",{className:"message-time",children:M.time})]}),n.jsx("p",{className:"last-message",children:M.lastMessage})]}),M.unread>0&&n.jsx("div",{className:"unread-count",children:M.unread})]},M.id))})]})}),n.jsx("div",{className:"chat-area",children:f?n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"chat-header",children:[n.jsxs("div",{className:"chat-user-info",children:[n.jsxs("div",{className:"chat-avatar",children:[n.jsx("img",{src:f.avatar||`https://ui-avatars.com/api/?name=${encodeURIComponent(f.name||"U")}&background=random`,alt:f.name}),f.isOnline&&U.has(f.id)&&n.jsx("div",{className:"online-status"})]}),n.jsxs("div",{className:"user-details",children:[n.jsx("h4",{children:f.name}),n.jsx("p",{className:"user-status",children:f.isOnline&&U.has(f.id)?"Online":"Offline"})]})]}),n.jsxs("div",{className:"chat-actions",children:[n.jsx("button",{className:"action-btn",children:n.jsx(Ls,{size:20})}),n.jsx("button",{className:"action-btn",children:n.jsx(Vg,{size:20})}),n.jsx("button",{className:"action-btn",children:n.jsx(Bd,{size:20})})]})]}),n.jsxs("div",{className:"messages-list",children:[g.map(M=>n.jsxs("div",{className:`message-bubble ${M.isSender?"sent":"received"}`,children:[!M.isSender&&n.jsx("div",{className:"sender-avatar",children:n.jsx("img",{src:f.avatar||`https://ui-avatars.com/api/?name=${encodeURIComponent(f.name||"U")}&background=random`,alt:M.senderName})}),n.jsxs("div",{className:"message-content",children:[n.jsx("div",{className:"message-text",children:M.content}),n.jsxs("div",{className:"message-meta",children:[n.jsx("span",{className:"message-time",children:C(M.timestamp)}),M.isSender&&n.jsx("div",{className:"message-status",children:n.jsx(A1,{size:14})})]})]})]},M.id)),q&&n.jsxs("div",{className:"typing-indicator",children:[n.jsxs("div",{className:"typing-dots",children:[n.jsx("span",{}),n.jsx("span",{}),n.jsx("span",{})]}),n.jsx("span",{className:"typing-text",children:"Typing..."})]}),n.jsx("div",{ref:re})]}),n.jsxs("div",{className:"message-input-container",children:[n.jsxs("div",{className:"input-actions",children:[n.jsx("button",{className:"input-btn",children:n.jsx(bb,{size:20})}),n.jsx("button",{className:"input-btn",children:n.jsx(vd,{size:20})})]}),n.jsxs("div",{className:"message-input",children:[n.jsx("input",{type:"text",placeholder:"Type a message...",value:b,onChange:M=>m(M.target.value),onKeyPress:I,className:"message-text-input"}),n.jsx("button",{className:"send-btn",onClick:H,disabled:!b.trim(),children:n.jsx(zb,{size:20})})]})]})]}):n.jsxs("div",{className:"empty-state",children:[n.jsx("div",{className:"empty-icon",children:n.jsx(la,{size:64})}),n.jsx("h2",{children:"Select a conversation"}),n.jsx("p",{children:"Choose a conversation from the list to start messaging"})]})})]}),n.jsx("style",{children:`
        .messages-page {
          min-height: calc(100vh - 120px);
          height: 100%;
          background: #f8fafc;
          color: #1e293b;
          font-family:
            -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        }

        .messages-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 24px;
          background: white;
          border-bottom: 1px solid #e2e8f0;
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .header-left {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .back-btn {
          background: none;
          border: none;
          padding: 8px;
          border-radius: 8px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s ease;
        }

        .back-btn:hover {
          background: #f1f5f9;
        }

        .messages-header h1 {
          margin: 0;
          font-size: 24px;
          font-weight: 700;
        }

        .header-actions {
          display: flex;
          gap: 12px;
        }

        .new-chat-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 16px;
          background: #3b82f6;
          color: white;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .new-chat-btn:hover {
          background: #2563eb;
          transform: translateY(-1px);
        }

        .messages-container {
          display: grid;
          grid-template-columns: 350px 1fr;
          height: calc(100vh - 140px);
          background: white;
        }

        .messages-sidebar {
          border-right: 1px solid #e2e8f0;
          display: flex;
          flex-direction: column;
          background: #f8fafc;
        }

        .search-section {
          padding: 16px;
          border-bottom: 1px solid #e2e8f0;
        }

        .search-box {
          position: relative;
          background: white;
          border-radius: 8px;
          padding: 8px 12px;
          border: 1px solid #e2e8f0;
        }

        .search-icon {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          color: #94a3b8;
          pointer-events: none;
        }

        .search-input {
          width: 100%;
          padding: 8px 12px 8px 36px;
          border: none;
          outline: none;
          background: transparent;
          font-size: 14px;
        }

        .conversations-header {
          padding: 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #e2e8f0;
        }

        .conversations-header h3 {
          margin: 0;
          font-size: 16px;
          font-weight: 600;
          color: #64748b;
        }

        .unread-badge {
          font-size: 12px;
          color: #3b82f6;
          font-weight: 600;
        }

        .conversations-list {
          flex: 1;
          overflow-y: auto;
          padding: 8px;
        }

        .conversation-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s ease;
          position: relative;
        }

        .conversation-item:hover {
          background: white;
        }

        .conversation-item.active {
          background: #eef2ff;
        }

        .conversation-avatar {
          position: relative;
          width: 48px;
          height: 48px;
        }

        .conversation-avatar img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid white;
        }

        .online-status {
          position: absolute;
          bottom: 2px;
          right: 2px;
          width: 12px;
          height: 12px;
          background: #10b981;
          border: 2px solid white;
          border-radius: 50%;
          box-shadow: 0 0 0 2px #f8fafc;
        }

        .conversation-info {
          flex: 1;
          min-width: 0;
        }

        .conversation-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 4px;
        }

        .conversation-header h4 {
          margin: 0;
          font-size: 16px;
          font-weight: 600;
          color: #1e293b;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .message-time {
          font-size: 12px;
          color: #94a3b8;
          white-space: nowrap;
        }

        .last-message {
          margin: 0;
          font-size: 14px;
          color: #64748b;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .unread-count {
          background: #3b82f6;
          color: white;
          font-size: 12px;
          font-weight: 600;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .chat-area {
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .chat-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 20px;
          border-bottom: 1px solid #e2e8f0;
          background: white;
        }

        .chat-user-info {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .chat-avatar {
          position: relative;
          width: 40px;
          height: 40px;
        }

        .chat-avatar img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
        }

        .user-details h4 {
          margin: 0 0 2px;
          font-size: 16px;
          font-weight: 600;
          color: #1e293b;
        }

        .user-status {
          margin: 0;
          font-size: 12px;
          color: #10b981;
          font-weight: 500;
        }

        .chat-actions {
          display: flex;
          gap: 8px;
        }

        .action-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1px solid #e2e8f0;
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .action-btn:hover {
          background: #f1f5f9;
          border-color: #cbd5e1;
        }

        .messages-list {
          flex: 1;
          overflow-y: auto;
          padding: 20px;
          background: #f8fafc;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .message-bubble {
          max-width: 70%;
          padding: 12px 16px;
          border-radius: 18px;
          position: relative;
          animation: fadeIn 0.3s ease;
          display: flex;
          align-items: flex-end;
          gap: 10px;
        }

        .message-bubble.received {
          background: white;
          border: 1px solid #e2e8f0;
          align-self: flex-start;
        }

        .message-bubble.sent {
          background: #3b82f6;
          color: white;
          align-self: flex-end;
          margin-left: auto;
        }

        .sender-avatar {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          overflow: hidden;
          flex-shrink: 0;
        }

        .sender-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .message-content {
          flex: 1;
          min-width: 0;
        }

        .message-text {
          margin: 0;
          line-height: 1.4;
          word-wrap: break-word;
        }

        .message-meta {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          gap: 8px;
          margin-top: 6px;
          opacity: 0.8;
        }

        .message-meta .message-time {
          font-size: 11px;
          color: inherit;
          margin: 0;
        }

        .message-status {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .typing-indicator {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          align-self: flex-start;
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 18px;
          margin-bottom: 12px;
        }

        .typing-dots {
          display: flex;
          gap: 4px;
        }

        .typing-dots span {
          width: 6px;
          height: 6px;
          background: #94a3b8;
          border-radius: 50%;
          display: inline-block;
          animation: typing 1.4s infinite;
        }

        .typing-dots span:nth-child(2) {
          animation-delay: 0.2s;
        }

        .typing-dots span:nth-child(3) {
          animation-delay: 0.4s;
        }

        @keyframes typing {
          0%,
          60%,
          100% {
            transform: translateY(0);
            opacity: 0.4;
          }
          30% {
            transform: translateY(-6px);
            opacity: 1;
          }
        }

        .typing-text {
          font-size: 12px;
          color: #64748b;
        }

        .message-input-container {
          display: flex;
          align-items: flex-end;
          gap: 12px;
          padding: 16px;
          border-top: 1px solid #e2e8f0;
          background: white;
        }

        .input-actions {
          display: flex;
          gap: 8px;
        }

        .input-btn {
          width: 40px;
          height: 40px;
          border-radius: 8px;
          border: 1px solid #e2e8f0;
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .input-btn:hover {
          background: #f1f5f9;
          border-color: #cbd5e1;
        }

        .message-input {
          flex: 1;
          display: flex;
          gap: 12px;
          align-items: center;
        }

        .message-text-input {
          flex: 1;
          padding: 12px 16px;
          border: 1px solid #e2e8f0;
          border-radius: 24px;
          font-size: 16px;
          outline: none;
          transition: border-color 0.2s ease;
        }

        .message-text-input:focus {
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .send-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #3b82f6;
          border: none;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .send-btn:hover:not(:disabled) {
          background: #2563eb;
          transform: scale(1.05);
        }

        .send-btn:disabled {
          background: #94a3b8;
          cursor: not-allowed;
          transform: none;
        }

        .empty-state {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          background: #f8fafc;
        }

        .empty-icon {
          margin-bottom: 16px;
          color: #94a3b8;
        }

        .empty-state h2 {
          margin: 0 0 8px;
          font-size: 24px;
          color: #64748b;
        }

        .empty-state p {
          margin: 0;
          color: #94a3b8;
          font-size: 16px;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* User Search Styles */
        .user-search-section {
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .user-search-header {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px;
          border-bottom: 1px solid #e2e8f0;
        }

        .back-to-conversations-btn {
          background: none;
          border: none;
          padding: 8px;
          border-radius: 8px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s ease;
        }

        .back-to-conversations-btn:hover {
          background: #f1f5f9;
        }

        .user-search-header h3 {
          margin: 0;
          font-size: 18px;
          font-weight: 600;
        }

        .user-search-box {
          position: relative;
          padding: 16px;
          border-bottom: 1px solid #e2e8f0;
        }

        .user-search-input {
          width: 100%;
          padding: 12px 16px 12px 44px;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          font-size: 14px;
          outline: none;
          transition: border-color 0.2s ease;
        }

        .user-search-input:focus {
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .search-spinner {
          position: absolute;
          right: 32px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 12px;
          color: #94a3b8;
        }

        .user-search-results {
          flex: 1;
          overflow-y: auto;
          padding: 8px;
        }

        .user-search-result-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px;
          border-radius: 8px;
          cursor: pointer;
          transition: background 0.2s ease;
        }

        .user-search-result-item:hover {
          background: #f1f5f9;
        }

        .user-avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          overflow: hidden;
          flex-shrink: 0;
        }

        .user-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .user-info {
          flex: 1;
          min-width: 0;
        }

        .user-info h4 {
          margin: 0 0 4px;
          font-size: 16px;
          font-weight: 600;
          color: #1e293b;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .user-info p {
          margin: 0;
          font-size: 13px;
          color: #64748b;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .user-phone {
          font-size: 12px;
          color: #94a3b8;
        }

        .chevron-icon {
          color: #94a3b8;
          flex-shrink: 0;
        }

        .results-header {
          padding: 12px 16px;
          border-bottom: 1px solid #e2e8f0;
          background: #f8fafc;
        }

        .results-header p {
          margin: 0;
          font-size: 12px;
          font-weight: 600;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .verified-badge {
          display: inline-block;
          margin-top: 4px;
          padding: 2px 6px;
          background: #10b981;
          color: white;
          font-size: 10px;
          font-weight: 600;
          border-radius: 4px;
        }

        .no-results,
        .search-hint {
          padding: 24px;
          text-align: center;
          color: #94a3b8;
          font-size: 14px;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .messages-container {
            grid-template-columns: 1fr;
            height: calc(100vh - 70px);
          }

          .messages-sidebar {
            display: ${f&&!T?"none":"flex"};
            height: 50vh;
          }

          .chat-area {
            height: ${f?"100%":"50vh"};
          }

          .message-bubble {
            max-width: 85%;
          }
        }
      `})]})]})}const vs="multi_profiles",js="active_profile_id",ia={getAllProfiles(){try{const r=localStorage.getItem(vs);return r?JSON.parse(r):[]}catch{return[]}},addProfile(r,s){const d=this.getAllProfiles(),c={id:r.id||Date.now().toString(),userId:r.id,name:r.name||r.email,email:r.email,avatar:r.profile_picture,account_type:r.account_type,is_verified:r.is_verified,token:s,added_at:new Date().toISOString()},f=d.findIndex(p=>p.userId===c.userId);return f>=0?d[f]={...d[f],...c}:d.push(c),localStorage.setItem(vs,JSON.stringify(d)),this.setActiveProfile(c.id),c},removeProfile(r){const d=this.getAllProfiles().filter(c=>c.id!==r);localStorage.setItem(vs,JSON.stringify(d)),this.getActiveProfileId()===r&&(d.length>0?this.setActiveProfile(d[0].id):localStorage.removeItem(js))},setActiveProfile(r){localStorage.setItem(js,r);const s=this.getProfile(r);s&&s.token&&Le.setToken(s.token)},getActiveProfileId(){return localStorage.getItem(js)},getActiveProfile(){const r=this.getActiveProfileId();return r?this.getProfile(r):null},getProfile(r){return this.getAllProfiles().find(d=>d.id===r)||null},switchProfile(r){return this.getProfile(r)?(this.setActiveProfile(r),window.dispatchEvent(new CustomEvent("profile-switched",{detail:{profileId:r}})),!0):!1},clearAll(){localStorage.removeItem(vs),localStorage.removeItem(js)}},ug="http://localhost:8000";function n0({user:r,trigger:s,isMobile:d=!1}){const c=nt(),f=$t(),{theme:p,toggleTheme:g}=Ld(),[y,b]=h.useState(!1),m=h.useRef(null),j=h.useRef(null);h.useEffect(()=>{const S=U=>{m.current&&!m.current.contains(U.target)&&j.current&&!j.current.contains(U.target)&&b(!1)};return document.addEventListener("mousedown",S),()=>document.removeEventListener("mousedown",S)},[]);const v=ia.getAllProfiles(),k=ia.getActiveProfile(),_=()=>{const S=ia.getActiveProfileId();S&&ia.removeProfile(S),Le.clearAuth(),c("/")},A=()=>{ia.clearAll(),Le.clearAuth(),c("/")},z=S=>{ia.switchProfile(S),b(!1),window.location.reload()},T=r?.profile_picture?r.profile_picture.startsWith("http")?r.profile_picture:`${ug}${r.profile_picture}`:null,D=(S,U)=>U?f.hash===U:f.pathname.startsWith(S),G=[{title:"DASHBOARD",items:[{icon:ib,label:"Overview",path:"/profile",hash:"#dashboard"},{icon:Tt,label:"My Profile",path:"/profile",hash:"#edit"},{icon:la,label:"Messages",path:"/messages",badge:r?.unread_count},{icon:ft,label:"Saved Properties",path:"/profile",hash:"#liked"},{icon:Ug,label:"Saved Memes",path:"/profile",hash:"#saved-memes"},{icon:dt,label:"Recently Viewed",path:"/profile",hash:"#recently-viewed"},...r?.is_verified?[{icon:V1,label:"My Listings",path:"/profile",hash:"#my-listings"}]:[],{icon:$g,label:"My Memes",path:"/profile",hash:"#my-memes"},...r?.account_type==="organisation"?[{icon:Lg,label:"My Services",path:"/profile",hash:"#services"}]:[]]},{title:"SETTINGS",items:[{icon:Nb,label:"Settings",path:"/settings"},{icon:Rs,label:"Privacy",path:"/profile",hash:"#privacy"},...r?.is_verified?[{icon:R1,label:"Analytics",path:"/profile",hash:"#analytics"}]:[]]}],K=n.jsxs("div",{ref:m,style:{position:"absolute",top:"100%",right:d?0:"auto",left:d?0:"auto",marginTop:d?0:8,width:d?"100%":320,maxWidth:d?"100%":400,maxHeight:d?"80vh":"90vh",background:"var(--bg-primary)",border:d?"none":"1px solid var(--border)",borderTop:d?"1px solid var(--border)":void 0,borderRadius:d?"var(--radius-lg) var(--radius-lg) 0 0":"var(--radius-md)",boxShadow:d?"0 -4px 20px rgba(0,0,0,0.15)":"var(--shadow-lg)",zIndex:"var(--z-modal)",overflowY:"auto",padding:"var(--spacing-md)"},children:[k&&n.jsxs("div",{style:{marginBottom:"var(--spacing-md)",paddingBottom:"var(--spacing-md)",borderBottom:"1px solid var(--border)"},children:[n.jsx("div",{style:{fontSize:"var(--font-size-xs)",fontWeight:"var(--font-weight-semibold)",color:"var(--text-secondary)",textTransform:"uppercase",letterSpacing:"0.5px",marginBottom:"var(--spacing-sm)"},children:"Currently Active"}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-sm)",padding:"var(--spacing-sm)",background:"var(--accent-light)",borderRadius:"var(--radius)",border:"1px solid var(--accent)"},children:[T?n.jsx("img",{src:T,alt:"",style:{width:40,height:40,borderRadius:"50%",objectFit:"cover"}}):n.jsx("div",{style:{width:40,height:40,borderRadius:"50%",background:"var(--bg-secondary)",display:"flex",alignItems:"center",justifyContent:"center"},children:n.jsx(Tt,{size:20})}),n.jsxs("div",{style:{flex:1},children:[n.jsxs("div",{style:{fontWeight:"var(--font-weight-semibold)",fontSize:"var(--font-size-sm)"},children:[k.name," ",n.jsx("span",{style:{color:"var(--text-secondary)",fontWeight:"normal"},children:"(You)"})]}),n.jsxs("div",{style:{fontSize:"var(--font-size-xs)",color:"var(--text-secondary)",display:"flex",alignItems:"center",gap:4},children:[k.account_type==="organisation"?"Organisation":"Personal",k.is_verified&&n.jsx("span",{style:{color:"var(--success)"},children:"✓"})]})]})]})]}),v.length>1&&n.jsxs("div",{style:{marginBottom:"var(--spacing-md)",paddingBottom:"var(--spacing-md)",borderBottom:"1px solid var(--border)"},children:[n.jsx("div",{style:{fontSize:"var(--font-size-xs)",fontWeight:"var(--font-weight-semibold)",color:"var(--text-secondary)",textTransform:"uppercase",letterSpacing:"0.5px",marginBottom:"var(--spacing-sm)"},children:"Switch to"}),v.filter(S=>S.id!==ia.getActiveProfileId()).map(S=>n.jsxs("button",{type:"button",onClick:()=>z(S.id),style:{width:"100%",display:"flex",alignItems:"center",gap:"var(--spacing-sm)",padding:"var(--spacing-sm)",border:"1px solid var(--border)",background:"var(--bg-primary)",borderRadius:"var(--radius)",cursor:"pointer",textAlign:"left",fontSize:"var(--font-size-sm)",color:"var(--text-primary)",marginBottom:"var(--spacing-xs)",minHeight:44},children:[S.avatar?n.jsx("img",{src:S.avatar.startsWith("http")?S.avatar:`${ug}${S.avatar}`,alt:"",style:{width:36,height:36,borderRadius:"50%",objectFit:"cover"}}):n.jsx("div",{style:{width:36,height:36,borderRadius:"50%",background:"var(--bg-secondary)",display:"flex",alignItems:"center",justifyContent:"center"},children:n.jsx(Tt,{size:18})}),n.jsxs("div",{style:{flex:1},children:[n.jsx("div",{style:{fontWeight:"var(--font-weight-medium)"},children:S.name}),n.jsx("div",{style:{fontSize:"var(--font-size-xs)",color:"var(--text-secondary)"},children:S.account_type==="organisation"?"Organisation":"Personal"})]})]},S.id))]}),G.map((S,U)=>n.jsxs("div",{style:{marginBottom:U<G.length-1?"var(--spacing-md)":0},children:[n.jsx("div",{style:{fontSize:"var(--font-size-xs)",fontWeight:"var(--font-weight-semibold)",color:"var(--text-secondary)",textTransform:"uppercase",letterSpacing:"0.5px",marginBottom:"var(--spacing-sm)",padding:"0 var(--spacing-xs)"},children:S.title}),S.items.map($=>n.jsxs(pe,{to:$.path+($.hash||""),onClick:()=>b(!1),style:{display:"flex",alignItems:"center",gap:"var(--spacing-sm)",padding:"var(--spacing-sm)",borderRadius:"var(--radius)",color:D($.path,$.hash)?"var(--accent)":"var(--text-primary)",textDecoration:"none",fontSize:"var(--font-size-sm)",background:D($.path,$.hash)?"var(--accent-light)":"transparent",marginBottom:"var(--spacing-xs)",minHeight:44,transition:"all var(--transition-fast)"},onMouseEnter:re=>{D($.path,$.hash)||(re.currentTarget.style.background="var(--bg-secondary)")},onMouseLeave:re=>{D($.path,$.hash)||(re.currentTarget.style.background="transparent")},children:[n.jsx($.icon,{size:20}),n.jsx("span",{style:{flex:1},children:$.label}),$.badge>0&&n.jsx("span",{style:{fontSize:"var(--font-size-xs)",background:"var(--error)",color:"#fff",borderRadius:"var(--radius-full)",padding:"2px 6px",minWidth:20,textAlign:"center"},children:$.badge>99?"99+":$.badge})]},$.path+($.hash||"")))]},U)),n.jsxs("div",{style:{borderTop:"1px solid var(--border)",paddingTop:"var(--spacing-sm)",marginTop:"var(--spacing-md)"},children:[n.jsxs("button",{type:"button",onClick:g,style:{width:"100%",display:"flex",alignItems:"center",gap:"var(--spacing-sm)",padding:"var(--spacing-sm)",border:"none",background:"transparent",borderRadius:"var(--radius)",cursor:"pointer",fontSize:"var(--font-size-sm)",color:"var(--text-primary)",marginBottom:"var(--spacing-xs)",minHeight:44},children:[p==="light"?n.jsx(Un,{size:20}):n.jsx(Ln,{size:20}),n.jsx("span",{children:p==="light"?"Dark Mode":"Light Mode"})]}),n.jsxs("button",{type:"button",onClick:()=>{c("/login?add_account=true"),b(!1)},style:{width:"100%",display:"flex",alignItems:"center",gap:"var(--spacing-sm)",padding:"var(--spacing-sm)",border:"1px dashed var(--border)",background:"transparent",borderRadius:"var(--radius)",cursor:"pointer",fontSize:"var(--font-size-sm)",color:"var(--accent)",fontWeight:"var(--font-weight-medium)",marginBottom:"var(--spacing-xs)",minHeight:44},children:[n.jsx(Gg,{size:20}),n.jsx("span",{children:"+ Add Account"})]}),n.jsxs("button",{type:"button",onClick:_,style:{width:"100%",display:"flex",alignItems:"center",gap:"var(--spacing-sm)",padding:"var(--spacing-sm)",border:"none",background:"transparent",borderRadius:"var(--radius)",cursor:"pointer",fontSize:"var(--font-size-sm)",color:"var(--error)",minHeight:44},children:[n.jsx(ng,{size:20}),n.jsx("span",{children:"Logout"})]}),v.length>1&&n.jsxs("button",{type:"button",onClick:A,style:{width:"100%",display:"flex",alignItems:"center",gap:"var(--spacing-sm)",padding:"var(--spacing-sm)",border:"none",background:"transparent",borderRadius:"var(--radius)",cursor:"pointer",fontSize:"var(--font-size-sm)",color:"var(--error)",marginTop:"var(--spacing-xs)",minHeight:44},children:[n.jsx(ng,{size:20}),n.jsx("span",{children:"Logout All"})]})]})]}),q=On.cloneElement(s,{ref:S=>{j.current=S,typeof s.ref=="function"?s.ref(S):s.ref&&(s.ref.current=S)},onClick:S=>{b(!y),s.props?.onClick&&s.props.onClick(S)}});return d?n.jsxs(n.Fragment,{children:[q,y&&n.jsxs(n.Fragment,{children:[n.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.5)",zIndex:"calc(var(--z-modal) - 1)"},onClick:()=>b(!1)}),n.jsxs("div",{style:{position:"fixed",bottom:0,left:0,right:0,zIndex:"var(--z-modal)"},children:[n.jsx("div",{style:{width:40,height:4,background:"var(--border)",borderRadius:"var(--radius-full)",margin:"8px auto",cursor:"grab"}}),K]})]})]}):n.jsxs("div",{style:{position:"relative"},children:[q,y&&K]})}function l2({profileUser:r,isOwnProfile:s=!1}){const d=nt(),c=$t(),[f,p]=h.useState(null),[g,y]=h.useState(typeof window<"u"&&window.innerWidth<768),[b,m]=h.useState(!1);h.useEffect(()=>{const z=()=>y(window.innerWidth<768);return window.addEventListener("resize",z),()=>window.removeEventListener("resize",z)},[]),h.useEffect(()=>{(async()=>{try{const T=await xe.auth.getCurrentUser();p(T)}catch{}})()},[]);const j=ia.getActiveProfile(),v=r?.username||j?.username||f?.username||"user",k=r?.name||j?.name||f?.name||"User",_=z=>c.hash===z,A=()=>{const z=window.location.href;navigator.share?navigator.share({title:`${k}'s Profile`,url:z}):(navigator.clipboard.writeText(z),alert("Profile link copied to clipboard!")),m(!1)};return n.jsxs("header",{className:"unified-navbar",style:{background:"var(--bg-primary)",borderBottom:"1px solid var(--border)"},children:[n.jsxs("button",{type:"button",onClick:()=>d(-1),style:{display:"flex",alignItems:"center",gap:8,padding:"8px 12px",border:"none",background:"transparent",color:"var(--text-primary)",cursor:"pointer",borderRadius:"var(--radius)",fontSize:"var(--font-size-sm)"},children:[n.jsx(Hr,{size:20}),!g&&"Back"]}),n.jsx("div",{style:{flex:1,display:"flex",alignItems:"center",gap:12,justifyContent:"center"},children:n.jsxs("span",{style:{fontWeight:"var(--font-weight-semibold)",fontSize:"var(--font-size-lg)",color:"var(--text-primary)"},children:["@",v]})}),n.jsxs("div",{className:"nav-right",style:{display:"flex",alignItems:"center",gap:8},children:[!g&&n.jsxs("div",{style:{display:"flex",gap:8},children:[n.jsx(pe,{to:"/profile#dashboard",style:{padding:"6px 12px",borderRadius:"var(--radius)",fontSize:"var(--font-size-xs)",color:_("#dashboard")?"var(--accent)":"var(--text-secondary)",textDecoration:"none",background:_("#dashboard")?"var(--accent-light)":"transparent"},children:"Dashboard"}),n.jsx(pe,{to:"/profile#edit",style:{padding:"6px 12px",borderRadius:"var(--radius)",fontSize:"var(--font-size-xs)",color:_("#edit")?"var(--accent)":"var(--text-secondary)",textDecoration:"none",background:_("#edit")?"var(--accent-light)":"transparent"},children:"Profile"}),n.jsx(pe,{to:"/profile#liked",style:{padding:"6px 12px",borderRadius:"var(--radius)",fontSize:"var(--font-size-xs)",color:_("#liked")?"var(--accent)":"var(--text-secondary)",textDecoration:"none",background:_("#liked")?"var(--accent-light)":"transparent"},children:"Saved"})]}),n.jsx("button",{type:"button",onClick:A,className:"icon-btn","aria-label":"Share Profile",style:{width:40,height:40,display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"var(--radius)",border:"1px solid var(--border)",background:"var(--bg-secondary)",color:"var(--text-primary)",cursor:"pointer"},children:n.jsx(Ud,{size:18})}),f&&n.jsx(n0,{user:f,trigger:n.jsx("button",{type:"button",className:"icon-btn",style:{width:40,height:40,display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"var(--radius)",border:"1px solid var(--border)",background:"var(--bg-secondary)",color:"var(--text-primary)",cursor:"pointer"},children:n.jsx(Bd,{size:18})}),isMobile:g}),s&&f&&n.jsx("button",{type:"button",onClick:async()=>{try{await xe.auth.logout()}catch{}Le.clearAuth(),d("/")},style:{padding:"8px 16px",border:"none",borderRadius:"var(--radius)",background:"transparent",color:"var(--error)",cursor:"pointer",fontSize:"var(--font-size-sm)"},children:!g&&"Logout"})]})]})}function s2(){const r=nt(),[s,d]=h.useState(!1),[c,f]=h.useState({name:"",email:"",phone:"",location:"",joinDate:"",bio:"",avatar:"",likedImages:0,recentViews:0,is_verified:!1,account_type:"personal"}),[p,g]=h.useState({...c}),[y,b]=h.useState("overview"),[m,j]=h.useState(!1),[v,k]=h.useState(!1),[_,A]=h.useState(null),[z,T]=h.useState(null),[D,G]=h.useState(!1),[K,q]=h.useState(!1),[S,U]=h.useState(!1),$=h.useRef(null),[re,be]=h.useState(0),[ie,de]=h.useState(0),we=h.useRef(null);h.useRef(null);const[W,F]=h.useState([]),[ye,H]=h.useState([]),[I,ue]=h.useState([]),[Ee,Te]=h.useState([]),[C,Q]=h.useState([]),[ne,M]=h.useState(!1),[J,P]=h.useState(!1),fe=E=>({id:E.house_id||E.timestamp,action:E.type==="contact"?`Contacted agent: ${E.house_title}`:`Viewed ${E.house_title}`,time:ve(E.timestamp),icon:E.type==="contact"?la:dt,color:E.type==="contact"?"#10b981":"#3b82f6"});function ve(E){const te=new Date(E),He=(new Date-te)/1e3;return He<60?"Just now":He<3600?`${Math.floor(He/60)} min ago`:He<86400?`${Math.floor(He/3600)} hours ago`:He<604800?`${Math.floor(He/86400)} days ago`:te.toLocaleDateString()}const he="http://localhost:8000";function Ae(E){const te=E?.images?.[0]?.image;return te?te.startsWith("http")?te:`${he}${te}`:"https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&auto=format&fit=crop"}function Fe(E){return E==null?"":typeof E=="number"?`KES ${Number(E).toLocaleString()}`:`KES ${E}`}const ga=[{label:"Properties Liked",value:W.length,icon:ft,color:"#ef4444",change:""},{label:"Properties Viewed",value:ye.length,icon:dt,color:"#3b82f6",change:""},{label:"Searches Saved",value:Ee.length,icon:fd,color:"#f59e0b",change:""},{label:"My Listings",value:c.is_verified?C.length:"—",icon:Yb,color:"#10b981",change:""}],[Li,ma]=h.useState(0),[Hn,Hi]=h.useState(0),Jr=E=>{ma(E.targetTouches[0].clientX)},Yi=E=>{Hi(E.targetTouches[0].clientX)},Yn=E=>{Li-Hn>50&&(E==="liked"?pn():Ir()),Li-Hn<-50&&(E==="liked"?qn():Fr())},pn=()=>{W.length!==0&&be(E=>E===W.length-1?0:E+1)},qn=()=>{W.length!==0&&be(E=>E===0?W.length-1:E-1)},Ir=()=>{I.length!==0&&de(E=>E===I.length-1?0:E+1)},Fr=()=>{I.length!==0&&de(E=>E===0?I.length-1:E-1)};h.useEffect(()=>{if(window.innerWidth<=768){const E=setInterval(()=>{pn()},5e3);return()=>clearInterval(E)}},[]);const vt=()=>window.innerWidth>=1200?4:window.innerWidth>=768?3:window.innerWidth>=480?2:1,[Pr,el]=h.useState(vt());h.useEffect(()=>{const E=()=>{el(vt())};return window.addEventListener("resize",E),()=>window.removeEventListener("resize",E)},[]),W.slice(re,re+Pr),I.slice(ie,ie+Pr);const tl=()=>{s&&f(p),d(!s)},$n=()=>{g({...c}),d(!1)},fn=(E,te)=>{g(Xe=>({...Xe,[E]:te}))},al=E=>{const te=E.target.files[0];te&&(j(!0),setTimeout(()=>{const Xe=new FileReader;Xe.onloadend=()=>{const He=Xe.result;f(ea=>({...ea,avatar:He})),g(ea=>({...ea,avatar:He})),j(!1)},Xe.readAsDataURL(te)},1e3))},$s=[{id:"overview",label:"Overview",icon:Tt},{id:"profile",label:"Profile",icon:Tt},{id:"liked",label:"Liked Properties",icon:ft},{id:"saved-searches",label:"Saved Searches",icon:fd},{id:"recently-viewed",label:"Recently Viewed",icon:dt},{id:"activity",label:"Recent Activity",icon:Ur},{id:"messages",label:"Messages",icon:mb},...c.is_verified?[{id:"my-listings",label:"My Listings",icon:Ba}]:[]];h.useEffect(()=>{(async()=>{try{const te=await xe.auth.getCurrentUser();let Xe=null;te.profile_picture&&(te.profile_picture.startsWith("http")?Xe=te.profile_picture:Xe=`http://localhost:8000${te.profile_picture}`);const He={name:te.name||te.email||"",email:te.email||"",phone:te.phone_number||"",phone_number:te.phone_number||"",location:te.locality||"",locality:te.locality||"",pinned_location_lat:te.pinned_location_lat||null,pinned_location_lng:te.pinned_location_lng||null,joinDate:te.created_at?new Date(te.created_at).toLocaleDateString():"Unknown",bio:te.bio||"Real estate enthusiast looking for the perfect family home. Interested in properties with good security and amenities.",avatar:Xe||"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=60",profile_picture:Xe,likedImages:0,recentViews:0,is_verified:!!te.is_verified,account_type:te.account_type||"personal"};f(He),g({...He});try{const[ea,Gn,nl,hn,gn]=await Promise.all([xe.activities.getLiked().catch(()=>[]),xe.activities.getRecentViews().catch(()=>[]),xe.activities.getActivities(15).catch(()=>[]),xe.savedSearches.list().catch(()=>[]),te.is_verified?xe.houses.getMyHouses().catch(()=>[]):[]]);F(Array.isArray(ea)?ea:[]),H(Array.isArray(Gn)?Gn:[]),ue(Array.isArray(nl)?nl.map(fe):[]),Te(Array.isArray(hn)?hn:[]),Q(Array.isArray(gn)?gn:[])}catch(ea){console.error("Error loading activities:",ea)}}catch(te){console.error("Error loading profile:",te),r("/login")}})()},[]);const Gs=async()=>{k(!0),A(null),T(null);try{const E=new FormData;if(p.name&&E.append("name",p.name),p.email&&E.append("email",p.email),(p.phone||p.phone_number)&&E.append("phone_number",p.phone_number||p.phone),(p.locality||p.location)&&E.append("locality",p.locality||p.location),p.bio!==void 0&&E.append("bio",p.bio||""),p.pinned_location_lat!==void 0&&p.pinned_location_lat!==null&&E.append("pinned_location_lat",p.pinned_location_lat),p.pinned_location_lng!==void 0&&p.pinned_location_lng!==null&&E.append("pinned_location_lng",p.pinned_location_lng),p.avatar&&p.avatar!==c.avatar){if(p.avatar instanceof File)E.append("profile_picture",p.avatar);else if(typeof p.avatar=="string"&&p.avatar.startsWith("blob:")){const Gn=await(await fetch(p.avatar)).blob();E.append("profile_picture",Gn,"profile.jpg")}}const te=await xe.profile.updateProfile(E),Xe={...c,...te,name:te.name||p.name,email:te.email||p.email,phone_number:te.phone_number||p.phone_number||p.phone,phone:te.phone_number||p.phone_number||p.phone,locality:te.locality||p.locality||p.location,location:te.locality||p.locality||p.location,bio:te.bio||p.bio,pinned_location_lat:te.pinned_location_lat||p.pinned_location_lat,pinned_location_lng:te.pinned_location_lng||p.pinned_location_lng,profile_picture:te.profile_picture||p.avatar,avatar:te.profile_picture||p.avatar};f(Xe);const He=Le.getToken();He&&Le.setAuth(He,Xe),T("Profile updated successfully!"),d(!1)}catch(E){console.error("Error updating profile:",E);const te=E.data?.detail||E.data?.error||E.message||"Failed to update profile";A(te)}finally{k(!1)}};return n.jsxs(n.Fragment,{children:[n.jsx(l2,{profileUser:c,isOwnProfile:!0}),n.jsxs("div",{className:"profile-container",children:[n.jsxs("div",{className:"profile-sidebar",children:[n.jsxs("div",{className:"sidebar-header",children:[n.jsxs("div",{className:"avatar-container",onClick:()=>$.current?.click(),children:[n.jsx("img",{src:c.avatar||"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=60",alt:c.name||"Profile",className:"avatar"}),n.jsx("div",{className:"avatar-overlay",children:m?n.jsx("div",{className:"uploading-spinner"}):n.jsx(pd,{size:24})})]}),n.jsx("h2",{className:"user-name",children:c.name}),n.jsx("p",{className:"user-role",children:n.jsxs("span",{className:"member-text",children:["Member since ",c.joinDate]})}),n.jsxs("div",{className:"user-stats",children:[n.jsxs("div",{className:"stat",children:[n.jsx(ft,{size:14}),n.jsxs("span",{children:[W.length," Liked"]})]}),n.jsxs("div",{className:"stat",children:[n.jsx(dt,{size:14}),n.jsxs("span",{children:[ye.length," Views"]})]})]})]}),n.jsx("nav",{className:"sidebar-nav",children:$s.map(E=>n.jsxs("button",{className:`nav-item ${y===E.id?"active":""}`,onClick:()=>b(E.id),children:[n.jsx(E.icon,{size:20}),n.jsx("span",{children:E.label}),E.id==="liked"&&n.jsx("span",{className:"badge",children:W.length})]},E.id))})]}),n.jsxs("div",{className:"profile-content",children:[(y==="overview"||y==="profile")&&n.jsxs("div",{className:"profile-header-desktop",children:[n.jsxs("div",{className:"avatar-container-desktop",children:[n.jsx("img",{src:c.avatar||"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=60",alt:c.name||"Profile",className:"avatar-desktop",onClick:()=>q(!K)}),K&&n.jsxs("div",{className:"profile-menu show",children:[n.jsxs("div",{className:"profile-menu-item",onClick:()=>{q(!1),U(!0)},children:[n.jsx("div",{className:"icon",children:n.jsx(dt,{size:20})}),n.jsx("span",{children:"View Profile Picture"})]}),n.jsxs("div",{className:"profile-menu-item",onClick:()=>{q(!1),$.current?.click()},children:[n.jsx("div",{className:"icon",children:n.jsx(pd,{size:20})}),n.jsx("span",{children:"Change Profile Picture"})]})]})]}),n.jsxs("div",{className:"user-info-desktop",children:[n.jsx("h2",{className:"user-name-desktop",children:c.name}),n.jsx("p",{className:"user-role-desktop",children:n.jsxs("span",{className:"member-text-desktop",children:["Member since ",c.joinDate]})}),n.jsxs("div",{className:"user-stats-desktop",children:[n.jsxs("div",{className:"stat-desktop",children:[n.jsx(ft,{size:14}),n.jsxs("span",{children:[W.length," Liked"]})]}),n.jsxs("div",{className:"stat-desktop",children:[n.jsx(dt,{size:14}),n.jsxs("span",{children:[ye.length," Views"]})]})]}),c.is_verified&&n.jsx("div",{className:"profile-header-actions",children:c.is_verified&&n.jsxs(pe,{to:"/listings/create",className:"list-house-btn-header",style:{display:"flex",alignItems:"center",gap:8,textDecoration:"none"},children:[n.jsx(Ba,{size:18}),n.jsx("span",{children:"Add Listing"})]})})]})]}),y==="overview"&&n.jsxs("div",{className:"overview-section",children:[n.jsxs("div",{className:"section-header",children:[n.jsxs("div",{children:[n.jsxs("h1",{children:["Welcome back, ",c.name,"!"]}),n.jsx("p",{className:"welcome-text",children:"Here's your property activity summary"})]}),n.jsx("div",{className:"header-actions",children:n.jsxs("button",{className:"edit-profile-btn",onClick:()=>b("profile"),children:[n.jsx(ig,{size:18}),n.jsx("span",{children:"Edit Profile"})]})})]}),n.jsx("div",{className:"quick-stats-grid",children:ga.map((E,te)=>n.jsxs("div",{className:"quick-stat-card",children:[n.jsx("div",{className:"stat-icon",style:{backgroundColor:`${E.color}20`,color:E.color},children:n.jsx(E.icon,{size:24})}),n.jsxs("div",{className:"stat-content",children:[n.jsx("div",{className:"stat-value",children:E.value}),n.jsx("div",{className:"stat-label",children:E.label}),n.jsx("div",{className:"stat-change",children:E.change})]})]},te))}),n.jsxs("div",{className:"section-card",children:[n.jsxs("div",{className:"card-header",children:[n.jsxs("div",{className:"header-title",children:[n.jsx(ft,{size:20,style:{color:"#ef4444"}}),n.jsx("h3",{children:"Recently Liked Properties"})]}),n.jsxs("button",{className:"view-all-btn",onClick:()=>b("liked"),children:["View All ",n.jsx(Ri,{size:16})]})]}),n.jsxs("div",{className:"carousel-container",children:[n.jsx("div",{className:"desktop-scrollable",ref:we,children:n.jsx("div",{className:"liked-properties-grid",children:W.map(E=>n.jsxs("div",{className:"property-card",children:[n.jsxs("div",{className:"property-image",children:[n.jsx("img",{src:Ae(E),alt:E.title}),n.jsx("div",{className:"property-overlay",children:n.jsx("button",{className:"like-btn active",children:n.jsx(ft,{size:20})})})]}),n.jsxs("div",{className:"property-info",children:[n.jsx("h4",{children:E.title}),n.jsxs("p",{className:"property-location",children:[n.jsx(Ti,{size:14}),E.locality||E.location]}),n.jsx("p",{className:"property-price",children:Fe(E.price)}),n.jsx("div",{className:"property-meta",children:n.jsxs("span",{className:"meta-item",children:[n.jsx(dt,{size:14}),E.likes_count??0," likes"]})}),n.jsx("button",{className:"view-details-btn",onClick:()=>r(`/listing?id=${E.id}`),children:"View Details"})]})]},E.id))})}),n.jsxs("div",{className:"mobile-carousel",children:[n.jsx("div",{className:"carousel-track",style:{transform:`translateX(-${re*100}%)`},onTouchStart:Jr,onTouchMove:Yi,onTouchEnd:()=>Yn("liked"),children:W.map(E=>n.jsx("div",{className:"carousel-slide",children:n.jsxs("div",{className:"property-card-mobile",children:[n.jsxs("div",{className:"property-image-mobile",children:[n.jsx("img",{src:Ae(E),alt:E.title}),n.jsx("div",{className:"property-overlay-mobile",children:n.jsx("button",{className:"like-btn active",children:n.jsx(ft,{size:20})})})]}),n.jsxs("div",{className:"property-info-mobile",children:[n.jsx("h4",{children:E.title}),n.jsxs("p",{className:"property-location",children:[n.jsx(Ti,{size:14}),E.locality||E.location]}),n.jsx("p",{className:"property-price",children:Fe(E.price)}),n.jsx("div",{className:"property-meta",children:n.jsxs("span",{className:"meta-item",children:[n.jsx(dt,{size:14}),E.likes_count??0," likes"]})}),n.jsx("button",{className:"view-details-btn",onClick:()=>r(`/listing?id=${E.id}`),children:"View Details"})]})]})},E.id))}),n.jsxs("div",{className:"carousel-controls",children:[n.jsx("button",{className:"carousel-prev",onClick:qn,children:n.jsx($r,{size:24})}),n.jsx("div",{className:"carousel-indicators",children:W.map((E,te)=>n.jsx("button",{className:`indicator ${te===re?"active":""}`,onClick:()=>be(te)},E?.id||te))}),n.jsx("button",{className:"carousel-next",onClick:pn,children:n.jsx(Ri,{size:24})})]})]})]})]}),n.jsxs("div",{className:"section-card",children:[n.jsxs("div",{className:"card-header",children:[n.jsxs("div",{className:"header-title",children:[n.jsx(Ur,{size:20,style:{color:"#8b5cf6"}}),n.jsx("h3",{children:"Recent Activity"})]}),n.jsxs("button",{className:"view-all-btn",onClick:()=>b("activity"),children:["View All ",n.jsx(Ri,{size:16})]})]}),n.jsxs("div",{className:"carousel-container",children:[n.jsx("div",{className:"desktop-scrollable",children:n.jsx("div",{className:"activity-grid",children:I.map(E=>n.jsxs("div",{className:"activity-card",children:[n.jsx("div",{className:"activity-icon",style:{backgroundColor:`${E.color}20`},children:n.jsx(E.icon,{size:16,style:{color:E.color}})}),n.jsxs("div",{className:"activity-details",children:[n.jsx("p",{className:"activity-action",children:E.action}),n.jsx("span",{className:"activity-time",children:E.time})]})]},E.id))})}),n.jsxs("div",{className:"mobile-carousel",children:[n.jsx("div",{className:"carousel-track",style:{transform:`translateX(-${ie*100}%)`},onTouchStart:Jr,onTouchMove:Yi,onTouchEnd:()=>Yn("activity"),children:I.map(E=>n.jsx("div",{className:"carousel-slide",children:n.jsxs("div",{className:"activity-card-mobile",children:[n.jsx("div",{className:"activity-icon",style:{backgroundColor:`${E.color}20`},children:n.jsx(E.icon,{size:20,style:{color:E.color}})}),n.jsxs("div",{className:"activity-details",children:[n.jsx("p",{className:"activity-action",children:E.action}),n.jsx("span",{className:"activity-time",children:E.time})]})]})},E.id))}),n.jsxs("div",{className:"carousel-controls",children:[n.jsx("button",{className:"carousel-prev",onClick:Fr,children:n.jsx($r,{size:24})}),n.jsx("div",{className:"carousel-indicators",children:I.map((E,te)=>n.jsx("button",{className:`indicator ${te===ie?"active":""}`,onClick:()=>de(te)},E?.id||te))}),n.jsx("button",{className:"carousel-next",onClick:Ir,children:n.jsx(Ri,{size:24})})]})]})]})]})]}),y==="profile"&&n.jsxs("div",{className:"profile-section",children:[n.jsxs("div",{className:"section-header",children:[n.jsxs("div",{children:[n.jsx("h1",{children:"Your Profile"}),n.jsx("p",{className:"profile-subtitle",children:"Manage your personal information"})]}),n.jsxs("button",{className:"edit-btn",onClick:tl,children:[s?n.jsx(rg,{size:20}):n.jsx(ig,{size:20}),n.jsx("span",{children:s?"Save Changes":"Edit Profile"})]})]}),n.jsxs("div",{className:"profile-grid",children:[n.jsxs("div",{className:"profile-card",children:[n.jsxs("div",{className:"card-header",children:[n.jsx(Tt,{size:20}),n.jsx("h3",{children:"Personal Information"})]}),n.jsxs("div",{className:"card-content",children:[n.jsxs("div",{className:"info-group",children:[n.jsx("label",{children:"Full Name"}),s?n.jsx("input",{type:"text",value:p.name,onChange:E=>fn("name",E.target.value),className:"edit-input"}):n.jsx("p",{className:"info-value",children:c.name})]}),n.jsxs("div",{className:"info-group",children:[n.jsx("label",{children:"Email Address"}),s?n.jsx("input",{type:"email",value:p.email,onChange:E=>fn("email",E.target.value),className:"edit-input"}):n.jsxs("div",{className:"info-with-icon",children:[n.jsx(Od,{size:18}),n.jsx("p",{className:"info-value",children:c.email})]})]}),n.jsxs("div",{className:"info-group",children:[n.jsx("label",{children:"Phone Number"}),s?n.jsx("input",{type:"tel",value:p.phone,onChange:E=>fn("phone",E.target.value),className:"edit-input"}):n.jsxs("div",{className:"info-with-icon",children:[n.jsx(Ls,{size:18}),n.jsx("p",{className:"info-value",children:c.phone})]})]}),n.jsxs("div",{className:"info-group",children:[n.jsx("label",{children:"Location"}),s?n.jsx("input",{type:"text",value:p.location,onChange:E=>fn("location",E.target.value),className:"edit-input"}):n.jsxs("div",{className:"info-with-icon",children:[n.jsx(ha,{size:18}),n.jsx("p",{className:"info-value",children:c.location})]})]}),n.jsxs("div",{className:"info-group",children:[n.jsx("label",{children:"Member Since"}),n.jsxs("div",{className:"info-with-icon",children:[n.jsx(Dd,{size:18}),n.jsx("p",{className:"info-value",children:c.joinDate})]})]})]})]}),n.jsxs("div",{className:"profile-card",children:[n.jsxs("div",{className:"card-header",children:[n.jsx(Tt,{size:20}),n.jsx("h3",{children:"About Me"})]}),n.jsx("div",{className:"card-content",children:n.jsxs("div",{className:"info-group",children:[n.jsx("label",{children:"Bio"}),s?n.jsx("textarea",{value:p.bio,onChange:E=>fn("bio",E.target.value),className:"edit-textarea",rows:"6"}):n.jsx("p",{className:"info-value bio",children:c.bio})]})})]})]}),s&&n.jsxs("div",{className:"edit-actions",children:[n.jsxs("button",{className:"cancel-btn",onClick:$n,children:[n.jsx(ra,{size:20}),n.jsx("span",{children:"Cancel"})]}),n.jsx("button",{className:"save-btn",onClick:Gs,disabled:v,children:v?n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"spinner"}),"Saving..."]}):n.jsxs(n.Fragment,{children:[n.jsx(rg,{size:20}),"Save Changes"]})})]}),_&&n.jsxs("div",{className:"error-message",children:[n.jsx("span",{className:"error-text",children:_}),n.jsx("button",{className:"error-close-btn",onClick:()=>A(null),children:"×"})]}),z&&n.jsxs("div",{className:"success-message",children:[n.jsx("span",{className:"success-text",children:z}),n.jsx("button",{className:"success-close-btn",onClick:()=>T(null),children:"×"})]})]}),y==="liked"&&n.jsxs("div",{className:"liked-section",children:[n.jsxs("div",{className:"section-header",children:[n.jsxs("div",{children:[n.jsx("h1",{children:"Liked Properties"}),n.jsxs("p",{className:"section-subtitle",children:[W.length," properties saved"]})]}),n.jsx("div",{className:"header-actions",children:n.jsxs("button",{className:"filter-btn",children:[n.jsx(Wr,{size:18}),n.jsx("span",{children:"Filter"})]})})]}),n.jsx("div",{className:"liked-properties-grid-full",children:W.map(E=>n.jsxs("div",{className:"property-card-full",children:[n.jsxs("div",{className:"property-image-full",children:[n.jsx("img",{src:Ae(E),alt:E.title}),n.jsx("div",{className:"property-overlay-full",children:n.jsx("button",{className:"like-btn active",children:n.jsx(ft,{size:24,fill:"#ef4444",color:"#ef4444"})})})]}),n.jsxs("div",{className:"property-details",children:[n.jsxs("div",{className:"property-header",children:[n.jsx("h3",{children:E.title}),n.jsx("button",{className:"remove-btn",children:n.jsx(ra,{size:18})})]}),n.jsxs("p",{className:"property-location",children:[n.jsx(Ti,{size:16}),E.locality||E.location]}),n.jsx("p",{className:"property-price",children:Fe(E.price)}),n.jsx("div",{className:"property-stats",children:n.jsxs("div",{className:"stat",children:[n.jsx(dt,{size:16}),n.jsxs("span",{children:[E.likes_count??0," likes"]})]})}),n.jsxs("div",{className:"property-actions",children:[n.jsxs("button",{className:"action-btn view",onClick:()=>r(`/listing?id=${E.id}`),children:[n.jsx(dt,{size:16}),"View Details"]}),n.jsxs("button",{className:"action-btn contact",onClick:async()=>{await xe.activities.trackContact(E.id)},children:[n.jsx(la,{size:16}),"Contact Agent"]}),n.jsxs("button",{className:"action-btn remove",onClick:async()=>{await xe.houses.likeHouse(E.id),F(te=>te.filter(Xe=>Xe.id!==E.id))},children:[n.jsx(ra,{size:16}),"Unlike"]})]})]})]},E.id))})]}),y==="saved-searches"&&n.jsxs("div",{className:"saved-searches-section",children:[n.jsxs("div",{className:"section-header",children:[n.jsx("h1",{children:"Saved Searches"}),n.jsx("p",{className:"section-subtitle",children:"Quick access to your saved search criteria"})]}),J?n.jsx("div",{className:"loading-state",children:"Loading…"}):Ee.length===0?n.jsxs("div",{className:"empty-state",children:[n.jsx(fd,{size:48,style:{color:"#94a3b8"}}),n.jsx("p",{children:"No saved searches yet"}),n.jsx("p",{className:"hint",children:"Save a search from the home page to see it here."})]}):n.jsx("ul",{className:"saved-searches-list",children:Ee.map(E=>n.jsxs("li",{className:"saved-search-item",children:[n.jsxs("div",{children:[n.jsx("strong",{children:E.name}),n.jsx("span",{className:"saved-search-meta",children:E.query||E.location||"No filters"})]}),n.jsxs("div",{className:"saved-search-actions",children:[n.jsx("button",{className:"action-btn view",onClick:()=>r(`/?q=${encodeURIComponent(E.query||"")}&location=${encodeURIComponent(E.location||"")}&house_type=${E.house_type||""}&listing_type=${E.listing_type||""}&price_min=${E.price_min||""}&price_max=${E.price_max||""}`),children:"Run search"}),n.jsxs("button",{className:"action-btn remove",onClick:async()=>{await xe.savedSearches.delete(E.id),Te(te=>te.filter(Xe=>Xe.id!==E.id))},children:[n.jsx(ra,{size:16})," Delete"]})]})]},E.id))})]}),y==="recently-viewed"&&n.jsxs("div",{className:"recently-viewed-section",children:[n.jsxs("div",{className:"section-header",children:[n.jsx("h1",{children:"Recently Viewed"}),n.jsx("p",{className:"section-subtitle",children:"Properties you viewed recently"})]}),ye.length===0?n.jsxs("div",{className:"empty-state",children:[n.jsx(dt,{size:48,style:{color:"#94a3b8"}}),n.jsx("p",{children:"No recent views"}),n.jsx("p",{className:"hint",children:"Browse properties to see them here."})]}):n.jsx("div",{className:"liked-properties-grid-full",children:ye.map(E=>n.jsxs("div",{className:"property-card-full",children:[n.jsx("div",{className:"property-image-full",children:n.jsx("img",{src:Ae(E),alt:E.title})}),n.jsxs("div",{className:"property-details",children:[n.jsx("h3",{children:E.title}),n.jsxs("p",{className:"property-location",children:[n.jsx(Ti,{size:16})," ",E.locality||E.location]}),n.jsx("p",{className:"property-price",children:Fe(E.price)}),n.jsx("button",{className:"action-btn view",onClick:()=>r(`/listing?id=${E.id}`),children:"View Details"})]})]},E.id))})]}),y==="my-listings"&&c.is_verified&&n.jsxs("div",{className:"my-listings-section",children:[n.jsxs("div",{className:"section-header",children:[n.jsx("h1",{children:"My Listings"}),n.jsx("p",{className:"section-subtitle",children:"Manage your property listings. New listings require admin approval."}),n.jsxs(pe,{to:"/listings/create",className:"list-house-btn-header",style:{display:"inline-flex",alignItems:"center",gap:8,textDecoration:"none"},children:[n.jsx(Ba,{size:18})," Create listing"]})]}),C.length===0?n.jsxs("div",{className:"empty-state",children:[n.jsx(Ba,{size:48,style:{color:"#94a3b8"}}),n.jsx("p",{children:"No listings yet"}),n.jsx("p",{className:"hint",children:"Create a listing to see it here. Listings go to pending until approved."})]}):n.jsx("div",{className:"my-listings-table-wrap",children:n.jsxs("table",{className:"my-listings-table",children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"Title"}),n.jsx("th",{children:"Type"}),n.jsx("th",{children:"Price"}),n.jsx("th",{children:"Status"}),n.jsx("th",{children:"Views"}),n.jsx("th",{children:"Inquiries"}),n.jsx("th",{children:"Actions"})]})}),n.jsx("tbody",{children:C.map(E=>n.jsxs("tr",{children:[n.jsx("td",{children:E.title}),n.jsxs("td",{children:[E.house_type," / ",E.listing_type]}),n.jsx("td",{children:Fe(E.price)}),n.jsxs("td",{children:[n.jsx("span",{className:`status-badge status-${E.status||"pending"}`,children:E.status||"pending"}),E.rejection_reason&&n.jsx("small",{className:"rejection-reason",children:E.rejection_reason})]}),n.jsx("td",{children:E.views_count??0}),n.jsx("td",{children:E.inquiries_count??0}),n.jsxs("td",{children:[n.jsx("button",{className:"action-btn view",onClick:()=>r(`/listing?id=${E.id}`),children:"View"}),n.jsx("button",{className:"action-btn",onClick:()=>r(`/listing?id=${E.id}&edit=1`),children:"Edit"})]})]},E.id))})]})})]}),y==="messages"&&n.jsx("div",{className:"messages-section",style:{width:"100%",height:"100%"},children:n.jsx(kd,{})}),y==="activity"&&n.jsxs("div",{className:"activity-section",children:[n.jsxs("div",{className:"section-header",children:[n.jsxs("div",{children:[n.jsx("h1",{children:"Recent Activity"}),n.jsx("p",{className:"section-subtitle",children:"Your property interactions and actions"})]}),n.jsx("button",{className:"clear-btn",children:n.jsx("span",{children:"Clear All"})})]}),I.length===0?n.jsxs("div",{className:"empty-state",children:[n.jsx(Ur,{size:48,style:{color:"#94a3b8"}}),n.jsx("p",{children:"No recent activity"}),n.jsx("p",{className:"hint",children:"Your views and contact actions will appear here."})]}):n.jsx("div",{className:"activity-list-full",children:I.map(E=>n.jsxs("div",{className:"activity-item-full",children:[n.jsx("div",{className:"activity-icon-full",style:{backgroundColor:`${E.color}20`},children:n.jsx(E.icon,{size:16,style:{color:E.color}})}),n.jsxs("div",{className:"activity-content-full",children:[n.jsx("p",{className:"activity-text",children:E.action}),n.jsx("span",{className:"activity-time",children:E.time})]})]},E.id))})]})]})]}),S&&n.jsx("div",{className:"profile-modal-overlay",onClick:()=>U(!1),children:n.jsxs("div",{className:"profile-modal",onClick:E=>E.stopPropagation(),children:[n.jsx("button",{className:"modal-close-btn",onClick:()=>U(!1),children:"×"}),n.jsxs("div",{className:"profile-modal-content",children:[n.jsx("img",{src:c.avatar||"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=60",alt:"Profile",className:"modal-profile-image"}),n.jsx("div",{className:"modal-actions",children:n.jsxs("button",{className:"modal-change-btn",onClick:()=>{U(!1),$.current?.click()},children:[n.jsx(pd,{size:20}),"Change Picture"]})})]})]})}),n.jsx("input",{type:"file",ref:$,onChange:al,accept:"image/*",style:{display:"none"}}),n.jsx("style",{children:`
        .profile-container {
          display: flex;
          min-height: calc(100vh - 64px);
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: #1e293b;
          font-family:
            -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Georgia",
            "Times New Roman", serif;
        }

        /* Sidebar Styles (same as before) */
        .profile-sidebar {
          width: 280px;
          background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
          border-right: 1px solid #e2e8f0;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
          display: flex;
          flex-direction: column;
          height: calc(100vh - 64px);
          position: sticky;
          top: 0;
          backdrop-filter: blur(10px);
          border-right: 1px solid rgba(255, 255, 255, 0.2);
        }

        /* Desktop Profile Header Styles */
        .profile-header-desktop {
          display: none;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          padding: 20px;
          background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
          border-radius: 20px;
          border: 1px solid #e2e8f0;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
          margin-bottom: 24px;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
          min-height: 280px;
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
        }

        /* Responsive sizing for different screen sizes */
        @media (min-width: 1200px) {
          .profile-header-desktop {
            gap: 32px;
            padding: 32px;
            margin-bottom: 32px;
            min-height: 320px;
          }
        }

        @media (min-width: 1600px) {
          .profile-header-desktop {
            gap: 40px;
            padding: 40px;
            margin-bottom: 40px;
            min-height: 360px;
          }
        }

        /* Enhanced Dark mode support for profile header */
        @media (prefers-color-scheme: dark) {
          .profile-header-desktop {
            background: linear-gradient(135deg, #0f172a 0%, #111827 100%);
            border-color: #1f2937;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
            color: #f8fafc;
          }

          .profile-header-desktop::before {
            background: linear-gradient(90deg, #60a5fa 0%, #34d399 100%);
          }
        }

        /* Enhanced Light mode explicit styling */
        @media (prefers-color-scheme: light) {
          .profile-header-desktop {
            background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
            border-color: #e2e8f0;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
            color: #1e293b;
          }

          .profile-header-desktop::before {
            background: linear-gradient(90deg, #3b82f6 0%, #10b981 100%);
          }
        }

        /* System theme detection fallback with improved color mixing */
        .profile-header-desktop {
          background: linear-gradient(
            135deg,
            color-mix(in oklab, var(--bg-primary, #ffffff) 95%, black 5%) 0%,
            color-mix(in oklab, var(--bg-secondary, #f8fafc) 90%, black 10%)
              100%
          );
        }

        /* Enhanced Dark mode responsive adjustments */
        @media (prefers-color-scheme: dark) and (min-width: 1200px) {
          .profile-header-desktop {
            box-shadow: 0 12px 40px rgba(0, 0, 0, 0.6);
          }
        }

        @media (prefers-color-scheme: dark) and (min-width: 1600px) {
          .profile-header-desktop {
            box-shadow: 0 16px 48px rgba(0, 0, 0, 0.7);
          }
        }

        /* Enhanced Light mode responsive adjustments */
        @media (prefers-color-scheme: light) and (min-width: 1200px) {
          .profile-header-desktop {
            box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
          }
        }

        @media (prefers-color-scheme: light) and (min-width: 1600px) {
          .profile-header-desktop {
            box-shadow: 0 16px 48px rgba(0, 0, 0, 0.16);
          }
        }

        /* Improved avatar styling for theme responsiveness */
        .avatar-desktop {
          border: 4px solid
            color-mix(in oklab, var(--border-color, #e2e8f0) 80%, black 20%);
          box-shadow: 0 4px 20px
            color-mix(
              in oklab,
              var(--shadow-color, rgba(0, 0, 0, 0.1)) 80%,
              black 20%
            );
        }

        @media (prefers-color-scheme: dark) {
          .avatar-desktop {
            border-color: color-mix(in oklab, #374151 80%, white 20%);
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
          }
        }

        @media (prefers-color-scheme: light) {
          .avatar-desktop {
            border-color: color-mix(in oklab, #e2e8f0 80%, black 20%);
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          }
        }

        /* Improved text color responsiveness */
        .user-name-desktop {
          background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        @media (prefers-color-scheme: dark) {
          .user-name-desktop {
            background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
        }

        .user-role-desktop {
          color: #64748b;
        }

        @media (prefers-color-scheme: dark) {
          .user-role-desktop {
            color: #94a3b8;
          }
        }

        .stat-desktop {
          color: #64748b;
          background: #f1f5f9;
        }

        @media (prefers-color-scheme: dark) {
          .stat-desktop {
            color: #94a3b8;
            background: #1f2937;
            border: 1px solid #334155;
          }
        }

        /* Improved button styling for theme responsiveness */
        .list-house-btn-header {
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);
        }

        @media (prefers-color-scheme: dark) {
          .list-house-btn-header {
            background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
            box-shadow: 0 4px 15px rgba(34, 197, 94, 0.4);
          }
        }

        .list-house-btn-header:hover {
          box-shadow: 0 6px 20px rgba(16, 185, 129, 0.4);
        }

        @media (prefers-color-scheme: dark) {
          .list-house-btn-header:hover {
            box-shadow: 0 6px 20px rgba(34, 197, 94, 0.5);
          }
        }

        .avatar-container-desktop {
          position: relative;
          width: 140px;
          height: 140px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        /* Responsive avatar sizing */
        @media (min-width: 1200px) {
          .avatar-container-desktop {
            width: 160px;
            height: 160px;
          }
        }

        @media (min-width: 1600px) {
          .avatar-container-desktop {
            width: 180px;
            height: 180px;
          }
        }

        .avatar-desktop {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          border: 4px solid #e2e8f0;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        /* Dark mode avatar styling */
        @media (prefers-color-scheme: dark) {
          .avatar-desktop {
            border-color: #374151;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
          }
        }

        /* Responsive avatar hover effects */
        @media (min-width: 1200px) {
          .avatar-desktop:hover {
            transform: scale(1.06);
            box-shadow: 0 14px 40px rgba(59, 130, 246, 0.45);
          }
        }

        @media (min-width: 1600px) {
          .avatar-desktop:hover {
            transform: scale(1.07);
            box-shadow: 0 16px 45px rgba(59, 130, 246, 0.5);
          }
        }

        .avatar-desktop:hover {
          transform: scale(1.05);
          border-color: #3b82f6;
          box-shadow: 0 12px 35px rgba(59, 130, 246, 0.4);
        }

        /* Profile Menu Styles */
        .profile-menu {
          position: absolute;
          top: 100%;
          right: 0;
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          min-width: 200px;
          padding: 8px;
          z-index: 1000;
          opacity: 0;
          visibility: hidden;
          transform: translateY(-10px);
          transition: all 0.2s ease;
          animation: slideDown 0.2s ease forwards;
        }

        @media (max-width: 768px) {
          .profile-menu {
            right: -10px;
            min-width: 180px;
          }
        }

        .profile-menu.show {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .profile-menu-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s ease;
          color: #1e293b;
          font-size: 14px;
          font-weight: 500;
        }

        .profile-menu-item:hover {
          background: #f8fafc;
          color: #3b82f6;
        }

        .profile-menu-item .icon {
          width: 20px;
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Profile Picture Modal Styles */
        .profile-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
          backdrop-filter: blur(4px);
          padding: 20px;
        }

        .profile-modal {
          background: white;
          border-radius: 16px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          max-width: 500px;
          width: 100%;
          overflow: hidden;
          animation: modalSlideIn 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
        }

        @keyframes modalSlideIn {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .modal-close-btn {
          position: absolute;
          top: 16px;
          right: 16px;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid #e2e8f0;
          color: #1e293b;
          font-size: 24px;
          font-weight: 300;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          z-index: 10;
          backdrop-filter: blur(4px);
        }

        .modal-close-btn:hover {
          background: rgba(255, 255, 255, 1);
          transform: scale(1.1);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .profile-modal-content {
          padding: 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }

        .modal-profile-image {
          max-width: 100%;
          max-height: 80vh;
          width: auto;
          height: auto;
          border-radius: 16px;
          object-fit: contain;
          border: 4px solid #e2e8f0;
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
          transition: all 0.3s ease;
        }

        .modal-profile-image:hover {
          transform: scale(1.02);
          border-color: #3b82f6;
          box-shadow: 0 16px 50px rgba(59, 130, 246, 0.4);
        }

        .modal-actions {
          display: flex;
          gap: 12px;
          width: 100%;
          justify-content: center;
        }

        .modal-change-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 20px;
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
          color: white;
          border: none;
          border-radius: 10px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
        }

        .modal-change-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
          background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
        }

        .modal-change-btn:active {
          transform: translateY(0);
        }

        /* Responsive Modal Styles */
        @media (max-width: 480px) {
          .profile-modal {
            max-width: 95vw;
            margin: 0 10px;
          }

          .modal-profile-image {
            width: 160px;
            height: 160px;
          }

          .profile-modal-content {
            padding: 20px;
          }

          .modal-actions {
            flex-direction: column;
            align-items: center;
          }

          .modal-change-btn {
            width: 100%;
            justify-content: center;
          }
        }

        .user-info-desktop {
          flex: 1;
        }

        .user-name-desktop {
          font-size: 28px;
          font-weight: 800;
          margin: 0 0 8px;
          color: #1e293b;
          letter-spacing: -0.5px;
          background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Responsive text sizing */
        @media (min-width: 1200px) {
          .user-name-desktop {
            font-size: 32px;
            letter-spacing: -0.8px;
          }
        }

        @media (min-width: 1600px) {
          .user-name-desktop {
            font-size: 36px;
            letter-spacing: -1px;
          }
        }

        .user-role-desktop {
          margin: 0 0 16px;
          font-size: 14px;
          color: #64748b;
        }

        /* Responsive role text sizing */
        @media (min-width: 1200px) {
          .user-role-desktop {
            font-size: 16px;
          }
        }

        @media (min-width: 1600px) {
          .user-role-desktop {
            font-size: 18px;
          }
        }

        .member-text-desktop {
          color: #64748b;
        }

        .user-stats-desktop {
          display: flex;
          justify-content: flex-start;
          gap: 20px;
          margin: 16px 0;
        }

        .stat-desktop {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          color: #64748b;
          background: #f1f5f9;
          padding: 6px 12px;
          border-radius: 20px;
        }

        /* Responsive stats text sizing */
        @media (min-width: 1200px) {
          .stat-desktop {
            font-size: 14px;
            padding: 8px 14px;
          }
        }

        @media (min-width: 1600px) {
          .stat-desktop {
            font-size: 15px;
            padding: 10px 16px;
          }
        }

        .profile-header-desktop::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #3b82f6 0%, #10b981 100%);
          opacity: 0.3;
        }

        .profile-header-actions {
          margin-top: 16px;
          width: 100%;
        }

        .list-house-btn-header {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: 100%;
          padding: 14px;
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: white;
          border: none;
          border-radius: 10px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .list-house-btn-header:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(16, 185, 129, 0.4);
        }

        .sidebar-header {
          padding: 28px 20px;
          text-align: center;
          border-bottom: 1px solid #e2e8f0;
          background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          gap: 16px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        }

        .sidebar-header::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #3b82f6 0%, #10b981 100%);
          opacity: 0.3;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.5s ease;
        }

        .sidebar-header:hover::before {
          transform: scaleX(1);
        }

        .sidebar-header::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(
            circle at 50% 0%,
            rgba(59, 130, 246, 0.1) 0%,
            transparent 50%
          );
          pointer-events: none;
          animation: headerGlow 4s ease-in-out infinite;
        }

        @keyframes headerGlow {
          0%,
          100% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
        }

        .sidebar-header::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #3b82f6 0%, #10b981 100%);
          opacity: 0.3;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.5s ease;
        }

        .sidebar-header:hover::before {
          transform: scaleX(1);
        }

        .sidebar-header-actions {
          margin-top: auto;
          width: 100%;
          padding-top: 12px;
        }

        .list-house-btn-sidebar {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: 100%;
          padding: 12px;
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: white;
          border: none;
          border-radius: 12px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 15px rgba(16, 185, 129, 0.25);
        }

        .list-house-btn-sidebar:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 8px 25px rgba(16, 185, 129, 0.35);
          background: linear-gradient(135deg, #059669 0%, #047857 100%);
        }

        .list-house-btn-sidebar:active {
          transform: translateY(0) scale(0.98);
        }

        .avatar-container {
          position: relative;
          width: 120px;
          height: 120px;
          margin: 0 auto 20px;
          cursor: pointer;
        }

        .avatar {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          border: 4px solid #e2e8f0;
        }

        .avatar-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(59, 130, 246, 0.8);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .avatar-container:hover .avatar-overlay {
          opacity: 1;
        }

        .user-name {
          font-size: 28px;
          font-weight: 800;
          margin: 0 0 8px;
          color: #1e293b;
          letter-spacing: -0.5px;
          background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .user-role {
          margin: 0 0 16px;
          font-size: 14px;
          color: #64748b;
        }

        .member-text {
          color: #64748b;
        }

        .user-stats {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin: 16px 0;
        }

        .stat {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          color: #64748b;
          background: #f1f5f9;
          padding: 6px 12px;
          border-radius: 20px;
        }

        .home-btn {
          position: absolute;
          top: 20px;
          left: 20px;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: linear-gradient(135deg, #3b82f6 0%, #10b981 100%);
          color: white;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
          transition: all 0.3s ease;
          z-index: 10;
        }

        .home-btn:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4);
        }

        .home-btn:active {
          transform: scale(0.95);
        }

        .sidebar-header::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #3b82f6 0%, #10b981 100%);
          opacity: 0.3;
        }

        .avatar-container {
          position: relative;
          width: 120px;
          height: 120px;
          margin: 0 auto 20px;
          cursor: pointer;
        }

        .avatar {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          border: 4px solid #e2e8f0;
        }

        .avatar-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(59, 130, 246, 0.8);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .avatar-container:hover .avatar-overlay {
          opacity: 1;
        }

        .user-name {
          font-size: 28px;
          font-weight: 800;
          margin: 0 0 8px;
          color: #1e293b;
          letter-spacing: -0.5px;
          background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .user-role {
          margin: 0 0 16px;
          font-size: 14px;
          color: #64748b;
        }

        .member-text {
          color: #64748b;
        }

        .user-stats {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin: 16px 0;
        }

        .stat {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          color: #64748b;
          background: #f1f5f9;
          padding: 6px 12px;
          border-radius: 20px;
        }

        .sidebar-nav {
          flex: 1;
          padding: 20px 0;
          overflow-y: auto;
          scrollbar-width: thin;
          scrollbar-color: #cbd5e1 #f1f5f9;
        }

        .sidebar-nav::-webkit-scrollbar {
          width: 6px;
        }

        .sidebar-nav::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 3px;
        }

        .sidebar-nav::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 3px;
        }

        .sidebar-nav::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }

        .nav-item {
          display: flex;
          align-items: center;
          gap: 14px;
          width: 100%;
          padding: 14px 24px;
          background: none;
          border: none;
          color: #64748b;
          font-size: 15px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          border-left: 4px solid transparent;
          margin: 4px 0;
          border-radius: 12px;
          backdrop-filter: blur(10px);
          overflow: hidden;
        }

        .nav-item::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            90deg,
            rgba(59, 130, 246, 0.05) 0%,
            rgba(59, 130, 246, 0.02) 100%
          );
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        .nav-item:hover::after {
          opacity: 1;
        }

        .nav-item::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 4px;
          background: linear-gradient(180deg, #3b82f6 0%, #10b981 100%);
          transform: scaleY(0);
          transition: transform 0.3s ease;
          transform-origin: top;
          border-radius: 0 4px 4px 0;
        }

        .nav-item:hover {
          background: linear-gradient(
            90deg,
            rgba(59, 130, 246, 0.08) 0%,
            rgba(59, 130, 246, 0.04) 100%
          );
          color: #1e293b;
          transform: translateX(6px);
          box-shadow: 0 2px 8px rgba(59, 130, 246, 0.1);
        }

        .nav-item:hover::before {
          transform: scaleY(1);
        }

        .nav-item.active {
          background: linear-gradient(
            90deg,
            rgba(59, 130, 246, 0.12) 0%,
            rgba(59, 130, 246, 0.06) 100%
          );
          color: #3b82f6;
          border-left: 4px solid #3b82f6;
          box-shadow:
            inset 2px 0 0 rgba(59, 130, 246, 0.3),
            0 4px 12px rgba(59, 130, 246, 0.15);
          font-weight: 600;
        }

        .nav-item.active::before {
          transform: scaleY(1);
          background: linear-gradient(180deg, #f59e0b 0%, #f97316 100%);
        }

        .nav-item .badge {
          background: linear-gradient(135deg, #f59e0b 0%, #f97316 100%);
          color: white;
          font-size: 11px;
          padding: 2px 8px;
          border-radius: 12px;
          font-weight: 700;
          box-shadow: 0 2px 8px rgba(245, 158, 11, 0.3);
          margin-left: auto;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.9;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        .badge {
          position: absolute;
          right: 24px;
          background: #3b82f6;
          color: white;
          font-size: 11px;
          padding: 2px 8px;
          border-radius: 12px;
          font-weight: 600;
        }

        .sidebar-actions {
          padding: 20px 24px 24px;
          border-top: 1px solid #e2e8f0;
          background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
          position: relative;
        }

        .sidebar-actions::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, #3b82f6 0%, #10b981 100%);
          opacity: 0.2;
        }

        .action-buttons {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .search-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: 100%;
          padding: 14px;
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
          color: white;
          border: none;
          border-radius: 12px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
          position: relative;
          overflow: hidden;
        }

        .search-btn::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          transition: left 0.5s;
        }

        .search-btn:hover::before {
          left: 100%;
        }

        .search-btn:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
          background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
        }

        .search-btn:active {
          transform: translateY(0) scale(0.98);
        }

        .list-house-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: 100%;
          padding: 14px;
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: white;
          border: none;
          border-radius: 12px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);
          position: relative;
          overflow: hidden;
        }

        .list-house-btn::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          transition: left 0.5s;
        }

        .list-house-btn:hover::before {
          left: 100%;
        }

        .list-house-btn:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 8px 25px rgba(16, 185, 129, 0.4);
          background: linear-gradient(135deg, #059669 0%, #047857 100%);
        }

        .list-house-btn:active {
          transform: translateY(0) scale(0.98);
        }

        .sidebar-footer {
          padding: 20px 24px;
          border-top: 1px solid #e2e8f0;
          background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
          position: relative;
        }

        .sidebar-footer::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, #f59e0b 0%, #f97316 100%);
          opacity: 0.2;
        }

        .logout-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: 100%;
          padding: 12px;
          background: none;
          border: 1px solid #e2e8f0;
          color: #64748b;
          border-radius: 10px;
          font-size: 15px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .logout-btn:hover {
          background: #f8fafc;
          color: #1e293b;
          border-color: #cbd5e1;
          transform: translateY(-1px);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        }

        .logout-btn:active {
          transform: translateY(0);
        }

        .sidebar-separator {
          height: 1px;
          background: linear-gradient(90deg, transparent, #e2e8f0, transparent);
          margin: 16px 0;
          opacity: 0.5;
        }

        /* Content Area */
        .profile-content {
          flex: 1;
          padding: 32px;
          overflow-y: auto;
          height: calc(100vh - 64px);
          background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
        }

        /* Carousel Container */
        .carousel-container {
          position: relative;
        }

        /* Desktop Scrollable View */
        .desktop-scrollable {
          display: none;
          overflow-x: auto;
          scrollbar-width: thin;
          scrollbar-color: #cbd5e1 #f1f5f9;
          padding-bottom: 8px;
          margin-bottom: -8px;
        }

        .desktop-scrollable::-webkit-scrollbar {
          height: 6px;
        }

        .desktop-scrollable::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 3px;
        }

        .desktop-scrollable::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 3px;
        }

        .desktop-scrollable::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }

        /* Mobile Carousel View */
        .mobile-carousel {
          position: relative;
          overflow: hidden;
        }

        .carousel-track {
          display: flex;
          transition: transform 0.3s ease;
          touch-action: pan-y;
        }

        .carousel-slide {
          flex: 0 0 100%;
          min-width: 100%;
          padding: 0 8px;
        }

        /* Carousel Controls */
        .carousel-controls {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 16px;
          margin-top: 20px;
        }

        .carousel-prev,
        .carousel-next {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: white;
          border: 1px solid #e2e8f0;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .carousel-prev:hover,
        .carousel-next:hover {
          background: #f1f5f9;
          transform: scale(1.1);
        }

        .carousel-indicators {
          display: flex;
          gap: 8px;
        }

        .indicator {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #cbd5e1;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
          padding: 0;
        }

        .indicator.active {
          background: #3b82f6;
          transform: scale(1.2);
        }

        /* Property Cards - Mobile */
        .property-card-mobile {
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid #e2e8f0;
          background: white;
        }

        .property-image-mobile {
          position: relative;
          height: 200px;
          overflow: hidden;
        }

        .property-image-mobile img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .property-overlay-mobile {
          position: absolute;
          top: 12px;
          right: 12px;
        }

        .property-info-mobile {
          padding: 16px;
        }

        .property-info-mobile h4 {
          margin: 0 0 8px;
          font-size: 16px;
          font-weight: 600;
          color: #1e293b;
        }

        /* Activity Cards - Mobile */
        .activity-card-mobile {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 16px;
          background: #f8fafc;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
        }

        /* Desktop Grid Styles */
        .liked-properties-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 20px;
          padding: 8px;
          min-width: min-content;
        }

        .property-card {
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid #e2e8f0;
          background: linear-gradient(180deg, #ffffff 0%, #fafafa 100%);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          min-width: 280px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          position: relative;
          overflow: hidden;
        }

        .property-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #3b82f6 0%, #10b981 100%);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .property-card:hover {
          transform: translateY(-6px) scale(1.02);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
          border-color: #e2e8f0;
        }

        .property-card:hover::before {
          transform: scaleX(1);
        }

        .property-image {
          position: relative;
          height: 180px;
          overflow: hidden;
          background: linear-gradient(45deg, #f8fafc 0%, #e2e8f0 100%);
        }

        .property-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          filter: grayscale(0%);
        }

        .property-card:hover .property-image img {
          transform: scale(1.1);
          filter: grayscale(0%);
        }

        .property-overlay {
          position: absolute;
          top: 12px;
          right: 12px;
        }

        .like-btn {
          width: 40px;
          height: 40px;
          background: white;
          border: none;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          transition: all 0.2s ease;
        }

        .like-btn:hover {
          transform: scale(1.1);
        }

        .like-btn.active {
          background: #fee2e2;
        }

        .property-info {
          padding: 16px;
        }

        .property-info h4 {
          margin: 0 0 8px;
          font-size: 16px;
          font-weight: 600;
          color: #1e293b;
        }

        .property-location {
          display: flex;
          align-items: center;
          gap: 6px;
          margin: 0 0 8px;
          font-size: 14px;
          color: #64748b;
        }

        .property-price {
          font-size: 18px;
          font-weight: 700;
          color: #1e293b;
          margin: 0 0 12px;
        }

        .property-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 12px;
          color: #94a3b8;
          margin-bottom: 12px;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .view-details-btn {
          width: 100%;
          padding: 10px;
          background: #3b82f6;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .view-details-btn:hover {
          background: #2563eb;
        }

        /* Activity Grid for Desktop */
        .activity-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 16px;
          padding: 8px;
          min-width: min-content;
        }

        .activity-card {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 16px;
          background: linear-gradient(180deg, #ffffff 0%, #fafafa 100%);
          border-radius: 12px;
          border: 1px solid #e2e8f0;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          min-width: 300px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
          position: relative;
          overflow: hidden;
        }

        .activity-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #8b5cf6 0%, #f59e0b 100%);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .activity-card:hover {
          background: linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%);
          transform: translateX(6px) scale(1.01);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
          border-color: #e2e8f0;
        }

        .activity-card:hover::before {
          transform: scaleX(1);
        }

        .activity-icon {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .activity-details {
          flex: 1;
        }

        .activity-action {
          margin: 0 0 4px;
          font-size: 14px;
          font-weight: 500;
          color: #1e293b;
        }

        .activity-time {
          font-size: 12px;
          color: #94a3b8;
        }

        /* Responsive Design */
        @media (min-width: 769px) {
          .desktop-scrollable {
            display: block;
          }

          .mobile-carousel {
            display: none;
          }

          /* Show desktop profile header on larger screens */
          .profile-header-desktop {
            display: flex;
          }

          /* Hide sidebar header on desktop screens */
          .sidebar-header {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .desktop-scrollable {
            display: none;
          }

          .mobile-carousel {
            display: block;
          }

          .profile-container {
            flex-direction: column;
          }

          .profile-sidebar {
            width: 100%;
            height: auto;
            position: static;
            border-right: none;
            border-bottom: 1px solid #e2e8f0;
          }

          .profile-content {
            height: auto;
            padding: 20px;
          }

          /* Show responsive desktop header on small screens */
          .profile-header-desktop {
            display: flex;
            width: 100%;
            margin-bottom: 24px;
            padding: 24px;
            min-height: 250px;
          }

          /* Hide sidebar header on small screens */
          .sidebar-header {
            display: none;
          }

          /* Adjust desktop header for small screens */
          .avatar-container-desktop {
            width: 100px;
            height: 100px;
          }

          .avatar-desktop {
            width: 100%;
            height: 100%;
          }

          .user-name-desktop {
            font-size: 24px;
            letter-spacing: -0.3px;
          }

          .user-role-desktop {
            font-size: 12px;
          }

          .stat-desktop {
            font-size: 12px;
            padding: 4px 8px;
          }

          .list-house-btn-header {
            padding: 12px;
            font-size: 14px;
          }

          .quick-stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
          }

          .quick-stat-card {
            padding: 16px;
          }

          .section-header {
            flex-direction: column;
            align-items: stretch;
            gap: 16px;
          }

          .header-actions {
            width: 100%;
            flex-direction: column;
          }

          .edit-profile-btn,
          .search-now-btn,
          .list-house-btn {
            width: 100%;
            justify-content: center;
          }
        }

        /* Always show desktop profile header on small screens */
        @media (max-width: 1024px) {
          .profile-header-desktop {
            display: flex !important;
            order: -1; /* Always position at the top */
            margin-bottom: 24px;
            padding: 24px;
            min-height: 250px;
            width: 100%;
            box-sizing: border-box;
            position: relative;
            z-index: 10;
          }

          .profile-sidebar {
            order: 1;
            width: 100%;
            height: auto;
            position: static;
            border-right: none;
            border-bottom: 1px solid #e2e8f0;
            margin-top: 0;
          }

          .profile-content {
            order: 2;
            height: auto;
            padding: 20px;
          }

          /* Hide sidebar header on small screens */
          .sidebar-header {
            display: none !important;
          }

          /* Adjust desktop header for small screens */
          .avatar-container-desktop {
            width: 100px;
            height: 100px;
          }

          .avatar-desktop {
            width: 100%;
            height: 100%;
          }

          .user-name-desktop {
            font-size: 24px;
            letter-spacing: -0.3px;
          }

          .user-role-desktop {
            font-size: 12px;
          }

          .stat-desktop {
            font-size: 12px;
            padding: 4px 8px;
          }

          .list-house-btn-header {
            padding: 12px;
            font-size: 14px;
          }

          .quick-stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
          }

          .quick-stat-card {
            padding: 16px;
          }

          .section-header {
            flex-direction: column;
            align-items: stretch;
            gap: 16px;
          }

          .header-actions {
            width: 100%;
            flex-direction: column;
          }

          .edit-profile-btn,
          .search-now-btn,
          .list-house-btn {
            width: 100%;
            justify-content: center;
          }
        }

        /* Mobile-specific layout to ensure header is above sidebar nav */
        @media (max-width: 768px) {
          .profile-container {
            display: flex;
            flex-direction: column;
          }

          .profile-header-desktop {
            display: flex !important;
            order: -1;
            margin-bottom: 24px;
            padding: 24px;
            min-height: 250px;
            width: 100%;
            box-sizing: border-box;
            position: relative;
            z-index: 10;
            background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
            border-radius: 16px;
            border: 1px solid #e2e8f0;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
          }

          .profile-sidebar {
            order: 1;
            width: 100%;
            height: auto;
            position: static;
            border-right: none;
            border-bottom: 1px solid #e2e8f0;
            margin-top: 0;
            background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
            border-radius: 16px;
            border: 1px solid #e2e8f0;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
          }

          .profile-content {
            order: 2;
            height: auto;
            padding: 20px;
            background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
          }

          /* Ensure sidebar header is hidden */
          .sidebar-header {
            display: none !important;
          }

          /* Adjust desktop header for mobile screens */
          .avatar-container-desktop {
            width: 100px;
            height: 100px;
          }

          .avatar-desktop {
            width: 100%;
            height: 100%;
          }

          .user-name-desktop {
            font-size: 24px;
            letter-spacing: -0.3px;
          }

          .user-role-desktop {
            font-size: 12px;
          }

          .stat-desktop {
            font-size: 12px;
            padding: 4px 8px;
          }

          .list-house-btn-header {
            padding: 12px;
            font-size: 14px;
          }

          .quick-stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
          }

          .quick-stat-card {
            padding: 16px;
          }

          .section-header {
            flex-direction: column;
            align-items: stretch;
            gap: 16px;
          }

          .header-actions {
            width: 100%;
            flex-direction: column;
          }

          .edit-profile-btn,
          .search-now-btn,
          .list-house-btn {
            width: 100%;
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .quick-stats-grid {
            grid-template-columns: 1fr;
          }

          .property-card-mobile {
            margin: 0 4px;
          }

          .carousel-slide {
            padding: 0 4px;
          }
        }

        /* Loading spinner */
        .uploading-spinner {
          width: 24px;
          height: 24px;
          border: 3px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          border-top-color: white;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        /* Profile Content Sections */
        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 2px solid #e2e8f0;
          position: relative;
        }

        .section-header::after {
          content: "";
          position: absolute;
          bottom: -2px;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, #3b82f6 0%, #10b981 100%);
          transform: scaleX(0);
          transition: transform 0.5s ease;
        }

        .section-header:hover::after {
          transform: scaleX(1);
        }

        .section-title {
          margin: 0;
          font-size: 28px;
          font-weight: 800;
          color: #1e293b;
          letter-spacing: -0.5px;
          background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-subtitle {
          margin: 4px 0 0;
          font-size: 14px;
          color: #64748b;
          font-weight: 500;
        }

        .header-actions {
          display: flex;
          gap: 12px;
        }

        /* Button Styles */
        .primary-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 20px;
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
          color: white;
          border: none;
          border-radius: 10px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
          position: relative;
          overflow: hidden;
        }

        .primary-btn::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          transition: left 0.5s;
        }

        .primary-btn:hover::before {
          left: 100%;
        }

        .primary-btn:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
          background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
        }

        .primary-btn:active {
          transform: translateY(0) scale(0.98);
        }

        .secondary-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 20px;
          background: white;
          color: #1e293b;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        }

        .secondary-btn:hover {
          background: #f8fafc;
          border-color: #cbd5e1;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .secondary-btn:active {
          transform: translateY(0);
        }

        .view-all-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: transparent;
          color: #3b82f6;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .view-all-btn:hover {
          background: #f0f7ff;
          border-color: #bfdbfe;
          transform: translateX(2px);
        }

        /* Edit Profile Button */
        .edit-profile-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 20px;
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
          color: white;
          border: none;
          border-radius: 10px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
          position: relative;
          overflow: hidden;
        }

        .edit-profile-btn::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          transition: left 0.5s;
        }

        .edit-profile-btn:hover::before {
          left: 100%;
        }

        .edit-profile-btn:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
          background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
        }

        .edit-profile-btn:active {
          transform: translateY(0) scale(0.98);
        }

        /* Edit Button */
        .edit-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 20px;
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
          color: white;
          border: none;
          border-radius: 10px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
          position: relative;
          overflow: hidden;
        }

        .edit-btn::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          transition: left 0.5s;
        }

        .edit-btn:hover::before {
          left: 100%;
        }

        .edit-btn:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
          background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
        }

        .edit-btn:active {
          transform: translateY(0) scale(0.98);
        }

        /* Save Button */
        .save-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 16px;
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);
          position: relative;
          overflow: hidden;
        }

        .save-btn::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          transition: left 0.5s;
        }

        .save-btn:hover::before {
          left: 100%;
        }

        .save-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(16, 185, 129, 0.4);
          background: linear-gradient(135deg, #059669 0%, #047857 100%);
        }

        .save-btn:disabled {
          background: #94a3b8;
          cursor: not-allowed;
          transform: none;
          box-shadow: none;
        }

        .save-btn:active {
          transform: translateY(0) scale(0.98);
        }

        /* Cancel Button */
        .cancel-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 16px;
          background: #f1f5f9;
          color: #64748b;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          position: relative;
          overflow: hidden;
        }

        .cancel-btn::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          transition: left 0.5s;
        }

        .cancel-btn:hover::before {
          left: 100%;
        }

        .cancel-btn:hover {
          background: #e2e8f0;
          color: #334155;
          transform: translateY(-1px);
          border-color: #cbd5e1;
        }

        .cancel-btn:active {
          transform: translateY(0);
        }

        /* View Details Button */
        .view-details-btn {
          width: 100%;
          padding: 10px;
          background: #3b82f6;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          position: relative;
          overflow: hidden;
        }

        .view-details-btn::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          transition: left 0.5s;
        }

        .view-details-btn:hover::before {
          left: 100%;
        }

        .view-details-btn:hover {
          background: #2563eb;
          transform: translateY(-1px);
        }

        .view-details-btn:active {
          transform: translateY(0);
        }

        /* Like Button */
        .like-btn {
          width: 40px;
          height: 40px;
          background: white;
          border: none;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          transition: all 0.2s ease;
          position: relative;
          overflow: hidden;
        }

        .like-btn::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          transition: left 0.5s;
        }

        .like-btn:hover::before {
          left: 100%;
        }

        .like-btn:hover {
          transform: scale(1.1);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .like-btn.active {
          background: #fee2e2;
          color: #ef4444;
        }

        .like-btn.active:hover {
          background: #fecaca;
          transform: scale(1.15);
        }

        /* Remove Button */
        .remove-btn {
          width: 32px;
          height: 32px;
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid #e2e8f0;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          position: relative;
          overflow: hidden;
        }

        .remove-btn::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          transition: left 0.5s;
        }

        .remove-btn:hover::before {
          left: 100%;
        }

        .remove-btn:hover {
          background: white;
          transform: scale(1.1);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          border-color: #cbd5e1;
        }

        .remove-btn:active {
          transform: scale(0.95);
        }

        /* Action Buttons */
        .action-btn {
          flex: 1;
          padding: 10px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          border: 1px solid #e2e8f0;
          position: relative;
          overflow: hidden;
        }

        .action-btn::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          transition: left 0.5s;
        }

        .action-btn:hover::before {
          left: 100%;
        }

        .action-btn.view {
          background: #3b82f6;
          color: white;
          border-color: #3b82f6;
        }

        .action-btn.view:hover {
          background: #2563eb;
          border-color: #2563eb;
          transform: translateY(-1px);
        }

        .action-btn.view:active {
          transform: translateY(0);
        }

        .action-btn.contact {
          background: white;
          color: #1e293b;
          border-color: #e2e8f0;
        }

        .action-btn.contact:hover {
          background: #f8fafc;
          border-color: #cbd5e1;
          transform: translateY(-1px);
        }

        .action-btn.contact:active {
          transform: translateY(0);
        }

        /* Modal Change Button */
        .modal-change-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 20px;
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
          color: white;
          border: none;
          border-radius: 10px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
          position: relative;
          overflow: hidden;
        }

        .modal-change-btn::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          transition: left 0.5s;
        }

        .modal-change-btn:hover::before {
          left: 100%;
        }

        .modal-change-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
          background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
        }

        .modal-change-btn:active {
          transform: translateY(0) scale(0.98);
        }

        /* Modal Close Button */
        .modal-close-btn {
          position: absolute;
          top: 16px;
          right: 16px;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid #e2e8f0;
          color: #1e293b;
          font-size: 24px;
          font-weight: 300;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          z-index: 10;
          backdrop-filter: blur(4px);
          position: relative;
          overflow: hidden;
        }

        .modal-close-btn::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          transition: left 0.5s;
        }

        .modal-close-btn:hover::before {
          left: 100%;
        }

        .modal-close-btn:hover {
          background: rgba(255, 255, 255, 1);
          transform: scale(1.1);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .modal-close-btn:active {
          transform: scale(0.95);
        }

        /* Profile Menu Item */
        .profile-menu-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s ease;
          color: #1e293b;
          font-size: 14px;
          font-weight: 500;
          position: relative;
          overflow: hidden;
        }

        .profile-menu-item::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          transition: left 0.5s;
        }

        .profile-menu-item:hover::before {
          left: 100%;
        }

        .profile-menu-item:hover {
          background: #f8fafc;
          color: #3b82f6;
          transform: translateX(4px);
        }

        /* Carousel Controls */
        .carousel-prev,
        .carousel-next {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: white;
          border: 1px solid #e2e8f0;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          position: relative;
          overflow: hidden;
        }

        .carousel-prev::before,
        .carousel-next::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          transition: left 0.5s;
        }

        .carousel-prev:hover::before,
        .carousel-next:hover::before {
          left: 100%;
        }

        .carousel-prev:hover,
        .carousel-next:hover {
          background: #f1f5f9;
          transform: scale(1.1);
          border-color: #cbd5e1;
        }

        .carousel-prev:active,
        .carousel-next:active {
          transform: scale(0.95);
        }

        /* Indicator Button */
        .indicator {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #cbd5e1;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
          padding: 0;
          position: relative;
          overflow: hidden;
        }

        .indicator::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          transition: left 0.5s;
        }

        .indicator:hover::before {
          left: 100%;
        }

        .indicator.active {
          background: #3b82f6;
          transform: scale(1.2);
        }

        .indicator:hover {
          background: #94a3b8;
          transform: scale(1.1);
        }

        .indicator:active {
          transform: scale(0.95);
        }

        /* Error and Success Close Buttons */
        .error-close-btn,
        .success-close-btn {
          background: none;
          border: none;
          font-size: 20px;
          cursor: pointer;
          color: inherit;
          padding: 0;
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transition: background 0.2s ease;
          position: relative;
          overflow: hidden;
        }

        .error-close-btn::before,
        .success-close-btn::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          transition: left 0.5s;
        }

        .error-close-btn:hover::before,
        .success-close-btn:hover::before {
          left: 100%;
        }

        .error-close-btn:hover,
        .success-close-btn:hover {
          background: rgba(0, 0, 0, 0.1);
        }

        .error-close-btn:active,
        .success-close-btn:active {
          transform: scale(0.9);
        }

        /* Filter Button */
        .filter-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 20px;
          background: white;
          color: #1e293b;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
          position: relative;
          overflow: hidden;
        }

        .filter-btn::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          transition: left 0.5s;
        }

        .filter-btn:hover::before {
          left: 100%;
        }

        .filter-btn:hover {
          background: #f8fafc;
          border-color: #cbd5e1;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .filter-btn:active {
          transform: translateY(0);
        }

        /* Clear Button */
        .clear-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 20px;
          background: white;
          color: #1e293b;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
          position: relative;
          overflow: hidden;
        }

        .clear-btn::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          transition: left 0.5s;
        }

        .clear-btn:hover::before {
          left: 100%;
        }

        .clear-btn:hover {
          background: #f8fafc;
          border-color: #cbd5e1;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .clear-btn:active {
          transform: translateY(0);
        }

        /* Input Button */
        .input-btn {
          width: 40px;
          height: 40px;
          border-radius: 8px;
          border: 1px solid #e2e8f0;
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          position: relative;
          overflow: hidden;
        }

        .input-btn::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          transition: left 0.5s;
        }

        .input-btn:hover::before {
          left: 100%;
        }

        .input-btn:hover {
          background: #f1f5f9;
          border-color: #cbd5e1;
        }

        .input-btn:active {
          transform: scale(0.95);
        }

        /* Send Button */
        .send-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #3b82f6;
          border: none;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          position: relative;
          overflow: hidden;
        }

        .send-btn::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          transition: left 0.5s;
        }

        .send-btn:hover::before {
          left: 100%;
        }

        .send-btn:hover {
          background: #2563eb;
          transform: scale(1.05);
        }

        .send-btn:disabled {
          background: #94a3b8;
          cursor: not-allowed;
          transform: none;
        }

        .send-btn:active {
          transform: scale(0.95);
        }

        /* Action Button (Chat) */
        .action-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1px solid #e2e8f0;
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          position: relative;
          overflow: hidden;
        }

        .action-btn::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          transition: left 0.5s;
        }

        .action-btn:hover::before {
          left: 100%;
        }

        .action-btn:hover {
          background: #f1f5f9;
          border-color: #cbd5e1;
        }

        .action-btn:active {
          transform: scale(0.95);
        }

        /* Section Cards */
        .section-card {
          background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
          border-radius: 16px;
          border: 1px solid #e2e8f0;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          padding: 24px;
          margin-bottom: 24px;
          position: relative;
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .section-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #3b82f6 0%, #10b981 100%);
          opacity: 0.3;
          transform: scaleX(0);
          transition: transform 0.5s ease;
        }

        .section-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
          border-color: #e2e8f0;
        }

        .section-card:hover::before {
          transform: scaleX(1);
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          padding-bottom: 12px;
          border-bottom: 1px solid #e2e8f0;
        }

        .header-title {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .header-title h3 {
          margin: 0;
          font-size: 20px;
          font-weight: 700;
          color: #1e293b;
        }

        .card-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 16px;
        }

        /* Quick Stats Grid */
        .quick-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin-bottom: 24px;
        }

        .quick-stat-card {
          background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
          border-radius: 12px;
          border: 1px solid #e2e8f0;
          padding: 16px;
          display: flex;
          align-items: center;
          gap: 16px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .quick-stat-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #3b82f6 0%, #10b981 100%);
          opacity: 0.3;
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .quick-stat-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
          border-color: #e2e8f0;
        }

        .quick-stat-card:hover::before {
          transform: scaleX(1);
        }

        .stat-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
        }

        .stat-content {
          flex: 1;
        }

        .stat-value {
          font-size: 24px;
          font-weight: 800;
          color: #1e293b;
          margin-bottom: 4px;
        }

        .stat-label {
          font-size: 14px;
          color: #64748b;
          font-weight: 500;
          margin-bottom: 4px;
        }

        .stat-change {
          font-size: 12px;
          color: #10b981;
          font-weight: 600;
          background: #d1fae5;
          padding: 2px 8px;
          border-radius: 12px;
          display: inline-block;
        }

        /* Profile Grid */
        .profile-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 24px;
        }

        .profile-card {
          background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
          border-radius: 16px;
          border: 1px solid #e2e8f0;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          padding: 24px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .profile-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #3b82f6 0%, #10b981 100%);
          opacity: 0.3;
          transform: scaleX(0);
          transition: transform 0.5s ease;
        }

        .profile-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
          border-color: #e2e8f0;
        }

        .profile-card:hover::before {
          transform: scaleX(1);
        }

        .card-content {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .info-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .info-group label {
          font-size: 12px;
          font-weight: 600;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .info-value {
          font-size: 16px;
          font-weight: 600;
          color: #1e293b;
          margin: 0;
        }

        .info-with-icon {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
        }

        .info-with-icon svg {
          flex-shrink: 0;
        }

        .edit-input,
        .edit-textarea {
          padding: 12px;
          border: 2px solid #e2e8f0;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 500;
          color: #1e293b;
          background: white;
          transition: all 0.2s ease;
          outline: none;
        }

        .edit-input:focus,
        .edit-textarea:focus {
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
          transform: translateY(-1px);
        }

        .bio {
          line-height: 1.6;
          color: #334155;
        }

        .edit-actions {
          display: flex;
          justify-content: flex-end;
          gap: 12px;
          margin-top: 20px;
          padding-top: 20px;
          border-top: 1px solid #e2e8f0;
        }

        .cancel-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 16px;
          background: #f1f5f9;
          color: #64748b;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .cancel-btn:hover {
          background: #e2e8f0;
          color: #334155;
          transform: translateY(-1px);
        }

        .save-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 16px;
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);
        }

        .save-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(16, 185, 129, 0.4);
          background: linear-gradient(135deg, #059669 0%, #047857 100%);
        }

        .save-btn:disabled {
          background: #94a3b8;
          cursor: not-allowed;
          transform: none;
          box-shadow: none;
        }

        .spinner {
          width: 16px;
          height: 16px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          border-top-color: white;
          animation: spin 1s linear infinite;
        }

        /* Liked Properties Grid */
        .liked-properties-grid-full {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 20px;
        }

        .property-card-full {
          background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
          border-radius: 16px;
          border: 1px solid #e2e8f0;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
        }

        .property-card-full::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #3b82f6 0%, #10b981 100%);
          opacity: 0.3;
          transform: scaleX(0);
          transition: transform 0.5s ease;
        }

        .property-card-full:hover {
          transform: translateY(-6px) scale(1.02);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
          border-color: #e2e8f0;
        }

        .property-card-full:hover::before {
          transform: scaleX(1);
        }

        .property-image-full {
          position: relative;
          height: 200px;
          overflow: hidden;
          background: linear-gradient(45deg, #f8fafc 0%, #e2e8f0 100%);
        }

        .property-image-full img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          filter: grayscale(0%);
        }

        .property-card-full:hover .property-image-full img {
          transform: scale(1.1);
          filter: grayscale(0%);
        }

        .property-overlay-full {
          position: absolute;
          top: 12px;
          right: 12px;
        }

        .remove-btn {
          width: 32px;
          height: 32px;
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid #e2e8f0;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .remove-btn:hover {
          background: white;
          transform: scale(1.1);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .property-details {
          padding: 16px;
        }

        .property-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }

        .property-header h3 {
          margin: 0;
          font-size: 18px;
          font-weight: 700;
          color: #1e293b;
        }

        .property-location {
          display: flex;
          align-items: center;
          gap: 6px;
          margin: 0 0 8px;
          font-size: 14px;
          color: #64748b;
        }

        .property-price {
          font-size: 20px;
          font-weight: 800;
          color: #1e293b;
          margin: 0 0 12px;
        }

        .property-stats {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
          padding: 12px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
        }

        .stat {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          color: #64748b;
        }

        .property-actions {
          display: flex;
          gap: 12px;
        }

        .action-btn {
          flex: 1;
          padding: 10px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          border: 1px solid #e2e8f0;
        }

        .action-btn.view {
          background: #3b82f6;
          color: white;
          border-color: #3b82f6;
        }

        .action-btn.view:hover {
          background: #2563eb;
          border-color: #2563eb;
        }

        .action-btn.contact {
          background: white;
          color: #1e293b;
          border-color: #e2e8f0;
        }

        .action-btn.contact:hover {
          background: #f8fafc;
          border-color: #cbd5e1;
        }

        /* Activity List */
        .activity-list-full {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .activity-item-full {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 16px;
          background: linear-gradient(180deg, #ffffff 0%, #fafafa 100%);
          border-radius: 12px;
          border: 1px solid #e2e8f0;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .activity-item-full::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #8b5cf6 0%, #f59e0b 100%);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .activity-item-full:hover {
          background: linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%);
          transform: translateX(6px) scale(1.01);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
          border-color: #e2e8f0;
        }

        .activity-item-full:hover::before {
          transform: scaleX(1);
        }

        .activity-icon-full {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .activity-content-full {
          flex: 1;
        }

        .activity-text {
          margin: 0 0 4px;
          font-size: 16px;
          font-weight: 600;
          color: #1e293b;
        }

        .activity-time {
          font-size: 13px;
          color: #94a3b8;
        }

        /* Responsive Design */
        @media (max-width: 1200px) {
          .quick-stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .profile-grid {
            grid-template-columns: 1fr;
          }

          .quick-stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .property-actions {
            flex-direction: column;
          }

          .action-btn {
            width: 100%;
          }
        }

        @media (max-width: 480px) {
          .quick-stats-grid {
            grid-template-columns: 1fr;
          }

          .section-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
          }

          .header-actions {
            width: 100%;
            justify-content: flex-end;
          }

          .primary-btn,
          .secondary-btn {
            width: 100%;
            justify-content: center;
          }
        }

        /* Error and Success Messages */
        .error-message,
        .success-message {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 16px;
          border-radius: 8px;
          margin: 16px 0;
          font-weight: 500;
          animation: slideDown 0.3s ease;
        }

        .error-message {
          background: #fee2e2;
          border: 1px solid #fecaca;
          color: #dc2626;
        }

        .success-message {
          background: #d1fae5;
          border: 1px solid #bbf7d0;
          color: #065f46;
        }

        .error-text,
        .success-text {
          margin: 0;
        }

        .error-close-btn,
        .success-close-btn {
          background: none;
          border: none;
          font-size: 20px;
          cursor: pointer;
          color: inherit;
          padding: 0;
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transition: background 0.2s ease;
        }

        .error-close-btn:hover,
        .success-close-btn:hover {
          background: rgba(0, 0, 0, 0.1);
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `})]})}function hd(){const[r,s]=h.useState(null),[d,c]=h.useState(!0),[f,p]=h.useState(null),g=nt();return h.useEffect(()=>{(async()=>{try{if(!Le.getToken()){g("/login");return}const m=await xe.auth.getCurrentUser();s(m),m.is_verified}catch(b){console.error("Error checking authentication:",b),p("Failed to load profile. Please login again."),setTimeout(()=>{g("/login")},2e3)}finally{c(!1)}})()},[g]),d?n.jsxs("div",{className:"loading-container",children:[n.jsx("div",{className:"loading-spinner"}),n.jsx("p",{children:"Loading profile..."})]}):f?n.jsxs("div",{className:"error-container",children:[n.jsx("h2",{children:"Error"}),n.jsx("p",{children:f})]}):r?n.jsx(s2,{}):null}const o2=`
  .loading-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 50vh;
    gap: 20px;
  }

  .loading-spinner {
    width: 40px;
    height: 40px;
    border: 4px solid #f3f4f6;
    border-top: 4px solid #3b82f6;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  .error-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 50vh;
    gap: 16px;
    text-align: center;
    padding: 20px;
  }

  .error-container h2 {
    color: #ef4444;
    margin: 0;
  }

  .error-container p {
    color: #6b7280;
    margin: 0;
    font-size: 16px;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;if(typeof document<"u"&&!document.getElementById("profile-styles")){const r=document.createElement("style");r.id="profile-styles",r.textContent=o2,document.head.appendChild(r)}function c2(){const[r,s]=h.useState({name:"",email:"",message:""}),[d,c]=h.useState(()=>{const g=localStorage.getItem("darkMode");return g!==null?JSON.parse(g):window.matchMedia("(prefers-color-scheme: dark)").matches}),f=g=>{s({...r,[g.target.name]:g.target.value})},p=g=>{g.preventDefault(),console.log("Form submitted:",r),alert("Message sent!"),s({name:"",email:"",message:""})};return h.useEffect(()=>{d?(document.body.classList.add("dark-mode"),localStorage.setItem("darkMode","true")):(document.body.classList.remove("dark-mode"),localStorage.setItem("darkMode","false"))},[d]),n.jsxs("div",{className:`contact-container ${d?"dark":""}`,children:[n.jsxs("div",{className:"contact-navbar",children:[n.jsx("div",{className:"nav-left",children:n.jsx("button",{className:"nav-btn",onClick:()=>window.location.href="/",title:"Home",children:n.jsx(Ba,{size:24})})}),n.jsx("div",{className:"nav-center",children:n.jsx("h1",{className:"contact-title",children:"Contact Us"})}),n.jsxs("div",{className:"nav-right",children:[n.jsx("button",{className:"nav-btn",onClick:()=>c(!d),title:d?"Switch to light mode":"Switch to dark mode",children:d?n.jsx(Ln,{size:24}):n.jsx(Un,{size:24})}),n.jsx("button",{className:"nav-btn",onClick:()=>window.location.href="/about",title:"About",children:n.jsx(Tt,{size:24})})]})]}),n.jsxs("div",{style:{maxWidth:"600px",margin:"20px auto",padding:"20px",border:"1px solid var(--border-color, #ddd)",borderRadius:"8px",background:"var(--bg-secondary, #f9f9f9)",fontFamily:"Arial, sans-serif"},children:[n.jsx("h2",{style:{textAlign:"center",marginBottom:"20px"},children:"Contact Us"}),n.jsxs("form",{onSubmit:p,children:[n.jsx("label",{style:{display:"block",marginBottom:"8px"},children:"Name"}),n.jsx("input",{type:"text",name:"name",value:r.name,onChange:f,required:!0,style:{width:"100%",padding:"10px",marginBottom:"15px",borderRadius:"4px",border:"1px solid #ccc"}}),n.jsx("label",{style:{display:"block",marginBottom:"8px"},children:"Email"}),n.jsx("input",{type:"email",name:"email",value:r.email,onChange:f,required:!0,style:{width:"100%",padding:"10px",marginBottom:"15px",borderRadius:"4px",border:"1px solid #ccc"}}),n.jsx("label",{style:{display:"block",marginBottom:"8px"},children:"Message"}),n.jsx("textarea",{name:"message",value:r.message,onChange:f,required:!0,rows:"5",style:{width:"100%",padding:"10px",marginBottom:"15px",borderRadius:"4px",border:"1px solid #ccc"}}),n.jsx("button",{type:"submit",style:{width:"100%",padding:"12px",border:"none",borderRadius:"4px",background:"#007BFF",color:"#fff",fontSize:"16px",cursor:"pointer"},children:"Send Message"})]})]}),n.jsx("style",{children:`
        .contact-container {
          min-height: 100vh;
          background: var(--bg-primary, #f8fafc);
          color: var(--text-primary, #1e293b);
          transition: all 0.3s ease;
        }

        .contact-navbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 24px;
          background: var(--bg-secondary, #ffffff);
          border-bottom: 1px solid var(--border-color, #e2e8f0);
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .nav-left,
        .nav-right {
          display: flex;
          gap: 12px;
          align-items: center;
        }

        .nav-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          color: var(--text-secondary, #64748b);
        }

        .nav-btn:hover {
          background: var(--hover-bg, #f1f5f9);
          color: var(--accent-blue, #3b82f6);
        }

        .contact-title {
          margin: 0;
          font-size: 20px;
          font-weight: 700;
          color: var(--text-primary, #1e293b);
        }

        /* Light Mode Variables */
        :root {
          --bg-primary: #f8fafc;
          --bg-secondary: #ffffff;
          --text-primary: #1e293b;
          --text-secondary: #64748b;
          --border-color: #e2e8f0;
          --accent-blue: #3b82f6;
          --hover-bg: #f1f5f9;
        }

        /* Dark Mode Variables */
        .dark {
          --bg-primary: #0f172a;
          --bg-secondary: #1e293b;
          --text-primary: #f1f5f9;
          --text-secondary: #cbd5e1;
          --border-color: #475569;
          --accent-blue: #60a5fa;
          --hover-bg: #334155;
        }
      `})]})}function d2(){const[r,s]=h.useState({logo:"https://via.placeholder.com/150x60?text=Logo",description:`Welcome to Nduru House Hunting, your go-to platform for finding the perfect home. 
Whether you are looking to rent or buy, we aim to make the search process fast, simple, and stress-free.`,vision:`To become the most trusted and user-friendly house hunting platform in the market, 
bridging the gap between homeowners, tenants, and buyers while providing transparency and efficiency at every step.`,team:[{name:"Alice Mwangi",role:"CEO",email:"alice@nduru.com",phone:"+254700111222"},{name:"John Otieno",role:"CTO",email:"john@nduru.com",phone:"+254700333444"}],contact:{email:"info@nduru.com",phone:"+254700555666",address:"123 Nairobi Rd, Nairobi, Kenya"}}),[d,c]=h.useState(()=>{const f=localStorage.getItem("darkMode");return f!==null?JSON.parse(f):window.matchMedia("(prefers-color-scheme: dark)").matches});return h.useEffect(()=>{d?(document.body.classList.add("dark-mode"),localStorage.setItem("darkMode","true")):(document.body.classList.remove("dark-mode"),localStorage.setItem("darkMode","false"))},[d]),n.jsxs("div",{className:`about-container ${d?"dark":""}`,children:[n.jsxs("div",{className:"about-navbar",children:[n.jsx("div",{className:"nav-left",children:n.jsx("button",{className:"nav-btn",onClick:()=>window.location.href="/",title:"Home",children:n.jsx(Ba,{size:24})})}),n.jsx("div",{className:"nav-center",children:n.jsx("h1",{className:"about-title",children:"About Us"})}),n.jsxs("div",{className:"nav-right",children:[n.jsx("button",{className:"nav-btn",onClick:()=>c(!d),title:d?"Switch to light mode":"Switch to dark mode",children:d?n.jsx(Ln,{size:24}):n.jsx(Un,{size:24})}),n.jsx("button",{className:"nav-btn",onClick:()=>window.location.href="/contact",title:"Contact",children:n.jsx(MessageCircle,{size:24})})]})]}),n.jsxs("div",{style:{maxWidth:"800px",margin:"20px auto",padding:"20px",fontFamily:"Arial, sans-serif",lineHeight:"1.6",color:"var(--text-primary, #333)",background:"var(--bg-secondary, #ffffff)",borderRadius:"12px",boxShadow:"0 4px 6px rgba(0, 0, 0, 0.1)"},children:[n.jsx("div",{style:{textAlign:"center",marginBottom:"30px"},children:n.jsx("img",{src:r.logo||void 0,alt:"Logo",style:{maxWidth:"150px",height:"auto"}})}),n.jsx("p",{children:r.description}),n.jsx("h2",{style:{marginTop:"30px"},children:"Our Vision"}),n.jsx("p",{children:r.vision}),n.jsx("h2",{style:{marginTop:"30px"},children:"Our Team"}),n.jsx("ul",{style:{paddingLeft:"20px"},children:r.team.map((f,p)=>n.jsxs("li",{style:{marginBottom:"10px"},children:[n.jsx("strong",{children:f.name})," - ",f.role," ",n.jsx("br",{}),"Email: ",n.jsx("a",{href:`mailto:${f.email}`,children:f.email})," ",n.jsx("br",{}),"Phone: ",n.jsx("a",{href:`tel:${f.phone}`,children:f.phone})]},p))}),n.jsx("h2",{style:{marginTop:"30px"},children:"Contact Info"}),n.jsxs("p",{children:["Email:"," ",n.jsx("a",{href:`mailto:${r.contact.email}`,children:r.contact.email})," ",n.jsx("br",{}),"Phone:"," ",n.jsx("a",{href:`tel:${r.contact.phone}`,children:r.contact.phone})," ",n.jsx("br",{}),"Address: ",r.contact.address]})]}),n.jsx("style",{children:`
        .about-container {
          min-height: 100vh;
          background: var(--bg-primary, #f8fafc);
          color: var(--text-primary, #1e293b);
          transition: all 0.3s ease;
        }

        .about-navbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 24px;
          background: var(--bg-secondary, #ffffff);
          border-bottom: 1px solid var(--border-color, #e2e8f0);
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .nav-left,
        .nav-right {
          display: flex;
          gap: 12px;
          align-items: center;
        }

        .nav-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          color: var(--text-secondary, #64748b);
        }

        .nav-btn:hover {
          background: var(--hover-bg, #f1f5f9);
          color: var(--accent-blue, #3b82f6);
        }

        .about-title {
          margin: 0;
          font-size: 20px;
          font-weight: 700;
          color: var(--text-primary, #1e293b);
        }

        /* Light Mode Variables */
        :root {
          --bg-primary: #f8fafc;
          --bg-secondary: #ffffff;
          --text-primary: #1e293b;
          --text-secondary: #64748b;
          --border-color: #e2e8f0;
          --accent-blue: #3b82f6;
          --hover-bg: #f1f5f9;
        }

        /* Dark Mode Variables */
        .dark {
          --bg-primary: #0f172a;
          --bg-secondary: #1e293b;
          --text-primary: #f1f5f9;
          --text-secondary: #cbd5e1;
          --border-color: #475569;
          --accent-blue: #60a5fa;
          --hover-bg: #334155;
        }
      `})]})}function u2(){const[r,s]=h.useState([{id:1,sender:"bot",text:"Welcome! How can I help you today?"}]),[d,c]=h.useState(""),f=h.useRef(null);h.useEffect(()=>{f.current?.scrollIntoView({behavior:"smooth"})},[r]);const p=()=>{if(!d.trim())return;const y={id:Date.now(),sender:"user",text:d};s([...r,y]),c(""),setTimeout(()=>{const b={id:Date.now()+1,sender:"bot",text:"Thanks for your message! We'll get back to you soon."};s(m=>[...m,b])},1e3)},g=y=>{y.key==="Enter"&&p()};return n.jsxs("div",{style:{maxWidth:"400px",margin:"50px auto",border:"1px solid #ccc",borderRadius:"8px",display:"flex",flexDirection:"column",height:"500px",fontFamily:"Arial, sans-serif"},children:[n.jsxs("div",{style:{flex:1,padding:"10px",overflowY:"auto",background:"#f5f5f5"},children:[r.map(y=>n.jsx("div",{style:{display:"flex",justifyContent:y.sender==="user"?"flex-end":"flex-start",marginBottom:"10px"},children:n.jsx("div",{style:{background:y.sender==="user"?"#007BFF":"#e5e5e5",color:y.sender==="user"?"#fff":"#000",padding:"8px 12px",borderRadius:"16px",maxWidth:"70%"},children:y.text})},y.id)),n.jsx("div",{ref:f})]}),n.jsxs("div",{style:{display:"flex",borderTop:"1px solid #ccc",padding:"10px",background:"#fff"},children:[n.jsx("input",{type:"text",value:d,onChange:y=>c(y.target.value),onKeyPress:g,placeholder:"Type a message...",style:{flex:1,padding:"8px 12px",borderRadius:"20px",border:"1px solid #ccc",marginRight:"10px"}}),n.jsx("button",{onClick:p,style:{padding:"8px 16px",border:"none",borderRadius:"20px",background:"#007BFF",color:"#fff",cursor:"pointer"},children:"Send"})]})]})}function pg(){const r=nt(),[s,d]=h.useState({email:"",name:"",password:"",confirmPassword:""}),[c,f]=h.useState({}),[p,g]=h.useState(""),[y,b]=h.useState(!1),[m,j]=h.useState(()=>{const A=localStorage.getItem("darkMode");return A!==null?JSON.parse(A):window.matchMedia("(prefers-color-scheme: dark)").matches}),v=A=>{const{name:z,value:T,type:D,checked:G}=A.target;d({...s,[z]:D==="checkbox"?G:T}),f({...c,[z]:""})},k=()=>{const A={};return s.email.trim()?/\S+@\S+\.\S+/.test(s.email)||(A.email="Invalid email"):A.email="Email is required",s.name.trim()||(A.name="Name is required"),s.password?s.password.length<6&&(A.password="Password must be at least 6 characters"):A.password="Password is required",s.password!==s.confirmPassword&&(A.confirmPassword="Passwords do not match"),A},_=async A=>{A.preventDefault();const z=k();if(Object.keys(z).length){f(z),g("");return}b(!0);try{const T=await xe.auth.signup(s.email,s.password,"",s.name,!1,{},[]);Le.setAuth(T.token,T.user),g("Signup successful! Redirecting to profile..."),setTimeout(()=>{r("/profile")},1500)}catch(T){f({submit:T.message})}finally{b(!1)}};return h.useEffect(()=>{m?(document.body.classList.add("dark-mode"),localStorage.setItem("darkMode","true")):(document.body.classList.remove("dark-mode"),localStorage.setItem("darkMode","false"))},[m]),n.jsxs("div",{className:`signup-container ${m?"dark":""}`,children:[n.jsxs("div",{className:"signup-navbar",children:[n.jsx("div",{className:"nav-left",children:n.jsx("button",{className:"nav-btn",onClick:()=>r("/"),title:"Home",children:n.jsx(Ba,{size:24})})}),n.jsx("div",{className:"nav-center",children:n.jsx("h1",{className:"signup-title",children:"Sign Up"})}),n.jsxs("div",{className:"nav-right",children:[n.jsx("button",{className:"nav-btn",onClick:()=>j(!m),title:m?"Switch to light mode":"Switch to dark mode",children:m?n.jsx(Ln,{size:24}):n.jsx(Un,{size:24})}),n.jsx("button",{className:"nav-btn",onClick:()=>r("/login"),title:"Login",children:n.jsx(Tt,{size:24})})]})]}),n.jsxs("div",{style:{maxWidth:"400px",margin:"20px auto",padding:"30px",border:"1px solid var(--border-color, #ccc)",borderRadius:"12px",fontFamily:"Arial, sans-serif",background:"var(--bg-secondary, #f9f9f9)",boxShadow:"0 4px 6px rgba(0, 0, 0, 0.1)"},children:[n.jsx("h2",{style:{textAlign:"center",marginBottom:"20px"},children:"Signup"}),p&&n.jsx("div",{style:{marginBottom:"15px",color:"green",textAlign:"center"},children:p}),c.submit&&n.jsx("div",{style:{marginBottom:"15px",color:"red",textAlign:"center"},children:c.submit}),n.jsxs("form",{onSubmit:_,children:[n.jsxs("div",{style:{marginBottom:"15px"},children:[n.jsx("label",{children:"Email"}),n.jsx("input",{type:"email",name:"email",value:s.email,onChange:v,style:{width:"100%",padding:"10px",borderRadius:"6px",border:c.email?"1px solid red":"1px solid #ccc"}}),c.email&&n.jsx("span",{style:{color:"red",fontSize:"12px"},children:c.email})]}),n.jsxs("div",{style:{marginBottom:"15px"},children:[n.jsx("label",{children:"Name"}),n.jsx("input",{type:"text",name:"name",value:s.name,onChange:v,placeholder:"Enter your full name",style:{width:"100%",padding:"10px",borderRadius:"6px",border:c.name?"1px solid red":"1px solid #ccc"}}),c.name&&n.jsx("span",{style:{color:"red",fontSize:"12px"},children:c.name})]}),n.jsxs("div",{style:{marginBottom:"15px"},children:[n.jsx("label",{children:"Password"}),n.jsx("input",{type:"password",name:"password",value:s.password,onChange:v,style:{width:"100%",padding:"10px",borderRadius:"6px",border:c.password?"1px solid red":"1px solid #ccc"}}),c.password&&n.jsx("span",{style:{color:"red",fontSize:"12px"},children:c.password})]}),n.jsxs("div",{style:{marginBottom:"15px"},children:[n.jsx("label",{children:"Confirm Password"}),n.jsx("input",{type:"password",name:"confirmPassword",value:s.confirmPassword,onChange:v,style:{width:"100%",padding:"10px",borderRadius:"6px",border:c.confirmPassword?"1px solid red":"1px solid #ccc"}}),c.confirmPassword&&n.jsx("span",{style:{color:"red",fontSize:"12px"},children:c.confirmPassword})]}),n.jsx("button",{type:"submit",disabled:y,style:{width:"100%",padding:"12px",background:y?"#ccc":"#007BFF",color:"#fff",border:"none",borderRadius:"6px",cursor:y?"not-allowed":"pointer",fontSize:"16px"},children:y?"Signing up...":"Sign Up"})]})]}),n.jsx("style",{children:`
        .signup-container {
          min-height: 100vh;
          background: var(--bg-primary, #f8fafc);
          color: var(--text-primary, #1e293b);
          transition: all 0.3s ease;
        }

        .signup-navbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 24px;
          background: var(--bg-secondary, #ffffff);
          border-bottom: 1px solid var(--border-color, #e2e8f0);
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .nav-left,
        .nav-right {
          display: flex;
          gap: 12px;
          align-items: center;
        }

        .nav-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          color: var(--text-secondary, #64748b);
        }

        .nav-btn:hover {
          background: var(--hover-bg, #f1f5f9);
          color: var(--accent-blue, #3b82f6);
        }

        .signup-title {
          margin: 0;
          font-size: 20px;
          font-weight: 700;
          color: var(--text-primary, #1e293b);
        }

        /* Light Mode Variables */
        :root {
          --bg-primary: #f8fafc;
          --bg-secondary: #ffffff;
          --text-primary: #1e293b;
          --text-secondary: #64748b;
          --border-color: #e2e8f0;
          --accent-blue: #3b82f6;
          --hover-bg: #f1f5f9;
        }

        /* Dark Mode Variables */
        .dark {
          --bg-primary: #0f172a;
          --bg-secondary: #1e293b;
          --text-primary: #f1f5f9;
          --text-secondary: #cbd5e1;
          --border-color: #475569;
          --accent-blue: #60a5fa;
          --hover-bg: #334155;
        }
      `})]})}function p2(){const r=nt(),[s,d]=h.useState({email:"",password:""}),[c,f]=h.useState({}),[p,g]=h.useState(!1),[y,b]=h.useState(()=>{const v=localStorage.getItem("darkMode");return v!==null?JSON.parse(v):window.matchMedia("(prefers-color-scheme: dark)").matches}),m=v=>{const{name:k,value:_}=v.target;d({...s,[k]:_}),f({...c,[k]:""})},j=async v=>{if(v.preventDefault(),!s.email||!s.password){f({submit:"Email and password are required"});return}g(!0);try{const k=await xe.auth.login(s.email,s.password);new URLSearchParams(window.location.search).get("add_account")==="true"?(ia.addProfile(k.user,k.token),r("/?account_added=true")):(Le.setAuth(k.token,k.user),ia.addProfile(k.user,k.token),setTimeout(()=>{r("/profile")},500))}catch(k){f({submit:k.message})}finally{g(!1)}};return h.useEffect(()=>{y?(document.body.classList.add("dark-mode"),localStorage.setItem("darkMode","true")):(document.body.classList.remove("dark-mode"),localStorage.setItem("darkMode","false"))},[y]),n.jsxs("div",{className:`login-container ${y?"dark":""}`,children:[n.jsxs("div",{className:"login-navbar",children:[n.jsx("div",{className:"nav-left",children:n.jsx("button",{className:"nav-btn",onClick:()=>r("/"),title:"Home",children:n.jsx(Ba,{size:24})})}),n.jsx("div",{className:"nav-center",children:n.jsx("h1",{className:"login-title",children:"Login"})}),n.jsxs("div",{className:"nav-right",children:[n.jsx("button",{className:"nav-btn",onClick:()=>b(!y),title:y?"Switch to light mode":"Switch to dark mode",children:y?n.jsx(Ln,{size:24}):n.jsx(Un,{size:24})}),n.jsx("button",{className:"nav-btn",onClick:()=>r("/signup"),title:"Sign Up",children:n.jsx(Tt,{size:24})})]})]}),n.jsxs("div",{className:"apple-card",style:{maxWidth:"400px",margin:"40px auto"},children:[n.jsx("h2",{style:{textAlign:"center",marginBottom:"24px",fontSize:"28px",fontWeight:"600",letterSpacing:"-0.5px",fontFamily:"var(--apple-font)"},children:"Login"}),c.submit&&n.jsx("div",{className:"apple-error-message",style:{marginBottom:"16px",padding:"12px",background:"rgba(255, 59, 48, 0.1)",borderRadius:"8px",color:"var(--apple-red)",textAlign:"center",fontSize:"14px"},children:c.submit}),n.jsxs("form",{onSubmit:j,children:[n.jsxs("div",{style:{marginBottom:"20px"},children:[n.jsx("label",{style:{display:"block",marginBottom:"8px",fontSize:"15px",fontWeight:"500",color:"var(--apple-gray-9)",fontFamily:"var(--apple-font)"},children:"Email"}),n.jsx("input",{type:"email",name:"email",value:s.email,onChange:m,className:"apple-input",style:{borderColor:c.email?"var(--apple-red)":void 0}}),c.email&&n.jsx("span",{style:{color:"var(--apple-red)",fontSize:"13px",marginTop:"4px",display:"block"},children:c.email})]}),n.jsxs("div",{style:{marginBottom:"20px"},children:[n.jsx("label",{style:{display:"block",marginBottom:"8px",fontSize:"15px",fontWeight:"500",color:"var(--apple-gray-9)",fontFamily:"var(--apple-font)"},children:"Password"}),n.jsx("input",{type:"password",name:"password",value:s.password,onChange:m,className:"apple-input",style:{borderColor:c.password?"var(--apple-red)":void 0}}),c.password&&n.jsx("span",{style:{color:"var(--apple-red)",fontSize:"13px",marginTop:"4px",display:"block"},children:c.password})]}),n.jsx("button",{type:"submit",disabled:p,className:"apple-button apple-button-primary",style:{width:"100%",marginBottom:"20px"},children:p?n.jsxs(n.Fragment,{children:[n.jsx("span",{className:"apple-spinner",style:{marginRight:"8px"}}),"Logging in..."]}):"Login"})]}),n.jsxs("p",{style:{textAlign:"center",marginTop:"24px",fontSize:"15px",color:"var(--apple-gray-6)",fontFamily:"var(--apple-font)"},children:["Don't have an account?"," ",n.jsx("a",{href:"/signup",style:{color:"var(--apple-blue)",textDecoration:"none",fontWeight:"500"},children:"Sign up"})]})]}),n.jsx("style",{children:`
        .login-container {
          min-height: 100vh;
          background: var(--bg-primary, #f8fafc);
          color: var(--text-primary, #1e293b);
          transition: all 0.3s ease;
        }

        .login-navbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 24px;
          background: var(--bg-secondary, #ffffff);
          border-bottom: 1px solid var(--border-color, #e2e8f0);
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .nav-left,
        .nav-right {
          display: flex;
          gap: 12px;
          align-items: center;
        }

        .nav-btn {
          background: transparent;
          border: none;
          cursor: pointer;
          padding: var(--apple-spacing-sm);
          border-radius: var(--apple-radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--apple-transition);
          color: var(--apple-gray-6);
          width: 36px;
          height: 36px;
        }

        .nav-btn:hover {
          background: var(--apple-gray-1);
          color: var(--apple-blue);
        }

        .nav-btn:active {
          transform: scale(0.95);
        }

        .login-title {
          margin: 0;
          font-size: 20px;
          font-weight: 700;
          color: var(--text-primary, #1e293b);
        }

        /* Light Mode Variables */
        :root {
          --bg-primary: #f8fafc;
          --bg-secondary: #ffffff;
          --text-primary: #1e293b;
          --text-secondary: #64748b;
          --border-color: #e2e8f0;
          --accent-blue: #3b82f6;
          --hover-bg: #f1f5f9;
        }

        /* Dark Mode Variables */
        .dark {
          --bg-primary: #0f172a;
          --bg-secondary: #1e293b;
          --text-primary: #f1f5f9;
          --text-secondary: #cbd5e1;
          --border-color: #475569;
          --accent-blue: #60a5fa;
          --hover-bg: #334155;
        }
      `})]})}const f2="http://localhost:8000";function h2(r){if(r.meme_type==="image"&&r.image){const s=r.image;return s.startsWith("http")?s:`${f2}${s}`}return null}function ws(r){return r>=1e6?`${(r/1e6).toFixed(1)}M`:r>=1e3?`${(r/1e3).toFixed(1)}K`:r.toString()}function g2({meme:r,isMobile:s,onLike:d,isLiked:c}){const f=un("(max-width:768px)")||s,p=h2(r),g=r.created_at?Math.floor((Date.now()-new Date(r.created_at).getTime())/(1e3*60*60)):0,y=g===0?"Just now":g===1?"1h ago":`${g}h ago`,b=r.like_count||r.likes?.length||0,m=r.comments_count||0;return f?n.jsx(pe,{to:`/memes/${r.id}`,style:{textDecoration:"none",color:"inherit",display:"block"},children:n.jsxs("article",{style:{display:"flex",gap:"12px",padding:"12px",background:"var(--bg-primary)",border:"1px solid var(--border)",borderRadius:"12px",marginBottom:"12px"},children:[n.jsx("div",{style:{flexShrink:0},children:p?n.jsx("img",{src:p,alt:r.title||r.content,style:{width:"100px",height:"100px",objectFit:"cover",borderRadius:"8px"}}):n.jsx("div",{style:{width:"100px",height:"100px",background:"var(--bg-secondary)",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"24px"},children:"😂"})}),n.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:"4px"},children:[n.jsxs("div",{style:{fontSize:"12px",color:"var(--text-secondary)",display:"flex",alignItems:"center",gap:"8px"},children:[n.jsxs("span",{style:{fontWeight:"500"},children:["@",r.user?.username||r.user?.email?.split("@")[0]||"user"]}),n.jsx("span",{children:"•"}),n.jsx("span",{children:y})]}),n.jsxs("div",{style:{fontSize:"12px",color:"var(--text-secondary)",display:"flex",gap:"12px",alignItems:"center"},children:[n.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"4px"},children:[n.jsx(ft,{size:12,fill:c?"#ef4444":"none",color:c?"#ef4444":"currentColor"}),ws(b)]}),n.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"4px"},children:[n.jsx(la,{size:12}),ws(m)]})]}),r.content&&n.jsx("div",{style:{fontSize:"13px",color:"var(--text-primary)",marginTop:"4px",lineHeight:"1.4"},children:r.content.length>100?`${r.content.substring(0,100)}...`:r.content})]})]})}):n.jsx(pe,{to:`/memes/${r.id}`,style:{textDecoration:"none",color:"inherit",display:"block"},children:n.jsxs("article",{style:{background:"var(--bg-primary)",border:"1px solid var(--border)",borderRadius:"12px",overflow:"hidden",transition:"transform 0.2s",cursor:"pointer"},onMouseEnter:j=>{j.currentTarget.style.transform="translateY(-4px)"},onMouseLeave:j=>{j.currentTarget.style.transform="translateY(0)"},children:[p?n.jsx("img",{src:p,alt:r.title||r.content,style:{width:"100%",height:"200px",objectFit:"cover"}}):n.jsx("div",{style:{width:"100%",height:"200px",background:"var(--bg-secondary)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"48px"},children:"😂"}),n.jsxs("div",{style:{padding:"12px"},children:[n.jsxs("div",{style:{fontSize:"12px",color:"var(--text-secondary)",marginBottom:"8px"},children:["@",r.user?.username||r.user?.email?.split("@")[0]||"user"," • ",y]}),r.content&&n.jsx("div",{style:{fontSize:"13px",color:"var(--text-primary)",marginBottom:"8px",lineHeight:"1.4"},children:r.content.length>80?`${r.content.substring(0,80)}...`:r.content}),n.jsxs("div",{style:{display:"flex",gap:"16px",fontSize:"12px",color:"var(--text-secondary)"},children:[n.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"4px"},children:[n.jsx(ft,{size:14,fill:c?"#ef4444":"none",color:c?"#ef4444":"currentColor"}),ws(b)]}),n.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"4px"},children:[n.jsx(la,{size:14}),ws(m)]})]})]})]})})}function fg({isOpen:r,onClose:s,onSuccess:d}){const[c,f]=h.useState(1),[p,g]=h.useState("image"),[y,b]=h.useState(null),[m,j]=h.useState(null),[v,k]=h.useState(""),[_,A]=h.useState([]),[z,T]=h.useState(""),[D,G]=h.useState(null),[K,q]=h.useState(""),[S,U]=h.useState(!1),[$,re]=h.useState(""),be=F=>{const ye=F.target.files[0];if(ye&&(b(ye),p==="image")){const H=new FileReader;H.onloadend=()=>j(H.result),H.readAsDataURL(ye)}},ie=F=>{if(F.key==="Enter"&&z.trim()){F.preventDefault();const ye=z.trim().replace("#","");_.includes(ye)||(A([..._,ye]),T(""))}},de=F=>{A(_.filter(ye=>ye!==F))},we=async()=>{if(!y&&p==="image"){re("Please select an image");return}if(v.length>150){re("Caption must be 150 characters or less");return}U(!0),re("");try{const F=new FormData;F.append("meme_type",p),y&&F.append("image",y),F.append("content",v),F.append("title",v.substring(0,50)),_.length>0&&F.append("hashtags",JSON.stringify(_)),D&&F.append("property_id",D),K&&F.append("location",K);const ye=await xe.memes.createMeme({meme_type:p,image:y,content:v,title:v.substring(0,50),hashtags:_.length>0?JSON.stringify(_):void 0,property_id:D||void 0,location:K||void 0});d&&d(ye),W()}catch(F){re(F.message||"Failed to upload meme")}finally{U(!1)}},W=()=>{f(1),b(null),j(null),k(""),A([]),T(""),G(null),q(""),re(""),s()};return r?n.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.5)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3,padding:"20px"},onClick:W,children:n.jsxs("div",{style:{background:"var(--bg-primary)",borderRadius:"16px",width:"100%",maxWidth:"600px",maxHeight:"90vh",overflow:"auto",boxShadow:"0 20px 60px rgba(0,0,0,0.3)"},onClick:F=>F.stopPropagation(),children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"24px",borderBottom:"1px solid var(--border)"},children:[n.jsx("h2",{style:{margin:0,fontSize:"24px",fontWeight:"600",color:"var(--text-primary)"},children:"Create New Meme"}),n.jsx("button",{onClick:W,style:{background:"none",border:"none",cursor:"pointer",color:"var(--text-secondary)",padding:"4px"},children:n.jsx(ra,{size:24})})]}),n.jsxs("div",{style:{padding:"24px"},children:[n.jsxs("div",{style:{display:"flex",gap:"12px",marginBottom:"24px"},children:[n.jsxs("button",{onClick:()=>g("image"),style:{flex:1,padding:"12px",border:`1px solid ${p==="image"?"var(--primary)":"var(--border)"}`,borderRadius:"8px",background:p==="image"?"var(--primary)":"transparent",color:p==="image"?"white":"var(--text-primary)",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",cursor:"pointer"},children:[n.jsx(vd,{size:18})," Gallery"]}),n.jsxs("button",{onClick:()=>g("video"),style:{flex:1,padding:"12px",border:`1px solid ${p==="video"?"var(--primary)":"var(--border)"}`,borderRadius:"8px",background:p==="video"?"var(--primary)":"transparent",color:p==="video"?"white":"var(--text-primary)",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",cursor:"pointer"},children:[n.jsx(Vg,{size:18})," Video"]}),n.jsxs("button",{onClick:()=>g("text"),style:{flex:1,padding:"12px",border:`1px solid ${p==="text"?"var(--primary)":"var(--border)"}`,borderRadius:"8px",background:p==="text"?"var(--primary)":"transparent",color:p==="text"?"white":"var(--text-primary)",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",cursor:"pointer"},children:[n.jsx($b,{size:18})," Text"]})]}),n.jsxs("div",{style:{marginBottom:"24px",minHeight:"200px",border:"2px dashed var(--border)",borderRadius:"12px",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",position:"relative"},onClick:()=>document.getElementById("meme-file-input").click(),children:[m?n.jsx("img",{src:m,alt:"Preview",style:{width:"100%",height:"100%",objectFit:"contain",borderRadius:"12px"}}):n.jsxs("div",{style:{textAlign:"center",padding:"40px"},children:[n.jsx(vd,{size:48,style:{color:"var(--text-secondary)",marginBottom:"12px"}}),n.jsx("div",{style:{fontSize:"14px",color:"var(--text-secondary)"},children:"Drag & Drop or Click to Upload"}),n.jsx("div",{style:{fontSize:"12px",color:"var(--text-secondary)",marginTop:"8px"},children:"📁 Choose File"})]}),n.jsx("input",{type:"file",id:"meme-file-input",accept:p==="image"?"image/*":"video/*",onChange:be,style:{display:"none"}})]}),n.jsxs("div",{style:{marginBottom:"16px"},children:[n.jsxs("label",{style:{display:"block",marginBottom:"8px",fontSize:"14px",fontWeight:"500",color:"var(--text-primary)"},children:["Caption: ",v.length,"/150"]}),n.jsx("textarea",{value:v,onChange:F=>k(F.target.value),placeholder:"When the landlord says no pets...",rows:3,maxLength:150,style:{width:"100%",padding:"12px",border:"1px solid var(--border)",borderRadius:"8px",background:"var(--bg-secondary)",color:"var(--text-primary)",fontSize:"14px",resize:"vertical"}})]}),n.jsxs("div",{style:{marginBottom:"16px"},children:[n.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"8px",fontSize:"14px",fontWeight:"500",color:"var(--text-primary)"},children:[n.jsx(P1,{size:16}),"Hashtags"]}),n.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",marginBottom:"8px"},children:_.map(F=>n.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"4px",padding:"6px 12px",background:"var(--primary)",color:"white",borderRadius:"20px",fontSize:"12px"},children:["#",F,n.jsx("button",{onClick:()=>de(F),style:{background:"none",border:"none",color:"white",cursor:"pointer",fontSize:"14px"},children:"×"})]},F))}),n.jsx("input",{type:"text",value:z,onChange:F=>T(F.target.value),onKeyPress:ie,placeholder:"#property #funny #home",style:{width:"100%",padding:"10px",border:"1px solid var(--border)",borderRadius:"8px",background:"var(--bg-secondary)",color:"var(--text-primary)",fontSize:"14px"}})]}),n.jsxs("div",{style:{marginBottom:"16px"},children:[n.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"8px",fontSize:"14px",fontWeight:"500",color:"var(--text-primary)"},children:[n.jsx(ha,{size:16}),"Tag Property (Optional)"]}),n.jsx("input",{type:"text",value:D||"",onChange:F=>G(F.target.value),placeholder:"Search for your listing...",style:{width:"100%",padding:"10px",border:"1px solid var(--border)",borderRadius:"8px",background:"var(--bg-secondary)",color:"var(--text-primary)",fontSize:"14px"}})]}),n.jsxs("div",{style:{marginBottom:"24px"},children:[n.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"8px",fontSize:"14px",fontWeight:"500",color:"var(--text-primary)"},children:[n.jsx(ha,{size:16}),"Location (Optional)"]}),n.jsx("input",{type:"text",value:K,onChange:F=>q(F.target.value),placeholder:"Add location",style:{width:"100%",padding:"10px",border:"1px solid var(--border)",borderRadius:"8px",background:"var(--bg-secondary)",color:"var(--text-primary)",fontSize:"14px"}})]}),$&&n.jsx("div",{style:{padding:"12px",background:"rgba(239, 68, 68, 0.1)",color:"#ef4444",borderRadius:"8px",marginBottom:"16px",fontSize:"14px"},children:$}),n.jsxs("div",{style:{display:"flex",gap:"12px"},children:[n.jsx("button",{onClick:W,style:{flex:1,padding:"12px",background:"transparent",border:"1px solid var(--border)",borderRadius:"8px",color:"var(--text-primary)",fontSize:"14px",fontWeight:"500",cursor:"pointer"},children:"Save Draft"}),n.jsx("button",{onClick:we,disabled:S,style:{flex:1,padding:"12px",background:S?"var(--text-secondary)":"var(--primary)",border:"none",borderRadius:"8px",color:"white",fontSize:"14px",fontWeight:"600",cursor:S?"not-allowed":"pointer"},children:S?"Posting...":"Post Meme"})]})]})]})}):null}function m2(){const r=nt(),s=un("(max-width:768px)"),[d,c]=h.useState([]),[f,p]=h.useState(0),[g,y]=h.useState(!1),[b,m]=h.useState(!1),[j,v]=h.useState("for-you"),[k,_]=h.useState(!0),A=h.useRef(null),[z,T]=h.useState(null),[D,G]=h.useState(null);h.useEffect(()=>{(async()=>{try{_(!0);const we=await xe.memes.getMemes();c(Array.isArray(we)?we:[])}catch(we){console.error("Error fetching memes:",we),c([])}finally{_(!1)}})()},[]);const K=50,q=de=>{G(null),T(de.targetTouches[0].clientY)},S=de=>{G(de.targetTouches[0].clientY)},U=()=>{if(!z||!D)return;const de=z-D,we=de>K,W=de<-K;we&&f<d.length-1&&p(f+1),W&&f>0&&p(f-1)},$=async de=>{try{await xe.memes.likeMeme(de),c(d.map(we=>we.id===de?{...we,likes:[...we.likes||[],{id:Le.getUser()?.id}],like_count:(we.like_count||0)+1}:we))}catch(we){console.error("Error liking meme:",we)}},be=(de=>{const we=[];return de.forEach((W,F)=>{we.push(W),(F+1)%5===0&&we.push({id:`ad-${F}`,isAd:!0,companyName:"MortgageDirect",description:"Find your dream home with MortgageDirect! Low rates available!",image:"https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400",url:"#"})}),we})(d),ie=be[f];return s?n.jsxs("div",{style:{minHeight:"100vh",background:"var(--bg-primary)",position:"relative",overflow:"hidden"},children:[n.jsxs("nav",{style:{position:"fixed",top:0,left:0,right:0,background:"var(--bg-secondary)",borderBottom:"1px solid var(--border)",padding:"12px 16px",zIndex:100,display:"flex",alignItems:"center",justifyContent:"space-between"},children:[n.jsx("button",{onClick:()=>r(-1),style:{background:"none",border:"none",color:"var(--text-primary)",cursor:"pointer"},children:n.jsx(Hr,{size:20})}),n.jsx("div",{style:{fontSize:"18px",fontWeight:"600",color:"var(--text-primary)"},children:"🏠"}),n.jsxs("div",{style:{display:"flex",gap:"12px"},children:[n.jsx("button",{onClick:()=>m(!0),style:{background:"none",border:"none",color:"var(--text-primary)",cursor:"pointer"},children:"⚙️"}),n.jsx("button",{onClick:()=>y(!0),style:{background:"none",border:"none",color:"var(--text-primary)",cursor:"pointer"},children:"➕"})]})]}),n.jsx("div",{style:{position:"fixed",top:"56px",left:0,right:0,background:"var(--bg-secondary)",borderBottom:"1px solid var(--border)",padding:"12px 16px",zIndex:99,overflowX:"auto",display:"flex",gap:"8px"},children:["For You","Following","Property","Agent","Funny","DIY","Trending"].map(de=>n.jsx("button",{onClick:()=>v(de.toLowerCase().replace(" ","-")),style:{padding:"6px 16px",background:j===de.toLowerCase().replace(" ","-")?"var(--primary)":"var(--bg-primary)",border:"none",borderRadius:"20px",color:j===de.toLowerCase().replace(" ","-")?"white":"var(--text-primary)",fontSize:"13px",fontWeight:"500",whiteSpace:"nowrap",cursor:"pointer"},children:de},de))}),n.jsx("div",{ref:A,style:{marginTop:"112px",height:"calc(100vh - 112px)",overflow:"hidden",position:"relative"},onTouchStart:q,onTouchMove:S,onTouchEnd:U,children:ie&&n.jsxs("div",{style:{position:"absolute",inset:0,display:"flex",flexDirection:"column",justifyContent:"space-between",padding:"16px"},children:[ie.isAd?n.jsx("div",{style:{height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:n.jsx(Ms,{ad:ie,isMobile:!0})}):n.jsxs(n.Fragment,{children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"16px"},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[n.jsx("div",{style:{width:"40px",height:"40px",borderRadius:"50%",background:"var(--primary)",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontWeight:"600"},children:ie.user?.email?.charAt(0).toUpperCase()||"U"}),n.jsxs("div",{children:[n.jsxs("div",{style:{fontSize:"14px",fontWeight:"600",color:"var(--text-primary)"},children:["@",ie.user?.username||ie.user?.email?.split("@")[0]||"user"]}),n.jsx("div",{style:{fontSize:"12px",color:"var(--text-secondary)"},children:"✨ 2h ago"})]})]}),n.jsx("button",{style:{background:"none",border:"none",color:"var(--text-primary)",cursor:"pointer"},children:n.jsx(Bd,{size:20})})]}),n.jsx("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"16px"},children:ie.meme_type==="image"&&ie.image?n.jsx("img",{src:ie.image.startsWith("http")?ie.image:`http://localhost:8000${ie.image}`,alt:ie.title||ie.content,style:{maxWidth:"100%",maxHeight:"100%",objectFit:"contain",borderRadius:"12px"}}):n.jsx("div",{style:{fontSize:"18px",color:"var(--text-primary)",textAlign:"center",padding:"40px",lineHeight:"1.6"},children:ie.content||ie.title||"Meme content"})}),n.jsxs("div",{children:[n.jsxs("div",{style:{display:"flex",gap:"24px",marginBottom:"16px",justifyContent:"center"},children:[n.jsxs("button",{onClick:()=>$(ie.id),style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"4px",background:"none",border:"none",color:"var(--text-primary)",cursor:"pointer"},children:[n.jsx(ft,{size:24,fill:ie.likes?.some(de=>de.id===Le.getUser()?.id)?"#ef4444":"none",color:ie.likes?.some(de=>de.id===Le.getUser()?.id)?"#ef4444":"currentColor"}),n.jsx("span",{style:{fontSize:"12px"},children:(ie.like_count||0).toLocaleString()})]}),n.jsxs("button",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"4px",background:"none",border:"none",color:"var(--text-primary)",cursor:"pointer"},children:[n.jsx(la,{size:24}),n.jsx("span",{style:{fontSize:"12px"},children:(ie.comments_count||0).toLocaleString()})]}),n.jsxs("button",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"4px",background:"none",border:"none",color:"var(--text-primary)",cursor:"pointer"},children:[n.jsx(Ud,{size:24}),n.jsx("span",{style:{fontSize:"12px"},children:"Share"})]}),n.jsxs("button",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"4px",background:"none",border:"none",color:"var(--text-primary)",cursor:"pointer"},children:[n.jsx(Ug,{size:24}),n.jsx("span",{style:{fontSize:"12px"},children:"Save"})]})]}),n.jsx("div",{style:{fontSize:"14px",color:"var(--text-primary)",marginBottom:"8px"},children:ie.content||ie.title||"When the landlord says no pets but you brought a cat anyway... 😂"}),n.jsx("div",{style:{fontSize:"12px",color:"var(--primary)",marginBottom:"8px"},children:"#renterlife #propertyhumor #cats"}),ie.property&&n.jsx("button",{style:{padding:"8px 16px",background:"var(--primary)",border:"none",borderRadius:"8px",color:"white",fontSize:"12px",fontWeight:"500",cursor:"pointer",marginTop:"8px"},children:"🏠 View Property"})]})]}),n.jsx("div",{style:{position:"absolute",bottom:"20px",left:"50%",transform:"translateX(-50%)",fontSize:"12px",color:"var(--text-secondary)"},children:"⬆️ Swipe Up"})]})}),n.jsx(fg,{isOpen:g,onClose:()=>y(!1),onSuccess:()=>{window.location.reload()}}),n.jsx(Ds,{isOpen:b,onClose:()=>m(!1)})]}):n.jsxs("div",{style:{minHeight:"100vh",background:"var(--bg-primary)",paddingTop:"80px"},children:[n.jsxs("nav",{style:{position:"fixed",top:0,left:0,right:0,background:"var(--bg-secondary)",borderBottom:"1px solid var(--border)",padding:"16px 32px",zIndex:100,display:"flex",alignItems:"center",justifyContent:"space-between"},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"24px"},children:[n.jsx("button",{onClick:()=>r(-1),style:{background:"none",border:"none",color:"var(--text-primary)",cursor:"pointer"},children:n.jsx(Hr,{size:20})}),n.jsx("div",{style:{fontSize:"20px",fontWeight:"700"},children:"🏠 HouseHunt"}),n.jsx("div",{style:{display:"flex",gap:"8px"},children:["🔥 For You","👥 Following","🏠 Property","👔 Agent","😂 Funny"].map(de=>n.jsx("button",{onClick:()=>v(de.toLowerCase().replace(" ","-")),style:{padding:"8px 16px",background:j===de.toLowerCase().replace(" ","-")?"var(--primary)":"transparent",border:"none",borderRadius:"8px",color:j===de.toLowerCase().replace(" ","-")?"white":"var(--text-primary)",fontSize:"14px",cursor:"pointer"},children:de},de))})]}),n.jsxs("div",{style:{display:"flex",gap:"12px"},children:[n.jsx("button",{onClick:()=>m(!0),style:{padding:"8px 16px",background:"var(--bg-primary)",border:"1px solid var(--border)",borderRadius:"8px",color:"var(--text-primary)",cursor:"pointer"},children:"⚙️ Filters"}),n.jsx("button",{onClick:()=>y(!0),style:{padding:"8px 16px",background:"var(--primary)",border:"none",borderRadius:"8px",color:"white",cursor:"pointer"},children:"➕ Upload"})]})]}),n.jsx("div",{style:{maxWidth:"1400px",margin:"0 auto",padding:"32px"},children:n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"24px"},children:be.map(de=>de.isAd?n.jsx(Ms,{ad:de,isMobile:!1},de.id):n.jsx(g2,{meme:de,isMobile:!1,onLike:$,isLiked:de.likes?.some(we=>we.id===Le.getUser()?.id)},de.id))})}),n.jsx(fg,{isOpen:g,onClose:()=>y(!1),onSuccess:()=>{window.location.reload()}}),n.jsx(Ds,{isOpen:b,onClose:()=>m(!1)})]})}const x2="http://localhost:8000";function i0({onFilterClick:r,filterCount:s=0}){const d=nt(),c=$t(),{theme:f,toggleTheme:p}=Ld(),[g,y]=h.useState(null),[b,m]=h.useState(typeof window<"u"&&window.innerWidth<768);On.useEffect(()=>{const _=()=>m(window.innerWidth<768);return window.addEventListener("resize",_),()=>window.removeEventListener("resize",_)},[]),On.useEffect(()=>{Le.getToken()&&xe.auth.getCurrentUser().then(y).catch(()=>{})},[]);const j=ia.getActiveProfile(),v=g?.profile_picture||j?.avatar?(g?.profile_picture||j?.avatar).startsWith("http")?g?.profile_picture||j?.avatar:`${x2}${g?.profile_picture||j?.avatar}`:null,k=new URLSearchParams(c.search).get("type")||"";return n.jsxs("header",{className:"unified-navbar",style:{background:"var(--bg-primary)",borderBottom:"1px solid var(--border)"},children:[n.jsxs("button",{type:"button",onClick:()=>d("/"),style:{display:"flex",alignItems:"center",gap:8,padding:"8px 12px",border:"none",background:"transparent",color:"var(--text-primary)",cursor:"pointer",borderRadius:"var(--radius)",fontSize:"var(--font-size-sm)"},children:[n.jsx(Hr,{size:20}),!b&&"Back to Home"]}),n.jsxs("nav",{className:"nav-center",style:{flex:1,display:"flex",alignItems:"center",gap:8,justifyContent:"center"},children:[n.jsxs(pe,{to:"/listings?type=rent",className:`nav-link ${k==="rent"||!k&&c.pathname==="/listings"?"active":""}`,style:{fontSize:"var(--font-size-sm)",padding:"6px 16px"},children:[n.jsx(Hg,{size:18}),"Rent"]}),n.jsxs(pe,{to:"/listings?type=sale",className:`nav-link ${k==="sale"?"active":""}`,style:{fontSize:"var(--font-size-sm)",padding:"6px 16px"},children:[n.jsx(Tb,{size:18}),"Sale"]}),n.jsxs(pe,{to:"/services",className:`nav-link ${c.pathname==="/services"?"active":""}`,style:{fontSize:"var(--font-size-sm)",padding:"6px 16px"},children:[n.jsx(Lg,{size:18}),"Services"]})]}),n.jsxs("div",{className:"nav-right",style:{display:"flex",alignItems:"center",gap:8},children:[n.jsx("button",{type:"button",className:"icon-btn",onClick:()=>d("/users/search"),"aria-label":"Search",style:{width:40,height:40,display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"var(--radius)",border:"1px solid var(--border)",background:"var(--bg-secondary)",color:"var(--text-primary)",cursor:"pointer"},children:n.jsx(La,{size:18})}),r&&n.jsxs("button",{type:"button",className:"icon-btn",onClick:r,"aria-label":"Filters",style:{width:40,height:40,display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"var(--radius)",border:"1px solid var(--border)",background:"var(--bg-secondary)",color:"var(--text-primary)",cursor:"pointer",position:"relative"},children:[n.jsx(Wr,{size:18}),s>0&&n.jsx("span",{style:{position:"absolute",top:4,right:4,minWidth:18,height:18,borderRadius:9,background:"var(--error)",color:"#fff",fontSize:10,display:"flex",alignItems:"center",justifyContent:"center",padding:"0 4px"},children:s>99?"99+":s})]}),n.jsx("button",{type:"button",onClick:p,className:"icon-btn","aria-label":`Switch to ${f==="light"?"dark":"light"} mode`,style:{width:40,height:40,display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"var(--radius)",border:"1px solid var(--border)",background:"var(--bg-secondary)",color:"var(--text-primary)",cursor:"pointer"},children:f==="light"?n.jsx(Un,{size:18}):n.jsx(Ln,{size:18})}),g&&n.jsx(n0,{user:g,trigger:n.jsx("button",{type:"button",className:"icon-btn",style:{width:40,height:40,display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"50%",border:"1px solid var(--border)",background:v?"transparent":"var(--bg-secondary)",color:"var(--text-primary)",cursor:"pointer",overflow:"hidden"},children:v?n.jsx("img",{src:v,alt:"",style:{width:"100%",height:"100%",objectFit:"cover"}}):n.jsx("span",{style:{fontSize:"var(--font-size-sm)"},children:"U"})}),isMobile:b})]})]})}const y2="http://localhost:8000";function hg(r){const s=r?.images?.[0]?.image;return s?s.startsWith("http")?s:`${y2}${s}`:"https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&auto=format&fit=crop"}function gg(r){return r==null?"":`KES ${Number(r).toLocaleString()}`}function b2({house:r,isMobile:s=!1}){const d=c=>{c.preventDefault(),c.stopPropagation()};return s?n.jsx(pe,{to:`/listings/${r.id}`,style:{textDecoration:"none",color:"inherit",display:"block"},children:n.jsxs("article",{className:"property-card",style:{display:"flex",gap:"var(--spacing-sm)",padding:"var(--spacing-sm)",background:"var(--bg-primary)",border:"1px solid var(--border)",borderRadius:"var(--radius-md)",boxShadow:"var(--shadow)",minHeight:100},children:[n.jsxs("div",{style:{width:80,height:80,minWidth:80,minHeight:80,borderRadius:"var(--radius)",overflow:"hidden",background:"var(--bg-secondary)",position:"relative",flexShrink:0},children:[n.jsx("img",{src:hg(r),alt:"",style:{width:"100%",height:"100%",objectFit:"cover"}}),r.owner?.is_verified&&n.jsx("span",{style:{position:"absolute",bottom:4,left:4,fontSize:9,padding:"2px 4px",borderRadius:4,background:"rgba(16,185,129,0.9)",color:"#fff"},children:"✓"})]}),n.jsxs("div",{style:{flex:1,minWidth:0,display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[n.jsxs("div",{children:[n.jsx("h3",{style:{fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-semibold)",marginBottom:4,color:"var(--text-primary)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:r.title}),n.jsxs("p",{style:{fontSize:"var(--font-size-xs)",color:"var(--text-secondary)",marginBottom:6,display:"flex",alignItems:"center",gap:4,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:[n.jsx(ha,{size:12})," ",r.locality||r.location||"—"]}),n.jsxs("div",{style:{display:"flex",gap:8,fontSize:"var(--font-size-xs)",color:"var(--text-secondary)",flexWrap:"wrap"},children:[n.jsxs("span",{style:{display:"flex",alignItems:"center",gap:2},children:[n.jsx(qr,{size:12})," ",r.bedrooms??"—"]}),n.jsxs("span",{style:{display:"flex",alignItems:"center",gap:2},children:[n.jsx(Yr,{size:12})," ",r.bathrooms??"—"]}),n.jsxs("span",{style:{display:"flex",alignItems:"center",gap:2},children:[n.jsx(Gr,{size:12})," ",r.area?`${r.area}m²`:"—"]})]})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:"var(--spacing-xs)"},children:[n.jsx("p",{style:{fontSize:"var(--font-size-base)",fontWeight:"var(--font-weight-bold)",color:"var(--accent)",margin:0},children:gg(r.price)}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[n.jsx("button",{type:"button",onClick:d,style:{width:44,height:44,minWidth:44,minHeight:44,border:"none",background:"transparent",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"var(--radius)",color:r.is_liked?"var(--error)":"var(--text-secondary)"},children:n.jsx(ft,{size:20,fill:r.is_liked?"currentColor":"none"})}),r.views_count>0&&n.jsxs("span",{style:{fontSize:"var(--font-size-xs)",color:"var(--text-secondary)",display:"flex",alignItems:"center",gap:4},children:[n.jsx(dt,{size:14})," ",r.views_count]})]})]})]})]})}):n.jsx(pe,{to:`/listings/${r.id}`,style:{textDecoration:"none",color:"inherit"},children:n.jsxs("article",{className:"property-card",style:{background:"var(--bg-primary)",borderRadius:"var(--radius-md)",overflow:"hidden",border:"1px solid var(--border)",boxShadow:"var(--shadow)",transition:"all var(--transition)"},onMouseEnter:c=>{c.currentTarget.style.boxShadow="var(--shadow-md)",c.currentTarget.style.transform="translateY(-2px)"},onMouseLeave:c=>{c.currentTarget.style.boxShadow="var(--shadow)",c.currentTarget.style.transform="translateY(0)"},children:[n.jsxs("div",{className:"image-container",style:{width:"100%",height:0,paddingBottom:"33.333%",position:"relative",background:"var(--bg-secondary)",overflow:"hidden"},children:[n.jsx("img",{src:hg(r),alt:"",style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover"}}),n.jsx("button",{type:"button",onClick:d,style:{position:"absolute",top:12,right:12,width:40,height:40,borderRadius:"50%",border:"none",background:"#fff",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"},children:n.jsx(ft,{size:20,color:r.is_liked?"#ef4444":"#666",fill:r.is_liked?"#ef4444":"none"})}),r.owner?.is_verified&&n.jsx("span",{style:{position:"absolute",bottom:12,left:12,fontSize:11,padding:"4px 8px",borderRadius:6,background:"rgba(16,185,129,0.9)",color:"#fff"},children:"Verified"})]}),n.jsxs("div",{className:"content",style:{padding:"var(--spacing-md)"},children:[n.jsx("p",{className:"price",style:{fontSize:"var(--font-size-xl)",fontWeight:"var(--font-weight-bold)",color:"var(--text-primary)",marginBottom:"var(--spacing-xs)"},children:gg(r.price)}),n.jsx("h3",{className:"title",style:{fontSize:"var(--font-size-base)",fontWeight:"var(--font-weight-semibold)",color:"var(--text-primary)",marginBottom:"var(--spacing-xs)"},children:r.title}),n.jsxs("p",{className:"location",style:{fontSize:"var(--font-size-sm)",color:"var(--text-secondary)",display:"flex",alignItems:"center",gap:6,marginBottom:"var(--spacing-md)"},children:[n.jsx(ha,{size:14})," ",r.locality||r.location||"—"]}),n.jsxs("div",{className:"details",style:{display:"flex",gap:"var(--spacing-md)",fontSize:"var(--font-size-sm)",color:"var(--text-secondary)",marginBottom:"var(--spacing-md)"},children:[n.jsxs("span",{className:"details-item",style:{display:"flex",alignItems:"center",gap:4},children:[n.jsx(qr,{size:16})," ",r.bedrooms??"—"]}),n.jsxs("span",{className:"details-item",style:{display:"flex",alignItems:"center",gap:4},children:[n.jsx(Yr,{size:16})," ",r.bathrooms??"—"]}),n.jsxs("span",{className:"details-item",style:{display:"flex",alignItems:"center",gap:4},children:[n.jsx(Gr,{size:16})," ",r.area?`${r.area} m²`:"—"]})]}),n.jsxs("div",{className:"actions",style:{display:"flex",alignItems:"center",gap:"var(--spacing-md)",paddingTop:"var(--spacing-md)",borderTop:"1px solid var(--border-light)"},children:[n.jsxs("button",{className:`action-btn ${r.is_liked?"liked":""}`,style:{display:"flex",alignItems:"center",gap:"var(--spacing-xs)",padding:"var(--spacing-xs) var(--spacing-sm)",border:"none",background:"transparent",color:r.is_liked?"var(--error)":"var(--text-secondary)",fontSize:"var(--font-size-sm)",cursor:"pointer",borderRadius:"var(--radius)"},children:[n.jsx(ft,{size:16})," ",r.likes_count||0]}),n.jsxs("button",{className:"action-btn",style:{display:"flex",alignItems:"center",gap:"var(--spacing-xs)",padding:"var(--spacing-xs) var(--spacing-sm)",border:"none",background:"transparent",color:"var(--text-secondary)",fontSize:"var(--font-size-sm)",cursor:"pointer",borderRadius:"var(--radius)"},children:[n.jsx(dt,{size:16})," ",r.views_count||0]})]})]})]})})}function v2(){const[r]=Md(),[s,d]=h.useState([]),[c,f]=h.useState(!0),[p,g]=h.useState(""),[y,b]=h.useState(""),[m,j]=h.useState(r.get("type")||""),[v,k]=h.useState("newest"),[_,A]=h.useState(!1),[z,T]=h.useState(typeof window<"u"&&window.innerWidth<640);h.useEffect(()=>{const S=()=>T(window.innerWidth<640);return window.addEventListener("resize",S),()=>window.removeEventListener("resize",S)},[]),h.useEffect(()=>{const S=r.get("type");S&&j(S)},[r]),h.useEffect(()=>{xe.houses.getHouses().then(S=>d(Array.isArray(S)?S:[])).catch(()=>d([])).finally(()=>f(!1))},[]);let D=[...s];if(p.trim()){const S=p.toLowerCase();D=D.filter(U=>U.title&&U.title.toLowerCase().includes(S)||U.description&&U.description.toLowerCase().includes(S)||U.locality&&U.locality.toLowerCase().includes(S)||U.location&&U.location.toLowerCase().includes(S))}y&&(D=D.filter(S=>S.house_type===y)),m&&(D=D.filter(S=>S.listing_type===m)),v==="price_asc"&&D.sort((S,U)=>(Number(S.price)||0)-(Number(U.price)||0)),v==="price_desc"&&D.sort((S,U)=>(Number(U.price)||0)-(Number(S.price)||0)),v==="newest"&&D.sort((S,U)=>new Date(U.created_at)-new Date(S.created_at));const G=[...new Set(s.map(S=>S.house_type).filter(Boolean))],K=[...new Set(s.map(S=>S.listing_type).filter(Boolean))],q=[y,m,v].filter(Boolean).length;return n.jsxs(n.Fragment,{children:[n.jsx(i0,{onFilterClick:()=>A(!_),filterCount:q}),n.jsxs("div",{style:{maxWidth:1280,margin:"0 auto",padding:"var(--spacing-md)",paddingTop:"var(--spacing-lg)"},children:[n.jsxs("div",{style:{marginBottom:32},children:[n.jsx("h1",{style:{fontSize:28,fontWeight:600,marginBottom:8,color:"var(--minimal-text)"},children:"Browse Listings"}),n.jsx("p",{style:{color:"var(--minimal-text-secondary)",fontSize:16},children:"All approved properties"})]}),n.jsxs("div",{style:{display:"flex",gap:16,marginBottom:24,flexWrap:"wrap"},children:[n.jsxs("div",{style:{flex:"1 1 300px",position:"relative"},children:[n.jsx(La,{size:20,style:{position:"absolute",left:14,top:"50%",transform:"translateY(-50%)",color:"var(--minimal-text-secondary)"}}),n.jsx("input",{type:"text",className:"search-input",placeholder:"Search by title, location...",value:p,onChange:S=>g(S.target.value),style:{paddingLeft:44,width:"100%"}})]}),n.jsxs("button",{type:"button",onClick:()=>A(S=>!S),style:{display:"flex",alignItems:"center",gap:8,padding:"12px 20px",borderRadius:8,border:"1px solid var(--minimal-border)",background:"#fff",cursor:"pointer",color:"var(--minimal-text)"},children:[n.jsx(Wr,{size:20})," Filters"]}),n.jsxs("select",{value:v,onChange:S=>k(S.target.value),style:{padding:"12px 16px",borderRadius:8,border:"1px solid var(--minimal-border)",background:"#fff",color:"var(--minimal-text)",minWidth:160},children:[n.jsx("option",{value:"newest",children:"Newest first"}),n.jsx("option",{value:"price_asc",children:"Price: Low to High"}),n.jsx("option",{value:"price_desc",children:"Price: High to Low"})]})]}),_&&n.jsxs("div",{style:{display:"flex",gap:16,marginBottom:24,flexWrap:"wrap",padding:16,background:"var(--minimal-bg-secondary)",borderRadius:12},children:[n.jsxs("div",{children:[n.jsx("label",{style:{display:"block",fontSize:12,color:"var(--minimal-text-secondary)",marginBottom:4},children:"Property type"}),n.jsxs("select",{value:y,onChange:S=>b(S.target.value),style:{padding:8,borderRadius:8,border:"1px solid var(--minimal-border)",minWidth:140},children:[n.jsx("option",{value:"",children:"All"}),G.map(S=>n.jsx("option",{value:S,children:S},S))]})]}),n.jsxs("div",{children:[n.jsx("label",{style:{display:"block",fontSize:12,color:"var(--minimal-text-secondary)",marginBottom:4},children:"Listing type"}),n.jsxs("select",{value:m,onChange:S=>j(S.target.value),style:{padding:8,borderRadius:8,border:"1px solid var(--minimal-border)",minWidth:140},children:[n.jsx("option",{value:"",children:"All"}),K.map(S=>n.jsx("option",{value:S,children:S},S))]})]})]}),c?n.jsx("p",{style:{color:"var(--minimal-text-secondary)"},children:"Loading listings…"}):D.length===0?n.jsxs("div",{style:{textAlign:"center",padding:48,color:"var(--minimal-text-secondary)"},children:[n.jsx("p",{children:"No listings match your filters."}),n.jsx(pe,{to:"/listings",style:{color:"var(--minimal-accent)",marginTop:8,display:"inline-block"},children:"Clear filters"})]}):n.jsx("div",{style:{display:"grid",gridTemplateColumns:z?"1fr":"repeat(auto-fill, minmax(300px, 1fr))",gap:z?12:24},children:D.map(S=>n.jsx(b2,{house:S,isMobile:z},S.id))})]})]})}function j2(){const[r]=Md(),s=un("(max-width:768px)"),[d,c]=h.useState([]),[f,p]=h.useState(!0),[g,y]=h.useState("grid"),[b,m]=h.useState(!1),[j,v]=h.useState({priceRange:[0,1e7],propertyTypes:[],bedrooms:"any",bathrooms:"any",squareFootage:{min:"",max:""},features:[]}),[k,_]=h.useState("recent"),[A,z]=h.useState(1),[T,D]=h.useState(0);h.useEffect(()=>{(async()=>{try{p(!0);const re=await xe.houses.getHouses(),be=Array.isArray(re)?re.map(ie=>({id:ie.id,title:ie.title,name:ie.title,house_type:ie.house_type,listing_type:ie.listing_type,type:ie.house_type,locality:ie.locality||ie.city,city:ie.city,price:parseFloat(ie.price),bedrooms:ie.bedrooms,bathrooms:ie.bathrooms,area:ie.area,images:ie.images||[],owner:ie.owner,created_at:ie.created_at,likes_count:ie.likes_count||0,views_count:ie.views_count||0})):[];c(be),D(be.length)}catch(re){console.error("Error fetching houses:",re)}finally{p(!1)}})()},[]);const K=[...d.filter($=>!(j.priceRange[0]>0&&$.price<j.priceRange[0]||j.priceRange[1]<1e7&&$.price>j.priceRange[1]||j.propertyTypes.length>0&&!j.propertyTypes.includes($.house_type)||j.bedrooms!=="any"&&$.bedrooms<parseInt(j.bedrooms)||j.bathrooms!=="any"&&$.bathrooms<parseInt(j.bathrooms)))].sort(($,re)=>{switch(k){case"price-low":return $.price-re.price;case"price-high":return re.price-$.price;default:return new Date(re.created_at)-new Date($.created_at)}}),S=($=>{const re=[];return $.forEach((be,ie)=>{re.push(be),(ie+1)%8===0&&re.push({id:`ad-${ie}`,isAd:!0,companyName:"MortgageDirect",description:"Low rates available!",image:"https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400"})}),re})(K.slice((A-1)*24,A*24)),U=Math.ceil(K.length/24);return n.jsxs("div",{style:{minHeight:"100vh",background:"var(--bg-primary)",paddingBottom:s?"80px":"0"},children:[n.jsxs("nav",{style:{background:"var(--bg-secondary)",borderBottom:"1px solid var(--border)",padding:s?"12px 16px":"16px 32px",position:"sticky",top:0,zIndex:100},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"16px",maxWidth:"1400px",margin:"0 auto"},children:[n.jsxs(pe,{to:"/",style:{display:"flex",alignItems:"center",gap:"8px",textDecoration:"none",color:"var(--text-primary)"},children:[n.jsx("div",{style:{fontSize:"24px"},children:"🏠"}),!s&&n.jsx("span",{style:{fontSize:"20px",fontWeight:"700"},children:"HouseHunt"})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[n.jsx("span",{style:{fontSize:"14px",color:"var(--text-secondary)"},children:"Properties"}),!s&&n.jsxs("div",{style:{display:"flex",gap:"4px",background:"var(--bg-primary)",borderRadius:"8px",padding:"4px"},children:[n.jsx("button",{onClick:()=>y("grid"),style:{padding:"8px",background:g==="grid"?"var(--primary)":"transparent",border:"none",borderRadius:"6px",color:g==="grid"?"white":"var(--text-primary)",cursor:"pointer"},children:n.jsx(K1,{size:18})}),n.jsx("button",{onClick:()=>y("map"),style:{padding:"8px",background:g==="map"?"var(--primary)":"transparent",border:"none",borderRadius:"6px",color:g==="map"?"white":"var(--text-primary)",cursor:"pointer"},children:n.jsx(Ti,{size:18})}),n.jsx("button",{onClick:()=>y("list"),style:{padding:"8px",background:g==="list"?"var(--primary)":"transparent",border:"none",borderRadius:"6px",color:g==="list"?"white":"var(--text-primary)",cursor:"pointer"},children:n.jsx(lb,{size:18})})]}),n.jsxs("button",{onClick:()=>m(!0),style:{padding:"8px 16px",background:"var(--bg-primary)",border:"1px solid var(--border)",borderRadius:"8px",color:"var(--text-primary)",fontSize:"14px",cursor:"pointer",display:"flex",alignItems:"center",gap:"8px"},children:[n.jsx(Wr,{size:16})," Filters"]})]})]}),s&&n.jsxs("div",{style:{marginTop:"12px",display:"flex",gap:"8px",overflowX:"auto",paddingBottom:"8px"},children:[n.jsx("button",{onClick:()=>y("grid"),style:{padding:"8px 16px",background:g==="grid"?"var(--primary)":"var(--bg-primary)",border:"none",borderRadius:"8px",color:g==="grid"?"white":"var(--text-primary)",fontSize:"13px",whiteSpace:"nowrap",cursor:"pointer"},children:"Grid"}),n.jsx("button",{onClick:()=>y("map"),style:{padding:"8px 16px",background:g==="map"?"var(--primary)":"var(--bg-primary)",border:"none",borderRadius:"8px",color:g==="map"?"white":"var(--text-primary)",fontSize:"13px",whiteSpace:"nowrap",cursor:"pointer"},children:"Map"}),n.jsx("button",{onClick:()=>y("list"),style:{padding:"8px 16px",background:g==="list"?"var(--primary)":"var(--bg-primary)",border:"none",borderRadius:"8px",color:g==="list"?"white":"var(--text-primary)",fontSize:"13px",whiteSpace:"nowrap",cursor:"pointer"},children:"List"}),n.jsxs("select",{value:k,onChange:$=>_($.target.value),style:{padding:"8px 12px",border:"1px solid var(--border)",borderRadius:"8px",background:"var(--bg-primary)",color:"var(--text-primary)",fontSize:"13px"},children:[n.jsx("option",{value:"recent",children:"Recent"}),n.jsx("option",{value:"price-low",children:"Price: Low to High"}),n.jsx("option",{value:"price-high",children:"Price: High to Low"})]})]})]}),n.jsxs("div",{style:{maxWidth:"1400px",margin:"0 auto",padding:s?"16px":"32px"},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"24px",flexWrap:"wrap",gap:"16px"},children:[n.jsxs("div",{children:[n.jsxs("div",{style:{fontSize:s?"16px":"20px",fontWeight:"600",color:"var(--text-primary)",marginBottom:"4px"},children:[T," properties found",r.get("location")?` in ${r.get("location")}`:""]}),n.jsxs("div",{style:{fontSize:"14px",color:"var(--text-secondary)"},children:["Showing ",(A-1)*24+1,"-",Math.min(A*24,T)," of ",T]})]}),!s&&n.jsxs("select",{value:k,onChange:$=>_($.target.value),style:{padding:"10px 16px",border:"1px solid var(--border)",borderRadius:"8px",background:"var(--bg-secondary)",color:"var(--text-primary)",fontSize:"14px"},children:[n.jsx("option",{value:"recent",children:"Sort By: Most Recent"}),n.jsx("option",{value:"price-low",children:"Price: Low to High"}),n.jsx("option",{value:"price-high",children:"Price: High to Low"})]})]}),g==="map"&&n.jsx("div",{style:{height:"600px",background:"var(--bg-secondary)",borderRadius:"12px",border:"1px solid var(--border)",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--text-secondary)"},children:n.jsxs("div",{style:{textAlign:"center"},children:[n.jsx(Ti,{size:48,style:{marginBottom:"16px",opacity:.5}}),n.jsx("div",{children:"Map view coming soon"})]})}),g!=="map"&&n.jsxs(n.Fragment,{children:[f?n.jsx("div",{style:{textAlign:"center",padding:"60px",color:"var(--text-secondary)"},children:"Loading properties..."}):S.length===0?n.jsx("div",{style:{textAlign:"center",padding:"60px",color:"var(--text-secondary)"},children:"No properties match your filters."}):n.jsx("div",{style:{display:"grid",gridTemplateColumns:g==="list"||s?"1fr":"repeat(4, 1fr)",gap:"20px"},children:S.map($=>$.isAd?n.jsx(Ms,{ad:$,isMobile:s},$.id):n.jsx(Ei,{house:$,isMobile:g==="list"||s,showViews:!0},$.id))}),U>1&&n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",marginTop:"40px"},children:[n.jsx("button",{onClick:()=>z(Math.max(1,A-1)),disabled:A===1,style:{padding:"10px 16px",background:A===1?"var(--bg-secondary)":"var(--bg-primary)",border:"1px solid var(--border)",borderRadius:"8px",color:A===1?"var(--text-secondary)":"var(--text-primary)",cursor:A===1?"not-allowed":"pointer"},children:n.jsx($r,{size:18})}),Array.from({length:Math.min(5,U)},($,re)=>{const be=A<=3?re+1:A-2+re;return be>U?null:n.jsx("button",{onClick:()=>z(be),style:{padding:"10px 16px",background:A===be?"var(--primary)":"var(--bg-primary)",border:"1px solid var(--border)",borderRadius:"8px",color:A===be?"white":"var(--text-primary)",cursor:"pointer",fontWeight:A===be?"600":"400"},children:be},be)}),n.jsx("button",{onClick:()=>z(Math.min(U,A+1)),disabled:A===U,style:{padding:"10px 16px",background:A===U?"var(--bg-secondary)":"var(--bg-primary)",border:"1px solid var(--border)",borderRadius:"8px",color:A===U?"var(--text-secondary)":"var(--text-primary)",cursor:A===U?"not-allowed":"pointer"},children:n.jsx(Ri,{size:18})})]})]})]}),n.jsx(Ds,{isOpen:b,onClose:()=>m(!1),filters:j,onApplyFilters:v})]})}const w2="http://localhost:8000";function gd(r){return r?r.startsWith("http")?r:`${w2}${r}`:null}function mg(r){return r==null?"":`KES ${Number(r).toLocaleString()}`}function S2(){const{id:r}=Os();nt();const[s,d]=h.useState(null),[c,f]=h.useState([]),[p,g]=h.useState(!0),[y,b]=h.useState(0);if(h.useEffect(()=>{r&&xe.houses.getHouse(r).then(k=>{d(k),(k?.house_type||k?.locality)&&xe.houses.getHouses({limit:5}).then(_=>{const A=Array.isArray(_)?_:[];f(A.filter(z=>z.id!==k.id).slice(0,4))}).catch(()=>f([]))}).catch(()=>d(null)).finally(()=>g(!1))},[r]),p)return n.jsx("div",{style:{padding:48,textAlign:"center"},children:"Loading…"});if(!s)return n.jsxs("div",{style:{padding:48,textAlign:"center"},children:["Listing not found. ",n.jsx(pe,{to:"/listings",children:"Back to listings"})]});const m=s.images?.length?s.images.map(k=>k.image):[],j=gd(m[y]||m[0]),v=s.latitude!=null&&s.longitude!=null?`https://www.google.com/maps?q=${s.latitude},${s.longitude}`:s.formatted_address?`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(s.formatted_address)}`:null;return n.jsxs(n.Fragment,{children:[n.jsx(i0,{}),n.jsxs("div",{style:{maxWidth:900,margin:"0 auto",padding:"var(--spacing-md)",paddingBottom:48},children:[n.jsxs("div",{style:{marginBottom:32},children:[n.jsxs("div",{style:{aspectRatio:"16/9",borderRadius:12,overflow:"hidden",background:"var(--minimal-bg-secondary)",position:"relative"},children:[n.jsx("img",{src:j||"https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&auto=format&fit=crop",alt:"",style:{width:"100%",height:"100%",objectFit:"cover"}}),n.jsx("button",{type:"button",style:{position:"absolute",top:16,right:16,width:44,height:44,borderRadius:"50%",border:"none",background:"#fff",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"},children:n.jsx(ft,{size:22,color:s.is_liked?"#ef4444":"#333",fill:s.is_liked?"#ef4444":"none"})}),n.jsx("button",{type:"button",style:{position:"absolute",top:16,right:72,width:44,height:44,borderRadius:"50%",border:"none",background:"#fff",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"},children:n.jsx(Ud,{size:22})}),m.length>1&&n.jsx("div",{style:{position:"absolute",bottom:16,left:"50%",transform:"translateX(-50%)",display:"flex",gap:8},children:m.map((k,_)=>n.jsx("button",{type:"button",onClick:()=>b(_),style:{width:8,height:8,borderRadius:"50%",border:"none",background:_===y?"#fff":"rgba(255,255,255,0.5)",cursor:"pointer"}},_))})]}),m.length>1&&n.jsx("div",{style:{display:"flex",gap:8,marginTop:12,overflowX:"auto",paddingBottom:8},children:m.map((k,_)=>n.jsx("button",{type:"button",onClick:()=>b(_),style:{flexShrink:0,width:80,height:56,borderRadius:8,overflow:"hidden",border:y===_?"2px solid var(--minimal-accent)":"1px solid var(--minimal-border)",padding:0,cursor:"pointer"},children:n.jsx("img",{src:gd(k),alt:"",style:{width:"100%",height:"100%",objectFit:"cover"}})},_))})]}),n.jsxs("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"flex-start",gap:24,marginBottom:32},children:[n.jsxs("div",{style:{flex:"1 1 400px"},children:[n.jsx("h1",{style:{fontSize:28,fontWeight:600,marginBottom:8},children:s.title}),n.jsxs("p",{style:{fontSize:24,fontWeight:600,color:"var(--minimal-accent)",marginBottom:8},children:[mg(s.price)," ",s.price_negotiable&&n.jsx("span",{style:{fontSize:14,fontWeight:400,color:"var(--minimal-text-secondary)"},children:"(Negotiable)"})]}),n.jsxs("p",{style:{fontSize:15,color:"var(--minimal-text-secondary)",display:"flex",alignItems:"center",gap:8},children:[n.jsx(ha,{size:18})," ",s.formatted_address||s.locality||s.location||"Address not set"]}),n.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:24,marginTop:20},children:[n.jsxs("span",{style:{display:"flex",alignItems:"center",gap:8},children:[n.jsx(qr,{size:20})," ",s.bedrooms??"—"," beds"]}),n.jsxs("span",{style:{display:"flex",alignItems:"center",gap:8},children:[n.jsx(Yr,{size:20})," ",s.bathrooms??"—"," baths"]}),n.jsxs("span",{style:{display:"flex",alignItems:"center",gap:8},children:[n.jsx(Gr,{size:20})," ",s.area?`${s.area} m²`:"—"]}),s.year_built&&n.jsxs("span",{style:{display:"flex",alignItems:"center",gap:8},children:[n.jsx(Dd,{size:20})," Built ",s.year_built]})]}),n.jsxs("div",{style:{marginTop:24},children:[n.jsx("h2",{style:{fontSize:18,fontWeight:600,marginBottom:12},children:"Description"}),n.jsx("p",{style:{whiteSpace:"pre-wrap",lineHeight:1.6},children:s.description||"No description."})]}),s.features?.length>0&&n.jsxs("div",{style:{marginTop:24},children:[n.jsx("h2",{style:{fontSize:18,fontWeight:600,marginBottom:12},children:"Features"}),n.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:s.features.map((k,_)=>n.jsx("span",{style:{padding:"6px 12px",borderRadius:8,background:"var(--minimal-bg-secondary)",fontSize:14},children:k},_))})]})]}),n.jsx("aside",{style:{width:320,flexShrink:0},children:n.jsxs("div",{style:{padding:24,background:"#fff",border:"1px solid var(--minimal-border)",borderRadius:12,boxShadow:"var(--minimal-shadow)"},children:[n.jsx("h3",{style:{fontSize:16,fontWeight:600,marginBottom:16},children:"Contact"}),n.jsx("p",{style:{fontWeight:600,marginBottom:4},children:s.contact_name||s.landlord_name||s.owner?.name||"Owner"}),s.owner?.is_verified&&n.jsx("span",{style:{fontSize:12,color:"var(--minimal-success)"},children:"Verified"}),n.jsxs("div",{style:{marginTop:16,display:"flex",flexDirection:"column",gap:10},children:[n.jsxs(pe,{to:`/messages?with=${s.owner?.id}`,style:{display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:14,borderRadius:8,background:"var(--minimal-accent)",color:"#fff",textDecoration:"none",fontWeight:600},children:[n.jsx(la,{size:20})," Message"]}),s.landlord_phone&&n.jsxs("a",{href:`tel:${s.landlord_phone}`,style:{display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:14,borderRadius:8,border:"1px solid var(--minimal-border)",color:"var(--minimal-text)",textDecoration:"none"},children:[n.jsx(Ls,{size:20})," Call"]})]}),n.jsx(pe,{to:`/users/${s.owner?.id}`,style:{display:"block",marginTop:16,fontSize:14,color:"var(--minimal-accent)"},children:"View profile"})]})})]}),v&&n.jsxs("section",{style:{marginTop:48},children:[n.jsx("h2",{style:{fontSize:18,fontWeight:600,marginBottom:12},children:"Location"}),n.jsxs("a",{href:v,target:"_blank",rel:"noopener noreferrer",style:{display:"inline-flex",alignItems:"center",gap:8,padding:"12px 20px",borderRadius:8,background:"var(--minimal-bg-secondary)",color:"var(--minimal-text)",textDecoration:"none"},children:[n.jsx(Yg,{size:18})," View on Google Maps"]})]}),c.length>0&&n.jsxs("section",{style:{marginTop:48},children:[n.jsx("h2",{style:{fontSize:18,fontWeight:600,marginBottom:16},children:"Similar listings"}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",gap:16},children:c.map(k=>n.jsx(pe,{to:`/listings/${k.id}`,style:{textDecoration:"none",color:"inherit"},children:n.jsxs("div",{style:{borderRadius:8,overflow:"hidden",border:"1px solid var(--minimal-border)"},children:[n.jsx("div",{style:{aspectRatio:"4/3",background:"var(--minimal-bg-secondary)"},children:n.jsx("img",{src:gd(k?.images?.[0]?.image),alt:"",style:{width:"100%",height:"100%",objectFit:"cover"}})}),n.jsxs("div",{style:{padding:12},children:[n.jsx("p",{style:{fontWeight:600,fontSize:14},children:mg(k.price)}),n.jsx("p",{style:{fontSize:13,color:"var(--minimal-text-secondary)"},children:k.title})]})]})},k.id))})]})]})]})}const k2=["apartment","house","condo","studio","villa","townhouse","commercial","land"],z2=["sale","rent","lease"];function C2(){const r=nt(),[s,d]=h.useState(null),[c,f]=h.useState(!1),[p,g]=h.useState(""),[y,b]=h.useState({latitude:"",longitude:"",formatted_address:"",locality:"",city:"",state:"",country:""}),[m,j]=h.useState({title:"",description:"",listing_type:"rent",house_type:"apartment",price:"",price_negotiable:!1,bedrooms:1,bathrooms:1,area:"",year_built:"",parking_spaces:0,furnished:!1,contact_name:"",landlord_phone:"",landlord_email:"",whatsapp_number:""}),[v,k]=h.useState([]),[_,A]=h.useState(0);h.useEffect(()=>{xe.auth.getCurrentUser().then(d).catch(()=>r("/login"))},[r]),h.useEffect(()=>{const q=S=>{if(S.origin!==window.location.origin||S.data?.type!=="PIN_LOCATION_SELECTED")return;const U=S.data.payload||{};b({latitude:U.latitude??"",longitude:U.longitude??"",formatted_address:U.formatted_address??"",locality:U.locality??"",city:U.city??"",state:U.state??"",country:U.country??""})};return window.addEventListener("message",q),()=>window.removeEventListener("message",q)},[]);const z=()=>{const q=`${window.location.origin}/pin-location${y.latitude?`?lat=${y.latitude}&lng=${y.longitude}`:""}`;window.open(q,"pinLocation","width=900,height=700,scrollbars=yes")},T=(q,S)=>j(U=>({...U,[q]:S})),D=async q=>{if(q.preventDefault(),g(""),!m.title?.trim()){g("Title is required.");return}if(!m.description?.trim()){g("Description is required.");return}if(!m.price||Number(m.price)<=0){g("Valid price is required.");return}const S=y.formatted_address||y.locality||m.title;if(!S){g("Location is required. Use Pin on Map or enter address.");return}if(!s?.is_verified){g("Only verified users can create listings.");return}f(!0);const U=new FormData;U.append("title",m.title.trim()),U.append("description",m.description.trim()),U.append("listing_type",m.listing_type),U.append("house_type",m.house_type),U.append("price",m.price),U.append("price_negotiable",m.price_negotiable),U.append("bedrooms",m.bedrooms),U.append("bathrooms",m.bathrooms),U.append("area",m.area||"0"),U.append("location",S),U.append("locality",y.locality||y.formatted_address||S),U.append("formatted_address",y.formatted_address||""),y.latitude&&U.append("latitude",y.latitude),y.longitude&&U.append("longitude",y.longitude),U.append("landlord_name",m.contact_name||""),U.append("landlord_phone",m.landlord_phone||""),U.append("landlord_email",m.landlord_email||""),U.append("contact_name",m.contact_name||""),U.append("whatsapp_number",m.whatsapp_number||""),m.year_built&&U.append("year_built",m.year_built),U.append("parking_spaces",m.parking_spaces),U.append("furnished",m.furnished),m.features&&U.append("features",JSON.stringify(m.features)),v.filter(re=>re instanceof File).forEach((re,be)=>U.append("images",re));try{await xe.houses.createHouse(U),r("/profile",{state:{message:"Listing submitted for admin approval."}})}catch(re){g(re?.data?.error||re?.message||"Failed to create listing.")}finally{f(!1)}},G=q=>{const S=Array.from(q.target.files||[]);k(U=>[...U,...S].slice(0,10))},K=q=>k(S=>S.filter((U,$)=>$!==q));return s?s.is_verified?n.jsxs("div",{style:{maxWidth:720,margin:"0 auto"},children:[n.jsx(pe,{to:"/listings",style:{display:"inline-block",marginBottom:24,color:"var(--minimal-accent)"},children:"← Back to listings"}),n.jsx("h1",{style:{fontSize:28,fontWeight:600,marginBottom:8},children:"Create listing"}),n.jsx("p",{style:{color:"var(--minimal-text-secondary)",marginBottom:32},children:"All listings are reviewed by admin before going live."}),n.jsxs("form",{onSubmit:D,children:[p&&n.jsx("div",{style:{padding:12,marginBottom:24,background:"#fef2f2",color:"#b91c1c",borderRadius:8},children:p}),n.jsxs("section",{style:{marginBottom:32},children:[n.jsx("h2",{style:{fontSize:18,fontWeight:600,marginBottom:16},children:"Basic information"}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[n.jsxs("div",{children:[n.jsx("label",{style:{display:"block",marginBottom:6,fontWeight:500},children:"Title *"}),n.jsx("input",{type:"text",value:m.title,onChange:q=>T("title",q.target.value),placeholder:"e.g. Spacious 3-bed in Westlands",className:"search-input",style:{width:"100%"},required:!0})]}),n.jsxs("div",{children:[n.jsx("label",{style:{display:"block",marginBottom:6,fontWeight:500},children:"Description *"}),n.jsx("textarea",{value:m.description,onChange:q=>T("description",q.target.value),placeholder:"Describe the property...",rows:4,className:"search-input",style:{width:"100%",resize:"vertical"},required:!0})]}),n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16},children:[n.jsxs("div",{children:[n.jsx("label",{style:{display:"block",marginBottom:6,fontWeight:500},children:"Listing type"}),n.jsx("select",{value:m.listing_type,onChange:q=>T("listing_type",q.target.value),className:"search-input",style:{width:"100%"},children:z2.map(q=>n.jsx("option",{value:q,children:q},q))})]}),n.jsxs("div",{children:[n.jsx("label",{style:{display:"block",marginBottom:6,fontWeight:500},children:"Property type"}),n.jsx("select",{value:m.house_type,onChange:q=>T("house_type",q.target.value),className:"search-input",style:{width:"100%"},children:k2.map(q=>n.jsx("option",{value:q,children:q},q))})]})]}),n.jsxs("div",{style:{display:"flex",gap:16,alignItems:"center"},children:[n.jsxs("div",{style:{flex:1},children:[n.jsx("label",{style:{display:"block",marginBottom:6,fontWeight:500},children:"Price (KES) *"}),n.jsx("input",{type:"number",min:"0",step:"1",value:m.price,onChange:q=>T("price",q.target.value),className:"search-input",style:{width:"100%"},required:!0})]}),n.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8,marginTop:28},children:[n.jsx("input",{type:"checkbox",checked:m.price_negotiable,onChange:q=>T("price_negotiable",q.target.checked)}),"Negotiable"]})]})]})]}),n.jsxs("section",{style:{marginBottom:32},children:[n.jsx("h2",{style:{fontSize:18,fontWeight:600,marginBottom:16},children:"Location"}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[n.jsxs("div",{children:[n.jsx("label",{style:{display:"block",marginBottom:6,fontWeight:500},children:"Address"}),n.jsxs("div",{style:{display:"flex",gap:8},children:[n.jsx("input",{type:"text",value:y.formatted_address||y.locality,readOnly:!0,placeholder:"Use Pin on Map to set",className:"search-input",style:{flex:1}}),n.jsxs("button",{type:"button",onClick:z,style:{display:"flex",alignItems:"center",gap:8,padding:"12px 20px",borderRadius:8,border:"1px solid var(--minimal-accent)",background:"#fff",color:"var(--minimal-accent)",cursor:"pointer",fontWeight:500},children:[n.jsx(ha,{size:20})," Pin on Map"]})]}),n.jsx("p",{style:{fontSize:13,color:"var(--minimal-text-secondary)",marginTop:6},children:"Opens Google Maps in a new window to select exact location."})]}),y.latitude&&y.longitude&&n.jsxs("p",{style:{fontSize:14,color:"var(--minimal-success)"},children:["Location set: ",y.latitude,", ",y.longitude]})]})]}),n.jsxs("section",{style:{marginBottom:32},children:[n.jsx("h2",{style:{fontSize:18,fontWeight:600,marginBottom:16},children:"Details"}),n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:16},children:[n.jsxs("div",{children:[n.jsx("label",{style:{display:"block",marginBottom:6,fontWeight:500},children:"Bedrooms"}),n.jsx("input",{type:"number",min:"0",value:m.bedrooms,onChange:q=>T("bedrooms",q.target.value),className:"search-input",style:{width:"100%"}})]}),n.jsxs("div",{children:[n.jsx("label",{style:{display:"block",marginBottom:6,fontWeight:500},children:"Bathrooms"}),n.jsx("input",{type:"number",min:"0",value:m.bathrooms,onChange:q=>T("bathrooms",q.target.value),className:"search-input",style:{width:"100%"}})]}),n.jsxs("div",{children:[n.jsx("label",{style:{display:"block",marginBottom:6,fontWeight:500},children:"Area (m²)"}),n.jsx("input",{type:"number",min:"0",value:m.area,onChange:q=>T("area",q.target.value),className:"search-input",style:{width:"100%"},placeholder:"0"})]}),n.jsxs("div",{children:[n.jsx("label",{style:{display:"block",marginBottom:6,fontWeight:500},children:"Year built"}),n.jsx("input",{type:"number",min:"1900",max:new Date().getFullYear(),value:m.year_built,onChange:q=>T("year_built",q.target.value),className:"search-input",style:{width:"100%"},placeholder:"Optional"})]}),n.jsxs("div",{children:[n.jsx("label",{style:{display:"block",marginBottom:6,fontWeight:500},children:"Parking"}),n.jsx("input",{type:"number",min:"0",value:m.parking_spaces,onChange:q=>T("parking_spaces",q.target.value),className:"search-input",style:{width:"100%"}})]}),n.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8,marginTop:28},children:[n.jsx("input",{type:"checkbox",checked:m.furnished,onChange:q=>T("furnished",q.target.checked)}),"Furnished"]})]})]}),n.jsxs("section",{style:{marginBottom:32},children:[n.jsx("h2",{style:{fontSize:18,fontWeight:600,marginBottom:16},children:"Photos"}),n.jsxs("label",{style:{display:"inline-flex",alignItems:"center",gap:8,padding:"12px 20px",borderRadius:8,border:"1px dashed var(--minimal-border)",cursor:"pointer",marginBottom:12},children:[n.jsx(Vb,{size:20})," Upload images (up to 10)",n.jsx("input",{type:"file",accept:"image/*",multiple:!0,hidden:!0,onChange:G})]}),n.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:12},children:v.map((q,S)=>n.jsxs("div",{style:{position:"relative",width:100,height:80,borderRadius:8,overflow:"hidden",background:"var(--minimal-bg-secondary)"},children:[n.jsx("img",{src:URL.createObjectURL(q),alt:"",style:{width:"100%",height:"100%",objectFit:"cover"}}),S===0&&n.jsx("span",{style:{position:"absolute",bottom:4,left:4,fontSize:10,background:"var(--minimal-accent)",color:"#fff",padding:"2px 6px",borderRadius:4},children:"Featured"}),n.jsx("button",{type:"button",onClick:()=>K(S),style:{position:"absolute",top:4,right:4,width:24,height:24,borderRadius:"50%",border:"none",background:"#fff",cursor:"pointer",fontSize:14},children:"×"})]},S))})]}),n.jsxs("section",{style:{marginBottom:32},children:[n.jsx("h2",{style:{fontSize:18,fontWeight:600,marginBottom:16},children:"Contact"}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[n.jsxs("div",{children:[n.jsx("label",{style:{display:"block",marginBottom:6,fontWeight:500},children:"Contact name"}),n.jsx("input",{type:"text",value:m.contact_name,onChange:q=>T("contact_name",q.target.value),placeholder:"Defaults to your profile name",className:"search-input",style:{width:"100%"}})]}),n.jsxs("div",{children:[n.jsx("label",{style:{display:"block",marginBottom:6,fontWeight:500},children:"Phone"}),n.jsx("input",{type:"tel",value:m.landlord_phone,onChange:q=>T("landlord_phone",q.target.value),className:"search-input",style:{width:"100%"}})]}),n.jsxs("div",{children:[n.jsx("label",{style:{display:"block",marginBottom:6,fontWeight:500},children:"WhatsApp"}),n.jsx("input",{type:"tel",value:m.whatsapp_number,onChange:q=>T("whatsapp_number",q.target.value),className:"search-input",style:{width:"100%"}})]}),n.jsxs("div",{children:[n.jsx("label",{style:{display:"block",marginBottom:6,fontWeight:500},children:"Email"}),n.jsx("input",{type:"email",value:m.landlord_email,onChange:q=>T("landlord_email",q.target.value),className:"search-input",style:{width:"100%"}})]})]})]}),n.jsx("p",{style:{fontSize:14,color:"var(--minimal-text-secondary)",marginBottom:24},children:"After submission, your listing will be reviewed by admin. You will be notified when it is approved or if changes are requested."}),n.jsxs("div",{style:{display:"flex",gap:16},children:[n.jsx("button",{type:"submit",disabled:c,style:{padding:"14px 28px",borderRadius:8,border:"none",background:"var(--minimal-accent)",color:"#fff",fontWeight:600,cursor:c?"not-allowed":"pointer"},children:c?"Submitting…":"Submit for approval"}),n.jsx(pe,{to:"/listings",style:{padding:"14px 28px",borderRadius:8,border:"1px solid var(--minimal-border)",color:"var(--minimal-text)",textDecoration:"none",display:"inline-flex",alignItems:"center"},children:"Cancel"})]})]})]}):n.jsxs("div",{style:{maxWidth:560,margin:"0 auto",padding:48,textAlign:"center"},children:[n.jsx("h1",{style:{fontSize:24,marginBottom:16},children:"Verified users only"}),n.jsx("p",{style:{color:"var(--minimal-text-secondary)",marginBottom:24},children:"Only verified accounts can create listings. Contact admin for verification."}),n.jsx(pe,{to:"/listings",style:{color:"var(--minimal-accent)"},children:"Browse listings"})]}):n.jsx("div",{style:{padding:48},children:"Loading…"})}const N2="http://localhost:8000";function _2(r){const s=r?.profile_picture;return s?s.startsWith("http")?s:`${N2}${s}`:null}function E2(){const r=nt(),[s,d]=h.useState(""),[c,f]=h.useState([]),[p,g]=h.useState([]),[y,b]=h.useState(!1),[m,j]=h.useState(!1),v=h.useRef(null);h.useEffect(()=>{xe.userSearch.getRecentSearches().then(g).catch(()=>g([]))},[]),h.useEffect(()=>{if(!s.trim()){f([]),j(!1);return}return v.current&&clearTimeout(v.current),v.current=setTimeout(()=>{j(!0),xe.auth.searchUsers(s).then(_=>{f(Array.isArray(_)?_:[]),xe.userSearch.saveRecentSearch(s).catch(()=>{})}).catch(()=>f([])).finally(()=>j(!1))},300),()=>{v.current&&clearTimeout(v.current)}},[s]);const k=_=>{r("/messages",{state:{openWithUserId:_}})};return n.jsxs("div",{style:{maxWidth:640,margin:"0 auto"},children:[n.jsx("h1",{style:{fontSize:24,fontWeight:600,marginBottom:24,color:"var(--minimal-text)"},children:"Find Users"}),n.jsxs("div",{style:{position:"relative",marginBottom:24},children:[n.jsx(La,{size:20,style:{position:"absolute",left:16,top:"50%",transform:"translateY(-50%)",color:"var(--minimal-text-secondary)"}}),n.jsx("input",{type:"text",className:"search-input",placeholder:"Search by name, email, or organisation…",value:s,onChange:_=>d(_.target.value),autoFocus:!0,style:{paddingLeft:44}})]}),p.length>0&&!s&&n.jsxs("div",{style:{marginBottom:24},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12},children:[n.jsxs("span",{style:{fontSize:14,color:"var(--minimal-text-secondary)",display:"flex",alignItems:"center",gap:8},children:[n.jsx(Ur,{size:16})," Recent searches"]}),n.jsx("button",{type:"button",onClick:()=>g([]),style:{background:"none",border:"none",color:"var(--minimal-accent)",fontSize:14,cursor:"pointer"},children:"Clear all"})]}),n.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:p.slice(0,10).map(_=>n.jsx("button",{type:"button",onClick:()=>d(_.query),style:{padding:"8px 12px",borderRadius:8,border:"1px solid var(--minimal-border)",background:"var(--minimal-bg-secondary)",fontSize:14,cursor:"pointer",color:"var(--minimal-text)"},children:_.query},_.id))})]}),m&&n.jsx("p",{style:{color:"var(--minimal-text-secondary)",marginBottom:16},children:"Searching…"}),s&&!m&&c.length===0&&n.jsx("p",{style:{color:"var(--minimal-text-secondary)",marginBottom:16},children:"No users found. Try a different search."}),c.length>0&&n.jsx("ul",{style:{listStyle:"none",padding:0,margin:0},children:c.map(_=>n.jsxs("li",{style:{display:"flex",alignItems:"center",gap:16,padding:"16px 0",borderBottom:"1px solid var(--minimal-border)"},children:[n.jsx("img",{src:_2(_)||void 0,alt:"",style:{width:48,height:48,borderRadius:"50%",objectFit:"cover",background:"var(--minimal-bg-secondary)"},onError:A=>{A.target.style.display="none"}}),n.jsxs("div",{style:{flex:1,minWidth:0},children:[n.jsx("div",{style:{fontWeight:600,fontSize:16},children:_.name||_.email}),n.jsxs("div",{style:{fontSize:14,color:"var(--minimal-text-secondary)"},children:[_.account_type==="organisation"?"Organisation":"Personal",_.is_verified&&" · Verified",_.organisation_name&&` · ${_.organisation_name}`]})]}),n.jsxs("button",{type:"button",onClick:()=>k(_.id),style:{display:"flex",alignItems:"center",gap:8,padding:"10px 16px",borderRadius:8,border:"none",background:"var(--minimal-accent)",color:"#fff",fontSize:14,cursor:"pointer"},children:[n.jsx(la,{size:18})," Message"]})]},_.id))})]})}const xg="http://localhost:8000";function R2(){const{id:r}=Os(),[s,d]=h.useState(null),[c,f]=h.useState([]),[p,g]=h.useState(!0);if(h.useEffect(()=>{r&&xe.profile.getProfileById(r).then(b=>(d(b),xe.activities.trackActivity("profile_view",b.id,"user",{name:b.name||b.email}).catch(()=>{}),xe.houses.getHouses({owner_id:b.id}).catch(()=>[]))).then(b=>f(Array.isArray(b)?b.filter(m=>m.status==="active"||m.is_approved):[])).catch(()=>d(null)).finally(()=>g(!1))},[r]),p)return n.jsx("div",{style:{padding:48,textAlign:"center"},children:"Loading…"});if(!s)return n.jsx("div",{style:{padding:48,textAlign:"center"},children:"User not found."});const y=s.profile_picture?s.profile_picture.startsWith("http")?s.profile_picture:`${xg}${s.profile_picture}`:null;return n.jsxs("div",{style:{maxWidth:800,margin:"0 auto"},children:[n.jsxs("div",{style:{background:"linear-gradient(135deg, #f0f4f8 0%, #e2e8f0 100%)",borderRadius:12,padding:32,marginBottom:24,textAlign:"center"},children:[n.jsx("img",{src:y||void 0,alt:"",style:{width:96,height:96,borderRadius:"50%",objectFit:"cover",border:"4px solid #fff",boxShadow:"0 4px 12px rgba(0,0,0,0.1)",marginBottom:16},onError:b=>{b.target.style.display="none"}}),!y&&n.jsx("div",{style:{width:96,height:96,borderRadius:"50%",background:"var(--minimal-bg-secondary)",margin:"0 auto 16px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:32,color:"#94a3b8"},children:s.name?.charAt(0)||"?"}),n.jsx("h1",{style:{fontSize:28,fontWeight:600,marginBottom:8},children:s.name||s.email}),n.jsxs("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:8,marginBottom:12},children:[n.jsx("span",{style:{padding:"4px 10px",borderRadius:6,background:"rgba(0,0,0,0.06)",fontSize:14},children:s.account_type==="organisation"?"Organisation":"Personal"}),s.is_verified&&n.jsxs("span",{style:{padding:"4px 10px",borderRadius:6,background:"rgba(16,185,129,0.15)",color:"var(--minimal-success)",fontSize:14,display:"flex",alignItems:"center",gap:4},children:[n.jsx(qg,{size:14})," Verified"]})]}),s.organisation_name&&n.jsxs("p",{style:{fontSize:15,color:"var(--minimal-text-secondary)",display:"flex",alignItems:"center",justifyContent:"center",gap:6},children:[n.jsx(C1,{size:18})," ",s.organisation_name]}),s.locality&&n.jsxs("p",{style:{fontSize:14,color:"var(--minimal-text-secondary)",display:"flex",alignItems:"center",justifyContent:"center",gap:6,marginTop:4},children:[n.jsx(ha,{size:16})," ",s.locality]}),s.created_at&&n.jsxs("p",{style:{fontSize:13,color:"var(--minimal-text-secondary)",marginTop:8,display:"flex",alignItems:"center",justifyContent:"center",gap:6},children:[n.jsx(Dd,{size:14})," Joined ",new Date(s.created_at).toLocaleDateString()]}),n.jsxs(pe,{to:`/messages?with=${s.id}`,style:{display:"inline-flex",alignItems:"center",gap:8,marginTop:20,padding:"12px 24px",borderRadius:8,background:"var(--minimal-accent)",color:"#fff",textDecoration:"none",fontWeight:600},children:[n.jsx(la,{size:20})," Message"]})]}),s.bio&&n.jsxs("section",{style:{marginBottom:24},children:[n.jsx("h2",{style:{fontSize:18,fontWeight:600,marginBottom:12},children:"About"}),n.jsx("p",{style:{lineHeight:1.6,color:"var(--minimal-text-secondary)"},children:s.bio})]}),s.is_verified&&c.length>0&&n.jsxs("section",{children:[n.jsx("h2",{style:{fontSize:18,fontWeight:600,marginBottom:16},children:"Listings"}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(260px, 1fr))",gap:20},children:c.map(b=>n.jsx(pe,{to:`/listings/${b.id}`,style:{textDecoration:"none",color:"inherit"},children:n.jsxs("div",{style:{border:"1px solid var(--minimal-border)",borderRadius:12,overflow:"hidden",background:"#fff"},children:[n.jsx("div",{style:{aspectRatio:"16/9",background:"var(--minimal-bg-secondary)"},children:n.jsx("img",{src:b.images?.[0]?.image?b.images[0].image.startsWith("http")?b.images[0].image:`${xg}${b.images[0].image}`:"https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&auto=format&fit=crop",alt:"",style:{width:"100%",height:"100%",objectFit:"cover"}})}),n.jsxs("div",{style:{padding:16},children:[n.jsxs("p",{style:{fontWeight:600,fontSize:18},children:["KES ",Number(b.price).toLocaleString()]}),n.jsx("p",{style:{fontSize:15},children:b.title}),n.jsx("p",{style:{fontSize:13,color:"var(--minimal-text-secondary)"},children:b.locality||b.location})]})]})},b.id))})]})]})}function T2(){const[r,s]=h.useState(null),[d,c]=h.useState(!1),[f,p]=h.useState("");h.useEffect(()=>{xe.auth.getCurrentUser().then(s).catch(()=>{})},[]);const g=async y=>{if(y.preventDefault(),!!r){c(!0),p("");try{await xe.profile.updateProfile(r),p("Settings saved.")}catch(b){p(b?.message||"Failed to save.")}finally{c(!1)}}};return r?n.jsxs("div",{style:{maxWidth:560,margin:"0 auto"},children:[n.jsx("h1",{style:{fontSize:28,fontWeight:600,marginBottom:8},children:"Settings"}),n.jsx("p",{style:{color:"var(--minimal-text-secondary)",marginBottom:32},children:"Manage your account preferences."}),n.jsx("p",{style:{marginBottom:24},children:n.jsx(pe,{to:"/profile",style:{color:"var(--minimal-accent)"},children:"Edit profile, picture, and contact info on your profile page →"})}),f&&n.jsx("p",{style:{padding:12,marginBottom:24,background:f.includes("Failed")?"#fef2f2":"#f0fdf4",color:f.includes("Failed")?"#b91c1c":"#166534",borderRadius:8},children:f}),n.jsx("form",{onSubmit:g,children:n.jsx("button",{type:"submit",disabled:d,style:{padding:"12px 24px",borderRadius:8,border:"none",background:"var(--minimal-accent)",color:"#fff",fontWeight:600,cursor:d?"not-allowed":"pointer"},children:d?"Saving…":"Save"})})]}):n.jsx("div",{style:{padding:48},children:"Loading…"})}const A2={lat:-1.2921,lng:36.8219};function M2(){const[r]=Md(),[s,d]=h.useState(()=>{const T=parseFloat(r.get("lat")),D=parseFloat(r.get("lng"));return!Number.isNaN(T)&&!Number.isNaN(D)?{lat:T,lng:D}:A2}),[c,f]=h.useState(null),[p,g]=h.useState(""),[y,b]=h.useState(!1),m=h.useRef(null),j=h.useRef(null),v=h.useRef(null),[k,_]=h.useState(!1),A=h.useCallback((T,D)=>{if(!window.google?.maps)return;new window.google.maps.Geocoder().geocode({location:{lat:T,lng:D}},(K,q)=>{q==="OK"&&K?.[0]?g(K[0].formatted_address):g(`${T.toFixed(6)}, ${D.toFixed(6)}`)})},[]);h.useEffect(()=>{{g("(Google Maps API key not set. Set VITE_GOOGLE_MAPS_KEY.)");return}},[]),h.useEffect(()=>{if(!k||!m.current||!window.google||v.current)return;const T=new window.google.maps.Map(m.current,{center:{lat:s.lat,lng:s.lng},zoom:14}),D=new window.google.maps.Marker({position:{lat:s.lat,lng:s.lng},map:T,draggable:!0});v.current=T,j.current=D,c||f(s),T.addListener("click",G=>{const K=G.latLng.lat(),q=G.latLng.lng();D.setPosition(G.latLng),f({lat:K,lng:q}),A(K,q)}),D.addListener("dragend",()=>{const G=D.getPosition(),K=G.lat(),q=G.lng();f({lat:K,lng:q}),A(K,q)}),A(s.lat,s.lng)},[k,s.lat,s.lng,A]);const z=()=>{b(!0);const T=c||s,D={latitude:T.lat,longitude:T.lng,formatted_address:p||`${T.lat.toFixed(6)}, ${T.lng.toFixed(6)}`,place_id:"",locality:"",city:"",state:"",country:""};window.opener?(window.opener.postMessage({type:"PIN_LOCATION_SELECTED",payload:D},window.location.origin),window.close()):(b(!1),alert("Opened in same tab. Open this page in a popup from the listing form."))};return n.jsxs("div",{style:{padding:24,maxWidth:800,margin:"0 auto"},children:[n.jsx("h1",{style:{fontSize:22,marginBottom:16},children:"Pin your location"}),n.jsx("p",{style:{color:"#666",marginBottom:16},children:"Click on the map or drag the marker to set the exact location. Then click Confirm."}),n.jsx("div",{ref:m,style:{width:"100%",height:400,borderRadius:12,background:"#e5e7eb"}}),p&&n.jsxs("p",{style:{marginTop:12,fontSize:14},children:[n.jsx("strong",{children:"Address:"})," ",p]}),n.jsxs("div",{style:{marginTop:16,display:"flex",gap:12},children:[n.jsx("button",{type:"button",onClick:z,disabled:!c||y,style:{padding:"12px 24px",borderRadius:8,border:"none",background:"var(--minimal-accent)",color:"#fff",fontWeight:600,cursor:c&&!y?"pointer":"not-allowed"},children:y?"Confirming…":"Confirm location"}),window.opener&&n.jsx("button",{type:"button",onClick:()=>window.close(),style:{padding:"12px 24px",borderRadius:8,border:"1px solid #ccc",background:"#fff",cursor:"pointer"},children:"Cancel"})]})]})}const D2=()=>{const[r,s]=h.useState(null),[d,c]=h.useState(!0),[f,p]=h.useState(null);h.useEffect(()=>{const m=async()=>{try{c(!0);const[v,k,_,A,z,T]=await Promise.all([Dn.getSignups("month").catch(()=>null),Dn.getVisits("month").catch(()=>null),Dn.getHouses("month").catch(()=>null),Dn.getMostLiked().catch(()=>null),Dn.getHouseTypes().catch(()=>null),Dn.getLocations().catch(()=>null)]);s({signups:v,visits:k,houses:_,mostLiked:A,houseTypes:z,locations:T}),g({signups:v,visits:k,houses:_,mostLiked:A,houseTypes:z,locations:T})}catch(v){console.error("Error fetching analytics:",v),p("Failed to fetch live analytics data")}finally{c(!1)}};m();const j=setInterval(m,3e4);return()=>clearInterval(j)},[]);const g=m=>{if(!m)return;const j=document.documentElement,v=y(m);Object.entries(v).forEach(([k,_])=>{j.style.setProperty(`--${k}`,_)}),b(m)},y=m=>{const j={},_=m.signups?.total_signups||0,A=Math.min(_*2,60);j["primary-500"]=`hsl(${210-A}, 70%, 50%)`,j["primary-600"]=`hsl(${210-A}, 70%, 40%)`;const z=m.visits?.total_visits||0,T=Math.min(z/100,40);j["accent-500"]=`hsl(${40+T}, 80%, 50%)`,j["accent-600"]=`hsl(${40+T}, 80%, 40%)`;const D=m.houses?.total_houses||0,G=Math.min(D/50,30);j["success-500"]=`hsl(${120+G}, 70%, 50%)`,j["success-600"]=`hsl(${120+G}, 70%, 40%)`;const K=_+z+D,q=Math.max(95-K/10,85);j["secondary-50"]=`hsl(0, 0%, ${q}%)`,j["secondary-100"]=`hsl(0, 0%, ${q-2}%)`;const S=Math.max(20,K/5);j["secondary-900"]=`hsl(0, 0%, ${S}%)`,j["secondary-800"]=`hsl(0, 0%, ${S+10}%)`,j["gradient-primary"]="linear-gradient(135deg, var(--primary-500) 0%, var(--primary-600) 100%)",j["gradient-accent"]="linear-gradient(135deg, var(--accent-500) 0%, var(--accent-600) 100%)",j["gradient-success"]="linear-gradient(135deg, var(--success-500) 0%, var(--success-600) 100%)",j["gradient-welcome"]="linear-gradient(135deg, var(--primary-500) 0%, var(--secondary-600) 100%)";const U=Math.min(K/1e3,.3);return j["shadow-md"]=`0 4px 6px -1px rgba(0, 0, 0, ${.1+U}), 0 2px 4px -1px rgba(0, 0, 0, ${.06+U})`,j["shadow-lg"]=`0 10px 15px -3px rgba(0, 0, 0, ${.1+U}), 0 4px 6px -2px rgba(0, 0, 0, ${.05+U})`,j["transition-normal"]=`all ${.3+Math.random()*.2}s ease-in-out`,j},b=m=>{const j=document.documentElement,v=m.signups?.total_signups||0,k=m.visits?.total_visits||0,_=m.houses?.total_houses||0,A=v+k+_;A>100?j.style.setProperty("--activity-pulse","pulse 2s infinite"):A>50?j.style.setProperty("--activity-pulse","pulse 3s infinite"):j.style.setProperty("--activity-pulse","none"),_>20?j.style.setProperty("--card-shimmer","shimmer 1.5s infinite"):j.style.setProperty("--card-shimmer","none")};return d?n.jsx("style",{children:`
          /* Loading state styles */
          :root {
            --primary-500: #3b82f6;
            --primary-600: #2563eb;
            --accent-500: #f59e0b;
            --accent-600: #d97706;
            --success-500: #22c55e;
            --success-600: #16a34a;
            --secondary-50: #f8fafc;
            --secondary-900: #0f172a;
            --activity-pulse: pulse 2s infinite;
            --card-shimmer: shimmer 1.5s infinite;
          }
          
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.8; }
          }
          
          @keyframes shimmer {
            0% { background-position: -200px 0; }
            100% { background-position: calc(200px + 100%) 0; }
          }
        `}):f?n.jsx("style",{children:`
          /* Error state styles */
          :root {
            --primary-500: #ef4444;
            --primary-600: #dc2626;
            --accent-500: #f59e0b;
            --accent-600: #d97706;
            --success-500: #22c55e;
            --success-600: #16a34a;
            --secondary-50: #fef2f2;
            --secondary-900: #1f2937;
            --activity-pulse: none;
            --card-shimmer: none;
          }
        `}):n.jsx("style",{children:`
        /* Live Data-Driven Styles */
        :root {
          /* These styles are dynamically updated by JavaScript */
          --activity-pulse: ${r?"pulse 2s infinite":"none"};
          --card-shimmer: ${r?"shimmer 1.5s infinite":"none"};
        }
        
        /* Enhanced animations based on live data */
        .btn-primary {
          animation: var(--activity-pulse);
        }
        
        .card {
          background: linear-gradient(180deg, var(--secondary-50), var(--secondary-100));
          animation: var(--card-shimmer);
        }
        
        /* Dynamic hover effects based on activity */
        .card:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-lg);
        }
        
        /* Live data indicators */
        .live-indicator {
          display: inline-block;
          width: 8px;
          height: 8px;
          background: var(--success-500);
          border-radius: 50%;
          animation: blink 1s infinite;
          margin-right: 8px;
        }
        
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.02); }
        }
        
        @keyframes shimmer {
          0% {
            background: linear-gradient(90deg, var(--secondary-100) 0%, var(--secondary-200) 50%, var(--secondary-100) 100%);
            background-size: 200px 100%;
            background-position: -200px 0;
          }
          100% {
            background: linear-gradient(90deg, var(--secondary-100) 0%, var(--secondary-200) 50%, var(--secondary-100) 100%);
            background-size: 200px 100%;
            background-position: calc(200px + 100%) 0;
          }
        }
        
        /* Dynamic typography based on data */
        h1 {
          background: var(--gradient-welcome);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        /* Live data badges */
        .data-badge {
          display: inline-flex;
          align-items: center;
          padding: 4px 8px;
          background: var(--primary-100);
          color: var(--primary-700);
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 600;
          border: 1px solid var(--primary-200);
        }
        
        .data-badge.success {
          background: var(--success-100);
          color: var(--success-700);
          border-color: var(--success-200);
        }
        
        .data-badge.warning {
          background: var(--accent-100);
          color: var(--accent-700);
          border-color: var(--accent-200);
        }
        
        /* Dynamic loading states */
        .loading-spinner {
          width: 20px;
          height: 20px;
          border: 2px solid var(--secondary-200);
          border-top: 2px solid var(--primary-500);
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `})};function B2(){const{id:r}=Os(),s=nt();return h.useEffect(()=>{s(`/listings/${r}`,{replace:!0})},[r,s]),null}function dn({children:r}){return Le.getToken()?n.jsx(n.Fragment,{children:r}):n.jsx(Es,{to:"/login",replace:!0})}function O2({children:r}){return Le.getToken()?n.jsx(n.Fragment,{children:r}):n.jsx(Es,{to:"/login",replace:!0})}function U2(){return n.jsx(Ib,{children:n.jsxs(a1,{children:[n.jsx(D2,{}),n.jsxs(Ty,{children:[n.jsx(Ze,{path:"/login",element:n.jsx(p2,{})}),n.jsx(Ze,{path:"/register",element:n.jsx(pg,{})}),n.jsx(Ze,{path:"/signup",element:n.jsx(pg,{})}),n.jsx(Ze,{path:"/contact",element:n.jsx(c2,{})}),n.jsx(Ze,{path:"/about",element:n.jsx(d2,{})}),n.jsx(Ze,{path:"/chat",element:n.jsx(u2,{})}),n.jsx(Ze,{path:"/memes",element:n.jsx(m2,{})}),n.jsx(Ze,{path:"/pin-location",element:n.jsx(M2,{})}),n.jsx(Ze,{path:"/",element:n.jsx(i2,{})}),n.jsx(Ze,{path:"/home-old",element:n.jsx(Pv,{})}),n.jsx(Ze,{path:"/listings",element:n.jsx(j2,{})}),n.jsx(Ze,{path:"/listings-old",element:n.jsx(v2,{})}),n.jsx(Ze,{path:"/listings/:id",element:n.jsx(S2,{})}),n.jsx(Ze,{path:"/profile",element:n.jsx(dn,{children:n.jsx(hd,{})})}),n.jsx(Ze,{path:"/profile/normal",element:n.jsx(dn,{children:n.jsx(hd,{})})}),n.jsx(Ze,{path:"/profile/premium",element:n.jsx(dn,{children:n.jsx(hd,{})})}),n.jsx(Ze,{path:"/listings/create",element:n.jsx(O2,{children:n.jsx(C2,{})})}),n.jsx(Ze,{path:"/listing",element:n.jsx(Es,{to:"/listings",replace:!0})}),n.jsx(Ze,{path:"/listing/:id",element:n.jsx(B2,{})}),n.jsx(Ze,{path:"/messages",element:n.jsx(dn,{children:n.jsx(kd,{})})}),n.jsx(Ze,{path:"/messages/:conversationId",element:n.jsx(dn,{children:n.jsx(kd,{})})}),n.jsx(Ze,{path:"/users/search",element:n.jsx(dn,{children:n.jsx(E2,{})})}),n.jsx(Ze,{path:"/find-users",element:n.jsx(Es,{to:"/users/search",replace:!0})}),n.jsx(Ze,{path:"/users/:id",element:n.jsx(dn,{children:n.jsx(R2,{})})}),n.jsx(Ze,{path:"/settings",element:n.jsx(dn,{children:n.jsx(T2,{})})})]})]})})}const L2="YOUR_GOOGLE_CLIENT_ID_HERE";Rx.createRoot(document.getElementById("root")).render(n.jsx(h.StrictMode,{children:n.jsx(Ax,{clientId:L2,children:n.jsx(U2,{})})}));
