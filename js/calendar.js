var arr = new Date();
var year =  arr.getFullYear(); //获取当前日期的年份
var month = arr.getMonth(); //获取当前日期的月份
var months = month + 1;
var day = arr.getDay(); //获取当前月份对应日期的星期数
var days = new Date(year, month, 0);
    days = days.getDate();   //获取当月的天数
    dayw = new Date(year, month, 1); // 获取的当月1日所对应的星期
var date = document.getElementsByClassName("date")[0];
var reduce_y = document.getElementsByClassName("reduce-y")[0];
var reduce_m = document.getElementsByClassName("reduce-m")[0];
var plus_m = document.getElementsByClassName("plus-m")[0];
var plus_y = document.getElementsByClassName("plus-y")[0];
var week = ["日", "一", "二", "三", "四", "五", "六"];
date.innerHTML =String(year) + " " + months ;
date.setAttribute('name',String(arr.getFullYear())+(arr.getMonth() + 1));
// 遍历标题
    function wFunction() {
      for(let i = 0 ;i < week.length ; i++)  {  
      let j = week[i];
      var li = document.createElement("li");
      var b = document.createTextNode(j);
      li.appendChild(b);
      document.getElementsByClassName("bottom-lest")[0].appendChild(li)
     }
    }
wFunction();
// 打印空
function daywFunction() {
  dayw = new Date(year, month, 1)
  document.getElementById("day").innerHTML = "";
  for (let i = 0 ; i < dayw.getDay() ; i++) {
    var li = document.createElement("li");
    document.getElementById("day").appendChild(li);
  }
  }
daywFunction();

// 打印日期数
function dFunction() {
  // 获取上个月的天数
  days = new Date(year, month+1, 0);
  days = days.getDate(); 
  for (let i = 1 ; i < days+1 ; i++) {
    var li = document.createElement("li");
    var b = document.createTextNode(i);
    li.appendChild(b);
    document.getElementById("day").appendChild(li);
    li.setAttribute('name',i);
  } 
  }
dFunction();
// 年减
reduce_y.onclick = function() {
  year--;
  date.innerHTML =String(year) + " " + months  ;
  daywFunction();
  dFunction();
  buld_1();
}
// 月减
reduce_m.onclick = function() {
  if(month==0) {
    year--;
    month = 11;
  } else {
    month--;
  }
  months = month+1;
  date.innerHTML =String(year) + " " + months  ;
  daywFunction();
  dFunction();
  buld_1();
}
// 年加
plus_y.onclick = function() {
  year++;
  date.innerHTML =String(year) + " " + months  ;
  daywFunction();
  dFunction();
  buld_1();
}
// 月加
plus_m.onclick = function() {
  if(month == 11) {
    year++;
    month = 0;
  } else {
    month++;
  }
  months = month+1;
  date.innerHTML =String(year) + " " + months  ;
  daywFunction();
  dFunction();
  buld_1();
}

function buld_1(){ 
var buld = arr.getDate();
date.getAttribute("name")
if(date.getAttribute("name")===date.innerHTML.split(' ').join("")) {
  let li = document.querySelectorAll("#day li");
  for(let i = 1 ;i < li.length ;i++) {
    if(li[i].getAttribute("name")===String(buld)) {
      li[i].setAttribute("class",'buld-li')
      break
    }
  }
}
}
buld_1();