"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[397,76,168],{76:function(e,t,n){n.r(t),n.d(t,{Cast:function(){return _}});var r=n(861),s=n(439),a=n(311),i=n.n(a),c=n(546),o=n(791),u="Cast_castCard__m8Shz",l="Cast_castTitle__eoJbw",v="Cast_castList__ARoWn",d="Cast_listItem__UvJjd",h="Cast_actorName__XabVA",f=n(742),p=n(184),_=function(e){var t=(0,o.useState)([]),n=(0,s.Z)(t,2),a=n[0],_=n[1],m=e.isVisible,x=e.movieId;if((0,o.useEffect)((function(){m&&(0,r.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,c.zv)(x);case 3:t=e.sent,_(t.cast),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0,"error w useEffect");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}),[m,x]),m)return(0,p.jsxs)("div",{className:u,children:[(0,p.jsx)("h3",{className:l,children:"Cast"}),(0,p.jsxs)("ul",{className:v,children:[m?a.slice(0,20).map((function(e){return(0,p.jsxs)("li",{className:d,children:[(0,p.jsx)("img",{width:"150",src:e.profile_path?"https://image.tmdb.org/t/p/original"+e.profile_path:"".concat(f),alt:e.original_name}),(0,p.jsx)("p",{className:h,children:e.original_name}),(0,p.jsxs)("span",{children:[(0,p.jsx)("span",{children:"as"})," ",e.character]})]},e.id)})):null,m&&0===a.length?(0,p.jsx)("p",{children:"There is no information about cast"}):null]})]})}},168:function(e,t,n){n.r(t),n.d(t,{Reviews:function(){return _}});var r=n(861),s=n(439),a=n(311),i=n.n(a),c=n(546),o=n(791),u="Reviews_listItem__dF9oT",l="Reviews_author__CqYAZ",v="Reviews_text__EqLvx",d="Reviews_rateCard__S0EOs",h="Reviews_rate__P43l-",f="Reviews_reviewsTitle__mxqAS",p=n(184),_=function(e){var t=(0,o.useState)([]),n=(0,s.Z)(t,2),a=n[0],_=n[1],m=e.isVisible,x=e.movieId;if((0,o.useEffect)((function(){})),(0,o.useEffect)((function(){m&&(0,r.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,c.tx)(x);case 3:t=e.sent,_(t.results),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0,"error w useEffect");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}),[m,x]),m)return(0,p.jsxs)("div",{children:[(0,p.jsx)("h3",{className:f,children:"Reviews"}),(0,p.jsxs)("ul",{children:[m?a.map((function(e){return(0,p.jsxs)("li",{className:u,children:[(0,p.jsxs)("p",{className:l,children:[e.author,":"]}),(0,p.jsx)("p",{className:v,children:e.content}),(0,p.jsxs)("span",{className:d,children:[(0,p.jsx)("span",{className:h,children:"Rate"}),": ",e.author_details.rating," / 10"]})]},e.id)})):null,m&&0===a.length?(0,p.jsx)("p",{children:"There is no reviews"}):null]})]})}},397:function(e,t,n){n.r(t),n.d(t,{default:function(){return C}});var r=n(861),s=n(439),a=n(311),i=n.n(a),c=n(689),o={hidden:"MovieDetails_hidden__vSQgt",detailsCard:"MovieDetails_detailsCard__vGuvm",movieCard:"MovieDetails_movieCard__LWJIF",btn:"MovieDetails_btn__tCU2l",goBackButton:"MovieDetails_goBackButton__uWJv2",overview:"MovieDetails_overview__EVogb",overviewText:"MovieDetails_overviewText__aIB73",title:"MovieDetails_title__RBndM",userScore:"MovieDetails_userScore__cWf6H",genresCard:"MovieDetails_genresCard__9pZqK",genres:"MovieDetails_genres__80iSK",genresList:"MovieDetails_genresList__iljfW",additionalCard:"MovieDetails_additionalCard__SiHRQ"},u=n(791),l=n(546),v=n(168),d=n(76),h=n(742),f=n(184),p=function(){var e=(0,u.useState)(),t=(0,s.Z)(e,2),n=t[0],a=t[1],p=(0,u.useState)(!1),_=(0,s.Z)(p,2),m=_[0],x=_[1],j=(0,u.useState)(!1),w=(0,s.Z)(j,2),g=w[0],N=w[1],b=(0,c.TH)(),C=(0,c.s0)(),k=b.state;if((0,u.useEffect)((function(){k&&(0,r.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,l.d0)(k);case 3:t=e.sent,a(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}),[k]),n)return(0,f.jsxs)("div",{className:b.search==="?"+k?"":o.hidden,children:[(0,f.jsx)("button",{className:o.goBackButton,onClick:function(){x(!1),N(!1),C(-1)},children:"\u2b05 Go back"}),(0,f.jsxs)("div",{className:o.movieCard,children:[(0,f.jsx)("img",{width:"300",alt:n.title,src:n.poster_path?"https://image.tmdb.org/t/p/w500"+n.poster_path:"".concat(h)}),(0,f.jsxs)("div",{className:o.detailsCard,children:[(0,f.jsx)("h3",{className:o.title,children:n.original_title}),(0,f.jsxs)("span",{className:o.userScore,children:["User Score:",n.vote_average>0?" ".concat(10*n.vote_average.toFixed(1),"% positive feedback"):null]}),(0,f.jsx)("p",{className:o.overview,children:"Overview"}),(0,f.jsx)("p",{className:o.overviewText,children:n.overview}),(0,f.jsxs)("div",{className:o.genresCard,children:[(0,f.jsx)("p",{className:o.genres,children:"Genres:"}),(0,f.jsx)("ul",{className:o.genresList,children:n.genres.length>0?n.genres.map((function(e){return(0,f.jsx)("span",{className:o.genre,children:e.name},e.id)})):null})]})]})]}),(0,f.jsxs)("div",{className:o.additionalCard,children:[(0,f.jsx)("p",{children:"Additional informations"}),(0,f.jsx)("span",{className:o.btn,onClick:function(){x(!m),!0===g&&N(!1)},children:"Cast"}),(0,f.jsx)("span",{className:o.btn,onClick:function(){N(!g),!0===m&&x(!1)},children:"Reviews"})]}),(0,f.jsx)(d.Cast,{movieId:k,isVisible:m}),(0,f.jsx)(v.Reviews,{movieId:k,isVisible:g})]})},_=n(87),m="MoviesList_hidden__F-Q-G",x=function(){var e=(0,c.TH)(),t=(0,u.useState)([]),n=(0,s.Z)(t,2),a=n[0],o=n[1],v=(0,_.lr)(),d=(0,s.Z)(v,1)[0],h=e.state,p=d.get("movie");return(0,u.useEffect)((function(){p&&(0,r.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,l.q)(p);case 3:t=e.sent,o(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}),[p]),(0,f.jsx)("div",{className:e.search==="?".concat(h)?m:"",children:(0,f.jsx)("ul",{children:a.map((function(e){return(0,f.jsx)(_.rU,{style:{display:"flex",padding:"5px"},to:"/goit-react-hw-05-movies/movies?"+e.id,state:e.id,children:e.title||e.name},e.id)}))})})},j="MoviesSearch_hidden__wNb83",w="MoviesSearch_searchForm__-nJ38",g="MoviesSearch_input__V0qlz",N="MoviesSearch_button__1NvzC",b=function(){var e=(0,u.useState)(""),t=(0,s.Z)(e,2),n=t[0],a=t[1],o=(0,_.lr)(),l=(0,s.Z)(o,2),v=l[0],d=l[1],h=(0,c.TH)(),p=h.state,m=function(){var e=(0,r.Z)(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),d({movie:n.toLocaleLowerCase()}),!(v>0)){e.next=4;break}return e.abrupt("return");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,f.jsx)("div",{className:h.search==="?"+p?j:"",children:(0,f.jsxs)("form",{className:w,onSubmit:m,children:[(0,f.jsx)("input",{className:g,placeholder:"Type your movie name",type:"text",value:n,onChange:function(e){a(e.target.value)}}),(0,f.jsx)("button",{className:N,onClick:function(e){},type:"submit",children:"\ud83d\udd0d"})]})})},C=function(){return(0,f.jsxs)("div",{children:[(0,f.jsx)(b,{}),(0,f.jsx)(x,{}),(0,f.jsx)(p,{})]})}},546:function(e,t,n){n.d(t,{Df:function(){return o},d0:function(){return l},q:function(){return u},tx:function(){return d},zv:function(){return v}});var r=n(861),s=n(311),a=n.n(s),i="https://api.themoviedb.org/3",c={method:"GET",headers:{accept:"application/json",Authorization:"Bearer ".concat("eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4Y2U0ZDYwYWViNTBkNzkxODUxMjAwOWYzNjAwY2FlMSIsInN1YiI6IjY0ZTkxN2Y4NTI1OGFlMDBlYWE0Mjg5ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fnLQ8_hVx7HTWQIXzGqsFt0wS1X5a1POKEPBc1Xl7ZY")}},o=function(){var e=(0,r.Z)(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(i,"/trending/all/day?language=en-US"),c).then((function(e){return e.json()})).catch((function(e){return console.error(e)}));case 2:return t=e.sent,e.abrupt("return",t.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(i,"/search/movie?query=").concat(t,"&include_adult=false&language=en-US&page=1"),c).then((function(e){return e.json()})).catch((function(e){return console.error(e)}));case 2:return n=e.sent,e.abrupt("return",n.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(i,"/movie/").concat(t,"?language=en-US"),c).then((function(e){return e.json()})).catch((function(e){return console.error(e)}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(i,"/movie/").concat(t,"/credits?language=en-US"),c);case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,e.abrupt("return",r);case 10:throw e.prev=10,e.t0=e.catch(0),console.log(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(i,"/movie/").concat(t,"/reviews?language=en-US&page=1"),c);case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,e.abrupt("return",r);case 10:throw e.prev=10,e.t0=e.catch(0),console.error(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()},742:function(e,t,n){e.exports=n.p+"static/media/No_image_poster.68ae350692995e841a18.png"},861:function(e,t,n){function r(e,t,n,r,s,a,i){try{var c=e[a](i),o=c.value}catch(u){return void n(u)}c.done?t(o):Promise.resolve(o).then(r,s)}function s(e){return function(){var t=this,n=arguments;return new Promise((function(s,a){var i=e.apply(t,n);function c(e){r(i,s,a,c,o,"next",e)}function o(e){r(i,s,a,c,o,"throw",e)}c(void 0)}))}}n.d(t,{Z:function(){return s}})}}]);
//# sourceMappingURL=397.b6cde1b0.chunk.js.map