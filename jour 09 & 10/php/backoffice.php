<?php
session_start();
require 'db.php';

if (!isset($_SESSION['user_id']) || $_SESSION['role'] != 'moderator') {
    header("Location: ../login.html");
    exit();
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $request_id = $_POST['request_id'];
    $action = $_POST['action'];

    $stmt = $pdo->prepare("UPDATE presence_requests SET status = ? WHERE id = ?");
    $stmt->execute([$action == 'approve' ? 'approved' : 'rejected', $request_id]);

    header("Location: ../backoffice.html");
    exit();
}

$stmt = $pdo->query("SELECT * FROM presence_requests");
$requests = $stmt->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($requests);
?>