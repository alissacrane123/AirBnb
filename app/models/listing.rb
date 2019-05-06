class Listing < ApplicationRecord
  validates :description, :name, :price, :lat, :lng, presence: true 

  belongs_to :owner, class_name: :User, foreign_key: :owner_id

  def self.in_bounds(bounds)
    # google map bounds will be in the following format:
    # {
    #   "northEast"=> {"lat"=>"37.80971", "lng"=>"-122.39208"},
    #   "southWest"=> {"lat"=>"37.74187", "lng"=>"-122.47791"}
    # }

    self.where("lat < ?", bounds[:northEast][:lat])
      .where("lat > ?", bounds[:southWest][:lat])
      .where("lng < ?", bounds[:northEast][:lng])
      .where("lng > ?", bounds[:southWest][:lng])
  end

  
end
