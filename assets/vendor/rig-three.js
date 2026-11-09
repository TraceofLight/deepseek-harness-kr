// 빌드 산출물입니다. 직접 고치지 말고 소스(character/, plugin/client.ts, shared/)를 고친 뒤 npm run build 하세요.
"use strict";(()=>{var pf=0,cu=1,mf=2;var Oo=1,gf=2,Cs=3,hn=0,kt=1,Ht=2,Vi=0,cr=1,uu=2,hu=3,du=4,No=5;var zi=100,_f=101,vf=102,rl=103,xf=104,yf=200,kr=201,Mf=202,Ef=203,fu=204,pu=205,Sf=206,Tf=207,bf=208,wf=209,Af=210,Rf=211,Cf=212,Pf=213,If=214,Oa=0,Na=1,Ua=2,gs=3,Fa=4,Ba=5,Ha=6,ka=7,Uo=0,Lf=1,Df=2,pi=0,mu=1,gu=2,_u=3,vu=4,xu=5,yu=6,Vr=7,$c="attached",Of="detached",Mu=300,zr=301,Ps=302,Is=303,sl=304,In=1e3,ln=1001,_s=1002,Ot=1003,ol=1004;var Gr=1005;var Nt=1006,Ls=1007;var Vn=1008;var _n=1009,Eu=1010,Su=1011,Ds=1012,al=1013,ii=1014,dn=1015,vn=1016,ll=1017,cl=1018,Gi=1020,Tu=35902,bu=35899,wu=1021,Au=1022,rn=1023,Pi=1026,ri=1027,ul=1028,hl=1029,ur=1030,dl=1031;var fl=1033,Fo=33776,Bo=33777,Ho=33778,ko=33779,pl=35840,ml=35841,gl=35842,_l=35843,vl=36196,xl=37492,yl=37496,Ml=37488,El=37489,Vo=37490,Sl=37491,Tl=37808,bl=37809,wl=37810,Al=37811,Rl=37812,Cl=37813,Pl=37814,Il=37815,Ll=37816,Dl=37817,Ol=37818,Nl=37819,Ul=37820,Fl=37821,Bl=36492,Hl=36494,kl=36495,Vl=36283,zl=36284,zo=36285,Gl=36286,Wl=2200,Nf=2201,Uf=2202,wr=2300,Ar=2301,Da=2302,Jc=2303,Sr=2400,Tr=2401,po=2402,Xl=2500,Ff=2501,Ru=0,Go=1,Os=2,Bf=3200;var hr=0,Hf=1,si="",ut="srgb",En="srgb-linear",mo="linear",xt="srgb";var ps=7680,Cu=7681;var Pu=514;var Iu=517;var ql=519,kf=512,Vf=513,zf=514,Lu=515,Gf=516,Wf=517,Du=518,Ou=519,Nu=35044,Uu=35048;var Fu="300 es",Fn=2e3,vs=2001;function _0(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function v0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function xs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Xf(){let i=xs("canvas");return i.style.display="block",i}var Td={},ys=null;function go(...i){let e="THREE."+i.shift();ys?ys("log",e,...i):console.log(e,...i)}function qf(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ke(...i){i=qf(i);let e="THREE."+i.shift();if(ys)ys("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ke(...i){i=qf(i);let e="THREE."+i.shift();if(ys)ys("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function br(...i){let e=i.join(" ");e in Td||(Td[e]=!0,ke(...i))}function Yf(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}var jf={[Oa]:Oa,[Ua]:Ha,[Fa]:Fa,[gs]:Ba,[Na]:Na,[Ha]:Ua,[ka]:ka,[Ba]:gs},Jn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],bd=1234567,ho=Math.PI/180,Rr=180/Math.PI;function mi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(pn[i&255]+pn[i>>8&255]+pn[i>>16&255]+pn[i>>24&255]+"-"+pn[e&255]+pn[e>>8&255]+"-"+pn[e>>16&15|64]+pn[e>>24&255]+"-"+pn[t&63|128]+pn[t>>8&255]+"-"+pn[t>>16&255]+pn[t>>24&255]+pn[n&255]+pn[n>>8&255]+pn[n>>16&255]+pn[n>>24&255]).toLowerCase()}function rt(i,e,t){return Math.max(e,Math.min(t,i))}function Bu(i,e){return(i%e+e)%e}function x0(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function y0(i,e,t){return i!==e?(t-i)/(e-i):0}function fo(i,e,t){return(1-t)*i+t*e}function M0(i,e,t,n){return fo(i,e,1-Math.exp(-t*n))}function E0(i,e=1){return e-Math.abs(Bu(i,e*2)-e)}function S0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function T0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function b0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function w0(i,e){return i+Math.random()*(e-i)}function A0(i){return i*(.5-Math.random())}function R0(i){i!==void 0&&(bd=i);let e=bd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function C0(i){return i*ho}function P0(i){return i*Rr}function I0(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function L0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Hu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function D0(i,e,t,n,r){let s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),d=o((e-n)/2),f=s((n-e)/2),p=o((n-e)/2);switch(r){case"XYX":i.set(a*u,l*h,l*d,a*c);break;case"YZY":i.set(l*d,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*d,a*u,a*c);break;case"XZX":i.set(a*u,l*p,l*f,a*c);break;case"YXY":i.set(l*f,a*u,l*p,a*c);break;case"ZYZ":i.set(l*p,l*f,a*u,a*c);break;default:ke("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Yl(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function ku(i,e){if(e.constructor===Float32Array)return i;let t=Yl(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function Vu(i,e){if(e.constructor===Float32Array)return i;let t=Yl(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var Ze={DEG2RAD:ho,RAD2DEG:Rr,generateUUID:mi,clamp:rt,euclideanModulo:Bu,mapLinear:x0,inverseLerp:y0,lerp:fo,damp:M0,pingpong:E0,smoothstep:S0,smootherstep:T0,randInt:b0,randFloat:w0,randFloatSpread:A0,seededRandom:R0,degToRad:C0,radToDeg:P0,isPowerOfTwo:I0,ceilPowerOfTwo:L0,floorPowerOfTwo:Hu,setQuaternionFromProperEuler:D0,normalize:Vu,denormalize:ku},Ve=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},me=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3],d=s[o+0],f=s[o+1],p=s[o+2],_=s[o+3];if(h!==_||l!==d||c!==f||u!==p){let m=l*d+c*f+u*p+h*_;m<0&&(d=-d,f=-f,p=-p,_=-_,m=-m);let g=1-a;if(m<.9995){let y=Math.acos(m),M=Math.sin(y);g=Math.sin(g*y)/M,a=Math.sin(a*y)/M,l=l*g+d*a,c=c*g+f*a,u=u*g+p*a,h=h*g+_*a}else{l=l*g+d*a,c=c*g+f*a,u=u*g+p*a,h=h*g+_*a;let y=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=y,c*=y,u*=y,h*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,o){let a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[o],d=s[o+1],f=s[o+2],p=s[o+3];return e[t]=a*p+u*h+l*f-c*d,e[t+1]=l*p+u*d+c*h-a*f,e[t+2]=c*p+u*f+a*d-l*h,e[t+3]=u*p-a*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),h=a(s/2),d=l(n/2),f=l(r/2),p=l(s/2);switch(o){case"XYZ":this._x=d*u*h+c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h-d*f*p;break;case"YXZ":this._x=d*u*h+c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h+d*f*p;break;case"ZXY":this._x=d*u*h-c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h-d*f*p;break;case"ZYX":this._x=d*u*h-c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h+d*f*p;break;case"YZX":this._x=d*u*h+c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h-d*f*p;break;case"XZY":this._x=d*u*h-c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h+d*f*p;break;default:ke("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(o-r)*f}else if(n>a&&n>h){let f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+c)/f}else if(a>h){let f=2*Math.sqrt(1+a-n-h);this._w=(s-c)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+h-n-a);this._w=(o-r)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,r=-r,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},A=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(wd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(wd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),u=2*(a*t-s*r),h=2*(s*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ac.copy(this).projectOnVector(e),this.sub(Ac)}reflect(e){return this.sub(Ac.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ac=new A,wd=new me,Le=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,r,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],p=n[8],_=r[0],m=r[3],g=r[6],y=r[1],M=r[4],x=r[7],w=r[2],b=r[5],v=r[8];return s[0]=o*_+a*y+l*w,s[3]=o*m+a*M+l*b,s[6]=o*g+a*x+l*v,s[1]=c*_+u*y+h*w,s[4]=c*m+u*M+h*b,s[7]=c*g+u*x+h*v,s[2]=d*_+f*y+p*w,s[5]=d*m+f*M+p*b,s[8]=d*g+f*x+p*v,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*s,f=c*s-o*l,p=t*h+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/p;return e[0]=h*_,e[1]=(r*c-u*n)*_,e[2]=(a*n-r*o)*_,e[3]=d*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return br("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Rc.makeScale(e,t)),this}rotate(e){return br("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Rc.makeRotation(-e)),this}translate(e,t){return br("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Rc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Rc=new Le,Ad=new Le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Rd=new Le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function O0(){let i={enabled:!0,workingColorSpace:En,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===xt&&(r.r=Ci(r.r),r.g=Ci(r.g),r.b=Ci(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===xt&&(r.r=ms(r.r),r.g=ms(r.g),r.b=ms(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===si?mo:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[o].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[En]:{primaries:e,whitePoint:n,transfer:mo,toXYZ:Ad,fromXYZ:Rd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ut},outputColorSpaceConfig:{drawingBufferColorSpace:ut}},[ut]:{primaries:e,whitePoint:n,transfer:xt,toXYZ:Ad,fromXYZ:Rd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ut}}}),i}var je=O0();function Ci(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ms(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var es,Va=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{es===void 0&&(es=xs("canvas")),es.width=e.width,es.height=e.height;let r=es.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=es}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=xs("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ci(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ci(t[n]/255)*255):t[n]=Ci(t[n]);return{data:t,width:e.width,height:e.height}}else return ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},N0=0,Ms=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:N0++}),this.uuid=mi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Cc(r[o].image)):s.push(Cc(r[o]))}else s=Cc(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function Cc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Va.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ke("Texture: Unable to serialize Texture."),{})}var U0=0,Pc=new A,Wt=class i extends Jn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=ln,r=ln,s=Nt,o=Vn,a=rn,l=_n,c=i.DEFAULT_ANISOTROPY,u=si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:U0++}),this.uuid=mi(),this.name="",this.source=new Ms(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Le,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Pc).x}get height(){return this.source.getSize(Pc).y}get depth(){return this.source.getSize(Pc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){ke(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){ke(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Mu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case In:e.x=e.x-Math.floor(e.x);break;case ln:e.x=e.x<0?0:1;break;case _s:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case In:e.y=e.y-Math.floor(e.y);break;case ln:e.y=e.y<0?0:1;break;case _s:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Wt.DEFAULT_IMAGE=null;Wt.DEFAULT_MAPPING=Mu;Wt.DEFAULT_ANISOTROPY=1;var lt=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],p=l[9],_=l[2],m=l[6],g=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(p-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,x=(f+1)/2,w=(g+1)/2,b=(u+d)/4,v=(h+_)/4,T=(p+m)/4;return M>x&&M>w?M<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(M),r=b/n,s=v/n):x>w?x<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),n=b/r,s=T/r):w<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),n=v/s,r=T/s),this.set(n,r,s,t),this}let y=Math.sqrt((m-p)*(m-p)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(m-p)/y,this.y=(h-_)/y,this.z=(d-u)/y,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this.w=rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this.w=rt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},za=class extends Jn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t),this.textures=[];let r=n.count;for(let s=0;s<r;s++)this.textures[s]=new Wt({width:e,height:t,depth:n.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Nt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new Ms(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},tn=class extends za{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},_o=class extends Wt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ga=class extends Wt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var oe=class i{static{this.prototype.isMatrix4=!0}constructor(e,t,n,r,s,o,a,l,c,u,h,d,f,p,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,u,h,d,f,p,_,m)}set(e,t,n,r,s,o,a,l,c,u,h,d,f,p,_,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=s,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=h,g[14]=d,g[3]=f,g[7]=p,g[11]=_,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/ts.setFromMatrixColumn(e,0).length(),s=1/ts.setFromMatrixColumn(e,1).length(),o=1/ts.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){let d=o*u,f=o*h,p=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+p*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=p+f*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*u,f=l*h,p=c*u,_=c*h;t[0]=d+_*a,t[4]=p*a-f,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-p,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*u,f=l*h,p=c*u,_=c*h;t[0]=d-_*a,t[4]=-o*h,t[8]=p+f*a,t[1]=f+p*a,t[5]=o*u,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*u,f=o*h,p=a*u,_=a*h;t[0]=l*u,t[4]=p*c-f,t[8]=d*c+_,t[1]=l*h,t[5]=_*c+d,t[9]=f*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,f=o*c,p=a*l,_=a*c;t[0]=l*u,t[4]=_-d*h,t[8]=p*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*h+p,t[10]=d-_*h}else if(e.order==="XZY"){let d=o*l,f=o*c,p=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+_,t[5]=o*u,t[9]=f*h-p,t[2]=p*h-f,t[6]=a*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(F0,e,B0)}lookAt(e,t,n){let r=this.elements;return Cn.subVectors(e,t),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),$i.crossVectors(n,Cn),$i.lengthSq()===0&&(Math.abs(n.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),$i.crossVectors(n,Cn)),$i.normalize(),oa.crossVectors(Cn,$i),r[0]=$i.x,r[4]=oa.x,r[8]=Cn.x,r[1]=$i.y,r[5]=oa.y,r[9]=Cn.y,r[2]=$i.z,r[6]=oa.z,r[10]=Cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],p=n[2],_=n[6],m=n[10],g=n[14],y=n[3],M=n[7],x=n[11],w=n[15],b=r[0],v=r[4],T=r[8],O=r[12],C=r[1],I=r[5],U=r[9],Y=r[13],L=r[2],X=r[6],j=r[10],z=r[14],re=r[3],W=r[7],J=r[11],ne=r[15];return s[0]=o*b+a*C+l*L+c*re,s[4]=o*v+a*I+l*X+c*W,s[8]=o*T+a*U+l*j+c*J,s[12]=o*O+a*Y+l*z+c*ne,s[1]=u*b+h*C+d*L+f*re,s[5]=u*v+h*I+d*X+f*W,s[9]=u*T+h*U+d*j+f*J,s[13]=u*O+h*Y+d*z+f*ne,s[2]=p*b+_*C+m*L+g*re,s[6]=p*v+_*I+m*X+g*W,s[10]=p*T+_*U+m*j+g*J,s[14]=p*O+_*Y+m*z+g*ne,s[3]=y*b+M*C+x*L+w*re,s[7]=y*v+M*I+x*X+w*W,s[11]=y*T+M*U+x*j+w*J,s[15]=y*O+M*Y+x*z+w*ne,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],p=e[3],_=e[7],m=e[11],g=e[15],y=l*f-c*d,M=a*f-c*h,x=a*d-l*h,w=o*f-c*u,b=o*d-l*u,v=o*h-a*u;return t*(_*y-m*M+g*x)-n*(p*y-m*w+g*b)+r*(p*M-_*w+g*v)-s*(p*x-_*b+m*v)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[1],o=e[5],a=e[9],l=e[2],c=e[6],u=e[10];return t*(o*u-a*c)-n*(s*u-a*l)+r*(s*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],p=e[12],_=e[13],m=e[14],g=e[15],y=t*a-n*o,M=t*l-r*o,x=t*c-s*o,w=n*l-r*a,b=n*c-s*a,v=r*c-s*l,T=u*_-h*p,O=u*m-d*p,C=u*g-f*p,I=h*m-d*_,U=h*g-f*_,Y=d*g-f*m,L=y*Y-M*U+x*I+w*C-b*O+v*T;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let X=1/L;return e[0]=(a*Y-l*U+c*I)*X,e[1]=(r*U-n*Y-s*I)*X,e[2]=(_*v-m*b+g*w)*X,e[3]=(d*b-h*v-f*w)*X,e[4]=(l*C-o*Y-c*O)*X,e[5]=(t*Y-r*C+s*O)*X,e[6]=(m*x-p*v-g*M)*X,e[7]=(u*v-d*x+f*M)*X,e[8]=(o*U-a*C+c*T)*X,e[9]=(n*C-t*U-s*T)*X,e[10]=(p*b-_*x+g*y)*X,e[11]=(h*x-u*b-f*y)*X,e[12]=(a*O-o*I-l*T)*X,e[13]=(t*I-n*O+r*T)*X,e[14]=(_*M-p*w-m*y)*X,e[15]=(u*w-h*M+d*y)*X,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,d=s*c,f=s*u,p=s*h,_=o*u,m=o*h,g=a*h,y=l*c,M=l*u,x=l*h,w=n.x,b=n.y,v=n.z;return r[0]=(1-(_+g))*w,r[1]=(f+x)*w,r[2]=(p-M)*w,r[3]=0,r[4]=(f-x)*b,r[5]=(1-(d+g))*b,r[6]=(m+y)*b,r[7]=0,r[8]=(p+M)*v,r[9]=(m-y)*v,r[10]=(1-(d+_))*v,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let o=ts.set(r[0],r[1],r[2]).length(),a=ts.set(r[4],r[5],r[6]).length(),l=ts.set(r[8],r[9],r[10]).length();s<0&&(o=-o),jn.copy(this);let c=1/o,u=1/a,h=1/l;return jn.elements[0]*=c,jn.elements[1]*=c,jn.elements[2]*=c,jn.elements[4]*=u,jn.elements[5]*=u,jn.elements[6]*=u,jn.elements[8]*=h,jn.elements[9]*=h,jn.elements[10]*=h,t.setFromRotationMatrix(jn),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,r,s,o,a=Fn,l=!1){let c=this.elements,u=2*s/(t-e),h=2*s/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,_;if(l)p=s/(o-s),_=o*s/(o-s);else if(a===Fn)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===vs)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=Fn,l=!1){let c=this.elements,u=2/(t-e),h=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,_;if(l)p=1/(o-s),_=o/(o-s);else if(a===Fn)p=-2/(o-s),_=-(o+s)/(o-s);else if(a===vs)p=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ts=new A,jn=new oe,F0=new A(0,0,0),B0=new A(1,1,1),$i=new A,oa=new A,Cn=new A,Cd=new oe,Pd=new me,bt=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],d=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-rt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(rt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-rt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Cd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Cd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Pd.setFromEuler(this),this.setFromQuaternion(Pd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};bt.DEFAULT_ORDER="XYZ";var vo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},H0=0,Id=new A,ns=new me,Si=new oe,aa=new A,to=new A,k0=new A,V0=new me,Ld=new A(1,0,0),Dd=new A(0,1,0),Od=new A(0,0,1),Nd={type:"added"},z0={type:"removed"},is={type:"childadded",child:null},Ic={type:"childremoved",child:null},ct=class i extends Jn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:H0++}),this.uuid=mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new A,t=new bt,n=new me,r=new A(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new oe},normalMatrix:{value:new Le}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ns.setFromAxisAngle(e,t),this.quaternion.multiply(ns),this}rotateOnWorldAxis(e,t){return ns.setFromAxisAngle(e,t),this.quaternion.premultiply(ns),this}rotateX(e){return this.rotateOnAxis(Ld,e)}rotateY(e){return this.rotateOnAxis(Dd,e)}rotateZ(e){return this.rotateOnAxis(Od,e)}translateOnAxis(e,t){return Id.copy(e).applyQuaternion(this.quaternion),this.position.add(Id.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ld,e)}translateY(e){return this.translateOnAxis(Dd,e)}translateZ(e){return this.translateOnAxis(Od,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Si.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?aa.copy(e):aa.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),to.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Si.lookAt(to,aa,this.up):Si.lookAt(aa,to,this.up),this.quaternion.setFromRotationMatrix(Si),r&&(Si.extractRotation(r.matrixWorld),ns.setFromRotationMatrix(Si),this.quaternion.premultiply(ns.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ke("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Nd),is.child=e,this.dispatchEvent(is),is.child=null):Ke("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(z0),Ic.child=e,this.dispatchEvent(Ic),Ic.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Si.multiply(e.parent.matrixWorld)),e.applyMatrix4(Si),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Nd),is.child=e,this.dispatchEvent(is),is.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(to,e,k0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(to,V0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=r,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};ct.DEFAULT_UP=new A(0,1,0);ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Tt=class extends ct{constructor(){super(),this.isGroup=!0,this.type="Group"}},G0={type:"move"},Es=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,n),g=this._getHandJoint(c,_);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(G0)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Tt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Zf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ji={h:0,s:0,l:0},la={h:0,s:0,l:0};function Lc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var ue=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=je.workingColorSpace){return this.r=e,this.g=t,this.b=n,je.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=je.workingColorSpace){if(e=Bu(e,1),t=rt(t,0,1),n=rt(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Lc(o,s,e+1/3),this.g=Lc(o,s,e),this.b=Lc(o,s,e-1/3)}return je.colorSpaceToWorking(this,r),this}setStyle(e,t=ut){function n(s){s!==void 0&&parseFloat(s)<1&&ke("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,t);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:ke("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ut){let n=Zf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ci(e.r),this.g=Ci(e.g),this.b=Ci(e.b),this}copyLinearToSRGB(e){return this.r=ms(e.r),this.g=ms(e.g),this.b=ms(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ut){return je.workingToColorSpace(mn.copy(this),e),Math.round(rt(mn.r*255,0,255))*65536+Math.round(rt(mn.g*255,0,255))*256+Math.round(rt(mn.b*255,0,255))}getHexString(e=ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.workingToColorSpace(mn.copy(this),t);let n=mn.r,r=mn.g,s=mn.b,o=Math.max(n,r,s),a=Math.min(n,r,s),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=je.workingColorSpace){return je.workingToColorSpace(mn.copy(this),t),e.r=mn.r,e.g=mn.g,e.b=mn.b,e}getStyle(e=ut){je.workingToColorSpace(mn.copy(this),e);let t=mn.r,n=mn.g,r=mn.b;return e!==ut?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Ji),this.setHSL(Ji.h+e,Ji.s+t,Ji.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ji),e.getHSL(la);let n=fo(Ji.h,la.h,t),r=fo(Ji.s,la.s,t),s=fo(Ji.l,la.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},mn=new ue;ue.NAMES=Zf;var Ii=class extends ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bt,this.environmentIntensity=1,this.environmentRotation=new bt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Zn=new A,Ti=new A,Dc=new A,bi=new A,rs=new A,ss=new A,Ud=new A,Oc=new A,Nc=new A,Uc=new A,Fc=new lt,Bc=new lt,Hc=new lt,ir=class i{constructor(e=new A,t=new A,n=new A){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Zn.subVectors(e,t),r.cross(Zn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Zn.subVectors(r,t),Ti.subVectors(n,t),Dc.subVectors(e,t);let o=Zn.dot(Zn),a=Zn.dot(Ti),l=Zn.dot(Dc),c=Ti.dot(Ti),u=Ti.dot(Dc),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;let d=1/h,f=(c*l-a*u)*d,p=(o*u-a*l)*d;return s.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,bi)===null?!1:bi.x>=0&&bi.y>=0&&bi.x+bi.y<=1}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,bi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,bi.x),l.addScaledVector(o,bi.y),l.addScaledVector(a,bi.z),l)}static getInterpolatedAttribute(e,t,n,r,s,o){return Fc.setScalar(0),Bc.setScalar(0),Hc.setScalar(0),Fc.fromBufferAttribute(e,t),Bc.fromBufferAttribute(e,n),Hc.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Fc,s.x),o.addScaledVector(Bc,s.y),o.addScaledVector(Hc,s.z),o}static isFrontFacing(e,t,n,r){return Zn.subVectors(n,t),Ti.subVectors(e,t),Zn.cross(Ti).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zn.subVectors(this.c,this.b),Ti.subVectors(this.a,this.b),Zn.cross(Ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,o,a;rs.subVectors(r,n),ss.subVectors(s,n),Oc.subVectors(e,n);let l=rs.dot(Oc),c=ss.dot(Oc);if(l<=0&&c<=0)return t.copy(n);Nc.subVectors(e,r);let u=rs.dot(Nc),h=ss.dot(Nc);if(u>=0&&h<=u)return t.copy(r);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0&&l-u>0)return o=l/(l-u),t.copy(n).addScaledVector(rs,o);Uc.subVectors(e,s);let f=rs.dot(Uc),p=ss.dot(Uc);if(p>=0&&f<=p)return t.copy(s);let _=f*c-l*p;if(_<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(ss,a);let m=u*p-f*h;if(m<=0&&h-u>=0&&f-p>=0)return Ud.subVectors(s,r),a=(h-u)/(h-u+(f-p)),t.copy(r).addScaledVector(Ud,a);let g=1/(m+_+d);return o=_*g,a=d*g,t.copy(n).addScaledVector(rs,o).addScaledVector(ss,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},nn=class{constructor(e=new A(1/0,1/0,1/0),t=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Kn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Kn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Kn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Kn):Kn.fromBufferAttribute(s,o),Kn.applyMatrix4(e.matrixWorld),this.expandByPoint(Kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ca.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ca.copy(n.boundingBox)),ca.applyMatrix4(e.matrixWorld),this.union(ca)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Kn),Kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(no),ua.subVectors(this.max,no),os.subVectors(e.a,no),as.subVectors(e.b,no),ls.subVectors(e.c,no),Qi.subVectors(as,os),er.subVectors(ls,as),xr.subVectors(os,ls);let t=[0,-Qi.z,Qi.y,0,-er.z,er.y,0,-xr.z,xr.y,Qi.z,0,-Qi.x,er.z,0,-er.x,xr.z,0,-xr.x,-Qi.y,Qi.x,0,-er.y,er.x,0,-xr.y,xr.x,0];return!kc(t,os,as,ls,ua)||(t=[1,0,0,0,1,0,0,0,1],!kc(t,os,as,ls,ua))?!1:(ha.crossVectors(Qi,er),t=[ha.x,ha.y,ha.z],kc(t,os,as,ls,ua))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},wi=[new A,new A,new A,new A,new A,new A,new A,new A],Kn=new A,ca=new nn,os=new A,as=new A,ls=new A,Qi=new A,er=new A,xr=new A,no=new A,ua=new A,ha=new A,yr=new A;function kc(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){yr.fromArray(i,s);let a=r.x*Math.abs(yr.x)+r.y*Math.abs(yr.y)+r.z*Math.abs(yr.z),l=e.dot(yr),c=t.dot(yr),u=n.dot(yr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var Gt=new A,da=new Ve,W0=0,Xe=class extends Jn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:W0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Nu,this.updateRanges=[],this.gpuType=dn,this.version=0,this._normalizationScale=e!==void 0?Yl(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)da.fromBufferAttribute(this,t),da.applyMatrix3(e),this.setXY(t,da.x,da.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix3(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):ku(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Vu(e,this.array)}};var Cr=class extends Xe{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var xo=class extends Xe{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var At=class extends Xe{constructor(e,t,n){super(new Float32Array(e),t,n)}},X0=new nn,io=new A,Vc=new A,gn=class{constructor(e=new A,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):X0.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;io.subVectors(e,this.center);let t=io.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(io,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Vc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(io.copy(e.center).add(Vc)),this.expandByPoint(io.copy(e.center).sub(Vc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},q0=0,Un=new oe,zc=new ct,cs=new A,Pn=new nn,ro=new nn,en=new A,et=class i extends Jn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:q0++}),this.uuid=mi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_0(e)?xo:Cr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Le().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Un.makeRotationFromQuaternion(e),this.applyMatrix4(Un),this}rotateX(e){return Un.makeRotationX(e),this.applyMatrix4(Un),this}rotateY(e){return Un.makeRotationY(e),this.applyMatrix4(Un),this}rotateZ(e){return Un.makeRotationZ(e),this.applyMatrix4(Un),this}translate(e,t,n){return Un.makeTranslation(e,t,n),this.applyMatrix4(Un),this}scale(e,t,n){return Un.makeScale(e,t,n),this.applyMatrix4(Un),this}lookAt(e){return zc.lookAt(e),zc.updateMatrix(),this.applyMatrix4(zc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cs).negate(),this.translate(cs.x,cs.y,cs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new At(n,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new nn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];Pn.setFromBufferAttribute(s),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ke('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(e){let n=this.boundingSphere.center;if(Pn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];ro.setFromBufferAttribute(a),this.morphTargetsRelative?(en.addVectors(Pn.min,ro.min),Pn.expandByPoint(en),en.addVectors(Pn.max,ro.max),Pn.expandByPoint(en)):(Pn.expandByPoint(ro.min),Pn.expandByPoint(ro.max))}Pn.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)en.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(en));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)en.fromBufferAttribute(a,c),l&&(cs.fromBufferAttribute(e,c),en.add(cs)),r=Math.max(r,n.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Ke('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ke("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,s=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Xe(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(n.count);for(let O=0;O<n.count;O++)a[O]=new A,l[O]=new A;let u=new A,h=new A,d=new A,f=new Ve,p=new Ve,_=new Ve,m=new A,g=new A;function y(O,C,I){c[O]=c[C]=c[I]=1,u.fromBufferAttribute(n,O),h.fromBufferAttribute(n,C),d.fromBufferAttribute(n,I),f.fromBufferAttribute(s,O),p.fromBufferAttribute(s,C),_.fromBufferAttribute(s,I),h.sub(u),d.sub(u),p.sub(f),_.sub(f);let U=1/(p.x*_.y-_.x*p.y);isFinite(U)&&(m.copy(h).multiplyScalar(_.y).addScaledVector(d,-p.y).multiplyScalar(U),g.copy(d).multiplyScalar(p.x).addScaledVector(h,-_.x).multiplyScalar(U),a[O].add(m),a[C].add(m),a[I].add(m),l[O].add(g),l[C].add(g),l[I].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let O=0,C=M.length;O<C;++O){let I=M[O],U=I.start,Y=I.count;for(let L=U,X=U+Y;L<X;L+=3)y(e.getX(L+0),e.getX(L+1),e.getX(L+2))}let x=new A,w=new A,b=new A,v=new A;function T(O){b.fromBufferAttribute(r,O),v.copy(b);let C=a[O];x.copy(C),x.sub(b.multiplyScalar(b.dot(C))).normalize(),w.crossVectors(v,C);let U=w.dot(l[O])<0?-1:1;o.setXYZW(O,x.x,x.y,x.z,U)}for(let O=0,C=n.count;O<C;++O)c[O]&&T(O);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Xe(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let r=new A,s=new A,o=new A,a=new A,l=new A,c=new A,u=new A,h=new A;if(e)for(let d=0,f=e.count;d<f;d+=3){let p=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,p),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)en.fromBufferAttribute(e,t),en.normalize(),e.setXYZ(t,en.x,en.y,en.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u),f=0,p=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*u;for(let g=0;g<u;g++)d[p++]=c[f++]}return new Xe(d,u,h)}if(this.index===null)return ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=e(l,n);t.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){let d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let c in r){let u=r[c];this.setAttribute(c,u.clone(t))}let s=e.morphAttributes;for(let c in s){let u=[],h=s[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Li=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Nu,this.updateRanges=[],this.version=0,this.uuid=mi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Fd(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),r=new this.constructor(n,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Fd(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function Fd(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=mi()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var Mn=new A,Di=class i{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r,this._normalizationScale=e!==void 0?Yl(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Mn.fromBufferAttribute(this,t),Mn.applyMatrix4(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Mn.fromBufferAttribute(this,t),Mn.applyNormalMatrix(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Mn.fromBufferAttribute(this,t),Mn.transformDirection(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){go("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Xe(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){go("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):ku(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Vu(e,this.data.array)}},Gc=new A,Y0=new A,j0=new Le,$n=class{constructor(e=new A(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Gc.subVectors(n,t).cross(Y0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Gc),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(r,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||j0.getNormalMatrix(e),r=this.coplanarPoint(Gc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Z0=0,Xt=class extends Jn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Z0++}),this.uuid=mi(),this.name="",this.type="Material",this.blending=cr,this.side=hn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fu,this.blendDst=pu,this.blendEquation=zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ue(0,0,0),this.blendAlpha=0,this.depthFunc=gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ql,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ps,this.stencilZFail=ps,this.stencilZPass=ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){ke(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){ke(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ue().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new $n().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ve().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ve().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Ai=new A,Wc=new A,fa=new A,pa=new A,Pr=class{constructor(e=new A,t=new A(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ai.copy(this.origin).addScaledVector(this.direction,t),Ai.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Wc.copy(e).add(t).multiplyScalar(.5),fa.copy(t).sub(e).normalize(),pa.copy(this.origin).sub(Wc);let s=e.distanceTo(t)*.5,o=-this.direction.dot(fa),a=pa.dot(this.direction),l=-pa.dot(fa),c=pa.lengthSq(),u=Math.abs(1-o*o),h,d,f,p;if(u>0)if(h=o*l-a,d=o*a-l,p=s*u,h>=0)if(d>=-p)if(d<=p){let _=1/u;h*=_,d*=_,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-p?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c):d<=p?(h=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Wc).addScaledVector(fa,d),f}intersectSphere(e,t){if(e.radius<0)return null;Ai.subVectors(e.center,this.origin);let n=Ai.dot(this.direction),r=Ai.dot(Ai)-n*n,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Ai)!==null}intersectTriangle(e,t,n,r,s){let o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,h=e.x-o.x,d=e.y-o.y,f=e.z-o.z,p=t.x-o.x,_=t.y-o.y,m=t.z-o.z,g=n.x-o.x,y=n.y-o.y,M=n.z-o.z,x=Math.abs(l),w=Math.abs(c),b=Math.abs(u),v,T,O,C,I,U,Y,L,X,j,z,re;if(x>=w&&x>=b?(O=l,U=h,X=p,re=g,l>=0?(v=c,T=u,C=d,I=f,Y=_,L=m,j=y,z=M):(v=u,T=c,C=f,I=d,Y=m,L=_,j=M,z=y)):w>=b?(O=c,U=d,X=_,re=y,c>=0?(v=u,T=l,C=f,I=h,Y=m,L=p,j=M,z=g):(v=l,T=u,C=h,I=f,Y=p,L=m,j=g,z=M)):(O=u,U=f,X=m,re=M,u>=0?(v=l,T=c,C=h,I=d,Y=p,L=_,j=g,z=y):(v=c,T=l,C=d,I=h,Y=_,L=p,j=y,z=g)),O===0)return null;let W=v/O,J=T/O,ne=1/O,Ae=C-W*U,Ue=I-J*U,$=Y-W*X,_e=L-J*X,we=j-W*re,Fe=z-J*re,Se=we*_e-Fe*$,qe=Ae*Fe-Ue*we,yt=$*Ue-_e*Ae;if(r){if(Se<0||qe<0||yt<0)return null}else if((Se<0||qe<0||yt<0)&&(Se>0||qe>0||yt>0))return null;let Be=Se+qe+yt;if(Be===0)return null;let Je=ne*(Se*U+qe*X+yt*re);return(Be>0?Je<0:Je>0)?null:this.at(Je/Be,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},cn=class extends Xt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bt,this.combine=Uo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Bd=new oe,Mr=new Pr,ma=new gn,Hd=new A,ga=new A,_a=new A,va=new A,Xc=new A,xa=new A,kd=new A,ya=new A,mt=class extends ct{constructor(e=new et,t=new cn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){xa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=a[l],h=s[l];u!==0&&(Xc.fromBufferAttribute(h,e),o?xa.addScaledVector(Xc,u):xa.addScaledVector(Xc.sub(t),u))}t.add(xa)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ma.copy(n.boundingSphere),ma.applyMatrix4(s),Mr.copy(e.ray).recast(e.near),!(ma.containsPoint(Mr.origin)===!1&&(Mr.intersectSphere(ma,Hd)===null||Mr.origin.distanceToSquared(Hd)>(e.far-e.near)**2))&&(Bd.copy(s).invert(),Mr.copy(e.ray).applyMatrix4(Bd),!(n.boundingBox!==null&&Mr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Mr)))}_computeIntersections(e,t,n){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,_=d.length;p<_;p++){let m=d[p],g=o[m.materialIndex],y=Math.max(m.start,f.start),M=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=y,w=M;x<w;x+=3){let b=a.getX(x),v=a.getX(x+1),T=a.getX(x+2);r=Ma(this,g,e,n,c,u,h,b,v,T),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let p=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=p,g=_;m<g;m+=3){let y=a.getX(m),M=a.getX(m+1),x=a.getX(m+2);r=Ma(this,o,e,n,c,u,h,y,M,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,_=d.length;p<_;p++){let m=d[p],g=o[m.materialIndex],y=Math.max(m.start,f.start),M=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=y,w=M;x<w;x+=3){let b=x,v=x+1,T=x+2;r=Ma(this,g,e,n,c,u,h,b,v,T),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let p=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=p,g=_;m<g;m+=3){let y=m,M=m+1,x=m+2;r=Ma(this,o,e,n,c,u,h,y,M,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function K0(i,e,t,n,r,s,o,a){let l;if(e.side===kt?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===hn,a),l===null)return null;ya.copy(a),ya.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(ya);return c<t.near||c>t.far?null:{distance:c,point:ya.clone(),object:i}}function Ma(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,ga),i.getVertexPosition(l,_a),i.getVertexPosition(c,va);let u=K0(i,e,t,n,ga,_a,va,kd);if(u){let h=new A;ir.getBarycoord(kd,ga,_a,va,h),r&&(u.uv=ir.getInterpolatedAttribute(r,a,l,c,h,new Ve)),s&&(u.uv1=ir.getInterpolatedAttribute(s,a,l,c,h,new Ve)),o&&(u.normal=ir.getInterpolatedAttribute(o,a,l,c,h,new A),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new A,materialIndex:0};ir.getNormal(ga,_a,va,d.normal),u.face=d,u.barycoord=h}return u}var so=new lt,Vd=new lt,zd=new lt,$0=new lt,Gd=new oe,Ea=new A,qc=new gn,Wd=new oe,Yc=new Pr,Bn=class extends mt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=$c,this.bindMatrix=new oe,this.bindMatrixInverse=new oe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new nn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ea),this.boundingBox.expandByPoint(Ea)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new gn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ea),this.boundingSphere.expandByPoint(Ea)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qc.copy(this.boundingSphere),qc.applyMatrix4(r),e.ray.intersectsSphere(qc)!==!1&&(Wd.copy(r).invert(),Yc.copy(e.ray).applyMatrix4(Wd),!(this.boundingBox!==null&&Yc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Yc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new lt,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===$c?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Of?this.bindMatrixInverse.copy(this.bindMatrix).invert():ke("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,r=this.geometry;Vd.fromBufferAttribute(r.attributes.skinIndex,e),zd.fromBufferAttribute(r.attributes.skinWeight,e),t.isVector4?(so.copy(t),t.set(0,0,0,0)):(so.set(t.x,t.y,t.z,1),t.set(0,0,0)),so.applyMatrix4(this.bindMatrix);for(let s=0;s<4;s++){let o=zd.getComponent(s);if(o!==0){let a=Vd.getComponent(s);Gd.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector($0.copy(so).applyMatrix4(Gd),o)}}return t.isVector4&&(t.w=so.w),t.applyMatrix4(this.bindMatrixInverse)}},Oi=class extends ct{constructor(){super(),this.isBone=!0,this.type="Bone"}},rr=class extends Wt{constructor(e=null,t=1,n=1,r,s,o,a,l,c=Ot,u=Ot,h,d){super(null,o,a,l,c,u,r,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Xd=new oe,J0=new oe,Ln=class i{constructor(e=[],t=[]){this.uuid=mi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){ke("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new oe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new oe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){let a=e[s]?e[s].matrixWorld:J0;Xd.multiplyMatrices(a,t[s]),Xd.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new rr(t,e,e,rn,dn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){let s=e.bones[n],o=t[s];o===void 0&&(ke("Skeleton: No bone found with UUID:",s),o=new Oi),this.bones.push(o),this.boneInverses.push(new oe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let r=0,s=t.length;r<s;r++){let o=t[r];e.bones.push(o.uuid);let a=n[r];e.boneInverses.push(a.toArray())}return e}},Ni=class extends Xe{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},us=new oe,qd=new oe,Sa=[],Yd=new nn,Q0=new oe,oo=new mt,ao=new gn,Ir=class extends mt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ni(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,Q0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new nn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,us),Yd.copy(e.boundingBox).applyMatrix4(us),this.boundingBox.union(Yd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new gn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,us),ao.copy(e.boundingSphere).applyMatrix4(us),this.boundingSphere.union(ao)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=r[o+a]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(oo.geometry=this.geometry,oo.material=this.material,oo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ao.copy(this.boundingSphere),ao.applyMatrix4(n),e.ray.intersectsSphere(ao)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,us),qd.multiplyMatrices(n,us),oo.matrixWorld=qd,oo.raycast(e,Sa);for(let o=0,a=Sa.length;o<a;o++){let l=Sa[o];l.instanceId=s,l.object=this,t.push(l)}Sa.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Ni(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new rr(new Float32Array(r*this.count),r,this.count,ul,dn));let s=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;return s[l]=a,s.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Er=new gn,e_=new Ve(.5,.5),Ta=new A,sr=class{constructor(e=new $n,t=new $n,n=new $n,r=new $n,s=new $n,o=new $n){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Fn,n=!1){let r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],h=s[5],d=s[6],f=s[7],p=s[8],_=s[9],m=s[10],g=s[11],y=s[12],M=s[13],x=s[14],w=s[15];if(r[0].setComponents(c-o,f-u,g-p,w-y).normalize(),r[1].setComponents(c+o,f+u,g+p,w+y).normalize(),r[2].setComponents(c+a,f+h,g+_,w+M).normalize(),r[3].setComponents(c-a,f-h,g-_,w-M).normalize(),n)r[4].setComponents(l,d,m,x).normalize(),r[5].setComponents(c-l,f-d,g-m,w-x).normalize();else if(r[4].setComponents(c-l,f-d,g-m,w-x).normalize(),t===Fn)r[5].setComponents(c+l,f+d,g+m,w+x).normalize();else if(t===vs)r[5].setComponents(l,d,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Er.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Er.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Er)}intersectsSprite(e){Er.center.set(0,0,0);let t=e_.distanceTo(e.center);return Er.radius=.7071067811865476+t,Er.applyMatrix4(e.matrixWorld),this.intersectsSphere(Er)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Ta.x=r.normal.x>0?e.max.x:e.min.x,Ta.y=r.normal.y>0?e.max.y:e.min.y,Ta.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ta)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},jd=new oe,Wa=class i{constructor(){this.coordinateSystem=Fn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let r=0;r<t.length;r++){let s=t[r];jd.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),n[r]===void 0&&(n[r]=new sr),n[r].setFromProjectionMatrix(jd,s.coordinateSystem,s.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new sr),t[r].copy(n[r]);return this._count=e._count,this}clone(){return new i().copy(this)}};var un=class extends Xt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ue(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Xa=new A,qa=new A,Zd=new oe,lo=new Pr,ba=new gn,jc=new A,Kd=new A,Qn=class extends ct{constructor(e=new et,t=new un){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Xa.fromBufferAttribute(t,r-1),qa.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Xa.distanceTo(qa);e.setAttribute("lineDistance",new At(n,1))}else ke("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ba.copy(n.boundingSphere),ba.applyMatrix4(r),ba.radius+=s,e.ray.intersectsSphere(ba)===!1)return;Zd.copy(r).invert(),lo.copy(e.ray).applyMatrix4(Zd);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){let f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let _=f,m=p-1;_<m;_+=c){let g=u.getX(_),y=u.getX(_+1),M=wa(this,e,lo,l,g,y,_);M&&t.push(M)}if(this.isLineLoop){let _=u.getX(p-1),m=u.getX(f),g=wa(this,e,lo,l,_,m,p-1);g&&t.push(g)}}else{let f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let _=f,m=p-1;_<m;_+=c){let g=wa(this,e,lo,l,_,_+1,_);g&&t.push(g)}if(this.isLineLoop){let _=wa(this,e,lo,l,p-1,f,p-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function wa(i,e,t,n,r,s,o){let a=i.geometry.attributes.position;if(Xa.fromBufferAttribute(a,r),qa.fromBufferAttribute(a,s),t.distanceSqToSegment(Xa,qa,jc,Kd)>n)return;jc.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(jc);if(!(c<e.near||c>e.far))return{distance:c,point:Kd.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var $d=new A,Jd=new A,Hn=class extends Qn{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)$d.fromBufferAttribute(t,r),Jd.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+$d.distanceTo(Jd);e.setAttribute("lineDistance",new At(n,1))}else ke("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},yo=class extends Qn{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Ss=class extends Xt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Qd=new oe,Qc=new Pr,Aa=new gn,Ra=new A,Lr=class extends ct{constructor(e=new et,t=new Ss){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Aa.copy(n.boundingSphere),Aa.applyMatrix4(r),Aa.radius+=s,e.ray.intersectsSphere(Aa)===!1)return;Qd.copy(r).invert(),Qc.copy(e.ray).applyMatrix4(Qd);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let p=d,_=f;p<_;p++){let m=c.getX(p);Ra.fromBufferAttribute(h,m),ef(Ra,m,l,r,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let p=d,_=f;p<_;p++)Ra.fromBufferAttribute(h,p),ef(Ra,p,l,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function ef(i,e,t,n,r,s,o){let a=Qc.distanceSqToPoint(i);if(a<t){let l=new A;Qc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Mo=class extends Wt{constructor(e=[],t=zr,n,r,s,o,a,l,c,u){super(e,t,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var ei=class extends Wt{constructor(e,t,n=ii,r,s,o,a=Ot,l=Ot,c,u=Pi,h=1){if(u!==Pi&&u!==ri)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:h};super(d,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ms(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Eo=class extends ei{constructor(e,t=ii,n=zr,r,s,o=Ot,a=Ot,l,c=Pi){let u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,n,r,s,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},So=class extends Wt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},or=class i extends et{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],u=[],h=[],d=0,f=0;p("z","y","x",-1,-1,n,t,e,o,s,0),p("z","y","x",1,-1,n,t,-e,o,s,1),p("x","z","y",1,1,e,n,t,r,o,2),p("x","z","y",1,-1,e,n,-t,r,o,3),p("x","y","z",1,-1,e,t,n,r,s,4),p("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new At(c,3)),this.setAttribute("normal",new At(u,3)),this.setAttribute("uv",new At(h,2));function p(_,m,g,y,M,x,w,b,v,T,O){let C=x/v,I=w/T,U=x/2,Y=w/2,L=b/2,X=v+1,j=T+1,z=0,re=0,W=new A;for(let J=0;J<j;J++){let ne=J*I-Y;for(let Ae=0;Ae<X;Ae++){let Ue=Ae*C-U;W[_]=Ue*y,W[m]=ne*M,W[g]=L,c.push(W.x,W.y,W.z),W[_]=0,W[m]=0,W[g]=b>0?1:-1,u.push(W.x,W.y,W.z),h.push(Ae/v),h.push(1-J/T),z+=1}}for(let J=0;J<T;J++)for(let ne=0;ne<v;ne++){let Ae=d+ne+X*J,Ue=d+ne+X*(J+1),$=d+(ne+1)+X*(J+1),_e=d+(ne+1)+X*J;l.push(Ae,Ue,_e),l.push(Ue,$,_e),re+=6}a.addGroup(f,re,O),f+=re,d+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var To=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ke("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,s=n.length,o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=n[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===o)return r/(s-1);let u=n[r],d=n[r+1]-u,f=(o-u)/d;return(r+f)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new Ve:new A);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new A,r=[],s=[],o=[],a=new A,l=new oe;for(let f=0;f<=e;f++){let p=f/e;r[f]=this.getTangentAt(p,new A)}s[0]=new A,o[0]=new A;let c=Number.MAX_VALUE,u=Math.abs(r[0].x),h=Math.abs(r[0].y),d=Math.abs(r[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(r[f-1],r[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(rt(r[f-1].dot(r[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(r[f],s[f])}if(t===!0){let f=Math.acos(rt(s[0].dot(s[e]),-1,1));f/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(f=-f);for(let p=1;p<=e;p++)s[p].applyMatrix4(l.makeRotationAxis(r[p],f*p)),o[p].crossVectors(r[p],s[p])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}};function t_(i,e,t=2){let n=e&&e.length,r=n?e[0]*t:i.length,s=Kf(i,0,r,t,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(n&&(s=o_(i,e,s,t)),i.length>80*t){a=i[0],l=i[1];let u=a,h=l;for(let d=t;d<r;d+=t){let f=i[d],p=i[d+1];f<a&&(a=f),p<l&&(l=p),f>u&&(u=f),p>h&&(h=p)}c=Math.max(u-a,h-l),c=c!==0?32767/c:0}return bo(s,o,t,a,l,c,0),o}function Kf(i,e,t,n,r){let s;if(r===__(i,e,t,n)>0)for(let o=e;o<t;o+=n)s=tf(o/n|0,i[o],i[o+1],s);else for(let o=t-n;o>=e;o-=n)s=tf(o/n|0,i[o],i[o+1],s);return s&&Ts(s,s.next)&&(Ao(s),s=s.next),s}function Dr(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Ts(t,t.next)||Ft(t.prev,t,t.next)===0)){if(Ao(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function bo(i,e,t,n,r,s,o){if(!i)return;!o&&s&&h_(i,n,r,s);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(s?i_(i,n,r,s):n_(i)){e.push(l.i,i.i,c.i),Ao(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=r_(Dr(i),e),bo(i,e,t,n,r,s,2)):o===2&&s_(i,e,t,n,r,s):bo(Dr(i),e,t,n,r,s,1);break}}}function n_(i){let e=i.prev,t=i,n=i.next;if(Ft(e,t,n)>=0)return!1;let r=e.x,s=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=Math.min(r,s,o),h=Math.min(a,l,c),d=Math.max(r,s,o),f=Math.max(a,l,c),p=n.next;for(;p!==e;){if(p.x>=u&&p.x<=d&&p.y>=h&&p.y<=f&&co(r,a,s,l,o,c,p.x,p.y)&&Ft(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function i_(i,e,t,n){let r=i.prev,s=i,o=i.next;if(Ft(r,s,o)>=0)return!1;let a=r.x,l=s.x,c=o.x,u=r.y,h=s.y,d=o.y,f=Math.min(a,l,c),p=Math.min(u,h,d),_=Math.max(a,l,c),m=Math.max(u,h,d),g=eu(f,p,e,t,n),y=eu(_,m,e,t,n),M=i.prevZ,x=i.nextZ;for(;M&&M.z>=g&&x&&x.z<=y;){if(M.x>=f&&M.x<=_&&M.y>=p&&M.y<=m&&M!==r&&M!==o&&co(a,u,l,h,c,d,M.x,M.y)&&Ft(M.prev,M,M.next)>=0||(M=M.prevZ,x.x>=f&&x.x<=_&&x.y>=p&&x.y<=m&&x!==r&&x!==o&&co(a,u,l,h,c,d,x.x,x.y)&&Ft(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;M&&M.z>=g;){if(M.x>=f&&M.x<=_&&M.y>=p&&M.y<=m&&M!==r&&M!==o&&co(a,u,l,h,c,d,M.x,M.y)&&Ft(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;x&&x.z<=y;){if(x.x>=f&&x.x<=_&&x.y>=p&&x.y<=m&&x!==r&&x!==o&&co(a,u,l,h,c,d,x.x,x.y)&&Ft(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function r_(i,e){let t=i;do{let n=t.prev,r=t.next.next;!Ts(n,r)&&Jf(n,t,t.next,r)&&wo(n,r)&&wo(r,n)&&(e.push(n.i,t.i,r.i),Ao(t),Ao(t.next),t=i=r),t=t.next}while(t!==i);return Dr(t)}function s_(i,e,t,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&p_(o,a)){let l=Qf(o,a);o=Dr(o,o.next),l=Dr(l,l.next),bo(o,e,t,n,r,s,0),bo(l,e,t,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function o_(i,e,t,n){let r=[];for(let s=0,o=e.length;s<o;s++){let a=e[s]*n,l=s<o-1?e[s+1]*n:i.length,c=Kf(i,a,l,n,!1);c===c.next&&(c.steiner=!0),r.push(f_(c))}r.sort(a_);for(let s=0;s<r.length;s++)t=l_(r[s],t);return t}function a_(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=n-r}return t}function l_(i,e){let t=c_(i,e);if(!t)return e;let n=Qf(t,i);return Dr(n,n.next),Dr(t,t.next)}function c_(i,e){let t=e,n=i.x,r=i.y,s=-1/0,o;if(Ts(i,t))return t;do{if(Ts(i,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){let h=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=n&&h>s&&(s=h,o=t.x<t.next.x?t:t.next,h===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,u=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&$f(r<c?n:s,r,l,c,r<c?s:n,r,t.x,t.y)){let h=Math.abs(r-t.y)/(n-t.x);wo(t,i)&&(h<u||h===u&&(t.x>o.x||t.x===o.x&&u_(o,t)))&&(o=t,u=h)}t=t.next}while(t!==a);return o}function u_(i,e){return Ft(i.prev,i,e.prev)<0&&Ft(e.next,i,i.next)<0}function h_(i,e,t,n){let r=i;do r.z===0&&(r.z=eu(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,d_(r)}function d_(i){let e,t=1;do{let n=i,r;i=null;let s=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(r=n,n=n.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=o}s.nextZ=null,t*=2}while(e>1);return i}function eu(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function f_(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function $f(i,e,t,n,r,s,o,a){return(r-o)*(e-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(n-a)}function co(i,e,t,n,r,s,o,a){return!(i===o&&e===a)&&$f(i,e,t,n,r,s,o,a)}function p_(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!m_(i,e)&&(wo(i,e)&&wo(e,i)&&g_(i,e)&&(Ft(i.prev,i,e.prev)||Ft(i,e.prev,e))||Ts(i,e)&&Ft(i.prev,i,i.next)>0&&Ft(e.prev,e,e.next)>0)}function Ft(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Ts(i,e){return i.x===e.x&&i.y===e.y}function Jf(i,e,t,n){let r=Pa(Ft(i,e,t)),s=Pa(Ft(i,e,n)),o=Pa(Ft(t,n,i)),a=Pa(Ft(t,n,e));return!!(r!==s&&o!==a||r===0&&Ca(i,t,e)||s===0&&Ca(i,n,e)||o===0&&Ca(t,i,n)||a===0&&Ca(t,e,n))}function Ca(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Pa(i){return i>0?1:i<0?-1:0}function m_(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Jf(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function wo(i,e){return Ft(i.prev,i,i.next)<0?Ft(i,e,i.next)>=0&&Ft(i,i.prev,e)>=0:Ft(i,e,i.prev)<0||Ft(i,i.next,e)<0}function g_(i,e){let t=i,n=!1,r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Qf(i,e){let t=tu(i.i,i.x,i.y),n=tu(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function tf(i,e,t,n){let r=tu(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Ao(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function tu(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function __(i,e,t,n){let r=0;for(let s=e,o=t-n;s<t;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}var nu=class{static triangulate(e,t,n=2){return t_(e,t,n)}},Ro=class i{static area(e){let t=e.length,n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],r=[],s=[];nf(e),rf(n,e);let o=e.length;t.forEach(nf);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,rf(n,t[l]);let a=nu.triangulate(n,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function nf(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function rf(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Or=class i extends et{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,h=e/a,d=t/l,f=[],p=[],_=[],m=[];for(let g=0;g<u;g++){let y=g*d-o;for(let M=0;M<c;M++){let x=M*h-s;p.push(x,-y,0),_.push(0,0,1),m.push(M/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<a;y++){let M=y+c*g,x=y+c*(g+1),w=y+1+c*(g+1),b=y+1+c*g;f.push(M,x,b),f.push(x,w,b)}this.setIndex(f),this.setAttribute("position",new At(p,3)),this.setAttribute("normal",new At(_,3)),this.setAttribute("uv",new At(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};function Wr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];if(sf(r))r.isRenderTargetTexture?(ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(sf(r[0])){let s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[t][n]=s}else e[t][n]=r.slice();else e[t][n]=r}}return e}function xn(i){let e={};for(let t=0;t<i.length;t++){let n=Wr(i[t]);for(let r in n)e[r]=n[r]}return e}function sf(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function v_(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function zu(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}var Ns={clone:Wr,merge:xn},x_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,y_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,qt=class extends Xt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=x_,this.fragmentShader=y_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Wr(e.uniforms),this.uniformsGroups=v_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new ue().setHex(r.value);break;case"v2":this.uniforms[n].value=new Ve().fromArray(r.value);break;case"v3":this.uniforms[n].value=new A().fromArray(r.value);break;case"v4":this.uniforms[n].value=new lt().fromArray(r.value);break;case"m3":this.uniforms[n].value=new Le().fromArray(r.value);break;case"m4":this.uniforms[n].value=new oe().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Ya=class extends qt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},kn=class extends Xt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hr,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Sn=class extends kn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ve(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return rt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new ue(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ue(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ue(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return br('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){br('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},ar=class extends Xt{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ue(16777215),this.specular=new ue(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hr,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bt,this.combine=Uo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Nr=class extends Xt{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hr,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bt,this.combine=Uo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ja=class extends Xt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Za=class extends Xt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function nr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function uo(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function M_(i){function e(r,s){return i[r]-i[s]}let t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function of(i,e,t){let n=i.length,r=new i.constructor(n);for(let s=0,o=0;o!==n;++s){let a=t[s]*e;for(let l=0;l!==e;++l)r[o++]=i[a+l]}return r}function E_(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push(...o)),s=i[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=i[r++];while(s!==void 0)}var hi=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];e:{t:{let o;n:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=t[++n],e<r)break t}o=t.length;break n}if(!(e>=s)){let a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break t}o=n,n=0;break n}break e}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ka=class extends hi{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Sr,endingEnd:Sr}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Tr:s=e,a=2*t-n;break;case po:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Tr:o=e,l=2*n-t;break;case po:o=1,l=n+r[1]-r[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),_=p*p,m=_*p,g=-d*m+2*d*_-d*p,y=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*p+1,M=(-1-f)*m+(1.5+f)*_+.5*p,x=f*m-f*_;for(let w=0;w!==a;++w)s[w]=g*o[u+w]+y*o[c+w]+M*o[l+w]+x*o[h+w];return s}},Co=class extends hi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(r-t),h=1-u;for(let d=0;d!==a;++d)s[d]=o[c+d]*h+o[l+d]*u;return s}},$a=class extends hi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Ja=class extends hi{interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this.inTangents,h=this.outTangents;if(!u||!h){let p=(n-t)/(r-t),_=1-p;for(let m=0;m!==a;++m)s[m]=o[c+m]*_+o[l+m]*p;return s}let d=a*2,f=e-1;for(let p=0;p!==a;++p){let _=o[c+p],m=o[l+p],g=f*d+p*2,y=h[g],M=h[g+1],x=e*d+p*2,w=u[x],b=u[x+1],v=T_(n,t,y,w,r);s[p]=ep(v,_,M,b,m)}return s}};function ep(i,e,t,n,r){let s=1-i;return s*s*s*e+3*s*s*i*t+3*s*i*i*n+i*i*i*r}function S_(i,e,t,n,r){let s=1-i;return 3*s*s*(t-e)+6*s*i*(n-t)+3*i*i*(r-n)}function T_(i,e,t,n,r){let s=(i-e)/(r-e);for(let o=0;o<8;o++){let a=ep(s,e,t,n,r)-i;if(Math.abs(a)<1e-10)break;let l=S_(s,e,t,n,r);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-a/l))}return s}var An=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=nr(t,this.TimeBufferType),this.values=nr(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:nr(e.times,Array),values:nr(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r),uo(e.settings)&&(n.settings={inTangents:nr(e.settings.inTangents,Array),outTangents:nr(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new $a(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Co(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ka(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ja(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case wr:t=this.InterpolantFactoryMethodDiscrete;break;case Ar:t=this.InterpolantFactoryMethodLinear;break;case Da:t=this.InterpolantFactoryMethodSmooth;break;case Jc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ke("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return wr;case this.InterpolantFactoryMethodLinear:return Ar;case this.InterpolantFactoryMethodSmooth:return Da;case this.InterpolantFactoryMethodBezier:return Jc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e;uo(this.settings)&&(af(this.settings.inTangents,e),af(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;uo(this.settings)&&(lf(this.settings.inTangents,e),lf(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ke("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(Ke("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Ke("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Ke("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&v0(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){Ke("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Da,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{let h=a*n,d=h-n,f=h+n;for(let p=0;p!==n;++p){let _=t[h+p];if(_!==t[d+p]||_!==t[f+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,uo(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function af(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function lf(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}An.prototype.ValueTypeName="";An.prototype.TimeBufferType=Float32Array;An.prototype.ValueBufferType=Float32Array;An.prototype.DefaultInterpolation=Ar;var Ui=class extends An{constructor(e,t,n){super(e,t,n)}};Ui.prototype.ValueTypeName="bool";Ui.prototype.ValueBufferType=Array;Ui.prototype.DefaultInterpolation=wr;Ui.prototype.InterpolantFactoryMethodLinear=void 0;Ui.prototype.InterpolantFactoryMethodSmooth=void 0;var Po=class extends An{constructor(e,t,n,r){super(e,t,n,r)}};Po.prototype.ValueTypeName="color";var ti=class extends An{constructor(e,t,n,r){super(e,t,n,r)}};ti.prototype.ValueTypeName="number";var Qa=class extends hi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(r-t),c=e*a;for(let u=c+a;c!==u;c+=4)me.slerpFlat(s,0,o,c-a,o,c,l);return s}},ni=class extends An{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Qa(this.times,this.values,this.getValueSize(),e)}};ni.prototype.ValueTypeName="quaternion";ni.prototype.InterpolantFactoryMethodSmooth=void 0;var Fi=class extends An{constructor(e,t,n){super(e,t,n)}};Fi.prototype.ValueTypeName="string";Fi.prototype.ValueBufferType=Array;Fi.prototype.DefaultInterpolation=wr;Fi.prototype.InterpolantFactoryMethodLinear=void 0;Fi.prototype.InterpolantFactoryMethodSmooth=void 0;var di=class extends An{constructor(e,t,n,r){super(e,t,n,r)}};di.prototype.ValueTypeName="vector";var Bi=class{constructor(e="",t=-1,n=[],r=Xl){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=mi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,r=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(w_(n[o]).scale(r));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){let t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,o=n.length;s!==o;++s)t.push(An.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){let s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);let u=M_(l);l=of(l,1,u),c=of(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new ti(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],u=c.name.match(s);if(u&&u.length>1){let h=u[1],d=r[h];d||(r[h]=d=[]),d.push(c)}}let o=[];for(let a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,n));return o}resetDuration(){let e=this.tracks,t=0;for(let n=0,r=e.length;n!==r;++n){let s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function b_(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ti;case"vector":case"vector2":case"vector3":case"vector4":return di;case"color":return Po;case"quaternion":return ni;case"bool":case"boolean":return Ui;case"string":return Fi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function w_(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=b_(i.type);if(i.times===void 0){let n=[],r=[];E_(i.keys,n,r,"value"),i.times=n,i.values=r}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),uo(i.settings)&&(t.settings={inTangents:nr(i.settings.inTangents,Float32Array),outTangents:nr(i.settings.outTangents,Float32Array)}),t}var ui={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(cf(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!cf(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function cf(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var el=class{constructor(e,t,n){let r=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){let f=c[h],p=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},tp=new el,Rn=class{constructor(e){this.manager=e!==void 0?e:tp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Rn.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ri={},iu=class extends Error{constructor(e,t){super(e),this.response=t}},lr=class extends Rn{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=ui.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0);return}if(Ri[e]!==void 0){Ri[e].push({onLoad:t,onProgress:n,onError:r});return}Ri[e]=[],Ri[e].push({onLoad:t,onProgress:n,onError:r});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&ke("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=Ri[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,p=f!==0,_=0,m=new ReadableStream({start(g){y();function y(){h.read().then(({done:M,value:x})=>{if(M)g.close();else{_+=x.byteLength;let w=new ProgressEvent("progress",{lengthComputable:p,loaded:_,total:f});for(let b=0,v=u.length;b<v;b++){let T=u[b];T.onProgress&&T.onProgress(w)}g.enqueue(x),y()}},M=>{g.error(M)})}}});return new Response(m)}else throw new iu(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(p=>f.decode(p))}}}).then(c=>{ui.add(`file:${e}`,c);let u=Ri[e];delete Ri[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{let u=Ri[e];if(u===void 0)throw this.manager.itemError(e),c;delete Ri[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var hs=new WeakMap,bs=class extends Rn{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=ui.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let h=hs.get(o);h===void 0&&(h=[],hs.set(o,h)),h.push({onLoad:t,onError:r})}return o}let a=xs("img");function l(){u(),t&&t(this);let h=hs.get(this)||[];for(let d=0;d<h.length;d++){let f=h[d];f.onLoad&&f.onLoad(this)}hs.delete(this),s.manager.itemEnd(e)}function c(h){u(),r&&r(h),ui.remove(`image:${e}`);let d=hs.get(this)||[];for(let f=0;f<d.length;f++){let p=d[f];p.onError&&p.onError(h)}hs.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),ui.add(`image:${e}`,a),s.manager.itemStart(e),a.fetchPriority=this.priority,a.src=e,a}};var Hi=class extends Rn{constructor(e){super(e)}load(e,t,n,r){let s=new Wt,o=new bs(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}},Ur=class extends ct{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ue(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var Zc=new oe,uf=new A,hf=new A,ws=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ve(512,512),this.mapType=_n,this.map=null,this.mapPass=null,this.matrix=new oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sr,this._frameExtents=new Ve(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;uf.setFromMatrixPosition(e.matrixWorld),t.position.copy(uf),hf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(hf),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){Zc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Zc,e.coordinateSystem,e.reversedDepth);let s=this._frameExtents,o=r?r.z/s.x:1,a=r?r.w/s.y:1,l=r?r.x/s.x:0,c=r?r.y/s.y:0;e.coordinateSystem===vs||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(Zc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ia=new A,La=new me,ci=new A,Fr=class extends ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=Fn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ia,La,ci),ci.x===1&&ci.y===1&&ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ia,La,ci.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ia,La,ci),ci.x===1&&ci.y===1&&ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ia,La,ci.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},tr=new A,df=new Ve,ff=new Ve,jt=class extends Fr{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Rr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ho*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Rr*2*Math.atan(Math.tan(ho*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){tr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(tr.x,tr.y).multiplyScalar(-e/tr.z),tr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(tr.x,tr.y).multiplyScalar(-e/tr.z)}getViewSize(e,t){return this.getViewBounds(e,df,ff),t.subVectors(ff,df)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ho*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ru=class extends ws{constructor(){super(new jt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Rr*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Br=class extends Ur{constructor(e,t,n=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.target=new ct,this.distance=n,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new ru}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},su=class extends ws{constructor(){super(new jt(90,1,.5,500)),this.isPointLightShadow=!0}},fi=class extends Ur{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new su}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Dn=class extends Fr{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ou=class extends ws{constructor(){super(new Dn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ki=class extends Ur{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.target=new ct,this.shadow=new ou}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Hr=class extends Ur{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var On=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Kc=new WeakMap,Io=class extends Rn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&ke("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&ke("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=ui.get(`image-bitmap:${e}`);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{Kc.has(o)===!0?(r&&r(Kc.get(o)),s.manager.itemError(e),s.manager.itemEnd(e)):(t&&t(c),s.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);return}let a={};a.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",a.headers=this.requestHeader,a.priority=this.priority,a.cache=this.cache,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},s.options,{colorSpaceConversion:"none"}))}).then(function(c){return ui.add(`image-bitmap:${e}`,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){r&&r(c),Kc.set(l,c),ui.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});ui.add(`image-bitmap:${e}`,l),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var ds=-90,fs=1,As=class extends ct{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new jt(ds,fs,e,t);r.layers=this.layers,this.add(r);let s=new jt(ds,fs,e,t);s.layers=this.layers,this.add(s);let o=new jt(ds,fs,e,t);o.layers=this.layers,this.add(o);let a=new jt(ds,fs,e,t);a.layers=this.layers,this.add(a);let l=new jt(ds,fs,e,t);l.layers=this.layers,this.add(l);let c=new jt(ds,fs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(let c of t)this.remove(c);if(e===Fn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===vs)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=_,e.setRenderTarget(n,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},tl=class extends jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var nl=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let r,s,o;switch(t){case"quaternion":r=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":r=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:r=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=r,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,r=this.valueSize,s=e*r+r,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==r;++a)n[s+a]=n[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(n,s,0,a,r)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,r=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,r,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,r=e*t+t,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){let l=t*this._origIndex;this._mixBufferRegion(n,r,l,1-s,t)}o>0&&this._mixBufferRegionAdditive(n,r,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,r);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,r=n*this._origIndex;e.getValue(t,r);for(let s=n,o=r;s!==o;++s)t[s]=t[r+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,r,s){if(r>=.5)for(let o=0;o!==s;++o)e[t+o]=e[n+o]}_slerp(e,t,n,r){me.slerpFlat(e,t,e,t,e,n,r)}_slerpAdditive(e,t,n,r,s){let o=this._workIndex*s;me.multiplyQuaternionsFlat(e,o,e,t,e,n),me.slerpFlat(e,t,e,t,e,o,r)}_lerp(e,t,n,r,s){let o=1-r;for(let a=0;a!==s;++a){let l=t+a;e[l]=e[l]*o+e[n+a]*r}}_lerpAdditive(e,t,n,r,s){for(let o=0;o!==s;++o){let a=t+o;e[a]=e[a]+e[n+o]*r}}},Gu="\\[\\]\\.:\\/",A_=new RegExp("["+Gu+"]","g"),Wu="[^"+Gu+"]",R_="[^"+Gu.replace("\\.","")+"]",C_=/((?:WC+[\/:])*)/.source.replace("WC",Wu),P_=/(WCOD+)?/.source.replace("WCOD",R_),I_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Wu),L_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Wu),D_=new RegExp("^"+C_+P_+I_+L_+"$"),O_=["material","materials","bones","map"],au=class{constructor(e,t,n){let r=n||pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},pt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(A_,"")}static parseTrackName(e){let t=D_.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);O_.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ke("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ke("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ke("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ke("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ke("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ke("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ke("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ke("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[r];if(o===void 0){let c=t.nodeName;Ke("PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){Ke("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ke("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};pt.Composite=au;pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};pt.prototype.GetterByBindingType=[pt.prototype._getValue_direct,pt.prototype._getValue_array,pt.prototype._getValue_arrayElement,pt.prototype._getValue_toArray];pt.prototype.SetterByBindingTypeAndVersioning=[[pt.prototype._setValue_direct,pt.prototype._setValue_direct_setNeedsUpdate,pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_array,pt.prototype._setValue_array_setNeedsUpdate,pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_arrayElement,pt.prototype._setValue_arrayElement_setNeedsUpdate,pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_fromArray,pt.prototype._setValue_fromArray_setNeedsUpdate,pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var il=class{constructor(e,t,n=null,r=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=r;let s=t.tracks,o=s.length,a=new Array(o),l={endingStart:Sr,endingEnd:Sr};for(let c=0;c!==o;++c){let u=s[c].createInterpolant(null);a[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=Nf,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let r=this._clip.duration,s=e._clip.duration,o=s/r,a=r/s;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let r=this._mixer,s=r.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=r._lendControlInterpolant(),this._timeScaleInterpolant=a);let l=a.parameterPositions,c=a.sampleValues;return l[0]=s,l[1]=s+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,r){if(!this.enabled){this._updateWeight(e);return}let s=this._startTime;if(s!==null){let l=(e-s)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Ff:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulateAdditive(a);break;case Xl:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulate(r,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let r=n.evaluate(e)[0];t*=r,e>n.parameterPositions[1]&&(this.stopFading(),r===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let r=n.evaluate(e)[0];t*=r,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,r=this.time+e,s=this._loopCount,o=n===Uf;if(e===0)return s===-1?r:o&&(s&1)===1?t-r:r;if(n===Wl){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(r>=t)r=t;else if(r<0)r=0;else{this.time=r;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),r>=t||r<0){let a=Math.floor(r/t);r-=t*a,s+=Math.abs(a);let l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=e>0?t:0,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=r,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this._loopCount=s,this.time=r;if(o&&(s&1)===1)return t-r}return r}_setEndings(e,t,n){let r=this._interpolantSettings;n?(r.endingStart=Tr,r.endingEnd=Tr):(e?r.endingStart=this.zeroSlopeAtStart?Tr:Sr:r.endingStart=po,t?r.endingEnd=this.zeroSlopeAtEnd?Tr:Sr:r.endingEnd=po)}_scheduleFading(e,t,n){let r=this._mixer,s=r.time,o=this._weightInterpolant;o===null&&(o=r._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,l=o.sampleValues;return a[0]=s,l[0]=t,a[1]=s+e,l[1]=n,this}},N_=new Float32Array(1),Lo=class extends Jn{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){let n=e._localRoot||this._root,r=e._clip.tracks,s=r.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName,u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==s;++h){let d=r[h],f=d.name,p=u[f];if(p!==void 0)++p.referenceCount,o[h]=p;else{if(p=o[h],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,l,f));continue}let _=t&&t._propertyBindings[h].binding.parsedPath;p=new nl(pt.create(n,f,_),d.ValueTypeName,d.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,l,f),o[h]=p}a[h].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,r=e._clip.uuid,s=this._actionsByClip[r];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,r,n)}let t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){let s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){let s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let r=this._actions,s=this._actionsByClip,o=s[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=r.length,r.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],r=e._cacheIndex;n._cacheIndex=r,t[r]=n,t.pop(),e._cacheIndex=null;let s=e._clip.uuid,o=this._actionsByClip,a=o[s],l=a.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;let h=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],l.length===0&&delete o[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){let s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,r=this._nActiveActions++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,r=--this._nActiveActions,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){let r=this._bindingsByRootAndName,s=this._bindings,o=r[t];o===void 0&&(o={},r[t]=o),o[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,r=n.rootNode.uuid,s=n.path,o=this._bindingsByRootAndName,a=o[r],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[s],Object.keys(a).length===0&&delete o[r]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,r=this._nActiveBindings++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,r=--this._nActiveBindings,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new Co(new Float32Array(2),new Float32Array(2),1,N_),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,r=--this._nActiveControlInterpolants,s=t[r];e.__cacheIndex=r,t[r]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){let r=t||this._root,s=r.uuid,o=typeof e=="string"?Bi.findByName(r,e):e,a=o!==null?o.uuid:e,l=this._actionsByClip[a],c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Xl),l!==void 0){let h=l.actionByRoot[s];if(h!==void 0&&h.blendMode===n)return h;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;let u=new il(this,o,t,n);return this._bindAction(u,c),this._addInactiveAction(u,a,s),u}existingAction(e,t){let n=t||this._root,r=n.uuid,s=typeof e=="string"?Bi.findByName(n,e):e,o=s?s.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[r]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,r=this.time+=e,s=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(r,e,s,o);let a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,r=this._actionsByClip,s=r[n];if(s!==void 0){let o=s.knownActions;for(let a=0,l=o.length;a!==l;++a){let c=o[a];this._deactivateAction(c);let u=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete r[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let r=this._bindingsByRootAndName,s=r[t];if(s!==void 0)for(let o in s){let a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var Rs=class{constructor(e,t,n,r,s,o=!1){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=r,this.count=s,this.normalized=o,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}};var lu=class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=r,this}};var Do=class extends Hn{constructor(e=1){let t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new et;r.setAttribute("position",new At(t,3)),r.setAttribute("color",new At(n,3));let s=new un({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(e,t,n){let r=new ue,s=this.geometry.attributes.color.array;return r.set(e),r.toArray(s,0),r.toArray(s,3),r.set(t),r.toArray(s,6),r.toArray(s,9),r.set(n),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}};function Xu(i,e,t,n){let r=U_(n);switch(t){case wu:return i*e;case ul:return i*e/r.components*r.byteLength;case hl:return i*e/r.components*r.byteLength;case ur:return i*e*2/r.components*r.byteLength;case dl:return i*e*2/r.components*r.byteLength;case Au:return i*e*3/r.components*r.byteLength;case rn:return i*e*4/r.components*r.byteLength;case fl:return i*e*4/r.components*r.byteLength;case Fo:case Bo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ho:case ko:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ml:case _l:return Math.max(i,16)*Math.max(e,8)/4;case pl:case gl:return Math.max(i,8)*Math.max(e,8)/2;case vl:case xl:case Ml:case El:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case yl:case Vo:case Sl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Tl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case bl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case wl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Al:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Rl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Cl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Pl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Il:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ll:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Dl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ol:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Nl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ul:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Fl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Bl:case Hl:case kl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Vl:case zl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case zo:case Gl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function U_(i){switch(i){case _n:case Eu:return{byteLength:1,components:1};case Ds:case Su:case vn:return{byteLength:2,components:1};case ll:case cl:return{byteLength:2,components:4};case ii:case al:case dn:return{byteLength:4,components:1};case Tu:case bu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Sp(){let i=null,e=!1,t=null,n=null;function r(s,o){n=i.requestAnimationFrame(r),t(s,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function F_(i){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<h.length;f++){let p=h[d],_=h[f];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++d,h[d]=_)}h.length=d+1;for(let f=0,p=h.length;f<p;f++){let _=h[f];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var B_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,H_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,k_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,V_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,z_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,G_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,W_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,X_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,q_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Y_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,j_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Z_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,K_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,$_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,J_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Q_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ev=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,iv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,rv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,sv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ov=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,av=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,lv=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,cv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,uv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fv="gl_FragColor = linearToOutputTexel( gl_FragColor );",pv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,gv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,_v=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,vv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,yv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Mv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ev=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Sv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Tv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,bv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Av=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Cv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Pv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Iv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Lv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Dv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ov=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Nv=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Uv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Fv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Bv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hv=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,kv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Wv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Yv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Kv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$v=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Jv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ex=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,nx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ix=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ox=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ax=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ux=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,fx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,px=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_x=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,yx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Mx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ex=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Sx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Tx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,bx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ax=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Rx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Px=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ix=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Lx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Dx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ox=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Nx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ux=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Fx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kx=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Wx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Xx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,qx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Yx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Kx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$x=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Jx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ey=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ty=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ny=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ry=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,sy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ay=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ly=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,dy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fy=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,py=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,my=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,it={alphahash_fragment:B_,alphahash_pars_fragment:H_,alphamap_fragment:k_,alphamap_pars_fragment:V_,alphatest_fragment:z_,alphatest_pars_fragment:G_,aomap_fragment:W_,aomap_pars_fragment:X_,batching_pars_vertex:q_,batching_vertex:Y_,begin_vertex:j_,beginnormal_vertex:Z_,bsdfs:K_,iridescence_fragment:$_,bumpmap_pars_fragment:J_,clipping_planes_fragment:Q_,clipping_planes_pars_fragment:ev,clipping_planes_pars_vertex:tv,clipping_planes_vertex:nv,color_fragment:iv,color_pars_fragment:rv,color_pars_vertex:sv,color_vertex:ov,common:av,defaultnormal_vertex:lv,displacementmap_pars_vertex:cv,displacementmap_vertex:uv,emissivemap_fragment:hv,emissivemap_pars_fragment:dv,colorspace_fragment:fv,colorspace_pars_fragment:pv,envmap_fragment:mv,envmap_common_pars_fragment:gv,envmap_pars_fragment:_v,envmap_pars_vertex:vv,envmap_physical_pars_fragment:Cv,envmap_vertex:xv,fog_vertex:yv,fog_pars_vertex:Mv,fog_fragment:Ev,fog_pars_fragment:Sv,gradientmap_pars_fragment:Tv,lightmap_pars_fragment:bv,lights_lambert_fragment:wv,lights_lambert_pars_fragment:Av,lights_pars_begin:Rv,lights_toon_fragment:Pv,lights_toon_pars_fragment:Iv,lights_phong_fragment:Lv,lights_phong_pars_fragment:Dv,lights_physical_fragment:Ov,lights_physical_pars_fragment:Nv,lights_fragment_begin:Uv,lights_fragment_maps:Fv,lights_fragment_end:Bv,lightprobes_pars_fragment:Hv,logdepthbuf_fragment:kv,logdepthbuf_pars_fragment:Vv,logdepthbuf_pars_vertex:zv,logdepthbuf_vertex:Gv,map_fragment:Wv,map_pars_fragment:Xv,map_particle_fragment:qv,map_particle_pars_fragment:Yv,metalnessmap_fragment:jv,metalnessmap_pars_fragment:Zv,morphinstance_vertex:Kv,morphcolor_vertex:$v,morphnormal_vertex:Jv,morphtarget_pars_vertex:Qv,morphtarget_vertex:ex,normal_fragment_begin:tx,normal_fragment_maps:nx,normal_pars_fragment:ix,normal_pars_vertex:rx,normal_vertex:sx,normalmap_pars_fragment:ox,clearcoat_normal_fragment_begin:ax,clearcoat_normal_fragment_maps:lx,clearcoat_pars_fragment:cx,iridescence_pars_fragment:ux,opaque_fragment:hx,packing:dx,premultiplied_alpha_fragment:fx,project_vertex:px,dithering_fragment:mx,dithering_pars_fragment:gx,roughnessmap_fragment:_x,roughnessmap_pars_fragment:vx,shadowmap_pars_fragment:xx,shadowmap_pars_vertex:yx,shadowmap_vertex:Mx,shadowmask_pars_fragment:Ex,skinbase_vertex:Sx,skinning_pars_vertex:Tx,skinning_vertex:bx,skinnormal_vertex:wx,specularmap_fragment:Ax,specularmap_pars_fragment:Rx,tonemapping_fragment:Cx,tonemapping_pars_fragment:Px,transmission_fragment:Ix,transmission_pars_fragment:Lx,uv_pars_fragment:Dx,uv_pars_vertex:Ox,uv_vertex:Nx,worldpos_vertex:Ux,background_vert:Fx,background_frag:Bx,backgroundCube_vert:Hx,backgroundCube_frag:kx,cube_vert:Vx,cube_frag:zx,depth_vert:Gx,depth_frag:Wx,distance_vert:Xx,distance_frag:qx,equirect_vert:Yx,equirect_frag:jx,linedashed_vert:Zx,linedashed_frag:Kx,meshbasic_vert:$x,meshbasic_frag:Jx,meshlambert_vert:Qx,meshlambert_frag:ey,meshmatcap_vert:ty,meshmatcap_frag:ny,meshnormal_vert:iy,meshnormal_frag:ry,meshphong_vert:sy,meshphong_frag:oy,meshphysical_vert:ay,meshphysical_frag:ly,meshtoon_vert:cy,meshtoon_frag:uy,points_vert:hy,points_frag:dy,shadow_vert:fy,shadow_frag:py,sprite_vert:my,sprite_frag:gy},Me={common:{diffuse:{value:new ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Le}},envmap:{envMap:{value:null},envMapRotation:{value:new Le},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Le},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0},uvTransform:{value:new Le}},sprite:{diffuse:{value:new ue(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}}},_i={basic:{uniforms:xn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:xn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new ue(0)},envMapIntensity:{value:1}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:xn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new ue(0)},specular:{value:new ue(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:xn([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:xn([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new ue(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:xn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:xn([Me.points,Me.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:xn([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:xn([Me.common,Me.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:xn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:xn([Me.sprite,Me.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new Le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Le}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distance:{uniforms:xn([Me.common,Me.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distance_vert,fragmentShader:it.distance_frag},shadow:{uniforms:xn([Me.lights,Me.fog,{color:{value:new ue(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};_i.physical={uniforms:xn([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Le},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Le},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Le},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Le},sheen:{value:0},sheenColor:{value:new ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Le},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Le},attenuationDistance:{value:0},attenuationColor:{value:new ue(0)},specularColor:{value:new ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Le},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Le}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};var jl={r:0,b:0,g:0},_y=new oe,Tp=new Le;Tp.set(-1,0,0,0,1,0,0,0,1);function vy(i,e,t,n,r,s){let o=new ue(0),a=r===!0?0:1,l,c,u=null,h=0,d=null;function f(y){let M=y.isScene===!0?y.background:null;if(M&&M.isTexture){let x=y.backgroundBlurriness>0;M=e.get(M,x)}return M}function p(y){let M=!1,x=f(y);x===null?m(o,a):x&&x.isColor&&(m(x,1),M=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,s):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(y,M){let x=f(M);x&&x.isCubeTexture?(c===void 0&&(c=new mt(new or(1,1,1),new qt({name:"BackgroundCubeMaterial",uniforms:Wr(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:kt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,b,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(_y.makeRotationFromEuler(M.backgroundRotation)).transpose(),x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Tp),c.material.toneMapped=je.getTransfer(x.colorSpace)!==xt,(u!==x||h!==x.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=x,h=x.version,d=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new mt(new Or(2,2),new qt({name:"BackgroundMaterial",uniforms:Wr(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=je.getTransfer(x.colorSpace)!==xt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||h!==x.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=x,h=x.version,d=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,M){y.getRGB(jl,zu(i)),t.buffers.color.setClear(jl.r,jl.g,jl.b,M,s)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,M=1){o.set(y),a=M,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,m(o,a)},render:p,addToRenderList:_,dispose:g}}function xy(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null),s=r,o=!1;function a(I,U,Y,L,X){let j=!1,z=h(I,L,Y,U);s!==z&&(s=z,c(s.object)),j=f(I,L,Y,X),j&&p(I,L,Y,X),X!==null&&e.update(X,i.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,x(I,U,Y,L),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return i.createVertexArray()}function c(I){return i.bindVertexArray(I)}function u(I){return i.deleteVertexArray(I)}function h(I,U,Y,L){let X=L.wireframe===!0,j=n[U.id];j===void 0&&(j={},n[U.id]=j);let z=I.isInstancedMesh===!0?I.id:0,re=j[z];re===void 0&&(re={},j[z]=re);let W=re[Y.id];W===void 0&&(W={},re[Y.id]=W);let J=W[X];return J===void 0&&(J=d(l()),W[X]=J),J}function d(I){let U=[],Y=[],L=[];for(let X=0;X<t;X++)U[X]=0,Y[X]=0,L[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:Y,attributeDivisors:L,object:I,attributes:{},index:null}}function f(I,U,Y,L){let X=s.attributes,j=U.attributes,z=0,re=Y.getAttributes();for(let W in re)if(re[W].location>=0){let ne=X[W],Ae=j[W];if(Ae===void 0&&(W==="instanceMatrix"&&I.instanceMatrix&&(Ae=I.instanceMatrix),W==="instanceColor"&&I.instanceColor&&(Ae=I.instanceColor)),ne===void 0||ne.attribute!==Ae||Ae&&ne.data!==Ae.data)return!0;z++}return s.attributesNum!==z||s.index!==L}function p(I,U,Y,L){let X={},j=U.attributes,z=0,re=Y.getAttributes();for(let W in re)if(re[W].location>=0){let ne=j[W];ne===void 0&&(W==="instanceMatrix"&&I.instanceMatrix&&(ne=I.instanceMatrix),W==="instanceColor"&&I.instanceColor&&(ne=I.instanceColor));let Ae={};Ae.attribute=ne,ne&&ne.data&&(Ae.data=ne.data),X[W]=Ae,z++}s.attributes=X,s.attributesNum=z,s.index=L}function _(){let I=s.newAttributes;for(let U=0,Y=I.length;U<Y;U++)I[U]=0}function m(I){g(I,0)}function g(I,U){let Y=s.newAttributes,L=s.enabledAttributes,X=s.attributeDivisors;Y[I]=1,L[I]===0&&(i.enableVertexAttribArray(I),L[I]=1),X[I]!==U&&(i.vertexAttribDivisor(I,U),X[I]=U)}function y(){let I=s.newAttributes,U=s.enabledAttributes;for(let Y=0,L=U.length;Y<L;Y++)U[Y]!==I[Y]&&(i.disableVertexAttribArray(Y),U[Y]=0)}function M(I,U,Y,L,X,j,z){z===!0?i.vertexAttribIPointer(I,U,Y,X,j):i.vertexAttribPointer(I,U,Y,L,X,j)}function x(I,U,Y,L){_();let X=L.attributes,j=Y.getAttributes(),z=U.defaultAttributeValues;for(let re in j){let W=j[re];if(W.location>=0){let J=X[re];if(J===void 0&&(re==="instanceMatrix"&&I.instanceMatrix&&(J=I.instanceMatrix),re==="instanceColor"&&I.instanceColor&&(J=I.instanceColor)),J!==void 0){let ne=J.normalized,Ae=J.itemSize,Ue=e.get(J);if(Ue===void 0)continue;let $=Ue.buffer,_e=Ue.type,we=Ue.bytesPerElement,Fe=_e===i.INT||_e===i.UNSIGNED_INT||J.gpuType===al;if(J.isInterleavedBufferAttribute){let Se=J.data,qe=Se.isInterleavedBuffer===!0?Se.stride:Se.itemSize,yt=J.offset;if(Se.isInstancedInterleavedBuffer||Se.isInstancedBufferAttribute){for(let Be=0;Be<W.locationSize;Be++)g(W.location+Be,Se.meshPerAttribute);I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let Be=0;Be<W.locationSize;Be++)m(W.location+Be);i.bindBuffer(i.ARRAY_BUFFER,$);for(let Be=0;Be<W.locationSize;Be++)M(W.location+Be,Ae/W.locationSize,_e,ne,qe*we,(yt+Ae/W.locationSize*Be)*we,Fe)}else{if(J.isInstancedBufferAttribute){for(let Se=0;Se<W.locationSize;Se++)g(W.location+Se,J.meshPerAttribute);I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Se=0;Se<W.locationSize;Se++)m(W.location+Se);i.bindBuffer(i.ARRAY_BUFFER,$);for(let Se=0;Se<W.locationSize;Se++)M(W.location+Se,Ae/W.locationSize,_e,ne,Ae*we,Ae/W.locationSize*Se*we,Fe)}}else if(z!==void 0){let ne=z[re];if(ne!==void 0)switch(ne.length){case 2:i.vertexAttrib2fv(W.location,ne);break;case 3:i.vertexAttrib3fv(W.location,ne);break;case 4:i.vertexAttrib4fv(W.location,ne);break;default:i.vertexAttrib1fv(W.location,ne)}}}}y()}function w(){O();for(let I in n){let U=n[I];for(let Y in U){let L=U[Y];for(let X in L){let j=L[X];for(let z in j)u(j[z].object),delete j[z];delete L[X]}}delete n[I]}}function b(I){if(n[I.id]===void 0)return;let U=n[I.id];for(let Y in U){let L=U[Y];for(let X in L){let j=L[X];for(let z in j)u(j[z].object),delete j[z];delete L[X]}}delete n[I.id]}function v(I){for(let U in n){let Y=n[U];for(let L in Y){let X=Y[L];if(X[I.id]===void 0)continue;let j=X[I.id];for(let z in j)u(j[z].object),delete j[z];delete X[I.id]}}}function T(I){for(let U in n){let Y=n[U],L=I.isInstancedMesh===!0?I.id:0,X=Y[L];if(X!==void 0){for(let j in X){let z=X[j];for(let re in z)u(z[re].object),delete z[re];delete X[j]}delete Y[L],Object.keys(Y).length===0&&delete n[U]}}}function O(){C(),o=!0,s!==r&&(s=r,c(s.object))}function C(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:O,resetDefaultState:C,dispose:w,releaseStatesOfGeometry:b,releaseStatesOfObject:T,releaseStatesOfProgram:v,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function yy(i,e,t){let n;function r(l){n=l}function s(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let d=0;for(let f=0;f<u;f++)d+=c[f];t.update(d,n,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function My(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let v=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(v){return!(v!==rn&&n.convert(v)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(v){let T=v===vn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(v!==_n&&v!==dn&&!T&&n.convert(v)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(v){if(v==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(ke("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&h===!1;t.reversedDepthBuffer===!0&&h===!1&&ke("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&h===!0&&ke("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:x,maxSamples:w,samples:b}}function Ey(i){let e=this,t=null,n=0,r=!1,s=!1,o=new $n,a=new Le,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||n!==0||r;return r=d,n=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){let p=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,g=i.get(h);if(!r||p===null||p.length===0||s&&!m)s?u(null):c();else{let y=s?0:n,M=y*4,x=g.clippingState||null;l.value=x,x=u(p,d,M,f);for(let w=0;w!==M;++w)x[w]=t[w];g.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,p){let _=h!==null?h.length:0,m=null;if(_!==0){if(m=l.value,p!==!0||m===null){let g=f+_*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<g)&&(m=new Float32Array(g));for(let M=0,x=f;M!==_;++M,x+=4)o.copy(h[M]).applyMatrix4(y,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}var qo=class extends tn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Mo(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new or(5,5,5),s=new qt({name:"CubemapFromEquirect",uniforms:Wr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:kt,blending:Vi});s.uniforms.tEquirect.value=t;let o=new mt(r,s),a=t.minFilter;return t.minFilter===Vn&&(t.minFilter=Nt),new As(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}},np=256,Sy=3,Ty=20,bp=256,wp=16,by=3,wy=new A,Ay=new ue,Fs=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new As(1,10,null),this._boxMesh=new mt(new or(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){let{size:o=256,position:a=wy}=s,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);let h=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,p=l.autoClearStencil,_=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,_===null&&(e.background=l.getClearColor(Ay));let m=new As(n,r,u);return m.position.copy(a),m.update(l,e),l.autoClear=h,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=p,e.background=_,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(np,Hu(e))}_fromTexture(e,t){e.mapping===zr||e.mapping===Ps?this._setSize(e.image.length===0?np:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=ip(e,!1,!1),n=Math.log2(e)-Sy;for(let r=0;r<=n;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=ip(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let r=this._boxMesh,s=this._cubeCamera;r.material=n,s.renderTarget=e,s.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),s.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===zr||e.mapping===Ps?(this._cubemapMaterial===null&&(this._cubemapMaterial=sp()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=rp()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Ry(),this._integrationMaterial=Cy());let t=this._cubeSize,n=e.texture.mipmaps.length-1,r=this._ggxMaterial.uniforms;r.envMap.value=this._sourceTarget.texture;let s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(t/wp);for(let o=0;o<=n;o++){let a=i.lodToRoughness(o,n);if(o>n-by)s.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let l=a>0?Math.log2(t)+.5*Math.log2(6/(bp*Math.pow(a,4)))+.5:0;r.roughness.value=a,r.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Py());let n=this._blurMaterial,r=n.uniforms,s=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=s.texture,this._renderCube(e,0,n),r.envMap.value=e.texture,this._renderCube(s,0,n)}};function ip(i,e,t){return new qo(i,{minFilter:Vn,generateMipmaps:e,type:vn,colorSpace:En,depthBuffer:t})}function Yo(i,e,t){return new qt({name:i,uniforms:e,vertexShader:it.cube_vert,fragmentShader:t,side:kt,blending:Vi,depthTest:!1,depthWrite:!1})}function Ry(){return Yo("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${bp}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Cy(){return Yo("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:wp}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Py(){return Yo("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Ty}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function rp(){return Yo("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function sp(){return Yo("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Iy(i){let e=new WeakMap,t=new WeakMap,n=null;function r(d,f=!1){return d==null?null:f?o(d):s(d)}function s(d){if(d&&d.isTexture){let f=d.mapping;if(f===Is||f===sl)if(e.has(d)){let p=e.get(d).texture;return a(p,d.mapping)}else{let p=d.image;if(p&&p.height>0){let _=new qo(p.height);return _.fromEquirectangularTexture(i,d),e.set(d,_),d.addEventListener("dispose",c),a(_.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,p=f===Is||f===sl,_=f===zr||f===Ps;if(p||_){let m=t.get(d),g=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return n===null&&(n=new Fs(i)),m=p?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{let y=d.image;return p&&y&&y.height>0||_&&y&&l(y)?(n===null&&(n=new Fs(i)),m=p?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",u),m.texture):null}}}return d}function a(d,f){return f===Is?d.mapping=zr:f===sl&&(d.mapping=Ps),d}function l(d){let f=0,p=6;for(let _=0;_<p;_++)d[_]!==void 0&&f++;return f===p}function c(d){let f=d.target;f.removeEventListener("dispose",c);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(d){let f=d.target;f.removeEventListener("dispose",u);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:h}}function Ly(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&br("WebGLRenderer: "+n+" extension not supported."),r}}}function Dy(i,e,t,n){let r={},s=new WeakMap,o=new FinalizationRegistry(p=>delete r[p]);function a(p){l(p.target)}function l(p){p.index!==null&&e.remove(p.index);for(let m in p.attributes)e.remove(p.attributes[m]);p.removeEventListener("dispose",a),delete r[p.id],o.unregister(p);let _=s.get(p);_&&(e.remove(_),s.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function c(p,_){return r[_.id]!==void 0||(_.addEventListener("dispose",a),r[_.id]=new WeakRef(_),o.register(_,_.id,_),t.memory.geometries++),_}function u(p){let _=p.attributes;for(let m in _)e.update(_[m],i.ARRAY_BUFFER)}function h(p){let _=p.index,m=p.attributes.position,g=0;if(m===void 0)return;let y=_!==null?_.array.length:m.array.length/3-1,M=m.count>=65535?xo:Cr,x=new M(Math.ceil(y/3)*6,1),w=x.array;if(_!==null){let v=_.array;g=_.version;for(let T=0,O=0;T<y;T+=3){let C=v[T+0],I=v[T+1],U=v[T+2];w[O++]=C,w[O++]=I,w[O++]=I,w[O++]=U,w[O++]=U,w[O++]=C}}else{g=m.version;for(let v=0,T=0;v<y;v+=3){let O=v+0,C=v+1,I=v+2;w[T++]=O,w[T++]=C,w[T++]=C,w[T++]=I,w[T++]=I,w[T++]=O}}x.version=g;let b=s.get(p);b&&e.remove(b),s.set(p,x)}function d(p){let _=s.get(p);if(_){let m=p.index;m!==null&&_.version<m.version&&h(p)}else h(p);return s.get(p)}function f(){for(let p in r){let _=r[p].deref();_!==void 0&&l(_)}}return{get:c,update:u,getWireframeAttribute:d,dispose:f}}function Oy(i,e,t){let n;function r(h){n=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,d){i.drawElements(n,d,s,h*o),t.update(d,n,1)}function c(h,d,f){f!==0&&(i.drawElementsInstanced(n,d,s,h*o,f),t.update(d,n,f))}function u(h,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,h,0,f);let _=0;for(let m=0;m<f;m++)_+=d[m];t.update(_,n,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Ny(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:Ke("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Uy(i,e,t){let n=new WeakMap,r=new lt;function s(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,d=n.get(a);if(d===void 0||d.count!==h){let O=function(){v.dispose(),n.delete(a),a.removeEventListener("dispose",O)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],M=0;f===!0&&(M=1),p===!0&&(M=2),_===!0&&(M=3);let x=a.attributes.position.count*M,w=1;x>e.maxTextureSize&&(w=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let b=new Float32Array(x*w*4*h),v=new _o(b,x,w,h);v.type=dn,v.needsUpdate=!0;let T=M*4;for(let C=0;C<h;C++){let I=m[C],U=g[C],Y=y[C],L=x*w*4*C;for(let X=0;X<I.count;X++){let j=X*T;f===!0&&(r.fromBufferAttribute(I,X),b[L+j+0]=r.x,b[L+j+1]=r.y,b[L+j+2]=r.z,b[L+j+3]=0),p===!0&&(r.fromBufferAttribute(U,X),b[L+j+4]=r.x,b[L+j+5]=r.y,b[L+j+6]=r.z,b[L+j+7]=0),_===!0&&(r.fromBufferAttribute(Y,X),b[L+j+8]=r.x,b[L+j+9]=r.y,b[L+j+10]=r.z,b[L+j+11]=Y.itemSize===4?r.w:1)}}d={count:h,texture:v,size:new Ve(x,w)},n.set(a,d),a.addEventListener("dispose",O)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function Fy(i,e,t,n,r){let s=new WeakMap;function o(c){let u=r.render.frame,h=c.geometry,d=e.get(c,h);if(s.get(d)!==u&&(e.update(d),s.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==u&&(f.update(),s.set(f,u))}return d}function a(){s=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}var By={[mu]:"LINEAR_TONE_MAPPING",[gu]:"REINHARD_TONE_MAPPING",[_u]:"CINEON_TONE_MAPPING",[vu]:"ACES_FILMIC_TONE_MAPPING",[yu]:"AGX_TONE_MAPPING",[Vr]:"NEUTRAL_TONE_MAPPING",[xu]:"CUSTOM_TONE_MAPPING"};function Hy(i,e,t,n,r,s){let o=new tn(e,t,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,u=new et;u.setAttribute("position",new At([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new At([0,2,0,0,2,0],2));let h=new Ya({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new mt(u,h),f=new Dn(-1,1,1,-1,0,1),p=null,_=null,m=!1,g,y=null,M=[],x=!1;this.setSize=function(w,b){o.setSize(w,b),a!==null&&a.setSize(w,b),l!==null&&l.setSize(w,b);for(let v=0;v<M.length;v++){let T=M[v];T.setSize&&T.setSize(w,b)}},this.setEffects=function(w){M=w,x=M.length>0&&M[0].isRenderPass===!0;let b=o.width,v=o.height;M.length>0&&a===null&&(a=new tn(b,v,{type:vn,depthBuffer:!1,stencilBuffer:!1}),l=new tn(b,v,{type:vn,depthBuffer:!1,stencilBuffer:!1}));let T=r===!0&&M.some(O=>O.needsDepthTexture===!0);T!==(o.depthTexture!==null)&&(T===!0&&c===null&&(c=new ei(b,v),s===!0&&(c.format=ri,c.type=Gi)),o.dispose(),o.depthTexture=T?c:null,o.resolveDepthBuffer=T,o.storeMultisampledDepthBuffer=T);for(let O=0;O<M.length;O++){let C=M[O];C.setSize&&C.setSize(b,v),T&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(c)}},this.begin=function(w,b){if(m||w.toneMapping===pi&&M.length===0)return!1;if(y=b,b!==null){let v=b.width,T=b.height;(o.width!==v||o.height!==T)&&this.setSize(v,T)}return x===!1&&w.setRenderTarget(o),g=w.toneMapping,w.toneMapping=pi,!0},this.hasRenderPass=function(){return x},this.end=function(w,b){w.toneMapping=g,m=!0;let v=o,T=a;for(let O=0;O<M.length;O++){let C=M[O];C.enabled!==!1&&(C.render(w,T,v,b),C.needsSwap!==!1&&(v=T,T=T===a?l:a))}if(p!==w.outputColorSpace||_!==w.toneMapping){p=w.outputColorSpace,_=w.toneMapping,h.defines={},je.getTransfer(p)===xt&&(h.defines.SRGB_TRANSFER="");let O=By[_];O&&(h.defines[O]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=v.texture,w.setRenderTarget(y),w.render(d,f),y=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),u.dispose(),h.dispose()}}var Ap=new Wt,Rp=new ei(1,1),Cp=new Eo(1),Pp=new _o,Ip=new Ga,Lp=new Mo,op=[],ap=[],lp=new Float32Array(16),cp=new Float32Array(9),up=new Float32Array(4);function Hs(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=op[r];if(s===void 0&&(s=new Float32Array(r),op[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function Zt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Kt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function $l(i,e){let t=ap[e];t===void 0&&(t=new Int32Array(e),ap[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function ky(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Vy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;i.uniform2fv(this.addr,e),Kt(t,e)}}function zy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Zt(t,e))return;i.uniform3fv(this.addr,e),Kt(t,e)}}function Gy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;i.uniform4fv(this.addr,e),Kt(t,e)}}function Wy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Kt(t,e)}else{if(Zt(t,n))return;up.set(n),i.uniformMatrix2fv(this.addr,!1,up),Kt(t,n)}}function Xy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Kt(t,e)}else{if(Zt(t,n))return;cp.set(n),i.uniformMatrix3fv(this.addr,!1,cp),Kt(t,n)}}function qy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Kt(t,e)}else{if(Zt(t,n))return;lp.set(n),i.uniformMatrix4fv(this.addr,!1,lp),Kt(t,n)}}function Yy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function jy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;i.uniform2iv(this.addr,e),Kt(t,e)}}function Zy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;i.uniform3iv(this.addr,e),Kt(t,e)}}function Ky(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;i.uniform4iv(this.addr,e),Kt(t,e)}}function $y(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Jy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;i.uniform2uiv(this.addr,e),Kt(t,e)}}function Qy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;i.uniform3uiv(this.addr,e),Kt(t,e)}}function eM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;i.uniform4uiv(this.addr,e),Kt(t,e)}}function Jl(i){return i.version===0&&(i.compareFunction=Ou,i.needsUpdate=!0),i}function tM(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?s=Jl(Rp):s=Ap,t.setTexture2D(e||s,r)}function nM(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Ip,r)}function iM(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_CUBE_SHADOW?s=Jl(Cp):s=Lp,t.setTextureCube(e||s,r)}function rM(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Pp,r)}function sM(i){switch(i){case 5126:return ky;case 35664:return Vy;case 35665:return zy;case 35666:return Gy;case 35674:return Wy;case 35675:return Xy;case 35676:return qy;case 5124:case 35670:return Yy;case 35667:case 35671:return jy;case 35668:case 35672:return Zy;case 35669:case 35673:return Ky;case 5125:return $y;case 36294:return Jy;case 36295:return Qy;case 36296:return eM;case 35678:case 36198:case 36298:case 36306:case 35682:return tM;case 35679:case 36299:case 36307:return nM;case 35680:case 36300:case 36308:case 36293:return iM;case 36289:case 36303:case 36311:case 36292:return rM}}function oM(i,e){i.uniform1fv(this.addr,e)}function aM(i,e){let t=Hs(e,this.size,2);i.uniform2fv(this.addr,t)}function lM(i,e){let t=Hs(e,this.size,3);i.uniform3fv(this.addr,t)}function cM(i,e){let t=Hs(e,this.size,4);i.uniform4fv(this.addr,t)}function uM(i,e){let t=Hs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function hM(i,e){let t=Hs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function dM(i,e){let t=Hs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function fM(i,e){i.uniform1iv(this.addr,e)}function pM(i,e){i.uniform2iv(this.addr,e)}function mM(i,e){i.uniform3iv(this.addr,e)}function gM(i,e){i.uniform4iv(this.addr,e)}function _M(i,e){i.uniform1uiv(this.addr,e)}function vM(i,e){i.uniform2uiv(this.addr,e)}function xM(i,e){i.uniform3uiv(this.addr,e)}function yM(i,e){i.uniform4uiv(this.addr,e)}function MM(i,e,t){let n=this.cache,r=e.length,s=$l(t,r);Zt(n,s)||(i.uniform1iv(this.addr,s),Kt(n,s));let o;this.type===i.SAMPLER_2D_SHADOW?o=Jl(Rp):o=Ap;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||o,s[a])}function EM(i,e,t){let n=this.cache,r=e.length,s=$l(t,r);Zt(n,s)||(i.uniform1iv(this.addr,s),Kt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Ip,s[o])}function SM(i,e,t){let n=this.cache,r=e.length,s=$l(t,r);Zt(n,s)||(i.uniform1iv(this.addr,s),Kt(n,s));let o;this.type===i.SAMPLER_CUBE_SHADOW?o=Jl(Cp):o=Lp;for(let a=0;a!==r;++a)t.setTextureCube(e[a]||o,s[a])}function TM(i,e,t){let n=this.cache,r=e.length,s=$l(t,r);Zt(n,s)||(i.uniform1iv(this.addr,s),Kt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Pp,s[o])}function bM(i){switch(i){case 5126:return oM;case 35664:return aM;case 35665:return lM;case 35666:return cM;case 35674:return uM;case 35675:return hM;case 35676:return dM;case 5124:case 35670:return fM;case 35667:case 35671:return pM;case 35668:case 35672:return mM;case 35669:case 35673:return gM;case 5125:return _M;case 36294:return vM;case 36295:return xM;case 36296:return yM;case 35678:case 36198:case 36298:case 36306:case 35682:return MM;case 35679:case 36299:case 36307:return EM;case 35680:case 36300:case 36308:case 36293:return SM;case 36289:case 36303:case 36311:case 36292:return TM}}var ju=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=sM(t.type)}},Zu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=bM(t.type)}},Ku=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],n)}}},qu=/(\w+)(\])?(\[|\.)?/g;function hp(i,e){i.seq.push(e),i.map[e.id]=e}function wM(i,e,t){let n=i.name,r=n.length;for(qu.lastIndex=0;;){let s=qu.exec(n),o=qu.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){hp(t,c===void 0?new ju(a,i,e):new Zu(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new Ku(a),hp(t,h)),t=h}}}var Us=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);wM(a,l,this)}let r=[],s=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&n.push(o)}return n}};function dp(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var AM=37297,RM=0;function CM(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var fp=new Le;function PM(i){je._getMatrix(fp,je.workingColorSpace,i);let e=`mat3( ${fp.elements.map(t=>t.toFixed(4))} )`;switch(je.getTransfer(i)){case mo:return[e,"LinearTransferOETF"];case xt:return[e,"sRGBTransferOETF"];default:return ke("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function pp(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+CM(i.getShaderSource(e),a)}else return s}function IM(i,e){let t=PM(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var LM={[mu]:"Linear",[gu]:"Reinhard",[_u]:"Cineon",[vu]:"ACESFilmic",[yu]:"AgX",[Vr]:"Neutral",[xu]:"Custom"};function DM(i,e){let t=LM[e];return t===void 0?(ke("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Zl=new A;function OM(){je.getLuminanceCoefficients(Zl);let i=Zl.x.toFixed(4),e=Zl.y.toFixed(4),t=Zl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function NM(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xo).join(`
`)}function UM(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function FM(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(e,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Xo(i){return i!==""}function mp(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function gp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var BM=/^[ \t]*#include +<([\w\d./]+)>/gm;function $u(i){return i.replace(BM,HM)}function HM(i,e){let t=it[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return $u(t)}var kM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _p(i){return i.replace(kM,VM)}function VM(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function vp(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var zM={[Oo]:"SHADOWMAP_TYPE_PCF",[Cs]:"SHADOWMAP_TYPE_VSM"};function GM(i){return zM[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var WM={[Ps]:"ENVMAP_MODE_REFRACTION"};function XM(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":WM[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var qM={[Uo]:"ENVMAP_BLENDING_MULTIPLY",[Lf]:"ENVMAP_BLENDING_MIX",[Df]:"ENVMAP_BLENDING_ADD"};function YM(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":qM[i.combine]||"ENVMAP_BLENDING_NONE"}function jM(i,e,t,n){let r=i.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,l=GM(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=XM(t),h=YM(t),d=NM(t),f=UM(s),p=r.createProgram(),_,m,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Xo).join(`
`),_.length>0&&(_+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Xo).join(`
`),m.length>0&&(m+=`
`)):(_=[vp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xo).join(`
`),m=[vp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==pi?"#define TONE_MAPPING":"",t.toneMapping!==pi?it.tonemapping_pars_fragment:"",t.toneMapping!==pi?DM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,IM("linearToOutputTexel",t.outputColorSpace),OM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xo).join(`
`)),o=$u(o),o=mp(o,t),o=gp(o,t),a=$u(a),a=mp(a,t),a=gp(a,t),o=_p(o),a=_p(a),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,_=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,m=["#define varying in",t.glslVersion===Fu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Fu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let y=g+_+o,M=g+m+a,x=dp(r,r.VERTEX_SHADER,y),w=dp(r,r.FRAGMENT_SHADER,M);r.attachShader(p,x),r.attachShader(p,w),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function b(C){if(i.debug.checkShaderErrors){let I=r.getProgramInfoLog(p)||"",U=r.getShaderInfoLog(x)||"",Y=r.getShaderInfoLog(w)||"",L=I.trim(),X=U.trim(),j=Y.trim(),z=!0,re=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,p,x,w);else{let W=pp(r,x,"vertex"),J=pp(r,w,"fragment");Ke("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+L+`
`+W+`
`+J)}else L!==""?ke("WebGLProgram: Program Info Log:",L):(X===""||j==="")&&(re=!1);re&&(C.diagnostics={runnable:z,programLog:L,vertexShader:{log:X,prefix:_},fragmentShader:{log:j,prefix:m}})}r.deleteShader(x),r.deleteShader(w),v=new Us(r,p),T=FM(r,p)}let v;this.getUniforms=function(){return v===void 0&&b(this),v};let T;this.getAttributes=function(){return T===void 0&&b(this),T};let O=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=r.getProgramParameter(p,AM)),O},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=RM++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=x,this.fragmentShader=w,this}var ZM=0,Ju=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Qu(e),t.set(e,n)),n}},Qu=class{constructor(e){this.id=ZM++,this.code=e,this.usedTimes=0}};function KM(i){return i===ur||i===Vo||i===zo}function $M(i,e,t,n,r,s){let o=new vo,a=new Ju,l=new Set,c=[],u=new Map,h=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(v){return l.add(v),v===0?"uv":`uv${v}`}function p(v,T,O,C,I,U){let Y=C.fog,L=I.geometry,X=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?C.environment:null,j=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,z=e.get(v.envMap||X,j),re=d[v.type],W=n.precision;v.precision!==null&&(W=n.getMaxPrecision(v.precision),W!==v.precision&&ke("WebGLProgram.getParameters:",v.precision,"not supported, using",W,"instead."));let J=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,ne=J!==void 0?J.length:0,Ae=0;L.morphAttributes.position!==void 0&&(Ae=1),L.morphAttributes.normal!==void 0&&(Ae=2),L.morphAttributes.color!==void 0&&(Ae=3);let Ue,$,_e,we;if(re){let Te=_i[re];Ue=Te.vertexShader,$=Te.fragmentShader}else{Ue=v.vertexShader,$=v.fragmentShader;let Te=a.getVertexShaderStage(v),ft=a.getFragmentShaderStage(v);a.update(v,Te,ft),_e=Te.id,we=ft.id}let Fe=i.getRenderTarget(),Se=i.state.buffers.depth.getReversed(),qe=I.isInstancedMesh===!0,yt=I.isBatchedMesh===!0,Be=!!v.map,Je=!!v.matcap,ot=!!z,He=ot&&z.isPMREMTexture===!0,ht=!!v.aoMap,Lt=!!v.lightMap,zt=!!v.bumpMap&&v.wireframe===!1,Mt=!!v.normalMap,sn=!!v.displacementMap,Dt=!!v.emissiveMap,wt=!!v.metalnessMap,fn=!!v.roughnessMap,Et=v.anisotropy>0,N=v.clearcoat>0,Rt=v.diffuseRoughness>0,dt=v.dispersion>0,gt=v.retroreflectivity>0,ve=v.iridescence>0,Ct=v.sheen>0,De=v.transmission>0,ze=Et&&!!v.anisotropyMap,R=N&&!!v.clearcoatMap,E=N&&!!v.clearcoatNormalMap,B=N&&!!v.clearcoatRoughnessMap,ie=Rt&&!!v.diffuseRoughnessMap,te=ve&&!!v.iridescenceMap,de=ve&&!!v.iridescenceThicknessMap,ge=Ct&&!!v.sheenColorMap,K=Ct&&!!v.sheenRoughnessMap,ee=!!v.specularMap,fe=!!v.specularColorMap,P=!!v.specularIntensityMap,Q=De&&!!v.transmissionMap,Z=De&&!!v.thicknessMap,pe=!!v.gradientMap,ae=!!v.alphaMap,he=v.alphaTest>0,Re=!!v.alphaHash,Qe=!!v.extensions,le=pi;v.toneMapped&&(Fe===null||Fe.isXRRenderTarget===!0)&&(le=i.toneMapping);let Ge=He?z.isCompressedCubeTexture?z.image[0].mipmaps:z.mipmaps:null,$e={shaderID:re,shaderType:v.type,shaderName:v.name,vertexShader:Ue,fragmentShader:$,defines:v.defines,customVertexShaderID:_e,customFragmentShaderID:we,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:W,batching:yt,batchingColor:yt&&I._colorsTexture!==null,instancing:qe,instancingColor:qe&&I.instanceColor!==null,instancingMorph:qe&&I.morphTexture!==null,outputColorSpace:Fe===null?i.outputColorSpace:Fe.isXRRenderTarget===!0?Fe.texture.colorSpace:je.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Be,matcap:Je,envMap:ot,envMapMode:ot&&z.mapping,envMapPMREM:He,envMapMaxLod:He?Ge.length-1:null,envMapSize:He?Ge[0].width:null,aoMap:ht,lightMap:Lt,bumpMap:zt,normalMap:Mt,displacementMap:sn,emissiveMap:Dt,normalMapObjectSpace:Mt&&v.normalMapType===Hf,normalMapTangentSpace:Mt&&v.normalMapType===hr,packedNormalMap:Mt&&v.normalMapType===hr&&KM(v.normalMap.format),metalnessMap:wt,roughnessMap:fn,anisotropy:Et,anisotropyMap:ze,clearcoat:N,clearcoatMap:R,clearcoatNormalMap:E,clearcoatRoughnessMap:B,diffuseRoughness:Rt,diffuseRoughnessMap:ie,dispersion:dt,retroreflection:gt,iridescence:ve,iridescenceMap:te,iridescenceThicknessMap:de,sheen:Ct,sheenColorMap:ge,sheenRoughnessMap:K,specularMap:ee,specularColorMap:fe,specularIntensityMap:P,transmission:De,transmissionMap:Q,thicknessMap:Z,gradientMap:pe,opaque:v.transparent===!1&&v.blending===cr&&v.alphaToCoverage===!1,alphaMap:ae,alphaTest:he,alphaHash:Re,combine:v.combine,mapUv:Be&&f(v.map.channel),aoMapUv:ht&&f(v.aoMap.channel),lightMapUv:Lt&&f(v.lightMap.channel),bumpMapUv:zt&&f(v.bumpMap.channel),normalMapUv:Mt&&f(v.normalMap.channel),displacementMapUv:sn&&f(v.displacementMap.channel),emissiveMapUv:Dt&&f(v.emissiveMap.channel),metalnessMapUv:wt&&f(v.metalnessMap.channel),roughnessMapUv:fn&&f(v.roughnessMap.channel),anisotropyMapUv:ze&&f(v.anisotropyMap.channel),clearcoatMapUv:R&&f(v.clearcoatMap.channel),clearcoatNormalMapUv:E&&f(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:B&&f(v.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ie&&f(v.diffuseRoughnessMap.channel),iridescenceMapUv:te&&f(v.iridescenceMap.channel),iridescenceThicknessMapUv:de&&f(v.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&f(v.sheenColorMap.channel),sheenRoughnessMapUv:K&&f(v.sheenRoughnessMap.channel),specularMapUv:ee&&f(v.specularMap.channel),specularColorMapUv:fe&&f(v.specularColorMap.channel),specularIntensityMapUv:P&&f(v.specularIntensityMap.channel),transmissionMapUv:Q&&f(v.transmissionMap.channel),thicknessMapUv:Z&&f(v.thicknessMap.channel),alphaMapUv:ae&&f(v.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(Mt||Et),vertexNormals:!!L.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!L.attributes.uv&&(Be||ae),fog:!!Y,useFog:v.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||L.attributes.normal===void 0&&Mt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Se,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:Ae,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:U.filter(Te=>Te.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&O.length>0,shadowMapType:i.shadowMap.type,toneMapping:le,decodeVideoTexture:Be&&v.map.isVideoTexture===!0&&je.getTransfer(v.map.colorSpace)===xt,decodeVideoTextureEmissive:Dt&&v.emissiveMap.isVideoTexture===!0&&je.getTransfer(v.emissiveMap.colorSpace)===xt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ht,flipSided:v.side===kt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Qe&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Qe&&v.extensions.multiDraw===!0||yt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return $e.vertexUv1s=l.has(1),$e.vertexUv2s=l.has(2),$e.vertexUv3s=l.has(3),l.clear(),$e}function _(v){let T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(let O in v.defines)T.push(O),T.push(v.defines[O]);return v.isRawShaderMaterial===!1&&(m(T,v),g(T,v),T.push(i.outputColorSpace)),T.push(v.customProgramCacheKey),T.join()}function m(v,T){v.push(T.precision),v.push(T.outputColorSpace),v.push(T.envMapMode),v.push(T.envMapPMREM),v.push(T.envMapMaxLod),v.push(T.envMapSize),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.anisotropyMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.diffuseRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.numSunLights),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numSunLightShadows),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.numLightProbes),v.push(T.numLightProbeGrids),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function g(v,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.retroreflection&&o.enable(24),T.diffuseRoughness&&o.enable(25),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),T.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function y(v){let T=d[v.type],O;if(T){let C=_i[T];O=Ns.clone(C.uniforms)}else O=v.uniforms;return O}function M(v,T){let O=u.get(T);return O!==void 0?++O.usedTimes:(O=new jM(i,T,v,r),c.push(O),u.set(T,O)),O}function x(v){if(--v.usedTimes===0){let T=c.indexOf(v);c[T]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function w(v){a.remove(v)}function b(){a.dispose()}return{getParameters:p,getProgramCacheKey:_,getUniforms:y,acquireProgram:M,releaseProgram:x,releaseShaderCache:w,programs:c,dispose:b}}function JM(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function QM(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function xp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function yp(){let i=[],e=0,t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,p,_,m,g){let y=i[e];return y===void 0?(y={id:d.id,object:d,geometry:f,material:p,materialVariant:o(d),groupOrder:_,renderOrder:d.renderOrder,z:m,group:g},i[e]=y):(y.id=d.id,y.object=d,y.geometry=f,y.material=p,y.materialVariant=o(d),y.groupOrder=_,y.renderOrder=d.renderOrder,y.z=m,y.group=g),e++,y}function l(d,f,p,_,m,g,y){y.reversedDepth===!0&&(m=-m);let M=a(d,f,p,_,m,g);p.transmission>0?n.push(M):p.transparent===!0?r.push(M):t.push(M)}function c(d,f,p,_,m,g){let y=a(d,f,p,_,m,g);p.transmission>0?n.unshift(y):p.transparent===!0?r.unshift(y):t.unshift(y)}function u(d,f){t.length>1&&t.sort(d||QM),n.length>1&&n.sort(f||xp),r.length>1&&r.sort(f||xp)}function h(){for(let d=e,f=i.length;d<f;d++){let p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:l,unshift:c,finish:h,sort:u}}function eE(){let i=new WeakMap;function e(n,r){let s=i.get(n),o;return s===void 0?(o=new yp,i.set(n,[o])):r>=s.length?(o=new yp,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function tE(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new A,color:new ue};break;case"SpotLight":t={position:new A,direction:new A,color:new ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new A,color:new ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new A,skyColor:new ue,groundColor:new ue};break;case"RectAreaLight":t={color:new ue,position:new A,halfWidth:new A,halfHeight:new A};break}return i[e.id]=t,t}}}function nE(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var iE=0;function rE(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function sE(i){let e=new tE,t=nE(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new A);let r=new A,s=new oe,o=new oe;function a(c){let u=0,h=0,d=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let f=0,p=0,_=0,m=0,g=0,y=0,M=0,x=0,w=0,b=0,v=0,T=0,O=0,C=0;c.sort(rE);for(let U=0,Y=c.length;U<Y;U++){let L=c[U],X=L.color,j=L.intensity,z=L.distance,re=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===ur?re=L.shadow.map.texture:re=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)u+=X.r*j,h+=X.g*j,d+=X.b*j;else if(L.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(L.sh.coefficients[W],j);C++}else if(L.isSunLight){let W=e.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let J=L.shadow,ne=t.get(L);ne.shadowIntensity=J.intensity,ne.shadowBias=J.bias,ne.shadowNormalBias=J.normalBias,ne.shadowRadius=J.radius,ne.shadowMapSize.copy(J.mapSize).multiply(J.getFrameExtents()),n.sunShadow[p]=ne,n.sunShadowMap[p]=re;let Ae=J.getViewportCount();for(let Ue=0;Ue<Ae;Ue++)n.sunShadowMatrix[_+Ue]=J.getMatrix(Ue),n.sunShadowCascade[_+Ue]=J._cascadeData[Ue];_+=Ae,p++}n.sun[f]=W,f++}else if(L.isDirectionalLight){let W=e.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let J=L.shadow,ne=t.get(L);ne.shadowIntensity=J.intensity,ne.shadowBias=J.bias,ne.shadowNormalBias=J.normalBias,ne.shadowRadius=J.radius,ne.shadowMapSize=J.mapSize,n.directionalShadow[m]=ne,n.directionalShadowMap[m]=re,n.directionalShadowMatrix[m]=L.shadow.matrix,w++}n.directional[m]=W,m++}else if(L.isSpotLight){let W=e.get(L);W.position.setFromMatrixPosition(L.matrixWorld),W.color.copy(X).multiplyScalar(j),W.distance=z,W.coneCos=Math.cos(L.angle),W.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),W.decay=L.decay,n.spot[y]=W;let J=L.shadow;if(L.map&&(n.spotLightMap[T]=L.map,T++,J.updateMatrices(L),L.castShadow&&O++),n.spotLightMatrix[y]=J.matrix,L.castShadow){let ne=t.get(L);ne.shadowIntensity=J.intensity,ne.shadowBias=J.bias,ne.shadowNormalBias=J.normalBias,ne.shadowRadius=J.radius,ne.shadowMapSize=J.mapSize,n.spotShadow[y]=ne,n.spotShadowMap[y]=re,v++}y++}else if(L.isRectAreaLight){let W=e.get(L);W.color.copy(X).multiplyScalar(j),W.halfWidth.set(L.width*.5,0,0),W.halfHeight.set(0,L.height*.5,0),n.rectArea[M]=W,M++}else if(L.isPointLight){let W=e.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),W.distance=L.distance,W.decay=L.decay,L.castShadow){let J=L.shadow,ne=t.get(L);ne.shadowIntensity=J.intensity,ne.shadowBias=J.bias,ne.shadowNormalBias=J.normalBias,ne.shadowRadius=J.radius,ne.shadowMapSize=J.mapSize,ne.shadowCameraNear=J.camera.near,ne.shadowCameraFar=J.camera.far,n.pointShadow[g]=ne,n.pointShadowMap[g]=re,n.pointShadowMatrix[g]=L.shadow.matrix,b++}n.point[g]=W,g++}else if(L.isHemisphereLight){let W=e.get(L);W.skyColor.copy(L.color).multiplyScalar(j),W.groundColor.copy(L.groundColor).multiplyScalar(j),n.hemi[x]=W,x++}}M>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Me.LTC_FLOAT_1,n.rectAreaLTC2=Me.LTC_FLOAT_2):(n.rectAreaLTC1=Me.LTC_HALF_1,n.rectAreaLTC2=Me.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;let I=n.hash;(I.sunLength!==f||I.directionalLength!==m||I.pointLength!==g||I.spotLength!==y||I.rectAreaLength!==M||I.hemiLength!==x||I.numSunShadows!==p||I.numDirectionalShadows!==w||I.numPointShadows!==b||I.numSpotShadows!==v||I.numSpotMaps!==T||I.numLightProbes!==C)&&(n.sun.length=f,n.directional.length=m,n.spot.length=y,n.rectArea.length=M,n.point.length=g,n.hemi.length=x,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=v,n.spotShadowMap.length=v,n.spotLightMatrix.length=v+T-O,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=O,n.numLightProbes=C,I.sunLength=f,I.directionalLength=m,I.pointLength=g,I.spotLength=y,I.rectAreaLength=M,I.hemiLength=x,I.numSunShadows=p,I.numDirectionalShadows=w,I.numPointShadows=b,I.numSpotShadows=v,I.numSpotMaps=T,I.numLightProbes=C,n.version=iE++)}function l(c,u){let h=0,d=0,f=0,p=0,_=0,m=0,g=u.matrixWorldInverse;for(let y=0,M=c.length;y<M;y++){let x=c[y];if(x.isSunLight){let w=n.sun[h];w.direction.setFromMatrixPosition(x.matrixWorld),w.direction.transformDirection(g),h++}else if(x.isDirectionalLight){let w=n.directional[d];w.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(g),d++}else if(x.isSpotLight){let w=n.spot[p];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(g),w.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(g),p++}else if(x.isRectAreaLight){let w=n.rectArea[_];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(g),o.identity(),s.copy(x.matrixWorld),s.premultiply(g),o.extractRotation(s),w.halfWidth.set(x.width*.5,0,0),w.halfHeight.set(0,x.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),_++}else if(x.isPointLight){let w=n.point[f];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(g),f++}else if(x.isHemisphereLight){let w=n.hemi[m];w.direction.setFromMatrixPosition(x.matrixWorld),w.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:n}}function Mp(i){let e=new sE(i),t=[],n=[],r=[];function s(h){u.camera=h,t.length=0,n.length=0,r.length=0}function o(h){h.isLightProbeGrid?r.push(h):t.push(h)}function a(h){n.push(h)}function l(){e.setup(t),r.sort((h,d)=>h.priority-d.priority||h.id-d.id)}function c(h){e.setupView(t,h)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:u,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function oE(i){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new Mp(i),e.set(r,[a])):s>=o.length?(a=new Mp(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var aE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,cE=[new A(1,0,0),new A(-1,0,0),new A(0,1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1)],uE=[new A(0,-1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1),new A(0,-1,0),new A(0,-1,0)],Ep=new oe,Wo=new A,Yu=new A;function hE(i,e,t){let n=new sr,r=new Ve,s=new Ve,o=new lt,a=new ja,l=new Za,c={},u=t.maxTextureSize,h={[hn]:kt,[kt]:hn,[Ht]:Ht},d=new qt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:aE,fragmentShader:lE}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new et;p.setAttribute("position",new Xe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new mt(p,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Oo;let g=this.type;this.render=function(b,v,T){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===gf&&(ke("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Oo);let O=i.getRenderTarget(),C=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),U=i.state;U.setBlending(Vi),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let Y=g!==this.type;Y&&v.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(X=>X.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,X=b.length;L<X;L++){let j=b[L],z=j.shadow;if(z===void 0){ke("WebGLShadowMap:",j,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);let re=z.getFrameExtents();r.multiply(re),s.copy(z.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/re.x),r.x=s.x*re.x,z.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/re.y),r.y=s.y*re.y,z.mapSize.y=s.y));let W=i.state.buffers.depth.getReversed();if(z.camera._reversedDepth=W,z.map===null||Y===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Cs){if(j.isPointLight){ke("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new tn(r.x,r.y,{format:ur,type:vn,minFilter:Nt,magFilter:Nt,generateMipmaps:!1}),z.map.texture.name=j.name+".shadowMap",z.map.depthTexture=new ei(r.x,r.y,dn),z.map.depthTexture.name=j.name+".shadowMapDepth",z.map.depthTexture.format=Pi,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Ot,z.map.depthTexture.magFilter=Ot}else j.isPointLight?(z.map=new qo(r.x),z.map.depthTexture=new Eo(r.x,ii)):(z.map=new tn(r.x,r.y),z.map.depthTexture=new ei(r.x,r.y,ii)),z.map.depthTexture.name=j.name+".shadowMap",z.map.depthTexture.format=Pi,this.type===Oo?(z.map.depthTexture.compareFunction=W?Du:Lu,z.map.depthTexture.minFilter=Nt,z.map.depthTexture.magFilter=Nt):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Ot,z.map.depthTexture.magFilter=Ot);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==r.x||z.map.height!==r.y)&&z.map.setSize(r.x,r.y);let J=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();j.isPointLight!==!0&&z.updateMatrices(j,T);let ne=(z.camera.layers.mask&4294967294)!==0?z.camera.layers:T.layers;for(let Ae=0;Ae<J;Ae++){let Ue=z.getCamera(Ae);if(j.isPointLight){let $=z.camera,_e=z.matrix,we=j.distance||$.far;we!==$.far&&($.far=we,$.updateProjectionMatrix()),Wo.setFromMatrixPosition(j.matrixWorld),$.position.copy(Wo),Yu.copy($.position),Yu.add(cE[Ae]),$.up.copy(uE[Ae]),$.lookAt(Yu),$.updateMatrixWorld(),_e.makeTranslation(-Wo.x,-Wo.y,-Wo.z),Ep.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),z._frustum.setFromProjectionMatrix(Ep,$.coordinateSystem,$.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)i.setRenderTarget(z.map,Ae),i.clear();else{Ae===0&&(i.setRenderTarget(z.map),i.clear());let $=z.getViewport(Ae);o.set(s.x*$.x,s.y*$.y,s.x*$.z,s.y*$.w),U.viewport(o)}n=z.getFrustum(Ae),x(v,T,Ue,j,ne,this.type)}z.isPointLightShadow!==!0&&this.type===Cs&&y(z,T),z.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(O,C,I)};function y(b,v){let T=e.update(_);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null?b.mapPass=new tn(r.x,r.y,{format:ur,type:vn}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),d.uniforms.shadow_pass.value=b.map.depthTexture,d.uniforms.resolution.value.set(b.map.width,b.map.height),d.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(v,null,T,d,_,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(v,null,T,f,_,null)}function M(b,v,T,O){let C=null,I=T.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(I!==void 0)C=I;else if(C=T.isPointLight===!0?l:a,i.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0||v.alphaToCoverage===!0){let U=C.uuid,Y=v.uuid,L=c[U];L===void 0&&(L={},c[U]=L);let X=L[Y];X===void 0&&(X=C.clone(),L[Y]=X,v.addEventListener("dispose",w)),C=X}if(C.visible=v.visible,C.wireframe=v.wireframe,O===Cs?C.side=v.shadowSide!==null?v.shadowSide:v.side:C.side=v.shadowSide!==null?v.shadowSide:h[v.side],C.alphaMap=v.alphaMap,C.alphaTest=v.alphaToCoverage===!0?.5:v.alphaTest,C.map=v.map,C.clipShadows=v.clipShadows,C.clippingPlanes=v.clippingPlanes,C.clipIntersection=v.clipIntersection,C.displacementMap=v.displacementMap,C.displacementScale=v.displacementScale,C.displacementBias=v.displacementBias,C.wireframeLinewidth=v.wireframeLinewidth,C.linewidth=v.linewidth,T.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let U=i.properties.get(C);U.light=T}return C}function x(b,v,T,O,C,I){if(b.visible===!1)return;if(b.layers.test(C)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&I===Cs)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,b.matrixWorld);let L=e.update(b),X=b.material;if(Array.isArray(X)){let j=L.groups;for(let z=0,re=j.length;z<re;z++){let W=j[z],J=X[W.materialIndex];if(J&&J.visible){let ne=M(b,J,O,I);b.onBeforeShadow(i,b,v,T,L,ne,W),i.renderBufferDirect(T,null,L,ne,b,W),b.onAfterShadow(i,b,v,T,L,ne,W)}}}else if(X.visible){let j=M(b,X,O,I);b.onBeforeShadow(i,b,v,T,L,j,null),i.renderBufferDirect(T,null,L,j,b,null),b.onAfterShadow(i,b,v,T,L,j,null)}}let Y=b.children;for(let L=0,X=Y.length;L<X;L++)x(Y[L],v,T,O,C,I)}function w(b){b.target.removeEventListener("dispose",w);for(let T in c){let O=c[T],C=b.target.uuid;C in O&&(O[C].dispose(),delete O[C])}}}function dE(i,e){function t(){let P=!1,Q=new lt,Z=null,pe=new lt(0,0,0,0);return{setMask:function(ae){Z!==ae&&!P&&(i.colorMask(ae,ae,ae,ae),Z=ae)},setLocked:function(ae){P=ae},setClear:function(ae,he,Re,Qe,le){le===!0&&(ae*=Qe,he*=Qe,Re*=Qe),Q.set(ae,he,Re,Qe),pe.equals(Q)===!1&&(i.clearColor(ae,he,Re,Qe),pe.copy(Q))},reset:function(){P=!1,Z=null,pe.set(-1,0,0,0)}}}function n(){let P=!1,Q=!1,Z=null,pe=null,ae=null;return{setReversed:function(he){if(Q!==he){let Re=e.get("EXT_clip_control");he?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),Q=he;let Qe=ae;ae=null,this.setClear(Qe)}},getReversed:function(){return Q},setTest:function(he){he?Se(i.DEPTH_TEST):qe(i.DEPTH_TEST)},setMask:function(he){Z!==he&&!P&&(i.depthMask(he),Z=he)},setFunc:function(he){if(Q&&(he=jf[he]),pe!==he){switch(he){case Oa:i.depthFunc(i.NEVER);break;case Na:i.depthFunc(i.ALWAYS);break;case Ua:i.depthFunc(i.LESS);break;case gs:i.depthFunc(i.LEQUAL);break;case Fa:i.depthFunc(i.EQUAL);break;case Ba:i.depthFunc(i.GEQUAL);break;case Ha:i.depthFunc(i.GREATER);break;case ka:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pe=he}},setLocked:function(he){P=he},setClear:function(he){ae!==he&&(ae=he,Q&&(he=1-he),i.clearDepth(he))},reset:function(){P=!1,Z=null,pe=null,ae=null,Q=!1}}}function r(){let P=!1,Q=null,Z=null,pe=null,ae=null,he=null,Re=null,Qe=null,le=null;return{setTest:function(Ge){P||(Ge?Se(i.STENCIL_TEST):qe(i.STENCIL_TEST))},setMask:function(Ge){Q!==Ge&&!P&&(i.stencilMask(Ge),Q=Ge)},setFunc:function(Ge,$e,Te){(Z!==Ge||pe!==$e||ae!==Te)&&(i.stencilFunc(Ge,$e,Te),Z=Ge,pe=$e,ae=Te)},setOp:function(Ge,$e,Te){(he!==Ge||Re!==$e||Qe!==Te)&&(i.stencilOp(Ge,$e,Te),he=Ge,Re=$e,Qe=Te)},setLocked:function(Ge){P=Ge},setClear:function(Ge){le!==Ge&&(i.clearStencil(Ge),le=Ge)},reset:function(){P=!1,Q=null,Z=null,pe=null,ae=null,he=null,Re=null,Qe=null,le=null}}}let s=new t,o=new n,a=new r,l={},c=new WeakMap,u={},h={},d={},f=new WeakMap,p=[],_=null,m=!1,g=null,y=null,M=null,x=null,w=null,b=null,v=null,T=new ue(0,0,0),O=0,C=!1,I=null,U=null,Y=null,L=null,X=null,j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,re=0,W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(W)[1]),z=re>=1):W.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),z=re>=2);let J=null,ne={},Ae=i.getParameter(i.SCISSOR_BOX),Ue=i.getParameter(i.VIEWPORT),$=new lt().fromArray(Ae),_e=new lt().fromArray(Ue);function we(P,Q,Z,pe){let ae=new Uint8Array(4),he=i.createTexture();i.bindTexture(P,he),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Re=0;Re<Z;Re++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(Q,0,i.RGBA,1,1,pe,0,i.RGBA,i.UNSIGNED_BYTE,ae):i.texImage2D(Q+Re,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ae);return he}let Fe={};Fe[i.TEXTURE_2D]=we(i.TEXTURE_2D,i.TEXTURE_2D,1),Fe[i.TEXTURE_CUBE_MAP]=we(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Fe[i.TEXTURE_2D_ARRAY]=we(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Fe[i.TEXTURE_3D]=we(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Se(i.DEPTH_TEST),o.setFunc(gs),zt(!1),Mt(cu),Se(i.CULL_FACE),ht(Vi);function Se(P){u[P]!==!0&&(i.enable(P),u[P]=!0)}function qe(P){u[P]!==!1&&(i.disable(P),u[P]=!1)}function yt(P,Q){return d[P]!==Q?(i.bindFramebuffer(P,Q),d[P]=Q,P===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=Q),P===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=Q),!0):!1}function Be(P,Q){let Z=p,pe=!1;if(P){Z=f.get(Q),Z===void 0&&(Z=[],f.set(Q,Z));let ae=P.textures;if(Z.length!==ae.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let he=0,Re=ae.length;he<Re;he++)Z[he]=i.COLOR_ATTACHMENT0+he;Z.length=ae.length,pe=!0}}else Z[0]!==i.BACK&&(Z[0]=i.BACK,pe=!0);pe&&i.drawBuffers(Z)}function Je(P){return _!==P?(i.useProgram(P),_=P,!0):!1}let ot={[zi]:i.FUNC_ADD,[_f]:i.FUNC_SUBTRACT,[vf]:i.FUNC_REVERSE_SUBTRACT};ot[rl]=i.MIN,ot[xf]=i.MAX;let He={[yf]:i.ZERO,[kr]:i.ONE,[Mf]:i.SRC_COLOR,[fu]:i.SRC_ALPHA,[Af]:i.SRC_ALPHA_SATURATE,[bf]:i.DST_COLOR,[Sf]:i.DST_ALPHA,[Ef]:i.ONE_MINUS_SRC_COLOR,[pu]:i.ONE_MINUS_SRC_ALPHA,[wf]:i.ONE_MINUS_DST_COLOR,[Tf]:i.ONE_MINUS_DST_ALPHA,[Rf]:i.CONSTANT_COLOR,[Cf]:i.ONE_MINUS_CONSTANT_COLOR,[Pf]:i.CONSTANT_ALPHA,[If]:i.ONE_MINUS_CONSTANT_ALPHA};function ht(P,Q,Z,pe,ae,he,Re,Qe,le,Ge){if(P===Vi){m===!0&&(qe(i.BLEND),m=!1);return}if(m===!1&&(Se(i.BLEND),m=!0),P!==No){if(P!==g||Ge!==C){if((y!==zi||w!==zi)&&(i.blendEquation(i.FUNC_ADD),y=zi,w=zi),Ge)switch(P){case cr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case uu:i.blendFunc(i.ONE,i.ONE);break;case hu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case du:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ke("WebGLState: Invalid blending: ",P);break}else switch(P){case cr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case uu:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case hu:Ke("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case du:Ke("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ke("WebGLState: Invalid blending: ",P);break}M=null,x=null,b=null,v=null,T.set(0,0,0),O=0,g=P,C=Ge}return}ae=ae||Q,he=he||Z,Re=Re||pe,(Q!==y||ae!==w)&&(i.blendEquationSeparate(ot[Q],ot[ae]),y=Q,w=ae),(Z!==M||pe!==x||he!==b||Re!==v)&&(i.blendFuncSeparate(He[Z],He[pe],He[he],He[Re]),M=Z,x=pe,b=he,v=Re),(Qe.equals(T)===!1||le!==O)&&(i.blendColor(Qe.r,Qe.g,Qe.b,le),T.copy(Qe),O=le),g=P,C=!1}function Lt(P,Q){P.side===Ht?qe(i.CULL_FACE):Se(i.CULL_FACE);let Z=P.side===kt;Q&&(Z=!Z),zt(Z),P.blending===cr&&P.transparent===!1?ht(Vi):ht(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),o.setFunc(P.depthFunc),o.setTest(P.depthTest),o.setMask(P.depthWrite),s.setMask(P.colorWrite);let pe=P.stencilWrite;a.setTest(pe),pe&&(a.setMask(P.stencilWriteMask),a.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),a.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Dt(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Se(i.SAMPLE_ALPHA_TO_COVERAGE):qe(i.SAMPLE_ALPHA_TO_COVERAGE)}function zt(P){I!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),I=P)}function Mt(P){P!==pf?(Se(i.CULL_FACE),P!==U&&(P===cu?i.cullFace(i.BACK):P===mf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):qe(i.CULL_FACE),U=P}function sn(P){P!==Y&&(z&&i.lineWidth(P),Y=P)}function Dt(P,Q,Z){P?(Se(i.POLYGON_OFFSET_FILL),(L!==Q||X!==Z)&&(L=Q,X=Z,o.getReversed()&&(Q=-Q,Z=-Z),i.polygonOffset(Q,Z))):qe(i.POLYGON_OFFSET_FILL)}function wt(P){P?Se(i.SCISSOR_TEST):qe(i.SCISSOR_TEST)}function fn(P){P===void 0&&(P=i.TEXTURE0+j-1),J!==P&&(i.activeTexture(P),J=P)}function Et(P,Q,Z){Z===void 0&&(J===null?Z=i.TEXTURE0+j-1:Z=J);let pe=ne[Z];pe===void 0&&(pe={type:void 0,texture:void 0},ne[Z]=pe),(pe.type!==P||pe.texture!==Q)&&(J!==Z&&(i.activeTexture(Z),J=Z),i.bindTexture(P,Q||Fe[P]),pe.type=P,pe.texture=Q)}function N(){let P=ne[J];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function Rt(){try{i.compressedTexImage2D(...arguments)}catch(P){Ke("WebGLState:",P)}}function dt(){try{i.compressedTexImage3D(...arguments)}catch(P){Ke("WebGLState:",P)}}function gt(){try{i.texSubImage2D(...arguments)}catch(P){Ke("WebGLState:",P)}}function ve(){try{i.texSubImage3D(...arguments)}catch(P){Ke("WebGLState:",P)}}function Ct(){try{i.compressedTexSubImage2D(...arguments)}catch(P){Ke("WebGLState:",P)}}function De(){try{i.compressedTexSubImage3D(...arguments)}catch(P){Ke("WebGLState:",P)}}function ze(){try{i.texStorage2D(...arguments)}catch(P){Ke("WebGLState:",P)}}function R(){try{i.texStorage3D(...arguments)}catch(P){Ke("WebGLState:",P)}}function E(){try{i.texImage2D(...arguments)}catch(P){Ke("WebGLState:",P)}}function B(){try{i.texImage3D(...arguments)}catch(P){Ke("WebGLState:",P)}}function ie(P){return h[P]!==void 0?h[P]:i.getParameter(P)}function te(P,Q){h[P]!==Q&&(i.pixelStorei(P,Q),h[P]=Q)}function de(P){$.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),$.copy(P))}function ge(P){_e.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),_e.copy(P))}function K(P,Q){let Z=c.get(Q);Z===void 0&&(Z=new WeakMap,c.set(Q,Z));let pe=Z.get(P);pe===void 0&&(pe=i.getUniformBlockIndex(Q,P.name),i.uniformBlockBinding(Q,pe,pe),Z.set(P,pe))}function ee(P,Q,Z){let ae=c.get(Q).get(P);l[ae]!==Z&&(i.bindBufferBase(i.UNIFORM_BUFFER,ae,Z),l[ae]=Z)}function fe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},h={},J=null,ne={},d={},l={},f=new WeakMap,p=[],_=null,m=!1,g=null,y=null,M=null,x=null,w=null,b=null,v=null,T=new ue(0,0,0),O=0,C=!1,I=null,U=null,Y=null,L=null,X=null,$.set(0,0,i.canvas.width,i.canvas.height),_e.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:Se,disable:qe,bindFramebuffer:yt,drawBuffers:Be,useProgram:Je,setBlending:ht,setMaterial:Lt,setFlipSided:zt,setCullFace:Mt,setLineWidth:sn,setPolygonOffset:Dt,setScissorTest:wt,activeTexture:fn,bindTexture:Et,unbindTexture:N,compressedTexImage2D:Rt,compressedTexImage3D:dt,texImage2D:E,texImage3D:B,pixelStorei:te,getParameter:ie,updateUBOMapping:K,uniformBlockBinding:ee,texStorage2D:ze,texStorage3D:R,texSubImage2D:gt,texSubImage3D:ve,compressedTexSubImage2D:Ct,compressedTexSubImage3D:De,scissor:de,viewport:ge,reset:fe}}function fE(i,e,t,n,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ve,u=new WeakMap,h=new Set,d,f=new WeakMap,p=new Set,_=new FinalizationRegistry(R=>p.delete(R)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,E){return m?new OffscreenCanvas(R,E):xs("canvas")}function y(R,E,B){let ie=1,te=ze(R);if((te.width>B||te.height>B)&&(ie=B/Math.max(te.width,te.height)),ie<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let de=Math.floor(ie*te.width),ge=Math.floor(ie*te.height);d===void 0&&(d=g(de,ge));let K=E?g(de,ge):d;return K.width=de,K.height=ge,K.getContext("2d").drawImage(R,0,0,de,ge),ke("WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+de+"x"+ge+")."),K}else return"data"in R&&ke("WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),R;return R}function M(R){return R.generateMipmaps}function x(R){i.generateMipmap(R)}function w(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(R,E,B,ie,te,de=!1){if(R!==null){if(i[R]!==void 0)return i[R];ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ge;ie&&(ge=e.get("EXT_texture_norm16"),ge||ke("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=E;if(E===i.RED&&(B===i.FLOAT&&(K=i.R32F),B===i.HALF_FLOAT&&(K=i.R16F),B===i.UNSIGNED_BYTE&&(K=i.R8),B===i.UNSIGNED_SHORT&&ge&&(K=ge.R16_EXT),B===i.SHORT&&ge&&(K=ge.R16_SNORM_EXT)),E===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.R8UI),B===i.UNSIGNED_SHORT&&(K=i.R16UI),B===i.UNSIGNED_INT&&(K=i.R32UI),B===i.BYTE&&(K=i.R8I),B===i.SHORT&&(K=i.R16I),B===i.INT&&(K=i.R32I)),E===i.RG&&(B===i.FLOAT&&(K=i.RG32F),B===i.HALF_FLOAT&&(K=i.RG16F),B===i.UNSIGNED_BYTE&&(K=i.RG8),B===i.UNSIGNED_SHORT&&ge&&(K=ge.RG16_EXT),B===i.SHORT&&ge&&(K=ge.RG16_SNORM_EXT)),E===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.RG8UI),B===i.UNSIGNED_SHORT&&(K=i.RG16UI),B===i.UNSIGNED_INT&&(K=i.RG32UI),B===i.BYTE&&(K=i.RG8I),B===i.SHORT&&(K=i.RG16I),B===i.INT&&(K=i.RG32I)),E===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.RGB8UI),B===i.UNSIGNED_SHORT&&(K=i.RGB16UI),B===i.UNSIGNED_INT&&(K=i.RGB32UI),B===i.BYTE&&(K=i.RGB8I),B===i.SHORT&&(K=i.RGB16I),B===i.INT&&(K=i.RGB32I)),E===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),B===i.UNSIGNED_INT&&(K=i.RGBA32UI),B===i.BYTE&&(K=i.RGBA8I),B===i.SHORT&&(K=i.RGBA16I),B===i.INT&&(K=i.RGBA32I)),E===i.RGB&&(B===i.UNSIGNED_SHORT&&ge&&(K=ge.RGB16_EXT),B===i.SHORT&&ge&&(K=ge.RGB16_SNORM_EXT),B===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(K=i.R11F_G11F_B10F)),E===i.RGBA){let ee=de?mo:je.getTransfer(te);B===i.FLOAT&&(K=i.RGBA32F),B===i.HALF_FLOAT&&(K=i.RGBA16F),B===i.UNSIGNED_BYTE&&(K=ee===xt?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT&&ge&&(K=ge.RGBA16_EXT),B===i.SHORT&&ge&&(K=ge.RGBA16_SNORM_EXT),B===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function v(R,E){let B;return R?E===null||E===ii||E===Gi?B=i.DEPTH24_STENCIL8:E===dn?B=i.DEPTH32F_STENCIL8:E===Ds&&(B=i.DEPTH24_STENCIL8,ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ii||E===Gi?B=i.DEPTH_COMPONENT24:E===dn?B=i.DEPTH_COMPONENT32F:E===Ds&&(B=i.DEPTH_COMPONENT16),B}function T(R,E){return M(R)===!0||R.isFramebufferTexture&&R.minFilter!==Ot&&R.minFilter!==Nt?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function O(R){let E=new WeakRef(R);n.get(R).__ref=E,p.add(E),_.register(R,E,E)}function C(R){let E=n.get(R).__ref;E!==void 0&&(p.delete(E),_.unregister(E))}function I(R){Y(R.target)}function U(R){L(R.target)}function Y(R){R.removeEventListener("dispose",I),C(R),j(R),R.isVideoTexture&&u.delete(R),R.isHTMLTexture&&h.delete(R)}function L(R){R.removeEventListener("dispose",U),C(R),re(R)}function X(){for(let R of p){let E=R.deref();E!==void 0&&(E.isRenderTarget===!0?L(E):Y(E))}p.clear(),h.clear()}function j(R){let E=n.get(R);if(E.__webglInit===void 0)return;let B=R.source,ie=f.get(B);if(ie){let te=ie[E.__cacheKey];te.usedTimes--,te.usedTimes===0&&z(R),Object.keys(ie).length===0&&f.delete(B)}n.remove(R)}function z(R){let E=n.get(R);i.deleteTexture(E.__webglTexture);let B=R.source,ie=f.get(B);delete ie[E.__cacheKey],o.memory.textures--}function re(R){let E=n.get(R);E.__depthDisposeCallback&&E.__depthDisposeCallback();let B=R.depthTexture;if(B&&B.renderTarget===R&&Y(B),R.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(E.__webglFramebuffer[te]))for(let de=0;de<E.__webglFramebuffer[te].length;de++)i.deleteFramebuffer(E.__webglFramebuffer[te][de]);else i.deleteFramebuffer(E.__webglFramebuffer[te]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[te])}else{if(Array.isArray(E.__webglFramebuffer))for(let te=0;te<E.__webglFramebuffer.length;te++)i.deleteFramebuffer(E.__webglFramebuffer[te]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let te=0;te<E.__webglColorRenderbuffer.length;te++)E.__webglColorRenderbuffer[te]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[te]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let ie=R.textures;for(let te=0,de=ie.length;te<de;te++){let ge=n.get(ie[te]);ge.__webglTexture&&(i.deleteTexture(ge.__webglTexture),o.memory.textures--),n.remove(ie[te])}n.remove(R)}let W=0;function J(){W=0}function ne(){return W}function Ae(R){W=R}function Ue(){let R=W;return R>=r.maxTextures&&ke("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+r.maxTextures),W+=1,R}function $(R){let E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.mipmapsAutoUpdate),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function _e(R,E){let B=n.get(R);if(R.isVideoTexture&&Ct(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&B.__version!==R.version){let ie=R.image;if(ie===null)ke("WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)ke("WebGLRenderer: Texture marked for update but image is incomplete");else{Lt(B,R,E);return}}else R.isExternalTexture&&(B.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+E)}function we(R,E){let B=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){Lt(B,R,E);return}else R.isExternalTexture&&(B.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+E)}function Fe(R,E){let B=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){Lt(B,R,E);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+E)}function Se(R,E){let B=n.get(R);if(R.version>0&&B.__version!==R.version){zt(B,R,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+E)}let qe={[In]:i.REPEAT,[ln]:i.CLAMP_TO_EDGE,[_s]:i.MIRRORED_REPEAT},yt={[Ot]:i.NEAREST,[ol]:i.NEAREST_MIPMAP_NEAREST,[Gr]:i.NEAREST_MIPMAP_LINEAR,[Nt]:i.LINEAR,[Ls]:i.LINEAR_MIPMAP_NEAREST,[Vn]:i.LINEAR_MIPMAP_LINEAR},Be={[kf]:i.NEVER,[Ou]:i.ALWAYS,[Vf]:i.LESS,[Lu]:i.LEQUAL,[zf]:i.EQUAL,[Du]:i.GEQUAL,[Gf]:i.GREATER,[Wf]:i.NOTEQUAL};function Je(R,E){if(E.type===dn&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Nt||E.magFilter===Ls||E.magFilter===Gr||E.magFilter===Vn||E.minFilter===Nt||E.minFilter===Ls||E.minFilter===Gr||E.minFilter===Vn)&&ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,qe[E.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,qe[E.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,qe[E.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,yt[E.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,yt[E.minFilter]),E.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,Be[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Ot||E.minFilter!==Gr&&E.minFilter!==Vn||E.type===dn&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function ot(R,E){let B=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",I),O(E));let ie=E.source,te=f.get(ie);te===void 0&&(te={},f.set(ie,te));let de=$(E);if(de!==R.__cacheKey){te[de]===void 0&&(te[de]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,B=!0),te[de].usedTimes++;let ge=te[R.__cacheKey];ge!==void 0&&(te[R.__cacheKey].usedTimes--,ge.usedTimes===0&&z(E)),R.__cacheKey=de,R.__webglTexture=te[de].texture}return B}function He(R,E,B){return Math.floor(Math.floor(R/B)/E)}function ht(R,E,B,ie){let de=R.updateRanges;if(de.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,E.width,E.height,B,ie,E.data);else{de.sort((P,Q)=>P.start-Q.start);let ge=0;for(let P=1;P<de.length;P++){let Q=de[ge],Z=de[P],pe=Q.start+Q.count,ae=He(Z.start,E.width,4),he=He(Q.start,E.width,4);Z.start<=pe+1&&ae===he&&He(Z.start+Z.count-1,E.width,4)===ae?Q.count=Math.max(Q.count,Z.start+Z.count-Q.start):(++ge,de[ge]=Z)}de.length=ge+1;let K=t.getParameter(i.UNPACK_ROW_LENGTH),ee=t.getParameter(i.UNPACK_SKIP_PIXELS),fe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,E.width);for(let P=0,Q=de.length;P<Q;P++){let Z=de[P],pe=Math.floor(Z.start/4),ae=Math.ceil(Z.count/4),he=pe%E.width,Re=Math.floor(pe/E.width),Qe=ae,le=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,he),t.pixelStorei(i.UNPACK_SKIP_ROWS,Re),t.texSubImage2D(i.TEXTURE_2D,0,he,Re,Qe,le,B,ie,E.data)}R.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,K),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ee),t.pixelStorei(i.UNPACK_SKIP_ROWS,fe)}}function Lt(R,E,B){let ie=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ie=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ie=i.TEXTURE_3D);let te=ot(R,E),de=E.source;t.bindTexture(ie,R.__webglTexture,i.TEXTURE0+B);let ge=n.get(de);if(de.version!==ge.__version||te===!0){if(t.activeTexture(i.TEXTURE0+B),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){let le=je.getPrimaries(je.workingColorSpace),Ge=E.colorSpace===si?null:je.getPrimaries(E.colorSpace),$e=E.colorSpace===si||le===Ge?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e)}t.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment);let ee=y(E.image,!1,r.maxTextureSize);ee=De(E,ee);let fe=s.convert(E.format,E.colorSpace),P=s.convert(E.type),Q=b(E.internalFormat,fe,P,E.normalized,E.colorSpace,E.isVideoTexture);Je(ie,E);let Z,pe=E.mipmaps,ae=E.isVideoTexture!==!0,he=ge.__version===void 0||te===!0,Re=de.dataReady,Qe=T(E,ee);if(E.isDepthTexture)Q=v(E.format===ri,E.type),he&&(ae?t.texStorage2D(i.TEXTURE_2D,1,Q,ee.width,ee.height):t.texImage2D(i.TEXTURE_2D,0,Q,ee.width,ee.height,0,fe,P,null));else if(E.isDataTexture)if(pe.length>0){ae&&he&&t.texStorage2D(i.TEXTURE_2D,Qe,Q,pe[0].width,pe[0].height);for(let le=0,Ge=pe.length;le<Ge;le++)Z=pe[le],ae?Re&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,Z.width,Z.height,fe,P,Z.data):t.texImage2D(i.TEXTURE_2D,le,Q,Z.width,Z.height,0,fe,P,Z.data);E.generateMipmaps=!1}else ae?(he&&t.texStorage2D(i.TEXTURE_2D,Qe,Q,ee.width,ee.height),Re&&ht(E,ee,fe,P)):t.texImage2D(i.TEXTURE_2D,0,Q,ee.width,ee.height,0,fe,P,ee.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ae&&he&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Qe,Q,pe[0].width,pe[0].height,ee.depth);for(let le=0,Ge=pe.length;le<Ge;le++)if(Z=pe[le],E.format!==rn)if(fe!==null)if(ae){if(Re)if(E.layerUpdates.size>0){let $e=Xu(Z.width,Z.height,E.format,E.type);for(let Te of E.layerUpdates){let ft=Z.data.subarray(Te*$e/Z.data.BYTES_PER_ELEMENT,(Te+1)*$e/Z.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,Te,Z.width,Z.height,1,fe,ft)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,0,Z.width,Z.height,ee.depth,fe,Z.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,le,Q,Z.width,Z.height,ee.depth,0,Z.data,0,0);else ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ae?Re&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,0,Z.width,Z.height,ee.depth,fe,P,Z.data):t.texImage3D(i.TEXTURE_2D_ARRAY,le,Q,Z.width,Z.height,ee.depth,0,fe,P,Z.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{ae&&he&&t.texStorage2D(i.TEXTURE_2D,Qe,Q,pe[0].width,pe[0].height);for(let le=0,Ge=pe.length;le<Ge;le++)Z=pe[le],E.format!==rn?fe!==null?ae?Re&&t.compressedTexSubImage2D(i.TEXTURE_2D,le,0,0,Z.width,Z.height,fe,Z.data):t.compressedTexImage2D(i.TEXTURE_2D,le,Q,Z.width,Z.height,0,Z.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ae?Re&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,Z.width,Z.height,fe,P,Z.data):t.texImage2D(i.TEXTURE_2D,le,Q,Z.width,Z.height,0,fe,P,Z.data)}else if(E.isDataArrayTexture)if(ae){if(he&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Qe,Q,ee.width,ee.height,ee.depth),Re)if(E.layerUpdates.size>0){let le=Xu(ee.width,ee.height,E.format,E.type);for(let Ge of E.layerUpdates){let $e=ee.data.subarray(Ge*le/ee.data.BYTES_PER_ELEMENT,(Ge+1)*le/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ge,ee.width,ee.height,1,fe,P,$e)}E.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,fe,P,ee.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Q,ee.width,ee.height,ee.depth,0,fe,P,ee.data);else if(E.isData3DTexture)ae?(he&&t.texStorage3D(i.TEXTURE_3D,Qe,Q,ee.width,ee.height,ee.depth),Re&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,fe,P,ee.data)):t.texImage3D(i.TEXTURE_3D,0,Q,ee.width,ee.height,ee.depth,0,fe,P,ee.data);else if(E.isFramebufferTexture){if(he)if(ae)t.texStorage2D(i.TEXTURE_2D,Qe,Q,ee.width,ee.height);else{let le=ee.width,Ge=ee.height;for(let $e=0;$e<Qe;$e++)t.texImage2D(i.TEXTURE_2D,$e,Q,le,Ge,0,fe,P,null),le>>=1,Ge>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in i){let le=i.canvas;if(le.hasAttribute("layoutsubtree")||le.setAttribute("layoutsubtree","true"),ee.parentNode!==le){le.appendChild(ee),h.add(E),le.onpaint=Ge=>{let $e=Ge.changedElements;for(let Te of h)$e.includes(Te.image)&&(Te.needsUpdate=!0)},le.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ee);else{let $e=i.RGBA,Te=i.RGBA,ft=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,$e,Te,ft,ee)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(pe.length>0){if(ae&&he){let le=ze(pe[0]);t.texStorage2D(i.TEXTURE_2D,Qe,Q,le.width,le.height)}for(let le=0,Ge=pe.length;le<Ge;le++)Z=pe[le],ae?Re&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,fe,P,Z):t.texImage2D(i.TEXTURE_2D,le,Q,fe,P,Z);E.generateMipmaps=!1}else if(ae){if(he){let le=ze(ee);t.texStorage2D(i.TEXTURE_2D,Qe,Q,le.width,le.height)}Re&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,fe,P,ee)}else t.texImage2D(i.TEXTURE_2D,0,Q,fe,P,ee);M(E)&&E.mipmapsAutoUpdate===!0&&x(ie),ge.__version=de.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function zt(R,E,B){if(E.image.length!==6)return;let ie=ot(R,E),te=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+B);let de=n.get(te);if(te.version!==de.__version||ie===!0){t.activeTexture(i.TEXTURE0+B);let ge=je.getPrimaries(je.workingColorSpace),K=E.colorSpace===si?null:je.getPrimaries(E.colorSpace),ee=E.colorSpace===si||ge===K?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let fe=E.isCompressedTexture||E.image[0].isCompressedTexture,P=E.image[0]&&E.image[0].isDataTexture,Q=[];for(let Te=0;Te<6;Te++)!fe&&!P?Q[Te]=y(E.image[Te],!0,r.maxCubemapSize):Q[Te]=P?E.image[Te].image:E.image[Te],Q[Te]=De(E,Q[Te]);let Z=Q[0],pe=s.convert(E.format,E.colorSpace),ae=s.convert(E.type),he=b(E.internalFormat,pe,ae,E.normalized,E.colorSpace),Re=E.isVideoTexture!==!0,Qe=de.__version===void 0||ie===!0,le=te.dataReady,Ge=T(E,Z);Je(i.TEXTURE_CUBE_MAP,E);let $e;if(E.isDepthTexture){if(he=v(E.format===ri,E.type),Qe)if(Re)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,he,Z.width,Z.height);else for(let Te=0;Te<6;Te++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,he,Z.width,Z.height,0,pe,ae,null)}else if(fe){Re&&Qe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ge,he,Z.width,Z.height);for(let Te=0;Te<6;Te++){$e=Q[Te].mipmaps;for(let ft=0;ft<$e.length;ft++){let It=$e[ft];E.format!==rn?pe!==null?Re?le&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,ft,0,0,It.width,It.height,pe,It.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,ft,he,It.width,It.height,0,It.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Re?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,ft,0,0,It.width,It.height,pe,ae,It.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,ft,he,It.width,It.height,0,pe,ae,It.data)}}}else{if($e=E.mipmaps,Re&&Qe){$e.length>0&&Ge++;let Te=ze(Q[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ge,he,Te.width,Te.height)}for(let Te=0;Te<6;Te++)if(P){Re?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,Q[Te].width,Q[Te].height,pe,ae,Q[Te].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,he,Q[Te].width,Q[Te].height,0,pe,ae,Q[Te].data);for(let ft=0;ft<$e.length;ft++){let bn=$e[ft].image[Te].image;Re?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,ft+1,0,0,bn.width,bn.height,pe,ae,bn.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,ft+1,he,bn.width,bn.height,0,pe,ae,bn.data)}}else{Re?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,pe,ae,Q[Te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,he,pe,ae,Q[Te]);for(let ft=0;ft<$e.length;ft++){let It=$e[ft];Re?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,ft+1,0,0,pe,ae,It.image[Te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,ft+1,he,pe,ae,It.image[Te])}}}M(E)&&E.mipmapsAutoUpdate===!0&&x(i.TEXTURE_CUBE_MAP),de.__version=te.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function Mt(R,E,B,ie,te,de){let ge=s.convert(B.format,B.colorSpace),K=s.convert(B.type),ee=b(B.internalFormat,ge,K,B.normalized,B.colorSpace),fe=n.get(E),P=n.get(B);if(P.__renderTarget=E,!fe.__hasExternalTextures){let Q=Math.max(1,E.width>>de),Z=Math.max(1,E.height>>de);te===i.TEXTURE_3D||te===i.TEXTURE_2D_ARRAY?t.texImage3D(te,de,ee,Q,Z,E.depth,0,ge,K,null):t.texImage2D(te,de,ee,Q,Z,0,ge,K,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),ve(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,te,P.__webglTexture,0,gt(E)):(te===i.TEXTURE_2D||te>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ie,te,P.__webglTexture,de),t.bindFramebuffer(i.FRAMEBUFFER,null)}function sn(R,E,B){if(i.bindRenderbuffer(i.RENDERBUFFER,R),E.depthBuffer){let ie=E.depthTexture,te=ie&&ie.isDepthTexture?ie.type:null,de=v(E.stencilBuffer,te),ge=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ve(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,gt(E),de,E.width,E.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,gt(E),de,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,de,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ge,i.RENDERBUFFER,R)}else{let ie=E.textures;for(let te=0;te<ie.length;te++){let de=ie[te],ge=s.convert(de.format,de.colorSpace),K=s.convert(de.type),ee=b(de.internalFormat,ge,K,de.normalized,de.colorSpace);ve(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,gt(E),ee,E.width,E.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,gt(E),ee,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,ee,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Dt(R,E,B){let ie=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let te=n.get(E.depthTexture);te.__renderTarget=E;let de=ie?E.depthTexture.image[0]:E.depthTexture.image;(!te.__webglTexture||de.width!==E.width||de.height!==E.height)&&(de.width=E.width,de.height=E.height,E.depthTexture.needsUpdate=!0),ie?Se(E.depthTexture,0):_e(E.depthTexture,0);let ge=te.__webglTexture,K=gt(E),ee=ie?i.TEXTURE_CUBE_MAP_POSITIVE_X+B:i.TEXTURE_2D,fe=E.depthTexture.format===ri?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(E.depthTexture.format===Pi)ve(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,fe,ee,ge,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,fe,ee,ge,0);else if(E.depthTexture.format===ri)ve(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,fe,ee,ge,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,fe,ee,ge,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function wt(R){let E=n.get(R),B=R.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==R.depthTexture){let ie=R.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ie){let te=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ie.removeEventListener("dispose",te)};ie.addEventListener("dispose",te),E.__depthDisposeCallback=te}E.__boundDepthTexture=ie}if(R.depthTexture&&!E.__autoAllocateDepthBuffer)if(B)for(let ie=0;ie<6;ie++)Dt(E.__webglFramebuffer[ie],R,ie);else R.texture.mipmaps.length>0?Dt(E.__webglFramebuffer[0],R,0):Dt(E.__webglFramebuffer,R,0);else if(B){E.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[ie]),E.__webglDepthbuffer[ie]===void 0)E.__webglDepthbuffer[ie]=i.createRenderbuffer(),sn(E.__webglDepthbuffer[ie],R,!1);else{let te=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=E.__webglDepthbuffer[ie];i.bindRenderbuffer(i.RENDERBUFFER,de),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,de)}}else if(R.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),sn(E.__webglDepthbuffer,R,!1);else{let te=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,de),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,de)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function fn(R,E,B){let ie=n.get(R);E!==void 0&&Mt(ie.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&wt(R)}function Et(R){let E=R.texture,B=n.get(R),ie=n.get(E);R.addEventListener("dispose",U),O(R);let te=R.textures,de=R.isWebGLCubeRenderTarget===!0,ge=te.length>1;if(ge||(ie.__webglTexture===void 0&&(ie.__webglTexture=i.createTexture()),ie.__version=E.version,o.memory.textures++),de){B.__webglFramebuffer=[];for(let K=0;K<6;K++)if(E.mipmaps.length>0){B.__webglFramebuffer[K]=[];for(let ee=0;ee<E.mipmaps.length;ee++)B.__webglFramebuffer[K][ee]=i.createFramebuffer()}else B.__webglFramebuffer[K]=i.createFramebuffer()}else{if(E.mipmaps.length>0){B.__webglFramebuffer=[];for(let K=0;K<E.mipmaps.length;K++)B.__webglFramebuffer[K]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(ge)for(let K=0,ee=te.length;K<ee;K++){let fe=n.get(te[K]);fe.__webglTexture===void 0&&(fe.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&ve(R)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let K=0;K<te.length;K++){let ee=te[K];B.__webglColorRenderbuffer[K]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[K]);let fe=s.convert(ee.format,ee.colorSpace),P=s.convert(ee.type),Q=b(ee.internalFormat,fe,P,ee.normalized,ee.colorSpace,R.isXRRenderTarget===!0),Z=gt(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Z,Q,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.RENDERBUFFER,B.__webglColorRenderbuffer[K])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),sn(B.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(de){t.bindTexture(i.TEXTURE_CUBE_MAP,ie.__webglTexture),Je(i.TEXTURE_CUBE_MAP,E);for(let K=0;K<6;K++)if(E.mipmaps.length>0)for(let ee=0;ee<E.mipmaps.length;ee++)Mt(B.__webglFramebuffer[K][ee],R,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ee);else Mt(B.__webglFramebuffer[K],R,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);M(E)?x(i.TEXTURE_CUBE_MAP):E.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),t.unbindTexture()}else if(ge){for(let K=0,ee=te.length;K<ee;K++){let fe=te[K],P=n.get(fe),Q=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Q=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Q,P.__webglTexture),Je(Q,fe),Mt(B.__webglFramebuffer,R,fe,i.COLOR_ATTACHMENT0+K,Q,0),M(fe)&&x(Q)}t.unbindTexture()}else{let K=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(K=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(K,ie.__webglTexture),Je(K,E),E.mipmaps.length>0)for(let ee=0;ee<E.mipmaps.length;ee++)Mt(B.__webglFramebuffer[ee],R,E,i.COLOR_ATTACHMENT0,K,ee);else Mt(B.__webglFramebuffer,R,E,i.COLOR_ATTACHMENT0,K,0);M(E)?x(K):E.mipmaps.length>0&&i.texParameteri(K,i.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),t.unbindTexture()}R.depthBuffer&&wt(R)}function N(R){let E=R.textures;for(let B=0,ie=E.length;B<ie;B++){let te=E[B];if(M(te)&&te.mipmapsAutoUpdate===!0){let de=w(R),ge=n.get(te).__webglTexture;t.bindTexture(de,ge),x(de),t.unbindTexture()}}}let Rt=[];function dt(R){if(R.samples>0){if(ve(R)===!1){let E=R.textures,B=R.width,ie=R.height,te=i.COLOR_BUFFER_BIT,de=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=n.get(R),K=E.length>1;if(K)for(let fe=0;fe<E.length;fe++)t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer),R.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let fe=0;fe<E.length;fe++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(te|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(te|=i.STENCIL_BUFFER_BIT)),K){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ge.__webglColorRenderbuffer[fe]);let P=n.get(E[fe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,P,0)}i.blitFramebuffer(0,0,B,ie,0,0,B,ie,te,i.NEAREST),l===!0&&(Rt.length=0,Rt.push(i.COLOR_ATTACHMENT0+fe),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&Rt.push(de),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Rt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),K)for(let fe=0;fe<E.length;fe++){t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,ge.__webglColorRenderbuffer[fe]);let P=n.get(E[fe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,P,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let E=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function gt(R){return Math.min(r.maxSamples,R.samples)}function ve(R){let E=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ct(R){let E=o.render.frame;u.get(R)!==E&&(u.set(R,E),R.update())}function De(R,E){let B=R.colorSpace,ie=R.format,te=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||B!==En&&B!==si&&(je.getTransfer(B)===xt?(ie!==rn||te!==_n)&&ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ke("WebGLTextures: Unsupported texture color space:",B)),E}function ze(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=Ue,this.resetTextureUnits=J,this.getTextureUnits=ne,this.setTextureUnits=Ae,this.setTexture2D=_e,this.setTexture2DArray=we,this.setTexture3D=Fe,this.setTextureCube=Se,this.rebindTextures=fn,this.setupRenderTarget=Et,this.updateRenderTargetMipmap=N,this.updateMultisampleRenderTarget=dt,this.setupDepthRenderbuffer=wt,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=ve,this.dispose=X}function pE(i,e){function t(n,r=si){let s,o=je.getTransfer(r);if(n===_n)return i.UNSIGNED_BYTE;if(n===ll)return i.UNSIGNED_SHORT_4_4_4_4;if(n===cl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Tu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===bu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Eu)return i.BYTE;if(n===Su)return i.SHORT;if(n===Ds)return i.UNSIGNED_SHORT;if(n===al)return i.INT;if(n===ii)return i.UNSIGNED_INT;if(n===dn)return i.FLOAT;if(n===vn)return i.HALF_FLOAT;if(n===wu)return i.ALPHA;if(n===Au)return i.RGB;if(n===rn)return i.RGBA;if(n===Pi)return i.DEPTH_COMPONENT;if(n===ri)return i.DEPTH_STENCIL;if(n===ul)return i.RED;if(n===hl)return i.RED_INTEGER;if(n===ur)return i.RG;if(n===dl)return i.RG_INTEGER;if(n===fl)return i.RGBA_INTEGER;if(n===Fo||n===Bo||n===Ho||n===ko)if(o===xt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Fo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Bo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ho)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ko)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Fo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Bo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ho)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ko)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===pl||n===ml||n===gl||n===_l)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===pl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ml)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===gl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===_l)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===vl||n===xl||n===yl||n===Ml||n===El||n===Vo||n===Sl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===vl||n===xl)return o===xt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===yl)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ml)return s.COMPRESSED_R11_EAC;if(n===El)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Vo)return s.COMPRESSED_RG11_EAC;if(n===Sl)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Tl||n===bl||n===wl||n===Al||n===Rl||n===Cl||n===Pl||n===Il||n===Ll||n===Dl||n===Ol||n===Nl||n===Ul||n===Fl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Tl)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===bl)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===wl)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Al)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Rl)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Cl)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Pl)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Il)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ll)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Dl)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ol)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Nl)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ul)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Fl)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Bl||n===Hl||n===kl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Bl)return o===xt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Hl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===kl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Vl||n===zl||n===zo||n===Gl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Vl)return s.COMPRESSED_RED_RGTC1_EXT;if(n===zl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===zo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Gl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Gi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var mE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,eh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new So(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new qt({vertexShader:mE,fragmentShader:gE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new mt(new Or(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},th=class extends Jn{constructor(e,t){super();let n=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,p=null,_=typeof XRWebGLBinding<"u",m=new eh,g={},y=t.getContextAttributes(),M=null,x=null,w=[],b=[],v=new Ve,T=null,O=null,C=new jt;C.viewport=new lt;let I=new jt;I.viewport=new lt;let U=[C,I],Y=new tl,L=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let _e=w[$];return _e===void 0&&(_e=new Es,w[$]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function($){let _e=w[$];return _e===void 0&&(_e=new Es,w[$]=_e),_e.getGripSpace()},this.getHand=function($){let _e=w[$];return _e===void 0&&(_e=new Es,w[$]=_e),_e.getHandSpace()};function j($){let _e=b.indexOf($.inputSource);if(_e===-1)return;let we=w[_e];we!==void 0&&(we.update($.inputSource,$.frame,c||o),we.dispatchEvent({type:$.type,data:$.inputSource}))}function z(){r.removeEventListener("select",j),r.removeEventListener("selectstart",j),r.removeEventListener("selectend",j),r.removeEventListener("squeeze",j),r.removeEventListener("squeezestart",j),r.removeEventListener("squeezeend",j),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",re);for(let $=0;$<w.length;$++){let _e=b[$];_e!==null&&(b[$]=null,w[$].disconnect(_e))}L=null,X=null,m.reset();for(let $ in g)delete g[$];if(e.setRenderTarget(M),f=null,d=null,h=null,r=null,x=null,Ue.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(v.width,v.height,!1),O!==null){let $=O.camera;$.fov=O.fov,$.zoom=O.zoom,$.updateProjectionMatrix(),O=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(M=e.getRenderTarget(),r.addEventListener("select",j),r.addEventListener("selectstart",j),r.addEventListener("selectend",j),r.addEventListener("squeeze",j),r.addEventListener("squeezestart",j),r.addEventListener("squeezeend",j),r.addEventListener("end",z),r.addEventListener("inputsourceschange",re),y.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(v),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let we=null,Fe=null,Se=null;y.depth&&(Se=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,we=y.stencil?ri:Pi,Fe=y.stencil?Gi:ii);let qe={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:s};h=this.getBinding(),d=h.createProjectionLayer(qe),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new tn(d.textureWidth,d.textureHeight,{format:rn,type:_n,depthTexture:new ei(d.textureWidth,d.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,we),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let we={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,we),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new tn(f.framebufferWidth,f.framebufferHeight,{format:rn,type:_n,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ue.setContext(r),Ue.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function re($){for(let _e=0;_e<$.removed.length;_e++){let we=$.removed[_e],Fe=b.indexOf(we);Fe>=0&&(b[Fe]=null,w[Fe].disconnect(we))}for(let _e=0;_e<$.added.length;_e++){let we=$.added[_e],Fe=b.indexOf(we);if(Fe===-1){for(let qe=0;qe<w.length;qe++)if(qe>=b.length){b.push(we),Fe=qe;break}else if(b[qe]===null){b[qe]=we,Fe=qe;break}if(Fe===-1)break}let Se=w[Fe];Se&&Se.connect(we)}}function W($,_e){_e===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(_e.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let _e=$.near,we=$.far;m.texture!==null&&(m.depthNear>0&&(_e=m.depthNear),m.depthFar>0&&(we=m.depthFar)),Y.near=I.near=C.near=_e,Y.far=I.far=C.far=we,(L!==Y.near||X!==Y.far)&&(r.updateRenderState({depthNear:Y.near,depthFar:Y.far}),L=Y.near,X=Y.far),Y.layers.mask=$.layers.mask|6,C.layers.mask=Y.layers.mask&-5,I.layers.mask=Y.layers.mask&-3;let Fe=$.parent,Se=Y.cameras;W(Y,Fe);for(let qe=0;qe<Se.length;qe++)W(Se[qe],Fe);Y.projectionMatrix.copy(C.projectionMatrix),Y.projectionMatrixInverse.copy(C.projectionMatrixInverse),O===null&&$.isPerspectiveCamera&&(O={camera:$,fov:$.fov,zoom:$.zoom}),J($,Y,Fe)};function J($,_e,we){we===null?$.matrix.copy(_e.matrixWorld):($.matrix.copy(we.matrixWorld),$.matrix.invert(),$.matrix.multiply(_e.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(_e.projectionMatrix),$.projectionMatrixInverse.copy(_e.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Rr*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(Y)},this.getCameraTexture=function($){return g[$]};let ne=null;function Ae($,_e){if(u=_e.getViewerPose(c||o),p=_e,u!==null){let we=u.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let Fe=!1;we.length!==Y.cameras.length&&(Y.cameras.length=0,Fe=!0);for(let Be=0;Be<we.length;Be++){let Je=we[Be],ot=null;if(f!==null)ot=f.getViewport(Je);else{let ht=h.getViewSubImage(d,Je);ot=ht.viewport,Be===0&&(e.setRenderTargetTextures(x,ht.colorTexture,ht.depthStencilTexture),e.setRenderTarget(x))}let He=U[Be];He===void 0&&(He=new jt,He.layers.enable(Be),He.viewport=new lt,U[Be]=He),He.matrix.fromArray(Je.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(Je.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(ot.x,ot.y,ot.width,ot.height),Be===0&&(Y.matrix.copy(He.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),Fe===!0&&Y.cameras.push(He)}let Se=r.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){h=n.getBinding();let Be=h.getDepthInformation(we[0]);Be&&Be.isValid&&Be.texture&&m.init(Be,r.renderState)}if(Se&&Se.includes("camera-access")&&_){e.state.unbindTexture(),h=n.getBinding();for(let Be=0;Be<we.length;Be++){let Je=we[Be].camera;if(Je){let ot=g[Je];ot||(ot=new So,g[Je]=ot);let He=h.getCameraImage(Je);ot.sourceTexture=He}}}}for(let we=0;we<w.length;we++){let Fe=b[we],Se=w[we];Fe!==null&&Se!==void 0&&Se.update(Fe,_e,c||o)}ne&&ne($,_e),_e.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:_e}),p=null}let Ue=new Sp;Ue.setAnimationLoop(Ae),this.setAnimationLoop=function($){ne=$},this.dispose=function(){}}},_E=new oe,Dp=new Le;Dp.set(-1,0,0,0,1,0,0,0,1);function vE(i,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,zu(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function r(m,g,y,M,x){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?s(m,g):g.isMeshLambertMaterial?(s(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(s(m,g),h(m,g)):g.isMeshPhongMaterial?(s(m,g),u(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(s(m,g),d(m,g),g.isMeshPhysicalMaterial&&f(m,g,x)):g.isMeshMatcapMaterial?(s(m,g),p(m,g)):g.isMeshDepthMaterial?s(m,g):g.isMeshDistanceMaterial?(s(m,g),_(m,g)):g.isMeshNormalMaterial?s(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,y,M):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===kt&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===kt&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let y=e.get(g),M=y.envMap,x=y.envMapRotation;M&&(m.envMap.value=M,m.envMapRotation.value.setFromMatrix4(_E.makeRotationFromEuler(x)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Dp),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,y,M){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*y,m.scale.value=M*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function u(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function h(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function d(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,y){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===kt&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function _(m,g){let y=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function xE(i,e,t,n){let r={},s={};function o(y,M){let x=M.program;n.uniformBlockBinding(y,x,r[y.id])}function a(y,M){let x=r[y.id];x===void 0&&(p(y),x=l(y),r[y.id]=x,y.addEventListener("dispose",m));let w=M.program;n.updateUBOMapping(y,w);let b=e.render.frame;s[y.id]!==b&&(c(y),s[y.id]=b)}function l(y){let M=i.createBuffer(),x=y.__size,w=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,x,w),i.bindBuffer(i.UNIFORM_BUFFER,null),M}function c(y){let M=r[y.id],x=y.uniforms,w=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let b=0,v=x.length;b<v;b++){let T=x[b];if(Array.isArray(T))for(let O=0,C=T.length;O<C;O++)u(T[O],b,O,w);else u(T,b,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(y,M,x,w){if(d(y,M,x,w)===!0){let b=y.__offset,v=y.value;if(Array.isArray(v)){let T=0;for(let O=0;O<v.length;O++){let C=v[O],I=_(C,!0);h(C,y.__data,T),T+=I.storage/Float32Array.BYTES_PER_ELEMENT}}else h(v,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,b,y.__data)}}function h(y,M,x){typeof y=="number"||typeof y=="boolean"?M[x]=y:y.isMatrix3?(M[x]=y.elements[0],M[x+1]=y.elements[1],M[x+2]=y.elements[2],M[x+3]=0,M[x+4]=y.elements[3],M[x+5]=y.elements[4],M[x+6]=y.elements[5],M[x+7]=0,M[x+8]=y.elements[6],M[x+9]=y.elements[7],M[x+10]=y.elements[8],M[x+11]=0):ArrayBuffer.isView(y)?M.set(y.subarray(0,M.length-x),x):y.toArray(M,x)}function d(y,M,x,w){let b=y.value,v=M+"_"+x;if(Array.isArray(b)){w[v]===void 0&&(w[v]=[]);let T=w[v],O=!1;for(let C=0;C<b.length;C++)f(b[C],T,C)===!0&&(O=!0);return O}return f(b,w,v)}function f(y,M,x){if(M[x]===void 0)return typeof y=="number"||typeof y=="boolean"?M[x]=y:ArrayBuffer.isView(y)?M[x]=y.slice():M[x]=y.clone(),!0;{let w=M[x];if(typeof y=="number"||typeof y=="boolean"){if(w!==y)return M[x]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(w.equals(y)===!1)return w.copy(y),!0}}return!1}function p(y){let M=y.uniforms,x=0,w=16;for(let v=0,T=M.length;v<T;v++){let O=Array.isArray(M[v])?M[v]:[M[v]];for(let C=0,I=O.length;C<I;C++){let U=O[C],Y=Array.isArray(U.value)?U.value:[U.value],L=Array.isArray(M[v])||Array.isArray(U.value),X=x;for(let z=0,re=Y.length;z<re;z++){let W=Y[z],J=_(W,L),ne=x%w,Ae=ne%J.boundary,Ue=ne+Ae;x+=Ae,Ue!==0&&w-Ue<J.storage&&(x+=w-Ue),z===0&&(X=x),x+=J.storage}let j=U.type==="int"?Int32Array:U.type==="uint"?Uint32Array:Float32Array;U.__data=new j((x-X)/Float32Array.BYTES_PER_ELEMENT),U.__offset=X}}let b=x%w;return b>0&&(x+=w-b),y.__size=x,y.__cache={},this}function _(y,M){let x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=16,x.storage=48):y.isMatrix4?(x.boundary=16,x.storage=64):y.isTexture?ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(x.boundary=16,x.storage=y.byteLength):ke("WebGLRenderer: Unsupported uniform value type.",y),M===!0&&(x.boundary=16,x.storage=Math.ceil(x.storage/16)*16),x}function m(y){let M=y.target;M.removeEventListener("dispose",m),i.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function g(){for(let y in r)i.deleteBuffer(r[y]);r={},s={}}return{bind:o,update:a,dispose:g}}var yE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),gi=null;function ME(){return gi===null&&(gi=new rr(yE,16,16,ur,vn),gi.name="DFG_LUT",gi.minFilter=Nt,gi.magFilter=Nt,gi.wrapS=ln,gi.wrapT=ln,gi.generateMipmaps=!1,gi.needsUpdate=!0),gi}var Kl=class{constructor(e={}){let{canvas:t=Xf(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:f=_n}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let _=f,m=new Set([fl,dl,hl]),g=new Set([_n,ii,Ds,Gi,ll,cl]),y=new Uint32Array(4),M=new Int32Array(4),x={textures:[],min:[],max:[],resolution:[]},w=null,b=null,v=[],T=[],O=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=pi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,I=!1,U=null,Y=null,L=null,X=null;this._outputColorSpace=ut;let j=0,z=0,re=null,W=-1,J=null,ne=new lt,Ae=new lt,Ue=null,$=new ue(0),_e=0,we=t.width,Fe=t.height,Se=1,qe=null,yt=null,Be=new lt(0,0,we,Fe),Je=new lt(0,0,we,Fe),ot=!1,He=new sr,ht=new Wa,Lt=!1,zt=!1,Mt=new oe,sn=new A,Dt=new lt,wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},fn=!1;function Et(){return re===null?Se:1}let N=n;function Rt(S,D){return t.getContext(S,D)}let dt,gt,ve,Ct,De,ze,R,E,B,ie,te,de,ge,K,ee,fe,P,Q,Z,pe,ae,he,Re;try{let S={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Ge,!1),t.addEventListener("webglcontextrestored",$e,!1),t.addEventListener("webglcontextcreationerror",Te,!1),N===null){let D="webgl2";if(N=Rt(D,S),N===null)throw Rt(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Qe()}catch(S){throw t.removeEventListener("webglcontextlost",Ge,!1),t.removeEventListener("webglcontextrestored",$e,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),Ke("WebGLRenderer: "+S.message),S}function Qe(){dt=new Ly(N),dt.init(),ae=new pE(N,dt),gt=new My(N,dt,e,ae),ve=new dE(N,dt),gt.reversedDepthBuffer&&d&&ve.buffers.depth.setReversed(!0),Y=N.createFramebuffer(),L=N.createFramebuffer(),X=N.createFramebuffer(),Ct=new Ny(N),De=new JM,ze=new fE(N,dt,ve,De,gt,ae,Ct),R=new Iy(C),E=new F_(N),he=new xy(N,E),B=new Dy(N,E,Ct,he),ie=new Fy(N,B,E,he,Ct),Q=new Uy(N,gt,ze),ee=new Ey(De),te=new $M(C,R,dt,gt,he,ee),de=new vE(C,De),ge=new eE,K=new oE(dt),P=new vy(C,R,ve,ie,p,l),fe=new hE(C,ie,gt),Re=new xE(N,Ct,gt,ve),Z=new yy(N,dt,Ct),pe=new Oy(N,dt,Ct),Ct.programs=te.programs,C.capabilities=gt,C.extensions=dt,C.properties=De,C.renderLists=ge,C.shadowMap=fe,C.state=ve,C.info=Ct}_!==_n&&(O=new Hy(_,t.width,t.height,a,r,s));let le=new th(C,N);this.xr=le,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let S=dt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=dt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return Se},this.setPixelRatio=function(S){S!==void 0&&(Se=S,this.setSize(we,Fe,!1))},this.getSize=function(S){return S.set(we,Fe)},this.setSize=function(S,D,q=!0){if(le.isPresenting){ke("WebGLRenderer: Can't change size while VR device is presenting.");return}we=S,Fe=D,t.width=Math.floor(S*Se),t.height=Math.floor(D*Se),q===!0&&(t.style.width=S+"px",t.style.height=D+"px"),O!==null&&O.setSize(t.width,t.height),this.setViewport(0,0,S,D)},this.getDrawingBufferSize=function(S){return S.set(we*Se,Fe*Se).floor()},this.setDrawingBufferSize=function(S,D,q){we=S,Fe=D,Se=q,t.width=Math.floor(S*q),t.height=Math.floor(D*q),this.setViewport(0,0,S,D)},this.setEffects=function(S){if(_===_n){Ke("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let D=0;D<S.length;D++)if(S[D].isOutputPass===!0){ke("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(ne)},this.getViewport=function(S){return S.copy(Be)},this.setViewport=function(S,D,q,H){S.isVector4?Be.set(S.x,S.y,S.z,S.w):Be.set(S,D,q,H),ve.viewport(ne.copy(Be).multiplyScalar(Et()).round())},this.getScissor=function(S){return S.copy(Je)},this.setScissor=function(S,D,q,H){S.isVector4?Je.set(S.x,S.y,S.z,S.w):Je.set(S,D,q,H),ve.scissor(Ae.copy(Je).multiplyScalar(Et()).round())},this.getScissorTest=function(){return ot},this.setScissorTest=function(S){ve.setScissorTest(ot=S)},this.setOpaqueSort=function(S){qe=S},this.setTransparentSort=function(S){yt=S},this.getClearColor=function(S){return S.copy(P.getClearColor())},this.setClearColor=function(){P.setClearColor(...arguments)},this.getClearAlpha=function(){return P.getClearAlpha()},this.setClearAlpha=function(){P.setClearAlpha(...arguments)},this.clear=function(S=!0,D=!0,q=!0){let H=0;if(S){let k=!1;if(re!==null){let Ee=re.texture.format;k=m.has(Ee)}if(k){let Ee=re.texture.type,Ce=g.has(Ee),xe=P.getClearColor(),be=P.getClearAlpha(),Ne=xe.r,F=xe.g,V=xe.b;Ce?(y[0]=Ne,y[1]=F,y[2]=V,y[3]=be,N.clearBufferuiv(N.COLOR,0,y)):(M[0]=Ne,M[1]=F,M[2]=V,M[3]=be,N.clearBufferiv(N.COLOR,0,M))}else H|=N.COLOR_BUFFER_BIT}D&&(H|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(H|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&N.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),U=S},this.dispose=function(){t.removeEventListener("webglcontextlost",Ge,!1),t.removeEventListener("webglcontextrestored",$e,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),P.dispose(),ge.dispose(),K.dispose(),ze.dispose(),De.dispose(),R.dispose(),ie.dispose(),B.dispose(),he.dispose(),Re.dispose(),te.dispose(),le.dispose(),le.removeEventListener("sessionstart",_r),le.removeEventListener("sessionend",vr),on.stop()};function Ge(S){S.preventDefault(),go("WebGLRenderer: Context Lost."),I=!0}function $e(){go("WebGLRenderer: Context Restored."),I=!1;let S=Ct.autoReset,D=fe.enabled,q=fe.autoUpdate,H=fe.needsUpdate,k=fe.type;Qe(),Ct.autoReset=S,fe.enabled=D,fe.autoUpdate=q,fe.needsUpdate=H,fe.type=k}function Te(S){Ke("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function ft(S){let D=S.target;D.removeEventListener("dispose",ft),It(D)}function It(S){bn(S),De.remove(S)}function bn(S){let D=De.get(S).programs;D!==void 0&&(D.forEach(function(q){te.releaseProgram(q)}),S.isShaderMaterial&&te.releaseShaderCache(S))}this.renderBufferDirect=function(S,D,q,H,k,Ee){D===null&&(D=wt);let Ce=k.isMesh&&k.matrixWorld.determinantAffine()<0,xe=Qr(S,D,q,H,k);ve.setMaterial(H,Ce);let be=q.index,Ne=1;if(H.wireframe===!0){if(be=B.getWireframeAttribute(q),be===void 0)return;Ne=2}let F=q.drawRange,V=q.attributes.position,G=F.start*Ne,ce=(F.start+F.count)*Ne;Ee!==null&&(G=Math.max(G,Ee.start*Ne),ce=Math.min(ce,(Ee.start+Ee.count)*Ne)),be!==null?(G=Math.max(G,0),ce=Math.min(ce,be.count)):V!=null&&(G=Math.max(G,0),ce=Math.min(ce,V.count));let Ie=ce-G;if(Ie<0||Ie===1/0)return;he.setup(k,H,xe,q,be);let Oe,ye=Z;if(be!==null&&(Oe=E.get(be),ye=pe,ye.setIndex(Oe)),k.isMesh)H.wireframe===!0?(ve.setLineWidth(H.wireframeLinewidth*Et()),ye.setMode(N.LINES)):ye.setMode(N.TRIANGLES);else if(k.isLine){let Pe=H.linewidth;Pe===void 0&&(Pe=1),ve.setLineWidth(Pe*Et()),k.isLineSegments?ye.setMode(N.LINES):k.isLineLoop?ye.setMode(N.LINE_LOOP):ye.setMode(N.LINE_STRIP)}else k.isPoints?ye.setMode(N.POINTS):k.isSprite&&ye.setMode(N.TRIANGLES);if(k.isBatchedMesh)if(dt.get("WEBGL_multi_draw"))ye.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let Pe=k._multiDrawStarts,se=k._multiDrawCounts,nt=k._multiDrawCount,Ye=be?E.get(be).bytesPerElement:1,St=De.get(H).currentProgram.getUniforms();for(let Pt=0;Pt<nt;Pt++)St.setValue(N,"_gl_DrawID",Pt),ye.render(Pe[Pt]/Ye,se[Pt])}else if(k.isInstancedMesh)ye.renderInstances(G,Ie,k.count);else if(q.isInstancedBufferGeometry){let Pe=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,se=Math.min(q.instanceCount,Pe);ye.renderInstances(G,Ie,se)}else ye.render(G,Ie)};function li(S,D,q,H){U!==null&&S.isNodeMaterial&&U.setObject(H,S),Lt===!0&&ee.setState(S,q,!1),S.transparent===!0&&S.side===Ht&&S.forceSinglePass===!1?(S.side=kt,S.needsUpdate=!0,qn(S,D,H),S.side=hn,S.needsUpdate=!0,qn(S,D,H),S.side=Ht):qn(S,D,H)}this.compile=function(S,D,q=null){q===null&&(q=S),U!==null&&U.renderStart(S,D,q),b=K.get(q),b.init(D),T.push(b),q.traverseVisible(function(k){k.isLight&&k.layers.test(D.layers)&&(b.pushLight(k),k.castShadow&&b.pushShadow(k))}),S!==q&&S.traverseVisible(function(k){k.isLight&&k.layers.test(D.layers)&&(b.pushLight(k),k.castShadow&&b.pushShadow(k))}),b.setupLights(),U!==null&&U.updateLights(b.state.lightsArray),zt=this.localClippingEnabled,Lt=ee.init(this.clippingPlanes,zt),Lt===!0&&ee.setGlobalState(this.clippingPlanes,D),U!==null&&fe.render(b.state.shadowsArray,q,D);let H=new Set;return S.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let Ee=k.material;if(Ee)if(Array.isArray(Ee))for(let Ce=0;Ce<Ee.length;Ce++){let xe=Ee[Ce];li(xe,q,D,k),H.add(xe)}else li(Ee,q,D,k),H.add(Ee)}),b=T.pop(),U!==null&&U.renderEnd(),H},this.compileAsync=function(S,D,q=null){let H=this.compile(S,D,q);return new Promise(k=>{function Ee(){if(H.forEach(function(Ce){let be=De.get(Ce).currentProgram;(be===void 0||be.isReady())&&H.delete(Ce)}),H.size===0){k(S);return}setTimeout(Ee,10)}dt.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let Xn=null;function Kr(S){Xn&&Xn(S)}function _r(){on.stop()}function vr(){on.start()}let on=new Sp;on.setAnimationLoop(Kr),typeof self<"u"&&on.setContext(self),this.setAnimationLoop=function(S){Xn=S,le.setAnimationLoop(S),S===null?on.stop():on.start()},le.addEventListener("sessionstart",_r),le.addEventListener("sessionend",vr),this.render=function(S,D){if(D!==void 0&&D.isCamera!==!0){Ke("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;U!==null&&U.renderStart(S,D);let q=le.enabled===!0&&le.isPresenting===!0,H=O!==null&&(re===null||q)&&O.begin(C,re);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(le.cameraAutoUpdate===!0&&le.updateCamera(D),D=le.getCamera()),S.isScene===!0&&S.onBeforeRender(C,S,D,re),b=K.get(S,T.length),b.init(D),b.state.textureUnits=ze.getTextureUnits(),T.push(b),Mt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),D.isArrayCamera?ht.setFromArrayCamera(D):He.setFromProjectionMatrix(Mt,Fn,D.reversedDepth),zt=this.localClippingEnabled,Lt=ee.init(this.clippingPlanes,zt),w=ge.get(S,v.length),w.init(),v.push(w),this.info.render.frame++,le.enabled===!0&&le.isPresenting===!0){let Ce=C.xr.getDepthSensingMesh();Ce!==null&&qi(Ce,D,-1/0,C.sortObjects)}qi(S,D,0,C.sortObjects),w.finish(),U!==null&&U.updateLights(b.state.lightsArray),C.sortObjects===!0&&w.sort(qe,yt),fn=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,fn&&P.addToRenderList(w,S),this.info.autoReset===!0&&this.info.reset(),Lt===!0&&ee.beginShadows();let k=b.state.shadowsArray;if(fe.render(k,S,D),Lt===!0&&ee.endShadows(),(H&&O.hasRenderPass())===!1){let Ce=w.opaque,xe=w.transmissive;if(b.setupLights(),D.isArrayCamera){let be=D.cameras;if(xe.length>0)for(let Ne=0,F=be.length;Ne<F;Ne++){let V=be[Ne];Yi(Ce,xe,S,V)}fn&&P.render(S);for(let Ne=0,F=be.length;Ne<F;Ne++){let V=be[Ne];yn(w,S,V,V.viewport)}}else xe.length>0&&Yi(Ce,xe,S,D),fn&&P.render(S),yn(w,S,D)}re!==null&&z===0&&(ze.updateMultisampleRenderTarget(re),ze.updateRenderTargetMipmap(re)),H&&O.end(C),S.isScene===!0&&S.onAfterRender(C,S,D),he.resetDefaultState(),W=-1,J=null,T.pop(),T.length>0?(b=T[T.length-1],ze.setTextureUnits(b.state.textureUnits),Lt===!0&&ee.setGlobalState(C.clippingPlanes,b.state.camera)):b=null,v.pop(),v.length>0?w=v[v.length-1]:w=null,U!==null&&U.renderEnd()};function qi(S,D,q,H){if(S.visible===!1)return;if(S.layers.test(D.layers)){if(S.isGroup)q=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(D);else if(S.isLight)b.pushLight(S),S.castShadow&&b.pushShadow(S);else if(S.isSprite){let Ce=D.isArrayCamera?ht:He;if(!S.frustumCulled||S.intersectsFrustum(Ce)){H&&Dt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Mt);let xe=ie.update(S),be=S.material;be.visible&&w.push(S,xe,be,q,Dt.z,null,D)}}else if(S.isMesh||S.isLine||S.isPoints){let Ce=D.isArrayCamera?ht:He;if(!S.frustumCulled||S.intersectsFrustum(Ce)){let xe=ie.update(S),be=S.material;if(H&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Dt.copy(S.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Dt.copy(xe.boundingSphere.center)),Dt.applyMatrix4(S.matrixWorld).applyMatrix4(Mt)),Array.isArray(be)){let Ne=xe.groups;for(let F=0,V=Ne.length;F<V;F++){let G=Ne[F],ce=be[G.materialIndex];ce&&ce.visible&&w.push(S,xe,ce,q,Dt.z,G,D)}}else be.visible&&w.push(S,xe,be,q,Dt.z,null,D)}}}let Ee=S.children;for(let Ce=0,xe=Ee.length;Ce<xe;Ce++)qi(Ee[Ce],D,q,H)}function yn(S,D,q,H){let{opaque:k,transmissive:Ee,transparent:Ce}=S;b.setupLightsView(q),Lt===!0&&ee.setGlobalState(C.clippingPlanes,q),H&&ve.viewport(ne.copy(H)),k.length>0&&Nn(k,D,q),Ee.length>0&&Nn(Ee,D,q),Ce.length>0&&Nn(Ce,D,q),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function Yi(S,D,q,H){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[H.id]===void 0){let G=dt.has("EXT_color_buffer_half_float")||dt.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[H.id]=new tn(1,1,{generateMipmaps:!0,type:G?vn:_n,minFilter:Vn,samples:Math.max(4,gt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:je.workingColorSpace})}let Ee=b.state.transmissionRenderTarget[H.id],Ce=H.viewport||ne;Ee.setSize(Ce.z*C.transmissionResolutionScale,Ce.w*C.transmissionResolutionScale);let xe=C.getRenderTarget(),be=C.getActiveCubeFace(),Ne=C.getActiveMipmapLevel();C.setRenderTarget(Ee),C.getClearColor($),_e=C.getClearAlpha(),_e<1&&C.setClearColor(16777215,.5),C.clear(),fn&&P.render(q);let F=C.toneMapping;C.toneMapping=pi;let V=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),b.setupLightsView(H),Lt===!0&&ee.setGlobalState(C.clippingPlanes,H),Nn(S,q,H),ze.updateMultisampleRenderTarget(Ee),ze.updateRenderTargetMipmap(Ee),dt.has("WEBGL_multisampled_render_to_texture")===!1){let G=!1;for(let ce=0,Ie=D.length;ce<Ie;ce++){let Oe=D[ce],{object:ye,geometry:Pe,material:se,group:nt}=Oe;if(se.side===Ht&&ye.layers.test(H.layers)){let Ye=se.side;se.side=kt,se.needsUpdate=!0,ji(ye,q,H,Pe,se,nt),se.side=Ye,se.needsUpdate=!0,G=!0}}G===!0&&(ze.updateMultisampleRenderTarget(Ee),ze.updateRenderTargetMipmap(Ee))}C.setRenderTarget(xe,be,Ne),C.setClearColor($,_e),V!==void 0&&(H.viewport=V),C.toneMapping=F}function Nn(S,D,q){let H=D.isScene===!0?D.overrideMaterial:null;for(let k=0,Ee=S.length;k<Ee;k++){let Ce=S[k],{object:xe,geometry:be,group:Ne}=Ce,F=Ce.material;F.allowOverride===!0&&H!==null&&(F=H),xe.layers.test(q.layers)&&ji(xe,D,q,be,F,Ne)}}function ji(S,D,q,H,k,Ee){U!==null&&k.isNodeMaterial&&U.setObject(S,k),S.onBeforeRender(C,D,q,H,k,Ee),S.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),k.onBeforeRender(C,D,q,H,S,Ee),k.transparent===!0&&k.side===Ht&&k.forceSinglePass===!1?(k.side=kt,k.needsUpdate=!0,C.renderBufferDirect(q,D,H,k,S,Ee),k.side=hn,k.needsUpdate=!0,C.renderBufferDirect(q,D,H,k,S,Ee),k.side=Ht):C.renderBufferDirect(q,D,H,k,S,Ee),S.onAfterRender(C,D,q,H,k,Ee)}function Zi(S){let D=0;for(let q of S)q.texture!==null&&D++;return D}function qn(S,D,q){D.isScene!==!0&&(D=wt);let H=De.get(S),k=b.state.lights,Ee=b.state.shadowsArray,Ce=k.state.version,xe=te.getParameters(S,k.state,Ee,D,q,b.state.lightProbeGridArray),be=te.getProgramCacheKey(xe),Ne=H.programs;H.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?D.environment:null,H.fog=D.fog;let F=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;H.envMap=R.get(S.envMap||H.environment,F),H.envMapRotation=H.environment!==null&&S.envMap===null?D.environmentRotation:S.envMapRotation,Ne===void 0&&(S.addEventListener("dispose",ft),Ne=new Map,H.programs=Ne,H.programVariants=new Map);let V=Ne.get(be);if(V!==void 0){if(H.currentProgram===V&&H.lightsStateVersion===Ce)return Js(S,xe),V}else xe.uniforms=te.getUniforms(S),U!==null&&S.isNodeMaterial&&U.build(S,q,xe),S.onBeforeCompile(xe,C),V=te.acquireProgram(xe,be),Ne.set(be,V),H.uniforms=xe.uniforms;let G=H.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(G.clippingPlanes=ee.uniform),Js(S,xe),H.needsLights=Ki(S),H.lightsStateVersion=Ce,H.needsLights&&(G.ambientLightColor.value=k.state.ambient,G.lightProbe.value=k.state.probe,G.sunLights.value=k.state.sun,G.sunLightShadows.value=k.state.sunShadow,G.directionalLights.value=k.state.directional,G.directionalLightShadows.value=k.state.directionalShadow,G.spotLights.value=k.state.spot,G.spotLightShadows.value=k.state.spotShadow,G.rectAreaLights.value=k.state.rectArea,G.ltc_1.value=k.state.rectAreaLTC1,G.ltc_2.value=k.state.rectAreaLTC2,G.pointLights.value=k.state.point,G.pointLightShadows.value=k.state.pointShadow,G.hemisphereLights.value=k.state.hemi,G.sunShadowMatrix.value=k.state.sunShadowMatrix,G.sunShadowCascade.value=k.state.sunShadowCascade,G.directionalShadowMatrix.value=k.state.directionalShadowMatrix,G.spotLightMatrix.value=k.state.spotLightMatrix,G.spotLightMap.value=k.state.spotLightMap,G.pointShadowMatrix.value=k.state.pointShadowMatrix),H.numLightProbeGrids=Zi(b.state.lightProbeGridArray),H.currentProgram=V,H.uniformsList=null,V}function $r(S,D,q,H,k){let Ee=De.get(S),Ce=Ee.currentProgram.id+","+H+","+k,xe=Ee.programVariants.get(Ce);return xe===void 0?(xe=qn(S,D,q),Ee.programVariants.set(Ce,xe)):(Ee.currentProgram=xe,Ee.uniformsList=null,Ee.outputColorSpace=H,Ee.toneMapping=k),xe}function Jr(S){if(S.uniformsList===null){let D=S.currentProgram.getUniforms();S.uniformsList=Us.seqWithValue(D.seq,S.uniforms)}return S.uniformsList}function Js(S,D){let q=De.get(S);q.outputColorSpace=D.outputColorSpace,q.batching=D.batching,q.batchingColor=D.batchingColor,q.instancing=D.instancing,q.instancingColor=D.instancingColor,q.instancingMorph=D.instancingMorph,q.skinning=D.skinning,q.morphTargets=D.morphTargets,q.morphNormals=D.morphNormals,q.morphColors=D.morphColors,q.morphTargetsCount=D.morphTargetsCount,q.numClippingPlanes=D.numClippingPlanes,q.numIntersection=D.numClipIntersection,q.vertexAlphas=D.vertexAlphas,q.vertexTangents=D.vertexTangents,q.toneMapping=D.toneMapping}function Qr(S,D,q,H,k){D.isScene!==!0&&(D=wt),ze.resetTextureUnits();let Ee=D.fog,Ce=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?D.environment:null,xe=re===null?C.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:je.workingColorSpace,be=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Ne=R.get(H.envMap||Ce,be),F=H.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,V=!!q.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),G=!!q.morphAttributes.position,ce=!!q.morphAttributes.normal,Ie=!!q.morphAttributes.color,Oe=pi;H.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(Oe=C.toneMapping);let ye=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Pe=ye!==void 0?ye.length:0,se=De.get(H),nt=b.state.lights;if(Lt===!0&&(zt===!0||S!==J)){let Ut=S===J&&H.id===W;ee.setState(H,S,Ut)}let Ye=!1,St=!1;H.version===se.__version?se.needsLights&&se.lightsStateVersion!==nt.state.version||k.isBatchedMesh&&se.batching===!1||!k.isBatchedMesh&&se.batching===!0||k.isBatchedMesh&&se.batchingColor===!0&&k._colorsTexture===null||k.isBatchedMesh&&se.batchingColor===!1&&k._colorsTexture!==null||k.isInstancedMesh&&se.instancing===!1||!k.isInstancedMesh&&se.instancing===!0||k.isSkinnedMesh&&se.skinning===!1||!k.isSkinnedMesh&&se.skinning===!0||k.isInstancedMesh&&se.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&se.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&se.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&se.instancingMorph===!1&&k.morphTexture!==null||se.envMap!==Ne||H.fog===!0&&se.fog!==Ee||se.numClippingPlanes!==void 0&&(se.numClippingPlanes!==ee.numPlanes||se.numIntersection!==ee.numIntersection)||se.vertexAlphas!==F||se.vertexTangents!==V||se.morphTargets!==G||se.morphNormals!==ce||se.morphColors!==Ie||se.morphTargetsCount!==Pe||se.numLightProbeGrids!==Zi(b.state.lightProbeGridArray)?Ye=!0:(se.outputColorSpace!==xe||se.toneMapping!==Oe)&&(St=!0):(Ye=!0,se.__version=H.version);let Pt=se.currentProgram;(Ye===!0||St===!0)&&(Pt=St===!0?$r(H,D,k,xe,Oe):qn(H,D,k),U&&H.isNodeMaterial&&U.onUpdateProgram(H,Pt,se));let wn=!1,Yt=!1,Jt=!1,at=Pt.getUniforms(),an=se.uniforms;if(ve.useProgram(Pt.program)&&(wn=!0,Yt=!0,Jt=!0),H.id!==W&&(W=H.id,Yt=!0),wn||J!==S){ve.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),at.setValue(N,"projectionMatrix",S.projectionMatrix),at.setValue(N,"viewMatrix",S.matrixWorldInverse);let Qt=at.map.cameraPosition;Qt!==void 0&&Qt.setValue(N,sn.setFromMatrixPosition(S.matrixWorld)),gt.logarithmicDepthBuffer&&at.setValue(N,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&at.setValue(N,"isOrthographic",S.isOrthographicCamera===!0),J!==S&&(J=S,Yt=!0,Jt=!0)}if(se.needsLights&&(nt.state.sunShadowMap.length>0&&at.setValue(N,"sunShadowMap",nt.state.sunShadowMap,ze),nt.state.directionalShadowMap.length>0&&at.setValue(N,"directionalShadowMap",nt.state.directionalShadowMap,ze),nt.state.spotShadowMap.length>0&&at.setValue(N,"spotShadowMap",nt.state.spotShadowMap,ze),nt.state.pointShadowMap.length>0&&at.setValue(N,"pointShadowMap",nt.state.pointShadowMap,ze)),k.isSkinnedMesh){at.setOptional(N,k,"bindMatrix"),at.setOptional(N,k,"bindMatrixInverse");let Ut=k.skeleton;Ut&&(Ut.boneTexture===null&&Ut.computeBoneTexture(),at.setValue(N,"boneTexture",Ut.boneTexture,ze))}k.isBatchedMesh&&(at.setOptional(N,k,"batchingTexture"),at.setValue(N,"batchingTexture",k._matricesTexture,ze),at.setOptional(N,k,"batchingIdTexture"),at.setValue(N,"batchingIdTexture",k._indirectTexture,ze),at.setOptional(N,k,"batchingColorTexture"),k._colorsTexture!==null&&at.setValue(N,"batchingColorTexture",k._colorsTexture,ze));let Yn=q.morphAttributes;if((Yn.position!==void 0||Yn.normal!==void 0||Yn.color!==void 0)&&Q.update(k,q,Pt),(Yt||se.receiveShadow!==k.receiveShadow)&&(se.receiveShadow=k.receiveShadow,at.setValue(N,"receiveShadow",k.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&D.environment!==null&&(an.envMapIntensity.value=D.environmentIntensity),an.dfgLUT!==void 0&&(an.dfgLUT.value=ME()),Yt){if(at.setValue(N,"toneMappingExposure",C.toneMappingExposure),se.needsLights&&Qs(an,Jt),Ee&&H.fog===!0&&de.refreshFogUniforms(an,Ee),de.refreshMaterialUniforms(an,H,Se,Fe,b.state.transmissionRenderTarget[S.id]),se.needsLights&&se.numLightProbeGrids>0){let Ut=x,Qt=0;for(let Ei of b.state.lightProbeGridArray)Ei.texture!==null&&(Ut.textures[Qt]=Ei.texture,Ut.min[Qt]=Ei.boundingBox.min,Ut.max[Qt]=Ei.boundingBox.max,Ut.resolution[Qt]=Ei.resolution,Qt++);for(let Ei in Ut)Ut[Ei].length=Qt;an.probesSH.value=Ut.textures,an.probesMin.value=Ut.min,an.probesMax.value=Ut.max,an.probesResolution.value=Ut.resolution}Us.upload(N,Jr(se),an,ze)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Us.upload(N,Jr(se),an,ze),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&at.setValue(N,"center",k.center),at.setValue(N,"modelViewMatrix",k.modelViewMatrix),at.setValue(N,"normalMatrix",k.normalMatrix),at.setValue(N,"modelMatrix",k.matrixWorld),H.uniformsGroups!==void 0){let Ut=H.uniformsGroups;for(let Qt=0,Ei=Ut.length;Qt<Ei;Qt++){let Sd=Ut[Qt];Re.update(Sd,Pt),Re.bind(Sd,Pt)}}return Pt}function Qs(S,D){S.ambientLightColor.needsUpdate=D,S.lightProbe.needsUpdate=D,S.sunLights.needsUpdate=D,S.sunLightShadows.needsUpdate=D,S.directionalLights.needsUpdate=D,S.directionalLightShadows.needsUpdate=D,S.pointLights.needsUpdate=D,S.pointLightShadows.needsUpdate=D,S.spotLights.needsUpdate=D,S.spotLightShadows.needsUpdate=D,S.rectAreaLights.needsUpdate=D,S.hemisphereLights.needsUpdate=D}function Ki(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return re},this.setRenderTargetTextures=function(S,D,q){let H=De.get(S);H.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),De.get(S.texture).__webglTexture=D,De.get(S.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:q,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,D){let q=De.get(S);q.__webglFramebuffer=D,q.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(S,D=0,q=0){re=S,j=D,z=q;let H=null,k=!1,Ee=!1;if(S){let xe=De.get(S);if(xe.__useDefaultFramebuffer!==void 0){ve.bindFramebuffer(N.FRAMEBUFFER,xe.__webglFramebuffer),ne.copy(S.viewport),Ae.copy(S.scissor),Ue=S.scissorTest,ve.viewport(ne),ve.scissor(Ae),ve.setScissorTest(Ue),W=-1;return}else if(xe.__webglFramebuffer===void 0)ze.setupRenderTarget(S);else if(xe.__hasExternalTextures)ze.rebindTextures(S,De.get(S.texture).__webglTexture,De.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let F=S.depthTexture;if(xe.__boundDepthTexture!==F){if(F!==null&&De.has(F)&&(S.width!==F.image.width||S.height!==F.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ze.setupDepthRenderbuffer(S)}}let be=S.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(Ee=!0);let Ne=De.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ne[D])?H=Ne[D][q]:H=Ne[D],k=!0):S.samples>0&&ze.useMultisampledRTT(S)===!1?H=De.get(S).__webglMultisampledFramebuffer:Array.isArray(Ne)?H=Ne[q]:H=Ne,ne.copy(S.viewport),Ae.copy(S.scissor),Ue=S.scissorTest}else ne.copy(Be).multiplyScalar(Se).floor(),Ae.copy(Je).multiplyScalar(Se).floor(),Ue=ot;if(q!==0&&(H=Y),ve.bindFramebuffer(N.FRAMEBUFFER,H)&&ve.drawBuffers(S,H),ve.viewport(ne),ve.scissor(Ae),ve.setScissorTest(Ue),k){let xe=De.get(S.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+D,xe.__webglTexture,q)}else if(Ee){let xe=D;for(let be=0;be<S.textures.length;be++){let Ne=De.get(S.textures[be]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+be,Ne.__webglTexture,q,xe)}}else if(S!==null&&q!==0){let xe=De.get(S.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,xe.__webglTexture,q)}W=-1};function eo(S){let D=De.get(S);return(D.__readFormat!==S.format||D.__readType!==S.type)&&(D.__readFormat=S.format,D.__readType=S.type,D.__formatReadable=gt.textureFormatReadable(S.format),D.__typeReadable=gt.textureTypeReadable(S.type)),D}this.readRenderTargetPixels=function(S,D,q,H,k,Ee,Ce,xe=0){if(!(S&&S.isWebGLRenderTarget)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=De.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ce!==void 0&&(be=be[Ce],Array.isArray(be)&&(be=be[0])),be){ve.bindFramebuffer(N.FRAMEBUFFER,be);try{let Ne=S.textures[xe],F=Ne.format,V=Ne.type;S.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+xe);let G=eo(Ne);if(G.__formatReadable===!1){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(G.__typeReadable===!1){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=S.width-H&&q>=0&&q<=S.height-k&&N.readPixels(D,q,H,k,ae.convert(F),ae.convert(V),Ee)}finally{let Ne=re!==null?De.get(re).__webglFramebuffer:null;ve.bindFramebuffer(N.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(S,D,q,H,k,Ee,Ce,xe=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=De.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ce!==void 0&&(be=be[Ce],Array.isArray(be)&&(be=be[0])),be)if(D>=0&&D<=S.width-H&&q>=0&&q<=S.height-k){ve.bindFramebuffer(N.FRAMEBUFFER,be);let Ne=S.textures[xe],F=Ne.format,V=Ne.type;S.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+xe);let G=eo(Ne);if(G.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(G.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ce=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,ce),N.bufferData(N.PIXEL_PACK_BUFFER,Ee.byteLength,N.STREAM_READ),N.readPixels(D,q,H,k,ae.convert(F),ae.convert(V),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let Ie=re!==null?De.get(re).__webglFramebuffer:null;ve.bindFramebuffer(N.FRAMEBUFFER,Ie);let Oe=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Yf(N,Oe,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,ce),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,Ee),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(ce),N.deleteSync(Oe),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,D=null,q=0){let H=Math.pow(2,-q),k=Math.floor(S.image.width*H),Ee=Math.floor(S.image.height*H),Ce=D!==null?D.x:0,xe=D!==null?D.y:0;ze.setTexture2D(S,0),N.copyTexSubImage2D(N.TEXTURE_2D,q,0,0,Ce,xe,k,Ee),ve.unbindTexture()},this.copyTextureToTexture=function(S,D,q=null,H=null,k=0,Ee=0){let Ce,xe,be,Ne,F,V,G,ce,Ie,Oe=S.isCompressedTexture?S.mipmaps[Ee]:S.image;if(q!==null)Ce=q.max.x-q.min.x,xe=q.max.y-q.min.y,be=q.isBox3?q.max.z-q.min.z:1,Ne=q.min.x,F=q.min.y,V=q.isBox3?q.min.z:0;else{let at=Math.pow(2,-k);Ce=Math.floor(Oe.width*at),xe=Math.floor(Oe.height*at),S.isDataArrayTexture?be=Oe.depth:S.isData3DTexture?be=Math.floor(Oe.depth*at):be=1,Ne=0,F=0,V=0}H!==null?(G=H.x,ce=H.y,Ie=H.z):(G=0,ce=0,Ie=0);let ye=ae.convert(D.format),Pe=ae.convert(D.type),se;D.isData3DTexture?(ze.setTexture3D(D,0),se=N.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(ze.setTexture2DArray(D,0),se=N.TEXTURE_2D_ARRAY):(ze.setTexture2D(D,0),se=N.TEXTURE_2D),ve.activeTexture(N.TEXTURE0),ve.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,D.flipY),ve.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),ve.pixelStorei(N.UNPACK_ALIGNMENT,D.unpackAlignment);let nt=ve.getParameter(N.UNPACK_ROW_LENGTH),Ye=ve.getParameter(N.UNPACK_IMAGE_HEIGHT),St=ve.getParameter(N.UNPACK_SKIP_PIXELS),Pt=ve.getParameter(N.UNPACK_SKIP_ROWS),wn=ve.getParameter(N.UNPACK_SKIP_IMAGES);ve.pixelStorei(N.UNPACK_ROW_LENGTH,Oe.width),ve.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Oe.height),ve.pixelStorei(N.UNPACK_SKIP_PIXELS,Ne),ve.pixelStorei(N.UNPACK_SKIP_ROWS,F),ve.pixelStorei(N.UNPACK_SKIP_IMAGES,V);let Yt=S.isDataArrayTexture||S.isData3DTexture,Jt=D.isDataArrayTexture||D.isData3DTexture;if(S.isDepthTexture){let at=De.get(S),an=De.get(D),Yn=De.get(at.__renderTarget),Ut=De.get(an.__renderTarget);ve.bindFramebuffer(N.READ_FRAMEBUFFER,Yn.__webglFramebuffer),ve.bindFramebuffer(N.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer);for(let Qt=0;Qt<be;Qt++)Yt&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,De.get(S).__webglTexture,k,V+Qt),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,De.get(D).__webglTexture,Ee,Ie+Qt)),N.blitFramebuffer(Ne,F,Ne+Ce,F+xe,G,ce,G+Ce,ce+xe,N.DEPTH_BUFFER_BIT,N.NEAREST);ve.bindFramebuffer(N.READ_FRAMEBUFFER,null),ve.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(k!==0||S.isRenderTargetTexture||De.has(S)){let at=De.get(S),an=De.get(D);ve.bindFramebuffer(N.READ_FRAMEBUFFER,L),ve.bindFramebuffer(N.DRAW_FRAMEBUFFER,X);for(let Yn=0;Yn<be;Yn++)Yt?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,at.__webglTexture,k,V+Yn):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,at.__webglTexture,k),Jt?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,an.__webglTexture,Ee,Ie+Yn):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,an.__webglTexture,Ee),k!==0?N.blitFramebuffer(Ne,F,Ne+Ce,F+xe,G,ce,G+Ce,ce+xe,N.COLOR_BUFFER_BIT,N.NEAREST):Jt?N.copyTexSubImage3D(se,Ee,G,ce,Ie+Yn,Ne,F,Ce,xe):N.copyTexSubImage2D(se,Ee,G,ce,Ne,F,Ce,xe);ve.bindFramebuffer(N.READ_FRAMEBUFFER,null),ve.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Jt?S.isDataTexture||S.isData3DTexture?N.texSubImage3D(se,Ee,G,ce,Ie,Ce,xe,be,ye,Pe,Oe.data):D.isCompressedArrayTexture?N.compressedTexSubImage3D(se,Ee,G,ce,Ie,Ce,xe,be,ye,Oe.data):N.texSubImage3D(se,Ee,G,ce,Ie,Ce,xe,be,ye,Pe,Oe):S.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,Ee,G,ce,Ce,xe,ye,Pe,Oe.data):S.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,Ee,G,ce,Oe.width,Oe.height,ye,Oe.data):N.texSubImage2D(N.TEXTURE_2D,Ee,G,ce,Ce,xe,ye,Pe,Oe);ve.pixelStorei(N.UNPACK_ROW_LENGTH,nt),ve.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ye),ve.pixelStorei(N.UNPACK_SKIP_PIXELS,St),ve.pixelStorei(N.UNPACK_SKIP_ROWS,Pt),ve.pixelStorei(N.UNPACK_SKIP_IMAGES,wn),Ee===0&&D.generateMipmaps===!0&&D.mipmapsAutoUpdate===!0&&N.generateMipmap(se),ve.unbindTexture()},this.initRenderTarget=function(S){De.get(S).__webglFramebuffer===void 0&&ze.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?ze.setTextureCube(S,0):S.isData3DTexture?ze.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?ze.setTexture2DArray(S,0):ze.setTexture2D(S,0),ve.unbindTexture()},this.resetState=function(){j=0,z=0,re=null,ve.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=je._getDrawingBufferColorSpace(e),t.unpackColorSpace=je._getUnpackColorSpace()}};var zn=Uint8Array,ks=Uint16Array,EE=Int32Array,Op=new zn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Np=new zn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),SE=new zn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Up=function(i,e){for(var t=new ks(31),n=0;n<31;++n)t[n]=e+=1<<i[n-1];for(var r=new EE(t[30]),n=1;n<30;++n)for(var s=t[n];s<t[n+1];++s)r[s]=s-t[n]<<5|n;return{b:t,r}},Fp=Up(Op,2),Bp=Fp.b,TE=Fp.r;Bp[28]=258,TE[258]=28;var Hp=Up(Np,0),bE=Hp.b,uC=Hp.r,rh=new ks(32768);for(vt=0;vt<32768;++vt)Wi=(vt&43690)>>1|(vt&21845)<<1,Wi=(Wi&52428)>>2|(Wi&13107)<<2,Wi=(Wi&61680)>>4|(Wi&3855)<<4,rh[vt]=((Wi&65280)>>8|(Wi&255)<<8)>>1;var Wi,vt,jo=(function(i,e,t){for(var n=i.length,r=0,s=new ks(e);r<n;++r)i[r]&&++s[i[r]-1];var o=new ks(e);for(r=1;r<e;++r)o[r]=o[r-1]+s[r-1]<<1;var a;if(t){a=new ks(1<<e);var l=15-e;for(r=0;r<n;++r)if(i[r])for(var c=r<<4|i[r],u=e-i[r],h=o[i[r]-1]++<<u,d=h|(1<<u)-1;h<=d;++h)a[rh[h]>>l]=c}else for(a=new ks(n),r=0;r<n;++r)i[r]&&(a[r]=rh[o[i[r]-1]++]>>15-i[r]);return a}),Zo=new zn(288);for(vt=0;vt<144;++vt)Zo[vt]=8;var vt;for(vt=144;vt<256;++vt)Zo[vt]=9;var vt;for(vt=256;vt<280;++vt)Zo[vt]=7;var vt;for(vt=280;vt<288;++vt)Zo[vt]=8;var vt,kp=new zn(32);for(vt=0;vt<32;++vt)kp[vt]=5;var vt;var wE=jo(Zo,9,1);var AE=jo(kp,5,1),nh=function(i){for(var e=i[0],t=1;t<i.length;++t)i[t]>e&&(e=i[t]);return e},oi=function(i,e,t){var n=e/8|0;return(i[n]|i[n+1]<<8)>>(e&7)&t},ih=function(i,e){var t=e/8|0;return(i[t]|i[t+1]<<8|i[t+2]<<16)>>(e&7)},RE=function(i){return(i+7)/8|0},CE=function(i,e,t){return(e==null||e<0)&&(e=0),(t==null||t>i.length)&&(t=i.length),new zn(i.subarray(e,t))};var PE=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],ai=function(i,e,t){var n=new Error(e||PE[i]);if(n.code=i,Error.captureStackTrace&&Error.captureStackTrace(n,ai),!t)throw n;return n},IE=function(i,e,t,n){var r=i.length,s=n?n.length:0;if(!r||e.f&&!e.l)return t||new zn(0);var o=!t,a=o||e.i!=2,l=e.i;o&&(t=new zn(r*3));var c=function(Be){var Je=t.length;if(Be>Je){var ot=new zn(Math.max(Je*2,Be));ot.set(t),t=ot}},u=e.f||0,h=e.p||0,d=e.b||0,f=e.l,p=e.d,_=e.m,m=e.n,g=r*8;do{if(!f){u=oi(i,h,1);var y=oi(i,h+1,3);if(h+=3,y)if(y==1)f=wE,p=AE,_=9,m=5;else if(y==2){var b=oi(i,h,31)+257,v=oi(i,h+10,15)+4,T=b+oi(i,h+5,31)+1;h+=14;for(var O=new zn(T),C=new zn(19),I=0;I<v;++I)C[SE[I]]=oi(i,h+I*3,7);h+=v*3;for(var U=nh(C),Y=(1<<U)-1,L=jo(C,U,1),I=0;I<T;){var X=L[oi(i,h,Y)];h+=X&15;var M=X>>4;if(M<16)O[I++]=M;else{var j=0,z=0;for(M==16?(z=3+oi(i,h,3),h+=2,j=O[I-1]):M==17?(z=3+oi(i,h,7),h+=3):M==18&&(z=11+oi(i,h,127),h+=7);z--;)O[I++]=j}}var re=O.subarray(0,b),W=O.subarray(b);_=nh(re),m=nh(W),f=jo(re,_,1),p=jo(W,m,1)}else ai(1);else{var M=RE(h)+4,x=i[M-4]|i[M-3]<<8,w=M+x;if(w>r){l&&ai(0);break}a&&c(d+x),t.set(i.subarray(M,w),d),e.b=d+=x,e.p=h=w*8,e.f=u;continue}if(h>g){l&&ai(0);break}}a&&c(d+131072);for(var J=(1<<_)-1,ne=(1<<m)-1,Ae=h;;Ae=h){var j=f[ih(i,h)&J],Ue=j>>4;if(h+=j&15,h>g){l&&ai(0);break}if(j||ai(2),Ue<256)t[d++]=Ue;else if(Ue==256){Ae=h,f=null;break}else{var $=Ue-254;if(Ue>264){var I=Ue-257,_e=Op[I];$=oi(i,h,(1<<_e)-1)+Bp[I],h+=_e}var we=p[ih(i,h)&ne],Fe=we>>4;we||ai(3),h+=we&15;var W=bE[Fe];if(Fe>3){var _e=Np[Fe];W+=ih(i,h)&(1<<_e)-1,h+=_e}if(h>g){l&&ai(0);break}a&&c(d+131072);var Se=d+$;if(d<W){var qe=s-W,yt=Math.min(W,Se);for(qe+d<0&&ai(3);d<yt;++d)t[d]=n[qe+d]}for(;d<Se;++d)t[d]=t[d-W]}}e.l=f,e.p=Ae,e.b=d,e.f=u,f&&(u=1,e.m=_,e.d=p,e.n=m)}while(!u);return d!=t.length&&o?CE(t,0,d):t.subarray(0,d)};var LE=new zn(0);var DE=function(i,e){return((i[0]&15)!=8||i[0]>>4>7||(i[0]<<8|i[1])%31)&&ai(6,"invalid zlib data"),(i[1]>>5&1)==+!e&&ai(6,"invalid zlib data: "+(i[1]&32?"need":"unexpected")+" dictionary"),(i[1]>>3&4)+2};function Vp(i,e){return IE(i.subarray(DE(i,e&&e.dictionary),-4),{i:2},e&&e.out,e&&e.dictionary)}var OE=typeof TextDecoder<"u"&&new TextDecoder,NE=0;try{OE.decode(LE,{stream:!0}),NE=1}catch{}function zp(i,e,t){let n=t.length-i-1;if(e>=t[n])return n-1;if(e<=t[i])return i;let r=i,s=n,o=Math.floor((r+s)/2);for(;e<t[o]||e>=t[o+1];)e<t[o]?s=o:r=o,o=Math.floor((r+s)/2);return o}function UE(i,e,t,n){let r=[],s=[],o=[];r[0]=1;for(let a=1;a<=t;++a){s[a]=e-n[i+1-a],o[a]=n[i+a]-e;let l=0;for(let c=0;c<a;++c){let u=o[c+1],h=s[a-c],d=r[c]/(u+h);r[c]=l+u*d,l=h*d}r[a]=l}return r}function Gp(i,e,t,n){let r=zp(i,n,e),s=UE(r,n,i,e),o=new lt(0,0,0,0);for(let a=0;a<=i;++a){let l=t[r-i+a],c=s[a],u=l.w*c;o.x+=l.x*u,o.y+=l.y*u,o.z+=l.z*u,o.w+=l.w*c}return o}function FE(i,e,t,n,r){let s=[];for(let h=0;h<=t;++h)s[h]=0;let o=[];for(let h=0;h<=n;++h)o[h]=s.slice(0);let a=[];for(let h=0;h<=t;++h)a[h]=s.slice(0);a[0][0]=1;let l=s.slice(0),c=s.slice(0);for(let h=1;h<=t;++h){l[h]=e-r[i+1-h],c[h]=r[i+h]-e;let d=0;for(let f=0;f<h;++f){let p=c[f+1],_=l[h-f];a[h][f]=p+_;let m=a[f][h-1]/a[h][f];a[f][h]=d+p*m,d=_*m}a[h][h]=d}for(let h=0;h<=t;++h)o[0][h]=a[h][t];for(let h=0;h<=t;++h){let d=0,f=1,p=[];for(let _=0;_<=t;++_)p[_]=s.slice(0);p[0][0]=1;for(let _=1;_<=n;++_){let m=0,g=h-_,y=t-_;h>=_&&(p[f][0]=p[d][0]/a[y+1][g],m=p[f][0]*a[g][y]);let M=g>=-1?1:-g,x=h-1<=y?_-1:t-h;for(let b=M;b<=x;++b)p[f][b]=(p[d][b]-p[d][b-1])/a[y+1][g+b],m+=p[f][b]*a[g+b][y];h<=y&&(p[f][_]=-p[d][_-1]/a[y+1][h],m+=p[f][_]*a[h][y]),o[_][h]=m;let w=d;d=f,f=w}}let u=t;for(let h=1;h<=n;++h){for(let d=0;d<=t;++d)o[h][d]*=u;u*=t-h}return o}function BE(i,e,t,n,r){let s=r<i?r:i,o=[],a=zp(i,n,e),l=FE(a,n,i,s,e),c=[];for(let u=0;u<t.length;++u){let h=t[u].clone(),d=h.w;h.x*=d,h.y*=d,h.z*=d,c[u]=h}for(let u=0;u<=s;++u){let h=c[a-i].clone().multiplyScalar(l[u][0]);for(let d=1;d<=i;++d)h.add(c[a-i+d].clone().multiplyScalar(l[u][d]));o[u]=h}for(let u=s+1;u<=r+1;++u)o[u]=new lt(0,0,0);return o}function HE(i,e){let t=1;for(let r=2;r<=i;++r)t*=r;let n=1;for(let r=2;r<=e;++r)n*=r;for(let r=2;r<=i-e;++r)n*=r;return t/n}function kE(i){let e=i.length,t=[],n=[];for(let s=0;s<e;++s){let o=i[s];t[s]=new A(o.x,o.y,o.z),n[s]=o.w}let r=[];for(let s=0;s<e;++s){let o=t[s].clone();for(let a=1;a<=s;++a)o.sub(r[s-a].clone().multiplyScalar(HE(s,a)*n[a]));r[s]=o.divideScalar(n[0])}return r}function Wp(i,e,t,n,r){let s=BE(i,e,t,n,r);return kE(s)}var Ql=class extends To{constructor(e,t,n,r,s){super();let o=t?t.length-1:0,a=n?n.length:0;this.degree=e,this.knots=t,this.controlPoints=[],this.startKnot=r||0,this.endKnot=s||o;for(let l=0;l<a;++l){let c=n[l];this.controlPoints[l]=new lt(c.x,c.y,c.z,c.w)}}getPoint(e,t=new A){let n=t,r=this.knots[this.startKnot]+e*(this.knots[this.endKnot]-this.knots[this.startKnot]),s=Gp(this.degree,this.knots,this.controlPoints,r);return s.w!==1&&s.divideScalar(s.w),n.set(s.x,s.y,s.z)}getTangent(e,t=new A){let n=t,r=this.knots[0]+e*(this.knots[this.knots.length-1]-this.knots[0]),s=Wp(this.degree,this.knots,this.controlPoints,r,1);return n.copy(s[1]).normalize(),n}copy(e){return super.copy(e),this.degree=e.degree,this.knots=[...e.knots],this.controlPoints=e.controlPoints.map(t=>t.clone()),this.startKnot=e.startKnot,this.endKnot=e.endKnot,this}toJSON(){let e=super.toJSON();return e.degree=this.degree,e.knots=[...this.knots],e.controlPoints=this.controlPoints.map(t=>t.toArray()),e.startKnot=this.startKnot,e.endKnot=this.endKnot,e}fromJSON(e){return super.fromJSON(e),this.degree=e.degree,this.knots=[...e.knots],this.controlPoints=e.controlPoints.map(t=>new lt(t[0],t[1],t[2],t[3])),this.startKnot=e.startKnot,this.endKnot=e.endKnot,this}};var tt,Vt,$t,tc=class extends Rn{constructor(e){super(e),this.trimAnimationClips=!1}load(e,t,n,r){let s=this,o=s.path===""?On.extractUrlBase(e):s.path,a=new lr(this.manager);a.setPriority(this.priority),a.setCache(this.cache),a.setPath(s.path),a.setResponseType("arraybuffer"),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(e,function(l){try{t(s.parse(l,o))}catch(c){r?r(c):console.error(c),s.manager.itemError(e)}},n,r)}parse(e,t){if(zE(e))tt=new dh().parse(e);else{let r=Yp(e);if(!GE(r))throw new Error("THREE.FBXLoader: Unknown format.");if(Xp(r)<7e3)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+Xp(r));tt=new hh().parse(r)}let n=new Hi(this.manager).setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);return n.setPriority(this.priority),n.setCache(this.cache),new lh(n,this.manager,this.trimAnimationClips).parse(tt)}},lh=class{constructor(e,t,n){this.textureLoader=e,this.manager=t,this.trimAnimationClips=n}parse(){Vt=this.parseConnections();let e=this.parseImages(),t=this.parseTextures(e),n=this.parseMaterials(t),r=this.parseDeformers(),s=new ch().parse(r);return this.parseScene(r,s,n),$t}parseConnections(){let e=new Map;return"Connections"in tt&&tt.Connections.connections.forEach(function(n){let r=n[0],s=n[1],o=n[2];e.has(r)||e.set(r,{parents:[],children:[]});let a={ID:s,relationship:o};e.get(r).parents.push(a),e.has(s)||e.set(s,{parents:[],children:[]});let l={ID:r,relationship:o};e.get(s).children.push(l)}),e}parseImages(){let e={},t={};if("Video"in tt.Objects){let n=tt.Objects.Video;for(let r in n){let s=n[r],o=parseInt(r);if(e[o]=s.RelativeFilename||s.Filename,"Content"in s){let a=s.Content instanceof ArrayBuffer&&s.Content.byteLength>0,l=typeof s.Content=="string"&&s.Content!=="";if(a||l){let c=this.parseImage(n[r]);t[s.RelativeFilename||s.Filename]=c}}}}for(let n in e){let r=e[n];t[r]!==void 0?e[n]=t[r]:e[n]=e[n].split("\\").pop()}return e}parseImage(e){let t=e.Content,n=e.RelativeFilename||e.Filename,r=n.slice(n.lastIndexOf(".")+1).toLowerCase(),s;switch(r){case"bmp":s="image/bmp";break;case"jpg":case"jpeg":s="image/jpeg";break;case"png":s="image/png";break;case"tif":s="image/tiff";break;case"tga":this.manager.getHandler(".tga")===null&&console.warn("FBXLoader: TGA loader not found, skipping ",n),s="image/tga";break;case"webp":s="image/webp";break;default:console.warn('FBXLoader: Image type "'+r+'" is not supported.');return}if(typeof t=="string")return"data:"+s+";base64,"+t;{let o=new Uint8Array(t);return URL.createObjectURL(new Blob([o],{type:s}))}}parseTextures(e){let t=new Map;if("Texture"in tt.Objects){let n=tt.Objects.Texture;for(let r in n){let s=this.parseTexture(n[r],e);t.set(parseInt(r),s)}}return t}parseTexture(e,t){let n=this.loadTexture(e,t);n.ID=e.id,n.name=e.attrName;let r=e.WrapModeU,s=e.WrapModeV,o=r!==void 0?r.value:0,a=s!==void 0?s.value:0;if(n.wrapS=o===0?In:ln,n.wrapT=a===0?In:ln,"Scaling"in e){let l=e.Scaling.value;n.repeat.x=l[0],n.repeat.y=l[1]}if("Translation"in e){let l=e.Translation.value;n.offset.x=l[0],n.offset.y=l[1]}return n}loadTexture(e,t){let n=e.FileName.split(".").pop().toLowerCase(),r=this.manager.getHandler(`.${n}`);r===null&&(r=this.textureLoader);let s=r.path;s||r.setPath(this.textureLoader.path);let o=Vt.get(e.id).children,a;if(o!==void 0&&o.length>0&&t[o[0].ID]!==void 0&&(a=t[o[0].ID],(a.indexOf("blob:")===0||a.indexOf("data:")===0)&&r.setPath(void 0)),a===void 0)return console.warn("FBXLoader: Undefined filename, creating placeholder texture."),new Wt;let l=r.load(a);return r.setPath(s),l}parseMaterials(e){let t=new Map;if("Material"in tt.Objects){let n=tt.Objects.Material;for(let r in n){let s=this.parseMaterial(n[r],e);s!==null&&t.set(parseInt(r),s)}}return t}parseMaterial(e,t){let n=e.id,r=e.attrName,s=e.ShadingModel;if(typeof s=="object"&&(s=s.value),!Vt.has(n))return null;let o=this.parseParameters(e,t,n),a;switch(s.toLowerCase()){case"phong":a=new ar;break;case"lambert":a=new Nr;break;default:console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.',s),a=new ar;break}return a.setValues(o),a.name=r,a}parseParameters(e,t,n){let r={};e.BumpFactor&&(r.bumpScale=e.BumpFactor.value),e.Diffuse?r.color=je.colorSpaceToWorking(new ue().fromArray(e.Diffuse.value),ut):e.DiffuseColor&&(e.DiffuseColor.type==="Color"||e.DiffuseColor.type==="ColorRGB")&&(r.color=je.colorSpaceToWorking(new ue().fromArray(e.DiffuseColor.value),ut)),e.DisplacementFactor&&(r.displacementScale=e.DisplacementFactor.value),e.Emissive?r.emissive=je.colorSpaceToWorking(new ue().fromArray(e.Emissive.value),ut):e.EmissiveColor&&(e.EmissiveColor.type==="Color"||e.EmissiveColor.type==="ColorRGB")&&(r.emissive=je.colorSpaceToWorking(new ue().fromArray(e.EmissiveColor.value),ut)),e.EmissiveFactor&&(r.emissiveIntensity=parseFloat(e.EmissiveFactor.value)),r.opacity=1-(e.TransparencyFactor?parseFloat(e.TransparencyFactor.value):0),(r.opacity===1||r.opacity===0)&&(r.opacity=e.Opacity?parseFloat(e.Opacity.value):null,r.opacity===null&&(r.opacity=1)),r.opacity<1&&(r.transparent=!0),e.ReflectionFactor&&(r.reflectivity=e.ReflectionFactor.value),e.Shininess&&(r.shininess=e.Shininess.value),e.Specular?r.specular=je.colorSpaceToWorking(new ue().fromArray(e.Specular.value),ut):e.SpecularColor&&e.SpecularColor.type==="Color"&&(r.specular=je.colorSpaceToWorking(new ue().fromArray(e.SpecularColor.value),ut));let s=this;return Vt.get(n).children.forEach(function(o){let a=o.relationship;switch(a){case"Bump":r.bumpMap=s.getTexture(t,o.ID);break;case"Maya|TEX_ao_map":r.aoMap=s.getTexture(t,o.ID);break;case"DiffuseColor":case"Maya|TEX_color_map":r.map=s.getTexture(t,o.ID),r.map!==void 0&&(r.map.colorSpace=ut);break;case"DisplacementColor":r.displacementMap=s.getTexture(t,o.ID);break;case"EmissiveColor":r.emissiveMap=s.getTexture(t,o.ID),r.emissiveMap!==void 0&&(r.emissiveMap.colorSpace=ut);break;case"NormalMap":case"Maya|TEX_normal_map":r.normalMap=s.getTexture(t,o.ID);break;case"ReflectionColor":r.envMap=s.getTexture(t,o.ID),r.envMap!==void 0&&(r.envMap.mapping=Is,r.envMap.colorSpace=ut);break;case"SpecularColor":r.specularMap=s.getTexture(t,o.ID),r.specularMap!==void 0&&(r.specularMap.colorSpace=ut);break;case"TransparentColor":case"TransparencyFactor":r.alphaMap=s.getTexture(t,o.ID),r.transparent=!0;break;case"AmbientColor":case"ShininessExponent":case"SpecularFactor":case"VectorDisplacementColor":default:console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.",a);break}}),r}getTexture(e,t){return"LayeredTexture"in tt.Objects&&t in tt.Objects.LayeredTexture&&(console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."),t=Vt.get(t).children[0].ID),e.get(t)}parseDeformers(){let e={},t={};if("Deformer"in tt.Objects){let n=tt.Objects.Deformer;for(let r in n){let s=n[r],o=Vt.get(parseInt(r));if(s.attrType==="Skin"){let a=this.parseSkeleton(o,n);a.ID=r,o.parents.length>1&&console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."),a.geometryID=o.parents[0].ID,e[r]=a}else if(s.attrType==="BlendShape"){let a={id:r};a.rawTargets=this.parseMorphTargets(o,n),a.id=r,o.parents.length>1&&console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."),t[r]=a}}}return{skeletons:e,morphTargets:t}}parseSkeleton(e,t){let n=[];return e.children.forEach(function(r){let s=t[r.ID];if(s.attrType!=="Cluster")return;let o={ID:r.ID,indices:[],weights:[],transformLink:new oe().fromArray(s.TransformLink.a)};"Indexes"in s&&(o.indices=s.Indexes.a,o.weights=s.Weights.a),n.push(o)}),{rawBones:n,bones:[]}}parseMorphTargets(e,t){let n=[];for(let r=0;r<e.children.length;r++){let s=e.children[r],o=t[s.ID],a={name:o.attrName,initialWeight:o.DeformPercent,id:o.id,fullWeights:o.FullWeights.a};if(o.attrType!=="BlendShapeChannel")return;a.geoID=Vt.get(parseInt(s.ID)).children.filter(function(l){return l.relationship===void 0})[0].ID,n.push(a)}return n}parseScene(e,t,n){$t=new Tt;let r=this.parseModels(e.skeletons,t,n),s=tt.Objects.Model,o=this;r.forEach(function(h){let d=s[h.ID];o.setLookAtProperties(h,d),Vt.get(h.ID).parents.forEach(function(p){let _=r.get(p.ID);_!==void 0&&_.add(h)}),h.parent===null&&$t.add(h)}),this.addGlobalSceneSettings(),$t.traverse(function(h){if(h.userData.transformData){h.parent&&(h.userData.transformData.parentMatrix=h.parent.matrix,h.userData.transformData.parentMatrixWorld=h.parent.matrixWorld);let d=qp(h.userData.transformData);h.applyMatrix4(d),h.updateWorldMatrix()}});let a=this.parsePoseNodes(),l=new Set;for(let h in e.skeletons)e.skeletons[h].rawBones.forEach(function(d,f){let p=e.skeletons[h].bones[f];p&&l.add(p.ID)});let c=new oe;$t.traverse(function(h){if(h.isBone&&h.ID!==void 0&&!l.has(h.ID)){let d=a[h.ID];d!==void 0&&(h.parent?(c.copy(h.parent.matrixWorld).invert(),c.multiply(d)):c.copy(d),c.decompose(h.position,h.quaternion,h.scale),h.updateMatrix(),h.matrixWorld.copy(d))}}),this.bindSkeleton(e.skeletons,t,r);let u=new uh(this.trimAnimationClips).parse();$t.children.length===1&&$t.children[0].isGroup&&($t.children[0].animations=u,Object.assign($t.children[0].userData,$t.userData),$t=$t.children[0]),$t.animations=u,"GlobalSettings"in tt&&"UpAxis"in tt.GlobalSettings&&tt.GlobalSettings.UpAxis.value===2&&(console.warn("THREE.FBXLoader: You are loading an asset with a Z-UP coordinate system. The loader just rotates the asset to transform it into Y-UP. The vertex data are not converted."),$t.rotation.set(-Math.PI/2,0,0))}parseModels(e,t,n){let r=new Map,s=tt.Objects.Model;for(let o in s){let a=parseInt(o),l=s[o],c=Vt.get(a),u=this.buildSkeleton(c,e,a,l.attrName);if(!u){switch(l.attrType){case"Camera":u=this.createCamera(c);break;case"Light":u=this.createLight(c);break;case"Mesh":u=this.createMesh(c,t,n);break;case"NurbsCurve":u=this.createCurve(c,t);break;case"LimbNode":case"Root":u=new Oi;break;case"Null":default:u=new Tt;break}u.name=l.attrName?pt.sanitizeNodeName(l.attrName):"",u.userData.originalName=l.attrName,u.ID=a}this.getTransformData(u,l),r.set(a,u)}return r}buildSkeleton(e,t,n,r){let s=null;return e.parents.forEach(function(o){for(let a in t){let l=t[a];l.rawBones.forEach(function(c,u){if(c.ID===o.ID){let h=s;s=new Oi,s.matrixWorld.copy(c.transformLink),s.name=r?pt.sanitizeNodeName(r):"",s.userData.originalName=r,s.ID=n,l.bones[u]=s,h!==null&&s.add(h)}})}}),s}createCamera(e){let t,n;if(e.children.forEach(function(r){let s=tt.Objects.NodeAttribute[r.ID];s!==void 0&&(n=s)}),n===void 0)t=new ct;else{let r=0;n.CameraProjectionType!==void 0&&n.CameraProjectionType.value===1&&(r=1);let s=1;n.NearPlane!==void 0&&(s=n.NearPlane.value/1e3);let o=1e3;n.FarPlane!==void 0&&(o=n.FarPlane.value/1e3);let a=window.innerWidth,l=window.innerHeight;n.AspectWidth!==void 0&&n.AspectHeight!==void 0&&(a=n.AspectWidth.value,l=n.AspectHeight.value);let c=a/l,u=45;n.FieldOfView!==void 0&&(u=n.FieldOfView.value);let h=n.FocalLength?n.FocalLength.value:null;switch(r){case 0:t=new jt(u,c,s,o),h!==null&&t.setFocalLength(h);break;case 1:console.warn("THREE.FBXLoader: Orthographic cameras not supported yet."),t=new ct;break;default:console.warn("THREE.FBXLoader: Unknown camera type "+r+"."),t=new ct;break}}return t}createLight(e){let t,n;if(e.children.forEach(function(r){let s=tt.Objects.NodeAttribute[r.ID];s!==void 0&&(n=s)}),n===void 0)t=new ct;else{let r;n.LightType===void 0?r=0:r=n.LightType.value;let s=16777215;n.Color!==void 0&&(s=je.colorSpaceToWorking(new ue().fromArray(n.Color.value),ut));let o=n.Intensity===void 0?1:n.Intensity.value/100;n.CastLightOnObject!==void 0&&n.CastLightOnObject.value===0&&(o=0);let a=0;n.FarAttenuationEnd!==void 0&&(n.EnableFarAttenuation!==void 0&&n.EnableFarAttenuation.value===0?a=0:a=n.FarAttenuationEnd.value);let l=1;switch(r){case 0:t=new fi(s,o,a,l);break;case 1:t=new ki(s,o);break;case 2:let c=Math.PI/3,u=0;n.OuterAngle!==void 0?(c=Ze.degToRad(n.OuterAngle.value),n.InnerAngle!==void 0&&(u=1-n.InnerAngle.value/n.OuterAngle.value,u=Math.max(0,u))):n.InnerAngle!==void 0&&(c=Ze.degToRad(n.InnerAngle.value)),t=new Br(s,o,a,c,u,l);break;default:console.warn("THREE.FBXLoader: Unknown light type "+n.LightType.value+", defaulting to a PointLight."),t=new fi(s,o);break}n.CastShadows!==void 0&&n.CastShadows.value===1&&(t.castShadow=!0)}return t}createMesh(e,t,n){let r,s=null,o=null,a=[];if(e.children.forEach(function(l){t.has(l.ID)&&(s=t.get(l.ID)),n.has(l.ID)&&a.push(n.get(l.ID))}),a.length>1?o=a:a.length>0?o=a[0]:(o=new ar({name:Rn.DEFAULT_MATERIAL_NAME,color:13421772}),a.push(o)),"color"in s.attributes&&a.forEach(function(l){l.vertexColors=!0}),s.groups.length>0){let l=!1;for(let c=0,u=s.groups.length;c<u;c++){let h=s.groups[c];(h.materialIndex<0||h.materialIndex>=a.length)&&(h.materialIndex=a.length,l=!0)}if(l){let c=new ar;a.push(c)}}return s.FBX_Deformer?(r=new Bn(s,o),r.normalizeSkinWeights()):r=new mt(s,o),r}createCurve(e,t){let n=e.children.reduce(function(s,o){return t.has(o.ID)&&(s=t.get(o.ID)),s},null),r=new un({name:Rn.DEFAULT_MATERIAL_NAME,color:3342591,linewidth:1});return new Qn(n,r)}getTransformData(e,t){let n={};"InheritType"in t&&(n.inheritType=parseInt(t.InheritType.value)),"RotationOrder"in t?n.eulerOrder=Ko(t.RotationOrder.value):n.eulerOrder=Ko(0),"Lcl_Translation"in t&&(n.translation=t.Lcl_Translation.value),"PreRotation"in t&&(n.preRotation=t.PreRotation.value),"Lcl_Rotation"in t&&(n.rotation=t.Lcl_Rotation.value),"PostRotation"in t&&(n.postRotation=t.PostRotation.value),"Lcl_Scaling"in t&&(n.scale=t.Lcl_Scaling.value),"ScalingOffset"in t&&(n.scalingOffset=t.ScalingOffset.value),"ScalingPivot"in t&&(n.scalingPivot=t.ScalingPivot.value),"RotationOffset"in t&&(n.rotationOffset=t.RotationOffset.value),"RotationPivot"in t&&(n.rotationPivot=t.RotationPivot.value),e.userData.transformData=n}setLookAtProperties(e,t){"LookAtProperty"in t&&Vt.get(e.ID).children.forEach(function(r){if(r.relationship==="LookAtProperty"){let s=tt.Objects.Model[r.ID];if("Lcl_Translation"in s){let o=s.Lcl_Translation.value;e.target!==void 0?(e.target.position.fromArray(o),$t.add(e.target)):e.lookAt(new A().fromArray(o))}}})}bindSkeleton(e,t,n){for(let r in e){let s=e[r],o=[];for(let l=0,c=s.bones.length;l<c;l++){let u=new oe;s.bones[l]&&s.rawBones[l]&&u.copy(s.rawBones[l].transformLink).invert(),o.push(u)}Vt.get(parseInt(s.ID)).parents.forEach(function(l){if(t.has(l.ID)){let c=l.ID;Vt.get(c).parents.forEach(function(h){if(n.has(h.ID)){let d=n.get(h.ID);d.updateMatrixWorld(!0),d.bind(new Ln(s.bones,o),d.matrixWorld)}})}})}}parsePoseNodes(){let e={};if("Pose"in tt.Objects){let t=tt.Objects.Pose;for(let n in t)if(t[n].attrType==="BindPose"&&t[n].NbPoseNodes>0){let r=t[n].PoseNode;Array.isArray(r)?r.forEach(function(s){e[s.Node]=new oe().fromArray(s.Matrix.a)}):e[r.Node]=new oe().fromArray(r.Matrix.a)}}return e}addGlobalSceneSettings(){if("GlobalSettings"in tt){if("AmbientColor"in tt.GlobalSettings){let e=tt.GlobalSettings.AmbientColor.value,t=e[0],n=e[1],r=e[2];if(t!==0||n!==0||r!==0){let s=new ue().setRGB(t,n,r,ut);$t.add(new Hr(s,1))}}"UnitScaleFactor"in tt.GlobalSettings&&($t.userData.unitScaleFactor=tt.GlobalSettings.UnitScaleFactor.value)}}},ch=class{constructor(){this.negativeMaterialIndices=!1}parse(e){let t=new Map;if("Geometry"in tt.Objects){let n=tt.Objects.Geometry;for(let r in n){let s=Vt.get(parseInt(r)),o=this.parseGeometry(s,n[r],e);t.set(parseInt(r),o)}}return this.negativeMaterialIndices===!0&&console.warn("THREE.FBXLoader: The FBX file contains invalid (negative) material indices. The asset might not render as expected."),t}parseGeometry(e,t,n){switch(t.attrType){case"Mesh":return this.parseMeshGeometry(e,t,n);case"NurbsCurve":return this.parseNurbsGeometry(t)}}parseMeshGeometry(e,t,n){let r=n.skeletons,s=[],o=e.parents.map(function(h){return tt.Objects.Model[h.ID]});if(o.length===0)return;let a=e.children.reduce(function(h,d){return r[d.ID]!==void 0&&(h=r[d.ID]),h},null);e.children.forEach(function(h){n.morphTargets[h.ID]!==void 0&&s.push(n.morphTargets[h.ID])});let l=o[0],c={};"RotationOrder"in l&&(c.eulerOrder=Ko(l.RotationOrder.value)),"InheritType"in l&&(c.inheritType=parseInt(l.InheritType.value)),"GeometricTranslation"in l&&(c.translation=l.GeometricTranslation.value),"GeometricRotation"in l&&(c.rotation=l.GeometricRotation.value),"GeometricScaling"in l&&(c.scale=l.GeometricScaling.value);let u=qp(c);return this.genGeometry(t,a,s,u)}genGeometry(e,t,n,r){let s=new et;e.attrName&&(s.name=e.attrName);let o=this.parseGeoNode(e,t),a=this.genBuffers(o),l=new At(a.vertex,3);if(l.applyMatrix4(r),s.setAttribute("position",l),a.colors.length>0&&s.setAttribute("color",new At(a.colors,3)),t&&(s.setAttribute("skinIndex",new Cr(a.weightsIndices,4)),s.setAttribute("skinWeight",new At(a.vertexWeights,4)),s.FBX_Deformer=t),a.normal.length>0){let c=new Le().getNormalMatrix(r),u=new At(a.normal,3);u.applyNormalMatrix(c),s.setAttribute("normal",u)}if(a.uvs.forEach(function(c,u){let h=u===0?"uv":`uv${u}`;s.setAttribute(h,new At(a.uvs[u],2))}),o.material&&o.material.mappingType!=="AllSame"){let c=a.materialIndex[0],u=0;if(a.materialIndex.forEach(function(h,d){h!==c&&(s.addGroup(u,d-u,c),c=h,u=d)}),s.groups.length>0){let h=s.groups[s.groups.length-1],d=h.start+h.count;d!==a.materialIndex.length&&s.addGroup(d,a.materialIndex.length-d,c)}s.groups.length===0&&s.addGroup(0,a.materialIndex.length,a.materialIndex[0])}return this.addMorphTargets(s,e,n,r),s}parseGeoNode(e,t){let n={};if(n.vertexPositions=e.Vertices!==void 0?e.Vertices.a:[],n.vertexIndices=e.PolygonVertexIndex!==void 0?e.PolygonVertexIndex.a:[],e.LayerElementColor&&e.LayerElementColor[0].Colors&&(n.color=this.parseVertexColors(e.LayerElementColor[0])),e.LayerElementMaterial&&(n.material=this.parseMaterialIndices(e.LayerElementMaterial[0])),e.LayerElementNormal&&(n.normal=this.parseNormals(e.LayerElementNormal[0])),e.LayerElementUV){n.uv=[];let r=0;for(;e.LayerElementUV[r];)e.LayerElementUV[r].UV&&n.uv.push(this.parseUVs(e.LayerElementUV[r])),r++}return n.weightTable={},t!==null&&(n.skeleton=t,t.rawBones.forEach(function(r,s){r.indices.forEach(function(o,a){n.weightTable[o]===void 0&&(n.weightTable[o]=[]),n.weightTable[o].push({id:s,weight:r.weights[a]})})})),n}genBuffers(e){let t={vertex:[],normal:[],colors:[],uvs:[],materialIndex:[],vertexWeights:[],weightsIndices:[]},n=0,r=0,s=!1,o=[],a=[],l=[],c=[],u=[],h=[],d=this;return e.vertexIndices.forEach(function(f,p){let _,m=!1;f<0&&(f=f^-1,m=!0);let g=[],y=[];if(o.push(f*3,f*3+1,f*3+2),e.color){let M=ec(p,n,f,e.color);l.push(M[0],M[1],M[2])}if(e.skeleton){if(e.weightTable[f]!==void 0&&e.weightTable[f].forEach(function(M){y.push(M.weight),g.push(M.id)}),y.length>4){s||(console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."),s=!0);let M=[0,0,0,0],x=[0,0,0,0];y.forEach(function(w,b){let v=w,T=g[b];x.forEach(function(O,C,I){if(v>O){I[C]=v,v=O;let U=M[C];M[C]=T,T=U}})}),g=M,y=x}for(;y.length<4;)y.push(0),g.push(0);for(let M=0;M<4;++M)u.push(y[M]),h.push(g[M])}if(e.normal){let M=ec(p,n,f,e.normal);a.push(M[0],M[1],M[2])}e.material&&e.material.mappingType!=="AllSame"&&(_=ec(p,n,f,e.material)[0],_<0&&(d.negativeMaterialIndices=!0,_=0)),e.uv&&e.uv.forEach(function(M,x){let w=ec(p,n,f,M);c[x]===void 0&&(c[x]=[]),c[x].push(w[0]),c[x].push(w[1])}),r++,m&&(d.genFace(t,e,o,_,a,l,c,u,h,r),n++,r=0,o=[],a=[],l=[],c=[],u=[],h=[])}),t}getNormalNewell(e){let t=new A(0,0,0);for(let n=0;n<e.length;n++){let r=e[n],s=e[(n+1)%e.length];t.x+=(r.y-s.y)*(r.z+s.z),t.y+=(r.z-s.z)*(r.x+s.x),t.z+=(r.x-s.x)*(r.y+s.y)}return t.normalize(),t}getNormalTangentAndBitangent(e){let t=this.getNormalNewell(e),r=(Math.abs(t.z)>.5?new A(0,1,0):new A(0,0,1)).cross(t).normalize(),s=t.clone().cross(r).normalize();return{normal:t,tangent:r,bitangent:s}}flattenVertex(e,t,n){return new Ve(e.dot(t),e.dot(n))}genFace(e,t,n,r,s,o,a,l,c,u){let h;if(u>3){let d=[],f=t.baseVertexPositions||t.vertexPositions;for(let g=0;g<n.length;g+=3)d.push(new A(f[n[g]],f[n[g+1]],f[n[g+2]]));let{tangent:p,bitangent:_}=this.getNormalTangentAndBitangent(d),m=[];for(let g of d)m.push(this.flattenVertex(g,p,_));h=Ro.triangulateShape(m,[])}else h=[[0,1,2]];for(let[d,f,p]of h)e.vertex.push(t.vertexPositions[n[d*3]]),e.vertex.push(t.vertexPositions[n[d*3+1]]),e.vertex.push(t.vertexPositions[n[d*3+2]]),e.vertex.push(t.vertexPositions[n[f*3]]),e.vertex.push(t.vertexPositions[n[f*3+1]]),e.vertex.push(t.vertexPositions[n[f*3+2]]),e.vertex.push(t.vertexPositions[n[p*3]]),e.vertex.push(t.vertexPositions[n[p*3+1]]),e.vertex.push(t.vertexPositions[n[p*3+2]]),t.skeleton&&(e.vertexWeights.push(l[d*4]),e.vertexWeights.push(l[d*4+1]),e.vertexWeights.push(l[d*4+2]),e.vertexWeights.push(l[d*4+3]),e.vertexWeights.push(l[f*4]),e.vertexWeights.push(l[f*4+1]),e.vertexWeights.push(l[f*4+2]),e.vertexWeights.push(l[f*4+3]),e.vertexWeights.push(l[p*4]),e.vertexWeights.push(l[p*4+1]),e.vertexWeights.push(l[p*4+2]),e.vertexWeights.push(l[p*4+3]),e.weightsIndices.push(c[d*4]),e.weightsIndices.push(c[d*4+1]),e.weightsIndices.push(c[d*4+2]),e.weightsIndices.push(c[d*4+3]),e.weightsIndices.push(c[f*4]),e.weightsIndices.push(c[f*4+1]),e.weightsIndices.push(c[f*4+2]),e.weightsIndices.push(c[f*4+3]),e.weightsIndices.push(c[p*4]),e.weightsIndices.push(c[p*4+1]),e.weightsIndices.push(c[p*4+2]),e.weightsIndices.push(c[p*4+3])),t.color&&(e.colors.push(o[d*3]),e.colors.push(o[d*3+1]),e.colors.push(o[d*3+2]),e.colors.push(o[f*3]),e.colors.push(o[f*3+1]),e.colors.push(o[f*3+2]),e.colors.push(o[p*3]),e.colors.push(o[p*3+1]),e.colors.push(o[p*3+2])),t.material&&t.material.mappingType!=="AllSame"&&(e.materialIndex.push(r),e.materialIndex.push(r),e.materialIndex.push(r)),t.normal&&(e.normal.push(s[d*3]),e.normal.push(s[d*3+1]),e.normal.push(s[d*3+2]),e.normal.push(s[f*3]),e.normal.push(s[f*3+1]),e.normal.push(s[f*3+2]),e.normal.push(s[p*3]),e.normal.push(s[p*3+1]),e.normal.push(s[p*3+2])),t.uv&&t.uv.forEach(function(_,m){e.uvs[m]===void 0&&(e.uvs[m]=[]),e.uvs[m].push(a[m][d*2]),e.uvs[m].push(a[m][d*2+1]),e.uvs[m].push(a[m][f*2]),e.uvs[m].push(a[m][f*2+1]),e.uvs[m].push(a[m][p*2]),e.uvs[m].push(a[m][p*2+1])})}addMorphTargets(e,t,n,r){if(n.length===0)return;e.morphTargetsRelative=!0,e.morphAttributes.position=[];let s=r.clone().setPosition(0,0,0),o=this;n.forEach(function(a){a.rawTargets.forEach(function(l){let c=tt.Objects.Geometry[l.geoID];c!==void 0&&o.genMorphGeometry(e,t,c,s,l.name)})})}genMorphGeometry(e,t,n,r,s){let o=t.Vertices!==void 0?t.Vertices.a:[],a=t.PolygonVertexIndex!==void 0?t.PolygonVertexIndex.a:[],l=n.Vertices!==void 0?n.Vertices.a:[],c=n.Indexes!==void 0?n.Indexes.a:[],u=e.attributes.position.count*3,h=new Float32Array(u);for(let _=0;_<c.length;_++){let m=c[_]*3;h[m]=l[_*3],h[m+1]=l[_*3+1],h[m+2]=l[_*3+2]}let d={vertexIndices:a,vertexPositions:h,baseVertexPositions:o},f=this.genBuffers(d),p=new At(f.vertex,3);p.name=s||n.attrName,p.applyMatrix4(r),e.morphAttributes.position.push(p)}parseNormals(e){let t=e.MappingInformationType,n=e.ReferenceInformationType,r=e.Normals.a,s=[];return n==="IndexToDirect"&&("NormalIndex"in e?s=e.NormalIndex.a:"NormalsIndex"in e&&(s=e.NormalsIndex.a)),{dataSize:3,buffer:r,indices:s,mappingType:t,referenceType:n}}parseUVs(e){let t=e.MappingInformationType,n=e.ReferenceInformationType,r=e.UV.a,s=[];return n==="IndexToDirect"&&(s=e.UVIndex.a),{dataSize:2,buffer:r,indices:s,mappingType:t,referenceType:n}}parseVertexColors(e){let t=e.MappingInformationType,n=e.ReferenceInformationType,r=e.Colors.a,s=[];n==="IndexToDirect"&&(s=e.ColorIndex.a);for(let o=0,a=new ue;o<r.length;o+=4)a.fromArray(r,o),je.colorSpaceToWorking(a,ut),a.toArray(r,o);return{dataSize:4,buffer:r,indices:s,mappingType:t,referenceType:n}}parseMaterialIndices(e){let t=e.MappingInformationType,n=e.ReferenceInformationType;if(t==="NoMappingInformation")return{dataSize:1,buffer:[0],indices:[0],mappingType:"AllSame",referenceType:n};let r=e.Materials.a,s=[];for(let o=0;o<r.length;++o)s.push(o);return{dataSize:1,buffer:r,indices:s,mappingType:t,referenceType:n}}parseNurbsGeometry(e){let t=parseInt(e.Order);if(isNaN(t))return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s",e.Order,e.id),new et;let n=t-1,r=e.KnotVector.a,s=[],o=e.Points.a;for(let h=0,d=o.length;h<d;h+=4)s.push(new lt().fromArray(o,h));let a,l;if(e.Form==="Closed")s.push(s[0]);else if(e.Form==="Periodic"){a=n,l=r.length-1-a;for(let h=0;h<n;++h)s.push(s[h])}let u=new Ql(n,r,s,a,l).getPoints(s.length*12);return new et().setFromPoints(u)}},uh=class{constructor(e){this.trimAnimationClips=e}parse(){let e=[],t=this.parseClips();if(t!==void 0)for(let n in t){let r=t[n],s=this.addClip(r);e.push(s)}return e}parseClips(){if(tt.Objects.AnimationCurve===void 0)return;let e=this.parseAnimationCurveNodes();this.parseAnimationCurves(e);let t=this.parseAnimationLayers(e);return this.parseAnimStacks(t)}parseAnimationCurveNodes(){let e=tt.Objects.AnimationCurveNode,t=new Map;for(let n in e){let r=e[n];if(r.attrName.match(/S|R|T|DeformPercent/)!==null){let s={id:r.id,attr:r.attrName,curves:{}};t.set(s.id,s)}}return t}parseAnimationCurves(e){let t=tt.Objects.AnimationCurve;for(let n in t){let r={id:t[n].id,times:t[n].KeyTime.a.map(sh),values:t[n].KeyValueFloat.a},s=Vt.get(r.id);if(s!==void 0){let o=s.parents[0].ID,a=s.parents[0].relationship;a.match(/X/)?e.get(o).curves.x=r:a.match(/Y/)?e.get(o).curves.y=r:a.match(/Z/)?e.get(o).curves.z=r:a.match(/DeformPercent/)&&e.has(o)&&(e.get(o).curves.morph=r)}}}parseAnimationLayers(e){let t=tt.Objects.AnimationLayer,n=new Map;for(let r in t){let s=[],o=Vt.get(parseInt(r));o!==void 0&&(o.children.forEach(function(l,c){if(e.has(l.ID)){let u=e.get(l.ID);if(u.curves.x!==void 0||u.curves.y!==void 0||u.curves.z!==void 0){if(s[c]===void 0){let h=Vt.get(l.ID).parents.filter(function(f){return f.relationship!==void 0});if(h.length===0)return;let d=h[0].ID;if(d!==void 0){let f=tt.Objects.Model[d.toString()];if(f===void 0){console.warn("THREE.FBXLoader: Encountered a unused curve.",l);return}let p={modelName:f.attrName?pt.sanitizeNodeName(f.attrName):"",ID:f.id,initialPosition:[0,0,0],initialRotation:[0,0,0],initialScale:[1,1,1]};$t.traverse(function(_){_.ID===f.id&&(p.transform=_.matrix,_.userData.transformData&&(p.eulerOrder=_.userData.transformData.eulerOrder,_.userData.transformData.rotation&&(p.initialRotation=_.userData.transformData.rotation)))}),p.transform||(p.transform=new oe),"PreRotation"in f&&(p.preRotation=f.PreRotation.value),"PostRotation"in f&&(p.postRotation=f.PostRotation.value),s[c]=p}}s[c]&&(s[c][u.attr]=u)}else if(u.curves.morph!==void 0){if(s[c]===void 0){let h=Vt.get(l.ID).parents.filter(function(y){return y.relationship!==void 0});if(h.length===0)return;let d=h[0].ID,f=Vt.get(d).parents[0].ID,p=Vt.get(f).parents[0].ID,_=Vt.get(p).parents[0].ID,m=tt.Objects.Model[_],g={modelName:m.attrName?pt.sanitizeNodeName(m.attrName):"",morphName:tt.Objects.Deformer[d].attrName};s[c]=g}s[c][u.attr]=u}}}),n.set(parseInt(r),s))}return n}parseAnimStacks(e){let t=tt.Objects.AnimationStack,n={};for(let r in t){let s=Vt.get(parseInt(r)).children;s.length>1&&console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");let o=e.get(s[0].ID),a=t[r];n[r]={name:a.attrName,layer:o,localStart:a.LocalStart!==void 0?sh(Number(a.LocalStart.value)):0,localStop:a.LocalStop!==void 0?sh(Number(a.LocalStop.value)):0}}return n}addClip(e){let t=[],n=this;return e.layer.forEach(function(r){t=t.concat(n.generateTracks(r))}),this.trimAnimationClips===!0&&e.localStop>e.localStart&&(t=this.trimTracks(t,e.localStart,e.localStop)),new Bi(e.name,-1,t)}trimTracks(e,t,n){let r=Math.fround(t),s=Math.fround(n),o=[];for(let a=0;a<e.length;a++){let l=e[a],c=l.getValueSize(),u=[],h=[];for(let d=0;d<l.times.length;d++){let f=l.times[d];if(!(f<r||f>s)){u.push(f-r);for(let p=0;p<c;p++)h.push(l.values[d*c+p])}}u.length!==0&&(l.times=new Float32Array(u),l.values=new Float32Array(h),o.push(l))}return o}generateTracks(e){let t=[],n=new A,r=new A;if(e.transform&&e.transform.decompose(n,new me,r),n=n.toArray(),r=r.toArray(),e.T!==void 0&&Object.keys(e.T.curves).length>0){let s=this.generateVectorTrack(e.modelName,e.T.curves,n,"position");s!==void 0&&t.push(s)}if(e.R!==void 0&&Object.keys(e.R.curves).length>0){let s=this.generateRotationTrack(e.modelName,e.R.curves,e.preRotation,e.postRotation,e.eulerOrder,e.initialRotation);s!==void 0&&t.push(s)}if(e.S!==void 0&&Object.keys(e.S.curves).length>0){let s=this.generateVectorTrack(e.modelName,e.S.curves,r,"scale");s!==void 0&&t.push(s)}if(e.DeformPercent!==void 0){let s=this.generateMorphTrack(e);s!==void 0&&t.push(s)}return t}generateVectorTrack(e,t,n,r){let s=this.getTimesForAllAxes(t),o=this.getKeyframeTrackValues(s,t,n);return new di(e+"."+r,s,o)}generateRotationTrack(e,t,n,r,s,o){let a,l;if(t.x!==void 0||t.y!==void 0||t.z!==void 0){let f=this.getTimesForAllAxes(t);if(f.length>0){let p=o||[0,0,0],_=this.synchronizeCurve(t.x,f,p[0]),m=this.synchronizeCurve(t.y,f,p[1]),g=this.synchronizeCurve(t.z,f,p[2]),y=this.interpolateRotations(_,m,g,s);a=y[0],l=y[1]}}let c=Ko(0);n!==void 0&&(n=n.map(Ze.degToRad),n.push(c),n=new bt().fromArray(n),n=new me().setFromEuler(n)),r!==void 0&&(r=r.map(Ze.degToRad),r.push(c),r=new bt().fromArray(r),r=new me().setFromEuler(r).invert());let u=new me,h=new bt,d=[];if(!(!l||!a)){for(let f=0;f<l.length;f+=3)h.set(l[f],l[f+1],l[f+2],s),u.setFromEuler(h),n!==void 0&&u.premultiply(n),r!==void 0&&u.multiply(r),f>2&&new me().fromArray(d,(f-3)/3*4).dot(u)<0&&u.set(-u.x,-u.y,-u.z,-u.w),u.toArray(d,f/3*4);return new ni(e+".quaternion",a,d)}}generateMorphTrack(e){let t=e.DeformPercent.curves.morph,n=t.values.map(function(s){return s/100}),r=$t.getObjectByName(e.modelName).morphTargetDictionary[e.morphName];return new ti(e.modelName+".morphTargetInfluences["+r+"]",t.times,n)}getTimesForAllAxes(e){let t=[];if(e.x!==void 0&&(t=t.concat(e.x.times)),e.y!==void 0&&(t=t.concat(e.y.times)),e.z!==void 0&&(t=t.concat(e.z.times)),t=t.sort(function(n,r){return n-r}),t.length>1){let n=1,r=t[0];for(let s=1;s<t.length;s++){let o=t[s];o!==r&&(t[n]=o,r=o,n++)}t=t.slice(0,n)}return t}getKeyframeTrackValues(e,t,n){let r=n,s=[],o=-1,a=-1,l=-1;return e.forEach(function(c){if(t.x&&(o=t.x.times.indexOf(c)),t.y&&(a=t.y.times.indexOf(c)),t.z&&(l=t.z.times.indexOf(c)),o!==-1){let u=t.x.values[o];s.push(u),r[0]=u}else s.push(r[0]);if(a!==-1){let u=t.y.values[a];s.push(u),r[1]=u}else s.push(r[1]);if(l!==-1){let u=t.z.values[l];s.push(u),r[2]=u}else s.push(r[2])}),s}synchronizeCurve(e,t,n){if(e===void 0)return{times:t,values:t.map(()=>n)};if(e.times.length===t.length)return e;let r=[];for(let s=0;s<t.length;s++)r.push(this.sampleCurveValue(e,t[s],n));return{times:t,values:r}}sampleCurveValue(e,t,n){let r=e.times,s=e.values;if(t<=r[0])return s[0];if(t>=r[r.length-1])return s[s.length-1];for(let o=0;o<r.length-1;o++)if(t>=r[o]&&t<=r[o+1]){if(r[o]===t)return s[o];let a=(t-r[o])/(r[o+1]-r[o]);return s[o]*(1-a)+s[o+1]*a}return n}interpolateRotations(e,t,n,r){let s=[],o=[];s.push(e.times[0]),o.push(Ze.degToRad(e.values[0])),o.push(Ze.degToRad(t.values[0])),o.push(Ze.degToRad(n.values[0]));for(let a=1;a<e.values.length;a++){let l=[e.values[a-1],t.values[a-1],n.values[a-1]];if(isNaN(l[0])||isNaN(l[1])||isNaN(l[2]))continue;let c=l.map(Ze.degToRad),u=[e.values[a],t.values[a],n.values[a]];if(isNaN(u[0])||isNaN(u[1])||isNaN(u[2]))continue;let h=u.map(Ze.degToRad),d=[u[0]-l[0],u[1]-l[1],u[2]-l[2]],f=[Math.abs(d[0]),Math.abs(d[1]),Math.abs(d[2])];if(f[0]>=180||f[1]>=180||f[2]>=180){let _=Math.max(...f)/180,m=new bt(...c,r),g=new bt(...h,r),y=new me().setFromEuler(m),M=new me().setFromEuler(g);y.dot(M)<0&&M.set(-M.x,-M.y,-M.z,-M.w);let x=e.times[a-1],w=e.times[a]-x,b=new me,v=new bt;for(let T=0;T<1;T+=1/_)b.copy(y.clone().slerp(M.clone(),T)),s.push(x+T*w),v.setFromQuaternion(b,r),o.push(v.x),o.push(v.y),o.push(v.z)}else s.push(e.times[a]),o.push(Ze.degToRad(e.values[a])),o.push(Ze.degToRad(t.values[a])),o.push(Ze.degToRad(n.values[a]))}return[s,o]}},hh=class{getPrevNode(){return this.nodeStack[this.currentIndent-2]}getCurrentNode(){return this.nodeStack[this.currentIndent-1]}getCurrentProp(){return this.currentProp}pushStack(e){this.nodeStack.push(e),this.currentIndent+=1}popStack(){this.nodeStack.pop(),this.currentIndent-=1}setCurrentProp(e,t){this.currentProp=e,this.currentPropName=t}parse(e){this.currentIndent=0,this.allNodes=new ic,this.nodeStack=[],this.currentProp=[],this.currentPropName="";let t=this,n=e.split(/[\r\n]+/);return n.forEach(function(r,s){let o=r.match(/^[\s\t]*;/),a=r.match(/^[\s\t]*$/);if(o||a)return;let l=r.match("^\\t{"+t.currentIndent+"}(\\w+):(.*){",""),c=r.match("^\\t{"+t.currentIndent+"}(\\w+):[\\s\\t\\r\\n](.*)"),u=r.match("^\\t{"+(t.currentIndent-1)+"}}");l?t.parseNodeBegin(r,l):c?t.parseNodeProperty(r,c,n[++s]):u?t.popStack():r.match(/^[^\s\t}]/)&&t.parseNodePropertyContinued(r)}),this.allNodes}parseNodeBegin(e,t){let n=t[1].trim().replace(/^"/,"").replace(/"$/,""),r=t[2].split(",").map(function(l){return l.trim().replace(/^"/,"").replace(/"$/,"")}),s={name:n},o=this.parseNodeAttr(r),a=this.getCurrentNode();this.currentIndent===0?this.allNodes.add(n,s):n in a?(n==="PoseNode"?a.PoseNode.push(s):a[n].id!==void 0&&(a[n]={},a[n][a[n].id]=a[n]),o.id!==""&&(a[n][o.id]=s)):typeof o.id=="number"?(a[n]={},a[n][o.id]=s):n!=="Properties70"&&(n==="PoseNode"?a[n]=[s]:a[n]=s),typeof o.id=="number"&&(s.id=o.id),o.name!==""&&(s.attrName=o.name),o.type!==""&&(s.attrType=o.type),this.pushStack(s)}parseNodeAttr(e){let t=e[0];e[0]!==""&&(t=parseInt(e[0]),isNaN(t)&&(t=e[0]));let n="",r="";return e.length>1&&(n=e[1].replace(/^(\w+)::/,""),r=e[2]),{id:t,name:n,type:r}}parseNodeProperty(e,t,n){let r=t[1].replace(/^"/,"").replace(/"$/,"").trim(),s=t[2].replace(/^"/,"").replace(/"$/,"").trim();r==="Content"&&s===","&&(s=n.replace(/"/g,"").replace(/,$/,"").trim());let o=this.getCurrentNode();if(o.name==="Properties70"){this.parseNodeSpecialProperty(e,r,s);return}if(r==="C"){let l=s.split(",").slice(1),c=parseInt(l[0]),u=parseInt(l[1]),h=s.split(",").slice(3);h=h.map(function(d){return d.trim().replace(/^"/,"")}),r="connections",s=[c,u],XE(s,h),o[r]===void 0&&(o[r]=[])}r==="Node"&&(o.id=s),r in o&&Array.isArray(o[r])?o[r].push(s):r!=="a"?o[r]=s:o.a=s,this.setCurrentProp(o,r),r==="a"&&s.slice(-1)!==","&&(o.a=ah(s))}parseNodePropertyContinued(e){let t=this.getCurrentNode();t.a+=e,e.slice(-1)!==","&&(t.a=ah(t.a))}parseNodeSpecialProperty(e,t,n){let r=n.split('",').map(function(u){return u.trim().replace(/^\"/,"").replace(/\s/,"_")}),s=r[0],o=r[1],a=r[2],l=r[3],c=r[4];switch(o){case"int":case"enum":case"bool":case"ULongLong":case"double":case"Number":case"FieldOfView":c=parseFloat(c);break;case"Color":case"ColorRGB":case"Vector3D":case"Lcl_Translation":case"Lcl_Rotation":case"Lcl_Scaling":c=ah(c);break}this.getPrevNode()[s]={type:o,type2:a,flag:l,value:c},this.setCurrentProp(this.getPrevNode(),s)}},dh=class{parse(e){let t=new nc(e);t.skip(23);let n=t.getUint32();if(n<6400)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+n);let r=new ic;for(;!this.endOfContent(t);){let s=this.parseNode(t,n);s!==null&&r.add(s.name,s)}return r}endOfContent(e){return e.size()%16===0?(e.getOffset()+160+16&-16)>=e.size():e.getOffset()+160+16>=e.size()}parseNode(e,t){let n={},r=t>=7500?e.getUint64():e.getUint32(),s=t>=7500?e.getUint64():e.getUint32();t>=7500?e.getUint64():e.getUint32();let o=e.getUint8(),a=e.getString(o);if(r===0)return null;let l=[];for(let d=0;d<s;d++)l.push(this.parseProperty(e));let c=l.length>0?l[0]:"",u=l.length>1?l[1]:"",h=l.length>2?l[2]:"";for(n.singleProperty=s===1&&e.getOffset()===r;r>e.getOffset();){let d=this.parseNode(e,t);d!==null&&this.parseSubNode(a,n,d)}return n.propertyList=l,typeof c=="number"&&(n.id=c),u!==""&&(n.attrName=u),h!==""&&(n.attrType=h),a!==""&&(n.name=a),n}parseSubNode(e,t,n){if(n.singleProperty===!0){let r=n.propertyList[0];Array.isArray(r)?(t[n.name]=n,n.a=r):t[n.name]=r}else if(e==="Connections"&&n.name==="C"){let r=[];n.propertyList.forEach(function(s,o){o!==0&&r.push(s)}),t.connections===void 0&&(t.connections=[]),t.connections.push(r)}else if(n.name==="Properties70")Object.keys(n).forEach(function(s){t[s]=n[s]});else if(e==="Properties70"&&n.name==="P"){let r=n.propertyList[0],s=n.propertyList[1],o=n.propertyList[2],a=n.propertyList[3],l;r.indexOf("Lcl ")===0&&(r=r.replace("Lcl ","Lcl_")),s.indexOf("Lcl ")===0&&(s=s.replace("Lcl ","Lcl_")),s==="Color"||s==="ColorRGB"||s==="Vector"||s==="Vector3D"||s.indexOf("Lcl_")===0?l=[n.propertyList[4],n.propertyList[5],n.propertyList[6]]:l=n.propertyList[4],t[r]={type:s,type2:o,flag:a,value:l}}else t[n.name]===void 0?typeof n.id=="number"?(t[n.name]={},t[n.name][n.id]=n):t[n.name]=n:n.name==="PoseNode"?(Array.isArray(t[n.name])||(t[n.name]=[t[n.name]]),t[n.name].push(n)):t[n.name][n.id]===void 0&&(t[n.name][n.id]=n)}parseProperty(e){let t=e.getString(1),n;switch(t){case"C":return e.getBoolean();case"D":return e.getFloat64();case"F":return e.getFloat32();case"I":return e.getInt32();case"L":return e.getInt64();case"R":return n=e.getUint32(),e.getArrayBuffer(n);case"S":return n=e.getUint32(),e.getString(n);case"Y":return e.getInt16();case"b":case"c":case"d":case"f":case"i":case"l":let r=e.getUint32(),s=e.getUint32(),o=e.getUint32();if(s===0)switch(t){case"b":case"c":return e.getBooleanArray(r);case"d":return e.getFloat64Array(r);case"f":return e.getFloat32Array(r);case"i":return e.getInt32Array(r);case"l":return e.getInt64Array(r)}let a=Vp(new Uint8Array(e.getArrayBuffer(o))),l=new nc(a.buffer);switch(t){case"b":case"c":return l.getBooleanArray(r);case"d":return l.getFloat64Array(r);case"f":return l.getFloat32Array(r);case"i":return l.getInt32Array(r);case"l":return l.getInt64Array(r)}break;default:throw new Error("THREE.FBXLoader: Unknown property type "+t)}}},nc=class{constructor(e,t){this.dv=new DataView(e),this.offset=0,this.littleEndian=t!==void 0?t:!0,this._textDecoder=new TextDecoder}getOffset(){return this.offset}size(){return this.dv.buffer.byteLength}skip(e){this.offset+=e}getBoolean(){return(this.getUint8()&1)===1}getBooleanArray(e){let t=[];for(let n=0;n<e;n++)t.push(this.getBoolean());return t}getUint8(){let e=this.dv.getUint8(this.offset);return this.offset+=1,e}getInt16(){let e=this.dv.getInt16(this.offset,this.littleEndian);return this.offset+=2,e}getInt32(){let e=this.dv.getInt32(this.offset,this.littleEndian);return this.offset+=4,e}getInt32Array(e){let t=[];for(let n=0;n<e;n++)t.push(this.getInt32());return t}getUint32(){let e=this.dv.getUint32(this.offset,this.littleEndian);return this.offset+=4,e}getInt64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t&2147483648?(t=~t&4294967295,e=~e&4294967295,e===4294967295&&(t=t+1&4294967295),e=e+1&4294967295,-(t*4294967296+e)):t*4294967296+e}getInt64Array(e){let t=[];for(let n=0;n<e;n++)t.push(this.getInt64());return t}getUint64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t*4294967296+e}getFloat32(){let e=this.dv.getFloat32(this.offset,this.littleEndian);return this.offset+=4,e}getFloat32Array(e){let t=[];for(let n=0;n<e;n++)t.push(this.getFloat32());return t}getFloat64(){let e=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,e}getFloat64Array(e){let t=[];for(let n=0;n<e;n++)t.push(this.getFloat64());return t}getArrayBuffer(e){let t=this.dv.buffer.slice(this.offset,this.offset+e);return this.offset+=e,t}getString(e){let t=this.offset,n=new Uint8Array(this.dv.buffer,t,e);this.skip(e);let r=n.indexOf(0);return r>=0&&(n=new Uint8Array(this.dv.buffer,t,r)),this._textDecoder.decode(n)}},ic=class{add(e,t){this[e]=t}};function zE(i){let e="Kaydara FBX Binary  \0";return i.byteLength>=e.length&&e===Yp(i,0,e.length)}function GE(i){let e=["K","a","y","d","a","r","a","\\","F","B","X","\\","B","i","n","a","r","y","\\","\\"],t=0;function n(r){let s=i[r-1];return i=i.slice(t+r),t++,s}for(let r=0;r<e.length;++r)if(n(1)===e[r])return!1;return!0}function Xp(i){let e=/FBXVersion: (\d+)/,t=i.match(e);if(t)return parseInt(t[1]);throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.")}function sh(i){return i/46186158e3}var WE=[];function ec(i,e,t,n){let r;switch(n.mappingType){case"ByPolygonVertex":r=i;break;case"ByPolygon":r=e;break;case"ByVertice":r=t;break;case"AllSame":r=n.indices[0];break;default:console.warn("THREE.FBXLoader: unknown attribute mapping type "+n.mappingType)}n.referenceType==="IndexToDirect"&&(r=n.indices[r]);let s=r*n.dataSize,o=s+n.dataSize;return qE(WE,n.buffer,s,o)}var oh=new bt,Vs=new A;function qp(i){let e=new oe,t=new oe,n=new oe,r=new oe,s=new oe,o=new oe,a=new oe,l=new oe,c=new oe,u=new oe,h=new oe,d=new oe,f=i.inheritType?i.inheritType:0;i.translation&&e.setPosition(Vs.fromArray(i.translation));let p=Ko(0);if(i.preRotation){let I=i.preRotation.map(Ze.degToRad);I.push(p),t.makeRotationFromEuler(oh.fromArray(I))}if(i.rotation){let I=i.rotation.map(Ze.degToRad);I.push(i.eulerOrder||p),n.makeRotationFromEuler(oh.fromArray(I))}if(i.postRotation){let I=i.postRotation.map(Ze.degToRad);I.push(p),r.makeRotationFromEuler(oh.fromArray(I)),r.invert()}i.scale&&s.scale(Vs.fromArray(i.scale)),i.scalingOffset&&a.setPosition(Vs.fromArray(i.scalingOffset)),i.scalingPivot&&o.setPosition(Vs.fromArray(i.scalingPivot)),i.rotationOffset&&l.setPosition(Vs.fromArray(i.rotationOffset)),i.rotationPivot&&c.setPosition(Vs.fromArray(i.rotationPivot)),i.parentMatrixWorld&&(h.copy(i.parentMatrix),u.copy(i.parentMatrixWorld));let _=t.clone().multiply(n).multiply(r),m=new oe;m.extractRotation(u);let g=new oe;g.copyPosition(u);let y=g.clone().invert().multiply(u),M=m.clone().invert().multiply(y),x=s,w=new oe;if(f===0)w.copy(m).multiply(_).multiply(M).multiply(x);else if(f===1)w.copy(m).multiply(M).multiply(_).multiply(x);else{let U=new oe().scale(new A().setFromMatrixScale(h)).clone().invert(),Y=M.clone().multiply(U);w.copy(m).multiply(_).multiply(Y).multiply(x)}let b=c.clone().invert(),v=o.clone().invert(),T=e.clone().multiply(l).multiply(c).multiply(t).multiply(n).multiply(r).multiply(b).multiply(a).multiply(o).multiply(s).multiply(v),O=new oe().copyPosition(T),C=u.clone().multiply(O);return d.copyPosition(C),T=d.clone().multiply(w),T.premultiply(u.invert()),T}function Ko(i){i=i||0;let e=["ZYX","YZX","XZY","ZXY","YXZ","XYZ"];return i===6?(console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."),e[0]):e[i]}function ah(i){return i.split(",").map(function(t){return parseFloat(t)})}function Yp(i,e,t){return e===void 0&&(e=0),t===void 0&&(t=i.byteLength),new TextDecoder().decode(new Uint8Array(i,e,t))}function XE(i,e){for(let t=0,n=i.length,r=e.length;t<r;t++,n++)i[n]=e[t]}function qE(i,e,t,n){for(let r=t,s=0;r<n;r++,s++)i[s]=e[r];return i}var rc=new ue(.86,.78,.84),jp={threshold:.525,softness:.025},Zp=(i,e=.02)=>({faceSdfMap:{value:i},faceSdfThreshold:{value:.5},faceSdfUseR:{value:1},faceSdfSoft:{value:e}});function YE(i){let e=i.power??.7;return{highColor:{value:new ue(i.color)},highColorExponent:{value:Math.pow(2,11-10*e)},highColorOnShadow:{value:i.onShadow??.5},highColorMask:{value:i.mask??null},highColorStrength:{value:i.strength??1},highColorToonEdge:{value:i.toon?1-Math.pow(e,5):-1}}}var jE=i=>({rimColor:{value:new ue(i.color)},rimWidth:{value:i.width??.2},rimSoftness:{value:i.softness??.1},rimLightMask:{value:i.lightMask??1},rimLightingMix:{value:i.lightingMix??1},...i.screen&&{...i.screen.uniforms,rimOffset:{value:i.screen.offset}}});function Kp(i){return i.wrapS=i.wrapT=ln,i.generateMipmaps=!1,i.minFilter=Nt,i.image&&(i.needsUpdate=!0),i}var $p=[["map","mapUvTransform"],["shadeMap","shadeMapUvTransform"],["lightMap","lightMapUvTransform"],["occlusionMap","occlusionMapUvTransform"],["normalMap","normalMapUvTransform"],["emissiveMap","emissiveMapUvTransform"]];function ZE(i){let e=i.ramp?.row;return{...i.ramp&&{rampMap:{value:i.ramp.map},rampRows:{value:Math.max(1,i.ramp.rows??1)},rampRow:{value:typeof e=="number"?e:0}},...i.lightMap&&{lightMap:{value:i.lightMap},lightMapStrength:{value:i.lightMapStrength??1}},...i.occlusionMap&&{occlusionMap:{value:i.occlusionMap},occlusionStrength:{value:i.occlusionStrength??.5}},...i.rim&&jE(i.rim),...i.normalMap&&{normalMap:{value:i.normalMap},normalScale:{value:(i.normalScale??new Ve(1,1)).clone()}},...i.emissive!==void 0&&{emissive:{value:new ue(i.emissive)},emissiveIntensity:{value:i.emissiveIntensity??1},emissiveMap:{value:i.emissiveMap??null}},...i.uvTransforms&&Object.fromEntries($p.map(([,t])=>[t,{value:new Le}]))}}function Jp(i){for(let[e,t]of $p){let n=i[e]?.value;!n||!i[t]||(n.matrixAutoUpdate&&n.updateMatrix(),i[t].value.copy(n.matrix))}}function Qp(i){let e=Ns.merge([Me.common,Me.lights]);return Object.assign(e,{diffuse:{value:new ue(i.color??16777215)},map:{value:i.map??null},shadeColor:{value:new ue(i.shadeColor??rc)},shadeMap:{value:i.shadeMap??null},shadowThreshold:{value:i.shadowThreshold??jp.threshold},shadowSoftness:{value:Math.max(1e-4,i.shadowSoftness??jp.softness)}},i.highColor?YE(i.highColor):{},i.faceSdf??{},ZE(i)),e.alphaTest.value=i.alphaTest??0,e.opacity.value=i.opacity??1,e}function em(i,e){let t={TOON_MAP:!!i.map,TOON_SHADE_MAP:!!i.shadeMap,TOON_RAMP:!!i.ramp,TOON_RAMP_ROW_LIGHT_MAP:!!i.ramp&&i.ramp.row==="lightMap"&&!!i.lightMap,TOON_LIGHT_MAP:!!i.lightMap,TOON_OCCLUSION_MAP:!!i.occlusionMap,TOON_RIM:!!i.rim,TOON_RIM_SCREEN:!!i.rim?.screen,TOON_FACE_SDF:!!i.faceSdf,TOON_HIGHCOLOR:!!i.highColor,TOON_HIGHCOLOR_MASK:!!i.highColor?.mask,TOON_NORMAL_MAP:!!i.normalMap,TOON_EMISSIVE:i.emissive!==void 0,TOON_EMISSIVE_MAP:i.emissive!==void 0&&!!i.emissiveMap,TOON_UV_TRANSFORM:!!i.uvTransforms,OUTLINE:!!e,OUTLINE_WIDTH_ATTRIBUTE:!!e?.widthAttribute};return Object.fromEntries(Object.entries(t).filter(([,n])=>n).map(([n])=>[n,""]))}var KE=`
// 툰 재질 정점 셰이더: 스키닝·모프는 three.js 조각, 외곽선은 법선 방향으로 부풀림 (inverted hull)
#include <common>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <normal_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vUv;
varying vec3 vViewPosition;
#ifdef TOON_BAKED_AO
  attribute float bakedAo;
  varying float vBakedAo;
#endif
#ifdef OUTLINE
  uniform float outlineWidthFactor;
  #ifdef OUTLINE_WIDTH_ATTRIBUTE
    attribute float outlineWidth;
  #endif
#endif

void main() {
  vUv = uv;
  #ifdef TOON_BAKED_AO
    vBakedAo = bakedAo;
  #endif
  #include <beginnormal_vertex>
  #include <morphnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>
  objectNormal = normalize( objectNormal );   // 외곽선 두께를 법선 길이와 무관하게
  #include <defaultnormal_vertex>
  #include <normal_vertex>
  #include <begin_vertex>
  #include <morphtarget_vertex>
  #include <skinning_vertex>
  #include <project_vertex>
  #include <clipping_planes_vertex>
  vViewPosition = - mvPosition.xyz;
  #ifdef OUTLINE
    // 외곽선: 법선 방향으로 월드 단위 두께만큼 부풀림 (모델 배율만큼 보정)
    float worldNormalLength = length( transformedNormal );
    #ifdef OUTLINE_WIDTH_ATTRIBUTE
      vec3 outlineOffset = outlineWidthFactor * outlineWidth * worldNormalLength * objectNormal;
    #else
      vec3 outlineOffset = outlineWidthFactor * worldNormalLength * objectNormal;
    #endif
    gl_Position = projectionMatrix * modelViewMatrix * vec4( outlineOffset + transformed, 1.0 );
    gl_Position.z += 1E-6 * gl_Position.w;   // 본체와 깊이가 겹쳐 깨지는 것 방지
  #endif
}
`,$E=`
// 툰 재질 조각 셰이더: 직접광은 half-Lambert 문턱값(또는 램프)으로 빛·그늘 두 색, 간접광은 바탕색만, 림·발광은 더함
uniform vec3 diffuse;
uniform float opacity;
uniform vec3 shadeColor;
uniform float shadowThreshold;
uniform float shadowSoftness;
#ifdef TOON_MAP
  uniform sampler2D map;
#endif
#ifdef TOON_SHADE_MAP
  uniform sampler2D shadeMap;
#endif
#ifdef TOON_RAMP
  uniform sampler2D rampMap;
  uniform float rampRows;
  uniform float rampRow;
#endif
#ifdef TOON_LIGHT_MAP
  uniform sampler2D lightMap;
  uniform float lightMapStrength;
#endif
#ifdef TOON_OCCLUSION_MAP
  uniform sampler2D occlusionMap;
  uniform float occlusionStrength;
#endif
#ifdef TOON_RIM
  uniform vec3 rimColor;
  uniform float rimWidth;
  uniform float rimSoftness;
  uniform float rimLightMask;
  uniform float rimLightingMix;
  #ifdef TOON_RIM_SCREEN
    uniform sampler2D rimDepth;
    uniform vec2 rimResolution;
    uniform float rimDepthThreshold;
    uniform float rimOffset;
  #endif
#endif
#ifdef TOON_FACE_SDF
  uniform sampler2D faceSdfMap;
  uniform float faceSdfThreshold;
  uniform float faceSdfUseR;
  uniform float faceSdfSoft;
#endif
#ifdef TOON_HIGHCOLOR
  uniform vec3 highColor;
  uniform float highColorExponent;
  uniform float highColorOnShadow;
  uniform float highColorStrength;
  uniform float highColorToonEdge;
  #ifdef TOON_HIGHCOLOR_MASK
    uniform sampler2D highColorMask;
  #endif
#endif
#ifdef OUTLINE
  uniform vec3 outlineColor;
  uniform float outlineLightingMix;
#endif
#ifdef TOON_NORMAL_MAP
  uniform sampler2D normalMap;
  uniform vec2 normalScale;
#endif
#ifdef TOON_EMISSIVE
  uniform vec3 emissive;
  uniform float emissiveIntensity;
  #ifdef TOON_EMISSIVE_MAP
    uniform sampler2D emissiveMap;
  #endif
#endif
#ifdef TOON_BAKED_AO
  uniform float aoStrength;
  uniform float aoShade;
  varying float vBakedAo;
  // 구운 AO를 세기만큼 (1 = 막힘 없음)
  float bakedAoAmount() {
    return mix( 1.0, vBakedAo, aoStrength );
  }
#endif
// 맵마다 텍스처 변환 (glTF KHR_texture_transform). 끄면 UV 그대로
#ifdef TOON_UV_TRANSFORM
  uniform mat3 mapUvTransform;
  uniform mat3 shadeMapUvTransform;
  uniform mat3 lightMapUvTransform;
  uniform mat3 occlusionMapUvTransform;
  uniform mat3 normalMapUvTransform;
  uniform mat3 emissiveMapUvTransform;
  #define TOON_UV( transform, base ) ( ( transform * vec3( base, 1.0 ) ).xy )
#else
  #define TOON_UV( transform, base ) ( base )
#endif

#include <common>
#include <alphatest_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vUv;
varying vec3 vViewPosition;

struct ToonMaterial {
  vec3 diffuseColor;   // 빛 쪽 색 (바탕색 × 바탕 맵)
  vec3 shadeColor;     // 그늘 쪽 색 (램프가 없을 때)
  float bias;          // half-Lambert에 더하는 문턱값 보정 (그림자 맵·AO 맵·구운 AO)
  float rampV;         // 램프 세로 좌표 (줄 가운데)
  float specularMask;  // HighColor 마스크 (그림자 맵 R, 없으면 1)
};
// 조명 루프가 모으는 값: 빛을 향한 정도(림을 빛 쪽에만 남김)와 받은 빛 합(림 밝기)
float toonTowardLight = 0.0;
vec3 toonLightSum = vec3( 0.0 );

#ifdef TOON_FACE_SDF
  // 얼굴 SDF: 빛이 얼굴 정면에서 돌아간 각도(문턱값)로 SDF 맵을 잘라 경계를 정함. R·G가 모두 0인 곳(귀·목 등)은 원래 값
  float faceSdfShading( const in float shading ) {
    vec3 sdfTexel = texture2D( faceSdfMap, vUv ).rgb;
    if ( max( sdfTexel.r, sdfTexel.g ) <= 0.02 ) return shading;
    float sdfValue = mix( sdfTexel.g, sdfTexel.r, faceSdfUseR );
    return smoothstep( faceSdfThreshold - faceSdfSoft, faceSdfThreshold + faceSdfSoft, sdfValue );
  }
#endif

#ifdef TOON_NORMAL_MAP
  // 화면 미분으로 만든 접선 공간 (three.js getTangentFrame과 같음, 모델에 접선 속성이 없어도 됨)
  mat3 toonTangentFrame( const in vec3 eyePos, const in vec3 surfNormal, const in vec2 mapUv ) {
    vec3 q0 = dFdx( eyePos.xyz );
    vec3 q1 = dFdy( eyePos.xyz );
    vec2 st0 = dFdx( mapUv.st );
    vec2 st1 = dFdy( mapUv.st );
    vec3 q1perp = cross( q1, surfNormal );
    vec3 q0perp = cross( surfNormal, q0 );
    vec3 T = q1perp * st0.x + q0perp * st1.x;
    vec3 B = q1perp * st0.y + q0perp * st1.y;
    float det = max( dot( T, T ), dot( B, B ) );
    float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
    return mat3( T * scale, B * scale, surfNormal );
  }
#endif

#ifdef TOON_HIGHCOLOR
  // UTS2 HighColor: half-Lambert(N·H)를 거듭제곱(툰이면 1 - power⁵에서 딱 끊음)해 빛 색·마스크와 곱함. 그림자 쪽은 onShadow만큼
  vec3 highColorLight( const in IncidentLight directLight, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in float lit, const in float mask ) {
    float highHalfLambert = 0.5 * dot( normalize( directLight.direction + geometryViewDir ), geometryNormal ) + 0.5;
    float highAmount = highColorToonEdge >= 0.0
      ? smoothstep( highColorToonEdge - 0.005, highColorToonEdge + 0.005, highHalfLambert )
      : pow( clamp( highHalfLambert, 0.0, 1.0 ), highColorExponent );
    #ifdef TOON_HIGHCOLOR_MASK
      highAmount *= texture2D( highColorMask, vUv ).g;
    #endif
    return highColor * directLight.color * highAmount * mask * highColorStrength * mix( highColorOnShadow, 1.0, lit );
  }
#endif

void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
  float halfLambert = dot( geometryNormal, directLight.direction ) * 0.5 + 0.5;
  toonTowardLight = max( toonTowardLight, halfLambert );
  toonLightSum += directLight.color;
  float shade = halfLambert + material.bias;
  float lit = smoothstep( shadowThreshold - shadowSoftness, shadowThreshold + shadowSoftness, shade );
  #ifdef TOON_FACE_SDF
    lit = faceSdfShading( lit );
  #endif
  #ifdef TOON_RAMP
    // 램프: 가로 = 보정한 half-Lambert (얼굴 SDF 영역은 SDF 결과), 세로 = 줄. 램프 색을 바탕에 곱함
    #ifdef TOON_FACE_SDF
      float rampU = faceSdfShading( shade );
    #else
      float rampU = shade;
    #endif
    vec3 surface = material.diffuseColor * texture2D( rampMap, vec2( clamp( rampU, 0.005, 0.995 ), material.rampV ) ).rgb;
  #else
    vec3 surface = mix( material.shadeColor, material.diffuseColor, lit );
  #endif
  #ifdef TOON_HIGHCOLOR
    reflectedLight.directDiffuse += highColorLight( directLight, geometryNormal, geometryViewDir, lit, material.specularMask );
  #endif
  reflectedLight.directDiffuse += directLight.color * BRDF_Lambert( surface );
}

// 간접광: 그늘 색 없이 바탕색에 받은 환경광 (구운 AO는 막힌 만큼 줄임)
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
  toonLightSum += irradiance;
  vec3 indirect = irradiance * BRDF_Lambert( material.diffuseColor );
  #ifdef TOON_BAKED_AO
    indirect *= bakedAoAmount();
  #endif
  reflectedLight.indirectDiffuse += indirect;
}

#define RE_Direct RE_Direct_Toon
#define RE_IndirectDiffuse RE_IndirectDiffuse_Toon

void main() {
  #include <clipping_planes_fragment>
  vec4 diffuseColor = vec4( diffuse, opacity );
  ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
  #ifdef TOON_MAP
    diffuseColor *= texture2D( map, TOON_UV( mapUvTransform, vUv ) );
  #endif
  #include <alphatest_fragment>

  vec3 normal = normalize( vNormal );
  #ifdef DOUBLE_SIDED
    normal *= gl_FrontFacing ? 1.0 : -1.0;
  #endif
  #ifdef TOON_NORMAL_MAP
    // 접선 공간은 뒤집기 전 법선으로 (외곽선이면 노멀 맵 법선이 뒤집기를 덮어씀)
    vec2 normalMapUv = TOON_UV( normalMapUvTransform, vUv );
    mat3 tbn = toonTangentFrame( - vViewPosition, normal, normalMapUv );
    #ifdef DOUBLE_SIDED
      tbn[0] *= gl_FrontFacing ? 1.0 : -1.0;
      tbn[1] *= gl_FrontFacing ? 1.0 : -1.0;
    #endif
  #endif
  #ifdef OUTLINE
    normal *= -1.0;   // 뒤집어 그린 면의 법선을 바깥쪽으로 되돌림
  #endif
  #ifdef TOON_NORMAL_MAP
    vec3 mapN = texture2D( normalMap, normalMapUv ).xyz * 2.0 - 1.0;
    mapN.xy *= normalScale;
    normal = normalize( tbn * mapN );
  #endif

  ToonMaterial material;
  material.diffuseColor = diffuseColor.rgb;
  #ifdef TOON_SHADE_MAP
    material.shadeColor = shadeColor * texture2D( shadeMap, TOON_UV( shadeMapUvTransform, vUv ) ).rgb;
  #else
    material.shadeColor = shadeColor * diffuseColor.rgb;
  #endif
  material.bias = 0.0;
  material.specularMask = 1.0;
  #ifdef TOON_LIGHT_MAP
    vec4 lightTexel = texture2D( lightMap, TOON_UV( lightMapUvTransform, vUv ) );
    material.bias += ( lightTexel.g - 0.5 ) * lightMapStrength;
    material.specularMask = lightTexel.r;
  #endif
  #ifdef TOON_OCCLUSION_MAP
    material.bias -= ( 1.0 - texture2D( occlusionMap, TOON_UV( occlusionMapUvTransform, vUv ) ).r ) * occlusionStrength;
  #endif
  #ifdef TOON_BAKED_AO
    material.bias -= aoShade * 0.5 * ( 1.0 - bakedAoAmount() );   // 막힌 곳은 그림자 쪽으로
  #endif
  #ifdef TOON_RAMP
    #ifdef TOON_RAMP_ROW_LIGHT_MAP
      float rampLine = floor( lightTexel.a * ( rampRows - 1.0 ) + 0.5 );
    #else
      float rampLine = rampRow;
    #endif
    material.rampV = 1.0 - ( clamp( rampLine, 0.0, rampRows - 1.0 ) + 0.5 ) / rampRows;   // 줄 0 = 맨 위
  #else
    material.rampV = 0.0;
  #endif

  #include <lights_fragment_begin>
  #include <lights_fragment_maps>
  #include <lights_fragment_end>
  vec3 col = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;

  #ifdef TOON_RIM
    #ifdef TOON_RIM_SCREEN
      // 화면 공간 림: 화면 법선 방향으로 rimOffset만큼 옆의 장면 깊이(지난 프레임)가 이 면보다 충분히 멀면 가장자리 (실루엣·앞뒤로 겹친 경계)
      vec2 rimDir = normal.xy;
      float rimDirLength = length( rimDir );
      rimDir = rimDirLength > 1e-4 ? rimDir / rimDirLength : vec2( 0.0 );
      vec2 rimUv = gl_FragCoord.xy / rimResolution + rimDir * rimOffset * vec2( rimResolution.y / rimResolution.x, 1.0 );
      float rimDepthGap = texture2D( rimDepth, rimUv ).r - gl_FragCoord.z;
      // 지난 프레임 이 자리 깊이가 지금과 크게 다르면(깊이가 없거나 깨졌거나 크게 움직임) 림을 끔: 온몸에 켜지지 않게
      float rimSelfGap = abs( texture2D( rimDepth, gl_FragCoord.xy / rimResolution ).r - gl_FragCoord.z );
      float rimAmount = smoothstep( rimDepthThreshold, 2.0 * rimDepthThreshold, rimDepthGap ) * ( 1.0 - smoothstep( rimDepthThreshold, 2.0 * rimDepthThreshold, rimSelfGap ) );
    #else
      // 프레넬 림: 시선과 비껴갈수록 가장자리부터 폭만큼
      float fresnel = 1.0 - saturate( dot( normalize( vViewPosition ), normal ) );
      float rimAmount = smoothstep( 1.0 - rimWidth - rimSoftness, 1.0 - rimWidth + rimSoftness, fresnel );
    #endif
    // 빛을 향한 쪽만 남기고(lightMask) 받은 빛만큼 밝힘(lightingMix)
    rimAmount *= mix( 1.0, smoothstep( 0.5, 1.0, toonTowardLight ), rimLightMask );
    col += rimColor * rimAmount * mix( vec3( 1.0 ), toonLightSum * RECIPROCAL_PI, rimLightingMix );
  #endif

  #ifdef TOON_EMISSIVE
    vec3 totalEmissive = emissive * emissiveIntensity;
    #ifdef TOON_EMISSIVE_MAP
      totalEmissive *= texture2D( emissiveMap, TOON_UV( emissiveMapUvTransform, vUv ) ).rgb;
    #endif
    col += totalEmissive;
  #endif

  #ifdef OUTLINE
    col = outlineColor * mix( vec3( 1.0 ), col, outlineLightingMix );   // 외곽선 색에 표면 조명 결과를 섞음
  #endif
  #ifdef TOON_BAKED_AO_DEBUG
    col = vec3( vBakedAo * vBakedAo );   // 확인용: AO만 회색으로 (출력 sRGB 변환을 대략 되돌려 화면 밝기 ≈ AO 값)
  #endif
  #ifdef OPAQUE
    diffuseColor.a = 1.0;
  #endif
  gl_FragColor = vec4( col, diffuseColor.a );
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #include <premultiplied_alpha_fragment>
}
`;function tm(i,e,t){let n=new qt({vertexShader:KE,fragmentShader:$E,uniforms:e,defines:t,lights:!0,clipping:!0,transparent:!!i.transparent,alphaTest:i.alphaTest??0,side:i.side??hn});return n.name=i.name??"",n}var fh=(i={})=>tm(i,Qp(i),em(i));function nm(i){let e=Qp(i);return Object.assign(e,{outlineWidthFactor:{value:i.width},outlineColor:{value:new ue(i.outlineColor??0)},outlineLightingMix:{value:i.lightingMix??1}}),tm({...i,side:kt},e,em(i,i))}var im=(i,e)=>({aoStrength:{value:i},aoShade:{value:e}});function rm(i,e,t=!1){"OUTLINE"in i.defines||(i.defines.TOON_BAKED_AO="",t&&(i.defines.TOON_BAKED_AO_DEBUG=""),Object.assign(i.uniforms,e),i.needsUpdate=!0)}function sm(i){"TOON_BAKED_AO"in i.defines&&(delete i.defines.TOON_BAKED_AO,delete i.defines.TOON_BAKED_AO_DEBUG,i.needsUpdate=!0)}var sc=i=>i.map??i.uniforms?.map?.value??null,om=i=>!!i.uniforms?.shadowThreshold;function am(i,e){let t=e(i?.ao,!0),n=t?(i?.aoScale??1)/2:0,r=e(i?.ramp?.map);return{shadowThreshold:i?.shadowThreshold??.5-(i?.shadingShift??-.05)/2-n,shadowSoftness:i?.shadowSoftness??(1-(i?.shadingToony??.95))/2,...r&&{ramp:{map:Kp(r),rows:i?.ramp?.rows,row:i?.ramp?.row}},...i?.lightMap&&{lightMap:e(i.lightMap,!0),lightMapStrength:i.lightMapStrength},...t&&{occlusionMap:t,occlusionStrength:n},highColor:i?.highColor&&{...i.highColor,mask:e(i.highColor.mask,!0)}}}var lm=(i,e)=>i&&{color:i.color,width:i.width??1-Math.pow(.5,1/(i.power??4)),softness:i.softness,lightMask:i.lightMask,lightingMix:i.mix??.5,...e&&i.mode!=="fresnel"&&{screen:e}};function cm(i,e,t,n,r){let s=t(e.shade);return{name:i,map:t(e.map),shadeColor:s?16777215:rc,shadeMap:s,...am(e,t),transparent:!!e.transparent,alphaTest:e.alphaTest??0,side:e.doubleSided?Ht:hn,rim:n,faceSdf:r}}var JE=i=>!!i&&(i.offset.x!==0||i.offset.y!==0||i.repeat.x!==1||i.repeat.y!==1||i.rotation!==0);function um(i,e,t,n,r){let s=i,o=s.color??new ue(16777215),a=t(e?.map)??s.map??null,l=t(e?.shade),c=s.emissive&&(s.emissiveMap||s.emissive.getHex()!==0)?s.emissive:void 0,u=am(e,t);return{name:i.name,color:o,map:a,opacity:i.opacity,shadeColor:l?16777215:rc,shadeMap:l,...u,...!u.occlusionMap&&s.aoMap&&{occlusionMap:s.aoMap,occlusionStrength:.5},...s.normalMap&&{normalMap:s.normalMap,normalScale:s.normalScale},...c&&{emissive:c,emissiveIntensity:s.emissiveIntensity??1,emissiveMap:s.emissiveMap??null},transparent:e?.transparent??i.transparent,alphaTest:e?.alphaTest??i.alphaTest,side:e?.doubleSided===void 0?i.side:e.doubleSided?Ht:hn,rim:n,faceSdf:r,uvTransforms:[a,s.normalMap,s.emissiveMap,s.aoMap].some(JE)}}var hm={headTurn:"AngleX",headTilt:"AngleY",headRoll:"AngleZ",headTurnDirect:"ParamAngleX",headTiltDirect:"ParamAngleY",headRollDirect:"ParamAngleZ",bodyShiftX:"PositionX",bodyShiftY:"PositionY",bodyShiftZ:"PositionZ",bodyLean:"LeanInput",breath:"ParamBreath",eyeLookX:"ParamEyeBallX",eyeLookY:"ParamEyeBallY",eyeOpenLeft:"ParamEyeLOpen",eyeOpenRight:"ParamEyeROpen",eyeSmile:"EyeSmile",browRaiseLeft:"ParamBrowLY",browRaiseRight:"ParamBrowRY",browInnerRaise:"BrowInnerUp",frown:"Angry",frownSecondary:"Angry2",mouthOpen:"ParamMouthOpenY",jawOpen:"JawOpen",mouthClosed:"ParamSilence",mouthForm:"ParamMouthForm",mouthSmileLeft:"MouthSmile_L",mouthSmileRight:"MouthSmile_R",cheekPuff:"CheeckPuff",mouthPucker:"Mouthpucker",mouthVowel:{A:"ParamA",I:"ParamI",U:"ParamU",E:"ParamE",O:"ParamO"},armFrontPose:"Movement2",upperArmLeft:"Param62",upperArmDepthLeft:"Param59",forearmLeft:"Param60",wristLeft:"Param61",chestSwayVertical:["ChestY1","ChestY2","ChestY3","ChestY4"],chestSwayHorizontal:["ChestX1","ChestX2","ChestX3"],basinProp:"key10",bodyType:"Clothes2"};function ph(i,e){if(e===Ru)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Os||e===Go){let t=i.getIndex();if(t===null){let s=[],o=i.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)s.push(a);i.setIndex(s),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,r=[];if(e===Os)for(let s=1;s<=n;s++)r.push(t.getX(0)),r.push(t.getX(s)),r.push(t.getX(s+1));else for(let s=0;s<n;s++)s%2===0?(r.push(t.getX(s)),r.push(t.getX(s+1)),r.push(t.getX(s+2))):(r.push(t.getX(s+2)),r.push(t.getX(s+1)),r.push(t.getX(s)));return r.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(r),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function dm(i){let e=new Map,t=new Map,n=i.clone();return fm(i,n,function(r,s){e.set(s,r),t.set(r,s)}),n.traverse(function(r){if(!r.isSkinnedMesh)return;let s=r,o=e.get(r),a=o.skeleton.bones;s.skeleton=o.skeleton.clone(),s.bindMatrix.copy(o.bindMatrix),s.skeleton.bones=a.map(function(l){return t.get(l)}),s.bind(s.skeleton,s.bindMatrix)}),n}function fm(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)fm(i.children[n],e.children[n],t)}var Gs=class extends Rn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Mh(t)}),this.register(function(t){return new Eh(t)}),this.register(function(t){return new Sh(t)}),this.register(function(t){return new Lh(t)}),this.register(function(t){return new Dh(t)}),this.register(function(t){return new Oh(t)}),this.register(function(t){return new bh(t)}),this.register(function(t){return new wh(t)}),this.register(function(t){return new Ah(t)}),this.register(function(t){return new Rh(t)}),this.register(function(t){return new yh(t)}),this.register(function(t){return new Ch(t)}),this.register(function(t){return new Th(t)}),this.register(function(t){return new Ih(t)}),this.register(function(t){return new Ph(t)}),this.register(function(t){return new vh(t)}),this.register(function(t){return new oc(t,st.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new oc(t,st.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Nh(t)})}load(e,t,n,r){let s=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=On.extractUrlBase(e);o=On.resolveURL(c,this.path)}else o=On.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){r?r(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new lr(this.manager);l.setPriority(this.priority),l.setCache(this.cache),l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let s,o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===vm){try{o[st.KHR_BINARY_GLTF]=new Uh(e)}catch(h){r&&r(h);return}s=JSON.parse(o[st.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Gh(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){let h=s.extensionsUsed[u],d=s.extensionsRequired||[];switch(h){case st.KHR_MATERIALS_UNLIT:o[h]=new xh;break;case st.KHR_DRACO_MESH_COMPRESSION:o[h]=new Fh(s,this.dracoLoader);break;case st.KHR_TEXTURE_TRANSFORM:o[h]=new Bh;break;case st.KHR_MESH_QUANTIZATION:o[h]=new Hh;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,r)}parseAsync(e,t){let n=this;return new Promise(function(r,s){n.parse(e,t,r,s)})}};function QE(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function Bt(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var st={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},vh=class{constructor(e){this.parser=e,this.name=st.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){let s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,r=t.cache.get(n);if(r)return r;let s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e],c,u=new ue(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],En);let h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new ki(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new fi(u),c.distance=h;break;case"spot":c=new Br(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),vi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(c),t.cache.add(n,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}},xh=class{constructor(){this.name=st.KHR_MATERIALS_UNLIT}getMaterialType(){return cn}extendParams(e,t,n){let r=[];e.color=new ue(1,1,1),e.opacity=1;let s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],En),e.opacity=o[3]}s.baseColorTexture!==void 0&&r.push(n.assignTexture(e,"map",s.baseColorTexture,ut))}return Promise.all(r)}},yh=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Bt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},Mh=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Bt(this.parser,e,this.name)!==null?Sn:null}extendMaterialParams(e,t){let n=Bt(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&r.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(r.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let s=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ve(s,s)}return Promise.all(r)}},Eh=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return Bt(this.parser,e,this.name)!==null?Sn:null}extendMaterialParams(e,t){let n=Bt(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return t.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(r)}},Sh=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Bt(this.parser,e,this.name)!==null?Sn:null}extendMaterialParams(e,t){let n=Bt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},Th=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Bt(this.parser,e,this.name)!==null?Sn:null}extendMaterialParams(e,t){let n=Bt(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&r.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(r)}},bh=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_SHEEN}getMaterialType(e){return Bt(this.parser,e,this.name)!==null?Sn:null}extendMaterialParams(e,t){let n=Bt(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];if(t.sheenColor=new ue(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let s=n.sheenColorFactor;t.sheenColor.setRGB(s[0],s[1],s[2],En)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&r.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,ut)),n.sheenRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(r)}},wh=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Bt(this.parser,e,this.name)!==null?Sn:null}extendMaterialParams(e,t){let n=Bt(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&r.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(r)}},Ah=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_VOLUME}getMaterialType(e){return Bt(this.parser,e,this.name)!==null?Sn:null}extendMaterialParams(e,t){let n=Bt(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let s=n.attenuationColor||[1,1,1];return t.attenuationColor=new ue().setRGB(s[0],s[1],s[2],En),Promise.all(r)}},Rh=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_IOR}getMaterialType(e){return Bt(this.parser,e,this.name)!==null?Sn:null}extendMaterialParams(e,t){let n=Bt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Ch=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Bt(this.parser,e,this.name)!==null?Sn:null}extendMaterialParams(e,t){let n=Bt(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&r.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let s=n.specularColorFactor||[1,1,1];return t.specularColor=new ue().setRGB(s[0],s[1],s[2],En),n.specularColorTexture!==void 0&&r.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,ut)),Promise.all(r)}},Ph=class{constructor(e){this.parser=e,this.name=st.EXT_MATERIALS_BUMP}getMaterialType(e){return Bt(this.parser,e,this.name)!==null?Sn:null}extendMaterialParams(e,t){let n=Bt(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&r.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(r)}},Ih=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Bt(this.parser,e,this.name)!==null?Sn:null}extendMaterialParams(e,t){let n=Bt(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&r.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(r)}},Lh=class{constructor(e){this.parser=e,this.name=st.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;let s=r.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}},Dh=class{constructor(e){this.parser=e,this.name=st.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;let o=s.extensions[t],a=r.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},Oh=class{constructor(e){this.parser=e,this.name=st.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;let o=s.extensions[t],a=r.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},oc=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let r=n.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){let l=r.byteOffset||0,c=r.byteLength||0,u=r.count,h=r.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,r.mode,r.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(f),u,h,d,r.mode,r.filter),f})})}else return null}},Nh=class{constructor(e){this.name=st.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let r=t.meshes[n.mesh];for(let c of r.primitives)if(c.mode!==Gn.TRIANGLES&&c.mode!==Gn.TRIANGLE_STRIP&&c.mode!==Gn.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,f=[];for(let p of h){let _=new oe,m=new A,g=new me,y=new A(1,1,1),M=new Ir(p.geometry,p.material,d);for(let w=0;w<d;w++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,w),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,w),l.SCALE&&y.fromBufferAttribute(l.SCALE,w),M.setMatrixAt(w,_.compose(m,g,y));let x=null;for(let w in l)if(w==="_COLOR_0"){let b=l[w];M.instanceColor=new Ni(b.array,b.itemSize,b.normalized)}else if(w!=="TRANSLATION"&&w!=="ROTATION"&&w!=="SCALE"){if(x===null){let v=M.geometry;x=new et,x.name=v.name;for(let T in v.attributes)x.setAttribute(T,v.attributes[T]);for(let T in v.morphAttributes)x.morphAttributes[T]=v.morphAttributes[T];v.index!==null&&x.setIndex(v.index),x.morphTargetsRelative=v.morphTargetsRelative;for(let T of v.groups)x.addGroup(T.start,T.count,T.materialIndex);v.boundingBox!==null&&(x.boundingBox=v.boundingBox.clone()),v.boundingSphere!==null&&(x.boundingSphere=v.boundingSphere.clone()),x.drawRange.start=v.drawRange.start,x.drawRange.count=v.drawRange.count,x.userData=Object.assign({},v.userData),M.geometry=x}let b=l[w];x.setAttribute(w,new Ni(b.array,b.itemSize,b.normalized))}ct.prototype.copy.call(M,p),this.parser.assignFinalMaterial(M),f.push(M)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}},vm="glTF",$o=12,pm={JSON:1313821514,BIN:5130562},Uh=class{constructor(e){this.name=st.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,$o),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==vm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let r=this.header.length-$o,s=new DataView(e,$o),o=0;for(;o<r;){let a=s.getUint32(o,!0);o+=4;let l=s.getUint32(o,!0);if(o+=4,l===pm.JSON){let c=new Uint8Array(e,$o+o,a);this.content=n.decode(c)}else if(l===pm.BIN){let c=$o+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Fh=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=st.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let u in o){let h=Vh[u]||u.toLowerCase();a[h]=o[u]}for(let u in e.attributes){let h=Vh[u]||u.toLowerCase();if(o[u]!==void 0){let d=n.accessors[e.attributes[u]],f=zs[d.componentType];c[h]=f.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h,d){r.decodeDracoFile(u,function(f){for(let p in f.attributes){let _=f.attributes[p],m=l[p];m!==void 0&&(_.normalized=m)}h(f)},a,c,En,d)})})}},Bh=class{constructor(){this.name=st.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),r=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*r,e.offset.x,-e.repeat.x*r,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Hh=class{constructor(){this.name=st.KHR_MESH_QUANTIZATION}},ac=class extends hi{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let o=0;o!==r;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=r-t,h=(n-t)/u,d=h*h,f=d*h,p=e*c,_=p-c,m=-2*f+3*d,g=f-d,y=1-m,M=g-d+h;for(let x=0;x!==a;x++){let w=o[_+x+a],b=o[_+x+l]*u,v=o[p+x+a],T=o[p+x]*u;s[x]=y*w+M*b+m*v+g*T}return s}},eS=new me,kh=class extends ac{interpolate_(e,t,n,r){let s=super.interpolate_(e,t,n,r);return eS.fromArray(s).normalize().toArray(s),s}},Gn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},zs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},mm={9728:Ot,9729:Nt,9984:ol,9985:Ls,9986:Gr,9987:Vn},gm={33071:ln,33648:_s,10497:In},mh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Vh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},dr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},tS={CUBICSPLINE:void 0,LINEAR:Ar,STEP:wr},gh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function nS(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new kn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:hn})),i.DefaultMaterial}function Xr(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function vi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function iS(i,e,t){let n=!1,r=!1,s=!1;for(let c=0,u=e.length;c<u;c++){let h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(r=!0),h.COLOR_0!==void 0&&(s=!0),n&&r&&s)break}if(!n&&!r&&!s)return Promise.resolve(i);let o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){let h=e[c];if(n){let d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;o.push(d)}if(r){let d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;a.push(d)}if(s){let d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let u=c[0],h=c[1],d=c[2];return n&&(i.morphAttributes.position=u),r&&(i.morphAttributes.normal=h),s&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function rS(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,r=t.length;n<r;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function sS(i){let e,t=i.extensions&&i.extensions[st.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+_h(t.attributes):e=i.indices+":"+_h(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,r=i.targets.length;n<r;n++)e+=":"+_h(i.targets[n]);return e}function _h(i){let e="",t=Object.keys(i).sort();for(let n=0,r=t.length;n<r;n++)e+=t[n]+":"+i[t[n]]+";";return e}function zh(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function oS(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var aS=new oe,Gh=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new QE,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=-1,s=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);r=n&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&r<17||s&&o<98?(this.textureLoader=new Hi(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new Io(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new lr(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:n,userData:{}};return Xr(s,a,r),vi(a,r),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){let o=t[r].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let r=0,s=e.length;r<s;r++){let o=e[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let r=n.clone(),s=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,u]of o.children.entries())s(u,a.children[c])};return s(n,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let r=e(t[n]);if(r)return r}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let r=0;r<t.length;r++){let s=e(t[r]);s&&n.push(s)}return n}getDependency(e,t){let n=e+":"+t,r=this.cache.get(n);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[st.KHR_BINARY_GLTF].body);let r=this.options;return new Promise(function(s,o){n.load(On.resolveURL(t.uri,r.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let r=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+r)})}loadAccessor(e){let t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){let o=mh[r.type],a=zs[r.componentType],l=r.normalized===!0,c=new a(r.count*o);return Promise.resolve(new Xe(c,o,l))}let s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(o){let a=o[0],l=mh[r.type],c=zs[r.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=r.byteOffset||0,f=r.bufferView!==void 0?n.bufferViews[r.bufferView].byteStride:void 0,p=r.normalized===!0,_,m;if(f&&f!==h){let g=Math.floor(d/f),y="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+g+":"+r.count,M=t.cache.get(y);M||(_=new c(a,g*f,r.count*f/u),M=new Li(_,f/u),t.cache.add(y,M)),m=new Di(M,l,d%f/u,p)}else a===null?_=new c(r.count*l):_=new c(a,d,r.count*l),m=new Xe(_,l,p);if(r.sparse!==void 0){let g=mh.SCALAR,y=zs[r.sparse.indices.componentType],M=r.sparse.indices.byteOffset||0,x=r.sparse.values.byteOffset||0,w=new y(o[1],M,r.sparse.count*g),b=new c(o[2],x,r.sparse.count*l);a!==null&&(m=new Xe(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let v=0,T=w.length;v<T;v++){let O=w[v];if(m.setX(O,b[v*l]),l>=2&&m.setY(O,b[v*l+1]),l>=3&&m.setZ(O,b[v*l+2]),l>=4&&m.setW(O,b[v*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=p}return m})}loadTexture(e){let t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){let r=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let d=(s.samplers||{})[o.sampler]||{};return u.magFilter=mm[d.magFilter]||Nt,u.minFilter=mm[d.minFilter]||Vn,u.wrapS=gm[d.wrapS]||In,u.wrapT=gm[d.wrapT]||In,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Ot&&u.minFilter!==Nt,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());let o=r.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1,u;if(t.isKTX2Loader===!0&&o.bufferView!==void 0)u=n.getDependency("bufferView",o.bufferView).then(function(d){return new Promise(function(f,p){t.parse(d,f,p)})});else{if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(d){c=!0;let f=new Blob([d],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");u=Promise.resolve(l).then(function(d){return new Promise(function(f,p){let _=f;t.isImageBitmapLoader===!0&&(_=function(m){let g=new Wt(m);g.needsUpdate=!0,f(g)}),t.load(On.resolveURL(d,s.path),_,void 0,p)})})}let h=u.then(function(d){return c===!0&&a.revokeObjectURL(l),vi(d,o),d.userData.mimeType=o.mimeType||oS(o.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=h,h}assignTexture(e,t,n,r){let s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[st.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[st.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=s.associations.get(o);o=s.extensions[st.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return r!==void 0&&(o.colorSpace=r),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Ss,Xt.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new un,Xt.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(r||s||o){let a="ClonedMaterial:"+n.uuid+":";r&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return kn}loadMaterial(e){let t=this,n=this.json,r=this.extensions,s=n.materials[e],o,a={},l=s.extensions||{},c=[];if(l[st.KHR_MATERIALS_UNLIT]){let h=r[st.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,s,t))}else{let h=s.pbrMetallicRoughness||{};if(a.color=new ue(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){let d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],En),a.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,ut)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=Ht);let u=s.alphaMode||gh.OPAQUE;if(u===gh.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===gh.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==cn&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Ve(1,1),s.normalTexture.scale!==void 0)){let h=s.normalTexture.scale;a.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&o!==cn&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==cn){let h=s.emissiveFactor;a.emissive=new ue().setRGB(h[0],h[1],h[2],En)}return s.emissiveTexture!==void 0&&o!==cn&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,ut)),Promise.all(c).then(function(){let h=new o(a);return s.name&&(h.name=s.name),vi(h,s),t.associations.set(h,{materials:e}),s.extensions&&Xr(r,h,s),h})}createUniqueName(e){let t=pt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,r=this.primitiveCache;function s(a){return n[st.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return _m(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],u=sS(c),h=r[u];if(h)o.push(h.promise);else{let d;c.extensions&&c.extensions[st.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=_m(new et,c,t),c.mode===Gn.TRIANGLE_STRIP?d=d.then(f=>ph(f,Go)):c.mode===Gn.TRIANGLE_FAN&&(d=d.then(f=>ph(f,Os))),r[u]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,r=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let u=o[l].material===void 0?nS(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(async function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let f=0,p=u.length;f<p;f++){let _=u[f],m=o[f],g,y=c[f];if(m.mode===Gn.TRIANGLES||m.mode===Gn.TRIANGLE_STRIP||m.mode===Gn.TRIANGLE_FAN||m.mode===void 0){let M=s.isSkinnedMesh===!0,x=_.hasAttribute("skinIndex")&&_.hasAttribute("skinWeight");M&&x===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),g=M&&x?new Bn(_,y):new mt(_,y),g.isSkinnedMesh===!0&&g.normalizeSkinWeights()}else if(m.mode===Gn.LINES)g=new Hn(_,y);else if(m.mode===Gn.LINE_STRIP)g=new Qn(_,y);else if(m.mode===Gn.LINE_LOOP)g=new yo(_,y);else if(m.mode===Gn.POINTS)g=new Lr(_,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(g.geometry.morphAttributes).length>0&&rS(g,s),g.name=t.createUniqueName(s.name||"mesh_"+e),vi(g,s),m.extensions&&Xr(r,g,m),t.assignFinalMaterial(g),h.push(g)}for(let f=0,p=h.length;f<p;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return s.extensions&&Xr(r,h[0],s),h[0];let d=new Tt;s.extensions&&Xr(r,d,s),t.associations.set(d,{meshes:e});for(let f=0,p=h.length;f<p;f++)d.add(h[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],r=n[n.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new jt(Ze.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type==="orthographic"&&(t=new Dn(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),vi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let r=0,s=t.joints.length;r<s;r++)n.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(r){let s=r.pop(),o=r,a=[],l=[];for(let c=0,u=o.length;c<u;c++){let h=o[c];if(h){a.push(h);let d=new oe;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Ln(a,l)})}loadAnimation(e){let t=this.json,n=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,d=r.channels.length;h<d;h++){let f=r.channels[h],p=r.samplers[f.sampler],_=f.target,m=_.node,g=r.parameters!==void 0?r.parameters[p.input]:p.input,y=r.parameters!==void 0?r.parameters[p.output]:p.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",y)),c.push(p),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){let d=h[0],f=h[1],p=h[2],_=h[3],m=h[4],g=[];for(let M=0,x=d.length;M<x;M++){let w=d[M],b=f[M],v=p[M],T=_[M],O=m[M];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();let C=n._createAnimationTracks(w,b,v,T,O);if(C)for(let I=0;I<C.length;I++)g.push(C[I])}let y=new Bi(s,void 0,g);return vi(y,r),y})}createNodeMesh(e){let t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency("mesh",r.mesh).then(function(s){let o=n._getNodeRef(n.meshCache,r.mesh,s);return r.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=r.weights.length;l<c;l++)a.morphTargetInfluences[l]=r.weights[l]}),o})}loadNode(e){let t=this.json,n=this,r=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=r.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));let l=r.skin===void 0?Promise.resolve(null):n.getDependency("skin",r.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){let u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,aS)});for(let f=0,p=h.length;f<p;f++)u.add(h[f]);if(u.userData.pivot!==void 0&&h.length>0){let f=u.userData.pivot,p=h[0];u.pivot=new A().fromArray(f),u.position.x-=f[0],u.position.y-=f[1],u.position.z-=f[2],p.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let s=t.nodes[e],o=s.name?r.createUniqueName(s.name):"",a=[],l=r._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(r.getDependency("camera",s.camera).then(function(c){return r._getNodeRef(r.cameraCache,s.camera,c)})),r._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new Oi:c.length>1?u=new Tt:c.length===1?u=c[0]:u=new ct,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(s.name&&(u.userData.name=s.name,u.name=o),vi(u,s),s.extensions&&Xr(n,u,s),s.matrix!==void 0){let h=new oe;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);if(!r.associations.has(u))r.associations.set(u,{});else if(s.mesh!==void 0&&r.meshCache.refs[s.mesh]>1){let h=r.associations.get(u);r.associations.set(u,{...h})}return r.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],r=this,s=new Tt;n.name&&(s.name=r.createUniqueName(n.name)),vi(s,n),n.extensions&&Xr(t,s,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(r.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++){let d=l[u];d.parent!==null?s.add(dm(d)):s.add(d)}let c=u=>{let h=new Map;for(let[d,f]of r.associations)(d instanceof Xt||d instanceof Wt)&&h.set(d,f);return u.traverse(d=>{let f=r.associations.get(d);f!=null&&h.set(d,f)}),h};return r.associations=c(s),s})}_createAnimationTracks(e,t,n,r,s){let o=[],a=e.name?e.name:e.uuid,l=[];function c(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}dr[s.path]===dr.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(a);let u;switch(dr[s.path]){case dr.weights:u=ti;break;case dr.rotation:u=ni;break;case dr.translation:case dr.scale:u=di;break;default:switch(n.itemSize){case 1:u=ti;break;case 2:case 3:default:u=di;break}break}let h=r.interpolation!==void 0?tS[r.interpolation]:Ar,d=this._getArrayFromAccessor(n);for(let f=0,p=l.length;f<p;f++){let _=new u(l[f]+"."+dr[s.path],t.array,d,h);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=zh(t.constructor),r=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)r[s]=t[s]*n;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let r=this instanceof ni?kh:ac;return new r(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function lS(i,e,t){let n=e.attributes,r=new nn;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(r.set(new A(l[0],l[1],l[2]),new A(c[0],c[1],c[2])),a.normalized){let u=zh(zs[a.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=e.targets;if(s!==void 0){let a=new A,l=new A;for(let c=0,u=s.length;c<u;c++){let h=s[c];if(h.POSITION!==void 0){let d=t.json.accessors[h.POSITION],f=d.min,p=d.max;if(f!==void 0&&p!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(p[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(p[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(p[2]))),d.normalized){let _=zh(zs[d.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}i.boundingBox=r;let o=new gn;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,i.boundingSphere=o}function _m(i,e,t){let n=e.attributes,r=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(let o in n){let a=Vh[o]||o.toLowerCase();a in i.attributes||r.push(s(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});r.push(o)}return je.workingColorSpace!==En&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${je.workingColorSpace}" not supported.`),vi(i,e),lS(i,e,t),Promise.all(r).then(function(){return e.targets!==void 0?iS(i,e.targets,t):i})}var lc=(i,e,t)=>new Promise((n,r)=>{var s=l=>{try{a(t.next(l))}catch(c){r(c)}},o=l=>{try{a(t.throw(l))}catch(c){r(c)}},a=l=>l.done?n(l.value):Promise.resolve(l.value).then(s,o);a((t=t.apply(i,e)).next())}),_t=(i,e,t)=>new Promise((n,r)=>{var s=l=>{try{a(t.next(l))}catch(c){r(c)}},o=l=>{try{a(t.throw(l))}catch(c){r(c)}},a=l=>l.done?n(l.value):Promise.resolve(l.value).then(s,o);a((t=t.apply(i,e)).next())}),xm=class extends ct{constructor(i){super(),this.weight=0,this.isBinary=!1,this.overrideBlink="none",this.overrideLookAt="none",this.overrideMouth="none",this._binds=[],this.name=`VRMExpression_${i}`,this.expressionName=i,this.type="VRMExpression",this.visible=!1}get binds(){return this._binds}get overrideBlinkAmount(){return this.overrideBlink==="block"?0<this.outputWeight?1:0:this.overrideBlink==="blend"?this.outputWeight:0}get overrideLookAtAmount(){return this.overrideLookAt==="block"?0<this.outputWeight?1:0:this.overrideLookAt==="blend"?this.outputWeight:0}get overrideMouthAmount(){return this.overrideMouth==="block"?0<this.outputWeight?1:0:this.overrideMouth==="blend"?this.outputWeight:0}get outputWeight(){return this.isBinary?this.weight>.5?1:0:this.weight}addBind(i){this._binds.push(i)}deleteBind(i){let e=this._binds.indexOf(i);e>=0&&this._binds.splice(e,1)}applyWeight(i){var e;let t=this.outputWeight;t*=(e=i?.multiplier)!=null?e:1,this.isBinary&&t<1&&(t=0),this._binds.forEach(n=>n.applyWeight(t))}clearAppliedWeight(){this._binds.forEach(i=>i.clearAppliedWeight())}};function tg(i,e,t){var n,r;let s=i.parser.json,o=(n=s.nodes)==null?void 0:n[e];if(o==null)return console.warn(`extractPrimitivesInternal: Attempt to use nodes[${e}] of glTF but the node doesn't exist`),null;let a=o.mesh;if(a==null)return null;let l=(r=s.meshes)==null?void 0:r[a];if(l==null)return console.warn(`extractPrimitivesInternal: Attempt to use meshes[${a}] of glTF but the mesh doesn't exist`),null;let c=l.primitives.length,u=[];return t.traverse(h=>{u.length<c&&h.isMesh&&u.push(h)}),u}function ym(i,e){return _t(this,null,function*(){let t=yield i.parser.getDependency("node",e);return tg(i,e,t)})}function Mm(i){return _t(this,null,function*(){let e=yield i.parser.getDependencies("node"),t=new Map;return e.forEach((n,r)=>{let s=tg(i,r,n);s!=null&&t.set(r,s)}),t})}var nd={Aa:"aa",Ih:"ih",Ou:"ou",Ee:"ee",Oh:"oh",Blink:"blink",Happy:"happy",Angry:"angry",Sad:"sad",Relaxed:"relaxed",LookUp:"lookUp",Surprised:"surprised",LookDown:"lookDown",LookLeft:"lookLeft",LookRight:"lookRight",BlinkLeft:"blinkLeft",BlinkRight:"blinkRight",Neutral:"neutral"};function ng(i){return Math.max(Math.min(i,1),0)}var Em=class ig{constructor(){this.blinkExpressionNames=["blink","blinkLeft","blinkRight"],this.lookAtExpressionNames=["lookLeft","lookRight","lookUp","lookDown"],this.mouthExpressionNames=["aa","ee","ih","oh","ou"],this._expressions=[],this._expressionMap={}}get expressions(){return this._expressions.concat()}get expressionMap(){return Object.assign({},this._expressionMap)}get presetExpressionMap(){let e={},t=new Set(Object.values(nd));return Object.entries(this._expressionMap).forEach(([n,r])=>{t.has(n)&&(e[n]=r)}),e}get customExpressionMap(){let e={},t=new Set(Object.values(nd));return Object.entries(this._expressionMap).forEach(([n,r])=>{t.has(n)||(e[n]=r)}),e}copy(e){return this._expressions.concat().forEach(n=>{this.unregisterExpression(n)}),e._expressions.forEach(n=>{this.registerExpression(n)}),this.blinkExpressionNames=e.blinkExpressionNames.concat(),this.lookAtExpressionNames=e.lookAtExpressionNames.concat(),this.mouthExpressionNames=e.mouthExpressionNames.concat(),this}clone(){return new ig().copy(this)}getExpression(e){var t;return(t=this._expressionMap[e])!=null?t:null}registerExpression(e){this._expressions.push(e),this._expressionMap[e.expressionName]=e}unregisterExpression(e){let t=this._expressions.indexOf(e);t===-1&&console.warn("VRMExpressionManager: The specified expressions is not registered"),this._expressions.splice(t,1),delete this._expressionMap[e.expressionName]}getValue(e){var t;let n=this.getExpression(e);return(t=n?.weight)!=null?t:null}setValue(e,t){let n=this.getExpression(e);n&&(n.weight=ng(t))}resetValues(){this._expressions.forEach(e=>{e.weight=0})}getExpressionTrackName(e){let t=this.getExpression(e);return t?`${t.name}.weight`:null}update(){let e=this._calculateWeightMultipliers();this._expressions.forEach(t=>{t.clearAppliedWeight()}),this._expressions.forEach(t=>{let n=1,r=t.expressionName;this.blinkExpressionNames.indexOf(r)!==-1&&(n*=e.blink),this.lookAtExpressionNames.indexOf(r)!==-1&&(n*=e.lookAt),this.mouthExpressionNames.indexOf(r)!==-1&&(n*=e.mouth),t.applyWeight({multiplier:n})})}_calculateWeightMultipliers(){let e=1,t=1,n=1;return this._expressions.forEach(r=>{e-=r.overrideBlinkAmount,t-=r.overrideLookAtAmount,n-=r.overrideMouthAmount}),e=Math.max(0,e),t=Math.max(0,t),n=Math.max(0,n),{blink:e,lookAt:t,mouth:n}}},Jo={Color:"color",EmissionColor:"emissionColor",ShadeColor:"shadeColor",MatcapColor:"matcapColor",RimColor:"rimColor",OutlineColor:"outlineColor"},cS={_Color:Jo.Color,_EmissionColor:Jo.EmissionColor,_ShadeColor:Jo.ShadeColor,_RimColor:Jo.RimColor,_OutlineColor:Jo.OutlineColor},uS=new ue,rg=class sg{constructor({material:e,type:t,targetValue:n,targetAlpha:r}){this.material=e,this.type=t,this.targetValue=n,this.targetAlpha=r??1;let s=this._initColorBindState(),o=this._initAlphaBindState();this._state={color:s,alpha:o}}applyWeight(e){let{color:t,alpha:n}=this._state;if(t!=null){let{propertyName:r,deltaValue:s}=t,o=this.material[r];o?.add(uS.copy(s).multiplyScalar(e))}if(n!=null){let{propertyName:r,deltaValue:s}=n;this.material[r]!=null&&(this.material[r]+=s*e)}}clearAppliedWeight(){let{color:e,alpha:t}=this._state;if(e!=null){let{propertyName:n,initialValue:r}=e,s=this.material[n];s?.copy(r)}if(t!=null){let{propertyName:n,initialValue:r}=t;this.material[n]!=null&&(this.material[n]=r)}}_initColorBindState(){var e,t,n;let{material:r,type:s,targetValue:o}=this,a=this._getPropertyNameMap(),l=(t=(e=a?.[s])==null?void 0:e[0])!=null?t:null;if(l==null)return console.warn(`Tried to add a material color bind to the material ${(n=r.name)!=null?n:"(no name)"}, the type ${s} but the material or the type is not supported.`),null;let u=r[l].clone(),h=new ue(o.r-u.r,o.g-u.g,o.b-u.b);return{propertyName:l,initialValue:u,deltaValue:h}}_initAlphaBindState(){var e,t,n;let{material:r,type:s,targetAlpha:o}=this,a=this._getPropertyNameMap(),l=(t=(e=a?.[s])==null?void 0:e[1])!=null?t:null;if(l==null&&o!==1)return console.warn(`Tried to add a material alpha bind to the material ${(n=r.name)!=null?n:"(no name)"}, the type ${s} but the material or the type does not support alpha.`),null;if(l==null)return null;let c=r[l],u=o-c;return{propertyName:l,initialValue:c,deltaValue:u}}_getPropertyNameMap(){var e,t;return(t=(e=Object.entries(sg._propertyNameMapMap).find(([n])=>this.material[n]===!0))==null?void 0:e[1])!=null?t:null}};rg._propertyNameMapMap={isMeshStandardMaterial:{color:["color","opacity"],emissionColor:["emissive",null]},isMeshBasicMaterial:{color:["color","opacity"]},isMToonMaterial:{color:["color","opacity"],emissionColor:["emissive",null],outlineColor:["outlineColorFactor",null],matcapColor:["matcapFactor",null],rimColor:["parametricRimColorFactor",null],shadeColor:["shadeColorFactor",null]}};var Sm=rg,mc=class{constructor({primitives:i,index:e,weight:t}){this.primitives=i,this.index=e,this.weight=t}applyWeight(i){this.primitives.forEach(e=>{var t;((t=e.morphTargetInfluences)==null?void 0:t[this.index])!=null&&(e.morphTargetInfluences[this.index]+=this.weight*i)})}clearAppliedWeight(){this.primitives.forEach(i=>{var e;((e=i.morphTargetInfluences)==null?void 0:e[this.index])!=null&&(i.morphTargetInfluences[this.index]=0)})}},Tm=new Ve,og=class ag{constructor({material:e,scale:t,offset:n}){var r,s;this.material=e,this.scale=t,this.offset=n;let o=(r=Object.entries(ag._propertyNamesMap).find(([a])=>e[a]===!0))==null?void 0:r[1];o==null?(console.warn(`Tried to add a texture transform bind to the material ${(s=e.name)!=null?s:"(no name)"} but the material is not supported.`),this._properties=[]):(this._properties=[],o.forEach(a=>{var l;let c=(l=e[a])==null?void 0:l.clone();if(!c)return null;e[a]=c;let u=c.offset.clone(),h=c.repeat.clone(),d=n.clone().sub(u),f=t.clone().sub(h);this._properties.push({name:a,initialOffset:u,deltaOffset:d,initialScale:h,deltaScale:f})}))}applyWeight(e){this._properties.forEach(t=>{let n=this.material[t.name];n!==void 0&&(n.offset.add(Tm.copy(t.deltaOffset).multiplyScalar(e)),n.repeat.add(Tm.copy(t.deltaScale).multiplyScalar(e)))})}clearAppliedWeight(){this._properties.forEach(e=>{let t=this.material[e.name];t!==void 0&&(t.offset.copy(e.initialOffset),t.repeat.copy(e.initialScale))})}};og._propertyNamesMap={isMeshStandardMaterial:["map","emissiveMap","bumpMap","normalMap","displacementMap","roughnessMap","metalnessMap","alphaMap"],isMeshBasicMaterial:["map","specularMap","alphaMap"],isMToonMaterial:["map","normalMap","emissiveMap","shadeMultiplyTexture","rimMultiplyTexture","outlineWidthMultiplyTexture","uvAnimationMaskTexture"]};var bm=og,hS=new Set(["1.0","1.0-beta"]),lg=class cg{get name(){return"VRMExpressionLoaderPlugin"}constructor(e){this.parser=e}afterRoot(e){return _t(this,null,function*(){e.userData.vrmExpressionManager=yield this._import(e)})}_import(e){return _t(this,null,function*(){let t=yield this._v1Import(e);if(t)return t;let n=yield this._v0Import(e);return n||null})}_v1Import(e){return _t(this,null,function*(){var t,n;let r=this.parser.json;if(!(((t=r.extensionsUsed)==null?void 0:t.indexOf("VRMC_vrm"))!==-1))return null;let o=(n=r.extensions)==null?void 0:n.VRMC_vrm;if(!o)return null;let a=o.specVersion;if(!hS.has(a))return console.warn(`VRMExpressionLoaderPlugin: Unknown VRMC_vrm specVersion "${a}"`),null;let l=o.expressions;if(!l)return null;let c=new Set(Object.values(nd)),u=new Map;l.preset!=null&&Object.entries(l.preset).forEach(([d,f])=>{if(f!=null){if(!c.has(d)){console.warn(`VRMExpressionLoaderPlugin: Unknown preset name "${d}" detected. Ignoring the expression`);return}u.set(d,f)}}),l.custom!=null&&Object.entries(l.custom).forEach(([d,f])=>{if(c.has(d)){console.warn(`VRMExpressionLoaderPlugin: Custom expression cannot have preset name "${d}". Ignoring the expression`);return}u.set(d,f)});let h=new Em;return yield Promise.all(Array.from(u.entries()).map(d=>_t(this,[d],function*([f,p]){var _,m,g,y,M,x,w;let b=new xm(f);if(e.scene.add(b),b.isBinary=(_=p.isBinary)!=null?_:!1,b.overrideBlink=(m=p.overrideBlink)!=null?m:"none",b.overrideLookAt=(g=p.overrideLookAt)!=null?g:"none",b.overrideMouth=(y=p.overrideMouth)!=null?y:"none",(M=p.morphTargetBinds)==null||M.forEach(v=>_t(this,null,function*(){var T;if(v.node===void 0||v.index===void 0)return;let O=yield ym(e,v.node),C=v.index;if(!O.every(I=>Array.isArray(I.morphTargetInfluences)&&C<I.morphTargetInfluences.length)){console.warn(`VRMExpressionLoaderPlugin: ${p.name} attempts to index morph #${C} but not found.`);return}b.addBind(new mc({primitives:O,index:C,weight:(T=v.weight)!=null?T:1}))})),p.materialColorBinds||p.textureTransformBinds){let v=[];e.scene.traverse(T=>{let O=T.material;O&&(Array.isArray(O)?v.push(...O):v.push(O))}),(x=p.materialColorBinds)==null||x.forEach(T=>_t(this,null,function*(){v.filter(C=>{var I;let U=(I=this.parser.associations.get(C))==null?void 0:I.materials;return T.material===U}).forEach(C=>{b.addBind(new Sm({material:C,type:T.type,targetValue:new ue().fromArray(T.targetValue),targetAlpha:T.targetValue[3]}))})})),(w=p.textureTransformBinds)==null||w.forEach(T=>_t(this,null,function*(){v.filter(C=>{var I;let U=(I=this.parser.associations.get(C))==null?void 0:I.materials;return T.material===U}).forEach(C=>{var I,U;b.addBind(new bm({material:C,offset:new Ve().fromArray((I=T.offset)!=null?I:[0,0]),scale:new Ve().fromArray((U=T.scale)!=null?U:[1,1])}))})}))}h.registerExpression(b)}))),h})}_v0Import(e){return _t(this,null,function*(){var t;let n=this.parser.json,r=(t=n.extensions)==null?void 0:t.VRM;if(!r)return null;let s=r.blendShapeMaster;if(!s)return null;let o=new Em,a=s.blendShapeGroups;if(!a)return o;let l=new Set;return yield Promise.all(a.map(c=>_t(this,null,function*(){var u;let h=c.presetName,d=h!=null&&cg.v0v1PresetNameMap[h]||null,f=d??c.name;if(f==null){console.warn("VRMExpressionLoaderPlugin: One of custom expressions has no name. Ignoring the expression");return}if(l.has(f)){console.warn(`VRMExpressionLoaderPlugin: An expression preset ${h} has duplicated entries. Ignoring the expression`);return}l.add(f);let p=new xm(f);e.scene.add(p),p.isBinary=(u=c.isBinary)!=null?u:!1,c.binds&&c.binds.forEach(m=>_t(this,null,function*(){var g;if(m.mesh===void 0||m.index===void 0)return;let y=[];if((g=n.nodes)==null||g.forEach((x,w)=>{x.mesh===m.mesh&&y.push(w)}),y.length===0){console.warn(`VRMExpressionLoaderPlugin: ${c.name} attempts to bind a morph target to the mesh #${m.mesh} but the mesh is not found or not used in the scene. Ignoring the bind.`);return}let M=m.index;yield Promise.all(y.map(x=>_t(this,null,function*(){var w;let b=yield ym(e,x);if(!b.every(v=>Array.isArray(v.morphTargetInfluences)&&M<v.morphTargetInfluences.length)){console.warn(`VRMExpressionLoaderPlugin: ${c.name} attempts to index ${M}th morph but not found.`);return}p.addBind(new mc({primitives:b,index:M,weight:.01*((w=m.weight)!=null?w:100)}))})))}));let _=c.materialValues;_&&_.length!==0&&_.forEach(m=>{if(m.materialName===void 0||m.propertyName===void 0||m.targetValue===void 0)return;let g=[];e.scene.traverse(M=>{if(M.material){let x=M.material;Array.isArray(x)?g.push(...x.filter(w=>(w.name===m.materialName||w.name===m.materialName+" (Outline)")&&g.indexOf(w)===-1)):x.name===m.materialName&&g.indexOf(x)===-1&&g.push(x)}});let y=m.propertyName;g.forEach(M=>{if(y==="_MainTex_ST"){let w=new Ve(m.targetValue[0],m.targetValue[1]),b=new Ve(m.targetValue[2],m.targetValue[3]);b.y=1-b.y-w.y,p.addBind(new bm({material:M,scale:w,offset:b}));return}let x=cS[y];if(x){p.addBind(new Sm({material:M,type:x,targetValue:new ue().fromArray(m.targetValue),targetAlpha:m.targetValue[3]}));return}console.warn(y+" is not supported")})}),o.registerExpression(p)}))),o})}};lg.v0v1PresetNameMap={a:"aa",e:"ee",i:"ih",o:"oh",u:"ou",blink:"blink",joy:"happy",angry:"angry",sorrow:"sad",fun:"relaxed",lookup:"lookUp",lookdown:"lookDown",lookleft:"lookLeft",lookright:"lookRight",blink_l:"blinkLeft",blink_r:"blinkRight",neutral:"neutral"};var dS=lg;var ld=class Ys{constructor(e,t){this._firstPersonOnlyLayer=Ys.DEFAULT_FIRSTPERSON_ONLY_LAYER,this._thirdPersonOnlyLayer=Ys.DEFAULT_THIRDPERSON_ONLY_LAYER,this._initializedLayers=!1,this.humanoid=e,this.meshAnnotations=t}copy(e){if(this.humanoid!==e.humanoid)throw new Error("VRMFirstPerson: humanoid must be same in order to copy");return this.meshAnnotations=e.meshAnnotations.map(t=>({meshes:t.meshes.concat(),type:t.type})),this}clone(){return new Ys(this.humanoid,this.meshAnnotations).copy(this)}get firstPersonOnlyLayer(){return this._firstPersonOnlyLayer}get thirdPersonOnlyLayer(){return this._thirdPersonOnlyLayer}setup({firstPersonOnlyLayer:e=Ys.DEFAULT_FIRSTPERSON_ONLY_LAYER,thirdPersonOnlyLayer:t=Ys.DEFAULT_THIRDPERSON_ONLY_LAYER}={}){this._initializedLayers||(this._firstPersonOnlyLayer=e,this._thirdPersonOnlyLayer=t,this.meshAnnotations.forEach(n=>{n.meshes.forEach(r=>{n.type==="firstPersonOnly"?(r.layers.set(this._firstPersonOnlyLayer),r.traverse(s=>s.layers.set(this._firstPersonOnlyLayer))):n.type==="thirdPersonOnly"?(r.layers.set(this._thirdPersonOnlyLayer),r.traverse(s=>s.layers.set(this._thirdPersonOnlyLayer))):n.type==="auto"&&this._createHeadlessModel(r)})}),this._initializedLayers=!0)}_excludeTriangles(e,t,n,r){let s=0;if(t!=null&&t.length>0)for(let o=0;o<e.length;o+=3){let a=e[o],l=e[o+1],c=e[o+2],u=t[a],h=n[a];if(u[0]>0&&r.includes(h[0])||u[1]>0&&r.includes(h[1])||u[2]>0&&r.includes(h[2])||u[3]>0&&r.includes(h[3]))continue;let d=t[l],f=n[l];if(d[0]>0&&r.includes(f[0])||d[1]>0&&r.includes(f[1])||d[2]>0&&r.includes(f[2])||d[3]>0&&r.includes(f[3]))continue;let p=t[c],_=n[c];p[0]>0&&r.includes(_[0])||p[1]>0&&r.includes(_[1])||p[2]>0&&r.includes(_[2])||p[3]>0&&r.includes(_[3])||(e[s++]=a,e[s++]=l,e[s++]=c)}return s}_createErasedMesh(e,t){let n=new Bn(e.geometry.clone(),e.material);n.name=`${e.name}(erase)`,n.frustumCulled=e.frustumCulled,n.layers.set(this._firstPersonOnlyLayer);let r=n.geometry,s=r.getAttribute("skinIndex"),o=s instanceof Rs?[]:s.array,a=[];for(let _=0;_<o.length;_+=4)a.push([o[_],o[_+1],o[_+2],o[_+3]]);let l=r.getAttribute("skinWeight"),c=l instanceof Rs?[]:l.array,u=[];for(let _=0;_<c.length;_+=4)u.push([c[_],c[_+1],c[_+2],c[_+3]]);let h=r.getIndex();if(!h)throw new Error("The geometry doesn't have an index buffer");let d=Array.from(h.array),f=this._excludeTriangles(d,u,a,t),p=[];for(let _=0;_<f;_++)p[_]=d[_];return r.setIndex(p),e.onBeforeRender&&(n.onBeforeRender=e.onBeforeRender),n.bind(new Ln(e.skeleton.bones,e.skeleton.boneInverses),new oe),n}_createHeadlessModelForSkinnedMesh(e,t){let n=[];if(t.skeleton.bones.forEach((s,o)=>{this._isEraseTarget(s)&&n.push(o)}),!n.length){t.layers.enable(this._thirdPersonOnlyLayer),t.layers.enable(this._firstPersonOnlyLayer);return}t.layers.set(this._thirdPersonOnlyLayer);let r=this._createErasedMesh(t,n);e.add(r)}_createHeadlessModel(e){if(e.type==="Group")if(e.layers.set(this._thirdPersonOnlyLayer),this._isEraseTarget(e))e.traverse(t=>t.layers.set(this._thirdPersonOnlyLayer));else{let t=new Tt;t.name=`_headless_${e.name}`,t.layers.set(this._firstPersonOnlyLayer),e.parent.add(t),e.children.filter(n=>n.type==="SkinnedMesh").forEach(n=>{let r=n;this._createHeadlessModelForSkinnedMesh(t,r)})}else if(e.type==="SkinnedMesh"){let t=e;this._createHeadlessModelForSkinnedMesh(e.parent,t)}else this._isEraseTarget(e)&&(e.layers.set(this._thirdPersonOnlyLayer),e.traverse(t=>t.layers.set(this._thirdPersonOnlyLayer)))}_isEraseTarget(e){return e===this.humanoid.getRawBoneNode("head")?!0:e.parent?this._isEraseTarget(e.parent):!1}};ld.DEFAULT_FIRSTPERSON_ONLY_LAYER=9;ld.DEFAULT_THIRDPERSON_ONLY_LAYER=10;var wm=ld,fS=new Set(["1.0","1.0-beta"]),pS=class{get name(){return"VRMFirstPersonLoaderPlugin"}constructor(i){this.parser=i}afterRoot(i){return _t(this,null,function*(){let e=i.userData.vrmHumanoid;if(e!==null){if(e===void 0)throw new Error("VRMFirstPersonLoaderPlugin: vrmHumanoid is undefined. VRMHumanoidLoaderPlugin have to be used first");i.userData.vrmFirstPerson=yield this._import(i,e)}})}_import(i,e){return _t(this,null,function*(){if(e==null)return null;let t=yield this._v1Import(i,e);if(t)return t;let n=yield this._v0Import(i,e);return n||null})}_v1Import(i,e){return _t(this,null,function*(){var t,n;let r=this.parser.json;if(!(((t=r.extensionsUsed)==null?void 0:t.indexOf("VRMC_vrm"))!==-1))return null;let o=(n=r.extensions)==null?void 0:n.VRMC_vrm;if(!o)return null;let a=o.specVersion;if(!fS.has(a))return console.warn(`VRMFirstPersonLoaderPlugin: Unknown VRMC_vrm specVersion "${a}"`),null;let l=o.firstPerson,c=[],u=yield Mm(i);return Array.from(u.entries()).forEach(([h,d])=>{var f,p;let _=(f=l?.meshAnnotations)==null?void 0:f.find(m=>m.node===h);c.push({meshes:d,type:(p=_?.type)!=null?p:"auto"})}),new wm(e,c)})}_v0Import(i,e){return _t(this,null,function*(){var t;let n=this.parser.json,r=(t=n.extensions)==null?void 0:t.VRM;if(!r)return null;let s=r.firstPerson;if(!s)return null;let o=[],a=yield Mm(i);return Array.from(a.entries()).forEach(([l,c])=>{let u=n.nodes[l],h=s.meshAnnotations?s.meshAnnotations.find(d=>d.mesh===u.mesh):void 0;o.push({meshes:c,type:this._convertV0FlagToV1Type(h?.firstPersonFlag)})}),new wm(e,o)})}_convertV0FlagToV1Type(i){return i==="FirstPersonOnly"?"firstPersonOnly":i==="ThirdPersonOnly"?"thirdPersonOnly":i==="Both"?"both":"auto"}};var Am=new A,Rm=new A,mS=new me,Cm=class extends Tt{constructor(i){super(),this.vrmHumanoid=i,this._boneAxesMap=new Map,Object.values(i.humanBones).forEach(e=>{let t=new Do(1);t.matrixAutoUpdate=!1,t.material.depthTest=!1,t.material.depthWrite=!1,this.add(t),this._boneAxesMap.set(e,t)})}dispose(){Array.from(this._boneAxesMap.values()).forEach(i=>{i.geometry.dispose(),i.material.dispose()})}updateMatrixWorld(i){Array.from(this._boneAxesMap.entries()).forEach(([e,t])=>{e.node.updateWorldMatrix(!0,!1),e.node.matrixWorld.decompose(Am,mS,Rm);let n=Am.set(.1,.1,.1).divide(Rm);t.matrix.copy(e.node.matrixWorld).scale(n)}),super.updateMatrixWorld(i)}},Wh=["hips","spine","chest","upperChest","neck","head","leftEye","rightEye","jaw","leftUpperLeg","leftLowerLeg","leftFoot","leftToes","rightUpperLeg","rightLowerLeg","rightFoot","rightToes","leftShoulder","leftUpperArm","leftLowerArm","leftHand","rightShoulder","rightUpperArm","rightLowerArm","rightHand","leftThumbMetacarpal","leftThumbProximal","leftThumbDistal","leftIndexProximal","leftIndexIntermediate","leftIndexDistal","leftMiddleProximal","leftMiddleIntermediate","leftMiddleDistal","leftRingProximal","leftRingIntermediate","leftRingDistal","leftLittleProximal","leftLittleIntermediate","leftLittleDistal","rightThumbMetacarpal","rightThumbProximal","rightThumbDistal","rightIndexProximal","rightIndexIntermediate","rightIndexDistal","rightMiddleProximal","rightMiddleIntermediate","rightMiddleDistal","rightRingProximal","rightRingIntermediate","rightRingDistal","rightLittleProximal","rightLittleIntermediate","rightLittleDistal"];var gS={hips:null,spine:"hips",chest:"spine",upperChest:"chest",neck:"upperChest",head:"neck",leftEye:"head",rightEye:"head",jaw:"head",leftUpperLeg:"hips",leftLowerLeg:"leftUpperLeg",leftFoot:"leftLowerLeg",leftToes:"leftFoot",rightUpperLeg:"hips",rightLowerLeg:"rightUpperLeg",rightFoot:"rightLowerLeg",rightToes:"rightFoot",leftShoulder:"upperChest",leftUpperArm:"leftShoulder",leftLowerArm:"leftUpperArm",leftHand:"leftLowerArm",rightShoulder:"upperChest",rightUpperArm:"rightShoulder",rightLowerArm:"rightUpperArm",rightHand:"rightLowerArm",leftThumbMetacarpal:"leftHand",leftThumbProximal:"leftThumbMetacarpal",leftThumbDistal:"leftThumbProximal",leftIndexProximal:"leftHand",leftIndexIntermediate:"leftIndexProximal",leftIndexDistal:"leftIndexIntermediate",leftMiddleProximal:"leftHand",leftMiddleIntermediate:"leftMiddleProximal",leftMiddleDistal:"leftMiddleIntermediate",leftRingProximal:"leftHand",leftRingIntermediate:"leftRingProximal",leftRingDistal:"leftRingIntermediate",leftLittleProximal:"leftHand",leftLittleIntermediate:"leftLittleProximal",leftLittleDistal:"leftLittleIntermediate",rightThumbMetacarpal:"rightHand",rightThumbProximal:"rightThumbMetacarpal",rightThumbDistal:"rightThumbProximal",rightIndexProximal:"rightHand",rightIndexIntermediate:"rightIndexProximal",rightIndexDistal:"rightIndexIntermediate",rightMiddleProximal:"rightHand",rightMiddleIntermediate:"rightMiddleProximal",rightMiddleDistal:"rightMiddleIntermediate",rightRingProximal:"rightHand",rightRingIntermediate:"rightRingProximal",rightRingDistal:"rightRingIntermediate",rightLittleProximal:"rightHand",rightLittleIntermediate:"rightLittleProximal",rightLittleDistal:"rightLittleIntermediate"};function ug(i){return i.invert?i.invert():i.inverse(),i}var qr=new A,Yr=new me,id=class{constructor(i){this.humanBones=i,this.restPose=this.getAbsolutePose()}getAbsolutePose(){let i={};return Object.keys(this.humanBones).forEach(e=>{let t=e,n=this.getBoneNode(t);n&&(qr.copy(n.position),Yr.copy(n.quaternion),i[t]={position:qr.toArray(),rotation:Yr.toArray()})}),i}getPose(){let i={};return Object.keys(this.humanBones).forEach(e=>{let t=e,n=this.getBoneNode(t);if(!n)return;qr.set(0,0,0),Yr.identity();let r=this.restPose[t];r?.position&&qr.fromArray(r.position).negate(),r?.rotation&&ug(Yr.fromArray(r.rotation)),qr.add(n.position),Yr.premultiply(n.quaternion),i[t]={position:qr.toArray(),rotation:Yr.toArray()}}),i}setPose(i){Object.entries(i).forEach(([e,t])=>{let n=e,r=this.getBoneNode(n);if(!r)return;let s=this.restPose[n];s&&(t?.position&&(r.position.fromArray(t.position),s.position&&r.position.add(qr.fromArray(s.position))),t?.rotation&&(r.quaternion.fromArray(t.rotation),s.rotation&&r.quaternion.multiply(Yr.fromArray(s.rotation))))})}resetPose(){Object.entries(this.restPose).forEach(([i,e])=>{let t=this.getBoneNode(i);t&&(e?.position&&t.position.fromArray(e.position),e?.rotation&&t.quaternion.fromArray(e.rotation))})}getBone(i){var e;return(e=this.humanBones[i])!=null?e:void 0}getBoneNode(i){var e,t;return(t=(e=this.humanBones[i])==null?void 0:e.node)!=null?t:null}},Xh=new A,_S=new me,vS=new A,Pm=class hg extends id{static _setupTransforms(e){let t=new ct;t.name="VRMHumanoidRig";let n={},r={},s={},o={};Wh.forEach(l=>{var c;let u=e.getBoneNode(l);if(u){let h=new A,d=new me;u.updateWorldMatrix(!0,!1),u.matrixWorld.decompose(h,d,Xh),n[l]=h,r[l]=d,s[l]=u.quaternion.clone();let f=new me;(c=u.parent)==null||c.matrixWorld.decompose(Xh,f,Xh),o[l]=f}});let a={};return Wh.forEach(l=>{var c;let u=e.getBoneNode(l);if(u){let h=n[l],d=l,f;for(;f==null&&(d=gS[d],d!=null);)f=n[d];let p=new ct;p.name="Normalized_"+u.name,(d?(c=a[d])==null?void 0:c.node:t).add(p),p.position.copy(h),f&&p.position.sub(f),a[l]={node:p}}}),{rigBones:a,root:t,parentWorldRotations:o,boneRotations:s}}constructor(e){let{rigBones:t,root:n,parentWorldRotations:r,boneRotations:s}=hg._setupTransforms(e);super(t),this.original=e,this.root=n,this._parentWorldRotations=r,this._boneRotations=s}update(){Wh.forEach(e=>{let t=this.original.getBoneNode(e);if(t!=null){let n=this.getBoneNode(e),r=this._parentWorldRotations[e],s=_S.copy(r).invert(),o=this._boneRotations[e];if(t.quaternion.copy(n.quaternion).multiply(r).premultiply(s).multiply(o),e==="hips"){let a=n.getWorldPosition(vS);t.parent.updateWorldMatrix(!0,!1);let l=t.parent.matrixWorld,c=a.applyMatrix4(l.invert());t.position.copy(c)}}})}},Im=class dg{get restPose(){return console.warn("VRMHumanoid: restPose is deprecated. Use either rawRestPose or normalizedRestPose instead."),this.rawRestPose}get rawRestPose(){return this._rawHumanBones.restPose}get normalizedRestPose(){return this._normalizedHumanBones.restPose}get humanBones(){return this._rawHumanBones.humanBones}get rawHumanBones(){return this._rawHumanBones.humanBones}get normalizedHumanBones(){return this._normalizedHumanBones.humanBones}get normalizedHumanBonesRoot(){return this._normalizedHumanBones.root}constructor(e,t){var n;this.autoUpdateHumanBones=(n=t?.autoUpdateHumanBones)!=null?n:!0,this._rawHumanBones=new id(e),this._normalizedHumanBones=new Pm(this._rawHumanBones)}copy(e){return this.autoUpdateHumanBones=e.autoUpdateHumanBones,this._rawHumanBones=new id(e.humanBones),this._normalizedHumanBones=new Pm(this._rawHumanBones),this}clone(){return new dg(this.humanBones,{autoUpdateHumanBones:this.autoUpdateHumanBones}).copy(this)}getAbsolutePose(){return console.warn("VRMHumanoid: getAbsolutePose() is deprecated. Use either getRawAbsolutePose() or getNormalizedAbsolutePose() instead."),this.getRawAbsolutePose()}getRawAbsolutePose(){return this._rawHumanBones.getAbsolutePose()}getNormalizedAbsolutePose(){return this._normalizedHumanBones.getAbsolutePose()}getPose(){return console.warn("VRMHumanoid: getPose() is deprecated. Use either getRawPose() or getNormalizedPose() instead."),this.getRawPose()}getRawPose(){return this._rawHumanBones.getPose()}getNormalizedPose(){return this._normalizedHumanBones.getPose()}setPose(e){return console.warn("VRMHumanoid: setPose() is deprecated. Use either setRawPose() or setNormalizedPose() instead."),this.setRawPose(e)}setRawPose(e){return this._rawHumanBones.setPose(e)}setNormalizedPose(e){return this._normalizedHumanBones.setPose(e)}resetPose(){return console.warn("VRMHumanoid: resetPose() is deprecated. Use either resetRawPose() or resetNormalizedPose() instead."),this.resetRawPose()}resetRawPose(){return this._rawHumanBones.resetPose()}resetNormalizedPose(){return this._normalizedHumanBones.resetPose()}getBone(e){return console.warn("VRMHumanoid: getBone() is deprecated. Use either getRawBone() or getNormalizedBone() instead."),this.getRawBone(e)}getRawBone(e){return this._rawHumanBones.getBone(e)}getNormalizedBone(e){return this._normalizedHumanBones.getBone(e)}getBoneNode(e){return console.warn("VRMHumanoid: getBoneNode() is deprecated. Use either getRawBoneNode() or getNormalizedBoneNode() instead."),this.getRawBoneNode(e)}getRawBoneNode(e){return this._rawHumanBones.getBoneNode(e)}getNormalizedBoneNode(e){return this._normalizedHumanBones.getBoneNode(e)}update(){this.autoUpdateHumanBones&&this._normalizedHumanBones.update()}},xS={Hips:"hips",Spine:"spine",Head:"head",LeftUpperLeg:"leftUpperLeg",LeftLowerLeg:"leftLowerLeg",LeftFoot:"leftFoot",RightUpperLeg:"rightUpperLeg",RightLowerLeg:"rightLowerLeg",RightFoot:"rightFoot",LeftUpperArm:"leftUpperArm",LeftLowerArm:"leftLowerArm",LeftHand:"leftHand",RightUpperArm:"rightUpperArm",RightLowerArm:"rightLowerArm",RightHand:"rightHand"},yS=new Set(["1.0","1.0-beta"]),Lm={leftThumbProximal:"leftThumbMetacarpal",leftThumbIntermediate:"leftThumbProximal",rightThumbProximal:"rightThumbMetacarpal",rightThumbIntermediate:"rightThumbProximal"},MS=class{get name(){return"VRMHumanoidLoaderPlugin"}constructor(i,e){this.parser=i,this.helperRoot=e?.helperRoot,this.autoUpdateHumanBones=e?.autoUpdateHumanBones}afterRoot(i){return _t(this,null,function*(){i.userData.vrmHumanoid=yield this._import(i)})}_import(i){return _t(this,null,function*(){let e=yield this._v1Import(i);if(e)return e;let t=yield this._v0Import(i);return t||null})}_v1Import(i){return _t(this,null,function*(){var e,t;let n=this.parser.json;if(!(((e=n.extensionsUsed)==null?void 0:e.indexOf("VRMC_vrm"))!==-1))return null;let s=(t=n.extensions)==null?void 0:t.VRMC_vrm;if(!s)return null;let o=s.specVersion;if(!yS.has(o))return console.warn(`VRMHumanoidLoaderPlugin: Unknown VRMC_vrm specVersion "${o}"`),null;let a=s.humanoid;if(!a)return null;let l=a.humanBones.leftThumbIntermediate!=null||a.humanBones.rightThumbIntermediate!=null,c={};a.humanBones!=null&&(yield Promise.all(Object.entries(a.humanBones).map(h=>_t(this,[h],function*([d,f]){let p=d,_=f.node;if(l){let g=Lm[p];g!=null&&(p=g)}let m=yield this.parser.getDependency("node",_);if(m==null){console.warn(`A glTF node bound to the humanoid bone ${p} (index = ${_}) does not exist`);return}c[p]={node:m}}))));let u=new Im(this._ensureRequiredBonesExist(c),{autoUpdateHumanBones:this.autoUpdateHumanBones});if(i.scene.add(u.normalizedHumanBonesRoot),this.helperRoot){let h=new Cm(u);this.helperRoot.add(h),h.renderOrder=this.helperRoot.renderOrder}return u})}_v0Import(i){return _t(this,null,function*(){var e;let n=(e=this.parser.json.extensions)==null?void 0:e.VRM;if(!n)return null;let r=n.humanoid;if(!r)return null;let s={};r.humanBones!=null&&(yield Promise.all(r.humanBones.map(a=>_t(this,null,function*(){let l=a.bone,c=a.node;if(l==null||c==null)return;if(c<0){console.warn(`A glTF node index for the humanoid bone ${l} is negative (${c}), ignoring this bone.`);return}let u=yield this.parser.getDependency("node",c);if(u==null){console.warn(`A glTF node bound to the humanoid bone ${l} (index = ${c}) does not exist`);return}let h=Lm[l],d=h??l;if(s[d]!=null){console.warn(`Multiple bone entries for ${d} detected (index = ${c}), ignoring duplicated entries.`);return}s[d]={node:u}}))));let o=new Im(this._ensureRequiredBonesExist(s),{autoUpdateHumanBones:this.autoUpdateHumanBones});if(i.scene.add(o.normalizedHumanBonesRoot),this.helperRoot){let a=new Cm(o);this.helperRoot.add(a),a.renderOrder=this.helperRoot.renderOrder}return o})}_ensureRequiredBonesExist(i){let e=Object.values(xS).filter(t=>i[t]==null);if(e.length>0)throw new Error(`VRMHumanoidLoaderPlugin: These humanoid bones are required but not exist: ${e.join(", ")}`);return i}},Dm=class extends et{constructor(){super(),this._currentTheta=0,this._currentRadius=0,this.theta=0,this.radius=0,this._currentTheta=0,this._currentRadius=0,this._attrPos=new Xe(new Float32Array(195),3),this.setAttribute("position",this._attrPos),this._attrIndex=new Xe(new Uint16Array(189),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let i=!1;this._currentTheta!==this.theta&&(this._currentTheta=this.theta,i=!0),this._currentRadius!==this.radius&&(this._currentRadius=this.radius,i=!0),i&&this._buildPosition()}_buildPosition(){this._attrPos.setXYZ(0,0,0,0);for(let i=0;i<64;i++){let e=i/63*this._currentTheta;this._attrPos.setXYZ(i+1,this._currentRadius*Math.sin(e),0,this._currentRadius*Math.cos(e))}this._attrPos.needsUpdate=!0}_buildIndex(){for(let i=0;i<63;i++)this._attrIndex.setXYZ(i*3,0,i+1,i+2);this._attrIndex.needsUpdate=!0}},ES=class extends et{constructor(){super(),this.radius=0,this._currentRadius=0,this.tail=new A,this._currentTail=new A,this._attrPos=new Xe(new Float32Array(294),3),this.setAttribute("position",this._attrPos),this._attrIndex=new Xe(new Uint16Array(194),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let i=!1;this._currentRadius!==this.radius&&(this._currentRadius=this.radius,i=!0),this._currentTail.equals(this.tail)||(this._currentTail.copy(this.tail),i=!0),i&&this._buildPosition()}_buildPosition(){for(let i=0;i<32;i++){let e=i/16*Math.PI;this._attrPos.setXYZ(i,Math.cos(e),Math.sin(e),0),this._attrPos.setXYZ(32+i,0,Math.cos(e),Math.sin(e)),this._attrPos.setXYZ(64+i,Math.sin(e),0,Math.cos(e))}this.scale(this._currentRadius,this._currentRadius,this._currentRadius),this.translate(this._currentTail.x,this._currentTail.y,this._currentTail.z),this._attrPos.setXYZ(96,0,0,0),this._attrPos.setXYZ(97,this._currentTail.x,this._currentTail.y,this._currentTail.z),this._attrPos.needsUpdate=!0}_buildIndex(){for(let i=0;i<32;i++){let e=(i+1)%32;this._attrIndex.setXY(i*2,i,e),this._attrIndex.setXY(64+i*2,32+i,32+e),this._attrIndex.setXY(128+i*2,64+i,64+e)}this._attrIndex.setXY(192,96,97),this._attrIndex.needsUpdate=!0}},cc=new me,Om=new me,Qo=new A,Nm=new A,Um=Math.sqrt(2)/2,SS=new me(0,0,-Um,Um),TS=new A(0,1,0),bS=class extends Tt{constructor(i){super(),this.matrixAutoUpdate=!1,this.vrmLookAt=i;{let e=new Dm;e.radius=.5;let t=new cn({color:65280,transparent:!0,opacity:.5,side:Ht,depthTest:!1,depthWrite:!1});this._meshPitch=new mt(e,t),this.add(this._meshPitch)}{let e=new Dm;e.radius=.5;let t=new cn({color:16711680,transparent:!0,opacity:.5,side:Ht,depthTest:!1,depthWrite:!1});this._meshYaw=new mt(e,t),this.add(this._meshYaw)}{let e=new ES;e.radius=.1;let t=new un({color:16777215,depthTest:!1,depthWrite:!1});this._lineTarget=new Hn(e,t),this._lineTarget.frustumCulled=!1,this.add(this._lineTarget)}}dispose(){this._meshYaw.geometry.dispose(),this._meshYaw.material.dispose(),this._meshPitch.geometry.dispose(),this._meshPitch.material.dispose(),this._lineTarget.geometry.dispose(),this._lineTarget.material.dispose()}updateMatrixWorld(i){let e=Ze.DEG2RAD*this.vrmLookAt.yaw;this._meshYaw.geometry.theta=e,this._meshYaw.geometry.update();let t=Ze.DEG2RAD*this.vrmLookAt.pitch;this._meshPitch.geometry.theta=t,this._meshPitch.geometry.update(),this.vrmLookAt.getLookAtWorldPosition(Qo),this.vrmLookAt.getLookAtWorldQuaternion(cc),cc.multiply(this.vrmLookAt.getFaceFrontQuaternion(Om)),this._meshYaw.position.copy(Qo),this._meshYaw.quaternion.copy(cc),this._meshPitch.position.copy(Qo),this._meshPitch.quaternion.copy(cc),this._meshPitch.quaternion.multiply(Om.setFromAxisAngle(TS,e)),this._meshPitch.quaternion.multiply(SS);let{target:n,autoUpdate:r}=this.vrmLookAt;n!=null&&r&&(n.getWorldPosition(Nm).sub(Qo),this._lineTarget.geometry.tail.copy(Nm),this._lineTarget.geometry.update(),this._lineTarget.position.copy(Qo)),super.updateMatrixWorld(i)}},wS=new A,AS=new A;function rd(i,e){return i.matrixWorld.decompose(wS,e,AS),e}function dc(i){return[Math.atan2(-i.z,i.x),Math.atan2(i.y,Math.sqrt(i.x*i.x+i.z*i.z))]}function Fm(i){let e=Math.round(i/2/Math.PI);return i-2*Math.PI*e}var Bm=new A(0,0,1),RS=new A,CS=new A,PS=new A,IS=new me,qh=new me,Hm=new me,LS=new me,Yh=new bt,fg=class pg{constructor(e,t){this.offsetFromHeadBone=new A,this.autoUpdate=!0,this.faceFront=new A(0,0,1),this.humanoid=e,this.applier=t,this._yaw=0,this._pitch=0,this._needsUpdate=!0,this._restHeadWorldQuaternion=this.getLookAtWorldQuaternion(new me)}get yaw(){return this._yaw}set yaw(e){this._yaw=e,this._needsUpdate=!0}get pitch(){return this._pitch}set pitch(e){this._pitch=e,this._needsUpdate=!0}get euler(){return console.warn("VRMLookAt: euler is deprecated. use getEuler() instead."),this.getEuler(new bt)}getEuler(e){return e.set(Ze.DEG2RAD*this._pitch,Ze.DEG2RAD*this._yaw,0,"YXZ")}copy(e){if(this.humanoid!==e.humanoid)throw new Error("VRMLookAt: humanoid must be same in order to copy");return this.offsetFromHeadBone.copy(e.offsetFromHeadBone),this.applier=e.applier,this.autoUpdate=e.autoUpdate,this.target=e.target,this.faceFront.copy(e.faceFront),this}clone(){return new pg(this.humanoid,this.applier).copy(this)}reset(){this._yaw=0,this._pitch=0,this._needsUpdate=!0}getLookAtWorldPosition(e){let t=this.humanoid.getRawBoneNode("head");return e.copy(this.offsetFromHeadBone).applyMatrix4(t.matrixWorld)}getLookAtWorldQuaternion(e){let t=this.humanoid.getRawBoneNode("head");return rd(t,e)}getFaceFrontQuaternion(e){if(this.faceFront.distanceToSquared(Bm)<.01)return e.copy(this._restHeadWorldQuaternion).invert();let[t,n]=dc(this.faceFront);return Yh.set(0,.5*Math.PI+t,n,"YZX"),e.setFromEuler(Yh).premultiply(LS.copy(this._restHeadWorldQuaternion).invert())}getLookAtWorldDirection(e){return this.getLookAtWorldQuaternion(qh),this.getFaceFrontQuaternion(Hm),e.copy(Bm).applyQuaternion(qh).applyQuaternion(Hm).applyEuler(this.getEuler(Yh))}lookAt(e){let t=IS.copy(this._restHeadWorldQuaternion).multiply(ug(this.getLookAtWorldQuaternion(qh))),n=this.getLookAtWorldPosition(CS),r=PS.copy(e).sub(n).applyQuaternion(t).normalize(),[s,o]=dc(this.faceFront),[a,l]=dc(r),c=Fm(a-s),u=Fm(o-l);this._yaw=Ze.RAD2DEG*c,this._pitch=Ze.RAD2DEG*u,this._needsUpdate=!0}update(e){this.target!=null&&this.autoUpdate&&this.lookAt(this.target.getWorldPosition(RS)),this._needsUpdate&&(this._needsUpdate=!1,this.applier.applyYawPitch(this._yaw,this._pitch))}};fg.EULER_ORDER="YXZ";var DS=fg,OS=new A(0,0,1),xi=new me,Ws=new me,Wn=new bt(0,0,0,"YXZ"),fc=class{constructor(i,e,t,n,r){this.humanoid=i,this.rangeMapHorizontalInner=e,this.rangeMapHorizontalOuter=t,this.rangeMapVerticalDown=n,this.rangeMapVerticalUp=r,this.faceFront=new A(0,0,1),this._restQuatLeftEye=new me,this._restQuatRightEye=new me,this._restLeftEyeParentWorldQuat=new me,this._restRightEyeParentWorldQuat=new me;let s=this.humanoid.getRawBoneNode("leftEye"),o=this.humanoid.getRawBoneNode("rightEye");s&&(this._restQuatLeftEye.copy(s.quaternion),rd(s.parent,this._restLeftEyeParentWorldQuat)),o&&(this._restQuatRightEye.copy(o.quaternion),rd(o.parent,this._restRightEyeParentWorldQuat))}applyYawPitch(i,e){let t=this.humanoid.getRawBoneNode("leftEye"),n=this.humanoid.getRawBoneNode("rightEye"),r=this.humanoid.getNormalizedBoneNode("leftEye"),s=this.humanoid.getNormalizedBoneNode("rightEye");t&&(e<0?Wn.x=-Ze.DEG2RAD*this.rangeMapVerticalDown.map(-e):Wn.x=Ze.DEG2RAD*this.rangeMapVerticalUp.map(e),i<0?Wn.y=-Ze.DEG2RAD*this.rangeMapHorizontalInner.map(-i):Wn.y=Ze.DEG2RAD*this.rangeMapHorizontalOuter.map(i),xi.setFromEuler(Wn),this._getWorldFaceFrontQuat(Ws),r.quaternion.copy(Ws).multiply(xi).multiply(Ws.invert()),xi.copy(this._restLeftEyeParentWorldQuat),t.quaternion.copy(r.quaternion).multiply(xi).premultiply(xi.invert()).multiply(this._restQuatLeftEye)),n&&(e<0?Wn.x=-Ze.DEG2RAD*this.rangeMapVerticalDown.map(-e):Wn.x=Ze.DEG2RAD*this.rangeMapVerticalUp.map(e),i<0?Wn.y=-Ze.DEG2RAD*this.rangeMapHorizontalOuter.map(-i):Wn.y=Ze.DEG2RAD*this.rangeMapHorizontalInner.map(i),xi.setFromEuler(Wn),this._getWorldFaceFrontQuat(Ws),s.quaternion.copy(Ws).multiply(xi).multiply(Ws.invert()),xi.copy(this._restRightEyeParentWorldQuat),n.quaternion.copy(s.quaternion).multiply(xi).premultiply(xi.invert()).multiply(this._restQuatRightEye))}lookAt(i){console.warn("VRMLookAtBoneApplier: lookAt() is deprecated. use apply() instead.");let e=Ze.RAD2DEG*i.y,t=Ze.RAD2DEG*i.x;this.applyYawPitch(e,t)}_getWorldFaceFrontQuat(i){if(this.faceFront.distanceToSquared(OS)<.01)return i.identity();let[e,t]=dc(this.faceFront);return Wn.set(0,.5*Math.PI+e,t,"YZX"),i.setFromEuler(Wn)}};fc.type="bone";var sd=class{constructor(i,e,t,n,r){this.expressions=i,this.rangeMapHorizontalInner=e,this.rangeMapHorizontalOuter=t,this.rangeMapVerticalDown=n,this.rangeMapVerticalUp=r}applyYawPitch(i,e){e<0?(this.expressions.setValue("lookDown",0),this.expressions.setValue("lookUp",this.rangeMapVerticalUp.map(-e))):(this.expressions.setValue("lookUp",0),this.expressions.setValue("lookDown",this.rangeMapVerticalDown.map(e))),i<0?(this.expressions.setValue("lookLeft",0),this.expressions.setValue("lookRight",this.rangeMapHorizontalOuter.map(-i))):(this.expressions.setValue("lookRight",0),this.expressions.setValue("lookLeft",this.rangeMapHorizontalOuter.map(i)))}lookAt(i){console.warn("VRMLookAtBoneApplier: lookAt() is deprecated. use apply() instead.");let e=Ze.RAD2DEG*i.y,t=Ze.RAD2DEG*i.x;this.applyYawPitch(e,t)}};sd.type="expression";var km=class{constructor(i,e){this.inputMaxValue=i,this.outputScale=e}map(i){return this.outputScale*ng(i/this.inputMaxValue)}},NS=new Set(["1.0","1.0-beta"]),uc=.01,US=class{get name(){return"VRMLookAtLoaderPlugin"}constructor(i,e){this.parser=i,this.helperRoot=e?.helperRoot}afterRoot(i){return _t(this,null,function*(){let e=i.userData.vrmHumanoid;if(e===null)return;if(e===void 0)throw new Error("VRMLookAtLoaderPlugin: vrmHumanoid is undefined. VRMHumanoidLoaderPlugin have to be used first");let t=i.userData.vrmExpressionManager;if(t!==null){if(t===void 0)throw new Error("VRMLookAtLoaderPlugin: vrmExpressionManager is undefined. VRMExpressionLoaderPlugin have to be used first");i.userData.vrmLookAt=yield this._import(i,e,t)}})}_import(i,e,t){return _t(this,null,function*(){if(e==null||t==null)return null;let n=yield this._v1Import(i,e,t);if(n)return n;let r=yield this._v0Import(i,e,t);return r||null})}_v1Import(i,e,t){return _t(this,null,function*(){var n,r,s;let o=this.parser.json;if(!(((n=o.extensionsUsed)==null?void 0:n.indexOf("VRMC_vrm"))!==-1))return null;let l=(r=o.extensions)==null?void 0:r.VRMC_vrm;if(!l)return null;let c=l.specVersion;if(!NS.has(c))return console.warn(`VRMLookAtLoaderPlugin: Unknown VRMC_vrm specVersion "${c}"`),null;let u=l.lookAt;if(!u)return null;let h=u.type==="expression"?1:10,d=this._v1ImportRangeMap(u.rangeMapHorizontalInner,h),f=this._v1ImportRangeMap(u.rangeMapHorizontalOuter,h),p=this._v1ImportRangeMap(u.rangeMapVerticalDown,h),_=this._v1ImportRangeMap(u.rangeMapVerticalUp,h),m;u.type==="expression"?m=new sd(t,d,f,p,_):m=new fc(e,d,f,p,_);let g=this._importLookAt(e,m);return g.offsetFromHeadBone.fromArray((s=u.offsetFromHeadBone)!=null?s:[0,.06,0]),g})}_v1ImportRangeMap(i,e){var t,n;let r=(t=i?.inputMaxValue)!=null?t:90,s=(n=i?.outputScale)!=null?n:e;return r<uc&&(console.warn("VRMLookAtLoaderPlugin: inputMaxValue of a range map is too small. Consider reviewing the range map!"),r=uc),new km(r,s)}_v0Import(i,e,t){return _t(this,null,function*(){var n,r,s,o;let l=(n=this.parser.json.extensions)==null?void 0:n.VRM;if(!l)return null;let c=l.firstPerson;if(!c)return null;let u=c.lookAtTypeName==="BlendShape"?1:10,h=this._v0ImportDegreeMap(c.lookAtHorizontalInner,u),d=this._v0ImportDegreeMap(c.lookAtHorizontalOuter,u),f=this._v0ImportDegreeMap(c.lookAtVerticalDown,u),p=this._v0ImportDegreeMap(c.lookAtVerticalUp,u),_;c.lookAtTypeName==="BlendShape"?_=new sd(t,h,d,f,p):_=new fc(e,h,d,f,p);let m=this._importLookAt(e,_);return c.firstPersonBoneOffset?m.offsetFromHeadBone.set((r=c.firstPersonBoneOffset.x)!=null?r:0,(s=c.firstPersonBoneOffset.y)!=null?s:.06,-((o=c.firstPersonBoneOffset.z)!=null?o:0)):m.offsetFromHeadBone.set(0,.06,0),m.faceFront.set(0,0,-1),_ instanceof fc&&_.faceFront.set(0,0,-1),m})}_v0ImportDegreeMap(i,e){var t,n;let r=i?.curve;JSON.stringify(r)!=="[0,0,0,1,1,1,1,0]"&&console.warn("Curves of LookAtDegreeMap defined in VRM 0.0 are not supported");let s=(t=i?.xRange)!=null?t:90,o=(n=i?.yRange)!=null?n:e;return s<uc&&(console.warn("VRMLookAtLoaderPlugin: xRange of a degree map is too small. Consider reviewing the degree map!"),s=uc),new km(s,o)}_importLookAt(i,e){let t=new DS(i,e);if(this.helperRoot){let n=new bS(t);this.helperRoot.add(n),n.renderOrder=this.helperRoot.renderOrder}return t}};function FS(i,e){return typeof i!="string"||i===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(i)&&(e=e.replace(/(^https?:\/\/[^/]+).*/i,"$1")),/^(https?:)?\/\//i.test(i)||/^data:.*,.*$/i.test(i)||/^blob:.*$/i.test(i)?i:e+i)}var BS=new Set(["1.0","1.0-beta"]),HS=class{get name(){return"VRMMetaLoaderPlugin"}constructor(i,e){var t,n,r;this.parser=i,this.needThumbnailImage=(t=e?.needThumbnailImage)!=null?t:!1,this.acceptLicenseUrls=(n=e?.acceptLicenseUrls)!=null?n:["https://vrm.dev/licenses/1.0/"],this.acceptV0Meta=(r=e?.acceptV0Meta)!=null?r:!0}afterRoot(i){return _t(this,null,function*(){i.userData.vrmMeta=yield this._import(i)})}_import(i){return _t(this,null,function*(){let e=yield this._v1Import(i);if(e!=null)return e;let t=yield this._v0Import(i);return t??null})}_v1Import(i){return _t(this,null,function*(){var e,t,n;let r=this.parser.json;if(!(((e=r.extensionsUsed)==null?void 0:e.indexOf("VRMC_vrm"))!==-1))return null;let o=(t=r.extensions)==null?void 0:t.VRMC_vrm;if(o==null)return null;let a=o.specVersion;if(!BS.has(a))return console.warn(`VRMMetaLoaderPlugin: Unknown VRMC_vrm specVersion "${a}"`),null;let l=o.meta;if(!l)return null;let c=l.licenseUrl;if(!new Set(this.acceptLicenseUrls).has(c))throw new Error(`VRMMetaLoaderPlugin: The license url "${c}" is not accepted`);let h;return this.needThumbnailImage&&l.thumbnailImage!=null&&(h=(n=yield this._extractGLTFImage(l.thumbnailImage))!=null?n:void 0),{metaVersion:"1",name:l.name,version:l.version,authors:l.authors,copyrightInformation:l.copyrightInformation,contactInformation:l.contactInformation,references:l.references,thirdPartyLicenses:l.thirdPartyLicenses,thumbnailImage:h,licenseUrl:l.licenseUrl,avatarPermission:l.avatarPermission,allowExcessivelyViolentUsage:l.allowExcessivelyViolentUsage,allowExcessivelySexualUsage:l.allowExcessivelySexualUsage,commercialUsage:l.commercialUsage,allowPoliticalOrReligiousUsage:l.allowPoliticalOrReligiousUsage,allowAntisocialOrHateUsage:l.allowAntisocialOrHateUsage,creditNotation:l.creditNotation,allowRedistribution:l.allowRedistribution,modification:l.modification,otherLicenseUrl:l.otherLicenseUrl}})}_v0Import(i){return _t(this,null,function*(){var e;let n=(e=this.parser.json.extensions)==null?void 0:e.VRM;if(!n)return null;let r=n.meta;if(!r)return null;if(!this.acceptV0Meta)throw new Error("VRMMetaLoaderPlugin: Attempted to load VRM0.0 meta but acceptV0Meta is false");let s;return this.needThumbnailImage&&r.texture!=null&&r.texture!==-1&&(s=yield this.parser.getDependency("texture",r.texture)),{metaVersion:"0",allowedUserName:r.allowedUserName,author:r.author,commercialUssageName:r.commercialUssageName,contactInformation:r.contactInformation,licenseName:r.licenseName,otherLicenseUrl:r.otherLicenseUrl,otherPermissionUrl:r.otherPermissionUrl,reference:r.reference,sexualUssageName:r.sexualUssageName,texture:s??void 0,title:r.title,version:r.version,violentUssageName:r.violentUssageName}})}_extractGLTFImage(i){return _t(this,null,function*(){var e;let n=(e=this.parser.json.images)==null?void 0:e[i];if(n==null)return console.warn(`VRMMetaLoaderPlugin: Attempt to use images[${i}] of glTF as a thumbnail but the image doesn't exist`),null;let r=n.uri;if(n.bufferView!=null){let o=yield this.parser.getDependency("bufferView",n.bufferView),a=new Blob([o],{type:n.mimeType});r=URL.createObjectURL(a)}return r==null?(console.warn(`VRMMetaLoaderPlugin: Attempt to use images[${i}] of glTF as a thumbnail but the image couldn't load properly`),null):yield new bs().loadAsync(FS(r,this.parser.options.path)).catch(o=>(console.error(o),console.warn("VRMMetaLoaderPlugin: Failed to load a thumbnail image"),null))})}},kS=class{constructor(i){this.scene=i.scene,this.meta=i.meta,this.humanoid=i.humanoid,this.expressionManager=i.expressionManager,this.firstPerson=i.firstPerson,this.lookAt=i.lookAt}update(i){this.humanoid.update(),this.lookAt&&this.lookAt.update(i),this.expressionManager&&this.expressionManager.update()}};var VS=class extends kS{constructor(i){super(i),this.materials=i.materials,this.springBoneManager=i.springBoneManager,this.nodeConstraintManager=i.nodeConstraintManager}update(i){super.update(i),this.nodeConstraintManager&&this.nodeConstraintManager.update(),this.springBoneManager&&this.springBoneManager.update(i),this.materials&&this.materials.forEach(e=>{e.update&&e.update(i)})}},zS=Object.defineProperty,Vm=Object.getOwnPropertySymbols,GS=Object.prototype.hasOwnProperty,WS=Object.prototype.propertyIsEnumerable,zm=(i,e,t)=>e in i?zS(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,Gm=(i,e)=>{for(var t in e||(e={}))GS.call(e,t)&&zm(i,t,e[t]);if(Vm)for(var t of Vm(e))WS.call(e,t)&&zm(i,t,e[t]);return i},Zr=(i,e,t)=>new Promise((n,r)=>{var s=l=>{try{a(t.next(l))}catch(c){r(c)}},o=l=>{try{a(t.throw(l))}catch(c){r(c)}},a=l=>l.done?n(l.value):Promise.resolve(l.value).then(s,o);a((t=t.apply(i,e)).next())}),XS={"":3e3,srgb:3001};function qS(i,e){parseInt("187",10)>=152?i.colorSpace=e:i.encoding=XS[e]}var YS=class{get pending(){return Promise.all(this._pendings)}constructor(i,e){this._parser=i,this._materialParams=e,this._pendings=[]}assignPrimitive(i,e){e!=null&&(this._materialParams[i]=e)}assignColor(i,e,t){if(e!=null){let n=new ue().fromArray(e);t&&n.convertSRGBToLinear(),this._materialParams[i]=n}}assignTexture(i,e,t){return Zr(this,null,function*(){let n=Zr(this,null,function*(){if(e!=null){let r=yield this._parser.assignTexture(this._materialParams,i,e);if(r==null){console.warn("GLTFMToonMaterialParamsAssignHelper: Failed to load texture. The rendering result may be wrong");return}t&&qS(r,"srgb")}});return this._pendings.push(n),n})}assignTextureByIndex(i,e,t){return Zr(this,null,function*(){return this.assignTexture(i,e!=null?{index:e}:void 0,t)})}},jS=`// #define PHONG

varying vec3 vViewPosition;

#ifndef FLAT_SHADED
  varying vec3 vNormal;
#endif

#include <common>

// #include <uv_pars_vertex>
#ifdef MTOON_USE_UV
  varying vec2 vUv;

  // COMPAT: pre-r151 uses a common uvTransform
  #if THREE_VRM_THREE_REVISION < 151
    uniform mat3 uvTransform;
  #endif
#endif

// #include <uv2_pars_vertex>
// COMAPT: pre-r151 uses uv2 for lightMap and aoMap
#if THREE_VRM_THREE_REVISION < 151
  #if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
    attribute vec2 uv2;
    varying vec2 vUv2;
    uniform mat3 uv2Transform;
  #endif
#endif

// #include <displacementmap_pars_vertex>
// #include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

#ifdef USE_OUTLINEWIDTHMULTIPLYTEXTURE
  uniform sampler2D outlineWidthMultiplyTexture;
  uniform mat3 outlineWidthMultiplyTextureUvTransform;
#endif

uniform float outlineWidthFactor;

void main() {

  // #include <uv_vertex>
  #ifdef MTOON_USE_UV
    // COMPAT: pre-r151 uses a common uvTransform
    #if THREE_VRM_THREE_REVISION >= 151
      vUv = uv;
    #else
      vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
    #endif
  #endif

  // #include <uv2_vertex>
  // COMAPT: pre-r151 uses uv2 for lightMap and aoMap
  #if THREE_VRM_THREE_REVISION < 151
    #if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
      vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
    #endif
  #endif

  #include <color_vertex>

  #include <beginnormal_vertex>
  #include <morphnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>

  // we need this to compute the outline properly
  objectNormal = normalize( objectNormal );

  #include <defaultnormal_vertex>

  #ifndef FLAT_SHADED // Normal computed with derivatives when FLAT_SHADED
    vNormal = normalize( transformedNormal );
  #endif

  #include <begin_vertex>

  #include <morphtarget_vertex>
  #include <skinning_vertex>
  // #include <displacementmap_vertex>
  #include <project_vertex>
  #include <logdepthbuf_vertex>
  #include <clipping_planes_vertex>

  vViewPosition = - mvPosition.xyz;

  #ifdef OUTLINE
    float worldNormalLength = length( transformedNormal );
    vec3 outlineOffset = outlineWidthFactor * worldNormalLength * objectNormal;

    #ifdef USE_OUTLINEWIDTHMULTIPLYTEXTURE
      vec2 outlineWidthMultiplyTextureUv = ( outlineWidthMultiplyTextureUvTransform * vec3( vUv, 1 ) ).xy;
      float outlineTex = texture2D( outlineWidthMultiplyTexture, outlineWidthMultiplyTextureUv ).g;
      outlineOffset *= outlineTex;
    #endif

    #ifdef OUTLINE_WIDTH_SCREEN
      outlineOffset *= vViewPosition.z / projectionMatrix[ 1 ].y;
    #endif

    gl_Position = projectionMatrix * modelViewMatrix * vec4( outlineOffset + transformed, 1.0 );

    gl_Position.z += 1E-6 * gl_Position.w; // anti-artifact magic
  #endif

  #include <worldpos_vertex>
  // #include <envmap_vertex>
  #include <shadowmap_vertex>
  #include <fog_vertex>

}`,ZS=`// #define PHONG

uniform vec3 litFactor;

uniform float opacity;

uniform vec3 shadeColorFactor;
#ifdef USE_SHADEMULTIPLYTEXTURE
  uniform sampler2D shadeMultiplyTexture;
  uniform mat3 shadeMultiplyTextureUvTransform;
#endif

uniform float shadingShiftFactor;
uniform float shadingToonyFactor;

#ifdef USE_SHADINGSHIFTTEXTURE
  uniform sampler2D shadingShiftTexture;
  uniform mat3 shadingShiftTextureUvTransform;
  uniform float shadingShiftTextureScale;
#endif

uniform float giEqualizationFactor;

uniform vec3 parametricRimColorFactor;
#ifdef USE_RIMMULTIPLYTEXTURE
  uniform sampler2D rimMultiplyTexture;
  uniform mat3 rimMultiplyTextureUvTransform;
#endif
uniform float rimLightingMixFactor;
uniform float parametricRimFresnelPowerFactor;
uniform float parametricRimLiftFactor;

#ifdef USE_MATCAPTEXTURE
  uniform vec3 matcapFactor;
  uniform sampler2D matcapTexture;
  uniform mat3 matcapTextureUvTransform;
#endif

uniform vec3 emissive;
uniform float emissiveIntensity;

uniform vec3 outlineColorFactor;
uniform float outlineLightingMixFactor;

#ifdef USE_UVANIMATIONMASKTEXTURE
  uniform sampler2D uvAnimationMaskTexture;
  uniform mat3 uvAnimationMaskTextureUvTransform;
#endif

uniform float uvAnimationScrollXOffset;
uniform float uvAnimationScrollYOffset;
uniform float uvAnimationRotationPhase;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>

// #include <uv_pars_fragment>
#if ( defined( MTOON_USE_UV ) && !defined( MTOON_UVS_VERTEX_ONLY ) )
  varying vec2 vUv;
#endif

// #include <uv2_pars_fragment>
// COMAPT: pre-r151 uses uv2 for lightMap and aoMap
#if THREE_VRM_THREE_REVISION < 151
  #if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
    varying vec2 vUv2;
  #endif
#endif

#include <map_pars_fragment>

#ifdef USE_MAP
  uniform mat3 mapUvTransform;
#endif

// #include <alphamap_pars_fragment>

#include <alphatest_pars_fragment>

#include <aomap_pars_fragment>
// #include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>

#ifdef USE_EMISSIVEMAP
  uniform mat3 emissiveMapUvTransform;
#endif

// #include <envmap_common_pars_fragment>
// #include <envmap_pars_fragment>
// #include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>

// #include <bsdfs>
// COMPAT: pre-r151 doesn't have BRDF_Lambert in <common>
#if THREE_VRM_THREE_REVISION < 151
  vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
    return RECIPROCAL_PI * diffuseColor;
  }
#endif

#include <lights_pars_begin>

#include <normal_pars_fragment>

// #include <lights_phong_pars_fragment>
varying vec3 vViewPosition;

struct MToonMaterial {
  vec3 diffuseColor;
  vec3 shadeColor;
  float shadingShift;
};

float linearstep( float a, float b, float t ) {
  return clamp( ( t - a ) / ( b - a ), 0.0, 1.0 );
}

/**
 * Convert NdotL into toon shading factor using shadingShift and shadingToony
 */
float getShading(
  const in float dotNL,
  const in float shadow,
  const in float shadingShift
) {
  float shading = dotNL;
  shading = shading + shadingShift;
  shading = linearstep( -1.0 + shadingToonyFactor, 1.0 - shadingToonyFactor, shading );
  shading *= shadow;
  return shading;
}

/**
 * Mix diffuseColor and shadeColor using shading factor and light color
 */
vec3 getDiffuse(
  const in MToonMaterial material,
  const in float shading,
  in vec3 lightColor
) {
  #ifdef DEBUG_LITSHADERATE
    return vec3( BRDF_Lambert( shading * lightColor ) );
  #endif

  vec3 col = lightColor * BRDF_Lambert( mix( material.shadeColor, material.diffuseColor, shading ) );

  // The "comment out if you want to PBR absolutely" line
  #ifdef V0_COMPAT_SHADE
    col = min( col, material.diffuseColor );
  #endif

  return col;
}

// COMPAT: pre-r156 uses a struct GeometricContext
#if THREE_VRM_THREE_REVISION >= 157
  void RE_Direct_MToon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in MToonMaterial material, const in float shadow, inout ReflectedLight reflectedLight ) {
    float dotNL = clamp( dot( geometryNormal, directLight.direction ), -1.0, 1.0 );
    vec3 irradiance = directLight.color;

    // directSpecular will be used for rim lighting, not an actual specular
    reflectedLight.directSpecular += irradiance;

    irradiance *= dotNL;

    float shading = getShading( dotNL, shadow, material.shadingShift );

    // toon shaded diffuse
    reflectedLight.directDiffuse += getDiffuse( material, shading, directLight.color );
  }

  void RE_IndirectDiffuse_MToon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in MToonMaterial material, inout ReflectedLight reflectedLight ) {
    // indirect diffuse will use diffuseColor, no shadeColor involved
    reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

    // directSpecular will be used for rim lighting, not an actual specular
    reflectedLight.directSpecular += irradiance;
  }
#else
  void RE_Direct_MToon( const in IncidentLight directLight, const in GeometricContext geometry, const in MToonMaterial material, const in float shadow, inout ReflectedLight reflectedLight ) {
    float dotNL = clamp( dot( geometry.normal, directLight.direction ), -1.0, 1.0 );
    vec3 irradiance = directLight.color;

    // directSpecular will be used for rim lighting, not an actual specular
    reflectedLight.directSpecular += irradiance;

    irradiance *= dotNL;

    float shading = getShading( dotNL, shadow, material.shadingShift );

    // toon shaded diffuse
    reflectedLight.directDiffuse += getDiffuse( material, shading, directLight.color );
  }

  void RE_IndirectDiffuse_MToon( const in vec3 irradiance, const in GeometricContext geometry, const in MToonMaterial material, inout ReflectedLight reflectedLight ) {
    // indirect diffuse will use diffuseColor, no shadeColor involved
    reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

    // directSpecular will be used for rim lighting, not an actual specular
    reflectedLight.directSpecular += irradiance;
  }
#endif

#define RE_Direct RE_Direct_MToon
#define RE_IndirectDiffuse RE_IndirectDiffuse_MToon
#define Material_LightProbeLOD( material ) (0)

#include <shadowmap_pars_fragment>
// #include <bumpmap_pars_fragment>

// #include <normalmap_pars_fragment>
#ifdef USE_NORMALMAP

  uniform sampler2D normalMap;
  uniform mat3 normalMapUvTransform;
  uniform vec2 normalScale;

#endif

// COMPAT: pre-r151
// USE_NORMALMAP_OBJECTSPACE used to be OBJECTSPACE_NORMALMAP in pre-r151
#if defined( USE_NORMALMAP_OBJECTSPACE ) || defined( OBJECTSPACE_NORMALMAP )

  uniform mat3 normalMatrix;

#endif

// COMPAT: pre-r151
// USE_NORMALMAP_TANGENTSPACE used to be TANGENTSPACE_NORMALMAP in pre-r151
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( TANGENTSPACE_NORMALMAP ) )

  // Per-Pixel Tangent Space Normal Mapping
  // http://hacksoflife.blogspot.ch/2009/11/per-pixel-tangent-space-normal-mapping.html

  // three-vrm specific change: it requires \`uv\` as an input in order to support uv scrolls

  // Temporary compat against shader change @ Three.js r126, r151
  #if THREE_VRM_THREE_REVISION >= 151

    mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {

      vec3 q0 = dFdx( eye_pos.xyz );
      vec3 q1 = dFdy( eye_pos.xyz );
      vec2 st0 = dFdx( uv.st );
      vec2 st1 = dFdy( uv.st );

      vec3 N = surf_norm;

      vec3 q1perp = cross( q1, N );
      vec3 q0perp = cross( N, q0 );

      vec3 T = q1perp * st0.x + q0perp * st1.x;
      vec3 B = q1perp * st0.y + q0perp * st1.y;

      float det = max( dot( T, T ), dot( B, B ) );
      float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );

      return mat3( T * scale, B * scale, N );

    }

  #else

    vec3 perturbNormal2Arb( vec2 uv, vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {

      vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
      vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
      vec2 st0 = dFdx( uv.st );
      vec2 st1 = dFdy( uv.st );

      vec3 N = normalize( surf_norm );

      vec3 q1perp = cross( q1, N );
      vec3 q0perp = cross( N, q0 );

      vec3 T = q1perp * st0.x + q0perp * st1.x;
      vec3 B = q1perp * st0.y + q0perp * st1.y;

      // three-vrm specific change: Workaround for the issue that happens when delta of uv = 0.0
      // TODO: Is this still required? Or shall I make a PR about it?
      if ( length( T ) == 0.0 || length( B ) == 0.0 ) {
        return surf_norm;
      }

      float det = max( dot( T, T ), dot( B, B ) );
      float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );

      return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );

    }

  #endif

#endif

// #include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

// == post correction ==========================================================
void postCorrection() {
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #include <fog_fragment>
  #include <premultiplied_alpha_fragment>
  #include <dithering_fragment>
}

// == main procedure ===========================================================
void main() {
  #include <clipping_planes_fragment>

  vec2 uv = vec2(0.5, 0.5);

  #if ( defined( MTOON_USE_UV ) && !defined( MTOON_UVS_VERTEX_ONLY ) )
    uv = vUv;

    float uvAnimMask = 1.0;
    #ifdef USE_UVANIMATIONMASKTEXTURE
      vec2 uvAnimationMaskTextureUv = ( uvAnimationMaskTextureUvTransform * vec3( uv, 1 ) ).xy;
      uvAnimMask = texture2D( uvAnimationMaskTexture, uvAnimationMaskTextureUv ).b;
    #endif

    float uvRotCos = cos( uvAnimationRotationPhase * uvAnimMask );
    float uvRotSin = sin( uvAnimationRotationPhase * uvAnimMask );
    uv = mat2( uvRotCos, -uvRotSin, uvRotSin, uvRotCos ) * ( uv - 0.5 ) + 0.5;
    uv = uv + vec2( uvAnimationScrollXOffset, uvAnimationScrollYOffset ) * uvAnimMask;
  #endif

  #ifdef DEBUG_UV
    gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
    #if ( defined( MTOON_USE_UV ) && !defined( MTOON_UVS_VERTEX_ONLY ) )
      gl_FragColor = vec4( uv, 0.0, 1.0 );
    #endif
    return;
  #endif

  vec4 diffuseColor = vec4( litFactor, opacity );
  ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
  vec3 totalEmissiveRadiance = emissive * emissiveIntensity;

  #include <logdepthbuf_fragment>

  // #include <map_fragment>
  #ifdef USE_MAP
    vec2 mapUv = ( mapUvTransform * vec3( uv, 1 ) ).xy;
    vec4 sampledDiffuseColor = texture2D( map, mapUv );
    #ifdef DECODE_VIDEO_TEXTURE
      sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
    #endif
    diffuseColor *= sampledDiffuseColor;
  #endif

  // #include <color_fragment>
  #if ( defined( USE_COLOR ) && !defined( IGNORE_VERTEX_COLOR ) )
    diffuseColor.rgb *= vColor;
  #endif

  // #include <alphamap_fragment>

  #include <alphatest_fragment>

  // #include <specularmap_fragment>

  // #include <normal_fragment_begin>
  float faceDirection = gl_FrontFacing ? 1.0 : -1.0;

  #ifdef FLAT_SHADED

    vec3 fdx = dFdx( vViewPosition );
    vec3 fdy = dFdy( vViewPosition );
    vec3 normal = normalize( cross( fdx, fdy ) );

  #else

    vec3 normal = normalize( vNormal );

    #ifdef DOUBLE_SIDED

      normal *= faceDirection;

    #endif

  #endif

  #ifdef USE_NORMALMAP

    vec2 normalMapUv = ( normalMapUvTransform * vec3( uv, 1 ) ).xy;

  #endif

  #ifdef USE_NORMALMAP_TANGENTSPACE

    #ifdef USE_TANGENT

      mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );

    #else

      mat3 tbn = getTangentFrame( - vViewPosition, normal, normalMapUv );

    #endif

    #if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )

      tbn[0] *= faceDirection;
      tbn[1] *= faceDirection;

    #endif

  #endif

  #ifdef USE_CLEARCOAT_NORMALMAP

    #ifdef USE_TANGENT

      mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );

    #else

      mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );

    #endif

    #if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )

      tbn2[0] *= faceDirection;
      tbn2[1] *= faceDirection;

    #endif

  #endif

  // non perturbed normal for clearcoat among others

  vec3 nonPerturbedNormal = normal;

  #ifdef OUTLINE
    normal *= -1.0;
  #endif

  // #include <normal_fragment_maps>

  // COMPAT: pre-r151
  // USE_NORMALMAP_OBJECTSPACE used to be OBJECTSPACE_NORMALMAP in pre-r151
  #if defined( USE_NORMALMAP_OBJECTSPACE ) || defined( OBJECTSPACE_NORMALMAP )

    normal = texture2D( normalMap, normalMapUv ).xyz * 2.0 - 1.0; // overrides both flatShading and attribute normals

    #ifdef FLIP_SIDED

      normal = - normal;

    #endif

    #ifdef DOUBLE_SIDED

      normal = normal * faceDirection;

    #endif

    normal = normalize( normalMatrix * normal );

  // COMPAT: pre-r151
  // USE_NORMALMAP_TANGENTSPACE used to be TANGENTSPACE_NORMALMAP in pre-r151
  #elif defined( USE_NORMALMAP_TANGENTSPACE ) || defined( TANGENTSPACE_NORMALMAP )

    vec3 mapN = texture2D( normalMap, normalMapUv ).xyz * 2.0 - 1.0;
    mapN.xy *= normalScale;

    // COMPAT: pre-r151
    #if THREE_VRM_THREE_REVISION >= 151 || defined( USE_TANGENT )

      normal = normalize( tbn * mapN );

    #else

      normal = perturbNormal2Arb( uv, -vViewPosition, normal, mapN, faceDirection );

    #endif

  #endif

  // #include <emissivemap_fragment>
  #ifdef USE_EMISSIVEMAP
    vec2 emissiveMapUv = ( emissiveMapUvTransform * vec3( uv, 1 ) ).xy;
    totalEmissiveRadiance *= texture2D( emissiveMap, emissiveMapUv ).rgb;
  #endif

  #ifdef DEBUG_NORMAL
    gl_FragColor = vec4( 0.5 + 0.5 * normal, 1.0 );
    return;
  #endif

  // -- MToon: lighting --------------------------------------------------------
  // accumulation
  // #include <lights_phong_fragment>
  MToonMaterial material;

  material.diffuseColor = diffuseColor.rgb;

  material.shadeColor = shadeColorFactor;
  #ifdef USE_SHADEMULTIPLYTEXTURE
    vec2 shadeMultiplyTextureUv = ( shadeMultiplyTextureUvTransform * vec3( uv, 1 ) ).xy;
    material.shadeColor *= texture2D( shadeMultiplyTexture, shadeMultiplyTextureUv ).rgb;
  #endif

  #if ( defined( USE_COLOR ) && !defined( IGNORE_VERTEX_COLOR ) )
    material.shadeColor.rgb *= vColor;
  #endif

  material.shadingShift = shadingShiftFactor;
  #ifdef USE_SHADINGSHIFTTEXTURE
    vec2 shadingShiftTextureUv = ( shadingShiftTextureUvTransform * vec3( uv, 1 ) ).xy;
    material.shadingShift += texture2D( shadingShiftTexture, shadingShiftTextureUv ).r * shadingShiftTextureScale;
  #endif

  // #include <lights_fragment_begin>

  // MToon Specific changes:
  // Since we want to take shadows into account of shading instead of irradiance,
  // we had to modify the codes that multiplies the results of shadowmap into color of direct lights.

  // COMPAT: pre-r156 uses a struct GeometricContext
  #if THREE_VRM_THREE_REVISION >= 157
    vec3 geometryPosition = - vViewPosition;
    vec3 geometryNormal = normal;
    vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );

    vec3 geometryClearcoatNormal;

    #ifdef USE_CLEARCOAT

      geometryClearcoatNormal = clearcoatNormal;

    #endif
  #else
    GeometricContext geometry;

    geometry.position = - vViewPosition;
    geometry.normal = normal;
    geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );

    #ifdef USE_CLEARCOAT

      geometry.clearcoatNormal = clearcoatNormal;

    #endif
  #endif

  IncidentLight directLight;

  // since these variables will be used in unrolled loop, we have to define in prior
  float shadow;

  #if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )

    PointLight pointLight;
    #if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
    PointLightShadow pointLightShadow;
    #endif

    #pragma unroll_loop_start
    for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {

      pointLight = pointLights[ i ];

      // COMPAT: pre-r156 uses a struct GeometricContext
      #if THREE_VRM_THREE_REVISION >= 157
        getPointLightInfo( pointLight, geometryPosition, directLight );
      #else
        getPointLightInfo( pointLight, geometry, directLight );
      #endif

      shadow = 1.0;
      #if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
      pointLightShadow = pointLightShadows[ i ];
      // COMPAT: pre-r166
      // r166 introduced shadowIntensity
      #if THREE_VRM_THREE_REVISION >= 166
        shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
      #else
        shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
      #endif
      #endif

      // COMPAT: pre-r156 uses a struct GeometricContext
      #if THREE_VRM_THREE_REVISION >= 157
        RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, shadow, reflectedLight );
      #else
        RE_Direct( directLight, geometry, material, shadow, reflectedLight );
      #endif

    }
    #pragma unroll_loop_end

  #endif

  #if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )

    SpotLight spotLight;
    // COMPAT: pre-r144 uses NUM_SPOT_LIGHT_SHADOWS, r144+ uses NUM_SPOT_LIGHT_COORDS
    #if THREE_VRM_THREE_REVISION >= 144
      #if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_COORDS > 0
      SpotLightShadow spotLightShadow;
      #endif
    #elif defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
    SpotLightShadow spotLightShadow;
    #endif

    #pragma unroll_loop_start
    for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {

      spotLight = spotLights[ i ];

      // COMPAT: pre-r156 uses a struct GeometricContext
      #if THREE_VRM_THREE_REVISION >= 157
        getSpotLightInfo( spotLight, geometryPosition, directLight );
      #else
        getSpotLightInfo( spotLight, geometry, directLight );
      #endif

      shadow = 1.0;
      // COMPAT: pre-r144 uses NUM_SPOT_LIGHT_SHADOWS and vSpotShadowCoord, r144+ uses NUM_SPOT_LIGHT_COORDS and vSpotLightCoord
      // COMPAT: pre-r166 does not have shadowIntensity, r166+ has shadowIntensity
      #if THREE_VRM_THREE_REVISION >= 166
        #if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_COORDS )
        spotLightShadow = spotLightShadows[ i ];
        shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
        #endif
      #elif THREE_VRM_THREE_REVISION >= 144
        #if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_COORDS )
        spotLightShadow = spotLightShadows[ i ];
        shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
        #endif
      #elif defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
      spotLightShadow = spotLightShadows[ i ];
      shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
      #endif

      // COMPAT: pre-r156 uses a struct GeometricContext
      #if THREE_VRM_THREE_REVISION >= 157
        RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, shadow, reflectedLight );
      #else
        RE_Direct( directLight, geometry, material, shadow, reflectedLight );
      #endif

    }
    #pragma unroll_loop_end

  #endif

  #if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )

    DirectionalLight directionalLight;
    #if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
    DirectionalLightShadow directionalLightShadow;
    #endif

    #pragma unroll_loop_start
    for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {

      directionalLight = directionalLights[ i ];

      // COMPAT: pre-r156 uses a struct GeometricContext
      #if THREE_VRM_THREE_REVISION >= 157
        getDirectionalLightInfo( directionalLight, directLight );
      #else
        getDirectionalLightInfo( directionalLight, geometry, directLight );
      #endif

      shadow = 1.0;
      #if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
      directionalLightShadow = directionalLightShadows[ i ];
      // COMPAT: pre-r166
      // r166 introduced shadowIntensity
      #if THREE_VRM_THREE_REVISION >= 166
        shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
      #else
        shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
      #endif
      #endif

      // COMPAT: pre-r156 uses a struct GeometricContext
      #if THREE_VRM_THREE_REVISION >= 157
        RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, shadow, reflectedLight );
      #else
        RE_Direct( directLight, geometry, material, shadow, reflectedLight );
      #endif

    }
    #pragma unroll_loop_end

  #endif

  // #if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )

  //   RectAreaLight rectAreaLight;

  //   #pragma unroll_loop_start
  //   for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {

  //     rectAreaLight = rectAreaLights[ i ];
  //     RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );

  //   }
  //   #pragma unroll_loop_end

  // #endif

  #if defined( RE_IndirectDiffuse )

    vec3 iblIrradiance = vec3( 0.0 );

    vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );

    // COMPAT: pre-r156 uses a struct GeometricContext
    // COMPAT: pre-r156 doesn't have a define USE_LIGHT_PROBES
    #if THREE_VRM_THREE_REVISION >= 157
      #if defined( USE_LIGHT_PROBES )
        irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
      #endif
    #else
      irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
    #endif

    #if ( NUM_HEMI_LIGHTS > 0 )

      #pragma unroll_loop_start
      for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {

        // COMPAT: pre-r156 uses a struct GeometricContext
        #if THREE_VRM_THREE_REVISION >= 157
          irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
        #else
          irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
        #endif

      }
      #pragma unroll_loop_end

    #endif

  #endif

  // #if defined( RE_IndirectSpecular )

  //   vec3 radiance = vec3( 0.0 );
  //   vec3 clearcoatRadiance = vec3( 0.0 );

  // #endif

  #include <lights_fragment_maps>
  #include <lights_fragment_end>

  // modulation
  #include <aomap_fragment>

  vec3 col = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;

  #ifdef DEBUG_LITSHADERATE
    gl_FragColor = vec4( col, diffuseColor.a );
    postCorrection();
    return;
  #endif

  // -- MToon: rim lighting -----------------------------------------
  vec3 viewDir = normalize( vViewPosition );

  #ifndef PHYSICALLY_CORRECT_LIGHTS
    reflectedLight.directSpecular /= PI;
  #endif
  vec3 rimMix = mix( vec3( 1.0 ), reflectedLight.directSpecular, rimLightingMixFactor );

  vec3 rim = parametricRimColorFactor * pow( saturate( 1.0 - dot( viewDir, normal ) + parametricRimLiftFactor ), parametricRimFresnelPowerFactor );

  #ifdef USE_MATCAPTEXTURE
    {
      vec3 x = normalize( vec3( viewDir.z, 0.0, -viewDir.x ) );
      vec3 y = cross( viewDir, x ); // guaranteed to be normalized
      vec2 sphereUv = 0.5 + 0.5 * vec2( dot( x, normal ), -dot( y, normal ) );
      sphereUv = ( matcapTextureUvTransform * vec3( sphereUv, 1 ) ).xy;
      vec3 matcap = texture2D( matcapTexture, sphereUv ).rgb;
      rim += matcapFactor * matcap;
    }
  #endif

  #ifdef USE_RIMMULTIPLYTEXTURE
    vec2 rimMultiplyTextureUv = ( rimMultiplyTextureUvTransform * vec3( uv, 1 ) ).xy;
    rim *= texture2D( rimMultiplyTexture, rimMultiplyTextureUv ).rgb;
  #endif

  col += rimMix * rim;

  // -- MToon: Emission --------------------------------------------------------
  col += totalEmissiveRadiance;

  // #include <envmap_fragment>

  // -- Almost done! -----------------------------------------------------------
  #if defined( OUTLINE )
    col = outlineColorFactor.rgb * mix( vec3( 1.0 ), col, outlineLightingMixFactor );
  #endif

  #ifdef OPAQUE
    diffuseColor.a = 1.0;
  #endif

  gl_FragColor = vec4( col, diffuseColor.a );
  postCorrection();
}
`,KS={None:"none",Normal:"normal",LitShadeRate:"litShadeRate",UV:"uv"},Wm={None:"none",WorldCoordinates:"worldCoordinates",ScreenCoordinates:"screenCoordinates"},$S={3e3:"",3001:"srgb"};function jh(i){return parseInt("187",10)>=152?i.colorSpace:$S[i.encoding]}var JS=class extends qt{constructor(i={}){var e;super({vertexShader:jS,fragmentShader:ZS}),this.uvAnimationScrollXSpeedFactor=0,this.uvAnimationScrollYSpeedFactor=0,this.uvAnimationRotationSpeedFactor=0,this.fog=!0,this.normalMapType=hr,this._ignoreVertexColor=!0,this._v0CompatShade=!1,this._debugMode=KS.None,this._outlineWidthMode=Wm.None,this._isOutline=!1,i.transparentWithZWrite&&(i.depthWrite=!0),delete i.transparentWithZWrite,i.fog=!0,i.lights=!0,i.clipping=!0,this.uniforms=Ns.merge([Me.common,Me.normalmap,Me.emissivemap,Me.fog,Me.lights,{litFactor:{value:new ue(1,1,1)},mapUvTransform:{value:new Le},colorAlpha:{value:1},normalMapUvTransform:{value:new Le},shadeColorFactor:{value:new ue(0,0,0)},shadeMultiplyTexture:{value:null},shadeMultiplyTextureUvTransform:{value:new Le},shadingShiftFactor:{value:0},shadingShiftTexture:{value:null},shadingShiftTextureUvTransform:{value:new Le},shadingShiftTextureScale:{value:1},shadingToonyFactor:{value:.9},giEqualizationFactor:{value:.9},matcapFactor:{value:new ue(1,1,1)},matcapTexture:{value:null},matcapTextureUvTransform:{value:new Le},parametricRimColorFactor:{value:new ue(0,0,0)},rimMultiplyTexture:{value:null},rimMultiplyTextureUvTransform:{value:new Le},rimLightingMixFactor:{value:1},parametricRimFresnelPowerFactor:{value:5},parametricRimLiftFactor:{value:0},emissive:{value:new ue(0,0,0)},emissiveIntensity:{value:1},emissiveMapUvTransform:{value:new Le},outlineWidthMultiplyTexture:{value:null},outlineWidthMultiplyTextureUvTransform:{value:new Le},outlineWidthFactor:{value:0},outlineColorFactor:{value:new ue(0,0,0)},outlineLightingMixFactor:{value:1},uvAnimationMaskTexture:{value:null},uvAnimationMaskTextureUvTransform:{value:new Le},uvAnimationScrollXOffset:{value:0},uvAnimationScrollYOffset:{value:0},uvAnimationRotationPhase:{value:0}},(e=i.uniforms)!=null?e:{}]),this.setValues(i),this._uploadUniformsWorkaround(),this.customProgramCacheKey=()=>[...Object.entries(this._generateDefines()).map(([t,n])=>`${t}:${n}`),this.matcapTexture?`matcapTextureColorSpace:${jh(this.matcapTexture)}`:"",this.shadeMultiplyTexture?`shadeMultiplyTextureColorSpace:${jh(this.shadeMultiplyTexture)}`:"",this.rimMultiplyTexture?`rimMultiplyTextureColorSpace:${jh(this.rimMultiplyTexture)}`:""].join(","),this.onBeforeCompile=t=>{let n=parseInt("187",10),r=Object.entries(Gm(Gm({},this._generateDefines()),this.defines)).filter(([s,o])=>!!o).map(([s,o])=>`#define ${s} ${o}`).join(`
`)+`
`;t.vertexShader=r+t.vertexShader,t.fragmentShader=r+t.fragmentShader,n<154&&(t.fragmentShader=t.fragmentShader.replace("#include <colorspace_fragment>","#include <encodings_fragment>"))}}get color(){return this.uniforms.litFactor.value}set color(i){this.uniforms.litFactor.value=i}get map(){return this.uniforms.map.value}set map(i){this.uniforms.map.value=i}get normalMap(){return this.uniforms.normalMap.value}set normalMap(i){this.uniforms.normalMap.value=i}get normalScale(){return this.uniforms.normalScale.value}set normalScale(i){this.uniforms.normalScale.value=i}get emissive(){return this.uniforms.emissive.value}set emissive(i){this.uniforms.emissive.value=i}get emissiveIntensity(){return this.uniforms.emissiveIntensity.value}set emissiveIntensity(i){this.uniforms.emissiveIntensity.value=i}get emissiveMap(){return this.uniforms.emissiveMap.value}set emissiveMap(i){this.uniforms.emissiveMap.value=i}get shadeColorFactor(){return this.uniforms.shadeColorFactor.value}set shadeColorFactor(i){this.uniforms.shadeColorFactor.value=i}get shadeMultiplyTexture(){return this.uniforms.shadeMultiplyTexture.value}set shadeMultiplyTexture(i){this.uniforms.shadeMultiplyTexture.value=i}get shadingShiftFactor(){return this.uniforms.shadingShiftFactor.value}set shadingShiftFactor(i){this.uniforms.shadingShiftFactor.value=i}get shadingShiftTexture(){return this.uniforms.shadingShiftTexture.value}set shadingShiftTexture(i){this.uniforms.shadingShiftTexture.value=i}get shadingShiftTextureScale(){return this.uniforms.shadingShiftTextureScale.value}set shadingShiftTextureScale(i){this.uniforms.shadingShiftTextureScale.value=i}get shadingToonyFactor(){return this.uniforms.shadingToonyFactor.value}set shadingToonyFactor(i){this.uniforms.shadingToonyFactor.value=i}get giEqualizationFactor(){return this.uniforms.giEqualizationFactor.value}set giEqualizationFactor(i){this.uniforms.giEqualizationFactor.value=i}get matcapFactor(){return this.uniforms.matcapFactor.value}set matcapFactor(i){this.uniforms.matcapFactor.value=i}get matcapTexture(){return this.uniforms.matcapTexture.value}set matcapTexture(i){this.uniforms.matcapTexture.value=i}get parametricRimColorFactor(){return this.uniforms.parametricRimColorFactor.value}set parametricRimColorFactor(i){this.uniforms.parametricRimColorFactor.value=i}get rimMultiplyTexture(){return this.uniforms.rimMultiplyTexture.value}set rimMultiplyTexture(i){this.uniforms.rimMultiplyTexture.value=i}get rimLightingMixFactor(){return this.uniforms.rimLightingMixFactor.value}set rimLightingMixFactor(i){this.uniforms.rimLightingMixFactor.value=i}get parametricRimFresnelPowerFactor(){return this.uniforms.parametricRimFresnelPowerFactor.value}set parametricRimFresnelPowerFactor(i){this.uniforms.parametricRimFresnelPowerFactor.value=i}get parametricRimLiftFactor(){return this.uniforms.parametricRimLiftFactor.value}set parametricRimLiftFactor(i){this.uniforms.parametricRimLiftFactor.value=i}get outlineWidthMultiplyTexture(){return this.uniforms.outlineWidthMultiplyTexture.value}set outlineWidthMultiplyTexture(i){this.uniforms.outlineWidthMultiplyTexture.value=i}get outlineWidthFactor(){return this.uniforms.outlineWidthFactor.value}set outlineWidthFactor(i){this.uniforms.outlineWidthFactor.value=i}get outlineColorFactor(){return this.uniforms.outlineColorFactor.value}set outlineColorFactor(i){this.uniforms.outlineColorFactor.value=i}get outlineLightingMixFactor(){return this.uniforms.outlineLightingMixFactor.value}set outlineLightingMixFactor(i){this.uniforms.outlineLightingMixFactor.value=i}get uvAnimationMaskTexture(){return this.uniforms.uvAnimationMaskTexture.value}set uvAnimationMaskTexture(i){this.uniforms.uvAnimationMaskTexture.value=i}get uvAnimationScrollXOffset(){return this.uniforms.uvAnimationScrollXOffset.value}set uvAnimationScrollXOffset(i){this.uniforms.uvAnimationScrollXOffset.value=i}get uvAnimationScrollYOffset(){return this.uniforms.uvAnimationScrollYOffset.value}set uvAnimationScrollYOffset(i){this.uniforms.uvAnimationScrollYOffset.value=i}get uvAnimationRotationPhase(){return this.uniforms.uvAnimationRotationPhase.value}set uvAnimationRotationPhase(i){this.uniforms.uvAnimationRotationPhase.value=i}get ignoreVertexColor(){return this._ignoreVertexColor}set ignoreVertexColor(i){this._ignoreVertexColor=i,this.needsUpdate=!0}get v0CompatShade(){return this._v0CompatShade}set v0CompatShade(i){this._v0CompatShade=i,this.needsUpdate=!0}get debugMode(){return this._debugMode}set debugMode(i){this._debugMode=i,this.needsUpdate=!0}get outlineWidthMode(){return this._outlineWidthMode}set outlineWidthMode(i){this._outlineWidthMode=i,this.needsUpdate=!0}get isOutline(){return this._isOutline}set isOutline(i){this._isOutline=i,this.needsUpdate=!0}get isMToonMaterial(){return!0}update(i){this._uploadUniformsWorkaround(),this._updateUVAnimation(i)}copy(i){return super.copy(i),this.map=i.map,this.normalMap=i.normalMap,this.emissiveMap=i.emissiveMap,this.shadeMultiplyTexture=i.shadeMultiplyTexture,this.shadingShiftTexture=i.shadingShiftTexture,this.matcapTexture=i.matcapTexture,this.rimMultiplyTexture=i.rimMultiplyTexture,this.outlineWidthMultiplyTexture=i.outlineWidthMultiplyTexture,this.uvAnimationMaskTexture=i.uvAnimationMaskTexture,this.normalMapType=i.normalMapType,this.uvAnimationScrollXSpeedFactor=i.uvAnimationScrollXSpeedFactor,this.uvAnimationScrollYSpeedFactor=i.uvAnimationScrollYSpeedFactor,this.uvAnimationRotationSpeedFactor=i.uvAnimationRotationSpeedFactor,this.ignoreVertexColor=i.ignoreVertexColor,this.v0CompatShade=i.v0CompatShade,this.debugMode=i.debugMode,this.outlineWidthMode=i.outlineWidthMode,this.isOutline=i.isOutline,this.needsUpdate=!0,this}_updateUVAnimation(i){this.uniforms.uvAnimationScrollXOffset.value+=i*this.uvAnimationScrollXSpeedFactor,this.uniforms.uvAnimationScrollYOffset.value+=i*this.uvAnimationScrollYSpeedFactor,this.uniforms.uvAnimationRotationPhase.value+=i*this.uvAnimationRotationSpeedFactor,this.uniforms.alphaTest.value=this.alphaTest,this.uniformsNeedUpdate=!0}_uploadUniformsWorkaround(){this.uniforms.opacity.value=this.opacity,this._updateTextureMatrix(this.uniforms.map,this.uniforms.mapUvTransform),this._updateTextureMatrix(this.uniforms.normalMap,this.uniforms.normalMapUvTransform),this._updateTextureMatrix(this.uniforms.emissiveMap,this.uniforms.emissiveMapUvTransform),this._updateTextureMatrix(this.uniforms.shadeMultiplyTexture,this.uniforms.shadeMultiplyTextureUvTransform),this._updateTextureMatrix(this.uniforms.shadingShiftTexture,this.uniforms.shadingShiftTextureUvTransform),this._updateTextureMatrix(this.uniforms.matcapTexture,this.uniforms.matcapTextureUvTransform),this._updateTextureMatrix(this.uniforms.rimMultiplyTexture,this.uniforms.rimMultiplyTextureUvTransform),this._updateTextureMatrix(this.uniforms.outlineWidthMultiplyTexture,this.uniforms.outlineWidthMultiplyTextureUvTransform),this._updateTextureMatrix(this.uniforms.uvAnimationMaskTexture,this.uniforms.uvAnimationMaskTextureUvTransform),this.uniformsNeedUpdate=!0}_generateDefines(){let i=parseInt("187",10),e=this.outlineWidthMultiplyTexture!==null,t=this.map!==null||this.normalMap!==null||this.emissiveMap!==null||this.shadeMultiplyTexture!==null||this.shadingShiftTexture!==null||this.rimMultiplyTexture!==null||this.uvAnimationMaskTexture!==null;return{THREE_VRM_THREE_REVISION:i,OUTLINE:this._isOutline,MTOON_USE_UV:e||t,MTOON_UVS_VERTEX_ONLY:e&&!t,V0_COMPAT_SHADE:this._v0CompatShade,USE_SHADEMULTIPLYTEXTURE:this.shadeMultiplyTexture!==null,USE_SHADINGSHIFTTEXTURE:this.shadingShiftTexture!==null,USE_MATCAPTEXTURE:this.matcapTexture!==null,USE_RIMMULTIPLYTEXTURE:this.rimMultiplyTexture!==null,USE_OUTLINEWIDTHMULTIPLYTEXTURE:this._isOutline&&this.outlineWidthMultiplyTexture!==null,USE_UVANIMATIONMASKTEXTURE:this.uvAnimationMaskTexture!==null,IGNORE_VERTEX_COLOR:this._ignoreVertexColor===!0,DEBUG_NORMAL:this._debugMode==="normal",DEBUG_LITSHADERATE:this._debugMode==="litShadeRate",DEBUG_UV:this._debugMode==="uv",OUTLINE_WIDTH_SCREEN:this._isOutline&&this._outlineWidthMode===Wm.ScreenCoordinates}}_updateTextureMatrix(i,e){i.value&&(i.value.matrixAutoUpdate&&i.value.updateMatrix(),e.value.copy(i.value.matrix))}},QS=new Set(["1.0","1.0-beta"]),mg=class pc{get name(){return pc.EXTENSION_NAME}constructor(e,t={}){var n,r,s,o;this.parser=e,this.materialType=(n=t.materialType)!=null?n:JS,this.renderOrderOffset=(r=t.renderOrderOffset)!=null?r:0,this.v0CompatShade=(s=t.v0CompatShade)!=null?s:!1,this.debugMode=(o=t.debugMode)!=null?o:"none",this._mToonMaterialSet=new Set}beforeRoot(){return Zr(this,null,function*(){this._removeUnlitExtensionIfMToonExists()})}afterRoot(e){return Zr(this,null,function*(){e.userData.vrmMToonMaterials=Array.from(this._mToonMaterialSet)})}getMaterialType(e){return this._getMToonExtension(e)?this.materialType:null}extendMaterialParams(e,t){let n=this._getMToonExtension(e);return n?this._extendMaterialParams(n,t):null}loadMesh(e){return Zr(this,null,function*(){var t;let n=this.parser,s=(t=n.json.meshes)==null?void 0:t[e];if(s==null)throw new Error(`MToonMaterialLoaderPlugin: Attempt to use meshes[${e}] of glTF but the mesh doesn't exist`);let o=s.primitives,a=yield n.loadMesh(e);if(o.length===1){let l=a,c=o[0].material;c!=null&&this._setupPrimitive(l,c)}else{let l=a;for(let c=0;c<o.length;c++){let u=l.children[c],h=o[c].material;h!=null&&this._setupPrimitive(u,h)}}return a})}_removeUnlitExtensionIfMToonExists(){let n=this.parser.json.materials;n?.map((r,s)=>{var o;this._getMToonExtension(s)&&((o=r.extensions)!=null&&o.KHR_materials_unlit)&&delete r.extensions.KHR_materials_unlit})}_getMToonExtension(e){var t,n;let o=(t=this.parser.json.materials)==null?void 0:t[e];if(o==null){console.warn(`MToonMaterialLoaderPlugin: Attempt to use materials[${e}] of glTF but the material doesn't exist`);return}let a=(n=o.extensions)==null?void 0:n[pc.EXTENSION_NAME];if(a==null)return;let l=a.specVersion;if(!QS.has(l)){console.warn(`MToonMaterialLoaderPlugin: Unknown ${pc.EXTENSION_NAME} specVersion "${l}"`);return}return a}_extendMaterialParams(e,t){return Zr(this,null,function*(){var n;delete t.metalness,delete t.roughness;let r=new YS(this.parser,t);r.assignPrimitive("transparentWithZWrite",e.transparentWithZWrite),r.assignColor("shadeColorFactor",e.shadeColorFactor),r.assignTexture("shadeMultiplyTexture",e.shadeMultiplyTexture,!0),r.assignPrimitive("shadingShiftFactor",e.shadingShiftFactor),r.assignTexture("shadingShiftTexture",e.shadingShiftTexture,!0),r.assignPrimitive("shadingShiftTextureScale",(n=e.shadingShiftTexture)==null?void 0:n.scale),r.assignPrimitive("shadingToonyFactor",e.shadingToonyFactor),r.assignPrimitive("giEqualizationFactor",e.giEqualizationFactor),r.assignColor("matcapFactor",e.matcapFactor),r.assignTexture("matcapTexture",e.matcapTexture,!0),r.assignColor("parametricRimColorFactor",e.parametricRimColorFactor),r.assignTexture("rimMultiplyTexture",e.rimMultiplyTexture,!0),r.assignPrimitive("rimLightingMixFactor",e.rimLightingMixFactor),r.assignPrimitive("parametricRimFresnelPowerFactor",e.parametricRimFresnelPowerFactor),r.assignPrimitive("parametricRimLiftFactor",e.parametricRimLiftFactor),r.assignPrimitive("outlineWidthMode",e.outlineWidthMode),r.assignPrimitive("outlineWidthFactor",e.outlineWidthFactor),r.assignTexture("outlineWidthMultiplyTexture",e.outlineWidthMultiplyTexture,!1),r.assignColor("outlineColorFactor",e.outlineColorFactor),r.assignPrimitive("outlineLightingMixFactor",e.outlineLightingMixFactor),r.assignTexture("uvAnimationMaskTexture",e.uvAnimationMaskTexture,!1),r.assignPrimitive("uvAnimationScrollXSpeedFactor",e.uvAnimationScrollXSpeedFactor),r.assignPrimitive("uvAnimationScrollYSpeedFactor",e.uvAnimationScrollYSpeedFactor),r.assignPrimitive("uvAnimationRotationSpeedFactor",e.uvAnimationRotationSpeedFactor),r.assignPrimitive("v0CompatShade",this.v0CompatShade),r.assignPrimitive("debugMode",this.debugMode),yield r.pending})}_setupPrimitive(e,t){let n=this._getMToonExtension(t);if(n){let r=this._parseRenderOrder(n);e.renderOrder=r+this.renderOrderOffset,this._generateOutline(e),this._addToMaterialSet(e);return}}_shouldGenerateOutline(e){return typeof e.outlineWidthMode=="string"&&e.outlineWidthMode!=="none"&&typeof e.outlineWidthFactor=="number"&&e.outlineWidthFactor>0}_generateOutline(e){let t=e.material;if(!(t instanceof Xt)||!this._shouldGenerateOutline(t))return;e.material=[t];let n=t.clone();n.name+=" (Outline)",n.isOutline=!0,n.side=kt,e.material.push(n);let r=e.geometry,s=r.index?r.index.count:r.attributes.position.count/3;r.addGroup(0,s,0),r.addGroup(0,s,1)}_addToMaterialSet(e){let t=e.material,n=new Set;Array.isArray(t)?t.forEach(r=>n.add(r)):n.add(t);for(let r of n)this._mToonMaterialSet.add(r)}_parseRenderOrder(e){var t;return(e.transparentWithZWrite?0:19)+((t=e.renderQueueOffsetNumber)!=null?t:0)}};mg.EXTENSION_NAME="VRMC_materials_mtoon";var eT=mg,tT=(i,e,t)=>new Promise((n,r)=>{var s=l=>{try{a(t.next(l))}catch(c){r(c)}},o=l=>{try{a(t.throw(l))}catch(c){r(c)}},a=l=>l.done?n(l.value):Promise.resolve(l.value).then(s,o);a((t=t.apply(i,e)).next())}),gg=class od{get name(){return od.EXTENSION_NAME}constructor(e){this.parser=e}extendMaterialParams(e,t){return tT(this,null,function*(){let n=this._getHDREmissiveMultiplierExtension(e);if(n==null)return;console.warn("VRMMaterialsHDREmissiveMultiplierLoaderPlugin: `VRMC_materials_hdr_emissiveMultiplier` is archived. Use `KHR_materials_emissive_strength` instead.");let r=n.emissiveMultiplier;t.emissiveIntensity=r})}_getHDREmissiveMultiplierExtension(e){var t,n;let o=(t=this.parser.json.materials)==null?void 0:t[e];if(o==null){console.warn(`VRMMaterialsHDREmissiveMultiplierLoaderPlugin: Attempt to use materials[${e}] of glTF but the material doesn't exist`);return}let a=(n=o.extensions)==null?void 0:n[od.EXTENSION_NAME];if(a!=null)return a}};gg.EXTENSION_NAME="VRMC_materials_hdr_emissiveMultiplier";var nT=gg,iT=Object.defineProperty,rT=Object.defineProperties,sT=Object.getOwnPropertyDescriptors,Xm=Object.getOwnPropertySymbols,oT=Object.prototype.hasOwnProperty,aT=Object.prototype.propertyIsEnumerable,qm=(i,e,t)=>e in i?iT(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,yi=(i,e)=>{for(var t in e||(e={}))oT.call(e,t)&&qm(i,t,e[t]);if(Xm)for(var t of Xm(e))aT.call(e,t)&&qm(i,t,e[t]);return i},Ym=(i,e)=>rT(i,sT(e)),lT=(i,e,t)=>new Promise((n,r)=>{var s=l=>{try{a(t.next(l))}catch(c){r(c)}},o=l=>{try{a(t.throw(l))}catch(c){r(c)}},a=l=>l.done?n(l.value):Promise.resolve(l.value).then(s,o);a((t=t.apply(i,e)).next())});function Xs(i){return Math.pow(i,2.2)}var cT=class{get name(){return"VRMMaterialsV0CompatPlugin"}constructor(i){var e;this.parser=i,this._renderQueueMapTransparent=new Map,this._renderQueueMapTransparentZWrite=new Map;let t=this.parser.json;t.extensionsUsed=(e=t.extensionsUsed)!=null?e:[],t.extensionsUsed.indexOf("KHR_texture_transform")===-1&&t.extensionsUsed.push("KHR_texture_transform")}beforeRoot(){return lT(this,null,function*(){var i;let e=this.parser.json,t=(i=e.extensions)==null?void 0:i.VRM,n=t?.materialProperties;n&&(this._populateRenderQueueMap(n),n.forEach((r,s)=>{var o,a;let l=(o=e.materials)==null?void 0:o[s];if(l==null){console.warn(`VRMMaterialsV0CompatPlugin: Attempt to use materials[${s}] of glTF but the material doesn't exist`);return}if(r.shader==="VRM/MToon"){let c=this._parseV0MToonProperties(r,l);e.materials[s]=c}else if((a=r.shader)!=null&&a.startsWith("VRM/Unlit")){let c=this._parseV0UnlitProperties(r,l);e.materials[s]=c}else r.shader==="VRM_USE_GLTFSHADER"||console.warn(`VRMMaterialsV0CompatPlugin: Unknown shader: ${r.shader}`)}))})}_parseV0MToonProperties(i,e){var t,n,r,s,o,a,l,c,u,h,d,f,p,_,m,g,y,M,x,w,b,v,T,O,C,I,U,Y,L,X,j,z,re,W,J,ne,Ae,Ue,$,_e,we,Fe,Se,qe,yt,Be,Je,ot,He,ht,Lt,zt,Mt,sn,Dt;let wt=(n=(t=i.keywordMap)==null?void 0:t._ALPHABLEND_ON)!=null?n:!1,Et=((r=i.floatProperties)==null?void 0:r._ZWrite)===1&&wt,N=this._v0ParseRenderQueue(i),Rt=(o=(s=i.keywordMap)==null?void 0:s._ALPHATEST_ON)!=null?o:!1,dt=wt?"BLEND":Rt?"MASK":"OPAQUE",gt=Rt?(l=(a=i.floatProperties)==null?void 0:a._Cutoff)!=null?l:.5:void 0,Ct=((u=(c=i.floatProperties)==null?void 0:c._CullMode)!=null?u:2)===0,De=this._portTextureTransform(i),ze=((d=(h=i.vectorProperties)==null?void 0:h._Color)!=null?d:[1,1,1,1]).map((qn,$r)=>$r===3?qn:Xs(qn)),R=(f=i.textureProperties)==null?void 0:f._MainTex,E=R!=null?{index:R,extensions:yi({},De)}:void 0,B=(_=(p=i.floatProperties)==null?void 0:p._BumpScale)!=null?_:1,ie=(m=i.textureProperties)==null?void 0:m._BumpMap,te=ie!=null?{index:ie,scale:B,extensions:yi({},De)}:void 0,de=((y=(g=i.vectorProperties)==null?void 0:g._EmissionColor)!=null?y:[0,0,0,1]).map(Xs),ge=(M=i.textureProperties)==null?void 0:M._EmissionMap,K=ge!=null?{index:ge,extensions:yi({},De)}:void 0,ee=((w=(x=i.vectorProperties)==null?void 0:x._ShadeColor)!=null?w:[.97,.81,.86,1]).map(Xs),fe=(b=i.textureProperties)==null?void 0:b._ShadeTexture,P=fe!=null?{index:fe,extensions:yi({},De)}:void 0,Q=(T=(v=i.floatProperties)==null?void 0:v._ShadeShift)!=null?T:0,Z=(C=(O=i.floatProperties)==null?void 0:O._ShadeToony)!=null?C:.9;Z=Ze.lerp(Z,1,.5+.5*Q),Q=-Q-(1-Z);let pe=(U=(I=i.floatProperties)==null?void 0:I._IndirectLightIntensity)!=null?U:.1,ae=pe?1-pe:void 0,he=(Y=i.textureProperties)==null?void 0:Y._SphereAdd,Re=he!=null?[1,1,1]:void 0,Qe=he!=null?{index:he}:void 0,le=(X=(L=i.floatProperties)==null?void 0:L._RimLightingMix)!=null?X:0,Ge=(j=i.textureProperties)==null?void 0:j._RimTexture,$e=Ge!=null?{index:Ge,extensions:yi({},De)}:void 0,Te=((re=(z=i.vectorProperties)==null?void 0:z._RimColor)!=null?re:[0,0,0,1]).map(Xs),ft=(J=(W=i.floatProperties)==null?void 0:W._RimFresnelPower)!=null?J:1,It=(Ae=(ne=i.floatProperties)==null?void 0:ne._RimLift)!=null?Ae:0,bn=["none","worldCoordinates","screenCoordinates"][($=(Ue=i.floatProperties)==null?void 0:Ue._OutlineWidthMode)!=null?$:0],li=(we=(_e=i.floatProperties)==null?void 0:_e._OutlineWidth)!=null?we:0;li=.01*li;let Xn=(Fe=i.textureProperties)==null?void 0:Fe._OutlineWidthTexture,Kr=Xn!=null?{index:Xn,extensions:yi({},De)}:void 0,_r=((qe=(Se=i.vectorProperties)==null?void 0:Se._OutlineColor)!=null?qe:[0,0,0]).map(Xs),on=((Be=(yt=i.floatProperties)==null?void 0:yt._OutlineColorMode)!=null?Be:0)===1?(ot=(Je=i.floatProperties)==null?void 0:Je._OutlineLightingMix)!=null?ot:1:0,qi=(He=i.textureProperties)==null?void 0:He._UvAnimMaskTexture,yn=qi!=null?{index:qi,extensions:yi({},De)}:void 0,Yi=(Lt=(ht=i.floatProperties)==null?void 0:ht._UvAnimScrollX)!=null?Lt:0,Nn=(Mt=(zt=i.floatProperties)==null?void 0:zt._UvAnimScrollY)!=null?Mt:0;Nn!=null&&(Nn=-Nn);let ji=(Dt=(sn=i.floatProperties)==null?void 0:sn._UvAnimRotation)!=null?Dt:0,Zi={specVersion:"1.0",transparentWithZWrite:Et,renderQueueOffsetNumber:N,shadeColorFactor:ee,shadeMultiplyTexture:P,shadingShiftFactor:Q,shadingToonyFactor:Z,giEqualizationFactor:ae,matcapFactor:Re,matcapTexture:Qe,rimLightingMixFactor:le,rimMultiplyTexture:$e,parametricRimColorFactor:Te,parametricRimFresnelPowerFactor:ft,parametricRimLiftFactor:It,outlineWidthMode:bn,outlineWidthFactor:li,outlineWidthMultiplyTexture:Kr,outlineColorFactor:_r,outlineLightingMixFactor:on,uvAnimationMaskTexture:yn,uvAnimationScrollXSpeedFactor:Yi,uvAnimationScrollYSpeedFactor:Nn,uvAnimationRotationSpeedFactor:ji};return Ym(yi({},e),{pbrMetallicRoughness:{baseColorFactor:ze,baseColorTexture:E},normalTexture:te,emissiveTexture:K,emissiveFactor:de,alphaMode:dt,alphaCutoff:gt,doubleSided:Ct,extensions:{VRMC_materials_mtoon:Zi}})}_parseV0UnlitProperties(i,e){var t,n,r,s,o;let a=i.shader==="VRM/UnlitTransparentZWrite",l=i.shader==="VRM/UnlitTransparent"||a,c=this._v0ParseRenderQueue(i),u=i.shader==="VRM/UnlitCutout",h=l?"BLEND":u?"MASK":"OPAQUE",d=u?(n=(t=i.floatProperties)==null?void 0:t._Cutoff)!=null?n:.5:void 0,f=this._portTextureTransform(i),p=((s=(r=i.vectorProperties)==null?void 0:r._Color)!=null?s:[1,1,1,1]).map(Xs),_=(o=i.textureProperties)==null?void 0:o._MainTex,m=_!=null?{index:_,extensions:yi({},f)}:void 0,g={specVersion:"1.0",transparentWithZWrite:a,renderQueueOffsetNumber:c,shadeColorFactor:p,shadeMultiplyTexture:m};return Ym(yi({},e),{pbrMetallicRoughness:{baseColorFactor:p,baseColorTexture:m},alphaMode:h,alphaCutoff:d,extensions:{VRMC_materials_mtoon:g}})}_portTextureTransform(i){var e,t,n,r,s;let o=(e=i.vectorProperties)==null?void 0:e._MainTex;if(o==null)return{};let a=[(t=o?.[0])!=null?t:0,(n=o?.[1])!=null?n:0],l=[(r=o?.[2])!=null?r:1,(s=o?.[3])!=null?s:1];return a[1]=1-l[1]-a[1],{KHR_texture_transform:{offset:a,scale:l}}}_v0ParseRenderQueue(i){var e,t;let n=i.shader==="VRM/UnlitTransparentZWrite",r=((e=i.keywordMap)==null?void 0:e._ALPHABLEND_ON)!=null||i.shader==="VRM/UnlitTransparent"||n,s=((t=i.floatProperties)==null?void 0:t._ZWrite)===1||n,o=0;if(r){let a=i.renderQueue;a!=null&&(s?o=this._renderQueueMapTransparentZWrite.get(a):o=this._renderQueueMapTransparent.get(a))}return o}_populateRenderQueueMap(i){let e=new Set,t=new Set;i.forEach(n=>{var r,s;let o=n.shader==="VRM/UnlitTransparentZWrite",a=((r=n.keywordMap)==null?void 0:r._ALPHABLEND_ON)!=null||n.shader==="VRM/UnlitTransparent"||o,l=((s=n.floatProperties)==null?void 0:s._ZWrite)===1||o;if(a){let c=n.renderQueue;c!=null&&(l?t.add(c):e.add(c))}}),e.size>10&&console.warn(`VRMMaterialsV0CompatPlugin: This VRM uses ${e.size} render queues for Transparent materials while VRM 1.0 only supports up to 10 render queues. The model might not be rendered correctly.`),t.size>10&&console.warn(`VRMMaterialsV0CompatPlugin: This VRM uses ${t.size} render queues for TransparentZWrite materials while VRM 1.0 only supports up to 10 render queues. The model might not be rendered correctly.`),Array.from(e).sort().forEach((n,r)=>{let s=Math.min(Math.max(r-e.size+1,-9),0);this._renderQueueMapTransparent.set(n,s)}),Array.from(t).sort().forEach((n,r)=>{let s=Math.min(Math.max(r,0),9);this._renderQueueMapTransparentZWrite.set(n,s)})}},jm=(i,e,t)=>new Promise((n,r)=>{var s=l=>{try{a(t.next(l))}catch(c){r(c)}},o=l=>{try{a(t.throw(l))}catch(c){r(c)}},a=l=>l.done?n(l.value):Promise.resolve(l.value).then(s,o);a((t=t.apply(i,e)).next())}),fr=new A,Zh=class extends Tt{constructor(i){super(),this._attrPosition=new Xe(new Float32Array([0,0,0,0,0,0]),3),this._attrPosition.setUsage(Uu);let e=new et;e.setAttribute("position",this._attrPosition);let t=new un({color:16711935,depthTest:!1,depthWrite:!1});this._line=new Qn(e,t),this.add(this._line),this.constraint=i}updateMatrixWorld(i){fr.setFromMatrixPosition(this.constraint.destination.matrixWorld),this._attrPosition.setXYZ(0,fr.x,fr.y,fr.z),this.constraint.source&&fr.setFromMatrixPosition(this.constraint.source.matrixWorld),this._attrPosition.setXYZ(1,fr.x,fr.y,fr.z),this._attrPosition.needsUpdate=!0,super.updateMatrixWorld(i)}};function Zm(i,e){return e.set(i.elements[12],i.elements[13],i.elements[14])}var uT=new A,hT=new A;function dT(i,e){return i.decompose(uT,e,hT),e}function gc(i){return i.invert?i.invert():i.inverse(),i}var cd=class{constructor(i,e){this.destination=i,this.source=e,this.weight=1}},fT=new A,pT=new A,mT=new A,gT=new me,_T=new me,vT=new me,xT=class extends cd{get aimAxis(){return this._aimAxis}set aimAxis(i){this._aimAxis=i,this._v3AimAxis.set(i==="PositiveX"?1:i==="NegativeX"?-1:0,i==="PositiveY"?1:i==="NegativeY"?-1:0,i==="PositiveZ"?1:i==="NegativeZ"?-1:0)}get dependencies(){let i=new Set([this.source]);return this.destination.parent&&i.add(this.destination.parent),i}constructor(i,e){super(i,e),this._aimAxis="PositiveX",this._v3AimAxis=new A(1,0,0),this._dstRestQuat=new me}setInitState(){this._dstRestQuat.copy(this.destination.quaternion)}update(){this.destination.updateWorldMatrix(!0,!1),this.source.updateWorldMatrix(!0,!1);let i=gT.identity(),e=_T.identity();this.destination.parent&&(dT(this.destination.parent.matrixWorld,i),gc(e.copy(i)));let t=fT.copy(this._v3AimAxis).applyQuaternion(this._dstRestQuat).applyQuaternion(i),n=Zm(this.source.matrixWorld,pT).sub(Zm(this.destination.matrixWorld,mT)).normalize(),r=vT.setFromUnitVectors(t,n).premultiply(e).multiply(i).multiply(this._dstRestQuat);this.destination.quaternion.copy(this._dstRestQuat).slerp(r,this.weight)}};function yT(i,e){let t=[i],n=i.parent;for(;n!==null;)t.unshift(n),n=n.parent;t.forEach(r=>{e(r)})}var MT=class{constructor(){this._constraints=new Set,this._objectConstraintsMap=new Map}get constraints(){return this._constraints}addConstraint(i){this._constraints.add(i);let e=this._objectConstraintsMap.get(i.destination);e==null&&(e=new Set,this._objectConstraintsMap.set(i.destination,e)),e.add(i)}deleteConstraint(i){this._constraints.delete(i),this._objectConstraintsMap.get(i.destination).delete(i)}setInitState(){let i=new Set,e=new Set;for(let t of this._constraints)this._processConstraint(t,i,e,n=>n.setInitState())}update(){let i=new Set,e=new Set;for(let t of this._constraints)this._processConstraint(t,i,e,n=>n.update())}_processConstraint(i,e,t,n){if(t.has(i))return;if(e.has(i))throw new Error("VRMNodeConstraintManager: Circular dependency detected while updating constraints");e.add(i);let r=i.dependencies;for(let s of r)yT(s,o=>{let a=this._objectConstraintsMap.get(o);if(a)for(let l of a)this._processConstraint(l,e,t,n)});n(i),t.add(i)}},ET=new me,ST=new me,TT=class extends cd{get dependencies(){return new Set([this.source])}constructor(i,e){super(i,e),this._dstRestQuat=new me,this._invSrcRestQuat=new me}setInitState(){this._dstRestQuat.copy(this.destination.quaternion),gc(this._invSrcRestQuat.copy(this.source.quaternion))}update(){let i=ET.copy(this._invSrcRestQuat).multiply(this.source.quaternion),e=ST.copy(this._dstRestQuat).multiply(i);this.destination.quaternion.copy(this._dstRestQuat).slerp(e,this.weight)}},bT=new A,wT=new me,AT=new me,RT=class extends cd{get rollAxis(){return this._rollAxis}set rollAxis(i){this._rollAxis=i,this._v3RollAxis.set(i==="X"?1:0,i==="Y"?1:0,i==="Z"?1:0)}get dependencies(){return new Set([this.source])}constructor(i,e){super(i,e),this._rollAxis="X",this._v3RollAxis=new A(1,0,0),this._dstRestQuat=new me,this._invDstRestQuat=new me,this._invSrcRestQuatMulDstRestQuat=new me}setInitState(){this._dstRestQuat.copy(this.destination.quaternion),gc(this._invDstRestQuat.copy(this._dstRestQuat)),gc(this._invSrcRestQuatMulDstRestQuat.copy(this.source.quaternion)).multiply(this._dstRestQuat)}update(){let i=wT.copy(this._invDstRestQuat).multiply(this.source.quaternion).multiply(this._invSrcRestQuatMulDstRestQuat),e=bT.copy(this._v3RollAxis).applyQuaternion(i),n=AT.setFromUnitVectors(e,this._v3RollAxis).premultiply(this._dstRestQuat).multiply(i);this.destination.quaternion.copy(this._dstRestQuat).slerp(n,this.weight)}},CT=new Set(["1.0","1.0-beta"]),_g=class ia{get name(){return ia.EXTENSION_NAME}constructor(e,t){this.parser=e,this.helperRoot=t?.helperRoot}afterRoot(e){return jm(this,null,function*(){e.userData.vrmNodeConstraintManager=yield this._import(e)})}_import(e){return jm(this,null,function*(){var t;let n=this.parser.json;if(!(((t=n.extensionsUsed)==null?void 0:t.indexOf(ia.EXTENSION_NAME))!==-1))return null;let s=new MT,o=yield this.parser.getDependencies("node");return o.forEach((a,l)=>{var c;let u=n.nodes[l],h=(c=u?.extensions)==null?void 0:c[ia.EXTENSION_NAME];if(h==null)return;let d=h.specVersion;if(!CT.has(d)){console.warn(`VRMNodeConstraintLoaderPlugin: Unknown ${ia.EXTENSION_NAME} specVersion "${d}"`);return}let f=h.constraint;if(f.roll!=null){let p=this._importRollConstraint(a,o,f.roll);s.addConstraint(p)}else if(f.aim!=null){let p=this._importAimConstraint(a,o,f.aim);s.addConstraint(p)}else if(f.rotation!=null){let p=this._importRotationConstraint(a,o,f.rotation);s.addConstraint(p)}}),e.scene.updateMatrixWorld(),s.setInitState(),s})}_importRollConstraint(e,t,n){let{source:r,rollAxis:s,weight:o}=n,a=t[r],l=new RT(e,a);if(s!=null&&(l.rollAxis=s),o!=null&&(l.weight=o),this.helperRoot){let c=new Zh(l);this.helperRoot.add(c)}return l}_importAimConstraint(e,t,n){let{source:r,aimAxis:s,weight:o}=n,a=t[r],l=new xT(e,a);if(s!=null&&(l.aimAxis=s),o!=null&&(l.weight=o),this.helperRoot){let c=new Zh(l);this.helperRoot.add(c)}return l}_importRotationConstraint(e,t,n){let{source:r,weight:s}=n,o=t[r],a=new TT(e,o);if(s!=null&&(a.weight=s),this.helperRoot){let l=new Zh(a);this.helperRoot.add(l)}return a}};_g.EXTENSION_NAME="VRMC_node_constraint";var PT=_g,hc=(i,e,t)=>new Promise((n,r)=>{var s=l=>{try{a(t.next(l))}catch(c){r(c)}},o=l=>{try{a(t.throw(l))}catch(c){r(c)}},a=l=>l.done?n(l.value):Promise.resolve(l.value).then(s,o);a((t=t.apply(i,e)).next())}),ud=class{},Kh=new A,jr=new A,vg=class extends ud{get type(){return"capsule"}constructor(i){var e,t,n,r;super(),this.offset=(e=i?.offset)!=null?e:new A(0,0,0),this.tail=(t=i?.tail)!=null?t:new A(0,0,0),this.radius=(n=i?.radius)!=null?n:0,this.inside=(r=i?.inside)!=null?r:!1}calculateCollision(i,e,t,n){Kh.setFromMatrixPosition(i),jr.subVectors(this.tail,this.offset).applyMatrix4(i),jr.sub(Kh);let r=jr.lengthSq();n.copy(e).sub(Kh);let s=jr.dot(n);s<=0||(r<=s||jr.multiplyScalar(s/r),n.sub(jr));let o=n.length(),a=this.inside?this.radius-t-o:o-t-this.radius;return a<0&&(n.multiplyScalar(1/o),this.inside&&n.negate()),a}},$h=new A,Km=new Le,xg=class extends ud{get type(){return"plane"}constructor(i){var e,t;super(),this.offset=(e=i?.offset)!=null?e:new A(0,0,0),this.normal=(t=i?.normal)!=null?t:new A(0,0,1)}calculateCollision(i,e,t,n){n.setFromMatrixPosition(i),n.negate().add(e),Km.getNormalMatrix(i),$h.copy(this.normal).applyNormalMatrix(Km).normalize();let r=n.dot($h)-t;return n.copy($h),r}},IT=new A,yg=class extends ud{get type(){return"sphere"}constructor(i){var e,t,n;super(),this.offset=(e=i?.offset)!=null?e:new A(0,0,0),this.radius=(t=i?.radius)!=null?t:0,this.inside=(n=i?.inside)!=null?n:!1}calculateCollision(i,e,t,n){n.subVectors(e,IT.setFromMatrixPosition(i));let r=n.length(),s=this.inside?this.radius-t-r:r-t-this.radius;return s<0&&(n.multiplyScalar(1/r),this.inside&&n.negate()),s}},Mi=new A,LT=class extends et{constructor(i){super(),this.worldScale=1,this._currentRadius=0,this._currentOffset=new A,this._currentTail=new A,this._shape=i,this._attrPos=new Xe(new Float32Array(396),3),this.setAttribute("position",this._attrPos),this._attrIndex=new Xe(new Uint16Array(264),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let i=!1,e=this._shape.radius/this.worldScale;this._currentRadius!==e&&(this._currentRadius=e,i=!0),this._currentOffset.equals(this._shape.offset)||(this._currentOffset.copy(this._shape.offset),i=!0);let t=Mi.copy(this._shape.tail).divideScalar(this.worldScale);this._currentTail.distanceToSquared(t)>1e-10&&(this._currentTail.copy(t),i=!0),i&&this._buildPosition()}_buildPosition(){Mi.copy(this._currentTail).sub(this._currentOffset);let i=Mi.length()/this._currentRadius;for(let n=0;n<=16;n++){let r=n/16*Math.PI;this._attrPos.setXYZ(n,-Math.sin(r),-Math.cos(r),0),this._attrPos.setXYZ(17+n,i+Math.sin(r),Math.cos(r),0),this._attrPos.setXYZ(34+n,-Math.sin(r),0,-Math.cos(r)),this._attrPos.setXYZ(51+n,i+Math.sin(r),0,Math.cos(r))}for(let n=0;n<32;n++){let r=n/16*Math.PI;this._attrPos.setXYZ(68+n,0,Math.sin(r),Math.cos(r)),this._attrPos.setXYZ(100+n,i,Math.sin(r),Math.cos(r))}let e=Math.atan2(Mi.y,Math.sqrt(Mi.x*Mi.x+Mi.z*Mi.z)),t=-Math.atan2(Mi.z,Mi.x);this.rotateZ(e),this.rotateY(t),this.scale(this._currentRadius,this._currentRadius,this._currentRadius),this.translate(this._currentOffset.x,this._currentOffset.y,this._currentOffset.z),this._attrPos.needsUpdate=!0}_buildIndex(){for(let i=0;i<34;i++){let e=(i+1)%34;this._attrIndex.setXY(i*2,i,e),this._attrIndex.setXY(68+i*2,34+i,34+e)}for(let i=0;i<32;i++){let e=(i+1)%32;this._attrIndex.setXY(136+i*2,68+i,68+e),this._attrIndex.setXY(200+i*2,100+i,100+e)}this._attrIndex.needsUpdate=!0}},DT=class extends et{constructor(i){super(),this.worldScale=1,this._currentOffset=new A,this._currentNormal=new A,this._shape=i,this._attrPos=new Xe(new Float32Array(18),3),this.setAttribute("position",this._attrPos),this._attrIndex=new Xe(new Uint16Array(10),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let i=!1;this._currentOffset.equals(this._shape.offset)||(this._currentOffset.copy(this._shape.offset),i=!0),this._currentNormal.equals(this._shape.normal)||(this._currentNormal.copy(this._shape.normal),i=!0),i&&this._buildPosition()}_buildPosition(){this._attrPos.setXYZ(0,-.5,-.5,0),this._attrPos.setXYZ(1,.5,-.5,0),this._attrPos.setXYZ(2,.5,.5,0),this._attrPos.setXYZ(3,-.5,.5,0),this._attrPos.setXYZ(4,0,0,0),this._attrPos.setXYZ(5,0,0,.25),this.translate(this._currentOffset.x,this._currentOffset.y,this._currentOffset.z),this.lookAt(this._currentNormal),this._attrPos.needsUpdate=!0}_buildIndex(){this._attrIndex.setXY(0,0,1),this._attrIndex.setXY(2,1,2),this._attrIndex.setXY(4,2,3),this._attrIndex.setXY(6,3,0),this._attrIndex.setXY(8,4,5),this._attrIndex.needsUpdate=!0}},OT=class extends et{constructor(i){super(),this.worldScale=1,this._currentRadius=0,this._currentOffset=new A,this._shape=i,this._attrPos=new Xe(new Float32Array(288),3),this.setAttribute("position",this._attrPos),this._attrIndex=new Xe(new Uint16Array(192),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let i=!1,e=this._shape.radius/this.worldScale;this._currentRadius!==e&&(this._currentRadius=e,i=!0),this._currentOffset.equals(this._shape.offset)||(this._currentOffset.copy(this._shape.offset),i=!0),i&&this._buildPosition()}_buildPosition(){for(let i=0;i<32;i++){let e=i/16*Math.PI;this._attrPos.setXYZ(i,Math.cos(e),Math.sin(e),0),this._attrPos.setXYZ(32+i,0,Math.cos(e),Math.sin(e)),this._attrPos.setXYZ(64+i,Math.sin(e),0,Math.cos(e))}this.scale(this._currentRadius,this._currentRadius,this._currentRadius),this.translate(this._currentOffset.x,this._currentOffset.y,this._currentOffset.z),this._attrPos.needsUpdate=!0}_buildIndex(){for(let i=0;i<32;i++){let e=(i+1)%32;this._attrIndex.setXY(i*2,i,e),this._attrIndex.setXY(64+i*2,32+i,32+e),this._attrIndex.setXY(128+i*2,64+i,64+e)}this._attrIndex.needsUpdate=!0}},NT=new A,Jh=class extends Tt{constructor(i){if(super(),this.matrixAutoUpdate=!1,this.collider=i,this.collider.shape instanceof yg)this._geometry=new OT(this.collider.shape);else if(this.collider.shape instanceof vg)this._geometry=new LT(this.collider.shape);else if(this.collider.shape instanceof xg)this._geometry=new DT(this.collider.shape);else throw new Error("VRMSpringBoneColliderHelper: Unknown collider shape type detected");let e=new un({color:16711935,depthTest:!1,depthWrite:!1});this._line=new Hn(this._geometry,e),this.add(this._line)}dispose(){this._geometry.dispose()}updateMatrixWorld(i){this.collider.updateWorldMatrix(!0,!1),this.matrix.copy(this.collider.matrixWorld);let e=this.matrix.elements;this._geometry.worldScale=NT.set(e[0],e[1],e[2]).length(),this._geometry.update(),super.updateMatrixWorld(i)}},UT=class extends et{constructor(i){super(),this.worldScale=1,this._currentRadius=0,this._currentTail=new A,this._springBone=i,this._attrPos=new Xe(new Float32Array(294),3),this.setAttribute("position",this._attrPos),this._attrIndex=new Xe(new Uint16Array(194),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let i=!1,e=this._springBone.settings.hitRadius/this.worldScale;this._currentRadius!==e&&(this._currentRadius=e,i=!0),this._currentTail.equals(this._springBone.initialLocalChildPosition)||(this._currentTail.copy(this._springBone.initialLocalChildPosition),i=!0),i&&this._buildPosition()}_buildPosition(){for(let i=0;i<32;i++){let e=i/16*Math.PI;this._attrPos.setXYZ(i,Math.cos(e),Math.sin(e),0),this._attrPos.setXYZ(32+i,0,Math.cos(e),Math.sin(e)),this._attrPos.setXYZ(64+i,Math.sin(e),0,Math.cos(e))}this.scale(this._currentRadius,this._currentRadius,this._currentRadius),this.translate(this._currentTail.x,this._currentTail.y,this._currentTail.z),this._attrPos.setXYZ(96,0,0,0),this._attrPos.setXYZ(97,this._currentTail.x,this._currentTail.y,this._currentTail.z),this._attrPos.needsUpdate=!0}_buildIndex(){for(let i=0;i<32;i++){let e=(i+1)%32;this._attrIndex.setXY(i*2,i,e),this._attrIndex.setXY(64+i*2,32+i,32+e),this._attrIndex.setXY(128+i*2,64+i,64+e)}this._attrIndex.setXY(192,96,97),this._attrIndex.needsUpdate=!0}},FT=new A,BT=class extends Tt{constructor(i){super(),this.matrixAutoUpdate=!1,this.springBone=i,this._geometry=new UT(this.springBone);let e=new un({color:16776960,depthTest:!1,depthWrite:!1});this._line=new Hn(this._geometry,e),this.add(this._line)}dispose(){this._geometry.dispose()}updateMatrixWorld(i){this.springBone.bone.updateWorldMatrix(!0,!1),this.matrix.copy(this.springBone.bone.matrixWorld);let e=this.matrix.elements;this._geometry.worldScale=FT.set(e[0],e[1],e[2]).length(),this._geometry.update(),super.updateMatrixWorld(i)}},Qh=class extends ct{constructor(i){super(),this.colliderMatrix=new oe,this.shape=i}updateWorldMatrix(i,e){super.updateWorldMatrix(i,e),HT(this.colliderMatrix,this.matrixWorld,this.shape.offset)}};function HT(i,e,t){let n=e.elements;i.copy(e),t&&(i.elements[12]=n[0]*t.x+n[4]*t.y+n[8]*t.z+n[12],i.elements[13]=n[1]*t.x+n[5]*t.y+n[9]*t.z+n[13],i.elements[14]=n[2]*t.x+n[6]*t.y+n[10]*t.z+n[14])}var kT=new oe;function VT(i){return i.invert?i.invert():i.getInverse(kT.copy(i)),i}var zT=class{constructor(i){this._inverseCache=new oe,this._shouldUpdateInverse=!0,this.matrix=i;let e={set:(t,n,r)=>(this._shouldUpdateInverse=!0,t[n]=r,!0)};this._originalElements=i.elements,i.elements=new Proxy(i.elements,e)}get inverse(){return this._shouldUpdateInverse&&(VT(this._inverseCache.copy(this.matrix)),this._shouldUpdateInverse=!1),this._inverseCache}revert(){this.matrix.elements=this._originalElements}},ed=new oe,qs=new A,ea=new A,ta=new A,na=new A,GT=new oe,WT=class{constructor(i,e,t={},n=[]){this._currentTail=new A,this._prevTail=new A,this._boneAxis=new A,this._worldSpaceBoneLength=0,this._center=null,this._initialLocalMatrix=new oe,this._initialLocalRotation=new me,this._initialLocalChildPosition=new A;var r,s,o,a,l,c;this.bone=i,this.bone.matrixAutoUpdate=!1,this.child=e,this.settings={hitRadius:(r=t.hitRadius)!=null?r:0,stiffness:(s=t.stiffness)!=null?s:1,gravityPower:(o=t.gravityPower)!=null?o:0,gravityDir:(l=(a=t.gravityDir)==null?void 0:a.clone())!=null?l:new A(0,-1,0),dragForce:(c=t.dragForce)!=null?c:.4},this.colliderGroups=n}get dependencies(){let i=new Set,e=this.bone.parent;e&&i.add(e);for(let t=0;t<this.colliderGroups.length;t++)for(let n=0;n<this.colliderGroups[t].colliders.length;n++)i.add(this.colliderGroups[t].colliders[n]);return i}get center(){return this._center}set center(i){var e;(e=this._center)!=null&&e.userData.inverseCacheProxy&&(this._center.userData.inverseCacheProxy.revert(),delete this._center.userData.inverseCacheProxy),this._center=i,this._center&&(this._center.userData.inverseCacheProxy||(this._center.userData.inverseCacheProxy=new zT(this._center.matrixWorld)))}get initialLocalChildPosition(){return this._initialLocalChildPosition}get _parentMatrixWorld(){return this.bone.parent?this.bone.parent.matrixWorld:ed}setInitState(){this._initialLocalMatrix.copy(this.bone.matrix),this._initialLocalRotation.copy(this.bone.quaternion),this.child?this._initialLocalChildPosition.copy(this.child.position):this._initialLocalChildPosition.copy(this.bone.position).normalize().multiplyScalar(.07);let i=this._getMatrixWorldToCenter();this.bone.localToWorld(this._currentTail.copy(this._initialLocalChildPosition)).applyMatrix4(i),this._prevTail.copy(this._currentTail),this._boneAxis.copy(this._initialLocalChildPosition).normalize()}reset(){this.bone.quaternion.copy(this._initialLocalRotation),this.bone.updateMatrix(),this.bone.matrixWorld.multiplyMatrices(this._parentMatrixWorld,this.bone.matrix);let i=this._getMatrixWorldToCenter();this.bone.localToWorld(this._currentTail.copy(this._initialLocalChildPosition)).applyMatrix4(i),this._prevTail.copy(this._currentTail)}update(i){if(i<=0)return;this._calcWorldSpaceBoneLength();let e=ea.copy(this._boneAxis).transformDirection(this._initialLocalMatrix).transformDirection(this._parentMatrixWorld);na.copy(this._currentTail).add(qs.subVectors(this._currentTail,this._prevTail).multiplyScalar(1-this.settings.dragForce)).applyMatrix4(this._getMatrixCenterToWorld()).addScaledVector(e,this.settings.stiffness*i).addScaledVector(this.settings.gravityDir,this.settings.gravityPower*i),ta.setFromMatrixPosition(this.bone.matrixWorld),na.sub(ta).normalize().multiplyScalar(this._worldSpaceBoneLength).add(ta),this._collision(na),this._prevTail.copy(this._currentTail),this._currentTail.copy(na).applyMatrix4(this._getMatrixWorldToCenter());let t=GT.multiplyMatrices(this._parentMatrixWorld,this._initialLocalMatrix).invert();this.bone.quaternion.setFromUnitVectors(this._boneAxis,qs.copy(na).applyMatrix4(t).normalize()).premultiply(this._initialLocalRotation),this.bone.updateMatrix(),this.bone.matrixWorld.multiplyMatrices(this._parentMatrixWorld,this.bone.matrix)}_collision(i){for(let e=0;e<this.colliderGroups.length;e++)for(let t=0;t<this.colliderGroups[e].colliders.length;t++){let n=this.colliderGroups[e].colliders[t],r=n.shape.calculateCollision(n.colliderMatrix,i,this.settings.hitRadius,qs);if(r<0){i.addScaledVector(qs,-r),i.sub(ta);let s=i.length();i.multiplyScalar(this._worldSpaceBoneLength/s).add(ta)}}}_calcWorldSpaceBoneLength(){qs.setFromMatrixPosition(this.bone.matrixWorld),this.child?ea.setFromMatrixPosition(this.child.matrixWorld):(ea.copy(this._initialLocalChildPosition),ea.applyMatrix4(this.bone.matrixWorld)),this._worldSpaceBoneLength=qs.sub(ea).length()}_getMatrixCenterToWorld(){return this._center?this._center.matrixWorld:ed}_getMatrixWorldToCenter(){return this._center?this._center.userData.inverseCacheProxy.inverse:ed}};function XT(i,e){let t=[],n=i;for(;n!==null;)t.unshift(n),n=n.parent;t.forEach(r=>{e(r)})}function ad(i,e){i.children.forEach(t=>{e(t)||ad(t,e)})}function qT(i){var e;let t=new Map;for(let n of i){let r=n;do{let s=((e=t.get(r))!=null?e:0)+1;if(s===i.size)return r;t.set(r,s),r=r.parent}while(r!==null)}return null}var $m=class{constructor(){this._joints=new Set,this._sortedJoints=[],this._hasWarnedCircularDependency=!1,this._ancestors=[],this._objectSpringBonesMap=new Map,this._isSortedJointsDirty=!1,this._relevantChildrenUpdated=this._relevantChildrenUpdated.bind(this)}get joints(){return this._joints}get springBones(){return console.warn("VRMSpringBoneManager: springBones is deprecated. use joints instead."),this._joints}get colliderGroups(){let i=new Set;return this._joints.forEach(e=>{e.colliderGroups.forEach(t=>{i.add(t)})}),Array.from(i)}get colliders(){let i=new Set;return this.colliderGroups.forEach(e=>{e.colliders.forEach(t=>{i.add(t)})}),Array.from(i)}addJoint(i){this._joints.add(i);let e=this._objectSpringBonesMap.get(i.bone);e==null&&(e=new Set,this._objectSpringBonesMap.set(i.bone,e)),e.add(i),this._isSortedJointsDirty=!0}addSpringBone(i){console.warn("VRMSpringBoneManager: addSpringBone() is deprecated. use addJoint() instead."),this.addJoint(i)}deleteJoint(i){this._joints.delete(i),this._objectSpringBonesMap.get(i.bone).delete(i),this._isSortedJointsDirty=!0}deleteSpringBone(i){console.warn("VRMSpringBoneManager: deleteSpringBone() is deprecated. use deleteJoint() instead."),this.deleteJoint(i)}setInitState(){this._sortJoints();for(let i=0;i<this._sortedJoints.length;i++){let e=this._sortedJoints[i];e.bone.updateMatrix(),e.bone.updateWorldMatrix(!1,!1),e.setInitState()}}reset(){this._sortJoints();for(let i=0;i<this._sortedJoints.length;i++){let e=this._sortedJoints[i];e.bone.updateMatrix(),e.bone.updateWorldMatrix(!1,!1),e.reset()}}update(i){this._sortJoints();for(let e=0;e<this._ancestors.length;e++)this._ancestors[e].updateWorldMatrix(e===0,!1);for(let e=0;e<this._sortedJoints.length;e++){let t=this._sortedJoints[e];t.bone.updateMatrix(),t.bone.updateWorldMatrix(!1,!1),t.update(i),ad(t.bone,this._relevantChildrenUpdated)}}_sortJoints(){if(!this._isSortedJointsDirty)return;let i=[],e=new Set,t=new Set,n=new Set;for(let s of this._joints)this._insertJointSort(s,e,t,i,n);this._sortedJoints=i;let r=qT(n);this._ancestors=[],r&&(this._ancestors.push(r),ad(r,s=>{var o,a;return((a=(o=this._objectSpringBonesMap.get(s))==null?void 0:o.size)!=null?a:0)>0?!0:(this._ancestors.push(s),!1)})),this._isSortedJointsDirty=!1}_insertJointSort(i,e,t,n,r){if(t.has(i))return;if(e.has(i)){this._hasWarnedCircularDependency||(console.warn("VRMSpringBoneManager: Circular dependency detected"),this._hasWarnedCircularDependency=!0);return}e.add(i);let s=i.dependencies;for(let o of s){let a=!1,l=null;XT(o,c=>{let u=this._objectSpringBonesMap.get(c);if(u)for(let h of u)a=!0,this._insertJointSort(h,e,t,n,r);else a||(l=c)}),l&&r.add(l)}n.push(i),t.add(i)}_relevantChildrenUpdated(i){var e,t;return((t=(e=this._objectSpringBonesMap.get(i))==null?void 0:e.size)!=null?t:0)>0?!0:(i.updateWorldMatrix(!1,!1),!1)}},Jm="VRMC_springBone_extended_collider",YT=new Set(["1.0","1.0-beta"]),jT=new Set(["1.0"]),Mg=class js{get name(){return js.EXTENSION_NAME}constructor(e,t){var n;this.parser=e,this.jointHelperRoot=t?.jointHelperRoot,this.colliderHelperRoot=t?.colliderHelperRoot,this.useExtendedColliders=(n=t?.useExtendedColliders)!=null?n:!0}afterRoot(e){return hc(this,null,function*(){e.userData.vrmSpringBoneManager=yield this._import(e)})}_import(e){return hc(this,null,function*(){let t=yield this._v1Import(e);if(t!=null)return t;let n=yield this._v0Import(e);return n??null})}_v1Import(e){return hc(this,null,function*(){var t,n,r,s,o;let a=e.parser.json;if(!(((t=a.extensionsUsed)==null?void 0:t.indexOf(js.EXTENSION_NAME))!==-1))return null;let c=new $m,u=yield e.parser.getDependencies("node"),h=(n=a.extensions)==null?void 0:n[js.EXTENSION_NAME];if(!h)return null;let d=h.specVersion;if(!YT.has(d))return console.warn(`VRMSpringBoneLoaderPlugin: Unknown ${js.EXTENSION_NAME} specVersion "${d}"`),null;let f=(r=h.colliders)==null?void 0:r.map((_,m)=>{var g,y,M,x,w,b,v,T,O,C,I,U,Y,L,X;let j=u[_.node];if(j==null)return console.warn(`VRMSpringBoneLoaderPlugin: The collider #${m} attempted to reference a node #${_.node} but not found. Skipping the collider`),null;let z=_.shape,re=(g=_.extensions)==null?void 0:g[Jm];if(this.useExtendedColliders&&re!=null){let W=re.specVersion;if(!jT.has(W))console.warn(`VRMSpringBoneLoaderPlugin: Unknown ${Jm} specVersion "${W}". Fallbacking to the ${js.EXTENSION_NAME} definition`);else{let J=re.shape;if(J.sphere)return this._importSphereCollider(j,{offset:new A().fromArray((y=J.sphere.offset)!=null?y:[0,0,0]),radius:(M=J.sphere.radius)!=null?M:0,inside:(x=J.sphere.inside)!=null?x:!1});if(J.capsule)return this._importCapsuleCollider(j,{offset:new A().fromArray((w=J.capsule.offset)!=null?w:[0,0,0]),radius:(b=J.capsule.radius)!=null?b:0,tail:new A().fromArray((v=J.capsule.tail)!=null?v:[0,0,0]),inside:(T=J.capsule.inside)!=null?T:!1});if(J.plane)return this._importPlaneCollider(j,{offset:new A().fromArray((O=J.plane.offset)!=null?O:[0,0,0]),normal:new A().fromArray((C=J.plane.normal)!=null?C:[0,0,1])})}}if(z.sphere)return this._importSphereCollider(j,{offset:new A().fromArray((I=z.sphere.offset)!=null?I:[0,0,0]),radius:(U=z.sphere.radius)!=null?U:0,inside:!1});if(z.capsule)return this._importCapsuleCollider(j,{offset:new A().fromArray((Y=z.capsule.offset)!=null?Y:[0,0,0]),radius:(L=z.capsule.radius)!=null?L:0,tail:new A().fromArray((X=z.capsule.tail)!=null?X:[0,0,0]),inside:!1});console.warn(`VRMSpringBoneLoaderPlugin: The collider #${m} has no valid shape. Skipping the collider`)}),p=(s=h.colliderGroups)==null?void 0:s.map((_,m)=>{var g;return{colliders:((g=_.colliders)!=null?g:[]).map(M=>{let x=f?.[M];return x??(console.warn(`VRMSpringBoneLoaderPlugin: The collider group #${m} attempted to reference a collider #${M} but not found. Skipping the collider`),null)}).filter(M=>M!=null),name:_.name}});return(o=h.springs)==null||o.forEach((_,m)=>{var g;let y=_.joints,M=(g=_.colliderGroups)==null?void 0:g.map(b=>{let v=p?.[b];return v??(console.warn(`VRMSpringBoneLoaderPlugin: The spring #${m} attempted to reference a collider group #${b} but not found. Skipping the collider group`),null)}).filter(b=>b!=null),x=_.center!=null?u[_.center]:void 0,w;y.forEach(b=>{if(w){let v=w.node,T=u[v],O=b.node,C=u[O],I={hitRadius:w.hitRadius,dragForce:w.dragForce,gravityPower:w.gravityPower,stiffness:w.stiffness,gravityDir:w.gravityDir!=null?new A().fromArray(w.gravityDir):void 0},U=this._importJoint(T,C,I,M);x&&(U.center=x),c.addJoint(U)}w=b})}),c.setInitState(),c})}_v0Import(e){return hc(this,null,function*(){var t,n,r;let s=e.parser.json;if(!(((t=s.extensionsUsed)==null?void 0:t.indexOf("VRM"))!==-1))return null;let a=(n=s.extensions)==null?void 0:n.VRM,l=a?.secondaryAnimation;if(!l)return null;let c=l?.boneGroups;if(!c)return null;let u=new $m,h=yield e.parser.getDependencies("node"),d=(r=l.colliderGroups)==null?void 0:r.map((f,p)=>{var _;let m=h[f.node];return m==null?(console.warn(`VRMSpringBoneLoaderPlugin: The collider group #${p} attempted to reference a node #${f.node} but not found. Skipping the collider group`),null):{colliders:((_=f.colliders)!=null?_:[]).map((y,M)=>{var x,w,b;let v=new A(0,0,0);return y.offset&&v.set((x=y.offset.x)!=null?x:0,(w=y.offset.y)!=null?w:0,y.offset.z?-y.offset.z:0),this._importSphereCollider(m,{offset:v,radius:(b=y.radius)!=null?b:0,inside:!1})})}});return c?.forEach((f,p)=>{let _=f.bones;_&&_.forEach(m=>{var g,y,M,x;let w=h[m];if(w==null){console.warn(`VRMSpringBoneLoaderPlugin: The spring bone group #${p} attempted to reference a node #${m} but not found. Skipping the node`);return}let b=new A;f.gravityDir?b.set((g=f.gravityDir.x)!=null?g:0,(y=f.gravityDir.y)!=null?y:0,(M=f.gravityDir.z)!=null?M:0):b.set(0,-1,0);let v=f.center!=null?h[f.center]:void 0,T={hitRadius:f.hitRadius,dragForce:f.dragForce,gravityPower:f.gravityPower,stiffness:f.stiffiness,gravityDir:b},O=(x=f.colliderGroups)==null?void 0:x.map(C=>{let I=d?.[C];return I??(console.warn(`VRMSpringBoneLoaderPlugin: The spring #${p} attempted to reference a collider group #${C} but not found. Skipping the collider group`),null)}).filter(C=>C!=null);w.traverse(C=>{var I;let U=(I=C.children[0])!=null?I:null,Y=this._importJoint(C,U,T,O);v&&(Y.center=v),u.addJoint(Y)})})}),e.scene.updateMatrixWorld(),u.setInitState(),u})}_importJoint(e,t,n,r){let s=new WT(e,t,n,r);if(this.jointHelperRoot){let o=new BT(s);this.jointHelperRoot.add(o),o.renderOrder=this.jointHelperRoot.renderOrder}return s}_importSphereCollider(e,t){let n=new yg(t),r=new Qh(n);if(e.add(r),this.colliderHelperRoot){let s=new Jh(r);this.colliderHelperRoot.add(s),s.renderOrder=this.colliderHelperRoot.renderOrder}return r}_importCapsuleCollider(e,t){let n=new vg(t),r=new Qh(n);if(e.add(r),this.colliderHelperRoot){let s=new Jh(r);this.colliderHelperRoot.add(s),s.renderOrder=this.colliderHelperRoot.renderOrder}return r}_importPlaneCollider(e,t){let n=new xg(t),r=new Qh(n);if(e.add(r),this.colliderHelperRoot){let s=new Jh(r);this.colliderHelperRoot.add(s),s.renderOrder=this.colliderHelperRoot.renderOrder}return r}};Mg.EXTENSION_NAME="VRMC_springBone";var ZT=Mg,Eg=class{get name(){return"VRMLoaderPlugin"}constructor(i,e){var t,n,r,s,o,a,l,c,u,h;this.parser=i;let d=e?.helperRoot,f=e?.autoUpdateHumanBones;this.expressionPlugin=(t=e?.expressionPlugin)!=null?t:new dS(i),this.firstPersonPlugin=(n=e?.firstPersonPlugin)!=null?n:new pS(i),this.humanoidPlugin=(r=e?.humanoidPlugin)!=null?r:new MS(i,{helperRoot:d,autoUpdateHumanBones:f}),this.lookAtPlugin=(s=e?.lookAtPlugin)!=null?s:new US(i,{helperRoot:d}),this.metaPlugin=(o=e?.metaPlugin)!=null?o:new HS(i),this.mtoonMaterialPlugin=(a=e?.mtoonMaterialPlugin)!=null?a:new eT(i),this.materialsHDREmissiveMultiplierPlugin=(l=e?.materialsHDREmissiveMultiplierPlugin)!=null?l:new nT(i),this.materialsV0CompatPlugin=(c=e?.materialsV0CompatPlugin)!=null?c:new cT(i),this.springBonePlugin=(u=e?.springBonePlugin)!=null?u:new ZT(i,{colliderHelperRoot:d,jointHelperRoot:d}),this.nodeConstraintPlugin=(h=e?.nodeConstraintPlugin)!=null?h:new PT(i,{helperRoot:d})}beforeRoot(){return lc(this,null,function*(){yield this.materialsV0CompatPlugin.beforeRoot(),yield this.mtoonMaterialPlugin.beforeRoot()})}loadMesh(i){return lc(this,null,function*(){return yield this.mtoonMaterialPlugin.loadMesh(i)})}getMaterialType(i){let e=this.mtoonMaterialPlugin.getMaterialType(i);return e??null}extendMaterialParams(i,e){return lc(this,null,function*(){yield this.materialsHDREmissiveMultiplierPlugin.extendMaterialParams(i,e),yield this.mtoonMaterialPlugin.extendMaterialParams(i,e)})}afterRoot(i){return lc(this,null,function*(){yield this.metaPlugin.afterRoot(i),yield this.humanoidPlugin.afterRoot(i),yield this.expressionPlugin.afterRoot(i),yield this.lookAtPlugin.afterRoot(i),yield this.firstPersonPlugin.afterRoot(i),yield this.springBonePlugin.afterRoot(i),yield this.nodeConstraintPlugin.afterRoot(i),yield this.mtoonMaterialPlugin.afterRoot(i);let e=i.userData.vrmMeta,t=i.userData.vrmHumanoid;if(e&&t){let n=new VS({scene:i.scene,expressionManager:i.userData.vrmExpressionManager,firstPerson:i.userData.vrmFirstPerson,humanoid:t,lookAt:i.userData.vrmLookAt,meta:e,materials:i.userData.vrmMToonMaterials,springBoneManager:i.userData.vrmSpringBoneManager,nodeConstraintManager:i.userData.vrmNodeConstraintManager});i.userData.vrm=n}})}};function KT(i){let e=new Set;return i.traverse(t=>{if(!t.isMesh)return;let n=t;e.add(n)}),e}function Qm(i,e,t){if(e.size===1){let o=e.values().next().value;if(o.weight===1)return i[o.index]}let n=new Float32Array(i[0].count*3),r=0;if(t)r=1;else for(let o of e)r+=o.weight;for(let o of e){let a=i[o.index],l=o.weight/r;for(let c=0;c<a.count;c++)n[c*3+0]+=a.getX(c)*l,n[c*3+1]+=a.getY(c)*l,n[c*3+2]+=a.getZ(c)*l}return new Xe(n,3)}function $T(i){var e;let t=KT(i.scene),n=new Map,r=(e=i.expressionManager)==null?void 0:e.expressionMap;if(r!=null)for(let[s,o]of Object.entries(r)){let a=new Set;for(let l of o.binds)if(l instanceof mc){if(l.weight!==0)for(let c of l.primitives){let u=n.get(c);u==null&&(u=new Map,n.set(c,u));let h=u.get(s);h==null&&(h=new Set,u.set(s,h)),h.add(l)}a.add(l)}for(let l of a)o.deleteBind(l)}for(let s of t){let o=n.get(s);if(o==null)continue;let a=s.geometry.morphAttributes;s.geometry.morphAttributes={};let l=s.geometry.clone();s.geometry=l;let c=l.morphTargetsRelative,u=a.position!=null,h=a.normal!=null,d={},f={},p=[];if(u||h){u&&(d.position=[]),h&&(d.normal=[]);let _=0;for(let[m,g]of o)u&&(d.position[_]=Qm(a.position,g,c)),h&&(d.normal[_]=Qm(a.normal,g,c)),r?.[m].addBind(new mc({index:_,weight:1,primitives:[s]})),f[m]=_,p.push(0),_++}l.morphAttributes=d,s.morphTargetDictionary=f,s.morphTargetInfluences=p}}function _c(i,e,t){if(i.getComponent)return i.getComponent(e,t);{let n=i.array[e*i.itemSize+t];return i.normalized&&(n=Ze.denormalize(n,i.array)),n}}function Sg(i,e,t,n){i.setComponent?i.setComponent(e,t,n):(i.normalized&&(n=Ze.normalize(n,i.array)),i.array[e*i.itemSize+t]=n)}function JT(i){var e;let t=QT(i),n=new Set;for(let h of t)n.has(h.geometry)&&(h.geometry=sb(h.geometry)),n.add(h.geometry);let r=new Map;for(let h of n){let d=h.getAttribute("skinIndex"),f=(e=r.get(d))!=null?e:new Map;r.set(d,f);let p=h.getAttribute("skinWeight"),_=eb(d,p);f.set(p,_)}let s=new Map;for(let h of t){let d=tb(h,r);s.set(h,d)}let o=[];for(let[h,d]of s){let f=!1;for(let p of o)if(nb(d,p.boneInverseMap)){f=!0,p.meshes.add(h);for(let[m,g]of d)p.boneInverseMap.set(m,g);break}f||o.push({boneInverseMap:d,meshes:new Set([h])})}let a=new Map,l=new td,c=new td,u=new td;for(let h of o){let{boneInverseMap:d,meshes:f}=h,p=Array.from(d.keys()),_=Array.from(d.values()),m=new Ln(p,_),g=c.getOrCreate(m);for(let y of f){let M=y.geometry.getAttribute("skinIndex"),x=l.getOrCreate(M),w=y.skeleton.bones,b=w.map(O=>u.getOrCreate(O)).join(","),v=`${x};${g};${b}`,T=a.get(v);T==null&&(T=M.clone(),ib(T,w,p),a.set(v,T)),y.geometry.setAttribute("skinIndex",T)}for(let y of f)y.bind(m,new oe)}}function QT(i){let e=new Set;return i.traverse(t=>{if(!t.isSkinnedMesh)return;let n=t;e.add(n)}),e}function eb(i,e){let t=new Set;for(let n=0;n<i.count;n++)for(let r=0;r<i.itemSize;r++){let s=_c(i,n,r);_c(e,n,r)!==0&&t.add(s)}return t}function tb(i,e){let t=new Map,n=i.skeleton,r=i.geometry,s=r.getAttribute("skinIndex"),o=r.getAttribute("skinWeight"),a=e.get(s),l=a?.get(o);if(!l)throw new Error("Unreachable. attributeUsedIndexSetMap does not know the skin index attribute or the skin weight attribute.");for(let c of l)t.set(n.bones[c],n.boneInverses[c]);return t}function nb(i,e){for(let[t,n]of i.entries()){let r=e.get(t);if(r!=null&&!rb(n,r))return!1}return!0}function ib(i,e,t){let n=new Map;for(let s of e)n.set(s,n.size);let r=new Map;for(let[s,o]of t.entries()){let a=n.get(o);r.set(a,s)}for(let s=0;s<i.count;s++)for(let o=0;o<i.itemSize;o++){let a=_c(i,s,o),l=r.get(a);Sg(i,s,o,l)}i.needsUpdate=!0}function rb(i,e,t){if(t=t||1e-4,i.elements.length!=e.elements.length)return!1;for(let n=0,r=i.elements.length;n<r;n++)if(Math.abs(i.elements[n]-e.elements[n])>t)return!1;return!0}var td=class{constructor(){this._objectIndexMap=new Map,this._index=0}get(i){return this._objectIndexMap.get(i)}getOrCreate(i){let e=this._objectIndexMap.get(i);return e==null&&(e=this._index,this._objectIndexMap.set(i,e),this._index++),e}};function sb(i){var e,t,n,r;let s=new et;s.name=i.name,s.setIndex(i.index);for(let[o,a]of Object.entries(i.attributes))s.setAttribute(o,a);for(let[o,a]of Object.entries(i.morphAttributes)){let l=o;s.morphAttributes[l]=a.concat()}s.morphTargetsRelative=i.morphTargetsRelative,s.groups=[];for(let o of i.groups)s.addGroup(o.start,o.count,o.materialIndex);return s.boundingSphere=(t=(e=i.boundingSphere)==null?void 0:e.clone())!=null?t:null,s.boundingBox=(r=(n=i.boundingBox)==null?void 0:n.clone())!=null?r:null,s.drawRange.start=i.drawRange.start,s.drawRange.count=i.drawRange.count,s.userData=i.userData,s}function eg(i){if(Object.values(i).forEach(e=>{e?.isTexture&&e.dispose()}),i.isShaderMaterial){let e=i.uniforms;e&&Object.values(e).forEach(t=>{let n=t.value;n?.isTexture&&n.dispose()})}i.dispose()}function ob(i){let e=i.geometry;e&&e.dispose();let t=i.skeleton;t&&t.dispose();let n=i.material;n&&(Array.isArray(n)?n.forEach(r=>eg(r)):n&&eg(n))}function ab(i){i.traverse(ob)}function lb(i,e){var t,n;console.warn("VRMUtils.removeUnnecessaryJoints: removeUnnecessaryJoints is deprecated. Use combineSkeletons instead. combineSkeletons contributes more to the performance improvement. This function will be removed in the next major version.");let r=(t=e?.experimentalSameBoneCounts)!=null?t:!1,s=[];i.traverse(l=>{l.type==="SkinnedMesh"&&s.push(l)});let o=new Map,a=0;for(let l of s){let u=l.geometry.getAttribute("skinIndex");if(o.has(u))continue;let h=new Map,d=new Map;for(let f=0;f<u.count;f++)for(let p=0;p<u.itemSize;p++){let _=_c(u,f,p),m=h.get(_);m==null&&(m=h.size,h.set(_,m),d.set(m,_)),Sg(u,f,p,m)}u.needsUpdate=!0,o.set(u,d),a=Math.max(a,h.size)}for(let l of s){let u=l.geometry.getAttribute("skinIndex"),h=o.get(u),d=[],f=[],p=r?a:h.size;for(let m=0;m<p;m++){let g=(n=h.get(m))!=null?n:0;d.push(l.skeleton.bones[g]),f.push(l.skeleton.boneInverses[g])}let _=new Ln(d,f);l.bind(_,new oe)}}function cb(i,e){let t=i.position.count,n=new Array(t),r=0,s=e.array;for(let o=0;o<s.length;o++){let a=s[o];n[a]||(n[a]=!0,r++)}return{isVertexUsed:n,vertexCount:t,verticesUsed:r}}function ub(i){let e=[],t=[],n=0;for(let r=0;r<i.length;r++)if(i[r]){let s=n++;e[r]=s,t[s]=r}return{originalIndexNewIndexMap:e,newIndexOriginalIndexMap:t}}function hb(i,e){var t,n,r,s;e.name=i.name,e.morphTargetsRelative=i.morphTargetsRelative,i.groups.forEach(o=>{e.addGroup(o.start,o.count,o.materialIndex)}),e.boundingBox=(n=(t=i.boundingBox)==null?void 0:t.clone())!=null?n:null,e.boundingSphere=(s=(r=i.boundingSphere)==null?void 0:r.clone())!=null?s:null,e.setDrawRange(i.drawRange.start,i.drawRange.count),e.userData=i.userData}function db(i,e,t){let n=e.array,r=new n.constructor(n.length);for(let s=0;s<n.length;s++){let o=n[s];r[s]=t[o]}i.setIndex(new Xe(r,e.itemSize,e.normalized))}function vc(i,e,t){let n=i.constructor,r=new n(e.length*t),s=!0;for(let o=0;o<e.length;o++){let l=e[o]*t,c=o*t;for(let u=0;u<t;u++){let h=i[l+u];r[c+u]=h,s=s&&h===0}}return[r,s]}function fb(i){var e;let t=new Map,n=[];for(let[r,s]of Object.entries(i))if(s.isInterleavedBufferAttribute){let o=s,a=o.data,l=(e=t.get(a))!=null?e:[];t.set(a,l),l.push([r,o])}else{let o=s;n.push([r,o])}return[t,n]}function pb(i,e,t){let[n,r]=fb(e);for(let[s,o]of n){let a=s.array,{stride:l}=s,[c,u]=vc(a,t,l),h=new Li(c,l);h.setUsage(s.usage);for(let[d,f]of o){let{itemSize:p,offset:_,normalized:m}=f,g=new Di(h,p,_,m);i.setAttribute(d,g)}}for(let[s,o]of r){let a=o.array,{itemSize:l,normalized:c}=o,[u,h]=vc(a,t,l);i.setAttribute(s,new Xe(u,l,c))}}function mb(i){var e;let t=new Map,n=[];for(let[r,s]of Object.entries(i)){let o=r;for(let a=0;a<s.length;a++){let l=s[a];if(l.isInterleavedBufferAttribute){let c=l,u=c.data,h=(e=t.get(u))!=null?e:[];t.set(u,h),h.push([o,a,c])}else{let c=l;n.push([o,a,c])}}}return[t,n]}function gb(i,e,t){var n,r;let s=!0,[o,a]=mb(e),l={};for(let[c,u]of o){let h=c.array,{stride:d}=c,[f,p]=vc(h,t,d);s=s&&p;let _=new Li(f,d);_.setUsage(c.usage);for(let[m,g,y]of u){let{itemSize:M,offset:x,normalized:w}=y,b=new Di(_,M,x,w);(n=l[m])!=null||(l[m]=[]),l[m][g]=b}}for(let[c,u,h]of a){let d=h,f=d.array,{itemSize:p,normalized:_}=d,[m,g]=vc(f,t,p);s=s&&g,(r=l[c])!=null||(l[c]=[]),l[c][u]=new Xe(m,p,_)}i.morphAttributes=s?{}:l}function _b(i){let e=new Map;i.traverse(t=>{if(!t.isMesh)return;let n=t,r=n.geometry,s=r.index;if(s==null)return;let o=e.get(r);if(o!=null){n.geometry=o;return}let{isVertexUsed:a,vertexCount:l,verticesUsed:c}=cb(r.attributes,s);if(c===l)return;let{originalIndexNewIndexMap:u,newIndexOriginalIndexMap:h}=ub(a),d=new et;hb(r,d),e.set(r,d),db(d,s,u),pb(d,r.attributes,h),gb(d,r.morphAttributes,h),n.geometry=d}),Array.from(e.keys()).forEach(t=>{t.dispose()})}function vb(i){var e;((e=i.meta)==null?void 0:e.metaVersion)==="0"&&(i.scene.rotation.y=Math.PI)}var pr=class{constructor(){}};pr.combineMorphs=$T;pr.combineSkeletons=JT;pr.deepDispose=ab;pr.removeUnnecessaryJoints=lb;pr.removeUnnecessaryVertices=_b;pr.rotateVRM0=vb;var Tg=["hips","spine","chest","neck","head","leftEye","rightEye","leftUpperArm","rightUpperArm","leftLowerArm","rightLowerArm","leftHand","rightHand","leftUpperLeg","rightUpperLeg","leftLowerLeg","rightLowerLeg","leftFoot","rightFoot"],xb=70,yb={eyeOpenLeft:[{expression:"blinkLeft",map:"invert"}],eyeOpenRight:[{expression:"blinkRight",map:"invert"}],"mouthVowel.A":[{expression:"aa"}],"mouthVowel.I":[{expression:"ih"}],"mouthVowel.U":[{expression:"ou"}],"mouthVowel.E":[{expression:"ee"}],"mouthVowel.O":[{expression:"oh"}],mouthOpen:[{expression:"aa",scale:.6}]},Mb=["loading","heart","blush","sweat","dizzy","tears","squint","smug","dark"],Eb={heart:"happy",tears:"sad",dark:"angry",smug:"relaxed",dizzy:"surprised"};var Sb=i=>i?.allowExcessivelySexualUsage!==!1&&i?.sexualUssageName!=="Disallow";function Tb(i){let e=new Set(i),t=Object.entries(yb).map(([n,r])=>[n,r.filter(s=>e.has(s.expression))]);return Object.fromEntries(t.filter(([,n])=>n.length))}function bb(i){let e=new Set(i),t={};for(let n of Mb){let r=e.has(n)?n:Eb[n];r&&e.has(r)&&(t[n]={[r]:1})}return t}function wb(i,e){return{...e,bones:{...i.bones,...e.bones},channels:{...Tb(i.expressions),...e.channels},expressions:{...bb(i.expressions),...e.expressions},armDown:e.armDown??xb,adultAllowed:i.sexualAllowed&&e.adultAllowed!==!1}}var hd=(i,e,t)=>{i.set(e,(i.get(e)||0)+t)},bg=(i,e,t)=>e.expression?hd(i.expressions,e.expression,t):hd(i.morphs,e.morph,t),wg=(i,e,t)=>hd(i.vrmNames.has(e)?i.expressions:i.morphs,e,t);function Ab(i){let e={};for(let n of Tg){let r=i.humanoid.getRawBoneNode(n);r&&(e[n]=r.name)}let t=(i.expressionManager?.expressions||[]).map(n=>n.expressionName);return{bones:e,expressions:t,sexualAllowed:Sb(i.meta)}}function Rb(i,e){let t=new Map;for(let n of Tg){let r=i.humanoid.getRawBoneNode(n);r&&!e.bones?.[n]&&t.set(n,r)}return t}function Cb(i,e,t){let n=new Set((i.expressionManager?.expressions||[]).map(s=>s.expressionName)),r=t?i.springBoneManager:void 0;return{expressionNames:n,nodes:e,rested(){r?.setInitState()},setExpressions(s){for(let o of n)i.expressionManager.setValue(o,Math.min(1,Math.max(0,s.get(o)||0)))},update(s){for(let o of i.materials??[])o.update?.(s);i.expressionManager?.update(),i.nodeConstraintManager?.update(),r?.update(s)}}}async function Ag(i,e,t){let n=new Gs;n.register(c=>new Eg(c,{autoUpdateHumanBones:!1}));let s=(await n.loadAsync(i)).userData.vrm;s.humanoid.autoUpdateHumanBones=!1,s.humanoid.normalizedHumanBonesRoot.removeFromParent(),t.add(()=>pr.deepDispose(s.scene));let o=wb(Ab(s),e),a=Cb(s,Rb(s,e),!e.springs),l=(s.materials??[]).some(c=>c.isMToonMaterial);return{model:s.scene,profile:o,runtime:a,mtoon:l}}var Pb=["KHR_draco_mesh_compression","EXT_meshopt_compression","KHR_meshopt_compression","KHR_texture_basisu"],Ib=1179937895,Lb=1313821514;function Db(i){try{let e=new DataView(i);return i.byteLength>=20&&e.getUint32(0,!0)===Ib?e.getUint32(16,!0)!==Lb?null:JSON.parse(new TextDecoder().decode(new Uint8Array(i,20,e.getUint32(12,!0)))):JSON.parse(new TextDecoder().decode(i))}catch{return null}}var Ob=i=>(i.extensionsUsed??[]).filter(e=>Pb.includes(e)),Nb=i=>Object.values(i).filter(e=>!!e?.isTexture);async function dd(i,e){let t=await fetch(i);if(!t.ok)throw new Error(`glTF 모델을 받지 못했습니다 (${t.status}): ${i}`);let n=await t.arrayBuffer(),r=Db(n);if(!r)throw new Error(`glTF 파일 형식이 아닙니다: ${i}`);let s=Ob(r);if(s.length)throw new Error(`압축된 glTF는 아직 지원하지 않습니다 (${s.join("·")}). 압축 없이 다시 내보낸 파일을 써 주세요`);let o=await new Gs().parseAsync(n,On.extractUrlBase(i)),a=new Set;return o.scene.traverse(l=>{for(let c of[].concat(l.material||[]))for(let u of Nb(c))a.add(u)}),e.add(()=>{for(let l of a)l.dispose()}),{model:o.scene,animations:o.animations}}var xc=class extends Ii{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new or;e.deleteAttribute("uv");let t=new kn({side:kt}),n=new kn,r=new fi(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);let s=new mt(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);let o=new Ir(e,n,6),a=new ct;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new mt(e,Zs(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new mt(e,Zs(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let u=new mt(e,Zs(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let h=new mt(e,Zs(43));h.position.set(-.462,8.89,14.52),h.scale.set(4.38,5.441,.088),this.add(h);let d=new mt(e,Zs(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new mt(e,Zs(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Zs(i){return new Nr({color:0,emissive:16777215,emissiveIntensity:i})}var Ub=.8,ra={intensity:1,ambient:0,environment:.8,exposure:1},Fb=i=>i===void 0?Ub:Math.min(1,Math.max(.04,Math.pow(2/(i+2),.25)));function Rg(i){let e=i,t=new kn({name:i.name,color:e.color?.clone()??16777215,map:e.map??null,alphaMap:e.alphaMap??null,normalMap:e.normalMap??null,...e.normalScale&&{normalScale:e.normalScale.clone()},emissive:e.emissive?.clone()??0,emissiveMap:e.emissiveMap??null,emissiveIntensity:e.emissiveIntensity??1,aoMap:e.aoMap??null,aoMapIntensity:e.aoMapIntensity??1,roughness:Fb(e.shininess),metalness:0,opacity:i.opacity,transparent:i.transparent,alphaTest:i.alphaTest,side:i.side,depthWrite:i.depthWrite,vertexColors:i.vertexColors});return t.visible=i.visible,t}var Ks=i=>!!i.isMeshStandardMaterial,Cg=(i,e)=>i.isMeshBasicMaterial?e==="lit":!!i.isMeshPhongMaterial||!!i.isMeshLambertMaterial;function Pg(i,e,t){if(!e)return;let n=t(e.map),r=t(e.ao,!0);n&&(i.map=n),r&&Ks(i)&&(i.aoMap=r,i.aoMapIntensity=e.aoScale??1),e.transparent!==void 0&&(i.transparent=e.transparent),e.alphaTest!==void 0&&(i.alphaTest=e.alphaTest),e.doubleSided!==void 0&&(i.side=e.doubleSided?Ht:hn)}var Bb=`
#ifdef DSC_BAKED_AO
  attribute float bakedAo;
  varying float vBakedAo;
#endif
`,Hb=`
#ifdef DSC_BAKED_AO
  vBakedAo = bakedAo;
#endif
`,kb=`
#ifdef DSC_BAKED_AO
  uniform float aoStrength;
  varying float vBakedAo;
#endif
`,Vb=`
#ifdef DSC_BAKED_AO
  float dscBakedAo = mix( 1.0, vBakedAo, aoStrength );
  reflectedLight.indirectDiffuse *= dscBakedAo;
  #if defined( USE_ENVMAP ) && defined( STANDARD )
    reflectedLight.indirectSpecular *= computeSpecularOcclusion( saturate( dot( geometryNormal, geometryViewDir ) ), dscBakedAo, material.roughness );
  #endif
#endif
`,zb=`
#ifdef DSC_BAKED_AO_DEBUG
  gl_FragColor.rgb = vec3( vBakedAo * vBakedAo );   // 확인용: AO만 회색으로 (툰 재질 TOON_BAKED_AO_DEBUG와 같은 밝기)
#endif
`,fd=(i,e,t)=>{let n=`#include <${e}>`;if(!i.includes(n))throw new Error(`물리 재질 셰이더에 ${n}가 없습니다`);return i.replace(n,n+`
`+t)};function Gb(i){i.vertexShader=fd(Bb+i.vertexShader,"begin_vertex",Hb),i.fragmentShader=fd(fd(kb+i.fragmentShader,"aomap_fragment",Vb),"opaque_fragment",zb)}var yc=new WeakMap,Wb={value:0};function Ig(i){if(yc.has(i))return;let e={uniforms:null};yc.set(i,e),i.onBeforeCompile=t=>{t.uniforms.aoStrength=e.uniforms?.aoStrength??Wb,Gb(t)},i.customProgramCacheKey=()=>"dsc-pbr"}var Lg=i=>yc.has(i)&&i.visible&&!i.transparent;function Dg(i,e,t=!1){let n=yc.get(i);n&&(n.uniforms=e,i.defines={...i.defines,DSC_BAKED_AO:"",...t?{DSC_BAKED_AO_DEBUG:""}:{}},i.needsUpdate=!0)}function Og(i){if(!i.defines||!("DSC_BAKED_AO"in i.defines))return;let{DSC_BAKED_AO:e,DSC_BAKED_AO_DEBUG:t,...n}=i.defines;i.defines=n,i.needsUpdate=!0}function Ng(i,e,t={}){i.toneMapping=Vr,i.toneMappingExposure=t.exposure??ra.exposure;let n=new Fs(i),r=new xc,s=n.fromScene(r,.04);return r.dispose(),n.dispose(),e.environment=s.texture,e.environmentIntensity=t.environment??ra.environment,()=>s.dispose()}var pd=[{key:"glasses",ko:"뿔테 안경",en:"Glasses",param:"key11",on:1,line:"outfit_glasses"},{key:"monocle",ko:"외눈 안경",en:"Monocle",param:"key12",on:1,line:"outfit_glasses"},{key:"skirt",ko:"치마 길이 바꾸기",en:"Change skirt length",param:"Clothes1",on:-1,line:"outfit_skirt_long"},{key:"chestClothes",ko:"가슴 옷 바꾸기",en:"Change top",param:"Clothes3",on:1,line:"outfit_chest_cover"},{key:"shoesOff",ko:"신발 벗기",en:"Take off shoes",param:"Clothes4",on:1,line:"outfit_shoes"},{key:"tailHide",ko:"꼬리 숨기기",en:"Hide tail",param:"Clothes5",on:-1,line:"outfit_tail"},{key:"earHide",ko:"동물귀 숨기기",en:"Hide animal ears"}];var Xb=new Dn(-1,1,1,-1,0,1),md=class extends et{constructor(){super(),this.setAttribute("position",new At([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new At([0,2,0,0,2,0],2))}},qb=new md,Mc=class{constructor(e){this._mesh=new mt(qb,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Xb)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Yb=`
#ifdef TAA_VELOCITY
  uniform mat4 taaViewProjection;
  uniform mat4 taaPrevViewProjection;
  uniform mat4 taaPrevModelMatrix;
  varying vec4 vTaaClip;
  varying vec4 vTaaPrevClip;
  #ifdef USE_SKINNING
    uniform highp sampler2D taaPrevBoneTexture;
    // 뼈 텍스처에서 뼈 행렬 하나 (three.js getBoneMatrix와 같음, 텍스처만 인자)
    mat4 taaBone( highp sampler2D bones, const in float i ) {
      int size = textureSize( bones, 0 ).x;
      int j = int( i ) * 4;
      int x = j % size;
      int y = j / size;
      return mat4( texelFetch( bones, ivec2( x, y ), 0 ), texelFetch( bones, ivec2( x + 1, y ), 0 ),
        texelFetch( bones, ivec2( x + 2, y ), 0 ), texelFetch( bones, ivec2( x + 3, y ), 0 ) );
    }
    // 가중치를 섞은 스킨 행렬 (모델 좌표 기준)
    mat4 taaSkin( highp sampler2D bones ) {
      mat4 blend = skinWeight.x * taaBone( bones, skinIndex.x ) + skinWeight.y * taaBone( bones, skinIndex.y )
        + skinWeight.z * taaBone( bones, skinIndex.z ) + skinWeight.w * taaBone( bones, skinIndex.w );
      return bindMatrixInverse * blend * bindMatrix;
    }
  #endif
  #ifdef USE_MORPHTARGETS
    uniform float taaPrevMorphBase;
    uniform float taaPrevMorphInfluences[ MORPHTARGETS_COUNT ];
  #endif
#endif
`,jb=`
#ifdef TAA_VELOCITY
  vec3 taaCurrent = transformed;
  vec3 taaPrevious = position;
  vec3 taaPrevNormal = normal;
  #ifdef USE_MORPHTARGETS
    taaPrevious *= taaPrevMorphBase;
    #ifdef USE_MORPHNORMALS
      taaPrevNormal *= taaPrevMorphBase;
    #endif
    for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
      if ( taaPrevMorphInfluences[ i ] != 0.0 ) {
        taaPrevious += getMorph( gl_VertexID, i, 0 ).xyz * taaPrevMorphInfluences[ i ];
        #ifdef USE_MORPHNORMALS
          taaPrevNormal += getMorph( gl_VertexID, i, 1 ).xyz * taaPrevMorphInfluences[ i ];
        #endif
      }
    }
  #endif
  #ifdef USE_SKINNING
    mat4 taaPrevSkin = taaSkin( taaPrevBoneTexture );
    taaPrevious = ( taaPrevSkin * vec4( taaPrevious, 1.0 ) ).xyz;
    taaPrevNormal = ( taaPrevSkin * vec4( taaPrevNormal, 0.0 ) ).xyz;
  #endif
  #ifdef OUTLINE
    // 툰 외곽선: 지금은 셰이더가 만든 outlineOffset, 이전은 같은 식(두께 × 법선 길이 × 단위 법선)을 이전 법선으로
    taaCurrent += outlineOffset;
    vec3 taaPrevUnit = normalize( taaPrevNormal );
    float taaWidth = outlineWidthFactor * length( normalMatrix * taaPrevUnit );
    #ifdef OUTLINE_WIDTH_ATTRIBUTE
      taaWidth *= outlineWidth;
    #endif
    taaPrevious += taaWidth * taaPrevUnit;
  #endif
  vTaaClip = taaViewProjection * modelMatrix * vec4( taaCurrent, 1.0 );
  vTaaPrevClip = taaPrevViewProjection * taaPrevModelMatrix * vec4( taaPrevious, 1.0 );
#endif
`,Zb=`
#ifdef TAA_VELOCITY
  layout( location = 1 ) out highp vec4 taaVelocity;
  varying vec4 vTaaClip;
  varying vec4 vTaaPrevClip;
#endif
`,Kb=`
#ifdef TAA_VELOCITY
  taaVelocity = vec4( ( vTaaClip.xy / vTaaClip.w - vTaaPrevClip.xy / vTaaPrevClip.w ) * 0.5 * ( TAA_MOTION_WEIGHT ), 0.0, 0.0 );
  #ifdef TAA_REACTIVE
    taaVelocity.a = gl_FragColor.a;
  #endif
#endif
`;function $b(i){let e=["#define TAA_VELOCITY"],t="1.0";return i.transparent&&(e.push("#define TAA_REACTIVE"),i.blending!==cr?t="0.0":i.premultipliedAlpha&&(t="gl_FragColor.a")),e.push(`#define TAA_MOTION_WEIGHT ${t}`),e.join(`
`)+`
`}var Ug=(i,e,t,n)=>{let r=i.indexOf("void main()"),s=i.slice(0,r)+t+i.slice(r);return e+s.replace(/\}\s*$/,n+`}
`)},Jb=(i,e)=>{i.vertexShader=Ug(i.vertexShader,e,Yb,jb),i.fragmentShader=Ug(i.fragmentShader,e,Zb,Kb)},Qb=i=>Math.max(4,Math.ceil(Math.sqrt(i*4)/4)*4),ew=(i,e)=>{if(i)return 1;let t=0;for(let n=0;n<e.length;n++)t+=e[n];return 1-t};function tw(){let i=new WeakMap,e=new Map,t=new Map,n=new Set,r=l=>i.get(l)??i.set(l,l.matrixWorld.clone()).get(l),s=l=>{let c=e.get(l);if(!c){let u=Qb(l.bones.length),h=new Float32Array(u*u*4);h.set(l.boneMatrices),c=new rr(h,u,u,rn,dn),c.needsUpdate=!0,e.set(l,c)}return c},o=l=>t.get(l)??t.set(l,Float32Array.from(l)).get(l),a={frame:0,bind(l,c){n.add(c),l.taaPrevModelMatrix.value.copy(r(c));let u=c;if(u.isSkinnedMesh&&u.skeleton&&(l.taaPrevBoneTexture.value=s(u.skeleton)),u.morphTargetInfluences){let h=o(u.morphTargetInfluences);l.taaPrevMorphInfluences.value=h,l.taaPrevMorphBase.value=ew(u.geometry.morphTargetsRelative,h)}},commit(){for(let l of n)r(l).copy(l.matrixWorld);for(let[l,c]of e)c.image.data.set(l.boneMatrices),c.needsUpdate=!0;for(let[l,c]of t)c.set(l);n.clear(),a.frame++},dispose(){for(let l of e.values())l.dispose()}};return a}function nw(i,e,t){let n={taaViewProjection:e.viewProjection,taaPrevViewProjection:e.prevViewProjection,taaPrevModelMatrix:{value:new oe},taaPrevBoneTexture:{value:null},taaPrevMorphBase:{value:1},taaPrevMorphInfluences:{value:new Float32Array(1)}},r=$b(i),s=i.onBeforeCompile!==Xt.prototype.onBeforeCompile?i.onBeforeCompile.bind(i):null,o=s?i.customProgramCacheKey.bind(i):null;i.onBeforeCompile=(c,u)=>{s?.(c,u),Object.assign(c.uniforms,n),Jb(c,r)},i.customProgramCacheKey=()=>(o?o()+`
`:"")+`taa-velocity
`+r;let a=-1,l=null;return i.onBeforeRender=(c,u,h,d,f)=>{let p=a!==t.frame;!p&&f===l||(a=t.frame,l=f,t.bind(n,f),p||(i.uniformsNeedUpdate=!0))},i.needsUpdate=!0,n}function Fg(i){let e={viewProjection:{value:new oe},prevViewProjection:{value:new oe}},t=tw(),n=new WeakSet,r=!1;return i.add(()=>t.dispose()),{prepare(s){s.traverse(o=>{let a=o;if(a.isMesh)for(let l of[].concat(a.material))n.has(l)||(n.add(l),nw(l,e,t))})},begin(s){e.viewProjection.value.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),r||e.prevViewProjection.value.copy(e.viewProjection.value)},commit(){e.prevViewProjection.value.copy(e.viewProjection.value),t.commit(),r=!0}}}var iw=8,Bg=.9,rw=.5,sw=2,ow=250;function Hg(i,e){let t=1,n=0;for(let r=i;r>0;r=Math.floor(r/e))t/=e,n+=t*(r%e);return n}var aw=i=>{let e=i%iw+1;return[Hg(e,2)-.5,Hg(e,3)-.5]};function lw(i,e,t,n){let r=i.elements,s=2*e[0]/t,o=2*e[1]/n;for(let a=0;a<4;a++)r[a*4]+=s*r[a*4+3],r[a*4+1]+=o*r[a*4+3]}var kg=new oe;function cw(i,e,t,n,r){kg.copy(i.projectionMatrix),lw(i.projectionMatrix,e,t,n);try{r()}finally{i.projectionMatrix.copy(kg)}}var uw=(i,e)=>!i||i.width!==e.width||i.height!==e.height||e.time<i.time||e.time-i.time>ow,hw=`
void main() {
  gl_Position = vec4( position.xy, 0.0, 1.0 );
}
`,dw=`
// TAA 해석: 지금 색(선형, premultiplied)을 표시 인코딩(sRGB, premultiplied)으로 바꾸고,
// 3x3에서 가장 가까운 깊이 픽셀의 속도로 히스토리를 Catmull-Rom 재투영 → 이웃 YCoCg·알파 범위로 클리핑 → 섞기
// 이전 위치의 지난 속도가 지금 속도와 크게 다르면(다른 물체가 덮고 있던 곳) 히스토리 비중을 줄임 (SMAA T2x의 속도 가중과 같은 생각)
uniform sampler2D currentTexture;
uniform sampler2D velocityTexture;
uniform sampler2D prevVelocityTexture;
uniform float velocityReject;
uniform sampler2D depthTexture;
uniform sampler2D historyTexture;
uniform vec2 resolution;
uniform float feedback;
uniform float reactiveFeedback;
// 실사 셰이딩(Neutral 톤 매핑): 장면을 렌더 타깃에 그리면 three.js가 톤 매핑을 하지 않으므로 여기서 함 (toneMappingExposure 포함)
#ifdef TAA_TONE_MAPPING
  #include <tonemapping_pars_fragment>
#endif

// 선형 → sRGB 전달 함수 (three.js sRGBTransferOETF와 같은 식)
vec3 srgbEncode( const in vec3 c ) {
  return mix( c * 12.92, 1.055 * pow( c, vec3( 1.0 / 2.4 ) ) - 0.055, step( vec3( 0.0031308 ), c ) );
}
// premultiplied 선형 → premultiplied sRGB: 알파를 나눠 인코딩하고 다시 곱함 (지금의 직접 그리기와 같은 값, 투명 경계 후광 없음)
vec4 toDisplay( const in vec4 c ) {
  if ( c.a <= 0.0 ) return vec4( 0.0 );
  vec3 color = c.rgb / c.a;
  #ifdef TAA_TONE_MAPPING
    color = NeutralToneMapping( color );   // 직접 그리기의 tonemapping_fragment와 같은 자리 (알파를 나눈 뒤, 색 공간 변환 전)
  #endif
  return vec4( srgbEncode( clamp( color, 0.0, 1.0 ) ) * c.a, c.a );
}
vec4 toYCoCg( const in vec4 c ) {
  return vec4( dot( c.rgb, vec3( 0.25, 0.5, 0.25 ) ), dot( c.rgb, vec3( 0.5, 0.0, -0.5 ) ), dot( c.rgb, vec3( -0.25, 0.5, -0.25 ) ), c.a );
}
vec4 fromYCoCg( const in vec4 c ) {
  return vec4( c.x + c.y - c.z, c.x + c.z, c.x - c.y - c.z, c.a );
}
// 상자 가운데 쪽으로 잘라 상자 안으로 (Playdead clip_aabb와 같은 방식, 알파 포함 4차원)
vec4 clipToBox( const in vec4 q, const in vec4 lo, const in vec4 hi ) {
  vec4 center = 0.5 * ( hi + lo );
  vec4 extent = 0.5 * ( hi - lo ) + 1e-5;
  vec4 offset = q - center;
  vec4 unit = abs( offset / extent );
  float most = max( max( unit.x, unit.y ), max( unit.z, unit.w ) );
  return most > 1.0 ? center + offset / most : q;
}
// Catmull-Rom 5탭 (쌍선형 샘플 5번, 모서리 4탭 생략 후 가중치 합으로 나눔): 움직일 때 쌍선형보다 덜 흐려짐
vec4 sampleHistory( const in vec2 uv ) {
  vec2 position = uv * resolution;
  vec2 center = floor( position - 0.5 ) + 0.5;
  vec2 f = position - center;
  vec2 w0 = f * ( -0.5 + f * ( 1.0 - 0.5 * f ) );
  vec2 w1 = 1.0 + f * f * ( -2.5 + 1.5 * f );
  vec2 w2 = f * ( 0.5 + f * ( 2.0 - 1.5 * f ) );
  vec2 w3 = f * f * ( -0.5 + 0.5 * f );
  vec2 w12 = w1 + w2;
  vec2 p0 = ( center - 1.0 ) / resolution;
  vec2 p3 = ( center + 2.0 ) / resolution;
  vec2 p12 = ( center + w2 / w12 ) / resolution;
  vec4 sum = texture2D( historyTexture, vec2( p12.x, p0.y ) ) * w12.x * w0.y
    + texture2D( historyTexture, vec2( p0.x, p12.y ) ) * w0.x * w12.y
    + texture2D( historyTexture, p12 ) * w12.x * w12.y
    + texture2D( historyTexture, vec2( p3.x, p12.y ) ) * w3.x * w12.y
    + texture2D( historyTexture, vec2( p12.x, p3.y ) ) * w12.x * w3.y;
  return sum / ( w12.x * w0.y + w0.x * w12.y + w12.x * w12.y + w3.x * w12.y + w12.x * w3.y );
}

void main() {
  ivec2 pixel = ivec2( gl_FragCoord.xy );
  ivec2 last = ivec2( resolution ) - 1;
  vec4 center = vec4( 0.0 ), sum = vec4( 0.0 ), sumSq = vec4( 0.0 ), lo = vec4( 1e4 ), hi = vec4( -1e4 );
  float closest = 2.0;
  ivec2 closestPixel = pixel;
  for ( int y = -1; y <= 1; y ++ ) {
    for ( int x = -1; x <= 1; x ++ ) {
      ivec2 q = clamp( pixel + ivec2( x, y ), ivec2( 0 ), last );
      vec4 c = toYCoCg( toDisplay( texelFetch( currentTexture, q, 0 ) ) );
      if ( x == 0 && y == 0 ) center = c;
      sum += c; sumSq += c * c; lo = min( lo, c ); hi = max( hi, c );
      float depth = texelFetch( depthTexture, q, 0 ).r;
      if ( depth < closest ) { closest = depth; closestPixel = q; }
    }
  }
  // 분산 상자(평균 ± 표준편차)와 최소·최대 상자의 교집합
  vec4 mean = sum / 9.0;
  vec4 sigma = sqrt( max( sumSq / 9.0 - mean * mean, 0.0 ) );
  vec4 boxLo = max( lo, mean - sigma ), boxHi = min( hi, mean + sigma );
  vec2 uv = ( vec2( pixel ) + 0.5 ) / resolution;
  vec2 velocity = texelFetch( velocityTexture, closestPixel, 0 ).xy;
  vec2 prevUv = uv - velocity;
  vec2 prevVelocity = texelFetch( prevVelocityTexture, clamp( ivec2( prevUv * resolution ), ivec2( 0 ), last ), 0 ).xy;
  float weight = mix( feedback, min( feedback, reactiveFeedback ), texelFetch( velocityTexture, pixel, 0 ).a );
  weight *= clamp( 1.0 - length( ( velocity - prevVelocity ) * resolution ) / velocityReject, 0.0, 1.0 );
  if ( any( lessThan( prevUv, vec2( 0.0 ) ) ) || any( greaterThan( prevUv, vec2( 1.0 ) ) ) ) weight = 0.0;   // 이전 위치가 화면 밖: 히스토리 없음
  vec4 result = center;
  if ( weight > 0.0 ) result = mix( center, clipToBox( toYCoCg( sampleHistory( prevUv ) ), boxLo, boxHi ), weight );
  gl_FragColor = max( fromYCoCg( result ), 0.0 );
}
`,fw=`
// 히스토리(이미 premultiplied sRGB)를 그대로 캔버스로
uniform sampler2D sourceTexture;
void main() {
  gl_FragColor = texelFetch( sourceTexture, ivec2( gl_FragCoord.xy ), 0 );
}
`,Vg=(i,e)=>new qt({vertexShader:hw,fragmentShader:i,uniforms:e,blending:Vi,depthTest:!1,depthWrite:!1}),pw=()=>{let i=new ei(1,1,Gi);return i.format=ri,i};function mw(){let i={type:vn,format:rn};return{scene:[0,1].map(()=>new tn(1,1,{...i,count:2,depthBuffer:!0,stencilBuffer:!0,depthTexture:pw()})),history:[0,1].map(()=>new tn(1,1,{...i,depthBuffer:!1,minFilter:Nt,magFilter:Nt}))}}var zg=i=>[...i.scene,...i.history];function gw(i,e){let t=e.toneMapping===Vr;t!=="TAA_TONE_MAPPING"in i.defines&&(t?i.defines.TAA_TONE_MAPPING="":delete i.defines.TAA_TONE_MAPPING,i.needsUpdate=!0),i.uniforms.toneMappingExposure.value=e.toneMappingExposure}function Gg(i,e){let t=mw(),n=Fg(e),r=Vg(dw,{currentTexture:{value:null},velocityTexture:{value:null},prevVelocityTexture:{value:null},depthTexture:{value:null},historyTexture:{value:null},toneMappingExposure:{value:1},velocityReject:{value:sw},resolution:{value:new Ve},feedback:{value:Bg},reactiveFeedback:{value:rw}}),s=Vg(fw,{sourceTexture:{value:null}}),o=new Mc;e.add(()=>{for(let p of zg(t))p.dispose(),p.depthTexture?.dispose();r.dispose(),s.dispose(),o.dispose()});let a=new Ve,l={texture:{value:null},resolution:{value:new Ve(1,1)}},c=null,u=0,h=0,d=!1,f=(p,_)=>{o.material=p,i.setRenderTarget(_),o.render(i)};return{render(p,_,m){i.getDrawingBufferSize(a);let g={width:a.x,height:a.y,time:m},y=uw(c,g),M=!c||c.width!==g.width||c.height!==g.height;if(M)for(let b of zg(t))b.setSize(a.x,a.y);c=g,u=y?0:u+1,d||(n.prepare(p),d=!0);let x=t.scene[1-h],w=r.uniforms;l.texture.value=M?null:t.scene[h].depthTexture,l.resolution.value.copy(a),n.begin(_),cw(_,aw(u),a.x,a.y,()=>{i.setRenderTarget(x),i.render(p,_)}),n.commit(),w.currentTexture.value=x.textures[0],w.velocityTexture.value=x.textures[1],w.depthTexture.value=x.depthTexture,w.prevVelocityTexture.value=t.scene[h].textures[1],w.historyTexture.value=t.history[h].texture,w.feedback.value=y?0:Bg,w.resolution.value.copy(a),gw(r,i),r.uniformsNeedUpdate=!0,f(r,t.history[1-h]),s.uniforms.sourceTexture.value=t.history[1-h].texture,f(s,null),h=1-h},depth:l}}var _w=new me,vw=new me;function Wg(i,e,t,n=()=>{}){let r=new Map,s=new Map;for(let[o,a]of Object.entries(i??{})){let l=[];for(let c of a){let u=e(c.bone);if(!u){n(`뼈 포즈 ${o}: 뼈를 찾지 못함 (${c.bone})`);continue}let h=c.toward?e(c.toward.bone):null;c.toward&&!h&&n(`뼈 포즈 ${o}: 뼈를 찾지 못함 (${c.toward.bone})`);let d=new A;c.move&&d.set(...c.move).multiplyScalar(t),h&&c.toward&&d.add(h.getWorldPosition(new A).sub(u.getWorldPosition(new A)).multiplyScalar(c.toward.amount)),l.push({node:u,move:d.lengthSq()>0?xw(u,d):null,rotate:c.rotate?yw(u,c.rotate):null}),s.has(u)||s.set(u,{position:u.position.clone(),quaternion:u.quaternion.clone()})}l.length&&r.set(o,l)}return{names:[...r.keys()],reset(){for(let[o,a]of s)o.position.copy(a.position),o.quaternion.copy(a.quaternion)},record(){for(let[o,a]of s)a.position.copy(o.position),a.quaternion.copy(o.quaternion)},apply(o){for(let[a,l]of r){let c=Math.min(1,Math.max(0,o.get(a)||0));if(c)for(let{node:u,move:h,rotate:d}of l)h&&u.position.addScaledVector(h,c),d&&u.quaternion.multiply(vw.slerpQuaternions(_w,d,c))}}}}function xw(i,e){return i.parent?e.applyMatrix3(new Le().setFromMatrix4(i.parent.matrixWorld).invert()):e}function yw(i,e){let t=Math.PI/180,n=new me().setFromEuler(new bt(e[0]*t,e[1]*t,e[2]*t,"XYZ")),r=i.getWorldQuaternion(new me);return r.clone().invert().multiply(n).multiply(r)}var Xg=[68,83,65,79],Mw=1<<20;function qg({params:i,meshes:e,data:t}){let n=new TextEncoder().encode(JSON.stringify({version:1,params:i,meshes:e})),r=new Uint8Array(8+n.length+t.length);return r.set(Xg,0),new DataView(r.buffer).setUint32(4,n.length,!0),r.set(n,8),r.set(t,8+n.length),r}var Ew=i=>!!i&&typeof i=="object"&&typeof i.name=="string"&&Number.isSafeInteger(i.count)&&i.count>=0;function Sw(i){let e;try{e=JSON.parse(new TextDecoder("utf-8",{fatal:!0}).decode(i))}catch{return null}return!e||e.version!==1||typeof e.params!="string"||!Array.isArray(e.meshes)||!e.meshes.every(Ew)?null:e}function Yg(i){if(i.length<8||Xg.some((s,o)=>i[o]!==s))return null;let e=new DataView(i.buffer,i.byteOffset,i.byteLength).getUint32(4,!0);if(e>Mw||8+e>i.length)return null;let t=Sw(i.subarray(8,8+e));if(!t)return null;let n=i.subarray(8+e);return t.meshes.reduce((s,o)=>s+o.count,0)===n.length?{...t,data:n}:null}function jg(i,e,t){return!i||i.params!==e||i.meshes.length!==t.length?!1:t.every((n,r)=>i.meshes[r].name===n.name&&i.meshes[r].count===n.count)}var Tw=1,sa={strength:.6,shade:.3,radius:.08,directions:96,resolution:1024},$s=(i,e,t,n)=>typeof i=="number"&&Number.isFinite(i)?Math.max(e,Math.min(t,i)):n;function vd(i={},e={}){let t={radius:$s(i.radius,.005,.5,sa.radius),directions:Math.round($s(i.directions,8,512,sa.directions)),resolution:Math.round($s(i.resolution,128,4096,sa.resolution))};return{enabled:e.ao===!0||i.enabled===!0,params:t,shade:$s(i.shade,0,2,sa.shade),debug:i.debug===!0}}var xd=(i={},e={})=>$s(e.aoStrength,0,1,$s(i.strength,0,1,sa.strength));function bw(i){let e=new Float32Array(i*3),t=Math.PI*(3-Math.sqrt(5));for(let n=0;n<i;n++){let r=1-(2*n+1)/i,s=Math.sqrt(1-r*r),o=n*t;e[n*3]=Math.cos(o)*s,e[n*3+1]=r,e[n*3+2]=Math.sin(o)*s}return e}function Kg(i,e=null){let t=JSON.stringify({version:Tw,...i,extra:e}),n=2166136261,r=16777619^t.length;for(let s=0;s<t.length;s++)n=Math.imul(n^t.charCodeAt(s),16777619)>>>0,r=Math.imul(r^t.charCodeAt(t.length-1-s),16777619)>>>0;return n.toString(16).padStart(8,"0")+r.toString(16).padStart(8,"0")}var Ec=i=>[].concat(i.material),yd=i=>i.visible&&!i.transparent&&om(i)&&!("OUTLINE"in(i.defines||{}))||Lg(i),Md=(i,e,t=!1)=>Ks(i)?Dg(i,e,t):rm(i,e,t),$g=i=>Ks(i)?Og(i):sm(i),ww=i=>{for(;i;i=i.parent)if(!i.visible)return!1;return!0},Aw=i=>i.name.endsWith("__outline")||i.name.includes("__order");function Jg(i){let e=[],t=new Set;return i.traverse(n=>{let r=n;!r.isMesh||Aw(r)||t.has(r.geometry)||!ww(r)||!Ec(r).some(yd)||(t.add(r.geometry),e.push(r))}),e}var gd=new oe,Zg=new oe;function Rw(i,e,t){let n=i.geometry.getAttribute("skinIndex"),r=i.geometry.getAttribute("skinWeight");if(!n||!r)return t;gd.elements.fill(0);for(let s=0;s<4;s++){let o=r.getComponent(e,s),a=i.skeleton.bones[n.getComponent(e,s)];if(!(!o||!a)){Zg.multiplyMatrices(a.matrixWorld,i.skeleton.boneInverses[n.getComponent(e,s)]);for(let l=0;l<16;l++)gd.elements[l]+=Zg.elements[l]*o}}return t.transformDirection(i.bindMatrix).transformDirection(gd).transformDirection(i.bindMatrixInverse)}function Cw(i){let e=i.geometry.getAttribute("position"),t=i.geometry.getAttribute("normal"),n=e.count,r=new Float32Array(n*3),s=new Float32Array(n*3),o=new A,a=new A,l=new Le().getNormalMatrix(i.matrixWorld);for(let c=0;c<n;c++)i.getVertexPosition(c,o).applyMatrix4(i.matrixWorld).toArray(r,c*3),t?a.fromBufferAttribute(t,c):a.set(0,0,0),i.isSkinnedMesh&&Rw(i,c,a),a.applyMatrix3(l).normalize().toArray(s,c*3);return{positions:r,normals:s}}var Pw=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Iw=`
uniform sampler2D map;
uniform float alphaTest;
varying vec2 vUv;
void main() {
  #ifdef ALPHA_MAP
    if ( texture2D( map, vUv ).a < alphaTest ) discard;
  #endif
  float z = gl_FragCoord.z;
  gl_FragColor = vec4( z, gl_FrontFacing ? 1.0 : z, 1.0, 1.0 );
}`,Lw=`
uniform sampler2D depthMap;
uniform mat4 bakeViewProjection;
uniform vec3 bakeDirection;
uniform float depthRange;
uniform float radius;
uniform float normalBias;
uniform float depthBias;
uniform int gatherWidth;
uniform vec2 gatherSize;
varying vec2 vResult;
void main() {
  ivec2 texel = ivec2( gl_VertexID % gatherWidth, gl_VertexID / gatherWidth );
  gl_Position = vec4( ( vec2( texel ) + 0.5 ) / gatherSize * 2.0 - 1.0, 0.0, 1.0 );
  gl_PointSize = 1.0;
  vResult = vec2( 0.0 );
  vec3 n = normalize( normal );
  float cosine = dot( n, bakeDirection );
  if ( cosine <= 0.0 ) return;
  vec4 clip = bakeViewProjection * vec4( position + n * normalBias, 1.0 );
  vec3 ndc = clip.xyz / clip.w;
  float z = ndc.z * 0.5 + 0.5 - depthBias;
  vec2 nearest = texture2D( depthMap, ndc.xy * 0.5 + 0.5 ).rg;
  // 정점 쪽을 보는 뒷면이 앞에 있으면 그것이 가장 가까운 막는 면, 없으면 가장 앞 면
  float blocker = nearest.g < z ? nearest.g : nearest.r;
  float occlusion = blocker < z ? 1.0 - smoothstep( radius * 0.3, radius, ( z - blocker ) * depthRange ) : 0.0;
  vResult = vec2( cosine * ( 1.0 - occlusion ), cosine );
}`,Dw=`
varying vec2 vResult;
void main() { gl_FragColor = vec4( vResult, 0.0, 1.0 ); }`,Ow="void main() { gl_Position = vec4( position.xy, 0.0, 1.0 ); }",Nw=`
uniform sampler2D gathered;
void main() {
  vec2 sum = texelFetch( gathered, ivec2( gl_FragCoord.xy ), 0 ).rg;
  gl_FragColor = vec4( vec3( sum.y > 0.0 ? sum.x / sum.y : 1.0 ), 1.0 );
}`;function Uw(i){if(!yd(i))return null;let e=sc(i),t=i.alphaTest>0&&!!e;return new qt({vertexShader:Pw,fragmentShader:Iw,defines:t?{ALPHA_MAP:""}:{},uniforms:{map:{value:e},alphaTest:{value:i.alphaTest}},side:Ht,depthTest:!1,depthWrite:!1,blending:No,blendEquation:rl,blendSrc:kr,blendDst:kr})}var Fw=new cn({visible:!1});function Bw(i,e,t){let n=i.geometry,r=new et,s=n.getAttribute("uv");r.setAttribute("position",new Xe(e.positions,3)),s&&r.setAttribute("uv",s);let o=n.index?Uint32Array.from(n.index.array):Uint32Array.from({length:e.positions.length/3},(c,u)=>u);if(i.matrixWorld.determinant()<0)for(let c=0;c+2<o.length;c+=3)[o[c+1],o[c+2]]=[o[c+2],o[c+1]];r.setIndex(new Xe(o,1));for(let c of n.groups)r.addGroup(c.start,c.count,c.materialIndex);let a=Ec(i).map(c=>(t.has(c)||t.set(c,Uw(c)),t.get(c)??Fw)),l=new mt(r,Array.isArray(i.material)?a:a[0]);return l.frustumCulled=!1,l}function Hw(i,e){let t=i.map(Cw),n=new Ii,r=new Map;i.forEach((p,_)=>n.add(Bw(p,t[_],r)));let s=t.reduce((p,_)=>p+_.positions.length/3,0),o=new Float32Array(s*3),a=new Float32Array(s*3),l=new nn,c=0;for(let p of t)o.set(p.positions,c),c+=p.positions.length;l.setFromArray(o);let u=l.max.y-l.min.y,h=l.getBoundingSphere(new gn);c=0;for(let p of t)a.set(e(p.positions,p.normals,u*1e-5),c),c+=p.normals.length;let d=new et;d.setAttribute("position",new Xe(o,3)),d.setAttribute("normal",new Xe(a,3));let f=new Lr(d);return f.frustumCulled=!1,{occluders:n,points:f,center:h.center,sphere:h.radius*1.01,height:u,count:s,dispose(){n.traverse(p=>{p.geometry?.dispose()});for(let p of r.values())p?.dispose();d.dispose()}}}var _d=(i,e,t)=>new tn(i,e,{type:t,format:rn,depthBuffer:!1,minFilter:Ot,magFilter:Ot,generateMipmaps:!1});function kw(i,e,t){let n=new Dn(-e,e,e,-e,0,e*2);return n.up.set(0,1,0),Math.abs(t.y)>.99&&n.up.set(1,0,0),n.position.copy(i).addScaledVector(t,e),n.lookAt(i),n.updateMatrixWorld(!0),n}function Vw(i){let e=i.getClearColor(new ue),t=i.getClearAlpha(),n=i.autoClear,r=i.getRenderTarget();return()=>{i.setClearColor(e,t),i.autoClear=n,i.setRenderTarget(r)}}function Qg(i,e,t,n){let r=Hw(e,n),s=Vw(i),o=1024,a=Math.max(1,Math.ceil(r.count/o)),l=_d(t.resolution,t.resolution,vn),c=_d(o,a,i.extensions.has("EXT_float_blend")?dn:vn),u=_d(o,a,_n),h=r.sphere*2/t.resolution,d={depthMap:{value:l.texture},bakeViewProjection:{value:new oe},bakeDirection:{value:new A},depthRange:{value:r.sphere*2},radius:{value:t.radius*r.height},normalBias:{value:h*1.5},depthBias:{value:.75/t.resolution},gatherWidth:{value:o},gatherSize:{value:new Ve(o,a)}},f=new qt({vertexShader:Lw,fragmentShader:Dw,uniforms:d,depthTest:!1,depthWrite:!1,blending:No,blendEquation:zi,blendSrc:kr,blendDst:kr});r.points.material=f;let p=new mt(new Or(2,2),new qt({vertexShader:Ow,fragmentShader:Nw,uniforms:{gathered:{value:c.texture}},depthTest:!1,depthWrite:!1}));p.frustumCulled=!1;let _=new Fr,m=bw(t.directions),g=new A;try{i.autoClear=!1,i.setClearColor(0,0),i.setRenderTarget(c),i.clear();for(let M=0;M<t.directions;M++){g.fromArray(m,M*3);let x=kw(r.center,r.sphere,g);i.setClearColor(16777215,1),i.setRenderTarget(l),i.clear(),i.render(r.occluders,x),d.bakeViewProjection.value.multiplyMatrices(x.projectionMatrix,x.matrixWorldInverse),d.bakeDirection.value.copy(g),i.setRenderTarget(c),i.render(r.points,_)}i.setRenderTarget(u),i.render(p,_);let y=new Uint8Array(o*a*4);return i.readRenderTargetPixels(u,0,0,o,a,y),e0(e,Uint8Array.from({length:r.count},(M,x)=>y[x*4]))}finally{s();for(let y of[l,c,u])y.dispose();f.dispose(),p.material.dispose(),p.geometry.dispose(),r.dispose()}}function e0(i,e){let t=0;return i.map(n=>{let r=n.geometry.getAttribute("position").count;return t+=r,e.subarray(t-r,t)})}var t0=i=>i.map(e=>({name:e.name,count:e.geometry.getAttribute("position").count}));async function n0(i,e,t){let n=await fetch(i);if(!n.ok)return null;let r=Yg(new Uint8Array(await n.arrayBuffer()));return jg(r,e,t0(t))?e0(t,r.data):null}async function i0(i,e,t,n){let r=new Uint8Array(n.reduce((a,l)=>a+l.length,0)),s=0;for(let a of n)r.set(a,s),s+=a.length;return(await fetch(i,{method:"PUT",headers:{"content-type":"application/octet-stream"},body:qg({params:e,meshes:t0(t),data:r})})).ok}function r0(i,e,t,n,r=!1){e.forEach((a,l)=>a.geometry.setAttribute("bakedAo",new Xe(t[l],1,!0)));let s=new Set(e.map(a=>a.geometry)),o=new Set;return i.traverse(a=>{let l=a;if(!(!l.isMesh||!s.has(l.geometry)))for(let c of Ec(l))yd(c)&&!o.has(c)&&(Md(c,n,r),o.add(c))}),i.traverse(a=>{let l=a;!l.isMesh||l.geometry.getAttribute("bakedAo")||!Ec(l).some(c=>o.has(c))||l.geometry.setAttribute("bakedAo",new Xe(new Uint8Array(l.geometry.getAttribute("position").count).fill(255),1,!0))}),o}var s0="[deepseek-chan-plugin-for-dsh]",zw="deepseek-chan-plugin-for-dsh:debug",Gw=i=>{try{return i()?.getItem(zw)==="1"}catch{return!1}};function Ww(i=console,e=()=>globalThis.localStorage){let t=new Set,n=Gw(e);return{warnOnce(r,...s){t.has(r)||(t.add(r),i.warn(s0,...s))},debug(...r){n&&i.log(s0,...r)}}}var mr=Ww();var Xw={rangePx:[600,500],headShare:[.85,.8],headDeg:[22,13],headSpring:[38,9.5],eyeLimit:[.45,.3],eyeSpring:[900,55],eyeSpringCalm:[420,42],bone:{gain:[.6,.5,.5],follow:7,neckShare:.4,eyeDeg:[18,14]},responsiveness:1},Sc=(i,e)=>typeof i=="number"&&Number.isFinite(i)&&i>=0?i:e,Xi=(i,e)=>Array.isArray(i)&&i.length===e.length?e.map((t,n)=>Sc(i[n],t)):e;function o0(i={}){let e=i||{},t=e.bone||{},n=Xw,r=Sc(e.responsiveness,n.responsiveness)||n.responsiveness,s=([a,l])=>r===1?[a,l]:[a*r*r,l*r],o=Xi(e.rangePx,n.rangePx);return{rangePx:r===1?o:[o[0]/r,o[1]/r],headShare:Xi(e.headShare,n.headShare),headDeg:Xi(e.headDeg,n.headDeg),headSpring:s(Xi(e.headSpring,n.headSpring)),eyeLimit:Xi(e.eyeLimit,n.eyeLimit),eyeSpring:s(Xi(e.eyeSpring,n.eyeSpring)),eyeSpringCalm:s(Xi(e.eyeSpringCalm,n.eyeSpringCalm)),bone:{gain:Xi(t.gain,n.bone.gain),follow:Sc(t.follow,n.bone.follow)*r,neckShare:Math.min(1,Sc(t.neckShare,n.bone.neckShare)),eyeDeg:Xi(t.eyeDeg,n.bone.eyeDeg)},responsiveness:r}}var gr=Math.PI/180,Tn=(i,e,t)=>Math.max(e,Math.min(t,i)),wc={};for(let[i,e]of Object.entries(hm))if(typeof e=="string")wc[e]=i;else if(Array.isArray(e))for(let t of e)wc[t]=i;else for(let[t,n]of Object.entries(e))wc[n]=`mouthVowel.${t}`;var Ed={};for(let i of pd)i.param&&(Ed[i.param]={key:i.key,on:i.on||1});var p0=i=>i.slice(i.lastIndexOf(".")+1),qw=i=>wc[i]||(Ed[i]?"outfit."+Ed[i].key:null),Yw=(i,e)=>{let t=i.scale??1;switch(i.map||"linear"){case"invert":return(1-e)*t;case"positive":return Math.max(0,e)*t;case"negative":return Math.max(0,-e)*t;default:return e*t}};function m0(i,e,t=1e-4){let n=i.length/3,r=a=>`${Math.round(i[a*3]/t)},${Math.round(i[a*3+1]/t)},${Math.round(i[a*3+2]/t)}`,s=new Map;for(let a=0;a<n;a++){let l=r(a),c=s.get(l)||[0,0,0];c[0]+=e[a*3],c[1]+=e[a*3+1],c[2]+=e[a*3+2],s.set(l,c)}let o=new Float32Array(n*3);for(let a=0;a<n;a++){let[l,c,u]=s.get(r(a)),h=Math.hypot(l,c,u);h>1e-8?(o[a*3]=l/h,o[a*3+1]=c/h,o[a*3+2]=u/h):(o[a*3]=e[a*3],o[a*3+1]=e[a*3+1],o[a*3+2]=e[a*3+2])}return o}function jw(i,e,t){let n=i.getAttribute("position"),r=e.getAttribute("position");if(!n||!r||n.count!==r.count)return!1;for(let s=0;s<n.count;s++)if(Math.abs(n.getX(s)-r.getX(s))>t||Math.abs(n.getY(s)-r.getY(s))>t||Math.abs(n.getZ(s)-r.getZ(s))>t)return!1;return!0}function Zw(i,e){let t=new et;for(let[r,s]of Object.entries(i.attributes))r!=="normal"&&t.setAttribute(r,s);let n=i.getAttribute("normal");n&&t.setAttribute("normal",new Xe(m0(i.getAttribute("position").array,n.array,e),3)),i.index&&t.setIndex(i.index);for(let r of i.groups)t.addGroup(r.start,r.count,r.materialIndex);return i.morphAttributes.position&&(t.morphAttributes.position=i.morphAttributes.position),t.morphTargetsRelative=i.morphTargetsRelative,t}var Kw=.03,a0=100,$w={equal:Pu,notEqual:Iu};function l0(i,e){i.stencilWrite=!0,i.stencilRef=e.ref,i.stencilFunc=e.test?$w[e.test]:ql,i.stencilZPass=e.write?Cu:ps}function Jw(i,e,t){let n=new cn({visible:!1});t.add(()=>n.dispose());let r=[];i.traverse(s=>{let o=s;o.isSkinnedMesh&&Array.isArray(o.material)&&!o.name.endsWith("__outline")&&r.push(o)});for(let s of r){let o=s.material,a=[...new Set(o.map(l=>e(l.name)).filter(l=>l!==0))];for(let l of a){let c=new Bn(s.geometry,o.map(u=>e(u.name)===l?u:n));c.bind(s.skeleton,s.bindMatrix),c.morphTargetInfluences=s.morphTargetInfluences,c.morphTargetDictionary=s.morphTargetDictionary,c.frustumCulled=!1,c.renderOrder=l,c.name=s.name+"__order"+l,c.position.copy(s.position),c.quaternion.copy(s.quaternion),c.scale.copy(s.scale),s.parent.add(c)}a.length&&(s.material=o.map(l=>e(l.name)===0?l:n))}}function Qw(i,e=[]){for(let t of e){let n=1;for(let r of t){let s=Tn(i.get(r)||0,0,n);i.has(r)&&i.set(r,s),n-=s}}}var c0=new A,u0=new A,Tc=new A,h0=new A;function eA(i,e,t,n){Tc.copy(t).sub(e);let r=Tc.lengthSq(),s=r>1e-12?Tn(h0.copy(i).sub(e).dot(Tc)/r,0,1):0,o=h0.copy(e).addScaledVector(Tc,s),a=i.clone().sub(o),l=a.length();return l>=n?!1:(l<1e-9?a.set(0,1,0):a.divideScalar(l),i.copy(o).addScaledVector(a,n),!0)}var tA=(i,e,t)=>{e.copy(i.fromOffset||new A).applyMatrix4(i.from.matrixWorld),i.to?t.copy(i.toOffset||new A).applyMatrix4(i.to.matrixWorld):t.copy(e)};function nA(i){let e=[],t=new A,n=new A,r=new A,s=new A,o=new me,a=new me,l=new A,c=new A;for(let d of i)for(let f of d.roots)f.updateWorldMatrix(!0,!0),f.traverse(p=>{let _=p.children.find(M=>M.isBone&&M.position.lengthSq()>=1e-12);if(!_)return;let m=_.getWorldPosition(new A),g=d.radius??0,y=(d.colliders||[]).map(M=>({collider:M,distance:M.radius+g}));e.push({node:p,restLocal:p.quaternion.clone(),axis:_.position.clone().normalize(),length:m.distanceTo(p.getWorldPosition(t)),prev:m.clone(),tail:m,stiffness:d.stiffness??1,drag:d.drag??.4,gravity:d.gravity??0,colliders:y})});let u=new Set(e.map(d=>d.node)),h=e.flatMap(d=>d.node.children.filter(f=>!u.has(f)));return{count:e.length,step(d){for(let f of e){let{node:p}=f,_=p.parent.matrixWorld;p.quaternion.copy(f.restLocal),_.decompose(l,a,c),t.copy(p.position).applyMatrix4(_),n.copy(f.axis).applyQuaternion(o.copy(a).multiply(f.restLocal)),s.copy(f.tail).sub(f.prev).multiplyScalar(1-f.drag),r.copy(f.tail).add(s).addScaledVector(n,f.stiffness*d*f.length*10),r.y-=f.gravity*d*f.length*10,r.sub(t).normalize().multiplyScalar(f.length).add(t);for(let m=0;m<4;m++){let g=!1;for(let{collider:y,distance:M}of f.colliders)tA(y,c0,u0),g=eA(r,c0,u0,M)||g;if(!g)break;r.sub(t).normalize().multiplyScalar(f.length).add(t)}f.prev.copy(f.tail),f.tail.copy(r),o.setFromUnitVectors(n,r.clone().sub(t).normalize()),p.quaternion.copy(a.clone().invert().multiply(o).multiply(a).multiply(f.restLocal)),p.matrix.compose(p.position,p.quaternion,p.scale),p.matrixWorld.multiplyMatrices(_,p.matrix)}for(let f of h)f.updateMatrixWorld(!0)}}}var d0=i=>{let e=[Math.abs(i.x),Math.abs(i.y),Math.abs(i.z)],t=e.indexOf(Math.max(...e));return new A().setComponent(t,Math.sign(i.getComponent(t))||1)};function iA(i){let e=i.head.clone().sub(i.hips),t=i.leftUpperArm.clone().sub(i.rightUpperArm);if(e.lengthSq()<1e-12)return null;let n=d0(e);if(t.addScaledVector(n,-t.dot(n)),t.lengthSq()<1e-12)return null;let r=d0(t),s=new A().crossVectors(r,n),o=!1;if(i.leftEye&&i.rightEye){let a=i.leftEye.clone().add(i.rightEye).multiplyScalar(.5).sub(i.head);a.addScaledVector(n,-a.dot(n));let l=a.dot(s);l<0&&-l>Math.abs(a.dot(r))&&(o=!0,s.negate())}return{matrix:new oe().makeBasis(r,n,s).transpose(),mirror:o}}function rA(i,e,t={}){let n=t.auto!==!1&&e?iA(e):null,r=n?n.matrix.clone():new oe,s=n?.mirror??!1,o=new oe().makeScale(-1,1,1);t.mirror!==void 0&&t.mirror!==s&&(r.premultiply(o),s=t.mirror),t.yaw&&r.premultiply(new oe().makeRotationY(t.yaw*gr));let a=r.determinant()<0?r.clone().multiply(o):r;return i.quaternion.setFromRotationMatrix(a),i.scale.set(r.determinant()<0?-1:1,1,1),i.updateMatrixWorld(!0),{auto:!!n,mirror:s,matrix:r}}var sA=i=>i.position.lengthSq()===0&&i.quaternion.x===0&&i.quaternion.y===0&&i.quaternion.z===0&&i.quaternion.w===1&&i.scale.x===1&&i.scale.y===1&&i.scale.z===1,bc=i=>i.isBone&&!!i.parent&&i.parent.isBone&&i.parent.name===i.name&&sA(i),oA=(i,e)=>i.bones.length===e.bones.length&&i.bones.every((t,n)=>t===e.bones[n]&&i.boneInverses[n].equals(e.boneInverses[n]));function aA(i){let e=a=>{let l=a;for(;bc(l);)l=l.parent;return l},t=[];i.traverse(a=>{a.isSkinnedMesh&&t.push(a)});for(let a of t)a.skeleton.bones=a.skeleton.bones.map(e);let n=[];i.traverse(a=>{bc(a)&&!bc(a.parent)&&n.push(a)});let r=0;for(let a of n){let l=!0;a.traverse(c=>{c!==a&&!bc(c)&&(l=!1)}),l&&(a.traverse(()=>{r++}),a.removeFromParent())}let s=[],o=0;for(let a of t){let l=s.find(c=>oA(c,a.skeleton));l?(a.bind(l,a.bindMatrix),o++):s.push(a.skeleton)}return{removed:r,merged:o}}var lA=new Set(["browRaiseLeft","browRaiseRight","browInnerRaise"]),cA=(i,e,t,n)=>n<=0?e:t<=0?i:i+(e-i)*(1-Math.exp(-t/n));function uA(i,e,t,n,r={},s={}){let o=new Map;for(let a of i){let l=lA.has(a),c=(e.get(a)||0)*(l?r.browScale??1:1),u=(l?r.browSmooth:void 0)??s[a]??0,h=cA(t.get(a)??c,c,n,u);t.set(a,h),o.set(a,h)}return o}var f0=[".vrm",".fbx",".glb",".gltf"];function hA(i){let e=/\.([a-z0-9]+)$/i.exec(String(i??"").trim()),t=e?"."+e[1].toLowerCase():"";if(!f0.includes(t))throw new Error(`지원하는 모델 형식은 ${f0.join("·")}입니다 (avatar.json model: ${i??"없음"})`);return t===".glb"||t===".gltf"?"gltf":t.slice(1)}var dA=(i,e)=>i.shading==="toon"||i.shading==="pbr"?i.shading:e==="gltf"?"pbr":"toon";function fA(i){let e={...i.baseMorphs};for(let t of Object.values(i.outfit||{}))for(let n of t)n.invert&&(e[n.morph]=(e[n.morph]||0)+1);return e}function pA(i,e={}){for(let t of i)if(!(!t.morphTargetInfluences||!t.morphTargetDictionary)){t.morphTargetInfluences.fill(0);for(let[n,r]of Object.entries(t.morphTargetDictionary))t.morphTargetInfluences[r]=Tn(e[p0(n)]??0,0,1)}}async function mA(i,e,t,n,r,s,o,a,l){let c=Jg(e);if(!c.length)return mr.warnOnce("ao-no-receiver","이 모델 재질은 구운 AO를 받지 않습니다 (VRM MToon 등)"),null;let u=fA(t),h=Kg(s.params,{hide:t.hide??null,morphs:u,materials:t.materials??null}),d=`${n}?file=${encodeURIComponent(r)}&params=${h}`;await a;let f=performance.now(),p=await n0(d,h,c).catch(()=>null),_=p??l(()=>(pA(c,u),e.updateMatrixWorld(!0),Qg(i,c,s.params,m0)));p||i0(d,h,c,_).then(M=>{M||mr.debug("AO 캐시 경로가 없어 저장하지 않았습니다",d)},M=>mr.debug("AO 캐시를 저장하지 못했습니다:",M));let m=_.reduce((M,x)=>M+x.length,0);performance.measure("dsc-ao-bake",{start:f,detail:{cached:!!p,vertices:m,meshes:c.length}}),mr.debug("AO",p?"캐시 사용":"굽기",`${Math.round(performance.now()-f)}ms`,m,"정점");let g=im(o,s.shade),y=r0(e,c,_,g,s.debug);return{uniforms:g,materials:y}}var gA=i=>Object.values(i.materials??{}).some(e=>!!e?.ao);function _A(i){let e=[];return i.traverse(t=>{e.push([t,t.position.clone(),t.quaternion.clone(),t.scale.clone()])}),t=>{let n=e.map(([s])=>[s.position.clone(),s.quaternion.clone(),s.scale.clone()]),r=[];i.traverse(s=>{let o=s.morphTargetInfluences;o&&r.push([o,o.slice()])});for(let[s,o,a,l]of e)s.position.copy(o),s.quaternion.copy(a),s.scale.copy(l),s.matrixAutoUpdate||s.updateMatrix();i.updateMatrixWorld(!0);try{return t()}finally{e.forEach(([s],o)=>{s.position.copy(n[o][0]),s.quaternion.copy(n[o][1]),s.scale.copy(n[o][2]),s.matrixAutoUpdate||s.updateMatrix()});for(let[s,o]of r)for(let a=0;a<o.length;a++)s[a]=o[a];i.updateMatrixWorld(!0)}}}function vA(i){let e=null,t=!1,n=null,r=!1,s=!1,o=a=>{if(!(!e||t===a)){for(let l of e.materials)a?Md(l,e.uniforms):$g(l);t=a}};return{get uniforms(){return t?e?.uniforms??null:null},sync(a){return r=a,a||(s=!1),e?(o(a),n):(!a||n||s||(n=i().then(l=>{e=l,t=!!l,s=!l,l&&!r&&o(!1)},()=>{s=!0}).finally(()=>{n=null})),n)}}}async function g0({base:i,life:e,canvas:t,W:n,H:r,pet:s,outlineNormals:o,tuning:a}){let l=await(await fetch(i+"avatar.json")).json();l.outline&&o&&(l.outline.normals=o);let c=new Hi,u=new tc,h=hA(l.model),d=dA(l,h),f=h==="vrm"?await Ag(i+l.model,l,e):null,p=h==="gltf"?await dd(i+l.model,e):null,_=f?f.profile:l,m=f?f.runtime:null,g=f?f.model:p?p.model:await u.loadAsync(i+_.model);if(e.stopped)return null;h==="fbx"&&aA(g),d==="pbr"&&f?.mtoon&&mr.warnOnce("vrm-mtoon-pbr","MToon 재질을 쓰는 VRM은 실사 셰이딩 대신 툰으로 그립니다 (avatar.json shading)");let y=d==="pbr"&&!f?.mtoon,M=F=>m?.nodes.get(F),x=new Tt;x.add(g),g.updateMatrixWorld(!0);let w=F=>{let V=_.bones[F],G=M(F)??(V?g.getObjectByName(V):null);return G?G.getWorldPosition(new A):null},[b,v,T,O]=["hips","head","leftUpperArm","rightUpperArm"].map(w);rA(x,b&&v&&T&&O?{hips:b,head:v,leftUpperArm:T,rightUpperArm:O,leftEye:w("leftEye"),rightEye:w("rightEye")}:null,_.orientation);let C=_.render?.antialias!=="msaa",I=_.render?.scale??1,U=new Kl({canvas:t,alpha:!0,antialias:!C,premultipliedAlpha:!0,stencil:!0});U.setClearColor(0,0),U.outputColorSpace=ut;let Y=new Ii;Y.add(x);let L=new ki(16777215,_.light?.intensity??(y?ra.intensity:2.2));L.position.set(..._.light?.direction??[.6,1.2,1.6]),Y.add(L,new Hr(16777215,_.light?.ambient??(y?ra.ambient:.9))),y&&e.add(Ng(U,Y,_.pbr)),Y.matrixWorldAutoUpdate=!1,L.updateMatrixWorld(),e.add(()=>{x.traverse(F=>{let V=F;V.geometry&&V.geometry.dispose();for(let G of[].concat(V.material||[]))G.dispose()}),U.dispose()});let X=C?Gg(U,e):null,j=X&&_.rim?{uniforms:{rimDepth:X.depth.texture,rimResolution:X.depth.resolution,rimDepthThreshold:{value:0}},offset:(_.rim.screenWidth??2.5)/r}:void 0,z=lm(_.rim,j),re=new Map,W=[],J=F=>{let V=()=>{};return W.push(new Promise(G=>{V=G})),c.load(F,()=>V(),void 0,()=>V())},ne=(F,V=!1)=>{if(!F)return;let G=re.get(F);return G||(G=J(i+F),G.colorSpace=V?si:ut,G.wrapS=G.wrapT=In,re.set(F,G),e.add(()=>G.dispose())),G},Ae=new Set(_.hide||[]),Ue=y?void 0:_.faceSdf,$=Zp(Ue?ne(Ue.map,!0):null,Ue?.softness),_e=!1,we=(F,V)=>{let G=Ue?.material===F.name?$:void 0;if(!p)return V?fh(cm(F.name,V,ne,z,G)):null;_e||=!!F.aoMap;let ce=um(F,V,ne,z,G),Ie=fh(ce);return ce.uvTransforms&&Jp(Ie.uniforms),Ie.visible=F.visible,Ie},Fe=(F,V)=>{_e||=!!F.aoMap;let G=Cg(F,_.pbr?.unlit)?Rg(F):F;return Pg(G,V,ne),Ks(G)&&Ig(G),G};if(x.traverse(F=>{Ae.has(F.name)&&(F.visible=!1);let V=F;if(!V.isMesh)return;V.frustumCulled=!1;let G=ce=>{let Ie=_.materials?.[ce.name],Oe=y?Fe(ce,Ie):we(ce,Ie);return Oe?(Ie&&(Oe.visible=!Ie.hidden,Ie.stencil&&l0(Oe,Ie.stencil)),Oe!==ce&&ce.dispose(),Oe):ce};V.material=Array.isArray(V.material)?V.material.map(G):G(V.material)}),_.outline){let F=new nn().setFromObject(x).getSize(new A).y,V=new Set(_.outline.skip||[]),G=(ye,Pe=!1)=>{let se=nm({width:_.outline.width*F,outlineColor:_.outline.color||"#2b2430",lightingMix:.3,map:sc(ye),alphaTest:ye.alphaTest,widthAttribute:Pe});se.visible=ye.visible&&!V.has(ye.name);let nt=_.materials?.[ye.name]?.stencil;return nt?.test&&l0(se,{ref:nt.ref,test:nt.test}),e.add(()=>se.dispose()),se},ce=[],Ie=new Map;x.traverse(ye=>{let Pe=ye;Pe.isSkinnedMesh&&(Pe.name.endsWith("_Outline")?Ie.set(Pe.name,Pe):Pe.visible&&!Ae.has(Pe.parent?.name||"")&&ce.push(Pe))});let Oe=new Set;for(let ye of ce){let Pe=_.outline.normals==="model"?Ie.get(ye.name+"_Outline"):void 0,se=Pe&&jw(Pe.geometry,ye.geometry,F*1e-4)?Pe:void 0;if(se){let Pt=[].concat(ye.material),wn=se.geometry.getAttribute("color");wn&&se.geometry.setAttribute("outlineWidth",new Xe(Float32Array.from({length:wn.count},(Jt,at)=>wn.getX(at)),1));let Yt=[].concat(se.material).map((Jt,at)=>G(Pt[Math.min(at,Pt.length-1)],!!wn));se.material=Array.isArray(se.material)?Yt:Yt[0],se.visible=!0,se.frustumCulled=!1,se.renderOrder=a0;for(let Jt=se.parent;Jt&&Jt!==x;Jt=Jt.parent)Jt.visible=!0;Oe.add(se);continue}let nt=[].concat(ye.material),Ye=Zw(ye.geometry,F*1e-5);e.add(()=>Ye.dispose());let St=new Bn(Ye,Array.isArray(ye.material)?nt.map(Pt=>G(Pt)):G(nt[0]));St.bind(ye.skeleton,ye.bindMatrix),St.morphTargetInfluences=ye.morphTargetInfluences,St.morphTargetDictionary=ye.morphTargetDictionary,St.frustumCulled=!1,St.renderOrder=a0,St.name=ye.name+"__outline",ye.parent.add(St),St.position.copy(ye.position),St.quaternion.copy(ye.quaternion),St.scale.copy(ye.scale)}for(let ye of Ie.values())Oe.has(ye)||(ye.visible=!1)}Jw(x,F=>_.materials?.[F]?.order??0,e);let Se=_A(x),qe=vd(_.ao,a?.()),yt=gA(_)||_e,Be=vA(()=>mA(U,x,_,new URL("../avatar-cache/ao",new URL(i,location.href)).href,l.model,qe,xd(_.ao,a?.()),Promise.all(W),Se).catch(F=>(mr.warnOnce("ao-bake","AO를 굽지 못했습니다:",F),null)));if(await Be.sync(qe.enabled&&!yt),e.stopped)return null;let Je=new Map;x.traverse(F=>{Je.has(F.name)||Je.set(F.name,F)});let ot=new Map;for(let[F,V]of Je)ot.set(F,V.quaternion.clone());let He=F=>{let V=_.bones[F];return M(F)??(V&&Je.get(V)||null)};x.updateMatrixWorld(!0);let ht=F=>F?F.getWorldPosition(new A):null,Lt=(F,V,G,ce)=>{F.quaternion.copy(G).multiply(ce.clone().invert().multiply(V).multiply(ce))},zt=ht(He("hips"))||new A;for(let F of["left","right"]){let V=He(`${F}UpperArm`),G=He(`${F}LowerArm`);if(!V||!G||!_.armDown)continue;let ce=ht(G).sub(ht(V)).normalize(),Ie=Math.sign(ht(V).x-zt.x)||1,Oe=_.armDown*gr,ye=new A(Ie*Math.cos(Oe),-Math.sin(Oe),.08).normalize(),Pe=new me().setFromUnitVectors(ce,ye);Lt(V,Pe,V.quaternion.clone(),V.getWorldQuaternion(new me)),x.updateMatrixWorld(!0)}let Mt=["hips","spine","chest","neck","head","leftEye","rightEye"],sn=new Map;for(let F of Mt){let V=He(F);V&&sn.set(V,V.quaternion.clone())}let Dt=new nn().setFromObject(x),wt=Dt.max.y,fn=Dt.min.y,Et=wt-fn,N=Wg(_.bonePoses,F=>Je.get(F),Et,F=>mr.warnOnce(`bone-pose:${F}`,F)),Rt=(()=>{let F=ht(He("leftUpperArm")),V=ht(He("rightUpperArm"));return F&&V?F.distanceTo(V):Et*.2})(),dt=Rt*2.1,gt=(ht(He("head"))||zt).x,ve=wt-Et*.47,Ct=Math.min(n*.98/dt,r*.95/(wt-ve)),De=Math.min(n*.98/dt,r*.95/Et),ze=s?De:Ct,R=new Dn(-n/2/ze,n/2/ze,r/2/ze,-r/2/ze,-100*Et,100*Et);j&&(j.uniforms.rimDepthThreshold.value=Kw*Et/(R.far-R.near));let E=wt+r*.05/ze;R.position.set(gt,E-r/2/ze,10*Et),R.lookAt(gt,E-r/2/ze,0),R.updateMatrixWorld(!0);let B=new A,ie=F=>(B.copy(F).project(R),{x:(B.x+1)/2*n,y:(1-B.y)/2*r}),te=ht(He("head"))||new A(gt,wt-Et*.1,0),de=150,ge={W:n,H:r,visW:dt*ze,noseX:ie(te).x,chibiHeadDrop:0,walkBodyWidth:dt*ze,waistPet:r*.05+(wt-ve)*De,waistWin:r*.05+(wt-ve)*Ct,waistPct:(r*.05+(wt-ve)*De)/r*100,petHeadRatio:Ct/De,headGain:Ct/ze,petKMin:.45,petKMax:Math.max(1.2,((typeof screen<"u"&&screen.availHeight?screen.availHeight:1080)-de)/r),petBubble:de,petBustOffset:0},K=new Map;x.traverse(F=>{let V=F;if(!(!V.isMesh||!V.morphTargetDictionary))for(let[G,ce]of Object.entries(V.morphTargetDictionary)){let Ie=p0(G);(K.get(Ie)||K.set(Ie,[]).get(Ie)).push([V,ce])}});let ee=new Set;for(let F of _.springs||[])for(let V of F.roots){let G=Je.get(V);G&&ee.add(G)}let fe=new Set;for(let F of ee)F.traverse(V=>{fe.add(V)});let P=async F=>{if(!/\.(glb|gltf)$/i.test(F)){let G=await u.loadAsync(i+F);return{source:G,clip:G.animations[0]}}let V=await dd(i+F,e);return{source:V.model,clip:V.animations[0]}},Q=async F=>{let V=p?.animations.find(Pe=>Pe.name===F),{source:G,clip:ce}=V?{source:null,clip:V.clone()}:await P(F);if(!ce)return null;let Ie=new Map;if(G)G.traverse(Pe=>{Ie.has(Pe.name)||Ie.set(Pe.name,Pe.quaternion.clone())});else for(let[Pe,se]of ot)Ie.set(Pe,se);let Oe=new me,ye=new me;return ce.tracks=ce.tracks.filter(Pe=>{let se=Pe.name.lastIndexOf("."),nt=Pe.name.slice(0,se),Ye=Je.get(nt);if(Pe.name.slice(se)!==".quaternion"||!Ye||fe.has(Ye))return!1;ye.copy(ot.get(nt)).multiply(Ie.get(nt)?.clone().invert()||new me);for(let St=0;St<Pe.values.length;St+=4)Oe.fromArray(Pe.values,St).premultiply(ye).normalize().toArray(Pe.values,St);return!0}),ce},Z=new Lo(x),pe=_.animations?.idle?await Q(_.animations.idle).catch(()=>null):null,ae=pe?Z.clipAction(pe):null;ae?.play();let he=new Map;for(let[F,V]of Object.entries(_.animations?.gestures||{})){let G=await Q(V).catch(()=>null);if(!G)continue;let ce=Z.clipAction(G);ce.setLoop(Wl,1),ce.clampWhenFinished=!0,he.set(F,ce)}if(e.stopped)return null;let Re=null,Qe=F=>{!Re||F<Re.until||(Re.action.fadeOut(.3),ae&&(ae.enabled=!0,ae.fadeIn(.3).play()),Re=null)},le=_.colliders?.scale??1,$e=[["head","head",null,.05,(()=>{let F=He("head");return F?new A(0,Et*.045,0).applyQuaternion(F.getWorldQuaternion(new me).invert()):void 0})()],["body","chest",null,.08],["body","chest","neck",.05],["body","spine","chest",.065],["body","hips","spine",.06],["legs","leftUpperLeg","rightUpperLeg",.035],["legs","leftUpperLeg","leftLowerLeg",.045],["legs","rightUpperLeg","rightLowerLeg",.045],["legs","leftLowerLeg","leftFoot",.03],["legs","rightLowerLeg","rightFoot",.03],["arms","leftUpperArm","leftLowerArm",.03],["arms","rightUpperArm","rightLowerArm",.03],["arms","leftLowerArm","leftHand",.026],["arms","rightLowerArm","rightHand",.026]],Te=(F=[])=>$e.filter(([V,G])=>F.includes(V)&&He(G)).map(([,V,G,ce,Ie])=>({from:He(V),to:G?He(G):null,fromOffset:Ie,radius:ce*Et*le}));x.updateMatrixWorld(!0),m?.rested();let ft=nA((_.springs||[]).map(F=>({...F,radius:(F.radius??.012)*Et,colliders:Te(F.colliders),roots:F.roots.map(V=>Je.get(V)).filter(V=>!!V)}))),It=He("head"),bn=It?It.getWorldQuaternion(new me).invert():new me,li={forward:new A(0,0,1).applyQuaternion(bn),right:new A(1,0,0).applyQuaternion(bn),up:new A(0,1,0).applyQuaternion(bn)},Xn=new me,Kr=new A,_r=new A,vr=new A,on=new A,qi=()=>{It&&(It.getWorldQuaternion(Xn),Kr.copy(li.forward).applyQuaternion(Xn),_r.copy(li.right).applyQuaternion(Xn),vr.copy(li.up).applyQuaternion(Xn),on.copy(L.position).normalize(),on.addScaledVector(vr,-on.dot(vr)),!(on.lengthSq()<1e-6)&&(on.normalize(),$.faceSdfThreshold.value=Math.acos(Tn(Kr.dot(on),-1,1))/Math.PI,$.faceSdfUseR.value=_r.dot(on)>0!=!!_.faceSdf.swap?1:0))},yn=new Map,Yi=new Map,Nn=null,ji=performance.now(),Zi=qw,qn=new bt,$r=new me,Jr=new me,Js=new me,Qr=o0(_.gaze),{gain:Qs,neckShare:Ki,eyeDeg:eo}=Qr.bone,S=new Map(["neck","head","chest","spine"].map(F=>[F,new me])),D=(F,V)=>{F.parent.getWorldQuaternion(Jr),Js.copy(Jr).multiply(F.quaternion).premultiply(V),F.quaternion.copy(Jr.invert().multiply(Js))},q=F=>{let V=Ye=>yn.get(Ye)||0,G=Tn(V("headTurn"),-30,30)*Qs[0],ce=Tn(V("headTilt"),-30,30)*Qs[1],Ie=Tn(V("headRoll"),-30,30)*Qs[2],Oe=Qr.bone.follow>0?Math.min(1,F*Qr.bone.follow):1,ye=(Ye,St,Pt,wn)=>{let Yt=He(Ye),Jt=S.get(Ye);!Yt||!Yt.parent||(Jt.slerp($r.setFromEuler(qn.set(St*gr,Pt*gr,wn*gr,"YXZ")),Oe),D(Yt,Jt))},Pe=(Ye,St,Pt,wn)=>{let Yt=He(Ye);!Yt||!Yt.parent||!St&&!Pt&&!wn||D(Yt,$r.setFromEuler(qn.set(St*gr,Pt*gr,wn*gr,"YXZ")))};ye("neck",-ce*Ki,G*Ki,Ie*Ki),ye("head",-ce*(1-Ki),G*(1-Ki),Ie*(1-Ki)),ye("chest",V("bodyLean")*.25-V("breath")*1.2,Tn(V("bodyShiftX"),-30,30)*.2,0),ye("spine",0,0,Tn(V("bodyShiftZ"),-30,30)*.2);let se=Tn(V("eyeLookX"),-1,1)*eo[0],nt=Tn(V("eyeLookY"),-1,1)*eo[1];Pe("leftEye",-nt,se,0),Pe("rightEye",-nt,se,0)},H=m?.expressionNames??new Set,k=new Map,Ee=F=>{let V=new Map(Object.entries(_.baseMorphs||{})),G={morphs:V,expressions:new Map,vrmNames:H},ce=(Oe,ye)=>V.set(Oe,(V.get(Oe)||0)+ye),Ie=uA(Object.keys(_.channels||{}),yn,k,F,a?.()??{},_.channelSmooth);for(let[Oe,ye]of Object.entries(_.channels||{})){let Pe=Ie.get(Oe)||0;for(let se of ye){let nt=Yw(se,Pe);nt&&bg(G,se,nt)}}for(let[Oe,ye]of Yi)for(let[Pe,se]of Object.entries(_.expressions?.[Oe]||{}))wg(G,Pe,se*ye);for(let[Oe,ye]of Object.entries(_.outfit||{})){let Pe=yn.get("outfit."+Oe)||0,se=pd.find(Ye=>Ye.key===Oe),nt=Tn(Pe/(se&&se.on||1),0,1);for(let Ye of ye)ce(Ye.morph,Ye.invert?1-nt:nt)}Qw(V,_.exclusiveMorphs),N.apply(V);for(let Oe of K.values())for(let[ye,Pe]of Oe)ye.morphTargetInfluences[Pe]=0;for(let[Oe,ye]of V)for(let[Pe,se]of K.get(Oe)||[])Pe.morphTargetInfluences[se]=Tn(ye,0,1);m?.setExpressions(G.expressions)},Ce=[{part:"waist",from:"neck",to:"hips",radius:Rt*.55},{part:"arm",from:"leftUpperArm",to:"leftLowerArm",radius:Rt*.16},{part:"arm",from:"leftLowerArm",to:"leftHand",radius:Rt*.14},{part:"arm",from:"rightUpperArm",to:"rightLowerArm",radius:Rt*.16},{part:"arm",from:"rightLowerArm",to:"rightHand",radius:Rt*.14},{part:"leg",from:"leftUpperLeg",to:"leftLowerLeg",radius:Rt*.2},{part:"leg",from:"leftLowerLeg",to:"leftFoot",radius:Rt*.16},{part:"leg",from:"rightUpperLeg",to:"rightLowerLeg",radius:Rt*.2},{part:"leg",from:"rightLowerLeg",to:"rightFoot",radius:Rt*.16}],xe=["head",...Ce.map(F=>F.part)],be=(F,V,G,ce)=>{let Ie=ce.x-G.x,Oe=ce.y-G.y,ye=Ie*Ie+Oe*Oe,Pe=ye>1e-6?Tn(((F-G.x)*Ie+(V-G.y)*Oe)/ye,0,1):0,se=G.x+Ie*Pe-F,nt=G.y+Oe*Pe-V;return se*se+nt*nt},Ne=Math.max(Et*.07,(wt-te.y)*.75);return{metrics:ge,behaviors:_.behaviors||[],gaze:Qr,adultAllowed:_.adultAllowed!==!1,supports:F=>(_.features||[]).includes(F),set(F,V,G=1){let ce=Zi(F);if(!ce)return;let Ie=yn.get(ce)||0;yn.set(ce,G===1?V:Ie+(V-Ie)*G)},add(F,V,G=1){let ce=Zi(F);ce&&yn.set(ce,(yn.get(ce)||0)+V*G)},multiply(F,V,G=1){let ce=Zi(F);ce&&yn.set(ce,(yn.get(ce)||0)*(1+(V-1)*G))},expressionNames:()=>Object.keys(_.expressions||{}),expression(F,V){Yi.set(F,V)},earHide(){},bodyShape(){},onFrame(F){Nn=F},pick(F,V){x.updateMatrixWorld(!0);let G=ie(ht(He("head"))||te),ce=ie(new A(G.x,wt,0)),Ie=Ne*(ge.visW/dt),Oe=(G.y+ce.y)/2;if((F-G.x)**2+(V-Oe)**2<=Ie*Ie)return 0;for(let ye=0;ye<Ce.length;ye++){let Pe=Ce[ye],se=ht(He(Pe.from)),nt=ht(He(Pe.to));if(!se||!nt)continue;let Ye=Pe.radius*(ge.visW/dt);if(be(F,V,ie(se),ie(nt))<=Ye*Ye)return ye+1}return-1},touchShape(F,V,G){let ce=ie(new A(gt,wt,0)).y,Ie=ie(new A(gt,fn,0)).y;return{part:xe[G]??null,ratioY:(V-ce)/(Ie-ce),inChest:!1}},chibiRegion(F){return F<ie(ht(He("neck"))||te).y?"head":"body"},setResolution(F){let V=(devicePixelRatio||1)*(X?1:1.5)*Math.max(1,F)*I;U.getPixelRatio()===V&&t.width===Math.floor(n*V)&&t.height===Math.floor(r*V)||(U.setPixelRatio(V),U.setSize(n,r,!1))},resetClock(){ji=performance.now()},tick(F){let V=Tn((F-ji)/1e3,0,.05);ji=F,yn.clear(),Yi.clear(),Nn?.();for(let[G,ce]of sn)G.quaternion.copy(ce);N.reset(),Qe(performance.now()),Z.update(V);for(let[G,ce]of sn)ce.copy(G.quaternion);N.record(),q(V),Ee(V),x.updateMatrixWorld(!0),V>0&&ft.step(V),m&&(m.update(V),x.updateMatrixWorld(!0)),Ue&&qi(),Be.sync(vd(_.ao,a?.()).enabled&&!yt),Be.uniforms&&(Be.uniforms.aoStrength.value=xd(_.ao,a?.())),X?X.render(Y,R,F):U.render(Y,R)},gesture(F,V){let G=he.get(F);G&&(Re&&Re.action!==G&&Re.action.fadeOut(.2),ae?.fadeOut(.25),G.reset().setEffectiveWeight(1).fadeIn(.25).play(),Re={action:G,until:performance.now()+Math.max(G.getClip().duration*1e3,V)})},systemTicker(){}}}window.DscRigThree={createThreeRig:g0};})();
