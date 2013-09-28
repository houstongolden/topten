class Add < ActiveRecord::Migration
  def change
    add_column :playlists, :current_video_id, :integer
  end
end
