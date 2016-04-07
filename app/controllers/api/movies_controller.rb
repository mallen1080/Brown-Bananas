class Api::MoviesController < ApplicationController

  def create
    @movie = Movie.new(movie_params)
    @movie.parse_for_create_or_edit(params)
    if @movie.valid?
      @movie.save
      Casting.create_from_movie_form(params[:movie][:actors], @movie)
    else
    end
    render :show
  end

  def show
    @user = current_user
    if params[:id] == "random"
      @movie = Movie.get_random
    else
      @movie = Movie.find(params[:id])
    end
    @review_page = params[:review_page]
  end

  def index
  end

  def destroy
    @movie = Movie.find(params[:id])
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

  def browse
    genres = params[:query].keys.select do |key|
      params[:query][key] == 'true'
    end
    @movies = Movie.search({
      min_rating: params[:query][:minRating].to_i,
      max_rating: params[:query][:maxRating].to_i,
      genres: genres.map(&:to_i)
      })
  end

  private

  def movie_params
    params.require(:movie).permit(
      :title,
      :image_url,
      :in_theaters,
      :trailer_url,
      :on_dvd,
      :consensus,
      :description)
  end

end
