// begin the angular app CEdneyBuilders.
angular.module('CEdneyBuilders', ['ngRoute', 'RouteControllers']);

// create configurations for the app.
angular.module('CEdneyBuilders').config(function($locationProvider, $routeProvider) {
	$locationProvider.html5Mode(true); // enable href routing without hashes

	// set up routing to the various pages of the website.
	// home page route.
	$routeProvider.when('/', {
		templateUrl: 'templates/home.html',
		controller: 'HomeController'
	})
	.when('/about/', {
		templateUrl: 'templates/about.html',
		controller: 'AboutController'
	})
	.when('/portfolio/', {
		templateUrl: 'templates/portfolio.html',
		controller: 'PortfolioController'
	})
	.when('/services/', {
		templateUrl: 'templates/services.html',
		controller: 'ServicesController'
	})
	.when('/contact/', {
		templateUrl: 'templates/contact.html',
		controller: 'ContactController'
	})
	.when('/quote/', {
		templateUrl: 'templates/quote.html',
		controller: 'QuoteController'
	})

	// otherwise, redirect to the home page.
	.otherwise({ redirectTo: '/'});
});