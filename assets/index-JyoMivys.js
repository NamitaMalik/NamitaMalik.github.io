var Rd=t=>{throw TypeError(t)};var vl=(t,e,r)=>e.has(t)||Rd("Cannot "+r);var T=(t,e,r)=>(vl(t,e,"read from private field"),r?r.call(t):e.get(t)),Y=(t,e,r)=>e.has(t)?Rd("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),B=(t,e,r,o)=>(vl(t,e,"write to private field"),o?o.call(t,r):e.set(t,r),r),Se=(t,e,r)=>(vl(t,e,"access private method"),r);var Ss=(t,e,r,o)=>({set _(s){B(t,e,s,r)},get _(){return T(t,e,o)}});function bx(t,e){for(var r=0;r<e.length;r++){const o=e[r];if(typeof o!="string"&&!Array.isArray(o)){for(const s in o)if(s!=="default"&&!(s in t)){const i=Object.getOwnPropertyDescriptor(o,s);i&&Object.defineProperty(t,s,i.get?i:{enumerable:!0,get:()=>o[s]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}})();function ap(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var cp={exports:{}},zi={},dp={exports:{}},K={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var us=Symbol.for("react.element"),kx=Symbol.for("react.portal"),Sx=Symbol.for("react.fragment"),Cx=Symbol.for("react.strict_mode"),Tx=Symbol.for("react.profiler"),Nx=Symbol.for("react.provider"),Px=Symbol.for("react.context"),Ex=Symbol.for("react.forward_ref"),Ax=Symbol.for("react.suspense"),Mx=Symbol.for("react.memo"),Rx=Symbol.for("react.lazy"),_d=Symbol.iterator;function _x(t){return t===null||typeof t!="object"?null:(t=_d&&t[_d]||t["@@iterator"],typeof t=="function"?t:null)}var up={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},hp=Object.assign,pp={};function io(t,e,r){this.props=t,this.context=e,this.refs=pp,this.updater=r||up}io.prototype.isReactComponent={};io.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};io.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function fp(){}fp.prototype=io.prototype;function uc(t,e,r){this.props=t,this.context=e,this.refs=pp,this.updater=r||up}var hc=uc.prototype=new fp;hc.constructor=uc;hp(hc,io.prototype);hc.isPureReactComponent=!0;var Id=Array.isArray,mp=Object.prototype.hasOwnProperty,pc={current:null},gp={key:!0,ref:!0,__self:!0,__source:!0};function xp(t,e,r){var o,s={},i=null,l=null;if(e!=null)for(o in e.ref!==void 0&&(l=e.ref),e.key!==void 0&&(i=""+e.key),e)mp.call(e,o)&&!gp.hasOwnProperty(o)&&(s[o]=e[o]);var a=arguments.length-2;if(a===1)s.children=r;else if(1<a){for(var c=Array(a),d=0;d<a;d++)c[d]=arguments[d+2];s.children=c}if(t&&t.defaultProps)for(o in a=t.defaultProps,a)s[o]===void 0&&(s[o]=a[o]);return{$$typeof:us,type:t,key:i,ref:l,props:s,_owner:pc.current}}function Ix(t,e){return{$$typeof:us,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function fc(t){return typeof t=="object"&&t!==null&&t.$$typeof===us}function Ox(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(r){return e[r]})}var Od=/\/+/g;function yl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Ox(""+t.key):e.toString(36)}function Js(t,e,r,o,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var l=!1;if(t===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case us:case kx:l=!0}}if(l)return l=t,s=s(l),t=o===""?"."+yl(l,0):o,Id(s)?(r="",t!=null&&(r=t.replace(Od,"$&/")+"/"),Js(s,e,r,"",function(d){return d})):s!=null&&(fc(s)&&(s=Ix(s,r+(!s.key||l&&l.key===s.key?"":(""+s.key).replace(Od,"$&/")+"/")+t)),e.push(s)),1;if(l=0,o=o===""?".":o+":",Id(t))for(var a=0;a<t.length;a++){i=t[a];var c=o+yl(i,a);l+=Js(i,e,r,c,s)}else if(c=_x(t),typeof c=="function")for(t=c.call(t),a=0;!(i=t.next()).done;)i=i.value,c=o+yl(i,a++),l+=Js(i,e,r,c,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return l}function Cs(t,e,r){if(t==null)return t;var o=[],s=0;return Js(t,o,"","",function(i){return e.call(r,i,s++)}),o}function Lx(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(r){(t._status===0||t._status===-1)&&(t._status=1,t._result=r)},function(r){(t._status===0||t._status===-1)&&(t._status=2,t._result=r)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var De={current:null},Ks={transition:null},Dx={ReactCurrentDispatcher:De,ReactCurrentBatchConfig:Ks,ReactCurrentOwner:pc};function vp(){throw Error("act(...) is not supported in production builds of React.")}K.Children={map:Cs,forEach:function(t,e,r){Cs(t,function(){e.apply(this,arguments)},r)},count:function(t){var e=0;return Cs(t,function(){e++}),e},toArray:function(t){return Cs(t,function(e){return e})||[]},only:function(t){if(!fc(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};K.Component=io;K.Fragment=Sx;K.Profiler=Tx;K.PureComponent=uc;K.StrictMode=Cx;K.Suspense=Ax;K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Dx;K.act=vp;K.cloneElement=function(t,e,r){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var o=hp({},t.props),s=t.key,i=t.ref,l=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,l=pc.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(c in e)mp.call(e,c)&&!gp.hasOwnProperty(c)&&(o[c]=e[c]===void 0&&a!==void 0?a[c]:e[c])}var c=arguments.length-2;if(c===1)o.children=r;else if(1<c){a=Array(c);for(var d=0;d<c;d++)a[d]=arguments[d+2];o.children=a}return{$$typeof:us,type:t.type,key:s,ref:i,props:o,_owner:l}};K.createContext=function(t){return t={$$typeof:Px,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Nx,_context:t},t.Consumer=t};K.createElement=xp;K.createFactory=function(t){var e=xp.bind(null,t);return e.type=t,e};K.createRef=function(){return{current:null}};K.forwardRef=function(t){return{$$typeof:Ex,render:t}};K.isValidElement=fc;K.lazy=function(t){return{$$typeof:Rx,_payload:{_status:-1,_result:t},_init:Lx}};K.memo=function(t,e){return{$$typeof:Mx,type:t,compare:e===void 0?null:e}};K.startTransition=function(t){var e=Ks.transition;Ks.transition={};try{t()}finally{Ks.transition=e}};K.unstable_act=vp;K.useCallback=function(t,e){return De.current.useCallback(t,e)};K.useContext=function(t){return De.current.useContext(t)};K.useDebugValue=function(){};K.useDeferredValue=function(t){return De.current.useDeferredValue(t)};K.useEffect=function(t,e){return De.current.useEffect(t,e)};K.useId=function(){return De.current.useId()};K.useImperativeHandle=function(t,e,r){return De.current.useImperativeHandle(t,e,r)};K.useInsertionEffect=function(t,e){return De.current.useInsertionEffect(t,e)};K.useLayoutEffect=function(t,e){return De.current.useLayoutEffect(t,e)};K.useMemo=function(t,e){return De.current.useMemo(t,e)};K.useReducer=function(t,e,r){return De.current.useReducer(t,e,r)};K.useRef=function(t){return De.current.useRef(t)};K.useState=function(t){return De.current.useState(t)};K.useSyncExternalStore=function(t,e,r){return De.current.useSyncExternalStore(t,e,r)};K.useTransition=function(){return De.current.useTransition()};K.version="18.3.1";dp.exports=K;var v=dp.exports;const M=ap(v),mc=bx({__proto__:null,default:M},[v]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fx=v,Bx=Symbol.for("react.element"),zx=Symbol.for("react.fragment"),Wx=Object.prototype.hasOwnProperty,$x=Fx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Hx={key:!0,ref:!0,__self:!0,__source:!0};function yp(t,e,r){var o,s={},i=null,l=null;r!==void 0&&(i=""+r),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(l=e.ref);for(o in e)Wx.call(e,o)&&!Hx.hasOwnProperty(o)&&(s[o]=e[o]);if(t&&t.defaultProps)for(o in e=t.defaultProps,e)s[o]===void 0&&(s[o]=e[o]);return{$$typeof:Bx,type:t,key:i,ref:l,props:s,_owner:$x.current}}zi.Fragment=zx;zi.jsx=yp;zi.jsxs=yp;cp.exports=zi;var n=cp.exports,jp={exports:{}},et={},wp={exports:{}},bp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,E){var O=N.length;N.push(E);e:for(;0<O;){var U=O-1>>>1,F=N[U];if(0<s(F,E))N[U]=E,N[O]=F,O=U;else break e}}function r(N){return N.length===0?null:N[0]}function o(N){if(N.length===0)return null;var E=N[0],O=N.pop();if(O!==E){N[0]=O;e:for(var U=0,F=N.length,J=F>>>1;U<J;){var Q=2*(U+1)-1,fe=N[Q],Pe=Q+1,Z=N[Pe];if(0>s(fe,O))Pe<F&&0>s(Z,fe)?(N[U]=Z,N[Pe]=O,U=Pe):(N[U]=fe,N[Q]=O,U=Q);else if(Pe<F&&0>s(Z,O))N[U]=Z,N[Pe]=O,U=Pe;else break e}}return E}function s(N,E){var O=N.sortIndex-E.sortIndex;return O!==0?O:N.id-E.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var l=Date,a=l.now();t.unstable_now=function(){return l.now()-a}}var c=[],d=[],u=1,p=null,m=3,h=!1,w=!1,y=!1,b=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(N){for(var E=r(d);E!==null;){if(E.callback===null)o(d);else if(E.startTime<=N)o(d),E.sortIndex=E.expirationTime,e(c,E);else break;E=r(d)}}function j(N){if(y=!1,x(N),!w)if(r(c)!==null)w=!0,W(k);else{var E=r(d);E!==null&&H(j,E.startTime-N)}}function k(N,E){w=!1,y&&(y=!1,g(P),P=-1),h=!0;var O=m;try{for(x(E),p=r(c);p!==null&&(!(p.expirationTime>E)||N&&!z());){var U=p.callback;if(typeof U=="function"){p.callback=null,m=p.priorityLevel;var F=U(p.expirationTime<=E);E=t.unstable_now(),typeof F=="function"?p.callback=F:p===r(c)&&o(c),x(E)}else o(c);p=r(c)}if(p!==null)var J=!0;else{var Q=r(d);Q!==null&&H(j,Q.startTime-E),J=!1}return J}finally{p=null,m=O,h=!1}}var S=!1,C=null,P=-1,I=5,R=-1;function z(){return!(t.unstable_now()-R<I)}function D(){if(C!==null){var N=t.unstable_now();R=N;var E=!0;try{E=C(!0,N)}finally{E?q():(S=!1,C=null)}}else S=!1}var q;if(typeof f=="function")q=function(){f(D)};else if(typeof MessageChannel<"u"){var _=new MessageChannel,G=_.port2;_.port1.onmessage=D,q=function(){G.postMessage(null)}}else q=function(){b(D,0)};function W(N){C=N,S||(S=!0,q())}function H(N,E){P=b(function(){N(t.unstable_now())},E)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){w||h||(w=!0,W(k))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return r(c)},t.unstable_next=function(N){switch(m){case 1:case 2:case 3:var E=3;break;default:E=m}var O=m;m=E;try{return N()}finally{m=O}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,E){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var O=m;m=N;try{return E()}finally{m=O}},t.unstable_scheduleCallback=function(N,E,O){var U=t.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?U+O:U):O=U,N){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=O+F,N={id:u++,callback:E,priorityLevel:N,startTime:O,expirationTime:F,sortIndex:-1},O>U?(N.sortIndex=O,e(d,N),r(c)===null&&N===r(d)&&(y?(g(P),P=-1):y=!0,H(j,O-U))):(N.sortIndex=F,e(c,N),w||h||(w=!0,W(k))),N},t.unstable_shouldYield=z,t.unstable_wrapCallback=function(N){var E=m;return function(){var O=m;m=E;try{return N.apply(this,arguments)}finally{m=O}}}})(bp);wp.exports=bp;var Ux=wp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vx=v,Ze=Ux;function A(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,r=1;r<arguments.length;r++)e+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var kp=new Set,zo={};function hr(t,e){Yr(t,e),Yr(t+"Capture",e)}function Yr(t,e){for(zo[t]=e,t=0;t<e.length;t++)kp.add(e[t])}var qt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ea=Object.prototype.hasOwnProperty,qx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ld={},Dd={};function Jx(t){return ea.call(Dd,t)?!0:ea.call(Ld,t)?!1:qx.test(t)?Dd[t]=!0:(Ld[t]=!0,!1)}function Kx(t,e,r,o){if(r!==null&&r.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return o?!1:r!==null?!r.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Gx(t,e,r,o){if(e===null||typeof e>"u"||Kx(t,e,r,o))return!0;if(o)return!1;if(r!==null)switch(r.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Fe(t,e,r,o,s,i,l){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=o,this.attributeNamespace=s,this.mustUseProperty=r,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=l}var Ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ne[t]=new Fe(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ne[e]=new Fe(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ne[t]=new Fe(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ne[t]=new Fe(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ne[t]=new Fe(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ne[t]=new Fe(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ne[t]=new Fe(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ne[t]=new Fe(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ne[t]=new Fe(t,5,!1,t.toLowerCase(),null,!1,!1)});var gc=/[\-:]([a-z])/g;function xc(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(gc,xc);Ne[e]=new Fe(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(gc,xc);Ne[e]=new Fe(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(gc,xc);Ne[e]=new Fe(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ne[t]=new Fe(t,1,!1,t.toLowerCase(),null,!1,!1)});Ne.xlinkHref=new Fe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ne[t]=new Fe(t,1,!1,t.toLowerCase(),null,!0,!0)});function vc(t,e,r,o){var s=Ne.hasOwnProperty(e)?Ne[e]:null;(s!==null?s.type!==0:o||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Gx(e,r,s,o)&&(r=null),o||s===null?Jx(e)&&(r===null?t.removeAttribute(e):t.setAttribute(e,""+r)):s.mustUseProperty?t[s.propertyName]=r===null?s.type===3?!1:"":r:(e=s.attributeName,o=s.attributeNamespace,r===null?t.removeAttribute(e):(s=s.type,r=s===3||s===4&&r===!0?"":""+r,o?t.setAttributeNS(o,e,r):t.setAttribute(e,r))))}var Xt=Vx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ts=Symbol.for("react.element"),br=Symbol.for("react.portal"),kr=Symbol.for("react.fragment"),yc=Symbol.for("react.strict_mode"),ta=Symbol.for("react.profiler"),Sp=Symbol.for("react.provider"),Cp=Symbol.for("react.context"),jc=Symbol.for("react.forward_ref"),na=Symbol.for("react.suspense"),ra=Symbol.for("react.suspense_list"),wc=Symbol.for("react.memo"),un=Symbol.for("react.lazy"),Tp=Symbol.for("react.offscreen"),Fd=Symbol.iterator;function go(t){return t===null||typeof t!="object"?null:(t=Fd&&t[Fd]||t["@@iterator"],typeof t=="function"?t:null)}var de=Object.assign,jl;function To(t){if(jl===void 0)try{throw Error()}catch(r){var e=r.stack.trim().match(/\n( *(at )?)/);jl=e&&e[1]||""}return`
`+jl+t}var wl=!1;function bl(t,e){if(!t||wl)return"";wl=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var o=d}Reflect.construct(t,[],e)}else{try{e.call()}catch(d){o=d}t.call(e.prototype)}else{try{throw Error()}catch(d){o=d}t()}}catch(d){if(d&&o&&typeof d.stack=="string"){for(var s=d.stack.split(`
`),i=o.stack.split(`
`),l=s.length-1,a=i.length-1;1<=l&&0<=a&&s[l]!==i[a];)a--;for(;1<=l&&0<=a;l--,a--)if(s[l]!==i[a]){if(l!==1||a!==1)do if(l--,a--,0>a||s[l]!==i[a]){var c=`
`+s[l].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=l&&0<=a);break}}}finally{wl=!1,Error.prepareStackTrace=r}return(t=t?t.displayName||t.name:"")?To(t):""}function Qx(t){switch(t.tag){case 5:return To(t.type);case 16:return To("Lazy");case 13:return To("Suspense");case 19:return To("SuspenseList");case 0:case 2:case 15:return t=bl(t.type,!1),t;case 11:return t=bl(t.type.render,!1),t;case 1:return t=bl(t.type,!0),t;default:return""}}function oa(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case kr:return"Fragment";case br:return"Portal";case ta:return"Profiler";case yc:return"StrictMode";case na:return"Suspense";case ra:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Cp:return(t.displayName||"Context")+".Consumer";case Sp:return(t._context.displayName||"Context")+".Provider";case jc:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case wc:return e=t.displayName||null,e!==null?e:oa(t.type)||"Memo";case un:e=t._payload,t=t._init;try{return oa(t(e))}catch{}}return null}function Yx(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return oa(e);case 8:return e===yc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function _n(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Np(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Xx(t){var e=Np(t)?"checked":"value",r=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),o=""+t[e];if(!t.hasOwnProperty(e)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var s=r.get,i=r.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(l){o=""+l,i.call(this,l)}}),Object.defineProperty(t,e,{enumerable:r.enumerable}),{getValue:function(){return o},setValue:function(l){o=""+l},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ns(t){t._valueTracker||(t._valueTracker=Xx(t))}function Pp(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var r=e.getValue(),o="";return t&&(o=Np(t)?t.checked?"true":"false":t.value),t=o,t!==r?(e.setValue(t),!0):!1}function ci(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function sa(t,e){var r=e.checked;return de({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??t._wrapperState.initialChecked})}function Bd(t,e){var r=e.defaultValue==null?"":e.defaultValue,o=e.checked!=null?e.checked:e.defaultChecked;r=_n(e.value!=null?e.value:r),t._wrapperState={initialChecked:o,initialValue:r,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Ep(t,e){e=e.checked,e!=null&&vc(t,"checked",e,!1)}function ia(t,e){Ep(t,e);var r=_n(e.value),o=e.type;if(r!=null)o==="number"?(r===0&&t.value===""||t.value!=r)&&(t.value=""+r):t.value!==""+r&&(t.value=""+r);else if(o==="submit"||o==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?la(t,e.type,r):e.hasOwnProperty("defaultValue")&&la(t,e.type,_n(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function zd(t,e,r){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var o=e.type;if(!(o!=="submit"&&o!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,r||e===t.value||(t.value=e),t.defaultValue=e}r=t.name,r!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,r!==""&&(t.name=r)}function la(t,e,r){(e!=="number"||ci(t.ownerDocument)!==t)&&(r==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+r&&(t.defaultValue=""+r))}var No=Array.isArray;function Ir(t,e,r,o){if(t=t.options,e){e={};for(var s=0;s<r.length;s++)e["$"+r[s]]=!0;for(r=0;r<t.length;r++)s=e.hasOwnProperty("$"+t[r].value),t[r].selected!==s&&(t[r].selected=s),s&&o&&(t[r].defaultSelected=!0)}else{for(r=""+_n(r),e=null,s=0;s<t.length;s++){if(t[s].value===r){t[s].selected=!0,o&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function aa(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(A(91));return de({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Wd(t,e){var r=e.value;if(r==null){if(r=e.children,e=e.defaultValue,r!=null){if(e!=null)throw Error(A(92));if(No(r)){if(1<r.length)throw Error(A(93));r=r[0]}e=r}e==null&&(e=""),r=e}t._wrapperState={initialValue:_n(r)}}function Ap(t,e){var r=_n(e.value),o=_n(e.defaultValue);r!=null&&(r=""+r,r!==t.value&&(t.value=r),e.defaultValue==null&&t.defaultValue!==r&&(t.defaultValue=r)),o!=null&&(t.defaultValue=""+o)}function $d(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Mp(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ca(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Mp(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ps,Rp=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,r,o,s){MSApp.execUnsafeLocalFunction(function(){return t(e,r,o,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ps=Ps||document.createElement("div"),Ps.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ps.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Wo(t,e){if(e){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=e;return}}t.textContent=e}var Ao={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Zx=["Webkit","ms","Moz","O"];Object.keys(Ao).forEach(function(t){Zx.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ao[e]=Ao[t]})});function _p(t,e,r){return e==null||typeof e=="boolean"||e===""?"":r||typeof e!="number"||e===0||Ao.hasOwnProperty(t)&&Ao[t]?(""+e).trim():e+"px"}function Ip(t,e){t=t.style;for(var r in e)if(e.hasOwnProperty(r)){var o=r.indexOf("--")===0,s=_p(r,e[r],o);r==="float"&&(r="cssFloat"),o?t.setProperty(r,s):t[r]=s}}var ev=de({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function da(t,e){if(e){if(ev[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(A(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(A(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(A(61))}if(e.style!=null&&typeof e.style!="object")throw Error(A(62))}}function ua(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ha=null;function bc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var pa=null,Or=null,Lr=null;function Hd(t){if(t=fs(t)){if(typeof pa!="function")throw Error(A(280));var e=t.stateNode;e&&(e=Vi(e),pa(t.stateNode,t.type,e))}}function Op(t){Or?Lr?Lr.push(t):Lr=[t]:Or=t}function Lp(){if(Or){var t=Or,e=Lr;if(Lr=Or=null,Hd(t),e)for(t=0;t<e.length;t++)Hd(e[t])}}function Dp(t,e){return t(e)}function Fp(){}var kl=!1;function Bp(t,e,r){if(kl)return t(e,r);kl=!0;try{return Dp(t,e,r)}finally{kl=!1,(Or!==null||Lr!==null)&&(Fp(),Lp())}}function $o(t,e){var r=t.stateNode;if(r===null)return null;var o=Vi(r);if(o===null)return null;r=o[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(A(231,e,typeof r));return r}var fa=!1;if(qt)try{var xo={};Object.defineProperty(xo,"passive",{get:function(){fa=!0}}),window.addEventListener("test",xo,xo),window.removeEventListener("test",xo,xo)}catch{fa=!1}function tv(t,e,r,o,s,i,l,a,c){var d=Array.prototype.slice.call(arguments,3);try{e.apply(r,d)}catch(u){this.onError(u)}}var Mo=!1,di=null,ui=!1,ma=null,nv={onError:function(t){Mo=!0,di=t}};function rv(t,e,r,o,s,i,l,a,c){Mo=!1,di=null,tv.apply(nv,arguments)}function ov(t,e,r,o,s,i,l,a,c){if(rv.apply(this,arguments),Mo){if(Mo){var d=di;Mo=!1,di=null}else throw Error(A(198));ui||(ui=!0,ma=d)}}function pr(t){var e=t,r=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(r=e.return),t=e.return;while(t)}return e.tag===3?r:null}function zp(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ud(t){if(pr(t)!==t)throw Error(A(188))}function sv(t){var e=t.alternate;if(!e){if(e=pr(t),e===null)throw Error(A(188));return e!==t?null:t}for(var r=t,o=e;;){var s=r.return;if(s===null)break;var i=s.alternate;if(i===null){if(o=s.return,o!==null){r=o;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===r)return Ud(s),t;if(i===o)return Ud(s),e;i=i.sibling}throw Error(A(188))}if(r.return!==o.return)r=s,o=i;else{for(var l=!1,a=s.child;a;){if(a===r){l=!0,r=s,o=i;break}if(a===o){l=!0,o=s,r=i;break}a=a.sibling}if(!l){for(a=i.child;a;){if(a===r){l=!0,r=i,o=s;break}if(a===o){l=!0,o=i,r=s;break}a=a.sibling}if(!l)throw Error(A(189))}}if(r.alternate!==o)throw Error(A(190))}if(r.tag!==3)throw Error(A(188));return r.stateNode.current===r?t:e}function Wp(t){return t=sv(t),t!==null?$p(t):null}function $p(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=$p(t);if(e!==null)return e;t=t.sibling}return null}var Hp=Ze.unstable_scheduleCallback,Vd=Ze.unstable_cancelCallback,iv=Ze.unstable_shouldYield,lv=Ze.unstable_requestPaint,pe=Ze.unstable_now,av=Ze.unstable_getCurrentPriorityLevel,kc=Ze.unstable_ImmediatePriority,Up=Ze.unstable_UserBlockingPriority,hi=Ze.unstable_NormalPriority,cv=Ze.unstable_LowPriority,Vp=Ze.unstable_IdlePriority,Wi=null,It=null;function dv(t){if(It&&typeof It.onCommitFiberRoot=="function")try{It.onCommitFiberRoot(Wi,t,void 0,(t.current.flags&128)===128)}catch{}}var wt=Math.clz32?Math.clz32:pv,uv=Math.log,hv=Math.LN2;function pv(t){return t>>>=0,t===0?32:31-(uv(t)/hv|0)|0}var Es=64,As=4194304;function Po(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function pi(t,e){var r=t.pendingLanes;if(r===0)return 0;var o=0,s=t.suspendedLanes,i=t.pingedLanes,l=r&268435455;if(l!==0){var a=l&~s;a!==0?o=Po(a):(i&=l,i!==0&&(o=Po(i)))}else l=r&~s,l!==0?o=Po(l):i!==0&&(o=Po(i));if(o===0)return 0;if(e!==0&&e!==o&&!(e&s)&&(s=o&-o,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(o&4&&(o|=r&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=o;0<e;)r=31-wt(e),s=1<<r,o|=t[r],e&=~s;return o}function fv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function mv(t,e){for(var r=t.suspendedLanes,o=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var l=31-wt(i),a=1<<l,c=s[l];c===-1?(!(a&r)||a&o)&&(s[l]=fv(a,e)):c<=e&&(t.expiredLanes|=a),i&=~a}}function ga(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function qp(){var t=Es;return Es<<=1,!(Es&4194240)&&(Es=64),t}function Sl(t){for(var e=[],r=0;31>r;r++)e.push(t);return e}function hs(t,e,r){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-wt(e),t[e]=r}function gv(t,e){var r=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var o=t.eventTimes;for(t=t.expirationTimes;0<r;){var s=31-wt(r),i=1<<s;e[s]=0,o[s]=-1,t[s]=-1,r&=~i}}function Sc(t,e){var r=t.entangledLanes|=e;for(t=t.entanglements;r;){var o=31-wt(r),s=1<<o;s&e|t[o]&e&&(t[o]|=e),r&=~s}}var ee=0;function Jp(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Kp,Cc,Gp,Qp,Yp,xa=!1,Ms=[],Sn=null,Cn=null,Tn=null,Ho=new Map,Uo=new Map,pn=[],xv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qd(t,e){switch(t){case"focusin":case"focusout":Sn=null;break;case"dragenter":case"dragleave":Cn=null;break;case"mouseover":case"mouseout":Tn=null;break;case"pointerover":case"pointerout":Ho.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Uo.delete(e.pointerId)}}function vo(t,e,r,o,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:r,eventSystemFlags:o,nativeEvent:i,targetContainers:[s]},e!==null&&(e=fs(e),e!==null&&Cc(e)),t):(t.eventSystemFlags|=o,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function vv(t,e,r,o,s){switch(e){case"focusin":return Sn=vo(Sn,t,e,r,o,s),!0;case"dragenter":return Cn=vo(Cn,t,e,r,o,s),!0;case"mouseover":return Tn=vo(Tn,t,e,r,o,s),!0;case"pointerover":var i=s.pointerId;return Ho.set(i,vo(Ho.get(i)||null,t,e,r,o,s)),!0;case"gotpointercapture":return i=s.pointerId,Uo.set(i,vo(Uo.get(i)||null,t,e,r,o,s)),!0}return!1}function Xp(t){var e=Gn(t.target);if(e!==null){var r=pr(e);if(r!==null){if(e=r.tag,e===13){if(e=zp(r),e!==null){t.blockedOn=e,Yp(t.priority,function(){Gp(r)});return}}else if(e===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Gs(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var r=va(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(r===null){r=t.nativeEvent;var o=new r.constructor(r.type,r);ha=o,r.target.dispatchEvent(o),ha=null}else return e=fs(r),e!==null&&Cc(e),t.blockedOn=r,!1;e.shift()}return!0}function Jd(t,e,r){Gs(t)&&r.delete(e)}function yv(){xa=!1,Sn!==null&&Gs(Sn)&&(Sn=null),Cn!==null&&Gs(Cn)&&(Cn=null),Tn!==null&&Gs(Tn)&&(Tn=null),Ho.forEach(Jd),Uo.forEach(Jd)}function yo(t,e){t.blockedOn===e&&(t.blockedOn=null,xa||(xa=!0,Ze.unstable_scheduleCallback(Ze.unstable_NormalPriority,yv)))}function Vo(t){function e(s){return yo(s,t)}if(0<Ms.length){yo(Ms[0],t);for(var r=1;r<Ms.length;r++){var o=Ms[r];o.blockedOn===t&&(o.blockedOn=null)}}for(Sn!==null&&yo(Sn,t),Cn!==null&&yo(Cn,t),Tn!==null&&yo(Tn,t),Ho.forEach(e),Uo.forEach(e),r=0;r<pn.length;r++)o=pn[r],o.blockedOn===t&&(o.blockedOn=null);for(;0<pn.length&&(r=pn[0],r.blockedOn===null);)Xp(r),r.blockedOn===null&&pn.shift()}var Dr=Xt.ReactCurrentBatchConfig,fi=!0;function jv(t,e,r,o){var s=ee,i=Dr.transition;Dr.transition=null;try{ee=1,Tc(t,e,r,o)}finally{ee=s,Dr.transition=i}}function wv(t,e,r,o){var s=ee,i=Dr.transition;Dr.transition=null;try{ee=4,Tc(t,e,r,o)}finally{ee=s,Dr.transition=i}}function Tc(t,e,r,o){if(fi){var s=va(t,e,r,o);if(s===null)Il(t,e,o,mi,r),qd(t,o);else if(vv(s,t,e,r,o))o.stopPropagation();else if(qd(t,o),e&4&&-1<xv.indexOf(t)){for(;s!==null;){var i=fs(s);if(i!==null&&Kp(i),i=va(t,e,r,o),i===null&&Il(t,e,o,mi,r),i===s)break;s=i}s!==null&&o.stopPropagation()}else Il(t,e,o,null,r)}}var mi=null;function va(t,e,r,o){if(mi=null,t=bc(o),t=Gn(t),t!==null)if(e=pr(t),e===null)t=null;else if(r=e.tag,r===13){if(t=zp(e),t!==null)return t;t=null}else if(r===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return mi=t,null}function Zp(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(av()){case kc:return 1;case Up:return 4;case hi:case cv:return 16;case Vp:return 536870912;default:return 16}default:return 16}}var wn=null,Nc=null,Qs=null;function ef(){if(Qs)return Qs;var t,e=Nc,r=e.length,o,s="value"in wn?wn.value:wn.textContent,i=s.length;for(t=0;t<r&&e[t]===s[t];t++);var l=r-t;for(o=1;o<=l&&e[r-o]===s[i-o];o++);return Qs=s.slice(t,1<o?1-o:void 0)}function Ys(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Rs(){return!0}function Kd(){return!1}function tt(t){function e(r,o,s,i,l){this._reactName=r,this._targetInst=s,this.type=o,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(r=t[a],this[a]=r?r(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Rs:Kd,this.isPropagationStopped=Kd,this}return de(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Rs)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Rs)},persist:function(){},isPersistent:Rs}),e}var lo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pc=tt(lo),ps=de({},lo,{view:0,detail:0}),bv=tt(ps),Cl,Tl,jo,$i=de({},ps,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ec,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==jo&&(jo&&t.type==="mousemove"?(Cl=t.screenX-jo.screenX,Tl=t.screenY-jo.screenY):Tl=Cl=0,jo=t),Cl)},movementY:function(t){return"movementY"in t?t.movementY:Tl}}),Gd=tt($i),kv=de({},$i,{dataTransfer:0}),Sv=tt(kv),Cv=de({},ps,{relatedTarget:0}),Nl=tt(Cv),Tv=de({},lo,{animationName:0,elapsedTime:0,pseudoElement:0}),Nv=tt(Tv),Pv=de({},lo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ev=tt(Pv),Av=de({},lo,{data:0}),Qd=tt(Av),Mv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Rv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_v={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Iv(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=_v[t])?!!e[t]:!1}function Ec(){return Iv}var Ov=de({},ps,{key:function(t){if(t.key){var e=Mv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ys(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Rv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ec,charCode:function(t){return t.type==="keypress"?Ys(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ys(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Lv=tt(Ov),Dv=de({},$i,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Yd=tt(Dv),Fv=de({},ps,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ec}),Bv=tt(Fv),zv=de({},lo,{propertyName:0,elapsedTime:0,pseudoElement:0}),Wv=tt(zv),$v=de({},$i,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Hv=tt($v),Uv=[9,13,27,32],Ac=qt&&"CompositionEvent"in window,Ro=null;qt&&"documentMode"in document&&(Ro=document.documentMode);var Vv=qt&&"TextEvent"in window&&!Ro,tf=qt&&(!Ac||Ro&&8<Ro&&11>=Ro),Xd=" ",Zd=!1;function nf(t,e){switch(t){case"keyup":return Uv.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Sr=!1;function qv(t,e){switch(t){case"compositionend":return rf(e);case"keypress":return e.which!==32?null:(Zd=!0,Xd);case"textInput":return t=e.data,t===Xd&&Zd?null:t;default:return null}}function Jv(t,e){if(Sr)return t==="compositionend"||!Ac&&nf(t,e)?(t=ef(),Qs=Nc=wn=null,Sr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return tf&&e.locale!=="ko"?null:e.data;default:return null}}var Kv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function eu(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Kv[t.type]:e==="textarea"}function of(t,e,r,o){Op(o),e=gi(e,"onChange"),0<e.length&&(r=new Pc("onChange","change",null,r,o),t.push({event:r,listeners:e}))}var _o=null,qo=null;function Gv(t){gf(t,0)}function Hi(t){var e=Nr(t);if(Pp(e))return t}function Qv(t,e){if(t==="change")return e}var sf=!1;if(qt){var Pl;if(qt){var El="oninput"in document;if(!El){var tu=document.createElement("div");tu.setAttribute("oninput","return;"),El=typeof tu.oninput=="function"}Pl=El}else Pl=!1;sf=Pl&&(!document.documentMode||9<document.documentMode)}function nu(){_o&&(_o.detachEvent("onpropertychange",lf),qo=_o=null)}function lf(t){if(t.propertyName==="value"&&Hi(qo)){var e=[];of(e,qo,t,bc(t)),Bp(Gv,e)}}function Yv(t,e,r){t==="focusin"?(nu(),_o=e,qo=r,_o.attachEvent("onpropertychange",lf)):t==="focusout"&&nu()}function Xv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Hi(qo)}function Zv(t,e){if(t==="click")return Hi(e)}function ey(t,e){if(t==="input"||t==="change")return Hi(e)}function ty(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var kt=typeof Object.is=="function"?Object.is:ty;function Jo(t,e){if(kt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var r=Object.keys(t),o=Object.keys(e);if(r.length!==o.length)return!1;for(o=0;o<r.length;o++){var s=r[o];if(!ea.call(e,s)||!kt(t[s],e[s]))return!1}return!0}function ru(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ou(t,e){var r=ru(t);t=0;for(var o;r;){if(r.nodeType===3){if(o=t+r.textContent.length,t<=e&&o>=e)return{node:r,offset:e-t};t=o}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=ru(r)}}function af(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?af(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function cf(){for(var t=window,e=ci();e instanceof t.HTMLIFrameElement;){try{var r=typeof e.contentWindow.location.href=="string"}catch{r=!1}if(r)t=e.contentWindow;else break;e=ci(t.document)}return e}function Mc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function ny(t){var e=cf(),r=t.focusedElem,o=t.selectionRange;if(e!==r&&r&&r.ownerDocument&&af(r.ownerDocument.documentElement,r)){if(o!==null&&Mc(r)){if(e=o.start,t=o.end,t===void 0&&(t=e),"selectionStart"in r)r.selectionStart=e,r.selectionEnd=Math.min(t,r.value.length);else if(t=(e=r.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=r.textContent.length,i=Math.min(o.start,s);o=o.end===void 0?i:Math.min(o.end,s),!t.extend&&i>o&&(s=o,o=i,i=s),s=ou(r,i);var l=ou(r,o);s&&l&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==l.node||t.focusOffset!==l.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>o?(t.addRange(e),t.extend(l.node,l.offset)):(e.setEnd(l.node,l.offset),t.addRange(e)))}}for(e=[],t=r;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<e.length;r++)t=e[r],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ry=qt&&"documentMode"in document&&11>=document.documentMode,Cr=null,ya=null,Io=null,ja=!1;function su(t,e,r){var o=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;ja||Cr==null||Cr!==ci(o)||(o=Cr,"selectionStart"in o&&Mc(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Io&&Jo(Io,o)||(Io=o,o=gi(ya,"onSelect"),0<o.length&&(e=new Pc("onSelect","select",null,e,r),t.push({event:e,listeners:o}),e.target=Cr)))}function _s(t,e){var r={};return r[t.toLowerCase()]=e.toLowerCase(),r["Webkit"+t]="webkit"+e,r["Moz"+t]="moz"+e,r}var Tr={animationend:_s("Animation","AnimationEnd"),animationiteration:_s("Animation","AnimationIteration"),animationstart:_s("Animation","AnimationStart"),transitionend:_s("Transition","TransitionEnd")},Al={},df={};qt&&(df=document.createElement("div").style,"AnimationEvent"in window||(delete Tr.animationend.animation,delete Tr.animationiteration.animation,delete Tr.animationstart.animation),"TransitionEvent"in window||delete Tr.transitionend.transition);function Ui(t){if(Al[t])return Al[t];if(!Tr[t])return t;var e=Tr[t],r;for(r in e)if(e.hasOwnProperty(r)&&r in df)return Al[t]=e[r];return t}var uf=Ui("animationend"),hf=Ui("animationiteration"),pf=Ui("animationstart"),ff=Ui("transitionend"),mf=new Map,iu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Bn(t,e){mf.set(t,e),hr(e,[t])}for(var Ml=0;Ml<iu.length;Ml++){var Rl=iu[Ml],oy=Rl.toLowerCase(),sy=Rl[0].toUpperCase()+Rl.slice(1);Bn(oy,"on"+sy)}Bn(uf,"onAnimationEnd");Bn(hf,"onAnimationIteration");Bn(pf,"onAnimationStart");Bn("dblclick","onDoubleClick");Bn("focusin","onFocus");Bn("focusout","onBlur");Bn(ff,"onTransitionEnd");Yr("onMouseEnter",["mouseout","mouseover"]);Yr("onMouseLeave",["mouseout","mouseover"]);Yr("onPointerEnter",["pointerout","pointerover"]);Yr("onPointerLeave",["pointerout","pointerover"]);hr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));hr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));hr("onBeforeInput",["compositionend","keypress","textInput","paste"]);hr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));hr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));hr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Eo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),iy=new Set("cancel close invalid load scroll toggle".split(" ").concat(Eo));function lu(t,e,r){var o=t.type||"unknown-event";t.currentTarget=r,ov(o,e,void 0,t),t.currentTarget=null}function gf(t,e){e=(e&4)!==0;for(var r=0;r<t.length;r++){var o=t[r],s=o.event;o=o.listeners;e:{var i=void 0;if(e)for(var l=o.length-1;0<=l;l--){var a=o[l],c=a.instance,d=a.currentTarget;if(a=a.listener,c!==i&&s.isPropagationStopped())break e;lu(s,a,d),i=c}else for(l=0;l<o.length;l++){if(a=o[l],c=a.instance,d=a.currentTarget,a=a.listener,c!==i&&s.isPropagationStopped())break e;lu(s,a,d),i=c}}}if(ui)throw t=ma,ui=!1,ma=null,t}function oe(t,e){var r=e[Ca];r===void 0&&(r=e[Ca]=new Set);var o=t+"__bubble";r.has(o)||(xf(e,t,2,!1),r.add(o))}function _l(t,e,r){var o=0;e&&(o|=4),xf(r,t,o,e)}var Is="_reactListening"+Math.random().toString(36).slice(2);function Ko(t){if(!t[Is]){t[Is]=!0,kp.forEach(function(r){r!=="selectionchange"&&(iy.has(r)||_l(r,!1,t),_l(r,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Is]||(e[Is]=!0,_l("selectionchange",!1,e))}}function xf(t,e,r,o){switch(Zp(e)){case 1:var s=jv;break;case 4:s=wv;break;default:s=Tc}r=s.bind(null,e,r,t),s=void 0,!fa||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),o?s!==void 0?t.addEventListener(e,r,{capture:!0,passive:s}):t.addEventListener(e,r,!0):s!==void 0?t.addEventListener(e,r,{passive:s}):t.addEventListener(e,r,!1)}function Il(t,e,r,o,s){var i=o;if(!(e&1)&&!(e&2)&&o!==null)e:for(;;){if(o===null)return;var l=o.tag;if(l===3||l===4){var a=o.stateNode.containerInfo;if(a===s||a.nodeType===8&&a.parentNode===s)break;if(l===4)for(l=o.return;l!==null;){var c=l.tag;if((c===3||c===4)&&(c=l.stateNode.containerInfo,c===s||c.nodeType===8&&c.parentNode===s))return;l=l.return}for(;a!==null;){if(l=Gn(a),l===null)return;if(c=l.tag,c===5||c===6){o=i=l;continue e}a=a.parentNode}}o=o.return}Bp(function(){var d=i,u=bc(r),p=[];e:{var m=mf.get(t);if(m!==void 0){var h=Pc,w=t;switch(t){case"keypress":if(Ys(r)===0)break e;case"keydown":case"keyup":h=Lv;break;case"focusin":w="focus",h=Nl;break;case"focusout":w="blur",h=Nl;break;case"beforeblur":case"afterblur":h=Nl;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=Gd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=Sv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=Bv;break;case uf:case hf:case pf:h=Nv;break;case ff:h=Wv;break;case"scroll":h=bv;break;case"wheel":h=Hv;break;case"copy":case"cut":case"paste":h=Ev;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Yd}var y=(e&4)!==0,b=!y&&t==="scroll",g=y?m!==null?m+"Capture":null:m;y=[];for(var f=d,x;f!==null;){x=f;var j=x.stateNode;if(x.tag===5&&j!==null&&(x=j,g!==null&&(j=$o(f,g),j!=null&&y.push(Go(f,j,x)))),b)break;f=f.return}0<y.length&&(m=new h(m,w,null,r,u),p.push({event:m,listeners:y}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",h=t==="mouseout"||t==="pointerout",m&&r!==ha&&(w=r.relatedTarget||r.fromElement)&&(Gn(w)||w[Jt]))break e;if((h||m)&&(m=u.window===u?u:(m=u.ownerDocument)?m.defaultView||m.parentWindow:window,h?(w=r.relatedTarget||r.toElement,h=d,w=w?Gn(w):null,w!==null&&(b=pr(w),w!==b||w.tag!==5&&w.tag!==6)&&(w=null)):(h=null,w=d),h!==w)){if(y=Gd,j="onMouseLeave",g="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(y=Yd,j="onPointerLeave",g="onPointerEnter",f="pointer"),b=h==null?m:Nr(h),x=w==null?m:Nr(w),m=new y(j,f+"leave",h,r,u),m.target=b,m.relatedTarget=x,j=null,Gn(u)===d&&(y=new y(g,f+"enter",w,r,u),y.target=x,y.relatedTarget=b,j=y),b=j,h&&w)t:{for(y=h,g=w,f=0,x=y;x;x=wr(x))f++;for(x=0,j=g;j;j=wr(j))x++;for(;0<f-x;)y=wr(y),f--;for(;0<x-f;)g=wr(g),x--;for(;f--;){if(y===g||g!==null&&y===g.alternate)break t;y=wr(y),g=wr(g)}y=null}else y=null;h!==null&&au(p,m,h,y,!1),w!==null&&b!==null&&au(p,b,w,y,!0)}}e:{if(m=d?Nr(d):window,h=m.nodeName&&m.nodeName.toLowerCase(),h==="select"||h==="input"&&m.type==="file")var k=Qv;else if(eu(m))if(sf)k=ey;else{k=Xv;var S=Yv}else(h=m.nodeName)&&h.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(k=Zv);if(k&&(k=k(t,d))){of(p,k,r,u);break e}S&&S(t,m,d),t==="focusout"&&(S=m._wrapperState)&&S.controlled&&m.type==="number"&&la(m,"number",m.value)}switch(S=d?Nr(d):window,t){case"focusin":(eu(S)||S.contentEditable==="true")&&(Cr=S,ya=d,Io=null);break;case"focusout":Io=ya=Cr=null;break;case"mousedown":ja=!0;break;case"contextmenu":case"mouseup":case"dragend":ja=!1,su(p,r,u);break;case"selectionchange":if(ry)break;case"keydown":case"keyup":su(p,r,u)}var C;if(Ac)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Sr?nf(t,r)&&(P="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(P="onCompositionStart");P&&(tf&&r.locale!=="ko"&&(Sr||P!=="onCompositionStart"?P==="onCompositionEnd"&&Sr&&(C=ef()):(wn=u,Nc="value"in wn?wn.value:wn.textContent,Sr=!0)),S=gi(d,P),0<S.length&&(P=new Qd(P,t,null,r,u),p.push({event:P,listeners:S}),C?P.data=C:(C=rf(r),C!==null&&(P.data=C)))),(C=Vv?qv(t,r):Jv(t,r))&&(d=gi(d,"onBeforeInput"),0<d.length&&(u=new Qd("onBeforeInput","beforeinput",null,r,u),p.push({event:u,listeners:d}),u.data=C))}gf(p,e)})}function Go(t,e,r){return{instance:t,listener:e,currentTarget:r}}function gi(t,e){for(var r=e+"Capture",o=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=$o(t,r),i!=null&&o.unshift(Go(t,i,s)),i=$o(t,e),i!=null&&o.push(Go(t,i,s))),t=t.return}return o}function wr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function au(t,e,r,o,s){for(var i=e._reactName,l=[];r!==null&&r!==o;){var a=r,c=a.alternate,d=a.stateNode;if(c!==null&&c===o)break;a.tag===5&&d!==null&&(a=d,s?(c=$o(r,i),c!=null&&l.unshift(Go(r,c,a))):s||(c=$o(r,i),c!=null&&l.push(Go(r,c,a)))),r=r.return}l.length!==0&&t.push({event:e,listeners:l})}var ly=/\r\n?/g,ay=/\u0000|\uFFFD/g;function cu(t){return(typeof t=="string"?t:""+t).replace(ly,`
`).replace(ay,"")}function Os(t,e,r){if(e=cu(e),cu(t)!==e&&r)throw Error(A(425))}function xi(){}var wa=null,ba=null;function ka(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Sa=typeof setTimeout=="function"?setTimeout:void 0,cy=typeof clearTimeout=="function"?clearTimeout:void 0,du=typeof Promise=="function"?Promise:void 0,dy=typeof queueMicrotask=="function"?queueMicrotask:typeof du<"u"?function(t){return du.resolve(null).then(t).catch(uy)}:Sa;function uy(t){setTimeout(function(){throw t})}function Ol(t,e){var r=e,o=0;do{var s=r.nextSibling;if(t.removeChild(r),s&&s.nodeType===8)if(r=s.data,r==="/$"){if(o===0){t.removeChild(s),Vo(e);return}o--}else r!=="$"&&r!=="$?"&&r!=="$!"||o++;r=s}while(r);Vo(e)}function Nn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function uu(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"){if(e===0)return t;e--}else r==="/$"&&e++}t=t.previousSibling}return null}var ao=Math.random().toString(36).slice(2),Rt="__reactFiber$"+ao,Qo="__reactProps$"+ao,Jt="__reactContainer$"+ao,Ca="__reactEvents$"+ao,hy="__reactListeners$"+ao,py="__reactHandles$"+ao;function Gn(t){var e=t[Rt];if(e)return e;for(var r=t.parentNode;r;){if(e=r[Jt]||r[Rt]){if(r=e.alternate,e.child!==null||r!==null&&r.child!==null)for(t=uu(t);t!==null;){if(r=t[Rt])return r;t=uu(t)}return e}t=r,r=t.parentNode}return null}function fs(t){return t=t[Rt]||t[Jt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Nr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(A(33))}function Vi(t){return t[Qo]||null}var Ta=[],Pr=-1;function zn(t){return{current:t}}function se(t){0>Pr||(t.current=Ta[Pr],Ta[Pr]=null,Pr--)}function ne(t,e){Pr++,Ta[Pr]=t.current,t.current=e}var In={},_e=zn(In),He=zn(!1),ir=In;function Xr(t,e){var r=t.type.contextTypes;if(!r)return In;var o=t.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===e)return o.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in r)s[i]=e[i];return o&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function Ue(t){return t=t.childContextTypes,t!=null}function vi(){se(He),se(_e)}function hu(t,e,r){if(_e.current!==In)throw Error(A(168));ne(_e,e),ne(He,r)}function vf(t,e,r){var o=t.stateNode;if(e=e.childContextTypes,typeof o.getChildContext!="function")return r;o=o.getChildContext();for(var s in o)if(!(s in e))throw Error(A(108,Yx(t)||"Unknown",s));return de({},r,o)}function yi(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||In,ir=_e.current,ne(_e,t),ne(He,He.current),!0}function pu(t,e,r){var o=t.stateNode;if(!o)throw Error(A(169));r?(t=vf(t,e,ir),o.__reactInternalMemoizedMergedChildContext=t,se(He),se(_e),ne(_e,t)):se(He),ne(He,r)}var Wt=null,qi=!1,Ll=!1;function yf(t){Wt===null?Wt=[t]:Wt.push(t)}function fy(t){qi=!0,yf(t)}function Wn(){if(!Ll&&Wt!==null){Ll=!0;var t=0,e=ee;try{var r=Wt;for(ee=1;t<r.length;t++){var o=r[t];do o=o(!0);while(o!==null)}Wt=null,qi=!1}catch(s){throw Wt!==null&&(Wt=Wt.slice(t+1)),Hp(kc,Wn),s}finally{ee=e,Ll=!1}}return null}var Er=[],Ar=0,ji=null,wi=0,st=[],it=0,lr=null,Ht=1,Ut="";function Jn(t,e){Er[Ar++]=wi,Er[Ar++]=ji,ji=t,wi=e}function jf(t,e,r){st[it++]=Ht,st[it++]=Ut,st[it++]=lr,lr=t;var o=Ht;t=Ut;var s=32-wt(o)-1;o&=~(1<<s),r+=1;var i=32-wt(e)+s;if(30<i){var l=s-s%5;i=(o&(1<<l)-1).toString(32),o>>=l,s-=l,Ht=1<<32-wt(e)+s|r<<s|o,Ut=i+t}else Ht=1<<i|r<<s|o,Ut=t}function Rc(t){t.return!==null&&(Jn(t,1),jf(t,1,0))}function _c(t){for(;t===ji;)ji=Er[--Ar],Er[Ar]=null,wi=Er[--Ar],Er[Ar]=null;for(;t===lr;)lr=st[--it],st[it]=null,Ut=st[--it],st[it]=null,Ht=st[--it],st[it]=null}var Ye=null,Qe=null,le=!1,jt=null;function wf(t,e){var r=lt(5,null,null,0);r.elementType="DELETED",r.stateNode=e,r.return=t,e=t.deletions,e===null?(t.deletions=[r],t.flags|=16):e.push(r)}function fu(t,e){switch(t.tag){case 5:var r=t.type;return e=e.nodeType!==1||r.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ye=t,Qe=Nn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ye=t,Qe=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(r=lr!==null?{id:Ht,overflow:Ut}:null,t.memoizedState={dehydrated:e,treeContext:r,retryLane:1073741824},r=lt(18,null,null,0),r.stateNode=e,r.return=t,t.child=r,Ye=t,Qe=null,!0):!1;default:return!1}}function Na(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Pa(t){if(le){var e=Qe;if(e){var r=e;if(!fu(t,e)){if(Na(t))throw Error(A(418));e=Nn(r.nextSibling);var o=Ye;e&&fu(t,e)?wf(o,r):(t.flags=t.flags&-4097|2,le=!1,Ye=t)}}else{if(Na(t))throw Error(A(418));t.flags=t.flags&-4097|2,le=!1,Ye=t}}}function mu(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ye=t}function Ls(t){if(t!==Ye)return!1;if(!le)return mu(t),le=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ka(t.type,t.memoizedProps)),e&&(e=Qe)){if(Na(t))throw bf(),Error(A(418));for(;e;)wf(t,e),e=Nn(e.nextSibling)}if(mu(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(A(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="/$"){if(e===0){Qe=Nn(t.nextSibling);break e}e--}else r!=="$"&&r!=="$!"&&r!=="$?"||e++}t=t.nextSibling}Qe=null}}else Qe=Ye?Nn(t.stateNode.nextSibling):null;return!0}function bf(){for(var t=Qe;t;)t=Nn(t.nextSibling)}function Zr(){Qe=Ye=null,le=!1}function Ic(t){jt===null?jt=[t]:jt.push(t)}var my=Xt.ReactCurrentBatchConfig;function wo(t,e,r){if(t=r.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(A(309));var o=r.stateNode}if(!o)throw Error(A(147,t));var s=o,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(l){var a=s.refs;l===null?delete a[i]:a[i]=l},e._stringRef=i,e)}if(typeof t!="string")throw Error(A(284));if(!r._owner)throw Error(A(290,t))}return t}function Ds(t,e){throw t=Object.prototype.toString.call(e),Error(A(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function gu(t){var e=t._init;return e(t._payload)}function kf(t){function e(g,f){if(t){var x=g.deletions;x===null?(g.deletions=[f],g.flags|=16):x.push(f)}}function r(g,f){if(!t)return null;for(;f!==null;)e(g,f),f=f.sibling;return null}function o(g,f){for(g=new Map;f!==null;)f.key!==null?g.set(f.key,f):g.set(f.index,f),f=f.sibling;return g}function s(g,f){return g=Mn(g,f),g.index=0,g.sibling=null,g}function i(g,f,x){return g.index=x,t?(x=g.alternate,x!==null?(x=x.index,x<f?(g.flags|=2,f):x):(g.flags|=2,f)):(g.flags|=1048576,f)}function l(g){return t&&g.alternate===null&&(g.flags|=2),g}function a(g,f,x,j){return f===null||f.tag!==6?(f=Hl(x,g.mode,j),f.return=g,f):(f=s(f,x),f.return=g,f)}function c(g,f,x,j){var k=x.type;return k===kr?u(g,f,x.props.children,j,x.key):f!==null&&(f.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===un&&gu(k)===f.type)?(j=s(f,x.props),j.ref=wo(g,f,x),j.return=g,j):(j=oi(x.type,x.key,x.props,null,g.mode,j),j.ref=wo(g,f,x),j.return=g,j)}function d(g,f,x,j){return f===null||f.tag!==4||f.stateNode.containerInfo!==x.containerInfo||f.stateNode.implementation!==x.implementation?(f=Ul(x,g.mode,j),f.return=g,f):(f=s(f,x.children||[]),f.return=g,f)}function u(g,f,x,j,k){return f===null||f.tag!==7?(f=sr(x,g.mode,j,k),f.return=g,f):(f=s(f,x),f.return=g,f)}function p(g,f,x){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Hl(""+f,g.mode,x),f.return=g,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Ts:return x=oi(f.type,f.key,f.props,null,g.mode,x),x.ref=wo(g,null,f),x.return=g,x;case br:return f=Ul(f,g.mode,x),f.return=g,f;case un:var j=f._init;return p(g,j(f._payload),x)}if(No(f)||go(f))return f=sr(f,g.mode,x,null),f.return=g,f;Ds(g,f)}return null}function m(g,f,x,j){var k=f!==null?f.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return k!==null?null:a(g,f,""+x,j);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ts:return x.key===k?c(g,f,x,j):null;case br:return x.key===k?d(g,f,x,j):null;case un:return k=x._init,m(g,f,k(x._payload),j)}if(No(x)||go(x))return k!==null?null:u(g,f,x,j,null);Ds(g,x)}return null}function h(g,f,x,j,k){if(typeof j=="string"&&j!==""||typeof j=="number")return g=g.get(x)||null,a(f,g,""+j,k);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case Ts:return g=g.get(j.key===null?x:j.key)||null,c(f,g,j,k);case br:return g=g.get(j.key===null?x:j.key)||null,d(f,g,j,k);case un:var S=j._init;return h(g,f,x,S(j._payload),k)}if(No(j)||go(j))return g=g.get(x)||null,u(f,g,j,k,null);Ds(f,j)}return null}function w(g,f,x,j){for(var k=null,S=null,C=f,P=f=0,I=null;C!==null&&P<x.length;P++){C.index>P?(I=C,C=null):I=C.sibling;var R=m(g,C,x[P],j);if(R===null){C===null&&(C=I);break}t&&C&&R.alternate===null&&e(g,C),f=i(R,f,P),S===null?k=R:S.sibling=R,S=R,C=I}if(P===x.length)return r(g,C),le&&Jn(g,P),k;if(C===null){for(;P<x.length;P++)C=p(g,x[P],j),C!==null&&(f=i(C,f,P),S===null?k=C:S.sibling=C,S=C);return le&&Jn(g,P),k}for(C=o(g,C);P<x.length;P++)I=h(C,g,P,x[P],j),I!==null&&(t&&I.alternate!==null&&C.delete(I.key===null?P:I.key),f=i(I,f,P),S===null?k=I:S.sibling=I,S=I);return t&&C.forEach(function(z){return e(g,z)}),le&&Jn(g,P),k}function y(g,f,x,j){var k=go(x);if(typeof k!="function")throw Error(A(150));if(x=k.call(x),x==null)throw Error(A(151));for(var S=k=null,C=f,P=f=0,I=null,R=x.next();C!==null&&!R.done;P++,R=x.next()){C.index>P?(I=C,C=null):I=C.sibling;var z=m(g,C,R.value,j);if(z===null){C===null&&(C=I);break}t&&C&&z.alternate===null&&e(g,C),f=i(z,f,P),S===null?k=z:S.sibling=z,S=z,C=I}if(R.done)return r(g,C),le&&Jn(g,P),k;if(C===null){for(;!R.done;P++,R=x.next())R=p(g,R.value,j),R!==null&&(f=i(R,f,P),S===null?k=R:S.sibling=R,S=R);return le&&Jn(g,P),k}for(C=o(g,C);!R.done;P++,R=x.next())R=h(C,g,P,R.value,j),R!==null&&(t&&R.alternate!==null&&C.delete(R.key===null?P:R.key),f=i(R,f,P),S===null?k=R:S.sibling=R,S=R);return t&&C.forEach(function(D){return e(g,D)}),le&&Jn(g,P),k}function b(g,f,x,j){if(typeof x=="object"&&x!==null&&x.type===kr&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Ts:e:{for(var k=x.key,S=f;S!==null;){if(S.key===k){if(k=x.type,k===kr){if(S.tag===7){r(g,S.sibling),f=s(S,x.props.children),f.return=g,g=f;break e}}else if(S.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===un&&gu(k)===S.type){r(g,S.sibling),f=s(S,x.props),f.ref=wo(g,S,x),f.return=g,g=f;break e}r(g,S);break}else e(g,S);S=S.sibling}x.type===kr?(f=sr(x.props.children,g.mode,j,x.key),f.return=g,g=f):(j=oi(x.type,x.key,x.props,null,g.mode,j),j.ref=wo(g,f,x),j.return=g,g=j)}return l(g);case br:e:{for(S=x.key;f!==null;){if(f.key===S)if(f.tag===4&&f.stateNode.containerInfo===x.containerInfo&&f.stateNode.implementation===x.implementation){r(g,f.sibling),f=s(f,x.children||[]),f.return=g,g=f;break e}else{r(g,f);break}else e(g,f);f=f.sibling}f=Ul(x,g.mode,j),f.return=g,g=f}return l(g);case un:return S=x._init,b(g,f,S(x._payload),j)}if(No(x))return w(g,f,x,j);if(go(x))return y(g,f,x,j);Ds(g,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,f!==null&&f.tag===6?(r(g,f.sibling),f=s(f,x),f.return=g,g=f):(r(g,f),f=Hl(x,g.mode,j),f.return=g,g=f),l(g)):r(g,f)}return b}var eo=kf(!0),Sf=kf(!1),bi=zn(null),ki=null,Mr=null,Oc=null;function Lc(){Oc=Mr=ki=null}function Dc(t){var e=bi.current;se(bi),t._currentValue=e}function Ea(t,e,r){for(;t!==null;){var o=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,o!==null&&(o.childLanes|=e)):o!==null&&(o.childLanes&e)!==e&&(o.childLanes|=e),t===r)break;t=t.return}}function Fr(t,e){ki=t,Oc=Mr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&($e=!0),t.firstContext=null)}function ct(t){var e=t._currentValue;if(Oc!==t)if(t={context:t,memoizedValue:e,next:null},Mr===null){if(ki===null)throw Error(A(308));Mr=t,ki.dependencies={lanes:0,firstContext:t}}else Mr=Mr.next=t;return e}var Qn=null;function Fc(t){Qn===null?Qn=[t]:Qn.push(t)}function Cf(t,e,r,o){var s=e.interleaved;return s===null?(r.next=r,Fc(e)):(r.next=s.next,s.next=r),e.interleaved=r,Kt(t,o)}function Kt(t,e){t.lanes|=e;var r=t.alternate;for(r!==null&&(r.lanes|=e),r=t,t=t.return;t!==null;)t.childLanes|=e,r=t.alternate,r!==null&&(r.childLanes|=e),r=t,t=t.return;return r.tag===3?r.stateNode:null}var hn=!1;function Bc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Tf(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Vt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Pn(t,e,r){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,X&2){var s=o.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),o.pending=e,Kt(t,r)}return s=o.interleaved,s===null?(e.next=e,Fc(o)):(e.next=s.next,s.next=e),o.interleaved=e,Kt(t,r)}function Xs(t,e,r){if(e=e.updateQueue,e!==null&&(e=e.shared,(r&4194240)!==0)){var o=e.lanes;o&=t.pendingLanes,r|=o,e.lanes=r,Sc(t,r)}}function xu(t,e){var r=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,r===o)){var s=null,i=null;if(r=r.firstBaseUpdate,r!==null){do{var l={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};i===null?s=i=l:i=i.next=l,r=r.next}while(r!==null);i===null?s=i=e:i=i.next=e}else s=i=e;r={baseState:o.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:o.shared,effects:o.effects},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=e:t.next=e,r.lastBaseUpdate=e}function Si(t,e,r,o){var s=t.updateQueue;hn=!1;var i=s.firstBaseUpdate,l=s.lastBaseUpdate,a=s.shared.pending;if(a!==null){s.shared.pending=null;var c=a,d=c.next;c.next=null,l===null?i=d:l.next=d,l=c;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==l&&(a===null?u.firstBaseUpdate=d:a.next=d,u.lastBaseUpdate=c))}if(i!==null){var p=s.baseState;l=0,u=d=c=null,a=i;do{var m=a.lane,h=a.eventTime;if((o&m)===m){u!==null&&(u=u.next={eventTime:h,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=t,y=a;switch(m=e,h=r,y.tag){case 1:if(w=y.payload,typeof w=="function"){p=w.call(h,p,m);break e}p=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=y.payload,m=typeof w=="function"?w.call(h,p,m):w,m==null)break e;p=de({},p,m);break e;case 2:hn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=s.effects,m===null?s.effects=[a]:m.push(a))}else h={eventTime:h,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(d=u=h,c=p):u=u.next=h,l|=m;if(a=a.next,a===null){if(a=s.shared.pending,a===null)break;m=a,a=m.next,m.next=null,s.lastBaseUpdate=m,s.shared.pending=null}}while(!0);if(u===null&&(c=p),s.baseState=c,s.firstBaseUpdate=d,s.lastBaseUpdate=u,e=s.shared.interleaved,e!==null){s=e;do l|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);cr|=l,t.lanes=l,t.memoizedState=p}}function vu(t,e,r){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var o=t[e],s=o.callback;if(s!==null){if(o.callback=null,o=r,typeof s!="function")throw Error(A(191,s));s.call(o)}}}var ms={},Ot=zn(ms),Yo=zn(ms),Xo=zn(ms);function Yn(t){if(t===ms)throw Error(A(174));return t}function zc(t,e){switch(ne(Xo,e),ne(Yo,t),ne(Ot,ms),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ca(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ca(e,t)}se(Ot),ne(Ot,e)}function to(){se(Ot),se(Yo),se(Xo)}function Nf(t){Yn(Xo.current);var e=Yn(Ot.current),r=ca(e,t.type);e!==r&&(ne(Yo,t),ne(Ot,r))}function Wc(t){Yo.current===t&&(se(Ot),se(Yo))}var ae=zn(0);function Ci(t){for(var e=t;e!==null;){if(e.tag===13){var r=e.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Dl=[];function $c(){for(var t=0;t<Dl.length;t++)Dl[t]._workInProgressVersionPrimary=null;Dl.length=0}var Zs=Xt.ReactCurrentDispatcher,Fl=Xt.ReactCurrentBatchConfig,ar=0,ce=null,ve=null,be=null,Ti=!1,Oo=!1,Zo=0,gy=0;function Ee(){throw Error(A(321))}function Hc(t,e){if(e===null)return!1;for(var r=0;r<e.length&&r<t.length;r++)if(!kt(t[r],e[r]))return!1;return!0}function Uc(t,e,r,o,s,i){if(ar=i,ce=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Zs.current=t===null||t.memoizedState===null?jy:wy,t=r(o,s),Oo){i=0;do{if(Oo=!1,Zo=0,25<=i)throw Error(A(301));i+=1,be=ve=null,e.updateQueue=null,Zs.current=by,t=r(o,s)}while(Oo)}if(Zs.current=Ni,e=ve!==null&&ve.next!==null,ar=0,be=ve=ce=null,Ti=!1,e)throw Error(A(300));return t}function Vc(){var t=Zo!==0;return Zo=0,t}function Pt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return be===null?ce.memoizedState=be=t:be=be.next=t,be}function dt(){if(ve===null){var t=ce.alternate;t=t!==null?t.memoizedState:null}else t=ve.next;var e=be===null?ce.memoizedState:be.next;if(e!==null)be=e,ve=t;else{if(t===null)throw Error(A(310));ve=t,t={memoizedState:ve.memoizedState,baseState:ve.baseState,baseQueue:ve.baseQueue,queue:ve.queue,next:null},be===null?ce.memoizedState=be=t:be=be.next=t}return be}function es(t,e){return typeof e=="function"?e(t):e}function Bl(t){var e=dt(),r=e.queue;if(r===null)throw Error(A(311));r.lastRenderedReducer=t;var o=ve,s=o.baseQueue,i=r.pending;if(i!==null){if(s!==null){var l=s.next;s.next=i.next,i.next=l}o.baseQueue=s=i,r.pending=null}if(s!==null){i=s.next,o=o.baseState;var a=l=null,c=null,d=i;do{var u=d.lane;if((ar&u)===u)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),o=d.hasEagerState?d.eagerState:t(o,d.action);else{var p={lane:u,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(a=c=p,l=o):c=c.next=p,ce.lanes|=u,cr|=u}d=d.next}while(d!==null&&d!==i);c===null?l=o:c.next=a,kt(o,e.memoizedState)||($e=!0),e.memoizedState=o,e.baseState=l,e.baseQueue=c,r.lastRenderedState=o}if(t=r.interleaved,t!==null){s=t;do i=s.lane,ce.lanes|=i,cr|=i,s=s.next;while(s!==t)}else s===null&&(r.lanes=0);return[e.memoizedState,r.dispatch]}function zl(t){var e=dt(),r=e.queue;if(r===null)throw Error(A(311));r.lastRenderedReducer=t;var o=r.dispatch,s=r.pending,i=e.memoizedState;if(s!==null){r.pending=null;var l=s=s.next;do i=t(i,l.action),l=l.next;while(l!==s);kt(i,e.memoizedState)||($e=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),r.lastRenderedState=i}return[i,o]}function Pf(){}function Ef(t,e){var r=ce,o=dt(),s=e(),i=!kt(o.memoizedState,s);if(i&&(o.memoizedState=s,$e=!0),o=o.queue,qc(Rf.bind(null,r,o,t),[t]),o.getSnapshot!==e||i||be!==null&&be.memoizedState.tag&1){if(r.flags|=2048,ts(9,Mf.bind(null,r,o,s,e),void 0,null),ke===null)throw Error(A(349));ar&30||Af(r,e,s)}return s}function Af(t,e,r){t.flags|=16384,t={getSnapshot:e,value:r},e=ce.updateQueue,e===null?(e={lastEffect:null,stores:null},ce.updateQueue=e,e.stores=[t]):(r=e.stores,r===null?e.stores=[t]:r.push(t))}function Mf(t,e,r,o){e.value=r,e.getSnapshot=o,_f(e)&&If(t)}function Rf(t,e,r){return r(function(){_f(e)&&If(t)})}function _f(t){var e=t.getSnapshot;t=t.value;try{var r=e();return!kt(t,r)}catch{return!0}}function If(t){var e=Kt(t,1);e!==null&&bt(e,t,1,-1)}function yu(t){var e=Pt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:es,lastRenderedState:t},e.queue=t,t=t.dispatch=yy.bind(null,ce,t),[e.memoizedState,t]}function ts(t,e,r,o){return t={tag:t,create:e,destroy:r,deps:o,next:null},e=ce.updateQueue,e===null?(e={lastEffect:null,stores:null},ce.updateQueue=e,e.lastEffect=t.next=t):(r=e.lastEffect,r===null?e.lastEffect=t.next=t:(o=r.next,r.next=t,t.next=o,e.lastEffect=t)),t}function Of(){return dt().memoizedState}function ei(t,e,r,o){var s=Pt();ce.flags|=t,s.memoizedState=ts(1|e,r,void 0,o===void 0?null:o)}function Ji(t,e,r,o){var s=dt();o=o===void 0?null:o;var i=void 0;if(ve!==null){var l=ve.memoizedState;if(i=l.destroy,o!==null&&Hc(o,l.deps)){s.memoizedState=ts(e,r,i,o);return}}ce.flags|=t,s.memoizedState=ts(1|e,r,i,o)}function ju(t,e){return ei(8390656,8,t,e)}function qc(t,e){return Ji(2048,8,t,e)}function Lf(t,e){return Ji(4,2,t,e)}function Df(t,e){return Ji(4,4,t,e)}function Ff(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Bf(t,e,r){return r=r!=null?r.concat([t]):null,Ji(4,4,Ff.bind(null,e,t),r)}function Jc(){}function zf(t,e){var r=dt();e=e===void 0?null:e;var o=r.memoizedState;return o!==null&&e!==null&&Hc(e,o[1])?o[0]:(r.memoizedState=[t,e],t)}function Wf(t,e){var r=dt();e=e===void 0?null:e;var o=r.memoizedState;return o!==null&&e!==null&&Hc(e,o[1])?o[0]:(t=t(),r.memoizedState=[t,e],t)}function $f(t,e,r){return ar&21?(kt(r,e)||(r=qp(),ce.lanes|=r,cr|=r,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,$e=!0),t.memoizedState=r)}function xy(t,e){var r=ee;ee=r!==0&&4>r?r:4,t(!0);var o=Fl.transition;Fl.transition={};try{t(!1),e()}finally{ee=r,Fl.transition=o}}function Hf(){return dt().memoizedState}function vy(t,e,r){var o=An(t);if(r={lane:o,action:r,hasEagerState:!1,eagerState:null,next:null},Uf(t))Vf(e,r);else if(r=Cf(t,e,r,o),r!==null){var s=Le();bt(r,t,o,s),qf(r,e,o)}}function yy(t,e,r){var o=An(t),s={lane:o,action:r,hasEagerState:!1,eagerState:null,next:null};if(Uf(t))Vf(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var l=e.lastRenderedState,a=i(l,r);if(s.hasEagerState=!0,s.eagerState=a,kt(a,l)){var c=e.interleaved;c===null?(s.next=s,Fc(e)):(s.next=c.next,c.next=s),e.interleaved=s;return}}catch{}finally{}r=Cf(t,e,s,o),r!==null&&(s=Le(),bt(r,t,o,s),qf(r,e,o))}}function Uf(t){var e=t.alternate;return t===ce||e!==null&&e===ce}function Vf(t,e){Oo=Ti=!0;var r=t.pending;r===null?e.next=e:(e.next=r.next,r.next=e),t.pending=e}function qf(t,e,r){if(r&4194240){var o=e.lanes;o&=t.pendingLanes,r|=o,e.lanes=r,Sc(t,r)}}var Ni={readContext:ct,useCallback:Ee,useContext:Ee,useEffect:Ee,useImperativeHandle:Ee,useInsertionEffect:Ee,useLayoutEffect:Ee,useMemo:Ee,useReducer:Ee,useRef:Ee,useState:Ee,useDebugValue:Ee,useDeferredValue:Ee,useTransition:Ee,useMutableSource:Ee,useSyncExternalStore:Ee,useId:Ee,unstable_isNewReconciler:!1},jy={readContext:ct,useCallback:function(t,e){return Pt().memoizedState=[t,e===void 0?null:e],t},useContext:ct,useEffect:ju,useImperativeHandle:function(t,e,r){return r=r!=null?r.concat([t]):null,ei(4194308,4,Ff.bind(null,e,t),r)},useLayoutEffect:function(t,e){return ei(4194308,4,t,e)},useInsertionEffect:function(t,e){return ei(4,2,t,e)},useMemo:function(t,e){var r=Pt();return e=e===void 0?null:e,t=t(),r.memoizedState=[t,e],t},useReducer:function(t,e,r){var o=Pt();return e=r!==void 0?r(e):e,o.memoizedState=o.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},o.queue=t,t=t.dispatch=vy.bind(null,ce,t),[o.memoizedState,t]},useRef:function(t){var e=Pt();return t={current:t},e.memoizedState=t},useState:yu,useDebugValue:Jc,useDeferredValue:function(t){return Pt().memoizedState=t},useTransition:function(){var t=yu(!1),e=t[0];return t=xy.bind(null,t[1]),Pt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,r){var o=ce,s=Pt();if(le){if(r===void 0)throw Error(A(407));r=r()}else{if(r=e(),ke===null)throw Error(A(349));ar&30||Af(o,e,r)}s.memoizedState=r;var i={value:r,getSnapshot:e};return s.queue=i,ju(Rf.bind(null,o,i,t),[t]),o.flags|=2048,ts(9,Mf.bind(null,o,i,r,e),void 0,null),r},useId:function(){var t=Pt(),e=ke.identifierPrefix;if(le){var r=Ut,o=Ht;r=(o&~(1<<32-wt(o)-1)).toString(32)+r,e=":"+e+"R"+r,r=Zo++,0<r&&(e+="H"+r.toString(32)),e+=":"}else r=gy++,e=":"+e+"r"+r.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},wy={readContext:ct,useCallback:zf,useContext:ct,useEffect:qc,useImperativeHandle:Bf,useInsertionEffect:Lf,useLayoutEffect:Df,useMemo:Wf,useReducer:Bl,useRef:Of,useState:function(){return Bl(es)},useDebugValue:Jc,useDeferredValue:function(t){var e=dt();return $f(e,ve.memoizedState,t)},useTransition:function(){var t=Bl(es)[0],e=dt().memoizedState;return[t,e]},useMutableSource:Pf,useSyncExternalStore:Ef,useId:Hf,unstable_isNewReconciler:!1},by={readContext:ct,useCallback:zf,useContext:ct,useEffect:qc,useImperativeHandle:Bf,useInsertionEffect:Lf,useLayoutEffect:Df,useMemo:Wf,useReducer:zl,useRef:Of,useState:function(){return zl(es)},useDebugValue:Jc,useDeferredValue:function(t){var e=dt();return ve===null?e.memoizedState=t:$f(e,ve.memoizedState,t)},useTransition:function(){var t=zl(es)[0],e=dt().memoizedState;return[t,e]},useMutableSource:Pf,useSyncExternalStore:Ef,useId:Hf,unstable_isNewReconciler:!1};function gt(t,e){if(t&&t.defaultProps){e=de({},e),t=t.defaultProps;for(var r in t)e[r]===void 0&&(e[r]=t[r]);return e}return e}function Aa(t,e,r,o){e=t.memoizedState,r=r(o,e),r=r==null?e:de({},e,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var Ki={isMounted:function(t){return(t=t._reactInternals)?pr(t)===t:!1},enqueueSetState:function(t,e,r){t=t._reactInternals;var o=Le(),s=An(t),i=Vt(o,s);i.payload=e,r!=null&&(i.callback=r),e=Pn(t,i,s),e!==null&&(bt(e,t,s,o),Xs(e,t,s))},enqueueReplaceState:function(t,e,r){t=t._reactInternals;var o=Le(),s=An(t),i=Vt(o,s);i.tag=1,i.payload=e,r!=null&&(i.callback=r),e=Pn(t,i,s),e!==null&&(bt(e,t,s,o),Xs(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var r=Le(),o=An(t),s=Vt(r,o);s.tag=2,e!=null&&(s.callback=e),e=Pn(t,s,o),e!==null&&(bt(e,t,o,r),Xs(e,t,o))}};function wu(t,e,r,o,s,i,l){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,i,l):e.prototype&&e.prototype.isPureReactComponent?!Jo(r,o)||!Jo(s,i):!0}function Jf(t,e,r){var o=!1,s=In,i=e.contextType;return typeof i=="object"&&i!==null?i=ct(i):(s=Ue(e)?ir:_e.current,o=e.contextTypes,i=(o=o!=null)?Xr(t,s):In),e=new e(r,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ki,t.stateNode=e,e._reactInternals=t,o&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function bu(t,e,r,o){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(r,o),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(r,o),e.state!==t&&Ki.enqueueReplaceState(e,e.state,null)}function Ma(t,e,r,o){var s=t.stateNode;s.props=r,s.state=t.memoizedState,s.refs={},Bc(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=ct(i):(i=Ue(e)?ir:_e.current,s.context=Xr(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(Aa(t,e,i,r),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&Ki.enqueueReplaceState(s,s.state,null),Si(t,r,s,o),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function no(t,e){try{var r="",o=e;do r+=Qx(o),o=o.return;while(o);var s=r}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function Wl(t,e,r){return{value:t,source:null,stack:r??null,digest:e??null}}function Ra(t,e){try{console.error(e.value)}catch(r){setTimeout(function(){throw r})}}var ky=typeof WeakMap=="function"?WeakMap:Map;function Kf(t,e,r){r=Vt(-1,r),r.tag=3,r.payload={element:null};var o=e.value;return r.callback=function(){Ei||(Ei=!0,$a=o),Ra(t,e)},r}function Gf(t,e,r){r=Vt(-1,r),r.tag=3;var o=t.type.getDerivedStateFromError;if(typeof o=="function"){var s=e.value;r.payload=function(){return o(s)},r.callback=function(){Ra(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(r.callback=function(){Ra(t,e),typeof o!="function"&&(En===null?En=new Set([this]):En.add(this));var l=e.stack;this.componentDidCatch(e.value,{componentStack:l!==null?l:""})}),r}function ku(t,e,r){var o=t.pingCache;if(o===null){o=t.pingCache=new ky;var s=new Set;o.set(e,s)}else s=o.get(e),s===void 0&&(s=new Set,o.set(e,s));s.has(r)||(s.add(r),t=Dy.bind(null,t,e,r),e.then(t,t))}function Su(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Cu(t,e,r,o,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(e=Vt(-1,1),e.tag=2,Pn(r,e,1))),r.lanes|=1),t)}var Sy=Xt.ReactCurrentOwner,$e=!1;function Ie(t,e,r,o){e.child=t===null?Sf(e,null,r,o):eo(e,t.child,r,o)}function Tu(t,e,r,o,s){r=r.render;var i=e.ref;return Fr(e,s),o=Uc(t,e,r,o,i,s),r=Vc(),t!==null&&!$e?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Gt(t,e,s)):(le&&r&&Rc(e),e.flags|=1,Ie(t,e,o,s),e.child)}function Nu(t,e,r,o,s){if(t===null){var i=r.type;return typeof i=="function"&&!td(i)&&i.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(e.tag=15,e.type=i,Qf(t,e,i,o,s)):(t=oi(r.type,null,o,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var l=i.memoizedProps;if(r=r.compare,r=r!==null?r:Jo,r(l,o)&&t.ref===e.ref)return Gt(t,e,s)}return e.flags|=1,t=Mn(i,o),t.ref=e.ref,t.return=e,e.child=t}function Qf(t,e,r,o,s){if(t!==null){var i=t.memoizedProps;if(Jo(i,o)&&t.ref===e.ref)if($e=!1,e.pendingProps=o=i,(t.lanes&s)!==0)t.flags&131072&&($e=!0);else return e.lanes=t.lanes,Gt(t,e,s)}return _a(t,e,r,o,s)}function Yf(t,e,r){var o=e.pendingProps,s=o.children,i=t!==null?t.memoizedState:null;if(o.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ne(_r,Je),Je|=r;else{if(!(r&1073741824))return t=i!==null?i.baseLanes|r:r,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ne(_r,Je),Je|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=i!==null?i.baseLanes:r,ne(_r,Je),Je|=o}else i!==null?(o=i.baseLanes|r,e.memoizedState=null):o=r,ne(_r,Je),Je|=o;return Ie(t,e,s,r),e.child}function Xf(t,e){var r=e.ref;(t===null&&r!==null||t!==null&&t.ref!==r)&&(e.flags|=512,e.flags|=2097152)}function _a(t,e,r,o,s){var i=Ue(r)?ir:_e.current;return i=Xr(e,i),Fr(e,s),r=Uc(t,e,r,o,i,s),o=Vc(),t!==null&&!$e?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Gt(t,e,s)):(le&&o&&Rc(e),e.flags|=1,Ie(t,e,r,s),e.child)}function Pu(t,e,r,o,s){if(Ue(r)){var i=!0;yi(e)}else i=!1;if(Fr(e,s),e.stateNode===null)ti(t,e),Jf(e,r,o),Ma(e,r,o,s),o=!0;else if(t===null){var l=e.stateNode,a=e.memoizedProps;l.props=a;var c=l.context,d=r.contextType;typeof d=="object"&&d!==null?d=ct(d):(d=Ue(r)?ir:_e.current,d=Xr(e,d));var u=r.getDerivedStateFromProps,p=typeof u=="function"||typeof l.getSnapshotBeforeUpdate=="function";p||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==o||c!==d)&&bu(e,l,o,d),hn=!1;var m=e.memoizedState;l.state=m,Si(e,o,l,s),c=e.memoizedState,a!==o||m!==c||He.current||hn?(typeof u=="function"&&(Aa(e,r,u,o),c=e.memoizedState),(a=hn||wu(e,r,a,o,m,c,d))?(p||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(e.flags|=4194308)):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=o,e.memoizedState=c),l.props=o,l.state=c,l.context=d,o=a):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),o=!1)}else{l=e.stateNode,Tf(t,e),a=e.memoizedProps,d=e.type===e.elementType?a:gt(e.type,a),l.props=d,p=e.pendingProps,m=l.context,c=r.contextType,typeof c=="object"&&c!==null?c=ct(c):(c=Ue(r)?ir:_e.current,c=Xr(e,c));var h=r.getDerivedStateFromProps;(u=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==p||m!==c)&&bu(e,l,o,c),hn=!1,m=e.memoizedState,l.state=m,Si(e,o,l,s);var w=e.memoizedState;a!==p||m!==w||He.current||hn?(typeof h=="function"&&(Aa(e,r,h,o),w=e.memoizedState),(d=hn||wu(e,r,d,o,m,w,c)||!1)?(u||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(o,w,c),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(o,w,c)),typeof l.componentDidUpdate=="function"&&(e.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=o,e.memoizedState=w),l.props=o,l.state=w,l.context=c,o=d):(typeof l.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),o=!1)}return Ia(t,e,r,o,i,s)}function Ia(t,e,r,o,s,i){Xf(t,e);var l=(e.flags&128)!==0;if(!o&&!l)return s&&pu(e,r,!1),Gt(t,e,i);o=e.stateNode,Sy.current=e;var a=l&&typeof r.getDerivedStateFromError!="function"?null:o.render();return e.flags|=1,t!==null&&l?(e.child=eo(e,t.child,null,i),e.child=eo(e,null,a,i)):Ie(t,e,a,i),e.memoizedState=o.state,s&&pu(e,r,!0),e.child}function Zf(t){var e=t.stateNode;e.pendingContext?hu(t,e.pendingContext,e.pendingContext!==e.context):e.context&&hu(t,e.context,!1),zc(t,e.containerInfo)}function Eu(t,e,r,o,s){return Zr(),Ic(s),e.flags|=256,Ie(t,e,r,o),e.child}var Oa={dehydrated:null,treeContext:null,retryLane:0};function La(t){return{baseLanes:t,cachePool:null,transitions:null}}function em(t,e,r){var o=e.pendingProps,s=ae.current,i=!1,l=(e.flags&128)!==0,a;if((a=l)||(a=t!==null&&t.memoizedState===null?!1:(s&2)!==0),a?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),ne(ae,s&1),t===null)return Pa(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(l=o.children,t=o.fallback,i?(o=e.mode,i=e.child,l={mode:"hidden",children:l},!(o&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=Yi(l,o,0,null),t=sr(t,o,r,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=La(r),e.memoizedState=Oa,t):Kc(e,l));if(s=t.memoizedState,s!==null&&(a=s.dehydrated,a!==null))return Cy(t,e,l,o,a,s,r);if(i){i=o.fallback,l=e.mode,s=t.child,a=s.sibling;var c={mode:"hidden",children:o.children};return!(l&1)&&e.child!==s?(o=e.child,o.childLanes=0,o.pendingProps=c,e.deletions=null):(o=Mn(s,c),o.subtreeFlags=s.subtreeFlags&14680064),a!==null?i=Mn(a,i):(i=sr(i,l,r,null),i.flags|=2),i.return=e,o.return=e,o.sibling=i,e.child=o,o=i,i=e.child,l=t.child.memoizedState,l=l===null?La(r):{baseLanes:l.baseLanes|r,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=t.childLanes&~r,e.memoizedState=Oa,o}return i=t.child,t=i.sibling,o=Mn(i,{mode:"visible",children:o.children}),!(e.mode&1)&&(o.lanes=r),o.return=e,o.sibling=null,t!==null&&(r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)),e.child=o,e.memoizedState=null,o}function Kc(t,e){return e=Yi({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Fs(t,e,r,o){return o!==null&&Ic(o),eo(e,t.child,null,r),t=Kc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Cy(t,e,r,o,s,i,l){if(r)return e.flags&256?(e.flags&=-257,o=Wl(Error(A(422))),Fs(t,e,l,o)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=o.fallback,s=e.mode,o=Yi({mode:"visible",children:o.children},s,0,null),i=sr(i,s,l,null),i.flags|=2,o.return=e,i.return=e,o.sibling=i,e.child=o,e.mode&1&&eo(e,t.child,null,l),e.child.memoizedState=La(l),e.memoizedState=Oa,i);if(!(e.mode&1))return Fs(t,e,l,null);if(s.data==="$!"){if(o=s.nextSibling&&s.nextSibling.dataset,o)var a=o.dgst;return o=a,i=Error(A(419)),o=Wl(i,o,void 0),Fs(t,e,l,o)}if(a=(l&t.childLanes)!==0,$e||a){if(o=ke,o!==null){switch(l&-l){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(o.suspendedLanes|l)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,Kt(t,s),bt(o,t,s,-1))}return ed(),o=Wl(Error(A(421))),Fs(t,e,l,o)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=Fy.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,Qe=Nn(s.nextSibling),Ye=e,le=!0,jt=null,t!==null&&(st[it++]=Ht,st[it++]=Ut,st[it++]=lr,Ht=t.id,Ut=t.overflow,lr=e),e=Kc(e,o.children),e.flags|=4096,e)}function Au(t,e,r){t.lanes|=e;var o=t.alternate;o!==null&&(o.lanes|=e),Ea(t.return,e,r)}function $l(t,e,r,o,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:o,tail:r,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=o,i.tail=r,i.tailMode=s)}function tm(t,e,r){var o=e.pendingProps,s=o.revealOrder,i=o.tail;if(Ie(t,e,o.children,r),o=ae.current,o&2)o=o&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Au(t,r,e);else if(t.tag===19)Au(t,r,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}o&=1}if(ne(ae,o),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(r=e.child,s=null;r!==null;)t=r.alternate,t!==null&&Ci(t)===null&&(s=r),r=r.sibling;r=s,r===null?(s=e.child,e.child=null):(s=r.sibling,r.sibling=null),$l(e,!1,s,r,i);break;case"backwards":for(r=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&Ci(t)===null){e.child=s;break}t=s.sibling,s.sibling=r,r=s,s=t}$l(e,!0,r,null,i);break;case"together":$l(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ti(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Gt(t,e,r){if(t!==null&&(e.dependencies=t.dependencies),cr|=e.lanes,!(r&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(A(153));if(e.child!==null){for(t=e.child,r=Mn(t,t.pendingProps),e.child=r,r.return=e;t.sibling!==null;)t=t.sibling,r=r.sibling=Mn(t,t.pendingProps),r.return=e;r.sibling=null}return e.child}function Ty(t,e,r){switch(e.tag){case 3:Zf(e),Zr();break;case 5:Nf(e);break;case 1:Ue(e.type)&&yi(e);break;case 4:zc(e,e.stateNode.containerInfo);break;case 10:var o=e.type._context,s=e.memoizedProps.value;ne(bi,o._currentValue),o._currentValue=s;break;case 13:if(o=e.memoizedState,o!==null)return o.dehydrated!==null?(ne(ae,ae.current&1),e.flags|=128,null):r&e.child.childLanes?em(t,e,r):(ne(ae,ae.current&1),t=Gt(t,e,r),t!==null?t.sibling:null);ne(ae,ae.current&1);break;case 19:if(o=(r&e.childLanes)!==0,t.flags&128){if(o)return tm(t,e,r);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),ne(ae,ae.current),o)break;return null;case 22:case 23:return e.lanes=0,Yf(t,e,r)}return Gt(t,e,r)}var nm,Da,rm,om;nm=function(t,e){for(var r=e.child;r!==null;){if(r.tag===5||r.tag===6)t.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Da=function(){};rm=function(t,e,r,o){var s=t.memoizedProps;if(s!==o){t=e.stateNode,Yn(Ot.current);var i=null;switch(r){case"input":s=sa(t,s),o=sa(t,o),i=[];break;case"select":s=de({},s,{value:void 0}),o=de({},o,{value:void 0}),i=[];break;case"textarea":s=aa(t,s),o=aa(t,o),i=[];break;default:typeof s.onClick!="function"&&typeof o.onClick=="function"&&(t.onclick=xi)}da(r,o);var l;r=null;for(d in s)if(!o.hasOwnProperty(d)&&s.hasOwnProperty(d)&&s[d]!=null)if(d==="style"){var a=s[d];for(l in a)a.hasOwnProperty(l)&&(r||(r={}),r[l]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(zo.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in o){var c=o[d];if(a=s!=null?s[d]:void 0,o.hasOwnProperty(d)&&c!==a&&(c!=null||a!=null))if(d==="style")if(a){for(l in a)!a.hasOwnProperty(l)||c&&c.hasOwnProperty(l)||(r||(r={}),r[l]="");for(l in c)c.hasOwnProperty(l)&&a[l]!==c[l]&&(r||(r={}),r[l]=c[l])}else r||(i||(i=[]),i.push(d,r)),r=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,a=a?a.__html:void 0,c!=null&&a!==c&&(i=i||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(i=i||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(zo.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&oe("scroll",t),i||a===c||(i=[])):(i=i||[]).push(d,c))}r&&(i=i||[]).push("style",r);var d=i;(e.updateQueue=d)&&(e.flags|=4)}};om=function(t,e,r,o){r!==o&&(e.flags|=4)};function bo(t,e){if(!le)switch(t.tailMode){case"hidden":e=t.tail;for(var r=null;e!==null;)e.alternate!==null&&(r=e),e=e.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Ae(t){var e=t.alternate!==null&&t.alternate.child===t.child,r=0,o=0;if(e)for(var s=t.child;s!==null;)r|=s.lanes|s.childLanes,o|=s.subtreeFlags&14680064,o|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)r|=s.lanes|s.childLanes,o|=s.subtreeFlags,o|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=o,t.childLanes=r,e}function Ny(t,e,r){var o=e.pendingProps;switch(_c(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ae(e),null;case 1:return Ue(e.type)&&vi(),Ae(e),null;case 3:return o=e.stateNode,to(),se(He),se(_e),$c(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(t===null||t.child===null)&&(Ls(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,jt!==null&&(Va(jt),jt=null))),Da(t,e),Ae(e),null;case 5:Wc(e);var s=Yn(Xo.current);if(r=e.type,t!==null&&e.stateNode!=null)rm(t,e,r,o,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!o){if(e.stateNode===null)throw Error(A(166));return Ae(e),null}if(t=Yn(Ot.current),Ls(e)){o=e.stateNode,r=e.type;var i=e.memoizedProps;switch(o[Rt]=e,o[Qo]=i,t=(e.mode&1)!==0,r){case"dialog":oe("cancel",o),oe("close",o);break;case"iframe":case"object":case"embed":oe("load",o);break;case"video":case"audio":for(s=0;s<Eo.length;s++)oe(Eo[s],o);break;case"source":oe("error",o);break;case"img":case"image":case"link":oe("error",o),oe("load",o);break;case"details":oe("toggle",o);break;case"input":Bd(o,i),oe("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!i.multiple},oe("invalid",o);break;case"textarea":Wd(o,i),oe("invalid",o)}da(r,i),s=null;for(var l in i)if(i.hasOwnProperty(l)){var a=i[l];l==="children"?typeof a=="string"?o.textContent!==a&&(i.suppressHydrationWarning!==!0&&Os(o.textContent,a,t),s=["children",a]):typeof a=="number"&&o.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&Os(o.textContent,a,t),s=["children",""+a]):zo.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&oe("scroll",o)}switch(r){case"input":Ns(o),zd(o,i,!0);break;case"textarea":Ns(o),$d(o);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(o.onclick=xi)}o=s,e.updateQueue=o,o!==null&&(e.flags|=4)}else{l=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Mp(r)),t==="http://www.w3.org/1999/xhtml"?r==="script"?(t=l.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof o.is=="string"?t=l.createElement(r,{is:o.is}):(t=l.createElement(r),r==="select"&&(l=t,o.multiple?l.multiple=!0:o.size&&(l.size=o.size))):t=l.createElementNS(t,r),t[Rt]=e,t[Qo]=o,nm(t,e,!1,!1),e.stateNode=t;e:{switch(l=ua(r,o),r){case"dialog":oe("cancel",t),oe("close",t),s=o;break;case"iframe":case"object":case"embed":oe("load",t),s=o;break;case"video":case"audio":for(s=0;s<Eo.length;s++)oe(Eo[s],t);s=o;break;case"source":oe("error",t),s=o;break;case"img":case"image":case"link":oe("error",t),oe("load",t),s=o;break;case"details":oe("toggle",t),s=o;break;case"input":Bd(t,o),s=sa(t,o),oe("invalid",t);break;case"option":s=o;break;case"select":t._wrapperState={wasMultiple:!!o.multiple},s=de({},o,{value:void 0}),oe("invalid",t);break;case"textarea":Wd(t,o),s=aa(t,o),oe("invalid",t);break;default:s=o}da(r,s),a=s;for(i in a)if(a.hasOwnProperty(i)){var c=a[i];i==="style"?Ip(t,c):i==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Rp(t,c)):i==="children"?typeof c=="string"?(r!=="textarea"||c!=="")&&Wo(t,c):typeof c=="number"&&Wo(t,""+c):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(zo.hasOwnProperty(i)?c!=null&&i==="onScroll"&&oe("scroll",t):c!=null&&vc(t,i,c,l))}switch(r){case"input":Ns(t),zd(t,o,!1);break;case"textarea":Ns(t),$d(t);break;case"option":o.value!=null&&t.setAttribute("value",""+_n(o.value));break;case"select":t.multiple=!!o.multiple,i=o.value,i!=null?Ir(t,!!o.multiple,i,!1):o.defaultValue!=null&&Ir(t,!!o.multiple,o.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=xi)}switch(r){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ae(e),null;case 6:if(t&&e.stateNode!=null)om(t,e,t.memoizedProps,o);else{if(typeof o!="string"&&e.stateNode===null)throw Error(A(166));if(r=Yn(Xo.current),Yn(Ot.current),Ls(e)){if(o=e.stateNode,r=e.memoizedProps,o[Rt]=e,(i=o.nodeValue!==r)&&(t=Ye,t!==null))switch(t.tag){case 3:Os(o.nodeValue,r,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Os(o.nodeValue,r,(t.mode&1)!==0)}i&&(e.flags|=4)}else o=(r.nodeType===9?r:r.ownerDocument).createTextNode(o),o[Rt]=e,e.stateNode=o}return Ae(e),null;case 13:if(se(ae),o=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(le&&Qe!==null&&e.mode&1&&!(e.flags&128))bf(),Zr(),e.flags|=98560,i=!1;else if(i=Ls(e),o!==null&&o.dehydrated!==null){if(t===null){if(!i)throw Error(A(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(A(317));i[Rt]=e}else Zr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ae(e),i=!1}else jt!==null&&(Va(jt),jt=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=r,e):(o=o!==null,o!==(t!==null&&t.memoizedState!==null)&&o&&(e.child.flags|=8192,e.mode&1&&(t===null||ae.current&1?je===0&&(je=3):ed())),e.updateQueue!==null&&(e.flags|=4),Ae(e),null);case 4:return to(),Da(t,e),t===null&&Ko(e.stateNode.containerInfo),Ae(e),null;case 10:return Dc(e.type._context),Ae(e),null;case 17:return Ue(e.type)&&vi(),Ae(e),null;case 19:if(se(ae),i=e.memoizedState,i===null)return Ae(e),null;if(o=(e.flags&128)!==0,l=i.rendering,l===null)if(o)bo(i,!1);else{if(je!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(l=Ci(t),l!==null){for(e.flags|=128,bo(i,!1),o=l.updateQueue,o!==null&&(e.updateQueue=o,e.flags|=4),e.subtreeFlags=0,o=r,r=e.child;r!==null;)i=r,t=o,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,t=l.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),r=r.sibling;return ne(ae,ae.current&1|2),e.child}t=t.sibling}i.tail!==null&&pe()>ro&&(e.flags|=128,o=!0,bo(i,!1),e.lanes=4194304)}else{if(!o)if(t=Ci(l),t!==null){if(e.flags|=128,o=!0,r=t.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),bo(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!le)return Ae(e),null}else 2*pe()-i.renderingStartTime>ro&&r!==1073741824&&(e.flags|=128,o=!0,bo(i,!1),e.lanes=4194304);i.isBackwards?(l.sibling=e.child,e.child=l):(r=i.last,r!==null?r.sibling=l:e.child=l,i.last=l)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=pe(),e.sibling=null,r=ae.current,ne(ae,o?r&1|2:r&1),e):(Ae(e),null);case 22:case 23:return Zc(),o=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==o&&(e.flags|=8192),o&&e.mode&1?Je&1073741824&&(Ae(e),e.subtreeFlags&6&&(e.flags|=8192)):Ae(e),null;case 24:return null;case 25:return null}throw Error(A(156,e.tag))}function Py(t,e){switch(_c(e),e.tag){case 1:return Ue(e.type)&&vi(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return to(),se(He),se(_e),$c(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Wc(e),null;case 13:if(se(ae),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(A(340));Zr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return se(ae),null;case 4:return to(),null;case 10:return Dc(e.type._context),null;case 22:case 23:return Zc(),null;case 24:return null;default:return null}}var Bs=!1,Re=!1,Ey=typeof WeakSet=="function"?WeakSet:Set,L=null;function Rr(t,e){var r=t.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(o){he(t,e,o)}else r.current=null}function Fa(t,e,r){try{r()}catch(o){he(t,e,o)}}var Mu=!1;function Ay(t,e){if(wa=fi,t=cf(),Mc(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else e:{r=(r=t.ownerDocument)&&r.defaultView||window;var o=r.getSelection&&r.getSelection();if(o&&o.rangeCount!==0){r=o.anchorNode;var s=o.anchorOffset,i=o.focusNode;o=o.focusOffset;try{r.nodeType,i.nodeType}catch{r=null;break e}var l=0,a=-1,c=-1,d=0,u=0,p=t,m=null;t:for(;;){for(var h;p!==r||s!==0&&p.nodeType!==3||(a=l+s),p!==i||o!==0&&p.nodeType!==3||(c=l+o),p.nodeType===3&&(l+=p.nodeValue.length),(h=p.firstChild)!==null;)m=p,p=h;for(;;){if(p===t)break t;if(m===r&&++d===s&&(a=l),m===i&&++u===o&&(c=l),(h=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=h}r=a===-1||c===-1?null:{start:a,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(ba={focusedElem:t,selectionRange:r},fi=!1,L=e;L!==null;)if(e=L,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,L=t;else for(;L!==null;){e=L;try{var w=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var y=w.memoizedProps,b=w.memoizedState,g=e.stateNode,f=g.getSnapshotBeforeUpdate(e.elementType===e.type?y:gt(e.type,y),b);g.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(A(163))}}catch(j){he(e,e.return,j)}if(t=e.sibling,t!==null){t.return=e.return,L=t;break}L=e.return}return w=Mu,Mu=!1,w}function Lo(t,e,r){var o=e.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var s=o=o.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&Fa(e,r,i)}s=s.next}while(s!==o)}}function Gi(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var r=e=e.next;do{if((r.tag&t)===t){var o=r.create;r.destroy=o()}r=r.next}while(r!==e)}}function Ba(t){var e=t.ref;if(e!==null){var r=t.stateNode;switch(t.tag){case 5:t=r;break;default:t=r}typeof e=="function"?e(t):e.current=t}}function sm(t){var e=t.alternate;e!==null&&(t.alternate=null,sm(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Rt],delete e[Qo],delete e[Ca],delete e[hy],delete e[py])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function im(t){return t.tag===5||t.tag===3||t.tag===4}function Ru(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||im(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function za(t,e,r){var o=t.tag;if(o===5||o===6)t=t.stateNode,e?r.nodeType===8?r.parentNode.insertBefore(t,e):r.insertBefore(t,e):(r.nodeType===8?(e=r.parentNode,e.insertBefore(t,r)):(e=r,e.appendChild(t)),r=r._reactRootContainer,r!=null||e.onclick!==null||(e.onclick=xi));else if(o!==4&&(t=t.child,t!==null))for(za(t,e,r),t=t.sibling;t!==null;)za(t,e,r),t=t.sibling}function Wa(t,e,r){var o=t.tag;if(o===5||o===6)t=t.stateNode,e?r.insertBefore(t,e):r.appendChild(t);else if(o!==4&&(t=t.child,t!==null))for(Wa(t,e,r),t=t.sibling;t!==null;)Wa(t,e,r),t=t.sibling}var Ce=null,yt=!1;function ln(t,e,r){for(r=r.child;r!==null;)lm(t,e,r),r=r.sibling}function lm(t,e,r){if(It&&typeof It.onCommitFiberUnmount=="function")try{It.onCommitFiberUnmount(Wi,r)}catch{}switch(r.tag){case 5:Re||Rr(r,e);case 6:var o=Ce,s=yt;Ce=null,ln(t,e,r),Ce=o,yt=s,Ce!==null&&(yt?(t=Ce,r=r.stateNode,t.nodeType===8?t.parentNode.removeChild(r):t.removeChild(r)):Ce.removeChild(r.stateNode));break;case 18:Ce!==null&&(yt?(t=Ce,r=r.stateNode,t.nodeType===8?Ol(t.parentNode,r):t.nodeType===1&&Ol(t,r),Vo(t)):Ol(Ce,r.stateNode));break;case 4:o=Ce,s=yt,Ce=r.stateNode.containerInfo,yt=!0,ln(t,e,r),Ce=o,yt=s;break;case 0:case 11:case 14:case 15:if(!Re&&(o=r.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){s=o=o.next;do{var i=s,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&Fa(r,e,l),s=s.next}while(s!==o)}ln(t,e,r);break;case 1:if(!Re&&(Rr(r,e),o=r.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=r.memoizedProps,o.state=r.memoizedState,o.componentWillUnmount()}catch(a){he(r,e,a)}ln(t,e,r);break;case 21:ln(t,e,r);break;case 22:r.mode&1?(Re=(o=Re)||r.memoizedState!==null,ln(t,e,r),Re=o):ln(t,e,r);break;default:ln(t,e,r)}}function _u(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var r=t.stateNode;r===null&&(r=t.stateNode=new Ey),e.forEach(function(o){var s=By.bind(null,t,o);r.has(o)||(r.add(o),o.then(s,s))})}}function ft(t,e){var r=e.deletions;if(r!==null)for(var o=0;o<r.length;o++){var s=r[o];try{var i=t,l=e,a=l;e:for(;a!==null;){switch(a.tag){case 5:Ce=a.stateNode,yt=!1;break e;case 3:Ce=a.stateNode.containerInfo,yt=!0;break e;case 4:Ce=a.stateNode.containerInfo,yt=!0;break e}a=a.return}if(Ce===null)throw Error(A(160));lm(i,l,s),Ce=null,yt=!1;var c=s.alternate;c!==null&&(c.return=null),s.return=null}catch(d){he(s,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)am(e,t),e=e.sibling}function am(t,e){var r=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ft(e,t),Nt(t),o&4){try{Lo(3,t,t.return),Gi(3,t)}catch(y){he(t,t.return,y)}try{Lo(5,t,t.return)}catch(y){he(t,t.return,y)}}break;case 1:ft(e,t),Nt(t),o&512&&r!==null&&Rr(r,r.return);break;case 5:if(ft(e,t),Nt(t),o&512&&r!==null&&Rr(r,r.return),t.flags&32){var s=t.stateNode;try{Wo(s,"")}catch(y){he(t,t.return,y)}}if(o&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,l=r!==null?r.memoizedProps:i,a=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&Ep(s,i),ua(a,l);var d=ua(a,i);for(l=0;l<c.length;l+=2){var u=c[l],p=c[l+1];u==="style"?Ip(s,p):u==="dangerouslySetInnerHTML"?Rp(s,p):u==="children"?Wo(s,p):vc(s,u,p,d)}switch(a){case"input":ia(s,i);break;case"textarea":Ap(s,i);break;case"select":var m=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var h=i.value;h!=null?Ir(s,!!i.multiple,h,!1):m!==!!i.multiple&&(i.defaultValue!=null?Ir(s,!!i.multiple,i.defaultValue,!0):Ir(s,!!i.multiple,i.multiple?[]:"",!1))}s[Qo]=i}catch(y){he(t,t.return,y)}}break;case 6:if(ft(e,t),Nt(t),o&4){if(t.stateNode===null)throw Error(A(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(y){he(t,t.return,y)}}break;case 3:if(ft(e,t),Nt(t),o&4&&r!==null&&r.memoizedState.isDehydrated)try{Vo(e.containerInfo)}catch(y){he(t,t.return,y)}break;case 4:ft(e,t),Nt(t);break;case 13:ft(e,t),Nt(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(Yc=pe())),o&4&&_u(t);break;case 22:if(u=r!==null&&r.memoizedState!==null,t.mode&1?(Re=(d=Re)||u,ft(e,t),Re=d):ft(e,t),Nt(t),o&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!u&&t.mode&1)for(L=t,u=t.child;u!==null;){for(p=L=u;L!==null;){switch(m=L,h=m.child,m.tag){case 0:case 11:case 14:case 15:Lo(4,m,m.return);break;case 1:Rr(m,m.return);var w=m.stateNode;if(typeof w.componentWillUnmount=="function"){o=m,r=m.return;try{e=o,w.props=e.memoizedProps,w.state=e.memoizedState,w.componentWillUnmount()}catch(y){he(o,r,y)}}break;case 5:Rr(m,m.return);break;case 22:if(m.memoizedState!==null){Ou(p);continue}}h!==null?(h.return=m,L=h):Ou(p)}u=u.sibling}e:for(u=null,p=t;;){if(p.tag===5){if(u===null){u=p;try{s=p.stateNode,d?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=p.stateNode,c=p.memoizedProps.style,l=c!=null&&c.hasOwnProperty("display")?c.display:null,a.style.display=_p("display",l))}catch(y){he(t,t.return,y)}}}else if(p.tag===6){if(u===null)try{p.stateNode.nodeValue=d?"":p.memoizedProps}catch(y){he(t,t.return,y)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;u===p&&(u=null),p=p.return}u===p&&(u=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:ft(e,t),Nt(t),o&4&&_u(t);break;case 21:break;default:ft(e,t),Nt(t)}}function Nt(t){var e=t.flags;if(e&2){try{e:{for(var r=t.return;r!==null;){if(im(r)){var o=r;break e}r=r.return}throw Error(A(160))}switch(o.tag){case 5:var s=o.stateNode;o.flags&32&&(Wo(s,""),o.flags&=-33);var i=Ru(t);Wa(t,i,s);break;case 3:case 4:var l=o.stateNode.containerInfo,a=Ru(t);za(t,a,l);break;default:throw Error(A(161))}}catch(c){he(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function My(t,e,r){L=t,cm(t)}function cm(t,e,r){for(var o=(t.mode&1)!==0;L!==null;){var s=L,i=s.child;if(s.tag===22&&o){var l=s.memoizedState!==null||Bs;if(!l){var a=s.alternate,c=a!==null&&a.memoizedState!==null||Re;a=Bs;var d=Re;if(Bs=l,(Re=c)&&!d)for(L=s;L!==null;)l=L,c=l.child,l.tag===22&&l.memoizedState!==null?Lu(s):c!==null?(c.return=l,L=c):Lu(s);for(;i!==null;)L=i,cm(i),i=i.sibling;L=s,Bs=a,Re=d}Iu(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,L=i):Iu(t)}}function Iu(t){for(;L!==null;){var e=L;if(e.flags&8772){var r=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Re||Gi(5,e);break;case 1:var o=e.stateNode;if(e.flags&4&&!Re)if(r===null)o.componentDidMount();else{var s=e.elementType===e.type?r.memoizedProps:gt(e.type,r.memoizedProps);o.componentDidUpdate(s,r.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&vu(e,i,o);break;case 3:var l=e.updateQueue;if(l!==null){if(r=null,e.child!==null)switch(e.child.tag){case 5:r=e.child.stateNode;break;case 1:r=e.child.stateNode}vu(e,l,r)}break;case 5:var a=e.stateNode;if(r===null&&e.flags&4){r=a;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&r.focus();break;case"img":c.src&&(r.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var u=d.memoizedState;if(u!==null){var p=u.dehydrated;p!==null&&Vo(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(A(163))}Re||e.flags&512&&Ba(e)}catch(m){he(e,e.return,m)}}if(e===t){L=null;break}if(r=e.sibling,r!==null){r.return=e.return,L=r;break}L=e.return}}function Ou(t){for(;L!==null;){var e=L;if(e===t){L=null;break}var r=e.sibling;if(r!==null){r.return=e.return,L=r;break}L=e.return}}function Lu(t){for(;L!==null;){var e=L;try{switch(e.tag){case 0:case 11:case 15:var r=e.return;try{Gi(4,e)}catch(c){he(e,r,c)}break;case 1:var o=e.stateNode;if(typeof o.componentDidMount=="function"){var s=e.return;try{o.componentDidMount()}catch(c){he(e,s,c)}}var i=e.return;try{Ba(e)}catch(c){he(e,i,c)}break;case 5:var l=e.return;try{Ba(e)}catch(c){he(e,l,c)}}}catch(c){he(e,e.return,c)}if(e===t){L=null;break}var a=e.sibling;if(a!==null){a.return=e.return,L=a;break}L=e.return}}var Ry=Math.ceil,Pi=Xt.ReactCurrentDispatcher,Gc=Xt.ReactCurrentOwner,at=Xt.ReactCurrentBatchConfig,X=0,ke=null,me=null,Te=0,Je=0,_r=zn(0),je=0,ns=null,cr=0,Qi=0,Qc=0,Do=null,We=null,Yc=0,ro=1/0,zt=null,Ei=!1,$a=null,En=null,zs=!1,bn=null,Ai=0,Fo=0,Ha=null,ni=-1,ri=0;function Le(){return X&6?pe():ni!==-1?ni:ni=pe()}function An(t){return t.mode&1?X&2&&Te!==0?Te&-Te:my.transition!==null?(ri===0&&(ri=qp()),ri):(t=ee,t!==0||(t=window.event,t=t===void 0?16:Zp(t.type)),t):1}function bt(t,e,r,o){if(50<Fo)throw Fo=0,Ha=null,Error(A(185));hs(t,r,o),(!(X&2)||t!==ke)&&(t===ke&&(!(X&2)&&(Qi|=r),je===4&&fn(t,Te)),Ve(t,o),r===1&&X===0&&!(e.mode&1)&&(ro=pe()+500,qi&&Wn()))}function Ve(t,e){var r=t.callbackNode;mv(t,e);var o=pi(t,t===ke?Te:0);if(o===0)r!==null&&Vd(r),t.callbackNode=null,t.callbackPriority=0;else if(e=o&-o,t.callbackPriority!==e){if(r!=null&&Vd(r),e===1)t.tag===0?fy(Du.bind(null,t)):yf(Du.bind(null,t)),dy(function(){!(X&6)&&Wn()}),r=null;else{switch(Jp(o)){case 1:r=kc;break;case 4:r=Up;break;case 16:r=hi;break;case 536870912:r=Vp;break;default:r=hi}r=xm(r,dm.bind(null,t))}t.callbackPriority=e,t.callbackNode=r}}function dm(t,e){if(ni=-1,ri=0,X&6)throw Error(A(327));var r=t.callbackNode;if(Br()&&t.callbackNode!==r)return null;var o=pi(t,t===ke?Te:0);if(o===0)return null;if(o&30||o&t.expiredLanes||e)e=Mi(t,o);else{e=o;var s=X;X|=2;var i=hm();(ke!==t||Te!==e)&&(zt=null,ro=pe()+500,or(t,e));do try{Oy();break}catch(a){um(t,a)}while(!0);Lc(),Pi.current=i,X=s,me!==null?e=0:(ke=null,Te=0,e=je)}if(e!==0){if(e===2&&(s=ga(t),s!==0&&(o=s,e=Ua(t,s))),e===1)throw r=ns,or(t,0),fn(t,o),Ve(t,pe()),r;if(e===6)fn(t,o);else{if(s=t.current.alternate,!(o&30)&&!_y(s)&&(e=Mi(t,o),e===2&&(i=ga(t),i!==0&&(o=i,e=Ua(t,i))),e===1))throw r=ns,or(t,0),fn(t,o),Ve(t,pe()),r;switch(t.finishedWork=s,t.finishedLanes=o,e){case 0:case 1:throw Error(A(345));case 2:Kn(t,We,zt);break;case 3:if(fn(t,o),(o&130023424)===o&&(e=Yc+500-pe(),10<e)){if(pi(t,0)!==0)break;if(s=t.suspendedLanes,(s&o)!==o){Le(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=Sa(Kn.bind(null,t,We,zt),e);break}Kn(t,We,zt);break;case 4:if(fn(t,o),(o&4194240)===o)break;for(e=t.eventTimes,s=-1;0<o;){var l=31-wt(o);i=1<<l,l=e[l],l>s&&(s=l),o&=~i}if(o=s,o=pe()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*Ry(o/1960))-o,10<o){t.timeoutHandle=Sa(Kn.bind(null,t,We,zt),o);break}Kn(t,We,zt);break;case 5:Kn(t,We,zt);break;default:throw Error(A(329))}}}return Ve(t,pe()),t.callbackNode===r?dm.bind(null,t):null}function Ua(t,e){var r=Do;return t.current.memoizedState.isDehydrated&&(or(t,e).flags|=256),t=Mi(t,e),t!==2&&(e=We,We=r,e!==null&&Va(e)),t}function Va(t){We===null?We=t:We.push.apply(We,t)}function _y(t){for(var e=t;;){if(e.flags&16384){var r=e.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var o=0;o<r.length;o++){var s=r[o],i=s.getSnapshot;s=s.value;try{if(!kt(i(),s))return!1}catch{return!1}}}if(r=e.child,e.subtreeFlags&16384&&r!==null)r.return=e,e=r;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function fn(t,e){for(e&=~Qc,e&=~Qi,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var r=31-wt(e),o=1<<r;t[r]=-1,e&=~o}}function Du(t){if(X&6)throw Error(A(327));Br();var e=pi(t,0);if(!(e&1))return Ve(t,pe()),null;var r=Mi(t,e);if(t.tag!==0&&r===2){var o=ga(t);o!==0&&(e=o,r=Ua(t,o))}if(r===1)throw r=ns,or(t,0),fn(t,e),Ve(t,pe()),r;if(r===6)throw Error(A(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Kn(t,We,zt),Ve(t,pe()),null}function Xc(t,e){var r=X;X|=1;try{return t(e)}finally{X=r,X===0&&(ro=pe()+500,qi&&Wn())}}function dr(t){bn!==null&&bn.tag===0&&!(X&6)&&Br();var e=X;X|=1;var r=at.transition,o=ee;try{if(at.transition=null,ee=1,t)return t()}finally{ee=o,at.transition=r,X=e,!(X&6)&&Wn()}}function Zc(){Je=_r.current,se(_r)}function or(t,e){t.finishedWork=null,t.finishedLanes=0;var r=t.timeoutHandle;if(r!==-1&&(t.timeoutHandle=-1,cy(r)),me!==null)for(r=me.return;r!==null;){var o=r;switch(_c(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&vi();break;case 3:to(),se(He),se(_e),$c();break;case 5:Wc(o);break;case 4:to();break;case 13:se(ae);break;case 19:se(ae);break;case 10:Dc(o.type._context);break;case 22:case 23:Zc()}r=r.return}if(ke=t,me=t=Mn(t.current,null),Te=Je=e,je=0,ns=null,Qc=Qi=cr=0,We=Do=null,Qn!==null){for(e=0;e<Qn.length;e++)if(r=Qn[e],o=r.interleaved,o!==null){r.interleaved=null;var s=o.next,i=r.pending;if(i!==null){var l=i.next;i.next=s,o.next=l}r.pending=o}Qn=null}return t}function um(t,e){do{var r=me;try{if(Lc(),Zs.current=Ni,Ti){for(var o=ce.memoizedState;o!==null;){var s=o.queue;s!==null&&(s.pending=null),o=o.next}Ti=!1}if(ar=0,be=ve=ce=null,Oo=!1,Zo=0,Gc.current=null,r===null||r.return===null){je=1,ns=e,me=null;break}e:{var i=t,l=r.return,a=r,c=e;if(e=Te,a.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,u=a,p=u.tag;if(!(u.mode&1)&&(p===0||p===11||p===15)){var m=u.alternate;m?(u.updateQueue=m.updateQueue,u.memoizedState=m.memoizedState,u.lanes=m.lanes):(u.updateQueue=null,u.memoizedState=null)}var h=Su(l);if(h!==null){h.flags&=-257,Cu(h,l,a,i,e),h.mode&1&&ku(i,d,e),e=h,c=d;var w=e.updateQueue;if(w===null){var y=new Set;y.add(c),e.updateQueue=y}else w.add(c);break e}else{if(!(e&1)){ku(i,d,e),ed();break e}c=Error(A(426))}}else if(le&&a.mode&1){var b=Su(l);if(b!==null){!(b.flags&65536)&&(b.flags|=256),Cu(b,l,a,i,e),Ic(no(c,a));break e}}i=c=no(c,a),je!==4&&(je=2),Do===null?Do=[i]:Do.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var g=Kf(i,c,e);xu(i,g);break e;case 1:a=c;var f=i.type,x=i.stateNode;if(!(i.flags&128)&&(typeof f.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(En===null||!En.has(x)))){i.flags|=65536,e&=-e,i.lanes|=e;var j=Gf(i,a,e);xu(i,j);break e}}i=i.return}while(i!==null)}fm(r)}catch(k){e=k,me===r&&r!==null&&(me=r=r.return);continue}break}while(!0)}function hm(){var t=Pi.current;return Pi.current=Ni,t===null?Ni:t}function ed(){(je===0||je===3||je===2)&&(je=4),ke===null||!(cr&268435455)&&!(Qi&268435455)||fn(ke,Te)}function Mi(t,e){var r=X;X|=2;var o=hm();(ke!==t||Te!==e)&&(zt=null,or(t,e));do try{Iy();break}catch(s){um(t,s)}while(!0);if(Lc(),X=r,Pi.current=o,me!==null)throw Error(A(261));return ke=null,Te=0,je}function Iy(){for(;me!==null;)pm(me)}function Oy(){for(;me!==null&&!iv();)pm(me)}function pm(t){var e=gm(t.alternate,t,Je);t.memoizedProps=t.pendingProps,e===null?fm(t):me=e,Gc.current=null}function fm(t){var e=t;do{var r=e.alternate;if(t=e.return,e.flags&32768){if(r=Py(r,e),r!==null){r.flags&=32767,me=r;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{je=6,me=null;return}}else if(r=Ny(r,e,Je),r!==null){me=r;return}if(e=e.sibling,e!==null){me=e;return}me=e=t}while(e!==null);je===0&&(je=5)}function Kn(t,e,r){var o=ee,s=at.transition;try{at.transition=null,ee=1,Ly(t,e,r,o)}finally{at.transition=s,ee=o}return null}function Ly(t,e,r,o){do Br();while(bn!==null);if(X&6)throw Error(A(327));r=t.finishedWork;var s=t.finishedLanes;if(r===null)return null;if(t.finishedWork=null,t.finishedLanes=0,r===t.current)throw Error(A(177));t.callbackNode=null,t.callbackPriority=0;var i=r.lanes|r.childLanes;if(gv(t,i),t===ke&&(me=ke=null,Te=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||zs||(zs=!0,xm(hi,function(){return Br(),null})),i=(r.flags&15990)!==0,r.subtreeFlags&15990||i){i=at.transition,at.transition=null;var l=ee;ee=1;var a=X;X|=4,Gc.current=null,Ay(t,r),am(r,t),ny(ba),fi=!!wa,ba=wa=null,t.current=r,My(r),lv(),X=a,ee=l,at.transition=i}else t.current=r;if(zs&&(zs=!1,bn=t,Ai=s),i=t.pendingLanes,i===0&&(En=null),dv(r.stateNode),Ve(t,pe()),e!==null)for(o=t.onRecoverableError,r=0;r<e.length;r++)s=e[r],o(s.value,{componentStack:s.stack,digest:s.digest});if(Ei)throw Ei=!1,t=$a,$a=null,t;return Ai&1&&t.tag!==0&&Br(),i=t.pendingLanes,i&1?t===Ha?Fo++:(Fo=0,Ha=t):Fo=0,Wn(),null}function Br(){if(bn!==null){var t=Jp(Ai),e=at.transition,r=ee;try{if(at.transition=null,ee=16>t?16:t,bn===null)var o=!1;else{if(t=bn,bn=null,Ai=0,X&6)throw Error(A(331));var s=X;for(X|=4,L=t.current;L!==null;){var i=L,l=i.child;if(L.flags&16){var a=i.deletions;if(a!==null){for(var c=0;c<a.length;c++){var d=a[c];for(L=d;L!==null;){var u=L;switch(u.tag){case 0:case 11:case 15:Lo(8,u,i)}var p=u.child;if(p!==null)p.return=u,L=p;else for(;L!==null;){u=L;var m=u.sibling,h=u.return;if(sm(u),u===d){L=null;break}if(m!==null){m.return=h,L=m;break}L=h}}}var w=i.alternate;if(w!==null){var y=w.child;if(y!==null){w.child=null;do{var b=y.sibling;y.sibling=null,y=b}while(y!==null)}}L=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,L=l;else e:for(;L!==null;){if(i=L,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Lo(9,i,i.return)}var g=i.sibling;if(g!==null){g.return=i.return,L=g;break e}L=i.return}}var f=t.current;for(L=f;L!==null;){l=L;var x=l.child;if(l.subtreeFlags&2064&&x!==null)x.return=l,L=x;else e:for(l=f;L!==null;){if(a=L,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Gi(9,a)}}catch(k){he(a,a.return,k)}if(a===l){L=null;break e}var j=a.sibling;if(j!==null){j.return=a.return,L=j;break e}L=a.return}}if(X=s,Wn(),It&&typeof It.onPostCommitFiberRoot=="function")try{It.onPostCommitFiberRoot(Wi,t)}catch{}o=!0}return o}finally{ee=r,at.transition=e}}return!1}function Fu(t,e,r){e=no(r,e),e=Kf(t,e,1),t=Pn(t,e,1),e=Le(),t!==null&&(hs(t,1,e),Ve(t,e))}function he(t,e,r){if(t.tag===3)Fu(t,t,r);else for(;e!==null;){if(e.tag===3){Fu(e,t,r);break}else if(e.tag===1){var o=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(En===null||!En.has(o))){t=no(r,t),t=Gf(e,t,1),e=Pn(e,t,1),t=Le(),e!==null&&(hs(e,1,t),Ve(e,t));break}}e=e.return}}function Dy(t,e,r){var o=t.pingCache;o!==null&&o.delete(e),e=Le(),t.pingedLanes|=t.suspendedLanes&r,ke===t&&(Te&r)===r&&(je===4||je===3&&(Te&130023424)===Te&&500>pe()-Yc?or(t,0):Qc|=r),Ve(t,e)}function mm(t,e){e===0&&(t.mode&1?(e=As,As<<=1,!(As&130023424)&&(As=4194304)):e=1);var r=Le();t=Kt(t,e),t!==null&&(hs(t,e,r),Ve(t,r))}function Fy(t){var e=t.memoizedState,r=0;e!==null&&(r=e.retryLane),mm(t,r)}function By(t,e){var r=0;switch(t.tag){case 13:var o=t.stateNode,s=t.memoizedState;s!==null&&(r=s.retryLane);break;case 19:o=t.stateNode;break;default:throw Error(A(314))}o!==null&&o.delete(e),mm(t,r)}var gm;gm=function(t,e,r){if(t!==null)if(t.memoizedProps!==e.pendingProps||He.current)$e=!0;else{if(!(t.lanes&r)&&!(e.flags&128))return $e=!1,Ty(t,e,r);$e=!!(t.flags&131072)}else $e=!1,le&&e.flags&1048576&&jf(e,wi,e.index);switch(e.lanes=0,e.tag){case 2:var o=e.type;ti(t,e),t=e.pendingProps;var s=Xr(e,_e.current);Fr(e,r),s=Uc(null,e,o,t,s,r);var i=Vc();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ue(o)?(i=!0,yi(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Bc(e),s.updater=Ki,e.stateNode=s,s._reactInternals=e,Ma(e,o,t,r),e=Ia(null,e,o,!0,i,r)):(e.tag=0,le&&i&&Rc(e),Ie(null,e,s,r),e=e.child),e;case 16:o=e.elementType;e:{switch(ti(t,e),t=e.pendingProps,s=o._init,o=s(o._payload),e.type=o,s=e.tag=Wy(o),t=gt(o,t),s){case 0:e=_a(null,e,o,t,r);break e;case 1:e=Pu(null,e,o,t,r);break e;case 11:e=Tu(null,e,o,t,r);break e;case 14:e=Nu(null,e,o,gt(o.type,t),r);break e}throw Error(A(306,o,""))}return e;case 0:return o=e.type,s=e.pendingProps,s=e.elementType===o?s:gt(o,s),_a(t,e,o,s,r);case 1:return o=e.type,s=e.pendingProps,s=e.elementType===o?s:gt(o,s),Pu(t,e,o,s,r);case 3:e:{if(Zf(e),t===null)throw Error(A(387));o=e.pendingProps,i=e.memoizedState,s=i.element,Tf(t,e),Si(e,o,null,r);var l=e.memoizedState;if(o=l.element,i.isDehydrated)if(i={element:o,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=no(Error(A(423)),e),e=Eu(t,e,o,r,s);break e}else if(o!==s){s=no(Error(A(424)),e),e=Eu(t,e,o,r,s);break e}else for(Qe=Nn(e.stateNode.containerInfo.firstChild),Ye=e,le=!0,jt=null,r=Sf(e,null,o,r),e.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Zr(),o===s){e=Gt(t,e,r);break e}Ie(t,e,o,r)}e=e.child}return e;case 5:return Nf(e),t===null&&Pa(e),o=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,l=s.children,ka(o,s)?l=null:i!==null&&ka(o,i)&&(e.flags|=32),Xf(t,e),Ie(t,e,l,r),e.child;case 6:return t===null&&Pa(e),null;case 13:return em(t,e,r);case 4:return zc(e,e.stateNode.containerInfo),o=e.pendingProps,t===null?e.child=eo(e,null,o,r):Ie(t,e,o,r),e.child;case 11:return o=e.type,s=e.pendingProps,s=e.elementType===o?s:gt(o,s),Tu(t,e,o,s,r);case 7:return Ie(t,e,e.pendingProps,r),e.child;case 8:return Ie(t,e,e.pendingProps.children,r),e.child;case 12:return Ie(t,e,e.pendingProps.children,r),e.child;case 10:e:{if(o=e.type._context,s=e.pendingProps,i=e.memoizedProps,l=s.value,ne(bi,o._currentValue),o._currentValue=l,i!==null)if(kt(i.value,l)){if(i.children===s.children&&!He.current){e=Gt(t,e,r);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var a=i.dependencies;if(a!==null){l=i.child;for(var c=a.firstContext;c!==null;){if(c.context===o){if(i.tag===1){c=Vt(-1,r&-r),c.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var u=d.pending;u===null?c.next=c:(c.next=u.next,u.next=c),d.pending=c}}i.lanes|=r,c=i.alternate,c!==null&&(c.lanes|=r),Ea(i.return,r,e),a.lanes|=r;break}c=c.next}}else if(i.tag===10)l=i.type===e.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(A(341));l.lanes|=r,a=l.alternate,a!==null&&(a.lanes|=r),Ea(l,r,e),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===e){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}Ie(t,e,s.children,r),e=e.child}return e;case 9:return s=e.type,o=e.pendingProps.children,Fr(e,r),s=ct(s),o=o(s),e.flags|=1,Ie(t,e,o,r),e.child;case 14:return o=e.type,s=gt(o,e.pendingProps),s=gt(o.type,s),Nu(t,e,o,s,r);case 15:return Qf(t,e,e.type,e.pendingProps,r);case 17:return o=e.type,s=e.pendingProps,s=e.elementType===o?s:gt(o,s),ti(t,e),e.tag=1,Ue(o)?(t=!0,yi(e)):t=!1,Fr(e,r),Jf(e,o,s),Ma(e,o,s,r),Ia(null,e,o,!0,t,r);case 19:return tm(t,e,r);case 22:return Yf(t,e,r)}throw Error(A(156,e.tag))};function xm(t,e){return Hp(t,e)}function zy(t,e,r,o){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function lt(t,e,r,o){return new zy(t,e,r,o)}function td(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Wy(t){if(typeof t=="function")return td(t)?1:0;if(t!=null){if(t=t.$$typeof,t===jc)return 11;if(t===wc)return 14}return 2}function Mn(t,e){var r=t.alternate;return r===null?(r=lt(t.tag,e,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=e,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&14680064,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,e=t.dependencies,r.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r}function oi(t,e,r,o,s,i){var l=2;if(o=t,typeof t=="function")td(t)&&(l=1);else if(typeof t=="string")l=5;else e:switch(t){case kr:return sr(r.children,s,i,e);case yc:l=8,s|=8;break;case ta:return t=lt(12,r,e,s|2),t.elementType=ta,t.lanes=i,t;case na:return t=lt(13,r,e,s),t.elementType=na,t.lanes=i,t;case ra:return t=lt(19,r,e,s),t.elementType=ra,t.lanes=i,t;case Tp:return Yi(r,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Sp:l=10;break e;case Cp:l=9;break e;case jc:l=11;break e;case wc:l=14;break e;case un:l=16,o=null;break e}throw Error(A(130,t==null?t:typeof t,""))}return e=lt(l,r,e,s),e.elementType=t,e.type=o,e.lanes=i,e}function sr(t,e,r,o){return t=lt(7,t,o,e),t.lanes=r,t}function Yi(t,e,r,o){return t=lt(22,t,o,e),t.elementType=Tp,t.lanes=r,t.stateNode={isHidden:!1},t}function Hl(t,e,r){return t=lt(6,t,null,e),t.lanes=r,t}function Ul(t,e,r){return e=lt(4,t.children!==null?t.children:[],t.key,e),e.lanes=r,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function $y(t,e,r,o,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Sl(0),this.expirationTimes=Sl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Sl(0),this.identifierPrefix=o,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function nd(t,e,r,o,s,i,l,a,c){return t=new $y(t,e,r,a,c),e===1?(e=1,i===!0&&(e|=8)):e=0,i=lt(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:o,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Bc(i),t}function Hy(t,e,r){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:br,key:o==null?null:""+o,children:t,containerInfo:e,implementation:r}}function vm(t){if(!t)return In;t=t._reactInternals;e:{if(pr(t)!==t||t.tag!==1)throw Error(A(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ue(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(A(171))}if(t.tag===1){var r=t.type;if(Ue(r))return vf(t,r,e)}return e}function ym(t,e,r,o,s,i,l,a,c){return t=nd(r,o,!0,t,s,i,l,a,c),t.context=vm(null),r=t.current,o=Le(),s=An(r),i=Vt(o,s),i.callback=e??null,Pn(r,i,s),t.current.lanes=s,hs(t,s,o),Ve(t,o),t}function Xi(t,e,r,o){var s=e.current,i=Le(),l=An(s);return r=vm(r),e.context===null?e.context=r:e.pendingContext=r,e=Vt(i,l),e.payload={element:t},o=o===void 0?null:o,o!==null&&(e.callback=o),t=Pn(s,e,l),t!==null&&(bt(t,s,l,i),Xs(t,s,l)),l}function Ri(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Bu(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<e?r:e}}function rd(t,e){Bu(t,e),(t=t.alternate)&&Bu(t,e)}function Uy(){return null}var jm=typeof reportError=="function"?reportError:function(t){console.error(t)};function od(t){this._internalRoot=t}Zi.prototype.render=od.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(A(409));Xi(t,e,null,null)};Zi.prototype.unmount=od.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;dr(function(){Xi(null,t,null,null)}),e[Jt]=null}};function Zi(t){this._internalRoot=t}Zi.prototype.unstable_scheduleHydration=function(t){if(t){var e=Qp();t={blockedOn:null,target:t,priority:e};for(var r=0;r<pn.length&&e!==0&&e<pn[r].priority;r++);pn.splice(r,0,t),r===0&&Xp(t)}};function sd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function el(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function zu(){}function Vy(t,e,r,o,s){if(s){if(typeof o=="function"){var i=o;o=function(){var d=Ri(l);i.call(d)}}var l=ym(e,o,t,0,null,!1,!1,"",zu);return t._reactRootContainer=l,t[Jt]=l.current,Ko(t.nodeType===8?t.parentNode:t),dr(),l}for(;s=t.lastChild;)t.removeChild(s);if(typeof o=="function"){var a=o;o=function(){var d=Ri(c);a.call(d)}}var c=nd(t,0,!1,null,null,!1,!1,"",zu);return t._reactRootContainer=c,t[Jt]=c.current,Ko(t.nodeType===8?t.parentNode:t),dr(function(){Xi(e,c,r,o)}),c}function tl(t,e,r,o,s){var i=r._reactRootContainer;if(i){var l=i;if(typeof s=="function"){var a=s;s=function(){var c=Ri(l);a.call(c)}}Xi(e,l,t,s)}else l=Vy(r,e,t,s,o);return Ri(l)}Kp=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var r=Po(e.pendingLanes);r!==0&&(Sc(e,r|1),Ve(e,pe()),!(X&6)&&(ro=pe()+500,Wn()))}break;case 13:dr(function(){var o=Kt(t,1);if(o!==null){var s=Le();bt(o,t,1,s)}}),rd(t,1)}};Cc=function(t){if(t.tag===13){var e=Kt(t,134217728);if(e!==null){var r=Le();bt(e,t,134217728,r)}rd(t,134217728)}};Gp=function(t){if(t.tag===13){var e=An(t),r=Kt(t,e);if(r!==null){var o=Le();bt(r,t,e,o)}rd(t,e)}};Qp=function(){return ee};Yp=function(t,e){var r=ee;try{return ee=t,e()}finally{ee=r}};pa=function(t,e,r){switch(e){case"input":if(ia(t,r),e=r.name,r.type==="radio"&&e!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<r.length;e++){var o=r[e];if(o!==t&&o.form===t.form){var s=Vi(o);if(!s)throw Error(A(90));Pp(o),ia(o,s)}}}break;case"textarea":Ap(t,r);break;case"select":e=r.value,e!=null&&Ir(t,!!r.multiple,e,!1)}};Dp=Xc;Fp=dr;var qy={usingClientEntryPoint:!1,Events:[fs,Nr,Vi,Op,Lp,Xc]},ko={findFiberByHostInstance:Gn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Jy={bundleType:ko.bundleType,version:ko.version,rendererPackageName:ko.rendererPackageName,rendererConfig:ko.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Wp(t),t===null?null:t.stateNode},findFiberByHostInstance:ko.findFiberByHostInstance||Uy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ws=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ws.isDisabled&&Ws.supportsFiber)try{Wi=Ws.inject(Jy),It=Ws}catch{}}et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qy;et.createPortal=function(t,e){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!sd(e))throw Error(A(200));return Hy(t,e,null,r)};et.createRoot=function(t,e){if(!sd(t))throw Error(A(299));var r=!1,o="",s=jm;return e!=null&&(e.unstable_strictMode===!0&&(r=!0),e.identifierPrefix!==void 0&&(o=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=nd(t,1,!1,null,null,r,!1,o,s),t[Jt]=e.current,Ko(t.nodeType===8?t.parentNode:t),new od(e)};et.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(A(188)):(t=Object.keys(t).join(","),Error(A(268,t)));return t=Wp(e),t=t===null?null:t.stateNode,t};et.flushSync=function(t){return dr(t)};et.hydrate=function(t,e,r){if(!el(e))throw Error(A(200));return tl(null,t,e,!0,r)};et.hydrateRoot=function(t,e,r){if(!sd(t))throw Error(A(405));var o=r!=null&&r.hydratedSources||null,s=!1,i="",l=jm;if(r!=null&&(r.unstable_strictMode===!0&&(s=!0),r.identifierPrefix!==void 0&&(i=r.identifierPrefix),r.onRecoverableError!==void 0&&(l=r.onRecoverableError)),e=ym(e,null,t,1,r??null,s,!1,i,l),t[Jt]=e.current,Ko(t),o)for(t=0;t<o.length;t++)r=o[t],s=r._getVersion,s=s(r._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[r,s]:e.mutableSourceEagerHydrationData.push(r,s);return new Zi(e)};et.render=function(t,e,r){if(!el(e))throw Error(A(200));return tl(null,t,e,!1,r)};et.unmountComponentAtNode=function(t){if(!el(t))throw Error(A(40));return t._reactRootContainer?(dr(function(){tl(null,null,t,!1,function(){t._reactRootContainer=null,t[Jt]=null})}),!0):!1};et.unstable_batchedUpdates=Xc;et.unstable_renderSubtreeIntoContainer=function(t,e,r,o){if(!el(r))throw Error(A(200));if(t==null||t._reactInternals===void 0)throw Error(A(38));return tl(t,e,r,!1,o)};et.version="18.3.1-next-f1338f8080-20240426";function wm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(wm)}catch(t){console.error(t)}}wm(),jp.exports=et;var gs=jp.exports;const bm=ap(gs);var km,Wu=gs;km=Wu.createRoot,Wu.hydrateRoot;const Ky=1,Gy=1e6;let Vl=0;function Qy(){return Vl=(Vl+1)%Number.MAX_SAFE_INTEGER,Vl.toString()}const ql=new Map,$u=t=>{if(ql.has(t))return;const e=setTimeout(()=>{ql.delete(t),Bo({type:"REMOVE_TOAST",toastId:t})},Gy);ql.set(t,e)},Yy=(t,e)=>{switch(e.type){case"ADD_TOAST":return{...t,toasts:[e.toast,...t.toasts].slice(0,Ky)};case"UPDATE_TOAST":return{...t,toasts:t.toasts.map(r=>r.id===e.toast.id?{...r,...e.toast}:r)};case"DISMISS_TOAST":{const{toastId:r}=e;return r?$u(r):t.toasts.forEach(o=>{$u(o.id)}),{...t,toasts:t.toasts.map(o=>o.id===r||r===void 0?{...o,open:!1}:o)}}case"REMOVE_TOAST":return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(r=>r.id!==e.toastId)}}},si=[];let ii={toasts:[]};function Bo(t){ii=Yy(ii,t),si.forEach(e=>{e(ii)})}function Xy({...t}){const e=Qy(),r=s=>Bo({type:"UPDATE_TOAST",toast:{...s,id:e}}),o=()=>Bo({type:"DISMISS_TOAST",toastId:e});return Bo({type:"ADD_TOAST",toast:{...t,id:e,open:!0,onOpenChange:s=>{s||o()}}}),{id:e,dismiss:o,update:r}}function Zy(){const[t,e]=v.useState(ii);return v.useEffect(()=>(si.push(e),()=>{const r=si.indexOf(e);r>-1&&si.splice(r,1)}),[t]),{...t,toast:Xy,dismiss:r=>Bo({type:"DISMISS_TOAST",toastId:r})}}function ye(t,e,{checkForDefaultPrevented:r=!0}={}){return function(s){if(t==null||t(s),r===!1||!s.defaultPrevented)return e==null?void 0:e(s)}}function Hu(t,e){if(typeof t=="function")return t(e);t!=null&&(t.current=e)}function nl(...t){return e=>{let r=!1;const o=t.map(s=>{const i=Hu(s,e);return!r&&typeof i=="function"&&(r=!0),i});if(r)return()=>{for(let s=0;s<o.length;s++){const i=o[s];typeof i=="function"?i():Hu(t[s],null)}}}}function St(...t){return v.useCallback(nl(...t),t)}function rl(t,e=[]){let r=[];function o(i,l){const a=v.createContext(l),c=r.length;r=[...r,l];const d=p=>{var g;const{scope:m,children:h,...w}=p,y=((g=m==null?void 0:m[t])==null?void 0:g[c])||a,b=v.useMemo(()=>w,Object.values(w));return n.jsx(y.Provider,{value:b,children:h})};d.displayName=i+"Provider";function u(p,m){var y;const h=((y=m==null?void 0:m[t])==null?void 0:y[c])||a,w=v.useContext(h);if(w)return w;if(l!==void 0)return l;throw new Error(`\`${p}\` must be used within \`${i}\``)}return[d,u]}const s=()=>{const i=r.map(l=>v.createContext(l));return function(a){const c=(a==null?void 0:a[t])||i;return v.useMemo(()=>({[`__scope${t}`]:{...a,[t]:c}}),[a,c])}};return s.scopeName=t,[o,ej(s,...e)]}function ej(...t){const e=t[0];if(t.length===1)return e;const r=()=>{const o=t.map(s=>({useScope:s(),scopeName:s.scopeName}));return function(i){const l=o.reduce((a,{useScope:c,scopeName:d})=>{const p=c(i)[`__scope${d}`];return{...a,...p}},{});return v.useMemo(()=>({[`__scope${e.scopeName}`]:l}),[l])}};return r.scopeName=e.scopeName,r}function Uu(t){const e=tj(t),r=v.forwardRef((o,s)=>{const{children:i,...l}=o,a=v.Children.toArray(i),c=a.find(rj);if(c){const d=c.props.children,u=a.map(p=>p===c?v.Children.count(d)>1?v.Children.only(null):v.isValidElement(d)?d.props.children:null:p);return n.jsx(e,{...l,ref:s,children:v.isValidElement(d)?v.cloneElement(d,void 0,u):null})}return n.jsx(e,{...l,ref:s,children:i})});return r.displayName=`${t}.Slot`,r}function tj(t){const e=v.forwardRef((r,o)=>{const{children:s,...i}=r;if(v.isValidElement(s)){const l=sj(s),a=oj(i,s.props);return s.type!==v.Fragment&&(a.ref=o?nl(o,l):l),v.cloneElement(s,a)}return v.Children.count(s)>1?v.Children.only(null):null});return e.displayName=`${t}.SlotClone`,e}var nj=Symbol("radix.slottable");function rj(t){return v.isValidElement(t)&&typeof t.type=="function"&&"__radixId"in t.type&&t.type.__radixId===nj}function oj(t,e){const r={...e};for(const o in e){const s=t[o],i=e[o];/^on[A-Z]/.test(o)?s&&i?r[o]=(...a)=>{const c=i(...a);return s(...a),c}:s&&(r[o]=s):o==="style"?r[o]={...s,...i}:o==="className"&&(r[o]=[s,i].filter(Boolean).join(" "))}return{...t,...r}}function sj(t){var o,s;let e=(o=Object.getOwnPropertyDescriptor(t.props,"ref"))==null?void 0:o.get,r=e&&"isReactWarning"in e&&e.isReactWarning;return r?t.ref:(e=(s=Object.getOwnPropertyDescriptor(t,"ref"))==null?void 0:s.get,r=e&&"isReactWarning"in e&&e.isReactWarning,r?t.props.ref:t.props.ref||t.ref)}function ij(t){const e=t+"CollectionProvider",[r,o]=rl(e),[s,i]=r(e,{collectionRef:{current:null},itemMap:new Map}),l=y=>{const{scope:b,children:g}=y,f=M.useRef(null),x=M.useRef(new Map).current;return n.jsx(s,{scope:b,itemMap:x,collectionRef:f,children:g})};l.displayName=e;const a=t+"CollectionSlot",c=Uu(a),d=M.forwardRef((y,b)=>{const{scope:g,children:f}=y,x=i(a,g),j=St(b,x.collectionRef);return n.jsx(c,{ref:j,children:f})});d.displayName=a;const u=t+"CollectionItemSlot",p="data-radix-collection-item",m=Uu(u),h=M.forwardRef((y,b)=>{const{scope:g,children:f,...x}=y,j=M.useRef(null),k=St(b,j),S=i(u,g);return M.useEffect(()=>(S.itemMap.set(j,{ref:j,...x}),()=>void S.itemMap.delete(j))),n.jsx(m,{[p]:"",ref:k,children:f})});h.displayName=u;function w(y){const b=i(t+"CollectionConsumer",y);return M.useCallback(()=>{const f=b.collectionRef.current;if(!f)return[];const x=Array.from(f.querySelectorAll(`[${p}]`));return Array.from(b.itemMap.values()).sort((S,C)=>x.indexOf(S.ref.current)-x.indexOf(C.ref.current))},[b.collectionRef,b.itemMap])}return[{Provider:l,Slot:d,ItemSlot:h},w,o]}function lj(t){const e=aj(t),r=v.forwardRef((o,s)=>{const{children:i,...l}=o,a=v.Children.toArray(i),c=a.find(dj);if(c){const d=c.props.children,u=a.map(p=>p===c?v.Children.count(d)>1?v.Children.only(null):v.isValidElement(d)?d.props.children:null:p);return n.jsx(e,{...l,ref:s,children:v.isValidElement(d)?v.cloneElement(d,void 0,u):null})}return n.jsx(e,{...l,ref:s,children:i})});return r.displayName=`${t}.Slot`,r}function aj(t){const e=v.forwardRef((r,o)=>{const{children:s,...i}=r;if(v.isValidElement(s)){const l=hj(s),a=uj(i,s.props);return s.type!==v.Fragment&&(a.ref=o?nl(o,l):l),v.cloneElement(s,a)}return v.Children.count(s)>1?v.Children.only(null):null});return e.displayName=`${t}.SlotClone`,e}var cj=Symbol("radix.slottable");function dj(t){return v.isValidElement(t)&&typeof t.type=="function"&&"__radixId"in t.type&&t.type.__radixId===cj}function uj(t,e){const r={...e};for(const o in e){const s=t[o],i=e[o];/^on[A-Z]/.test(o)?s&&i?r[o]=(...a)=>{const c=i(...a);return s(...a),c}:s&&(r[o]=s):o==="style"?r[o]={...s,...i}:o==="className"&&(r[o]=[s,i].filter(Boolean).join(" "))}return{...t,...r}}function hj(t){var o,s;let e=(o=Object.getOwnPropertyDescriptor(t.props,"ref"))==null?void 0:o.get,r=e&&"isReactWarning"in e&&e.isReactWarning;return r?t.ref:(e=(s=Object.getOwnPropertyDescriptor(t,"ref"))==null?void 0:s.get,r=e&&"isReactWarning"in e&&e.isReactWarning,r?t.props.ref:t.props.ref||t.ref)}var pj=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],qe=pj.reduce((t,e)=>{const r=lj(`Primitive.${e}`),o=v.forwardRef((s,i)=>{const{asChild:l,...a}=s,c=l?r:e;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),n.jsx(c,{...a,ref:i})});return o.displayName=`Primitive.${e}`,{...t,[e]:o}},{});function Sm(t,e){t&&gs.flushSync(()=>t.dispatchEvent(e))}function On(t){const e=v.useRef(t);return v.useEffect(()=>{e.current=t}),v.useMemo(()=>(...r)=>{var o;return(o=e.current)==null?void 0:o.call(e,...r)},[])}function fj(t,e=globalThis==null?void 0:globalThis.document){const r=On(t);v.useEffect(()=>{const o=s=>{s.key==="Escape"&&r(s)};return e.addEventListener("keydown",o,{capture:!0}),()=>e.removeEventListener("keydown",o,{capture:!0})},[r,e])}var mj="DismissableLayer",qa="dismissableLayer.update",gj="dismissableLayer.pointerDownOutside",xj="dismissableLayer.focusOutside",Vu,Cm=v.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),id=v.forwardRef((t,e)=>{const{disableOutsidePointerEvents:r=!1,onEscapeKeyDown:o,onPointerDownOutside:s,onFocusOutside:i,onInteractOutside:l,onDismiss:a,...c}=t,d=v.useContext(Cm),[u,p]=v.useState(null),m=(u==null?void 0:u.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,h]=v.useState({}),w=St(e,C=>p(C)),y=Array.from(d.layers),[b]=[...d.layersWithOutsidePointerEventsDisabled].slice(-1),g=y.indexOf(b),f=u?y.indexOf(u):-1,x=d.layersWithOutsidePointerEventsDisabled.size>0,j=f>=g,k=yj(C=>{const P=C.target,I=[...d.branches].some(R=>R.contains(P));!j||I||(s==null||s(C),l==null||l(C),C.defaultPrevented||a==null||a())},m),S=jj(C=>{const P=C.target;[...d.branches].some(R=>R.contains(P))||(i==null||i(C),l==null||l(C),C.defaultPrevented||a==null||a())},m);return fj(C=>{f===d.layers.size-1&&(o==null||o(C),!C.defaultPrevented&&a&&(C.preventDefault(),a()))},m),v.useEffect(()=>{if(u)return r&&(d.layersWithOutsidePointerEventsDisabled.size===0&&(Vu=m.body.style.pointerEvents,m.body.style.pointerEvents="none"),d.layersWithOutsidePointerEventsDisabled.add(u)),d.layers.add(u),qu(),()=>{r&&d.layersWithOutsidePointerEventsDisabled.size===1&&(m.body.style.pointerEvents=Vu)}},[u,m,r,d]),v.useEffect(()=>()=>{u&&(d.layers.delete(u),d.layersWithOutsidePointerEventsDisabled.delete(u),qu())},[u,d]),v.useEffect(()=>{const C=()=>h({});return document.addEventListener(qa,C),()=>document.removeEventListener(qa,C)},[]),n.jsx(qe.div,{...c,ref:w,style:{pointerEvents:x?j?"auto":"none":void 0,...t.style},onFocusCapture:ye(t.onFocusCapture,S.onFocusCapture),onBlurCapture:ye(t.onBlurCapture,S.onBlurCapture),onPointerDownCapture:ye(t.onPointerDownCapture,k.onPointerDownCapture)})});id.displayName=mj;var vj="DismissableLayerBranch",Tm=v.forwardRef((t,e)=>{const r=v.useContext(Cm),o=v.useRef(null),s=St(e,o);return v.useEffect(()=>{const i=o.current;if(i)return r.branches.add(i),()=>{r.branches.delete(i)}},[r.branches]),n.jsx(qe.div,{...t,ref:s})});Tm.displayName=vj;function yj(t,e=globalThis==null?void 0:globalThis.document){const r=On(t),o=v.useRef(!1),s=v.useRef(()=>{});return v.useEffect(()=>{const i=a=>{if(a.target&&!o.current){let c=function(){Nm(gj,r,d,{discrete:!0})};const d={originalEvent:a};a.pointerType==="touch"?(e.removeEventListener("click",s.current),s.current=c,e.addEventListener("click",s.current,{once:!0})):c()}else e.removeEventListener("click",s.current);o.current=!1},l=window.setTimeout(()=>{e.addEventListener("pointerdown",i)},0);return()=>{window.clearTimeout(l),e.removeEventListener("pointerdown",i),e.removeEventListener("click",s.current)}},[e,r]),{onPointerDownCapture:()=>o.current=!0}}function jj(t,e=globalThis==null?void 0:globalThis.document){const r=On(t),o=v.useRef(!1);return v.useEffect(()=>{const s=i=>{i.target&&!o.current&&Nm(xj,r,{originalEvent:i},{discrete:!1})};return e.addEventListener("focusin",s),()=>e.removeEventListener("focusin",s)},[e,r]),{onFocusCapture:()=>o.current=!0,onBlurCapture:()=>o.current=!1}}function qu(){const t=new CustomEvent(qa);document.dispatchEvent(t)}function Nm(t,e,r,{discrete:o}){const s=r.originalEvent.target,i=new CustomEvent(t,{bubbles:!1,cancelable:!0,detail:r});e&&s.addEventListener(t,e,{once:!0}),o?Sm(s,i):s.dispatchEvent(i)}var wj=id,bj=Tm,Ln=globalThis!=null&&globalThis.document?v.useLayoutEffect:()=>{},kj="Portal",Pm=v.forwardRef((t,e)=>{var a;const{container:r,...o}=t,[s,i]=v.useState(!1);Ln(()=>i(!0),[]);const l=r||s&&((a=globalThis==null?void 0:globalThis.document)==null?void 0:a.body);return l?bm.createPortal(n.jsx(qe.div,{...o,ref:e}),l):null});Pm.displayName=kj;function Sj(t,e){return v.useReducer((r,o)=>e[r][o]??r,t)}var ld=t=>{const{present:e,children:r}=t,o=Cj(e),s=typeof r=="function"?r({present:o.isPresent}):v.Children.only(r),i=St(o.ref,Tj(s));return typeof r=="function"||o.isPresent?v.cloneElement(s,{ref:i}):null};ld.displayName="Presence";function Cj(t){const[e,r]=v.useState(),o=v.useRef(null),s=v.useRef(t),i=v.useRef("none"),l=t?"mounted":"unmounted",[a,c]=Sj(l,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return v.useEffect(()=>{const d=$s(o.current);i.current=a==="mounted"?d:"none"},[a]),Ln(()=>{const d=o.current,u=s.current;if(u!==t){const m=i.current,h=$s(d);t?c("MOUNT"):h==="none"||(d==null?void 0:d.display)==="none"?c("UNMOUNT"):c(u&&m!==h?"ANIMATION_OUT":"UNMOUNT"),s.current=t}},[t,c]),Ln(()=>{if(e){let d;const u=e.ownerDocument.defaultView??window,p=h=>{const y=$s(o.current).includes(CSS.escape(h.animationName));if(h.target===e&&y&&(c("ANIMATION_END"),!s.current)){const b=e.style.animationFillMode;e.style.animationFillMode="forwards",d=u.setTimeout(()=>{e.style.animationFillMode==="forwards"&&(e.style.animationFillMode=b)})}},m=h=>{h.target===e&&(i.current=$s(o.current))};return e.addEventListener("animationstart",m),e.addEventListener("animationcancel",p),e.addEventListener("animationend",p),()=>{u.clearTimeout(d),e.removeEventListener("animationstart",m),e.removeEventListener("animationcancel",p),e.removeEventListener("animationend",p)}}else c("ANIMATION_END")},[e,c]),{isPresent:["mounted","unmountSuspended"].includes(a),ref:v.useCallback(d=>{o.current=d?getComputedStyle(d):null,r(d)},[])}}function $s(t){return(t==null?void 0:t.animationName)||"none"}function Tj(t){var o,s;let e=(o=Object.getOwnPropertyDescriptor(t.props,"ref"))==null?void 0:o.get,r=e&&"isReactWarning"in e&&e.isReactWarning;return r?t.ref:(e=(s=Object.getOwnPropertyDescriptor(t,"ref"))==null?void 0:s.get,r=e&&"isReactWarning"in e&&e.isReactWarning,r?t.props.ref:t.props.ref||t.ref)}var Nj=mc[" useInsertionEffect ".trim().toString()]||Ln;function Pj({prop:t,defaultProp:e,onChange:r=()=>{},caller:o}){const[s,i,l]=Ej({defaultProp:e,onChange:r}),a=t!==void 0,c=a?t:s;{const u=v.useRef(t!==void 0);v.useEffect(()=>{const p=u.current;p!==a&&console.warn(`${o} is changing from ${p?"controlled":"uncontrolled"} to ${a?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),u.current=a},[a,o])}const d=v.useCallback(u=>{var p;if(a){const m=Aj(u)?u(t):u;m!==t&&((p=l.current)==null||p.call(l,m))}else i(u)},[a,t,i,l]);return[c,d]}function Ej({defaultProp:t,onChange:e}){const[r,o]=v.useState(t),s=v.useRef(r),i=v.useRef(e);return Nj(()=>{i.current=e},[e]),v.useEffect(()=>{var l;s.current!==r&&((l=i.current)==null||l.call(i,r),s.current=r)},[r,s]),[r,o,i]}function Aj(t){return typeof t=="function"}var Mj=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"}),Rj="VisuallyHidden",ol=v.forwardRef((t,e)=>n.jsx(qe.span,{...t,ref:e,style:{...Mj,...t.style}}));ol.displayName=Rj;var _j=ol,ad="ToastProvider",[cd,Ij,Oj]=ij("Toast"),[Em]=rl("Toast",[Oj]),[Lj,sl]=Em(ad),Am=t=>{const{__scopeToast:e,label:r="Notification",duration:o=5e3,swipeDirection:s="right",swipeThreshold:i=50,children:l}=t,[a,c]=v.useState(null),[d,u]=v.useState(0),p=v.useRef(!1),m=v.useRef(!1);return r.trim()||console.error(`Invalid prop \`label\` supplied to \`${ad}\`. Expected non-empty \`string\`.`),n.jsx(cd.Provider,{scope:e,children:n.jsx(Lj,{scope:e,label:r,duration:o,swipeDirection:s,swipeThreshold:i,toastCount:d,viewport:a,onViewportChange:c,onToastAdd:v.useCallback(()=>u(h=>h+1),[]),onToastRemove:v.useCallback(()=>u(h=>h-1),[]),isFocusedToastEscapeKeyDownRef:p,isClosePausedRef:m,children:l})})};Am.displayName=ad;var Mm="ToastViewport",Dj=["F8"],Ja="toast.viewportPause",Ka="toast.viewportResume",Rm=v.forwardRef((t,e)=>{const{__scopeToast:r,hotkey:o=Dj,label:s="Notifications ({hotkey})",...i}=t,l=sl(Mm,r),a=Ij(r),c=v.useRef(null),d=v.useRef(null),u=v.useRef(null),p=v.useRef(null),m=St(e,p,l.onViewportChange),h=o.join("+").replace(/Key/g,"").replace(/Digit/g,""),w=l.toastCount>0;v.useEffect(()=>{const b=g=>{var x;o.length!==0&&o.every(j=>g[j]||g.code===j)&&((x=p.current)==null||x.focus())};return document.addEventListener("keydown",b),()=>document.removeEventListener("keydown",b)},[o]),v.useEffect(()=>{const b=c.current,g=p.current;if(w&&b&&g){const f=()=>{if(!l.isClosePausedRef.current){const S=new CustomEvent(Ja);g.dispatchEvent(S),l.isClosePausedRef.current=!0}},x=()=>{if(l.isClosePausedRef.current){const S=new CustomEvent(Ka);g.dispatchEvent(S),l.isClosePausedRef.current=!1}},j=S=>{!b.contains(S.relatedTarget)&&x()},k=()=>{b.contains(document.activeElement)||x()};return b.addEventListener("focusin",f),b.addEventListener("focusout",j),b.addEventListener("pointermove",f),b.addEventListener("pointerleave",k),window.addEventListener("blur",f),window.addEventListener("focus",x),()=>{b.removeEventListener("focusin",f),b.removeEventListener("focusout",j),b.removeEventListener("pointermove",f),b.removeEventListener("pointerleave",k),window.removeEventListener("blur",f),window.removeEventListener("focus",x)}}},[w,l.isClosePausedRef]);const y=v.useCallback(({tabbingDirection:b})=>{const f=a().map(x=>{const j=x.ref.current,k=[j,...Qj(j)];return b==="forwards"?k:k.reverse()});return(b==="forwards"?f.reverse():f).flat()},[a]);return v.useEffect(()=>{const b=p.current;if(b){const g=f=>{var k,S,C;const x=f.altKey||f.ctrlKey||f.metaKey;if(f.key==="Tab"&&!x){const P=document.activeElement,I=f.shiftKey;if(f.target===b&&I){(k=d.current)==null||k.focus();return}const D=y({tabbingDirection:I?"backwards":"forwards"}),q=D.findIndex(_=>_===P);Jl(D.slice(q+1))?f.preventDefault():I?(S=d.current)==null||S.focus():(C=u.current)==null||C.focus()}};return b.addEventListener("keydown",g),()=>b.removeEventListener("keydown",g)}},[a,y]),n.jsxs(bj,{ref:c,role:"region","aria-label":s.replace("{hotkey}",h),tabIndex:-1,style:{pointerEvents:w?void 0:"none"},children:[w&&n.jsx(Ga,{ref:d,onFocusFromOutsideViewport:()=>{const b=y({tabbingDirection:"forwards"});Jl(b)}}),n.jsx(cd.Slot,{scope:r,children:n.jsx(qe.ol,{tabIndex:-1,...i,ref:m})}),w&&n.jsx(Ga,{ref:u,onFocusFromOutsideViewport:()=>{const b=y({tabbingDirection:"backwards"});Jl(b)}})]})});Rm.displayName=Mm;var _m="ToastFocusProxy",Ga=v.forwardRef((t,e)=>{const{__scopeToast:r,onFocusFromOutsideViewport:o,...s}=t,i=sl(_m,r);return n.jsx(ol,{tabIndex:0,...s,ref:e,style:{position:"fixed"},onFocus:l=>{var d;const a=l.relatedTarget;!((d=i.viewport)!=null&&d.contains(a))&&o()}})});Ga.displayName=_m;var xs="Toast",Fj="toast.swipeStart",Bj="toast.swipeMove",zj="toast.swipeCancel",Wj="toast.swipeEnd",Im=v.forwardRef((t,e)=>{const{forceMount:r,open:o,defaultOpen:s,onOpenChange:i,...l}=t,[a,c]=Pj({prop:o,defaultProp:s??!0,onChange:i,caller:xs});return n.jsx(ld,{present:r||a,children:n.jsx(Uj,{open:a,...l,ref:e,onClose:()=>c(!1),onPause:On(t.onPause),onResume:On(t.onResume),onSwipeStart:ye(t.onSwipeStart,d=>{d.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:ye(t.onSwipeMove,d=>{const{x:u,y:p}=d.detail.delta;d.currentTarget.setAttribute("data-swipe","move"),d.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${u}px`),d.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${p}px`)}),onSwipeCancel:ye(t.onSwipeCancel,d=>{d.currentTarget.setAttribute("data-swipe","cancel"),d.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),d.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),d.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),d.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:ye(t.onSwipeEnd,d=>{const{x:u,y:p}=d.detail.delta;d.currentTarget.setAttribute("data-swipe","end"),d.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),d.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),d.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${u}px`),d.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${p}px`),c(!1)})})})});Im.displayName=xs;var[$j,Hj]=Em(xs,{onClose(){}}),Uj=v.forwardRef((t,e)=>{const{__scopeToast:r,type:o="foreground",duration:s,open:i,onClose:l,onEscapeKeyDown:a,onPause:c,onResume:d,onSwipeStart:u,onSwipeMove:p,onSwipeCancel:m,onSwipeEnd:h,...w}=t,y=sl(xs,r),[b,g]=v.useState(null),f=St(e,_=>g(_)),x=v.useRef(null),j=v.useRef(null),k=s||y.duration,S=v.useRef(0),C=v.useRef(k),P=v.useRef(0),{onToastAdd:I,onToastRemove:R}=y,z=On(()=>{var G;(b==null?void 0:b.contains(document.activeElement))&&((G=y.viewport)==null||G.focus()),l()}),D=v.useCallback(_=>{!_||_===1/0||(window.clearTimeout(P.current),S.current=new Date().getTime(),P.current=window.setTimeout(z,_))},[z]);v.useEffect(()=>{const _=y.viewport;if(_){const G=()=>{D(C.current),d==null||d()},W=()=>{const H=new Date().getTime()-S.current;C.current=C.current-H,window.clearTimeout(P.current),c==null||c()};return _.addEventListener(Ja,W),_.addEventListener(Ka,G),()=>{_.removeEventListener(Ja,W),_.removeEventListener(Ka,G)}}},[y.viewport,k,c,d,D]),v.useEffect(()=>{i&&!y.isClosePausedRef.current&&D(k)},[i,k,y.isClosePausedRef,D]),v.useEffect(()=>(I(),()=>R()),[I,R]);const q=v.useMemo(()=>b?Wm(b):null,[b]);return y.viewport?n.jsxs(n.Fragment,{children:[q&&n.jsx(Vj,{__scopeToast:r,role:"status","aria-live":o==="foreground"?"assertive":"polite",children:q}),n.jsx($j,{scope:r,onClose:z,children:gs.createPortal(n.jsx(cd.ItemSlot,{scope:r,children:n.jsx(wj,{asChild:!0,onEscapeKeyDown:ye(a,()=>{y.isFocusedToastEscapeKeyDownRef.current||z(),y.isFocusedToastEscapeKeyDownRef.current=!1}),children:n.jsx(qe.li,{tabIndex:0,"data-state":i?"open":"closed","data-swipe-direction":y.swipeDirection,...w,ref:f,style:{userSelect:"none",touchAction:"none",...t.style},onKeyDown:ye(t.onKeyDown,_=>{_.key==="Escape"&&(a==null||a(_.nativeEvent),_.nativeEvent.defaultPrevented||(y.isFocusedToastEscapeKeyDownRef.current=!0,z()))}),onPointerDown:ye(t.onPointerDown,_=>{_.button===0&&(x.current={x:_.clientX,y:_.clientY})}),onPointerMove:ye(t.onPointerMove,_=>{if(!x.current)return;const G=_.clientX-x.current.x,W=_.clientY-x.current.y,H=!!j.current,N=["left","right"].includes(y.swipeDirection),E=["left","up"].includes(y.swipeDirection)?Math.min:Math.max,O=N?E(0,G):0,U=N?0:E(0,W),F=_.pointerType==="touch"?10:2,J={x:O,y:U},Q={originalEvent:_,delta:J};H?(j.current=J,Hs(Bj,p,Q,{discrete:!1})):Ju(J,y.swipeDirection,F)?(j.current=J,Hs(Fj,u,Q,{discrete:!1}),_.target.setPointerCapture(_.pointerId)):(Math.abs(G)>F||Math.abs(W)>F)&&(x.current=null)}),onPointerUp:ye(t.onPointerUp,_=>{const G=j.current,W=_.target;if(W.hasPointerCapture(_.pointerId)&&W.releasePointerCapture(_.pointerId),j.current=null,x.current=null,G){const H=_.currentTarget,N={originalEvent:_,delta:G};Ju(G,y.swipeDirection,y.swipeThreshold)?Hs(Wj,h,N,{discrete:!0}):Hs(zj,m,N,{discrete:!0}),H.addEventListener("click",E=>E.preventDefault(),{once:!0})}})})})}),y.viewport)})]}):null}),Vj=t=>{const{__scopeToast:e,children:r,...o}=t,s=sl(xs,e),[i,l]=v.useState(!1),[a,c]=v.useState(!1);return Kj(()=>l(!0)),v.useEffect(()=>{const d=window.setTimeout(()=>c(!0),1e3);return()=>window.clearTimeout(d)},[]),a?null:n.jsx(Pm,{asChild:!0,children:n.jsx(ol,{...o,children:i&&n.jsxs(n.Fragment,{children:[s.label," ",r]})})})},qj="ToastTitle",Om=v.forwardRef((t,e)=>{const{__scopeToast:r,...o}=t;return n.jsx(qe.div,{...o,ref:e})});Om.displayName=qj;var Jj="ToastDescription",Lm=v.forwardRef((t,e)=>{const{__scopeToast:r,...o}=t;return n.jsx(qe.div,{...o,ref:e})});Lm.displayName=Jj;var Dm="ToastAction",Fm=v.forwardRef((t,e)=>{const{altText:r,...o}=t;return r.trim()?n.jsx(zm,{altText:r,asChild:!0,children:n.jsx(dd,{...o,ref:e})}):(console.error(`Invalid prop \`altText\` supplied to \`${Dm}\`. Expected non-empty \`string\`.`),null)});Fm.displayName=Dm;var Bm="ToastClose",dd=v.forwardRef((t,e)=>{const{__scopeToast:r,...o}=t,s=Hj(Bm,r);return n.jsx(zm,{asChild:!0,children:n.jsx(qe.button,{type:"button",...o,ref:e,onClick:ye(t.onClick,s.onClose)})})});dd.displayName=Bm;var zm=v.forwardRef((t,e)=>{const{__scopeToast:r,altText:o,...s}=t;return n.jsx(qe.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":o||void 0,...s,ref:e})});function Wm(t){const e=[];return Array.from(t.childNodes).forEach(o=>{if(o.nodeType===o.TEXT_NODE&&o.textContent&&e.push(o.textContent),Gj(o)){const s=o.ariaHidden||o.hidden||o.style.display==="none",i=o.dataset.radixToastAnnounceExclude==="";if(!s)if(i){const l=o.dataset.radixToastAnnounceAlt;l&&e.push(l)}else e.push(...Wm(o))}}),e}function Hs(t,e,r,{discrete:o}){const s=r.originalEvent.currentTarget,i=new CustomEvent(t,{bubbles:!0,cancelable:!0,detail:r});e&&s.addEventListener(t,e,{once:!0}),o?Sm(s,i):s.dispatchEvent(i)}var Ju=(t,e,r=0)=>{const o=Math.abs(t.x),s=Math.abs(t.y),i=o>s;return e==="left"||e==="right"?i&&o>r:!i&&s>r};function Kj(t=()=>{}){const e=On(t);Ln(()=>{let r=0,o=0;return r=window.requestAnimationFrame(()=>o=window.requestAnimationFrame(e)),()=>{window.cancelAnimationFrame(r),window.cancelAnimationFrame(o)}},[e])}function Gj(t){return t.nodeType===t.ELEMENT_NODE}function Qj(t){const e=[],r=document.createTreeWalker(t,NodeFilter.SHOW_ELEMENT,{acceptNode:o=>{const s=o.tagName==="INPUT"&&o.type==="hidden";return o.disabled||o.hidden||s?NodeFilter.FILTER_SKIP:o.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;r.nextNode();)e.push(r.currentNode);return e}function Jl(t){const e=document.activeElement;return t.some(r=>r===e?!0:(r.focus(),document.activeElement!==e))}var Yj=Am,$m=Rm,Hm=Im,Um=Om,Vm=Lm,qm=Fm,Jm=dd;function Km(t){var e,r,o="";if(typeof t=="string"||typeof t=="number")o+=t;else if(typeof t=="object")if(Array.isArray(t)){var s=t.length;for(e=0;e<s;e++)t[e]&&(r=Km(t[e]))&&(o&&(o+=" "),o+=r)}else for(r in t)t[r]&&(o&&(o+=" "),o+=r);return o}function Gm(){for(var t,e,r=0,o="",s=arguments.length;r<s;r++)(t=arguments[r])&&(e=Km(t))&&(o&&(o+=" "),o+=e);return o}const Ku=t=>typeof t=="boolean"?`${t}`:t===0?"0":t,Gu=Gm,ud=(t,e)=>r=>{var o;if((e==null?void 0:e.variants)==null)return Gu(t,r==null?void 0:r.class,r==null?void 0:r.className);const{variants:s,defaultVariants:i}=e,l=Object.keys(s).map(d=>{const u=r==null?void 0:r[d],p=i==null?void 0:i[d];if(u===null)return null;const m=Ku(u)||Ku(p);return s[d][m]}),a=r&&Object.entries(r).reduce((d,u)=>{let[p,m]=u;return m===void 0||(d[p]=m),d},{}),c=e==null||(o=e.compoundVariants)===null||o===void 0?void 0:o.reduce((d,u)=>{let{class:p,className:m,...h}=u;return Object.entries(h).every(w=>{let[y,b]=w;return Array.isArray(b)?b.includes({...i,...a}[y]):{...i,...a}[y]===b})?[...d,p,m]:d},[]);return Gu(t,l,c,r==null?void 0:r.class,r==null?void 0:r.className)};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xj=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Qm=(...t)=>t.filter((e,r,o)=>!!e&&e.trim()!==""&&o.indexOf(e)===r).join(" ").trim();/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Zj={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ew=v.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:o,className:s="",children:i,iconNode:l,...a},c)=>v.createElement("svg",{ref:c,...Zj,width:e,height:e,stroke:t,strokeWidth:o?Number(r)*24/Number(e):r,className:Qm("lucide",s),...a},[...l.map(([d,u])=>v.createElement(d,u)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xe=(t,e)=>{const r=v.forwardRef(({className:o,...s},i)=>v.createElement(ew,{ref:i,iconNode:e,className:Qm(`lucide-${Xj(t)}`,o),...s}));return r.displayName=`${t}`,r};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qu=xe("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tw=xe("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nw=xe("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rw=xe("Brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ow=xe("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sw=xe("CodeXml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iw=xe("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lw=xe("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ym=xe("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aw=xe("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cw=xe("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dw=xe("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uw=xe("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xm=xe("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hw=xe("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zm=xe("Share2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eg=xe("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pw=xe("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fw=xe("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mw=xe("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),hd="-",gw=t=>{const e=vw(t),{conflictingClassGroups:r,conflictingClassGroupModifiers:o}=t;return{getClassGroupId:l=>{const a=l.split(hd);return a[0]===""&&a.length!==1&&a.shift(),tg(a,e)||xw(l)},getConflictingClassGroupIds:(l,a)=>{const c=r[l]||[];return a&&o[l]?[...c,...o[l]]:c}}},tg=(t,e)=>{var l;if(t.length===0)return e.classGroupId;const r=t[0],o=e.nextPart.get(r),s=o?tg(t.slice(1),o):void 0;if(s)return s;if(e.validators.length===0)return;const i=t.join(hd);return(l=e.validators.find(({validator:a})=>a(i)))==null?void 0:l.classGroupId},Yu=/^\[(.+)\]$/,xw=t=>{if(Yu.test(t)){const e=Yu.exec(t)[1],r=e==null?void 0:e.substring(0,e.indexOf(":"));if(r)return"arbitrary.."+r}},vw=t=>{const{theme:e,prefix:r}=t,o={nextPart:new Map,validators:[]};return jw(Object.entries(t.classGroups),r).forEach(([i,l])=>{Qa(l,o,i,e)}),o},Qa=(t,e,r,o)=>{t.forEach(s=>{if(typeof s=="string"){const i=s===""?e:Xu(e,s);i.classGroupId=r;return}if(typeof s=="function"){if(yw(s)){Qa(s(o),e,r,o);return}e.validators.push({validator:s,classGroupId:r});return}Object.entries(s).forEach(([i,l])=>{Qa(l,Xu(e,i),r,o)})})},Xu=(t,e)=>{let r=t;return e.split(hd).forEach(o=>{r.nextPart.has(o)||r.nextPart.set(o,{nextPart:new Map,validators:[]}),r=r.nextPart.get(o)}),r},yw=t=>t.isThemeGetter,jw=(t,e)=>e?t.map(([r,o])=>{const s=o.map(i=>typeof i=="string"?e+i:typeof i=="object"?Object.fromEntries(Object.entries(i).map(([l,a])=>[e+l,a])):i);return[r,s]}):t,ww=t=>{if(t<1)return{get:()=>{},set:()=>{}};let e=0,r=new Map,o=new Map;const s=(i,l)=>{r.set(i,l),e++,e>t&&(e=0,o=r,r=new Map)};return{get(i){let l=r.get(i);if(l!==void 0)return l;if((l=o.get(i))!==void 0)return s(i,l),l},set(i,l){r.has(i)?r.set(i,l):s(i,l)}}},ng="!",bw=t=>{const{separator:e,experimentalParseClassName:r}=t,o=e.length===1,s=e[0],i=e.length,l=a=>{const c=[];let d=0,u=0,p;for(let b=0;b<a.length;b++){let g=a[b];if(d===0){if(g===s&&(o||a.slice(b,b+i)===e)){c.push(a.slice(u,b)),u=b+i;continue}if(g==="/"){p=b;continue}}g==="["?d++:g==="]"&&d--}const m=c.length===0?a:a.substring(u),h=m.startsWith(ng),w=h?m.substring(1):m,y=p&&p>u?p-u:void 0;return{modifiers:c,hasImportantModifier:h,baseClassName:w,maybePostfixModifierPosition:y}};return r?a=>r({className:a,parseClassName:l}):l},kw=t=>{if(t.length<=1)return t;const e=[];let r=[];return t.forEach(o=>{o[0]==="["?(e.push(...r.sort(),o),r=[]):r.push(o)}),e.push(...r.sort()),e},Sw=t=>({cache:ww(t.cacheSize),parseClassName:bw(t),...gw(t)}),Cw=/\s+/,Tw=(t,e)=>{const{parseClassName:r,getClassGroupId:o,getConflictingClassGroupIds:s}=e,i=[],l=t.trim().split(Cw);let a="";for(let c=l.length-1;c>=0;c-=1){const d=l[c],{modifiers:u,hasImportantModifier:p,baseClassName:m,maybePostfixModifierPosition:h}=r(d);let w=!!h,y=o(w?m.substring(0,h):m);if(!y){if(!w){a=d+(a.length>0?" "+a:a);continue}if(y=o(m),!y){a=d+(a.length>0?" "+a:a);continue}w=!1}const b=kw(u).join(":"),g=p?b+ng:b,f=g+y;if(i.includes(f))continue;i.push(f);const x=s(y,w);for(let j=0;j<x.length;++j){const k=x[j];i.push(g+k)}a=d+(a.length>0?" "+a:a)}return a};function Nw(){let t=0,e,r,o="";for(;t<arguments.length;)(e=arguments[t++])&&(r=rg(e))&&(o&&(o+=" "),o+=r);return o}const rg=t=>{if(typeof t=="string")return t;let e,r="";for(let o=0;o<t.length;o++)t[o]&&(e=rg(t[o]))&&(r&&(r+=" "),r+=e);return r};function Pw(t,...e){let r,o,s,i=l;function l(c){const d=e.reduce((u,p)=>p(u),t());return r=Sw(d),o=r.cache.get,s=r.cache.set,i=a,a(c)}function a(c){const d=o(c);if(d)return d;const u=Tw(c,r);return s(c,u),u}return function(){return i(Nw.apply(null,arguments))}}const re=t=>{const e=r=>r[t]||[];return e.isThemeGetter=!0,e},og=/^\[(?:([a-z-]+):)?(.+)\]$/i,Ew=/^\d+\/\d+$/,Aw=new Set(["px","full","screen"]),Mw=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Rw=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,_w=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,Iw=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Ow=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Ft=t=>zr(t)||Aw.has(t)||Ew.test(t),an=t=>co(t,"length",Hw),zr=t=>!!t&&!Number.isNaN(Number(t)),Kl=t=>co(t,"number",zr),So=t=>!!t&&Number.isInteger(Number(t)),Lw=t=>t.endsWith("%")&&zr(t.slice(0,-1)),V=t=>og.test(t),cn=t=>Mw.test(t),Dw=new Set(["length","size","percentage"]),Fw=t=>co(t,Dw,sg),Bw=t=>co(t,"position",sg),zw=new Set(["image","url"]),Ww=t=>co(t,zw,Vw),$w=t=>co(t,"",Uw),Co=()=>!0,co=(t,e,r)=>{const o=og.exec(t);return o?o[1]?typeof e=="string"?o[1]===e:e.has(o[1]):r(o[2]):!1},Hw=t=>Rw.test(t)&&!_w.test(t),sg=()=>!1,Uw=t=>Iw.test(t),Vw=t=>Ow.test(t),qw=()=>{const t=re("colors"),e=re("spacing"),r=re("blur"),o=re("brightness"),s=re("borderColor"),i=re("borderRadius"),l=re("borderSpacing"),a=re("borderWidth"),c=re("contrast"),d=re("grayscale"),u=re("hueRotate"),p=re("invert"),m=re("gap"),h=re("gradientColorStops"),w=re("gradientColorStopPositions"),y=re("inset"),b=re("margin"),g=re("opacity"),f=re("padding"),x=re("saturate"),j=re("scale"),k=re("sepia"),S=re("skew"),C=re("space"),P=re("translate"),I=()=>["auto","contain","none"],R=()=>["auto","hidden","clip","visible","scroll"],z=()=>["auto",V,e],D=()=>[V,e],q=()=>["",Ft,an],_=()=>["auto",zr,V],G=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],W=()=>["solid","dashed","dotted","double","none"],H=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],N=()=>["start","end","center","between","around","evenly","stretch"],E=()=>["","0",V],O=()=>["auto","avoid","all","avoid-page","page","left","right","column"],U=()=>[zr,V];return{cacheSize:500,separator:":",theme:{colors:[Co],spacing:[Ft,an],blur:["none","",cn,V],brightness:U(),borderColor:[t],borderRadius:["none","","full",cn,V],borderSpacing:D(),borderWidth:q(),contrast:U(),grayscale:E(),hueRotate:U(),invert:E(),gap:D(),gradientColorStops:[t],gradientColorStopPositions:[Lw,an],inset:z(),margin:z(),opacity:U(),padding:D(),saturate:U(),scale:U(),sepia:E(),skew:U(),space:D(),translate:D()},classGroups:{aspect:[{aspect:["auto","square","video",V]}],container:["container"],columns:[{columns:[cn]}],"break-after":[{"break-after":O()}],"break-before":[{"break-before":O()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...G(),V]}],overflow:[{overflow:R()}],"overflow-x":[{"overflow-x":R()}],"overflow-y":[{"overflow-y":R()}],overscroll:[{overscroll:I()}],"overscroll-x":[{"overscroll-x":I()}],"overscroll-y":[{"overscroll-y":I()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[y]}],"inset-x":[{"inset-x":[y]}],"inset-y":[{"inset-y":[y]}],start:[{start:[y]}],end:[{end:[y]}],top:[{top:[y]}],right:[{right:[y]}],bottom:[{bottom:[y]}],left:[{left:[y]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",So,V]}],basis:[{basis:z()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",V]}],grow:[{grow:E()}],shrink:[{shrink:E()}],order:[{order:["first","last","none",So,V]}],"grid-cols":[{"grid-cols":[Co]}],"col-start-end":[{col:["auto",{span:["full",So,V]},V]}],"col-start":[{"col-start":_()}],"col-end":[{"col-end":_()}],"grid-rows":[{"grid-rows":[Co]}],"row-start-end":[{row:["auto",{span:[So,V]},V]}],"row-start":[{"row-start":_()}],"row-end":[{"row-end":_()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",V]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",V]}],gap:[{gap:[m]}],"gap-x":[{"gap-x":[m]}],"gap-y":[{"gap-y":[m]}],"justify-content":[{justify:["normal",...N()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...N(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...N(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[f]}],px:[{px:[f]}],py:[{py:[f]}],ps:[{ps:[f]}],pe:[{pe:[f]}],pt:[{pt:[f]}],pr:[{pr:[f]}],pb:[{pb:[f]}],pl:[{pl:[f]}],m:[{m:[b]}],mx:[{mx:[b]}],my:[{my:[b]}],ms:[{ms:[b]}],me:[{me:[b]}],mt:[{mt:[b]}],mr:[{mr:[b]}],mb:[{mb:[b]}],ml:[{ml:[b]}],"space-x":[{"space-x":[C]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[C]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",V,e]}],"min-w":[{"min-w":[V,e,"min","max","fit"]}],"max-w":[{"max-w":[V,e,"none","full","min","max","fit","prose",{screen:[cn]},cn]}],h:[{h:[V,e,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[V,e,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[V,e,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[V,e,"auto","min","max","fit"]}],"font-size":[{text:["base",cn,an]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",Kl]}],"font-family":[{font:[Co]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",V]}],"line-clamp":[{"line-clamp":["none",zr,Kl]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Ft,V]}],"list-image":[{"list-image":["none",V]}],"list-style-type":[{list:["none","disc","decimal",V]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[t]}],"placeholder-opacity":[{"placeholder-opacity":[g]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[t]}],"text-opacity":[{"text-opacity":[g]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...W(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",Ft,an]}],"underline-offset":[{"underline-offset":["auto",Ft,V]}],"text-decoration-color":[{decoration:[t]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:D()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",V]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",V]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[g]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...G(),Bw]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Fw]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Ww]}],"bg-color":[{bg:[t]}],"gradient-from-pos":[{from:[w]}],"gradient-via-pos":[{via:[w]}],"gradient-to-pos":[{to:[w]}],"gradient-from":[{from:[h]}],"gradient-via":[{via:[h]}],"gradient-to":[{to:[h]}],rounded:[{rounded:[i]}],"rounded-s":[{"rounded-s":[i]}],"rounded-e":[{"rounded-e":[i]}],"rounded-t":[{"rounded-t":[i]}],"rounded-r":[{"rounded-r":[i]}],"rounded-b":[{"rounded-b":[i]}],"rounded-l":[{"rounded-l":[i]}],"rounded-ss":[{"rounded-ss":[i]}],"rounded-se":[{"rounded-se":[i]}],"rounded-ee":[{"rounded-ee":[i]}],"rounded-es":[{"rounded-es":[i]}],"rounded-tl":[{"rounded-tl":[i]}],"rounded-tr":[{"rounded-tr":[i]}],"rounded-br":[{"rounded-br":[i]}],"rounded-bl":[{"rounded-bl":[i]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[g]}],"border-style":[{border:[...W(),"hidden"]}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[g]}],"divide-style":[{divide:W()}],"border-color":[{border:[s]}],"border-color-x":[{"border-x":[s]}],"border-color-y":[{"border-y":[s]}],"border-color-s":[{"border-s":[s]}],"border-color-e":[{"border-e":[s]}],"border-color-t":[{"border-t":[s]}],"border-color-r":[{"border-r":[s]}],"border-color-b":[{"border-b":[s]}],"border-color-l":[{"border-l":[s]}],"divide-color":[{divide:[s]}],"outline-style":[{outline:["",...W()]}],"outline-offset":[{"outline-offset":[Ft,V]}],"outline-w":[{outline:[Ft,an]}],"outline-color":[{outline:[t]}],"ring-w":[{ring:q()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[t]}],"ring-opacity":[{"ring-opacity":[g]}],"ring-offset-w":[{"ring-offset":[Ft,an]}],"ring-offset-color":[{"ring-offset":[t]}],shadow:[{shadow:["","inner","none",cn,$w]}],"shadow-color":[{shadow:[Co]}],opacity:[{opacity:[g]}],"mix-blend":[{"mix-blend":[...H(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":H()}],filter:[{filter:["","none"]}],blur:[{blur:[r]}],brightness:[{brightness:[o]}],contrast:[{contrast:[c]}],"drop-shadow":[{"drop-shadow":["","none",cn,V]}],grayscale:[{grayscale:[d]}],"hue-rotate":[{"hue-rotate":[u]}],invert:[{invert:[p]}],saturate:[{saturate:[x]}],sepia:[{sepia:[k]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[r]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[c]}],"backdrop-grayscale":[{"backdrop-grayscale":[d]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[u]}],"backdrop-invert":[{"backdrop-invert":[p]}],"backdrop-opacity":[{"backdrop-opacity":[g]}],"backdrop-saturate":[{"backdrop-saturate":[x]}],"backdrop-sepia":[{"backdrop-sepia":[k]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[l]}],"border-spacing-x":[{"border-spacing-x":[l]}],"border-spacing-y":[{"border-spacing-y":[l]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",V]}],duration:[{duration:U()}],ease:[{ease:["linear","in","out","in-out",V]}],delay:[{delay:U()}],animate:[{animate:["none","spin","ping","pulse","bounce",V]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[j]}],"scale-x":[{"scale-x":[j]}],"scale-y":[{"scale-y":[j]}],rotate:[{rotate:[So,V]}],"translate-x":[{"translate-x":[P]}],"translate-y":[{"translate-y":[P]}],"skew-x":[{"skew-x":[S]}],"skew-y":[{"skew-y":[S]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",V]}],accent:[{accent:["auto",t]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",V]}],"caret-color":[{caret:[t]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":D()}],"scroll-mx":[{"scroll-mx":D()}],"scroll-my":[{"scroll-my":D()}],"scroll-ms":[{"scroll-ms":D()}],"scroll-me":[{"scroll-me":D()}],"scroll-mt":[{"scroll-mt":D()}],"scroll-mr":[{"scroll-mr":D()}],"scroll-mb":[{"scroll-mb":D()}],"scroll-ml":[{"scroll-ml":D()}],"scroll-p":[{"scroll-p":D()}],"scroll-px":[{"scroll-px":D()}],"scroll-py":[{"scroll-py":D()}],"scroll-ps":[{"scroll-ps":D()}],"scroll-pe":[{"scroll-pe":D()}],"scroll-pt":[{"scroll-pt":D()}],"scroll-pr":[{"scroll-pr":D()}],"scroll-pb":[{"scroll-pb":D()}],"scroll-pl":[{"scroll-pl":D()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",V]}],fill:[{fill:[t,"none"]}],"stroke-w":[{stroke:[Ft,an,Kl]}],stroke:[{stroke:[t,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},Jw=Pw(qw);function Be(...t){return Jw(Gm(t))}const Kw=Yj,ig=v.forwardRef(({className:t,...e},r)=>n.jsx($m,{ref:r,className:Be("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",t),...e}));ig.displayName=$m.displayName;const Gw=ud("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),lg=v.forwardRef(({className:t,variant:e,...r},o)=>n.jsx(Hm,{ref:o,className:Be(Gw({variant:e}),t),...r}));lg.displayName=Hm.displayName;const Qw=v.forwardRef(({className:t,...e},r)=>n.jsx(qm,{ref:r,className:Be("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",t),...e}));Qw.displayName=qm.displayName;const ag=v.forwardRef(({className:t,...e},r)=>n.jsx(Jm,{ref:r,className:Be("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",t),"toast-close":"",...e,children:n.jsx(fw,{className:"h-4 w-4"})}));ag.displayName=Jm.displayName;const cg=v.forwardRef(({className:t,...e},r)=>n.jsx(Um,{ref:r,className:Be("text-sm font-semibold",t),...e}));cg.displayName=Um.displayName;const dg=v.forwardRef(({className:t,...e},r)=>n.jsx(Vm,{ref:r,className:Be("text-sm opacity-90",t),...e}));dg.displayName=Vm.displayName;function Yw(){const{toasts:t}=Zy();return n.jsxs(Kw,{children:[t.map(function({id:e,title:r,description:o,action:s,...i}){return n.jsxs(lg,{...i,children:[n.jsxs("div",{className:"grid gap-1",children:[r&&n.jsx(cg,{children:r}),o&&n.jsx(dg,{children:o})]}),s,n.jsx(ag,{})]},e)}),n.jsx(ig,{})]})}var Zu=["light","dark"],Xw="(prefers-color-scheme: dark)",Zw=v.createContext(void 0),eb={setTheme:t=>{},themes:[]},tb=()=>{var t;return(t=v.useContext(Zw))!=null?t:eb};v.memo(({forcedTheme:t,storageKey:e,attribute:r,enableSystem:o,enableColorScheme:s,defaultTheme:i,value:l,attrs:a,nonce:c})=>{let d=i==="system",u=r==="class"?`var d=document.documentElement,c=d.classList;${`c.remove(${a.map(w=>`'${w}'`).join(",")})`};`:`var d=document.documentElement,n='${r}',s='setAttribute';`,p=s?Zu.includes(i)&&i?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${i}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",m=(w,y=!1,b=!0)=>{let g=l?l[w]:w,f=y?w+"|| ''":`'${g}'`,x="";return s&&b&&!y&&Zu.includes(w)&&(x+=`d.style.colorScheme = '${w}';`),r==="class"?y||g?x+=`c.add(${f})`:x+="null":g&&(x+=`d[s](n,${f})`),x},h=t?`!function(){${u}${m(t)}}()`:o?`!function(){try{${u}var e=localStorage.getItem('${e}');if('system'===e||(!e&&${d})){var t='${Xw}',m=window.matchMedia(t);if(m.media!==t||m.matches){${m("dark")}}else{${m("light")}}}else if(e){${l?`var x=${JSON.stringify(l)};`:""}${m(l?"x[e]":"e",!0)}}${d?"":"else{"+m(i,!1,!1)+"}"}${p}}catch(e){}}()`:`!function(){try{${u}var e=localStorage.getItem('${e}');if(e){${l?`var x=${JSON.stringify(l)};`:""}${m(l?"x[e]":"e",!0)}}else{${m(i,!1,!1)};}${p}}catch(t){}}();`;return v.createElement("script",{nonce:c,dangerouslySetInnerHTML:{__html:h}})});var nb=t=>{switch(t){case"success":return sb;case"info":return lb;case"warning":return ib;case"error":return ab;default:return null}},rb=Array(12).fill(0),ob=({visible:t,className:e})=>M.createElement("div",{className:["sonner-loading-wrapper",e].filter(Boolean).join(" "),"data-visible":t},M.createElement("div",{className:"sonner-spinner"},rb.map((r,o)=>M.createElement("div",{className:"sonner-loading-bar",key:`spinner-bar-${o}`})))),sb=M.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},M.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})),ib=M.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",height:"20",width:"20"},M.createElement("path",{fillRule:"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"})),lb=M.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},M.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",clipRule:"evenodd"})),ab=M.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},M.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})),cb=M.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},M.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),M.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"})),db=()=>{let[t,e]=M.useState(document.hidden);return M.useEffect(()=>{let r=()=>{e(document.hidden)};return document.addEventListener("visibilitychange",r),()=>window.removeEventListener("visibilitychange",r)},[]),t},Ya=1,ub=class{constructor(){this.subscribe=t=>(this.subscribers.push(t),()=>{let e=this.subscribers.indexOf(t);this.subscribers.splice(e,1)}),this.publish=t=>{this.subscribers.forEach(e=>e(t))},this.addToast=t=>{this.publish(t),this.toasts=[...this.toasts,t]},this.create=t=>{var e;let{message:r,...o}=t,s=typeof(t==null?void 0:t.id)=="number"||((e=t.id)==null?void 0:e.length)>0?t.id:Ya++,i=this.toasts.find(a=>a.id===s),l=t.dismissible===void 0?!0:t.dismissible;return this.dismissedToasts.has(s)&&this.dismissedToasts.delete(s),i?this.toasts=this.toasts.map(a=>a.id===s?(this.publish({...a,...t,id:s,title:r}),{...a,...t,id:s,dismissible:l,title:r}):a):this.addToast({title:r,...o,dismissible:l,id:s}),s},this.dismiss=t=>(this.dismissedToasts.add(t),t||this.toasts.forEach(e=>{this.subscribers.forEach(r=>r({id:e.id,dismiss:!0}))}),this.subscribers.forEach(e=>e({id:t,dismiss:!0})),t),this.message=(t,e)=>this.create({...e,message:t}),this.error=(t,e)=>this.create({...e,message:t,type:"error"}),this.success=(t,e)=>this.create({...e,type:"success",message:t}),this.info=(t,e)=>this.create({...e,type:"info",message:t}),this.warning=(t,e)=>this.create({...e,type:"warning",message:t}),this.loading=(t,e)=>this.create({...e,type:"loading",message:t}),this.promise=(t,e)=>{if(!e)return;let r;e.loading!==void 0&&(r=this.create({...e,promise:t,type:"loading",message:e.loading,description:typeof e.description!="function"?e.description:void 0}));let o=t instanceof Promise?t:t(),s=r!==void 0,i,l=o.then(async c=>{if(i=["resolve",c],M.isValidElement(c))s=!1,this.create({id:r,type:"default",message:c});else if(pb(c)&&!c.ok){s=!1;let d=typeof e.error=="function"?await e.error(`HTTP error! status: ${c.status}`):e.error,u=typeof e.description=="function"?await e.description(`HTTP error! status: ${c.status}`):e.description;this.create({id:r,type:"error",message:d,description:u})}else if(e.success!==void 0){s=!1;let d=typeof e.success=="function"?await e.success(c):e.success,u=typeof e.description=="function"?await e.description(c):e.description;this.create({id:r,type:"success",message:d,description:u})}}).catch(async c=>{if(i=["reject",c],e.error!==void 0){s=!1;let d=typeof e.error=="function"?await e.error(c):e.error,u=typeof e.description=="function"?await e.description(c):e.description;this.create({id:r,type:"error",message:d,description:u})}}).finally(()=>{var c;s&&(this.dismiss(r),r=void 0),(c=e.finally)==null||c.call(e)}),a=()=>new Promise((c,d)=>l.then(()=>i[0]==="reject"?d(i[1]):c(i[1])).catch(d));return typeof r!="string"&&typeof r!="number"?{unwrap:a}:Object.assign(r,{unwrap:a})},this.custom=(t,e)=>{let r=(e==null?void 0:e.id)||Ya++;return this.create({jsx:t(r),id:r,...e}),r},this.getActiveToasts=()=>this.toasts.filter(t=>!this.dismissedToasts.has(t.id)),this.subscribers=[],this.toasts=[],this.dismissedToasts=new Set}},ze=new ub,hb=(t,e)=>{let r=(e==null?void 0:e.id)||Ya++;return ze.addToast({title:t,...e,id:r}),r},pb=t=>t&&typeof t=="object"&&"ok"in t&&typeof t.ok=="boolean"&&"status"in t&&typeof t.status=="number",fb=hb,mb=()=>ze.toasts,gb=()=>ze.getActiveToasts();Object.assign(fb,{success:ze.success,info:ze.info,warning:ze.warning,error:ze.error,custom:ze.custom,message:ze.message,promise:ze.promise,dismiss:ze.dismiss,loading:ze.loading},{getHistory:mb,getToasts:gb});function xb(t,{insertAt:e}={}){if(typeof document>"u")return;let r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",e==="top"&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=t:o.appendChild(document.createTextNode(t))}xb(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);function Us(t){return t.label!==void 0}var vb=3,yb="32px",jb="16px",eh=4e3,wb=356,bb=14,kb=20,Sb=200;function mt(...t){return t.filter(Boolean).join(" ")}function Cb(t){let[e,r]=t.split("-"),o=[];return e&&o.push(e),r&&o.push(r),o}var Tb=t=>{var e,r,o,s,i,l,a,c,d,u,p;let{invert:m,toast:h,unstyled:w,interacting:y,setHeights:b,visibleToasts:g,heights:f,index:x,toasts:j,expanded:k,removeToast:S,defaultRichColors:C,closeButton:P,style:I,cancelButtonStyle:R,actionButtonStyle:z,className:D="",descriptionClassName:q="",duration:_,position:G,gap:W,loadingIcon:H,expandByDefault:N,classNames:E,icons:O,closeButtonAriaLabel:U="Close toast",pauseWhenPageIsHidden:F}=t,[J,Q]=M.useState(null),[fe,Pe]=M.useState(null),[Z,mr]=M.useState(!1),[en,Hn]=M.useState(!1),[tn,gr]=M.useState(!1),[nn,ws]=M.useState(!1),[fl,bs]=M.useState(!1),[ml,fo]=M.useState(0),[xr,Td]=M.useState(0),mo=M.useRef(h.duration||_||eh),Nd=M.useRef(null),Un=M.useRef(null),px=x===0,fx=x+1<=g,nt=h.type,vr=h.dismissible!==!1,mx=h.className||"",gx=h.descriptionClassName||"",ks=M.useMemo(()=>f.findIndex($=>$.toastId===h.id)||0,[f,h.id]),xx=M.useMemo(()=>{var $;return($=h.closeButton)!=null?$:P},[h.closeButton,P]),Pd=M.useMemo(()=>h.duration||_||eh,[h.duration,_]),gl=M.useRef(0),yr=M.useRef(0),Ed=M.useRef(0),jr=M.useRef(null),[vx,yx]=G.split("-"),Ad=M.useMemo(()=>f.reduce(($,te,ie)=>ie>=ks?$:$+te.height,0),[f,ks]),Md=db(),jx=h.invert||m,xl=nt==="loading";yr.current=M.useMemo(()=>ks*W+Ad,[ks,Ad]),M.useEffect(()=>{mo.current=Pd},[Pd]),M.useEffect(()=>{mr(!0)},[]),M.useEffect(()=>{let $=Un.current;if($){let te=$.getBoundingClientRect().height;return Td(te),b(ie=>[{toastId:h.id,height:te,position:h.position},...ie]),()=>b(ie=>ie.filter(ut=>ut.toastId!==h.id))}},[b,h.id]),M.useLayoutEffect(()=>{if(!Z)return;let $=Un.current,te=$.style.height;$.style.height="auto";let ie=$.getBoundingClientRect().height;$.style.height=te,Td(ie),b(ut=>ut.find(ht=>ht.toastId===h.id)?ut.map(ht=>ht.toastId===h.id?{...ht,height:ie}:ht):[{toastId:h.id,height:ie,position:h.position},...ut])},[Z,h.title,h.description,b,h.id]);let rn=M.useCallback(()=>{Hn(!0),fo(yr.current),b($=>$.filter(te=>te.toastId!==h.id)),setTimeout(()=>{S(h)},Sb)},[h,S,b,yr]);M.useEffect(()=>{if(h.promise&&nt==="loading"||h.duration===1/0||h.type==="loading")return;let $;return k||y||F&&Md?(()=>{if(Ed.current<gl.current){let te=new Date().getTime()-gl.current;mo.current=mo.current-te}Ed.current=new Date().getTime()})():mo.current!==1/0&&(gl.current=new Date().getTime(),$=setTimeout(()=>{var te;(te=h.onAutoClose)==null||te.call(h,h),rn()},mo.current)),()=>clearTimeout($)},[k,y,h,nt,F,Md,rn]),M.useEffect(()=>{h.delete&&rn()},[rn,h.delete]);function wx(){var $,te,ie;return O!=null&&O.loading?M.createElement("div",{className:mt(E==null?void 0:E.loader,($=h==null?void 0:h.classNames)==null?void 0:$.loader,"sonner-loader"),"data-visible":nt==="loading"},O.loading):H?M.createElement("div",{className:mt(E==null?void 0:E.loader,(te=h==null?void 0:h.classNames)==null?void 0:te.loader,"sonner-loader"),"data-visible":nt==="loading"},H):M.createElement(ob,{className:mt(E==null?void 0:E.loader,(ie=h==null?void 0:h.classNames)==null?void 0:ie.loader),visible:nt==="loading"})}return M.createElement("li",{tabIndex:0,ref:Un,className:mt(D,mx,E==null?void 0:E.toast,(e=h==null?void 0:h.classNames)==null?void 0:e.toast,E==null?void 0:E.default,E==null?void 0:E[nt],(r=h==null?void 0:h.classNames)==null?void 0:r[nt]),"data-sonner-toast":"","data-rich-colors":(o=h.richColors)!=null?o:C,"data-styled":!(h.jsx||h.unstyled||w),"data-mounted":Z,"data-promise":!!h.promise,"data-swiped":fl,"data-removed":en,"data-visible":fx,"data-y-position":vx,"data-x-position":yx,"data-index":x,"data-front":px,"data-swiping":tn,"data-dismissible":vr,"data-type":nt,"data-invert":jx,"data-swipe-out":nn,"data-swipe-direction":fe,"data-expanded":!!(k||N&&Z),style:{"--index":x,"--toasts-before":x,"--z-index":j.length-x,"--offset":`${en?ml:yr.current}px`,"--initial-height":N?"auto":`${xr}px`,...I,...h.style},onDragEnd:()=>{gr(!1),Q(null),jr.current=null},onPointerDown:$=>{xl||!vr||(Nd.current=new Date,fo(yr.current),$.target.setPointerCapture($.pointerId),$.target.tagName!=="BUTTON"&&(gr(!0),jr.current={x:$.clientX,y:$.clientY}))},onPointerUp:()=>{var $,te,ie,ut;if(nn||!vr)return;jr.current=null;let ht=Number((($=Un.current)==null?void 0:$.style.getPropertyValue("--swipe-amount-x").replace("px",""))||0),on=Number(((te=Un.current)==null?void 0:te.style.getPropertyValue("--swipe-amount-y").replace("px",""))||0),Vn=new Date().getTime()-((ie=Nd.current)==null?void 0:ie.getTime()),pt=J==="x"?ht:on,sn=Math.abs(pt)/Vn;if(Math.abs(pt)>=kb||sn>.11){fo(yr.current),(ut=h.onDismiss)==null||ut.call(h,h),Pe(J==="x"?ht>0?"right":"left":on>0?"down":"up"),rn(),ws(!0),bs(!1);return}gr(!1),Q(null)},onPointerMove:$=>{var te,ie,ut,ht;if(!jr.current||!vr||((te=window.getSelection())==null?void 0:te.toString().length)>0)return;let on=$.clientY-jr.current.y,Vn=$.clientX-jr.current.x,pt=(ie=t.swipeDirections)!=null?ie:Cb(G);!J&&(Math.abs(Vn)>1||Math.abs(on)>1)&&Q(Math.abs(Vn)>Math.abs(on)?"x":"y");let sn={x:0,y:0};J==="y"?(pt.includes("top")||pt.includes("bottom"))&&(pt.includes("top")&&on<0||pt.includes("bottom")&&on>0)&&(sn.y=on):J==="x"&&(pt.includes("left")||pt.includes("right"))&&(pt.includes("left")&&Vn<0||pt.includes("right")&&Vn>0)&&(sn.x=Vn),(Math.abs(sn.x)>0||Math.abs(sn.y)>0)&&bs(!0),(ut=Un.current)==null||ut.style.setProperty("--swipe-amount-x",`${sn.x}px`),(ht=Un.current)==null||ht.style.setProperty("--swipe-amount-y",`${sn.y}px`)}},xx&&!h.jsx?M.createElement("button",{"aria-label":U,"data-disabled":xl,"data-close-button":!0,onClick:xl||!vr?()=>{}:()=>{var $;rn(),($=h.onDismiss)==null||$.call(h,h)},className:mt(E==null?void 0:E.closeButton,(s=h==null?void 0:h.classNames)==null?void 0:s.closeButton)},(i=O==null?void 0:O.close)!=null?i:cb):null,h.jsx||v.isValidElement(h.title)?h.jsx?h.jsx:typeof h.title=="function"?h.title():h.title:M.createElement(M.Fragment,null,nt||h.icon||h.promise?M.createElement("div",{"data-icon":"",className:mt(E==null?void 0:E.icon,(l=h==null?void 0:h.classNames)==null?void 0:l.icon)},h.promise||h.type==="loading"&&!h.icon?h.icon||wx():null,h.type!=="loading"?h.icon||(O==null?void 0:O[nt])||nb(nt):null):null,M.createElement("div",{"data-content":"",className:mt(E==null?void 0:E.content,(a=h==null?void 0:h.classNames)==null?void 0:a.content)},M.createElement("div",{"data-title":"",className:mt(E==null?void 0:E.title,(c=h==null?void 0:h.classNames)==null?void 0:c.title)},typeof h.title=="function"?h.title():h.title),h.description?M.createElement("div",{"data-description":"",className:mt(q,gx,E==null?void 0:E.description,(d=h==null?void 0:h.classNames)==null?void 0:d.description)},typeof h.description=="function"?h.description():h.description):null),v.isValidElement(h.cancel)?h.cancel:h.cancel&&Us(h.cancel)?M.createElement("button",{"data-button":!0,"data-cancel":!0,style:h.cancelButtonStyle||R,onClick:$=>{var te,ie;Us(h.cancel)&&vr&&((ie=(te=h.cancel).onClick)==null||ie.call(te,$),rn())},className:mt(E==null?void 0:E.cancelButton,(u=h==null?void 0:h.classNames)==null?void 0:u.cancelButton)},h.cancel.label):null,v.isValidElement(h.action)?h.action:h.action&&Us(h.action)?M.createElement("button",{"data-button":!0,"data-action":!0,style:h.actionButtonStyle||z,onClick:$=>{var te,ie;Us(h.action)&&((ie=(te=h.action).onClick)==null||ie.call(te,$),!$.defaultPrevented&&rn())},className:mt(E==null?void 0:E.actionButton,(p=h==null?void 0:h.classNames)==null?void 0:p.actionButton)},h.action.label):null))};function th(){if(typeof window>"u"||typeof document>"u")return"ltr";let t=document.documentElement.getAttribute("dir");return t==="auto"||!t?window.getComputedStyle(document.documentElement).direction:t}function Nb(t,e){let r={};return[t,e].forEach((o,s)=>{let i=s===1,l=i?"--mobile-offset":"--offset",a=i?jb:yb;function c(d){["top","right","bottom","left"].forEach(u=>{r[`${l}-${u}`]=typeof d=="number"?`${d}px`:d})}typeof o=="number"||typeof o=="string"?c(o):typeof o=="object"?["top","right","bottom","left"].forEach(d=>{o[d]===void 0?r[`${l}-${d}`]=a:r[`${l}-${d}`]=typeof o[d]=="number"?`${o[d]}px`:o[d]}):c(a)}),r}var Pb=v.forwardRef(function(t,e){let{invert:r,position:o="bottom-right",hotkey:s=["altKey","KeyT"],expand:i,closeButton:l,className:a,offset:c,mobileOffset:d,theme:u="light",richColors:p,duration:m,style:h,visibleToasts:w=vb,toastOptions:y,dir:b=th(),gap:g=bb,loadingIcon:f,icons:x,containerAriaLabel:j="Notifications",pauseWhenPageIsHidden:k}=t,[S,C]=M.useState([]),P=M.useMemo(()=>Array.from(new Set([o].concat(S.filter(F=>F.position).map(F=>F.position)))),[S,o]),[I,R]=M.useState([]),[z,D]=M.useState(!1),[q,_]=M.useState(!1),[G,W]=M.useState(u!=="system"?u:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),H=M.useRef(null),N=s.join("+").replace(/Key/g,"").replace(/Digit/g,""),E=M.useRef(null),O=M.useRef(!1),U=M.useCallback(F=>{C(J=>{var Q;return(Q=J.find(fe=>fe.id===F.id))!=null&&Q.delete||ze.dismiss(F.id),J.filter(({id:fe})=>fe!==F.id)})},[]);return M.useEffect(()=>ze.subscribe(F=>{if(F.dismiss){C(J=>J.map(Q=>Q.id===F.id?{...Q,delete:!0}:Q));return}setTimeout(()=>{bm.flushSync(()=>{C(J=>{let Q=J.findIndex(fe=>fe.id===F.id);return Q!==-1?[...J.slice(0,Q),{...J[Q],...F},...J.slice(Q+1)]:[F,...J]})})})}),[]),M.useEffect(()=>{if(u!=="system"){W(u);return}if(u==="system"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?W("dark"):W("light")),typeof window>"u")return;let F=window.matchMedia("(prefers-color-scheme: dark)");try{F.addEventListener("change",({matches:J})=>{W(J?"dark":"light")})}catch{F.addListener(({matches:Q})=>{try{W(Q?"dark":"light")}catch(fe){console.error(fe)}})}},[u]),M.useEffect(()=>{S.length<=1&&D(!1)},[S]),M.useEffect(()=>{let F=J=>{var Q,fe;s.every(Pe=>J[Pe]||J.code===Pe)&&(D(!0),(Q=H.current)==null||Q.focus()),J.code==="Escape"&&(document.activeElement===H.current||(fe=H.current)!=null&&fe.contains(document.activeElement))&&D(!1)};return document.addEventListener("keydown",F),()=>document.removeEventListener("keydown",F)},[s]),M.useEffect(()=>{if(H.current)return()=>{E.current&&(E.current.focus({preventScroll:!0}),E.current=null,O.current=!1)}},[H.current]),M.createElement("section",{ref:e,"aria-label":`${j} ${N}`,tabIndex:-1,"aria-live":"polite","aria-relevant":"additions text","aria-atomic":"false",suppressHydrationWarning:!0},P.map((F,J)=>{var Q;let[fe,Pe]=F.split("-");return S.length?M.createElement("ol",{key:F,dir:b==="auto"?th():b,tabIndex:-1,ref:H,className:a,"data-sonner-toaster":!0,"data-theme":G,"data-y-position":fe,"data-lifted":z&&S.length>1&&!i,"data-x-position":Pe,style:{"--front-toast-height":`${((Q=I[0])==null?void 0:Q.height)||0}px`,"--width":`${wb}px`,"--gap":`${g}px`,...h,...Nb(c,d)},onBlur:Z=>{O.current&&!Z.currentTarget.contains(Z.relatedTarget)&&(O.current=!1,E.current&&(E.current.focus({preventScroll:!0}),E.current=null))},onFocus:Z=>{Z.target instanceof HTMLElement&&Z.target.dataset.dismissible==="false"||O.current||(O.current=!0,E.current=Z.relatedTarget)},onMouseEnter:()=>D(!0),onMouseMove:()=>D(!0),onMouseLeave:()=>{q||D(!1)},onDragEnd:()=>D(!1),onPointerDown:Z=>{Z.target instanceof HTMLElement&&Z.target.dataset.dismissible==="false"||_(!0)},onPointerUp:()=>_(!1)},S.filter(Z=>!Z.position&&J===0||Z.position===F).map((Z,mr)=>{var en,Hn;return M.createElement(Tb,{key:Z.id,icons:x,index:mr,toast:Z,defaultRichColors:p,duration:(en=y==null?void 0:y.duration)!=null?en:m,className:y==null?void 0:y.className,descriptionClassName:y==null?void 0:y.descriptionClassName,invert:r,visibleToasts:w,closeButton:(Hn=y==null?void 0:y.closeButton)!=null?Hn:l,interacting:q,position:F,style:y==null?void 0:y.style,unstyled:y==null?void 0:y.unstyled,classNames:y==null?void 0:y.classNames,cancelButtonStyle:y==null?void 0:y.cancelButtonStyle,actionButtonStyle:y==null?void 0:y.actionButtonStyle,removeToast:U,toasts:S.filter(tn=>tn.position==Z.position),heights:I.filter(tn=>tn.position==Z.position),setHeights:R,expandByDefault:i,gap:g,loadingIcon:f,expanded:z,pauseWhenPageIsHidden:k,swipeDirections:t.swipeDirections})})):null}))});const Eb=({...t})=>{const{theme:e="system"}=tb();return n.jsx(Pb,{theme:e,className:"toaster group",toastOptions:{classNames:{toast:"group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",description:"group-[.toast]:text-muted-foreground",actionButton:"group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",cancelButton:"group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"}},...t})},Ab=["top","right","bottom","left"],Dn=Math.min,Ge=Math.max,_i=Math.round,Vs=Math.floor,Lt=t=>({x:t,y:t}),Mb={left:"right",right:"left",bottom:"top",top:"bottom"};function Xa(t,e,r){return Ge(t,Dn(e,r))}function Qt(t,e){return typeof t=="function"?t(e):t}function Yt(t){return t.split("-")[0]}function uo(t){return t.split("-")[1]}function pd(t){return t==="x"?"y":"x"}function fd(t){return t==="y"?"height":"width"}function _t(t){const e=t[0];return e==="t"||e==="b"?"y":"x"}function md(t){return pd(_t(t))}function Rb(t,e,r){r===void 0&&(r=!1);const o=uo(t),s=md(t),i=fd(s);let l=s==="x"?o===(r?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[i]>e.floating[i]&&(l=Ii(l)),[l,Ii(l)]}function _b(t){const e=Ii(t);return[Za(t),e,Za(e)]}function Za(t){return t.includes("start")?t.replace("start","end"):t.replace("end","start")}const nh=["left","right"],rh=["right","left"],Ib=["top","bottom"],Ob=["bottom","top"];function Lb(t,e,r){switch(t){case"top":case"bottom":return r?e?rh:nh:e?nh:rh;case"left":case"right":return e?Ib:Ob;default:return[]}}function Db(t,e,r,o){const s=uo(t);let i=Lb(Yt(t),r==="start",o);return s&&(i=i.map(l=>l+"-"+s),e&&(i=i.concat(i.map(Za)))),i}function Ii(t){const e=Yt(t);return Mb[e]+t.slice(e.length)}function Fb(t){return{top:0,right:0,bottom:0,left:0,...t}}function ug(t){return typeof t!="number"?Fb(t):{top:t,right:t,bottom:t,left:t}}function Oi(t){const{x:e,y:r,width:o,height:s}=t;return{width:o,height:s,top:r,left:e,right:e+o,bottom:r+s,x:e,y:r}}function oh(t,e,r){let{reference:o,floating:s}=t;const i=_t(e),l=md(e),a=fd(l),c=Yt(e),d=i==="y",u=o.x+o.width/2-s.width/2,p=o.y+o.height/2-s.height/2,m=o[a]/2-s[a]/2;let h;switch(c){case"top":h={x:u,y:o.y-s.height};break;case"bottom":h={x:u,y:o.y+o.height};break;case"right":h={x:o.x+o.width,y:p};break;case"left":h={x:o.x-s.width,y:p};break;default:h={x:o.x,y:o.y}}switch(uo(e)){case"start":h[l]-=m*(r&&d?-1:1);break;case"end":h[l]+=m*(r&&d?-1:1);break}return h}async function Bb(t,e){var r;e===void 0&&(e={});const{x:o,y:s,platform:i,rects:l,elements:a,strategy:c}=t,{boundary:d="clippingAncestors",rootBoundary:u="viewport",elementContext:p="floating",altBoundary:m=!1,padding:h=0}=Qt(e,t),w=ug(h),b=a[m?p==="floating"?"reference":"floating":p],g=Oi(await i.getClippingRect({element:(r=await(i.isElement==null?void 0:i.isElement(b)))==null||r?b:b.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(a.floating)),boundary:d,rootBoundary:u,strategy:c})),f=p==="floating"?{x:o,y:s,width:l.floating.width,height:l.floating.height}:l.reference,x=await(i.getOffsetParent==null?void 0:i.getOffsetParent(a.floating)),j=await(i.isElement==null?void 0:i.isElement(x))?await(i.getScale==null?void 0:i.getScale(x))||{x:1,y:1}:{x:1,y:1},k=Oi(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:f,offsetParent:x,strategy:c}):f);return{top:(g.top-k.top+w.top)/j.y,bottom:(k.bottom-g.bottom+w.bottom)/j.y,left:(g.left-k.left+w.left)/j.x,right:(k.right-g.right+w.right)/j.x}}const zb=50,Wb=async(t,e,r)=>{const{placement:o="bottom",strategy:s="absolute",middleware:i=[],platform:l}=r,a=l.detectOverflow?l:{...l,detectOverflow:Bb},c=await(l.isRTL==null?void 0:l.isRTL(e));let d=await l.getElementRects({reference:t,floating:e,strategy:s}),{x:u,y:p}=oh(d,o,c),m=o,h=0;const w={};for(let y=0;y<i.length;y++){const b=i[y];if(!b)continue;const{name:g,fn:f}=b,{x,y:j,data:k,reset:S}=await f({x:u,y:p,initialPlacement:o,placement:m,strategy:s,middlewareData:w,rects:d,platform:a,elements:{reference:t,floating:e}});u=x??u,p=j??p,w[g]={...w[g],...k},S&&h<zb&&(h++,typeof S=="object"&&(S.placement&&(m=S.placement),S.rects&&(d=S.rects===!0?await l.getElementRects({reference:t,floating:e,strategy:s}):S.rects),{x:u,y:p}=oh(d,m,c)),y=-1)}return{x:u,y:p,placement:m,strategy:s,middlewareData:w}},$b=t=>({name:"arrow",options:t,async fn(e){const{x:r,y:o,placement:s,rects:i,platform:l,elements:a,middlewareData:c}=e,{element:d,padding:u=0}=Qt(t,e)||{};if(d==null)return{};const p=ug(u),m={x:r,y:o},h=md(s),w=fd(h),y=await l.getDimensions(d),b=h==="y",g=b?"top":"left",f=b?"bottom":"right",x=b?"clientHeight":"clientWidth",j=i.reference[w]+i.reference[h]-m[h]-i.floating[w],k=m[h]-i.reference[h],S=await(l.getOffsetParent==null?void 0:l.getOffsetParent(d));let C=S?S[x]:0;(!C||!await(l.isElement==null?void 0:l.isElement(S)))&&(C=a.floating[x]||i.floating[w]);const P=j/2-k/2,I=C/2-y[w]/2-1,R=Dn(p[g],I),z=Dn(p[f],I),D=R,q=C-y[w]-z,_=C/2-y[w]/2+P,G=Xa(D,_,q),W=!c.arrow&&uo(s)!=null&&_!==G&&i.reference[w]/2-(_<D?R:z)-y[w]/2<0,H=W?_<D?_-D:_-q:0;return{[h]:m[h]+H,data:{[h]:G,centerOffset:_-G-H,...W&&{alignmentOffset:H}},reset:W}}}),Hb=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var r,o;const{placement:s,middlewareData:i,rects:l,initialPlacement:a,platform:c,elements:d}=e,{mainAxis:u=!0,crossAxis:p=!0,fallbackPlacements:m,fallbackStrategy:h="bestFit",fallbackAxisSideDirection:w="none",flipAlignment:y=!0,...b}=Qt(t,e);if((r=i.arrow)!=null&&r.alignmentOffset)return{};const g=Yt(s),f=_t(a),x=Yt(a)===a,j=await(c.isRTL==null?void 0:c.isRTL(d.floating)),k=m||(x||!y?[Ii(a)]:_b(a)),S=w!=="none";!m&&S&&k.push(...Db(a,y,w,j));const C=[a,...k],P=await c.detectOverflow(e,b),I=[];let R=((o=i.flip)==null?void 0:o.overflows)||[];if(u&&I.push(P[g]),p){const _=Rb(s,l,j);I.push(P[_[0]],P[_[1]])}if(R=[...R,{placement:s,overflows:I}],!I.every(_=>_<=0)){var z,D;const _=(((z=i.flip)==null?void 0:z.index)||0)+1,G=C[_];if(G&&(!(p==="alignment"?f!==_t(G):!1)||R.every(N=>_t(N.placement)===f?N.overflows[0]>0:!0)))return{data:{index:_,overflows:R},reset:{placement:G}};let W=(D=R.filter(H=>H.overflows[0]<=0).sort((H,N)=>H.overflows[1]-N.overflows[1])[0])==null?void 0:D.placement;if(!W)switch(h){case"bestFit":{var q;const H=(q=R.filter(N=>{if(S){const E=_t(N.placement);return E===f||E==="y"}return!0}).map(N=>[N.placement,N.overflows.filter(E=>E>0).reduce((E,O)=>E+O,0)]).sort((N,E)=>N[1]-E[1])[0])==null?void 0:q[0];H&&(W=H);break}case"initialPlacement":W=a;break}if(s!==W)return{reset:{placement:W}}}return{}}}};function sh(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function ih(t){return Ab.some(e=>t[e]>=0)}const Ub=function(t){return t===void 0&&(t={}),{name:"hide",options:t,async fn(e){const{rects:r,platform:o}=e,{strategy:s="referenceHidden",...i}=Qt(t,e);switch(s){case"referenceHidden":{const l=await o.detectOverflow(e,{...i,elementContext:"reference"}),a=sh(l,r.reference);return{data:{referenceHiddenOffsets:a,referenceHidden:ih(a)}}}case"escaped":{const l=await o.detectOverflow(e,{...i,altBoundary:!0}),a=sh(l,r.floating);return{data:{escapedOffsets:a,escaped:ih(a)}}}default:return{}}}}},hg=new Set(["left","top"]);async function Vb(t,e){const{placement:r,platform:o,elements:s}=t,i=await(o.isRTL==null?void 0:o.isRTL(s.floating)),l=Yt(r),a=uo(r),c=_t(r)==="y",d=hg.has(l)?-1:1,u=i&&c?-1:1,p=Qt(e,t);let{mainAxis:m,crossAxis:h,alignmentAxis:w}=typeof p=="number"?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:p.mainAxis||0,crossAxis:p.crossAxis||0,alignmentAxis:p.alignmentAxis};return a&&typeof w=="number"&&(h=a==="end"?w*-1:w),c?{x:h*u,y:m*d}:{x:m*d,y:h*u}}const qb=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var r,o;const{x:s,y:i,placement:l,middlewareData:a}=e,c=await Vb(e,t);return l===((r=a.offset)==null?void 0:r.placement)&&(o=a.arrow)!=null&&o.alignmentOffset?{}:{x:s+c.x,y:i+c.y,data:{...c,placement:l}}}}},Jb=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:r,y:o,placement:s,platform:i}=e,{mainAxis:l=!0,crossAxis:a=!1,limiter:c={fn:g=>{let{x:f,y:x}=g;return{x:f,y:x}}},...d}=Qt(t,e),u={x:r,y:o},p=await i.detectOverflow(e,d),m=_t(Yt(s)),h=pd(m);let w=u[h],y=u[m];if(l){const g=h==="y"?"top":"left",f=h==="y"?"bottom":"right",x=w+p[g],j=w-p[f];w=Xa(x,w,j)}if(a){const g=m==="y"?"top":"left",f=m==="y"?"bottom":"right",x=y+p[g],j=y-p[f];y=Xa(x,y,j)}const b=c.fn({...e,[h]:w,[m]:y});return{...b,data:{x:b.x-r,y:b.y-o,enabled:{[h]:l,[m]:a}}}}}},Kb=function(t){return t===void 0&&(t={}),{options:t,fn(e){const{x:r,y:o,placement:s,rects:i,middlewareData:l}=e,{offset:a=0,mainAxis:c=!0,crossAxis:d=!0}=Qt(t,e),u={x:r,y:o},p=_t(s),m=pd(p);let h=u[m],w=u[p];const y=Qt(a,e),b=typeof y=="number"?{mainAxis:y,crossAxis:0}:{mainAxis:0,crossAxis:0,...y};if(c){const x=m==="y"?"height":"width",j=i.reference[m]-i.floating[x]+b.mainAxis,k=i.reference[m]+i.reference[x]-b.mainAxis;h<j?h=j:h>k&&(h=k)}if(d){var g,f;const x=m==="y"?"width":"height",j=hg.has(Yt(s)),k=i.reference[p]-i.floating[x]+(j&&((g=l.offset)==null?void 0:g[p])||0)+(j?0:b.crossAxis),S=i.reference[p]+i.reference[x]+(j?0:((f=l.offset)==null?void 0:f[p])||0)-(j?b.crossAxis:0);w<k?w=k:w>S&&(w=S)}return{[m]:h,[p]:w}}}},Gb=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var r,o;const{placement:s,rects:i,platform:l,elements:a}=e,{apply:c=()=>{},...d}=Qt(t,e),u=await l.detectOverflow(e,d),p=Yt(s),m=uo(s),h=_t(s)==="y",{width:w,height:y}=i.floating;let b,g;p==="top"||p==="bottom"?(b=p,g=m===(await(l.isRTL==null?void 0:l.isRTL(a.floating))?"start":"end")?"left":"right"):(g=p,b=m==="end"?"top":"bottom");const f=y-u.top-u.bottom,x=w-u.left-u.right,j=Dn(y-u[b],f),k=Dn(w-u[g],x),S=!e.middlewareData.shift;let C=j,P=k;if((r=e.middlewareData.shift)!=null&&r.enabled.x&&(P=x),(o=e.middlewareData.shift)!=null&&o.enabled.y&&(C=f),S&&!m){const R=Ge(u.left,0),z=Ge(u.right,0),D=Ge(u.top,0),q=Ge(u.bottom,0);h?P=w-2*(R!==0||z!==0?R+z:Ge(u.left,u.right)):C=y-2*(D!==0||q!==0?D+q:Ge(u.top,u.bottom))}await c({...e,availableWidth:P,availableHeight:C});const I=await l.getDimensions(a.floating);return w!==I.width||y!==I.height?{reset:{rects:!0}}:{}}}};function il(){return typeof window<"u"}function ho(t){return pg(t)?(t.nodeName||"").toLowerCase():"#document"}function Xe(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function Dt(t){var e;return(e=(pg(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function pg(t){return il()?t instanceof Node||t instanceof Xe(t).Node:!1}function Ct(t){return il()?t instanceof Element||t instanceof Xe(t).Element:!1}function Zt(t){return il()?t instanceof HTMLElement||t instanceof Xe(t).HTMLElement:!1}function lh(t){return!il()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof Xe(t).ShadowRoot}function vs(t){const{overflow:e,overflowX:r,overflowY:o,display:s}=Tt(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+r)&&s!=="inline"&&s!=="contents"}function Qb(t){return/^(table|td|th)$/.test(ho(t))}function ll(t){try{if(t.matches(":popover-open"))return!0}catch{}try{return t.matches(":modal")}catch{return!1}}const Yb=/transform|translate|scale|rotate|perspective|filter/,Xb=/paint|layout|strict|content/,qn=t=>!!t&&t!=="none";let Gl;function gd(t){const e=Ct(t)?Tt(t):t;return qn(e.transform)||qn(e.translate)||qn(e.scale)||qn(e.rotate)||qn(e.perspective)||!xd()&&(qn(e.backdropFilter)||qn(e.filter))||Yb.test(e.willChange||"")||Xb.test(e.contain||"")}function Zb(t){let e=Fn(t);for(;Zt(e)&&!oo(e);){if(gd(e))return e;if(ll(e))return null;e=Fn(e)}return null}function xd(){return Gl==null&&(Gl=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),Gl}function oo(t){return/^(html|body|#document)$/.test(ho(t))}function Tt(t){return Xe(t).getComputedStyle(t)}function al(t){return Ct(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function Fn(t){if(ho(t)==="html")return t;const e=t.assignedSlot||t.parentNode||lh(t)&&t.host||Dt(t);return lh(e)?e.host:e}function fg(t){const e=Fn(t);return oo(e)?t.ownerDocument?t.ownerDocument.body:t.body:Zt(e)&&vs(e)?e:fg(e)}function rs(t,e,r){var o;e===void 0&&(e=[]),r===void 0&&(r=!0);const s=fg(t),i=s===((o=t.ownerDocument)==null?void 0:o.body),l=Xe(s);if(i){const a=ec(l);return e.concat(l,l.visualViewport||[],vs(s)?s:[],a&&r?rs(a):[])}else return e.concat(s,rs(s,[],r))}function ec(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function mg(t){const e=Tt(t);let r=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const s=Zt(t),i=s?t.offsetWidth:r,l=s?t.offsetHeight:o,a=_i(r)!==i||_i(o)!==l;return a&&(r=i,o=l),{width:r,height:o,$:a}}function vd(t){return Ct(t)?t:t.contextElement}function Wr(t){const e=vd(t);if(!Zt(e))return Lt(1);const r=e.getBoundingClientRect(),{width:o,height:s,$:i}=mg(e);let l=(i?_i(r.width):r.width)/o,a=(i?_i(r.height):r.height)/s;return(!l||!Number.isFinite(l))&&(l=1),(!a||!Number.isFinite(a))&&(a=1),{x:l,y:a}}const e0=Lt(0);function gg(t){const e=Xe(t);return!xd()||!e.visualViewport?e0:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function t0(t,e,r){return e===void 0&&(e=!1),!r||e&&r!==Xe(t)?!1:e}function ur(t,e,r,o){e===void 0&&(e=!1),r===void 0&&(r=!1);const s=t.getBoundingClientRect(),i=vd(t);let l=Lt(1);e&&(o?Ct(o)&&(l=Wr(o)):l=Wr(t));const a=t0(i,r,o)?gg(i):Lt(0);let c=(s.left+a.x)/l.x,d=(s.top+a.y)/l.y,u=s.width/l.x,p=s.height/l.y;if(i){const m=Xe(i),h=o&&Ct(o)?Xe(o):o;let w=m,y=ec(w);for(;y&&o&&h!==w;){const b=Wr(y),g=y.getBoundingClientRect(),f=Tt(y),x=g.left+(y.clientLeft+parseFloat(f.paddingLeft))*b.x,j=g.top+(y.clientTop+parseFloat(f.paddingTop))*b.y;c*=b.x,d*=b.y,u*=b.x,p*=b.y,c+=x,d+=j,w=Xe(y),y=ec(w)}}return Oi({width:u,height:p,x:c,y:d})}function cl(t,e){const r=al(t).scrollLeft;return e?e.left+r:ur(Dt(t)).left+r}function xg(t,e){const r=t.getBoundingClientRect(),o=r.left+e.scrollLeft-cl(t,r),s=r.top+e.scrollTop;return{x:o,y:s}}function n0(t){let{elements:e,rect:r,offsetParent:o,strategy:s}=t;const i=s==="fixed",l=Dt(o),a=e?ll(e.floating):!1;if(o===l||a&&i)return r;let c={scrollLeft:0,scrollTop:0},d=Lt(1);const u=Lt(0),p=Zt(o);if((p||!p&&!i)&&((ho(o)!=="body"||vs(l))&&(c=al(o)),p)){const h=ur(o);d=Wr(o),u.x=h.x+o.clientLeft,u.y=h.y+o.clientTop}const m=l&&!p&&!i?xg(l,c):Lt(0);return{width:r.width*d.x,height:r.height*d.y,x:r.x*d.x-c.scrollLeft*d.x+u.x+m.x,y:r.y*d.y-c.scrollTop*d.y+u.y+m.y}}function r0(t){return Array.from(t.getClientRects())}function o0(t){const e=Dt(t),r=al(t),o=t.ownerDocument.body,s=Ge(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),i=Ge(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let l=-r.scrollLeft+cl(t);const a=-r.scrollTop;return Tt(o).direction==="rtl"&&(l+=Ge(e.clientWidth,o.clientWidth)-s),{width:s,height:i,x:l,y:a}}const ah=25;function s0(t,e){const r=Xe(t),o=Dt(t),s=r.visualViewport;let i=o.clientWidth,l=o.clientHeight,a=0,c=0;if(s){i=s.width,l=s.height;const u=xd();(!u||u&&e==="fixed")&&(a=s.offsetLeft,c=s.offsetTop)}const d=cl(o);if(d<=0){const u=o.ownerDocument,p=u.body,m=getComputedStyle(p),h=u.compatMode==="CSS1Compat"&&parseFloat(m.marginLeft)+parseFloat(m.marginRight)||0,w=Math.abs(o.clientWidth-p.clientWidth-h);w<=ah&&(i-=w)}else d<=ah&&(i+=d);return{width:i,height:l,x:a,y:c}}function i0(t,e){const r=ur(t,!0,e==="fixed"),o=r.top+t.clientTop,s=r.left+t.clientLeft,i=Zt(t)?Wr(t):Lt(1),l=t.clientWidth*i.x,a=t.clientHeight*i.y,c=s*i.x,d=o*i.y;return{width:l,height:a,x:c,y:d}}function ch(t,e,r){let o;if(e==="viewport")o=s0(t,r);else if(e==="document")o=o0(Dt(t));else if(Ct(e))o=i0(e,r);else{const s=gg(t);o={x:e.x-s.x,y:e.y-s.y,width:e.width,height:e.height}}return Oi(o)}function vg(t,e){const r=Fn(t);return r===e||!Ct(r)||oo(r)?!1:Tt(r).position==="fixed"||vg(r,e)}function l0(t,e){const r=e.get(t);if(r)return r;let o=rs(t,[],!1).filter(a=>Ct(a)&&ho(a)!=="body"),s=null;const i=Tt(t).position==="fixed";let l=i?Fn(t):t;for(;Ct(l)&&!oo(l);){const a=Tt(l),c=gd(l);!c&&a.position==="fixed"&&(s=null),(i?!c&&!s:!c&&a.position==="static"&&!!s&&(s.position==="absolute"||s.position==="fixed")||vs(l)&&!c&&vg(t,l))?o=o.filter(u=>u!==l):s=a,l=Fn(l)}return e.set(t,o),o}function a0(t){let{element:e,boundary:r,rootBoundary:o,strategy:s}=t;const l=[...r==="clippingAncestors"?ll(e)?[]:l0(e,this._c):[].concat(r),o],a=ch(e,l[0],s);let c=a.top,d=a.right,u=a.bottom,p=a.left;for(let m=1;m<l.length;m++){const h=ch(e,l[m],s);c=Ge(h.top,c),d=Dn(h.right,d),u=Dn(h.bottom,u),p=Ge(h.left,p)}return{width:d-p,height:u-c,x:p,y:c}}function c0(t){const{width:e,height:r}=mg(t);return{width:e,height:r}}function d0(t,e,r){const o=Zt(e),s=Dt(e),i=r==="fixed",l=ur(t,!0,i,e);let a={scrollLeft:0,scrollTop:0};const c=Lt(0);function d(){c.x=cl(s)}if(o||!o&&!i)if((ho(e)!=="body"||vs(s))&&(a=al(e)),o){const h=ur(e,!0,i,e);c.x=h.x+e.clientLeft,c.y=h.y+e.clientTop}else s&&d();i&&!o&&s&&d();const u=s&&!o&&!i?xg(s,a):Lt(0),p=l.left+a.scrollLeft-c.x-u.x,m=l.top+a.scrollTop-c.y-u.y;return{x:p,y:m,width:l.width,height:l.height}}function Ql(t){return Tt(t).position==="static"}function dh(t,e){if(!Zt(t)||Tt(t).position==="fixed")return null;if(e)return e(t);let r=t.offsetParent;return Dt(t)===r&&(r=r.ownerDocument.body),r}function yg(t,e){const r=Xe(t);if(ll(t))return r;if(!Zt(t)){let s=Fn(t);for(;s&&!oo(s);){if(Ct(s)&&!Ql(s))return s;s=Fn(s)}return r}let o=dh(t,e);for(;o&&Qb(o)&&Ql(o);)o=dh(o,e);return o&&oo(o)&&Ql(o)&&!gd(o)?r:o||Zb(t)||r}const u0=async function(t){const e=this.getOffsetParent||yg,r=this.getDimensions,o=await r(t.floating);return{reference:d0(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function h0(t){return Tt(t).direction==="rtl"}const p0={convertOffsetParentRelativeRectToViewportRelativeRect:n0,getDocumentElement:Dt,getClippingRect:a0,getOffsetParent:yg,getElementRects:u0,getClientRects:r0,getDimensions:c0,getScale:Wr,isElement:Ct,isRTL:h0};function jg(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function f0(t,e){let r=null,o;const s=Dt(t);function i(){var a;clearTimeout(o),(a=r)==null||a.disconnect(),r=null}function l(a,c){a===void 0&&(a=!1),c===void 0&&(c=1),i();const d=t.getBoundingClientRect(),{left:u,top:p,width:m,height:h}=d;if(a||e(),!m||!h)return;const w=Vs(p),y=Vs(s.clientWidth-(u+m)),b=Vs(s.clientHeight-(p+h)),g=Vs(u),x={rootMargin:-w+"px "+-y+"px "+-b+"px "+-g+"px",threshold:Ge(0,Dn(1,c))||1};let j=!0;function k(S){const C=S[0].intersectionRatio;if(C!==c){if(!j)return l();C?l(!1,C):o=setTimeout(()=>{l(!1,1e-7)},1e3)}C===1&&!jg(d,t.getBoundingClientRect())&&l(),j=!1}try{r=new IntersectionObserver(k,{...x,root:s.ownerDocument})}catch{r=new IntersectionObserver(k,x)}r.observe(t)}return l(!0),i}function m0(t,e,r,o){o===void 0&&(o={});const{ancestorScroll:s=!0,ancestorResize:i=!0,elementResize:l=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:c=!1}=o,d=vd(t),u=s||i?[...d?rs(d):[],...e?rs(e):[]]:[];u.forEach(g=>{s&&g.addEventListener("scroll",r,{passive:!0}),i&&g.addEventListener("resize",r)});const p=d&&a?f0(d,r):null;let m=-1,h=null;l&&(h=new ResizeObserver(g=>{let[f]=g;f&&f.target===d&&h&&e&&(h.unobserve(e),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{var x;(x=h)==null||x.observe(e)})),r()}),d&&!c&&h.observe(d),e&&h.observe(e));let w,y=c?ur(t):null;c&&b();function b(){const g=ur(t);y&&!jg(y,g)&&r(),y=g,w=requestAnimationFrame(b)}return r(),()=>{var g;u.forEach(f=>{s&&f.removeEventListener("scroll",r),i&&f.removeEventListener("resize",r)}),p==null||p(),(g=h)==null||g.disconnect(),h=null,c&&cancelAnimationFrame(w)}}const g0=qb,x0=Jb,v0=Hb,y0=Gb,j0=Ub,uh=$b,w0=Kb,b0=(t,e,r)=>{const o=new Map,s={platform:p0,...r},i={...s.platform,_c:o};return Wb(t,e,{...s,platform:i})};var k0=typeof document<"u",S0=function(){},li=k0?v.useLayoutEffect:S0;function Li(t,e){if(t===e)return!0;if(typeof t!=typeof e)return!1;if(typeof t=="function"&&t.toString()===e.toString())return!0;let r,o,s;if(t&&e&&typeof t=="object"){if(Array.isArray(t)){if(r=t.length,r!==e.length)return!1;for(o=r;o--!==0;)if(!Li(t[o],e[o]))return!1;return!0}if(s=Object.keys(t),r=s.length,r!==Object.keys(e).length)return!1;for(o=r;o--!==0;)if(!{}.hasOwnProperty.call(e,s[o]))return!1;for(o=r;o--!==0;){const i=s[o];if(!(i==="_owner"&&t.$$typeof)&&!Li(t[i],e[i]))return!1}return!0}return t!==t&&e!==e}function wg(t){return typeof window>"u"?1:(t.ownerDocument.defaultView||window).devicePixelRatio||1}function hh(t,e){const r=wg(t);return Math.round(e*r)/r}function Yl(t){const e=v.useRef(t);return li(()=>{e.current=t}),e}function C0(t){t===void 0&&(t={});const{placement:e="bottom",strategy:r="absolute",middleware:o=[],platform:s,elements:{reference:i,floating:l}={},transform:a=!0,whileElementsMounted:c,open:d}=t,[u,p]=v.useState({x:0,y:0,strategy:r,placement:e,middlewareData:{},isPositioned:!1}),[m,h]=v.useState(o);Li(m,o)||h(o);const[w,y]=v.useState(null),[b,g]=v.useState(null),f=v.useCallback(N=>{N!==S.current&&(S.current=N,y(N))},[]),x=v.useCallback(N=>{N!==C.current&&(C.current=N,g(N))},[]),j=i||w,k=l||b,S=v.useRef(null),C=v.useRef(null),P=v.useRef(u),I=c!=null,R=Yl(c),z=Yl(s),D=Yl(d),q=v.useCallback(()=>{if(!S.current||!C.current)return;const N={placement:e,strategy:r,middleware:m};z.current&&(N.platform=z.current),b0(S.current,C.current,N).then(E=>{const O={...E,isPositioned:D.current!==!1};_.current&&!Li(P.current,O)&&(P.current=O,gs.flushSync(()=>{p(O)}))})},[m,e,r,z,D]);li(()=>{d===!1&&P.current.isPositioned&&(P.current.isPositioned=!1,p(N=>({...N,isPositioned:!1})))},[d]);const _=v.useRef(!1);li(()=>(_.current=!0,()=>{_.current=!1}),[]),li(()=>{if(j&&(S.current=j),k&&(C.current=k),j&&k){if(R.current)return R.current(j,k,q);q()}},[j,k,q,R,I]);const G=v.useMemo(()=>({reference:S,floating:C,setReference:f,setFloating:x}),[f,x]),W=v.useMemo(()=>({reference:j,floating:k}),[j,k]),H=v.useMemo(()=>{const N={position:r,left:0,top:0};if(!W.floating)return N;const E=hh(W.floating,u.x),O=hh(W.floating,u.y);return a?{...N,transform:"translate("+E+"px, "+O+"px)",...wg(W.floating)>=1.5&&{willChange:"transform"}}:{position:r,left:E,top:O}},[r,a,W.floating,u.x,u.y]);return v.useMemo(()=>({...u,update:q,refs:G,elements:W,floatingStyles:H}),[u,q,G,W,H])}const T0=t=>{function e(r){return{}.hasOwnProperty.call(r,"current")}return{name:"arrow",options:t,fn(r){const{element:o,padding:s}=typeof t=="function"?t(r):t;return o&&e(o)?o.current!=null?uh({element:o.current,padding:s}).fn(r):{}:o?uh({element:o,padding:s}).fn(r):{}}}},N0=(t,e)=>{const r=g0(t);return{name:r.name,fn:r.fn,options:[t,e]}},P0=(t,e)=>{const r=x0(t);return{name:r.name,fn:r.fn,options:[t,e]}},E0=(t,e)=>({fn:w0(t).fn,options:[t,e]}),A0=(t,e)=>{const r=v0(t);return{name:r.name,fn:r.fn,options:[t,e]}},M0=(t,e)=>{const r=y0(t);return{name:r.name,fn:r.fn,options:[t,e]}},R0=(t,e)=>{const r=j0(t);return{name:r.name,fn:r.fn,options:[t,e]}},_0=(t,e)=>{const r=T0(t);return{name:r.name,fn:r.fn,options:[t,e]}};var I0="Arrow",bg=v.forwardRef((t,e)=>{const{children:r,width:o=10,height:s=5,...i}=t;return n.jsx(qe.svg,{...i,ref:e,width:o,height:s,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:t.asChild?r:n.jsx("polygon",{points:"0,0 30,0 15,10"})})});bg.displayName=I0;var O0=bg;function L0(t){const[e,r]=v.useState(void 0);return Ln(()=>{if(t){r({width:t.offsetWidth,height:t.offsetHeight});const o=new ResizeObserver(s=>{if(!Array.isArray(s)||!s.length)return;const i=s[0];let l,a;if("borderBoxSize"in i){const c=i.borderBoxSize,d=Array.isArray(c)?c[0]:c;l=d.inlineSize,a=d.blockSize}else l=t.offsetWidth,a=t.offsetHeight;r({width:l,height:a})});return o.observe(t,{box:"border-box"}),()=>o.unobserve(t)}else r(void 0)},[t]),e}var kg="Popper",[Sg,Cg]=rl(kg),[uC,Tg]=Sg(kg),Ng="PopperAnchor",Pg=v.forwardRef((t,e)=>{const{__scopePopper:r,virtualRef:o,...s}=t,i=Tg(Ng,r),l=v.useRef(null),a=St(e,l),c=v.useRef(null);return v.useEffect(()=>{const d=c.current;c.current=(o==null?void 0:o.current)||l.current,d!==c.current&&i.onAnchorChange(c.current)}),o?null:n.jsx(qe.div,{...s,ref:a})});Pg.displayName=Ng;var yd="PopperContent",[D0,F0]=Sg(yd),Eg=v.forwardRef((t,e)=>{var Z,mr,en,Hn,tn,gr;const{__scopePopper:r,side:o="bottom",sideOffset:s=0,align:i="center",alignOffset:l=0,arrowPadding:a=0,avoidCollisions:c=!0,collisionBoundary:d=[],collisionPadding:u=0,sticky:p="partial",hideWhenDetached:m=!1,updatePositionStrategy:h="optimized",onPlaced:w,...y}=t,b=Tg(yd,r),[g,f]=v.useState(null),x=St(e,nn=>f(nn)),[j,k]=v.useState(null),S=L0(j),C=(S==null?void 0:S.width)??0,P=(S==null?void 0:S.height)??0,I=o+(i!=="center"?"-"+i:""),R=typeof u=="number"?u:{top:0,right:0,bottom:0,left:0,...u},z=Array.isArray(d)?d:[d],D=z.length>0,q={padding:R,boundary:z.filter(z0),altBoundary:D},{refs:_,floatingStyles:G,placement:W,isPositioned:H,middlewareData:N}=C0({strategy:"fixed",placement:I,whileElementsMounted:(...nn)=>m0(...nn,{animationFrame:h==="always"}),elements:{reference:b.anchor},middleware:[N0({mainAxis:s+P,alignmentAxis:l}),c&&P0({mainAxis:!0,crossAxis:!1,limiter:p==="partial"?E0():void 0,...q}),c&&A0({...q}),M0({...q,apply:({elements:nn,rects:ws,availableWidth:fl,availableHeight:bs})=>{const{width:ml,height:fo}=ws.reference,xr=nn.floating.style;xr.setProperty("--radix-popper-available-width",`${fl}px`),xr.setProperty("--radix-popper-available-height",`${bs}px`),xr.setProperty("--radix-popper-anchor-width",`${ml}px`),xr.setProperty("--radix-popper-anchor-height",`${fo}px`)}}),j&&_0({element:j,padding:a}),W0({arrowWidth:C,arrowHeight:P}),m&&R0({strategy:"referenceHidden",...q})]}),[E,O]=Rg(W),U=On(w);Ln(()=>{H&&(U==null||U())},[H,U]);const F=(Z=N.arrow)==null?void 0:Z.x,J=(mr=N.arrow)==null?void 0:mr.y,Q=((en=N.arrow)==null?void 0:en.centerOffset)!==0,[fe,Pe]=v.useState();return Ln(()=>{g&&Pe(window.getComputedStyle(g).zIndex)},[g]),n.jsx("div",{ref:_.setFloating,"data-radix-popper-content-wrapper":"",style:{...G,transform:H?G.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:fe,"--radix-popper-transform-origin":[(Hn=N.transformOrigin)==null?void 0:Hn.x,(tn=N.transformOrigin)==null?void 0:tn.y].join(" "),...((gr=N.hide)==null?void 0:gr.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:t.dir,children:n.jsx(D0,{scope:r,placedSide:E,onArrowChange:k,arrowX:F,arrowY:J,shouldHideArrow:Q,children:n.jsx(qe.div,{"data-side":E,"data-align":O,...y,ref:x,style:{...y.style,animation:H?void 0:"none"}})})})});Eg.displayName=yd;var Ag="PopperArrow",B0={top:"bottom",right:"left",bottom:"top",left:"right"},Mg=v.forwardRef(function(e,r){const{__scopePopper:o,...s}=e,i=F0(Ag,o),l=B0[i.placedSide];return n.jsx("span",{ref:i.onArrowChange,style:{position:"absolute",left:i.arrowX,top:i.arrowY,[l]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[i.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[i.placedSide],visibility:i.shouldHideArrow?"hidden":void 0},children:n.jsx(O0,{...s,ref:r,style:{...s.style,display:"block"}})})});Mg.displayName=Ag;function z0(t){return t!==null}var W0=t=>({name:"transformOrigin",options:t,fn(e){var b,g,f;const{placement:r,rects:o,middlewareData:s}=e,l=((b=s.arrow)==null?void 0:b.centerOffset)!==0,a=l?0:t.arrowWidth,c=l?0:t.arrowHeight,[d,u]=Rg(r),p={start:"0%",center:"50%",end:"100%"}[u],m=(((g=s.arrow)==null?void 0:g.x)??0)+a/2,h=(((f=s.arrow)==null?void 0:f.y)??0)+c/2;let w="",y="";return d==="bottom"?(w=l?p:`${m}px`,y=`${-c}px`):d==="top"?(w=l?p:`${m}px`,y=`${o.floating.height+c}px`):d==="right"?(w=`${-c}px`,y=l?p:`${h}px`):d==="left"&&(w=`${o.floating.width+c}px`,y=l?p:`${h}px`),{data:{x:w,y}}}});function Rg(t){const[e,r="center"]=t.split("-");return[e,r]}var $0=Pg,H0=Eg,U0=Mg,V0=Symbol("radix.slottable");function q0(t){const e=({children:r})=>n.jsx(n.Fragment,{children:r});return e.displayName=`${t}.Slottable`,e.__radixId=V0,e}var[dl]=rl("Tooltip",[Cg]),jd=Cg(),_g="TooltipProvider",J0=700,ph="tooltip.open",[K0,Ig]=dl(_g),Og=t=>{const{__scopeTooltip:e,delayDuration:r=J0,skipDelayDuration:o=300,disableHoverableContent:s=!1,children:i}=t,l=v.useRef(!0),a=v.useRef(!1),c=v.useRef(0);return v.useEffect(()=>{const d=c.current;return()=>window.clearTimeout(d)},[]),n.jsx(K0,{scope:e,isOpenDelayedRef:l,delayDuration:r,onOpen:v.useCallback(()=>{window.clearTimeout(c.current),l.current=!1},[]),onClose:v.useCallback(()=>{window.clearTimeout(c.current),c.current=window.setTimeout(()=>l.current=!0,o)},[o]),isPointerInTransitRef:a,onPointerInTransitChange:v.useCallback(d=>{a.current=d},[]),disableHoverableContent:s,children:i})};Og.displayName=_g;var Lg="Tooltip",[hC,ul]=dl(Lg),tc="TooltipTrigger",G0=v.forwardRef((t,e)=>{const{__scopeTooltip:r,...o}=t,s=ul(tc,r),i=Ig(tc,r),l=jd(r),a=v.useRef(null),c=St(e,a,s.onTriggerChange),d=v.useRef(!1),u=v.useRef(!1),p=v.useCallback(()=>d.current=!1,[]);return v.useEffect(()=>()=>document.removeEventListener("pointerup",p),[p]),n.jsx($0,{asChild:!0,...l,children:n.jsx(qe.button,{"aria-describedby":s.open?s.contentId:void 0,"data-state":s.stateAttribute,...o,ref:c,onPointerMove:ye(t.onPointerMove,m=>{m.pointerType!=="touch"&&!u.current&&!i.isPointerInTransitRef.current&&(s.onTriggerEnter(),u.current=!0)}),onPointerLeave:ye(t.onPointerLeave,()=>{s.onTriggerLeave(),u.current=!1}),onPointerDown:ye(t.onPointerDown,()=>{s.open&&s.onClose(),d.current=!0,document.addEventListener("pointerup",p,{once:!0})}),onFocus:ye(t.onFocus,()=>{d.current||s.onOpen()}),onBlur:ye(t.onBlur,s.onClose),onClick:ye(t.onClick,s.onClose)})})});G0.displayName=tc;var Q0="TooltipPortal",[pC,Y0]=dl(Q0,{forceMount:void 0}),so="TooltipContent",Dg=v.forwardRef((t,e)=>{const r=Y0(so,t.__scopeTooltip),{forceMount:o=r.forceMount,side:s="top",...i}=t,l=ul(so,t.__scopeTooltip);return n.jsx(ld,{present:o||l.open,children:l.disableHoverableContent?n.jsx(Fg,{side:s,...i,ref:e}):n.jsx(X0,{side:s,...i,ref:e})})}),X0=v.forwardRef((t,e)=>{const r=ul(so,t.__scopeTooltip),o=Ig(so,t.__scopeTooltip),s=v.useRef(null),i=St(e,s),[l,a]=v.useState(null),{trigger:c,onClose:d}=r,u=s.current,{onPointerInTransitChange:p}=o,m=v.useCallback(()=>{a(null),p(!1)},[p]),h=v.useCallback((w,y)=>{const b=w.currentTarget,g={x:w.clientX,y:w.clientY},f=rk(g,b.getBoundingClientRect()),x=ok(g,f),j=sk(y.getBoundingClientRect()),k=lk([...x,...j]);a(k),p(!0)},[p]);return v.useEffect(()=>()=>m(),[m]),v.useEffect(()=>{if(c&&u){const w=b=>h(b,u),y=b=>h(b,c);return c.addEventListener("pointerleave",w),u.addEventListener("pointerleave",y),()=>{c.removeEventListener("pointerleave",w),u.removeEventListener("pointerleave",y)}}},[c,u,h,m]),v.useEffect(()=>{if(l){const w=y=>{const b=y.target,g={x:y.clientX,y:y.clientY},f=(c==null?void 0:c.contains(b))||(u==null?void 0:u.contains(b)),x=!ik(g,l);f?m():x&&(m(),d())};return document.addEventListener("pointermove",w),()=>document.removeEventListener("pointermove",w)}},[c,u,l,d,m]),n.jsx(Fg,{...t,ref:i})}),[Z0,ek]=dl(Lg,{isInside:!1}),tk=q0("TooltipContent"),Fg=v.forwardRef((t,e)=>{const{__scopeTooltip:r,children:o,"aria-label":s,onEscapeKeyDown:i,onPointerDownOutside:l,...a}=t,c=ul(so,r),d=jd(r),{onClose:u}=c;return v.useEffect(()=>(document.addEventListener(ph,u),()=>document.removeEventListener(ph,u)),[u]),v.useEffect(()=>{if(c.trigger){const p=m=>{const h=m.target;h!=null&&h.contains(c.trigger)&&u()};return window.addEventListener("scroll",p,{capture:!0}),()=>window.removeEventListener("scroll",p,{capture:!0})}},[c.trigger,u]),n.jsx(id,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:i,onPointerDownOutside:l,onFocusOutside:p=>p.preventDefault(),onDismiss:u,children:n.jsxs(H0,{"data-state":c.stateAttribute,...d,...a,ref:e,style:{...a.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[n.jsx(tk,{children:o}),n.jsx(Z0,{scope:r,isInside:!0,children:n.jsx(_j,{id:c.contentId,role:"tooltip",children:s||o})})]})})});Dg.displayName=so;var Bg="TooltipArrow",nk=v.forwardRef((t,e)=>{const{__scopeTooltip:r,...o}=t,s=jd(r);return ek(Bg,r).isInside?null:n.jsx(U0,{...s,...o,ref:e})});nk.displayName=Bg;function rk(t,e){const r=Math.abs(e.top-t.y),o=Math.abs(e.bottom-t.y),s=Math.abs(e.right-t.x),i=Math.abs(e.left-t.x);switch(Math.min(r,o,s,i)){case i:return"left";case s:return"right";case r:return"top";case o:return"bottom";default:throw new Error("unreachable")}}function ok(t,e,r=5){const o=[];switch(e){case"top":o.push({x:t.x-r,y:t.y+r},{x:t.x+r,y:t.y+r});break;case"bottom":o.push({x:t.x-r,y:t.y-r},{x:t.x+r,y:t.y-r});break;case"left":o.push({x:t.x+r,y:t.y-r},{x:t.x+r,y:t.y+r});break;case"right":o.push({x:t.x-r,y:t.y-r},{x:t.x-r,y:t.y+r});break}return o}function sk(t){const{top:e,right:r,bottom:o,left:s}=t;return[{x:s,y:e},{x:r,y:e},{x:r,y:o},{x:s,y:o}]}function ik(t,e){const{x:r,y:o}=t;let s=!1;for(let i=0,l=e.length-1;i<e.length;l=i++){const a=e[i],c=e[l],d=a.x,u=a.y,p=c.x,m=c.y;u>o!=m>o&&r<(p-d)*(o-u)/(m-u)+d&&(s=!s)}return s}function lk(t){const e=t.slice();return e.sort((r,o)=>r.x<o.x?-1:r.x>o.x?1:r.y<o.y?-1:r.y>o.y?1:0),ak(e)}function ak(t){if(t.length<=1)return t.slice();const e=[];for(let o=0;o<t.length;o++){const s=t[o];for(;e.length>=2;){const i=e[e.length-1],l=e[e.length-2];if((i.x-l.x)*(s.y-l.y)>=(i.y-l.y)*(s.x-l.x))e.pop();else break}e.push(s)}e.pop();const r=[];for(let o=t.length-1;o>=0;o--){const s=t[o];for(;r.length>=2;){const i=r[r.length-1],l=r[r.length-2];if((i.x-l.x)*(s.y-l.y)>=(i.y-l.y)*(s.x-l.x))r.pop();else break}r.push(s)}return r.pop(),e.length===1&&r.length===1&&e[0].x===r[0].x&&e[0].y===r[0].y?e:e.concat(r)}var ck=Og,zg=Dg;const dk=ck,uk=v.forwardRef(({className:t,sideOffset:e=4,...r},o)=>n.jsx(zg,{ref:o,sideOffset:e,className:Be("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",t),...r}));uk.displayName=zg.displayName;var hl=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(t){return this.listeners.add(t),this.onSubscribe(),()=>{this.listeners.delete(t),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},Xn,mn,$r,Zh,hk=(Zh=class extends hl{constructor(){super();Y(this,Xn);Y(this,mn);Y(this,$r);B(this,$r,e=>{if(typeof window<"u"&&window.addEventListener){const r=()=>e();return window.addEventListener("visibilitychange",r,!1),()=>{window.removeEventListener("visibilitychange",r)}}})}onSubscribe(){T(this,mn)||this.setEventListener(T(this,$r))}onUnsubscribe(){var e;this.hasListeners()||((e=T(this,mn))==null||e.call(this),B(this,mn,void 0))}setEventListener(e){var r;B(this,$r,e),(r=T(this,mn))==null||r.call(this),B(this,mn,e(o=>{typeof o=="boolean"?this.setFocused(o):this.onFocus()}))}setFocused(e){T(this,Xn)!==e&&(B(this,Xn,e),this.onFocus())}onFocus(){const e=this.isFocused();this.listeners.forEach(r=>{r(e)})}isFocused(){var e;return typeof T(this,Xn)=="boolean"?T(this,Xn):((e=globalThis.document)==null?void 0:e.visibilityState)!=="hidden"}},Xn=new WeakMap,mn=new WeakMap,$r=new WeakMap,Zh),Wg=new hk,pk={setTimeout:(t,e)=>setTimeout(t,e),clearTimeout:t=>clearTimeout(t),setInterval:(t,e)=>setInterval(t,e),clearInterval:t=>clearInterval(t)},gn,dc,ep,fk=(ep=class{constructor(){Y(this,gn,pk);Y(this,dc,!1)}setTimeoutProvider(t){B(this,gn,t)}setTimeout(t,e){return T(this,gn).setTimeout(t,e)}clearTimeout(t){T(this,gn).clearTimeout(t)}setInterval(t,e){return T(this,gn).setInterval(t,e)}clearInterval(t){T(this,gn).clearInterval(t)}},gn=new WeakMap,dc=new WeakMap,ep),nc=new fk;function mk(t){setTimeout(t,0)}var gk=typeof window>"u"||"Deno"in globalThis;function xt(){}function xk(t,e){return typeof t=="function"?t(e):t}function vk(t){return typeof t=="number"&&t>=0&&t!==1/0}function yk(t,e){return Math.max(t+(e||0)-Date.now(),0)}function rc(t,e){return typeof t=="function"?t(e):t}function jk(t,e){return typeof t=="function"?t(e):t}function fh(t,e){const{type:r="all",exact:o,fetchStatus:s,predicate:i,queryKey:l,stale:a}=t;if(l){if(o){if(e.queryHash!==wd(l,e.options))return!1}else if(!ss(e.queryKey,l))return!1}if(r!=="all"){const c=e.isActive();if(r==="active"&&!c||r==="inactive"&&c)return!1}return!(typeof a=="boolean"&&e.isStale()!==a||s&&s!==e.state.fetchStatus||i&&!i(e))}function mh(t,e){const{exact:r,status:o,predicate:s,mutationKey:i}=t;if(i){if(!e.options.mutationKey)return!1;if(r){if(os(e.options.mutationKey)!==os(i))return!1}else if(!ss(e.options.mutationKey,i))return!1}return!(o&&e.state.status!==o||s&&!s(e))}function wd(t,e){return((e==null?void 0:e.queryKeyHashFn)||os)(t)}function os(t){return JSON.stringify(t,(e,r)=>oc(r)?Object.keys(r).sort().reduce((o,s)=>(o[s]=r[s],o),{}):r)}function ss(t,e){return t===e?!0:typeof t!=typeof e?!1:t&&e&&typeof t=="object"&&typeof e=="object"?Object.keys(e).every(r=>ss(t[r],e[r])):!1}var wk=Object.prototype.hasOwnProperty;function $g(t,e,r=0){if(t===e)return t;if(r>500)return e;const o=gh(t)&&gh(e);if(!o&&!(oc(t)&&oc(e)))return e;const i=(o?t:Object.keys(t)).length,l=o?e:Object.keys(e),a=l.length,c=o?new Array(a):{};let d=0;for(let u=0;u<a;u++){const p=o?u:l[u],m=t[p],h=e[p];if(m===h){c[p]=m,(o?u<i:wk.call(t,p))&&d++;continue}if(m===null||h===null||typeof m!="object"||typeof h!="object"){c[p]=h;continue}const w=$g(m,h,r+1);c[p]=w,w===m&&d++}return i===a&&d===i?t:c}function gh(t){return Array.isArray(t)&&t.length===Object.keys(t).length}function oc(t){if(!xh(t))return!1;const e=t.constructor;if(e===void 0)return!0;const r=e.prototype;return!(!xh(r)||!r.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(t)!==Object.prototype)}function xh(t){return Object.prototype.toString.call(t)==="[object Object]"}function bk(t){return new Promise(e=>{nc.setTimeout(e,t)})}function kk(t,e,r){return typeof r.structuralSharing=="function"?r.structuralSharing(t,e):r.structuralSharing!==!1?$g(t,e):e}function Sk(t,e,r=0){const o=[...t,e];return r&&o.length>r?o.slice(1):o}function Ck(t,e,r=0){const o=[e,...t];return r&&o.length>r?o.slice(0,-1):o}var bd=Symbol();function Hg(t,e){return!t.queryFn&&(e!=null&&e.initialPromise)?()=>e.initialPromise:!t.queryFn||t.queryFn===bd?()=>Promise.reject(new Error(`Missing queryFn: '${t.queryHash}'`)):t.queryFn}function Tk(t,e,r){let o=!1,s;return Object.defineProperty(t,"signal",{enumerable:!0,get:()=>(s??(s=e()),o||(o=!0,s.aborted?r():s.addEventListener("abort",r,{once:!0})),s)}),t}var Ug=(()=>{let t=()=>gk;return{isServer(){return t()},setIsServer(e){t=e}}})();function Nk(){let t,e;const r=new Promise((s,i)=>{t=s,e=i});r.status="pending",r.catch(()=>{});function o(s){Object.assign(r,s),delete r.resolve,delete r.reject}return r.resolve=s=>{o({status:"fulfilled",value:s}),t(s)},r.reject=s=>{o({status:"rejected",reason:s}),e(s)},r}var Pk=mk;function Ek(){let t=[],e=0,r=a=>{a()},o=a=>{a()},s=Pk;const i=a=>{e?t.push(a):s(()=>{r(a)})},l=()=>{const a=t;t=[],a.length&&s(()=>{o(()=>{a.forEach(c=>{r(c)})})})};return{batch:a=>{let c;e++;try{c=a()}finally{e--,e||l()}return c},batchCalls:a=>(...c)=>{i(()=>{a(...c)})},schedule:i,setNotifyFunction:a=>{r=a},setBatchNotifyFunction:a=>{o=a},setScheduler:a=>{s=a}}}var Oe=Ek(),Hr,xn,Ur,tp,Ak=(tp=class extends hl{constructor(){super();Y(this,Hr,!0);Y(this,xn);Y(this,Ur);B(this,Ur,e=>{if(typeof window<"u"&&window.addEventListener){const r=()=>e(!0),o=()=>e(!1);return window.addEventListener("online",r,!1),window.addEventListener("offline",o,!1),()=>{window.removeEventListener("online",r),window.removeEventListener("offline",o)}}})}onSubscribe(){T(this,xn)||this.setEventListener(T(this,Ur))}onUnsubscribe(){var e;this.hasListeners()||((e=T(this,xn))==null||e.call(this),B(this,xn,void 0))}setEventListener(e){var r;B(this,Ur,e),(r=T(this,xn))==null||r.call(this),B(this,xn,e(this.setOnline.bind(this)))}setOnline(e){T(this,Hr)!==e&&(B(this,Hr,e),this.listeners.forEach(o=>{o(e)}))}isOnline(){return T(this,Hr)}},Hr=new WeakMap,xn=new WeakMap,Ur=new WeakMap,tp),Di=new Ak;function Mk(t){return Math.min(1e3*2**t,3e4)}function Vg(t){return(t??"online")==="online"?Di.isOnline():!0}var sc=class extends Error{constructor(t){super("CancelledError"),this.revert=t==null?void 0:t.revert,this.silent=t==null?void 0:t.silent}};function qg(t){let e=!1,r=0,o;const s=Nk(),i=()=>s.status!=="pending",l=y=>{var b;if(!i()){const g=new sc(y);m(g),(b=t.onCancel)==null||b.call(t,g)}},a=()=>{e=!0},c=()=>{e=!1},d=()=>Wg.isFocused()&&(t.networkMode==="always"||Di.isOnline())&&t.canRun(),u=()=>Vg(t.networkMode)&&t.canRun(),p=y=>{i()||(o==null||o(),s.resolve(y))},m=y=>{i()||(o==null||o(),s.reject(y))},h=()=>new Promise(y=>{var b;o=g=>{(i()||d())&&y(g)},(b=t.onPause)==null||b.call(t)}).then(()=>{var y;o=void 0,i()||(y=t.onContinue)==null||y.call(t)}),w=()=>{if(i())return;let y;const b=r===0?t.initialPromise:void 0;try{y=b??t.fn()}catch(g){y=Promise.reject(g)}Promise.resolve(y).then(p).catch(g=>{var S;if(i())return;const f=t.retry??(Ug.isServer()?0:3),x=t.retryDelay??Mk,j=typeof x=="function"?x(r,g):x,k=f===!0||typeof f=="number"&&r<f||typeof f=="function"&&f(r,g);if(e||!k){m(g);return}r++,(S=t.onFail)==null||S.call(t,r,g),bk(j).then(()=>d()?void 0:h()).then(()=>{e?m(g):w()})})};return{promise:s,status:()=>s.status,cancel:l,continue:()=>(o==null||o(),s),cancelRetry:a,continueRetry:c,canStart:u,start:()=>(u()?w():h().then(w),s)}}var Zn,np,Jg=(np=class{constructor(){Y(this,Zn)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),vk(this.gcTime)&&B(this,Zn,nc.setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(t){this.gcTime=Math.max(this.gcTime||0,t??(Ug.isServer()?1/0:5*60*1e3))}clearGcTimeout(){T(this,Zn)!==void 0&&(nc.clearTimeout(T(this,Zn)),B(this,Zn,void 0))}},Zn=new WeakMap,np);function Rk(t){return{onFetch:(e,r)=>{var u,p,m,h,w;const o=e.options,s=(m=(p=(u=e.fetchOptions)==null?void 0:u.meta)==null?void 0:p.fetchMore)==null?void 0:m.direction,i=((h=e.state.data)==null?void 0:h.pages)||[],l=((w=e.state.data)==null?void 0:w.pageParams)||[];let a={pages:[],pageParams:[]},c=0;const d=async()=>{let y=!1;const b=x=>{Tk(x,()=>e.signal,()=>y=!0)},g=Hg(e.options,e.fetchOptions),f=async(x,j,k)=>{if(y)return Promise.reject(e.signal.reason);if(j==null&&x.pages.length)return Promise.resolve(x);const C=(()=>{const z={client:e.client,queryKey:e.queryKey,pageParam:j,direction:k?"backward":"forward",meta:e.options.meta};return b(z),z})(),P=await g(C),{maxPages:I}=e.options,R=k?Ck:Sk;return{pages:R(x.pages,P,I),pageParams:R(x.pageParams,j,I)}};if(s&&i.length){const x=s==="backward",j=x?_k:vh,k={pages:i,pageParams:l},S=j(o,k);a=await f(k,S,x)}else{const x=t??i.length;do{const j=c===0?l[0]??o.initialPageParam:vh(o,a);if(c>0&&j==null)break;a=await f(a,j),c++}while(c<x)}return a};e.options.persister?e.fetchFn=()=>{var y,b;return(b=(y=e.options).persister)==null?void 0:b.call(y,d,{client:e.client,queryKey:e.queryKey,meta:e.options.meta,signal:e.signal},r)}:e.fetchFn=d}}}function vh(t,{pages:e,pageParams:r}){const o=e.length-1;return e.length>0?t.getNextPageParam(e[o],e,r[o],r):void 0}function _k(t,{pages:e,pageParams:r}){var o;return e.length>0?(o=t.getPreviousPageParam)==null?void 0:o.call(t,e[0],e,r[0],r):void 0}var Vr,er,qr,ot,tr,we,as,nr,Ke,Kg,Bt,rp,Ik=(rp=class extends Jg{constructor(e){super();Y(this,Ke);Y(this,Vr);Y(this,er);Y(this,qr);Y(this,ot);Y(this,tr);Y(this,we);Y(this,as);Y(this,nr);B(this,nr,!1),B(this,as,e.defaultOptions),this.setOptions(e.options),this.observers=[],B(this,tr,e.client),B(this,ot,T(this,tr).getQueryCache()),this.queryKey=e.queryKey,this.queryHash=e.queryHash,B(this,er,jh(this.options)),this.state=e.state??T(this,er),this.scheduleGc()}get meta(){return this.options.meta}get queryType(){return T(this,Vr)}get promise(){var e;return(e=T(this,we))==null?void 0:e.promise}setOptions(e){if(this.options={...T(this,as),...e},e!=null&&e._type&&B(this,Vr,e._type),this.updateGcTime(this.options.gcTime),this.state&&this.state.data===void 0){const r=jh(this.options);r.data!==void 0&&(this.setState(yh(r.data,r.dataUpdatedAt)),B(this,er,r))}}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&T(this,ot).remove(this)}setData(e,r){const o=kk(this.state.data,e,this.options);return Se(this,Ke,Bt).call(this,{data:o,type:"success",dataUpdatedAt:r==null?void 0:r.updatedAt,manual:r==null?void 0:r.manual}),o}setState(e){Se(this,Ke,Bt).call(this,{type:"setState",state:e})}cancel(e){var o,s;const r=(o=T(this,we))==null?void 0:o.promise;return(s=T(this,we))==null||s.cancel(e),r?r.then(xt).catch(xt):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}get resetState(){return T(this,er)}reset(){this.destroy(),this.setState(this.resetState)}isActive(){return this.observers.some(e=>jk(e.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===bd||!this.isFetched()}isFetched(){return this.state.dataUpdateCount+this.state.errorUpdateCount>0}isStatic(){return this.getObserversCount()>0?this.observers.some(e=>rc(e.options.staleTime,this)==="static"):!1}isStale(){return this.getObserversCount()>0?this.observers.some(e=>e.getCurrentResult().isStale):this.state.data===void 0||this.state.isInvalidated}isStaleByTime(e=0){return this.state.data===void 0?!0:e==="static"?!1:this.state.isInvalidated?!0:!yk(this.state.dataUpdatedAt,e)}onFocus(){var r;const e=this.observers.find(o=>o.shouldFetchOnWindowFocus());e==null||e.refetch({cancelRefetch:!1}),(r=T(this,we))==null||r.continue()}onOnline(){var r;const e=this.observers.find(o=>o.shouldFetchOnReconnect());e==null||e.refetch({cancelRefetch:!1}),(r=T(this,we))==null||r.continue()}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),T(this,ot).notify({type:"observerAdded",query:this,observer:e}))}removeObserver(e){this.observers.includes(e)&&(this.observers=this.observers.filter(r=>r!==e),this.observers.length||(T(this,we)&&(T(this,nr)||Se(this,Ke,Kg).call(this)?T(this,we).cancel({revert:!0}):T(this,we).cancelRetry()),this.scheduleGc()),T(this,ot).notify({type:"observerRemoved",query:this,observer:e}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||Se(this,Ke,Bt).call(this,{type:"invalidate"})}async fetch(e,r){var d,u,p,m,h,w,y,b,g,f,x;if(this.state.fetchStatus!=="idle"&&((d=T(this,we))==null?void 0:d.status())!=="rejected"){if(this.state.data!==void 0&&(r!=null&&r.cancelRefetch))this.cancel({silent:!0});else if(T(this,we))return T(this,we).continueRetry(),T(this,we).promise}if(e&&this.setOptions(e),!this.options.queryFn){const j=this.observers.find(k=>k.options.queryFn);j&&this.setOptions(j.options)}const o=new AbortController,s=j=>{Object.defineProperty(j,"signal",{enumerable:!0,get:()=>(B(this,nr,!0),o.signal)})},i=()=>{const j=Hg(this.options,r),S=(()=>{const C={client:T(this,tr),queryKey:this.queryKey,meta:this.meta};return s(C),C})();return B(this,nr,!1),this.options.persister?this.options.persister(j,S,this):j(S)},a=(()=>{const j={fetchOptions:r,options:this.options,queryKey:this.queryKey,client:T(this,tr),state:this.state,fetchFn:i};return s(j),j})(),c=T(this,Vr)==="infinite"?Rk(this.options.pages):this.options.behavior;c==null||c.onFetch(a,this),B(this,qr,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((u=a.fetchOptions)==null?void 0:u.meta))&&Se(this,Ke,Bt).call(this,{type:"fetch",meta:(p=a.fetchOptions)==null?void 0:p.meta}),B(this,we,qg({initialPromise:r==null?void 0:r.initialPromise,fn:a.fetchFn,onCancel:j=>{j instanceof sc&&j.revert&&this.setState({...T(this,qr),fetchStatus:"idle"}),o.abort()},onFail:(j,k)=>{Se(this,Ke,Bt).call(this,{type:"failed",failureCount:j,error:k})},onPause:()=>{Se(this,Ke,Bt).call(this,{type:"pause"})},onContinue:()=>{Se(this,Ke,Bt).call(this,{type:"continue"})},retry:a.options.retry,retryDelay:a.options.retryDelay,networkMode:a.options.networkMode,canRun:()=>!0}));try{const j=await T(this,we).start();if(j===void 0)throw new Error(`${this.queryHash} data is undefined`);return this.setData(j),(h=(m=T(this,ot).config).onSuccess)==null||h.call(m,j,this),(y=(w=T(this,ot).config).onSettled)==null||y.call(w,j,this.state.error,this),j}catch(j){if(j instanceof sc){if(j.silent)return T(this,we).promise;if(j.revert){if(this.state.data===void 0)throw j;return this.state.data}}throw Se(this,Ke,Bt).call(this,{type:"error",error:j}),(g=(b=T(this,ot).config).onError)==null||g.call(b,j,this),(x=(f=T(this,ot).config).onSettled)==null||x.call(f,this.state.data,j,this),j}finally{this.scheduleGc()}}},Vr=new WeakMap,er=new WeakMap,qr=new WeakMap,ot=new WeakMap,tr=new WeakMap,we=new WeakMap,as=new WeakMap,nr=new WeakMap,Ke=new WeakSet,Kg=function(){return this.state.fetchStatus==="paused"&&this.state.status==="pending"},Bt=function(e){const r=o=>{switch(e.type){case"failed":return{...o,fetchFailureCount:e.failureCount,fetchFailureReason:e.error};case"pause":return{...o,fetchStatus:"paused"};case"continue":return{...o,fetchStatus:"fetching"};case"fetch":return{...o,...Ok(o.data,this.options),fetchMeta:e.meta??null};case"success":const s={...o,...yh(e.data,e.dataUpdatedAt),dataUpdateCount:o.dataUpdateCount+1,...!e.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};return B(this,qr,e.manual?s:void 0),s;case"error":const i=e.error;return{...o,error:i,errorUpdateCount:o.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:o.fetchFailureCount+1,fetchFailureReason:i,fetchStatus:"idle",status:"error",isInvalidated:!0};case"invalidate":return{...o,isInvalidated:!0};case"setState":return{...o,...e.state}}};this.state=r(this.state),Oe.batch(()=>{this.observers.forEach(o=>{o.onQueryUpdate()}),T(this,ot).notify({query:this,type:"updated",action:e})})},rp);function Ok(t,e){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:Vg(e.networkMode)?"fetching":"paused",...t===void 0&&{error:null,status:"pending"}}}function yh(t,e){return{data:t,dataUpdatedAt:e??Date.now(),error:null,isInvalidated:!1,status:"success"}}function jh(t){const e=typeof t.initialData=="function"?t.initialData():t.initialData,r=e!==void 0,o=r?typeof t.initialDataUpdatedAt=="function"?t.initialDataUpdatedAt():t.initialDataUpdatedAt:0;return{data:e,dataUpdateCount:0,dataUpdatedAt:r?o??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:r?"success":"pending",fetchStatus:"idle"}}var cs,Et,Me,rr,At,dn,op,Lk=(op=class extends Jg{constructor(e){super();Y(this,At);Y(this,cs);Y(this,Et);Y(this,Me);Y(this,rr);B(this,cs,e.client),this.mutationId=e.mutationId,B(this,Me,e.mutationCache),B(this,Et,[]),this.state=e.state||Dk(),this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options=e,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(e){T(this,Et).includes(e)||(T(this,Et).push(e),this.clearGcTimeout(),T(this,Me).notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){B(this,Et,T(this,Et).filter(r=>r!==e)),this.scheduleGc(),T(this,Me).notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){T(this,Et).length||(this.state.status==="pending"?this.scheduleGc():T(this,Me).remove(this))}continue(){var e;return((e=T(this,rr))==null?void 0:e.continue())??this.execute(this.state.variables)}async execute(e){var l,a,c,d,u,p,m,h,w,y,b,g,f,x,j,k,S,C;const r=()=>{Se(this,At,dn).call(this,{type:"continue"})},o={client:T(this,cs),meta:this.options.meta,mutationKey:this.options.mutationKey};B(this,rr,qg({fn:()=>this.options.mutationFn?this.options.mutationFn(e,o):Promise.reject(new Error("No mutationFn found")),onFail:(P,I)=>{Se(this,At,dn).call(this,{type:"failed",failureCount:P,error:I})},onPause:()=>{Se(this,At,dn).call(this,{type:"pause"})},onContinue:r,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>T(this,Me).canRun(this)}));const s=this.state.status==="pending",i=!T(this,rr).canStart();try{if(s)r();else{Se(this,At,dn).call(this,{type:"pending",variables:e,isPaused:i}),T(this,Me).config.onMutate&&await T(this,Me).config.onMutate(e,this,o);const I=await((a=(l=this.options).onMutate)==null?void 0:a.call(l,e,o));I!==this.state.context&&Se(this,At,dn).call(this,{type:"pending",context:I,variables:e,isPaused:i})}const P=await T(this,rr).start();return await((d=(c=T(this,Me).config).onSuccess)==null?void 0:d.call(c,P,e,this.state.context,this,o)),await((p=(u=this.options).onSuccess)==null?void 0:p.call(u,P,e,this.state.context,o)),await((h=(m=T(this,Me).config).onSettled)==null?void 0:h.call(m,P,null,this.state.variables,this.state.context,this,o)),await((y=(w=this.options).onSettled)==null?void 0:y.call(w,P,null,e,this.state.context,o)),Se(this,At,dn).call(this,{type:"success",data:P}),P}catch(P){try{await((g=(b=T(this,Me).config).onError)==null?void 0:g.call(b,P,e,this.state.context,this,o))}catch(I){Promise.reject(I)}try{await((x=(f=this.options).onError)==null?void 0:x.call(f,P,e,this.state.context,o))}catch(I){Promise.reject(I)}try{await((k=(j=T(this,Me).config).onSettled)==null?void 0:k.call(j,void 0,P,this.state.variables,this.state.context,this,o))}catch(I){Promise.reject(I)}try{await((C=(S=this.options).onSettled)==null?void 0:C.call(S,void 0,P,e,this.state.context,o))}catch(I){Promise.reject(I)}throw Se(this,At,dn).call(this,{type:"error",error:P}),P}finally{T(this,Me).runNext(this)}}},cs=new WeakMap,Et=new WeakMap,Me=new WeakMap,rr=new WeakMap,At=new WeakSet,dn=function(e){const r=o=>{switch(e.type){case"failed":return{...o,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...o,isPaused:!0};case"continue":return{...o,isPaused:!1};case"pending":return{...o,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:e.isPaused,status:"pending",variables:e.variables,submittedAt:Date.now()};case"success":return{...o,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...o,data:void 0,error:e.error,failureCount:o.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"}}};this.state=r(this.state),Oe.batch(()=>{T(this,Et).forEach(o=>{o.onMutationUpdate(e)}),T(this,Me).notify({mutation:this,type:"updated",action:e})})},op);function Dk(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var $t,vt,ds,sp,Fk=(sp=class extends hl{constructor(e={}){super();Y(this,$t);Y(this,vt);Y(this,ds);this.config=e,B(this,$t,new Set),B(this,vt,new Map),B(this,ds,0)}build(e,r,o){const s=new Lk({client:e,mutationCache:this,mutationId:++Ss(this,ds)._,options:e.defaultMutationOptions(r),state:o});return this.add(s),s}add(e){T(this,$t).add(e);const r=qs(e);if(typeof r=="string"){const o=T(this,vt).get(r);o?o.push(e):T(this,vt).set(r,[e])}this.notify({type:"added",mutation:e})}remove(e){if(T(this,$t).delete(e)){const r=qs(e);if(typeof r=="string"){const o=T(this,vt).get(r);if(o)if(o.length>1){const s=o.indexOf(e);s!==-1&&o.splice(s,1)}else o[0]===e&&T(this,vt).delete(r)}}this.notify({type:"removed",mutation:e})}canRun(e){const r=qs(e);if(typeof r=="string"){const o=T(this,vt).get(r),s=o==null?void 0:o.find(i=>i.state.status==="pending");return!s||s===e}else return!0}runNext(e){var o;const r=qs(e);if(typeof r=="string"){const s=(o=T(this,vt).get(r))==null?void 0:o.find(i=>i!==e&&i.state.isPaused);return(s==null?void 0:s.continue())??Promise.resolve()}else return Promise.resolve()}clear(){Oe.batch(()=>{T(this,$t).forEach(e=>{this.notify({type:"removed",mutation:e})}),T(this,$t).clear(),T(this,vt).clear()})}getAll(){return Array.from(T(this,$t))}find(e){const r={exact:!0,...e};return this.getAll().find(o=>mh(r,o))}findAll(e={}){return this.getAll().filter(r=>mh(e,r))}notify(e){Oe.batch(()=>{this.listeners.forEach(r=>{r(e)})})}resumePausedMutations(){const e=this.getAll().filter(r=>r.state.isPaused);return Oe.batch(()=>Promise.all(e.map(r=>r.continue().catch(xt))))}},$t=new WeakMap,vt=new WeakMap,ds=new WeakMap,sp);function qs(t){var e;return(e=t.options.scope)==null?void 0:e.id}var Mt,ip,Bk=(ip=class extends hl{constructor(e={}){super();Y(this,Mt);this.config=e,B(this,Mt,new Map)}build(e,r,o){const s=r.queryKey,i=r.queryHash??wd(s,r);let l=this.get(i);return l||(l=new Ik({client:e,queryKey:s,queryHash:i,options:e.defaultQueryOptions(r),state:o,defaultOptions:e.getQueryDefaults(s)}),this.add(l)),l}add(e){T(this,Mt).has(e.queryHash)||(T(this,Mt).set(e.queryHash,e),this.notify({type:"added",query:e}))}remove(e){const r=T(this,Mt).get(e.queryHash);r&&(e.destroy(),r===e&&T(this,Mt).delete(e.queryHash),this.notify({type:"removed",query:e}))}clear(){Oe.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return T(this,Mt).get(e)}getAll(){return[...T(this,Mt).values()]}find(e){const r={exact:!0,...e};return this.getAll().find(o=>fh(r,o))}findAll(e={}){const r=this.getAll();return Object.keys(e).length>0?r.filter(o=>fh(e,o)):r}notify(e){Oe.batch(()=>{this.listeners.forEach(r=>{r(e)})})}onFocus(){Oe.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){Oe.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}},Mt=new WeakMap,ip),ue,vn,yn,Jr,Kr,jn,Gr,Qr,lp,zk=(lp=class{constructor(t={}){Y(this,ue);Y(this,vn);Y(this,yn);Y(this,Jr);Y(this,Kr);Y(this,jn);Y(this,Gr);Y(this,Qr);B(this,ue,t.queryCache||new Bk),B(this,vn,t.mutationCache||new Fk),B(this,yn,t.defaultOptions||{}),B(this,Jr,new Map),B(this,Kr,new Map),B(this,jn,0)}mount(){Ss(this,jn)._++,T(this,jn)===1&&(B(this,Gr,Wg.subscribe(async t=>{t&&(await this.resumePausedMutations(),T(this,ue).onFocus())})),B(this,Qr,Di.subscribe(async t=>{t&&(await this.resumePausedMutations(),T(this,ue).onOnline())})))}unmount(){var t,e;Ss(this,jn)._--,T(this,jn)===0&&((t=T(this,Gr))==null||t.call(this),B(this,Gr,void 0),(e=T(this,Qr))==null||e.call(this),B(this,Qr,void 0))}isFetching(t){return T(this,ue).findAll({...t,fetchStatus:"fetching"}).length}isMutating(t){return T(this,vn).findAll({...t,status:"pending"}).length}getQueryData(t){var r;const e=this.defaultQueryOptions({queryKey:t});return(r=T(this,ue).get(e.queryHash))==null?void 0:r.state.data}ensureQueryData(t){const e=this.defaultQueryOptions(t),r=T(this,ue).build(this,e),o=r.state.data;return o===void 0?this.fetchQuery(t):(t.revalidateIfStale&&r.isStaleByTime(rc(e.staleTime,r))&&this.prefetchQuery(e),Promise.resolve(o))}getQueriesData(t){return T(this,ue).findAll(t).map(({queryKey:e,state:r})=>{const o=r.data;return[e,o]})}setQueryData(t,e,r){const o=this.defaultQueryOptions({queryKey:t}),s=T(this,ue).get(o.queryHash),i=s==null?void 0:s.state.data,l=xk(e,i);if(l!==void 0)return T(this,ue).build(this,o).setData(l,{...r,manual:!0})}setQueriesData(t,e,r){return Oe.batch(()=>T(this,ue).findAll(t).map(({queryKey:o})=>[o,this.setQueryData(o,e,r)]))}getQueryState(t){var r;const e=this.defaultQueryOptions({queryKey:t});return(r=T(this,ue).get(e.queryHash))==null?void 0:r.state}removeQueries(t){const e=T(this,ue);Oe.batch(()=>{e.findAll(t).forEach(r=>{e.remove(r)})})}resetQueries(t,e){const r=T(this,ue);return Oe.batch(()=>(r.findAll(t).forEach(o=>{o.reset()}),this.refetchQueries({type:"active",...t},e)))}cancelQueries(t,e={}){const r={revert:!0,...e},o=Oe.batch(()=>T(this,ue).findAll(t).map(s=>s.cancel(r)));return Promise.all(o).then(xt).catch(xt)}invalidateQueries(t,e={}){return Oe.batch(()=>(T(this,ue).findAll(t).forEach(r=>{r.invalidate()}),(t==null?void 0:t.refetchType)==="none"?Promise.resolve():this.refetchQueries({...t,type:(t==null?void 0:t.refetchType)??(t==null?void 0:t.type)??"active"},e)))}refetchQueries(t,e={}){const r={...e,cancelRefetch:e.cancelRefetch??!0},o=Oe.batch(()=>T(this,ue).findAll(t).filter(s=>!s.isDisabled()&&!s.isStatic()).map(s=>{let i=s.fetch(void 0,r);return r.throwOnError||(i=i.catch(xt)),s.state.fetchStatus==="paused"?Promise.resolve():i}));return Promise.all(o).then(xt)}fetchQuery(t){const e=this.defaultQueryOptions(t);e.retry===void 0&&(e.retry=!1);const r=T(this,ue).build(this,e);return r.isStaleByTime(rc(e.staleTime,r))?r.fetch(e):Promise.resolve(r.state.data)}prefetchQuery(t){return this.fetchQuery(t).then(xt).catch(xt)}fetchInfiniteQuery(t){return t._type="infinite",this.fetchQuery(t)}prefetchInfiniteQuery(t){return this.fetchInfiniteQuery(t).then(xt).catch(xt)}ensureInfiniteQueryData(t){return t._type="infinite",this.ensureQueryData(t)}resumePausedMutations(){return Di.isOnline()?T(this,vn).resumePausedMutations():Promise.resolve()}getQueryCache(){return T(this,ue)}getMutationCache(){return T(this,vn)}getDefaultOptions(){return T(this,yn)}setDefaultOptions(t){B(this,yn,t)}setQueryDefaults(t,e){T(this,Jr).set(os(t),{queryKey:t,defaultOptions:e})}getQueryDefaults(t){const e=[...T(this,Jr).values()],r={};return e.forEach(o=>{ss(t,o.queryKey)&&Object.assign(r,o.defaultOptions)}),r}setMutationDefaults(t,e){T(this,Kr).set(os(t),{mutationKey:t,defaultOptions:e})}getMutationDefaults(t){const e=[...T(this,Kr).values()],r={};return e.forEach(o=>{ss(t,o.mutationKey)&&Object.assign(r,o.defaultOptions)}),r}defaultQueryOptions(t){if(t._defaulted)return t;const e={...T(this,yn).queries,...this.getQueryDefaults(t.queryKey),...t,_defaulted:!0};return e.queryHash||(e.queryHash=wd(e.queryKey,e)),e.refetchOnReconnect===void 0&&(e.refetchOnReconnect=e.networkMode!=="always"),e.throwOnError===void 0&&(e.throwOnError=!!e.suspense),!e.networkMode&&e.persister&&(e.networkMode="offlineFirst"),e.queryFn===bd&&(e.enabled=!1),e}defaultMutationOptions(t){return t!=null&&t._defaulted?t:{...T(this,yn).mutations,...(t==null?void 0:t.mutationKey)&&this.getMutationDefaults(t.mutationKey),...t,_defaulted:!0}}clear(){T(this,ue).clear(),T(this,vn).clear()}},ue=new WeakMap,vn=new WeakMap,yn=new WeakMap,Jr=new WeakMap,Kr=new WeakMap,jn=new WeakMap,Gr=new WeakMap,Qr=new WeakMap,lp),Wk=v.createContext(void 0),$k=({client:t,children:e})=>(v.useEffect(()=>(t.mount(),()=>{t.unmount()}),[t]),n.jsx(Wk.Provider,{value:t,children:e}));/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function is(){return is=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},is.apply(this,arguments)}var kn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(kn||(kn={}));const wh="popstate";function Hk(t){t===void 0&&(t={});function e(o,s){let{pathname:i,search:l,hash:a}=o.location;return ic("",{pathname:i,search:l,hash:a},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function r(o,s){return typeof s=="string"?s:Fi(s)}return Vk(e,r,null,t)}function ge(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function kd(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Uk(){return Math.random().toString(36).substr(2,8)}function bh(t,e){return{usr:t.state,key:t.key,idx:e}}function ic(t,e,r,o){return r===void 0&&(r=null),is({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?po(e):e,{state:r,key:e&&e.key||o||Uk()})}function Fi(t){let{pathname:e="/",search:r="",hash:o=""}=t;return r&&r!=="?"&&(e+=r.charAt(0)==="?"?r:"?"+r),o&&o!=="#"&&(e+=o.charAt(0)==="#"?o:"#"+o),e}function po(t){let e={};if(t){let r=t.indexOf("#");r>=0&&(e.hash=t.substr(r),t=t.substr(0,r));let o=t.indexOf("?");o>=0&&(e.search=t.substr(o),t=t.substr(0,o)),t&&(e.pathname=t)}return e}function Vk(t,e,r,o){o===void 0&&(o={});let{window:s=document.defaultView,v5Compat:i=!1}=o,l=s.history,a=kn.Pop,c=null,d=u();d==null&&(d=0,l.replaceState(is({},l.state,{idx:d}),""));function u(){return(l.state||{idx:null}).idx}function p(){a=kn.Pop;let b=u(),g=b==null?null:b-d;d=b,c&&c({action:a,location:y.location,delta:g})}function m(b,g){a=kn.Push;let f=ic(y.location,b,g);d=u()+1;let x=bh(f,d),j=y.createHref(f);try{l.pushState(x,"",j)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;s.location.assign(j)}i&&c&&c({action:a,location:y.location,delta:1})}function h(b,g){a=kn.Replace;let f=ic(y.location,b,g);d=u();let x=bh(f,d),j=y.createHref(f);l.replaceState(x,"",j),i&&c&&c({action:a,location:y.location,delta:0})}function w(b){let g=s.location.origin!=="null"?s.location.origin:s.location.href,f=typeof b=="string"?b:Fi(b);return f=f.replace(/ $/,"%20"),ge(g,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,g)}let y={get action(){return a},get location(){return t(s,l)},listen(b){if(c)throw new Error("A history only accepts one active listener");return s.addEventListener(wh,p),c=b,()=>{s.removeEventListener(wh,p),c=null}},createHref(b){return e(s,b)},createURL:w,encodeLocation(b){let g=w(b);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:m,replace:h,go(b){return l.go(b)}};return y}var kh;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(kh||(kh={}));function qk(t,e,r){return r===void 0&&(r="/"),Jk(t,e,r)}function Jk(t,e,r,o){let s=typeof e=="string"?po(e):e,i=Sd(s.pathname||"/",r);if(i==null)return null;let l=Gg(t);Kk(l);let a=null;for(let c=0;a==null&&c<l.length;++c){let d=i1(i);a=r1(l[c],d)}return a}function Gg(t,e,r,o){e===void 0&&(e=[]),r===void 0&&(r=[]),o===void 0&&(o="");let s=(i,l,a)=>{let c={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:l,route:i};c.relativePath.startsWith("/")&&(ge(c.relativePath.startsWith(o),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+o+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(o.length));let d=Rn([o,c.relativePath]),u=r.concat(c);i.children&&i.children.length>0&&(ge(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),Gg(i.children,e,u,d)),!(i.path==null&&!i.index)&&e.push({path:d,score:t1(d,i.index),routesMeta:u})};return t.forEach((i,l)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))s(i,l);else for(let c of Qg(i.path))s(i,l,c)}),e}function Qg(t){let e=t.split("/");if(e.length===0)return[];let[r,...o]=e,s=r.endsWith("?"),i=r.replace(/\?$/,"");if(o.length===0)return s?[i,""]:[i];let l=Qg(o.join("/")),a=[];return a.push(...l.map(c=>c===""?i:[i,c].join("/"))),s&&a.push(...l),a.map(c=>t.startsWith("/")&&c===""?"/":c)}function Kk(t){t.sort((e,r)=>e.score!==r.score?r.score-e.score:n1(e.routesMeta.map(o=>o.childrenIndex),r.routesMeta.map(o=>o.childrenIndex)))}const Gk=/^:[\w-]+$/,Qk=3,Yk=2,Xk=1,Zk=10,e1=-2,Sh=t=>t==="*";function t1(t,e){let r=t.split("/"),o=r.length;return r.some(Sh)&&(o+=e1),e&&(o+=Yk),r.filter(s=>!Sh(s)).reduce((s,i)=>s+(Gk.test(i)?Qk:i===""?Xk:Zk),o)}function n1(t,e){return t.length===e.length&&t.slice(0,-1).every((o,s)=>o===e[s])?t[t.length-1]-e[e.length-1]:0}function r1(t,e,r){let{routesMeta:o}=t,s={},i="/",l=[];for(let a=0;a<o.length;++a){let c=o[a],d=a===o.length-1,u=i==="/"?e:e.slice(i.length)||"/",p=o1({path:c.relativePath,caseSensitive:c.caseSensitive,end:d},u),m=c.route;if(!p)return null;Object.assign(s,p.params),l.push({params:s,pathname:Rn([i,p.pathname]),pathnameBase:u1(Rn([i,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(i=Rn([i,p.pathnameBase]))}return l}function o1(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[r,o]=s1(t.path,t.caseSensitive,t.end),s=e.match(r);if(!s)return null;let i=s[0],l=i.replace(/(.)\/+$/,"$1"),a=s.slice(1);return{params:o.reduce((d,u,p)=>{let{paramName:m,isOptional:h}=u;if(m==="*"){let y=a[p]||"";l=i.slice(0,i.length-y.length).replace(/(.)\/+$/,"$1")}const w=a[p];return h&&!w?d[m]=void 0:d[m]=(w||"").replace(/%2F/g,"/"),d},{}),pathname:i,pathnameBase:l,pattern:t}}function s1(t,e,r){e===void 0&&(e=!1),r===void 0&&(r=!0),kd(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let o=[],s="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,a,c)=>(o.push({paramName:a,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(o.push({paramName:"*"}),s+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?s+="\\/*$":t!==""&&t!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),o]}function i1(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return kd(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Sd(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let r=e.endsWith("/")?e.length-1:e.length,o=t.charAt(r);return o&&o!=="/"?null:t.slice(r)||"/"}const l1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,a1=t=>l1.test(t);function c1(t,e){e===void 0&&(e="/");let{pathname:r,search:o="",hash:s=""}=typeof t=="string"?po(t):t,i;if(r)if(a1(r))i=r;else{if(r.includes("//")){let l=r;r=r.replace(/\/\/+/g,"/"),kd(!1,"Pathnames cannot have embedded double slashes - normalizing "+(l+" -> "+r))}r.startsWith("/")?i=Ch(r.substring(1),"/"):i=Ch(r,e)}else i=e;return{pathname:i,search:h1(o),hash:p1(s)}}function Ch(t,e){let r=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(s=>{s===".."?r.length>1&&r.pop():s!=="."&&r.push(s)}),r.length>1?r.join("/"):"/"}function Xl(t,e,r,o){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(o)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function d1(t){return t.filter((e,r)=>r===0||e.route.path&&e.route.path.length>0)}function Yg(t,e){let r=d1(t);return e?r.map((o,s)=>s===r.length-1?o.pathname:o.pathnameBase):r.map(o=>o.pathnameBase)}function Xg(t,e,r,o){o===void 0&&(o=!1);let s;typeof t=="string"?s=po(t):(s=is({},t),ge(!s.pathname||!s.pathname.includes("?"),Xl("?","pathname","search",s)),ge(!s.pathname||!s.pathname.includes("#"),Xl("#","pathname","hash",s)),ge(!s.search||!s.search.includes("#"),Xl("#","search","hash",s)));let i=t===""||s.pathname==="",l=i?"/":s.pathname,a;if(l==null)a=r;else{let p=e.length-1;if(!o&&l.startsWith("..")){let m=l.split("/");for(;m[0]==="..";)m.shift(),p-=1;s.pathname=m.join("/")}a=p>=0?e[p]:"/"}let c=c1(s,a),d=l&&l!=="/"&&l.endsWith("/"),u=(i||l===".")&&r.endsWith("/");return!c.pathname.endsWith("/")&&(d||u)&&(c.pathname+="/"),c}const Rn=t=>t.join("/").replace(/\/\/+/g,"/"),u1=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),h1=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,p1=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function f1(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Zg=["post","put","patch","delete"];new Set(Zg);const m1=["get",...Zg];new Set(m1);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ls(){return ls=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},ls.apply(this,arguments)}const Cd=v.createContext(null),g1=v.createContext(null),fr=v.createContext(null),pl=v.createContext(null),$n=v.createContext({outlet:null,matches:[],isDataRoute:!1}),ex=v.createContext(null);function x1(t,e){let{relative:r}=e===void 0?{}:e;ys()||ge(!1);let{basename:o,navigator:s}=v.useContext(fr),{hash:i,pathname:l,search:a}=nx(t,{relative:r}),c=l;return o!=="/"&&(c=l==="/"?o:Rn([o,l])),s.createHref({pathname:c,search:a,hash:i})}function ys(){return v.useContext(pl)!=null}function js(){return ys()||ge(!1),v.useContext(pl).location}function tx(t){v.useContext(fr).static||v.useLayoutEffect(t)}function v1(){let{isDataRoute:t}=v.useContext($n);return t?R1():y1()}function y1(){ys()||ge(!1);let t=v.useContext(Cd),{basename:e,future:r,navigator:o}=v.useContext(fr),{matches:s}=v.useContext($n),{pathname:i}=js(),l=JSON.stringify(Yg(s,r.v7_relativeSplatPath)),a=v.useRef(!1);return tx(()=>{a.current=!0}),v.useCallback(function(d,u){if(u===void 0&&(u={}),!a.current)return;if(typeof d=="number"){o.go(d);return}let p=Xg(d,JSON.parse(l),i,u.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:Rn([e,p.pathname])),(u.replace?o.replace:o.push)(p,u.state,u)},[e,o,l,i,t])}function j1(){let{matches:t}=v.useContext($n),e=t[t.length-1];return e?e.params:{}}function nx(t,e){let{relative:r}=e===void 0?{}:e,{future:o}=v.useContext(fr),{matches:s}=v.useContext($n),{pathname:i}=js(),l=JSON.stringify(Yg(s,o.v7_relativeSplatPath));return v.useMemo(()=>Xg(t,JSON.parse(l),i,r==="path"),[t,l,i,r])}function w1(t,e){return b1(t,e)}function b1(t,e,r,o){ys()||ge(!1);let{navigator:s}=v.useContext(fr),{matches:i}=v.useContext($n),l=i[i.length-1],a=l?l.params:{};l&&l.pathname;let c=l?l.pathnameBase:"/";l&&l.route;let d=js(),u;if(e){var p;let b=typeof e=="string"?po(e):e;c==="/"||(p=b.pathname)!=null&&p.startsWith(c)||ge(!1),u=b}else u=d;let m=u.pathname||"/",h=m;if(c!=="/"){let b=c.replace(/^\//,"").split("/");h="/"+m.replace(/^\//,"").split("/").slice(b.length).join("/")}let w=qk(t,{pathname:h}),y=N1(w&&w.map(b=>Object.assign({},b,{params:Object.assign({},a,b.params),pathname:Rn([c,s.encodeLocation?s.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?c:Rn([c,s.encodeLocation?s.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),i,r,o);return e&&y?v.createElement(pl.Provider,{value:{location:ls({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:kn.Pop}},y):y}function k1(){let t=M1(),e=f1(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),r=t instanceof Error?t.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return v.createElement(v.Fragment,null,v.createElement("h2",null,"Unexpected Application Error!"),v.createElement("h3",{style:{fontStyle:"italic"}},e),r?v.createElement("pre",{style:s},r):null,null)}const S1=v.createElement(k1,null);class C1 extends v.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,r){return r.location!==e.location||r.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:r.error,location:r.location,revalidation:e.revalidation||r.revalidation}}componentDidCatch(e,r){console.error("React Router caught the following error during render",e,r)}render(){return this.state.error!==void 0?v.createElement($n.Provider,{value:this.props.routeContext},v.createElement(ex.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function T1(t){let{routeContext:e,match:r,children:o}=t,s=v.useContext(Cd);return s&&s.static&&s.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=r.route.id),v.createElement($n.Provider,{value:e},o)}function N1(t,e,r,o){var s;if(e===void 0&&(e=[]),r===void 0&&(r=null),o===void 0&&(o=null),t==null){var i;if(!r)return null;if(r.errors)t=r.matches;else if((i=o)!=null&&i.v7_partialHydration&&e.length===0&&!r.initialized&&r.matches.length>0)t=r.matches;else return null}let l=t,a=(s=r)==null?void 0:s.errors;if(a!=null){let u=l.findIndex(p=>p.route.id&&(a==null?void 0:a[p.route.id])!==void 0);u>=0||ge(!1),l=l.slice(0,Math.min(l.length,u+1))}let c=!1,d=-1;if(r&&o&&o.v7_partialHydration)for(let u=0;u<l.length;u++){let p=l[u];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(d=u),p.route.id){let{loaderData:m,errors:h}=r,w=p.route.loader&&m[p.route.id]===void 0&&(!h||h[p.route.id]===void 0);if(p.route.lazy||w){c=!0,d>=0?l=l.slice(0,d+1):l=[l[0]];break}}}return l.reduceRight((u,p,m)=>{let h,w=!1,y=null,b=null;r&&(h=a&&p.route.id?a[p.route.id]:void 0,y=p.route.errorElement||S1,c&&(d<0&&m===0?(_1("route-fallback"),w=!0,b=null):d===m&&(w=!0,b=p.route.hydrateFallbackElement||null)));let g=e.concat(l.slice(0,m+1)),f=()=>{let x;return h?x=y:w?x=b:p.route.Component?x=v.createElement(p.route.Component,null):p.route.element?x=p.route.element:x=u,v.createElement(T1,{match:p,routeContext:{outlet:u,matches:g,isDataRoute:r!=null},children:x})};return r&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?v.createElement(C1,{location:r.location,revalidation:r.revalidation,component:y,error:h,children:f(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):f()},null)}var rx=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(rx||{}),ox=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(ox||{});function P1(t){let e=v.useContext(Cd);return e||ge(!1),e}function E1(t){let e=v.useContext(g1);return e||ge(!1),e}function A1(t){let e=v.useContext($n);return e||ge(!1),e}function sx(t){let e=A1(),r=e.matches[e.matches.length-1];return r.route.id||ge(!1),r.route.id}function M1(){var t;let e=v.useContext(ex),r=E1(),o=sx();return e!==void 0?e:(t=r.errors)==null?void 0:t[o]}function R1(){let{router:t}=P1(rx.UseNavigateStable),e=sx(ox.UseNavigateStable),r=v.useRef(!1);return tx(()=>{r.current=!0}),v.useCallback(function(s,i){i===void 0&&(i={}),r.current&&(typeof s=="number"?t.navigate(s):t.navigate(s,ls({fromRouteId:e},i)))},[t,e])}const Th={};function _1(t,e,r){Th[t]||(Th[t]=!0)}function I1(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function ai(t){ge(!1)}function O1(t){let{basename:e="/",children:r=null,location:o,navigationType:s=kn.Pop,navigator:i,static:l=!1,future:a}=t;ys()&&ge(!1);let c=e.replace(/^\/*/,"/"),d=v.useMemo(()=>({basename:c,navigator:i,static:l,future:ls({v7_relativeSplatPath:!1},a)}),[c,a,i,l]);typeof o=="string"&&(o=po(o));let{pathname:u="/",search:p="",hash:m="",state:h=null,key:w="default"}=o,y=v.useMemo(()=>{let b=Sd(u,c);return b==null?null:{location:{pathname:b,search:p,hash:m,state:h,key:w},navigationType:s}},[c,u,p,m,h,w,s]);return y==null?null:v.createElement(fr.Provider,{value:d},v.createElement(pl.Provider,{children:r,value:y}))}function L1(t){let{children:e,location:r}=t;return w1(lc(e),r)}new Promise(()=>{});function lc(t,e){e===void 0&&(e=[]);let r=[];return v.Children.forEach(t,(o,s)=>{if(!v.isValidElement(o))return;let i=[...e,s];if(o.type===v.Fragment){r.push.apply(r,lc(o.props.children,i));return}o.type!==ai&&ge(!1),!o.props.index||!o.props.children||ge(!1);let l={id:o.props.id||i.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,loader:o.props.loader,action:o.props.action,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(l.children=lc(o.props.children,i)),r.push(l)}),r}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ac(){return ac=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},ac.apply(this,arguments)}function D1(t,e){if(t==null)return{};var r={},o=Object.keys(t),s,i;for(i=0;i<o.length;i++)s=o[i],!(e.indexOf(s)>=0)&&(r[s]=t[s]);return r}function F1(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function B1(t,e){return t.button===0&&(!e||e==="_self")&&!F1(t)}const z1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],W1="6";try{window.__reactRouterVersion=W1}catch{}const $1="startTransition",Nh=mc[$1];function H1(t){let{basename:e,children:r,future:o,window:s}=t,i=v.useRef();i.current==null&&(i.current=Hk({window:s,v5Compat:!0}));let l=i.current,[a,c]=v.useState({action:l.action,location:l.location}),{v7_startTransition:d}=o||{},u=v.useCallback(p=>{d&&Nh?Nh(()=>c(p)):c(p)},[c,d]);return v.useLayoutEffect(()=>l.listen(u),[l,u]),v.useEffect(()=>I1(o),[o]),v.createElement(O1,{basename:e,children:r,location:a.location,navigationType:a.action,navigator:l,future:o})}const U1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",V1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,cc=v.forwardRef(function(e,r){let{onClick:o,relative:s,reloadDocument:i,replace:l,state:a,target:c,to:d,preventScrollReset:u,viewTransition:p}=e,m=D1(e,z1),{basename:h}=v.useContext(fr),w,y=!1;if(typeof d=="string"&&V1.test(d)&&(w=d,U1))try{let x=new URL(window.location.href),j=d.startsWith("//")?new URL(x.protocol+d):new URL(d),k=Sd(j.pathname,h);j.origin===x.origin&&k!=null?d=k+j.search+j.hash:y=!0}catch{}let b=x1(d,{relative:s}),g=q1(d,{replace:l,state:a,target:c,preventScrollReset:u,relative:s,viewTransition:p});function f(x){o&&o(x),x.defaultPrevented||g(x)}return v.createElement("a",ac({},m,{href:w||b,onClick:y||i?o:f,ref:r,target:c}))});var Ph;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Ph||(Ph={}));var Eh;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Eh||(Eh={}));function q1(t,e){let{target:r,replace:o,state:s,preventScrollReset:i,relative:l,viewTransition:a}=e===void 0?{}:e,c=v1(),d=js(),u=nx(t,{relative:l});return v.useCallback(p=>{if(B1(p,r)){p.preventDefault();let m=o!==void 0?o:Fi(d)===Fi(u);c(t,{replace:m,state:s,preventScrollReset:i,relative:l,viewTransition:a})}},[d,c,u,o,s,r,t,i,l,a])}const J1=ud("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function ix({className:t,variant:e,...r}){return n.jsx("div",{className:Be(J1({variant:e}),t),...r})}const K1=()=>n.jsxs("section",{className:"relative overflow-hidden py-20 px-6",children:[n.jsx("div",{className:"absolute inset-0 gradient-hero opacity-10"}),n.jsxs("div",{className:"relative max-w-4xl mx-auto text-center animate-fade-in",children:[n.jsx("div",{className:"flex justify-center mb-6",children:n.jsx(ix,{variant:"secondary",className:"px-4 py-2 text-sm font-medium",children:"Developer Blog"})}),n.jsx("h1",{className:"font-playfair text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight",children:"Namita Malik"}),n.jsxs("div",{className:"flex items-center justify-center gap-6 text-xl text-muted-foreground mb-8 font-medium",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx(nw,{className:"h-5 w-5 text-primary"}),n.jsx("span",{children:"Learn."})]}),n.jsx("div",{className:"w-1 h-1 bg-muted-foreground rounded-full"}),n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx(uw,{className:"h-5 w-5 text-primary"}),n.jsx("span",{children:"Think."})]}),n.jsx("div",{className:"w-1 h-1 bg-muted-foreground rounded-full"}),n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx(pw,{className:"h-5 w-5 text-primary"}),n.jsx("span",{children:"Engineer."})]}),n.jsx("div",{className:"w-1 h-1 bg-muted-foreground rounded-full"}),n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx(Zm,{className:"h-5 w-5 text-primary"}),n.jsx("span",{children:"Share."})]})]}),n.jsx("p",{className:"text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8",children:"Writing about software engineering, architecture, systems thinking, and modern web development."}),n.jsxs("div",{className:"flex items-center justify-center gap-6",children:[n.jsx("a",{href:"https://github.com/namitamalik",target:"_blank",rel:"noopener noreferrer",className:"p-3 rounded-full border border-border/50 hover:border-primary/50 hover:bg-accent/10 transition-smooth group","aria-label":"GitHub Profile",children:n.jsx(Ym,{className:"h-5 w-5 text-muted-foreground group-hover:text-primary transition-smooth"})}),n.jsx("a",{href:"https://twitter.com/nm_1304",target:"_blank",rel:"noopener noreferrer",className:"p-3 rounded-full border border-border/50 hover:border-primary/50 hover:bg-accent/10 transition-smooth group","aria-label":"Twitter Profile",children:n.jsx(eg,{className:"h-5 w-5 text-muted-foreground group-hover:text-primary transition-smooth"})}),n.jsx("a",{href:"https://linkedin.com/in/namitamalik",target:"_blank",rel:"noopener noreferrer",className:"p-3 rounded-full border border-border/50 hover:border-primary/50 hover:bg-accent/10 transition-smooth group","aria-label":"LinkedIn Profile",children:n.jsx(Xm,{className:"h-5 w-5 text-muted-foreground group-hover:text-primary transition-smooth"})})]})]})]}),lx=v.forwardRef(({className:t,...e},r)=>n.jsx("div",{ref:r,className:Be("rounded-lg border bg-card text-card-foreground shadow-sm",t),...e}));lx.displayName="Card";const ax=v.forwardRef(({className:t,...e},r)=>n.jsx("div",{ref:r,className:Be("flex flex-col space-y-1.5 p-6",t),...e}));ax.displayName="CardHeader";const cx=v.forwardRef(({className:t,...e},r)=>n.jsx("h3",{ref:r,className:Be("text-2xl font-semibold leading-none tracking-tight",t),...e}));cx.displayName="CardTitle";const G1=v.forwardRef(({className:t,...e},r)=>n.jsx("p",{ref:r,className:Be("text-sm text-muted-foreground",t),...e}));G1.displayName="CardDescription";const dx=v.forwardRef(({className:t,...e},r)=>n.jsx("div",{ref:r,className:Be("p-6 pt-0",t),...e}));dx.displayName="CardContent";const Q1=v.forwardRef(({className:t,...e},r)=>n.jsx("div",{ref:r,className:Be("flex items-center p-6 pt-0",t),...e}));Q1.displayName="CardFooter";const Y1=({category:t,posts:e,icon:r,description:o})=>n.jsxs(lx,{className:"gradient-card shadow-card transition-smooth hover:shadow-elegant hover:scale-[1.02] group",children:[n.jsxs(ax,{className:"pb-4",children:[n.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[r&&n.jsx("div",{className:"text-primary",children:r}),n.jsx(cx,{className:"font-playfair text-xl text-primary group-hover:text-accent transition-smooth",children:t})]}),o&&n.jsx("p",{className:"text-muted-foreground text-sm leading-relaxed",children:o}),n.jsxs(ix,{variant:"secondary",className:"w-fit",children:[e.length," ",e.length===1?"post":"posts"]})]}),n.jsx(dx,{className:"space-y-3",children:e.map((s,i)=>s.url.startsWith("http")?n.jsxs("a",{href:s.url,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 p-3 rounded-lg border border-border/50 hover:border-primary/30 hover:bg-accent/10 transition-smooth group/link",children:[n.jsx("div",{className:"flex-1",children:n.jsx("h4",{className:"font-medium text-sm leading-snug text-foreground group-hover/link:text-primary transition-smooth",children:s.title})}),n.jsx(lw,{className:"h-4 w-4 text-muted-foreground group-hover/link:text-primary transition-smooth"})]},i):n.jsxs(cc,{to:s.url,className:"flex items-center gap-2 p-3 rounded-lg border border-border/50 hover:border-primary/30 hover:bg-accent/10 transition-smooth group/link",children:[n.jsx("div",{className:"flex-1",children:n.jsx("h4",{className:"font-medium text-sm leading-snug text-foreground group-hover/link:text-primary transition-smooth",children:s.title})}),n.jsx(tw,{className:"h-4 w-4 text-muted-foreground group-hover/link:text-primary transition-smooth"})]},i))})]}),X1=()=>{const t=[{category:"Software Architecture",icon:n.jsx(ow,{className:"h-6 w-6"}),description:"System design principles, architectural patterns, and scalable software design.",posts:[{title:"Dear Future Me: Understand the Layers Before You Add Them",url:"/understand-the-layers-before-you-add-them/",category:"Software Architecture"}]},{category:"Leadership",icon:n.jsx(cw,{className:"h-6 w-6"}),description:"Reflections on leadership, culture, and the people who shape how we work.",posts:[{title:"Kindness, Firmness, and the Leaders We Remember",url:"/kindness-firmness-and-the-leaders-we-remember/",category:"Leadership"}]},{category:"AI & Engineering",icon:n.jsx(rw,{className:"h-6 w-6"}),description:"Reflections on AI, software engineering practice, and the craft beyond coding.",posts:[{title:"AI Killed Coding, Not Software Engineering",url:"/ai-killed-coding-not-software-engineering/",category:"AI & Engineering"}]},{category:"Angular",icon:n.jsx(dw,{className:"h-6 w-6"}),description:"Modern Angular development patterns, best practices, and advanced techniques.",posts:[{title:"Conditionally Loading modules in Angular",url:"/loading-modules-conditionally-in-angular/",category:"Angular(2+)"},{title:"Lazy Loading with Angular2 Routing",url:"/lazy-loading-with-angular2-routing/",category:"Angular(2+)"},{title:"Realtime Update in Angular2",url:"/realtime-update-in-angular2/",category:"Angular(2+)"},{title:"Fetching Data in Angular2",url:"/fetching-data-in-angular2/",category:"Angular(2+)"},{title:"ViewChild in Angular2",url:"/viewchild-in-angular2/",category:"Angular(2+)"},{title:"Services In Angular2",url:"/services-in-angular2/",category:"Angular(2+)"},{title:"NgRepeat vs ngFor",url:"/ngrepeat-vs-ngfor/",category:"Angular(2+)"}]},{category:"RxJS",icon:n.jsx(mw,{className:"h-6 w-6"}),description:"Reactive programming with RxJS - operators, patterns, and real-world applications.",posts:[{title:"skipWhile vs filter in RxJS",url:"/skipwhile-vs-filter-in-rxjs/",category:"RxJS"},{title:"throttleTime vs debounceTime",url:"/throttletime-vs-debouncetime-in-rxjs/",category:"RxJS"},{title:"Map vs FlatMap",url:"/map-vs-flatmap/",category:"RxJS"}]},{category:"JavaScript (ES6+)",icon:n.jsx(aw,{className:"h-6 w-6"}),description:"Modern JavaScript features, ES6+ syntax, and functional programming concepts.",posts:[{title:"Spread & Rest Operator in ES6",url:"/spread-and-rest-operator-in-es6/",category:"ECMA6"},{title:"for..of loop in ES6",url:"/for-of-in-ecma6/",category:"ECMA6"}]},{category:"JavaScript Fundamentals",icon:n.jsx(sw,{className:"h-6 w-6"}),description:"Core JavaScript concepts, prototypes, inheritance, and fundamental patterns.",posts:[{title:"Prototype in Javascript",url:"/prototype-in-javascript/",category:"JavaScript"},{title:"Inheritance in JavaScript",url:"/inheritance-in-javascript/",category:"JavaScript"},{title:"JavaScript Inheritance Revisited",url:"/javascript-inheritance-revisited/",category:"JavaScript"},{title:"2 Way Data Binding in Plain Vanilla JavaScript",url:"/2-way-data-binding-in-plain-vanilla-javascript/",category:"JavaScript"},{title:"Hoisting in JavaScript",url:"/hoisting/",category:"JavaScript"}]},{category:"Data Structures",icon:n.jsx(iw,{className:"h-6 w-6"}),description:"Implementation of fundamental data structures and algorithms in JavaScript.",posts:[{title:"Linked List in Javascript",url:"/linked-list-in-javascript/",category:"Data Structures"}]},{category:"AngularJS (Legacy)",icon:n.jsx(hw,{className:"h-6 w-6"}),description:"AngularJS 1.x patterns, testing strategies, and migration insights.",posts:[{title:"Editing JavaScript Object using AngularJS",url:"/editing-javascript-object-using-angularjs/",category:"AngularJS"},{title:"E2E Testing with Protractor",url:"/e2e-testing-with-protractor/",category:"AngularJS"}]}];return n.jsxs("div",{className:"min-h-screen bg-background",children:[n.jsx(K1,{}),n.jsxs("main",{className:"max-w-7xl mx-auto px-6 pb-20",children:[n.jsxs("div",{className:"text-center mb-12 animate-slide-up",children:[n.jsx("h2",{className:"font-playfair text-3xl font-bold text-foreground mb-4",children:"Blog Categories"}),n.jsx("p",{className:"text-muted-foreground max-w-2xl mx-auto",children:"Explore articles organized by technology and topic. Click on any post to read more."})]}),n.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-up",children:t.map((e,r)=>n.jsx("div",{style:{animationDelay:`${r*.1}s`},className:"animate-slide-up",children:n.jsx(Y1,{category:e.category,posts:e.posts,icon:e.icon,description:e.description})},e.category))})]})]})},Z1=()=>{const t=js();return v.useEffect(()=>{console.error("404 Error: User attempted to access non-existent route:",t.pathname)},[t.pathname]),n.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-100",children:n.jsxs("div",{className:"text-center",children:[n.jsx("h1",{className:"text-4xl font-bold mb-4",children:"404"}),n.jsx("p",{className:"text-xl text-gray-600 mb-4",children:"Oops! Page not found"}),n.jsx("a",{href:"/",className:"text-blue-500 hover:text-blue-700 underline",children:"Return to Home"})]})})};function Ah(t){const e={code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"2 Way Data Binding in Plain Vanilla JavaScript"}),`
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
`,n.jsxs(e.p,{children:["| Please note that this is just a small piece of code demonstrating ",n.jsx(e.strong,{children:"2-way Data Binding"})," using ",n.jsx(e.strong,{children:"JavaScript"})," this code can be improved a lot on the basis of element type.e We can also have a ",n.jsx(e.strong,{children:"getter"})," function for getting the value in ",n.jsx(e.code,{children:"$scope.name"}),". But for the sake of simplicity I have deliberately avoided it."]})]})}function eS(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Ah,{...t})}):Ah(t)}const tS=Object.freeze(Object.defineProperty({__proto__:null,default:eS},Symbol.toStringTag,{value:"Module"})),nS="/assets/ai-spaghetti-code-BFOTqgC_.png";function Mh(t){const e={em:"em",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"AI Killed Coding, Not Software Engineering"}),`
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
`,n.jsxs("figure",{className:"my-8",children:[n.jsx("img",{src:nS,alt:"Cartoon of a developer cheering 'Ship it!' as an AI assistant dumps a bucket of spaghetti code onto the desk, surrounded by sticky notes warning about skipped tests, security, and documentation.",className:"w-full rounded-lg shadow-lg",loading:"lazy"}),n.jsx("figcaption",{className:"text-center text-sm text-muted-foreground mt-2 italic",children:n.jsx(e.p,{children:"AI writes the code. You own the consequences."})})]}),`
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
`,n.jsx(e.p,{children:n.jsx(e.em,{children:"But if there’s one consistent pattern, it’s this — we adapt. Messily, imperfectly, but we do."})})]})}function rS(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Mh,{...t})}):Mh(t)}const oS=Object.freeze(Object.defineProperty({__proto__:null,default:rS},Symbol.toStringTag,{value:"Module"}));function Rh(t){const e={blockquote:"blockquote",code:"code",h1:"h1",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"E2E Testing with Protractor"}),`
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
`,n.jsxs(e.p,{children:["In case you want to play with multiple elements, you can use ",n.jsx(e.code,{children:"element.all()"}),". There are certain helper ",n.jsx(e.strong,{children:"functions"}),":",n.jsx(e.code,{children:"count()"})," - which gives the number of elements, ",n.jsx(e.code,{children:"getIndex()"})," - to get an element using index."]})]})}function sS(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Rh,{...t})}):Rh(t)}const iS=Object.freeze(Object.defineProperty({__proto__:null,default:sS},Symbol.toStringTag,{value:"Module"}));function _h(t){const e={code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Editing JavaScript Object using AngularJS"}),`
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
`]})]})}function lS(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(_h,{...t})}):_h(t)}const aS=Object.freeze(Object.defineProperty({__proto__:null,default:lS},Symbol.toStringTag,{value:"Module"}));function Ih(t){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Fetching Data in Angular2"}),`
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
`})})]})}function cS(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Ih,{...t})}):Ih(t)}const dS=Object.freeze(Object.defineProperty({__proto__:null,default:cS},Symbol.toStringTag,{value:"Module"}));function Oh(t){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"for..of loop in ECMA6"}),`
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
`,n.jsxs(e.p,{children:["A working demo is available ",n.jsx(e.a,{href:"https://repl.it/@namitamalik/SeagreenLoathsomeAustralianshelduck",children:"here"}),"."]})]})}function uS(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Oh,{...t})}):Oh(t)}const hS=Object.freeze(Object.defineProperty({__proto__:null,default:uS},Symbol.toStringTag,{value:"Module"}));function Lh(t){const e={code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Hoisting in JavaScript"}),`
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
`,n.jsxs(e.p,{children:["This was all about ",n.jsx(e.strong,{children:"Hoisting"})," in ",n.jsx(e.strong,{children:"JavaScript"}),"."]})]})}function pS(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Lh,{...t})}):Lh(t)}const fS=Object.freeze(Object.defineProperty({__proto__:null,default:pS},Symbol.toStringTag,{value:"Module"}));function Dh(t){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Inheritance in JavaScript"}),`
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
`,n.jsxs(e.p,{children:["We are a little unfortunate that we don't have the ",n.jsx(e.strong,{children:"extend"})," keyword in ",n.jsx(e.strong,{children:"JavaScript"})," as available in ",n.jsx(e.strong,{children:"Java"}),", but we aren't that ",n.jsx(e.strong,{children:"unlucky"})," as we have ",n.jsx(e.strong,{children:n.jsx(e.a,{href:"http://namitamalik.github.io/Prototype-in-JavaScript/",children:"prototype"})})," to our rescue!"]})]})}function mS(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Dh,{...t})}):Dh(t)}const gS=Object.freeze(Object.defineProperty({__proto__:null,default:mS},Symbol.toStringTag,{value:"Module"}));function Fh(t){const e={a:"a",blockquote:"blockquote",code:"code",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.p,{children:"#JavaScript Inheritance Revisited"}),`
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
`,n.jsx(e.p,{children:"There are a lot of ways to achieve a single thing, but it depends upon the need of the project and the situation that one can decide which way to adopt!"})]})}function xS(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Fh,{...t})}):Fh(t)}const vS=Object.freeze(Object.defineProperty({__proto__:null,default:xS},Symbol.toStringTag,{value:"Module"})),yS="/assets/kindness-firmness-leadership-cNmeYPJP.png";function Bh(t){const e={blockquote:"blockquote",em:"em",h1:"h1",hr:"hr",p:"p",strong:"strong",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Kindness, Firmness, and the Leaders We Remember"}),`
`,n.jsxs("figure",{className:"my-8",children:[n.jsx("img",{src:yS,alt:"A mentor encouraging a junior teammate at their desk, with notes about respect, kindness, and trust on the wall",className:"w-full rounded-lg shadow-lg"}),n.jsx("figcaption",{className:"text-center text-sm text-muted-foreground mt-2 italic",children:n.jsx(e.p,{children:"Good thinking. Keep going. — the words that shape careers."})})]}),`
`,n.jsx(e.p,{children:"The more experienced I become, the more I admire leaders who balance kindness with firmness."}),`
`,n.jsx(e.p,{children:"Not performative niceness. Not avoiding hard conversations. But calm clarity, empathy, and conviction working together."}),`
`,n.jsx(e.p,{children:"Some of the most impactful leaders in my career were exactly like this. My first manager at an early-stage startup treated everyone with respect — even a complete beginner like me. He listened to opinions seriously, even when they probably made little sense at the time. Yet he always encouraged curiosity and participation instead of shutting it down."}),`
`,n.jsx(e.p,{children:"That respect made me want to work harder, learn faster, and do better."}),`
`,n.jsx(e.p,{children:"Few years later I reported to a manager who was genuinely nice. Respectful, polite, non-controlling, and never harsh. But over time, I realised that kindness in leadership is not just about being pleasant or staying out of people's way. At that stage in my career, I still needed guidance, challenge, direction, and active mentorship. I needed someone who would work closely with me, help sharpen my thinking, open new possibilities, and occasionally push me beyond my comfort zone."}),`
`,n.jsx(e.p,{children:"He completed every process-required meeting, but there was little real involvement beyond that."}),`
`,n.jsx(e.p,{children:"And that taught me another important distinction: Being non-toxic is good. But meaningful leadership also requires presence, engagement, and investment in people's growth."}),`
`,n.jsx(e.p,{children:"Real kindness in leadership is not passive. It is intentional."}),`
`,n.jsx(e.p,{children:"Years later, another leader in Sweden told me something I still remember:"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"The one who works will make mistakes."}),`
`]}),`
`,n.jsx(e.p,{children:"He never wanted people to endlessly apologise for mistakes. Instead, he encouraged reflection: Did we have the right checks and balances? What can we improve in the system and process?"}),`
`,n.jsx(e.p,{children:`That stayed with me because it highlighted the difference between accountability and blame. Blame focuses on who failed. Accountability focuses on what can be learned, improved, and owned going forward.
One creates fear. The other creates growth.`}),`
`,n.jsx(e.p,{children:"That kind of leadership changes how individuals feel, how teams work together, and even how teams collaborate with other teams."}),`
`,n.jsx(e.p,{children:"People become more confident because mistakes are treated as learning opportunities, not humiliation. Individuals speak up more openly because psychological safety replaces fear. Transparency improves because people no longer feel the need to hide problems, uncertainties, or disagreements."}),`
`,n.jsx(e.p,{children:"There is a sense of safety underneath it all — not the absence of accountability, but the confidence that mistakes will be handled constructively rather than punitively."}),`
`,n.jsx(e.p,{children:"Ironically, kindness in leadership often creates stronger accountability — not weaker. When people feel respected, they tend to take more ownership, collaborate better, and grow faster."}),`
`,n.jsx(e.p,{children:"What made these leaders exceptional was that kindness never came at the cost of standards. They could be direct when needed, gave honest feedback, challenged weak thinking and expected ownership and accountability. But the firmness never felt humiliating or fear-driven. You walked away feeling challenged, not diminished. Motivated to improve, not scared to fail. That balance is incredibly rare. Because true kindness in leadership is not about avoiding discomfort. Sometimes it means having the difficult conversation clearly, respectfully, and at the right time."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Kindness is not softness. Firmness is not harshness. The best leaders know how to combine both."})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.p,{children:n.jsx(e.em,{children:"PS: This comes straight from the heart and from personal reflections across one and a half decades of my career. More than anything, this is a gratitude post for the leaders who have been kind — yet firm — throughout that journey."})}),`
`,n.jsx(e.p,{children:n.jsx(e.em,{children:"Disclaimer: The illustration and parts of the writing were created with the assistance of AI. The reflections, experiences, and views expressed here are entirely personal."})})]})}function jS(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Bh,{...t})}):Bh(t)}const wS=Object.freeze(Object.defineProperty({__proto__:null,default:jS},Symbol.toStringTag,{value:"Module"}));function zh(t){const e={blockquote:"blockquote",code:"code",h1:"h1",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Lazy Loading with Angular2 Routing"}),`
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
I'll be discussing in my upcoming blog..till then Happy Learning!`]})]})}function bS(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(zh,{...t})}):zh(t)}const kS=Object.freeze(Object.defineProperty({__proto__:null,default:bS},Symbol.toStringTag,{value:"Module"}));function Wh(t){const e={blockquote:"blockquote",code:"code",h1:"h1",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Linked List in Javascript"}),`
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
linked list printed which has `,n.jsx(e.code,{children:"6"})," removed from it as we have called ",n.jsx(e.code,{children:"deQueue"})," function to remove node with data/value ",n.jsx(e.code,{children:"6"})," in it."]})]})}function SS(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Wh,{...t})}):Wh(t)}const CS=Object.freeze(Object.defineProperty({__proto__:null,default:SS},Symbol.toStringTag,{value:"Module"}));function $h(t){const e={code:"code",h1:"h1",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Loading Modules Conditionally in Angular"}),`
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
`,n.jsx(e.p,{children:"Well, that's all for this post. Happy Learning!"})]})}function TS(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx($h,{...t})}):$h(t)}const NS=Object.freeze(Object.defineProperty({__proto__:null,default:TS},Symbol.toStringTag,{value:"Module"}));function Hh(t){const e={code:"code",h1:"h1",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Map VS FlatMap"}),`
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
voyage will take us to each one of them.. till then happy learning!`]})]})}function PS(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Hh,{...t})}):Hh(t)}const ES=Object.freeze(Object.defineProperty({__proto__:null,default:PS},Symbol.toStringTag,{value:"Module"}));function Uh(t){const e={blockquote:"blockquote",code:"code",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.p,{children:"#*ngFor in Angular2"}),`
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
`,n.jsxs(e.p,{children:["Now, run open ",n.jsx(e.strong,{children:"index.html"})," in your favourite browser!"]})]})}function AS(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Uh,{...t})}):Uh(t)}const MS=Object.freeze(Object.defineProperty({__proto__:null,default:AS},Symbol.toStringTag,{value:"Module"}));function Vh(t){const e={code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Prototype in JavaScript"}),`
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
`,n.jsxs(e.p,{children:["This is how ",n.jsx(e.strong,{children:"JavaScript"})," is a ",n.jsx(e.strong,{children:"Dynamic"})," language, we tweaked a well defined ",n.jsx(e.strong,{children:"JavaScript"})," object according to our own sweet wish!"]})]})}function RS(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Vh,{...t})}):Vh(t)}const _S=Object.freeze(Object.defineProperty({__proto__:null,default:RS},Symbol.toStringTag,{value:"Module"}));function qh(t){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Realtime Update in Angular2"}),`
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
`]})]})}function IS(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(qh,{...t})}):qh(t)}const OS=Object.freeze(Object.defineProperty({__proto__:null,default:IS},Symbol.toStringTag,{value:"Module"}));function Jh(t){const e={blockquote:"blockquote",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Services In Angular2"}),`
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
`,n.jsxs(e.p,{children:["Hence, this is the major difference between the services in ",n.jsx(e.strong,{children:"Angular 1.x and Angular2"}),"."]})]})}function LS(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Jh,{...t})}):Jh(t)}const DS=Object.freeze(Object.defineProperty({__proto__:null,default:LS},Symbol.toStringTag,{value:"Module"}));function Kh(t){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"skipWhile vs filter in RxJS"}),`
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
`,n.jsx(e.p,{children:"Happy Learning! Happy Sharing!"})]})}function FS(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Kh,{...t})}):Kh(t)}const BS=Object.freeze(Object.defineProperty({__proto__:null,default:FS},Symbol.toStringTag,{value:"Module"}));function Gh(t){const e={blockquote:"blockquote",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Spread and Rest Operator in ES6"}),`
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
`,n.jsx(e.p,{children:"That's all for this blog. Happy Learning folks!"})]})}function zS(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Gh,{...t})}):Gh(t)}const WS=Object.freeze(Object.defineProperty({__proto__:null,default:zS},Symbol.toStringTag,{value:"Module"}));function Qh(t){const e={a:"a",code:"code",em:"em",h1:"h1",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"throttleTime vs debounceTime in RxJS"}),`
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
to use!`})]})}function $S(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Qh,{...t})}):Qh(t)}const HS=Object.freeze(Object.defineProperty({__proto__:null,default:$S},Symbol.toStringTag,{value:"Module"}));function Yh(t){const e={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Dear Future Me: Understand the Layers Before You Add Them"}),`
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
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"What becomes simpler because of this?"})})]})}function US(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Yh,{...t})}):Yh(t)}const VS=Object.freeze(Object.defineProperty({__proto__:null,default:US},Symbol.toStringTag,{value:"Module"}));function Xh(t){const e={code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"ViewChild in Angular2"}),`
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
`,n.jsxs(e.p,{children:["In ",n.jsx(e.strong,{children:"Angular2"})," there are multiple ways of interaction between ",n.jsx(e.strong,{children:"components"}),", ",n.jsx(e.strong,{children:"ViewChild"})," is just one of them!"]})]})}function qS(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Xh,{...t})}):Xh(t)}const JS=Object.freeze(Object.defineProperty({__proto__:null,default:qS},Symbol.toStringTag,{value:"Module"}));var KS=Symbol.for("react.lazy"),Bi=mc[" use ".trim().toString()];function GS(t){return typeof t=="object"&&t!==null&&"then"in t}function ux(t){return t!=null&&typeof t=="object"&&"$$typeof"in t&&t.$$typeof===KS&&"_payload"in t&&GS(t._payload)}function QS(t){const e=XS(t),r=v.forwardRef((o,s)=>{let{children:i,...l}=o;ux(i)&&typeof Bi=="function"&&(i=Bi(i._payload));const a=v.Children.toArray(i),c=a.find(eC);if(c){const d=c.props.children,u=a.map(p=>p===c?v.Children.count(d)>1?v.Children.only(null):v.isValidElement(d)?d.props.children:null:p);return n.jsx(e,{...l,ref:s,children:v.isValidElement(d)?v.cloneElement(d,void 0,u):null})}return n.jsx(e,{...l,ref:s,children:i})});return r.displayName=`${t}.Slot`,r}var YS=QS("Slot");function XS(t){const e=v.forwardRef((r,o)=>{let{children:s,...i}=r;if(ux(s)&&typeof Bi=="function"&&(s=Bi(s._payload)),v.isValidElement(s)){const l=nC(s),a=tC(i,s.props);return s.type!==v.Fragment&&(a.ref=o?nl(o,l):l),v.cloneElement(s,a)}return v.Children.count(s)>1?v.Children.only(null):null});return e.displayName=`${t}.SlotClone`,e}var ZS=Symbol("radix.slottable");function eC(t){return v.isValidElement(t)&&typeof t.type=="function"&&"__radixId"in t.type&&t.type.__radixId===ZS}function tC(t,e){const r={...e};for(const o in e){const s=t[o],i=e[o];/^on[A-Z]/.test(o)?s&&i?r[o]=(...a)=>{const c=i(...a);return s(...a),c}:s&&(r[o]=s):o==="style"?r[o]={...s,...i}:o==="className"&&(r[o]=[s,i].filter(Boolean).join(" "))}return{...t,...r}}function nC(t){var o,s;let e=(o=Object.getOwnPropertyDescriptor(t.props,"ref"))==null?void 0:o.get,r=e&&"isReactWarning"in e&&e.isReactWarning;return r?t.ref:(e=(s=Object.getOwnPropertyDescriptor(t,"ref"))==null?void 0:s.get,r=e&&"isReactWarning"in e&&e.isReactWarning,r?t.props.ref:t.props.ref||t.ref)}const rC=ud("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),hx=v.forwardRef(({className:t,variant:e,size:r,asChild:o=!1,...s},i)=>{const l=o?YS:"button";return n.jsx(l,{className:Be(rC({variant:e,size:r,className:t})),ref:i,...s})});hx.displayName="Button";const oC={"kindness-firmness-and-the-leaders-we-remember":{title:"Kindness, Firmness, and the Leaders We Remember",description:"Reflections on leadership: how kindness paired with firmness, presence, and accountability shapes teams, careers, and the leaders we never forget.",keywords:"leadership, kindness, firmness, mentorship, accountability, psychological safety, engineering management",image:"https://namitamalik.github.io/kindness-firmness-leadership.png"},"ai-killed-coding-not-software-engineering":{title:"AI Killed Coding, Not Software Engineering",description:"Why AI-generated code raises the bar for software engineering — judgment, architecture, and ownership matter more than ever.",keywords:"AI, software engineering, coding, architecture, developer productivity"},"understand-the-layers-before-you-add-them":{title:"Understand the Layers Before You Add Them",description:"A practical take on software architecture: understand existing layers and their purpose before introducing new abstractions.",keywords:"software architecture, layers, abstraction, design"}},Zl={title:"Namita Malik - Developer Blog",description:"Learn. Think. Code. Share. - A technical blog covering Angular, JavaScript, RxJS and web development."},sC=Object.assign({"../posts/2-way-data-binding-in-plain-vanilla-javascript.mdx":tS,"../posts/ai-killed-coding-not-software-engineering.mdx":oS,"../posts/e2e-testing-with-protractor.mdx":iS,"../posts/editing-javascript-object-using-angularjs.mdx":aS,"../posts/fetching-data-in-angular2.mdx":dS,"../posts/for-of-in-ecma6.mdx":hS,"../posts/hoisting.mdx":fS,"../posts/inheritance-in-javascript.mdx":gS,"../posts/javascript-inheritance-revisited.mdx":vS,"../posts/kindness-firmness-and-the-leaders-we-remember.mdx":wS,"../posts/lazy-loading-with-angular2-routing.mdx":kS,"../posts/linked-list-in-javascript.mdx":CS,"../posts/loading-modules-conditionally-in-angular.mdx":NS,"../posts/map-vs-flatmap.mdx":ES,"../posts/ngrepeat-vs-ngfor.mdx":MS,"../posts/prototype-in-javascript.mdx":_S,"../posts/realtime-update-in-angular2.mdx":OS,"../posts/services-in-angular2.mdx":DS,"../posts/skipwhile-vs-filter-in-rxjs.mdx":BS,"../posts/spread-and-rest-operator-in-es6.mdx":WS,"../posts/throttletime-vs-debouncetime-in-rxjs.mdx":HS,"../posts/understand-the-layers-before-you-add-them.mdx":VS,"../posts/viewchild-in-angular2.mdx":JS});function rt(t,e,r){let o=document.head.querySelector(`meta[${t}="${e}"]`);o||(o=document.createElement("meta"),o.setAttribute(t,e),document.head.appendChild(o)),o.setAttribute("content",r)}function iC(t){let e=document.head.querySelector('link[rel="canonical"]');e||(e=document.createElement("link"),e.setAttribute("rel","canonical"),document.head.appendChild(e)),e.setAttribute("href",t)}function lC(){const{slug:t}=j1(),e=`../posts/${t}.mdx`,r=sC[e];if(v.useEffect(()=>{const s=t&&oC[t]||Zl,i=s.title.includes("Namita Malik")?s.title:`${s.title} | Namita Malik`;return document.title=i,rt("name","description",s.description),s.keywords&&rt("name","keywords",s.keywords),rt("property","og:title",i),rt("property","og:description",s.description),rt("property","og:type","article"),rt("property","og:url",window.location.href),s.image&&(rt("property","og:image",s.image),rt("name","twitter:image",s.image)),rt("name","twitter:card","summary_large_image"),rt("name","twitter:title",i),rt("name","twitter:description",s.description),iC(window.location.href),()=>{document.title=Zl.title,rt("name","description",Zl.description)}},[t]),!r)return n.jsx("div",{className:"min-h-screen bg-gradient-subtle flex items-center justify-center",children:n.jsxs("div",{className:"text-center",children:[n.jsx("h1",{className:"text-2xl font-bold text-foreground mb-4",children:"Post not found"}),n.jsx("p",{className:"text-muted-foreground mb-6",children:"The blog post you're looking for doesn't exist."}),n.jsx(cc,{to:"/",children:n.jsxs(hx,{variant:"default",children:[n.jsx(Qu,{className:"mr-2 h-4 w-4"}),"Back to Blog"]})})]})});const o=r.default;return n.jsx("div",{className:"min-h-screen bg-gradient-subtle",children:n.jsxs("div",{className:"container mx-auto px-4 py-8 max-w-4xl",children:[n.jsxs(cc,{to:"/",className:"inline-flex items-center text-primary hover:text-accent transition-smooth mb-8",children:[n.jsx(Qu,{className:"mr-2 h-4 w-4"}),"Back to Blog"]}),n.jsx("div",{className:"text-center mb-8 pb-4 border-b border-border/10",children:n.jsxs("p",{className:"text-muted-foreground text-sm",children:["by ",n.jsx("span",{className:"font-medium text-foreground",children:"Namita Malik"})]})}),n.jsx("article",{className:`prose prose-lg max-w-none mb-16
  prose-headings:text-foreground prose-headings:font-playfair
  prose-h1:text-4xl prose-h1:md:text-5xl prose-h1:font-bold prose-h1:mb-8 prose-h1:pb-6 prose-h1:border-b prose-h1:border-border/30 prose-h1:text-center
  prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:font-semibold prose-h2:mt-8 prose-h2:mb-4
  prose-h3:text-xl prose-h3:md:text-2xl prose-h3:font-medium prose-h3:mt-6 prose-h3:mb-3
  prose-p:text-foreground prose-p:leading-relaxed prose-p:mb-4
  prose-a:text-primary prose-a:no-underline hover:prose-a:text-accent
  prose-blockquote:border-l-primary prose-blockquote:text-muted-foreground
  prose-strong:text-foreground prose-em:text-foreground
  prose-ul:my-4 prose-ol:my-4 prose-li:my-1 prose-code:before:content-none prose-code:after:content-none`,children:n.jsx(o,{})}),n.jsxs("div",{className:"text-center pt-8 border-t border-border/20",children:[n.jsx("p",{className:"text-muted-foreground text-sm mb-4",children:"Connect with me"}),n.jsxs("div",{className:"flex items-center justify-center gap-4",children:[n.jsx("a",{href:"https://github.com/namitamalik",target:"_blank",rel:"noopener noreferrer",className:"p-2 rounded-full hover:bg-accent/10 transition-smooth group","aria-label":"GitHub Profile",children:n.jsx(Ym,{className:"h-5 w-5 text-muted-foreground group-hover:text-primary transition-smooth"})}),n.jsx("a",{href:"https://x.com/nm_1304",target:"_blank",rel:"noopener noreferrer",className:"p-2 rounded-full hover:bg-accent/10 transition-smooth group","aria-label":"Twitter Profile",children:n.jsx(eg,{className:"h-5 w-5 text-muted-foreground group-hover:text-primary transition-smooth"})}),n.jsx("a",{href:"https://linkedin.com/in/namitamalik",target:"_blank",rel:"noopener noreferrer",className:"p-2 rounded-full hover:bg-accent/10 transition-smooth group","aria-label":"LinkedIn Profile",children:n.jsx(Xm,{className:"h-5 w-5 text-muted-foreground group-hover:text-primary transition-smooth"})}),n.jsx("button",{onClick:()=>{var s;return(s=navigator.share)==null?void 0:s.call(navigator,{url:window.location.href,title:document.title})},className:"p-2 rounded-full hover:bg-accent/10 transition-smooth group","aria-label":"Share this post",children:n.jsx(Zm,{className:"h-5 w-5 text-muted-foreground group-hover:text-primary transition-smooth"})})]})]})]})})}const aC=new zk,cC=()=>n.jsx($k,{client:aC,children:n.jsxs(dk,{children:[n.jsx(Yw,{}),n.jsx(Eb,{}),n.jsx(H1,{children:n.jsxs(L1,{children:[n.jsx(ai,{path:"/",element:n.jsx(X1,{})}),n.jsx(ai,{path:"/:slug",element:n.jsx(lC,{})}),n.jsx(ai,{path:"*",element:n.jsx(Z1,{})})]})})]})});km(document.getElementById("root")).render(n.jsx(cC,{}));
