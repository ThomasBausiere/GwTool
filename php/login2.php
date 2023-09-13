<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Connexion</title>
    <script src="https://www.google.com/recaptcha/api.js" async defer></script>  <!-- Script de reCAPTCHA -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <link rel="stylesheet" type="text/css" href="css/style2.css">
</head>
<body>
<div class="center-container">
    <h2>Connexion</h2>
    <form action="php/login.php" method="post">
        <input type="hidden" name="csrf_token" value="<?php echo $_SESSION['csrf_token']; ?>">  <!-- Token CSRF -->
        <div class="content">
            <label for="username">Nom d'utilisateur :</label>
            <input type="text" id="username" name="username" required>
        </div>
        <div class="content">
            <label for="password">Mot de passe :</label>
            <input type="password" id="password" name="password" required>
        </div>
        <?php if ($_SESSION['login_attempts'] > 4): ?>  <!-- Affiche le CAPTCHA après 4 tentatives -->
        <div class="g-recaptcha" data-sitekey="6LeVZCAoAAAAADLSnS3LWuOBjCqBRUhcJCr4Xdeo"></div>
        <?php endif; ?>
        <div class="content">
            <input type="submit" value="Se connecter">
            <a href="register.html">Inscription</a>
        </div>
        <div id="message"></div>
    </form>
</div>
  <script src="javascript/login_ajax.js"></script>
</body>
</html>
