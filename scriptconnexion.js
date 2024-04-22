// Définition des utilisateurs avec leurs identifiants, mots de passe et pages dédiées
var users = [
    { username: "xavierfini", password: "Xavier14", redirectUrl: "xavierfini.html" },
    { username: "utilisateur2", password: "motdepasse2", redirectUrl: "page2.html" },
    // Ajoutez d'autres utilisateurs au besoin
];

document.getElementById("loginForm").addEventListener("submit", function(event) {

    // Récupérer les valeurs de l'identifiant et du mot de passe
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Vérifier l'authentification pour chaque utilisateur
    var authenticatedUser = users.find(function(user) {
        return user.username === username && user.password === password;
    });

    if (authenticatedUser) {
        // Rediriger vers la page dédiée de l'utilisateur authentifié
        window.location.href = authenticatedUser.redirectUrl;
    } else {
        alert("Identifiant ou mot de passe incorrect");
    }
});