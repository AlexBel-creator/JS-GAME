// Identifiant
function generate_id() {
    id = "";
    possible = "abcdefghijklmnopqrstuvwxyz0123456789";
    for (i = 0; i < 6; i++) {
        id += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return id;
}

// Notification
notification_element = document.getElementById("notification-element");
notification_class_list = notification_element.className;
function raise_notification(type) {
    notification_title = document.getElementById("notification-title");
    notification_text = document.getElementById("notification-text");
    notification_svg = document.getElementById("notification-svg")
    if (type == "success") {
        notification_element.className = notification_class_list;
        notification_element.classList.remove("hidden");
        notification_element.classList.add("bg-green-700");
        id_generated = generate_id()
        notification_title.innerHTML = id_generated
        notification_text.innerHTML = "Nouvelle identifiant créé"
        notification_svg.innerHTML = `<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>`
    } else if (type == "error") {
        notification_element.className = notification_class_list;
        notification_element.classList.remove("hidden");
        notification_element.classList.add("bg-red-700");
        notification_title.innerHTML = "Erreur"
        notification_text.innerHTML = "L'identifiant n'est pas valide"
        notification_svg.innerHTML = `<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>`
    }
    setTimeout(function() {
        notification_element.className = notification_class_list;
    }, 5000);
}

// Rejoindre
create_button = document.getElementById("create-button");
create_button.addEventListener("click", function(event) {
    event.preventDefault();
    raise_notification("success");
});

// Audio & Connexion
join_button = document.getElementById("join-button");
join_button.addEventListener("click", function(event) {
    event.preventDefault();
    input = document.querySelector('input[name="input-field"]');
    input = input.value;
    regex = /^[a-z0-9]{6}$/;
    if (regex.test(input)) {
        url = new URLSearchParams({
            id: input,
        });
        fetch('saves.json')
            .then(response => response.json())
            .then(data => {
                if (data[input] == undefined) {
                    raise_notification("error")
                } else {
                    window.location.href = `game.html?${url}`;
                }
            });
    } else {
        raise_notification("error")
    }
});