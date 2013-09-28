var topten = angular.module('topten');

topten.controller('VideosController', ['$scope', 'Video', '$routeParams', function($scope, Video, $routeParams) {
    //Grab all the comments from the server
    $scope.videos = Video.query({playlistId: $routeParams.id});

    //Define a 'save' method which will be called from the view.
    $scope.save = function() {
        //Create the comment object to be sent to the server
        var obj = new Video({title: $scope.title, youtube_id: $scope.youtubeId, url: $scope.url, playlistId: $routeParams.id});

        //Attempt a save to the back-end
        obj.$save(function(response) {

            //If we're successful then add the response (the object as the server sees it)
            // to our collection of comments
            // $scope.videos.unshift(response);
						$scope.videos.push(response);

            //Empty the name & body
            $scope.title = $scope.youtubeId = ""

        }, function(response) {

            //If there's a failure set the 'errors' scope variable so it'll be reflected in the view.
            $scope.errors = response.data.errors;
        });
    }

		$scope.viewVideo = function(video) { 
			$scope.currentVideo = video;
			console.log($scope.currentVideo);
			
		};
		
}]);