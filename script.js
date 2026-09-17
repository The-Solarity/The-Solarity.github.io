```javascript
const discord = document.getElementById("discord-copy");

discord.addEventListener("click", function (event) {
    event.preventDefault();

    navigator.clipboard.writeText("the_lunarity");
});
```
