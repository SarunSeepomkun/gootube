(this.webpackJsonpgootube=this.webpackJsonpgootube||[]).push([[0],{16:function(e,t,n){e.exports=n(41)},21:function(e,t,n){},23:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(14),c=n.n(o),u=(n(21),n(2)),i=n.n(u),s=n(4),l=n(3),m=(n(23),n(15)),p=n.n(m),d=function(){var e=Object(s.a)(i.a.mark((function e(t){var n,a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://www.googleapis.com/youtube/v3/search","AIzaSyDB4Hd9ZOdpN5q6SEAxZ0NJ1yrqLCNytZs",n=t,e.prev=3,console.log("youtube.GetYoutube"),a="".concat("https://www.googleapis.com/youtube/v3/search","?part=snippet&maxResults=5&q=").concat(n,"&key=").concat("AIzaSyDB4Hd9ZOdpN5q6SEAxZ0NJ1yrqLCNytZs"),r=p.a.get(a),console.log(a),e.abrupt("return",r);case 11:return e.prev=11,e.t0=e.catch(3),e.abrupt("return","line 12 youtube.GetYoutube() , "+e.t0);case 14:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t){return e.apply(this,arguments)}}();var v=function(e){var t=e.video,n="";return n=t?"https://www.youtube.com/embed/".concat(t.id.videoId):"",console.log(t),r.a.createElement("div",{className:"selectedVideo"},t?r.a.createElement("iframe",{frameBorder:"0",height:"100%",width:"100%",title:"Video Player",src:n}):"")};var h=function(e){var t=e.onSubmit,n=Object(a.useState)(""),o=Object(l.a)(n,2),c=o[0],u=o[1];return r.a.createElement("div",null,r.a.createElement("input",{type:"text",placeholder:"Search...",value:c,onChange:function(e){u(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&t(c)}}),r.a.createElement("button",{onClick:t},"Get"))};var b=function(e){var t=e.videos;return r.a.createElement("div",null,t?t.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("p",null,e.snippet.title),r.a.createElement("img",{alt:"thumbnail",src:e.snippet.thumbnails.medium.url}))})):"")};var f=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(null),u=Object(l.a)(c,2),m=u[0],p=u[1],f=function(){var e=Object(s.a)(i.a.mark((function e(t){var n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("App.handleSearch"),e.next=3,d(t);case 3:n=e.sent,a=n.data.items,o(a),p(a[0]);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){f()}),[]),r.a.createElement("div",{className:"container"},"GooTube",r.a.createElement(h,{className:"searchBar",onSubmit:f}),r.a.createElement(v,{video:m}),r.a.createElement(b,{videos:n}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.a377133d.chunk.js.map