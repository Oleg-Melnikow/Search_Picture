(this["webpackJsonpsearch-picture"]=this["webpackJsonpsearch-picture"]||[]).push([[0],{105:function(e,t,n){},106:function(e,t,n){},132:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(10),r=n.n(a),o=(n(105),n(106),n(171)),i=n(175),s=n(133),u=n(176),l=n(177),j=n(26),d=n(4);function b(){return Object(d.jsx)("div",{style:{flexGrow:1},children:Object(d.jsx)(o.a,{position:"static",children:Object(d.jsxs)(i.a,{children:[Object(d.jsx)(j.b,{to:"/search",style:{color:"inherit"},children:Object(d.jsx)(s.a,{variant:"h6",children:"Image Finder"})}),Object(d.jsx)("div",{style:{flexGrow:1}}),Object(d.jsx)(u.a,{color:"inherit",children:Object(d.jsx)(l.a,{})})]})})})}var O=n(192),h=n(178);function p(){return Object(d.jsx)("div",{style:{flexGrow:1},children:Object(d.jsx)(o.a,{position:"static",children:Object(d.jsx)(i.a,{children:Object(d.jsx)(s.a,{variant:"h6",style:{flexGrow:1},children:"Copyrights"})})})})}var f=n(179),x=n(180),g=n(57),m=n.n(g);function v(){return Object(d.jsx)("div",{className:m.a.menu,children:Object(d.jsxs)(h.a,{container:!0,direction:"column",alignItems:"center",children:[Object(d.jsx)(j.b,{to:"/search",activeClassName:m.a.active,children:Object(d.jsx)(u.a,{children:Object(d.jsx)(f.a,{})})}),Object(d.jsx)(j.b,{to:"/bookmarks",activeClassName:m.a.active,children:Object(d.jsx)(u.a,{children:Object(d.jsx)(x.a,{})})})]})})}var P=n(12),S=n(181),y=n(182),T=n(185),A=n(183),E=n(186),_=n(184),N=n(47),k=n.n(N);function C(e){return Object(d.jsxs)(S.a,{className:k.a.root,style:{background:"#ccc"},children:[Object(d.jsxs)(y.a,{children:[Object(d.jsx)(A.a,{className:k.a.media,image:e.picture.url}),Object(d.jsx)(_.a,{className:k.a.itemsText,style:{background:"#d1d1d1"},children:Object(d.jsx)(s.a,{variant:"body1",color:"textSecondary",component:"p",children:e.picture.title})})]}),Object(d.jsx)(T.a,{className:k.a.button,children:Object(d.jsx)(E.a,{variant:"outlined",size:"small",color:"default",onClick:function(){return e.remotePhoto(e.picture.id,e.picture)},children:e.description})})]})}var I=n(18),w=n(38),D=[],G=function(e){return{type:"APP/LOCALSTORAGE/SET-PHOTOS",photos:e}},L=n(197),R=n(14),H={status:"idle",error:void 0},B=function(e){return{type:"APP/SETTINGS/SET-STATUS",status:e}},F=function(e){return{type:"APP/SETTINGS/SET-ERROR",error:e}},M=n(196);function J(e){var t=Object(I.c)((function(e){return e.settings.status})),n=Object(I.b)();return Object(d.jsx)(L.a,{open:"succeeded"===t,autoHideDuration:1e3,onClose:function(){n(B("idle"))},style:{bottom:"80px"},children:Object(d.jsx)(M.a,{severity:"success",children:e.value})})}var q=n(42),V=n.n(q);function W(){var e=Object(I.c)((function(e){return e.localstorage})),t=Object(I.b)();function n(e){t(function(e){return function(t,n){t(function(e){return{type:"APP/LOCALSTORAGE/REMOVE-PHOTO",photoId:e}}(e)),localStorage.setItem("state",JSON.stringify(n().localstorage))}}(e)),t(B("succeeded"))}return Object(c.useEffect)((function(){t((function(e){var t=localStorage.getItem("state");t&&e(G(JSON.parse(t)))}))}),[]),Object(d.jsxs)("div",{className:V.a.images,style:{maxHeight:"calc(100vh - 128px)"},children:[Object(d.jsx)(J,{value:"Delete picture success!"}),Object(d.jsx)(h.a,{container:!0,direction:"row",justify:"center",alignItems:"center",children:!!e.length&&e.map((function(e,t){return Object(d.jsx)(C,{picture:e,remotePhoto:n,description:"Remove it!"},e.id)}))})]})}var K=n(23),U=n(85),X=n.n(U),Y=function(e,t){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return X.a.create({baseURL:"https://www.flickr.com/services/rest/",params:{method:"flickr.photos.search",api_key:"ded9924f1e38b35ed71d8f034fbf228a",extras:"original_format",tags:e,page:t,format:"json",nojsoncallback:1,per_page:15}})}(e,t).get("")},Z=function(e,t){"fail"===e.stat?t(F(e.message)):t(F("Server is not responding")),t(B("failed"))},z={page:1,pages:0,photo:[],isDisabled:!1},Q=function(e){return{type:"APP/SET-PHOTOS",photos:e}},$=function(e){return{type:"APP/SET-PAGES",payload:e}},ee=function(e){return{type:"APP/DISABLED",isDisabled:e}};function te(e,t){"ok"===e.stat?e.photos.photo.length?(t(Q(e.photos.photo)),t($({page:e.photos.page,pages:e.photos.pages})),t(ee(!1))):t(F("No images found for your query. Please enter a valid query")):Z(e,t)}var ne=n(193);function ce(e){return Object(d.jsx)(M.a,Object(R.a)({elevation:6,variant:"filled"},e))}function ae(){var e=Object(I.c)((function(e){return e.settings.error})),t=Object(I.b)(),n=function(e,n){"clickaway"!==n&&t(F(void 0))};return Object(d.jsx)(L.a,{open:void 0!==e,autoHideDuration:4e3,onClose:n,style:{bottom:"80px"},children:Object(d.jsx)(ce,{onClose:n,severity:"error",children:e})})}var re=n(188),oe=n(189),ie=n(194);function se(e){var t=Object(c.useState)(e.currentPage),n=Object(K.a)(t,2),a=n[0],r=n[1];return Object(d.jsx)(ie.a,{page:a,count:e.totalPages,disabled:e.isDisabled,onChange:function(t,n){r(n),e.nextPage(n)},variant:"outlined",shape:"rounded",showFirstButton:!0,showLastButton:!0})}function ue(e){var t=e.photo,n=e.isDisabled,c=e.error,a=e.title,r=e.nextPage,o=e.onChangeHandler,i=e.onKeyPressHandler,s=e.remotePhoto,l=e.currentPage,j=e.totalPages,b=e.clearInput;return Object(d.jsxs)("div",{children:[Object(d.jsx)(ae,{}),Object(d.jsx)(J,{value:"Add picture success!"}),Object(d.jsx)(ne.a,{id:"outlined-basic",label:"Find images",variant:"outlined",className:V.a.root,error:!!c,helperText:c,value:a,onChange:o,onKeyPress:i,InputProps:{endAdornment:Object(d.jsx)(re.a,{position:"end",onClick:b,children:Object(d.jsx)(u.a,{onClick:b,children:Object(d.jsx)(oe.a,{})})})}}),!!t.length&&Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:V.a.pagination,children:Object(d.jsx)(se,{currentPage:l,totalPages:j,isDisabled:n,nextPage:r})}),Object(d.jsx)(h.a,{container:!0,direction:"row",justify:"center",alignItems:"center",className:V.a.images,children:t.map((function(e,t){return Object(d.jsx)(C,{picture:e,remotePhoto:function(){return s(e.id,e)},description:"Bookmark it!"},e.id)}))})]})]})}function le(){var e=Object(I.c)((function(e){return e.app.photo})),t=Object(I.c)((function(e){return e.app.isDisabled})),n=Object(I.c)((function(e){return e.app.page})),a=Object(I.c)((function(e){return e.app.pages})),r=Object(I.b)(),o=Object(c.useState)(null),i=Object(K.a)(o,2),s=i[0],u=i[1],l=Object(c.useState)(""),j=Object(K.a)(l,2),b=j[0],O=j[1],h=function(e,t){var n=Object(c.useState)(e),a=Object(K.a)(n,2),r=a[0],o=a[1];return Object(c.useEffect)((function(){var n=setTimeout((function(){return o(e)}),t);return function(){return clearTimeout(n)}}),[e]),r}(b,500),p=Object(c.useCallback)((function(e){var t;""!==e.trim()?r((t=e,function(e){e(Q([])),e(ee(!0)),Y(t).then((function(t){return te(t.data,e)})).catch((function(t){return Z(t,e)}))})):u("Title is required")}),[r]);Object(c.useEffect)((function(){r(Q([])),r($({page:1,pages:0}))}),[r]),Object(c.useEffect)((function(){h&&p(b)}),[h,b,p]);return Object(d.jsx)(ue,{photo:e,isDisabled:t,error:s,title:b,nextPage:function(e){r(function(e,t){return function(n,c){n(function(e){return{type:"APP/NEXT-PAGES",page:e}}(t)),n(ee(!0)),Y(e,c().app.page).then((function(e){return te(e.data,n)})).catch((function(e){return Z(e,n)}))}}(b,e))},currentPage:n,totalPages:a,onChangeHandler:function(e){e.currentTarget.value||r(Q([])),O(e.currentTarget.value)},remotePhoto:function(e,t){r({type:"APP/REMOVE-PHOTO",photoId:e}),r(function(e){return function(t,n){var c=localStorage.getItem("state");c&&t(G(JSON.parse(c))),t(function(e){return{type:"APP/LOCALSTORAGE/ADD-PHOTO",photo:e}}(e)),localStorage.setItem("state",JSON.stringify(n().localstorage))}}(t)),r(B("succeeded"))},onKeyPressHandler:function(e){null!==s&&u(null),"Enter"===e.key&&p(b)},clearInput:function(){O(""),u(null),r(Q([])),r($({page:1,pages:0}))}})}var je=n(67),de=n.n(je);function be(){var e=Object(c.useState)(""),t=Object(K.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),o=Object(K.a)(r,2),i=o[0],s=o[1];return Object(d.jsx)("div",{className:de.a.container,id:"found",onMouseMove:function(e){a("".concat(-e.clientX/5,"px")),s("".concat(-e.clientY/5,"px"))},style:{backgroundPositionX:n,backgroundPositionY:i},children:Object(d.jsxs)("div",{className:de.a.content,children:[Object(d.jsx)("h2",{children:"404"}),Object(d.jsx)("h4",{children:"Ops! Page not found"}),Object(d.jsx)("p",{children:"The page you were looking for doesn't exist. You may have mistyped the address or the page may have moved."}),Object(d.jsx)(j.b,{to:"/search",children:"Back to home"})]})})}var Oe=n(190),he=n(198),pe=n(195),fe=n(191),xe=n(134),ge=n(87),me=Object(Oe.a)((function(e){return Object(he.a)({modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{maxWidth:300,backgroundColor:"#282c34",textAlign:"center",color:"#ccc",boxShadow:e.shadows[10],padding:e.spacing(2,4,3)}})}));function ve(){var e=me(),t=Object(c.useState)(!1),n=Object(K.a)(t,2),a=n[0],r=n[1],o=function(){r(!1)};return Object(d.jsxs)("div",{children:[Object(d.jsx)(ge.a,{timeout:6e4,onIdle:function(){r(!0)},onActive:o}),Object(d.jsx)(pe.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:e.modal,open:a,onClose:o,closeAfterTransition:!0,BackdropComponent:fe.a,BackdropProps:{timeout:1e3},children:Object(d.jsx)(xe.a,{in:a,children:Object(d.jsxs)("div",{className:e.paper,children:[Object(d.jsx)("h2",{id:"transition-modal-title",children:"App is not active"}),Object(d.jsx)("p",{id:"transition-modal-description",children:"You see this message because you haven't interacted with the app for a while. To remove this message just continue."}),Object(d.jsx)("q",{children:"Enjoy the moment"})]})})})]})}var Pe=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(ve,{}),Object(d.jsx)(b,{}),Object(d.jsx)(O.a,{maxWidth:"xl",className:"container",children:Object(d.jsxs)(h.a,{container:!0,className:"grid",justify:"flex-start",direction:"row",children:[Object(d.jsx)(v,{}),Object(d.jsx)("div",{className:"wrap-content",children:Object(d.jsxs)(P.d,{children:[Object(d.jsx)(P.b,{exact:!0,path:"/search",render:function(){return Object(d.jsx)(le,{})}}),Object(d.jsx)(P.b,{path:"/bookmarks",render:function(){return Object(d.jsx)(W,{})}}),Object(d.jsx)(P.b,{path:"/404",render:function(){return Object(d.jsx)(be,{})}}),Object(d.jsx)(P.a,{exact:!0,from:"/",to:"/search"}),Object(d.jsx)(P.a,{from:"*",to:"/404"})]})})]})}),Object(d.jsx)(p,{})]})},Se=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,199)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),r(e),o(e)}))},ye=n(58),Te=n(88),Ae=Object(ye.b)({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"APP/SET-PHOTOS":return Object(R.a)(Object(R.a)({},e),{},{photo:Object(w.a)(t.photos.map((function(e){return Object(R.a)(Object(R.a)({},e),{},{url:e.originalformat?"https://live.staticflickr.com/".concat(e.server,"/").concat(e.id,"_").concat(e.secret,".").concat(e.originalformat):"https://live.staticflickr.com/".concat(e.server,"/").concat(e.id,"_").concat(e.secret,".jpg")})})))});case"APP/REMOVE-PHOTO":return Object(R.a)(Object(R.a)({},e),{},{photo:Object(w.a)(e.photo.filter((function(e){return e.id!==t.photoId})))});case"APP/SET-PAGES":return Object(R.a)(Object(R.a)({},e),t.payload);case"APP/NEXT-PAGES":return Object(R.a)(Object(R.a)({},e),{},{page:t.page});case"APP/DISABLED":return Object(R.a)(Object(R.a)({},e),{},{isDisabled:t.isDisabled});default:return e}},localstorage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"APP/LOCALSTORAGE/ADD-PHOTO":return[].concat(Object(w.a)(e),[t.photo]);case"APP/LOCALSTORAGE/REMOVE-PHOTO":return Object(w.a)(e.filter((function(e){return e.id!==t.photoId})));case"APP/LOCALSTORAGE/SET-PHOTOS":return Object(w.a)(t.photos);default:return e}},settings:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"APP/SETTINGS/SET-STATUS":return Object(R.a)(Object(R.a)({},e),{},{status:t.status});case"APP/SETTINGS/SET-ERROR":return Object(R.a)(Object(R.a)({},e),{},{error:t.error});default:return e}}}),Ee=Object(ye.c)(Ae,Object(ye.a)(Te.a));r.a.render(Object(d.jsx)(I.a,{store:Ee,children:Object(d.jsx)(j.a,{children:Object(d.jsx)(Pe,{})})}),document.getElementById("root")),Se()},42:function(e,t,n){e.exports={root:"SearchBoard_root__STrNM",images:"SearchBoard_images__3WZ-q",pagination:"SearchBoard_pagination__2m0N0"}},47:function(e,t,n){e.exports={itemsText:"ImageCard_itemsText__mpBEr",root:"ImageCard_root__36lVf",button:"ImageCard_button__25Us5",media:"ImageCard_media__mNOZK"}},57:function(e,t,n){e.exports={menu:"Menu_menu__1xgSW",active:"Menu_active__2e5dO"}},67:function(e,t,n){e.exports={container:"PageNotFound_container__wIkto",content:"PageNotFound_content__ZAkaW"}}},[[132,1,2]]]);
//# sourceMappingURL=main.08be4bc3.chunk.js.map