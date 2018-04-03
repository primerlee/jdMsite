// 页面加载完成开始执行js代码
window.onload=function () {
    //顶部搜索栏
    search();
    // banner图自动轮播和滑动效果
    banner();
    // 活动倒计时
    downTime();
};

var search = function () {
     var oSearchBox = document.querySelector(".search_box");
     var oBanner = document.querySelector(".jd_banner");
     var bannerHeight = oBanner.offsetHeight;

     window.onscroll=function () {
         var oScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
         var opacity = 0;
         if (oScrollTop <= bannerHeight){
             opacity = 0.85*(oScrollTop/bannerHeight);
         }else {
             opacity = 0.85;
         }
         oSearchBox.style.background="rgba(216,80,92,"+opacity+")";
     }
};
var banner = function () {
    var oBanner = document.querySelector(".jd_banner");
    var bannerWidth = oBanner.offsetWidth;

    var oImageBox = oBanner.querySelector("ul:first-child");

    var oIndicate = oBanner.querySelector("ul:last-child");
    var aPoint = oIndicate.querySelectorAll("li");

    //添加过渡
    function addTransition() {
        oImageBox.style.transition="all, 0.2s";
        oImageBox.style.webkitTransition="all, 0,2s"
    }

    //清除过渡
    function removeTransition() {
        oImageBox.style.transition="none";
        oImageBox.style.webkitTransition="none"
    }

    //设置位移
    function setTranslate(translateX) {
        oImageBox.style.transform="translateX("+translateX+"px)";
        oImageBox.style.webkitTransform="translateX("+translateX+"px)";
    }

    var index = 1;
    var timer = setInterval(function () {
        index++;
        addTransition();
        setTranslate(-index*bannerWidth);
    }, 1000);

    oImageBox.addEventListener("transitionend", function () {
        if(index>=9){
            index = 1;
            removeTransition();
            setTranslate(-index*bannerWidth);

        }else if(index <= 0){
            index = 8;
            removeTransition();
            setTranslate(-index*bannerWidth);
        }

        setPoint();
    }, false);

    function setPoint() {
        for (var i =0; i < aPoint.length; i++){
            aPoint[i].classList.remove("active");
            aPoint[index-1].classList.add("active");
        }
    }

    var startX = 0;
    var distanceX = 0;
    var isMoved = false;

    oImageBox.addEventListener("touchstart", function (ev) {
        clearInterval(timer);
        startX = ev.touches[0].clientX;
    }, false);

    oImageBox.addEventListener("touchmove", function (ev) {
        var moveX = ev.touches[0].clientX;
        distanceX = moveX - startX;

        var translateX = (-index * bannerWidth) + distanceX;
        removeTransition();
        setTranslate(translateX);
        isMoved = true;
    }, false);

    oImageBox.addEventListener("touchend", function () {
        if(isMoved){
            if(Math.abs(distanceX) < bannerWidth/3){
                addTransition();
                setTranslate(-index*bannerWidth);
            }else {
                if (distanceX > 0){
                    index --;
                }else {
                    index++
                }
                addTransition();
                setTranslate(-index*bannerWidth);
            }
        }
    }, false);

    clearInterval(timer);
    timer = setInterval(function () {
        index++;
        addTransition();
        setTranslate(-index*bannerWidth);
    }, 1000);

    startX = 0;
    distanceX = 0;
    isMoved = false;

};
var downTime = function () {
    var oTime = document.querySelector(".clock_count");
    var aSpan = oTime.querySelectorAll("span");
    var time = 10 * 60 * 60;
    timerCount();
    var timer = setInterval(timerCount,1000);

   function timerCount () {
        time--;
        var h = Math.floor(time/3600);
        var m = Math.floor(time%3600/60);
        var s = time%60;

        aSpan[0].innerText=Math.floor(h/10);
        aSpan[1].innerText=h%10;
        aSpan[3].innerText=Math.floor(m/10);
        aSpan[4].innerText=m%10;
        aSpan[6].innerText=Math.floor(s/10);
        aSpan[7].innerText=s%10;

        // console.log(time);
        if (time<=0){
            clearInterval(timer);
        }
    }

};