let bg = document.getElementById("bg");
let moon = document.getElementById("moon");
let mountain = document.getElementById("mountain");
let road = document.getElementById("road");
let text = document.getElementById("text");

window.addEventListener("scroll", function () {
    var value = window.scrollY;

    bg.style.top = value * 0.5 + "px";
    /*a - value miatt balra megy a hold, ha csak sima value lenne, akkor jobbra menne a hold*/
    moon.style.left = -value * 0.5 + "px";
    mountain.style.top = -value * 0.15 + "px";
    /*ha value lenne, az út alja a háttér csillagait venné fel fokozatosan */
    road.style.top = value * 0.15 + "px";
    text.style.top = value * 1 + "px";
});
