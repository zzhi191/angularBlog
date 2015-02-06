angular.module('YIJIEBUYI').config(['$stateProvider',function($stateProvider){

	$stateProvider.state('blog',{
		url:'/blog',
		views:{
			'container':{templateUrl:'templates/blog_layout.html'}
		}
	}).state('blog.detail',{
		url:'/:blogID',
		views:{
			'container':{templateUrl:'templates/blog_detail.html'}
		}
	});
}]);