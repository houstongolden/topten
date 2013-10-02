class AddPlaylistOrderToVideos < ActiveRecord::Migration
  def change
    add_column :videos, :playlist_order, :integer
  end
end
