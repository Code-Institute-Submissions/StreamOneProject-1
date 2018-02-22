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
							 "<b>Your Name:</b> " + $scope.yourName + "<br />" +
							 "<b>Your E-Mail:</b> " + $scope.emailAddress + "<br />" +
							 "<b>Your Telephone:</b> " + $scope.yourTelephone + 
							 "</p>" +
							 "<p><b>Message:</b><br />" +
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
		$scope.dateReg = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;

		// initialise isPostcodeWorking field.
		$scope.isPostcodeWorking = false;

		// submit form function.
		$scope.submitForm = function(isValid) {
			// check to make sure the form is valid
			if (isValid) {
				
				// variables for message.
				var finalQuote, quoteSummary;
				var contactName = $scope.quote.title + " " + $scope.quote.firstName + " " + $scope.quote.surname;
				var address = ($scope.isPostcodeWorking) ? $scope.quote.yourAddress : $scope.quote.freeAddress;

				// produce the quote.
				if ($scope.quote.typeJob == "New Build" || $scope.quote.typeJob == "Extension") {
					// get form values and assign a numerical value.
					var planning = ($scope.quote.planningPermission == "Provide") ? 1000 : 0;
					var drawings = ($scope.quote.archDrawings == "Provide") ? 1000 : 0;

					// calculate cost of square metres.
					var quoteCalc = parseInt($scope.quote.metreSize) * 1250;

					// total the quote and add extra for completion certificate.
					var total = quoteCalc + planning + drawings + 250;

					// format string for use in message.
					finalQuote = "&pound;" + total.toLocaleString('en-GB');

					// quote summary for e-mail message
					quoteSummary = "<b>Number of Stories:</b> " + $scope.quote.storyNumber + "<br />\n" +
								   "<b>Planning Permission:</b> " + $scope.quote.planningPermission + "<br />\n" +
								   "<b>Architectural Drawings:</b> " + $scope.quote.archDrawings + "<br />\n" +
								   "<b>High/Low Spec:</b> " + $scope.quote.highLowSpec + "<br />\n" +
								   "<b>Square Metres:</b> " + $scope.quote.metreSize + "<br />\n";

				} else {
					// set default message
					finalQuote = "Await Callback";
					quoteSummary = "";
				}

				// Start of message string.
				strMessage = "<h3 class='text-center'>Thank you for using our Quote Calculator</h3>\n" +
							 "<p class='text-center'>Craig will be in contact with you soon</p>\n" +
							 "<h4 class='text-center'>Estimated Price for Job*</h2>\n" +
							 "<h2 class='text-center'>" + finalQuote + "</h2>\n" +
							 "<p>* subject to visit and final approval.</p>\n" +
							 "<hr />\n" +
							 "<small>\n" +
							 "<p>Below is a summary of your submission for your records:</p>\n" +
							 "<p>\n" +
							 "<b>Contact Name:</b> " + contactName + "<br />\n" +
							 "<b>Address:</b> " + address + "<br />\n" +
							 "<b>Postcode:</b> " + $scope.quote.postCode + "<br />\n" +
							 "<b>Telephone:</b> " + $scope.quote.telephoneNumber + "<br />\n" +
							 "<b>E-Mail Address:</b> <a href='mailto:" + $scope.quote.emailAddress + "'>" + 
							 	$scope.quote.emailAddress + "</a><br />\n" +
							 "<b>Your Budget:</b> &pound;" + $scope.quote.yourBudget.toLocaleString('en-GB') + "<br />\n" +
							 "<b>Start Date:</b> " + $scope.quote.startDate + "<br />\n" +
							 "<b>Type of Job:</b> " + $scope.quote.typeJob + "<br />\n" +
							 quoteSummary +
							 "</p>\n" +
							 "</small>";


				// bind message to model
				$('#thankYouMessage').html(strMessage);

				// show the quote.
				$('#quote-modal').modal('show');
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