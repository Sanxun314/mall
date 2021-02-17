window.onload = function () {
  // 登录注册框
  let login = document.getElementById('login');
  let mask = document.getElementById('mask');
  let box = document.getElementById('box');
  let close = document.getElementById('close');
  login.onclick = function () {
    mask.style.display = "block";
    box.style.display = "block";
  }
  close.onclick = function () {
    mask.style.display = "none";
    box.style.display = "none";
  }

  // 关闭topbanner
  let closeBanner = document.getElementById('close-banner');
  let topbanner = document.getElementById('topbanner');
  closeBanner.onclick = function () {
    topbanner.style.display = "none";
  }

  //点击隐藏文字
  let input = document.getElementById('input');
  input.onfocus = function () {
    if(this.value === "图书开抢") {
      this.value = "";
      this.style.color = "black";
    }
  }
  input.onblur = function () {
    if(this.value === "") {
      this.value = "图书开抢";
      this.style.color = "#ccc";
    }
  }

  //动态生成小圆点
  let scroll = document.getElementById("scroll");
  let circle = document.createElement("div");
  circle.setAttribute("class", "circle");
  circle.setAttribute("id", "circle");
  scroll.appendChild(circle);
  let ul = document.getElementById("ul");
  let xLis = ul.children;
  // console.log(xLis.length);
  for(let i=0; i<xLis.length; i++){
    let newlis = document.createElement("li");
    newlis.innerHTML = i + 1;
    circle.appendChild(newlis);
  }
  let child = circle.children;
  child[0].setAttribute("class", "current");

  //鼠标经过显示arrow
  let arr = document.getElementById("arr")
  scroll.onmouseover = function () {
    arr.style.display = "block";
  }
  scroll.onmouseout = function () {
    arr.style.display = "none";
  }


  //焦点图
  let prev = document.getElementById("prev");
  let next = document.getElementById("next");


  let xCircle = document.getElementById("circle");
  let xUl = xCircle.children; //小圆点
  let leader = 0, target = 0;
  for(let i=0; i<xUl.length; i++){
    xUl[i].index = i; //每个li的索引
    xUl[i].onmouseover = function() {
      for(let j=0; j<xUl.length; j++){
        xUl[j].className = "";
      }
      this.className = "current";
      target = -this.index * 730; //目标位置 当前盒子的索引乘以图片宽度
    }
  }


  //左右焦点图
  next.onclick = function () {
    target -= 730;
    //到最后一张，点击数组不再增加
    if(target < -3650){
      target = -3650
    }
    //清除所有li的类名
    for(let i=0; i < xUl.length; i++ ){
      xUl[i].className = "";
    }
    // 当前li增加类名
    xUl[-target / 730].className = "current";
  }
  prev.onclick = function () {
    target += 730;

    if(target > 0){
      target = 0
    }
    
    for(let i=0; i < xUl.length; i++ ){
      xUl[i].className = "";
    }

    xUl[-target / 730].className = "current";
  }





  //缓动动画
  let timer = setInterval(function() {
    if(target >= 0){
      target = 0;
    }else if(target <= -3650){
      target = -3650;
    }
    leader = leader + (target - leader) / 10;
    ul.style.left = leader + "px";
    
  },30)






  // 生活服务图标
  let lis = document.getElementById('c-icon').getElementsByTagName('i');
  for(let i = 0; i < lis.length; i++) {
    lis[i].style.backgroundPosition = "0" +i*-25+"px";
  }

}

