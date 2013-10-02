var topten = angular.module('topten');

topten.controller('PlayerController', ['$scope', 'Player', 'Video', 'sharedPlaylist', function($scope, Player, Video, sharedPlaylist) {
	
	$scope.player = Player;
	$scope.playerState = $scope.player.playerState;
	$scope.currentVideo = {};
	
	$scope.playVideo = function() {
		console.log('--- PlayerController playVideo called ---')
		$scope.player.player.playVideo();
	}, 
	
	$scope.player.playVideo = function() {
		this.player.playVideo();
	};
	
	$scope.player.pauseVideo = function() {
		this.player.pauseVideo();
	};
	
	$scope.pauseVideo = function() {
		console.log('--- PlayerController pauseVideo called ---')
		$scope.player.player.pauseVideo();
	},
	
	$scope.player.loadVideo = function(video) {
		// $scope.player.player.loadVideoById(video.youtube_id);
		$scope.currentVideo = video;
		this.player.loadVideoById(video.youtube_id);
	},
	
	$scope.previousVideo = function() {
		console.log('this was called: previousVideo');
		
	},
	
	$scope.nextVideo = function() {
		console.log('this was called: nextVideo');
	}
	// $scope.$watch('playerState', function() {
	// 	console.log('in watch');
	// 	console.log($scope.playerState);
	// 	console.log('in watch');
	// }, true);
	
	// $scope.$on('handleBroadcast', function() {
	// 	$scope.player.player.loadVideoById(sharedPlaylist.currentVideo);
	// });
	
	$scope.$on('handleStateChange', function() {
		console.log('old state:' + $scope.playerState);
		console.log('handling the state change');
		$scope.playerState = $scope.player.playerState;
		console.log('new state:' + $scope.playerState);
	});	
	
}]);