(this.webpackJsonpaltb=this.webpackJsonpaltb||[]).push([[0],{15:function(e,t,i){},16:function(e,t,i){},17:function(e,t,i){"use strict";i.r(t);var c=i(1),n=i(9),a=i.n(n),s=i(4),l=i(5),r=i(2),o=i(3),u=i.p+"static/media/soundNotify.40c2f672.mp3",O=i(0);function m(e){var t=Object(c.useRef)(!1),i=Object(c.useState)(!1),n=Object(o.a)(i,2),a=n[0],m=n[1],d=Object(c.useState)("Select time"),j=Object(o.a)(d,2),v=j[0],b=j[1],_=Object(c.useState)(e.isActive),x=Object(o.a)(_,2),h=x[0],g=x[1],p=Object(c.useState)(e.isActive&&new Date(e.time.savedDate)),M=Object(o.a)(p,2),T=M[0],S=M[1],f=Object(c.useState)({hours:"00",minutes:"00",seconds:"00"}),N=Object(o.a)(f,2),C=N[0],R=N[1],J=new Audio(u),A=["Timer completed!",document.title],I=["/altimes/timer.ico","/altimes/favicon.ico"],B=Object(c.useRef)(),E=Object(c.useRef)(),P=function(){var t=JSON.parse(localStorage.getItem("USER_TIME"));e.setSaveLocalTime((function(t){return Object(r.a)(Object(r.a)({},t),{},Object(s.a)({},e.typeTimer,Object(l.a)(t[e.typeTimer].filter((function(t){return t.id!==e.time.id})))))})),t[e.typeTimer]=t[e.typeTimer].filter((function(t){return t.id!==e.time.id})),localStorage.USER_TIME=JSON.stringify(t)},y=function(t,i,c,n){var a=JSON.parse(localStorage.getItem("USER_TIME"));e.setSaveLocalTime((function(a){var o=Object(l.a)(a[e.typeTimer]);return o[e.id]={id:e.id,savedDate:t,completedTime:i,isActive:c,timerFinish:n},Object(r.a)(Object(r.a)({},a),{},Object(s.a)({},e.typeTimer,Object(l.a)(o)))})),a[e.typeTimer][e.id]={id:e.id,savedDate:t,completedTime:i,isActive:c,timerFinish:n},localStorage.USER_TIME=JSON.stringify(a)};return Object(c.useEffect)((function(){if(t.current){var e=v.split("_"),i=Object(o.a)(e,4),c=(i[0],i[1]),n=i[2],a=i[3];S(T.setHours(T.getHours()+Number(c))),S(T.setMinutes(T.getMinutes()+Number(n))),S(T.setSeconds(T.getSeconds()+Number(a))),y(T.toJSON(),"".concat(String(T.getHours()).padStart(2,"0"),":").concat(String(T.getMinutes()).padStart(2,"0"),":").concat(String(T.getSeconds()).padStart(2,"0")),!0,!1)}}),[h]),Object(c.useEffect)((function(){h?B.current=setInterval((function(){var e=new Date,t=new Date;t.setHours(T.getHours()-e.getHours()),t.setMinutes(T.getMinutes()-e.getMinutes()),t.setSeconds(T.getSeconds()-e.getSeconds()),T.getTime()-e.getTime()>0?R((function(e){return Object(r.a)(Object(r.a)({},e),{},{hours:t.getHours(),minutes:t.getMinutes(),seconds:t.getSeconds()})})):(clearInterval(B.current),R((function(e){return Object(r.a)(Object(r.a)({},e),{},{hours:"00",minutes:"00",seconds:"00"})})),y(null,"".concat(String(T.getHours()).padStart(2,"0"),":").concat(String(T.getMinutes()).padStart(2,"0"),":").concat(String(T.getSeconds()).padStart(2,"0")),!1,!0),J.volume=.3,J.play(),function(){var e=0;window.focus(),E.current=setInterval((function(){e++,document.title=A[e%2],document.head.children[1].attributes[1].value=I[e%2]}),1e3)}())}),1e3):t.current=!0}),[h]),Object(O.jsxs)("div",{className:"wrapperTimerAnimation",children:[Object(O.jsx)("div",{className:"timer\u0421reateAnimation"}),Object(O.jsxs)("div",{className:"containerTimer ".concat(a?"animationTimerRemove":""),children:[Object(O.jsxs)("div",{className:"conteinerTimerStart",children:[e.timerFinish&&Object(O.jsx)("button",{className:"completedTimerBtn",onClick:function(){clearInterval(B.current),clearInterval(E.current),t.current=!1,P(),window.blur(),document.title=A[1],document.head.children[1].attributes[1].value=I[1]}}),!e.timerFinish&&Object(O.jsx)("button",{className:"removeTimerBtn",onClick:function(){setTimeout((function(){clearInterval(B.current),t.current=!1,P()}),390),m(!0)}}),Object(O.jsxs)("div",{className:"timer",children:[Object(O.jsx)("p",{className:"time",children:"\n                                ".concat(String(C.hours).padStart(2,"0"),":").concat(String(C.minutes).padStart(2,"0"),":").concat(String(C.seconds).padStart(2,"0"),"\n                            ")}),Object(O.jsxs)("div",{className:"containerCompletedTimerText",children:[Object(O.jsx)("p",{className:"completedTimerText",children:"Completed: "}),Object(O.jsx)("p",{children:e.time.completedTime})]})]})]}),Object(O.jsxs)("div",{className:"containerTimerEnd",children:[e.timerFinish||h?Object(O.jsx)(O.Fragment,{}):!e.isActive&&Object(O.jsxs)("div",{className:"containerTimerSelect",children:[Object(O.jsxs)("select",{className:"timerSelect",onWheel:function(e){return function(e){e.deltaY<0?0!==e.target.options.selectedIndex&&(e.target.options.selectedIndex--,b(e.target.options[e.target.selectedIndex].value)):e.deltaY>0&&e.target.options.selectedIndex!==e.target.options.length-1&&(e.target.options.selectedIndex++,b(e.target.options[e.target.selectedIndex].value))}(e)},onClick:function(e){e.target.options?b(e.target.options[e.target.selectedIndex].value):b(e.target.value)},children:[Object(O.jsx)("option",{children:"Select time"}),e.collectionTimes.map((function(e,t){return Object(O.jsx)("option",{value:e.value,children:e.text},t)}))]}),Object(O.jsx)("button",{style:"Select time"===v?{cursor:"not-allowed",opacity:"50%"}:{cursor:"pointer"},className:"startTimerBtn",disabled:"Select time"===v,onClick:function(){S(new Date),g(!0),t.current=!0}})]}),e.isActive&&Object(O.jsx)("button",{className:"cancelTimerBtn",onClick:function(){clearInterval(B.current),g(!1),t.current=!1,b("Select time"),R((function(e){return Object(r.a)(Object(r.a)({},e),{},{hours:"00",minutes:"00",seconds:"00"})})),y(null,"00:00:00",!1,!1)}})]})]})]})}i(15),i(16);function d(){var e=Object(c.useState)({COMM:[],BOOK:[],PROJ:[]}),t=Object(o.a)(e,2),i=t[0],n=t[1],a=[{text:"00:01:00",value:"COMM_00_01_00"},{text:"00:20:00",value:"COMM_00_20_00"},{text:"00:30:00",value:"COMM_00_30_00"},{text:"01:00:00",value:"COMM_01_00_00"},{text:"01:10:00",value:"COMM_01_10_00"},{text:"01:20:00",value:"COMM_01_20_00"},{text:"01:30:00",value:"COMM_01_30_00"},{text:"01:40:00",value:"COMM_01_40_00"},{text:"01:45:00",value:"COMM_01_45_00"},{text:"02:00:00",value:"COMM_02_00_00"},{text:"02:15:00",value:"COMM_02_15_00"},{text:"02:30:00",value:"COMM_02_30_00"},{text:"02:40:00",value:"COMM_02_40_00"},{text:"03:00:00",value:"COMM_03_00_00"},{text:"03:20:00",value:"COMM_03_20_00"},{text:"04:00:00",value:"COMM_04_00_00"},{text:"05:00:00",value:"COMM_05_00_00"},{text:"05:20:00",value:"COMM_05_20_00"},{text:"06:00:00",value:"COMM_06_00_00"},{text:"08:00:00",value:"COMM_08_00_00"},{text:"09:00:00",value:"COMM_09_00_00"},{text:"10:00:00",value:"COMM_10_00_00"}],u=[{text:"02:00:00",value:"BOOK_02_00_00"},{text:"04:00:00",value:"BOOK_04_00_00"},{text:"08:00:00",value:"BOOK_08_00_00"}],d=[{text:"00:30:00",value:"PROJ_00_30_00"},{text:"01:00:00",value:"PROJ_01_00_00"},{text:"01:30:00",value:"PROJ_01_30_00"},{text:"02:00:00",value:"PROJ_02_00_00"},{text:"02:30:00",value:"PROJ_02_30_00"},{text:"03:00:00",value:"PROJ_03_00_00"},{text:"04:00:00",value:"PROJ_04_00_00"},{text:"05:00:00",value:"PROJ_05_00_00"},{text:"06:00:00",value:"PROJ_06_00_00"},{text:"08:00:00",value:"PROJ_08_00_00"},{text:"09:00:00",value:"PROJ_09_00_00"},{text:"10:00:00",value:"PROJ_10_00_00"},{text:"12:00:00",value:"PROJ_10_00_00"}];localStorage.getItem("USER_TIME")||localStorage.setItem("USER_TIME",JSON.stringify({COMM:[],BOOK:[],PROJ:[]})),Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem("USER_TIME"));(e.COMM.length||e.BOOK.length||e.PROJ.length)&&n((function(){return e}))}),[0]);var j=function(e){var t=e.target.name,i=JSON.parse(localStorage.getItem("USER_TIME"));n((function(e){return Object(r.a)(Object(r.a)({},e),{},Object(s.a)({},t,[].concat(Object(l.a)(e[t]),[{id:e[t].length?e[t][e[t].length-1].id+1:0,savedDate:null,completedTime:"00:00:00",isActive:!1,timerFinish:!1}])))})),n((function(e){return i[t].push({id:e[t][e[t].length-1].id,savedDate:null,completedTime:"00:00:00",isActive:!1,timerFinish:!1}),localStorage.USER_TIME=JSON.stringify(i),e}))};return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{className:"containerBgTitle",children:[Object(O.jsx)("p",{className:"bgTitle",children:"ALTimes "}),Object(O.jsx)("p",{className:"ver",children:"v. 0.1"})]}),Object(O.jsxs)("div",{className:"container",children:[Object(O.jsxs)("fieldset",{className:"containerTimers",children:[Object(O.jsx)("legend",{className:"containerTitle",children:Object(O.jsx)("p",{className:"commissionTitle",children:"COMMISSION"})}),Object(O.jsx)("div",{className:"wrapperTimer",children:i.COMM.length?i.COMM.map((function(e,t){return Object(O.jsx)(m,{time:e,id:t,setSaveLocalTime:n,collectionTimes:a,typeTimer:"COMM",isActive:e.isActive,timerFinish:e.timerFinish},e.id)})):Object(O.jsx)("div",{className:"availableTimerText",children:"Not found"})}),4!==i.COMM.length&&Object(O.jsxs)("div",{className:"containerAddTimerBtn",children:[Object(O.jsx)("button",{name:"COMM",className:"addTimerBtn",onClick:function(e){j(e)}}),Object(O.jsxs)("div",{className:"containerTitleAvailable",children:[Object(O.jsx)("p",{className:"titleAvailable",children:"Available:"}),Object(O.jsx)("p",{children:4-i.COMM.length})]})]})]}),Object(O.jsxs)("fieldset",{className:"containerTimers",children:[Object(O.jsx)("legend",{className:"containerTitle",children:Object(O.jsx)("p",{children:"CLASSROOM"})}),Object(O.jsx)("div",{className:"wrapperTimer",children:i.BOOK.length?i.BOOK.map((function(e,t){return Object(O.jsx)(m,{time:e,id:t,setSaveLocalTime:n,collectionTimes:u,typeTimer:"BOOK",isActive:e.isActive,timerFinish:e.timerFinish},e.id)})):Object(O.jsx)("div",{className:"availableTimerText",children:"Not found"})}),4!==i.BOOK.length&&Object(O.jsxs)("div",{className:"containerAddTimerBtn",children:[Object(O.jsx)("button",{name:"BOOK",className:"addTimerBtn",onClick:function(e){j(e)}}),Object(O.jsxs)("div",{className:"containerTitleAvailable",children:[Object(O.jsx)("p",{className:"titleAvailable",children:"Available:"}),Object(O.jsx)("p",{children:4-i.BOOK.length})]})]})]}),Object(O.jsxs)("fieldset",{className:"containerTimers",children:[Object(O.jsx)("legend",{className:"containerTitle",children:Object(O.jsx)("p",{children:"LAB"})}),Object(O.jsx)("div",{className:"wrapperTimer",children:i.PROJ.length?i.PROJ.map((function(e,t){return Object(O.jsx)(m,{time:e,id:t,setSaveLocalTime:n,collectionTimes:d,typeTimer:"PROJ",isActive:e.isActive,timerFinish:e.timerFinish},e.id)})):Object(O.jsx)("div",{className:"availableTimerText",children:"Not found"})}),1!==i.PROJ.length&&Object(O.jsxs)("div",{className:"containerAddTimerBtn",children:[Object(O.jsx)("button",{name:"PROJ",className:"addTimerBtn",onClick:function(e){j(e)}}),Object(O.jsxs)("div",{className:"containerTitleAvailable",children:[Object(O.jsx)("p",{className:"titleAvailable",children:"Available:"}),Object(O.jsx)("p",{children:1-i.PROJ.length})]})]})]})]})]})}a.a.render(Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(d,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.31e37fd0.chunk.js.map