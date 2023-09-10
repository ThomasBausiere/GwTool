<?php
// Démarrage de la session
session_start();

// Vérification de l'état de la connexion de l'utilisateur
if (!isset($_SESSION['username'])) {
    // Si l'utilisateur n'est pas connecté, le rediriger vers la page de connexion
    header("Location: ../login.html");
    exit();
}

$username = $_SESSION['username'];  // Récupère le nom d'utilisateur depuis la session
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Firwan Tools</title>
    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="../css/style3.css">

</head>
<body>
  
  <nav class="menu">
    <!-- Ajout d'un message de bienvenue -->
    <ul id="menuList">
      <li class="selected"><a href="#" data-content="content1">Jeu</a></li>
      <li class="nearly-selected"><a href="#" data-content="content2">Personnages</a></li>
      <li class="not-selected"><a href="#" data-content="content3">Sites</a></li>
    </ul>
  </nav>

  <div id="content" class="content">
    <!-- Le contenu sera injecté ici -->
  </div>

  <nav class="bottommenu">
  

  <button class="button-57" role="button" id="logoutButton" onclick="location.href='logout.php';">
  <span class="text">Se déconnecter</span>
  <span>Direction => login</span>
</button>


  <button class="button-57" role="button" id="onoffbtn">
    <span class="text">Fonds d'écran</span>
    <span id="onoffspan">Carrousel</span>
</button>

<button class="button-57" role="button">
    <span class="text">Nouvelle page</span>
    <span>Work in progress...</span>
</button>
  </nav>

  <script src="../javascript/script.js"></script>
  <script src="../javascript/script2.js"></script>

</body>
</html>