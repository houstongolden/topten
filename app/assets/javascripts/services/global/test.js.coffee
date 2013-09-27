TopTen = angular.module('TopTen', ["ngResource"])
# TopTen = angular.module('TopTen', [])

TopTen.config(['$routeProvider', ($routeProvider) ->


	$routeProvider.when('/videos/:videoId', { templateUrl: '../assets/mainVideo.html', controller: 'VideoCtrl' } )
	
	$routeProvider.otherwise({ templateUrl: '../assets/mainIndex.html', controller: 'IndexCtrl' } )
	
])