class Api::ReviewsController < ApplicationController

  def create
    @review = Review.new(review_params)
    @review.user_id = current_user.id
    @review.body = params[:review][:body] == "" ? nil :
      params[:review][:body]
    @review.save
    @movie = @review.movie
    render 'api/movies/show'
  end

  def update
    @review = Review.find(params[:review][:id])
    @review.body = params[:review][:body] == "" ?
      nil : params[:review][:body]
    @review.update!(review_params)
    @movie = @review.movie
    render 'api/movies/show'
  end

  def destroy
    @review = Review.find(params[:id])
    @movie = @review.movie
    @review.destroy
    render 'api/movies/show'
  end

  private

  def review_params
    params.require(:review).permit(:movie_id, :value)
  end

end
