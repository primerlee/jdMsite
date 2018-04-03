window.onload=function () {
    leftSwiper();
    rightSwiper();
};

//自定义方法
function leftSwiper() {
    var oLeft = document.querySelector(".left");
    var oUl = oLeft.querySelector(".nav");

    var startY = 0;
    var disY = 0;
    var currentY = 0;

    oUl.addEventListener("touchstart", function (e) {
        startY = e.touches[0].clientY;
    }, false);
    oUl.addEventListener("touchmove", function (e) {
        var moveY = e.touches[0].clientY;
        disY = moveY - startY;
        var translateY = disY + currentY;

        oUl.style.transform="translateY("+translateY+"px)";
        oUl.style.webkitTransform="translateY("+translateY+"px)";

    }, false);
    oUl.addEventListener("touchend", function () {
        currentY+=disY;
    }, false);

}
// function leftSwiper() {
//     new IScroll(document.querySelector(".left"),{
//         scrollX: true,
//         scrollY: true
//     });
// }
function rightSwiper() {
    // 利用iscroll插件
    new IScroll(document.querySelector(".right"),{
        scrollX: true,
        scrollY: true
    });
}