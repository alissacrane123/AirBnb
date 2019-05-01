class AddUsersBirthdayColumn < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :birth_month, :string
    add_column :users, :birth_day, :string
    add_column :users, :birth_year, :string
  end
end
