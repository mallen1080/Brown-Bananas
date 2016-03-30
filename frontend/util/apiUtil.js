var MovieActions = require('../actions/movieActions');
var ReviewActions = require('../actions/reviewActions');

var ApiUtil = {

  fetchHomePageMovies: function () {
    $.ajax({
      method: "GET",
      url: "api/movies",
      dataType: "json",
      success: function (movies) {console.log(movies)},
      error: function () {
        console.log("error in fetchHomePageMovies")
      }
    })
  },

  fetchSingleMovie: function (movieId) {
    var url = "api/movies/" + movieId
    $.ajax({
      method: "GET",
      url: url,
      dataType: "json",
      success: function (movie) {console.log(movie)},
      error: function () {
        console.log("error in fetchSingleMovie")
      }

    })
  },

  createMovie: function (movie) {
    $.ajax({
      method: "POST",
      url: "api/movies",
      dataType: "json",
      data: movie,
      success: function (movie) {console.log(movie)},
      error: function () {
        console.log("error in createMovie")
      }

    })
  },

  createReview: function () {
    $.ajax({
      method: "POST",
      url: "api/reviews",
      dataType: "json",
      data: movie,
      success: function (reviews) {console.log(review)},
      error: function () {
        console.log("error in createReview")
      }

    })
  }

};

module.exports = ApiUtil;
