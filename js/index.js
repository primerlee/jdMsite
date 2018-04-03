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

}