class Api::ListingsController < ApplicationController

  before_action :require_logged_in, only: [:create]

  def create
    @listing = Listing.new(listing_params)
    @listing.owner_id = current_user.id

    if @listing.save
      render :show 
    else
      render json: @listing.errors.full_messages, status: 422
    end
  end

  def index
    @listings = Listing.all 

    render :index 
  end

  def show 
    @listing = Listing.find(params[:id])
  end

  private

  def listing_params
    params.require(:listing).permit(:name, :description, :price,
      :address, :city, :state, :country, :zipcode, :lat, :lng )
  end

end
