(this["webpackJsonpcoin-toss-game"]=this["webpackJsonpcoin-toss-game"]||[]).push([[0],{12:function(t,s,e){},14:function(t,s,e){},15:function(t,s,e){"use strict";e.r(s);var n=e(1),a=e.n(n),c=e(3),o=e.n(c),i=e(4),r=e(5),l=e(7),j=e(6),u=(e(12),e(0)),h="https://assets.ccbp.in/frontend/react-js/heads-img.png",d="https://assets.ccbp.in/frontend/react-js/tails-img.png",b=function(t){Object(l.a)(e,t);var s=Object(j.a)(e);function e(){var t;Object(i.a)(this,e);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(t=s.call.apply(s,[this].concat(a))).state={headsCount:0,tailsCount:0,tossImage:h},t.onTossClick=function(){var s=t.state,e=s.tailsCount,n=s.headsCount,a=e,c="";Math.floor(2*Math.random())?(a+=1,c=d):(n+=1,c=h),t.setState({headsCount:n,tailsCount:a,tossImage:c})},t}return Object(r.a)(e,[{key:"render",value:function(){var t=this.state,s=t.headsCount,e=t.tailsCount,n=t.tossImage,a=s+e;return Object(u.jsx)("div",{className:"app-container",children:Object(u.jsxs)("p",{className:"coin-toss-container",children:[Object(u.jsx)("h1",{className:"heading",children:"Coin Toss Game"}),Object(u.jsx)("p",{className:"description",children:"Heads (or) Tails"}),Object(u.jsx)("img",{src:n,alt:"toss result",className:"toss-image"}),Object(u.jsx)("button",{className:"toss-btn",type:"button",onClick:this.onTossClick,children:"Toss Coin"}),Object(u.jsxs)("p",{className:"total-count",children:["Total: ",a]}),Object(u.jsxs)("p",{className:"heads-count",children:["Heads: ",s]}),Object(u.jsxs)("p",{className:"tails-count",children:["Tails: ",e]})]})})}}]),e}(n.Component),m=b,p=(e(14),function(){return Object(u.jsx)(m,{})});o.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(p,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.06aea764.chunk.js.map