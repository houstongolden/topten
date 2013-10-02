var topten = angular.module('topten');

topten.controller('PlayerController', ['$scope', 'Player', 'Video', 'sharedPlaylist', function($scope, Player, Video, sharedPlaylist) {
	
	$scope.player = Player;
	$scope.playerState = $scope.player.playerState;
	console.log('----------PlayerController----------');
	console.log($scope.player);
	console.log($scope.player.playerState);
	
	$scope.playVideo = function() {
		$scope.player.player.playVideo();
	}, 
	
	$scope.pauseVideo = function() {
		$scope.player.player.pauseVideo();
	},
	
	$scope.changeVideo = function() {
		$scope.player.player.loadVideoById('ylLqUsEOhpk');	
	},
	
	// $scope.$watch('playerState', function() {
	// 	console.log('in watch');
	// 	console.log($scope.playerState);
	// 	console.log('in watch');
	// }, true);
	
	$scope.$on('handleBroadcast', function() {
		$scope.player.player.loadVideoById(sharedPlaylist.currentVideo);
	});
	
	$scope.$on('handleStateChange', function() {
		console.log('old state:' + $scope.playerState);
		console.log('handling the state change');
		$scope.playerState = $scope.player.playerState;
		console.log('new state:' + $scope.playerState);
	});
	
	console.log('----------PlayerController----------');
	
	
}]);