(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,a,t){e.exports=t(33)},24:function(e,a,t){},25:function(e,a,t){},33:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),l=t(5),s=t.n(l),c=(t(24),t(3)),o=(t(25),t(10)),m=t.n(o),i=t(14),u=t(8),b=t(9),E=t(6),d=(t(28),function(e){var a=g(),t=a.nameError,l=a.emailError,s=a.messageError,o=a.validator,d=a.clearError,f=p(),v=f.nameValue,h=f.emailValue,N=f.messageValue,w=f.setNameValue,y=f.setEmailValue,O=f.setMessageValue,j=Object(n.useState)(!1),S=Object(c.a)(j,2),k=S[0],x=S[1];return r.a.createElement("form",{className:"contact-form",onSubmit:function(){var e=Object(i.a)(m.a.mark(function e(a){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),o(v,"name"),o(v,"email"),o(v,"message"),!(v&&h&&N)){e.next=17;break}return x(!0),e.prev=6,e.next=9,fetch("https://6m7shysd75.execute-api.us-east-1.amazonaws.com/dev/email",{method:"post",body:JSON.stringify({name:v,email:h,content:N})});case 9:x(!1),Object(E.b)("Thank you, I'll be in touch!",{className:"toast",position:"top-left",autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0}),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(6),x(!1),E.b.error("The request failed, please re-submit.",{className:"toast",position:"top-left",autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0});case 17:case"end":return e.stop()}},e,null,[[6,13]])}));return function(a){return e.apply(this,arguments)}}()},r.a.createElement("div",{className:"form-element"},r.a.createElement("label",null,"Name:"),r.a.createElement("input",{type:"text",className:t.length?"input-error":"",placeholder:"name",value:v,onChange:function(e){w(e.target.value),t&&d("name")},onBlur:function(){o(v,"name")}}),t&&r.a.createElement("label",{className:"error-label"},t)),r.a.createElement("div",{className:"form-element"},r.a.createElement("label",null,"Email:"),r.a.createElement("input",{type:"text",className:l.length?"input-error":"",placeholder:"email",value:h,onChange:function(e){y(e.target.value),l&&d("email")},onBlur:function(){o(h,"email")}}),l&&r.a.createElement("label",{className:"error-label"},l)),r.a.createElement("div",{className:"form-element"},r.a.createElement("label",null,"Message:"),r.a.createElement("textarea",{className:s.length?"input-error":"",value:N,onChange:function(e){O(e.target.value),s&&d("message")},onBlur:function(){o(N,"message")}}),s&&r.a.createElement("label",{className:"error-label"},s)),r.a.createElement("div",{className:"submit-container"},k&&r.a.createElement(b.b.Provider,{value:{color:"#ffeb7f",className:"spinner",size:"1.25rem"}},r.a.createElement(u.b,null)),r.a.createElement("button",null,"Send")))}),g=function(){var e=Object(n.useState)(""),a=Object(c.a)(e,2),t=a[0],r=a[1],l=Object(n.useState)(""),s=Object(c.a)(l,2),o=s[0],m=s[1],i=Object(n.useState)(""),u=Object(c.a)(i,2),b=u[0],E=u[1];return{nameError:t,emailError:o,messageError:b,validator:function(e,a){var t={name:{set:r,msg:"How should I address you?"},email:{set:m,msg:"I'll need a return address!"},message:{set:E,msg:"Don't forget your message!"}}[a],n=t.set,l=t.msg;e.length?n(""):n(l)},clearError:function(e){({name:r,email:m,message:E})[e]("")}}},p=function(){var e=Object(n.useState)(""),a=Object(c.a)(e,2),t=a[0],r=a[1],l=Object(n.useState)(""),s=Object(c.a)(l,2),o=s[0],m=s[1],i=Object(n.useState)(""),u=Object(c.a)(i,2);return{nameValue:t,emailValue:o,messageValue:u[0],setNameValue:r,setEmailValue:m,setMessageValue:u[1]}},f=t(4),v=t.n(f),h=function(e){return r.a.createElement(v.a,{onTypingDone:function(){setTimeout(function(){e.setTypingStatus(!1)},200)}},r.a.createElement("p",{className:"intro-paragraph"},"Being a developer is about more than being a coder. ",r.a.createElement(v.a.Delay,{ms:500})," It\u2019s about being a unique problem solver, ",r.a.createElement(v.a.Delay,{ms:500})," an excellent communicator, ",r.a.createElement(v.a.Delay,{ms:500}),"and a translator between the complexities of software engineering and the user experience.",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(v.a.Delay,{ms:500}),"Blending these traits into highly stable, ",r.a.createElement(v.a.Delay,{ms:500}),"deployable, ",r.a.createElement(v.a.Delay,{ms:500}),"and reproducible software is what it takes,",r.a.createElement(v.a.Delay,{ms:500})," and what I enjoy."))},N=t(17),w=function(e){return r.a.createElement("div",{className:"icon-box"},r.a.createElement(b.b.Provider,{value:{color:"white",size:"3em",className:e.isTyping?"gone":"arrow-down"}},r.a.createElement(N.a,{onClick:function(){document.querySelector(".contact-section").scrollIntoView({behavior:"smooth"})}})))},y=function(){return r.a.createElement("div",{className:"icon-box"},r.a.createElement(b.b.Provider,{value:{color:"#ECEFF1",size:"2.5em",className:"github-icon"}},r.a.createElement(u.a,{onClick:function(){window.open("https://www.github.com/seth-wat","_blank")}})))},O=function(){var e=Object(n.useState)(!0),a=Object(c.a)(e,2),t=a[0],l=a[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{position:"top-left",autoClose:5e3,hideProgressBar:!0,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnVisibilityChange:!0,draggable:!0,pauseOnHover:!0}),r.a.createElement("div",{className:"intro-section"},r.a.createElement("div",{className:"title-div"},r.a.createElement("h1",{className:"main-title"},"Seth R. Watkins"),r.a.createElement("h3",{className:"main-sub-title"},"Frontend Developer")),r.a.createElement("div",{className:"intro-paragraph-container"},r.a.createElement(h,{setTypingStatus:l})),r.a.createElement("div",{className:"arrow-down-container"},r.a.createElement(w,{isTyping:t}))),r.a.createElement("div",{className:"contact-section"},r.a.createElement("div",{className:"contact-section-header"},r.a.createElement("h1",null,"Lets start a conversation")),r.a.createElement("div",{className:"form-container"},r.a.createElement(d,null)),r.a.createElement("div",{className:"social"},r.a.createElement(y,null))))};s.a.render(r.a.createElement(O,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.613cc25d.chunk.js.map