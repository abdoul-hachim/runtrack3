document.addEventListener('DOMContentLoaded', function() {
    const filterForm = document.getElementById('filterForm');
    const filtrerButton = document.getElementById('filtrer');
    const resultatsDiv = document.getElementById('resultats');
    const typeSelect = document.getElementById('type');

    // Charger les données et remplir le select des types
    fetch('pokemon.json')
        .then(response => response.json())
        .then(data => {
            const types = [...new Set(data.map(pokemon => pokemon.type))];
            types.forEach(type => {
                const option = document.createElement('option');
                option.value = type;
                option.textContent = type;
                typeSelect.appendChild(option);
            });
        })
        .catch(error => console.error('Erreur lors du chargement des données:', error));

    filtrerButton.addEventListener('click', function() {
        const id = document.getElementById('id').value;
        const nom = document.getElementById('nom').value.toLowerCase();
        const type = document.getElementById('type').value;

        fetch('pokemon.json')
            .then(response => response.json())
            .then(data => {
                const filteredData = data.filter(pokemon => {
                    return (id === '' || pokemon.id.toString() === id) &&
                           (nom === '' || pokemon.name.french.toLowerCase().includes(nom)) &&
                           (type === '' || pokemon.type.includes(type));
                });

                displayResults(filteredData);
            })
            .catch(error => {
                console.error('Erreur lors du filtrage des données:', error);
                resultatsDiv.innerHTML = '<p>Erreur lors du chargement des données.</p>';
            });
    });

    function displayResults(results) {
        let html = '<h2>Résultats :</h2>';
        if (results.length === 0) {
            html += '<p>Aucun Pokémon trouvé.</p>';
        } else {
            html += '<ul>';
            results.forEach(pokemon => {
                html += `<li>ID: ${pokemon.id}, Nom: ${pokemon.name.french}, Type: ${pokemon.type.join(', ')}</li>`;
            });
            html += '</ul>';
        }
        resultatsDiv.innerHTML = html;
    }
});