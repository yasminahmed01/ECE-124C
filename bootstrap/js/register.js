$('form').submit(function(event) {

	var firstName = $("#firstName");
	var lastName = $("#lastName");
	var email = $("#email");
	var phone = $("#phone");
	var address = $("#address");
	var password = $("#password")
	var vpassword = $("#vpassword")
	

	function ValidateEmail(inputText) {
		var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if(inputText.val().match(mailformat)) {
			return true;
		}
	}


	function ValidatePhone(inputText) {
		var phoneformat = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
		if(inputText.val().match(phoneformat)) {
			return true;
		}else{
			return false;
		}
	}

	function initialIsCapital(word){
  		return word[0] !== word[0].toLowerCase();
	}


	function ValidatePassword(inputText) {
		var error = $("#passError");
		var numberformat = '';
		var charformat = '';
		var pass = inputText.val();

		function hasWhiteSpace(s) {
  			return s.indexOf(' ') >= 0;
		}

		function checkSpecial(s){
			var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

			return format.test(s)
		}


		if (!initialIsCapital(pass)) {
			error.html("Password must start with capital letter\n").removeClass("invalid-feedback").addClass('text-danger');
		}else if(pass.length !== 8){
			error.html("Password must contain exactly 8 chars\n").removeClass("invalid-feedback").addClass('text-danger');
		}else if(!/\d/.test(pass)){
			error.html("Password must contain at least 1 digit\n").removeClass("invalid-feedback").addClass('text-danger');
		}else if(hasWhiteSpace(pass)){
			error.html("Password must not contain white spaces\n").removeClass("invalid-feedback").addClass('text-danger');
		}else if(!checkSpecial(pass)){
			error.html("Password must not at least one special char _ - & # *\n").removeClass("invalid-feedback").addClass('text-danger');
		}else{
			$("#register").html('<div class="row alert alert-primary" role="alert"><h4 class="alert-heading">Thank you for registeration ... back to <a href="index.html">Home</a></h4></div>')
			$("#footer").remove();
		}


	}

		
	console.log(firstName.value);


	if ( !firstName.val() ) {
		firstName.next().removeClass("invalid-feedback").addClass('text-danger');
	}else{
		firstName.next().addClass("invalid-feedback");
	}

	if ( !lastName.val() ) {
		lastName.next().removeClass("invalid-feedback").addClass('text-danger');
	}else{
		lastName.next().addClass("invalid-feedback");
	}

	if ( !ValidateEmail(email) ) {
		email.next().removeClass("invalid-feedback").addClass('text-danger');
	}else{
		email.next().addClass("invalid-feedback");
	}

	if ( !ValidatePhone(phone) ) {
		phone.next().removeClass("invalid-feedback").addClass('text-danger');
	}else{
		phone.next().addClass("invalid-feedback");
	}

	if ( !address.val() ) {
		address.next().removeClass("invalid-feedback").addClass('text-danger');
	}else{
		address.next().addClass("invalid-feedback");
	}


	if ( !gender ) {
		$("#gen").next().removeClass("invalid-feedback").addClass('text-danger');
	}else{
		$("#gen").next().addClass("invalid-feedback");
	}


	if ( !password.val() ) {
		password.next().html("Password is required.").removeClass("invalid-feedback").addClass('text-danger');
	}else{
		password.next().addClass('invalid-feedback');
		ValidatePassword(password);

	}

	event.preventDefault();
});


var male = $("#male");
var female = $("#female");
male.prop('checked', false);
female.prop('checked', false);
var gender;

male.click(function(){
	male.prop('checked', true);
	female.prop('checked', false);
	gender = "male";
});

female.click(function(){
	female.prop('checked', true);
	male.prop('checked', false);
	gender = "female";
});

