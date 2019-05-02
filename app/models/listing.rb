class Listing < ApplicationRecord
  validates :description, :name, :price, presence: true 


  belongs_to :owner, class_name: :User, foreign_key: :owner_id


end
