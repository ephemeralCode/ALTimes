(this.webpackJsonpaltb=this.webpackJsonpaltb||[]).push([[0],{15:function(e,t,i){},16:function(e,t,i){},17:function(e,t,i){"use strict";i.r(t);var c=i(1),n=i(9),a=i.n(n),s=i(4),l=i(5),r=i(2),o=i(3),O=i.p+"static/media/soundNotify.40c2f672.mp3",u=i(0);function d(e){var t=Object(c.useRef)(!1),i=Object(c.useState)("Select time"),n=Object(o.a)(i,2),a=n[0],d=n[1],m=Object(c.useState)(e.isActive),j=Object(o.a)(m,2),_=j[0],v=j[1],b=Object(c.useState)(e.isActive&&new Date(e.time.savedDate)),x=Object(o.a)(b,2),g=x[0],h=x[1],M=Object(c.useState)({hours:"00",minutes:"00",seconds:"00"}),p=Object(o.a)(M,2),S=p[0],T=p[1],f=Object(c.useRef)();var N=function(){var t=JSON.parse(localStorage.getItem("USER_TIME"));e.setSaveLocalTime((function(t){return Object(r.a)(Object(r.a)({},t),{},Object(s.a)({},e.typeTimer,Object(l.a)(t[e.typeTimer].filter((function(t){return t.id!==e.time.id})))))})),t[e.typeTimer]=t[e.typeTimer].filter((function(t){return t.id!==e.time.id})),localStorage.USER_TIME=JSON.stringify(t)},C=function(t,i,c,n){var a=JSON.parse(localStorage.getItem("USER_TIME"));e.setSaveLocalTime((function(a){var o=Object(l.a)(a[e.typeTimer]);return o[e.id]={id:e.id,savedDate:t,completedTime:i,isActive:c,timerFinish:n},Object(r.a)(Object(r.a)({},a),{},Object(s.a)({},e.typeTimer,Object(l.a)(o)))})),a[e.typeTimer][e.id]={id:e.id,savedDate:t,completedTime:i,isActive:c,timerFinish:n},localStorage.USER_TIME=JSON.stringify(a)};return Object(c.useEffect)((function(){if(t.current){var e=a.split("_"),i=Object(o.a)(e,4),c=(i[0],i[1]),n=i[2],s=i[3];h(g.setHours(g.getHours()+Number(c))),h(g.setMinutes(g.getMinutes()+Number(n))),h(g.setSeconds(g.getSeconds()+Number(s))),C(g.toJSON(),"".concat(String(g.getHours()).padStart(2,"0"),":").concat(String(g.getMinutes()).padStart(2,"0"),":").concat(String(g.getSeconds()).padStart(2,"0")),!0,!1)}}),[_]),Object(c.useEffect)((function(){_?f.current=setInterval((function(){var e=new Date,t=new Date;t.setHours(g.getHours()-e.getHours()),t.setMinutes(g.getMinutes()-e.getMinutes()),t.setSeconds(g.getSeconds()-e.getSeconds()),g.getTime()-e.getTime()>0?T((function(e){return Object(r.a)(Object(r.a)({},e),{},{hours:t.getHours(),minutes:t.getMinutes(),seconds:t.getSeconds()})})):(clearInterval(f.current),T((function(e){return Object(r.a)(Object(r.a)({},e),{},{hours:"00",minutes:"00",seconds:"00"})})),C(null,"".concat(String(g.getHours()).padStart(2,"0"),":").concat(String(g.getMinutes()).padStart(2,"0"),":").concat(String(g.getSeconds()).padStart(2,"0")),!1,!0),function(){var e=new Audio(O);e.volume=.3,e.play()}())}),1e3):t.current=!0}),[_]),Object(u.jsxs)("div",{className:"containerTimer",children:[Object(u.jsxs)("div",{className:"conteinerTimerStart",children:[e.timerFinish&&Object(u.jsx)("button",{className:"completedTimerBtn",onClick:function(){clearInterval(f.current),t.current=!1,N()}}),!e.timerFinish&&Object(u.jsx)("button",{className:"removeTimerBtn",onClick:function(){clearInterval(f.current),t.current=!1,N()}}),Object(u.jsxs)("div",{className:"timer",children:[Object(u.jsx)("p",{className:"time",children:"\n                            ".concat(String(S.hours).padStart(2,"0"),":").concat(String(S.minutes).padStart(2,"0"),":").concat(String(S.seconds).padStart(2,"0"),"\n                        ")}),Object(u.jsxs)("div",{className:"containerCompletedTimerText",children:[Object(u.jsx)("p",{className:"completedTimerText",children:"Completed: "}),Object(u.jsx)("p",{children:e.time.completedTime})]})]})]}),Object(u.jsxs)("div",{className:"containerTimerEnd",children:[e.timerFinish||_?Object(u.jsx)(u.Fragment,{}):!e.isActive&&Object(u.jsxs)("div",{className:"containerTimerSelect",children:[Object(u.jsxs)("select",{className:"timerSelect",onWheel:function(e){return function(e){e.deltaY<0?0!==e.target.options.selectedIndex&&(e.target.options.selectedIndex--,d(e.target.options[e.target.selectedIndex].value)):e.deltaY>0&&e.target.options.selectedIndex!==e.target.options.length-1&&(e.target.options.selectedIndex++,d(e.target.options[e.target.selectedIndex].value))}(e)},onClick:function(e){e.target.options?d(e.target.options[e.target.selectedIndex].value):d(e.target.value)},children:[Object(u.jsx)("option",{children:"Select time"}),e.collectionTimes.map((function(e,t){return Object(u.jsx)("option",{value:e.value,children:e.text},t)}))]}),Object(u.jsx)("button",{style:"Select time"===a?{cursor:"not-allowed",opacity:"50%"}:{cursor:"pointer"},className:"startTimerBtn",disabled:"Select time"===a,onClick:function(){h(new Date),v(!0),t.current=!0}})]}),e.isActive&&Object(u.jsx)("button",{className:"cancelTimerBtn",onClick:function(){clearInterval(f.current),v(!1),t.current=!1,d("Select time"),T((function(e){return Object(r.a)(Object(r.a)({},e),{},{hours:"00",minutes:"00",seconds:"00"})})),C(null,"00:00:00",!1,!1)}})]})]})}i(15),i(16);function m(){var e=Object(c.useState)({COMM:[],BOOK:[],PROJ:[]}),t=Object(o.a)(e,2),i=t[0],n=t[1],a=[{text:"00:01:00",value:"COMM_00_01_00"},{text:"00:20:00",value:"COMM_00_20_00"},{text:"00:30:00",value:"COMM_00_30_00"},{text:"01:00:00",value:"COMM_01_00_00"},{text:"01:10:00",value:"COMM_01_10_00"},{text:"01:20:00",value:"COMM_01_20_00"},{text:"01:30:00",value:"COMM_01_30_00"},{text:"01:40:00",value:"COMM_01_40_00"},{text:"01:45:00",value:"COMM_01_45_00"},{text:"02:00:00",value:"COMM_02_00_00"},{text:"02:15:00",value:"COMM_02_15_00"},{text:"02:30:00",value:"COMM_02_30_00"},{text:"02:40:00",value:"COMM_02_40_00"},{text:"03:00:00",value:"COMM_03_00_00"},{text:"03:20:00",value:"COMM_03_20_00"},{text:"04:00:00",value:"COMM_04_00_00"},{text:"05:00:00",value:"COMM_05_00_00"},{text:"05:20:00",value:"COMM_05_20_00"},{text:"06:00:00",value:"COMM_06_00_00"},{text:"08:00:00",value:"COMM_08_00_00"},{text:"09:00:00",value:"COMM_09_00_00"},{text:"10:00:00",value:"COMM_10_00_00"}],O=[{text:"02:00:00",value:"BOOK_02_00_00"},{text:"04:00:00",value:"BOOK_04_00_00"},{text:"08:00:00",value:"BOOK_08_00_00"}],m=[{text:"00:30:00",value:"PROJ_00_30_00"},{text:"01:00:00",value:"PROJ_01_00_00"},{text:"01:30:00",value:"PROJ_01_30_00"},{text:"02:00:00",value:"PROJ_02_00_00"},{text:"02:30:00",value:"PROJ_02_30_00"},{text:"03:00:00",value:"PROJ_03_00_00"},{text:"04:00:00",value:"PROJ_04_00_00"},{text:"05:00:00",value:"PROJ_05_00_00"},{text:"06:00:00",value:"PROJ_06_00_00"},{text:"08:00:00",value:"PROJ_08_00_00"},{text:"09:00:00",value:"PROJ_09_00_00"},{text:"10:00:00",value:"PROJ_10_00_00"},{text:"12:00:00",value:"PROJ_10_00_00"}];localStorage.getItem("USER_TIME")||localStorage.setItem("USER_TIME",JSON.stringify({COMM:[],BOOK:[],PROJ:[]})),Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem("USER_TIME"));(e.COMM.length||e.BOOK.length||e.PROJ.length)&&n((function(){return e}))}),[0]);var j=function(e){var t=e.target.name,i=JSON.parse(localStorage.getItem("USER_TIME"));n((function(e){return Object(r.a)(Object(r.a)({},e),{},Object(s.a)({},t,[].concat(Object(l.a)(e[t]),[{id:e[t].length?e[t][e[t].length-1].id+1:0,savedDate:null,completedTime:"00:00:00",isActive:!1,timerFinish:!1}])))})),n((function(e){return i[t].push({id:e[t][e[t].length-1].id,savedDate:null,completedTime:"00:00:00",isActive:!1,timerFinish:!1}),localStorage.USER_TIME=JSON.stringify(i),e}))};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"containerBgTitle",children:[Object(u.jsx)("p",{className:"bgTitle",children:"ALTimes "}),Object(u.jsx)("p",{className:"ver",children:"v. 0.1"})]}),Object(u.jsxs)("div",{className:"container",children:[Object(u.jsxs)("fieldset",{className:"containerTimers",children:[Object(u.jsx)("legend",{className:"containerTitle",children:Object(u.jsx)("p",{className:"commissionTitle",children:"COMMISSION"})}),Object(u.jsx)("div",{className:"wrapperTimer",children:i.COMM.length?i.COMM.map((function(e,t){return Object(u.jsx)(d,{time:e,id:t,setSaveLocalTime:n,collectionTimes:a,typeTimer:"COMM",isActive:e.isActive,timerFinish:e.timerFinish},e.id)})):Object(u.jsx)("div",{className:"availableTimerText",children:"Not found"})}),4!==i.COMM.length&&Object(u.jsxs)("div",{className:"containerAddTimerBtn",children:[Object(u.jsx)("button",{name:"COMM",className:"addTimerBtn",onClick:function(e){j(e)}}),Object(u.jsxs)("div",{className:"containerTitleAvailable",children:[Object(u.jsx)("p",{className:"titleAvailable",children:"Available:"}),Object(u.jsx)("p",{children:4-i.COMM.length})]})]})]}),Object(u.jsxs)("fieldset",{className:"containerTimers",children:[Object(u.jsx)("legend",{className:"containerTitle",children:Object(u.jsx)("p",{children:"CLASSROOM"})}),Object(u.jsx)("div",{className:"wrapperTimer",children:i.BOOK.length?i.BOOK.map((function(e,t){return Object(u.jsx)(d,{time:e,id:t,setSaveLocalTime:n,collectionTimes:O,typeTimer:"BOOK",isActive:e.isActive,timerFinish:e.timerFinish},e.id)})):Object(u.jsx)("div",{className:"availableTimerText",children:"Not found"})}),4!==i.BOOK.length&&Object(u.jsxs)("div",{className:"containerAddTimerBtn",children:[Object(u.jsx)("button",{name:"BOOK",className:"addTimerBtn",onClick:function(e){j(e)}}),Object(u.jsxs)("div",{className:"containerTitleAvailable",children:[Object(u.jsx)("p",{className:"titleAvailable",children:"Available:"}),Object(u.jsx)("p",{children:4-i.BOOK.length})]})]})]}),Object(u.jsxs)("fieldset",{className:"containerTimers",children:[Object(u.jsx)("legend",{className:"containerTitle",children:Object(u.jsx)("p",{children:"LAB"})}),Object(u.jsx)("div",{className:"wrapperTimer",children:i.PROJ.length?i.PROJ.map((function(e,t){return Object(u.jsx)(d,{time:e,id:t,setSaveLocalTime:n,collectionTimes:m,typeTimer:"PROJ",isActive:e.isActive,timerFinish:e.timerFinish},e.id)})):Object(u.jsx)("div",{className:"availableTimerText",children:"Not found"})}),1!==i.PROJ.length&&Object(u.jsxs)("div",{className:"containerAddTimerBtn",children:[Object(u.jsx)("button",{name:"PROJ",className:"addTimerBtn",onClick:function(e){j(e)}}),Object(u.jsxs)("div",{className:"containerTitleAvailable",children:[Object(u.jsx)("p",{className:"titleAvailable",children:"Available:"}),Object(u.jsx)("p",{children:1-i.PROJ.length})]})]})]})]})]})}a.a.render(Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(m,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.4526d896.chunk.js.map