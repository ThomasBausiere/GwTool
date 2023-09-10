<?php
// Démarrez la session en premier
session_start();

// Active la sortie d'erreur pour le débogage
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Inclut le fichier de configuration de la base de données
require 'config.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Utilisation de requêtes préparées
    $stmt = $conn->prepare("SELECT password FROM utilisateurs WHERE username = ?");
    $stmt->bind_param("s", $username);

    $stmt->execute();
    $result = $stmt->get_result();
    $user = $result->fetch_assoc();
    
    // Ajoute la vérification pour $user avant de vérifier le mot de passe
    if ($user && password_verify($password, $user['password'])) {
        $_SESSION['username'] = $username;
        echo "Connexion réussie !";
        // header("Location: index.php");  // Redirection vers la page index.php
        // exit();
    } else {
        echo "Erreur lors de la connexion.";
    }

    $stmt->close();
    $conn->close();
}
?>