$(document).ready(function() {
    $("form").on("submit", function(event) {
        event.preventDefault(); // Empêche la soumission du formulaire standard

        var username = $("#username").val();
        var email = $("#email").val();
        var password = $("#password").val();

        $.ajax({
            url: "php/register.php", // URL du script PHP
            type: "POST", // Méthode HTTP
            data: { // Données à envoyer
                username: username,
                email: email,
                password: password
            },
            success: function(response) {
                // Vous pouvez adapter cette partie en fonction de la réponse du serveur
                if (response === "Inscription réussie") {
                    $("#message").html("<span style='color: green;'>"+response+"</span>");
                    window.location.href = "php/index.php"; // Redirige vers index.php
                } else {
                    $("#message").html("<span style='color: red;'>"+response+"</span>");
                }
            },
            error: function() {
                $("#message").html("<span style='color: red;'>Erreur lors de la requête AJAX</span>");
            }
        });
    });
});
