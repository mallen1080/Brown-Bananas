class Api::MoviesController < ApplicationController

  def create
    @movie = Movie.new(movie_params)
    @movie.genre_id = Genre.find_by_name(params[:movie][:genre]).id
    @movie.director_id = Director.find_or_create(params[:movie][:director])
    # @movie.in_theaters = Date.new(2015,5,6) --FOR TESTING--
    if @movie.save
      Casting.create_from_movie_form(params[:movie][:actors], @movie)
    end

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
      :in_theaters,
      :on_dvd,
      :consensus,
      :description)
  end

end
