"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[168],{168:function(e,n,t){t.r(n),t.d(n,{Reviews:function(){return w}});var r=t(861),c=t(439),a=t(311),u=t.n(a),s=t(546),o=t(791),i="Reviews_listItem__dF9oT",f="Reviews_author__CqYAZ",l="Reviews_text__EqLvx",h="Reviews_rateCard__S0EOs",p="Reviews_rate__P43l-",v="Reviews_reviewsTitle__mxqAS",d=t(184),w=function(e){var n=(0,o.useState)([]),t=(0,c.Z)(n,2),a=t[0],w=t[1],x=e.isVisible,m=e.movieId;if((0,o.useEffect)((function(){})),(0,o.useEffect)((function(){x&&(0,r.Z)(u().mark((function e(){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.tx)(m);case 3:n=e.sent,w(n.results),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0,"error w useEffect");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}),[x,m]),x)return(0,d.jsxs)("div",{children:[(0,d.jsx)("h3",{className:v,children:"Reviews"}),(0,d.jsxs)("ul",{children:[x?a.map((function(e){return(0,d.jsxs)("li",{className:i,children:[(0,d.jsxs)("p",{className:f,children:[e.author,":"]}),(0,d.jsx)("p",{className:l,children:e.content}),(0,d.jsxs)("span",{className:h,children:[(0,d.jsx)("span",{className:p,children:"Rate"}),": ",e.author_details.rating," / 10"]})]},e.id)})):null,x&&0===a.length?(0,d.jsx)("p",{children:"There is no reviews"}):null]})]})}},546:function(e,n,t){t.d(n,{Df:function(){return o},d0:function(){return f},q:function(){return i},tx:function(){return h},zv:function(){return l}});var r=t(861),c=t(311),a=t.n(c),u="https://api.themoviedb.org/3",s={method:"GET",headers:{accept:"application/json",Authorization:"Bearer ".concat("eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4Y2U0ZDYwYWViNTBkNzkxODUxMjAwOWYzNjAwY2FlMSIsInN1YiI6IjY0ZTkxN2Y4NTI1OGFlMDBlYWE0Mjg5ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fnLQ8_hVx7HTWQIXzGqsFt0wS1X5a1POKEPBc1Xl7ZY")}},o=function(){var e=(0,r.Z)(a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(u,"/trending/all/day?language=en-US"),s).then((function(e){return e.json()})).catch((function(e){return console.error(e)}));case 2:return n=e.sent,e.abrupt("return",n.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,r.Z)(a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(u,"/search/movie?query=").concat(n,"&include_adult=false&language=en-US&page=1"),s).then((function(e){return e.json()})).catch((function(e){return console.error(e)}));case 2:return t=e.sent,e.abrupt("return",t.results);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(u,"/movie/").concat(n,"?language=en-US"),s).then((function(e){return e.json()})).catch((function(e){return console.error(e)}));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(a().mark((function e(n){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(u,"/movie/").concat(n,"/credits?language=en-US"),s);case 3:return t=e.sent,e.next=6,t.json();case 6:return r=e.sent,e.abrupt("return",r);case 10:throw e.prev=10,e.t0=e.catch(0),console.log(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(n){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(a().mark((function e(n){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(u,"/movie/").concat(n,"/reviews?language=en-US&page=1"),s);case 3:return t=e.sent,e.next=6,t.json();case 6:return r=e.sent,e.abrupt("return",r);case 10:throw e.prev=10,e.t0=e.catch(0),console.error(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(n){return e.apply(this,arguments)}}()},861:function(e,n,t){function r(e,n,t,r,c,a,u){try{var s=e[a](u),o=s.value}catch(i){return void t(i)}s.done?n(o):Promise.resolve(o).then(r,c)}function c(e){return function(){var n=this,t=arguments;return new Promise((function(c,a){var u=e.apply(n,t);function s(e){r(u,c,a,s,o,"next",e)}function o(e){r(u,c,a,s,o,"throw",e)}s(void 0)}))}}t.d(n,{Z:function(){return c}})}}]);
//# sourceMappingURL=168.2d851ee6.chunk.js.map