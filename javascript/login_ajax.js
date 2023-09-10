$(document).ready(function() {
    $("form").on("submit", function(event) {
      event.preventDefault(); // Empêche la soumission du formulaire standard
  
      var username = $("#username").val();
      var password = $("#password").val();
  
      $.ajax({
        url: "php/login.php", // URL du script PHP
        type: "POST", // Méthode HTTP
        data: { // Données à envoyer
          username: username,
          password: password
        },
        success: function(response) {
            var cleanedResponse = response.trim();
            if (cleanedResponse === "Connexion réussie !") {
                $("#message").html("<span style='color: green;'>"+cleanedResponse+"</span>");
                window.location.href = "php/index.php"; 
            } else {
                $("#message").html("<span style='color: red;'>"+cleanedResponse+"</span>");
            }
        },
        
        error: function() {
          $("#message").html("<span style='color: red;'>Erreur lors de la requête AJAX</span>");
        }
      });
    });
  });
  