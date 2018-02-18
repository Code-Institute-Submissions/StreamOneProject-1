// begin the angular app CEdneyBuilders.
angular.module('CEdneyBuilders', ['ngRoute', 'RouteControllers', 'ngMessages'])

// create configurations for the app.
.config(function($locationProvider, $routeProvider) {
	$locationProvider.html5Mode(true); // enable href routing without hashes

	// set up routing to the various pages of the website.
	// home page route.
	$routeProvider.when('/', {
		templateUrl: 'templates/home.html',
		controller: 'HomeController'
	})

	// about us page route.
	.when('/about/', {
		templateUrl: 'templates/about.html',
		controller: 'AboutController'
	})

	// portfolio page route.
	.when('/portfolio/', {
		templateUrl: 'templates/portfolio.html',
		controller: 'PortfolioController'
	})

	// services page route.
	.when('/services/', {
		templateUrl: 'templates/services.html',
		controller: 'ServicesController'
	})

	// contact us page route.
	.when('/contact/', {
		templateUrl: 'templates/contact.html',
		controller: 'ContactController'
	})

	// quote calculator route.
	.when('/quote/', {
		templateUrl: 'templates/quote.html',
		controller: 'QuoteController'
	})

	// otherwise, redirect to the home page.
	.otherwise({ redirectTo: '/'});
});