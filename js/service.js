angular.module('PostcodeLookup', [])
	.factory('APIService', function($http) {
		APIService = {
			lookupPostcode: function(postcode) {
				//var url = "https://api.getAddress.io/find/";  // old api, didn't work
				var url = "https://api.ideal-postcodes.co.uk/v1/postcodes/";
				//var apiKey = "9YIhk8ZqG0Sn_PmiYB0hGA12356";  // old apikey for old api
				//var apiKey = "ak_jdvtgxu1w1GuiE7J9OPuptx5zAzLo";  // active apikey
				var apiKey = "iddqd";  // testing apikey
				//var apiKey = "some-invalid-key"; // key to generate an error.
				
				return $http.get(url + postcode + "?api_key=" + apiKey);
			}
		};
		return APIService;
	});