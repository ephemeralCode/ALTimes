(this.webpackJsonpaltb=this.webpackJsonpaltb||[]).push([[0],{15:function(e,t,i){},16:function(e,t,i){},17:function(e,t,i){"use strict";i.r(t);var c=i(1),n=i(9),a=i.n(n),s=i(4),l=i(5),r=i(2),o=i(3),O=i(0);function u(e){var t=Object(c.useRef)(!1),i=Object(c.useState)("Select time"),n=Object(o.a)(i,2),a=n[0],u=n[1],d=Object(c.useState)(e.isActive),m=Object(o.a)(d,2),j=m[0],_=m[1],v=Object(c.useState)(e.isActive&&new Date(e.time.savedDate)),b=Object(o.a)(v,2),x=b[0],g=b[1],h=Object(c.useState)({hours:"00",minutes:"00",seconds:"00"}),M=Object(o.a)(h,2),p=M[0],S=M[1],T=Object(c.useRef)();var f=function(){var t=JSON.parse(localStorage.getItem("USER_TIME"));e.setSaveLocalTime((function(t){return Object(r.a)(Object(r.a)({},t),{},Object(s.a)({},e.typeTimer,Object(l.a)(t[e.typeTimer].filter((function(t){return t.id!==e.time.id})))))})),t[e.typeTimer]=t[e.typeTimer].filter((function(t){return t.id!==e.time.id})),localStorage.USER_TIME=JSON.stringify(t)},N=function(t,i,c,n){var a=JSON.parse(localStorage.getItem("USER_TIME"));e.setSaveLocalTime((function(a){var o=Object(l.a)(a[e.typeTimer]);return o[e.id]={id:e.id,savedDate:t,completedTime:i,isActive:c,timerFinish:n},Object(r.a)(Object(r.a)({},a),{},Object(s.a)({},e.typeTimer,Object(l.a)(o)))})),a[e.typeTimer][e.id]={id:e.id,savedDate:t,completedTime:i,isActive:c,timerFinish:n},localStorage.USER_TIME=JSON.stringify(a)};return Object(c.useEffect)((function(){if(t.current){var e=a.split("_"),i=Object(o.a)(e,4),c=(i[0],i[1]),n=i[2],s=i[3];g(x.setHours(x.getHours()+Number(c))),g(x.setMinutes(x.getMinutes()+Number(n))),g(x.setSeconds(x.getSeconds()+Number(s))),N(x.toJSON(),"".concat(String(x.getHours()).padStart(2,"0"),":").concat(String(x.getMinutes()).padStart(2,"0"),":").concat(String(x.getSeconds()).padStart(2,"0")),!0,!1)}}),[j]),Object(c.useEffect)((function(){j?T.current=setInterval((function(){var e=new Date,t=new Date;t.setHours(x.getHours()-e.getHours()),t.setMinutes(x.getMinutes()-e.getMinutes()),t.setSeconds(x.getSeconds()-e.getSeconds()),x.getTime()-e.getTime()>0?S((function(e){return Object(r.a)(Object(r.a)({},e),{},{hours:t.getHours(),minutes:t.getMinutes(),seconds:t.getSeconds()})})):(clearInterval(T.current),S((function(e){return Object(r.a)(Object(r.a)({},e),{},{hours:"00",minutes:"00",seconds:"00"})})),N(null,"".concat(String(x.getHours()).padStart(2,"0"),":").concat(String(x.getMinutes()).padStart(2,"0"),":").concat(String(x.getSeconds()).padStart(2,"0")),!1,!0),function(){var e=new Audio;e.src="/static/media/notify.mp3",e.volume=.3,e.play()}())}),1e3):t.current=!0}),[j]),Object(O.jsxs)("div",{className:"containerTimer",children:[Object(O.jsxs)("div",{className:"conteinerTimerStart",children:[e.timerFinish&&Object(O.jsx)("button",{className:"completedTimerBtn",onClick:function(){clearInterval(T.current),t.current=!1,f()}}),!e.timerFinish&&Object(O.jsx)("button",{className:"removeTimerBtn",onClick:function(){clearInterval(T.current),t.current=!1,f()}}),Object(O.jsxs)("div",{className:"timer",children:[Object(O.jsx)("p",{className:"time",children:"\n                            ".concat(String(p.hours).padStart(2,"0"),":").concat(String(p.minutes).padStart(2,"0"),":").concat(String(p.seconds).padStart(2,"0"),"\n                        ")}),Object(O.jsxs)("div",{className:"containerCompletedTimerText",children:[Object(O.jsx)("p",{className:"completedTimerText",children:"Completed: "}),Object(O.jsx)("p",{children:e.time.completedTime})]})]})]}),Object(O.jsxs)("div",{className:"containerTimerEnd",children:[e.timerFinish||j?Object(O.jsx)(O.Fragment,{}):!e.isActive&&Object(O.jsxs)("div",{className:"containerTimerSelect",children:[Object(O.jsxs)("select",{className:"timerSelect",onWheel:function(e){return function(e){e.deltaY<0?0!==e.target.options.selectedIndex&&(e.target.options.selectedIndex--,u(e.target.options[e.target.selectedIndex].value)):e.deltaY>0&&e.target.options.selectedIndex!==e.target.options.length-1&&(e.target.options.selectedIndex++,u(e.target.options[e.target.selectedIndex].value))}(e)},onClick:function(e){e.target.options?u(e.target.options[e.target.selectedIndex].value):u(e.target.value)},children:[Object(O.jsx)("option",{children:"Select time"}),e.collectionTimes.map((function(e,t){return Object(O.jsx)("option",{value:e.value,children:e.text},t)}))]}),Object(O.jsx)("button",{style:"Select time"===a?{cursor:"not-allowed",opacity:"50%"}:{cursor:"pointer"},className:"startTimerBtn",disabled:"Select time"===a,onClick:function(){g(new Date),_(!0),t.current=!0}})]}),e.isActive&&Object(O.jsx)("button",{className:"cancelTimerBtn",onClick:function(){clearInterval(T.current),_(!1),t.current=!1,u("Select time"),S((function(e){return Object(r.a)(Object(r.a)({},e),{},{hours:"00",minutes:"00",seconds:"00"})})),N(null,"00:00:00",!1,!1)}})]})]})}i(15),i(16);function d(){var e=Object(c.useState)({COMM:[],BOOK:[],PROJ:[]}),t=Object(o.a)(e,2),i=t[0],n=t[1],a=[{text:"00:01:00",value:"COMM_00_01_00"},{text:"00:20:00",value:"COMM_00_20_00"},{text:"00:30:00",value:"COMM_00_30_00"},{text:"01:00:00",value:"COMM_01_00_00"},{text:"01:10:00",value:"COMM_01_10_00"},{text:"01:20:00",value:"COMM_01_20_00"},{text:"01:30:00",value:"COMM_01_30_00"},{text:"01:40:00",value:"COMM_01_40_00"},{text:"01:45:00",value:"COMM_01_45_00"},{text:"02:00:00",value:"COMM_02_00_00"},{text:"02:15:00",value:"COMM_02_15_00"},{text:"02:30:00",value:"COMM_02_30_00"},{text:"02:40:00",value:"COMM_02_40_00"},{text:"03:00:00",value:"COMM_03_00_00"},{text:"03:20:00",value:"COMM_03_20_00"},{text:"04:00:00",value:"COMM_04_00_00"},{text:"05:00:00",value:"COMM_05_00_00"},{text:"05:20:00",value:"COMM_05_20_00"},{text:"06:00:00",value:"COMM_06_00_00"},{text:"08:00:00",value:"COMM_08_00_00"},{text:"09:00:00",value:"COMM_09_00_00"},{text:"10:00:00",value:"COMM_10_00_00"}],d=[{text:"02:00:00",value:"BOOK_02_00_00"},{text:"04:00:00",value:"BOOK_04_00_00"},{text:"08:00:00",value:"BOOK_08_00_00"}],m=[{text:"00:30:00",value:"PROJ_00_30_00"},{text:"01:00:00",value:"PROJ_01_00_00"},{text:"01:30:00",value:"PROJ_01_30_00"},{text:"02:00:00",value:"PROJ_02_00_00"},{text:"02:30:00",value:"PROJ_02_30_00"},{text:"03:00:00",value:"PROJ_03_00_00"},{text:"04:00:00",value:"PROJ_04_00_00"},{text:"05:00:00",value:"PROJ_05_00_00"},{text:"06:00:00",value:"PROJ_06_00_00"},{text:"08:00:00",value:"PROJ_08_00_00"},{text:"09:00:00",value:"PROJ_09_00_00"},{text:"10:00:00",value:"PROJ_10_00_00"},{text:"12:00:00",value:"PROJ_10_00_00"}];localStorage.getItem("USER_TIME")||localStorage.setItem("USER_TIME",JSON.stringify({COMM:[],BOOK:[],PROJ:[]})),Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem("USER_TIME"));(e.COMM.length||e.BOOK.length||e.PROJ.length)&&n((function(){return e}))}),[0]);var j=function(e){var t=e.target.name,i=JSON.parse(localStorage.getItem("USER_TIME"));n((function(e){return Object(r.a)(Object(r.a)({},e),{},Object(s.a)({},t,[].concat(Object(l.a)(e[t]),[{id:e[t].length?e[t][e[t].length-1].id+1:0,savedDate:null,completedTime:"00:00:00",isActive:!1,timerFinish:!1}])))})),n((function(e){return i[t].push({id:e[t][e[t].length-1].id,savedDate:null,completedTime:"00:00:00",isActive:!1,timerFinish:!1}),localStorage.USER_TIME=JSON.stringify(i),e}))};return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{className:"containerBgTitle",children:[Object(O.jsx)("p",{className:"bgTitle",children:"ALTimes "}),Object(O.jsx)("p",{className:"ver",children:"v. 0.1"})]}),Object(O.jsxs)("div",{className:"container",children:[Object(O.jsxs)("fieldset",{className:"containerTimers",children:[Object(O.jsx)("legend",{className:"containerTitle",children:Object(O.jsx)("p",{className:"commissionTitle",children:"COMMISSION"})}),Object(O.jsx)("div",{className:"wrapperTimer",children:i.COMM.length?i.COMM.map((function(e,t){return Object(O.jsx)(u,{time:e,id:t,setSaveLocalTime:n,collectionTimes:a,typeTimer:"COMM",isActive:e.isActive,timerFinish:e.timerFinish},e.id)})):Object(O.jsx)("div",{className:"availableTimerText",children:"Not found"})}),4!==i.COMM.length&&Object(O.jsxs)("div",{className:"containerAddTimerBtn",children:[Object(O.jsx)("button",{name:"COMM",className:"addTimerBtn",onClick:function(e){j(e)}}),Object(O.jsxs)("div",{className:"containerTitleAvailable",children:[Object(O.jsx)("p",{className:"titleAvailable",children:"Available:"}),Object(O.jsx)("p",{children:4-i.COMM.length})]})]})]}),Object(O.jsxs)("fieldset",{className:"containerTimers",children:[Object(O.jsx)("legend",{className:"containerTitle",children:Object(O.jsx)("p",{children:"CLASSROOM"})}),Object(O.jsx)("div",{className:"wrapperTimer",children:i.BOOK.length?i.BOOK.map((function(e,t){return Object(O.jsx)(u,{time:e,id:t,setSaveLocalTime:n,collectionTimes:d,typeTimer:"BOOK",isActive:e.isActive,timerFinish:e.timerFinish},e.id)})):Object(O.jsx)("div",{className:"availableTimerText",children:"Not found"})}),4!==i.BOOK.length&&Object(O.jsxs)("div",{className:"containerAddTimerBtn",children:[Object(O.jsx)("button",{name:"BOOK",className:"addTimerBtn",onClick:function(e){j(e)}}),Object(O.jsxs)("div",{className:"containerTitleAvailable",children:[Object(O.jsx)("p",{className:"titleAvailable",children:"Available:"}),Object(O.jsx)("p",{children:4-i.BOOK.length})]})]})]}),Object(O.jsxs)("fieldset",{className:"containerTimers",children:[Object(O.jsx)("legend",{className:"containerTitle",children:Object(O.jsx)("p",{children:"LAB"})}),Object(O.jsx)("div",{className:"wrapperTimer",children:i.PROJ.length?i.PROJ.map((function(e,t){return Object(O.jsx)(u,{time:e,id:t,setSaveLocalTime:n,collectionTimes:m,typeTimer:"PROJ",isActive:e.isActive,timerFinish:e.timerFinish},e.id)})):Object(O.jsx)("div",{className:"availableTimerText",children:"Not found"})}),1!==i.PROJ.length&&Object(O.jsxs)("div",{className:"containerAddTimerBtn",children:[Object(O.jsx)("button",{name:"PROJ",className:"addTimerBtn",onClick:function(e){j(e)}}),Object(O.jsxs)("div",{className:"containerTitleAvailable",children:[Object(O.jsx)("p",{className:"titleAvailable",children:"Available:"}),Object(O.jsx)("p",{children:1-i.PROJ.length})]})]})]})]})]})}a.a.render(Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(d,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.80b81dc9.chunk.js.map