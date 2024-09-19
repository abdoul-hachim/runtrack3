$(document).ready(function() {
    $('#loginForm').on('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(this);
        $.ajax({
            url: 'php/login.php',
            type: 'POST',
            data: formData,
            processData: false,
            contentType: false,
            dataType: 'json',
            success: function(response) {
                if (response.success) {
                    window.location.href = 'index.php';
                } else {
                    $('#message').html(response.message);
                }
            },
            error: function(xhr, status, error) {
                $('#message').html("Erreur : " + error);
            }
        });
    });
});