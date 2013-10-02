var topten = angular.module('topten');

topten.controller('PlaylistIndexController', ['$scope', 'Playlist', function($scope, Playlist) {
    //Grab all forums from the server
    $scope.items = Playlist.query();

    //Destroy method for deleting a forum
    $scope.destroy = function(index) {

        //Tell the server to remove the object
        Playlist.remove({id: $scope.items[index].id}, function() {
            //If successful, remove it from our collection
            $scope.items.splice(index, 1);
        });
    }
}]);

topten.controller('PlaylistCreateController', ['$scope', '$location', 'Playlist', function($scope, $location, Playlist) {
    //The save method which is called when the user wants to submit their data
    $scope.save = function() {

        //Create the forum object to send to the back-end
        var playlist = new Playlist($scope.playlist);

        //Save the forum object
        playlist.$save(function() {

            //Redirect us back to the main page
            $location.path('/');

        }, function(response) {

            //Post response objects to the view
            $scope.errors = response.data.errors;
        });
    }
}]);

//A controller to show the forum and all it's glory
// topten.controller('PlaylistShowController', ['$scope', 'Playlist', 'Video', '$routeParams', function($scope, Playlist, Video, $routeParams) {
//     $scope.playlist = Playlist.get({id: $routeParams.id})
// 		console.log('in playlist show controller');
// 		console.log($scope.playlist);
// 		console.log('in playlist show controller');
// }]);


topten.controller('PlaylistShowController', ['$scope', 'Playlist', 'Video', '$routeParams', function($scope, Playlist, Video, $routeParams) {
    $scope.playlist = Playlist.get({id: $routeParams.id});
}]);

topten.controller('PlaylistEditController', ['$scope', 'Playlist', 'Video', '$routeParams', function($scope, Playlist, Video, $routeParams) {
	$scope.playlist = Playlist.get({id: $routeParams.id});
	
}]);