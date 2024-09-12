function showhide() {
    let article = document.getElementById('citation');
    
    if (article) {
        // Si l'article existe, on le supprime
        article.remove();
    } else {
        // Si l'article n'existe pas, on le crée et l'ajoute
        article = document.createElement('article');
        article.id = 'citation';
        article.textContent = "L'important n'est pas la chute, mais l'atterrissage.";
        document.body.appendChild(article);
    }
}

// Ajouter l'écouteur d'événement au bouton
document.getElementById('button').addEventListener('click', showhide);