// script.js

var users = {
    "xavier.fini": { "password": "Xavier", "redirect": "login=xavier-fini.html" },
    // Ajoutez d'autres utilisateurs au besoin
};

function validateForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (users.hasOwnProperty(username) && users[username].password === password) {
        // Rediriger l'utilisateur vers la page spécifiée dans l'objet users
        window.location.href = users[username].redirect;
    } else {
        alert('Nom d\'utilisateur ou mot de passe incorrect.');
    }
}
