angular.module('TopTen').factory('videoData', ['$http', ($http) ->

	videoData = 
		data:
			videos: [{title: 'Cash Cash - Take Me Home (The Chainsmokers Remix)', url: 'http://www.youtube.com/watch?v=Cxliw92yHzs'}, {title: 'The Killers - Miss Atomic Bomb (The Chainsmokers Remix)', url: 'ttp://www.youtube.com/watch?v=6-vpp4J-Rgk'}, {title: 'Julian - Say Lou Lou (The Chainsmokers Remix)', url: 'http://www.youtube.com/watch?v=tI2LwQGZTDA'}]
			
	videoData.loadVideos = ->
		$http.get('./videos.json').success( (data) ->
			videoData.data.videos = data
			console.log('successfully loaded videos.')
		).error( ->
				console.error('failed to load videos.')
		)

	return videoData

])