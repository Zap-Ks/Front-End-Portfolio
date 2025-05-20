$(document).ready(function() {
    let header = $("header")
    let nav = $("nav")
    let title = $("h1")
    let link = $(".nav-link")

    header.slideUp(0)
    link.fadeOut(0)
    header.slideDown(1000)
    setTimeout(function(){
        link.fadeIn(500)
    }, 1000)
});