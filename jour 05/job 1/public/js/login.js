document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Vérifications côté client
    let errors = [];

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errors.push("L'adresse email n'est pas valide.");
    }

    if (password.length < 1) {
        errors.push("Veuillez entrer votre mot de passe.");
    }

    if (errors.length > 0) {
        document.getElementById('errorMessage').innerHTML = errors.join('<br>');
        return;
    }

    // Si toutes les vérifications sont passées, envoyer les données au serveur
    fetch('../src/controllers/login.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Connexion réussie !');
            window.location.href = 'index.html'; // Redirection vers la page d'accueil
        } else {
            throw new Error(data.message);
        }
    })
    .catch(error => {
        document.getElementById('errorMessage').textContent = 'Erreur lors de la connexion : ' + error.message;
    });
});