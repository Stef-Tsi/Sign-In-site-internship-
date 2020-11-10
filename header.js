window.onscroll = function() {
    scrollFunction()
}

window.onload = function(){
    slideDown();
    $("#headerbackground").fadeIn(2800);
}

function scrollFunction() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        document.getElementById("headerbackground").style.height = "70%";
        document.getElementById("header").style.height = "10%";
    } else {
        document.getElementById("headerbackground").style.height = "100%";
        document.getElementById("header").style.height = "14%";
    }
}

function slideDown(){
    $("#headerbanner").animate({
        "top": "0"
    },1800);
}