var Yd=t=>{throw TypeError(t)};var Ml=(t,e,r)=>e.has(t)||Yd("Cannot "+r);var T=(t,e,r)=>(Ml(t,e,"read from private field"),r?r.call(t):e.get(t)),G=(t,e,r)=>e.has(t)?Yd("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),W=(t,e,r,o)=>(Ml(t,e,"write to private field"),o?o.call(t,r):e.set(t,r),r),Ie=(t,e,r)=>(Ml(t,e,"access private method"),r);var Hs=(t,e,r,o)=>({set _(s){W(t,e,s,r)},get _(){return T(t,e,o)}});function rv(t,e){for(var r=0;r<e.length;r++){const o=e[r];if(typeof o!="string"&&!Array.isArray(o)){for(const s in o)if(s!=="default"&&!(s in t)){const i=Object.getOwnPropertyDescriptor(o,s);i&&Object.defineProperty(t,s,i.get?i:{enumerable:!0,get:()=>o[s]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}})();function Rp(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Mp={exports:{}},sl={},_p={exports:{}},Q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Es=Symbol.for("react.element"),ov=Symbol.for("react.portal"),sv=Symbol.for("react.fragment"),iv=Symbol.for("react.strict_mode"),lv=Symbol.for("react.profiler"),av=Symbol.for("react.provider"),cv=Symbol.for("react.context"),dv=Symbol.for("react.forward_ref"),uv=Symbol.for("react.suspense"),hv=Symbol.for("react.memo"),pv=Symbol.for("react.lazy"),Xd=Symbol.iterator;function fv(t){return t===null||typeof t!="object"?null:(t=Xd&&t[Xd]||t["@@iterator"],typeof t=="function"?t:null)}var Op={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Lp=Object.assign,Dp={};function vo(t,e,r){this.props=t,this.context=e,this.refs=Dp,this.updater=r||Op}vo.prototype.isReactComponent={};vo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};vo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Fp(){}Fp.prototype=vo.prototype;function Ec(t,e,r){this.props=t,this.context=e,this.refs=Dp,this.updater=r||Op}var Ac=Ec.prototype=new Fp;Ac.constructor=Ec;Lp(Ac,vo.prototype);Ac.isPureReactComponent=!0;var Zd=Array.isArray,Bp=Object.prototype.hasOwnProperty,Ic={current:null},zp={key:!0,ref:!0,__self:!0,__source:!0};function Wp(t,e,r){var o,s={},i=null,l=null;if(e!=null)for(o in e.ref!==void 0&&(l=e.ref),e.key!==void 0&&(i=""+e.key),e)Bp.call(e,o)&&!zp.hasOwnProperty(o)&&(s[o]=e[o]);var a=arguments.length-2;if(a===1)s.children=r;else if(1<a){for(var c=Array(a),d=0;d<a;d++)c[d]=arguments[d+2];s.children=c}if(t&&t.defaultProps)for(o in a=t.defaultProps,a)s[o]===void 0&&(s[o]=a[o]);return{$$typeof:Es,type:t,key:i,ref:l,props:s,_owner:Ic.current}}function mv(t,e){return{$$typeof:Es,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Rc(t){return typeof t=="object"&&t!==null&&t.$$typeof===Es}function gv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(r){return e[r]})}var eu=/\/+/g;function _l(t,e){return typeof t=="object"&&t!==null&&t.key!=null?gv(""+t.key):e.toString(36)}function ui(t,e,r,o,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var l=!1;if(t===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case Es:case ov:l=!0}}if(l)return l=t,s=s(l),t=o===""?"."+_l(l,0):o,Zd(s)?(r="",t!=null&&(r=t.replace(eu,"$&/")+"/"),ui(s,e,r,"",function(d){return d})):s!=null&&(Rc(s)&&(s=mv(s,r+(!s.key||l&&l.key===s.key?"":(""+s.key).replace(eu,"$&/")+"/")+t)),e.push(s)),1;if(l=0,o=o===""?".":o+":",Zd(t))for(var a=0;a<t.length;a++){i=t[a];var c=o+_l(i,a);l+=ui(i,e,r,c,s)}else if(c=fv(t),typeof c=="function")for(t=c.call(t),a=0;!(i=t.next()).done;)i=i.value,c=o+_l(i,a++),l+=ui(i,e,r,c,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return l}function Us(t,e,r){if(t==null)return t;var o=[],s=0;return ui(t,o,"","",function(i){return e.call(r,i,s++)}),o}function xv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(r){(t._status===0||t._status===-1)&&(t._status=1,t._result=r)},function(r){(t._status===0||t._status===-1)&&(t._status=2,t._result=r)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var We={current:null},hi={transition:null},vv={ReactCurrentDispatcher:We,ReactCurrentBatchConfig:hi,ReactCurrentOwner:Ic};function $p(){throw Error("act(...) is not supported in production builds of React.")}Q.Children={map:Us,forEach:function(t,e,r){Us(t,function(){e.apply(this,arguments)},r)},count:function(t){var e=0;return Us(t,function(){e++}),e},toArray:function(t){return Us(t,function(e){return e})||[]},only:function(t){if(!Rc(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Q.Component=vo;Q.Fragment=sv;Q.Profiler=lv;Q.PureComponent=Ec;Q.StrictMode=iv;Q.Suspense=uv;Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vv;Q.act=$p;Q.cloneElement=function(t,e,r){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var o=Lp({},t.props),s=t.key,i=t.ref,l=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,l=Ic.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(c in e)Bp.call(e,c)&&!zp.hasOwnProperty(c)&&(o[c]=e[c]===void 0&&a!==void 0?a[c]:e[c])}var c=arguments.length-2;if(c===1)o.children=r;else if(1<c){a=Array(c);for(var d=0;d<c;d++)a[d]=arguments[d+2];o.children=a}return{$$typeof:Es,type:t.type,key:s,ref:i,props:o,_owner:l}};Q.createContext=function(t){return t={$$typeof:cv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:av,_context:t},t.Consumer=t};Q.createElement=Wp;Q.createFactory=function(t){var e=Wp.bind(null,t);return e.type=t,e};Q.createRef=function(){return{current:null}};Q.forwardRef=function(t){return{$$typeof:dv,render:t}};Q.isValidElement=Rc;Q.lazy=function(t){return{$$typeof:pv,_payload:{_status:-1,_result:t},_init:xv}};Q.memo=function(t,e){return{$$typeof:hv,type:t,compare:e===void 0?null:e}};Q.startTransition=function(t){var e=hi.transition;hi.transition={};try{t()}finally{hi.transition=e}};Q.unstable_act=$p;Q.useCallback=function(t,e){return We.current.useCallback(t,e)};Q.useContext=function(t){return We.current.useContext(t)};Q.useDebugValue=function(){};Q.useDeferredValue=function(t){return We.current.useDeferredValue(t)};Q.useEffect=function(t,e){return We.current.useEffect(t,e)};Q.useId=function(){return We.current.useId()};Q.useImperativeHandle=function(t,e,r){return We.current.useImperativeHandle(t,e,r)};Q.useInsertionEffect=function(t,e){return We.current.useInsertionEffect(t,e)};Q.useLayoutEffect=function(t,e){return We.current.useLayoutEffect(t,e)};Q.useMemo=function(t,e){return We.current.useMemo(t,e)};Q.useReducer=function(t,e,r){return We.current.useReducer(t,e,r)};Q.useRef=function(t){return We.current.useRef(t)};Q.useState=function(t){return We.current.useState(t)};Q.useSyncExternalStore=function(t,e,r){return We.current.useSyncExternalStore(t,e,r)};Q.useTransition=function(){return We.current.useTransition()};Q.version="18.3.1";_p.exports=Q;var v=_p.exports;const _=Rp(v),As=rv({__proto__:null,default:_},[v]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yv=v,jv=Symbol.for("react.element"),wv=Symbol.for("react.fragment"),bv=Object.prototype.hasOwnProperty,kv=yv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Sv={key:!0,ref:!0,__self:!0,__source:!0};function Hp(t,e,r){var o,s={},i=null,l=null;r!==void 0&&(i=""+r),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(l=e.ref);for(o in e)bv.call(e,o)&&!Sv.hasOwnProperty(o)&&(s[o]=e[o]);if(t&&t.defaultProps)for(o in e=t.defaultProps,e)s[o]===void 0&&(s[o]=e[o]);return{$$typeof:jv,type:t,key:i,ref:l,props:s,_owner:kv.current}}sl.Fragment=wv;sl.jsx=Hp;sl.jsxs=Hp;Mp.exports=sl;var n=Mp.exports,Up={exports:{}},ot={},Vp={exports:{}},qp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(P,N){var L=P.length;P.push(N);e:for(;0<L;){var U=L-1>>>1,z=P[U];if(0<s(z,N))P[U]=N,P[L]=z,L=U;else break e}}function r(P){return P.length===0?null:P[0]}function o(P){if(P.length===0)return null;var N=P[0],L=P.pop();if(L!==N){P[0]=L;e:for(var U=0,z=P.length,J=z>>>1;U<J;){var K=2*(U+1)-1,oe=P[K],ye=K+1,Z=P[ye];if(0>s(oe,L))ye<z&&0>s(Z,oe)?(P[U]=Z,P[ye]=L,U=ye):(P[U]=oe,P[K]=L,U=K);else if(ye<z&&0>s(Z,L))P[U]=Z,P[ye]=L,U=ye;else break e}}return N}function s(P,N){var L=P.sortIndex-N.sortIndex;return L!==0?L:P.id-N.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var l=Date,a=l.now();t.unstable_now=function(){return l.now()-a}}var c=[],d=[],u=1,h=null,f=3,p=!1,j=!1,y=!1,w=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(P){for(var N=r(d);N!==null;){if(N.callback===null)o(d);else if(N.startTime<=P)o(d),N.sortIndex=N.expirationTime,e(c,N);else break;N=r(d)}}function b(P){if(y=!1,x(P),!j)if(r(c)!==null)j=!0,O(k);else{var N=r(d);N!==null&&F(b,N.startTime-P)}}function k(P,N){j=!1,y&&(y=!1,g(E),E=-1),p=!0;var L=f;try{for(x(N),h=r(c);h!==null&&(!(h.expirationTime>N)||P&&!H());){var U=h.callback;if(typeof U=="function"){h.callback=null,f=h.priorityLevel;var z=U(h.expirationTime<=N);N=t.unstable_now(),typeof z=="function"?h.callback=z:h===r(c)&&o(c),x(N)}else o(c);h=r(c)}if(h!==null)var J=!0;else{var K=r(d);K!==null&&F(b,K.startTime-N),J=!1}return J}finally{h=null,f=L,p=!1}}var S=!1,C=null,E=-1,R=5,A=-1;function H(){return!(t.unstable_now()-A<R)}function M(){if(C!==null){var P=t.unstable_now();A=P;var N=!0;try{N=C(!0,P)}finally{N?B():(S=!1,C=null)}}else S=!1}var B;if(typeof m=="function")B=function(){m(M)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,X=$.port2;$.port1.onmessage=M,B=function(){X.postMessage(null)}}else B=function(){w(M,0)};function O(P){C=P,S||(S=!0,B())}function F(P,N){E=w(function(){P(t.unstable_now())},N)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(P){P.callback=null},t.unstable_continueExecution=function(){j||p||(j=!0,O(k))},t.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<P?Math.floor(1e3/P):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return r(c)},t.unstable_next=function(P){switch(f){case 1:case 2:case 3:var N=3;break;default:N=f}var L=f;f=N;try{return P()}finally{f=L}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(P,N){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var L=f;f=P;try{return N()}finally{f=L}},t.unstable_scheduleCallback=function(P,N,L){var U=t.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?U+L:U):L=U,P){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=L+z,P={id:u++,callback:N,priorityLevel:P,startTime:L,expirationTime:z,sortIndex:-1},L>U?(P.sortIndex=L,e(d,P),r(c)===null&&P===r(d)&&(y?(g(E),E=-1):y=!0,F(b,L-U))):(P.sortIndex=z,e(c,P),j||p||(j=!0,O(k))),P},t.unstable_shouldYield=H,t.unstable_wrapCallback=function(P){var N=f;return function(){var L=f;f=N;try{return P.apply(this,arguments)}finally{f=L}}}})(qp);Vp.exports=qp;var Cv=Vp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tv=v,rt=Cv;function I(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,r=1;r<arguments.length;r++)e+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Jp=new Set,rs={};function kr(t,e){co(t,e),co(t+"Capture",e)}function co(t,e){for(rs[t]=e,t=0;t<e.length;t++)Jp.add(e[t])}var en=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ma=Object.prototype.hasOwnProperty,Pv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,tu={},nu={};function Nv(t){return ma.call(nu,t)?!0:ma.call(tu,t)?!1:Pv.test(t)?nu[t]=!0:(tu[t]=!0,!1)}function Ev(t,e,r,o){if(r!==null&&r.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return o?!1:r!==null?!r.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Av(t,e,r,o){if(e===null||typeof e>"u"||Ev(t,e,r,o))return!0;if(o)return!1;if(r!==null)switch(r.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function $e(t,e,r,o,s,i,l){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=o,this.attributeNamespace=s,this.mustUseProperty=r,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=l}var Ae={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ae[t]=new $e(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ae[e]=new $e(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ae[t]=new $e(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ae[t]=new $e(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ae[t]=new $e(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ae[t]=new $e(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ae[t]=new $e(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ae[t]=new $e(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ae[t]=new $e(t,5,!1,t.toLowerCase(),null,!1,!1)});var Mc=/[\-:]([a-z])/g;function _c(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Mc,_c);Ae[e]=new $e(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Mc,_c);Ae[e]=new $e(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Mc,_c);Ae[e]=new $e(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ae[t]=new $e(t,1,!1,t.toLowerCase(),null,!1,!1)});Ae.xlinkHref=new $e("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ae[t]=new $e(t,1,!1,t.toLowerCase(),null,!0,!0)});function Oc(t,e,r,o){var s=Ae.hasOwnProperty(e)?Ae[e]:null;(s!==null?s.type!==0:o||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Av(e,r,s,o)&&(r=null),o||s===null?Nv(e)&&(r===null?t.removeAttribute(e):t.setAttribute(e,""+r)):s.mustUseProperty?t[s.propertyName]=r===null?s.type===3?!1:"":r:(e=s.attributeName,o=s.attributeNamespace,r===null?t.removeAttribute(e):(s=s.type,r=s===3||s===4&&r===!0?"":""+r,o?t.setAttributeNS(o,e,r):t.setAttribute(e,r))))}var an=Tv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Vs=Symbol.for("react.element"),Mr=Symbol.for("react.portal"),_r=Symbol.for("react.fragment"),Lc=Symbol.for("react.strict_mode"),ga=Symbol.for("react.profiler"),Kp=Symbol.for("react.provider"),Gp=Symbol.for("react.context"),Dc=Symbol.for("react.forward_ref"),xa=Symbol.for("react.suspense"),va=Symbol.for("react.suspense_list"),Fc=Symbol.for("react.memo"),yn=Symbol.for("react.lazy"),Qp=Symbol.for("react.offscreen"),ru=Symbol.iterator;function Io(t){return t===null||typeof t!="object"?null:(t=ru&&t[ru]||t["@@iterator"],typeof t=="function"?t:null)}var pe=Object.assign,Ol;function Wo(t){if(Ol===void 0)try{throw Error()}catch(r){var e=r.stack.trim().match(/\n( *(at )?)/);Ol=e&&e[1]||""}return`
`+Ol+t}var Ll=!1;function Dl(t,e){if(!t||Ll)return"";Ll=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var o=d}Reflect.construct(t,[],e)}else{try{e.call()}catch(d){o=d}t.call(e.prototype)}else{try{throw Error()}catch(d){o=d}t()}}catch(d){if(d&&o&&typeof d.stack=="string"){for(var s=d.stack.split(`
`),i=o.stack.split(`
`),l=s.length-1,a=i.length-1;1<=l&&0<=a&&s[l]!==i[a];)a--;for(;1<=l&&0<=a;l--,a--)if(s[l]!==i[a]){if(l!==1||a!==1)do if(l--,a--,0>a||s[l]!==i[a]){var c=`
`+s[l].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=l&&0<=a);break}}}finally{Ll=!1,Error.prepareStackTrace=r}return(t=t?t.displayName||t.name:"")?Wo(t):""}function Iv(t){switch(t.tag){case 5:return Wo(t.type);case 16:return Wo("Lazy");case 13:return Wo("Suspense");case 19:return Wo("SuspenseList");case 0:case 2:case 15:return t=Dl(t.type,!1),t;case 11:return t=Dl(t.type.render,!1),t;case 1:return t=Dl(t.type,!0),t;default:return""}}function ya(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case _r:return"Fragment";case Mr:return"Portal";case ga:return"Profiler";case Lc:return"StrictMode";case xa:return"Suspense";case va:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Gp:return(t.displayName||"Context")+".Consumer";case Kp:return(t._context.displayName||"Context")+".Provider";case Dc:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Fc:return e=t.displayName||null,e!==null?e:ya(t.type)||"Memo";case yn:e=t._payload,t=t._init;try{return ya(t(e))}catch{}}return null}function Rv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ya(e);case 8:return e===Lc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Wn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Yp(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Mv(t){var e=Yp(t)?"checked":"value",r=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),o=""+t[e];if(!t.hasOwnProperty(e)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var s=r.get,i=r.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(l){o=""+l,i.call(this,l)}}),Object.defineProperty(t,e,{enumerable:r.enumerable}),{getValue:function(){return o},setValue:function(l){o=""+l},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function qs(t){t._valueTracker||(t._valueTracker=Mv(t))}function Xp(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var r=e.getValue(),o="";return t&&(o=Yp(t)?t.checked?"true":"false":t.value),t=o,t!==r?(e.setValue(t),!0):!1}function Ei(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ja(t,e){var r=e.checked;return pe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??t._wrapperState.initialChecked})}function ou(t,e){var r=e.defaultValue==null?"":e.defaultValue,o=e.checked!=null?e.checked:e.defaultChecked;r=Wn(e.value!=null?e.value:r),t._wrapperState={initialChecked:o,initialValue:r,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Zp(t,e){e=e.checked,e!=null&&Oc(t,"checked",e,!1)}function wa(t,e){Zp(t,e);var r=Wn(e.value),o=e.type;if(r!=null)o==="number"?(r===0&&t.value===""||t.value!=r)&&(t.value=""+r):t.value!==""+r&&(t.value=""+r);else if(o==="submit"||o==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ba(t,e.type,r):e.hasOwnProperty("defaultValue")&&ba(t,e.type,Wn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function su(t,e,r){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var o=e.type;if(!(o!=="submit"&&o!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,r||e===t.value||(t.value=e),t.defaultValue=e}r=t.name,r!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,r!==""&&(t.name=r)}function ba(t,e,r){(e!=="number"||Ei(t.ownerDocument)!==t)&&(r==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+r&&(t.defaultValue=""+r))}var $o=Array.isArray;function Vr(t,e,r,o){if(t=t.options,e){e={};for(var s=0;s<r.length;s++)e["$"+r[s]]=!0;for(r=0;r<t.length;r++)s=e.hasOwnProperty("$"+t[r].value),t[r].selected!==s&&(t[r].selected=s),s&&o&&(t[r].defaultSelected=!0)}else{for(r=""+Wn(r),e=null,s=0;s<t.length;s++){if(t[s].value===r){t[s].selected=!0,o&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function ka(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(I(91));return pe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function iu(t,e){var r=e.value;if(r==null){if(r=e.children,e=e.defaultValue,r!=null){if(e!=null)throw Error(I(92));if($o(r)){if(1<r.length)throw Error(I(93));r=r[0]}e=r}e==null&&(e=""),r=e}t._wrapperState={initialValue:Wn(r)}}function ef(t,e){var r=Wn(e.value),o=Wn(e.defaultValue);r!=null&&(r=""+r,r!==t.value&&(t.value=r),e.defaultValue==null&&t.defaultValue!==r&&(t.defaultValue=r)),o!=null&&(t.defaultValue=""+o)}function lu(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function tf(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Sa(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?tf(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Js,nf=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,r,o,s){MSApp.execUnsafeLocalFunction(function(){return t(e,r,o,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Js=Js||document.createElement("div"),Js.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Js.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function os(t,e){if(e){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=e;return}}t.textContent=e}var qo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},_v=["Webkit","ms","Moz","O"];Object.keys(qo).forEach(function(t){_v.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),qo[e]=qo[t]})});function rf(t,e,r){return e==null||typeof e=="boolean"||e===""?"":r||typeof e!="number"||e===0||qo.hasOwnProperty(t)&&qo[t]?(""+e).trim():e+"px"}function of(t,e){t=t.style;for(var r in e)if(e.hasOwnProperty(r)){var o=r.indexOf("--")===0,s=rf(r,e[r],o);r==="float"&&(r="cssFloat"),o?t.setProperty(r,s):t[r]=s}}var Ov=pe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ca(t,e){if(e){if(Ov[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(I(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(I(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(I(61))}if(e.style!=null&&typeof e.style!="object")throw Error(I(62))}}function Ta(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pa=null;function Bc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Na=null,qr=null,Jr=null;function au(t){if(t=Ms(t)){if(typeof Na!="function")throw Error(I(280));var e=t.stateNode;e&&(e=dl(e),Na(t.stateNode,t.type,e))}}function sf(t){qr?Jr?Jr.push(t):Jr=[t]:qr=t}function lf(){if(qr){var t=qr,e=Jr;if(Jr=qr=null,au(t),e)for(t=0;t<e.length;t++)au(e[t])}}function af(t,e){return t(e)}function cf(){}var Fl=!1;function df(t,e,r){if(Fl)return t(e,r);Fl=!0;try{return af(t,e,r)}finally{Fl=!1,(qr!==null||Jr!==null)&&(cf(),lf())}}function ss(t,e){var r=t.stateNode;if(r===null)return null;var o=dl(r);if(o===null)return null;r=o[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(I(231,e,typeof r));return r}var Ea=!1;if(en)try{var Ro={};Object.defineProperty(Ro,"passive",{get:function(){Ea=!0}}),window.addEventListener("test",Ro,Ro),window.removeEventListener("test",Ro,Ro)}catch{Ea=!1}function Lv(t,e,r,o,s,i,l,a,c){var d=Array.prototype.slice.call(arguments,3);try{e.apply(r,d)}catch(u){this.onError(u)}}var Jo=!1,Ai=null,Ii=!1,Aa=null,Dv={onError:function(t){Jo=!0,Ai=t}};function Fv(t,e,r,o,s,i,l,a,c){Jo=!1,Ai=null,Lv.apply(Dv,arguments)}function Bv(t,e,r,o,s,i,l,a,c){if(Fv.apply(this,arguments),Jo){if(Jo){var d=Ai;Jo=!1,Ai=null}else throw Error(I(198));Ii||(Ii=!0,Aa=d)}}function Sr(t){var e=t,r=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(r=e.return),t=e.return;while(t)}return e.tag===3?r:null}function uf(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function cu(t){if(Sr(t)!==t)throw Error(I(188))}function zv(t){var e=t.alternate;if(!e){if(e=Sr(t),e===null)throw Error(I(188));return e!==t?null:t}for(var r=t,o=e;;){var s=r.return;if(s===null)break;var i=s.alternate;if(i===null){if(o=s.return,o!==null){r=o;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===r)return cu(s),t;if(i===o)return cu(s),e;i=i.sibling}throw Error(I(188))}if(r.return!==o.return)r=s,o=i;else{for(var l=!1,a=s.child;a;){if(a===r){l=!0,r=s,o=i;break}if(a===o){l=!0,o=s,r=i;break}a=a.sibling}if(!l){for(a=i.child;a;){if(a===r){l=!0,r=i,o=s;break}if(a===o){l=!0,o=i,r=s;break}a=a.sibling}if(!l)throw Error(I(189))}}if(r.alternate!==o)throw Error(I(190))}if(r.tag!==3)throw Error(I(188));return r.stateNode.current===r?t:e}function hf(t){return t=zv(t),t!==null?pf(t):null}function pf(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=pf(t);if(e!==null)return e;t=t.sibling}return null}var ff=rt.unstable_scheduleCallback,du=rt.unstable_cancelCallback,Wv=rt.unstable_shouldYield,$v=rt.unstable_requestPaint,me=rt.unstable_now,Hv=rt.unstable_getCurrentPriorityLevel,zc=rt.unstable_ImmediatePriority,mf=rt.unstable_UserBlockingPriority,Ri=rt.unstable_NormalPriority,Uv=rt.unstable_LowPriority,gf=rt.unstable_IdlePriority,il=null,zt=null;function Vv(t){if(zt&&typeof zt.onCommitFiberRoot=="function")try{zt.onCommitFiberRoot(il,t,void 0,(t.current.flags&128)===128)}catch{}}var Nt=Math.clz32?Math.clz32:Kv,qv=Math.log,Jv=Math.LN2;function Kv(t){return t>>>=0,t===0?32:31-(qv(t)/Jv|0)|0}var Ks=64,Gs=4194304;function Ho(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Mi(t,e){var r=t.pendingLanes;if(r===0)return 0;var o=0,s=t.suspendedLanes,i=t.pingedLanes,l=r&268435455;if(l!==0){var a=l&~s;a!==0?o=Ho(a):(i&=l,i!==0&&(o=Ho(i)))}else l=r&~s,l!==0?o=Ho(l):i!==0&&(o=Ho(i));if(o===0)return 0;if(e!==0&&e!==o&&!(e&s)&&(s=o&-o,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(o&4&&(o|=r&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=o;0<e;)r=31-Nt(e),s=1<<r,o|=t[r],e&=~s;return o}function Gv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Qv(t,e){for(var r=t.suspendedLanes,o=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var l=31-Nt(i),a=1<<l,c=s[l];c===-1?(!(a&r)||a&o)&&(s[l]=Gv(a,e)):c<=e&&(t.expiredLanes|=a),i&=~a}}function Ia(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function xf(){var t=Ks;return Ks<<=1,!(Ks&4194240)&&(Ks=64),t}function Bl(t){for(var e=[],r=0;31>r;r++)e.push(t);return e}function Is(t,e,r){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Nt(e),t[e]=r}function Yv(t,e){var r=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var o=t.eventTimes;for(t=t.expirationTimes;0<r;){var s=31-Nt(r),i=1<<s;e[s]=0,o[s]=-1,t[s]=-1,r&=~i}}function Wc(t,e){var r=t.entangledLanes|=e;for(t=t.entanglements;r;){var o=31-Nt(r),s=1<<o;s&e|t[o]&e&&(t[o]|=e),r&=~s}}var ee=0;function vf(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var yf,$c,jf,wf,bf,Ra=!1,Qs=[],Rn=null,Mn=null,_n=null,is=new Map,ls=new Map,wn=[],Xv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function uu(t,e){switch(t){case"focusin":case"focusout":Rn=null;break;case"dragenter":case"dragleave":Mn=null;break;case"mouseover":case"mouseout":_n=null;break;case"pointerover":case"pointerout":is.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ls.delete(e.pointerId)}}function Mo(t,e,r,o,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:r,eventSystemFlags:o,nativeEvent:i,targetContainers:[s]},e!==null&&(e=Ms(e),e!==null&&$c(e)),t):(t.eventSystemFlags|=o,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function Zv(t,e,r,o,s){switch(e){case"focusin":return Rn=Mo(Rn,t,e,r,o,s),!0;case"dragenter":return Mn=Mo(Mn,t,e,r,o,s),!0;case"mouseover":return _n=Mo(_n,t,e,r,o,s),!0;case"pointerover":var i=s.pointerId;return is.set(i,Mo(is.get(i)||null,t,e,r,o,s)),!0;case"gotpointercapture":return i=s.pointerId,ls.set(i,Mo(ls.get(i)||null,t,e,r,o,s)),!0}return!1}function kf(t){var e=or(t.target);if(e!==null){var r=Sr(e);if(r!==null){if(e=r.tag,e===13){if(e=uf(r),e!==null){t.blockedOn=e,bf(t.priority,function(){jf(r)});return}}else if(e===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function pi(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var r=Ma(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(r===null){r=t.nativeEvent;var o=new r.constructor(r.type,r);Pa=o,r.target.dispatchEvent(o),Pa=null}else return e=Ms(r),e!==null&&$c(e),t.blockedOn=r,!1;e.shift()}return!0}function hu(t,e,r){pi(t)&&r.delete(e)}function ey(){Ra=!1,Rn!==null&&pi(Rn)&&(Rn=null),Mn!==null&&pi(Mn)&&(Mn=null),_n!==null&&pi(_n)&&(_n=null),is.forEach(hu),ls.forEach(hu)}function _o(t,e){t.blockedOn===e&&(t.blockedOn=null,Ra||(Ra=!0,rt.unstable_scheduleCallback(rt.unstable_NormalPriority,ey)))}function as(t){function e(s){return _o(s,t)}if(0<Qs.length){_o(Qs[0],t);for(var r=1;r<Qs.length;r++){var o=Qs[r];o.blockedOn===t&&(o.blockedOn=null)}}for(Rn!==null&&_o(Rn,t),Mn!==null&&_o(Mn,t),_n!==null&&_o(_n,t),is.forEach(e),ls.forEach(e),r=0;r<wn.length;r++)o=wn[r],o.blockedOn===t&&(o.blockedOn=null);for(;0<wn.length&&(r=wn[0],r.blockedOn===null);)kf(r),r.blockedOn===null&&wn.shift()}var Kr=an.ReactCurrentBatchConfig,_i=!0;function ty(t,e,r,o){var s=ee,i=Kr.transition;Kr.transition=null;try{ee=1,Hc(t,e,r,o)}finally{ee=s,Kr.transition=i}}function ny(t,e,r,o){var s=ee,i=Kr.transition;Kr.transition=null;try{ee=4,Hc(t,e,r,o)}finally{ee=s,Kr.transition=i}}function Hc(t,e,r,o){if(_i){var s=Ma(t,e,r,o);if(s===null)Gl(t,e,o,Oi,r),uu(t,o);else if(Zv(s,t,e,r,o))o.stopPropagation();else if(uu(t,o),e&4&&-1<Xv.indexOf(t)){for(;s!==null;){var i=Ms(s);if(i!==null&&yf(i),i=Ma(t,e,r,o),i===null&&Gl(t,e,o,Oi,r),i===s)break;s=i}s!==null&&o.stopPropagation()}else Gl(t,e,o,null,r)}}var Oi=null;function Ma(t,e,r,o){if(Oi=null,t=Bc(o),t=or(t),t!==null)if(e=Sr(t),e===null)t=null;else if(r=e.tag,r===13){if(t=uf(e),t!==null)return t;t=null}else if(r===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Oi=t,null}function Sf(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Hv()){case zc:return 1;case mf:return 4;case Ri:case Uv:return 16;case gf:return 536870912;default:return 16}default:return 16}}var En=null,Uc=null,fi=null;function Cf(){if(fi)return fi;var t,e=Uc,r=e.length,o,s="value"in En?En.value:En.textContent,i=s.length;for(t=0;t<r&&e[t]===s[t];t++);var l=r-t;for(o=1;o<=l&&e[r-o]===s[i-o];o++);return fi=s.slice(t,1<o?1-o:void 0)}function mi(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ys(){return!0}function pu(){return!1}function st(t){function e(r,o,s,i,l){this._reactName=r,this._targetInst=s,this.type=o,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(r=t[a],this[a]=r?r(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ys:pu,this.isPropagationStopped=pu,this}return pe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Ys)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Ys)},persist:function(){},isPersistent:Ys}),e}var yo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vc=st(yo),Rs=pe({},yo,{view:0,detail:0}),ry=st(Rs),zl,Wl,Oo,ll=pe({},Rs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Oo&&(Oo&&t.type==="mousemove"?(zl=t.screenX-Oo.screenX,Wl=t.screenY-Oo.screenY):Wl=zl=0,Oo=t),zl)},movementY:function(t){return"movementY"in t?t.movementY:Wl}}),fu=st(ll),oy=pe({},ll,{dataTransfer:0}),sy=st(oy),iy=pe({},Rs,{relatedTarget:0}),$l=st(iy),ly=pe({},yo,{animationName:0,elapsedTime:0,pseudoElement:0}),ay=st(ly),cy=pe({},yo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),dy=st(cy),uy=pe({},yo,{data:0}),mu=st(uy),hy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},py={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function my(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=fy[t])?!!e[t]:!1}function qc(){return my}var gy=pe({},Rs,{key:function(t){if(t.key){var e=hy[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=mi(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?py[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qc,charCode:function(t){return t.type==="keypress"?mi(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?mi(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),xy=st(gy),vy=pe({},ll,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gu=st(vy),yy=pe({},Rs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qc}),jy=st(yy),wy=pe({},yo,{propertyName:0,elapsedTime:0,pseudoElement:0}),by=st(wy),ky=pe({},ll,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Sy=st(ky),Cy=[9,13,27,32],Jc=en&&"CompositionEvent"in window,Ko=null;en&&"documentMode"in document&&(Ko=document.documentMode);var Ty=en&&"TextEvent"in window&&!Ko,Tf=en&&(!Jc||Ko&&8<Ko&&11>=Ko),xu=" ",vu=!1;function Pf(t,e){switch(t){case"keyup":return Cy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Or=!1;function Py(t,e){switch(t){case"compositionend":return Nf(e);case"keypress":return e.which!==32?null:(vu=!0,xu);case"textInput":return t=e.data,t===xu&&vu?null:t;default:return null}}function Ny(t,e){if(Or)return t==="compositionend"||!Jc&&Pf(t,e)?(t=Cf(),fi=Uc=En=null,Or=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Tf&&e.locale!=="ko"?null:e.data;default:return null}}var Ey={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yu(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Ey[t.type]:e==="textarea"}function Ef(t,e,r,o){sf(o),e=Li(e,"onChange"),0<e.length&&(r=new Vc("onChange","change",null,r,o),t.push({event:r,listeners:e}))}var Go=null,cs=null;function Ay(t){zf(t,0)}function al(t){var e=Fr(t);if(Xp(e))return t}function Iy(t,e){if(t==="change")return e}var Af=!1;if(en){var Hl;if(en){var Ul="oninput"in document;if(!Ul){var ju=document.createElement("div");ju.setAttribute("oninput","return;"),Ul=typeof ju.oninput=="function"}Hl=Ul}else Hl=!1;Af=Hl&&(!document.documentMode||9<document.documentMode)}function wu(){Go&&(Go.detachEvent("onpropertychange",If),cs=Go=null)}function If(t){if(t.propertyName==="value"&&al(cs)){var e=[];Ef(e,cs,t,Bc(t)),df(Ay,e)}}function Ry(t,e,r){t==="focusin"?(wu(),Go=e,cs=r,Go.attachEvent("onpropertychange",If)):t==="focusout"&&wu()}function My(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return al(cs)}function _y(t,e){if(t==="click")return al(e)}function Oy(t,e){if(t==="input"||t==="change")return al(e)}function Ly(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var It=typeof Object.is=="function"?Object.is:Ly;function ds(t,e){if(It(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var r=Object.keys(t),o=Object.keys(e);if(r.length!==o.length)return!1;for(o=0;o<r.length;o++){var s=r[o];if(!ma.call(e,s)||!It(t[s],e[s]))return!1}return!0}function bu(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ku(t,e){var r=bu(t);t=0;for(var o;r;){if(r.nodeType===3){if(o=t+r.textContent.length,t<=e&&o>=e)return{node:r,offset:e-t};t=o}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=bu(r)}}function Rf(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Rf(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Mf(){for(var t=window,e=Ei();e instanceof t.HTMLIFrameElement;){try{var r=typeof e.contentWindow.location.href=="string"}catch{r=!1}if(r)t=e.contentWindow;else break;e=Ei(t.document)}return e}function Kc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Dy(t){var e=Mf(),r=t.focusedElem,o=t.selectionRange;if(e!==r&&r&&r.ownerDocument&&Rf(r.ownerDocument.documentElement,r)){if(o!==null&&Kc(r)){if(e=o.start,t=o.end,t===void 0&&(t=e),"selectionStart"in r)r.selectionStart=e,r.selectionEnd=Math.min(t,r.value.length);else if(t=(e=r.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=r.textContent.length,i=Math.min(o.start,s);o=o.end===void 0?i:Math.min(o.end,s),!t.extend&&i>o&&(s=o,o=i,i=s),s=ku(r,i);var l=ku(r,o);s&&l&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==l.node||t.focusOffset!==l.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>o?(t.addRange(e),t.extend(l.node,l.offset)):(e.setEnd(l.node,l.offset),t.addRange(e)))}}for(e=[],t=r;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<e.length;r++)t=e[r],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Fy=en&&"documentMode"in document&&11>=document.documentMode,Lr=null,_a=null,Qo=null,Oa=!1;function Su(t,e,r){var o=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Oa||Lr==null||Lr!==Ei(o)||(o=Lr,"selectionStart"in o&&Kc(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Qo&&ds(Qo,o)||(Qo=o,o=Li(_a,"onSelect"),0<o.length&&(e=new Vc("onSelect","select",null,e,r),t.push({event:e,listeners:o}),e.target=Lr)))}function Xs(t,e){var r={};return r[t.toLowerCase()]=e.toLowerCase(),r["Webkit"+t]="webkit"+e,r["Moz"+t]="moz"+e,r}var Dr={animationend:Xs("Animation","AnimationEnd"),animationiteration:Xs("Animation","AnimationIteration"),animationstart:Xs("Animation","AnimationStart"),transitionend:Xs("Transition","TransitionEnd")},Vl={},_f={};en&&(_f=document.createElement("div").style,"AnimationEvent"in window||(delete Dr.animationend.animation,delete Dr.animationiteration.animation,delete Dr.animationstart.animation),"TransitionEvent"in window||delete Dr.transitionend.transition);function cl(t){if(Vl[t])return Vl[t];if(!Dr[t])return t;var e=Dr[t],r;for(r in e)if(e.hasOwnProperty(r)&&r in _f)return Vl[t]=e[r];return t}var Of=cl("animationend"),Lf=cl("animationiteration"),Df=cl("animationstart"),Ff=cl("transitionend"),Bf=new Map,Cu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Vn(t,e){Bf.set(t,e),kr(e,[t])}for(var ql=0;ql<Cu.length;ql++){var Jl=Cu[ql],By=Jl.toLowerCase(),zy=Jl[0].toUpperCase()+Jl.slice(1);Vn(By,"on"+zy)}Vn(Of,"onAnimationEnd");Vn(Lf,"onAnimationIteration");Vn(Df,"onAnimationStart");Vn("dblclick","onDoubleClick");Vn("focusin","onFocus");Vn("focusout","onBlur");Vn(Ff,"onTransitionEnd");co("onMouseEnter",["mouseout","mouseover"]);co("onMouseLeave",["mouseout","mouseover"]);co("onPointerEnter",["pointerout","pointerover"]);co("onPointerLeave",["pointerout","pointerover"]);kr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));kr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));kr("onBeforeInput",["compositionend","keypress","textInput","paste"]);kr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));kr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));kr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Uo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Wy=new Set("cancel close invalid load scroll toggle".split(" ").concat(Uo));function Tu(t,e,r){var o=t.type||"unknown-event";t.currentTarget=r,Bv(o,e,void 0,t),t.currentTarget=null}function zf(t,e){e=(e&4)!==0;for(var r=0;r<t.length;r++){var o=t[r],s=o.event;o=o.listeners;e:{var i=void 0;if(e)for(var l=o.length-1;0<=l;l--){var a=o[l],c=a.instance,d=a.currentTarget;if(a=a.listener,c!==i&&s.isPropagationStopped())break e;Tu(s,a,d),i=c}else for(l=0;l<o.length;l++){if(a=o[l],c=a.instance,d=a.currentTarget,a=a.listener,c!==i&&s.isPropagationStopped())break e;Tu(s,a,d),i=c}}}if(Ii)throw t=Aa,Ii=!1,Aa=null,t}function ie(t,e){var r=e[za];r===void 0&&(r=e[za]=new Set);var o=t+"__bubble";r.has(o)||(Wf(e,t,2,!1),r.add(o))}function Kl(t,e,r){var o=0;e&&(o|=4),Wf(r,t,o,e)}var Zs="_reactListening"+Math.random().toString(36).slice(2);function us(t){if(!t[Zs]){t[Zs]=!0,Jp.forEach(function(r){r!=="selectionchange"&&(Wy.has(r)||Kl(r,!1,t),Kl(r,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Zs]||(e[Zs]=!0,Kl("selectionchange",!1,e))}}function Wf(t,e,r,o){switch(Sf(e)){case 1:var s=ty;break;case 4:s=ny;break;default:s=Hc}r=s.bind(null,e,r,t),s=void 0,!Ea||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),o?s!==void 0?t.addEventListener(e,r,{capture:!0,passive:s}):t.addEventListener(e,r,!0):s!==void 0?t.addEventListener(e,r,{passive:s}):t.addEventListener(e,r,!1)}function Gl(t,e,r,o,s){var i=o;if(!(e&1)&&!(e&2)&&o!==null)e:for(;;){if(o===null)return;var l=o.tag;if(l===3||l===4){var a=o.stateNode.containerInfo;if(a===s||a.nodeType===8&&a.parentNode===s)break;if(l===4)for(l=o.return;l!==null;){var c=l.tag;if((c===3||c===4)&&(c=l.stateNode.containerInfo,c===s||c.nodeType===8&&c.parentNode===s))return;l=l.return}for(;a!==null;){if(l=or(a),l===null)return;if(c=l.tag,c===5||c===6){o=i=l;continue e}a=a.parentNode}}o=o.return}df(function(){var d=i,u=Bc(r),h=[];e:{var f=Bf.get(t);if(f!==void 0){var p=Vc,j=t;switch(t){case"keypress":if(mi(r)===0)break e;case"keydown":case"keyup":p=xy;break;case"focusin":j="focus",p=$l;break;case"focusout":j="blur",p=$l;break;case"beforeblur":case"afterblur":p=$l;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=fu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=sy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=jy;break;case Of:case Lf:case Df:p=ay;break;case Ff:p=by;break;case"scroll":p=ry;break;case"wheel":p=Sy;break;case"copy":case"cut":case"paste":p=dy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=gu}var y=(e&4)!==0,w=!y&&t==="scroll",g=y?f!==null?f+"Capture":null:f;y=[];for(var m=d,x;m!==null;){x=m;var b=x.stateNode;if(x.tag===5&&b!==null&&(x=b,g!==null&&(b=ss(m,g),b!=null&&y.push(hs(m,b,x)))),w)break;m=m.return}0<y.length&&(f=new p(f,j,null,r,u),h.push({event:f,listeners:y}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&r!==Pa&&(j=r.relatedTarget||r.fromElement)&&(or(j)||j[tn]))break e;if((p||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,p?(j=r.relatedTarget||r.toElement,p=d,j=j?or(j):null,j!==null&&(w=Sr(j),j!==w||j.tag!==5&&j.tag!==6)&&(j=null)):(p=null,j=d),p!==j)){if(y=fu,b="onMouseLeave",g="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(y=gu,b="onPointerLeave",g="onPointerEnter",m="pointer"),w=p==null?f:Fr(p),x=j==null?f:Fr(j),f=new y(b,m+"leave",p,r,u),f.target=w,f.relatedTarget=x,b=null,or(u)===d&&(y=new y(g,m+"enter",j,r,u),y.target=x,y.relatedTarget=w,b=y),w=b,p&&j)t:{for(y=p,g=j,m=0,x=y;x;x=Ir(x))m++;for(x=0,b=g;b;b=Ir(b))x++;for(;0<m-x;)y=Ir(y),m--;for(;0<x-m;)g=Ir(g),x--;for(;m--;){if(y===g||g!==null&&y===g.alternate)break t;y=Ir(y),g=Ir(g)}y=null}else y=null;p!==null&&Pu(h,f,p,y,!1),j!==null&&w!==null&&Pu(h,w,j,y,!0)}}e:{if(f=d?Fr(d):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var k=Iy;else if(yu(f))if(Af)k=Oy;else{k=My;var S=Ry}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(k=_y);if(k&&(k=k(t,d))){Ef(h,k,r,u);break e}S&&S(t,f,d),t==="focusout"&&(S=f._wrapperState)&&S.controlled&&f.type==="number"&&ba(f,"number",f.value)}switch(S=d?Fr(d):window,t){case"focusin":(yu(S)||S.contentEditable==="true")&&(Lr=S,_a=d,Qo=null);break;case"focusout":Qo=_a=Lr=null;break;case"mousedown":Oa=!0;break;case"contextmenu":case"mouseup":case"dragend":Oa=!1,Su(h,r,u);break;case"selectionchange":if(Fy)break;case"keydown":case"keyup":Su(h,r,u)}var C;if(Jc)e:{switch(t){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else Or?Pf(t,r)&&(E="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(E="onCompositionStart");E&&(Tf&&r.locale!=="ko"&&(Or||E!=="onCompositionStart"?E==="onCompositionEnd"&&Or&&(C=Cf()):(En=u,Uc="value"in En?En.value:En.textContent,Or=!0)),S=Li(d,E),0<S.length&&(E=new mu(E,t,null,r,u),h.push({event:E,listeners:S}),C?E.data=C:(C=Nf(r),C!==null&&(E.data=C)))),(C=Ty?Py(t,r):Ny(t,r))&&(d=Li(d,"onBeforeInput"),0<d.length&&(u=new mu("onBeforeInput","beforeinput",null,r,u),h.push({event:u,listeners:d}),u.data=C))}zf(h,e)})}function hs(t,e,r){return{instance:t,listener:e,currentTarget:r}}function Li(t,e){for(var r=e+"Capture",o=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=ss(t,r),i!=null&&o.unshift(hs(t,i,s)),i=ss(t,e),i!=null&&o.push(hs(t,i,s))),t=t.return}return o}function Ir(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Pu(t,e,r,o,s){for(var i=e._reactName,l=[];r!==null&&r!==o;){var a=r,c=a.alternate,d=a.stateNode;if(c!==null&&c===o)break;a.tag===5&&d!==null&&(a=d,s?(c=ss(r,i),c!=null&&l.unshift(hs(r,c,a))):s||(c=ss(r,i),c!=null&&l.push(hs(r,c,a)))),r=r.return}l.length!==0&&t.push({event:e,listeners:l})}var $y=/\r\n?/g,Hy=/\u0000|\uFFFD/g;function Nu(t){return(typeof t=="string"?t:""+t).replace($y,`
`).replace(Hy,"")}function ei(t,e,r){if(e=Nu(e),Nu(t)!==e&&r)throw Error(I(425))}function Di(){}var La=null,Da=null;function Fa(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ba=typeof setTimeout=="function"?setTimeout:void 0,Uy=typeof clearTimeout=="function"?clearTimeout:void 0,Eu=typeof Promise=="function"?Promise:void 0,Vy=typeof queueMicrotask=="function"?queueMicrotask:typeof Eu<"u"?function(t){return Eu.resolve(null).then(t).catch(qy)}:Ba;function qy(t){setTimeout(function(){throw t})}function Ql(t,e){var r=e,o=0;do{var s=r.nextSibling;if(t.removeChild(r),s&&s.nodeType===8)if(r=s.data,r==="/$"){if(o===0){t.removeChild(s),as(e);return}o--}else r!=="$"&&r!=="$?"&&r!=="$!"||o++;r=s}while(r);as(e)}function On(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Au(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"){if(e===0)return t;e--}else r==="/$"&&e++}t=t.previousSibling}return null}var jo=Math.random().toString(36).slice(2),Ft="__reactFiber$"+jo,ps="__reactProps$"+jo,tn="__reactContainer$"+jo,za="__reactEvents$"+jo,Jy="__reactListeners$"+jo,Ky="__reactHandles$"+jo;function or(t){var e=t[Ft];if(e)return e;for(var r=t.parentNode;r;){if(e=r[tn]||r[Ft]){if(r=e.alternate,e.child!==null||r!==null&&r.child!==null)for(t=Au(t);t!==null;){if(r=t[Ft])return r;t=Au(t)}return e}t=r,r=t.parentNode}return null}function Ms(t){return t=t[Ft]||t[tn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Fr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(I(33))}function dl(t){return t[ps]||null}var Wa=[],Br=-1;function qn(t){return{current:t}}function le(t){0>Br||(t.current=Wa[Br],Wa[Br]=null,Br--)}function re(t,e){Br++,Wa[Br]=t.current,t.current=e}var $n={},Le=qn($n),Ke=qn(!1),mr=$n;function uo(t,e){var r=t.type.contextTypes;if(!r)return $n;var o=t.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===e)return o.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in r)s[i]=e[i];return o&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function Ge(t){return t=t.childContextTypes,t!=null}function Fi(){le(Ke),le(Le)}function Iu(t,e,r){if(Le.current!==$n)throw Error(I(168));re(Le,e),re(Ke,r)}function $f(t,e,r){var o=t.stateNode;if(e=e.childContextTypes,typeof o.getChildContext!="function")return r;o=o.getChildContext();for(var s in o)if(!(s in e))throw Error(I(108,Rv(t)||"Unknown",s));return pe({},r,o)}function Bi(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||$n,mr=Le.current,re(Le,t),re(Ke,Ke.current),!0}function Ru(t,e,r){var o=t.stateNode;if(!o)throw Error(I(169));r?(t=$f(t,e,mr),o.__reactInternalMemoizedMergedChildContext=t,le(Ke),le(Le),re(Le,t)):le(Ke),re(Ke,r)}var Jt=null,ul=!1,Yl=!1;function Hf(t){Jt===null?Jt=[t]:Jt.push(t)}function Gy(t){ul=!0,Hf(t)}function Jn(){if(!Yl&&Jt!==null){Yl=!0;var t=0,e=ee;try{var r=Jt;for(ee=1;t<r.length;t++){var o=r[t];do o=o(!0);while(o!==null)}Jt=null,ul=!1}catch(s){throw Jt!==null&&(Jt=Jt.slice(t+1)),ff(zc,Jn),s}finally{ee=e,Yl=!1}}return null}var zr=[],Wr=0,zi=null,Wi=0,dt=[],ut=0,gr=null,Gt=1,Qt="";function nr(t,e){zr[Wr++]=Wi,zr[Wr++]=zi,zi=t,Wi=e}function Uf(t,e,r){dt[ut++]=Gt,dt[ut++]=Qt,dt[ut++]=gr,gr=t;var o=Gt;t=Qt;var s=32-Nt(o)-1;o&=~(1<<s),r+=1;var i=32-Nt(e)+s;if(30<i){var l=s-s%5;i=(o&(1<<l)-1).toString(32),o>>=l,s-=l,Gt=1<<32-Nt(e)+s|r<<s|o,Qt=i+t}else Gt=1<<i|r<<s|o,Qt=t}function Gc(t){t.return!==null&&(nr(t,1),Uf(t,1,0))}function Qc(t){for(;t===zi;)zi=zr[--Wr],zr[Wr]=null,Wi=zr[--Wr],zr[Wr]=null;for(;t===gr;)gr=dt[--ut],dt[ut]=null,Qt=dt[--ut],dt[ut]=null,Gt=dt[--ut],dt[ut]=null}var tt=null,et=null,ce=!1,Pt=null;function Vf(t,e){var r=pt(5,null,null,0);r.elementType="DELETED",r.stateNode=e,r.return=t,e=t.deletions,e===null?(t.deletions=[r],t.flags|=16):e.push(r)}function Mu(t,e){switch(t.tag){case 5:var r=t.type;return e=e.nodeType!==1||r.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,tt=t,et=On(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,tt=t,et=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(r=gr!==null?{id:Gt,overflow:Qt}:null,t.memoizedState={dehydrated:e,treeContext:r,retryLane:1073741824},r=pt(18,null,null,0),r.stateNode=e,r.return=t,t.child=r,tt=t,et=null,!0):!1;default:return!1}}function $a(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ha(t){if(ce){var e=et;if(e){var r=e;if(!Mu(t,e)){if($a(t))throw Error(I(418));e=On(r.nextSibling);var o=tt;e&&Mu(t,e)?Vf(o,r):(t.flags=t.flags&-4097|2,ce=!1,tt=t)}}else{if($a(t))throw Error(I(418));t.flags=t.flags&-4097|2,ce=!1,tt=t}}}function _u(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;tt=t}function ti(t){if(t!==tt)return!1;if(!ce)return _u(t),ce=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Fa(t.type,t.memoizedProps)),e&&(e=et)){if($a(t))throw qf(),Error(I(418));for(;e;)Vf(t,e),e=On(e.nextSibling)}if(_u(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(I(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="/$"){if(e===0){et=On(t.nextSibling);break e}e--}else r!=="$"&&r!=="$!"&&r!=="$?"||e++}t=t.nextSibling}et=null}}else et=tt?On(t.stateNode.nextSibling):null;return!0}function qf(){for(var t=et;t;)t=On(t.nextSibling)}function ho(){et=tt=null,ce=!1}function Yc(t){Pt===null?Pt=[t]:Pt.push(t)}var Qy=an.ReactCurrentBatchConfig;function Lo(t,e,r){if(t=r.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(I(309));var o=r.stateNode}if(!o)throw Error(I(147,t));var s=o,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(l){var a=s.refs;l===null?delete a[i]:a[i]=l},e._stringRef=i,e)}if(typeof t!="string")throw Error(I(284));if(!r._owner)throw Error(I(290,t))}return t}function ni(t,e){throw t=Object.prototype.toString.call(e),Error(I(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Ou(t){var e=t._init;return e(t._payload)}function Jf(t){function e(g,m){if(t){var x=g.deletions;x===null?(g.deletions=[m],g.flags|=16):x.push(m)}}function r(g,m){if(!t)return null;for(;m!==null;)e(g,m),m=m.sibling;return null}function o(g,m){for(g=new Map;m!==null;)m.key!==null?g.set(m.key,m):g.set(m.index,m),m=m.sibling;return g}function s(g,m){return g=Bn(g,m),g.index=0,g.sibling=null,g}function i(g,m,x){return g.index=x,t?(x=g.alternate,x!==null?(x=x.index,x<m?(g.flags|=2,m):x):(g.flags|=2,m)):(g.flags|=1048576,m)}function l(g){return t&&g.alternate===null&&(g.flags|=2),g}function a(g,m,x,b){return m===null||m.tag!==6?(m=oa(x,g.mode,b),m.return=g,m):(m=s(m,x),m.return=g,m)}function c(g,m,x,b){var k=x.type;return k===_r?u(g,m,x.props.children,b,x.key):m!==null&&(m.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===yn&&Ou(k)===m.type)?(b=s(m,x.props),b.ref=Lo(g,m,x),b.return=g,b):(b=bi(x.type,x.key,x.props,null,g.mode,b),b.ref=Lo(g,m,x),b.return=g,b)}function d(g,m,x,b){return m===null||m.tag!==4||m.stateNode.containerInfo!==x.containerInfo||m.stateNode.implementation!==x.implementation?(m=sa(x,g.mode,b),m.return=g,m):(m=s(m,x.children||[]),m.return=g,m)}function u(g,m,x,b,k){return m===null||m.tag!==7?(m=fr(x,g.mode,b,k),m.return=g,m):(m=s(m,x),m.return=g,m)}function h(g,m,x){if(typeof m=="string"&&m!==""||typeof m=="number")return m=oa(""+m,g.mode,x),m.return=g,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Vs:return x=bi(m.type,m.key,m.props,null,g.mode,x),x.ref=Lo(g,null,m),x.return=g,x;case Mr:return m=sa(m,g.mode,x),m.return=g,m;case yn:var b=m._init;return h(g,b(m._payload),x)}if($o(m)||Io(m))return m=fr(m,g.mode,x,null),m.return=g,m;ni(g,m)}return null}function f(g,m,x,b){var k=m!==null?m.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return k!==null?null:a(g,m,""+x,b);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Vs:return x.key===k?c(g,m,x,b):null;case Mr:return x.key===k?d(g,m,x,b):null;case yn:return k=x._init,f(g,m,k(x._payload),b)}if($o(x)||Io(x))return k!==null?null:u(g,m,x,b,null);ni(g,x)}return null}function p(g,m,x,b,k){if(typeof b=="string"&&b!==""||typeof b=="number")return g=g.get(x)||null,a(m,g,""+b,k);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Vs:return g=g.get(b.key===null?x:b.key)||null,c(m,g,b,k);case Mr:return g=g.get(b.key===null?x:b.key)||null,d(m,g,b,k);case yn:var S=b._init;return p(g,m,x,S(b._payload),k)}if($o(b)||Io(b))return g=g.get(x)||null,u(m,g,b,k,null);ni(m,b)}return null}function j(g,m,x,b){for(var k=null,S=null,C=m,E=m=0,R=null;C!==null&&E<x.length;E++){C.index>E?(R=C,C=null):R=C.sibling;var A=f(g,C,x[E],b);if(A===null){C===null&&(C=R);break}t&&C&&A.alternate===null&&e(g,C),m=i(A,m,E),S===null?k=A:S.sibling=A,S=A,C=R}if(E===x.length)return r(g,C),ce&&nr(g,E),k;if(C===null){for(;E<x.length;E++)C=h(g,x[E],b),C!==null&&(m=i(C,m,E),S===null?k=C:S.sibling=C,S=C);return ce&&nr(g,E),k}for(C=o(g,C);E<x.length;E++)R=p(C,g,E,x[E],b),R!==null&&(t&&R.alternate!==null&&C.delete(R.key===null?E:R.key),m=i(R,m,E),S===null?k=R:S.sibling=R,S=R);return t&&C.forEach(function(H){return e(g,H)}),ce&&nr(g,E),k}function y(g,m,x,b){var k=Io(x);if(typeof k!="function")throw Error(I(150));if(x=k.call(x),x==null)throw Error(I(151));for(var S=k=null,C=m,E=m=0,R=null,A=x.next();C!==null&&!A.done;E++,A=x.next()){C.index>E?(R=C,C=null):R=C.sibling;var H=f(g,C,A.value,b);if(H===null){C===null&&(C=R);break}t&&C&&H.alternate===null&&e(g,C),m=i(H,m,E),S===null?k=H:S.sibling=H,S=H,C=R}if(A.done)return r(g,C),ce&&nr(g,E),k;if(C===null){for(;!A.done;E++,A=x.next())A=h(g,A.value,b),A!==null&&(m=i(A,m,E),S===null?k=A:S.sibling=A,S=A);return ce&&nr(g,E),k}for(C=o(g,C);!A.done;E++,A=x.next())A=p(C,g,E,A.value,b),A!==null&&(t&&A.alternate!==null&&C.delete(A.key===null?E:A.key),m=i(A,m,E),S===null?k=A:S.sibling=A,S=A);return t&&C.forEach(function(M){return e(g,M)}),ce&&nr(g,E),k}function w(g,m,x,b){if(typeof x=="object"&&x!==null&&x.type===_r&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Vs:e:{for(var k=x.key,S=m;S!==null;){if(S.key===k){if(k=x.type,k===_r){if(S.tag===7){r(g,S.sibling),m=s(S,x.props.children),m.return=g,g=m;break e}}else if(S.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===yn&&Ou(k)===S.type){r(g,S.sibling),m=s(S,x.props),m.ref=Lo(g,S,x),m.return=g,g=m;break e}r(g,S);break}else e(g,S);S=S.sibling}x.type===_r?(m=fr(x.props.children,g.mode,b,x.key),m.return=g,g=m):(b=bi(x.type,x.key,x.props,null,g.mode,b),b.ref=Lo(g,m,x),b.return=g,g=b)}return l(g);case Mr:e:{for(S=x.key;m!==null;){if(m.key===S)if(m.tag===4&&m.stateNode.containerInfo===x.containerInfo&&m.stateNode.implementation===x.implementation){r(g,m.sibling),m=s(m,x.children||[]),m.return=g,g=m;break e}else{r(g,m);break}else e(g,m);m=m.sibling}m=sa(x,g.mode,b),m.return=g,g=m}return l(g);case yn:return S=x._init,w(g,m,S(x._payload),b)}if($o(x))return j(g,m,x,b);if(Io(x))return y(g,m,x,b);ni(g,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,m!==null&&m.tag===6?(r(g,m.sibling),m=s(m,x),m.return=g,g=m):(r(g,m),m=oa(x,g.mode,b),m.return=g,g=m),l(g)):r(g,m)}return w}var po=Jf(!0),Kf=Jf(!1),$i=qn(null),Hi=null,$r=null,Xc=null;function Zc(){Xc=$r=Hi=null}function ed(t){var e=$i.current;le($i),t._currentValue=e}function Ua(t,e,r){for(;t!==null;){var o=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,o!==null&&(o.childLanes|=e)):o!==null&&(o.childLanes&e)!==e&&(o.childLanes|=e),t===r)break;t=t.return}}function Gr(t,e){Hi=t,Xc=$r=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Je=!0),t.firstContext=null)}function mt(t){var e=t._currentValue;if(Xc!==t)if(t={context:t,memoizedValue:e,next:null},$r===null){if(Hi===null)throw Error(I(308));$r=t,Hi.dependencies={lanes:0,firstContext:t}}else $r=$r.next=t;return e}var sr=null;function td(t){sr===null?sr=[t]:sr.push(t)}function Gf(t,e,r,o){var s=e.interleaved;return s===null?(r.next=r,td(e)):(r.next=s.next,s.next=r),e.interleaved=r,nn(t,o)}function nn(t,e){t.lanes|=e;var r=t.alternate;for(r!==null&&(r.lanes|=e),r=t,t=t.return;t!==null;)t.childLanes|=e,r=t.alternate,r!==null&&(r.childLanes|=e),r=t,t=t.return;return r.tag===3?r.stateNode:null}var jn=!1;function nd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Qf(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Yt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ln(t,e,r){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,Y&2){var s=o.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),o.pending=e,nn(t,r)}return s=o.interleaved,s===null?(e.next=e,td(o)):(e.next=s.next,s.next=e),o.interleaved=e,nn(t,r)}function gi(t,e,r){if(e=e.updateQueue,e!==null&&(e=e.shared,(r&4194240)!==0)){var o=e.lanes;o&=t.pendingLanes,r|=o,e.lanes=r,Wc(t,r)}}function Lu(t,e){var r=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,r===o)){var s=null,i=null;if(r=r.firstBaseUpdate,r!==null){do{var l={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};i===null?s=i=l:i=i.next=l,r=r.next}while(r!==null);i===null?s=i=e:i=i.next=e}else s=i=e;r={baseState:o.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:o.shared,effects:o.effects},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=e:t.next=e,r.lastBaseUpdate=e}function Ui(t,e,r,o){var s=t.updateQueue;jn=!1;var i=s.firstBaseUpdate,l=s.lastBaseUpdate,a=s.shared.pending;if(a!==null){s.shared.pending=null;var c=a,d=c.next;c.next=null,l===null?i=d:l.next=d,l=c;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==l&&(a===null?u.firstBaseUpdate=d:a.next=d,u.lastBaseUpdate=c))}if(i!==null){var h=s.baseState;l=0,u=d=c=null,a=i;do{var f=a.lane,p=a.eventTime;if((o&f)===f){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var j=t,y=a;switch(f=e,p=r,y.tag){case 1:if(j=y.payload,typeof j=="function"){h=j.call(p,h,f);break e}h=j;break e;case 3:j.flags=j.flags&-65537|128;case 0:if(j=y.payload,f=typeof j=="function"?j.call(p,h,f):j,f==null)break e;h=pe({},h,f);break e;case 2:jn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=s.effects,f===null?s.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(d=u=p,c=h):u=u.next=p,l|=f;if(a=a.next,a===null){if(a=s.shared.pending,a===null)break;f=a,a=f.next,f.next=null,s.lastBaseUpdate=f,s.shared.pending=null}}while(!0);if(u===null&&(c=h),s.baseState=c,s.firstBaseUpdate=d,s.lastBaseUpdate=u,e=s.shared.interleaved,e!==null){s=e;do l|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);vr|=l,t.lanes=l,t.memoizedState=h}}function Du(t,e,r){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var o=t[e],s=o.callback;if(s!==null){if(o.callback=null,o=r,typeof s!="function")throw Error(I(191,s));s.call(o)}}}var _s={},Wt=qn(_s),fs=qn(_s),ms=qn(_s);function ir(t){if(t===_s)throw Error(I(174));return t}function rd(t,e){switch(re(ms,e),re(fs,t),re(Wt,_s),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Sa(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Sa(e,t)}le(Wt),re(Wt,e)}function fo(){le(Wt),le(fs),le(ms)}function Yf(t){ir(ms.current);var e=ir(Wt.current),r=Sa(e,t.type);e!==r&&(re(fs,t),re(Wt,r))}function od(t){fs.current===t&&(le(Wt),le(fs))}var ue=qn(0);function Vi(t){for(var e=t;e!==null;){if(e.tag===13){var r=e.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Xl=[];function sd(){for(var t=0;t<Xl.length;t++)Xl[t]._workInProgressVersionPrimary=null;Xl.length=0}var xi=an.ReactCurrentDispatcher,Zl=an.ReactCurrentBatchConfig,xr=0,he=null,we=null,Ce=null,qi=!1,Yo=!1,gs=0,Yy=0;function Re(){throw Error(I(321))}function id(t,e){if(e===null)return!1;for(var r=0;r<e.length&&r<t.length;r++)if(!It(t[r],e[r]))return!1;return!0}function ld(t,e,r,o,s,i){if(xr=i,he=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,xi.current=t===null||t.memoizedState===null?tj:nj,t=r(o,s),Yo){i=0;do{if(Yo=!1,gs=0,25<=i)throw Error(I(301));i+=1,Ce=we=null,e.updateQueue=null,xi.current=rj,t=r(o,s)}while(Yo)}if(xi.current=Ji,e=we!==null&&we.next!==null,xr=0,Ce=we=he=null,qi=!1,e)throw Error(I(300));return t}function ad(){var t=gs!==0;return gs=0,t}function _t(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ce===null?he.memoizedState=Ce=t:Ce=Ce.next=t,Ce}function gt(){if(we===null){var t=he.alternate;t=t!==null?t.memoizedState:null}else t=we.next;var e=Ce===null?he.memoizedState:Ce.next;if(e!==null)Ce=e,we=t;else{if(t===null)throw Error(I(310));we=t,t={memoizedState:we.memoizedState,baseState:we.baseState,baseQueue:we.baseQueue,queue:we.queue,next:null},Ce===null?he.memoizedState=Ce=t:Ce=Ce.next=t}return Ce}function xs(t,e){return typeof e=="function"?e(t):e}function ea(t){var e=gt(),r=e.queue;if(r===null)throw Error(I(311));r.lastRenderedReducer=t;var o=we,s=o.baseQueue,i=r.pending;if(i!==null){if(s!==null){var l=s.next;s.next=i.next,i.next=l}o.baseQueue=s=i,r.pending=null}if(s!==null){i=s.next,o=o.baseState;var a=l=null,c=null,d=i;do{var u=d.lane;if((xr&u)===u)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),o=d.hasEagerState?d.eagerState:t(o,d.action);else{var h={lane:u,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(a=c=h,l=o):c=c.next=h,he.lanes|=u,vr|=u}d=d.next}while(d!==null&&d!==i);c===null?l=o:c.next=a,It(o,e.memoizedState)||(Je=!0),e.memoizedState=o,e.baseState=l,e.baseQueue=c,r.lastRenderedState=o}if(t=r.interleaved,t!==null){s=t;do i=s.lane,he.lanes|=i,vr|=i,s=s.next;while(s!==t)}else s===null&&(r.lanes=0);return[e.memoizedState,r.dispatch]}function ta(t){var e=gt(),r=e.queue;if(r===null)throw Error(I(311));r.lastRenderedReducer=t;var o=r.dispatch,s=r.pending,i=e.memoizedState;if(s!==null){r.pending=null;var l=s=s.next;do i=t(i,l.action),l=l.next;while(l!==s);It(i,e.memoizedState)||(Je=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),r.lastRenderedState=i}return[i,o]}function Xf(){}function Zf(t,e){var r=he,o=gt(),s=e(),i=!It(o.memoizedState,s);if(i&&(o.memoizedState=s,Je=!0),o=o.queue,cd(nm.bind(null,r,o,t),[t]),o.getSnapshot!==e||i||Ce!==null&&Ce.memoizedState.tag&1){if(r.flags|=2048,vs(9,tm.bind(null,r,o,s,e),void 0,null),Pe===null)throw Error(I(349));xr&30||em(r,e,s)}return s}function em(t,e,r){t.flags|=16384,t={getSnapshot:e,value:r},e=he.updateQueue,e===null?(e={lastEffect:null,stores:null},he.updateQueue=e,e.stores=[t]):(r=e.stores,r===null?e.stores=[t]:r.push(t))}function tm(t,e,r,o){e.value=r,e.getSnapshot=o,rm(e)&&om(t)}function nm(t,e,r){return r(function(){rm(e)&&om(t)})}function rm(t){var e=t.getSnapshot;t=t.value;try{var r=e();return!It(t,r)}catch{return!0}}function om(t){var e=nn(t,1);e!==null&&Et(e,t,1,-1)}function Fu(t){var e=_t();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xs,lastRenderedState:t},e.queue=t,t=t.dispatch=ej.bind(null,he,t),[e.memoizedState,t]}function vs(t,e,r,o){return t={tag:t,create:e,destroy:r,deps:o,next:null},e=he.updateQueue,e===null?(e={lastEffect:null,stores:null},he.updateQueue=e,e.lastEffect=t.next=t):(r=e.lastEffect,r===null?e.lastEffect=t.next=t:(o=r.next,r.next=t,t.next=o,e.lastEffect=t)),t}function sm(){return gt().memoizedState}function vi(t,e,r,o){var s=_t();he.flags|=t,s.memoizedState=vs(1|e,r,void 0,o===void 0?null:o)}function hl(t,e,r,o){var s=gt();o=o===void 0?null:o;var i=void 0;if(we!==null){var l=we.memoizedState;if(i=l.destroy,o!==null&&id(o,l.deps)){s.memoizedState=vs(e,r,i,o);return}}he.flags|=t,s.memoizedState=vs(1|e,r,i,o)}function Bu(t,e){return vi(8390656,8,t,e)}function cd(t,e){return hl(2048,8,t,e)}function im(t,e){return hl(4,2,t,e)}function lm(t,e){return hl(4,4,t,e)}function am(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function cm(t,e,r){return r=r!=null?r.concat([t]):null,hl(4,4,am.bind(null,e,t),r)}function dd(){}function dm(t,e){var r=gt();e=e===void 0?null:e;var o=r.memoizedState;return o!==null&&e!==null&&id(e,o[1])?o[0]:(r.memoizedState=[t,e],t)}function um(t,e){var r=gt();e=e===void 0?null:e;var o=r.memoizedState;return o!==null&&e!==null&&id(e,o[1])?o[0]:(t=t(),r.memoizedState=[t,e],t)}function hm(t,e,r){return xr&21?(It(r,e)||(r=xf(),he.lanes|=r,vr|=r,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Je=!0),t.memoizedState=r)}function Xy(t,e){var r=ee;ee=r!==0&&4>r?r:4,t(!0);var o=Zl.transition;Zl.transition={};try{t(!1),e()}finally{ee=r,Zl.transition=o}}function pm(){return gt().memoizedState}function Zy(t,e,r){var o=Fn(t);if(r={lane:o,action:r,hasEagerState:!1,eagerState:null,next:null},fm(t))mm(e,r);else if(r=Gf(t,e,r,o),r!==null){var s=ze();Et(r,t,o,s),gm(r,e,o)}}function ej(t,e,r){var o=Fn(t),s={lane:o,action:r,hasEagerState:!1,eagerState:null,next:null};if(fm(t))mm(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var l=e.lastRenderedState,a=i(l,r);if(s.hasEagerState=!0,s.eagerState=a,It(a,l)){var c=e.interleaved;c===null?(s.next=s,td(e)):(s.next=c.next,c.next=s),e.interleaved=s;return}}catch{}finally{}r=Gf(t,e,s,o),r!==null&&(s=ze(),Et(r,t,o,s),gm(r,e,o))}}function fm(t){var e=t.alternate;return t===he||e!==null&&e===he}function mm(t,e){Yo=qi=!0;var r=t.pending;r===null?e.next=e:(e.next=r.next,r.next=e),t.pending=e}function gm(t,e,r){if(r&4194240){var o=e.lanes;o&=t.pendingLanes,r|=o,e.lanes=r,Wc(t,r)}}var Ji={readContext:mt,useCallback:Re,useContext:Re,useEffect:Re,useImperativeHandle:Re,useInsertionEffect:Re,useLayoutEffect:Re,useMemo:Re,useReducer:Re,useRef:Re,useState:Re,useDebugValue:Re,useDeferredValue:Re,useTransition:Re,useMutableSource:Re,useSyncExternalStore:Re,useId:Re,unstable_isNewReconciler:!1},tj={readContext:mt,useCallback:function(t,e){return _t().memoizedState=[t,e===void 0?null:e],t},useContext:mt,useEffect:Bu,useImperativeHandle:function(t,e,r){return r=r!=null?r.concat([t]):null,vi(4194308,4,am.bind(null,e,t),r)},useLayoutEffect:function(t,e){return vi(4194308,4,t,e)},useInsertionEffect:function(t,e){return vi(4,2,t,e)},useMemo:function(t,e){var r=_t();return e=e===void 0?null:e,t=t(),r.memoizedState=[t,e],t},useReducer:function(t,e,r){var o=_t();return e=r!==void 0?r(e):e,o.memoizedState=o.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},o.queue=t,t=t.dispatch=Zy.bind(null,he,t),[o.memoizedState,t]},useRef:function(t){var e=_t();return t={current:t},e.memoizedState=t},useState:Fu,useDebugValue:dd,useDeferredValue:function(t){return _t().memoizedState=t},useTransition:function(){var t=Fu(!1),e=t[0];return t=Xy.bind(null,t[1]),_t().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,r){var o=he,s=_t();if(ce){if(r===void 0)throw Error(I(407));r=r()}else{if(r=e(),Pe===null)throw Error(I(349));xr&30||em(o,e,r)}s.memoizedState=r;var i={value:r,getSnapshot:e};return s.queue=i,Bu(nm.bind(null,o,i,t),[t]),o.flags|=2048,vs(9,tm.bind(null,o,i,r,e),void 0,null),r},useId:function(){var t=_t(),e=Pe.identifierPrefix;if(ce){var r=Qt,o=Gt;r=(o&~(1<<32-Nt(o)-1)).toString(32)+r,e=":"+e+"R"+r,r=gs++,0<r&&(e+="H"+r.toString(32)),e+=":"}else r=Yy++,e=":"+e+"r"+r.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},nj={readContext:mt,useCallback:dm,useContext:mt,useEffect:cd,useImperativeHandle:cm,useInsertionEffect:im,useLayoutEffect:lm,useMemo:um,useReducer:ea,useRef:sm,useState:function(){return ea(xs)},useDebugValue:dd,useDeferredValue:function(t){var e=gt();return hm(e,we.memoizedState,t)},useTransition:function(){var t=ea(xs)[0],e=gt().memoizedState;return[t,e]},useMutableSource:Xf,useSyncExternalStore:Zf,useId:pm,unstable_isNewReconciler:!1},rj={readContext:mt,useCallback:dm,useContext:mt,useEffect:cd,useImperativeHandle:cm,useInsertionEffect:im,useLayoutEffect:lm,useMemo:um,useReducer:ta,useRef:sm,useState:function(){return ta(xs)},useDebugValue:dd,useDeferredValue:function(t){var e=gt();return we===null?e.memoizedState=t:hm(e,we.memoizedState,t)},useTransition:function(){var t=ta(xs)[0],e=gt().memoizedState;return[t,e]},useMutableSource:Xf,useSyncExternalStore:Zf,useId:pm,unstable_isNewReconciler:!1};function kt(t,e){if(t&&t.defaultProps){e=pe({},e),t=t.defaultProps;for(var r in t)e[r]===void 0&&(e[r]=t[r]);return e}return e}function Va(t,e,r,o){e=t.memoizedState,r=r(o,e),r=r==null?e:pe({},e,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var pl={isMounted:function(t){return(t=t._reactInternals)?Sr(t)===t:!1},enqueueSetState:function(t,e,r){t=t._reactInternals;var o=ze(),s=Fn(t),i=Yt(o,s);i.payload=e,r!=null&&(i.callback=r),e=Ln(t,i,s),e!==null&&(Et(e,t,s,o),gi(e,t,s))},enqueueReplaceState:function(t,e,r){t=t._reactInternals;var o=ze(),s=Fn(t),i=Yt(o,s);i.tag=1,i.payload=e,r!=null&&(i.callback=r),e=Ln(t,i,s),e!==null&&(Et(e,t,s,o),gi(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var r=ze(),o=Fn(t),s=Yt(r,o);s.tag=2,e!=null&&(s.callback=e),e=Ln(t,s,o),e!==null&&(Et(e,t,o,r),gi(e,t,o))}};function zu(t,e,r,o,s,i,l){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,i,l):e.prototype&&e.prototype.isPureReactComponent?!ds(r,o)||!ds(s,i):!0}function xm(t,e,r){var o=!1,s=$n,i=e.contextType;return typeof i=="object"&&i!==null?i=mt(i):(s=Ge(e)?mr:Le.current,o=e.contextTypes,i=(o=o!=null)?uo(t,s):$n),e=new e(r,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=pl,t.stateNode=e,e._reactInternals=t,o&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function Wu(t,e,r,o){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(r,o),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(r,o),e.state!==t&&pl.enqueueReplaceState(e,e.state,null)}function qa(t,e,r,o){var s=t.stateNode;s.props=r,s.state=t.memoizedState,s.refs={},nd(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=mt(i):(i=Ge(e)?mr:Le.current,s.context=uo(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(Va(t,e,i,r),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&pl.enqueueReplaceState(s,s.state,null),Ui(t,r,s,o),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function mo(t,e){try{var r="",o=e;do r+=Iv(o),o=o.return;while(o);var s=r}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function na(t,e,r){return{value:t,source:null,stack:r??null,digest:e??null}}function Ja(t,e){try{console.error(e.value)}catch(r){setTimeout(function(){throw r})}}var oj=typeof WeakMap=="function"?WeakMap:Map;function vm(t,e,r){r=Yt(-1,r),r.tag=3,r.payload={element:null};var o=e.value;return r.callback=function(){Gi||(Gi=!0,rc=o),Ja(t,e)},r}function ym(t,e,r){r=Yt(-1,r),r.tag=3;var o=t.type.getDerivedStateFromError;if(typeof o=="function"){var s=e.value;r.payload=function(){return o(s)},r.callback=function(){Ja(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(r.callback=function(){Ja(t,e),typeof o!="function"&&(Dn===null?Dn=new Set([this]):Dn.add(this));var l=e.stack;this.componentDidCatch(e.value,{componentStack:l!==null?l:""})}),r}function $u(t,e,r){var o=t.pingCache;if(o===null){o=t.pingCache=new oj;var s=new Set;o.set(e,s)}else s=o.get(e),s===void 0&&(s=new Set,o.set(e,s));s.has(r)||(s.add(r),t=vj.bind(null,t,e,r),e.then(t,t))}function Hu(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Uu(t,e,r,o,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(e=Yt(-1,1),e.tag=2,Ln(r,e,1))),r.lanes|=1),t)}var sj=an.ReactCurrentOwner,Je=!1;function De(t,e,r,o){e.child=t===null?Kf(e,null,r,o):po(e,t.child,r,o)}function Vu(t,e,r,o,s){r=r.render;var i=e.ref;return Gr(e,s),o=ld(t,e,r,o,i,s),r=ad(),t!==null&&!Je?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,rn(t,e,s)):(ce&&r&&Gc(e),e.flags|=1,De(t,e,o,s),e.child)}function qu(t,e,r,o,s){if(t===null){var i=r.type;return typeof i=="function"&&!vd(i)&&i.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(e.tag=15,e.type=i,jm(t,e,i,o,s)):(t=bi(r.type,null,o,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var l=i.memoizedProps;if(r=r.compare,r=r!==null?r:ds,r(l,o)&&t.ref===e.ref)return rn(t,e,s)}return e.flags|=1,t=Bn(i,o),t.ref=e.ref,t.return=e,e.child=t}function jm(t,e,r,o,s){if(t!==null){var i=t.memoizedProps;if(ds(i,o)&&t.ref===e.ref)if(Je=!1,e.pendingProps=o=i,(t.lanes&s)!==0)t.flags&131072&&(Je=!0);else return e.lanes=t.lanes,rn(t,e,s)}return Ka(t,e,r,o,s)}function wm(t,e,r){var o=e.pendingProps,s=o.children,i=t!==null?t.memoizedState:null;if(o.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},re(Ur,Xe),Xe|=r;else{if(!(r&1073741824))return t=i!==null?i.baseLanes|r:r,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,re(Ur,Xe),Xe|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=i!==null?i.baseLanes:r,re(Ur,Xe),Xe|=o}else i!==null?(o=i.baseLanes|r,e.memoizedState=null):o=r,re(Ur,Xe),Xe|=o;return De(t,e,s,r),e.child}function bm(t,e){var r=e.ref;(t===null&&r!==null||t!==null&&t.ref!==r)&&(e.flags|=512,e.flags|=2097152)}function Ka(t,e,r,o,s){var i=Ge(r)?mr:Le.current;return i=uo(e,i),Gr(e,s),r=ld(t,e,r,o,i,s),o=ad(),t!==null&&!Je?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,rn(t,e,s)):(ce&&o&&Gc(e),e.flags|=1,De(t,e,r,s),e.child)}function Ju(t,e,r,o,s){if(Ge(r)){var i=!0;Bi(e)}else i=!1;if(Gr(e,s),e.stateNode===null)yi(t,e),xm(e,r,o),qa(e,r,o,s),o=!0;else if(t===null){var l=e.stateNode,a=e.memoizedProps;l.props=a;var c=l.context,d=r.contextType;typeof d=="object"&&d!==null?d=mt(d):(d=Ge(r)?mr:Le.current,d=uo(e,d));var u=r.getDerivedStateFromProps,h=typeof u=="function"||typeof l.getSnapshotBeforeUpdate=="function";h||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==o||c!==d)&&Wu(e,l,o,d),jn=!1;var f=e.memoizedState;l.state=f,Ui(e,o,l,s),c=e.memoizedState,a!==o||f!==c||Ke.current||jn?(typeof u=="function"&&(Va(e,r,u,o),c=e.memoizedState),(a=jn||zu(e,r,a,o,f,c,d))?(h||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(e.flags|=4194308)):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=o,e.memoizedState=c),l.props=o,l.state=c,l.context=d,o=a):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),o=!1)}else{l=e.stateNode,Qf(t,e),a=e.memoizedProps,d=e.type===e.elementType?a:kt(e.type,a),l.props=d,h=e.pendingProps,f=l.context,c=r.contextType,typeof c=="object"&&c!==null?c=mt(c):(c=Ge(r)?mr:Le.current,c=uo(e,c));var p=r.getDerivedStateFromProps;(u=typeof p=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==h||f!==c)&&Wu(e,l,o,c),jn=!1,f=e.memoizedState,l.state=f,Ui(e,o,l,s);var j=e.memoizedState;a!==h||f!==j||Ke.current||jn?(typeof p=="function"&&(Va(e,r,p,o),j=e.memoizedState),(d=jn||zu(e,r,d,o,f,j,c)||!1)?(u||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(o,j,c),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(o,j,c)),typeof l.componentDidUpdate=="function"&&(e.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=o,e.memoizedState=j),l.props=o,l.state=j,l.context=c,o=d):(typeof l.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),o=!1)}return Ga(t,e,r,o,i,s)}function Ga(t,e,r,o,s,i){bm(t,e);var l=(e.flags&128)!==0;if(!o&&!l)return s&&Ru(e,r,!1),rn(t,e,i);o=e.stateNode,sj.current=e;var a=l&&typeof r.getDerivedStateFromError!="function"?null:o.render();return e.flags|=1,t!==null&&l?(e.child=po(e,t.child,null,i),e.child=po(e,null,a,i)):De(t,e,a,i),e.memoizedState=o.state,s&&Ru(e,r,!0),e.child}function km(t){var e=t.stateNode;e.pendingContext?Iu(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Iu(t,e.context,!1),rd(t,e.containerInfo)}function Ku(t,e,r,o,s){return ho(),Yc(s),e.flags|=256,De(t,e,r,o),e.child}var Qa={dehydrated:null,treeContext:null,retryLane:0};function Ya(t){return{baseLanes:t,cachePool:null,transitions:null}}function Sm(t,e,r){var o=e.pendingProps,s=ue.current,i=!1,l=(e.flags&128)!==0,a;if((a=l)||(a=t!==null&&t.memoizedState===null?!1:(s&2)!==0),a?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),re(ue,s&1),t===null)return Ha(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(l=o.children,t=o.fallback,i?(o=e.mode,i=e.child,l={mode:"hidden",children:l},!(o&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=gl(l,o,0,null),t=fr(t,o,r,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=Ya(r),e.memoizedState=Qa,t):ud(e,l));if(s=t.memoizedState,s!==null&&(a=s.dehydrated,a!==null))return ij(t,e,l,o,a,s,r);if(i){i=o.fallback,l=e.mode,s=t.child,a=s.sibling;var c={mode:"hidden",children:o.children};return!(l&1)&&e.child!==s?(o=e.child,o.childLanes=0,o.pendingProps=c,e.deletions=null):(o=Bn(s,c),o.subtreeFlags=s.subtreeFlags&14680064),a!==null?i=Bn(a,i):(i=fr(i,l,r,null),i.flags|=2),i.return=e,o.return=e,o.sibling=i,e.child=o,o=i,i=e.child,l=t.child.memoizedState,l=l===null?Ya(r):{baseLanes:l.baseLanes|r,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=t.childLanes&~r,e.memoizedState=Qa,o}return i=t.child,t=i.sibling,o=Bn(i,{mode:"visible",children:o.children}),!(e.mode&1)&&(o.lanes=r),o.return=e,o.sibling=null,t!==null&&(r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)),e.child=o,e.memoizedState=null,o}function ud(t,e){return e=gl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ri(t,e,r,o){return o!==null&&Yc(o),po(e,t.child,null,r),t=ud(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function ij(t,e,r,o,s,i,l){if(r)return e.flags&256?(e.flags&=-257,o=na(Error(I(422))),ri(t,e,l,o)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=o.fallback,s=e.mode,o=gl({mode:"visible",children:o.children},s,0,null),i=fr(i,s,l,null),i.flags|=2,o.return=e,i.return=e,o.sibling=i,e.child=o,e.mode&1&&po(e,t.child,null,l),e.child.memoizedState=Ya(l),e.memoizedState=Qa,i);if(!(e.mode&1))return ri(t,e,l,null);if(s.data==="$!"){if(o=s.nextSibling&&s.nextSibling.dataset,o)var a=o.dgst;return o=a,i=Error(I(419)),o=na(i,o,void 0),ri(t,e,l,o)}if(a=(l&t.childLanes)!==0,Je||a){if(o=Pe,o!==null){switch(l&-l){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(o.suspendedLanes|l)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,nn(t,s),Et(o,t,s,-1))}return xd(),o=na(Error(I(421))),ri(t,e,l,o)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=yj.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,et=On(s.nextSibling),tt=e,ce=!0,Pt=null,t!==null&&(dt[ut++]=Gt,dt[ut++]=Qt,dt[ut++]=gr,Gt=t.id,Qt=t.overflow,gr=e),e=ud(e,o.children),e.flags|=4096,e)}function Gu(t,e,r){t.lanes|=e;var o=t.alternate;o!==null&&(o.lanes|=e),Ua(t.return,e,r)}function ra(t,e,r,o,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:o,tail:r,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=o,i.tail=r,i.tailMode=s)}function Cm(t,e,r){var o=e.pendingProps,s=o.revealOrder,i=o.tail;if(De(t,e,o.children,r),o=ue.current,o&2)o=o&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Gu(t,r,e);else if(t.tag===19)Gu(t,r,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}o&=1}if(re(ue,o),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(r=e.child,s=null;r!==null;)t=r.alternate,t!==null&&Vi(t)===null&&(s=r),r=r.sibling;r=s,r===null?(s=e.child,e.child=null):(s=r.sibling,r.sibling=null),ra(e,!1,s,r,i);break;case"backwards":for(r=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&Vi(t)===null){e.child=s;break}t=s.sibling,s.sibling=r,r=s,s=t}ra(e,!0,r,null,i);break;case"together":ra(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function yi(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function rn(t,e,r){if(t!==null&&(e.dependencies=t.dependencies),vr|=e.lanes,!(r&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(I(153));if(e.child!==null){for(t=e.child,r=Bn(t,t.pendingProps),e.child=r,r.return=e;t.sibling!==null;)t=t.sibling,r=r.sibling=Bn(t,t.pendingProps),r.return=e;r.sibling=null}return e.child}function lj(t,e,r){switch(e.tag){case 3:km(e),ho();break;case 5:Yf(e);break;case 1:Ge(e.type)&&Bi(e);break;case 4:rd(e,e.stateNode.containerInfo);break;case 10:var o=e.type._context,s=e.memoizedProps.value;re($i,o._currentValue),o._currentValue=s;break;case 13:if(o=e.memoizedState,o!==null)return o.dehydrated!==null?(re(ue,ue.current&1),e.flags|=128,null):r&e.child.childLanes?Sm(t,e,r):(re(ue,ue.current&1),t=rn(t,e,r),t!==null?t.sibling:null);re(ue,ue.current&1);break;case 19:if(o=(r&e.childLanes)!==0,t.flags&128){if(o)return Cm(t,e,r);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),re(ue,ue.current),o)break;return null;case 22:case 23:return e.lanes=0,wm(t,e,r)}return rn(t,e,r)}var Tm,Xa,Pm,Nm;Tm=function(t,e){for(var r=e.child;r!==null;){if(r.tag===5||r.tag===6)t.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Xa=function(){};Pm=function(t,e,r,o){var s=t.memoizedProps;if(s!==o){t=e.stateNode,ir(Wt.current);var i=null;switch(r){case"input":s=ja(t,s),o=ja(t,o),i=[];break;case"select":s=pe({},s,{value:void 0}),o=pe({},o,{value:void 0}),i=[];break;case"textarea":s=ka(t,s),o=ka(t,o),i=[];break;default:typeof s.onClick!="function"&&typeof o.onClick=="function"&&(t.onclick=Di)}Ca(r,o);var l;r=null;for(d in s)if(!o.hasOwnProperty(d)&&s.hasOwnProperty(d)&&s[d]!=null)if(d==="style"){var a=s[d];for(l in a)a.hasOwnProperty(l)&&(r||(r={}),r[l]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(rs.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in o){var c=o[d];if(a=s!=null?s[d]:void 0,o.hasOwnProperty(d)&&c!==a&&(c!=null||a!=null))if(d==="style")if(a){for(l in a)!a.hasOwnProperty(l)||c&&c.hasOwnProperty(l)||(r||(r={}),r[l]="");for(l in c)c.hasOwnProperty(l)&&a[l]!==c[l]&&(r||(r={}),r[l]=c[l])}else r||(i||(i=[]),i.push(d,r)),r=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,a=a?a.__html:void 0,c!=null&&a!==c&&(i=i||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(i=i||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(rs.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&ie("scroll",t),i||a===c||(i=[])):(i=i||[]).push(d,c))}r&&(i=i||[]).push("style",r);var d=i;(e.updateQueue=d)&&(e.flags|=4)}};Nm=function(t,e,r,o){r!==o&&(e.flags|=4)};function Do(t,e){if(!ce)switch(t.tailMode){case"hidden":e=t.tail;for(var r=null;e!==null;)e.alternate!==null&&(r=e),e=e.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Me(t){var e=t.alternate!==null&&t.alternate.child===t.child,r=0,o=0;if(e)for(var s=t.child;s!==null;)r|=s.lanes|s.childLanes,o|=s.subtreeFlags&14680064,o|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)r|=s.lanes|s.childLanes,o|=s.subtreeFlags,o|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=o,t.childLanes=r,e}function aj(t,e,r){var o=e.pendingProps;switch(Qc(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Me(e),null;case 1:return Ge(e.type)&&Fi(),Me(e),null;case 3:return o=e.stateNode,fo(),le(Ke),le(Le),sd(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(t===null||t.child===null)&&(ti(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Pt!==null&&(ic(Pt),Pt=null))),Xa(t,e),Me(e),null;case 5:od(e);var s=ir(ms.current);if(r=e.type,t!==null&&e.stateNode!=null)Pm(t,e,r,o,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!o){if(e.stateNode===null)throw Error(I(166));return Me(e),null}if(t=ir(Wt.current),ti(e)){o=e.stateNode,r=e.type;var i=e.memoizedProps;switch(o[Ft]=e,o[ps]=i,t=(e.mode&1)!==0,r){case"dialog":ie("cancel",o),ie("close",o);break;case"iframe":case"object":case"embed":ie("load",o);break;case"video":case"audio":for(s=0;s<Uo.length;s++)ie(Uo[s],o);break;case"source":ie("error",o);break;case"img":case"image":case"link":ie("error",o),ie("load",o);break;case"details":ie("toggle",o);break;case"input":ou(o,i),ie("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!i.multiple},ie("invalid",o);break;case"textarea":iu(o,i),ie("invalid",o)}Ca(r,i),s=null;for(var l in i)if(i.hasOwnProperty(l)){var a=i[l];l==="children"?typeof a=="string"?o.textContent!==a&&(i.suppressHydrationWarning!==!0&&ei(o.textContent,a,t),s=["children",a]):typeof a=="number"&&o.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&ei(o.textContent,a,t),s=["children",""+a]):rs.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&ie("scroll",o)}switch(r){case"input":qs(o),su(o,i,!0);break;case"textarea":qs(o),lu(o);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(o.onclick=Di)}o=s,e.updateQueue=o,o!==null&&(e.flags|=4)}else{l=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=tf(r)),t==="http://www.w3.org/1999/xhtml"?r==="script"?(t=l.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof o.is=="string"?t=l.createElement(r,{is:o.is}):(t=l.createElement(r),r==="select"&&(l=t,o.multiple?l.multiple=!0:o.size&&(l.size=o.size))):t=l.createElementNS(t,r),t[Ft]=e,t[ps]=o,Tm(t,e,!1,!1),e.stateNode=t;e:{switch(l=Ta(r,o),r){case"dialog":ie("cancel",t),ie("close",t),s=o;break;case"iframe":case"object":case"embed":ie("load",t),s=o;break;case"video":case"audio":for(s=0;s<Uo.length;s++)ie(Uo[s],t);s=o;break;case"source":ie("error",t),s=o;break;case"img":case"image":case"link":ie("error",t),ie("load",t),s=o;break;case"details":ie("toggle",t),s=o;break;case"input":ou(t,o),s=ja(t,o),ie("invalid",t);break;case"option":s=o;break;case"select":t._wrapperState={wasMultiple:!!o.multiple},s=pe({},o,{value:void 0}),ie("invalid",t);break;case"textarea":iu(t,o),s=ka(t,o),ie("invalid",t);break;default:s=o}Ca(r,s),a=s;for(i in a)if(a.hasOwnProperty(i)){var c=a[i];i==="style"?of(t,c):i==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&nf(t,c)):i==="children"?typeof c=="string"?(r!=="textarea"||c!=="")&&os(t,c):typeof c=="number"&&os(t,""+c):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(rs.hasOwnProperty(i)?c!=null&&i==="onScroll"&&ie("scroll",t):c!=null&&Oc(t,i,c,l))}switch(r){case"input":qs(t),su(t,o,!1);break;case"textarea":qs(t),lu(t);break;case"option":o.value!=null&&t.setAttribute("value",""+Wn(o.value));break;case"select":t.multiple=!!o.multiple,i=o.value,i!=null?Vr(t,!!o.multiple,i,!1):o.defaultValue!=null&&Vr(t,!!o.multiple,o.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=Di)}switch(r){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Me(e),null;case 6:if(t&&e.stateNode!=null)Nm(t,e,t.memoizedProps,o);else{if(typeof o!="string"&&e.stateNode===null)throw Error(I(166));if(r=ir(ms.current),ir(Wt.current),ti(e)){if(o=e.stateNode,r=e.memoizedProps,o[Ft]=e,(i=o.nodeValue!==r)&&(t=tt,t!==null))switch(t.tag){case 3:ei(o.nodeValue,r,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ei(o.nodeValue,r,(t.mode&1)!==0)}i&&(e.flags|=4)}else o=(r.nodeType===9?r:r.ownerDocument).createTextNode(o),o[Ft]=e,e.stateNode=o}return Me(e),null;case 13:if(le(ue),o=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ce&&et!==null&&e.mode&1&&!(e.flags&128))qf(),ho(),e.flags|=98560,i=!1;else if(i=ti(e),o!==null&&o.dehydrated!==null){if(t===null){if(!i)throw Error(I(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(I(317));i[Ft]=e}else ho(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Me(e),i=!1}else Pt!==null&&(ic(Pt),Pt=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=r,e):(o=o!==null,o!==(t!==null&&t.memoizedState!==null)&&o&&(e.child.flags|=8192,e.mode&1&&(t===null||ue.current&1?ke===0&&(ke=3):xd())),e.updateQueue!==null&&(e.flags|=4),Me(e),null);case 4:return fo(),Xa(t,e),t===null&&us(e.stateNode.containerInfo),Me(e),null;case 10:return ed(e.type._context),Me(e),null;case 17:return Ge(e.type)&&Fi(),Me(e),null;case 19:if(le(ue),i=e.memoizedState,i===null)return Me(e),null;if(o=(e.flags&128)!==0,l=i.rendering,l===null)if(o)Do(i,!1);else{if(ke!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(l=Vi(t),l!==null){for(e.flags|=128,Do(i,!1),o=l.updateQueue,o!==null&&(e.updateQueue=o,e.flags|=4),e.subtreeFlags=0,o=r,r=e.child;r!==null;)i=r,t=o,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,t=l.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),r=r.sibling;return re(ue,ue.current&1|2),e.child}t=t.sibling}i.tail!==null&&me()>go&&(e.flags|=128,o=!0,Do(i,!1),e.lanes=4194304)}else{if(!o)if(t=Vi(l),t!==null){if(e.flags|=128,o=!0,r=t.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),Do(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!ce)return Me(e),null}else 2*me()-i.renderingStartTime>go&&r!==1073741824&&(e.flags|=128,o=!0,Do(i,!1),e.lanes=4194304);i.isBackwards?(l.sibling=e.child,e.child=l):(r=i.last,r!==null?r.sibling=l:e.child=l,i.last=l)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=me(),e.sibling=null,r=ue.current,re(ue,o?r&1|2:r&1),e):(Me(e),null);case 22:case 23:return gd(),o=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==o&&(e.flags|=8192),o&&e.mode&1?Xe&1073741824&&(Me(e),e.subtreeFlags&6&&(e.flags|=8192)):Me(e),null;case 24:return null;case 25:return null}throw Error(I(156,e.tag))}function cj(t,e){switch(Qc(e),e.tag){case 1:return Ge(e.type)&&Fi(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return fo(),le(Ke),le(Le),sd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return od(e),null;case 13:if(le(ue),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(I(340));ho()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return le(ue),null;case 4:return fo(),null;case 10:return ed(e.type._context),null;case 22:case 23:return gd(),null;case 24:return null;default:return null}}var oi=!1,Oe=!1,dj=typeof WeakSet=="function"?WeakSet:Set,D=null;function Hr(t,e){var r=t.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(o){fe(t,e,o)}else r.current=null}function Za(t,e,r){try{r()}catch(o){fe(t,e,o)}}var Qu=!1;function uj(t,e){if(La=_i,t=Mf(),Kc(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else e:{r=(r=t.ownerDocument)&&r.defaultView||window;var o=r.getSelection&&r.getSelection();if(o&&o.rangeCount!==0){r=o.anchorNode;var s=o.anchorOffset,i=o.focusNode;o=o.focusOffset;try{r.nodeType,i.nodeType}catch{r=null;break e}var l=0,a=-1,c=-1,d=0,u=0,h=t,f=null;t:for(;;){for(var p;h!==r||s!==0&&h.nodeType!==3||(a=l+s),h!==i||o!==0&&h.nodeType!==3||(c=l+o),h.nodeType===3&&(l+=h.nodeValue.length),(p=h.firstChild)!==null;)f=h,h=p;for(;;){if(h===t)break t;if(f===r&&++d===s&&(a=l),f===i&&++u===o&&(c=l),(p=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=p}r=a===-1||c===-1?null:{start:a,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(Da={focusedElem:t,selectionRange:r},_i=!1,D=e;D!==null;)if(e=D,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,D=t;else for(;D!==null;){e=D;try{var j=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(j!==null){var y=j.memoizedProps,w=j.memoizedState,g=e.stateNode,m=g.getSnapshotBeforeUpdate(e.elementType===e.type?y:kt(e.type,y),w);g.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(I(163))}}catch(b){fe(e,e.return,b)}if(t=e.sibling,t!==null){t.return=e.return,D=t;break}D=e.return}return j=Qu,Qu=!1,j}function Xo(t,e,r){var o=e.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var s=o=o.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&Za(e,r,i)}s=s.next}while(s!==o)}}function fl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var r=e=e.next;do{if((r.tag&t)===t){var o=r.create;r.destroy=o()}r=r.next}while(r!==e)}}function ec(t){var e=t.ref;if(e!==null){var r=t.stateNode;switch(t.tag){case 5:t=r;break;default:t=r}typeof e=="function"?e(t):e.current=t}}function Em(t){var e=t.alternate;e!==null&&(t.alternate=null,Em(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ft],delete e[ps],delete e[za],delete e[Jy],delete e[Ky])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Am(t){return t.tag===5||t.tag===3||t.tag===4}function Yu(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Am(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function tc(t,e,r){var o=t.tag;if(o===5||o===6)t=t.stateNode,e?r.nodeType===8?r.parentNode.insertBefore(t,e):r.insertBefore(t,e):(r.nodeType===8?(e=r.parentNode,e.insertBefore(t,r)):(e=r,e.appendChild(t)),r=r._reactRootContainer,r!=null||e.onclick!==null||(e.onclick=Di));else if(o!==4&&(t=t.child,t!==null))for(tc(t,e,r),t=t.sibling;t!==null;)tc(t,e,r),t=t.sibling}function nc(t,e,r){var o=t.tag;if(o===5||o===6)t=t.stateNode,e?r.insertBefore(t,e):r.appendChild(t);else if(o!==4&&(t=t.child,t!==null))for(nc(t,e,r),t=t.sibling;t!==null;)nc(t,e,r),t=t.sibling}var Ne=null,Tt=!1;function mn(t,e,r){for(r=r.child;r!==null;)Im(t,e,r),r=r.sibling}function Im(t,e,r){if(zt&&typeof zt.onCommitFiberUnmount=="function")try{zt.onCommitFiberUnmount(il,r)}catch{}switch(r.tag){case 5:Oe||Hr(r,e);case 6:var o=Ne,s=Tt;Ne=null,mn(t,e,r),Ne=o,Tt=s,Ne!==null&&(Tt?(t=Ne,r=r.stateNode,t.nodeType===8?t.parentNode.removeChild(r):t.removeChild(r)):Ne.removeChild(r.stateNode));break;case 18:Ne!==null&&(Tt?(t=Ne,r=r.stateNode,t.nodeType===8?Ql(t.parentNode,r):t.nodeType===1&&Ql(t,r),as(t)):Ql(Ne,r.stateNode));break;case 4:o=Ne,s=Tt,Ne=r.stateNode.containerInfo,Tt=!0,mn(t,e,r),Ne=o,Tt=s;break;case 0:case 11:case 14:case 15:if(!Oe&&(o=r.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){s=o=o.next;do{var i=s,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&Za(r,e,l),s=s.next}while(s!==o)}mn(t,e,r);break;case 1:if(!Oe&&(Hr(r,e),o=r.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=r.memoizedProps,o.state=r.memoizedState,o.componentWillUnmount()}catch(a){fe(r,e,a)}mn(t,e,r);break;case 21:mn(t,e,r);break;case 22:r.mode&1?(Oe=(o=Oe)||r.memoizedState!==null,mn(t,e,r),Oe=o):mn(t,e,r);break;default:mn(t,e,r)}}function Xu(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var r=t.stateNode;r===null&&(r=t.stateNode=new dj),e.forEach(function(o){var s=jj.bind(null,t,o);r.has(o)||(r.add(o),o.then(s,s))})}}function wt(t,e){var r=e.deletions;if(r!==null)for(var o=0;o<r.length;o++){var s=r[o];try{var i=t,l=e,a=l;e:for(;a!==null;){switch(a.tag){case 5:Ne=a.stateNode,Tt=!1;break e;case 3:Ne=a.stateNode.containerInfo,Tt=!0;break e;case 4:Ne=a.stateNode.containerInfo,Tt=!0;break e}a=a.return}if(Ne===null)throw Error(I(160));Im(i,l,s),Ne=null,Tt=!1;var c=s.alternate;c!==null&&(c.return=null),s.return=null}catch(d){fe(s,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Rm(e,t),e=e.sibling}function Rm(t,e){var r=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(wt(e,t),Mt(t),o&4){try{Xo(3,t,t.return),fl(3,t)}catch(y){fe(t,t.return,y)}try{Xo(5,t,t.return)}catch(y){fe(t,t.return,y)}}break;case 1:wt(e,t),Mt(t),o&512&&r!==null&&Hr(r,r.return);break;case 5:if(wt(e,t),Mt(t),o&512&&r!==null&&Hr(r,r.return),t.flags&32){var s=t.stateNode;try{os(s,"")}catch(y){fe(t,t.return,y)}}if(o&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,l=r!==null?r.memoizedProps:i,a=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&Zp(s,i),Ta(a,l);var d=Ta(a,i);for(l=0;l<c.length;l+=2){var u=c[l],h=c[l+1];u==="style"?of(s,h):u==="dangerouslySetInnerHTML"?nf(s,h):u==="children"?os(s,h):Oc(s,u,h,d)}switch(a){case"input":wa(s,i);break;case"textarea":ef(s,i);break;case"select":var f=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var p=i.value;p!=null?Vr(s,!!i.multiple,p,!1):f!==!!i.multiple&&(i.defaultValue!=null?Vr(s,!!i.multiple,i.defaultValue,!0):Vr(s,!!i.multiple,i.multiple?[]:"",!1))}s[ps]=i}catch(y){fe(t,t.return,y)}}break;case 6:if(wt(e,t),Mt(t),o&4){if(t.stateNode===null)throw Error(I(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(y){fe(t,t.return,y)}}break;case 3:if(wt(e,t),Mt(t),o&4&&r!==null&&r.memoizedState.isDehydrated)try{as(e.containerInfo)}catch(y){fe(t,t.return,y)}break;case 4:wt(e,t),Mt(t);break;case 13:wt(e,t),Mt(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(fd=me())),o&4&&Xu(t);break;case 22:if(u=r!==null&&r.memoizedState!==null,t.mode&1?(Oe=(d=Oe)||u,wt(e,t),Oe=d):wt(e,t),Mt(t),o&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!u&&t.mode&1)for(D=t,u=t.child;u!==null;){for(h=D=u;D!==null;){switch(f=D,p=f.child,f.tag){case 0:case 11:case 14:case 15:Xo(4,f,f.return);break;case 1:Hr(f,f.return);var j=f.stateNode;if(typeof j.componentWillUnmount=="function"){o=f,r=f.return;try{e=o,j.props=e.memoizedProps,j.state=e.memoizedState,j.componentWillUnmount()}catch(y){fe(o,r,y)}}break;case 5:Hr(f,f.return);break;case 22:if(f.memoizedState!==null){eh(h);continue}}p!==null?(p.return=f,D=p):eh(h)}u=u.sibling}e:for(u=null,h=t;;){if(h.tag===5){if(u===null){u=h;try{s=h.stateNode,d?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=h.stateNode,c=h.memoizedProps.style,l=c!=null&&c.hasOwnProperty("display")?c.display:null,a.style.display=rf("display",l))}catch(y){fe(t,t.return,y)}}}else if(h.tag===6){if(u===null)try{h.stateNode.nodeValue=d?"":h.memoizedProps}catch(y){fe(t,t.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;u===h&&(u=null),h=h.return}u===h&&(u=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:wt(e,t),Mt(t),o&4&&Xu(t);break;case 21:break;default:wt(e,t),Mt(t)}}function Mt(t){var e=t.flags;if(e&2){try{e:{for(var r=t.return;r!==null;){if(Am(r)){var o=r;break e}r=r.return}throw Error(I(160))}switch(o.tag){case 5:var s=o.stateNode;o.flags&32&&(os(s,""),o.flags&=-33);var i=Yu(t);nc(t,i,s);break;case 3:case 4:var l=o.stateNode.containerInfo,a=Yu(t);tc(t,a,l);break;default:throw Error(I(161))}}catch(c){fe(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function hj(t,e,r){D=t,Mm(t)}function Mm(t,e,r){for(var o=(t.mode&1)!==0;D!==null;){var s=D,i=s.child;if(s.tag===22&&o){var l=s.memoizedState!==null||oi;if(!l){var a=s.alternate,c=a!==null&&a.memoizedState!==null||Oe;a=oi;var d=Oe;if(oi=l,(Oe=c)&&!d)for(D=s;D!==null;)l=D,c=l.child,l.tag===22&&l.memoizedState!==null?th(s):c!==null?(c.return=l,D=c):th(s);for(;i!==null;)D=i,Mm(i),i=i.sibling;D=s,oi=a,Oe=d}Zu(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,D=i):Zu(t)}}function Zu(t){for(;D!==null;){var e=D;if(e.flags&8772){var r=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Oe||fl(5,e);break;case 1:var o=e.stateNode;if(e.flags&4&&!Oe)if(r===null)o.componentDidMount();else{var s=e.elementType===e.type?r.memoizedProps:kt(e.type,r.memoizedProps);o.componentDidUpdate(s,r.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&Du(e,i,o);break;case 3:var l=e.updateQueue;if(l!==null){if(r=null,e.child!==null)switch(e.child.tag){case 5:r=e.child.stateNode;break;case 1:r=e.child.stateNode}Du(e,l,r)}break;case 5:var a=e.stateNode;if(r===null&&e.flags&4){r=a;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&r.focus();break;case"img":c.src&&(r.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var u=d.memoizedState;if(u!==null){var h=u.dehydrated;h!==null&&as(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(I(163))}Oe||e.flags&512&&ec(e)}catch(f){fe(e,e.return,f)}}if(e===t){D=null;break}if(r=e.sibling,r!==null){r.return=e.return,D=r;break}D=e.return}}function eh(t){for(;D!==null;){var e=D;if(e===t){D=null;break}var r=e.sibling;if(r!==null){r.return=e.return,D=r;break}D=e.return}}function th(t){for(;D!==null;){var e=D;try{switch(e.tag){case 0:case 11:case 15:var r=e.return;try{fl(4,e)}catch(c){fe(e,r,c)}break;case 1:var o=e.stateNode;if(typeof o.componentDidMount=="function"){var s=e.return;try{o.componentDidMount()}catch(c){fe(e,s,c)}}var i=e.return;try{ec(e)}catch(c){fe(e,i,c)}break;case 5:var l=e.return;try{ec(e)}catch(c){fe(e,l,c)}}}catch(c){fe(e,e.return,c)}if(e===t){D=null;break}var a=e.sibling;if(a!==null){a.return=e.return,D=a;break}D=e.return}}var pj=Math.ceil,Ki=an.ReactCurrentDispatcher,hd=an.ReactCurrentOwner,ft=an.ReactCurrentBatchConfig,Y=0,Pe=null,xe=null,Ee=0,Xe=0,Ur=qn(0),ke=0,ys=null,vr=0,ml=0,pd=0,Zo=null,Ve=null,fd=0,go=1/0,qt=null,Gi=!1,rc=null,Dn=null,si=!1,An=null,Qi=0,es=0,oc=null,ji=-1,wi=0;function ze(){return Y&6?me():ji!==-1?ji:ji=me()}function Fn(t){return t.mode&1?Y&2&&Ee!==0?Ee&-Ee:Qy.transition!==null?(wi===0&&(wi=xf()),wi):(t=ee,t!==0||(t=window.event,t=t===void 0?16:Sf(t.type)),t):1}function Et(t,e,r,o){if(50<es)throw es=0,oc=null,Error(I(185));Is(t,r,o),(!(Y&2)||t!==Pe)&&(t===Pe&&(!(Y&2)&&(ml|=r),ke===4&&bn(t,Ee)),Qe(t,o),r===1&&Y===0&&!(e.mode&1)&&(go=me()+500,ul&&Jn()))}function Qe(t,e){var r=t.callbackNode;Qv(t,e);var o=Mi(t,t===Pe?Ee:0);if(o===0)r!==null&&du(r),t.callbackNode=null,t.callbackPriority=0;else if(e=o&-o,t.callbackPriority!==e){if(r!=null&&du(r),e===1)t.tag===0?Gy(nh.bind(null,t)):Hf(nh.bind(null,t)),Vy(function(){!(Y&6)&&Jn()}),r=null;else{switch(vf(o)){case 1:r=zc;break;case 4:r=mf;break;case 16:r=Ri;break;case 536870912:r=gf;break;default:r=Ri}r=Wm(r,_m.bind(null,t))}t.callbackPriority=e,t.callbackNode=r}}function _m(t,e){if(ji=-1,wi=0,Y&6)throw Error(I(327));var r=t.callbackNode;if(Qr()&&t.callbackNode!==r)return null;var o=Mi(t,t===Pe?Ee:0);if(o===0)return null;if(o&30||o&t.expiredLanes||e)e=Yi(t,o);else{e=o;var s=Y;Y|=2;var i=Lm();(Pe!==t||Ee!==e)&&(qt=null,go=me()+500,pr(t,e));do try{gj();break}catch(a){Om(t,a)}while(!0);Zc(),Ki.current=i,Y=s,xe!==null?e=0:(Pe=null,Ee=0,e=ke)}if(e!==0){if(e===2&&(s=Ia(t),s!==0&&(o=s,e=sc(t,s))),e===1)throw r=ys,pr(t,0),bn(t,o),Qe(t,me()),r;if(e===6)bn(t,o);else{if(s=t.current.alternate,!(o&30)&&!fj(s)&&(e=Yi(t,o),e===2&&(i=Ia(t),i!==0&&(o=i,e=sc(t,i))),e===1))throw r=ys,pr(t,0),bn(t,o),Qe(t,me()),r;switch(t.finishedWork=s,t.finishedLanes=o,e){case 0:case 1:throw Error(I(345));case 2:rr(t,Ve,qt);break;case 3:if(bn(t,o),(o&130023424)===o&&(e=fd+500-me(),10<e)){if(Mi(t,0)!==0)break;if(s=t.suspendedLanes,(s&o)!==o){ze(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=Ba(rr.bind(null,t,Ve,qt),e);break}rr(t,Ve,qt);break;case 4:if(bn(t,o),(o&4194240)===o)break;for(e=t.eventTimes,s=-1;0<o;){var l=31-Nt(o);i=1<<l,l=e[l],l>s&&(s=l),o&=~i}if(o=s,o=me()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*pj(o/1960))-o,10<o){t.timeoutHandle=Ba(rr.bind(null,t,Ve,qt),o);break}rr(t,Ve,qt);break;case 5:rr(t,Ve,qt);break;default:throw Error(I(329))}}}return Qe(t,me()),t.callbackNode===r?_m.bind(null,t):null}function sc(t,e){var r=Zo;return t.current.memoizedState.isDehydrated&&(pr(t,e).flags|=256),t=Yi(t,e),t!==2&&(e=Ve,Ve=r,e!==null&&ic(e)),t}function ic(t){Ve===null?Ve=t:Ve.push.apply(Ve,t)}function fj(t){for(var e=t;;){if(e.flags&16384){var r=e.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var o=0;o<r.length;o++){var s=r[o],i=s.getSnapshot;s=s.value;try{if(!It(i(),s))return!1}catch{return!1}}}if(r=e.child,e.subtreeFlags&16384&&r!==null)r.return=e,e=r;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function bn(t,e){for(e&=~pd,e&=~ml,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var r=31-Nt(e),o=1<<r;t[r]=-1,e&=~o}}function nh(t){if(Y&6)throw Error(I(327));Qr();var e=Mi(t,0);if(!(e&1))return Qe(t,me()),null;var r=Yi(t,e);if(t.tag!==0&&r===2){var o=Ia(t);o!==0&&(e=o,r=sc(t,o))}if(r===1)throw r=ys,pr(t,0),bn(t,e),Qe(t,me()),r;if(r===6)throw Error(I(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,rr(t,Ve,qt),Qe(t,me()),null}function md(t,e){var r=Y;Y|=1;try{return t(e)}finally{Y=r,Y===0&&(go=me()+500,ul&&Jn())}}function yr(t){An!==null&&An.tag===0&&!(Y&6)&&Qr();var e=Y;Y|=1;var r=ft.transition,o=ee;try{if(ft.transition=null,ee=1,t)return t()}finally{ee=o,ft.transition=r,Y=e,!(Y&6)&&Jn()}}function gd(){Xe=Ur.current,le(Ur)}function pr(t,e){t.finishedWork=null,t.finishedLanes=0;var r=t.timeoutHandle;if(r!==-1&&(t.timeoutHandle=-1,Uy(r)),xe!==null)for(r=xe.return;r!==null;){var o=r;switch(Qc(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&Fi();break;case 3:fo(),le(Ke),le(Le),sd();break;case 5:od(o);break;case 4:fo();break;case 13:le(ue);break;case 19:le(ue);break;case 10:ed(o.type._context);break;case 22:case 23:gd()}r=r.return}if(Pe=t,xe=t=Bn(t.current,null),Ee=Xe=e,ke=0,ys=null,pd=ml=vr=0,Ve=Zo=null,sr!==null){for(e=0;e<sr.length;e++)if(r=sr[e],o=r.interleaved,o!==null){r.interleaved=null;var s=o.next,i=r.pending;if(i!==null){var l=i.next;i.next=s,o.next=l}r.pending=o}sr=null}return t}function Om(t,e){do{var r=xe;try{if(Zc(),xi.current=Ji,qi){for(var o=he.memoizedState;o!==null;){var s=o.queue;s!==null&&(s.pending=null),o=o.next}qi=!1}if(xr=0,Ce=we=he=null,Yo=!1,gs=0,hd.current=null,r===null||r.return===null){ke=1,ys=e,xe=null;break}e:{var i=t,l=r.return,a=r,c=e;if(e=Ee,a.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,u=a,h=u.tag;if(!(u.mode&1)&&(h===0||h===11||h===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=Hu(l);if(p!==null){p.flags&=-257,Uu(p,l,a,i,e),p.mode&1&&$u(i,d,e),e=p,c=d;var j=e.updateQueue;if(j===null){var y=new Set;y.add(c),e.updateQueue=y}else j.add(c);break e}else{if(!(e&1)){$u(i,d,e),xd();break e}c=Error(I(426))}}else if(ce&&a.mode&1){var w=Hu(l);if(w!==null){!(w.flags&65536)&&(w.flags|=256),Uu(w,l,a,i,e),Yc(mo(c,a));break e}}i=c=mo(c,a),ke!==4&&(ke=2),Zo===null?Zo=[i]:Zo.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var g=vm(i,c,e);Lu(i,g);break e;case 1:a=c;var m=i.type,x=i.stateNode;if(!(i.flags&128)&&(typeof m.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Dn===null||!Dn.has(x)))){i.flags|=65536,e&=-e,i.lanes|=e;var b=ym(i,a,e);Lu(i,b);break e}}i=i.return}while(i!==null)}Fm(r)}catch(k){e=k,xe===r&&r!==null&&(xe=r=r.return);continue}break}while(!0)}function Lm(){var t=Ki.current;return Ki.current=Ji,t===null?Ji:t}function xd(){(ke===0||ke===3||ke===2)&&(ke=4),Pe===null||!(vr&268435455)&&!(ml&268435455)||bn(Pe,Ee)}function Yi(t,e){var r=Y;Y|=2;var o=Lm();(Pe!==t||Ee!==e)&&(qt=null,pr(t,e));do try{mj();break}catch(s){Om(t,s)}while(!0);if(Zc(),Y=r,Ki.current=o,xe!==null)throw Error(I(261));return Pe=null,Ee=0,ke}function mj(){for(;xe!==null;)Dm(xe)}function gj(){for(;xe!==null&&!Wv();)Dm(xe)}function Dm(t){var e=zm(t.alternate,t,Xe);t.memoizedProps=t.pendingProps,e===null?Fm(t):xe=e,hd.current=null}function Fm(t){var e=t;do{var r=e.alternate;if(t=e.return,e.flags&32768){if(r=cj(r,e),r!==null){r.flags&=32767,xe=r;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ke=6,xe=null;return}}else if(r=aj(r,e,Xe),r!==null){xe=r;return}if(e=e.sibling,e!==null){xe=e;return}xe=e=t}while(e!==null);ke===0&&(ke=5)}function rr(t,e,r){var o=ee,s=ft.transition;try{ft.transition=null,ee=1,xj(t,e,r,o)}finally{ft.transition=s,ee=o}return null}function xj(t,e,r,o){do Qr();while(An!==null);if(Y&6)throw Error(I(327));r=t.finishedWork;var s=t.finishedLanes;if(r===null)return null;if(t.finishedWork=null,t.finishedLanes=0,r===t.current)throw Error(I(177));t.callbackNode=null,t.callbackPriority=0;var i=r.lanes|r.childLanes;if(Yv(t,i),t===Pe&&(xe=Pe=null,Ee=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||si||(si=!0,Wm(Ri,function(){return Qr(),null})),i=(r.flags&15990)!==0,r.subtreeFlags&15990||i){i=ft.transition,ft.transition=null;var l=ee;ee=1;var a=Y;Y|=4,hd.current=null,uj(t,r),Rm(r,t),Dy(Da),_i=!!La,Da=La=null,t.current=r,hj(r),$v(),Y=a,ee=l,ft.transition=i}else t.current=r;if(si&&(si=!1,An=t,Qi=s),i=t.pendingLanes,i===0&&(Dn=null),Vv(r.stateNode),Qe(t,me()),e!==null)for(o=t.onRecoverableError,r=0;r<e.length;r++)s=e[r],o(s.value,{componentStack:s.stack,digest:s.digest});if(Gi)throw Gi=!1,t=rc,rc=null,t;return Qi&1&&t.tag!==0&&Qr(),i=t.pendingLanes,i&1?t===oc?es++:(es=0,oc=t):es=0,Jn(),null}function Qr(){if(An!==null){var t=vf(Qi),e=ft.transition,r=ee;try{if(ft.transition=null,ee=16>t?16:t,An===null)var o=!1;else{if(t=An,An=null,Qi=0,Y&6)throw Error(I(331));var s=Y;for(Y|=4,D=t.current;D!==null;){var i=D,l=i.child;if(D.flags&16){var a=i.deletions;if(a!==null){for(var c=0;c<a.length;c++){var d=a[c];for(D=d;D!==null;){var u=D;switch(u.tag){case 0:case 11:case 15:Xo(8,u,i)}var h=u.child;if(h!==null)h.return=u,D=h;else for(;D!==null;){u=D;var f=u.sibling,p=u.return;if(Em(u),u===d){D=null;break}if(f!==null){f.return=p,D=f;break}D=p}}}var j=i.alternate;if(j!==null){var y=j.child;if(y!==null){j.child=null;do{var w=y.sibling;y.sibling=null,y=w}while(y!==null)}}D=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,D=l;else e:for(;D!==null;){if(i=D,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Xo(9,i,i.return)}var g=i.sibling;if(g!==null){g.return=i.return,D=g;break e}D=i.return}}var m=t.current;for(D=m;D!==null;){l=D;var x=l.child;if(l.subtreeFlags&2064&&x!==null)x.return=l,D=x;else e:for(l=m;D!==null;){if(a=D,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:fl(9,a)}}catch(k){fe(a,a.return,k)}if(a===l){D=null;break e}var b=a.sibling;if(b!==null){b.return=a.return,D=b;break e}D=a.return}}if(Y=s,Jn(),zt&&typeof zt.onPostCommitFiberRoot=="function")try{zt.onPostCommitFiberRoot(il,t)}catch{}o=!0}return o}finally{ee=r,ft.transition=e}}return!1}function rh(t,e,r){e=mo(r,e),e=vm(t,e,1),t=Ln(t,e,1),e=ze(),t!==null&&(Is(t,1,e),Qe(t,e))}function fe(t,e,r){if(t.tag===3)rh(t,t,r);else for(;e!==null;){if(e.tag===3){rh(e,t,r);break}else if(e.tag===1){var o=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Dn===null||!Dn.has(o))){t=mo(r,t),t=ym(e,t,1),e=Ln(e,t,1),t=ze(),e!==null&&(Is(e,1,t),Qe(e,t));break}}e=e.return}}function vj(t,e,r){var o=t.pingCache;o!==null&&o.delete(e),e=ze(),t.pingedLanes|=t.suspendedLanes&r,Pe===t&&(Ee&r)===r&&(ke===4||ke===3&&(Ee&130023424)===Ee&&500>me()-fd?pr(t,0):pd|=r),Qe(t,e)}function Bm(t,e){e===0&&(t.mode&1?(e=Gs,Gs<<=1,!(Gs&130023424)&&(Gs=4194304)):e=1);var r=ze();t=nn(t,e),t!==null&&(Is(t,e,r),Qe(t,r))}function yj(t){var e=t.memoizedState,r=0;e!==null&&(r=e.retryLane),Bm(t,r)}function jj(t,e){var r=0;switch(t.tag){case 13:var o=t.stateNode,s=t.memoizedState;s!==null&&(r=s.retryLane);break;case 19:o=t.stateNode;break;default:throw Error(I(314))}o!==null&&o.delete(e),Bm(t,r)}var zm;zm=function(t,e,r){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ke.current)Je=!0;else{if(!(t.lanes&r)&&!(e.flags&128))return Je=!1,lj(t,e,r);Je=!!(t.flags&131072)}else Je=!1,ce&&e.flags&1048576&&Uf(e,Wi,e.index);switch(e.lanes=0,e.tag){case 2:var o=e.type;yi(t,e),t=e.pendingProps;var s=uo(e,Le.current);Gr(e,r),s=ld(null,e,o,t,s,r);var i=ad();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ge(o)?(i=!0,Bi(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,nd(e),s.updater=pl,e.stateNode=s,s._reactInternals=e,qa(e,o,t,r),e=Ga(null,e,o,!0,i,r)):(e.tag=0,ce&&i&&Gc(e),De(null,e,s,r),e=e.child),e;case 16:o=e.elementType;e:{switch(yi(t,e),t=e.pendingProps,s=o._init,o=s(o._payload),e.type=o,s=e.tag=bj(o),t=kt(o,t),s){case 0:e=Ka(null,e,o,t,r);break e;case 1:e=Ju(null,e,o,t,r);break e;case 11:e=Vu(null,e,o,t,r);break e;case 14:e=qu(null,e,o,kt(o.type,t),r);break e}throw Error(I(306,o,""))}return e;case 0:return o=e.type,s=e.pendingProps,s=e.elementType===o?s:kt(o,s),Ka(t,e,o,s,r);case 1:return o=e.type,s=e.pendingProps,s=e.elementType===o?s:kt(o,s),Ju(t,e,o,s,r);case 3:e:{if(km(e),t===null)throw Error(I(387));o=e.pendingProps,i=e.memoizedState,s=i.element,Qf(t,e),Ui(e,o,null,r);var l=e.memoizedState;if(o=l.element,i.isDehydrated)if(i={element:o,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=mo(Error(I(423)),e),e=Ku(t,e,o,r,s);break e}else if(o!==s){s=mo(Error(I(424)),e),e=Ku(t,e,o,r,s);break e}else for(et=On(e.stateNode.containerInfo.firstChild),tt=e,ce=!0,Pt=null,r=Kf(e,null,o,r),e.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(ho(),o===s){e=rn(t,e,r);break e}De(t,e,o,r)}e=e.child}return e;case 5:return Yf(e),t===null&&Ha(e),o=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,l=s.children,Fa(o,s)?l=null:i!==null&&Fa(o,i)&&(e.flags|=32),bm(t,e),De(t,e,l,r),e.child;case 6:return t===null&&Ha(e),null;case 13:return Sm(t,e,r);case 4:return rd(e,e.stateNode.containerInfo),o=e.pendingProps,t===null?e.child=po(e,null,o,r):De(t,e,o,r),e.child;case 11:return o=e.type,s=e.pendingProps,s=e.elementType===o?s:kt(o,s),Vu(t,e,o,s,r);case 7:return De(t,e,e.pendingProps,r),e.child;case 8:return De(t,e,e.pendingProps.children,r),e.child;case 12:return De(t,e,e.pendingProps.children,r),e.child;case 10:e:{if(o=e.type._context,s=e.pendingProps,i=e.memoizedProps,l=s.value,re($i,o._currentValue),o._currentValue=l,i!==null)if(It(i.value,l)){if(i.children===s.children&&!Ke.current){e=rn(t,e,r);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var a=i.dependencies;if(a!==null){l=i.child;for(var c=a.firstContext;c!==null;){if(c.context===o){if(i.tag===1){c=Yt(-1,r&-r),c.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var u=d.pending;u===null?c.next=c:(c.next=u.next,u.next=c),d.pending=c}}i.lanes|=r,c=i.alternate,c!==null&&(c.lanes|=r),Ua(i.return,r,e),a.lanes|=r;break}c=c.next}}else if(i.tag===10)l=i.type===e.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(I(341));l.lanes|=r,a=l.alternate,a!==null&&(a.lanes|=r),Ua(l,r,e),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===e){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}De(t,e,s.children,r),e=e.child}return e;case 9:return s=e.type,o=e.pendingProps.children,Gr(e,r),s=mt(s),o=o(s),e.flags|=1,De(t,e,o,r),e.child;case 14:return o=e.type,s=kt(o,e.pendingProps),s=kt(o.type,s),qu(t,e,o,s,r);case 15:return jm(t,e,e.type,e.pendingProps,r);case 17:return o=e.type,s=e.pendingProps,s=e.elementType===o?s:kt(o,s),yi(t,e),e.tag=1,Ge(o)?(t=!0,Bi(e)):t=!1,Gr(e,r),xm(e,o,s),qa(e,o,s,r),Ga(null,e,o,!0,t,r);case 19:return Cm(t,e,r);case 22:return wm(t,e,r)}throw Error(I(156,e.tag))};function Wm(t,e){return ff(t,e)}function wj(t,e,r,o){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pt(t,e,r,o){return new wj(t,e,r,o)}function vd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function bj(t){if(typeof t=="function")return vd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Dc)return 11;if(t===Fc)return 14}return 2}function Bn(t,e){var r=t.alternate;return r===null?(r=pt(t.tag,e,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=e,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&14680064,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,e=t.dependencies,r.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r}function bi(t,e,r,o,s,i){var l=2;if(o=t,typeof t=="function")vd(t)&&(l=1);else if(typeof t=="string")l=5;else e:switch(t){case _r:return fr(r.children,s,i,e);case Lc:l=8,s|=8;break;case ga:return t=pt(12,r,e,s|2),t.elementType=ga,t.lanes=i,t;case xa:return t=pt(13,r,e,s),t.elementType=xa,t.lanes=i,t;case va:return t=pt(19,r,e,s),t.elementType=va,t.lanes=i,t;case Qp:return gl(r,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Kp:l=10;break e;case Gp:l=9;break e;case Dc:l=11;break e;case Fc:l=14;break e;case yn:l=16,o=null;break e}throw Error(I(130,t==null?t:typeof t,""))}return e=pt(l,r,e,s),e.elementType=t,e.type=o,e.lanes=i,e}function fr(t,e,r,o){return t=pt(7,t,o,e),t.lanes=r,t}function gl(t,e,r,o){return t=pt(22,t,o,e),t.elementType=Qp,t.lanes=r,t.stateNode={isHidden:!1},t}function oa(t,e,r){return t=pt(6,t,null,e),t.lanes=r,t}function sa(t,e,r){return e=pt(4,t.children!==null?t.children:[],t.key,e),e.lanes=r,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function kj(t,e,r,o,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bl(0),this.expirationTimes=Bl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bl(0),this.identifierPrefix=o,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function yd(t,e,r,o,s,i,l,a,c){return t=new kj(t,e,r,a,c),e===1?(e=1,i===!0&&(e|=8)):e=0,i=pt(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:o,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},nd(i),t}function Sj(t,e,r){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Mr,key:o==null?null:""+o,children:t,containerInfo:e,implementation:r}}function $m(t){if(!t)return $n;t=t._reactInternals;e:{if(Sr(t)!==t||t.tag!==1)throw Error(I(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ge(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(I(171))}if(t.tag===1){var r=t.type;if(Ge(r))return $f(t,r,e)}return e}function Hm(t,e,r,o,s,i,l,a,c){return t=yd(r,o,!0,t,s,i,l,a,c),t.context=$m(null),r=t.current,o=ze(),s=Fn(r),i=Yt(o,s),i.callback=e??null,Ln(r,i,s),t.current.lanes=s,Is(t,s,o),Qe(t,o),t}function xl(t,e,r,o){var s=e.current,i=ze(),l=Fn(s);return r=$m(r),e.context===null?e.context=r:e.pendingContext=r,e=Yt(i,l),e.payload={element:t},o=o===void 0?null:o,o!==null&&(e.callback=o),t=Ln(s,e,l),t!==null&&(Et(t,s,l,i),gi(t,s,l)),l}function Xi(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function oh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<e?r:e}}function jd(t,e){oh(t,e),(t=t.alternate)&&oh(t,e)}function Cj(){return null}var Um=typeof reportError=="function"?reportError:function(t){console.error(t)};function wd(t){this._internalRoot=t}vl.prototype.render=wd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(I(409));xl(t,e,null,null)};vl.prototype.unmount=wd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;yr(function(){xl(null,t,null,null)}),e[tn]=null}};function vl(t){this._internalRoot=t}vl.prototype.unstable_scheduleHydration=function(t){if(t){var e=wf();t={blockedOn:null,target:t,priority:e};for(var r=0;r<wn.length&&e!==0&&e<wn[r].priority;r++);wn.splice(r,0,t),r===0&&kf(t)}};function bd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function yl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function sh(){}function Tj(t,e,r,o,s){if(s){if(typeof o=="function"){var i=o;o=function(){var d=Xi(l);i.call(d)}}var l=Hm(e,o,t,0,null,!1,!1,"",sh);return t._reactRootContainer=l,t[tn]=l.current,us(t.nodeType===8?t.parentNode:t),yr(),l}for(;s=t.lastChild;)t.removeChild(s);if(typeof o=="function"){var a=o;o=function(){var d=Xi(c);a.call(d)}}var c=yd(t,0,!1,null,null,!1,!1,"",sh);return t._reactRootContainer=c,t[tn]=c.current,us(t.nodeType===8?t.parentNode:t),yr(function(){xl(e,c,r,o)}),c}function jl(t,e,r,o,s){var i=r._reactRootContainer;if(i){var l=i;if(typeof s=="function"){var a=s;s=function(){var c=Xi(l);a.call(c)}}xl(e,l,t,s)}else l=Tj(r,e,t,s,o);return Xi(l)}yf=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var r=Ho(e.pendingLanes);r!==0&&(Wc(e,r|1),Qe(e,me()),!(Y&6)&&(go=me()+500,Jn()))}break;case 13:yr(function(){var o=nn(t,1);if(o!==null){var s=ze();Et(o,t,1,s)}}),jd(t,1)}};$c=function(t){if(t.tag===13){var e=nn(t,134217728);if(e!==null){var r=ze();Et(e,t,134217728,r)}jd(t,134217728)}};jf=function(t){if(t.tag===13){var e=Fn(t),r=nn(t,e);if(r!==null){var o=ze();Et(r,t,e,o)}jd(t,e)}};wf=function(){return ee};bf=function(t,e){var r=ee;try{return ee=t,e()}finally{ee=r}};Na=function(t,e,r){switch(e){case"input":if(wa(t,r),e=r.name,r.type==="radio"&&e!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<r.length;e++){var o=r[e];if(o!==t&&o.form===t.form){var s=dl(o);if(!s)throw Error(I(90));Xp(o),wa(o,s)}}}break;case"textarea":ef(t,r);break;case"select":e=r.value,e!=null&&Vr(t,!!r.multiple,e,!1)}};af=md;cf=yr;var Pj={usingClientEntryPoint:!1,Events:[Ms,Fr,dl,sf,lf,md]},Fo={findFiberByHostInstance:or,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Nj={bundleType:Fo.bundleType,version:Fo.version,rendererPackageName:Fo.rendererPackageName,rendererConfig:Fo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:an.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=hf(t),t===null?null:t.stateNode},findFiberByHostInstance:Fo.findFiberByHostInstance||Cj,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ii=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ii.isDisabled&&ii.supportsFiber)try{il=ii.inject(Nj),zt=ii}catch{}}ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Pj;ot.createPortal=function(t,e){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!bd(e))throw Error(I(200));return Sj(t,e,null,r)};ot.createRoot=function(t,e){if(!bd(t))throw Error(I(299));var r=!1,o="",s=Um;return e!=null&&(e.unstable_strictMode===!0&&(r=!0),e.identifierPrefix!==void 0&&(o=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=yd(t,1,!1,null,null,r,!1,o,s),t[tn]=e.current,us(t.nodeType===8?t.parentNode:t),new wd(e)};ot.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(I(188)):(t=Object.keys(t).join(","),Error(I(268,t)));return t=hf(e),t=t===null?null:t.stateNode,t};ot.flushSync=function(t){return yr(t)};ot.hydrate=function(t,e,r){if(!yl(e))throw Error(I(200));return jl(null,t,e,!0,r)};ot.hydrateRoot=function(t,e,r){if(!bd(t))throw Error(I(405));var o=r!=null&&r.hydratedSources||null,s=!1,i="",l=Um;if(r!=null&&(r.unstable_strictMode===!0&&(s=!0),r.identifierPrefix!==void 0&&(i=r.identifierPrefix),r.onRecoverableError!==void 0&&(l=r.onRecoverableError)),e=Hm(e,null,t,1,r??null,s,!1,i,l),t[tn]=e.current,us(t),o)for(t=0;t<o.length;t++)r=o[t],s=r._getVersion,s=s(r._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[r,s]:e.mutableSourceEagerHydrationData.push(r,s);return new vl(e)};ot.render=function(t,e,r){if(!yl(e))throw Error(I(200));return jl(null,t,e,!1,r)};ot.unmountComponentAtNode=function(t){if(!yl(t))throw Error(I(40));return t._reactRootContainer?(yr(function(){jl(null,null,t,!1,function(){t._reactRootContainer=null,t[tn]=null})}),!0):!1};ot.unstable_batchedUpdates=md;ot.unstable_renderSubtreeIntoContainer=function(t,e,r,o){if(!yl(r))throw Error(I(200));if(t==null||t._reactInternals===void 0)throw Error(I(38));return jl(t,e,r,!1,o)};ot.version="18.3.1-next-f1338f8080-20240426";function Vm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Vm)}catch(t){console.error(t)}}Vm(),Up.exports=ot;var wo=Up.exports;const Ej=Rp(wo);var qm,ih=wo;qm=ih.createRoot,ih.hydrateRoot;const Aj=1,Ij=1e6;let ia=0;function Rj(){return ia=(ia+1)%Number.MAX_SAFE_INTEGER,ia.toString()}const la=new Map,lh=t=>{if(la.has(t))return;const e=setTimeout(()=>{la.delete(t),ts({type:"REMOVE_TOAST",toastId:t})},Ij);la.set(t,e)},Mj=(t,e)=>{switch(e.type){case"ADD_TOAST":return{...t,toasts:[e.toast,...t.toasts].slice(0,Aj)};case"UPDATE_TOAST":return{...t,toasts:t.toasts.map(r=>r.id===e.toast.id?{...r,...e.toast}:r)};case"DISMISS_TOAST":{const{toastId:r}=e;return r?lh(r):t.toasts.forEach(o=>{lh(o.id)}),{...t,toasts:t.toasts.map(o=>o.id===r||r===void 0?{...o,open:!1}:o)}}case"REMOVE_TOAST":return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(r=>r.id!==e.toastId)}}},ki=[];let Si={toasts:[]};function ts(t){Si=Mj(Si,t),ki.forEach(e=>{e(Si)})}function _j({...t}){const e=Rj(),r=s=>ts({type:"UPDATE_TOAST",toast:{...s,id:e}}),o=()=>ts({type:"DISMISS_TOAST",toastId:e});return ts({type:"ADD_TOAST",toast:{...t,id:e,open:!0,onOpenChange:s=>{s||o()}}}),{id:e,dismiss:o,update:r}}function Oj(){const[t,e]=v.useState(Si);return v.useEffect(()=>(ki.push(e),()=>{const r=ki.indexOf(e);r>-1&&ki.splice(r,1)}),[t]),{...t,toast:_j,dismiss:r=>ts({type:"DISMISS_TOAST",toastId:r})}}var Lj=Object.defineProperty,bo=(t,e)=>Lj(t,"name",{value:e,configurable:!0}),Jm=!!(typeof window<"u"&&window.document&&window.document.createElement);function qe(t,e,{checkForDefaultPrevented:r=!0}={}){return bo(function(s){if(t==null||t(s),r===!1||!s||!s.defaultPrevented)return e==null?void 0:e(s)},"handleEvent")}bo(qe,"composeEventHandlers");function Dj(t){var e;if(!Jm)throw new Error("Cannot access window outside of the DOM");return((e=t==null?void 0:t.ownerDocument)==null?void 0:e.defaultView)??window}bo(Dj,"getOwnerWindow");function lc(t){if(!Jm)throw new Error("Cannot access document outside of the DOM");return(t==null?void 0:t.ownerDocument)??document}bo(lc,"getOwnerDocument");function Km(t,e=!1){const{activeElement:r}=lc(t);if(!(r!=null&&r.nodeName))return null;if(Gm(r)&&r.contentDocument)return Km(r.contentDocument.body,e);if(e){const o=r.getAttribute("aria-activedescendant");if(o){const s=lc(r).getElementById(o);if(s)return s}}return r}bo(Km,"getActiveElement");function Gm(t){return t.tagName==="IFRAME"}bo(Gm,"isFrame");var Fj=Object.defineProperty,kd=(t,e)=>Fj(t,"name",{value:e,configurable:!0});function ac(t,e){if(typeof t=="function")return t(e);t!=null&&(t.current=e)}kd(ac,"setRef");function Qm(...t){return e=>{let r=!1;const o=t.map(s=>{const i=ac(s,e);return!r&&typeof i=="function"&&(r=!0),i});if(r)return()=>{for(let s=0;s<o.length;s++){const i=o[s];typeof i=="function"?i():ac(t[s],null)}}}}kd(Qm,"composeRefs");function nt(...t){return v.useCallback(Qm(...t),t)}kd(nt,"useComposedRefs");var Bj=Object.defineProperty,ht=(t,e)=>Bj(t,"name",{value:e,configurable:!0});function zj(t,e){const r=v.createContext(e);r.displayName=t+"Context";const o=ht(i=>{const{children:l,...a}=i,c=v.useMemo(()=>a,Object.values(a));return n.jsx(r.Provider,{value:c,children:l})},"Provider");o.displayName=t+"Provider";function s(i,l={}){const{optional:a=!1}=l,c=v.useContext(r);if(c)return c;if(e!==void 0)return e;if(!a)throw new Error(`\`${i}\` must be used within \`${t}\``)}return ht(s,"useContext"),[o,s]}ht(zj,"createContext");function ko(t,e=[]){let r=[];function o(i,l){const a=v.createContext(l);a.displayName=i+"Context";const c=r.length;r=[...r,l];const d=ht(h=>{var g;const{scope:f,children:p,...j}=h,y=((g=f==null?void 0:f[t])==null?void 0:g[c])||a,w=v.useMemo(()=>j,Object.values(j));return n.jsx(y.Provider,{value:w,children:p})},"Provider");d.displayName=i+"Provider";function u(h,f,p={}){var g;const{optional:j=!1}=p,y=((g=f==null?void 0:f[t])==null?void 0:g[c])||a,w=v.useContext(y);if(w)return w;if(l!==void 0)return l;if(!j)throw new Error(`\`${h}\` must be used within \`${i}\``)}return ht(u,"useContext"),[d,u]}ht(o,"createContext");const s=ht(()=>{const i=r.map(l=>v.createContext(l));return ht(function(a){const c=(a==null?void 0:a[t])||i;return v.useMemo(()=>({[`__scope${t}`]:{...a,[t]:c}}),[a,c])},"useScope")},"createScope");return s.scopeName=t,[o,Ym(s,...e)]}ht(ko,"createContextScope");function Ym(...t){const e=t[0];if(t.length===1)return e;const r=ht(()=>{const o=t.map(s=>({useScope:s(),scopeName:s.scopeName}));return ht(function(i){const l=o.reduce((a,{useScope:c,scopeName:d})=>{const h=c(i)[`__scope${d}`];return{...a,...h}},{});return v.useMemo(()=>({[`__scope${e.scopeName}`]:l}),[l])},"useComposedScopes")},"createScope");return r.scopeName=e.scopeName,r}ht(Ym,"composeContextScopes");var Wj=Object.defineProperty,xt=(t,e)=>Wj(t,"name",{value:e,configurable:!0});function jr(t){const e=v.forwardRef((r,o)=>{let{children:s,...i}=r,l=null,a=!1;const c=[];cc(s)&&typeof li=="function"&&(s=li(s._payload)),v.Children.forEach(s,f=>{var p;if(ng(f)){a=!0;const j=f;let y="child"in j.props?j.props.child:j.props.children;cc(y)&&typeof li=="function"&&(y=li(y._payload)),l=Hj(j,y),c.push((p=l==null?void 0:l.props)==null?void 0:p.children)}else c.push(f)}),l?l=v.cloneElement(l,void 0,c):!a&&v.Children.count(s)===1&&v.isValidElement(s)&&(l=s);const d=l?tg(l):void 0,u=nt(o,d);if(!l){if(s||s===0)throw new Error(a?qj(t):Vj(t));return s}const h=eg(i,l.props??{});return l.type!==v.Fragment&&(h.ref=o?u:d),v.cloneElement(l,h)});return e.displayName=`${t}.Slot`,e}xt(jr,"createSlot");var $j=jr("Slot"),Xm=Symbol.for("radix.slottable");function Zm(t){const e=xt(r=>"child"in r?r.children(r.child):r.children,"Slottable");return e.displayName=`${t}.Slottable`,e.__radixId=Xm,e}xt(Zm,"createSlottable");var Hj=xt((t,e)=>{if("child"in t.props){const r=t.props.child;return v.isValidElement(r)?v.cloneElement(r,void 0,t.props.children(r.props.children)):null}return v.isValidElement(e)?e:null},"getSlottableElementFromSlottable");function eg(t,e){const r={...e};for(const o in e){const s=t[o],i=e[o];/^on[A-Z]/.test(o)?s&&i?r[o]=(...a)=>{const c=i(...a);return s(...a),c}:s&&(r[o]=s):o==="style"?r[o]={...s,...i}:o==="className"?r[o]=[s,i].filter(Boolean).join(" "):o==="aria-describedby"&&(r[o]=og(i,s))}return{...t,...r}}xt(eg,"mergeProps");function tg(t){var o,s;let e=(o=Object.getOwnPropertyDescriptor(t.props,"ref"))==null?void 0:o.get,r=e&&"isReactWarning"in e&&e.isReactWarning;return r?t.ref:(e=(s=Object.getOwnPropertyDescriptor(t,"ref"))==null?void 0:s.get,r=e&&"isReactWarning"in e&&e.isReactWarning,r?t.props.ref:t.props.ref||t.ref)}xt(tg,"getElementRef");function ng(t){return v.isValidElement(t)&&typeof t.type=="function"&&"__radixId"in t.type&&t.type.__radixId===Xm}xt(ng,"isSlottable");var Uj=Symbol.for("react.lazy");function cc(t){return t!=null&&typeof t=="object"&&"$$typeof"in t&&t.$$typeof===Uj&&"_payload"in t&&rg(t._payload)}xt(cc,"isLazyComponent");function rg(t){return typeof t=="object"&&t!==null&&"then"in t}xt(rg,"isPromiseLike");function og(...t){const e=new Set;for(const r of t)if(typeof r=="string")for(const o of String(r).trim().split(/\s+/))o&&e.add(o);return e.size>0?Array.from(e).join(" "):void 0}xt(og,"concatAriaDescribedby");var Vj=xt(t=>`${t} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,"createSlotError"),qj=xt(t=>`${t} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,"createSlottableError"),li=As[" use ".trim().toString()],Jj=Object.defineProperty,Te=(t,e)=>Jj(t,"name",{value:e,configurable:!0});function sg(t){const e=t+"CollectionProvider",[r,o]=ko(e),[s,i]=r(e,{collectionRef:{current:null},itemMap:new Map}),l=Te(y=>{const{scope:w,children:g}=y,m=v.useRef(null),x=v.useRef(new Map).current;return n.jsx(s,{scope:w,itemMap:x,collectionRef:m,children:g})},"CollectionProvider");l.displayName=e;const a=t+"CollectionSlot",c=jr(a),d=v.forwardRef((y,w)=>{const{scope:g,children:m}=y,x=i(a,g),b=nt(w,x.collectionRef);return n.jsx(c,{ref:b,children:m})});d.displayName=a;const u=t+"CollectionItemSlot",h="data-radix-collection-item",f=jr(u),p=v.forwardRef((y,w)=>{const{scope:g,children:m,...x}=y,b=v.useRef(null),k=nt(w,b),S=i(u,g);return v.useEffect(()=>(S.itemMap.set(b,{ref:b,...x}),()=>void S.itemMap.delete(b))),n.jsx(f,{[h]:"",ref:k,children:m})});p.displayName=u;function j(y){const w=i(t+"CollectionConsumer",y);return v.useCallback(()=>{const m=w.collectionRef.current;if(!m)return[];const x=Array.from(m.querySelectorAll(`[${h}]`));return Array.from(w.itemMap.values()).sort((S,C)=>x.indexOf(S.ref.current)-x.indexOf(C.ref.current))},[w.collectionRef,w.itemMap])}return Te(j,"useCollection"),[{Provider:l,Slot:d,ItemSlot:p},j,o]}Te(sg,"createCollection");var ah=new WeakMap,ge,Ze,aa=(Ze=class extends Map{constructor(r){super(r);G(this,ge);W(this,ge,[...super.keys()]),ah.set(this,!0)}set(r,o){return ah.get(this)&&(this.has(r)?T(this,ge)[T(this,ge).indexOf(r)]=r:T(this,ge).push(r)),super.set(r,o),this}insert(r,o,s){const i=this.has(o),l=T(this,ge).length,a=Sd(r);let c=a>=0?a:l+a;const d=c<0||c>=l?-1:c;if(d===this.size||i&&d===this.size-1||d===-1)return this.set(o,s),this;const u=this.size+(i?0:1);a<0&&c++;const h=[...T(this,ge)];let f,p=!1;for(let j=c;j<u;j++)if(c===j){let y=h[j];h[j]===o&&(y=h[j+1]),i&&this.delete(o),f=this.get(y),this.set(o,s)}else{!p&&h[j-1]===o&&(p=!0);const y=h[p?j:j-1],w=f;f=this.get(y),this.delete(y),this.set(y,w)}return this}with(r,o,s){const i=new Ze(this);return i.insert(r,o,s),i}before(r){const o=T(this,ge).indexOf(r)-1;if(!(o<0))return this.entryAt(o)}setBefore(r,o,s){const i=T(this,ge).indexOf(r);return i===-1?this:this.insert(i,o,s)}after(r){let o=T(this,ge).indexOf(r);if(o=o===-1||o===this.size-1?-1:o+1,o!==-1)return this.entryAt(o)}setAfter(r,o,s){const i=T(this,ge).indexOf(r);return i===-1?this:this.insert(i+1,o,s)}first(){return this.entryAt(0)}last(){return this.entryAt(-1)}clear(){return W(this,ge,[]),super.clear()}delete(r){const o=super.delete(r);return o&&T(this,ge).splice(T(this,ge).indexOf(r),1),o}deleteAt(r){const o=this.keyAt(r);return o!==void 0?this.delete(o):!1}at(r){const o=Ci(T(this,ge),r);if(o!==void 0)return this.get(o)}entryAt(r){const o=Ci(T(this,ge),r);if(o!==void 0)return[o,this.get(o)]}indexOf(r){return T(this,ge).indexOf(r)}keyAt(r){return Ci(T(this,ge),r)}from(r,o){const s=this.indexOf(r);if(s===-1)return;let i=s+o;return i<0&&(i=0),i>=this.size&&(i=this.size-1),this.at(i)}keyFrom(r,o){const s=this.indexOf(r);if(s===-1)return;let i=s+o;return i<0&&(i=0),i>=this.size&&(i=this.size-1),this.keyAt(i)}find(r,o){let s=0;for(const i of this){if(Reflect.apply(r,o,[i,s,this]))return i;s++}}findIndex(r,o){let s=0;for(const i of this){if(Reflect.apply(r,o,[i,s,this]))return s;s++}return-1}filter(r,o){const s=[];let i=0;for(const l of this)Reflect.apply(r,o,[l,i,this])&&s.push(l),i++;return new Ze(s)}map(r,o){const s=[];let i=0;for(const l of this)s.push([l[0],Reflect.apply(r,o,[l,i,this])]),i++;return new Ze(s)}reduce(...r){const[o,s]=r;let i=0,l=s??this.at(0);for(const a of this)i===0&&r.length===1?l=a:l=Reflect.apply(o,this,[l,a,i,this]),i++;return l}reduceRight(...r){const[o,s]=r;let i=s??this.at(-1);for(let l=this.size-1;l>=0;l--){const a=this.at(l);l===this.size-1&&r.length===1?i=a:i=Reflect.apply(o,this,[i,a,l,this])}return i}toSorted(r){const o=[...this.entries()].sort(r);return new Ze(o)}toReversed(){const r=new Ze;for(let o=this.size-1;o>=0;o--){const s=this.keyAt(o),i=this.get(s);r.set(s,i)}return r}toSpliced(...r){const o=[...this.entries()];return o.splice(...r),new Ze(o)}slice(r,o){const s=new Ze;let i=this.size-1;if(r===void 0)return s;r<0&&(r=r+this.size),o!==void 0&&o>0&&(i=o-1);for(let l=r;l<=i;l++){const a=this.keyAt(l),c=this.get(a);s.set(a,c)}return s}every(r,o){let s=0;for(const i of this){if(!Reflect.apply(r,o,[i,s,this]))return!1;s++}return!0}some(r,o){let s=0;for(const i of this){if(Reflect.apply(r,o,[i,s,this]))return!0;s++}return!1}},ge=new WeakMap,Te(Ze,"OrderedDict"),Ze);function Ci(t,e){if("at"in Array.prototype)return Array.prototype.at.call(t,e);const r=ig(t,e);return r===-1?void 0:t[r]}Te(Ci,"at");function ig(t,e){const r=t.length,o=Sd(e),s=o>=0?o:r+o;return s<0||s>=r?-1:s}Te(ig,"toSafeIndex");function Sd(t){return t!==t||t===0?0:Math.trunc(t)}Te(Sd,"toSafeInteger");function Kj(t){const e=t+"CollectionProvider",[r,o]=ko(e),[s,i]=r(e,{collectionElement:null,collectionRef:{current:null},collectionRefObject:{current:null},itemMap:new aa,setItemMap:Te(()=>{},"setItemMap")}),l=Te(({state:x,...b})=>x?n.jsx(c,{...b,state:x}):n.jsx(a,{...b}),"CollectionProvider");l.displayName=e;const a=Te(x=>{const b=w();return n.jsx(c,{...x,state:b})},"CollectionInit");a.displayName=e+"Init";const c=Te(x=>{const{scope:b,children:k,state:S}=x,C=v.useRef(null),[E,R]=v.useState(null),A=nt(C,R),[H,M]=S;return v.useEffect(()=>{if(!E)return;const B=cg(()=>{});return B.observe(E,{childList:!0,subtree:!0}),()=>{B.disconnect()}},[E]),n.jsx(s,{scope:b,itemMap:H,setItemMap:M,collectionRef:A,collectionRefObject:C,collectionElement:E,children:k})},"CollectionProviderImpl");c.displayName=e+"Impl";const d=t+"CollectionSlot",u=jr(d),h=v.forwardRef((x,b)=>{const{scope:k,children:S}=x,C=i(d,k),E=nt(b,C.collectionRef);return n.jsx(u,{ref:E,children:S})});h.displayName=d;const f=t+"CollectionItemSlot",p="data-radix-collection-item",j=jr(f),y=v.forwardRef((x,b)=>{const{scope:k,children:S,...C}=x,E=v.useRef(null),[R,A]=v.useState(null),H=nt(b,E,A),M=i(f,k),{setItemMap:B}=M,$=v.useRef(C);lg($.current,C)||($.current=C);const X=$.current;return v.useEffect(()=>{const O=X;return B(F=>R?F.has(R)?F.set(R,{...O,element:R}).toSorted(dc):(F.set(R,{...O,element:R}),F.toSorted(dc)):F),()=>{B(F=>!R||!F.has(R)?F:(F.delete(R),new aa(F)))}},[R,X,B]),n.jsx(j,{[p]:"",ref:H,children:S})});y.displayName=f;function w(){return v.useState(new aa)}Te(w,"useInitCollection");function g(x){const{itemMap:b}=i(t+"CollectionConsumer",x);return b}return Te(g,"useCollection"),[{Provider:l,Slot:h,ItemSlot:y},{createCollectionScope:o,useCollection:g,useInitCollection:w}]}Te(Kj,"createCollection");function lg(t,e){if(t===e)return!0;if(typeof t!="object"||typeof e!="object"||t==null||e==null)return!1;const r=Object.keys(t),o=Object.keys(e);if(r.length!==o.length)return!1;for(const s of r)if(!Object.prototype.hasOwnProperty.call(e,s)||t[s]!==e[s])return!1;return!0}Te(lg,"shallowEqual");function ag(t,e){return!!(e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_PRECEDING)}Te(ag,"isElementPreceding");function dc(t,e){return!t[1].element||!e[1].element?0:ag(t[1].element,e[1].element)?-1:1}Te(dc,"sortByDocumentPosition");function cg(t){return new MutationObserver(r=>{for(const o of r)if(o.type==="childList"){t();return}})}Te(cg,"getChildListObserver");var Gj=Object.defineProperty,Qj=(t,e)=>Gj(t,"name",{value:e,configurable:!0}),Yj=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],Rt=Yj.reduce((t,e)=>{const r=jr(`Primitive.${e}`),o=v.forwardRef((s,i)=>{const{asChild:l,...a}=s,c=l?r:e;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),n.jsx(c,{...a,ref:i})});return o.displayName=`Primitive.${e}`,{...t,[e]:o}},{});function Cd(t,e){t&&wo.flushSync(()=>t.dispatchEvent(e))}Qj(Cd,"dispatchDiscreteCustomEvent");var Xj=Object.defineProperty,Zj=(t,e)=>Xj(t,"name",{value:e,configurable:!0});function on(t){const e=v.useRef(t);return v.useEffect(()=>{e.current=t}),v.useMemo(()=>(...r)=>{var o;return(o=e.current)==null?void 0:o.call(e,...r)},[])}Zj(on,"useCallbackRef");var ew=Object.defineProperty,be=(t,e)=>ew(t,"name",{value:e,configurable:!0}),uc="dismissableLayer.update",tw="dismissableLayer.pointerDownOutside",nw="dismissableLayer.focusOutside",ch,Td=v.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set,dismissableSurfaces:new Set}),dg=v.forwardRef(be(function(e,r){const{disableOutsidePointerEvents:o=!1,deferPointerDownOutside:s=!1,onEscapeKeyDown:i,onPointerDownOutside:l,onFocusOutside:a,onInteractOutside:c,onDismiss:d,...u}=e,h=v.useContext(Td),[f,p]=v.useState(null),j=(f==null?void 0:f.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,y]=v.useState({}),w=nt(r,p),g=Array.from(h.layers),[m]=[...h.layersWithOutsidePointerEventsDisabled].slice(-1),x=m?g.indexOf(m):-1,b=f?g.indexOf(f):-1,k=h.layersWithOutsidePointerEventsDisabled.size>0,S=b>=x,C=v.useRef(!1),E=ug(M=>{l==null||l(M),c==null||c(M),M.defaultPrevented||d==null||d()},{ownerDocument:j,deferPointerDownOutside:s,isDeferredPointerDownOutsideRef:C,dismissableSurfaces:h.dismissableSurfaces,shouldHandlePointerDownOutside:v.useCallback(M=>{if(!(M instanceof Node))return!1;const B=[...h.branches].some($=>$.contains(M));return S&&!B},[h.branches,S])}),R=hg(M=>{if(s&&C.current)return;const B=M.target;[...h.branches].some(X=>X.contains(B))||(a==null||a(M),c==null||c(M),M.defaultPrevented||d==null||d())},j),A=f?b===g.length-1:!1,H=on(M=>{M.key==="Escape"&&(i==null||i(M),!M.defaultPrevented&&d&&(M.preventDefault(),d()))});return v.useEffect(()=>{if(A)return j.addEventListener("keydown",H,{capture:!0}),()=>j.removeEventListener("keydown",H,{capture:!0})},[j,A,H]),v.useEffect(()=>{if(f)return o&&(h.layersWithOutsidePointerEventsDisabled.size===0&&(ch=j.body.style.pointerEvents,j.body.style.pointerEvents="none"),h.layersWithOutsidePointerEventsDisabled.add(f)),h.layers.add(f),hc(),()=>{o&&(h.layersWithOutsidePointerEventsDisabled.delete(f),h.layersWithOutsidePointerEventsDisabled.size===0&&(j.body.style.pointerEvents=ch))}},[f,j,o,h]),v.useEffect(()=>()=>{f&&(h.layers.delete(f),h.layersWithOutsidePointerEventsDisabled.delete(f),hc())},[f,h]),v.useEffect(()=>{const M=be(()=>y({}),"handleUpdate");return document.addEventListener(uc,M),()=>document.removeEventListener(uc,M)},[]),n.jsx(Rt.div,{...u,ref:w,style:{pointerEvents:k?S?"auto":"none":void 0,...e.style},onFocusCapture:qe(e.onFocusCapture,R.onFocusCapture),onBlurCapture:qe(e.onBlurCapture,R.onBlurCapture),onPointerDownCapture:qe(e.onPointerDownCapture,E.onPointerDownCapture)})},"DismissableLayer")),rw=v.forwardRef(be(function(e,r){const o=v.useContext(Td),s=v.useRef(null),i=nt(r,s);return v.useEffect(()=>{const l=s.current;if(l)return o.branches.add(l),()=>{o.branches.delete(l)}},[o.branches]),n.jsx(Rt.div,{...e,ref:i})},"DismissableLayerBranch"));function ow(){const t=v.useContext(Td),[e,r]=v.useState(null);return v.useEffect(()=>{if(e)return t.dismissableSurfaces.add(e),()=>{t.dismissableSurfaces.delete(e)}},[e,t.dismissableSurfaces]),r}be(ow,"useDismissableLayerSurface");var sw=be(()=>!0,"IS_TRUE");function ug(t,e){const{ownerDocument:r=globalThis==null?void 0:globalThis.document,deferPointerDownOutside:o=!1,isDeferredPointerDownOutsideRef:s,dismissableSurfaces:i,shouldHandlePointerDownOutside:l=sw}=e,a=on(t),c=v.useRef(!1),d=v.useRef(!1),u=v.useRef(new Map),h=v.useRef(()=>{});return v.useEffect(()=>{function f(){d.current=!1,s.current=!1,u.current.clear()}be(f,"resetOutsideInteraction");function p(){return Array.from(u.current.values()).some(Boolean)}be(p,"isOutsideInteractionIntercepted");function j(x){if(!d.current)return;const b=x.target;b instanceof Node&&[...i].some(S=>S.contains(b))||u.current.set(x.type,!0),x.type==="click"&&window.setTimeout(()=>{d.current&&h.current()},0)}be(j,"handleInteractionCapture");function y(x){d.current&&u.current.set(x.type,!1)}be(y,"handleInteractionBubble");const w=be(x=>{if(x.target&&!c.current){let b=function(){r.removeEventListener("click",h.current);const S=p();f(),S||Pd(tw,a,k,{discrete:!0})};if(be(b,"handleAndDispatchPointerDownOutsideEvent"),!l(x.target)){r.removeEventListener("click",h.current),f(),c.current=!1;return}const k={originalEvent:x};d.current=!0,s.current=o&&x.button===0,u.current.clear(),!o||x.button!==0?b():(r.removeEventListener("click",h.current),h.current=b,r.addEventListener("click",h.current,{once:!0}))}else r.removeEventListener("click",h.current),f();c.current=!1},"handlePointerDown"),g=["pointerup","mousedown","mouseup","touchstart","touchend","click"];for(const x of g)r.addEventListener(x,j,!0),r.addEventListener(x,y);const m=window.setTimeout(()=>{r.addEventListener("pointerdown",w)},0);return()=>{window.clearTimeout(m),r.removeEventListener("pointerdown",w),r.removeEventListener("click",h.current);for(const x of g)r.removeEventListener(x,j,!0),r.removeEventListener(x,y)}},[r,a,o,s,i,l]),{onPointerDownCapture:be(()=>c.current=!0,"onPointerDownCapture")}}be(ug,"usePointerDownOutside");function hg(t,e=globalThis==null?void 0:globalThis.document){const r=on(t),o=v.useRef(!1);return v.useEffect(()=>{const s=be(i=>{i.target&&!o.current&&Pd(nw,r,{originalEvent:i},{discrete:!1})},"handleFocus");return e.addEventListener("focusin",s),()=>e.removeEventListener("focusin",s)},[e,r]),{onFocusCapture:be(()=>o.current=!0,"onFocusCapture"),onBlurCapture:be(()=>o.current=!1,"onBlurCapture")}}be(hg,"useFocusOutside");function hc(){const t=new CustomEvent(uc);document.dispatchEvent(t)}be(hc,"dispatchUpdate");function Pd(t,e,r,{discrete:o}){const s=r.originalEvent.target,i=new CustomEvent(t,{bubbles:!1,cancelable:!0,detail:r});e&&s.addEventListener(t,e,{once:!0}),o?Cd(s,i):s.dispatchEvent(i)}be(Pd,"handleAndDispatchCustomEvent");var At=globalThis!=null&&globalThis.document?v.useLayoutEffect:()=>{},iw=Object.defineProperty,lw=(t,e)=>iw(t,"name",{value:e,configurable:!0}),aw=v.forwardRef(lw(function(e,r){var c;const{container:o,...s}=e,[i,l]=v.useState(!1);At(()=>l(!0),[]);const a=o||i&&((c=globalThis==null?void 0:globalThis.document)==null?void 0:c.body);return a?wo.createPortal(n.jsx(Rt.div,{...s,ref:r}),a):null},"Portal")),cw=Object.defineProperty,sn=(t,e)=>cw(t,"name",{value:e,configurable:!0});function pg(t,e){return v.useReducer((r,o)=>e[r][o]??r,t)}sn(pg,"useStateMachine");var fg=sn(t=>{const{present:e,children:r}=t,o=mg(e),s=typeof r=="function"?r({present:o.isPresent}):v.Children.only(r),i=gg(o.ref,xg(s));return typeof r=="function"||o.isPresent?v.cloneElement(s,{ref:i}):null},"Presence");function mg(t){const[e,r]=v.useState(),o=v.useRef(null),s=v.useRef(t),i=v.useRef("none"),l=v.useRef(void 0),a=t?"mounted":"unmounted",[c,d]=pg(a,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return v.useEffect(()=>{c==="mounted"?(i.current=l.current??Rr(o.current),l.current=void 0):i.current="none"},[c]),At(()=>{const u=o.current,h=s.current;if(h!==t){const p=i.current,j=Rr(u);t?(l.current=j,d("MOUNT")):j==="none"||(u==null?void 0:u.display)==="none"?d("UNMOUNT"):d(h&&p!==j?"ANIMATION_OUT":"UNMOUNT"),s.current=t}},[t,d]),At(()=>{if(e){let u;const h=e.ownerDocument.defaultView??window,f=sn(j=>{const w=Rr(o.current).includes(CSS.escape(j.animationName));if(j.target===e&&w&&(d("ANIMATION_END"),!s.current)){const g=e.style.animationFillMode;e.style.animationFillMode="forwards",u=h.setTimeout(()=>{e.style.animationFillMode==="forwards"&&(e.style.animationFillMode=g)})}},"handleAnimationEnd"),p=sn(j=>{j.target===e&&(i.current=Rr(o.current))},"handleAnimationStart");return e.addEventListener("animationstart",p),e.addEventListener("animationcancel",f),e.addEventListener("animationend",f),()=>{h.clearTimeout(u),e.removeEventListener("animationstart",p),e.removeEventListener("animationcancel",f),e.removeEventListener("animationend",f)}}else d("ANIMATION_END")},[e,d]),{isPresent:["mounted","unmountSuspended"].includes(c),ref:v.useCallback(u=>{if(u){const h=getComputedStyle(u);o.current=h,l.current=Rr(h)}else o.current=null;r(u)},[])}}sn(mg,"usePresence");function pc(t,e){if(typeof t=="function")return t(e);t!=null&&(t.current=e)}sn(pc,"setRef");function gg(...t){const e=v.useRef(t);return e.current=t,v.useCallback(r=>{const o=e.current;let s=!1;const i=o.map(l=>{const a=pc(l,r);return!s&&typeof a=="function"&&(s=!0),a});if(s)return()=>{for(let l=0;l<i.length;l++){const a=i[l];typeof a=="function"?a():pc(o[l],null)}}},[])}sn(gg,"useStableComposedRefs");function Rr(t){return(t==null?void 0:t.animationName)||"none"}sn(Rr,"getAnimationName");function xg(t){var o,s;let e=(o=Object.getOwnPropertyDescriptor(t.props,"ref"))==null?void 0:o.get,r=e&&"isReactWarning"in e&&e.isReactWarning;return r?t.ref:(e=(s=Object.getOwnPropertyDescriptor(t,"ref"))==null?void 0:s.get,r=e&&"isReactWarning"in e&&e.isReactWarning,r?t.props.ref:t.props.ref||t.ref)}sn(xg,"getElementRef");var dw=Object.defineProperty,uw=(t,e)=>dw(t,"name",{value:e,configurable:!0}),dh=As[" useEffectEvent ".trim().toString()],uh=As[" useInsertionEffect ".trim().toString()];function vg(t){if(typeof dh=="function")return dh(t);const e=v.useRef(()=>{throw new Error("Cannot call an event handler while rendering.")});return typeof uh=="function"?uh(()=>{e.current=t}):At(()=>{e.current=t}),v.useMemo(()=>(...r)=>{var o;return(o=e.current)==null?void 0:o.call(e,...r)},[])}uw(vg,"useEffectEvent");var hw=Object.defineProperty,Os=(t,e)=>hw(t,"name",{value:e,configurable:!0}),pw=As[" useInsertionEffect ".trim().toString()]||At;function yg({prop:t,defaultProp:e,onChange:r=Os(()=>{},"onChange"),caller:o}){const[s,i,l]=jg({defaultProp:e,onChange:r}),a=t!==void 0,c=a?t:s,d=v.useCallback(u=>{var h;if(a){const f=wg(u)?u(t):u;f!==t&&((h=l.current)==null||h.call(l,f))}else i(u)},[a,t,i,l]);return[c,d]}Os(yg,"useControllableState");function jg({defaultProp:t,onChange:e}){const[r,o]=v.useState(t),s=v.useRef(r),i=v.useRef(e);return pw(()=>{i.current=e},[e]),v.useEffect(()=>{var l;s.current!==r&&((l=i.current)==null||l.call(i,r),s.current=r)},[r,s]),[r,o,i]}Os(jg,"useUncontrolledState");function wg(t){return typeof t=="function"}Os(wg,"isFunction");var hh=Symbol("RADIX:SYNC_STATE");function fw(t,e,r,o){const{prop:s,defaultProp:i,onChange:l,caller:a}=e,c=s!==void 0,d=vg(l),u=[{...r,state:i}];o&&u.push(o);const[h,f]=v.useReducer((w,g)=>{if(g.type===hh)return{...w,state:g.state};const m=t(w,g);return c&&!Object.is(m.state,w.state)&&d(m.state),m},...u),p=h.state,j=v.useRef(p);v.useEffect(()=>{j.current!==p&&(j.current=p,c||d(p))},[p,j,c]);const y=v.useMemo(()=>s!==void 0?{...h,state:s}:h,[h,s]);return v.useEffect(()=>{c&&!Object.is(s,h.state)&&f({type:hh,state:s})},[s,h.state,c]),[y,f]}Os(fw,"useControllableStateReducer");var mw=Object.defineProperty,gw=(t,e)=>mw(t,"name",{value:e,configurable:!0}),xw=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"}),Nd=v.forwardRef(gw(function(e,r){return n.jsx(Rt.span,{...e,ref:r,style:{...xw,...e.style}})},"VisuallyHidden")),vw=Object.defineProperty,ne=(t,e)=>vw(t,"name",{value:e,configurable:!0}),bg="ToastProvider",[Ed,kg,yw]=sg("Toast"),fc={Left:"left",Right:"right"},ph={Foreground:"foreground"},[Sg,NC]=ko("Toast",[yw]),[jw,wl]=Sg(bg),ww=ne(t=>{const{__scopeToast:e,label:r="Notification",duration:o=5e3,swipeDirection:s=fc.Right,swipeThreshold:i=50,announcerContainer:l,children:a}=t,[c,d]=v.useState(null),[u,h]=v.useState(0),f=v.useRef(!1);return r.trim()||console.error(`Invalid prop \`label\` supplied to \`${bg}\`. Expected non-empty \`string\`.`),n.jsx(Ed.Provider,{scope:e,children:n.jsx(jw,{scope:e,label:r,duration:o,swipeDirection:s,swipeThreshold:i,toastCount:u,viewport:c,onViewportChange:d,onToastAdd:v.useCallback(()=>h(p=>p+1),[]),onToastRemove:v.useCallback(()=>h(p=>p-1),[]),isClosePausedRef:f,announcerContainer:l,children:a})})},"ToastProvider"),bw="ToastViewport",kw=["F8"],mc="toast.viewportPause",gc="toast.viewportResume",Cg=v.forwardRef(ne(function(e,r){const{__scopeToast:o,hotkey:s=kw,label:i="Notifications ({hotkey})",...l}=e,a=wl(bw,o),c=kg(o),d=v.useRef(null),u=v.useRef(null),h=v.useRef(null),f=v.useRef(null),p=nt(r,f,a.onViewportChange),j=s.join("+").replace(/Key/g,"").replace(/Digit/g,""),y=a.toastCount>0;v.useEffect(()=>{const g=ne(m=>{var b;s.length!==0&&s.every(k=>m[k]||m.code===k)&&((b=f.current)==null||b.focus())},"handleKeyDown");return document.addEventListener("keydown",g),()=>document.removeEventListener("keydown",g)},[s]),v.useEffect(()=>{const g=d.current,m=f.current;if(y&&g&&m){const x=ne(()=>{if(!a.isClosePausedRef.current){const C=new CustomEvent(mc);m.dispatchEvent(C),a.isClosePausedRef.current=!0}},"handlePause"),b=ne(()=>{if(a.isClosePausedRef.current){const C=new CustomEvent(gc);m.dispatchEvent(C),a.isClosePausedRef.current=!1}},"handleResume"),k=ne(C=>{!g.contains(C.relatedTarget)&&b()},"handleFocusOutResume"),S=ne(()=>{g.contains(document.activeElement)||b()},"handlePointerLeaveResume");return g.addEventListener("focusin",x),g.addEventListener("focusout",k),g.addEventListener("pointermove",x),g.addEventListener("pointerleave",S),window.addEventListener("blur",x),window.addEventListener("focus",b),()=>{g.removeEventListener("focusin",x),g.removeEventListener("focusout",k),g.removeEventListener("pointermove",x),g.removeEventListener("pointerleave",S),window.removeEventListener("blur",x),window.removeEventListener("focus",b)}}},[y,a.isClosePausedRef]);const w=v.useCallback(({tabbingDirection:g})=>{const x=c().map(b=>{const k=b.ref.current,S=[k,...Mg(k)];return g==="forwards"?S:S.reverse()});return(g==="forwards"?x.reverse():x).flat()},[c]);return v.useEffect(()=>{const g=f.current;if(g){const m=ne(x=>{var S,C,E;const b=x.altKey||x.ctrlKey||x.metaKey;if(x.key==="Tab"&&!b){const R=document.activeElement,A=x.shiftKey;if(x.target===g&&A){(S=u.current)==null||S.focus();return}const B=w({tabbingDirection:A?"backwards":"forwards"}),$=B.findIndex(X=>X===R);Ti(B.slice($+1))?x.preventDefault():A?(C=u.current)==null||C.focus():(E=h.current)==null||E.focus()}},"handleKeyDown");return g.addEventListener("keydown",m),()=>g.removeEventListener("keydown",m)}},[c,w]),n.jsxs(rw,{ref:d,role:"region","aria-label":i.replace("{hotkey}",j),tabIndex:-1,style:{pointerEvents:y?void 0:"none"},children:[y&&n.jsx(fh,{ref:u,onFocusFromOutsideViewport:()=>{const g=w({tabbingDirection:"forwards"});Ti(g)}}),n.jsx(Ed.Slot,{scope:o,children:n.jsx(Rt.ol,{tabIndex:-1,...l,ref:p})}),y&&n.jsx(fh,{ref:h,onFocusFromOutsideViewport:()=>{const g=w({tabbingDirection:"backwards"});Ti(g)}})]})},"ToastViewport")),Sw="ToastFocusProxy",fh=v.forwardRef(ne(function(e,r){const{__scopeToast:o,onFocusFromOutsideViewport:s,...i}=e,l=wl(Sw,o);return n.jsx(Nd,{tabIndex:0,...i,ref:r,style:{position:"fixed"},onFocus:a=>{var u;const c=a.relatedTarget;!((u=l.viewport)!=null&&u.contains(c))&&s()}})},"ToastFocusProxy")),bl="Toast",Cw="toast.swipeStart",Tw="toast.swipeMove",Pw="toast.swipeCancel",Nw="toast.swipeEnd",Tg=v.forwardRef(ne(function(e,r){const{forceMount:o,open:s,defaultOpen:i,onOpenChange:l,...a}=e,[c,d]=yg({prop:s,defaultProp:i??!0,onChange:l,caller:bl});return n.jsx(fg,{present:o||c,children:n.jsx(Iw,{open:c,...a,ref:r,onClose:()=>d(!1),onPause:on(e.onPause),onResume:on(e.onResume),onSwipeStart:qe(e.onSwipeStart,u=>{u.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:qe(e.onSwipeMove,u=>{const{x:h,y:f}=u.detail.delta;u.currentTarget.setAttribute("data-swipe","move"),u.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${h}px`),u.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${f}px`)}),onSwipeCancel:qe(e.onSwipeCancel,u=>{u.currentTarget.setAttribute("data-swipe","cancel"),u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:qe(e.onSwipeEnd,u=>{const{x:h,y:f}=u.detail.delta;u.currentTarget.setAttribute("data-swipe","end"),u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),u.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${h}px`),u.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${f}px`),d(!1)})})})},"Toast")),[Ew,Aw]=Sg(bl,{onClose(){}}),Iw=v.forwardRef(ne(function(e,r){const{__scopeToast:o,type:s=ph.Foreground,duration:i,open:l,onClose:a,onEscapeKeyDown:c,onPause:d,onResume:u,onSwipeStart:h,onSwipeMove:f,onSwipeCancel:p,onSwipeEnd:j,...y}=e,w=wl(bl,o),g=kg(o),[m,x]=v.useState(null),b=nt(r,x),k=v.useRef(null),S=v.useRef(null),C=i||w.duration,E=v.useRef(0),R=v.useRef(C),A=v.useRef(0),{onToastAdd:H,onToastRemove:M}=w,B=on(()=>{var F;(m==null?void 0:m.contains(document.activeElement))&&((F=w.viewport)==null||F.focus()),a()}),$=v.useCallback(O=>{!O||O===1/0||(window.clearTimeout(A.current),E.current=new Date().getTime(),A.current=window.setTimeout(B,O))},[B]);v.useEffect(()=>{const O=w.viewport;if(O){const F=ne(()=>{$(R.current),u==null||u()},"handleResume"),P=ne(()=>{const N=new Date().getTime()-E.current;R.current=R.current-N,window.clearTimeout(A.current),d==null||d()},"handlePause");return O.addEventListener(mc,P),O.addEventListener(gc,F),()=>{O.removeEventListener(mc,P),O.removeEventListener(gc,F)}}},[w.viewport,C,d,u,$]),v.useEffect(()=>{R.current=C,l&&!w.isClosePausedRef.current&&$(C)},[l,C,w.isClosePausedRef,$]),v.useEffect(()=>()=>{window.clearTimeout(A.current)},[]),v.useEffect(()=>(H(),()=>M()),[H,M]);const X=v.useMemo(()=>m?Id(m):null,[m]);return w.viewport?n.jsxs(n.Fragment,{children:[X&&n.jsx(Rw,{__scopeToast:o,role:"status","aria-live":s===ph.Foreground?"assertive":"polite",children:X}),n.jsx(Ew,{scope:o,onClose:B,children:wo.createPortal(n.jsx(Ed.ItemSlot,{scope:o,children:n.jsx(dg,{asChild:!0,onEscapeKeyDown:qe(c,O=>{g().some(P=>{var N;return(N=P.ref.current)==null?void 0:N.contains(O.target)})||B()}),children:n.jsx(Rt.li,{tabIndex:0,"data-state":l?"open":"closed","data-swipe-direction":w.swipeDirection,...y,ref:b,style:{userSelect:"none",touchAction:"none",...e.style},onKeyDown:qe(e.onKeyDown,O=>{O.key==="Escape"&&(c==null||c(O.nativeEvent),O.nativeEvent.defaultPrevented||B())}),onPointerDown:qe(e.onPointerDown,O=>{O.button===0&&(k.current={x:O.clientX,y:O.clientY})}),onPointerMove:qe(e.onPointerMove,O=>{if(!k.current)return;const F=O.clientX-k.current.x,P=O.clientY-k.current.y,N=!!S.current,L=["left","right"].includes(w.swipeDirection),U=["left","up"].includes(w.swipeDirection)?Math.min:Math.max,z=L?U(0,F):0,J=L?0:U(0,P),K=O.pointerType==="touch"?10:2,oe={x:z,y:J},ye={originalEvent:O,delta:oe};N?(S.current=oe,Vo(Tw,f,ye,{discrete:!1})):mh(oe,w.swipeDirection,K)?(S.current=oe,Vo(Cw,h,ye,{discrete:!1}),O.target.setPointerCapture(O.pointerId)):(Math.abs(F)>K||Math.abs(P)>K)&&(k.current=null)}),onPointerUp:qe(e.onPointerUp,O=>{const F=S.current,P=O.target;if(P.hasPointerCapture(O.pointerId)&&P.releasePointerCapture(O.pointerId),S.current=null,k.current=null,F){const N=O.currentTarget,L={originalEvent:O,delta:F};mh(F,w.swipeDirection,w.swipeThreshold)?Vo(Nw,j,L,{discrete:!0}):Vo(Pw,p,L,{discrete:!0}),N.addEventListener("click",U=>U.preventDefault(),{once:!0})}})})})}),w.viewport)})]}):null},"ToastImpl")),Rw=ne(t=>{const{__scopeToast:e,children:r,...o}=t,s=wl(bl,e),[i,l]=v.useState(!1),[a,c]=v.useState(!1);return Ig(()=>l(!0)),v.useEffect(()=>{const d=window.setTimeout(()=>c(!0),1e3);return()=>window.clearTimeout(d)},[]),a?null:n.jsx(aw,{asChild:!0,container:s.announcerContainer||void 0,children:n.jsx(Nd,{...o,children:i&&n.jsxs(n.Fragment,{children:[s.label," ",r]})})})},"ToastAnnounce"),Pg=v.forwardRef(ne(function(e,r){const{__scopeToast:o,...s}=e;return n.jsx(Rt.div,{...s,ref:r})},"ToastTitle")),Ng=v.forwardRef(ne(function(e,r){const{__scopeToast:o,...s}=e;return n.jsx(Rt.div,{...s,ref:r})},"ToastDescription")),Mw="ToastAction",Eg=v.forwardRef(ne(function(e,r){const{altText:o,...s}=e;return o.trim()?n.jsx(Ag,{altText:o,asChild:!0,children:n.jsx(Ad,{...s,ref:r})}):(console.error(`Invalid prop \`altText\` supplied to \`${Mw}\`. Expected non-empty \`string\`.`),null)},"ToastAction")),_w="ToastClose",Ad=v.forwardRef(ne(function(e,r){const{__scopeToast:o,...s}=e,i=Aw(_w,o);return n.jsx(Ag,{asChild:!0,children:n.jsx(Rt.button,{type:"button",...s,ref:r,onClick:qe(e.onClick,i.onClose)})})},"ToastClose")),Ag=v.forwardRef(ne(function(e,r){const{__scopeToast:o,altText:s,...i}=e;return n.jsx(Rt.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":s||void 0,...i,ref:r})},"ToastAnnounceExclude"));function Id(t){const e=[];return Array.from(t.childNodes).forEach(o=>{if(o.nodeType===o.TEXT_NODE&&o.textContent&&e.push(o.textContent),Rg(o)){const s=o.ariaHidden||o.hidden||o.style.display==="none",i=o.dataset.radixToastAnnounceExclude==="";if(!s)if(i){const l=o.dataset.radixToastAnnounceAlt;l&&e.push(l)}else e.push(...Id(o))}}),e}ne(Id,"getAnnounceTextContent");function Vo(t,e,r,{discrete:o}){const s=r.originalEvent.currentTarget,i=new CustomEvent(t,{bubbles:!0,cancelable:!0,detail:r});e&&s.addEventListener(t,e,{once:!0}),o?Cd(s,i):s.dispatchEvent(i)}ne(Vo,"handleAndDispatchCustomEvent");var mh=ne((t,e,r=0)=>{const o=Math.abs(t.x),s=Math.abs(t.y),i=o>s;return e===fc.Left||e===fc.Right?i&&o>r:!i&&s>r},"isDeltaInDirection");function Ig(t=()=>{}){const e=on(t);At(()=>{let r=0,o=0;return r=window.requestAnimationFrame(()=>o=window.requestAnimationFrame(e)),()=>{window.cancelAnimationFrame(r),window.cancelAnimationFrame(o)}},[e])}ne(Ig,"useNextFrame");function Rg(t){return t.nodeType===t.ELEMENT_NODE}ne(Rg,"isHTMLElement");function Mg(t){const e=[],r=document.createTreeWalker(t,NodeFilter.SHOW_ELEMENT,{acceptNode:ne(o=>{const s=o.tagName==="INPUT"&&o.type==="hidden";return o.disabled||o.hidden||s?NodeFilter.FILTER_SKIP:o.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP},"acceptNode")});for(;r.nextNode();)e.push(r.currentNode);return e}ne(Mg,"getTabbableCandidates");function Ti(t){const e=document.activeElement;return t.some(r=>r===e?!0:(r.focus(),document.activeElement!==e))}ne(Ti,"focusFirst");function _g(t){var e,r,o="";if(typeof t=="string"||typeof t=="number")o+=t;else if(typeof t=="object")if(Array.isArray(t)){var s=t.length;for(e=0;e<s;e++)t[e]&&(r=_g(t[e]))&&(o&&(o+=" "),o+=r)}else for(r in t)t[r]&&(o&&(o+=" "),o+=r);return o}function Og(){for(var t,e,r=0,o="",s=arguments.length;r<s;r++)(t=arguments[r])&&(e=_g(t))&&(o&&(o+=" "),o+=e);return o}const gh=t=>typeof t=="boolean"?`${t}`:t===0?"0":t,xh=Og,Rd=(t,e)=>r=>{var o;if((e==null?void 0:e.variants)==null)return xh(t,r==null?void 0:r.class,r==null?void 0:r.className);const{variants:s,defaultVariants:i}=e,l=Object.keys(s).map(d=>{const u=r==null?void 0:r[d],h=i==null?void 0:i[d];if(u===null)return null;const f=gh(u)||gh(h);return s[d][f]}),a=r&&Object.entries(r).reduce((d,u)=>{let[h,f]=u;return f===void 0||(d[h]=f),d},{}),c=e==null||(o=e.compoundVariants)===null||o===void 0?void 0:o.reduce((d,u)=>{let{class:h,className:f,...p}=u;return Object.entries(p).every(j=>{let[y,w]=j;return Array.isArray(w)?w.includes({...i,...a}[y]):{...i,...a}[y]===w})?[...d,h,f]:d},[]);return xh(t,l,c,r==null?void 0:r.class,r==null?void 0:r.className)};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ow=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Lg=(...t)=>t.filter((e,r,o)=>!!e&&e.trim()!==""&&o.indexOf(e)===r).join(" ").trim();/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Lw={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dw=v.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:o,className:s="",children:i,iconNode:l,...a},c)=>v.createElement("svg",{ref:c,...Lw,width:e,height:e,stroke:t,strokeWidth:o?Number(r)*24/Number(e):r,className:Lg("lucide",s),...a},[...l.map(([d,u])=>v.createElement(d,u)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Se=(t,e)=>{const r=v.forwardRef(({className:o,...s},i)=>v.createElement(Dw,{ref:i,iconNode:e,className:Lg(`lucide-${Ow(t)}`,o),...s}));return r.displayName=`${t}`,r};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vh=Se("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fw=Se("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bw=Se("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zw=Se("Brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ww=Se("CodeXml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $w=Se("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hw=Se("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dg=Se("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uw=Se("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vw=Se("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qw=Se("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jw=Se("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fg=Se("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kw=Se("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bg=Se("Share2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zg=Se("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gw=Se("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qw=Se("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yw=Se("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),Md="-",Xw=t=>{const e=eb(t),{conflictingClassGroups:r,conflictingClassGroupModifiers:o}=t;return{getClassGroupId:l=>{const a=l.split(Md);return a[0]===""&&a.length!==1&&a.shift(),Wg(a,e)||Zw(l)},getConflictingClassGroupIds:(l,a)=>{const c=r[l]||[];return a&&o[l]?[...c,...o[l]]:c}}},Wg=(t,e)=>{var l;if(t.length===0)return e.classGroupId;const r=t[0],o=e.nextPart.get(r),s=o?Wg(t.slice(1),o):void 0;if(s)return s;if(e.validators.length===0)return;const i=t.join(Md);return(l=e.validators.find(({validator:a})=>a(i)))==null?void 0:l.classGroupId},yh=/^\[(.+)\]$/,Zw=t=>{if(yh.test(t)){const e=yh.exec(t)[1],r=e==null?void 0:e.substring(0,e.indexOf(":"));if(r)return"arbitrary.."+r}},eb=t=>{const{theme:e,prefix:r}=t,o={nextPart:new Map,validators:[]};return nb(Object.entries(t.classGroups),r).forEach(([i,l])=>{xc(l,o,i,e)}),o},xc=(t,e,r,o)=>{t.forEach(s=>{if(typeof s=="string"){const i=s===""?e:jh(e,s);i.classGroupId=r;return}if(typeof s=="function"){if(tb(s)){xc(s(o),e,r,o);return}e.validators.push({validator:s,classGroupId:r});return}Object.entries(s).forEach(([i,l])=>{xc(l,jh(e,i),r,o)})})},jh=(t,e)=>{let r=t;return e.split(Md).forEach(o=>{r.nextPart.has(o)||r.nextPart.set(o,{nextPart:new Map,validators:[]}),r=r.nextPart.get(o)}),r},tb=t=>t.isThemeGetter,nb=(t,e)=>e?t.map(([r,o])=>{const s=o.map(i=>typeof i=="string"?e+i:typeof i=="object"?Object.fromEntries(Object.entries(i).map(([l,a])=>[e+l,a])):i);return[r,s]}):t,rb=t=>{if(t<1)return{get:()=>{},set:()=>{}};let e=0,r=new Map,o=new Map;const s=(i,l)=>{r.set(i,l),e++,e>t&&(e=0,o=r,r=new Map)};return{get(i){let l=r.get(i);if(l!==void 0)return l;if((l=o.get(i))!==void 0)return s(i,l),l},set(i,l){r.has(i)?r.set(i,l):s(i,l)}}},$g="!",ob=t=>{const{separator:e,experimentalParseClassName:r}=t,o=e.length===1,s=e[0],i=e.length,l=a=>{const c=[];let d=0,u=0,h;for(let w=0;w<a.length;w++){let g=a[w];if(d===0){if(g===s&&(o||a.slice(w,w+i)===e)){c.push(a.slice(u,w)),u=w+i;continue}if(g==="/"){h=w;continue}}g==="["?d++:g==="]"&&d--}const f=c.length===0?a:a.substring(u),p=f.startsWith($g),j=p?f.substring(1):f,y=h&&h>u?h-u:void 0;return{modifiers:c,hasImportantModifier:p,baseClassName:j,maybePostfixModifierPosition:y}};return r?a=>r({className:a,parseClassName:l}):l},sb=t=>{if(t.length<=1)return t;const e=[];let r=[];return t.forEach(o=>{o[0]==="["?(e.push(...r.sort(),o),r=[]):r.push(o)}),e.push(...r.sort()),e},ib=t=>({cache:rb(t.cacheSize),parseClassName:ob(t),...Xw(t)}),lb=/\s+/,ab=(t,e)=>{const{parseClassName:r,getClassGroupId:o,getConflictingClassGroupIds:s}=e,i=[],l=t.trim().split(lb);let a="";for(let c=l.length-1;c>=0;c-=1){const d=l[c],{modifiers:u,hasImportantModifier:h,baseClassName:f,maybePostfixModifierPosition:p}=r(d);let j=!!p,y=o(j?f.substring(0,p):f);if(!y){if(!j){a=d+(a.length>0?" "+a:a);continue}if(y=o(f),!y){a=d+(a.length>0?" "+a:a);continue}j=!1}const w=sb(u).join(":"),g=h?w+$g:w,m=g+y;if(i.includes(m))continue;i.push(m);const x=s(y,j);for(let b=0;b<x.length;++b){const k=x[b];i.push(g+k)}a=d+(a.length>0?" "+a:a)}return a};function cb(){let t=0,e,r,o="";for(;t<arguments.length;)(e=arguments[t++])&&(r=Hg(e))&&(o&&(o+=" "),o+=r);return o}const Hg=t=>{if(typeof t=="string")return t;let e,r="";for(let o=0;o<t.length;o++)t[o]&&(e=Hg(t[o]))&&(r&&(r+=" "),r+=e);return r};function db(t,...e){let r,o,s,i=l;function l(c){const d=e.reduce((u,h)=>h(u),t());return r=ib(d),o=r.cache.get,s=r.cache.set,i=a,a(c)}function a(c){const d=o(c);if(d)return d;const u=ab(c,r);return s(c,u),u}return function(){return i(cb.apply(null,arguments))}}const se=t=>{const e=r=>r[t]||[];return e.isThemeGetter=!0,e},Ug=/^\[(?:([a-z-]+):)?(.+)\]$/i,ub=/^\d+\/\d+$/,hb=new Set(["px","full","screen"]),pb=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,fb=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,mb=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,gb=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,xb=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Ut=t=>Yr(t)||hb.has(t)||ub.test(t),gn=t=>So(t,"length",Cb),Yr=t=>!!t&&!Number.isNaN(Number(t)),ca=t=>So(t,"number",Yr),Bo=t=>!!t&&Number.isInteger(Number(t)),vb=t=>t.endsWith("%")&&Yr(t.slice(0,-1)),q=t=>Ug.test(t),xn=t=>pb.test(t),yb=new Set(["length","size","percentage"]),jb=t=>So(t,yb,Vg),wb=t=>So(t,"position",Vg),bb=new Set(["image","url"]),kb=t=>So(t,bb,Pb),Sb=t=>So(t,"",Tb),zo=()=>!0,So=(t,e,r)=>{const o=Ug.exec(t);return o?o[1]?typeof e=="string"?o[1]===e:e.has(o[1]):r(o[2]):!1},Cb=t=>fb.test(t)&&!mb.test(t),Vg=()=>!1,Tb=t=>gb.test(t),Pb=t=>xb.test(t),Nb=()=>{const t=se("colors"),e=se("spacing"),r=se("blur"),o=se("brightness"),s=se("borderColor"),i=se("borderRadius"),l=se("borderSpacing"),a=se("borderWidth"),c=se("contrast"),d=se("grayscale"),u=se("hueRotate"),h=se("invert"),f=se("gap"),p=se("gradientColorStops"),j=se("gradientColorStopPositions"),y=se("inset"),w=se("margin"),g=se("opacity"),m=se("padding"),x=se("saturate"),b=se("scale"),k=se("sepia"),S=se("skew"),C=se("space"),E=se("translate"),R=()=>["auto","contain","none"],A=()=>["auto","hidden","clip","visible","scroll"],H=()=>["auto",q,e],M=()=>[q,e],B=()=>["",Ut,gn],$=()=>["auto",Yr,q],X=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],O=()=>["solid","dashed","dotted","double","none"],F=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],P=()=>["start","end","center","between","around","evenly","stretch"],N=()=>["","0",q],L=()=>["auto","avoid","all","avoid-page","page","left","right","column"],U=()=>[Yr,q];return{cacheSize:500,separator:":",theme:{colors:[zo],spacing:[Ut,gn],blur:["none","",xn,q],brightness:U(),borderColor:[t],borderRadius:["none","","full",xn,q],borderSpacing:M(),borderWidth:B(),contrast:U(),grayscale:N(),hueRotate:U(),invert:N(),gap:M(),gradientColorStops:[t],gradientColorStopPositions:[vb,gn],inset:H(),margin:H(),opacity:U(),padding:M(),saturate:U(),scale:U(),sepia:N(),skew:U(),space:M(),translate:M()},classGroups:{aspect:[{aspect:["auto","square","video",q]}],container:["container"],columns:[{columns:[xn]}],"break-after":[{"break-after":L()}],"break-before":[{"break-before":L()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...X(),q]}],overflow:[{overflow:A()}],"overflow-x":[{"overflow-x":A()}],"overflow-y":[{"overflow-y":A()}],overscroll:[{overscroll:R()}],"overscroll-x":[{"overscroll-x":R()}],"overscroll-y":[{"overscroll-y":R()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[y]}],"inset-x":[{"inset-x":[y]}],"inset-y":[{"inset-y":[y]}],start:[{start:[y]}],end:[{end:[y]}],top:[{top:[y]}],right:[{right:[y]}],bottom:[{bottom:[y]}],left:[{left:[y]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",Bo,q]}],basis:[{basis:H()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",q]}],grow:[{grow:N()}],shrink:[{shrink:N()}],order:[{order:["first","last","none",Bo,q]}],"grid-cols":[{"grid-cols":[zo]}],"col-start-end":[{col:["auto",{span:["full",Bo,q]},q]}],"col-start":[{"col-start":$()}],"col-end":[{"col-end":$()}],"grid-rows":[{"grid-rows":[zo]}],"row-start-end":[{row:["auto",{span:[Bo,q]},q]}],"row-start":[{"row-start":$()}],"row-end":[{"row-end":$()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",q]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",q]}],gap:[{gap:[f]}],"gap-x":[{"gap-x":[f]}],"gap-y":[{"gap-y":[f]}],"justify-content":[{justify:["normal",...P()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...P(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...P(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[m]}],px:[{px:[m]}],py:[{py:[m]}],ps:[{ps:[m]}],pe:[{pe:[m]}],pt:[{pt:[m]}],pr:[{pr:[m]}],pb:[{pb:[m]}],pl:[{pl:[m]}],m:[{m:[w]}],mx:[{mx:[w]}],my:[{my:[w]}],ms:[{ms:[w]}],me:[{me:[w]}],mt:[{mt:[w]}],mr:[{mr:[w]}],mb:[{mb:[w]}],ml:[{ml:[w]}],"space-x":[{"space-x":[C]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[C]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",q,e]}],"min-w":[{"min-w":[q,e,"min","max","fit"]}],"max-w":[{"max-w":[q,e,"none","full","min","max","fit","prose",{screen:[xn]},xn]}],h:[{h:[q,e,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[q,e,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[q,e,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[q,e,"auto","min","max","fit"]}],"font-size":[{text:["base",xn,gn]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",ca]}],"font-family":[{font:[zo]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",q]}],"line-clamp":[{"line-clamp":["none",Yr,ca]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Ut,q]}],"list-image":[{"list-image":["none",q]}],"list-style-type":[{list:["none","disc","decimal",q]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[t]}],"placeholder-opacity":[{"placeholder-opacity":[g]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[t]}],"text-opacity":[{"text-opacity":[g]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...O(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",Ut,gn]}],"underline-offset":[{"underline-offset":["auto",Ut,q]}],"text-decoration-color":[{decoration:[t]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:M()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",q]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",q]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[g]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...X(),wb]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",jb]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},kb]}],"bg-color":[{bg:[t]}],"gradient-from-pos":[{from:[j]}],"gradient-via-pos":[{via:[j]}],"gradient-to-pos":[{to:[j]}],"gradient-from":[{from:[p]}],"gradient-via":[{via:[p]}],"gradient-to":[{to:[p]}],rounded:[{rounded:[i]}],"rounded-s":[{"rounded-s":[i]}],"rounded-e":[{"rounded-e":[i]}],"rounded-t":[{"rounded-t":[i]}],"rounded-r":[{"rounded-r":[i]}],"rounded-b":[{"rounded-b":[i]}],"rounded-l":[{"rounded-l":[i]}],"rounded-ss":[{"rounded-ss":[i]}],"rounded-se":[{"rounded-se":[i]}],"rounded-ee":[{"rounded-ee":[i]}],"rounded-es":[{"rounded-es":[i]}],"rounded-tl":[{"rounded-tl":[i]}],"rounded-tr":[{"rounded-tr":[i]}],"rounded-br":[{"rounded-br":[i]}],"rounded-bl":[{"rounded-bl":[i]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[g]}],"border-style":[{border:[...O(),"hidden"]}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[g]}],"divide-style":[{divide:O()}],"border-color":[{border:[s]}],"border-color-x":[{"border-x":[s]}],"border-color-y":[{"border-y":[s]}],"border-color-s":[{"border-s":[s]}],"border-color-e":[{"border-e":[s]}],"border-color-t":[{"border-t":[s]}],"border-color-r":[{"border-r":[s]}],"border-color-b":[{"border-b":[s]}],"border-color-l":[{"border-l":[s]}],"divide-color":[{divide:[s]}],"outline-style":[{outline:["",...O()]}],"outline-offset":[{"outline-offset":[Ut,q]}],"outline-w":[{outline:[Ut,gn]}],"outline-color":[{outline:[t]}],"ring-w":[{ring:B()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[t]}],"ring-opacity":[{"ring-opacity":[g]}],"ring-offset-w":[{"ring-offset":[Ut,gn]}],"ring-offset-color":[{"ring-offset":[t]}],shadow:[{shadow:["","inner","none",xn,Sb]}],"shadow-color":[{shadow:[zo]}],opacity:[{opacity:[g]}],"mix-blend":[{"mix-blend":[...F(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":F()}],filter:[{filter:["","none"]}],blur:[{blur:[r]}],brightness:[{brightness:[o]}],contrast:[{contrast:[c]}],"drop-shadow":[{"drop-shadow":["","none",xn,q]}],grayscale:[{grayscale:[d]}],"hue-rotate":[{"hue-rotate":[u]}],invert:[{invert:[h]}],saturate:[{saturate:[x]}],sepia:[{sepia:[k]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[r]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[c]}],"backdrop-grayscale":[{"backdrop-grayscale":[d]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[u]}],"backdrop-invert":[{"backdrop-invert":[h]}],"backdrop-opacity":[{"backdrop-opacity":[g]}],"backdrop-saturate":[{"backdrop-saturate":[x]}],"backdrop-sepia":[{"backdrop-sepia":[k]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[l]}],"border-spacing-x":[{"border-spacing-x":[l]}],"border-spacing-y":[{"border-spacing-y":[l]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",q]}],duration:[{duration:U()}],ease:[{ease:["linear","in","out","in-out",q]}],delay:[{delay:U()}],animate:[{animate:["none","spin","ping","pulse","bounce",q]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[b]}],"scale-x":[{"scale-x":[b]}],"scale-y":[{"scale-y":[b]}],rotate:[{rotate:[Bo,q]}],"translate-x":[{"translate-x":[E]}],"translate-y":[{"translate-y":[E]}],"skew-x":[{"skew-x":[S]}],"skew-y":[{"skew-y":[S]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",q]}],accent:[{accent:["auto",t]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",q]}],"caret-color":[{caret:[t]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":M()}],"scroll-mx":[{"scroll-mx":M()}],"scroll-my":[{"scroll-my":M()}],"scroll-ms":[{"scroll-ms":M()}],"scroll-me":[{"scroll-me":M()}],"scroll-mt":[{"scroll-mt":M()}],"scroll-mr":[{"scroll-mr":M()}],"scroll-mb":[{"scroll-mb":M()}],"scroll-ml":[{"scroll-ml":M()}],"scroll-p":[{"scroll-p":M()}],"scroll-px":[{"scroll-px":M()}],"scroll-py":[{"scroll-py":M()}],"scroll-ps":[{"scroll-ps":M()}],"scroll-pe":[{"scroll-pe":M()}],"scroll-pt":[{"scroll-pt":M()}],"scroll-pr":[{"scroll-pr":M()}],"scroll-pb":[{"scroll-pb":M()}],"scroll-pl":[{"scroll-pl":M()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",q]}],fill:[{fill:[t,"none"]}],"stroke-w":[{stroke:[Ut,gn,ca]}],stroke:[{stroke:[t,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},Eb=db(Nb);function He(...t){return Eb(Og(t))}const Ab=ww,qg=v.forwardRef(({className:t,...e},r)=>n.jsx(Cg,{ref:r,className:He("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",t),...e}));qg.displayName=Cg.displayName;const Ib=Rd("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),Jg=v.forwardRef(({className:t,variant:e,...r},o)=>n.jsx(Tg,{ref:o,className:He(Ib({variant:e}),t),...r}));Jg.displayName=Tg.displayName;const Rb=v.forwardRef(({className:t,...e},r)=>n.jsx(Eg,{ref:r,className:He("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",t),...e}));Rb.displayName=Eg.displayName;const Kg=v.forwardRef(({className:t,...e},r)=>n.jsx(Ad,{ref:r,className:He("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",t),"toast-close":"",...e,children:n.jsx(Qw,{className:"h-4 w-4"})}));Kg.displayName=Ad.displayName;const Gg=v.forwardRef(({className:t,...e},r)=>n.jsx(Pg,{ref:r,className:He("text-sm font-semibold",t),...e}));Gg.displayName=Pg.displayName;const Qg=v.forwardRef(({className:t,...e},r)=>n.jsx(Ng,{ref:r,className:He("text-sm opacity-90",t),...e}));Qg.displayName=Ng.displayName;function Mb(){const{toasts:t}=Oj();return n.jsxs(Ab,{children:[t.map(function({id:e,title:r,description:o,action:s,...i}){return n.jsxs(Jg,{...i,children:[n.jsxs("div",{className:"grid gap-1",children:[r&&n.jsx(Gg,{children:r}),o&&n.jsx(Qg,{children:o})]}),s,n.jsx(Kg,{})]},e)}),n.jsx(qg,{})]})}var wh=["light","dark"],_b="(prefers-color-scheme: dark)",Ob=v.createContext(void 0),Lb={setTheme:t=>{},themes:[]},Db=()=>{var t;return(t=v.useContext(Ob))!=null?t:Lb};v.memo(({forcedTheme:t,storageKey:e,attribute:r,enableSystem:o,enableColorScheme:s,defaultTheme:i,value:l,attrs:a,nonce:c})=>{let d=i==="system",u=r==="class"?`var d=document.documentElement,c=d.classList;${`c.remove(${a.map(j=>`'${j}'`).join(",")})`};`:`var d=document.documentElement,n='${r}',s='setAttribute';`,h=s?wh.includes(i)&&i?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${i}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",f=(j,y=!1,w=!0)=>{let g=l?l[j]:j,m=y?j+"|| ''":`'${g}'`,x="";return s&&w&&!y&&wh.includes(j)&&(x+=`d.style.colorScheme = '${j}';`),r==="class"?y||g?x+=`c.add(${m})`:x+="null":g&&(x+=`d[s](n,${m})`),x},p=t?`!function(){${u}${f(t)}}()`:o?`!function(){try{${u}var e=localStorage.getItem('${e}');if('system'===e||(!e&&${d})){var t='${_b}',m=window.matchMedia(t);if(m.media!==t||m.matches){${f("dark")}}else{${f("light")}}}else if(e){${l?`var x=${JSON.stringify(l)};`:""}${f(l?"x[e]":"e",!0)}}${d?"":"else{"+f(i,!1,!1)+"}"}${h}}catch(e){}}()`:`!function(){try{${u}var e=localStorage.getItem('${e}');if(e){${l?`var x=${JSON.stringify(l)};`:""}${f(l?"x[e]":"e",!0)}}else{${f(i,!1,!1)};}${h}}catch(t){}}();`;return v.createElement("script",{nonce:c,dangerouslySetInnerHTML:{__html:p}})});var Fb=t=>{switch(t){case"success":return Wb;case"info":return Hb;case"warning":return $b;case"error":return Ub;default:return null}},Bb=Array(12).fill(0),zb=({visible:t,className:e})=>_.createElement("div",{className:["sonner-loading-wrapper",e].filter(Boolean).join(" "),"data-visible":t},_.createElement("div",{className:"sonner-spinner"},Bb.map((r,o)=>_.createElement("div",{className:"sonner-loading-bar",key:`spinner-bar-${o}`})))),Wb=_.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},_.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})),$b=_.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",height:"20",width:"20"},_.createElement("path",{fillRule:"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"})),Hb=_.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},_.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",clipRule:"evenodd"})),Ub=_.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},_.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})),Vb=_.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},_.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),_.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"})),qb=()=>{let[t,e]=_.useState(document.hidden);return _.useEffect(()=>{let r=()=>{e(document.hidden)};return document.addEventListener("visibilitychange",r),()=>window.removeEventListener("visibilitychange",r)},[]),t},vc=1,Jb=class{constructor(){this.subscribe=t=>(this.subscribers.push(t),()=>{let e=this.subscribers.indexOf(t);this.subscribers.splice(e,1)}),this.publish=t=>{this.subscribers.forEach(e=>e(t))},this.addToast=t=>{this.publish(t),this.toasts=[...this.toasts,t]},this.create=t=>{var e;let{message:r,...o}=t,s=typeof(t==null?void 0:t.id)=="number"||((e=t.id)==null?void 0:e.length)>0?t.id:vc++,i=this.toasts.find(a=>a.id===s),l=t.dismissible===void 0?!0:t.dismissible;return this.dismissedToasts.has(s)&&this.dismissedToasts.delete(s),i?this.toasts=this.toasts.map(a=>a.id===s?(this.publish({...a,...t,id:s,title:r}),{...a,...t,id:s,dismissible:l,title:r}):a):this.addToast({title:r,...o,dismissible:l,id:s}),s},this.dismiss=t=>(this.dismissedToasts.add(t),t||this.toasts.forEach(e=>{this.subscribers.forEach(r=>r({id:e.id,dismiss:!0}))}),this.subscribers.forEach(e=>e({id:t,dismiss:!0})),t),this.message=(t,e)=>this.create({...e,message:t}),this.error=(t,e)=>this.create({...e,message:t,type:"error"}),this.success=(t,e)=>this.create({...e,type:"success",message:t}),this.info=(t,e)=>this.create({...e,type:"info",message:t}),this.warning=(t,e)=>this.create({...e,type:"warning",message:t}),this.loading=(t,e)=>this.create({...e,type:"loading",message:t}),this.promise=(t,e)=>{if(!e)return;let r;e.loading!==void 0&&(r=this.create({...e,promise:t,type:"loading",message:e.loading,description:typeof e.description!="function"?e.description:void 0}));let o=t instanceof Promise?t:t(),s=r!==void 0,i,l=o.then(async c=>{if(i=["resolve",c],_.isValidElement(c))s=!1,this.create({id:r,type:"default",message:c});else if(Gb(c)&&!c.ok){s=!1;let d=typeof e.error=="function"?await e.error(`HTTP error! status: ${c.status}`):e.error,u=typeof e.description=="function"?await e.description(`HTTP error! status: ${c.status}`):e.description;this.create({id:r,type:"error",message:d,description:u})}else if(e.success!==void 0){s=!1;let d=typeof e.success=="function"?await e.success(c):e.success,u=typeof e.description=="function"?await e.description(c):e.description;this.create({id:r,type:"success",message:d,description:u})}}).catch(async c=>{if(i=["reject",c],e.error!==void 0){s=!1;let d=typeof e.error=="function"?await e.error(c):e.error,u=typeof e.description=="function"?await e.description(c):e.description;this.create({id:r,type:"error",message:d,description:u})}}).finally(()=>{var c;s&&(this.dismiss(r),r=void 0),(c=e.finally)==null||c.call(e)}),a=()=>new Promise((c,d)=>l.then(()=>i[0]==="reject"?d(i[1]):c(i[1])).catch(d));return typeof r!="string"&&typeof r!="number"?{unwrap:a}:Object.assign(r,{unwrap:a})},this.custom=(t,e)=>{let r=(e==null?void 0:e.id)||vc++;return this.create({jsx:t(r),id:r,...e}),r},this.getActiveToasts=()=>this.toasts.filter(t=>!this.dismissedToasts.has(t.id)),this.subscribers=[],this.toasts=[],this.dismissedToasts=new Set}},Ue=new Jb,Kb=(t,e)=>{let r=(e==null?void 0:e.id)||vc++;return Ue.addToast({title:t,...e,id:r}),r},Gb=t=>t&&typeof t=="object"&&"ok"in t&&typeof t.ok=="boolean"&&"status"in t&&typeof t.status=="number",Qb=Kb,Yb=()=>Ue.toasts,Xb=()=>Ue.getActiveToasts();Object.assign(Qb,{success:Ue.success,info:Ue.info,warning:Ue.warning,error:Ue.error,custom:Ue.custom,message:Ue.message,promise:Ue.promise,dismiss:Ue.dismiss,loading:Ue.loading},{getHistory:Yb,getToasts:Xb});function Zb(t,{insertAt:e}={}){if(typeof document>"u")return;let r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",e==="top"&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=t:o.appendChild(document.createTextNode(t))}Zb(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);function ai(t){return t.label!==void 0}var e0=3,t0="32px",n0="16px",bh=4e3,r0=356,o0=14,s0=20,i0=200;function bt(...t){return t.filter(Boolean).join(" ")}function l0(t){let[e,r]=t.split("-"),o=[];return e&&o.push(e),r&&o.push(r),o}var a0=t=>{var e,r,o,s,i,l,a,c,d,u,h;let{invert:f,toast:p,unstyled:j,interacting:y,setHeights:w,visibleToasts:g,heights:m,index:x,toasts:b,expanded:k,removeToast:S,defaultRichColors:C,closeButton:E,style:R,cancelButtonStyle:A,actionButtonStyle:H,className:M="",descriptionClassName:B="",duration:$,position:X,gap:O,loadingIcon:F,expandByDefault:P,classNames:N,icons:L,closeButtonAriaLabel:U="Close toast",pauseWhenPageIsHidden:z}=t,[J,K]=_.useState(null),[oe,ye]=_.useState(null),[Z,No]=_.useState(!1),[dn,Qn]=_.useState(!1),[un,Tr]=_.useState(!1),[Eo,Fs]=_.useState(!1),[Bs,Pr]=_.useState(!1),[zs,Ao]=_.useState(0),[Al,Ws]=_.useState(0),Yn=_.useRef(p.duration||$||bh),Xn=_.useRef(null),Zn=_.useRef(null),Kx=x===0,Gx=x+1<=g,it=p.type,Nr=p.dismissible!==!1,Qx=p.className||"",Yx=p.descriptionClassName||"",$s=_.useMemo(()=>m.findIndex(V=>V.toastId===p.id)||0,[m,p.id]),Xx=_.useMemo(()=>{var V;return(V=p.closeButton)!=null?V:E},[p.closeButton,E]),Jd=_.useMemo(()=>p.duration||$||bh,[p.duration,$]),Il=_.useRef(0),Er=_.useRef(0),Kd=_.useRef(0),Ar=_.useRef(null),[Zx,ev]=X.split("-"),Gd=_.useMemo(()=>m.reduce((V,te,ae)=>ae>=$s?V:V+te.height,0),[m,$s]),Qd=qb(),tv=p.invert||f,Rl=it==="loading";Er.current=_.useMemo(()=>$s*O+Gd,[$s,Gd]),_.useEffect(()=>{Yn.current=Jd},[Jd]),_.useEffect(()=>{No(!0)},[]),_.useEffect(()=>{let V=Zn.current;if(V){let te=V.getBoundingClientRect().height;return Ws(te),w(ae=>[{toastId:p.id,height:te,position:p.position},...ae]),()=>w(ae=>ae.filter(vt=>vt.toastId!==p.id))}},[w,p.id]),_.useLayoutEffect(()=>{if(!Z)return;let V=Zn.current,te=V.style.height;V.style.height="auto";let ae=V.getBoundingClientRect().height;V.style.height=te,Ws(ae),w(vt=>vt.find(yt=>yt.toastId===p.id)?vt.map(yt=>yt.toastId===p.id?{...yt,height:ae}:yt):[{toastId:p.id,height:ae,position:p.position},...vt])},[Z,p.title,p.description,w,p.id]);let hn=_.useCallback(()=>{Qn(!0),Ao(Er.current),w(V=>V.filter(te=>te.toastId!==p.id)),setTimeout(()=>{S(p)},i0)},[p,S,w,Er]);_.useEffect(()=>{if(p.promise&&it==="loading"||p.duration===1/0||p.type==="loading")return;let V;return k||y||z&&Qd?(()=>{if(Kd.current<Il.current){let te=new Date().getTime()-Il.current;Yn.current=Yn.current-te}Kd.current=new Date().getTime()})():Yn.current!==1/0&&(Il.current=new Date().getTime(),V=setTimeout(()=>{var te;(te=p.onAutoClose)==null||te.call(p,p),hn()},Yn.current)),()=>clearTimeout(V)},[k,y,p,it,z,Qd,hn]),_.useEffect(()=>{p.delete&&hn()},[hn,p.delete]);function nv(){var V,te,ae;return L!=null&&L.loading?_.createElement("div",{className:bt(N==null?void 0:N.loader,(V=p==null?void 0:p.classNames)==null?void 0:V.loader,"sonner-loader"),"data-visible":it==="loading"},L.loading):F?_.createElement("div",{className:bt(N==null?void 0:N.loader,(te=p==null?void 0:p.classNames)==null?void 0:te.loader,"sonner-loader"),"data-visible":it==="loading"},F):_.createElement(zb,{className:bt(N==null?void 0:N.loader,(ae=p==null?void 0:p.classNames)==null?void 0:ae.loader),visible:it==="loading"})}return _.createElement("li",{tabIndex:0,ref:Zn,className:bt(M,Qx,N==null?void 0:N.toast,(e=p==null?void 0:p.classNames)==null?void 0:e.toast,N==null?void 0:N.default,N==null?void 0:N[it],(r=p==null?void 0:p.classNames)==null?void 0:r[it]),"data-sonner-toast":"","data-rich-colors":(o=p.richColors)!=null?o:C,"data-styled":!(p.jsx||p.unstyled||j),"data-mounted":Z,"data-promise":!!p.promise,"data-swiped":Bs,"data-removed":dn,"data-visible":Gx,"data-y-position":Zx,"data-x-position":ev,"data-index":x,"data-front":Kx,"data-swiping":un,"data-dismissible":Nr,"data-type":it,"data-invert":tv,"data-swipe-out":Eo,"data-swipe-direction":oe,"data-expanded":!!(k||P&&Z),style:{"--index":x,"--toasts-before":x,"--z-index":b.length-x,"--offset":`${dn?zs:Er.current}px`,"--initial-height":P?"auto":`${Al}px`,...R,...p.style},onDragEnd:()=>{Tr(!1),K(null),Ar.current=null},onPointerDown:V=>{Rl||!Nr||(Xn.current=new Date,Ao(Er.current),V.target.setPointerCapture(V.pointerId),V.target.tagName!=="BUTTON"&&(Tr(!0),Ar.current={x:V.clientX,y:V.clientY}))},onPointerUp:()=>{var V,te,ae,vt;if(Eo||!Nr)return;Ar.current=null;let yt=Number(((V=Zn.current)==null?void 0:V.style.getPropertyValue("--swipe-amount-x").replace("px",""))||0),pn=Number(((te=Zn.current)==null?void 0:te.style.getPropertyValue("--swipe-amount-y").replace("px",""))||0),er=new Date().getTime()-((ae=Xn.current)==null?void 0:ae.getTime()),jt=J==="x"?yt:pn,fn=Math.abs(jt)/er;if(Math.abs(jt)>=s0||fn>.11){Ao(Er.current),(vt=p.onDismiss)==null||vt.call(p,p),ye(J==="x"?yt>0?"right":"left":pn>0?"down":"up"),hn(),Fs(!0),Pr(!1);return}Tr(!1),K(null)},onPointerMove:V=>{var te,ae,vt,yt;if(!Ar.current||!Nr||((te=window.getSelection())==null?void 0:te.toString().length)>0)return;let pn=V.clientY-Ar.current.y,er=V.clientX-Ar.current.x,jt=(ae=t.swipeDirections)!=null?ae:l0(X);!J&&(Math.abs(er)>1||Math.abs(pn)>1)&&K(Math.abs(er)>Math.abs(pn)?"x":"y");let fn={x:0,y:0};J==="y"?(jt.includes("top")||jt.includes("bottom"))&&(jt.includes("top")&&pn<0||jt.includes("bottom")&&pn>0)&&(fn.y=pn):J==="x"&&(jt.includes("left")||jt.includes("right"))&&(jt.includes("left")&&er<0||jt.includes("right")&&er>0)&&(fn.x=er),(Math.abs(fn.x)>0||Math.abs(fn.y)>0)&&Pr(!0),(vt=Zn.current)==null||vt.style.setProperty("--swipe-amount-x",`${fn.x}px`),(yt=Zn.current)==null||yt.style.setProperty("--swipe-amount-y",`${fn.y}px`)}},Xx&&!p.jsx?_.createElement("button",{"aria-label":U,"data-disabled":Rl,"data-close-button":!0,onClick:Rl||!Nr?()=>{}:()=>{var V;hn(),(V=p.onDismiss)==null||V.call(p,p)},className:bt(N==null?void 0:N.closeButton,(s=p==null?void 0:p.classNames)==null?void 0:s.closeButton)},(i=L==null?void 0:L.close)!=null?i:Vb):null,p.jsx||v.isValidElement(p.title)?p.jsx?p.jsx:typeof p.title=="function"?p.title():p.title:_.createElement(_.Fragment,null,it||p.icon||p.promise?_.createElement("div",{"data-icon":"",className:bt(N==null?void 0:N.icon,(l=p==null?void 0:p.classNames)==null?void 0:l.icon)},p.promise||p.type==="loading"&&!p.icon?p.icon||nv():null,p.type!=="loading"?p.icon||(L==null?void 0:L[it])||Fb(it):null):null,_.createElement("div",{"data-content":"",className:bt(N==null?void 0:N.content,(a=p==null?void 0:p.classNames)==null?void 0:a.content)},_.createElement("div",{"data-title":"",className:bt(N==null?void 0:N.title,(c=p==null?void 0:p.classNames)==null?void 0:c.title)},typeof p.title=="function"?p.title():p.title),p.description?_.createElement("div",{"data-description":"",className:bt(B,Yx,N==null?void 0:N.description,(d=p==null?void 0:p.classNames)==null?void 0:d.description)},typeof p.description=="function"?p.description():p.description):null),v.isValidElement(p.cancel)?p.cancel:p.cancel&&ai(p.cancel)?_.createElement("button",{"data-button":!0,"data-cancel":!0,style:p.cancelButtonStyle||A,onClick:V=>{var te,ae;ai(p.cancel)&&Nr&&((ae=(te=p.cancel).onClick)==null||ae.call(te,V),hn())},className:bt(N==null?void 0:N.cancelButton,(u=p==null?void 0:p.classNames)==null?void 0:u.cancelButton)},p.cancel.label):null,v.isValidElement(p.action)?p.action:p.action&&ai(p.action)?_.createElement("button",{"data-button":!0,"data-action":!0,style:p.actionButtonStyle||H,onClick:V=>{var te,ae;ai(p.action)&&((ae=(te=p.action).onClick)==null||ae.call(te,V),!V.defaultPrevented&&hn())},className:bt(N==null?void 0:N.actionButton,(h=p==null?void 0:p.classNames)==null?void 0:h.actionButton)},p.action.label):null))};function kh(){if(typeof window>"u"||typeof document>"u")return"ltr";let t=document.documentElement.getAttribute("dir");return t==="auto"||!t?window.getComputedStyle(document.documentElement).direction:t}function c0(t,e){let r={};return[t,e].forEach((o,s)=>{let i=s===1,l=i?"--mobile-offset":"--offset",a=i?n0:t0;function c(d){["top","right","bottom","left"].forEach(u=>{r[`${l}-${u}`]=typeof d=="number"?`${d}px`:d})}typeof o=="number"||typeof o=="string"?c(o):typeof o=="object"?["top","right","bottom","left"].forEach(d=>{o[d]===void 0?r[`${l}-${d}`]=a:r[`${l}-${d}`]=typeof o[d]=="number"?`${o[d]}px`:o[d]}):c(a)}),r}var d0=v.forwardRef(function(t,e){let{invert:r,position:o="bottom-right",hotkey:s=["altKey","KeyT"],expand:i,closeButton:l,className:a,offset:c,mobileOffset:d,theme:u="light",richColors:h,duration:f,style:p,visibleToasts:j=e0,toastOptions:y,dir:w=kh(),gap:g=o0,loadingIcon:m,icons:x,containerAriaLabel:b="Notifications",pauseWhenPageIsHidden:k}=t,[S,C]=_.useState([]),E=_.useMemo(()=>Array.from(new Set([o].concat(S.filter(z=>z.position).map(z=>z.position)))),[S,o]),[R,A]=_.useState([]),[H,M]=_.useState(!1),[B,$]=_.useState(!1),[X,O]=_.useState(u!=="system"?u:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),F=_.useRef(null),P=s.join("+").replace(/Key/g,"").replace(/Digit/g,""),N=_.useRef(null),L=_.useRef(!1),U=_.useCallback(z=>{C(J=>{var K;return(K=J.find(oe=>oe.id===z.id))!=null&&K.delete||Ue.dismiss(z.id),J.filter(({id:oe})=>oe!==z.id)})},[]);return _.useEffect(()=>Ue.subscribe(z=>{if(z.dismiss){C(J=>J.map(K=>K.id===z.id?{...K,delete:!0}:K));return}setTimeout(()=>{Ej.flushSync(()=>{C(J=>{let K=J.findIndex(oe=>oe.id===z.id);return K!==-1?[...J.slice(0,K),{...J[K],...z},...J.slice(K+1)]:[z,...J]})})})}),[]),_.useEffect(()=>{if(u!=="system"){O(u);return}if(u==="system"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?O("dark"):O("light")),typeof window>"u")return;let z=window.matchMedia("(prefers-color-scheme: dark)");try{z.addEventListener("change",({matches:J})=>{O(J?"dark":"light")})}catch{z.addListener(({matches:K})=>{try{O(K?"dark":"light")}catch(oe){console.error(oe)}})}},[u]),_.useEffect(()=>{S.length<=1&&M(!1)},[S]),_.useEffect(()=>{let z=J=>{var K,oe;s.every(ye=>J[ye]||J.code===ye)&&(M(!0),(K=F.current)==null||K.focus()),J.code==="Escape"&&(document.activeElement===F.current||(oe=F.current)!=null&&oe.contains(document.activeElement))&&M(!1)};return document.addEventListener("keydown",z),()=>document.removeEventListener("keydown",z)},[s]),_.useEffect(()=>{if(F.current)return()=>{N.current&&(N.current.focus({preventScroll:!0}),N.current=null,L.current=!1)}},[F.current]),_.createElement("section",{ref:e,"aria-label":`${b} ${P}`,tabIndex:-1,"aria-live":"polite","aria-relevant":"additions text","aria-atomic":"false",suppressHydrationWarning:!0},E.map((z,J)=>{var K;let[oe,ye]=z.split("-");return S.length?_.createElement("ol",{key:z,dir:w==="auto"?kh():w,tabIndex:-1,ref:F,className:a,"data-sonner-toaster":!0,"data-theme":X,"data-y-position":oe,"data-lifted":H&&S.length>1&&!i,"data-x-position":ye,style:{"--front-toast-height":`${((K=R[0])==null?void 0:K.height)||0}px`,"--width":`${r0}px`,"--gap":`${g}px`,...p,...c0(c,d)},onBlur:Z=>{L.current&&!Z.currentTarget.contains(Z.relatedTarget)&&(L.current=!1,N.current&&(N.current.focus({preventScroll:!0}),N.current=null))},onFocus:Z=>{Z.target instanceof HTMLElement&&Z.target.dataset.dismissible==="false"||L.current||(L.current=!0,N.current=Z.relatedTarget)},onMouseEnter:()=>M(!0),onMouseMove:()=>M(!0),onMouseLeave:()=>{B||M(!1)},onDragEnd:()=>M(!1),onPointerDown:Z=>{Z.target instanceof HTMLElement&&Z.target.dataset.dismissible==="false"||$(!0)},onPointerUp:()=>$(!1)},S.filter(Z=>!Z.position&&J===0||Z.position===z).map((Z,No)=>{var dn,Qn;return _.createElement(a0,{key:Z.id,icons:x,index:No,toast:Z,defaultRichColors:h,duration:(dn=y==null?void 0:y.duration)!=null?dn:f,className:y==null?void 0:y.className,descriptionClassName:y==null?void 0:y.descriptionClassName,invert:r,visibleToasts:j,closeButton:(Qn=y==null?void 0:y.closeButton)!=null?Qn:l,interacting:B,position:z,style:y==null?void 0:y.style,unstyled:y==null?void 0:y.unstyled,classNames:y==null?void 0:y.classNames,cancelButtonStyle:y==null?void 0:y.cancelButtonStyle,actionButtonStyle:y==null?void 0:y.actionButtonStyle,removeToast:U,toasts:S.filter(un=>un.position==Z.position),heights:R.filter(un=>un.position==Z.position),setHeights:A,expandByDefault:i,gap:g,loadingIcon:m,expanded:H,pauseWhenPageIsHidden:k,swipeDirections:t.swipeDirections})})):null}))});const u0=({...t})=>{const{theme:e="system"}=Db();return n.jsx(d0,{theme:e,className:"toaster group",toastOptions:{classNames:{toast:"group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",description:"group-[.toast]:text-muted-foreground",actionButton:"group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",cancelButton:"group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"}},...t})},h0=["top","right","bottom","left"],Hn=Math.min,Xt=Math.max,Zi=Math.round,ci=Math.floor,Zt=t=>({x:t,y:t}),p0={left:"right",right:"left",bottom:"top",top:"bottom"};function Yg(t,e,r){return Xt(t,Hn(e,r))}function ln(t,e){return typeof t=="function"?t(e):t}function Un(t){return t.split("-")[0]}function Co(t){return t.split("-")[1]}function _d(t){return t==="x"?"y":"x"}function Od(t){return t==="y"?"height":"width"}function Bt(t){const e=t[0];return e==="t"||e==="b"?"y":"x"}function Ld(t){return _d(Bt(t))}function f0(t,e,r){r===void 0&&(r=!1);const o=Co(t),s=Ld(t),i=Od(s);let l=s==="x"?o===(r?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[i]>e.floating[i]&&(l=el(l)),[l,el(l)]}function m0(t){const e=el(t);return[yc(t),e,yc(e)]}function yc(t){return t.includes("start")?t.replace("start","end"):t.replace("end","start")}const Sh=["left","right"],Ch=["right","left"],g0=["top","bottom"],x0=["bottom","top"];function v0(t,e,r){switch(t){case"top":case"bottom":return r?e?Ch:Sh:e?Sh:Ch;case"left":case"right":return e?g0:x0;default:return[]}}function y0(t,e,r,o){const s=Co(t);let i=v0(Un(t),r==="start",o);return s&&(i=i.map(l=>l+"-"+s),e&&(i=i.concat(i.map(yc)))),i}function el(t){const e=Un(t);return p0[e]+t.slice(e.length)}function j0(t){var e,r,o,s;return{top:(e=t.top)!=null?e:0,right:(r=t.right)!=null?r:0,bottom:(o=t.bottom)!=null?o:0,left:(s=t.left)!=null?s:0}}function Xg(t){return typeof t!="number"?j0(t):{top:t,right:t,bottom:t,left:t}}function tl(t){const{x:e,y:r,width:o,height:s}=t;return{width:o,height:s,top:r,left:e,right:e+o,bottom:r+s,x:e,y:r}}function Th(t,e,r){let{reference:o,floating:s}=t;const i=Bt(e),l=Ld(e),a=Od(l),c=Un(e),d=i==="y",u=o.x+o.width/2-s.width/2,h=o.y+o.height/2-s.height/2,f=o[a]/2-s[a]/2;let p;switch(c){case"top":p={x:u,y:o.y-s.height};break;case"bottom":p={x:u,y:o.y+o.height};break;case"right":p={x:o.x+o.width,y:h};break;case"left":p={x:o.x-s.width,y:h};break;default:p={x:o.x,y:o.y}}const j=Co(e);return j&&(p[l]+=f*(j==="end"?1:-1)*(r&&d?-1:1)),p}async function w0(t,e){var r;e===void 0&&(e={});const{x:o,y:s,platform:i,rects:l,elements:a,strategy:c}=t,{boundary:d="clippingAncestors",rootBoundary:u="viewport",elementContext:h="floating",altBoundary:f=!1,padding:p=0}=ln(e,t),j=Xg(p),w=a[f?h==="floating"?"reference":"floating":h],g=tl(await i.getClippingRect({element:(r=await(i.isElement==null?void 0:i.isElement(w)))==null||r?w:w.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(a.floating)),boundary:d,rootBoundary:u,strategy:c})),m=h==="floating"?{x:o,y:s,width:l.floating.width,height:l.floating.height}:l.reference,x=await(i.getOffsetParent==null?void 0:i.getOffsetParent(a.floating)),b=await(i.isElement==null?void 0:i.isElement(x))&&await(i.getScale==null?void 0:i.getScale(x))||{x:1,y:1},k=tl(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:m,offsetParent:x,strategy:c}):m);return{top:(g.top-k.top+j.top)/b.y,bottom:(k.bottom-g.bottom+j.bottom)/b.y,left:(g.left-k.left+j.left)/b.x,right:(k.right-g.right+j.right)/b.x}}const b0=50,k0=async(t,e,r)=>{const{placement:o="bottom",strategy:s="absolute",middleware:i=[],platform:l}=r,a=l.detectOverflow?l:{...l,detectOverflow:w0},c=await(l.isRTL==null?void 0:l.isRTL(e));let d=await l.getElementRects({reference:t,floating:e,strategy:s}),{x:u,y:h}=Th(d,o,c),f=o,p=0;const j={};for(let y=0;y<i.length;y++){const w=i[y];if(!w)continue;const{name:g,fn:m}=w,{x,y:b,data:k,reset:S}=await m({x:u,y:h,initialPlacement:o,placement:f,strategy:s,middlewareData:j,rects:d,platform:a,elements:{reference:t,floating:e}});u=x??u,h=b??h,j[g]={...j[g],...k},S&&p<b0&&(p++,typeof S=="object"&&(S.placement&&(f=S.placement),S.rects&&(d=S.rects===!0?await l.getElementRects({reference:t,floating:e,strategy:s}):S.rects),{x:u,y:h}=Th(d,f,c)),y=-1)}return{x:u,y:h,placement:f,strategy:s,middlewareData:j}},S0=t=>({name:"arrow",options:t,async fn(e){const{x:r,y:o,placement:s,rects:i,platform:l,elements:a,middlewareData:c}=e,{element:d,padding:u=0}=ln(t,e)||{};if(d==null)return{};const h=Xg(u),f={x:r,y:o},p=Ld(s),j=Od(p),y=await l.getDimensions(d),w=p==="y",g=w?"top":"left",m=w?"bottom":"right",x=w?"clientHeight":"clientWidth",b=i.reference[j]+i.reference[p]-f[p]-i.floating[j],k=f[p]-i.reference[p],S=await(l.getOffsetParent==null?void 0:l.getOffsetParent(d));let C=S?S[x]:0;(!C||!await(l.isElement==null?void 0:l.isElement(S)))&&(C=a.floating[x]||i.floating[j]);const E=b/2-k/2,R=C/2-y[j]/2-1,A=Hn(h[g],R),H=Hn(h[m],R),M=C-y[j]-H,B=C/2-y[j]/2+E,$=Yg(A,B,M),X=!c.arrow&&Co(s)!=null&&B!==$&&i.reference[j]/2-(B<A?A:H)-y[j]/2<0,O=X?B<A?B-A:B-M:0;return{[p]:f[p]+O,data:{[p]:$,centerOffset:B-$-O,...X&&{alignmentOffset:O}},reset:X}}}),C0=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var r,o;const{placement:s,middlewareData:i,rects:l,initialPlacement:a,platform:c,elements:d}=e,{mainAxis:u=!0,crossAxis:h=!0,fallbackPlacements:f,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:j="none",flipAlignment:y=!0,...w}=ln(t,e);if((r=i.arrow)!=null&&r.alignmentOffset)return{};const g=Un(s),m=Bt(a),x=Un(a)===a,b=await(c.isRTL==null?void 0:c.isRTL(d.floating)),k=f||(x||!y?[el(a)]:m0(a)),S=j!=="none";!f&&S&&k.push(...y0(a,y,j,b));const C=[a,...k],E=await c.detectOverflow(e,w),R=[];let A=((o=i.flip)==null?void 0:o.overflows)||[];if(u&&R.push(E[g]),h){const $=f0(s,l,b);R.push(E[$[0]],E[$[1]])}if(A=[...A,{placement:s,overflows:R}],!R.every($=>$<=0)){var H,M;const $=(((H=i.flip)==null?void 0:H.index)||0)+1,X=C[$];if(X&&(!(h==="alignment"?m!==Bt(X):!1)||A.every(P=>Bt(P.placement)===m?P.overflows[0]>0:!0)))return{data:{index:$,overflows:A},reset:{placement:X}};let O=(M=A.filter(F=>F.overflows[0]<=0).sort((F,P)=>F.overflows[1]-P.overflows[1])[0])==null?void 0:M.placement;if(!O)switch(p){case"bestFit":{var B;const F=(B=A.filter(P=>{if(S){const N=Bt(P.placement);return N===m||N==="y"}return!0}).map(P=>[P.placement,P.overflows.filter(N=>N>0).reduce((N,L)=>N+L,0)]).sort((P,N)=>P[1]-N[1])[0])==null?void 0:B[0];F&&(O=F);break}case"initialPlacement":O=a;break}if(s!==O)return{reset:{placement:O}}}return{}}}};function Ph(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function Nh(t){return h0.some(e=>t[e]>=0)}const T0=function(t){return t===void 0&&(t={}),{name:"hide",options:t,async fn(e){const{rects:r,platform:o}=e,{strategy:s="referenceHidden",...i}=ln(t,e);switch(s){case"referenceHidden":{const l=await o.detectOverflow(e,{...i,elementContext:"reference"}),a=Ph(l,r.reference);return{data:{referenceHiddenOffsets:a,referenceHidden:Nh(a)}}}case"escaped":{const l=await o.detectOverflow(e,{...i,altBoundary:!0}),a=Ph(l,r.floating);return{data:{escapedOffsets:a,escaped:Nh(a)}}}default:return{}}}}},Zg=new Set(["left","top"]);async function P0(t,e){const{placement:r,platform:o,elements:s}=t,i=await(o.isRTL==null?void 0:o.isRTL(s.floating)),l=Un(r),a=Co(r),c=Bt(r)==="y",d=Zg.has(l)?-1:1,u=i&&c?-1:1,h=ln(e,t);let{mainAxis:f,crossAxis:p,alignmentAxis:j}=typeof h=="number"?{mainAxis:h,crossAxis:0,alignmentAxis:null}:{mainAxis:h.mainAxis||0,crossAxis:h.crossAxis||0,alignmentAxis:h.alignmentAxis};return a&&typeof j=="number"&&(p=a==="end"?j*-1:j),c?{x:p*u,y:f*d}:{x:f*d,y:p*u}}const N0=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var r,o;const{x:s,y:i,placement:l,middlewareData:a}=e,c=await P0(e,t);return l===((r=a.offset)==null?void 0:r.placement)&&(o=a.arrow)!=null&&o.alignmentOffset?{}:{x:s+c.x,y:i+c.y,data:{...c,placement:l}}}}},E0=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:r,y:o,placement:s,platform:i}=e,{mainAxis:l=!0,crossAxis:a=!1,limiter:c={fn:m=>{let{x,y:b}=m;return{x,y:b}}},...d}=ln(t,e),u={x:r,y:o},h=await i.detectOverflow(e,d),f=Bt(s),p=_d(f);let j=u[p],y=u[f];const w=(m,x)=>Yg(x+h[m==="y"?"top":"left"],x,x-h[m==="y"?"bottom":"right"]);l&&(j=w(p,j)),a&&(y=w(f,y));const g=c.fn({...e,[p]:j,[f]:y});return{...g,data:{x:g.x-r,y:g.y-o,enabled:{[p]:l,[f]:a}}}}}},A0=function(t){return t===void 0&&(t={}),{options:t,fn(e){var r,o;const{x:s,y:i,placement:l,rects:a,middlewareData:c}=e,{offset:d=0,mainAxis:u=!0,crossAxis:h=!0}=ln(t,e),f={x:s,y:i},p=Bt(l),j=_d(p);let y=f[j],w=f[p];const g=ln(d,e),m=typeof g=="number"?{mainAxis:g,crossAxis:0}:{mainAxis:(r=g.mainAxis)!=null?r:0,crossAxis:(o=g.crossAxis)!=null?o:0};if(u){const k=j==="y"?"height":"width",S=a.reference[j]-a.floating[k]+m.mainAxis,C=a.reference[j]+a.reference[k]-m.mainAxis;y<S?y=S:y>C&&(y=C)}if(h){var x,b;const k=j==="y"?"width":"height",S=Zg.has(Un(l)),C=a.reference[p]-a.floating[k]+(S&&((x=c.offset)==null?void 0:x[p])||0)+(S?0:m.crossAxis),E=a.reference[p]+a.reference[k]+(S?0:((b=c.offset)==null?void 0:b[p])||0)-(S?m.crossAxis:0);w<C?w=C:w>E&&(w=E)}return{[j]:y,[p]:w}}}},I0=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){const{placement:r,rects:o,platform:s,elements:i}=e,{apply:l=()=>{},...a}=ln(t,e),c=await s.detectOverflow(e,a),d=Un(r),u=Co(r),h=Bt(r)==="y",{width:f,height:p}=o.floating;let j,y;d==="top"||d==="bottom"?(j=d,y=u===(await(s.isRTL==null?void 0:s.isRTL(i.floating))?"start":"end")?"left":"right"):(y=d,j=u==="end"?"top":"bottom");const w=p-c.top-c.bottom,g=f-c.left-c.right,m=Hn(p-c[j],w),x=Hn(f-c[y],g),b=e.middlewareData.shift,k=!b;let S=m,C=x;b!=null&&b.enabled.x&&(C=g),b!=null&&b.enabled.y&&(S=w),k&&!u&&(h?C=f-2*Xt(c.left,c.right):S=p-2*Xt(c.top,c.bottom)),await l({...e,availableWidth:C,availableHeight:S});const E=await s.getDimensions(i.floating);return f!==E.width||p!==E.height?{reset:{rects:!0}}:{}}}};function kl(){return typeof window<"u"}function To(t){return ex(t)?(t.nodeName||"").toLowerCase():"#document"}function Ye(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function cn(t){var e;return(e=(ex(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function ex(t){return kl()?t instanceof Node||t instanceof Ye(t).Node:!1}function $t(t){return kl()?t instanceof Element||t instanceof Ye(t).Element:!1}function Kn(t){return kl()?t instanceof HTMLElement||t instanceof Ye(t).HTMLElement:!1}function Eh(t){return!kl()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof Ye(t).ShadowRoot}function Sl(t){const{overflow:e,overflowX:r,overflowY:o,display:s}=Ht(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+r)&&s!=="inline"&&s!=="contents"}function R0(t){return/^(table|td|th)$/.test(To(t))}function Cl(t){try{if(t.matches(":popover-open"))return!0}catch{}try{return t.matches(":modal")}catch{return!1}}const M0=/transform|translate|scale|rotate|perspective|filter/,_0=/paint|layout|strict|content/,tr=t=>!!t&&t!=="none";let da;function Dd(t){const e=$t(t)?Ht(t):t;return tr(e.transform)||tr(e.translate)||tr(e.scale)||tr(e.rotate)||tr(e.perspective)||!Fd()&&(tr(e.backdropFilter)||tr(e.filter))||M0.test(e.willChange||"")||_0.test(e.contain||"")}function O0(t){let e=wr(t);for(;Kn(e)&&!js(e);){if(Dd(e))return e;if(Cl(e))return null;e=wr(e)}return null}function Fd(){return da==null&&(da=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),da}function js(t){return/^(html|body|#document)$/.test(To(t))}function Ht(t){return Ye(t).getComputedStyle(t)}function Tl(t){return $t(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function wr(t){if(To(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Eh(t)&&t.host||cn(t);return Eh(e)?e.host:e}function tx(t){const e=wr(t);return js(e)?(t.ownerDocument||t).body:Kn(e)&&Sl(e)?e:tx(e)}function ws(t,e,r){var o;e===void 0&&(e=[]),r===void 0&&(r=!0);const s=tx(t),i=s===((o=t.ownerDocument)==null?void 0:o.body),l=Ye(s);if(i){const a=jc(l);return e.concat(l,l.visualViewport||[],Sl(s)?s:[],a&&r?ws(a):[])}else return e.concat(s,ws(s,[],r))}function jc(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function nx(t){const e=Ht(t);let r=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const s=Kn(t),i=s?t.offsetWidth:r,l=s?t.offsetHeight:o,a=Zi(r)!==i||Zi(o)!==l;return a&&(r=i,o=l),{width:r,height:o,$:a}}function Bd(t){return $t(t)?t:t.contextElement}function Xr(t){const e=Bd(t);if(!Kn(e))return Zt(1);const r=e.getBoundingClientRect(),{width:o,height:s,$:i}=nx(e);let l=(i?Zi(r.width):r.width)/o,a=(i?Zi(r.height):r.height)/s;return(!l||!Number.isFinite(l))&&(l=1),(!a||!Number.isFinite(a))&&(a=1),{x:l,y:a}}const L0=Zt(0);function rx(t){const e=Ye(t);return!Fd()||!e.visualViewport?L0:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function D0(t,e,r){return e===void 0&&(e=!1),!!r&&e&&r===Ye(t)}function br(t,e,r,o){e===void 0&&(e=!1),r===void 0&&(r=!1);const s=t.getBoundingClientRect(),i=Bd(t);let l=Zt(1);e&&(o?$t(o)&&(l=Xr(o)):l=Xr(t));const a=D0(i,r,o)?rx(i):Zt(0);let c=(s.left+a.x)/l.x,d=(s.top+a.y)/l.y,u=s.width/l.x,h=s.height/l.y;if(i&&o){const f=Ye(i),p=$t(o)?Ye(o):o;let j=f,y=jc(j);for(;y&&p!==j;){const w=Xr(y),g=y.getBoundingClientRect(),m=Ht(y),x=g.left+(y.clientLeft+parseFloat(m.paddingLeft))*w.x,b=g.top+(y.clientTop+parseFloat(m.paddingTop))*w.y;c*=w.x,d*=w.y,u*=w.x,h*=w.y,c+=x,d+=b,j=Ye(y),y=jc(j)}}return tl({width:u,height:h,x:c,y:d})}function Pl(t,e){const r=Tl(t).scrollLeft;return e?e.left+r:br(cn(t)).left+r}function ox(t,e){const r=t.getBoundingClientRect(),o=r.left+e.scrollLeft-Pl(t,r),s=r.top+e.scrollTop;return{x:o,y:s}}function F0(t){let{elements:e,rect:r,offsetParent:o,strategy:s}=t;const i=s==="fixed",l=cn(o),a=e?Cl(e.floating):!1;if(o===l||a&&i)return r;let c={scrollLeft:0,scrollTop:0},d=Zt(1);const u=Zt(0),h=Kn(o);if((h||!i)&&((To(o)!=="body"||Sl(l))&&(c=Tl(o)),h)){const p=br(o);d=Xr(o),u.x=p.x+o.clientLeft,u.y=p.y+o.clientTop}const f=l&&!h&&!i?ox(l,c):Zt(0);return{width:r.width*d.x,height:r.height*d.y,x:r.x*d.x-c.scrollLeft*d.x+u.x+f.x,y:r.y*d.y-c.scrollTop*d.y+u.y+f.y}}function B0(t){return t.getClientRects?Array.from(t.getClientRects()):[]}function z0(t){const e=Tl(t),r=t.ownerDocument.body,o=Xt(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),s=Xt(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let i=-e.scrollLeft+Pl(t);const l=-e.scrollTop;return Ht(r).direction==="rtl"&&(i+=Xt(t.clientWidth,r.clientWidth)-o),{width:o,height:s,x:i,y:l}}const W0=25;function $0(t,e,r){r===void 0&&(r="viewport");const o=r==="layoutViewport",s=Ye(t),i=cn(t),l=s.visualViewport;let a=i.clientWidth,c=i.clientHeight,d=0,u=0;if(l){const f=!Fd()||e==="fixed";o?f||(d=-l.offsetLeft,u=-l.offsetTop):(a=l.width,c=l.height,f&&(d=l.offsetLeft,u=l.offsetTop))}if(Pl(i)<=0){const f=i.ownerDocument,p=f.body,j=getComputedStyle(p),y=f.compatMode==="CSS1Compat"&&parseFloat(j.marginLeft)+parseFloat(j.marginRight)||0,w=Math.abs(i.clientWidth-p.clientWidth-y),g=getComputedStyle(i).scrollbarGutter==="stable both-edges"?w/2:w;g<=W0&&(a-=g)}return{width:a,height:c,x:d,y:u}}function H0(t,e){const r=br(t,!0,e==="fixed"),o=r.top+t.clientTop,s=r.left+t.clientLeft,i=Xr(t),l=t.clientWidth*i.x,a=t.clientHeight*i.y,c=s*i.x,d=o*i.y;return{width:l,height:a,x:c,y:d}}function Ah(t,e,r){let o;if(e==="viewport"||e==="layoutViewport")o=$0(t,r,e);else if(e==="document")o=z0(cn(t));else if($t(e))o=H0(e,r);else{const s=rx(t);o={x:e.x-s.x,y:e.y-s.y,width:e.width,height:e.height}}return tl(o)}function U0(t,e){const r=e.get(t);if(r)return r;let o=ws(t,[],!1).filter(a=>$t(a)&&To(a)!=="body"),s=null;const i=Ht(t).position==="fixed";let l=i?wr(t):t;for(;$t(l)&&!js(l);){const a=Ht(l),c=Dd(l),d=s?s.position:i?"fixed":"";!c&&(d==="fixed"||d==="absolute"&&a.position==="static")?o=o.filter(h=>h!==l):s=a,l=wr(l)}return e.set(t,o),o}function V0(t){let{element:e,boundary:r,rootBoundary:o,strategy:s}=t;const l=[...r==="clippingAncestors"?Cl(e)?[]:U0(e,this._c):[].concat(r),o],a=Ah(e,l[0],s);let c=a.top,d=a.right,u=a.bottom,h=a.left;for(let f=1;f<l.length;f++){const p=Ah(e,l[f],s);c=Xt(p.top,c),d=Hn(p.right,d),u=Hn(p.bottom,u),h=Xt(p.left,h)}return{width:d-h,height:u-c,x:h,y:c}}function q0(t){const{width:e,height:r}=nx(t);return{width:e,height:r}}function J0(t,e,r){const o=Kn(e),s=cn(e),i=r==="fixed",l=br(t,!0,i,e);let a={scrollLeft:0,scrollTop:0};const c=Zt(0);if((o||!i)&&((To(e)!=="body"||Sl(s))&&(a=Tl(e)),o)){const f=br(e,!0,i,e);c.x=f.x+e.clientLeft,c.y=f.y+e.clientTop}!o&&s&&(c.x=Pl(s));const d=s&&!o&&!i?ox(s,a):Zt(0),u=l.left+a.scrollLeft-c.x-d.x,h=l.top+a.scrollTop-c.y-d.y;return{x:u,y:h,width:l.width,height:l.height}}function ua(t){return Ht(t).position==="static"}function Ih(t,e){if(!Kn(t)||Ht(t).position==="fixed")return null;if(e)return e(t);let r=t.offsetParent;return cn(t)===r&&(r=r.ownerDocument.body),r}function sx(t,e){const r=Ye(t);if(Cl(t))return r;if(!Kn(t)){let s=wr(t);for(;s&&!js(s);){if($t(s)&&!ua(s))return s;s=wr(s)}return r}let o=Ih(t,e);for(;o&&R0(o)&&ua(o);)o=Ih(o,e);return o&&js(o)&&ua(o)&&!Dd(o)?r:o||O0(t)||r}const K0=async function(t){const e=this.getOffsetParent||sx,r=this.getDimensions,o=await r(t.floating);return{reference:J0(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function G0(t){return Ht(t).direction==="rtl"}const Q0={convertOffsetParentRelativeRectToViewportRelativeRect:F0,getDocumentElement:cn,getClippingRect:V0,getOffsetParent:sx,getElementRects:K0,getClientRects:B0,getDimensions:q0,getScale:Xr,isElement:$t,isRTL:G0};function ix(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function Y0(t,e,r){let o=null,s;const i=cn(t);function l(){var u;clearTimeout(s),(u=o)==null||u.disconnect(),o=null}function a(u,h){u===void 0&&(u=!1),h===void 0&&(h=1),l();const f=t.getBoundingClientRect(),{left:p,top:j,width:y,height:w}=f;if(u||e(),!y||!w)return;const g=ci(j),m=ci(i.clientWidth-(p+y)),x=ci(i.clientHeight-(j+w)),b=ci(p),S={rootMargin:-g+"px "+-m+"px "+-x+"px "+-b+"px",threshold:Xt(0,Hn(1,h))||1};let C=!0;function E(R){const A=R[0].intersectionRatio;if(!ix(f,t.getBoundingClientRect()))return a();if(A!==h){if(!C)return a();A?a(!1,A):s=setTimeout(()=>{a(!1,1e-7)},1e3)}C=!1}try{o=new IntersectionObserver(E,{...S,root:i.ownerDocument})}catch{o=new IntersectionObserver(E,S)}o.observe(t)}const c=Ye(t),d=()=>a(r);return c.addEventListener("resize",d),a(!0),()=>{c.removeEventListener("resize",d),l()}}function X0(t,e,r,o){o===void 0&&(o={});const{ancestorScroll:s=!0,ancestorResize:i=!0,elementResize:l=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:c=!1}=o,d=Bd(t),u=s||i?[...d?ws(d):[],...e?ws(e):[]]:[];u.forEach(g=>{s&&g.addEventListener("scroll",r),i&&g.addEventListener("resize",r)});const h=d&&a?Y0(d,r,i):null;let f=-1,p=null;l&&(p=new ResizeObserver(g=>{let[m]=g;m&&m.target===d&&p&&e&&(p.unobserve(e),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var x;(x=p)==null||x.observe(e)})),r()}),d&&!c&&p.observe(d),e&&p.observe(e));let j,y=c?br(t):null;c&&w();function w(){const g=br(t);y&&!ix(y,g)&&r(),y=g,j=requestAnimationFrame(w)}return r(),()=>{var g;u.forEach(m=>{s&&m.removeEventListener("scroll",r),i&&m.removeEventListener("resize",r)}),h==null||h(),(g=p)==null||g.disconnect(),p=null,c&&cancelAnimationFrame(j)}}const Z0=N0,ek=E0,tk=C0,nk=I0,rk=T0,Rh=S0,ok=A0,sk=(t,e,r)=>{const o=new Map,s=r??{},i={...Q0,...s.platform,_c:o};return k0(t,e,{...s,platform:i})};var ik=typeof document<"u",lk=function(){},Pi=ik?v.useLayoutEffect:lk;function nl(t,e){if(t===e)return!0;if(typeof t!=typeof e)return!1;if(typeof t=="function"&&t.toString()===e.toString())return!0;let r,o,s;if(t&&e&&typeof t=="object"){if(Array.isArray(t)){if(r=t.length,r!==e.length)return!1;for(o=r;o--!==0;)if(!nl(t[o],e[o]))return!1;return!0}if(s=Object.keys(t),r=s.length,r!==Object.keys(e).length)return!1;for(o=r;o--!==0;)if(!{}.hasOwnProperty.call(e,s[o]))return!1;for(o=r;o--!==0;){const i=s[o];if(!(i==="_owner"&&t.$$typeof)&&!nl(t[i],e[i]))return!1}return!0}return t!==t&&e!==e}function lx(t){return typeof window>"u"?1:(t.ownerDocument.defaultView||window).devicePixelRatio||1}function Mh(t,e){const r=lx(t);return Math.round(e*r)/r}function ha(t){const e=v.useRef(t);return Pi(()=>{e.current=t}),e}function ak(t){t===void 0&&(t={});const{placement:e="bottom",strategy:r="absolute",middleware:o=[],platform:s,elements:{reference:i,floating:l}={},transform:a=!0,whileElementsMounted:c,open:d}=t,[u,h]=v.useState({x:0,y:0,strategy:r,placement:e,middlewareData:{},isPositioned:!1}),[f,p]=v.useState(o);nl(f,o)||p(o);const[j,y]=v.useState(null),[w,g]=v.useState(null),m=v.useCallback(P=>{P!==S.current&&(S.current=P,y(P))},[]),x=v.useCallback(P=>{P!==C.current&&(C.current=P,g(P))},[]),b=i||j,k=l||w,S=v.useRef(null),C=v.useRef(null),E=v.useRef(u),R=c!=null,A=ha(c),H=ha(s),M=ha(d),B=v.useCallback(()=>{if(!S.current||!C.current)return;const P={placement:e,strategy:r,middleware:f};H.current&&(P.platform=H.current),sk(S.current,C.current,P).then(N=>{const L={...N,isPositioned:M.current!==!1};$.current&&!nl(E.current,L)&&(E.current=L,wo.flushSync(()=>{h(L)}))})},[f,e,r,H,M]);Pi(()=>{d===!1&&E.current.isPositioned&&(E.current.isPositioned=!1,h(P=>({...P,isPositioned:!1})))},[d]);const $=v.useRef(!1);Pi(()=>($.current=!0,()=>{$.current=!1}),[]),Pi(()=>{if(b&&(S.current=b),k&&(C.current=k),b&&k){if(A.current)return A.current(b,k,B);B()}},[b,k,B,A,R]);const X=v.useMemo(()=>({reference:S,floating:C,setReference:m,setFloating:x}),[m,x]),O=v.useMemo(()=>({reference:b,floating:k}),[b,k]),F=v.useMemo(()=>{const P={position:r,left:0,top:0};if(!O.floating)return P;const N=Mh(O.floating,u.x),L=Mh(O.floating,u.y);return a?{...P,transform:"translate("+N+"px, "+L+"px)",...lx(O.floating)>=1.5&&{willChange:"transform"}}:{position:r,left:N,top:L}},[r,a,O.floating,u.x,u.y]);return v.useMemo(()=>({...u,update:B,refs:X,elements:O,floatingStyles:F}),[u,B,X,O,F])}const ck=t=>{function e(r){return{}.hasOwnProperty.call(r,"current")}return{name:"arrow",options:t,fn(r){const{element:o,padding:s}=typeof t=="function"?t(r):t;return o&&e(o)?o.current!=null?Rh({element:o.current,padding:s}).fn(r):{}:o?Rh({element:o,padding:s}).fn(r):{}}}},dk=(t,e)=>{const r=Z0(t);return{name:r.name,fn:r.fn,options:[t,e]}},uk=(t,e)=>{const r=ek(t);return{name:r.name,fn:r.fn,options:[t,e]}},hk=(t,e)=>({fn:ok(t).fn,options:[t,e]}),pk=(t,e)=>{const r=tk(t);return{name:r.name,fn:r.fn,options:[t,e]}},fk=(t,e)=>{const r=nk(t);return{name:r.name,fn:r.fn,options:[t,e]}},mk=(t,e)=>{const r=rk(t);return{name:r.name,fn:r.fn,options:[t,e]}},gk=(t,e)=>{const r=ck(t);return{name:r.name,fn:r.fn,options:[t,e]}};var xk=Object.defineProperty,vk=(t,e)=>xk(t,"name",{value:e,configurable:!0});function ax(t){const[e,r]=v.useState(void 0);return At(()=>{if(t){r({width:t.offsetWidth,height:t.offsetHeight});let o=0;const s=new ResizeObserver(i=>{if(!Array.isArray(i)||!i.length)return;const l=i[0];window.cancelAnimationFrame(o),o=window.requestAnimationFrame(()=>{let a,c;if("borderBoxSize"in l){const d=l.borderBoxSize,u=Array.isArray(d)?d[0]:d;a=u.inlineSize,c=u.blockSize}else a=t.offsetWidth,c=t.offsetHeight;r({width:a,height:c})})});return s.observe(t,{box:"border-box"}),()=>{window.cancelAnimationFrame(o),s.unobserve(t)}}else r(void 0)},[t]),e}vk(ax,"useSize");var yk=Object.defineProperty,Zr=(t,e)=>yk(t,"name",{value:e,configurable:!0}),_h={Partial:"partial"},Oh={Optimized:"optimized",Always:"always"},cx="Popper",[dx,ux]=ko(cx),[EC,jk]=dx(cx),hx="PopperContent",[wk,AC]=dx(hx),bk=v.forwardRef(Zr(function(e,r){var dn,Qn,un,Tr,Eo,Fs,Bs;const{__scopePopper:o,side:s="bottom",sideOffset:i=0,align:l="center",alignOffset:a=0,arrowPadding:c=0,avoidCollisions:d=!0,collisionBoundary:u=[],collisionPadding:h=0,sticky:f=_h.Partial,hideWhenDetached:p=!1,updatePositionStrategy:j=Oh.Optimized,onPlaced:y,...w}=e,g=jk(hx,o),[m,x]=v.useState(null),b=nt(r,x),[k,S]=v.useState(null),C=ax(k),E=(C==null?void 0:C.width)??0,R=(C==null?void 0:C.height)??0,A=s+(l!=="center"?"-"+l:""),H=typeof h=="number"?h:{top:0,right:0,bottom:0,left:0,...h},M=Array.isArray(u)?u:[u],B=M.length>0,$={padding:H,boundary:M.filter(px),altBoundary:B},{refs:X,floatingStyles:O,placement:F,isPositioned:P,middlewareData:N}=ak({strategy:"fixed",placement:A,whileElementsMounted:Zr((...Pr)=>X0(...Pr,{animationFrame:j===Oh.Always}),"whileElementsMounted"),elements:{reference:g.anchor},middleware:[dk({mainAxis:i+R,alignmentAxis:a}),d&&uk({mainAxis:!0,crossAxis:!1,limiter:f===_h.Partial?hk():void 0,...$}),d&&pk({...$}),fk({...$,apply:Zr(({elements:Pr,rects:zs,availableWidth:Ao,availableHeight:Al})=>{const{width:Ws,height:Yn}=zs.reference,Xn=Pr.floating.style;Xn.setProperty("--radix-popper-available-width",`${Ao}px`),Xn.setProperty("--radix-popper-available-height",`${Al}px`),Xn.setProperty("--radix-popper-anchor-width",`${Ws}px`),Xn.setProperty("--radix-popper-anchor-height",`${Yn}px`)},"apply")}),k&&gk({element:k,padding:c}),kk({arrowWidth:E,arrowHeight:R}),p&&mk({strategy:"referenceHidden",...$,boundary:B?$.boundary:void 0})]}),L=g.setPlacementState;At(()=>(L(F),()=>{L(void 0)}),[F,L]);const[U,z]=zd(F),J=on(y);At(()=>{P&&(J==null||J())},[P,J]);const K=(dn=N.arrow)==null?void 0:dn.x,oe=(Qn=N.arrow)==null?void 0:Qn.y,ye=((un=N.arrow)==null?void 0:un.centerOffset)!==0,[Z,No]=v.useState();return At(()=>{m&&No(window.getComputedStyle(m).zIndex)},[m]),n.jsx("div",{ref:X.setFloating,"data-radix-popper-content-wrapper":"",style:{...O,transform:P?O.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:Z,"--radix-popper-transform-origin":[(Tr=N.transformOrigin)==null?void 0:Tr.x,(Eo=N.transformOrigin)==null?void 0:Eo.y].join(" "),...((Fs=N.hide)==null?void 0:Fs.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:e.dir,children:n.jsx(wk,{scope:o,placedSide:U,placedAlign:z,onArrowChange:S,arrowX:K,arrowY:oe,shouldHideArrow:ye,children:n.jsx(Rt.div,{"data-side":U,"data-align":z,...w,ref:b,style:{...w.style,animation:P?(Bs=w.style)==null?void 0:Bs.animation:"none"}})})})},"PopperContent"));function px(t){return t!==null}Zr(px,"isNotNull");var kk=Zr(t=>({name:"transformOrigin",options:t,fn(e){var w,g,m;const{placement:r,rects:o,middlewareData:s}=e,l=((w=s.arrow)==null?void 0:w.centerOffset)!==0,a=l?0:t.arrowWidth,c=l?0:t.arrowHeight,[d,u]=zd(r),h={start:"0%",center:"50%",end:"100%"}[u],f=(((g=s.arrow)==null?void 0:g.x)??0)+a/2,p=(((m=s.arrow)==null?void 0:m.y)??0)+c/2;let j="",y="";return d==="bottom"?(j=l?h:`${f}px`,y=`${-c}px`):d==="top"?(j=l?h:`${f}px`,y=`${o.floating.height+c}px`):d==="right"?(j=`${-c}px`,y=l?h:`${p}px`):d==="left"&&(j=`${o.floating.width+c}px`,y=l?h:`${p}px`),{data:{x:j,y}}}}),"transformOrigin");function zd(t){const[e,r="center"]=t.split("-");return[e,r]}Zr(zd,"getSideAndAlignFromPlacement");var Sk=Object.defineProperty,Be=(t,e)=>Sk(t,"name",{value:e,configurable:!0}),[Wd,IC]=ko("Tooltip",[ux]),Ck=ux(),Tk="TooltipProvider",Pk=700,Lh="tooltip.open",[Nk,Ek]=Wd(Tk),Ak=Be(t=>{const{__scopeTooltip:e,delayDuration:r=Pk,skipDelayDuration:o=300,disableHoverableContent:s=!1,children:i}=t,l=v.useRef(!0),a=v.useRef(!1),c=v.useRef(0);return v.useEffect(()=>{const d=c.current;return()=>window.clearTimeout(d)},[]),n.jsx(Nk,{scope:e,isOpenDelayedRef:l,delayDuration:r,onOpen:v.useCallback(()=>{o<=0||(window.clearTimeout(c.current),l.current=!1)},[o]),onClose:v.useCallback(()=>{o<=0||(window.clearTimeout(c.current),c.current=window.setTimeout(()=>l.current=!0,o))},[o]),isPointerInTransitRef:a,onPointerInTransitChange:v.useCallback(d=>{a.current=d},[]),disableHoverableContent:s,children:i})},"TooltipProvider"),Ik="Tooltip",[RC,$d]=Wd(Ik),Rk="TooltipPortal",[MC,Mk]=Wd(Rk,{forceMount:void 0}),bs="TooltipContent",fx=v.forwardRef(Be(function(e,r){const o=Mk(bs,e.__scopeTooltip),{forceMount:s=o.forceMount,side:i="top",...l}=e,a=$d(bs,e.__scopeTooltip);return n.jsx(fg,{present:s||a.open,children:a.disableHoverableContent?n.jsx(mx,{side:i,...l,ref:r}):n.jsx(_k,{side:i,...l,ref:r})})},"TooltipContent")),_k=v.forwardRef(Be(function(e,r){const o=$d(bs,e.__scopeTooltip),s=Ek(bs,e.__scopeTooltip),i=v.useRef(null),l=nt(r,i),[a,c]=v.useState(null),{trigger:d,onClose:u}=o,h=i.current,{onPointerInTransitChange:f}=s,p=v.useCallback(()=>{c(null),f(!1)},[f]),j=v.useCallback((y,w)=>{const g=y.currentTarget,m={x:y.clientX,y:y.clientY},x=gx(m,g.getBoundingClientRect()),b=xx(m,x),k=vx(w.getBoundingClientRect()),S=jx([...b,...k]);c(S),f(!0)},[f]);return v.useEffect(()=>()=>p(),[p]),v.useEffect(()=>{if(d&&h){const y=Be(g=>j(g,h),"handleTriggerLeave"),w=Be(g=>j(g,d),"handleContentLeave");return d.addEventListener("pointerleave",y),h.addEventListener("pointerleave",w),()=>{d.removeEventListener("pointerleave",y),h.removeEventListener("pointerleave",w)}}},[d,h,j,p]),v.useEffect(()=>{if(a){const y=Be(w=>{const g=w.target,m={x:w.clientX,y:w.clientY},x=(d==null?void 0:d.contains(g))||(h==null?void 0:h.contains(g)),b=!yx(m,a);x?p():b&&(p(),u())},"handleTrackPointerGrace");return document.addEventListener("pointermove",y),()=>document.removeEventListener("pointermove",y)}},[d,h,a,u,p]),n.jsx(mx,{...e,ref:l})},"TooltipContentHoverable")),Ok=Zm("TooltipContent"),mx=v.forwardRef(Be(function(e,r){const{__scopeTooltip:o,children:s,"aria-label":i,id:l,onEscapeKeyDown:a,onPointerDownOutside:c,...d}=e,u=$d(bs,o),h=Ck(o),{onClose:f}=u;v.useEffect(()=>(document.addEventListener(Lh,f),()=>document.removeEventListener(Lh,f)),[f]),v.useEffect(()=>{if(u.trigger){const j=Be(y=>{y.target instanceof Node&&y.target.contains(u.trigger)&&f()},"handleScroll");return window.addEventListener("scroll",j,{capture:!0}),()=>window.removeEventListener("scroll",j,{capture:!0})}},[u.trigger,f]);const{setContentId:p}=u;return At(()=>(p(l),()=>{p(void 0)}),[l,p]),n.jsx(dg,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:a,onPointerDownOutside:c,onFocusOutside:j=>j.preventDefault(),onDismiss:f,children:n.jsxs(bk,{"data-state":u.stateAttribute,role:i?void 0:"tooltip",id:i?void 0:u.contentId,...h,...d,ref:r,style:{...d.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[n.jsx(Ok,{children:s}),i?n.jsx(Nd,{id:u.contentId,role:"tooltip",children:i}):null]})})},"TooltipContentImpl"));function gx(t,e){const r=Math.abs(e.top-t.y),o=Math.abs(e.bottom-t.y),s=Math.abs(e.right-t.x),i=Math.abs(e.left-t.x);switch(Math.min(r,o,s,i)){case i:return"left";case s:return"right";case r:return"top";case o:return"bottom";default:throw new Error("unreachable")}}Be(gx,"getExitSideFromRect");function xx(t,e,r=5){const o=[];switch(e){case"top":o.push({x:t.x-r,y:t.y+r},{x:t.x+r,y:t.y+r});break;case"bottom":o.push({x:t.x-r,y:t.y-r},{x:t.x+r,y:t.y-r});break;case"left":o.push({x:t.x+r,y:t.y-r},{x:t.x+r,y:t.y+r});break;case"right":o.push({x:t.x-r,y:t.y-r},{x:t.x-r,y:t.y+r});break}return o}Be(xx,"getPaddedExitPoints");function vx(t){const{top:e,right:r,bottom:o,left:s}=t;return[{x:s,y:e},{x:r,y:e},{x:r,y:o},{x:s,y:o}]}Be(vx,"getPointsFromRect");function yx(t,e){const{x:r,y:o}=t;let s=!1;for(let i=0,l=e.length-1;i<e.length;l=i++){const a=e[i],c=e[l],d=a.x,u=a.y,h=c.x,f=c.y;u>o!=f>o&&r<(h-d)*(o-u)/(f-u)+d&&(s=!s)}return s}Be(yx,"isPointInPolygon");function jx(t){const e=t.slice();return e.sort((r,o)=>r.x<o.x?-1:r.x>o.x?1:r.y<o.y?-1:r.y>o.y?1:0),wx(e)}Be(jx,"getHull");function wx(t){if(t.length<=1)return t.slice();const e=[];for(let o=0;o<t.length;o++){const s=t[o];for(;e.length>=2;){const i=e[e.length-1],l=e[e.length-2];if((i.x-l.x)*(s.y-l.y)>=(i.y-l.y)*(s.x-l.x))e.pop();else break}e.push(s)}e.pop();const r=[];for(let o=t.length-1;o>=0;o--){const s=t[o];for(;r.length>=2;){const i=r[r.length-1],l=r[r.length-2];if((i.x-l.x)*(s.y-l.y)>=(i.y-l.y)*(s.x-l.x))r.pop();else break}r.push(s)}return r.pop(),e.length===1&&r.length===1&&e[0].x===r[0].x&&e[0].y===r[0].y?e:e.concat(r)}Be(wx,"getHullPresorted");function Lk(...t){const e=new Set;for(const r of t)if(typeof r=="string")for(const o of String(r).trim().split(/\s+/))o&&e.add(o);return e.size>0?Array.from(e).join(" "):void 0}Be(Lk,"concatAriaDescribedby");const Dk=Ak,Fk=v.forwardRef(({className:t,sideOffset:e=4,...r},o)=>n.jsx(fx,{ref:o,sideOffset:e,className:He("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",t),...r}));Fk.displayName=fx.displayName;const Bk=v.createContext(void 0),zk=({client:t,children:e})=>(v.useEffect(()=>(t.mount(),()=>{t.unmount()}),[t]),n.jsx(Bk.Provider,{value:t,children:e})),Wk={setTimeout:(t,e)=>setTimeout(t,e),clearTimeout:t=>clearTimeout(t),setInterval:(t,e)=>setInterval(t,e),clearInterval:t=>clearInterval(t)};var kn,Nc,kp,$k=(kp=class{constructor(){G(this,kn,Wk);G(this,Nc,!1)}setTimeoutProvider(t){W(this,kn,t)}setTimeout(t,e){return T(this,kn).setTimeout(t,e)}clearTimeout(t){T(this,kn).clearTimeout(t)}setInterval(t,e){return T(this,kn).setInterval(t,e)}clearInterval(t){T(this,kn).clearInterval(t)}},kn=new WeakMap,Nc=new WeakMap,kp);const wc=new $k;function Hk(t){setTimeout(t,0)}const Uk=typeof window>"u"||"Deno"in globalThis;function ct(){}function Vk(t,e){return typeof t=="function"?t(e):t}function qk(t){return typeof t=="number"&&t>=0&&t!==1/0}function Jk(t,e){return Math.max(t+(e||0)-Date.now(),0)}function ns(t,e){return typeof t=="function"?t(e):t}function Dh(t,e){const{type:r="all",exact:o,fetchStatus:s,predicate:i,queryKey:l,stale:a}=t;if(l){if(o){if(e.queryHash!==Hd(l,e.options))return!1}else if(!xo(e.queryKey,l))return!1}if(r!=="all"){const c=e.isActive();if(r==="active"&&!c||r==="inactive"&&c)return!1}return!(typeof a=="boolean"&&e.isStale()!==a||s&&s!==e.state.fetchStatus||i&&!i(e))}function Fh(t,e){const{exact:r,status:o,predicate:s,mutationKey:i}=t;if(i){if(!e.options.mutationKey)return!1;if(r){if(ks(e.options.mutationKey)!==ks(i))return!1}else if(!xo(e.options.mutationKey,i))return!1}return!(o&&e.state.status!==o||s&&!s(e))}function Hd(t,e){return((e==null?void 0:e.queryKeyHashFn)||ks)(t)}function ks(t){return JSON.stringify(t,(e,r)=>bc(r)?Object.keys(r).sort().reduce((o,s)=>(o[s]=r[s],o),{}):r)}function xo(t,e){if(t===e)return!0;if(typeof t!=typeof e)return!1;if(t&&e&&typeof t=="object"&&typeof e=="object"){if(Array.isArray(t)&&Array.isArray(e)){if(e.length>t.length)return!1;for(let o=0;o<e.length;o++)if(!xo(t[o],e[o]))return!1;return!0}const r=Object.keys(e);for(const o of r)if(!xo(t[o],e[o]))return!1;return!0}return!1}const Kk=Object.prototype.hasOwnProperty;function bx(t,e,r=0){if(t===e)return t;if(r>500)return e;const o=Bh(t)&&Bh(e);if(!o&&!(bc(t)&&bc(e)))return e;const s=(o?t:Object.keys(t)).length,i=o?e:Object.keys(e),l=i.length,a=o?new Array(l):{};let c=0;for(let d=0;d<l;d++){const u=o?d:i[d],h=t[u],f=e[u];if(h===f){a[u]=h,(o?d<s:Kk.call(t,u))&&c++;continue}if(h===null||f===null||typeof h!="object"||typeof f!="object"){a[u]=f;continue}const p=bx(h,f,r+1);a[u]=p,p===h&&c++}return s===l&&c===s?t:a}function Bh(t){return Array.isArray(t)&&t.length===Object.keys(t).length}function bc(t){if(!zh(t))return!1;const e=Object.getPrototypeOf(t),r=e==null?void 0:e.constructor;if(r===void 0)return!0;if(typeof r!="function")return!1;const o=r.prototype;return!(!zh(o)||!o.hasOwnProperty("isPrototypeOf")||e!==Object.prototype)}function zh(t){return Object.prototype.toString.call(t)==="[object Object]"}function Gk(t){return new Promise(e=>{wc.setTimeout(e,t)})}function Qk(t,e,r){return typeof r.structuralSharing=="function"?r.structuralSharing(t,e):r.structuralSharing!==!1?bx(t,e):e}function Yk(t,e,r=0){const o=[...t,e];return r&&o.length>r?o.slice(1):o}function Xk(t,e,r=0){const o=[e,...t];return r&&o.length>r?o.slice(0,-1):o}const Ud=Symbol();function kx(t,e){return!t.queryFn&&(e!=null&&e.initialPromise)?()=>e.initialPromise:!t.queryFn||t.queryFn===Ud?()=>Promise.reject(new Error(`Missing queryFn: '${t.queryHash}'`)):t.queryFn}function Zk(t,e,r){let o=!1,s;return Object.defineProperty(t,"signal",{enumerable:!0,get:()=>(s??(s=e()),o||(o=!0,s.aborted?r():s.addEventListener("abort",r,{once:!0})),s)}),t}let e1=()=>Uk;const Sx=()=>e1();var Nl=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(t){return this.listeners.add(t),this.onSubscribe(),()=>{this.listeners.delete(t),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},lr,Sn,eo,Sp,t1=(Sp=class extends Nl{constructor(){super();G(this,lr);G(this,Sn);G(this,eo);W(this,eo,e=>{if(typeof window<"u"&&window.addEventListener){const r=()=>e();return window.addEventListener("visibilitychange",r,!1),()=>{window.removeEventListener("visibilitychange",r)}}})}onSubscribe(){T(this,Sn)||this.setEventListener(T(this,eo))}onUnsubscribe(){var e;this.hasListeners()||((e=T(this,Sn))==null||e.call(this),W(this,Sn,void 0))}setEventListener(e){var r;W(this,eo,e),(r=T(this,Sn))==null||r.call(this),W(this,Sn,e(o=>{typeof o=="boolean"?this.setFocused(o):this.onFocus()}))}setFocused(e){T(this,lr)!==e&&(W(this,lr,e),this.onFocus())}onFocus(){const e=this.isFocused();this.listeners.forEach(r=>{r(e)})}isFocused(){var e;return typeof T(this,lr)=="boolean"?T(this,lr):((e=globalThis.document)==null?void 0:e.visibilityState)!=="hidden"}},lr=new WeakMap,Sn=new WeakMap,eo=new WeakMap,Sp);const Cx=new t1,n1=Hk;function r1(){let t=[],e=0,r=a=>{a()},o=a=>{a()},s=n1;const i=a=>{e?t.push(a):s(()=>{r(a)})},l=()=>{const a=t;t=[],a.length&&s(()=>{o(()=>{a.forEach(c=>{r(c)})})})};return{batch:a=>{let c;e++;try{c=a()}finally{e--,e||l()}return c},batchCalls:a=>(...c)=>{i(()=>{a(...c)})},schedule:i,setNotifyFunction:a=>{r=a},setBatchNotifyFunction:a=>{o=a},setScheduler:a=>{s=a}}}const Fe=r1();var to,Cn,no,Cp,o1=(Cp=class extends Nl{constructor(){super();G(this,to,!0);G(this,Cn);G(this,no);W(this,no,e=>{if(typeof window<"u"&&window.addEventListener){const r=()=>e(!0),o=()=>e(!1);return window.addEventListener("online",r,!1),window.addEventListener("offline",o,!1),()=>{window.removeEventListener("online",r),window.removeEventListener("offline",o)}}})}onSubscribe(){T(this,Cn)||this.setEventListener(T(this,no))}onUnsubscribe(){var e;this.hasListeners()||((e=T(this,Cn))==null||e.call(this),W(this,Cn,void 0))}setEventListener(e){var r;W(this,no,e),(r=T(this,Cn))==null||r.call(this),W(this,Cn,e(this.setOnline.bind(this)))}setOnline(e){T(this,to)!==e&&(W(this,to,e),this.listeners.forEach(r=>{r(e)}))}isOnline(){return T(this,to)}},to=new WeakMap,Cn=new WeakMap,no=new WeakMap,Cp);const rl=new o1;function s1(t){return Math.min(1e3*2**t,3e4)}function Tx(t){return(t??"online")==="online"?rl.isOnline():!0}var kc=class extends Error{constructor(t){super("CancelledError"),this.revert=t==null?void 0:t.revert,this.silent=t==null?void 0:t.silent}};function Px(t){let e=!1,r=0,o,s="pending",i,l;const a=new Promise((m,x)=>{i=m,l=x});a.catch(ct);const c=()=>s!=="pending",d=m=>{var x;if(!c()){const b=new kc(m);y(b),(x=t.onCancel)==null||x.call(t,b)}},u=()=>{e=!0},h=()=>{e=!1},f=()=>Cx.isFocused()&&(t.networkMode==="always"||rl.isOnline())&&t.canRun(),p=()=>Tx(t.networkMode)&&t.canRun(),j=m=>{c()||(o==null||o(),s="resolved",i(m))},y=m=>{c()||(o==null||o(),s="rejected",l(m))},w=()=>new Promise(m=>{var x;o=b=>{(c()||f())&&m(b)},(x=t.onPause)==null||x.call(t)}).then(()=>{var m;o=void 0,c()||(m=t.onContinue)==null||m.call(t)}),g=()=>{if(c())return;let m;const x=r===0?t.initialPromise:void 0;try{m=x??t.fn()}catch(b){m=Promise.reject(b)}Promise.resolve(m).then(j).catch(b=>{var R;if(c())return;const k=t.retry??(Sx()?0:3),S=t.retryDelay??s1,C=typeof S=="function"?S(r,b):S,E=k===!0||typeof k=="number"&&r<k||typeof k=="function"&&k(r,b);if(e||!E){y(b);return}r++,(R=t.onFail)==null||R.call(t,r,b),Gk(C).then(()=>f()?void 0:w()).then(()=>{e?y(b):g()})})};return{promise:a,status:()=>s,cancel:d,continue:()=>(o==null||o(),a),cancelRetry:u,continueRetry:h,canStart:p,start:()=>(p()?g():w().then(g),a)}}var ar,Tp,Nx=(Tp=class{constructor(){G(this,ar)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),qk(this.gcTime)&&W(this,ar,wc.setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(t){this.gcTime=Math.max(this.gcTime||0,t??(Sx()?1/0:3e5))}clearGcTimeout(){T(this,ar)!==void 0&&(wc.clearTimeout(T(this,ar)),W(this,ar,void 0))}},ar=new WeakMap,Tp);function i1(t){return{onFetch:(e,r)=>{var u,h,f,p,j;const o=e.options,s=(f=(h=(u=e.fetchOptions)==null?void 0:u.meta)==null?void 0:h.fetchMore)==null?void 0:f.direction,i=((p=e.state.data)==null?void 0:p.pages)||[],l=((j=e.state.data)==null?void 0:j.pageParams)||[];let a={pages:[],pageParams:[]},c=0;const d=async()=>{let y=!1;const w=x=>{Zk(x,()=>e.signal,()=>y=!0)},g=kx(e.options,e.fetchOptions),m=async(x,b,k)=>{if(y)return Promise.reject(e.signal.reason);if(b==null&&x.pages.length)return Promise.resolve(x);const C=(()=>{const H={client:e.client,queryKey:e.queryKey,pageParam:b,direction:k?"backward":"forward",meta:e.options.meta};return w(H),H})(),E=await g(C),{maxPages:R}=e.options,A=k?Xk:Yk;return{pages:A(x.pages,E,R),pageParams:A(x.pageParams,b,R)}};if(s&&i.length){const x=s==="backward",b=x?l1:Wh,k={pages:i,pageParams:l};a=await m(k,b(o,k),x)}else{const x=t??i.length;do{const b=c===0?l[0]??o.initialPageParam:Wh(o,a);if(c>0&&b==null)break;a=await m(a,b),c++}while(c<x)}return a};e.options.persister?e.fetchFn=()=>{var y,w;return(w=(y=e.options).persister)==null?void 0:w.call(y,d,{client:e.client,queryKey:e.queryKey,meta:e.options.meta,signal:e.signal},r)}:e.fetchFn=d}}}function Wh(t,{pages:e,pageParams:r}){const o=e.length-1;return e.length>0?t.getNextPageParam(e[o],e,r[o],r):void 0}function l1(t,{pages:e,pageParams:r}){var o;return e.length>0?(o=t.getPreviousPageParam)==null?void 0:o.call(t,e[0],e,r[0],r):void 0}var ro,cr,oo,at,dr,je,Ts,ur,St,Vt,Pp,a1=(Pp=class extends Nx{constructor(e){super();G(this,St);G(this,ro);G(this,cr);G(this,oo);G(this,at);G(this,dr);G(this,je);G(this,Ts);G(this,ur);W(this,ur,!1),W(this,Ts,e.defaultOptions),this.setOptions(e.options),this.observers=[],W(this,dr,e.client),W(this,at,T(this,dr).getQueryCache()),this.queryKey=e.queryKey,this.queryHash=e.queryHash,W(this,cr,Hh(this.options)),this.state=e.state??T(this,cr),this.scheduleGc()}get meta(){return this.options.meta}get queryType(){return T(this,ro)}get promise(){var e;return(e=T(this,je))==null?void 0:e.promise}setOptions(e){if(this.options={...T(this,Ts),...e},e!=null&&e._type&&W(this,ro,e._type),this.updateGcTime(this.options.gcTime),this.state&&this.state.data===void 0){const r=Hh(this.options);r.data!==void 0&&(this.setState($h(r.data,r.dataUpdatedAt)),W(this,cr,r))}}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&T(this,at).remove(this)}setData(e,r){const o=Qk(this.state.data,e,this.options);return Ie(this,St,Vt).call(this,{data:o,type:"success",dataUpdatedAt:r==null?void 0:r.updatedAt,manual:r==null?void 0:r.manual}),o}setState(e){Ie(this,St,Vt).call(this,{type:"setState",state:e})}cancel(e){var o,s;const r=(o=T(this,je))==null?void 0:o.promise;return(s=T(this,je))==null||s.cancel(e),r?r.then(ct).catch(ct):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}get resetState(){return T(this,cr)}reset(){this.destroy(),this.setState(this.resetState)}isActive(){return this.observers.some(e=>ns(e.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===Ud||!this.isFetched()}isFetched(){return this.state.dataUpdateCount+this.state.errorUpdateCount>0}isStatic(){return this.getObserversCount()>0?this.observers.some(e=>ns(e.options.staleTime,this)==="static"):!1}isStale(){return this.getObserversCount()>0?this.observers.some(e=>e.getCurrentResult().isStale):this.state.data===void 0||this.state.isInvalidated}isStaleByTime(e=0){return this.state.data===void 0?!0:e==="static"?!1:this.state.isInvalidated?!0:!Jk(this.state.dataUpdatedAt,e)}onFocus(){var e,r;(e=this.observers.find(o=>o.shouldFetchOnWindowFocus()))==null||e.refetch({cancelRefetch:!1}),(r=T(this,je))==null||r.continue()}onOnline(){var e,r;(e=this.observers.find(o=>o.shouldFetchOnReconnect()))==null||e.refetch({cancelRefetch:!1}),(r=T(this,je))==null||r.continue()}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),T(this,at).notify({type:"observerAdded",query:this,observer:e}))}removeObserver(e){const r=this.observers.indexOf(e);r!==-1&&(this.observers.splice(r,1),this.observers.length||(T(this,je)&&(T(this,ur)||this.state.fetchStatus==="paused"&&this.state.status==="pending"?T(this,je).cancel({revert:!0}):T(this,je).cancelRetry()),this.scheduleGc()),T(this,at).notify({type:"observerRemoved",query:this,observer:e}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||Ie(this,St,Vt).call(this,{type:"invalidate"})}async fetch(e,r){var d,u,h,f,p,j,y,w,g,m,x,b;if(this.state.fetchStatus!=="idle"&&((d=T(this,je))==null?void 0:d.status())!=="rejected"){if(this.state.data!==void 0&&(r!=null&&r.cancelRefetch))this.cancel({silent:!0});else if(T(this,je))return T(this,je).continueRetry(),T(this,je).promise}if(e&&this.setOptions(e),!this.options.queryFn){const k=this.observers.find(S=>S.options.queryFn);k&&this.setOptions(k.options)}const o=new AbortController,s=k=>{Object.defineProperty(k,"signal",{enumerable:!0,get:()=>(W(this,ur,!0),o.signal)})},i=()=>{const k=kx(this.options,r),C=(()=>{const E={client:T(this,dr),queryKey:this.queryKey,meta:this.meta};return s(E),E})();return W(this,ur,!1),this.options.persister?this.options.persister(k,C,this):k(C)},a=(()=>{const k={fetchOptions:r,options:this.options,queryKey:this.queryKey,client:T(this,dr),state:this.state,fetchFn:i};return s(k),k})();(u=T(this,ro)==="infinite"?i1(this.options.pages):this.options.behavior)==null||u.onFetch(a,this),W(this,oo,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((h=a.fetchOptions)==null?void 0:h.meta))&&Ie(this,St,Vt).call(this,{type:"fetch",meta:(f=a.fetchOptions)==null?void 0:f.meta});const c=W(this,je,Px({initialPromise:r==null?void 0:r.initialPromise,fn:a.fetchFn,onCancel:k=>{k instanceof kc&&k.revert&&this.setState({...T(this,oo),fetchStatus:"idle"}),o.abort()},onFail:(k,S)=>{Ie(this,St,Vt).call(this,{type:"failed",failureCount:k,error:S})},onPause:()=>{Ie(this,St,Vt).call(this,{type:"pause"})},onContinue:()=>{Ie(this,St,Vt).call(this,{type:"continue"})},retry:a.options.retry,retryDelay:a.options.retryDelay,networkMode:a.options.networkMode,canRun:()=>!0}));try{const k=await c.start();if(k===void 0)throw new Error(`${this.queryHash} data is undefined`);return this.setData(k),(j=(p=T(this,at).config).onSuccess)==null||j.call(p,k,this),(w=(y=T(this,at).config).onSettled)==null||w.call(y,k,this.state.error,this),k}catch(k){if(k instanceof kc){if(k.silent)return T(this,je).promise;if(k.revert){if(this.state.data===void 0)throw k;return this.state.data}}throw Ie(this,St,Vt).call(this,{type:"error",error:k}),(m=(g=T(this,at).config).onError)==null||m.call(g,k,this),(b=(x=T(this,at).config).onSettled)==null||b.call(x,this.state.data,k,this),k}finally{T(this,je)===c&&W(this,je,void 0),this.scheduleGc()}}},ro=new WeakMap,cr=new WeakMap,oo=new WeakMap,at=new WeakMap,dr=new WeakMap,je=new WeakMap,Ts=new WeakMap,ur=new WeakMap,St=new WeakSet,Vt=function(e){const r=o=>{switch(e.type){case"failed":return{...o,fetchFailureCount:e.failureCount,fetchFailureReason:e.error};case"pause":return{...o,fetchStatus:"paused"};case"continue":return{...o,fetchStatus:"fetching"};case"fetch":return{...o,...c1(o.data,this.options),fetchMeta:e.meta??null};case"success":const s={...o,...$h(e.data,e.dataUpdatedAt),dataUpdateCount:o.dataUpdateCount+1,...!e.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};return W(this,oo,e.manual?s:void 0),s;case"error":const i=e.error;return{...o,error:i,errorUpdateCount:o.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:o.fetchFailureCount+1,fetchFailureReason:i,fetchStatus:"idle",status:"error",isInvalidated:!0};case"invalidate":return{...o,isInvalidated:!0};case"setState":return{...o,...e.state}}};this.state=r(this.state),Fe.batch(()=>{this.observers.slice().forEach(o=>{o.onQueryUpdate()}),T(this,at).notify({query:this,type:"updated",action:e})})},Pp);function c1(t,e){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:Tx(e.networkMode)?"fetching":"paused",...t===void 0&&{error:null,status:"pending"}}}function $h(t,e){return{data:t,dataUpdatedAt:e??Date.now(),error:null,isInvalidated:!1,status:"success"}}function Hh(t){const e=typeof t.initialData=="function"?t.initialData():t.initialData,r=e!==void 0,o=r?typeof t.initialDataUpdatedAt=="function"?t.initialDataUpdatedAt():t.initialDataUpdatedAt:0;return{data:e,dataUpdateCount:0,dataUpdatedAt:r?o??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:r?"success":"pending",fetchStatus:"idle"}}var Ps,Ot,_e,hr,Lt,vn,Np,d1=(Np=class extends Nx{constructor(e){super();G(this,Lt);G(this,Ps);G(this,Ot);G(this,_e);G(this,hr);W(this,Ps,e.client),this.mutationId=e.mutationId,W(this,_e,e.mutationCache),W(this,Ot,[]),this.state=e.state||u1(),this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options=e,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(e){T(this,Ot).includes(e)||(T(this,Ot).push(e),this.clearGcTimeout(),T(this,_e).notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){W(this,Ot,T(this,Ot).filter(r=>r!==e)),this.scheduleGc(),T(this,_e).notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){T(this,Ot).length||(this.state.status==="pending"?this.scheduleGc():T(this,_e).remove(this))}continue(){var e;return((e=T(this,hr))==null?void 0:e.continue())??(this.state.status==="pending"?this.execute(this.state.variables):Promise.resolve())}async execute(e){var a,c,d,u,h,f,p,j,y,w,g,m,x,b,k,S,C,E;const r=()=>{Ie(this,Lt,vn).call(this,{type:"continue"})},o={client:T(this,Ps),meta:this.options.meta,mutationKey:this.options.mutationKey},s=W(this,hr,Px({fn:()=>this.options.mutationFn?this.options.mutationFn(e,o):Promise.reject(new Error("No mutationFn found")),onFail:(R,A)=>{Ie(this,Lt,vn).call(this,{type:"failed",failureCount:R,error:A})},onPause:()=>{Ie(this,Lt,vn).call(this,{type:"pause"})},onContinue:r,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>T(this,_e).canRun(this)})),i=this.state.status==="pending",l=!s.canStart();try{if(i)r();else{Ie(this,Lt,vn).call(this,{type:"pending",variables:e,isPaused:l}),T(this,_e).config.onMutate&&await T(this,_e).config.onMutate(e,this,o);const A=await((c=(a=this.options).onMutate)==null?void 0:c.call(a,e,o));A!==this.state.context&&Ie(this,Lt,vn).call(this,{type:"pending",context:A,variables:e,isPaused:l})}const R=await s.start();return await((u=(d=T(this,_e).config).onSuccess)==null?void 0:u.call(d,R,e,this.state.context,this,o)),await((f=(h=this.options).onSuccess)==null?void 0:f.call(h,R,e,this.state.context,o)),await((j=(p=T(this,_e).config).onSettled)==null?void 0:j.call(p,R,null,this.state.variables,this.state.context,this,o)),await((w=(y=this.options).onSettled)==null?void 0:w.call(y,R,null,e,this.state.context,o)),Ie(this,Lt,vn).call(this,{type:"success",data:R}),R}catch(R){try{await((m=(g=T(this,_e).config).onError)==null?void 0:m.call(g,R,e,this.state.context,this,o))}catch(A){Promise.reject(A)}try{await((b=(x=this.options).onError)==null?void 0:b.call(x,R,e,this.state.context,o))}catch(A){Promise.reject(A)}try{await((S=(k=T(this,_e).config).onSettled)==null?void 0:S.call(k,void 0,R,this.state.variables,this.state.context,this,o))}catch(A){Promise.reject(A)}try{await((E=(C=this.options).onSettled)==null?void 0:E.call(C,void 0,R,e,this.state.context,o))}catch(A){Promise.reject(A)}throw Ie(this,Lt,vn).call(this,{type:"error",error:R}),R}finally{T(this,hr)===s&&W(this,hr,void 0),T(this,_e).runNext(this)}}},Ps=new WeakMap,Ot=new WeakMap,_e=new WeakMap,hr=new WeakMap,Lt=new WeakSet,vn=function(e){const r=o=>{switch(e.type){case"failed":return{...o,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...o,isPaused:!0};case"continue":return{...o,isPaused:!1};case"pending":return{...o,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:e.isPaused,status:"pending",variables:e.variables,submittedAt:Date.now()};case"success":return{...o,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...o,data:void 0,error:e.error,failureCount:o.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"}}};this.state=r(this.state),Fe.batch(()=>{T(this,Ot).forEach(o=>{o.onMutationUpdate(e)}),T(this,_e).notify({mutation:this,type:"updated",action:e})})},Np);function u1(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var Kt,Ct,Ns,Ep,h1=(Ep=class extends Nl{constructor(e={}){super();G(this,Kt);G(this,Ct);G(this,Ns);this.config=e,W(this,Kt,new Set),W(this,Ct,new Map),W(this,Ns,0)}build(e,r,o){const s=new d1({client:e,mutationCache:this,mutationId:++Hs(this,Ns)._,options:e.defaultMutationOptions(r),state:o});return this.add(s),s}add(e){T(this,Kt).add(e);const r=di(e);if(typeof r=="string"){const o=T(this,Ct).get(r);o?o.push(e):T(this,Ct).set(r,[e])}this.notify({type:"added",mutation:e})}remove(e){if(T(this,Kt).delete(e)){const r=di(e);if(typeof r=="string"){const o=T(this,Ct).get(r);if(o)if(o.length>1){const s=o.indexOf(e);s!==-1&&o.splice(s,1)}else o[0]===e&&T(this,Ct).delete(r)}}this.notify({type:"removed",mutation:e})}canRun(e){var o;const r=di(e);if(typeof r=="string"){const s=(o=T(this,Ct).get(r))==null?void 0:o.find(i=>i.state.status==="pending");return!s||s===e}else return!0}runNext(e){var o,s;const r=di(e);return typeof r=="string"?((s=(o=T(this,Ct).get(r))==null?void 0:o.find(i=>i!==e&&i.state.isPaused))==null?void 0:s.continue())??Promise.resolve():Promise.resolve()}clear(){Fe.batch(()=>{T(this,Kt).forEach(e=>{this.notify({type:"removed",mutation:e})}),T(this,Kt).clear(),T(this,Ct).clear()})}getAll(){return Array.from(T(this,Kt))}find(e){const r={exact:!0,...e};return this.getAll().find(o=>Fh(r,o))}findAll(e={}){return this.getAll().filter(r=>Fh(e,r))}notify(e){Fe.batch(()=>{this.listeners.forEach(r=>{r(e)})})}resumePausedMutations(){const e=this.getAll().filter(r=>r.state.isPaused);return Fe.batch(()=>Promise.all(e.map(r=>r.continue().catch(ct))))}},Kt=new WeakMap,Ct=new WeakMap,Ns=new WeakMap,Ep);function di(t){var e;return(e=t.options.scope)==null?void 0:e.id}var Dt,Ap,p1=(Ap=class extends Nl{constructor(e={}){super();G(this,Dt);this.config=e,W(this,Dt,new Map)}build(e,r,o){const s=r.queryKey,i=r.queryHash??Hd(s,r);let l=this.get(i);return l||(l=new a1({client:e,queryKey:s,queryHash:i,options:e.defaultQueryOptions(r),state:o,defaultOptions:e.getQueryDefaults(s)}),this.add(l)),l}add(e){T(this,Dt).has(e.queryHash)||(T(this,Dt).set(e.queryHash,e),this.notify({type:"added",query:e}))}remove(e){T(this,Dt).get(e.queryHash)===e&&(e.destroy(),T(this,Dt).delete(e.queryHash),this.notify({type:"removed",query:e}))}clear(){Fe.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return T(this,Dt).get(e)}getAll(){return[...T(this,Dt).values()]}find(e){const r={exact:!0,...e};return this.getAll().find(o=>Dh(r,o))}findAll(e={}){const r=this.getAll();return Object.keys(e).length>0?r.filter(o=>Dh(e,o)):r}notify(e){Fe.batch(()=>{this.listeners.forEach(r=>{r(e)})})}onFocus(){Fe.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){Fe.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}},Dt=new WeakMap,Ap),de,Tn,Pn,so,io,Nn,lo,ao,Ip,f1=(Ip=class{constructor(t={}){G(this,de);G(this,Tn);G(this,Pn);G(this,so);G(this,io);G(this,Nn);G(this,lo);G(this,ao);W(this,de,t.queryCache||new p1),W(this,Tn,t.mutationCache||new h1),W(this,Pn,t.defaultOptions||{}),W(this,so,new Map),W(this,io,new Map),W(this,Nn,0)}mount(){Hs(this,Nn)._++,T(this,Nn)===1&&(W(this,lo,Cx.subscribe(async t=>{t&&(await this.resumePausedMutations(),T(this,de).onFocus())})),W(this,ao,rl.subscribe(async t=>{t&&(await this.resumePausedMutations(),T(this,de).onOnline())})))}unmount(){var t,e;Hs(this,Nn)._--,T(this,Nn)===0&&((t=T(this,lo))==null||t.call(this),W(this,lo,void 0),(e=T(this,ao))==null||e.call(this),W(this,ao,void 0))}isFetching(t){return T(this,de).findAll({...t,fetchStatus:"fetching"}).length}isMutating(t){return T(this,Tn).findAll({...t,status:"pending"}).length}getQueryData(t){var r;const e=this.defaultQueryOptions({queryKey:t});return(r=T(this,de).get(e.queryHash))==null?void 0:r.state.data}ensureQueryData(t){const e=this.defaultQueryOptions(t),r=T(this,de).build(this,e),o=r.state.data;return o===void 0?this.fetchQuery(t):(t.revalidateIfStale&&r.isStaleByTime(ns(e.staleTime,r))&&this.prefetchQuery(e),Promise.resolve(o))}getQueriesData(t){return T(this,de).findAll(t).map(({queryKey:e,state:r})=>[e,r.data])}setQueryData(t,e,r){var l;const o=this.defaultQueryOptions({queryKey:t}),s=(l=T(this,de).get(o.queryHash))==null?void 0:l.state.data,i=Vk(e,s);if(i!==void 0)return T(this,de).build(this,o).setData(i,{...r,manual:!0})}setQueriesData(t,e,r){return Fe.batch(()=>T(this,de).findAll(t).map(({queryKey:o})=>[o,this.setQueryData(o,e,r)]))}getQueryState(t){var r;const e=this.defaultQueryOptions({queryKey:t});return(r=T(this,de).get(e.queryHash))==null?void 0:r.state}removeQueries(t){const e=T(this,de);Fe.batch(()=>{e.findAll(t).forEach(r=>{e.remove(r)})})}resetQueries(t,e){const r=T(this,de);return Fe.batch(()=>{const o=r.findAll(t),s=new Set(o);return o.forEach(i=>{i.reset()}),this.refetchQueries({type:"active",predicate:i=>s.has(i)},e)})}cancelQueries(t,e={}){const r={revert:!0,...e},o=Fe.batch(()=>T(this,de).findAll(t).map(s=>s.cancel(r)));return Promise.all(o).then(ct).catch(ct)}invalidateQueries(t,e={}){return Fe.batch(()=>(T(this,de).findAll(t).forEach(r=>{r.invalidate()}),(t==null?void 0:t.refetchType)==="none"?Promise.resolve():this.refetchQueries({...t,type:(t==null?void 0:t.refetchType)??(t==null?void 0:t.type)??"active"},e)))}refetchQueries(t,e={}){const r={...e,cancelRefetch:e.cancelRefetch??!0},o=Fe.batch(()=>T(this,de).findAll(t).filter(s=>!s.isDisabled()&&!s.isStatic()).map(s=>{let i=s.fetch(void 0,r);return r.throwOnError||(i=i.catch(ct)),s.state.fetchStatus==="paused"?Promise.resolve():i}));return Promise.all(o).then(ct)}async query(t){const e=this.defaultQueryOptions(t);e.retry===void 0&&(e.retry=!1);const r=T(this,de).build(this,e),o=r.isStaleByTime(ns(e.staleTime,r))?await r.fetch(e):r.state.data,s=e.select;return s?s(o):o}fetchQuery(t){const e=this.defaultQueryOptions(t);e.retry===void 0&&(e.retry=!1);const r=T(this,de).build(this,e);return r.isStaleByTime(ns(e.staleTime,r))?r.fetch(e):Promise.resolve(r.state.data)}prefetchQuery(t){return this.fetchQuery(t).then(ct).catch(ct)}infiniteQuery(t){return t._type="infinite",this.query(t)}fetchInfiniteQuery(t){return t._type="infinite",this.fetchQuery(t)}prefetchInfiniteQuery(t){return this.fetchInfiniteQuery(t).then(ct).catch(ct)}ensureInfiniteQueryData(t){return t._type="infinite",this.ensureQueryData(t)}resumePausedMutations(){return rl.isOnline()?T(this,Tn).resumePausedMutations():Promise.resolve()}getQueryCache(){return T(this,de)}getMutationCache(){return T(this,Tn)}getDefaultOptions(){return T(this,Pn)}setDefaultOptions(t){W(this,Pn,t)}setQueryDefaults(t,e){T(this,so).set(ks(t),{queryKey:t,defaultOptions:e})}getQueryDefaults(t){const e=[...T(this,so).values()],r={};return e.forEach(o=>{xo(t,o.queryKey)&&Object.assign(r,o.defaultOptions)}),r}setMutationDefaults(t,e){T(this,io).set(ks(t),{mutationKey:t,defaultOptions:e})}getMutationDefaults(t){const e=[...T(this,io).values()],r={};return e.forEach(o=>{xo(t,o.mutationKey)&&Object.assign(r,o.defaultOptions)}),r}defaultQueryOptions(t){if(t._defaulted)return t;const e={...T(this,Pn).queries,...this.getQueryDefaults(t.queryKey),...t,_defaulted:!0};return e.queryHash||(e.queryHash=Hd(e.queryKey,e)),e.refetchOnReconnect===void 0&&(e.refetchOnReconnect=e.networkMode!=="always"),e.throwOnError===void 0&&(e.throwOnError=!!e.suspense),!e.networkMode&&e.persister&&(e.networkMode="offlineFirst"),e.queryFn===Ud&&(e.enabled=!1),e}defaultMutationOptions(t){return t!=null&&t._defaulted?t:{...T(this,Pn).mutations,...(t==null?void 0:t.mutationKey)&&this.getMutationDefaults(t.mutationKey),...t,_defaulted:!0}}clear(){T(this,de).clear(),T(this,Tn).clear()}},de=new WeakMap,Tn=new WeakMap,Pn=new WeakMap,so=new WeakMap,io=new WeakMap,Nn=new WeakMap,lo=new WeakMap,ao=new WeakMap,Ip);/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ss(){return Ss=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)({}).hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},Ss.apply(null,arguments)}var In;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(In||(In={}));const Uh="popstate";function m1(t){t===void 0&&(t={});function e(o,s){let{pathname:i,search:l,hash:a}=o.location;return Sc("",{pathname:i,search:l,hash:a},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function r(o,s){return typeof s=="string"?s:ol(s)}return x1(e,r,null,t)}function ve(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Ex(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function g1(){return Math.random().toString(36).substr(2,8)}function Vh(t,e){return{usr:t.state,key:t.key,idx:e}}function Sc(t,e,r,o){return r===void 0&&(r=null),Ss({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Po(e):e,{state:r,key:e&&e.key||o||g1()})}function ol(t){let{pathname:e="/",search:r="",hash:o=""}=t;return r&&r!=="?"&&(e+=r.charAt(0)==="?"?r:"?"+r),o&&o!=="#"&&(e+=o.charAt(0)==="#"?o:"#"+o),e}function Po(t){let e={};if(t){let r=t.indexOf("#");r>=0&&(e.hash=t.substr(r),t=t.substr(0,r));let o=t.indexOf("?");o>=0&&(e.search=t.substr(o),t=t.substr(0,o)),t&&(e.pathname=t)}return e}function x1(t,e,r,o){o===void 0&&(o={});let{window:s=document.defaultView,v5Compat:i=!1}=o,l=s.history,a=In.Pop,c=null,d=u();d==null&&(d=0,l.replaceState(Ss({},l.state,{idx:d}),""));function u(){return(l.state||{idx:null}).idx}function h(){a=In.Pop;let w=u(),g=w==null?null:w-d;d=w,c&&c({action:a,location:y.location,delta:g})}function f(w,g){a=In.Push;let m=Sc(y.location,w,g);d=u()+1;let x=Vh(m,d),b=y.createHref(m);try{l.pushState(x,"",b)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;s.location.assign(b)}i&&c&&c({action:a,location:y.location,delta:1})}function p(w,g){a=In.Replace;let m=Sc(y.location,w,g);d=u();let x=Vh(m,d),b=y.createHref(m);l.replaceState(x,"",b),i&&c&&c({action:a,location:y.location,delta:0})}function j(w){let g=s.location.origin!=="null"?s.location.origin:s.location.href,m=typeof w=="string"?w:ol(w);return m=m.replace(/ $/,"%20"),ve(g,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,g)}let y={get action(){return a},get location(){return t(s,l)},listen(w){if(c)throw new Error("A history only accepts one active listener");return s.addEventListener(Uh,h),c=w,()=>{s.removeEventListener(Uh,h),c=null}},createHref(w){return e(s,w)},createURL:j,encodeLocation(w){let g=j(w);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:f,replace:p,go(w){return l.go(w)}};return y}var qh;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(qh||(qh={}));function v1(t,e,r){return r===void 0&&(r="/"),y1(t,e,r)}function y1(t,e,r,o){let s=typeof e=="string"?Po(e):e,i=Vd(s.pathname||"/",r);if(i==null)return null;let l=Ax(t);j1(l);let a=null,c=R1(i);for(let d=0;a==null&&d<l.length;++d)a=E1(l[d],c);return a}function Ax(t,e,r,o){e===void 0&&(e=[]),r===void 0&&(r=[]),o===void 0&&(o="");let s=(i,l,a)=>{let c={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:l,route:i};c.relativePath.startsWith("/")&&(ve(c.relativePath.startsWith(o),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+o+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(o.length));let d=zn([o,c.relativePath]),u=r.concat(c);i.children&&i.children.length>0&&(ve(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),Ax(i.children,e,u,d)),!(i.path==null&&!i.index)&&e.push({path:d,score:P1(d,i.index),routesMeta:u})};return t.forEach((i,l)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))s(i,l);else for(let c of Ix(i.path))s(i,l,c)}),e}function Ix(t){let e=t.split("/");if(e.length===0)return[];let[r,...o]=e,s=r.endsWith("?"),i=r.replace(/\?$/,"");if(o.length===0)return s?[i,""]:[i];let l=Ix(o.join("/")),a=[];return a.push(...l.map(c=>c===""?i:[i,c].join("/"))),s&&a.push(...l),a.map(c=>t.startsWith("/")&&c===""?"/":c)}function j1(t){t.sort((e,r)=>e.score!==r.score?r.score-e.score:N1(e.routesMeta.map(o=>o.childrenIndex),r.routesMeta.map(o=>o.childrenIndex)))}const w1=/^:[\w-]+$/,b1=3,k1=2,S1=1,C1=10,T1=-2,Jh=t=>t==="*";function P1(t,e){let r=t.split("/"),o=r.length;return r.some(Jh)&&(o+=T1),e&&(o+=k1),r.filter(s=>!Jh(s)).reduce((s,i)=>s+(w1.test(i)?b1:i===""?S1:C1),o)}function N1(t,e){return t.length===e.length&&t.slice(0,-1).every((o,s)=>o===e[s])?t[t.length-1]-e[e.length-1]:0}function E1(t,e,r){let{routesMeta:o}=t,s={},i="/",l=[];for(let a=0;a<o.length;++a){let c=o[a],d=a===o.length-1,u=i==="/"?e:e.slice(i.length)||"/",h=A1({path:c.relativePath,caseSensitive:c.caseSensitive,end:d},u),f=c.route;if(!h)return null;Object.assign(s,h.params),l.push({params:s,pathname:zn([i,h.pathname]),pathnameBase:O1(zn([i,h.pathnameBase])),route:f}),h.pathnameBase!=="/"&&(i=zn([i,h.pathnameBase]))}return l}function A1(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[r,o]=I1(t.path,t.caseSensitive,t.end),s=e.match(r);if(!s)return null;let i=s[0],l=i.replace(/(.)\/+$/,"$1"),a=s.slice(1);return{params:o.reduce((d,u,h)=>{let{paramName:f,isOptional:p}=u;if(f==="*"){let y=a[h]||"";l=i.slice(0,i.length-y.length).replace(/(.)\/+$/,"$1")}const j=a[h];return p&&!j?d[f]=void 0:d[f]=(j||"").replace(/%2F/g,"/"),d},{}),pathname:i,pathnameBase:l,pattern:t}}function I1(t,e,r){e===void 0&&(e=!1),r===void 0&&(r=!0),Ex(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let o=[],s="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,a,c)=>(o.push({paramName:a,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(o.push({paramName:"*"}),s+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?s+="\\/*$":t!==""&&t!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),o]}function R1(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Ex(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Vd(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let r=e.endsWith("/")?e.length-1:e.length,o=t.charAt(r);return o&&o!=="/"?null:t.slice(r)||"/"}function M1(t,e){e===void 0&&(e="/");let{pathname:r,search:o="",hash:s=""}=typeof t=="string"?Po(t):t,i;return r?(r=_x(r),r.startsWith("/")?i=Kh(r.substring(1),"/"):i=Kh(r,e)):i=e,{pathname:i,search:L1(o),hash:D1(s)}}function Kh(t,e){let r=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(s=>{s===".."?r.length>1&&r.pop():s!=="."&&r.push(s)}),r.length>1?r.join("/"):"/"}function pa(t,e,r,o){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(o)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function _1(t){return t.filter((e,r)=>r===0||e.route.path&&e.route.path.length>0)}function Rx(t,e){let r=_1(t);return e?r.map((o,s)=>s===r.length-1?o.pathname:o.pathnameBase):r.map(o=>o.pathnameBase)}function Mx(t,e,r,o){o===void 0&&(o=!1);let s;typeof t=="string"?s=Po(t):(s=Ss({},t),ve(!s.pathname||!s.pathname.includes("?"),pa("?","pathname","search",s)),ve(!s.pathname||!s.pathname.includes("#"),pa("#","pathname","hash",s)),ve(!s.search||!s.search.includes("#"),pa("#","search","hash",s)));let i=t===""||s.pathname==="",l=i?"/":s.pathname,a;if(l==null)a=r;else{let h=e.length-1;if(!o&&l.startsWith("..")){let f=l.split("/");for(;f[0]==="..";)f.shift(),h-=1;s.pathname=f.join("/")}a=h>=0?e[h]:"/"}let c=M1(s,a),d=l&&l!=="/"&&l.endsWith("/"),u=(i||l===".")&&r.endsWith("/");return!c.pathname.endsWith("/")&&(d||u)&&(c.pathname+="/"),c}const _x=t=>t.replace(/\/\/+/g,"/"),zn=t=>_x(t.join("/")),O1=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),L1=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,D1=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function F1(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Ox=["post","put","patch","delete"];new Set(Ox);const B1=["get",...Ox];new Set(B1);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Cs(){return Cs=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)({}).hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},Cs.apply(null,arguments)}const qd=v.createContext(null),z1=v.createContext(null),Cr=v.createContext(null),El=v.createContext(null),Gn=v.createContext({outlet:null,matches:[],isDataRoute:!1}),Lx=v.createContext(null);function W1(t,e){let{relative:r}=e===void 0?{}:e;Ls()||ve(!1);let{basename:o,navigator:s}=v.useContext(Cr),{hash:i,pathname:l,search:a}=Fx(t,{relative:r}),c=l;return o!=="/"&&(c=l==="/"?o:zn([o,l])),s.createHref({pathname:c,search:a,hash:i})}function Ls(){return v.useContext(El)!=null}function Ds(){return Ls()||ve(!1),v.useContext(El).location}function Dx(t){v.useContext(Cr).static||v.useLayoutEffect(t)}function $1(){let{isDataRoute:t}=v.useContext(Gn);return t?nS():H1()}function H1(){Ls()||ve(!1);let t=v.useContext(qd),{basename:e,future:r,navigator:o}=v.useContext(Cr),{matches:s}=v.useContext(Gn),{pathname:i}=Ds(),l=JSON.stringify(Rx(s,r.v7_relativeSplatPath)),a=v.useRef(!1);return Dx(()=>{a.current=!0}),v.useCallback(function(d,u){if(u===void 0&&(u={}),!a.current)return;if(typeof d=="number"){o.go(d);return}let h=Mx(d,JSON.parse(l),i,u.relative==="path");t==null&&e!=="/"&&(h.pathname=h.pathname==="/"?e:zn([e,h.pathname])),(u.replace?o.replace:o.push)(h,u.state,u)},[e,o,l,i,t])}function U1(){let{matches:t}=v.useContext(Gn),e=t[t.length-1];return e?e.params:{}}function Fx(t,e){let{relative:r}=e===void 0?{}:e,{future:o}=v.useContext(Cr),{matches:s}=v.useContext(Gn),{pathname:i}=Ds(),l=JSON.stringify(Rx(s,o.v7_relativeSplatPath));return v.useMemo(()=>Mx(t,JSON.parse(l),i,r==="path"),[t,l,i,r])}function V1(t,e){return q1(t,e)}function q1(t,e,r,o){Ls()||ve(!1);let{navigator:s}=v.useContext(Cr),{matches:i}=v.useContext(Gn),l=i[i.length-1],a=l?l.params:{};l&&l.pathname;let c=l?l.pathnameBase:"/";l&&l.route;let d=Ds(),u;if(e){var h;let w=typeof e=="string"?Po(e):e;c==="/"||(h=w.pathname)!=null&&h.startsWith(c)||ve(!1),u=w}else u=d;let f=u.pathname||"/",p=f;if(c!=="/"){let w=c.replace(/^\//,"").split("/");p="/"+f.replace(/^\//,"").split("/").slice(w.length).join("/")}let j=v1(t,{pathname:p}),y=Y1(j&&j.map(w=>Object.assign({},w,{params:Object.assign({},a,w.params),pathname:zn([c,s.encodeLocation?s.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?c:zn([c,s.encodeLocation?s.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),i,r,o);return e&&y?v.createElement(El.Provider,{value:{location:Cs({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:In.Pop}},y):y}function J1(){let t=tS(),e=F1(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),r=t instanceof Error?t.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return v.createElement(v.Fragment,null,v.createElement("h2",null,"Unexpected Application Error!"),v.createElement("h3",{style:{fontStyle:"italic"}},e),r?v.createElement("pre",{style:s},r):null,null)}const K1=v.createElement(J1,null);class G1 extends v.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,r){return r.location!==e.location||r.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:r.error,location:r.location,revalidation:e.revalidation||r.revalidation}}componentDidCatch(e,r){console.error("React Router caught the following error during render",e,r)}render(){return this.state.error!==void 0?v.createElement(Gn.Provider,{value:this.props.routeContext},v.createElement(Lx.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Q1(t){let{routeContext:e,match:r,children:o}=t,s=v.useContext(qd);return s&&s.static&&s.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=r.route.id),v.createElement(Gn.Provider,{value:e},o)}function Y1(t,e,r,o){var s;if(e===void 0&&(e=[]),r===void 0&&(r=null),o===void 0&&(o=null),t==null){var i;if(!r)return null;if(r.errors)t=r.matches;else if((i=o)!=null&&i.v7_partialHydration&&e.length===0&&!r.initialized&&r.matches.length>0)t=r.matches;else return null}let l=t,a=(s=r)==null?void 0:s.errors;if(a!=null){let u=l.findIndex(h=>h.route.id&&(a==null?void 0:a[h.route.id])!==void 0);u>=0||ve(!1),l=l.slice(0,Math.min(l.length,u+1))}let c=!1,d=-1;if(r&&o&&o.v7_partialHydration)for(let u=0;u<l.length;u++){let h=l[u];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(d=u),h.route.id){let{loaderData:f,errors:p}=r,j=h.route.loader&&f[h.route.id]===void 0&&(!p||p[h.route.id]===void 0);if(h.route.lazy||j){c=!0,d>=0?l=l.slice(0,d+1):l=[l[0]];break}}}return l.reduceRight((u,h,f)=>{let p,j=!1,y=null,w=null;r&&(p=a&&h.route.id?a[h.route.id]:void 0,y=h.route.errorElement||K1,c&&(d<0&&f===0?(rS("route-fallback"),j=!0,w=null):d===f&&(j=!0,w=h.route.hydrateFallbackElement||null)));let g=e.concat(l.slice(0,f+1)),m=()=>{let x;return p?x=y:j?x=w:h.route.Component?x=v.createElement(h.route.Component,null):h.route.element?x=h.route.element:x=u,v.createElement(Q1,{match:h,routeContext:{outlet:u,matches:g,isDataRoute:r!=null},children:x})};return r&&(h.route.ErrorBoundary||h.route.errorElement||f===0)?v.createElement(G1,{location:r.location,revalidation:r.revalidation,component:y,error:p,children:m(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):m()},null)}var Bx=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Bx||{}),zx=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(zx||{});function X1(t){let e=v.useContext(qd);return e||ve(!1),e}function Z1(t){let e=v.useContext(z1);return e||ve(!1),e}function eS(t){let e=v.useContext(Gn);return e||ve(!1),e}function Wx(t){let e=eS(),r=e.matches[e.matches.length-1];return r.route.id||ve(!1),r.route.id}function tS(){var t;let e=v.useContext(Lx),r=Z1(),o=Wx();return e!==void 0?e:(t=r.errors)==null?void 0:t[o]}function nS(){let{router:t}=X1(Bx.UseNavigateStable),e=Wx(zx.UseNavigateStable),r=v.useRef(!1);return Dx(()=>{r.current=!0}),v.useCallback(function(s,i){i===void 0&&(i={}),r.current&&(typeof s=="number"?t.navigate(s):t.navigate(s,Cs({fromRouteId:e},i)))},[t,e])}const Gh={};function rS(t,e,r){Gh[t]||(Gh[t]=!0)}function oS(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function Ni(t){ve(!1)}function sS(t){let{basename:e="/",children:r=null,location:o,navigationType:s=In.Pop,navigator:i,static:l=!1,future:a}=t;Ls()&&ve(!1);let c=e.replace(/^\/*/,"/"),d=v.useMemo(()=>({basename:c,navigator:i,static:l,future:Cs({v7_relativeSplatPath:!1},a)}),[c,a,i,l]);typeof o=="string"&&(o=Po(o));let{pathname:u="/",search:h="",hash:f="",state:p=null,key:j="default"}=o,y=v.useMemo(()=>{let w=Vd(u,c);return w==null?null:{location:{pathname:w,search:h,hash:f,state:p,key:j},navigationType:s}},[c,u,h,f,p,j,s]);return y==null?null:v.createElement(Cr.Provider,{value:d},v.createElement(El.Provider,{children:r,value:y}))}function iS(t){let{children:e,location:r}=t;return V1(Cc(e),r)}new Promise(()=>{});function Cc(t,e){e===void 0&&(e=[]);let r=[];return v.Children.forEach(t,(o,s)=>{if(!v.isValidElement(o))return;let i=[...e,s];if(o.type===v.Fragment){r.push.apply(r,Cc(o.props.children,i));return}o.type!==Ni&&ve(!1),!o.props.index||!o.props.children||ve(!1);let l={id:o.props.id||i.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,loader:o.props.loader,action:o.props.action,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(l.children=Cc(o.props.children,i)),r.push(l)}),r}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Tc(){return Tc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)({}).hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},Tc.apply(null,arguments)}function lS(t,e){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(e.indexOf(o)!==-1)continue;r[o]=t[o]}return r}function aS(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function cS(t,e){return t.button===0&&(!e||e==="_self")&&!aS(t)}const dS=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],uS="6";try{window.__reactRouterVersion=uS}catch{}const hS="startTransition",Qh=As[hS];function pS(t){let{basename:e,children:r,future:o,window:s}=t,i=v.useRef();i.current==null&&(i.current=m1({window:s,v5Compat:!0}));let l=i.current,[a,c]=v.useState({action:l.action,location:l.location}),{v7_startTransition:d}=o||{},u=v.useCallback(h=>{d&&Qh?Qh(()=>c(h)):c(h)},[c,d]);return v.useLayoutEffect(()=>l.listen(u),[l,u]),v.useEffect(()=>oS(o),[o]),v.createElement(sS,{basename:e,children:r,location:a.location,navigationType:a.action,navigator:l,future:o})}const fS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",mS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Pc=v.forwardRef(function(e,r){let{onClick:o,relative:s,reloadDocument:i,replace:l,state:a,target:c,to:d,preventScrollReset:u,viewTransition:h}=e,f=lS(e,dS),{basename:p}=v.useContext(Cr),j,y=!1;if(typeof d=="string"&&mS.test(d)&&(j=d,fS))try{let x=new URL(window.location.href),b=d.startsWith("//")?new URL(x.protocol+d):new URL(d),k=Vd(b.pathname,p);b.origin===x.origin&&k!=null?d=k+b.search+b.hash:y=!0}catch{}let w=W1(d,{relative:s}),g=gS(d,{replace:l,state:a,target:c,preventScrollReset:u,relative:s,viewTransition:h});function m(x){o&&o(x),x.defaultPrevented||g(x)}return v.createElement("a",Tc({},f,{href:j||w,onClick:y||i?o:m,ref:r,target:c}))});var Yh;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Yh||(Yh={}));var Xh;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Xh||(Xh={}));function gS(t,e){let{target:r,replace:o,state:s,preventScrollReset:i,relative:l,viewTransition:a}=e===void 0?{}:e,c=$1(),d=Ds(),u=Fx(t,{relative:l});return v.useCallback(h=>{if(cS(h,r)){h.preventDefault();let f=o!==void 0?o:ol(d)===ol(u);c(t,{replace:f,state:s,preventScrollReset:i,relative:l,viewTransition:a})}},[d,c,u,o,s,r,t,i,l,a])}const xS=Rd("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function $x({className:t,variant:e,...r}){return n.jsx("div",{className:He(xS({variant:e}),t),...r})}const vS=()=>n.jsxs("section",{className:"relative overflow-hidden py-20 px-6",children:[n.jsx("div",{className:"absolute inset-0 gradient-hero opacity-10"}),n.jsxs("div",{className:"relative max-w-4xl mx-auto text-center animate-fade-in",children:[n.jsx("div",{className:"flex justify-center mb-6",children:n.jsx($x,{variant:"secondary",className:"px-4 py-2 text-sm font-medium",children:"Developer Blog"})}),n.jsx("h1",{className:"font-playfair text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight",children:"Namita Malik"}),n.jsxs("div",{className:"flex items-center justify-center gap-6 text-xl text-muted-foreground mb-8 font-medium",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx(Bw,{className:"h-5 w-5 text-primary"}),n.jsx("span",{children:"Learn."})]}),n.jsx("div",{className:"w-1 h-1 bg-muted-foreground rounded-full"}),n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx(Jw,{className:"h-5 w-5 text-primary"}),n.jsx("span",{children:"Think."})]}),n.jsx("div",{className:"w-1 h-1 bg-muted-foreground rounded-full"}),n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx(Gw,{className:"h-5 w-5 text-primary"}),n.jsx("span",{children:"Engineer."})]}),n.jsx("div",{className:"w-1 h-1 bg-muted-foreground rounded-full"}),n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx(Bg,{className:"h-5 w-5 text-primary"}),n.jsx("span",{children:"Share."})]})]}),n.jsx("p",{className:"text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8",children:"Writing about software engineering, architecture, systems thinking, and modern web development."}),n.jsxs("div",{className:"flex items-center justify-center gap-6",children:[n.jsx("a",{href:"https://github.com/namitamalik",target:"_blank",rel:"noopener noreferrer",className:"p-3 rounded-full border border-border/50 hover:border-primary/50 hover:bg-accent/10 transition-smooth group","aria-label":"GitHub Profile",children:n.jsx(Dg,{className:"h-5 w-5 text-muted-foreground group-hover:text-primary transition-smooth"})}),n.jsx("a",{href:"https://twitter.com/nm_1304",target:"_blank",rel:"noopener noreferrer",className:"p-3 rounded-full border border-border/50 hover:border-primary/50 hover:bg-accent/10 transition-smooth group","aria-label":"Twitter Profile",children:n.jsx(zg,{className:"h-5 w-5 text-muted-foreground group-hover:text-primary transition-smooth"})}),n.jsx("a",{href:"https://linkedin.com/in/namitamalik",target:"_blank",rel:"noopener noreferrer",className:"p-3 rounded-full border border-border/50 hover:border-primary/50 hover:bg-accent/10 transition-smooth group","aria-label":"LinkedIn Profile",children:n.jsx(Fg,{className:"h-5 w-5 text-muted-foreground group-hover:text-primary transition-smooth"})})]})]})]}),Hx=v.forwardRef(({className:t,...e},r)=>n.jsx("div",{ref:r,className:He("rounded-lg border bg-card text-card-foreground shadow-sm",t),...e}));Hx.displayName="Card";const Ux=v.forwardRef(({className:t,...e},r)=>n.jsx("div",{ref:r,className:He("flex flex-col space-y-1.5 p-6",t),...e}));Ux.displayName="CardHeader";const Vx=v.forwardRef(({className:t,...e},r)=>n.jsx("h3",{ref:r,className:He("text-2xl font-semibold leading-none tracking-tight",t),...e}));Vx.displayName="CardTitle";const yS=v.forwardRef(({className:t,...e},r)=>n.jsx("p",{ref:r,className:He("text-sm text-muted-foreground",t),...e}));yS.displayName="CardDescription";const qx=v.forwardRef(({className:t,...e},r)=>n.jsx("div",{ref:r,className:He("p-6 pt-0",t),...e}));qx.displayName="CardContent";const jS=v.forwardRef(({className:t,...e},r)=>n.jsx("div",{ref:r,className:He("flex items-center p-6 pt-0",t),...e}));jS.displayName="CardFooter";const wS=({category:t,posts:e,icon:r,description:o})=>n.jsxs(Hx,{className:"gradient-card shadow-card transition-smooth hover:shadow-elegant hover:scale-[1.02] group",children:[n.jsxs(Ux,{className:"pb-4",children:[n.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[r&&n.jsx("div",{className:"text-primary",children:r}),n.jsx(Vx,{className:"font-playfair text-xl text-primary group-hover:text-accent transition-smooth",children:t})]}),o&&n.jsx("p",{className:"text-muted-foreground text-sm leading-relaxed",children:o}),n.jsxs($x,{variant:"secondary",className:"w-fit",children:[e.length," ",e.length===1?"post":"posts"]})]}),n.jsx(qx,{className:"space-y-3",children:e.map((s,i)=>s.url.startsWith("http")?n.jsxs("a",{href:s.url,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 p-3 rounded-lg border border-border/50 hover:border-primary/30 hover:bg-accent/10 transition-smooth group/link",children:[n.jsx("div",{className:"flex-1",children:n.jsx("h4",{className:"font-medium text-sm leading-snug text-foreground group-hover/link:text-primary transition-smooth",children:s.title})}),n.jsx(Hw,{className:"h-4 w-4 text-muted-foreground group-hover/link:text-primary transition-smooth"})]},i):n.jsxs(Pc,{to:s.url,className:"flex items-center gap-2 p-3 rounded-lg border border-border/50 hover:border-primary/30 hover:bg-accent/10 transition-smooth group/link",children:[n.jsx("div",{className:"flex-1",children:n.jsx("h4",{className:"font-medium text-sm leading-snug text-foreground group-hover/link:text-primary transition-smooth",children:s.title})}),n.jsx(Fw,{className:"h-4 w-4 text-muted-foreground group-hover/link:text-primary transition-smooth"})]},i))})]}),bS=()=>{const t=[{category:"Leadership",icon:n.jsx(Vw,{className:"h-6 w-6"}),description:"Reflections on leadership, culture, and the people who shape how we work.",posts:[{title:"Kindness, Firmness, and the Safety to Make Mistakes",url:"/kindness-firmness-and-the-safety-to-make-mistakes/",category:"Leadership"}]},{category:"AI & Engineering",icon:n.jsx(zw,{className:"h-6 w-6"}),description:"Reflections on AI, software engineering practice, and the craft beyond coding.",posts:[{title:"AI Solved Execution. Coordination Is the Next Bottleneck.",url:"/ai-solved-execution-coordination-is-the-next-bottleneck/",category:"AI & Engineering"},{title:"AI Killed Coding, Not Software Engineering",url:"/ai-killed-coding-not-software-engineering/",category:"AI & Engineering"}]},{category:"RxJS",icon:n.jsx(Yw,{className:"h-6 w-6"}),description:"Reactive programming with RxJS - operators, patterns, and real-world applications.",posts:[{title:"skipWhile vs filter in RxJS",url:"/skipwhile-vs-filter-in-rxjs/",category:"RxJS"},{title:"throttleTime vs debounceTime",url:"/throttletime-vs-debouncetime-in-rxjs/",category:"RxJS"},{title:"Map vs FlatMap",url:"/map-vs-flatmap/",category:"RxJS"}]},{category:"Angular",icon:n.jsx(qw,{className:"h-6 w-6"}),description:"Modern Angular development patterns, best practices, and advanced techniques.",posts:[{title:"Conditionally Loading modules in Angular",url:"/loading-modules-conditionally-in-angular/",category:"Angular(2+)"},{title:"Lazy Loading with Angular2 Routing",url:"/lazy-loading-with-angular2-routing/",category:"Angular(2+)"},{title:"Realtime Update in Angular2",url:"/realtime-update-in-angular2/",category:"Angular(2+)"},{title:"Fetching Data in Angular2",url:"/fetching-data-in-angular2/",category:"Angular(2+)"},{title:"ViewChild in Angular2",url:"/viewchild-in-angular2/",category:"Angular(2+)"},{title:"Services In Angular2",url:"/services-in-angular2/",category:"Angular(2+)"},{title:"NgRepeat vs ngFor",url:"/ngrepeat-vs-ngfor/",category:"Angular(2+)"}]},{category:"JavaScript (ES6+)",icon:n.jsx(Uw,{className:"h-6 w-6"}),description:"Modern JavaScript features, ES6+ syntax, and functional programming concepts.",posts:[{title:"Spread & Rest Operator in ES6",url:"/spread-and-rest-operator-in-es6/",category:"ECMA6"},{title:"for..of loop in ES6",url:"/for-of-in-ecma6/",category:"ECMA6"}]},{category:"JavaScript Fundamentals",icon:n.jsx(Ww,{className:"h-6 w-6"}),description:"Core JavaScript concepts, prototypes, inheritance, and fundamental patterns.",posts:[{title:"Prototype in Javascript",url:"/prototype-in-javascript/",category:"JavaScript"},{title:"Inheritance in JavaScript",url:"/inheritance-in-javascript/",category:"JavaScript"},{title:"JavaScript Inheritance Revisited",url:"/javascript-inheritance-revisited/",category:"JavaScript"},{title:"2 Way Data Binding in Plain Vanilla JavaScript",url:"/2-way-data-binding-in-plain-vanilla-javascript/",category:"JavaScript"},{title:"Hoisting in JavaScript",url:"/hoisting/",category:"JavaScript"}]},{category:"Data Structures",icon:n.jsx($w,{className:"h-6 w-6"}),description:"Implementation of fundamental data structures and algorithms in JavaScript.",posts:[{title:"Linked List in Javascript",url:"/linked-list-in-javascript/",category:"Data Structures"}]},{category:"AngularJS (Legacy)",icon:n.jsx(Kw,{className:"h-6 w-6"}),description:"AngularJS 1.x patterns, testing strategies, and migration insights.",posts:[{title:"Editing JavaScript Object using AngularJS",url:"/editing-javascript-object-using-angularjs/",category:"AngularJS"},{title:"E2E Testing with Protractor",url:"/e2e-testing-with-protractor/",category:"AngularJS"}]}];return n.jsxs("div",{className:"min-h-screen bg-background",children:[n.jsx(vS,{}),n.jsxs("main",{className:"max-w-7xl mx-auto px-6 pb-20",children:[n.jsxs("div",{className:"text-center mb-12 animate-slide-up",children:[n.jsx("h2",{className:"font-playfair text-3xl font-bold text-foreground mb-4",children:"Blog Categories"}),n.jsx("p",{className:"text-muted-foreground max-w-2xl mx-auto",children:"Explore articles organized by technology and topic. Click on any post to read more."})]}),n.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-up",children:t.map((e,r)=>n.jsx("div",{style:{animationDelay:`${r*.1}s`},className:"animate-slide-up",children:n.jsx(wS,{category:e.category,posts:e.posts,icon:e.icon,description:e.description})},e.category))})]})]})},kS=()=>{const t=Ds();return v.useEffect(()=>{console.error("404 Error: User attempted to access non-existent route:",t.pathname)},[t.pathname]),n.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-100",children:n.jsxs("div",{className:"text-center",children:[n.jsx("h1",{className:"text-4xl font-bold mb-4",children:"404"}),n.jsx("p",{className:"text-xl text-gray-600 mb-4",children:"Oops! Page not found"}),n.jsx("a",{href:"/",className:"text-blue-500 hover:text-blue-700 underline",children:"Return to Home"})]})})};function Zh(t){const e={code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"2 Way Data Binding in Plain Vanilla JavaScript"}),`
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
`,n.jsxs(e.p,{children:["| Please note that this is just a small piece of code demonstrating ",n.jsx(e.strong,{children:"2-way Data Binding"})," using ",n.jsx(e.strong,{children:"JavaScript"})," this code can be improved a lot on the basis of element type.e We can also have a ",n.jsx(e.strong,{children:"getter"})," function for getting the value in ",n.jsx(e.code,{children:"$scope.name"}),". But for the sake of simplicity I have deliberately avoided it."]})]})}function SS(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Zh,{...t})}):Zh(t)}const CS=Object.freeze(Object.defineProperty({__proto__:null,default:SS},Symbol.toStringTag,{value:"Module"})),TS="/assets/ai-spaghetti-code-BFOTqgC_.png";function ep(t){const e={em:"em",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"AI Killed Coding, Not Software Engineering"}),`
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
`,n.jsxs("figure",{className:"my-8",children:[n.jsx("img",{src:TS,alt:"Cartoon of a developer cheering 'Ship it!' as an AI assistant dumps a bucket of spaghetti code onto the desk, surrounded by sticky notes warning about skipped tests, security, and documentation.",className:"w-full rounded-lg shadow-lg",loading:"lazy"}),n.jsx("figcaption",{className:"text-center text-sm text-muted-foreground mt-2 italic",children:n.jsx(e.p,{children:"AI writes the code. You own the consequences."})})]}),`
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
`,n.jsx(e.p,{children:n.jsx(e.em,{children:"But if there’s one consistent pattern, it’s this — we adapt. Messily, imperfectly, but we do."})})]})}function PS(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(ep,{...t})}):ep(t)}const NS=Object.freeze(Object.defineProperty({__proto__:null,default:PS},Symbol.toStringTag,{value:"Module"}));function tp(t){const e={blockquote:"blockquote",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"AI Solved Execution. Coordination Is the Next Bottleneck."}),`
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
`,n.jsx(e.p,{children:"Coordination is the next frontier."})]})}function ES(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(tp,{...t})}):tp(t)}const AS=Object.freeze(Object.defineProperty({__proto__:null,default:ES},Symbol.toStringTag,{value:"Module"}));function np(t){const e={blockquote:"blockquote",code:"code",h1:"h1",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"E2E Testing with Protractor"}),`
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
`,n.jsxs(e.p,{children:["In case you want to play with multiple elements, you can use ",n.jsx(e.code,{children:"element.all()"}),". There are certain helper ",n.jsx(e.strong,{children:"functions"}),":",n.jsx(e.code,{children:"count()"})," - which gives the number of elements, ",n.jsx(e.code,{children:"getIndex()"})," - to get an element using index."]})]})}function IS(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(np,{...t})}):np(t)}const RS=Object.freeze(Object.defineProperty({__proto__:null,default:IS},Symbol.toStringTag,{value:"Module"}));function rp(t){const e={code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Editing JavaScript Object using AngularJS"}),`
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
`]})]})}function MS(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(rp,{...t})}):rp(t)}const _S=Object.freeze(Object.defineProperty({__proto__:null,default:MS},Symbol.toStringTag,{value:"Module"}));function op(t){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Fetching Data in Angular2"}),`
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
`})})]})}function OS(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(op,{...t})}):op(t)}const LS=Object.freeze(Object.defineProperty({__proto__:null,default:OS},Symbol.toStringTag,{value:"Module"}));function sp(t){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"for..of loop in ECMA6"}),`
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
`,n.jsxs(e.p,{children:["A working demo is available ",n.jsx(e.a,{href:"https://repl.it/@namitamalik/SeagreenLoathsomeAustralianshelduck",children:"here"}),"."]})]})}function DS(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(sp,{...t})}):sp(t)}const FS=Object.freeze(Object.defineProperty({__proto__:null,default:DS},Symbol.toStringTag,{value:"Module"}));function ip(t){const e={code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Hoisting in JavaScript"}),`
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
`,n.jsxs(e.p,{children:["This was all about ",n.jsx(e.strong,{children:"Hoisting"})," in ",n.jsx(e.strong,{children:"JavaScript"}),"."]})]})}function BS(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(ip,{...t})}):ip(t)}const zS=Object.freeze(Object.defineProperty({__proto__:null,default:BS},Symbol.toStringTag,{value:"Module"}));function lp(t){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Inheritance in JavaScript"}),`
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
`,n.jsxs(e.p,{children:["We are a little unfortunate that we don't have the ",n.jsx(e.strong,{children:"extend"})," keyword in ",n.jsx(e.strong,{children:"JavaScript"})," as available in ",n.jsx(e.strong,{children:"Java"}),", but we aren't that ",n.jsx(e.strong,{children:"unlucky"})," as we have ",n.jsx(e.strong,{children:n.jsx(e.a,{href:"http://namitamalik.github.io/Prototype-in-JavaScript/",children:"prototype"})})," to our rescue!"]})]})}function WS(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(lp,{...t})}):lp(t)}const $S=Object.freeze(Object.defineProperty({__proto__:null,default:WS},Symbol.toStringTag,{value:"Module"}));function ap(t){const e={a:"a",blockquote:"blockquote",code:"code",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.p,{children:"#JavaScript Inheritance Revisited"}),`
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
`,n.jsx(e.p,{children:"There are a lot of ways to achieve a single thing, but it depends upon the need of the project and the situation that one can decide which way to adopt!"})]})}function HS(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(ap,{...t})}):ap(t)}const US=Object.freeze(Object.defineProperty({__proto__:null,default:HS},Symbol.toStringTag,{value:"Module"}));function cp(t){const e={em:"em",h1:"h1",p:"p",strong:"strong",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Kindness, Firmness, and the Safety to Make Mistakes"}),`
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
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Kindness that creates safety. Firmness that upholds standards. Leadership that makes it possible to own a mistake and learn from it."})})]})}function VS(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(cp,{...t})}):cp(t)}const qS=Object.freeze(Object.defineProperty({__proto__:null,default:VS},Symbol.toStringTag,{value:"Module"}));function dp(t){const e={blockquote:"blockquote",code:"code",h1:"h1",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Lazy Loading with Angular2 Routing"}),`
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
I'll be discussing in my upcoming blog..till then Happy Learning!`]})]})}function JS(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(dp,{...t})}):dp(t)}const KS=Object.freeze(Object.defineProperty({__proto__:null,default:JS},Symbol.toStringTag,{value:"Module"}));function up(t){const e={blockquote:"blockquote",code:"code",h1:"h1",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Linked List in Javascript"}),`
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
linked list printed which has `,n.jsx(e.code,{children:"6"})," removed from it as we have called ",n.jsx(e.code,{children:"deQueue"})," function to remove node with data/value ",n.jsx(e.code,{children:"6"})," in it."]})]})}function GS(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(up,{...t})}):up(t)}const QS=Object.freeze(Object.defineProperty({__proto__:null,default:GS},Symbol.toStringTag,{value:"Module"}));function hp(t){const e={code:"code",h1:"h1",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Loading Modules Conditionally in Angular"}),`
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
`,n.jsx(e.p,{children:"Well, that's all for this post. Happy Learning!"})]})}function YS(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(hp,{...t})}):hp(t)}const XS=Object.freeze(Object.defineProperty({__proto__:null,default:YS},Symbol.toStringTag,{value:"Module"}));function pp(t){const e={code:"code",h1:"h1",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Map VS FlatMap"}),`
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
voyage will take us to each one of them.. till then happy learning!`]})]})}function ZS(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(pp,{...t})}):pp(t)}const eC=Object.freeze(Object.defineProperty({__proto__:null,default:ZS},Symbol.toStringTag,{value:"Module"}));function fp(t){const e={blockquote:"blockquote",code:"code",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.p,{children:"#*ngFor in Angular2"}),`
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
`,n.jsxs(e.p,{children:["Now, run open ",n.jsx(e.strong,{children:"index.html"})," in your favourite browser!"]})]})}function tC(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(fp,{...t})}):fp(t)}const nC=Object.freeze(Object.defineProperty({__proto__:null,default:tC},Symbol.toStringTag,{value:"Module"}));function mp(t){const e={code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Prototype in JavaScript"}),`
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
`,n.jsxs(e.p,{children:["This is how ",n.jsx(e.strong,{children:"JavaScript"})," is a ",n.jsx(e.strong,{children:"Dynamic"})," language, we tweaked a well defined ",n.jsx(e.strong,{children:"JavaScript"})," object according to our own sweet wish!"]})]})}function rC(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(mp,{...t})}):mp(t)}const oC=Object.freeze(Object.defineProperty({__proto__:null,default:rC},Symbol.toStringTag,{value:"Module"}));function gp(t){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Realtime Update in Angular2"}),`
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
`]})]})}function sC(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(gp,{...t})}):gp(t)}const iC=Object.freeze(Object.defineProperty({__proto__:null,default:sC},Symbol.toStringTag,{value:"Module"}));function xp(t){const e={blockquote:"blockquote",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Services In Angular2"}),`
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
`,n.jsxs(e.p,{children:["Hence, this is the major difference between the services in ",n.jsx(e.strong,{children:"Angular 1.x and Angular2"}),"."]})]})}function lC(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(xp,{...t})}):xp(t)}const aC=Object.freeze(Object.defineProperty({__proto__:null,default:lC},Symbol.toStringTag,{value:"Module"}));function vp(t){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"skipWhile vs filter in RxJS"}),`
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
`,n.jsx(e.p,{children:"Happy Learning! Happy Sharing!"})]})}function cC(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(vp,{...t})}):vp(t)}const dC=Object.freeze(Object.defineProperty({__proto__:null,default:cC},Symbol.toStringTag,{value:"Module"}));function yp(t){const e={blockquote:"blockquote",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Spread and Rest Operator in ES6"}),`
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
`,n.jsx(e.p,{children:"That's all for this blog. Happy Learning folks!"})]})}function uC(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(yp,{...t})}):yp(t)}const hC=Object.freeze(Object.defineProperty({__proto__:null,default:uC},Symbol.toStringTag,{value:"Module"}));function jp(t){const e={a:"a",code:"code",em:"em",h1:"h1",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"throttleTime vs debounceTime in RxJS"}),`
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
to use!`})]})}function pC(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(jp,{...t})}):jp(t)}const fC=Object.freeze(Object.defineProperty({__proto__:null,default:pC},Symbol.toStringTag,{value:"Module"}));function wp(t){const e={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Dear Future Me: Understand the Layers Before You Add Them"}),`
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
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"What becomes simpler because of this?"})})]})}function mC(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(wp,{...t})}):wp(t)}const gC=Object.freeze(Object.defineProperty({__proto__:null,default:mC},Symbol.toStringTag,{value:"Module"}));function bp(t){const e={code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"ViewChild in Angular2"}),`
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
`,n.jsxs(e.p,{children:["In ",n.jsx(e.strong,{children:"Angular2"})," there are multiple ways of interaction between ",n.jsx(e.strong,{children:"components"}),", ",n.jsx(e.strong,{children:"ViewChild"})," is just one of them!"]})]})}function xC(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(bp,{...t})}):bp(t)}const vC=Object.freeze(Object.defineProperty({__proto__:null,default:xC},Symbol.toStringTag,{value:"Module"})),yC=Rd("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),Jx=v.forwardRef(({className:t,variant:e,size:r,asChild:o=!1,...s},i)=>{const l=o?$j:"button";return n.jsx(l,{className:He(yC({variant:e,size:r,className:t})),ref:i,...s})});Jx.displayName="Button";const jC={"kindness-firmness-and-the-leaders-we-remember":{title:"Kindness, Firmness, and the Leaders We Remember",description:"Reflections on leadership: how kindness paired with firmness, presence, and accountability shapes teams, careers, and the leaders we never forget.",keywords:"leadership, kindness, firmness, mentorship, accountability, psychological safety, engineering management"},"kindness-firmness-and-the-safety-to-make-mistakes":{title:"Kindness, Firmness, and the Safety to Make Mistakes",description:"Reflections on leadership: how kindness paired with firmness, presence, and accountability shapes teams, careers, and the leaders we never forget.",keywords:"leadership, kindness, firmness, mentorship, accountability, psychological safety, engineering management"},"ai-solved-execution-coordination-is-the-next-bottleneck":{title:"AI Solved Execution. Coordination Is the Next Bottleneck.",description:"AI is rapidly solving software execution, but coordination — the real bottleneck in enterprise engineering — still runs on meetings, Jira, and human memory. Why the next frontier is AI orchestration.",keywords:"AI orchestration, software delivery, coordination, enterprise engineering, execution, agentic AI, developer productivity"},"ai-killed-coding-not-software-engineering":{title:"AI Killed Coding, Not Software Engineering",description:"Why AI-generated code raises the bar for software engineering — judgment, architecture, and ownership matter more than ever.",keywords:"AI, software engineering, coding, architecture, developer productivity",image:"https://namitamalik.github.io/ai-spaghetti-code.png"},"understand-the-layers-before-you-add-them":{title:"Understand the Layers Before You Add Them",description:"A practical take on software architecture: understand existing layers and their purpose before introducing new abstractions.",keywords:"software architecture, layers, abstraction, design"}},wC=jC,fa={title:"Namita Malik - Developer Blog",description:"Learn. Think. Engineer. Share. - A technical blog covering Angular, JavaScript, RxJS and web development."},bC=Object.assign({"../posts/2-way-data-binding-in-plain-vanilla-javascript.mdx":CS,"../posts/ai-killed-coding-not-software-engineering.mdx":NS,"../posts/ai-solved-execution-coordination-is-the-next-bottleneck.mdx":AS,"../posts/e2e-testing-with-protractor.mdx":RS,"../posts/editing-javascript-object-using-angularjs.mdx":_S,"../posts/fetching-data-in-angular2.mdx":LS,"../posts/for-of-in-ecma6.mdx":FS,"../posts/hoisting.mdx":zS,"../posts/inheritance-in-javascript.mdx":$S,"../posts/javascript-inheritance-revisited.mdx":US,"../posts/kindness-firmness-and-the-safety-to-make-mistakes.mdx":qS,"../posts/lazy-loading-with-angular2-routing.mdx":KS,"../posts/linked-list-in-javascript.mdx":QS,"../posts/loading-modules-conditionally-in-angular.mdx":XS,"../posts/map-vs-flatmap.mdx":eC,"../posts/ngrepeat-vs-ngfor.mdx":nC,"../posts/prototype-in-javascript.mdx":oC,"../posts/realtime-update-in-angular2.mdx":iC,"../posts/services-in-angular2.mdx":aC,"../posts/skipwhile-vs-filter-in-rxjs.mdx":dC,"../posts/spread-and-rest-operator-in-es6.mdx":hC,"../posts/throttletime-vs-debouncetime-in-rxjs.mdx":fC,"../posts/understand-the-layers-before-you-add-them.mdx":gC,"../posts/viewchild-in-angular2.mdx":vC});function lt(t,e,r){let o=document.head.querySelector(`meta[${t}="${e}"]`);o||(o=document.createElement("meta"),o.setAttribute(t,e),document.head.appendChild(o)),o.setAttribute("content",r)}function kC(t){let e=document.head.querySelector('link[rel="canonical"]');e||(e=document.createElement("link"),e.setAttribute("rel","canonical"),document.head.appendChild(e)),e.setAttribute("href",t)}function SC(){const{slug:t}=U1(),e=`../posts/${t}.mdx`,r=bC[e];if(v.useEffect(()=>{const s=t&&wC[t]||fa,i=s.title.includes("Namita Malik")?s.title:`${s.title} | Namita Malik`;return document.title=i,lt("name","description",s.description),s.keywords&&lt("name","keywords",s.keywords),lt("property","og:title",i),lt("property","og:description",s.description),lt("property","og:type","article"),lt("property","og:url",window.location.href),s.image&&(lt("property","og:image",s.image),lt("name","twitter:image",s.image)),lt("name","twitter:card","summary_large_image"),lt("name","twitter:title",i),lt("name","twitter:description",s.description),kC(window.location.href),()=>{document.title=fa.title,lt("name","description",fa.description)}},[t]),!r)return n.jsx("div",{className:"min-h-screen bg-gradient-subtle flex items-center justify-center",children:n.jsxs("div",{className:"text-center",children:[n.jsx("h1",{className:"text-2xl font-bold text-foreground mb-4",children:"Post not found"}),n.jsx("p",{className:"text-muted-foreground mb-6",children:"The blog post you're looking for doesn't exist."}),n.jsx(Pc,{to:"/",children:n.jsxs(Jx,{variant:"default",children:[n.jsx(vh,{className:"mr-2 h-4 w-4"}),"Back to Blog"]})})]})});const o=r.default;return n.jsx("div",{className:"min-h-screen bg-gradient-subtle",children:n.jsxs("div",{className:"container mx-auto px-4 py-8 max-w-4xl",children:[n.jsxs(Pc,{to:"/",className:"inline-flex items-center text-primary hover:text-accent transition-smooth mb-8",children:[n.jsx(vh,{className:"mr-2 h-4 w-4"}),"Back to Blog"]}),n.jsx("div",{className:"text-center mb-8 pb-4 border-b border-border/10",children:n.jsxs("p",{className:"text-muted-foreground text-sm",children:["by ",n.jsx("span",{className:"font-medium text-foreground",children:"Namita Malik"})]})}),n.jsx("article",{className:`prose prose-lg max-w-none mb-16
  prose-headings:text-foreground prose-headings:font-playfair
  prose-h1:text-4xl prose-h1:md:text-5xl prose-h1:font-bold prose-h1:mb-8 prose-h1:pb-6 prose-h1:border-b prose-h1:border-border/30 prose-h1:text-center
  prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:font-semibold prose-h2:mt-8 prose-h2:mb-4
  prose-h3:text-xl prose-h3:md:text-2xl prose-h3:font-medium prose-h3:mt-6 prose-h3:mb-3
  prose-p:text-foreground prose-p:leading-relaxed prose-p:mb-4
  prose-a:text-primary prose-a:no-underline hover:prose-a:text-accent
  prose-blockquote:border-l-primary prose-blockquote:text-muted-foreground
  prose-strong:text-foreground prose-em:text-foreground
  prose-ul:my-4 prose-ol:my-4 prose-li:my-1 prose-code:before:content-none prose-code:after:content-none`,children:n.jsx(o,{})}),n.jsxs("div",{className:"text-center pt-8 border-t border-border/20",children:[n.jsx("p",{className:"text-muted-foreground text-sm mb-4",children:"Connect with me"}),n.jsxs("div",{className:"flex items-center justify-center gap-4",children:[n.jsx("a",{href:"https://github.com/namitamalik",target:"_blank",rel:"noopener noreferrer",className:"p-2 rounded-full hover:bg-accent/10 transition-smooth group","aria-label":"GitHub Profile",children:n.jsx(Dg,{className:"h-5 w-5 text-muted-foreground group-hover:text-primary transition-smooth"})}),n.jsx("a",{href:"https://x.com/nm_1304",target:"_blank",rel:"noopener noreferrer",className:"p-2 rounded-full hover:bg-accent/10 transition-smooth group","aria-label":"Twitter Profile",children:n.jsx(zg,{className:"h-5 w-5 text-muted-foreground group-hover:text-primary transition-smooth"})}),n.jsx("a",{href:"https://linkedin.com/in/namitamalik",target:"_blank",rel:"noopener noreferrer",className:"p-2 rounded-full hover:bg-accent/10 transition-smooth group","aria-label":"LinkedIn Profile",children:n.jsx(Fg,{className:"h-5 w-5 text-muted-foreground group-hover:text-primary transition-smooth"})}),n.jsx("button",{onClick:()=>{var s;return(s=navigator.share)==null?void 0:s.call(navigator,{url:window.location.href,title:document.title})},className:"p-2 rounded-full hover:bg-accent/10 transition-smooth group","aria-label":"Share this post",children:n.jsx(Bg,{className:"h-5 w-5 text-muted-foreground group-hover:text-primary transition-smooth"})})]})]})]})})}const CC=new f1,TC=()=>n.jsx(zk,{client:CC,children:n.jsxs(Dk,{children:[n.jsx(Mb,{}),n.jsx(u0,{}),n.jsx(pS,{children:n.jsxs(iS,{children:[n.jsx(Ni,{path:"/",element:n.jsx(bS,{})}),n.jsx(Ni,{path:"/:slug",element:n.jsx(SC,{})}),n.jsx(Ni,{path:"*",element:n.jsx(kS,{})})]})})]})});qm(document.getElementById("root")).render(n.jsx(TC,{}));
