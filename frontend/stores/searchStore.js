var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var SearchConstants = require('../constants/searchConstants');

SearchStore = new Store(AppDispatcher);

var _movieSearchResults = [];
var _movieBrowseResults = [];
var _movieBrowseTotalCount = 0;
var _movieBrowseReturnCount = 0;

SearchStore.movieSearchResults = function () {
  return _movieSearchResults.slice();
};

SearchStore.movieBrowseResults = function () {
  return _movieBrowseResults.slice();
};

SearchStore.updateMovieSearchResults = function (movies) {
  _movieSearchResults = movies;
};

SearchStore.movieBrowseTotalCount = function () {
  return _movieBrowseTotalCount;
};

SearchStore.movieBrowseReturnCount = function () {
  return _movieBrowseReturnCount;
};

SearchStore.updateMovieBrowseResults = function (result) {
  _movieBrowseResults = result.movies;
  _movieBrowseTotalCount = result.totalCount;
  _movieBrowseReturnCount = result.returnCount;
};

SearchStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case SearchConstants.MOVIE_SEARCH_RESULTS_RECEIVED:
      SearchStore.updateMovieSearchResults(payload.movies);
      this.__emitChange();
      break;
    case SearchConstants.MOVIE_BROWSE_RESULTS_RECEIVED:
      SearchStore.updateMovieBrowseResults(payload);
      this.__emitChange();
    }
};

module.exports = SearchStore;
