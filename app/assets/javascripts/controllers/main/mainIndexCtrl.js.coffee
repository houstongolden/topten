@IndexCtrl = ($scope, $location, $http, videoData) ->

	$scope.data = videoData.data
		
	videoData.loadVideos()
		
	$scope.viewVideo = (videoId) ->
		$location.url('/video/'+videoId)
		
@IndexCtrl.$inject = ['$scope', '$location', '$http', 'videoData']