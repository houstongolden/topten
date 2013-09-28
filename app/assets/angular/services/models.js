var topten = angular.module('topten');

topten.factory('Playlist', ['$resource', function($resource) {
    return $resource('/playlists/:id', {id: '@id'});
}]);

topten.factory('Video', ['$resource', function($resource) {
    return $resource('/playlists/:playlistId/videos/:id', {playlistId: '@playlistId', id: '@id'});
}]);