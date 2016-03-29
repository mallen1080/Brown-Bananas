class Api::MoviesController < ApplicationController

  def create
    @movie = Movie.create!(movie_params)
    render :show
  end

  def show
    @movie = Movie.find(params[:id])
  end

  def index
    
  end

  def destroy
    @movie = Movie.find(params[:movie_id])
    @movie.destroy
    render :show
  end

  def update
    @movie = Movie.find(params[:movie_id])
    @movie.update(movie_params)
    render :show
  end

  private

  def movie_params
    params.require(:movie).permit(
      :title,
      :image_url,
      :trailer_url,
      :genre_id,
      :in_theatres,
      :on_dvd,
      :director_id,
      :consensus,
      :description)
  end

end
