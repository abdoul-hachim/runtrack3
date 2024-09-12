$(document).ready(function() {
    const $puzzleContainer = $('#puzzle-container');
    const $message = $('#message');
    const $restartButton = $('#restart-button');
    let pieces = [];
    const size = 3;
    const images = ['./assets/img/1.jpg', './assets/img/2.jpg', './assets/img/3.jpg', './assets/img/4.jpg', './assets/img/5.jpg', './assets/img/6.jpg', './assets/img/7.jpg', './assets/img/8.jpg', './assets/img/9.jpg'];

    function createPuzzle() {
        pieces = Array.from({length: size * size}, (_, i) => i);
        shufflePuzzle();
        renderPuzzle();
    }

    function shufflePuzzle() {
        for (let i = pieces.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [pieces[i], pieces[j]] = [pieces[j], pieces[i]];
        }
    }

    function renderPuzzle() {
        $puzzleContainer.empty();
        $.each(pieces, function(index, piece) {
            const $pieceElement = $('<div>').addClass('puzzle-piece');
            if (piece !== 8) {  // 8 est maintenant la case vide
                $pieceElement.css('background-image', `url(${images[piece]})`);
            } else {
                $pieceElement.css('background', 'white');
            }
            $pieceElement.on('click', function() {
                movePiece(index);
            });
            $puzzleContainer.append($pieceElement);
        });
    }

    function movePiece(index) {
        const emptyIndex = pieces.indexOf(8);  // 8 est la case vide
        if (isAdjacent(index, emptyIndex)) {
            [pieces[index], pieces[emptyIndex]] = [pieces[emptyIndex], pieces[index]];
            renderPuzzle();
            if (checkWin()) {
                $message.text("Vous avez gagné").css('color', 'green');
                $restartButton.show();
                $puzzleContainer.css('pointer-events', 'none');
            }
        }
    }

    function isAdjacent(index1, index2) {
        const row1 = Math.floor(index1 / size);
        const col1 = index1 % size;
        const row2 = Math.floor(index2 / size);
        const col2 = index2 % size;
        return Math.abs(row1 - row2) + Math.abs(col1 - col2) === 1;
    }

    function checkWin() {
        return pieces.every((piece, index) => piece === index);
    }

    function restart() {
        $message.text("").css('color', '');
        $restartButton.hide();
        $puzzleContainer.css('pointer-events', 'auto');
        createPuzzle();
    }

    $restartButton.on('click', restart);
    createPuzzle();
});