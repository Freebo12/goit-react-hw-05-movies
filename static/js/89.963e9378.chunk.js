"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[89],{3478:function(n,e,t){t.d(e,{IT:function(){return i},JV:function(){return c},og:function(){return r},uj:function(){return p},zY:function(){return a}});var o="34a5fbd438003973ca29c1eb4275da52",r=function(){return fetch("".concat("https://api.themoviedb.org/3/trending/all/day","?&api_key=").concat(o))},i=function(n){return fetch("".concat("https://api.themoviedb.org/3/search/movie","?api_key=").concat(o,"&language=en-US&page=1&include_adult=false&query=").concat(n))},a=function(n){return fetch("".concat("https://api.themoviedb.org/3/movie/").concat(n,"?api_key=").concat(o,"&language=en-US"))},p=function(n){return fetch("".concat("https://api.themoviedb.org/3/movie","/").concat(n,"\n  /credits?api_key=").concat(o,"&language=en-US"))},c=function(n){return fetch("".concat("https://api.themoviedb.org/3/movie","/").concat(n,"/reviews?api_key=").concat(o,"&language=en-US&page=1"))}},89:function(n,e,t){t.r(e),t.d(e,{default:function(){return Y}});var o,r,i,a,p,c,x,s,d,l,h,g=t(9439),u=t(2791),f=t(7689),b=t(3478),v=t(168),m=t(1087),w=t(7402),j=w.Z.div(o||(o=(0,v.Z)(["\n  display: flex;\n"]))),k=w.Z.div(r||(r=(0,v.Z)(["\n  position: relative;\n  width: 50%;\n"]))),Z=w.Z.button(i||(i=(0,v.Z)(["\n  position: absolute;\n  top: 5%;\n  left: 15%;\n  transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n  text-align: center;\n  width: 130px;\n  height: 40px;\n  color: #fff;\n  border-radius: 5px;\n  padding: 5px 10px;\n  font-family: 'Lato', sans-serif;\n  font-weight: 500;\n  background: transparent;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),\n    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);\n  outline: none;\n  border: none;\n  background: rgb(255, 151, 0);\n  border: none;\n  z-index: 1;\n  :hover {\n    box-shadow: 4px 4px 6px 0 rgba(255, 255, 255, 0.5),\n      -4px -4px 6px 0 rgba(116, 125, 136, 0.5),\n      inset -4px -4px 6px 0 rgba(255, 255, 255, 0.2),\n      inset 4px 4px 6px 0 rgba(0, 0, 0, 0.4);\n  }\n\n  :after {\n    position: absolute;\n    content: '';\n    width: 100%;\n    height: 0;\n    top: 0;\n    left: 0;\n    z-index: -1;\n    border-radius: 5px;\n    background-color: #ff8c00;\n    background: linear-gradient(0deg, #ffb703, #ffb703, #fb5607);\n    box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5) 7px 7px 20px 0px\n        rgba(0, 0, 0, 0.1),\n      4px 4px 5px 0px rgba(0, 0, 0, 0.1);\n    transition: all 0.3s ease;\n  }\n  :hover {\n    color: #000;\n  }\n  :hover:after {\n    top: auto;\n    bottom: 0;\n    height: 100%;\n  }\n  :active {\n    top: 2px;\n  }\n"]))),_=w.Z.h2(a||(a=(0,v.Z)(["\n  color: rgb(255, 151, 0);\n"]))),y=w.Z.h3(p||(p=(0,v.Z)(["\n  color: rgb(255, 151, 0);\n"]))),S=w.Z.p(c||(c=(0,v.Z)(["\n  color: white;\n"]))),z=w.Z.ul(x||(x=(0,v.Z)(["\n  list-style-position: inside;\n  column-count: 1;\n  list-style-type: decimal;\n  height: 200px;\n  padding-left: 170px;\n"]))),U=w.Z.li(s||(s=(0,v.Z)(["\n  border-radius: 4px;\n  width: 400px;\n  position: relative;\n  display: block;\n  margin-bottom: 0.25rem;\n  padding: 0.325rem 0.825rem 0.325rem 1.325rem;\n  color: #fff;\n  background: #ff8c00;\n  :before {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 0;\n    bottom: 0;\n    width: 0.5rem;\n    background: white;\n  }\n"]))),L=t(8789),C=t(7117),O=t(184),I=(0,L.ZP)(m.OL)(d||(d=(0,v.Z)(["\n  color: white;\n  width: 130px;\n  height: 40px;\n  font-weight: 700;\n  :hover {\n    color: black;\n  }\n"]))),R=function(n){var e,t,o=n.detailMovie,r=(0,f.TH)(),i=(0,u.useRef)(null!==(e=null===(t=r.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/");return(0,O.jsxs)(j,{children:[(0,O.jsxs)(k,{children:[(0,O.jsx)("img",{src:null!==o.poster_path&&void 0!==o.poster_path?"https://image.tmdb.org/t/p/original/".concat(o.poster_path):"".concat(C),alt:o.id,width:"500px",height:"auto"}),(0,O.jsx)(Z,{children:(0,O.jsx)(I,{to:i.current,children:"back"})})]}),(0,O.jsxs)("div",{children:[(0,O.jsxs)(_,{children:[o.title,"(",o.release_date,")"]}),(0,O.jsx)(y,{children:"User Score"}),(0,O.jsxs)(S,{children:[o.vote_average,"%"]}),(0,O.jsx)(y,{children:"Overview"}),(0,O.jsx)(S,{children:o.overview}),(0,O.jsx)(y,{children:"Genres"}),void 0!==o.genres&&(0,O.jsx)(z,{children:o.genres.map((function(n){return(0,O.jsx)(U,{children:n.name},n.id)}))})]})]})},M=w.Z.button(l||(l=(0,v.Z)(["\n  text-align: center;\n\n  margin-right: 40px;\n  width: 130px;\n  height: 30px;\n  color: #fff;\n  border-radius: 5px;\n  padding: 10px 25px;\n  font-family: 'Lato', sans-serif;\n  font-weight: 500;\n  background: transparent;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  position: relative;\n  display: inline-block;\n  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),\n    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);\n  outline: none;\n  border: none;\n  background: rgb(255, 151, 0);\n  border: none;\n  z-index: 1;\n  :hover {\n    box-shadow: 4px 4px 6px 0 rgba(255, 255, 255, 0.5),\n      -4px -4px 6px 0 rgba(116, 125, 136, 0.5),\n      inset -4px -4px 6px 0 rgba(255, 255, 255, 0.2),\n      inset 4px 4px 6px 0 rgba(0, 0, 0, 0.4);\n  }\n\n  :after {\n    position: absolute;\n    content: '';\n    width: 100%;\n    height: 0;\n    top: 0;\n    left: 0;\n    z-index: -1;\n    border-radius: 5px;\n    background-color: #ff8c00;\n    background: linear-gradient(0deg, #ffb703, #ffb703, #fb5607);\n    box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5) 7px 7px 20px 0px\n        rgba(0, 0, 0, 0.1),\n      4px 4px 5px 0px rgba(0, 0, 0, 0.1);\n    transition: all 0.3s ease;\n  }\n  :hover {\n    color: #000;\n  }\n  :hover:after {\n    top: auto;\n    bottom: 0;\n    height: 100%;\n  }\n  :active {\n    top: 2px;\n  }\n"]))),P=(0,L.ZP)(m.OL)(h||(h=(0,v.Z)(["\n  color: grey;\n  width: 130px;\n  height: 40px;\n  font-weight: 400;\n  &.active {\n    color: black;\n    font-weight: 700;\n  }\n"]))),T=function(){return(0,O.jsxs)("ul",{children:[(0,O.jsx)("li",{children:(0,O.jsx)(M,{children:(0,O.jsx)(P,{to:"Cast",children:"Cast"})})}),(0,O.jsx)("li",{children:(0,O.jsx)(M,{children:(0,O.jsx)(P,{to:"Reviews",children:"Review"})})})]})},Y=function(){var n=(0,f.UO)().movieId,e=(0,u.useState)({}),t=(0,g.Z)(e,2),o=t[0],r=t[1];return(0,u.useEffect)((function(){(0,b.zY)(n).then((function(n){return n.json()})).then((function(n){r(n)}))}),[n]),(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(R,{detailMovie:o}),(0,O.jsx)(T,{}),(0,O.jsx)(u.Suspense,{fallback:(0,O.jsx)("div",{children:"Loading..."}),children:(0,O.jsx)(f.j3,{})})]})}},7117:function(n,e,t){n.exports=t.p+"static/media/Image_not_available.340253f993a2e5ca3a42.png"}}]);
//# sourceMappingURL=89.963e9378.chunk.js.map