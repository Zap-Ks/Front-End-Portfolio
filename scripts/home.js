$(document).ready(function(){
    //Variables
    let heading = $("heading")
    let section = $("section")
    let header = $("header")
    let nav = $("nav")
    let title = $("h1")
    let link = $(".nav-link")

    //Home opening animation
    header.slideUp(0)
    link.fadeOut(0)
    section.fadeOut(0)
    header.slideDown(1000)
    heading.fadeOut(0)
    heading.fadeIn(1500)
    section.fadeIn(1500)
    setTimeout(function(){
        link.fadeIn(500)
    }, 1000)

    //Go button hover animation
    let buttons = $(".button-link")
    buttons.mouseover(function(){
        $(this).animate({fontSize:"+=8px"}, 500)
    })
    buttons.mouseout(function(){
        $(this).animate({fontSize:"-=8px"}, 500)
    })
});