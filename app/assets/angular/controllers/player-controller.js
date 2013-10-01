var topten = angular.module('topten');

topten.controller('PlayerController', ['$scope', 'Player', 'Video', 'sharedPlaylist', function($scope, Player, Video, sharedPlaylist) {
		
	$scope.player = Player;
	$scope.playerState = {};
	console.log('---');
	console.log($scope.player);
	// console.log($scope.player.getPlayerState());
	console.log('---');
	
	$scope.playVideo = function() {
		$scope.player.player.playVideo();
	}, 
	
	$scope.pauseVideo = function() {
		$scope.player.player.pauseVideo();
		// console.log($scope.player.player.getPlayerState());
	},
	
	$scope.changeVideo = function() {
		$scope.player.player.loadVideoById('ylLqUsEOhpk');	
	},
	
	// $scope.$watch('playerState', function() {
	// 	console.log('in watch');
	// 	console.log($scope.playerState);
	// }, true);
	
	$scope.$on('handleBroadcast', function() {
		$scope.player.player.loadVideoById(sharedPlaylist.currentVideo);
	});
	
	
}]);