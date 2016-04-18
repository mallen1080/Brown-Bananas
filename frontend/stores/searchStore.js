var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var SearchConstants = require('../constants/searchConstants');

var SearchStore = new Store(AppDispatcher);

_movieSearchResults = [];
_movieBrowseResults = [];

SearchStore.movieSearchResults = function () {
  return _movieSearchResults.slice();
};

SearchStore.movieBrowseResults = function () {
  return _movieBrowseResults.slice();
};

SearchStore.updateMovieSearchResults = function (movies) {
  _movieSearchResults = movies;
};

SearchStore.updateMovieBrowseResults = function (movies) {
  _movieBrowseResults = movies;
};

SearchStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case SearchConstants.MOVIE_SEARCH_RESULTS_RECEIVED:
      SearchStore.updateMovieSearchResults(payload.movies);
      this.__emitChange();
      break;
    case SearchConstants.MOVIE_BROWSE_RESULTS_RECEIVED:
      SearchStore.updateMovieBrowseResults(payload.movies);
      this.__emitChange();
    }
};

module.exports = SearchStore;
