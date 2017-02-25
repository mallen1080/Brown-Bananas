class Api::MoviesController < ApplicationController
  before_action :ensure_admin, only: [:create, :destroy, :update]

  def create
    @movie = Movie.new(movie_params)
    @movie.parse_for_create_or_edit(params)
    if @movie.valid?
      @movie.save
      Casting.create_from_movie_form(params[:movie][:actors], @movie)
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

    browse_results = Movie.search({
      min_rating: params[:query][:minRating].to_i,
      max_rating: params[:query][:maxRating].to_i,
      theaters: params[:query][:theaters] == "true",
      genres: genres.map(&:to_i),
      count: params[:query][:browseResultReturnCount].to_i - 1
      })
      @movies = browse_results[:movies]
      @total_count = browse_results[:total_count]
      @return_count = browse_results[:return_count]
  end

  private

  def movie_params
    params.require(:movie).permit(
      :title,
      :image_url,
      :image,
      :in_theaters,
      :on_dvd,
      :consensus,
      :description)
  end

  def ensure_admin
    return unless current_user.username == 'admin'
  end

end
