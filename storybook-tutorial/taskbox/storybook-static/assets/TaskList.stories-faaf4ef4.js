var Ot=Object.defineProperty;var Pt=(e,t,r)=>t in e?Ot(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var fe=(e,t,r)=>(Pt(e,typeof t!="symbol"?t+"":t,r),r);import{j as Q,a as E}from"./jsx-runtime-03b4ddbf.js";import{r as At,a as Oe,R as Dt}from"./index-76fb7be0.js";import{T as Mt,D as L}from"./Task.stories-eace4ce1.js";var st={exports:{}},it={};/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Y=At;function Nt(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var jt=typeof Object.is=="function"?Object.is:Nt,It=Y.useSyncExternalStore,zt=Y.useRef,Ft=Y.useEffect,Lt=Y.useMemo,$t=Y.useDebugValue;it.useSyncExternalStoreWithSelector=function(e,t,r,n,s){var i=zt(null);if(i.current===null){var o={hasValue:!1,value:null};i.current=o}else o=i.current;i=Lt(function(){function a(y){if(!f){if(f=!0,u=y,y=n(y),s!==void 0&&o.hasValue){var p=o.value;if(s(p,y))return l=p}return l=y}if(p=l,jt(u,y))return p;var _=n(y);return s!==void 0&&s(p,_)?p:(u=y,l=_)}var f=!1,u,l,d=r===void 0?null:r;return[function(){return a(t())},d===null?void 0:function(){return a(d())}]},[t,r,n,s]);var c=It(e,i[0],i[1]);return Ft(function(){o.hasValue=!0,o.value=c},[c]),$t(c),c};st.exports=it;var Wt=st.exports,x="default"in Oe?Dt:Oe,Pe=Symbol.for("react-redux-context"),Ae=typeof globalThis<"u"?globalThis:{};function Bt(){if(!x.createContext)return{};const e=Ae[Pe]??(Ae[Pe]=new Map);let t=e.get(x.createContext);return t||(t=x.createContext(null),e.set(x.createContext,t)),t}var j=Bt(),Kt=()=>{throw new Error("uSES not initialized!")};function ve(e=j){return function(){return x.useContext(e)}}var ot=ve(),ct=Kt,Ut=e=>{ct=e},qt=(e,t)=>e===t;function Vt(e=j){const t=e===j?ot:ve(e),r=(n,s={})=>{const{equalityFn:i=qt,devModeChecks:o={}}=typeof s=="function"?{equalityFn:s}:s,{store:c,subscription:a,getServerState:f,stabilityCheck:u,identityFunctionCheck:l}=t();x.useRef(!0);const d=x.useCallback({[n.name](p){return n(p)}}[n.name],[n,u,o.stabilityCheck]),y=ct(a.addNestedSub,c.getState,f||c.getState,d,i);return x.useDebugValue(y),y};return Object.assign(r,{withTypes:()=>r}),r}var De=Vt();function Ht(e){e()}function Xt(){let e=null,t=null;return{clear(){e=null,t=null},notify(){Ht(()=>{let r=e;for(;r;)r.callback(),r=r.next})},get(){const r=[];let n=e;for(;n;)r.push(n),n=n.next;return r},subscribe(r){let n=!0;const s=t={callback:r,next:null,prev:t};return s.prev?s.prev.next=s:e=s,function(){!n||e===null||(n=!1,s.next?s.next.prev=s.prev:t=s.prev,s.prev?s.prev.next=s.next:e=s.next)}}}}var Me={notify(){},get:()=>[]};function Gt(e,t){let r,n=Me,s=0,i=!1;function o(_){u();const h=n.subscribe(_);let g=!1;return()=>{g||(g=!0,h(),l())}}function c(){n.notify()}function a(){p.onStateChange&&p.onStateChange()}function f(){return i}function u(){s++,r||(r=t?t.addNestedSub(a):e.subscribe(a),n=Xt())}function l(){s--,r&&s===0&&(r(),r=void 0,n.clear(),n=Me)}function d(){i||(i=!0,u())}function y(){i&&(i=!1,l())}const p={addNestedSub:o,notifyNestedSubs:c,handleChangeWrapper:a,isSubscribed:f,trySubscribe:d,tryUnsubscribe:y,getListeners:()=>n};return p}var Yt=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Qt=Yt?x.useLayoutEffect:x.useEffect;function Jt({store:e,context:t,children:r,serverState:n,stabilityCheck:s="once",identityFunctionCheck:i="once"}){const o=x.useMemo(()=>{const f=Gt(e);return{store:e,subscription:f,getServerState:n?()=>n:void 0,stabilityCheck:s,identityFunctionCheck:i}},[e,n,s,i]),c=x.useMemo(()=>e.getState(),[e]);Qt(()=>{const{subscription:f}=o;return f.onStateChange=f.notifyNestedSubs,f.trySubscribe(),c!==e.getState()&&f.notifyNestedSubs(),()=>{f.tryUnsubscribe(),f.onStateChange=void 0}},[o,c]);const a=t||j;return x.createElement(a.Provider,{value:o},r)}var Zt=Jt;function at(e=j){const t=e===j?ot:ve(e),r=()=>{const{store:n}=t();return n};return Object.assign(r,{withTypes:()=>r}),r}var er=at();function tr(e=j){const t=e===j?er:at(e),r=()=>t().dispatch;return Object.assign(r,{withTypes:()=>r}),r}var rr=tr();Ut(Wt.useSyncExternalStoreWithSelector);function T(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var nr=(()=>typeof Symbol=="function"&&Symbol.observable||"@@observable")(),Ne=nr,le=()=>Math.random().toString(36).substring(7).split("").join("."),sr={INIT:`@@redux/INIT${le()}`,REPLACE:`@@redux/REPLACE${le()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${le()}`},ee=sr;function ke(e){if(typeof e!="object"||e===null)return!1;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||Object.getPrototypeOf(e)===null}function ut(e,t,r){if(typeof e!="function")throw new Error(T(2));if(typeof t=="function"&&typeof r=="function"||typeof r=="function"&&typeof arguments[3]=="function")throw new Error(T(0));if(typeof t=="function"&&typeof r>"u"&&(r=t,t=void 0),typeof r<"u"){if(typeof r!="function")throw new Error(T(1));return r(ut)(e,t)}let n=e,s=t,i=new Map,o=i,c=0,a=!1;function f(){o===i&&(o=new Map,i.forEach((h,g)=>{o.set(g,h)}))}function u(){if(a)throw new Error(T(3));return s}function l(h){if(typeof h!="function")throw new Error(T(4));if(a)throw new Error(T(5));let g=!0;f();const S=c++;return o.set(S,h),function(){if(g){if(a)throw new Error(T(6));g=!1,f(),o.delete(S),i=null}}}function d(h){if(!ke(h))throw new Error(T(7));if(typeof h.type>"u")throw new Error(T(8));if(typeof h.type!="string")throw new Error(T(17));if(a)throw new Error(T(9));try{a=!0,s=n(s,h)}finally{a=!1}return(i=o).forEach(S=>{S()}),h}function y(h){if(typeof h!="function")throw new Error(T(10));n=h,d({type:ee.REPLACE})}function p(){const h=l;return{subscribe(g){if(typeof g!="object"||g===null)throw new Error(T(11));function S(){const w=g;w.next&&w.next(u())}return S(),{unsubscribe:h(S)}},[Ne](){return this}}}return d({type:ee.INIT}),{dispatch:d,subscribe:l,getState:u,replaceReducer:y,[Ne]:p}}function ir(e){Object.keys(e).forEach(t=>{const r=e[t];if(typeof r(void 0,{type:ee.INIT})>"u")throw new Error(T(12));if(typeof r(void 0,{type:ee.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(T(13))})}function or(e){const t=Object.keys(e),r={};for(let i=0;i<t.length;i++){const o=t[i];typeof e[o]=="function"&&(r[o]=e[o])}const n=Object.keys(r);let s;try{ir(r)}catch(i){s=i}return function(o={},c){if(s)throw s;let a=!1;const f={};for(let u=0;u<n.length;u++){const l=n[u],d=r[l],y=o[l],p=d(y,c);if(typeof p>"u")throw c&&c.type,new Error(T(14));f[l]=p,a=a||p!==y}return a=a||n.length!==Object.keys(o).length,a?f:o}}function te(...e){return e.length===0?t=>t:e.length===1?e[0]:e.reduce((t,r)=>(...n)=>t(r(...n)))}function cr(...e){return t=>(r,n)=>{const s=t(r,n);let i=()=>{throw new Error(T(15))};const o={getState:s.getState,dispatch:(a,...f)=>i(a,...f)},c=e.map(a=>a(o));return i=te(...c)(s.dispatch),{...s,dispatch:i}}}function ar(e){return ke(e)&&"type"in e&&typeof e.type=="string"}var ft=Symbol.for("immer-nothing"),je=Symbol.for("immer-draftable"),R=Symbol.for("immer-state");function A(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var U=Object.getPrototypeOf;function I(e){return!!e&&!!e[R]}function M(e){var t;return e?lt(e)||Array.isArray(e)||!!e[je]||!!((t=e.constructor)!=null&&t[je])||ie(e)||oe(e):!1}var ur=Object.prototype.constructor.toString();function lt(e){if(!e||typeof e!="object")return!1;const t=U(e);if(t===null)return!0;const r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object?!0:typeof r=="function"&&Function.toString.call(r)===ur}function H(e,t){se(e)===0?Object.entries(e).forEach(([r,n])=>{t(r,n,e)}):e.forEach((r,n)=>t(n,r,e))}function se(e){const t=e[R];return t?t.type_:Array.isArray(e)?1:ie(e)?2:oe(e)?3:0}function me(e,t){return se(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function dt(e,t,r){const n=se(e);n===2?e.set(t,r):n===3?e.add(r):e[t]=r}function fr(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}function ie(e){return e instanceof Map}function oe(e){return e instanceof Set}function z(e){return e.copy_||e.base_}function we(e,t){if(ie(e))return new Map(e);if(oe(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);if(!t&&lt(e))return U(e)?{...e}:Object.assign(Object.create(null),e);const r=Object.getOwnPropertyDescriptors(e);delete r[R];let n=Reflect.ownKeys(r);for(let s=0;s<n.length;s++){const i=n[s],o=r[i];o.writable===!1&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(r[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:e[i]})}return Object.create(U(e),r)}function Te(e,t=!1){return ce(e)||I(e)||!M(e)||(se(e)>1&&(e.set=e.add=e.clear=e.delete=lr),Object.freeze(e),t&&H(e,(r,n)=>Te(n,!0))),e}function lr(){A(2)}function ce(e){return Object.isFrozen(e)}var dr={};function F(e){const t=dr[e];return t||A(0,e),t}var X;function pt(){return X}function pr(e,t){return{drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function Ie(e,t){t&&(F("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function be(e){_e(e),e.drafts_.forEach(yr),e.drafts_=null}function _e(e){e===X&&(X=e.parent_)}function ze(e){return X=pr(X,e)}function yr(e){const t=e[R];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function Fe(e,t){t.unfinalizedDrafts_=t.drafts_.length;const r=t.drafts_[0];return e!==void 0&&e!==r?(r[R].modified_&&(be(t),A(4)),M(e)&&(e=re(t,e),t.parent_||ne(t,e)),t.patches_&&F("Patches").generateReplacementPatches_(r[R].base_,e,t.patches_,t.inversePatches_)):e=re(t,r,[]),be(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==ft?e:void 0}function re(e,t,r){if(ce(t))return t;const n=t[R];if(!n)return H(t,(s,i)=>Le(e,n,t,s,i,r)),t;if(n.scope_!==e)return t;if(!n.modified_)return ne(e,n.base_,!0),n.base_;if(!n.finalized_){n.finalized_=!0,n.scope_.unfinalizedDrafts_--;const s=n.copy_;let i=s,o=!1;n.type_===3&&(i=new Set(s),s.clear(),o=!0),H(i,(c,a)=>Le(e,n,s,c,a,r,o)),ne(e,s,!1),r&&e.patches_&&F("Patches").generatePatches_(n,r,e.patches_,e.inversePatches_)}return n.copy_}function Le(e,t,r,n,s,i,o){if(I(s)){const c=i&&t&&t.type_!==3&&!me(t.assigned_,n)?i.concat(n):void 0,a=re(e,s,c);if(dt(r,n,a),I(a))e.canAutoFreeze_=!1;else return}else o&&r.add(s);if(M(s)&&!ce(s)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;re(e,s),(!t||!t.scope_.parent_)&&ne(e,s)}}function ne(e,t,r=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&Te(t,r)}function hr(e,t){const r=Array.isArray(e),n={type_:r?1:0,scope_:t?t.scope_:pt(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let s=n,i=Ee;r&&(s=[n],i=G);const{revoke:o,proxy:c}=Proxy.revocable(s,i);return n.draft_=c,n.revoke_=o,c}var Ee={get(e,t){if(t===R)return e;const r=z(e);if(!me(r,t))return mr(e,r,t);const n=r[t];return e.finalized_||!M(n)?n:n===de(e.base_,t)?(pe(e),e.copy_[t]=ge(n,e)):n},has(e,t){return t in z(e)},ownKeys(e){return Reflect.ownKeys(z(e))},set(e,t,r){const n=yt(z(e),t);if(n!=null&&n.set)return n.set.call(e.draft_,r),!0;if(!e.modified_){const s=de(z(e),t),i=s==null?void 0:s[R];if(i&&i.base_===r)return e.copy_[t]=r,e.assigned_[t]=!1,!0;if(fr(r,s)&&(r!==void 0||me(e.base_,t)))return!0;pe(e),Se(e)}return e.copy_[t]===r&&(r!==void 0||t in e.copy_)||Number.isNaN(r)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=r,e.assigned_[t]=!0),!0},deleteProperty(e,t){return de(e.base_,t)!==void 0||t in e.base_?(e.assigned_[t]=!1,pe(e),Se(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){const r=z(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n&&{writable:!0,configurable:e.type_!==1||t!=="length",enumerable:n.enumerable,value:r[t]}},defineProperty(){A(11)},getPrototypeOf(e){return U(e.base_)},setPrototypeOf(){A(12)}},G={};H(Ee,(e,t)=>{G[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}});G.deleteProperty=function(e,t){return G.set.call(this,e,t,void 0)};G.set=function(e,t,r){return Ee.set.call(this,e[0],t,r,e[0])};function de(e,t){const r=e[R];return(r?z(r):e)[t]}function mr(e,t,r){var s;const n=yt(t,r);return n?"value"in n?n.value:(s=n.get)==null?void 0:s.call(e.draft_):void 0}function yt(e,t){if(!(t in e))return;let r=U(e);for(;r;){const n=Object.getOwnPropertyDescriptor(r,t);if(n)return n;r=U(r)}}function Se(e){e.modified_||(e.modified_=!0,e.parent_&&Se(e.parent_))}function pe(e){e.copy_||(e.copy_=we(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var wr=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(t,r,n)=>{if(typeof t=="function"&&typeof r!="function"){const i=r;r=t;const o=this;return function(a=i,...f){return o.produce(a,u=>r.call(this,u,...f))}}typeof r!="function"&&A(6),n!==void 0&&typeof n!="function"&&A(7);let s;if(M(t)){const i=ze(this),o=ge(t,void 0);let c=!0;try{s=r(o),c=!1}finally{c?be(i):_e(i)}return Ie(i,n),Fe(s,i)}else if(!t||typeof t!="object"){if(s=r(t),s===void 0&&(s=t),s===ft&&(s=void 0),this.autoFreeze_&&Te(s,!0),n){const i=[],o=[];F("Patches").generateReplacementPatches_(t,s,i,o),n(i,o)}return s}else A(1,t)},this.produceWithPatches=(t,r)=>{if(typeof t=="function")return(o,...c)=>this.produceWithPatches(o,a=>t(a,...c));let n,s;return[this.produce(t,r,(o,c)=>{n=o,s=c}),n,s]},typeof(e==null?void 0:e.autoFreeze)=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof(e==null?void 0:e.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){M(e)||A(8),I(e)&&(e=ht(e));const t=ze(this),r=ge(e,void 0);return r[R].isManual_=!0,_e(t),r}finishDraft(e,t){const r=e&&e[R];(!r||!r.isManual_)&&A(9);const{scope_:n}=r;return Ie(n,t),Fe(void 0,n)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let r;for(r=t.length-1;r>=0;r--){const s=t[r];if(s.path.length===0&&s.op==="replace"){e=s.value;break}}r>-1&&(t=t.slice(r+1));const n=F("Patches").applyPatches_;return I(e)?n(e,t):this.produce(e,s=>n(s,t))}};function ge(e,t){const r=ie(e)?F("MapSet").proxyMap_(e,t):oe(e)?F("MapSet").proxySet_(e,t):hr(e,t);return(t?t.scope_:pt()).drafts_.push(r),r}function ht(e){return I(e)||A(10,e),mt(e)}function mt(e){if(!M(e)||ce(e))return e;const t=e[R];let r;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,r=we(e,t.scope_.immer_.useStrictShallowCopy_)}else r=we(e,!0);return H(r,(n,s)=>{dt(r,n,mt(s))}),t&&(t.finalized_=!1),r}var O=new wr,wt=O.produce;O.produceWithPatches.bind(O);O.setAutoFreeze.bind(O);O.setUseStrictShallowCopy.bind(O);O.applyPatches.bind(O);O.createDraft.bind(O);O.finishDraft.bind(O);function br(e,t=`expected a function, instead received ${typeof e}`){if(typeof e!="function")throw new TypeError(t)}function _r(e,t=`expected an object, instead received ${typeof e}`){if(typeof e!="object")throw new TypeError(t)}function Sr(e,t="expected all items to be functions, instead received the following types: "){if(!e.every(r=>typeof r=="function")){const r=e.map(n=>typeof n=="function"?`function ${n.name||"unnamed"}()`:typeof n).join(", ");throw new TypeError(`${t}[${r}]`)}}var $e=e=>Array.isArray(e)?e:[e];function gr(e){const t=Array.isArray(e[0])?e[0]:e;return Sr(t,"createSelector expects all input-selectors to be functions, but received the following types: "),t}function vr(e,t){const r=[],{length:n}=e;for(let s=0;s<n;s++)r.push(e[s].apply(null,t));return r}var kr=class{constructor(e){this.value=e}deref(){return this.value}},Tr=typeof WeakRef<"u"?WeakRef:kr,Er=0,We=1;function J(){return{s:Er,v:void 0,o:null,p:null}}function Ce(e,t={}){let r=J();const{resultEqualityCheck:n}=t;let s,i=0;function o(){var l;let c=r;const{length:a}=arguments;for(let d=0,y=a;d<y;d++){const p=arguments[d];if(typeof p=="function"||typeof p=="object"&&p!==null){let _=c.o;_===null&&(c.o=_=new WeakMap);const h=_.get(p);h===void 0?(c=J(),_.set(p,c)):c=h}else{let _=c.p;_===null&&(c.p=_=new Map);const h=_.get(p);h===void 0?(c=J(),_.set(p,c)):c=h}}const f=c;let u;if(c.s===We?u=c.v:(u=e.apply(null,arguments),i++),f.s=We,n){const d=((l=s==null?void 0:s.deref)==null?void 0:l.call(s))??s;d!=null&&n(d,u)&&(u=d,i!==0&&i--),s=typeof u=="object"&&u!==null||typeof u=="function"?new Tr(u):u}return f.v=u,u}return o.clearCache=()=>{r=J(),o.resetResultsCount()},o.resultsCount=()=>i,o.resetResultsCount=()=>{i=0},o}function bt(e,...t){const r=typeof e=="function"?{memoize:e,memoizeOptions:t}:e,n=(...s)=>{let i=0,o=0,c,a={},f=s.pop();typeof f=="object"&&(a=f,f=s.pop()),br(f,`createSelector expects an output function after the inputs, but received: [${typeof f}]`);const u={...r,...a},{memoize:l,memoizeOptions:d=[],argsMemoize:y=Ce,argsMemoizeOptions:p=[],devModeChecks:_={}}=u,h=$e(d),g=$e(p),S=gr(s),m=l(function(){return i++,f.apply(null,arguments)},...h),w=y(function(){o++;const v=vr(S,arguments);return c=m.apply(null,v),c},...g);return Object.assign(w,{resultFunc:f,memoizedResultFunc:m,dependencies:S,dependencyRecomputations:()=>o,resetDependencyRecomputations:()=>{o=0},lastResult:()=>c,recomputations:()=>i,resetRecomputations:()=>{i=0},memoize:l,argsMemoize:y})};return Object.assign(n,{withTypes:()=>n}),n}var Cr=bt(Ce),xr=Object.assign((e,t=Cr)=>{_r(e,`createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`);const r=Object.keys(e),n=r.map(i=>e[i]);return t(n,(...i)=>i.reduce((o,c,a)=>(o[r[a]]=c,o),{}))},{withTypes:()=>xr});function _t(e){return({dispatch:r,getState:n})=>s=>i=>typeof i=="function"?i(r,n,e):s(i)}var Rr=_t(),Or=_t,Pr=(...e)=>{const t=bt(...e),r=Object.assign((...n)=>{const s=t(...n),i=(o,...c)=>s(I(o)?ht(o):o,...c);return Object.assign(i,s),i},{withTypes:()=>r});return r};Pr(Ce);var Ar=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?te:te.apply(null,arguments)},Dr=e=>e&&typeof e.match=="function";function D(e,t){function r(...n){if(t){let s=t(...n);if(!s)throw new Error(C(0));return{type:e,payload:s.payload,..."meta"in s&&{meta:s.meta},..."error"in s&&{error:s.error}}}return{type:e,payload:n[0]}}return r.toString=()=>`${e}`,r.type=e,r.match=n=>ar(n)&&n.type===e,r}var St=class V extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,V.prototype)}static get[Symbol.species](){return V}concat(...t){return super.concat.apply(this,t)}prepend(...t){return t.length===1&&Array.isArray(t[0])?new V(...t[0].concat(this)):new V(...t.concat(this))}};function Be(e){return M(e)?wt(e,()=>{}):e}function Ke(e,t,r){if(e.has(t)){let s=e.get(t);return r.update&&(s=r.update(s,t,e),e.set(t,s)),s}if(!r.insert)throw new Error(C(10));const n=r.insert(t,e);return e.set(t,n),n}function Mr(e){return typeof e=="boolean"}var Nr=()=>function(t){const{thunk:r=!0,immutableCheck:n=!0,serializableCheck:s=!0,actionCreatorCheck:i=!0}=t??{};let o=new St;return r&&(Mr(r)?o.push(Rr):o.push(Or(r.extraArgument))),o},jr="RTK_autoBatch",gt=e=>t=>{setTimeout(t,e)},Ir=typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:gt(10),zr=(e={type:"raf"})=>t=>(...r)=>{const n=t(...r);let s=!0,i=!1,o=!1;const c=new Set,a=e.type==="tick"?queueMicrotask:e.type==="raf"?Ir:e.type==="callback"?e.queueNotification:gt(e.timeout),f=()=>{o=!1,i&&(i=!1,c.forEach(u=>u()))};return Object.assign({},n,{subscribe(u){const l=()=>s&&u(),d=n.subscribe(l);return c.add(u),()=>{d(),c.delete(u)}},dispatch(u){var l;try{return s=!((l=u==null?void 0:u.meta)!=null&&l[jr]),i=!s,i&&(o||(o=!0,a(f))),n.dispatch(u)}finally{s=!0}}})},Fr=e=>function(r){const{autoBatch:n=!0}=r??{};let s=new St(e);return n&&s.push(zr(typeof n=="object"?n:void 0)),s},Lr=!0;function vt(e){const t=Nr(),{reducer:r=void 0,middleware:n,devTools:s=!0,preloadedState:i=void 0,enhancers:o=void 0}=e||{};let c;if(typeof r=="function")c=r;else if(ke(r))c=or(r);else throw new Error(C(1));let a;typeof n=="function"?a=n(t):a=t();let f=te;s&&(f=Ar({trace:!Lr,...typeof s=="object"&&s}));const u=cr(...a),l=Fr(u);let d=typeof o=="function"?o(l):l();const y=f(...d);return ut(c,i,y)}function kt(e){const t={},r=[];let n;const s={addCase(i,o){const c=typeof i=="string"?i:i.type;if(!c)throw new Error(C(28));if(c in t)throw new Error(C(29));return t[c]=o,s},addMatcher(i,o){return r.push({matcher:i,reducer:o}),s},addDefaultCase(i){return n=i,s}};return e(s),[t,r,n]}function $r(e){return typeof e=="function"}function Wr(e,t){let[r,n,s]=kt(t),i;if($r(e))i=()=>Be(e());else{const c=Be(e);i=()=>c}function o(c=i(),a){let f=[r[a.type],...n.filter(({matcher:u})=>u(a)).map(({reducer:u})=>u)];return f.filter(u=>!!u).length===0&&(f=[s]),f.reduce((u,l)=>{if(l)if(I(u)){const y=l(u,a);return y===void 0?u:y}else{if(M(u))return wt(u,d=>l(d,a));{const d=l(u,a);if(d===void 0){if(u===null)return u;throw new Error(C(9))}return d}}return u},c)}return o.getInitialState=i,o}var Br="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",Tt=(e=21)=>{let t="",r=e;for(;r--;)t+=Br[Math.random()*64|0];return t},Kr=(e,t)=>Dr(e)?e.match(t):e(t);function Ur(...e){return t=>e.some(r=>Kr(r,t))}var qr=["name","message","stack","code"],ye=class{constructor(e,t){fe(this,"_type");this.payload=e,this.meta=t}},Ue=class{constructor(e,t){fe(this,"_type");this.payload=e,this.meta=t}},Vr=e=>{if(typeof e=="object"&&e!==null){const t={};for(const r of qr)typeof e[r]=="string"&&(t[r]=e[r]);return t}return{message:String(e)}},Hr=(()=>{function e(t,r,n){const s=D(t+"/fulfilled",(a,f,u,l)=>({payload:a,meta:{...l||{},arg:u,requestId:f,requestStatus:"fulfilled"}})),i=D(t+"/pending",(a,f,u)=>({payload:void 0,meta:{...u||{},arg:f,requestId:a,requestStatus:"pending"}})),o=D(t+"/rejected",(a,f,u,l,d)=>({payload:l,error:(n&&n.serializeError||Vr)(a||"Rejected"),meta:{...d||{},arg:u,requestId:f,rejectedWithValue:!!l,requestStatus:"rejected",aborted:(a==null?void 0:a.name)==="AbortError",condition:(a==null?void 0:a.name)==="ConditionError"}}));function c(a){return(f,u,l)=>{const d=n!=null&&n.idGenerator?n.idGenerator(a):Tt(),y=new AbortController;let p,_;function h(S){_=S,y.abort()}const g=async function(){var w,k;let S;try{let v=(w=n==null?void 0:n.condition)==null?void 0:w.call(n,a,{getState:u,extra:l});if(Gr(v)&&(v=await v),v===!1||y.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};const P=new Promise((b,N)=>{p=()=>{N({name:"AbortError",message:_||"Aborted"})},y.signal.addEventListener("abort",p)});f(i(d,a,(k=n==null?void 0:n.getPendingMeta)==null?void 0:k.call(n,{requestId:d,arg:a},{getState:u,extra:l}))),S=await Promise.race([P,Promise.resolve(r(a,{dispatch:f,getState:u,extra:l,requestId:d,signal:y.signal,abort:h,rejectWithValue:(b,N)=>new ye(b,N),fulfillWithValue:(b,N)=>new Ue(b,N)})).then(b=>{if(b instanceof ye)throw b;return b instanceof Ue?s(b.payload,d,a,b.meta):s(b,d,a)})])}catch(v){S=v instanceof ye?o(null,d,a,v.payload,v.meta):o(v,d,a)}finally{p&&y.signal.removeEventListener("abort",p)}return n&&!n.dispatchConditionRejection&&o.match(S)&&S.meta.condition||f(S),S}();return Object.assign(g,{abort:h,requestId:d,arg:a,unwrap(){return g.then(Xr)}})}}return Object.assign(c,{pending:i,rejected:o,fulfilled:s,settled:Ur(o,s),typePrefix:t})}return e.withTypes=()=>e,e})();function Xr(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function Gr(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var Yr=Symbol.for("rtk-slice-createasyncthunk");function Qr(e,t){return`${e}/${t}`}function Jr({creators:e}={}){var r;const t=(r=e==null?void 0:e.asyncThunk)==null?void 0:r[Yr];return function(s){const{name:i,reducerPath:o=i}=s;if(!i)throw new Error(C(11));typeof process<"u";const c=(typeof s.reducers=="function"?s.reducers(en()):s.reducers)||{},a=Object.keys(c),f={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},u={addCase(m,w){const k=typeof m=="string"?m:m.type;if(!k)throw new Error(C(12));if(k in f.sliceCaseReducersByType)throw new Error(C(13));return f.sliceCaseReducersByType[k]=w,u},addMatcher(m,w){return f.sliceMatchers.push({matcher:m,reducer:w}),u},exposeAction(m,w){return f.actionCreators[m]=w,u},exposeCaseReducer(m,w){return f.sliceCaseReducersByName[m]=w,u}};a.forEach(m=>{const w=c[m],k={reducerName:m,type:Qr(i,m),createNotation:typeof s.reducers=="function"};rn(w)?sn(k,w,u,t):tn(k,w,u)});function l(){const[m={},w=[],k=void 0]=typeof s.extraReducers=="function"?kt(s.extraReducers):[s.extraReducers],v={...m,...f.sliceCaseReducersByType};return Wr(s.initialState,P=>{for(let b in v)P.addCase(b,v[b]);for(let b of f.sliceMatchers)P.addMatcher(b.matcher,b.reducer);for(let b of w)P.addMatcher(b.matcher,b.reducer);k&&P.addDefaultCase(k)})}const d=m=>m,y=new Map;let p;function _(m,w){return p||(p=l()),p(m,w)}function h(){return p||(p=l()),p.getInitialState()}function g(m,w=!1){function k(P){let b=P[m];return typeof b>"u"&&w&&(b=h()),b}function v(P=d){const b=Ke(y,w,{insert:()=>new WeakMap});return Ke(b,P,{insert:()=>{const N={};for(const[xt,Rt]of Object.entries(s.selectors??{}))N[xt]=Zr(Rt,P,h,w);return N}})}return{reducerPath:m,getSelectors:v,get selectors(){return v(k)},selectSlice:k}}const S={name:i,reducer:_,actions:f.actionCreators,caseReducers:f.sliceCaseReducersByName,getInitialState:h,...g(o),injectInto(m,{reducerPath:w,...k}={}){const v=w??o;return m.inject({reducerPath:v,reducer:_},k),{...S,...g(v,!0)}}};return S}}function Zr(e,t,r,n){function s(i,...o){let c=t(i);return typeof c>"u"&&n&&(c=r()),e(c,...o)}return s.unwrapped=e,s}var Et=Jr();function en(){function e(t,r){return{_reducerDefinitionType:"asyncThunk",payloadCreator:t,...r}}return e.withTypes=()=>e,{reducer(t){return Object.assign({[t.name](...r){return t(...r)}}[t.name],{_reducerDefinitionType:"reducer"})},preparedReducer(t,r){return{_reducerDefinitionType:"reducerWithPrepare",prepare:t,reducer:r}},asyncThunk:e}}function tn({type:e,reducerName:t,createNotation:r},n,s){let i,o;if("reducer"in n){if(r&&!nn(n))throw new Error(C(17));i=n.reducer,o=n.prepare}else i=n;s.addCase(e,i).exposeCaseReducer(t,i).exposeAction(t,o?D(e,o):D(e))}function rn(e){return e._reducerDefinitionType==="asyncThunk"}function nn(e){return e._reducerDefinitionType==="reducerWithPrepare"}function sn({type:e,reducerName:t},r,n,s){if(!s)throw new Error(C(18));const{payloadCreator:i,fulfilled:o,pending:c,rejected:a,settled:f,options:u}=r,l=s(e,i,u);n.exposeAction(t,l),o&&n.addCase(l.fulfilled,o),c&&n.addCase(l.pending,c),a&&n.addCase(l.rejected,a),f&&n.addMatcher(l.settled,f),n.exposeCaseReducer(t,{fulfilled:o||Z,pending:c||Z,rejected:a||Z,settled:f||Z})}function Z(){}var on=(e,t)=>{if(typeof e!="function")throw new Error(C(32))},xe="listenerMiddleware",cn=e=>{let{type:t,actionCreator:r,matcher:n,predicate:s,effect:i}=e;if(t)s=D(t).match;else if(r)t=r.type,s=r.match;else if(n)s=n;else if(!s)throw new Error(C(21));return on(i),{predicate:s,type:t,effect:i}},an=Object.assign(e=>{const{type:t,predicate:r,effect:n}=cn(e);return{id:Tt(),effect:n,type:t,predicate:r,pending:new Set,unsubscribe:()=>{throw new Error(C(22))}}},{withTypes:()=>an}),un=Object.assign(D(`${xe}/add`),{withTypes:()=>un});D(`${xe}/removeAll`);var fn=Object.assign(D(`${xe}/remove`),{withTypes:()=>fn});function C(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}const ln={tasks:[],status:"idle",error:null},he=Hr("todos/fetchTodos",async()=>(await(await fetch("https://jsonplaceholder.typicode.com/todos?userId=1")).json()).map(n=>({id:`${n.id}`,title:n.title,state:n.completed?"TASK_ARCHIVED":"TASK_INBOX"}))),Ct=Et({name:"taskbox",initialState:ln,reducers:{updateTaskState:(e,t)=>{const{id:r,newTaskState:n}=t.payload,s=e.tasks.findIndex(i=>i.id===r);s>=0&&(e.tasks[s].state=n)}},extraReducers(e){e.addCase(he.pending,t=>{t.status="loading",t.error=null,t.tasks=[]}).addCase(he.fulfilled,(t,r)=>{t.status="succeeded",t.error=null,t.tasks=r.payload}).addCase(he.rejected,t=>{t.status="failed",t.error="Something went wrong",t.tasks=[]})}}),{updateTaskState:qe}=Ct.actions,dn=vt({reducer:{taskbox:Ct.reducer}}),_n=dn;function Re(){const e=De(o=>[...o.taskbox.tasks.filter(f=>f.state==="TASK_PINNED"),...o.taskbox.tasks.filter(f=>f.state!=="TASK_PINNED")].filter(f=>f.state==="TASK_INBOX"||f.state==="TASK_PINNED")),{status:t}=De(o=>o.taskbox),r=rr(),n=o=>{r(qe({id:o,newTaskState:"TASK_PINNED"}))},s=o=>{r(qe({id:o,newTaskState:"TASK_ARCHIVED"}))},i=Q("div",{className:"loading-item",children:[E("span",{className:"glow-checkbox"}),Q("span",{className:"glow-text",children:[E("span",{children:"Loading"})," ",E("span",{children:"cool"})," ",E("span",{children:"state"})]})]});return t==="loading"?Q("div",{className:"list-items","data-testid":"loading",children:[i,i,i,i,i,i]},"loading"):e.length===0?E("div",{className:"list-items","data-testid":"empty",children:Q("div",{className:"wrapper-message",children:[E("span",{className:"icon-check"}),E("p",{className:"title-message",children:"You have no tasks"}),E("p",{className:"subtitle-message",children:"Sit back and relax"})]})},"empty"):E("div",{className:"list-items","data-testid":"success",children:e.map(o=>E(Mt,{task:o,onPinTask:c=>n(c),onArchiveTask:c=>s(c)},o.id))},"success")}Re.__docgenInfo={description:"",methods:[],displayName:"TaskList"};const q={tasks:[{...L.args.task,id:"1",title:"Task 1"},{...L.args.task,id:"2",title:"Task 2"},{...L.args.task,id:"3",title:"Task 3"},{...L.args.task,id:"4",title:"Task 4"},{...L.args.task,id:"5",title:"Task 5"},{...L.args.task,id:"6",title:"Task 6"}],status:"idle",error:null},ae=({taskboxState:e,children:t})=>E(Zt,{store:vt({reducer:{taskbox:Et({name:"taskbox",initialState:e,reducers:{updateTaskState:(r,n)=>{const{id:s,newTaskState:i}=n.payload,o=r.tasks.findIndex(c=>c.id===s);o>=0&&(r.tasks[o].state=i)}}}).reducer}}),children:t}),pn={component:Re,title:"TaskList",decorators:[e=>E("div",{style:{padding:"3rem"},children:e()})],excludeStories:/.*MockedState$/},ue=()=>E(Re,{}),$=ue.bind({});$.decorators=[e=>E(ae,{taskboxState:q,children:e()})];const W=ue.bind({});W.decorators=[e=>{const t=[...q.tasks.slice(0,5),{id:"6",title:"Task 6 (pinned)",state:"TASK_PINNED"}];return E(ae,{taskboxState:{...q,tasks:t},children:e()})}];const B=ue.bind({});B.decorators=[e=>E(ae,{taskboxState:{...q,status:"loading"},children:e()})];const K=ue.bind({});K.decorators=[e=>E(ae,{taskboxState:{...q,tasks:[]},children:e()})];var Ve,He,Xe;$.parameters={...$.parameters,docs:{...(Ve=$.parameters)==null?void 0:Ve.docs,source:{originalSource:"() => <TaskList />",...(Xe=(He=$.parameters)==null?void 0:He.docs)==null?void 0:Xe.source}}};var Ge,Ye,Qe;W.parameters={...W.parameters,docs:{...(Ge=W.parameters)==null?void 0:Ge.docs,source:{originalSource:"() => <TaskList />",...(Qe=(Ye=W.parameters)==null?void 0:Ye.docs)==null?void 0:Qe.source}}};var Je,Ze,et;B.parameters={...B.parameters,docs:{...(Je=B.parameters)==null?void 0:Je.docs,source:{originalSource:"() => <TaskList />",...(et=(Ze=B.parameters)==null?void 0:Ze.docs)==null?void 0:et.source}}};var tt,rt,nt;K.parameters={...K.parameters,docs:{...(tt=K.parameters)==null?void 0:tt.docs,source:{originalSource:"() => <TaskList />",...(nt=(rt=K.parameters)==null?void 0:rt.docs)==null?void 0:nt.source}}};const yn=["MockedState","Default","WithPinnedTasks","Loading","Empty"],Sn=Object.freeze(Object.defineProperty({__proto__:null,Default:$,Empty:K,Loading:B,MockedState:q,WithPinnedTasks:W,__namedExportsOrder:yn,default:pn},Symbol.toStringTag,{value:"Module"}));export{q as M,Zt as P,Re as T,De as a,Sn as b,he as f,_n as s,rr as u};
