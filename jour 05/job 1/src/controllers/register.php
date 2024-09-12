<?php
header('Content-Type: application/json');

require_once '../config/database.php';

$data = json_decode(file_get_contents('php://input'), true);

try {
    // Vérifier si l'email existe déjà
    $stmt = $pdo->prepare("SELECT * FROM utilisateurs WHERE email = ?");
    $stmt->execute([$data['email']]);
    if ($stmt->fetch()) {
        echo json_encode(['success' => false, 'message' => 'Cet email est déjà utilisé.']);
        exit;
    }

    // Insérer le nouvel utilisateur
    $stmt = $pdo->prepare("INSERT INTO utilisateurs (nom, prenom, email, password) VALUES (?, ?, ?, ?)");
    $stmt->execute([
        $data['nom'],
        $data['prenom'],
        $data['email'],
        password_hash($data['password'], PASSWORD_DEFAULT)
    ]);

    echo json_encode(['success' => true]);
} catch (\PDOException $e) {
    echo json_encode(['success' => false, 'message' => $e->getMessage()]);
}