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
    @listings = bounds ? Listing.in_bounds(bounds) : Listing.all
    # debugger
    if params[:city].length > 1
      @listings = Listing.where("city = ?", params[:city])
    end
    
    render :index 
  end

  def show 
    @listing = Listing.find(params[:id])
  end

  private

  def listing_params
    params.require(:listing).permit(:name, :description, :price,
      :address, :city, :state, :country, :zipcode, :lat, :lng)
  end

  def bounds 
    params[:bounds]
  end

end

