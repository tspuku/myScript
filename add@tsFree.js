/* Show/Hide [ Header,Footer ] */
prevScrollpos=window.pageYOffset,window.onscroll=function(){var e=window.pageYOffset;prevScrollpos>e?(qS("header").style.top="15px",qS(".Mobile_Menu_Widget").style.bottom="15px"):(qS("header").style.top="-60px",qS(".Mobile_Menu_Widget").style.bottom="-60px"),prevScrollpos=e};
/* Image */
qSA(".onPost .postEntry img").forEach(a=>{aC(a,"lazyImg"),sAt(a,"s",a.src.replace(/\/s[0-9]+(\-c)?/,"/s1280-rw-e30")),sAt(a,"src","data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="),sAt(a,"alt",TS.Ts.pageTitle),sAt(a,"onclick","return false")});function wrap(t,r,A){qSA(r).forEach(a=>{a.outerHTML=t+a.outerHTML+A})}wrap('<div class="zmImg">',".postEntry img","</div>");qSA(".zmImg").forEach(a=>{a.onclick=function(){tC(this,"s"),event.preventDefault()}});
/* Lazy YouTube */
function YTPlayer(){qSA(".YT-Player").forEach(e=>{var a=gAt(e,"videoID"),i=cE("div");sAt(i,"videoID",a);var r=cE("img");r.alt="",r.src="https://i.ytimg.com/vi/"+a+"/hqdefault.jpg",i.appendChild(r);var l=cE("div");sAt(l,"class","Play"),i.appendChild(l),i.onclick=function(){var e=cE("iframe");e.src="https://www.youtube.com/embed/"+a+"?autoplay=1&rel=0",e.frameborder="0",e.allowfullscreen=!0,e.allow="accelerometer;autoplay;encrypted-media;gyroscope;picture-in-picture",this.parentNode.replaceChild(e,this)},e.appendChild(i)})}YTPlayer();
/* Open Share Navigation */
function openShare(){navigator.share({title:TS.Ts.pageTitle,text:TS.Ts.pageTitle,url:TS.Ts.pageURL})};
/* Additional JS */
function tsLazyJs(){"true"==isSingleItem&&ldCSS("https://cdn.jsdelivr.net/gh/itsPuku/ts/tableofContent.css","toc-css",function(){ldJS("https://cdn.jsdelivr.net/gh/itsPuku/ts/tableofContent.js","toc-js",!0,"head",function(){new TableOfContents({from:qS("#postBody"),to:qS("#tocContent")}).generateToc()})}),"true"==isSingleItem&&ldCSS("https://cdn.jsdelivr.net/gh/itsPuku/ts/relatedPost.css","rPost-css",function(){ldJS("https://cdn.jsdelivr.net/gh/itsPuku/ts/relatedPost.js","rPost-js",!0,"head")}),"true"!=isError&&"lazy"==TS.adItems.loadType&&ldJS(TS.adItems.adPubURL,"ad-js",!0,"body"),qSA(".lazyImg,.lazyComnt").forEach(s=>{sAt(s,"src",gAt(s,"s"))}),qSA(".lazyDiv").forEach(s=>{sAt(s,"style",gAt(s,"bg"))})}var tsLazyLoad=!1;aE(window,"scroll",function(){(0!=document.documentElement.scrollTop&&!1===tsLazyLoad||0!=document.body.scrollTop&&!1===tsLazyLoad)&&(null==gLS("Lz_Js")&&(tsLazyJs(),sLS("Lz_Js",1)),"true"!=isError&&"scroll"==TS.adItems.loadType&&ldJS(TS.adItems.adPubURL,"ad-js",!0,"body"),tsLazyLoad=!0)},!0),aE(document.body,"click",d=>{null==gLS("Lz_Js")&&(tsLazyJs(),sLS("Lz_Js",1))}),gLS("Lz_Js")&&tsLazyJs();
