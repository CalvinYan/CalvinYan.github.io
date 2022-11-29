// test = document.getElementById("test");

// test.onclick = function () {
    // document.getElementById("background").style.background = "#00F300";
    // document.documentElement.style.backgroundColor = "#00F300";
// };

rulesets = document.getElementById("changerules");

rulesets.onclick = function () {
    shader = document.getElementById("shader");
    shader.classList.remove("hidden");
    shader.style.background
    shader.onclick = function () {
        shader.classList.add("hidden");
    };

};

play = document.getElementById("play");

play.onclick = function () {
    panel = document.getElementById("panel");
    panel.style.transform = "translateX(100)";
};