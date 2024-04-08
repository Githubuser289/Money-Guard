/*! For license information please see 803.f16e4bae.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_team_project=self.webpackChunkreact_team_project||[]).push([[803],{9215:function(e,t,r){r.r(t),r.d(t,{default:function(){return D}});var n=r(1413),o=r(3433),a=r(5967),i=r(2683),s=r(4420),c="Chart_chart__KWi2v",l="Chart_statisticsTitle__sMQfP",u="Chart_expenseTotal__OmYVx",f=r(6351),p=r(184);a.kL.register.apply(a.kL,(0,o.Z)(a.zX));var d=new Map([["Entertainment","#ff85d2"],["Car","rgb(255, 104, 109)"],["Products","rgb(255, 157, 137)"],["Main expenses","rgb(254, 208, 87)"],["Leisure","rgb(91, 255, 167)"],["Other expenses","rgb(0, 173, 95)"],["Education","rgb(115, 222, 255)"],["Self care","rgb(170, 154, 255)"],["Child care","rgb(87, 101, 255)"],["Household products","rgb(114, 61, 239)"]]);function m(){var e=(0,s.v9)(f.Tc),t=e.categoriesSummary?e.categoriesSummary.filter((function(e){return"EXPENSE"===e.type})).map((function(e){return(0,n.Z)((0,n.Z)({},e),{},{color:d[e.name]||"#000000"})})).sort((function(e,t){return e.total-t.total})):[],r={datasets:[{data:t.map((function(e){return e.total})),backgroundColor:t.map((function(e){return e.color})),boxShadow:"0px 0px 8px 0px #000 inset"}]},o=e.expenseSummary||0;return(0,p.jsxs)("div",{children:[(0,p.jsx)("h2",{className:l,children:"Statistics"}),(0,p.jsxs)("div",{className:c,children:[(0,p.jsx)(i.$I,{data:t.length?r:{datasets:[{data:[1e-10],backgroundColor:["rgba(200, 200, 200, 0.5)"],borderWidth:0}]},options:{cutout:"70%",plugins:{legend:{display:!1}},maintainAspectRatio:!1,responsive:!0}}),(0,p.jsxs)("div",{className:u,children:["\u20b4 ",o.toFixed(2)]})]})]})}var b="StatisticsTab_statisticsPageContainer__Lz9G3",y=r(9439),h=r(2791),g={selectInput:"StatisticsDashboard_selectInput__KTozW",selectContainer:"StatisticsDashboard_selectContainer__YqoA7"},v=r(7123),x=r(6674),S=r(1074),j=r(7234),w=function(){var e=(new Date).getMonth()+1,t=(new Date).getFullYear(),r=Array.from({length:12},(function(e,t){return t+1})),o=Array.from({length:t-2020+1},(function(e,t){return 2020+t})),a=(0,h.useState)(e),i=(0,y.Z)(a,2),c=i[0],l=i[1],u=(0,h.useState)(t),f=(0,y.Z)(u,2),d=f[0],m=f[1],b=(0,s.I0)();(0,h.useEffect)((function(){b((0,j.H2)({month:c,year:d}))}),[b,c,d]);var w={container:function(e){return(0,n.Z)((0,n.Z)({},e),{},{fontFamily:"'Poppins-Regular', sans-serif"})},control:function(e){return(0,n.Z)((0,n.Z)({},e),{},{backgroundColor:"rgba(74, 86, 226, 0.1)",border:"1px solid white",borderRadius:"8px",cursor:"pointer",height:"50px",marginBottom:"-6px",outline:"none",paddingRight:"13px"})},singleValue:function(e){return(0,n.Z)((0,n.Z)({},e),{},{color:"#FBFBFB",fontSize:"16px"})},placeholder:function(e){return(0,n.Z)((0,n.Z)({},e),{},{color:"white",fontSize:"16px"})},menu:function(e){return(0,n.Z)((0,n.Z)({},e),{},{borderRadius:"8px",backgroundColor:"white",background:"linear-gradient(0deg, rgba(83, 61, 186, 0.70) 0%, rgba(80, 48, 154, 0.70) 43.14%, rgba(106, 70, 165, 0.52) 73.27%, rgba(133, 93, 175, 0.13) 120.03%)",boxShadow:"0px 4px 60px 0px rgba(0, 0, 0, 0.25)",backdropFilter:"blur(50px)",color:"#FBFBFB",fontFamily:"'Poppins-Regular', sans-serif",fontSize:"16px",fontWeight:"400",overflow:"hidden"})},option:function(e,t){var r=t.isFocused,o=t.isSelected;return r?(0,n.Z)((0,n.Z)({},e),{},{background:"#FFFFFF1A",color:"#FF868D"}):o?(0,n.Z)((0,n.Z)({},e),{},{background:"transparent"}):(0,n.Z)({},e)},menuList:function(e){return(0,n.Z)((0,n.Z)({},e),{},{"&::-webkit-scrollbar":{width:"6px"},"&::-webkit-scrollbar-track":{background:"transparent"},"&::-webkit-scrollbar-thumb":{background:"#BFB4DD",borderRadius:"12px"}})}};(0,h.useEffect)((function(){var e=document.getElementsByClassName("css-1u9des2-indicatorSeparator");e&&e.length>0&&Array.from(e).forEach((function(e){e.style.display="none"}))}),[]);var _=function(e){return(0,p.jsx)(v.c.DropdownIndicator,(0,n.Z)((0,n.Z)({},e),{},{children:e.selectProps.menuIsOpen?(0,p.jsx)(S.zob,{size:18,label:"Arrow up",color:"var(--white)"}):(0,p.jsx)(S.uaK,{size:18,label:"Arrow down",color:"var(--white)"})}))};return(0,p.jsxs)("div",{children:[(0,p.jsx)("div",{className:g.selectContainer,children:(0,p.jsx)("div",{className:g.selectWrapper,children:(0,p.jsx)(x.ZP,{className:g.selectInput,options:r.map((function(e){return{value:e,label:new Date(0,e-1).toLocaleString("default",{month:"long"})}})),value:r.find((function(e){return e.value===c})),onChange:function(e){l(e.value),b((0,j.H2)({month:e.value,year:d}))},styles:w,components:{DropdownIndicator:_},isSearchable:!1,placeholder:(new Date).toLocaleString("default",{month:"long"})})})}),(0,p.jsx)("div",{className:g.selectContainer,children:(0,p.jsx)("div",{className:g.selectWrapper,children:(0,p.jsx)(x.ZP,{className:g.selectInput,options:o.map((function(e){return{value:e,label:e.toString()}})),value:o.find((function(e){return e.value===d})),onChange:function(e){m(e.value),b((0,j.H2)({month:c,year:e.value}))},styles:w,components:{DropdownIndicator:_},isSearchable:!1,placeholder:t})})})]})},_="StatisticsTable_StatisticsTableContainer__gzaHf",O="StatisticsTable_statisticsInfo__FARVQ",P="StatisticsTable_category__BTJKS",C="StatisticsTable_sum__QzpVc",N="StatisticsTable_noTransactionsText__c8rBo",F="StatisticsTable_expenses__q4dk4",$="StatisticsTable_income__FCPus",Z="StatisticsTable_expensesSum__sagAb",k="StatisticsTable_incomeSum__KwW2t",E=function(e){return isNaN(e)?"0.00":Math.abs(e).toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$& ")},T=function(){var e=(0,s.v9)(f.Tc),t=(0,s.I0)(),r=(new Date).getMonth()+1,o=(new Date).getFullYear();(0,h.useEffect)((function(){t((0,j.H2)({month:r,year:o})),t((0,j.CP)())}),[t,r,o]);var a=e.categoriesSummary?e.categoriesSummary.filter((function(e){return"EXPENSE"===e.type})).map((function(e){return(0,n.Z)((0,n.Z)({},e),{},{color:d.get(e.name)})})).sort((function(e,t){return e.total-t.total})):[];return(0,p.jsxs)("div",{className:_,children:[(0,p.jsxs)("div",{className:O,children:[(0,p.jsx)("p",{className:P,children:"Category"}),(0,p.jsx)("p",{className:C,children:"Sum"})]}),(0,p.jsx)("div",{children:a.length?a.map((function(e,t){return(0,p.jsxs)("div",{children:[(0,p.jsxs)("div",{children:[(0,p.jsx)("span",{}),(0,p.jsx)("p",{children:e.name})]}),(0,p.jsx)("p",{children:E(e.total)})]},t)})):(0,p.jsx)("p",{className:N,children:"You don't have any transactions in this period"})}),(0,p.jsxs)("div",{className:F,children:[(0,p.jsx)("h3",{children:"Expenses:"}),(0,p.jsx)("p",{className:Z,children:E(e.expenseSummary)})]}),(0,p.jsxs)("div",{className:$,children:[(0,p.jsx)("h3",{children:"Income:"}),(0,p.jsx)("p",{className:k,children:E(e.incomeSummary)})]})]})},D=function(){return(0,p.jsxs)("div",{className:b,children:[(0,p.jsx)(m,{}),(0,p.jsx)(w,{}),(0,p.jsx)(T,{})]})}},2110:function(e,t,r){var n=r(8309),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};function c(e){return n.isMemo(e)?i:s[e.$$typeof]||o}s[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s[n.Memo]=i;var l=Object.defineProperty,u=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,d=Object.getPrototypeOf,m=Object.prototype;e.exports=function e(t,r,n){if("string"!==typeof r){if(m){var o=d(r);o&&o!==m&&e(t,o,n)}var i=u(r);f&&(i=i.concat(f(r)));for(var s=c(t),b=c(r),y=0;y<i.length;++y){var h=i[y];if(!a[h]&&(!n||!n[h])&&(!b||!b[h])&&(!s||!s[h])){var g=p(r,h);try{l(t,h,g)}catch(v){}}}}return t}},746:function(e,t){var r="function"===typeof Symbol&&Symbol.for,n=r?Symbol.for("react.element"):60103,o=r?Symbol.for("react.portal"):60106,a=r?Symbol.for("react.fragment"):60107,i=r?Symbol.for("react.strict_mode"):60108,s=r?Symbol.for("react.profiler"):60114,c=r?Symbol.for("react.provider"):60109,l=r?Symbol.for("react.context"):60110,u=r?Symbol.for("react.async_mode"):60111,f=r?Symbol.for("react.concurrent_mode"):60111,p=r?Symbol.for("react.forward_ref"):60112,d=r?Symbol.for("react.suspense"):60113,m=r?Symbol.for("react.suspense_list"):60120,b=r?Symbol.for("react.memo"):60115,y=r?Symbol.for("react.lazy"):60116,h=r?Symbol.for("react.block"):60121,g=r?Symbol.for("react.fundamental"):60117,v=r?Symbol.for("react.responder"):60118,x=r?Symbol.for("react.scope"):60119;function S(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case u:case f:case a:case s:case i:case d:return e;default:switch(e=e&&e.$$typeof){case l:case p:case y:case b:case c:return e;default:return t}}case o:return t}}}function j(e){return S(e)===f}t.AsyncMode=u,t.ConcurrentMode=f,t.ContextConsumer=l,t.ContextProvider=c,t.Element=n,t.ForwardRef=p,t.Fragment=a,t.Lazy=y,t.Memo=b,t.Portal=o,t.Profiler=s,t.StrictMode=i,t.Suspense=d,t.isAsyncMode=function(e){return j(e)||S(e)===u},t.isConcurrentMode=j,t.isContextConsumer=function(e){return S(e)===l},t.isContextProvider=function(e){return S(e)===c},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return S(e)===p},t.isFragment=function(e){return S(e)===a},t.isLazy=function(e){return S(e)===y},t.isMemo=function(e){return S(e)===b},t.isPortal=function(e){return S(e)===o},t.isProfiler=function(e){return S(e)===s},t.isStrictMode=function(e){return S(e)===i},t.isSuspense=function(e){return S(e)===d},t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===a||e===f||e===s||e===i||e===d||e===m||"object"===typeof e&&null!==e&&(e.$$typeof===y||e.$$typeof===b||e.$$typeof===c||e.$$typeof===l||e.$$typeof===p||e.$$typeof===g||e.$$typeof===v||e.$$typeof===x||e.$$typeof===h)},t.typeOf=S},8309:function(e,t,r){e.exports=r(746)},168:function(e,t,r){function n(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}r.d(t,{Z:function(){return n}})},2119:function(e,t,r){r.d(t,{w_:function(){return d}});var n=r(2791),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=n.createContext&&n.createContext(o),i=["attr","size","title"];function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c.apply(this,arguments)}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e){return e&&e.map((function(e,t){return n.createElement(e.tag,u({key:t},e.attr),p(e.child))}))}function d(e){return function(t){return n.createElement(m,c({attr:u({},e.attr)},t),p(e.child))}}function m(e){var t=function(t){var r,o=e.attr,a=e.size,l=e.title,f=s(e,i),p=a||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,f,{className:r,style:u(u({color:e.color||t.color},t.style),e.style),height:p,width:p,xmlns:"http://www.w3.org/2000/svg"}),l&&n.createElement("title",null,l),e.children)};return void 0!==a?n.createElement(a.Consumer,null,(function(e){return t(e)})):t(o)}}}]);
//# sourceMappingURL=803.f16e4bae.chunk.js.map