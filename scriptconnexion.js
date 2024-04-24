document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("loginForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Empêche l'envoi du formulaire par défaut

        // Votre code JavaScript ici
        var users = [
            { username: "xavierfini", password: "Xavier14", redirectUrl: "xavierfini.html" },
            { username: "utilisateur2", password: "motdepasse2", redirectUrl: "page2.html" },
            // Ajoutez d'autres utilisateurs au besoin
        ];

        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;

        var authenticatedUser = users.find(function (user) {
            return user.username === username && user.password === password;
        });

        if (authenticatedUser) {
            window.location.href = authenticatedUser.redirectUrl;
        } else {
            alert("Identifiant ou mot de passe incorrect");
        }
    });
});