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

        console.log(time);
        if (time<=0){
            clearInterval(timer);
        }
    }

};