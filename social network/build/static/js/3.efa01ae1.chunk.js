(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{286:function(t,e,s){"use strict";e.a=s.p+"static/media/User-Profile.00f4f37b.png"},287:function(t,e,s){"use strict";s.d(e,"a",(function(){return a}));var r=s(92);function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var s=[],r=!0,a=!1,n=void 0;try{for(var o,i=t[Symbol.iterator]();!(r=(o=i.next()).done)&&(s.push(o.value),!e||s.length!==e);r=!0);}catch(c){a=!0,n=c}finally{try{r||null==i.return||i.return()}finally{if(a)throw n}}return s}}(t,e)||Object(r.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},292:function(t,e,s){},293:function(t,e,s){t.exports={profile:"ProfileInfo_profile__3ne12",mainPhoto:"ProfileInfo_mainPhoto__EsD7A"}},294:function(t,e,s){t.exports={profile:"MyPosts_profile__2H0GE"}},295:function(t,e,s){t.exports={profile:"Posts_profile__2-DuL"}},297:function(t,e,s){"use strict";s.r(e);var r=s(3),a=s(49),n=s(50),o=s(60),i=s(59),c=s(0),u=s.n(c),l=s(292),p=s.n(l),f=s(293),j=s.n(f),d=s(93),h=s(286),b=s(287),m=s(2),O=function(t){var e=Object(c.useState)(!1),s=Object(b.a)(e,2),r=s[0],a=s[1],n=Object(c.useState)(t.status),o=Object(b.a)(n,2),i=o[0],u=o[1];Object(c.useEffect)((function(){u(t.status)}),[t.status]);return Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{children:!r&&Object(m.jsx)("span",{onDoubleClick:function(){a(!r)},children:t.status||"----"})}),Object(m.jsx)("div",{children:r&&Object(m.jsx)("input",{onChange:function(t){u(t.currentTarget.value)},autoFocus:!0,onBlur:function(){a(!1),t.updateStatus(i)},value:i})})]})},g=function(t){if(!t.profilePage)return Object(m.jsx)(d.a,{});return Object(m.jsxs)("div",{className:j.a.profileInfo,children:[Object(m.jsx)("div",{}),Object(m.jsxs)("div",{children:[Object(m.jsx)("img",{src:t.profilePage.profile.photos.large||h.a,className:j.a.mainPhoto}),t.isOwner&&Object(m.jsx)("input",{type:"file",onChange:function(e){e.target.files&&e.target.files.length&&t.savePhoto(e.target.files[0])}}),Object(m.jsx)(O,{status:t.profilePage.status,updateStatus:t.updateStatus})]})]})},v=s(91),P=s(294),x=s.n(P),y=s(295),S=s.n(y),_=function(t){return Object(m.jsxs)("div",{className:S.a.profile,children:[Object(m.jsx)("img",{src:"https://meragor.com/files/styles//ava_800_800_wm/_big-and-goofy-smile_0.jpg",alt:""}),t.message,Object(m.jsx)("div",{children:Object(m.jsxs)("span",{children:[t.likeCount," like"]})})]})},w=s(84),k=s(124),I=s(81),C=s(62),D=u.a.memo((function(t){var e=t.PostsData.map((function(t){return Object(m.jsx)(_,{message:t.message,likeCount:t.likesCount})}));return Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{className:x.a.profile,children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("img",{src:"https://meragor.com/files/styles//ava_800_800_wm/_big-and-goofy-smile_0.jpg",alt:""}),"ava"]}),Object(m.jsx)("div",{children:Object(m.jsx)(T,{onSubmit:function(e){t.addPost(e.updateNewPostText)}})})]}),e]})})),N=Object(I.a)(10),T=Object(k.a)({form:"myPostAddMessageForm"})((function(t){return Object(m.jsx)("form",{onSubmit:t.handleSubmit,children:Object(m.jsxs)("div",{children:[Object(m.jsx)(w.a,{component:C.a,name:"updateNewPostText",placeholder:"Enter new post",validate:[I.b,N]}),Object(m.jsx)("button",{children:"Create Post"})]})})})),U=D,E=s(22),A=Object(E.b)((function(t){return{PostsData:t.profilePage.PostsData,newPostText:t.profilePage.messageNewPostText}}),(function(t){return{addPost:function(e){t(Object(v.a)(e))}}}))(U),M=function(t){var e=t.profilePage,s=t.getStatus,r=t.updateStatus,a=t.isOwner,n=t.savePhoto;return Object(m.jsxs)("div",{className:p.a.profile,children:[Object(m.jsx)(g,{profilePage:e,getStatus:s,updateStatus:r,isOwner:a,savePhoto:n}),Object(m.jsx)(A,{})]})},z=s(10),F=s(11),J=function(t){Object(o.a)(s,t);var e=Object(i.a)(s);function s(){return Object(a.a)(this,s),e.apply(this,arguments)}return Object(n.a)(s,[{key:"refreshProfile",value:function(){var t=this.props.match.params.userId;t||(this.props.authorizedUserId||this.props.history.push("/login"));this.props.getUsersProfile(t),this.props.getStatus(t)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(t,e,s){this.props.match.params.userId!==t.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return Object(m.jsx)("div",{children:Object(m.jsx)(M,Object(r.a)(Object(r.a)({},this.props),{},{profilePage:this.props.profilePage,getStatus:this.props.getStatus,updateStatus:this.props.updateStatus,isOwner:!this.props.match.params.userId,savePhoto:this.props.savePhoto}))})}}]),s}(u.a.Component);e.default=Object(F.d)(Object(E.b)((function(t){return{profilePage:t.profilePage,authorizedUserId:t.auth.id}}),{getUsersProfile:v.d,updateStatus:v.f,getStatus:v.c,savePhoto:v.e}),z.f)(J)}}]);
//# sourceMappingURL=3.efa01ae1.chunk.js.map