class AddPlaylistIdToVideos < ActiveRecord::Migration
  def change
    add_column :videos, :playlist_id, :integer
  end
end
