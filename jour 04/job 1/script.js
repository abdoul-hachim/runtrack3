document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('button');
    const expressionContainer = document.getElementById('expression-container');

    button.addEventListener('click', function() {
        fetch('expression.txt')
            .then(response => response.text())
            .then(data => {
                const paragraph = document.createElement('p');
                paragraph.textContent = data;
                expressionContainer.innerHTML = '';
                expressionContainer.appendChild(paragraph);
            })
            .catch(error => {
                console.error('Erreur:', error);
                expressionContainer.textContent = 'Une erreur est survenue lors du chargement de l\'expression.';
            });
    });
});