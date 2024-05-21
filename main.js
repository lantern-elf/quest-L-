const background = document.getElementsByTagName("BODY")[0];
const main = document.getElementById('main');

function home_menu() {
    background.style.backgroundPositionX = "left";

}

function download_menu() {
    background.style.backgroundPositionX = "35%";
}

function news_later_menu() {
    background.style.backgroundPositionX = "65%";
}

function about_menu() {
    background.style.backgroundPositionX = "right";
}