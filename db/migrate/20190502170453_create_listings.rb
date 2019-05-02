class CreateListings < ActiveRecord::Migration[5.2]
  def change
    create_table :listings do |t|
      t.string :name, null: false
      t.text :description, null: false
      t.integer :owner_id, null: false 
      t.float :price, null: false
      t.string :address
      t.string :city
      t.string :state
      t.string :country
      t.integer :zipcode


      t.timestamps
    end
    add_index :listings, :owner_id
  end
end
