angular.module('YIJIEBUYI', ['ui.router'])
.config(['$locationProvider', '$urlRouterProvider', function($locationProvider, $urlRouterProvider) {
	
	$urlRouterProvider.otherwise("/blog");
}]);