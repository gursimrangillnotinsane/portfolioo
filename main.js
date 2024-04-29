function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



var root = document.documentElement;
var listOfColors = ["#650000", "#066839", "#9C5B0C", "#2F9890"]
var randomInteger = getRandomInt(0, 3);
root.style.setProperty('--fg', listOfColors[randomInteger]);


const ticker = document.querySelector('.ticker')
const list = document.querySelector('.ticker__list')

let gg = false
// ANIMATION WILL PLAY FOR 2S AND THEN FREEZE
// TO DEMONSTRATE THE PROBLEM
// setTimeout(() => {
//     gg = true
//     while (gg) {
//         // event loop is blocked
//         // animation freezes if translateX is a %
//         // animation continues if translateX is set to pixels
//         console.log("hi")
//     }
// }, 2000)



// setTimeout(() => {
//     gg = false

// }, 3000)