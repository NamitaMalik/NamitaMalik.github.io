var Td=t=>{throw TypeError(t)};var gl=(t,e,r)=>e.has(t)||Td("Cannot "+r);var T=(t,e,r)=>(gl(t,e,"read from private field"),r?r.call(t):e.get(t)),Y=(t,e,r)=>e.has(t)?Td("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),z=(t,e,r,o)=>(gl(t,e,"write to private field"),o?o.call(t,r):e.set(t,r),r),Ne=(t,e,r)=>(gl(t,e,"access private method"),r);var bs=(t,e,r,o)=>({set _(s){z(t,e,s,r)},get _(){return T(t,e,o)}});function px(t,e){for(var r=0;r<e.length;r++){const o=e[r];if(typeof o!="string"&&!Array.isArray(o)){for(const s in o)if(s!=="default"&&!(s in t)){const i=Object.getOwnPropertyDescriptor(o,s);i&&Object.defineProperty(t,s,i.get?i:{enumerable:!0,get:()=>o[s]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}})();function Yh(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Xh={exports:{}},Bi={},Zh={exports:{}},K={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cs=Symbol.for("react.element"),fx=Symbol.for("react.portal"),mx=Symbol.for("react.fragment"),gx=Symbol.for("react.strict_mode"),xx=Symbol.for("react.profiler"),vx=Symbol.for("react.provider"),yx=Symbol.for("react.context"),jx=Symbol.for("react.forward_ref"),wx=Symbol.for("react.suspense"),bx=Symbol.for("react.memo"),kx=Symbol.for("react.lazy"),Nd=Symbol.iterator;function Sx(t){return t===null||typeof t!="object"?null:(t=Nd&&t[Nd]||t["@@iterator"],typeof t=="function"?t:null)}var ep={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},tp=Object.assign,np={};function ro(t,e,r){this.props=t,this.context=e,this.refs=np,this.updater=r||ep}ro.prototype.isReactComponent={};ro.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ro.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function rp(){}rp.prototype=ro.prototype;function lc(t,e,r){this.props=t,this.context=e,this.refs=np,this.updater=r||ep}var ac=lc.prototype=new rp;ac.constructor=lc;tp(ac,ro.prototype);ac.isPureReactComponent=!0;var Ed=Array.isArray,op=Object.prototype.hasOwnProperty,cc={current:null},sp={key:!0,ref:!0,__self:!0,__source:!0};function ip(t,e,r){var o,s={},i=null,l=null;if(e!=null)for(o in e.ref!==void 0&&(l=e.ref),e.key!==void 0&&(i=""+e.key),e)op.call(e,o)&&!sp.hasOwnProperty(o)&&(s[o]=e[o]);var a=arguments.length-2;if(a===1)s.children=r;else if(1<a){for(var c=Array(a),d=0;d<a;d++)c[d]=arguments[d+2];s.children=c}if(t&&t.defaultProps)for(o in a=t.defaultProps,a)s[o]===void 0&&(s[o]=a[o]);return{$$typeof:cs,type:t,key:i,ref:l,props:s,_owner:cc.current}}function Cx(t,e){return{$$typeof:cs,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function dc(t){return typeof t=="object"&&t!==null&&t.$$typeof===cs}function Tx(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(r){return e[r]})}var Pd=/\/+/g;function xl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Tx(""+t.key):e.toString(36)}function Vs(t,e,r,o,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var l=!1;if(t===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case cs:case fx:l=!0}}if(l)return l=t,s=s(l),t=o===""?"."+xl(l,0):o,Ed(s)?(r="",t!=null&&(r=t.replace(Pd,"$&/")+"/"),Vs(s,e,r,"",function(d){return d})):s!=null&&(dc(s)&&(s=Cx(s,r+(!s.key||l&&l.key===s.key?"":(""+s.key).replace(Pd,"$&/")+"/")+t)),e.push(s)),1;if(l=0,o=o===""?".":o+":",Ed(t))for(var a=0;a<t.length;a++){i=t[a];var c=o+xl(i,a);l+=Vs(i,e,r,c,s)}else if(c=Sx(t),typeof c=="function")for(t=c.call(t),a=0;!(i=t.next()).done;)i=i.value,c=o+xl(i,a++),l+=Vs(i,e,r,c,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return l}function ks(t,e,r){if(t==null)return t;var o=[],s=0;return Vs(t,o,"","",function(i){return e.call(r,i,s++)}),o}function Nx(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(r){(t._status===0||t._status===-1)&&(t._status=1,t._result=r)},function(r){(t._status===0||t._status===-1)&&(t._status=2,t._result=r)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var De={current:null},Js={transition:null},Ex={ReactCurrentDispatcher:De,ReactCurrentBatchConfig:Js,ReactCurrentOwner:cc};function lp(){throw Error("act(...) is not supported in production builds of React.")}K.Children={map:ks,forEach:function(t,e,r){ks(t,function(){e.apply(this,arguments)},r)},count:function(t){var e=0;return ks(t,function(){e++}),e},toArray:function(t){return ks(t,function(e){return e})||[]},only:function(t){if(!dc(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};K.Component=ro;K.Fragment=mx;K.Profiler=xx;K.PureComponent=lc;K.StrictMode=gx;K.Suspense=wx;K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ex;K.act=lp;K.cloneElement=function(t,e,r){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var o=tp({},t.props),s=t.key,i=t.ref,l=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,l=cc.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(c in e)op.call(e,c)&&!sp.hasOwnProperty(c)&&(o[c]=e[c]===void 0&&a!==void 0?a[c]:e[c])}var c=arguments.length-2;if(c===1)o.children=r;else if(1<c){a=Array(c);for(var d=0;d<c;d++)a[d]=arguments[d+2];o.children=a}return{$$typeof:cs,type:t.type,key:s,ref:i,props:o,_owner:l}};K.createContext=function(t){return t={$$typeof:yx,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:vx,_context:t},t.Consumer=t};K.createElement=ip;K.createFactory=function(t){var e=ip.bind(null,t);return e.type=t,e};K.createRef=function(){return{current:null}};K.forwardRef=function(t){return{$$typeof:jx,render:t}};K.isValidElement=dc;K.lazy=function(t){return{$$typeof:kx,_payload:{_status:-1,_result:t},_init:Nx}};K.memo=function(t,e){return{$$typeof:bx,type:t,compare:e===void 0?null:e}};K.startTransition=function(t){var e=Js.transition;Js.transition={};try{t()}finally{Js.transition=e}};K.unstable_act=lp;K.useCallback=function(t,e){return De.current.useCallback(t,e)};K.useContext=function(t){return De.current.useContext(t)};K.useDebugValue=function(){};K.useDeferredValue=function(t){return De.current.useDeferredValue(t)};K.useEffect=function(t,e){return De.current.useEffect(t,e)};K.useId=function(){return De.current.useId()};K.useImperativeHandle=function(t,e,r){return De.current.useImperativeHandle(t,e,r)};K.useInsertionEffect=function(t,e){return De.current.useInsertionEffect(t,e)};K.useLayoutEffect=function(t,e){return De.current.useLayoutEffect(t,e)};K.useMemo=function(t,e){return De.current.useMemo(t,e)};K.useReducer=function(t,e,r){return De.current.useReducer(t,e,r)};K.useRef=function(t){return De.current.useRef(t)};K.useState=function(t){return De.current.useState(t)};K.useSyncExternalStore=function(t,e,r){return De.current.useSyncExternalStore(t,e,r)};K.useTransition=function(){return De.current.useTransition()};K.version="18.3.1";Zh.exports=K;var y=Zh.exports;const A=Yh(y),ap=px({__proto__:null,default:A},[y]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Px=y,Rx=Symbol.for("react.element"),Mx=Symbol.for("react.fragment"),Ax=Object.prototype.hasOwnProperty,_x=Px.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ox={key:!0,ref:!0,__self:!0,__source:!0};function cp(t,e,r){var o,s={},i=null,l=null;r!==void 0&&(i=""+r),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(l=e.ref);for(o in e)Ax.call(e,o)&&!Ox.hasOwnProperty(o)&&(s[o]=e[o]);if(t&&t.defaultProps)for(o in e=t.defaultProps,e)s[o]===void 0&&(s[o]=e[o]);return{$$typeof:Rx,type:t,key:i,ref:l,props:s,_owner:_x.current}}Bi.Fragment=Mx;Bi.jsx=cp;Bi.jsxs=cp;Xh.exports=Bi;var n=Xh.exports,dp={exports:{}},Ze={},up={exports:{}},hp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,E){var O=N.length;N.push(E);e:for(;0<O;){var U=O-1>>>1,B=N[U];if(0<s(B,E))N[U]=E,N[O]=B,O=U;else break e}}function r(N){return N.length===0?null:N[0]}function o(N){if(N.length===0)return null;var E=N[0],O=N.pop();if(O!==E){N[0]=O;e:for(var U=0,B=N.length,q=B>>>1;U<q;){var Q=2*(U+1)-1,fe=N[Q],Te=Q+1,Z=N[Te];if(0>s(fe,O))Te<B&&0>s(Z,fe)?(N[U]=Z,N[Te]=O,U=Te):(N[U]=fe,N[Q]=O,U=Q);else if(Te<B&&0>s(Z,O))N[U]=Z,N[Te]=O,U=Te;else break e}}return E}function s(N,E){var O=N.sortIndex-E.sortIndex;return O!==0?O:N.id-E.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var l=Date,a=l.now();t.unstable_now=function(){return l.now()-a}}var c=[],d=[],u=1,p=null,g=3,h=!1,b=!1,v=!1,j=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(N){for(var E=r(d);E!==null;){if(E.callback===null)o(d);else if(E.startTime<=N)o(d),E.sortIndex=E.expirationTime,e(c,E);else break;E=r(d)}}function w(N){if(v=!1,x(N),!b)if(r(c)!==null)b=!0,$(k);else{var E=r(d);E!==null&&H(w,E.startTime-N)}}function k(N,E){b=!1,v&&(v=!1,m(P),P=-1),h=!0;var O=g;try{for(x(E),p=r(c);p!==null&&(!(p.expirationTime>E)||N&&!F());){var U=p.callback;if(typeof U=="function"){p.callback=null,g=p.priorityLevel;var B=U(p.expirationTime<=E);E=t.unstable_now(),typeof B=="function"?p.callback=B:p===r(c)&&o(c),x(E)}else o(c);p=r(c)}if(p!==null)var q=!0;else{var Q=r(d);Q!==null&&H(w,Q.startTime-E),q=!1}return q}finally{p=null,g=O,h=!1}}var S=!1,C=null,P=-1,D=5,M=-1;function F(){return!(t.unstable_now()-M<D)}function L(){if(C!==null){var N=t.unstable_now();M=N;var E=!0;try{E=C(!0,N)}finally{E?J():(S=!1,C=null)}}else S=!1}var J;if(typeof f=="function")J=function(){f(L)};else if(typeof MessageChannel<"u"){var _=new MessageChannel,G=_.port2;_.port1.onmessage=L,J=function(){G.postMessage(null)}}else J=function(){j(L,0)};function $(N){C=N,S||(S=!0,J())}function H(N,E){P=j(function(){N(t.unstable_now())},E)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){b||h||(b=!0,$(k))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return r(c)},t.unstable_next=function(N){switch(g){case 1:case 2:case 3:var E=3;break;default:E=g}var O=g;g=E;try{return N()}finally{g=O}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,E){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var O=g;g=N;try{return E()}finally{g=O}},t.unstable_scheduleCallback=function(N,E,O){var U=t.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?U+O:U):O=U,N){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=O+B,N={id:u++,callback:E,priorityLevel:N,startTime:O,expirationTime:B,sortIndex:-1},O>U?(N.sortIndex=O,e(d,N),r(c)===null&&N===r(d)&&(v?(m(P),P=-1):v=!0,H(w,O-U))):(N.sortIndex=B,e(c,N),b||h||(b=!0,$(k))),N},t.unstable_shouldYield=F,t.unstable_wrapCallback=function(N){var E=g;return function(){var O=g;g=E;try{return N.apply(this,arguments)}finally{g=O}}}})(hp);up.exports=hp;var Ix=up.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lx=y,Xe=Ix;function R(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,r=1;r<arguments.length;r++)e+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var pp=new Set,Do={};function dr(t,e){Kr(t,e),Kr(t+"Capture",e)}function Kr(t,e){for(Do[t]=e,t=0;t<e.length;t++)pp.add(e[t])}var Jt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ql=Object.prototype.hasOwnProperty,Dx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Rd={},Md={};function Bx(t){return Ql.call(Md,t)?!0:Ql.call(Rd,t)?!1:Dx.test(t)?Md[t]=!0:(Rd[t]=!0,!1)}function Fx(t,e,r,o){if(r!==null&&r.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return o?!1:r!==null?!r.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function zx(t,e,r,o){if(e===null||typeof e>"u"||Fx(t,e,r,o))return!0;if(o)return!1;if(r!==null)switch(r.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Be(t,e,r,o,s,i,l){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=o,this.attributeNamespace=s,this.mustUseProperty=r,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=l}var Ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ce[t]=new Be(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ce[e]=new Be(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ce[t]=new Be(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ce[t]=new Be(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ce[t]=new Be(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ce[t]=new Be(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ce[t]=new Be(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ce[t]=new Be(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ce[t]=new Be(t,5,!1,t.toLowerCase(),null,!1,!1)});var uc=/[\-:]([a-z])/g;function hc(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(uc,hc);Ce[e]=new Be(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(uc,hc);Ce[e]=new Be(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(uc,hc);Ce[e]=new Be(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ce[t]=new Be(t,1,!1,t.toLowerCase(),null,!1,!1)});Ce.xlinkHref=new Be("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ce[t]=new Be(t,1,!1,t.toLowerCase(),null,!0,!0)});function pc(t,e,r,o){var s=Ce.hasOwnProperty(e)?Ce[e]:null;(s!==null?s.type!==0:o||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(zx(e,r,s,o)&&(r=null),o||s===null?Bx(e)&&(r===null?t.removeAttribute(e):t.setAttribute(e,""+r)):s.mustUseProperty?t[s.propertyName]=r===null?s.type===3?!1:"":r:(e=s.attributeName,o=s.attributeNamespace,r===null?t.removeAttribute(e):(s=s.type,r=s===3||s===4&&r===!0?"":""+r,o?t.setAttributeNS(o,e,r):t.setAttribute(e,r))))}var Xt=Lx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ss=Symbol.for("react.element"),jr=Symbol.for("react.portal"),wr=Symbol.for("react.fragment"),fc=Symbol.for("react.strict_mode"),Yl=Symbol.for("react.profiler"),fp=Symbol.for("react.provider"),mp=Symbol.for("react.context"),mc=Symbol.for("react.forward_ref"),Xl=Symbol.for("react.suspense"),Zl=Symbol.for("react.suspense_list"),gc=Symbol.for("react.memo"),dn=Symbol.for("react.lazy"),gp=Symbol.for("react.offscreen"),Ad=Symbol.iterator;function po(t){return t===null||typeof t!="object"?null:(t=Ad&&t[Ad]||t["@@iterator"],typeof t=="function"?t:null)}var de=Object.assign,vl;function ko(t){if(vl===void 0)try{throw Error()}catch(r){var e=r.stack.trim().match(/\n( *(at )?)/);vl=e&&e[1]||""}return`
`+vl+t}var yl=!1;function jl(t,e){if(!t||yl)return"";yl=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var o=d}Reflect.construct(t,[],e)}else{try{e.call()}catch(d){o=d}t.call(e.prototype)}else{try{throw Error()}catch(d){o=d}t()}}catch(d){if(d&&o&&typeof d.stack=="string"){for(var s=d.stack.split(`
`),i=o.stack.split(`
`),l=s.length-1,a=i.length-1;1<=l&&0<=a&&s[l]!==i[a];)a--;for(;1<=l&&0<=a;l--,a--)if(s[l]!==i[a]){if(l!==1||a!==1)do if(l--,a--,0>a||s[l]!==i[a]){var c=`
`+s[l].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=l&&0<=a);break}}}finally{yl=!1,Error.prepareStackTrace=r}return(t=t?t.displayName||t.name:"")?ko(t):""}function $x(t){switch(t.tag){case 5:return ko(t.type);case 16:return ko("Lazy");case 13:return ko("Suspense");case 19:return ko("SuspenseList");case 0:case 2:case 15:return t=jl(t.type,!1),t;case 11:return t=jl(t.type.render,!1),t;case 1:return t=jl(t.type,!0),t;default:return""}}function ea(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case wr:return"Fragment";case jr:return"Portal";case Yl:return"Profiler";case fc:return"StrictMode";case Xl:return"Suspense";case Zl:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case mp:return(t.displayName||"Context")+".Consumer";case fp:return(t._context.displayName||"Context")+".Provider";case mc:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case gc:return e=t.displayName||null,e!==null?e:ea(t.type)||"Memo";case dn:e=t._payload,t=t._init;try{return ea(t(e))}catch{}}return null}function Wx(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ea(e);case 8:return e===fc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function An(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function xp(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Hx(t){var e=xp(t)?"checked":"value",r=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),o=""+t[e];if(!t.hasOwnProperty(e)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var s=r.get,i=r.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(l){o=""+l,i.call(this,l)}}),Object.defineProperty(t,e,{enumerable:r.enumerable}),{getValue:function(){return o},setValue:function(l){o=""+l},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Cs(t){t._valueTracker||(t._valueTracker=Hx(t))}function vp(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var r=e.getValue(),o="";return t&&(o=xp(t)?t.checked?"true":"false":t.value),t=o,t!==r?(e.setValue(t),!0):!1}function li(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ta(t,e){var r=e.checked;return de({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??t._wrapperState.initialChecked})}function _d(t,e){var r=e.defaultValue==null?"":e.defaultValue,o=e.checked!=null?e.checked:e.defaultChecked;r=An(e.value!=null?e.value:r),t._wrapperState={initialChecked:o,initialValue:r,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function yp(t,e){e=e.checked,e!=null&&pc(t,"checked",e,!1)}function na(t,e){yp(t,e);var r=An(e.value),o=e.type;if(r!=null)o==="number"?(r===0&&t.value===""||t.value!=r)&&(t.value=""+r):t.value!==""+r&&(t.value=""+r);else if(o==="submit"||o==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ra(t,e.type,r):e.hasOwnProperty("defaultValue")&&ra(t,e.type,An(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Od(t,e,r){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var o=e.type;if(!(o!=="submit"&&o!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,r||e===t.value||(t.value=e),t.defaultValue=e}r=t.name,r!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,r!==""&&(t.name=r)}function ra(t,e,r){(e!=="number"||li(t.ownerDocument)!==t)&&(r==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+r&&(t.defaultValue=""+r))}var So=Array.isArray;function Ar(t,e,r,o){if(t=t.options,e){e={};for(var s=0;s<r.length;s++)e["$"+r[s]]=!0;for(r=0;r<t.length;r++)s=e.hasOwnProperty("$"+t[r].value),t[r].selected!==s&&(t[r].selected=s),s&&o&&(t[r].defaultSelected=!0)}else{for(r=""+An(r),e=null,s=0;s<t.length;s++){if(t[s].value===r){t[s].selected=!0,o&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function oa(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(R(91));return de({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Id(t,e){var r=e.value;if(r==null){if(r=e.children,e=e.defaultValue,r!=null){if(e!=null)throw Error(R(92));if(So(r)){if(1<r.length)throw Error(R(93));r=r[0]}e=r}e==null&&(e=""),r=e}t._wrapperState={initialValue:An(r)}}function jp(t,e){var r=An(e.value),o=An(e.defaultValue);r!=null&&(r=""+r,r!==t.value&&(t.value=r),e.defaultValue==null&&t.defaultValue!==r&&(t.defaultValue=r)),o!=null&&(t.defaultValue=""+o)}function Ld(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function wp(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function sa(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?wp(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ts,bp=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,r,o,s){MSApp.execUnsafeLocalFunction(function(){return t(e,r,o,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ts=Ts||document.createElement("div"),Ts.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ts.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Bo(t,e){if(e){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=e;return}}t.textContent=e}var No={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ux=["Webkit","ms","Moz","O"];Object.keys(No).forEach(function(t){Ux.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),No[e]=No[t]})});function kp(t,e,r){return e==null||typeof e=="boolean"||e===""?"":r||typeof e!="number"||e===0||No.hasOwnProperty(t)&&No[t]?(""+e).trim():e+"px"}function Sp(t,e){t=t.style;for(var r in e)if(e.hasOwnProperty(r)){var o=r.indexOf("--")===0,s=kp(r,e[r],o);r==="float"&&(r="cssFloat"),o?t.setProperty(r,s):t[r]=s}}var Vx=de({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ia(t,e){if(e){if(Vx[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(R(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(R(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(R(61))}if(e.style!=null&&typeof e.style!="object")throw Error(R(62))}}function la(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var aa=null;function xc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ca=null,_r=null,Or=null;function Dd(t){if(t=hs(t)){if(typeof ca!="function")throw Error(R(280));var e=t.stateNode;e&&(e=Hi(e),ca(t.stateNode,t.type,e))}}function Cp(t){_r?Or?Or.push(t):Or=[t]:_r=t}function Tp(){if(_r){var t=_r,e=Or;if(Or=_r=null,Dd(t),e)for(t=0;t<e.length;t++)Dd(e[t])}}function Np(t,e){return t(e)}function Ep(){}var wl=!1;function Pp(t,e,r){if(wl)return t(e,r);wl=!0;try{return Np(t,e,r)}finally{wl=!1,(_r!==null||Or!==null)&&(Ep(),Tp())}}function Fo(t,e){var r=t.stateNode;if(r===null)return null;var o=Hi(r);if(o===null)return null;r=o[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(R(231,e,typeof r));return r}var da=!1;if(Jt)try{var fo={};Object.defineProperty(fo,"passive",{get:function(){da=!0}}),window.addEventListener("test",fo,fo),window.removeEventListener("test",fo,fo)}catch{da=!1}function Jx(t,e,r,o,s,i,l,a,c){var d=Array.prototype.slice.call(arguments,3);try{e.apply(r,d)}catch(u){this.onError(u)}}var Eo=!1,ai=null,ci=!1,ua=null,qx={onError:function(t){Eo=!0,ai=t}};function Kx(t,e,r,o,s,i,l,a,c){Eo=!1,ai=null,Jx.apply(qx,arguments)}function Gx(t,e,r,o,s,i,l,a,c){if(Kx.apply(this,arguments),Eo){if(Eo){var d=ai;Eo=!1,ai=null}else throw Error(R(198));ci||(ci=!0,ua=d)}}function ur(t){var e=t,r=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(r=e.return),t=e.return;while(t)}return e.tag===3?r:null}function Rp(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Bd(t){if(ur(t)!==t)throw Error(R(188))}function Qx(t){var e=t.alternate;if(!e){if(e=ur(t),e===null)throw Error(R(188));return e!==t?null:t}for(var r=t,o=e;;){var s=r.return;if(s===null)break;var i=s.alternate;if(i===null){if(o=s.return,o!==null){r=o;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===r)return Bd(s),t;if(i===o)return Bd(s),e;i=i.sibling}throw Error(R(188))}if(r.return!==o.return)r=s,o=i;else{for(var l=!1,a=s.child;a;){if(a===r){l=!0,r=s,o=i;break}if(a===o){l=!0,o=s,r=i;break}a=a.sibling}if(!l){for(a=i.child;a;){if(a===r){l=!0,r=i,o=s;break}if(a===o){l=!0,o=i,r=s;break}a=a.sibling}if(!l)throw Error(R(189))}}if(r.alternate!==o)throw Error(R(190))}if(r.tag!==3)throw Error(R(188));return r.stateNode.current===r?t:e}function Mp(t){return t=Qx(t),t!==null?Ap(t):null}function Ap(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Ap(t);if(e!==null)return e;t=t.sibling}return null}var _p=Xe.unstable_scheduleCallback,Fd=Xe.unstable_cancelCallback,Yx=Xe.unstable_shouldYield,Xx=Xe.unstable_requestPaint,pe=Xe.unstable_now,Zx=Xe.unstable_getCurrentPriorityLevel,vc=Xe.unstable_ImmediatePriority,Op=Xe.unstable_UserBlockingPriority,di=Xe.unstable_NormalPriority,ev=Xe.unstable_LowPriority,Ip=Xe.unstable_IdlePriority,Fi=null,_t=null;function tv(t){if(_t&&typeof _t.onCommitFiberRoot=="function")try{_t.onCommitFiberRoot(Fi,t,void 0,(t.current.flags&128)===128)}catch{}}var jt=Math.clz32?Math.clz32:ov,nv=Math.log,rv=Math.LN2;function ov(t){return t>>>=0,t===0?32:31-(nv(t)/rv|0)|0}var Ns=64,Es=4194304;function Co(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ui(t,e){var r=t.pendingLanes;if(r===0)return 0;var o=0,s=t.suspendedLanes,i=t.pingedLanes,l=r&268435455;if(l!==0){var a=l&~s;a!==0?o=Co(a):(i&=l,i!==0&&(o=Co(i)))}else l=r&~s,l!==0?o=Co(l):i!==0&&(o=Co(i));if(o===0)return 0;if(e!==0&&e!==o&&!(e&s)&&(s=o&-o,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(o&4&&(o|=r&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=o;0<e;)r=31-jt(e),s=1<<r,o|=t[r],e&=~s;return o}function sv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function iv(t,e){for(var r=t.suspendedLanes,o=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var l=31-jt(i),a=1<<l,c=s[l];c===-1?(!(a&r)||a&o)&&(s[l]=sv(a,e)):c<=e&&(t.expiredLanes|=a),i&=~a}}function ha(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Lp(){var t=Ns;return Ns<<=1,!(Ns&4194240)&&(Ns=64),t}function bl(t){for(var e=[],r=0;31>r;r++)e.push(t);return e}function ds(t,e,r){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-jt(e),t[e]=r}function lv(t,e){var r=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var o=t.eventTimes;for(t=t.expirationTimes;0<r;){var s=31-jt(r),i=1<<s;e[s]=0,o[s]=-1,t[s]=-1,r&=~i}}function yc(t,e){var r=t.entangledLanes|=e;for(t=t.entanglements;r;){var o=31-jt(r),s=1<<o;s&e|t[o]&e&&(t[o]|=e),r&=~s}}var ee=0;function Dp(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Bp,jc,Fp,zp,$p,pa=!1,Ps=[],kn=null,Sn=null,Cn=null,zo=new Map,$o=new Map,hn=[],av="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function zd(t,e){switch(t){case"focusin":case"focusout":kn=null;break;case"dragenter":case"dragleave":Sn=null;break;case"mouseover":case"mouseout":Cn=null;break;case"pointerover":case"pointerout":zo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":$o.delete(e.pointerId)}}function mo(t,e,r,o,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:r,eventSystemFlags:o,nativeEvent:i,targetContainers:[s]},e!==null&&(e=hs(e),e!==null&&jc(e)),t):(t.eventSystemFlags|=o,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function cv(t,e,r,o,s){switch(e){case"focusin":return kn=mo(kn,t,e,r,o,s),!0;case"dragenter":return Sn=mo(Sn,t,e,r,o,s),!0;case"mouseover":return Cn=mo(Cn,t,e,r,o,s),!0;case"pointerover":var i=s.pointerId;return zo.set(i,mo(zo.get(i)||null,t,e,r,o,s)),!0;case"gotpointercapture":return i=s.pointerId,$o.set(i,mo($o.get(i)||null,t,e,r,o,s)),!0}return!1}function Wp(t){var e=qn(t.target);if(e!==null){var r=ur(e);if(r!==null){if(e=r.tag,e===13){if(e=Rp(r),e!==null){t.blockedOn=e,$p(t.priority,function(){Fp(r)});return}}else if(e===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function qs(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var r=fa(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(r===null){r=t.nativeEvent;var o=new r.constructor(r.type,r);aa=o,r.target.dispatchEvent(o),aa=null}else return e=hs(r),e!==null&&jc(e),t.blockedOn=r,!1;e.shift()}return!0}function $d(t,e,r){qs(t)&&r.delete(e)}function dv(){pa=!1,kn!==null&&qs(kn)&&(kn=null),Sn!==null&&qs(Sn)&&(Sn=null),Cn!==null&&qs(Cn)&&(Cn=null),zo.forEach($d),$o.forEach($d)}function go(t,e){t.blockedOn===e&&(t.blockedOn=null,pa||(pa=!0,Xe.unstable_scheduleCallback(Xe.unstable_NormalPriority,dv)))}function Wo(t){function e(s){return go(s,t)}if(0<Ps.length){go(Ps[0],t);for(var r=1;r<Ps.length;r++){var o=Ps[r];o.blockedOn===t&&(o.blockedOn=null)}}for(kn!==null&&go(kn,t),Sn!==null&&go(Sn,t),Cn!==null&&go(Cn,t),zo.forEach(e),$o.forEach(e),r=0;r<hn.length;r++)o=hn[r],o.blockedOn===t&&(o.blockedOn=null);for(;0<hn.length&&(r=hn[0],r.blockedOn===null);)Wp(r),r.blockedOn===null&&hn.shift()}var Ir=Xt.ReactCurrentBatchConfig,hi=!0;function uv(t,e,r,o){var s=ee,i=Ir.transition;Ir.transition=null;try{ee=1,wc(t,e,r,o)}finally{ee=s,Ir.transition=i}}function hv(t,e,r,o){var s=ee,i=Ir.transition;Ir.transition=null;try{ee=4,wc(t,e,r,o)}finally{ee=s,Ir.transition=i}}function wc(t,e,r,o){if(hi){var s=fa(t,e,r,o);if(s===null)Al(t,e,o,pi,r),zd(t,o);else if(cv(s,t,e,r,o))o.stopPropagation();else if(zd(t,o),e&4&&-1<av.indexOf(t)){for(;s!==null;){var i=hs(s);if(i!==null&&Bp(i),i=fa(t,e,r,o),i===null&&Al(t,e,o,pi,r),i===s)break;s=i}s!==null&&o.stopPropagation()}else Al(t,e,o,null,r)}}var pi=null;function fa(t,e,r,o){if(pi=null,t=xc(o),t=qn(t),t!==null)if(e=ur(t),e===null)t=null;else if(r=e.tag,r===13){if(t=Rp(e),t!==null)return t;t=null}else if(r===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return pi=t,null}function Hp(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Zx()){case vc:return 1;case Op:return 4;case di:case ev:return 16;case Ip:return 536870912;default:return 16}default:return 16}}var jn=null,bc=null,Ks=null;function Up(){if(Ks)return Ks;var t,e=bc,r=e.length,o,s="value"in jn?jn.value:jn.textContent,i=s.length;for(t=0;t<r&&e[t]===s[t];t++);var l=r-t;for(o=1;o<=l&&e[r-o]===s[i-o];o++);return Ks=s.slice(t,1<o?1-o:void 0)}function Gs(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Rs(){return!0}function Wd(){return!1}function et(t){function e(r,o,s,i,l){this._reactName=r,this._targetInst=s,this.type=o,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(r=t[a],this[a]=r?r(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Rs:Wd,this.isPropagationStopped=Wd,this}return de(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Rs)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Rs)},persist:function(){},isPersistent:Rs}),e}var oo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},kc=et(oo),us=de({},oo,{view:0,detail:0}),pv=et(us),kl,Sl,xo,zi=de({},us,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Sc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==xo&&(xo&&t.type==="mousemove"?(kl=t.screenX-xo.screenX,Sl=t.screenY-xo.screenY):Sl=kl=0,xo=t),kl)},movementY:function(t){return"movementY"in t?t.movementY:Sl}}),Hd=et(zi),fv=de({},zi,{dataTransfer:0}),mv=et(fv),gv=de({},us,{relatedTarget:0}),Cl=et(gv),xv=de({},oo,{animationName:0,elapsedTime:0,pseudoElement:0}),vv=et(xv),yv=de({},oo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),jv=et(yv),wv=de({},oo,{data:0}),Ud=et(wv),bv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Cv(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Sv[t])?!!e[t]:!1}function Sc(){return Cv}var Tv=de({},us,{key:function(t){if(t.key){var e=bv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Gs(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?kv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Sc,charCode:function(t){return t.type==="keypress"?Gs(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Gs(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Nv=et(Tv),Ev=de({},zi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vd=et(Ev),Pv=de({},us,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Sc}),Rv=et(Pv),Mv=de({},oo,{propertyName:0,elapsedTime:0,pseudoElement:0}),Av=et(Mv),_v=de({},zi,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ov=et(_v),Iv=[9,13,27,32],Cc=Jt&&"CompositionEvent"in window,Po=null;Jt&&"documentMode"in document&&(Po=document.documentMode);var Lv=Jt&&"TextEvent"in window&&!Po,Vp=Jt&&(!Cc||Po&&8<Po&&11>=Po),Jd=" ",qd=!1;function Jp(t,e){switch(t){case"keyup":return Iv.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var br=!1;function Dv(t,e){switch(t){case"compositionend":return qp(e);case"keypress":return e.which!==32?null:(qd=!0,Jd);case"textInput":return t=e.data,t===Jd&&qd?null:t;default:return null}}function Bv(t,e){if(br)return t==="compositionend"||!Cc&&Jp(t,e)?(t=Up(),Ks=bc=jn=null,br=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Vp&&e.locale!=="ko"?null:e.data;default:return null}}var Fv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Kd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Fv[t.type]:e==="textarea"}function Kp(t,e,r,o){Cp(o),e=fi(e,"onChange"),0<e.length&&(r=new kc("onChange","change",null,r,o),t.push({event:r,listeners:e}))}var Ro=null,Ho=null;function zv(t){sf(t,0)}function $i(t){var e=Cr(t);if(vp(e))return t}function $v(t,e){if(t==="change")return e}var Gp=!1;if(Jt){var Tl;if(Jt){var Nl="oninput"in document;if(!Nl){var Gd=document.createElement("div");Gd.setAttribute("oninput","return;"),Nl=typeof Gd.oninput=="function"}Tl=Nl}else Tl=!1;Gp=Tl&&(!document.documentMode||9<document.documentMode)}function Qd(){Ro&&(Ro.detachEvent("onpropertychange",Qp),Ho=Ro=null)}function Qp(t){if(t.propertyName==="value"&&$i(Ho)){var e=[];Kp(e,Ho,t,xc(t)),Pp(zv,e)}}function Wv(t,e,r){t==="focusin"?(Qd(),Ro=e,Ho=r,Ro.attachEvent("onpropertychange",Qp)):t==="focusout"&&Qd()}function Hv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return $i(Ho)}function Uv(t,e){if(t==="click")return $i(e)}function Vv(t,e){if(t==="input"||t==="change")return $i(e)}function Jv(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var bt=typeof Object.is=="function"?Object.is:Jv;function Uo(t,e){if(bt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var r=Object.keys(t),o=Object.keys(e);if(r.length!==o.length)return!1;for(o=0;o<r.length;o++){var s=r[o];if(!Ql.call(e,s)||!bt(t[s],e[s]))return!1}return!0}function Yd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Xd(t,e){var r=Yd(t);t=0;for(var o;r;){if(r.nodeType===3){if(o=t+r.textContent.length,t<=e&&o>=e)return{node:r,offset:e-t};t=o}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Yd(r)}}function Yp(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Yp(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Xp(){for(var t=window,e=li();e instanceof t.HTMLIFrameElement;){try{var r=typeof e.contentWindow.location.href=="string"}catch{r=!1}if(r)t=e.contentWindow;else break;e=li(t.document)}return e}function Tc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function qv(t){var e=Xp(),r=t.focusedElem,o=t.selectionRange;if(e!==r&&r&&r.ownerDocument&&Yp(r.ownerDocument.documentElement,r)){if(o!==null&&Tc(r)){if(e=o.start,t=o.end,t===void 0&&(t=e),"selectionStart"in r)r.selectionStart=e,r.selectionEnd=Math.min(t,r.value.length);else if(t=(e=r.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=r.textContent.length,i=Math.min(o.start,s);o=o.end===void 0?i:Math.min(o.end,s),!t.extend&&i>o&&(s=o,o=i,i=s),s=Xd(r,i);var l=Xd(r,o);s&&l&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==l.node||t.focusOffset!==l.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>o?(t.addRange(e),t.extend(l.node,l.offset)):(e.setEnd(l.node,l.offset),t.addRange(e)))}}for(e=[],t=r;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<e.length;r++)t=e[r],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Kv=Jt&&"documentMode"in document&&11>=document.documentMode,kr=null,ma=null,Mo=null,ga=!1;function Zd(t,e,r){var o=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;ga||kr==null||kr!==li(o)||(o=kr,"selectionStart"in o&&Tc(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Mo&&Uo(Mo,o)||(Mo=o,o=fi(ma,"onSelect"),0<o.length&&(e=new kc("onSelect","select",null,e,r),t.push({event:e,listeners:o}),e.target=kr)))}function Ms(t,e){var r={};return r[t.toLowerCase()]=e.toLowerCase(),r["Webkit"+t]="webkit"+e,r["Moz"+t]="moz"+e,r}var Sr={animationend:Ms("Animation","AnimationEnd"),animationiteration:Ms("Animation","AnimationIteration"),animationstart:Ms("Animation","AnimationStart"),transitionend:Ms("Transition","TransitionEnd")},El={},Zp={};Jt&&(Zp=document.createElement("div").style,"AnimationEvent"in window||(delete Sr.animationend.animation,delete Sr.animationiteration.animation,delete Sr.animationstart.animation),"TransitionEvent"in window||delete Sr.transitionend.transition);function Wi(t){if(El[t])return El[t];if(!Sr[t])return t;var e=Sr[t],r;for(r in e)if(e.hasOwnProperty(r)&&r in Zp)return El[t]=e[r];return t}var ef=Wi("animationend"),tf=Wi("animationiteration"),nf=Wi("animationstart"),rf=Wi("transitionend"),of=new Map,eu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Bn(t,e){of.set(t,e),dr(e,[t])}for(var Pl=0;Pl<eu.length;Pl++){var Rl=eu[Pl],Gv=Rl.toLowerCase(),Qv=Rl[0].toUpperCase()+Rl.slice(1);Bn(Gv,"on"+Qv)}Bn(ef,"onAnimationEnd");Bn(tf,"onAnimationIteration");Bn(nf,"onAnimationStart");Bn("dblclick","onDoubleClick");Bn("focusin","onFocus");Bn("focusout","onBlur");Bn(rf,"onTransitionEnd");Kr("onMouseEnter",["mouseout","mouseover"]);Kr("onMouseLeave",["mouseout","mouseover"]);Kr("onPointerEnter",["pointerout","pointerover"]);Kr("onPointerLeave",["pointerout","pointerover"]);dr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));dr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));dr("onBeforeInput",["compositionend","keypress","textInput","paste"]);dr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));dr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));dr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var To="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yv=new Set("cancel close invalid load scroll toggle".split(" ").concat(To));function tu(t,e,r){var o=t.type||"unknown-event";t.currentTarget=r,Gx(o,e,void 0,t),t.currentTarget=null}function sf(t,e){e=(e&4)!==0;for(var r=0;r<t.length;r++){var o=t[r],s=o.event;o=o.listeners;e:{var i=void 0;if(e)for(var l=o.length-1;0<=l;l--){var a=o[l],c=a.instance,d=a.currentTarget;if(a=a.listener,c!==i&&s.isPropagationStopped())break e;tu(s,a,d),i=c}else for(l=0;l<o.length;l++){if(a=o[l],c=a.instance,d=a.currentTarget,a=a.listener,c!==i&&s.isPropagationStopped())break e;tu(s,a,d),i=c}}}if(ci)throw t=ua,ci=!1,ua=null,t}function oe(t,e){var r=e[wa];r===void 0&&(r=e[wa]=new Set);var o=t+"__bubble";r.has(o)||(lf(e,t,2,!1),r.add(o))}function Ml(t,e,r){var o=0;e&&(o|=4),lf(r,t,o,e)}var As="_reactListening"+Math.random().toString(36).slice(2);function Vo(t){if(!t[As]){t[As]=!0,pp.forEach(function(r){r!=="selectionchange"&&(Yv.has(r)||Ml(r,!1,t),Ml(r,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[As]||(e[As]=!0,Ml("selectionchange",!1,e))}}function lf(t,e,r,o){switch(Hp(e)){case 1:var s=uv;break;case 4:s=hv;break;default:s=wc}r=s.bind(null,e,r,t),s=void 0,!da||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),o?s!==void 0?t.addEventListener(e,r,{capture:!0,passive:s}):t.addEventListener(e,r,!0):s!==void 0?t.addEventListener(e,r,{passive:s}):t.addEventListener(e,r,!1)}function Al(t,e,r,o,s){var i=o;if(!(e&1)&&!(e&2)&&o!==null)e:for(;;){if(o===null)return;var l=o.tag;if(l===3||l===4){var a=o.stateNode.containerInfo;if(a===s||a.nodeType===8&&a.parentNode===s)break;if(l===4)for(l=o.return;l!==null;){var c=l.tag;if((c===3||c===4)&&(c=l.stateNode.containerInfo,c===s||c.nodeType===8&&c.parentNode===s))return;l=l.return}for(;a!==null;){if(l=qn(a),l===null)return;if(c=l.tag,c===5||c===6){o=i=l;continue e}a=a.parentNode}}o=o.return}Pp(function(){var d=i,u=xc(r),p=[];e:{var g=of.get(t);if(g!==void 0){var h=kc,b=t;switch(t){case"keypress":if(Gs(r)===0)break e;case"keydown":case"keyup":h=Nv;break;case"focusin":b="focus",h=Cl;break;case"focusout":b="blur",h=Cl;break;case"beforeblur":case"afterblur":h=Cl;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=Hd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=mv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=Rv;break;case ef:case tf:case nf:h=vv;break;case rf:h=Av;break;case"scroll":h=pv;break;case"wheel":h=Ov;break;case"copy":case"cut":case"paste":h=jv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Vd}var v=(e&4)!==0,j=!v&&t==="scroll",m=v?g!==null?g+"Capture":null:g;v=[];for(var f=d,x;f!==null;){x=f;var w=x.stateNode;if(x.tag===5&&w!==null&&(x=w,m!==null&&(w=Fo(f,m),w!=null&&v.push(Jo(f,w,x)))),j)break;f=f.return}0<v.length&&(g=new h(g,b,null,r,u),p.push({event:g,listeners:v}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",h=t==="mouseout"||t==="pointerout",g&&r!==aa&&(b=r.relatedTarget||r.fromElement)&&(qn(b)||b[qt]))break e;if((h||g)&&(g=u.window===u?u:(g=u.ownerDocument)?g.defaultView||g.parentWindow:window,h?(b=r.relatedTarget||r.toElement,h=d,b=b?qn(b):null,b!==null&&(j=ur(b),b!==j||b.tag!==5&&b.tag!==6)&&(b=null)):(h=null,b=d),h!==b)){if(v=Hd,w="onMouseLeave",m="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(v=Vd,w="onPointerLeave",m="onPointerEnter",f="pointer"),j=h==null?g:Cr(h),x=b==null?g:Cr(b),g=new v(w,f+"leave",h,r,u),g.target=j,g.relatedTarget=x,w=null,qn(u)===d&&(v=new v(m,f+"enter",b,r,u),v.target=x,v.relatedTarget=j,w=v),j=w,h&&b)t:{for(v=h,m=b,f=0,x=v;x;x=yr(x))f++;for(x=0,w=m;w;w=yr(w))x++;for(;0<f-x;)v=yr(v),f--;for(;0<x-f;)m=yr(m),x--;for(;f--;){if(v===m||m!==null&&v===m.alternate)break t;v=yr(v),m=yr(m)}v=null}else v=null;h!==null&&nu(p,g,h,v,!1),b!==null&&j!==null&&nu(p,j,b,v,!0)}}e:{if(g=d?Cr(d):window,h=g.nodeName&&g.nodeName.toLowerCase(),h==="select"||h==="input"&&g.type==="file")var k=$v;else if(Kd(g))if(Gp)k=Vv;else{k=Hv;var S=Wv}else(h=g.nodeName)&&h.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(k=Uv);if(k&&(k=k(t,d))){Kp(p,k,r,u);break e}S&&S(t,g,d),t==="focusout"&&(S=g._wrapperState)&&S.controlled&&g.type==="number"&&ra(g,"number",g.value)}switch(S=d?Cr(d):window,t){case"focusin":(Kd(S)||S.contentEditable==="true")&&(kr=S,ma=d,Mo=null);break;case"focusout":Mo=ma=kr=null;break;case"mousedown":ga=!0;break;case"contextmenu":case"mouseup":case"dragend":ga=!1,Zd(p,r,u);break;case"selectionchange":if(Kv)break;case"keydown":case"keyup":Zd(p,r,u)}var C;if(Cc)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else br?Jp(t,r)&&(P="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(P="onCompositionStart");P&&(Vp&&r.locale!=="ko"&&(br||P!=="onCompositionStart"?P==="onCompositionEnd"&&br&&(C=Up()):(jn=u,bc="value"in jn?jn.value:jn.textContent,br=!0)),S=fi(d,P),0<S.length&&(P=new Ud(P,t,null,r,u),p.push({event:P,listeners:S}),C?P.data=C:(C=qp(r),C!==null&&(P.data=C)))),(C=Lv?Dv(t,r):Bv(t,r))&&(d=fi(d,"onBeforeInput"),0<d.length&&(u=new Ud("onBeforeInput","beforeinput",null,r,u),p.push({event:u,listeners:d}),u.data=C))}sf(p,e)})}function Jo(t,e,r){return{instance:t,listener:e,currentTarget:r}}function fi(t,e){for(var r=e+"Capture",o=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=Fo(t,r),i!=null&&o.unshift(Jo(t,i,s)),i=Fo(t,e),i!=null&&o.push(Jo(t,i,s))),t=t.return}return o}function yr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function nu(t,e,r,o,s){for(var i=e._reactName,l=[];r!==null&&r!==o;){var a=r,c=a.alternate,d=a.stateNode;if(c!==null&&c===o)break;a.tag===5&&d!==null&&(a=d,s?(c=Fo(r,i),c!=null&&l.unshift(Jo(r,c,a))):s||(c=Fo(r,i),c!=null&&l.push(Jo(r,c,a)))),r=r.return}l.length!==0&&t.push({event:e,listeners:l})}var Xv=/\r\n?/g,Zv=/\u0000|\uFFFD/g;function ru(t){return(typeof t=="string"?t:""+t).replace(Xv,`
`).replace(Zv,"")}function _s(t,e,r){if(e=ru(e),ru(t)!==e&&r)throw Error(R(425))}function mi(){}var xa=null,va=null;function ya(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ja=typeof setTimeout=="function"?setTimeout:void 0,ey=typeof clearTimeout=="function"?clearTimeout:void 0,ou=typeof Promise=="function"?Promise:void 0,ty=typeof queueMicrotask=="function"?queueMicrotask:typeof ou<"u"?function(t){return ou.resolve(null).then(t).catch(ny)}:ja;function ny(t){setTimeout(function(){throw t})}function _l(t,e){var r=e,o=0;do{var s=r.nextSibling;if(t.removeChild(r),s&&s.nodeType===8)if(r=s.data,r==="/$"){if(o===0){t.removeChild(s),Wo(e);return}o--}else r!=="$"&&r!=="$?"&&r!=="$!"||o++;r=s}while(r);Wo(e)}function Tn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function su(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"){if(e===0)return t;e--}else r==="/$"&&e++}t=t.previousSibling}return null}var so=Math.random().toString(36).slice(2),Mt="__reactFiber$"+so,qo="__reactProps$"+so,qt="__reactContainer$"+so,wa="__reactEvents$"+so,ry="__reactListeners$"+so,oy="__reactHandles$"+so;function qn(t){var e=t[Mt];if(e)return e;for(var r=t.parentNode;r;){if(e=r[qt]||r[Mt]){if(r=e.alternate,e.child!==null||r!==null&&r.child!==null)for(t=su(t);t!==null;){if(r=t[Mt])return r;t=su(t)}return e}t=r,r=t.parentNode}return null}function hs(t){return t=t[Mt]||t[qt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Cr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(R(33))}function Hi(t){return t[qo]||null}var ba=[],Tr=-1;function Fn(t){return{current:t}}function se(t){0>Tr||(t.current=ba[Tr],ba[Tr]=null,Tr--)}function ne(t,e){Tr++,ba[Tr]=t.current,t.current=e}var _n={},Me=Fn(_n),He=Fn(!1),or=_n;function Gr(t,e){var r=t.type.contextTypes;if(!r)return _n;var o=t.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===e)return o.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in r)s[i]=e[i];return o&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function Ue(t){return t=t.childContextTypes,t!=null}function gi(){se(He),se(Me)}function iu(t,e,r){if(Me.current!==_n)throw Error(R(168));ne(Me,e),ne(He,r)}function af(t,e,r){var o=t.stateNode;if(e=e.childContextTypes,typeof o.getChildContext!="function")return r;o=o.getChildContext();for(var s in o)if(!(s in e))throw Error(R(108,Wx(t)||"Unknown",s));return de({},r,o)}function xi(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||_n,or=Me.current,ne(Me,t),ne(He,He.current),!0}function lu(t,e,r){var o=t.stateNode;if(!o)throw Error(R(169));r?(t=af(t,e,or),o.__reactInternalMemoizedMergedChildContext=t,se(He),se(Me),ne(Me,t)):se(He),ne(He,r)}var $t=null,Ui=!1,Ol=!1;function cf(t){$t===null?$t=[t]:$t.push(t)}function sy(t){Ui=!0,cf(t)}function zn(){if(!Ol&&$t!==null){Ol=!0;var t=0,e=ee;try{var r=$t;for(ee=1;t<r.length;t++){var o=r[t];do o=o(!0);while(o!==null)}$t=null,Ui=!1}catch(s){throw $t!==null&&($t=$t.slice(t+1)),_p(vc,zn),s}finally{ee=e,Ol=!1}}return null}var Nr=[],Er=0,vi=null,yi=0,rt=[],ot=0,sr=null,Ht=1,Ut="";function Vn(t,e){Nr[Er++]=yi,Nr[Er++]=vi,vi=t,yi=e}function df(t,e,r){rt[ot++]=Ht,rt[ot++]=Ut,rt[ot++]=sr,sr=t;var o=Ht;t=Ut;var s=32-jt(o)-1;o&=~(1<<s),r+=1;var i=32-jt(e)+s;if(30<i){var l=s-s%5;i=(o&(1<<l)-1).toString(32),o>>=l,s-=l,Ht=1<<32-jt(e)+s|r<<s|o,Ut=i+t}else Ht=1<<i|r<<s|o,Ut=t}function Nc(t){t.return!==null&&(Vn(t,1),df(t,1,0))}function Ec(t){for(;t===vi;)vi=Nr[--Er],Nr[Er]=null,yi=Nr[--Er],Nr[Er]=null;for(;t===sr;)sr=rt[--ot],rt[ot]=null,Ut=rt[--ot],rt[ot]=null,Ht=rt[--ot],rt[ot]=null}var Qe=null,Ge=null,le=!1,yt=null;function uf(t,e){var r=st(5,null,null,0);r.elementType="DELETED",r.stateNode=e,r.return=t,e=t.deletions,e===null?(t.deletions=[r],t.flags|=16):e.push(r)}function au(t,e){switch(t.tag){case 5:var r=t.type;return e=e.nodeType!==1||r.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Qe=t,Ge=Tn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Qe=t,Ge=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(r=sr!==null?{id:Ht,overflow:Ut}:null,t.memoizedState={dehydrated:e,treeContext:r,retryLane:1073741824},r=st(18,null,null,0),r.stateNode=e,r.return=t,t.child=r,Qe=t,Ge=null,!0):!1;default:return!1}}function ka(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Sa(t){if(le){var e=Ge;if(e){var r=e;if(!au(t,e)){if(ka(t))throw Error(R(418));e=Tn(r.nextSibling);var o=Qe;e&&au(t,e)?uf(o,r):(t.flags=t.flags&-4097|2,le=!1,Qe=t)}}else{if(ka(t))throw Error(R(418));t.flags=t.flags&-4097|2,le=!1,Qe=t}}}function cu(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Qe=t}function Os(t){if(t!==Qe)return!1;if(!le)return cu(t),le=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ya(t.type,t.memoizedProps)),e&&(e=Ge)){if(ka(t))throw hf(),Error(R(418));for(;e;)uf(t,e),e=Tn(e.nextSibling)}if(cu(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(R(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="/$"){if(e===0){Ge=Tn(t.nextSibling);break e}e--}else r!=="$"&&r!=="$!"&&r!=="$?"||e++}t=t.nextSibling}Ge=null}}else Ge=Qe?Tn(t.stateNode.nextSibling):null;return!0}function hf(){for(var t=Ge;t;)t=Tn(t.nextSibling)}function Qr(){Ge=Qe=null,le=!1}function Pc(t){yt===null?yt=[t]:yt.push(t)}var iy=Xt.ReactCurrentBatchConfig;function vo(t,e,r){if(t=r.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(R(309));var o=r.stateNode}if(!o)throw Error(R(147,t));var s=o,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(l){var a=s.refs;l===null?delete a[i]:a[i]=l},e._stringRef=i,e)}if(typeof t!="string")throw Error(R(284));if(!r._owner)throw Error(R(290,t))}return t}function Is(t,e){throw t=Object.prototype.toString.call(e),Error(R(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function du(t){var e=t._init;return e(t._payload)}function pf(t){function e(m,f){if(t){var x=m.deletions;x===null?(m.deletions=[f],m.flags|=16):x.push(f)}}function r(m,f){if(!t)return null;for(;f!==null;)e(m,f),f=f.sibling;return null}function o(m,f){for(m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function s(m,f){return m=Rn(m,f),m.index=0,m.sibling=null,m}function i(m,f,x){return m.index=x,t?(x=m.alternate,x!==null?(x=x.index,x<f?(m.flags|=2,f):x):(m.flags|=2,f)):(m.flags|=1048576,f)}function l(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,f,x,w){return f===null||f.tag!==6?(f=$l(x,m.mode,w),f.return=m,f):(f=s(f,x),f.return=m,f)}function c(m,f,x,w){var k=x.type;return k===wr?u(m,f,x.props.children,w,x.key):f!==null&&(f.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===dn&&du(k)===f.type)?(w=s(f,x.props),w.ref=vo(m,f,x),w.return=m,w):(w=ni(x.type,x.key,x.props,null,m.mode,w),w.ref=vo(m,f,x),w.return=m,w)}function d(m,f,x,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==x.containerInfo||f.stateNode.implementation!==x.implementation?(f=Wl(x,m.mode,w),f.return=m,f):(f=s(f,x.children||[]),f.return=m,f)}function u(m,f,x,w,k){return f===null||f.tag!==7?(f=rr(x,m.mode,w,k),f.return=m,f):(f=s(f,x),f.return=m,f)}function p(m,f,x){if(typeof f=="string"&&f!==""||typeof f=="number")return f=$l(""+f,m.mode,x),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Ss:return x=ni(f.type,f.key,f.props,null,m.mode,x),x.ref=vo(m,null,f),x.return=m,x;case jr:return f=Wl(f,m.mode,x),f.return=m,f;case dn:var w=f._init;return p(m,w(f._payload),x)}if(So(f)||po(f))return f=rr(f,m.mode,x,null),f.return=m,f;Is(m,f)}return null}function g(m,f,x,w){var k=f!==null?f.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return k!==null?null:a(m,f,""+x,w);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ss:return x.key===k?c(m,f,x,w):null;case jr:return x.key===k?d(m,f,x,w):null;case dn:return k=x._init,g(m,f,k(x._payload),w)}if(So(x)||po(x))return k!==null?null:u(m,f,x,w,null);Is(m,x)}return null}function h(m,f,x,w,k){if(typeof w=="string"&&w!==""||typeof w=="number")return m=m.get(x)||null,a(f,m,""+w,k);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ss:return m=m.get(w.key===null?x:w.key)||null,c(f,m,w,k);case jr:return m=m.get(w.key===null?x:w.key)||null,d(f,m,w,k);case dn:var S=w._init;return h(m,f,x,S(w._payload),k)}if(So(w)||po(w))return m=m.get(x)||null,u(f,m,w,k,null);Is(f,w)}return null}function b(m,f,x,w){for(var k=null,S=null,C=f,P=f=0,D=null;C!==null&&P<x.length;P++){C.index>P?(D=C,C=null):D=C.sibling;var M=g(m,C,x[P],w);if(M===null){C===null&&(C=D);break}t&&C&&M.alternate===null&&e(m,C),f=i(M,f,P),S===null?k=M:S.sibling=M,S=M,C=D}if(P===x.length)return r(m,C),le&&Vn(m,P),k;if(C===null){for(;P<x.length;P++)C=p(m,x[P],w),C!==null&&(f=i(C,f,P),S===null?k=C:S.sibling=C,S=C);return le&&Vn(m,P),k}for(C=o(m,C);P<x.length;P++)D=h(C,m,P,x[P],w),D!==null&&(t&&D.alternate!==null&&C.delete(D.key===null?P:D.key),f=i(D,f,P),S===null?k=D:S.sibling=D,S=D);return t&&C.forEach(function(F){return e(m,F)}),le&&Vn(m,P),k}function v(m,f,x,w){var k=po(x);if(typeof k!="function")throw Error(R(150));if(x=k.call(x),x==null)throw Error(R(151));for(var S=k=null,C=f,P=f=0,D=null,M=x.next();C!==null&&!M.done;P++,M=x.next()){C.index>P?(D=C,C=null):D=C.sibling;var F=g(m,C,M.value,w);if(F===null){C===null&&(C=D);break}t&&C&&F.alternate===null&&e(m,C),f=i(F,f,P),S===null?k=F:S.sibling=F,S=F,C=D}if(M.done)return r(m,C),le&&Vn(m,P),k;if(C===null){for(;!M.done;P++,M=x.next())M=p(m,M.value,w),M!==null&&(f=i(M,f,P),S===null?k=M:S.sibling=M,S=M);return le&&Vn(m,P),k}for(C=o(m,C);!M.done;P++,M=x.next())M=h(C,m,P,M.value,w),M!==null&&(t&&M.alternate!==null&&C.delete(M.key===null?P:M.key),f=i(M,f,P),S===null?k=M:S.sibling=M,S=M);return t&&C.forEach(function(L){return e(m,L)}),le&&Vn(m,P),k}function j(m,f,x,w){if(typeof x=="object"&&x!==null&&x.type===wr&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Ss:e:{for(var k=x.key,S=f;S!==null;){if(S.key===k){if(k=x.type,k===wr){if(S.tag===7){r(m,S.sibling),f=s(S,x.props.children),f.return=m,m=f;break e}}else if(S.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===dn&&du(k)===S.type){r(m,S.sibling),f=s(S,x.props),f.ref=vo(m,S,x),f.return=m,m=f;break e}r(m,S);break}else e(m,S);S=S.sibling}x.type===wr?(f=rr(x.props.children,m.mode,w,x.key),f.return=m,m=f):(w=ni(x.type,x.key,x.props,null,m.mode,w),w.ref=vo(m,f,x),w.return=m,m=w)}return l(m);case jr:e:{for(S=x.key;f!==null;){if(f.key===S)if(f.tag===4&&f.stateNode.containerInfo===x.containerInfo&&f.stateNode.implementation===x.implementation){r(m,f.sibling),f=s(f,x.children||[]),f.return=m,m=f;break e}else{r(m,f);break}else e(m,f);f=f.sibling}f=Wl(x,m.mode,w),f.return=m,m=f}return l(m);case dn:return S=x._init,j(m,f,S(x._payload),w)}if(So(x))return b(m,f,x,w);if(po(x))return v(m,f,x,w);Is(m,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,f!==null&&f.tag===6?(r(m,f.sibling),f=s(f,x),f.return=m,m=f):(r(m,f),f=$l(x,m.mode,w),f.return=m,m=f),l(m)):r(m,f)}return j}var Yr=pf(!0),ff=pf(!1),ji=Fn(null),wi=null,Pr=null,Rc=null;function Mc(){Rc=Pr=wi=null}function Ac(t){var e=ji.current;se(ji),t._currentValue=e}function Ca(t,e,r){for(;t!==null;){var o=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,o!==null&&(o.childLanes|=e)):o!==null&&(o.childLanes&e)!==e&&(o.childLanes|=e),t===r)break;t=t.return}}function Lr(t,e){wi=t,Rc=Pr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(We=!0),t.firstContext=null)}function lt(t){var e=t._currentValue;if(Rc!==t)if(t={context:t,memoizedValue:e,next:null},Pr===null){if(wi===null)throw Error(R(308));Pr=t,wi.dependencies={lanes:0,firstContext:t}}else Pr=Pr.next=t;return e}var Kn=null;function _c(t){Kn===null?Kn=[t]:Kn.push(t)}function mf(t,e,r,o){var s=e.interleaved;return s===null?(r.next=r,_c(e)):(r.next=s.next,s.next=r),e.interleaved=r,Kt(t,o)}function Kt(t,e){t.lanes|=e;var r=t.alternate;for(r!==null&&(r.lanes|=e),r=t,t=t.return;t!==null;)t.childLanes|=e,r=t.alternate,r!==null&&(r.childLanes|=e),r=t,t=t.return;return r.tag===3?r.stateNode:null}var un=!1;function Oc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function gf(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Vt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Nn(t,e,r){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,X&2){var s=o.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),o.pending=e,Kt(t,r)}return s=o.interleaved,s===null?(e.next=e,_c(o)):(e.next=s.next,s.next=e),o.interleaved=e,Kt(t,r)}function Qs(t,e,r){if(e=e.updateQueue,e!==null&&(e=e.shared,(r&4194240)!==0)){var o=e.lanes;o&=t.pendingLanes,r|=o,e.lanes=r,yc(t,r)}}function uu(t,e){var r=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,r===o)){var s=null,i=null;if(r=r.firstBaseUpdate,r!==null){do{var l={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};i===null?s=i=l:i=i.next=l,r=r.next}while(r!==null);i===null?s=i=e:i=i.next=e}else s=i=e;r={baseState:o.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:o.shared,effects:o.effects},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=e:t.next=e,r.lastBaseUpdate=e}function bi(t,e,r,o){var s=t.updateQueue;un=!1;var i=s.firstBaseUpdate,l=s.lastBaseUpdate,a=s.shared.pending;if(a!==null){s.shared.pending=null;var c=a,d=c.next;c.next=null,l===null?i=d:l.next=d,l=c;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==l&&(a===null?u.firstBaseUpdate=d:a.next=d,u.lastBaseUpdate=c))}if(i!==null){var p=s.baseState;l=0,u=d=c=null,a=i;do{var g=a.lane,h=a.eventTime;if((o&g)===g){u!==null&&(u=u.next={eventTime:h,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var b=t,v=a;switch(g=e,h=r,v.tag){case 1:if(b=v.payload,typeof b=="function"){p=b.call(h,p,g);break e}p=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=v.payload,g=typeof b=="function"?b.call(h,p,g):b,g==null)break e;p=de({},p,g);break e;case 2:un=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,g=s.effects,g===null?s.effects=[a]:g.push(a))}else h={eventTime:h,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(d=u=h,c=p):u=u.next=h,l|=g;if(a=a.next,a===null){if(a=s.shared.pending,a===null)break;g=a,a=g.next,g.next=null,s.lastBaseUpdate=g,s.shared.pending=null}}while(!0);if(u===null&&(c=p),s.baseState=c,s.firstBaseUpdate=d,s.lastBaseUpdate=u,e=s.shared.interleaved,e!==null){s=e;do l|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);lr|=l,t.lanes=l,t.memoizedState=p}}function hu(t,e,r){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var o=t[e],s=o.callback;if(s!==null){if(o.callback=null,o=r,typeof s!="function")throw Error(R(191,s));s.call(o)}}}var ps={},Ot=Fn(ps),Ko=Fn(ps),Go=Fn(ps);function Gn(t){if(t===ps)throw Error(R(174));return t}function Ic(t,e){switch(ne(Go,e),ne(Ko,t),ne(Ot,ps),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:sa(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=sa(e,t)}se(Ot),ne(Ot,e)}function Xr(){se(Ot),se(Ko),se(Go)}function xf(t){Gn(Go.current);var e=Gn(Ot.current),r=sa(e,t.type);e!==r&&(ne(Ko,t),ne(Ot,r))}function Lc(t){Ko.current===t&&(se(Ot),se(Ko))}var ae=Fn(0);function ki(t){for(var e=t;e!==null;){if(e.tag===13){var r=e.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Il=[];function Dc(){for(var t=0;t<Il.length;t++)Il[t]._workInProgressVersionPrimary=null;Il.length=0}var Ys=Xt.ReactCurrentDispatcher,Ll=Xt.ReactCurrentBatchConfig,ir=0,ce=null,xe=null,we=null,Si=!1,Ao=!1,Qo=0,ly=0;function Ee(){throw Error(R(321))}function Bc(t,e){if(e===null)return!1;for(var r=0;r<e.length&&r<t.length;r++)if(!bt(t[r],e[r]))return!1;return!0}function Fc(t,e,r,o,s,i){if(ir=i,ce=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ys.current=t===null||t.memoizedState===null?uy:hy,t=r(o,s),Ao){i=0;do{if(Ao=!1,Qo=0,25<=i)throw Error(R(301));i+=1,we=xe=null,e.updateQueue=null,Ys.current=py,t=r(o,s)}while(Ao)}if(Ys.current=Ci,e=xe!==null&&xe.next!==null,ir=0,we=xe=ce=null,Si=!1,e)throw Error(R(300));return t}function zc(){var t=Qo!==0;return Qo=0,t}function Nt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return we===null?ce.memoizedState=we=t:we=we.next=t,we}function at(){if(xe===null){var t=ce.alternate;t=t!==null?t.memoizedState:null}else t=xe.next;var e=we===null?ce.memoizedState:we.next;if(e!==null)we=e,xe=t;else{if(t===null)throw Error(R(310));xe=t,t={memoizedState:xe.memoizedState,baseState:xe.baseState,baseQueue:xe.baseQueue,queue:xe.queue,next:null},we===null?ce.memoizedState=we=t:we=we.next=t}return we}function Yo(t,e){return typeof e=="function"?e(t):e}function Dl(t){var e=at(),r=e.queue;if(r===null)throw Error(R(311));r.lastRenderedReducer=t;var o=xe,s=o.baseQueue,i=r.pending;if(i!==null){if(s!==null){var l=s.next;s.next=i.next,i.next=l}o.baseQueue=s=i,r.pending=null}if(s!==null){i=s.next,o=o.baseState;var a=l=null,c=null,d=i;do{var u=d.lane;if((ir&u)===u)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),o=d.hasEagerState?d.eagerState:t(o,d.action);else{var p={lane:u,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(a=c=p,l=o):c=c.next=p,ce.lanes|=u,lr|=u}d=d.next}while(d!==null&&d!==i);c===null?l=o:c.next=a,bt(o,e.memoizedState)||(We=!0),e.memoizedState=o,e.baseState=l,e.baseQueue=c,r.lastRenderedState=o}if(t=r.interleaved,t!==null){s=t;do i=s.lane,ce.lanes|=i,lr|=i,s=s.next;while(s!==t)}else s===null&&(r.lanes=0);return[e.memoizedState,r.dispatch]}function Bl(t){var e=at(),r=e.queue;if(r===null)throw Error(R(311));r.lastRenderedReducer=t;var o=r.dispatch,s=r.pending,i=e.memoizedState;if(s!==null){r.pending=null;var l=s=s.next;do i=t(i,l.action),l=l.next;while(l!==s);bt(i,e.memoizedState)||(We=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),r.lastRenderedState=i}return[i,o]}function vf(){}function yf(t,e){var r=ce,o=at(),s=e(),i=!bt(o.memoizedState,s);if(i&&(o.memoizedState=s,We=!0),o=o.queue,$c(bf.bind(null,r,o,t),[t]),o.getSnapshot!==e||i||we!==null&&we.memoizedState.tag&1){if(r.flags|=2048,Xo(9,wf.bind(null,r,o,s,e),void 0,null),be===null)throw Error(R(349));ir&30||jf(r,e,s)}return s}function jf(t,e,r){t.flags|=16384,t={getSnapshot:e,value:r},e=ce.updateQueue,e===null?(e={lastEffect:null,stores:null},ce.updateQueue=e,e.stores=[t]):(r=e.stores,r===null?e.stores=[t]:r.push(t))}function wf(t,e,r,o){e.value=r,e.getSnapshot=o,kf(e)&&Sf(t)}function bf(t,e,r){return r(function(){kf(e)&&Sf(t)})}function kf(t){var e=t.getSnapshot;t=t.value;try{var r=e();return!bt(t,r)}catch{return!0}}function Sf(t){var e=Kt(t,1);e!==null&&wt(e,t,1,-1)}function pu(t){var e=Nt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Yo,lastRenderedState:t},e.queue=t,t=t.dispatch=dy.bind(null,ce,t),[e.memoizedState,t]}function Xo(t,e,r,o){return t={tag:t,create:e,destroy:r,deps:o,next:null},e=ce.updateQueue,e===null?(e={lastEffect:null,stores:null},ce.updateQueue=e,e.lastEffect=t.next=t):(r=e.lastEffect,r===null?e.lastEffect=t.next=t:(o=r.next,r.next=t,t.next=o,e.lastEffect=t)),t}function Cf(){return at().memoizedState}function Xs(t,e,r,o){var s=Nt();ce.flags|=t,s.memoizedState=Xo(1|e,r,void 0,o===void 0?null:o)}function Vi(t,e,r,o){var s=at();o=o===void 0?null:o;var i=void 0;if(xe!==null){var l=xe.memoizedState;if(i=l.destroy,o!==null&&Bc(o,l.deps)){s.memoizedState=Xo(e,r,i,o);return}}ce.flags|=t,s.memoizedState=Xo(1|e,r,i,o)}function fu(t,e){return Xs(8390656,8,t,e)}function $c(t,e){return Vi(2048,8,t,e)}function Tf(t,e){return Vi(4,2,t,e)}function Nf(t,e){return Vi(4,4,t,e)}function Ef(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Pf(t,e,r){return r=r!=null?r.concat([t]):null,Vi(4,4,Ef.bind(null,e,t),r)}function Wc(){}function Rf(t,e){var r=at();e=e===void 0?null:e;var o=r.memoizedState;return o!==null&&e!==null&&Bc(e,o[1])?o[0]:(r.memoizedState=[t,e],t)}function Mf(t,e){var r=at();e=e===void 0?null:e;var o=r.memoizedState;return o!==null&&e!==null&&Bc(e,o[1])?o[0]:(t=t(),r.memoizedState=[t,e],t)}function Af(t,e,r){return ir&21?(bt(r,e)||(r=Lp(),ce.lanes|=r,lr|=r,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,We=!0),t.memoizedState=r)}function ay(t,e){var r=ee;ee=r!==0&&4>r?r:4,t(!0);var o=Ll.transition;Ll.transition={};try{t(!1),e()}finally{ee=r,Ll.transition=o}}function _f(){return at().memoizedState}function cy(t,e,r){var o=Pn(t);if(r={lane:o,action:r,hasEagerState:!1,eagerState:null,next:null},Of(t))If(e,r);else if(r=mf(t,e,r,o),r!==null){var s=Le();wt(r,t,o,s),Lf(r,e,o)}}function dy(t,e,r){var o=Pn(t),s={lane:o,action:r,hasEagerState:!1,eagerState:null,next:null};if(Of(t))If(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var l=e.lastRenderedState,a=i(l,r);if(s.hasEagerState=!0,s.eagerState=a,bt(a,l)){var c=e.interleaved;c===null?(s.next=s,_c(e)):(s.next=c.next,c.next=s),e.interleaved=s;return}}catch{}finally{}r=mf(t,e,s,o),r!==null&&(s=Le(),wt(r,t,o,s),Lf(r,e,o))}}function Of(t){var e=t.alternate;return t===ce||e!==null&&e===ce}function If(t,e){Ao=Si=!0;var r=t.pending;r===null?e.next=e:(e.next=r.next,r.next=e),t.pending=e}function Lf(t,e,r){if(r&4194240){var o=e.lanes;o&=t.pendingLanes,r|=o,e.lanes=r,yc(t,r)}}var Ci={readContext:lt,useCallback:Ee,useContext:Ee,useEffect:Ee,useImperativeHandle:Ee,useInsertionEffect:Ee,useLayoutEffect:Ee,useMemo:Ee,useReducer:Ee,useRef:Ee,useState:Ee,useDebugValue:Ee,useDeferredValue:Ee,useTransition:Ee,useMutableSource:Ee,useSyncExternalStore:Ee,useId:Ee,unstable_isNewReconciler:!1},uy={readContext:lt,useCallback:function(t,e){return Nt().memoizedState=[t,e===void 0?null:e],t},useContext:lt,useEffect:fu,useImperativeHandle:function(t,e,r){return r=r!=null?r.concat([t]):null,Xs(4194308,4,Ef.bind(null,e,t),r)},useLayoutEffect:function(t,e){return Xs(4194308,4,t,e)},useInsertionEffect:function(t,e){return Xs(4,2,t,e)},useMemo:function(t,e){var r=Nt();return e=e===void 0?null:e,t=t(),r.memoizedState=[t,e],t},useReducer:function(t,e,r){var o=Nt();return e=r!==void 0?r(e):e,o.memoizedState=o.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},o.queue=t,t=t.dispatch=cy.bind(null,ce,t),[o.memoizedState,t]},useRef:function(t){var e=Nt();return t={current:t},e.memoizedState=t},useState:pu,useDebugValue:Wc,useDeferredValue:function(t){return Nt().memoizedState=t},useTransition:function(){var t=pu(!1),e=t[0];return t=ay.bind(null,t[1]),Nt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,r){var o=ce,s=Nt();if(le){if(r===void 0)throw Error(R(407));r=r()}else{if(r=e(),be===null)throw Error(R(349));ir&30||jf(o,e,r)}s.memoizedState=r;var i={value:r,getSnapshot:e};return s.queue=i,fu(bf.bind(null,o,i,t),[t]),o.flags|=2048,Xo(9,wf.bind(null,o,i,r,e),void 0,null),r},useId:function(){var t=Nt(),e=be.identifierPrefix;if(le){var r=Ut,o=Ht;r=(o&~(1<<32-jt(o)-1)).toString(32)+r,e=":"+e+"R"+r,r=Qo++,0<r&&(e+="H"+r.toString(32)),e+=":"}else r=ly++,e=":"+e+"r"+r.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},hy={readContext:lt,useCallback:Rf,useContext:lt,useEffect:$c,useImperativeHandle:Pf,useInsertionEffect:Tf,useLayoutEffect:Nf,useMemo:Mf,useReducer:Dl,useRef:Cf,useState:function(){return Dl(Yo)},useDebugValue:Wc,useDeferredValue:function(t){var e=at();return Af(e,xe.memoizedState,t)},useTransition:function(){var t=Dl(Yo)[0],e=at().memoizedState;return[t,e]},useMutableSource:vf,useSyncExternalStore:yf,useId:_f,unstable_isNewReconciler:!1},py={readContext:lt,useCallback:Rf,useContext:lt,useEffect:$c,useImperativeHandle:Pf,useInsertionEffect:Tf,useLayoutEffect:Nf,useMemo:Mf,useReducer:Bl,useRef:Cf,useState:function(){return Bl(Yo)},useDebugValue:Wc,useDeferredValue:function(t){var e=at();return xe===null?e.memoizedState=t:Af(e,xe.memoizedState,t)},useTransition:function(){var t=Bl(Yo)[0],e=at().memoizedState;return[t,e]},useMutableSource:vf,useSyncExternalStore:yf,useId:_f,unstable_isNewReconciler:!1};function ft(t,e){if(t&&t.defaultProps){e=de({},e),t=t.defaultProps;for(var r in t)e[r]===void 0&&(e[r]=t[r]);return e}return e}function Ta(t,e,r,o){e=t.memoizedState,r=r(o,e),r=r==null?e:de({},e,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var Ji={isMounted:function(t){return(t=t._reactInternals)?ur(t)===t:!1},enqueueSetState:function(t,e,r){t=t._reactInternals;var o=Le(),s=Pn(t),i=Vt(o,s);i.payload=e,r!=null&&(i.callback=r),e=Nn(t,i,s),e!==null&&(wt(e,t,s,o),Qs(e,t,s))},enqueueReplaceState:function(t,e,r){t=t._reactInternals;var o=Le(),s=Pn(t),i=Vt(o,s);i.tag=1,i.payload=e,r!=null&&(i.callback=r),e=Nn(t,i,s),e!==null&&(wt(e,t,s,o),Qs(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var r=Le(),o=Pn(t),s=Vt(r,o);s.tag=2,e!=null&&(s.callback=e),e=Nn(t,s,o),e!==null&&(wt(e,t,o,r),Qs(e,t,o))}};function mu(t,e,r,o,s,i,l){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,i,l):e.prototype&&e.prototype.isPureReactComponent?!Uo(r,o)||!Uo(s,i):!0}function Df(t,e,r){var o=!1,s=_n,i=e.contextType;return typeof i=="object"&&i!==null?i=lt(i):(s=Ue(e)?or:Me.current,o=e.contextTypes,i=(o=o!=null)?Gr(t,s):_n),e=new e(r,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ji,t.stateNode=e,e._reactInternals=t,o&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function gu(t,e,r,o){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(r,o),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(r,o),e.state!==t&&Ji.enqueueReplaceState(e,e.state,null)}function Na(t,e,r,o){var s=t.stateNode;s.props=r,s.state=t.memoizedState,s.refs={},Oc(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=lt(i):(i=Ue(e)?or:Me.current,s.context=Gr(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(Ta(t,e,i,r),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&Ji.enqueueReplaceState(s,s.state,null),bi(t,r,s,o),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function Zr(t,e){try{var r="",o=e;do r+=$x(o),o=o.return;while(o);var s=r}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function Fl(t,e,r){return{value:t,source:null,stack:r??null,digest:e??null}}function Ea(t,e){try{console.error(e.value)}catch(r){setTimeout(function(){throw r})}}var fy=typeof WeakMap=="function"?WeakMap:Map;function Bf(t,e,r){r=Vt(-1,r),r.tag=3,r.payload={element:null};var o=e.value;return r.callback=function(){Ni||(Ni=!0,Ba=o),Ea(t,e)},r}function Ff(t,e,r){r=Vt(-1,r),r.tag=3;var o=t.type.getDerivedStateFromError;if(typeof o=="function"){var s=e.value;r.payload=function(){return o(s)},r.callback=function(){Ea(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(r.callback=function(){Ea(t,e),typeof o!="function"&&(En===null?En=new Set([this]):En.add(this));var l=e.stack;this.componentDidCatch(e.value,{componentStack:l!==null?l:""})}),r}function xu(t,e,r){var o=t.pingCache;if(o===null){o=t.pingCache=new fy;var s=new Set;o.set(e,s)}else s=o.get(e),s===void 0&&(s=new Set,o.set(e,s));s.has(r)||(s.add(r),t=Ey.bind(null,t,e,r),e.then(t,t))}function vu(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function yu(t,e,r,o,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(e=Vt(-1,1),e.tag=2,Nn(r,e,1))),r.lanes|=1),t)}var my=Xt.ReactCurrentOwner,We=!1;function Oe(t,e,r,o){e.child=t===null?ff(e,null,r,o):Yr(e,t.child,r,o)}function ju(t,e,r,o,s){r=r.render;var i=e.ref;return Lr(e,s),o=Fc(t,e,r,o,i,s),r=zc(),t!==null&&!We?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Gt(t,e,s)):(le&&r&&Nc(e),e.flags|=1,Oe(t,e,o,s),e.child)}function wu(t,e,r,o,s){if(t===null){var i=r.type;return typeof i=="function"&&!Qc(i)&&i.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(e.tag=15,e.type=i,zf(t,e,i,o,s)):(t=ni(r.type,null,o,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var l=i.memoizedProps;if(r=r.compare,r=r!==null?r:Uo,r(l,o)&&t.ref===e.ref)return Gt(t,e,s)}return e.flags|=1,t=Rn(i,o),t.ref=e.ref,t.return=e,e.child=t}function zf(t,e,r,o,s){if(t!==null){var i=t.memoizedProps;if(Uo(i,o)&&t.ref===e.ref)if(We=!1,e.pendingProps=o=i,(t.lanes&s)!==0)t.flags&131072&&(We=!0);else return e.lanes=t.lanes,Gt(t,e,s)}return Pa(t,e,r,o,s)}function $f(t,e,r){var o=e.pendingProps,s=o.children,i=t!==null?t.memoizedState:null;if(o.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ne(Mr,qe),qe|=r;else{if(!(r&1073741824))return t=i!==null?i.baseLanes|r:r,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ne(Mr,qe),qe|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=i!==null?i.baseLanes:r,ne(Mr,qe),qe|=o}else i!==null?(o=i.baseLanes|r,e.memoizedState=null):o=r,ne(Mr,qe),qe|=o;return Oe(t,e,s,r),e.child}function Wf(t,e){var r=e.ref;(t===null&&r!==null||t!==null&&t.ref!==r)&&(e.flags|=512,e.flags|=2097152)}function Pa(t,e,r,o,s){var i=Ue(r)?or:Me.current;return i=Gr(e,i),Lr(e,s),r=Fc(t,e,r,o,i,s),o=zc(),t!==null&&!We?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Gt(t,e,s)):(le&&o&&Nc(e),e.flags|=1,Oe(t,e,r,s),e.child)}function bu(t,e,r,o,s){if(Ue(r)){var i=!0;xi(e)}else i=!1;if(Lr(e,s),e.stateNode===null)Zs(t,e),Df(e,r,o),Na(e,r,o,s),o=!0;else if(t===null){var l=e.stateNode,a=e.memoizedProps;l.props=a;var c=l.context,d=r.contextType;typeof d=="object"&&d!==null?d=lt(d):(d=Ue(r)?or:Me.current,d=Gr(e,d));var u=r.getDerivedStateFromProps,p=typeof u=="function"||typeof l.getSnapshotBeforeUpdate=="function";p||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==o||c!==d)&&gu(e,l,o,d),un=!1;var g=e.memoizedState;l.state=g,bi(e,o,l,s),c=e.memoizedState,a!==o||g!==c||He.current||un?(typeof u=="function"&&(Ta(e,r,u,o),c=e.memoizedState),(a=un||mu(e,r,a,o,g,c,d))?(p||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(e.flags|=4194308)):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=o,e.memoizedState=c),l.props=o,l.state=c,l.context=d,o=a):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),o=!1)}else{l=e.stateNode,gf(t,e),a=e.memoizedProps,d=e.type===e.elementType?a:ft(e.type,a),l.props=d,p=e.pendingProps,g=l.context,c=r.contextType,typeof c=="object"&&c!==null?c=lt(c):(c=Ue(r)?or:Me.current,c=Gr(e,c));var h=r.getDerivedStateFromProps;(u=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==p||g!==c)&&gu(e,l,o,c),un=!1,g=e.memoizedState,l.state=g,bi(e,o,l,s);var b=e.memoizedState;a!==p||g!==b||He.current||un?(typeof h=="function"&&(Ta(e,r,h,o),b=e.memoizedState),(d=un||mu(e,r,d,o,g,b,c)||!1)?(u||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(o,b,c),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(o,b,c)),typeof l.componentDidUpdate=="function"&&(e.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=o,e.memoizedState=b),l.props=o,l.state=b,l.context=c,o=d):(typeof l.componentDidUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),o=!1)}return Ra(t,e,r,o,i,s)}function Ra(t,e,r,o,s,i){Wf(t,e);var l=(e.flags&128)!==0;if(!o&&!l)return s&&lu(e,r,!1),Gt(t,e,i);o=e.stateNode,my.current=e;var a=l&&typeof r.getDerivedStateFromError!="function"?null:o.render();return e.flags|=1,t!==null&&l?(e.child=Yr(e,t.child,null,i),e.child=Yr(e,null,a,i)):Oe(t,e,a,i),e.memoizedState=o.state,s&&lu(e,r,!0),e.child}function Hf(t){var e=t.stateNode;e.pendingContext?iu(t,e.pendingContext,e.pendingContext!==e.context):e.context&&iu(t,e.context,!1),Ic(t,e.containerInfo)}function ku(t,e,r,o,s){return Qr(),Pc(s),e.flags|=256,Oe(t,e,r,o),e.child}var Ma={dehydrated:null,treeContext:null,retryLane:0};function Aa(t){return{baseLanes:t,cachePool:null,transitions:null}}function Uf(t,e,r){var o=e.pendingProps,s=ae.current,i=!1,l=(e.flags&128)!==0,a;if((a=l)||(a=t!==null&&t.memoizedState===null?!1:(s&2)!==0),a?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),ne(ae,s&1),t===null)return Sa(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(l=o.children,t=o.fallback,i?(o=e.mode,i=e.child,l={mode:"hidden",children:l},!(o&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=Gi(l,o,0,null),t=rr(t,o,r,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=Aa(r),e.memoizedState=Ma,t):Hc(e,l));if(s=t.memoizedState,s!==null&&(a=s.dehydrated,a!==null))return gy(t,e,l,o,a,s,r);if(i){i=o.fallback,l=e.mode,s=t.child,a=s.sibling;var c={mode:"hidden",children:o.children};return!(l&1)&&e.child!==s?(o=e.child,o.childLanes=0,o.pendingProps=c,e.deletions=null):(o=Rn(s,c),o.subtreeFlags=s.subtreeFlags&14680064),a!==null?i=Rn(a,i):(i=rr(i,l,r,null),i.flags|=2),i.return=e,o.return=e,o.sibling=i,e.child=o,o=i,i=e.child,l=t.child.memoizedState,l=l===null?Aa(r):{baseLanes:l.baseLanes|r,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=t.childLanes&~r,e.memoizedState=Ma,o}return i=t.child,t=i.sibling,o=Rn(i,{mode:"visible",children:o.children}),!(e.mode&1)&&(o.lanes=r),o.return=e,o.sibling=null,t!==null&&(r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)),e.child=o,e.memoizedState=null,o}function Hc(t,e){return e=Gi({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ls(t,e,r,o){return o!==null&&Pc(o),Yr(e,t.child,null,r),t=Hc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function gy(t,e,r,o,s,i,l){if(r)return e.flags&256?(e.flags&=-257,o=Fl(Error(R(422))),Ls(t,e,l,o)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=o.fallback,s=e.mode,o=Gi({mode:"visible",children:o.children},s,0,null),i=rr(i,s,l,null),i.flags|=2,o.return=e,i.return=e,o.sibling=i,e.child=o,e.mode&1&&Yr(e,t.child,null,l),e.child.memoizedState=Aa(l),e.memoizedState=Ma,i);if(!(e.mode&1))return Ls(t,e,l,null);if(s.data==="$!"){if(o=s.nextSibling&&s.nextSibling.dataset,o)var a=o.dgst;return o=a,i=Error(R(419)),o=Fl(i,o,void 0),Ls(t,e,l,o)}if(a=(l&t.childLanes)!==0,We||a){if(o=be,o!==null){switch(l&-l){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(o.suspendedLanes|l)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,Kt(t,s),wt(o,t,s,-1))}return Gc(),o=Fl(Error(R(421))),Ls(t,e,l,o)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=Py.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,Ge=Tn(s.nextSibling),Qe=e,le=!0,yt=null,t!==null&&(rt[ot++]=Ht,rt[ot++]=Ut,rt[ot++]=sr,Ht=t.id,Ut=t.overflow,sr=e),e=Hc(e,o.children),e.flags|=4096,e)}function Su(t,e,r){t.lanes|=e;var o=t.alternate;o!==null&&(o.lanes|=e),Ca(t.return,e,r)}function zl(t,e,r,o,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:o,tail:r,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=o,i.tail=r,i.tailMode=s)}function Vf(t,e,r){var o=e.pendingProps,s=o.revealOrder,i=o.tail;if(Oe(t,e,o.children,r),o=ae.current,o&2)o=o&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Su(t,r,e);else if(t.tag===19)Su(t,r,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}o&=1}if(ne(ae,o),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(r=e.child,s=null;r!==null;)t=r.alternate,t!==null&&ki(t)===null&&(s=r),r=r.sibling;r=s,r===null?(s=e.child,e.child=null):(s=r.sibling,r.sibling=null),zl(e,!1,s,r,i);break;case"backwards":for(r=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&ki(t)===null){e.child=s;break}t=s.sibling,s.sibling=r,r=s,s=t}zl(e,!0,r,null,i);break;case"together":zl(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Zs(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Gt(t,e,r){if(t!==null&&(e.dependencies=t.dependencies),lr|=e.lanes,!(r&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(R(153));if(e.child!==null){for(t=e.child,r=Rn(t,t.pendingProps),e.child=r,r.return=e;t.sibling!==null;)t=t.sibling,r=r.sibling=Rn(t,t.pendingProps),r.return=e;r.sibling=null}return e.child}function xy(t,e,r){switch(e.tag){case 3:Hf(e),Qr();break;case 5:xf(e);break;case 1:Ue(e.type)&&xi(e);break;case 4:Ic(e,e.stateNode.containerInfo);break;case 10:var o=e.type._context,s=e.memoizedProps.value;ne(ji,o._currentValue),o._currentValue=s;break;case 13:if(o=e.memoizedState,o!==null)return o.dehydrated!==null?(ne(ae,ae.current&1),e.flags|=128,null):r&e.child.childLanes?Uf(t,e,r):(ne(ae,ae.current&1),t=Gt(t,e,r),t!==null?t.sibling:null);ne(ae,ae.current&1);break;case 19:if(o=(r&e.childLanes)!==0,t.flags&128){if(o)return Vf(t,e,r);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),ne(ae,ae.current),o)break;return null;case 22:case 23:return e.lanes=0,$f(t,e,r)}return Gt(t,e,r)}var Jf,_a,qf,Kf;Jf=function(t,e){for(var r=e.child;r!==null;){if(r.tag===5||r.tag===6)t.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};_a=function(){};qf=function(t,e,r,o){var s=t.memoizedProps;if(s!==o){t=e.stateNode,Gn(Ot.current);var i=null;switch(r){case"input":s=ta(t,s),o=ta(t,o),i=[];break;case"select":s=de({},s,{value:void 0}),o=de({},o,{value:void 0}),i=[];break;case"textarea":s=oa(t,s),o=oa(t,o),i=[];break;default:typeof s.onClick!="function"&&typeof o.onClick=="function"&&(t.onclick=mi)}ia(r,o);var l;r=null;for(d in s)if(!o.hasOwnProperty(d)&&s.hasOwnProperty(d)&&s[d]!=null)if(d==="style"){var a=s[d];for(l in a)a.hasOwnProperty(l)&&(r||(r={}),r[l]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Do.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in o){var c=o[d];if(a=s!=null?s[d]:void 0,o.hasOwnProperty(d)&&c!==a&&(c!=null||a!=null))if(d==="style")if(a){for(l in a)!a.hasOwnProperty(l)||c&&c.hasOwnProperty(l)||(r||(r={}),r[l]="");for(l in c)c.hasOwnProperty(l)&&a[l]!==c[l]&&(r||(r={}),r[l]=c[l])}else r||(i||(i=[]),i.push(d,r)),r=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,a=a?a.__html:void 0,c!=null&&a!==c&&(i=i||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(i=i||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Do.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&oe("scroll",t),i||a===c||(i=[])):(i=i||[]).push(d,c))}r&&(i=i||[]).push("style",r);var d=i;(e.updateQueue=d)&&(e.flags|=4)}};Kf=function(t,e,r,o){r!==o&&(e.flags|=4)};function yo(t,e){if(!le)switch(t.tailMode){case"hidden":e=t.tail;for(var r=null;e!==null;)e.alternate!==null&&(r=e),e=e.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Pe(t){var e=t.alternate!==null&&t.alternate.child===t.child,r=0,o=0;if(e)for(var s=t.child;s!==null;)r|=s.lanes|s.childLanes,o|=s.subtreeFlags&14680064,o|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)r|=s.lanes|s.childLanes,o|=s.subtreeFlags,o|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=o,t.childLanes=r,e}function vy(t,e,r){var o=e.pendingProps;switch(Ec(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pe(e),null;case 1:return Ue(e.type)&&gi(),Pe(e),null;case 3:return o=e.stateNode,Xr(),se(He),se(Me),Dc(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(t===null||t.child===null)&&(Os(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,yt!==null&&($a(yt),yt=null))),_a(t,e),Pe(e),null;case 5:Lc(e);var s=Gn(Go.current);if(r=e.type,t!==null&&e.stateNode!=null)qf(t,e,r,o,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!o){if(e.stateNode===null)throw Error(R(166));return Pe(e),null}if(t=Gn(Ot.current),Os(e)){o=e.stateNode,r=e.type;var i=e.memoizedProps;switch(o[Mt]=e,o[qo]=i,t=(e.mode&1)!==0,r){case"dialog":oe("cancel",o),oe("close",o);break;case"iframe":case"object":case"embed":oe("load",o);break;case"video":case"audio":for(s=0;s<To.length;s++)oe(To[s],o);break;case"source":oe("error",o);break;case"img":case"image":case"link":oe("error",o),oe("load",o);break;case"details":oe("toggle",o);break;case"input":_d(o,i),oe("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!i.multiple},oe("invalid",o);break;case"textarea":Id(o,i),oe("invalid",o)}ia(r,i),s=null;for(var l in i)if(i.hasOwnProperty(l)){var a=i[l];l==="children"?typeof a=="string"?o.textContent!==a&&(i.suppressHydrationWarning!==!0&&_s(o.textContent,a,t),s=["children",a]):typeof a=="number"&&o.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&_s(o.textContent,a,t),s=["children",""+a]):Do.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&oe("scroll",o)}switch(r){case"input":Cs(o),Od(o,i,!0);break;case"textarea":Cs(o),Ld(o);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(o.onclick=mi)}o=s,e.updateQueue=o,o!==null&&(e.flags|=4)}else{l=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=wp(r)),t==="http://www.w3.org/1999/xhtml"?r==="script"?(t=l.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof o.is=="string"?t=l.createElement(r,{is:o.is}):(t=l.createElement(r),r==="select"&&(l=t,o.multiple?l.multiple=!0:o.size&&(l.size=o.size))):t=l.createElementNS(t,r),t[Mt]=e,t[qo]=o,Jf(t,e,!1,!1),e.stateNode=t;e:{switch(l=la(r,o),r){case"dialog":oe("cancel",t),oe("close",t),s=o;break;case"iframe":case"object":case"embed":oe("load",t),s=o;break;case"video":case"audio":for(s=0;s<To.length;s++)oe(To[s],t);s=o;break;case"source":oe("error",t),s=o;break;case"img":case"image":case"link":oe("error",t),oe("load",t),s=o;break;case"details":oe("toggle",t),s=o;break;case"input":_d(t,o),s=ta(t,o),oe("invalid",t);break;case"option":s=o;break;case"select":t._wrapperState={wasMultiple:!!o.multiple},s=de({},o,{value:void 0}),oe("invalid",t);break;case"textarea":Id(t,o),s=oa(t,o),oe("invalid",t);break;default:s=o}ia(r,s),a=s;for(i in a)if(a.hasOwnProperty(i)){var c=a[i];i==="style"?Sp(t,c):i==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&bp(t,c)):i==="children"?typeof c=="string"?(r!=="textarea"||c!=="")&&Bo(t,c):typeof c=="number"&&Bo(t,""+c):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Do.hasOwnProperty(i)?c!=null&&i==="onScroll"&&oe("scroll",t):c!=null&&pc(t,i,c,l))}switch(r){case"input":Cs(t),Od(t,o,!1);break;case"textarea":Cs(t),Ld(t);break;case"option":o.value!=null&&t.setAttribute("value",""+An(o.value));break;case"select":t.multiple=!!o.multiple,i=o.value,i!=null?Ar(t,!!o.multiple,i,!1):o.defaultValue!=null&&Ar(t,!!o.multiple,o.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=mi)}switch(r){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Pe(e),null;case 6:if(t&&e.stateNode!=null)Kf(t,e,t.memoizedProps,o);else{if(typeof o!="string"&&e.stateNode===null)throw Error(R(166));if(r=Gn(Go.current),Gn(Ot.current),Os(e)){if(o=e.stateNode,r=e.memoizedProps,o[Mt]=e,(i=o.nodeValue!==r)&&(t=Qe,t!==null))switch(t.tag){case 3:_s(o.nodeValue,r,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&_s(o.nodeValue,r,(t.mode&1)!==0)}i&&(e.flags|=4)}else o=(r.nodeType===9?r:r.ownerDocument).createTextNode(o),o[Mt]=e,e.stateNode=o}return Pe(e),null;case 13:if(se(ae),o=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(le&&Ge!==null&&e.mode&1&&!(e.flags&128))hf(),Qr(),e.flags|=98560,i=!1;else if(i=Os(e),o!==null&&o.dehydrated!==null){if(t===null){if(!i)throw Error(R(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(R(317));i[Mt]=e}else Qr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Pe(e),i=!1}else yt!==null&&($a(yt),yt=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=r,e):(o=o!==null,o!==(t!==null&&t.memoizedState!==null)&&o&&(e.child.flags|=8192,e.mode&1&&(t===null||ae.current&1?ye===0&&(ye=3):Gc())),e.updateQueue!==null&&(e.flags|=4),Pe(e),null);case 4:return Xr(),_a(t,e),t===null&&Vo(e.stateNode.containerInfo),Pe(e),null;case 10:return Ac(e.type._context),Pe(e),null;case 17:return Ue(e.type)&&gi(),Pe(e),null;case 19:if(se(ae),i=e.memoizedState,i===null)return Pe(e),null;if(o=(e.flags&128)!==0,l=i.rendering,l===null)if(o)yo(i,!1);else{if(ye!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(l=ki(t),l!==null){for(e.flags|=128,yo(i,!1),o=l.updateQueue,o!==null&&(e.updateQueue=o,e.flags|=4),e.subtreeFlags=0,o=r,r=e.child;r!==null;)i=r,t=o,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,t=l.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),r=r.sibling;return ne(ae,ae.current&1|2),e.child}t=t.sibling}i.tail!==null&&pe()>eo&&(e.flags|=128,o=!0,yo(i,!1),e.lanes=4194304)}else{if(!o)if(t=ki(l),t!==null){if(e.flags|=128,o=!0,r=t.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),yo(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!le)return Pe(e),null}else 2*pe()-i.renderingStartTime>eo&&r!==1073741824&&(e.flags|=128,o=!0,yo(i,!1),e.lanes=4194304);i.isBackwards?(l.sibling=e.child,e.child=l):(r=i.last,r!==null?r.sibling=l:e.child=l,i.last=l)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=pe(),e.sibling=null,r=ae.current,ne(ae,o?r&1|2:r&1),e):(Pe(e),null);case 22:case 23:return Kc(),o=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==o&&(e.flags|=8192),o&&e.mode&1?qe&1073741824&&(Pe(e),e.subtreeFlags&6&&(e.flags|=8192)):Pe(e),null;case 24:return null;case 25:return null}throw Error(R(156,e.tag))}function yy(t,e){switch(Ec(e),e.tag){case 1:return Ue(e.type)&&gi(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Xr(),se(He),se(Me),Dc(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Lc(e),null;case 13:if(se(ae),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(R(340));Qr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return se(ae),null;case 4:return Xr(),null;case 10:return Ac(e.type._context),null;case 22:case 23:return Kc(),null;case 24:return null;default:return null}}var Ds=!1,Re=!1,jy=typeof WeakSet=="function"?WeakSet:Set,I=null;function Rr(t,e){var r=t.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(o){he(t,e,o)}else r.current=null}function Oa(t,e,r){try{r()}catch(o){he(t,e,o)}}var Cu=!1;function wy(t,e){if(xa=hi,t=Xp(),Tc(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else e:{r=(r=t.ownerDocument)&&r.defaultView||window;var o=r.getSelection&&r.getSelection();if(o&&o.rangeCount!==0){r=o.anchorNode;var s=o.anchorOffset,i=o.focusNode;o=o.focusOffset;try{r.nodeType,i.nodeType}catch{r=null;break e}var l=0,a=-1,c=-1,d=0,u=0,p=t,g=null;t:for(;;){for(var h;p!==r||s!==0&&p.nodeType!==3||(a=l+s),p!==i||o!==0&&p.nodeType!==3||(c=l+o),p.nodeType===3&&(l+=p.nodeValue.length),(h=p.firstChild)!==null;)g=p,p=h;for(;;){if(p===t)break t;if(g===r&&++d===s&&(a=l),g===i&&++u===o&&(c=l),(h=p.nextSibling)!==null)break;p=g,g=p.parentNode}p=h}r=a===-1||c===-1?null:{start:a,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(va={focusedElem:t,selectionRange:r},hi=!1,I=e;I!==null;)if(e=I,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,I=t;else for(;I!==null;){e=I;try{var b=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var v=b.memoizedProps,j=b.memoizedState,m=e.stateNode,f=m.getSnapshotBeforeUpdate(e.elementType===e.type?v:ft(e.type,v),j);m.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(R(163))}}catch(w){he(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,I=t;break}I=e.return}return b=Cu,Cu=!1,b}function _o(t,e,r){var o=e.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var s=o=o.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&Oa(e,r,i)}s=s.next}while(s!==o)}}function qi(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var r=e=e.next;do{if((r.tag&t)===t){var o=r.create;r.destroy=o()}r=r.next}while(r!==e)}}function Ia(t){var e=t.ref;if(e!==null){var r=t.stateNode;switch(t.tag){case 5:t=r;break;default:t=r}typeof e=="function"?e(t):e.current=t}}function Gf(t){var e=t.alternate;e!==null&&(t.alternate=null,Gf(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Mt],delete e[qo],delete e[wa],delete e[ry],delete e[oy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Qf(t){return t.tag===5||t.tag===3||t.tag===4}function Tu(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Qf(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function La(t,e,r){var o=t.tag;if(o===5||o===6)t=t.stateNode,e?r.nodeType===8?r.parentNode.insertBefore(t,e):r.insertBefore(t,e):(r.nodeType===8?(e=r.parentNode,e.insertBefore(t,r)):(e=r,e.appendChild(t)),r=r._reactRootContainer,r!=null||e.onclick!==null||(e.onclick=mi));else if(o!==4&&(t=t.child,t!==null))for(La(t,e,r),t=t.sibling;t!==null;)La(t,e,r),t=t.sibling}function Da(t,e,r){var o=t.tag;if(o===5||o===6)t=t.stateNode,e?r.insertBefore(t,e):r.appendChild(t);else if(o!==4&&(t=t.child,t!==null))for(Da(t,e,r),t=t.sibling;t!==null;)Da(t,e,r),t=t.sibling}var ke=null,vt=!1;function sn(t,e,r){for(r=r.child;r!==null;)Yf(t,e,r),r=r.sibling}function Yf(t,e,r){if(_t&&typeof _t.onCommitFiberUnmount=="function")try{_t.onCommitFiberUnmount(Fi,r)}catch{}switch(r.tag){case 5:Re||Rr(r,e);case 6:var o=ke,s=vt;ke=null,sn(t,e,r),ke=o,vt=s,ke!==null&&(vt?(t=ke,r=r.stateNode,t.nodeType===8?t.parentNode.removeChild(r):t.removeChild(r)):ke.removeChild(r.stateNode));break;case 18:ke!==null&&(vt?(t=ke,r=r.stateNode,t.nodeType===8?_l(t.parentNode,r):t.nodeType===1&&_l(t,r),Wo(t)):_l(ke,r.stateNode));break;case 4:o=ke,s=vt,ke=r.stateNode.containerInfo,vt=!0,sn(t,e,r),ke=o,vt=s;break;case 0:case 11:case 14:case 15:if(!Re&&(o=r.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){s=o=o.next;do{var i=s,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&Oa(r,e,l),s=s.next}while(s!==o)}sn(t,e,r);break;case 1:if(!Re&&(Rr(r,e),o=r.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=r.memoizedProps,o.state=r.memoizedState,o.componentWillUnmount()}catch(a){he(r,e,a)}sn(t,e,r);break;case 21:sn(t,e,r);break;case 22:r.mode&1?(Re=(o=Re)||r.memoizedState!==null,sn(t,e,r),Re=o):sn(t,e,r);break;default:sn(t,e,r)}}function Nu(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var r=t.stateNode;r===null&&(r=t.stateNode=new jy),e.forEach(function(o){var s=Ry.bind(null,t,o);r.has(o)||(r.add(o),o.then(s,s))})}}function ht(t,e){var r=e.deletions;if(r!==null)for(var o=0;o<r.length;o++){var s=r[o];try{var i=t,l=e,a=l;e:for(;a!==null;){switch(a.tag){case 5:ke=a.stateNode,vt=!1;break e;case 3:ke=a.stateNode.containerInfo,vt=!0;break e;case 4:ke=a.stateNode.containerInfo,vt=!0;break e}a=a.return}if(ke===null)throw Error(R(160));Yf(i,l,s),ke=null,vt=!1;var c=s.alternate;c!==null&&(c.return=null),s.return=null}catch(d){he(s,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Xf(e,t),e=e.sibling}function Xf(t,e){var r=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ht(e,t),Tt(t),o&4){try{_o(3,t,t.return),qi(3,t)}catch(v){he(t,t.return,v)}try{_o(5,t,t.return)}catch(v){he(t,t.return,v)}}break;case 1:ht(e,t),Tt(t),o&512&&r!==null&&Rr(r,r.return);break;case 5:if(ht(e,t),Tt(t),o&512&&r!==null&&Rr(r,r.return),t.flags&32){var s=t.stateNode;try{Bo(s,"")}catch(v){he(t,t.return,v)}}if(o&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,l=r!==null?r.memoizedProps:i,a=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&yp(s,i),la(a,l);var d=la(a,i);for(l=0;l<c.length;l+=2){var u=c[l],p=c[l+1];u==="style"?Sp(s,p):u==="dangerouslySetInnerHTML"?bp(s,p):u==="children"?Bo(s,p):pc(s,u,p,d)}switch(a){case"input":na(s,i);break;case"textarea":jp(s,i);break;case"select":var g=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var h=i.value;h!=null?Ar(s,!!i.multiple,h,!1):g!==!!i.multiple&&(i.defaultValue!=null?Ar(s,!!i.multiple,i.defaultValue,!0):Ar(s,!!i.multiple,i.multiple?[]:"",!1))}s[qo]=i}catch(v){he(t,t.return,v)}}break;case 6:if(ht(e,t),Tt(t),o&4){if(t.stateNode===null)throw Error(R(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(v){he(t,t.return,v)}}break;case 3:if(ht(e,t),Tt(t),o&4&&r!==null&&r.memoizedState.isDehydrated)try{Wo(e.containerInfo)}catch(v){he(t,t.return,v)}break;case 4:ht(e,t),Tt(t);break;case 13:ht(e,t),Tt(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(Jc=pe())),o&4&&Nu(t);break;case 22:if(u=r!==null&&r.memoizedState!==null,t.mode&1?(Re=(d=Re)||u,ht(e,t),Re=d):ht(e,t),Tt(t),o&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!u&&t.mode&1)for(I=t,u=t.child;u!==null;){for(p=I=u;I!==null;){switch(g=I,h=g.child,g.tag){case 0:case 11:case 14:case 15:_o(4,g,g.return);break;case 1:Rr(g,g.return);var b=g.stateNode;if(typeof b.componentWillUnmount=="function"){o=g,r=g.return;try{e=o,b.props=e.memoizedProps,b.state=e.memoizedState,b.componentWillUnmount()}catch(v){he(o,r,v)}}break;case 5:Rr(g,g.return);break;case 22:if(g.memoizedState!==null){Pu(p);continue}}h!==null?(h.return=g,I=h):Pu(p)}u=u.sibling}e:for(u=null,p=t;;){if(p.tag===5){if(u===null){u=p;try{s=p.stateNode,d?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=p.stateNode,c=p.memoizedProps.style,l=c!=null&&c.hasOwnProperty("display")?c.display:null,a.style.display=kp("display",l))}catch(v){he(t,t.return,v)}}}else if(p.tag===6){if(u===null)try{p.stateNode.nodeValue=d?"":p.memoizedProps}catch(v){he(t,t.return,v)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;u===p&&(u=null),p=p.return}u===p&&(u=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:ht(e,t),Tt(t),o&4&&Nu(t);break;case 21:break;default:ht(e,t),Tt(t)}}function Tt(t){var e=t.flags;if(e&2){try{e:{for(var r=t.return;r!==null;){if(Qf(r)){var o=r;break e}r=r.return}throw Error(R(160))}switch(o.tag){case 5:var s=o.stateNode;o.flags&32&&(Bo(s,""),o.flags&=-33);var i=Tu(t);Da(t,i,s);break;case 3:case 4:var l=o.stateNode.containerInfo,a=Tu(t);La(t,a,l);break;default:throw Error(R(161))}}catch(c){he(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function by(t,e,r){I=t,Zf(t)}function Zf(t,e,r){for(var o=(t.mode&1)!==0;I!==null;){var s=I,i=s.child;if(s.tag===22&&o){var l=s.memoizedState!==null||Ds;if(!l){var a=s.alternate,c=a!==null&&a.memoizedState!==null||Re;a=Ds;var d=Re;if(Ds=l,(Re=c)&&!d)for(I=s;I!==null;)l=I,c=l.child,l.tag===22&&l.memoizedState!==null?Ru(s):c!==null?(c.return=l,I=c):Ru(s);for(;i!==null;)I=i,Zf(i),i=i.sibling;I=s,Ds=a,Re=d}Eu(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,I=i):Eu(t)}}function Eu(t){for(;I!==null;){var e=I;if(e.flags&8772){var r=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Re||qi(5,e);break;case 1:var o=e.stateNode;if(e.flags&4&&!Re)if(r===null)o.componentDidMount();else{var s=e.elementType===e.type?r.memoizedProps:ft(e.type,r.memoizedProps);o.componentDidUpdate(s,r.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&hu(e,i,o);break;case 3:var l=e.updateQueue;if(l!==null){if(r=null,e.child!==null)switch(e.child.tag){case 5:r=e.child.stateNode;break;case 1:r=e.child.stateNode}hu(e,l,r)}break;case 5:var a=e.stateNode;if(r===null&&e.flags&4){r=a;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&r.focus();break;case"img":c.src&&(r.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var u=d.memoizedState;if(u!==null){var p=u.dehydrated;p!==null&&Wo(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(R(163))}Re||e.flags&512&&Ia(e)}catch(g){he(e,e.return,g)}}if(e===t){I=null;break}if(r=e.sibling,r!==null){r.return=e.return,I=r;break}I=e.return}}function Pu(t){for(;I!==null;){var e=I;if(e===t){I=null;break}var r=e.sibling;if(r!==null){r.return=e.return,I=r;break}I=e.return}}function Ru(t){for(;I!==null;){var e=I;try{switch(e.tag){case 0:case 11:case 15:var r=e.return;try{qi(4,e)}catch(c){he(e,r,c)}break;case 1:var o=e.stateNode;if(typeof o.componentDidMount=="function"){var s=e.return;try{o.componentDidMount()}catch(c){he(e,s,c)}}var i=e.return;try{Ia(e)}catch(c){he(e,i,c)}break;case 5:var l=e.return;try{Ia(e)}catch(c){he(e,l,c)}}}catch(c){he(e,e.return,c)}if(e===t){I=null;break}var a=e.sibling;if(a!==null){a.return=e.return,I=a;break}I=e.return}}var ky=Math.ceil,Ti=Xt.ReactCurrentDispatcher,Uc=Xt.ReactCurrentOwner,it=Xt.ReactCurrentBatchConfig,X=0,be=null,me=null,Se=0,qe=0,Mr=Fn(0),ye=0,Zo=null,lr=0,Ki=0,Vc=0,Oo=null,$e=null,Jc=0,eo=1/0,zt=null,Ni=!1,Ba=null,En=null,Bs=!1,wn=null,Ei=0,Io=0,Fa=null,ei=-1,ti=0;function Le(){return X&6?pe():ei!==-1?ei:ei=pe()}function Pn(t){return t.mode&1?X&2&&Se!==0?Se&-Se:iy.transition!==null?(ti===0&&(ti=Lp()),ti):(t=ee,t!==0||(t=window.event,t=t===void 0?16:Hp(t.type)),t):1}function wt(t,e,r,o){if(50<Io)throw Io=0,Fa=null,Error(R(185));ds(t,r,o),(!(X&2)||t!==be)&&(t===be&&(!(X&2)&&(Ki|=r),ye===4&&pn(t,Se)),Ve(t,o),r===1&&X===0&&!(e.mode&1)&&(eo=pe()+500,Ui&&zn()))}function Ve(t,e){var r=t.callbackNode;iv(t,e);var o=ui(t,t===be?Se:0);if(o===0)r!==null&&Fd(r),t.callbackNode=null,t.callbackPriority=0;else if(e=o&-o,t.callbackPriority!==e){if(r!=null&&Fd(r),e===1)t.tag===0?sy(Mu.bind(null,t)):cf(Mu.bind(null,t)),ty(function(){!(X&6)&&zn()}),r=null;else{switch(Dp(o)){case 1:r=vc;break;case 4:r=Op;break;case 16:r=di;break;case 536870912:r=Ip;break;default:r=di}r=lm(r,em.bind(null,t))}t.callbackPriority=e,t.callbackNode=r}}function em(t,e){if(ei=-1,ti=0,X&6)throw Error(R(327));var r=t.callbackNode;if(Dr()&&t.callbackNode!==r)return null;var o=ui(t,t===be?Se:0);if(o===0)return null;if(o&30||o&t.expiredLanes||e)e=Pi(t,o);else{e=o;var s=X;X|=2;var i=nm();(be!==t||Se!==e)&&(zt=null,eo=pe()+500,nr(t,e));do try{Ty();break}catch(a){tm(t,a)}while(!0);Mc(),Ti.current=i,X=s,me!==null?e=0:(be=null,Se=0,e=ye)}if(e!==0){if(e===2&&(s=ha(t),s!==0&&(o=s,e=za(t,s))),e===1)throw r=Zo,nr(t,0),pn(t,o),Ve(t,pe()),r;if(e===6)pn(t,o);else{if(s=t.current.alternate,!(o&30)&&!Sy(s)&&(e=Pi(t,o),e===2&&(i=ha(t),i!==0&&(o=i,e=za(t,i))),e===1))throw r=Zo,nr(t,0),pn(t,o),Ve(t,pe()),r;switch(t.finishedWork=s,t.finishedLanes=o,e){case 0:case 1:throw Error(R(345));case 2:Jn(t,$e,zt);break;case 3:if(pn(t,o),(o&130023424)===o&&(e=Jc+500-pe(),10<e)){if(ui(t,0)!==0)break;if(s=t.suspendedLanes,(s&o)!==o){Le(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=ja(Jn.bind(null,t,$e,zt),e);break}Jn(t,$e,zt);break;case 4:if(pn(t,o),(o&4194240)===o)break;for(e=t.eventTimes,s=-1;0<o;){var l=31-jt(o);i=1<<l,l=e[l],l>s&&(s=l),o&=~i}if(o=s,o=pe()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*ky(o/1960))-o,10<o){t.timeoutHandle=ja(Jn.bind(null,t,$e,zt),o);break}Jn(t,$e,zt);break;case 5:Jn(t,$e,zt);break;default:throw Error(R(329))}}}return Ve(t,pe()),t.callbackNode===r?em.bind(null,t):null}function za(t,e){var r=Oo;return t.current.memoizedState.isDehydrated&&(nr(t,e).flags|=256),t=Pi(t,e),t!==2&&(e=$e,$e=r,e!==null&&$a(e)),t}function $a(t){$e===null?$e=t:$e.push.apply($e,t)}function Sy(t){for(var e=t;;){if(e.flags&16384){var r=e.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var o=0;o<r.length;o++){var s=r[o],i=s.getSnapshot;s=s.value;try{if(!bt(i(),s))return!1}catch{return!1}}}if(r=e.child,e.subtreeFlags&16384&&r!==null)r.return=e,e=r;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function pn(t,e){for(e&=~Vc,e&=~Ki,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var r=31-jt(e),o=1<<r;t[r]=-1,e&=~o}}function Mu(t){if(X&6)throw Error(R(327));Dr();var e=ui(t,0);if(!(e&1))return Ve(t,pe()),null;var r=Pi(t,e);if(t.tag!==0&&r===2){var o=ha(t);o!==0&&(e=o,r=za(t,o))}if(r===1)throw r=Zo,nr(t,0),pn(t,e),Ve(t,pe()),r;if(r===6)throw Error(R(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Jn(t,$e,zt),Ve(t,pe()),null}function qc(t,e){var r=X;X|=1;try{return t(e)}finally{X=r,X===0&&(eo=pe()+500,Ui&&zn())}}function ar(t){wn!==null&&wn.tag===0&&!(X&6)&&Dr();var e=X;X|=1;var r=it.transition,o=ee;try{if(it.transition=null,ee=1,t)return t()}finally{ee=o,it.transition=r,X=e,!(X&6)&&zn()}}function Kc(){qe=Mr.current,se(Mr)}function nr(t,e){t.finishedWork=null,t.finishedLanes=0;var r=t.timeoutHandle;if(r!==-1&&(t.timeoutHandle=-1,ey(r)),me!==null)for(r=me.return;r!==null;){var o=r;switch(Ec(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&gi();break;case 3:Xr(),se(He),se(Me),Dc();break;case 5:Lc(o);break;case 4:Xr();break;case 13:se(ae);break;case 19:se(ae);break;case 10:Ac(o.type._context);break;case 22:case 23:Kc()}r=r.return}if(be=t,me=t=Rn(t.current,null),Se=qe=e,ye=0,Zo=null,Vc=Ki=lr=0,$e=Oo=null,Kn!==null){for(e=0;e<Kn.length;e++)if(r=Kn[e],o=r.interleaved,o!==null){r.interleaved=null;var s=o.next,i=r.pending;if(i!==null){var l=i.next;i.next=s,o.next=l}r.pending=o}Kn=null}return t}function tm(t,e){do{var r=me;try{if(Mc(),Ys.current=Ci,Si){for(var o=ce.memoizedState;o!==null;){var s=o.queue;s!==null&&(s.pending=null),o=o.next}Si=!1}if(ir=0,we=xe=ce=null,Ao=!1,Qo=0,Uc.current=null,r===null||r.return===null){ye=1,Zo=e,me=null;break}e:{var i=t,l=r.return,a=r,c=e;if(e=Se,a.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,u=a,p=u.tag;if(!(u.mode&1)&&(p===0||p===11||p===15)){var g=u.alternate;g?(u.updateQueue=g.updateQueue,u.memoizedState=g.memoizedState,u.lanes=g.lanes):(u.updateQueue=null,u.memoizedState=null)}var h=vu(l);if(h!==null){h.flags&=-257,yu(h,l,a,i,e),h.mode&1&&xu(i,d,e),e=h,c=d;var b=e.updateQueue;if(b===null){var v=new Set;v.add(c),e.updateQueue=v}else b.add(c);break e}else{if(!(e&1)){xu(i,d,e),Gc();break e}c=Error(R(426))}}else if(le&&a.mode&1){var j=vu(l);if(j!==null){!(j.flags&65536)&&(j.flags|=256),yu(j,l,a,i,e),Pc(Zr(c,a));break e}}i=c=Zr(c,a),ye!==4&&(ye=2),Oo===null?Oo=[i]:Oo.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var m=Bf(i,c,e);uu(i,m);break e;case 1:a=c;var f=i.type,x=i.stateNode;if(!(i.flags&128)&&(typeof f.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(En===null||!En.has(x)))){i.flags|=65536,e&=-e,i.lanes|=e;var w=Ff(i,a,e);uu(i,w);break e}}i=i.return}while(i!==null)}om(r)}catch(k){e=k,me===r&&r!==null&&(me=r=r.return);continue}break}while(!0)}function nm(){var t=Ti.current;return Ti.current=Ci,t===null?Ci:t}function Gc(){(ye===0||ye===3||ye===2)&&(ye=4),be===null||!(lr&268435455)&&!(Ki&268435455)||pn(be,Se)}function Pi(t,e){var r=X;X|=2;var o=nm();(be!==t||Se!==e)&&(zt=null,nr(t,e));do try{Cy();break}catch(s){tm(t,s)}while(!0);if(Mc(),X=r,Ti.current=o,me!==null)throw Error(R(261));return be=null,Se=0,ye}function Cy(){for(;me!==null;)rm(me)}function Ty(){for(;me!==null&&!Yx();)rm(me)}function rm(t){var e=im(t.alternate,t,qe);t.memoizedProps=t.pendingProps,e===null?om(t):me=e,Uc.current=null}function om(t){var e=t;do{var r=e.alternate;if(t=e.return,e.flags&32768){if(r=yy(r,e),r!==null){r.flags&=32767,me=r;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ye=6,me=null;return}}else if(r=vy(r,e,qe),r!==null){me=r;return}if(e=e.sibling,e!==null){me=e;return}me=e=t}while(e!==null);ye===0&&(ye=5)}function Jn(t,e,r){var o=ee,s=it.transition;try{it.transition=null,ee=1,Ny(t,e,r,o)}finally{it.transition=s,ee=o}return null}function Ny(t,e,r,o){do Dr();while(wn!==null);if(X&6)throw Error(R(327));r=t.finishedWork;var s=t.finishedLanes;if(r===null)return null;if(t.finishedWork=null,t.finishedLanes=0,r===t.current)throw Error(R(177));t.callbackNode=null,t.callbackPriority=0;var i=r.lanes|r.childLanes;if(lv(t,i),t===be&&(me=be=null,Se=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||Bs||(Bs=!0,lm(di,function(){return Dr(),null})),i=(r.flags&15990)!==0,r.subtreeFlags&15990||i){i=it.transition,it.transition=null;var l=ee;ee=1;var a=X;X|=4,Uc.current=null,wy(t,r),Xf(r,t),qv(va),hi=!!xa,va=xa=null,t.current=r,by(r),Xx(),X=a,ee=l,it.transition=i}else t.current=r;if(Bs&&(Bs=!1,wn=t,Ei=s),i=t.pendingLanes,i===0&&(En=null),tv(r.stateNode),Ve(t,pe()),e!==null)for(o=t.onRecoverableError,r=0;r<e.length;r++)s=e[r],o(s.value,{componentStack:s.stack,digest:s.digest});if(Ni)throw Ni=!1,t=Ba,Ba=null,t;return Ei&1&&t.tag!==0&&Dr(),i=t.pendingLanes,i&1?t===Fa?Io++:(Io=0,Fa=t):Io=0,zn(),null}function Dr(){if(wn!==null){var t=Dp(Ei),e=it.transition,r=ee;try{if(it.transition=null,ee=16>t?16:t,wn===null)var o=!1;else{if(t=wn,wn=null,Ei=0,X&6)throw Error(R(331));var s=X;for(X|=4,I=t.current;I!==null;){var i=I,l=i.child;if(I.flags&16){var a=i.deletions;if(a!==null){for(var c=0;c<a.length;c++){var d=a[c];for(I=d;I!==null;){var u=I;switch(u.tag){case 0:case 11:case 15:_o(8,u,i)}var p=u.child;if(p!==null)p.return=u,I=p;else for(;I!==null;){u=I;var g=u.sibling,h=u.return;if(Gf(u),u===d){I=null;break}if(g!==null){g.return=h,I=g;break}I=h}}}var b=i.alternate;if(b!==null){var v=b.child;if(v!==null){b.child=null;do{var j=v.sibling;v.sibling=null,v=j}while(v!==null)}}I=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,I=l;else e:for(;I!==null;){if(i=I,i.flags&2048)switch(i.tag){case 0:case 11:case 15:_o(9,i,i.return)}var m=i.sibling;if(m!==null){m.return=i.return,I=m;break e}I=i.return}}var f=t.current;for(I=f;I!==null;){l=I;var x=l.child;if(l.subtreeFlags&2064&&x!==null)x.return=l,I=x;else e:for(l=f;I!==null;){if(a=I,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:qi(9,a)}}catch(k){he(a,a.return,k)}if(a===l){I=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,I=w;break e}I=a.return}}if(X=s,zn(),_t&&typeof _t.onPostCommitFiberRoot=="function")try{_t.onPostCommitFiberRoot(Fi,t)}catch{}o=!0}return o}finally{ee=r,it.transition=e}}return!1}function Au(t,e,r){e=Zr(r,e),e=Bf(t,e,1),t=Nn(t,e,1),e=Le(),t!==null&&(ds(t,1,e),Ve(t,e))}function he(t,e,r){if(t.tag===3)Au(t,t,r);else for(;e!==null;){if(e.tag===3){Au(e,t,r);break}else if(e.tag===1){var o=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(En===null||!En.has(o))){t=Zr(r,t),t=Ff(e,t,1),e=Nn(e,t,1),t=Le(),e!==null&&(ds(e,1,t),Ve(e,t));break}}e=e.return}}function Ey(t,e,r){var o=t.pingCache;o!==null&&o.delete(e),e=Le(),t.pingedLanes|=t.suspendedLanes&r,be===t&&(Se&r)===r&&(ye===4||ye===3&&(Se&130023424)===Se&&500>pe()-Jc?nr(t,0):Vc|=r),Ve(t,e)}function sm(t,e){e===0&&(t.mode&1?(e=Es,Es<<=1,!(Es&130023424)&&(Es=4194304)):e=1);var r=Le();t=Kt(t,e),t!==null&&(ds(t,e,r),Ve(t,r))}function Py(t){var e=t.memoizedState,r=0;e!==null&&(r=e.retryLane),sm(t,r)}function Ry(t,e){var r=0;switch(t.tag){case 13:var o=t.stateNode,s=t.memoizedState;s!==null&&(r=s.retryLane);break;case 19:o=t.stateNode;break;default:throw Error(R(314))}o!==null&&o.delete(e),sm(t,r)}var im;im=function(t,e,r){if(t!==null)if(t.memoizedProps!==e.pendingProps||He.current)We=!0;else{if(!(t.lanes&r)&&!(e.flags&128))return We=!1,xy(t,e,r);We=!!(t.flags&131072)}else We=!1,le&&e.flags&1048576&&df(e,yi,e.index);switch(e.lanes=0,e.tag){case 2:var o=e.type;Zs(t,e),t=e.pendingProps;var s=Gr(e,Me.current);Lr(e,r),s=Fc(null,e,o,t,s,r);var i=zc();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ue(o)?(i=!0,xi(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Oc(e),s.updater=Ji,e.stateNode=s,s._reactInternals=e,Na(e,o,t,r),e=Ra(null,e,o,!0,i,r)):(e.tag=0,le&&i&&Nc(e),Oe(null,e,s,r),e=e.child),e;case 16:o=e.elementType;e:{switch(Zs(t,e),t=e.pendingProps,s=o._init,o=s(o._payload),e.type=o,s=e.tag=Ay(o),t=ft(o,t),s){case 0:e=Pa(null,e,o,t,r);break e;case 1:e=bu(null,e,o,t,r);break e;case 11:e=ju(null,e,o,t,r);break e;case 14:e=wu(null,e,o,ft(o.type,t),r);break e}throw Error(R(306,o,""))}return e;case 0:return o=e.type,s=e.pendingProps,s=e.elementType===o?s:ft(o,s),Pa(t,e,o,s,r);case 1:return o=e.type,s=e.pendingProps,s=e.elementType===o?s:ft(o,s),bu(t,e,o,s,r);case 3:e:{if(Hf(e),t===null)throw Error(R(387));o=e.pendingProps,i=e.memoizedState,s=i.element,gf(t,e),bi(e,o,null,r);var l=e.memoizedState;if(o=l.element,i.isDehydrated)if(i={element:o,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=Zr(Error(R(423)),e),e=ku(t,e,o,r,s);break e}else if(o!==s){s=Zr(Error(R(424)),e),e=ku(t,e,o,r,s);break e}else for(Ge=Tn(e.stateNode.containerInfo.firstChild),Qe=e,le=!0,yt=null,r=ff(e,null,o,r),e.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Qr(),o===s){e=Gt(t,e,r);break e}Oe(t,e,o,r)}e=e.child}return e;case 5:return xf(e),t===null&&Sa(e),o=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,l=s.children,ya(o,s)?l=null:i!==null&&ya(o,i)&&(e.flags|=32),Wf(t,e),Oe(t,e,l,r),e.child;case 6:return t===null&&Sa(e),null;case 13:return Uf(t,e,r);case 4:return Ic(e,e.stateNode.containerInfo),o=e.pendingProps,t===null?e.child=Yr(e,null,o,r):Oe(t,e,o,r),e.child;case 11:return o=e.type,s=e.pendingProps,s=e.elementType===o?s:ft(o,s),ju(t,e,o,s,r);case 7:return Oe(t,e,e.pendingProps,r),e.child;case 8:return Oe(t,e,e.pendingProps.children,r),e.child;case 12:return Oe(t,e,e.pendingProps.children,r),e.child;case 10:e:{if(o=e.type._context,s=e.pendingProps,i=e.memoizedProps,l=s.value,ne(ji,o._currentValue),o._currentValue=l,i!==null)if(bt(i.value,l)){if(i.children===s.children&&!He.current){e=Gt(t,e,r);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var a=i.dependencies;if(a!==null){l=i.child;for(var c=a.firstContext;c!==null;){if(c.context===o){if(i.tag===1){c=Vt(-1,r&-r),c.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var u=d.pending;u===null?c.next=c:(c.next=u.next,u.next=c),d.pending=c}}i.lanes|=r,c=i.alternate,c!==null&&(c.lanes|=r),Ca(i.return,r,e),a.lanes|=r;break}c=c.next}}else if(i.tag===10)l=i.type===e.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(R(341));l.lanes|=r,a=l.alternate,a!==null&&(a.lanes|=r),Ca(l,r,e),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===e){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}Oe(t,e,s.children,r),e=e.child}return e;case 9:return s=e.type,o=e.pendingProps.children,Lr(e,r),s=lt(s),o=o(s),e.flags|=1,Oe(t,e,o,r),e.child;case 14:return o=e.type,s=ft(o,e.pendingProps),s=ft(o.type,s),wu(t,e,o,s,r);case 15:return zf(t,e,e.type,e.pendingProps,r);case 17:return o=e.type,s=e.pendingProps,s=e.elementType===o?s:ft(o,s),Zs(t,e),e.tag=1,Ue(o)?(t=!0,xi(e)):t=!1,Lr(e,r),Df(e,o,s),Na(e,o,s,r),Ra(null,e,o,!0,t,r);case 19:return Vf(t,e,r);case 22:return $f(t,e,r)}throw Error(R(156,e.tag))};function lm(t,e){return _p(t,e)}function My(t,e,r,o){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function st(t,e,r,o){return new My(t,e,r,o)}function Qc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ay(t){if(typeof t=="function")return Qc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===mc)return 11;if(t===gc)return 14}return 2}function Rn(t,e){var r=t.alternate;return r===null?(r=st(t.tag,e,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=e,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&14680064,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,e=t.dependencies,r.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r}function ni(t,e,r,o,s,i){var l=2;if(o=t,typeof t=="function")Qc(t)&&(l=1);else if(typeof t=="string")l=5;else e:switch(t){case wr:return rr(r.children,s,i,e);case fc:l=8,s|=8;break;case Yl:return t=st(12,r,e,s|2),t.elementType=Yl,t.lanes=i,t;case Xl:return t=st(13,r,e,s),t.elementType=Xl,t.lanes=i,t;case Zl:return t=st(19,r,e,s),t.elementType=Zl,t.lanes=i,t;case gp:return Gi(r,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case fp:l=10;break e;case mp:l=9;break e;case mc:l=11;break e;case gc:l=14;break e;case dn:l=16,o=null;break e}throw Error(R(130,t==null?t:typeof t,""))}return e=st(l,r,e,s),e.elementType=t,e.type=o,e.lanes=i,e}function rr(t,e,r,o){return t=st(7,t,o,e),t.lanes=r,t}function Gi(t,e,r,o){return t=st(22,t,o,e),t.elementType=gp,t.lanes=r,t.stateNode={isHidden:!1},t}function $l(t,e,r){return t=st(6,t,null,e),t.lanes=r,t}function Wl(t,e,r){return e=st(4,t.children!==null?t.children:[],t.key,e),e.lanes=r,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function _y(t,e,r,o,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bl(0),this.expirationTimes=bl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bl(0),this.identifierPrefix=o,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Yc(t,e,r,o,s,i,l,a,c){return t=new _y(t,e,r,a,c),e===1?(e=1,i===!0&&(e|=8)):e=0,i=st(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:o,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Oc(i),t}function Oy(t,e,r){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:jr,key:o==null?null:""+o,children:t,containerInfo:e,implementation:r}}function am(t){if(!t)return _n;t=t._reactInternals;e:{if(ur(t)!==t||t.tag!==1)throw Error(R(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ue(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(R(171))}if(t.tag===1){var r=t.type;if(Ue(r))return af(t,r,e)}return e}function cm(t,e,r,o,s,i,l,a,c){return t=Yc(r,o,!0,t,s,i,l,a,c),t.context=am(null),r=t.current,o=Le(),s=Pn(r),i=Vt(o,s),i.callback=e??null,Nn(r,i,s),t.current.lanes=s,ds(t,s,o),Ve(t,o),t}function Qi(t,e,r,o){var s=e.current,i=Le(),l=Pn(s);return r=am(r),e.context===null?e.context=r:e.pendingContext=r,e=Vt(i,l),e.payload={element:t},o=o===void 0?null:o,o!==null&&(e.callback=o),t=Nn(s,e,l),t!==null&&(wt(t,s,l,i),Qs(t,s,l)),l}function Ri(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function _u(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<e?r:e}}function Xc(t,e){_u(t,e),(t=t.alternate)&&_u(t,e)}function Iy(){return null}var dm=typeof reportError=="function"?reportError:function(t){console.error(t)};function Zc(t){this._internalRoot=t}Yi.prototype.render=Zc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(R(409));Qi(t,e,null,null)};Yi.prototype.unmount=Zc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ar(function(){Qi(null,t,null,null)}),e[qt]=null}};function Yi(t){this._internalRoot=t}Yi.prototype.unstable_scheduleHydration=function(t){if(t){var e=zp();t={blockedOn:null,target:t,priority:e};for(var r=0;r<hn.length&&e!==0&&e<hn[r].priority;r++);hn.splice(r,0,t),r===0&&Wp(t)}};function ed(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Xi(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ou(){}function Ly(t,e,r,o,s){if(s){if(typeof o=="function"){var i=o;o=function(){var d=Ri(l);i.call(d)}}var l=cm(e,o,t,0,null,!1,!1,"",Ou);return t._reactRootContainer=l,t[qt]=l.current,Vo(t.nodeType===8?t.parentNode:t),ar(),l}for(;s=t.lastChild;)t.removeChild(s);if(typeof o=="function"){var a=o;o=function(){var d=Ri(c);a.call(d)}}var c=Yc(t,0,!1,null,null,!1,!1,"",Ou);return t._reactRootContainer=c,t[qt]=c.current,Vo(t.nodeType===8?t.parentNode:t),ar(function(){Qi(e,c,r,o)}),c}function Zi(t,e,r,o,s){var i=r._reactRootContainer;if(i){var l=i;if(typeof s=="function"){var a=s;s=function(){var c=Ri(l);a.call(c)}}Qi(e,l,t,s)}else l=Ly(r,e,t,s,o);return Ri(l)}Bp=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var r=Co(e.pendingLanes);r!==0&&(yc(e,r|1),Ve(e,pe()),!(X&6)&&(eo=pe()+500,zn()))}break;case 13:ar(function(){var o=Kt(t,1);if(o!==null){var s=Le();wt(o,t,1,s)}}),Xc(t,1)}};jc=function(t){if(t.tag===13){var e=Kt(t,134217728);if(e!==null){var r=Le();wt(e,t,134217728,r)}Xc(t,134217728)}};Fp=function(t){if(t.tag===13){var e=Pn(t),r=Kt(t,e);if(r!==null){var o=Le();wt(r,t,e,o)}Xc(t,e)}};zp=function(){return ee};$p=function(t,e){var r=ee;try{return ee=t,e()}finally{ee=r}};ca=function(t,e,r){switch(e){case"input":if(na(t,r),e=r.name,r.type==="radio"&&e!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<r.length;e++){var o=r[e];if(o!==t&&o.form===t.form){var s=Hi(o);if(!s)throw Error(R(90));vp(o),na(o,s)}}}break;case"textarea":jp(t,r);break;case"select":e=r.value,e!=null&&Ar(t,!!r.multiple,e,!1)}};Np=qc;Ep=ar;var Dy={usingClientEntryPoint:!1,Events:[hs,Cr,Hi,Cp,Tp,qc]},jo={findFiberByHostInstance:qn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},By={bundleType:jo.bundleType,version:jo.version,rendererPackageName:jo.rendererPackageName,rendererConfig:jo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Mp(t),t===null?null:t.stateNode},findFiberByHostInstance:jo.findFiberByHostInstance||Iy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fs.isDisabled&&Fs.supportsFiber)try{Fi=Fs.inject(By),_t=Fs}catch{}}Ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Dy;Ze.createPortal=function(t,e){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ed(e))throw Error(R(200));return Oy(t,e,null,r)};Ze.createRoot=function(t,e){if(!ed(t))throw Error(R(299));var r=!1,o="",s=dm;return e!=null&&(e.unstable_strictMode===!0&&(r=!0),e.identifierPrefix!==void 0&&(o=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=Yc(t,1,!1,null,null,r,!1,o,s),t[qt]=e.current,Vo(t.nodeType===8?t.parentNode:t),new Zc(e)};Ze.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(R(188)):(t=Object.keys(t).join(","),Error(R(268,t)));return t=Mp(e),t=t===null?null:t.stateNode,t};Ze.flushSync=function(t){return ar(t)};Ze.hydrate=function(t,e,r){if(!Xi(e))throw Error(R(200));return Zi(null,t,e,!0,r)};Ze.hydrateRoot=function(t,e,r){if(!ed(t))throw Error(R(405));var o=r!=null&&r.hydratedSources||null,s=!1,i="",l=dm;if(r!=null&&(r.unstable_strictMode===!0&&(s=!0),r.identifierPrefix!==void 0&&(i=r.identifierPrefix),r.onRecoverableError!==void 0&&(l=r.onRecoverableError)),e=cm(e,null,t,1,r??null,s,!1,i,l),t[qt]=e.current,Vo(t),o)for(t=0;t<o.length;t++)r=o[t],s=r._getVersion,s=s(r._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[r,s]:e.mutableSourceEagerHydrationData.push(r,s);return new Yi(e)};Ze.render=function(t,e,r){if(!Xi(e))throw Error(R(200));return Zi(null,t,e,!1,r)};Ze.unmountComponentAtNode=function(t){if(!Xi(t))throw Error(R(40));return t._reactRootContainer?(ar(function(){Zi(null,null,t,!1,function(){t._reactRootContainer=null,t[qt]=null})}),!0):!1};Ze.unstable_batchedUpdates=qc;Ze.unstable_renderSubtreeIntoContainer=function(t,e,r,o){if(!Xi(r))throw Error(R(200));if(t==null||t._reactInternals===void 0)throw Error(R(38));return Zi(t,e,r,!1,o)};Ze.version="18.3.1-next-f1338f8080-20240426";function um(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(um)}catch(t){console.error(t)}}um(),dp.exports=Ze;var fs=dp.exports;const hm=Yh(fs);var pm,Iu=fs;pm=Iu.createRoot,Iu.hydrateRoot;const Fy=1,zy=1e6;let Hl=0;function $y(){return Hl=(Hl+1)%Number.MAX_SAFE_INTEGER,Hl.toString()}const Ul=new Map,Lu=t=>{if(Ul.has(t))return;const e=setTimeout(()=>{Ul.delete(t),Lo({type:"REMOVE_TOAST",toastId:t})},zy);Ul.set(t,e)},Wy=(t,e)=>{switch(e.type){case"ADD_TOAST":return{...t,toasts:[e.toast,...t.toasts].slice(0,Fy)};case"UPDATE_TOAST":return{...t,toasts:t.toasts.map(r=>r.id===e.toast.id?{...r,...e.toast}:r)};case"DISMISS_TOAST":{const{toastId:r}=e;return r?Lu(r):t.toasts.forEach(o=>{Lu(o.id)}),{...t,toasts:t.toasts.map(o=>o.id===r||r===void 0?{...o,open:!1}:o)}}case"REMOVE_TOAST":return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(r=>r.id!==e.toastId)}}},ri=[];let oi={toasts:[]};function Lo(t){oi=Wy(oi,t),ri.forEach(e=>{e(oi)})}function Hy({...t}){const e=$y(),r=s=>Lo({type:"UPDATE_TOAST",toast:{...s,id:e}}),o=()=>Lo({type:"DISMISS_TOAST",toastId:e});return Lo({type:"ADD_TOAST",toast:{...t,id:e,open:!0,onOpenChange:s=>{s||o()}}}),{id:e,dismiss:o,update:r}}function Uy(){const[t,e]=y.useState(oi);return y.useEffect(()=>(ri.push(e),()=>{const r=ri.indexOf(e);r>-1&&ri.splice(r,1)}),[t]),{...t,toast:Hy,dismiss:r=>Lo({type:"DISMISS_TOAST",toastId:r})}}function ve(t,e,{checkForDefaultPrevented:r=!0}={}){return function(s){if(t==null||t(s),r===!1||!s.defaultPrevented)return e==null?void 0:e(s)}}function Du(t,e){if(typeof t=="function")return t(e);t!=null&&(t.current=e)}function fm(...t){return e=>{let r=!1;const o=t.map(s=>{const i=Du(s,e);return!r&&typeof i=="function"&&(r=!0),i});if(r)return()=>{for(let s=0;s<o.length;s++){const i=o[s];typeof i=="function"?i():Du(t[s],null)}}}}function kt(...t){return y.useCallback(fm(...t),t)}function el(t,e=[]){let r=[];function o(i,l){const a=y.createContext(l),c=r.length;r=[...r,l];const d=p=>{var m;const{scope:g,children:h,...b}=p,v=((m=g==null?void 0:g[t])==null?void 0:m[c])||a,j=y.useMemo(()=>b,Object.values(b));return n.jsx(v.Provider,{value:j,children:h})};d.displayName=i+"Provider";function u(p,g){var v;const h=((v=g==null?void 0:g[t])==null?void 0:v[c])||a,b=y.useContext(h);if(b)return b;if(l!==void 0)return l;throw new Error(`\`${p}\` must be used within \`${i}\``)}return[d,u]}const s=()=>{const i=r.map(l=>y.createContext(l));return function(a){const c=(a==null?void 0:a[t])||i;return y.useMemo(()=>({[`__scope${t}`]:{...a,[t]:c}}),[a,c])}};return s.scopeName=t,[o,Vy(s,...e)]}function Vy(...t){const e=t[0];if(t.length===1)return e;const r=()=>{const o=t.map(s=>({useScope:s(),scopeName:s.scopeName}));return function(i){const l=o.reduce((a,{useScope:c,scopeName:d})=>{const p=c(i)[`__scope${d}`];return{...a,...p}},{});return y.useMemo(()=>({[`__scope${e.scopeName}`]:l}),[l])}};return r.scopeName=e.scopeName,r}function Mi(t){const e=qy(t),r=y.forwardRef((o,s)=>{const{children:i,...l}=o,a=y.Children.toArray(i),c=a.find(Gy);if(c){const d=c.props.children,u=a.map(p=>p===c?y.Children.count(d)>1?y.Children.only(null):y.isValidElement(d)?d.props.children:null:p);return n.jsx(e,{...l,ref:s,children:y.isValidElement(d)?y.cloneElement(d,void 0,u):null})}return n.jsx(e,{...l,ref:s,children:i})});return r.displayName=`${t}.Slot`,r}var Jy=Mi("Slot");function qy(t){const e=y.forwardRef((r,o)=>{const{children:s,...i}=r;if(y.isValidElement(s)){const l=Yy(s),a=Qy(i,s.props);return s.type!==y.Fragment&&(a.ref=o?fm(o,l):l),y.cloneElement(s,a)}return y.Children.count(s)>1?y.Children.only(null):null});return e.displayName=`${t}.SlotClone`,e}var mm=Symbol("radix.slottable");function Ky(t){const e=({children:r})=>n.jsx(n.Fragment,{children:r});return e.displayName=`${t}.Slottable`,e.__radixId=mm,e}function Gy(t){return y.isValidElement(t)&&typeof t.type=="function"&&"__radixId"in t.type&&t.type.__radixId===mm}function Qy(t,e){const r={...e};for(const o in e){const s=t[o],i=e[o];/^on[A-Z]/.test(o)?s&&i?r[o]=(...a)=>{const c=i(...a);return s(...a),c}:s&&(r[o]=s):o==="style"?r[o]={...s,...i}:o==="className"&&(r[o]=[s,i].filter(Boolean).join(" "))}return{...t,...r}}function Yy(t){var o,s;let e=(o=Object.getOwnPropertyDescriptor(t.props,"ref"))==null?void 0:o.get,r=e&&"isReactWarning"in e&&e.isReactWarning;return r?t.ref:(e=(s=Object.getOwnPropertyDescriptor(t,"ref"))==null?void 0:s.get,r=e&&"isReactWarning"in e&&e.isReactWarning,r?t.props.ref:t.props.ref||t.ref)}function Xy(t){const e=t+"CollectionProvider",[r,o]=el(e),[s,i]=r(e,{collectionRef:{current:null},itemMap:new Map}),l=v=>{const{scope:j,children:m}=v,f=A.useRef(null),x=A.useRef(new Map).current;return n.jsx(s,{scope:j,itemMap:x,collectionRef:f,children:m})};l.displayName=e;const a=t+"CollectionSlot",c=Mi(a),d=A.forwardRef((v,j)=>{const{scope:m,children:f}=v,x=i(a,m),w=kt(j,x.collectionRef);return n.jsx(c,{ref:w,children:f})});d.displayName=a;const u=t+"CollectionItemSlot",p="data-radix-collection-item",g=Mi(u),h=A.forwardRef((v,j)=>{const{scope:m,children:f,...x}=v,w=A.useRef(null),k=kt(j,w),S=i(u,m);return A.useEffect(()=>(S.itemMap.set(w,{ref:w,...x}),()=>void S.itemMap.delete(w))),n.jsx(g,{[p]:"",ref:k,children:f})});h.displayName=u;function b(v){const j=i(t+"CollectionConsumer",v);return A.useCallback(()=>{const f=j.collectionRef.current;if(!f)return[];const x=Array.from(f.querySelectorAll(`[${p}]`));return Array.from(j.itemMap.values()).sort((S,C)=>x.indexOf(S.ref.current)-x.indexOf(C.ref.current))},[j.collectionRef,j.itemMap])}return[{Provider:l,Slot:d,ItemSlot:h},b,o]}var Zy=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],Je=Zy.reduce((t,e)=>{const r=Mi(`Primitive.${e}`),o=y.forwardRef((s,i)=>{const{asChild:l,...a}=s,c=l?r:e;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),n.jsx(c,{...a,ref:i})});return o.displayName=`Primitive.${e}`,{...t,[e]:o}},{});function gm(t,e){t&&fs.flushSync(()=>t.dispatchEvent(e))}function On(t){const e=y.useRef(t);return y.useEffect(()=>{e.current=t}),y.useMemo(()=>(...r)=>{var o;return(o=e.current)==null?void 0:o.call(e,...r)},[])}function ej(t,e=globalThis==null?void 0:globalThis.document){const r=On(t);y.useEffect(()=>{const o=s=>{s.key==="Escape"&&r(s)};return e.addEventListener("keydown",o,{capture:!0}),()=>e.removeEventListener("keydown",o,{capture:!0})},[r,e])}var tj="DismissableLayer",Wa="dismissableLayer.update",nj="dismissableLayer.pointerDownOutside",rj="dismissableLayer.focusOutside",Bu,xm=y.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),td=y.forwardRef((t,e)=>{const{disableOutsidePointerEvents:r=!1,onEscapeKeyDown:o,onPointerDownOutside:s,onFocusOutside:i,onInteractOutside:l,onDismiss:a,...c}=t,d=y.useContext(xm),[u,p]=y.useState(null),g=(u==null?void 0:u.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,h]=y.useState({}),b=kt(e,C=>p(C)),v=Array.from(d.layers),[j]=[...d.layersWithOutsidePointerEventsDisabled].slice(-1),m=v.indexOf(j),f=u?v.indexOf(u):-1,x=d.layersWithOutsidePointerEventsDisabled.size>0,w=f>=m,k=sj(C=>{const P=C.target,D=[...d.branches].some(M=>M.contains(P));!w||D||(s==null||s(C),l==null||l(C),C.defaultPrevented||a==null||a())},g),S=ij(C=>{const P=C.target;[...d.branches].some(M=>M.contains(P))||(i==null||i(C),l==null||l(C),C.defaultPrevented||a==null||a())},g);return ej(C=>{f===d.layers.size-1&&(o==null||o(C),!C.defaultPrevented&&a&&(C.preventDefault(),a()))},g),y.useEffect(()=>{if(u)return r&&(d.layersWithOutsidePointerEventsDisabled.size===0&&(Bu=g.body.style.pointerEvents,g.body.style.pointerEvents="none"),d.layersWithOutsidePointerEventsDisabled.add(u)),d.layers.add(u),Fu(),()=>{r&&d.layersWithOutsidePointerEventsDisabled.size===1&&(g.body.style.pointerEvents=Bu)}},[u,g,r,d]),y.useEffect(()=>()=>{u&&(d.layers.delete(u),d.layersWithOutsidePointerEventsDisabled.delete(u),Fu())},[u,d]),y.useEffect(()=>{const C=()=>h({});return document.addEventListener(Wa,C),()=>document.removeEventListener(Wa,C)},[]),n.jsx(Je.div,{...c,ref:b,style:{pointerEvents:x?w?"auto":"none":void 0,...t.style},onFocusCapture:ve(t.onFocusCapture,S.onFocusCapture),onBlurCapture:ve(t.onBlurCapture,S.onBlurCapture),onPointerDownCapture:ve(t.onPointerDownCapture,k.onPointerDownCapture)})});td.displayName=tj;var oj="DismissableLayerBranch",vm=y.forwardRef((t,e)=>{const r=y.useContext(xm),o=y.useRef(null),s=kt(e,o);return y.useEffect(()=>{const i=o.current;if(i)return r.branches.add(i),()=>{r.branches.delete(i)}},[r.branches]),n.jsx(Je.div,{...t,ref:s})});vm.displayName=oj;function sj(t,e=globalThis==null?void 0:globalThis.document){const r=On(t),o=y.useRef(!1),s=y.useRef(()=>{});return y.useEffect(()=>{const i=a=>{if(a.target&&!o.current){let c=function(){ym(nj,r,d,{discrete:!0})};const d={originalEvent:a};a.pointerType==="touch"?(e.removeEventListener("click",s.current),s.current=c,e.addEventListener("click",s.current,{once:!0})):c()}else e.removeEventListener("click",s.current);o.current=!1},l=window.setTimeout(()=>{e.addEventListener("pointerdown",i)},0);return()=>{window.clearTimeout(l),e.removeEventListener("pointerdown",i),e.removeEventListener("click",s.current)}},[e,r]),{onPointerDownCapture:()=>o.current=!0}}function ij(t,e=globalThis==null?void 0:globalThis.document){const r=On(t),o=y.useRef(!1);return y.useEffect(()=>{const s=i=>{i.target&&!o.current&&ym(rj,r,{originalEvent:i},{discrete:!1})};return e.addEventListener("focusin",s),()=>e.removeEventListener("focusin",s)},[e,r]),{onFocusCapture:()=>o.current=!0,onBlurCapture:()=>o.current=!1}}function Fu(){const t=new CustomEvent(Wa);document.dispatchEvent(t)}function ym(t,e,r,{discrete:o}){const s=r.originalEvent.target,i=new CustomEvent(t,{bubbles:!1,cancelable:!0,detail:r});e&&s.addEventListener(t,e,{once:!0}),o?gm(s,i):s.dispatchEvent(i)}var lj=td,aj=vm,In=globalThis!=null&&globalThis.document?y.useLayoutEffect:()=>{},cj="Portal",jm=y.forwardRef((t,e)=>{var a;const{container:r,...o}=t,[s,i]=y.useState(!1);In(()=>i(!0),[]);const l=r||s&&((a=globalThis==null?void 0:globalThis.document)==null?void 0:a.body);return l?hm.createPortal(n.jsx(Je.div,{...o,ref:e}),l):null});jm.displayName=cj;function dj(t,e){return y.useReducer((r,o)=>e[r][o]??r,t)}var nd=t=>{const{present:e,children:r}=t,o=uj(e),s=typeof r=="function"?r({present:o.isPresent}):y.Children.only(r),i=kt(o.ref,hj(s));return typeof r=="function"||o.isPresent?y.cloneElement(s,{ref:i}):null};nd.displayName="Presence";function uj(t){const[e,r]=y.useState(),o=y.useRef(null),s=y.useRef(t),i=y.useRef("none"),l=t?"mounted":"unmounted",[a,c]=dj(l,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return y.useEffect(()=>{const d=zs(o.current);i.current=a==="mounted"?d:"none"},[a]),In(()=>{const d=o.current,u=s.current;if(u!==t){const g=i.current,h=zs(d);t?c("MOUNT"):h==="none"||(d==null?void 0:d.display)==="none"?c("UNMOUNT"):c(u&&g!==h?"ANIMATION_OUT":"UNMOUNT"),s.current=t}},[t,c]),In(()=>{if(e){let d;const u=e.ownerDocument.defaultView??window,p=h=>{const v=zs(o.current).includes(CSS.escape(h.animationName));if(h.target===e&&v&&(c("ANIMATION_END"),!s.current)){const j=e.style.animationFillMode;e.style.animationFillMode="forwards",d=u.setTimeout(()=>{e.style.animationFillMode==="forwards"&&(e.style.animationFillMode=j)})}},g=h=>{h.target===e&&(i.current=zs(o.current))};return e.addEventListener("animationstart",g),e.addEventListener("animationcancel",p),e.addEventListener("animationend",p),()=>{u.clearTimeout(d),e.removeEventListener("animationstart",g),e.removeEventListener("animationcancel",p),e.removeEventListener("animationend",p)}}else c("ANIMATION_END")},[e,c]),{isPresent:["mounted","unmountSuspended"].includes(a),ref:y.useCallback(d=>{o.current=d?getComputedStyle(d):null,r(d)},[])}}function zs(t){return(t==null?void 0:t.animationName)||"none"}function hj(t){var o,s;let e=(o=Object.getOwnPropertyDescriptor(t.props,"ref"))==null?void 0:o.get,r=e&&"isReactWarning"in e&&e.isReactWarning;return r?t.ref:(e=(s=Object.getOwnPropertyDescriptor(t,"ref"))==null?void 0:s.get,r=e&&"isReactWarning"in e&&e.isReactWarning,r?t.props.ref:t.props.ref||t.ref)}var pj=ap[" useInsertionEffect ".trim().toString()]||In;function fj({prop:t,defaultProp:e,onChange:r=()=>{},caller:o}){const[s,i,l]=mj({defaultProp:e,onChange:r}),a=t!==void 0,c=a?t:s;{const u=y.useRef(t!==void 0);y.useEffect(()=>{const p=u.current;p!==a&&console.warn(`${o} is changing from ${p?"controlled":"uncontrolled"} to ${a?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),u.current=a},[a,o])}const d=y.useCallback(u=>{var p;if(a){const g=gj(u)?u(t):u;g!==t&&((p=l.current)==null||p.call(l,g))}else i(u)},[a,t,i,l]);return[c,d]}function mj({defaultProp:t,onChange:e}){const[r,o]=y.useState(t),s=y.useRef(r),i=y.useRef(e);return pj(()=>{i.current=e},[e]),y.useEffect(()=>{var l;s.current!==r&&((l=i.current)==null||l.call(i,r),s.current=r)},[r,s]),[r,o,i]}function gj(t){return typeof t=="function"}var xj=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"}),vj="VisuallyHidden",tl=y.forwardRef((t,e)=>n.jsx(Je.span,{...t,ref:e,style:{...xj,...t.style}}));tl.displayName=vj;var yj=tl,rd="ToastProvider",[od,jj,wj]=Xy("Toast"),[wm]=el("Toast",[wj]),[bj,nl]=wm(rd),bm=t=>{const{__scopeToast:e,label:r="Notification",duration:o=5e3,swipeDirection:s="right",swipeThreshold:i=50,children:l}=t,[a,c]=y.useState(null),[d,u]=y.useState(0),p=y.useRef(!1),g=y.useRef(!1);return r.trim()||console.error(`Invalid prop \`label\` supplied to \`${rd}\`. Expected non-empty \`string\`.`),n.jsx(od.Provider,{scope:e,children:n.jsx(bj,{scope:e,label:r,duration:o,swipeDirection:s,swipeThreshold:i,toastCount:d,viewport:a,onViewportChange:c,onToastAdd:y.useCallback(()=>u(h=>h+1),[]),onToastRemove:y.useCallback(()=>u(h=>h-1),[]),isFocusedToastEscapeKeyDownRef:p,isClosePausedRef:g,children:l})})};bm.displayName=rd;var km="ToastViewport",kj=["F8"],Ha="toast.viewportPause",Ua="toast.viewportResume",Sm=y.forwardRef((t,e)=>{const{__scopeToast:r,hotkey:o=kj,label:s="Notifications ({hotkey})",...i}=t,l=nl(km,r),a=jj(r),c=y.useRef(null),d=y.useRef(null),u=y.useRef(null),p=y.useRef(null),g=kt(e,p,l.onViewportChange),h=o.join("+").replace(/Key/g,"").replace(/Digit/g,""),b=l.toastCount>0;y.useEffect(()=>{const j=m=>{var x;o.length!==0&&o.every(w=>m[w]||m.code===w)&&((x=p.current)==null||x.focus())};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[o]),y.useEffect(()=>{const j=c.current,m=p.current;if(b&&j&&m){const f=()=>{if(!l.isClosePausedRef.current){const S=new CustomEvent(Ha);m.dispatchEvent(S),l.isClosePausedRef.current=!0}},x=()=>{if(l.isClosePausedRef.current){const S=new CustomEvent(Ua);m.dispatchEvent(S),l.isClosePausedRef.current=!1}},w=S=>{!j.contains(S.relatedTarget)&&x()},k=()=>{j.contains(document.activeElement)||x()};return j.addEventListener("focusin",f),j.addEventListener("focusout",w),j.addEventListener("pointermove",f),j.addEventListener("pointerleave",k),window.addEventListener("blur",f),window.addEventListener("focus",x),()=>{j.removeEventListener("focusin",f),j.removeEventListener("focusout",w),j.removeEventListener("pointermove",f),j.removeEventListener("pointerleave",k),window.removeEventListener("blur",f),window.removeEventListener("focus",x)}}},[b,l.isClosePausedRef]);const v=y.useCallback(({tabbingDirection:j})=>{const f=a().map(x=>{const w=x.ref.current,k=[w,...Lj(w)];return j==="forwards"?k:k.reverse()});return(j==="forwards"?f.reverse():f).flat()},[a]);return y.useEffect(()=>{const j=p.current;if(j){const m=f=>{var k,S,C;const x=f.altKey||f.ctrlKey||f.metaKey;if(f.key==="Tab"&&!x){const P=document.activeElement,D=f.shiftKey;if(f.target===j&&D){(k=d.current)==null||k.focus();return}const L=v({tabbingDirection:D?"backwards":"forwards"}),J=L.findIndex(_=>_===P);Vl(L.slice(J+1))?f.preventDefault():D?(S=d.current)==null||S.focus():(C=u.current)==null||C.focus()}};return j.addEventListener("keydown",m),()=>j.removeEventListener("keydown",m)}},[a,v]),n.jsxs(aj,{ref:c,role:"region","aria-label":s.replace("{hotkey}",h),tabIndex:-1,style:{pointerEvents:b?void 0:"none"},children:[b&&n.jsx(Va,{ref:d,onFocusFromOutsideViewport:()=>{const j=v({tabbingDirection:"forwards"});Vl(j)}}),n.jsx(od.Slot,{scope:r,children:n.jsx(Je.ol,{tabIndex:-1,...i,ref:g})}),b&&n.jsx(Va,{ref:u,onFocusFromOutsideViewport:()=>{const j=v({tabbingDirection:"backwards"});Vl(j)}})]})});Sm.displayName=km;var Cm="ToastFocusProxy",Va=y.forwardRef((t,e)=>{const{__scopeToast:r,onFocusFromOutsideViewport:o,...s}=t,i=nl(Cm,r);return n.jsx(tl,{tabIndex:0,...s,ref:e,style:{position:"fixed"},onFocus:l=>{var d;const a=l.relatedTarget;!((d=i.viewport)!=null&&d.contains(a))&&o()}})});Va.displayName=Cm;var ms="Toast",Sj="toast.swipeStart",Cj="toast.swipeMove",Tj="toast.swipeCancel",Nj="toast.swipeEnd",Tm=y.forwardRef((t,e)=>{const{forceMount:r,open:o,defaultOpen:s,onOpenChange:i,...l}=t,[a,c]=fj({prop:o,defaultProp:s??!0,onChange:i,caller:ms});return n.jsx(nd,{present:r||a,children:n.jsx(Rj,{open:a,...l,ref:e,onClose:()=>c(!1),onPause:On(t.onPause),onResume:On(t.onResume),onSwipeStart:ve(t.onSwipeStart,d=>{d.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:ve(t.onSwipeMove,d=>{const{x:u,y:p}=d.detail.delta;d.currentTarget.setAttribute("data-swipe","move"),d.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${u}px`),d.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${p}px`)}),onSwipeCancel:ve(t.onSwipeCancel,d=>{d.currentTarget.setAttribute("data-swipe","cancel"),d.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),d.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),d.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),d.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:ve(t.onSwipeEnd,d=>{const{x:u,y:p}=d.detail.delta;d.currentTarget.setAttribute("data-swipe","end"),d.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),d.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),d.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${u}px`),d.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${p}px`),c(!1)})})})});Tm.displayName=ms;var[Ej,Pj]=wm(ms,{onClose(){}}),Rj=y.forwardRef((t,e)=>{const{__scopeToast:r,type:o="foreground",duration:s,open:i,onClose:l,onEscapeKeyDown:a,onPause:c,onResume:d,onSwipeStart:u,onSwipeMove:p,onSwipeCancel:g,onSwipeEnd:h,...b}=t,v=nl(ms,r),[j,m]=y.useState(null),f=kt(e,_=>m(_)),x=y.useRef(null),w=y.useRef(null),k=s||v.duration,S=y.useRef(0),C=y.useRef(k),P=y.useRef(0),{onToastAdd:D,onToastRemove:M}=v,F=On(()=>{var G;(j==null?void 0:j.contains(document.activeElement))&&((G=v.viewport)==null||G.focus()),l()}),L=y.useCallback(_=>{!_||_===1/0||(window.clearTimeout(P.current),S.current=new Date().getTime(),P.current=window.setTimeout(F,_))},[F]);y.useEffect(()=>{const _=v.viewport;if(_){const G=()=>{L(C.current),d==null||d()},$=()=>{const H=new Date().getTime()-S.current;C.current=C.current-H,window.clearTimeout(P.current),c==null||c()};return _.addEventListener(Ha,$),_.addEventListener(Ua,G),()=>{_.removeEventListener(Ha,$),_.removeEventListener(Ua,G)}}},[v.viewport,k,c,d,L]),y.useEffect(()=>{i&&!v.isClosePausedRef.current&&L(k)},[i,k,v.isClosePausedRef,L]),y.useEffect(()=>(D(),()=>M()),[D,M]);const J=y.useMemo(()=>j?_m(j):null,[j]);return v.viewport?n.jsxs(n.Fragment,{children:[J&&n.jsx(Mj,{__scopeToast:r,role:"status","aria-live":o==="foreground"?"assertive":"polite",children:J}),n.jsx(Ej,{scope:r,onClose:F,children:fs.createPortal(n.jsx(od.ItemSlot,{scope:r,children:n.jsx(lj,{asChild:!0,onEscapeKeyDown:ve(a,()=>{v.isFocusedToastEscapeKeyDownRef.current||F(),v.isFocusedToastEscapeKeyDownRef.current=!1}),children:n.jsx(Je.li,{tabIndex:0,"data-state":i?"open":"closed","data-swipe-direction":v.swipeDirection,...b,ref:f,style:{userSelect:"none",touchAction:"none",...t.style},onKeyDown:ve(t.onKeyDown,_=>{_.key==="Escape"&&(a==null||a(_.nativeEvent),_.nativeEvent.defaultPrevented||(v.isFocusedToastEscapeKeyDownRef.current=!0,F()))}),onPointerDown:ve(t.onPointerDown,_=>{_.button===0&&(x.current={x:_.clientX,y:_.clientY})}),onPointerMove:ve(t.onPointerMove,_=>{if(!x.current)return;const G=_.clientX-x.current.x,$=_.clientY-x.current.y,H=!!w.current,N=["left","right"].includes(v.swipeDirection),E=["left","up"].includes(v.swipeDirection)?Math.min:Math.max,O=N?E(0,G):0,U=N?0:E(0,$),B=_.pointerType==="touch"?10:2,q={x:O,y:U},Q={originalEvent:_,delta:q};H?(w.current=q,$s(Cj,p,Q,{discrete:!1})):zu(q,v.swipeDirection,B)?(w.current=q,$s(Sj,u,Q,{discrete:!1}),_.target.setPointerCapture(_.pointerId)):(Math.abs(G)>B||Math.abs($)>B)&&(x.current=null)}),onPointerUp:ve(t.onPointerUp,_=>{const G=w.current,$=_.target;if($.hasPointerCapture(_.pointerId)&&$.releasePointerCapture(_.pointerId),w.current=null,x.current=null,G){const H=_.currentTarget,N={originalEvent:_,delta:G};zu(G,v.swipeDirection,v.swipeThreshold)?$s(Nj,h,N,{discrete:!0}):$s(Tj,g,N,{discrete:!0}),H.addEventListener("click",E=>E.preventDefault(),{once:!0})}})})})}),v.viewport)})]}):null}),Mj=t=>{const{__scopeToast:e,children:r,...o}=t,s=nl(ms,e),[i,l]=y.useState(!1),[a,c]=y.useState(!1);return Oj(()=>l(!0)),y.useEffect(()=>{const d=window.setTimeout(()=>c(!0),1e3);return()=>window.clearTimeout(d)},[]),a?null:n.jsx(jm,{asChild:!0,children:n.jsx(tl,{...o,children:i&&n.jsxs(n.Fragment,{children:[s.label," ",r]})})})},Aj="ToastTitle",Nm=y.forwardRef((t,e)=>{const{__scopeToast:r,...o}=t;return n.jsx(Je.div,{...o,ref:e})});Nm.displayName=Aj;var _j="ToastDescription",Em=y.forwardRef((t,e)=>{const{__scopeToast:r,...o}=t;return n.jsx(Je.div,{...o,ref:e})});Em.displayName=_j;var Pm="ToastAction",Rm=y.forwardRef((t,e)=>{const{altText:r,...o}=t;return r.trim()?n.jsx(Am,{altText:r,asChild:!0,children:n.jsx(sd,{...o,ref:e})}):(console.error(`Invalid prop \`altText\` supplied to \`${Pm}\`. Expected non-empty \`string\`.`),null)});Rm.displayName=Pm;var Mm="ToastClose",sd=y.forwardRef((t,e)=>{const{__scopeToast:r,...o}=t,s=Pj(Mm,r);return n.jsx(Am,{asChild:!0,children:n.jsx(Je.button,{type:"button",...o,ref:e,onClick:ve(t.onClick,s.onClose)})})});sd.displayName=Mm;var Am=y.forwardRef((t,e)=>{const{__scopeToast:r,altText:o,...s}=t;return n.jsx(Je.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":o||void 0,...s,ref:e})});function _m(t){const e=[];return Array.from(t.childNodes).forEach(o=>{if(o.nodeType===o.TEXT_NODE&&o.textContent&&e.push(o.textContent),Ij(o)){const s=o.ariaHidden||o.hidden||o.style.display==="none",i=o.dataset.radixToastAnnounceExclude==="";if(!s)if(i){const l=o.dataset.radixToastAnnounceAlt;l&&e.push(l)}else e.push(..._m(o))}}),e}function $s(t,e,r,{discrete:o}){const s=r.originalEvent.currentTarget,i=new CustomEvent(t,{bubbles:!0,cancelable:!0,detail:r});e&&s.addEventListener(t,e,{once:!0}),o?gm(s,i):s.dispatchEvent(i)}var zu=(t,e,r=0)=>{const o=Math.abs(t.x),s=Math.abs(t.y),i=o>s;return e==="left"||e==="right"?i&&o>r:!i&&s>r};function Oj(t=()=>{}){const e=On(t);In(()=>{let r=0,o=0;return r=window.requestAnimationFrame(()=>o=window.requestAnimationFrame(e)),()=>{window.cancelAnimationFrame(r),window.cancelAnimationFrame(o)}},[e])}function Ij(t){return t.nodeType===t.ELEMENT_NODE}function Lj(t){const e=[],r=document.createTreeWalker(t,NodeFilter.SHOW_ELEMENT,{acceptNode:o=>{const s=o.tagName==="INPUT"&&o.type==="hidden";return o.disabled||o.hidden||s?NodeFilter.FILTER_SKIP:o.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;r.nextNode();)e.push(r.currentNode);return e}function Vl(t){const e=document.activeElement;return t.some(r=>r===e?!0:(r.focus(),document.activeElement!==e))}var Dj=bm,Om=Sm,Im=Tm,Lm=Nm,Dm=Em,Bm=Rm,Fm=sd;function zm(t){var e,r,o="";if(typeof t=="string"||typeof t=="number")o+=t;else if(typeof t=="object")if(Array.isArray(t)){var s=t.length;for(e=0;e<s;e++)t[e]&&(r=zm(t[e]))&&(o&&(o+=" "),o+=r)}else for(r in t)t[r]&&(o&&(o+=" "),o+=r);return o}function $m(){for(var t,e,r=0,o="",s=arguments.length;r<s;r++)(t=arguments[r])&&(e=zm(t))&&(o&&(o+=" "),o+=e);return o}const $u=t=>typeof t=="boolean"?`${t}`:t===0?"0":t,Wu=$m,id=(t,e)=>r=>{var o;if((e==null?void 0:e.variants)==null)return Wu(t,r==null?void 0:r.class,r==null?void 0:r.className);const{variants:s,defaultVariants:i}=e,l=Object.keys(s).map(d=>{const u=r==null?void 0:r[d],p=i==null?void 0:i[d];if(u===null)return null;const g=$u(u)||$u(p);return s[d][g]}),a=r&&Object.entries(r).reduce((d,u)=>{let[p,g]=u;return g===void 0||(d[p]=g),d},{}),c=e==null||(o=e.compoundVariants)===null||o===void 0?void 0:o.reduce((d,u)=>{let{class:p,className:g,...h}=u;return Object.entries(h).every(b=>{let[v,j]=b;return Array.isArray(j)?j.includes({...i,...a}[v]):{...i,...a}[v]===j})?[...d,p,g]:d},[]);return Wu(t,l,c,r==null?void 0:r.class,r==null?void 0:r.className)};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bj=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Wm=(...t)=>t.filter((e,r,o)=>!!e&&e.trim()!==""&&o.indexOf(e)===r).join(" ").trim();/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Fj={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zj=y.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:o,className:s="",children:i,iconNode:l,...a},c)=>y.createElement("svg",{ref:c,...Fj,width:e,height:e,stroke:t,strokeWidth:o?Number(r)*24/Number(e):r,className:Wm("lucide",s),...a},[...l.map(([d,u])=>y.createElement(d,u)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ae=(t,e)=>{const r=y.forwardRef(({className:o,...s},i)=>y.createElement(zj,{ref:i,iconNode:e,className:Wm(`lucide-${Bj(t)}`,o),...s}));return r.displayName=`${t}`,r};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hu=Ae("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $j=Ae("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wj=Ae("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hm=Ae("CodeXml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hj=Ae("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uj=Ae("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Um=Ae("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vj=Ae("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jj=Ae("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qj=Ae("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vm=Ae("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kj=Ae("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jm=Ae("Share2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qm=Ae("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gj=Ae("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qj=Ae("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),ld="-",Yj=t=>{const e=Zj(t),{conflictingClassGroups:r,conflictingClassGroupModifiers:o}=t;return{getClassGroupId:l=>{const a=l.split(ld);return a[0]===""&&a.length!==1&&a.shift(),Km(a,e)||Xj(l)},getConflictingClassGroupIds:(l,a)=>{const c=r[l]||[];return a&&o[l]?[...c,...o[l]]:c}}},Km=(t,e)=>{var l;if(t.length===0)return e.classGroupId;const r=t[0],o=e.nextPart.get(r),s=o?Km(t.slice(1),o):void 0;if(s)return s;if(e.validators.length===0)return;const i=t.join(ld);return(l=e.validators.find(({validator:a})=>a(i)))==null?void 0:l.classGroupId},Uu=/^\[(.+)\]$/,Xj=t=>{if(Uu.test(t)){const e=Uu.exec(t)[1],r=e==null?void 0:e.substring(0,e.indexOf(":"));if(r)return"arbitrary.."+r}},Zj=t=>{const{theme:e,prefix:r}=t,o={nextPart:new Map,validators:[]};return tw(Object.entries(t.classGroups),r).forEach(([i,l])=>{Ja(l,o,i,e)}),o},Ja=(t,e,r,o)=>{t.forEach(s=>{if(typeof s=="string"){const i=s===""?e:Vu(e,s);i.classGroupId=r;return}if(typeof s=="function"){if(ew(s)){Ja(s(o),e,r,o);return}e.validators.push({validator:s,classGroupId:r});return}Object.entries(s).forEach(([i,l])=>{Ja(l,Vu(e,i),r,o)})})},Vu=(t,e)=>{let r=t;return e.split(ld).forEach(o=>{r.nextPart.has(o)||r.nextPart.set(o,{nextPart:new Map,validators:[]}),r=r.nextPart.get(o)}),r},ew=t=>t.isThemeGetter,tw=(t,e)=>e?t.map(([r,o])=>{const s=o.map(i=>typeof i=="string"?e+i:typeof i=="object"?Object.fromEntries(Object.entries(i).map(([l,a])=>[e+l,a])):i);return[r,s]}):t,nw=t=>{if(t<1)return{get:()=>{},set:()=>{}};let e=0,r=new Map,o=new Map;const s=(i,l)=>{r.set(i,l),e++,e>t&&(e=0,o=r,r=new Map)};return{get(i){let l=r.get(i);if(l!==void 0)return l;if((l=o.get(i))!==void 0)return s(i,l),l},set(i,l){r.has(i)?r.set(i,l):s(i,l)}}},Gm="!",rw=t=>{const{separator:e,experimentalParseClassName:r}=t,o=e.length===1,s=e[0],i=e.length,l=a=>{const c=[];let d=0,u=0,p;for(let j=0;j<a.length;j++){let m=a[j];if(d===0){if(m===s&&(o||a.slice(j,j+i)===e)){c.push(a.slice(u,j)),u=j+i;continue}if(m==="/"){p=j;continue}}m==="["?d++:m==="]"&&d--}const g=c.length===0?a:a.substring(u),h=g.startsWith(Gm),b=h?g.substring(1):g,v=p&&p>u?p-u:void 0;return{modifiers:c,hasImportantModifier:h,baseClassName:b,maybePostfixModifierPosition:v}};return r?a=>r({className:a,parseClassName:l}):l},ow=t=>{if(t.length<=1)return t;const e=[];let r=[];return t.forEach(o=>{o[0]==="["?(e.push(...r.sort(),o),r=[]):r.push(o)}),e.push(...r.sort()),e},sw=t=>({cache:nw(t.cacheSize),parseClassName:rw(t),...Yj(t)}),iw=/\s+/,lw=(t,e)=>{const{parseClassName:r,getClassGroupId:o,getConflictingClassGroupIds:s}=e,i=[],l=t.trim().split(iw);let a="";for(let c=l.length-1;c>=0;c-=1){const d=l[c],{modifiers:u,hasImportantModifier:p,baseClassName:g,maybePostfixModifierPosition:h}=r(d);let b=!!h,v=o(b?g.substring(0,h):g);if(!v){if(!b){a=d+(a.length>0?" "+a:a);continue}if(v=o(g),!v){a=d+(a.length>0?" "+a:a);continue}b=!1}const j=ow(u).join(":"),m=p?j+Gm:j,f=m+v;if(i.includes(f))continue;i.push(f);const x=s(v,b);for(let w=0;w<x.length;++w){const k=x[w];i.push(m+k)}a=d+(a.length>0?" "+a:a)}return a};function aw(){let t=0,e,r,o="";for(;t<arguments.length;)(e=arguments[t++])&&(r=Qm(e))&&(o&&(o+=" "),o+=r);return o}const Qm=t=>{if(typeof t=="string")return t;let e,r="";for(let o=0;o<t.length;o++)t[o]&&(e=Qm(t[o]))&&(r&&(r+=" "),r+=e);return r};function cw(t,...e){let r,o,s,i=l;function l(c){const d=e.reduce((u,p)=>p(u),t());return r=sw(d),o=r.cache.get,s=r.cache.set,i=a,a(c)}function a(c){const d=o(c);if(d)return d;const u=lw(c,r);return s(c,u),u}return function(){return i(aw.apply(null,arguments))}}const re=t=>{const e=r=>r[t]||[];return e.isThemeGetter=!0,e},Ym=/^\[(?:([a-z-]+):)?(.+)\]$/i,dw=/^\d+\/\d+$/,uw=new Set(["px","full","screen"]),hw=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,pw=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,fw=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,mw=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,gw=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Bt=t=>Br(t)||uw.has(t)||dw.test(t),ln=t=>io(t,"length",Sw),Br=t=>!!t&&!Number.isNaN(Number(t)),Jl=t=>io(t,"number",Br),wo=t=>!!t&&Number.isInteger(Number(t)),xw=t=>t.endsWith("%")&&Br(t.slice(0,-1)),V=t=>Ym.test(t),an=t=>hw.test(t),vw=new Set(["length","size","percentage"]),yw=t=>io(t,vw,Xm),jw=t=>io(t,"position",Xm),ww=new Set(["image","url"]),bw=t=>io(t,ww,Tw),kw=t=>io(t,"",Cw),bo=()=>!0,io=(t,e,r)=>{const o=Ym.exec(t);return o?o[1]?typeof e=="string"?o[1]===e:e.has(o[1]):r(o[2]):!1},Sw=t=>pw.test(t)&&!fw.test(t),Xm=()=>!1,Cw=t=>mw.test(t),Tw=t=>gw.test(t),Nw=()=>{const t=re("colors"),e=re("spacing"),r=re("blur"),o=re("brightness"),s=re("borderColor"),i=re("borderRadius"),l=re("borderSpacing"),a=re("borderWidth"),c=re("contrast"),d=re("grayscale"),u=re("hueRotate"),p=re("invert"),g=re("gap"),h=re("gradientColorStops"),b=re("gradientColorStopPositions"),v=re("inset"),j=re("margin"),m=re("opacity"),f=re("padding"),x=re("saturate"),w=re("scale"),k=re("sepia"),S=re("skew"),C=re("space"),P=re("translate"),D=()=>["auto","contain","none"],M=()=>["auto","hidden","clip","visible","scroll"],F=()=>["auto",V,e],L=()=>[V,e],J=()=>["",Bt,ln],_=()=>["auto",Br,V],G=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],$=()=>["solid","dashed","dotted","double","none"],H=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],N=()=>["start","end","center","between","around","evenly","stretch"],E=()=>["","0",V],O=()=>["auto","avoid","all","avoid-page","page","left","right","column"],U=()=>[Br,V];return{cacheSize:500,separator:":",theme:{colors:[bo],spacing:[Bt,ln],blur:["none","",an,V],brightness:U(),borderColor:[t],borderRadius:["none","","full",an,V],borderSpacing:L(),borderWidth:J(),contrast:U(),grayscale:E(),hueRotate:U(),invert:E(),gap:L(),gradientColorStops:[t],gradientColorStopPositions:[xw,ln],inset:F(),margin:F(),opacity:U(),padding:L(),saturate:U(),scale:U(),sepia:E(),skew:U(),space:L(),translate:L()},classGroups:{aspect:[{aspect:["auto","square","video",V]}],container:["container"],columns:[{columns:[an]}],"break-after":[{"break-after":O()}],"break-before":[{"break-before":O()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...G(),V]}],overflow:[{overflow:M()}],"overflow-x":[{"overflow-x":M()}],"overflow-y":[{"overflow-y":M()}],overscroll:[{overscroll:D()}],"overscroll-x":[{"overscroll-x":D()}],"overscroll-y":[{"overscroll-y":D()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[v]}],"inset-x":[{"inset-x":[v]}],"inset-y":[{"inset-y":[v]}],start:[{start:[v]}],end:[{end:[v]}],top:[{top:[v]}],right:[{right:[v]}],bottom:[{bottom:[v]}],left:[{left:[v]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",wo,V]}],basis:[{basis:F()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",V]}],grow:[{grow:E()}],shrink:[{shrink:E()}],order:[{order:["first","last","none",wo,V]}],"grid-cols":[{"grid-cols":[bo]}],"col-start-end":[{col:["auto",{span:["full",wo,V]},V]}],"col-start":[{"col-start":_()}],"col-end":[{"col-end":_()}],"grid-rows":[{"grid-rows":[bo]}],"row-start-end":[{row:["auto",{span:[wo,V]},V]}],"row-start":[{"row-start":_()}],"row-end":[{"row-end":_()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",V]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",V]}],gap:[{gap:[g]}],"gap-x":[{"gap-x":[g]}],"gap-y":[{"gap-y":[g]}],"justify-content":[{justify:["normal",...N()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...N(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...N(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[f]}],px:[{px:[f]}],py:[{py:[f]}],ps:[{ps:[f]}],pe:[{pe:[f]}],pt:[{pt:[f]}],pr:[{pr:[f]}],pb:[{pb:[f]}],pl:[{pl:[f]}],m:[{m:[j]}],mx:[{mx:[j]}],my:[{my:[j]}],ms:[{ms:[j]}],me:[{me:[j]}],mt:[{mt:[j]}],mr:[{mr:[j]}],mb:[{mb:[j]}],ml:[{ml:[j]}],"space-x":[{"space-x":[C]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[C]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",V,e]}],"min-w":[{"min-w":[V,e,"min","max","fit"]}],"max-w":[{"max-w":[V,e,"none","full","min","max","fit","prose",{screen:[an]},an]}],h:[{h:[V,e,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[V,e,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[V,e,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[V,e,"auto","min","max","fit"]}],"font-size":[{text:["base",an,ln]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",Jl]}],"font-family":[{font:[bo]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",V]}],"line-clamp":[{"line-clamp":["none",Br,Jl]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Bt,V]}],"list-image":[{"list-image":["none",V]}],"list-style-type":[{list:["none","disc","decimal",V]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[t]}],"placeholder-opacity":[{"placeholder-opacity":[m]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[t]}],"text-opacity":[{"text-opacity":[m]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...$(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",Bt,ln]}],"underline-offset":[{"underline-offset":["auto",Bt,V]}],"text-decoration-color":[{decoration:[t]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:L()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",V]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",V]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[m]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...G(),jw]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",yw]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},bw]}],"bg-color":[{bg:[t]}],"gradient-from-pos":[{from:[b]}],"gradient-via-pos":[{via:[b]}],"gradient-to-pos":[{to:[b]}],"gradient-from":[{from:[h]}],"gradient-via":[{via:[h]}],"gradient-to":[{to:[h]}],rounded:[{rounded:[i]}],"rounded-s":[{"rounded-s":[i]}],"rounded-e":[{"rounded-e":[i]}],"rounded-t":[{"rounded-t":[i]}],"rounded-r":[{"rounded-r":[i]}],"rounded-b":[{"rounded-b":[i]}],"rounded-l":[{"rounded-l":[i]}],"rounded-ss":[{"rounded-ss":[i]}],"rounded-se":[{"rounded-se":[i]}],"rounded-ee":[{"rounded-ee":[i]}],"rounded-es":[{"rounded-es":[i]}],"rounded-tl":[{"rounded-tl":[i]}],"rounded-tr":[{"rounded-tr":[i]}],"rounded-br":[{"rounded-br":[i]}],"rounded-bl":[{"rounded-bl":[i]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[m]}],"border-style":[{border:[...$(),"hidden"]}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[m]}],"divide-style":[{divide:$()}],"border-color":[{border:[s]}],"border-color-x":[{"border-x":[s]}],"border-color-y":[{"border-y":[s]}],"border-color-s":[{"border-s":[s]}],"border-color-e":[{"border-e":[s]}],"border-color-t":[{"border-t":[s]}],"border-color-r":[{"border-r":[s]}],"border-color-b":[{"border-b":[s]}],"border-color-l":[{"border-l":[s]}],"divide-color":[{divide:[s]}],"outline-style":[{outline:["",...$()]}],"outline-offset":[{"outline-offset":[Bt,V]}],"outline-w":[{outline:[Bt,ln]}],"outline-color":[{outline:[t]}],"ring-w":[{ring:J()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[t]}],"ring-opacity":[{"ring-opacity":[m]}],"ring-offset-w":[{"ring-offset":[Bt,ln]}],"ring-offset-color":[{"ring-offset":[t]}],shadow:[{shadow:["","inner","none",an,kw]}],"shadow-color":[{shadow:[bo]}],opacity:[{opacity:[m]}],"mix-blend":[{"mix-blend":[...H(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":H()}],filter:[{filter:["","none"]}],blur:[{blur:[r]}],brightness:[{brightness:[o]}],contrast:[{contrast:[c]}],"drop-shadow":[{"drop-shadow":["","none",an,V]}],grayscale:[{grayscale:[d]}],"hue-rotate":[{"hue-rotate":[u]}],invert:[{invert:[p]}],saturate:[{saturate:[x]}],sepia:[{sepia:[k]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[r]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[c]}],"backdrop-grayscale":[{"backdrop-grayscale":[d]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[u]}],"backdrop-invert":[{"backdrop-invert":[p]}],"backdrop-opacity":[{"backdrop-opacity":[m]}],"backdrop-saturate":[{"backdrop-saturate":[x]}],"backdrop-sepia":[{"backdrop-sepia":[k]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[l]}],"border-spacing-x":[{"border-spacing-x":[l]}],"border-spacing-y":[{"border-spacing-y":[l]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",V]}],duration:[{duration:U()}],ease:[{ease:["linear","in","out","in-out",V]}],delay:[{delay:U()}],animate:[{animate:["none","spin","ping","pulse","bounce",V]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[w]}],"scale-x":[{"scale-x":[w]}],"scale-y":[{"scale-y":[w]}],rotate:[{rotate:[wo,V]}],"translate-x":[{"translate-x":[P]}],"translate-y":[{"translate-y":[P]}],"skew-x":[{"skew-x":[S]}],"skew-y":[{"skew-y":[S]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",V]}],accent:[{accent:["auto",t]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",V]}],"caret-color":[{caret:[t]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":L()}],"scroll-mx":[{"scroll-mx":L()}],"scroll-my":[{"scroll-my":L()}],"scroll-ms":[{"scroll-ms":L()}],"scroll-me":[{"scroll-me":L()}],"scroll-mt":[{"scroll-mt":L()}],"scroll-mr":[{"scroll-mr":L()}],"scroll-mb":[{"scroll-mb":L()}],"scroll-ml":[{"scroll-ml":L()}],"scroll-p":[{"scroll-p":L()}],"scroll-px":[{"scroll-px":L()}],"scroll-py":[{"scroll-py":L()}],"scroll-ps":[{"scroll-ps":L()}],"scroll-pe":[{"scroll-pe":L()}],"scroll-pt":[{"scroll-pt":L()}],"scroll-pr":[{"scroll-pr":L()}],"scroll-pb":[{"scroll-pb":L()}],"scroll-pl":[{"scroll-pl":L()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",V]}],fill:[{fill:[t,"none"]}],"stroke-w":[{stroke:[Bt,ln,Jl]}],stroke:[{stroke:[t,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},Ew=cw(Nw);function Fe(...t){return Ew($m(t))}const Pw=Dj,Zm=y.forwardRef(({className:t,...e},r)=>n.jsx(Om,{ref:r,className:Fe("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",t),...e}));Zm.displayName=Om.displayName;const Rw=id("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),eg=y.forwardRef(({className:t,variant:e,...r},o)=>n.jsx(Im,{ref:o,className:Fe(Rw({variant:e}),t),...r}));eg.displayName=Im.displayName;const Mw=y.forwardRef(({className:t,...e},r)=>n.jsx(Bm,{ref:r,className:Fe("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",t),...e}));Mw.displayName=Bm.displayName;const tg=y.forwardRef(({className:t,...e},r)=>n.jsx(Fm,{ref:r,className:Fe("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",t),"toast-close":"",...e,children:n.jsx(Gj,{className:"h-4 w-4"})}));tg.displayName=Fm.displayName;const ng=y.forwardRef(({className:t,...e},r)=>n.jsx(Lm,{ref:r,className:Fe("text-sm font-semibold",t),...e}));ng.displayName=Lm.displayName;const rg=y.forwardRef(({className:t,...e},r)=>n.jsx(Dm,{ref:r,className:Fe("text-sm opacity-90",t),...e}));rg.displayName=Dm.displayName;function Aw(){const{toasts:t}=Uy();return n.jsxs(Pw,{children:[t.map(function({id:e,title:r,description:o,action:s,...i}){return n.jsxs(eg,{...i,children:[n.jsxs("div",{className:"grid gap-1",children:[r&&n.jsx(ng,{children:r}),o&&n.jsx(rg,{children:o})]}),s,n.jsx(tg,{})]},e)}),n.jsx(Zm,{})]})}var Ju=["light","dark"],_w="(prefers-color-scheme: dark)",Ow=y.createContext(void 0),Iw={setTheme:t=>{},themes:[]},Lw=()=>{var t;return(t=y.useContext(Ow))!=null?t:Iw};y.memo(({forcedTheme:t,storageKey:e,attribute:r,enableSystem:o,enableColorScheme:s,defaultTheme:i,value:l,attrs:a,nonce:c})=>{let d=i==="system",u=r==="class"?`var d=document.documentElement,c=d.classList;${`c.remove(${a.map(b=>`'${b}'`).join(",")})`};`:`var d=document.documentElement,n='${r}',s='setAttribute';`,p=s?Ju.includes(i)&&i?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${i}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",g=(b,v=!1,j=!0)=>{let m=l?l[b]:b,f=v?b+"|| ''":`'${m}'`,x="";return s&&j&&!v&&Ju.includes(b)&&(x+=`d.style.colorScheme = '${b}';`),r==="class"?v||m?x+=`c.add(${f})`:x+="null":m&&(x+=`d[s](n,${f})`),x},h=t?`!function(){${u}${g(t)}}()`:o?`!function(){try{${u}var e=localStorage.getItem('${e}');if('system'===e||(!e&&${d})){var t='${_w}',m=window.matchMedia(t);if(m.media!==t||m.matches){${g("dark")}}else{${g("light")}}}else if(e){${l?`var x=${JSON.stringify(l)};`:""}${g(l?"x[e]":"e",!0)}}${d?"":"else{"+g(i,!1,!1)+"}"}${p}}catch(e){}}()`:`!function(){try{${u}var e=localStorage.getItem('${e}');if(e){${l?`var x=${JSON.stringify(l)};`:""}${g(l?"x[e]":"e",!0)}}else{${g(i,!1,!1)};}${p}}catch(t){}}();`;return y.createElement("script",{nonce:c,dangerouslySetInnerHTML:{__html:h}})});var Dw=t=>{switch(t){case"success":return zw;case"info":return Ww;case"warning":return $w;case"error":return Hw;default:return null}},Bw=Array(12).fill(0),Fw=({visible:t,className:e})=>A.createElement("div",{className:["sonner-loading-wrapper",e].filter(Boolean).join(" "),"data-visible":t},A.createElement("div",{className:"sonner-spinner"},Bw.map((r,o)=>A.createElement("div",{className:"sonner-loading-bar",key:`spinner-bar-${o}`})))),zw=A.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},A.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})),$w=A.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",height:"20",width:"20"},A.createElement("path",{fillRule:"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"})),Ww=A.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},A.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",clipRule:"evenodd"})),Hw=A.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},A.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})),Uw=A.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},A.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),A.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"})),Vw=()=>{let[t,e]=A.useState(document.hidden);return A.useEffect(()=>{let r=()=>{e(document.hidden)};return document.addEventListener("visibilitychange",r),()=>window.removeEventListener("visibilitychange",r)},[]),t},qa=1,Jw=class{constructor(){this.subscribe=t=>(this.subscribers.push(t),()=>{let e=this.subscribers.indexOf(t);this.subscribers.splice(e,1)}),this.publish=t=>{this.subscribers.forEach(e=>e(t))},this.addToast=t=>{this.publish(t),this.toasts=[...this.toasts,t]},this.create=t=>{var e;let{message:r,...o}=t,s=typeof(t==null?void 0:t.id)=="number"||((e=t.id)==null?void 0:e.length)>0?t.id:qa++,i=this.toasts.find(a=>a.id===s),l=t.dismissible===void 0?!0:t.dismissible;return this.dismissedToasts.has(s)&&this.dismissedToasts.delete(s),i?this.toasts=this.toasts.map(a=>a.id===s?(this.publish({...a,...t,id:s,title:r}),{...a,...t,id:s,dismissible:l,title:r}):a):this.addToast({title:r,...o,dismissible:l,id:s}),s},this.dismiss=t=>(this.dismissedToasts.add(t),t||this.toasts.forEach(e=>{this.subscribers.forEach(r=>r({id:e.id,dismiss:!0}))}),this.subscribers.forEach(e=>e({id:t,dismiss:!0})),t),this.message=(t,e)=>this.create({...e,message:t}),this.error=(t,e)=>this.create({...e,message:t,type:"error"}),this.success=(t,e)=>this.create({...e,type:"success",message:t}),this.info=(t,e)=>this.create({...e,type:"info",message:t}),this.warning=(t,e)=>this.create({...e,type:"warning",message:t}),this.loading=(t,e)=>this.create({...e,type:"loading",message:t}),this.promise=(t,e)=>{if(!e)return;let r;e.loading!==void 0&&(r=this.create({...e,promise:t,type:"loading",message:e.loading,description:typeof e.description!="function"?e.description:void 0}));let o=t instanceof Promise?t:t(),s=r!==void 0,i,l=o.then(async c=>{if(i=["resolve",c],A.isValidElement(c))s=!1,this.create({id:r,type:"default",message:c});else if(Kw(c)&&!c.ok){s=!1;let d=typeof e.error=="function"?await e.error(`HTTP error! status: ${c.status}`):e.error,u=typeof e.description=="function"?await e.description(`HTTP error! status: ${c.status}`):e.description;this.create({id:r,type:"error",message:d,description:u})}else if(e.success!==void 0){s=!1;let d=typeof e.success=="function"?await e.success(c):e.success,u=typeof e.description=="function"?await e.description(c):e.description;this.create({id:r,type:"success",message:d,description:u})}}).catch(async c=>{if(i=["reject",c],e.error!==void 0){s=!1;let d=typeof e.error=="function"?await e.error(c):e.error,u=typeof e.description=="function"?await e.description(c):e.description;this.create({id:r,type:"error",message:d,description:u})}}).finally(()=>{var c;s&&(this.dismiss(r),r=void 0),(c=e.finally)==null||c.call(e)}),a=()=>new Promise((c,d)=>l.then(()=>i[0]==="reject"?d(i[1]):c(i[1])).catch(d));return typeof r!="string"&&typeof r!="number"?{unwrap:a}:Object.assign(r,{unwrap:a})},this.custom=(t,e)=>{let r=(e==null?void 0:e.id)||qa++;return this.create({jsx:t(r),id:r,...e}),r},this.getActiveToasts=()=>this.toasts.filter(t=>!this.dismissedToasts.has(t.id)),this.subscribers=[],this.toasts=[],this.dismissedToasts=new Set}},ze=new Jw,qw=(t,e)=>{let r=(e==null?void 0:e.id)||qa++;return ze.addToast({title:t,...e,id:r}),r},Kw=t=>t&&typeof t=="object"&&"ok"in t&&typeof t.ok=="boolean"&&"status"in t&&typeof t.status=="number",Gw=qw,Qw=()=>ze.toasts,Yw=()=>ze.getActiveToasts();Object.assign(Gw,{success:ze.success,info:ze.info,warning:ze.warning,error:ze.error,custom:ze.custom,message:ze.message,promise:ze.promise,dismiss:ze.dismiss,loading:ze.loading},{getHistory:Qw,getToasts:Yw});function Xw(t,{insertAt:e}={}){if(typeof document>"u")return;let r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",e==="top"&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=t:o.appendChild(document.createTextNode(t))}Xw(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);function Ws(t){return t.label!==void 0}var Zw=3,eb="32px",tb="16px",qu=4e3,nb=356,rb=14,ob=20,sb=200;function pt(...t){return t.filter(Boolean).join(" ")}function ib(t){let[e,r]=t.split("-"),o=[];return e&&o.push(e),r&&o.push(r),o}var lb=t=>{var e,r,o,s,i,l,a,c,d,u,p;let{invert:g,toast:h,unstyled:b,interacting:v,setHeights:j,visibleToasts:m,heights:f,index:x,toasts:w,expanded:k,removeToast:S,defaultRichColors:C,closeButton:P,style:D,cancelButtonStyle:M,actionButtonStyle:F,className:L="",descriptionClassName:J="",duration:_,position:G,gap:$,loadingIcon:H,expandByDefault:N,classNames:E,icons:O,closeButtonAriaLabel:U="Close toast",pauseWhenPageIsHidden:B}=t,[q,Q]=A.useState(null),[fe,Te]=A.useState(null),[Z,pr]=A.useState(!1),[Zt,Wn]=A.useState(!1),[en,fr]=A.useState(!1),[tn,ys]=A.useState(!1),[hl,js]=A.useState(!1),[pl,uo]=A.useState(0),[mr,jd]=A.useState(0),ho=A.useRef(h.duration||_||qu),wd=A.useRef(null),Hn=A.useRef(null),ox=x===0,sx=x+1<=m,tt=h.type,gr=h.dismissible!==!1,ix=h.className||"",lx=h.descriptionClassName||"",ws=A.useMemo(()=>f.findIndex(W=>W.toastId===h.id)||0,[f,h.id]),ax=A.useMemo(()=>{var W;return(W=h.closeButton)!=null?W:P},[h.closeButton,P]),bd=A.useMemo(()=>h.duration||_||qu,[h.duration,_]),fl=A.useRef(0),xr=A.useRef(0),kd=A.useRef(0),vr=A.useRef(null),[cx,dx]=G.split("-"),Sd=A.useMemo(()=>f.reduce((W,te,ie)=>ie>=ws?W:W+te.height,0),[f,ws]),Cd=Vw(),ux=h.invert||g,ml=tt==="loading";xr.current=A.useMemo(()=>ws*$+Sd,[ws,Sd]),A.useEffect(()=>{ho.current=bd},[bd]),A.useEffect(()=>{pr(!0)},[]),A.useEffect(()=>{let W=Hn.current;if(W){let te=W.getBoundingClientRect().height;return jd(te),j(ie=>[{toastId:h.id,height:te,position:h.position},...ie]),()=>j(ie=>ie.filter(ct=>ct.toastId!==h.id))}},[j,h.id]),A.useLayoutEffect(()=>{if(!Z)return;let W=Hn.current,te=W.style.height;W.style.height="auto";let ie=W.getBoundingClientRect().height;W.style.height=te,jd(ie),j(ct=>ct.find(dt=>dt.toastId===h.id)?ct.map(dt=>dt.toastId===h.id?{...dt,height:ie}:dt):[{toastId:h.id,height:ie,position:h.position},...ct])},[Z,h.title,h.description,j,h.id]);let nn=A.useCallback(()=>{Wn(!0),uo(xr.current),j(W=>W.filter(te=>te.toastId!==h.id)),setTimeout(()=>{S(h)},sb)},[h,S,j,xr]);A.useEffect(()=>{if(h.promise&&tt==="loading"||h.duration===1/0||h.type==="loading")return;let W;return k||v||B&&Cd?(()=>{if(kd.current<fl.current){let te=new Date().getTime()-fl.current;ho.current=ho.current-te}kd.current=new Date().getTime()})():ho.current!==1/0&&(fl.current=new Date().getTime(),W=setTimeout(()=>{var te;(te=h.onAutoClose)==null||te.call(h,h),nn()},ho.current)),()=>clearTimeout(W)},[k,v,h,tt,B,Cd,nn]),A.useEffect(()=>{h.delete&&nn()},[nn,h.delete]);function hx(){var W,te,ie;return O!=null&&O.loading?A.createElement("div",{className:pt(E==null?void 0:E.loader,(W=h==null?void 0:h.classNames)==null?void 0:W.loader,"sonner-loader"),"data-visible":tt==="loading"},O.loading):H?A.createElement("div",{className:pt(E==null?void 0:E.loader,(te=h==null?void 0:h.classNames)==null?void 0:te.loader,"sonner-loader"),"data-visible":tt==="loading"},H):A.createElement(Fw,{className:pt(E==null?void 0:E.loader,(ie=h==null?void 0:h.classNames)==null?void 0:ie.loader),visible:tt==="loading"})}return A.createElement("li",{tabIndex:0,ref:Hn,className:pt(L,ix,E==null?void 0:E.toast,(e=h==null?void 0:h.classNames)==null?void 0:e.toast,E==null?void 0:E.default,E==null?void 0:E[tt],(r=h==null?void 0:h.classNames)==null?void 0:r[tt]),"data-sonner-toast":"","data-rich-colors":(o=h.richColors)!=null?o:C,"data-styled":!(h.jsx||h.unstyled||b),"data-mounted":Z,"data-promise":!!h.promise,"data-swiped":hl,"data-removed":Zt,"data-visible":sx,"data-y-position":cx,"data-x-position":dx,"data-index":x,"data-front":ox,"data-swiping":en,"data-dismissible":gr,"data-type":tt,"data-invert":ux,"data-swipe-out":tn,"data-swipe-direction":fe,"data-expanded":!!(k||N&&Z),style:{"--index":x,"--toasts-before":x,"--z-index":w.length-x,"--offset":`${Zt?pl:xr.current}px`,"--initial-height":N?"auto":`${mr}px`,...D,...h.style},onDragEnd:()=>{fr(!1),Q(null),vr.current=null},onPointerDown:W=>{ml||!gr||(wd.current=new Date,uo(xr.current),W.target.setPointerCapture(W.pointerId),W.target.tagName!=="BUTTON"&&(fr(!0),vr.current={x:W.clientX,y:W.clientY}))},onPointerUp:()=>{var W,te,ie,ct;if(tn||!gr)return;vr.current=null;let dt=Number(((W=Hn.current)==null?void 0:W.style.getPropertyValue("--swipe-amount-x").replace("px",""))||0),rn=Number(((te=Hn.current)==null?void 0:te.style.getPropertyValue("--swipe-amount-y").replace("px",""))||0),Un=new Date().getTime()-((ie=wd.current)==null?void 0:ie.getTime()),ut=q==="x"?dt:rn,on=Math.abs(ut)/Un;if(Math.abs(ut)>=ob||on>.11){uo(xr.current),(ct=h.onDismiss)==null||ct.call(h,h),Te(q==="x"?dt>0?"right":"left":rn>0?"down":"up"),nn(),ys(!0),js(!1);return}fr(!1),Q(null)},onPointerMove:W=>{var te,ie,ct,dt;if(!vr.current||!gr||((te=window.getSelection())==null?void 0:te.toString().length)>0)return;let rn=W.clientY-vr.current.y,Un=W.clientX-vr.current.x,ut=(ie=t.swipeDirections)!=null?ie:ib(G);!q&&(Math.abs(Un)>1||Math.abs(rn)>1)&&Q(Math.abs(Un)>Math.abs(rn)?"x":"y");let on={x:0,y:0};q==="y"?(ut.includes("top")||ut.includes("bottom"))&&(ut.includes("top")&&rn<0||ut.includes("bottom")&&rn>0)&&(on.y=rn):q==="x"&&(ut.includes("left")||ut.includes("right"))&&(ut.includes("left")&&Un<0||ut.includes("right")&&Un>0)&&(on.x=Un),(Math.abs(on.x)>0||Math.abs(on.y)>0)&&js(!0),(ct=Hn.current)==null||ct.style.setProperty("--swipe-amount-x",`${on.x}px`),(dt=Hn.current)==null||dt.style.setProperty("--swipe-amount-y",`${on.y}px`)}},ax&&!h.jsx?A.createElement("button",{"aria-label":U,"data-disabled":ml,"data-close-button":!0,onClick:ml||!gr?()=>{}:()=>{var W;nn(),(W=h.onDismiss)==null||W.call(h,h)},className:pt(E==null?void 0:E.closeButton,(s=h==null?void 0:h.classNames)==null?void 0:s.closeButton)},(i=O==null?void 0:O.close)!=null?i:Uw):null,h.jsx||y.isValidElement(h.title)?h.jsx?h.jsx:typeof h.title=="function"?h.title():h.title:A.createElement(A.Fragment,null,tt||h.icon||h.promise?A.createElement("div",{"data-icon":"",className:pt(E==null?void 0:E.icon,(l=h==null?void 0:h.classNames)==null?void 0:l.icon)},h.promise||h.type==="loading"&&!h.icon?h.icon||hx():null,h.type!=="loading"?h.icon||(O==null?void 0:O[tt])||Dw(tt):null):null,A.createElement("div",{"data-content":"",className:pt(E==null?void 0:E.content,(a=h==null?void 0:h.classNames)==null?void 0:a.content)},A.createElement("div",{"data-title":"",className:pt(E==null?void 0:E.title,(c=h==null?void 0:h.classNames)==null?void 0:c.title)},typeof h.title=="function"?h.title():h.title),h.description?A.createElement("div",{"data-description":"",className:pt(J,lx,E==null?void 0:E.description,(d=h==null?void 0:h.classNames)==null?void 0:d.description)},typeof h.description=="function"?h.description():h.description):null),y.isValidElement(h.cancel)?h.cancel:h.cancel&&Ws(h.cancel)?A.createElement("button",{"data-button":!0,"data-cancel":!0,style:h.cancelButtonStyle||M,onClick:W=>{var te,ie;Ws(h.cancel)&&gr&&((ie=(te=h.cancel).onClick)==null||ie.call(te,W),nn())},className:pt(E==null?void 0:E.cancelButton,(u=h==null?void 0:h.classNames)==null?void 0:u.cancelButton)},h.cancel.label):null,y.isValidElement(h.action)?h.action:h.action&&Ws(h.action)?A.createElement("button",{"data-button":!0,"data-action":!0,style:h.actionButtonStyle||F,onClick:W=>{var te,ie;Ws(h.action)&&((ie=(te=h.action).onClick)==null||ie.call(te,W),!W.defaultPrevented&&nn())},className:pt(E==null?void 0:E.actionButton,(p=h==null?void 0:h.classNames)==null?void 0:p.actionButton)},h.action.label):null))};function Ku(){if(typeof window>"u"||typeof document>"u")return"ltr";let t=document.documentElement.getAttribute("dir");return t==="auto"||!t?window.getComputedStyle(document.documentElement).direction:t}function ab(t,e){let r={};return[t,e].forEach((o,s)=>{let i=s===1,l=i?"--mobile-offset":"--offset",a=i?tb:eb;function c(d){["top","right","bottom","left"].forEach(u=>{r[`${l}-${u}`]=typeof d=="number"?`${d}px`:d})}typeof o=="number"||typeof o=="string"?c(o):typeof o=="object"?["top","right","bottom","left"].forEach(d=>{o[d]===void 0?r[`${l}-${d}`]=a:r[`${l}-${d}`]=typeof o[d]=="number"?`${o[d]}px`:o[d]}):c(a)}),r}var cb=y.forwardRef(function(t,e){let{invert:r,position:o="bottom-right",hotkey:s=["altKey","KeyT"],expand:i,closeButton:l,className:a,offset:c,mobileOffset:d,theme:u="light",richColors:p,duration:g,style:h,visibleToasts:b=Zw,toastOptions:v,dir:j=Ku(),gap:m=rb,loadingIcon:f,icons:x,containerAriaLabel:w="Notifications",pauseWhenPageIsHidden:k}=t,[S,C]=A.useState([]),P=A.useMemo(()=>Array.from(new Set([o].concat(S.filter(B=>B.position).map(B=>B.position)))),[S,o]),[D,M]=A.useState([]),[F,L]=A.useState(!1),[J,_]=A.useState(!1),[G,$]=A.useState(u!=="system"?u:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),H=A.useRef(null),N=s.join("+").replace(/Key/g,"").replace(/Digit/g,""),E=A.useRef(null),O=A.useRef(!1),U=A.useCallback(B=>{C(q=>{var Q;return(Q=q.find(fe=>fe.id===B.id))!=null&&Q.delete||ze.dismiss(B.id),q.filter(({id:fe})=>fe!==B.id)})},[]);return A.useEffect(()=>ze.subscribe(B=>{if(B.dismiss){C(q=>q.map(Q=>Q.id===B.id?{...Q,delete:!0}:Q));return}setTimeout(()=>{hm.flushSync(()=>{C(q=>{let Q=q.findIndex(fe=>fe.id===B.id);return Q!==-1?[...q.slice(0,Q),{...q[Q],...B},...q.slice(Q+1)]:[B,...q]})})})}),[]),A.useEffect(()=>{if(u!=="system"){$(u);return}if(u==="system"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?$("dark"):$("light")),typeof window>"u")return;let B=window.matchMedia("(prefers-color-scheme: dark)");try{B.addEventListener("change",({matches:q})=>{$(q?"dark":"light")})}catch{B.addListener(({matches:Q})=>{try{$(Q?"dark":"light")}catch(fe){console.error(fe)}})}},[u]),A.useEffect(()=>{S.length<=1&&L(!1)},[S]),A.useEffect(()=>{let B=q=>{var Q,fe;s.every(Te=>q[Te]||q.code===Te)&&(L(!0),(Q=H.current)==null||Q.focus()),q.code==="Escape"&&(document.activeElement===H.current||(fe=H.current)!=null&&fe.contains(document.activeElement))&&L(!1)};return document.addEventListener("keydown",B),()=>document.removeEventListener("keydown",B)},[s]),A.useEffect(()=>{if(H.current)return()=>{E.current&&(E.current.focus({preventScroll:!0}),E.current=null,O.current=!1)}},[H.current]),A.createElement("section",{ref:e,"aria-label":`${w} ${N}`,tabIndex:-1,"aria-live":"polite","aria-relevant":"additions text","aria-atomic":"false",suppressHydrationWarning:!0},P.map((B,q)=>{var Q;let[fe,Te]=B.split("-");return S.length?A.createElement("ol",{key:B,dir:j==="auto"?Ku():j,tabIndex:-1,ref:H,className:a,"data-sonner-toaster":!0,"data-theme":G,"data-y-position":fe,"data-lifted":F&&S.length>1&&!i,"data-x-position":Te,style:{"--front-toast-height":`${((Q=D[0])==null?void 0:Q.height)||0}px`,"--width":`${nb}px`,"--gap":`${m}px`,...h,...ab(c,d)},onBlur:Z=>{O.current&&!Z.currentTarget.contains(Z.relatedTarget)&&(O.current=!1,E.current&&(E.current.focus({preventScroll:!0}),E.current=null))},onFocus:Z=>{Z.target instanceof HTMLElement&&Z.target.dataset.dismissible==="false"||O.current||(O.current=!0,E.current=Z.relatedTarget)},onMouseEnter:()=>L(!0),onMouseMove:()=>L(!0),onMouseLeave:()=>{J||L(!1)},onDragEnd:()=>L(!1),onPointerDown:Z=>{Z.target instanceof HTMLElement&&Z.target.dataset.dismissible==="false"||_(!0)},onPointerUp:()=>_(!1)},S.filter(Z=>!Z.position&&q===0||Z.position===B).map((Z,pr)=>{var Zt,Wn;return A.createElement(lb,{key:Z.id,icons:x,index:pr,toast:Z,defaultRichColors:p,duration:(Zt=v==null?void 0:v.duration)!=null?Zt:g,className:v==null?void 0:v.className,descriptionClassName:v==null?void 0:v.descriptionClassName,invert:r,visibleToasts:b,closeButton:(Wn=v==null?void 0:v.closeButton)!=null?Wn:l,interacting:J,position:B,style:v==null?void 0:v.style,unstyled:v==null?void 0:v.unstyled,classNames:v==null?void 0:v.classNames,cancelButtonStyle:v==null?void 0:v.cancelButtonStyle,actionButtonStyle:v==null?void 0:v.actionButtonStyle,removeToast:U,toasts:S.filter(en=>en.position==Z.position),heights:D.filter(en=>en.position==Z.position),setHeights:M,expandByDefault:i,gap:m,loadingIcon:f,expanded:F,pauseWhenPageIsHidden:k,swipeDirections:t.swipeDirections})})):null}))});const db=({...t})=>{const{theme:e="system"}=Lw();return n.jsx(cb,{theme:e,className:"toaster group",toastOptions:{classNames:{toast:"group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",description:"group-[.toast]:text-muted-foreground",actionButton:"group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",cancelButton:"group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"}},...t})},ub=["top","right","bottom","left"],Ln=Math.min,Ke=Math.max,Ai=Math.round,Hs=Math.floor,It=t=>({x:t,y:t}),hb={left:"right",right:"left",bottom:"top",top:"bottom"},pb={start:"end",end:"start"};function Ka(t,e,r){return Ke(t,Ln(e,r))}function Qt(t,e){return typeof t=="function"?t(e):t}function Yt(t){return t.split("-")[0]}function lo(t){return t.split("-")[1]}function ad(t){return t==="x"?"y":"x"}function cd(t){return t==="y"?"height":"width"}const fb=new Set(["top","bottom"]);function At(t){return fb.has(Yt(t))?"y":"x"}function dd(t){return ad(At(t))}function mb(t,e,r){r===void 0&&(r=!1);const o=lo(t),s=dd(t),i=cd(s);let l=s==="x"?o===(r?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[i]>e.floating[i]&&(l=_i(l)),[l,_i(l)]}function gb(t){const e=_i(t);return[Ga(t),e,Ga(e)]}function Ga(t){return t.replace(/start|end/g,e=>pb[e])}const Gu=["left","right"],Qu=["right","left"],xb=["top","bottom"],vb=["bottom","top"];function yb(t,e,r){switch(t){case"top":case"bottom":return r?e?Qu:Gu:e?Gu:Qu;case"left":case"right":return e?xb:vb;default:return[]}}function jb(t,e,r,o){const s=lo(t);let i=yb(Yt(t),r==="start",o);return s&&(i=i.map(l=>l+"-"+s),e&&(i=i.concat(i.map(Ga)))),i}function _i(t){return t.replace(/left|right|bottom|top/g,e=>hb[e])}function wb(t){return{top:0,right:0,bottom:0,left:0,...t}}function og(t){return typeof t!="number"?wb(t):{top:t,right:t,bottom:t,left:t}}function Oi(t){const{x:e,y:r,width:o,height:s}=t;return{width:o,height:s,top:r,left:e,right:e+o,bottom:r+s,x:e,y:r}}function Yu(t,e,r){let{reference:o,floating:s}=t;const i=At(e),l=dd(e),a=cd(l),c=Yt(e),d=i==="y",u=o.x+o.width/2-s.width/2,p=o.y+o.height/2-s.height/2,g=o[a]/2-s[a]/2;let h;switch(c){case"top":h={x:u,y:o.y-s.height};break;case"bottom":h={x:u,y:o.y+o.height};break;case"right":h={x:o.x+o.width,y:p};break;case"left":h={x:o.x-s.width,y:p};break;default:h={x:o.x,y:o.y}}switch(lo(e)){case"start":h[l]-=g*(r&&d?-1:1);break;case"end":h[l]+=g*(r&&d?-1:1);break}return h}const bb=async(t,e,r)=>{const{placement:o="bottom",strategy:s="absolute",middleware:i=[],platform:l}=r,a=i.filter(Boolean),c=await(l.isRTL==null?void 0:l.isRTL(e));let d=await l.getElementRects({reference:t,floating:e,strategy:s}),{x:u,y:p}=Yu(d,o,c),g=o,h={},b=0;for(let v=0;v<a.length;v++){const{name:j,fn:m}=a[v],{x:f,y:x,data:w,reset:k}=await m({x:u,y:p,initialPlacement:o,placement:g,strategy:s,middlewareData:h,rects:d,platform:l,elements:{reference:t,floating:e}});u=f??u,p=x??p,h={...h,[j]:{...h[j],...w}},k&&b<=50&&(b++,typeof k=="object"&&(k.placement&&(g=k.placement),k.rects&&(d=k.rects===!0?await l.getElementRects({reference:t,floating:e,strategy:s}):k.rects),{x:u,y:p}=Yu(d,g,c)),v=-1)}return{x:u,y:p,placement:g,strategy:s,middlewareData:h}};async function es(t,e){var r;e===void 0&&(e={});const{x:o,y:s,platform:i,rects:l,elements:a,strategy:c}=t,{boundary:d="clippingAncestors",rootBoundary:u="viewport",elementContext:p="floating",altBoundary:g=!1,padding:h=0}=Qt(e,t),b=og(h),j=a[g?p==="floating"?"reference":"floating":p],m=Oi(await i.getClippingRect({element:(r=await(i.isElement==null?void 0:i.isElement(j)))==null||r?j:j.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(a.floating)),boundary:d,rootBoundary:u,strategy:c})),f=p==="floating"?{x:o,y:s,width:l.floating.width,height:l.floating.height}:l.reference,x=await(i.getOffsetParent==null?void 0:i.getOffsetParent(a.floating)),w=await(i.isElement==null?void 0:i.isElement(x))?await(i.getScale==null?void 0:i.getScale(x))||{x:1,y:1}:{x:1,y:1},k=Oi(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:f,offsetParent:x,strategy:c}):f);return{top:(m.top-k.top+b.top)/w.y,bottom:(k.bottom-m.bottom+b.bottom)/w.y,left:(m.left-k.left+b.left)/w.x,right:(k.right-m.right+b.right)/w.x}}const kb=t=>({name:"arrow",options:t,async fn(e){const{x:r,y:o,placement:s,rects:i,platform:l,elements:a,middlewareData:c}=e,{element:d,padding:u=0}=Qt(t,e)||{};if(d==null)return{};const p=og(u),g={x:r,y:o},h=dd(s),b=cd(h),v=await l.getDimensions(d),j=h==="y",m=j?"top":"left",f=j?"bottom":"right",x=j?"clientHeight":"clientWidth",w=i.reference[b]+i.reference[h]-g[h]-i.floating[b],k=g[h]-i.reference[h],S=await(l.getOffsetParent==null?void 0:l.getOffsetParent(d));let C=S?S[x]:0;(!C||!await(l.isElement==null?void 0:l.isElement(S)))&&(C=a.floating[x]||i.floating[b]);const P=w/2-k/2,D=C/2-v[b]/2-1,M=Ln(p[m],D),F=Ln(p[f],D),L=M,J=C-v[b]-F,_=C/2-v[b]/2+P,G=Ka(L,_,J),$=!c.arrow&&lo(s)!=null&&_!==G&&i.reference[b]/2-(_<L?M:F)-v[b]/2<0,H=$?_<L?_-L:_-J:0;return{[h]:g[h]+H,data:{[h]:G,centerOffset:_-G-H,...$&&{alignmentOffset:H}},reset:$}}}),Sb=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var r,o;const{placement:s,middlewareData:i,rects:l,initialPlacement:a,platform:c,elements:d}=e,{mainAxis:u=!0,crossAxis:p=!0,fallbackPlacements:g,fallbackStrategy:h="bestFit",fallbackAxisSideDirection:b="none",flipAlignment:v=!0,...j}=Qt(t,e);if((r=i.arrow)!=null&&r.alignmentOffset)return{};const m=Yt(s),f=At(a),x=Yt(a)===a,w=await(c.isRTL==null?void 0:c.isRTL(d.floating)),k=g||(x||!v?[_i(a)]:gb(a)),S=b!=="none";!g&&S&&k.push(...jb(a,v,b,w));const C=[a,...k],P=await es(e,j),D=[];let M=((o=i.flip)==null?void 0:o.overflows)||[];if(u&&D.push(P[m]),p){const _=mb(s,l,w);D.push(P[_[0]],P[_[1]])}if(M=[...M,{placement:s,overflows:D}],!D.every(_=>_<=0)){var F,L;const _=(((F=i.flip)==null?void 0:F.index)||0)+1,G=C[_];if(G&&(!(p==="alignment"?f!==At(G):!1)||M.every(N=>At(N.placement)===f?N.overflows[0]>0:!0)))return{data:{index:_,overflows:M},reset:{placement:G}};let $=(L=M.filter(H=>H.overflows[0]<=0).sort((H,N)=>H.overflows[1]-N.overflows[1])[0])==null?void 0:L.placement;if(!$)switch(h){case"bestFit":{var J;const H=(J=M.filter(N=>{if(S){const E=At(N.placement);return E===f||E==="y"}return!0}).map(N=>[N.placement,N.overflows.filter(E=>E>0).reduce((E,O)=>E+O,0)]).sort((N,E)=>N[1]-E[1])[0])==null?void 0:J[0];H&&($=H);break}case"initialPlacement":$=a;break}if(s!==$)return{reset:{placement:$}}}return{}}}};function Xu(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function Zu(t){return ub.some(e=>t[e]>=0)}const Cb=function(t){return t===void 0&&(t={}),{name:"hide",options:t,async fn(e){const{rects:r}=e,{strategy:o="referenceHidden",...s}=Qt(t,e);switch(o){case"referenceHidden":{const i=await es(e,{...s,elementContext:"reference"}),l=Xu(i,r.reference);return{data:{referenceHiddenOffsets:l,referenceHidden:Zu(l)}}}case"escaped":{const i=await es(e,{...s,altBoundary:!0}),l=Xu(i,r.floating);return{data:{escapedOffsets:l,escaped:Zu(l)}}}default:return{}}}}},sg=new Set(["left","top"]);async function Tb(t,e){const{placement:r,platform:o,elements:s}=t,i=await(o.isRTL==null?void 0:o.isRTL(s.floating)),l=Yt(r),a=lo(r),c=At(r)==="y",d=sg.has(l)?-1:1,u=i&&c?-1:1,p=Qt(e,t);let{mainAxis:g,crossAxis:h,alignmentAxis:b}=typeof p=="number"?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:p.mainAxis||0,crossAxis:p.crossAxis||0,alignmentAxis:p.alignmentAxis};return a&&typeof b=="number"&&(h=a==="end"?b*-1:b),c?{x:h*u,y:g*d}:{x:g*d,y:h*u}}const Nb=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var r,o;const{x:s,y:i,placement:l,middlewareData:a}=e,c=await Tb(e,t);return l===((r=a.offset)==null?void 0:r.placement)&&(o=a.arrow)!=null&&o.alignmentOffset?{}:{x:s+c.x,y:i+c.y,data:{...c,placement:l}}}}},Eb=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:r,y:o,placement:s}=e,{mainAxis:i=!0,crossAxis:l=!1,limiter:a={fn:j=>{let{x:m,y:f}=j;return{x:m,y:f}}},...c}=Qt(t,e),d={x:r,y:o},u=await es(e,c),p=At(Yt(s)),g=ad(p);let h=d[g],b=d[p];if(i){const j=g==="y"?"top":"left",m=g==="y"?"bottom":"right",f=h+u[j],x=h-u[m];h=Ka(f,h,x)}if(l){const j=p==="y"?"top":"left",m=p==="y"?"bottom":"right",f=b+u[j],x=b-u[m];b=Ka(f,b,x)}const v=a.fn({...e,[g]:h,[p]:b});return{...v,data:{x:v.x-r,y:v.y-o,enabled:{[g]:i,[p]:l}}}}}},Pb=function(t){return t===void 0&&(t={}),{options:t,fn(e){const{x:r,y:o,placement:s,rects:i,middlewareData:l}=e,{offset:a=0,mainAxis:c=!0,crossAxis:d=!0}=Qt(t,e),u={x:r,y:o},p=At(s),g=ad(p);let h=u[g],b=u[p];const v=Qt(a,e),j=typeof v=="number"?{mainAxis:v,crossAxis:0}:{mainAxis:0,crossAxis:0,...v};if(c){const x=g==="y"?"height":"width",w=i.reference[g]-i.floating[x]+j.mainAxis,k=i.reference[g]+i.reference[x]-j.mainAxis;h<w?h=w:h>k&&(h=k)}if(d){var m,f;const x=g==="y"?"width":"height",w=sg.has(Yt(s)),k=i.reference[p]-i.floating[x]+(w&&((m=l.offset)==null?void 0:m[p])||0)+(w?0:j.crossAxis),S=i.reference[p]+i.reference[x]+(w?0:((f=l.offset)==null?void 0:f[p])||0)-(w?j.crossAxis:0);b<k?b=k:b>S&&(b=S)}return{[g]:h,[p]:b}}}},Rb=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var r,o;const{placement:s,rects:i,platform:l,elements:a}=e,{apply:c=()=>{},...d}=Qt(t,e),u=await es(e,d),p=Yt(s),g=lo(s),h=At(s)==="y",{width:b,height:v}=i.floating;let j,m;p==="top"||p==="bottom"?(j=p,m=g===(await(l.isRTL==null?void 0:l.isRTL(a.floating))?"start":"end")?"left":"right"):(m=p,j=g==="end"?"top":"bottom");const f=v-u.top-u.bottom,x=b-u.left-u.right,w=Ln(v-u[j],f),k=Ln(b-u[m],x),S=!e.middlewareData.shift;let C=w,P=k;if((r=e.middlewareData.shift)!=null&&r.enabled.x&&(P=x),(o=e.middlewareData.shift)!=null&&o.enabled.y&&(C=f),S&&!g){const M=Ke(u.left,0),F=Ke(u.right,0),L=Ke(u.top,0),J=Ke(u.bottom,0);h?P=b-2*(M!==0||F!==0?M+F:Ke(u.left,u.right)):C=v-2*(L!==0||J!==0?L+J:Ke(u.top,u.bottom))}await c({...e,availableWidth:P,availableHeight:C});const D=await l.getDimensions(a.floating);return b!==D.width||v!==D.height?{reset:{rects:!0}}:{}}}};function rl(){return typeof window<"u"}function ao(t){return ig(t)?(t.nodeName||"").toLowerCase():"#document"}function Ye(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function Dt(t){var e;return(e=(ig(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function ig(t){return rl()?t instanceof Node||t instanceof Ye(t).Node:!1}function St(t){return rl()?t instanceof Element||t instanceof Ye(t).Element:!1}function Lt(t){return rl()?t instanceof HTMLElement||t instanceof Ye(t).HTMLElement:!1}function eh(t){return!rl()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof Ye(t).ShadowRoot}const Mb=new Set(["inline","contents"]);function gs(t){const{overflow:e,overflowX:r,overflowY:o,display:s}=Ct(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+r)&&!Mb.has(s)}const Ab=new Set(["table","td","th"]);function _b(t){return Ab.has(ao(t))}const Ob=[":popover-open",":modal"];function ol(t){return Ob.some(e=>{try{return t.matches(e)}catch{return!1}})}const Ib=["transform","translate","scale","rotate","perspective"],Lb=["transform","translate","scale","rotate","perspective","filter"],Db=["paint","layout","strict","content"];function ud(t){const e=hd(),r=St(t)?Ct(t):t;return Ib.some(o=>r[o]?r[o]!=="none":!1)||(r.containerType?r.containerType!=="normal":!1)||!e&&(r.backdropFilter?r.backdropFilter!=="none":!1)||!e&&(r.filter?r.filter!=="none":!1)||Lb.some(o=>(r.willChange||"").includes(o))||Db.some(o=>(r.contain||"").includes(o))}function Bb(t){let e=Dn(t);for(;Lt(e)&&!to(e);){if(ud(e))return e;if(ol(e))return null;e=Dn(e)}return null}function hd(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const Fb=new Set(["html","body","#document"]);function to(t){return Fb.has(ao(t))}function Ct(t){return Ye(t).getComputedStyle(t)}function sl(t){return St(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function Dn(t){if(ao(t)==="html")return t;const e=t.assignedSlot||t.parentNode||eh(t)&&t.host||Dt(t);return eh(e)?e.host:e}function lg(t){const e=Dn(t);return to(e)?t.ownerDocument?t.ownerDocument.body:t.body:Lt(e)&&gs(e)?e:lg(e)}function ts(t,e,r){var o;e===void 0&&(e=[]),r===void 0&&(r=!0);const s=lg(t),i=s===((o=t.ownerDocument)==null?void 0:o.body),l=Ye(s);if(i){const a=Qa(l);return e.concat(l,l.visualViewport||[],gs(s)?s:[],a&&r?ts(a):[])}return e.concat(s,ts(s,[],r))}function Qa(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function ag(t){const e=Ct(t);let r=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const s=Lt(t),i=s?t.offsetWidth:r,l=s?t.offsetHeight:o,a=Ai(r)!==i||Ai(o)!==l;return a&&(r=i,o=l),{width:r,height:o,$:a}}function pd(t){return St(t)?t:t.contextElement}function Fr(t){const e=pd(t);if(!Lt(e))return It(1);const r=e.getBoundingClientRect(),{width:o,height:s,$:i}=ag(e);let l=(i?Ai(r.width):r.width)/o,a=(i?Ai(r.height):r.height)/s;return(!l||!Number.isFinite(l))&&(l=1),(!a||!Number.isFinite(a))&&(a=1),{x:l,y:a}}const zb=It(0);function cg(t){const e=Ye(t);return!hd()||!e.visualViewport?zb:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function $b(t,e,r){return e===void 0&&(e=!1),!r||e&&r!==Ye(t)?!1:e}function cr(t,e,r,o){e===void 0&&(e=!1),r===void 0&&(r=!1);const s=t.getBoundingClientRect(),i=pd(t);let l=It(1);e&&(o?St(o)&&(l=Fr(o)):l=Fr(t));const a=$b(i,r,o)?cg(i):It(0);let c=(s.left+a.x)/l.x,d=(s.top+a.y)/l.y,u=s.width/l.x,p=s.height/l.y;if(i){const g=Ye(i),h=o&&St(o)?Ye(o):o;let b=g,v=Qa(b);for(;v&&o&&h!==b;){const j=Fr(v),m=v.getBoundingClientRect(),f=Ct(v),x=m.left+(v.clientLeft+parseFloat(f.paddingLeft))*j.x,w=m.top+(v.clientTop+parseFloat(f.paddingTop))*j.y;c*=j.x,d*=j.y,u*=j.x,p*=j.y,c+=x,d+=w,b=Ye(v),v=Qa(b)}}return Oi({width:u,height:p,x:c,y:d})}function il(t,e){const r=sl(t).scrollLeft;return e?e.left+r:cr(Dt(t)).left+r}function dg(t,e){const r=t.getBoundingClientRect(),o=r.left+e.scrollLeft-il(t,r),s=r.top+e.scrollTop;return{x:o,y:s}}function Wb(t){let{elements:e,rect:r,offsetParent:o,strategy:s}=t;const i=s==="fixed",l=Dt(o),a=e?ol(e.floating):!1;if(o===l||a&&i)return r;let c={scrollLeft:0,scrollTop:0},d=It(1);const u=It(0),p=Lt(o);if((p||!p&&!i)&&((ao(o)!=="body"||gs(l))&&(c=sl(o)),Lt(o))){const h=cr(o);d=Fr(o),u.x=h.x+o.clientLeft,u.y=h.y+o.clientTop}const g=l&&!p&&!i?dg(l,c):It(0);return{width:r.width*d.x,height:r.height*d.y,x:r.x*d.x-c.scrollLeft*d.x+u.x+g.x,y:r.y*d.y-c.scrollTop*d.y+u.y+g.y}}function Hb(t){return Array.from(t.getClientRects())}function Ub(t){const e=Dt(t),r=sl(t),o=t.ownerDocument.body,s=Ke(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),i=Ke(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let l=-r.scrollLeft+il(t);const a=-r.scrollTop;return Ct(o).direction==="rtl"&&(l+=Ke(e.clientWidth,o.clientWidth)-s),{width:s,height:i,x:l,y:a}}const th=25;function Vb(t,e){const r=Ye(t),o=Dt(t),s=r.visualViewport;let i=o.clientWidth,l=o.clientHeight,a=0,c=0;if(s){i=s.width,l=s.height;const u=hd();(!u||u&&e==="fixed")&&(a=s.offsetLeft,c=s.offsetTop)}const d=il(o);if(d<=0){const u=o.ownerDocument,p=u.body,g=getComputedStyle(p),h=u.compatMode==="CSS1Compat"&&parseFloat(g.marginLeft)+parseFloat(g.marginRight)||0,b=Math.abs(o.clientWidth-p.clientWidth-h);b<=th&&(i-=b)}else d<=th&&(i+=d);return{width:i,height:l,x:a,y:c}}const Jb=new Set(["absolute","fixed"]);function qb(t,e){const r=cr(t,!0,e==="fixed"),o=r.top+t.clientTop,s=r.left+t.clientLeft,i=Lt(t)?Fr(t):It(1),l=t.clientWidth*i.x,a=t.clientHeight*i.y,c=s*i.x,d=o*i.y;return{width:l,height:a,x:c,y:d}}function nh(t,e,r){let o;if(e==="viewport")o=Vb(t,r);else if(e==="document")o=Ub(Dt(t));else if(St(e))o=qb(e,r);else{const s=cg(t);o={x:e.x-s.x,y:e.y-s.y,width:e.width,height:e.height}}return Oi(o)}function ug(t,e){const r=Dn(t);return r===e||!St(r)||to(r)?!1:Ct(r).position==="fixed"||ug(r,e)}function Kb(t,e){const r=e.get(t);if(r)return r;let o=ts(t,[],!1).filter(a=>St(a)&&ao(a)!=="body"),s=null;const i=Ct(t).position==="fixed";let l=i?Dn(t):t;for(;St(l)&&!to(l);){const a=Ct(l),c=ud(l);!c&&a.position==="fixed"&&(s=null),(i?!c&&!s:!c&&a.position==="static"&&!!s&&Jb.has(s.position)||gs(l)&&!c&&ug(t,l))?o=o.filter(u=>u!==l):s=a,l=Dn(l)}return e.set(t,o),o}function Gb(t){let{element:e,boundary:r,rootBoundary:o,strategy:s}=t;const l=[...r==="clippingAncestors"?ol(e)?[]:Kb(e,this._c):[].concat(r),o],a=l[0],c=l.reduce((d,u)=>{const p=nh(e,u,s);return d.top=Ke(p.top,d.top),d.right=Ln(p.right,d.right),d.bottom=Ln(p.bottom,d.bottom),d.left=Ke(p.left,d.left),d},nh(e,a,s));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function Qb(t){const{width:e,height:r}=ag(t);return{width:e,height:r}}function Yb(t,e,r){const o=Lt(e),s=Dt(e),i=r==="fixed",l=cr(t,!0,i,e);let a={scrollLeft:0,scrollTop:0};const c=It(0);function d(){c.x=il(s)}if(o||!o&&!i)if((ao(e)!=="body"||gs(s))&&(a=sl(e)),o){const h=cr(e,!0,i,e);c.x=h.x+e.clientLeft,c.y=h.y+e.clientTop}else s&&d();i&&!o&&s&&d();const u=s&&!o&&!i?dg(s,a):It(0),p=l.left+a.scrollLeft-c.x-u.x,g=l.top+a.scrollTop-c.y-u.y;return{x:p,y:g,width:l.width,height:l.height}}function ql(t){return Ct(t).position==="static"}function rh(t,e){if(!Lt(t)||Ct(t).position==="fixed")return null;if(e)return e(t);let r=t.offsetParent;return Dt(t)===r&&(r=r.ownerDocument.body),r}function hg(t,e){const r=Ye(t);if(ol(t))return r;if(!Lt(t)){let s=Dn(t);for(;s&&!to(s);){if(St(s)&&!ql(s))return s;s=Dn(s)}return r}let o=rh(t,e);for(;o&&_b(o)&&ql(o);)o=rh(o,e);return o&&to(o)&&ql(o)&&!ud(o)?r:o||Bb(t)||r}const Xb=async function(t){const e=this.getOffsetParent||hg,r=this.getDimensions,o=await r(t.floating);return{reference:Yb(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function Zb(t){return Ct(t).direction==="rtl"}const e0={convertOffsetParentRelativeRectToViewportRelativeRect:Wb,getDocumentElement:Dt,getClippingRect:Gb,getOffsetParent:hg,getElementRects:Xb,getClientRects:Hb,getDimensions:Qb,getScale:Fr,isElement:St,isRTL:Zb};function pg(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function t0(t,e){let r=null,o;const s=Dt(t);function i(){var a;clearTimeout(o),(a=r)==null||a.disconnect(),r=null}function l(a,c){a===void 0&&(a=!1),c===void 0&&(c=1),i();const d=t.getBoundingClientRect(),{left:u,top:p,width:g,height:h}=d;if(a||e(),!g||!h)return;const b=Hs(p),v=Hs(s.clientWidth-(u+g)),j=Hs(s.clientHeight-(p+h)),m=Hs(u),x={rootMargin:-b+"px "+-v+"px "+-j+"px "+-m+"px",threshold:Ke(0,Ln(1,c))||1};let w=!0;function k(S){const C=S[0].intersectionRatio;if(C!==c){if(!w)return l();C?l(!1,C):o=setTimeout(()=>{l(!1,1e-7)},1e3)}C===1&&!pg(d,t.getBoundingClientRect())&&l(),w=!1}try{r=new IntersectionObserver(k,{...x,root:s.ownerDocument})}catch{r=new IntersectionObserver(k,x)}r.observe(t)}return l(!0),i}function n0(t,e,r,o){o===void 0&&(o={});const{ancestorScroll:s=!0,ancestorResize:i=!0,elementResize:l=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:c=!1}=o,d=pd(t),u=s||i?[...d?ts(d):[],...ts(e)]:[];u.forEach(m=>{s&&m.addEventListener("scroll",r,{passive:!0}),i&&m.addEventListener("resize",r)});const p=d&&a?t0(d,r):null;let g=-1,h=null;l&&(h=new ResizeObserver(m=>{let[f]=m;f&&f.target===d&&h&&(h.unobserve(e),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{var x;(x=h)==null||x.observe(e)})),r()}),d&&!c&&h.observe(d),h.observe(e));let b,v=c?cr(t):null;c&&j();function j(){const m=cr(t);v&&!pg(v,m)&&r(),v=m,b=requestAnimationFrame(j)}return r(),()=>{var m;u.forEach(f=>{s&&f.removeEventListener("scroll",r),i&&f.removeEventListener("resize",r)}),p==null||p(),(m=h)==null||m.disconnect(),h=null,c&&cancelAnimationFrame(b)}}const r0=Nb,o0=Eb,s0=Sb,i0=Rb,l0=Cb,oh=kb,a0=Pb,c0=(t,e,r)=>{const o=new Map,s={platform:e0,...r},i={...s.platform,_c:o};return bb(t,e,{...s,platform:i})};var d0=typeof document<"u",u0=function(){},si=d0?y.useLayoutEffect:u0;function Ii(t,e){if(t===e)return!0;if(typeof t!=typeof e)return!1;if(typeof t=="function"&&t.toString()===e.toString())return!0;let r,o,s;if(t&&e&&typeof t=="object"){if(Array.isArray(t)){if(r=t.length,r!==e.length)return!1;for(o=r;o--!==0;)if(!Ii(t[o],e[o]))return!1;return!0}if(s=Object.keys(t),r=s.length,r!==Object.keys(e).length)return!1;for(o=r;o--!==0;)if(!{}.hasOwnProperty.call(e,s[o]))return!1;for(o=r;o--!==0;){const i=s[o];if(!(i==="_owner"&&t.$$typeof)&&!Ii(t[i],e[i]))return!1}return!0}return t!==t&&e!==e}function fg(t){return typeof window>"u"?1:(t.ownerDocument.defaultView||window).devicePixelRatio||1}function sh(t,e){const r=fg(t);return Math.round(e*r)/r}function Kl(t){const e=y.useRef(t);return si(()=>{e.current=t}),e}function h0(t){t===void 0&&(t={});const{placement:e="bottom",strategy:r="absolute",middleware:o=[],platform:s,elements:{reference:i,floating:l}={},transform:a=!0,whileElementsMounted:c,open:d}=t,[u,p]=y.useState({x:0,y:0,strategy:r,placement:e,middlewareData:{},isPositioned:!1}),[g,h]=y.useState(o);Ii(g,o)||h(o);const[b,v]=y.useState(null),[j,m]=y.useState(null),f=y.useCallback(N=>{N!==S.current&&(S.current=N,v(N))},[]),x=y.useCallback(N=>{N!==C.current&&(C.current=N,m(N))},[]),w=i||b,k=l||j,S=y.useRef(null),C=y.useRef(null),P=y.useRef(u),D=c!=null,M=Kl(c),F=Kl(s),L=Kl(d),J=y.useCallback(()=>{if(!S.current||!C.current)return;const N={placement:e,strategy:r,middleware:g};F.current&&(N.platform=F.current),c0(S.current,C.current,N).then(E=>{const O={...E,isPositioned:L.current!==!1};_.current&&!Ii(P.current,O)&&(P.current=O,fs.flushSync(()=>{p(O)}))})},[g,e,r,F,L]);si(()=>{d===!1&&P.current.isPositioned&&(P.current.isPositioned=!1,p(N=>({...N,isPositioned:!1})))},[d]);const _=y.useRef(!1);si(()=>(_.current=!0,()=>{_.current=!1}),[]),si(()=>{if(w&&(S.current=w),k&&(C.current=k),w&&k){if(M.current)return M.current(w,k,J);J()}},[w,k,J,M,D]);const G=y.useMemo(()=>({reference:S,floating:C,setReference:f,setFloating:x}),[f,x]),$=y.useMemo(()=>({reference:w,floating:k}),[w,k]),H=y.useMemo(()=>{const N={position:r,left:0,top:0};if(!$.floating)return N;const E=sh($.floating,u.x),O=sh($.floating,u.y);return a?{...N,transform:"translate("+E+"px, "+O+"px)",...fg($.floating)>=1.5&&{willChange:"transform"}}:{position:r,left:E,top:O}},[r,a,$.floating,u.x,u.y]);return y.useMemo(()=>({...u,update:J,refs:G,elements:$,floatingStyles:H}),[u,J,G,$,H])}const p0=t=>{function e(r){return{}.hasOwnProperty.call(r,"current")}return{name:"arrow",options:t,fn(r){const{element:o,padding:s}=typeof t=="function"?t(r):t;return o&&e(o)?o.current!=null?oh({element:o.current,padding:s}).fn(r):{}:o?oh({element:o,padding:s}).fn(r):{}}}},f0=(t,e)=>({...r0(t),options:[t,e]}),m0=(t,e)=>({...o0(t),options:[t,e]}),g0=(t,e)=>({...a0(t),options:[t,e]}),x0=(t,e)=>({...s0(t),options:[t,e]}),v0=(t,e)=>({...i0(t),options:[t,e]}),y0=(t,e)=>({...l0(t),options:[t,e]}),j0=(t,e)=>({...p0(t),options:[t,e]});var w0="Arrow",mg=y.forwardRef((t,e)=>{const{children:r,width:o=10,height:s=5,...i}=t;return n.jsx(Je.svg,{...i,ref:e,width:o,height:s,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:t.asChild?r:n.jsx("polygon",{points:"0,0 30,0 15,10"})})});mg.displayName=w0;var b0=mg;function k0(t){const[e,r]=y.useState(void 0);return In(()=>{if(t){r({width:t.offsetWidth,height:t.offsetHeight});const o=new ResizeObserver(s=>{if(!Array.isArray(s)||!s.length)return;const i=s[0];let l,a;if("borderBoxSize"in i){const c=i.borderBoxSize,d=Array.isArray(c)?c[0]:c;l=d.inlineSize,a=d.blockSize}else l=t.offsetWidth,a=t.offsetHeight;r({width:l,height:a})});return o.observe(t,{box:"border-box"}),()=>o.unobserve(t)}else r(void 0)},[t]),e}var gg="Popper",[xg,vg]=el(gg),[NS,yg]=xg(gg),jg="PopperAnchor",wg=y.forwardRef((t,e)=>{const{__scopePopper:r,virtualRef:o,...s}=t,i=yg(jg,r),l=y.useRef(null),a=kt(e,l),c=y.useRef(null);return y.useEffect(()=>{const d=c.current;c.current=(o==null?void 0:o.current)||l.current,d!==c.current&&i.onAnchorChange(c.current)}),o?null:n.jsx(Je.div,{...s,ref:a})});wg.displayName=jg;var fd="PopperContent",[S0,C0]=xg(fd),bg=y.forwardRef((t,e)=>{var Z,pr,Zt,Wn,en,fr;const{__scopePopper:r,side:o="bottom",sideOffset:s=0,align:i="center",alignOffset:l=0,arrowPadding:a=0,avoidCollisions:c=!0,collisionBoundary:d=[],collisionPadding:u=0,sticky:p="partial",hideWhenDetached:g=!1,updatePositionStrategy:h="optimized",onPlaced:b,...v}=t,j=yg(fd,r),[m,f]=y.useState(null),x=kt(e,tn=>f(tn)),[w,k]=y.useState(null),S=k0(w),C=(S==null?void 0:S.width)??0,P=(S==null?void 0:S.height)??0,D=o+(i!=="center"?"-"+i:""),M=typeof u=="number"?u:{top:0,right:0,bottom:0,left:0,...u},F=Array.isArray(d)?d:[d],L=F.length>0,J={padding:M,boundary:F.filter(N0),altBoundary:L},{refs:_,floatingStyles:G,placement:$,isPositioned:H,middlewareData:N}=h0({strategy:"fixed",placement:D,whileElementsMounted:(...tn)=>n0(...tn,{animationFrame:h==="always"}),elements:{reference:j.anchor},middleware:[f0({mainAxis:s+P,alignmentAxis:l}),c&&m0({mainAxis:!0,crossAxis:!1,limiter:p==="partial"?g0():void 0,...J}),c&&x0({...J}),v0({...J,apply:({elements:tn,rects:ys,availableWidth:hl,availableHeight:js})=>{const{width:pl,height:uo}=ys.reference,mr=tn.floating.style;mr.setProperty("--radix-popper-available-width",`${hl}px`),mr.setProperty("--radix-popper-available-height",`${js}px`),mr.setProperty("--radix-popper-anchor-width",`${pl}px`),mr.setProperty("--radix-popper-anchor-height",`${uo}px`)}}),w&&j0({element:w,padding:a}),E0({arrowWidth:C,arrowHeight:P}),g&&y0({strategy:"referenceHidden",...J})]}),[E,O]=Cg($),U=On(b);In(()=>{H&&(U==null||U())},[H,U]);const B=(Z=N.arrow)==null?void 0:Z.x,q=(pr=N.arrow)==null?void 0:pr.y,Q=((Zt=N.arrow)==null?void 0:Zt.centerOffset)!==0,[fe,Te]=y.useState();return In(()=>{m&&Te(window.getComputedStyle(m).zIndex)},[m]),n.jsx("div",{ref:_.setFloating,"data-radix-popper-content-wrapper":"",style:{...G,transform:H?G.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:fe,"--radix-popper-transform-origin":[(Wn=N.transformOrigin)==null?void 0:Wn.x,(en=N.transformOrigin)==null?void 0:en.y].join(" "),...((fr=N.hide)==null?void 0:fr.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:t.dir,children:n.jsx(S0,{scope:r,placedSide:E,onArrowChange:k,arrowX:B,arrowY:q,shouldHideArrow:Q,children:n.jsx(Je.div,{"data-side":E,"data-align":O,...v,ref:x,style:{...v.style,animation:H?void 0:"none"}})})})});bg.displayName=fd;var kg="PopperArrow",T0={top:"bottom",right:"left",bottom:"top",left:"right"},Sg=y.forwardRef(function(e,r){const{__scopePopper:o,...s}=e,i=C0(kg,o),l=T0[i.placedSide];return n.jsx("span",{ref:i.onArrowChange,style:{position:"absolute",left:i.arrowX,top:i.arrowY,[l]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[i.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[i.placedSide],visibility:i.shouldHideArrow?"hidden":void 0},children:n.jsx(b0,{...s,ref:r,style:{...s.style,display:"block"}})})});Sg.displayName=kg;function N0(t){return t!==null}var E0=t=>({name:"transformOrigin",options:t,fn(e){var j,m,f;const{placement:r,rects:o,middlewareData:s}=e,l=((j=s.arrow)==null?void 0:j.centerOffset)!==0,a=l?0:t.arrowWidth,c=l?0:t.arrowHeight,[d,u]=Cg(r),p={start:"0%",center:"50%",end:"100%"}[u],g=(((m=s.arrow)==null?void 0:m.x)??0)+a/2,h=(((f=s.arrow)==null?void 0:f.y)??0)+c/2;let b="",v="";return d==="bottom"?(b=l?p:`${g}px`,v=`${-c}px`):d==="top"?(b=l?p:`${g}px`,v=`${o.floating.height+c}px`):d==="right"?(b=`${-c}px`,v=l?p:`${h}px`):d==="left"&&(b=`${o.floating.width+c}px`,v=l?p:`${h}px`),{data:{x:b,y:v}}}});function Cg(t){const[e,r="center"]=t.split("-");return[e,r]}var P0=wg,R0=bg,M0=Sg,[ll]=el("Tooltip",[vg]),md=vg(),Tg="TooltipProvider",A0=700,ih="tooltip.open",[_0,Ng]=ll(Tg),Eg=t=>{const{__scopeTooltip:e,delayDuration:r=A0,skipDelayDuration:o=300,disableHoverableContent:s=!1,children:i}=t,l=y.useRef(!0),a=y.useRef(!1),c=y.useRef(0);return y.useEffect(()=>{const d=c.current;return()=>window.clearTimeout(d)},[]),n.jsx(_0,{scope:e,isOpenDelayedRef:l,delayDuration:r,onOpen:y.useCallback(()=>{window.clearTimeout(c.current),l.current=!1},[]),onClose:y.useCallback(()=>{window.clearTimeout(c.current),c.current=window.setTimeout(()=>l.current=!0,o)},[o]),isPointerInTransitRef:a,onPointerInTransitChange:y.useCallback(d=>{a.current=d},[]),disableHoverableContent:s,children:i})};Eg.displayName=Tg;var Pg="Tooltip",[ES,al]=ll(Pg),Ya="TooltipTrigger",O0=y.forwardRef((t,e)=>{const{__scopeTooltip:r,...o}=t,s=al(Ya,r),i=Ng(Ya,r),l=md(r),a=y.useRef(null),c=kt(e,a,s.onTriggerChange),d=y.useRef(!1),u=y.useRef(!1),p=y.useCallback(()=>d.current=!1,[]);return y.useEffect(()=>()=>document.removeEventListener("pointerup",p),[p]),n.jsx(P0,{asChild:!0,...l,children:n.jsx(Je.button,{"aria-describedby":s.open?s.contentId:void 0,"data-state":s.stateAttribute,...o,ref:c,onPointerMove:ve(t.onPointerMove,g=>{g.pointerType!=="touch"&&!u.current&&!i.isPointerInTransitRef.current&&(s.onTriggerEnter(),u.current=!0)}),onPointerLeave:ve(t.onPointerLeave,()=>{s.onTriggerLeave(),u.current=!1}),onPointerDown:ve(t.onPointerDown,()=>{s.open&&s.onClose(),d.current=!0,document.addEventListener("pointerup",p,{once:!0})}),onFocus:ve(t.onFocus,()=>{d.current||s.onOpen()}),onBlur:ve(t.onBlur,s.onClose),onClick:ve(t.onClick,s.onClose)})})});O0.displayName=Ya;var I0="TooltipPortal",[PS,L0]=ll(I0,{forceMount:void 0}),no="TooltipContent",Rg=y.forwardRef((t,e)=>{const r=L0(no,t.__scopeTooltip),{forceMount:o=r.forceMount,side:s="top",...i}=t,l=al(no,t.__scopeTooltip);return n.jsx(nd,{present:o||l.open,children:l.disableHoverableContent?n.jsx(Mg,{side:s,...i,ref:e}):n.jsx(D0,{side:s,...i,ref:e})})}),D0=y.forwardRef((t,e)=>{const r=al(no,t.__scopeTooltip),o=Ng(no,t.__scopeTooltip),s=y.useRef(null),i=kt(e,s),[l,a]=y.useState(null),{trigger:c,onClose:d}=r,u=s.current,{onPointerInTransitChange:p}=o,g=y.useCallback(()=>{a(null),p(!1)},[p]),h=y.useCallback((b,v)=>{const j=b.currentTarget,m={x:b.clientX,y:b.clientY},f=W0(m,j.getBoundingClientRect()),x=H0(m,f),w=U0(v.getBoundingClientRect()),k=J0([...x,...w]);a(k),p(!0)},[p]);return y.useEffect(()=>()=>g(),[g]),y.useEffect(()=>{if(c&&u){const b=j=>h(j,u),v=j=>h(j,c);return c.addEventListener("pointerleave",b),u.addEventListener("pointerleave",v),()=>{c.removeEventListener("pointerleave",b),u.removeEventListener("pointerleave",v)}}},[c,u,h,g]),y.useEffect(()=>{if(l){const b=v=>{const j=v.target,m={x:v.clientX,y:v.clientY},f=(c==null?void 0:c.contains(j))||(u==null?void 0:u.contains(j)),x=!V0(m,l);f?g():x&&(g(),d())};return document.addEventListener("pointermove",b),()=>document.removeEventListener("pointermove",b)}},[c,u,l,d,g]),n.jsx(Mg,{...t,ref:i})}),[B0,F0]=ll(Pg,{isInside:!1}),z0=Ky("TooltipContent"),Mg=y.forwardRef((t,e)=>{const{__scopeTooltip:r,children:o,"aria-label":s,onEscapeKeyDown:i,onPointerDownOutside:l,...a}=t,c=al(no,r),d=md(r),{onClose:u}=c;return y.useEffect(()=>(document.addEventListener(ih,u),()=>document.removeEventListener(ih,u)),[u]),y.useEffect(()=>{if(c.trigger){const p=g=>{const h=g.target;h!=null&&h.contains(c.trigger)&&u()};return window.addEventListener("scroll",p,{capture:!0}),()=>window.removeEventListener("scroll",p,{capture:!0})}},[c.trigger,u]),n.jsx(td,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:i,onPointerDownOutside:l,onFocusOutside:p=>p.preventDefault(),onDismiss:u,children:n.jsxs(R0,{"data-state":c.stateAttribute,...d,...a,ref:e,style:{...a.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[n.jsx(z0,{children:o}),n.jsx(B0,{scope:r,isInside:!0,children:n.jsx(yj,{id:c.contentId,role:"tooltip",children:s||o})})]})})});Rg.displayName=no;var Ag="TooltipArrow",$0=y.forwardRef((t,e)=>{const{__scopeTooltip:r,...o}=t,s=md(r);return F0(Ag,r).isInside?null:n.jsx(M0,{...s,...o,ref:e})});$0.displayName=Ag;function W0(t,e){const r=Math.abs(e.top-t.y),o=Math.abs(e.bottom-t.y),s=Math.abs(e.right-t.x),i=Math.abs(e.left-t.x);switch(Math.min(r,o,s,i)){case i:return"left";case s:return"right";case r:return"top";case o:return"bottom";default:throw new Error("unreachable")}}function H0(t,e,r=5){const o=[];switch(e){case"top":o.push({x:t.x-r,y:t.y+r},{x:t.x+r,y:t.y+r});break;case"bottom":o.push({x:t.x-r,y:t.y-r},{x:t.x+r,y:t.y-r});break;case"left":o.push({x:t.x+r,y:t.y-r},{x:t.x+r,y:t.y+r});break;case"right":o.push({x:t.x-r,y:t.y-r},{x:t.x-r,y:t.y+r});break}return o}function U0(t){const{top:e,right:r,bottom:o,left:s}=t;return[{x:s,y:e},{x:r,y:e},{x:r,y:o},{x:s,y:o}]}function V0(t,e){const{x:r,y:o}=t;let s=!1;for(let i=0,l=e.length-1;i<e.length;l=i++){const a=e[i],c=e[l],d=a.x,u=a.y,p=c.x,g=c.y;u>o!=g>o&&r<(p-d)*(o-u)/(g-u)+d&&(s=!s)}return s}function J0(t){const e=t.slice();return e.sort((r,o)=>r.x<o.x?-1:r.x>o.x?1:r.y<o.y?-1:r.y>o.y?1:0),q0(e)}function q0(t){if(t.length<=1)return t.slice();const e=[];for(let o=0;o<t.length;o++){const s=t[o];for(;e.length>=2;){const i=e[e.length-1],l=e[e.length-2];if((i.x-l.x)*(s.y-l.y)>=(i.y-l.y)*(s.x-l.x))e.pop();else break}e.push(s)}e.pop();const r=[];for(let o=t.length-1;o>=0;o--){const s=t[o];for(;r.length>=2;){const i=r[r.length-1],l=r[r.length-2];if((i.x-l.x)*(s.y-l.y)>=(i.y-l.y)*(s.x-l.x))r.pop();else break}r.push(s)}return r.pop(),e.length===1&&r.length===1&&e[0].x===r[0].x&&e[0].y===r[0].y?e:e.concat(r)}var K0=Eg,_g=Rg;const G0=K0,Q0=y.forwardRef(({className:t,sideOffset:e=4,...r},o)=>n.jsx(_g,{ref:o,sideOffset:e,className:Fe("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",t),...r}));Q0.displayName=_g.displayName;var cl=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(t){return this.listeners.add(t),this.onSubscribe(),()=>{this.listeners.delete(t),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},Y0={setTimeout:(t,e)=>setTimeout(t,e),clearTimeout:t=>clearTimeout(t),setInterval:(t,e)=>setInterval(t,e),clearInterval:t=>clearInterval(t)},fn,ic,Wh,X0=(Wh=class{constructor(){Y(this,fn,Y0);Y(this,ic,!1)}setTimeoutProvider(t){z(this,fn,t)}setTimeout(t,e){return T(this,fn).setTimeout(t,e)}clearTimeout(t){T(this,fn).clearTimeout(t)}setInterval(t,e){return T(this,fn).setInterval(t,e)}clearInterval(t){T(this,fn).clearInterval(t)}},fn=new WeakMap,ic=new WeakMap,Wh),Xa=new X0;function Z0(t){setTimeout(t,0)}var dl=typeof window>"u"||"Deno"in globalThis;function mt(){}function ek(t,e){return typeof t=="function"?t(e):t}function tk(t){return typeof t=="number"&&t>=0&&t!==1/0}function nk(t,e){return Math.max(t+(e||0)-Date.now(),0)}function Za(t,e){return typeof t=="function"?t(e):t}function rk(t,e){return typeof t=="function"?t(e):t}function lh(t,e){const{type:r="all",exact:o,fetchStatus:s,predicate:i,queryKey:l,stale:a}=t;if(l){if(o){if(e.queryHash!==gd(l,e.options))return!1}else if(!rs(e.queryKey,l))return!1}if(r!=="all"){const c=e.isActive();if(r==="active"&&!c||r==="inactive"&&c)return!1}return!(typeof a=="boolean"&&e.isStale()!==a||s&&s!==e.state.fetchStatus||i&&!i(e))}function ah(t,e){const{exact:r,status:o,predicate:s,mutationKey:i}=t;if(i){if(!e.options.mutationKey)return!1;if(r){if(ns(e.options.mutationKey)!==ns(i))return!1}else if(!rs(e.options.mutationKey,i))return!1}return!(o&&e.state.status!==o||s&&!s(e))}function gd(t,e){return((e==null?void 0:e.queryKeyHashFn)||ns)(t)}function ns(t){return JSON.stringify(t,(e,r)=>ec(r)?Object.keys(r).sort().reduce((o,s)=>(o[s]=r[s],o),{}):r)}function rs(t,e){return t===e?!0:typeof t!=typeof e?!1:t&&e&&typeof t=="object"&&typeof e=="object"?Object.keys(e).every(r=>rs(t[r],e[r])):!1}var ok=Object.prototype.hasOwnProperty;function Og(t,e){if(t===e)return t;const r=ch(t)&&ch(e);if(!r&&!(ec(t)&&ec(e)))return e;const s=(r?t:Object.keys(t)).length,i=r?e:Object.keys(e),l=i.length,a=r?new Array(l):{};let c=0;for(let d=0;d<l;d++){const u=r?d:i[d],p=t[u],g=e[u];if(p===g){a[u]=p,(r?d<s:ok.call(t,u))&&c++;continue}if(p===null||g===null||typeof p!="object"||typeof g!="object"){a[u]=g;continue}const h=Og(p,g);a[u]=h,h===p&&c++}return s===l&&c===s?t:a}function ch(t){return Array.isArray(t)&&t.length===Object.keys(t).length}function ec(t){if(!dh(t))return!1;const e=t.constructor;if(e===void 0)return!0;const r=e.prototype;return!(!dh(r)||!r.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(t)!==Object.prototype)}function dh(t){return Object.prototype.toString.call(t)==="[object Object]"}function sk(t){return new Promise(e=>{Xa.setTimeout(e,t)})}function ik(t,e,r){return typeof r.structuralSharing=="function"?r.structuralSharing(t,e):r.structuralSharing!==!1?Og(t,e):e}function lk(t,e,r=0){const o=[...t,e];return r&&o.length>r?o.slice(1):o}function ak(t,e,r=0){const o=[e,...t];return r&&o.length>r?o.slice(0,-1):o}var xd=Symbol();function Ig(t,e){return!t.queryFn&&(e!=null&&e.initialPromise)?()=>e.initialPromise:!t.queryFn||t.queryFn===xd?()=>Promise.reject(new Error(`Missing queryFn: '${t.queryHash}'`)):t.queryFn}var Qn,mn,zr,Hh,ck=(Hh=class extends cl{constructor(){super();Y(this,Qn);Y(this,mn);Y(this,zr);z(this,zr,e=>{if(!dl&&window.addEventListener){const r=()=>e();return window.addEventListener("visibilitychange",r,!1),()=>{window.removeEventListener("visibilitychange",r)}}})}onSubscribe(){T(this,mn)||this.setEventListener(T(this,zr))}onUnsubscribe(){var e;this.hasListeners()||((e=T(this,mn))==null||e.call(this),z(this,mn,void 0))}setEventListener(e){var r;z(this,zr,e),(r=T(this,mn))==null||r.call(this),z(this,mn,e(o=>{typeof o=="boolean"?this.setFocused(o):this.onFocus()}))}setFocused(e){T(this,Qn)!==e&&(z(this,Qn,e),this.onFocus())}onFocus(){const e=this.isFocused();this.listeners.forEach(r=>{r(e)})}isFocused(){var e;return typeof T(this,Qn)=="boolean"?T(this,Qn):((e=globalThis.document)==null?void 0:e.visibilityState)!=="hidden"}},Qn=new WeakMap,mn=new WeakMap,zr=new WeakMap,Hh),Lg=new ck;function dk(){let t,e;const r=new Promise((s,i)=>{t=s,e=i});r.status="pending",r.catch(()=>{});function o(s){Object.assign(r,s),delete r.resolve,delete r.reject}return r.resolve=s=>{o({status:"fulfilled",value:s}),t(s)},r.reject=s=>{o({status:"rejected",reason:s}),e(s)},r}var uk=Z0;function hk(){let t=[],e=0,r=a=>{a()},o=a=>{a()},s=uk;const i=a=>{e?t.push(a):s(()=>{r(a)})},l=()=>{const a=t;t=[],a.length&&s(()=>{o(()=>{a.forEach(c=>{r(c)})})})};return{batch:a=>{let c;e++;try{c=a()}finally{e--,e||l()}return c},batchCalls:a=>(...c)=>{i(()=>{a(...c)})},schedule:i,setNotifyFunction:a=>{r=a},setBatchNotifyFunction:a=>{o=a},setScheduler:a=>{s=a}}}var Ie=hk(),$r,gn,Wr,Uh,pk=(Uh=class extends cl{constructor(){super();Y(this,$r,!0);Y(this,gn);Y(this,Wr);z(this,Wr,e=>{if(!dl&&window.addEventListener){const r=()=>e(!0),o=()=>e(!1);return window.addEventListener("online",r,!1),window.addEventListener("offline",o,!1),()=>{window.removeEventListener("online",r),window.removeEventListener("offline",o)}}})}onSubscribe(){T(this,gn)||this.setEventListener(T(this,Wr))}onUnsubscribe(){var e;this.hasListeners()||((e=T(this,gn))==null||e.call(this),z(this,gn,void 0))}setEventListener(e){var r;z(this,Wr,e),(r=T(this,gn))==null||r.call(this),z(this,gn,e(this.setOnline.bind(this)))}setOnline(e){T(this,$r)!==e&&(z(this,$r,e),this.listeners.forEach(o=>{o(e)}))}isOnline(){return T(this,$r)}},$r=new WeakMap,gn=new WeakMap,Wr=new WeakMap,Uh),Li=new pk;function fk(t){return Math.min(1e3*2**t,3e4)}function Dg(t){return(t??"online")==="online"?Li.isOnline():!0}var tc=class extends Error{constructor(t){super("CancelledError"),this.revert=t==null?void 0:t.revert,this.silent=t==null?void 0:t.silent}};function Bg(t){let e=!1,r=0,o;const s=dk(),i=()=>s.status!=="pending",l=v=>{var j;if(!i()){const m=new tc(v);g(m),(j=t.onCancel)==null||j.call(t,m)}},a=()=>{e=!0},c=()=>{e=!1},d=()=>Lg.isFocused()&&(t.networkMode==="always"||Li.isOnline())&&t.canRun(),u=()=>Dg(t.networkMode)&&t.canRun(),p=v=>{i()||(o==null||o(),s.resolve(v))},g=v=>{i()||(o==null||o(),s.reject(v))},h=()=>new Promise(v=>{var j;o=m=>{(i()||d())&&v(m)},(j=t.onPause)==null||j.call(t)}).then(()=>{var v;o=void 0,i()||(v=t.onContinue)==null||v.call(t)}),b=()=>{if(i())return;let v;const j=r===0?t.initialPromise:void 0;try{v=j??t.fn()}catch(m){v=Promise.reject(m)}Promise.resolve(v).then(p).catch(m=>{var S;if(i())return;const f=t.retry??(dl?0:3),x=t.retryDelay??fk,w=typeof x=="function"?x(r,m):x,k=f===!0||typeof f=="number"&&r<f||typeof f=="function"&&f(r,m);if(e||!k){g(m);return}r++,(S=t.onFail)==null||S.call(t,r,m),sk(w).then(()=>d()?void 0:h()).then(()=>{e?g(m):b()})})};return{promise:s,status:()=>s.status,cancel:l,continue:()=>(o==null||o(),s),cancelRetry:a,continueRetry:c,canStart:u,start:()=>(u()?b():h().then(b),s)}}var Yn,Vh,Fg=(Vh=class{constructor(){Y(this,Yn)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),tk(this.gcTime)&&z(this,Yn,Xa.setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(t){this.gcTime=Math.max(this.gcTime||0,t??(dl?1/0:5*60*1e3))}clearGcTimeout(){T(this,Yn)&&(Xa.clearTimeout(T(this,Yn)),z(this,Yn,void 0))}},Yn=new WeakMap,Vh),Xn,Hr,nt,Zn,je,is,er,gt,Ft,Jh,mk=(Jh=class extends Fg{constructor(e){super();Y(this,gt);Y(this,Xn);Y(this,Hr);Y(this,nt);Y(this,Zn);Y(this,je);Y(this,is);Y(this,er);z(this,er,!1),z(this,is,e.defaultOptions),this.setOptions(e.options),this.observers=[],z(this,Zn,e.client),z(this,nt,T(this,Zn).getQueryCache()),this.queryKey=e.queryKey,this.queryHash=e.queryHash,z(this,Xn,uh(this.options)),this.state=e.state??T(this,Xn),this.scheduleGc()}get meta(){return this.options.meta}get promise(){var e;return(e=T(this,je))==null?void 0:e.promise}setOptions(e){if(this.options={...T(this,is),...e},this.updateGcTime(this.options.gcTime),this.state&&this.state.data===void 0){const r=uh(this.options);r.data!==void 0&&(this.setData(r.data,{updatedAt:r.dataUpdatedAt,manual:!0}),z(this,Xn,r))}}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&T(this,nt).remove(this)}setData(e,r){const o=ik(this.state.data,e,this.options);return Ne(this,gt,Ft).call(this,{data:o,type:"success",dataUpdatedAt:r==null?void 0:r.updatedAt,manual:r==null?void 0:r.manual}),o}setState(e,r){Ne(this,gt,Ft).call(this,{type:"setState",state:e,setStateOptions:r})}cancel(e){var o,s;const r=(o=T(this,je))==null?void 0:o.promise;return(s=T(this,je))==null||s.cancel(e),r?r.then(mt).catch(mt):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(T(this,Xn))}isActive(){return this.observers.some(e=>rk(e.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===xd||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStatic(){return this.getObserversCount()>0?this.observers.some(e=>Za(e.options.staleTime,this)==="static"):!1}isStale(){return this.getObserversCount()>0?this.observers.some(e=>e.getCurrentResult().isStale):this.state.data===void 0||this.state.isInvalidated}isStaleByTime(e=0){return this.state.data===void 0?!0:e==="static"?!1:this.state.isInvalidated?!0:!nk(this.state.dataUpdatedAt,e)}onFocus(){var r;const e=this.observers.find(o=>o.shouldFetchOnWindowFocus());e==null||e.refetch({cancelRefetch:!1}),(r=T(this,je))==null||r.continue()}onOnline(){var r;const e=this.observers.find(o=>o.shouldFetchOnReconnect());e==null||e.refetch({cancelRefetch:!1}),(r=T(this,je))==null||r.continue()}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),T(this,nt).notify({type:"observerAdded",query:this,observer:e}))}removeObserver(e){this.observers.includes(e)&&(this.observers=this.observers.filter(r=>r!==e),this.observers.length||(T(this,je)&&(T(this,er)?T(this,je).cancel({revert:!0}):T(this,je).cancelRetry()),this.scheduleGc()),T(this,nt).notify({type:"observerRemoved",query:this,observer:e}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||Ne(this,gt,Ft).call(this,{type:"invalidate"})}async fetch(e,r){var c,d,u,p,g,h,b,v,j,m,f,x;if(this.state.fetchStatus!=="idle"&&((c=T(this,je))==null?void 0:c.status())!=="rejected"){if(this.state.data!==void 0&&(r!=null&&r.cancelRefetch))this.cancel({silent:!0});else if(T(this,je))return T(this,je).continueRetry(),T(this,je).promise}if(e&&this.setOptions(e),!this.options.queryFn){const w=this.observers.find(k=>k.options.queryFn);w&&this.setOptions(w.options)}const o=new AbortController,s=w=>{Object.defineProperty(w,"signal",{enumerable:!0,get:()=>(z(this,er,!0),o.signal)})},i=()=>{const w=Ig(this.options,r),S=(()=>{const C={client:T(this,Zn),queryKey:this.queryKey,meta:this.meta};return s(C),C})();return z(this,er,!1),this.options.persister?this.options.persister(w,S,this):w(S)},a=(()=>{const w={fetchOptions:r,options:this.options,queryKey:this.queryKey,client:T(this,Zn),state:this.state,fetchFn:i};return s(w),w})();(d=this.options.behavior)==null||d.onFetch(a,this),z(this,Hr,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((u=a.fetchOptions)==null?void 0:u.meta))&&Ne(this,gt,Ft).call(this,{type:"fetch",meta:(p=a.fetchOptions)==null?void 0:p.meta}),z(this,je,Bg({initialPromise:r==null?void 0:r.initialPromise,fn:a.fetchFn,onCancel:w=>{w instanceof tc&&w.revert&&this.setState({...T(this,Hr),fetchStatus:"idle"}),o.abort()},onFail:(w,k)=>{Ne(this,gt,Ft).call(this,{type:"failed",failureCount:w,error:k})},onPause:()=>{Ne(this,gt,Ft).call(this,{type:"pause"})},onContinue:()=>{Ne(this,gt,Ft).call(this,{type:"continue"})},retry:a.options.retry,retryDelay:a.options.retryDelay,networkMode:a.options.networkMode,canRun:()=>!0}));try{const w=await T(this,je).start();if(w===void 0)throw new Error(`${this.queryHash} data is undefined`);return this.setData(w),(h=(g=T(this,nt).config).onSuccess)==null||h.call(g,w,this),(v=(b=T(this,nt).config).onSettled)==null||v.call(b,w,this.state.error,this),w}catch(w){if(w instanceof tc){if(w.silent)return T(this,je).promise;if(w.revert){if(this.state.data===void 0)throw w;return this.state.data}}throw Ne(this,gt,Ft).call(this,{type:"error",error:w}),(m=(j=T(this,nt).config).onError)==null||m.call(j,w,this),(x=(f=T(this,nt).config).onSettled)==null||x.call(f,this.state.data,w,this),w}finally{this.scheduleGc()}}},Xn=new WeakMap,Hr=new WeakMap,nt=new WeakMap,Zn=new WeakMap,je=new WeakMap,is=new WeakMap,er=new WeakMap,gt=new WeakSet,Ft=function(e){const r=o=>{switch(e.type){case"failed":return{...o,fetchFailureCount:e.failureCount,fetchFailureReason:e.error};case"pause":return{...o,fetchStatus:"paused"};case"continue":return{...o,fetchStatus:"fetching"};case"fetch":return{...o,...gk(o.data,this.options),fetchMeta:e.meta??null};case"success":const s={...o,data:e.data,dataUpdateCount:o.dataUpdateCount+1,dataUpdatedAt:e.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!e.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};return z(this,Hr,e.manual?s:void 0),s;case"error":const i=e.error;return{...o,error:i,errorUpdateCount:o.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:o.fetchFailureCount+1,fetchFailureReason:i,fetchStatus:"idle",status:"error"};case"invalidate":return{...o,isInvalidated:!0};case"setState":return{...o,...e.state}}};this.state=r(this.state),Ie.batch(()=>{this.observers.forEach(o=>{o.onQueryUpdate()}),T(this,nt).notify({query:this,type:"updated",action:e})})},Jh);function gk(t,e){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:Dg(e.networkMode)?"fetching":"paused",...t===void 0&&{error:null,status:"pending"}}}function uh(t){const e=typeof t.initialData=="function"?t.initialData():t.initialData,r=e!==void 0,o=r?typeof t.initialDataUpdatedAt=="function"?t.initialDataUpdatedAt():t.initialDataUpdatedAt:0;return{data:e,dataUpdateCount:0,dataUpdatedAt:r?o??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:r?"success":"pending",fetchStatus:"idle"}}function hh(t){return{onFetch:(e,r)=>{var u,p,g,h,b;const o=e.options,s=(g=(p=(u=e.fetchOptions)==null?void 0:u.meta)==null?void 0:p.fetchMore)==null?void 0:g.direction,i=((h=e.state.data)==null?void 0:h.pages)||[],l=((b=e.state.data)==null?void 0:b.pageParams)||[];let a={pages:[],pageParams:[]},c=0;const d=async()=>{let v=!1;const j=x=>{Object.defineProperty(x,"signal",{enumerable:!0,get:()=>(e.signal.aborted?v=!0:e.signal.addEventListener("abort",()=>{v=!0}),e.signal)})},m=Ig(e.options,e.fetchOptions),f=async(x,w,k)=>{if(v)return Promise.reject();if(w==null&&x.pages.length)return Promise.resolve(x);const C=(()=>{const F={client:e.client,queryKey:e.queryKey,pageParam:w,direction:k?"backward":"forward",meta:e.options.meta};return j(F),F})(),P=await m(C),{maxPages:D}=e.options,M=k?ak:lk;return{pages:M(x.pages,P,D),pageParams:M(x.pageParams,w,D)}};if(s&&i.length){const x=s==="backward",w=x?xk:ph,k={pages:i,pageParams:l},S=w(o,k);a=await f(k,S,x)}else{const x=t??i.length;do{const w=c===0?l[0]??o.initialPageParam:ph(o,a);if(c>0&&w==null)break;a=await f(a,w),c++}while(c<x)}return a};e.options.persister?e.fetchFn=()=>{var v,j;return(j=(v=e.options).persister)==null?void 0:j.call(v,d,{client:e.client,queryKey:e.queryKey,meta:e.options.meta,signal:e.signal},r)}:e.fetchFn=d}}}function ph(t,{pages:e,pageParams:r}){const o=e.length-1;return e.length>0?t.getNextPageParam(e[o],e,r[o],r):void 0}function xk(t,{pages:e,pageParams:r}){var o;return e.length>0?(o=t.getPreviousPageParam)==null?void 0:o.call(t,e[0],e,r[0],r):void 0}var ls,Et,_e,tr,Pt,cn,qh,vk=(qh=class extends Fg{constructor(e){super();Y(this,Pt);Y(this,ls);Y(this,Et);Y(this,_e);Y(this,tr);z(this,ls,e.client),this.mutationId=e.mutationId,z(this,_e,e.mutationCache),z(this,Et,[]),this.state=e.state||yk(),this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options=e,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(e){T(this,Et).includes(e)||(T(this,Et).push(e),this.clearGcTimeout(),T(this,_e).notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){z(this,Et,T(this,Et).filter(r=>r!==e)),this.scheduleGc(),T(this,_e).notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){T(this,Et).length||(this.state.status==="pending"?this.scheduleGc():T(this,_e).remove(this))}continue(){var e;return((e=T(this,tr))==null?void 0:e.continue())??this.execute(this.state.variables)}async execute(e){var l,a,c,d,u,p,g,h,b,v,j,m,f,x,w,k,S,C,P,D;const r=()=>{Ne(this,Pt,cn).call(this,{type:"continue"})},o={client:T(this,ls),meta:this.options.meta,mutationKey:this.options.mutationKey};z(this,tr,Bg({fn:()=>this.options.mutationFn?this.options.mutationFn(e,o):Promise.reject(new Error("No mutationFn found")),onFail:(M,F)=>{Ne(this,Pt,cn).call(this,{type:"failed",failureCount:M,error:F})},onPause:()=>{Ne(this,Pt,cn).call(this,{type:"pause"})},onContinue:r,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>T(this,_e).canRun(this)}));const s=this.state.status==="pending",i=!T(this,tr).canStart();try{if(s)r();else{Ne(this,Pt,cn).call(this,{type:"pending",variables:e,isPaused:i}),await((a=(l=T(this,_e).config).onMutate)==null?void 0:a.call(l,e,this,o));const F=await((d=(c=this.options).onMutate)==null?void 0:d.call(c,e,o));F!==this.state.context&&Ne(this,Pt,cn).call(this,{type:"pending",context:F,variables:e,isPaused:i})}const M=await T(this,tr).start();return await((p=(u=T(this,_e).config).onSuccess)==null?void 0:p.call(u,M,e,this.state.context,this,o)),await((h=(g=this.options).onSuccess)==null?void 0:h.call(g,M,e,this.state.context,o)),await((v=(b=T(this,_e).config).onSettled)==null?void 0:v.call(b,M,null,this.state.variables,this.state.context,this,o)),await((m=(j=this.options).onSettled)==null?void 0:m.call(j,M,null,e,this.state.context,o)),Ne(this,Pt,cn).call(this,{type:"success",data:M}),M}catch(M){try{throw await((x=(f=T(this,_e).config).onError)==null?void 0:x.call(f,M,e,this.state.context,this,o)),await((k=(w=this.options).onError)==null?void 0:k.call(w,M,e,this.state.context,o)),await((C=(S=T(this,_e).config).onSettled)==null?void 0:C.call(S,void 0,M,this.state.variables,this.state.context,this,o)),await((D=(P=this.options).onSettled)==null?void 0:D.call(P,void 0,M,e,this.state.context,o)),M}finally{Ne(this,Pt,cn).call(this,{type:"error",error:M})}}finally{T(this,_e).runNext(this)}}},ls=new WeakMap,Et=new WeakMap,_e=new WeakMap,tr=new WeakMap,Pt=new WeakSet,cn=function(e){const r=o=>{switch(e.type){case"failed":return{...o,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...o,isPaused:!0};case"continue":return{...o,isPaused:!1};case"pending":return{...o,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:e.isPaused,status:"pending",variables:e.variables,submittedAt:Date.now()};case"success":return{...o,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...o,data:void 0,error:e.error,failureCount:o.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"}}};this.state=r(this.state),Ie.batch(()=>{T(this,Et).forEach(o=>{o.onMutationUpdate(e)}),T(this,_e).notify({mutation:this,type:"updated",action:e})})},qh);function yk(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var Wt,xt,as,Kh,jk=(Kh=class extends cl{constructor(e={}){super();Y(this,Wt);Y(this,xt);Y(this,as);this.config=e,z(this,Wt,new Set),z(this,xt,new Map),z(this,as,0)}build(e,r,o){const s=new vk({client:e,mutationCache:this,mutationId:++bs(this,as)._,options:e.defaultMutationOptions(r),state:o});return this.add(s),s}add(e){T(this,Wt).add(e);const r=Us(e);if(typeof r=="string"){const o=T(this,xt).get(r);o?o.push(e):T(this,xt).set(r,[e])}this.notify({type:"added",mutation:e})}remove(e){if(T(this,Wt).delete(e)){const r=Us(e);if(typeof r=="string"){const o=T(this,xt).get(r);if(o)if(o.length>1){const s=o.indexOf(e);s!==-1&&o.splice(s,1)}else o[0]===e&&T(this,xt).delete(r)}}this.notify({type:"removed",mutation:e})}canRun(e){const r=Us(e);if(typeof r=="string"){const o=T(this,xt).get(r),s=o==null?void 0:o.find(i=>i.state.status==="pending");return!s||s===e}else return!0}runNext(e){var o;const r=Us(e);if(typeof r=="string"){const s=(o=T(this,xt).get(r))==null?void 0:o.find(i=>i!==e&&i.state.isPaused);return(s==null?void 0:s.continue())??Promise.resolve()}else return Promise.resolve()}clear(){Ie.batch(()=>{T(this,Wt).forEach(e=>{this.notify({type:"removed",mutation:e})}),T(this,Wt).clear(),T(this,xt).clear()})}getAll(){return Array.from(T(this,Wt))}find(e){const r={exact:!0,...e};return this.getAll().find(o=>ah(r,o))}findAll(e={}){return this.getAll().filter(r=>ah(e,r))}notify(e){Ie.batch(()=>{this.listeners.forEach(r=>{r(e)})})}resumePausedMutations(){const e=this.getAll().filter(r=>r.state.isPaused);return Ie.batch(()=>Promise.all(e.map(r=>r.continue().catch(mt))))}},Wt=new WeakMap,xt=new WeakMap,as=new WeakMap,Kh);function Us(t){var e;return(e=t.options.scope)==null?void 0:e.id}var Rt,Gh,wk=(Gh=class extends cl{constructor(e={}){super();Y(this,Rt);this.config=e,z(this,Rt,new Map)}build(e,r,o){const s=r.queryKey,i=r.queryHash??gd(s,r);let l=this.get(i);return l||(l=new mk({client:e,queryKey:s,queryHash:i,options:e.defaultQueryOptions(r),state:o,defaultOptions:e.getQueryDefaults(s)}),this.add(l)),l}add(e){T(this,Rt).has(e.queryHash)||(T(this,Rt).set(e.queryHash,e),this.notify({type:"added",query:e}))}remove(e){const r=T(this,Rt).get(e.queryHash);r&&(e.destroy(),r===e&&T(this,Rt).delete(e.queryHash),this.notify({type:"removed",query:e}))}clear(){Ie.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return T(this,Rt).get(e)}getAll(){return[...T(this,Rt).values()]}find(e){const r={exact:!0,...e};return this.getAll().find(o=>lh(r,o))}findAll(e={}){const r=this.getAll();return Object.keys(e).length>0?r.filter(o=>lh(e,o)):r}notify(e){Ie.batch(()=>{this.listeners.forEach(r=>{r(e)})})}onFocus(){Ie.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){Ie.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}},Rt=new WeakMap,Gh),ue,xn,vn,Ur,Vr,yn,Jr,qr,Qh,bk=(Qh=class{constructor(t={}){Y(this,ue);Y(this,xn);Y(this,vn);Y(this,Ur);Y(this,Vr);Y(this,yn);Y(this,Jr);Y(this,qr);z(this,ue,t.queryCache||new wk),z(this,xn,t.mutationCache||new jk),z(this,vn,t.defaultOptions||{}),z(this,Ur,new Map),z(this,Vr,new Map),z(this,yn,0)}mount(){bs(this,yn)._++,T(this,yn)===1&&(z(this,Jr,Lg.subscribe(async t=>{t&&(await this.resumePausedMutations(),T(this,ue).onFocus())})),z(this,qr,Li.subscribe(async t=>{t&&(await this.resumePausedMutations(),T(this,ue).onOnline())})))}unmount(){var t,e;bs(this,yn)._--,T(this,yn)===0&&((t=T(this,Jr))==null||t.call(this),z(this,Jr,void 0),(e=T(this,qr))==null||e.call(this),z(this,qr,void 0))}isFetching(t){return T(this,ue).findAll({...t,fetchStatus:"fetching"}).length}isMutating(t){return T(this,xn).findAll({...t,status:"pending"}).length}getQueryData(t){var r;const e=this.defaultQueryOptions({queryKey:t});return(r=T(this,ue).get(e.queryHash))==null?void 0:r.state.data}ensureQueryData(t){const e=this.defaultQueryOptions(t),r=T(this,ue).build(this,e),o=r.state.data;return o===void 0?this.fetchQuery(t):(t.revalidateIfStale&&r.isStaleByTime(Za(e.staleTime,r))&&this.prefetchQuery(e),Promise.resolve(o))}getQueriesData(t){return T(this,ue).findAll(t).map(({queryKey:e,state:r})=>{const o=r.data;return[e,o]})}setQueryData(t,e,r){const o=this.defaultQueryOptions({queryKey:t}),s=T(this,ue).get(o.queryHash),i=s==null?void 0:s.state.data,l=ek(e,i);if(l!==void 0)return T(this,ue).build(this,o).setData(l,{...r,manual:!0})}setQueriesData(t,e,r){return Ie.batch(()=>T(this,ue).findAll(t).map(({queryKey:o})=>[o,this.setQueryData(o,e,r)]))}getQueryState(t){var r;const e=this.defaultQueryOptions({queryKey:t});return(r=T(this,ue).get(e.queryHash))==null?void 0:r.state}removeQueries(t){const e=T(this,ue);Ie.batch(()=>{e.findAll(t).forEach(r=>{e.remove(r)})})}resetQueries(t,e){const r=T(this,ue);return Ie.batch(()=>(r.findAll(t).forEach(o=>{o.reset()}),this.refetchQueries({type:"active",...t},e)))}cancelQueries(t,e={}){const r={revert:!0,...e},o=Ie.batch(()=>T(this,ue).findAll(t).map(s=>s.cancel(r)));return Promise.all(o).then(mt).catch(mt)}invalidateQueries(t,e={}){return Ie.batch(()=>(T(this,ue).findAll(t).forEach(r=>{r.invalidate()}),(t==null?void 0:t.refetchType)==="none"?Promise.resolve():this.refetchQueries({...t,type:(t==null?void 0:t.refetchType)??(t==null?void 0:t.type)??"active"},e)))}refetchQueries(t,e={}){const r={...e,cancelRefetch:e.cancelRefetch??!0},o=Ie.batch(()=>T(this,ue).findAll(t).filter(s=>!s.isDisabled()&&!s.isStatic()).map(s=>{let i=s.fetch(void 0,r);return r.throwOnError||(i=i.catch(mt)),s.state.fetchStatus==="paused"?Promise.resolve():i}));return Promise.all(o).then(mt)}fetchQuery(t){const e=this.defaultQueryOptions(t);e.retry===void 0&&(e.retry=!1);const r=T(this,ue).build(this,e);return r.isStaleByTime(Za(e.staleTime,r))?r.fetch(e):Promise.resolve(r.state.data)}prefetchQuery(t){return this.fetchQuery(t).then(mt).catch(mt)}fetchInfiniteQuery(t){return t.behavior=hh(t.pages),this.fetchQuery(t)}prefetchInfiniteQuery(t){return this.fetchInfiniteQuery(t).then(mt).catch(mt)}ensureInfiniteQueryData(t){return t.behavior=hh(t.pages),this.ensureQueryData(t)}resumePausedMutations(){return Li.isOnline()?T(this,xn).resumePausedMutations():Promise.resolve()}getQueryCache(){return T(this,ue)}getMutationCache(){return T(this,xn)}getDefaultOptions(){return T(this,vn)}setDefaultOptions(t){z(this,vn,t)}setQueryDefaults(t,e){T(this,Ur).set(ns(t),{queryKey:t,defaultOptions:e})}getQueryDefaults(t){const e=[...T(this,Ur).values()],r={};return e.forEach(o=>{rs(t,o.queryKey)&&Object.assign(r,o.defaultOptions)}),r}setMutationDefaults(t,e){T(this,Vr).set(ns(t),{mutationKey:t,defaultOptions:e})}getMutationDefaults(t){const e=[...T(this,Vr).values()],r={};return e.forEach(o=>{rs(t,o.mutationKey)&&Object.assign(r,o.defaultOptions)}),r}defaultQueryOptions(t){if(t._defaulted)return t;const e={...T(this,vn).queries,...this.getQueryDefaults(t.queryKey),...t,_defaulted:!0};return e.queryHash||(e.queryHash=gd(e.queryKey,e)),e.refetchOnReconnect===void 0&&(e.refetchOnReconnect=e.networkMode!=="always"),e.throwOnError===void 0&&(e.throwOnError=!!e.suspense),!e.networkMode&&e.persister&&(e.networkMode="offlineFirst"),e.queryFn===xd&&(e.enabled=!1),e}defaultMutationOptions(t){return t!=null&&t._defaulted?t:{...T(this,vn).mutations,...(t==null?void 0:t.mutationKey)&&this.getMutationDefaults(t.mutationKey),...t,_defaulted:!0}}clear(){T(this,ue).clear(),T(this,xn).clear()}},ue=new WeakMap,xn=new WeakMap,vn=new WeakMap,Ur=new WeakMap,Vr=new WeakMap,yn=new WeakMap,Jr=new WeakMap,qr=new WeakMap,Qh),kk=y.createContext(void 0),Sk=({client:t,children:e})=>(y.useEffect(()=>(t.mount(),()=>{t.unmount()}),[t]),n.jsx(kk.Provider,{value:t,children:e}));/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function os(){return os=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},os.apply(this,arguments)}var bn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(bn||(bn={}));const fh="popstate";function Ck(t){t===void 0&&(t={});function e(o,s){let{pathname:i,search:l,hash:a}=o.location;return nc("",{pathname:i,search:l,hash:a},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function r(o,s){return typeof s=="string"?s:Di(s)}return Nk(e,r,null,t)}function ge(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function zg(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Tk(){return Math.random().toString(36).substr(2,8)}function mh(t,e){return{usr:t.state,key:t.key,idx:e}}function nc(t,e,r,o){return r===void 0&&(r=null),os({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?co(e):e,{state:r,key:e&&e.key||o||Tk()})}function Di(t){let{pathname:e="/",search:r="",hash:o=""}=t;return r&&r!=="?"&&(e+=r.charAt(0)==="?"?r:"?"+r),o&&o!=="#"&&(e+=o.charAt(0)==="#"?o:"#"+o),e}function co(t){let e={};if(t){let r=t.indexOf("#");r>=0&&(e.hash=t.substr(r),t=t.substr(0,r));let o=t.indexOf("?");o>=0&&(e.search=t.substr(o),t=t.substr(0,o)),t&&(e.pathname=t)}return e}function Nk(t,e,r,o){o===void 0&&(o={});let{window:s=document.defaultView,v5Compat:i=!1}=o,l=s.history,a=bn.Pop,c=null,d=u();d==null&&(d=0,l.replaceState(os({},l.state,{idx:d}),""));function u(){return(l.state||{idx:null}).idx}function p(){a=bn.Pop;let j=u(),m=j==null?null:j-d;d=j,c&&c({action:a,location:v.location,delta:m})}function g(j,m){a=bn.Push;let f=nc(v.location,j,m);d=u()+1;let x=mh(f,d),w=v.createHref(f);try{l.pushState(x,"",w)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;s.location.assign(w)}i&&c&&c({action:a,location:v.location,delta:1})}function h(j,m){a=bn.Replace;let f=nc(v.location,j,m);d=u();let x=mh(f,d),w=v.createHref(f);l.replaceState(x,"",w),i&&c&&c({action:a,location:v.location,delta:0})}function b(j){let m=s.location.origin!=="null"?s.location.origin:s.location.href,f=typeof j=="string"?j:Di(j);return f=f.replace(/ $/,"%20"),ge(m,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,m)}let v={get action(){return a},get location(){return t(s,l)},listen(j){if(c)throw new Error("A history only accepts one active listener");return s.addEventListener(fh,p),c=j,()=>{s.removeEventListener(fh,p),c=null}},createHref(j){return e(s,j)},createURL:b,encodeLocation(j){let m=b(j);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:g,replace:h,go(j){return l.go(j)}};return v}var gh;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(gh||(gh={}));function Ek(t,e,r){return r===void 0&&(r="/"),Pk(t,e,r)}function Pk(t,e,r,o){let s=typeof e=="string"?co(e):e,i=vd(s.pathname||"/",r);if(i==null)return null;let l=$g(t);Rk(l);let a=null;for(let c=0;a==null&&c<l.length;++c){let d=Wk(i);a=Fk(l[c],d)}return a}function $g(t,e,r,o){e===void 0&&(e=[]),r===void 0&&(r=[]),o===void 0&&(o="");let s=(i,l,a)=>{let c={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:l,route:i};c.relativePath.startsWith("/")&&(ge(c.relativePath.startsWith(o),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+o+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(o.length));let d=Mn([o,c.relativePath]),u=r.concat(c);i.children&&i.children.length>0&&(ge(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),$g(i.children,e,u,d)),!(i.path==null&&!i.index)&&e.push({path:d,score:Dk(d,i.index),routesMeta:u})};return t.forEach((i,l)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))s(i,l);else for(let c of Wg(i.path))s(i,l,c)}),e}function Wg(t){let e=t.split("/");if(e.length===0)return[];let[r,...o]=e,s=r.endsWith("?"),i=r.replace(/\?$/,"");if(o.length===0)return s?[i,""]:[i];let l=Wg(o.join("/")),a=[];return a.push(...l.map(c=>c===""?i:[i,c].join("/"))),s&&a.push(...l),a.map(c=>t.startsWith("/")&&c===""?"/":c)}function Rk(t){t.sort((e,r)=>e.score!==r.score?r.score-e.score:Bk(e.routesMeta.map(o=>o.childrenIndex),r.routesMeta.map(o=>o.childrenIndex)))}const Mk=/^:[\w-]+$/,Ak=3,_k=2,Ok=1,Ik=10,Lk=-2,xh=t=>t==="*";function Dk(t,e){let r=t.split("/"),o=r.length;return r.some(xh)&&(o+=Lk),e&&(o+=_k),r.filter(s=>!xh(s)).reduce((s,i)=>s+(Mk.test(i)?Ak:i===""?Ok:Ik),o)}function Bk(t,e){return t.length===e.length&&t.slice(0,-1).every((o,s)=>o===e[s])?t[t.length-1]-e[e.length-1]:0}function Fk(t,e,r){let{routesMeta:o}=t,s={},i="/",l=[];for(let a=0;a<o.length;++a){let c=o[a],d=a===o.length-1,u=i==="/"?e:e.slice(i.length)||"/",p=zk({path:c.relativePath,caseSensitive:c.caseSensitive,end:d},u),g=c.route;if(!p)return null;Object.assign(s,p.params),l.push({params:s,pathname:Mn([i,p.pathname]),pathnameBase:Jk(Mn([i,p.pathnameBase])),route:g}),p.pathnameBase!=="/"&&(i=Mn([i,p.pathnameBase]))}return l}function zk(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[r,o]=$k(t.path,t.caseSensitive,t.end),s=e.match(r);if(!s)return null;let i=s[0],l=i.replace(/(.)\/+$/,"$1"),a=s.slice(1);return{params:o.reduce((d,u,p)=>{let{paramName:g,isOptional:h}=u;if(g==="*"){let v=a[p]||"";l=i.slice(0,i.length-v.length).replace(/(.)\/+$/,"$1")}const b=a[p];return h&&!b?d[g]=void 0:d[g]=(b||"").replace(/%2F/g,"/"),d},{}),pathname:i,pathnameBase:l,pattern:t}}function $k(t,e,r){e===void 0&&(e=!1),r===void 0&&(r=!0),zg(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let o=[],s="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,a,c)=>(o.push({paramName:a,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(o.push({paramName:"*"}),s+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?s+="\\/*$":t!==""&&t!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),o]}function Wk(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return zg(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function vd(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let r=e.endsWith("/")?e.length-1:e.length,o=t.charAt(r);return o&&o!=="/"?null:t.slice(r)||"/"}function Hk(t,e){e===void 0&&(e="/");let{pathname:r,search:o="",hash:s=""}=typeof t=="string"?co(t):t;return{pathname:r?r.startsWith("/")?r:Uk(r,e):e,search:qk(o),hash:Kk(s)}}function Uk(t,e){let r=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(s=>{s===".."?r.length>1&&r.pop():s!=="."&&r.push(s)}),r.length>1?r.join("/"):"/"}function Gl(t,e,r,o){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(o)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Vk(t){return t.filter((e,r)=>r===0||e.route.path&&e.route.path.length>0)}function Hg(t,e){let r=Vk(t);return e?r.map((o,s)=>s===r.length-1?o.pathname:o.pathnameBase):r.map(o=>o.pathnameBase)}function Ug(t,e,r,o){o===void 0&&(o=!1);let s;typeof t=="string"?s=co(t):(s=os({},t),ge(!s.pathname||!s.pathname.includes("?"),Gl("?","pathname","search",s)),ge(!s.pathname||!s.pathname.includes("#"),Gl("#","pathname","hash",s)),ge(!s.search||!s.search.includes("#"),Gl("#","search","hash",s)));let i=t===""||s.pathname==="",l=i?"/":s.pathname,a;if(l==null)a=r;else{let p=e.length-1;if(!o&&l.startsWith("..")){let g=l.split("/");for(;g[0]==="..";)g.shift(),p-=1;s.pathname=g.join("/")}a=p>=0?e[p]:"/"}let c=Hk(s,a),d=l&&l!=="/"&&l.endsWith("/"),u=(i||l===".")&&r.endsWith("/");return!c.pathname.endsWith("/")&&(d||u)&&(c.pathname+="/"),c}const Mn=t=>t.join("/").replace(/\/\/+/g,"/"),Jk=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),qk=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Kk=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function Gk(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Vg=["post","put","patch","delete"];new Set(Vg);const Qk=["get",...Vg];new Set(Qk);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ss(){return ss=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},ss.apply(this,arguments)}const yd=y.createContext(null),Yk=y.createContext(null),hr=y.createContext(null),ul=y.createContext(null),$n=y.createContext({outlet:null,matches:[],isDataRoute:!1}),Jg=y.createContext(null);function Xk(t,e){let{relative:r}=e===void 0?{}:e;xs()||ge(!1);let{basename:o,navigator:s}=y.useContext(hr),{hash:i,pathname:l,search:a}=Kg(t,{relative:r}),c=l;return o!=="/"&&(c=l==="/"?o:Mn([o,l])),s.createHref({pathname:c,search:a,hash:i})}function xs(){return y.useContext(ul)!=null}function vs(){return xs()||ge(!1),y.useContext(ul).location}function qg(t){y.useContext(hr).static||y.useLayoutEffect(t)}function Zk(){let{isDataRoute:t}=y.useContext($n);return t?p1():e1()}function e1(){xs()||ge(!1);let t=y.useContext(yd),{basename:e,future:r,navigator:o}=y.useContext(hr),{matches:s}=y.useContext($n),{pathname:i}=vs(),l=JSON.stringify(Hg(s,r.v7_relativeSplatPath)),a=y.useRef(!1);return qg(()=>{a.current=!0}),y.useCallback(function(d,u){if(u===void 0&&(u={}),!a.current)return;if(typeof d=="number"){o.go(d);return}let p=Ug(d,JSON.parse(l),i,u.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:Mn([e,p.pathname])),(u.replace?o.replace:o.push)(p,u.state,u)},[e,o,l,i,t])}function t1(){let{matches:t}=y.useContext($n),e=t[t.length-1];return e?e.params:{}}function Kg(t,e){let{relative:r}=e===void 0?{}:e,{future:o}=y.useContext(hr),{matches:s}=y.useContext($n),{pathname:i}=vs(),l=JSON.stringify(Hg(s,o.v7_relativeSplatPath));return y.useMemo(()=>Ug(t,JSON.parse(l),i,r==="path"),[t,l,i,r])}function n1(t,e){return r1(t,e)}function r1(t,e,r,o){xs()||ge(!1);let{navigator:s}=y.useContext(hr),{matches:i}=y.useContext($n),l=i[i.length-1],a=l?l.params:{};l&&l.pathname;let c=l?l.pathnameBase:"/";l&&l.route;let d=vs(),u;if(e){var p;let j=typeof e=="string"?co(e):e;c==="/"||(p=j.pathname)!=null&&p.startsWith(c)||ge(!1),u=j}else u=d;let g=u.pathname||"/",h=g;if(c!=="/"){let j=c.replace(/^\//,"").split("/");h="/"+g.replace(/^\//,"").split("/").slice(j.length).join("/")}let b=Ek(t,{pathname:h}),v=a1(b&&b.map(j=>Object.assign({},j,{params:Object.assign({},a,j.params),pathname:Mn([c,s.encodeLocation?s.encodeLocation(j.pathname).pathname:j.pathname]),pathnameBase:j.pathnameBase==="/"?c:Mn([c,s.encodeLocation?s.encodeLocation(j.pathnameBase).pathname:j.pathnameBase])})),i,r,o);return e&&v?y.createElement(ul.Provider,{value:{location:ss({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:bn.Pop}},v):v}function o1(){let t=h1(),e=Gk(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),r=t instanceof Error?t.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return y.createElement(y.Fragment,null,y.createElement("h2",null,"Unexpected Application Error!"),y.createElement("h3",{style:{fontStyle:"italic"}},e),r?y.createElement("pre",{style:s},r):null,null)}const s1=y.createElement(o1,null);class i1 extends y.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,r){return r.location!==e.location||r.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:r.error,location:r.location,revalidation:e.revalidation||r.revalidation}}componentDidCatch(e,r){console.error("React Router caught the following error during render",e,r)}render(){return this.state.error!==void 0?y.createElement($n.Provider,{value:this.props.routeContext},y.createElement(Jg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function l1(t){let{routeContext:e,match:r,children:o}=t,s=y.useContext(yd);return s&&s.static&&s.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=r.route.id),y.createElement($n.Provider,{value:e},o)}function a1(t,e,r,o){var s;if(e===void 0&&(e=[]),r===void 0&&(r=null),o===void 0&&(o=null),t==null){var i;if(!r)return null;if(r.errors)t=r.matches;else if((i=o)!=null&&i.v7_partialHydration&&e.length===0&&!r.initialized&&r.matches.length>0)t=r.matches;else return null}let l=t,a=(s=r)==null?void 0:s.errors;if(a!=null){let u=l.findIndex(p=>p.route.id&&(a==null?void 0:a[p.route.id])!==void 0);u>=0||ge(!1),l=l.slice(0,Math.min(l.length,u+1))}let c=!1,d=-1;if(r&&o&&o.v7_partialHydration)for(let u=0;u<l.length;u++){let p=l[u];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(d=u),p.route.id){let{loaderData:g,errors:h}=r,b=p.route.loader&&g[p.route.id]===void 0&&(!h||h[p.route.id]===void 0);if(p.route.lazy||b){c=!0,d>=0?l=l.slice(0,d+1):l=[l[0]];break}}}return l.reduceRight((u,p,g)=>{let h,b=!1,v=null,j=null;r&&(h=a&&p.route.id?a[p.route.id]:void 0,v=p.route.errorElement||s1,c&&(d<0&&g===0?(f1("route-fallback"),b=!0,j=null):d===g&&(b=!0,j=p.route.hydrateFallbackElement||null)));let m=e.concat(l.slice(0,g+1)),f=()=>{let x;return h?x=v:b?x=j:p.route.Component?x=y.createElement(p.route.Component,null):p.route.element?x=p.route.element:x=u,y.createElement(l1,{match:p,routeContext:{outlet:u,matches:m,isDataRoute:r!=null},children:x})};return r&&(p.route.ErrorBoundary||p.route.errorElement||g===0)?y.createElement(i1,{location:r.location,revalidation:r.revalidation,component:v,error:h,children:f(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):f()},null)}var Gg=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Gg||{}),Qg=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Qg||{});function c1(t){let e=y.useContext(yd);return e||ge(!1),e}function d1(t){let e=y.useContext(Yk);return e||ge(!1),e}function u1(t){let e=y.useContext($n);return e||ge(!1),e}function Yg(t){let e=u1(),r=e.matches[e.matches.length-1];return r.route.id||ge(!1),r.route.id}function h1(){var t;let e=y.useContext(Jg),r=d1(),o=Yg();return e!==void 0?e:(t=r.errors)==null?void 0:t[o]}function p1(){let{router:t}=c1(Gg.UseNavigateStable),e=Yg(Qg.UseNavigateStable),r=y.useRef(!1);return qg(()=>{r.current=!0}),y.useCallback(function(s,i){i===void 0&&(i={}),r.current&&(typeof s=="number"?t.navigate(s):t.navigate(s,ss({fromRouteId:e},i)))},[t,e])}const vh={};function f1(t,e,r){vh[t]||(vh[t]=!0)}function m1(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function ii(t){ge(!1)}function g1(t){let{basename:e="/",children:r=null,location:o,navigationType:s=bn.Pop,navigator:i,static:l=!1,future:a}=t;xs()&&ge(!1);let c=e.replace(/^\/*/,"/"),d=y.useMemo(()=>({basename:c,navigator:i,static:l,future:ss({v7_relativeSplatPath:!1},a)}),[c,a,i,l]);typeof o=="string"&&(o=co(o));let{pathname:u="/",search:p="",hash:g="",state:h=null,key:b="default"}=o,v=y.useMemo(()=>{let j=vd(u,c);return j==null?null:{location:{pathname:j,search:p,hash:g,state:h,key:b},navigationType:s}},[c,u,p,g,h,b,s]);return v==null?null:y.createElement(hr.Provider,{value:d},y.createElement(ul.Provider,{children:r,value:v}))}function x1(t){let{children:e,location:r}=t;return n1(rc(e),r)}new Promise(()=>{});function rc(t,e){e===void 0&&(e=[]);let r=[];return y.Children.forEach(t,(o,s)=>{if(!y.isValidElement(o))return;let i=[...e,s];if(o.type===y.Fragment){r.push.apply(r,rc(o.props.children,i));return}o.type!==ii&&ge(!1),!o.props.index||!o.props.children||ge(!1);let l={id:o.props.id||i.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,loader:o.props.loader,action:o.props.action,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(l.children=rc(o.props.children,i)),r.push(l)}),r}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function oc(){return oc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},oc.apply(this,arguments)}function v1(t,e){if(t==null)return{};var r={},o=Object.keys(t),s,i;for(i=0;i<o.length;i++)s=o[i],!(e.indexOf(s)>=0)&&(r[s]=t[s]);return r}function y1(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function j1(t,e){return t.button===0&&(!e||e==="_self")&&!y1(t)}const w1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],b1="6";try{window.__reactRouterVersion=b1}catch{}const k1="startTransition",yh=ap[k1];function S1(t){let{basename:e,children:r,future:o,window:s}=t,i=y.useRef();i.current==null&&(i.current=Ck({window:s,v5Compat:!0}));let l=i.current,[a,c]=y.useState({action:l.action,location:l.location}),{v7_startTransition:d}=o||{},u=y.useCallback(p=>{d&&yh?yh(()=>c(p)):c(p)},[c,d]);return y.useLayoutEffect(()=>l.listen(u),[l,u]),y.useEffect(()=>m1(o),[o]),y.createElement(g1,{basename:e,children:r,location:a.location,navigationType:a.action,navigator:l,future:o})}const C1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",T1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,sc=y.forwardRef(function(e,r){let{onClick:o,relative:s,reloadDocument:i,replace:l,state:a,target:c,to:d,preventScrollReset:u,viewTransition:p}=e,g=v1(e,w1),{basename:h}=y.useContext(hr),b,v=!1;if(typeof d=="string"&&T1.test(d)&&(b=d,C1))try{let x=new URL(window.location.href),w=d.startsWith("//")?new URL(x.protocol+d):new URL(d),k=vd(w.pathname,h);w.origin===x.origin&&k!=null?d=k+w.search+w.hash:v=!0}catch{}let j=Xk(d,{relative:s}),m=N1(d,{replace:l,state:a,target:c,preventScrollReset:u,relative:s,viewTransition:p});function f(x){o&&o(x),x.defaultPrevented||m(x)}return y.createElement("a",oc({},g,{href:b||j,onClick:v||i?o:f,ref:r,target:c}))});var jh;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(jh||(jh={}));var wh;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(wh||(wh={}));function N1(t,e){let{target:r,replace:o,state:s,preventScrollReset:i,relative:l,viewTransition:a}=e===void 0?{}:e,c=Zk(),d=vs(),u=Kg(t,{relative:l});return y.useCallback(p=>{if(j1(p,r)){p.preventDefault();let g=o!==void 0?o:Di(d)===Di(u);c(t,{replace:g,state:s,preventScrollReset:i,relative:l,viewTransition:a})}},[d,c,u,o,s,r,t,i,l,a])}const E1=id("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function Xg({className:t,variant:e,...r}){return n.jsx("div",{className:Fe(E1({variant:e}),t),...r})}const P1=()=>n.jsxs("section",{className:"relative overflow-hidden py-20 px-6",children:[n.jsx("div",{className:"absolute inset-0 gradient-hero opacity-10"}),n.jsxs("div",{className:"relative max-w-4xl mx-auto text-center animate-fade-in",children:[n.jsx("div",{className:"flex justify-center mb-6",children:n.jsx(Xg,{variant:"secondary",className:"px-4 py-2 text-sm font-medium",children:"Developer Blog"})}),n.jsx("h1",{className:"font-playfair text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight",children:"Namita Malik"}),n.jsxs("div",{className:"flex items-center justify-center gap-6 text-xl text-muted-foreground mb-8 font-medium",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx(Wj,{className:"h-5 w-5 text-primary"}),n.jsx("span",{children:"LEARN"})]}),n.jsx("div",{className:"w-1 h-1 bg-muted-foreground rounded-full"}),n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx(qj,{className:"h-5 w-5 text-primary"}),n.jsx("span",{children:"THINK"})]}),n.jsx("div",{className:"w-1 h-1 bg-muted-foreground rounded-full"}),n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx(Hm,{className:"h-5 w-5 text-primary"}),n.jsx("span",{children:"CODE"})]}),n.jsx("div",{className:"w-1 h-1 bg-muted-foreground rounded-full"}),n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx(Jm,{className:"h-5 w-5 text-primary"}),n.jsx("span",{children:"SHARE"})]})]}),n.jsx("p",{className:"text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8",children:"Exploring the world of web development through Angular, JavaScript, RxJS, and modern web technologies. Join me on this journey of continuous learning and knowledge sharing."}),n.jsxs("div",{className:"flex items-center justify-center gap-6",children:[n.jsx("a",{href:"https://github.com/namitamalik",target:"_blank",rel:"noopener noreferrer",className:"p-3 rounded-full border border-border/50 hover:border-primary/50 hover:bg-accent/10 transition-smooth group","aria-label":"GitHub Profile",children:n.jsx(Um,{className:"h-5 w-5 text-muted-foreground group-hover:text-primary transition-smooth"})}),n.jsx("a",{href:"https://twitter.com/nm_1304",target:"_blank",rel:"noopener noreferrer",className:"p-3 rounded-full border border-border/50 hover:border-primary/50 hover:bg-accent/10 transition-smooth group","aria-label":"Twitter Profile",children:n.jsx(qm,{className:"h-5 w-5 text-muted-foreground group-hover:text-primary transition-smooth"})}),n.jsx("a",{href:"https://linkedin.com/in/namitamalik",target:"_blank",rel:"noopener noreferrer",className:"p-3 rounded-full border border-border/50 hover:border-primary/50 hover:bg-accent/10 transition-smooth group","aria-label":"LinkedIn Profile",children:n.jsx(Vm,{className:"h-5 w-5 text-muted-foreground group-hover:text-primary transition-smooth"})})]})]})]}),Zg=y.forwardRef(({className:t,...e},r)=>n.jsx("div",{ref:r,className:Fe("rounded-lg border bg-card text-card-foreground shadow-sm",t),...e}));Zg.displayName="Card";const ex=y.forwardRef(({className:t,...e},r)=>n.jsx("div",{ref:r,className:Fe("flex flex-col space-y-1.5 p-6",t),...e}));ex.displayName="CardHeader";const tx=y.forwardRef(({className:t,...e},r)=>n.jsx("h3",{ref:r,className:Fe("text-2xl font-semibold leading-none tracking-tight",t),...e}));tx.displayName="CardTitle";const R1=y.forwardRef(({className:t,...e},r)=>n.jsx("p",{ref:r,className:Fe("text-sm text-muted-foreground",t),...e}));R1.displayName="CardDescription";const nx=y.forwardRef(({className:t,...e},r)=>n.jsx("div",{ref:r,className:Fe("p-6 pt-0",t),...e}));nx.displayName="CardContent";const M1=y.forwardRef(({className:t,...e},r)=>n.jsx("div",{ref:r,className:Fe("flex items-center p-6 pt-0",t),...e}));M1.displayName="CardFooter";const A1=({category:t,posts:e,icon:r,description:o})=>n.jsxs(Zg,{className:"gradient-card shadow-card transition-smooth hover:shadow-elegant hover:scale-[1.02] group",children:[n.jsxs(ex,{className:"pb-4",children:[n.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[r&&n.jsx("div",{className:"text-primary",children:r}),n.jsx(tx,{className:"font-playfair text-xl text-primary group-hover:text-accent transition-smooth",children:t})]}),o&&n.jsx("p",{className:"text-muted-foreground text-sm leading-relaxed",children:o}),n.jsxs(Xg,{variant:"secondary",className:"w-fit",children:[e.length," ",e.length===1?"post":"posts"]})]}),n.jsx(nx,{className:"space-y-3",children:e.map((s,i)=>s.url.startsWith("http")?n.jsxs("a",{href:s.url,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 p-3 rounded-lg border border-border/50 hover:border-primary/30 hover:bg-accent/10 transition-smooth group/link",children:[n.jsx("div",{className:"flex-1",children:n.jsx("h4",{className:"font-medium text-sm leading-snug text-foreground group-hover/link:text-primary transition-smooth",children:s.title})}),n.jsx(Uj,{className:"h-4 w-4 text-muted-foreground group-hover/link:text-primary transition-smooth"})]},i):n.jsxs(sc,{to:s.url,className:"flex items-center gap-2 p-3 rounded-lg border border-border/50 hover:border-primary/30 hover:bg-accent/10 transition-smooth group/link",children:[n.jsx("div",{className:"flex-1",children:n.jsx("h4",{className:"font-medium text-sm leading-snug text-foreground group-hover/link:text-primary transition-smooth",children:s.title})}),n.jsx($j,{className:"h-4 w-4 text-muted-foreground group-hover/link:text-primary transition-smooth"})]},i))})]}),_1=()=>{const t=[{category:"Angular",icon:n.jsx(Jj,{className:"h-6 w-6"}),description:"Modern Angular development patterns, best practices, and advanced techniques.",posts:[{title:"Conditionally Loading modules in Angular",url:"/loading-modules-conditionally-in-angular/",category:"Angular(2+)"},{title:"Lazy Loading with Angular2 Routing",url:"/lazy-loading-with-angular2-routing/",category:"Angular(2+)"},{title:"Realtime Update in Angular2",url:"/realtime-update-in-angular2/",category:"Angular(2+)"},{title:"Fetching Data in Angular2",url:"/fetching-data-in-angular2/",category:"Angular(2+)"},{title:"ViewChild in Angular2",url:"/viewchild-in-angular2/",category:"Angular(2+)"},{title:"Services In Angular2",url:"/services-in-angular2/",category:"Angular(2+)"},{title:"NgRepeat vs ngFor",url:"/ngrepeat-vs-ngfor/",category:"Angular(2+)"}]},{category:"RxJS",icon:n.jsx(Qj,{className:"h-6 w-6"}),description:"Reactive programming with RxJS - operators, patterns, and real-world applications.",posts:[{title:"skipWhile vs filter in RxJS",url:"/skipwhile-vs-filter-in-rxjs/",category:"RxJS"},{title:"throttleTime vs debounceTime",url:"/throttletime-vs-debouncetime-in-rxjs/",category:"RxJS"},{title:"Map vs FlatMap",url:"/map-vs-flatmap/",category:"RxJS"}]},{category:"JavaScript (ES6+)",icon:n.jsx(Vj,{className:"h-6 w-6"}),description:"Modern JavaScript features, ES6+ syntax, and functional programming concepts.",posts:[{title:"Spread & Rest Operator in ES6",url:"/spread-and-rest-operator-in-es6/",category:"ECMA6"},{title:"for..of loop in ES6",url:"/for-of-in-ecma6/",category:"ECMA6"}]},{category:"JavaScript Fundamentals",icon:n.jsx(Hm,{className:"h-6 w-6"}),description:"Core JavaScript concepts, prototypes, inheritance, and fundamental patterns.",posts:[{title:"Prototype in Javascript",url:"/prototype-in-javascript/",category:"JavaScript"},{title:"Inheritance in JavaScript",url:"/inheritance-in-javascript/",category:"JavaScript"},{title:"JavaScript Inheritance Revisited",url:"/javascript-inheritance-revisited/",category:"JavaScript"},{title:"2 Way Data Binding in Plain Vanilla JavaScript",url:"/2-way-data-binding-in-plain-vanilla-javascript/",category:"JavaScript"},{title:"Hoisting in JavaScript",url:"/hoisting/",category:"JavaScript"}]},{category:"Data Structures",icon:n.jsx(Hj,{className:"h-6 w-6"}),description:"Implementation of fundamental data structures and algorithms in JavaScript.",posts:[{title:"Linked List in Javascript",url:"/linked-list-in-javascript/",category:"Data Structures"}]},{category:"AngularJS (Legacy)",icon:n.jsx(Kj,{className:"h-6 w-6"}),description:"AngularJS 1.x patterns, testing strategies, and migration insights.",posts:[{title:"Editing JavaScript Object using AngularJS",url:"/editing-javascript-object-using-angularjs/",category:"AngularJS"},{title:"E2E Testing with Protractor",url:"/e2e-testing-with-protractor/",category:"AngularJS"}]}];return n.jsxs("div",{className:"min-h-screen bg-background",children:[n.jsx(P1,{}),n.jsxs("main",{className:"max-w-7xl mx-auto px-6 pb-20",children:[n.jsxs("div",{className:"text-center mb-12 animate-slide-up",children:[n.jsx("h2",{className:"font-playfair text-3xl font-bold text-foreground mb-4",children:"Blog Categories"}),n.jsx("p",{className:"text-muted-foreground max-w-2xl mx-auto",children:"Explore articles organized by technology and topic. Click on any post to read more."})]}),n.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-up",children:t.map((e,r)=>n.jsx("div",{style:{animationDelay:`${r*.1}s`},className:"animate-slide-up",children:n.jsx(A1,{category:e.category,posts:e.posts,icon:e.icon,description:e.description})},e.category))})]})]})},O1=()=>{const t=vs();return y.useEffect(()=>{console.error("404 Error: User attempted to access non-existent route:",t.pathname)},[t.pathname]),n.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-100",children:n.jsxs("div",{className:"text-center",children:[n.jsx("h1",{className:"text-4xl font-bold mb-4",children:"404"}),n.jsx("p",{className:"text-xl text-gray-600 mb-4",children:"Oops! Page not found"}),n.jsx("a",{href:"/",className:"text-blue-500 hover:text-blue-700 underline",children:"Return to Home"})]})})};function bh(t){const e={code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"2 Way Data Binding in Plain Vanilla JavaScript"}),`
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
`,n.jsxs(e.p,{children:["| Please note that this is just a small piece of code demonstrating ",n.jsx(e.strong,{children:"2-way Data Binding"})," using ",n.jsx(e.strong,{children:"JavaScript"})," this code can be improved a lot on the basis of element type.e We can also have a ",n.jsx(e.strong,{children:"getter"})," function for getting the value in ",n.jsx(e.code,{children:"$scope.name"}),". But for the sake of simplicity I have deliberately avoided it."]})]})}function I1(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(bh,{...t})}):bh(t)}const L1=Object.freeze(Object.defineProperty({__proto__:null,default:I1},Symbol.toStringTag,{value:"Module"}));function kh(t){const e={blockquote:"blockquote",code:"code",h1:"h1",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"E2E Testing with Protractor"}),`
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
`,n.jsxs(e.p,{children:["In case you want to play with multiple elements, you can use ",n.jsx(e.code,{children:"element.all()"}),". There are certain helper ",n.jsx(e.strong,{children:"functions"}),":",n.jsx(e.code,{children:"count()"})," - which gives the number of elements, ",n.jsx(e.code,{children:"getIndex()"})," - to get an element using index."]})]})}function D1(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(kh,{...t})}):kh(t)}const B1=Object.freeze(Object.defineProperty({__proto__:null,default:D1},Symbol.toStringTag,{value:"Module"}));function Sh(t){const e={code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Editing JavaScript Object using AngularJS"}),`
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
`]})]})}function F1(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Sh,{...t})}):Sh(t)}const z1=Object.freeze(Object.defineProperty({__proto__:null,default:F1},Symbol.toStringTag,{value:"Module"}));function Ch(t){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Fetching Data in Angular2"}),`
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
`})})]})}function $1(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Ch,{...t})}):Ch(t)}const W1=Object.freeze(Object.defineProperty({__proto__:null,default:$1},Symbol.toStringTag,{value:"Module"}));function Th(t){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"for..of loop in ECMA6"}),`
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
`,n.jsxs(e.p,{children:["A working demo is available ",n.jsx(e.a,{href:"https://repl.it/@namitamalik/SeagreenLoathsomeAustralianshelduck",children:"here"}),"."]})]})}function H1(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Th,{...t})}):Th(t)}const U1=Object.freeze(Object.defineProperty({__proto__:null,default:H1},Symbol.toStringTag,{value:"Module"}));function Nh(t){const e={code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Hoisting in JavaScript"}),`
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
`,n.jsxs(e.p,{children:["This was all about ",n.jsx(e.strong,{children:"Hoisting"})," in ",n.jsx(e.strong,{children:"JavaScript"}),"."]})]})}function V1(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Nh,{...t})}):Nh(t)}const J1=Object.freeze(Object.defineProperty({__proto__:null,default:V1},Symbol.toStringTag,{value:"Module"}));function Eh(t){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Inheritance in JavaScript"}),`
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
`,n.jsxs(e.p,{children:["We are a little unfortunate that we don't have the ",n.jsx(e.strong,{children:"extend"})," keyword in ",n.jsx(e.strong,{children:"JavaScript"})," as available in ",n.jsx(e.strong,{children:"Java"}),", but we aren't that ",n.jsx(e.strong,{children:"unlucky"})," as we have ",n.jsx(e.strong,{children:n.jsx(e.a,{href:"http://namitamalik.github.io/Prototype-in-JavaScript/",children:"prototype"})})," to our rescue!"]})]})}function q1(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Eh,{...t})}):Eh(t)}const K1=Object.freeze(Object.defineProperty({__proto__:null,default:q1},Symbol.toStringTag,{value:"Module"}));function Ph(t){const e={a:"a",blockquote:"blockquote",code:"code",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.p,{children:"#JavaScript Inheritance Revisited"}),`
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
`,n.jsx(e.p,{children:"There are a lot of ways to achieve a single thing, but it depends upon the need of the project and the situation that one can decide which way to adopt!"})]})}function G1(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Ph,{...t})}):Ph(t)}const Q1=Object.freeze(Object.defineProperty({__proto__:null,default:G1},Symbol.toStringTag,{value:"Module"}));function Rh(t){const e={blockquote:"blockquote",code:"code",h1:"h1",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Lazy Loading with Angular2 Routing"}),`
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
I'll be discussing in my upcoming blog..till then Happy Learning!`]})]})}function Y1(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Rh,{...t})}):Rh(t)}const X1=Object.freeze(Object.defineProperty({__proto__:null,default:Y1},Symbol.toStringTag,{value:"Module"}));function Mh(t){const e={blockquote:"blockquote",code:"code",h1:"h1",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Linked List in Javascript"}),`
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
linked list printed which has `,n.jsx(e.code,{children:"6"})," removed from it as we have called ",n.jsx(e.code,{children:"deQueue"})," function to remove node with data/value ",n.jsx(e.code,{children:"6"})," in it."]})]})}function Z1(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Mh,{...t})}):Mh(t)}const eS=Object.freeze(Object.defineProperty({__proto__:null,default:Z1},Symbol.toStringTag,{value:"Module"}));function Ah(t){const e={code:"code",h1:"h1",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Loading Modules Conditionally in Angular"}),`
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
`,n.jsx(e.p,{children:"Well, that's all for this post. Happy Learning!"})]})}function tS(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Ah,{...t})}):Ah(t)}const nS=Object.freeze(Object.defineProperty({__proto__:null,default:tS},Symbol.toStringTag,{value:"Module"}));function _h(t){const e={code:"code",h1:"h1",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Map VS FlatMap"}),`
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
voyage will take us to each one of them.. till then happy learning!`]})]})}function rS(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(_h,{...t})}):_h(t)}const oS=Object.freeze(Object.defineProperty({__proto__:null,default:rS},Symbol.toStringTag,{value:"Module"}));function Oh(t){const e={blockquote:"blockquote",code:"code",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.p,{children:"#*ngFor in Angular2"}),`
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
`,n.jsxs(e.p,{children:["Now, run open ",n.jsx(e.strong,{children:"index.html"})," in your favourite browser!"]})]})}function sS(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Oh,{...t})}):Oh(t)}const iS=Object.freeze(Object.defineProperty({__proto__:null,default:sS},Symbol.toStringTag,{value:"Module"}));function Ih(t){const e={code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Prototype in JavaScript"}),`
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
`,n.jsxs(e.p,{children:["This is how ",n.jsx(e.strong,{children:"JavaScript"})," is a ",n.jsx(e.strong,{children:"Dynamic"})," language, we tweaked a well defined ",n.jsx(e.strong,{children:"JavaScript"})," object according to our own sweet wish!"]})]})}function lS(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Ih,{...t})}):Ih(t)}const aS=Object.freeze(Object.defineProperty({__proto__:null,default:lS},Symbol.toStringTag,{value:"Module"}));function Lh(t){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Realtime Update in Angular2"}),`
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
`]})]})}function cS(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Lh,{...t})}):Lh(t)}const dS=Object.freeze(Object.defineProperty({__proto__:null,default:cS},Symbol.toStringTag,{value:"Module"}));function Dh(t){const e={blockquote:"blockquote",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Services In Angular2"}),`
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
`,n.jsxs(e.p,{children:["Hence, this is the major difference between the services in ",n.jsx(e.strong,{children:"Angular 1.x and Angular2"}),"."]})]})}function uS(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Dh,{...t})}):Dh(t)}const hS=Object.freeze(Object.defineProperty({__proto__:null,default:uS},Symbol.toStringTag,{value:"Module"}));function Bh(t){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"skipWhile vs filter in RxJS"}),`
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
`,n.jsx(e.p,{children:"Happy Learning! Happy Sharing!"})]})}function pS(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Bh,{...t})}):Bh(t)}const fS=Object.freeze(Object.defineProperty({__proto__:null,default:pS},Symbol.toStringTag,{value:"Module"}));function Fh(t){const e={blockquote:"blockquote",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Spread and Rest Operator in ES6"}),`
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
`,n.jsx(e.p,{children:"That's all for this blog. Happy Learning folks!"})]})}function mS(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Fh,{...t})}):Fh(t)}const gS=Object.freeze(Object.defineProperty({__proto__:null,default:mS},Symbol.toStringTag,{value:"Module"}));function zh(t){const e={a:"a",code:"code",em:"em",h1:"h1",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"throttleTime vs debounceTime in RxJS"}),`
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
to use!`})]})}function xS(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(zh,{...t})}):zh(t)}const vS=Object.freeze(Object.defineProperty({__proto__:null,default:xS},Symbol.toStringTag,{value:"Module"}));function $h(t){const e={code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"ViewChild in Angular2"}),`
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
`,n.jsxs(e.p,{children:["In ",n.jsx(e.strong,{children:"Angular2"})," there are multiple ways of interaction between ",n.jsx(e.strong,{children:"components"}),", ",n.jsx(e.strong,{children:"ViewChild"})," is just one of them!"]})]})}function yS(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx($h,{...t})}):$h(t)}const jS=Object.freeze(Object.defineProperty({__proto__:null,default:yS},Symbol.toStringTag,{value:"Module"})),wS=id("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),rx=y.forwardRef(({className:t,variant:e,size:r,asChild:o=!1,...s},i)=>{const l=o?Jy:"button";return n.jsx(l,{className:Fe(wS({variant:e,size:r,className:t})),ref:i,...s})});rx.displayName="Button";const bS=Object.assign({"../posts/2-way-data-binding-in-plain-vanilla-javascript.mdx":L1,"../posts/e2e-testing-with-protractor.mdx":B1,"../posts/editing-javascript-object-using-angularjs.mdx":z1,"../posts/fetching-data-in-angular2.mdx":W1,"../posts/for-of-in-ecma6.mdx":U1,"../posts/hoisting.mdx":J1,"../posts/inheritance-in-javascript.mdx":K1,"../posts/javascript-inheritance-revisited.mdx":Q1,"../posts/lazy-loading-with-angular2-routing.mdx":X1,"../posts/linked-list-in-javascript.mdx":eS,"../posts/loading-modules-conditionally-in-angular.mdx":nS,"../posts/map-vs-flatmap.mdx":oS,"../posts/ngrepeat-vs-ngfor.mdx":iS,"../posts/prototype-in-javascript.mdx":aS,"../posts/realtime-update-in-angular2.mdx":dS,"../posts/services-in-angular2.mdx":hS,"../posts/skipwhile-vs-filter-in-rxjs.mdx":fS,"../posts/spread-and-rest-operator-in-es6.mdx":gS,"../posts/throttletime-vs-debouncetime-in-rxjs.mdx":vS,"../posts/viewchild-in-angular2.mdx":jS});function kS(){const{slug:t}=t1(),e=`../posts/${t}.mdx`,r=bS[e];if(!r)return n.jsx("div",{className:"min-h-screen bg-gradient-subtle flex items-center justify-center",children:n.jsxs("div",{className:"text-center",children:[n.jsx("h1",{className:"text-2xl font-bold text-foreground mb-4",children:"Post not found"}),n.jsx("p",{className:"text-muted-foreground mb-6",children:"The blog post you're looking for doesn't exist."}),n.jsx(sc,{to:"/",children:n.jsxs(rx,{variant:"default",children:[n.jsx(Hu,{className:"mr-2 h-4 w-4"}),"Back to Blog"]})})]})});const o=r.default;return n.jsx("div",{className:"min-h-screen bg-gradient-subtle",children:n.jsxs("div",{className:"container mx-auto px-4 py-8 max-w-4xl",children:[n.jsxs(sc,{to:"/",className:"inline-flex items-center text-primary hover:text-accent transition-smooth mb-8",children:[n.jsx(Hu,{className:"mr-2 h-4 w-4"}),"Back to Blog"]}),n.jsx("div",{className:"text-center mb-8 pb-4 border-b border-border/10",children:n.jsxs("p",{className:"text-muted-foreground text-sm",children:["by ",n.jsx("span",{className:"font-medium text-foreground",children:"Namita Malik"})]})}),n.jsx("article",{className:`prose prose-lg max-w-none mb-16
  prose-headings:text-foreground prose-headings:font-playfair
  prose-h1:text-4xl prose-h1:md:text-5xl prose-h1:font-bold prose-h1:mb-8 prose-h1:pb-6 prose-h1:border-b prose-h1:border-border/30 prose-h1:text-center
  prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:font-semibold prose-h2:mt-8 prose-h2:mb-4
  prose-h3:text-xl prose-h3:md:text-2xl prose-h3:font-medium prose-h3:mt-6 prose-h3:mb-3
  prose-p:text-foreground prose-p:leading-relaxed prose-p:mb-4
  prose-a:text-primary prose-a:no-underline hover:prose-a:text-accent
  prose-blockquote:border-l-primary prose-blockquote:text-muted-foreground
  prose-strong:text-foreground prose-em:text-foreground
  prose-ul:my-4 prose-ol:my-4 prose-li:my-1 prose-code:before:content-none prose-code:after:content-none`,children:n.jsx(o,{})}),n.jsxs("div",{className:"text-center pt-8 border-t border-border/20",children:[n.jsx("p",{className:"text-muted-foreground text-sm mb-4",children:"Connect with me"}),n.jsxs("div",{className:"flex items-center justify-center gap-4",children:[n.jsx("a",{href:"https://github.com/namitamalik",target:"_blank",rel:"noopener noreferrer",className:"p-2 rounded-full hover:bg-accent/10 transition-smooth group","aria-label":"GitHub Profile",children:n.jsx(Um,{className:"h-5 w-5 text-muted-foreground group-hover:text-primary transition-smooth"})}),n.jsx("a",{href:"https://twitter.com/namitamalik",target:"_blank",rel:"noopener noreferrer",className:"p-2 rounded-full hover:bg-accent/10 transition-smooth group","aria-label":"Twitter Profile",children:n.jsx(qm,{className:"h-5 w-5 text-muted-foreground group-hover:text-primary transition-smooth"})}),n.jsx("a",{href:"https://linkedin.com/in/namitamalik",target:"_blank",rel:"noopener noreferrer",className:"p-2 rounded-full hover:bg-accent/10 transition-smooth group","aria-label":"LinkedIn Profile",children:n.jsx(Vm,{className:"h-5 w-5 text-muted-foreground group-hover:text-primary transition-smooth"})}),n.jsx("button",{onClick:()=>{var s;return(s=navigator.share)==null?void 0:s.call(navigator,{url:window.location.href,title:document.title})},className:"p-2 rounded-full hover:bg-accent/10 transition-smooth group","aria-label":"Share this post",children:n.jsx(Jm,{className:"h-5 w-5 text-muted-foreground group-hover:text-primary transition-smooth"})})]})]})]})})}const SS=new bk,CS=()=>n.jsx(Sk,{client:SS,children:n.jsxs(G0,{children:[n.jsx(Aw,{}),n.jsx(db,{}),n.jsx(S1,{children:n.jsxs(x1,{children:[n.jsx(ii,{path:"/",element:n.jsx(_1,{})}),n.jsx(ii,{path:"/:slug",element:n.jsx(kS,{})}),n.jsx(ii,{path:"*",element:n.jsx(O1,{})})]})})]})});pm(document.getElementById("root")).render(n.jsx(CS,{}));
