angular.module('YIJIEBUYI')
.config(['$httpProvider', function ($httpProvider) {
	$httpProvider.interceptors.push(['$q', function($q) {
		return {
			'request': function(config, body) {
				if (!config.data) {
					config.data = {};
				}
				
				if(config.method.toLowerCase() == 'get'){
					if(!config.params){
						config.params = {};
					}
				}
				return config;
			},

			'response': function(response) {
				return response;
			}
		};
	}]);
}]);