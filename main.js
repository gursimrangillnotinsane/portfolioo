function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



var root = document.documentElement;
var listOfColors = ["#650000", "#066839", "#9C5B0C", "#2F9890"]
var randomInteger = getRandomInt(0, 3);
root.style.setProperty('--fg', listOfColors[randomInteger]);


