$(document).ready(function() {
    $('#registerForm').on('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(this);
        $.ajax({
            url: 'php/register.php',
            type: 'POST',
            data: formData,
            processData: false,
            contentType: false,
            dataType: 'json',
            success: function(response) {
                if (response.success) {
                    alert(response.message);
                    window.location.href = 'login.html';
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