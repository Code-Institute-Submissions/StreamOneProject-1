angular.module('RouteControllers', [])
	
	// home page controller.
	.controller('HomeController', function($scope, $rootScope) {
		// Set Page Title.
		$rootScope.pageTitle = "Welcome to C Edney Builders";
	})

	// about us controller.
	.controller('AboutController', function($scope, $rootScope) {
		// Set Page Title.
		$rootScope.pageTitle = "About Us | Meet the Team | C Edney Builders";
	})

	// portfolio controller.
	.controller('PortfolioController', function($scope, $rootScope) {
		// Set Page Title.
		$rootScope.pageTitle = "Portfolio | See Some of our Work | C Edney Builders";
	})

	// services controller.
	.controller('ServicesController', function($scope, $rootScope) {
		// Set Page Title.
		$rootScope.pageTitle = "Our Services | What we Offer | C Edney Builders";
	})

	// contact us controller.
	.controller('ContactController', function($scope, $rootScope) {
		// Set Page Title.
		$rootScope.pageTitle = "Contact Us | Find Us | C Edney Builders";

		// regular expression to check e-mail field against.
		$scope.emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

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
				// message to show in thank you box.
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
	.controller('QuoteController', function($scope, $rootScope, APIService) {
		// set page title.
		$rootScope.pageTitle = "Quote Calculator | Get a Free, No Obligation Quote | C Edney Builders";
	});