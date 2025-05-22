$(document).ready(function(){
    //Variable
    let navLink = $(".nav-link")

    //Nav link hover animation
    navLink.mouseover(function(){
        $(this).animate({fontSize:"+=8px"}, 500)
    })
    navLink.mouseout(function(){
        $(this).animate({fontSize:"-=8px"}, 500)
    })
});