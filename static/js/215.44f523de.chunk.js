"use strict";(self.webpackChunkreact_team_project=self.webpackChunkreact_team_project||[]).push([[215],{9215:function(e,t,n){n.r(t),n.d(t,{default:function(){return P}});var a=n(1413),r=n(3433),s=n(5967),i=n(3623),o=n(4420),c="Chart_chart__KWi2v",l="Chart_statisticsTitle__sMQfP",u="Chart_expenseTotal__OmYVx",d=n(6351),p=n(184);s.kL.register.apply(s.kL,(0,r.Z)(s.zX));var h=new Map([["Entertainment","#ff85d2"],["Car","rgb(255, 104, 109)"],["Products","rgb(255, 157, 137)"],["Main expenses","rgb(254, 208, 87)"],["Leisure","rgb(91, 255, 167)"],["Other expenses","rgb(0, 173, 95)"],["Education","rgb(115, 222, 255)"],["Self care","rgb(170, 154, 255)"],["Child care","rgb(87, 101, 255)"],["Household products","rgb(114, 61, 239)"]]);function m(){var e=(0,o.v9)(d.Tc),t=e.categoriesSummary?e.categoriesSummary.filter((function(e){return"EXPENSE"===e.type})).map((function(e){return(0,a.Z)((0,a.Z)({},e),{},{color:h[e.name]||"#000000"})})).sort((function(e,t){return e.total-t.total})):[],n={datasets:[{data:t.map((function(e){return e.total})),backgroundColor:t.map((function(e){return e.color})),boxShadow:"0px 0px 8px 0px #000 inset"}]},r=e.expenseSummary||0;return(0,p.jsxs)("div",{children:[(0,p.jsx)("h2",{className:l,children:"Statistics"}),(0,p.jsxs)("div",{className:c,children:[(0,p.jsx)(i.$I,{data:t.length?n:{datasets:[{data:[1e-10],backgroundColor:["rgba(200, 200, 200, 0.5)"],borderWidth:0}]},options:{cutout:"70%",plugins:{legend:{display:!1}},maintainAspectRatio:!1,responsive:!0}}),(0,p.jsxs)("div",{className:u,children:["\u20b4 ",r.toFixed(2)]})]})]})}var f="StatisticsTab_statisticsPageContainer__Lz9G3",x=n(9439),g=n(2791),b={selectInput:"StatisticsDashboard_selectInput__KTozW",selectContainer:"StatisticsDashboard_selectContainer__YqoA7"},_=n(4899),v=n(6674),S=n(1074),j=n(7234),w=function(){var e=(new Date).getMonth()+1,t=(new Date).getFullYear(),n=Array.from({length:12},(function(e,t){return t+1})),r=Array.from({length:t-2020+1},(function(e,t){return 2020+t})),s=(0,g.useState)(e),i=(0,x.Z)(s,2),c=i[0],l=i[1],u=(0,g.useState)(t),d=(0,x.Z)(u,2),h=d[0],m=d[1],f=(0,o.I0)();(0,g.useEffect)((function(){f((0,j.H2)({month:c,year:h}))}),[f,c,h]);var w={container:function(e){return(0,a.Z)((0,a.Z)({},e),{},{fontFamily:"'Poppins-Regular', sans-serif"})},control:function(e){return(0,a.Z)((0,a.Z)({},e),{},{backgroundColor:"rgba(74, 86, 226, 0.1)",border:"1px solid white",borderRadius:"8px",cursor:"pointer",height:"50px",marginBottom:"-6px",outline:"none",paddingRight:"13px"})},singleValue:function(e){return(0,a.Z)((0,a.Z)({},e),{},{color:"#FBFBFB",fontSize:"16px"})},placeholder:function(e){return(0,a.Z)((0,a.Z)({},e),{},{color:"white",fontSize:"16px"})},menu:function(e){return(0,a.Z)((0,a.Z)({},e),{},{borderRadius:"8px",backgroundColor:"white",background:"linear-gradient(0deg, rgba(83, 61, 186, 0.70) 0%, rgba(80, 48, 154, 0.70) 43.14%, rgba(106, 70, 165, 0.52) 73.27%, rgba(133, 93, 175, 0.13) 120.03%)",boxShadow:"0px 4px 60px 0px rgba(0, 0, 0, 0.25)",backdropFilter:"blur(50px)",color:"#FBFBFB",fontFamily:"'Poppins-Regular', sans-serif",fontSize:"16px",fontWeight:"400",overflow:"hidden"})},option:function(e,t){var n=t.isFocused,r=t.isSelected;return n?(0,a.Z)((0,a.Z)({},e),{},{background:"#FFFFFF1A",color:"#FF868D"}):r?(0,a.Z)((0,a.Z)({},e),{},{background:"transparent"}):(0,a.Z)({},e)},menuList:function(e){return(0,a.Z)((0,a.Z)({},e),{},{"&::-webkit-scrollbar":{width:"6px"},"&::-webkit-scrollbar-track":{background:"transparent"},"&::-webkit-scrollbar-thumb":{background:"#BFB4DD",borderRadius:"12px"}})}};(0,g.useEffect)((function(){var e=document.getElementsByClassName("css-1u9des2-indicatorSeparator");e&&e.length>0&&Array.from(e).forEach((function(e){e.style.display="none"}))}),[]);var y=function(e){return(0,p.jsx)(_.c.DropdownIndicator,(0,a.Z)((0,a.Z)({},e),{},{children:e.selectProps.menuIsOpen?(0,p.jsx)(S.zob,{size:18,label:"Arrow up",color:"var(--white)"}):(0,p.jsx)(S.uaK,{size:18,label:"Arrow down",color:"var(--white)"})}))};return(0,p.jsxs)("div",{children:[(0,p.jsx)("div",{className:b.selectContainer,children:(0,p.jsx)("div",{className:b.selectWrapper,children:(0,p.jsx)(v.ZP,{className:b.selectInput,options:n.map((function(e){return{value:e,label:new Date(0,e-1).toLocaleString("default",{month:"long"})}})),value:n.find((function(e){return e.value===c})),onChange:function(e){l(e.value),f((0,j.H2)({month:e.value,year:h}))},styles:w,components:{DropdownIndicator:y},isSearchable:!1,placeholder:(new Date).toLocaleString("default",{month:"long"})})})}),(0,p.jsx)("div",{className:b.selectContainer,children:(0,p.jsx)("div",{className:b.selectWrapper,children:(0,p.jsx)(v.ZP,{className:b.selectInput,options:r.map((function(e){return{value:e,label:e.toString()}})),value:r.find((function(e){return e.value===h})),onChange:function(e){m(e.value),f((0,j.H2)({month:c,year:e.value}))},styles:w,components:{DropdownIndicator:y},isSearchable:!1,placeholder:t})})})]})},y="StatisticsTable_StatisticsTableContainer__gzaHf",Z="StatisticsTable_statisticsInfo__FARVQ",F="StatisticsTable_category__BTJKS",N="StatisticsTable_sum__QzpVc",C="StatisticsTable_noTransactionsText__c8rBo",k="StatisticsTable_expenses__q4dk4",T="StatisticsTable_income__FCPus",D="StatisticsTable_expensesSum__sagAb",E="StatisticsTable_incomeSum__KwW2t",I=function(e){return isNaN(e)?"0.00":Math.abs(e).toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$& ")},B=function(){var e=(0,o.v9)(d.Tc),t=(0,o.I0)(),n=(new Date).getMonth()+1,r=(new Date).getFullYear();(0,g.useEffect)((function(){t((0,j.H2)({month:n,year:r})),t((0,j.CP)())}),[t,n,r]);var s=e.categoriesSummary?e.categoriesSummary.filter((function(e){return"EXPENSE"===e.type})).map((function(e){return(0,a.Z)((0,a.Z)({},e),{},{color:h.get(e.name)})})).sort((function(e,t){return e.total-t.total})):[];return(0,p.jsxs)("div",{className:y,children:[(0,p.jsxs)("div",{className:Z,children:[(0,p.jsx)("p",{className:F,children:"Category"}),(0,p.jsx)("p",{className:N,children:"Sum"})]}),(0,p.jsx)("div",{children:s.length?s.map((function(e,t){return(0,p.jsxs)("div",{children:[(0,p.jsxs)("div",{children:[(0,p.jsx)("span",{}),(0,p.jsx)("p",{children:e.name})]}),(0,p.jsx)("p",{children:I(e.total)})]},t)})):(0,p.jsx)("p",{className:C,children:"You don't have any transactions in this period"})}),(0,p.jsxs)("div",{className:k,children:[(0,p.jsx)("h3",{children:"Expenses:"}),(0,p.jsx)("p",{className:D,children:I(e.expenseSummary)})]}),(0,p.jsxs)("div",{className:T,children:[(0,p.jsx)("h3",{children:"Income:"}),(0,p.jsx)("p",{className:E,children:I(e.incomeSummary)})]})]})},P=function(){return console.log("statisticsTab "),(0,p.jsxs)("div",{className:f,children:[(0,p.jsx)(m,{}),(0,p.jsx)(w,{}),(0,p.jsx)(B,{})]})}}}]);
//# sourceMappingURL=215.44f523de.chunk.js.map