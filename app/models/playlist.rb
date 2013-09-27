class Playlist < ActiveRecord::Base
  
  has_many :videos
end
