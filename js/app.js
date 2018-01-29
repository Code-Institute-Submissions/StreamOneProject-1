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

	// otherwise, redirect to the home page.
	.otherwise({ redirectTo: '/'});
});