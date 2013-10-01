var topten = angular.module('topten');

topten.controller('PlayerController', ['$scope', 'Player', 'Video', 'sharedPlaylist', function($scope, Player, Video, sharedPlaylist) {
		
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
	},
	
	$scope.changeVideo = function() {
		$scope.player.player.loadVideoById('ylLqUsEOhpk');	
	}
	
	$scope.$on('handleBroadcast', function() {
		$scope.player.player.loadVideoById(sharedPlaylist.currentVideo);
	});
	
	
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