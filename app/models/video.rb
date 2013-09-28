class Video < ActiveRecord::Base
  
  attr_accessible :title, :url, :youtube_id
  
  belongs_to :playlist
  has_many :playlists, :class_name => 'Playlist', :foreign_key => 'current_video_id'
  
end
