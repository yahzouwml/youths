app.directive('blogSlider', function(){
	// Runs during compile
	return {
		restrict: 'E',
		controller:'blogSliderCtrl',
		templateUrl:'/views/layout/blogSlider.html',
		link: function($scope, iElm, iAttrs, controller) {
			
		}
	};
}).directive('addBlog', function(){
	// Runs during compile
	return {
		restrict: 'E',
		templateUrl:'/views/layout/addBlog.html',
		link: function($scope, iElm, iAttrs, controller) {
			
		}
	};
}).directive('accountNav', function(){
	// Runs during compile
	return {
		restrict: 'E',
		templateUrl:'/views/layout/accountNav.html',
		link: function($scope, iElm, iAttrs, controller) {
			
		}
	};
}).directive('accountEnd', function(){
	// Runs during compile
	return {
		restrict: 'E',
		templateUrl:'/views/layout/accountEnd.html',
		link: function($scope, iElm, iAttrs, controller) {
			
		}
	};
});
