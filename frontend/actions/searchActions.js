var SearchConstants = require('../constants/searchConstants');
var AppDispatcher = require('../dispatcher/dispatcher');

var SearchActions = {

  receiveMovieSearchResults: function (movies) {
    var action = {
      actionType: SearchConstants.MOVIE_SEARCH_RESULTS_RECEIVED,
      movies: movies
    };
    AppDispatcher.dispatch(action);
  },

  receiveMovieBrowseResults: function (result) {
    var action = {
      actionType: SearchConstants.MOVIE_BROWSE_RESULTS_RECEIVED,
      movies: result.movies,
      totalCount: result.total_count,
      returnCount: result.return_count
    };
    AppDispatcher.dispatch(action);
  }

};

module.exports = SearchActions;
