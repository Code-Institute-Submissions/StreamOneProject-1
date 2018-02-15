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
		$scope.submitForm = function(isValid) {
			// check to make sure form is valid
			if (isValid) {
				alert('Do something here');
			}
		};
	})

	// quote calculator controller.
	.controller('QuoteController', function($scope) {

	});