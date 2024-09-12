function updateProgressBar() {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;
    
    const progressBar = document.getElementById('progress-bar');
    progressBar.style.width = scrollPercentage + '%';
    
    // Changer la couleur en fonction du pourcentage
    const hue = (scrollPercentage * 1.2).toFixed(0); // 0 à 120 (vert à rouge)
    progressBar.style.backgroundColor = `hsl(${120 - hue}, 100%, 50%)`;
}

// Mettre à jour la barre de progression lors du chargement initial et du scroll
window.addEventListener('load', updateProgressBar);
window.addEventListener('scroll', updateProgressBar);