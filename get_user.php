<?php
header('Content-Type: application/json');

// Configuration de la base de données
$servername = "localhost";
$username = "Geremy"; // Remplacez par votre nom d'utilisateur
$password = "Geremy@2006"; // Remplacez par votre mot de passe
$dbname = "user";

// Connexion à la base de données
$conn = new mysqli($servername, $username, $password, $dbname);

// Vérifier la connexion
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Récupérer le nom de l'utilisateur
$name = $_GET['name'];

// Requête SQL pour récupérer les données de l'utilisateur
$sql = "SELECT * FROM users WHERE name = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $name);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    $user = $result->fetch_assoc();
    echo json_encode($user);
} else {
    echo json_encode(['message' => 'Utilisateur non trouvé']);
}

$stmt->close();
$conn->close();
