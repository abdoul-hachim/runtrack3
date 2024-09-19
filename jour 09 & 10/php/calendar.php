<?php
session_start();
require 'db.php';

if (!isset($_SESSION['user_id'])) {
    header("Location: ../login.html");
    exit();
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $date = $_POST['date'];
    $user_id = $_SESSION['user_id'];

    if (strtotime($date) > time()) {
        $stmt = $pdo->prepare("INSERT INTO presence_requests (user_id, date) VALUES (?, ?)");
        $stmt->execute([$user_id, $date]);

        echo "Demande envoyée!";
    } else {
        echo "Vous ne pouvez pas demander une autorisation pour une date passée.";
    }
}
?>