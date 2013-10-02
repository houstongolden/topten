class Playlist < ActiveRecord::Base
  attr_accessible :name
  has_many :videos
  
  belongs_to :current_video, :class_name => 'Video', :foreign_key => 'current_video_id'
  
  def next_available_playlist_order
    order = videos.count + 1
  end
  
  
  def self.update_video_order
    @playlists = Playlist.all
    @playlists.each do |p|
      p.videos.each_with_index do |vid, i|
        vid.playlist_order = i + 1
        vid.save
      end
    end
  end
  
end
