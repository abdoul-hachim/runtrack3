<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

session_start();
require_once 'db.php';

function isValidEmailDomain($email) {
    $allowedDomain = 'laplateforme.io';
    $emailDomain = substr(strrchr($email, "@"), 1);
    return $emailDomain === $allowedDomain;
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $password = $_POST['password'];

    if (isValidEmailDomain($email)) {
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

        try {
            $stmt = $pdo->prepare("INSERT INTO users (email, password) VALUES (?, ?)");
            $stmt->execute([$email, $hashedPassword]);
            echo json_encode(["success" => true, "message" => "Inscription réussie!"]);
        } catch (PDOException $e) {
            echo json_encode(["success" => false, "message" => "Erreur d'inscription : " . $e->getMessage()]);
        }
    } else {
        echo json_encode(["success" => false, "message" => "Adresse email non valide."]);
    }
}
?>