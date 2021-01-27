function settingRem(settingWidth) {
  var webWitch = document.documentElement.clientWidth ||document.body.clientWidth ;
  var proportion =100*(webWitch/settingWidth);
  document.querySelector("html").style.fontSize = proportion + "px";
}
settingRem(1920);