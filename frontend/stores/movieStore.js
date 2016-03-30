var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var MovieConstants = require('../constants/movieConstants');

var MovieStore = new Store(AppDispatcher);

_currentMovie = {};
_homePageMovies = {};

MovieStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case MovieConstants.SINGLE_MOVIE_RECEIVED:
      MovieStore.updateCurrentMovie(payload.movie);
      break;
    case MovieConstants.HOME_PAGE_MOVIES_RECEIVED:
      MovieStore.updateHomePageMovies(payload.movies);
  }
};

MovieStore.updateCurrentMovie = function (movie) {
  _currentMovie = movie;
  MovieStore.__emitChange();
};

MovieStore.updateHomePageMovies = function (movies) {
  _homePageMovies = movies;
  MovieStore.__emitChange();
};

MovieStore.currentMovie = function () {
  return $.extend(true, {}, _currentMovie);
};

module.exports = MovieStore;
