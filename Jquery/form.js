$(document).ready(function () {
   $("#firstname").on("input", function () {
      var firstname = $('#firstname').val().trim();
      var firstnameError = $("#firstnameError");
      firstnameError.html("");

      if (/\d/.test(firstname)) {
         firstnameError.html("First name cannot contain numbers");
      }
   });

   $("#lastname").on("input", function () {
      var lastname = $('#lastname').val().trim();
      var lastnameError = $("#lastnameError");
      lastnameError.html("");

      if (/\d/.test(lastname)) {
         lastnameError.html("Last name cannot contain numbers");
      }
   });

   $("#mobile").on("input", function () {
      $("#mobileError").html("");
   });

   $("#password").on("input", function () {
      var password = $(this).val();
      var passwordError = $("#passwordError");
      passwordError.html("");
      var uppercaseRegex = /[A-Z]/;
      var lowercaseRegex = /[a-z]/;
      var specialCharRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
      var numberRegex = /\d/;
   });

   $("#email").on("input", function () {
      var email = $('#email').val().trim();
   });

   $("#submitButton").on("click", function () {
      validateForm();
   });

});

function validateForm() {
   var firstname = $("#firstname").val().trim();
   var lastname = $("#lastname").val().trim();
   var address = $("#address").val().trim();
   var mobile = $("#mobile").val().trim();
   var email = $("#email").val().trim();
   var password = $("#password").val().trim();
   var confirmPassword = $("#confirmPassword").val().trim();

   $("#firstnameError, #lastnameError, #addressError, #mobileError, #emailError, #passwordError, #confirmPasswordError").html("");

   var isValid = true;

   if (firstname === "") {
      $("#firstnameError").html("First name is required");
      isValid = false;
   } else if (/^\d+$/.test(firstname)) {
      $("#firstnameError").html("First name cannot contain numbers");
      isValid = false;
   }


   if (lastname === "") {
      $("#lastnameError").html("Last name is required");
      isValid = false;
   } else if (/^\d+$/.test(lastname)) {
      $("#lastnameError").html("Last name cannot contain numbers");
      isValid = false;
   }


   if (address === "") {
      $("#addressError").html("Address is required");
      isValid = false;
   } else if (/^\d+$/.test(address)) {
      $("#addressError").html("Address cannot contain numbers only");
      isValid = false;
   }

   if (!(/^\d{10}$/.test(mobile))) {
      $("#mobileError").html("Invalid mobile number");
      isValid = false;
   }

   if (!(/\S+@\S+\.\S+/.test(email))) {
      $("#emailError").html("Invalid email address");
      isValid = false;
   }

   if (password === "") {
      $("#passwordError").html("Password is required");
      isValid = false;
   }

   if (confirmPassword === "") {
      $("#confirmPasswordError").html("Please confirm your password");
      isValid = false;
   }

   if (password !== confirmPassword) {
      $("#confirmPasswordError").html("Passwords do not match");
      isValid = false;
   }

   if (isValid) {
      var filledDetails = " ";
      $("#formDetails").html(filledDetails);
      alert("Form submitted successfully!");
      window.location.reload();
   }
}