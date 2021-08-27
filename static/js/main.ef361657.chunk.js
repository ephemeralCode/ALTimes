/*! For license information please see main.ef361657.chunk.js.LICENSE.txt */
(this.webpackJsonpaltb=this.webpackJsonpaltb||[]).push([[0],{15:function(e,t,i){},16:function(e,t,i){"use strict";i.r(t);var c=i(1),n=i(9),a=i.n(n),r=i(4),s=i(5),l=i(2),o=i(3),O=i(0);function u(e){var t=Object(c.useRef)(!1),i=Object(c.useState)("Select time"),n=Object(o.a)(i,2),a=n[0],u=n[1],j=Object(c.useState)(!1),d=Object(o.a)(j,2),m=d[0],b=d[1],M=Object(c.useState)(e.isActive),v=Object(o.a)(M,2),S=v[0],g=v[1],_=Object(c.useState)(e.isActive&&new Date),h=Object(o.a)(_,2),x=h[0],f=h[1],p=Object(c.useState)({hours:"00",minutes:"00",seconds:"00"}),T=Object(o.a)(p,2),C=T[0],N=T[1],I=Object(c.useRef)(),E=function(){var t=JSON.parse(localStorage.getItem("USER_TIME"));e.setSaveLocalTime((function(t){return Object(l.a)(Object(l.a)({},t),{},Object(r.a)({},e.typeTimer,Object(s.a)(t[e.typeTimer].filter((function(t){return t.id!==e.time.id})))))})),t[e.typeTimer]=t[e.typeTimer].filter((function(t){return t.id!==e.time.id})),localStorage.USER_TIME=JSON.stringify(t)},R=function(t,i,c){var n=JSON.parse(localStorage.getItem("USER_TIME"));e.setSaveLocalTime((function(n){var a=Object(s.a)(n[e.typeTimer]);return a[e.id]={id:e.id,completedTime:t,isActive:i,timerFinish:c},Object(l.a)(Object(l.a)({},n),{},Object(r.a)({},e.typeTimer,Object(s.a)(a)))})),n[e.typeTimer][e.id]={id:e.id,completedTime:t,isActive:i,timerFinish:c},localStorage.USER_TIME=JSON.stringify(n)};return Object(c.useEffect)((function(){if(console.log(m),console.log(t.current),t.current){var e=a.split("_"),i=Object(o.a)(e,4),c=(i[0],i[1]),n=i[2],r=i[3];f(x.setHours(x.getHours()+Number(c))),f(x.setMinutes(x.getMinutes()+Number(n))),f(x.setSeconds(x.getSeconds()+Number(r))),R("".concat(String(x.getHours()).padStart(2,"0"),":\n                ").concat(String(x.getMinutes()).padStart(2,"0"),":\n                ").concat(String(x.getSeconds()).padStart(2,"0")),!0,!1)}}),[m]),Object(c.useEffect)((function(){if(S){var i=JSON.parse(localStorage.getItem("USER_TIME"))[e.typeTimer][e.id].completedTime.split(":"),c=Object(o.a)(i,3),n=c[0],a=c[1],r=c[2];f(x.setHours(n)),f(x.setMinutes(a)),f(x.setSeconds(r)),t.current=!0}}),[]),Object(c.useEffect)((function(){t.current?I.current=setInterval((function(){var e=new Date,t=new Date;t.setHours(x.getHours()-e.getHours()),t.setMinutes(x.getMinutes()-e.getMinutes()),t.setSeconds(x.getSeconds()-e.getSeconds()),x.getTime()-e.getTime()>0?N((function(e){return Object(l.a)(Object(l.a)({},e),{},{hours:t.getHours(),minutes:t.getMinutes(),seconds:t.getSeconds()})})):(clearInterval(I.current),g(!1),N((function(e){return Object(l.a)(Object(l.a)({},e),{},{hours:"00",minutes:"00",seconds:"00"})})),R("".concat(String(x.getHours()).padStart(2,"0"),":\n                        ").concat(String(x.getMinutes()).padStart(2,"0"),":\n                        ").concat(String(x.getSeconds()).padStart(2,"0")),!0,!0))}),1e3):t.current=!0}),[m]),Object(O.jsxs)("div",{className:"timer",children:[e.timerFinish&&Object(O.jsx)("button",{onClick:function(){clearInterval(I.current),t.current=!1,g(!1),E()},children:"V"}),Object(O.jsxs)("div",{className:"showTime",children:[Object(O.jsx)("h2",{className:"time",children:"\n                    ".concat(String(C.hours).padStart(2,"0"),":\n                    ").concat(String(C.minutes).padStart(2,"0"),":\n                    ").concat(String(C.seconds).padStart(2,"0"),"\n                ")}),Object(O.jsxs)("p",{children:["Completed: ",e.time.completedTime]})]}),e.timerFinish||m?Object(O.jsx)(O.Fragment,{}):!S&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("select",{onClick:function(e){u(e.target.options[e.target.selectedIndex].value)},children:[Object(O.jsx)("option",{children:"Select time"}),e.collectionTimes.map((function(e,t){return Object(O.jsx)("option",{value:e.value,children:e.text},t)}))]}),Object(O.jsx)("button",{disabled:"Select time"===a,onClick:function(){f(new Date),g(!0),b(!0),t.current=!0},children:"Go"})]}),S?Object(O.jsx)("button",{onClick:function(){clearInterval(I.current),b(!1),t.current=!1,g(!1),u("Select time"),N((function(e){return Object(l.a)(Object(l.a)({},e),{},{hours:"00",minutes:"00",seconds:"00"})})),R("00:00:00",!1,!1)},children:"Cancel"}):Object(O.jsx)(O.Fragment,{}),!e.timerFinish&&Object(O.jsx)("button",{onClick:function(){clearInterval(I.current),t.current=!1,g(!1),E()},children:"Del"})]})}i(15);function j(){var e=Object(c.useState)(4),t=Object(o.a)(e,2),i=t[0],n=(t[1],Object(c.useState)({COMM:[],BOOK:[],PROJ:[]})),a=Object(o.a)(n,2),j=a[0],d=a[1],m=[{text:"10:00:00",value:"COMM_10_00_00"},{text:"09:00:00",value:"COMM_09_00_00"},{text:"08:00:00",value:"COMM_08_00_00"},{text:"06:00:00",value:"COMM_06_00_00"},{text:"05:20:00",value:"COMM_05_20_00"},{text:"05:00:00",value:"COMM_05_00_00"},{text:"04:00:00",value:"COMM_04_00_00"},{text:"03:20:00",value:"COMM_03_20_00"},{text:"03:00:00",value:"COMM_03_00_00"},{text:"02:40:00",value:"COMM_02_40_00"},{text:"02:30:00",value:"COMM_02_30_00"},{text:"02:15:00",value:"COMM_02_15_00"},{text:"02:00:00",value:"COMM_02_00_00"},{text:"01:45:00",value:"COMM_01_45_00"},{text:"01:40:00",value:"COMM_01_40_00"},{text:"01:30:00",value:"COMM_01_30_00"},{text:"01:20:00",value:"COMM_01_20_00"},{text:"01:10:00",value:"COMM_01_10_00"},{text:"01:00:00",value:"COMM_01_00_00"},{text:"00:30:00",value:"COMM_00_30_00"},{text:"00:20:00",value:"COMM_00_20_00"},{text:"00:01:00",value:"COMM_00_01_00"}];localStorage.getItem("USER_TIME")||localStorage.setItem("USER_TIME",JSON.stringify({COMM:[],BOOK:[],PROJ:[]}));var b=function(e){var t=e.target.name,i=JSON.parse(localStorage.getItem("USER_TIME"));d((function(e){return Object(l.a)(Object(l.a)({},e),{},Object(r.a)({},t,[].concat(Object(s.a)(e[t]),[{id:e[t].length?e[t][e[t].length-1].id+1:0,completedTime:"00:00:00",isActive:!1,timerFinish:!1}])))})),d((function(e){return i[t].push({id:e[t][e[t].length-1].id,completedTime:"00:00:00",isActive:!1,timerFinish:!1}),localStorage.USER_TIME=JSON.stringify(i),e}))};return Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem("USER_TIME"));(e.COMM.length||e.BOOK.length||e.PROJ.length)&&d((function(){return e}))}),[0]),Object(O.jsxs)("div",{className:"container",children:[Object(O.jsxs)("div",{className:"containerTimer",children:[Object(O.jsxs)("div",{className:"containerCommissionTitle",children:[Object(O.jsx)("p",{children:"COMMISSION"}),Object(O.jsx)("div",{className:"containerCommissionTitleAvailable",children:Object(O.jsxs)("p",{children:["Available ",i-j.COMM.length]})})]}),Object(O.jsx)("div",{children:j.COMM.length?j.COMM.map((function(e,t){return console.log(e.isActive),Object(O.jsx)(u,{time:e,id:t,setSaveLocalTime:d,collectionTimes:m,typeTimer:"COMM",isActive:e.isActive,timerFinish:e.timerFinish},e.id)})):Object(O.jsx)("div",{className:"availableTimer",children:"Not found"})}),j.COMM.length!==i&&Object(O.jsx)("button",{name:"COMM",className:"addTimer",onClick:function(e){b(e)},children:"+"})]}),Object(O.jsxs)("div",{className:"containerTimer",children:[Object(O.jsxs)("div",{className:"containerTitle",children:[Object(O.jsx)("p",{children:"CLASSROOM"}),Object(O.jsxs)("div",{children:["Available ",4-j.BOOK.length]})]}),Object(O.jsx)("div",{children:j.BOOK.length?j.BOOK.map((function(e,t){return Object(O.jsx)(u,{time:e,id:t,setSaveLocalTime:d,collectionTimes:m,typeTimer:"BOOK",isActive:e.isActive,timerFinish:e.timerFinish},e.id)})):Object(O.jsx)("div",{className:"availableTimer",children:"Not found"})}),4!==j.BOOK.length&&Object(O.jsx)("button",{name:"BOOK",className:"addTimer",onClick:function(e){b(e)},children:"+"})]}),Object(O.jsxs)("div",{className:"containerTimer",children:[Object(O.jsxs)("div",{className:"containerTitle",children:[Object(O.jsx)("p",{children:"LAB"}),Object(O.jsxs)("div",{children:["Available ",1-j.PROJ.length]})]}),Object(O.jsx)("div",{children:j.PROJ.length?j.PROJ.map((function(e,t){return Object(O.jsx)(u,{time:e,id:t,setSaveLocalTime:d,collectionTimes:m,typeTimer:"PROJ",isActive:e.isActive,timerFinish:e.timerFinish},e.id)})):Object(O.jsx)("div",{className:"availableTimer",children:"Not found"})}),1!==j.PROJ.length&&Object(O.jsx)("button",{name:"PROJ",className:"addTimer",onClick:function(e){b(e)},children:"+"})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("br",{}),Object(O.jsx)("button",{onClick:function(){localStorage.clear(),localStorage.setItem("USER_TIME",JSON.stringify({COMM:[],BOOK:[],PROJ:[]}))},children:"Update LC"})]})]})}a.a.render(Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(j,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.ef361657.chunk.js.map