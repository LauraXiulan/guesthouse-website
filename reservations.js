// ----------- reservation form ----------//
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



//reservation form 2

(function($){
	function floatLabel(inputType){
		$(inputType).each(function(){
			var $this = $(this);
			// on focus add cladd active to label
			$this.focus(function(){
				$this.next().addClass("active");
			});
			//on blur check field and remove class if needed
			$this.blur(function(){
				if($this.val() === '' || $this.val() === 'blank'){
					$this.next().removeClass();
				}
			});
		});
	}
	// just add a class of "floatLabel to the input field!"
	floatLabel(".floatLabel");
})(jQuery);