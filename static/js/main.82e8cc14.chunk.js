(this.webpackJsonpnwitter=this.webpackJsonpnwitter||[]).push([[0],{69:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var a=n(12),r=n.n(a),c=n(51),s=n.n(c),i=n(14),u=n(36),o=n(17),l=n(0),j=n.n(l),b=n(2),d=n(25),p=n(37),f=n(38);n(64),n(72),n(71);f.a.initializeApp({apiKey:"AIzaSyCrRDYcJYOS80xoYy2SMm6RVoIUxr-DL38",authDomain:"nwitter-177bb.firebaseapp.com",projectId:"nwitter-177bb",storageBucket:"nwitter-177bb.appspot.com",messagingSenderId:"718385504460",appId:"1:718385504460:web:06841b2458aa2756a42269"});var O=f.a,h=f.a.auth(),m=f.a.firestore(),x=f.a.storage(),v=n(7),g=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),s=Object(i.a)(c,2),u=s[0],o=s[1],l=Object(a.useState)(!0),d=Object(i.a)(l,2),p=d[0],f=d[1],O=Object(a.useState)(""),m=Object(i.a)(O,2),x=m[0],g=m[1],y=function(e){var t=e.target,n=t.name,a=t.value;"email"===n?r(a):"password"===n&&o(a)},w=function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!p){e.next=8;break}return e.next=5,h.createUserWithEmailAndPassword(n,u);case 5:e.sent,e.next=11;break;case 8:return e.next=10,h.signInWithEmailAndPassword(n,u);case 10:e.sent;case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),g(e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("form",{onSubmit:w,className:"container",children:[Object(v.jsx)("input",{name:"email",type:"text",placeholder:"Email",required:!0,value:n,onChange:y,className:"authInput"}),Object(v.jsx)("input",{name:"password",type:"password",placeholder:"Password",required:!0,value:u,onChange:y,className:"authInput"}),Object(v.jsx)("input",{type:"submit",value:p?"Create Account":"Log In",className:"authInput authSubmiy"}),x&&Object(v.jsx)("span",{className:"authError",children:x})]}),Object(v.jsx)("span",{onClick:function(){return f((function(e){return!e}))},className:"authSwitch",children:p?"Sign In":"Create Account"})]})},y=function(){var e=function(){var e=Object(b.a)(j.a.mark((function e(t){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(n=t.target.name)?a=new O.auth.GoogleAuthProvider:"github"===n&&(a=new O.auth.GithubAuthProvider),e.next=4,h.signInWithPopup(a);case 4:e.sent;case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsxs)("div",{className:"authContainer",children:[Object(v.jsx)(d.a,{icon:p.c,color:"#04AAFF",size:"3x",style:{marginBottom:30}}),Object(v.jsx)(g,{}),Object(v.jsxs)("div",{className:"authBtns",children:[Object(v.jsxs)("button",{onClick:e,name:"google",className:"authBtn",children:["Continue with Google ",Object(v.jsx)(d.a,{icon:p.b})]}),Object(v.jsxs)("button",{onClick:e,name:"github",className:"authBtn",children:["Continue with Github ",Object(v.jsx)(d.a,{icon:p.a})]})]})]})},w=n(52),N=n(31),S=function(e){var t=e.nweetObj,n=e.isOwner,r=Object(a.useState)(!1),c=Object(i.a)(r,2),s=c[0],u=c[1],o=Object(a.useState)(t.text),l=Object(i.a)(o,2),p=l[0],f=l[1],O=function(){var e=Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("\uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")){e.next=7;break}return e.next=4,m.doc("nweets/".concat(t.id)).delete();case 4:if(""===t.attachmentUrl){e.next=7;break}return e.next=7,x.refFromURL(t.attachmentUrl).delete();case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){return u((function(e){return!e}))},g=function(){var e=Object(b.a)(j.a.mark((function e(n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,m.doc("nweets/".concat(t.id)).update({text:p});case 3:u(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsx)("div",{className:"nweet",children:s?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("form",{onSubmit:g,className:"container nweetEdit",children:[Object(v.jsx)("input",{onChange:function(e){var t=e.target.value;f(t)},value:p,required:!0,placeholder:"Edit your nweet",autoFocus:!0,className:"formInput"}),Object(v.jsx)("input",{type:"submit",value:"Update Nweet",className:"formBtn"})]}),Object(v.jsx)("button",{onClick:h,className:"formBtn cancelBtn",children:"Cancel"})]}):Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("h4",{children:t.text}),t.attachmentUrl&&Object(v.jsx)("img",{alt:"",src:t.attachmentUrl,width:"50px",heigtt:"50px"}),n&&Object(v.jsxs)("div",{className:"nweet__actions",children:[Object(v.jsx)("span",{onClick:O,children:Object(v.jsx)(d.a,{icon:N.d})}),Object(v.jsx)("span",{onClick:h,children:Object(v.jsx)(d.a,{icon:N.a})})]})]})})},k=n(74);Object(k.a)();var I=function(e){var t=e.userObj,n=Object(a.useState)(""),r=Object(i.a)(n,2),c=r[0],s=r[1],u=Object(a.useState)(""),o=Object(i.a)(u,2),l=o[0],p=o[1],f=function(){var e=Object(b.a)(j.a.mark((function e(n){var a,r,i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),""!==c){e.next=3;break}return e.abrupt("return");case 3:if(a="",""===l){e.next=12;break}return r=x.ref().child("".concat(t.uid,"/$uuidv4()}")),e.next=8,r.putString(l,"data_url");case 8:return i=e.sent,e.next=11,i.ref.getDownloadURL();case 11:a=e.sent;case 12:return e.next=14,m.collection("nweets").add({text:c,createAt:Date.now(),creatorId:t.uid,attachmentUrl:a});case 14:s(""),p("");case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsxs)("form",{onSubmit:f,className:"factoryForm",children:[Object(v.jsxs)("div",{className:"factoryInput__container",children:[Object(v.jsx)("input",{className:"factoryInput__input",value:c,onChange:function(e){e.preventDefault();var t=e.target.value;s(t)},type:"text",placeholder:"What's on your mind?",maxLength:120}),Object(v.jsx)("input",{type:"submit",value:"\u2192",className:"factoryInput__arrow"})]}),Object(v.jsxs)("label",{htmlFor:"attach-file",className:"factoryInput__label",children:[Object(v.jsx)("span",{children:"Add photos"}),Object(v.jsx)(d.a,{icon:N.b})]}),Object(v.jsx)("input",{id:"attach-file",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],n=new FileReader;n.onloadend=function(e){var t=e.currentTarget.result;p(t)},Boolean(t)&&n.readAsDataURL(t)},style:{opacity:0}}),l&&Object(v.jsxs)("div",{className:"factoryForm__attachment",children:[Object(v.jsx)("img",{alt:"",src:l,style:{backgroundImage:l}}),Object(v.jsxs)("div",{className:"factoryForm__clear",onClick:function(){return p("")},children:[Object(v.jsx)("span",{children:"Remove"}),Object(v.jsx)(d.a,{icon:N.c})]})]})]})},C=function(e){var t=e.userObj,n=Object(a.useState)([]),r=Object(i.a)(n,2),c=r[0],s=r[1];return Object(a.useEffect)((function(){m.collection("nweets").orderBy("createAt","desc").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(w.a)({id:e.id},e.data())}));s(t)}))}),[]),Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)(I,{userObj:t}),Object(v.jsx)("div",{style:{marginTop:30},children:c.map((function(e){return Object(v.jsx)(S,{nweetObj:e,isOwner:e.creatorId===t.uid},e.id)}))})]})},A=function(e){var t=e.userObj,n=e.refreshUser,r=Object(o.f)(),c=Object(a.useState)(t.displayName),s=Object(i.a)(c,2),u=s[0],l=s[1],d=function(){var e=Object(b.a)(j.a.mark((function e(a){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),t.displayName===u){e.next=5;break}return e.next=4,t.updateProfile({displayName:u});case 4:n();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsxs)("div",{className:"container",children:[Object(v.jsxs)("form",{onSubmit:d,className:"profileForm",children:[Object(v.jsx)("input",{onChange:function(e){var t=e.target.value;l(t)},type:"text",placeholder:"Display name",value:u,autoFocus:!0,className:"formInput"}),Object(v.jsx)("input",{type:"submit",value:"Update Profile",className:"formBtn",style:{marginTop:10}})]}),Object(v.jsx)("span",{className:"formBtn cancelBtn logOut",onClick:function(){h.signOut(),r.push("/")},children:"Log Out"})]})},F=function(e){var t=e.userObj;return Object(v.jsx)("nav",{children:Object(v.jsxs)("ul",{style:{display:"flex",justifyContent:"center",marginTop:50},children:[Object(v.jsx)("li",{children:Object(v.jsx)(u.b,{to:"/",style:{marginTop:10},children:Object(v.jsx)(d.a,{icon:p.c,color:"#04AAFF",size:"2x"})})}),Object(v.jsx)("li",{children:Object(v.jsxs)(u.b,{to:"/profile",style:{marginTop:10,display:"flex",flexDirection:"colume",alignItems:"center",fontSize:12},children:[Object(v.jsx)(d.a,{icon:N.e,color:"#04AAFF",size:"2x"}),Object(v.jsx)("span",{style:{marginTop:10},children:t.displayName?"".concat(t.displayName,"\uc758 Profile"):"Profile"})]})})]})})},U=function(e){var t=e.isLoggedIn,n=e.userObj,a=e.refreshUser;return Object(v.jsxs)(u.a,{children:[t&&Object(v.jsx)(F,{userObj:n}),Object(v.jsx)(o.c,{children:t?Object(v.jsxs)("div",{style:{maxWidth:890,width:"100%",margin:"0 auto",marginTop:80,display:"flex",justifyContent:"center"},children:[Object(v.jsx)(o.a,{exact:!0,path:"/",children:Object(v.jsx)(C,{userObj:n})}),Object(v.jsx)(o.a,{exact:!0,path:"/profile",children:Object(v.jsx)(A,{refreshUser:a,userObj:n})})]}):Object(v.jsx)(o.a,{exact:!0,path:"/",children:Object(v.jsx)(y,{})})})]})};var B=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(null),s=Object(i.a)(c,2),u=s[0],o=s[1];return Object(a.useEffect)((function(){h.onAuthStateChanged((function(e){o(!!e&&{uid:e.uid,displayName:e.displayName,updateProfile:function(t){return e.updateProfile(t)}}),r(!0)}))}),[]),Object(v.jsx)(v.Fragment,{children:n?Object(v.jsx)(U,{refreshUser:function(){var e=h.currentUser;o({uid:e.uid,displayName:e.displayName,updateProfile:function(t){return e.updateProfile(t)}})},isLoggedIn:Boolean(u),userObj:u}):"initializing..."})};n(69);s.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(B,{})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.82e8cc14.chunk.js.map