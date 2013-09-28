class Video < ActiveRecord::Base
  
  attr_accessible :title, :url, :youtube_id
  
  belongs_to :playlist
end
