const notifications = document.querySelector(".notifications"),
boutons = document.querySelectorAll(".boutons .btn");

const toastDetails = {
    minuterie: 5000,
    succès: {
        icône : 'fa-circle-check',
        texte : "Succès : Ceci est un toast à la réussite.",
    },
    erreur: {
        icône : 'fa-circle-xmark',
        texte : "Cette édition n'est pas encore sortie",
    },
    avertissement: {
        icône : 'fa-triangle-exclamation',
        texte : "Cette page n'existe pas encore",
    },
    Info: {
        icône : 'fa-circle-info',
        texte : "Info : vous recevrez un mail dans quelques instants.",
    }
}
function validateForm() {
    const removeToast = (toast) => {
        toast.classList.add("cacher");
        if(toast.timeoutId) clearTimeout(toast.timeoutId); // Effacement du délai d'attente pour le toast
        setTimeout(() => toast.remove(), 500); // Suppression du toast après 500 ms
    }

    const createToast = (id) => {
        // Obtention de l'icône et du texte du toast en fonction de l'identifiant transmis
        const { icône, texte } = toastDetails[id];
        const toast = document.createElement("li"); // Création d'un nouvel élément 'li' pour le toast
        toast.className = `toast ${id}` ; // Définition des classes pour le toast
        // Définition du HTML interne pour le toast
        toast.innerHTML = `<div class="column">
                         <i class="fa-solid ${icon}"></i>
                         <span>${text></span>
                      </div>
                      <i class="fa-solid fa-xmark" onclick="removeToast(this.parentElement)"></i>`;
    notifications.appendChild(toast); // Ajoute le toast à la notification ul
    // Définition d'un délai d'attente pour supprimer le toast après la durée spécifiée
    toast.timeoutId = setTimeout(() => removeToast(toast), toastDetails.timer);
}

// Ajout d'un écouteur d'événement de clic à chaque bouton pour créer un toast lorsque vous cliquez dessus
boutons.forEach(btn => {
    btn.addEventListener("click", () => createToast(btn.id));
});

}