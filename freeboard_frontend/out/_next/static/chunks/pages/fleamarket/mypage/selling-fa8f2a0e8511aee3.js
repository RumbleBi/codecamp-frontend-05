(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[692],{23256:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return T}});var i,r,c,o,a,l,s,d,u=t(93757),f=t(50187),p=t(30168),g=t(10386),x=g.Z.div(i||(i=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),h=g.Z.div(r||(r=(0,p.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 30px;\n  font-weight: bold;\n  margin-top: 100px;\n  margin-bottom: 50px;\n  border-radius: 10px;\n  width: 600px;\n  height: 60px;\n  background-color: #79dae8;\n  color: #2155cd;\n"]))),m=g.Z.div(c||(c=(0,p.Z)(["\n  display: flex;\n  margin-bottom: 100px;\n"]))),v=g.Z.div(o||(o=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  width: 200px;\n  height: 800px;\n  background-color: #79dae8;\n  border-radius: 10px 0px 0px 10px;\n  border-right: 2px solid #2155cd;\n  div {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 200px;\n    height: 80px;\n    border-bottom: 2px solid #2155cd;\n    color: #2155cd;\n    font-size: 24px;\n    font-weight: bold;\n    cursor: pointer;\n    :hover {\n      background-color: #2155cd;\n      color: #79dae8;\n    }\n  }\n"]))),k=g.Z.div(a||(a=(0,p.Z)(["\n  border-radius: 10px 0px 0px 0px;\n"]))),j=g.Z.div(l||(l=(0,p.Z)(["\n  display: flex;\n  width: 1000px;\n  height: 800px;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: flex-start;\n  background-color: #79dae8;\n  border-radius: 0px 10px 10px 0px;\n"]))),y=g.Z.div(s||(s=(0,p.Z)(["\n  width: 100%;\n  height: 60px;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  div {\n    border-bottom: 1px solid #2155cd;\n    display: flex;\n    align-items: center;\n    height: 100%;\n    color: #2155cd;\n    font-size: 16px;\n    font-weight: bold;\n  }\n"]))),P=g.Z.div(d||(d=(0,p.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 50px;\n  background-color: #2155cd;\n"]))),b=t(85893);function C(n){var e,t;return(0,b.jsxs)(x,{children:[(0,b.jsx)(h,{children:"\uc0c1\ud488\ud310\ub9e4\ub0b4\uc5ed"}),(0,b.jsxs)(m,{children:[(0,b.jsxs)(v,{children:[(0,b.jsx)(k,{onClick:n.onClickPointInfo,children:"\ud3ec\uc778\ud2b8\ub0b4\uc5ed"}),(0,b.jsx)("div",{onClick:n.onClickPWChange,children:"\ube44\ubc00\ubc88\ud638\ubcc0\uacbd"}),(0,b.jsx)("div",{onClick:n.onClickSelling,children:"\uc0c1\ud488\ud310\ub9e4\ub0b4\uc5ed"}),(0,b.jsx)("div",{onClick:n.onClickBuying,children:"\uc0c1\ud488\uad6c\ub9e4\ub0b4\uc5ed"}),(0,b.jsx)("div",{onClick:n.onClickPickedList,children:"\ub0b4\uac00\ucc1c\ud55c\uc0c1\ud488"})]}),(0,b.jsxs)(j,{children:[(0,b.jsx)("div",{style:{height:"700px"},children:null===(e=n.data)||void 0===e||null===(t=e.fetchPointTransactionsOfSelling)||void 0===t?void 0:t.map((function(n,e){return(0,b.jsxs)(y,{children:[(0,b.jsx)("div",{style:{width:"40px",justifyContent:"center"},index:e,children:e+1}),(0,b.jsxs)("div",{style:{width:"200px"},index:e,children:["\ud310\ub9e4\uae08\uc561 : ",n.amount,"\uc6d0"]}),(0,b.jsxs)("div",{style:{width:"600px"},index:e,children:["\uac8c\uc2dc\uae00\uc81c\ubaa9 : ",n.useditem.remarks]}),(0,b.jsxs)("div",{style:{width:"160px",justifyContent:"center"},index:e,children:["\ud310\ub9e4\uc77c\uc790 : ",(0,u._3)(n.createdAt)]})]},n._id)}))}),(0,b.jsx)(P,{children:(0,b.jsx)(f.Z,{refetch:n.refetch,count:n.count})})]})]})]})}var w,O,Z=t(11163),_=t(71641),S=t(17283),E=(0,S.Ps)(w||(w=(0,p.Z)(["\n  query fetchPointTransactionsOfSelling($search: String, $page: Int) {\n    fetchPointTransactionsOfSelling(search: $search, page: $page) {\n      _id\n      amount\n      createdAt\n      useditem {\n        remarks\n      }\n    }\n  }\n"]))),N=(0,S.Ps)(O||(O=(0,p.Z)(["\n  query fetchPointTransactionsCountOfSelling {\n    fetchPointTransactionsCountOfSelling\n  }\n"])));function A(){var n=(0,Z.useRouter)(),e=(0,_.a)(E,{variables:{search:"",page:1}}),t=e.data,i=e.refetch,r=(0,_.a)(N).data;return(0,b.jsx)(C,{data:t,count:r,refetch:i,onClickPage:function(n){n.target instanceof Element&&i({page:Number(n.target.id)})},onClickPWChange:function(){n.push("/fleamarket/mypage/changePassword")},onClickPickedList:function(){n.push("/fleamarket/mypage/pickedList")},onClickSelling:function(){n.push("/fleamarket/mypage/selling")},onClickBuying:function(){n.push("/fleamarket/mypage/buying")},onClickPointInfo:function(){n.push("/fleamarket/mypage/pointInfo")}})}var T=(0,t(38033).Q)((function(){return(0,b.jsx)(A,{})}))},38033:function(n,e,t){"use strict";t.d(e,{Q:function(){return l}});var i=t(4942),r=t(11163),c=t(67294),o=t(85893);function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,i)}return t}var l=function(n){return function(e){var t=(0,r.useRouter)();return(0,c.useEffect)((function(){document.cookie||(alert("\ub85c\uadf8\uc778\uc774 \ud544\uc694\ud55c \uc11c\ube44\uc2a4 \uc785\ub2c8\ub2e4."),t.push("/fleamarket/login"))}),[]),(0,o.jsx)(n,function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){(0,i.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}({},e))}}},50187:function(n,e,t){"use strict";t.d(e,{Z:function(){return s}});var i,r=t(67294),c=t(30168),o=t(10386).Z.span(i||(i=(0,c.Z)(["\n  margin: 0px 10px;\n  color: ",";\n  font-weight: ",";\n  cursor: ",";\n"])),(function(n){return n.isActive?"#E8F9FD":"#79DAE8"}),(function(n){return n.isActive?"bold":"normal"}),(function(n){return n.isActive?"default":"pointer"})),a=t(85893);function l(n){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o,{onClick:n.onClickPrevPage,children:"\uc774\uc804"}),new Array(10).fill(1).map((function(e,t){return n.startPage+t<=n.lastPage&&(0,a.jsx)(o,{onClick:n.onClickPage,id:String(n.startPage+t),isActive:n.startPage+t===n.activedPage,children:n.startPage+t},n.startPage+t)})),(0,a.jsx)(o,{onClick:n.onClickNextPage,children:"\ub2e4\uc74c"})]})}function s(n){var e=(0,r.useState)(1),t=e[0],i=e[1],c=(0,r.useState)(1),o=c[0],s=c[1],d=n.count?Math.ceil(n.count/10):0;return(0,a.jsx)(l,{startPage:t,lastPage:d,activedPage:o,onClickPage:function(e){if(e.target instanceof Element){var t=Number(e.target.id);s(t),n.refetch({page:t})}},onClickPrevPage:function(){t<=1||(i((function(n){return n-10})),n.refetch({page:t}),s(t-10))},onClickNextPage:function(){t+10>d||(i((function(n){return n+10})),n.refetch({page:t}),s(t+10))}})}},93669:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/fleamarket/mypage/selling",function(){return t(23256)}])}},function(n){n.O(0,[774,888,179],(function(){return e=93669,n(n.s=e);var e}));var e=n.O();_N_E=e}]);