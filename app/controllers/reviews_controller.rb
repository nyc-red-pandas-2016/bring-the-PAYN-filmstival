class ReviewsController < ApplicationController

  def index
    @reviews =  Review.all
    # binding.pry
    # render json: @reviews

    render 'review/reviews.json.jbuilder'
  end

  def new
    @review = Review.new
  end

  def create
    @review = Review.new(review_params)
    if @review.save
      render :json => @review
    else
      render json: { :errors => @review.errors.full_messages }
    end
  end

  def update
  end

  def destroy
  end

  private
  def review_params
    params.require(:review).permit(:text, :rating, :film_id, :reviewer_id)
  end

end
