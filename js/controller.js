angular.module('RouteControllers', [])
	
	// home page controller.
	.controller('HomeController', function($scope) {

	})

	// about us controller.
	.controller('AboutController', function($scope) {

	})

	// portfolio controller.
	.controller('PortfolioController', function($scope) {

	})

	// services controller.
	.controller('ServicesController', function($scope) {

	})

	// contact us controller.
	.controller('ContactController', function($scope) {
		$scope.emailRegex = '/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/';

	    // count the characters in the message field.
		$('#your-message').keyup(function () {
			// set max character count
			var max = 500;
			var charBox = $('#charNum');

			// get length
			var len = $(this).val().length;

			// if length is greater than or equal to max
			if (len >= max) {
				charBox.text('500/' + len);

				// check if 'text-danger' class has been added, if not, add it.
				if (charBox.hasClass('text-danger') == false) {
					charBox.addClass('text-danger');
				}
			} else {
				charBox.text(len + '/500');
				// check if 'has-error' class has been added, if so, remove it.
				if (charBox.hasClass('text-danger')) {
					charBox.removeClass('text-danger');
				}
			}
		});

		$scope.submitForm = function(isValid) {
			// check to make sure form is valid
			if (isValid) {
				// message to show in thankyou box.
				strMessage = "<p>Thank you for getting in contact with us, below is a copy of your message<br />" +
							 "<strong>Your Name:</strong> " + $scope.yourName + "<br />" +
							 "<strong>Your E-Mail:</strong> " + $scope.emailAddress + "<br />" +
							 "<strong>Your Telephone:</strong> " + $scope.yourTelephone + 
							 "</p>" +
							 "<p><strong>Message:</strong><br />" +
							 $scope.yourMessage.replace('\n', '<br />') + 
							 "</p>" +
							 "<p>Your message has been e-mailed to us and we respond within 48 hours.</p>";

				// set thank you message to modal.
				$('#thankYouMessage').html(strMessage);

				// show the modal.
				$('#contact-modal').modal('show');
			}
		};
	})

	// quote calculator controller.
	.controller('QuoteController', function($scope) {

	});