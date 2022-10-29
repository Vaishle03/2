var nameof = document.getElementById("name");
var email = document.getElementById("email");
var password = document.getElementById("password");
var cpassword = document.getElementById("cpassword");
var lowerCaseLetters = /[a-z]/g;
var upperCaseLetters = /[A-Z]/g;
var numbers = /[0-9]/g;
var special = /[!@#$&*%^]/g;




nameof.addEventListener("input", function () {
	if (nameof.value.length >=3 && nameof.value.length <=25) {
	  nameof.setCustomValidity("");
	} else {
	  nameof.setCustomValidity("Name must be between 3 and 25 characters");
	}
  });





email.addEventListener("input", function () {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("Expecting an e-mail address");
  } else {
    email.setCustomValidity("");
  }
});





password.addEventListener("input", function () {
	if (password.value.length>=8 && password.value.match(lowerCaseLetters) && password.value.match(upperCaseLetters) &&  password.value.match(numbers) && password.value.match(special)) {
	  password.setCustomValidity("");
	} else {
	  password.setCustomValidity("The password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase character, 1 number, and 1 special character!");
	}
	
  });

  



cpassword.addEventListener("input", function () {
	if (password.value==cpassword.value) {
	  cpassword.setCustomValidity("");
	} else {
	  cpassword.setCustomValidity("Enter password correctly");
	}
  });
 

