const body = document.getElementsByTagName("BODY")[0];
const main = document.getElementsByTagName("MAIN")[0];

function home_menu() {
    body.style.backgroundPositionX = "left";
    main.style.left = "0%";
}

function download_menu() {
    body.style.backgroundPositionX = "35%";
    main.style.left = "-100%";
}

function news_later_menu() {
    body.style.backgroundPositionX = "65%";
    main.style.left = "-200%";
}

function about_menu() {
    body.style.backgroundPositionX = "right";
    main.style.left = "-300%";
}