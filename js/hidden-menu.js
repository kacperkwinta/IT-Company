var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("main-navigation").style.top = "0";
    } else {
        document.getElementById("main-navigation").style.top = "-90px";
    }
    prevScrollpos = currentScrollPos;
}