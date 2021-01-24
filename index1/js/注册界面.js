var userName = document.querySelector("#user-name");
var tips = document.querySelector(".tips");
var confirm = document.querySelector("#confirm");
var tipsName = document.querySelectorAll(".tips-name")[0];
// 号码
var phoneNumber = document.querySelector("#phone-number");
var tipsNumber = document.querySelector("#number");
var tipsPhone = document.querySelectorAll(".tips-name")[1];
// 密码


// 阅读并接受
var checkboxA = true;
// 用户名
// tips.style.display="block"
// userName.onblur = function() {
//   tips.style.display="none"
// }
   // 提示弹窗 
userName.onfocus = function(e){ 
  tips.style.display="block"
  confirm.style.color = "white";
  // e.stopPropagation()
  // e.returnValue = false ;
}
   // input name 判断
var nameA = false;
userName.onblur = function () {
  var nam = userName.value;
  var zed = /^(?![0-9]+$)[A-Za-z0-9_]{1,14}$/;
  if(nam) {
  if(zed.test(nam)) {
    confirm.style.color = "green"
    nameA = true;
    tipsName.style.display="none"
    userName.style.border ="1px"+" "+"solid"+" "+"#e0e0e0"
    register();
  } else {
    userName.style.border ="1px"+" "+"solid"+" "+"red"
    tipsName.style.display="block";
    confirm.style.color = "white";
    nameA = false;
  }
} else {
  tipsName.style.display="none"
  userName.style.border ="1px"+" "+"solid"+" "+"#e0e0e0"
}
  tips.style.display="none";
}

// number
var numberCorrect = false;
phoneNumber.onchange = function() {
  var val = phoneNumber.value;
  var zed = /^[1][3-9][0-9]{9}$/;
  if(zed.test(val)) {
     tipsNumber.style.color = "green";
     phoneNumber.style.border ="1px"+" "+"solid"+" "+"#e0e0e0";
     tipsPhone.style.display="none";
     numberCorrect = true;
  } else {
     tipsNumber.style.color = "white";
     phoneNumber.style.border ="1px"+" "+"solid"+" "+"red"
     tipsPhone.style.display="block";
     numberCorrect = false;
  }
  register();
}

var passWord = document.querySelector("#password");
var tipsPass = document.querySelectorAll(".tips-name")[2];
var passGreen = document.querySelector("#password-greem");
var tipsPassWord = document.querySelector("#tips-password");
var clickTips = document.querySelector("#password-tips");
var reach = document.querySelectorAll(".reach");
var error = document.querySelectorAll(".error");
var content = document.querySelectorAll(".pass-content");
var openA = document.querySelector("#open");
var closeA = document.querySelector("#close");
// 点击与失去焦点延时
var delay = false;
// 密码格式校验
var check; 
clickTips.onclick = function() {
  if(delay) {
   return;
  } else {
  if(tipsPassWord.style.display == "block") {
    tipsPassWord.style.display = "none";
  } else {
    tipsPassWord.style.display = "block";
  }
  }
}

passWord.onfocus = function() {
    tipsPassWord.style.display = "block";
    
}

passWord.onblur = function(e) {
   delay = true;
   tipsPassWord.style.display = "none";
  //  防止和提示按钮点击事件的连续触发
   setTimeout("delay = false",100);
}

passWord.onchange =function() {
  //  判断密码正确后焦点消失时所触发的
  if(check) {
    tipsPass.style.display = "none";
    closeA.style.display = "block";
    openA.style.display="none"
    clickTips.style.display = "none"
    } else {
    tipsPass.style.display = "block";
    openA.style.display="none";
    closeA.style.display="none";
    clickTips.style.display = "block"
    }
    register();
}

closeA.onclick = function() {
  passWord.type = "text"
  openA.style.display="block";
  closeA.style.display="none";
}

openA.onclick = function() {
  passWord.type = "password"
  openA.style.display="none";
  closeA.style.display="block";
}

passWord.oninput = function() {
  var val = passWord.value;
  //不能含有空格
  var zed1 = /^[\S]+$/;
 // 只定义含有8-14位 .只能用小括号
  var zed2 = /^(.){8,14}$/
  // 判断不能为纯数字或纯字母或纯字符  但是！！！结尾前得加（.）
  var zed3 = /^(?![0-9]+$)(?![a-zA-Z]+$)(?!(\W)+$)(.)+$/
  
  // 空格判断
  if(zed1.test(val)) {
    reach[2].style.display = "inline-block";
    error[2].style.display = "none";
    content[2].style.color = "green";
  } else {
    reach[2].style.display = "none";
    error[2].style.display = "inline-block";
    content[2].style.color = "red";
  }
  // 个数判断
  if(zed2.test(val)) {
    reach[0].style.display = "inline-block";
    error[0].style.display = "none";
    content[0].style.color = "green";
  } else {
    reach[0].style.display = "none";
    error[0].style.display = "inline-block";
    content[0].style.color = "red";
  }
  // 组合判断
  if(zed3.test(val)) {
    reach[1].style.display = "inline-block";
    error[1].style.display = "none";
    content[1].style.color = "green";
  } else {
    reach[1].style.display = "none";
    error[1].style.display = "inline-block";
    content[1].style.color = "red";
  }

  if(zed1.test(val)&&zed2.test(val)&&zed3.test(val)) {
    check = true;
    passGreen.style.color = "green"
  } else {
    check = false;
    passGreen.style.color = "white"

  }
  // 空格判断没有值的时候为false所以默认样式应写在下面；
  if(!val) {
    error[2].style.display = "none";
    reach[2].style.display = "none";
    content[2].style.color = "white";
    error[0].style.display = "none";
    reach[0].style.display = "none";
    content[0].style.color = "white";
    error[1].style.display = "none";
    reach[1].style.display = "none";
    content[1].style.color = "white";
    tipsPass.style.display = "none";
  }
}
// 验证码
var verificationButton = document.querySelector("#verification-button");
var verification = document.querySelector("#verification");
var code = document.querySelector(".code");
var errortips = document.querySelectorAll(".tips-name")[3];


