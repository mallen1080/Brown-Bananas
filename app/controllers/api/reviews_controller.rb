class Api::ReviewsController < ApplicationController

  def create
    @review = Review.create!(review_params)
    render :show
  end

  private

  def review_params
    params.require(:review).permit(:user_id, :movie_id, :body, :value)
  end

end
