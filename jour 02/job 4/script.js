document.addEventListener('keypress', function(event) {
    const keylogger = document.getElementById('keylogger');
    const key = event.key.toLowerCase();
    
    // Vérifier si la touche pressée est une lettre de a à z
    if (key >= 'a' && key <= 'z') {
        // Si le focus est dans le textarea, ajouter la lettre deux fois
        if (document.activeElement === keylogger) {
            keylogger.value += key + key;
        } else {
            // Sinon, ajouter la lettre une seule fois
            keylogger.value += key;
        }
    }
});