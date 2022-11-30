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
    panel.style.transform = "translateX(500px)";
    
    centerpiece = document.getElementById("centerpiece");
    centerpiece.style.opacity = 0;

    tiles = document.getElementsByClassName("tile");

    for (var i = 0; i < tiles.length; i++) {
        tile = tiles[i];

        roll = Math.floor(Math.random() * 3);
        if (roll == 0) {
            tile.src = "assets/img/7bing.png";
        }        
        if (roll == 1) {
            tile.src = "assets/img/8tiao.png";
        }        
        if (roll == 2) {
            tile.src = "assets/img/9wan.png";
        }        
        tile.style.transform = "none";
        tile.style.animationDelay = "5s";
    }
};