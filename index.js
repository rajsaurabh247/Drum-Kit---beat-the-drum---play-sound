let n = document.querySelectorAll(".drum").length;
for (let i = 0; i < n; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var key = document.querySelectorAll(".drum")[i].innerHTML;
        play(key);
        btnAnimation(key);
    });
}
document.addEventListener("keypress", function (event) {
    play(event.key);
    btnAnimation(event.key);
});
function play(key) {
    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        default:
            console.log(key);
    }
}

function btnAnimation(k) {
    let btn = document.querySelector("." + k)
    btn.classList.add("pressed");

    setTimeout(function () {
        btn.classList.remove("pressed");
    }, 100);
}