/*
 * Piwik - Web Analytics
 *
 * JavaScript tracking client
 *
 * @link http://piwik.org
 * @source http://dev.piwik.org/trac/browser/trunk/js/piwik.js
 * @license http://www.opensource.org/licenses/bsd-license.php Simplified BSD
 */
if(!this.JSON2){this.JSON2={}}(function(){function d(f){return f<10?"0"+f:f}function l(n,m){var f=Object.prototype.toString.apply(n);if(f==="[object Date]"){return isFinite(n.valueOf())?n.getUTCFullYear()+"-"+d(n.getUTCMonth()+1)+"-"+d(n.getUTCDate())+"T"+d(n.getUTCHours())+":"+d(n.getUTCMinutes())+":"+d(n.getUTCSeconds())+"Z":null}if(f==="[object String]"||f==="[object Number]"||f==="[object Boolean]"){return n.valueOf()}if(f!=="[object Array]"&&typeof n.toJSON==="function"){return n.toJSON(m)}return n}var c=new RegExp("[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]","g"),e='\\\\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]',i=new RegExp("["+e,"g"),j,b,k={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},h;
function a(f){i.lastIndex=0;return i.test(f)?'"'+f.replace(i,function(m){var n=k[m];return typeof n==="string"?n:"\\u"+("0000"+m.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+f+'"'}function g(s,p){var n,m,t,f,q=j,o,r=p[s];if(r&&typeof r==="object"){r=l(r,s)}if(typeof h==="function"){r=h.call(p,s,r)}switch(typeof r){case"string":return a(r);case"number":return isFinite(r)?String(r):"null";case"boolean":case"null":return String(r);case"object":if(!r){return"null"}j+=b;o=[];if(Object.prototype.toString.apply(r)==="[object Array]"){f=r.length;for(n=0;n<f;n+=1){o[n]=g(n,r)||"null"}t=o.length===0?"[]":j?"[\n"+j+o.join(",\n"+j)+"\n"+q+"]":"["+o.join(",")+"]";j=q;return t}if(h&&typeof h==="object"){f=h.length;for(n=0;n<f;n+=1){if(typeof h[n]==="string"){m=h[n];t=g(m,r);if(t){o.push(a(m)+(j?": ":":")+t)}}}}else{for(m in r){if(Object.prototype.hasOwnProperty.call(r,m)){t=g(m,r);if(t){o.push(a(m)+(j?": ":":")+t)}}}}t=o.length===0?"{}":j?"{\n"+j+o.join(",\n"+j)+"\n"+q+"}":"{"+o.join(",")+"}";j=q;
return t}}if(typeof JSON2.stringify!=="function"){JSON2.stringify=function(o,m,n){var f;j="";b="";if(typeof n==="number"){for(f=0;f<n;f+=1){b+=" "}}else{if(typeof n==="string"){b=n}}h=m;if(m&&typeof m!=="function"&&(typeof m!=="object"||typeof m.length!=="number")){throw new Error("JSON.stringify")}return g("",{"":o})}}if(typeof JSON2.parse!=="function"){JSON2.parse=function(o,f){var n;function m(s,r){var q,p,t=s[r];if(t&&typeof t==="object"){for(q in t){if(Object.prototype.hasOwnProperty.call(t,q)){p=m(t,q);if(p!==undefined){t[q]=p}else{delete t[q]}}}}return f.call(s,r,t)}o=String(o);c.lastIndex=0;if(c.test(o)){o=o.replace(c,function(p){return"\\u"+("0000"+p.charCodeAt(0).toString(16)).slice(-4)})}if((new RegExp("^[\\],:{}\\s]*$")).test(o.replace(new RegExp('\\\\(?:["\\\\/bfnrt]|u[0-9a-fA-F]{4})',"g"),"@").replace(new RegExp('"[^"\\\\\n\r]*"|true|false|null|-?\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d+)?',"g"),"]").replace(new RegExp("(?:^|:|,)(?:\\s*\\[)+","g"),""))){n=eval("("+o+")");
return typeof f==="function"?m({"":n},""):n}throw new SyntaxError("JSON.parse")}}}());var _paq=_paq||[],Piwik=Piwik||(function(){var m,w={},d=document,j=navigator,v=screen,I=window,h=false,C=[],e=I.encodeURIComponent,J=I.decodeURIComponent,E=unescape,H,D;function b(i){return typeof i!=="undefined"}function a(i){return typeof i==="function"}function n(i){return typeof i==="object"}function q(i){return typeof i==="string"||i instanceof String}function z(){var K,M,L;for(K=0;K<arguments.length;K+=1){L=arguments[K];M=L.shift();if(q(M)){H[M].apply(H,L)}else{M.apply(H,L)}}}function t(M,L,K,i){if(M.addEventListener){M.addEventListener(L,K,i);return true}if(M.attachEvent){return M.attachEvent("on"+L,K)}M["on"+L]=K}function g(L,O){var K="",N,M;for(N in w){if(Object.prototype.hasOwnProperty.call(w,N)){M=w[N][L];if(a(M)){K+=M(O)}}}return K}function B(){var i;g("unload");if(m){do{i=new Date()}while(i.getTime()<m)}}function k(){var K;if(!h){h=true;g("load");for(K=0;K<C.length;K++){C[K]()}}return true
}function x(){var K;if(d.addEventListener){t(d,"DOMContentLoaded",function i(){d.removeEventListener("DOMContentLoaded",i,false);k()})}else{if(d.attachEvent){d.attachEvent("onreadystatechange",function i(){if(d.readyState==="complete"){d.detachEvent("onreadystatechange",i);k()}});if(d.documentElement.doScroll&&I===I.top){(function i(){if(!h){try{d.documentElement.doScroll("left")}catch(L){setTimeout(i,0);return}k()}}())}}}if((new RegExp("WebKit")).test(j.userAgent)){K=setInterval(function(){if(h||/loaded|complete/.test(d.readyState)){clearInterval(K);k()}},10)}t(I,"load",k,false)}function f(){var i="";try{i=I.top.document.referrer}catch(L){if(I.parent){try{i=I.parent.document.referrer}catch(K){i=""}}}if(i===""){i=d.referrer}return i}function A(i){var L=new RegExp("^([a-z]+):"),K=L.exec(i);return K?K[1]:null}function y(i){var L=new RegExp("^(?:(?:https?|ftp):)/*(?:[^@]+@)?([^:/#]+)"),K=L.exec(i);return K?K[1]:i}function p(L,K){var O=new RegExp("^(?:https?|ftp)(?::/*(?:[^?]+)[?])([^#]+)"),N=O.exec(L),M=new RegExp("(?:^|&)"+K+"=([^&]*)"),i=N?M.exec(N[1]):0;
return i?J(i[1]):""}function s(P,M,L,O,K,N){var i;if(L){i=new Date();i.setTime(i.getTime()+L)}d.cookie=P+"="+e(M)+(L?";expires="+i.toGMTString():"")+";path="+(O||"/")+(K?";domain="+K:"")+(N?";secure":"")}function G(L){var i=new RegExp("(^|;)[ ]*"+L+"=([^;]*)"),K=i.exec(d.cookie);return K?J(K[2]):0}function r(i){return E(e(i))}function u(aa){var M=function(W,i){return(W<<i)|(W>>>(32-i))},ab=function(ah){var ag="",af,W;for(af=7;af>=0;af--){W=(ah>>>(af*4))&15;ag+=W.toString(16)}return ag},P,ad,ac,L=[],T=1732584193,R=4023233417,Q=2562383102,O=271733878,N=3285377520,Z,Y,X,V,U,ae,K,S=[];aa=r(aa);K=aa.length;for(ad=0;ad<K-3;ad+=4){ac=aa.charCodeAt(ad)<<24|aa.charCodeAt(ad+1)<<16|aa.charCodeAt(ad+2)<<8|aa.charCodeAt(ad+3);S.push(ac)}switch(K&3){case 0:ad=2147483648;break;case 1:ad=aa.charCodeAt(K-1)<<24|8388608;break;case 2:ad=aa.charCodeAt(K-2)<<24|aa.charCodeAt(K-1)<<16|32768;break;case 3:ad=aa.charCodeAt(K-3)<<24|aa.charCodeAt(K-2)<<16|aa.charCodeAt(K-1)<<8|128;break}S.push(ad);while((S.length&15)!==14){S.push(0)
}S.push(K>>>29);S.push((K<<3)&4294967295);for(P=0;P<S.length;P+=16){for(ad=0;ad<16;ad++){L[ad]=S[P+ad]}for(ad=16;ad<=79;ad++){L[ad]=M(L[ad-3]^L[ad-8]^L[ad-14]^L[ad-16],1)}Z=T;Y=R;X=Q;V=O;U=N;for(ad=0;ad<=19;ad++){ae=(M(Z,5)+((Y&X)|(~Y&V))+U+L[ad]+1518500249)&4294967295;U=V;V=X;X=M(Y,30);Y=Z;Z=ae}for(ad=20;ad<=39;ad++){ae=(M(Z,5)+(Y^X^V)+U+L[ad]+1859775393)&4294967295;U=V;V=X;X=M(Y,30);Y=Z;Z=ae}for(ad=40;ad<=59;ad++){ae=(M(Z,5)+((Y&X)|(Y&V)|(X&V))+U+L[ad]+2400959708)&4294967295;U=V;V=X;X=M(Y,30);Y=Z;Z=ae}for(ad=60;ad<=79;ad++){ae=(M(Z,5)+(Y^X^V)+U+L[ad]+3395469782)&4294967295;U=V;V=X;X=M(Y,30);Y=Z;Z=ae}T=(T+Z)&4294967295;R=(R+Y)&4294967295;Q=(Q+X)&4294967295;O=(O+V)&4294967295;N=(N+U)&4294967295}ae=ab(T)+ab(R)+ab(Q)+ab(O)+ab(N);return ae.toLowerCase()}function o(L,i,K){if(L==="translate.googleusercontent.com"){if(K===""){K=i}i=p(i,"u");L=y(i)}else{if(L==="cc.bingj.com"||L==="webcache.googleusercontent.com"||L.slice(0,5)==="74.6."){i=d.links[0].href;L=y(i)}}return[L,i,K]}function l(K){var i=K.length;
if(K.charAt(--i)==="."){K=K.slice(0,i)}if(K.slice(0,2)==="*."){K=K.slice(1)}return K}function F(ac,ay){var N=o(d.domain,I.location.href,f()),aQ=l(N[0]),a3=N[1],aE=N[2],aC="GET",M=ac||"",aU=ay||"",ao,ag=d.title,ai="7z|aac|ar[cj]|as[fx]|avi|bin|csv|deb|dmg|doc|exe|flv|gif|gz|gzip|hqx|jar|jpe?g|js|mp(2|3|4|e?g)|mov(ie)?|ms[ip]|od[bfgpst]|og[gv]|pdf|phps|png|ppt|qtm?|ra[mr]?|rpm|sea|sit|tar|t?bz2?|tgz|torrent|txt|wav|wm[av]|wpd||xls|xml|z|zip",aA=[aQ],Q=[],at=[],ab=[],az=500,R,ad,S,T,ak=["pk_campaign","piwik_campaign","utm_campaign","utm_source","utm_medium"],af=["pk_kwd","piwik_kwd","utm_term"],a1="_pk_",V,a2,aW,an,Z=63072000000,aa=1800000,ap=15768000000,Y=d.location.protocol==="https",P=false,au={},aX=200,aK={},aV={},aH=false,aF=false,aD,av,W,aj=u,aG,am;function aY(a6){var a7;if(S){a7=new RegExp("#.*");return a6.replace(a7,"")}return a6}function aP(a8,a6){var a9=A(a6),a7;if(a9){return a6}if(a6.slice(0,1)==="/"){return A(a8)+"://"+y(a8)+a6}a8=aY(a8);if((a7=a8.indexOf("?"))>=0){a8=a8.slice(0,a7)
}if((a7=a8.lastIndexOf("/"))!==a8.length-1){a8=a8.slice(0,a7+1)}return a8+a6}function aB(a9){var a7,a6,a8;for(a7=0;a7<aA.length;a7++){a6=l(aA[a7].toLowerCase());if(a9===a6){return true}if(a6.slice(0,1)==="."){if(a9===a6.slice(1)){return true}a8=a9.length-a6.length;if((a8>0)&&(a9.slice(a8)===a6)){return true}}}return false}function a5(a6){var a7=new Image(1,1);a7.onLoad=function(){};a7.src=M+(M.indexOf("?")<0?"?":"&")+a6}function aM(a6){try{var a8=I.XDomainRequest?new I.XDomainRequest():I.XMLHttpRequest?new I.XMLHttpRequest():I.ActiveXObject?new ActiveXObject("Microsoft.XMLHTTP"):null;a8.open("POST",M,true);a8.onreadystatechange=function(){if(this.readyState===4&&this.status!==200){a5(a6)}};a8.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");a8.send(a6)}catch(a7){a5(a6)}}function al(a8,a7){var a6=new Date();if(!aW){if(aC==="POST"){aM(a8)}else{a5(a8)}m=a6.getTime()+a7}}function aL(a6){return a1+a6+"."+aU+"."+aG}function O(){var a6=aL("testcookie");if(!b(j.cookieEnabled)){s(a6,"1");
return G(a6)==="1"?"1":"0"}return j.cookieEnabled?"1":"0"}function aw(){aG=aj((V||aQ)+(a2||"/")).slice(0,4)}function X(){var a7=aL("cvar"),a6=G(a7);if(a6.length){a6=JSON2.parse(a6);if(n(a6)){return a6}}return{}}function L(){if(P===false){P=X()}}function aT(){var a6=new Date();aD=a6.getTime()}function U(ba,a7,a6,a9,a8,bb){s(aL("id"),ba+"."+a7+"."+a6+"."+a9+"."+a8+"."+bb,Z,a2,V,Y)}function K(){var a7=new Date(),a6=Math.round(a7.getTime()/1000),a9=G(aL("id")),a8;if(a9){a8=a9.split(".");a8.unshift("0")}else{if(!am){am=aj((j.userAgent||"")+(j.platform||"")+JSON2.stringify(aV)+a6).slice(0,16)}a8=["1",am,a6,0,a6,"",""]}return a8}function i(){var a6=G(aL("ref"));if(a6.length){try{a6=JSON2.parse(a6);if(n(a6)){return a6}}catch(a7){}}return["","",0,""]}function ah(a8,bw,bx,ba){var bu,a7=new Date(),bg=Math.round(a7.getTime()/1000),bz,bv,bc,bn,br,bf,bp,bd,bt,bb=1024,bA,bj,bq=P,bl=aL("id"),bh=aL("ses"),bi=aL("ref"),bB=aL("cvar"),bo=K(),bk=G(bh),bs=i(),by=ao||a3,be,a6;if(aW){s(bl,"",-1,a2,V);s(bh,"",-1,a2,V);
s(bB,"",-1,a2,V);s(bi,"",-1,a2,V);return""}bz=bo[0];bv=bo[1];bn=bo[2];bc=bo[3];br=bo[4];bf=bo[5];if(!b(bo[6])){bo[6]=""}bp=bo[6];if(!b(ba)){ba=""}be=bs[0];a6=bs[1];bd=bs[2];bt=bs[3];if(!bk){bc++;bf=br;if(!an||!be.length){for(bu in ak){if(Object.prototype.hasOwnProperty.call(ak,bu)){be=p(by,ak[bu]);if(be.length){break}}}for(bu in af){if(Object.prototype.hasOwnProperty.call(af,bu)){a6=p(by,af[bu]);if(a6.length){break}}}}bA=y(aE);bj=bt.length?y(bt):"";if(bA.length&&!aB(bA)&&(!an||!bj.length||aB(bj))){bt=aE}if(bt.length||be.length){bd=bg;bs=[be,a6,bd,aY(bt.slice(0,bb))];s(bi,JSON2.stringify(bs),ap,a2,V,Y)}}a8+="&idsite="+aU+"&rec=1&r="+String(Math.random()).slice(2,8)+"&h="+a7.getHours()+"&m="+a7.getMinutes()+"&s="+a7.getSeconds()+"&url="+e(aY(by))+(aE.length?"&urlref="+e(aY(aE)):"")+"&_id="+bv+"&_idts="+bn+"&_idvc="+bc+"&_idn="+bz+(be.length?"&_rcn="+e(be):"")+(a6.length?"&_rck="+e(a6):"")+"&_refts="+bd+"&_viewts="+bf+(String(bp).length?"&_ects="+bp:"")+(String(bt).length?"&_ref="+e(aY(bt.slice(0,bb))):"");
var a9=JSON2.stringify(au);if(a9.length>2){a8+="&cvar="+e(a9)}for(bu in aV){if(Object.prototype.hasOwnProperty.call(aV,bu)){a8+="&"+bu+"="+aV[bu]}}if(bw){a8+="&data="+e(JSON2.stringify(bw))}else{if(T){a8+="&data="+e(JSON2.stringify(T))}}if(P){var bm=JSON2.stringify(P);if(bm.length>2){a8+="&_cvar="+e(bm)}for(bu in bq){if(Object.prototype.hasOwnProperty.call(bq,bu)){if(P[bu][0]===""||P[bu][1]===""){delete P[bu]}}}s(bB,JSON2.stringify(P),aa,a2,V,Y)}U(bv,bn,bc,bg,bf,b(ba)&&String(ba).length?ba:bp);s(bh,"*",aa,a2,V,Y);a8+=g(bx);return a8}function aO(a9,a8,bd,ba,a6,bg){var bb="idgoal=0",bc,a7=new Date(),be=[],bf;if(String(a9).length){bb+="&ec_id="+e(a9);bc=Math.round(a7.getTime()/1000)}bb+="&revenue="+a8;if(String(bd).length){bb+="&ec_st="+bd}if(String(ba).length){bb+="&ec_tx="+ba}if(String(a6).length){bb+="&ec_sh="+a6}if(String(bg).length){bb+="&ec_dt="+bg}if(aK){for(bf in aK){if(Object.prototype.hasOwnProperty.call(aK,bf)){if(!b(aK[bf][1])){aK[bf][1]=""}if(!b(aK[bf][2])){aK[bf][2]=""}if(!b(aK[bf][3])||String(aK[bf][3]).length===0){aK[bf][3]=0
}if(!b(aK[bf][4])||String(aK[bf][4]).length===0){aK[bf][4]=1}be.push(aK[bf])}}bb+="&ec_items="+e(JSON2.stringify(be))}bb=ah(bb,T,"ecommerce",bc);al(bb,az)}function aN(a6,ba,a9,a8,a7,bb){if(String(a6).length&&b(ba)){aO(a6,ba,a9,a8,a7,bb)}}function a0(a6){if(b(a6)){aO("",a6,"","","","")}}function ar(a9,ba){var a6=new Date(),a8=ah("action_name="+e(a9||ag),ba,"log");al(a8,az);if(R&&ad&&!aF){aF=true;t(d,"click",aT);t(d,"mouseup",aT);t(d,"mousedown",aT);t(d,"mousemove",aT);t(d,"mousewheel",aT);t(I,"DOMMouseScroll",aT);t(I,"scroll",aT);t(d,"keypress",aT);t(d,"keydown",aT);t(d,"keyup",aT);t(I,"resize",aT);t(I,"focus",aT);t(I,"blur",aT);aD=a6.getTime();setTimeout(function a7(){var bb=new Date(),bc;if((aD+ad)>bb.getTime()){if(R<bb.getTime()){bc=ah("ping=1",ba,"ping");al(bc,az)}setTimeout(a7,ad)}},ad)}}function ax(a6,a9,a8){var a7=ah("idgoal="+a6+(a9?"&revenue="+a9:""),a8,"goal");al(a7,az)}function aS(a7,a6,a9){var a8=ah(a6+"="+e(aY(a7)),a9,"link");al(a8,az)}function ae(a8,a7){var a9,a6="(^| )(piwik[_-]"+a7;
if(a8){for(a9=0;a9<a8.length;a9++){a6+="|"+a8[a9]}}a6+=")( |$)";return new RegExp(a6)}function aR(a9,a6,ba){if(!ba){return"link"}var a8=ae(at,"download"),a7=ae(ab,"link"),bb=new RegExp("\\.("+ai+")([?&#]|$)","i");return a7.test(a9)?"link":(a8.test(a9)||bb.test(a6)?"download":0)}function aJ(bb){var a9,a7,a6;while((a9=bb.parentNode)!==null&&b(a9)&&((a7=bb.tagName.toUpperCase())!=="A"&&a7!=="AREA")){bb=a9}if(b(bb.href)){var bc=bb.hostname||y(bb.href),bd=bc.toLowerCase(),a8=bb.href.replace(bc,bd),ba=new RegExp("^(javascript|vbscript|jscript|mocha|livescript|ecmascript):","i");if(!ba.test(a8)){a6=aR(bb.className,a8,aB(bd));if(a6){a8=E(a8);aS(a8,a6)}}}}function a4(a6){var a7,a8;a6=a6||I.event;a7=a6.which||a6.button;a8=a6.target||a6.srcElement;if(a6.type==="click"){if(a8){aJ(a8)}}else{if(a6.type==="mousedown"){if((a7===1||a7===2)&&a8){av=a7;W=a8}else{av=W=null}}else{if(a6.type==="mouseup"){if(a7===av&&a8===W){aJ(a8)}av=W=null}}}}function aI(a7,a6){if(a6){t(a7,"mouseup",a4,false);t(a7,"mousedown",a4,false)
}else{t(a7,"click",a4,false)}}function aq(a7){if(!aH){aH=true;var a8,a6=ae(Q,"ignore"),a9=d.links;if(a9){for(a8=0;a8<a9.length;a8++){if(!a6.test(a9[a8].className)){aI(a9[a8],a7)}}}}}function aZ(){var a6,a7,a8={pdf:"application/pdf",qt:"video/quicktime",realp:"audio/x-pn-realaudio-plugin",wma:"application/x-mplayer2",dir:"application/x-director",fla:"application/x-shockwave-flash",java:"application/x-java-vm",gears:"application/x-googlegears",ag:"application/x-silverlight"};if(j.mimeTypes&&j.mimeTypes.length){for(a6 in a8){if(Object.prototype.hasOwnProperty.call(a8,a6)){a7=j.mimeTypes[a8[a6]];aV[a6]=(a7&&a7.enabledPlugin)?"1":"0"}}}if(typeof navigator.javaEnabled!=="unknown"&&b(j.javaEnabled)&&j.javaEnabled()){aV.java="1"}if(a(I.GearsFactory)){aV.gears="1"}aV.res=v.width+"x"+v.height;aV.cookie=O()}aZ();aw();return{getVisitorId:function(){return(K())[1]},getVisitorInfo:function(){return K()},getAttributionInfo:function(){return i()},getAttributionCampaignName:function(){return i()[0]},getAttributionCampaignKeyword:function(){return i()[1]
},getAttributionReferrerTimestamp:function(){return i()[2]},getAttributionReferrerUrl:function(){return i()[3]},setTrackerUrl:function(a6){M=a6},setSiteId:function(a6){aU=a6},setCustomData:function(a6,a7){if(n(a6)){T=a6}else{if(!T){T=[]}T[a6]=a7}},getCustomData:function(){return T},setCustomVariable:function(a7,a6,ba,a8){var a9;if(!b(a8)){a8="visit"}if(a7>0){a9=[a6.slice(0,aX),ba.slice(0,aX)];if(a8==="visit"||a8===2){L();P[a7]=a9}else{if(a8==="page"||a8===3){au[a7]=a9}}}},getCustomVariable:function(a7,a8){var a6;if(!b(a8)){a8="visit"}if(a8==="page"||a8===3){a6=au[a7]}else{if(a8==="visit"||a8===2){L();a6=P[a7]}}if(!b(a6)||(a6&&a6[0]==="")){return false}return a6},deleteCustomVariable:function(a6,a7){if(this.getCustomVariable(a6,a7)){this.setCustomVariable(a6,"","",a7)}},setLinkTrackingTimer:function(a6){az=a6},setDownloadExtensions:function(a6){ai=a6},addDownloadExtensions:function(a6){ai+="|"+a6},setDomains:function(a6){aA=q(a6)?[a6]:a6;aA.push(aQ)},setIgnoreClasses:function(a6){Q=q(a6)?[a6]:a6
},setRequestMethod:function(a6){aC=a6||"GET"},setReferrerUrl:function(a6){aE=a6},setCustomUrl:function(a6){ao=aP(a3,a6)},setDocumentTitle:function(a6){ag=a6},setDownloadClasses:function(a6){at=q(a6)?[a6]:a6},setLinkClasses:function(a6){ab=q(a6)?[a6]:a6},setCampaignNameKey:function(a6){ak=q(a6)?[a6]:a6},setCampaignKeywordKey:function(a6){af=q(a6)?[a6]:a6},discardHashTag:function(a6){S=a6},setCookieNamePrefix:function(a6){a1=a6;P=X()},setCookieDomain:function(a6){V=l(a6);aw()},setCookiePath:function(a6){a2=a6;aw()},setVisitorCookieTimeout:function(a6){Z=a6*1000},setSessionCookieTimeout:function(a6){aa=a6*1000},setReferralCookieTimeout:function(a6){ap=a6*1000},setConversionAttributionFirstReferrer:function(a6){an=a6},setDoNotTrack:function(a6){aW=a6&&j.doNotTrack},addListener:function(a7,a6){aI(a7,a6)},enableLinkTracking:function(a6){if(h){aq(a6)}else{C.push(function(){aq(a6)})}},setHeartBeatTimer:function(a8,a7){var a6=new Date();R=a6.getTime()+a8*1000;ad=a7*1000},killFrame:function(){if(I.location!==I.top.location){I.top.location=I.location
}},redirectFile:function(a6){if(I.location.protocol==="file:"){I.location=a6}},trackGoal:function(a6,a8,a7){ax(a6,a8,a7)},trackLink:function(a7,a6,a8){aS(a7,a6,a8)},trackPageView:function(a6,a7){ar(a6,a7)},setEcommerceView:function(a9,a6,a8,a7){if(!b(a8)||!a8.length){a8=""}au[5]=["_pkc",a8];if(b(a7)&&String(a7).length){au[2]=["_pkp",a7]}if((!b(a9)||!a9.length)&&(!b(a6)||!a6.length)){return}if(b(a9)&&a9.length){au[3]=["_pks",a9]}if(!b(a6)||!a6.length){a6=""}au[4]=["_pkn",a6]},addEcommerceItem:function(ba,a6,a8,a7,a9){if(ba.length){aK[ba]=[ba,a6,a8,a7,a9]}},trackEcommerceOrder:function(a6,ba,a9,a8,a7,bb){aN(a6,ba,a9,a8,a7,bb)},trackEcommerceCartUpdate:function(a6){a0(a6)}}}function c(){return{push:z}}t(I,"beforeunload",B,false);x();H=new F();for(D=0;D<_paq.length;D++){z(_paq[D])}_paq=new c();return{addPlugin:function(i,K){w[i]=K},getTracker:function(i,K){return new F(i,K)},getAsyncTracker:function(){return H}}}()),piwik_track,piwik_log=function(b,f,d,g){function a(h){try{return eval("piwik_"+h)
}catch(i){}return}var c,e=Piwik.getTracker(d,f);e.setDocumentTitle(b);e.setCustomData(g);c=a("tracker_pause");if(c){e.setLinkTrackingTimer(c)}c=a("download_extensions");if(c){e.setDownloadExtensions(c)}c=a("hosts_alias");if(c){e.setDomains(c)}c=a("ignore_classes");if(c){e.setIgnoreClasses(c)}e.trackPageView();if(a("install_tracker")){piwik_track=function(i,k,j,h){e.setSiteId(k);e.setTrackerUrl(j);e.trackLink(i,h)};e.enableLinkTracking()}};