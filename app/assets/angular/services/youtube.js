angular.module('youtube', ['ng']).run(function () {
    var tag = document.createElement('script');

    // This is a protocol-relative URL as described here:
    //     http://paulirish.com/2010/the-protocol-relative-url/
    // If you're testing a local page accessed via a file:/// URL, please set tag.src to
    //     "https://www.youtube.com/iframe_api" instead.
    // tag.src = "//www.youtube.com/iframe_api";
		tag.src = "http://www.youtube.com/iframe_api"
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    })
    .service('youtubePlayerApi', ['$window', '$rootScope', '$log', function ($window, $rootScope, $log) {
        var service = $rootScope.$new(true);

        // Youtube callback when API is ready
        $window.onYouTubeIframeAPIReady = function () {
            $log.info('Youtube API is ready');
            service.ready = true;
						// service.player = service.createPlayer();
						service.loadPlayer();
        };

        service.ready = false;
        service.playerId = "ytplayer";
        service.player = null;
				service.videoId = "bK1ZsgQgViQ";
				service.playerHeight = '405';
				service.playerWidth = '720';
				service.playerState = -7;

        service.bindVideoPlayer = function (elementId) {
            $log.info('Binding to player ' + elementId);
            service.playerId = elementId;
        };

        service.createPlayer = function () {
            $log.info('Creating a new Youtube player for DOM id ' + this.playerId + ' and video ' + this.videoId);
            return new YT.Player(this.playerId, {
                height: this.playerHeight,
                width: this.playerWidth,
                videoId: this.videoId,
								playerVars: {
									controls: 0,
									modestbranding: 1,
									rel: 0,
									showinfo: 0
								},
								events: {
									'onStateChange': this.onPlayerStateChange
								}
            });
        };

				service.onPlayerStateChange = function () {
					console.log('----------inside onPlayerStateChange of youtube service----------');
					service.prepStateForBroadcast(service.player.getPlayerState());
					console.log('----------inside onPlayerStateChange of youtube service----------');
				};
				
				service.prepStateForBroadcast = function (playerState) {
					this.playerState = playerState;
					this.broadcastState();
				};
				
				service.broadcastState = function() {
					$rootScope.$broadcast('handleStateChange');
				};

        service.loadPlayer = function () {
						console.log('inside loadPlayer');
            // API ready?
            if (this.ready && this.playerId && this.videoId) {
                if(this.player) {
                    this.player.destroy();
                }

                this.player = this.createPlayer();
            }
        };

        return service;
    }])
    .directive('youtubePlayer', ['youtubePlayerApi', function (youtubePlayerApi) {
        return {
            restrict:'A',
            link:function (scope, element) {
            	youtubePlayerApi.bindVideoPlayer(element[0].id);
            }

        };
    }]);