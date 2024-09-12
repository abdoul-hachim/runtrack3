const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', function(e) {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            activatePlateforme();
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});

function activatePlateforme() {
    document.body.classList.add('plateforme');
    alert('Code Konami activé ! La page est maintenant aux couleurs de La Plateforme_');
}

function updateProgressBar() {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY;
    
    const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;
    
    const progressBar = document.getElementById('progress-bar');
    progressBar.style.width = scrollPercentage + '%';
    
    // Changer la couleur en fonction du pourcentage
    const hue = (scrollPercentage * 1.2).toFixed(0); // 0 à 120 (vert à rouge)
    progressBar.style.backgroundColor = `hsl(${120 - hue}, 100%, 50%)`;
}

window.addEventListener('load', updateProgressBar);
window.addEventListener('scroll', updateProgressBar);