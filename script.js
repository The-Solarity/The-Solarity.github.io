const dot = document.getElementById("secret-dot");
const message = document.getElementById("hidden-message");

dot.addEventListener("click", function () {
    message.textContent = "You found something.";
});

const loadingScreen = document.getElementById("loading-screen");
const music = document.getElementById("background-music");

function enterSite() {
    music.play();
    loadingScreen.classList.add("hidden");

    document.removeEventListener("keydown", enterSite);
}

loadingScreen.addEventListener("click", enterSite);
document.addEventListener("keydown", enterSite);
