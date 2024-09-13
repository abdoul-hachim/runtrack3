$(document).ready(function() {
    // Citations de Blade Runner
    const bladeRunnerQuotes = [
        "I've seen things you people wouldn't believe.",
        "All those moments will be lost in time, like tears in rain.",
        "It's too bad she won't live! But then again, who does?",
        "Quite an experience to live in fear, isn't it?",
        "I want more life, father."
    ];

    // Fonction pour obtenir une citation aléatoire
    function getRandomQuote() {
        return bladeRunnerQuotes[Math.floor(Math.random() * bladeRunnerQuotes.length)];
    }

    // Bouton "Rebooter le Monde"
    $("#reboot-btn").click(function() {
        $("#jumbotron-text").text(getRandomQuote());
    });

    // Bouton "Acheter un papillon"
    $("#butterfly-btn").click(function() {
        $("#butterflyModal").modal('show');
    });

    // Pagination
    $(".pagination .page-link").click(function(e) {
        e.preventDefault();
        const page = $(this).data('page');
        $("#jumbotron-text").text(`Vous êtes sur la page ${page}`);
    });
});