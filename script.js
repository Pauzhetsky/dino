const dino = document.getElementById("dino");
const mashroom = document.getElementById("mashroom");

document.addEventListener("keydown", function(event) {
    jump();
});

function jump() {
    if (!dino.classList.contains("jump")) {
        dino.classList.add("jump");
    }
    setTimeout(function() {
        dino.classList.remove("jump");
    }, 300)
}

let isAlive = setInterval(function() {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let mashroomLeft = parseInt(window.getComputedStyle(mashroom).getPropertyValue("left"));

    if (mashroomLeft < 30 && mashroomLeft > 0 && dinoTop >= 340) {
        alert("Игра закончена!");
    }
}, 10);