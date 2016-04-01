class Api::SearchesController < ApplicationController

  def index
    @search_results = Movie.search_by_title(params[:movie])
    .limit(5)
  end

end
