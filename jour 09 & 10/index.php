<?php
session_start();
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Accueil</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="styles/styles.css">
</head>
<body>
    <div class="container">
        <h1 class="mt-5">Bienvenue à La Plateforme_</h1>
        <nav class="mt-3">
            <ul class="nav nav-pills">
                <?php if (!isset($_SESSION['user_id'])): ?>
                    <li class="nav-item"><a class="nav-link" href="register.html">Inscription</a></li>
                    <li class="nav-item"><a class="nav-link" href="login.html">Connexion</a></li>
                <?php else: ?>
                    <li class="nav-item"><a class="nav-link" href="calendar.html">Calendrier</a></li>
                    <?php if ($_SESSION['role'] == 'moderator'): ?>
                        <li class="nav-item"><a class="nav-link" href="backoffice.html">Backoffice</a></li>
                    <?php endif; ?>
                    <?php if ($_SESSION['role'] == 'admin'): ?>
                        <li class="nav-item"><a class="nav-link" href="admin.html">Gestion des droits</a></li>
                    <?php endif; ?>
                    <li class="nav-item"><a class="nav-link" href="php/logout.php">Déconnexion</a></li>
                <?php endif; ?>
            </ul>
        </nav>
    </div>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
</body>
</html>