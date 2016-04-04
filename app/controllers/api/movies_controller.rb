class Api::MoviesController < ApplicationController

  def create
    @movie = Movie.new(movie_params)
    @movie.parse_for_create_or_edit(params)
    if @movie.save
      Casting.create_from_movie_form(params[:movie][:actors], @movie)
    end

    render :show
  end

  def show
    if params[:id] == "random"
      @movie = Movie.get_random
    else
      @movie = Movie.find(params[:id])
    end
  end

  def index
  end

  def destroy
    @movie = Movie.find(params[:movie_id])
    @movie.destroy
    render :show
  end

  def update
    @movie = Movie.find(params[:id])
    @movie.parse_for_create_or_edit(params)
    @movie.update!(movie_params)
    Casting.create_from_movie_form(params[:movie][:actors], @movie)
    render :show
  end

  # def random
  #   @movie = Movie.get_random
  #   render :show
  # end

  private

  def movie_params
    params.require(:movie).permit(
      :title,
      :image_url,
      :in_theaters,
      :on_dvd,
      :consensus,
      :description)
  end

end
