// console.log("hello")
// function change() {
//     var body = document.styleSheets[1].cssRules[5];
//     console.log(body)
//     var color = "url('https://c4.wallpaperflare.com/wallpaper/142/751/831/landscape-anime-digital-art-fantasy-art-wallpaper-preview.jpg')";
//     body.style.backgroundImage = color;
// }

// setTimeout(() => {
//     change()
// }, 1500)


// loader
function loader() {
    var loader = document.getElementsByClassName("loader")[0];
    var mainContent = document.getElementsByClassName("main")[0];
    loader.style.display = "none";
    mainContent.style.display = "block";
}

var listSections = ["aboutme", "knowledge", "contact"]
function place() {

    var indexOfSection = window.location.hash;
    indexOfSection = indexOfSection.slice(1);
    var indexx = listSections.indexOf(indexOfSection);
    return indexx;
}
//navigation using spacebar
var flow = true;
function navigation() {
    indexx = place();
    if (indexx == 0) {
        window.location.hash = listSections[indexx + 1];
        flow = true
    }
    else if (indexx < 3 && flow) {
        window.location.hash = listSections[indexx + 1];
    }
    else {
        window.location.hash = listSections[indexx - 1];
        flow = false
    }

}


function navigationUp() {
    indexx = place()
    if (indexx != 0) {
        window.location.hash = listSections[indexx - 1];
    }
    else {
        console.log("Nope")
    }
}

function navigationDown() {
    indexx = place()
    if (indexx != 3) {
        window.location.hash = listSections[indexx + 1];
    }
    else {
        console.log("Nope down")
    }
}

document.addEventListener("DOMContentLoaded", function () {
    console.log("loaded")
    loader();
    window.location.hash = "aboutme";
    document.addEventListener('keyup', e => {
        if (e.key == " ") {
            navigation();
            document.body.style.overflow = "hidden";
        }
        else if (e.code == "ArrowUp") {
            document.body.style.overflow = "hidden";
            navigationUp();
        }
        else if (e.code == "ArrowDown") {
            document.body.style.overflow = "hidden";
            navigationDown();
        }
        else if (e.code == "ArrowLeft" || e.code == "ArrowRight") {
            document.body.style.overflowY = "scroll";
        }
    })


});



