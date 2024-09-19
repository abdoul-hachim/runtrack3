$(document).ready(function() {
    $.ajax({
        url: 'php/admin.php',
        type: 'GET',
        success: function(data) {
            const users = JSON.parse(data);
            const tableBody = $('#usersTable tbody');
            users.forEach(user => {
                const row = $('<tr></tr>');
                row.append(`<td>${user.email}</td>`);
                row.append(`<td>${user.role}</td>`);
                const actionCell = $('<td></td>');
                actionCell.html(`
                    <form method="post" action="php/admin.php">
                        <input type="hidden" name="user_id" value="${user.id}">
                        <select name="role" class="form-control">
                            <option value="user" ${user.role == 'user' ? 'selected' : ''}>Utilisateur</option>
                            <option value="moderator" ${user.role == 'moderator' ? 'selected' : ''}>Modérateur</option>
                            <option value="admin" ${user.role == 'admin' ? 'selected' : ''}>Administrateur</option>
                        </select>
                        <button type="submit" class="btn btn-primary mt-2">Mettre à jour</button>
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