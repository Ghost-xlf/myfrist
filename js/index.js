var name_top = document.querySelector(".name")
document.querySelector("body").onscroll = function() {
 var px = Math.round(document.documentElement.scrollTop);
 console.log(px);
 if(px >= 265) {
  var top = px;
  name_top.setAttribute('style','top'+':'+top+"px")
}  else if(px < 265) {
  name_top.setAttribute('style','top'+':'+4+"rem")
}
}
var all_text = document.querySelectorAll(".all");
var article = document.querySelectorAll(".article");
var retract = document.querySelectorAll(".retract");
for(let i=0 ; i < all_text.length; i++) {
  all_text[i].onclick = function() {
   this.parentNode.style.height = 6 + 'rem';
   this.classList.add('none'); 
   this.nextSibling.nextSibling.classList.remove("none");
  }
}
for(let i= 0; i< retract.length ;i++) {
  retract[i].onclick = function() {
    this.parentNode.style.height = 3 + "rem";
    this.classList.add("none");
    this.previousSibling.previousSibling.classList.remove("none");
  }
}

