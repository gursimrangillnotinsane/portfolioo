function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



var root = document.documentElement;
var listOfColors = ["#b97ca4cf", "#7c9cb9cf", "#547142a8", "#925c5e7f", "#424a3da8", "#3b854491", "#793b8591"]
var randomInteger = getRandomInt(0, 3);
root.style.setProperty('--fg', listOfColors[randomInteger]);