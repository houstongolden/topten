var topten = angular.module('topten');

topten.controller('VideosController', ['$scope', 'Video', 'Player', 'sharedPlaylist', '$routeParams', function($scope, Video, Player, sharedPlaylist, $routeParams) {
		
		console.log('in the beginning of the VideosController');
    //Grab all the comments from the server
    $scope.videos = Video.query({playlistId: $routeParams.id});
		
		$scope.currentVideo = {};
		$scope.currentVideo.youtube_id = 'Cxliw92yHzs';
		
    //Define a 'save' method which will be called from the view.
    $scope.save = function() {
        //Create the comment object to be sent to the server
				var obj = new Video({url: $scope.url, playlistId: $routeParams.id});

        //Attempt a save to the back-end
        obj.$save(function(response) {

            //If we're successful then add the response (the object as the server sees it)
						$scope.videos.push(response);

            //Empty the url
            $scope.url = "";

        }, function(response) {

            //If there's a failure set the 'errors' scope variable so it'll be reflected in the view.
            $scope.errors = response.data.errors;
        });
    }
		
		$scope.viewVideo = function(video) {
			$scope.currentVideo = video;
			angular.forEach($scope.videos, function(video) {
				video.isCurrentSong = '';
			});
			video.isCurrentSong = 'current';
			sharedPlaylist.prepForBroadcast(video.youtube_id);
		};
		
		$scope.$on('handleBroadcast', function() {
			$scope.currentVideo = sharedPlaylist.currentVideo;
		});
		
		// $scope.viewVideo = function(video) { 
		// 			$scope.currentVideo = video;
		// 			angular.forEach($scope.videos, function(video) {
		// 				video.isCurrentSong = '';
		// 			});
		// 			video.isCurrentSong = 'current';
		// 			console.log("current video logged below");
		// 			console.log($scope.currentVideo);
		// 		};
		
		console.log('in the END of the VideosController');
		
}]);