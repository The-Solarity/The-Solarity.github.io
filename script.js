const discord = document.getElementById("discord-copy");
const discordIcon = discord.querySelector("img");

discord.addEventListener("click", async function (event) {
    event.preventDefault();

    try {
        await navigator.clipboard.writeText("the_lunarity");

        discord.classList.add("copied");
        discordIcon.style.display = "none";

        const text = document.createElement("span");
        text.textContent = "Copied!";
        text.classList.add("copy-text");

        discord.appendChild(text);

        setTimeout(() => {
            discord.classList.remove("copied");
            text.remove();
            discordIcon.style.display = "";
        }, 1000);

    } catch (error) {
        console.error("Clipboard failed:", error);
    }
});
