var MovieActions = require('../actions/movieActions');
var ReviewActions = require('../actions/reviewActions');
var AppActions = require('../actions/appActions');
var SearchActions = require('../actions/searchActions');

var ApiUtil = {

  fetchHomePageMovies: function (completion) {
    $.ajax({
      method: "GET",
      url: "api/movies",
      dataType: "json",
      success: function (movies) {
        MovieActions.homePageMoviesReceived(movies);
      },
      error: function () {
        console.log("error in fetchHomePageMovies");
      },
      complete: function () {
        completion && completion();
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

  fetchRandomMovie: function (callback) {
    $.ajax({
      method: "GET",
      url: "api/movies/random",
      dataType: "json",
      success: function (movie) {
        MovieActions.randomMovieReceived(movie);
      },
      error: function () {
        console.log("error in fetchRandomMovie");
      },
      complete: function (response) {
        callback(response.responseJSON.id);
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
        console.log("error in create or edit movie");
      }
    });
  },

  createReview: function (review) {
    $.ajax({
      method: "POST",
      url: "api/reviews",
      dataType: "json",
      data: {review: review},
      success: function (movie) {
        MovieActions.singleMovieReceived(movie);
      },
      error: function () {
        console.log("error in createReview");
      }
    });
  },

  editReview: function (review) {
    $.ajax({
      method: "PATCH",
      url: "api/reviews/" + review.id,
      dataType: "json",
      data: {review: review},
      success: function (movie) {
        MovieActions.singleMovieReceived(movie);
      },
      error: function () {
        console.log("error in editReview");
      }
    });
  },

  deleteReview: function (reviewId) {
    $.ajax({
      method: "DELETE",
      url: "api/reviews/" + reviewId,
      dataType: "json",
      success: function (movie) {
        MovieActions.singleMovieReceived(movie);
      },
      error: function () {
        console.log("error in deleteReview");
      }
    });
  },

  createUser: function (user) {
    $.ajax({
      method: "POST",
      url: "api/users",
      dataType: "json",
      data: user,
      success: function (user) {
        if (user.errors) {
          AppActions.receiveErrors(user.errors);
        } else {
          AppActions.receiveCurrentUser(user.user);
        }
      },
      error: function () {
        console.log("error in createUser");
      }
    });
  },

  signInUser: function (user) {
    $.ajax({
      method: "POST",
      url: "api/session",
      dataType: "json",
      data: user,
      success: function (user) {
        if (user.errors) {
          AppActions.receiveErrors(user.errors);
        } else {
          AppActions.receiveCurrentUser(user.user);
        }
      },
      error: function () {
        console.log("error in signInUser");
      }
    });
  },

  signOutUser: function () {
    $.ajax({
      method: "DELETE",
      url: "api/session",
      dataType: "json",
      success: function () {
        AppActions.signOutUser();
      },
      error: function () {
        console.log("error in signOutUser");
      }
    });
  },

  fetchCurrentUser: function (completion) {
    $.ajax({
      method: "GET",
      url: "api/session",
      dataType: "json",
      success: function (currentUser) {
        if (currentUser.username) {
          AppActions.receiveCurrentUser(currentUser);
        }
      },
      complete: function () {
        completion && completion();
      },
      error: function () {
        console.log("error in signOutUser");
      }
    });
  },

  searchMovies: function (params) {
    $.ajax({
      method: "GET",
      url: "api/searches",
      dataType: "json",
      data: params,
      success: function (movies) {
        SearchActions.receiveMovieSearchResults(movies);
      },
      error: function () {
        console.log("error in signOutUser");
      }
    });
  }


};

module.exports = ApiUtil;
