$(document).ready(function() {
    $.ajax({
        url: 'php/backoffice.php',
        type: 'GET',
        success: function(data) {
            const requests = JSON.parse(data);
            const tableBody = $('#requestsTable tbody');
            requests.forEach(request => {
                const row = $('<tr></tr>');
                row.append(`<td>${request.user_id}</td>`);
                row.append(`<td>${request.date}</td>`);
                const actionCell = $('<td></td>');
                actionCell.html(`
                    <form method="post" action="php/backoffice.php">
                        <input type="hidden" name="request_id" value="${request.id}">
                        <button type="submit" name="action" value="approve" class="btn btn-success">Accepter</button>
                        <button type="submit" name="action" value="reject" class="btn btn-danger">Refuser</button>
                    </form>
                `);
                row.append(actionCell);
                tableBody.append(row);
            });
        },
        error: function(error) {
            console.error('Error:', error);
        }
    });
});