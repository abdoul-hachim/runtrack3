<?php
session_start();
header('Content-Type: application/json');

require_once '../config/database.php';

$data = json_decode(file_get_contents('php://input'), true);

try {
    $stmt = $pdo->prepare("SELECT * FROM utilisateurs WHERE email = ?");
    $stmt->execute([$data['email']]);
    $user = $stmt->fetch();

    if ($user && password_verify($data['password'], $user['password'])) {
        $_SESSION['user_id'] = $user['id'];
        $_SESSION['user_prenom'] = $user['prenom'];
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false, 'message' => 'Email ou mot de passe incorrect.']);
    }
} catch (\PDOException $e) {
    echo json_encode(['success' => false, 'message' => $e->getMessage()]);
}