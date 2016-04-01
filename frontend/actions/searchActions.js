var SearchConstants = require('../constants/searchConstants');
var AppDispatcher = require('../dispatcher/dispatcher');

var SearchActions = {

  receiveMovieSearchResults: function (movies) {
    var action = {
      actionType: SearchConstants.MOVIE_SEARCH_RESULTS_RECEIVED,
      movies: movies
    };
    AppDispatcher.dispatch(action);
  }

};

module.exports = SearchActions;
