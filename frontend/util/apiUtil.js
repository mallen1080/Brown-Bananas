var MovieActions = require('../actions/movieActions');
var ReviewActions = require('../actions/reviewActions');
var AppActions = require('../actions/appActions');

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
      data: data,
      success: function (reviews) {console.log(review);},
      error: function () {
        console.log("error in createReview");
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
  }

};

module.exports = ApiUtil;
