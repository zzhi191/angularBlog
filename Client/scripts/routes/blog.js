angular.module('YIJIEBUYI').config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){

	$stateProvider.state('blog',{
		url:'/blog',
		views:{
			'container':{templateUrl:'templates/blog_layout.html'}
		}
	}).state('blog.detail',{
		url:'/:blogID',
		views:{
			'container':{templaterUrl:'templates/blog_detail.html'}
		}
	})
}]);