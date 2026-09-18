const dot = document.getElementById("secret-dot");
const message = document.getElementById("hidden-message");

dot.addEventListener("click", function () {
    message.textContent = "You found something.";
});

const loadingScreen = document.getElementById("loading-screen");
const loadingText = document.getElementById("loading-text");
const continueText = document.getElementById("continue-text");
const music = document.getElementById("background-music");

let ready = false;

// Fake loading animation
let dots = 0;

const loadingAnimation = setInterval(() => {
    dots = (dots + 1) % 4;
    loadingText.textContent = "Loading" + ".".repeat(dots);
}, 400);

// Finish fake loading after 2.5 seconds
setTimeout(() => {
    clearInterval(loadingAnimation);

    loadingText.textContent = "Ready.";
    ready = true;

    loadingScreen.classList.add("loading-screen-ready");
}, 2500);

// Enter the site
function enterSite() {
    if (!ready) return;

    music.play();
    loadingScreen.classList.add("hidden");

    document.removeEventListener("keydown", enterSite);
}

loadingScreen.addEventListener("click", enterSite);
document.addEventListener("keydown", enterSite);
