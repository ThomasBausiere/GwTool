<?php
// Active la sortie d'erreur pour le débogage
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Inclut le fichier de configuration de la base de données
require 'config.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $password_hashed = password_hash($password, PASSWORD_DEFAULT);

    // Vérifier si l'email ou le nom d'utilisateur est déjà utilisé
    $stmt = $conn->prepare("SELECT * FROM utilisateurs WHERE email = ? OR username = ?");
    $stmt->bind_param("ss", $email, $username);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $existingUser = $result->fetch_assoc();
        if ($existingUser['email'] === $email) {
            echo "Cet email est déjà utilisé.";
            exit();
        } 
        if ($existingUser['username'] === $username) {
            echo "Ce nom d'utilisateur est déjà utilisé.";
            exit();
        }
    } else {
        // Utilisation de requêtes préparées pour l'insertion
        $stmt = $conn->prepare("INSERT INTO utilisateurs (username, email, password) VALUES (?, ?, ?)");
        $stmt->bind_param("sss", $username, $email, $password_hashed);
        $stmt->execute();
        echo "Inscription réussie";
        // Note : La redirection sera gérée par le code JavaScript
    }

    $stmt->close();
    $conn->close();
}
?>