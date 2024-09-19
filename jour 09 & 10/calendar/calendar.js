$(document).ready(function() {
    $('#calendarForm').on('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(this);
        $.ajax({
            url: 'php/calendar.php',
            type: 'POST',
            data: formData,
            processData: false,
            contentType: false,
            success: function(data) {
                $('#message').text(data);
            },
            error: function(error) {
                console.error('Error:', error);
            }
        });
    });
});