var topten = angular.module('topten');

topten.factory('Playlist', ['$resource', function($resource) {
    return $resource('/playlists/:id', {id: '@id'});
}]);

topten.factory('Video', ['$resource', function($resource) {
    return $resource('/playlists/:playlistId/videos/:id', {playlistId: '@playlistId', id: '@id'});
}]);

topten.factory('Player', ['youtubePlayerApi', function(youtubePlayerApi) {
	// console.log(youtubePlayerApi);
	return youtubePlayerApi
}]);


topten.factory('sharedPlaylist', function($rootScope) {
	var sharedPlaylist = {};
	sharedPlaylist.currentVideo = '';
	sharedPlaylist.prepForBroadcast = function(vid) {
		this.currentVideo = vid;
		this.broadcastItem();
	};
	
	sharedPlaylist.broadcastItem = function() {
		$rootScope.$broadcast('handleBroadcast');
	};
	
	return sharedPlaylist;
	
});