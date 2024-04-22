// Définition des utilisateurs avec leurs identifiants et mots de passe
var users = [
    { username: "xavierfini", password: "xavierfini" },
    { username: "utilisateur2", password: "motdepasse2" },
    // Ajoutez d'autres utilisateurs au besoin
];

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêcher le formulaire de se soumettre

    // Récupérer les valeurs de l'identifiant et du mot de passe
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Vérifier l'authentification pour chaque utilisateur
    var isAuthenticated = users.some(function(user) {
        return user.username === username && user.password === password;
    });

    if (isAuthenticated) {
        // Rediriger vers la page dédiée si l'utilisateur est authentifié
        window.location.href = "xavierfini.html";
    } else {
        alert("Identifiant ou mot de passe incorrect");
    }
});