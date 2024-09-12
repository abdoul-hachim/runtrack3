<?php
$host = 'localhost';
$db   = 'utilisateurs';
$user = 'root';  // Remplacez par votre nom d'utilisateur MySQL si différent
$pass = '';      // Remplacez par votre mot de passe MySQL si vous en avez un
$charset = 'utf8mb4';

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];

try {
    $pdo = new PDO($dsn, $user, $pass, $options);

    // Préparez la requête d'insertion
    $stmt = $pdo->prepare("INSERT INTO utilisateurs (nom, prenom, email) VALUES (:nom, :prenom, :email)");

    // Exécutez la requête avec les valeurs
    $stmt->execute([
        ':nom' => 'Dupont',
        ':prenom' => 'Jean',
        ':email' => 'jean.dupont@example.com'
    ]);

    echo "Nouvel utilisateur inséré avec succès. ID: " . $pdo->lastInsertId();

} catch (\PDOException $e) {
    throw new \PDOException($e->getMessage(), (int)$e->getCode());
}