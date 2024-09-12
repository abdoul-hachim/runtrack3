document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const nom = document.getElementById('nom').value;
    const prenom = document.getElementById('prenom').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Vérifications côté client
    let errors = [];

    if (nom.length < 2) {
        errors.push("Le nom doit contenir au moins 2 caractères.");
    }

    if (prenom.length < 2) {
        errors.push("Le prénom doit contenir au moins 2 caractères.");
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errors.push("L'adresse email n'est pas valide.");
    }

    if (password.length < 12) {
        errors.push("Le mot de passe doit contenir au moins 12 caractères.");
    }

    if (!/[A-Z]/.test(password) || !/[a-z]/.test(password) || 
        !/[0-9]/.test(password) || !/[^A-Za-z0-9]/.test(password)) {
        errors.push("Le mot de passe doit contenir au moins une majuscule, une minuscule, un chiffre et un caractère spécial.");
    }

    if (errors.length > 0) {
        document.getElementById('errorMessage').innerHTML = errors.join('<br>');
        return;
    }

    // Si toutes les vérifications sont passées, envoyer les données au serveur
    fetch('../src/controllers/register.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nom, prenom, email, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Inscription réussie !');
            window.location.href = 'login.html';
        } else {
            throw new Error(data.message);
        }
    })
    .catch(error => {
        document.getElementById('errorMessage').textContent = 'Erreur lors de l\'inscription : ' + error.message;
    });
});