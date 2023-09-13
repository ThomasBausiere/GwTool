<?php
// Démarrez la session en premier
session_start();

// Initialisation du compteur de tentatives de connexion
if (!isset($_SESSION['login_attempts'])) {
    $_SESSION['login_attempts'] = 0;
}

// Active la sortie d'erreur pour le débogage
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Inclut le fichier de configuration de la base de données
require 'config.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Vérification du token CSRF
    if (isset($_POST['csrf_token']) && $_POST['csrf_token'] === $_SESSION['csrf_token']) {

        // Vérification du CAPTCHA si nécessaire
        if ($_SESSION['login_attempts'] > 4) {
            $recaptchaSecret = '6LeVZCAoAAAAAOz3mt6mOUItSc_-A93vkHzEDznx';
            $recaptchaResponse = $_POST['g-recaptcha-response'];

            $response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$recaptchaSecret&response=$recaptchaResponse");
            $keys = json_decode($response, true);
            
            if (intval($keys["success"]) !== 1) {
                echo "Veuillez compléter le CAPTCHA.";
                exit();
            }
        }

        // Le reste de votre code de vérification de connexion
        $username = $_POST['username'];
        $password = $_POST['password'];

        $stmt = $conn->prepare("SELECT password FROM utilisateurs WHERE username = ?");
        $stmt->bind_param("s", $username);

        $stmt->execute();
        $result = $stmt->get_result();
        $user = $result->fetch_assoc();
        
        if ($user && password_verify($password, $user['password'])) {
            $_SESSION['username'] = $username;
            $_SESSION['login_attempts'] = 0;  // Réinitialisation du compteur de tentatives
            echo "Connexion réussie !";
            // Redirection vers la page index.php
        } else {
            $_SESSION['login_attempts']++;  // Augmentation du compteur de tentatives
            echo "Erreur lors de la connexion.";
        }

        $stmt->close();
        $conn->close();
    } else {
        echo "Erreur de token CSRF.";
    }
}
?>
