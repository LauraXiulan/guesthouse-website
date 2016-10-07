/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}


$('#contact-form').bootstrapValidator({
//        live: 'disabled',
message: 'This value is not valid',
feedbackIcons: {
	valid: 'glyphicon glyphicon-ok',
	invalid: 'glyphicon glyphicon-remove',
	validating: 'glyphicon glyphicon-refresh'
},
fields: {
	Name: {
		validators: {
			notEmpty: {
				message: 'The Name is required and cannot be empty'
			}
		}
	},
	email: {
		validators: {
			notEmpty: {
				message: 'The email address is required'
			},
			emailAddress: {
				message: 'The email address is not valid'
			}
		}
	},
	Message: {
		validators: {
			notEmpty: {
				message: 'The Message is required and cannot be empty'
			}
		}
	}
}
}); 