"use strict";(self.webpackChunkcar_rental_app=self.webpackChunkcar_rental_app||[]).push([[513],{362:function(n,e,t){t.d(e,{Z:function(){return o}});var r=t(184),o=function(){return(0,r.jsx)("div",{children:"Filterbar"})}},338:function(n,e,t){t.d(e,{Z:function(){return F}});var r,o,i=t(439),a=t(791),c=t(164),s=t(168),u=t(691),l=["title","titleId"];function d(){return d=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},d.apply(this,arguments)}function p(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}function f(n,e){var t=n.title,i=n.titleId,c=p(n,l);return a.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",ref:e,"aria-labelledby":i},c),t?a.createElement("title",{id:i},t):null,r||(r=a.createElement("path",{d:"M18 6L6 18",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),o||(o=a.createElement("path",{d:"M6 6L18 18",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})))}var h,v,x,g,b,j=a.forwardRef(f),m=(t.p,u.ZP.div(h||(h=(0,s.Z)(["\n  background-color: rgba(0, 0, 0, 0.2);\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])))),k=u.ZP.div(v||(v=(0,s.Z)(["\n  position: relative;\n  min-width: 200px;\n  min-height: 200px;\n  background-color: #fff;\n  border: 2px grey solid;\n  border-radius: 8px;\n\n  box-shadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.1);\n"]))),w=u.ZP.button(x||(x=(0,s.Z)(["\n  padding: 0;\n  position: absolute;\n  width: 24px;\n  height: 24px;\n  top: 14px;\n  right: 14px;\n  background: none;\n  border: none;\n  cursor: pointer;\n"]))),Z=(0,u.ZP)(j)(g||(g=(0,s.Z)(["\n  stroke: grey;\n  width: 24px;\n  height: 24px;\n  transition: stroke 250ms linear 0s;\n  :hover {\n    stroke: rgb(62, 133, 243);\n  }\n"]))),y=t(184),C=document.querySelector("#modal-root"),O=function(n){var e=n.car,t=n.onCloseModal,r=(0,a.useCallback)((function(n){"Escape"===n.code&&t()}),[t]);return(0,a.useEffect)((function(){return window.addEventListener("keydown",r),document.body.style.overflow="hidden",function(){window.removeEventListener("keydown",r),document.body.style.overflow="auto"}}),[r]),(0,c.createPortal)((0,y.jsx)(m,{onClick:function(n){n.currentTarget===n.target&&t()},children:(0,y.jsxs)(k,{children:[(0,y.jsxs)("div",{children:["Car modal ",e.id]}),(0,y.jsx)(w,{onClick:t,children:(0,y.jsx)(Z,{})})]})}),C)},S=t(109).Z.button(b||(b=(0,s.Z)(["\n  background-color: ",";\n"])),(function(n){return n.isFavorite?"green":"red"})),E=function(n){var e=n.car,t=n.setFavorite,r=(0,a.useState)(!1),o=(0,i.Z)(r,2),c=o[0],s=o[1],u=e.id,l=e.favorite,d=e.img,p=e.make,f=e.year,h=e.rentalPrice;return(0,y.jsxs)("div",{children:[(0,y.jsx)("span",{children:l}),(0,y.jsx)("img",{src:d}),(0,y.jsxs)("div",{children:[(0,y.jsxs)("span",{children:[p,", "]}),(0,y.jsx)("span",{children:f}),(0,y.jsx)("span",{children:h})]}),(0,y.jsx)(S,{type:"button",id:u,onClick:t,isFavorite:l,children:"Favorite"}),(0,y.jsx)("button",{type:"button",onClick:function(){s(!0)},children:"Learn more"}),c&&(0,y.jsx)(O,{car:e,onCloseModal:function(){console.log(1),s(!c)}})]})},F=function(n){var e=n.cars,t=n.setFavorite;return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("div",{children:"Cars for rent"}),(0,y.jsx)("ul",{children:e.map((function(n){return(0,y.jsx)("li",{children:(0,y.jsx)(E,{car:n,setFavorite:t})},n.id)}))})]})}},513:function(n,e,t){t.r(e),t.d(e,{default:function(){return f}});var r=t(165),o=t(683),i=t(861),a=t(439),c=t(791),s=t(243),u=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("".concat("https://6474cb4d7de100807b1bc2dc.mockapi.io","/cars"),{params:{page:e,limit:8}});case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=t(362),d=t(338),p=t(184),f=function(n){var e=n.cars,t=n.setCars,s=n.favoriteToggle,f=(0,c.useState)([]),h=(0,a.Z)(f,2),v=(h[0],h[1],(0,c.useState)(1)),x=(0,a.Z)(v,2),g=x[0],b=x[1],j=(0,c.useState)(null),m=(0,a.Z)(j,2),k=(m[0],m[1]),w=(0,c.useState)(!1),Z=(0,a.Z)(w,2),y=(Z[0],Z[1]),C=(0,c.useState)(!1),O=(0,a.Z)(C,2),S=(O[0],O[1]);return(0,c.useEffect)((function(){var n=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(){var e,i,a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,y(!0),e=localStorage.getItem("favs")?JSON.parse(localStorage.getItem("favs")).map((function(n){return n.id})):[],console.log(e),n.next=6,u(g);case 6:i=n.sent,a=i.data.map((function(n){return(0,o.Z)((0,o.Z)({},n),{},{favorite:!!e.includes(n.id)})})),t(a),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),k("Error happend");case 14:return n.prev=14,y(!1),S(!0),n.finish(14);case 18:case"end":return n.stop()}}),n,null,[[0,11,14,18]])})));return function(){return n.apply(this,arguments)}}();n()}),[g,t]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(l.Z,{}),(0,p.jsx)(d.Z,{cars:e,setFavorite:s}),e.length>0&&e.length%8===0&&(0,p.jsx)("button",{type:"button",onClick:function(){b(g+1)},children:"Load more"})]})}}}]);
//# sourceMappingURL=513.68c05808.chunk.js.map