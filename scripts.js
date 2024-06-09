// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Message envoyé !');
        // Ici, vous pouvez ajouter du code pour envoyer le formulaire via AJAX.
    });
});