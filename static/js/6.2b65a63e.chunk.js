(this["webpackJsonpkihtrak.com"]=this["webpackJsonpkihtrak.com"]||[]).push([[6],{270:function(e,t,a){},275:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return d}));var n=a(3),r=a(4),c=a(6),l=a(5),s=a(7),i=a(0),m=a.n(i),o=a(269),h=a.n(o),u=(a(270),a(271)),d=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(l.a)(t).call(this,e))).checkEmoji=function(e){a.state.first?a.answer==e?a.setState({captcha:!0,email:"contact"}):a.setState({first:!1}):a.answer==e?a.setState({first:!0}):a.setState({first:!1})},a.state={captcha:!1,first:null},a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){for(var e=this,t=[],a=[],n=function(){var n=u.random({count:1})[0],r=n.name.replace(/_/g," ");!a.includes(r)&&/^[a-zA-Z0-9$@$!%*?&#^-_. +]+$/.test(r)&&(a.push(r),t.push(m.a.createElement("a",{onClick:function(){return e.checkEmoji(r)}},n.character)))};t.length<5;)n();return this.answer=a[Math.floor(5*Math.random())],m.a.createElement("div",null,m.a.createElement("h1",{className:"text-center display-3"},"Karthik Sankar Around The Web"),m.a.createElement("p",{className:"txtAroundWeb text-center"},"Wait, is this the Karthik Sankar that you're looking for? See if any of these help you identify me:"),m.a.createElement("br",null),m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-md-4 text-center mb-4"},m.a.createElement("a",{href:"https://www.instagram.com/kihtrakr/"},m.a.createElement("img",{className:"aroundWebImg",alt:"Instagram Logo",loading:"lazy",src:"https://instagram-brand.com/wp-content/uploads/2016/11/Instagram_AppIcon_Aug2017.png?w=50"}),m.a.createElement("strong",{className:"id ml-4"},"@KihtrakR"))),m.a.createElement("div",{className:"col-md-4 text-center mb-4"},m.a.createElement("a",{href:"https://github.com/kihtrakRaknas"},m.a.createElement("img",{className:"aroundWebImg",alt:"Github Logo",loading:"lazy",src:"https://image.flaticon.com/icons/svg/25/25231.svg"}),m.a.createElement("strong",{className:"id ml-4"},"KihtrakRaknas"))),m.a.createElement("div",{className:"col-md-4 text-center mb-4"},m.a.createElement("a",{href:"https://linkedin.com/in/karthik-sankar-a5a523178"},m.a.createElement("img",{className:"aroundWebImg",alt:"LinkedIn Logo",loading:"lazy",src:"https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png?w=50"}),m.a.createElement("strong",{className:"id ml-4"},"Karthik Sankar")))),m.a.createElement("br",null),m.a.createElement("br",null),m.a.createElement("h1",{id:"Contact-Me",className:"text-center display-4"},"Contact Me!"),m.a.createElement("br",null),m.a.createElement("p",{className:"txtAroundWeb text-center"},"Please don't hesitate to contact me. As long as you are a real person."),m.a.createElement("br",null),this.state.captcha?null:m.a.createElement("div",null,m.a.createElement("p",{className:"text-center txtAroundWeb"},m.a.createElement("strong",null,null!=this.state.first?0==this.state.first?"Your last answer was wrong. Try again.":"Just one more!":null)),m.a.createElement("p",{className:"text-center txtAroundWeb"},"Select the icon which most closely resembles: ",m.a.createElement("strong",null,this.answer)),m.a.createElement("p",{className:"text-center",style:{fontSize:"10vw"}},t)),this.state.captcha?m.a.createElement(h.a,null,m.a.createElement("p",{className:"email text-center"},"Email me at: ",m.a.createElement("a",{href:"mailto:"+this.state.email+"@kihtrak.com"},this.state.email,"@kihtrak.com"))):m.a.createElement("p",{className:"email text-center"},"Please complete this custom captcha to view contact information"))}}]),t}(m.a.Component)}}]);
//# sourceMappingURL=6.2b65a63e.chunk.js.map