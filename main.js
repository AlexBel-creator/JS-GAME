//JSON
function new_id(id) {
    
}

// Identifiant
function generate_id() {
    var id = "";
    var possible = "abcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 6; i++)
        id += possible.charAt(Math.floor(Math.random() * possible.length));
    return id;
}

// Notification
var notification_button = document.getElementById("notification-button");
notification_button.addEventListener("click", function(event) {
    event.preventDefault();
    let element = document.getElementById("notification-element");
    let class_list = element.className;
    element.classList.remove("hidden");
    var id = document.getElementById("notification-id");
    id_generated = generate_id()
    id.innerHTML = id_generated
    new_id(id_generated)
    setTimeout(function() {
        element.className = class_list;
    }, 10000);
});

//Audio
var audio = new Audio('assets/sounds/memes/ronflement.m4a');
var audio_button = document.getElementById("play-button");
audio_button.addEventListener("click", function(event) {
    event.preventDefault();
    audio.play();
});