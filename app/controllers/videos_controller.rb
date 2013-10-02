class VideosController < InheritedResources::Base
  belongs_to :playlist
  respond_to :json
  skip_before_filter :verify_authenticity_token
  
  def create
    @video = Video.find_video_information(params[:video][:url])
    @video.playlist_id = params[:playlist_id]
    @playlist = Playlist.find(params[:playlist_id])
    @video.playlist_order = @playlist.next_available_playlist_order
    create!
  end
end