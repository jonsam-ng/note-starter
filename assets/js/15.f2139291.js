(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{434:function(t,n,e){var o=e(2),c=e(435);o({global:!0,forced:parseInt!=c},{parseInt:c})},435:function(t,n,e){var o=e(1),c=e(3),i=e(4),a=e(13),s=e(167).trim,r=e(168),l=o.parseInt,p=o.Symbol,u=p&&p.iterator,f=/^[+-]?0x/i,d=i(f.exec),g=8!==l(r+"08")||22!==l(r+"0x16")||u&&!c((function(){l(Object(u))}));t.exports=g?function(t,n){var e=s(a(t));return l(e,n>>>0||(d(f,e)?16:10))}:l},475:function(t,n,e){},531:function(t,n,e){"use strict";e(475)},568:function(t,n,e){"use strict";e.r(n);e(59),e(34),e(434),e(71);function o(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:50,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:3e3,i=document.querySelectorAll(".global-tip"),a=(new Date).getTime(),s=0==i.length?0:i[i.length-1].getAttribute("data-top"),r=parseInt(s)+(0!=i.length?i[i.length-1].offsetHeight+17:e),l=document.createElement("div");l.className="global-tip tip-".concat(n," ").concat(a," gloablTip"),l.style.top=parseInt(s)+"px",l.setAttribute("data-top",r),"info"==n||1==n?l.innerHTML='<i class="iconfont icon-info-circle-fill icon"></i><p class="tip-info-content">'.concat(t,"</p>"):"success"==n||2==n?l.innerHTML='<i class="iconfont icon-success-filling icon"></i><p class="tip-success-content">'.concat(t,"</p>"):"danger"==n||3==n?l.innerHTML='<i class="iconfont icon-error icon"></i><p class="tip-danger-content">'.concat(t,"</p>"):"warning"!=n&&4!=n||(l.innerHTML='<i class="iconfont icon-warning-fill icon"></i><p class="tip-warning-content">'.concat(t,"</p>")),document.body.appendChild(l);var p=document.getElementsByClassName(a)[0];setTimeout((function(){p.style.top=parseInt(r)+"px",p.style.opacity="1"}),10),setTimeout((function(){p.style.top="0px",p.style.opacity="0";for(var t=c(p),n=0;n<t.length;n++){var e=t[n],o=parseInt(e.getAttribute("data-top"))-e.offsetHeight-17;e.setAttribute("data-top",o),e.style.top=o+"px"}setTimeout((function(){p.remove()}),500)}),o)}function c(t){for(var n=[],e=t;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}var i={mounted:function(){this.bgTimeColor()},watch:{},methods:{bgTimeColor:function(){var t=(new Date).getHours(),n=(new Date).getMinutes(),e=(new Date).getSeconds();t=t<10?"0"+t:t,n=n<10?"0"+n:n,e=e<10?"0"+e:e;var c=document.createElement("div");c.className="banner-color",t>=6&&t<11?o("早上好呀~~，现在是 ".concat(t,":").concat(n,":").concat(e,"，吃早餐了吗？😊🤭"),"info",50,4e3):t>=12&&t<=16?o("下午好呀~~，现在是 ".concat(t,":").concat(n,":").concat(e,"，繁忙的下午也要适当休息哦🥤🏀~~"),"info",50,4e3):t>=16&&t<=19?o("到黄昏了~~，现在是 ".concat(t,":").concat(n,":").concat(e,"，该准备吃饭啦🥗🍖~~"),"info",50,4e3):t>=19&&t<24?o("晚上好呀~~，现在是 ".concat(t,":").concat(n,":").concat(e,"，该准备洗漱睡觉啦🥱😪~~"),"info",50,4e3):t>=0&&t<6&&o("别再熬夜了~~，现在是 ".concat(t,":").concat(n,":").concat(e,"，早点睡吧，让我们一起欣赏早上的太阳~~😇🛏"),"info",50,4e3),document.body.append(c)}}},a=(e(531),e(19)),s=Object(a.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("div")}),[],!1,null,null,null);n.default=s.exports}}]);