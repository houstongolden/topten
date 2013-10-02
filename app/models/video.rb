require 'youtube_it'

class Video < ActiveRecord::Base
  
  attr_accessible :title, :url, :youtube_id, :thumbnail, :playlist_order
  
  belongs_to :playlist
  has_many :playlists, :class_name => 'Playlist', :foreign_key => 'current_video_id'
  
  default_scope order('playlist_order ASC')
  
  
  def self.find_video_information(youtube_url)
    youtube_id = parse_youtube_id_from_url(youtube_url)
    @client = YouTubeIt::Client.new
    @video_information = @client.video_by(youtube_id)
    video = Video.new(:title => @video_information.title, :youtube_id => youtube_id, :thumbnail => @video_information.thumbnails[1].url)
  end
  
  def self.parse_youtube_id_from_url(url)
    youtube_id = "XvIj7kuIQmI"
    if url =~ /^http:\/\/www\.youtube\.com\/.*[?&]v=[^&]+/i
      youtube_id = url.scan(/^http:\/\/www\.youtube\.com\/.*[?&]v=([^&]+)/i).flatten.pop
    elsif url =~ /^http:\/\/youtu\.be\/[^?]+/i
      youtube_id = url.scan(/^http:\/\/youtu\.be\/([^?]+)/i).flatten.pop
    else
    end
    youtube_id
  end
  
  def self.shorten_titles
    @videos = Video.all
    @videos.each do |v|
      v.title = v.title[0..35]
      v.save
    end
  end
  
end
