// Ajoutez ce code au début de votre fichier JavaScript existant

document.addEventListener('DOMContentLoaded', function() {
    const showButton = document.getElementById('showButton');
    const hideButton = document.getElementById('hideButton');
    const citationElement = document.getElementById('citation');

    showButton.addEventListener('click', function() {
        citationElement.textContent = "Les logiciels et les cathédrales, c'est un peu la même chose - d'abord on les construit, ensuite on prie.";
        citationElement.style.display = 'block';
    });

    hideButton.addEventListener('click', function() {
        document.body.style.display = 'none';
    });
});

// Le reste de votre code JavaScript existant suit ici