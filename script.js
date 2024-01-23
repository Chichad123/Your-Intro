document.addEventListener("DOMContentLoaded", function() {
    const input = document.querySelector("input");
    const go = document.querySelector("button");

    go.onclick = func;

    function func() {
        let variable = input.value;
        let text = "Hi! Your Name is " + variable;
        const main = document.getElementById("main");
        main.innerText = text;
    }
});