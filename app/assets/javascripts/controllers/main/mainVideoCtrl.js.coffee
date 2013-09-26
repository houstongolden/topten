@VideoCtrl = ($scope, $routeParams, videoData) ->

	$scope.data = 
		video: videoData.data.videos[0]
		
	$scope.data.videoId = $routeParams.videoId
	console.log($routeParams)