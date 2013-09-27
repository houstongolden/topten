@IndexCtrl = ($scope, $location, $http, videoData, Video) ->
	
	$scope.data = videoData.data
		
	videoData.loadVideos()
		
	$scope.viewVideo = (videoId) ->
		$location.url('/videos/'+videoId)
		
	$scope.addVideo = ->
		# video = Video.save($scope.newVideo)
		videoData.data.videos.push($scope.newVideo)
		$scope.newVideo = {}
		
@IndexCtrl.$inject = ['$scope', '$location', '$http', 'videoData']