const dot = document.getElementById("secret-dot");
const message = document.getElementById("hidden-message");

dot.addEventListener("click", function () {
    message.textContent = "You found something.";
});
