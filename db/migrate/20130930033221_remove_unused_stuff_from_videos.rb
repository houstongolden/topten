class RemoveUnusedStuffFromVideos < ActiveRecord::Migration
  def change
    remove_column :videos, :thumbnail1, :string
    remove_column :videos, :thumbnail2, :string
    remove_column :videos, :thumbnail3, :string
  end
end
