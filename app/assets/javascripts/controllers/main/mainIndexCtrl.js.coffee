@IndexCtrl = ($scope, $location, $http, videoData) ->

	$scope.data = videoData.data
		
	videoData.loadVideos()
		
	$scope.viewVideo = (videoId) ->
		$location.url('/video/'+videoId)
		
	$scope.addVideo = ->
		videoData.data.videos.push($scope.newVideo)
		$scope.newVideo = {}
		
@IndexCtrl.$inject = ['$scope', '$location', '$http', 'videoData']