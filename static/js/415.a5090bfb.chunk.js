"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{713:function(n,t,r){r.d(t,{Fb:function(){return s},M1:function(){return d},TP:function(){return f},V0:function(){return v},tx:function(){return x}});var e=r(861),a=r(757),c=r.n(a),i=r(294),u="https://api.themoviedb.org/3",o="55a48febb45b5475689763bd95744d57";function s(){return p.apply(this,arguments)}function p(){return(p=(0,e.Z)(c().mark((function n(){var t,r,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(u,"/trending/movie/day?api_key=").concat(o),n.next=3,i.Z.get(t);case 3:return r=n.sent,e=r.data,n.abrupt("return",e.results);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return l.apply(this,arguments)}function l(){return(l=(0,e.Z)(c().mark((function n(t){var r,e,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(u,"/movie/").concat(t,"?api_key=").concat(o),n.next=3,i.Z.get(r);case 3:return e=n.sent,a=e.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return h.apply(this,arguments)}function h(){return(h=(0,e.Z)(c().mark((function n(t){var r,e,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(u,"/movie/").concat(t,"/credits?api_key=").concat(o),n.next=3,i.Z.get(r);case 3:return e=n.sent,a=e.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return m.apply(this,arguments)}function m(){return(m=(0,e.Z)(c().mark((function n(t){var r,e,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(u,"/movie/").concat(t,"/reviews?api_key=").concat(o),n.next=3,i.Z.get(r);case 3:return e=n.sent,a=e.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return g.apply(this,arguments)}function g(){return(g=(0,e.Z)(c().mark((function n(t){var r,e,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(u,"/search/movie?api_key=").concat(o,"&query=").concat(t),n.next=3,i.Z.get(r);case 3:return e=n.sent,a=e.data,n.abrupt("return",a.results);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},454:function(n,t,r){r.d(t,{Z:function(){return o}});var e,a=r(137),c=r(168),i=r(924).ZP.div(e||(e=(0,c.Z)(["\n  margin-top: 50vh;\n  text-align: center;\n"]))),u=r(184),o=function(){return(0,u.jsx)(i,{children:(0,u.jsx)(a.rj,{visible:!0,height:"80",width:"80",color:"#3f51b5",ariaLabel:"grid-loading",radius:"12.5",wrapperStyle:{},wrapperClass:"grid-wrapper"})})}},634:function(n,t,r){r.d(t,{Z:function(){return v}});var e,a,c,i,u=r(689),o=r(87),s=r(206),p=r(168),f=r(924),l=f.ZP.ul(e||(e=(0,p.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 20px;\n  margin-top: 16px;\n  margin-bottom: 0;\n  padding: 0;\n  margin-left: auto;\n  margin-right: auto;\n  color: #111111;\n  list-style: none;\n"]))),d=f.ZP.li(a||(a=(0,p.Z)(["\n  a {\n    color: #111111;\n  }\n"]))),h=f.ZP.div(c||(c=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  text-align: center;\n  width: 200px;\n  height: 340px;\n  border-radius: 15px;\n\n  :hover {\n    scale: 1.05;\n  }\n"]))),x=f.ZP.img(i||(i=(0,p.Z)(["\n  width: 100%;\n  height: 250px;\n  object-fit: cover;\n  border-radius: 10px;\n"]))),m=r(184),v=function(n){var t=n.movies,r=(0,u.TH)();return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(l,{children:t.map((function(n){var t=n.id,e=n.title,a=n.poster_path;return(0,m.jsx)(d,{children:(0,m.jsx)(o.rU,{to:"/movies/".concat(t),state:{from:r},children:(0,m.jsxs)(h,{children:[a?(0,m.jsx)(x,{src:"https://image.tmdb.org/t/p/w300".concat(a),alt:e}):(0,m.jsx)(s.ofX,{size:200}),e]})})},t)}))})})}},415:function(n,t,r){r.r(t);var e=r(439),a=r(713),c=r(791),i=r(634),u=r(689),o=r(454),s=r(184);t.default=function(){var n=(0,c.useState)([]),t=(0,e.Z)(n,2),r=t[0],p=t[1],f=(0,c.useState)(!1),l=(0,e.Z)(f,2),d=l[0],h=l[1],x=(0,c.useState)(""),m=(0,e.Z)(x,2),v=m[0],g=m[1];return(0,c.useEffect)((function(){h(!0),(0,a.Fb)().then(p).catch((function(n){g(n)})).finally((function(){return h(!1)}))}),[]),(0,s.jsxs)(s.Fragment,{children:[v&&(0,s.jsx)("h3",{children:v.message}),(0,s.jsx)("h1",{children:"Trending today"}),(0,s.jsx)(i.Z,{movies:r,children:(0,s.jsx)(u.j3,{})}),d&&(0,s.jsx)(o.Z,{})]})}}}]);
//# sourceMappingURL=415.a5090bfb.chunk.js.map