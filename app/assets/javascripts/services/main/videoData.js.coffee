angular.module('TopTen').factory('videoData', ['$http', ($http) ->

	videoData = 
		data:
			videos: [{title: 'Loading', url: ''}]
		isLoaded: false
			
	videoData.loadVideos = ->
		if !videoData.isLoaded
			$http.get('./videos.json').success( (data) ->
				videoData.data.videos = data
				videoData.isLoaded = true
				console.log('successfully loaded videos.')
			).error( ->
					console.error('failed to load videos.')
			)

	return videoData

])

# TopTen.factory "Video", ($resource) ->
#	$resource("/videos/:id", {id: "@id"}, {update: {method: "PUT"}})

angular.module('TopTen').factory "Video", ["$resource", ($resource)
  $resource("/videos/:id", {id: "@id"}, {update: {method: "PUT"}} )
]