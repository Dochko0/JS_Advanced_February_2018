let canvas = document.getElementById('can')
let ctx = canvas.getContext('2d')

let bgReady = false;
let bgImage = new Image();
bgImage.onload = function () {
    bgReady = true;
};
bgImage.src = "./images/background.png";

let heroReady = false;
let heroImage = new Image();
heroImage.onload = function () {
    heroReady = true;
};
heroImage.src = "./images/hero.png";

let coinReady = false;
let coinImage = new Image();
coinImage.onload = function () {
    coinReady = true;
};
coinImage.src = "./images/coin.png";

let hero = {
    speed: 5, // movement in pixels per second
    x: 0,
    y: 0
};
let coin = {
    x: 0,
    y: 0
};
let coinCaught = 0;

let keysDown = {};
addEventListener("keydown", function (e) {
    keysDown[e.keyCode] = true;
});

addEventListener("keyup", function (e) {
    delete keysDown[e.keyCode];
});

let reset = function () {
    hero.x = canvas.width / 2;
    hero.y = canvas.height / 2;

    // Throw the coin somewhere on the screen randomly
    coin.x = 32 + (Math.random() * (canvas.width - 64));
    coin.y = 32 + (Math.random() * (canvas.height - 64));
};

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

let update = function () {
    if (38 in keysDown && hero.y > 20) { // Player holding up
        hero.y -= hero.speed;
    }
    if (40 in keysDown && hero.y < 420) { // Player holding down
        hero.y += hero.speed;}
    if (37 in keysDown && hero.x > 30) { // Player holding left
        hero.x -= hero.speed;
    }
    if (39 in keysDown && hero.x < 450) { // Player holding right
        hero.x += hero.speed;
    }

    // Are they touching?
    if (
        hero.x <= (coin.x + 32)
        && coin.x <= (hero.x + 32)
        && hero.y <= (coin.y + 32)
        && coin.y <= (hero.y + 32)
    ) {
        ++coinCaught;
        reset();
    }
};

let render = function () {
    if (bgReady) {
        ctx.drawImage(bgImage, 0, 0);
    }

    if (heroReady) {
        ctx.drawImage(heroImage, hero.x, hero.y);
    }

    if (coinReady) {
        ctx.drawImage(coinImage, coin.x, coin.y);
    }

    // Score
    ctx.fillStyle = "rgb(250, 250, 250)";
    ctx.font = "24px Helvetica";
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillText("Coins collect: " + coinCaught, 20, 20);
};

let main = function () {
    update();
    render();
    requestAnimationFrame(main);
};

let w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

reset()
main()