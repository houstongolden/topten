var topten = angular.module('topten');

topten.controller('VideosController', ['$scope', 'Video', 'Player', 'sharedPlaylist', '$routeParams', function($scope, Video, Player, sharedPlaylist, $routeParams) {
		
		$scope.player = Player;
		console.log('----------Videos Controller----------');
		console.log($scope.player);
		console.log($scope.player.playerState);
		console.log('----------Videos Controller----------');
		
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
    };

		$scope.$watch('currentVideo', function(newVal, oldVal) {
			if (newVal) {
				console.log('watching currentVideo change!');
				console.log("oldVal: "+ oldVal);
				console.log(oldVal);
				console.log("newVal: " + newVal);
				console.log(newVal);
				console.log('watching currentVideo change!');
			}
		});
		
		$scope.viewVideo = function(video) {
			$scope.currentVideo = video;
			angular.forEach($scope.videos, function(video) {
				if ($scope.currentVideo != video) {
					video.isCurrentSong = '';
				}
				else {
					video.isCurrentSong = 'current';
				}
				
				// video.isCurrentSong = '';
			});
			// video.isCurrentSong = 'current';
			$scope.player.loadVideo(video);
		}
		
		// $scope.viewVideo = function(video) {
		// 	
		// 	$scope.currentVideo = video;
		// 	angular.forEach($scope.videos, function(video) {
		// 		video.isCurrentSong = '';
		// 	});
		// 	video.isCurrentSong = 'current';
		// 	sharedPlaylist.prepForBroadcast(video.youtube_id);
		// };
		
		// $scope.$on('handleBroadcast', function() {
		// 	$scope.currentVideo = sharedPlaylist.currentVideo;
		// });
		
}]);