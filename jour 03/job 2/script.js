document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('rainbowContainer');
    const shuffleButton = document.getElementById('shuffleButton');
    const message = document.getElementById('message');
    let isDragging = false;
    let draggedElement = null;

    function shuffle() {
        for (let i = container.children.length; i >= 0; i--) {
            container.appendChild(container.children[Math.random() * i | 0]);
        }
        checkOrder();
    }

    function checkOrder() {
        const images = container.getElementsByTagName('img');
        let isCorrect = true;
        for (let i = 0; i < images.length; i++) {
            if (parseInt(images[i].dataset.order) !== i + 1) {
                isCorrect = false;
                break;
            }
        }
        message.textContent = isCorrect ? "Vous avez gagné" : "Vous avez perdu";
        message.style.color = isCorrect ? "green" : "red";
    }

    shuffleButton.addEventListener('click', shuffle);

    container.addEventListener('dragstart', function(e) {
        isDragging = true;
        draggedElement = e.target;
        e.dataTransfer.setData('text/plain', ''); // Nécessaire pour Firefox
    });

    container.addEventListener('dragover', function(e) {
        e.preventDefault();
    });

    container.addEventListener('drop', function(e) {
        e.preventDefault();
        if (isDragging && e.target !== draggedElement) {
            const rect = e.target.getBoundingClientRect();
            const middleX = rect.left + rect.width / 2;
            if (e.clientX < middleX) {
                container.insertBefore(draggedElement, e.target);
            } else {
                container.insertBefore(draggedElement, e.target.nextSibling);
            }
            isDragging = false;
            checkOrder();
        }
    });
});