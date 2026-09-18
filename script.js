const discord = document.getElementById("discord-copy");
const originalIcon = '<img src="discord.svg" alt="Discord">';

discord.addEventListener("click", async function (event) {
    event.preventDefault();

    try {
        await navigator.clipboard.writeText("the_lunarity");

        discord.innerHTML = "Copied!";
        discord.classList.add("copied");

    } catch (error) {
        console.error("Clipboard failed:", error);
        discord.innerHTML = "Error!";
    }
});
