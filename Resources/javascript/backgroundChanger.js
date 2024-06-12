// Changing the header background to opaque while scrolling.

let itemOne = document.getElementById("body");
let itemTwo = document.getElementById("header");

function changeBackground() {
    itemTwo.style.backgroundColor = "rgb(247, 93, 175)";
}

itemOne.onwheel = changeBackground;