verificationButton.onclick = function() {
  if(numberCorrect) {
    code.style.display = "block"
    code.innerHTML = randomN();
    countDown();
  } else {
    tipsPhone.style.display="block";
  }
}

var codeA = false;
verification.onblur = function() {
  if(verification.value == code.innerHTML) {
    errortips.style.display = "none";
    codeA = true;
  } else {
    codeA = false;
    errortips.style.display = "block";
  }
  register();
}

// 随机数
function randomN() {
  var a = Math.round((Math.random()*10)*1000);
  return a;
}
// 验证码倒计时
var down = 10;
function countDown() {
  verificationButton.disabled = "disabled";
  verificationButton.style.fontSize = "9px";
  verificationButton.innerHTML = "剩余"+down+"s";
  if(down == 0) {
  verificationButton.innerHTML = "获取验证码";
  verificationButton.disabled = "";
  down = 10;
  } else {
  setTimeout("countDown()",1000);
  }
  down -= 1;
}

// 复选
var checkbox = document.querySelector(".checkbox");
checkbox.onclick = function() {
  if(checkbox.checked) {
    checkboxA = true;
  } else {
    checkboxA = false;
  }
  register();
}




// 注册按钮显示
var buttonRegister = document.querySelector(".buttom-register")
var verifyComplete = false;
function  register() {
   if(checkboxA&&check&&numberCorrect&&codeA&nameA) {
    buttonRegister.classList.add("buttom-register-tow");
    verifyComplete = true;
   } else {
    verifyComplete = false;
    buttonRegister.classList.remove("buttom-register-tow");
   }
}

// 表单提交
buttonRegister.onclick = function() {
  if(verifyComplete) {
    DateClass1 = new DateClass(userName.value,phoneNumber.value,passWord.value);
    DateClass1 = JSON.stringify(DateClass1);
    console.log(DateClass1);
    sessionStorage.inforMation = DateClass1;
    alert("注册成功");
  } 
}

function DateClass(username,number,passWord) {
  this.username = username;
  this.number = number;
  this.passWord = passWord;
}




// 登入
var coverUp = document.querySelector(".cover-up");
var loginName =document.querySelector("#login-name");
var nameRed = document.querySelector(".name-red");
var passwordRed = document.querySelector(".password-red");
var loginPassword = document.querySelector(".login-password");
var loginButton = document.querySelector(".login-button");
var signOut = document.querySelector("#sign-out");
var signOut2 = document.querySelector("#sign-out-2");
var signOut1 = document.querySelector("#sign-out-1");

var dl = document.querySelector("#dl");

dl.onclick = function () {
  coverUp.style.display = "block";
}



// 退出清零
signOut.onclick = function() {
  coverUp.style.display = "none";
  loginName.value = "";
  loginPassword.value = "";
}
// 清除当前所写
signOut2.onclick = function() {
  loginPassword.value = "";
  loginPassword.focus();
  signOut2.style.display = "none"
}

signOut1.onclick = function () {
  loginName.value = "";
  loginName.focus();
  signOut1.style.display = "none"
}

loginName.oninput = function() {
  signOut1.style.display = "block"
}

loginPassword.oninput = function() {
  signOut2.style.display = "block"
}

// 登入密码验证
loginButton.onclick = function() {
  var a = false;
  if(loginName.value == "") {
    nameRed.style.display = "block";
    passwordRed.style.display = "none";
  } else if(loginPassword.value == "") {
    nameRed.style.display = "none";
    passwordRed.style.display = "block";
  } else {
    passwordRed.style.display = "none";
    nameRed.style.display = "none";
    a = true;
  }
  
  if(a) {
    if((loginName.value == extract().number||loginName.value == extract().username)&&loginPassword.value == extract().passWord) {
      alert("登入成功")
    } else {
      alert("用户名或密码错误");
    }
  }

}

// 提取内部储存数据
function extract() {
 var q =  sessionStorage.inforMation;
 q = JSON.parse(q)
 return q ;
}



