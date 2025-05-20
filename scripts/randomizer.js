function randomize() {
    let colorNum = Math.round((Math.random() * 24) + 1);
    if (colorNum <= 3) {
        document.getElementById("box").setAttribute("class", "red");
    } else if (colorNum <= 6) {
        document.getElementById("box").setAttribute("class", "orange");
    } else if (colorNum <= 9) {
        document.getElementById("box").setAttribute("class", "yellow");
    } else if (colorNum <= 12) {
        document.getElementById("box").setAttribute("class", "green");
    } else if (colorNum <= 15) {
        document.getElementById("box").setAttribute("class", "blue");
    } else if (colorNum <= 18) {
        document.getElementById("box").setAttribute("class", "purple");
    } else if (colorNum <= 21) {
        document.getElementById("box").setAttribute("class", "pink");
    } else if (colorNum <= 23) {
        document.getElementById("box").setAttribute("class", "silver");
    } else {
        document.getElementById("box").setAttribute("class", "gold");
    }
}