// script.js

var users = {
    "admin": { "password": "admin", "redirect": "admin.html" },
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

function nouveaumdp() {
    let id = prompt('Quel est votre identifiant ?', Votre identifiant);
    alert(`Vous recevrez un mail dans quelques instants avec un nouveau mot de passe!`);
}