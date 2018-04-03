window.onload=function () {
    search();
    banner();
    downTime();
};

function  search() {
    var oSearch = document.querySelector(".search_box");
    var oBanner = document.querySelector(".jd_banner");
    var oHeight = oBanner.offsetHeight;

    window.onscroll=function () {
        var alpha = 0;
        var offSetTop = document.body.scrollTop || document.documentElement.scrollTop;
        if (offSetTop <= oHeight){
            alpha = 0.85*(offSetTop/oHeight);
        }else {
            alpha = 0.85;
        }
        oSearch.style.background="rgba(216,80,92,"+alpha+")";
    }
}
function banner() {

}
function downTime() {
    var oClock = document.querySelector(".clock_count");
    var aSpan = oClock.querySelectorAll("span");

    var time = 11 * 60 *60;
    var timer = setInterval(function () {
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

        if (time <=0){
            clearInterval(timer);
        }
    }, 1000);




}