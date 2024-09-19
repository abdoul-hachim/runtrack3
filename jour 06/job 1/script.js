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

    // Liste groupée
    $("#list-group .list-group-item").click(function() {
        $("#list-group .list-group-item").removeClass("active");
        $(this).addClass("active");
    });

    // Progress bar
    $("#progress-increase").click(function() {
        let progressBar = $(".progress-bar");
        let currentWidth = parseInt(progressBar.attr("aria-valuenow"));
        if (currentWidth < 100) {
            currentWidth += 10;
            progressBar.css("width", currentWidth + "%").attr("aria-valuenow", currentWidth);
        }
    });

    $("#progress-decrease").click(function() {
        let progressBar = $(".progress-bar");
        let currentWidth = parseInt(progressBar.attr("aria-valuenow"));
        if (currentWidth > 0) {
            currentWidth -= 10;
            progressBar.css("width", currentWidth + "%").attr("aria-valuenow", currentWidth);
        }
    });

    // Récapitulatif des informations
    let keysPressed = [];
    $(document).keydown(function(e) {
        keysPressed.push(e.key.toUpperCase());
        if (keysPressed.join('').includes('DGC')) {
            keysPressed = [];
            let info = `
                <p>Login: ${$("#login").val()}</p>
                <p>Mot de Passe: ${$("#password").val()}</p>
                <p>URL des internets 2 et 2.1 Beta: ${$("#url").val()}</p>
                <p>DogeCoin: ${$("#dogecoin").val()}</p>
                <p>URL2: ${$("#url2").val()}</p>
            `;
            $("#infoModalBody").html(info);
            $("#infoModal").modal('show');
        }
    });

    // Validation du formulaire
    $("#form-right").submit(function(e) {
        e.preventDefault();
        let email = $("#email").val();
        let password = $("#password2").val();
        if (email && password) {
            let colors = ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"];
            let randomColor = colors[Math.floor(Math.random() * colors.length)];
            $("#reboot-btn").removeClass().addClass(`btn btn-${randomColor}`);
        }
    });
});