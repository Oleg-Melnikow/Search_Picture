(this["webpackJsonpsearch-picture"]=this["webpackJsonpsearch-picture"]||[]).push([[0],{105:function(e,t,n){},106:function(e,t,n){},132:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(10),r=n.n(a),o=(n(105),n(106),n(171)),i=n(175),s=n(133),u=n(176),l=n(177),j=n(4);function d(){return Object(j.jsx)("div",{style:{flexGrow:1},children:Object(j.jsx)(o.a,{position:"static",children:Object(j.jsxs)(i.a,{children:[Object(j.jsx)(s.a,{variant:"h6",children:"Image Finder"}),Object(j.jsx)("div",{style:{flexGrow:1}}),Object(j.jsx)(u.a,{color:"inherit",children:Object(j.jsx)(l.a,{})})]})})})}var b=n(192),O=n(178);function p(){return Object(j.jsx)("div",{style:{flexGrow:1},children:Object(j.jsx)(o.a,{position:"static",children:Object(j.jsx)(i.a,{children:Object(j.jsx)(s.a,{variant:"h6",style:{flexGrow:1},children:"Copyrights"})})})})}var h=n(179),f=n(180),x=n(29),g=n(57),m=n.n(g);function v(){return Object(j.jsx)("div",{className:m.a.menu,children:Object(j.jsxs)(O.a,{container:!0,direction:"column",alignItems:"center",children:[Object(j.jsx)(x.b,{to:"/search",activeClassName:m.a.active,children:Object(j.jsx)(u.a,{children:Object(j.jsx)(h.a,{})})}),Object(j.jsx)(x.b,{to:"/bookmarks",activeClassName:m.a.active,children:Object(j.jsx)(u.a,{children:Object(j.jsx)(f.a,{})})})]})})}var P=n(12),S=n(181),y=n(182),T=n(185),A=n(183),E=n(186),_=n(184),N=n(47),k=n.n(N);function C(e){return Object(j.jsxs)(S.a,{className:k.a.root,style:{background:"#ccc"},children:[Object(j.jsxs)(y.a,{children:[Object(j.jsx)(A.a,{className:k.a.media,image:e.picture.url}),Object(j.jsx)(_.a,{className:k.a.itemsText,style:{background:"#d1d1d1"},children:Object(j.jsx)(s.a,{variant:"body1",color:"textSecondary",component:"p",children:e.picture.title})})]}),Object(j.jsx)(T.a,{className:k.a.button,children:Object(j.jsx)(E.a,{variant:"outlined",size:"small",color:"default",onClick:function(){return e.remotePhoto(e.picture.id,e.picture)},children:e.description})})]})}var I=n(18),w=n(38),D=[],G=function(e){return{type:"APP/LOCALSTORAGE/SET-PHOTOS",photos:e}},L=n(197),R=n(14),H={status:"idle",error:void 0},B=function(e){return{type:"APP/SETTINGS/SET-STATUS",status:e}},F=function(e){return{type:"APP/SETTINGS/SET-ERROR",error:e}},M=n(196);function J(e){var t=Object(I.c)((function(e){return e.settings.status})),n=Object(I.b)();return Object(j.jsx)(L.a,{open:"succeeded"===t,autoHideDuration:1e3,onClose:function(){n(B("idle"))},style:{bottom:"80px"},children:Object(j.jsx)(M.a,{severity:"success",children:e.value})})}var q=n(42),V=n.n(q);function W(){var e=Object(I.c)((function(e){return e.localstorage})),t=Object(I.b)();function n(e){t(function(e){return function(t,n){t(function(e){return{type:"APP/LOCALSTORAGE/REMOVE-PHOTO",photoId:e}}(e)),localStorage.setItem("state",JSON.stringify(n().localstorage))}}(e)),t(B("succeeded"))}return Object(c.useEffect)((function(){t((function(e){var t=localStorage.getItem("state");t&&e(G(JSON.parse(t)))}))}),[]),Object(j.jsxs)("div",{className:V.a.images,style:{maxHeight:"calc(100vh - 128px)"},children:[Object(j.jsx)(J,{value:"Delete picture success!"}),Object(j.jsx)(O.a,{container:!0,direction:"row",justify:"center",alignItems:"center",children:!!e.length&&e.map((function(e,t){return Object(j.jsx)(C,{picture:e,remotePhoto:n,description:"Remove it!"},e.id)}))})]})}var K=n(23),U=n(85),X=n.n(U),Y=function(e,t){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return X.a.create({baseURL:"https://www.flickr.com/services/rest/",params:{method:"flickr.photos.search",api_key:"ded9924f1e38b35ed71d8f034fbf228a",extras:"original_format",tags:e,page:t,format:"json",nojsoncallback:1,per_page:15}})}(e,t).get("")},Z=function(e,t){"fail"===e.stat?t(F(e.message)):t(F("Server is not responding")),t(B("failed"))},z={page:1,pages:0,photo:[],isDisabled:!1},Q=function(e){return{type:"APP/SET-PHOTOS",photos:e}},$=function(e){return{type:"APP/SET-PAGES",payload:e}},ee=function(e){return{type:"APP/DISABLED",isDisabled:e}};function te(e,t){"ok"===e.stat?e.photos.photo.length?(t(Q(e.photos.photo)),t($({page:e.photos.page,pages:e.photos.pages})),t(ee(!1))):t(F("No images found for your query. Please enter a valid query")):Z(e,t)}var ne=n(193);function ce(e){return Object(j.jsx)(M.a,Object(R.a)({elevation:6,variant:"filled"},e))}function ae(){var e=Object(I.c)((function(e){return e.settings.error})),t=Object(I.b)(),n=function(e,n){"clickaway"!==n&&t(F(void 0))};return Object(j.jsx)(L.a,{open:void 0!==e,autoHideDuration:4e3,onClose:n,style:{bottom:"80px"},children:Object(j.jsx)(ce,{onClose:n,severity:"error",children:e})})}var re=n(188),oe=n(189),ie=n(194);function se(e){var t=Object(c.useState)(e.currentPage),n=Object(K.a)(t,2),a=n[0],r=n[1];return Object(j.jsx)(ie.a,{page:a,count:e.totalPages,disabled:e.isDisabled,onChange:function(t,n){r(n),e.nextPage(n)},variant:"outlined",shape:"rounded",showFirstButton:!0,showLastButton:!0})}function ue(e){var t=e.photo,n=e.isDisabled,c=e.error,a=e.title,r=e.nextPage,o=e.onChangeHandler,i=e.onKeyPressHandler,s=e.remotePhoto,l=e.currentPage,d=e.totalPages,b=e.clearInput;return Object(j.jsxs)("div",{children:[Object(j.jsx)(ae,{}),Object(j.jsx)(J,{value:"Add picture success!"}),Object(j.jsx)(ne.a,{id:"outlined-basic",label:"Find images",variant:"outlined",className:V.a.root,error:!!c,helperText:c,value:a,onChange:o,onKeyPress:i,InputProps:{endAdornment:Object(j.jsx)(re.a,{position:"end",onClick:b,children:Object(j.jsx)(u.a,{onClick:b,children:Object(j.jsx)(oe.a,{})})})}}),!!t.length&&Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:V.a.pagination,children:Object(j.jsx)(se,{currentPage:l,totalPages:d,isDisabled:n,nextPage:r})}),Object(j.jsx)(O.a,{container:!0,direction:"row",justify:"center",alignItems:"center",className:V.a.images,children:t.map((function(e,t){return Object(j.jsx)(C,{picture:e,remotePhoto:function(){return s(e.id,e)},description:"Bookmark it!"},e.id)}))})]})]})}function le(){var e=Object(I.c)((function(e){return e.app.photo})),t=Object(I.c)((function(e){return e.app.isDisabled})),n=Object(I.c)((function(e){return e.app.page})),a=Object(I.c)((function(e){return e.app.pages})),r=Object(I.b)(),o=Object(c.useState)(null),i=Object(K.a)(o,2),s=i[0],u=i[1],l=Object(c.useState)(""),d=Object(K.a)(l,2),b=d[0],O=d[1],p=function(e,t){var n=Object(c.useState)(e),a=Object(K.a)(n,2),r=a[0],o=a[1];return Object(c.useEffect)((function(){var n=setTimeout((function(){return o(e)}),t);return function(){return clearTimeout(n)}}),[e]),r}(b,500);Object(c.useEffect)((function(){r(Q([])),r($({page:1,pages:0}))}),[]),Object(c.useEffect)((function(){p&&h(b)}),[p]);var h=function(e){var t;""!==e.trim()?r((t=e,function(e){e(Q([])),e(ee(!0)),Y(t).then((function(t){return te(t.data,e)})).catch((function(t){return Z(t,e)}))})):u("Title is required")};return Object(j.jsx)(ue,{photo:e,isDisabled:t,error:s,title:b,nextPage:function(e){r(function(e,t){return function(n,c){n(function(e){return{type:"APP/NEXT-PAGES",page:e}}(t)),n(ee(!0)),Y(e,c().app.page).then((function(e){return te(e.data,n)})).catch((function(e){return Z(e,n)}))}}(b,e))},currentPage:n,totalPages:a,onChangeHandler:function(e){O(e.currentTarget.value)},remotePhoto:function(e,t){r({type:"APP/REMOVE-PHOTO",photoId:e}),r(function(e){return function(t,n){var c=localStorage.getItem("state");c&&t(G(JSON.parse(c))),t(function(e){return{type:"APP/LOCALSTORAGE/ADD-PHOTO",photo:e}}(e)),localStorage.setItem("state",JSON.stringify(n().localstorage))}}(t)),r(B("succeeded"))},onKeyPressHandler:function(e){null!==s&&u(null),"Enter"===e.key&&h(b)},clearInput:function(){O(""),u(null),r(Q([]))}})}var je=n(67),de=n.n(je);function be(){var e=Object(c.useState)(""),t=Object(K.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),o=Object(K.a)(r,2),i=o[0],s=o[1];return Object(j.jsx)("div",{className:de.a.container,id:"found",onMouseMove:function(e){a("".concat(-e.clientX/5,"px")),s("".concat(-e.clientY/5,"px"))},style:{backgroundPositionX:n,backgroundPositionY:i},children:Object(j.jsxs)("div",{className:de.a.content,children:[Object(j.jsx)("h2",{children:"404"}),Object(j.jsx)("h4",{children:"Ops! Page not found"}),Object(j.jsx)("p",{children:"The page you were looking for doesn't exist. You may have mistyped the address or the page may have moved."}),Object(j.jsx)(x.b,{to:"/search",children:"Back to home"})]})})}var Oe=n(190),pe=n(198),he=n(195),fe=n(191),xe=n(134),ge=n(87),me=Object(Oe.a)((function(e){return Object(pe.a)({modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{maxWidth:300,backgroundColor:"#282c34",textAlign:"center",color:"#ccc",boxShadow:e.shadows[10],padding:e.spacing(2,4,3)}})}));function ve(){var e=me(),t=Object(c.useState)(!1),n=Object(K.a)(t,2),a=n[0],r=n[1],o=function(){r(!1)};return Object(j.jsxs)("div",{children:[Object(j.jsx)(ge.a,{timeout:6e4,onIdle:function(){r(!0)},onActive:o}),Object(j.jsx)(he.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:e.modal,open:a,onClose:o,closeAfterTransition:!0,BackdropComponent:fe.a,BackdropProps:{timeout:1e3},children:Object(j.jsx)(xe.a,{in:a,children:Object(j.jsxs)("div",{className:e.paper,children:[Object(j.jsx)("h2",{id:"transition-modal-title",children:"App is not active"}),Object(j.jsx)("p",{id:"transition-modal-description",children:"You see this message because you haven't interacted with the app for a while. To remove this message just continue."}),Object(j.jsx)("q",{children:"Enjoy the moment"})]})})})]})}var Pe=function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(ve,{}),Object(j.jsx)(d,{}),Object(j.jsx)(b.a,{maxWidth:"xl",className:"container",children:Object(j.jsxs)(O.a,{container:!0,className:"grid",justify:"flex-start",direction:"row",children:[Object(j.jsx)(v,{}),Object(j.jsx)("div",{className:"wrap-content",children:Object(j.jsxs)(P.d,{children:[Object(j.jsx)(P.b,{exact:!0,path:"/search",render:function(){return Object(j.jsx)(le,{})}}),Object(j.jsx)(P.b,{path:"/bookmarks",render:function(){return Object(j.jsx)(W,{})}}),Object(j.jsx)(P.b,{path:"/404",render:function(){return Object(j.jsx)(be,{})}}),Object(j.jsx)(P.a,{exact:!0,from:"/",to:"/search"}),Object(j.jsx)(P.a,{from:"*",to:"/404"})]})})]})}),Object(j.jsx)(p,{})]})},Se=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,199)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),r(e),o(e)}))},ye=n(58),Te=n(88),Ae=Object(ye.b)({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"APP/SET-PHOTOS":return Object(R.a)(Object(R.a)({},e),{},{photo:Object(w.a)(t.photos.map((function(e){return Object(R.a)(Object(R.a)({},e),{},{url:e.originalformat?"https://live.staticflickr.com/".concat(e.server,"/").concat(e.id,"_").concat(e.secret,".").concat(e.originalformat):"https://live.staticflickr.com/".concat(e.server,"/").concat(e.id,"_").concat(e.secret,".jpg")})})))});case"APP/REMOVE-PHOTO":return Object(R.a)(Object(R.a)({},e),{},{photo:Object(w.a)(e.photo.filter((function(e){return e.id!==t.photoId})))});case"APP/SET-PAGES":return Object(R.a)(Object(R.a)({},e),t.payload);case"APP/NEXT-PAGES":return Object(R.a)(Object(R.a)({},e),{},{page:t.page});case"APP/DISABLED":return Object(R.a)(Object(R.a)({},e),{},{isDisabled:t.isDisabled});default:return e}},localstorage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"APP/LOCALSTORAGE/ADD-PHOTO":return[].concat(Object(w.a)(e),[t.photo]);case"APP/LOCALSTORAGE/REMOVE-PHOTO":return Object(w.a)(e.filter((function(e){return e.id!==t.photoId})));case"APP/LOCALSTORAGE/SET-PHOTOS":return Object(w.a)(t.photos);default:return e}},settings:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"APP/SETTINGS/SET-STATUS":return Object(R.a)(Object(R.a)({},e),{},{status:t.status});case"APP/SETTINGS/SET-ERROR":return Object(R.a)(Object(R.a)({},e),{},{error:t.error});default:return e}}}),Ee=Object(ye.c)(Ae,Object(ye.a)(Te.a));r.a.render(Object(j.jsx)(I.a,{store:Ee,children:Object(j.jsx)(x.a,{children:Object(j.jsx)(Pe,{})})}),document.getElementById("root")),Se()},42:function(e,t,n){e.exports={root:"SearchBoard_root__STrNM",images:"SearchBoard_images__3WZ-q",pagination:"SearchBoard_pagination__2m0N0"}},47:function(e,t,n){e.exports={itemsText:"ImageCard_itemsText__mpBEr",root:"ImageCard_root__36lVf",button:"ImageCard_button__25Us5",media:"ImageCard_media__mNOZK"}},57:function(e,t,n){e.exports={menu:"Menu_menu__1xgSW",active:"Menu_active__2e5dO"}},67:function(e,t,n){e.exports={container:"PageNotFound_container__wIkto",content:"PageNotFound_content__ZAkaW"}}},[[132,1,2]]]);
//# sourceMappingURL=main.97b43a3d.chunk.js.map