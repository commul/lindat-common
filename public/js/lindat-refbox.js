!function(A,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("jQuery")):"function"==typeof define&&define.amd?define(["jQuery"],t):"object"==typeof exports?exports.LindatRefBox=t(require("jQuery")):A.LindatRefBox=t(A.jQuery)}(this,function(A){return function(A){function t(n){if(e[n])return e[n].exports;var i=e[n]={exports:{},id:n,loaded:!1};return A[n].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var e={};return t.m=A,t.c=e,t.p="https://lindat.mff.cuni.cz/common/",t(0)}([function(A,t,e){var n=e(1),i=e(12);window.LindatRefBox=i,n.fn.lindatRefBox=function(A){var t=n.extend({},{rest:"https://lindat.eurac.edu/repository/rest"},A),e="lindat-refbox";return this.each(function(){var A=n(this),o=A.data(e);o&&o.destroy(),A.data(e,new i(this,t))}),this},n(document).ready(function(){window.LindatRefBoxConfig||(window.LindatRefBoxConfig={}),n(".refbox").lindatRefBox(window.LindatRefBoxConfig)})},function(t,e){t.exports=A},function(A,t,e){t=A.exports=e(3)(),t.push([A.id,"@font-face{font-family:refbox-icons;src:url("+e(11)+")}@font-face{font-family:refbox-icons;src:url("+e(10)+');font-weight:400;font-style:normal}@-webkit-keyframes lindat-scale{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}45%{-webkit-transform:scale(.1);transform:scale(.1);opacity:.7}80%{-webkit-transform:scale(1);transform:scale(1);opacity:1}}@keyframes lindat-scale{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}45%{-webkit-transform:scale(.1);transform:scale(.1);opacity:.7}80%{-webkit-transform:scale(1);transform:scale(1);opacity:1}}.lindat-loader>div:nth-child(0){-webkit-animation:lindat-scale .75s -.36s infinite cubic-bezier(.2,.68,.18,1.08);animation:lindat-scale .75s -.36s infinite cubic-bezier(.2,.68,.18,1.08)}.lindat-loader>div:first-child{-webkit-animation:lindat-scale .75s -.24s infinite cubic-bezier(.2,.68,.18,1.08);animation:lindat-scale .75s -.24s infinite cubic-bezier(.2,.68,.18,1.08)}.lindat-loader>div:nth-child(2){-webkit-animation:lindat-scale .75s -.12s infinite cubic-bezier(.2,.68,.18,1.08);animation:lindat-scale .75s -.12s infinite cubic-bezier(.2,.68,.18,1.08)}.lindat-loader>div:nth-child(3){-webkit-animation:lindat-scale .75s 0s infinite cubic-bezier(.2,.68,.18,1.08);animation:lindat-scale .75s 0s infinite cubic-bezier(.2,.68,.18,1.08)}.lindat-loader>div{background-color:#c09853;width:15px;height:15px;border-radius:100%;margin:2px;-webkit-animation-fill-mode:both;animation-fill-mode:both;display:inline-block}html.lindat-modal-open{overflow:hidden}.lindat-overlay{position:fixed;top:0;left:0;height:100%;width:100%;z-index:10000;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;background:rgba(0,0,0,.5);font-family:Droid Sans,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;box-sizing:border-box;font-size:13px;text-shadow:hsla(0,0%,100%,.5) 0 1px 0;overflow-y:auto}@media (min-width:768px){.lindat-overlay{display:-webkit-box;display:-ms-flexbox;display:flex}}.lindat-overlay *,.lindat-overlay :after,.lindat-overlay :before{box-sizing:inherit}.lindat-modal{padding:20px;margin:20px;background:#fff;border-radius:5px;z-index:10001}@media (min-width:768px){.lindat-modal{min-width:750px}}@media (min-width:992px){.lindat-modal{min-width:970px}}.lindat-modal .lindat-modal-body>textarea{font-family:monospace;width:100%;height:300px;background-color:#eee;color:#555;border:1px solid #ccc;border-radius:4px;box-shadow:inset 0 1px 1px rgba(0,0,0,.075);padding:6px 12px;word-wrap:normal;overflow-x:scroll;resize:none;outline:0;word-break:break-all;white-space:pre-wrap}.lindat-modal .lindat-modal-footer{text-align:right;text-transform:uppercase}.lindat-modal-header{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.lindat-modal-header kbd{background-color:#999;padding:.2em .6em .3em;font-weight:700;line-height:1;border-radius:.25em;color:#fff}.lindat-modal-header p{padding:0;margin:10px 0 0;font-size:13px}.lindat-modal-header h3{-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;margin:0 0 10px;padding:0}.lindat-modal-close-button{cursor:pointer;border-radius:2px;height:15px;width:15px;font-size:16px;line-height:15px;background:#ccc;text-align:center;margin:0 0 0 10px}.lindat-refbox{font-family:Droid Sans,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;box-sizing:border-box;font-size:13px;text-shadow:hsla(0,0%,100%,.5) 0 1px 0}.lindat-refbox *,.lindat-refbox :after,.lindat-refbox :before{box-sizing:inherit}.lindat-refbox h3{margin:0;padding:0;font-size:14px;font-weight:700}.lindat-refbox-top{background-color:#fcf8e3;border:1px solid #fbeed5;color:#c09853;padding:10px 10px 5px;border-radius:6px 6px 0 0}.lindat-refbox-formats{padding:0 5px;-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto;text-align:right}.lindat-refbox-formats a{padding:.2em .6em .3em;margin:0 2px;font-weight:700;line-height:1;color:#fff;text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:.25em;background-color:#999;text-transform:uppercase;font-size:11px;text-decoration:none;text-shadow:none}.lindat-refbox-formats a:focus,.lindat-refbox-formats a:hover{background-color:gray;color:#fff;text-decoration:none}.lindat-refbox-header{-webkit-box-align:center;-ms-flex-align:center;align-items:center}.lindat-refbox-body,.lindat-refbox-header{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.lindat-refbox-body{padding:10px}.lindat-refbox-text{color:#999;font-weight:700;-webkit-box-flex:1;-ms-flex:1 1 0px;flex:1 1 0}.lindat-refbox-text a{color:#428bca;outline:0;text-decoration:none}.lindat-refbox-text a:focus,.lindat-refbox-text a:hover{color:#2a6496;text-decoration:underline}.lindat-refbox-copy-wrapper{-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto}.lindat-refbox-copy{background:#c09853;display:block;white-space:nowrap;border:none;border-radius:500rem;width:1.3em;height:1.3em;line-height:1em;font-size:2.5em;cursor:pointer;color:#fff}.lindat-refbox-copy:focus{outline:0}.lindat-refbox-copy:hover{background-color:#a47e3c}.lindat-refbox-footer{background-color:#d8edf6;border:1px solid #bbe8ef;color:#38a;padding:5px 10px 10px;border-radius:0 0 6px 6px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}@media (min-width:768px){.lindat-refbox-footer{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}}.lindat-refbox-integration{-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto;margin-bottom:10px}@media (min-width:768px){.lindat-refbox-integration{margin-bottom:0}}.lindat-refbox-services{margin:0 0 0 3em}.lindat-refbox-shares a{text-decoration:none;font-size:3em}.lindat-refbox-shares a:focus,.lindat-refbox-shares a:hover{text-decoration:none}.lindat-share-facebook{color:#395a93;-ms-flex-item-align:end;align-self:flex-end}.lindat-share-facebook:hover{color:#2b436e}.lindat-share-twitter{color:#00aee8;-ms-flex-item-align:end;align-self:flex-end}.lindat-share-twitter:hover{color:#0088b5}.lindat-share-google-plus{color:#d64136;-ms-flex-item-align:end;align-self:flex-end}.lindat-share-google-plus:hover{color:#b42f25}.lindat-icon{font-family:refbox-icons;font-style:normal;font-weight:400;font-variant:normal;text-transform:none;line-height:.8;letter-spacing:-3px;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.lindat-header-icon{font-size:3em;margin-right:.1em}.lindat-icon-twitter:before{content:"\\F081"}.lindat-icon-facebook:before{content:"\\F082"}.lindat-icon-google-plus:before{content:"\\F0D4"}.lindat-icon-quote:before{content:"\\F10D"}.lindat-icon-puzzle:before{content:"\\F12E"}.lindat-icon-share:before{content:"\\F1E0"}.lindat-icon-copy:before{content:"\\F0C5"}button.lindat-button::-moz-focus-inner{border:0;padding:0}.lindat-button{font:inherit;font-size:14px;line-height:1;font-weight:700;color:#fff;display:inline-block;cursor:pointer;padding:6px 12px;margin:0 2px;text-align:center;white-space:nowrap;vertical-align:middle;border-radius:4px;background-color:#428bca;background-image:none;-moz-appearance:button;text-indent:0;text-decoration:none;text-shadow:none;text-transform:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:1px solid #357ebd}.lindat-button:focus{outline:0;color:#fff;text-decoration:none}.lindat-button:hover{background-color:#2a6496;color:#fff;text-decoration:none}.lindat-dropdown-caret{width:0;height:0;border-top:4px dashed;border-right:4px solid transparent;border-left:4px solid transparent}.lindat-dropdown,.lindat-dropdown-caret{display:inline-block;vertical-align:middle}.lindat-dropdown{position:relative;margin-right:4px}.lindat-dropdown:last-child{margin-right:0}.lindat-dropdown>.lindat-button{position:relative;float:left;margin:0}.lindat-dropdown>.lindat-button+.lindat-dropdown-toggle{padding-left:8px;padding-right:8px}.lindat-dropdown>.lindat-button+.lindat-button{margin-left:-1px}.lindat-dropdown>.lindat-dropdown-toggle:not(:first-child){border-bottom-left-radius:0;border-top-left-radius:0}.lindat-dropdown>.lindat-button:first-child:not(:last-child):not(.lindat-dropdown-toggle){border-bottom-right-radius:0;border-top-right-radius:0}.lindat-dropdown-menu{position:absolute;top:100%;left:0;z-index:1000;display:none;float:left;min-width:160px;padding:5px 0;margin:2px 0 0;list-style:none;font-size:14px;background-color:#fff;border:1px solid rgba(0,0,0,.15);border-radius:4px;box-shadow:0 6px 12px rgba(0,0,0,.175);background-clip:padding-box}.lindat-dropdown-menu>li>a{display:block;padding:3px 20px;clear:both;font-weight:400;line-height:1.42857143;color:#333;white-space:nowrap;text-decoration:none}.lindat-dropdown-menu>li>a:hover{text-decoration:none;color:#262626;background-color:#f5f5f5}.lindat-loading .lindat-refbox-copy,.lindat-loading .lindat-refbox-footer,.lindat-loading .lindat-refbox-formats{display:none}',""])},function(A,t){A.exports=function(){var A=[];return A.toString=function(){for(var A=[],t=0;t<this.length;t++){var e=this[t];e[2]?A.push("@media "+e[2]+"{"+e[1]+"}"):A.push(e[1])}return A.join("")},A.i=function(t,e){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(n[o]=!0)}for(i=0;i<t.length;i++){var a=t[i];"number"==typeof a[0]&&n[a[0]]||(e&&!a[2]?a[2]=e:e&&(a[2]="("+a[2]+") and ("+e+")"),A.push(a))}},A}},function(A,t,e){!function(A){function t(A){"}"===A.n.substr(A.n.length-1)&&(A.n=A.n.substring(0,A.n.length-1))}function e(A){return A.trim?A.trim():A.replace(/^\s*|\s*$/g,"")}function n(A,t,e){if(t.charAt(e)!=A.charAt(0))return!1;for(var n=1,i=A.length;n<i;n++)if(t.charAt(e+n)!=A.charAt(n))return!1;return!0}function i(t,e,n,r){var c=[],s=null,l=null,d=null;for(l=n[n.length-1];t.length>0;){if(d=t.shift(),l&&"<"==l.tag&&!(d.tag in Q))throw new Error("Illegal content in < super tag.");if(A.tags[d.tag]<=A.tags.$||o(d,r))n.push(d),d.nodes=i(t,d.tag,n,r);else{if("/"==d.tag){if(0===n.length)throw new Error("Closing tag without opener: /"+d.n);if(s=n.pop(),d.n!=s.n&&!a(d.n,s.n,r))throw new Error("Nesting error: "+s.n+" vs. "+d.n);return s.end=d.i,c}"\n"==d.tag&&(d.last=0==t.length||"\n"==t[0].tag)}c.push(d)}if(n.length>0)throw new Error("missing closing tag: "+n.pop().n);return c}function o(A,t){for(var e=0,n=t.length;e<n;e++)if(t[e].o==A.n)return A.tag="#",!0}function a(A,t,e){for(var n=0,i=e.length;n<i;n++)if(e[n].c==A&&e[n].o==t)return!0}function r(A){var t=[];for(var e in A)t.push('"'+s(e)+'": function(c,p,t,i) {'+A[e]+"}");return"{ "+t.join(",")+" }"}function c(A){var t=[];for(var e in A.partials)t.push('"'+s(e)+'":{name:"'+s(A.partials[e].name)+'", '+c(A.partials[e])+"}");return"partials: {"+t.join(",")+"}, subs: "+r(A.subs)}function s(A){return A.replace(g,"\\\\").replace(p,'\\"').replace(h,"\\n").replace(b,"\\r").replace(w,"\\u2028").replace(x,"\\u2029")}function l(A){return~A.indexOf(".")?"d":"f"}function d(A,t){var e="<"+(t.prefix||""),n=e+A.n+m++;return t.partials[n]={name:A.n,partials:{}},t.code+='t.b(t.rp("'+s(n)+'",c,p,"'+(A.indent||"")+'"));',n}function f(A,t){t.code+="t.b(t.t(t."+l(A.n)+'("'+s(A.n)+'",c,p,0)));'}function B(A){return"t.b("+A+");"}var u=/\S/,p=/\"/g,h=/\n/g,b=/\r/g,g=/\\/g,w=/\u2028/,x=/\u2029/;A.tags={"#":1,"^":2,"<":3,$:4,"/":5,"!":6,">":7,"=":8,_v:9,"{":10,"&":11,_t:12},A.scan=function(i,o){function a(){g.length>0&&(w.push({tag:"_t",text:new String(g)}),g="")}function r(){for(var t=!0,e=m;e<w.length;e++)if(t=A.tags[w[e].tag]<A.tags._v||"_t"==w[e].tag&&null===w[e].text.match(u),!t)return!1;return t}function c(A,t){if(a(),A&&r())for(var e,n=m;n<w.length;n++)w[n].text&&((e=w[n+1])&&">"==e.tag&&(e.indent=w[n].text.toString()),w.splice(n,1));else t||w.push({tag:"\n"});x=!1,m=w.length}function s(A,t){var n="="+E,i=A.indexOf(n,t),o=e(A.substring(A.indexOf("=",t)+1,i)).split(" ");return v=o[0],E=o[o.length-1],i+n.length-1}var l=i.length,d=0,f=1,B=2,p=d,h=null,b=null,g="",w=[],x=!1,Q=0,m=0,v="{{",E="}}";for(o&&(o=o.split(" "),v=o[0],E=o[1]),Q=0;Q<l;Q++)p==d?n(v,i,Q)?(--Q,a(),p=f):"\n"==i.charAt(Q)?c(x):g+=i.charAt(Q):p==f?(Q+=v.length-1,b=A.tags[i.charAt(Q+1)],h=b?i.charAt(Q+1):"_v","="==h?(Q=s(i,Q),p=d):(b&&Q++,p=B),x=Q):n(E,i,Q)?(w.push({tag:h,n:e(g),otag:v,ctag:E,i:"/"==h?x-v.length:Q+E.length}),g="",Q+=E.length-1,p=d,"{"==h&&("}}"==E?Q++:t(w[w.length-1]))):g+=i.charAt(Q);return c(x,!0),w};var Q={_t:!0,"\n":!0,$:!0,"/":!0};A.stringify=function(t,e,n){return"{code: function (c,p,i) { "+A.wrapMain(t.code)+" },"+c(t)+"}"};var m=0;A.generate=function(t,e,n){m=0;var i={code:"",subs:{},partials:{}};return A.walk(t,i),n.asString?this.stringify(i,e,n):this.makeTemplate(i,e,n)},A.wrapMain=function(A){return'var t=this;t.b(i=i||"");'+A+"return t.fl();"},A.template=A.Template,A.makeTemplate=function(A,t,e){var n=this.makePartials(A);return n.code=new Function("c","p","i",this.wrapMain(A.code)),new this.template(n,t,this,e)},A.makePartials=function(A){var t,e={subs:{},partials:A.partials,name:A.name};for(t in e.partials)e.partials[t]=this.makePartials(e.partials[t]);for(t in A.subs)e.subs[t]=new Function("c","p","t","i",A.subs[t]);return e},A.codegen={"#":function(t,e){e.code+="if(t.s(t."+l(t.n)+'("'+s(t.n)+'",c,p,1),c,p,0,'+t.i+","+t.end+',"'+t.otag+" "+t.ctag+'")){t.rs(c,p,function(c,p,t){',A.walk(t.nodes,e),e.code+="});c.pop();}"},"^":function(t,e){e.code+="if(!t.s(t."+l(t.n)+'("'+s(t.n)+'",c,p,1),c,p,1,0,0,"")){',A.walk(t.nodes,e),e.code+="};"},">":d,"<":function(t,e){var n={partials:{},code:"",subs:{},inPartial:!0};A.walk(t.nodes,n);var i=e.partials[d(t,e)];i.subs=n.subs,i.partials=n.partials},$:function(t,e){var n={subs:{},code:"",partials:e.partials,prefix:t.n};A.walk(t.nodes,n),e.subs[t.n]=n.code,e.inPartial||(e.code+='t.sub("'+s(t.n)+'",c,p,i);')},"\n":function(A,t){t.code+=B('"\\n"'+(A.last?"":" + i"))},_v:function(A,t){t.code+="t.b(t.v(t."+l(A.n)+'("'+s(A.n)+'",c,p,0)));'},_t:function(A,t){t.code+=B('"'+s(A.text)+'"')},"{":f,"&":f},A.walk=function(t,e){for(var n,i=0,o=t.length;i<o;i++)n=A.codegen[t[i].tag],n&&n(t[i],e);return e},A.parse=function(A,t,e){return e=e||{},i(A,"",[],e.sectionTags||[])},A.cache={},A.cacheKey=function(A,t){return[A,!!t.asString,!!t.disableLambda,t.delimiters,!!t.modelGet].join("||")},A.compile=function(t,e){e=e||{};var n=A.cacheKey(t,e),i=this.cache[n];if(i){var o=i.partials;for(var a in o)delete o[a].instance;return i}return i=this.generate(this.parse(this.scan(t,e.delimiters),t,e),t,e),this.cache[n]=i}}(t)},function(A,t,e){var n=e(4);n.Template=e(6).Template,n.template=n.Template,A.exports=n},function(A,t,e){!function(A){function t(A,t,e){var n;return t&&"object"==typeof t&&(void 0!==t[A]?n=t[A]:e&&t.get&&"function"==typeof t.get&&(n=t.get(A))),n}function e(A,t,e,n,i,o){function a(){}function r(){}a.prototype=A,r.prototype=A.subs;var c,s=new a;s.subs=new r,s.subsText={},s.buf="",n=n||{},s.stackSubs=n,s.subsText=o;for(c in t)n[c]||(n[c]=t[c]);for(c in n)s.subs[c]=n[c];i=i||{},s.stackPartials=i;for(c in e)i[c]||(i[c]=e[c]);for(c in i)s.partials[c]=i[c];return s}function n(A){return String(null===A||void 0===A?"":A)}function i(A){return A=n(A),l.test(A)?A.replace(o,"&amp;").replace(a,"&lt;").replace(r,"&gt;").replace(c,"&#39;").replace(s,"&quot;"):A}A.Template=function(A,t,e,n){A=A||{},this.r=A.code||this.r,this.c=e,this.options=n||{},this.text=t||"",this.partials=A.partials||{},this.subs=A.subs||{},this.buf=""},A.Template.prototype={r:function(A,t,e){return""},v:i,t:n,render:function(A,t,e){return this.ri([A],t||{},e)},ri:function(A,t,e){return this.r(A,t,e)},ep:function(A,t){var n=this.partials[A],i=t[n.name];if(n.instance&&n.base==i)return n.instance;if("string"==typeof i){if(!this.c)throw new Error("No compiler available.");i=this.c.compile(i,this.options)}if(!i)return null;if(this.partials[A].base=i,n.subs){t.stackText||(t.stackText={});for(key in n.subs)t.stackText[key]||(t.stackText[key]=void 0!==this.activeSub&&t.stackText[this.activeSub]?t.stackText[this.activeSub]:this.text);i=e(i,n.subs,n.partials,this.stackSubs,this.stackPartials,t.stackText)}return this.partials[A].instance=i,i},rp:function(A,t,e,n){var i=this.ep(A,e);return i?i.ri(t,e,n):""},rs:function(A,t,e){var n=A[A.length-1];if(!d(n))return void e(A,t,this);for(var i=0;i<n.length;i++)A.push(n[i]),e(A,t,this),A.pop()},s:function(A,t,e,n,i,o,a){var r;return(!d(A)||0!==A.length)&&("function"==typeof A&&(A=this.ms(A,t,e,n,i,o,a)),r=!!A,!n&&r&&t&&t.push("object"==typeof A?A:t[t.length-1]),r)},d:function(A,e,n,i){var o,a=A.split("."),r=this.f(a[0],e,n,i),c=this.options.modelGet,s=null;if("."===A&&d(e[e.length-2]))r=e[e.length-1];else for(var l=1;l<a.length;l++)o=t(a[l],r,c),void 0!==o?(s=r,r=o):r="";return!(i&&!r)&&(i||"function"!=typeof r||(e.push(s),r=this.mv(r,e,n),e.pop()),r)},f:function(A,e,n,i){for(var o=!1,a=null,r=!1,c=this.options.modelGet,s=e.length-1;s>=0;s--)if(a=e[s],o=t(A,a,c),void 0!==o){r=!0;break}return r?(i||"function"!=typeof o||(o=this.mv(o,e,n)),o):!i&&""},ls:function(A,t,e,i,o){var a=this.options.delimiters;return this.options.delimiters=o,this.b(this.ct(n(A.call(t,i)),t,e)),this.options.delimiters=a,!1},ct:function(A,t,e){if(this.options.disableLambda)throw new Error("Lambda features disabled.");return this.c.compile(A,this.options).render(t,e)},b:function(A){this.buf+=A},fl:function(){var A=this.buf;return this.buf="",A},ms:function(A,t,e,n,i,o,a){var r,c=t[t.length-1],s=A.call(c);return"function"==typeof s?!!n||(r=this.activeSub&&this.subsText&&this.subsText[this.activeSub]?this.subsText[this.activeSub]:this.text,this.ls(s,c,e,r.substring(i,o),a)):s},mv:function(A,t,e){var i=t[t.length-1],o=A.call(i);return"function"==typeof o?this.ct(n(o.call(i)),i,e):o},sub:function(A,t,e,n){var i=this.subs[A];i&&(this.activeSub=A,i(t,e,this,n),this.activeSub=!1)}};var o=/&/g,a=/</g,r=/>/g,c=/\'/g,s=/\"/g,l=/[&<>\"\']/,d=Array.isArray||function(A){return"[object Array]"===Object.prototype.toString.call(A)}}(t)},function(A,t,e){var n=e(5);A.exports=function(){var A=new n.Template({code:function(A,t,e){var n=this;return n.b(e=e||""),n.b('<div class="lindat-refbox lindat-loading">'),n.b("\n"+e),n.b('  <div class="lindat-refbox-top">'),n.b("\n"+e),n.b('    <div class="lindat-refbox-header">'),n.b("\n"+e),n.b('      <div class="lindat-icon lindat-header-icon lindat-icon-quote"></div>'),n.b("\n"+e),n.b("      <h3>"),n.b(n.v(n.f("cite",A,t,0))),n.b("</h3>"),n.b("\n"+e),n.b('      <div class="lindat-refbox-formats" refbox-formats></div>'),n.b("\n"+e),n.b("    </div>"),n.b("\n"+e),n.b('    <div class="lindat-refbox-body">'),n.b("\n"+e),n.b('      <div class="lindat-refbox-text" refbox-text>'),n.b("\n"+e),n.b('        <div class="lindat-loader">'),n.b("\n"+e),n.b("          <div></div>"),n.b("\n"+e),n.b("          <div></div>"),n.b("\n"+e),n.b("          <div></div>"),n.b("\n"+e),n.b("        </div>"),n.b("\n"+e),n.b("      </div>"),n.b("\n"+e),n.b('      <div class="lindat-refbox-copy-wrapper">'),n.b("\n"+e),n.b('        <button class="lindat-icon lindat-icon-copy lindat-refbox-copy" refbox-copy-button></button>'),n.b("\n"+e),n.b("      </div>"),n.b("\n"+e),n.b("    </div>"),n.b("\n"+e),n.b("  </div>"),n.b("\n"+e),n.b('  <div class="lindat-refbox-footer">'),n.b("\n"+e),n.b('    <div class="lindat-refbox-integration" refbox-integrations>'),n.b("\n"+e),n.b('      <div class="lindat-refbox-header">'),n.b("\n"+e),n.b('        <div class="lindat-icon lindat-header-icon lindat-icon-puzzle"></div>'),n.b("\n"+e),n.b("        <h3>"),n.b(n.v(n.f("services",A,t,0))),n.b("</h3>"),n.b("\n"+e),n.b("      </div>"),n.b("\n"+e),n.b('      <div class="lindat-refbox-services" refbox-services>'),n.b("\n"+e),n.b("      </div>"),n.b("\n"+e),n.b("    </div>"),n.b("\n"+e),n.b('    <div class="lindat-refbox-header">'),n.b("\n"+e),n.b('      <div class="lindat-icon lindat-header-icon lindat-icon-share"></div>'),n.b("\n"+e),n.b("      <h3>"),n.b(n.v(n.f("share",A,t,0))),n.b("</h3>"),n.b("\n"+e),n.b('      <div class="lindat-refbox-shares" refbox-shares></div>'),n.b("\n"+e),n.b("    </div>"),n.b("\n"+e),n.b("  </div>"),n.b("\n"+e),n.b("</div>"),n.b("\n"),n.fl()},partials:{},subs:{}},'<div class="lindat-refbox lindat-loading">\n  <div class="lindat-refbox-top">\n    <div class="lindat-refbox-header">\n      <div class="lindat-icon lindat-header-icon lindat-icon-quote"></div>\n      <h3>{{cite}}</h3>\n      <div class="lindat-refbox-formats" refbox-formats></div>\n    </div>\n    <div class="lindat-refbox-body">\n      <div class="lindat-refbox-text" refbox-text>\n        <div class="lindat-loader">\n          <div></div>\n          <div></div>\n          <div></div>\n        </div>\n      </div>\n      <div class="lindat-refbox-copy-wrapper">\n        <button class="lindat-icon lindat-icon-copy lindat-refbox-copy" refbox-copy-button></button>\n      </div>\n    </div>\n  </div>\n  <div class="lindat-refbox-footer">\n    <div class="lindat-refbox-integration" refbox-integrations>\n      <div class="lindat-refbox-header">\n        <div class="lindat-icon lindat-header-icon lindat-icon-puzzle"></div>\n        <h3>{{services}}</h3>\n      </div>\n      <div class="lindat-refbox-services" refbox-services>\n      </div>\n    </div>\n    <div class="lindat-refbox-header">\n      <div class="lindat-icon lindat-header-icon lindat-icon-share"></div>\n      <h3>{{share}}</h3>\n      <div class="lindat-refbox-shares" refbox-shares></div>\n    </div>\n  </div>\n</div>\n',n);return A.render.apply(A,arguments)}},function(A,t,e){function n(A,t){for(var e=0;e<A.length;e++){var n=A[e],i=d[n.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](n.parts[o]);for(;o<n.parts.length;o++)i.parts.push(r(n.parts[o],t))}else{for(var a=[],o=0;o<n.parts.length;o++)a.push(r(n.parts[o],t));d[n.id]={id:n.id,refs:1,parts:a}}}}function i(A){for(var t=[],e={},n=0;n<A.length;n++){var i=A[n],o=i[0],a=i[1],r=i[2],c=i[3],s={css:a,media:r,sourceMap:c};e[o]?e[o].parts.push(s):t.push(e[o]={id:o,parts:[s]})}return t}function o(){var A=document.createElement("style"),t=u();return A.type="text/css",t.appendChild(A),A}function a(){var A=document.createElement("link"),t=u();return A.rel="stylesheet",t.appendChild(A),A}function r(A,t){var e,n,i;if(t.singleton){var r=h++;e=p||(p=o()),n=c.bind(null,e,r,!1),i=c.bind(null,e,r,!0)}else A.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=a(),n=l.bind(null,e),i=function(){e.parentNode.removeChild(e),e.href&&URL.revokeObjectURL(e.href)}):(e=o(),n=s.bind(null,e),i=function(){e.parentNode.removeChild(e)});return n(A),function(t){if(t){if(t.css===A.css&&t.media===A.media&&t.sourceMap===A.sourceMap)return;n(A=t)}else i()}}function c(A,t,e,n){var i=e?"":n.css;if(A.styleSheet)A.styleSheet.cssText=b(t,i);else{var o=document.createTextNode(i),a=A.childNodes;a[t]&&A.removeChild(a[t]),a.length?A.insertBefore(o,a[t]):A.appendChild(o)}}function s(A,t){var e=t.css,n=t.media;t.sourceMap;if(n&&A.setAttribute("media",n),A.styleSheet)A.styleSheet.cssText=e;else{for(;A.firstChild;)A.removeChild(A.firstChild);A.appendChild(document.createTextNode(e))}}function l(A,t){var e=t.css,n=(t.media,t.sourceMap);n&&(e+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");var i=new Blob([e],{type:"text/css"}),o=A.href;A.href=URL.createObjectURL(i),o&&URL.revokeObjectURL(o)}var d={},f=function(A){var t;return function(){return"undefined"==typeof t&&(t=A.apply(this,arguments)),t}},B=f(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),u=f(function(){return document.head||document.getElementsByTagName("head")[0]}),p=null,h=0;A.exports=function(A,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=B());var e=i(A);return n(e,t),function(A){for(var o=[],a=0;a<e.length;a++){var r=e[a],c=d[r.id];c.refs--,o.push(c)}if(A){var s=i(A);n(s,t)}for(var a=0;a<o.length;a++){var c=o[a];if(0===c.refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete d[c.id]}}}};var b=function(){var A=[];return function(t,e){return A[t]=e,A.filter(Boolean).join("\n")}}()},function(A,t,e){var n=e(2);"string"==typeof n&&(n=[[A.id,n,""]]);e(8)(n,{});n.locals&&(A.exports=n.locals)},function(A,t){A.exports="data:application/octet-stream;base64,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"},function(A,t){A.exports="data:application/vnd.ms-fontobject;base64,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";
},function(A,t,e){function n(A,t){return A.replace(/\{([^\}]+)\}/g,function(A,e){return e in t?encodeURIComponent(t[e]):A})}function i(A){function t(){e&&(e=!1,A.hide(),a(document).off("click.refbox"))}var e=!1;return a("<button></button>").addClass("lindat-button lindat-dropdown-toggle").attr("type","button").append(a("<span></span>").addClass("lindat-dropdown-caret")).click(function(){e?t():(setTimeout(function(){a(document).on("click.refbox",t)}),A.show(),e=!0)})}function o(A,t){var n=this;if(t||(t={}),!(n instanceof o))return new o(A,t);["handle","title"].forEach(function(e){if(!t[e]){var i=A.getAttribute(e);if(A.removeAttribute(e),!i)throw new Error("RefBox: Option '"+e+"' not specified.");n[e]=i}});var i=e(7);n.body=a(i({cite:"Please use the following text to cite this item or export to a predefined format:",services:"This resource is also integrated in following services:",share:"Share:"})),n.formatsContainer=n.body.find("[refbox-formats]"),n.sharesContainer=n.body.find("[refbox-shares]"),n.integrationContainer=n.body.find("[refbox-integrations]"),Object.keys(t).forEach(function(A){n[A]=t[A]}),n.uri="http://hdl.handle.net/"+n.handle,n.requestQueue=[],n.text=n.body.find("[refbox-text]"),n.copyButton=n.body.find("[refbox-copy-button]"),n.container=a(A).empty().append(n.body),n.init()}e(9);var a=e(1),r=[{name:"facebook",popup:{url:"http://www.facebook.com/sharer/sharer.php?u={uri}",width:600,height:500}},{name:"twitter",popup:{url:"http://twitter.com/intent/tweet?url={uri}&text={title}",width:600,height:450}},{name:"google-plus",popup:{url:"https://plus.google.com/share?url={uri}",width:700,height:500}}];o.prototype.init=function(){function A(){e.empty().html("<a href='"+t.uri+"'>"+t.uri+"</a>")}var t=this,e=t.text,o=t.copyButton;t.fetchInitial().done(function(A){A.title&&(t.title=A.title);var c=A.exportFormats.exportFormat;c&&c.length>0&&c.forEach(function(A){var e=a("<a></a>").attr("href",A.url).on("click",function(e){e.preventDefault(),t.request(A).done(function(e){t.modal(t.title,e,A.name)})}).text(A.name);t.formatsContainer.append(e)}),A.displayText&&(e.empty().append(A.displayText),o.on("click",function(A){A.preventDefault(),t.modal(t.title,e.text())}),t.body.removeClass("lindat-loading"));var s=A.featuredServices.featuredService;if(s&&s.length>0){var l=t.integrationContainer.find("[refbox-services]");s.forEach(function(A){var t=A.links,e=a("<a></a>").addClass("lindat-button").attr("target","_blank").attr("title",A.description).attr("href",A.url).text(A.name);if(t&&t.entry.length>0){var n=a("<ul></ul>").addClass("lindat-dropdown-menu"),o=a("<div></div>").addClass("lindat-dropdown").append(e).append(i(n)).append(n);t.entry.forEach(function(A){n.append(a("<li></li>").append(a("<a></a>").attr("target","_blank").attr("href",A.value).text(A.key)))}),l.append(o)}else l.append(e)})}else t.integrationContainer.remove();r.forEach(function(A){var e=A.popup,i=n(e.url,t),o=a("<a></a>").attr("class","lindat-icon lindat-icon-"+A.name+" lindat-share-"+A.name).attr("href",i).on("click",function(A){A.preventDefault(),window.open(i,t.title,"height:"+e.height+",width:"+e.width)});t.sharesContainer.append(o)})}).fail(A)},o.prototype.ajax=function(){var A=this,t=a.ajax.apply(a,arguments);return A.requestQueue.push(t),t.always(function(){var e=A.requestQueue.indexOf(t);e!==-1&&A.requestQueue.splice(e,1)})},o.prototype.request=function(A){var t=a.Deferred();return this.ajax(A.url,{dataType:A.dataType,cache:!0}).done(function(e){if("xml"===A.dataType){var n=a(e),i=n.find("error");if(i.length)t.reject();else{var o=n.find(A.name);t.resolve(o.length?o.html():n)}}else t.resolve(e.value)}).fail(t.reject),t},o.prototype.fetchInitial=function(){var A=this.rest+"/handle/"+this.handle+"/refbox";return this.ajax(A,{dataType:"json",cache:!0})},o.prototype.modal=function(A,t,e){function n(A){return A!==!0&&s?void(s=!1):(d.modalInstance=null,B.removeClass(f),o.remove(),a(document).off(".lindat"),void a(window).off(".lindat"))}function i(){l.focus().select()}var o,r,c,s,l,d=this,f="lindat-modal-open",B=a("html");B.hasClass(f)||(B.addClass(f),o=a('<div class="lindat-overlay"></div>').on("click",n).appendTo(document.body),r=a('<div class="lindat-modal" role="dialog"></div>').on("click",function(){s=!0}).appendTo(o),c=a('<div class="lindat-modal-close-button">&#xD7;</div>').on("click",n),a('<div class="lindat-modal-header"></div>').append(a("<h3></h3>").text(A).append(a("<p>Press <kbd>ctrl + c</kbd> to copy</p>"))).append(c).appendTo(r),l=a('<textarea readonly="readonly"></textarea>').on("mouseover",i).text(t),a('<div class="lindat-modal-body"></div>').append(l).appendTo(r),e&&a('<div class="lindat-modal-footer"></div>').text(e).appendTo(r),i(),d.modalInstance={element:r,overlay:o,destroy:n},a(document).on("keydown.lindat",function(A){27===A.keyCode&&n()}),a(window).on("hashchange.lindat",n))},o.prototype.destroy=function(){var A,t=this;for(t.modalInstance&&t.modalInstance.destroy(!0);A=t.requestQueue.pop();)A.abort()},A.exports=o}])});
//# sourceMappingURL=lindat-refbox.js.map