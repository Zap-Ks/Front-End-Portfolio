$(document).ready(function(){
    let navLink = $(".nav-link")

    navLink.mouseover(function(){
        navLink.animate({top: "100px"}, 1000)
    })
    navLink.mouseout(function(){
        // code
    })
});