var AppDispatcher = require('../dispatcher/dispatcher');
var MovieConstants = require('../constants/movieConstants');

var MovieActions = {
  singleMovieReceived: function (movie) {
    var action = {
      actionType: MovieConstants.SINGLE_MOVIE_RECEIVED,
      movie: movie
    };

    AppDispatcher.dispatch(action);
  },

  homePageMoviesReceived: function (movies) {
    var action = {
      actionType: MovieConstants.HOME_PAGE_MOVIES_RECEIVED,
      movies: movies
    };

    AppDispatcher.dispatch(action);
  },

  clearCurrentMovie: function () {
    var action = {
      actionType: MovieConstants.CLEAR_CURRENT_MOVIE
    };
    AppDispatcher.dispatch(action);
  }

};

module.exports = MovieActions;
