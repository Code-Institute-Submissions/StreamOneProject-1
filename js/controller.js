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

		// regular expression to for form checking.
		$scope.emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		$scope.numberReg = /^[0-9]*$/;
		$scope.postcodeReg = /^(?:[A-Za-z]\d ?\d[A-Za-z]{2})|(?:[A-Za-z][A-Za-z\d]\d ?\d[A-Za-z]{2})|(?:[A-Za-z]{2}\d{2} ?\d[A-Za-z]{2})|(?:[A-Za-z]\d[A-Za-z] ?\d[A-Za-z]{2})|(?:[A-Za-z]{2}\d[A-Za-z] ?\d[A-Za-z]{2})/;

		// initialise isPostcodeWorking field.
		$scope.isPostcodeWorking = "";

		// submit form function.
		$scope.submitForm = function(isValid) {
			// check to make sure the form is valid
			if (isValid) {
				
				console.log($scope);

				// Start of message string.
				strMessage = "<h3>Thank you for using our Quote Calculator</h3>" +
							 "<p>Craig will be in contact with you soon</p>" +
							 "<h2>Estimated Price for Job*</h2>";

				// produce the quote.
				if ($scope.quote.typeJob == "New Build" || $scope.quote.typeJob == "Extension") {
					var planning = ($scope.quote.planningPermission == "Provide") ? 1000 : 0;
					var drawings = ($scope.quote.archDrawings == "Provide") ? 1000 : 0;
					var quoteCalc = parseInt($scope.quote.metreSize) * 1250;

					var finalQuote = quoteCalc + planning + drawings + 250;

					$('#finalQuote').html(finalQuote);
				}

				// end of message string.
				strMessage = strMessage + "<p>* subject to visit and final approval</p>";
			}
		};

		// function to lookup a postcode using an api and return a list of addresses.
		function getAddress() {
			
			// get the postcode from the form and remove any spaces.
			var postcode = $scope.quote.postCode.replace(" ", "");

			// call the api service and preform the lookup.
			APIService.lookupPostcode(postcode).then(function(results) {
				// set isPostcodeWorking to true to show the dropdown field.
				$scope.isPostcodeWorking = true;

				// save results to a variable.
				$scope.addresses = results.data;
				
				// for testing, log results in console.
				console.log($scope.addresses);

			}).catch(function(err) {
				// set isPostcodeWorking to false to show the manual entry field.
				$scope.isPostcodeWorking = false;

				// alert the user that an error occurred.
				alert("There was a problem with your request. The following error occurred:\n\n" + 
					err.data.message + "\n\nPlease enter your address manually in the field provided");

				// log error in the console.
				console.log(err);
			});
		};

		// postcode lookup button function.
		$scope.findPostCode = function() {
			// lookup postcode.
			getAddress();
		};
	});