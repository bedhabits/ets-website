class CreateServices < ActiveRecord::Migration[5.2]
  def change
    create_table :services do |t|
      t.string :media
      t.string :period
      t.string :service

      t.timestamps
    end
  end
end
