var topten = angular.module('topten');

topten.controller('PlayerController', ['$scope', 'Player', 'Video', function($scope, Player, Video) {
		
	$scope.player = Player;
	console.log($scope.player);
	console.log('baaa');
	// console.log(Player.player);
	console.log('baaa');
	
	$scope.playVideo = function() {
		$scope.player.player.playVideo();
		console.log('inside of the playVideo');
	}, 
	
	$scope.pauseVideo = function() {
		$scope.player.player.pauseVideo();
		console.log('inside of the pauseVideo');
	}
	
}]);


// $scope.viewVideo = function(video) { 
// 	$scope.currentVideo = video;
// 	angular.forEach($scope.videos, function(video) {
// 		video.isCurrentSong = '';
// 	});
// 	video.isCurrentSong = 'current';
// 	console.log("current video logged below");
// 	console.log($scope.currentVideo);
// };