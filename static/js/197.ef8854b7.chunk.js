"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[197],{1197:function(n,t,e){e.r(t),e.d(t,{default:function(){return _}});var c,a,r,i,o=e(9439),u=e(7689),p=e(3478),h=e(2791),f=e(168),l=e(7402),s=l.Z.ul(c||(c=(0,f.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  align-items: center;\n  justify-content: center;\n"]))),d=l.Z.div(a||(a=(0,f.Z)(["\n  width: 200px;\n  height: 300px;\n"]))),g=l.Z.p(r||(r=(0,f.Z)(["\n  color: white;\n"]))),m=l.Z.p(i||(i=(0,f.Z)(["\n  color: orange;\n"]))),v=e(8355),x=e(184),j=function(n){var t=n.detail;return void 0!==t?(0,x.jsx)(s,{children:t.map((function(n){return(0,x.jsx)("li",{children:(0,x.jsxs)(d,{children:[(0,x.jsx)(g,{children:n.name}),(0,x.jsx)("img",{src:null!==n.profile_path?"https://image.tmdb.org/t/p/original/".concat(n.profile_path):v,alt:n.name,width:"150px",height:"200px"}),(0,x.jsxs)(m,{children:["Character:",n.character]})]})},n.id)}))}):(0,x.jsx)("p",{children:"Actors not Found..."})},_=function(){var n=(0,u.UO)().movieId,t=(0,h.useState)([]),e=(0,o.Z)(t,2),c=e[0],a=e[1];return(0,h.useEffect)((function(){(0,p.uj)(n).then((function(n){return n.json()})).then((function(n){return a(n.cast)}))}),[n]),(0,x.jsx)(j,{detail:c})}},3478:function(n,t,e){e.d(t,{IT:function(){return r},JV:function(){return u},og:function(){return a},uj:function(){return o},zY:function(){return i}});var c="34a5fbd438003973ca29c1eb4275da52",a=function(){return fetch("".concat("https://api.themoviedb.org/3/trending/all/day","?&api_key=").concat(c))},r=function(n){return fetch("".concat("https://api.themoviedb.org/3/search/movie","?api_key=").concat(c,"&language=en-US&page=1&include_adult=false&query=").concat(n))},i=function(n){return fetch("".concat("https://api.themoviedb.org/3/movie/").concat(n,"?api_key=").concat(c,"&language=en-US"))},o=function(n){return fetch("".concat("https://api.themoviedb.org/3/movie","/").concat(n,"\n  /credits?api_key=").concat(c,"&language=en-US"))},u=function(n){return fetch("".concat("https://api.themoviedb.org/3/movie","/").concat(n,"/reviews?api_key=").concat(c,"&language=en-US&page=1"))}},8355:function(n,t,e){n.exports=e.p+"static/media/NotFound.22bff5ce129d7674c04e.jpg"}}]);
//# sourceMappingURL=197.ef8854b7.chunk.js.map