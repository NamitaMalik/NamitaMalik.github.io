var tu=t=>{throw TypeError(t)};var Dl=(t,e,r)=>e.has(t)||tu("Cannot "+r);var T=(t,e,r)=>(Dl(t,e,"read from private field"),r?r.call(t):e.get(t)),K=(t,e,r)=>e.has(t)?tu("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),H=(t,e,r,o)=>(Dl(t,e,"write to private field"),o?o.call(t,r):e.set(t,r),r),Ae=(t,e,r)=>(Dl(t,e,"access private method"),r);var Us=(t,e,r,o)=>({set _(s){H(t,e,s,r)},get _(){return T(t,e,o)}});function xv(t,e){for(var r=0;r<e.length;r++){const o=e[r];if(typeof o!="string"&&!Array.isArray(o)){for(const s in o)if(s!=="default"&&!(s in t)){const i=Object.getOwnPropertyDescriptor(o,s);i&&Object.defineProperty(t,s,i.get?i:{enumerable:!0,get:()=>o[s]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}})();function Fp(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Bp={exports:{}},cl={},Wp={exports:{}},X={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var As=Symbol.for("react.element"),vv=Symbol.for("react.portal"),yv=Symbol.for("react.fragment"),jv=Symbol.for("react.strict_mode"),wv=Symbol.for("react.profiler"),bv=Symbol.for("react.provider"),kv=Symbol.for("react.context"),Sv=Symbol.for("react.forward_ref"),Cv=Symbol.for("react.suspense"),Tv=Symbol.for("react.memo"),Nv=Symbol.for("react.lazy"),nu=Symbol.iterator;function Pv(t){return t===null||typeof t!="object"?null:(t=nu&&t[nu]||t["@@iterator"],typeof t=="function"?t:null)}var zp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$p=Object.assign,Hp={};function jo(t,e,r){this.props=t,this.context=e,this.refs=Hp,this.updater=r||zp}jo.prototype.isReactComponent={};jo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};jo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Up(){}Up.prototype=jo.prototype;function Rc(t,e,r){this.props=t,this.context=e,this.refs=Hp,this.updater=r||zp}var Mc=Rc.prototype=new Up;Mc.constructor=Rc;$p(Mc,jo.prototype);Mc.isPureReactComponent=!0;var ru=Array.isArray,Vp=Object.prototype.hasOwnProperty,_c={current:null},qp={key:!0,ref:!0,__self:!0,__source:!0};function Jp(t,e,r){var o,s={},i=null,l=null;if(e!=null)for(o in e.ref!==void 0&&(l=e.ref),e.key!==void 0&&(i=""+e.key),e)Vp.call(e,o)&&!qp.hasOwnProperty(o)&&(s[o]=e[o]);var a=arguments.length-2;if(a===1)s.children=r;else if(1<a){for(var c=Array(a),d=0;d<a;d++)c[d]=arguments[d+2];s.children=c}if(t&&t.defaultProps)for(o in a=t.defaultProps,a)s[o]===void 0&&(s[o]=a[o]);return{$$typeof:As,type:t,key:i,ref:l,props:s,_owner:_c.current}}function Ev(t,e){return{$$typeof:As,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Oc(t){return typeof t=="object"&&t!==null&&t.$$typeof===As}function Iv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(r){return e[r]})}var ou=/\/+/g;function Fl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Iv(""+t.key):e.toString(36)}function hi(t,e,r,o,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var l=!1;if(t===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case As:case vv:l=!0}}if(l)return l=t,s=s(l),t=o===""?"."+Fl(l,0):o,ru(s)?(r="",t!=null&&(r=t.replace(ou,"$&/")+"/"),hi(s,e,r,"",function(d){return d})):s!=null&&(Oc(s)&&(s=Ev(s,r+(!s.key||l&&l.key===s.key?"":(""+s.key).replace(ou,"$&/")+"/")+t)),e.push(s)),1;if(l=0,o=o===""?".":o+":",ru(t))for(var a=0;a<t.length;a++){i=t[a];var c=o+Fl(i,a);l+=hi(i,e,r,c,s)}else if(c=Pv(t),typeof c=="function")for(t=c.call(t),a=0;!(i=t.next()).done;)i=i.value,c=o+Fl(i,a++),l+=hi(i,e,r,c,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return l}function Vs(t,e,r){if(t==null)return t;var o=[],s=0;return hi(t,o,"","",function(i){return e.call(r,i,s++)}),o}function Av(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(r){(t._status===0||t._status===-1)&&(t._status=1,t._result=r)},function(r){(t._status===0||t._status===-1)&&(t._status=2,t._result=r)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var $e={current:null},pi={transition:null},Rv={ReactCurrentDispatcher:$e,ReactCurrentBatchConfig:pi,ReactCurrentOwner:_c};function Gp(){throw Error("act(...) is not supported in production builds of React.")}X.Children={map:Vs,forEach:function(t,e,r){Vs(t,function(){e.apply(this,arguments)},r)},count:function(t){var e=0;return Vs(t,function(){e++}),e},toArray:function(t){return Vs(t,function(e){return e})||[]},only:function(t){if(!Oc(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};X.Component=jo;X.Fragment=yv;X.Profiler=wv;X.PureComponent=Rc;X.StrictMode=jv;X.Suspense=Cv;X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rv;X.act=Gp;X.cloneElement=function(t,e,r){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var o=$p({},t.props),s=t.key,i=t.ref,l=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,l=_c.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(c in e)Vp.call(e,c)&&!qp.hasOwnProperty(c)&&(o[c]=e[c]===void 0&&a!==void 0?a[c]:e[c])}var c=arguments.length-2;if(c===1)o.children=r;else if(1<c){a=Array(c);for(var d=0;d<c;d++)a[d]=arguments[d+2];o.children=a}return{$$typeof:As,type:t.type,key:s,ref:i,props:o,_owner:l}};X.createContext=function(t){return t={$$typeof:kv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:bv,_context:t},t.Consumer=t};X.createElement=Jp;X.createFactory=function(t){var e=Jp.bind(null,t);return e.type=t,e};X.createRef=function(){return{current:null}};X.forwardRef=function(t){return{$$typeof:Sv,render:t}};X.isValidElement=Oc;X.lazy=function(t){return{$$typeof:Nv,_payload:{_status:-1,_result:t},_init:Av}};X.memo=function(t,e){return{$$typeof:Tv,type:t,compare:e===void 0?null:e}};X.startTransition=function(t){var e=pi.transition;pi.transition={};try{t()}finally{pi.transition=e}};X.unstable_act=Gp;X.useCallback=function(t,e){return $e.current.useCallback(t,e)};X.useContext=function(t){return $e.current.useContext(t)};X.useDebugValue=function(){};X.useDeferredValue=function(t){return $e.current.useDeferredValue(t)};X.useEffect=function(t,e){return $e.current.useEffect(t,e)};X.useId=function(){return $e.current.useId()};X.useImperativeHandle=function(t,e,r){return $e.current.useImperativeHandle(t,e,r)};X.useInsertionEffect=function(t,e){return $e.current.useInsertionEffect(t,e)};X.useLayoutEffect=function(t,e){return $e.current.useLayoutEffect(t,e)};X.useMemo=function(t,e){return $e.current.useMemo(t,e)};X.useReducer=function(t,e,r){return $e.current.useReducer(t,e,r)};X.useRef=function(t){return $e.current.useRef(t)};X.useState=function(t){return $e.current.useState(t)};X.useSyncExternalStore=function(t,e,r){return $e.current.useSyncExternalStore(t,e,r)};X.useTransition=function(){return $e.current.useTransition()};X.version="18.3.1";Wp.exports=X;var v=Wp.exports;const L=Fp(v),Sr=xv({__proto__:null,default:L},[v]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mv=v,_v=Symbol.for("react.element"),Ov=Symbol.for("react.fragment"),Lv=Object.prototype.hasOwnProperty,Dv=Mv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Fv={key:!0,ref:!0,__self:!0,__source:!0};function Qp(t,e,r){var o,s={},i=null,l=null;r!==void 0&&(i=""+r),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(l=e.ref);for(o in e)Lv.call(e,o)&&!Fv.hasOwnProperty(o)&&(s[o]=e[o]);if(t&&t.defaultProps)for(o in e=t.defaultProps,e)s[o]===void 0&&(s[o]=e[o]);return{$$typeof:_v,type:t,key:i,ref:l,props:s,_owner:Dv.current}}cl.Fragment=Ov;cl.jsx=Qp;cl.jsxs=Qp;Bp.exports=cl;var n=Bp.exports,Kp={exports:{}},it={},Xp={exports:{}},Yp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,P){var A=N.length;N.push(P);e:for(;0<A;){var F=A-1>>>1,B=N[F];if(0<s(B,P))N[F]=P,N[A]=B,A=F;else break e}}function r(N){return N.length===0?null:N[0]}function o(N){if(N.length===0)return null;var P=N[0],A=N.pop();if(A!==P){N[0]=A;e:for(var F=0,B=N.length,V=B>>>1;F<V;){var Q=2*(F+1)-1,oe=N[Q],ye=Q+1,Z=N[ye];if(0>s(oe,A))ye<B&&0>s(Z,oe)?(N[F]=Z,N[ye]=A,F=ye):(N[F]=oe,N[Q]=A,F=Q);else if(ye<B&&0>s(Z,A))N[F]=Z,N[ye]=A,F=ye;else break e}}return P}function s(N,P){var A=N.sortIndex-P.sortIndex;return A!==0?A:N.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var l=Date,a=l.now();t.unstable_now=function(){return l.now()-a}}var c=[],d=[],u=1,h=null,g=3,p=!1,j=!1,y=!1,w=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(N){for(var P=r(d);P!==null;){if(P.callback===null)o(d);else if(P.startTime<=N)o(d),P.sortIndex=P.expirationTime,e(c,P);else break;P=r(d)}}function b(N){if(y=!1,x(N),!j)if(r(c)!==null)j=!0,O(k);else{var P=r(d);P!==null&&U(b,P.startTime-N)}}function k(N,P){j=!1,y&&(y=!1,m(E),E=-1),p=!0;var A=g;try{for(x(P),h=r(c);h!==null&&(!(h.expirationTime>P)||N&&!W());){var F=h.callback;if(typeof F=="function"){h.callback=null,g=h.priorityLevel;var B=F(h.expirationTime<=P);P=t.unstable_now(),typeof B=="function"?h.callback=B:h===r(c)&&o(c),x(P)}else o(c);h=r(c)}if(h!==null)var V=!0;else{var Q=r(d);Q!==null&&U(b,Q.startTime-P),V=!1}return V}finally{h=null,g=A,p=!1}}var S=!1,C=null,E=-1,M=5,I=-1;function W(){return!(t.unstable_now()-I<M)}function _(){if(C!==null){var N=t.unstable_now();I=N;var P=!0;try{P=C(!0,N)}finally{P?$():(S=!1,C=null)}}else S=!1}var $;if(typeof f=="function")$=function(){f(_)};else if(typeof MessageChannel<"u"){var z=new MessageChannel,G=z.port2;z.port1.onmessage=_,$=function(){G.postMessage(null)}}else $=function(){w(_,0)};function O(N){C=N,S||(S=!0,$())}function U(N,P){E=w(function(){N(t.unstable_now())},P)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){j||p||(j=!0,O(k))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return r(c)},t.unstable_next=function(N){switch(g){case 1:case 2:case 3:var P=3;break;default:P=g}var A=g;g=P;try{return N()}finally{g=A}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,P){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var A=g;g=N;try{return P()}finally{g=A}},t.unstable_scheduleCallback=function(N,P,A){var F=t.unstable_now();switch(typeof A=="object"&&A!==null?(A=A.delay,A=typeof A=="number"&&0<A?F+A:F):A=F,N){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=A+B,N={id:u++,callback:P,priorityLevel:N,startTime:A,expirationTime:B,sortIndex:-1},A>F?(N.sortIndex=A,e(d,N),r(c)===null&&N===r(d)&&(y?(m(E),E=-1):y=!0,U(b,A-F))):(N.sortIndex=B,e(c,N),j||p||(j=!0,O(k))),N},t.unstable_shouldYield=W,t.unstable_wrapCallback=function(N){var P=g;return function(){var A=g;g=P;try{return N.apply(this,arguments)}finally{g=A}}}})(Yp);Xp.exports=Yp;var Bv=Xp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wv=v,st=Bv;function R(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,r=1;r<arguments.length;r++)e+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Zp=new Set,ss={};function Cr(t,e){ho(t,e),ho(t+"Capture",e)}function ho(t,e){for(ss[t]=e,t=0;t<e.length;t++)Zp.add(e[t])}var tn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),va=Object.prototype.hasOwnProperty,zv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,su={},iu={};function $v(t){return va.call(iu,t)?!0:va.call(su,t)?!1:zv.test(t)?iu[t]=!0:(su[t]=!0,!1)}function Hv(t,e,r,o){if(r!==null&&r.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return o?!1:r!==null?!r.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Uv(t,e,r,o){if(e===null||typeof e>"u"||Hv(t,e,r,o))return!0;if(o)return!1;if(r!==null)switch(r.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function He(t,e,r,o,s,i,l){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=o,this.attributeNamespace=s,this.mustUseProperty=r,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=l}var Ie={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ie[t]=new He(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ie[e]=new He(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ie[t]=new He(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ie[t]=new He(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ie[t]=new He(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ie[t]=new He(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ie[t]=new He(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ie[t]=new He(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ie[t]=new He(t,5,!1,t.toLowerCase(),null,!1,!1)});var Lc=/[\-:]([a-z])/g;function Dc(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Lc,Dc);Ie[e]=new He(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Lc,Dc);Ie[e]=new He(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Lc,Dc);Ie[e]=new He(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ie[t]=new He(t,1,!1,t.toLowerCase(),null,!1,!1)});Ie.xlinkHref=new He("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ie[t]=new He(t,1,!1,t.toLowerCase(),null,!0,!0)});function Fc(t,e,r,o){var s=Ie.hasOwnProperty(e)?Ie[e]:null;(s!==null?s.type!==0:o||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Uv(e,r,s,o)&&(r=null),o||s===null?$v(e)&&(r===null?t.removeAttribute(e):t.setAttribute(e,""+r)):s.mustUseProperty?t[s.propertyName]=r===null?s.type===3?!1:"":r:(e=s.attributeName,o=s.attributeNamespace,r===null?t.removeAttribute(e):(s=s.type,r=s===3||s===4&&r===!0?"":""+r,o?t.setAttributeNS(o,e,r):t.setAttribute(e,r))))}var cn=Wv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,qs=Symbol.for("react.element"),Or=Symbol.for("react.portal"),Lr=Symbol.for("react.fragment"),Bc=Symbol.for("react.strict_mode"),ya=Symbol.for("react.profiler"),ef=Symbol.for("react.provider"),tf=Symbol.for("react.context"),Wc=Symbol.for("react.forward_ref"),ja=Symbol.for("react.suspense"),wa=Symbol.for("react.suspense_list"),zc=Symbol.for("react.memo"),jn=Symbol.for("react.lazy"),nf=Symbol.for("react.offscreen"),lu=Symbol.iterator;function Mo(t){return t===null||typeof t!="object"?null:(t=lu&&t[lu]||t["@@iterator"],typeof t=="function"?t:null)}var pe=Object.assign,Bl;function Ho(t){if(Bl===void 0)try{throw Error()}catch(r){var e=r.stack.trim().match(/\n( *(at )?)/);Bl=e&&e[1]||""}return`
`+Bl+t}var Wl=!1;function zl(t,e){if(!t||Wl)return"";Wl=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var o=d}Reflect.construct(t,[],e)}else{try{e.call()}catch(d){o=d}t.call(e.prototype)}else{try{throw Error()}catch(d){o=d}t()}}catch(d){if(d&&o&&typeof d.stack=="string"){for(var s=d.stack.split(`
`),i=o.stack.split(`
`),l=s.length-1,a=i.length-1;1<=l&&0<=a&&s[l]!==i[a];)a--;for(;1<=l&&0<=a;l--,a--)if(s[l]!==i[a]){if(l!==1||a!==1)do if(l--,a--,0>a||s[l]!==i[a]){var c=`
`+s[l].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=l&&0<=a);break}}}finally{Wl=!1,Error.prepareStackTrace=r}return(t=t?t.displayName||t.name:"")?Ho(t):""}function Vv(t){switch(t.tag){case 5:return Ho(t.type);case 16:return Ho("Lazy");case 13:return Ho("Suspense");case 19:return Ho("SuspenseList");case 0:case 2:case 15:return t=zl(t.type,!1),t;case 11:return t=zl(t.type.render,!1),t;case 1:return t=zl(t.type,!0),t;default:return""}}function ba(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Lr:return"Fragment";case Or:return"Portal";case ya:return"Profiler";case Bc:return"StrictMode";case ja:return"Suspense";case wa:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case tf:return(t.displayName||"Context")+".Consumer";case ef:return(t._context.displayName||"Context")+".Provider";case Wc:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case zc:return e=t.displayName||null,e!==null?e:ba(t.type)||"Memo";case jn:e=t._payload,t=t._init;try{return ba(t(e))}catch{}}return null}function qv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ba(e);case 8:return e===Bc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function $n(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function rf(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Jv(t){var e=rf(t)?"checked":"value",r=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),o=""+t[e];if(!t.hasOwnProperty(e)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var s=r.get,i=r.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(l){o=""+l,i.call(this,l)}}),Object.defineProperty(t,e,{enumerable:r.enumerable}),{getValue:function(){return o},setValue:function(l){o=""+l},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Js(t){t._valueTracker||(t._valueTracker=Jv(t))}function of(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var r=e.getValue(),o="";return t&&(o=rf(t)?t.checked?"true":"false":t.value),t=o,t!==r?(e.setValue(t),!0):!1}function Ri(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ka(t,e){var r=e.checked;return pe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??t._wrapperState.initialChecked})}function au(t,e){var r=e.defaultValue==null?"":e.defaultValue,o=e.checked!=null?e.checked:e.defaultChecked;r=$n(e.value!=null?e.value:r),t._wrapperState={initialChecked:o,initialValue:r,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function sf(t,e){e=e.checked,e!=null&&Fc(t,"checked",e,!1)}function Sa(t,e){sf(t,e);var r=$n(e.value),o=e.type;if(r!=null)o==="number"?(r===0&&t.value===""||t.value!=r)&&(t.value=""+r):t.value!==""+r&&(t.value=""+r);else if(o==="submit"||o==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ca(t,e.type,r):e.hasOwnProperty("defaultValue")&&Ca(t,e.type,$n(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function cu(t,e,r){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var o=e.type;if(!(o!=="submit"&&o!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,r||e===t.value||(t.value=e),t.defaultValue=e}r=t.name,r!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,r!==""&&(t.name=r)}function Ca(t,e,r){(e!=="number"||Ri(t.ownerDocument)!==t)&&(r==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+r&&(t.defaultValue=""+r))}var Uo=Array.isArray;function Jr(t,e,r,o){if(t=t.options,e){e={};for(var s=0;s<r.length;s++)e["$"+r[s]]=!0;for(r=0;r<t.length;r++)s=e.hasOwnProperty("$"+t[r].value),t[r].selected!==s&&(t[r].selected=s),s&&o&&(t[r].defaultSelected=!0)}else{for(r=""+$n(r),e=null,s=0;s<t.length;s++){if(t[s].value===r){t[s].selected=!0,o&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function Ta(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(R(91));return pe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function du(t,e){var r=e.value;if(r==null){if(r=e.children,e=e.defaultValue,r!=null){if(e!=null)throw Error(R(92));if(Uo(r)){if(1<r.length)throw Error(R(93));r=r[0]}e=r}e==null&&(e=""),r=e}t._wrapperState={initialValue:$n(r)}}function lf(t,e){var r=$n(e.value),o=$n(e.defaultValue);r!=null&&(r=""+r,r!==t.value&&(t.value=r),e.defaultValue==null&&t.defaultValue!==r&&(t.defaultValue=r)),o!=null&&(t.defaultValue=""+o)}function uu(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function af(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Na(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?af(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Gs,cf=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,r,o,s){MSApp.execUnsafeLocalFunction(function(){return t(e,r,o,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Gs=Gs||document.createElement("div"),Gs.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Gs.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function is(t,e){if(e){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=e;return}}t.textContent=e}var Go={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Gv=["Webkit","ms","Moz","O"];Object.keys(Go).forEach(function(t){Gv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Go[e]=Go[t]})});function df(t,e,r){return e==null||typeof e=="boolean"||e===""?"":r||typeof e!="number"||e===0||Go.hasOwnProperty(t)&&Go[t]?(""+e).trim():e+"px"}function uf(t,e){t=t.style;for(var r in e)if(e.hasOwnProperty(r)){var o=r.indexOf("--")===0,s=df(r,e[r],o);r==="float"&&(r="cssFloat"),o?t.setProperty(r,s):t[r]=s}}var Qv=pe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Pa(t,e){if(e){if(Qv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(R(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(R(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(R(61))}if(e.style!=null&&typeof e.style!="object")throw Error(R(62))}}function Ea(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ia=null;function $c(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Aa=null,Gr=null,Qr=null;function hu(t){if(t=_s(t)){if(typeof Aa!="function")throw Error(R(280));var e=t.stateNode;e&&(e=fl(e),Aa(t.stateNode,t.type,e))}}function hf(t){Gr?Qr?Qr.push(t):Qr=[t]:Gr=t}function pf(){if(Gr){var t=Gr,e=Qr;if(Qr=Gr=null,hu(t),e)for(t=0;t<e.length;t++)hu(e[t])}}function ff(t,e){return t(e)}function mf(){}var $l=!1;function gf(t,e,r){if($l)return t(e,r);$l=!0;try{return ff(t,e,r)}finally{$l=!1,(Gr!==null||Qr!==null)&&(mf(),pf())}}function ls(t,e){var r=t.stateNode;if(r===null)return null;var o=fl(r);if(o===null)return null;r=o[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(R(231,e,typeof r));return r}var Ra=!1;if(tn)try{var _o={};Object.defineProperty(_o,"passive",{get:function(){Ra=!0}}),window.addEventListener("test",_o,_o),window.removeEventListener("test",_o,_o)}catch{Ra=!1}function Kv(t,e,r,o,s,i,l,a,c){var d=Array.prototype.slice.call(arguments,3);try{e.apply(r,d)}catch(u){this.onError(u)}}var Qo=!1,Mi=null,_i=!1,Ma=null,Xv={onError:function(t){Qo=!0,Mi=t}};function Yv(t,e,r,o,s,i,l,a,c){Qo=!1,Mi=null,Kv.apply(Xv,arguments)}function Zv(t,e,r,o,s,i,l,a,c){if(Yv.apply(this,arguments),Qo){if(Qo){var d=Mi;Qo=!1,Mi=null}else throw Error(R(198));_i||(_i=!0,Ma=d)}}function Tr(t){var e=t,r=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(r=e.return),t=e.return;while(t)}return e.tag===3?r:null}function xf(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function pu(t){if(Tr(t)!==t)throw Error(R(188))}function ey(t){var e=t.alternate;if(!e){if(e=Tr(t),e===null)throw Error(R(188));return e!==t?null:t}for(var r=t,o=e;;){var s=r.return;if(s===null)break;var i=s.alternate;if(i===null){if(o=s.return,o!==null){r=o;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===r)return pu(s),t;if(i===o)return pu(s),e;i=i.sibling}throw Error(R(188))}if(r.return!==o.return)r=s,o=i;else{for(var l=!1,a=s.child;a;){if(a===r){l=!0,r=s,o=i;break}if(a===o){l=!0,o=s,r=i;break}a=a.sibling}if(!l){for(a=i.child;a;){if(a===r){l=!0,r=i,o=s;break}if(a===o){l=!0,o=i,r=s;break}a=a.sibling}if(!l)throw Error(R(189))}}if(r.alternate!==o)throw Error(R(190))}if(r.tag!==3)throw Error(R(188));return r.stateNode.current===r?t:e}function vf(t){return t=ey(t),t!==null?yf(t):null}function yf(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=yf(t);if(e!==null)return e;t=t.sibling}return null}var jf=st.unstable_scheduleCallback,fu=st.unstable_cancelCallback,ty=st.unstable_shouldYield,ny=st.unstable_requestPaint,ge=st.unstable_now,ry=st.unstable_getCurrentPriorityLevel,Hc=st.unstable_ImmediatePriority,wf=st.unstable_UserBlockingPriority,Oi=st.unstable_NormalPriority,oy=st.unstable_LowPriority,bf=st.unstable_IdlePriority,dl=null,zt=null;function sy(t){if(zt&&typeof zt.onCommitFiberRoot=="function")try{zt.onCommitFiberRoot(dl,t,void 0,(t.current.flags&128)===128)}catch{}}var It=Math.clz32?Math.clz32:ay,iy=Math.log,ly=Math.LN2;function ay(t){return t>>>=0,t===0?32:31-(iy(t)/ly|0)|0}var Qs=64,Ks=4194304;function Vo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Li(t,e){var r=t.pendingLanes;if(r===0)return 0;var o=0,s=t.suspendedLanes,i=t.pingedLanes,l=r&268435455;if(l!==0){var a=l&~s;a!==0?o=Vo(a):(i&=l,i!==0&&(o=Vo(i)))}else l=r&~s,l!==0?o=Vo(l):i!==0&&(o=Vo(i));if(o===0)return 0;if(e!==0&&e!==o&&!(e&s)&&(s=o&-o,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(o&4&&(o|=r&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=o;0<e;)r=31-It(e),s=1<<r,o|=t[r],e&=~s;return o}function cy(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function dy(t,e){for(var r=t.suspendedLanes,o=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var l=31-It(i),a=1<<l,c=s[l];c===-1?(!(a&r)||a&o)&&(s[l]=cy(a,e)):c<=e&&(t.expiredLanes|=a),i&=~a}}function _a(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function kf(){var t=Qs;return Qs<<=1,!(Qs&4194240)&&(Qs=64),t}function Hl(t){for(var e=[],r=0;31>r;r++)e.push(t);return e}function Rs(t,e,r){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-It(e),t[e]=r}function uy(t,e){var r=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var o=t.eventTimes;for(t=t.expirationTimes;0<r;){var s=31-It(r),i=1<<s;e[s]=0,o[s]=-1,t[s]=-1,r&=~i}}function Uc(t,e){var r=t.entangledLanes|=e;for(t=t.entanglements;r;){var o=31-It(r),s=1<<o;s&e|t[o]&e&&(t[o]|=e),r&=~s}}var ee=0;function Sf(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Cf,Vc,Tf,Nf,Pf,Oa=!1,Xs=[],Mn=null,_n=null,On=null,as=new Map,cs=new Map,bn=[],hy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function mu(t,e){switch(t){case"focusin":case"focusout":Mn=null;break;case"dragenter":case"dragleave":_n=null;break;case"mouseover":case"mouseout":On=null;break;case"pointerover":case"pointerout":as.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":cs.delete(e.pointerId)}}function Oo(t,e,r,o,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:r,eventSystemFlags:o,nativeEvent:i,targetContainers:[s]},e!==null&&(e=_s(e),e!==null&&Vc(e)),t):(t.eventSystemFlags|=o,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function py(t,e,r,o,s){switch(e){case"focusin":return Mn=Oo(Mn,t,e,r,o,s),!0;case"dragenter":return _n=Oo(_n,t,e,r,o,s),!0;case"mouseover":return On=Oo(On,t,e,r,o,s),!0;case"pointerover":var i=s.pointerId;return as.set(i,Oo(as.get(i)||null,t,e,r,o,s)),!0;case"gotpointercapture":return i=s.pointerId,cs.set(i,Oo(cs.get(i)||null,t,e,r,o,s)),!0}return!1}function Ef(t){var e=sr(t.target);if(e!==null){var r=Tr(e);if(r!==null){if(e=r.tag,e===13){if(e=xf(r),e!==null){t.blockedOn=e,Pf(t.priority,function(){Tf(r)});return}}else if(e===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function fi(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var r=La(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(r===null){r=t.nativeEvent;var o=new r.constructor(r.type,r);Ia=o,r.target.dispatchEvent(o),Ia=null}else return e=_s(r),e!==null&&Vc(e),t.blockedOn=r,!1;e.shift()}return!0}function gu(t,e,r){fi(t)&&r.delete(e)}function fy(){Oa=!1,Mn!==null&&fi(Mn)&&(Mn=null),_n!==null&&fi(_n)&&(_n=null),On!==null&&fi(On)&&(On=null),as.forEach(gu),cs.forEach(gu)}function Lo(t,e){t.blockedOn===e&&(t.blockedOn=null,Oa||(Oa=!0,st.unstable_scheduleCallback(st.unstable_NormalPriority,fy)))}function ds(t){function e(s){return Lo(s,t)}if(0<Xs.length){Lo(Xs[0],t);for(var r=1;r<Xs.length;r++){var o=Xs[r];o.blockedOn===t&&(o.blockedOn=null)}}for(Mn!==null&&Lo(Mn,t),_n!==null&&Lo(_n,t),On!==null&&Lo(On,t),as.forEach(e),cs.forEach(e),r=0;r<bn.length;r++)o=bn[r],o.blockedOn===t&&(o.blockedOn=null);for(;0<bn.length&&(r=bn[0],r.blockedOn===null);)Ef(r),r.blockedOn===null&&bn.shift()}var Kr=cn.ReactCurrentBatchConfig,Di=!0;function my(t,e,r,o){var s=ee,i=Kr.transition;Kr.transition=null;try{ee=1,qc(t,e,r,o)}finally{ee=s,Kr.transition=i}}function gy(t,e,r,o){var s=ee,i=Kr.transition;Kr.transition=null;try{ee=4,qc(t,e,r,o)}finally{ee=s,Kr.transition=i}}function qc(t,e,r,o){if(Di){var s=La(t,e,r,o);if(s===null)Zl(t,e,o,Fi,r),mu(t,o);else if(py(s,t,e,r,o))o.stopPropagation();else if(mu(t,o),e&4&&-1<hy.indexOf(t)){for(;s!==null;){var i=_s(s);if(i!==null&&Cf(i),i=La(t,e,r,o),i===null&&Zl(t,e,o,Fi,r),i===s)break;s=i}s!==null&&o.stopPropagation()}else Zl(t,e,o,null,r)}}var Fi=null;function La(t,e,r,o){if(Fi=null,t=$c(o),t=sr(t),t!==null)if(e=Tr(t),e===null)t=null;else if(r=e.tag,r===13){if(t=xf(e),t!==null)return t;t=null}else if(r===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Fi=t,null}function If(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ry()){case Hc:return 1;case wf:return 4;case Oi:case oy:return 16;case bf:return 536870912;default:return 16}default:return 16}}var In=null,Jc=null,mi=null;function Af(){if(mi)return mi;var t,e=Jc,r=e.length,o,s="value"in In?In.value:In.textContent,i=s.length;for(t=0;t<r&&e[t]===s[t];t++);var l=r-t;for(o=1;o<=l&&e[r-o]===s[i-o];o++);return mi=s.slice(t,1<o?1-o:void 0)}function gi(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ys(){return!0}function xu(){return!1}function lt(t){function e(r,o,s,i,l){this._reactName=r,this._targetInst=s,this.type=o,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(r=t[a],this[a]=r?r(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ys:xu,this.isPropagationStopped=xu,this}return pe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Ys)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Ys)},persist:function(){},isPersistent:Ys}),e}var wo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Gc=lt(wo),Ms=pe({},wo,{view:0,detail:0}),xy=lt(Ms),Ul,Vl,Do,ul=pe({},Ms,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Do&&(Do&&t.type==="mousemove"?(Ul=t.screenX-Do.screenX,Vl=t.screenY-Do.screenY):Vl=Ul=0,Do=t),Ul)},movementY:function(t){return"movementY"in t?t.movementY:Vl}}),vu=lt(ul),vy=pe({},ul,{dataTransfer:0}),yy=lt(vy),jy=pe({},Ms,{relatedTarget:0}),ql=lt(jy),wy=pe({},wo,{animationName:0,elapsedTime:0,pseudoElement:0}),by=lt(wy),ky=pe({},wo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Sy=lt(ky),Cy=pe({},wo,{data:0}),yu=lt(Cy),Ty={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ny={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Py={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ey(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Py[t])?!!e[t]:!1}function Qc(){return Ey}var Iy=pe({},Ms,{key:function(t){if(t.key){var e=Ty[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=gi(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ny[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qc,charCode:function(t){return t.type==="keypress"?gi(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?gi(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ay=lt(Iy),Ry=pe({},ul,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ju=lt(Ry),My=pe({},Ms,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qc}),_y=lt(My),Oy=pe({},wo,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ly=lt(Oy),Dy=pe({},ul,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Fy=lt(Dy),By=[9,13,27,32],Kc=tn&&"CompositionEvent"in window,Ko=null;tn&&"documentMode"in document&&(Ko=document.documentMode);var Wy=tn&&"TextEvent"in window&&!Ko,Rf=tn&&(!Kc||Ko&&8<Ko&&11>=Ko),wu=" ",bu=!1;function Mf(t,e){switch(t){case"keyup":return By.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _f(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Dr=!1;function zy(t,e){switch(t){case"compositionend":return _f(e);case"keypress":return e.which!==32?null:(bu=!0,wu);case"textInput":return t=e.data,t===wu&&bu?null:t;default:return null}}function $y(t,e){if(Dr)return t==="compositionend"||!Kc&&Mf(t,e)?(t=Af(),mi=Jc=In=null,Dr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Rf&&e.locale!=="ko"?null:e.data;default:return null}}var Hy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ku(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Hy[t.type]:e==="textarea"}function Of(t,e,r,o){hf(o),e=Bi(e,"onChange"),0<e.length&&(r=new Gc("onChange","change",null,r,o),t.push({event:r,listeners:e}))}var Xo=null,us=null;function Uy(t){qf(t,0)}function hl(t){var e=Wr(t);if(of(e))return t}function Vy(t,e){if(t==="change")return e}var Lf=!1;if(tn){var Jl;if(tn){var Gl="oninput"in document;if(!Gl){var Su=document.createElement("div");Su.setAttribute("oninput","return;"),Gl=typeof Su.oninput=="function"}Jl=Gl}else Jl=!1;Lf=Jl&&(!document.documentMode||9<document.documentMode)}function Cu(){Xo&&(Xo.detachEvent("onpropertychange",Df),us=Xo=null)}function Df(t){if(t.propertyName==="value"&&hl(us)){var e=[];Of(e,us,t,$c(t)),gf(Uy,e)}}function qy(t,e,r){t==="focusin"?(Cu(),Xo=e,us=r,Xo.attachEvent("onpropertychange",Df)):t==="focusout"&&Cu()}function Jy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return hl(us)}function Gy(t,e){if(t==="click")return hl(e)}function Qy(t,e){if(t==="input"||t==="change")return hl(e)}function Ky(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Rt=typeof Object.is=="function"?Object.is:Ky;function hs(t,e){if(Rt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var r=Object.keys(t),o=Object.keys(e);if(r.length!==o.length)return!1;for(o=0;o<r.length;o++){var s=r[o];if(!va.call(e,s)||!Rt(t[s],e[s]))return!1}return!0}function Tu(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Nu(t,e){var r=Tu(t);t=0;for(var o;r;){if(r.nodeType===3){if(o=t+r.textContent.length,t<=e&&o>=e)return{node:r,offset:e-t};t=o}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Tu(r)}}function Ff(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Ff(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Bf(){for(var t=window,e=Ri();e instanceof t.HTMLIFrameElement;){try{var r=typeof e.contentWindow.location.href=="string"}catch{r=!1}if(r)t=e.contentWindow;else break;e=Ri(t.document)}return e}function Xc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Xy(t){var e=Bf(),r=t.focusedElem,o=t.selectionRange;if(e!==r&&r&&r.ownerDocument&&Ff(r.ownerDocument.documentElement,r)){if(o!==null&&Xc(r)){if(e=o.start,t=o.end,t===void 0&&(t=e),"selectionStart"in r)r.selectionStart=e,r.selectionEnd=Math.min(t,r.value.length);else if(t=(e=r.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=r.textContent.length,i=Math.min(o.start,s);o=o.end===void 0?i:Math.min(o.end,s),!t.extend&&i>o&&(s=o,o=i,i=s),s=Nu(r,i);var l=Nu(r,o);s&&l&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==l.node||t.focusOffset!==l.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>o?(t.addRange(e),t.extend(l.node,l.offset)):(e.setEnd(l.node,l.offset),t.addRange(e)))}}for(e=[],t=r;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<e.length;r++)t=e[r],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Yy=tn&&"documentMode"in document&&11>=document.documentMode,Fr=null,Da=null,Yo=null,Fa=!1;function Pu(t,e,r){var o=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Fa||Fr==null||Fr!==Ri(o)||(o=Fr,"selectionStart"in o&&Xc(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Yo&&hs(Yo,o)||(Yo=o,o=Bi(Da,"onSelect"),0<o.length&&(e=new Gc("onSelect","select",null,e,r),t.push({event:e,listeners:o}),e.target=Fr)))}function Zs(t,e){var r={};return r[t.toLowerCase()]=e.toLowerCase(),r["Webkit"+t]="webkit"+e,r["Moz"+t]="moz"+e,r}var Br={animationend:Zs("Animation","AnimationEnd"),animationiteration:Zs("Animation","AnimationIteration"),animationstart:Zs("Animation","AnimationStart"),transitionend:Zs("Transition","TransitionEnd")},Ql={},Wf={};tn&&(Wf=document.createElement("div").style,"AnimationEvent"in window||(delete Br.animationend.animation,delete Br.animationiteration.animation,delete Br.animationstart.animation),"TransitionEvent"in window||delete Br.transitionend.transition);function pl(t){if(Ql[t])return Ql[t];if(!Br[t])return t;var e=Br[t],r;for(r in e)if(e.hasOwnProperty(r)&&r in Wf)return Ql[t]=e[r];return t}var zf=pl("animationend"),$f=pl("animationiteration"),Hf=pl("animationstart"),Uf=pl("transitionend"),Vf=new Map,Eu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qn(t,e){Vf.set(t,e),Cr(e,[t])}for(var Kl=0;Kl<Eu.length;Kl++){var Xl=Eu[Kl],Zy=Xl.toLowerCase(),ej=Xl[0].toUpperCase()+Xl.slice(1);qn(Zy,"on"+ej)}qn(zf,"onAnimationEnd");qn($f,"onAnimationIteration");qn(Hf,"onAnimationStart");qn("dblclick","onDoubleClick");qn("focusin","onFocus");qn("focusout","onBlur");qn(Uf,"onTransitionEnd");ho("onMouseEnter",["mouseout","mouseover"]);ho("onMouseLeave",["mouseout","mouseover"]);ho("onPointerEnter",["pointerout","pointerover"]);ho("onPointerLeave",["pointerout","pointerover"]);Cr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Cr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Cr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Cr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Cr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Cr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),tj=new Set("cancel close invalid load scroll toggle".split(" ").concat(qo));function Iu(t,e,r){var o=t.type||"unknown-event";t.currentTarget=r,Zv(o,e,void 0,t),t.currentTarget=null}function qf(t,e){e=(e&4)!==0;for(var r=0;r<t.length;r++){var o=t[r],s=o.event;o=o.listeners;e:{var i=void 0;if(e)for(var l=o.length-1;0<=l;l--){var a=o[l],c=a.instance,d=a.currentTarget;if(a=a.listener,c!==i&&s.isPropagationStopped())break e;Iu(s,a,d),i=c}else for(l=0;l<o.length;l++){if(a=o[l],c=a.instance,d=a.currentTarget,a=a.listener,c!==i&&s.isPropagationStopped())break e;Iu(s,a,d),i=c}}}if(_i)throw t=Ma,_i=!1,Ma=null,t}function ie(t,e){var r=e[Ha];r===void 0&&(r=e[Ha]=new Set);var o=t+"__bubble";r.has(o)||(Jf(e,t,2,!1),r.add(o))}function Yl(t,e,r){var o=0;e&&(o|=4),Jf(r,t,o,e)}var ei="_reactListening"+Math.random().toString(36).slice(2);function ps(t){if(!t[ei]){t[ei]=!0,Zp.forEach(function(r){r!=="selectionchange"&&(tj.has(r)||Yl(r,!1,t),Yl(r,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ei]||(e[ei]=!0,Yl("selectionchange",!1,e))}}function Jf(t,e,r,o){switch(If(e)){case 1:var s=my;break;case 4:s=gy;break;default:s=qc}r=s.bind(null,e,r,t),s=void 0,!Ra||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),o?s!==void 0?t.addEventListener(e,r,{capture:!0,passive:s}):t.addEventListener(e,r,!0):s!==void 0?t.addEventListener(e,r,{passive:s}):t.addEventListener(e,r,!1)}function Zl(t,e,r,o,s){var i=o;if(!(e&1)&&!(e&2)&&o!==null)e:for(;;){if(o===null)return;var l=o.tag;if(l===3||l===4){var a=o.stateNode.containerInfo;if(a===s||a.nodeType===8&&a.parentNode===s)break;if(l===4)for(l=o.return;l!==null;){var c=l.tag;if((c===3||c===4)&&(c=l.stateNode.containerInfo,c===s||c.nodeType===8&&c.parentNode===s))return;l=l.return}for(;a!==null;){if(l=sr(a),l===null)return;if(c=l.tag,c===5||c===6){o=i=l;continue e}a=a.parentNode}}o=o.return}gf(function(){var d=i,u=$c(r),h=[];e:{var g=Vf.get(t);if(g!==void 0){var p=Gc,j=t;switch(t){case"keypress":if(gi(r)===0)break e;case"keydown":case"keyup":p=Ay;break;case"focusin":j="focus",p=ql;break;case"focusout":j="blur",p=ql;break;case"beforeblur":case"afterblur":p=ql;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=vu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=yy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=_y;break;case zf:case $f:case Hf:p=by;break;case Uf:p=Ly;break;case"scroll":p=xy;break;case"wheel":p=Fy;break;case"copy":case"cut":case"paste":p=Sy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=ju}var y=(e&4)!==0,w=!y&&t==="scroll",m=y?g!==null?g+"Capture":null:g;y=[];for(var f=d,x;f!==null;){x=f;var b=x.stateNode;if(x.tag===5&&b!==null&&(x=b,m!==null&&(b=ls(f,m),b!=null&&y.push(fs(f,b,x)))),w)break;f=f.return}0<y.length&&(g=new p(g,j,null,r,u),h.push({event:g,listeners:y}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",g&&r!==Ia&&(j=r.relatedTarget||r.fromElement)&&(sr(j)||j[nn]))break e;if((p||g)&&(g=u.window===u?u:(g=u.ownerDocument)?g.defaultView||g.parentWindow:window,p?(j=r.relatedTarget||r.toElement,p=d,j=j?sr(j):null,j!==null&&(w=Tr(j),j!==w||j.tag!==5&&j.tag!==6)&&(j=null)):(p=null,j=d),p!==j)){if(y=vu,b="onMouseLeave",m="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(y=ju,b="onPointerLeave",m="onPointerEnter",f="pointer"),w=p==null?g:Wr(p),x=j==null?g:Wr(j),g=new y(b,f+"leave",p,r,u),g.target=w,g.relatedTarget=x,b=null,sr(u)===d&&(y=new y(m,f+"enter",j,r,u),y.target=x,y.relatedTarget=w,b=y),w=b,p&&j)t:{for(y=p,m=j,f=0,x=y;x;x=Mr(x))f++;for(x=0,b=m;b;b=Mr(b))x++;for(;0<f-x;)y=Mr(y),f--;for(;0<x-f;)m=Mr(m),x--;for(;f--;){if(y===m||m!==null&&y===m.alternate)break t;y=Mr(y),m=Mr(m)}y=null}else y=null;p!==null&&Au(h,g,p,y,!1),j!==null&&w!==null&&Au(h,w,j,y,!0)}}e:{if(g=d?Wr(d):window,p=g.nodeName&&g.nodeName.toLowerCase(),p==="select"||p==="input"&&g.type==="file")var k=Vy;else if(ku(g))if(Lf)k=Qy;else{k=Jy;var S=qy}else(p=g.nodeName)&&p.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(k=Gy);if(k&&(k=k(t,d))){Of(h,k,r,u);break e}S&&S(t,g,d),t==="focusout"&&(S=g._wrapperState)&&S.controlled&&g.type==="number"&&Ca(g,"number",g.value)}switch(S=d?Wr(d):window,t){case"focusin":(ku(S)||S.contentEditable==="true")&&(Fr=S,Da=d,Yo=null);break;case"focusout":Yo=Da=Fr=null;break;case"mousedown":Fa=!0;break;case"contextmenu":case"mouseup":case"dragend":Fa=!1,Pu(h,r,u);break;case"selectionchange":if(Yy)break;case"keydown":case"keyup":Pu(h,r,u)}var C;if(Kc)e:{switch(t){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else Dr?Mf(t,r)&&(E="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(E="onCompositionStart");E&&(Rf&&r.locale!=="ko"&&(Dr||E!=="onCompositionStart"?E==="onCompositionEnd"&&Dr&&(C=Af()):(In=u,Jc="value"in In?In.value:In.textContent,Dr=!0)),S=Bi(d,E),0<S.length&&(E=new yu(E,t,null,r,u),h.push({event:E,listeners:S}),C?E.data=C:(C=_f(r),C!==null&&(E.data=C)))),(C=Wy?zy(t,r):$y(t,r))&&(d=Bi(d,"onBeforeInput"),0<d.length&&(u=new yu("onBeforeInput","beforeinput",null,r,u),h.push({event:u,listeners:d}),u.data=C))}qf(h,e)})}function fs(t,e,r){return{instance:t,listener:e,currentTarget:r}}function Bi(t,e){for(var r=e+"Capture",o=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=ls(t,r),i!=null&&o.unshift(fs(t,i,s)),i=ls(t,e),i!=null&&o.push(fs(t,i,s))),t=t.return}return o}function Mr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Au(t,e,r,o,s){for(var i=e._reactName,l=[];r!==null&&r!==o;){var a=r,c=a.alternate,d=a.stateNode;if(c!==null&&c===o)break;a.tag===5&&d!==null&&(a=d,s?(c=ls(r,i),c!=null&&l.unshift(fs(r,c,a))):s||(c=ls(r,i),c!=null&&l.push(fs(r,c,a)))),r=r.return}l.length!==0&&t.push({event:e,listeners:l})}var nj=/\r\n?/g,rj=/\u0000|\uFFFD/g;function Ru(t){return(typeof t=="string"?t:""+t).replace(nj,`
`).replace(rj,"")}function ti(t,e,r){if(e=Ru(e),Ru(t)!==e&&r)throw Error(R(425))}function Wi(){}var Ba=null,Wa=null;function za(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var $a=typeof setTimeout=="function"?setTimeout:void 0,oj=typeof clearTimeout=="function"?clearTimeout:void 0,Mu=typeof Promise=="function"?Promise:void 0,sj=typeof queueMicrotask=="function"?queueMicrotask:typeof Mu<"u"?function(t){return Mu.resolve(null).then(t).catch(ij)}:$a;function ij(t){setTimeout(function(){throw t})}function ea(t,e){var r=e,o=0;do{var s=r.nextSibling;if(t.removeChild(r),s&&s.nodeType===8)if(r=s.data,r==="/$"){if(o===0){t.removeChild(s),ds(e);return}o--}else r!=="$"&&r!=="$?"&&r!=="$!"||o++;r=s}while(r);ds(e)}function Ln(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function _u(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"){if(e===0)return t;e--}else r==="/$"&&e++}t=t.previousSibling}return null}var bo=Math.random().toString(36).slice(2),Bt="__reactFiber$"+bo,ms="__reactProps$"+bo,nn="__reactContainer$"+bo,Ha="__reactEvents$"+bo,lj="__reactListeners$"+bo,aj="__reactHandles$"+bo;function sr(t){var e=t[Bt];if(e)return e;for(var r=t.parentNode;r;){if(e=r[nn]||r[Bt]){if(r=e.alternate,e.child!==null||r!==null&&r.child!==null)for(t=_u(t);t!==null;){if(r=t[Bt])return r;t=_u(t)}return e}t=r,r=t.parentNode}return null}function _s(t){return t=t[Bt]||t[nn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Wr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(R(33))}function fl(t){return t[ms]||null}var Ua=[],zr=-1;function Jn(t){return{current:t}}function le(t){0>zr||(t.current=Ua[zr],Ua[zr]=null,zr--)}function re(t,e){zr++,Ua[zr]=t.current,t.current=e}var Hn={},Le=Jn(Hn),Qe=Jn(!1),gr=Hn;function po(t,e){var r=t.type.contextTypes;if(!r)return Hn;var o=t.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===e)return o.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in r)s[i]=e[i];return o&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function Ke(t){return t=t.childContextTypes,t!=null}function zi(){le(Qe),le(Le)}function Ou(t,e,r){if(Le.current!==Hn)throw Error(R(168));re(Le,e),re(Qe,r)}function Gf(t,e,r){var o=t.stateNode;if(e=e.childContextTypes,typeof o.getChildContext!="function")return r;o=o.getChildContext();for(var s in o)if(!(s in e))throw Error(R(108,qv(t)||"Unknown",s));return pe({},r,o)}function $i(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Hn,gr=Le.current,re(Le,t),re(Qe,Qe.current),!0}function Lu(t,e,r){var o=t.stateNode;if(!o)throw Error(R(169));r?(t=Gf(t,e,gr),o.__reactInternalMemoizedMergedChildContext=t,le(Qe),le(Le),re(Le,t)):le(Qe),re(Qe,r)}var Gt=null,ml=!1,ta=!1;function Qf(t){Gt===null?Gt=[t]:Gt.push(t)}function cj(t){ml=!0,Qf(t)}function Gn(){if(!ta&&Gt!==null){ta=!0;var t=0,e=ee;try{var r=Gt;for(ee=1;t<r.length;t++){var o=r[t];do o=o(!0);while(o!==null)}Gt=null,ml=!1}catch(s){throw Gt!==null&&(Gt=Gt.slice(t+1)),jf(Hc,Gn),s}finally{ee=e,ta=!1}}return null}var $r=[],Hr=0,Hi=null,Ui=0,pt=[],ft=0,xr=null,Kt=1,Xt="";function rr(t,e){$r[Hr++]=Ui,$r[Hr++]=Hi,Hi=t,Ui=e}function Kf(t,e,r){pt[ft++]=Kt,pt[ft++]=Xt,pt[ft++]=xr,xr=t;var o=Kt;t=Xt;var s=32-It(o)-1;o&=~(1<<s),r+=1;var i=32-It(e)+s;if(30<i){var l=s-s%5;i=(o&(1<<l)-1).toString(32),o>>=l,s-=l,Kt=1<<32-It(e)+s|r<<s|o,Xt=i+t}else Kt=1<<i|r<<s|o,Xt=t}function Yc(t){t.return!==null&&(rr(t,1),Kf(t,1,0))}function Zc(t){for(;t===Hi;)Hi=$r[--Hr],$r[Hr]=null,Ui=$r[--Hr],$r[Hr]=null;for(;t===xr;)xr=pt[--ft],pt[ft]=null,Xt=pt[--ft],pt[ft]=null,Kt=pt[--ft],pt[ft]=null}var rt=null,nt=null,ce=!1,Et=null;function Xf(t,e){var r=gt(5,null,null,0);r.elementType="DELETED",r.stateNode=e,r.return=t,e=t.deletions,e===null?(t.deletions=[r],t.flags|=16):e.push(r)}function Du(t,e){switch(t.tag){case 5:var r=t.type;return e=e.nodeType!==1||r.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,rt=t,nt=Ln(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,rt=t,nt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(r=xr!==null?{id:Kt,overflow:Xt}:null,t.memoizedState={dehydrated:e,treeContext:r,retryLane:1073741824},r=gt(18,null,null,0),r.stateNode=e,r.return=t,t.child=r,rt=t,nt=null,!0):!1;default:return!1}}function Va(t){return(t.mode&1)!==0&&(t.flags&128)===0}function qa(t){if(ce){var e=nt;if(e){var r=e;if(!Du(t,e)){if(Va(t))throw Error(R(418));e=Ln(r.nextSibling);var o=rt;e&&Du(t,e)?Xf(o,r):(t.flags=t.flags&-4097|2,ce=!1,rt=t)}}else{if(Va(t))throw Error(R(418));t.flags=t.flags&-4097|2,ce=!1,rt=t}}}function Fu(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;rt=t}function ni(t){if(t!==rt)return!1;if(!ce)return Fu(t),ce=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!za(t.type,t.memoizedProps)),e&&(e=nt)){if(Va(t))throw Yf(),Error(R(418));for(;e;)Xf(t,e),e=Ln(e.nextSibling)}if(Fu(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(R(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="/$"){if(e===0){nt=Ln(t.nextSibling);break e}e--}else r!=="$"&&r!=="$!"&&r!=="$?"||e++}t=t.nextSibling}nt=null}}else nt=rt?Ln(t.stateNode.nextSibling):null;return!0}function Yf(){for(var t=nt;t;)t=Ln(t.nextSibling)}function fo(){nt=rt=null,ce=!1}function ed(t){Et===null?Et=[t]:Et.push(t)}var dj=cn.ReactCurrentBatchConfig;function Fo(t,e,r){if(t=r.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(R(309));var o=r.stateNode}if(!o)throw Error(R(147,t));var s=o,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(l){var a=s.refs;l===null?delete a[i]:a[i]=l},e._stringRef=i,e)}if(typeof t!="string")throw Error(R(284));if(!r._owner)throw Error(R(290,t))}return t}function ri(t,e){throw t=Object.prototype.toString.call(e),Error(R(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Bu(t){var e=t._init;return e(t._payload)}function Zf(t){function e(m,f){if(t){var x=m.deletions;x===null?(m.deletions=[f],m.flags|=16):x.push(f)}}function r(m,f){if(!t)return null;for(;f!==null;)e(m,f),f=f.sibling;return null}function o(m,f){for(m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function s(m,f){return m=Wn(m,f),m.index=0,m.sibling=null,m}function i(m,f,x){return m.index=x,t?(x=m.alternate,x!==null?(x=x.index,x<f?(m.flags|=2,f):x):(m.flags|=2,f)):(m.flags|=1048576,f)}function l(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,f,x,b){return f===null||f.tag!==6?(f=aa(x,m.mode,b),f.return=m,f):(f=s(f,x),f.return=m,f)}function c(m,f,x,b){var k=x.type;return k===Lr?u(m,f,x.props.children,b,x.key):f!==null&&(f.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===jn&&Bu(k)===f.type)?(b=s(f,x.props),b.ref=Fo(m,f,x),b.return=m,b):(b=ki(x.type,x.key,x.props,null,m.mode,b),b.ref=Fo(m,f,x),b.return=m,b)}function d(m,f,x,b){return f===null||f.tag!==4||f.stateNode.containerInfo!==x.containerInfo||f.stateNode.implementation!==x.implementation?(f=ca(x,m.mode,b),f.return=m,f):(f=s(f,x.children||[]),f.return=m,f)}function u(m,f,x,b,k){return f===null||f.tag!==7?(f=mr(x,m.mode,b,k),f.return=m,f):(f=s(f,x),f.return=m,f)}function h(m,f,x){if(typeof f=="string"&&f!==""||typeof f=="number")return f=aa(""+f,m.mode,x),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case qs:return x=ki(f.type,f.key,f.props,null,m.mode,x),x.ref=Fo(m,null,f),x.return=m,x;case Or:return f=ca(f,m.mode,x),f.return=m,f;case jn:var b=f._init;return h(m,b(f._payload),x)}if(Uo(f)||Mo(f))return f=mr(f,m.mode,x,null),f.return=m,f;ri(m,f)}return null}function g(m,f,x,b){var k=f!==null?f.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return k!==null?null:a(m,f,""+x,b);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case qs:return x.key===k?c(m,f,x,b):null;case Or:return x.key===k?d(m,f,x,b):null;case jn:return k=x._init,g(m,f,k(x._payload),b)}if(Uo(x)||Mo(x))return k!==null?null:u(m,f,x,b,null);ri(m,x)}return null}function p(m,f,x,b,k){if(typeof b=="string"&&b!==""||typeof b=="number")return m=m.get(x)||null,a(f,m,""+b,k);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case qs:return m=m.get(b.key===null?x:b.key)||null,c(f,m,b,k);case Or:return m=m.get(b.key===null?x:b.key)||null,d(f,m,b,k);case jn:var S=b._init;return p(m,f,x,S(b._payload),k)}if(Uo(b)||Mo(b))return m=m.get(x)||null,u(f,m,b,k,null);ri(f,b)}return null}function j(m,f,x,b){for(var k=null,S=null,C=f,E=f=0,M=null;C!==null&&E<x.length;E++){C.index>E?(M=C,C=null):M=C.sibling;var I=g(m,C,x[E],b);if(I===null){C===null&&(C=M);break}t&&C&&I.alternate===null&&e(m,C),f=i(I,f,E),S===null?k=I:S.sibling=I,S=I,C=M}if(E===x.length)return r(m,C),ce&&rr(m,E),k;if(C===null){for(;E<x.length;E++)C=h(m,x[E],b),C!==null&&(f=i(C,f,E),S===null?k=C:S.sibling=C,S=C);return ce&&rr(m,E),k}for(C=o(m,C);E<x.length;E++)M=p(C,m,E,x[E],b),M!==null&&(t&&M.alternate!==null&&C.delete(M.key===null?E:M.key),f=i(M,f,E),S===null?k=M:S.sibling=M,S=M);return t&&C.forEach(function(W){return e(m,W)}),ce&&rr(m,E),k}function y(m,f,x,b){var k=Mo(x);if(typeof k!="function")throw Error(R(150));if(x=k.call(x),x==null)throw Error(R(151));for(var S=k=null,C=f,E=f=0,M=null,I=x.next();C!==null&&!I.done;E++,I=x.next()){C.index>E?(M=C,C=null):M=C.sibling;var W=g(m,C,I.value,b);if(W===null){C===null&&(C=M);break}t&&C&&W.alternate===null&&e(m,C),f=i(W,f,E),S===null?k=W:S.sibling=W,S=W,C=M}if(I.done)return r(m,C),ce&&rr(m,E),k;if(C===null){for(;!I.done;E++,I=x.next())I=h(m,I.value,b),I!==null&&(f=i(I,f,E),S===null?k=I:S.sibling=I,S=I);return ce&&rr(m,E),k}for(C=o(m,C);!I.done;E++,I=x.next())I=p(C,m,E,I.value,b),I!==null&&(t&&I.alternate!==null&&C.delete(I.key===null?E:I.key),f=i(I,f,E),S===null?k=I:S.sibling=I,S=I);return t&&C.forEach(function(_){return e(m,_)}),ce&&rr(m,E),k}function w(m,f,x,b){if(typeof x=="object"&&x!==null&&x.type===Lr&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case qs:e:{for(var k=x.key,S=f;S!==null;){if(S.key===k){if(k=x.type,k===Lr){if(S.tag===7){r(m,S.sibling),f=s(S,x.props.children),f.return=m,m=f;break e}}else if(S.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===jn&&Bu(k)===S.type){r(m,S.sibling),f=s(S,x.props),f.ref=Fo(m,S,x),f.return=m,m=f;break e}r(m,S);break}else e(m,S);S=S.sibling}x.type===Lr?(f=mr(x.props.children,m.mode,b,x.key),f.return=m,m=f):(b=ki(x.type,x.key,x.props,null,m.mode,b),b.ref=Fo(m,f,x),b.return=m,m=b)}return l(m);case Or:e:{for(S=x.key;f!==null;){if(f.key===S)if(f.tag===4&&f.stateNode.containerInfo===x.containerInfo&&f.stateNode.implementation===x.implementation){r(m,f.sibling),f=s(f,x.children||[]),f.return=m,m=f;break e}else{r(m,f);break}else e(m,f);f=f.sibling}f=ca(x,m.mode,b),f.return=m,m=f}return l(m);case jn:return S=x._init,w(m,f,S(x._payload),b)}if(Uo(x))return j(m,f,x,b);if(Mo(x))return y(m,f,x,b);ri(m,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,f!==null&&f.tag===6?(r(m,f.sibling),f=s(f,x),f.return=m,m=f):(r(m,f),f=aa(x,m.mode,b),f.return=m,m=f),l(m)):r(m,f)}return w}var mo=Zf(!0),em=Zf(!1),Vi=Jn(null),qi=null,Ur=null,td=null;function nd(){td=Ur=qi=null}function rd(t){var e=Vi.current;le(Vi),t._currentValue=e}function Ja(t,e,r){for(;t!==null;){var o=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,o!==null&&(o.childLanes|=e)):o!==null&&(o.childLanes&e)!==e&&(o.childLanes|=e),t===r)break;t=t.return}}function Xr(t,e){qi=t,td=Ur=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ge=!0),t.firstContext=null)}function vt(t){var e=t._currentValue;if(td!==t)if(t={context:t,memoizedValue:e,next:null},Ur===null){if(qi===null)throw Error(R(308));Ur=t,qi.dependencies={lanes:0,firstContext:t}}else Ur=Ur.next=t;return e}var ir=null;function od(t){ir===null?ir=[t]:ir.push(t)}function tm(t,e,r,o){var s=e.interleaved;return s===null?(r.next=r,od(e)):(r.next=s.next,s.next=r),e.interleaved=r,rn(t,o)}function rn(t,e){t.lanes|=e;var r=t.alternate;for(r!==null&&(r.lanes|=e),r=t,t=t.return;t!==null;)t.childLanes|=e,r=t.alternate,r!==null&&(r.childLanes|=e),r=t,t=t.return;return r.tag===3?r.stateNode:null}var wn=!1;function sd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function nm(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Yt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Dn(t,e,r){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,Y&2){var s=o.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),o.pending=e,rn(t,r)}return s=o.interleaved,s===null?(e.next=e,od(o)):(e.next=s.next,s.next=e),o.interleaved=e,rn(t,r)}function xi(t,e,r){if(e=e.updateQueue,e!==null&&(e=e.shared,(r&4194240)!==0)){var o=e.lanes;o&=t.pendingLanes,r|=o,e.lanes=r,Uc(t,r)}}function Wu(t,e){var r=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,r===o)){var s=null,i=null;if(r=r.firstBaseUpdate,r!==null){do{var l={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};i===null?s=i=l:i=i.next=l,r=r.next}while(r!==null);i===null?s=i=e:i=i.next=e}else s=i=e;r={baseState:o.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:o.shared,effects:o.effects},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=e:t.next=e,r.lastBaseUpdate=e}function Ji(t,e,r,o){var s=t.updateQueue;wn=!1;var i=s.firstBaseUpdate,l=s.lastBaseUpdate,a=s.shared.pending;if(a!==null){s.shared.pending=null;var c=a,d=c.next;c.next=null,l===null?i=d:l.next=d,l=c;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==l&&(a===null?u.firstBaseUpdate=d:a.next=d,u.lastBaseUpdate=c))}if(i!==null){var h=s.baseState;l=0,u=d=c=null,a=i;do{var g=a.lane,p=a.eventTime;if((o&g)===g){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var j=t,y=a;switch(g=e,p=r,y.tag){case 1:if(j=y.payload,typeof j=="function"){h=j.call(p,h,g);break e}h=j;break e;case 3:j.flags=j.flags&-65537|128;case 0:if(j=y.payload,g=typeof j=="function"?j.call(p,h,g):j,g==null)break e;h=pe({},h,g);break e;case 2:wn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,g=s.effects,g===null?s.effects=[a]:g.push(a))}else p={eventTime:p,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(d=u=p,c=h):u=u.next=p,l|=g;if(a=a.next,a===null){if(a=s.shared.pending,a===null)break;g=a,a=g.next,g.next=null,s.lastBaseUpdate=g,s.shared.pending=null}}while(!0);if(u===null&&(c=h),s.baseState=c,s.firstBaseUpdate=d,s.lastBaseUpdate=u,e=s.shared.interleaved,e!==null){s=e;do l|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);yr|=l,t.lanes=l,t.memoizedState=h}}function zu(t,e,r){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var o=t[e],s=o.callback;if(s!==null){if(o.callback=null,o=r,typeof s!="function")throw Error(R(191,s));s.call(o)}}}var Os={},$t=Jn(Os),gs=Jn(Os),xs=Jn(Os);function lr(t){if(t===Os)throw Error(R(174));return t}function id(t,e){switch(re(xs,e),re(gs,t),re($t,Os),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Na(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Na(e,t)}le($t),re($t,e)}function go(){le($t),le(gs),le(xs)}function rm(t){lr(xs.current);var e=lr($t.current),r=Na(e,t.type);e!==r&&(re(gs,t),re($t,r))}function ld(t){gs.current===t&&(le($t),le(gs))}var ue=Jn(0);function Gi(t){for(var e=t;e!==null;){if(e.tag===13){var r=e.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var na=[];function ad(){for(var t=0;t<na.length;t++)na[t]._workInProgressVersionPrimary=null;na.length=0}var vi=cn.ReactCurrentDispatcher,ra=cn.ReactCurrentBatchConfig,vr=0,he=null,we=null,Te=null,Qi=!1,Zo=!1,vs=0,uj=0;function Re(){throw Error(R(321))}function cd(t,e){if(e===null)return!1;for(var r=0;r<e.length&&r<t.length;r++)if(!Rt(t[r],e[r]))return!1;return!0}function dd(t,e,r,o,s,i){if(vr=i,he=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,vi.current=t===null||t.memoizedState===null?mj:gj,t=r(o,s),Zo){i=0;do{if(Zo=!1,vs=0,25<=i)throw Error(R(301));i+=1,Te=we=null,e.updateQueue=null,vi.current=xj,t=r(o,s)}while(Zo)}if(vi.current=Ki,e=we!==null&&we.next!==null,vr=0,Te=we=he=null,Qi=!1,e)throw Error(R(300));return t}function ud(){var t=vs!==0;return vs=0,t}function Ot(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Te===null?he.memoizedState=Te=t:Te=Te.next=t,Te}function yt(){if(we===null){var t=he.alternate;t=t!==null?t.memoizedState:null}else t=we.next;var e=Te===null?he.memoizedState:Te.next;if(e!==null)Te=e,we=t;else{if(t===null)throw Error(R(310));we=t,t={memoizedState:we.memoizedState,baseState:we.baseState,baseQueue:we.baseQueue,queue:we.queue,next:null},Te===null?he.memoizedState=Te=t:Te=Te.next=t}return Te}function ys(t,e){return typeof e=="function"?e(t):e}function oa(t){var e=yt(),r=e.queue;if(r===null)throw Error(R(311));r.lastRenderedReducer=t;var o=we,s=o.baseQueue,i=r.pending;if(i!==null){if(s!==null){var l=s.next;s.next=i.next,i.next=l}o.baseQueue=s=i,r.pending=null}if(s!==null){i=s.next,o=o.baseState;var a=l=null,c=null,d=i;do{var u=d.lane;if((vr&u)===u)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),o=d.hasEagerState?d.eagerState:t(o,d.action);else{var h={lane:u,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(a=c=h,l=o):c=c.next=h,he.lanes|=u,yr|=u}d=d.next}while(d!==null&&d!==i);c===null?l=o:c.next=a,Rt(o,e.memoizedState)||(Ge=!0),e.memoizedState=o,e.baseState=l,e.baseQueue=c,r.lastRenderedState=o}if(t=r.interleaved,t!==null){s=t;do i=s.lane,he.lanes|=i,yr|=i,s=s.next;while(s!==t)}else s===null&&(r.lanes=0);return[e.memoizedState,r.dispatch]}function sa(t){var e=yt(),r=e.queue;if(r===null)throw Error(R(311));r.lastRenderedReducer=t;var o=r.dispatch,s=r.pending,i=e.memoizedState;if(s!==null){r.pending=null;var l=s=s.next;do i=t(i,l.action),l=l.next;while(l!==s);Rt(i,e.memoizedState)||(Ge=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),r.lastRenderedState=i}return[i,o]}function om(){}function sm(t,e){var r=he,o=yt(),s=e(),i=!Rt(o.memoizedState,s);if(i&&(o.memoizedState=s,Ge=!0),o=o.queue,hd(am.bind(null,r,o,t),[t]),o.getSnapshot!==e||i||Te!==null&&Te.memoizedState.tag&1){if(r.flags|=2048,js(9,lm.bind(null,r,o,s,e),void 0,null),Ne===null)throw Error(R(349));vr&30||im(r,e,s)}return s}function im(t,e,r){t.flags|=16384,t={getSnapshot:e,value:r},e=he.updateQueue,e===null?(e={lastEffect:null,stores:null},he.updateQueue=e,e.stores=[t]):(r=e.stores,r===null?e.stores=[t]:r.push(t))}function lm(t,e,r,o){e.value=r,e.getSnapshot=o,cm(e)&&dm(t)}function am(t,e,r){return r(function(){cm(e)&&dm(t)})}function cm(t){var e=t.getSnapshot;t=t.value;try{var r=e();return!Rt(t,r)}catch{return!0}}function dm(t){var e=rn(t,1);e!==null&&At(e,t,1,-1)}function $u(t){var e=Ot();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ys,lastRenderedState:t},e.queue=t,t=t.dispatch=fj.bind(null,he,t),[e.memoizedState,t]}function js(t,e,r,o){return t={tag:t,create:e,destroy:r,deps:o,next:null},e=he.updateQueue,e===null?(e={lastEffect:null,stores:null},he.updateQueue=e,e.lastEffect=t.next=t):(r=e.lastEffect,r===null?e.lastEffect=t.next=t:(o=r.next,r.next=t,t.next=o,e.lastEffect=t)),t}function um(){return yt().memoizedState}function yi(t,e,r,o){var s=Ot();he.flags|=t,s.memoizedState=js(1|e,r,void 0,o===void 0?null:o)}function gl(t,e,r,o){var s=yt();o=o===void 0?null:o;var i=void 0;if(we!==null){var l=we.memoizedState;if(i=l.destroy,o!==null&&cd(o,l.deps)){s.memoizedState=js(e,r,i,o);return}}he.flags|=t,s.memoizedState=js(1|e,r,i,o)}function Hu(t,e){return yi(8390656,8,t,e)}function hd(t,e){return gl(2048,8,t,e)}function hm(t,e){return gl(4,2,t,e)}function pm(t,e){return gl(4,4,t,e)}function fm(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function mm(t,e,r){return r=r!=null?r.concat([t]):null,gl(4,4,fm.bind(null,e,t),r)}function pd(){}function gm(t,e){var r=yt();e=e===void 0?null:e;var o=r.memoizedState;return o!==null&&e!==null&&cd(e,o[1])?o[0]:(r.memoizedState=[t,e],t)}function xm(t,e){var r=yt();e=e===void 0?null:e;var o=r.memoizedState;return o!==null&&e!==null&&cd(e,o[1])?o[0]:(t=t(),r.memoizedState=[t,e],t)}function vm(t,e,r){return vr&21?(Rt(r,e)||(r=kf(),he.lanes|=r,yr|=r,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ge=!0),t.memoizedState=r)}function hj(t,e){var r=ee;ee=r!==0&&4>r?r:4,t(!0);var o=ra.transition;ra.transition={};try{t(!1),e()}finally{ee=r,ra.transition=o}}function ym(){return yt().memoizedState}function pj(t,e,r){var o=Bn(t);if(r={lane:o,action:r,hasEagerState:!1,eagerState:null,next:null},jm(t))wm(e,r);else if(r=tm(t,e,r,o),r!==null){var s=ze();At(r,t,o,s),bm(r,e,o)}}function fj(t,e,r){var o=Bn(t),s={lane:o,action:r,hasEagerState:!1,eagerState:null,next:null};if(jm(t))wm(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var l=e.lastRenderedState,a=i(l,r);if(s.hasEagerState=!0,s.eagerState=a,Rt(a,l)){var c=e.interleaved;c===null?(s.next=s,od(e)):(s.next=c.next,c.next=s),e.interleaved=s;return}}catch{}finally{}r=tm(t,e,s,o),r!==null&&(s=ze(),At(r,t,o,s),bm(r,e,o))}}function jm(t){var e=t.alternate;return t===he||e!==null&&e===he}function wm(t,e){Zo=Qi=!0;var r=t.pending;r===null?e.next=e:(e.next=r.next,r.next=e),t.pending=e}function bm(t,e,r){if(r&4194240){var o=e.lanes;o&=t.pendingLanes,r|=o,e.lanes=r,Uc(t,r)}}var Ki={readContext:vt,useCallback:Re,useContext:Re,useEffect:Re,useImperativeHandle:Re,useInsertionEffect:Re,useLayoutEffect:Re,useMemo:Re,useReducer:Re,useRef:Re,useState:Re,useDebugValue:Re,useDeferredValue:Re,useTransition:Re,useMutableSource:Re,useSyncExternalStore:Re,useId:Re,unstable_isNewReconciler:!1},mj={readContext:vt,useCallback:function(t,e){return Ot().memoizedState=[t,e===void 0?null:e],t},useContext:vt,useEffect:Hu,useImperativeHandle:function(t,e,r){return r=r!=null?r.concat([t]):null,yi(4194308,4,fm.bind(null,e,t),r)},useLayoutEffect:function(t,e){return yi(4194308,4,t,e)},useInsertionEffect:function(t,e){return yi(4,2,t,e)},useMemo:function(t,e){var r=Ot();return e=e===void 0?null:e,t=t(),r.memoizedState=[t,e],t},useReducer:function(t,e,r){var o=Ot();return e=r!==void 0?r(e):e,o.memoizedState=o.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},o.queue=t,t=t.dispatch=pj.bind(null,he,t),[o.memoizedState,t]},useRef:function(t){var e=Ot();return t={current:t},e.memoizedState=t},useState:$u,useDebugValue:pd,useDeferredValue:function(t){return Ot().memoizedState=t},useTransition:function(){var t=$u(!1),e=t[0];return t=hj.bind(null,t[1]),Ot().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,r){var o=he,s=Ot();if(ce){if(r===void 0)throw Error(R(407));r=r()}else{if(r=e(),Ne===null)throw Error(R(349));vr&30||im(o,e,r)}s.memoizedState=r;var i={value:r,getSnapshot:e};return s.queue=i,Hu(am.bind(null,o,i,t),[t]),o.flags|=2048,js(9,lm.bind(null,o,i,r,e),void 0,null),r},useId:function(){var t=Ot(),e=Ne.identifierPrefix;if(ce){var r=Xt,o=Kt;r=(o&~(1<<32-It(o)-1)).toString(32)+r,e=":"+e+"R"+r,r=vs++,0<r&&(e+="H"+r.toString(32)),e+=":"}else r=uj++,e=":"+e+"r"+r.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},gj={readContext:vt,useCallback:gm,useContext:vt,useEffect:hd,useImperativeHandle:mm,useInsertionEffect:hm,useLayoutEffect:pm,useMemo:xm,useReducer:oa,useRef:um,useState:function(){return oa(ys)},useDebugValue:pd,useDeferredValue:function(t){var e=yt();return vm(e,we.memoizedState,t)},useTransition:function(){var t=oa(ys)[0],e=yt().memoizedState;return[t,e]},useMutableSource:om,useSyncExternalStore:sm,useId:ym,unstable_isNewReconciler:!1},xj={readContext:vt,useCallback:gm,useContext:vt,useEffect:hd,useImperativeHandle:mm,useInsertionEffect:hm,useLayoutEffect:pm,useMemo:xm,useReducer:sa,useRef:um,useState:function(){return sa(ys)},useDebugValue:pd,useDeferredValue:function(t){var e=yt();return we===null?e.memoizedState=t:vm(e,we.memoizedState,t)},useTransition:function(){var t=sa(ys)[0],e=yt().memoizedState;return[t,e]},useMutableSource:om,useSyncExternalStore:sm,useId:ym,unstable_isNewReconciler:!1};function Ct(t,e){if(t&&t.defaultProps){e=pe({},e),t=t.defaultProps;for(var r in t)e[r]===void 0&&(e[r]=t[r]);return e}return e}function Ga(t,e,r,o){e=t.memoizedState,r=r(o,e),r=r==null?e:pe({},e,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var xl={isMounted:function(t){return(t=t._reactInternals)?Tr(t)===t:!1},enqueueSetState:function(t,e,r){t=t._reactInternals;var o=ze(),s=Bn(t),i=Yt(o,s);i.payload=e,r!=null&&(i.callback=r),e=Dn(t,i,s),e!==null&&(At(e,t,s,o),xi(e,t,s))},enqueueReplaceState:function(t,e,r){t=t._reactInternals;var o=ze(),s=Bn(t),i=Yt(o,s);i.tag=1,i.payload=e,r!=null&&(i.callback=r),e=Dn(t,i,s),e!==null&&(At(e,t,s,o),xi(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var r=ze(),o=Bn(t),s=Yt(r,o);s.tag=2,e!=null&&(s.callback=e),e=Dn(t,s,o),e!==null&&(At(e,t,o,r),xi(e,t,o))}};function Uu(t,e,r,o,s,i,l){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,i,l):e.prototype&&e.prototype.isPureReactComponent?!hs(r,o)||!hs(s,i):!0}function km(t,e,r){var o=!1,s=Hn,i=e.contextType;return typeof i=="object"&&i!==null?i=vt(i):(s=Ke(e)?gr:Le.current,o=e.contextTypes,i=(o=o!=null)?po(t,s):Hn),e=new e(r,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=xl,t.stateNode=e,e._reactInternals=t,o&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function Vu(t,e,r,o){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(r,o),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(r,o),e.state!==t&&xl.enqueueReplaceState(e,e.state,null)}function Qa(t,e,r,o){var s=t.stateNode;s.props=r,s.state=t.memoizedState,s.refs={},sd(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=vt(i):(i=Ke(e)?gr:Le.current,s.context=po(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(Ga(t,e,i,r),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&xl.enqueueReplaceState(s,s.state,null),Ji(t,r,s,o),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function xo(t,e){try{var r="",o=e;do r+=Vv(o),o=o.return;while(o);var s=r}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function ia(t,e,r){return{value:t,source:null,stack:r??null,digest:e??null}}function Ka(t,e){try{console.error(e.value)}catch(r){setTimeout(function(){throw r})}}var vj=typeof WeakMap=="function"?WeakMap:Map;function Sm(t,e,r){r=Yt(-1,r),r.tag=3,r.payload={element:null};var o=e.value;return r.callback=function(){Yi||(Yi=!0,ic=o),Ka(t,e)},r}function Cm(t,e,r){r=Yt(-1,r),r.tag=3;var o=t.type.getDerivedStateFromError;if(typeof o=="function"){var s=e.value;r.payload=function(){return o(s)},r.callback=function(){Ka(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(r.callback=function(){Ka(t,e),typeof o!="function"&&(Fn===null?Fn=new Set([this]):Fn.add(this));var l=e.stack;this.componentDidCatch(e.value,{componentStack:l!==null?l:""})}),r}function qu(t,e,r){var o=t.pingCache;if(o===null){o=t.pingCache=new vj;var s=new Set;o.set(e,s)}else s=o.get(e),s===void 0&&(s=new Set,o.set(e,s));s.has(r)||(s.add(r),t=Rj.bind(null,t,e,r),e.then(t,t))}function Ju(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Gu(t,e,r,o,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(e=Yt(-1,1),e.tag=2,Dn(r,e,1))),r.lanes|=1),t)}var yj=cn.ReactCurrentOwner,Ge=!1;function Fe(t,e,r,o){e.child=t===null?em(e,null,r,o):mo(e,t.child,r,o)}function Qu(t,e,r,o,s){r=r.render;var i=e.ref;return Xr(e,s),o=dd(t,e,r,o,i,s),r=ud(),t!==null&&!Ge?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,on(t,e,s)):(ce&&r&&Yc(e),e.flags|=1,Fe(t,e,o,s),e.child)}function Ku(t,e,r,o,s){if(t===null){var i=r.type;return typeof i=="function"&&!wd(i)&&i.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(e.tag=15,e.type=i,Tm(t,e,i,o,s)):(t=ki(r.type,null,o,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var l=i.memoizedProps;if(r=r.compare,r=r!==null?r:hs,r(l,o)&&t.ref===e.ref)return on(t,e,s)}return e.flags|=1,t=Wn(i,o),t.ref=e.ref,t.return=e,e.child=t}function Tm(t,e,r,o,s){if(t!==null){var i=t.memoizedProps;if(hs(i,o)&&t.ref===e.ref)if(Ge=!1,e.pendingProps=o=i,(t.lanes&s)!==0)t.flags&131072&&(Ge=!0);else return e.lanes=t.lanes,on(t,e,s)}return Xa(t,e,r,o,s)}function Nm(t,e,r){var o=e.pendingProps,s=o.children,i=t!==null?t.memoizedState:null;if(o.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},re(qr,et),et|=r;else{if(!(r&1073741824))return t=i!==null?i.baseLanes|r:r,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,re(qr,et),et|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=i!==null?i.baseLanes:r,re(qr,et),et|=o}else i!==null?(o=i.baseLanes|r,e.memoizedState=null):o=r,re(qr,et),et|=o;return Fe(t,e,s,r),e.child}function Pm(t,e){var r=e.ref;(t===null&&r!==null||t!==null&&t.ref!==r)&&(e.flags|=512,e.flags|=2097152)}function Xa(t,e,r,o,s){var i=Ke(r)?gr:Le.current;return i=po(e,i),Xr(e,s),r=dd(t,e,r,o,i,s),o=ud(),t!==null&&!Ge?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,on(t,e,s)):(ce&&o&&Yc(e),e.flags|=1,Fe(t,e,r,s),e.child)}function Xu(t,e,r,o,s){if(Ke(r)){var i=!0;$i(e)}else i=!1;if(Xr(e,s),e.stateNode===null)ji(t,e),km(e,r,o),Qa(e,r,o,s),o=!0;else if(t===null){var l=e.stateNode,a=e.memoizedProps;l.props=a;var c=l.context,d=r.contextType;typeof d=="object"&&d!==null?d=vt(d):(d=Ke(r)?gr:Le.current,d=po(e,d));var u=r.getDerivedStateFromProps,h=typeof u=="function"||typeof l.getSnapshotBeforeUpdate=="function";h||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==o||c!==d)&&Vu(e,l,o,d),wn=!1;var g=e.memoizedState;l.state=g,Ji(e,o,l,s),c=e.memoizedState,a!==o||g!==c||Qe.current||wn?(typeof u=="function"&&(Ga(e,r,u,o),c=e.memoizedState),(a=wn||Uu(e,r,a,o,g,c,d))?(h||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(e.flags|=4194308)):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=o,e.memoizedState=c),l.props=o,l.state=c,l.context=d,o=a):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),o=!1)}else{l=e.stateNode,nm(t,e),a=e.memoizedProps,d=e.type===e.elementType?a:Ct(e.type,a),l.props=d,h=e.pendingProps,g=l.context,c=r.contextType,typeof c=="object"&&c!==null?c=vt(c):(c=Ke(r)?gr:Le.current,c=po(e,c));var p=r.getDerivedStateFromProps;(u=typeof p=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==h||g!==c)&&Vu(e,l,o,c),wn=!1,g=e.memoizedState,l.state=g,Ji(e,o,l,s);var j=e.memoizedState;a!==h||g!==j||Qe.current||wn?(typeof p=="function"&&(Ga(e,r,p,o),j=e.memoizedState),(d=wn||Uu(e,r,d,o,g,j,c)||!1)?(u||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(o,j,c),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(o,j,c)),typeof l.componentDidUpdate=="function"&&(e.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=o,e.memoizedState=j),l.props=o,l.state=j,l.context=c,o=d):(typeof l.componentDidUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),o=!1)}return Ya(t,e,r,o,i,s)}function Ya(t,e,r,o,s,i){Pm(t,e);var l=(e.flags&128)!==0;if(!o&&!l)return s&&Lu(e,r,!1),on(t,e,i);o=e.stateNode,yj.current=e;var a=l&&typeof r.getDerivedStateFromError!="function"?null:o.render();return e.flags|=1,t!==null&&l?(e.child=mo(e,t.child,null,i),e.child=mo(e,null,a,i)):Fe(t,e,a,i),e.memoizedState=o.state,s&&Lu(e,r,!0),e.child}function Em(t){var e=t.stateNode;e.pendingContext?Ou(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Ou(t,e.context,!1),id(t,e.containerInfo)}function Yu(t,e,r,o,s){return fo(),ed(s),e.flags|=256,Fe(t,e,r,o),e.child}var Za={dehydrated:null,treeContext:null,retryLane:0};function ec(t){return{baseLanes:t,cachePool:null,transitions:null}}function Im(t,e,r){var o=e.pendingProps,s=ue.current,i=!1,l=(e.flags&128)!==0,a;if((a=l)||(a=t!==null&&t.memoizedState===null?!1:(s&2)!==0),a?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),re(ue,s&1),t===null)return qa(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(l=o.children,t=o.fallback,i?(o=e.mode,i=e.child,l={mode:"hidden",children:l},!(o&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=jl(l,o,0,null),t=mr(t,o,r,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=ec(r),e.memoizedState=Za,t):fd(e,l));if(s=t.memoizedState,s!==null&&(a=s.dehydrated,a!==null))return jj(t,e,l,o,a,s,r);if(i){i=o.fallback,l=e.mode,s=t.child,a=s.sibling;var c={mode:"hidden",children:o.children};return!(l&1)&&e.child!==s?(o=e.child,o.childLanes=0,o.pendingProps=c,e.deletions=null):(o=Wn(s,c),o.subtreeFlags=s.subtreeFlags&14680064),a!==null?i=Wn(a,i):(i=mr(i,l,r,null),i.flags|=2),i.return=e,o.return=e,o.sibling=i,e.child=o,o=i,i=e.child,l=t.child.memoizedState,l=l===null?ec(r):{baseLanes:l.baseLanes|r,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=t.childLanes&~r,e.memoizedState=Za,o}return i=t.child,t=i.sibling,o=Wn(i,{mode:"visible",children:o.children}),!(e.mode&1)&&(o.lanes=r),o.return=e,o.sibling=null,t!==null&&(r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)),e.child=o,e.memoizedState=null,o}function fd(t,e){return e=jl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function oi(t,e,r,o){return o!==null&&ed(o),mo(e,t.child,null,r),t=fd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function jj(t,e,r,o,s,i,l){if(r)return e.flags&256?(e.flags&=-257,o=ia(Error(R(422))),oi(t,e,l,o)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=o.fallback,s=e.mode,o=jl({mode:"visible",children:o.children},s,0,null),i=mr(i,s,l,null),i.flags|=2,o.return=e,i.return=e,o.sibling=i,e.child=o,e.mode&1&&mo(e,t.child,null,l),e.child.memoizedState=ec(l),e.memoizedState=Za,i);if(!(e.mode&1))return oi(t,e,l,null);if(s.data==="$!"){if(o=s.nextSibling&&s.nextSibling.dataset,o)var a=o.dgst;return o=a,i=Error(R(419)),o=ia(i,o,void 0),oi(t,e,l,o)}if(a=(l&t.childLanes)!==0,Ge||a){if(o=Ne,o!==null){switch(l&-l){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(o.suspendedLanes|l)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,rn(t,s),At(o,t,s,-1))}return jd(),o=ia(Error(R(421))),oi(t,e,l,o)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=Mj.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,nt=Ln(s.nextSibling),rt=e,ce=!0,Et=null,t!==null&&(pt[ft++]=Kt,pt[ft++]=Xt,pt[ft++]=xr,Kt=t.id,Xt=t.overflow,xr=e),e=fd(e,o.children),e.flags|=4096,e)}function Zu(t,e,r){t.lanes|=e;var o=t.alternate;o!==null&&(o.lanes|=e),Ja(t.return,e,r)}function la(t,e,r,o,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:o,tail:r,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=o,i.tail=r,i.tailMode=s)}function Am(t,e,r){var o=e.pendingProps,s=o.revealOrder,i=o.tail;if(Fe(t,e,o.children,r),o=ue.current,o&2)o=o&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Zu(t,r,e);else if(t.tag===19)Zu(t,r,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}o&=1}if(re(ue,o),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(r=e.child,s=null;r!==null;)t=r.alternate,t!==null&&Gi(t)===null&&(s=r),r=r.sibling;r=s,r===null?(s=e.child,e.child=null):(s=r.sibling,r.sibling=null),la(e,!1,s,r,i);break;case"backwards":for(r=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&Gi(t)===null){e.child=s;break}t=s.sibling,s.sibling=r,r=s,s=t}la(e,!0,r,null,i);break;case"together":la(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ji(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function on(t,e,r){if(t!==null&&(e.dependencies=t.dependencies),yr|=e.lanes,!(r&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(R(153));if(e.child!==null){for(t=e.child,r=Wn(t,t.pendingProps),e.child=r,r.return=e;t.sibling!==null;)t=t.sibling,r=r.sibling=Wn(t,t.pendingProps),r.return=e;r.sibling=null}return e.child}function wj(t,e,r){switch(e.tag){case 3:Em(e),fo();break;case 5:rm(e);break;case 1:Ke(e.type)&&$i(e);break;case 4:id(e,e.stateNode.containerInfo);break;case 10:var o=e.type._context,s=e.memoizedProps.value;re(Vi,o._currentValue),o._currentValue=s;break;case 13:if(o=e.memoizedState,o!==null)return o.dehydrated!==null?(re(ue,ue.current&1),e.flags|=128,null):r&e.child.childLanes?Im(t,e,r):(re(ue,ue.current&1),t=on(t,e,r),t!==null?t.sibling:null);re(ue,ue.current&1);break;case 19:if(o=(r&e.childLanes)!==0,t.flags&128){if(o)return Am(t,e,r);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),re(ue,ue.current),o)break;return null;case 22:case 23:return e.lanes=0,Nm(t,e,r)}return on(t,e,r)}var Rm,tc,Mm,_m;Rm=function(t,e){for(var r=e.child;r!==null;){if(r.tag===5||r.tag===6)t.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};tc=function(){};Mm=function(t,e,r,o){var s=t.memoizedProps;if(s!==o){t=e.stateNode,lr($t.current);var i=null;switch(r){case"input":s=ka(t,s),o=ka(t,o),i=[];break;case"select":s=pe({},s,{value:void 0}),o=pe({},o,{value:void 0}),i=[];break;case"textarea":s=Ta(t,s),o=Ta(t,o),i=[];break;default:typeof s.onClick!="function"&&typeof o.onClick=="function"&&(t.onclick=Wi)}Pa(r,o);var l;r=null;for(d in s)if(!o.hasOwnProperty(d)&&s.hasOwnProperty(d)&&s[d]!=null)if(d==="style"){var a=s[d];for(l in a)a.hasOwnProperty(l)&&(r||(r={}),r[l]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(ss.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in o){var c=o[d];if(a=s!=null?s[d]:void 0,o.hasOwnProperty(d)&&c!==a&&(c!=null||a!=null))if(d==="style")if(a){for(l in a)!a.hasOwnProperty(l)||c&&c.hasOwnProperty(l)||(r||(r={}),r[l]="");for(l in c)c.hasOwnProperty(l)&&a[l]!==c[l]&&(r||(r={}),r[l]=c[l])}else r||(i||(i=[]),i.push(d,r)),r=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,a=a?a.__html:void 0,c!=null&&a!==c&&(i=i||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(i=i||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(ss.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&ie("scroll",t),i||a===c||(i=[])):(i=i||[]).push(d,c))}r&&(i=i||[]).push("style",r);var d=i;(e.updateQueue=d)&&(e.flags|=4)}};_m=function(t,e,r,o){r!==o&&(e.flags|=4)};function Bo(t,e){if(!ce)switch(t.tailMode){case"hidden":e=t.tail;for(var r=null;e!==null;)e.alternate!==null&&(r=e),e=e.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Me(t){var e=t.alternate!==null&&t.alternate.child===t.child,r=0,o=0;if(e)for(var s=t.child;s!==null;)r|=s.lanes|s.childLanes,o|=s.subtreeFlags&14680064,o|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)r|=s.lanes|s.childLanes,o|=s.subtreeFlags,o|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=o,t.childLanes=r,e}function bj(t,e,r){var o=e.pendingProps;switch(Zc(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Me(e),null;case 1:return Ke(e.type)&&zi(),Me(e),null;case 3:return o=e.stateNode,go(),le(Qe),le(Le),ad(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(t===null||t.child===null)&&(ni(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Et!==null&&(cc(Et),Et=null))),tc(t,e),Me(e),null;case 5:ld(e);var s=lr(xs.current);if(r=e.type,t!==null&&e.stateNode!=null)Mm(t,e,r,o,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!o){if(e.stateNode===null)throw Error(R(166));return Me(e),null}if(t=lr($t.current),ni(e)){o=e.stateNode,r=e.type;var i=e.memoizedProps;switch(o[Bt]=e,o[ms]=i,t=(e.mode&1)!==0,r){case"dialog":ie("cancel",o),ie("close",o);break;case"iframe":case"object":case"embed":ie("load",o);break;case"video":case"audio":for(s=0;s<qo.length;s++)ie(qo[s],o);break;case"source":ie("error",o);break;case"img":case"image":case"link":ie("error",o),ie("load",o);break;case"details":ie("toggle",o);break;case"input":au(o,i),ie("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!i.multiple},ie("invalid",o);break;case"textarea":du(o,i),ie("invalid",o)}Pa(r,i),s=null;for(var l in i)if(i.hasOwnProperty(l)){var a=i[l];l==="children"?typeof a=="string"?o.textContent!==a&&(i.suppressHydrationWarning!==!0&&ti(o.textContent,a,t),s=["children",a]):typeof a=="number"&&o.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&ti(o.textContent,a,t),s=["children",""+a]):ss.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&ie("scroll",o)}switch(r){case"input":Js(o),cu(o,i,!0);break;case"textarea":Js(o),uu(o);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(o.onclick=Wi)}o=s,e.updateQueue=o,o!==null&&(e.flags|=4)}else{l=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=af(r)),t==="http://www.w3.org/1999/xhtml"?r==="script"?(t=l.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof o.is=="string"?t=l.createElement(r,{is:o.is}):(t=l.createElement(r),r==="select"&&(l=t,o.multiple?l.multiple=!0:o.size&&(l.size=o.size))):t=l.createElementNS(t,r),t[Bt]=e,t[ms]=o,Rm(t,e,!1,!1),e.stateNode=t;e:{switch(l=Ea(r,o),r){case"dialog":ie("cancel",t),ie("close",t),s=o;break;case"iframe":case"object":case"embed":ie("load",t),s=o;break;case"video":case"audio":for(s=0;s<qo.length;s++)ie(qo[s],t);s=o;break;case"source":ie("error",t),s=o;break;case"img":case"image":case"link":ie("error",t),ie("load",t),s=o;break;case"details":ie("toggle",t),s=o;break;case"input":au(t,o),s=ka(t,o),ie("invalid",t);break;case"option":s=o;break;case"select":t._wrapperState={wasMultiple:!!o.multiple},s=pe({},o,{value:void 0}),ie("invalid",t);break;case"textarea":du(t,o),s=Ta(t,o),ie("invalid",t);break;default:s=o}Pa(r,s),a=s;for(i in a)if(a.hasOwnProperty(i)){var c=a[i];i==="style"?uf(t,c):i==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&cf(t,c)):i==="children"?typeof c=="string"?(r!=="textarea"||c!=="")&&is(t,c):typeof c=="number"&&is(t,""+c):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(ss.hasOwnProperty(i)?c!=null&&i==="onScroll"&&ie("scroll",t):c!=null&&Fc(t,i,c,l))}switch(r){case"input":Js(t),cu(t,o,!1);break;case"textarea":Js(t),uu(t);break;case"option":o.value!=null&&t.setAttribute("value",""+$n(o.value));break;case"select":t.multiple=!!o.multiple,i=o.value,i!=null?Jr(t,!!o.multiple,i,!1):o.defaultValue!=null&&Jr(t,!!o.multiple,o.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=Wi)}switch(r){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Me(e),null;case 6:if(t&&e.stateNode!=null)_m(t,e,t.memoizedProps,o);else{if(typeof o!="string"&&e.stateNode===null)throw Error(R(166));if(r=lr(xs.current),lr($t.current),ni(e)){if(o=e.stateNode,r=e.memoizedProps,o[Bt]=e,(i=o.nodeValue!==r)&&(t=rt,t!==null))switch(t.tag){case 3:ti(o.nodeValue,r,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ti(o.nodeValue,r,(t.mode&1)!==0)}i&&(e.flags|=4)}else o=(r.nodeType===9?r:r.ownerDocument).createTextNode(o),o[Bt]=e,e.stateNode=o}return Me(e),null;case 13:if(le(ue),o=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ce&&nt!==null&&e.mode&1&&!(e.flags&128))Yf(),fo(),e.flags|=98560,i=!1;else if(i=ni(e),o!==null&&o.dehydrated!==null){if(t===null){if(!i)throw Error(R(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(R(317));i[Bt]=e}else fo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Me(e),i=!1}else Et!==null&&(cc(Et),Et=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=r,e):(o=o!==null,o!==(t!==null&&t.memoizedState!==null)&&o&&(e.child.flags|=8192,e.mode&1&&(t===null||ue.current&1?Se===0&&(Se=3):jd())),e.updateQueue!==null&&(e.flags|=4),Me(e),null);case 4:return go(),tc(t,e),t===null&&ps(e.stateNode.containerInfo),Me(e),null;case 10:return rd(e.type._context),Me(e),null;case 17:return Ke(e.type)&&zi(),Me(e),null;case 19:if(le(ue),i=e.memoizedState,i===null)return Me(e),null;if(o=(e.flags&128)!==0,l=i.rendering,l===null)if(o)Bo(i,!1);else{if(Se!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(l=Gi(t),l!==null){for(e.flags|=128,Bo(i,!1),o=l.updateQueue,o!==null&&(e.updateQueue=o,e.flags|=4),e.subtreeFlags=0,o=r,r=e.child;r!==null;)i=r,t=o,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,t=l.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),r=r.sibling;return re(ue,ue.current&1|2),e.child}t=t.sibling}i.tail!==null&&ge()>vo&&(e.flags|=128,o=!0,Bo(i,!1),e.lanes=4194304)}else{if(!o)if(t=Gi(l),t!==null){if(e.flags|=128,o=!0,r=t.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),Bo(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!ce)return Me(e),null}else 2*ge()-i.renderingStartTime>vo&&r!==1073741824&&(e.flags|=128,o=!0,Bo(i,!1),e.lanes=4194304);i.isBackwards?(l.sibling=e.child,e.child=l):(r=i.last,r!==null?r.sibling=l:e.child=l,i.last=l)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=ge(),e.sibling=null,r=ue.current,re(ue,o?r&1|2:r&1),e):(Me(e),null);case 22:case 23:return yd(),o=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==o&&(e.flags|=8192),o&&e.mode&1?et&1073741824&&(Me(e),e.subtreeFlags&6&&(e.flags|=8192)):Me(e),null;case 24:return null;case 25:return null}throw Error(R(156,e.tag))}function kj(t,e){switch(Zc(e),e.tag){case 1:return Ke(e.type)&&zi(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return go(),le(Qe),le(Le),ad(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return ld(e),null;case 13:if(le(ue),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(R(340));fo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return le(ue),null;case 4:return go(),null;case 10:return rd(e.type._context),null;case 22:case 23:return yd(),null;case 24:return null;default:return null}}var si=!1,Oe=!1,Sj=typeof WeakSet=="function"?WeakSet:Set,D=null;function Vr(t,e){var r=t.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(o){fe(t,e,o)}else r.current=null}function nc(t,e,r){try{r()}catch(o){fe(t,e,o)}}var eh=!1;function Cj(t,e){if(Ba=Di,t=Bf(),Xc(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else e:{r=(r=t.ownerDocument)&&r.defaultView||window;var o=r.getSelection&&r.getSelection();if(o&&o.rangeCount!==0){r=o.anchorNode;var s=o.anchorOffset,i=o.focusNode;o=o.focusOffset;try{r.nodeType,i.nodeType}catch{r=null;break e}var l=0,a=-1,c=-1,d=0,u=0,h=t,g=null;t:for(;;){for(var p;h!==r||s!==0&&h.nodeType!==3||(a=l+s),h!==i||o!==0&&h.nodeType!==3||(c=l+o),h.nodeType===3&&(l+=h.nodeValue.length),(p=h.firstChild)!==null;)g=h,h=p;for(;;){if(h===t)break t;if(g===r&&++d===s&&(a=l),g===i&&++u===o&&(c=l),(p=h.nextSibling)!==null)break;h=g,g=h.parentNode}h=p}r=a===-1||c===-1?null:{start:a,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(Wa={focusedElem:t,selectionRange:r},Di=!1,D=e;D!==null;)if(e=D,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,D=t;else for(;D!==null;){e=D;try{var j=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(j!==null){var y=j.memoizedProps,w=j.memoizedState,m=e.stateNode,f=m.getSnapshotBeforeUpdate(e.elementType===e.type?y:Ct(e.type,y),w);m.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(R(163))}}catch(b){fe(e,e.return,b)}if(t=e.sibling,t!==null){t.return=e.return,D=t;break}D=e.return}return j=eh,eh=!1,j}function es(t,e,r){var o=e.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var s=o=o.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&nc(e,r,i)}s=s.next}while(s!==o)}}function vl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var r=e=e.next;do{if((r.tag&t)===t){var o=r.create;r.destroy=o()}r=r.next}while(r!==e)}}function rc(t){var e=t.ref;if(e!==null){var r=t.stateNode;switch(t.tag){case 5:t=r;break;default:t=r}typeof e=="function"?e(t):e.current=t}}function Om(t){var e=t.alternate;e!==null&&(t.alternate=null,Om(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Bt],delete e[ms],delete e[Ha],delete e[lj],delete e[aj])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Lm(t){return t.tag===5||t.tag===3||t.tag===4}function th(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Lm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function oc(t,e,r){var o=t.tag;if(o===5||o===6)t=t.stateNode,e?r.nodeType===8?r.parentNode.insertBefore(t,e):r.insertBefore(t,e):(r.nodeType===8?(e=r.parentNode,e.insertBefore(t,r)):(e=r,e.appendChild(t)),r=r._reactRootContainer,r!=null||e.onclick!==null||(e.onclick=Wi));else if(o!==4&&(t=t.child,t!==null))for(oc(t,e,r),t=t.sibling;t!==null;)oc(t,e,r),t=t.sibling}function sc(t,e,r){var o=t.tag;if(o===5||o===6)t=t.stateNode,e?r.insertBefore(t,e):r.appendChild(t);else if(o!==4&&(t=t.child,t!==null))for(sc(t,e,r),t=t.sibling;t!==null;)sc(t,e,r),t=t.sibling}var Pe=null,Pt=!1;function gn(t,e,r){for(r=r.child;r!==null;)Dm(t,e,r),r=r.sibling}function Dm(t,e,r){if(zt&&typeof zt.onCommitFiberUnmount=="function")try{zt.onCommitFiberUnmount(dl,r)}catch{}switch(r.tag){case 5:Oe||Vr(r,e);case 6:var o=Pe,s=Pt;Pe=null,gn(t,e,r),Pe=o,Pt=s,Pe!==null&&(Pt?(t=Pe,r=r.stateNode,t.nodeType===8?t.parentNode.removeChild(r):t.removeChild(r)):Pe.removeChild(r.stateNode));break;case 18:Pe!==null&&(Pt?(t=Pe,r=r.stateNode,t.nodeType===8?ea(t.parentNode,r):t.nodeType===1&&ea(t,r),ds(t)):ea(Pe,r.stateNode));break;case 4:o=Pe,s=Pt,Pe=r.stateNode.containerInfo,Pt=!0,gn(t,e,r),Pe=o,Pt=s;break;case 0:case 11:case 14:case 15:if(!Oe&&(o=r.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){s=o=o.next;do{var i=s,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&nc(r,e,l),s=s.next}while(s!==o)}gn(t,e,r);break;case 1:if(!Oe&&(Vr(r,e),o=r.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=r.memoizedProps,o.state=r.memoizedState,o.componentWillUnmount()}catch(a){fe(r,e,a)}gn(t,e,r);break;case 21:gn(t,e,r);break;case 22:r.mode&1?(Oe=(o=Oe)||r.memoizedState!==null,gn(t,e,r),Oe=o):gn(t,e,r);break;default:gn(t,e,r)}}function nh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var r=t.stateNode;r===null&&(r=t.stateNode=new Sj),e.forEach(function(o){var s=_j.bind(null,t,o);r.has(o)||(r.add(o),o.then(s,s))})}}function kt(t,e){var r=e.deletions;if(r!==null)for(var o=0;o<r.length;o++){var s=r[o];try{var i=t,l=e,a=l;e:for(;a!==null;){switch(a.tag){case 5:Pe=a.stateNode,Pt=!1;break e;case 3:Pe=a.stateNode.containerInfo,Pt=!0;break e;case 4:Pe=a.stateNode.containerInfo,Pt=!0;break e}a=a.return}if(Pe===null)throw Error(R(160));Dm(i,l,s),Pe=null,Pt=!1;var c=s.alternate;c!==null&&(c.return=null),s.return=null}catch(d){fe(s,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Fm(e,t),e=e.sibling}function Fm(t,e){var r=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(kt(e,t),_t(t),o&4){try{es(3,t,t.return),vl(3,t)}catch(y){fe(t,t.return,y)}try{es(5,t,t.return)}catch(y){fe(t,t.return,y)}}break;case 1:kt(e,t),_t(t),o&512&&r!==null&&Vr(r,r.return);break;case 5:if(kt(e,t),_t(t),o&512&&r!==null&&Vr(r,r.return),t.flags&32){var s=t.stateNode;try{is(s,"")}catch(y){fe(t,t.return,y)}}if(o&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,l=r!==null?r.memoizedProps:i,a=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&sf(s,i),Ea(a,l);var d=Ea(a,i);for(l=0;l<c.length;l+=2){var u=c[l],h=c[l+1];u==="style"?uf(s,h):u==="dangerouslySetInnerHTML"?cf(s,h):u==="children"?is(s,h):Fc(s,u,h,d)}switch(a){case"input":Sa(s,i);break;case"textarea":lf(s,i);break;case"select":var g=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var p=i.value;p!=null?Jr(s,!!i.multiple,p,!1):g!==!!i.multiple&&(i.defaultValue!=null?Jr(s,!!i.multiple,i.defaultValue,!0):Jr(s,!!i.multiple,i.multiple?[]:"",!1))}s[ms]=i}catch(y){fe(t,t.return,y)}}break;case 6:if(kt(e,t),_t(t),o&4){if(t.stateNode===null)throw Error(R(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(y){fe(t,t.return,y)}}break;case 3:if(kt(e,t),_t(t),o&4&&r!==null&&r.memoizedState.isDehydrated)try{ds(e.containerInfo)}catch(y){fe(t,t.return,y)}break;case 4:kt(e,t),_t(t);break;case 13:kt(e,t),_t(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(xd=ge())),o&4&&nh(t);break;case 22:if(u=r!==null&&r.memoizedState!==null,t.mode&1?(Oe=(d=Oe)||u,kt(e,t),Oe=d):kt(e,t),_t(t),o&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!u&&t.mode&1)for(D=t,u=t.child;u!==null;){for(h=D=u;D!==null;){switch(g=D,p=g.child,g.tag){case 0:case 11:case 14:case 15:es(4,g,g.return);break;case 1:Vr(g,g.return);var j=g.stateNode;if(typeof j.componentWillUnmount=="function"){o=g,r=g.return;try{e=o,j.props=e.memoizedProps,j.state=e.memoizedState,j.componentWillUnmount()}catch(y){fe(o,r,y)}}break;case 5:Vr(g,g.return);break;case 22:if(g.memoizedState!==null){oh(h);continue}}p!==null?(p.return=g,D=p):oh(h)}u=u.sibling}e:for(u=null,h=t;;){if(h.tag===5){if(u===null){u=h;try{s=h.stateNode,d?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=h.stateNode,c=h.memoizedProps.style,l=c!=null&&c.hasOwnProperty("display")?c.display:null,a.style.display=df("display",l))}catch(y){fe(t,t.return,y)}}}else if(h.tag===6){if(u===null)try{h.stateNode.nodeValue=d?"":h.memoizedProps}catch(y){fe(t,t.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;u===h&&(u=null),h=h.return}u===h&&(u=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:kt(e,t),_t(t),o&4&&nh(t);break;case 21:break;default:kt(e,t),_t(t)}}function _t(t){var e=t.flags;if(e&2){try{e:{for(var r=t.return;r!==null;){if(Lm(r)){var o=r;break e}r=r.return}throw Error(R(160))}switch(o.tag){case 5:var s=o.stateNode;o.flags&32&&(is(s,""),o.flags&=-33);var i=th(t);sc(t,i,s);break;case 3:case 4:var l=o.stateNode.containerInfo,a=th(t);oc(t,a,l);break;default:throw Error(R(161))}}catch(c){fe(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Tj(t,e,r){D=t,Bm(t)}function Bm(t,e,r){for(var o=(t.mode&1)!==0;D!==null;){var s=D,i=s.child;if(s.tag===22&&o){var l=s.memoizedState!==null||si;if(!l){var a=s.alternate,c=a!==null&&a.memoizedState!==null||Oe;a=si;var d=Oe;if(si=l,(Oe=c)&&!d)for(D=s;D!==null;)l=D,c=l.child,l.tag===22&&l.memoizedState!==null?sh(s):c!==null?(c.return=l,D=c):sh(s);for(;i!==null;)D=i,Bm(i),i=i.sibling;D=s,si=a,Oe=d}rh(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,D=i):rh(t)}}function rh(t){for(;D!==null;){var e=D;if(e.flags&8772){var r=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Oe||vl(5,e);break;case 1:var o=e.stateNode;if(e.flags&4&&!Oe)if(r===null)o.componentDidMount();else{var s=e.elementType===e.type?r.memoizedProps:Ct(e.type,r.memoizedProps);o.componentDidUpdate(s,r.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&zu(e,i,o);break;case 3:var l=e.updateQueue;if(l!==null){if(r=null,e.child!==null)switch(e.child.tag){case 5:r=e.child.stateNode;break;case 1:r=e.child.stateNode}zu(e,l,r)}break;case 5:var a=e.stateNode;if(r===null&&e.flags&4){r=a;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&r.focus();break;case"img":c.src&&(r.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var u=d.memoizedState;if(u!==null){var h=u.dehydrated;h!==null&&ds(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(R(163))}Oe||e.flags&512&&rc(e)}catch(g){fe(e,e.return,g)}}if(e===t){D=null;break}if(r=e.sibling,r!==null){r.return=e.return,D=r;break}D=e.return}}function oh(t){for(;D!==null;){var e=D;if(e===t){D=null;break}var r=e.sibling;if(r!==null){r.return=e.return,D=r;break}D=e.return}}function sh(t){for(;D!==null;){var e=D;try{switch(e.tag){case 0:case 11:case 15:var r=e.return;try{vl(4,e)}catch(c){fe(e,r,c)}break;case 1:var o=e.stateNode;if(typeof o.componentDidMount=="function"){var s=e.return;try{o.componentDidMount()}catch(c){fe(e,s,c)}}var i=e.return;try{rc(e)}catch(c){fe(e,i,c)}break;case 5:var l=e.return;try{rc(e)}catch(c){fe(e,l,c)}}}catch(c){fe(e,e.return,c)}if(e===t){D=null;break}var a=e.sibling;if(a!==null){a.return=e.return,D=a;break}D=e.return}}var Nj=Math.ceil,Xi=cn.ReactCurrentDispatcher,md=cn.ReactCurrentOwner,xt=cn.ReactCurrentBatchConfig,Y=0,Ne=null,xe=null,Ee=0,et=0,qr=Jn(0),Se=0,ws=null,yr=0,yl=0,gd=0,ts=null,qe=null,xd=0,vo=1/0,Jt=null,Yi=!1,ic=null,Fn=null,ii=!1,An=null,Zi=0,ns=0,lc=null,wi=-1,bi=0;function ze(){return Y&6?ge():wi!==-1?wi:wi=ge()}function Bn(t){return t.mode&1?Y&2&&Ee!==0?Ee&-Ee:dj.transition!==null?(bi===0&&(bi=kf()),bi):(t=ee,t!==0||(t=window.event,t=t===void 0?16:If(t.type)),t):1}function At(t,e,r,o){if(50<ns)throw ns=0,lc=null,Error(R(185));Rs(t,r,o),(!(Y&2)||t!==Ne)&&(t===Ne&&(!(Y&2)&&(yl|=r),Se===4&&kn(t,Ee)),Xe(t,o),r===1&&Y===0&&!(e.mode&1)&&(vo=ge()+500,ml&&Gn()))}function Xe(t,e){var r=t.callbackNode;dy(t,e);var o=Li(t,t===Ne?Ee:0);if(o===0)r!==null&&fu(r),t.callbackNode=null,t.callbackPriority=0;else if(e=o&-o,t.callbackPriority!==e){if(r!=null&&fu(r),e===1)t.tag===0?cj(ih.bind(null,t)):Qf(ih.bind(null,t)),sj(function(){!(Y&6)&&Gn()}),r=null;else{switch(Sf(o)){case 1:r=Hc;break;case 4:r=wf;break;case 16:r=Oi;break;case 536870912:r=bf;break;default:r=Oi}r=Jm(r,Wm.bind(null,t))}t.callbackPriority=e,t.callbackNode=r}}function Wm(t,e){if(wi=-1,bi=0,Y&6)throw Error(R(327));var r=t.callbackNode;if(Yr()&&t.callbackNode!==r)return null;var o=Li(t,t===Ne?Ee:0);if(o===0)return null;if(o&30||o&t.expiredLanes||e)e=el(t,o);else{e=o;var s=Y;Y|=2;var i=$m();(Ne!==t||Ee!==e)&&(Jt=null,vo=ge()+500,fr(t,e));do try{Ij();break}catch(a){zm(t,a)}while(!0);nd(),Xi.current=i,Y=s,xe!==null?e=0:(Ne=null,Ee=0,e=Se)}if(e!==0){if(e===2&&(s=_a(t),s!==0&&(o=s,e=ac(t,s))),e===1)throw r=ws,fr(t,0),kn(t,o),Xe(t,ge()),r;if(e===6)kn(t,o);else{if(s=t.current.alternate,!(o&30)&&!Pj(s)&&(e=el(t,o),e===2&&(i=_a(t),i!==0&&(o=i,e=ac(t,i))),e===1))throw r=ws,fr(t,0),kn(t,o),Xe(t,ge()),r;switch(t.finishedWork=s,t.finishedLanes=o,e){case 0:case 1:throw Error(R(345));case 2:or(t,qe,Jt);break;case 3:if(kn(t,o),(o&130023424)===o&&(e=xd+500-ge(),10<e)){if(Li(t,0)!==0)break;if(s=t.suspendedLanes,(s&o)!==o){ze(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=$a(or.bind(null,t,qe,Jt),e);break}or(t,qe,Jt);break;case 4:if(kn(t,o),(o&4194240)===o)break;for(e=t.eventTimes,s=-1;0<o;){var l=31-It(o);i=1<<l,l=e[l],l>s&&(s=l),o&=~i}if(o=s,o=ge()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*Nj(o/1960))-o,10<o){t.timeoutHandle=$a(or.bind(null,t,qe,Jt),o);break}or(t,qe,Jt);break;case 5:or(t,qe,Jt);break;default:throw Error(R(329))}}}return Xe(t,ge()),t.callbackNode===r?Wm.bind(null,t):null}function ac(t,e){var r=ts;return t.current.memoizedState.isDehydrated&&(fr(t,e).flags|=256),t=el(t,e),t!==2&&(e=qe,qe=r,e!==null&&cc(e)),t}function cc(t){qe===null?qe=t:qe.push.apply(qe,t)}function Pj(t){for(var e=t;;){if(e.flags&16384){var r=e.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var o=0;o<r.length;o++){var s=r[o],i=s.getSnapshot;s=s.value;try{if(!Rt(i(),s))return!1}catch{return!1}}}if(r=e.child,e.subtreeFlags&16384&&r!==null)r.return=e,e=r;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function kn(t,e){for(e&=~gd,e&=~yl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var r=31-It(e),o=1<<r;t[r]=-1,e&=~o}}function ih(t){if(Y&6)throw Error(R(327));Yr();var e=Li(t,0);if(!(e&1))return Xe(t,ge()),null;var r=el(t,e);if(t.tag!==0&&r===2){var o=_a(t);o!==0&&(e=o,r=ac(t,o))}if(r===1)throw r=ws,fr(t,0),kn(t,e),Xe(t,ge()),r;if(r===6)throw Error(R(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,or(t,qe,Jt),Xe(t,ge()),null}function vd(t,e){var r=Y;Y|=1;try{return t(e)}finally{Y=r,Y===0&&(vo=ge()+500,ml&&Gn())}}function jr(t){An!==null&&An.tag===0&&!(Y&6)&&Yr();var e=Y;Y|=1;var r=xt.transition,o=ee;try{if(xt.transition=null,ee=1,t)return t()}finally{ee=o,xt.transition=r,Y=e,!(Y&6)&&Gn()}}function yd(){et=qr.current,le(qr)}function fr(t,e){t.finishedWork=null,t.finishedLanes=0;var r=t.timeoutHandle;if(r!==-1&&(t.timeoutHandle=-1,oj(r)),xe!==null)for(r=xe.return;r!==null;){var o=r;switch(Zc(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&zi();break;case 3:go(),le(Qe),le(Le),ad();break;case 5:ld(o);break;case 4:go();break;case 13:le(ue);break;case 19:le(ue);break;case 10:rd(o.type._context);break;case 22:case 23:yd()}r=r.return}if(Ne=t,xe=t=Wn(t.current,null),Ee=et=e,Se=0,ws=null,gd=yl=yr=0,qe=ts=null,ir!==null){for(e=0;e<ir.length;e++)if(r=ir[e],o=r.interleaved,o!==null){r.interleaved=null;var s=o.next,i=r.pending;if(i!==null){var l=i.next;i.next=s,o.next=l}r.pending=o}ir=null}return t}function zm(t,e){do{var r=xe;try{if(nd(),vi.current=Ki,Qi){for(var o=he.memoizedState;o!==null;){var s=o.queue;s!==null&&(s.pending=null),o=o.next}Qi=!1}if(vr=0,Te=we=he=null,Zo=!1,vs=0,md.current=null,r===null||r.return===null){Se=1,ws=e,xe=null;break}e:{var i=t,l=r.return,a=r,c=e;if(e=Ee,a.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,u=a,h=u.tag;if(!(u.mode&1)&&(h===0||h===11||h===15)){var g=u.alternate;g?(u.updateQueue=g.updateQueue,u.memoizedState=g.memoizedState,u.lanes=g.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=Ju(l);if(p!==null){p.flags&=-257,Gu(p,l,a,i,e),p.mode&1&&qu(i,d,e),e=p,c=d;var j=e.updateQueue;if(j===null){var y=new Set;y.add(c),e.updateQueue=y}else j.add(c);break e}else{if(!(e&1)){qu(i,d,e),jd();break e}c=Error(R(426))}}else if(ce&&a.mode&1){var w=Ju(l);if(w!==null){!(w.flags&65536)&&(w.flags|=256),Gu(w,l,a,i,e),ed(xo(c,a));break e}}i=c=xo(c,a),Se!==4&&(Se=2),ts===null?ts=[i]:ts.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var m=Sm(i,c,e);Wu(i,m);break e;case 1:a=c;var f=i.type,x=i.stateNode;if(!(i.flags&128)&&(typeof f.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Fn===null||!Fn.has(x)))){i.flags|=65536,e&=-e,i.lanes|=e;var b=Cm(i,a,e);Wu(i,b);break e}}i=i.return}while(i!==null)}Um(r)}catch(k){e=k,xe===r&&r!==null&&(xe=r=r.return);continue}break}while(!0)}function $m(){var t=Xi.current;return Xi.current=Ki,t===null?Ki:t}function jd(){(Se===0||Se===3||Se===2)&&(Se=4),Ne===null||!(yr&268435455)&&!(yl&268435455)||kn(Ne,Ee)}function el(t,e){var r=Y;Y|=2;var o=$m();(Ne!==t||Ee!==e)&&(Jt=null,fr(t,e));do try{Ej();break}catch(s){zm(t,s)}while(!0);if(nd(),Y=r,Xi.current=o,xe!==null)throw Error(R(261));return Ne=null,Ee=0,Se}function Ej(){for(;xe!==null;)Hm(xe)}function Ij(){for(;xe!==null&&!ty();)Hm(xe)}function Hm(t){var e=qm(t.alternate,t,et);t.memoizedProps=t.pendingProps,e===null?Um(t):xe=e,md.current=null}function Um(t){var e=t;do{var r=e.alternate;if(t=e.return,e.flags&32768){if(r=kj(r,e),r!==null){r.flags&=32767,xe=r;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Se=6,xe=null;return}}else if(r=bj(r,e,et),r!==null){xe=r;return}if(e=e.sibling,e!==null){xe=e;return}xe=e=t}while(e!==null);Se===0&&(Se=5)}function or(t,e,r){var o=ee,s=xt.transition;try{xt.transition=null,ee=1,Aj(t,e,r,o)}finally{xt.transition=s,ee=o}return null}function Aj(t,e,r,o){do Yr();while(An!==null);if(Y&6)throw Error(R(327));r=t.finishedWork;var s=t.finishedLanes;if(r===null)return null;if(t.finishedWork=null,t.finishedLanes=0,r===t.current)throw Error(R(177));t.callbackNode=null,t.callbackPriority=0;var i=r.lanes|r.childLanes;if(uy(t,i),t===Ne&&(xe=Ne=null,Ee=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||ii||(ii=!0,Jm(Oi,function(){return Yr(),null})),i=(r.flags&15990)!==0,r.subtreeFlags&15990||i){i=xt.transition,xt.transition=null;var l=ee;ee=1;var a=Y;Y|=4,md.current=null,Cj(t,r),Fm(r,t),Xy(Wa),Di=!!Ba,Wa=Ba=null,t.current=r,Tj(r),ny(),Y=a,ee=l,xt.transition=i}else t.current=r;if(ii&&(ii=!1,An=t,Zi=s),i=t.pendingLanes,i===0&&(Fn=null),sy(r.stateNode),Xe(t,ge()),e!==null)for(o=t.onRecoverableError,r=0;r<e.length;r++)s=e[r],o(s.value,{componentStack:s.stack,digest:s.digest});if(Yi)throw Yi=!1,t=ic,ic=null,t;return Zi&1&&t.tag!==0&&Yr(),i=t.pendingLanes,i&1?t===lc?ns++:(ns=0,lc=t):ns=0,Gn(),null}function Yr(){if(An!==null){var t=Sf(Zi),e=xt.transition,r=ee;try{if(xt.transition=null,ee=16>t?16:t,An===null)var o=!1;else{if(t=An,An=null,Zi=0,Y&6)throw Error(R(331));var s=Y;for(Y|=4,D=t.current;D!==null;){var i=D,l=i.child;if(D.flags&16){var a=i.deletions;if(a!==null){for(var c=0;c<a.length;c++){var d=a[c];for(D=d;D!==null;){var u=D;switch(u.tag){case 0:case 11:case 15:es(8,u,i)}var h=u.child;if(h!==null)h.return=u,D=h;else for(;D!==null;){u=D;var g=u.sibling,p=u.return;if(Om(u),u===d){D=null;break}if(g!==null){g.return=p,D=g;break}D=p}}}var j=i.alternate;if(j!==null){var y=j.child;if(y!==null){j.child=null;do{var w=y.sibling;y.sibling=null,y=w}while(y!==null)}}D=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,D=l;else e:for(;D!==null;){if(i=D,i.flags&2048)switch(i.tag){case 0:case 11:case 15:es(9,i,i.return)}var m=i.sibling;if(m!==null){m.return=i.return,D=m;break e}D=i.return}}var f=t.current;for(D=f;D!==null;){l=D;var x=l.child;if(l.subtreeFlags&2064&&x!==null)x.return=l,D=x;else e:for(l=f;D!==null;){if(a=D,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:vl(9,a)}}catch(k){fe(a,a.return,k)}if(a===l){D=null;break e}var b=a.sibling;if(b!==null){b.return=a.return,D=b;break e}D=a.return}}if(Y=s,Gn(),zt&&typeof zt.onPostCommitFiberRoot=="function")try{zt.onPostCommitFiberRoot(dl,t)}catch{}o=!0}return o}finally{ee=r,xt.transition=e}}return!1}function lh(t,e,r){e=xo(r,e),e=Sm(t,e,1),t=Dn(t,e,1),e=ze(),t!==null&&(Rs(t,1,e),Xe(t,e))}function fe(t,e,r){if(t.tag===3)lh(t,t,r);else for(;e!==null;){if(e.tag===3){lh(e,t,r);break}else if(e.tag===1){var o=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Fn===null||!Fn.has(o))){t=xo(r,t),t=Cm(e,t,1),e=Dn(e,t,1),t=ze(),e!==null&&(Rs(e,1,t),Xe(e,t));break}}e=e.return}}function Rj(t,e,r){var o=t.pingCache;o!==null&&o.delete(e),e=ze(),t.pingedLanes|=t.suspendedLanes&r,Ne===t&&(Ee&r)===r&&(Se===4||Se===3&&(Ee&130023424)===Ee&&500>ge()-xd?fr(t,0):gd|=r),Xe(t,e)}function Vm(t,e){e===0&&(t.mode&1?(e=Ks,Ks<<=1,!(Ks&130023424)&&(Ks=4194304)):e=1);var r=ze();t=rn(t,e),t!==null&&(Rs(t,e,r),Xe(t,r))}function Mj(t){var e=t.memoizedState,r=0;e!==null&&(r=e.retryLane),Vm(t,r)}function _j(t,e){var r=0;switch(t.tag){case 13:var o=t.stateNode,s=t.memoizedState;s!==null&&(r=s.retryLane);break;case 19:o=t.stateNode;break;default:throw Error(R(314))}o!==null&&o.delete(e),Vm(t,r)}var qm;qm=function(t,e,r){if(t!==null)if(t.memoizedProps!==e.pendingProps||Qe.current)Ge=!0;else{if(!(t.lanes&r)&&!(e.flags&128))return Ge=!1,wj(t,e,r);Ge=!!(t.flags&131072)}else Ge=!1,ce&&e.flags&1048576&&Kf(e,Ui,e.index);switch(e.lanes=0,e.tag){case 2:var o=e.type;ji(t,e),t=e.pendingProps;var s=po(e,Le.current);Xr(e,r),s=dd(null,e,o,t,s,r);var i=ud();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ke(o)?(i=!0,$i(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,sd(e),s.updater=xl,e.stateNode=s,s._reactInternals=e,Qa(e,o,t,r),e=Ya(null,e,o,!0,i,r)):(e.tag=0,ce&&i&&Yc(e),Fe(null,e,s,r),e=e.child),e;case 16:o=e.elementType;e:{switch(ji(t,e),t=e.pendingProps,s=o._init,o=s(o._payload),e.type=o,s=e.tag=Lj(o),t=Ct(o,t),s){case 0:e=Xa(null,e,o,t,r);break e;case 1:e=Xu(null,e,o,t,r);break e;case 11:e=Qu(null,e,o,t,r);break e;case 14:e=Ku(null,e,o,Ct(o.type,t),r);break e}throw Error(R(306,o,""))}return e;case 0:return o=e.type,s=e.pendingProps,s=e.elementType===o?s:Ct(o,s),Xa(t,e,o,s,r);case 1:return o=e.type,s=e.pendingProps,s=e.elementType===o?s:Ct(o,s),Xu(t,e,o,s,r);case 3:e:{if(Em(e),t===null)throw Error(R(387));o=e.pendingProps,i=e.memoizedState,s=i.element,nm(t,e),Ji(e,o,null,r);var l=e.memoizedState;if(o=l.element,i.isDehydrated)if(i={element:o,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=xo(Error(R(423)),e),e=Yu(t,e,o,r,s);break e}else if(o!==s){s=xo(Error(R(424)),e),e=Yu(t,e,o,r,s);break e}else for(nt=Ln(e.stateNode.containerInfo.firstChild),rt=e,ce=!0,Et=null,r=em(e,null,o,r),e.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(fo(),o===s){e=on(t,e,r);break e}Fe(t,e,o,r)}e=e.child}return e;case 5:return rm(e),t===null&&qa(e),o=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,l=s.children,za(o,s)?l=null:i!==null&&za(o,i)&&(e.flags|=32),Pm(t,e),Fe(t,e,l,r),e.child;case 6:return t===null&&qa(e),null;case 13:return Im(t,e,r);case 4:return id(e,e.stateNode.containerInfo),o=e.pendingProps,t===null?e.child=mo(e,null,o,r):Fe(t,e,o,r),e.child;case 11:return o=e.type,s=e.pendingProps,s=e.elementType===o?s:Ct(o,s),Qu(t,e,o,s,r);case 7:return Fe(t,e,e.pendingProps,r),e.child;case 8:return Fe(t,e,e.pendingProps.children,r),e.child;case 12:return Fe(t,e,e.pendingProps.children,r),e.child;case 10:e:{if(o=e.type._context,s=e.pendingProps,i=e.memoizedProps,l=s.value,re(Vi,o._currentValue),o._currentValue=l,i!==null)if(Rt(i.value,l)){if(i.children===s.children&&!Qe.current){e=on(t,e,r);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var a=i.dependencies;if(a!==null){l=i.child;for(var c=a.firstContext;c!==null;){if(c.context===o){if(i.tag===1){c=Yt(-1,r&-r),c.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var u=d.pending;u===null?c.next=c:(c.next=u.next,u.next=c),d.pending=c}}i.lanes|=r,c=i.alternate,c!==null&&(c.lanes|=r),Ja(i.return,r,e),a.lanes|=r;break}c=c.next}}else if(i.tag===10)l=i.type===e.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(R(341));l.lanes|=r,a=l.alternate,a!==null&&(a.lanes|=r),Ja(l,r,e),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===e){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}Fe(t,e,s.children,r),e=e.child}return e;case 9:return s=e.type,o=e.pendingProps.children,Xr(e,r),s=vt(s),o=o(s),e.flags|=1,Fe(t,e,o,r),e.child;case 14:return o=e.type,s=Ct(o,e.pendingProps),s=Ct(o.type,s),Ku(t,e,o,s,r);case 15:return Tm(t,e,e.type,e.pendingProps,r);case 17:return o=e.type,s=e.pendingProps,s=e.elementType===o?s:Ct(o,s),ji(t,e),e.tag=1,Ke(o)?(t=!0,$i(e)):t=!1,Xr(e,r),km(e,o,s),Qa(e,o,s,r),Ya(null,e,o,!0,t,r);case 19:return Am(t,e,r);case 22:return Nm(t,e,r)}throw Error(R(156,e.tag))};function Jm(t,e){return jf(t,e)}function Oj(t,e,r,o){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gt(t,e,r,o){return new Oj(t,e,r,o)}function wd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Lj(t){if(typeof t=="function")return wd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Wc)return 11;if(t===zc)return 14}return 2}function Wn(t,e){var r=t.alternate;return r===null?(r=gt(t.tag,e,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=e,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&14680064,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,e=t.dependencies,r.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r}function ki(t,e,r,o,s,i){var l=2;if(o=t,typeof t=="function")wd(t)&&(l=1);else if(typeof t=="string")l=5;else e:switch(t){case Lr:return mr(r.children,s,i,e);case Bc:l=8,s|=8;break;case ya:return t=gt(12,r,e,s|2),t.elementType=ya,t.lanes=i,t;case ja:return t=gt(13,r,e,s),t.elementType=ja,t.lanes=i,t;case wa:return t=gt(19,r,e,s),t.elementType=wa,t.lanes=i,t;case nf:return jl(r,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ef:l=10;break e;case tf:l=9;break e;case Wc:l=11;break e;case zc:l=14;break e;case jn:l=16,o=null;break e}throw Error(R(130,t==null?t:typeof t,""))}return e=gt(l,r,e,s),e.elementType=t,e.type=o,e.lanes=i,e}function mr(t,e,r,o){return t=gt(7,t,o,e),t.lanes=r,t}function jl(t,e,r,o){return t=gt(22,t,o,e),t.elementType=nf,t.lanes=r,t.stateNode={isHidden:!1},t}function aa(t,e,r){return t=gt(6,t,null,e),t.lanes=r,t}function ca(t,e,r){return e=gt(4,t.children!==null?t.children:[],t.key,e),e.lanes=r,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Dj(t,e,r,o,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Hl(0),this.expirationTimes=Hl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Hl(0),this.identifierPrefix=o,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function bd(t,e,r,o,s,i,l,a,c){return t=new Dj(t,e,r,a,c),e===1?(e=1,i===!0&&(e|=8)):e=0,i=gt(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:o,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},sd(i),t}function Fj(t,e,r){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Or,key:o==null?null:""+o,children:t,containerInfo:e,implementation:r}}function Gm(t){if(!t)return Hn;t=t._reactInternals;e:{if(Tr(t)!==t||t.tag!==1)throw Error(R(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ke(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(R(171))}if(t.tag===1){var r=t.type;if(Ke(r))return Gf(t,r,e)}return e}function Qm(t,e,r,o,s,i,l,a,c){return t=bd(r,o,!0,t,s,i,l,a,c),t.context=Gm(null),r=t.current,o=ze(),s=Bn(r),i=Yt(o,s),i.callback=e??null,Dn(r,i,s),t.current.lanes=s,Rs(t,s,o),Xe(t,o),t}function wl(t,e,r,o){var s=e.current,i=ze(),l=Bn(s);return r=Gm(r),e.context===null?e.context=r:e.pendingContext=r,e=Yt(i,l),e.payload={element:t},o=o===void 0?null:o,o!==null&&(e.callback=o),t=Dn(s,e,l),t!==null&&(At(t,s,l,i),xi(t,s,l)),l}function tl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function ah(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<e?r:e}}function kd(t,e){ah(t,e),(t=t.alternate)&&ah(t,e)}function Bj(){return null}var Km=typeof reportError=="function"?reportError:function(t){console.error(t)};function Sd(t){this._internalRoot=t}bl.prototype.render=Sd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(R(409));wl(t,e,null,null)};bl.prototype.unmount=Sd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;jr(function(){wl(null,t,null,null)}),e[nn]=null}};function bl(t){this._internalRoot=t}bl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Nf();t={blockedOn:null,target:t,priority:e};for(var r=0;r<bn.length&&e!==0&&e<bn[r].priority;r++);bn.splice(r,0,t),r===0&&Ef(t)}};function Cd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function kl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function ch(){}function Wj(t,e,r,o,s){if(s){if(typeof o=="function"){var i=o;o=function(){var d=tl(l);i.call(d)}}var l=Qm(e,o,t,0,null,!1,!1,"",ch);return t._reactRootContainer=l,t[nn]=l.current,ps(t.nodeType===8?t.parentNode:t),jr(),l}for(;s=t.lastChild;)t.removeChild(s);if(typeof o=="function"){var a=o;o=function(){var d=tl(c);a.call(d)}}var c=bd(t,0,!1,null,null,!1,!1,"",ch);return t._reactRootContainer=c,t[nn]=c.current,ps(t.nodeType===8?t.parentNode:t),jr(function(){wl(e,c,r,o)}),c}function Sl(t,e,r,o,s){var i=r._reactRootContainer;if(i){var l=i;if(typeof s=="function"){var a=s;s=function(){var c=tl(l);a.call(c)}}wl(e,l,t,s)}else l=Wj(r,e,t,s,o);return tl(l)}Cf=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var r=Vo(e.pendingLanes);r!==0&&(Uc(e,r|1),Xe(e,ge()),!(Y&6)&&(vo=ge()+500,Gn()))}break;case 13:jr(function(){var o=rn(t,1);if(o!==null){var s=ze();At(o,t,1,s)}}),kd(t,1)}};Vc=function(t){if(t.tag===13){var e=rn(t,134217728);if(e!==null){var r=ze();At(e,t,134217728,r)}kd(t,134217728)}};Tf=function(t){if(t.tag===13){var e=Bn(t),r=rn(t,e);if(r!==null){var o=ze();At(r,t,e,o)}kd(t,e)}};Nf=function(){return ee};Pf=function(t,e){var r=ee;try{return ee=t,e()}finally{ee=r}};Aa=function(t,e,r){switch(e){case"input":if(Sa(t,r),e=r.name,r.type==="radio"&&e!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<r.length;e++){var o=r[e];if(o!==t&&o.form===t.form){var s=fl(o);if(!s)throw Error(R(90));of(o),Sa(o,s)}}}break;case"textarea":lf(t,r);break;case"select":e=r.value,e!=null&&Jr(t,!!r.multiple,e,!1)}};ff=vd;mf=jr;var zj={usingClientEntryPoint:!1,Events:[_s,Wr,fl,hf,pf,vd]},Wo={findFiberByHostInstance:sr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},$j={bundleType:Wo.bundleType,version:Wo.version,rendererPackageName:Wo.rendererPackageName,rendererConfig:Wo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:cn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=vf(t),t===null?null:t.stateNode},findFiberByHostInstance:Wo.findFiberByHostInstance||Bj,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var li=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!li.isDisabled&&li.supportsFiber)try{dl=li.inject($j),zt=li}catch{}}it.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zj;it.createPortal=function(t,e){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Cd(e))throw Error(R(200));return Fj(t,e,null,r)};it.createRoot=function(t,e){if(!Cd(t))throw Error(R(299));var r=!1,o="",s=Km;return e!=null&&(e.unstable_strictMode===!0&&(r=!0),e.identifierPrefix!==void 0&&(o=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=bd(t,1,!1,null,null,r,!1,o,s),t[nn]=e.current,ps(t.nodeType===8?t.parentNode:t),new Sd(e)};it.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(R(188)):(t=Object.keys(t).join(","),Error(R(268,t)));return t=vf(e),t=t===null?null:t.stateNode,t};it.flushSync=function(t){return jr(t)};it.hydrate=function(t,e,r){if(!kl(e))throw Error(R(200));return Sl(null,t,e,!0,r)};it.hydrateRoot=function(t,e,r){if(!Cd(t))throw Error(R(405));var o=r!=null&&r.hydratedSources||null,s=!1,i="",l=Km;if(r!=null&&(r.unstable_strictMode===!0&&(s=!0),r.identifierPrefix!==void 0&&(i=r.identifierPrefix),r.onRecoverableError!==void 0&&(l=r.onRecoverableError)),e=Qm(e,null,t,1,r??null,s,!1,i,l),t[nn]=e.current,ps(t),o)for(t=0;t<o.length;t++)r=o[t],s=r._getVersion,s=s(r._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[r,s]:e.mutableSourceEagerHydrationData.push(r,s);return new bl(e)};it.render=function(t,e,r){if(!kl(e))throw Error(R(200));return Sl(null,t,e,!1,r)};it.unmountComponentAtNode=function(t){if(!kl(t))throw Error(R(40));return t._reactRootContainer?(jr(function(){Sl(null,null,t,!1,function(){t._reactRootContainer=null,t[nn]=null})}),!0):!1};it.unstable_batchedUpdates=vd;it.unstable_renderSubtreeIntoContainer=function(t,e,r,o){if(!kl(r))throw Error(R(200));if(t==null||t._reactInternals===void 0)throw Error(R(38));return Sl(t,e,r,!1,o)};it.version="18.3.1-next-f1338f8080-20240426";function Xm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Xm)}catch(t){console.error(t)}}Xm(),Kp.exports=it;var ko=Kp.exports;const Hj=Fp(ko);var Ym,dh=ko;Ym=dh.createRoot,dh.hydrateRoot;const Uj=1,Vj=1e6;let da=0;function qj(){return da=(da+1)%Number.MAX_SAFE_INTEGER,da.toString()}const ua=new Map,uh=t=>{if(ua.has(t))return;const e=setTimeout(()=>{ua.delete(t),rs({type:"REMOVE_TOAST",toastId:t})},Vj);ua.set(t,e)},Jj=(t,e)=>{switch(e.type){case"ADD_TOAST":return{...t,toasts:[e.toast,...t.toasts].slice(0,Uj)};case"UPDATE_TOAST":return{...t,toasts:t.toasts.map(r=>r.id===e.toast.id?{...r,...e.toast}:r)};case"DISMISS_TOAST":{const{toastId:r}=e;return r?uh(r):t.toasts.forEach(o=>{uh(o.id)}),{...t,toasts:t.toasts.map(o=>o.id===r||r===void 0?{...o,open:!1}:o)}}case"REMOVE_TOAST":return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(r=>r.id!==e.toastId)}}},Si=[];let Ci={toasts:[]};function rs(t){Ci=Jj(Ci,t),Si.forEach(e=>{e(Ci)})}function Gj({...t}){const e=qj(),r=s=>rs({type:"UPDATE_TOAST",toast:{...s,id:e}}),o=()=>rs({type:"DISMISS_TOAST",toastId:e});return rs({type:"ADD_TOAST",toast:{...t,id:e,open:!0,onOpenChange:s=>{s||o()}}}),{id:e,dismiss:o,update:r}}function Qj(){const[t,e]=v.useState(Ci);return v.useEffect(()=>(Si.push(e),()=>{const r=Si.indexOf(e);r>-1&&Si.splice(r,1)}),[t]),{...t,toast:Gj,dismiss:r=>rs({type:"DISMISS_TOAST",toastId:r})}}var Kj=Object.defineProperty,So=(t,e)=>Kj(t,"name",{value:e,configurable:!0}),Zm=!!(typeof window<"u"&&window.document&&window.document.createElement);function Je(t,e,{checkForDefaultPrevented:r=!0}={}){return So(function(s){if(t==null||t(s),r===!1||!s||!s.defaultPrevented)return e==null?void 0:e(s)},"handleEvent")}So(Je,"composeEventHandlers");function Xj(t){var e;if(!Zm)throw new Error("Cannot access window outside of the DOM");return((e=t==null?void 0:t.ownerDocument)==null?void 0:e.defaultView)??window}So(Xj,"getOwnerWindow");function dc(t){if(!Zm)throw new Error("Cannot access document outside of the DOM");return(t==null?void 0:t.ownerDocument)??document}So(dc,"getOwnerDocument");function eg(t,e=!1){const{activeElement:r}=dc(t);if(!(r!=null&&r.nodeName))return null;if(tg(r)&&r.contentDocument)return eg(r.contentDocument.body,e);if(e){const o=r.getAttribute("aria-activedescendant");if(o){const s=dc(r).getElementById(o);if(s)return s}}return r}So(eg,"getActiveElement");function tg(t){return t.tagName==="IFRAME"}So(tg,"isFrame");var Yj=Object.defineProperty,Td=(t,e)=>Yj(t,"name",{value:e,configurable:!0});function uc(t,e){if(typeof t=="function")return t(e);t!=null&&(t.current=e)}Td(uc,"setRef");function ng(...t){return e=>{let r=!1;const o=t.map(s=>{const i=uc(s,e);return!r&&typeof i=="function"&&(r=!0),i});if(r)return()=>{for(let s=0;s<o.length;s++){const i=o[s];typeof i=="function"?i():uc(t[s],null)}}}}Td(ng,"composeRefs");function Ye(...t){return v.useCallback(ng(...t),t)}Td(Ye,"useComposedRefs");var Zj=Object.defineProperty,mt=(t,e)=>Zj(t,"name",{value:e,configurable:!0});function ew(t,e){const r=v.createContext(e);r.displayName=t+"Context";const o=mt(i=>{const{children:l,...a}=i,c=v.useMemo(()=>a,Object.values(a));return n.jsx(r.Provider,{value:c,children:l})},"Provider");o.displayName=t+"Provider";function s(i,l={}){const{optional:a=!1}=l,c=v.useContext(r);if(c)return c;if(e!==void 0)return e;if(!a)throw new Error(`\`${i}\` must be used within \`${t}\``)}return mt(s,"useContext"),[o,s]}mt(ew,"createContext");function Co(t,e=[]){let r=[];function o(i,l){const a=v.createContext(l);a.displayName=i+"Context";const c=r.length;r=[...r,l];const d=mt(h=>{var m;const{scope:g,children:p,...j}=h,y=((m=g==null?void 0:g[t])==null?void 0:m[c])||a,w=v.useMemo(()=>j,Object.values(j));return n.jsx(y.Provider,{value:w,children:p})},"Provider");d.displayName=i+"Provider";function u(h,g,p={}){var m;const{optional:j=!1}=p,y=((m=g==null?void 0:g[t])==null?void 0:m[c])||a,w=v.useContext(y);if(w)return w;if(l!==void 0)return l;if(!j)throw new Error(`\`${h}\` must be used within \`${i}\``)}return mt(u,"useContext"),[d,u]}mt(o,"createContext");const s=mt(()=>{const i=r.map(l=>v.createContext(l));return mt(function(a){const c=(a==null?void 0:a[t])||i;return v.useMemo(()=>({[`__scope${t}`]:{...a,[t]:c}}),[a,c])},"useScope")},"createScope");return s.scopeName=t,[o,rg(s,...e)]}mt(Co,"createContextScope");function rg(...t){const e=t[0];if(t.length===1)return e;const r=mt(()=>{const o=t.map(s=>({useScope:s(),scopeName:s.scopeName}));return mt(function(i){const l=o.reduce((a,{useScope:c,scopeName:d})=>{const h=c(i)[`__scope${d}`];return{...a,...h}},{});return v.useMemo(()=>({[`__scope${e.scopeName}`]:l}),[l])},"useComposedScopes")},"createScope");return r.scopeName=e.scopeName,r}mt(rg,"composeContextScopes");var tw=Object.defineProperty,at=(t,e)=>tw(t,"name",{value:e,configurable:!0});function wr(t){const e=v.forwardRef((r,o)=>{let{children:s,...i}=r,l=null,a=!1;const c=[];s=dg(s),v.Children.forEach(s,g=>{var p;if(ag(g)){a=!0;const j=g;let y="child"in j.props?j.props.child:j.props.children;for(;Nd(y)&&typeof nl=="function";)y=nl(y._payload);l=rw(j,y),c.push((p=l==null?void 0:l.props)==null?void 0:p.children)}else c.push(g)}),l?l=v.cloneElement(l,void 0,c):!a&&v.Children.count(s)===1&&v.isValidElement(s)&&(l=s);const d=l?lg(l):void 0,u=Ye(o,d);if(!l){if(s||s===0)throw new Error(a?iw(t):sw(t));return s}const h=ig(i,l.props??{});return l.type!==v.Fragment&&(h.ref=o?u:d),v.cloneElement(l,h)});return e.displayName=`${t}.Slot`,e}at(wr,"createSlot");var nw=wr("Slot"),og=Symbol.for("radix.slottable");function sg(t){const e=at(r=>"child"in r?r.children(r.child):r.children,"Slottable");return e.displayName=`${t}.Slottable`,e.__radixId=og,e}at(sg,"createSlottable");var rw=at((t,e)=>"child"in t.props?v.isValidElement(e)?v.cloneElement(e,void 0,t.props.children(e.props.children)):null:v.isValidElement(e)?e:null,"getSlottableElementFromSlottable");function ig(t,e){const r={...e};for(const o in e){const s=t[o],i=e[o];/^on[A-Z]/.test(o)?s&&i?r[o]=(...a)=>{const c=i(...a);return s(...a),c}:s&&(r[o]=s):o==="style"?r[o]={...s,...i}:o==="className"?r[o]=[s,i].filter(Boolean).join(" "):o==="aria-describedby"&&(r[o]=ug(i,s))}return{...t,...r}}at(ig,"mergeProps");function lg(t){var o,s;let e=(o=Object.getOwnPropertyDescriptor(t.props,"ref"))==null?void 0:o.get,r=e&&"isReactWarning"in e&&e.isReactWarning;return r?t.ref:(e=(s=Object.getOwnPropertyDescriptor(t,"ref"))==null?void 0:s.get,r=e&&"isReactWarning"in e&&e.isReactWarning,r?t.props.ref:t.props.ref||t.ref)}at(lg,"getElementRef");function ag(t){return v.isValidElement(t)&&typeof t.type=="function"&&"__radixId"in t.type&&t.type.__radixId===og}at(ag,"isSlottable");var ow=Symbol.for("react.lazy");function Nd(t){return t!=null&&typeof t=="object"&&"$$typeof"in t&&t.$$typeof===ow&&"_payload"in t&&cg(t._payload)}at(Nd,"isLazyComponent");function cg(t){return typeof t=="object"&&t!==null&&"then"in t}at(cg,"isPromiseLike");function dg(t){let e=t;for(;Nd(e)&&typeof nl=="function";)e=nl(e._payload);return e}at(dg,"useUnwrappedLazy");function ug(...t){const e=new Set;for(const r of t)if(typeof r=="string")for(const o of String(r).trim().split(/\s+/))o&&e.add(o);return e.size>0?Array.from(e).join(" "):void 0}at(ug,"concatAriaDescribedby");var sw=at(t=>`${t} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,"createSlotError"),iw=at(t=>`${t} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,"createSlottableError"),nl=Sr[" use ".trim().toString()],ot=globalThis!=null&&globalThis.document?v.useLayoutEffect:()=>{},lw=Object.defineProperty,ke=(t,e)=>lw(t,"name",{value:e,configurable:!0});function hg(t){const e=t+"CollectionProvider",[r,o]=Co(e),[s,i]=r(e,{collectionRef:{current:null},itemMap:new Map}),l=ke(y=>{const{scope:w,children:m}=y,f=v.useRef(null),x=v.useRef(new Map).current;return n.jsx(s,{scope:w,itemMap:x,collectionRef:f,children:m})},"CollectionProvider");l.displayName=e;const a=t+"CollectionSlot",c=wr(a),d=v.forwardRef((y,w)=>{const{scope:m,children:f}=y,x=i(a,m),b=Ye(w,x.collectionRef);return n.jsx(c,{ref:b,children:f})});d.displayName=a;const u=t+"CollectionItemSlot",h="data-radix-collection-item",g=wr(u),p=v.forwardRef((y,w)=>{const{scope:m,children:f,...x}=y,b=v.useRef(null),k=Ye(w,b),S=i(u,m);return v.useEffect(()=>(S.itemMap.set(b,{ref:b,...x}),()=>void S.itemMap.delete(b))),n.jsx(g,{[h]:"",ref:k,children:f})});p.displayName=u;function j(y){const w=i(t+"CollectionConsumer",y);return v.useCallback(()=>{const f=w.collectionRef.current;if(!f)return[];const x=Array.from(f.querySelectorAll(`[${h}]`));return Array.from(w.itemMap.values()).sort((S,C)=>x.indexOf(S.ref.current)-x.indexOf(C.ref.current))},[w.collectionRef,w.itemMap])}return ke(j,"useCollection"),[{Provider:l,Slot:d,ItemSlot:p},j,o]}ke(hg,"createCollection");var hh=new WeakMap,me,tt,ai=(tt=class extends Map{constructor(r){super(r);K(this,me);H(this,me,[...super.keys()]),hh.set(this,!0)}set(r,o){return hh.get(this)&&!this.has(r)&&T(this,me).push(r),super.set(r,o),this}insert(r,o,s){const i=this.has(o),l=i?this.size:this.size+1,a=Pd(r),c=a>=0?Math.min(a,l-1):Math.max(l+a,0);if(i?T(this,me).indexOf(o)===c:c===this.size)return this.set(o,s),this;const d=T(this,me).filter(h=>h!==o);d.splice(c,0,o);const u=d.map(h=>[h,h===o?s:this.get(h)]);this.clear();for(const[h,g]of u)this.set(h,g);return this}with(r,o,s){const i=new tt(this);return i.insert(r,o,s),i}before(r){const o=T(this,me).indexOf(r)-1;if(!(o<0))return this.entryAt(o)}setBefore(r,o,s){const i=T(this,me).indexOf(r);if(i===-1)return this;const l=T(this,me).indexOf(o),a=l!==-1&&l<i?i-1:i;return this.insert(a,o,s)}after(r){let o=T(this,me).indexOf(r);if(o=o===-1||o===this.size-1?-1:o+1,o!==-1)return this.entryAt(o)}setAfter(r,o,s){const i=T(this,me).indexOf(r);if(i===-1)return this;const l=T(this,me).indexOf(o),a=l!==-1&&l<=i?i:i+1;return this.insert(a,o,s)}first(){return this.entryAt(0)}last(){return this.entryAt(-1)}clear(){return H(this,me,[]),super.clear()}delete(r){const o=super.delete(r);return o&&T(this,me).splice(T(this,me).indexOf(r),1),o}deleteAt(r){const o=this.keyAt(r);return o!==void 0?this.delete(o):!1}at(r){const o=Ti(T(this,me),r);if(o!==void 0)return this.get(o)}entryAt(r){const o=Ti(T(this,me),r);if(o!==void 0)return[o,this.get(o)]}indexOf(r){return T(this,me).indexOf(r)}keyAt(r){return Ti(T(this,me),r)}from(r,o){const s=this.indexOf(r);if(s===-1)return;let i=s+o;return i<0&&(i=0),i>=this.size&&(i=this.size-1),this.at(i)}keyFrom(r,o){const s=this.indexOf(r);if(s===-1)return;let i=s+o;return i<0&&(i=0),i>=this.size&&(i=this.size-1),this.keyAt(i)}find(r,o){let s=0;for(const i of this){if(Reflect.apply(r,o,[i,s,this]))return i;s++}}findIndex(r,o){let s=0;for(const i of this){if(Reflect.apply(r,o,[i,s,this]))return s;s++}return-1}filter(r,o){const s=[];let i=0;for(const l of this)Reflect.apply(r,o,[l,i,this])&&s.push(l),i++;return new tt(s)}map(r,o){const s=[];let i=0;for(const l of this)s.push([l[0],Reflect.apply(r,o,[l,i,this])]),i++;return new tt(s)}reduce(...r){const[o,s]=r,i=r.length>1;if(!i&&this.size===0)throw new TypeError("Reduce of empty OrderedDict with no initial value");let l=0,a=s;for(const c of this)l===0&&!i?a=c:a=Reflect.apply(o,this,[a,c,l,this]),l++;return a}reduceRight(...r){const[o,s]=r,i=r.length>1;if(!i&&this.size===0)throw new TypeError("Reduce of empty OrderedDict with no initial value");let l=s;for(let a=this.size-1;a>=0;a--){const c=this.entryAt(a);a===this.size-1&&!i?l=c:l=Reflect.apply(o,this,[l,c,a,this])}return l}sort(r){if(typeof r!="function")throw new TypeError("OrderedDict.sort requires a compare function");const o=[...this.entries()].sort(r);this.clear();for(const[s,i]of o)this.set(s,i);return this}toSorted(r){if(typeof r!="function")throw new TypeError("OrderedDict.toSorted requires a compare function");const o=[...this.entries()].sort(r);return new tt(o)}toReversed(){const r=new tt;for(let o=this.size-1;o>=0;o--){const s=this.keyAt(o),i=this.get(s);r.set(s,i)}return r}toSpliced(...r){const o=[...this.entries()];return o.splice(...r),new tt(o)}slice(r,o){const s=new tt;for(const i of T(this,me).slice(r,o))s.set(i,this.get(i));return s}every(r,o){let s=0;for(const i of this){if(!Reflect.apply(r,o,[i,s,this]))return!1;s++}return!0}some(r,o){let s=0;for(const i of this){if(Reflect.apply(r,o,[i,s,this]))return!0;s++}return!1}},me=new WeakMap,ke(tt,"OrderedDict"),tt);function Ti(t,e){if("at"in Array.prototype)return Array.prototype.at.call(t,e);const r=pg(t,e);return r===-1?void 0:t[r]}ke(Ti,"at");function pg(t,e){const r=t.length,o=Pd(e),s=o>=0?o:r+o;return s<0||s>=r?-1:s}ke(pg,"toSafeIndex");function Pd(t){return t!==t||t===0?0:Math.trunc(t)}ke(Pd,"toSafeInteger");function aw(t){const e=t+"CollectionProvider",[r,o]=Co(e),[s,i]=r(e);s.displayName=t+"CollectionStableContextProvider";const[l,a]=r(e);l.displayName=t+"CollectionStatefulContextProvider";const c=ke(({state:S,...C})=>S?n.jsx(u,{...C,state:S}):n.jsx(d,{...C}),"CollectionProvider");c.displayName=e;const d=ke(S=>{const C=f();return n.jsx(u,{...S,state:C})},"CollectionInit");d.displayName=t+"CollectionInit";const u=ke(S=>{const{scope:C,children:E,state:M}=S,I=v.useRef(null),[W,_]=v.useState(null),$=Ye(I,_),[z,G]=M,O=v.useRef(new ai),U=v.useCallback(()=>{const N=O.current;return gg(N)||N.sort(Ni),N},[]);return v.useEffect(()=>{if(!W)return;const N=xg(()=>{G(P=>{const A=P.toSorted(Ni);return A.some(([B],V)=>P.keyAt(V)!==B)?A:P})});return N.observe(W,{childList:!0,subtree:!0}),()=>{N.disconnect()}},[W,G]),n.jsx(s,{scope:C,collectionElementRef:$,collectionElementRefObject:I,getCollection:U,setCollection:G,registryRef:O,children:n.jsx(l,{scope:C,collectionElement:W,collection:z,children:E})})},"CollectionProviderImpl");u.displayName=t+"CollectionProviderImpl";const h=t+"CollectionSlot",g=wr(h),p=v.forwardRef((S,C)=>{const{scope:E,children:M}=S,I=i(h,E),W=Ye(C,I.collectionElementRef);return n.jsx(g,{ref:W,children:M})});p.displayName=h;const j=t+"CollectionItemSlot",y="data-radix-collection-item",w=wr(j),m=v.forwardRef((S,C)=>{const{scope:E,children:M,...I}=S,W=v.useRef(null),_=i(j,E),{setCollection:$,registryRef:z}=_,G=v.useRef(I);fg(G.current,I)||(G.current=I);const O=G.current,U=v.useCallback(A=>{const F=z.current;A?F.set(A,{...G.current,element:A}):W.current&&F.delete(W.current)},[z]),N=Ye(C,U,W);ot(()=>{const A=W.current,F=z.current;A&&F.has(A)&&F.set(A,{...O,element:A})},[O,z]);const P=v.useRef(null);return v.useEffect(()=>{const A=W.current,F=P.current;((F==null?void 0:F.element)??null)===A&&(!A||(F==null?void 0:F.itemData)===O)||(P.current=A?{element:A,itemData:O}:null,$(B=>{const V=new ai(B);return F&&F.element!==A&&V.delete(F.element),A&&V.set(A,{...O,element:A}),V.sort(Ni)}))}),v.useEffect(()=>()=>{const A=P.current;P.current=null,A&&$(F=>{if(!F.has(A.element))return F;const B=new ai(F);return B.delete(A.element),B})},[$]),n.jsx(w,{[y]:"",ref:N,children:M})});m.displayName=j;function f(){return v.useState(new ai)}ke(f,"useInitCollection");function x(S){const{collection:C}=a(t+"CollectionConsumer",S);return C}ke(x,"useCollection");function b(S){const{getCollection:C}=i(t+"CollectionConsumer",S);return C}return ke(b,"useGetCollection"),[{Provider:c,Slot:p,ItemSlot:m},{createCollectionScope:o,useCollection:x,useGetCollection:b,useInitCollection:f}]}ke(aw,"createCollection");function fg(t,e){if(t===e)return!0;if(typeof t!="object"||typeof e!="object"||t==null||e==null)return!1;const r=Object.keys(t),o=Object.keys(e);if(r.length!==o.length)return!1;for(const s of r)if(!Object.prototype.hasOwnProperty.call(e,s)||t[s]!==e[s])return!1;return!0}ke(fg,"shallowEqual");function mg(t,e){return!!(e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_PRECEDING)}ke(mg,"isElementPreceding");function gg(t){let e;for(const r of t.keys()){if(e){const o=e.compareDocumentPosition(r);if(!(o&Node.DOCUMENT_POSITION_DISCONNECTED)&&o&Node.DOCUMENT_POSITION_PRECEDING)return!1}e=r}return!0}ke(gg,"isInDocumentOrder");function Ni(t,e){return!t[1].element||!e[1].element?0:mg(t[1].element,e[1].element)?-1:1}ke(Ni,"sortByDocumentPosition");function xg(t){return new MutationObserver(r=>{for(const o of r)if(o.type==="childList"){t();return}})}ke(xg,"getChildListObserver");var cw=Object.defineProperty,dw=(t,e)=>cw(t,"name",{value:e,configurable:!0}),uw=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],Mt=uw.reduce((t,e)=>{const r=wr(`Primitive.${e}`),o=v.forwardRef((s,i)=>{const{asChild:l,...a}=s,c=l?r:e;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),n.jsx(c,{...a,ref:i})});return o.displayName=`Primitive.${e}`,{...t,[e]:o}},{});function Ed(t,e){t&&ko.flushSync(()=>t.dispatchEvent(e))}dw(Ed,"dispatchDiscreteCustomEvent");var hw=Object.defineProperty,pw=(t,e)=>hw(t,"name",{value:e,configurable:!0}),ph=Sr[" useInsertionEffect ".trim().toString()];function sn(t){const e=v.useRef(t);return typeof ph=="function"?ph(()=>{e.current=t}):ot(()=>{e.current=t}),v.useMemo(()=>(...r)=>{var o;return(o=e.current)==null?void 0:o.call(e,...r)},[])}pw(sn,"useCallbackRef");var fw=Object.defineProperty,be=(t,e)=>fw(t,"name",{value:e,configurable:!0}),hc="dismissableLayer.update",mw="dismissableLayer.pointerDownOutside",gw="dismissableLayer.focusOutside",fh,Id=v.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set,dismissableSurfaces:new Set}),vg=v.forwardRef(be(function(e,r){const{disableOutsidePointerEvents:o=!1,deferPointerDownOutside:s=!1,onEscapeKeyDown:i,onPointerDownOutside:l,onFocusOutside:a,onInteractOutside:c,onDismiss:d,...u}=e,h=v.useContext(Id),[g,p]=v.useState(null),j=(g==null?void 0:g.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,y]=v.useState({}),w=Ye(r,p),m=Array.from(h.layers),[f]=[...h.layersWithOutsidePointerEventsDisabled].slice(-1),x=f?m.indexOf(f):-1,b=g?m.indexOf(g):-1,k=h.layersWithOutsidePointerEventsDisabled.size>0,S=b>=x,C=v.useRef(!1),E=yg(_=>{l==null||l(_),c==null||c(_),_.defaultPrevented||d==null||d()},{ownerDocument:j,deferPointerDownOutside:s,isDeferredPointerDownOutsideRef:C,dismissableSurfaces:h.dismissableSurfaces,shouldHandlePointerDownOutside:v.useCallback(_=>{if(!(_ instanceof Node))return!1;const $=[...h.branches].some(z=>z.contains(_));return S&&!$},[h.branches,S])}),M=jg(_=>{if(s&&C.current)return;const $=_.target;[...h.branches].some(G=>G.contains($))||(a==null||a(_),c==null||c(_),_.defaultPrevented||d==null||d())},j),I=g?b===m.length-1:!1,W=sn(_=>{_.key==="Escape"&&(i==null||i(_),!_.defaultPrevented&&d&&(_.preventDefault(),d()))});return v.useEffect(()=>{if(I)return j.addEventListener("keydown",W,{capture:!0}),()=>j.removeEventListener("keydown",W,{capture:!0})},[j,I,W]),v.useEffect(()=>{if(g)return o&&(h.layersWithOutsidePointerEventsDisabled.size===0&&(fh=j.body.style.pointerEvents,j.body.style.pointerEvents="none"),h.layersWithOutsidePointerEventsDisabled.add(g)),h.layers.add(g),pc(),()=>{o&&(h.layersWithOutsidePointerEventsDisabled.delete(g),h.layersWithOutsidePointerEventsDisabled.size===0&&(j.body.style.pointerEvents=fh))}},[g,j,o,h]),v.useEffect(()=>()=>{g&&(h.layers.delete(g),h.layersWithOutsidePointerEventsDisabled.delete(g),pc())},[g,h]),v.useEffect(()=>{const _=be(()=>y({}),"handleUpdate");return document.addEventListener(hc,_),()=>document.removeEventListener(hc,_)},[]),n.jsx(Mt.div,{...u,ref:w,style:{pointerEvents:k?S?"auto":"none":void 0,...e.style},onFocusCapture:Je(e.onFocusCapture,M.onFocusCapture),onBlurCapture:Je(e.onBlurCapture,M.onBlurCapture),onPointerDownCapture:Je(e.onPointerDownCapture,E.onPointerDownCapture)})},"DismissableLayer")),xw=v.forwardRef(be(function(e,r){const o=v.useContext(Id),s=v.useRef(null),i=Ye(r,s);return v.useEffect(()=>{const l=s.current;if(l)return o.branches.add(l),()=>{o.branches.delete(l)}},[o.branches]),n.jsx(Mt.div,{...e,ref:i})},"DismissableLayerBranch"));function vw(){const t=v.useContext(Id),[e,r]=v.useState(null);return v.useEffect(()=>{if(e)return t.dismissableSurfaces.add(e),()=>{t.dismissableSurfaces.delete(e)}},[e,t.dismissableSurfaces]),r}be(vw,"useDismissableLayerSurface");var yw=be(()=>!0,"IS_TRUE");function yg(t,e){const{ownerDocument:r=globalThis==null?void 0:globalThis.document,deferPointerDownOutside:o=!1,isDeferredPointerDownOutsideRef:s,dismissableSurfaces:i,shouldHandlePointerDownOutside:l=yw}=e,a=sn(t),c=v.useRef(!1),d=v.useRef(!1),u=v.useRef(new Map),h=v.useRef(()=>{});return v.useEffect(()=>{function g(){d.current=!1,s.current=!1,u.current.clear()}be(g,"resetOutsideInteraction");function p(){return Array.from(u.current.values()).some(Boolean)}be(p,"isOutsideInteractionIntercepted");function j(x){if(!d.current)return;const b=x.target;b instanceof Node&&[...i].some(S=>S.contains(b))||u.current.set(x.type,!0),x.type==="click"&&window.setTimeout(()=>{d.current&&h.current()},0)}be(j,"handleInteractionCapture");function y(x){d.current&&u.current.set(x.type,!1)}be(y,"handleInteractionBubble");const w=be(x=>{if(x.target&&!c.current){let b=function(){r.removeEventListener("click",h.current);const S=p();g(),S||Ad(mw,a,k,{discrete:!0})};if(be(b,"handleAndDispatchPointerDownOutsideEvent"),!l(x.target)){r.removeEventListener("click",h.current),g(),c.current=!1;return}const k={originalEvent:x};d.current=!0,s.current=o&&x.button===0,u.current.clear(),!o||x.button!==0?b():(r.removeEventListener("click",h.current),h.current=b,r.addEventListener("click",h.current,{once:!0}))}else r.removeEventListener("click",h.current),g();c.current=!1},"handlePointerDown"),m=["pointerup","mousedown","mouseup","touchstart","touchend","click"];for(const x of m)r.addEventListener(x,j,!0),r.addEventListener(x,y);const f=window.setTimeout(()=>{r.addEventListener("pointerdown",w)},0);return()=>{window.clearTimeout(f),r.removeEventListener("pointerdown",w),r.removeEventListener("click",h.current);for(const x of m)r.removeEventListener(x,j,!0),r.removeEventListener(x,y)}},[r,a,o,s,i,l]),{onPointerDownCapture:be(()=>c.current=!0,"onPointerDownCapture")}}be(yg,"usePointerDownOutside");function jg(t,e=globalThis==null?void 0:globalThis.document){const r=sn(t),o=v.useRef(!1);return v.useEffect(()=>{const s=be(i=>{i.target&&!o.current&&Ad(gw,r,{originalEvent:i},{discrete:!1})},"handleFocus");return e.addEventListener("focusin",s),()=>e.removeEventListener("focusin",s)},[e,r]),{onFocusCapture:be(()=>o.current=!0,"onFocusCapture"),onBlurCapture:be(()=>o.current=!1,"onBlurCapture")}}be(jg,"useFocusOutside");function pc(){const t=new CustomEvent(hc);document.dispatchEvent(t)}be(pc,"dispatchUpdate");function Ad(t,e,r,{discrete:o}){const s=r.originalEvent.target,i=new CustomEvent(t,{bubbles:!1,cancelable:!0,detail:r});e&&s.addEventListener(t,e,{once:!0}),o?Ed(s,i):s.dispatchEvent(i)}be(Ad,"handleAndDispatchCustomEvent");var jw=Object.defineProperty,ww=(t,e)=>jw(t,"name",{value:e,configurable:!0}),bw=v.forwardRef(ww(function(e,r){var c;const{container:o,...s}=e,[i,l]=v.useState(!1);ot(()=>l(!0),[]);const a=o||i&&((c=globalThis==null?void 0:globalThis.document)==null?void 0:c.body);return a?ko.createPortal(n.jsx(Mt.div,{...s,ref:r}),a):null},"Portal")),kw=Object.defineProperty,ln=(t,e)=>kw(t,"name",{value:e,configurable:!0});function wg(t,e){return v.useReducer((r,o)=>e[r][o]??r,t)}ln(wg,"useStateMachine");var bg=ln(t=>{const{present:e,children:r}=t,o=kg(e),s=typeof r=="function"?r({present:o.isPresent}):v.Children.only(r),i=Sg(o.ref,Cg(s));return typeof r=="function"||o.isPresent?v.cloneElement(s,{ref:i}):null},"Presence");function kg(t){const[e,r]=v.useState(),o=v.useRef(null),s=v.useRef(t),i=v.useRef("none"),l=v.useRef(void 0),a=t?"mounted":"unmounted",[c,d]=wg(a,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return v.useEffect(()=>{c==="mounted"?(i.current=l.current??_r(o.current),l.current=void 0):i.current="none"},[c]),ot(()=>{const u=o.current,h=s.current;if(h!==t){const p=i.current,j=_r(u);t?(l.current=j,d("MOUNT")):j==="none"||(u==null?void 0:u.display)==="none"?d("UNMOUNT"):d(h&&p!==j?"ANIMATION_OUT":"UNMOUNT"),s.current=t}},[t,d]),ot(()=>{if(e){let u;const h=e.ownerDocument.defaultView??window,g=ln(j=>{const w=_r(o.current).includes(CSS.escape(j.animationName));if(j.target===e&&w&&(d("ANIMATION_END"),!s.current)){const m=e.style.animationFillMode;e.style.animationFillMode="forwards",u=h.setTimeout(()=>{e.style.animationFillMode==="forwards"&&(e.style.animationFillMode=m)})}},"handleAnimationEnd"),p=ln(j=>{j.target===e&&(i.current=_r(o.current))},"handleAnimationStart");return e.addEventListener("animationstart",p),e.addEventListener("animationcancel",g),e.addEventListener("animationend",g),()=>{h.clearTimeout(u),e.removeEventListener("animationstart",p),e.removeEventListener("animationcancel",g),e.removeEventListener("animationend",g)}}else d("ANIMATION_END")},[e,d]),{isPresent:["mounted","unmountSuspended"].includes(c),ref:v.useCallback(u=>{if(u){const h=getComputedStyle(u);o.current=h,l.current=_r(h)}else o.current=null;r(u)},[])}}ln(kg,"usePresence");function fc(t,e){if(typeof t=="function")return t(e);t!=null&&(t.current=e)}ln(fc,"setRef");function Sg(...t){const e=v.useRef(t);return e.current=t,v.useCallback(r=>{const o=e.current;let s=!1;const i=o.map(l=>{const a=fc(l,r);return!s&&typeof a=="function"&&(s=!0),a});if(s)return()=>{for(let l=0;l<i.length;l++){const a=i[l];typeof a=="function"?a():fc(o[l],null)}}},[])}ln(Sg,"useStableComposedRefs");function _r(t){return(t==null?void 0:t.animationName)||"none"}ln(_r,"getAnimationName");function Cg(t){var o,s;let e=(o=Object.getOwnPropertyDescriptor(t.props,"ref"))==null?void 0:o.get,r=e&&"isReactWarning"in e&&e.isReactWarning;return r?t.ref:(e=(s=Object.getOwnPropertyDescriptor(t,"ref"))==null?void 0:s.get,r=e&&"isReactWarning"in e&&e.isReactWarning,r?t.props.ref:t.props.ref||t.ref)}ln(Cg,"getElementRef");var Sw=Object.defineProperty,Cw=(t,e)=>Sw(t,"name",{value:e,configurable:!0}),mh=Sr[" useEffectEvent ".trim().toString()],gh=Sr[" useInsertionEffect ".trim().toString()];function Tg(t){if(typeof mh=="function")return mh(t);const e=v.useRef(()=>{throw new Error("Cannot call an event handler while rendering.")});return typeof gh=="function"?gh(()=>{e.current=t}):ot(()=>{e.current=t}),v.useMemo(()=>(...r)=>{var o;return(o=e.current)==null?void 0:o.call(e,...r)},[])}Cw(Tg,"useEffectEvent");var Tw=Object.defineProperty,Ls=(t,e)=>Tw(t,"name",{value:e,configurable:!0}),Nw=Sr[" useInsertionEffect ".trim().toString()]||ot;function Ng({prop:t,defaultProp:e,onChange:r=Ls(()=>{},"onChange"),caller:o}){const[s,i,l]=Pg({defaultProp:e,onChange:r}),a=t!==void 0,c=a?t:s,d=v.useCallback(u=>{var h;if(a){const g=Eg(u)?u(t):u;g!==t&&((h=l.current)==null||h.call(l,g))}else i(u)},[a,t,i,l]);return[c,d]}Ls(Ng,"useControllableState");function Pg({defaultProp:t,onChange:e}){const[r,o]=v.useState(t),s=v.useRef(r),i=v.useRef(e);return Nw(()=>{i.current=e},[e]),v.useEffect(()=>{var l;s.current!==r&&((l=i.current)==null||l.call(i,r),s.current=r)},[r,s]),[r,o,i]}Ls(Pg,"useUncontrolledState");function Eg(t){return typeof t=="function"}Ls(Eg,"isFunction");var xh=Symbol("RADIX:SYNC_STATE");function Pw(t,e,r,o){const{prop:s,defaultProp:i,onChange:l,caller:a}=e,c=s!==void 0,d=Tg(l),u=[{...r,state:i}];o&&u.push(o);const[h,g]=v.useReducer((w,m)=>{if(m.type===xh)return{...w,state:m.state};const f=t(w,m);return c&&!Object.is(f.state,w.state)&&d(f.state),f},...u),p=h.state,j=v.useRef(p);v.useEffect(()=>{j.current!==p&&(j.current=p,c||d(p))},[p,j,c]);const y=v.useMemo(()=>s!==void 0?{...h,state:s}:h,[h,s]);return v.useEffect(()=>{c&&!Object.is(s,h.state)&&g({type:xh,state:s})},[s,h.state,c]),[y,g]}Ls(Pw,"useControllableStateReducer");var Ew=Object.defineProperty,Iw=(t,e)=>Ew(t,"name",{value:e,configurable:!0}),Aw=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"}),Rd=v.forwardRef(Iw(function(e,r){return n.jsx(Mt.span,{...e,ref:r,style:{...Aw,...e.style}})},"VisuallyHidden")),Rw=Object.defineProperty,ne=(t,e)=>Rw(t,"name",{value:e,configurable:!0}),vh=Sr[" startTransition ".trim().toString()]||(()=>{}),Ig="ToastProvider",[Md,Ag,Mw]=hg("Toast"),mc={Left:"left",Right:"right"},yh={Foreground:"foreground"},[Rg,KC]=Co("Toast",[Mw]),[_w,Cl]=Rg(Ig);function Pi(t){typeof vh=="function"?vh(t):t()}ne(Pi,"scheduleUpdate");var Ow=ne(t=>{const{__scopeToast:e,label:r="Notification",duration:o=5e3,swipeDirection:s=mc.Right,swipeThreshold:i=50,announcerContainer:l,children:a}=t,[c,d]=v.useState(null),[u,h]=v.useState(0),g=v.useRef(!1),p=v.useCallback(w=>{Pi(()=>d(w))},[]),j=v.useCallback(()=>{Pi(()=>h(w=>w+1))},[]),y=v.useCallback(()=>{Pi(()=>h(w=>w-1))},[]);return r.trim()||console.error(`Invalid prop \`label\` supplied to \`${Ig}\`. Expected non-empty \`string\`.`),n.jsx(Md.Provider,{scope:e,children:n.jsx(_w,{scope:e,label:r,duration:o,swipeDirection:s,swipeThreshold:i,toastCount:u,viewport:c,onViewportChange:p,onToastAdd:j,onToastRemove:y,isClosePausedRef:g,announcerContainer:l,children:a})})},"ToastProvider"),Lw="ToastViewport",Dw=["F8"],gc="toast.viewportPause",xc="toast.viewportResume",Mg=v.forwardRef(ne(function(e,r){const{__scopeToast:o,hotkey:s=Dw,label:i="Notifications ({hotkey})",...l}=e,a=Cl(Lw,o),c=Ag(o),d=v.useRef(null),u=v.useRef(null),h=v.useRef(null),g=v.useRef(null),p=Ye(r,g,a.onViewportChange),j=s.join("+").replace(/Key/g,"").replace(/Digit/g,""),y=a.toastCount>0;v.useEffect(()=>{const m=ne(f=>{var b;s.length!==0&&s.every(k=>f[k]||f.code===k)&&((b=g.current)==null||b.focus())},"handleKeyDown");return document.addEventListener("keydown",m),()=>document.removeEventListener("keydown",m)},[s]),v.useEffect(()=>{const m=d.current,f=g.current;if(y&&m&&f){const x=ne(()=>{if(!a.isClosePausedRef.current){const C=new CustomEvent(gc);f.dispatchEvent(C),a.isClosePausedRef.current=!0}},"handlePause"),b=ne(()=>{if(a.isClosePausedRef.current){const C=new CustomEvent(xc);f.dispatchEvent(C),a.isClosePausedRef.current=!1}},"handleResume"),k=ne(C=>{!m.contains(C.relatedTarget)&&b()},"handleFocusOutResume"),S=ne(()=>{m.contains(document.activeElement)||b()},"handlePointerLeaveResume");return m.addEventListener("focusin",x),m.addEventListener("focusout",k),m.addEventListener("pointermove",x),m.addEventListener("pointerleave",S),window.addEventListener("blur",x),window.addEventListener("focus",b),()=>{m.removeEventListener("focusin",x),m.removeEventListener("focusout",k),m.removeEventListener("pointermove",x),m.removeEventListener("pointerleave",S),window.removeEventListener("blur",x),window.removeEventListener("focus",b)}}},[y,a.isClosePausedRef]);const w=v.useCallback(({tabbingDirection:m})=>{const x=c().map(b=>{const k=b.ref.current,S=[k,...zg(k)];return m==="forwards"?S:S.reverse()});return(m==="forwards"?x.reverse():x).flat()},[c]);return v.useEffect(()=>{const m=g.current;if(m){const f=ne(x=>{var S,C,E;const b=x.altKey||x.ctrlKey||x.metaKey;if(x.key==="Tab"&&!b){const M=document.activeElement,I=x.shiftKey;if(x.target===m&&I){(S=u.current)==null||S.focus();return}const $=w({tabbingDirection:I?"backwards":"forwards"}),z=$.findIndex(G=>G===M);Ei($.slice(z+1))?x.preventDefault():I?(C=u.current)==null||C.focus():(E=h.current)==null||E.focus()}},"handleKeyDown");return m.addEventListener("keydown",f),()=>m.removeEventListener("keydown",f)}},[c,w]),n.jsxs(xw,{ref:d,role:"region","aria-label":i.replace("{hotkey}",j),tabIndex:-1,style:{pointerEvents:y?void 0:"none"},children:[y&&n.jsx(jh,{ref:u,onFocusFromOutsideViewport:()=>{const m=w({tabbingDirection:"forwards"});Ei(m)}}),n.jsx(Md.Slot,{scope:o,children:n.jsx(Mt.ol,{tabIndex:-1,...l,ref:p})}),y&&n.jsx(jh,{ref:h,onFocusFromOutsideViewport:()=>{const m=w({tabbingDirection:"backwards"});Ei(m)}})]})},"ToastViewport")),Fw="ToastFocusProxy",jh=v.forwardRef(ne(function(e,r){const{__scopeToast:o,onFocusFromOutsideViewport:s,...i}=e,l=Cl(Fw,o);return n.jsx(Rd,{tabIndex:0,...i,ref:r,style:{position:"fixed"},onFocus:a=>{var u;const c=a.relatedTarget;!((u=l.viewport)!=null&&u.contains(c))&&s()}})},"ToastFocusProxy")),Tl="Toast",Bw="toast.swipeStart",Ww="toast.swipeMove",zw="toast.swipeCancel",$w="toast.swipeEnd",_g=v.forwardRef(ne(function(e,r){const{forceMount:o,open:s,defaultOpen:i,onOpenChange:l,...a}=e,[c,d]=Ng({prop:s,defaultProp:i??!0,onChange:l,caller:Tl});return n.jsx(bg,{present:o||c,children:n.jsx(Vw,{open:c,...a,ref:r,onClose:()=>d(!1),onPause:sn(e.onPause),onResume:sn(e.onResume),onSwipeStart:Je(e.onSwipeStart,u=>{u.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:Je(e.onSwipeMove,u=>{const{x:h,y:g}=u.detail.delta;u.currentTarget.setAttribute("data-swipe","move"),u.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${h}px`),u.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${g}px`)}),onSwipeCancel:Je(e.onSwipeCancel,u=>{u.currentTarget.setAttribute("data-swipe","cancel"),u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:Je(e.onSwipeEnd,u=>{const{x:h,y:g}=u.detail.delta;u.currentTarget.setAttribute("data-swipe","end"),u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),u.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${h}px`),u.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${g}px`),d(!1)})})})},"Toast")),[Hw,Uw]=Rg(Tl,{onClose(){}}),Vw=v.forwardRef(ne(function(e,r){const{__scopeToast:o,type:s=yh.Foreground,duration:i,open:l,onClose:a,onEscapeKeyDown:c,onPause:d,onResume:u,onSwipeStart:h,onSwipeMove:g,onSwipeCancel:p,onSwipeEnd:j,...y}=e,w=Cl(Tl,o),m=Ag(o),[f,x]=v.useState(null),b=Ye(r,x),k=v.useRef(null),S=v.useRef(null),C=i||w.duration,E=v.useRef(0),M=v.useRef(C),I=v.useRef(0),{onToastAdd:W,onToastRemove:_}=w,$=sn(()=>{var U;(f==null?void 0:f.contains(document.activeElement))&&((U=w.viewport)==null||U.focus()),a()}),z=v.useCallback(O=>{!O||O===1/0||(window.clearTimeout(I.current),E.current=new Date().getTime(),I.current=window.setTimeout($,O))},[$]);v.useEffect(()=>{const O=w.viewport;if(O){const U=ne(()=>{z(M.current),u==null||u()},"handleResume"),N=ne(()=>{const P=new Date().getTime()-E.current;M.current=M.current-P,window.clearTimeout(I.current),d==null||d()},"handlePause");return O.addEventListener(gc,N),O.addEventListener(xc,U),()=>{O.removeEventListener(gc,N),O.removeEventListener(xc,U)}}},[w.viewport,C,d,u,z]),v.useEffect(()=>{M.current=C,l&&!w.isClosePausedRef.current&&z(C)},[l,C,w.isClosePausedRef,z]),v.useEffect(()=>()=>{window.clearTimeout(I.current)},[]),v.useEffect(()=>(W(),()=>_()),[W,_]);const G=v.useMemo(()=>f?Od(f):null,[f]);return w.viewport?n.jsxs(n.Fragment,{children:[G&&n.jsx(qw,{__scopeToast:o,role:"status","aria-live":s===yh.Foreground?"assertive":"polite",children:G}),n.jsx(Hw,{scope:o,onClose:$,children:ko.createPortal(n.jsx(Md.ItemSlot,{scope:o,children:n.jsx(vg,{asChild:!0,onEscapeKeyDown:Je(c,O=>{m().some(N=>{var P;return(P=N.ref.current)==null?void 0:P.contains(O.target)})||$()}),children:n.jsx(Mt.li,{tabIndex:0,"data-state":l?"open":"closed","data-swipe-direction":w.swipeDirection,...y,ref:b,style:{userSelect:"none",touchAction:"none",...e.style},onKeyDown:Je(e.onKeyDown,O=>{O.key==="Escape"&&(c==null||c(O.nativeEvent),O.nativeEvent.defaultPrevented||$())}),onPointerDown:Je(e.onPointerDown,O=>{O.button===0&&(k.current={x:O.clientX,y:O.clientY})}),onPointerMove:Je(e.onPointerMove,O=>{if(!k.current)return;const U=O.clientX-k.current.x,N=O.clientY-k.current.y,P=!!S.current,A=["left","right"].includes(w.swipeDirection),F=["left","up"].includes(w.swipeDirection)?Math.min:Math.max,B=A?F(0,U):0,V=A?0:F(0,N),Q=O.pointerType==="touch"?10:2,oe={x:B,y:V},ye={originalEvent:O,delta:oe};P?(S.current=oe,Jo(Ww,g,ye,{discrete:!1})):wh(oe,w.swipeDirection,Q)?(S.current=oe,Jo(Bw,h,ye,{discrete:!1}),O.target.setPointerCapture(O.pointerId)):(Math.abs(U)>Q||Math.abs(N)>Q)&&(k.current=null)}),onPointerUp:Je(e.onPointerUp,O=>{const U=S.current,N=O.target;if(N.hasPointerCapture(O.pointerId)&&N.releasePointerCapture(O.pointerId),S.current=null,k.current=null,U){const P=O.currentTarget,A={originalEvent:O,delta:U};wh(U,w.swipeDirection,w.swipeThreshold)?Jo($w,j,A,{discrete:!0}):Jo(zw,p,A,{discrete:!0}),P.addEventListener("click",F=>F.preventDefault(),{once:!0})}})})})}),w.viewport)})]}):null},"ToastImpl")),qw=ne(t=>{const{__scopeToast:e,children:r,...o}=t,s=Cl(Tl,e),[i,l]=v.useState(!1),[a,c]=v.useState(!1);return Bg(()=>l(!0)),v.useEffect(()=>{const d=window.setTimeout(()=>c(!0),1e3);return()=>window.clearTimeout(d)},[]),a?null:n.jsx(bw,{asChild:!0,container:s.announcerContainer||void 0,children:n.jsx(Rd,{...o,children:i&&n.jsxs(n.Fragment,{children:[s.label," ",r]})})})},"ToastAnnounce"),Og=v.forwardRef(ne(function(e,r){const{__scopeToast:o,...s}=e;return n.jsx(Mt.div,{...s,ref:r})},"ToastTitle")),Lg=v.forwardRef(ne(function(e,r){const{__scopeToast:o,...s}=e;return n.jsx(Mt.div,{...s,ref:r})},"ToastDescription")),Jw="ToastAction",Dg=v.forwardRef(ne(function(e,r){const{altText:o,...s}=e;return o.trim()?n.jsx(Fg,{altText:o,asChild:!0,children:n.jsx(_d,{...s,ref:r})}):(console.error(`Invalid prop \`altText\` supplied to \`${Jw}\`. Expected non-empty \`string\`.`),null)},"ToastAction")),Gw="ToastClose",_d=v.forwardRef(ne(function(e,r){const{__scopeToast:o,...s}=e,i=Uw(Gw,o);return n.jsx(Fg,{asChild:!0,children:n.jsx(Mt.button,{type:"button",...s,ref:r,onClick:Je(e.onClick,i.onClose)})})},"ToastClose")),Fg=v.forwardRef(ne(function(e,r){const{__scopeToast:o,altText:s,...i}=e;return n.jsx(Mt.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":s||void 0,...i,ref:r})},"ToastAnnounceExclude"));function Od(t){const e=[];return Array.from(t.childNodes).forEach(o=>{if(o.nodeType===o.TEXT_NODE&&o.textContent&&e.push(o.textContent),Wg(o)){const s=o.ariaHidden||o.hidden||o.style.display==="none",i=o.dataset.radixToastAnnounceExclude==="";if(!s)if(i){const l=o.dataset.radixToastAnnounceAlt;l&&e.push(l)}else e.push(...Od(o))}}),e}ne(Od,"getAnnounceTextContent");function Jo(t,e,r,{discrete:o}){const s=r.originalEvent.currentTarget,i=new CustomEvent(t,{bubbles:!0,cancelable:!0,detail:r});e&&s.addEventListener(t,e,{once:!0}),o?Ed(s,i):s.dispatchEvent(i)}ne(Jo,"handleAndDispatchCustomEvent");var wh=ne((t,e,r=0)=>{const o=Math.abs(t.x),s=Math.abs(t.y),i=o>s;return e===mc.Left||e===mc.Right?i&&o>r:!i&&s>r},"isDeltaInDirection");function Bg(t=()=>{}){const e=sn(t);ot(()=>{let r=0,o=0;return r=window.requestAnimationFrame(()=>o=window.requestAnimationFrame(e)),()=>{window.cancelAnimationFrame(r),window.cancelAnimationFrame(o)}},[e])}ne(Bg,"useNextFrame");function Wg(t){return t.nodeType===t.ELEMENT_NODE}ne(Wg,"isHTMLElement");function zg(t){const e=[],r=document.createTreeWalker(t,NodeFilter.SHOW_ELEMENT,{acceptNode:ne(o=>{const s=o.tagName==="INPUT"&&o.type==="hidden";return o.disabled||o.hidden||s?NodeFilter.FILTER_SKIP:o.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP},"acceptNode")});for(;r.nextNode();)e.push(r.currentNode);return e}ne(zg,"getTabbableCandidates");function Ei(t){const e=document.activeElement;return t.some(r=>r===e?!0:(r.focus(),document.activeElement!==e))}ne(Ei,"focusFirst");function $g(t){var e,r,o="";if(typeof t=="string"||typeof t=="number")o+=t;else if(typeof t=="object")if(Array.isArray(t)){var s=t.length;for(e=0;e<s;e++)t[e]&&(r=$g(t[e]))&&(o&&(o+=" "),o+=r)}else for(r in t)t[r]&&(o&&(o+=" "),o+=r);return o}function Hg(){for(var t,e,r=0,o="",s=arguments.length;r<s;r++)(t=arguments[r])&&(e=$g(t))&&(o&&(o+=" "),o+=e);return o}const bh=t=>typeof t=="boolean"?`${t}`:t===0?"0":t,kh=Hg,Ld=(t,e)=>r=>{var o;if((e==null?void 0:e.variants)==null)return kh(t,r==null?void 0:r.class,r==null?void 0:r.className);const{variants:s,defaultVariants:i}=e,l=Object.keys(s).map(d=>{const u=r==null?void 0:r[d],h=i==null?void 0:i[d];if(u===null)return null;const g=bh(u)||bh(h);return s[d][g]}),a=r&&Object.entries(r).reduce((d,u)=>{let[h,g]=u;return g===void 0||(d[h]=g),d},{}),c=e==null||(o=e.compoundVariants)===null||o===void 0?void 0:o.reduce((d,u)=>{let{class:h,className:g,...p}=u;return Object.entries(p).every(j=>{let[y,w]=j;return Array.isArray(w)?w.includes({...i,...a}[y]):{...i,...a}[y]===w})?[...d,h,g]:d},[]);return kh(t,l,c,r==null?void 0:r.class,r==null?void 0:r.className)};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qw=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Ug=(...t)=>t.filter((e,r,o)=>!!e&&e.trim()!==""&&o.indexOf(e)===r).join(" ").trim();/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Kw={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xw=v.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:o,className:s="",children:i,iconNode:l,...a},c)=>v.createElement("svg",{ref:c,...Kw,width:e,height:e,stroke:t,strokeWidth:o?Number(r)*24/Number(e):r,className:Ug("lucide",s),...a},[...l.map(([d,u])=>v.createElement(d,u)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ce=(t,e)=>{const r=v.forwardRef(({className:o,...s},i)=>v.createElement(Xw,{ref:i,iconNode:e,className:Ug(`lucide-${Qw(t)}`,o),...s}));return r.displayName=`${t}`,r};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sh=Ce("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yw=Ce("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zw=Ce("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eb=Ce("Brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tb=Ce("CodeXml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nb=Ce("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rb=Ce("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vg=Ce("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ob=Ce("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sb=Ce("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ib=Ce("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lb=Ce("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qg=Ce("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ab=Ce("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jg=Ce("Share2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gg=Ce("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cb=Ce("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const db=Ce("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ub=Ce("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),Dd="-",hb=t=>{const e=fb(t),{conflictingClassGroups:r,conflictingClassGroupModifiers:o}=t;return{getClassGroupId:l=>{const a=l.split(Dd);return a[0]===""&&a.length!==1&&a.shift(),Qg(a,e)||pb(l)},getConflictingClassGroupIds:(l,a)=>{const c=r[l]||[];return a&&o[l]?[...c,...o[l]]:c}}},Qg=(t,e)=>{var l;if(t.length===0)return e.classGroupId;const r=t[0],o=e.nextPart.get(r),s=o?Qg(t.slice(1),o):void 0;if(s)return s;if(e.validators.length===0)return;const i=t.join(Dd);return(l=e.validators.find(({validator:a})=>a(i)))==null?void 0:l.classGroupId},Ch=/^\[(.+)\]$/,pb=t=>{if(Ch.test(t)){const e=Ch.exec(t)[1],r=e==null?void 0:e.substring(0,e.indexOf(":"));if(r)return"arbitrary.."+r}},fb=t=>{const{theme:e,prefix:r}=t,o={nextPart:new Map,validators:[]};return gb(Object.entries(t.classGroups),r).forEach(([i,l])=>{vc(l,o,i,e)}),o},vc=(t,e,r,o)=>{t.forEach(s=>{if(typeof s=="string"){const i=s===""?e:Th(e,s);i.classGroupId=r;return}if(typeof s=="function"){if(mb(s)){vc(s(o),e,r,o);return}e.validators.push({validator:s,classGroupId:r});return}Object.entries(s).forEach(([i,l])=>{vc(l,Th(e,i),r,o)})})},Th=(t,e)=>{let r=t;return e.split(Dd).forEach(o=>{r.nextPart.has(o)||r.nextPart.set(o,{nextPart:new Map,validators:[]}),r=r.nextPart.get(o)}),r},mb=t=>t.isThemeGetter,gb=(t,e)=>e?t.map(([r,o])=>{const s=o.map(i=>typeof i=="string"?e+i:typeof i=="object"?Object.fromEntries(Object.entries(i).map(([l,a])=>[e+l,a])):i);return[r,s]}):t,xb=t=>{if(t<1)return{get:()=>{},set:()=>{}};let e=0,r=new Map,o=new Map;const s=(i,l)=>{r.set(i,l),e++,e>t&&(e=0,o=r,r=new Map)};return{get(i){let l=r.get(i);if(l!==void 0)return l;if((l=o.get(i))!==void 0)return s(i,l),l},set(i,l){r.has(i)?r.set(i,l):s(i,l)}}},Kg="!",vb=t=>{const{separator:e,experimentalParseClassName:r}=t,o=e.length===1,s=e[0],i=e.length,l=a=>{const c=[];let d=0,u=0,h;for(let w=0;w<a.length;w++){let m=a[w];if(d===0){if(m===s&&(o||a.slice(w,w+i)===e)){c.push(a.slice(u,w)),u=w+i;continue}if(m==="/"){h=w;continue}}m==="["?d++:m==="]"&&d--}const g=c.length===0?a:a.substring(u),p=g.startsWith(Kg),j=p?g.substring(1):g,y=h&&h>u?h-u:void 0;return{modifiers:c,hasImportantModifier:p,baseClassName:j,maybePostfixModifierPosition:y}};return r?a=>r({className:a,parseClassName:l}):l},yb=t=>{if(t.length<=1)return t;const e=[];let r=[];return t.forEach(o=>{o[0]==="["?(e.push(...r.sort(),o),r=[]):r.push(o)}),e.push(...r.sort()),e},jb=t=>({cache:xb(t.cacheSize),parseClassName:vb(t),...hb(t)}),wb=/\s+/,bb=(t,e)=>{const{parseClassName:r,getClassGroupId:o,getConflictingClassGroupIds:s}=e,i=[],l=t.trim().split(wb);let a="";for(let c=l.length-1;c>=0;c-=1){const d=l[c],{modifiers:u,hasImportantModifier:h,baseClassName:g,maybePostfixModifierPosition:p}=r(d);let j=!!p,y=o(j?g.substring(0,p):g);if(!y){if(!j){a=d+(a.length>0?" "+a:a);continue}if(y=o(g),!y){a=d+(a.length>0?" "+a:a);continue}j=!1}const w=yb(u).join(":"),m=h?w+Kg:w,f=m+y;if(i.includes(f))continue;i.push(f);const x=s(y,j);for(let b=0;b<x.length;++b){const k=x[b];i.push(m+k)}a=d+(a.length>0?" "+a:a)}return a};function kb(){let t=0,e,r,o="";for(;t<arguments.length;)(e=arguments[t++])&&(r=Xg(e))&&(o&&(o+=" "),o+=r);return o}const Xg=t=>{if(typeof t=="string")return t;let e,r="";for(let o=0;o<t.length;o++)t[o]&&(e=Xg(t[o]))&&(r&&(r+=" "),r+=e);return r};function Sb(t,...e){let r,o,s,i=l;function l(c){const d=e.reduce((u,h)=>h(u),t());return r=jb(d),o=r.cache.get,s=r.cache.set,i=a,a(c)}function a(c){const d=o(c);if(d)return d;const u=bb(c,r);return s(c,u),u}return function(){return i(kb.apply(null,arguments))}}const se=t=>{const e=r=>r[t]||[];return e.isThemeGetter=!0,e},Yg=/^\[(?:([a-z-]+):)?(.+)\]$/i,Cb=/^\d+\/\d+$/,Tb=new Set(["px","full","screen"]),Nb=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Pb=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Eb=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,Ib=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Ab=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Vt=t=>Zr(t)||Tb.has(t)||Cb.test(t),xn=t=>To(t,"length",Bb),Zr=t=>!!t&&!Number.isNaN(Number(t)),ha=t=>To(t,"number",Zr),zo=t=>!!t&&Number.isInteger(Number(t)),Rb=t=>t.endsWith("%")&&Zr(t.slice(0,-1)),J=t=>Yg.test(t),vn=t=>Nb.test(t),Mb=new Set(["length","size","percentage"]),_b=t=>To(t,Mb,Zg),Ob=t=>To(t,"position",Zg),Lb=new Set(["image","url"]),Db=t=>To(t,Lb,zb),Fb=t=>To(t,"",Wb),$o=()=>!0,To=(t,e,r)=>{const o=Yg.exec(t);return o?o[1]?typeof e=="string"?o[1]===e:e.has(o[1]):r(o[2]):!1},Bb=t=>Pb.test(t)&&!Eb.test(t),Zg=()=>!1,Wb=t=>Ib.test(t),zb=t=>Ab.test(t),$b=()=>{const t=se("colors"),e=se("spacing"),r=se("blur"),o=se("brightness"),s=se("borderColor"),i=se("borderRadius"),l=se("borderSpacing"),a=se("borderWidth"),c=se("contrast"),d=se("grayscale"),u=se("hueRotate"),h=se("invert"),g=se("gap"),p=se("gradientColorStops"),j=se("gradientColorStopPositions"),y=se("inset"),w=se("margin"),m=se("opacity"),f=se("padding"),x=se("saturate"),b=se("scale"),k=se("sepia"),S=se("skew"),C=se("space"),E=se("translate"),M=()=>["auto","contain","none"],I=()=>["auto","hidden","clip","visible","scroll"],W=()=>["auto",J,e],_=()=>[J,e],$=()=>["",Vt,xn],z=()=>["auto",Zr,J],G=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],O=()=>["solid","dashed","dotted","double","none"],U=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],N=()=>["start","end","center","between","around","evenly","stretch"],P=()=>["","0",J],A=()=>["auto","avoid","all","avoid-page","page","left","right","column"],F=()=>[Zr,J];return{cacheSize:500,separator:":",theme:{colors:[$o],spacing:[Vt,xn],blur:["none","",vn,J],brightness:F(),borderColor:[t],borderRadius:["none","","full",vn,J],borderSpacing:_(),borderWidth:$(),contrast:F(),grayscale:P(),hueRotate:F(),invert:P(),gap:_(),gradientColorStops:[t],gradientColorStopPositions:[Rb,xn],inset:W(),margin:W(),opacity:F(),padding:_(),saturate:F(),scale:F(),sepia:P(),skew:F(),space:_(),translate:_()},classGroups:{aspect:[{aspect:["auto","square","video",J]}],container:["container"],columns:[{columns:[vn]}],"break-after":[{"break-after":A()}],"break-before":[{"break-before":A()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...G(),J]}],overflow:[{overflow:I()}],"overflow-x":[{"overflow-x":I()}],"overflow-y":[{"overflow-y":I()}],overscroll:[{overscroll:M()}],"overscroll-x":[{"overscroll-x":M()}],"overscroll-y":[{"overscroll-y":M()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[y]}],"inset-x":[{"inset-x":[y]}],"inset-y":[{"inset-y":[y]}],start:[{start:[y]}],end:[{end:[y]}],top:[{top:[y]}],right:[{right:[y]}],bottom:[{bottom:[y]}],left:[{left:[y]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",zo,J]}],basis:[{basis:W()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",J]}],grow:[{grow:P()}],shrink:[{shrink:P()}],order:[{order:["first","last","none",zo,J]}],"grid-cols":[{"grid-cols":[$o]}],"col-start-end":[{col:["auto",{span:["full",zo,J]},J]}],"col-start":[{"col-start":z()}],"col-end":[{"col-end":z()}],"grid-rows":[{"grid-rows":[$o]}],"row-start-end":[{row:["auto",{span:[zo,J]},J]}],"row-start":[{"row-start":z()}],"row-end":[{"row-end":z()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",J]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",J]}],gap:[{gap:[g]}],"gap-x":[{"gap-x":[g]}],"gap-y":[{"gap-y":[g]}],"justify-content":[{justify:["normal",...N()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...N(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...N(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[f]}],px:[{px:[f]}],py:[{py:[f]}],ps:[{ps:[f]}],pe:[{pe:[f]}],pt:[{pt:[f]}],pr:[{pr:[f]}],pb:[{pb:[f]}],pl:[{pl:[f]}],m:[{m:[w]}],mx:[{mx:[w]}],my:[{my:[w]}],ms:[{ms:[w]}],me:[{me:[w]}],mt:[{mt:[w]}],mr:[{mr:[w]}],mb:[{mb:[w]}],ml:[{ml:[w]}],"space-x":[{"space-x":[C]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[C]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",J,e]}],"min-w":[{"min-w":[J,e,"min","max","fit"]}],"max-w":[{"max-w":[J,e,"none","full","min","max","fit","prose",{screen:[vn]},vn]}],h:[{h:[J,e,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[J,e,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[J,e,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[J,e,"auto","min","max","fit"]}],"font-size":[{text:["base",vn,xn]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",ha]}],"font-family":[{font:[$o]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",J]}],"line-clamp":[{"line-clamp":["none",Zr,ha]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Vt,J]}],"list-image":[{"list-image":["none",J]}],"list-style-type":[{list:["none","disc","decimal",J]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[t]}],"placeholder-opacity":[{"placeholder-opacity":[m]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[t]}],"text-opacity":[{"text-opacity":[m]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...O(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",Vt,xn]}],"underline-offset":[{"underline-offset":["auto",Vt,J]}],"text-decoration-color":[{decoration:[t]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:_()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",J]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",J]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[m]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...G(),Ob]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",_b]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Db]}],"bg-color":[{bg:[t]}],"gradient-from-pos":[{from:[j]}],"gradient-via-pos":[{via:[j]}],"gradient-to-pos":[{to:[j]}],"gradient-from":[{from:[p]}],"gradient-via":[{via:[p]}],"gradient-to":[{to:[p]}],rounded:[{rounded:[i]}],"rounded-s":[{"rounded-s":[i]}],"rounded-e":[{"rounded-e":[i]}],"rounded-t":[{"rounded-t":[i]}],"rounded-r":[{"rounded-r":[i]}],"rounded-b":[{"rounded-b":[i]}],"rounded-l":[{"rounded-l":[i]}],"rounded-ss":[{"rounded-ss":[i]}],"rounded-se":[{"rounded-se":[i]}],"rounded-ee":[{"rounded-ee":[i]}],"rounded-es":[{"rounded-es":[i]}],"rounded-tl":[{"rounded-tl":[i]}],"rounded-tr":[{"rounded-tr":[i]}],"rounded-br":[{"rounded-br":[i]}],"rounded-bl":[{"rounded-bl":[i]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[m]}],"border-style":[{border:[...O(),"hidden"]}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[m]}],"divide-style":[{divide:O()}],"border-color":[{border:[s]}],"border-color-x":[{"border-x":[s]}],"border-color-y":[{"border-y":[s]}],"border-color-s":[{"border-s":[s]}],"border-color-e":[{"border-e":[s]}],"border-color-t":[{"border-t":[s]}],"border-color-r":[{"border-r":[s]}],"border-color-b":[{"border-b":[s]}],"border-color-l":[{"border-l":[s]}],"divide-color":[{divide:[s]}],"outline-style":[{outline:["",...O()]}],"outline-offset":[{"outline-offset":[Vt,J]}],"outline-w":[{outline:[Vt,xn]}],"outline-color":[{outline:[t]}],"ring-w":[{ring:$()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[t]}],"ring-opacity":[{"ring-opacity":[m]}],"ring-offset-w":[{"ring-offset":[Vt,xn]}],"ring-offset-color":[{"ring-offset":[t]}],shadow:[{shadow:["","inner","none",vn,Fb]}],"shadow-color":[{shadow:[$o]}],opacity:[{opacity:[m]}],"mix-blend":[{"mix-blend":[...U(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":U()}],filter:[{filter:["","none"]}],blur:[{blur:[r]}],brightness:[{brightness:[o]}],contrast:[{contrast:[c]}],"drop-shadow":[{"drop-shadow":["","none",vn,J]}],grayscale:[{grayscale:[d]}],"hue-rotate":[{"hue-rotate":[u]}],invert:[{invert:[h]}],saturate:[{saturate:[x]}],sepia:[{sepia:[k]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[r]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[c]}],"backdrop-grayscale":[{"backdrop-grayscale":[d]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[u]}],"backdrop-invert":[{"backdrop-invert":[h]}],"backdrop-opacity":[{"backdrop-opacity":[m]}],"backdrop-saturate":[{"backdrop-saturate":[x]}],"backdrop-sepia":[{"backdrop-sepia":[k]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[l]}],"border-spacing-x":[{"border-spacing-x":[l]}],"border-spacing-y":[{"border-spacing-y":[l]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",J]}],duration:[{duration:F()}],ease:[{ease:["linear","in","out","in-out",J]}],delay:[{delay:F()}],animate:[{animate:["none","spin","ping","pulse","bounce",J]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[b]}],"scale-x":[{"scale-x":[b]}],"scale-y":[{"scale-y":[b]}],rotate:[{rotate:[zo,J]}],"translate-x":[{"translate-x":[E]}],"translate-y":[{"translate-y":[E]}],"skew-x":[{"skew-x":[S]}],"skew-y":[{"skew-y":[S]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",J]}],accent:[{accent:["auto",t]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",J]}],"caret-color":[{caret:[t]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":_()}],"scroll-mx":[{"scroll-mx":_()}],"scroll-my":[{"scroll-my":_()}],"scroll-ms":[{"scroll-ms":_()}],"scroll-me":[{"scroll-me":_()}],"scroll-mt":[{"scroll-mt":_()}],"scroll-mr":[{"scroll-mr":_()}],"scroll-mb":[{"scroll-mb":_()}],"scroll-ml":[{"scroll-ml":_()}],"scroll-p":[{"scroll-p":_()}],"scroll-px":[{"scroll-px":_()}],"scroll-py":[{"scroll-py":_()}],"scroll-ps":[{"scroll-ps":_()}],"scroll-pe":[{"scroll-pe":_()}],"scroll-pt":[{"scroll-pt":_()}],"scroll-pr":[{"scroll-pr":_()}],"scroll-pb":[{"scroll-pb":_()}],"scroll-pl":[{"scroll-pl":_()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",J]}],fill:[{fill:[t,"none"]}],"stroke-w":[{stroke:[Vt,xn,ha]}],stroke:[{stroke:[t,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},Hb=Sb($b);function Ue(...t){return Hb(Hg(t))}const Ub=Ow,ex=v.forwardRef(({className:t,...e},r)=>n.jsx(Mg,{ref:r,className:Ue("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",t),...e}));ex.displayName=Mg.displayName;const Vb=Ld("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),tx=v.forwardRef(({className:t,variant:e,...r},o)=>n.jsx(_g,{ref:o,className:Ue(Vb({variant:e}),t),...r}));tx.displayName=_g.displayName;const qb=v.forwardRef(({className:t,...e},r)=>n.jsx(Dg,{ref:r,className:Ue("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",t),...e}));qb.displayName=Dg.displayName;const nx=v.forwardRef(({className:t,...e},r)=>n.jsx(_d,{ref:r,className:Ue("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",t),"toast-close":"",...e,children:n.jsx(db,{className:"h-4 w-4"})}));nx.displayName=_d.displayName;const rx=v.forwardRef(({className:t,...e},r)=>n.jsx(Og,{ref:r,className:Ue("text-sm font-semibold",t),...e}));rx.displayName=Og.displayName;const ox=v.forwardRef(({className:t,...e},r)=>n.jsx(Lg,{ref:r,className:Ue("text-sm opacity-90",t),...e}));ox.displayName=Lg.displayName;function Jb(){const{toasts:t}=Qj();return n.jsxs(Ub,{children:[t.map(function({id:e,title:r,description:o,action:s,...i}){return n.jsxs(tx,{...i,children:[n.jsxs("div",{className:"grid gap-1",children:[r&&n.jsx(rx,{children:r}),o&&n.jsx(ox,{children:o})]}),s,n.jsx(nx,{})]},e)}),n.jsx(ex,{})]})}var Nh=["light","dark"],Gb="(prefers-color-scheme: dark)",Qb=v.createContext(void 0),Kb={setTheme:t=>{},themes:[]},Xb=()=>{var t;return(t=v.useContext(Qb))!=null?t:Kb};v.memo(({forcedTheme:t,storageKey:e,attribute:r,enableSystem:o,enableColorScheme:s,defaultTheme:i,value:l,attrs:a,nonce:c})=>{let d=i==="system",u=r==="class"?`var d=document.documentElement,c=d.classList;${`c.remove(${a.map(j=>`'${j}'`).join(",")})`};`:`var d=document.documentElement,n='${r}',s='setAttribute';`,h=s?Nh.includes(i)&&i?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${i}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",g=(j,y=!1,w=!0)=>{let m=l?l[j]:j,f=y?j+"|| ''":`'${m}'`,x="";return s&&w&&!y&&Nh.includes(j)&&(x+=`d.style.colorScheme = '${j}';`),r==="class"?y||m?x+=`c.add(${f})`:x+="null":m&&(x+=`d[s](n,${f})`),x},p=t?`!function(){${u}${g(t)}}()`:o?`!function(){try{${u}var e=localStorage.getItem('${e}');if('system'===e||(!e&&${d})){var t='${Gb}',m=window.matchMedia(t);if(m.media!==t||m.matches){${g("dark")}}else{${g("light")}}}else if(e){${l?`var x=${JSON.stringify(l)};`:""}${g(l?"x[e]":"e",!0)}}${d?"":"else{"+g(i,!1,!1)+"}"}${h}}catch(e){}}()`:`!function(){try{${u}var e=localStorage.getItem('${e}');if(e){${l?`var x=${JSON.stringify(l)};`:""}${g(l?"x[e]":"e",!0)}}else{${g(i,!1,!1)};}${h}}catch(t){}}();`;return v.createElement("script",{nonce:c,dangerouslySetInnerHTML:{__html:p}})});var Yb=t=>{switch(t){case"success":return t0;case"info":return r0;case"warning":return n0;case"error":return o0;default:return null}},Zb=Array(12).fill(0),e0=({visible:t,className:e})=>L.createElement("div",{className:["sonner-loading-wrapper",e].filter(Boolean).join(" "),"data-visible":t},L.createElement("div",{className:"sonner-spinner"},Zb.map((r,o)=>L.createElement("div",{className:"sonner-loading-bar",key:`spinner-bar-${o}`})))),t0=L.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},L.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})),n0=L.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",height:"20",width:"20"},L.createElement("path",{fillRule:"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"})),r0=L.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},L.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",clipRule:"evenodd"})),o0=L.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},L.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})),s0=L.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},L.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),L.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"})),i0=()=>{let[t,e]=L.useState(document.hidden);return L.useEffect(()=>{let r=()=>{e(document.hidden)};return document.addEventListener("visibilitychange",r),()=>window.removeEventListener("visibilitychange",r)},[]),t},yc=1,l0=class{constructor(){this.subscribe=t=>(this.subscribers.push(t),()=>{let e=this.subscribers.indexOf(t);this.subscribers.splice(e,1)}),this.publish=t=>{this.subscribers.forEach(e=>e(t))},this.addToast=t=>{this.publish(t),this.toasts=[...this.toasts,t]},this.create=t=>{var e;let{message:r,...o}=t,s=typeof(t==null?void 0:t.id)=="number"||((e=t.id)==null?void 0:e.length)>0?t.id:yc++,i=this.toasts.find(a=>a.id===s),l=t.dismissible===void 0?!0:t.dismissible;return this.dismissedToasts.has(s)&&this.dismissedToasts.delete(s),i?this.toasts=this.toasts.map(a=>a.id===s?(this.publish({...a,...t,id:s,title:r}),{...a,...t,id:s,dismissible:l,title:r}):a):this.addToast({title:r,...o,dismissible:l,id:s}),s},this.dismiss=t=>(this.dismissedToasts.add(t),t||this.toasts.forEach(e=>{this.subscribers.forEach(r=>r({id:e.id,dismiss:!0}))}),this.subscribers.forEach(e=>e({id:t,dismiss:!0})),t),this.message=(t,e)=>this.create({...e,message:t}),this.error=(t,e)=>this.create({...e,message:t,type:"error"}),this.success=(t,e)=>this.create({...e,type:"success",message:t}),this.info=(t,e)=>this.create({...e,type:"info",message:t}),this.warning=(t,e)=>this.create({...e,type:"warning",message:t}),this.loading=(t,e)=>this.create({...e,type:"loading",message:t}),this.promise=(t,e)=>{if(!e)return;let r;e.loading!==void 0&&(r=this.create({...e,promise:t,type:"loading",message:e.loading,description:typeof e.description!="function"?e.description:void 0}));let o=t instanceof Promise?t:t(),s=r!==void 0,i,l=o.then(async c=>{if(i=["resolve",c],L.isValidElement(c))s=!1,this.create({id:r,type:"default",message:c});else if(c0(c)&&!c.ok){s=!1;let d=typeof e.error=="function"?await e.error(`HTTP error! status: ${c.status}`):e.error,u=typeof e.description=="function"?await e.description(`HTTP error! status: ${c.status}`):e.description;this.create({id:r,type:"error",message:d,description:u})}else if(e.success!==void 0){s=!1;let d=typeof e.success=="function"?await e.success(c):e.success,u=typeof e.description=="function"?await e.description(c):e.description;this.create({id:r,type:"success",message:d,description:u})}}).catch(async c=>{if(i=["reject",c],e.error!==void 0){s=!1;let d=typeof e.error=="function"?await e.error(c):e.error,u=typeof e.description=="function"?await e.description(c):e.description;this.create({id:r,type:"error",message:d,description:u})}}).finally(()=>{var c;s&&(this.dismiss(r),r=void 0),(c=e.finally)==null||c.call(e)}),a=()=>new Promise((c,d)=>l.then(()=>i[0]==="reject"?d(i[1]):c(i[1])).catch(d));return typeof r!="string"&&typeof r!="number"?{unwrap:a}:Object.assign(r,{unwrap:a})},this.custom=(t,e)=>{let r=(e==null?void 0:e.id)||yc++;return this.create({jsx:t(r),id:r,...e}),r},this.getActiveToasts=()=>this.toasts.filter(t=>!this.dismissedToasts.has(t.id)),this.subscribers=[],this.toasts=[],this.dismissedToasts=new Set}},Ve=new l0,a0=(t,e)=>{let r=(e==null?void 0:e.id)||yc++;return Ve.addToast({title:t,...e,id:r}),r},c0=t=>t&&typeof t=="object"&&"ok"in t&&typeof t.ok=="boolean"&&"status"in t&&typeof t.status=="number",d0=a0,u0=()=>Ve.toasts,h0=()=>Ve.getActiveToasts();Object.assign(d0,{success:Ve.success,info:Ve.info,warning:Ve.warning,error:Ve.error,custom:Ve.custom,message:Ve.message,promise:Ve.promise,dismiss:Ve.dismiss,loading:Ve.loading},{getHistory:u0,getToasts:h0});function p0(t,{insertAt:e}={}){if(typeof document>"u")return;let r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",e==="top"&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=t:o.appendChild(document.createTextNode(t))}p0(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);function ci(t){return t.label!==void 0}var f0=3,m0="32px",g0="16px",Ph=4e3,x0=356,v0=14,y0=20,j0=200;function St(...t){return t.filter(Boolean).join(" ")}function w0(t){let[e,r]=t.split("-"),o=[];return e&&o.push(e),r&&o.push(r),o}var b0=t=>{var e,r,o,s,i,l,a,c,d,u,h;let{invert:g,toast:p,unstyled:j,interacting:y,setHeights:w,visibleToasts:m,heights:f,index:x,toasts:b,expanded:k,removeToast:S,defaultRichColors:C,closeButton:E,style:M,cancelButtonStyle:I,actionButtonStyle:W,className:_="",descriptionClassName:$="",duration:z,position:G,gap:O,loadingIcon:U,expandByDefault:N,classNames:P,icons:A,closeButtonAriaLabel:F="Close toast",pauseWhenPageIsHidden:B}=t,[V,Q]=L.useState(null),[oe,ye]=L.useState(null),[Z,Io]=L.useState(!1),[un,Xn]=L.useState(!1),[hn,Pr]=L.useState(!1),[Ao,Bs]=L.useState(!1),[Ws,Er]=L.useState(!1),[zs,Ro]=L.useState(0),[_l,$s]=L.useState(0),Yn=L.useRef(p.duration||z||Ph),Zn=L.useRef(null),er=L.useRef(null),av=x===0,cv=x+1<=m,ct=p.type,Ir=p.dismissible!==!1,dv=p.className||"",uv=p.descriptionClassName||"",Hs=L.useMemo(()=>f.findIndex(q=>q.toastId===p.id)||0,[f,p.id]),hv=L.useMemo(()=>{var q;return(q=p.closeButton)!=null?q:E},[p.closeButton,E]),Xd=L.useMemo(()=>p.duration||z||Ph,[p.duration,z]),Ol=L.useRef(0),Ar=L.useRef(0),Yd=L.useRef(0),Rr=L.useRef(null),[pv,fv]=G.split("-"),Zd=L.useMemo(()=>f.reduce((q,te,ae)=>ae>=Hs?q:q+te.height,0),[f,Hs]),eu=i0(),mv=p.invert||g,Ll=ct==="loading";Ar.current=L.useMemo(()=>Hs*O+Zd,[Hs,Zd]),L.useEffect(()=>{Yn.current=Xd},[Xd]),L.useEffect(()=>{Io(!0)},[]),L.useEffect(()=>{let q=er.current;if(q){let te=q.getBoundingClientRect().height;return $s(te),w(ae=>[{toastId:p.id,height:te,position:p.position},...ae]),()=>w(ae=>ae.filter(jt=>jt.toastId!==p.id))}},[w,p.id]),L.useLayoutEffect(()=>{if(!Z)return;let q=er.current,te=q.style.height;q.style.height="auto";let ae=q.getBoundingClientRect().height;q.style.height=te,$s(ae),w(jt=>jt.find(wt=>wt.toastId===p.id)?jt.map(wt=>wt.toastId===p.id?{...wt,height:ae}:wt):[{toastId:p.id,height:ae,position:p.position},...jt])},[Z,p.title,p.description,w,p.id]);let pn=L.useCallback(()=>{Xn(!0),Ro(Ar.current),w(q=>q.filter(te=>te.toastId!==p.id)),setTimeout(()=>{S(p)},j0)},[p,S,w,Ar]);L.useEffect(()=>{if(p.promise&&ct==="loading"||p.duration===1/0||p.type==="loading")return;let q;return k||y||B&&eu?(()=>{if(Yd.current<Ol.current){let te=new Date().getTime()-Ol.current;Yn.current=Yn.current-te}Yd.current=new Date().getTime()})():Yn.current!==1/0&&(Ol.current=new Date().getTime(),q=setTimeout(()=>{var te;(te=p.onAutoClose)==null||te.call(p,p),pn()},Yn.current)),()=>clearTimeout(q)},[k,y,p,ct,B,eu,pn]),L.useEffect(()=>{p.delete&&pn()},[pn,p.delete]);function gv(){var q,te,ae;return A!=null&&A.loading?L.createElement("div",{className:St(P==null?void 0:P.loader,(q=p==null?void 0:p.classNames)==null?void 0:q.loader,"sonner-loader"),"data-visible":ct==="loading"},A.loading):U?L.createElement("div",{className:St(P==null?void 0:P.loader,(te=p==null?void 0:p.classNames)==null?void 0:te.loader,"sonner-loader"),"data-visible":ct==="loading"},U):L.createElement(e0,{className:St(P==null?void 0:P.loader,(ae=p==null?void 0:p.classNames)==null?void 0:ae.loader),visible:ct==="loading"})}return L.createElement("li",{tabIndex:0,ref:er,className:St(_,dv,P==null?void 0:P.toast,(e=p==null?void 0:p.classNames)==null?void 0:e.toast,P==null?void 0:P.default,P==null?void 0:P[ct],(r=p==null?void 0:p.classNames)==null?void 0:r[ct]),"data-sonner-toast":"","data-rich-colors":(o=p.richColors)!=null?o:C,"data-styled":!(p.jsx||p.unstyled||j),"data-mounted":Z,"data-promise":!!p.promise,"data-swiped":Ws,"data-removed":un,"data-visible":cv,"data-y-position":pv,"data-x-position":fv,"data-index":x,"data-front":av,"data-swiping":hn,"data-dismissible":Ir,"data-type":ct,"data-invert":mv,"data-swipe-out":Ao,"data-swipe-direction":oe,"data-expanded":!!(k||N&&Z),style:{"--index":x,"--toasts-before":x,"--z-index":b.length-x,"--offset":`${un?zs:Ar.current}px`,"--initial-height":N?"auto":`${_l}px`,...M,...p.style},onDragEnd:()=>{Pr(!1),Q(null),Rr.current=null},onPointerDown:q=>{Ll||!Ir||(Zn.current=new Date,Ro(Ar.current),q.target.setPointerCapture(q.pointerId),q.target.tagName!=="BUTTON"&&(Pr(!0),Rr.current={x:q.clientX,y:q.clientY}))},onPointerUp:()=>{var q,te,ae,jt;if(Ao||!Ir)return;Rr.current=null;let wt=Number(((q=er.current)==null?void 0:q.style.getPropertyValue("--swipe-amount-x").replace("px",""))||0),fn=Number(((te=er.current)==null?void 0:te.style.getPropertyValue("--swipe-amount-y").replace("px",""))||0),tr=new Date().getTime()-((ae=Zn.current)==null?void 0:ae.getTime()),bt=V==="x"?wt:fn,mn=Math.abs(bt)/tr;if(Math.abs(bt)>=y0||mn>.11){Ro(Ar.current),(jt=p.onDismiss)==null||jt.call(p,p),ye(V==="x"?wt>0?"right":"left":fn>0?"down":"up"),pn(),Bs(!0),Er(!1);return}Pr(!1),Q(null)},onPointerMove:q=>{var te,ae,jt,wt;if(!Rr.current||!Ir||((te=window.getSelection())==null?void 0:te.toString().length)>0)return;let fn=q.clientY-Rr.current.y,tr=q.clientX-Rr.current.x,bt=(ae=t.swipeDirections)!=null?ae:w0(G);!V&&(Math.abs(tr)>1||Math.abs(fn)>1)&&Q(Math.abs(tr)>Math.abs(fn)?"x":"y");let mn={x:0,y:0};V==="y"?(bt.includes("top")||bt.includes("bottom"))&&(bt.includes("top")&&fn<0||bt.includes("bottom")&&fn>0)&&(mn.y=fn):V==="x"&&(bt.includes("left")||bt.includes("right"))&&(bt.includes("left")&&tr<0||bt.includes("right")&&tr>0)&&(mn.x=tr),(Math.abs(mn.x)>0||Math.abs(mn.y)>0)&&Er(!0),(jt=er.current)==null||jt.style.setProperty("--swipe-amount-x",`${mn.x}px`),(wt=er.current)==null||wt.style.setProperty("--swipe-amount-y",`${mn.y}px`)}},hv&&!p.jsx?L.createElement("button",{"aria-label":F,"data-disabled":Ll,"data-close-button":!0,onClick:Ll||!Ir?()=>{}:()=>{var q;pn(),(q=p.onDismiss)==null||q.call(p,p)},className:St(P==null?void 0:P.closeButton,(s=p==null?void 0:p.classNames)==null?void 0:s.closeButton)},(i=A==null?void 0:A.close)!=null?i:s0):null,p.jsx||v.isValidElement(p.title)?p.jsx?p.jsx:typeof p.title=="function"?p.title():p.title:L.createElement(L.Fragment,null,ct||p.icon||p.promise?L.createElement("div",{"data-icon":"",className:St(P==null?void 0:P.icon,(l=p==null?void 0:p.classNames)==null?void 0:l.icon)},p.promise||p.type==="loading"&&!p.icon?p.icon||gv():null,p.type!=="loading"?p.icon||(A==null?void 0:A[ct])||Yb(ct):null):null,L.createElement("div",{"data-content":"",className:St(P==null?void 0:P.content,(a=p==null?void 0:p.classNames)==null?void 0:a.content)},L.createElement("div",{"data-title":"",className:St(P==null?void 0:P.title,(c=p==null?void 0:p.classNames)==null?void 0:c.title)},typeof p.title=="function"?p.title():p.title),p.description?L.createElement("div",{"data-description":"",className:St($,uv,P==null?void 0:P.description,(d=p==null?void 0:p.classNames)==null?void 0:d.description)},typeof p.description=="function"?p.description():p.description):null),v.isValidElement(p.cancel)?p.cancel:p.cancel&&ci(p.cancel)?L.createElement("button",{"data-button":!0,"data-cancel":!0,style:p.cancelButtonStyle||I,onClick:q=>{var te,ae;ci(p.cancel)&&Ir&&((ae=(te=p.cancel).onClick)==null||ae.call(te,q),pn())},className:St(P==null?void 0:P.cancelButton,(u=p==null?void 0:p.classNames)==null?void 0:u.cancelButton)},p.cancel.label):null,v.isValidElement(p.action)?p.action:p.action&&ci(p.action)?L.createElement("button",{"data-button":!0,"data-action":!0,style:p.actionButtonStyle||W,onClick:q=>{var te,ae;ci(p.action)&&((ae=(te=p.action).onClick)==null||ae.call(te,q),!q.defaultPrevented&&pn())},className:St(P==null?void 0:P.actionButton,(h=p==null?void 0:p.classNames)==null?void 0:h.actionButton)},p.action.label):null))};function Eh(){if(typeof window>"u"||typeof document>"u")return"ltr";let t=document.documentElement.getAttribute("dir");return t==="auto"||!t?window.getComputedStyle(document.documentElement).direction:t}function k0(t,e){let r={};return[t,e].forEach((o,s)=>{let i=s===1,l=i?"--mobile-offset":"--offset",a=i?g0:m0;function c(d){["top","right","bottom","left"].forEach(u=>{r[`${l}-${u}`]=typeof d=="number"?`${d}px`:d})}typeof o=="number"||typeof o=="string"?c(o):typeof o=="object"?["top","right","bottom","left"].forEach(d=>{o[d]===void 0?r[`${l}-${d}`]=a:r[`${l}-${d}`]=typeof o[d]=="number"?`${o[d]}px`:o[d]}):c(a)}),r}var S0=v.forwardRef(function(t,e){let{invert:r,position:o="bottom-right",hotkey:s=["altKey","KeyT"],expand:i,closeButton:l,className:a,offset:c,mobileOffset:d,theme:u="light",richColors:h,duration:g,style:p,visibleToasts:j=f0,toastOptions:y,dir:w=Eh(),gap:m=v0,loadingIcon:f,icons:x,containerAriaLabel:b="Notifications",pauseWhenPageIsHidden:k}=t,[S,C]=L.useState([]),E=L.useMemo(()=>Array.from(new Set([o].concat(S.filter(B=>B.position).map(B=>B.position)))),[S,o]),[M,I]=L.useState([]),[W,_]=L.useState(!1),[$,z]=L.useState(!1),[G,O]=L.useState(u!=="system"?u:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),U=L.useRef(null),N=s.join("+").replace(/Key/g,"").replace(/Digit/g,""),P=L.useRef(null),A=L.useRef(!1),F=L.useCallback(B=>{C(V=>{var Q;return(Q=V.find(oe=>oe.id===B.id))!=null&&Q.delete||Ve.dismiss(B.id),V.filter(({id:oe})=>oe!==B.id)})},[]);return L.useEffect(()=>Ve.subscribe(B=>{if(B.dismiss){C(V=>V.map(Q=>Q.id===B.id?{...Q,delete:!0}:Q));return}setTimeout(()=>{Hj.flushSync(()=>{C(V=>{let Q=V.findIndex(oe=>oe.id===B.id);return Q!==-1?[...V.slice(0,Q),{...V[Q],...B},...V.slice(Q+1)]:[B,...V]})})})}),[]),L.useEffect(()=>{if(u!=="system"){O(u);return}if(u==="system"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?O("dark"):O("light")),typeof window>"u")return;let B=window.matchMedia("(prefers-color-scheme: dark)");try{B.addEventListener("change",({matches:V})=>{O(V?"dark":"light")})}catch{B.addListener(({matches:Q})=>{try{O(Q?"dark":"light")}catch(oe){console.error(oe)}})}},[u]),L.useEffect(()=>{S.length<=1&&_(!1)},[S]),L.useEffect(()=>{let B=V=>{var Q,oe;s.every(ye=>V[ye]||V.code===ye)&&(_(!0),(Q=U.current)==null||Q.focus()),V.code==="Escape"&&(document.activeElement===U.current||(oe=U.current)!=null&&oe.contains(document.activeElement))&&_(!1)};return document.addEventListener("keydown",B),()=>document.removeEventListener("keydown",B)},[s]),L.useEffect(()=>{if(U.current)return()=>{P.current&&(P.current.focus({preventScroll:!0}),P.current=null,A.current=!1)}},[U.current]),L.createElement("section",{ref:e,"aria-label":`${b} ${N}`,tabIndex:-1,"aria-live":"polite","aria-relevant":"additions text","aria-atomic":"false",suppressHydrationWarning:!0},E.map((B,V)=>{var Q;let[oe,ye]=B.split("-");return S.length?L.createElement("ol",{key:B,dir:w==="auto"?Eh():w,tabIndex:-1,ref:U,className:a,"data-sonner-toaster":!0,"data-theme":G,"data-y-position":oe,"data-lifted":W&&S.length>1&&!i,"data-x-position":ye,style:{"--front-toast-height":`${((Q=M[0])==null?void 0:Q.height)||0}px`,"--width":`${x0}px`,"--gap":`${m}px`,...p,...k0(c,d)},onBlur:Z=>{A.current&&!Z.currentTarget.contains(Z.relatedTarget)&&(A.current=!1,P.current&&(P.current.focus({preventScroll:!0}),P.current=null))},onFocus:Z=>{Z.target instanceof HTMLElement&&Z.target.dataset.dismissible==="false"||A.current||(A.current=!0,P.current=Z.relatedTarget)},onMouseEnter:()=>_(!0),onMouseMove:()=>_(!0),onMouseLeave:()=>{$||_(!1)},onDragEnd:()=>_(!1),onPointerDown:Z=>{Z.target instanceof HTMLElement&&Z.target.dataset.dismissible==="false"||z(!0)},onPointerUp:()=>z(!1)},S.filter(Z=>!Z.position&&V===0||Z.position===B).map((Z,Io)=>{var un,Xn;return L.createElement(b0,{key:Z.id,icons:x,index:Io,toast:Z,defaultRichColors:h,duration:(un=y==null?void 0:y.duration)!=null?un:g,className:y==null?void 0:y.className,descriptionClassName:y==null?void 0:y.descriptionClassName,invert:r,visibleToasts:j,closeButton:(Xn=y==null?void 0:y.closeButton)!=null?Xn:l,interacting:$,position:B,style:y==null?void 0:y.style,unstyled:y==null?void 0:y.unstyled,classNames:y==null?void 0:y.classNames,cancelButtonStyle:y==null?void 0:y.cancelButtonStyle,actionButtonStyle:y==null?void 0:y.actionButtonStyle,removeToast:F,toasts:S.filter(hn=>hn.position==Z.position),heights:M.filter(hn=>hn.position==Z.position),setHeights:I,expandByDefault:i,gap:m,loadingIcon:f,expanded:W,pauseWhenPageIsHidden:k,swipeDirections:t.swipeDirections})})):null}))});const C0=({...t})=>{const{theme:e="system"}=Xb();return n.jsx(S0,{theme:e,className:"toaster group",toastOptions:{classNames:{toast:"group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",description:"group-[.toast]:text-muted-foreground",actionButton:"group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",cancelButton:"group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"}},...t})};var T0=Object.defineProperty,De=(t,e)=>T0(t,"name",{value:e,configurable:!0}),sx=v.createContext(null);function N0({registry:t,children:e}){return t?n.jsx(sx.Provider,{value:t,children:e}):e}De(N0,"FocusScopeBranchProvider");function P0(){const[t,e]=v.useState([]),r=v.useMemo(()=>({add:De(o=>e(s=>s.includes(o)?s:[...s,o]),"add"),remove:De(o=>e(s=>s.filter(i=>i!==o)),"remove")}),[]);return{nodes:t,registry:r}}De(P0,"useFocusScopeBranchRegistry");function ix(t){const e=v.useContext(sx);v.useEffect(()=>{if(!(!t||!e))return e.add(t),()=>e.remove(t)},[t,e])}De(ix,"useFocusScopeBranch");function E0(t,{select:e=!1}={}){const r=document.activeElement;for(const o of t)if(dx(o,{select:e}),document.activeElement!==r)return}De(E0,"focusFirst");function I0(t){const e=lx(t),r=jc(e,t),o=jc(e.reverse(),t);return[r,o]}De(I0,"getTabbableEdges");function lx(t){const e=[],o=t.ownerDocument.createTreeWalker(t,NodeFilter.SHOW_ELEMENT,{acceptNode:De(s=>{const i=s.tagName==="INPUT"&&s.type==="hidden";return s.disabled||s.hidden||i?NodeFilter.FILTER_SKIP:s.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP},"acceptNode")});for(;o.nextNode();)e.push(o.currentNode);return e}De(lx,"getTabbableCandidates");function jc(t,e){const r=typeof e.checkVisibility=="function"&&e.checkVisibility({checkVisibilityCSS:!0});for(const o of t)if(!(r?!o.checkVisibility({checkVisibilityCSS:!0}):ax(o,{upTo:e})))return o}De(jc,"findVisible");function ax(t,{upTo:e}){if(getComputedStyle(t).visibility==="hidden")return!0;for(;t;){if(e!==void 0&&t===e)return!1;if(getComputedStyle(t).display==="none")return!0;t=t.parentElement}return!1}De(ax,"isHidden");function cx(t){return t.tagName==="INPUT"&&typeof t.select=="function"}De(cx,"isSelectableInput");function dx(t,{select:e=!1}={}){if(t&&t.focus){const o=(t.ownerDocument??document).activeElement;t.focus({preventScroll:!0}),t!==o&&cx(t)&&e&&t.select()}}De(dx,"focus");function A0(){let t=[];return{add(e){const r=t[0];e!==r&&(r==null||r.pause()),t=wc(t,e),t.unshift(e)},remove(e){var r;t=wc(t,e),(r=t[0])==null||r.resume()}}}De(A0,"createFocusScopesStack");function wc(t,e){const r=[...t],o=r.indexOf(e);return o!==-1&&r.splice(o,1),r}De(wc,"arrayRemove");function R0(t){return t.filter(e=>e.tagName!=="A")}De(R0,"removeLinks");const M0=["top","right","bottom","left"],Un=Math.min,Zt=Math.max,rl=Math.round,di=Math.floor,en=t=>({x:t,y:t}),_0={left:"right",right:"left",bottom:"top",top:"bottom"};function ux(t,e,r){return Zt(t,Un(e,r))}function an(t,e){return typeof t=="function"?t(e):t}function Vn(t){return t.split("-")[0]}function No(t){return t.split("-")[1]}function Fd(t){return t==="x"?"y":"x"}function Bd(t){return t==="y"?"height":"width"}function Wt(t){const e=t[0];return e==="t"||e==="b"?"y":"x"}function Wd(t){return Fd(Wt(t))}function O0(t,e,r){r===void 0&&(r=!1);const o=No(t),s=Wd(t),i=Bd(s);let l=s==="x"?o===(r?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[i]>e.floating[i]&&(l=ol(l)),[l,ol(l)]}function L0(t){const e=ol(t);return[bc(t),e,bc(e)]}function bc(t){return t.includes("start")?t.replace("start","end"):t.replace("end","start")}const Ih=["left","right"],Ah=["right","left"],D0=["top","bottom"],F0=["bottom","top"];function B0(t,e,r){switch(t){case"top":case"bottom":return r?e?Ah:Ih:e?Ih:Ah;case"left":case"right":return e?D0:F0;default:return[]}}function W0(t,e,r,o){const s=No(t);let i=B0(Vn(t),r==="start",o);return s&&(i=i.map(l=>l+"-"+s),e&&(i=i.concat(i.map(bc)))),i}function ol(t){const e=Vn(t);return _0[e]+t.slice(e.length)}function z0(t){var e,r,o,s;return{top:(e=t.top)!=null?e:0,right:(r=t.right)!=null?r:0,bottom:(o=t.bottom)!=null?o:0,left:(s=t.left)!=null?s:0}}function hx(t){return typeof t!="number"?z0(t):{top:t,right:t,bottom:t,left:t}}function sl(t){const{x:e,y:r,width:o,height:s}=t;return{width:o,height:s,top:r,left:e,right:e+o,bottom:r+s,x:e,y:r}}function Rh(t,e,r){let{reference:o,floating:s}=t;const i=Wt(e),l=Wd(e),a=Bd(l),c=Vn(e),d=i==="y",u=o.x+o.width/2-s.width/2,h=o.y+o.height/2-s.height/2,g=o[a]/2-s[a]/2;let p;switch(c){case"top":p={x:u,y:o.y-s.height};break;case"bottom":p={x:u,y:o.y+o.height};break;case"right":p={x:o.x+o.width,y:h};break;case"left":p={x:o.x-s.width,y:h};break;default:p={x:o.x,y:o.y}}const j=No(e);return j&&(p[l]+=g*(j==="end"?1:-1)*(r&&d?-1:1)),p}async function $0(t,e){var r;e===void 0&&(e={});const{x:o,y:s,platform:i,rects:l,elements:a,strategy:c}=t,{boundary:d="clippingAncestors",rootBoundary:u="viewport",elementContext:h="floating",altBoundary:g=!1,padding:p=0}=an(e,t),j=hx(p),w=a[g?h==="floating"?"reference":"floating":h],m=sl(await i.getClippingRect({element:(r=await(i.isElement==null?void 0:i.isElement(w)))==null||r?w:w.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(a.floating)),boundary:d,rootBoundary:u,strategy:c})),f=h==="floating"?{x:o,y:s,width:l.floating.width,height:l.floating.height}:l.reference,x=await(i.getOffsetParent==null?void 0:i.getOffsetParent(a.floating)),b=await(i.isElement==null?void 0:i.isElement(x))&&await(i.getScale==null?void 0:i.getScale(x))||{x:1,y:1},k=sl(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:f,offsetParent:x,strategy:c}):f);return{top:(m.top-k.top+j.top)/b.y,bottom:(k.bottom-m.bottom+j.bottom)/b.y,left:(m.left-k.left+j.left)/b.x,right:(k.right-m.right+j.right)/b.x}}const H0=50,U0=async(t,e,r)=>{const{placement:o="bottom",strategy:s="absolute",middleware:i=[],platform:l}=r,a=l.detectOverflow?l:{...l,detectOverflow:$0},c=await(l.isRTL==null?void 0:l.isRTL(e));let d=await l.getElementRects({reference:t,floating:e,strategy:s}),{x:u,y:h}=Rh(d,o,c),g=o,p=0;const j={};for(let y=0;y<i.length;y++){const w=i[y];if(!w)continue;const{name:m,fn:f}=w,{x,y:b,data:k,reset:S}=await f({x:u,y:h,initialPlacement:o,placement:g,strategy:s,middlewareData:j,rects:d,platform:a,elements:{reference:t,floating:e}});u=x??u,h=b??h,j[m]={...j[m],...k},S&&p<H0&&(p++,typeof S=="object"&&(S.placement&&(g=S.placement),S.rects&&(d=S.rects===!0?await l.getElementRects({reference:t,floating:e,strategy:s}):S.rects),{x:u,y:h}=Rh(d,g,c)),y=-1)}return{x:u,y:h,placement:g,strategy:s,middlewareData:j}},V0=t=>({name:"arrow",options:t,async fn(e){const{x:r,y:o,placement:s,rects:i,platform:l,elements:a,middlewareData:c}=e,{element:d,padding:u=0}=an(t,e)||{};if(d==null)return{};const h=hx(u),g={x:r,y:o},p=Wd(s),j=Bd(p),y=await l.getDimensions(d),w=p==="y",m=w?"top":"left",f=w?"bottom":"right",x=w?"clientHeight":"clientWidth",b=i.reference[j]+i.reference[p]-g[p]-i.floating[j],k=g[p]-i.reference[p],S=await(l.getOffsetParent==null?void 0:l.getOffsetParent(d));let C=S?S[x]:0;(!C||!await(l.isElement==null?void 0:l.isElement(S)))&&(C=a.floating[x]||i.floating[j]);const E=b/2-k/2,M=C/2-y[j]/2-1,I=Un(h[m],M),W=Un(h[f],M),_=C-y[j]-W,$=C/2-y[j]/2+E,z=ux(I,$,_),G=!c.arrow&&No(s)!=null&&$!==z&&i.reference[j]/2-($<I?I:W)-y[j]/2<0,O=G?$<I?$-I:$-_:0;return{[p]:g[p]+O,data:{[p]:z,centerOffset:$-z-O,...G&&{alignmentOffset:O}},reset:G}}}),q0=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var r,o;const{placement:s,middlewareData:i,rects:l,initialPlacement:a,platform:c,elements:d}=e,{mainAxis:u=!0,crossAxis:h=!0,fallbackPlacements:g,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:j="none",flipAlignment:y=!0,...w}=an(t,e);if((r=i.arrow)!=null&&r.alignmentOffset)return{};const m=Vn(s),f=Wt(a),x=Vn(a)===a,b=await(c.isRTL==null?void 0:c.isRTL(d.floating)),k=g||(x||!y?[ol(a)]:L0(a)),S=j!=="none";!g&&S&&k.push(...W0(a,y,j,b));const C=[a,...k],E=await c.detectOverflow(e,w),M=[];let I=((o=i.flip)==null?void 0:o.overflows)||[];if(u&&M.push(E[m]),h){const z=O0(s,l,b);M.push(E[z[0]],E[z[1]])}if(I=[...I,{placement:s,overflows:M}],!M.every(z=>z<=0)){var W,_;const z=(((W=i.flip)==null?void 0:W.index)||0)+1,G=C[z];if(G&&(!(h==="alignment"?f!==Wt(G):!1)||I.every(N=>Wt(N.placement)===f?N.overflows[0]>0:!0)))return{data:{index:z,overflows:I},reset:{placement:G}};let O=(_=I.filter(U=>U.overflows[0]<=0).sort((U,N)=>U.overflows[1]-N.overflows[1])[0])==null?void 0:_.placement;if(!O)switch(p){case"bestFit":{var $;const U=($=I.filter(N=>{if(S){const P=Wt(N.placement);return P===f||P==="y"}return!0}).map(N=>[N.placement,N.overflows.filter(P=>P>0).reduce((P,A)=>P+A,0)]).sort((N,P)=>N[1]-P[1])[0])==null?void 0:$[0];U&&(O=U);break}case"initialPlacement":O=a;break}if(s!==O)return{reset:{placement:O}}}return{}}}};function Mh(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function _h(t){return M0.some(e=>t[e]>=0)}const J0=function(t){return t===void 0&&(t={}),{name:"hide",options:t,async fn(e){const{rects:r,platform:o}=e,{strategy:s="referenceHidden",...i}=an(t,e);switch(s){case"referenceHidden":{const l=await o.detectOverflow(e,{...i,elementContext:"reference"}),a=Mh(l,r.reference);return{data:{referenceHiddenOffsets:a,referenceHidden:_h(a)}}}case"escaped":{const l=await o.detectOverflow(e,{...i,altBoundary:!0}),a=Mh(l,r.floating);return{data:{escapedOffsets:a,escaped:_h(a)}}}default:return{}}}}},px=new Set(["left","top"]);async function G0(t,e){const{placement:r,platform:o,elements:s}=t,i=await(o.isRTL==null?void 0:o.isRTL(s.floating)),l=Vn(r),a=No(r),c=Wt(r)==="y",d=px.has(l)?-1:1,u=i&&c?-1:1,h=an(e,t);let{mainAxis:g,crossAxis:p,alignmentAxis:j}=typeof h=="number"?{mainAxis:h,crossAxis:0,alignmentAxis:null}:{mainAxis:h.mainAxis||0,crossAxis:h.crossAxis||0,alignmentAxis:h.alignmentAxis};return a&&typeof j=="number"&&(p=a==="end"?j*-1:j),c?{x:p*u,y:g*d}:{x:g*d,y:p*u}}const Q0=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var r,o;const{x:s,y:i,placement:l,middlewareData:a}=e,c=await G0(e,t);return l===((r=a.offset)==null?void 0:r.placement)&&(o=a.arrow)!=null&&o.alignmentOffset?{}:{x:s+c.x,y:i+c.y,data:{...c,placement:l}}}}},K0=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:r,y:o,placement:s,platform:i}=e,{mainAxis:l=!0,crossAxis:a=!1,limiter:c={fn:f=>{let{x,y:b}=f;return{x,y:b}}},...d}=an(t,e),u={x:r,y:o},h=await i.detectOverflow(e,d),g=Wt(s),p=Fd(g);let j=u[p],y=u[g];const w=(f,x)=>ux(x+h[f==="y"?"top":"left"],x,x-h[f==="y"?"bottom":"right"]);l&&(j=w(p,j)),a&&(y=w(g,y));const m=c.fn({...e,[p]:j,[g]:y});return{...m,data:{x:m.x-r,y:m.y-o,enabled:{[p]:l,[g]:a}}}}}},X0=function(t){return t===void 0&&(t={}),{options:t,fn(e){var r,o;const{x:s,y:i,placement:l,rects:a,middlewareData:c}=e,{offset:d=0,mainAxis:u=!0,crossAxis:h=!0}=an(t,e),g={x:s,y:i},p=Wt(l),j=Fd(p);let y=g[j],w=g[p];const m=an(d,e),f=typeof m=="number"?{mainAxis:m,crossAxis:0}:{mainAxis:(r=m.mainAxis)!=null?r:0,crossAxis:(o=m.crossAxis)!=null?o:0};if(u){const k=j==="y"?"height":"width",S=a.reference[j]-a.floating[k]+f.mainAxis,C=a.reference[j]+a.reference[k]-f.mainAxis;y<S?y=S:y>C&&(y=C)}if(h){var x,b;const k=j==="y"?"width":"height",S=px.has(Vn(l)),C=a.reference[p]-a.floating[k]+(S&&((x=c.offset)==null?void 0:x[p])||0)+(S?0:f.crossAxis),E=a.reference[p]+a.reference[k]+(S?0:((b=c.offset)==null?void 0:b[p])||0)-(S?f.crossAxis:0);w<C?w=C:w>E&&(w=E)}return{[j]:y,[p]:w}}}},Y0=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){const{placement:r,rects:o,platform:s,elements:i}=e,{apply:l=()=>{},...a}=an(t,e),c=await s.detectOverflow(e,a),d=Vn(r),u=No(r),h=Wt(r)==="y",{width:g,height:p}=o.floating;let j,y;d==="top"||d==="bottom"?(j=d,y=u===(await(s.isRTL==null?void 0:s.isRTL(i.floating))?"start":"end")?"left":"right"):(y=d,j=u==="end"?"top":"bottom");const w=p-c.top-c.bottom,m=g-c.left-c.right,f=Un(p-c[j],w),x=Un(g-c[y],m),b=e.middlewareData.shift,k=!b;let S=f,C=x;b!=null&&b.enabled.x&&(C=m),b!=null&&b.enabled.y&&(S=w),k&&!u&&(h?C=g-2*Zt(c.left,c.right):S=p-2*Zt(c.top,c.bottom)),await l({...e,availableWidth:C,availableHeight:S});const E=await s.getDimensions(i.floating);return g!==E.width||p!==E.height?{reset:{rects:!0}}:{}}}};function Nl(){return typeof window<"u"}function Po(t){return fx(t)?(t.nodeName||"").toLowerCase():"#document"}function Ze(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function dn(t){var e;return(e=(fx(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function fx(t){return Nl()?t instanceof Node||t instanceof Ze(t).Node:!1}function Ht(t){return Nl()?t instanceof Element||t instanceof Ze(t).Element:!1}function Qn(t){return Nl()?t instanceof HTMLElement||t instanceof Ze(t).HTMLElement:!1}function Oh(t){return!Nl()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof Ze(t).ShadowRoot}function Pl(t){const{overflow:e,overflowX:r,overflowY:o,display:s}=Ut(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+r)&&s!=="inline"&&s!=="contents"}function Z0(t){return/^(table|td|th)$/.test(Po(t))}function El(t){try{if(t.matches(":popover-open"))return!0}catch{}try{return t.matches(":modal")}catch{return!1}}const ek=/transform|translate|scale|rotate|perspective|filter/,tk=/paint|layout|strict|content/,nr=t=>!!t&&t!=="none";let pa;function zd(t){const e=Ht(t)?Ut(t):t;return nr(e.transform)||nr(e.translate)||nr(e.scale)||nr(e.rotate)||nr(e.perspective)||!$d()&&(nr(e.backdropFilter)||nr(e.filter))||ek.test(e.willChange||"")||tk.test(e.contain||"")}function nk(t){let e=br(t);for(;Qn(e)&&!bs(e);){if(zd(e))return e;if(El(e))return null;e=br(e)}return null}function $d(){return pa==null&&(pa=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),pa}function bs(t){return/^(html|body|#document)$/.test(Po(t))}function Ut(t){return Ze(t).getComputedStyle(t)}function Il(t){return Ht(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function br(t){if(Po(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Oh(t)&&t.host||dn(t);return Oh(e)?e.host:e}function mx(t){const e=br(t);return bs(e)?(t.ownerDocument||t).body:Qn(e)&&Pl(e)?e:mx(e)}function ks(t,e,r){var o;e===void 0&&(e=[]),r===void 0&&(r=!0);const s=mx(t),i=s===((o=t.ownerDocument)==null?void 0:o.body),l=Ze(s);if(i){const a=kc(l);return e.concat(l,l.visualViewport||[],Pl(s)?s:[],a&&r?ks(a):[])}else return e.concat(s,ks(s,[],r))}function kc(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function gx(t){const e=Ut(t);let r=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const s=Qn(t),i=s?t.offsetWidth:r,l=s?t.offsetHeight:o,a=rl(r)!==i||rl(o)!==l;return a&&(r=i,o=l),{width:r,height:o,$:a}}function Hd(t){return Ht(t)?t:t.contextElement}function eo(t){const e=Hd(t);if(!Qn(e))return en(1);const r=e.getBoundingClientRect(),{width:o,height:s,$:i}=gx(e);let l=(i?rl(r.width):r.width)/o,a=(i?rl(r.height):r.height)/s;return(!l||!Number.isFinite(l))&&(l=1),(!a||!Number.isFinite(a))&&(a=1),{x:l,y:a}}const rk=en(0);function xx(t){const e=Ze(t);return!$d()||!e.visualViewport?rk:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function ok(t,e,r){return e===void 0&&(e=!1),!!r&&e&&r===Ze(t)}function kr(t,e,r,o){e===void 0&&(e=!1),r===void 0&&(r=!1);const s=t.getBoundingClientRect(),i=Hd(t);let l=en(1);e&&(o?Ht(o)&&(l=eo(o)):l=eo(t));const a=ok(i,r,o)?xx(i):en(0);let c=(s.left+a.x)/l.x,d=(s.top+a.y)/l.y,u=s.width/l.x,h=s.height/l.y;if(i&&o){const g=Ze(i),p=Ht(o)?Ze(o):o;let j=g,y=kc(j);for(;y&&p!==j;){const w=eo(y),m=y.getBoundingClientRect(),f=Ut(y),x=m.left+(y.clientLeft+parseFloat(f.paddingLeft))*w.x,b=m.top+(y.clientTop+parseFloat(f.paddingTop))*w.y;c*=w.x,d*=w.y,u*=w.x,h*=w.y,c+=x,d+=b,j=Ze(y),y=kc(j)}}return sl({width:u,height:h,x:c,y:d})}function Al(t,e){const r=Il(t).scrollLeft;return e?e.left+r:kr(dn(t)).left+r}function vx(t,e){const r=t.getBoundingClientRect(),o=r.left+e.scrollLeft-Al(t,r),s=r.top+e.scrollTop;return{x:o,y:s}}function sk(t){let{elements:e,rect:r,offsetParent:o,strategy:s}=t;const i=s==="fixed",l=dn(o),a=e?El(e.floating):!1;if(o===l||a&&i)return r;let c={scrollLeft:0,scrollTop:0},d=en(1);const u=en(0),h=Qn(o);if((h||!i)&&((Po(o)!=="body"||Pl(l))&&(c=Il(o)),h)){const p=kr(o);d=eo(o),u.x=p.x+o.clientLeft,u.y=p.y+o.clientTop}const g=l&&!h&&!i?vx(l,c):en(0);return{width:r.width*d.x,height:r.height*d.y,x:r.x*d.x-c.scrollLeft*d.x+u.x+g.x,y:r.y*d.y-c.scrollTop*d.y+u.y+g.y}}function ik(t){return t.getClientRects?Array.from(t.getClientRects()):[]}function lk(t){const e=Il(t),r=t.ownerDocument.body,o=Zt(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),s=Zt(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let i=-e.scrollLeft+Al(t);const l=-e.scrollTop;return Ut(r).direction==="rtl"&&(i+=Zt(t.clientWidth,r.clientWidth)-o),{width:o,height:s,x:i,y:l}}const ak=25;function ck(t,e,r){r===void 0&&(r="viewport");const o=r==="layoutViewport",s=Ze(t),i=dn(t),l=s.visualViewport;let a=i.clientWidth,c=i.clientHeight,d=0,u=0;if(l){const g=!$d()||e==="fixed";o?g||(d=-l.offsetLeft,u=-l.offsetTop):(a=l.width,c=l.height,g&&(d=l.offsetLeft,u=l.offsetTop))}if(Al(i)<=0){const g=i.ownerDocument,p=g.body,j=getComputedStyle(p),y=g.compatMode==="CSS1Compat"&&parseFloat(j.marginLeft)+parseFloat(j.marginRight)||0,w=Math.abs(i.clientWidth-p.clientWidth-y),m=getComputedStyle(i).scrollbarGutter==="stable both-edges"?w/2:w;m<=ak&&(a-=m)}return{width:a,height:c,x:d,y:u}}function dk(t,e){const r=kr(t,!0,e==="fixed"),o=r.top+t.clientTop,s=r.left+t.clientLeft,i=eo(t),l=t.clientWidth*i.x,a=t.clientHeight*i.y,c=s*i.x,d=o*i.y;return{width:l,height:a,x:c,y:d}}function Lh(t,e,r){let o;if(e==="viewport"||e==="layoutViewport")o=ck(t,r,e);else if(e==="document")o=lk(dn(t));else if(Ht(e))o=dk(e,r);else{const s=xx(t);o={x:e.x-s.x,y:e.y-s.y,width:e.width,height:e.height}}return sl(o)}function uk(t,e){const r=e.get(t);if(r)return r;let o=ks(t,[],!1).filter(a=>Ht(a)&&Po(a)!=="body"),s=null;const i=Ut(t).position==="fixed";let l=i?br(t):t;for(;Ht(l)&&!bs(l);){const a=Ut(l),c=zd(l),d=s?s.position:i?"fixed":"";!c&&(d==="fixed"||d==="absolute"&&a.position==="static")?o=o.filter(h=>h!==l):s=a,l=br(l)}return e.set(t,o),o}function hk(t){let{element:e,boundary:r,rootBoundary:o,strategy:s}=t;const l=[...r==="clippingAncestors"?El(e)?[]:uk(e,this._c):[].concat(r),o],a=Lh(e,l[0],s);let c=a.top,d=a.right,u=a.bottom,h=a.left;for(let g=1;g<l.length;g++){const p=Lh(e,l[g],s);c=Zt(p.top,c),d=Un(p.right,d),u=Un(p.bottom,u),h=Zt(p.left,h)}return{width:d-h,height:u-c,x:h,y:c}}function pk(t){const{width:e,height:r}=gx(t);return{width:e,height:r}}function fk(t,e,r){const o=Qn(e),s=dn(e),i=r==="fixed",l=kr(t,!0,i,e);let a={scrollLeft:0,scrollTop:0};const c=en(0);if((o||!i)&&((Po(e)!=="body"||Pl(s))&&(a=Il(e)),o)){const g=kr(e,!0,i,e);c.x=g.x+e.clientLeft,c.y=g.y+e.clientTop}!o&&s&&(c.x=Al(s));const d=s&&!o&&!i?vx(s,a):en(0),u=l.left+a.scrollLeft-c.x-d.x,h=l.top+a.scrollTop-c.y-d.y;return{x:u,y:h,width:l.width,height:l.height}}function fa(t){return Ut(t).position==="static"}function Dh(t,e){if(!Qn(t)||Ut(t).position==="fixed")return null;if(e)return e(t);let r=t.offsetParent;return dn(t)===r&&(r=r.ownerDocument.body),r}function yx(t,e){const r=Ze(t);if(El(t))return r;if(!Qn(t)){let s=br(t);for(;s&&!bs(s);){if(Ht(s)&&!fa(s))return s;s=br(s)}return r}let o=Dh(t,e);for(;o&&Z0(o)&&fa(o);)o=Dh(o,e);return o&&bs(o)&&fa(o)&&!zd(o)?r:o||nk(t)||r}const mk=async function(t){const e=this.getOffsetParent||yx,r=this.getDimensions,o=await r(t.floating);return{reference:fk(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function gk(t){return Ut(t).direction==="rtl"}const xk={convertOffsetParentRelativeRectToViewportRelativeRect:sk,getDocumentElement:dn,getClippingRect:hk,getOffsetParent:yx,getElementRects:mk,getClientRects:ik,getDimensions:pk,getScale:eo,isElement:Ht,isRTL:gk};function jx(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function vk(t,e,r){let o=null,s;const i=dn(t);function l(){var u;clearTimeout(s),(u=o)==null||u.disconnect(),o=null}function a(u,h){u===void 0&&(u=!1),h===void 0&&(h=1),l();const g=t.getBoundingClientRect(),{left:p,top:j,width:y,height:w}=g;if(u||e(),!y||!w)return;const m=di(j),f=di(i.clientWidth-(p+y)),x=di(i.clientHeight-(j+w)),b=di(p),S={rootMargin:-m+"px "+-f+"px "+-x+"px "+-b+"px",threshold:Zt(0,Un(1,h))||1};let C=!0;function E(M){const I=M[0].intersectionRatio;if(!jx(g,t.getBoundingClientRect()))return a();if(I!==h){if(!C)return a();I?a(!1,I):s=setTimeout(()=>{a(!1,1e-7)},1e3)}C=!1}try{o=new IntersectionObserver(E,{...S,root:i.ownerDocument})}catch{o=new IntersectionObserver(E,S)}o.observe(t)}const c=Ze(t),d=()=>a(r);return c.addEventListener("resize",d),a(!0),()=>{c.removeEventListener("resize",d),l()}}function yk(t,e,r,o){o===void 0&&(o={});const{ancestorScroll:s=!0,ancestorResize:i=!0,elementResize:l=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:c=!1}=o,d=Hd(t),u=s||i?[...d?ks(d):[],...e?ks(e):[]]:[];u.forEach(m=>{s&&m.addEventListener("scroll",r),i&&m.addEventListener("resize",r)});const h=d&&a?vk(d,r,i):null;let g=-1,p=null;l&&(p=new ResizeObserver(m=>{let[f]=m;f&&f.target===d&&p&&e&&(p.unobserve(e),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{var x;(x=p)==null||x.observe(e)})),r()}),d&&!c&&p.observe(d),e&&p.observe(e));let j,y=c?kr(t):null;c&&w();function w(){const m=kr(t);y&&!jx(y,m)&&r(),y=m,j=requestAnimationFrame(w)}return r(),()=>{var m;u.forEach(f=>{s&&f.removeEventListener("scroll",r),i&&f.removeEventListener("resize",r)}),h==null||h(),(m=p)==null||m.disconnect(),p=null,c&&cancelAnimationFrame(j)}}const jk=Q0,wk=K0,bk=q0,kk=Y0,Sk=J0,Fh=V0,Ck=X0,Tk=(t,e,r)=>{const o=new Map,s=r??{},i={...xk,...s.platform,_c:o};return U0(t,e,{...s,platform:i})};var Nk=typeof document<"u",Pk=function(){},Ii=Nk?v.useLayoutEffect:Pk;function il(t,e){if(t===e)return!0;if(typeof t!=typeof e)return!1;if(typeof t=="function"&&t.toString()===e.toString())return!0;let r,o,s;if(t&&e&&typeof t=="object"){if(Array.isArray(t)){if(r=t.length,r!==e.length)return!1;for(o=r;o--!==0;)if(!il(t[o],e[o]))return!1;return!0}if(s=Object.keys(t),r=s.length,r!==Object.keys(e).length)return!1;for(o=r;o--!==0;)if(!{}.hasOwnProperty.call(e,s[o]))return!1;for(o=r;o--!==0;){const i=s[o];if(!(i==="_owner"&&t.$$typeof)&&!il(t[i],e[i]))return!1}return!0}return t!==t&&e!==e}function wx(t){return typeof window>"u"?1:(t.ownerDocument.defaultView||window).devicePixelRatio||1}function Bh(t,e){const r=wx(t);return Math.round(e*r)/r}function ma(t){const e=v.useRef(t);return Ii(()=>{e.current=t}),e}function Ek(t){t===void 0&&(t={});const{placement:e="bottom",strategy:r="absolute",middleware:o=[],platform:s,elements:{reference:i,floating:l}={},transform:a=!0,whileElementsMounted:c,open:d}=t,[u,h]=v.useState({x:0,y:0,strategy:r,placement:e,middlewareData:{},isPositioned:!1}),[g,p]=v.useState(o);il(g,o)||p(o);const[j,y]=v.useState(null),[w,m]=v.useState(null),f=v.useCallback(N=>{N!==S.current&&(S.current=N,y(N))},[]),x=v.useCallback(N=>{N!==C.current&&(C.current=N,m(N))},[]),b=i||j,k=l||w,S=v.useRef(null),C=v.useRef(null),E=v.useRef(u),M=c!=null,I=ma(c),W=ma(s),_=ma(d),$=v.useCallback(()=>{if(!S.current||!C.current)return;const N={placement:e,strategy:r,middleware:g};W.current&&(N.platform=W.current),Tk(S.current,C.current,N).then(P=>{const A={...P,isPositioned:_.current!==!1};z.current&&!il(E.current,A)&&(E.current=A,ko.flushSync(()=>{h(A)}))})},[g,e,r,W,_]);Ii(()=>{d===!1&&E.current.isPositioned&&(E.current.isPositioned=!1,h(N=>({...N,isPositioned:!1})))},[d]);const z=v.useRef(!1);Ii(()=>(z.current=!0,()=>{z.current=!1}),[]),Ii(()=>{if(b&&(S.current=b),k&&(C.current=k),b&&k){if(I.current)return I.current(b,k,$);$()}},[b,k,$,I,M]);const G=v.useMemo(()=>({reference:S,floating:C,setReference:f,setFloating:x}),[f,x]),O=v.useMemo(()=>({reference:b,floating:k}),[b,k]),U=v.useMemo(()=>{const N={position:r,left:0,top:0};if(!O.floating)return N;const P=Bh(O.floating,u.x),A=Bh(O.floating,u.y);return a?{...N,transform:"translate("+P+"px, "+A+"px)",...wx(O.floating)>=1.5&&{willChange:"transform"}}:{position:r,left:P,top:A}},[r,a,O.floating,u.x,u.y]);return v.useMemo(()=>({...u,update:$,refs:G,elements:O,floatingStyles:U}),[u,$,G,O,U])}const Ik=t=>{function e(r){return{}.hasOwnProperty.call(r,"current")}return{name:"arrow",options:t,fn(r){const{element:o,padding:s}=typeof t=="function"?t(r):t;return o&&e(o)?o.current!=null?Fh({element:o.current,padding:s}).fn(r):{}:o?Fh({element:o,padding:s}).fn(r):{}}}},Ak=(t,e)=>{const r=jk(t);return{name:r.name,fn:r.fn,options:[t,e]}},Rk=(t,e)=>{const r=wk(t);return{name:r.name,fn:r.fn,options:[t,e]}},Mk=(t,e)=>({fn:Ck(t).fn,options:[t,e]}),_k=(t,e)=>{const r=bk(t);return{name:r.name,fn:r.fn,options:[t,e]}},Ok=(t,e)=>{const r=kk(t);return{name:r.name,fn:r.fn,options:[t,e]}},Lk=(t,e)=>{const r=Sk(t);return{name:r.name,fn:r.fn,options:[t,e]}},Dk=(t,e)=>{const r=Ik(t);return{name:r.name,fn:r.fn,options:[t,e]}};var Fk=Object.defineProperty,Bk=(t,e)=>Fk(t,"name",{value:e,configurable:!0});function bx(t){const[e,r]=v.useState(void 0);return ot(()=>{if(t){r({width:t.offsetWidth,height:t.offsetHeight});let o=0;const s=new ResizeObserver(i=>{if(!Array.isArray(i)||!i.length)return;const l=i[0];window.cancelAnimationFrame(o),o=window.requestAnimationFrame(()=>{let a,c;if("borderBoxSize"in l){const d=l.borderBoxSize,u=Array.isArray(d)?d[0]:d;a=u.inlineSize,c=u.blockSize}else a=t.offsetWidth,c=t.offsetHeight;r({width:a,height:c})})});return s.observe(t,{box:"border-box"}),()=>{window.cancelAnimationFrame(o),s.unobserve(t)}}else r(void 0)},[t]),e}Bk(bx,"useSize");var Wk=Object.defineProperty,to=(t,e)=>Wk(t,"name",{value:e,configurable:!0}),Wh={Partial:"partial"},zh={Optimized:"optimized",Always:"always"},kx="Popper",[Sx,Cx]=Co(kx),[XC,zk]=Sx(kx),Tx="PopperContent",[$k,YC]=Sx(Tx),Hk=v.forwardRef(to(function(e,r){var un,Xn,hn,Pr,Ao,Bs,Ws;const{__scopePopper:o,side:s="bottom",sideOffset:i=0,align:l="center",alignOffset:a=0,arrowPadding:c=0,avoidCollisions:d=!0,collisionBoundary:u=[],collisionPadding:h=0,sticky:g=Wh.Partial,hideWhenDetached:p=!1,updatePositionStrategy:j=zh.Optimized,onPlaced:y,...w}=e,m=zk(Tx,o),[f,x]=v.useState(null),b=Ye(r,x),[k,S]=v.useState(null),C=bx(k),E=(C==null?void 0:C.width)??0,M=(C==null?void 0:C.height)??0,I=s+(l!=="center"?"-"+l:""),W=typeof h=="number"?h:{top:0,right:0,bottom:0,left:0,...h},_=Array.isArray(u)?u:[u],$=_.length>0,z={padding:W,boundary:_.filter(Nx),altBoundary:$},{refs:G,floatingStyles:O,placement:U,isPositioned:N,middlewareData:P}=Ek({strategy:"fixed",placement:I,whileElementsMounted:to((...Er)=>yk(...Er,{animationFrame:j===zh.Always}),"whileElementsMounted"),elements:{reference:m.anchor},middleware:[Ak({mainAxis:i+M,alignmentAxis:a}),d&&Rk({mainAxis:!0,crossAxis:!1,...g===Wh.Partial?{limiter:Mk()}:{},...z}),d&&_k({...z}),Ok({...z,apply:to(({elements:Er,rects:zs,availableWidth:Ro,availableHeight:_l})=>{const{width:$s,height:Yn}=zs.reference,Zn=Er.floating.style;Zn.setProperty("--radix-popper-available-width",`${Ro}px`),Zn.setProperty("--radix-popper-available-height",`${_l}px`),Zn.setProperty("--radix-popper-anchor-width",`${$s}px`),Zn.setProperty("--radix-popper-anchor-height",`${Yn}px`)},"apply")}),k&&Dk({element:k,padding:c}),Uk({arrowWidth:E,arrowHeight:M}),p&&Lk($?{strategy:"referenceHidden",...z}:{strategy:"referenceHidden",padding:z.padding,altBoundary:z.altBoundary})]}),A=m.setPlacementState;ot(()=>(A(U),()=>{A(void 0)}),[U,A]);const[F,B]=Ud(U),V=sn(y);ot(()=>{N&&(V==null||V())},[N,V]);const Q=(un=P.arrow)==null?void 0:un.x,oe=(Xn=P.arrow)==null?void 0:Xn.y,ye=((hn=P.arrow)==null?void 0:hn.centerOffset)!==0,[Z,Io]=v.useState();return ot(()=>{f&&Io(window.getComputedStyle(f).zIndex)},[f]),n.jsx("div",{ref:G.setFloating,"data-radix-popper-content-wrapper":"",style:{...O,transform:N?O.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:Z,"--radix-popper-transform-origin":[(Pr=P.transformOrigin)==null?void 0:Pr.x,(Ao=P.transformOrigin)==null?void 0:Ao.y].join(" "),...((Bs=P.hide)==null?void 0:Bs.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:e.dir,children:n.jsx($k,{scope:o,placedSide:F,placedAlign:B,onArrowChange:S,arrowX:Q,arrowY:oe,shouldHideArrow:ye,children:n.jsx(Mt.div,{"data-side":F,"data-align":B,...w,ref:b,style:{...w.style,animation:N?(Ws=w.style)==null?void 0:Ws.animation:"none"}})})})},"PopperContent"));function Nx(t){return t!==null}to(Nx,"isNotNull");var Uk=to(t=>({name:"transformOrigin",options:t,fn(e){var w,m,f;const{placement:r,rects:o,middlewareData:s}=e,l=((w=s.arrow)==null?void 0:w.centerOffset)!==0,a=l?0:t.arrowWidth,c=l?0:t.arrowHeight,[d,u]=Ud(r),h={start:"0%",center:"50%",end:"100%"}[u],g=(((m=s.arrow)==null?void 0:m.x)??0)+a/2,p=(((f=s.arrow)==null?void 0:f.y)??0)+c/2;let j="",y="";return d==="bottom"?(j=l?h:`${g}px`,y=`${-c}px`):d==="top"?(j=l?h:`${g}px`,y=`${o.floating.height+c}px`):d==="right"?(j=`${-c}px`,y=l?h:`${p}px`):d==="left"&&(j=`${o.floating.width+c}px`,y=l?h:`${p}px`),{data:{x:j,y}}}}),"transformOrigin");function Ud(t){const[e,r="center"]=t.split("-");return[e,r]}to(Ud,"getSideAndAlignFromPlacement");var Vk=Object.defineProperty,We=(t,e)=>Vk(t,"name",{value:e,configurable:!0}),[Vd,ZC]=Co("Tooltip",[Cx]),qk=Cx(),Jk="TooltipProvider",Gk=700,$h="tooltip.open",[Qk,Kk]=Vd(Jk),Xk=We(t=>{const{__scopeTooltip:e,delayDuration:r=Gk,skipDelayDuration:o=300,disableHoverableContent:s=!1,children:i}=t,l=v.useRef(!0),a=v.useRef(!1),c=v.useRef(0);return v.useEffect(()=>{const d=c.current;return()=>window.clearTimeout(d)},[]),n.jsx(Qk,{scope:e,isOpenDelayedRef:l,delayDuration:r,onOpen:v.useCallback(()=>{o<=0||(window.clearTimeout(c.current),l.current=!1)},[o]),onClose:v.useCallback(()=>{o<=0||(window.clearTimeout(c.current),c.current=window.setTimeout(()=>l.current=!0,o))},[o]),isPointerInTransitRef:a,onPointerInTransitChange:v.useCallback(d=>{a.current=d},[]),disableHoverableContent:s,children:i})},"TooltipProvider"),Yk="Tooltip",[eT,qd]=Vd(Yk),Zk="TooltipPortal",[tT,e1]=Vd(Zk,{forceMount:void 0}),Ss="TooltipContent",Px=v.forwardRef(We(function(e,r){const o=e1(Ss,e.__scopeTooltip),{forceMount:s=o.forceMount,side:i="top",...l}=e,a=qd(Ss,e.__scopeTooltip);return n.jsx(bg,{present:s||a.open,children:a.disableHoverableContent?n.jsx(Ex,{side:i,...l,ref:r}):n.jsx(t1,{side:i,...l,ref:r})})},"TooltipContent")),t1=v.forwardRef(We(function(e,r){const o=qd(Ss,e.__scopeTooltip),s=Kk(Ss,e.__scopeTooltip),i=v.useRef(null),l=Ye(r,i),[a,c]=v.useState(null),{trigger:d,onClose:u}=o,h=i.current,{onPointerInTransitChange:g}=s,p=v.useCallback(()=>{c(null),g(!1)},[g]),j=v.useCallback((y,w)=>{const m=y.currentTarget,f={x:y.clientX,y:y.clientY},x=Ix(f,m.getBoundingClientRect()),b=Ax(f,x),k=Rx(w.getBoundingClientRect()),S=_x([...b,...k]);c(S),g(!0)},[g]);return v.useEffect(()=>()=>p(),[p]),v.useEffect(()=>{if(d&&h){const y=We(m=>j(m,h),"handleTriggerLeave"),w=We(m=>j(m,d),"handleContentLeave");return d.addEventListener("pointerleave",y),h.addEventListener("pointerleave",w),()=>{d.removeEventListener("pointerleave",y),h.removeEventListener("pointerleave",w)}}},[d,h,j,p]),v.useEffect(()=>{if(a){const y=We(w=>{const m=w.target,f={x:w.clientX,y:w.clientY},x=(d==null?void 0:d.contains(m))||(h==null?void 0:h.contains(m)),b=!Mx(f,a);x?p():b&&(p(),u())},"handleTrackPointerGrace");return document.addEventListener("pointermove",y),()=>document.removeEventListener("pointermove",y)}},[d,h,a,u,p]),n.jsx(Ex,{...e,ref:l})},"TooltipContentHoverable")),n1=sg("TooltipContent"),Ex=v.forwardRef(We(function(e,r){const{__scopeTooltip:o,children:s,"aria-label":i,id:l,onEscapeKeyDown:a,onPointerDownOutside:c,...d}=e,u=qd(Ss,o),h=qk(o),{onClose:g}=u,[p,j]=v.useState(null),y=Ye(r,j);ix(p),v.useEffect(()=>(document.addEventListener($h,g),()=>document.removeEventListener($h,g)),[g]),v.useEffect(()=>{if(u.trigger){const m=We(f=>{f.target instanceof Node&&f.target.contains(u.trigger)&&g()},"handleScroll");return window.addEventListener("scroll",m,{capture:!0}),()=>window.removeEventListener("scroll",m,{capture:!0})}},[u.trigger,g]);const{setContentId:w}=u;return ot(()=>(w(l),()=>{w(void 0)}),[l,w]),n.jsx(vg,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:a,onPointerDownOutside:c,onFocusOutside:m=>m.preventDefault(),onDismiss:g,children:n.jsxs(Hk,{"data-state":u.stateAttribute,role:i?void 0:"tooltip",id:i?void 0:u.contentId,...h,...d,ref:y,style:{...d.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[n.jsx(n1,{children:s}),i?n.jsx(Rd,{id:u.contentId,role:"tooltip",children:i}):null]})})},"TooltipContentImpl"));function Ix(t,e){const r=Math.abs(e.top-t.y),o=Math.abs(e.bottom-t.y),s=Math.abs(e.right-t.x),i=Math.abs(e.left-t.x);switch(Math.min(r,o,s,i)){case i:return"left";case s:return"right";case r:return"top";case o:return"bottom";default:throw new Error("unreachable")}}We(Ix,"getExitSideFromRect");function Ax(t,e,r=5){const o=[];switch(e){case"top":o.push({x:t.x-r,y:t.y+r},{x:t.x+r,y:t.y+r});break;case"bottom":o.push({x:t.x-r,y:t.y-r},{x:t.x+r,y:t.y-r});break;case"left":o.push({x:t.x+r,y:t.y-r},{x:t.x+r,y:t.y+r});break;case"right":o.push({x:t.x-r,y:t.y-r},{x:t.x-r,y:t.y+r});break}return o}We(Ax,"getPaddedExitPoints");function Rx(t){const{top:e,right:r,bottom:o,left:s}=t;return[{x:s,y:e},{x:r,y:e},{x:r,y:o},{x:s,y:o}]}We(Rx,"getPointsFromRect");function Mx(t,e){const{x:r,y:o}=t;let s=!1;for(let i=0,l=e.length-1;i<e.length;l=i++){const a=e[i],c=e[l],d=a.x,u=a.y,h=c.x,g=c.y;u>o!=g>o&&r<(h-d)*(o-u)/(g-u)+d&&(s=!s)}return s}We(Mx,"isPointInPolygon");function _x(t){const e=t.slice();return e.sort((r,o)=>r.x<o.x?-1:r.x>o.x?1:r.y<o.y?-1:r.y>o.y?1:0),Ox(e)}We(_x,"getHull");function Ox(t){if(t.length<=1)return t.slice();const e=[];for(let o=0;o<t.length;o++){const s=t[o];for(;e.length>=2;){const i=e[e.length-1],l=e[e.length-2];if((i.x-l.x)*(s.y-l.y)>=(i.y-l.y)*(s.x-l.x))e.pop();else break}e.push(s)}e.pop();const r=[];for(let o=t.length-1;o>=0;o--){const s=t[o];for(;r.length>=2;){const i=r[r.length-1],l=r[r.length-2];if((i.x-l.x)*(s.y-l.y)>=(i.y-l.y)*(s.x-l.x))r.pop();else break}r.push(s)}return r.pop(),e.length===1&&r.length===1&&e[0].x===r[0].x&&e[0].y===r[0].y?e:e.concat(r)}We(Ox,"getHullPresorted");function r1(...t){const e=new Set;for(const r of t)if(typeof r=="string")for(const o of String(r).trim().split(/\s+/))o&&e.add(o);return e.size>0?Array.from(e).join(" "):void 0}We(r1,"concatAriaDescribedby");const o1=Xk,s1=v.forwardRef(({className:t,sideOffset:e=4,...r},o)=>n.jsx(Px,{ref:o,sideOffset:e,className:Ue("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",t),...r}));s1.displayName=Px.displayName;const i1=v.createContext(void 0),l1=({client:t,children:e})=>(v.useEffect(()=>(t.mount(),()=>{t.unmount()}),[t]),n.jsx(i1.Provider,{value:t,children:e})),a1={setTimeout:(t,e)=>setTimeout(t,e),clearTimeout:t=>clearTimeout(t),setInterval:(t,e)=>setInterval(t,e),clearInterval:t=>clearInterval(t)};var Sn,Ac,Ep,c1=(Ep=class{constructor(){K(this,Sn,a1);K(this,Ac,!1)}setTimeoutProvider(t){H(this,Sn,t)}setTimeout(t,e){return T(this,Sn).setTimeout(t,e)}clearTimeout(t){T(this,Sn).clearTimeout(t)}setInterval(t,e){return T(this,Sn).setInterval(t,e)}clearInterval(t){T(this,Sn).clearInterval(t)}},Sn=new WeakMap,Ac=new WeakMap,Ep);const Sc=new c1;function d1(t){setTimeout(t,0)}const u1=typeof window>"u"||"Deno"in globalThis;function ht(){}function h1(t,e){return typeof t=="function"?t(e):t}function p1(t){return typeof t=="number"&&t>=0&&t!==1/0}function f1(t,e){return Math.max(t+(e||0)-Date.now(),0)}function os(t,e){return typeof t=="function"?t(e):t}function Hh(t,e){const{type:r="all",exact:o,fetchStatus:s,predicate:i,queryKey:l,stale:a}=t;if(l){if(o){if(e.queryHash!==Jd(l,e.options))return!1}else if(!yo(e.queryKey,l))return!1}if(r!=="all"){const c=e.isActive();if(r==="active"&&!c||r==="inactive"&&c)return!1}return!(typeof a=="boolean"&&e.isStale()!==a||s&&s!==e.state.fetchStatus||i&&!i(e))}function Uh(t,e){const{exact:r,status:o,predicate:s,mutationKey:i}=t;if(i){if(!e.options.mutationKey)return!1;if(r){if(Cs(e.options.mutationKey)!==Cs(i))return!1}else if(!yo(e.options.mutationKey,i))return!1}return!(o&&e.state.status!==o||s&&!s(e))}function Jd(t,e){return((e==null?void 0:e.queryKeyHashFn)||Cs)(t)}function Cs(t){return JSON.stringify(t,(e,r)=>Cc(r)?Object.keys(r).sort().reduce((o,s)=>(o[s]=r[s],o),{}):r)}function yo(t,e){if(t===e)return!0;if(typeof t!=typeof e)return!1;if(t&&e&&typeof t=="object"&&typeof e=="object"){if(Array.isArray(t)&&Array.isArray(e)){if(e.length>t.length)return!1;for(let o=0;o<e.length;o++)if(!yo(t[o],e[o]))return!1;return!0}const r=Object.keys(e);for(const o of r)if(!yo(t[o],e[o]))return!1;return!0}return!1}const m1=Object.prototype.hasOwnProperty;function Lx(t,e,r=0){if(t===e)return t;if(r>500)return e;const o=Vh(t)&&Vh(e);if(!o&&!(Cc(t)&&Cc(e)))return e;const s=(o?t:Object.keys(t)).length,i=o?e:Object.keys(e),l=i.length,a=o?new Array(l):{};let c=0;for(let d=0;d<l;d++){const u=o?d:i[d],h=t[u],g=e[u];if(h===g){a[u]=h,(o?d<s:m1.call(t,u))&&c++;continue}if(h===null||g===null||typeof h!="object"||typeof g!="object"){a[u]=g;continue}const p=Lx(h,g,r+1);a[u]=p,p===h&&c++}return s===l&&c===s?t:a}function Vh(t){return Array.isArray(t)&&t.length===Object.keys(t).length}function Cc(t){if(!qh(t))return!1;const e=Object.getPrototypeOf(t),r=e==null?void 0:e.constructor;if(r===void 0)return!0;if(typeof r!="function")return!1;const o=r.prototype;return!(!qh(o)||!o.hasOwnProperty("isPrototypeOf")||e!==Object.prototype)}function qh(t){return Object.prototype.toString.call(t)==="[object Object]"}function g1(t){return new Promise(e=>{Sc.setTimeout(e,t)})}function x1(t,e,r){return typeof r.structuralSharing=="function"?r.structuralSharing(t,e):r.structuralSharing!==!1?Lx(t,e):e}function v1(t,e,r=0){const o=[...t,e];return r&&o.length>r?o.slice(1):o}function y1(t,e,r=0){const o=[e,...t];return r&&o.length>r?o.slice(0,-1):o}const Gd=Symbol();function Dx(t,e){return!t.queryFn&&(e!=null&&e.initialPromise)?()=>e.initialPromise:!t.queryFn||t.queryFn===Gd?()=>Promise.reject(new Error(`Missing queryFn: '${t.queryHash}'`)):t.queryFn}function j1(t,e,r){let o=!1,s;return Object.defineProperty(t,"signal",{enumerable:!0,get:()=>(s??(s=e()),o||(o=!0,s.aborted?r():s.addEventListener("abort",r,{once:!0})),s)}),t}let w1=()=>u1;const Fx=()=>w1();var Rl=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(t){return this.listeners.add(t),this.onSubscribe(),()=>{this.listeners.delete(t),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},ar,Cn,no,Ip,b1=(Ip=class extends Rl{constructor(){super();K(this,ar);K(this,Cn);K(this,no);H(this,no,e=>{if(typeof window<"u"&&window.addEventListener){const r=()=>e();return window.addEventListener("visibilitychange",r,!1),()=>{window.removeEventListener("visibilitychange",r)}}})}onSubscribe(){T(this,Cn)||this.setEventListener(T(this,no))}onUnsubscribe(){var e;this.hasListeners()||((e=T(this,Cn))==null||e.call(this),H(this,Cn,void 0))}setEventListener(e){var r;H(this,no,e),(r=T(this,Cn))==null||r.call(this),H(this,Cn,e(o=>{typeof o=="boolean"?this.setFocused(o):this.onFocus()}))}setFocused(e){T(this,ar)!==e&&(H(this,ar,e),this.onFocus())}onFocus(){const e=this.isFocused();this.listeners.forEach(r=>{r(e)})}isFocused(){var e;return typeof T(this,ar)=="boolean"?T(this,ar):((e=globalThis.document)==null?void 0:e.visibilityState)!=="hidden"}},ar=new WeakMap,Cn=new WeakMap,no=new WeakMap,Ip);const Bx=new b1,k1=d1;function S1(){let t=[],e=0,r=a=>{a()},o=a=>{a()},s=k1;const i=a=>{e?t.push(a):s(()=>{r(a)})},l=()=>{const a=t;t=[],a.length&&s(()=>{o(()=>{a.forEach(c=>{r(c)})})})};return{batch:a=>{let c;e++;try{c=a()}finally{e--,e||l()}return c},batchCalls:a=>(...c)=>{i(()=>{a(...c)})},schedule:i,setNotifyFunction:a=>{r=a},setBatchNotifyFunction:a=>{o=a},setScheduler:a=>{s=a}}}const Be=S1();var ro,Tn,oo,Ap,C1=(Ap=class extends Rl{constructor(){super();K(this,ro,!0);K(this,Tn);K(this,oo);H(this,oo,e=>{if(typeof window<"u"&&window.addEventListener){const r=()=>e(!0),o=()=>e(!1);return window.addEventListener("online",r,!1),window.addEventListener("offline",o,!1),()=>{window.removeEventListener("online",r),window.removeEventListener("offline",o)}}})}onSubscribe(){T(this,Tn)||this.setEventListener(T(this,oo))}onUnsubscribe(){var e;this.hasListeners()||((e=T(this,Tn))==null||e.call(this),H(this,Tn,void 0))}setEventListener(e){var r;H(this,oo,e),(r=T(this,Tn))==null||r.call(this),H(this,Tn,e(this.setOnline.bind(this)))}setOnline(e){T(this,ro)!==e&&(H(this,ro,e),this.listeners.forEach(r=>{r(e)}))}isOnline(){return T(this,ro)}},ro=new WeakMap,Tn=new WeakMap,oo=new WeakMap,Ap);const ll=new C1;function T1(t){return Math.min(1e3*2**t,3e4)}function Wx(t){return(t??"online")==="online"?ll.isOnline():!0}var Tc=class extends Error{constructor(t){super("CancelledError"),this.revert=t==null?void 0:t.revert,this.silent=t==null?void 0:t.silent}};function zx(t){let e=!1,r=0,o,s="pending",i,l;const a=new Promise((f,x)=>{i=f,l=x});a.catch(ht);const c=()=>s!=="pending",d=f=>{var x;if(!c()){const b=new Tc(f);y(b),(x=t.onCancel)==null||x.call(t,b)}},u=()=>{e=!0},h=()=>{e=!1},g=()=>Bx.isFocused()&&(t.networkMode==="always"||ll.isOnline())&&t.canRun(),p=()=>Wx(t.networkMode)&&t.canRun(),j=f=>{c()||(o==null||o(),s="resolved",i(f))},y=f=>{c()||(o==null||o(),s="rejected",l(f))},w=f=>new Promise(x=>{var b;o=k=>{(c()||f())&&x(k)},(b=t.onPause)==null||b.call(t)}).then(()=>{var x;o=void 0,c()||(x=t.onContinue)==null||x.call(t)}),m=()=>{if(c())return;let f;const x=r===0?t.initialPromise:void 0;try{f=x??t.fn()}catch(b){f=Promise.reject(b)}Promise.resolve(f).then(j).catch(b=>{var M;if(c())return;const k=t.retry??(Fx()?0:3),S=t.retryDelay??T1,C=typeof S=="function"?S(r,b):S,E=k===!0||typeof k=="number"&&r<k||typeof k=="function"&&k(r,b);if(e||!E){y(b);return}r++,(M=t.onFail)==null||M.call(t,r,b),g1(C).then(()=>g()?void 0:w(g)).then(()=>{e?y(b):m()})})};return{promise:a,status:()=>s,cancel:d,continue:()=>(o==null||o(),a),cancelRetry:u,continueRetry:h,canStart:p,start:()=>(p()?m():w(p).then(m),a)}}var cr,Rp,$x=(Rp=class{constructor(){K(this,cr)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),p1(this.gcTime)&&H(this,cr,Sc.setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(t){this.gcTime=Math.max(this.gcTime||0,t??(Fx()?1/0:3e5))}clearGcTimeout(){T(this,cr)!==void 0&&(Sc.clearTimeout(T(this,cr)),H(this,cr,void 0))}},cr=new WeakMap,Rp);function N1(t){return{onFetch:(e,r)=>{var u,h,g,p,j;const o=e.options,s=(g=(h=(u=e.fetchOptions)==null?void 0:u.meta)==null?void 0:h.fetchMore)==null?void 0:g.direction,i=((p=e.state.data)==null?void 0:p.pages)||[],l=((j=e.state.data)==null?void 0:j.pageParams)||[];let a={pages:[],pageParams:[]},c=0;const d=async()=>{let y=!1;const w=x=>{j1(x,()=>e.signal,()=>y=!0)},m=Dx(e.options,e.fetchOptions),f=async(x,b,k)=>{if(y)return Promise.reject(e.signal.reason);if(b==null&&x.pages.length)return Promise.resolve(x);const C=(()=>{const W={client:e.client,queryKey:e.queryKey,pageParam:b,direction:k?"backward":"forward",meta:e.options.meta};return w(W),W})(),E=await m(C),{maxPages:M}=e.options,I=k?y1:v1;return{pages:I(x.pages,E,M),pageParams:I(x.pageParams,b,M)}};if(s&&i.length){const x=s==="backward",b=x?P1:Jh,k={pages:i,pageParams:l};a=await f(k,b(o,k),x)}else{const x=t??i.length;do{const b=c===0?l[0]??o.initialPageParam:Jh(o,a);if(c>0&&b==null)break;a=await f(a,b),c++}while(c<x)}return a};e.options.persister?e.fetchFn=()=>{var y,w;return(w=(y=e.options).persister)==null?void 0:w.call(y,d,{client:e.client,queryKey:e.queryKey,meta:e.options.meta,signal:e.signal},r)}:e.fetchFn=d}}}function Jh(t,{pages:e,pageParams:r}){const o=e.length-1;return e.length>0?t.getNextPageParam(e[o],e,r[o],r):void 0}function P1(t,{pages:e,pageParams:r}){var o;return e.length>0?(o=t.getPreviousPageParam)==null?void 0:o.call(t,e[0],e,r[0],r):void 0}var so,dr,io,ut,ur,je,Ps,hr,Tt,qt,Mp,E1=(Mp=class extends $x{constructor(e){super();K(this,Tt);K(this,so);K(this,dr);K(this,io);K(this,ut);K(this,ur);K(this,je);K(this,Ps);K(this,hr);H(this,hr,!1),H(this,Ps,e.defaultOptions),this.setOptions(e.options),this.observers=[],H(this,ur,e.client),H(this,ut,T(this,ur).getQueryCache()),this.queryKey=e.queryKey,this.queryHash=e.queryHash,H(this,dr,Qh(this.options)),this.state=e.state??T(this,dr),this.scheduleGc()}get meta(){return this.options.meta}get queryType(){return T(this,so)}get promise(){var e;return(e=T(this,je))==null?void 0:e.promise}setOptions(e){if(this.options={...T(this,Ps),...e},e!=null&&e._type&&H(this,so,e._type),this.updateGcTime(this.options.gcTime),this.state&&this.state.data===void 0){const r=Qh(this.options);r.data!==void 0&&(this.setState(Gh(r.data,r.dataUpdatedAt)),H(this,dr,r))}}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&T(this,ut).remove(this)}setData(e,r){const o=x1(this.state.data,e,this.options);return Ae(this,Tt,qt).call(this,{data:o,type:"success",dataUpdatedAt:r==null?void 0:r.updatedAt,manual:r==null?void 0:r.manual}),o}setState(e){Ae(this,Tt,qt).call(this,{type:"setState",state:e})}cancel(e){var o,s;const r=(o=T(this,je))==null?void 0:o.promise;return(s=T(this,je))==null||s.cancel(e),r?r.then(ht).catch(ht):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}get resetState(){return T(this,dr)}reset(){this.destroy(),this.setState(this.resetState)}isActive(){return this.observers.some(e=>os(e.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===Gd||!this.isFetched()}isFetched(){return this.state.dataUpdateCount+this.state.errorUpdateCount>0}isStatic(){return this.getObserversCount()>0?this.observers.some(e=>os(e.options.staleTime,this)==="static"):!1}isStale(){return this.getObserversCount()>0?this.observers.some(e=>e.getCurrentResult().isStale):this.state.data===void 0||this.state.isInvalidated}isStaleByTime(e=0){return this.state.data===void 0?!0:e==="static"?!1:this.state.isInvalidated?!0:!f1(this.state.dataUpdatedAt,e)}onFocus(){var e,r;(e=this.observers.find(o=>o.shouldFetchOnWindowFocus()))==null||e.refetch({cancelRefetch:!1}),(r=T(this,je))==null||r.continue()}onOnline(){var e,r;(e=this.observers.find(o=>o.shouldFetchOnReconnect()))==null||e.refetch({cancelRefetch:!1}),(r=T(this,je))==null||r.continue()}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),T(this,ut).notify({type:"observerAdded",query:this,observer:e}))}removeObserver(e){const r=this.observers.indexOf(e);r!==-1&&(this.observers.splice(r,1),this.observers.length||(T(this,je)&&(T(this,hr)||this.state.fetchStatus==="paused"&&this.state.status==="pending"?T(this,je).cancel({revert:!0}):T(this,je).cancelRetry()),this.scheduleGc()),T(this,ut).notify({type:"observerRemoved",query:this,observer:e}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||Ae(this,Tt,qt).call(this,{type:"invalidate"})}async fetch(e,r){var d,u,h,g,p,j,y,w,m,f,x,b;if(this.state.fetchStatus!=="idle"&&((d=T(this,je))==null?void 0:d.status())!=="rejected"){if(this.state.data!==void 0&&(r!=null&&r.cancelRefetch))this.cancel({silent:!0});else if(T(this,je))return T(this,je).continueRetry(),T(this,je).promise}if(e&&this.setOptions(e),!this.options.queryFn){const k=this.observers.find(S=>S.options.queryFn);k&&this.setOptions(k.options)}const o=new AbortController,s=k=>{Object.defineProperty(k,"signal",{enumerable:!0,get:()=>(H(this,hr,!0),o.signal)})},i=()=>{const k=Dx(this.options,r),C=(()=>{const E={client:T(this,ur),queryKey:this.queryKey,meta:this.meta};return s(E),E})();return H(this,hr,!1),this.options.persister?this.options.persister(k,C,this):k(C)},a=(()=>{const k={fetchOptions:r,options:this.options,queryKey:this.queryKey,client:T(this,ur),state:this.state,fetchFn:i};return s(k),k})();(u=T(this,so)==="infinite"?N1(this.options.pages):this.options.behavior)==null||u.onFetch(a,this),H(this,io,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((h=a.fetchOptions)==null?void 0:h.meta))&&Ae(this,Tt,qt).call(this,{type:"fetch",meta:(g=a.fetchOptions)==null?void 0:g.meta});const c=H(this,je,zx({initialPromise:r==null?void 0:r.initialPromise,fn:a.fetchFn,onCancel:k=>{k instanceof Tc&&k.revert&&this.setState({...T(this,io),fetchStatus:"idle"}),o.abort()},onFail:(k,S)=>{Ae(this,Tt,qt).call(this,{type:"failed",failureCount:k,error:S})},onPause:()=>{Ae(this,Tt,qt).call(this,{type:"pause"})},onContinue:()=>{Ae(this,Tt,qt).call(this,{type:"continue"})},retry:a.options.retry,retryDelay:a.options.retryDelay,networkMode:a.options.networkMode,canRun:()=>!0}));try{const k=await c.start();if(k===void 0)throw new Error(`${this.queryHash} data is undefined`);return this.setData(k),(j=(p=T(this,ut).config).onSuccess)==null||j.call(p,k,this),(w=(y=T(this,ut).config).onSettled)==null||w.call(y,k,this.state.error,this),k}catch(k){if(k instanceof Tc){if(k.silent)return T(this,je).promise;if(k.revert){if(this.state.data===void 0)throw k;return this.state.data}}throw Ae(this,Tt,qt).call(this,{type:"error",error:k}),(f=(m=T(this,ut).config).onError)==null||f.call(m,k,this),(b=(x=T(this,ut).config).onSettled)==null||b.call(x,this.state.data,k,this),k}finally{T(this,je)===c&&H(this,je,void 0),this.scheduleGc()}}},so=new WeakMap,dr=new WeakMap,io=new WeakMap,ut=new WeakMap,ur=new WeakMap,je=new WeakMap,Ps=new WeakMap,hr=new WeakMap,Tt=new WeakSet,qt=function(e){const r=o=>{switch(e.type){case"failed":return{...o,fetchFailureCount:e.failureCount,fetchFailureReason:e.error};case"pause":return{...o,fetchStatus:"paused"};case"continue":return{...o,fetchStatus:"fetching"};case"fetch":return{...o,...I1(o.data,this.options),fetchMeta:e.meta??null};case"success":const s={...o,...Gh(e.data,e.dataUpdatedAt),dataUpdateCount:o.dataUpdateCount+1,...!e.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};return H(this,io,e.manual?s:void 0),s;case"error":const i=e.error;return{...o,error:i,errorUpdateCount:o.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:o.fetchFailureCount+1,fetchFailureReason:i,fetchStatus:"idle",status:"error",isInvalidated:!0};case"invalidate":return{...o,isInvalidated:!0};case"setState":return{...o,...e.state}}};this.state=r(this.state),Be.batch(()=>{this.observers.slice().forEach(o=>{o.onQueryUpdate()}),T(this,ut).notify({query:this,type:"updated",action:e})})},Mp);function I1(t,e){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:Wx(e.networkMode)?"fetching":"paused",...t===void 0&&{error:null,status:"pending"}}}function Gh(t,e){return{data:t,dataUpdatedAt:e??Date.now(),error:null,isInvalidated:!1,status:"success"}}function Qh(t){const e=typeof t.initialData=="function"?t.initialData():t.initialData,r=e!==void 0,o=r?typeof t.initialDataUpdatedAt=="function"?t.initialDataUpdatedAt():t.initialDataUpdatedAt:0;return{data:e,dataUpdateCount:0,dataUpdatedAt:r?o??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:r?"success":"pending",fetchStatus:"idle"}}var Es,Lt,_e,pr,Dt,yn,_p,A1=(_p=class extends $x{constructor(e){super();K(this,Dt);K(this,Es);K(this,Lt);K(this,_e);K(this,pr);H(this,Es,e.client),this.mutationId=e.mutationId,H(this,_e,e.mutationCache),H(this,Lt,[]),this.state=e.state||R1(),this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options=e,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(e){T(this,Lt).includes(e)||(T(this,Lt).push(e),this.clearGcTimeout(),T(this,_e).notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){H(this,Lt,T(this,Lt).filter(r=>r!==e)),this.scheduleGc(),T(this,_e).notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){T(this,Lt).length||(this.state.status==="pending"?this.scheduleGc():T(this,_e).remove(this))}continue(){var e;return((e=T(this,pr))==null?void 0:e.continue())??(this.state.status==="pending"?this.execute(this.state.variables):Promise.resolve())}async execute(e){var a,c,d,u,h,g,p,j,y,w,m,f,x,b,k,S,C,E;const r=()=>{Ae(this,Dt,yn).call(this,{type:"continue"})},o={client:T(this,Es),meta:this.options.meta,mutationKey:this.options.mutationKey},s=H(this,pr,zx({fn:()=>this.options.mutationFn?this.options.mutationFn(e,o):Promise.reject(new Error("No mutationFn found")),onFail:(M,I)=>{Ae(this,Dt,yn).call(this,{type:"failed",failureCount:M,error:I})},onPause:()=>{Ae(this,Dt,yn).call(this,{type:"pause"})},onContinue:r,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>T(this,_e).canRun(this)})),i=this.state.status==="pending",l=!s.canStart();try{if(i)r();else{Ae(this,Dt,yn).call(this,{type:"pending",variables:e,isPaused:l}),T(this,_e).config.onMutate&&await T(this,_e).config.onMutate(e,this,o);const I=await((c=(a=this.options).onMutate)==null?void 0:c.call(a,e,o));I!==this.state.context&&Ae(this,Dt,yn).call(this,{type:"pending",context:I,variables:e,isPaused:l})}const M=await s.start();return await((u=(d=T(this,_e).config).onSuccess)==null?void 0:u.call(d,M,e,this.state.context,this,o)),await((g=(h=this.options).onSuccess)==null?void 0:g.call(h,M,e,this.state.context,o)),await((j=(p=T(this,_e).config).onSettled)==null?void 0:j.call(p,M,null,this.state.variables,this.state.context,this,o)),await((w=(y=this.options).onSettled)==null?void 0:w.call(y,M,null,e,this.state.context,o)),Ae(this,Dt,yn).call(this,{type:"success",data:M}),M}catch(M){try{await((f=(m=T(this,_e).config).onError)==null?void 0:f.call(m,M,e,this.state.context,this,o))}catch(I){Promise.reject(I)}try{await((b=(x=this.options).onError)==null?void 0:b.call(x,M,e,this.state.context,o))}catch(I){Promise.reject(I)}try{await((S=(k=T(this,_e).config).onSettled)==null?void 0:S.call(k,void 0,M,this.state.variables,this.state.context,this,o))}catch(I){Promise.reject(I)}try{await((E=(C=this.options).onSettled)==null?void 0:E.call(C,void 0,M,e,this.state.context,o))}catch(I){Promise.reject(I)}throw Ae(this,Dt,yn).call(this,{type:"error",error:M}),M}finally{T(this,pr)===s&&H(this,pr,void 0),T(this,_e).runNext(this)}}},Es=new WeakMap,Lt=new WeakMap,_e=new WeakMap,pr=new WeakMap,Dt=new WeakSet,yn=function(e){const r=o=>{switch(e.type){case"failed":return{...o,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...o,isPaused:!0};case"continue":return{...o,isPaused:!1};case"pending":return{...o,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:e.isPaused,status:"pending",variables:e.variables,submittedAt:Date.now()};case"success":return{...o,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...o,data:void 0,error:e.error,failureCount:o.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"}}};this.state=r(this.state),Be.batch(()=>{T(this,Lt).forEach(o=>{o.onMutationUpdate(e)}),T(this,_e).notify({mutation:this,type:"updated",action:e})})},_p);function R1(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var Qt,Nt,Is,Op,M1=(Op=class extends Rl{constructor(e={}){super();K(this,Qt);K(this,Nt);K(this,Is);this.config=e,H(this,Qt,new Set),H(this,Nt,new Map),H(this,Is,0)}build(e,r,o){const s=new A1({client:e,mutationCache:this,mutationId:++Us(this,Is)._,options:e.defaultMutationOptions(r),state:o});return this.add(s),s}add(e){T(this,Qt).add(e);const r=ui(e);if(typeof r=="string"){const o=T(this,Nt).get(r);o?o.push(e):T(this,Nt).set(r,[e])}this.notify({type:"added",mutation:e})}remove(e){if(T(this,Qt).delete(e)){const r=ui(e);if(typeof r=="string"){const o=T(this,Nt).get(r);if(o)if(o.length>1){const s=o.indexOf(e);s!==-1&&o.splice(s,1)}else o[0]===e&&T(this,Nt).delete(r)}}this.notify({type:"removed",mutation:e})}canRun(e){var o;const r=ui(e);if(typeof r=="string"){const s=(o=T(this,Nt).get(r))==null?void 0:o.find(i=>i.state.status==="pending");return!s||s===e}else return!0}runNext(e){var o,s;const r=ui(e);return typeof r=="string"?((s=(o=T(this,Nt).get(r))==null?void 0:o.find(i=>i!==e&&i.state.isPaused))==null?void 0:s.continue())??Promise.resolve():Promise.resolve()}clear(){Be.batch(()=>{T(this,Qt).forEach(e=>{this.notify({type:"removed",mutation:e})}),T(this,Qt).clear(),T(this,Nt).clear()})}getAll(){return Array.from(T(this,Qt))}find(e){const r={exact:!0,...e};return this.getAll().find(o=>Uh(r,o))}findAll(e={}){return this.getAll().filter(r=>Uh(e,r))}notify(e){Be.batch(()=>{this.listeners.forEach(r=>{r(e)})})}resumePausedMutations(){const e=this.getAll().filter(r=>r.state.isPaused);return Be.batch(()=>Promise.all(e.map(r=>r.continue().catch(ht))))}},Qt=new WeakMap,Nt=new WeakMap,Is=new WeakMap,Op);function ui(t){var e;return(e=t.options.scope)==null?void 0:e.id}var Ft,Lp,_1=(Lp=class extends Rl{constructor(e={}){super();K(this,Ft);this.config=e,H(this,Ft,new Map)}build(e,r,o){const s=r.queryKey,i=r.queryHash??Jd(s,r);let l=this.get(i);return l||(l=new E1({client:e,queryKey:s,queryHash:i,options:e.defaultQueryOptions(r),state:o,defaultOptions:e.getQueryDefaults(s)}),this.add(l)),l}add(e){T(this,Ft).has(e.queryHash)||(T(this,Ft).set(e.queryHash,e),this.notify({type:"added",query:e}))}remove(e){T(this,Ft).get(e.queryHash)===e&&(e.destroy(),T(this,Ft).delete(e.queryHash),this.notify({type:"removed",query:e}))}clear(){Be.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return T(this,Ft).get(e)}getAll(){return[...T(this,Ft).values()]}find(e){const r={exact:!0,...e};return this.getAll().find(o=>Hh(r,o))}findAll(e={}){const r=this.getAll();return Object.keys(e).length>0?r.filter(o=>Hh(e,o)):r}notify(e){Be.batch(()=>{this.listeners.forEach(r=>{r(e)})})}onFocus(){Be.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){Be.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}},Ft=new WeakMap,Lp),de,Nn,Pn,lo,ao,En,co,uo,Dp,O1=(Dp=class{constructor(t={}){K(this,de);K(this,Nn);K(this,Pn);K(this,lo);K(this,ao);K(this,En);K(this,co);K(this,uo);H(this,de,t.queryCache||new _1),H(this,Nn,t.mutationCache||new M1),H(this,Pn,t.defaultOptions||{}),H(this,lo,new Map),H(this,ao,new Map),H(this,En,0)}mount(){Us(this,En)._++,T(this,En)===1&&(H(this,co,Bx.subscribe(async t=>{t&&(await this.resumePausedMutations(),T(this,de).onFocus())})),H(this,uo,ll.subscribe(async t=>{t&&(await this.resumePausedMutations(),T(this,de).onOnline())})))}unmount(){var t,e;Us(this,En)._--,T(this,En)===0&&((t=T(this,co))==null||t.call(this),H(this,co,void 0),(e=T(this,uo))==null||e.call(this),H(this,uo,void 0))}isFetching(t){return T(this,de).findAll({...t,fetchStatus:"fetching"}).length}isMutating(t){return T(this,Nn).findAll({...t,status:"pending"}).length}getQueryData(t){var r;const e=this.defaultQueryOptions({queryKey:t});return(r=T(this,de).get(e.queryHash))==null?void 0:r.state.data}ensureQueryData(t){const e=this.defaultQueryOptions(t),r=T(this,de).build(this,e),o=r.state.data;return o===void 0?this.fetchQuery(t):(t.revalidateIfStale&&r.isStaleByTime(os(e.staleTime,r))&&this.prefetchQuery(e),Promise.resolve(o))}getQueriesData(t){return T(this,de).findAll(t).map(({queryKey:e,state:r})=>[e,r.data])}setQueryData(t,e,r){var l;const o=this.defaultQueryOptions({queryKey:t}),s=(l=T(this,de).get(o.queryHash))==null?void 0:l.state.data,i=h1(e,s);if(i!==void 0)return T(this,de).build(this,o).setData(i,{...r,manual:!0})}setQueriesData(t,e,r){return Be.batch(()=>T(this,de).findAll(t).map(({queryKey:o})=>[o,this.setQueryData(o,e,r)]))}getQueryState(t){var r;const e=this.defaultQueryOptions({queryKey:t});return(r=T(this,de).get(e.queryHash))==null?void 0:r.state}removeQueries(t){const e=T(this,de);Be.batch(()=>{e.findAll(t).forEach(r=>{e.remove(r)})})}resetQueries(t,e){const r=T(this,de);return Be.batch(()=>{const o=r.findAll(t),s=new Set(o);return o.forEach(i=>{i.reset()}),this.refetchQueries({type:"active",predicate:i=>s.has(i)},e)})}cancelQueries(t,e={}){const r={revert:!0,...e},o=Be.batch(()=>T(this,de).findAll(t).map(s=>s.cancel(r)));return Promise.all(o).then(ht).catch(ht)}invalidateQueries(t,e={}){return Be.batch(()=>(T(this,de).findAll(t).forEach(r=>{r.invalidate()}),(t==null?void 0:t.refetchType)==="none"?Promise.resolve():this.refetchQueries({...t,type:(t==null?void 0:t.refetchType)??(t==null?void 0:t.type)??"active"},e)))}refetchQueries(t,e={}){const r={...e,cancelRefetch:e.cancelRefetch??!0},o=Be.batch(()=>T(this,de).findAll(t).filter(s=>!s.isDisabled()&&!s.isStatic()).map(s=>{let i=s.fetch(void 0,r);return r.throwOnError||(i=i.catch(ht)),s.state.fetchStatus==="paused"?Promise.resolve():i}));return Promise.all(o).then(ht)}async query(t){const e=this.defaultQueryOptions(t);e.retry===void 0&&(e.retry=!1);const r=T(this,de).build(this,e),o=r.isStaleByTime(os(e.staleTime,r))?await r.fetch(e):r.state.data,s=e.select;return s?s(o):o}fetchQuery(t){const e=this.defaultQueryOptions(t);e.retry===void 0&&(e.retry=!1);const r=T(this,de).build(this,e);return r.isStaleByTime(os(e.staleTime,r))?r.fetch(e):Promise.resolve(r.state.data)}prefetchQuery(t){return this.fetchQuery(t).then(ht).catch(ht)}infiniteQuery(t){return t._type="infinite",this.query(t)}fetchInfiniteQuery(t){return t._type="infinite",this.fetchQuery(t)}prefetchInfiniteQuery(t){return this.fetchInfiniteQuery(t).then(ht).catch(ht)}ensureInfiniteQueryData(t){return t._type="infinite",this.ensureQueryData(t)}resumePausedMutations(){return ll.isOnline()?T(this,Nn).resumePausedMutations():Promise.resolve()}getQueryCache(){return T(this,de)}getMutationCache(){return T(this,Nn)}getDefaultOptions(){return T(this,Pn)}setDefaultOptions(t){H(this,Pn,t)}setQueryDefaults(t,e){T(this,lo).set(Cs(t),{queryKey:t,defaultOptions:e})}getQueryDefaults(t){const e=[...T(this,lo).values()],r={};return e.forEach(o=>{yo(t,o.queryKey)&&Object.assign(r,o.defaultOptions)}),r}setMutationDefaults(t,e){T(this,ao).set(Cs(t),{mutationKey:t,defaultOptions:e})}getMutationDefaults(t){const e=[...T(this,ao).values()],r={};return e.forEach(o=>{yo(t,o.mutationKey)&&Object.assign(r,o.defaultOptions)}),r}defaultQueryOptions(t){if(t._defaulted)return t;const e={...T(this,Pn).queries,...this.getQueryDefaults(t.queryKey),...t,_defaulted:!0};return e.queryHash||(e.queryHash=Jd(e.queryKey,e)),e.refetchOnReconnect===void 0&&(e.refetchOnReconnect=e.networkMode!=="always"),e.throwOnError===void 0&&(e.throwOnError=!!e.suspense),!e.networkMode&&e.persister&&(e.networkMode="offlineFirst"),e.queryFn===Gd&&(e.enabled=!1),e}defaultMutationOptions(t){return t!=null&&t._defaulted?t:{...T(this,Pn).mutations,...(t==null?void 0:t.mutationKey)&&this.getMutationDefaults(t.mutationKey),...t,_defaulted:!0}}clear(){T(this,de).clear(),T(this,Nn).clear()}},de=new WeakMap,Nn=new WeakMap,Pn=new WeakMap,lo=new WeakMap,ao=new WeakMap,En=new WeakMap,co=new WeakMap,uo=new WeakMap,Dp);/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ts(){return Ts=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)({}).hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},Ts.apply(null,arguments)}var Rn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Rn||(Rn={}));const Kh="popstate";function L1(t){t===void 0&&(t={});function e(o,s){let{pathname:i,search:l,hash:a}=o.location;return Nc("",{pathname:i,search:l,hash:a},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function r(o,s){return typeof s=="string"?s:al(s)}return F1(e,r,null,t)}function ve(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Hx(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function D1(){return Math.random().toString(36).substr(2,8)}function Xh(t,e){return{usr:t.state,key:t.key,idx:e}}function Nc(t,e,r,o){return r===void 0&&(r=null),Ts({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Eo(e):e,{state:r,key:e&&e.key||o||D1()})}function al(t){let{pathname:e="/",search:r="",hash:o=""}=t;return r&&r!=="?"&&(e+=r.charAt(0)==="?"?r:"?"+r),o&&o!=="#"&&(e+=o.charAt(0)==="#"?o:"#"+o),e}function Eo(t){let e={};if(t){let r=t.indexOf("#");r>=0&&(e.hash=t.substr(r),t=t.substr(0,r));let o=t.indexOf("?");o>=0&&(e.search=t.substr(o),t=t.substr(0,o)),t&&(e.pathname=t)}return e}function F1(t,e,r,o){o===void 0&&(o={});let{window:s=document.defaultView,v5Compat:i=!1}=o,l=s.history,a=Rn.Pop,c=null,d=u();d==null&&(d=0,l.replaceState(Ts({},l.state,{idx:d}),""));function u(){return(l.state||{idx:null}).idx}function h(){a=Rn.Pop;let w=u(),m=w==null?null:w-d;d=w,c&&c({action:a,location:y.location,delta:m})}function g(w,m){a=Rn.Push;let f=Nc(y.location,w,m);d=u()+1;let x=Xh(f,d),b=y.createHref(f);try{l.pushState(x,"",b)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;s.location.assign(b)}i&&c&&c({action:a,location:y.location,delta:1})}function p(w,m){a=Rn.Replace;let f=Nc(y.location,w,m);d=u();let x=Xh(f,d),b=y.createHref(f);l.replaceState(x,"",b),i&&c&&c({action:a,location:y.location,delta:0})}function j(w){let m=s.location.origin!=="null"?s.location.origin:s.location.href,f=typeof w=="string"?w:al(w);return f=f.replace(/ $/,"%20"),ve(m,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,m)}let y={get action(){return a},get location(){return t(s,l)},listen(w){if(c)throw new Error("A history only accepts one active listener");return s.addEventListener(Kh,h),c=w,()=>{s.removeEventListener(Kh,h),c=null}},createHref(w){return e(s,w)},createURL:j,encodeLocation(w){let m=j(w);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:g,replace:p,go(w){return l.go(w)}};return y}var Yh;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Yh||(Yh={}));function B1(t,e,r){return r===void 0&&(r="/"),W1(t,e,r)}function W1(t,e,r,o){let s=typeof e=="string"?Eo(e):e,i=Qd(s.pathname||"/",r);if(i==null)return null;let l=Ux(t);z1(l);let a=null,c=Z1(i);for(let d=0;a==null&&d<l.length;++d)a=K1(l[d],c);return a}function Ux(t,e,r,o){e===void 0&&(e=[]),r===void 0&&(r=[]),o===void 0&&(o="");let s=(i,l,a)=>{let c={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:l,route:i};c.relativePath.startsWith("/")&&(ve(c.relativePath.startsWith(o),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+o+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(o.length));let d=zn([o,c.relativePath]),u=r.concat(c);i.children&&i.children.length>0&&(ve(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),Ux(i.children,e,u,d)),!(i.path==null&&!i.index)&&e.push({path:d,score:G1(d,i.index),routesMeta:u})};return t.forEach((i,l)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))s(i,l);else for(let c of Vx(i.path))s(i,l,c)}),e}function Vx(t){let e=t.split("/");if(e.length===0)return[];let[r,...o]=e,s=r.endsWith("?"),i=r.replace(/\?$/,"");if(o.length===0)return s?[i,""]:[i];let l=Vx(o.join("/")),a=[];return a.push(...l.map(c=>c===""?i:[i,c].join("/"))),s&&a.push(...l),a.map(c=>t.startsWith("/")&&c===""?"/":c)}function z1(t){t.sort((e,r)=>e.score!==r.score?r.score-e.score:Q1(e.routesMeta.map(o=>o.childrenIndex),r.routesMeta.map(o=>o.childrenIndex)))}const $1=/^:[\w-]+$/,H1=3,U1=2,V1=1,q1=10,J1=-2,Zh=t=>t==="*";function G1(t,e){let r=t.split("/"),o=r.length;return r.some(Zh)&&(o+=J1),e&&(o+=U1),r.filter(s=>!Zh(s)).reduce((s,i)=>s+($1.test(i)?H1:i===""?V1:q1),o)}function Q1(t,e){return t.length===e.length&&t.slice(0,-1).every((o,s)=>o===e[s])?t[t.length-1]-e[e.length-1]:0}function K1(t,e,r){let{routesMeta:o}=t,s={},i="/",l=[];for(let a=0;a<o.length;++a){let c=o[a],d=a===o.length-1,u=i==="/"?e:e.slice(i.length)||"/",h=X1({path:c.relativePath,caseSensitive:c.caseSensitive,end:d},u),g=c.route;if(!h)return null;Object.assign(s,h.params),l.push({params:s,pathname:zn([i,h.pathname]),pathnameBase:nS(zn([i,h.pathnameBase])),route:g}),h.pathnameBase!=="/"&&(i=zn([i,h.pathnameBase]))}return l}function X1(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[r,o]=Y1(t.path,t.caseSensitive,t.end),s=e.match(r);if(!s)return null;let i=s[0],l=i.replace(/(.)\/+$/,"$1"),a=s.slice(1);return{params:o.reduce((d,u,h)=>{let{paramName:g,isOptional:p}=u;if(g==="*"){let y=a[h]||"";l=i.slice(0,i.length-y.length).replace(/(.)\/+$/,"$1")}const j=a[h];return p&&!j?d[g]=void 0:d[g]=(j||"").replace(/%2F/g,"/"),d},{}),pathname:i,pathnameBase:l,pattern:t}}function Y1(t,e,r){e===void 0&&(e=!1),r===void 0&&(r=!0),Hx(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let o=[],s="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,a,c)=>(o.push({paramName:a,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(o.push({paramName:"*"}),s+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?s+="\\/*$":t!==""&&t!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),o]}function Z1(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Hx(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Qd(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let r=e.endsWith("/")?e.length-1:e.length,o=t.charAt(r);return o&&o!=="/"?null:t.slice(r)||"/"}function eS(t,e){e===void 0&&(e="/");let{pathname:r,search:o="",hash:s=""}=typeof t=="string"?Eo(t):t,i;return r?(r=Gx(r),r.startsWith("/")?i=ep(r.substring(1),"/"):i=ep(r,e)):i=e,{pathname:i,search:rS(o),hash:oS(s)}}function ep(t,e){let r=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(s=>{s===".."?r.length>1&&r.pop():s!=="."&&r.push(s)}),r.length>1?r.join("/"):"/"}function ga(t,e,r,o){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(o)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function tS(t){return t.filter((e,r)=>r===0||e.route.path&&e.route.path.length>0)}function qx(t,e){let r=tS(t);return e?r.map((o,s)=>s===r.length-1?o.pathname:o.pathnameBase):r.map(o=>o.pathnameBase)}function Jx(t,e,r,o){o===void 0&&(o=!1);let s;typeof t=="string"?s=Eo(t):(s=Ts({},t),ve(!s.pathname||!s.pathname.includes("?"),ga("?","pathname","search",s)),ve(!s.pathname||!s.pathname.includes("#"),ga("#","pathname","hash",s)),ve(!s.search||!s.search.includes("#"),ga("#","search","hash",s)));let i=t===""||s.pathname==="",l=i?"/":s.pathname,a;if(l==null)a=r;else{let h=e.length-1;if(!o&&l.startsWith("..")){let g=l.split("/");for(;g[0]==="..";)g.shift(),h-=1;s.pathname=g.join("/")}a=h>=0?e[h]:"/"}let c=eS(s,a),d=l&&l!=="/"&&l.endsWith("/"),u=(i||l===".")&&r.endsWith("/");return!c.pathname.endsWith("/")&&(d||u)&&(c.pathname+="/"),c}const Gx=t=>t.replace(/\/\/+/g,"/"),zn=t=>Gx(t.join("/")),nS=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),rS=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,oS=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function sS(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Qx=["post","put","patch","delete"];new Set(Qx);const iS=["get",...Qx];new Set(iS);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ns(){return Ns=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)({}).hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},Ns.apply(null,arguments)}const Kd=v.createContext(null),lS=v.createContext(null),Nr=v.createContext(null),Ml=v.createContext(null),Kn=v.createContext({outlet:null,matches:[],isDataRoute:!1}),Kx=v.createContext(null);function aS(t,e){let{relative:r}=e===void 0?{}:e;Ds()||ve(!1);let{basename:o,navigator:s}=v.useContext(Nr),{hash:i,pathname:l,search:a}=Yx(t,{relative:r}),c=l;return o!=="/"&&(c=l==="/"?o:zn([o,l])),s.createHref({pathname:c,search:a,hash:i})}function Ds(){return v.useContext(Ml)!=null}function Fs(){return Ds()||ve(!1),v.useContext(Ml).location}function Xx(t){v.useContext(Nr).static||v.useLayoutEffect(t)}function cS(){let{isDataRoute:t}=v.useContext(Kn);return t?kS():dS()}function dS(){Ds()||ve(!1);let t=v.useContext(Kd),{basename:e,future:r,navigator:o}=v.useContext(Nr),{matches:s}=v.useContext(Kn),{pathname:i}=Fs(),l=JSON.stringify(qx(s,r.v7_relativeSplatPath)),a=v.useRef(!1);return Xx(()=>{a.current=!0}),v.useCallback(function(d,u){if(u===void 0&&(u={}),!a.current)return;if(typeof d=="number"){o.go(d);return}let h=Jx(d,JSON.parse(l),i,u.relative==="path");t==null&&e!=="/"&&(h.pathname=h.pathname==="/"?e:zn([e,h.pathname])),(u.replace?o.replace:o.push)(h,u.state,u)},[e,o,l,i,t])}function uS(){let{matches:t}=v.useContext(Kn),e=t[t.length-1];return e?e.params:{}}function Yx(t,e){let{relative:r}=e===void 0?{}:e,{future:o}=v.useContext(Nr),{matches:s}=v.useContext(Kn),{pathname:i}=Fs(),l=JSON.stringify(qx(s,o.v7_relativeSplatPath));return v.useMemo(()=>Jx(t,JSON.parse(l),i,r==="path"),[t,l,i,r])}function hS(t,e){return pS(t,e)}function pS(t,e,r,o){Ds()||ve(!1);let{navigator:s}=v.useContext(Nr),{matches:i}=v.useContext(Kn),l=i[i.length-1],a=l?l.params:{};l&&l.pathname;let c=l?l.pathnameBase:"/";l&&l.route;let d=Fs(),u;if(e){var h;let w=typeof e=="string"?Eo(e):e;c==="/"||(h=w.pathname)!=null&&h.startsWith(c)||ve(!1),u=w}else u=d;let g=u.pathname||"/",p=g;if(c!=="/"){let w=c.replace(/^\//,"").split("/");p="/"+g.replace(/^\//,"").split("/").slice(w.length).join("/")}let j=B1(t,{pathname:p}),y=vS(j&&j.map(w=>Object.assign({},w,{params:Object.assign({},a,w.params),pathname:zn([c,s.encodeLocation?s.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?c:zn([c,s.encodeLocation?s.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),i,r,o);return e&&y?v.createElement(Ml.Provider,{value:{location:Ns({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Rn.Pop}},y):y}function fS(){let t=bS(),e=sS(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),r=t instanceof Error?t.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return v.createElement(v.Fragment,null,v.createElement("h2",null,"Unexpected Application Error!"),v.createElement("h3",{style:{fontStyle:"italic"}},e),r?v.createElement("pre",{style:s},r):null,null)}const mS=v.createElement(fS,null);class gS extends v.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,r){return r.location!==e.location||r.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:r.error,location:r.location,revalidation:e.revalidation||r.revalidation}}componentDidCatch(e,r){console.error("React Router caught the following error during render",e,r)}render(){return this.state.error!==void 0?v.createElement(Kn.Provider,{value:this.props.routeContext},v.createElement(Kx.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function xS(t){let{routeContext:e,match:r,children:o}=t,s=v.useContext(Kd);return s&&s.static&&s.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=r.route.id),v.createElement(Kn.Provider,{value:e},o)}function vS(t,e,r,o){var s;if(e===void 0&&(e=[]),r===void 0&&(r=null),o===void 0&&(o=null),t==null){var i;if(!r)return null;if(r.errors)t=r.matches;else if((i=o)!=null&&i.v7_partialHydration&&e.length===0&&!r.initialized&&r.matches.length>0)t=r.matches;else return null}let l=t,a=(s=r)==null?void 0:s.errors;if(a!=null){let u=l.findIndex(h=>h.route.id&&(a==null?void 0:a[h.route.id])!==void 0);u>=0||ve(!1),l=l.slice(0,Math.min(l.length,u+1))}let c=!1,d=-1;if(r&&o&&o.v7_partialHydration)for(let u=0;u<l.length;u++){let h=l[u];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(d=u),h.route.id){let{loaderData:g,errors:p}=r,j=h.route.loader&&g[h.route.id]===void 0&&(!p||p[h.route.id]===void 0);if(h.route.lazy||j){c=!0,d>=0?l=l.slice(0,d+1):l=[l[0]];break}}}return l.reduceRight((u,h,g)=>{let p,j=!1,y=null,w=null;r&&(p=a&&h.route.id?a[h.route.id]:void 0,y=h.route.errorElement||mS,c&&(d<0&&g===0?(SS("route-fallback"),j=!0,w=null):d===g&&(j=!0,w=h.route.hydrateFallbackElement||null)));let m=e.concat(l.slice(0,g+1)),f=()=>{let x;return p?x=y:j?x=w:h.route.Component?x=v.createElement(h.route.Component,null):h.route.element?x=h.route.element:x=u,v.createElement(xS,{match:h,routeContext:{outlet:u,matches:m,isDataRoute:r!=null},children:x})};return r&&(h.route.ErrorBoundary||h.route.errorElement||g===0)?v.createElement(gS,{location:r.location,revalidation:r.revalidation,component:y,error:p,children:f(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):f()},null)}var Zx=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Zx||{}),ev=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(ev||{});function yS(t){let e=v.useContext(Kd);return e||ve(!1),e}function jS(t){let e=v.useContext(lS);return e||ve(!1),e}function wS(t){let e=v.useContext(Kn);return e||ve(!1),e}function tv(t){let e=wS(),r=e.matches[e.matches.length-1];return r.route.id||ve(!1),r.route.id}function bS(){var t;let e=v.useContext(Kx),r=jS(),o=tv();return e!==void 0?e:(t=r.errors)==null?void 0:t[o]}function kS(){let{router:t}=yS(Zx.UseNavigateStable),e=tv(ev.UseNavigateStable),r=v.useRef(!1);return Xx(()=>{r.current=!0}),v.useCallback(function(s,i){i===void 0&&(i={}),r.current&&(typeof s=="number"?t.navigate(s):t.navigate(s,Ns({fromRouteId:e},i)))},[t,e])}const tp={};function SS(t,e,r){tp[t]||(tp[t]=!0)}function CS(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function Ai(t){ve(!1)}function TS(t){let{basename:e="/",children:r=null,location:o,navigationType:s=Rn.Pop,navigator:i,static:l=!1,future:a}=t;Ds()&&ve(!1);let c=e.replace(/^\/*/,"/"),d=v.useMemo(()=>({basename:c,navigator:i,static:l,future:Ns({v7_relativeSplatPath:!1},a)}),[c,a,i,l]);typeof o=="string"&&(o=Eo(o));let{pathname:u="/",search:h="",hash:g="",state:p=null,key:j="default"}=o,y=v.useMemo(()=>{let w=Qd(u,c);return w==null?null:{location:{pathname:w,search:h,hash:g,state:p,key:j},navigationType:s}},[c,u,h,g,p,j,s]);return y==null?null:v.createElement(Nr.Provider,{value:d},v.createElement(Ml.Provider,{children:r,value:y}))}function NS(t){let{children:e,location:r}=t;return hS(Pc(e),r)}new Promise(()=>{});function Pc(t,e){e===void 0&&(e=[]);let r=[];return v.Children.forEach(t,(o,s)=>{if(!v.isValidElement(o))return;let i=[...e,s];if(o.type===v.Fragment){r.push.apply(r,Pc(o.props.children,i));return}o.type!==Ai&&ve(!1),!o.props.index||!o.props.children||ve(!1);let l={id:o.props.id||i.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,loader:o.props.loader,action:o.props.action,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(l.children=Pc(o.props.children,i)),r.push(l)}),r}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ec(){return Ec=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)({}).hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},Ec.apply(null,arguments)}function PS(t,e){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(e.indexOf(o)!==-1)continue;r[o]=t[o]}return r}function ES(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function IS(t,e){return t.button===0&&(!e||e==="_self")&&!ES(t)}const AS=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],RS="6";try{window.__reactRouterVersion=RS}catch{}const MS="startTransition",np=Sr[MS];function _S(t){let{basename:e,children:r,future:o,window:s}=t,i=v.useRef();i.current==null&&(i.current=L1({window:s,v5Compat:!0}));let l=i.current,[a,c]=v.useState({action:l.action,location:l.location}),{v7_startTransition:d}=o||{},u=v.useCallback(h=>{d&&np?np(()=>c(h)):c(h)},[c,d]);return v.useLayoutEffect(()=>l.listen(u),[l,u]),v.useEffect(()=>CS(o),[o]),v.createElement(TS,{basename:e,children:r,location:a.location,navigationType:a.action,navigator:l,future:o})}const OS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",LS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ic=v.forwardRef(function(e,r){let{onClick:o,relative:s,reloadDocument:i,replace:l,state:a,target:c,to:d,preventScrollReset:u,viewTransition:h}=e,g=PS(e,AS),{basename:p}=v.useContext(Nr),j,y=!1;if(typeof d=="string"&&LS.test(d)&&(j=d,OS))try{let x=new URL(window.location.href),b=d.startsWith("//")?new URL(x.protocol+d):new URL(d),k=Qd(b.pathname,p);b.origin===x.origin&&k!=null?d=k+b.search+b.hash:y=!0}catch{}let w=aS(d,{relative:s}),m=DS(d,{replace:l,state:a,target:c,preventScrollReset:u,relative:s,viewTransition:h});function f(x){o&&o(x),x.defaultPrevented||m(x)}return v.createElement("a",Ec({},g,{href:j||w,onClick:y||i?o:f,ref:r,target:c}))});var rp;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(rp||(rp={}));var op;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(op||(op={}));function DS(t,e){let{target:r,replace:o,state:s,preventScrollReset:i,relative:l,viewTransition:a}=e===void 0?{}:e,c=cS(),d=Fs(),u=Yx(t,{relative:l});return v.useCallback(h=>{if(IS(h,r)){h.preventDefault();let g=o!==void 0?o:al(d)===al(u);c(t,{replace:g,state:s,preventScrollReset:i,relative:l,viewTransition:a})}},[d,c,u,o,s,r,t,i,l,a])}const FS=Ld("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function nv({className:t,variant:e,...r}){return n.jsx("div",{className:Ue(FS({variant:e}),t),...r})}const BS=()=>n.jsxs("section",{className:"relative overflow-hidden py-20 px-6",children:[n.jsx("div",{className:"absolute inset-0 gradient-hero opacity-10"}),n.jsxs("div",{className:"relative max-w-4xl mx-auto text-center animate-fade-in",children:[n.jsx("div",{className:"flex justify-center mb-6",children:n.jsx(nv,{variant:"secondary",className:"px-4 py-2 text-sm font-medium",children:"Developer Blog"})}),n.jsx("h1",{className:"font-playfair text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight",children:"Namita Malik"}),n.jsxs("div",{className:"flex items-center justify-center gap-6 text-xl text-muted-foreground mb-8 font-medium",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx(Zw,{className:"h-5 w-5 text-primary"}),n.jsx("span",{children:"Learn."})]}),n.jsx("div",{className:"w-1 h-1 bg-muted-foreground rounded-full"}),n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx(lb,{className:"h-5 w-5 text-primary"}),n.jsx("span",{children:"Think."})]}),n.jsx("div",{className:"w-1 h-1 bg-muted-foreground rounded-full"}),n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx(cb,{className:"h-5 w-5 text-primary"}),n.jsx("span",{children:"Engineer."})]}),n.jsx("div",{className:"w-1 h-1 bg-muted-foreground rounded-full"}),n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx(Jg,{className:"h-5 w-5 text-primary"}),n.jsx("span",{children:"Share."})]})]}),n.jsx("p",{className:"text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8",children:"Writing about software engineering, architecture, systems thinking, and modern web development."}),n.jsxs("div",{className:"flex items-center justify-center gap-6",children:[n.jsx("a",{href:"https://github.com/namitamalik",target:"_blank",rel:"noopener noreferrer",className:"p-3 rounded-full border border-border/50 hover:border-primary/50 hover:bg-accent/10 transition-smooth group","aria-label":"GitHub Profile",children:n.jsx(Vg,{className:"h-5 w-5 text-muted-foreground group-hover:text-primary transition-smooth"})}),n.jsx("a",{href:"https://twitter.com/nm_1304",target:"_blank",rel:"noopener noreferrer",className:"p-3 rounded-full border border-border/50 hover:border-primary/50 hover:bg-accent/10 transition-smooth group","aria-label":"Twitter Profile",children:n.jsx(Gg,{className:"h-5 w-5 text-muted-foreground group-hover:text-primary transition-smooth"})}),n.jsx("a",{href:"https://linkedin.com/in/namitamalik",target:"_blank",rel:"noopener noreferrer",className:"p-3 rounded-full border border-border/50 hover:border-primary/50 hover:bg-accent/10 transition-smooth group","aria-label":"LinkedIn Profile",children:n.jsx(qg,{className:"h-5 w-5 text-muted-foreground group-hover:text-primary transition-smooth"})})]})]})]}),rv=v.forwardRef(({className:t,...e},r)=>n.jsx("div",{ref:r,className:Ue("rounded-lg border bg-card text-card-foreground shadow-sm",t),...e}));rv.displayName="Card";const ov=v.forwardRef(({className:t,...e},r)=>n.jsx("div",{ref:r,className:Ue("flex flex-col space-y-1.5 p-6",t),...e}));ov.displayName="CardHeader";const sv=v.forwardRef(({className:t,...e},r)=>n.jsx("h3",{ref:r,className:Ue("text-2xl font-semibold leading-none tracking-tight",t),...e}));sv.displayName="CardTitle";const WS=v.forwardRef(({className:t,...e},r)=>n.jsx("p",{ref:r,className:Ue("text-sm text-muted-foreground",t),...e}));WS.displayName="CardDescription";const iv=v.forwardRef(({className:t,...e},r)=>n.jsx("div",{ref:r,className:Ue("p-6 pt-0",t),...e}));iv.displayName="CardContent";const zS=v.forwardRef(({className:t,...e},r)=>n.jsx("div",{ref:r,className:Ue("flex items-center p-6 pt-0",t),...e}));zS.displayName="CardFooter";const $S=({category:t,posts:e,icon:r,description:o})=>n.jsxs(rv,{className:"gradient-card shadow-card transition-smooth hover:shadow-elegant hover:scale-[1.02] group",children:[n.jsxs(ov,{className:"pb-4",children:[n.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[r&&n.jsx("div",{className:"text-primary",children:r}),n.jsx(sv,{className:"font-playfair text-xl text-primary group-hover:text-accent transition-smooth",children:t})]}),o&&n.jsx("p",{className:"text-muted-foreground text-sm leading-relaxed",children:o}),n.jsxs(nv,{variant:"secondary",className:"w-fit",children:[e.length," ",e.length===1?"post":"posts"]})]}),n.jsx(iv,{className:"space-y-3",children:e.map((s,i)=>s.url.startsWith("http")?n.jsxs("a",{href:s.url,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 p-3 rounded-lg border border-border/50 hover:border-primary/30 hover:bg-accent/10 transition-smooth group/link",children:[n.jsx("div",{className:"flex-1",children:n.jsx("h4",{className:"font-medium text-sm leading-snug text-foreground group-hover/link:text-primary transition-smooth",children:s.title})}),n.jsx(rb,{className:"h-4 w-4 text-muted-foreground group-hover/link:text-primary transition-smooth"})]},i):n.jsxs(Ic,{to:s.url,className:"flex items-center gap-2 p-3 rounded-lg border border-border/50 hover:border-primary/30 hover:bg-accent/10 transition-smooth group/link",children:[n.jsx("div",{className:"flex-1",children:n.jsx("h4",{className:"font-medium text-sm leading-snug text-foreground group-hover/link:text-primary transition-smooth",children:s.title})}),n.jsx(Yw,{className:"h-4 w-4 text-muted-foreground group-hover/link:text-primary transition-smooth"})]},i))})]}),HS=()=>{const t=[{category:"Leadership",icon:n.jsx(sb,{className:"h-6 w-6"}),description:"Reflections on leadership, culture, and the people who shape how we work.",posts:[{title:"Kindness, Firmness, and the Safety to Make Mistakes",url:"/kindness-firmness-and-the-safety-to-make-mistakes/",category:"Leadership"}]},{category:"AI & Engineering",icon:n.jsx(eb,{className:"h-6 w-6"}),description:"Reflections on AI, software engineering practice, and the craft beyond coding.",posts:[{title:"AI Solved Execution. Coordination Is the Next Bottleneck.",url:"/ai-solved-execution-coordination-is-the-next-bottleneck/",category:"AI & Engineering"},{title:"AI Killed Coding, Not Software Engineering",url:"/ai-killed-coding-not-software-engineering/",category:"AI & Engineering"}]},{category:"RxJS",icon:n.jsx(ub,{className:"h-6 w-6"}),description:"Reactive programming with RxJS - operators, patterns, and real-world applications.",posts:[{title:"skipWhile vs filter in RxJS",url:"/skipwhile-vs-filter-in-rxjs/",category:"RxJS"},{title:"throttleTime vs debounceTime",url:"/throttletime-vs-debouncetime-in-rxjs/",category:"RxJS"},{title:"Map vs FlatMap",url:"/map-vs-flatmap/",category:"RxJS"}]},{category:"Angular",icon:n.jsx(ib,{className:"h-6 w-6"}),description:"Modern Angular development patterns, best practices, and advanced techniques.",posts:[{title:"Conditionally Loading modules in Angular",url:"/loading-modules-conditionally-in-angular/",category:"Angular(2+)"},{title:"Lazy Loading with Angular2 Routing",url:"/lazy-loading-with-angular2-routing/",category:"Angular(2+)"},{title:"Realtime Update in Angular2",url:"/realtime-update-in-angular2/",category:"Angular(2+)"},{title:"Fetching Data in Angular2",url:"/fetching-data-in-angular2/",category:"Angular(2+)"},{title:"ViewChild in Angular2",url:"/viewchild-in-angular2/",category:"Angular(2+)"},{title:"Services In Angular2",url:"/services-in-angular2/",category:"Angular(2+)"},{title:"NgRepeat vs ngFor",url:"/ngrepeat-vs-ngfor/",category:"Angular(2+)"}]},{category:"JavaScript (ES6+)",icon:n.jsx(ob,{className:"h-6 w-6"}),description:"Modern JavaScript features, ES6+ syntax, and functional programming concepts.",posts:[{title:"Spread & Rest Operator in ES6",url:"/spread-and-rest-operator-in-es6/",category:"ECMA6"},{title:"for..of loop in ES6",url:"/for-of-in-ecma6/",category:"ECMA6"}]},{category:"JavaScript Fundamentals",icon:n.jsx(tb,{className:"h-6 w-6"}),description:"Core JavaScript concepts, prototypes, inheritance, and fundamental patterns.",posts:[{title:"Prototype in Javascript",url:"/prototype-in-javascript/",category:"JavaScript"},{title:"Inheritance in JavaScript",url:"/inheritance-in-javascript/",category:"JavaScript"},{title:"JavaScript Inheritance Revisited",url:"/javascript-inheritance-revisited/",category:"JavaScript"},{title:"2 Way Data Binding in Plain Vanilla JavaScript",url:"/2-way-data-binding-in-plain-vanilla-javascript/",category:"JavaScript"},{title:"Hoisting in JavaScript",url:"/hoisting/",category:"JavaScript"}]},{category:"Data Structures",icon:n.jsx(nb,{className:"h-6 w-6"}),description:"Implementation of fundamental data structures and algorithms in JavaScript.",posts:[{title:"Linked List in Javascript",url:"/linked-list-in-javascript/",category:"Data Structures"}]},{category:"AngularJS (Legacy)",icon:n.jsx(ab,{className:"h-6 w-6"}),description:"AngularJS 1.x patterns, testing strategies, and migration insights.",posts:[{title:"Editing JavaScript Object using AngularJS",url:"/editing-javascript-object-using-angularjs/",category:"AngularJS"},{title:"E2E Testing with Protractor",url:"/e2e-testing-with-protractor/",category:"AngularJS"}]}];return n.jsxs("div",{className:"min-h-screen bg-background",children:[n.jsx(BS,{}),n.jsxs("main",{className:"max-w-7xl mx-auto px-6 pb-20",children:[n.jsxs("div",{className:"text-center mb-12 animate-slide-up",children:[n.jsx("h2",{className:"font-playfair text-3xl font-bold text-foreground mb-4",children:"Blog Categories"}),n.jsx("p",{className:"text-muted-foreground max-w-2xl mx-auto",children:"Explore articles organized by technology and topic. Click on any post to read more."})]}),n.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-up",children:t.map((e,r)=>n.jsx("div",{style:{animationDelay:`${r*.1}s`},className:"animate-slide-up",children:n.jsx($S,{category:e.category,posts:e.posts,icon:e.icon,description:e.description})},e.category))})]})]})},US=()=>{const t=Fs();return v.useEffect(()=>{console.error("404 Error: User attempted to access non-existent route:",t.pathname)},[t.pathname]),n.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-100",children:n.jsxs("div",{className:"text-center",children:[n.jsx("h1",{className:"text-4xl font-bold mb-4",children:"404"}),n.jsx("p",{className:"text-xl text-gray-600 mb-4",children:"Oops! Page not found"}),n.jsx("a",{href:"/",className:"text-blue-500 hover:text-blue-700 underline",children:"Return to Home"})]})})};function sp(t){const e={code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"2 Way Data Binding in Plain Vanilla JavaScript"}),`
`,n.jsxs(e.p,{children:["Whenever someone asks me about the advantages of ",n.jsx(e.strong,{children:"AngularJS"})," the first thing that simply comes into my mind is ",n.jsx(e.strong,{children:"2-way data binding"}),"."]}),`
`,n.jsxs(e.p,{children:["For those who still aren't aware about it, ",n.jsx(e.strong,{children:"2-way data binding"})," means when you change anything in your model, view gets updated and on changing anything in the view, model gets updated."]}),`
`,n.jsxs(e.p,{children:["Everyone who knows ",n.jsx(e.strong,{children:"Angular"}),"(having worked on it) or in fact has worked upon any other ",n.jsx(e.strong,{children:"JavaScript"})," framework(missed working on it) would actually know the beauty of this feature."]}),`
`,n.jsxs(e.p,{children:["Well, now let's try to simply implement this feature in pur own plain vanilla ",n.jsx(e.strong,{children:"JavaScript"}),"."]}),`
`,n.jsxs(e.p,{children:["Let us take 4 text boxes to easily demonstrate ",n.jsx(e.strong,{children:"2-way data binding"}),". Here is our small piece of ",n.jsx(e.strong,{children:"HTML"})," code:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-HTML",children:`<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>2 Way Data Binding</title>
</head>
<body>
Name: <input class="name" type="text">
<input class="name" type="text">
<hr />
Age: <input class="age" type="text">
<input class="age" type="text">
<script src="2WayDataBinding.js"><\/script>
</body>
</html>
`})}),`
`,n.jsxs(e.p,{children:["Now, let's have a look at our magical ",n.jsx(e.strong,{children:"JavaScript"})," code which will do wonders for us:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-JavaScript",children:`var $scope = {};
(function () {
    var bindClasses = ["name", "age"];
    var attachEvent = function (classNames) {
        classNames.forEach(function (className) {
            var elements = document.getElementsByClassName(className);
            for (var index in elements) {
                elements[index].onkeyup = function () {
                    for (var index in elements) {
                        elements[index].value = this.value;
                    }
                }
            }
            Object.defineProperty($scope, className, {
                set: function (newValue) {
                    for (var index in elements) {
                        elements[index].value = newValue;
                    }
                }
            });
        });
    };
    attachEvent(bindClasses);
})();
`})}),`
`,n.jsx(e.p,{children:"Here is a detailed explanation of the above snippet:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["We have taken the classes of the elements on which we need to apply ",n.jsx(e.strong,{children:"2-way Data Binding"})," in an array named ",n.jsx(e.code,{children:"bindClasses"}),"."]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["Then we have an ",n.jsx(e.code,{children:"attachEvent"})," which basically iterates through the classes passed in array ",n.jsx(e.code,{children:"bindClasses"}),"."]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["We are extracting all the elements by using their class names ",n.jsx(e.code,{children:"document.getElementsByClassName(className)"}),"."]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["Once the elements are extracted we are binding ",n.jsx(e.code,{children:"onkeyup"})," event on it. When this event is triggered it calls a function which stores the current value inside the element."]}),`
`]}),`
`]}),`
`,n.jsxs(e.p,{children:["In this way we are successfully able to implement ",n.jsx(e.strong,{children:"2-way Data Binding"})," on our HTML."]}),`
`,n.jsxs(e.p,{children:["But how to update our ",n.jsx(e.strong,{children:"model"}),"??"]}),`
`,n.jsx(e.p,{children:"Here is the explanation of the rest of the part of the code which actually updates the value in our model:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["We have used ",n.jsx(e.code,{children:"object.defineProperty"})," to define a property of an object. Here our object is ",n.jsx(e.strong,{children:"$scope"})," and property is ",n.jsx(e.strong,{children:"className"}),"."]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["Then we have a ",n.jsx(e.strong,{children:"set"})," function which serves as ",n.jsx(e.strong,{children:"setter"})," of the property."]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["So, if you do something like - ",n.jsx(e.code,{children:'$scope.name="Hari"'}),', "Hari" would be passed as ',n.jsx(e.code,{children:"newValue"}),", which would ultimately replace the value being displayed on the view through the following piece of code ",n.jsx(e.code,{children:"elements[index].value = newValue"}),"."]}),`
`]}),`
`]}),`
`,n.jsxs(e.p,{children:["Hurray!! We have now implemented the ",n.jsx(e.strong,{children:"2-way Data Binding"})," successfully."]}),`
`,n.jsxs(e.p,{children:["| Please note that this is just a small piece of code demonstrating ",n.jsx(e.strong,{children:"2-way Data Binding"})," using ",n.jsx(e.strong,{children:"JavaScript"})," this code can be improved a lot on the basis of element type.e We can also have a ",n.jsx(e.strong,{children:"getter"})," function for getting the value in ",n.jsx(e.code,{children:"$scope.name"}),". But for the sake of simplicity I have deliberately avoided it."]})]})}function VS(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(sp,{...t})}):sp(t)}const qS=Object.freeze(Object.defineProperty({__proto__:null,default:VS},Symbol.toStringTag,{value:"Module"})),JS="/assets/ai-spaghetti-code-BFOTqgC_.png";function ip(t){const e={em:"em",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"AI Killed Coding, Not Software Engineering"}),`
`,n.jsx(e.p,{children:"The panic around AI replacing developers comes from a misunderstanding that existed long before AI arrived:"}),`
`,n.jsx(e.p,{children:"Too many people confused coding with software engineering."}),`
`,n.jsx(e.p,{children:"Coding was always just one part of the job. Important, yes. But only one part."}),`
`,n.jsx(e.p,{children:"Software engineering was never simply about turning requirements into lines of code."}),`
`,n.jsx(e.p,{children:"It was about understanding problems, designing solutions, navigating constraints, managing risk, and delivering outcomes that actually work."}),`
`,n.jsx(e.p,{children:"AI is exposing that difference."}),`
`,n.jsx(e.h2,{children:"Coding Was Never the Whole Job"}),`
`,n.jsx(e.p,{children:"A feature does not begin when someone opens an editor."}),`
`,n.jsx(e.p,{children:"It begins with questions:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"What problem are we solving?"}),`
`,n.jsx(e.li,{children:"What are the business goals?"}),`
`,n.jsx(e.li,{children:"What are the edge cases?"}),`
`,n.jsx(e.li,{children:"What systems will this affect?"}),`
`,n.jsx(e.li,{children:"What are the security, performance, and operational risks?"}),`
`,n.jsx(e.li,{children:"Is this even the right feature to build?"}),`
`]}),`
`,n.jsx(e.p,{children:"Then comes planning:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"How should it be designed?"}),`
`,n.jsx(e.li,{children:"What trade-offs are acceptable?"}),`
`,n.jsx(e.li,{children:"What dependencies exist?"}),`
`,n.jsx(e.li,{children:"How will it scale?"}),`
`,n.jsx(e.li,{children:"How will it be tested and observed?"}),`
`]}),`
`,n.jsx(e.p,{children:"Only then comes implementation."}),`
`,n.jsx(e.p,{children:"Whether that implementation is typed by human hands or generated with AI is increasingly secondary."}),`
`,n.jsx(e.h2,{children:"Output vs Outcome"}),`
`,n.jsx(e.p,{children:"AI can help produce output."}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"code"}),`
`,n.jsx(e.li,{children:"tests"}),`
`,n.jsx(e.li,{children:"documentation"}),`
`,n.jsx(e.li,{children:"refactors"}),`
`,n.jsx(e.li,{children:"scaffolding"}),`
`]}),`
`,n.jsx(e.p,{children:"But outcomes are still owned by humans."}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"solving the real problem"}),`
`,n.jsx(e.li,{children:"shipping safely"}),`
`,n.jsx(e.li,{children:"meeting customer needs"}),`
`,n.jsx(e.li,{children:"maintaining quality"}),`
`,n.jsx(e.li,{children:"protecting reliability"}),`
`,n.jsx(e.li,{children:"avoiding long-term messes"}),`
`,n.jsx(e.li,{children:"making sound trade-offs"}),`
`]}),`
`,n.jsx(e.p,{children:"That responsibility does not disappear because a model wrote the function."}),`
`,n.jsx(e.h2,{children:"Your Brain Still Matters"}),`
`,n.jsx(e.p,{children:"In fact, it matters more."}),`
`,n.jsxs("figure",{className:"my-8",children:[n.jsx("img",{src:JS,alt:"Cartoon of a developer cheering 'Ship it!' as an AI assistant dumps a bucket of spaghetti code onto the desk, surrounded by sticky notes warning about skipped tests, security, and documentation.",className:"w-full rounded-lg shadow-lg",loading:"lazy"}),n.jsx("figcaption",{className:"text-center text-sm text-muted-foreground mt-2 italic",children:n.jsx(e.p,{children:"AI writes the code. You own the consequences."})})]}),`
`,n.jsx(e.p,{children:"When code generation becomes easier, poor thinking becomes more expensive."}),`
`,n.jsx(e.p,{children:`Bad requirements become faster bad products.
Weak architecture becomes faster technical debt.
Shallow understanding becomes faster chaos.`}),`
`,n.jsx(e.p,{children:"Domain knowledge, judgement, communication, and systems thinking become the real differentiators."}),`
`,n.jsx(e.h2,{children:"Architecture Matters More Than Ever"}),`
`,n.jsx(e.p,{children:"As code becomes cheaper to produce, architecture becomes more expensive to get wrong."}),`
`,n.jsx(e.p,{children:"AI can generate code quickly. But it still relies on what you ask it to build — and how clearly you define it."}),`
`,n.jsx(e.p,{children:"Without a clear architectural direction, AI doesn’t reduce complexity. It amplifies it."}),`
`,n.jsx(e.p,{children:"Prompt-driven development often hides architectural decisions:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"data models are guessed"}),`
`,n.jsx(e.li,{children:"boundaries are blurred"}),`
`,n.jsx(e.li,{children:"scalability is an afterthought"}),`
`,n.jsx(e.li,{children:"non-functional requirements are ignored"}),`
`]}),`
`,n.jsx(e.p,{children:"The result is accidental architecture."}),`
`,n.jsx(e.p,{children:"And accidental architecture does not scale."}),`
`,n.jsx(e.p,{children:"This is where clarity in your head — and your ability to translate that clarity into specs — becomes a core engineering skill."}),`
`,n.jsx(e.p,{children:"In many ways, architecture is just spec-driven thinking at system level."}),`
`,n.jsx(e.h2,{children:"From Specs to Behavior: SDD + TDD"}),`
`,n.jsx(e.p,{children:"Even traditional practices like Test-Driven Development (TDD) gain new relevance."}),`
`,n.jsx(e.p,{children:`TDD forces you to define behavior before implementation.
It creates guardrails for AI-generated code.
It keeps the system honest.`}),`
`,n.jsx(e.p,{children:"But in reality, most organisations are already practicing some form of Spec-Driven Development (SDD) — through requirements, tickets, acceptance criteria, and design docs."}),`
`,n.jsx(e.p,{children:"The difference now is not adoption. It’s quality."}),`
`,n.jsx(e.p,{children:`When AI starts generating the implementation, weak specs don’t get exposed slowly.
They get executed immediately.`}),`
`,n.jsx(e.p,{children:`Vague requirements → confidently wrong systems.
Incomplete specs → inconsistent architectures.`}),`
`,n.jsx(e.p,{children:"This makes the relationship between the two explicit:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["SDD defines ",n.jsx(e.strong,{children:"intent (what and why)"})]}),`
`,n.jsxs(e.li,{children:["TDD validates ",n.jsx(e.strong,{children:"behavior (how it works)"})]}),`
`]}),`
`,n.jsx(e.p,{children:"AI amplifies both — or breaks both."}),`
`,n.jsx(e.p,{children:"In a world where code is abundant, clarity of intent and correctness of behavior become the real constraints."}),`
`,n.jsx(e.p,{children:`We were always writing specs.
Now we actually have to mean them.`}),`
`,n.jsx(e.h2,{children:"I’ve Seen This Before"}),`
`,n.jsx(e.p,{children:"I’ve personally seen multiple failures long before AI, where teams equated coding with software engineering."}),`
`,n.jsx(e.p,{children:`Projects shipped code but lacked clarity.
Features were built without fully understanding the problem.
Teams optimised for implementation speed while ignoring architecture, ownership, and long-term impact.`}),`
`,n.jsx(e.p,{children:"The result was predictable: fragile systems, rework, and missed expectations."}),`
`,n.jsx(e.p,{children:"AI did not create this problem. It just makes it easier to scale it."}),`
`,n.jsx(e.h2,{children:"The Bigger Risk: Bad AI Adoption"}),`
`,n.jsx(e.p,{children:"My real concern is not AI replacing engineers."}),`
`,n.jsx(e.p,{children:"It is organizations rushing AI adoption without engineering maturity."}),`
`,n.jsx(e.p,{children:"Pushing AI left, right, and centre just to appear innovative can create:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"broken delivery processes"}),`
`,n.jsx(e.li,{children:"lower quality standards"}),`
`,n.jsx(e.li,{children:"security gaps"}),`
`,n.jsx(e.li,{children:"duplicated code at scale"}),`
`,n.jsx(e.li,{children:"hidden technical debt"}),`
`,n.jsx(e.li,{children:"confused ownership"}),`
`,n.jsx(e.li,{children:"junior teams with less learning depth"}),`
`,n.jsx(e.li,{children:"more output, less value"}),`
`]}),`
`,n.jsx(e.p,{children:"If companies kill healthy engineering processes in the name of speed, they may create bigger problems than the ones AI promised to solve."}),`
`,n.jsx(e.h2,{children:"AI as a Thought Partner, Not a Replacement"}),`
`,n.jsx(e.p,{children:"One of the best uses of AI today is in thinking, not just coding."}),`
`,n.jsx(e.p,{children:"You can:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"challenge your architecture"}),`
`,n.jsx(e.li,{children:"explore trade-offs"}),`
`,n.jsx(e.li,{children:"simulate failure scenarios"}),`
`,n.jsx(e.li,{children:"get multiple perspectives quickly"}),`
`]}),`
`,n.jsx(e.p,{children:"In many ways, this is far better than rubber ducking."}),`
`,n.jsx(e.p,{children:"But it still does not replace peer review."}),`
`,n.jsx(e.p,{children:`AI can broaden your thinking.
Peers ground it in reality.`}),`
`,n.jsx(e.p,{children:"That balance still matters."}),`
`,n.jsx(e.h2,{children:"A Note on AI in Practice"}),`
`,n.jsx(e.p,{children:"AI is already helping in places like code reviews."}),`
`,n.jsx(e.p,{children:"But it still cannot compete with the context in an engineer’s head — why something exists, what constraints shaped it, what failed before, and what must not fail again."}),`
`,n.jsx(e.p,{children:"AI can review code."}),`
`,n.jsx(e.p,{children:"Engineers review intent."}),`
`,n.jsx(e.h2,{children:"Tools Are Changing, Engineering Is Not"}),`
`,n.jsx(e.p,{children:"Tools have always evolved."}),`
`,n.jsx(e.p,{children:`From manual deployments to CI/CD.
From monoliths to distributed systems.
From autocomplete to generative AI.
From copilots to agents.`}),`
`,n.jsx(e.p,{children:"The pace is faster now, but the pattern is not new."}),`
`,n.jsx(e.p,{children:"Software engineering still remains:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"solving problems"}),`
`,n.jsx(e.li,{children:"making sound decisions"}),`
`,n.jsx(e.li,{children:"managing complexity"}),`
`,n.jsx(e.li,{children:"balancing trade-offs"}),`
`,n.jsx(e.li,{children:"delivering outcomes responsibly"}),`
`]}),`
`,n.jsx(e.h2,{children:"The Future Belongs to Engineers"}),`
`,n.jsx(e.p,{children:"The winners will not be people who equated coding with engineering."}),`
`,n.jsx(e.p,{children:"They will be people who understood that coding was only ever one tool."}),`
`,n.jsx(e.p,{children:"AI may generate the output."}),`
`,n.jsx(e.p,{children:"But engineers are still responsible for the outcome."}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.p,{children:n.jsx(e.em,{children:"Small disclaimer: yes, I’m worried too. I enjoy paying bills and would like to continue doing so. I do think about what this means for all of us, and especially for the next generation."})}),`
`,n.jsx(e.p,{children:n.jsx(e.em,{children:"But if there’s one consistent pattern, it’s this — we adapt. Messily, imperfectly, but we do."})})]})}function GS(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(ip,{...t})}):ip(t)}const QS=Object.freeze(Object.defineProperty({__proto__:null,default:GS},Symbol.toStringTag,{value:"Module"}));function lp(t){const e={blockquote:"blockquote",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"AI Solved Execution. Coordination Is the Next Bottleneck."}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:n.jsx(e.em,{children:"We've spent the last two years teaching AI how to write software. Maybe we should have been teaching it how to coordinate software delivery instead."})}),`
`]}),`
`,n.jsx(e.p,{children:"There is a narrative dominating the AI conversation in software engineering."}),`
`,n.jsx(e.p,{children:"AI will replace developers."}),`
`,n.jsx(e.p,{children:"AI will write all the code."}),`
`,n.jsx(e.p,{children:"AI will generate tests."}),`
`,n.jsx(e.p,{children:"AI will review pull requests."}),`
`,n.jsx(e.p,{children:"And to be fair, it's getting remarkably good at all of those things."}),`
`,n.jsx(e.p,{children:"Tools like Cursor, Claude Code, Kiro, GitHub Copilot and others have fundamentally changed how software is built. They reduce the time between an idea and working code. They automate many of the repetitive tasks that once consumed hours."}),`
`,n.jsx(e.p,{children:"In other words, AI is rapidly solving execution."}),`
`,n.jsx(e.p,{children:"But after spending more than a decade building software in large engineering organizations, I don't think execution was ever the biggest bottleneck."}),`
`,n.jsx(e.p,{children:"Coordination was."}),`
`,n.jsx(e.h2,{children:"The Wrong Bottleneck"}),`
`,n.jsx(e.p,{children:"Imagine a feature that touches five teams."}),`
`,n.jsx(e.p,{children:"A payment API needs to change."}),`
`,n.jsx(e.p,{children:"The mobile application needs updating."}),`
`,n.jsx(e.p,{children:"Documentation must be revised."}),`
`,n.jsx(e.p,{children:"Infrastructure requires a new configuration."}),`
`,n.jsx(e.p,{children:"QA can't begin until every dependency is available."}),`
`,n.jsx(e.p,{children:"None of these teams struggle because they can't write code."}),`
`,n.jsx(e.p,{children:"They struggle because they depend on each other."}),`
`,n.jsx(e.p,{children:"Every day, someone asks questions like:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Is the API ready?"}),`
`,n.jsx(e.li,{children:"Has the architecture been approved?"}),`
`,n.jsx(e.li,{children:"Can frontend start now?"}),`
`,n.jsx(e.li,{children:"Which teams are blocked?"}),`
`,n.jsx(e.li,{children:"Has the documentation been updated?"}),`
`,n.jsx(e.li,{children:"Who needs to review this change?"}),`
`,n.jsx(e.li,{children:"What can happen in parallel?"}),`
`]}),`
`,n.jsx(e.p,{children:"Those questions are rarely answered by the codebase itself."}),`
`,n.jsx(e.p,{children:"They're answered through meetings. Slack. Jira. Status reports. Human memory."}),`
`,n.jsx(e.p,{children:"The larger the organization becomes, the larger this coordination tax grows."}),`
`,n.jsx(e.h2,{children:"Enterprise Software Has Two Systems"}),`
`,n.jsx(e.p,{children:"This is where I think we've been looking at software delivery incorrectly."}),`
`,n.jsx(e.p,{children:"We tend to think of software development as a single system."}),`
`,n.jsx(e.p,{children:"Requirements. Design. Implementation. Testing. Deployment."}),`
`,n.jsx(e.p,{children:"But enterprises actually operate two different systems simultaneously."}),`
`,n.jsx(e.h3,{children:"Execution"}),`
`,n.jsx(e.p,{children:"Execution creates software."}),`
`,n.jsx(e.p,{children:"Requirements become architecture."}),`
`,n.jsx(e.p,{children:"Architecture becomes code."}),`
`,n.jsx(e.p,{children:"Code becomes tests."}),`
`,n.jsx(e.p,{children:"Tests become deployments."}),`
`,n.jsx(e.p,{children:"This is exactly where AI is making extraordinary progress."}),`
`,n.jsx(e.h3,{children:"Coordination"}),`
`,n.jsx(e.p,{children:"Coordination answers completely different questions."}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Who should work next?"}),`
`,n.jsx(e.li,{children:"Which work is blocked?"}),`
`,n.jsx(e.li,{children:"Which teams are affected?"}),`
`,n.jsx(e.li,{children:"Has a dependency changed?"}),`
`,n.jsx(e.li,{children:"Should documentation be regenerated?"}),`
`,n.jsx(e.li,{children:"Can two streams of work execute in parallel?"}),`
`,n.jsx(e.li,{children:"Who needs human approval?"}),`
`]}),`
`,n.jsx(e.p,{children:"This system doesn't produce software."}),`
`,n.jsx(e.p,{children:"It produces alignment."}),`
`,n.jsx(e.p,{children:"And unlike execution, coordination is still overwhelmingly manual."}),`
`,n.jsx(e.h2,{children:"We Keep Optimizing the Wrong Layer"}),`
`,n.jsx(e.p,{children:"For two decades we've experimented with different organizational structures."}),`
`,n.jsx(e.p,{children:"Scrum. SAFe. Spotify Squads. Team Topologies. Pods."}),`
`,n.jsx(e.p,{children:"Each promises faster software delivery."}),`
`,n.jsx(e.p,{children:"Each reorganizes people."}),`
`,n.jsx(e.p,{children:"Very few fundamentally change how coordination happens."}),`
`,n.jsx(e.p,{children:"A feature still moves through meetings. Status updates. Dependency tracking. Manual planning."}),`
`,n.jsx(e.p,{children:"The organizational chart changes."}),`
`,n.jsx(e.p,{children:"The coordination mechanism doesn't."}),`
`,n.jsx(e.h2,{children:"The Missing Layer"}),`
`,n.jsx(e.p,{children:"I believe enterprise software delivery is missing a dedicated orchestration layer."}),`
`,n.jsx(e.p,{children:"Not another project manager."}),`
`,n.jsx(e.p,{children:"Not another framework."}),`
`,n.jsx(e.p,{children:"An AI orchestrator."}),`
`,n.jsx(e.p,{children:"Its responsibility isn't writing software."}),`
`,n.jsx(e.p,{children:"Its responsibility is continuously answering one question:"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"Given the current state of engineering, what should happen next?"}),`
`]}),`
`,n.jsx(e.p,{children:"Every event becomes an input."}),`
`,n.jsx(e.p,{children:"A Jira ticket changes. A pull request merges. A test fails. An API contract evolves. Documentation becomes outdated."}),`
`,n.jsx(e.p,{children:"The orchestrator updates its understanding of the system and determines the next best action."}),`
`,n.jsx(e.p,{children:"Not once a sprint."}),`
`,n.jsx(e.p,{children:"Continuously."}),`
`,n.jsx(e.h2,{children:"Execution vs Coordination"}),`
`,n.jsx(e.p,{children:"This is the distinction I think will define the next generation of engineering organizations."}),`
`,n.jsx(e.p,{children:"AI coding assistants optimize execution."}),`
`,n.jsx(e.p,{children:"AI orchestrators optimize coordination."}),`
`,n.jsx(e.p,{children:"They're solving entirely different problems."}),`
`,n.jsx(e.p,{children:"One writes code."}),`
`,n.jsx(e.p,{children:"The other keeps hundreds of interdependent pieces of work moving toward a common goal."}),`
`,n.jsx(e.h2,{children:"A Different Future"}),`
`,n.jsx(e.p,{children:"Perhaps the biggest impact of AI in enterprise software won't be replacing developers."}),`
`,n.jsx(e.p,{children:"It will be replacing the coordination overhead we've accepted for decades as an unavoidable cost of building software at scale."}),`
`,n.jsx(e.p,{children:"We've spent twenty years reinventing how teams execute software."}),`
`,n.jsx(e.p,{children:"Maybe the next breakthrough won't come from changing the teams."}),`
`,n.jsx(e.p,{children:"Maybe it will come from changing how they're coordinated."}),`
`,n.jsx(e.p,{children:"Because AI has already started solving execution."}),`
`,n.jsx(e.p,{children:"Coordination is the next frontier."})]})}function KS(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(lp,{...t})}):lp(t)}const XS=Object.freeze(Object.defineProperty({__proto__:null,default:KS},Symbol.toStringTag,{value:"Module"}));function ap(t){const e={blockquote:"blockquote",code:"code",h1:"h1",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"E2E Testing with Protractor"}),`
`,n.jsxs(e.p,{children:["We all know that ",n.jsx(e.strong,{children:"end to end testing"})," is done to test the flow of ",n.jsx(e.strong,{children:"application"}),". It can either be done manually or using some kind of ",n.jsx(e.strong,{children:"automation"})," tool/framework."]}),`
`,n.jsxs(e.p,{children:["There are a hell lot of ",n.jsx(e.strong,{children:"automation"})," frameworks available but for ",n.jsx(e.strong,{children:"AngularJS"}),", ",n.jsx(e.strong,{children:"Protractor"})," is being promoted. ",n.jsx(e.strong,{children:"Protractor"})," combines powerful tools and technologies such as ",n.jsx(e.strong,{children:"NodeJS"}),", ",n.jsx(e.strong,{children:"Selenium Webdriver"}),", ",n.jsx(e.strong,{children:"Jasmine"}),", ",n.jsx(e.strong,{children:"Mocha"})," and ",n.jsx(e.strong,{children:"Cucumber"}),"."]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:["NOTE: ",n.jsx(e.strong,{children:"Protractor"})," was designed for ",n.jsx(e.strong,{children:"e2e testing"})," in order to cover the ",n.jsx(e.strong,{children:"acceptance criteria"}),". It does not replace the ",n.jsx(e.strong,{children:"unit testing"})," frameworks such as ",n.jsx(e.strong,{children:"Karma"}),". It is a sort of wrapper above ",n.jsx(e.strong,{children:"Selenium"}),"."]}),`
`]}),`
`,n.jsx(e.p,{children:"Now, its time to get our hands dirty with some piece of code, but before that let's have a look at some pre-requisites:"}),`
`,n.jsxs(e.p,{children:["Let's set up ",n.jsx(e.strong,{children:"Protractor"})," on your system(I am assuming that ",n.jsx(e.strong,{children:"NodeJS"})," is already installed)"]}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:["Install ",n.jsx(e.strong,{children:"Protractor"})," globally using the command  ",n.jsx(e.code,{children:"npm install protractor –g"})," or use the command ",n.jsx(e.code,{children:"npm install protractor"})," if you want to install it for a particular project."]}),`
`,n.jsxs(e.li,{children:["To check if you have correctly installed it, use the command ",n.jsx(e.code,{children:"protractor --version"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Protractor"})," installs ",n.jsx(e.strong,{children:"Selenium webdriver manager"})," with it, update ",n.jsx(e.strong,{children:"Selenium webdriver manager"})," with command ",n.jsx(e.code,{children:"webdriver-manager update"}),"."]}),`
`]}),`
`,n.jsx(e.p,{children:"Yes, it's that easy!!"}),`
`,n.jsx(e.p,{children:"Now, let's have a look at the functionality that we want to test:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:'There is checkbox, which needs to be checked when user has credit card. On checking the checkbox, "Yes" would be printed on the page and on un-checking it, "No".'}),`
`,n.jsxs(e.li,{children:["When the checkbox is un-checked state, ",n.jsx(e.code,{children:"credit card number"})," input field and ",n.jsx(e.code,{children:"Save"})," button would be disabled and on checking it, both fields will be enabled."]}),`
`,n.jsxs(e.li,{children:["On clicking the ",n.jsx(e.code,{children:"Save"})," button error/success message is displayed."]}),`
`,n.jsxs(e.li,{children:["Error message would be displayed in the following conditions.",`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"When input field is empty."}),`
`,n.jsx(e.li,{children:"When anything except numbers is input in the input field."}),`
`,n.jsx(e.li,{children:"When less than 16 digits are added in the input field."}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:["Success Message would be shown in the following cases.",`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"When a 16-digit number is input in the input field."}),`
`,n.jsx(e.li,{children:"Success message would also include the 16-digit number added in the input field."}),`
`]}),`
`]}),`
`]}),`
`,n.jsxs(e.p,{children:["Here is the ",n.jsx(e.strong,{children:"HTML"})," and ",n.jsx(e.strong,{children:"JavaScript"})," code:"]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"creditCard.html"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-HTML",children:`<!DOCTYPE html>
<html ng-app="creditCardApp">
<head lang="en">
    <meta charset="UTF-8">
    <title>Credit Card</title>
    <link href="src/css/appStyle.css" rel="stylesheet">
</head>
<body ng-controller="CardController">
<div>
    <p>Do you have a credit card?</p>
    <input type="checkbox" ng-true-value="'Yes'" ng-false-value="'No'" ng-model="data.checkCard"
           ng-click="checkClicked()">
    <span>{{data.checkCard}}</span>
</div>
<div>
    <p>If yes, please enter your credit card number here:</p>
    <input type="text" name="myField" ng-disabled="data.checkCard != 'Yes'" ng-model="data.cardNumber"
           minlength="16" maxlength="16">
    <input type="button" value="Save" id="save" ng-disabled="data.checkCard != 'Yes'" ng-click="save();">
</div>
</br>
<div ng-class="{error: errorMessage, success: successMessage}">
    {{errorMessage}} {{successMessage}}
</div>
<script src="src/js/angular.min.js"><\/script>
<script src="src/js/appController.js"><\/script>
</body>
</html>
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"appController.js"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-JavaScript",children:`(function (ng) {
    var creditCardApp = ng.module('creditCardApp', []);
    creditCardApp.controller('CardController', ['$scope', function ($scope) {
        $scope.data = {checkCard: "", cardNumber: ""};
        $scope.save = function () {
            $scope.successMessage = "";
            $scope.errorMessage = "";
            if (!$scope.data.cardNumber) {
                $scope.errorMessage = "Please enter a valid credit card number";
            } else if (isNaN($scope.data.cardNumber)) {
                $scope.errorMessage = "Credit card number can have only Numbers(0-9)";
            } else {
                $scope.successMessage = "Your credit card number " + $scope.data.cardNumber + " has been saved with us.";
                $scope.data.cardNumber = "";
            }
        };
        $scope.checkClicked = function () {
            if ($scope.data.checkCard === "No") {
                $scope.data.cardNumber = "";
            }
        };
    }]);
})(angular);
`})}),`
`,n.jsx(e.p,{children:"Let's manually test if our application is working fine or not. Do follow these steps:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:["Install ",n.jsx(e.strong,{children:"http-server"})," module globally with ",n.jsx(e.code,{children:"npm installhttp-server -g"})," command."]}),`
`,n.jsxs(e.li,{children:["Clone the project with ",n.jsx(e.code,{children:"git clone git@github.com:NamitaMalik/E2E-testing-with-Protractor.git"})," command."]}),`
`,n.jsxs(e.li,{children:["Move to clone directory with ",n.jsx(e.code,{children:"cd E2E-testing-with-Protractor"})," command."]}),`
`,n.jsxs(e.li,{children:["Run ",n.jsx(e.strong,{children:"http-server"})," with ",n.jsx(e.code,{children:"hs"})," command."]}),`
`,n.jsxs(e.li,{children:["Open ",n.jsx(e.strong,{children:"http://localhost:8080/creditCard.html"})," URL in your favorite browser and check that application is working as expected or not."]}),`
`]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:["Note: You can obviously run the application by opening creditCard.html simply from the E2E-testing-with-Protractor(or where you have kept above ",n.jsx(e.strong,{children:".js"})," and ",n.jsx(e.strong,{children:".html"})," files) folder, but to run our test cases it would be required to run from a server."]}),`
`]}),`
`,n.jsx(e.p,{children:"###How to Test with Protractor??"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:["Create a ",n.jsx(e.strong,{children:"test"})," named folder in your project directory(E2E-testing-with-Protractor)."]}),`
`,n.jsxs(e.li,{children:["Now create ",n.jsx(e.code,{children:"conf.js"})," named ",n.jsx(e.strong,{children:"configuration"})," file for our test cases and save it in ",n.jsx(e.strong,{children:"test"})," directory. We define two things in it:",`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"seleniumAddress"}),": Address of ",n.jsx(e.strong,{children:"Selenium webdriver manager"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"specs"}),": Our test case file, which should be run."]}),`
`]}),`
`]}),`
`]}),`
`,n.jsxs(e.p,{children:["So our ",n.jsx(e.code,{children:"conf.js"})," would look something like this:"]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"conf.js"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-JavaScript",children:`exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec.js']
};
`})}),`
`,n.jsxs(e.p,{children:["By default your tests will run on default browser only, but in case you want to run your test cases on specific browser or in multiple browsers e.g. ",n.jsx(e.strong,{children:"chrome"})," and ",n.jsx(e.strong,{children:"safari"}),", you can add an additional property named as ",n.jsx(e.strong,{children:"multiCapabilities"})," in your ",n.jsx(e.strong,{children:"conf.js"})," as given below:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-JavaScript",children:`exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec.js'],
    multiCapabilities: [{
        browserName: 'firefox'
    }, {
        browserName: 'chrome'
    }]
};
`})}),`
`,n.jsxs(e.p,{children:[`####Lest write first Protractor test case:
First of all, we need to open our `,n.jsx(e.strong,{children:"application"})," in the browser, which we can do by: ",n.jsx(e.code,{children:'browser.get("http://localhost:63342/creditCard.html");'}),". So before running any test case, our ",n.jsx(e.strong,{children:"application"})," must be open in the browser so we have kept this in a ",n.jsx(e.code,{children:"beforeEach()"})," block e.g."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"spec.js:"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-JavaScript",children:`(function () {
    function openApplicationInBrowser() {
        browser.get("http://localhost:8080/creditCard.html");
    }
    describe('Saving Credit Card Number', function () {
        beforeEach(function () {
            openApplicationInBrowser();
        });
    });
})();
`})}),`
`,n.jsxs(e.p,{children:["Test Case 1. Let's check if the title of the page is ",n.jsx(e.code,{children:"Credit Card"})," or not. I had mentioned above that ",n.jsx(e.strong,{children:"Protractor"})," also uses ",n.jsx(e.strong,{children:"Jasmine"})," and we know that ",n.jsx(e.strong,{children:"Jasmine"})," lets us describe our test case in a simple plain text. Therefore our test would look something like this:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-JavaScript",children:`it('should have correct title', function () {
    expect(browser.getTitle()).toEqual('Credit Card');
});
`})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"it"})," is the ",n.jsx(e.strong,{children:"Jasmine"})," ",n.jsx(e.strong,{children:"function"}),". ",n.jsx(e.strong,{children:"it"})," takes two parameters."]}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"String"})," - This string is a kind of sentence, that explains what is being tested."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"function"})," - This is a callback ",n.jsx(e.strong,{children:"function"}),"."]}),`
`]}),`
`,n.jsxs(e.p,{children:["We write all the code in the ",n.jsx(e.strong,{children:"it"})," block that we need for ",n.jsx(e.strong,{children:"testing"}),". Usually the tests are started by writing an ",n.jsx(e.strong,{children:"expect"})," ",n.jsx(e.strong,{children:"function"}),"."]}),`
`,n.jsxs(e.p,{children:["We ",n.jsx(e.strong,{children:"expect"})," our page ",n.jsx(e.strong,{children:"title"})," to be(to be equal to) ",n.jsx(e.code,{children:"Credit Card"}),". So we are first getting the title using ",n.jsx(e.code,{children:"getTitle()"})," ",n.jsx(e.strong,{children:"function"})," and then comparing with the expected title using the ",n.jsx(e.code,{children:"toEqual"})," ",n.jsx(e.strong,{children:"function"}),"."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Resultant spec.js:"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-JavaScript",children:`(function () {
    function openApplicationInBrowser() {
        browser.get("http://localhost:8080/creditCard.html");
    }
    describe('Saving Credit Card Number', function () {
        beforeEach(function () {
            openApplicationInBrowser();
        });
        it('should have correct title', function () {
            expect(browser.getTitle()).toEqual('Credit Card');
        });
    });
})();
`})}),`
`,n.jsx(e.p,{children:`#####How to run test case?
To run test you will have to do the following:`}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:["Go to console and run ",n.jsx(e.code,{children:"webdriver-manager start"})," command to start ",n.jsx(e.strong,{children:"Selenium webdriver manager"}),"."]}),`
`]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:["NOTE: You don't need to install ",n.jsx(e.strong,{children:"Selenium webdriver manager"})," separately, Its already have installed into your system with ",n.jsx(e.strong,{children:"Protractor"}),"."]}),`
`]}),`
`,n.jsxs(e.ol,{start:"2",children:[`
`,n.jsxs(e.li,{children:["Now on the console go the ",n.jsx(e.code,{children:"test"})," folder and run test case with command ",n.jsx(e.code,{children:"Protractor conf.js"}),"."]}),`
`]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:["NOTE: ",n.jsx(e.strong,{children:"spec.js"})," file must be saved in test directory, parallel to ",n.jsx(e.strong,{children:"conf.js"}),"."]}),`
`]}),`
`,n.jsx(e.p,{children:"That's it. When you will try to run the test cases, you will see your system's default browser will open and your tests running on it. Once the tests are completed, the window will close automatically and test results will be available on console:"}),`
`,n.jsx(e.p,{children:n.jsx(e.img,{src:"https://raw.githubusercontent.com/NamitaMalik/E2E-testing-with-Protractor/master/images/result.png",alt:"result.png"})}),`
`,n.jsxs(e.p,{children:["I know this doesn't interests you at all in case you already know ",n.jsx(e.strong,{children:"Jasmine"}),"."]}),`
`,n.jsx(e.p,{children:"Now, let's write another test:"}),`
`,n.jsxs(e.p,{children:["Test Case 2 : ",n.jsx(e.code,{children:"Card Number"})," input and ",n.jsx(e.code,{children:"Save"})," button will be disabled by default."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-JavaScript",children:`it('checks if the input field is by default disabled', function () {
    expect(element(by.model('data.cardNumber')).isEnabled()).toBe(false);
    expect(element(by.id('save')).isEnabled()).toBe(false);
});
`})}),`
`,n.jsxs(e.p,{children:["In the above ",n.jsx(e.strong,{children:"it"})," block, we are first getting the element using the ",n.jsx(e.strong,{children:"model"})," selector and then we check if that element is enabled or not, using the ",n.jsx(e.code,{children:"isEnabled"})," ",n.jsx(e.strong,{children:"function"}),". ",n.jsx(e.code,{children:"isEnabled()"})," ",n.jsx(e.strong,{children:"function"})," returns a boolean value, true if element is enabled and false if it is not."]}),`
`,n.jsx(e.p,{children:"In our case, this boolean value should be false as checkbox is un-checked."}),`
`,n.jsx(e.p,{children:"Test Case 3 : Error message should appear on entering an invalid credit card number."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-JavaScript",children:`it('gives an error message on writing invalid credit card number', function () {
    element(by.model('data.checkCard')).click();
    element(by.model('data.cardNumber')).sendKeys("abcdefghijkikiki");
    element(by.id('save')).click();
    expect(element(by.binding('errorMessage')).getText()).toEqual("Credit card number can have only Numbers(0-9)");
});
`})}),`
`,n.jsxs(e.p,{children:["In the previous test we had used only ",n.jsx(e.strong,{children:"model"})," and ",n.jsx(e.strong,{children:"id"})," as the selector, whereas in the above test case we are using a new selector i.e. ",n.jsx(e.strong,{children:"binding"}),"."]}),`
`,n.jsx(e.p,{children:"In the above script, we are first checking the checkbox, then entering an invalid text in the input field and then finally save button is clicked."}),`
`,n.jsxs(e.p,{children:["Our expectation is that an error message should appear. We are using the ",n.jsx(e.strong,{children:"binding"})," selector and getting text from it and checking if it is equal to the expected text."]}),`
`,n.jsxs(e.p,{children:["Here is the complete ",n.jsx(e.code,{children:"spec.js"}),` file:
`,n.jsx(e.strong,{children:"spec.js"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-JavaScript",children:`(function () {
    function openApplicationInBrowser() {
        browser.get("http://localhost:8080/creditCard.html");
    }
    describe('Saving Credit Card Number', function () {
        beforeEach(function () {
            openApplicationInBrowser();
        });
        it('should have correct title', function () {
            expect(browser.getTitle()).toEqual('Credit Card');
        });
        it('checks if the input field is by default disabled', function () {
            expect(element(by.model('data.cardNumber')).isEnabled()).toBe(false);
            expect(element(by.id('save')).isEnabled()).toBe(false);
        });
        it('enables the input field', function () {
            element(by.model('data.checkCard')).click();
            expect(element(by.model('data.cardNumber')).isEnabled()).toBe(true);
        });
        it('gives an error message on writing invalid credit card number', function () {
            element(by.model('data.checkCard')).click();
            element(by.model('data.cardNumber')).sendKeys("abcdefghijkikiki");
            element(by.id('save')).click();
            expect(element(by.binding('errorMessage')).getText()).toEqual("Credit card number can have only Numbers(0-9)");
        });
        it('gives a success message on writing a valid credit card number', function () {
            var cardNumber = "1234567899009876";
            element(by.model('data.checkCard')).click();
            element(by.model('data.cardNumber')).sendKeys(cardNumber);
            element(by.id('save')).click();
            expect(element(by.binding('successMessage')).getText()).toEqual("Your credit card number " + cardNumber + " has been saved with us.");
        });
        it('gives an error message when credit card number entered is less than 16 digits', function () {
            element(by.model('data.checkCard')).click();
            element(by.model('data.cardNumber')).sendKeys("1234567890");
            element(by.id('save')).click();
            expect(element(by.binding('errorMessage')).getText()).toEqual("Please enter a valid credit card number");
        });
    });
})();
`})}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"You can run all the test cases, and all should be passed."}),`
`]}),`
`,n.jsxs(e.p,{children:["Well, these were a few test cases on the simple ",n.jsx(e.strong,{children:"functionality"})," that we had built. We have used three types of selectors above. Here is a list of selectors which can be used while working with ",n.jsx(e.strong,{children:"Protractor"}),":"]}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"by.css"}),`
`,n.jsx(e.li,{children:"by.id"}),`
`,n.jsx(e.li,{children:"by.model"}),`
`,n.jsx(e.li,{children:"by.binding"}),`
`]}),`
`,n.jsxs(e.p,{children:["In case you want to play with multiple elements, you can use ",n.jsx(e.code,{children:"element.all()"}),". There are certain helper ",n.jsx(e.strong,{children:"functions"}),":",n.jsx(e.code,{children:"count()"})," - which gives the number of elements, ",n.jsx(e.code,{children:"getIndex()"})," - to get an element using index."]})]})}function YS(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(ap,{...t})}):ap(t)}const ZS=Object.freeze(Object.defineProperty({__proto__:null,default:YS},Symbol.toStringTag,{value:"Module"}));function cp(t){const e={code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Editing JavaScript Object using AngularJS"}),`
`,n.jsxs(e.p,{children:["At times we encounter a situation when we need to edit a ",n.jsx(e.strong,{children:"JavaScript"})," object(JSON). By editing, I mean modifying the keys and values of the object, or dynamically adding a new key and value to the object."]}),`
`,n.jsx(e.p,{children:"Well, to make such a situation more clear, let us see a scenario:"}),`
`,n.jsx(e.p,{children:"Suppose there are two input fields and a button:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"In the first input field, we need to add the key of the object."}),`
`,n.jsx(e.li,{children:"Second input field takes the value that would be added to the corresponding key(i.e. the first input field)."}),`
`,n.jsx(e.li,{children:"On clicking the 'Add' button, pair of input fields would get added, which can then take the key-value pair."}),`
`]}),`
`,n.jsxs(e.p,{children:["Here is the ",n.jsx(e.strong,{children:"HTML"})," and ",n.jsx(e.strong,{children:"JavaScript"})," code for it:"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"editObject.html"}),":"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-HTML",children:`<!DOCTYPE html>
<html ng-app="myApp">
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
</head>
<body ng-controller="ObjectController as objectController">
<h2>Key-Value:</h2>
<div ng-repeat="oldKey in objectController.notSorted(objectController.student)">
    <label>Key {{$index+1}}</label>
    <input type="text" ng-model="newKey" ng-init="newKey=oldKey" ng-blur="objectController.updateKey(newKey, oldKey)">
    <label>Value {{$index+1}}</label>
    <input type="text" ng-model="newValue" ng-init="newValue=objectController.student[oldKey]"
           ng-blur="objectController.updateValue(newValue,oldKey)">
</div>
</br>
<em>Click on 'Add' to add another key-value pair.</em>
</br>
</br>
<input type="button" value="Add" ng-click="objectController.addNewKey()"/>
<h2>Object:</h2>
{{objectController.student}}
<script src="angular.min.js"><\/script>
<script src="ObjectController.js"><\/script>
</body>
</html>
`})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"ObjectController.js"}),":"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-JavaScript",children:`/**
 * Created by Namita malik on 25/4/15.
 */
(function (ng) {
    var myApp = ng.module('myApp', []);
    myApp.controller('ObjectController', [function () {
        var objectController = this;
        objectController.student = {name: "Namita", age: "16", class: "XII", school: "BBPS"};
        objectController.updateKey = function (newKey, oldKey) {
            if (newKey == "") {
                delete objectController.student[oldKey];
            } else if (newKey !== oldKey) {
                objectController.student[newKey] = objectController.student[oldKey];
                delete objectController.student[oldKey];
            }
        };
        objectController.updateValue = function (newValue, key) {
            objectController.student[key] = newValue;
        };
        objectController.notSorted = function (object) {
            return object ? Object.keys(object) : [];
        };
        objectController.addNewKey = function () {
            objectController.student[""] = "";
        };
    }]);
})(angular);
`})}),`
`,n.jsxs(e.p,{children:["Before starting with the actual logic in the above code, please note that the above code is written in ",n.jsx(e.strong,{children:"controller as"})," syntax. Here are a few points for that:"]}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:["I have created an alias ",n.jsx(e.code,{children:"objectController"})," for my controller ",n.jsx(e.code,{children:"ObjectController"})," here ",n.jsx(e.code,{children:'<body ng-controller="ObjectController as objectController">'}),"."]}),`
`,n.jsxs(e.li,{children:["In the ",n.jsx(e.code,{children:"Controller"}),", I have not passed ",n.jsx(e.strong,{children:"$scope"})," object to the function, instead created a variable named ",n.jsx(e.code,{children:"objectController"})," and assigned ",n.jsx(e.code,{children:"this"})," to it. Instead of hanging around with ",n.jsx(e.strong,{children:"$scope"}),", I have added model data and the behaviour to the ",n.jsx(e.strong,{children:"controller"})," instance."]}),`
`,n.jsxs(e.li,{children:["Instead of defining function with ",n.jsx(e.strong,{children:"$scope"}),", I have defined it on ",n.jsx(e.strong,{children:"this"})," (",n.jsx(e.code,{children:"objectController"}),")."]}),`
`,n.jsxs(e.li,{children:["Using ",n.jsx(e.strong,{children:"controller as"})," syntax is a personal choice, but I am finding it more readable and consistent and also I am getting rid of the ",n.jsx(e.code,{children:"$scope"}),"."]}),`
`]}),`
`,n.jsxs(e.p,{children:["Let's now come to the actual ",n.jsx(e.strong,{children:"scope"})," of this post, i.e. editing a ",n.jsx(e.strong,{children:"JavaScript"})," ",n.jsx(e.strong,{children:"Object"}),"."]}),`
`,n.jsxs(e.p,{children:["We have a student ",n.jsx(e.strong,{children:"object"})," whose ",n.jsx(e.strong,{children:"keys"})," and ",n.jsx(e.strong,{children:"values"})," are being displayed. We are modifying this ",n.jsx(e.strong,{children:"student"})," object."]}),`
`,n.jsx(e.p,{children:"If you look at the above demo, we can do two things there:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"Modify the existing keys/values."}),`
`,n.jsx(e.li,{children:"Add new key/value."}),`
`]}),`
`,n.jsx(e.p,{children:"Here is explanation of both the cases:"}),`
`,n.jsx(e.p,{children:"####1 : Modify the existing keys/values."}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:["We have an ",n.jsx(e.code,{children:"updateKey"})," function, which is called as soon as user modifies the key. ",n.jsx(e.code,{children:"updateKey()"})," is called on the ",n.jsx(e.strong,{children:"blur"})," ",n.jsx(e.strong,{children:"event"})," of the ",n.jsx(e.strong,{children:"key"})," field."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"updateKey()"})," takes two parameters i.e. ",n.jsx(e.code,{children:"newKey"})," and ",n.jsx(e.code,{children:"oldKey"}),", names of which are self explanatory."]}),`
`,n.jsxs(e.li,{children:["Now, let's move on to ",n.jsx(e.code,{children:"HTML"}),` for a while and see what is happening there. We need to investigate these two lines specifically:
`,n.jsx(e.code,{children:'<div ng-repeat="oldKey in objectController.notSorted(objectController.student)">'}),`
and
`,n.jsx(e.code,{children:'<input type="text" ng-model="newKey" ng-init="newKey=oldKey" ng-blur="objectController.updateKey(newKey, oldKey)">'}),"."]}),`
`,n.jsxs(e.li,{children:["We are iterating the object using the ",n.jsx(e.strong,{children:"ng-repeat"})," directive and hence we are using the ",n.jsx(e.code,{children:"oldKey"}),", as an ",n.jsx(e.strong,{children:"object"})," can be iterated using the ",n.jsx(e.strong,{children:"key"}),"."]}),`
`,n.jsxs(e.li,{children:["There is an ",n.jsx(e.strong,{children:"ng-model"})," on the ",n.jsx(e.strong,{children:"key"})," field. This model has been bind to the ",n.jsx(e.code,{children:"newKey"}),". We are initializing the value of ",n.jsx(e.code,{children:"newKey"})," with the ",n.jsx(e.code,{children:"oldKey"}),"."]}),`
`,n.jsxs(e.li,{children:["We know that ",n.jsx(e.strong,{children:"blur"})," event is fired when an element looses focus, so when a user ends updating the ",n.jsx(e.strong,{children:"key"})," and moves to the other field using ",n.jsx(e.strong,{children:"keyboard"})," or ",n.jsx(e.strong,{children:"clicks"})," anywhere, ",n.jsx(e.code,{children:"updateKey"})," function would be called which would take both ",n.jsx(e.code,{children:"newKey"})," and ",n.jsx(e.code,{children:"oldKey"})," as its arguments."]}),`
`,n.jsxs(e.li,{children:["Now, coming back to our ",n.jsx(e.code,{children:"updateKey"})," function, we check that if ",n.jsx(e.code,{children:"newKey"})," is not equal to ",n.jsx(e.code,{children:"oldKey"}),", I pass the value in the ",n.jsx(e.code,{children:"oldKey"})," to the ",n.jsx(e.code,{children:"newKey"})," and then delete the ",n.jsx(e.code,{children:"oldKey"})," using the ",n.jsx(e.strong,{children:"delete"})," operator."]}),`
`,n.jsxs(e.li,{children:["In case user updates an existing key with an empty ",n.jsx(e.strong,{children:"string"}),", in that case, key would be deleted as empty key would not make sense."]}),`
`,n.jsxs(e.li,{children:["Now, let's check the ",n.jsx(e.code,{children:"updateValue"})," function. This function is called when the ",n.jsx(e.strong,{children:"blur"})," event is fired on the the ",n.jsx(e.strong,{children:"value"})," field."]}),`
`,n.jsxs(e.li,{children:["On the ",n.jsx(e.code,{children:"HTML"})," have a look at this code: ",n.jsx(e.code,{children:'<input type="text" ng-model="newValue" ng-init="newValue=objectController.student[oldKey]" ng-blur="objectController.updateValue(newValue,oldKey)">'}),". The input field for value has model ",n.jsx(e.code,{children:"newValue"}),". We initialize ",n.jsx(e.code,{children:"newValue"})," with the value in the ",n.jsx(e.code,{children:"oldKey"}),". Once user modifies the value and focus is lost, ",n.jsx(e.code,{children:"updateValue()"})," function is called which takes ",n.jsx(e.code,{children:"newValue"})," and ",n.jsx(e.code,{children:"oldKey"})," along with it as its arguments."]}),`
`,n.jsxs(e.li,{children:["Let's see the definition part of ",n.jsx(e.code,{children:"updateValue"})," function. In this function, we are simply passing the updated value(",n.jsx(e.code,{children:"newValue"}),") to the ",n.jsx(e.code,{children:"oldKey"}),"."]}),`
`]}),`
`,n.jsx(e.p,{children:"So this was all about updating key and value. Now let's take up the second case:"}),`
`,n.jsx(e.p,{children:"####2. Add new key/value."}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:['On clicking the "Add" button, ',n.jsx(e.code,{children:"addNewKey"})," function is called."]}),`
`,n.jsxs(e.li,{children:["In the ",n.jsx(e.code,{children:"addNewKey"})," function, we are simply adding an empty ",n.jsx(e.strong,{children:"string"})," as the key and assigning empty ",n.jsx(e.strong,{children:"string"})," as a value to it. Now, as soon as user enters a ",n.jsx(e.strong,{children:"key"})," in this newly added ",n.jsx(e.strong,{children:"key"})," field and the field looses the focus, our ",n.jsx(e.code,{children:"updateKey()"})," function would be called, which would then do all the magic explained above."]}),`
`]})]})}function eC(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(cp,{...t})}):cp(t)}const tC=Object.freeze(Object.defineProperty({__proto__:null,default:eC},Symbol.toStringTag,{value:"Module"}));function dp(t){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Fetching Data in Angular2"}),`
`,n.jsxs(e.p,{children:["One of the most common scenario in any application is ",n.jsx(e.strong,{children:"client"})," interacting with the ",n.jsx(e.strong,{children:"server"}),". ",n.jsx(e.strong,{children:"HTTP"})," is the widely used protocol for this interaction. One can fetch data from the server, update data, create data and delete it using ",n.jsx(e.strong,{children:"HTTP"})," protocol."]}),`
`,n.jsxs(e.p,{children:["The focus of this blog is to discuss the ",n.jsx(e.strong,{children:"GET"})," method of ",n.jsx(e.strong,{children:"HTTP"})," protocol."]}),`
`,n.jsxs(e.p,{children:["In ",n.jsx(e.strong,{children:"Angular1.x"}),", we used ",n.jsx(e.strong,{children:"$http"})," service which provided us a ",n.jsx(e.strong,{children:"get()"})," method to fetch data from server. A simple ",n.jsx(e.strong,{children:"GET"})," request in ",n.jsx(e.strong,{children:"Angular1.x"})," was something like:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-JavaScript",children:`$http({method: 'GET', url: '/someUrl'})
    .then(function successCallback(response) {}, 
        function errorCallback(response) {}); 
`})}),`
`,n.jsxs(e.p,{children:["As it can be seen above, ",n.jsx(e.strong,{children:"$http"})," returns a ",n.jsx(e.strong,{children:"promise"})," where we register two callbacks for ",n.jsx(e.strong,{children:"success"})," and ",n.jsx(e.strong,{children:"error"}),"."]}),`
`,n.jsxs(e.p,{children:["Now, let's move on to ",n.jsx(e.strong,{children:"Angular2"}),", and see how stuff works in it. ",n.jsx(e.strong,{children:"Angular2"})," has ",n.jsx(e.strong,{children:"Http"})," service which is used to make ",n.jsx(e.strong,{children:"get"})," calls to server. But an important thing to note here is that ",n.jsx(e.strong,{children:"$http"})," service in ",n.jsx(e.strong,{children:"Angular1.x"})," returned a ",n.jsx(e.strong,{children:"promise"})," while  ",n.jsx(e.strong,{children:"Http"})," service in ",n.jsx(e.strong,{children:"Angular2"})," returns ",n.jsx(e.strong,{children:"Observables"}),"."]}),`
`,n.jsxs(e.p,{children:["So, before we dive deeper into ",n.jsx(e.strong,{children:"Http"})," service, let's quickly have a glimpse at ",n.jsx(e.strong,{children:"Observables"}),":"]}),`
`,n.jsxs(e.p,{children:["To start off with, ",n.jsx(e.strong,{children:"Observables"}),` are nothing but a stream of data.These data streams can be of anything - a stream of variables, properties, data structures or
even stream of events. One can react to the stream by listening to it. `,n.jsx(e.strong,{children:"Observables"})," are basically based on ",n.jsx(e.strong,{children:"Observer Design Pattern"}),". In ",n.jsx(e.strong,{children:"Observer Design Pattern"})," one-to-many dependency is maintained between the objects, when one object changes its state all other objects/dependents are notified. These dependents are known as ",n.jsx(e.strong,{children:"Observers"}),"."]}),`
`,n.jsx(e.p,{children:"A stream can emit 3 different things:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"Value"}),`
`,n.jsx(e.li,{children:"Error"}),`
`,n.jsx(e.li,{children:"Completed signal"}),`
`]}),`
`,n.jsxs(e.p,{children:[`Suppose that stream is a stream of events being observed. A function is defined that will be executed when a value is emitted, another function executes when an error is emitted and a third one once the complete signal is emitted.
One can capture these events by using these functions. These functions are known as `,n.jsx(e.strong,{children:"Observers"})," and the stream which is being emitted is the ",n.jsx(e.strong,{children:"Observable"}),"."]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Observables"})," can be of two types:"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"1.Hot"})," - ",n.jsx(e.strong,{children:"Hot observables"})," are those which produce values even before their subscription gets activated. One can consider ",n.jsx(e.strong,{children:"Hot Observables"})," as live performance. The ",n.jsx(e.strong,{children:"hot observable"})," sequence is shared among each ",n.jsx(e.strong,{children:"subscriber"}),", also each ",n.jsx(e.strong,{children:"subscriber"}),` gets the next value
in the sequence.`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"2.Cold"})," - ",n.jsx(e.strong,{children:"Cold observables"})," behave like standard ",n.jsx(e.strong,{children:"iterators"}),". They push values only when we subscribes to them and they reset when we subscribe again. One can consider ",n.jsx(e.strong,{children:"Cold Observables"})," as a movie."]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Angular2"})," has chosen ",n.jsx(e.strong,{children:"Rxjs"})," as its core async pattern. ",n.jsx(e.strong,{children:"Rxjs"})," provides a number of operators attached to a stream such as ",n.jsx(e.strong,{children:"map"}),", ",n.jsx(e.strong,{children:"filter"}),", ",n.jsx(e.strong,{children:"scan"}),", ",n.jsx(e.strong,{children:"flatMap"}),", ",n.jsx(e.strong,{children:"toPromise"}),", ",n.jsx(e.strong,{children:"catch"}),"."]}),`
`,n.jsxs(e.p,{children:["Well, the above discussion is not even a tip of the iceberg on a subject such as ",n.jsx(e.strong,{children:"Observable"}),". You can read out more from ",n.jsx(e.a,{href:"https://gist.github.com/staltz/868e7e9bc2a7b8c1f754",children:"here"})," and ",n.jsx(e.a,{href:"http://www.barbarianmeetscoding.com/blog/2016/04/11/getting-started-with-rx-dot-js/",children:"here"}),"."]}),`
`,n.jsxs(e.p,{children:["Let's now move back the original agenda of this blog i.e. fetching data using ",n.jsx(e.strong,{children:"Http"})," service. Here is a sample use case:"]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"We need to display a list of posts. The list of posts can be fetched through this API - http://jsonplaceholder.typicode.com/posts/."}),`
`]}),`
`,n.jsx(e.p,{children:"To achieve the above scenario let's break this small app into parts:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"AppComponent"})," - This is parent component for our application."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"PostComponent"})," - This is child component inside our ",n.jsx(e.code,{children:"AppComponent"}),". It will currently have ",n.jsx(e.code,{children:"PostListComponent"})," as its child component. Tomorrow, if we plan to display the detail of a post, we may add ",n.jsx(e.strong,{children:"PostDetailComponent"})," to display the details."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"Post"})," - We make ",n.jsx(e.code,{children:"Post"})," ",n.jsx(e.strong,{children:"interface"})," to define the type of element that we will receive from the ",n.jsx(e.strong,{children:"GET"})," api."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"PostService"})," - This service will actually fetch the data via making ",n.jsx(e.strong,{children:"GET"})," call on the api for us."]}),`
`]}),`
`,n.jsxs(e.p,{children:["Here is our ",n.jsx(e.code,{children:"app.component.ts"}),":"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-TypeScript",children:`import {Component} from '@angular/core';
import {PostComponent} from './post/post.component'
import './rxjs-operators';

@Component({
    selector: 'my-app',
    template: \`
        <h1>Fetching:</h1>
        <post-parent></post-parent>
    \`,
    directives: <any>[PostComponent]
})

export class AppComponent {
}
`})}),`
`,n.jsxs(e.p,{children:["and here is the ",n.jsx(e.code,{children:"post.component.ts"}),":"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-TypeScript",children:`import {Component}  from '@angular/core';
import {PostListComponent} from './post-list.component';
import {PostService} from './post.service';

@Component({
    selector: 'post-parent',
    template: \`
        <h2>View Posts</h2>
        <post-list></post-list>
    \`,
    directives: <any>[PostListComponent],
    providers: <any>[PostService]
})
export class PostComponent {
}
`})}),`
`,n.jsxs(e.p,{children:["We have injected ",n.jsx(e.code,{children:"PostService"}),". We register it as a provider by doing ",n.jsx(e.code,{children:"providers:[PostService]"})," so that its instance is available to all the child components of ",n.jsx(e.code,{children:"PostComponent"}),`.
In case you are not aware about the `,n.jsx(e.strong,{children:"Angular2"})," ",n.jsx(e.strong,{children:"Services"}),", you can have a quick read ",n.jsx(e.a,{href:"http://namitamalik.github.io/Services-in-Angular2/",children:"Services in Angular2"}),"."]}),`
`,n.jsxs(e.p,{children:["Let's see the ",n.jsx(e.code,{children:"post.ts"}),", where we define the ",n.jsx(e.code,{children:"Post"}),":"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-TypeScript",children:`export interface Post {
    userId:number;
    id:number;
    title:string;
    body:string
}
`})}),`
`,n.jsxs(e.p,{children:["Now, let's have a look at our ",n.jsx(e.code,{children:"post-list.component.ts"})," which exports the ",n.jsx(e.code,{children:"PostListComponent"}),":"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-TypeScript",children:`import {Component} from '@angular/core';
import {PostService} from './post.service';
import {Post} from './post';

@Component({
    selector: 'post-list',
    template: \`
        <div>
        </div>
    \`
})

export class PostListComponent {
    constructor(private _postDataService:PostService) {
        this.getPosts();
    }

    private posts:Post[] = [];
    private errorMessage:any = '';

    getPosts() {
        //To Do: Fetch Posts here using PostsDataService
    }
}
`})}),`
`,n.jsx(e.p,{children:"Couple of most important tasks are still pending in the above component:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"We haven't yet written any code to display the list of post."}),`
`,n.jsxs(e.li,{children:["We still need to fetch the data from server using the ",n.jsx(e.code,{children:"PostService"})," i.e. the definition part of the ",n.jsx(e.code,{children:"getPosts()"})," function."]}),`
`]}),`
`,n.jsxs(e.p,{children:["So, let's move to the ",n.jsx(e.code,{children:"post.service.ts"})," where a lot of action will actually take place:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-TypeScript",children:`import {Injectable} from "@angular/core";
import {Post} from './post';

@Injectable()
export class PostService {
}
`})}),`
`,n.jsx(e.p,{children:"Now, let's start one by one:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["First, we need to import ",n.jsx(e.strong,{children:"Http"})," and ",n.jsx(e.strong,{children:"Response"})," from ",n.jsx(e.code,{children:"@angular/http"})," and also need to import ",n.jsx(e.strong,{children:"Observable"})," from ",n.jsx(e.code,{children:"rxjs/Observable"}),`.
So our `,n.jsx(e.code,{children:"post.service.ts"})," would now be:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-TypeScript",children:`import {Injectable} from "@angular/core";
import {Post} from './post';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PostService {
}
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["We need to use a few operators in our ",n.jsx(e.code,{children:"getData()"}),` function so we need to import them. Instead of importing all the operators let's import the required ones
in `,n.jsx(e.code,{children:"rxjs-operators.ts"})," and then import this into our ",n.jsx(e.code,{children:"app.component.ts"}),"."]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"rxjs-operators.ts"}),":"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-TypeScript",children:`import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
`})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"app.components.ts"}),":"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-TypeScript",children:`import {Component} from '@angular/core';
import {PostComponent} from './post/post.component'
import './rxjs-operators';

@Component({
    selector: 'my-app',
    template: \`
      <h1>Fetching:</h1>
      <post-parent></post-parent>
    \`,
    directives:[PostComponent]
})

export class AppComponent {
}
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["Now, we need to have a ",n.jsx(e.code,{children:"getData()"})," function which will get posts from the api. So here is what our ",n.jsx(e.code,{children:"getData()"})," function should be like:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-TypeScript",children:`getData():Observable<Post[]> {
    return this.http.get('http://jsonplaceholder.typicode.com/posts/')
        .map(this.extractData)
        .catch(this.handleError);
}
`})}),`
`]}),`
`]}),`
`,n.jsxs(e.p,{children:["The api http://jsonplaceholder.typicode.com/posts/ returns us an array of post whereas our ",n.jsx(e.code,{children:"http.get"})," would return us an ",n.jsx(e.strong,{children:"Observable"}),`.
We then use the `,n.jsx(e.strong,{children:"map"})," operator which transforms the response emitted by ",n.jsx(e.strong,{children:"Observable"}),` by applying a function to it. So in case of success, our flow
would now move to `,n.jsx(e.code,{children:"extractData()"})," function, which is:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-TypeScript",children:`private extractData(res:Response) {
    let body = res.json();
    return body || [];
}
`})}),`
`,n.jsxs(e.p,{children:["In the above snippet we are transforming response to the ",n.jsx(e.strong,{children:"json"})," format by doing ",n.jsx(e.code,{children:"res.json()"}),"."]}),`
`,n.jsxs(e.p,{children:["But in case had we encountered an error, our flow would have moved to ",n.jsx(e.code,{children:"catch"})," operator. The ",n.jsx(e.strong,{children:"catch"})," operator intercepts an ",n.jsx(e.strong,{children:"onError"}),` notification
from `,n.jsx(e.strong,{children:"Observable"})," and continues the sequence without error. ",n.jsx(e.code,{children:"handleError()"})," function would have come into play in that case:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-TypeScript",children:`private handleError(error:any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
        error.status ? \`\${error.status} - \${error.statusText}\` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
}
`})}),`
`,n.jsxs(e.p,{children:["After joining all the parts, our ",n.jsx(e.code,{children:"post.service.ts"})," would look like:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-TypeScript",children:`import {Injectable} from "@angular/core";
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Post} from './post';

@Injectable()
export class PostService {
    constructor(private http:Http) {
    }

    getData():Observable<Post[]> {
        return this.http.get('http://jsonplaceholder.typicode.com/posts/')
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res:Response) {
        let body = res.json();
        return body || [];
    }

    private handleError(error:any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? \`\${error.status} - \${error.statusText}\` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}
`})}),`
`,n.jsxs(e.p,{children:["We should note that the above ",n.jsx(e.strong,{children:"Observable"})," is a ",n.jsx(e.strong,{children:"cold observable"}),". So one has to ",n.jsx(e.strong,{children:"subscribe"})," to it."]}),`
`,n.jsxs(e.p,{children:["Now, let's move back to the ",n.jsx(e.code,{children:"PostListComponent"})," and complete our pending stuff:"]}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["We will first add definition part to our ",n.jsx(e.code,{children:"getPosts()"})," function:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-TypeScript",children:`getPosts() {
    this._postDataService.getData()
        .subscribe(
            posts => this.posts = posts,
            error => this.errorMessage = <any>error);
}
`})}),`
`,n.jsxs(e.p,{children:["We can see the ",n.jsx(e.strong,{children:"subscribe"})," operator in the above snippet. In ",n.jsx(e.strong,{children:"Rxjs"})," one can ",n.jsx(e.strong,{children:"subscribe"})," to an ",n.jsx(e.strong,{children:"Observable"}),` by passing 0 to 3 individual
functions `,n.jsx(e.code,{children:"onNext"}),", ",n.jsx(e.code,{children:"onError"})," and ",n.jsx(e.code,{children:"onCompleted"}),"."]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["Now, we need to display the fetched ",n.jsx(e.code,{children:"post"})," in this ",n.jsx(e.code,{children:"PostListComponent"}),". So our template would like:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-HTML",children:`<div>
    <ul class="items">
        <li *ngFor="let post of posts">
            <span>{{post.title}}</span>
        </li>
    </ul>
</div>
`})}),`
`]}),`
`]}),`
`,n.jsxs(e.p,{children:["In case you are not aware about how to iterate over ",n.jsx(e.strong,{children:"Arrays"}),", ",n.jsx(e.strong,{children:"Map"}),", ",n.jsx(e.strong,{children:"Set"})," you can have a quick read ",n.jsx(e.a,{href:"http://namitamalik.github.io/NgRepeat-vs-ngFor/",children:"here"}),"."]}),`
`,n.jsxs(e.p,{children:["So now our complete ",n.jsx(e.code,{children:"PostListComponent"})," would look like:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-TypeScript",children:`import {Component} from '@angular/core';
import {PostService} from './post.service';
import {Post} from './post';

@Component({
    selector: 'post-list',
    template: \`
        <div>
            <ul class="items">
                <li *ngFor="let post of posts">
                    <span>{{post.title}}</span>
                </li>
            </ul>
        </div>
    \`
})

export class PostListComponent {
    constructor(private _postDataService:PostService) {
        //should be moved to ngOnInit lifecycle hook
        this.getPosts();
    }

    private posts:Post[] = [];
    private errorMessage:any = '';

    getPosts() {
        this._postDataService.getData()
            .subscribe(
                posts => this.posts = posts,
                error => this.errorMessage = <any>error);
    }
}
`})}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:["It is important to note that though we have called ",n.jsx(e.code,{children:"getPosts"})," function in constructor, it is not a good practice. We should have called it in the ",n.jsx(e.strong,{children:"ngOnInit"})," lifecycle hook. Our constructors should be simple to enable easy debugging and testing."]}),`
`]}),`
`,n.jsx(e.p,{children:"We have completed all the pending stuff and now we should be able to see list of post."}),`
`,n.jsxs(e.p,{children:["But before we end this post, let's have a look at one more operator i.e. ",n.jsx(e.strong,{children:"toPromise"}),". This ",n.jsx(e.strong,{children:"operator"})," converts an ",n.jsx(e.strong,{children:"Observable"}),`
sequence to a `,n.jsx(e.strong,{children:"promise"}),". So if we use promises, then our ",n.jsx(e.code,{children:"post.service.ts"})," would look like:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-TypeScript",children:`import {Injectable} from "@angular/core";
import {Post} from './post';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PostService {
    constructor (private http: Http) {}
    getData (): Promise<Post[]> {
        return this.http.get('http://jsonplaceholder.typicode.com/posts/')
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }
    private extractData(res: Response) {
        let body = res.json();
        return body || [];
    }
    private handleError (error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? \`\${error.status} - \${error.statusText}\` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}
`})}),`
`,n.jsxs(e.p,{children:["If you could notice the difference, we have moved ",n.jsx(e.code,{children:"this.extractData"})," which is the ",n.jsx(e.strong,{children:"success callback"})," as the first parameter whereas ",n.jsx(e.code,{children:"this.errorHandler"})," is the second parameter."]}),`
`,n.jsxs(e.p,{children:["Since we are now using ",n.jsx(e.strong,{children:"promises"})," we will also have to make tweaks in ",n.jsx(e.code,{children:"post-list.component.ts"}),". We will have to call ",n.jsx(e.code,{children:"then"})," on the returned promise instead of ",n.jsx(e.code,{children:"subscribe"}),"."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-TypeScript",children:`import {Component} from '@angular/core';
import {PostService} from './post.service';
import {Post} from './post';

@Component({
    selector: 'post-list',
    template: \`
        <div>
            <ul class="items">
                <li *ngFor="let post of posts">
                    <span>{{post.title}}</span>
                </li>
            </ul>
        </div>
    \`
})

export class PostListComponent {
    constructor(private _postDataService:PostService) {
        this.getPosts();
    }

    private posts:Post[] = [];
    private errorMessage:any = '';

    getPosts() {
        this._postDataService.getData()
            .then(
                posts => this.posts = posts,
                error => this.errorMessage = <any>error);
    }
}
`})})]})}function nC(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(dp,{...t})}):dp(t)}const rC=Object.freeze(Object.defineProperty({__proto__:null,default:nC},Symbol.toStringTag,{value:"Module"}));function up(t){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"for..of loop in ECMA6"}),`
`,n.jsxs(e.p,{children:["In ECMA6, we have a ",n.jsx(e.strong,{children:"for..of"})," loop which loops over the iterable objects such as String, Arrays, Collections(Map, Set) etc."]}),`
`,n.jsxs(e.p,{children:["Before we talk about ",n.jsx(e.strong,{children:"for..of"})," loop, let's remember our companion from ECMA5 days i.e. ",n.jsx(e.strong,{children:"for..in"})," loop. ",n.jsx(e.strong,{children:"for..in"}),` loop is used to loop over the indexes
in an array/keys in case of objects.`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-Javascript",children:`var fruits = ["Banana", "Orange", "Kiwi", "Apple"];
for (var index in fruits) {
  console.log(index);
}
`})}),`
`,n.jsxs(e.p,{children:["Output: ",n.jsx(e.code,{children:"0            1            2            3"})]}),`
`,n.jsxs(e.p,{children:["But, ",n.jsx(e.strong,{children:"for..of"}),` loop is to loop over values in an array or any iterable
object for that matter.`]}),`
`,n.jsxs(e.p,{children:["Below is the basic syntax of a ",n.jsx(e.strong,{children:"for..of"})," loop:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-Javascript",children:`for (let value of iterable)
`})}),`
`,n.jsxs(e.p,{children:["Let's see ",n.jsx(e.strong,{children:"for..of"})," loop in action with a few iterables:"]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Array"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-Javascript",children:`let fruits = ["Banana", "Orange", "Kiwi", "Apple"];
for (let fruit of fruits) {
  console.log(fruit);
}
`})}),`
`,n.jsxs(e.p,{children:["Output : ",n.jsx(e.code,{children:"Banana                                          Orange                                          Kiwi                                          Apple"})]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"String"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-Javascript",children:`let city = "Berlin";
for (let char of city) {
  console.log(char)
}
`})}),`
`,n.jsxs(e.p,{children:["Output : ",n.jsx(e.code,{children:"B             e             r             l             i             n"})]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Map"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-Javascript",children:`let map = new Map();
map.set(0, 'Zero');
map.set(1, 'One');
for (let element of map) {
  console.log(element);
}
`})}),`
`,n.jsxs(e.p,{children:["Output : ",n.jsx(e.code,{children:"[ 0, 'Zero' ]             [ 1, 'One' ]"})]}),`
`,n.jsxs(e.p,{children:["In case you want to get the value in the key/value pair in a ",n.jsx(e.strong,{children:"Map"}),", you can do following:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-Javascript",children:`for (let [key, value] of map) {
  console.log(value);
}
`})}),`
`,n.jsxs(e.p,{children:["Output: ",n.jsx(e.code,{children:"Zero            One"})]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"arguments"}),`
In case you want to loop over the arguments of a function, you can do the following:`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-Javascript",children:`function() {
  for (let argument of arguments) {
    console.log(argument);
  }
})(1, 2, 3, 4)
`})}),`
`,n.jsxs(e.p,{children:["Output: ",n.jsx(e.code,{children:"1            2            3            4"})]}),`
`,n.jsxs(e.p,{children:["So, if we try to compare ",n.jsx(e.strong,{children:"for..in"})," loop with ",n.jsx(e.strong,{children:"for..of"})," loop, they are different in the below ways:"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["Using ",n.jsx(e.strong,{children:"for..in"})," loop, we can loop over the keys of an Object. ",n.jsx(e.strong,{children:"for..in"})," loop is not recommended for ",n.jsx(e.strong,{children:"Arrays"}),` as the purpose of
`,n.jsx(e.strong,{children:"for..in"})," loop is to enumerate over object properties, which means that it will also be enumerating over inherited properties which isn't always desired. Also order of iteration is not guaranteed. One of the sample is given below:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-Javascript",children:`Array.prototype.foo = 1;
var a = [1, 2, 3, 4];
for (var x in a){
    console.log(x);
}
`})}),`
`,n.jsxs(e.p,{children:["Output: ",n.jsx(e.code,{children:"0           1           2           3           foo"})]}),`
`,n.jsxs(e.p,{children:["While in case of ",n.jsx(e.strong,{children:"for..of"})," loop, if we do:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-Javacript",children:`Array.prototype.foo = 1;
var a = [5,6,7,8];
for (var x of a){
    console.log(x);
}
`})}),`
`,n.jsxs(e.p,{children:["we get Output : ",n.jsx(e.code,{children:"5                      6                      7                      8"})]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["Using ",n.jsx(e.strong,{children:"for..of"})," loop, we can loop over the values of any iterable object such as String, Arrays, Collections. ",n.jsx(e.strong,{children:"for..of"})," loop doesn't works with plain objects because they don't have a default iterator."]}),`
`]}),`
`]}),`
`,n.jsxs(e.p,{children:["An important point to note about ",n.jsx(e.strong,{children:"for..in"}),` loop is that it gives us index/keys which are of type string which cannot always be helpful. Also fixing this
behaviour could have caused breaking changes at many other places, so that is another reason to introduce new `,n.jsx(e.strong,{children:"for..of"})," loop."]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:`One thing which is extremely important to note here is that the value you want to loop over should be an
iterable object.`}),`
`]}),`
`,n.jsxs(e.p,{children:["A working demo is available ",n.jsx(e.a,{href:"https://repl.it/@namitamalik/SeagreenLoathsomeAustralianshelduck",children:"here"}),"."]})]})}function oC(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(up,{...t})}):up(t)}const sC=Object.freeze(Object.defineProperty({__proto__:null,default:oC},Symbol.toStringTag,{value:"Module"}));function hp(t){const e={code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Hoisting in JavaScript"}),`
`,n.jsxs(e.p,{children:["As we all know that in ",n.jsx(e.strong,{children:"JavaScript"})," there are only 2 ",n.jsx(e.strong,{children:"scope"})," i.e. ",n.jsx(e.strong,{children:"Global scope"})," and ",n.jsx(e.strong,{children:"Function scope"}),". There is no ",n.jsx(e.strong,{children:"block scope"})," in ",n.jsx(e.strong,{children:"JavaScript"}),". Now, here we need to look into a very important and interesting concept of ",n.jsx(e.strong,{children:"JavaScript"})," i.e. ",n.jsx(e.strong,{children:"Hoisting"}),". Since ",n.jsx(e.strong,{children:"JavaScript"})," has no ",n.jsx(e.strong,{children:"block scope"}),", so due to obvious reasons a ",n.jsx(e.strong,{children:"variable"})," declared anywhere in a ",n.jsx(e.strong,{children:"function"})," would be visible/available everywhere in that ",n.jsx(e.strong,{children:"function"}),". So this means that variable declared at the bottom of the ",n.jsx(e.strong,{children:"function"})," will be visible in the whole ",n.jsx(e.strong,{children:"function"}),". Lets first run below ",n.jsx(e.strong,{children:"JavaScript"})," code and see the output:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-JavaScript",children:`var a = 5;
console.log(a); // 5
function funcScopeTest() {
  console.log(a); // undefined
  var a = 10;
  console.log(a); // 10
}
console.log(a); // 5
funcScopeTest();
`})}),`
`,n.jsx(e.p,{children:"After reading above paragraph and watching the output of above code, you must be feeling strange and might be thinking what is happening? why and how??? etc. Lets understand:"}),`
`,n.jsxs(e.p,{children:["On line no 1, we are defining a variable with name ",n.jsx(e.strong,{children:"a"}),`. Line 2 of the above code prints "5", which doesn't requires any explanation. Now, let's look at the line 4. We see that it logs `,n.jsx(e.strong,{children:"undefined"}),", even though when ",n.jsx(e.strong,{children:"a"})," has been defined as ",n.jsx(e.strong,{children:"global variable"})," at line no. 1, with value ",n.jsx(e.code,{children:"5"})," assigned to it. Well, the reason behind this behaviour is that ",n.jsx(e.strong,{children:"var a"})," has also been defined in the ",n.jsx(e.strong,{children:"function"})," ",n.jsx(e.strong,{children:"funcScopeTest"})," and in ",n.jsx(e.strong,{children:"JavaScript"}),", ",n.jsx(e.strong,{children:"function scope"})," gets preference. Now, you would be thinking that the ",n.jsx(e.strong,{children:"var a"})," in ",n.jsx(e.strong,{children:"funcScopeTest"})," has been defined in the next line, so how come ",n.jsx(e.strong,{children:"JavaScript"})," engine gets to know that there is ",n.jsx(e.strong,{children:"var a"})," in funcScopeTest ",n.jsx(e.strong,{children:"function"})," too ?? The answer is a simple yet magical term ",n.jsx(e.strong,{children:"hoisting"}),"."]}),`
`,n.jsxs(e.p,{children:["Due ",n.jsx(e.strong,{children:"hoisting"}),", a ",n.jsx(e.strong,{children:"variable"})," defined anywhere in the ",n.jsx(e.strong,{children:"function"})," is taken to the top of the ",n.jsx(e.strong,{children:"function"}),"!"]}),`
`,n.jsx(e.p,{children:"Hey..Hang on.. I forgot to add an important point here :"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Hoisting takes only declaration of variables to the top, assigned variables remain where they are!"})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Hoisting"})," happens in ",n.jsx(e.strong,{children:"parsing"})," phase. Actually ",n.jsx(e.strong,{children:"JavaScript"})," runs in two steps:"]}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"Parsing Phase"}),`
`,n.jsx(e.li,{children:"Execution Phase."}),`
`]}),`
`,n.jsxs(e.p,{children:["So at first/Parsing Phase, ",n.jsx(e.strong,{children:"JavaScript"}),", perform ",n.jsx(e.strong,{children:"hoisting"})," with parsing. So after the parsing phase and before the execution phase above code will be converted to below:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-JavaScript",children:`var a = 5;
console.log(a); // 5
function funcScopeTest() {
  var a;
  console.log(a); // undefined
  a = 10;
  console.log(a); // 10
}
console.log(a); // 5
funcScopeTest();
`})}),`
`,n.jsxs(e.p,{children:["You will notice that difference between the above snippets is that only declaration of variable (in our example variable name is ",n.jsx(e.strong,{children:"a"}),") has moved to the first line of the ",n.jsx(e.strong,{children:"function"}),". Assignment is still happening on the same place!"]}),`
`,n.jsxs(e.p,{children:["This was all about ",n.jsx(e.strong,{children:"Hoisting"})," in ",n.jsx(e.strong,{children:"JavaScript"}),"."]})]})}function iC(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(hp,{...t})}):hp(t)}const lC=Object.freeze(Object.defineProperty({__proto__:null,default:iC},Symbol.toStringTag,{value:"Module"}));function pp(t){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Inheritance in JavaScript"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Inheritance"})," is a very important ",n.jsx(e.strong,{children:"OOPS"})," concept, by virtue of which children ",n.jsx(e.strong,{children:"classes"})," ",n.jsx(e.strong,{children:"inherit"})," from their parent ",n.jsx(e.strong,{children:"classes"}),". But now, question is how to implement ",n.jsx(e.strong,{children:"inheritance"})," in ",n.jsx(e.strong,{children:"JavaScript"}),"?"]}),`
`,n.jsxs(e.p,{children:["We all know how to make ",n.jsx(e.strong,{children:"class"})," in ",n.jsx(e.strong,{children:"JavaScript"}),"? ",n.jsx(e.strong,{children:"Class"})," in ",n.jsx(e.strong,{children:"JavaScript"})," is nothing but a ",n.jsx(e.strong,{children:n.jsx(e.a,{href:"http://codechutney.in/blog/javascript/constructor-pattern/",children:"constructor function"})}),". Here is a sample class:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-JavaScript",children:`function Peacock() {
    this.dance = function() {
      console.log("I am Peacock! I can dance");
    };
}
`})}),`
`,n.jsxs(e.p,{children:["In ",n.jsx(e.strong,{children:"JavaScript"}),", we do not have any ",n.jsx(e.strong,{children:"extend"})," keyword, the only way to implement ",n.jsx(e.strong,{children:"inheritance"})," is through ",n.jsx(e.strong,{children:"prototype chaining"}),"."]}),`
`,n.jsxs(e.p,{children:["So, what is ",n.jsx(e.strong,{children:"prototype chaining"}),"?"]}),`
`,n.jsxs(e.p,{children:["Each object in ",n.jsx(e.strong,{children:"JavaScript"})," has internal link to another object, through a property known as ",n.jsx(e.strong,{children:n.jsx(e.a,{href:"http://codechutney.in/blog/javascript/prototype-in-javascript/",children:"Prototype"})}),". While moving through the chain of these ",n.jsx(e.strong,{children:"objects"}),", one would encounter 'null' in the ",n.jsx(e.strong,{children:"prototype"})," which would mean that Object ",n.jsx(e.strong,{children:"prototype"})," has reached."]}),`
`,n.jsxs(e.p,{children:["When a property requested in one object is not found in that ",n.jsx(e.strong,{children:"object"}),", then ",n.jsx(e.strong,{children:"prototype"})," of that ",n.jsx(e.strong,{children:"object"})," is looked into. ",n.jsx(e.strong,{children:"Prototype"})," contains the reference to the next ",n.jsx(e.strong,{children:"object"})," in the chain. ",n.jsx(e.strong,{children:"Prototype chaining"})," is used to look into the next ",n.jsx(e.strong,{children:"object"})," in the chain and so on.....until the end of chain is reached. This behavior of ",n.jsx(e.strong,{children:"Prototype Chaining"})," helps us to add ",n.jsx(e.strong,{children:"inheritance"})," in ",n.jsx(e.strong,{children:"JavaScript"}),"."]}),`
`,n.jsx(e.p,{children:"Let's experience some inheritance using the given sample classes:"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"LivingThing Class"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-JavaScript",children:`function LivingThing() {
    this.move = function() {
        console.log("I am living thing! I can move!!");
    };
}
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Bird Class"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-JavaScript",children:`function Bird() {
    this.fly = function() {
        console.log("I am bird! I can fly!!");
    };
}
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Peacock Class"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-JavaScript",children:`function Peacock() {
    this.dance = function() {
      console.log("I am Peacock! I can dance");
    };
}
`})}),`
`,n.jsxs(e.p,{children:["Now, we know that Peacock is a bird and bird is a living thing. So all we need to show here is their relationship i.e. we need to implement the ",n.jsx(e.strong,{children:"inheritance"}),". Here we go:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-JavaScript",children:`Bird.prototype = new LivingThing();
Bird.prototype.constructor = Bird;
`})}),`
`,n.jsxs(e.p,{children:["In the above two lines of code we have passed the instance of LivingThing to the ",n.jsx(e.strong,{children:"prototype"})," of Bird, therefore we have linked Bird to LivingThing. Second line though does not makes any difference to the ",n.jsx(e.strong,{children:"inheritance"})," but it is in important in the sense that it makes the constructor property of ",n.jsx(e.strong,{children:"prototype"})," refer to the correct class/function."]}),`
`,n.jsx(e.p,{children:"Now, let's link Peacock to the Bird class. This can be done in the following way:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-JavaScript",children:`Peacock.prototype = new Bird();
Peacock.prototype.constructor = Peacock;
`})}),`
`,n.jsxs(e.p,{children:["In the above snippet we have linked Peacock to Bird. This type of ",n.jsx(e.strong,{children:"chaining"})," can go on and on. The above set of snippets would lead us to hierarchy given below:"]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"LivingThing --> Bird --> Peacock"}),`
`]}),`
`,n.jsxs(e.p,{children:["Lets try to create an object of Peacock ",n.jsx(e.strong,{children:"class"}),", and call dance, fly and move ",n.jsx(e.strong,{children:"methods/functions"})," on that object, and see what is happening??"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-JavaScript",children:`var peacock = new Peacock();
peacock.dance(); // I am Peacock! I can dance
peacock.fly(); // I am bird! I can fly!!
peacock.move(); // I am living thing! I can move!!
`})}),`
`,n.jsx(e.p,{children:"You can see, we can call the parent methods/function on child object/peacock. Let's see the above snippet in more detail:"}),`
`,n.jsxs(e.p,{children:["We called ",n.jsx(e.code,{children:"dance()"})," on Peacock ",n.jsx(e.strong,{children:"object"}),", since ",n.jsx(e.code,{children:"dance()"})," belonged to Peacock, so it could be easily accessed. ",n.jsx(e.code,{children:"fly()"})," belonged to Bird, but it could still be called on Peacock reason being that ",n.jsx(e.code,{children:"fly()"})," was first searched in Peacock, on not finding ",n.jsx(e.code,{children:"fly()"})," in Peacock, ",n.jsx(e.strong,{children:"prototype"})," was looked into to access the next ",n.jsx(e.strong,{children:"object"})," in the chain, which is Bird and hence we were able to call ",n.jsx(e.code,{children:"fly()"}),". Similar thing happened when ",n.jsx(e.code,{children:"move()"})," was called, first Peacock object was searched, then hunt moved to the  ",n.jsx(e.strong,{children:"prototype"})," of Peacock in order to know the next object in the chain. Bird object was then looked into and on not finding ",n.jsx(e.code,{children:"move()"})," there, reference of next ",n.jsx(e.strong,{children:"object"})," in ",n.jsx(e.strong,{children:"prototype"})," of Bird was looked which led the search to LivingThing ",n.jsx(e.strong,{children:"object"}),", which actually had the ",n.jsx(e.code,{children:"move()"}),". This is how we made a hierarchy starting from LivingThing to Peacock!"]}),`
`,n.jsxs(e.p,{children:["We are a little unfortunate that we don't have the ",n.jsx(e.strong,{children:"extend"})," keyword in ",n.jsx(e.strong,{children:"JavaScript"})," as available in ",n.jsx(e.strong,{children:"Java"}),", but we aren't that ",n.jsx(e.strong,{children:"unlucky"})," as we have ",n.jsx(e.strong,{children:n.jsx(e.a,{href:"http://namitamalik.github.io/Prototype-in-JavaScript/",children:"prototype"})})," to our rescue!"]})]})}function aC(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(pp,{...t})}):pp(t)}const cC=Object.freeze(Object.defineProperty({__proto__:null,default:aC},Symbol.toStringTag,{value:"Module"}));function fp(t){const e={a:"a",blockquote:"blockquote",code:"code",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.p,{children:"#JavaScript Inheritance Revisited"}),`
`,n.jsxs(e.p,{children:["In one of my previous ",n.jsx(e.a,{href:"https://namitamalik.github.io/",children:"blogs"}),", I had talked about ",n.jsx(e.strong,{children:n.jsx(e.a,{href:"http://namitamalik.github.io/Inheritance-in-JavaScript/",children:"inheritance in JavaScript"})}),". The main idea of that blog was to share that how ",n.jsx(e.strong,{children:"inheritance"})," can be achieved using ",n.jsx(e.strong,{children:"prototype"})," ",n.jsx(e.strong,{children:"chaining"}),"."]}),`
`,n.jsxs(e.p,{children:["But the demo given in the ",n.jsx(e.a,{href:"http://namitamalik.github.io/Inheritance-in-JavaScript/",children:"that blog"})," had some serious flaws or if not a flaw then you can say a bad advice or maybe not a good way to implement ",n.jsx(e.strong,{children:"inheritance"}),"."]}),`
`,n.jsxs(e.p,{children:["Demo in the ",n.jsx(e.a,{href:"http://namitamalik.github.io/Inheritance-in-JavaScript/",children:"previous blog"})," on ",n.jsx(e.strong,{children:"inheritance"})," looked like:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-JavaScript",children:`function LivingThing() {
    this.move = function() {
        console.log("I am living thing! I can move!!");
    };
}
function Bird() {
    this.fly = function() {
        console.log("I am bird! I can fly!!");
    };
}
function Peacock() {
    this.dance = function() {
      console.log("I am Peacock! I can dance");
    };
}
Bird.prototype = new LivingThing();
Bird.prototype.constructor = Bird;
Peacock.prototype = new Bird();
Peacock.prototype.constructor = Peacock;
var peacock = new Peacock("A");
peacock.dance(); // I am Peacock! I can dance
peacock.fly(); // I am bird! I can fly!!
peacock.move(); // I am living thing! I can move!!
`})}),`
`,n.jsx(e.p,{children:"So let's first discuss the problems with the above piece of code then we will discuss the solution!"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"First Problem"}),": We were defining a ",n.jsx(e.strong,{children:"function"})," inside the ",n.jsx(e.strong,{children:"constructor"})," ",n.jsx(e.strong,{children:"function"}),", so every time a new object would be created, it would get its own copy of that member ",n.jsx(e.strong,{children:"function"}),"."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Old Peacock Class:"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-JavaScript",children:`function Peacock() {
    this.dance = function() {
      console.log("I am Peacock! I can dance");
    };
}
`})}),`
`,n.jsxs(e.p,{children:["Now suppose of there are 10 Peacock objects in the chain, then 10 ",n.jsx(e.code,{children:"dance()"})," ",n.jsx(e.strong,{children:"functions"})," would also be there(Each object would be having a ",n.jsx(e.code,{children:"dance()"})," ",n.jsx(e.strong,{children:"function"})," which is defined in ",n.jsx(e.strong,{children:"constructor"})," ",n.jsx(e.strong,{children:"function"}),") because we know that ",n.jsx(e.strong,{children:"functions"})," are data in ",n.jsx(e.strong,{children:"JavaScript"}),", therefore if one ",n.jsx(e.strong,{children:"function"})," takes 10 bytes of data then 10 objects would obviously take 100 bytes which is quite an inefficient way of doing things. See this diagrammatic representation showing what will happen if numerous ",n.jsx(e.code,{children:"Peacock"})," objects are created:"]}),`
`,n.jsx(e.p,{children:n.jsx(e.img,{src:"https://raw.githubusercontent.com/NamitaMalik/JavaScript-Inheritance-Revisited/master/Function%20as%20data%20in%20per%20Instance.png",alt:"Function as data in per Instance.png"})}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:["NOTE: If we are defining 5 ",n.jsx(e.strong,{children:"functions"})," into ",n.jsx(e.strong,{children:"constructor"})," ",n.jsx(e.strong,{children:"function"}),", and each ",n.jsx(e.strong,{children:"function"})," takes 10 bytes then each object will take 50 bytes and 10 objects will take 10*50=500 bytes. And memory will continuously increase by 50 bytes with each object, which is seriously a bad way."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Second Problem"}),": When we do ",n.jsx(e.code,{children:"Peacock.prototype = new Bird();"}),", a new Bird object would be created, and stored to Peacock ",n.jsx(e.strong,{children:"prototype"}),". So all the Peacock objects are now having same object in ",n.jsx(e.strong,{children:"prototype"})," as parent object(Bird object). As all the Peacock objects have single parent Bird object, so whatever we will change in that Bird object, will be reflect for all the child peacock objects. If one child object will update any parent property, it will be updated for all other child peacock objects, which is not correct ",n.jsx(e.strong,{children:"inheritance"}),"."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-JavaScript",children:`function Bird() {
    this.birdProperty = {
        flySpeed:'20m/s',
        maxHeight:'5km'
    };
}
function Peacock() {
}
Peacock.prototype = new Bird();
Peacock.prototype.constructor = Peacock;
var p1 = new Peacock();
var p2 = new Peacock();
console.log("p1's parent Properties", p1.birdProperty); // { flySpeed: '20m/s', maxHeight: '5km' }
console.log("p2's parent Properties", p2.birdProperty); // { flySpeed: '20m/s', maxHeight: '5km' }
p1.birdProperty.flySpeed = '30m/s';
console.log("p1's parent Properties", p1.birdProperty); // { flySpeed: '30m/s', maxHeight: '5km' }
console.log("p2's parent Properties", p2.birdProperty); // { flySpeed: '30m/s', maxHeight: '5km' }
`})}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"NOTE: Here we can notice that we were updating flySpeed of peacock p1, and peacock p2's flySpeed has been updated too."}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Third Problem"}),": If we would try to update parent property via child object, and if property is primitive then it will create a new property in child object instead of updating parent property, and same thing will apply to object if we assign new object. When we assign new object in any variable then it will create a new variable in child object and assign reference of that newly created object into that newly created variable(So there will be two variables with same name, one in parent Bird object and second in child Peacock object so it may give you wrong/unexpected results.). But if you are updating any property of object value, then it will get updated in parent object property(As discussed in Second Problem.)."]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Fourth Problem"}),": Suppose ",n.jsx(e.code,{children:"LivingThing"})," class has a property with name ",n.jsx(e.strong,{children:"food"}),", which is set into ",n.jsx(e.strong,{children:"Constructor"})," ",n.jsx(e.strong,{children:"function"})," as below:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-JavaScript",children:`function LivingThing(food) {
    this.food = food;
}
`})}),`
`,n.jsxs(e.p,{children:["And ",n.jsx(e.code,{children:"Bird"})," class also has a property named ",n.jsx(e.strong,{children:"flySpeed"}),", which is also set into ",n.jsx(e.strong,{children:"Constructor"})," ",n.jsx(e.strong,{children:"function"}),", and user can also pass ",n.jsx(e.strong,{children:"food"})," property along with ",n.jsx(e.strong,{children:"flySpeed"})," to set, as Bird is child class of ",n.jsx(e.code,{children:"LivingThing"})," So it should have ",n.jsx(e.strong,{children:"food"})," property as well:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-JavaScript",children:`function Bird(food, flySpeed) {
    // How to set food property as it is declare in parent class ??
    this.flySpeed = flySpeed;
}
`})}),`
`,n.jsxs(e.p,{children:["And ",n.jsx(e.code,{children:"Peacock"})," class also has a property named ",n.jsx(e.strong,{children:"color"}),", which is also set into ",n.jsx(e.strong,{children:"Constructor"})," ",n.jsx(e.strong,{children:"function"})," and user can also pass ",n.jsx(e.strong,{children:"food"})," and  ",n.jsx(e.strong,{children:"flySpeed"})," properties along with ",n.jsx(e.strong,{children:"color"}),", as Peacock is child class of ",n.jsx(e.code,{children:"Bird"})," so it should have ",n.jsx(e.strong,{children:"food"})," and ",n.jsx(e.strong,{children:"flySpeed"})," properties too."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-JavaScript",children:`function Peacock(food, flySpeed, color) {
    // How to set food and flySpeed properties as it is declared in parent class ??
    this.color = color;
}
`})}),`
`,n.jsxs(e.p,{children:["And whenever user is creating an object of ",n.jsx(e.code,{children:"Peacock"})," class, he will be assuming that he will pass all three properties ",n.jsx(e.strong,{children:"color"}),", ",n.jsx(e.strong,{children:"flySpeed"})," and ",n.jsx(e.strong,{children:"food"}),"(e.g. ",n.jsx(e.code,{children:'var peacock = new Peacock("White", "10m/s", "snakes")'}),") and all of these properties will be set. But that is not the case is happening here."]}),`
`,n.jsx(e.p,{children:n.jsx(e.img,{src:"https://raw.githubusercontent.com/NamitaMalik/JavaScript-Inheritance-Revisited/master/Figure%201%20-%20Inheritance%20Revisited.jpg",alt:"Figure 1 - Inheritance Revisited.jpg"})}),`
`,n.jsxs(e.p,{children:["Above diagram shows how ",n.jsx(e.strong,{children:"inheritance"})," is happening through ",n.jsx(e.strong,{children:"prototype chaining"})," in and in addition to it, it also shows that how ",n.jsx(e.strong,{children:"function"})," declared in super class is available in the further sub classes also."]}),`
`,n.jsxs(e.p,{children:["So what is the better approach? How to avoid ",n.jsx(e.strong,{children:"function"})," getting created with each object? How to implement right ",n.jsx(e.strong,{children:"inheritance"}),"? And how to solve all above problems?"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"The Solution"}),":"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"First Solution"}),": Let's keep the ",n.jsx(e.strong,{children:"function"})," of ",n.jsx(e.strong,{children:"constructor"})," ",n.jsx(e.strong,{children:"function"})," at place which is common, so that they can be accessed by all the Peacock ",n.jsx(e.strong,{children:"object"}),". To do this let's make this ",n.jsx(e.strong,{children:"function"})," ",n.jsx(e.strong,{children:"static"})," and to make a ",n.jsx(e.strong,{children:"function"})," ",n.jsx(e.strong,{children:"static"})," in ",n.jsx(e.strong,{children:"JavaScript"}),", all we have to do is put that ",n.jsx(e.strong,{children:"function"})," in the ",n.jsx(e.strong,{children:"prototype"}),"."]}),`
`,n.jsxs(e.p,{children:["So, instead of creating ",n.jsx(e.strong,{children:"function"})," ",n.jsx(e.code,{children:"dance()"})," inside the ",n.jsx(e.strong,{children:"constructor"})," ",n.jsx(e.strong,{children:"function"})," of Peacock, create it inside the ",n.jsx(e.strong,{children:"prototype"})," of Peacock so it will be common for all the objects."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"New Peacock Class:"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-JavaScript",children:`function Peacock() {
}
Peacock.prototype.dance = function () {
    console.log("I am Peacock! I can dance!!");
};
`})}),`
`,n.jsxs(e.p,{children:["Now if we create multiple objects of Peacock class then all the Peacock objects will be having same object in ",n.jsx(e.strong,{children:"prototype"})," property, so all the  Peacock object will get ",n.jsx(e.code,{children:"dance()"})," method via ",n.jsx(e.strong,{children:"prototype chaining"}),". Now ",n.jsx(e.code,{children:"dance()"})," method will take memory once only. :-)"]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:["NOTE: With the help of this solution, our ",n.jsx(e.strong,{children:"First Problem"})," will be solved. :-)"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Second Solution"}),": Create an ",n.jsx(e.strong,{children:"object"})," of ",n.jsx(e.strong,{children:"prototype"})," and pass it in the ",n.jsx(e.strong,{children:"prototype"})," of next object. So ",n.jsx(e.strong,{children:"Inheritance"})," will perform for ",n.jsx(e.strong,{children:"static"}),"/ ",n.jsx(e.strong,{children:"prototype"})," members. This can be seen in the snippet below:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-JavaScript",children:`// LivingThing Class
function LivingThing() {
}
LivingThing.prototype.move = function () {
    console.log("I am living thing! I can move!!");
};
// Bird Class
function Bird() {
}
Bird.prototype = Object.create(LivingThing.prototype);
Bird.prototype.constructor = Bird;
Bird.prototype.fly = function () {
    console.log("I am bird! I can fly!!");
};
// Peacock Class
function Peacock() {
}
Peacock.prototype = Object.create(Bird.prototype);
Peacock.prototype.constructor = Peacock;
Peacock.prototype.dance = function () {
    console.log("I am Peacock! I can dance!!");
};
var peacock = new Peacock("White", "10m/s", "snakes");
peacock.dance(); // I am Peacock! I can dance!!
peacock.fly(); // I am bird! I can fly!!
peacock.move(); // I am living thing! I can move!!
`})}),`
`,n.jsxs(e.p,{children:["In the above snippet, we have passed the copy of ",n.jsx(e.strong,{children:"prototype"})," ",n.jsx(e.strong,{children:"object"})," of LivingThing class in the ",n.jsx(e.strong,{children:"prototype"})," of Bird class, with the help of ",n.jsx(e.strong,{children:"Object.create"}),", as ",n.jsx(e.code,{children:"Bird.prototype = Object.create(LivingThing.prototype)"}),"."]}),`
`,n.jsxs(e.p,{children:["Similarly, in the ",n.jsx(e.strong,{children:"prototype"})," of Peacock class, we have passed the copy of ",n.jsx(e.strong,{children:"prototype"})," ",n.jsx(e.strong,{children:"object"})," of Bird class with the help of ",n.jsx(e.strong,{children:"Object.create()"})," as ",n.jsx(e.code,{children:"Peacock.prototype = Object.create(Bird.prototype);"}),"."]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Object.create"})," was basically takes following two arguments(second one being the optional):"]}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"Prototype"}),`
`,n.jsx(e.li,{children:"Set of properties"}),`
`]}),`
`,n.jsxs(e.p,{children:["On the basis of ",n.jsx(e.strong,{children:"prototype"})," and set of properties passed ",n.jsx(e.strong,{children:"Object.create"})," creates a new object."]}),`
`,n.jsx(e.p,{children:"Let's us see a diagrammatic representation of the snippet given above:"}),`
`,n.jsx(e.p,{children:n.jsx(e.img,{src:"https://raw.githubusercontent.com/NamitaMalik/JavaScript-Inheritance-Revisited/master/Figure%202%20-%20Inheritance%20Revisited.jpg",alt:"Figure 2 - Inheritance Revisited.jpg"})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Third Solution"}),": We passed some properties to our ",n.jsx(e.strong,{children:"Peacock"}),' object which could not be done in the previous implementation. What if we passed "White" , "10m/s" and "snakes" to our Peacock object?']}),`
`,n.jsxs(e.p,{children:["For this problem, we have to call parent class ",n.jsx(e.strong,{children:"constructor"})," into child class ",n.jsx(e.strong,{children:"constructor"})," like other languages. In other languages, when we call parent class ",n.jsx(e.strong,{children:"constructor"})," from child class ",n.jsx(e.strong,{children:"constructor"}),", then parent class ",n.jsx(e.strong,{children:"constructor"})," is called with same object/reference of child class object. So we have to take care of both the things - Calling parent class ",n.jsx(e.strong,{children:"constructor"})," into child class ",n.jsx(e.strong,{children:"constructor"})," and calling the parent class ",n.jsx(e.strong,{children:"constructor"})," with the reference of child class object only. Calling parent class ",n.jsx(e.strong,{children:"constructor"})," into child class ",n.jsx(e.strong,{children:"constructor"})," is very easy and for calling parent class ",n.jsx(e.strong,{children:"constructor"})," with same child class object's reference, we can use ",n.jsx(e.strong,{children:"JavaScript"})," delegation feature( ",n.jsx(e.strong,{children:"call"}),"/ ",n.jsx(e.strong,{children:"apply"}),")."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-JavaScript",children:`// LivingThing Class
function LivingThing(food) {
    this.food = food;
}
LivingThing.prototype.move = function () {
    console.log("I am living thing! I can move!! And I eat: ", this.food);
};
// Bird Class
function Bird(food, flySpeed) {
    LivingThing.apply(this, [food]);
    this.flySpeed = flySpeed;
}
Bird.prototype = Object.create(LivingThing.prototype);
Bird.prototype.constructor = Bird;
Bird.prototype.fly = function () {
    console.log("I am bird! I can fly!! And My speed is: ", this.flySpeed);
};
// Peacock Class
function Peacock(food, flySpeed, color) {
    Bird.call(this, food, flySpeed);
    this.color = color;
}
Peacock.prototype = Object.create(Bird.prototype);
Peacock.prototype.constructor = Peacock;
Peacock.prototype.dance = function () {
    console.log("I am Peacock! I can dance!! And my Color is: ", this.color);
};
var peacock = new Peacock("snakes", "10m/s", "While");
peacock.dance(); // I am Peacock! I can dance!! And my Color is:  While
peacock.fly(); // I am bird! I can fly!! And My speed is:  10m/s
peacock.move(); // I am living thing! I can move!! And I eat:  snakes
`})}),`
`,n.jsxs(e.p,{children:["Closely see the ",n.jsx(e.code,{children:"Peacock"})," function and notice that we have made the ",n.jsx(e.code,{children:"Bird"})," function point to the ",n.jsx(e.code,{children:"Peacock"})," object. We have used ",n.jsx(e.code,{children:"call"})," here as we know that there is no ",n.jsx(e.code,{children:"super"})," keyword in ",n.jsx(e.code,{children:"JavaScript"})," to point to the parent ",n.jsx(e.strong,{children:"constructor"}),". Similarily, we have made ",n.jsx(e.code,{children:"LivingThing"})," function point to the peacock object. So the gist is that we are executing ",n.jsx(e.code,{children:"LivingThing"})," and ",n.jsx(e.code,{children:"Bird"})," functions in ",n.jsx(e.code,{children:"context"})," to ",n.jsx(e.code,{children:"Peacock"})," object only."]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"NOTE: With the help of second and third solution, our remaining Problem will solve. :-)"}),`
`]}),`
`,n.jsx(e.p,{children:"There are a lot of ways to achieve a single thing, but it depends upon the need of the project and the situation that one can decide which way to adopt!"})]})}function dC(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(fp,{...t})}):fp(t)}const uC=Object.freeze(Object.defineProperty({__proto__:null,default:dC},Symbol.toStringTag,{value:"Module"})),hC="data:image/svg+xml;base64,PHN2ZyBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbS1ib2R5LCB1aS1zYW5zLXNlcmlmLCAtYXBwbGUtc3lzdGVtLCBzeXN0ZW0tdWksICZxdW90O1NlZ29lIFVJJnF1b3Q7LCBIZWx2ZXRpY2EsICZxdW90O0FwcGxlIENvbG9yIEVtb2ppJnF1b3Q7LCBBcmlhbCwgc2Fucy1zZXJpZiwgJnF1b3Q7U2Vnb2UgVUkgRW1vamkmcXVvdDssICZxdW90O1NlZ29lIFVJIFN5bWJvbCZxdW90OyIgZm9udC13ZWlnaHQ9IjQwMCIgZGF0YS1kLWNvbXBvbmVudD0ic3ZnIiBmaWxsPSJjdXJyZW50Q29sb3IiIHN0eWxlPSJjb2xvcjpyZ2IoMTMsIDEzLCAxMykiIHZpZXdCb3g9IjAgMCAzMjAgMTM0IiB3aWR0aD0iMTAwJSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB4PSIyIiB5PSIxMCIgd2lkdGg9Ijk4IiBoZWlnaHQ9IjQ1IiByeD0iNyIgZmlsbD0iI0U2QTIzQyIgZmlsbC1vcGFjaXR5PSIuMTUiIHN0cm9rZT0iI0U2QTIzQyIvPjx0ZXh0IHg9IjUxIiB5PSIyOSIgZm9udC1zaXplPSIxMC41IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJjdXJyZW50Q29sb3IiPkZlYXIgb2Y8L3RleHQ+PHRleHQgeD0iNTEiIHk9IjQyIiBmb250LXNpemU9IjEwLjUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9ImN1cnJlbnRDb2xvciI+YmxhbWU8L3RleHQ+PHJlY3QgeD0iMTEyIiB5PSIxMCIgd2lkdGg9Ijk4IiBoZWlnaHQ9IjQ1IiByeD0iNyIgZmlsbD0iI0U2QTIzQyIgZmlsbC1vcGFjaXR5PSIuMTUiIHN0cm9rZT0iI0U2QTIzQyIvPjx0ZXh0IHg9IjE2MSIgeT0iMjkiIGZvbnQtc2l6ZT0iMTAuNSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iY3VycmVudENvbG9yIj5JbmZvcm1hdGlvbjwvdGV4dD48dGV4dCB4PSIxNjEiIHk9IjQyIiBmb250LXNpemU9IjEwLjUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9ImN1cnJlbnRDb2xvciI+d2l0aGhlbGQ8L3RleHQ+PHJlY3QgeD0iMjIyIiB5PSIxMCIgd2lkdGg9Ijk4IiBoZWlnaHQ9IjQ1IiByeD0iNyIgZmlsbD0iI0U2QTIzQyIgZmlsbC1vcGFjaXR5PSIuMTUiIHN0cm9rZT0iI0U2QTIzQyIvPjx0ZXh0IHg9IjI3MSIgeT0iMjkiIGZvbnQtc2l6ZT0iMTAuNSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iY3VycmVudENvbG9yIj5TbG93ZXI8L3RleHQ+PHRleHQgeD0iMjcxIiB5PSI0MiIgZm9udC1zaXplPSIxMC41IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJjdXJyZW50Q29sb3IiPnJlc29sdXRpb248L3RleHQ+PHBhdGggZD0iTTEwMiAzMiBIMTEwIE0yMTIgMzIgSDIyMCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMS41Ii8+PHBhdGggZD0iTTEwNiAyOCBsNCA0IC00IDQiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjEuNSIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0yMTYgMjggbDQgNCAtNCA0IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIxLjUiIGZpbGw9Im5vbmUiLz48cmVjdCB4PSIxMiIgeT0iODMiIHdpZHRoPSIyOTYiIGhlaWdodD0iMzkiIHJ4PSI3IiBmaWxsPSIjM0Q5Qjc4IiBmaWxsLW9wYWNpdHk9Ii4xMyIgc3Ryb2tlPSIjM0Q5Qjc4Ii8+PHRleHQgeD0iMTYwIiB5PSI5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSIxMSIgZm9udC13ZWlnaHQ9IjYwMCIgZmlsbD0iY3VycmVudENvbG9yIj5Qc3ljaG9sb2dpY2FsIHNhZmV0eSArIGFjY291bnRhYmlsaXR5PC90ZXh0Pjx0ZXh0IHg9IjE2MCIgeT0iMTEzIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjEwIiBmaWxsPSJjdXJyZW50Q29sb3IiPkVhcmxpZXIgZGlzY2xvc3VyZSDihpIgRmFzdGVyIGludmVzdGlnYXRpb248L3RleHQ+PC9zdmc+";function mp(t){const e={em:"em",h1:"h1",p:"p",strong:"strong",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Kindness, Firmness, and the Safety to Make Mistakes"}),`
`,n.jsx(e.p,{children:"As long as humans are still building software, mistakes are inevitable. What matters is not whether we make them, but whether we feel safe enough to admit them, take responsibility, and learn from them."}),`
`,n.jsx(e.p,{children:"Over the course of my engineering career, I find myself thinking less about the leaders who never let their teams fail and more about the ones who made it possible to say, “I got this wrong.”"}),`
`,n.jsx(e.p,{children:"The distinction might sound small, but I think it reveals a lot about leadership, accountability and the culture we create around our teams."}),`
`,n.jsx(e.p,{children:"My first manager at an early-stage startup treated everyone with respect, including a complete beginner like me. He took my opinions seriously, even when I probably didn't have enough experience to back them up. He encouraged curiosity and participation rather than making me feel that I had to earn the right to speak. That respect made me want to work harder, learn faster and do better. I wanted to live up to the trust he placed in me."}),`
`,n.jsx(e.p,{children:"Years later, another manager in Sweden said something I still remember: “The one who works will make mistakes.” He didn't want people to spend their time endlessly apologising when something went wrong. He wanted them to reflect. Did we have the right checks and balances? What could we improve? What could we learn from what happened? That stayed with me because it changed the conversation from who had failed to what we needed to understand and improve."}),`
`,n.jsx(e.p,{children:"I don't think he was suggesting that mistakes didn't matter. Quite the opposite. He was asking us to take responsibility for them in a way that could actually lead to something better."}),`
`,n.jsx(e.p,{children:"Over time, I've come to understand this as one of the most valuable things a leader can offer: psychological safety. Not a promise that nothing will happen when you make a mistake. Not protection from difficult conversations or accountability. But the confidence that you can tell the truth about what happened without being humiliated for it."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Psychological safety is not the absence of accountability. It is the confidence to face accountability without first having to protect yourself."})}),`
`,n.jsx(e.p,{children:"We have all seen what happens when that confidence is missing in an organization. In high-pressure environments, it is not uncommon to see critical incident calls stretch on for hours. A room filled with brilliant engineering minds — from Senior Engineers, Tech Leads to Engineering Managers can spend massive amounts of time simply trying to establish the basic facts. When a culture is driven by fear, teams naturally become reluctant to disclose recent changes, passing the buck or distancing themselves from potential risks. It takes hours to surface information that should have been available in minutes, wasting valuable engineering effort trying to uncover what happened instead of focusing on how to resolve the problem. Imagine if someone had felt able to say at the beginning, “We made this change. It might be related. Let's investigate.” The incident would still have needed fixing. The change would still have needed scrutiny. The people involved would still have had to take responsibility. But we could have started with the facts."}),`
`,n.jsx(e.p,{children:"When people fear blame, even processes designed to improve quality can become a way of protecting themselves rather than taking ownership. Testing becomes a way to shift responsibility, rather than a shared effort to build confidence in the outcome."}),`
`,n.jsx("img",{src:hC,alt:"Fear of blame leads to information being withheld and slower resolution. Psychological safety with accountability enables earlier disclosure and faster investigation."}),`
`,n.jsx(e.p,{children:"For me, that is where psychological safety becomes much more than a leadership concept. It has real consequences for how an engineering organisation responds when something goes wrong. When people are afraid to own their actions, the organisation loses time, information and the opportunity to learn. When they can be honest, the problem becomes visible sooner. And that is why I don't believe psychological safety and accountability are competing priorities. They reinforce each other. If I know that admitting a mistake will lead to a constructive conversation rather than humiliation, I am much more likely to admit it. I am more likely to ask for help, raise a risk early, challenge an assumption or tell my manager that something isn't working. I can focus on the problem instead of managing my image. That doesn't mean every mistake should be excused. Intent matters, and so does judgement. There is a difference between an unexpected outcome despite reasonable precautions and knowingly taking an irresponsible shortcut. There is a difference between getting something wrong and deliberately hiding what you did. Making mistakes is human. Refusing to think through foreseeable risks, ignoring safeguards or concealing facts raises a different set of questions."}),`
`,n.jsx(e.p,{children:"In engineering, good intentions alone are not enough. We still need risk assessments, appropriate reviews, testing, monitoring, rollback plans and checks and balances proportionate to the change. We need to think about the potential impact of our decisions. We need to recognise when we don't know enough and ask for help. Psychological safety does not remove these responsibilities. It should make it easier to exercise them, including when the right thing to do is admit that our judgement was wrong."}),`
`,n.jsx(e.p,{children:"The question after an incident should not stop at who made the change. We need to understand what happened, why it happened, which safeguards existed, whether they worked, what we should change and what we need to learn. Individual ownership and system-level learning are not alternatives. We need both."}),`
`,n.jsx(e.p,{children:"There is another lesson I have learnt about kindness in leadership. Being nice is not the same as creating safety. I once had a manager who was genuinely nice: respectful, polite, non-controlling and never harsh. Yet at that stage in my career, I needed more than that. I needed guidance, challenge, direction and active mentorship. I needed someone who would work closely with me, sharpen my thinking, open up new possibilities and occasionally push me beyond my comfort zone. He completed every process-required meeting, but there was little real involvement beyond that. That experience helped me recognise that a leader can be perfectly pleasant and still leave people without the support they need to grow. Being non-toxic is a good starting point, but meaningful leadership requires presence. It means understanding individuals, investing in their development and being willing to engage when the conversation is difficult."}),`
`,n.jsx(e.p,{children:"Sometimes kindness means listening. Sometimes it means making time when someone is struggling. Sometimes it means challenging a decision or telling someone honestly that their work isn't good enough yet. Sometimes it means helping them see a path they cannot see for themselves. This is where kindness and firmness belong together. The leaders I remember were not people who avoided difficult conversations. They could challenge my thinking, give direct feedback and expect ownership. Their standards were real. The difference was that I could hear difficult feedback without feeling diminished by it. There is a difference between saying, “This isn't good enough,” and making someone feel that they aren't good enough. There is a difference between holding someone accountable and humiliating them. And there is a difference between giving someone room to learn and leaving them to figure everything out alone."}),`
`,n.jsx(e.p,{children:"Firmness without respect can make people defensive. Kindness without involvement can leave them directionless. The combination I admire is one that gives people both the confidence to be honest and the responsibility to do better. I think this is the safety net a leader provides. Not a guarantee that there will be no consequences, but an environment where people can bring the truth to the table, own their part in what happened and work towards a better outcome. That kind of safety doesn't make people careless. Ideally, it makes them more thoughtful, more open and more willing to take responsibility. It gives them the confidence to admit uncertainty, surface problems and challenge assumptions before those problems grow."}),`
`,n.jsx(e.p,{children:"I have become less interested in leaders who never let their teams fail. I respect and admire the ones who make it possible to say, “I got this wrong.”"}),`
`,n.jsx(e.p,{children:n.jsx(e.em,{children:"A mistake doesn't define me. Hiding it doesn't help anyone. Learning from it is my responsibility."})}),`
`,n.jsx(e.p,{children:"The leaders who shaped me understood that respect and high standards can coexist. They made it possible to be honest without being afraid, while still expecting me to think, take ownership and improve."}),`
`,n.jsx(e.p,{children:"That is the kind of leadership I value."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Kindness that creates safety. Firmness that upholds standards. Leadership that makes it possible to own a mistake and learn from it."})})]})}function pC(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(mp,{...t})}):mp(t)}const fC=Object.freeze(Object.defineProperty({__proto__:null,default:pC},Symbol.toStringTag,{value:"Module"}));function gp(t){const e={blockquote:"blockquote",code:"code",h1:"h1",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Lazy Loading with Angular2 Routing"}),`
`,n.jsxs(e.p,{children:["Let's dive into one of the cool features of ",n.jsx(e.strong,{children:"Angular2 Router"})," i.e. ",n.jsx(e.strong,{children:"Lazy Loading of Modules"}),`.
If we go back to `,n.jsx(e.strong,{children:"Angular 1.x"})," we know that, there we were defining ",n.jsx(e.strong,{children:"Controller"})," and ",n.jsx(e.strong,{children:"Template"}),` for each route, while templates were getting
lazy loaded, but js files weren't. But in `,n.jsx(e.strong,{children:"Angular2"})," it is possible to load your modules as and when they are required. So let's not get into the ",n.jsx(e.code,{children:"coding mode"}),"."]}),`
`,n.jsx(e.p,{children:"So we have this small app which has basically 3 modules:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"AppModule - This is the root module of the application"}),`
`,n.jsxs(e.li,{children:["TasksModule - This is the child module of ",n.jsx(e.code,{children:"AppModule"})]}),`
`,n.jsxs(e.li,{children:["UsersModule - Child module of ",n.jsx(e.code,{children:"AppModule"}),", sibling module of ",n.jsx(e.code,{children:"TasksModule"})]}),`
`]}),`
`,n.jsx(e.p,{children:"Following are various components in which the application has been divided:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"AppComponent - This is the root component of the application."}),`
`,n.jsx(e.li,{children:"TasksComponent - It is the parent component in the tasks module."}),`
`,n.jsx(e.li,{children:"TaskDetailComponent - This component is responsible for displaying details of the task."}),`
`,n.jsx(e.li,{children:"TasksListComponent - Component that displays list of tasks."}),`
`,n.jsx(e.li,{children:"UsersComponent - It is the parent component in the users module and container component for UsersListComponent."}),`
`,n.jsx(e.li,{children:"UsersListComponent - Displays the list of users"}),`
`]}),`
`,n.jsx(e.p,{children:"Before we move on further, let's note that there are 3 other important parts of this app:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"ROUTING - This is the main router for our application."}),`
`,n.jsx(e.li,{children:"TASKS_ROUTING - This is the child router. Takes care of routing for tasks module."}),`
`,n.jsx(e.li,{children:"USERS_ROUTING - Takes care of routing for users module."}),`
`]}),`
`,n.jsx(e.p,{children:"Now, let's see some code now:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-app.module.ts",children:`import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
`})}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"I am assuming that readers of this blog have some idea about Angular2 and its routing but would still try to give overview of few things."}),`
`]}),`
`,n.jsxs(e.p,{children:["In the above code you can see that we have imported ",n.jsx(e.strong,{children:"NgModule"})," and ",n.jsx(e.strong,{children:"BrowserModule"}),". We need ",n.jsx(e.code,{children:"NgModule"}),` decorator for defining module-level components, directives, pipes etc.
`,n.jsx(e.strong,{children:"BrowserModule"})," registers critical application service providers and also re-exports ",n.jsx(e.strong,{children:"CommonModule"})," from ",n.jsx(e.code,{children:"@angular/common"}),`.
We provide `,n.jsx(e.code,{children:"AppComponent"})," in ",n.jsx(e.strong,{children:"declarations"}),", to tell ",n.jsx(e.strong,{children:"Angular"})," that  ",n.jsx(e.code,{children:"AppComponent"})," belongs to ",n.jsx(e.code,{children:"AppModule"}),`.
`,n.jsx(e.strong,{children:"bootstrap"})," is to advise ",n.jsx(e.strong,{children:"Angular"})," to bootstrap ",n.jsx(e.code,{children:"AppComponent"})," into the ",n.jsx(e.strong,{children:"DOM"})," once ",n.jsx(e.code,{children:"AppModule"})," starts."]}),`
`,n.jsxs(e.p,{children:["Our ",n.jsx(e.code,{children:"AppComponent"})," looks something like this:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-app.component.ts",children:`import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: \`
     <nav>
        <a routerLink="/tasks">Tasks</a>
        <a routerLink="/users">Users</a>
      </nav>
      <router-outlet></router-outlet>
    \`
})

export class AppComponent {
}
`})}),`
`,n.jsxs(e.p,{children:["As you can see above, we have two anchor tags for navigation - one takes us to ",n.jsx(e.code,{children:"tasks"})," page and another one takes us to ",n.jsx(e.code,{children:"users"}),` page.
You can see `,n.jsx(e.code,{children:"routerLink"})," property here which has a string path."]}),`
`,n.jsxs(e.p,{children:["Let's see ",n.jsx(e.code,{children:"TasksModule"}),":"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tasks.module.ts",children:`import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TasksComponent} from './tasks.component';
import {TaskDetailComponent} from './task-detail.component';
import {TasksListComponent} from './tasks-list.component';
import {TasksRoutingModule} from "./tasks-routing.module";

@NgModule({
    imports: [
        CommonModule,
        TasksRoutingModule
    ],
    declarations: [
        TasksComponent,
        TaskDetailComponent,
        TasksListComponent
    ]
})
export class TasksModule {
}
`})}),`
`,n.jsxs(e.p,{children:["We have imported ",n.jsx(e.strong,{children:"CommonModule"})," because it provides important directives such as ",n.jsx(e.strong,{children:"NgIf"})," and ",n.jsx(e.strong,{children:"NgFor"}),`.
And here are the various components:`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tasks.component.ts",children:`import {Component} from '@angular/core';

@Component({
    template: \`
        <h2>Your Tasks</h2>
        <router-outlet></router-outlet>
    \`,
})
export class TasksComponent {
}
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tasks-list.component.ts",children:`import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    template: \`
    <div>
        <ul class="bubble">
            <li *ngFor="let task of tasks let i=index" (click)="onSelect(task)">
                <span>{{i+1}}.</span>
                <span>{{task.title}}</span>
            </li>
        </ul>
    </div>
    \`,
})

export class TasksListComponent {

    constructor(private router:Router) {
    }

    private tasks = [
        {id: '1', title: 'Code Cleanup'}, 
        {id: '2', title: 'Review Code'}, 
        {id: '3', title: 'Build to Prod'}
    ];
    private errorMessage:any = '';

    onSelect(task) {
        this.router.navigate(['/tasks', task.id]);
    }
}
`})}),`
`,n.jsxs(e.p,{children:[`In order to keep the demo as simple as possible, we have a small hard-coded list of tasks. We are displaying a list of tasks
and on clicking on each task, user would be navigated to `,n.jsx(e.code,{children:"task-detail"})," page where details of a task would be displayed."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-task-detail.component.ts",children:`import {Component} from '@angular/core';

@Component({
    template: \`
    <div>
        <span>Some task detail to show up here.</span>
    </div>
    \`
})

export class TaskDetailComponent {
}
`})}),`
`,n.jsxs(e.p,{children:["And here is the",n.jsx(e.code,{children:"TasksRoutingModule"})," which has route configuration for our",n.jsx(e.code,{children:"tasks"})," module:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tasks-routing.module.ts",children:`import {NgModule}     from '@angular/core';
import {RouterModule} from '@angular/router';
import {TasksComponent}    from './tasks.component';
import {TaskDetailComponent}  from './task-detail.component';
import {TasksListComponent} from './tasks-list.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: TasksComponent,
                children: [
                    {
                        path: '',
                        component: TasksListComponent
                    },
                    {
                        path: ':id',
                        component: TaskDetailComponent,
                    }
                ]
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class TasksRoutingModule {
}
`})}),`
`,n.jsxs(e.p,{children:["So when a user lands to the application, by default ",n.jsx(e.code,{children:"tasks"})," module would be displayed to him. So when the path would be simply ",n.jsx(e.code,{children:"/tasks"}),`, user would see list of tasks and once
user clicks on a particular task, id  would be added as the `,n.jsx(e.strong,{children:"routeParam"})," and route would change to '/tasks/id'(id of that particular task)."]}),`
`,n.jsxs(e.p,{children:["Now, let's quickly have a look at the ",n.jsx(e.code,{children:"users"})," module."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-users.module.ts",children:`import {NgModule}       from '@angular/core';
import {CommonModule}   from '@angular/common';
import {UsersComponent}    from './users.component';
import {UsersListComponent}  from './users-list.component';
import {UsersRoutingModule} from "./users-routing.module";

@NgModule({
    imports: [
        CommonModule,
        UsersRoutingModule
    ],
    declarations: [
        UsersComponent,
        UsersListComponent
    ]
})
export class UsersModule {
}
`})}),`
`,n.jsxs(e.p,{children:["and here is the ",n.jsx(e.code,{children:"UsersComponent"})," which is the parent component for ",n.jsx(e.code,{children:"UsersList"}),". Here are both the components:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-users.component.ts",children:`import {Component} from '@angular/core';

@Component({
    template: \`
    <h2>Users List</h2>
    <router-outlet></router-outlet>
  \`,
})
export class UsersComponent {
}
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-users-list.component.ts",children:`import {Component} from '@angular/core';

@Component({
    template: \`
    <div>
        <ul class="bubble">
            <li *ngFor="let user of users let i=index">
                <span>{{i+1}}.</span>
                <span>{{user.name}}</span>
            </li>
        </ul>
    </div>
    \`,
})

export class UsersListComponent {
    private users = [
        {id: '1', name: 'John Doe'},
        {id: '2', name: 'Jane Roe'},
        {id: '3', name: 'John Smith'}
    ];
}
`})}),`
`,n.jsxs(e.p,{children:["and here is the routing for ",n.jsx(e.code,{children:"Users"})," module:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-users.routing.ts",children:`import {NgModule}     from '@angular/core';
import {RouterModule} from '@angular/router';
import {UsersComponent}    from './users.component';
import {UsersListComponent}  from './users-list.component';


@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: UsersComponent,
                children: [
                    {
                        path: '',
                        component: UsersListComponent
                    }
                ]
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class UsersRoutingModule {
}
`})}),`
`,n.jsxs(e.p,{children:["Let's quickly move onto the place where all the magic happens i.e. ",n.jsx(e.code,{children:"AppRoutingModule"}),":"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-app-routing.module.ts",children:`import {NgModule}     from '@angular/core';
import {RouterModule} from '@angular/router';


@NgModule({
    imports: [
        RouterModule.forRoot([
            {path: '', redirectTo: '/tasks', pathMatch: 'full'},
            {path: 'tasks', loadChildren: 'app/tasks/tasks.module#TasksModule'},
            {path: 'users', loadChildren: 'app/users/users.module#UsersModule'}
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}
`})}),`
`,n.jsxs(e.p,{children:["Well, as you can see in the above code, since by default we are redirecting our page to ",n.jsx(e.code,{children:"tasks"}),` so our tasks module would get loaded. When the route changes to '/users', the routes module would be loaded. This has been achieved
using the `,n.jsx(e.code,{children:"loadChildren"})," property defined on the route. ",n.jsx(e.strong,{children:"Angular"}),` will fetch the module at the location and then load the routes defined in its router config.
The path to the file and name of the module is separated by `,n.jsx(e.code,{children:"#"}),". The ",n.jsx(e.strong,{children:"Router"})," reads the ",n.jsx(e.code,{children:"ModuleName"})," given after ",n.jsx(e.code,{children:"#"}),` and loads the module accordingly.
So we did not load `,n.jsx(e.code,{children:"UsersModule"})," and ",n.jsx(e.code,{children:"TasksModule"})," in our ",n.jsx(e.code,{children:"AppComponent"}),", instead used ",n.jsx(e.code,{children:"loadChildren"})," property in the routing config to lazy load our modules."]}),`
`,n.jsx(e.p,{children:"Here is the quick view of what is happening:"}),`
`,n.jsx(e.p,{children:n.jsx(e.img,{src:"https://raw.githubusercontent.com/NamitaMalik/Lazy-Loading-with-Angular2-Routing/master/assets/view.gif",alt:"view.gif"})}),`
`,n.jsx(e.p,{children:"You can see tasks module gets loaded only when we click on the Tasks link. Similarly, users module also gets when we click on the Users link."}),`
`,n.jsxs(e.p,{children:["Well that's all for now, though ",n.jsx(e.strong,{children:"lazy loading"})," is an advantage of ",n.jsx(e.strong,{children:"Angular Router"}),", it has a disadvantage too i.e. there would be some waiting every time when a new module is being loaded. This issue can be resolved using ",n.jsx(e.strong,{children:"preloading"}),` of modules which
I'll be discussing in my upcoming blog..till then Happy Learning!`]})]})}function mC(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(gp,{...t})}):gp(t)}const gC=Object.freeze(Object.defineProperty({__proto__:null,default:mC},Symbol.toStringTag,{value:"Module"}));function xp(t){const e={blockquote:"blockquote",code:"code",h1:"h1",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Linked List in Javascript"}),`
`,n.jsxs(e.p,{children:["Every now and then we encounter a situation when we need to use data structures. One such data structure form is ",n.jsx(e.strong,{children:"Linked List"}),`.
`,n.jsx(e.strong,{children:"Caching"})," is one such example where ",n.jsx(e.strong,{children:"Linked List"}),` are used.
In case of `,n.jsx(e.strong,{children:"Java"}),", ",n.jsx(e.strong,{children:"Linked List"})," is available in ",n.jsx(e.strong,{children:"Collection"}),` package/framework.
But in `,n.jsx(e.strong,{children:"Javascript"}),", one needs to implement it."]}),`
`,n.jsx(e.p,{children:"A linked list is linear collection of data elements where each element/node points to next element/node."}),`
`,n.jsxs(e.p,{children:["Below diagram shows a ",n.jsx(e.strong,{children:"Linked List"})," :"]}),`
`,n.jsx(e.p,{children:n.jsx(e.img,{src:"https://raw.githubusercontent.com/NamitaMalik/Linked-list-in-Javascript/master/Linked_List.png",alt:"Linked_List"})}),`
`,n.jsx(e.p,{children:"Well, the agenda of this blog is to:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"Create a Linked List"}),`
`,n.jsx(e.li,{children:"Delete a node from linked list"}),`
`,n.jsx(e.li,{children:"Print the linked list"}),`
`]}),`
`,n.jsx(e.p,{children:"So here we go..."}),`
`,n.jsx(e.p,{children:"Let's have two classes :"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.strong,{children:"Node"})}),`
`,n.jsx(e.li,{children:n.jsx(e.strong,{children:"LinkedList"})}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Node"})," class would be responsible for representing a node. ",n.jsx(e.strong,{children:"Node"})," class will have the data and reference to the next node."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-Javascript",children:`class Node {
    constructor(data) {
        this.data = data;
    }

    getNext() {
        return this.next;
    }

    setNext(n) {
        this.next = n;
    }

    getData() {
        return this.data;
    }

}
`})}),`
`,n.jsxs(e.p,{children:["As you can see above, we have ",n.jsx(e.code,{children:"getNext"}),", ",n.jsx(e.code,{children:"setNext"})," and ",n.jsx(e.code,{children:"getData"})," functions."]}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"setNext"})," function is for setting the next/subsequent node in the node."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getNext"})," function is to fetch the next node reference."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getData"})," function is to get the data."]}),`
`]}),`
`,n.jsxs(e.p,{children:["Now, let's implement the ",n.jsx(e.code,{children:"LinkedList"})," class. It should be have the following functionality:"]}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"Adding a new node to Linked List"}),`
`,n.jsx(e.li,{children:"Removing a node from Linked List"}),`
`,n.jsx(e.li,{children:"Print the Linked List"}),`
`]}),`
`,n.jsxs(e.p,{children:["Below is the ",n.jsx(e.code,{children:"LinkedList"})," class:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-Javascript",children:`class LinkedList {
    constructor() {
        this.root = undefined;
    }

    enQueue(value) {
        let node = new Node(value);
        if (!this.root) {
            this.root = node;
        } else {
            let temp = this.root;
            while (temp.getNext()) {
                temp = temp.getNext();
            }
            temp.setNext(node);
        }
    }

    print() {
        let result = [];
        let temp = this.root;
        while (temp) {
            result.push(temp.getData());
            temp = temp.getNext();
        }
        console.log(result.join(' => '));
    };

    deQueue(val) {
        let temp;
        let previousNode;
        if (!this.root) {
            return;
        }
        if (this.root.getData() === val) {
            this.root = this.root.getNext();
            return;
        }
        previousNode = this.root;
        temp = this.root.getNext();
        while (temp) {
            if (temp.getData() !== val) {
                previousNode = temp;
                temp = temp.getNext();
            } else {
                previousNode.setNext(temp.getNext());
                break;
            }
        }
    }
}
`})}),`
`,n.jsx(e.p,{children:"Let's look at each function closely:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"enQueue"})," function"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-Javascript",children:`enQueue(value) {
    let node = new Node(value);
    if (!this.root) {
        this.root = node;
    } else {
        let temp = this.root;
        while (temp.getNext()) {
            temp = temp.getNext();
        }
        temp.setNext(node);
    }
}
`})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"enQueue"})," function is to add a node to a ",n.jsx(e.code,{children:"linked list"}),". As we know ",n.jsx(e.code,{children:"root"})," node is the first node in the ",n.jsx(e.code,{children:"linked list"}),`.
If node does not have reference to any node we need to initialize root node first, else if root node has reference of a node, we check if there is another node after the root node.
As soon as we get a node which doesn't have any next/subsequent node, we add the intended node.`]}),`
`,n.jsxs(e.ol,{start:"2",children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"deQueue"})," function"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-Javascript",children:`deQueue(val) {
    let temp;
    let previousNode;
    if (!this.root) {
        return;
    }
    if (this.root.getData() === val) {
        this.root = this.root.getNext();
        return;
    }
    previousNode = this.root;
    temp = this.root.getNext();
    while (temp) {
        if (temp.getData() !== val) {
            previousNode = temp;
            temp = temp.getNext();
        } else {
            previousNode.setNext(temp.getNext());
            break;
        }
    }
}
`})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"deQueue"}),` function is responsible for deleting a node in the linked list. In order to delete a node, we remove the reference of the node to be deleted from its
previous node and reference of next node in the linked list is assigned to the previous node. And when removed node is the root node,
we simply refer next node of the root node as a root node.`]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"Dereference node will be automatically collected by Garbage Collector."}),`
`]}),`
`,n.jsxs(e.ol,{start:"3",children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"print"})," function"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-Javascript",children:`print() {
    let result = [];
    let temp = this.root;
    while (temp) {
        result.push(temp.getData());
        temp = temp.getNext();
    }
    console.log(result.join(' => '));
};
`})}),`
`,n.jsx(e.p,{children:"We initialize the temp variable by the root node and traverse through the linked list till we reach end of it."}),`
`,n.jsx(e.p,{children:"Let's see some action now:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-Javascript",children:`let list = new LinkedList(); // Initializing linked list
list.enQueue(5); //Adding 5 to linked list
list.enQueue(6);
list.enQueue(1);
list.enQueue(8);
list.enQueue(9);
list.enQueue(6);
console.log("Printing the linked list before removing 6");
list.print();
list.deQueue(6); // Removing 6 from linked list
console.log("Printing linked list after removing 6");
list.print();
`})}),`
`,n.jsx(e.p,{children:"Output of the above code is:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-Javascript",children:`Printing the linked list before removing 6
5 => 6 => 1 => 8 => 9 => 6
Printing linked list after removing 6
5 => 1 => 8 => 9 => 6
`})}),`
`,n.jsxs(e.p,{children:["In the above output, one can notice the first call to the ",n.jsx(e.code,{children:"print"}),` function prints the entire linked list and then on making the second call
linked list printed which has `,n.jsx(e.code,{children:"6"})," removed from it as we have called ",n.jsx(e.code,{children:"deQueue"})," function to remove node with data/value ",n.jsx(e.code,{children:"6"})," in it."]})]})}function xC(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(xp,{...t})}):xp(t)}const vC=Object.freeze(Object.defineProperty({__proto__:null,default:xC},Symbol.toStringTag,{value:"Module"}));function vp(t){const e={code:"code",h1:"h1",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Loading Modules Conditionally in Angular"}),`
`,n.jsxs(e.p,{children:["One of the very common features of Admin dashboard applications is ",n.jsx(e.strong,{children:"Access Control"}),`.
This is usually achieved through a set of permissions. A feature is displayed or hidden from the user depending upon the set of permissions he/she has.
One can build a service or a directive or both to achieve this.`]}),`
`,n.jsx(e.p,{children:`Now, what if user should doesn't have permission to access the complete module? We can off course hide
all the components belonging to that module from user but wouldn't it be great if we don't even load the
entire module for that user.`}),`
`,n.jsx(e.p,{children:`In one of my previous blogs, I had discussed about lazy loading angular modules using routing.
So let's now extend this feature a bit more and load the modules conditionally i.e. as per user access.`}),`
`,n.jsx(e.p,{children:"I have a simple Angular application that has 3 modules:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"AppModule"})," - This is the root module of the application."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"TasksModule"})," - Child Module. Comprises of ",n.jsx(e.code,{children:"TasksComponent"})," and ",n.jsx(e.code,{children:"TasksListComponent"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"UsersModule"})," - Child Module. Comprises of ",n.jsx(e.code,{children:"UsersComponent"})," and ",n.jsx(e.code,{children:"UsersListComponent"}),"."]}),`
`]}),`
`,n.jsxs(e.p,{children:["Now, we want only users with permission ",n.jsx(e.code,{children:"View Users"})," to be able to access users related info."]}),`
`,n.jsxs(e.p,{children:["First, let's quickly review over ",n.jsx(e.code,{children:"AppRoutingModule"}),". It looks like this:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-TypeScript",children:`import {NgModule} from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: '', redirectTo: '/tasks', pathMatch: 'full'},
      {path: 'tasks', loadChildren: './tasks/tasks.module#TasksModule'},
      {path: 'users', loadChildren: './users/users.module#UsersModule', data: {permission: 'View Users'}
      }
    ], {
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
`})}),`
`,n.jsxs(e.p,{children:["Let's create a service which will make a ",n.jsx(e.code,{children:"http request"}),` and fetch the permissions for the logged in user.
For demo purposes, I have taken a hardcoded json in my assets folder. My `,n.jsx(e.code,{children:"app.service.ts"})," looks as given below:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-TypeScript",children:`import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  availablePermissions: any[];
  constructor(private http: HttpClient) { }
  public load() {
    return new Promise((resolve) => {
      this.http.get<any>('assets/permissions.json')
        .subscribe( (response) => {
        this.availablePermissions = response.availablePermissions;
        resolve(true);
      });
    });
  }
}
`})}),`
`,n.jsxs(e.p,{children:["Now, let's move to our ",n.jsx(e.code,{children:"AppModule"}),`. With respect to this demo, I would want permissions for a user to be
available before the app is initialized, therefore I do the following:`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:` providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (appService: AppService) => () => appService.load(),
      deps: [AppService],
      multi: true
    }
  ],
`})}),`
`,n.jsxs(e.p,{children:["Now, next step is to add a ",n.jsx(e.code,{children:"Route guard"}),` to our application. A route guard supports multiple guard interfaces.
For our case we would need to implement `,n.jsx(e.code,{children:"CanLoad"})," interface which will mediate navigation to ",n.jsx(e.code,{children:"UsersModule"})," asynchronously."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-TypeScript",children:`import { Injectable } from '@angular/core';
import { CanLoad, Route } from '@angular/router';
import { AppService } from './app.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  constructor(private appService: AppService) {
  }

  canLoad(route: Route): boolean {
    return this.appService.availablePermissions.indexOf(route.data.permission) !== -1;
  }
}
`})}),`
`,n.jsxs(e.p,{children:["In the above code, we simple created an ",n.jsx(e.code,{children:"AuthGuard"})," class which implements ",n.jsx(e.code,{children:"CanLoad"})," interface. In ",n.jsx(e.code,{children:"canLoad"}),`
function we basically check if the permission needed to access `,n.jsx(e.code,{children:"UsersModule"}),` is available to the user and returns
a boolean accordingly. You can also return an observable of boolean from the `,n.jsx(e.code,{children:"canLoad"}),` function, which is very
likely in real world applications.`]}),`
`,n.jsxs(e.p,{children:["Now, the last part. We need do a minor addition in our ",n.jsx(e.code,{children:"AppRoutingModule"}),` where we have configured our routes.
We will add a `,n.jsx(e.code,{children:"canLoad"})," property to our route definition for ",n.jsx(e.code,{children:"UsersModule"})," and provide our ",n.jsx(e.code,{children:"AuthGuard"})," to it."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-TypeScript",children:`import {NgModule} from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: '', redirectTo: '/tasks', pathMatch: 'full'},
      {path: 'tasks', loadChildren: './tasks/tasks.module#TasksModule'},
      {path: 'users', loadChildren: './users/users.module#UsersModule', data: {permission: 'View Users'},
        canLoad: [AuthGuard]}
    ], {
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.img,{src:"https://raw.githubusercontent.com/NamitaMalik/Loading-modules-conditionally-in-Angular/master/src/assets/Preloaded_Module.gif",alt:"Users-Module-Not-Loading"})}),`
`,n.jsxs(e.p,{children:["Now, you would notice, even though our ",n.jsx(e.code,{children:"preloadingStrategy"})," is ",n.jsx(e.code,{children:"PreloadAllModules"}),", it will load ",n.jsx(e.code,{children:"UsersModule"}),`
only when our `,n.jsx(e.code,{children:"AuthGuard"})," returns true. You can also use a custom ",n.jsx(e.code,{children:"preloadingStrategy"})," if you want to."]}),`
`,n.jsx(e.p,{children:n.jsx(e.img,{src:"https://raw.githubusercontent.com/NamitaMalik/Loading-modules-conditionally-in-Angular/master/src/assets/Preloaded_Module.gif",alt:"Uses-Module-Not-Loading-On-PreloadStrategy"})}),`
`,n.jsx(e.p,{children:"Well, that's all for this post. Happy Learning!"})]})}function yC(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(vp,{...t})}):vp(t)}const jC=Object.freeze(Object.defineProperty({__proto__:null,default:yC},Symbol.toStringTag,{value:"Module"}));function yp(t){const e={code:"code",h1:"h1",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Map VS FlatMap"}),`
`,n.jsxs(e.p,{children:["Anyone who has worked upon/read about ",n.jsx(e.strong,{children:"RXJS"})," must be aware about various operators that this library includes, some of them are:"]}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"0f"})," - It simply converts a list of arguments into an ",n.jsx(e.strong,{children:"Observable"})," sequence."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"from"})," - Creates an ",n.jsx(e.strong,{children:"Observable"})," sequence from an array or an object that can be iterated."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"map"})," - Transforms each element of the ",n.jsx(e.strong,{children:"Observable"})," sequence. Can be considered similar to ",n.jsx(e.strong,{children:"map"})," function of ",n.jsx(e.strong,{children:"Array"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"subscribe"})," - This operator is basically the connecting point between an ",n.jsx(e.strong,{children:"Observer"})," and ",n.jsx(e.strong,{children:"Observable"}),". An ",n.jsx(e.strong,{children:"Observer"}),` receives item/error/completion notification from
`,n.jsx(e.strong,{children:"Observable"})," using the ",n.jsx(e.strong,{children:"subscribe"})," operator. A ",n.jsx(e.strong,{children:"cold observable"})," would start emitting value only when an ",n.jsx(e.strong,{children:"observer"})," subscribes to it."]}),`
`]}),`
`,n.jsx(e.p,{children:"The above ones are like most commonly used and you would get to know many new ones."}),`
`,n.jsxs(e.p,{children:["Well, I encountered a situation where I had ",n.jsx(e.strong,{children:"Observable"})," of ",n.jsx(e.strong,{children:"Observables"})," and I wanted a single stream out of them and to solve this I got introduced to another interesting operator:"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"flatMap"})," - It basically ",n.jsx(e.strong,{children:"merges an observable sequence of observable sequences into a single observable sequence."})]}),`
`,n.jsx(e.p,{children:"So, let's take a sample snippet to see how the it works. We have an array of visitors as given below:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-JavaScript",children:`let visitors = [
    "Namita",
    "Amit",
    "Rohit",
    "Neetika"
];
`})}),`
`,n.jsxs(e.p,{children:["Now, we want this array to be converted into an ",n.jsx(e.strong,{children:"Observable"})," sequence, so it can be done something like:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-JavaScript",children:`let source = Rx.Observable.from(visitors)
    .map(x => 'Hello ' + x);
`})}),`
`,n.jsx(e.p,{children:"We will now have to subscribe to this sequence:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-JavaScript",children:`source.subscribe(x => document.getElementById('flatMap').innerText += x + "\\n");
`})}),`
`,n.jsx(e.p,{children:"And view would look like this:"}),`
`,n.jsx(e.p,{children:n.jsx(e.img,{src:"https://raw.githubusercontent.com/NamitaMalik/Map-vs-FlatMap/master/assets/map-flatMap.png",alt:"map-flatMap.png"})}),`
`,n.jsxs(e.p,{children:["But what we wanted to see was how to work with ",n.jsx(e.strong,{children:"observable of observable sequence"}),", so for that let's make some changes as given below:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-JavaScript",children:`let source = Rx.Observable.from(visitors)
    .map(x => Rx.Observable.of('Hello ' + x));
`})}),`
`,n.jsx(e.p,{children:"... and our view would look something like this:"}),`
`,n.jsx(e.p,{children:n.jsx(e.img,{src:"https://raw.githubusercontent.com/NamitaMalik/Map-vs-FlatMap/master/assets/Map-error.png",alt:"Map-error.png"})}),`
`,n.jsxs(e.p,{children:["So how to fix this up? Well, now we'll have to use our ",n.jsx(e.strong,{children:"flatMap"})," operator as given below:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-JavaScript",children:`let source = Rx.Observable.from(visitors)
    .flatMap(x => Rx.Observable.of('Hello ' + x));
`})}),`
`,n.jsx(e.p,{children:"and now one can simply subscribe to it as we were doing earlier and our view as per our expectations:"}),`
`,n.jsx(e.p,{children:n.jsx(e.img,{src:"https://raw.githubusercontent.com/NamitaMalik/Map-vs-FlatMap/master/assets/map-flatMap.png",alt:"map-flatMap.png"})}),`
`,n.jsxs(e.p,{children:["So what's the exact difference between ",n.jsx(e.strong,{children:"map"})," and ",n.jsx(e.strong,{children:"flatMap"}),":"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"map"})," transforms items emitted by an Observable by applying a function to each item whereas ",n.jsx(e.strong,{children:"flatmap"}),":"]}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"Applies a specified function to each emitted item and this function in turn returns an Observable for each item."}),`
`,n.jsx(e.li,{children:"flatMap then merges all these sequences to make a new sequence."}),`
`]}),`
`,n.jsx(e.p,{children:"So let's make a small ASCII marbel to make our understanding more clear:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`----Namita---Amit---Rohit---Neetika----- //Input Stream
.map(x => 'Hello ' + x);
---Hello Namita---Hello Amit---Hello Rohit---Hello Neetika--- //Map's function result
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`----Namita---Amit---Rohit---Neetika----- //Input Stream
.flatMap(x => Rx.Observable.of('Hello ' + x))
--Hello Namita--     //transforming each input element into an Observable
--Hello Amit--
--Hello Rohit--
--Hello Neetika--
---Hello Namita---Hello Amit---Hello Rohit---Hello Neetika--- // Flatmap's final result
`})}),`
`,n.jsxs(e.p,{children:["There is also another operator named as ",n.jsx(e.strong,{children:".mergeAll"})," which we can use with ",n.jsx(e.strong,{children:"map"})," when we are in observable of observables situation instead of directly using ",n.jsx(e.strong,{children:"flatMap"}),". ",n.jsx(e.strong,{children:"RxJS"}),` has numerous operators and hopefully this learning
voyage will take us to each one of them.. till then happy learning!`]})]})}function wC(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(yp,{...t})}):yp(t)}const bC=Object.freeze(Object.defineProperty({__proto__:null,default:wC},Symbol.toStringTag,{value:"Module"}));function jp(t){const e={blockquote:"blockquote",code:"code",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.p,{children:"#*ngFor in Angular2"}),`
`,n.jsxs(e.p,{children:["This blog compares ",n.jsx(e.strong,{children:"ng-repeat"})," of ",n.jsx(e.strong,{children:"Angular 1.x"})," with ",n.jsx(e.strong,{children:"*ngFor"})," of ",n.jsx(e.strong,{children:"Angular 2"}),"."]}),`
`,n.jsxs(e.p,{children:["Well, to start of with - ",n.jsx(e.strong,{children:"ng-repeat"})," directive will NOT be available in ",n.jsx(e.strong,{children:"Angular 2"}),". It has been replaced by a new directive i.e. ",n.jsx(e.strong,{children:"*ngFor"}),"."]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"Here is a recap:"}),`
`]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"ng-repeat"})," directive instantiated template once per item for a collection."]}),`
`,n.jsx(e.li,{children:"Each template instance had its own scope."}),`
`,n.jsxs(e.li,{children:["Special properties were available for each template instance : ",n.jsx(e.strong,{children:"$index"}),", ",n.jsx(e.strong,{children:"$first"}),", ",n.jsx(e.strong,{children:"$middle"}),", ",n.jsx(e.strong,{children:"$last"}),", ",n.jsx(e.strong,{children:"$even"}),", ",n.jsx(e.strong,{children:"$odd"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"ng-repeat"})," by default did not allow duplicate elements. A tracking function was responsible for this task."]}),`
`,n.jsxs(e.li,{children:["In order to add duplicate items, ",n.jsx(e.strong,{children:"track by"})," expression was used."]}),`
`,n.jsx(e.li,{children:"Here is a small snippet:"}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-JavaScript",children:`$scope.items = ['eat','sleep','work','eat']
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-HTML",children:`<div ng-repeat="item in items track by $index">{{$index+1}} : {{item}}</div>
`})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Object properties could also be iterated over. Here is a snippet for that:"}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-JavaScript",children:`$scope.personDetails = {name:'Namita',age:'25'}
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-HTML",children:`<div ng-repeat="(key, value) in personDetails">{{key}} : {{value}}</div>
`})}),`
`,n.jsxs(e.p,{children:["Now, let's move to main agenda of this discussion i.e. ",n.jsx(e.strong,{children:"*ngFor"}),". Let's start."]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["The major difference between ",n.jsx(e.strong,{children:"ng-repeat"})," and ",n.jsx(e.strong,{children:"*ngFor"})," is its syntax. Here is a small snipped"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-HTML",children:`<ul>
    <li *ngFor="#item of items">{{item}}</li>
</ul
`})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"*ngFor"})," is based on ",n.jsx(e.strong,{children:"JavaScript's"})," ",n.jsx(e.code,{children:"for of"})," loop hence it can be used to iterate over ",n.jsx(e.strong,{children:"Arrays"}),", ",n.jsx(e.strong,{children:"Map"}),", ",n.jsx(e.strong,{children:"Set"}),". However it cannot be used to iterate over object properties straightaway."]}),`
`]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"One of the possible work around could be extracting the keys from an object and then iterating it over the keys or use Map instead of object."}),`
`]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Also other important difference is use of ",n.jsx(e.code,{children:"#refs"}),". ",n.jsx(e.code,{children:"#refs"})," would be widely used in ",n.jsx(e.strong,{children:"Angular2"}),". In this case ",n.jsx(e.code,{children:"#item"})," contain the value of each item. ",n.jsx(e.code,{children:"#refs"})," hold the reference of the element in cases such as:"]}),`
`]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"ng-repeat"})," created inherited child scope for each element of collection, while ",n.jsx(e.code,{children:"*ngFor"})," creates local variable in the that block."]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-HTML",children:`<input type="text" #inputText>
`})}),`
`,n.jsx(e.p,{children:"For the above case:"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"inputText"})," would contain the reference of the element i.e. ",n.jsx(e.code,{children:'<input type="text">'}),". ",n.jsx(e.code,{children:"inputText.value"})," would contain the actual value entered in the input box."]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"You would also be wondering what is the asterisk (*) sign for. Asterisk (*) sign is nothing but a syntactic sugar."}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["Like ",n.jsx(e.strong,{children:"ng-repeat"}),", each instance element receives properties like ",n.jsx(e.strong,{children:"odd"}),", ",n.jsx(e.strong,{children:"even"})," , ",n.jsx(e.strong,{children:"last"}),", ",n.jsx(e.strong,{children:"index"}),". I have used these properties in the small example below:"]}),`
`]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-TypeScript",children:`/**
 * Created by Namita Malik on 4/5/16.
 */

import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: \`
    <h1>{{title}}</h1>
    <h2>Enter To Do Items Below:</h2>
    <input (keyup.enter)="onKey(todo)" #todo>
    <div *ngIf="toDoList.length>0">
        <p>Your To Do Items:</p>
    </div>
    <div style="padding: 10px 0 0 0">
    <table width="300" border="1" cellpadding="5" style="text-align: center">
        <tr>
            <th>Index</th>
            <th>To Do Item</th>
        </tr>
        <tr *ngFor="#toDo of toDoList, #i=index, #last=last, #odd=odd, #even=even"  [ngClass]="{'odd-color':odd, 'even-color':even, 'last-color' : last }">
            <td>{{i}}</td>
            <td>{{toDo}}</td>
        </tr>
    </table>
    </div>
    \`
})

export class AppComponent {
    toDo = {
        item: ''
    };
    title = 'My To Do List';
    toDoList = [];

    onKey(todo) {
        this.toDoList.push(todo.value);
        todo.value = '';
    }
}
`})}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"Note: It is not advisable to create grid structure using table tags but to keep the things simple I have used it here."}),`
`]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["As demonstrated above we have used index property to get the index of each item in the collection and assigned it to local variable ",n.jsx(e.code,{children:"#i"}),". Similarly we have used other properties and assigned them to local variables in order to apply the classes conditionally on the table rows."]}),`
`]}),`
`,n.jsxs(e.p,{children:["For example: ",n.jsx(e.code,{children:"odd-color"})," class is applied on the row when item is odd. ",n.jsx(e.code,{children:"odd"})," property returns a ",n.jsx(e.code,{children:"true"})," or ",n.jsx(e.code,{children:"false"})," on the basis of item index which is then assigned to local variable ",n.jsx(e.code,{children:"#odd"}),"."]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Angular2"})," allows duplicate values in ",n.jsx(e.strong,{children:"*ngFor"})," so we don't need ",n.jsx(e.strong,{children:"trackBy"})," any more and for unique value we use ",n.jsx(e.strong,{children:"Set"}),"."]}),`
`]}),`
`,n.jsxs(e.p,{children:["In order to run the demo given in this repo, clone this repository. Go inside the repo and write ",n.jsx(e.code,{children:"npm install"}),". This would bring required node modules for you."]}),`
`,n.jsxs(e.p,{children:["Now, run open ",n.jsx(e.strong,{children:"index.html"})," in your favourite browser!"]})]})}function kC(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(jp,{...t})}):jp(t)}const SC=Object.freeze(Object.defineProperty({__proto__:null,default:kC},Symbol.toStringTag,{value:"Module"}));function wp(t){const e={code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Prototype in JavaScript"}),`
`,n.jsxs(e.p,{children:["We always say that ",n.jsx(e.strong,{children:"JavaScript"})," is a ",n.jsx(e.strong,{children:"Dynamic"})," language. But, what makes ",n.jsx(e.strong,{children:"JavaScript"})," a ",n.jsx(e.strong,{children:"Dynamic"})," language? Answer to this question is ",n.jsx(e.strong,{children:'"Prototype"'}),"."]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Dynamic"})," behaviour of ",n.jsx(e.strong,{children:"JavaScript"})," can be achieved through ",n.jsx(e.strong,{children:"Prototype"}),". One can add, remove, update ",n.jsx(e.strong,{children:"properties/function"})," of a ",n.jsx(e.strong,{children:"function/object"})," on fly in ",n.jsx(e.strong,{children:"JavaScript"}),"."]}),`
`,n.jsxs(e.p,{children:["First, let me share a use case of ",n.jsx(e.strong,{children:"prototype"})," in my current project then we will understand ",n.jsx(e.strong,{children:"Prototype"}),"."]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"USE CASE"}),": In one of my ",n.jsx(e.strong,{children:"HTML5"})," Gaming project, we are generating lots of random number, and maximum of them are in a range e.g. generating random number between X to Y."]}),`
`,n.jsxs(e.p,{children:["How were we achieving this in my project? We made a common utility js file, and defined a ",n.jsx(e.strong,{children:"function"})," there with named ",n.jsx(e.strong,{children:"getRandom"})," which were having all the logic of generating random number. e.g."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"CommonUtility.js"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-JavaScript",children:`getRandom = function (min, max) {  // Adding getRandom function to Math object
    if (min && max) {
        // If min and max both are provided
        if(max <= min) {
            return new Error("Max number can not be equal or less then min");
        } else {
            return parseInt(min + (Math.random() * (max - min))); // Our logic for getting a random number
        }
    } else if (min) { //  If only min provide, then that min will be max and min will be 0
        if(min < 1) {
            return new Error("Min number can not be less 1");
        } else {
            return parseInt(Math.random() * min)
        }
    } else { // If min and max both are not provided then return whatever Math.random returns.
        return Math.random();
    }
};
`})}),`
`,n.jsxs(e.p,{children:["And then, where were we needing that ",n.jsx(e.strong,{children:"getRandom"})," ",n.jsx(e.strong,{children:"function"}),", we were requiring that module/js file, and were calling ",n.jsx(e.strong,{children:"getRandom"})," ",n.jsx(e.strong,{children:"function"})," on that object, which is having ",n.jsx(e.strong,{children:"getRandom"})," ",n.jsx(e.strong,{children:"function"}),". e.g."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-JavaScript",children:`var commonUtility = require("commonUtility") // requiring that common module.
commonUtility.getRandom(45, 65);
`})}),`
`,n.jsxs(e.p,{children:["How are we achieving this in my project now?? We injected ",n.jsx(e.strong,{children:"getRandom"})," ",n.jsx(e.strong,{children:"function"})," to ",n.jsx(e.strong,{children:"Math"})," class, with the help of ",n.jsx(e.strong,{children:n.jsx(e.strong,{children:"proto"})}),". e.g."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-JavaScript",children:`Math.__proto__.getRandom = function (min, max) {  // Adding getRandom function to Math object
    if (min && max) {
        // If min and max both are provided
        if(max <= min) {
            return new Error("Max number can not be equal or less then min");
        } else {
            return parseInt(min + (Math.random() * (max - min))); // Our logic for getting a random number
        }
    } else if (min) { //  If only min provide, then that min will be max and min will be 0
        if(min < 1) {
            return new Error("Min number can not be less 1");
        } else {
            return parseInt(Math.random() * min)
        }
    } else { // If min and max both are not provided then return whatever Math.random returns.
        return Math.random();
    }
};
`})}),`
`,n.jsxs(e.p,{children:["After injecting ",n.jsx(e.strong,{children:"getRandom"})," ",n.jsx(e.strong,{children:"function"})," to ",n.jsx(e.strong,{children:"Math"})," object, we can call ",n.jsx(e.strong,{children:"getRandom"})," ",n.jsx(e.strong,{children:"function"})," on ",n.jsx(e.strong,{children:"Math"})," object, just like ",n.jsx(e.code,{children:"Math.radom()"}),". Well.. do you want to check the above code? Let's check if it works at all?"]}),`
`,n.jsxs(e.p,{children:["Let us try to find a random number between 45 and 65 twice, both time we will get different random number, and if we call ",n.jsx(e.code,{children:"getRandom()"})," ",n.jsx(e.strong,{children:"function"})," with one number then it will return any random number where max number will be that number."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-JavaScript",children:`console.log(typeof Math.getRandom === "function"); // true
console.log(Math.getRandom(45, 65)); // Passing the range in which we need to generate a random number
console.log(Math.getRandom(45, 65)); // getRandom function will return any random number between 45 to 65
console.log(Math.getRandom(65)); // getRandom function will return any random number between 45 to 65
`})}),`
`,n.jsxs(e.p,{children:["We do not need to require any common utility module/js file, just have to call ",n.jsx(e.code,{children:"Math.getRandom(x, y)"}),", that's it, and we will get random number between that range."]}),`
`,n.jsxs(e.p,{children:["Now, may be you are thinking that, from where ",n.jsxs(e.strong,{children:[n.jsx(e.strong,{children:"proto"}),"/prototype"]})," property came?? And how all the objects getting that behaviour, which are injecting with the help of ",n.jsxs(e.strong,{children:[n.jsx(e.strong,{children:"proto"}),"/prototype"]}),"."]}),`
`,n.jsxs(e.p,{children:["All the ",n.jsx(e.strong,{children:"JavaScript"})," ",n.jsx(e.strong,{children:"functions"})," have a property named ",n.jsx(e.strong,{children:"prototype"}),", while all the ",n.jsx(e.strong,{children:"JavaScript"})," ",n.jsx(e.strong,{children:"objects"})," have property named ",n.jsx(e.strong,{children:n.jsx(e.strong,{children:"proto"})}),". Both the property( ",n.jsx(e.strong,{children:"prototype"})," in ",n.jsx(e.strong,{children:"functions"})," and ",n.jsx(e.strong,{children:n.jsx(e.strong,{children:"proto"})})," in ",n.jsx(e.strong,{children:"objects"}),") are set by ",n.jsx(e.strong,{children:"JavaScript"})," itself. And whatever we are reading on any ",n.jsx(e.strong,{children:"JavaScript"})," object, first ",n.jsx(e.strong,{children:"JavaScript"})," will search into that object only, if it do not fine one, then it will search into ",n.jsx(e.strong,{children:n.jsx(e.strong,{children:"proto"})})," object. So whatever we inject into ",n.jsx(e.strong,{children:n.jsx(e.strong,{children:"proto"})})," object, will be available in the future."]}),`
`,n.jsxs(e.p,{children:["This is how ",n.jsx(e.strong,{children:"JavaScript"})," is a ",n.jsx(e.strong,{children:"Dynamic"})," language, we tweaked a well defined ",n.jsx(e.strong,{children:"JavaScript"})," object according to our own sweet wish!"]})]})}function CC(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(wp,{...t})}):wp(t)}const TC=Object.freeze(Object.defineProperty({__proto__:null,default:CC},Symbol.toStringTag,{value:"Module"}));function bp(t){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Realtime Update in Angular2"}),`
`,n.jsxs(e.p,{children:["Many a time we encounter a situation when we need to update our view ",n.jsx(e.strong,{children:"real time"}),". By ",n.jsx(e.strong,{children:"real time"}),` I mean that as soon as a component changes the value of a particular variable,
all other components should get the updated value.`]}),`
`,n.jsxs(e.p,{children:["Let's get deeper into it by the simple example. In of my earlier ",n.jsx(e.a,{href:"https://namitamalik.github.io/",children:"blogs"})," on ",n.jsx(e.a,{href:"https://namitamalik.github.io/Services-in-Angular2/",children:n.jsx(e.strong,{children:"Services in Angular2"})}),`,
we had taken an example of a cinema ticket booking scenario where we had:`]}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"AppComponent"})," - Parent component of the entire application. Included 2 child components."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"BookShowComponent"})," - Component used to make booking through web application e.g. bookshow.com."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"WindowComponent"})," - Component accessed to make booking through cinema window."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"BookingService"})," - A service accessed by both ",n.jsx(e.code,{children:"WindowComponent"})," and ",n.jsx(e.code,{children:"BookShowComponent"})," to get the number of tickets available."]}),`
`]}),`
`,n.jsxs(e.p,{children:["Above components were then joined together to make a simple ",n.jsx(e.code,{children:"app"}),`. Using this app a user was able to book movie ticket and after each booking, the available ticket count would get updated.
But, this small `,n.jsx(e.code,{children:"app"})," had a serious flaw - ",n.jsx(e.code,{children:"one component would not know that the other component has updated the ticket till a booking request was made"}),"."]}),`
`,n.jsx(e.p,{children:"See below:"}),`
`,n.jsx(e.p,{children:n.jsx(e.img,{src:"https://raw.githubusercontent.com/NamitaMalik/Realtime-Update-in-Angular2/master/assets/Services_Blog.gif",alt:"Services_Blog.gif"})}),`
`,n.jsx(e.p,{children:"Did you notice the following:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"Initially, total number of available tickets were 10."}),`
`,n.jsx(e.li,{children:"On booking a ticket through cinema window, the number of available tickets became 9, while at bookshow.com, number of available tickets was still 10."}),`
`,n.jsx(e.li,{children:"Similarly, after making a booking through bookshow.com, number of available tickets became 8 as correctly displayed on bookshow.com but cinema window still has the booking count as 9."}),`
`]}),`
`,n.jsx(e.p,{children:"To avoid such a situation, we need to do something so that both the components show data consistently. But how?"}),`
`,n.jsxs(e.p,{children:["Well, it would not be wrong if I say, that ",n.jsx(e.strong,{children:"Angular2"})," has bought best of all the worlds together and simple solution to the above problem is ",n.jsx(e.strong,{children:"Observables"}),`. We know that
`,n.jsx(e.strong,{children:"Observables"})," are being heavily used in ",n.jsx(e.strong,{children:"Angular2"})," just as ",n.jsx(e.strong,{children:"Promises"})," in ",n.jsx(e.strong,{children:"Angular 1.x"}),". But unlike ",n.jsx(e.strong,{children:"Promises"}),", ",n.jsx(e.strong,{children:"Observables"}),` have much bigger role to play. Being
based on the `,n.jsx(e.strong,{children:"Observer Pattern"})," they involve much more than extracting ",n.jsx(e.strong,{children:"success"})," and ",n.jsx(e.strong,{children:"error"}),". So, let's see some other useful stuff that ",n.jsx(e.strong,{children:"Observables"})," can do for us."]}),`
`,n.jsxs(e.p,{children:["If you look at the ",n.jsx(e.a,{href:"https://namitamalik.github.io/Services-in-Angular2/",children:"Services in Angular2"})," blog, you will notice that our ",n.jsx(e.code,{children:"booking-service.ts"})," looks like:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-TypeScript",children:`import {Injectable} from "@angular/core";
@Injectable()
export class BookingService {
    totalTicketCount:number = 10;
}
`})}),`
`,n.jsxs(e.p,{children:["... and this is the place where we need to make the most important change i.e. making the ",n.jsx(e.code,{children:"totalTicketCount"})," a ",n.jsx(e.strong,{children:"subject"}),"."]}),`
`,n.jsx(e.p,{children:"Well, the above line put up a plethora of questions in front of us so let's try to answer each question one by one:"}),`
`,n.jsxs(e.p,{children:[`####Q. What is Subject?
`,n.jsx(e.strong,{children:"Ans:"})," ",n.jsx(e.strong,{children:"Subject"})," is a class in ",n.jsx(e.strong,{children:"RxJS"})," library. It inherits both ",n.jsx(e.strong,{children:"Observable"})," and ",n.jsx(e.strong,{children:"Observer"})," therefore we can easily say that a ",n.jsx(e.strong,{children:"subject"})," is both ",n.jsx(e.strong,{children:"observer"})," and ",n.jsx(e.strong,{children:"observable"}),`.
We know that `,n.jsx(e.strong,{children:"observers"})," subscribe to an ",n.jsx(e.strong,{children:"observable"})," and if ",n.jsx(e.strong,{children:"subject"})," is both ",n.jsx(e.strong,{children:"observer"})," and ",n.jsx(e.strong,{children:"observable"})," this means that there would be ",n.jsx(e.strong,{children:"observers"}),` subscribing to it and
also it subscribing to some other source. A `,n.jsx(e.strong,{children:"subject"}),"  simply broadcasts values pushed to it, to all the ",n.jsx(e.strong,{children:"subscribers"}),` subscribing to it.
In real life, shopkeeper can be taken as an example of a `,n.jsx(e.strong,{children:"subject"}),", a shopkeeper is both buyer and a seller. He buys products from a factory and sells products to his customers."]}),`
`,n.jsxs(e.p,{children:[`####Q. Are there any different implementations of Subject?
`,n.jsx(e.strong,{children:"Ans:"})," There are basically 3 different implementation of ",n.jsx(e.strong,{children:"Subject"})," which provide different functionality and can be used on the basis of different use case:"]}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"ReplaySubject"})," - Stores all the values that have been pushed. It emits all the items that were emitted by the source, to all the ",n.jsx(e.strong,{children:"observers"})," that ",n.jsx(e.strong,{children:"subscribe"})," to it."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"AsyncSubject"})," - It stores the last value and emits it when the sequence is completed."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"BehaviorSubject"})," - ",n.jsx(e.strong,{children:"BehaviorSubject"})," is similar to ",n.jsx(e.strong,{children:"ReplaySubject"})," but it stores only the last value published. Also another difference that distinguishes it from ",n.jsx(e.strong,{children:"AsyncSubject"})," and ",n.jsx(e.strong,{children:"ReplaySubject"}),` is that it takes default value at the time of initialisation.
So an `,n.jsx(e.strong,{children:"observer"})," subscribing to ",n.jsx(e.strong,{children:"BehaviorSubject"})," would receive a value as soon as it subscribes to it."]}),`
`]}),`
`,n.jsxs(e.p,{children:[`####Q. Which one out of the 3 implementations, we are going to use?
`,n.jsx(e.strong,{children:"Ans:"})," We are going to use ",n.jsx(e.strong,{children:"BehaviorSubject"})," for our case."]}),`
`,n.jsxs(e.p,{children:[`####Q. Can we see some action now?**
`,n.jsx(e.strong,{children:"Ans:"})," Yes Sure, here we go . . . ."]}),`
`,n.jsxs(e.p,{children:["So, let's make ",n.jsx(e.code,{children:"totalTicketCount"})," a ",n.jsx(e.strong,{children:"BehaviorSubject"})," as given below:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-TypeScript",children:`totalTicketCount:BehaviorSubject<number> = new BehaviorSubject<number>(10);
`})}),`
`,n.jsxs(e.p,{children:["After making this tweak and importing ",n.jsx(e.code,{children:"BehaviorSubject"}),", our ",n.jsx(e.code,{children:"booking-service.ts"})," now looks as:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-TypeScript",children:`import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/Rx';

@Injectable()
export class BookingService {
   totalTicketCount:BehaviorSubject<number> = new BehaviorSubject<number>(10);

}
`})}),`
`,n.jsxs(e.p,{children:["Now, let's make some tweaks in our ",n.jsx(e.code,{children:"book-show.component.ts"})," and ",n.jsx(e.code,{children:"window.component.ts"})," and these should be:"]}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["We first need to subscribe to our ",n.jsx(e.code,{children:"totalTicketCount"})," subject so that we can start receiving values from it:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-TypeScript",children:`constructor(private _bookingService:BookingService) {
    this._bookingService.totalTicketCount.subscribe(totalTicketCount => {
        this.ticketCount = totalTicketCount
    });
}
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["Once a user makes a booking we need to update the ",n.jsx(e.code,{children:"totalTicketCount"}),":"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-TypeScript",children:`bookShow = () => {
    let ticketCount = this.ticketCount - 1;
    this._bookingService.totalTicketCount.next(ticketCount);
}
`})}),`
`]}),`
`]}),`
`,n.jsxs(e.p,{children:["We have updated the ",n.jsx(e.code,{children:"totalTicketCount"})," by notifying the ",n.jsx(e.code,{children:"observer"})," about the next value."]}),`
`,n.jsxs(e.p,{children:["After doing the above tweaks in both ",n.jsx(e.code,{children:"book-show.component.ts"})," and ",n.jsx(e.code,{children:"window.component.ts"}),", they would look like:"]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"book-show.component.ts"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-TypeScript",children:`import {Component} from '@angular/core';
import {BookingService} from "../common/service/booking-service";

@Component({
    selector: 'book-show',
    template: \`
        <div>
            <h1>Welcome to bookshow.com</h1>
            <span>Welcome User</span>
            <p>Currently, Number of Tickets available are: {{ticketCount}}</p>
            <button (click)="bookShow()">Book Ticket</button>
        </div>
    \`
})

export class BookShowComponent {
    ticketCount:number = 0;

    constructor(private _bookingService:BookingService) {
        this._bookingService.totalTicketCount.subscribe(totalTicketCount => {
            this.ticketCount = totalTicketCount
        });
    }

    bookShow = () => {
        let ticketCount = this.ticketCount - 1;
        this._bookingService.totalTicketCount.next(ticketCount);
    }
}
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"window.component.ts"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-TypeScript",children:`import {Component} from '@angular/core';
import {BookingService} from "../common/service/booking-service";

@Component({
    selector: 'cinema-window',
    template: \`
    <div>
        <h1>ABC Cinemas</h1>
        <span>Hello Admin</span>
        <p>Currently, Number of Tickets available are: {{ticketCount}}</p>
        <button (click)="bookTicket()">Book Ticket</button>
    </div>
    \`
})

export class WindowComponent {
    ticketCount:number = 0;

    constructor(private _bookingService:BookingService) {
        this._bookingService.totalTicketCount.subscribe(totalTicketCount => {
            this.ticketCount = totalTicketCount
        });
    }

    bookTicket = () => {
        this.ticketCount = this.ticketCount - 1;
        this._bookingService.totalTicketCount.next(this.ticketCount);
    };
}
`})}),`
`,n.jsxs(e.p,{children:["After doing the above tweaks, we should now be able to see the available ticket count ",n.jsx(e.strong,{children:"real-time"})," as shown in below:"]}),`
`,n.jsx(e.p,{children:n.jsx(e.img,{src:"https://raw.githubusercontent.com/NamitaMalik/Realtime-Update-in-Angular2/master/assets/Realtime_Blog.gif",alt:"Realtime-Blog.gif"})}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"Note: This is a small demo app to show how to make real time client updates. In a real world app, one will have to get the updated data from the server by using things like socket connections(which is not the agenda of this blog)."}),`
`]})]})}function NC(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(bp,{...t})}):bp(t)}const PC=Object.freeze(Object.defineProperty({__proto__:null,default:NC},Symbol.toStringTag,{value:"Module"}));function kp(t){const e={blockquote:"blockquote",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Services In Angular2"}),`
`,n.jsxs(e.p,{children:["This blog discusses use cases of ",n.jsx(e.strong,{children:"service"}),"s and also compares ",n.jsx(e.strong,{children:"Angular2 services"}),` with
`,n.jsx(e.strong,{children:"Angular1 services"}),"."]}),`
`,n.jsxs(e.p,{children:["Well, whenever we think about ",n.jsx(e.strong,{children:"service"}),"s, two common use cases come into our minds:"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Sharing data between the components of the application"}),`
`,n.jsxs(e.li,{children:["Making ",n.jsx(e.code,{children:"http"})," requests"]}),`
`]}),`
`,n.jsx(e.p,{children:"To demonstrate above use cases, let us take a following example:"}),`
`,n.jsxs(e.p,{children:["Suppose, there is a cinema named as ",n.jsx(e.code,{children:"ABC"}),". To keep our example simple, let us assume that cinema has ",n.jsx(e.code,{children:"10"}),` seats only and
it sells tickets either through a `,n.jsx(e.strong,{children:"ticket window"})," or through a ticket booking site named ",n.jsx(e.strong,{children:"bookshow.com"}),"."]}),`
`,n.jsx(e.p,{children:"So let's break our application into small parts:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"AppComponent"}),` -> This will be the parent component of our application. This component would include various child
components.`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"BookShowComponent"})," -> This component would be used by users booking tickets through ",n.jsx(e.strong,{children:"bookshow.com"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"WindowComponent"})," -> Operator at ticket window/counter would use this component to book tickets."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"BookingService"})," -> This ",n.jsx(e.strong,{children:"service"})," gives the number of tickets available."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"MyTicketService"})," -> Ticket details are provided by this ",n.jsx(e.strong,{children:"service"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"ticketData.json"})," -> This json contains hard coded ticket details for demonstration purpose. We will be making a ",n.jsx(e.code,{children:"get"}),`
call to fetch data from this `,n.jsx(e.code,{children:"json"}),"."]}),`
`]}),`
`,n.jsx(e.p,{children:"Now, let's add some code to these components in order to join these parts and make them work."}),`
`,n.jsxs(e.p,{children:["Here is the ",n.jsx(e.code,{children:"app.component.ts"})," file:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-TypeScript",children:`import {Component} from '@angular/core';
import {WindowComponent} from "./window.component";
import {BookShowComponent} from "./book-show.component";
@Component({
    selector: 'my-app',
    template: \`
    <cinema-window></cinema-window>
    <book-show></book-show>
    \`,
    directives: [WindowComponent, BookShowComponent],
})

export class AppComponent {
}
`})}),`
`,n.jsxs(e.p,{children:["In the above code, we have simply added two child components i.e. ",n.jsx(e.code,{children:"WindowComponent"})," and ",n.jsx(e.code,{children:"BookShowComponent"}),"."]}),`
`,n.jsx(e.p,{children:"Now, let's have a look at these two components:"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"window.component.ts"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`import {Component} from '@angular/core';

@Component({
    selector: 'cinema-window',
    template: \`
    <div>
        <h1>ABC Cinemas</h1>
        <span>Hello Admin</span>
        <p>Currently, Number of Tickets available are: {{ticketCount}}</p>
        <button (click)="bookTicket()">Book Ticket</button>
        <button (click)="showTicket()">Show Ticket</button>
    </div>
    \`
})

export class WindowComponent {
    ticketCount = '';
    bookTicket = () => {
    };
    showTicket = () => {
    };
}
`})}),`
`,n.jsxs(e.p,{children:["We have two functions : ",n.jsx(e.code,{children:"bookTicket"})," and ",n.jsx(e.code,{children:"showTicket"})," in the ",n.jsx(e.code,{children:"WindowComponent"}),". As the name suggests ",n.jsx(e.code,{children:"bookTicket"}),`
component will be used to book tickets while `,n.jsx(e.code,{children:"showTicket"})," component will be used to display the ticket details."]}),`
`,n.jsxs(e.p,{children:["We also have a variable ",n.jsx(e.code,{children:"ticketCount"})," which is empty so far but will be displaying the number of tickets available."]}),`
`,n.jsxs(e.p,{children:["Before moving ahead, let's have a look at the ",n.jsx(e.code,{children:"BookShowComponent"})," too:"]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"book-show.component.ts"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-TypeScript",children:`import {Component} from 'angular2/core';

@Component({
    selector: 'book-show',
    template: \`
    <div>
        <h1>Welcome to bookshow.com</h1>
        <span>Welcome User</span>
        <p>Currently, Number of Tickets available are: {{ticketCount}}</p>
        <button (click)="bookShow()">Book Ticket</button>
        <button (click)="showMyTicket()">Show Ticket</button>
    </div>
    \`
})

export class BookShowComponent {
    ticketCount = ";
    bookShow = () => {
    };
    showMyTicket = () => {
    }
}
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`import {Component} from '@angular/core';

@Component({
    selector: 'book-show',
    template: \`
    <div>
        <h1>Welcome to bookshow.com</h1>
        <span>Welcome User</span>
        <p>Currently, Number of Tickets available are: {{ticketCount}}</p>
        <button (click)="bookShow()">Book Ticket</button>
        <button (click)="showMyTicket()">Show Ticket</button>
    </div>
    \`
})

export class BookShowComponent {
    ticketCount ';
    bookShow = () => {
    };
    showMyTicket = () => {
    };
}
`})}),`
`,n.jsxs(e.p,{children:["Well, ",n.jsx(e.code,{children:"BookShowComponent"})," also looks pretty much the same."]}),`
`,n.jsxs(e.p,{children:["So now its time to get into some more action. The first use case that we discussed for ",n.jsx(e.strong,{children:"service"}),"s was ",n.jsx(e.strong,{children:"data sharing"}),`
amongst the components.`]}),`
`,n.jsxs(e.p,{children:["Hence, we are making a booking ",n.jsx(e.strong,{children:"service"})," here, which will give the count of tickets available. Here is the ",n.jsx(e.strong,{children:"service"}),":"]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"booking-service.ts"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-TypeScript",children:`import {Injectable} from "@angular/core";

@Injectable()
export class BookingService {
    totalTicketCount:number = 10;
}
`})}),`
`,n.jsxs(e.p,{children:["We have hardcoded the ticket count in this ",n.jsx(e.strong,{children:"service"})," to ",n.jsx(e.code,{children:"10"}),". We have named the above file as ",n.jsx(e.code,{children:"booking-service.ts"}),`. It
is a common practice to name the `,n.jsx(e.strong,{children:"service"})," files with ",n.jsx(e.code,{children:"-service"})," suffix."]}),`
`,n.jsxs(e.p,{children:["Now we want this ",n.jsx(e.strong,{children:"service"})," to be exposed to our ",n.jsx(e.code,{children:"BookShowComponent"})," and the ",n.jsx(e.code,{children:"WindowComponent"}),`. To achieve let's add
the following lines to our `,n.jsx(e.code,{children:"app.component.ts"}),":"]}),`
`,n.jsx(e.p,{children:n.jsx(e.code,{children:'import {BookingService} from "./booking-service";'})}),`
`,n.jsxs(e.p,{children:["Above statement is an import statement while below code needs to be added to the ",n.jsx(e.code,{children:"@Component"})," decorator."]}),`
`,n.jsx(e.p,{children:n.jsx(e.code,{children:"providers: [BookingService]"})}),`
`,n.jsxs(e.p,{children:["Now, our ",n.jsx(e.code,{children:"app.component.ts"})," would look like:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-TypeScript",children:`import {Component} from '@angular/core';
import {BookingService} from "./booking-service";
import {WindowComponent} from "./window.component";
import {BookShowComponent} from "./book-show.component";
@Component({
    selector: 'my-app',
    template: \`
    <cinema-window></cinema-window>
    <book-show></book-show>
    \`,
    directives: [WindowComponent, BookShowComponent],
    providers: [BookingService]
})

export class AppComponent {
}
`})}),`
`,n.jsxs(e.p,{children:["Any ",n.jsx(e.strong,{children:"service"})," that we want to use, needs to be injected in ",n.jsx(e.code,{children:"providers"}),". Now let's see how to use this ",n.jsx(e.strong,{children:"service"}),` in
`,n.jsx(e.code,{children:"BookShowComponent"})," and ",n.jsx(e.code,{children:"WindowComponent"}),"."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-TypeScript",children:`import {Component} from '@angular/core';
import {BookingService} from "./booking-service";

@Component({
    selector: 'cinema-window',
    template: \`
    <div>
        <h1>ABC Cinemas</h1>
        <span>Hello Admin</span>
        <p>Currently, Number of Tickets available are: {{ticketCount}}</p>
        <button (click)="bookTicket()">Book Ticket</button>
        <button (click)="showTicket()">Show Ticket</button>
    </div>
    \`
})
export class WindowComponent {
    constructor(public bookingService:BookingService) {
    }
    ticketCount = this.bookingService.totalTicketCount;
    bookTicket = () => {
        this.bookingService.totalTicketCount = this.bookingService.totalTicketCount - 1;
        this.ticketCount = this.bookingService.totalTicketCount;
    };
    showTicket = () =>{
    }
}
`})}),`
`,n.jsxs(e.p,{children:["After making similar changes to the ",n.jsx(e.code,{children:"BookShowComponent"}),", it will look like this:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-TypeScript",children:`import {Component} from '@angular/core';
import {BookingService} from "./booking-service";

@Component({
    selector: 'book-show',
    template: \`
    <div>
        <h1>Welcome to bookshow.com</h1>
        <span>Welcome User</span>
        <p>Currently, Number of Tickets available are: {{ticketCount}}</p>
        <button (click)="bookShow()">Book Ticket</button>
        <button (click)="showMyTicket()">Show Ticket</button>
    </div>
    \`
})

export class BookShowComponent {
    constructor(public bookingService:BookingService) {
    }

    ticketCount = this.bookingService.totalTicketCount;
    bookShow = () => {
        this.bookingService.totalTicketCount = this.bookingService.totalTicketCount - 1;
        this.ticketCount = this.bookingService.totalTicketCount;
    };
    showMyTicket = () => {
    }
}
`})}),`
`,n.jsx(e.p,{children:"Now, let's discuss the changes that we have made:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["We have imported the ",n.jsx(e.code,{children:"BookingService"})," ",n.jsx(e.strong,{children:"service"})," into these two child components."]}),`
`,n.jsxs(e.li,{children:["The ",n.jsx(e.code,{children:"WindowComponent"})," or the ",n.jsx(e.code,{children:"BookShowComponent"})," are requesting the injection of ",n.jsx(e.code,{children:"BookingService"})," ",n.jsx(e.strong,{children:"object"}),` by
declaring the constructor argument with a type.`]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-TypeScript",children:`constructor(public bookingService:BookingService) {
}
`})}),`
`,n.jsxs(e.p,{children:["In the ",n.jsx(e.code,{children:"ticketCount"})," variable we have assigned the ",n.jsx(e.code,{children:"totalTicketCount"})," which is given by the ",n.jsx(e.strong,{children:"service"})," ",n.jsx(e.code,{children:"BookingService"}),"."]}),`
`,n.jsxs(e.p,{children:["So and once user clicks on the ",n.jsx(e.code,{children:"Book Ticket"})," button in the ",n.jsx(e.code,{children:"WindowComponent"}),", ",n.jsx(e.code,{children:"bookShow()"}),` function is called, where
`,n.jsx(e.code,{children:"totalTicketCount"})," shared by the ",n.jsx(e.code,{children:"BookingService"})," is decremented by ",n.jsx(e.code,{children:"1"})," and the new ",n.jsx(e.code,{children:"bookingService.totalTicketCount"}),` is
then assigned to `,n.jsx(e.code,{children:"ticketCount"})," to update on the view."]}),`
`,n.jsxs(e.p,{children:["Supposing that ",n.jsx(e.code,{children:"bookShow()"})," function has been called once in the ",n.jsx(e.code,{children:"WindowComponent"}),", now the ",n.jsx(e.code,{children:"totalTicketCount"}),` would be
`,n.jsx(e.code,{children:"9"}),". Now, let's move to ",n.jsx(e.code,{children:"BookShowComponent"}),", and click on the ",n.jsx(e.code,{children:"Book Ticket"}),` button here and you will notice that,
`,n.jsx(e.code,{children:"ticketCount"})," would now become ",n.jsx(e.code,{children:"9-1"})," i.e. ",n.jsx(e.code,{children:"8"})," here."]}),`
`,n.jsxs(e.p,{children:["Let's book another ticket through ",n.jsx(e.code,{children:"WindowComponent"})," and see that available count would now change to ",n.jsx(e.code,{children:"7"}),"."]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:["Note: Currently, there is one flaw in the application i.e. once we change the ",n.jsx(e.code,{children:"totalTicketCount"}),` from one component,
it should get updated on the view of the second component, but this part is currently out of the scope of this post.`]}),`
`]}),`
`,n.jsxs(e.p,{children:["Now, let's move on to our second use case, i.e. making ",n.jsx(e.code,{children:"http"}),` requests. To start with, here is your hardcoded json from
which we would be fetching the ticket details.`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"ticketData.json"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-JSON",children:`{
  "cinemaName" : "ABC Cinemas",
  "showTime" : "9:30PM",
  "date": "25-04-2016",
  "seatNumber": "A1",
  "ticketNumber": 1362196405309
}
`})}),`
`,n.jsxs(e.p,{children:["Now, let's make ",n.jsx(e.code,{children:"myTicket-service"})," which will make ",n.jsx(e.code,{children:"http"})," request. Here we go:"]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"myTicket-service.ts"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-TypeScript",children:`import {Injectable} from "@angular2/core";
import {Http} from '@angular/http';

@Injectable()
export class MyTicketService {
    constructor(public http:Http) {
    }

    getTicketData() {
        return this.http.get("./ticketData.json")
            .map(function (response) {
                return response.json()
            });
    }
}
`})}),`
`,n.jsxs(e.p,{children:["Here we are importing ",n.jsx(e.code,{children:"Http"})," and have a look at the ",n.jsx(e.code,{children:"getTicketData()"})," function where we are making our ",n.jsx(e.code,{children:"http"}),` request.
Response from the request is then fed into a map, where the response is being converted into  `,n.jsx(e.strong,{children:"JSON"}),"."]}),`
`,n.jsxs(e.p,{children:["Well.. the story doesn't ends here. Now, let's go back to ",n.jsx(e.code,{children:"WindowComponent"}),". We had made a ",n.jsx(e.code,{children:"showTicket()"}),` function here,
which unfortunately as of now is not doing anything. So its time to make it work:`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-TypeScript",children:`import {Component} from '@angular/core';
import {BookingService} from "./booking-service";
import {MyTicketService} from "./myTicket-service";

@Component({
    selector: 'cinema-window',
    template: \`
    <div>
        <h1>ABC Cinemas</h1>
        <span>Hello Admin</span>
        <p>Currently, Number of Tickets available are: {{ticketCount}}</p>
        <button (click)="bookTicket()">Book Ticket</button>
        <button (click)="showTicket()">Show Ticket</button>
        <div class="box" [hidden]="!dataAvailable">
            <span>Your Ticket Details:</span>
            <ul class="li-style">
                <li>{{ticketData.cinemaName}}</li>
                <li>{{ticketData.showTime}}</li>
                <li>{{ticketData.date}}</li>
                <li>{{ticketData.seatNumber}}</li>
                <li>{{ticketData.ticketNumber}}</li>
            </ul>
        </div>
    </div>
    \`
})

export class WindowComponent {
    constructor(public bookingService:BookingService, public myTicketService:MyTicketService) {
    }

    ticketData = {};
    dataAvailable:boolean = false;
    ticketCount = this.bookingService.totalTicketCount;
    errorMessage = '';
    bookTicket = () => {
        this.bookingService.totalTicketCount = this.bookingService.totalTicketCount - 1;
        this.ticketCount = this.bookingService.totalTicketCount;
    };
    showTicket = () => {
        this.myTicketService.getTicketData()
            .subscribe(
            (data) => {
                this.ticketData = data,
                    this.dataAvailable = true
            },
            (error) => {
                this.errorMessage = error;
            }
        );
    }
}
`})}),`
`,n.jsxs(e.p,{children:["To start from the top, changes that I have made in the ",n.jsx(e.code,{children:"WindowComponent"})," are:"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["Imported the ",n.jsx(e.code,{children:"MyTicketService"}),"."]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["We have added ",n.jsx(e.code,{children:"MyTicketService"}),` as a constructor argument as done earlier for requesting the injection of
`,n.jsx(e.code,{children:"MyTicketService"})," object."]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["There is a ",n.jsx(e.code,{children:"ticketData"})," object, which will be used to display ticket details on the view. ",n.jsx(e.code,{children:"dataAvailable"}),` flag is also t
here which would be set to `,n.jsx(e.code,{children:"true"})," once we successfully receive the data."]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["Now let's understand what is happening in the ",n.jsx(e.code,{children:"showTicket()"})," function - We are calling the ",n.jsx(e.code,{children:"getTicketData()"}),` function
of `,n.jsx(e.code,{children:"MyTicketService"})," which makes the ",n.jsx(e.code,{children:"http"})," call. In the response we get an ",n.jsx(e.strong,{children:"Observable"}),` which is parsed as
`,n.jsx(e.strong,{children:"JSON"})," in the ",n.jsx(e.strong,{children:"map"})," function which also returns an ",n.jsx(e.strong,{children:"Observable"}),". We then call ",n.jsx(e.strong,{children:".subscribe()"}),` method on this
`,n.jsx(e.strong,{children:"Observable"})," object."]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:".subscribe()"})," method takes 3 ",n.jsx(e.strong,{children:"event handlers"})," as arguments - ",n.jsx(e.strong,{children:"onNext"}),", ",n.jsx(e.strong,{children:"onError"})," and ",n.jsx(e.strong,{children:"onCompleted"}),`. It is
the `,n.jsx(e.strong,{children:"onNext"})," method which will receive the ",n.jsx(e.strong,{children:"HTTP"}),` response data. As you can observe, we are populating
`,n.jsx(e.code,{children:"ticketData"})," object in this method."]}),`
`]}),`
`]}),`
`,n.jsxs(e.p,{children:["Let's make the similar changes to ",n.jsx(e.code,{children:"BookShowComponent"}),". So, ",n.jsx(e.code,{children:"BookShowComponent"})," would look something like:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-TypeScript",children:`import {Component} from '@angular/core';
import {BookingService} from "./booking-service";
import {MyTicketService} from "./myTicket-service";

@Component({
    selector: 'book-show',
    template: \`
    <div>
        <h1>Welcome to bookshow.com</h1>
        <span>Welcome User</span>
        <p>Currently, Number of Tickets available are: {{ticketCount}}</p>
        <button (click)="bookShow()">Book Ticket</button>
        <button (click)="showMyTicket()">Show Ticket</button>
        <div class="box" [hidden]="!dataAvailable">
            <span>Your Ticket Details:</span>
            <ul class="li-style">
            <li>{{ticketData.cinemaName}}</li>
            <li>{{ticketData.showTime}}</li>
            <li>{{ticketData.date}}</li>
            <li>{{ticketData.seatNumber}}</li>
            <li>{{ticketData.ticketNumber}}</li>
            </ul>
        </div>
    </div>
    \`
})

export class BookShowComponent {
    constructor(public bookingService:BookingService, public myTicketService:MyTicketService) {
    }

    ticketCount = this.bookingService.totalTicketCount;
    ticketData = {};
    dataAvailable:boolean = false;
    errorMessage = '';
    bookShow = () => {
        this.bookingService.totalTicketCount = this.bookingService.totalTicketCount - 1;
        this.ticketCount = this.bookingService.totalTicketCount;
    };
    showMyTicket = () => {
        this.myTicketService.getTicketData()
            .subscribe(
            (data) => {
                this.ticketData = data
                    this.dataAvailable = true
            }
            , (error) => {
                this.errorMessage = error;
            }
        );
    }
}
`})}),`
`,n.jsx(e.p,{children:"Now, we need to make the one last change in order to make everything work. Here it is :"}),`
`,n.jsxs(e.p,{children:["In our ",n.jsx(e.code,{children:"main.ts"}),", we need to import ",n.jsx(e.code,{children:"rxjs"})," and ",n.jsx(e.code,{children:"http"})," so that they can be used throughout the application:"]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"main.ts"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-TypeScript",children:`import {bootstrap}      from '@angular/platform-browser-dynamic';
import {AppComponent}   from './app.component';
import {HTTP_PROVIDERS} from '@angular/http';
import 'rxjs/Rx';

bootstrap(AppComponent, [HTTP_PROVIDERS]);
`})}),`
`,n.jsxs(e.p,{children:["We are passing ",n.jsx(e.code,{children:"HTTP_PROVIDERS"})," to ",n.jsx(e.code,{children:"bootstrap()"}),". ",n.jsx(e.code,{children:"http"})," module of ",n.jsx(e.strong,{children:"Angular2"})," exposes ",n.jsx(e.code,{children:"HTTP_PROVIDERS"}),` which has the
providers required for making `,n.jsx(e.code,{children:"http"})," requests."]}),`
`,n.jsxs(e.p,{children:["You can notice that we are also importing ",n.jsx(e.code,{children:"rxjs"}),"so now the question that is coming to our mind is what are ",n.jsx(e.code,{children:"rxjs"}),`. Well
let's have a look at these in brief.`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"rxjs"})," is a library by ",n.jsx(e.strong,{children:"Microsoft"})," which is being used in ",n.jsx(e.strong,{children:"Angular 2"}),` for making async calls. So when we make a
call suppose `,n.jsx(e.code,{children:"http.get()"}),", an ",n.jsx(e.code,{children:"Observable"})," object is returned. ",n.jsx(e.code,{children:"Observables"})," are though similar to ",n.jsx(e.code,{children:"Promises"}),` and help
in managing `,n.jsx(e.code,{children:"async"})," calls they still are different from ",n.jsx(e.strong,{children:"Promises"}),"."]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Observables"})," emit multiple values."]}),`
`,n.jsxs(e.li,{children:["They are treated as ",n.jsx(e.strong,{children:"Arrays"})," which means we can use ",n.jsx(e.strong,{children:"Array"})," like methods such as ",n.jsx(e.strong,{children:"map"})," , ",n.jsx(e.strong,{children:"reduce"})," etc."]}),`
`]}),`
`,n.jsxs(e.p,{children:["Also, we need to make one last change that is registering our ",n.jsx(e.code,{children:"MyTicketService"})," in the ",n.jsx(e.code,{children:"app.component.ts"}),":"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-TypeScript",children:`import {Component} from '@angular/core';
import {BookingService} from "./booking-service";
import {MyTicketService} from "./myTicket-service";
import {WindowComponent} from "./window.component";
import {BookShowComponent} from "./book-show.component";
@Component({
    selector: 'my-app',
    template: \`
    <cinema-window></cinema-window>
    <book-show></book-show>
    \`,
    directives: [WindowComponent, BookShowComponent],
    providers: [BookingService, MyTicketService]
})

export class AppComponent {
}
`})}),`
`,n.jsx(e.p,{children:"Well, now if you run the code, you would be able to get the ticket details."}),`
`,n.jsxs(e.p,{children:["Before we end this blog it would be important for us to discuss the major difference between the ",n.jsx(e.strong,{children:`Services in Angular
1.x`})," and ",n.jsx(e.strong,{children:"Services in Angular2"}),":"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Services in Angular 1.x"})," are ",n.jsx(e.strong,{children:"singleton"})," i.e. you would get one ",n.jsx(e.strong,{children:"object"}),` for the entire application but that is
not the case in `,n.jsx(e.strong,{children:"Angular2"}),". You had seen that in our ",n.jsx(e.code,{children:"app.ts"}),", we had done:"]}),`
`,n.jsx(e.p,{children:n.jsx(e.code,{children:"providers: [BookingService, MyTicketService]"})}),`
`,n.jsxs(e.p,{children:["In the above line we had registered our ",n.jsx(e.strong,{children:"providers"})," ",n.jsx(e.code,{children:"BookingService"})," and ",n.jsx(e.code,{children:"MyTicketService"}),`. Since both of these
`,n.jsx(e.strong,{children:"providers"}),` are being used all throughout the application, also we had to share data between our components i.e. between both
the child components, the ideal place to register our both the providers was in `,n.jsx(e.code,{children:"AppComponent"}),`. Had we registered our
`,n.jsx(e.strong,{children:"provider"})," separately in each component, then we would have got the separate instance of that ",n.jsx(e.strong,{children:"provider"}),` in each
component.`]}),`
`,n.jsxs(e.p,{children:["So now suppose that original ",n.jsx(e.code,{children:"totalTicketCount"})," is ",n.jsx(e.code,{children:"10"})," and booking the ticket from ",n.jsx(e.code,{children:"WindowComponent"}),` would have
decreased the count to `,n.jsx(e.code,{children:"9"})," and then on making a booking from ",n.jsx(e.code,{children:"BookShowComponent"}),", the count would change to ",n.jsx(e.code,{children:"9"}),". ",n.jsx(e.code,{children:"9"}),`? But
why `,n.jsx(e.code,{children:"9"}),"? Because there would be different instances of ",n.jsx(e.code,{children:"BookingService"})," in the ",n.jsx(e.code,{children:"WindowComponent"})," and the ",n.jsx(e.code,{children:"BookShowComponent"}),"."]}),`
`,n.jsxs(e.p,{children:["Hence, this is the major difference between the services in ",n.jsx(e.strong,{children:"Angular 1.x and Angular2"}),"."]})]})}function EC(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(kp,{...t})}):kp(t)}const IC=Object.freeze(Object.defineProperty({__proto__:null,default:EC},Symbol.toStringTag,{value:"Module"}));function Sp(t){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"skipWhile vs filter in RxJS"}),`
`,n.jsx(e.p,{children:`I was working on a scenario where I had to perform an action only when some other actions were not performed. So
basically we need to skip performing our action while certain condition is met and when that condition no longer
holds true, perform our action. This cycle would repeat. So I was using RxJS to achieve this behavior. I decided to
use skipWhile operator but did not fit my use case well and I had to use filter operator instead.`}),`
`,n.jsxs(e.p,{children:["There is a basic difference between ",n.jsx(e.code,{children:"skipWhile"})," and ",n.jsx(e.code,{children:"filter"}),` operator that actually made lot of difference in my
case. Let's understand the differences.`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"skipWhile"})}),`
`,n.jsxs(e.p,{children:[`Suppose we have a stream of numbers which has numbers in the range 1-20. We only want to print
numbers `,n.jsx(e.code,{children:">= 10"}),". Here is a small snippet achieving same:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`const numbersBetweenOneAndTwenty = range(1, 20);
const numbersGreaterThanEqualToTen = numbersBetweenOneAndTwenty.pipe(skipWhile(num => num < 10));
numbersGreaterThanEqualToTen.subscribe((number) => {
    console.log(number);
})
`})}),`
`,n.jsx(e.p,{children:"o/p"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`10
11
12
13
14
15
16
17
18
19
20
`})}),`
`,n.jsx(e.p,{children:"Now, let's try to skip even numbers and print even numbers. Here we go:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`const oddNumbersOnly = numbersBetweenOneAndTwenty.pipe(skipWhile( num => num % 2 === 0));
oddNumbersOnly.subscribe((number) => {
    console.log(number);
});
`})}),`
`,n.jsx(e.p,{children:"o/p"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
`})}),`
`,n.jsx(e.p,{children:"Uh..what's that? We have the entire range of numbers printed. But why?"}),`
`,n.jsxs(e.p,{children:["As per the ",n.jsx(e.a,{href:"http://reactivex.io/documentation/operators/skipwhile.html",children:"ReactiveX docs"}),":"]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:`" The SkipWhile subscribes to the source Observable, but ignores its emissions until such time as some condition you
specify becomes false, at which point SkipWhile begins to mirror the source Observable. "`}),`
`]}),`
`,n.jsx(e.p,{children:`So in simple terms it means skipWhile operator will ignore the emissions until the specified condition becomes false,
but after that it will continue to take values from the source observable as is.`}),`
`,n.jsxs(e.p,{children:["Let's see another snippet before we move to ",n.jsx(e.code,{children:"filter"})," operator:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`const randomNumbersLessThanEqualToTen = interval(1000).pipe(map((num) => {
    const randomNumber = Math.floor(Math.random()*num);
    console.log('Random Number Generated', randomNumber);
    return randomNumber;
}), skipWhile(num => num < 10));

randomNumbersLessThanEqualToTen.subscribe((number) => {
    console.log('Number not skipped', number);
});
`})}),`
`,n.jsx(e.p,{children:"o/p:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`Random Number Generated 0
Random Number Generated 0
Random Number Generated 1
Random Number Generated 1
Random Number Generated 1
Random Number Generated 0
Random Number Generated 3
Random Number Generated 1
Random Number Generated 4
Random Number Generated 3
Random Number Generated 5
Random Number Generated 6
Random Number Generated 0
Random Number Generated 5
Random Number Generated 0
Random Number Generated 5
Random Number Generated 11
Number not skipped 11
Random Number Generated 6
Number not skipped 6
Random Number Generated 12
Number not skipped 12
Random Number Generated 1
Number not skipped 1
Random Number Generated 19
Number not skipped 19 
......
......
......
......
`})}),`
`,n.jsx(e.p,{children:`If we notice the above output, we can understand that everything was working fine till the random numbers were less
than 10. As soon as 11 (i.e. num < 10 === false) got generated and emitted all the generated numbers were taken and
printed.`}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:`Therefore, it means skipWhile drops emissions until condition is met and after that it does not filter anything
and mirrors the source observable as is.`}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"filter"})}),`
`,n.jsxs(e.p,{children:[`Now let's have a look at the filter operator. IMPO, this operator is a bit boring. It does not hold surprises like
`,n.jsx(e.code,{children:"skipWhile"})," operator had."]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.a,{href:"http://reactivex.io/documentation/operators/filter.html",children:"ReactiveX Docs"})," say:"]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:`" The Filter operator filters an Observable by only allowing items through that pass a test that you specify in the
form of a predicate function. "`}),`
`]}),`
`,n.jsx(e.p,{children:"Let's see it doing some action:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`const numbersLessThanTen = range(1,20).pipe(filter(num => num < 10));
numbersLessThanTen.subscribe((number) => {
    console.log(number);
});
`})}),`
`,n.jsx(e.p,{children:"o/p:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`1
2
3
4
5
6
7
8
9
`})}),`
`,n.jsx(e.p,{children:"That is what we expected i.e. it should filter all the numbers less than 10."}),`
`,n.jsx(e.p,{children:"Let's see one more example:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`const randomNumbers = interval(1000).pipe(map((num) => {
    const randomNumber = Math.floor(Math.random() * num);
    console.log('Random Number Generated', randomNumber);
    return randomNumber;
}), filter(num => num > 10));
randomNumbers.subscribe((number) => {
    console.log('Number is greater than 10 -->', number);
});
`})}),`
`,n.jsx(e.p,{children:"o/p:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`Random Number Generated 0
Random Number Generated 0
Random Number Generated 1
Random Number Generated 0
Random Number Generated 1
Random Number Generated 4
Random Number Generated 5
Random Number Generated 6
Random Number Generated 0
Random Number Generated 7
Random Number Generated 4
Random Number Generated 9
Random Number Generated 7
Random Number Generated 7
Random Number Generated 11
Number is greater than 10 --> 11
Random Number Generated 13
Number is greater than 10 --> 13
Random Number Generated 13
Number is greater than 10 --> 13
Random Number Generated 3
Random Number Generated 2
Random Number Generated 8
Random Number Generated 8
Random Number Generated 5
Random Number Generated 1
Random Number Generated 22
Number is greater than 10 --> 22
Random Number Generated 12
Number is greater than 10 --> 12
..............
..............
`})}),`
`,n.jsx(e.p,{children:`So above output simply showcased that filter simply filters the emissions on the basis of condition
specified and it filters throughout the lifetime of observable.`}),`
`,n.jsx(e.p,{children:`Well, this blog was to highlight the difference between these two RxJS operators, a difference if ignored
can lead to unexpected results and head banging!`}),`
`,n.jsx(e.p,{children:"Happy Learning! Happy Sharing!"})]})}function AC(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Sp,{...t})}):Sp(t)}const RC=Object.freeze(Object.defineProperty({__proto__:null,default:AC},Symbol.toStringTag,{value:"Module"}));function Cp(t){const e={blockquote:"blockquote",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Spread and Rest Operator in ES6"}),`
`,n.jsxs(e.p,{children:["We know that ECMA6/ES2015 came up with a lot of new features and syntatic sugars. In this blog, we are going to discuss about a new feature introduced in ECMA6 that is ",n.jsx(e.code,{children:"..."}),"."]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"..."})," is known as ",n.jsx(e.strong,{children:"Spread"}),"/",n.jsx(e.strong,{children:"Rest"})," operator depending upon how and where it is used."]}),`
`,n.jsxs(e.p,{children:["But before we move onto discussing ",n.jsx(e.strong,{children:"Spread/Rest"})," operator, it's important to go into the flashback and take a quick look at the following:"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"arguments"})," -  ",n.jsx(e.strong,{children:"arguments"})," is an array like object. It corresponds to the arguments passed to a function. Here is a quick look at it:"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-Javascript",children:`(function(a, b, c){
    console.log(arguments);
})(1, 2, 3);
`})}),`
`,n.jsxs(e.p,{children:["Output would be ",n.jsx(e.code,{children:"[1,2,3]"}),"."]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"apply"})," - We use apply, when we want a function to be executed as if it is a method of a particular object(delegate this into function). Here is a simple example:"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-Javascript",children:`var user = {firstname: 'John', surname: 'Doe'};
function getUserDetails(profession, experience){
    var detail = this.firstname + ' ' + this.surname + ' is an ' + profession + ' with ' + experience + ' years of experience.'
    return detail;
}
getUserDetails.apply(user, ['engineer','20']);
`})}),`
`,n.jsx(e.p,{children:"and at many a times we have also used it as:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-Javascript",children:`function getSum(){
    var sum = 0;
    for(var i=0; i<arguments.length; i++){
        sum = sum + arguments[i];
    }
    return sum;
}
var numbers = [10, 10, 20, 20, 30];
getSum.apply(null,numbers);
`})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.strong,{children:"concat"})}),`
`]}),`
`,n.jsx(e.p,{children:"We all have concatenated arrays using the concat functions. Here is an example:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-Javascript",children:`var a = [1, 2];
var b = [3, 4];
a.concat(b);
`})}),`
`,n.jsxs(e.p,{children:["Output would be ",n.jsx(e.code,{children:"[1, 2, 3, 4]"}),"."]}),`
`,n.jsxs(e.p,{children:["Now, let's move onto ",n.jsx(e.code,{children:"spread"})," operator introduced in ",n.jsx(e.strong,{children:"ECMA6"}),"."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-Javacript",children:`function getSum(x, y, z){
    console.log(x+y+z);
}
getSum(...[10,20,30]);
`})}),`
`,n.jsxs(e.p,{children:["We have put ",n.jsx(e.code,{children:"..."})," in front of array, so it spread the elements of array into individual values."]}),`
`,n.jsx(e.p,{children:"Now, let's concatenate two arrays:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-Javascript",children:`var a = [1, 2];
var b = [3, 4];
var c = [...a,...b]
console.log(c);
`})}),`
`,n.jsxs(e.p,{children:["Output would be ",n.jsx(e.code,{children:"[1, 2, 3, 4]"}),";"]}),`
`,n.jsxs(e.p,{children:["Now, let's look at the ",n.jsx(e.strong,{children:"Rest"})," operator."]}),`
`,n.jsxs(e.p,{children:["As the name suggests, ",n.jsx(e.strong,{children:"Rest"})," operator will take care of the rest of the parameters. Here is a snippet:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-Javascript",children:`function numbers(x, y, ...z){
    console.log(x, y, z);
}
numbers(1, 2, 3, 4, 5, 6);
`})}),`
`,n.jsxs(e.p,{children:["The output of above code would be ",n.jsx(e.code,{children:"1 2 [3, 4, 5, 6]"}),"."]}),`
`,n.jsx(e.p,{children:"As you can see the x and y have been assigned the values 1 and 2 respectively whereas rest of the parameters got assigned to z."}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:["Remember: It's the same three dots ..., the ",n.jsx(e.strong,{children:"how"})," and ",n.jsx(e.strong,{children:"where"})," of use, makes these three dots ",n.jsx(e.strong,{children:"Spread"})," or ",n.jsx(e.strong,{children:"Rest"}),"."]}),`
`]}),`
`,n.jsx(e.p,{children:"That's all for this blog. Happy Learning folks!"})]})}function MC(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Cp,{...t})}):Cp(t)}const _C=Object.freeze(Object.defineProperty({__proto__:null,default:MC},Symbol.toStringTag,{value:"Module"}));function Tp(t){const e={a:"a",code:"code",em:"em",h1:"h1",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"throttleTime vs debounceTime in RxJS"}),`
`,n.jsxs(e.p,{children:["We all know that the Reactive Extensions for JavaScript (RxJS) is a library for composing asynchronous and event-based programs. RxJS comes with wide range of operators and in this blog we will discuss about ",n.jsx(e.code,{children:"throttleTime"})," and ",n.jsx(e.code,{children:"debounceTime"})," operators."]}),`
`,n.jsxs(e.p,{children:["Before I move to ",n.jsx(e.code,{children:"throttleTime"}),", lets understand what ",n.jsx(e.code,{children:"throttling"})," means. So in simple terms ",n.jsx(e.code,{children:"throttling"})," means to control the rate at which a process is conducted. So if you have situation when you want to start a process, then wait for ",n.jsx(e.code,{children:"x"})," time and then resume and repeat the process, you would need to ",n.jsx(e.code,{children:"throttle"})," that process."]}),`
`,n.jsxs(e.p,{children:["Coming to an application level use case, suppose there is a situation when you want to abstain a user from continuously firing events, ",n.jsx(e.code,{children:"throttleTime"})," can be helpful in such situations. A couple of such scenarios can be :"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"Allowing a user to click a button only once per time interval, so that he doesn't ends up making multiple calls to the server."}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"Calling a function only once in a particular time interval on mouse hover."}),`
`]}),`
`]}),`
`,n.jsx(e.p,{children:"Now, let's see some code in action:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-HTML",children:`<button>Click!</button>
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-Javascript",children:`let counter = 0;
const button = document.querySelector('button');
const incrementCounter = () => {
	console.log(counter++);
}
Rx.Observable.fromEvent(button,'click').subscribe(incrementCounter);
`})}),`
`,n.jsx(e.p,{children:"Well, the idea behind the above code is pretty simple:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"We are creating an observable from click event on the button."}),`
`,n.jsxs(e.li,{children:["Then subscribing to that observable using the the ",n.jsx(e.code,{children:"subscribe"})," operator and pass ",n.jsx(e.code,{children:"incrementCounter"})," function to it."]}),`
`,n.jsxs(e.li,{children:["In the ",n.jsx(e.code,{children:"incrementCounter"})," function we are incrementing the counter and logging it on the console."]}),`
`]}),`
`,n.jsxs(e.p,{children:["Every time the button is clicked, the observable emits a value and and due to the subscription on this observable, ",n.jsx(e.code,{children:"incrementCounter"})," function is called and value of the counter is logged on console."]}),`
`,n.jsxs(e.p,{children:["Now, suppose we want to limit the rate at which counter can be incremented, say once in 2 seconds, we can change our existing code by adding ",n.jsx(e.code,{children:"throttleTime"})," operator and passing time ",n.jsx(e.code,{children:"2000ms"})," to it. Here is the modified code:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-Javascript",children:`let counter = 0;
const button = document.querySelector('button');
const incrementCounter = () => {
	console.log(counter++);
}
Rx.Observable.fromEvent(button,'click').throttleTime(2000).subscribe(incrementCounter);
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.em,{children:"throttleTime in action"})}),`
`,n.jsx(e.p,{children:n.jsx(e.img,{src:"https://raw.githubusercontent.com/NamitaMalik/throttleTime-vs-debounceTime-in-RxJS/master/throttleTime_on_click.gif",alt:"throttleTime on click"})}),`
`,n.jsxs(e.p,{children:["So when first time you click the button, ",n.jsx(e.code,{children:"0"})," would be printed and then even if you click the button again multiple times, ",n.jsx(e.code,{children:"1"})," would be printed only after 2 seconds."]}),`
`,n.jsx(e.p,{children:'This means even if you click multiple times on the "Click!" button, counter would be incremented and logged only once in 2 seconds.'}),`
`,n.jsxs(e.p,{children:["So how does ",n.jsx(e.code,{children:"throttleTime"})," works?"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Initially the timer is disabled."}),`
`,n.jsx(e.li,{children:"As soon as the first value arrives, it is emitted and timer is enabled."}),`
`,n.jsxs(e.li,{children:["Timer remains enabled for the ",n.jsx(e.code,{children:"x"})," duration passed as a param to the ",n.jsx(e.code,{children:"throttleTime"})," operator."]}),`
`,n.jsxs(e.li,{children:["As soon as ",n.jsx(e.code,{children:"x"})," duration passes, timer is disabled and the process repeats for the next source value."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.a,{href:"https://jsfiddle.net/namita1990/4L9212x7/23/",children:"Here"})," is a working demo."]}),`
`,n.jsxs(e.p,{children:["Now, let's move on to ",n.jsx(e.code,{children:"debouncingTime"})," operator. But before we move, lets understand what does the term ",n.jsx(e.code,{children:"debounce"})," means. Well, the term ",n.jsx(e.code,{children:"debouncing"})," is mostly related to hardware, electrical switches, micro-controllers etc. It is basically a way for eliminating unwanted signals from an input."]}),`
`,n.jsxs(e.p,{children:["A ",n.jsx(e.strong,{children:"typeahead"})," / ",n.jsx(e.strong,{children:"autocomplete"})," is the classic use case for debouncing. Now suppose user is typing something we would want to make an API call, to show the suggestions according to the input value entered by the user. But it would be better to make API call in a controlled manner, otherwise we will end up making numerous un-needed calls to the server."]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"debounceTime"})," is similar to ",n.jsx(e.code,{children:"throttleTime"})," except one key difference is that this operator keeps track of the most recent value from the Observable, and emits that only when the defined duration has passed without any other value appearing on the source Observable."]}),`
`,n.jsx(e.p,{children:"Let's have a look at the below code:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-HTML",children:`<input type="text">
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-Javascript",children:`const input = document.querySelector('input');
const printInput = (userInput) => {
	console.log(userInput.target.value);
}
Rx.Observable.fromEvent(input,'keyup').subscribe(printInput);
`})}),`
`,n.jsxs(e.p,{children:[`If you run the above code and type anything in the input box, it would be logged on console. But we don't want to do that. We want to print the user input in a more controlled manner, so that not all values are printed.
We just need to add `,n.jsx(e.code,{children:"debounceTime"})," operator to the above code."]}),`
`,n.jsx(e.p,{children:"So our code would look like:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-Javascript",children:`const input = document.querySelector('input');
const printInput = (userInput) => {
	console.log(userInput.target.value);
 }
 Rx.Observable.fromEvent(input,'keyup').debounceTime(1000).subscribe(printInput);
`})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.a,{href:"https://jsfiddle.net/namita1990/ynL6hhh0/",children:"Here"})," is working demo."]}),`
`,n.jsxs(e.p,{children:["So how does ",n.jsx(e.code,{children:"debounceTime"})," works?"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Keeps track of the most recent value from the source Observable."}),`
`,n.jsx(e.li,{children:"Once dueTime has passed without any other value appearing on the source Observable, that value is emitted."}),`
`,n.jsx(e.li,{children:"If a new value appears, then that new value will be emitted to the output Observable and old value will be dropped."}),`
`]}),`
`,n.jsxs(e.p,{children:["You, would now be thinking we could have used ",n.jsx(e.code,{children:"throttleTime"})," here instead of ",n.jsx(e.code,{children:"debounceTime"}),`. Have a look at the below
images, as they might help clear the confusion:`]}),`
`,n.jsx(e.p,{children:n.jsx(e.em,{children:"throttleTime on input"})}),`
`,n.jsx(e.p,{children:n.jsx(e.img,{src:"https://raw.githubusercontent.com/NamitaMalik/throttleTime-vs-debounceTime-in-RxJS/master/throttleTime.gif",alt:"throttleTime"})}),`
`,n.jsx(e.p,{children:`We can notice here that value was emitted once in a second. This was not our intention,
as we need the most recent value emitted by the observable in this case.`}),`
`,n.jsx(e.p,{children:n.jsx(e.em,{children:"debounceTime on input"})}),`
`,n.jsx(e.p,{children:n.jsx(e.img,{src:"https://raw.githubusercontent.com/NamitaMalik/throttleTime-vs-debounceTime-in-RxJS/master/debunceTime.gif",alt:"debounceTime"})}),`
`,n.jsx(e.p,{children:`In the above gif you would have noticed that most recent value is emitted
and the older value is dropped, which was the intention.`}),`
`,n.jsx(e.p,{children:`So next time when we have to restrict multiple clicks at a time on a button
or have to fetch data on the basis of keyed in value, we know which operators
to use!`})]})}function OC(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Tp,{...t})}):Tp(t)}const LC=Object.freeze(Object.defineProperty({__proto__:null,default:OC},Symbol.toStringTag,{value:"Module"}));function Np(t){const e={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Dear Future Me: Understand the Layers Before You Add Them"}),`
`,n.jsx(e.p,{children:"Early in my career, I used to look at architecture diagrams full of boxes, arrows, gateways, proxies, clusters, and clouds and assume one thing:"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Complexity meant maturity."})}),`
`,n.jsxs(e.p,{children:["If a system had a CDN, WAF, reverse proxy, ingress controller, API gateway, BFF layer, and a fleet of services, it ",n.jsx(e.em,{children:"must"})," be well designed."]}),`
`,n.jsx(e.p,{children:"Years later, I know better."}),`
`,n.jsx(e.p,{children:"A layered architecture is not automatically good or bad. Every layer can solve a real problem — but every layer also adds ownership boundaries, debugging complexity, operational cost, latency, and failure points."}),`
`,n.jsx(e.p,{children:"So future me, before adding another box to the diagram, understand what that layer is actually for."}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{children:"The Familiar Chain"}),`
`,n.jsx(e.p,{children:"A Common Enterprise Pattern Might Look Like:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-text",children:`Internet -> CDN -> WAF -> API Gateway -> NGINX/LB -> BFF -> Services
`})}),`
`,n.jsx(e.p,{children:"In practice, many vendors combine multiple layers, so the exact order varies."}),`
`,n.jsx(e.p,{children:"This stack is common in enterprise environments. Sometimes it is justified. Sometimes it is cargo cult architecture."}),`
`,n.jsx(e.p,{children:"Let’s break it down."}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{children:"1. Internet"}),`
`,n.jsx(e.p,{children:"This is simply your incoming traffic:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"browsers"}),`
`,n.jsx(e.li,{children:"mobile apps"}),`
`,n.jsx(e.li,{children:"partner systems"}),`
`,n.jsx(e.li,{children:"third-party consumers"}),`
`,n.jsx(e.li,{children:"internal users over public/private networks"}),`
`]}),`
`,n.jsx(e.p,{children:"This is where latency, trust, and reliability begin."}),`
`,n.jsx(e.p,{children:"Users do not care how many layers you have."}),`
`,n.jsx(e.p,{children:"They care whether the product is fast and works."}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{children:"2. CDN (Content Delivery Network)"}),`
`,n.jsx(e.p,{children:"A CDN caches static assets closer to users geographically."}),`
`,n.jsx(e.p,{children:"Examples:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"JavaScript bundles"}),`
`,n.jsx(e.li,{children:"CSS"}),`
`,n.jsx(e.li,{children:"images"}),`
`,n.jsx(e.li,{children:"fonts"}),`
`,n.jsx(e.li,{children:"downloadable assets"}),`
`]}),`
`,n.jsx(e.h3,{children:"When it makes sense"}),`
`,n.jsx(e.p,{children:"Use a CDN when:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"users are spread across regions"}),`
`,n.jsx(e.li,{children:"frontend bundles are sizable"}),`
`,n.jsx(e.li,{children:"performance matters"}),`
`,n.jsx(e.li,{children:"traffic spikes happen"}),`
`,n.jsx(e.li,{children:"you want to reduce origin load"}),`
`]}),`
`,n.jsx(e.p,{children:"For a modern SPA with users across countries, this often makes perfect sense."}),`
`,n.jsx(e.h3,{children:"When it may not"}),`
`,n.jsx(e.p,{children:"For a small internal tool used in one office or one region, the value may be limited."}),`
`,n.jsx(e.h3,{children:"Future me reminder"}),`
`,n.jsx(e.p,{children:"A CDN should solve scale and distance problems — not exist because “serious companies use one.”"}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{children:"3. WAF (Web Application Firewall)"}),`
`,n.jsx(e.p,{children:"A WAF helps detect and block malicious traffic patterns."}),`
`,n.jsx(e.p,{children:"Examples:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"common injection attempts"}),`
`,n.jsx(e.li,{children:"bot traffic"}),`
`,n.jsx(e.li,{children:"abusive requests"}),`
`,n.jsx(e.li,{children:"suspicious payloads"}),`
`,n.jsx(e.li,{children:"exploit signatures"}),`
`]}),`
`,n.jsx(e.h3,{children:"When it makes sense"}),`
`,n.jsx(e.p,{children:"Use a WAF when:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"your app is internet-facing"}),`
`,n.jsx(e.li,{children:"you process sensitive data"}),`
`,n.jsx(e.li,{children:"your threat profile is meaningful"}),`
`,n.jsx(e.li,{children:"you need baseline protection quickly"}),`
`,n.jsx(e.li,{children:"compliance matters"}),`
`]}),`
`,n.jsx(e.h3,{children:"When it may not"}),`
`,n.jsx(e.p,{children:"For internal tools behind VPN, SSO, private networks, and limited access, it may not be the first thing to optimize."}),`
`,n.jsx(e.h3,{children:"Future me reminder"}),`
`,n.jsx(e.p,{children:"A WAF is a safety layer, not a substitute for secure application design."}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{children:"4. API Gateway"}),`
`,n.jsx(e.p,{children:"This is where many teams add complexity faster than value."}),`
`,n.jsx(e.p,{children:"An API gateway can provide:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"token validation"}),`
`,n.jsx(e.li,{children:"API keys"}),`
`,n.jsx(e.li,{children:"rate limits"}),`
`,n.jsx(e.li,{children:"quotas"}),`
`,n.jsx(e.li,{children:"analytics"}),`
`,n.jsx(e.li,{children:"request transformation"}),`
`,n.jsx(e.li,{children:"version management"}),`
`,n.jsx(e.li,{children:"consumer-specific policies"}),`
`]}),`
`,n.jsx(e.h3,{children:"When it makes sense"}),`
`,n.jsx(e.p,{children:"Use an API gateway when APIs are consumed by:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"many teams"}),`
`,n.jsx(e.li,{children:"multiple client apps"}),`
`,n.jsx(e.li,{children:"external partners"}),`
`,n.jsx(e.li,{children:"public developers"}),`
`,n.jsx(e.li,{children:"regulated consumers"}),`
`,n.jsx(e.li,{children:"different consumers needing different policies"}),`
`]}),`
`,n.jsx(e.p,{children:"Use it when APIs are products or platforms."}),`
`,n.jsx(e.h3,{children:"When it may not"}),`
`,n.jsx(e.p,{children:"For one internal frontend consuming one backend, it can become ceremony."}),`
`,n.jsx(e.p,{children:"Sometimes what you really needed was:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"cleaner APIs"}),`
`,n.jsx(e.li,{children:"better ownership boundaries"}),`
`,n.jsx(e.li,{children:"simpler auth"}),`
`,n.jsx(e.li,{children:"a BFF layer"}),`
`,n.jsx(e.li,{children:"clearer contracts"}),`
`]}),`
`,n.jsx(e.h3,{children:"Future me reminder"}),`
`,n.jsx(e.p,{children:"An API gateway cannot rescue poor service design."}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{children:"5. Nginx / Reverse Proxy / Ingress"}),`
`,n.jsx(e.p,{children:"This layer receives requests and routes them to the right applications or services."}),`
`,n.jsx(e.p,{children:"Typical responsibilities:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"TLS termination"}),`
`,n.jsx(e.li,{children:"path routing"}),`
`,n.jsx(e.li,{children:"load balancing"}),`
`,n.jsx(e.li,{children:"compression"}),`
`,n.jsx(e.li,{children:"header management"}),`
`,n.jsx(e.li,{children:"connection handling"}),`
`]}),`
`,n.jsx(e.p,{children:"Example:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-text",children:`/app -> frontend
/api -> backend
/auth -> auth service
`})}),`
`,n.jsx(e.h3,{children:"When it makes sense"}),`
`,n.jsx(e.p,{children:"Use this when:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"multiple apps share one domain"}),`
`,n.jsx(e.li,{children:"backend systems should stay private"}),`
`,n.jsx(e.li,{children:"centralized routing helps"}),`
`,n.jsx(e.li,{children:"traffic management is needed"}),`
`]}),`
`,n.jsx(e.p,{children:"In Kubernetes, ingress controllers often play this role."}),`
`,n.jsx(e.h3,{children:"When it may not"}),`
`,n.jsx(e.p,{children:"If your cloud platform already provides routing cleanly, adding another proxy layer can become duplication."}),`
`,n.jsx(e.h3,{children:"Future me reminder"}),`
`,n.jsx(e.p,{children:"Reverse proxies often help."}),`
`,n.jsx(e.p,{children:"Two reverse proxies with unclear ownership often do not."}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{children:"6. BFF (Backend for Frontend)"}),`
`,n.jsx(e.p,{children:"A BFF sits between the frontend and backend services."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-text",children:`Frontend -> BFF -> Services
`})}),`
`,n.jsx(e.p,{children:"It is designed around client experience needs rather than backend domain boundaries."}),`
`,n.jsx(e.p,{children:"It can:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"aggregate multiple service calls"}),`
`,n.jsx(e.li,{children:"reshape responses for UI needs"}),`
`,n.jsx(e.li,{children:"reduce frontend orchestration complexity"}),`
`,n.jsx(e.li,{children:"hide backend topology"}),`
`,n.jsx(e.li,{children:"support client-specific auth/session flows"}),`
`,n.jsx(e.li,{children:"improve frontend delivery speed"}),`
`]}),`
`,n.jsx(e.h3,{children:"When it makes sense"}),`
`,n.jsx(e.p,{children:"Use a BFF when:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"one screen depends on many services"}),`
`,n.jsx(e.li,{children:"frontend code is stitching too many APIs together"}),`
`,n.jsx(e.li,{children:"web and mobile need different responses"}),`
`,n.jsx(e.li,{children:"client-side latency is high"}),`
`,n.jsx(e.li,{children:"domain APIs do not map well to product experiences"}),`
`]}),`
`,n.jsx(e.h3,{children:"When it may not"}),`
`,n.jsx(e.p,{children:"A BFF becomes wasteful when:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"it only forwards requests unchanged"}),`
`,n.jsx(e.li,{children:"one frontend already talks cleanly to one backend"}),`
`,n.jsx(e.li,{children:"many BFFs duplicate business logic"}),`
`,n.jsx(e.li,{children:"it becomes a dumping ground for backend gaps"}),`
`]}),`
`,n.jsx(e.h3,{children:"Future me reminder"}),`
`,n.jsx(e.p,{children:"A good BFF simplifies the frontend."}),`
`,n.jsx(e.p,{children:"A bad BFF is just a frontend monolith running on a server."}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{children:"7. Services"}),`
`,n.jsx(e.p,{children:"This is where business value actually lives."}),`
`,n.jsx(e.p,{children:"Examples:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"payments"}),`
`,n.jsx(e.li,{children:"profile"}),`
`,n.jsx(e.li,{children:"orders"}),`
`,n.jsx(e.li,{children:"compliance"}),`
`,n.jsx(e.li,{children:"notifications"}),`
`,n.jsx(e.li,{children:"pricing"}),`
`]}),`
`,n.jsx(e.p,{children:"Everything before this point should exist to help services deliver value safely and efficiently."}),`
`,n.jsx(e.h3,{children:"Future me reminder"}),`
`,n.jsx(e.p,{children:"Never let infrastructure become more sophisticated than the product it serves."}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h1,{children:"What Enterprises Often Need"}),`
`,n.jsx(e.p,{children:"Large enterprises may genuinely need more layers because they have:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"multiple regions"}),`
`,n.jsx(e.li,{children:"many teams"}),`
`,n.jsx(e.li,{children:"legacy systems"}),`
`,n.jsx(e.li,{children:"audit requirements"}),`
`,n.jsx(e.li,{children:"partner integrations"}),`
`,n.jsx(e.li,{children:"large traffic volumes"}),`
`,n.jsx(e.li,{children:"separate ownership models"}),`
`,n.jsx(e.li,{children:"strict governance"}),`
`]}),`
`,n.jsx(e.p,{children:"In these environments, layers can reduce chaos."}),`
`,n.jsx(e.p,{children:"But even enterprises should justify every one of them."}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h1,{children:"What Smaller Systems Often Need"}),`
`,n.jsx(e.p,{children:"Not every application needs a multi-layer enterprise traffic stack."}),`
`,n.jsx(e.p,{children:"Many smaller systems — or systems with simpler operational needs — are often better served by proportionate architectures that are easier to build, run, and evolve."}),`
`,n.jsx(e.p,{children:"The goal is not to remove layers for the sake of minimalism."}),`
`,n.jsx(e.p,{children:"The goal is to use only what genuinely adds value."}),`
`,n.jsx(e.h2,{children:"1. Internet -> CDN -> App"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-text",children:`Internet -> CDN -> App
`})}),`
`,n.jsx(e.p,{children:"This is a strong pattern for frontend-heavy applications."}),`
`,n.jsx(e.p,{children:"A CDN sits close to users geographically and serves cached static assets such as:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"JavaScript bundles"}),`
`,n.jsx(e.li,{children:"CSS"}),`
`,n.jsx(e.li,{children:"images"}),`
`,n.jsx(e.li,{children:"fonts"}),`
`]}),`
`,n.jsx(e.p,{children:"If a request cannot be served from cache, it is forwarded to the application origin."}),`
`,n.jsx(e.h3,{children:"Often suitable for"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"static SPAs"}),`
`,n.jsx(e.li,{children:"marketing sites"}),`
`,n.jsx(e.li,{children:"lightweight SaaS products"}),`
`,n.jsx(e.li,{children:"content-led platforms"}),`
`,n.jsx(e.li,{children:"globally distributed users"}),`
`]}),`
`,n.jsx(e.h3,{children:"Why it works"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"strong frontend performance"}),`
`,n.jsx(e.li,{children:"lower origin load"}),`
`,n.jsx(e.li,{children:"relatively low operational complexity"}),`
`,n.jsx(e.li,{children:"scalable without many moving parts"}),`
`]}),`
`,n.jsx(e.h2,{children:"2. Internet -> Reverse Proxy -> App"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-text",children:`Internet -> Reverse Proxy -> App
`})}),`
`,n.jsx(e.p,{children:"This is one of the most common production patterns."}),`
`,n.jsx(e.p,{children:"A reverse proxy such as Nginx, Apache, HAProxy, or Traefik sits in front of the application."}),`
`,n.jsx(e.p,{children:"It can handle:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"HTTPS termination"}),`
`,n.jsx(e.li,{children:"routing"}),`
`,n.jsx(e.li,{children:"load balancing"}),`
`,n.jsx(e.li,{children:"compression"}),`
`,n.jsx(e.li,{children:"security headers"}),`
`,n.jsx(e.li,{children:"hiding internal app ports"}),`
`]}),`
`,n.jsx(e.h3,{children:"Often suitable for"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"web apps with custom backends"}),`
`,n.jsx(e.li,{children:"containerized applications"}),`
`,n.jsx(e.li,{children:"monoliths or modular backends"}),`
`,n.jsx(e.li,{children:"apps needing centralized traffic control"}),`
`]}),`
`,n.jsx(e.h3,{children:"Why it works"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"keeps app logic separate from web traffic concerns"}),`
`,n.jsx(e.li,{children:"battle-tested and operationally practical"}),`
`,n.jsx(e.li,{children:"flexible without excessive complexity"}),`
`]}),`
`,n.jsx(e.h2,{children:"3. Internal Users -> App"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-text",children:`Internal Users -> App
`})}),`
`,n.jsx(e.p,{children:"Sometimes the right answer is simply an internal application for trusted users."}),`
`,n.jsx(e.p,{children:"Access may happen through:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"corporate network"}),`
`,n.jsx(e.li,{children:"VPN"}),`
`,n.jsx(e.li,{children:"zero-trust access platform"}),`
`,n.jsx(e.li,{children:"internal load balancer"}),`
`]}),`
`,n.jsx(e.h3,{children:"Often suitable for"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"intranet tools"}),`
`,n.jsx(e.li,{children:"internal dashboards"}),`
`,n.jsx(e.li,{children:"admin portals"}),`
`,n.jsx(e.li,{children:"finance systems"}),`
`,n.jsx(e.li,{children:"engineering tools"}),`
`]}),`
`,n.jsx(e.h3,{children:"Why it works"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"fewer moving parts"}),`
`,n.jsx(e.li,{children:"lower cost"}),`
`,n.jsx(e.li,{children:"easier debugging"}),`
`,n.jsx(e.li,{children:"faster delivery cycles"}),`
`,n.jsx(e.li,{children:"proportionate to actual risk and scale"}),`
`]}),`
`,n.jsx(e.h2,{children:"Important Reminder"}),`
`,n.jsx(e.p,{children:"These diagrams are intentionally simplified."}),`
`,n.jsx(e.p,{children:"Real systems may still include components such as DNS, identity providers, monitoring, backups, or internal networking controls."}),`
`,n.jsx(e.p,{children:"The point is not literal simplicity."}),`
`,n.jsx(e.p,{children:"The point is proportionate architecture."}),`
`,n.jsx(e.h3,{children:"Future Me Reminder"}),`
`,n.jsx(e.p,{children:"Simple architecture is not immature architecture."}),`
`,n.jsx(e.p,{children:"A smaller system that is secure, reliable, and easy to change is often better than a larger system designed to impress diagrams rather than serve users."}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h1,{children:"Hidden Costs of Extra Layers"}),`
`,n.jsx(e.p,{children:"Every new hop can add:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"latency"}),`
`,n.jsx(e.li,{children:"duplicated config"}),`
`,n.jsx(e.li,{children:"ownership confusion"}),`
`,n.jsx(e.li,{children:"slower incident response"}),`
`,n.jsx(e.li,{children:"finger-pointing"}),`
`,n.jsx(e.li,{children:"release friction"}),`
`,n.jsx(e.li,{children:"monitoring noise"}),`
`,n.jsx(e.li,{children:"operational overhead"}),`
`]}),`
`,n.jsx(e.p,{children:"Architecture diagrams rarely show these costs."}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h1,{children:"Questions to Ask Before Adding a Layer"}),`
`,n.jsx(e.p,{children:"Future me, ask these first:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"What specific pain does this solve today?"}),`
`,n.jsx(e.li,{children:"Can an existing layer already solve it?"}),`
`,n.jsx(e.li,{children:"Who owns it operationally?"}),`
`,n.jsx(e.li,{children:"What latency and complexity does it add?"}),`
`,n.jsx(e.li,{children:"What happens during incidents?"}),`
`,n.jsx(e.li,{children:"Would a simpler design be enough for the next 12–24 months?"}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h1,{children:"Final Advice to Future Me"}),`
`,n.jsx(e.p,{children:"Do not add components to look senior."}),`
`,n.jsx(e.p,{children:"Do not copy big-tech diagrams into ordinary systems."}),`
`,n.jsx(e.p,{children:"Do not confuse complexity with capability."}),`
`,n.jsx(e.p,{children:"Use layers when they remove pain, not when they add prestige."}),`
`,n.jsx(e.p,{children:"The best architecture often looks boring, clear, and proportionate."}),`
`,n.jsx(e.p,{children:"And whenever someone proposes another box in the diagram, ask:"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"What becomes simpler because of this?"})})]})}function DC(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Np,{...t})}):Np(t)}const FC=Object.freeze(Object.defineProperty({__proto__:null,default:DC},Symbol.toStringTag,{value:"Module"}));function Pp(t){const e={code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"ViewChild in Angular2"}),`
`,n.jsxs(e.p,{children:["There are situations when a ",n.jsx(e.strong,{children:"Parent Component"})," needs to interact with ",n.jsx(e.strong,{children:"Child Component"}),` so we will discuss a solution for
those cases in this writeup.`]}),`
`,n.jsxs(e.p,{children:["To be more elaborate let us a take a small example. Suppose there is a small game which has multiple ",n.jsx(e.strong,{children:"components"})," as given below:"]}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"GameComponent"})," - This is the parent ",n.jsx(e.strong,{children:"component"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"GameBoardComponent"})," - The Game board ",n.jsx(e.strong,{children:"component"})," which has the actual game."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"GameResetComponent"})," - ",n.jsx(e.strong,{children:"Component"})," which would be responsible for resetting the game."]}),`
`]}),`
`,n.jsxs(e.p,{children:["There are multiple ways to achieve the interaction between the above ",n.jsx(e.strong,{children:"components"}),", and one of them is ",n.jsx(e.strong,{children:"ViewChild"}),"."]}),`
`,n.jsxs(e.p,{children:["So, a user starts playing the game and after he notices no valid moves are left, he plans to reset the game. He clicks on the ",n.jsx(e.code,{children:"Reset"}),`
button which is the part of the `,n.jsx(e.code,{children:"GameResetComponent(Child Component)"}),". The ",n.jsx(e.code,{children:"GameResetComponent(Child Component)"}),` then
interacts with `,n.jsx(e.code,{children:"GameComponent (Parent Component)"})," and would request for reset. The ",n.jsx(e.code,{children:"GameComponent(Parent Component)"}),` would
then reset the game board by interacting with `,n.jsx(e.code,{children:"GameBoardComponent(Child Component)"})," in order to reset the board."]}),`
`,n.jsx(e.p,{children:"Notice two interactions here:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:["Child ",n.jsx(e.strong,{children:"Component"})," to Parent ",n.jsx(e.strong,{children:"Component"})," : ",n.jsx(e.code,{children:"GameResetComponent"})," -> ",n.jsx(e.code,{children:"GameComponent"})]}),`
`,n.jsxs(e.li,{children:["Parent ",n.jsx(e.strong,{children:"Component"})," to Child ",n.jsx(e.strong,{children:"Component"})," : ",n.jsx(e.code,{children:"GameComponent"})," -> ",n.jsx(e.code,{children:"GameBoardComponent"})]}),`
`]}),`
`,n.jsxs(e.p,{children:["The scheme of interactions discussed above is based on the ",n.jsx(e.strong,{children:"Mediator Design Pattern"}),". ",n.jsx(e.strong,{children:"Parent"})," ",n.jsx(e.strong,{children:"Component"}),` is acting as a
`,n.jsx(e.strong,{children:"central authority"})," which is responsible for communication between ",n.jsx(e.strong,{children:"child"})," ",n.jsx(e.strong,{children:"components"}),"."]}),`
`,n.jsxs(e.p,{children:["Well, we would be discussing 2nd interaction in this blog i.e. ",n.jsx(e.strong,{children:"Parent"})," to ",n.jsx(e.strong,{children:"Child"}),". So suppose when a ",n.jsx(e.strong,{children:"parent"})," ",n.jsx(e.strong,{children:"component"}),` needs
to call a `,n.jsx(e.strong,{children:"child"})," ",n.jsx(e.strong,{children:"component"})," function, it can inject ",n.jsx(e.strong,{children:"child"})," ",n.jsx(e.strong,{children:"component"})," as a ",n.jsx(e.strong,{children:"ViewChild"})," in ",n.jsx(e.strong,{children:"parent component"}),"."]}),`
`,n.jsx(e.p,{children:"Let's take a very small example to demonstrate this:"}),`
`,n.jsxs(e.p,{children:["Below is a child ",n.jsx(e.strong,{children:"component"})," that has a very simple functionality - It has some text which can be shown/hidden and there is a ",n.jsx(e.code,{children:"Show/Hide Text"}),`
button that toggles the visibility of that text.`]}),`
`,n.jsxs(e.p,{children:["Text is hidden by default and once the user clicks on the button, ",n.jsx(e.code,{children:"toggleVisibility"}),` function is called, which also sends the source in the
parameters as from where the function has been called.`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"child.component.ts"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-TypeScript",children:`import {Component} from '@angular/core';

@Component({
    selector: 'child-component',
    template: \`
    <div>
        <h2>Child Component</h2>
        <div class="text">
            <span [hidden]="!showText">I am visible now! Thanks to {{visibilitySource}}</span>
        </div>
        <div>
            <button (click)="toggleVisibility('Child Component')">Show/Hide Text</button>
        </div>
    </div>
    \`,
    styles: ['.text { margin-bottom: 10px; color:red}']
})

export class ChildComponent {
    showText:Boolean = false;
    visibilitySource:String = '';

    toggleVisibility(source) {
        this.showText = !this.showText;
        this.visibilitySource = source;
    }
}
`})}),`
`,n.jsxs(e.p,{children:["And here is the ",n.jsx(e.strong,{children:"parent"})," ",n.jsx(e.strong,{children:"component"})," for that ",n.jsx(e.strong,{children:"child"})," ",n.jsx(e.strong,{children:"component"}),":"]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"app.component.ts"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-TypeScript",children:`import {Component} from '@angular/core';
import {ChildComponent} from './child.component';

@Component({
    selector: 'my-app',
    template: \`
    <div>
        <h1>Parent Component</h1>
        <button (click)="showHideText()">Show/Hide Child Component Text</button>
        <child-component></child-component>
    </div>
    \`,
    directives: [ChildComponent]
})

export class AppComponent {
    showHideText() {
        // TODO: Access child component to toggle text visibility
    }
}
`})}),`
`,n.jsxs(e.p,{children:["Now assume, ",n.jsx(e.strong,{children:"parent"})," ",n.jsx(e.strong,{children:"component"})," also wants to show/hide the text displayed by the ",n.jsx(e.strong,{children:"child"})," ",n.jsx(e.strong,{children:"component"}),`, so to achieve that we need to do
the following:`]}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["Import ",n.jsx(e.strong,{children:"ViewChild"})," from ",n.jsx(e.code,{children:"@angular/core"}),". So now first line of our ",n.jsx(e.code,{children:"app.component.ts"}),` would look like:
`,n.jsx(e.code,{children:"import {Component,ViewChild} from '@angular/core';"}),`
In the above line we have imported the `,n.jsx(e.strong,{children:"ViewChild"}),", an annotation provided by ",n.jsx(e.strong,{children:"Angular2"})," for getting reference of child ",n.jsx(e.strong,{children:"components"}),"."]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[`Let's add the following snippet to our AppComponent class:
`,n.jsx(e.code,{children:"@ViewChild(ChildComponent) private childComponent:ChildComponent;"}),`
We are querying the `,n.jsx(e.code,{children:"ChildComponent"})," using ",n.jsx(e.code,{children:"@ViewChild"})," property decoration and injecting it to private ",n.jsx(e.code,{children:"childComponent"})," property."]}),`
`]}),`
`]}),`
`,n.jsxs(e.p,{children:["This ",n.jsx(e.code,{children:"childComponent"})," property will now provide us access to the child ",n.jsx(e.strong,{children:"component"}),". We know that our child ",n.jsx(e.strong,{children:"component"})," i.e. ",n.jsx(e.code,{children:"ChildComponent"}),`
has a `,n.jsx(e.code,{children:"toggleVisibility"}),` function that shows/hides text and also displays the source which made it visible. In the code below we have
defined the `,n.jsx(e.code,{children:"showHideText"})," method which then calls the ",n.jsx(e.code,{children:"toggleVisibility"})," function through ",n.jsx(e.code,{children:"childComponent"})," property."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-TypeScript",children:`showHideText(){
    this.childComponent.toggleVisibility('Parent Component');
}
`})}),`
`,n.jsxs(e.p,{children:["If we combine all the parts, our ",n.jsx(e.code,{children:"app.component.ts"})," would now look as:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-TypeScript",children:`import {Component, ViewChild} from '@angular/core';
import {ChildComponent} from './child.component';

@Component({
    selector: 'my-app',
    template: \`
    <div>
        <h1>Parent Component</h1>
        <button (click)="showHideText()">Show/Hide Child Component Text</button>
        <child-component></child-component>
    </div>
    \`,
    directives: [ChildComponent]
})

export class AppComponent {
    @ViewChild(ChildComponent) private childComponent:ChildComponent;

    showHideText() {
        this.childComponent.toggleVisibility('Parent Component');
    }
}
`})}),`
`,n.jsxs(e.p,{children:["In ",n.jsx(e.strong,{children:"Angular2"})," there are multiple ways of interaction between ",n.jsx(e.strong,{children:"components"}),", ",n.jsx(e.strong,{children:"ViewChild"})," is just one of them!"]})]})}function BC(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Pp,{...t})}):Pp(t)}const WC=Object.freeze(Object.defineProperty({__proto__:null,default:BC},Symbol.toStringTag,{value:"Module"})),zC=Ld("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),lv=v.forwardRef(({className:t,variant:e,size:r,asChild:o=!1,...s},i)=>{const l=o?nw:"button";return n.jsx(l,{className:Ue(zC({variant:e,size:r,className:t})),ref:i,...s})});lv.displayName="Button";const $C={"kindness-firmness-and-the-leaders-we-remember":{title:"Kindness, Firmness, and the Leaders We Remember",description:"Reflections on leadership: how kindness paired with firmness, presence, and accountability shapes teams, careers, and the leaders we never forget.",keywords:"leadership, kindness, firmness, mentorship, accountability, psychological safety, engineering management"},"kindness-firmness-and-the-safety-to-make-mistakes":{title:"Kindness, Firmness, and the Safety to Make Mistakes",description:"Reflections on leadership: how kindness paired with firmness, presence, and accountability shapes teams, careers, and the leaders we never forget.",keywords:"leadership, kindness, firmness, mentorship, accountability, psychological safety, engineering management"},"ai-solved-execution-coordination-is-the-next-bottleneck":{title:"AI Solved Execution. Coordination Is the Next Bottleneck.",description:"AI is rapidly solving software execution, but coordination — the real bottleneck in enterprise engineering — still runs on meetings, Jira, and human memory. Why the next frontier is AI orchestration.",keywords:"AI orchestration, software delivery, coordination, enterprise engineering, execution, agentic AI, developer productivity"},"ai-killed-coding-not-software-engineering":{title:"AI Killed Coding, Not Software Engineering",description:"Why AI-generated code raises the bar for software engineering — judgment, architecture, and ownership matter more than ever.",keywords:"AI, software engineering, coding, architecture, developer productivity",image:"https://namitamalik.github.io/ai-spaghetti-code.png"},"understand-the-layers-before-you-add-them":{title:"Understand the Layers Before You Add Them",description:"A practical take on software architecture: understand existing layers and their purpose before introducing new abstractions.",keywords:"software architecture, layers, abstraction, design"}},HC=$C,xa={title:"Namita Malik - Developer Blog",description:"Learn. Think. Engineer. Share. - A technical blog covering Angular, JavaScript, RxJS and web development."},UC=Object.assign({"../posts/2-way-data-binding-in-plain-vanilla-javascript.mdx":qS,"../posts/ai-killed-coding-not-software-engineering.mdx":QS,"../posts/ai-solved-execution-coordination-is-the-next-bottleneck.mdx":XS,"../posts/e2e-testing-with-protractor.mdx":ZS,"../posts/editing-javascript-object-using-angularjs.mdx":tC,"../posts/fetching-data-in-angular2.mdx":rC,"../posts/for-of-in-ecma6.mdx":sC,"../posts/hoisting.mdx":lC,"../posts/inheritance-in-javascript.mdx":cC,"../posts/javascript-inheritance-revisited.mdx":uC,"../posts/kindness-firmness-and-the-safety-to-make-mistakes.mdx":fC,"../posts/lazy-loading-with-angular2-routing.mdx":gC,"../posts/linked-list-in-javascript.mdx":vC,"../posts/loading-modules-conditionally-in-angular.mdx":jC,"../posts/map-vs-flatmap.mdx":bC,"../posts/ngrepeat-vs-ngfor.mdx":SC,"../posts/prototype-in-javascript.mdx":TC,"../posts/realtime-update-in-angular2.mdx":PC,"../posts/services-in-angular2.mdx":IC,"../posts/skipwhile-vs-filter-in-rxjs.mdx":RC,"../posts/spread-and-rest-operator-in-es6.mdx":_C,"../posts/throttletime-vs-debouncetime-in-rxjs.mdx":LC,"../posts/understand-the-layers-before-you-add-them.mdx":FC,"../posts/viewchild-in-angular2.mdx":WC});function dt(t,e,r){let o=document.head.querySelector(`meta[${t}="${e}"]`);o||(o=document.createElement("meta"),o.setAttribute(t,e),document.head.appendChild(o)),o.setAttribute("content",r)}function VC(t){let e=document.head.querySelector('link[rel="canonical"]');e||(e=document.createElement("link"),e.setAttribute("rel","canonical"),document.head.appendChild(e)),e.setAttribute("href",t)}function qC(){const{slug:t}=uS(),e=`../posts/${t}.mdx`,r=UC[e];if(v.useEffect(()=>{const s=t&&HC[t]||xa,i=s.title.includes("Namita Malik")?s.title:`${s.title} | Namita Malik`;return document.title=i,dt("name","description",s.description),s.keywords&&dt("name","keywords",s.keywords),dt("property","og:title",i),dt("property","og:description",s.description),dt("property","og:type","article"),dt("property","og:url",window.location.href),s.image&&(dt("property","og:image",s.image),dt("name","twitter:image",s.image)),dt("name","twitter:card","summary_large_image"),dt("name","twitter:title",i),dt("name","twitter:description",s.description),VC(window.location.href),()=>{document.title=xa.title,dt("name","description",xa.description)}},[t]),!r)return n.jsx("div",{className:"min-h-screen bg-gradient-subtle flex items-center justify-center",children:n.jsxs("div",{className:"text-center",children:[n.jsx("h1",{className:"text-2xl font-bold text-foreground mb-4",children:"Post not found"}),n.jsx("p",{className:"text-muted-foreground mb-6",children:"The blog post you're looking for doesn't exist."}),n.jsx(Ic,{to:"/",children:n.jsxs(lv,{variant:"default",children:[n.jsx(Sh,{className:"mr-2 h-4 w-4"}),"Back to Blog"]})})]})});const o=r.default;return n.jsx("div",{className:"min-h-screen bg-gradient-subtle",children:n.jsxs("div",{className:"container mx-auto px-4 py-8 max-w-4xl",children:[n.jsxs(Ic,{to:"/",className:"inline-flex items-center text-primary hover:text-accent transition-smooth mb-8",children:[n.jsx(Sh,{className:"mr-2 h-4 w-4"}),"Back to Blog"]}),n.jsx("div",{className:"text-center mb-8 pb-4 border-b border-border/10",children:n.jsxs("p",{className:"text-muted-foreground text-sm",children:["by ",n.jsx("span",{className:"font-medium text-foreground",children:"Namita Malik"})]})}),n.jsx("article",{className:`prose prose-lg max-w-none mb-16
  prose-headings:text-foreground prose-headings:font-playfair
  prose-h1:text-4xl prose-h1:md:text-5xl prose-h1:font-bold prose-h1:mb-8 prose-h1:pb-6 prose-h1:border-b prose-h1:border-border/30 prose-h1:text-center
  prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:font-semibold prose-h2:mt-8 prose-h2:mb-4
  prose-h3:text-xl prose-h3:md:text-2xl prose-h3:font-medium prose-h3:mt-6 prose-h3:mb-3
  prose-p:text-foreground prose-p:leading-relaxed prose-p:mb-4
  prose-a:text-primary prose-a:no-underline hover:prose-a:text-accent
  prose-blockquote:border-l-primary prose-blockquote:text-muted-foreground
  prose-strong:text-foreground prose-em:text-foreground
  prose-ul:my-4 prose-ol:my-4 prose-li:my-1 prose-code:before:content-none prose-code:after:content-none`,children:n.jsx(o,{})}),n.jsxs("div",{className:"text-center pt-8 border-t border-border/20",children:[n.jsx("p",{className:"text-muted-foreground text-sm mb-4",children:"Connect with me"}),n.jsxs("div",{className:"flex items-center justify-center gap-4",children:[n.jsx("a",{href:"https://github.com/namitamalik",target:"_blank",rel:"noopener noreferrer",className:"p-2 rounded-full hover:bg-accent/10 transition-smooth group","aria-label":"GitHub Profile",children:n.jsx(Vg,{className:"h-5 w-5 text-muted-foreground group-hover:text-primary transition-smooth"})}),n.jsx("a",{href:"https://x.com/nm_1304",target:"_blank",rel:"noopener noreferrer",className:"p-2 rounded-full hover:bg-accent/10 transition-smooth group","aria-label":"Twitter Profile",children:n.jsx(Gg,{className:"h-5 w-5 text-muted-foreground group-hover:text-primary transition-smooth"})}),n.jsx("a",{href:"https://linkedin.com/in/namitamalik",target:"_blank",rel:"noopener noreferrer",className:"p-2 rounded-full hover:bg-accent/10 transition-smooth group","aria-label":"LinkedIn Profile",children:n.jsx(qg,{className:"h-5 w-5 text-muted-foreground group-hover:text-primary transition-smooth"})}),n.jsx("button",{onClick:()=>{var s;return(s=navigator.share)==null?void 0:s.call(navigator,{url:window.location.href,title:document.title})},className:"p-2 rounded-full hover:bg-accent/10 transition-smooth group","aria-label":"Share this post",children:n.jsx(Jg,{className:"h-5 w-5 text-muted-foreground group-hover:text-primary transition-smooth"})})]})]})]})})}const JC=new O1,GC=()=>n.jsx(l1,{client:JC,children:n.jsxs(o1,{children:[n.jsx(Jb,{}),n.jsx(C0,{}),n.jsx(_S,{children:n.jsxs(NS,{children:[n.jsx(Ai,{path:"/",element:n.jsx(HS,{})}),n.jsx(Ai,{path:"/:slug",element:n.jsx(qC,{})}),n.jsx(Ai,{path:"*",element:n.jsx(US,{})})]})})]})});Ym(document.getElementById("root")).render(n.jsx(GC,{}));
