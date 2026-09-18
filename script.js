const discord = document.getElementById("discord-copy");

discord.addEventListener("click", async function (event) {
    event.preventDefault();

    try {
        await navigator.clipboard.writeText("the_lunarity");
        console.log("Discord name copied!");
    } catch (error) {
        console.error("Clipboard failed:", error);
    }
});

        discord.classList.add("copied");

        setTimeout(() => {
            discord.classList.remove("copied");
        }, 1000);

    } catch (error) {
        console.error("Clipboard failed:", error);
    }
});
