const Fn=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function r(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerpolicy&&(a.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?a.credentials="include":i.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=r(i);fetch(i.href,a)}};Fn();var ye=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function he(t,e,r,n,i,a){return{tag:t,key:e,attrs:r,children:n,text:i,dom:a,domSize:void 0,state:void 0,events:void 0,instance:void 0}}he.normalize=function(t){return Array.isArray(t)?he("[",void 0,void 0,he.normalizeChildren(t),void 0,void 0):t==null||typeof t=="boolean"?null:typeof t=="object"?t:he("#",void 0,void 0,String(t),void 0,void 0)};he.normalizeChildren=function(t){var e=[];if(t.length){for(var r=t[0]!=null&&t[0].key!=null,n=1;n<t.length;n++)if((t[n]!=null&&t[n].key!=null)!==r)throw new TypeError(r&&(t[n]!=null||typeof t[n]=="boolean")?"In fragments, vnodes must either all have keys or none have keys. You may wish to consider using an explicit keyed empty fragment, m.fragment({key: ...}), instead of a hole.":"In fragments, vnodes must either all have keys or none have keys.");for(var n=0;n<t.length;n++)e[n]=he.normalize(t[n])}return e};var ue=he,Hn=ue,Dr=function(){var t=arguments[this],e=this+1,r;if(t==null?t={}:(typeof t!="object"||t.tag!=null||Array.isArray(t))&&(t={},e=this),arguments.length===e+1)r=arguments[e],Array.isArray(r)||(r=[r]);else for(r=[];e<arguments.length;)r.push(arguments[e++]);return Hn("",t.key,t,r)},tt={}.hasOwnProperty,jn=ue,Vn=Dr,_e=tt,Wn=/(?:(^|#|\.)([^#\.\[\]]+))|(\[(.+?)(?:\s*=\s*("|'|)((?:\\["'\]]|.)*?)\5)?\])/g,Mr={};function tr(t){for(var e in t)if(_e.call(t,e))return!1;return!0}function zn(t){for(var e,r="div",n=[],i={};e=Wn.exec(t);){var a=e[1],c=e[2];if(a===""&&c!=="")r=c;else if(a==="#")i.id=c;else if(a===".")n.push(c);else if(e[3][0]==="["){var f=e[6];f&&(f=f.replace(/\\(["'])/g,"$1").replace(/\\\\/g,"\\")),e[4]==="class"?n.push(f):i[e[4]]=f===""?f:f||!0}}return n.length>0&&(i.className=n.join(" ")),Mr[t]={tag:r,attrs:i}}function qn(t,e){var r=e.attrs,n=_e.call(r,"class"),i=n?r.class:r.className;if(e.tag=t.tag,e.attrs={},!tr(t.attrs)&&!tr(r)){var a={};for(var c in r)_e.call(r,c)&&(a[c]=r[c]);r=a}for(var c in t.attrs)_e.call(t.attrs,c)&&c!=="className"&&!_e.call(r,c)&&(r[c]=t.attrs[c]);(i!=null||t.attrs.className!=null)&&(r.className=i!=null?t.attrs.className!=null?String(t.attrs.className)+" "+String(i):i:t.attrs.className!=null?t.attrs.className:null),n&&(r.class=null);for(var c in r)if(_e.call(r,c)&&c!=="key"){e.attrs=r;break}return e}function Kn(t){if(t==null||typeof t!="string"&&typeof t!="function"&&typeof t.view!="function")throw Error("The selector must be either a string or a component.");var e=Vn.apply(1,arguments);return typeof t=="string"&&(e.children=jn.normalizeChildren(e.children),t!=="[")?qn(Mr[t]||zn(t),e):(e.tag=t,e)}var Lr=Kn,Gn=ue,Jn=function(t){return t==null&&(t=""),Gn("<",void 0,void 0,t,void 0,void 0)},Yn=ue,Xn=Dr,Qn=function(){var t=Xn.apply(0,arguments);return t.tag="[",t.children=Yn.normalizeChildren(t.children),t},Lt=Lr;Lt.trust=Jn;Lt.fragment=Qn;var Zn=Lt,Oe={exports:{}},j=function(t){if(!(this instanceof j))throw new Error("Promise must be called with 'new'.");if(typeof t!="function")throw new TypeError("executor must be a function.");var e=this,r=[],n=[],i=u(r,!0),a=u(n,!1),c=e._instance={resolvers:r,rejectors:n},f=typeof setImmediate=="function"?setImmediate:setTimeout;function u(g,y){return function _(b){var S;try{if(y&&b!=null&&(typeof b=="object"||typeof b=="function")&&typeof(S=b.then)=="function"){if(b===e)throw new TypeError("Promise can't be resolved with itself.");d(S.bind(b))}else f(function(){!y&&g.length===0&&console.error("Possible unhandled promise rejection:",b);for(var w=0;w<g.length;w++)g[w](b);r.length=0,n.length=0,c.state=y,c.retry=function(){_(b)}})}catch(w){a(w)}}}function d(g){var y=0;function _(S){return function(w){y++>0||S(w)}}var b=_(a);try{g(_(i),b)}catch(S){b(S)}}d(t)};j.prototype.then=function(t,e){var r=this,n=r._instance;function i(u,d,g,y){d.push(function(_){if(typeof u!="function")g(_);else try{a(u(_))}catch(b){c&&c(b)}}),typeof n.retry=="function"&&y===n.state&&n.retry()}var a,c,f=new j(function(u,d){a=u,c=d});return i(t,n.resolvers,a,!0),i(e,n.rejectors,c,!1),f};j.prototype.catch=function(t){return this.then(null,t)};j.prototype.finally=function(t){return this.then(function(e){return j.resolve(t()).then(function(){return e})},function(e){return j.resolve(t()).then(function(){return j.reject(e)})})};j.resolve=function(t){return t instanceof j?t:new j(function(e){e(t)})};j.reject=function(t){return new j(function(e,r){r(t)})};j.all=function(t){return new j(function(e,r){var n=t.length,i=0,a=[];if(t.length===0)e([]);else for(var c=0;c<t.length;c++)(function(f){function u(d){i++,a[f]=d,i===n&&e(a)}t[f]!=null&&(typeof t[f]=="object"||typeof t[f]=="function")&&typeof t[f].then=="function"?t[f].then(u,r):u(t[f])})(c)})};j.race=function(t){return new j(function(e,r){for(var n=0;n<t.length;n++)t[n].then(e,r)})};var Ur=j,Ae=Ur;typeof window!="undefined"?(typeof window.Promise=="undefined"?window.Promise=Ae:window.Promise.prototype.finally||(window.Promise.prototype.finally=Ae.prototype.finally),Oe.exports=window.Promise):typeof ye!="undefined"?(typeof ye.Promise=="undefined"?ye.Promise=Ae:ye.Promise.prototype.finally||(ye.Promise.prototype.finally=Ae.prototype.finally),Oe.exports=ye.Promise):Oe.exports=Ae;var wt=ue,ei=function(t){var e=t&&t.document,r,n={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"};function i(o){return o.attrs&&o.attrs.xmlns||n[o.tag]}function a(o,s){if(o.state!==s)throw new Error("'vnode.state' must not be modified.")}function c(o){var s=o.state;try{return this.apply(s,arguments)}finally{a(o,s)}}function f(){try{return e.activeElement}catch{return null}}function u(o,s,l,h,p,m,I){for(var O=l;O<h;O++){var v=s[O];v!=null&&d(o,v,p,I,m)}}function d(o,s,l,h,p){var m=s.tag;if(typeof m=="string")switch(s.state={},s.attrs!=null&&dt(s.attrs,s,l),m){case"#":g(o,s,p);break;case"<":_(o,s,h,p);break;case"[":b(o,s,l,h,p);break;default:S(o,s,l,h,p)}else P(o,s,l,h,p)}function g(o,s,l){s.dom=e.createTextNode(s.children),X(o,s.dom,l)}var y={caption:"table",thead:"table",tbody:"table",tfoot:"table",tr:"tbody",th:"tr",td:"tr",colgroup:"table",col:"colgroup"};function _(o,s,l,h){var p=s.children.match(/^\s*?<(\w+)/im)||[],m=e.createElement(y[p[1]]||"div");l==="http://www.w3.org/2000/svg"?(m.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+s.children+"</svg>",m=m.firstChild):m.innerHTML=s.children,s.dom=m.firstChild,s.domSize=m.childNodes.length,s.instance=[];for(var I=e.createDocumentFragment(),O;O=m.firstChild;)s.instance.push(O),I.appendChild(O);X(o,I,h)}function b(o,s,l,h,p){var m=e.createDocumentFragment();if(s.children!=null){var I=s.children;u(m,I,0,I.length,l,null,h)}s.dom=m.firstChild,s.domSize=m.childNodes.length,X(o,m,p)}function S(o,s,l,h,p){var m=s.tag,I=s.attrs,O=I&&I.is;h=i(s)||h;var v=h?O?e.createElementNS(h,m,{is:O}):e.createElementNS(h,m):O?e.createElement(m,{is:O}):e.createElement(m);if(s.dom=v,I!=null&&Pn(s,I,h),X(o,v,p),!Gt(s)&&s.children!=null){var N=s.children;u(v,N,0,N.length,l,null,h),s.tag==="select"&&I!=null&&Dn(s,I)}}function w(o,s){var l;if(typeof o.tag.view=="function"){if(o.state=Object.create(o.tag),l=o.state.view,l.$$reentrantLock$$!=null)return;l.$$reentrantLock$$=!0}else{if(o.state=void 0,l=o.tag,l.$$reentrantLock$$!=null)return;l.$$reentrantLock$$=!0,o.state=o.tag.prototype!=null&&typeof o.tag.prototype.view=="function"?new o.tag(o):o.tag(o)}if(dt(o.state,o,s),o.attrs!=null&&dt(o.attrs,o,s),o.instance=wt.normalize(c.call(o.state.view,o)),o.instance===o)throw Error("A view cannot return the vnode it received as argument");l.$$reentrantLock$$=null}function P(o,s,l,h,p){w(s,l),s.instance!=null?(d(o,s.instance,l,h,p),s.dom=s.instance.dom,s.domSize=s.dom!=null?s.instance.domSize:0):s.domSize=0}function x(o,s,l,h,p,m){if(!(s===l||s==null&&l==null))if(s==null||s.length===0)u(o,l,0,l.length,h,p,m);else if(l==null||l.length===0)Te(o,s,0,s.length);else{var I=s[0]!=null&&s[0].key!=null,O=l[0]!=null&&l[0].key!=null,v=0,N=0;if(!I)for(;N<s.length&&s[N]==null;)N++;if(!O)for(;v<l.length&&l[v]==null;)v++;if(I!==O)Te(o,s,N,s.length),u(o,l,v,l.length,h,p,m);else if(O){for(var K=s.length-1,H=l.length-1,We,G,$,z,U,gt;K>=N&&H>=v&&(z=s[K],U=l[H],z.key===U.key);)z!==U&&W(o,z,U,h,p,m),U.dom!=null&&(p=U.dom),K--,H--;for(;K>=N&&H>=v&&(G=s[N],$=l[v],G.key===$.key);)N++,v++,G!==$&&W(o,G,$,h,Y(s,N,p),m);for(;K>=N&&H>=v&&!(v===H||G.key!==U.key||z.key!==$.key);)gt=Y(s,N,p),me(o,z,gt),z!==$&&W(o,z,$,h,gt,m),++v<=--H&&me(o,G,p),G!==U&&W(o,G,U,h,p,m),U.dom!=null&&(p=U.dom),N++,K--,z=s[K],U=l[H],G=s[N],$=l[v];for(;K>=N&&H>=v&&z.key===U.key;)z!==U&&W(o,z,U,h,p,m),U.dom!=null&&(p=U.dom),K--,H--,z=s[K],U=l[H];if(v>H)Te(o,s,N,K+1);else if(N>K)u(o,l,v,H+1,h,p,m);else{var $n=p,er=H-v+1,Re=new Array(er),yt=0,B=0,_t=2147483647,vt=0,We,bt;for(B=0;B<er;B++)Re[B]=-1;for(B=H;B>=v;B--){We==null&&(We=C(s,N,K+1)),U=l[B];var ge=We[U.key];ge!=null&&(_t=ge<_t?ge:-1,Re[B-v]=ge,z=s[ge],s[ge]=null,z!==U&&W(o,z,U,h,p,m),U.dom!=null&&(p=U.dom),vt++)}if(p=$n,vt!==K-N+1&&Te(o,s,N,K+1),vt===0)u(o,l,v,H+1,h,p,m);else if(_t===-1)for(bt=F(Re),yt=bt.length-1,B=H;B>=v;B--)$=l[B],Re[B-v]===-1?d(o,$,h,m,p):bt[yt]===B-v?yt--:me(o,$,p),$.dom!=null&&(p=l[B].dom);else for(B=H;B>=v;B--)$=l[B],Re[B-v]===-1&&d(o,$,h,m,p),$.dom!=null&&(p=l[B].dom)}}else{var mt=s.length<l.length?s.length:l.length;for(v=v<N?v:N;v<mt;v++)G=s[v],$=l[v],!(G===$||G==null&&$==null)&&(G==null?d(o,$,h,m,Y(s,v+1,p)):$==null?je(o,G):W(o,G,$,h,Y(s,v+1,p),m));s.length>mt&&Te(o,s,v,s.length),l.length>mt&&u(o,l,v,l.length,h,p,m)}}}function W(o,s,l,h,p,m){var I=s.tag,O=l.tag;if(I===O){if(l.state=s.state,l.events=s.events,Bn(l,s))return;if(typeof I=="string")switch(l.attrs!=null&&pt(l.attrs,l,h),I){case"#":M(s,l);break;case"<":R(o,s,l,m,p);break;case"[":k(o,s,l,h,p,m);break;default:T(s,l,h,m)}else L(o,s,l,h,p,m)}else je(o,s),d(o,l,h,m,p)}function M(o,s){o.children.toString()!==s.children.toString()&&(o.dom.nodeValue=s.children),s.dom=o.dom}function R(o,s,l,h,p){s.children!==l.children?(Jt(o,s),_(o,l,h,p)):(l.dom=s.dom,l.domSize=s.domSize,l.instance=s.instance)}function k(o,s,l,h,p,m){x(o,s.children,l.children,h,p,m);var I=0,O=l.children;if(l.dom=null,O!=null){for(var v=0;v<O.length;v++){var N=O[v];N!=null&&N.dom!=null&&(l.dom==null&&(l.dom=N.dom),I+=N.domSize||1)}I!==1&&(l.domSize=I)}}function T(o,s,l,h){var p=s.dom=o.dom;h=i(s)||h,s.tag==="textarea"&&s.attrs==null&&(s.attrs={}),Mn(s,o.attrs,s.attrs,h),Gt(s)||x(p,o.children,s.children,l,null,h)}function L(o,s,l,h,p,m){if(l.instance=wt.normalize(c.call(l.state.view,l)),l.instance===l)throw Error("A view cannot return the vnode it received as argument");pt(l.state,l,h),l.attrs!=null&&pt(l.attrs,l,h),l.instance!=null?(s.instance==null?d(o,l.instance,h,m,p):W(o,s.instance,l.instance,h,p,m),l.dom=l.instance.dom,l.domSize=l.instance.domSize):s.instance!=null?(je(o,s.instance),l.dom=void 0,l.domSize=0):(l.dom=s.dom,l.domSize=s.domSize)}function C(o,s,l){for(var h=Object.create(null);s<l;s++){var p=o[s];if(p!=null){var m=p.key;m!=null&&(h[m]=s)}}return h}var A=[];function F(o){for(var s=[0],l=0,h=0,p=0,m=A.length=o.length,p=0;p<m;p++)A[p]=o[p];for(var p=0;p<m;++p)if(o[p]!==-1){var I=s[s.length-1];if(o[I]<o[p]){A[p]=I,s.push(p);continue}for(l=0,h=s.length-1;l<h;){var O=(l>>>1)+(h>>>1)+(l&h&1);o[s[O]]<o[p]?l=O+1:h=O}o[p]<o[s[l]]&&(l>0&&(A[p]=s[l-1]),s[l]=p)}for(l=s.length,h=s[l-1];l-- >0;)s[l]=h,h=A[h];return A.length=0,s}function Y(o,s,l){for(;s<o.length;s++)if(o[s]!=null&&o[s].dom!=null)return o[s].dom;return l}function me(o,s,l){var h=e.createDocumentFragment();fe(o,h,s),X(o,h,l)}function fe(o,s,l){for(;l.dom!=null&&l.dom.parentNode===o;){if(typeof l.tag!="string"){if(l=l.instance,l!=null)continue}else if(l.tag==="<")for(var h=0;h<l.instance.length;h++)s.appendChild(l.instance[h]);else if(l.tag!=="[")s.appendChild(l.dom);else if(l.children.length===1){if(l=l.children[0],l!=null)continue}else for(var h=0;h<l.children.length;h++){var p=l.children[h];p!=null&&fe(o,s,p)}break}}function X(o,s,l){l!=null?o.insertBefore(s,l):o.appendChild(s)}function Gt(o){if(o.attrs==null||o.attrs.contenteditable==null&&o.attrs.contentEditable==null)return!1;var s=o.children;if(s!=null&&s.length===1&&s[0].tag==="<"){var l=s[0].children;o.dom.innerHTML!==l&&(o.dom.innerHTML=l)}else if(s!=null&&s.length!==0)throw new Error("Child node of a contenteditable must be trusted.");return!0}function Te(o,s,l,h){for(var p=l;p<h;p++){var m=s[p];m!=null&&je(o,m)}}function je(o,s){var l=0,h=s.state,p,m;if(typeof s.tag!="string"&&typeof s.state.onbeforeremove=="function"){var I=c.call(s.state.onbeforeremove,s);I!=null&&typeof I.then=="function"&&(l=1,p=I)}if(s.attrs&&typeof s.attrs.onbeforeremove=="function"){var I=c.call(s.attrs.onbeforeremove,s);I!=null&&typeof I.then=="function"&&(l|=2,m=I)}if(a(s,h),!l)Ve(s),lt(o,s);else{if(p!=null){var O=function(){l&1&&(l&=2,l||v())};p.then(O,O)}if(m!=null){var O=function(){l&2&&(l&=1,l||v())};m.then(O,O)}}function v(){a(s,h),Ve(s),lt(o,s)}}function Jt(o,s){for(var l=0;l<s.instance.length;l++)o.removeChild(s.instance[l])}function lt(o,s){for(;s.dom!=null&&s.dom.parentNode===o;){if(typeof s.tag!="string"){if(s=s.instance,s!=null)continue}else if(s.tag==="<")Jt(o,s);else{if(s.tag!=="["&&(o.removeChild(s.dom),!Array.isArray(s.children)))break;if(s.children.length===1){if(s=s.children[0],s!=null)continue}else for(var l=0;l<s.children.length;l++){var h=s.children[l];h!=null&&lt(o,h)}}break}}function Ve(o){if(typeof o.tag!="string"&&typeof o.state.onremove=="function"&&c.call(o.state.onremove,o),o.attrs&&typeof o.attrs.onremove=="function"&&c.call(o.attrs.onremove,o),typeof o.tag!="string")o.instance!=null&&Ve(o.instance);else{var s=o.children;if(Array.isArray(s))for(var l=0;l<s.length;l++){var h=s[l];h!=null&&Ve(h)}}}function Pn(o,s,l){o.tag==="input"&&s.type!=null&&o.dom.setAttribute("type",s.type);var h=s!=null&&o.tag==="input"&&s.type==="file";for(var p in s)ut(o,p,null,s[p],l,h)}function ut(o,s,l,h,p,m){if(!(s==="key"||s==="is"||h==null||Yt(s)||l===h&&!Ln(o,s)&&typeof h!="object"||s==="type"&&o.tag==="input")){if(s[0]==="o"&&s[1]==="n")return Zt(o,s,h);if(s.slice(0,6)==="xlink:")o.dom.setAttributeNS("http://www.w3.org/1999/xlink",s.slice(6),h);else if(s==="style")Qt(o.dom,l,h);else if(Xt(o,s,p)){if(s==="value"){if((o.tag==="input"||o.tag==="textarea")&&o.dom.value===""+h&&(m||o.dom===f())||o.tag==="select"&&l!==null&&o.dom.value===""+h||o.tag==="option"&&l!==null&&o.dom.value===""+h)return;if(m&&""+h!=""){console.error("`value` is read-only on file inputs!");return}}o.dom[s]=h}else typeof h=="boolean"?h?o.dom.setAttribute(s,""):o.dom.removeAttribute(s):o.dom.setAttribute(s==="className"?"class":s,h)}}function Nn(o,s,l,h){if(!(s==="key"||s==="is"||l==null||Yt(s)))if(s[0]==="o"&&s[1]==="n")Zt(o,s,void 0);else if(s==="style")Qt(o.dom,l,null);else if(Xt(o,s,h)&&s!=="className"&&s!=="title"&&!(s==="value"&&(o.tag==="option"||o.tag==="select"&&o.dom.selectedIndex===-1&&o.dom===f()))&&!(o.tag==="input"&&s==="type"))o.dom[s]=null;else{var p=s.indexOf(":");p!==-1&&(s=s.slice(p+1)),l!==!1&&o.dom.removeAttribute(s==="className"?"class":s)}}function Dn(o,s){if("value"in s)if(s.value===null)o.dom.selectedIndex!==-1&&(o.dom.value=null);else{var l=""+s.value;(o.dom.value!==l||o.dom.selectedIndex===-1)&&(o.dom.value=l)}"selectedIndex"in s&&ut(o,"selectedIndex",null,s.selectedIndex,void 0)}function Mn(o,s,l,h){if(s&&s===l&&console.warn("Don't reuse attrs object, use new object for every redraw, this will throw in next major"),l!=null){o.tag==="input"&&l.type!=null&&o.dom.setAttribute("type",l.type);var p=o.tag==="input"&&l.type==="file";for(var m in l)ut(o,m,s&&s[m],l[m],h,p)}var I;if(s!=null)for(var m in s)(I=s[m])!=null&&(l==null||l[m]==null)&&Nn(o,m,I,h)}function Ln(o,s){return s==="value"||s==="checked"||s==="selectedIndex"||s==="selected"&&o.dom===f()||o.tag==="option"&&o.dom.parentNode===e.activeElement}function Yt(o){return o==="oninit"||o==="oncreate"||o==="onupdate"||o==="onremove"||o==="onbeforeremove"||o==="onbeforeupdate"}function Xt(o,s,l){return l===void 0&&(o.tag.indexOf("-")>-1||o.attrs!=null&&o.attrs.is||s!=="href"&&s!=="list"&&s!=="form"&&s!=="width"&&s!=="height")&&s in o.dom}var Un=/[A-Z]/g;function xn(o){return"-"+o.toLowerCase()}function ft(o){return o[0]==="-"&&o[1]==="-"?o:o==="cssFloat"?"float":o.replace(Un,xn)}function Qt(o,s,l){if(s!==l)if(l==null)o.style.cssText="";else if(typeof l!="object")o.style.cssText=l;else if(s==null||typeof s!="object"){o.style.cssText="";for(var h in l){var p=l[h];p!=null&&o.style.setProperty(ft(h),String(p))}}else{for(var h in l){var p=l[h];p!=null&&(p=String(p))!==String(s[h])&&o.style.setProperty(ft(h),p)}for(var h in s)s[h]!=null&&l[h]==null&&o.style.removeProperty(ft(h))}}function ht(){this._=r}ht.prototype=Object.create(null),ht.prototype.handleEvent=function(o){var s=this["on"+o.type],l;typeof s=="function"?l=s.call(o.currentTarget,o):typeof s.handleEvent=="function"&&s.handleEvent(o),this._&&o.redraw!==!1&&(0,this._)(),l===!1&&(o.preventDefault(),o.stopPropagation())};function Zt(o,s,l){if(o.events!=null){if(o.events._=r,o.events[s]===l)return;l!=null&&(typeof l=="function"||typeof l=="object")?(o.events[s]==null&&o.dom.addEventListener(s.slice(2),o.events,!1),o.events[s]=l):(o.events[s]!=null&&o.dom.removeEventListener(s.slice(2),o.events,!1),o.events[s]=void 0)}else l!=null&&(typeof l=="function"||typeof l=="object")&&(o.events=new ht,o.dom.addEventListener(s.slice(2),o.events,!1),o.events[s]=l)}function dt(o,s,l){typeof o.oninit=="function"&&c.call(o.oninit,s),typeof o.oncreate=="function"&&l.push(c.bind(o.oncreate,s))}function pt(o,s,l){typeof o.onupdate=="function"&&l.push(c.bind(o.onupdate,s))}function Bn(o,s){do{if(o.attrs!=null&&typeof o.attrs.onbeforeupdate=="function"){var l=c.call(o.attrs.onbeforeupdate,o,s);if(l!==void 0&&!l)break}if(typeof o.tag!="string"&&typeof o.state.onbeforeupdate=="function"){var l=c.call(o.state.onbeforeupdate,o,s);if(l!==void 0&&!l)break}return!1}while(!1);return o.dom=s.dom,o.domSize=s.domSize,o.instance=s.instance,o.attrs=s.attrs,o.children=s.children,o.text=s.text,!0}var Se;return function(o,s,l){if(!o)throw new TypeError("DOM element being rendered to does not exist.");if(Se!=null&&o.contains(Se))throw new TypeError("Node is currently being rendered to and thus is locked.");var h=r,p=Se,m=[],I=f(),O=o.namespaceURI;Se=o,r=typeof l=="function"?l:void 0;try{o.vnodes==null&&(o.textContent=""),s=wt.normalizeChildren(Array.isArray(s)?s:[s]),x(o,o.vnodes,s,m,null,O==="http://www.w3.org/1999/xhtml"?void 0:O),o.vnodes=s,I!=null&&f()!==I&&typeof I.focus=="function"&&I.focus();for(var v=0;v<m.length;v++)m[v]()}finally{r=h,Se=p}}},xr=ei(typeof window!="undefined"?window:null),rr=ue,ti=function(t,e,r){var n=[],i=!1,a=-1;function c(){for(a=0;a<n.length;a+=2)try{t(n[a],rr(n[a+1]),f)}catch(d){r.error(d)}a=-1}function f(){i||(i=!0,e(function(){i=!1,c()}))}f.sync=c;function u(d,g){if(g!=null&&g.view==null&&typeof g!="function")throw new TypeError("m.mount expects a component, not a vnode.");var y=n.indexOf(d);y>=0&&(n.splice(y,2),y<=a&&(a-=2),t(d,[])),g!=null&&(n.push(d,g),t(d,rr(g),f))}return{mount:u,redraw:f}},ri=xr,Ut=ti(ri,typeof requestAnimationFrame!="undefined"?requestAnimationFrame:null,typeof console!="undefined"?console:null),Br=function(t){if(Object.prototype.toString.call(t)!=="[object Object]")return"";var e=[];for(var r in t)n(r,t[r]);return e.join("&");function n(i,a){if(Array.isArray(a))for(var c=0;c<a.length;c++)n(i+"["+c+"]",a[c]);else if(Object.prototype.toString.call(a)==="[object Object]")for(var c in a)n(i+"["+c+"]",a[c]);else e.push(encodeURIComponent(i)+(a!=null&&a!==""?"="+encodeURIComponent(a):""))}},ni=tt,$r=Object.assign||function(t,e){for(var r in e)ni.call(e,r)&&(t[r]=e[r])},ii=Br,si=$r,xt=function(t,e){if(/:([^\/\.-]+)(\.{3})?:/.test(t))throw new SyntaxError("Template parameter names must be separated by either a '/', '-', or '.'.");if(e==null)return t;var r=t.indexOf("?"),n=t.indexOf("#"),i=n<0?t.length:n,a=r<0?i:r,c=t.slice(0,a),f={};si(f,e);var u=c.replace(/:([^\/\.-]+)(\.{3})?/g,function(w,P,x){return delete f[P],e[P]==null?w:x?e[P]:encodeURIComponent(String(e[P]))}),d=u.indexOf("?"),g=u.indexOf("#"),y=g<0?u.length:g,_=d<0?y:d,b=u.slice(0,_);r>=0&&(b+=t.slice(r,i)),d>=0&&(b+=(r<0?"?":"&")+u.slice(d,y));var S=ii(f);return S&&(b+=(r<0&&d<0?"?":"&")+S),n>=0&&(b+=t.slice(n)),g>=0&&(b+=(n<0?"":"&")+u.slice(g)),b},ai=xt,nr=tt,oi=function(t,e,r){var n=0;function i(f){return new e(f)}i.prototype=e.prototype,i.__proto__=e;function a(f){return function(u,d){typeof u!="string"?(d=u,u=u.url):d==null&&(d={});var g=new e(function(S,w){f(ai(u,d.params),d,function(P){if(typeof d.type=="function")if(Array.isArray(P))for(var x=0;x<P.length;x++)P[x]=new d.type(P[x]);else P=new d.type(P);S(P)},w)});if(d.background===!0)return g;var y=0;function _(){--y===0&&typeof r=="function"&&r()}return b(g);function b(S){var w=S.then;return S.constructor=i,S.then=function(){y++;var P=w.apply(S,arguments);return P.then(_,function(x){if(_(),y===0)throw x}),b(P)},S}}}function c(f,u){for(var d in f.headers)if(nr.call(f.headers,d)&&d.toLowerCase()===u)return!0;return!1}return{request:a(function(f,u,d,g){var y=u.method!=null?u.method.toUpperCase():"GET",_=u.body,b=(u.serialize==null||u.serialize===JSON.serialize)&&!(_ instanceof t.FormData||_ instanceof t.URLSearchParams),S=u.responseType||(typeof u.extract=="function"?"":"json"),w=new t.XMLHttpRequest,P=!1,x=!1,W=w,M,R=w.abort;w.abort=function(){P=!0,R.call(this)},w.open(y,f,u.async!==!1,typeof u.user=="string"?u.user:void 0,typeof u.password=="string"?u.password:void 0),b&&_!=null&&!c(u,"content-type")&&w.setRequestHeader("Content-Type","application/json; charset=utf-8"),typeof u.deserialize!="function"&&!c(u,"accept")&&w.setRequestHeader("Accept","application/json, text/*"),u.withCredentials&&(w.withCredentials=u.withCredentials),u.timeout&&(w.timeout=u.timeout),w.responseType=S;for(var k in u.headers)nr.call(u.headers,k)&&w.setRequestHeader(k,u.headers[k]);w.onreadystatechange=function(T){if(!P&&T.target.readyState===4)try{var L=T.target.status>=200&&T.target.status<300||T.target.status===304||/^file:\/\//i.test(f),C=T.target.response,A;if(S==="json"){if(!T.target.responseType&&typeof u.extract!="function")try{C=JSON.parse(T.target.responseText)}catch{C=null}}else(!S||S==="text")&&C==null&&(C=T.target.responseText);if(typeof u.extract=="function"?(C=u.extract(T.target,u),L=!0):typeof u.deserialize=="function"&&(C=u.deserialize(C)),L)d(C);else{var F=function(){try{A=T.target.responseText}catch{A=C}var Y=new Error(A);Y.code=T.target.status,Y.response=C,g(Y)};w.status===0?setTimeout(function(){x||F()}):F()}}catch(Y){g(Y)}},w.ontimeout=function(T){x=!0;var L=new Error("Request timed out");L.code=T.target.status,g(L)},typeof u.config=="function"&&(w=u.config(w,u,f)||w,w!==W&&(M=w.abort,w.abort=function(){P=!0,M.call(this)})),_==null?w.send():typeof u.serialize=="function"?w.send(u.serialize(_)):_ instanceof t.FormData||_ instanceof t.URLSearchParams?w.send(_):w.send(JSON.stringify(_))}),jsonp:a(function(f,u,d,g){var y=u.callbackName||"_mithril_"+Math.round(Math.random()*1e16)+"_"+n++,_=t.document.createElement("script");t[y]=function(b){delete t[y],_.parentNode.removeChild(_),d(b)},_.onerror=function(){delete t[y],_.parentNode.removeChild(_),g(new Error("JSONP request failed"))},_.src=f+(f.indexOf("?")<0?"?":"&")+encodeURIComponent(u.callbackKey||"callback")+"="+encodeURIComponent(y),t.document.documentElement.appendChild(_)})}},ci=Oe.exports,li=Ut,ui=oi(typeof window!="undefined"?window:null,ci,li.redraw);function ir(t){try{return decodeURIComponent(t)}catch{return t}}var Fr=function(t){if(t===""||t==null)return{};t.charAt(0)==="?"&&(t=t.slice(1));for(var e=t.split("&"),r={},n={},i=0;i<e.length;i++){var a=e[i].split("="),c=ir(a[0]),f=a.length===2?ir(a[1]):"";f==="true"?f=!0:f==="false"&&(f=!1);var u=c.split(/\]\[?|\[/),d=n;c.indexOf("[")>-1&&u.pop();for(var g=0;g<u.length;g++){var y=u[g],_=u[g+1],b=_==""||!isNaN(parseInt(_,10));if(y===""){var c=u.slice(0,g).join();r[c]==null&&(r[c]=Array.isArray(d)?d.length:0),y=r[c]++}else if(y==="__proto__")break;if(g===u.length-1)d[y]=f;else{var S=Object.getOwnPropertyDescriptor(d,y);S!=null&&(S=S.value),S==null&&(d[y]=S=b?[]:{}),d=S}}}return n},fi=Fr,Bt=function(t){var e=t.indexOf("?"),r=t.indexOf("#"),n=r<0?t.length:r,i=e<0?n:e,a=t.slice(0,i).replace(/\/{2,}/g,"/");return a?(a[0]!=="/"&&(a="/"+a),a.length>1&&a[a.length-1]==="/"&&(a=a.slice(0,-1))):a="/",{path:a,params:e<0?{}:fi(t.slice(e+1,n))}},hi=Bt,di=function(t){var e=hi(t),r=Object.keys(e.params),n=[],i=new RegExp("^"+e.path.replace(/:([^\/.-]+)(\.{3}|\.(?!\.)|-)?|[\\^$*+.()|\[\]{}]/g,function(a,c,f){return c==null?"\\"+a:(n.push({k:c,r:f==="..."}),f==="..."?"(.*)":f==="."?"([^/]+)\\.":"([^/]+)"+(f||""))})+"$");return function(a){for(var c=0;c<r.length;c++)if(e.params[r[c]]!==a.params[r[c]])return!1;if(!n.length)return i.test(a.path);var f=i.exec(a.path);if(f==null)return!1;for(var c=0;c<n.length;c++)a.params[n[c].k]=n[c].r?f[c+1]:decodeURIComponent(f[c+1]);return!0}},sr=tt,ar=new RegExp("^(?:key|oninit|oncreate|onbeforeupdate|onupdate|onbeforeremove|onremove)$"),Hr=function(t,e){var r={};if(e!=null)for(var n in t)sr.call(t,n)&&!ar.test(n)&&e.indexOf(n)<0&&(r[n]=t[n]);else for(var n in t)sr.call(t,n)&&!ar.test(n)&&(r[n]=t[n]);return r},pi=ue,mi=Lr,gi=Oe.exports,or=xt,cr=Bt,yi=di,_i=$r,vi=Hr,It={};function bi(t){try{return decodeURIComponent(t)}catch{return t}}var wi=function(t,e){var r=t==null?null:typeof t.setImmediate=="function"?t.setImmediate:t.setTimeout,n=gi.resolve(),i=!1,a=!1,c=0,f,u,d=It,g,y,_,b,S={onbeforeupdate:function(){return c=c?2:1,!(!c||It===d)},onremove:function(){t.removeEventListener("popstate",x,!1),t.removeEventListener("hashchange",P,!1)},view:function(){if(!(!c||It===d)){var R=[pi(g,y.key,y)];return d&&(R=d.render(R[0])),R}}},w=M.SKIP={};function P(){i=!1;var R=t.location.hash;M.prefix[0]!=="#"&&(R=t.location.search+R,M.prefix[0]!=="?"&&(R=t.location.pathname+R,R[0]!=="/"&&(R="/"+R)));var k=R.concat().replace(/(?:%[a-f89][a-f0-9])+/gim,bi).slice(M.prefix.length),T=cr(k);_i(T.params,t.history.state);function L(A){console.error(A),W(u,null,{replace:!0})}C(0);function C(A){for(;A<f.length;A++)if(f[A].check(T)){var F=f[A].component,Y=f[A].route,me=F,fe=b=function(X){if(fe===b){if(X===w)return C(A+1);g=X!=null&&(typeof X.view=="function"||typeof X=="function")?X:"div",y=T.params,_=k,b=null,d=F.render?F:null,c===2?e.redraw():(c=2,e.redraw.sync())}};F.view||typeof F=="function"?(F={},fe(me)):F.onmatch?n.then(function(){return F.onmatch(T.params,k,Y)}).then(fe,k===u?null:L):fe("div");return}if(k===u)throw new Error("Could not resolve default route "+u+".");W(u,null,{replace:!0})}}function x(){i||(i=!0,r(P))}function W(R,k,T){if(R=or(R,k),a){x();var L=T?T.state:null,C=T?T.title:null;T&&T.replace?t.history.replaceState(L,C,M.prefix+R):t.history.pushState(L,C,M.prefix+R)}else t.location.href=M.prefix+R}function M(R,k,T){if(!R)throw new TypeError("DOM element being rendered to does not exist.");if(f=Object.keys(T).map(function(C){if(C[0]!=="/")throw new SyntaxError("Routes must start with a '/'.");if(/:([^\/\.-]+)(\.{3})?:/.test(C))throw new SyntaxError("Route parameter names must be separated with either '/', '.', or '-'.");return{route:C,component:T[C],check:yi(C)}}),u=k,k!=null){var L=cr(k);if(!f.some(function(C){return C.check(L)}))throw new ReferenceError("Default route doesn't match any known routes.")}typeof t.history.pushState=="function"?t.addEventListener("popstate",x,!1):M.prefix[0]==="#"&&t.addEventListener("hashchange",P,!1),a=!0,e.mount(R,S),P()}return M.set=function(R,k,T){b!=null&&(T=T||{},T.replace=!0),b=null,W(R,k,T)},M.get=function(){return _},M.prefix="#!",M.Link={view:function(R){var k=mi(R.attrs.selector||"a",vi(R.attrs,["options","params","selector","onclick"]),R.children),T,L,C;return(k.attrs.disabled=Boolean(k.attrs.disabled))?(k.attrs.href=null,k.attrs["aria-disabled"]="true"):(T=R.attrs.options,L=R.attrs.onclick,C=or(k.attrs.href,R.attrs.params),k.attrs.href=M.prefix+C,k.attrs.onclick=function(A){var F;typeof L=="function"?F=L.call(A.currentTarget,A):L==null||typeof L!="object"||typeof L.handleEvent=="function"&&L.handleEvent(A),F!==!1&&!A.defaultPrevented&&(A.button===0||A.which===0||A.which===1)&&(!A.currentTarget.target||A.currentTarget.target==="_self")&&!A.ctrlKey&&!A.metaKey&&!A.shiftKey&&!A.altKey&&(A.preventDefault(),A.redraw=!1,M.set(C,null,T))}),k}},M.param=function(R){return y&&R!=null?y[R]:y},M},Ii=Ut,Ei=wi(typeof window!="undefined"?window:null,Ii),rt=Zn,jr=ui,Vr=Ut,V=function(){return rt.apply(this,arguments)};V.m=rt;V.trust=rt.trust;V.fragment=rt.fragment;V.Fragment="[";V.mount=Vr.mount;V.route=Ei;V.render=xr;V.redraw=Vr.redraw;V.request=jr.request;V.jsonp=jr.jsonp;V.parseQueryString=Fr;V.buildQueryString=Br;V.parsePathname=Bt;V.buildPathname=xt;V.vnode=ue;V.PromisePolyfill=Ur;V.censor=Hr;var J=V;function Ti(){return{view:()=>J("main",null,J("h1",null,"Login"))}}const Ye={counter:0};function Si(){function t(){J.route.set("/sec")}function e(){Ye.counter++}return{view:()=>J("main",null,J("h1",null,"Home"),J("h2",null,Ye.counter),J("button",{onclick:t},"Second"),J("button",{onclick:e},"ADD"))}}function Ri(){function t(){J.route.set("/home")}function e(){Ye.counter++}return{view:()=>J("main",null,J("h1",null,"Second"),J("h2",null,Ye.counter),J("button",{onclick:t},"Home"),J("button",{onclick:e},"ADD"))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wr=function(t){const e=[];let r=0;for(let n=0;n<t.length;n++){let i=t.charCodeAt(n);i<128?e[r++]=i:i<2048?(e[r++]=i>>6|192,e[r++]=i&63|128):(i&64512)===55296&&n+1<t.length&&(t.charCodeAt(n+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++n)&1023),e[r++]=i>>18|240,e[r++]=i>>12&63|128,e[r++]=i>>6&63|128,e[r++]=i&63|128):(e[r++]=i>>12|224,e[r++]=i>>6&63|128,e[r++]=i&63|128)}return e},Ai=function(t){const e=[];let r=0,n=0;for(;r<t.length;){const i=t[r++];if(i<128)e[n++]=String.fromCharCode(i);else if(i>191&&i<224){const a=t[r++];e[n++]=String.fromCharCode((i&31)<<6|a&63)}else if(i>239&&i<365){const a=t[r++],c=t[r++],f=t[r++],u=((i&7)<<18|(a&63)<<12|(c&63)<<6|f&63)-65536;e[n++]=String.fromCharCode(55296+(u>>10)),e[n++]=String.fromCharCode(56320+(u&1023))}else{const a=t[r++],c=t[r++];e[n++]=String.fromCharCode((i&15)<<12|(a&63)<<6|c&63)}}return e.join("")},zr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const r=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let i=0;i<t.length;i+=3){const a=t[i],c=i+1<t.length,f=c?t[i+1]:0,u=i+2<t.length,d=u?t[i+2]:0,g=a>>2,y=(a&3)<<4|f>>4;let _=(f&15)<<2|d>>6,b=d&63;u||(b=64,c||(_=64)),n.push(r[g],r[y],r[_],r[b])}return n.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Wr(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Ai(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const r=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let i=0;i<t.length;){const a=r[t.charAt(i++)],f=i<t.length?r[t.charAt(i)]:0;++i;const d=i<t.length?r[t.charAt(i)]:64;++i;const y=i<t.length?r[t.charAt(i)]:64;if(++i,a==null||f==null||d==null||y==null)throw Error();const _=a<<2|f>>4;if(n.push(_),d!==64){const b=f<<4&240|d>>2;if(n.push(b),y!==64){const S=d<<6&192|y;n.push(S)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Oi=function(t){const e=Wr(t);return zr.encodeByteArray(e,!0)},qr=function(t){return Oi(t).replace(/\./g,"")},Ci=function(t){try{return zr.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ki(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(q())}function Pi(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Ni(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Di(){const t=q();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Mi(){return typeof indexedDB=="object"}function Li(){return new Promise((t,e)=>{try{let r=!0;const n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),r||self.indexedDB.deleteDatabase(n),t(!0)},i.onupgradeneeded=()=>{r=!1},i.onerror=()=>{var a;e(((a=i.error)===null||a===void 0?void 0:a.message)||"")}}catch(r){e(r)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ui="FirebaseError";class Ee extends Error{constructor(e,r,n){super(r),this.code=e,this.customData=n,this.name=Ui,Object.setPrototypeOf(this,Ee.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ue.prototype.create)}}class Ue{constructor(e,r,n){this.service=e,this.serviceName=r,this.errors=n}create(e,...r){const n=r[0]||{},i=`${this.service}/${e}`,a=this.errors[e],c=a?xi(a,n):"Error",f=`${this.serviceName}: ${c} (${i}).`;return new Ee(i,f,n)}}function xi(t,e){return t.replace(Bi,(r,n)=>{const i=e[n];return i!=null?String(i):`<${n}?>`})}const Bi=/\{\$([^}]+)}/g;function $i(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Kr(t,e){if(t===e)return!0;const r=Object.keys(t),n=Object.keys(e);for(const i of r){if(!n.includes(i))return!1;const a=t[i],c=e[i];if(lr(a)&&lr(c)){if(!Kr(a,c))return!1}else if(a!==c)return!1}for(const i of n)if(!r.includes(i))return!1;return!0}function lr(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe(t){const e=[];for(const[r,n]of Object.entries(t))Array.isArray(n)?n.forEach(i=>{e.push(encodeURIComponent(r)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(r)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function Fi(t,e){const r=new Hi(t,e);return r.subscribe.bind(r)}class Hi{constructor(e,r){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(r=>{r.next(e)})}error(e){this.forEachObserver(r=>{r.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,r,n){let i;if(e===void 0&&r===void 0&&n===void 0)throw new Error("Missing Observer.");ji(e,["next","error","complete"])?i=e:i={next:e,error:r,complete:n},i.next===void 0&&(i.next=Et),i.error===void 0&&(i.error=Et),i.complete===void 0&&(i.complete=Et);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let r=0;r<this.observers.length;r++)this.sendOne(r,e)}sendOne(e,r){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{r(this.observers[e])}catch(n){typeof console!="undefined"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ji(t,e){if(typeof t!="object"||t===null)return!1;for(const r of e)if(r in t&&typeof t[r]=="function")return!0;return!1}function Et(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(t){return t&&t._delegate?t._delegate:t}class Pe{constructor(e,r,n){this.name=e,this.instanceFactory=r,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var D;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(D||(D={}));const Vi={debug:D.DEBUG,verbose:D.VERBOSE,info:D.INFO,warn:D.WARN,error:D.ERROR,silent:D.SILENT},Wi=D.INFO,zi={[D.DEBUG]:"log",[D.VERBOSE]:"log",[D.INFO]:"info",[D.WARN]:"warn",[D.ERROR]:"error"},qi=(t,e,...r)=>{if(e<t.logLevel)return;const n=new Date().toISOString(),i=zi[e];if(i)console[i](`[${n}]  ${t.name}:`,...r);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Gr{constructor(e){this.name=e,this._logLevel=Wi,this._logHandler=qi,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in D))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Vi[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,D.DEBUG,...e),this._logHandler(this,D.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,D.VERBOSE,...e),this._logHandler(this,D.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,D.INFO,...e),this._logHandler(this,D.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,D.WARN,...e),this._logHandler(this,D.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,D.ERROR,...e),this._logHandler(this,D.ERROR,...e)}}const Ki=(t,e)=>e.some(r=>t instanceof r);let ur,fr;function Gi(){return ur||(ur=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ji(){return fr||(fr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Jr=new WeakMap,kt=new WeakMap,Yr=new WeakMap,Tt=new WeakMap,$t=new WeakMap;function Yi(t){const e=new Promise((r,n)=>{const i=()=>{t.removeEventListener("success",a),t.removeEventListener("error",c)},a=()=>{r(le(t.result)),i()},c=()=>{n(t.error),i()};t.addEventListener("success",a),t.addEventListener("error",c)});return e.then(r=>{r instanceof IDBCursor&&Jr.set(r,t)}).catch(()=>{}),$t.set(e,t),e}function Xi(t){if(kt.has(t))return;const e=new Promise((r,n)=>{const i=()=>{t.removeEventListener("complete",a),t.removeEventListener("error",c),t.removeEventListener("abort",c)},a=()=>{r(),i()},c=()=>{n(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",a),t.addEventListener("error",c),t.addEventListener("abort",c)});kt.set(t,e)}let Pt={get(t,e,r){if(t instanceof IDBTransaction){if(e==="done")return kt.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Yr.get(t);if(e==="store")return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return le(t[e])},set(t,e,r){return t[e]=r,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Qi(t){Pt=t(Pt)}function Zi(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...r){const n=t.call(St(this),e,...r);return Yr.set(n,e.sort?e.sort():[e]),le(n)}:Ji().includes(t)?function(...e){return t.apply(St(this),e),le(Jr.get(this))}:function(...e){return le(t.apply(St(this),e))}}function es(t){return typeof t=="function"?Zi(t):(t instanceof IDBTransaction&&Xi(t),Ki(t,Gi())?new Proxy(t,Pt):t)}function le(t){if(t instanceof IDBRequest)return Yi(t);if(Tt.has(t))return Tt.get(t);const e=es(t);return e!==t&&(Tt.set(t,e),$t.set(e,t)),e}const St=t=>$t.get(t);function ts(t,e,{blocked:r,upgrade:n,blocking:i,terminated:a}={}){const c=indexedDB.open(t,e),f=le(c);return n&&c.addEventListener("upgradeneeded",u=>{n(le(c.result),u.oldVersion,u.newVersion,le(c.transaction))}),r&&c.addEventListener("blocked",()=>r()),f.then(u=>{a&&u.addEventListener("close",()=>a()),i&&u.addEventListener("versionchange",()=>i())}).catch(()=>{}),f}const rs=["get","getKey","getAll","getAllKeys","count"],ns=["put","add","delete","clear"],Rt=new Map;function hr(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Rt.get(e))return Rt.get(e);const r=e.replace(/FromIndex$/,""),n=e!==r,i=ns.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!(i||rs.includes(r)))return;const a=async function(c,...f){const u=this.transaction(c,i?"readwrite":"readonly");let d=u.store;return n&&(d=d.index(f.shift())),(await Promise.all([d[r](...f),i&&u.done]))[0]};return Rt.set(e,a),a}Qi(t=>({...t,get:(e,r,n)=>hr(e,r)||t.get(e,r,n),has:(e,r)=>!!hr(e,r)||t.has(e,r)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(r=>{if(ss(r)){const n=r.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(r=>r).join(" ")}}function ss(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Nt="@firebase/app",dr="0.7.28";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft=new Gr("@firebase/app"),as="@firebase/app-compat",os="@firebase/analytics-compat",cs="@firebase/analytics",ls="@firebase/app-check-compat",us="@firebase/app-check",fs="@firebase/auth",hs="@firebase/auth-compat",ds="@firebase/database",ps="@firebase/database-compat",ms="@firebase/functions",gs="@firebase/functions-compat",ys="@firebase/installations",_s="@firebase/installations-compat",vs="@firebase/messaging",bs="@firebase/messaging-compat",ws="@firebase/performance",Is="@firebase/performance-compat",Es="@firebase/remote-config",Ts="@firebase/remote-config-compat",Ss="@firebase/storage",Rs="@firebase/storage-compat",As="@firebase/firestore",Os="@firebase/firestore-compat",Cs="firebase",ks="9.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ps="[DEFAULT]",Ns={[Nt]:"fire-core",[as]:"fire-core-compat",[cs]:"fire-analytics",[os]:"fire-analytics-compat",[us]:"fire-app-check",[ls]:"fire-app-check-compat",[fs]:"fire-auth",[hs]:"fire-auth-compat",[ds]:"fire-rtdb",[ps]:"fire-rtdb-compat",[ms]:"fire-fn",[gs]:"fire-fn-compat",[ys]:"fire-iid",[_s]:"fire-iid-compat",[vs]:"fire-fcm",[bs]:"fire-fcm-compat",[ws]:"fire-perf",[Is]:"fire-perf-compat",[Es]:"fire-rc",[Ts]:"fire-rc-compat",[Ss]:"fire-gcs",[Rs]:"fire-gcs-compat",[As]:"fire-fst",[Os]:"fire-fst-compat","fire-js":"fire-js",[Cs]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr=new Map,pr=new Map;function Ds(t,e){try{t.container.addComponent(e)}catch(r){Ft.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,r)}}function Ne(t){const e=t.name;if(pr.has(e))return Ft.debug(`There were multiple attempts to register component ${e}.`),!1;pr.set(e,t);for(const r of Xr.values())Ds(r,t);return!0}function Qr(t,e){const r=t.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ms={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},nt=new Ue("app","Firebase",Ms);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const it=ks;function Ls(t=Ps){const e=Xr.get(t);if(!e)throw nt.create("no-app",{appName:t});return e}function Ce(t,e,r){var n;let i=(n=Ns[t])!==null&&n!==void 0?n:t;r&&(i+=`-${r}`);const a=i.match(/\s|\//),c=e.match(/\s|\//);if(a||c){const f=[`Unable to register library "${i}" with version "${e}":`];a&&f.push(`library name "${i}" contains illegal characters (whitespace or "/")`),a&&c&&f.push("and"),c&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ft.warn(f.join(" "));return}Ne(new Pe(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Us="firebase-heartbeat-database",xs=1,De="firebase-heartbeat-store";let At=null;function Zr(){return At||(At=ts(Us,xs,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(De)}}}).catch(t=>{throw nt.create("storage-open",{originalErrorMessage:t.message})})),At}async function Bs(t){var e;try{return(await Zr()).transaction(De).objectStore(De).get(en(t))}catch(r){throw nt.create("storage-get",{originalErrorMessage:(e=r)===null||e===void 0?void 0:e.message})}}async function mr(t,e){var r;try{const i=(await Zr()).transaction(De,"readwrite");return await i.objectStore(De).put(e,en(t)),i.done}catch(n){throw nt.create("storage-set",{originalErrorMessage:(r=n)===null||r===void 0?void 0:r.message})}}function en(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $s=1024,Fs=30*24*60*60*1e3;class Hs{constructor(e){this.container=e,this._heartbeatsCache=null;const r=this.container.getProvider("app").getImmediate();this._storage=new Vs(r),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),n=gr();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(i=>i.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const a=new Date(i.date).valueOf();return Date.now()-a<=Fs}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=gr(),{heartbeatsToSend:r,unsentEntries:n}=js(this._heartbeatsCache.heartbeats),i=qr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function gr(){return new Date().toISOString().substring(0,10)}function js(t,e=$s){const r=[];let n=t.slice();for(const i of t){const a=r.find(c=>c.agent===i.agent);if(a){if(a.dates.push(i.date),yr(r)>e){a.dates.pop();break}}else if(r.push({agent:i.agent,dates:[i.date]}),yr(r)>e){r.pop();break}n=n.slice(1)}return{heartbeatsToSend:r,unsentEntries:n}}class Vs{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Mi()?Li().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Bs(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var r;if(await this._canUseIndexedDBPromise){const i=await this.read();return mr(this.app,{lastSentHeartbeatDate:(r=e.lastSentHeartbeatDate)!==null&&r!==void 0?r:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var r;if(await this._canUseIndexedDBPromise){const i=await this.read();return mr(this.app,{lastSentHeartbeatDate:(r=e.lastSentHeartbeatDate)!==null&&r!==void 0?r:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function yr(t){return qr(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ws(t){Ne(new Pe("platform-logger",e=>new is(e),"PRIVATE")),Ne(new Pe("heartbeat",e=>new Hs(e),"PRIVATE")),Ce(Nt,dr,t),Ce(Nt,dr,"esm2017"),Ce("fire-js","")}Ws("");function Ht(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(t);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(t,n[i])&&(r[n[i]]=t[n[i]]);return r}function tn(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const zs=tn,rn=new Ue("auth","Firebase",tn());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _r=new Gr("@firebase/auth");function qe(t,...e){_r.logLevel<=D.ERROR&&_r.error(`Auth (${it}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function re(t,...e){throw jt(t,...e)}function Q(t,...e){return jt(t,...e)}function qs(t,e,r){const n=Object.assign(Object.assign({},zs()),{[e]:r});return new Ue("auth","Firebase",n).create(e,{appName:t.name})}function jt(t,...e){if(typeof t!="string"){const r=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=t.name),t._errorFactory.create(r,...n)}return rn.create(t,...e)}function E(t,e,...r){if(!t)throw jt(e,...r)}function ee(t){const e="INTERNAL ASSERTION FAILED: "+t;throw qe(e),new Error(e)}function ne(t,e){t||ee(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vr=new Map;function te(t){ne(t instanceof Function,"Expected a class definition");let e=vr.get(t);return e?(ne(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,vr.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ks(t,e){const r=Qr(t,"auth");if(r.isInitialized()){const i=r.getImmediate(),a=r.getOptions();if(Kr(a,e!=null?e:{}))return i;re(i,"already-initialized")}return r.initialize({options:e})}function Gs(t,e){const r=(e==null?void 0:e.persistence)||[],n=(Array.isArray(r)?r:[r]).map(te);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Js(){return br()==="http:"||br()==="https:"}function br(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ys(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Js()||Pi()||"connection"in navigator)?navigator.onLine:!0}function Xs(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e,r){this.shortDelay=e,this.longDelay=r,ne(r>e,"Short delay should be less than long delay!"),this.isMobile=ki()||Ni()}get(){return Ys()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(t,e){ne(t.emulator,"Emulator should always be set here");const{url:r}=t.emulator;return e?`${r}${e.startsWith("/")?e.slice(1):e}`:r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{static initialize(e,r,n){this.fetchImpl=e,r&&(this.headersImpl=r),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;ee("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;ee("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;ee("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qs={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zs=new $e(3e4,6e4);function ea(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function st(t,e,r,n,i={}){return sn(t,i,async()=>{let a={},c={};n&&(e==="GET"?c=n:a={body:JSON.stringify(n)});const f=xe(Object.assign({key:t.config.apiKey},c)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),nn.fetch()(an(t,t.config.apiHost,r,f),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},a))})}async function sn(t,e,r){t._canInitEmulator=!1;const n=Object.assign(Object.assign({},Qs),e);try{const i=new ra(t),a=await Promise.race([r(),i.promise]);i.clearNetworkTimeout();const c=await a.json();if("needConfirmation"in c)throw ze(t,"account-exists-with-different-credential",c);if(a.ok&&!("errorMessage"in c))return c;{const f=a.ok?c.errorMessage:c.error.message,[u,d]=f.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw ze(t,"credential-already-in-use",c);if(u==="EMAIL_EXISTS")throw ze(t,"email-already-in-use",c);if(u==="USER_DISABLED")throw ze(t,"user-disabled",c);const g=n[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw qs(t,g,d);re(t,g)}}catch(i){if(i instanceof Ee)throw i;re(t,"network-request-failed")}}async function ta(t,e,r,n,i={}){const a=await st(t,e,r,n,i);return"mfaPendingCredential"in a&&re(t,"multi-factor-auth-required",{_serverResponse:a}),a}function an(t,e,r,n){const i=`${e}${r}?${n}`;return t.config.emulator?Vt(t.config,i):`${t.config.apiScheme}://${i}`}class ra{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((r,n)=>{this.timer=setTimeout(()=>n(Q(this.auth,"network-request-failed")),Zs.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ze(t,e,r){const n={appName:t.name};r.email&&(n.email=r.email),r.phoneNumber&&(n.phoneNumber=r.phoneNumber);const i=Q(t,e,n);return i.customData._tokenResponse=r,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function na(t,e){return st(t,"POST","/v1/accounts:delete",e)}async function ia(t,e){return st(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ke(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function sa(t,e=!1){const r=Be(t),n=await r.getIdToken(e),i=Wt(n);E(i&&i.exp&&i.auth_time&&i.iat,r.auth,"internal-error");const a=typeof i.firebase=="object"?i.firebase:void 0,c=a==null?void 0:a.sign_in_provider;return{claims:i,token:n,authTime:ke(Ot(i.auth_time)),issuedAtTime:ke(Ot(i.iat)),expirationTime:ke(Ot(i.exp)),signInProvider:c||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function Ot(t){return Number(t)*1e3}function Wt(t){var e;const[r,n,i]=t.split(".");if(r===void 0||n===void 0||i===void 0)return qe("JWT malformed, contained fewer than 3 sections"),null;try{const a=Ci(n);return a?JSON.parse(a):(qe("Failed to decode base64 JWT payload"),null)}catch(a){return qe("Caught error parsing JWT payload as JSON",(e=a)===null||e===void 0?void 0:e.toString()),null}}function aa(t){const e=Wt(t);return E(e,"internal-error"),E(typeof e.exp!="undefined","internal-error"),E(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Me(t,e,r=!1){if(r)return e;try{return await e}catch(n){throw n instanceof Ee&&oa(n)&&t.auth.currentUser===t&&await t.auth.signOut(),n}}function oa({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var r;if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const i=((r=this.user.stsTokenManager.expirationTime)!==null&&r!==void 0?r:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const r=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},r)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(r){((e=r)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e,r){this.createdAt=e,this.lastLoginAt=r,this._initializeTime()}_initializeTime(){this.lastSignInTime=ke(this.lastLoginAt),this.creationTime=ke(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xe(t){var e;const r=t.auth,n=await t.getIdToken(),i=await Me(t,ia(r,{idToken:n}));E(i==null?void 0:i.users.length,r,"internal-error");const a=i.users[0];t._notifyReloadListener(a);const c=!((e=a.providerUserInfo)===null||e===void 0)&&e.length?fa(a.providerUserInfo):[],f=ua(t.providerData,c),u=t.isAnonymous,d=!(t.email&&a.passwordHash)&&!(f!=null&&f.length),g=u?d:!1,y={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:f,metadata:new on(a.createdAt,a.lastLoginAt),isAnonymous:g};Object.assign(t,y)}async function la(t){const e=Be(t);await Xe(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ua(t,e){return[...t.filter(n=>!e.some(i=>i.providerId===n.providerId)),...e]}function fa(t){return t.map(e=>{var{providerId:r}=e,n=Ht(e,["providerId"]);return{providerId:r,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ha(t,e){const r=await sn(t,{},async()=>{const n=xe({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:a}=t.config,c=an(t,i,"/v1/token",`key=${a}`),f=await t._getAdditionalHeaders();return f["Content-Type"]="application/x-www-form-urlencoded",nn.fetch()(c,{method:"POST",headers:f,body:n})});return{accessToken:r.access_token,expiresIn:r.expires_in,refreshToken:r.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){E(e.idToken,"internal-error"),E(typeof e.idToken!="undefined","internal-error"),E(typeof e.refreshToken!="undefined","internal-error");const r="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):aa(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,r)}async getToken(e,r=!1){return E(!this.accessToken||this.refreshToken,e,"user-token-expired"),!r&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,r){const{accessToken:n,refreshToken:i,expiresIn:a}=await ha(e,r);this.updateTokensAndExpiration(n,i,Number(a))}updateTokensAndExpiration(e,r,n){this.refreshToken=r||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,r){const{refreshToken:n,accessToken:i,expirationTime:a}=r,c=new Le;return n&&(E(typeof n=="string","internal-error",{appName:e}),c.refreshToken=n),i&&(E(typeof i=="string","internal-error",{appName:e}),c.accessToken=i),a&&(E(typeof a=="number","internal-error",{appName:e}),c.expirationTime=a),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Le,this.toJSON())}_performRefresh(){return ee("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(t,e){E(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class de{constructor(e){var{uid:r,auth:n,stsTokenManager:i}=e,a=Ht(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ca(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=r,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new on(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const r=await Me(this,this.stsTokenManager.getToken(this.auth,e));return E(r,this.auth,"internal-error"),this.accessToken!==r&&(this.accessToken=r,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),r}getIdTokenResult(e){return sa(this,e)}reload(){return la(this)}_assign(e){this!==e&&(E(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(r=>Object.assign({},r)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new de(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){E(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,r=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),r&&await Xe(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Me(this,na(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,r){var n,i,a,c,f,u,d,g;const y=(n=r.displayName)!==null&&n!==void 0?n:void 0,_=(i=r.email)!==null&&i!==void 0?i:void 0,b=(a=r.phoneNumber)!==null&&a!==void 0?a:void 0,S=(c=r.photoURL)!==null&&c!==void 0?c:void 0,w=(f=r.tenantId)!==null&&f!==void 0?f:void 0,P=(u=r._redirectEventId)!==null&&u!==void 0?u:void 0,x=(d=r.createdAt)!==null&&d!==void 0?d:void 0,W=(g=r.lastLoginAt)!==null&&g!==void 0?g:void 0,{uid:M,emailVerified:R,isAnonymous:k,providerData:T,stsTokenManager:L}=r;E(M&&L,e,"internal-error");const C=Le.fromJSON(this.name,L);E(typeof M=="string",e,"internal-error"),ie(y,e.name),ie(_,e.name),E(typeof R=="boolean",e,"internal-error"),E(typeof k=="boolean",e,"internal-error"),ie(b,e.name),ie(S,e.name),ie(w,e.name),ie(P,e.name),ie(x,e.name),ie(W,e.name);const A=new de({uid:M,auth:e,email:_,emailVerified:R,displayName:y,isAnonymous:k,photoURL:S,phoneNumber:b,tenantId:w,stsTokenManager:C,createdAt:x,lastLoginAt:W});return T&&Array.isArray(T)&&(A.providerData=T.map(F=>Object.assign({},F))),P&&(A._redirectEventId=P),A}static async _fromIdTokenResponse(e,r,n=!1){const i=new Le;i.updateFromServerResponse(r);const a=new de({uid:r.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await Xe(a),a}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,r){this.storage[e]=r}async _get(e){const r=this.storage[e];return r===void 0?null:r}async _remove(e){delete this.storage[e]}_addListener(e,r){}_removeListener(e,r){}}cn.type="NONE";const wr=cn;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(t,e,r){return`firebase:${t}:${e}:${r}`}class be{constructor(e,r,n){this.persistence=e,this.auth=r,this.userKey=n;const{config:i,name:a}=this.auth;this.fullUserKey=Ke(this.userKey,i.apiKey,a),this.fullPersistenceKey=Ke("persistence",i.apiKey,a),this.boundEventHandler=r._onStorageEvent.bind(r),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?de._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const r=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,r)return this.setCurrentUser(r)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,r,n="authUser"){if(!r.length)return new be(te(wr),e,n);const i=(await Promise.all(r.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let a=i[0]||te(wr);const c=Ke(n,e.config.apiKey,e.name);let f=null;for(const d of r)try{const g=await d._get(c);if(g){const y=de._fromJSON(e,g);d!==a&&(f=y),a=d;break}}catch{}const u=i.filter(d=>d._shouldAllowMigration);return!a._shouldAllowMigration||!u.length?new be(a,e,n):(a=u[0],f&&await a._set(c,f.toJSON()),await Promise.all(r.map(async d=>{if(d!==a)try{await d._remove(c)}catch{}})),new be(a,e,n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ir(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(fn(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ln(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(dn(e))return"Blackberry";if(pn(e))return"Webos";if(zt(e))return"Safari";if((e.includes("chrome/")||un(e))&&!e.includes("edge/"))return"Chrome";if(hn(e))return"Android";{const r=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(r);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function ln(t=q()){return/firefox\//i.test(t)}function zt(t=q()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function un(t=q()){return/crios\//i.test(t)}function fn(t=q()){return/iemobile/i.test(t)}function hn(t=q()){return/android/i.test(t)}function dn(t=q()){return/blackberry/i.test(t)}function pn(t=q()){return/webos/i.test(t)}function at(t=q()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function da(t=q()){var e;return at(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function pa(){return Di()&&document.documentMode===10}function mn(t=q()){return at(t)||hn(t)||pn(t)||dn(t)||/windows phone/i.test(t)||fn(t)}function ma(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gn(t,e=[]){let r;switch(t){case"Browser":r=Ir(q());break;case"Worker":r=`${Ir(q())}-${t}`;break;default:r=t}const n=e.length?e.join(","):"FirebaseCore-web";return`${r}/JsCore/${it}/${n}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,r){const n=a=>new Promise((c,f)=>{try{const u=e(a);c(u)}catch(u){f(u)}});n.onAbort=r,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var r;if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const a of n)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(r=i)===null||r===void 0?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(e,r,n){this.app=e,this.heartbeatServiceProvider=r,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Er(this),this.idTokenSubscription=new Er(this),this.beforeStateQueue=new ga(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=rn,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,r){return r&&(this._popupRedirectResolver=te(r)),this._initializationPromise=this.queue(async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await be.create(this,e),!this._deleted)){if(!((n=this._popupRedirectResolver)===null||n===void 0)&&n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(r),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var r;const n=await this.assertedPersistence.getCurrentUser();let i=n,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId,f=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!c||c===f)&&(u==null?void 0:u.user)&&(i=u.user,a=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(i)}catch(c){i=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return E(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let r=null;try{r=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return r}async reloadAndSetCurrentUserOrClear(e){var r;try{await Xe(e)}catch(n){if(((r=n)===null||r===void 0?void 0:r.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Xs()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const r=e?Be(e):null;return r&&E(r.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(r&&r._clone(this))}async _updateCurrentUser(e,r=!1){if(!this._deleted)return e&&E(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),r||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(te(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ue("auth","Firebase",e())}onAuthStateChanged(e,r,n){return this.registerStateListener(this.authStateSubscription,e,r,n)}beforeAuthStateChanged(e,r){return this.beforeStateQueue.pushCallback(e,r)}onIdTokenChanged(e,r,n){return this.registerStateListener(this.idTokenSubscription,e,r,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,r){const n=await this.getOrInitRedirectPersistenceManager(r);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const r=e&&te(e)||this._popupRedirectResolver;E(r,this,"argument-error"),this.redirectPersistenceManager=await be.create(this,[te(r._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var r,n;return this._isInitialized&&await this.queue(async()=>{}),((r=this._currentUser)===null||r===void 0?void 0:r._redirectEventId)===e?this._currentUser:((n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,r;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=(r=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&r!==void 0?r:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,r,n,i){if(this._deleted)return()=>{};const a=typeof r=="function"?r:r.next.bind(r),c=this._isInitialized?Promise.resolve():this._initializationPromise;return E(c,this,"internal-error"),c.then(()=>a(this.currentUser)),typeof r=="function"?e.addObserver(r,n,i):e.addObserver(r)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return E(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=gn(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const r={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(r["X-Firebase-gmpid"]=this.app.options.appId);const n=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return n&&(r["X-Firebase-Client"]=n),r}}function yn(t){return Be(t)}class Er{constructor(e){this.auth=e,this.observer=null,this.addObserver=Fi(r=>this.observer=r)}get next(){return E(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e,r){this.providerId=e,this.signInMethod=r}toJSON(){return ee("not implemented")}_getIdTokenResponse(e){return ee("not implemented")}_linkToIdToken(e,r){return ee("not implemented")}_getReauthenticationResolver(e){return ee("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function we(t,e){return ta(t,"POST","/v1/accounts:signInWithIdp",ea(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _a="http://localhost";class pe extends _n{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const r=new pe(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(r.idToken=e.idToken),e.accessToken&&(r.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(r.nonce=e.nonce),e.pendingToken&&(r.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(r.accessToken=e.oauthToken,r.secret=e.oauthTokenSecret):re("argument-error"),r}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const r=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:i}=r,a=Ht(r,["providerId","signInMethod"]);if(!n||!i)return null;const c=new pe(n,i);return c.idToken=a.idToken||void 0,c.accessToken=a.accessToken||void 0,c.secret=a.secret,c.nonce=a.nonce,c.pendingToken=a.pendingToken||null,c}_getIdTokenResponse(e){const r=this.buildRequest();return we(e,r)}_linkToIdToken(e,r){const n=this.buildRequest();return n.idToken=r,we(e,n)}_getReauthenticationResolver(e){const r=this.buildRequest();return r.autoCreate=!1,we(e,r)}buildRequest(){const e={requestUri:_a,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const r={};this.idToken&&(r.id_token=this.idToken),this.accessToken&&(r.access_token=this.accessToken),this.secret&&(r.oauth_token_secret=this.secret),r.providerId=this.providerId,this.nonce&&!this.pendingToken&&(r.nonce=this.nonce),e.postBody=xe(r)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe extends vn{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se extends Fe{constructor(){super("facebook.com")}static credential(e){return pe._fromParams({providerId:se.PROVIDER_ID,signInMethod:se.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return se.credentialFromTaggedObject(e)}static credentialFromError(e){return se.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return se.credential(e.oauthAccessToken)}catch{return null}}}se.FACEBOOK_SIGN_IN_METHOD="facebook.com";se.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae extends Fe{constructor(){super("google.com"),this.addScope("profile")}static credential(e,r){return pe._fromParams({providerId:ae.PROVIDER_ID,signInMethod:ae.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:r})}static credentialFromResult(e){return ae.credentialFromTaggedObject(e)}static credentialFromError(e){return ae.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:r,oauthAccessToken:n}=e;if(!r&&!n)return null;try{return ae.credential(r,n)}catch{return null}}}ae.GOOGLE_SIGN_IN_METHOD="google.com";ae.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe extends Fe{constructor(){super("github.com")}static credential(e){return pe._fromParams({providerId:oe.PROVIDER_ID,signInMethod:oe.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return oe.credentialFromTaggedObject(e)}static credentialFromError(e){return oe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return oe.credential(e.oauthAccessToken)}catch{return null}}}oe.GITHUB_SIGN_IN_METHOD="github.com";oe.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce extends Fe{constructor(){super("twitter.com")}static credential(e,r){return pe._fromParams({providerId:ce.PROVIDER_ID,signInMethod:ce.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:r})}static credentialFromResult(e){return ce.credentialFromTaggedObject(e)}static credentialFromError(e){return ce.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:r,oauthTokenSecret:n}=e;if(!r||!n)return null;try{return ce.credential(r,n)}catch{return null}}}ce.TWITTER_SIGN_IN_METHOD="twitter.com";ce.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,r,n,i=!1){const a=await de._fromIdTokenResponse(e,n,i),c=Tr(n);return new Ie({user:a,providerId:c,_tokenResponse:n,operationType:r})}static async _forOperation(e,r,n){await e._updateTokensIfNecessary(n,!0);const i=Tr(n);return new Ie({user:e,providerId:i,_tokenResponse:n,operationType:r})}}function Tr(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe extends Ee{constructor(e,r,n,i){var a;super(r.code,r.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,Qe.prototype),this.customData={appName:e.name,tenantId:(a=e.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:r.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,r,n,i){return new Qe(e,r,n,i)}}function bn(t,e,r,n){return(e==="reauthenticate"?r._getReauthenticationResolver(t):r._getIdTokenResponse(t)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?Qe._fromErrorAndOperation(t,a,e,n):a})}async function va(t,e,r=!1){const n=await Me(t,e._linkToIdToken(t.auth,await t.getIdToken()),r);return Ie._forOperation(t,"link",n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ba(t,e,r=!1){var n;const{auth:i}=t,a="reauthenticate";try{const c=await Me(t,bn(i,a,e,t),r);E(c.idToken,i,"internal-error");const f=Wt(c.idToken);E(f,i,"internal-error");const{sub:u}=f;return E(t.uid===u,i,"user-mismatch"),Ie._forOperation(t,a,c)}catch(c){throw((n=c)===null||n===void 0?void 0:n.code)==="auth/user-not-found"&&re(i,"user-mismatch"),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wa(t,e,r=!1){const n="signIn",i=await bn(t,n,e),a=await Ie._fromIdTokenResponse(t,n,i);return r||await t._updateCurrentUser(a.user),a}function Ia(t,e,r,n){return Be(t).onAuthStateChanged(e,r,n)}const Ze="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e,r){this.storageRetriever=e,this.type=r}_isAvailable(){try{return this.storage?(this.storage.setItem(Ze,"1"),this.storage.removeItem(Ze),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,r){return this.storage.setItem(e,JSON.stringify(r)),Promise.resolve()}_get(e){const r=this.storage.getItem(e);return Promise.resolve(r?JSON.parse(r):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ea(){const t=q();return zt(t)||at(t)}const Ta=1e3,Sa=10;class In extends wn{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,r)=>this.onStorageEvent(e,r),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Ea()&&ma(),this.fallbackToPolling=mn(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const r of Object.keys(this.listeners)){const n=this.storage.getItem(r),i=this.localCache[r];n!==i&&e(r,i,n)}}onStorageEvent(e,r=!1){if(!e.key){this.forAllChangedKeys((c,f,u)=>{this.notifyListeners(c,u)});return}const n=e.key;if(r?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const c=this.storage.getItem(n);if(e.newValue!==c)e.newValue!==null?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!r)return}const i=()=>{const c=this.storage.getItem(n);!r&&this.localCache[n]===c||this.notifyListeners(n,c)},a=this.storage.getItem(n);pa()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Sa):i()}notifyListeners(e,r){this.localCache[e]=r;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(r&&JSON.parse(r))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,r,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:r,newValue:n}),!0)})},Ta)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,r){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(r)}_removeListener(e,r){this.listeners[e]&&(this.listeners[e].delete(r),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,r){await super._set(e,r),this.localCache[e]=JSON.stringify(r)}async _get(e){const r=await super._get(e);return this.localCache[e]=JSON.stringify(r),r}async _remove(e){await super._remove(e),delete this.localCache[e]}}In.type="LOCAL";const Ra=In;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En extends wn{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,r){}_removeListener(e,r){}}En.type="SESSION";const Tn=En;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Aa(t){return Promise.all(t.map(async e=>{try{const r=await e;return{fulfilled:!0,value:r}}catch(r){return{fulfilled:!1,reason:r}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const r=this.receivers.find(i=>i.isListeningto(e));if(r)return r;const n=new ot(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const r=e,{eventId:n,eventType:i,data:a}=r.data,c=this.handlersMap[i];if(!(c!=null&&c.size))return;r.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const f=Array.from(c).map(async d=>d(r.origin,a)),u=await Aa(f);r.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:u})}_subscribe(e,r){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(r)}_unsubscribe(e,r){this.handlersMap[e]&&r&&this.handlersMap[e].delete(r),(!r||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ot.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(t="",e=10){let r="";for(let n=0;n<e;n++)r+=Math.floor(Math.random()*10);return t+r}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,r,n=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let a,c;return new Promise((f,u)=>{const d=qt("",20);i.port1.start();const g=setTimeout(()=>{u(new Error("unsupported_event"))},n);c={messageChannel:i,onMessage(y){const _=y;if(_.data.eventId===d)switch(_.data.status){case"ack":clearTimeout(g),a=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),f(_.data.response);break;default:clearTimeout(g),clearTimeout(a),u(new Error("invalid_response"));break}}},this.handlers.add(c),i.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:d,data:r},[i.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(){return window}function Ca(t){Z().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sn(){return typeof Z().WorkerGlobalScope!="undefined"&&typeof Z().importScripts=="function"}async function ka(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Pa(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Na(){return Sn()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rn="firebaseLocalStorageDb",Da=1,et="firebaseLocalStorage",An="fbase_key";class He{constructor(e){this.request=e}toPromise(){return new Promise((e,r)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{r(this.request.error)})})}}function ct(t,e){return t.transaction([et],e?"readwrite":"readonly").objectStore(et)}function Ma(){const t=indexedDB.deleteDatabase(Rn);return new He(t).toPromise()}function Mt(){const t=indexedDB.open(Rn,Da);return new Promise((e,r)=>{t.addEventListener("error",()=>{r(t.error)}),t.addEventListener("upgradeneeded",()=>{const n=t.result;try{n.createObjectStore(et,{keyPath:An})}catch(i){r(i)}}),t.addEventListener("success",async()=>{const n=t.result;n.objectStoreNames.contains(et)?e(n):(n.close(),await Ma(),e(await Mt()))})})}async function Sr(t,e,r){const n=ct(t,!0).put({[An]:e,value:r});return new He(n).toPromise()}async function La(t,e){const r=ct(t,!1).get(e),n=await new He(r).toPromise();return n===void 0?null:n.value}function Rr(t,e){const r=ct(t,!0).delete(e);return new He(r).toPromise()}const Ua=800,xa=3;class On{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Mt(),this.db)}async _withRetries(e){let r=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(r++>xa)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Sn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ot._getInstance(Na()),this.receiver._subscribe("keyChanged",async(e,r)=>({keyProcessed:(await this._poll()).includes(r.key)})),this.receiver._subscribe("ping",async(e,r)=>["keyChanged"])}async initializeSender(){var e,r;if(this.activeServiceWorker=await ka(),!this.activeServiceWorker)return;this.sender=new Oa(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);!n||((e=n[0])===null||e===void 0?void 0:e.fulfilled)&&((r=n[0])===null||r===void 0?void 0:r.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Pa()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Mt();return await Sr(e,Ze,"1"),await Rr(e,Ze),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,r){return this._withPendingWrite(async()=>(await this._withRetries(n=>Sr(n,e,r)),this.localCache[e]=r,this.notifyServiceWorker(e)))}async _get(e){const r=await this._withRetries(n=>La(n,e));return this.localCache[e]=r,r}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(r=>Rr(r,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const a=ct(i,!1).getAll();return new He(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const r=[],n=new Set;for(const{fbase_key:i,value:a}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(a)&&(this.notifyListeners(i,a),r.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),r.push(i));return r}notifyListeners(e,r){this.localCache[e]=r;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(r)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ua)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,r){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(r)}_removeListener(e,r){this.listeners[e]&&(this.listeners[e].delete(r),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}On.type="LOCAL";const Ba=On;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $a(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Fa(t){return new Promise((e,r)=>{const n=document.createElement("script");n.setAttribute("src",t),n.onload=e,n.onerror=i=>{const a=Q("internal-error");a.customData=i,r(a)},n.type="text/javascript",n.charset="UTF-8",$a().appendChild(n)})}function Ha(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new $e(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ja(t,e){return e?te(e):(E(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt extends _n{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return we(e,this._buildIdpRequest())}_linkToIdToken(e,r){return we(e,this._buildIdpRequest(r))}_getReauthenticationResolver(e){return we(e,this._buildIdpRequest())}_buildIdpRequest(e){const r={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(r.idToken=e),r}}function Va(t){return wa(t.auth,new Kt(t),t.bypassAuthState)}function Wa(t){const{auth:e,user:r}=t;return E(r,e,"internal-error"),ba(r,new Kt(t),t.bypassAuthState)}async function za(t){const{auth:e,user:r}=t;return E(r,e,"internal-error"),va(r,new Kt(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e,r,n,i,a=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(r)?r:[r]}execute(){return new Promise(async(e,r)=>{this.pendingPromise={resolve:e,reject:r};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:r,sessionId:n,postBody:i,tenantId:a,error:c,type:f}=e;if(c){this.reject(c);return}const u={auth:this.auth,requestUri:r,sessionId:n,tenantId:a||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Va;case"linkViaPopup":case"linkViaRedirect":return za;case"reauthViaPopup":case"reauthViaRedirect":return Wa;default:re(this.auth,"internal-error")}}resolve(e){ne(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ne(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qa=new $e(2e3,1e4);class ve extends Cn{constructor(e,r,n,i,a){super(e,r,i,a),this.provider=n,this.authWindow=null,this.pollId=null,ve.currentPopupAction&&ve.currentPopupAction.cancel(),ve.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return E(e,this.auth,"internal-error"),e}async onExecution(){ne(this.filter.length===1,"Popup operations only handle one event");const e=qt();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(r=>{this.reject(r)}),this.resolver._isIframeWebStorageSupported(this.auth,r=>{r||this.reject(Q(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Q(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ve.currentPopupAction=null}pollUserCancellation(){const e=()=>{var r,n;if(!((n=(r=this.authWindow)===null||r===void 0?void 0:r.window)===null||n===void 0)&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Q(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,qa.get())};e()}}ve.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ka="pendingRedirect",Ge=new Map;class Ga extends Cn{constructor(e,r,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],r,void 0,n),this.eventId=null}async execute(){let e=Ge.get(this.auth._key());if(!e){try{const n=await Ja(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(r){e=()=>Promise.reject(r)}Ge.set(this.auth._key(),e)}return this.bypassAuthState||Ge.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const r=await this.auth._redirectUserForId(e.eventId);if(r)return this.user=r,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ja(t,e){const r=Qa(e),n=Xa(t);if(!await n._isAvailable())return!1;const i=await n._get(r)==="true";return await n._remove(r),i}function Ya(t,e){Ge.set(t._key(),e)}function Xa(t){return te(t._redirectPersistence)}function Qa(t){return Ke(Ka,t.config.apiKey,t.name)}async function Za(t,e,r=!1){const n=yn(t),i=ja(n,e),c=await new Ga(n,i,r).execute();return c&&!r&&(delete c.user._redirectEventId,await n._persistUserIfCurrent(c.user),await n._setRedirectUser(null,e)),c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eo=10*60*1e3;class to{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let r=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(r=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ro(e)||(this.hasHandledPotentialRedirect=!0,r||(this.queuedRedirectEvent=e,r=!0)),r}sendToConsumer(e,r){var n;if(e.error&&!kn(e)){const i=((n=e.error.code)===null||n===void 0?void 0:n.split("auth/")[1])||"internal-error";r.onError(Q(this.auth,i))}else r.onAuthEvent(e)}isEventForConsumer(e,r){const n=r.eventId===null||!!e.eventId&&e.eventId===r.eventId;return r.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=eo&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ar(e))}saveEventToCache(e){this.cachedEventUids.add(Ar(e)),this.lastProcessedEventTime=Date.now()}}function Ar(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function kn({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ro(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return kn(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function no(t,e={}){return st(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const io=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,so=/^https?/;async function ao(t){if(t.config.emulator)return;const{authorizedDomains:e}=await no(t);for(const r of e)try{if(oo(r))return}catch{}re(t,"unauthorized-domain")}function oo(t){const e=Dt(),{protocol:r,hostname:n}=new URL(e);if(t.startsWith("chrome-extension://")){const c=new URL(t);return c.hostname===""&&n===""?r==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):r==="chrome-extension:"&&c.hostname===n}if(!so.test(r))return!1;if(io.test(t))return n===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(n)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const co=new $e(3e4,6e4);function Or(){const t=Z().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let r=0;r<t.CP.length;r++)t.CP[r]=null}}function lo(t){return new Promise((e,r)=>{var n,i,a;function c(){Or(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Or(),r(Q(t,"network-request-failed"))},timeout:co.get()})}if(!((i=(n=Z().gapi)===null||n===void 0?void 0:n.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((a=Z().gapi)===null||a===void 0)&&a.load)c();else{const f=Ha("iframefcb");return Z()[f]=()=>{gapi.load?c():r(Q(t,"network-request-failed"))},Fa(`https://apis.google.com/js/api.js?onload=${f}`).catch(u=>r(u))}}).catch(e=>{throw Je=null,e})}let Je=null;function uo(t){return Je=Je||lo(t),Je}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fo=new $e(5e3,15e3),ho="__/auth/iframe",po="emulator/auth/iframe",mo={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},go=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function yo(t){const e=t.config;E(e.authDomain,t,"auth-domain-config-required");const r=e.emulator?Vt(e,po):`https://${t.config.authDomain}/${ho}`,n={apiKey:e.apiKey,appName:t.name,v:it},i=go.get(t.config.apiHost);i&&(n.eid=i);const a=t._getFrameworks();return a.length&&(n.fw=a.join(",")),`${r}?${xe(n).slice(1)}`}async function _o(t){const e=await uo(t),r=Z().gapi;return E(r,t,"internal-error"),e.open({where:document.body,url:yo(t),messageHandlersFilter:r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:mo,dontclear:!0},n=>new Promise(async(i,a)=>{await n.restyle({setHideOnLeave:!1});const c=Q(t,"network-request-failed"),f=Z().setTimeout(()=>{a(c)},fo.get());function u(){Z().clearTimeout(f),i(n)}n.ping(u).then(u,()=>{a(c)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vo={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},bo=500,wo=600,Io="_blank",Eo="http://localhost";class Cr{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function To(t,e,r,n=bo,i=wo){const a=Math.max((window.screen.availHeight-i)/2,0).toString(),c=Math.max((window.screen.availWidth-n)/2,0).toString();let f="";const u=Object.assign(Object.assign({},vo),{width:n.toString(),height:i.toString(),top:a,left:c}),d=q().toLowerCase();r&&(f=un(d)?Io:r),ln(d)&&(e=e||Eo,u.scrollbars="yes");const g=Object.entries(u).reduce((_,[b,S])=>`${_}${b}=${S},`,"");if(da(d)&&f!=="_self")return So(e||"",f),new Cr(null);const y=window.open(e||"",f,g);E(y,t,"popup-blocked");try{y.focus()}catch{}return new Cr(y)}function So(t,e){const r=document.createElement("a");r.href=t,r.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ro="__/auth/handler",Ao="emulator/auth/handler";function kr(t,e,r,n,i,a){E(t.config.authDomain,t,"auth-domain-config-required"),E(t.config.apiKey,t,"invalid-api-key");const c={apiKey:t.config.apiKey,appName:t.name,authType:r,redirectUrl:n,v:it,eventId:i};if(e instanceof vn){e.setDefaultLanguage(t.languageCode),c.providerId=e.providerId||"",$i(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries(a||{}))c[u]=d}if(e instanceof Fe){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(c.scopes=u.join(","))}t.tenantId&&(c.tid=t.tenantId);const f=c;for(const u of Object.keys(f))f[u]===void 0&&delete f[u];return`${Oo(t)}?${xe(f).slice(1)}`}function Oo({config:t}){return t.emulator?Vt(t,Ao):`https://${t.authDomain}/${Ro}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ct="webStorageSupport";class Co{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Tn,this._completeRedirectFn=Za,this._overrideRedirectResult=Ya}async _openPopup(e,r,n,i){var a;ne((a=this.eventManagers[e._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const c=kr(e,r,n,Dt(),i);return To(e,c,qt())}async _openRedirect(e,r,n,i){return await this._originValidation(e),Ca(kr(e,r,n,Dt(),i)),new Promise(()=>{})}_initialize(e){const r=e._key();if(this.eventManagers[r]){const{manager:i,promise:a}=this.eventManagers[r];return i?Promise.resolve(i):(ne(a,"If manager is not set, promise should be"),a)}const n=this.initAndGetManager(e);return this.eventManagers[r]={promise:n},n.catch(()=>{delete this.eventManagers[r]}),n}async initAndGetManager(e){const r=await _o(e),n=new to(e);return r.register("authEvent",i=>(E(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:n.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=r,n}_isIframeWebStorageSupported(e,r){this.iframes[e._key()].send(Ct,{type:Ct},i=>{var a;const c=(a=i==null?void 0:i[0])===null||a===void 0?void 0:a[Ct];c!==void 0&&r(!!c),re(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const r=e._key();return this.originValidationPromises[r]||(this.originValidationPromises[r]=ao(e)),this.originValidationPromises[r]}get _shouldInitProactively(){return mn()||zt()||at()}}const ko=Co;var Pr="@firebase/auth",Nr="0.20.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const r=this.auth.onIdTokenChanged(n=>{var i;e(((i=n)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,r),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const r=this.internalListeners.get(e);!r||(this.internalListeners.delete(e),r(),this.updateProactiveRefresh())}assertAuthConfigured(){E(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function No(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Do(t){Ne(new Pe("auth",(e,{options:r})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:a,authDomain:c}=n.options;return((f,u)=>{E(a&&!a.includes(":"),"invalid-api-key",{appName:f.name}),E(!(c!=null&&c.includes(":")),"argument-error",{appName:f.name});const d={apiKey:a,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:gn(t)},g=new ya(f,u,d);return Gs(g,r),g})(n,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,r,n)=>{e.getProvider("auth-internal").initialize()})),Ne(new Pe("auth-internal",e=>{const r=yn(e.getProvider("auth").getImmediate());return(n=>new Po(n))(r)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ce(Pr,Nr,No(t)),Ce(Pr,Nr,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mo(t=Ls()){const e=Qr(t,"auth");return e.isInitialized()?e.getImmediate():Ks(t,{popupRedirectResolver:ko,persistence:[Ba,Ra,Tn]})}Do("Browser");const Lo=Mo();function Uo(){Ia(Lo,t=>{try{t?console.info("User",t.uid,"is signed in."):console.info("User is signed out.")}catch(e){console.error(e)}})}Uo();const xo=document.querySelector("#app");xo&&J.route(document.body,"/login",{"/login":Ti,"/home":Si,"/sec":Ri});
