var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');

var SearchStore = new Store(AppDispatcher);

_movieSearchResults = [];

SearchStore.movieSearchResults = function () {
  return _movieSearchResults.slice();
};

SearchStore.updateMovieSearchResults = function (movies) {
  _movieSearchResults = movies;
};

SearchStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case SearchConstants.MOVIE_SEARCH_RESULTS_RECEIVED:
      SearchStore.updateMovieSearchResults(payload.movies);
      break;
    }
};

module.exports = SearchStore;
