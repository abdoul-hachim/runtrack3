<?php
session_start();
header('Content-Type: application/json');

if (isset($_SESSION['user_id']) && isset($_SESSION['user_prenom'])) {
    echo json_encode([
        'logged_in' => true,
        'prenom' => $_SESSION['user_prenom']
    ]);
} else {
    echo json_encode(['logged_in' => false]);
}