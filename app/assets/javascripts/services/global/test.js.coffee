TopTen = angular.module('TopTen', [])

TopTen.config(['$routeProvider', ($routeProvider) ->


	$routeProvider.when('/video/:videoId', { templateUrl: '../assets/mainVideo.html', controller: 'VideoCtrl' } )
	
	$routeProvider.otherwise({ templateUrl: '../assets/mainIndex.html', controller: 'IndexCtrl' } )
	
])