class Playlist < ActiveRecord::Base
  attr_accessible :name
  has_many :videos
  
  belongs_to :current_video, :class_name => 'Video', :foreign_key => 'current_video_id'
  
end
