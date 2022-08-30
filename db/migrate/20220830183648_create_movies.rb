class CreateMovies < ActiveRecord::Migration[7.0]
  def change
    create_table :movies do |t|
      t.string :title
      t.text :description
      t.string :rating
      t.string :runtime
      t.datetime :release_date
      t.string :genre

      t.timestamps
    end
  end
end
