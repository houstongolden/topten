var topten = angular.module('topten');

topten.controller('VideosController', ['$scope', 'Video', 'Player', 'sharedPlaylist', '$routeParams', function($scope, Video, Player, sharedPlaylist, $routeParams) {
		
		$scope.player = Player;
		
		// $scope.videos = Video.query({playlistId: $routeParams.id});
		$scope.videos = Video.query({playlistId: $routeParams.id}, function(u) {
			console.log('---in the videos query callback---');
			$scope.currentVideo = $scope.videos[0]
			console.log($scope.player);
			console.log($scope.player.playerState);
			console.log('---in the videos query callback---');
		});
				
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

		$scope.destroy = function(index) {
			
			// Tell the server to remove the object
			Video.remove({id: $scope.videos[index].id}, function() {
				$scope.videos.splice(index, 1);
			});
		}

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
		
		$scope.previousVideo = function() {
			var previousVideoIndex = $scope.currentVideo.playlist_order - 2
			if (previousVideoIndex == -1 )
				{
					previousVideoIndex = 0;
				}
			var previousVideo = $scope.videos[previousVideoIndex];
			$scope.viewVideo(previousVideo);
		};
				
		$scope.playVideo = function() {
			if ($scope.player.playerState == -7 )
			 {
				return $scope.viewVideo($scope.videos[0]);
			}
			$scope.player.playVideo();
		};
		
		$scope.pauseVideo = function() {
			$scope.player.pauseVideo();
		};
		
		$scope.nextVideo = function() {
			var nextVideoIndex = $scope.currentVideo.playlist_order
			if (nextVideoIndex == $scope.videos.length )
				{
					nextVideoIndex = 0;
				}
			var nextVideo = $scope.videos[nextVideoIndex];
			$scope.viewVideo(nextVideo);
		};
		
		$scope.viewVideo = function(video) {			
			$scope.currentVideo = video;
			angular.forEach($scope.videos, function(video) {
				if ($scope.currentVideo != video) {
					video.isCurrentSong = false;
				}
				else {
					video.isCurrentSong = true;
				}
			});
			$scope.player.loadVideo(video);
		}
				
		$scope.checkVideoOrder = function() {
			console.log('^^^^^^^^^^^');
			console.log('^^^^^^^^^^^');
			angular.forEach($scope.videos, function(video, index) {
				console.log('video playlist_order: ' + video.playlist_order);
				console.log('video index order: ' + index);
				video.playlist_order = index + 1;
				video.playlistId = 2;
				video.$update();
			});
			console.log($scope.videos);
			console.log('^^^^^^^^^^^');
			console.log('^^^^^^^^^^^');
		};
		
		$scope.editVideoOrder = function(video) {
			console.log('--- editVideoOrder clicked ---');
		}
		
}]);