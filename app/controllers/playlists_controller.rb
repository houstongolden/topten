class PlaylistsController < InheritedResources::Base
  respond_to :json
  skip_before_filter :verify_authenticity_token
end

# class PlaylistsController < ApplicationController
#   
#   respond_to :json
#   
#   def index
#     playlists = Playlist.all
#     respond_with(playlists) do |format|
#       format.json { render :json => playlists.as_json }
#     end
#   end
#   
#   def new
#   end
#   
#   def show
#     p "*"*30
#     p params
#     p "*"*30
#     playlist = Playlist.find(params[:id])
#     videos = playlist.videos
#     respond_with(playlist) do |format|
#       format.json { render :json => playlist.as_json }
#     end
#   end
#   
#   def destroy
#   end
#   
#   def update
#   end
#   
# end
