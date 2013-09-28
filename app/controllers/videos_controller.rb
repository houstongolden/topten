class VideosController < InheritedResources::Base
  belongs_to :playlist
  respond_to :json
  skip_before_filter :verify_authenticity_token
end

# class VideosController < ApplicationController
#   respond_to :json
#   
#   def index
#     videos = Video.all
#     respond_with(videos) do |format|
#       format.json { render :json => videos.as_json }
#     end
#   end
#   
#   def create
#     respond_with Video.create(params[:video])
#   end
#   
#   def show
#     
#   end
#   
#   
# end
