class AddThumbToVideos < ActiveRecord::Migration
  def change
    add_column :videos, :thumbnail, :string
  end
end
