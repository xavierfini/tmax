function solve() {
    var users = [
        { username: "xavierfini", password: "Xavier14", redirectUrl: "xavierfini.html" },
        { username: "utilisateur2", password: "motdepasse2", redirectUrl: "page2.html" },
        // Ajoutez d'autres utilisateurs au besoin
    ];

    var usernameInput = document.getElementById("username");
    var passwordInput = document.getElementById("password");

    var username = usernameInput.value;
    var password = passwordInput.value;

    var authenticatedUser = users.find(function(user) {
        return user.username === username && user.password === password;
    });

    if (authenticatedUser) {
        window.location.href = authenticatedUser.redirectUrl;
    } else {
        alert("Identifiant ou mot de passe incorrect");
    }

    // Empêcher l'envoi du formulaire par défaut
    return false;
}

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire par défaut
    solve();
});