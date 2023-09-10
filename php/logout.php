<?php
session_start(); // Démarrage de la session
session_destroy(); // Destruction de toutes les données de session
header("Location: ../login.html"); // Redirection vers la page de connexion
exit();
?>