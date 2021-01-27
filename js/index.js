var name_top = document.querySelector(".name")
document.querySelector("body").onscroll = function() {
 var px = Math.round(document.documentElement.scrollTop);
 if(px >= 400) {
  var top = 60+px;
  name_top.setAttribute('style','top'+':'+top+"px")
}  else if(px < 400) {
  name_top.setAttribute('style','top'+':'+408+"px")
}
}