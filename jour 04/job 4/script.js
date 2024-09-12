function updateTable() {
    fetch('users.php')
        .then(response => response.json())
        .then(data => {
            const tbody = document.querySelector('#usersTable tbody');
            tbody.innerHTML = '';
            data.forEach(user => {
                const row = `<tr>
                    <td>${user.id}</td>
                    <td>${user.nom}</td>
                    <td>${user.prenom}</td>
                    <td>${user.email}</td>
                </tr>`;
                tbody.innerHTML += row;
            });
        })
        .catch(error => console.error('Erreur:', error));
}

document.getElementById('update').addEventListener('click', updateTable);

// Charger les données au chargement initial de la page
updateTable();