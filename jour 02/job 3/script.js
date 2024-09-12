let count = 0;

function addone() {
    count++;
    document.getElementById('compteur').textContent = count;
}

// Ajouter l'écouteur d'événement au bouton
document.getElementById('button').addEventListener('click', addone);