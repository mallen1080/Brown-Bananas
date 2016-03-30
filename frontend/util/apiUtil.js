var MovieActions = require('../actions/movieActions');
var ReviewActions = require('../actions/reviewActions');

var ApiUtil = {

  fetchHomePageMovies: function () {
    $.ajax({
      method: "GET",
      url: "api/movies",
      dataType: "json",
      success: function (movies) {
        MovieActions.homePageMoviesReceived(movies);
      },
      error: function () {
        console.log("error in fetchHomePageMovies");
      }
    });
  },

  fetchSingleMovie: function (movieId) {
    var url = "api/movies/" + movieId;
    $.ajax({
      method: "GET",
      url: url,
      dataType: "json",
      success: function (movie) {
        MovieActions.singleMovieReceived(movie);
      },
      error: function () {
        console.log("error in fetchSingleMovie");
      }
    });
  },

  createOrEditMovie: function (movie, method, MovieId) {
    var id = MovieId || "";

    $.ajax({
      method: method,
      url: "api/movies/" + id,
      dataType: "json",
      data: movie,
      success: function (movie) {
        MovieActions.singleMovieReceived(movie);
      },
      error: function () {
        console.log("error in createoreditMovie");
      }
    });
  },

  createReview: function () {
    $.ajax({
      method: "POST",
      url: "api/reviews",
      dataType: "json",
      data: movie,
      success: function (reviews) {console.log(review);},
      error: function () {
        console.log("error in createReview");
      }
    });
  }

};

module.exports = ApiUtil;
