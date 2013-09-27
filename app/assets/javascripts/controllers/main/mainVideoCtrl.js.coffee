@VideoCtrl = ($scope, $routeParams, videoData) ->

	$scope.data = 
		videoData: videoData.data
		
	videoData.loadVideos()
	
	$scope.data.videoId = $routeParams.videoId
	
@VideoCtrl.$inject = ['$scope', '$routeParams', 'videoData']