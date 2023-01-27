// Notification
var notification = document.querySelector("#feur-notification");
var notificationButton = document.getElementById("feur-button");
notificationButton.addEventListener("click", function(event) {
    console.log("test")
    event.preventDefault();
    var classList = notification.className;
    notification.classList.remove("hidden");
    setTimeout(function() {
        notification.className = classList;
    }, 5000);
});




//Audio
var audio = new Audio('meme.mp3');
var audioButton = document.getElementById("play-button");

audioButton.addEventListener("click", function(event) {
    event.preventDefault();
    audio.play();
});