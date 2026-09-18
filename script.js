const dot = document.getElementById("secret-dot");
const message = document.getElementById("hidden-message");

dot.addEventListener("click", function () {
    message.textContent = "You found something.";
});

const loadingScreen = document.getElementById("loading-screen");
const continueText = document.getElementById("continue-text");
const music = document.getElementById("background-music");

let ready = false;

setTimeout(() => {
    ready = true;
    loadingScreen.classList.add("loading-screen-ready");
}, 2500);

function enterSite() {
    if (!ready) return;

    music.play();
    loadingScreen.classList.add("hidden");

    document.removeEventListener("keydown", enterSite);
}

loadingScreen.addEventListener("click", enterSite);
document.addEventListener("keydown", enterSite);
