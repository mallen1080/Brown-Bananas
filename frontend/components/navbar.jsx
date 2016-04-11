var React = require('react');
var AppActions = require('../actions/appActions');
var AppStore = require('../stores/appStore');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var SearchStore = require('../stores/searchStore');
var MovieStore = require('../stores/movieStore');
var PropTypes = React.PropTypes;

var Navbar = React.createClass({
  mixins: [LinkedStateMixin],
  contextTypes: {
    router: PropTypes.object.isRequired
  },

  getInitialState: function () {
    return {
      currentUser: AppStore.currentUser(),
      movieSearchResults: [],
      currentMovie : {}
     };
  },

  componentDidMount: function () {
    this.changeUser = AppStore.addListener(this._onChange);
    this.updateSearch = SearchStore.addListener(this._movieSearchChange);
    this.updateMovie = MovieStore.addListener(this._currentMovieChange);
    this.clearSearch = $(document).click(function () {
      this.setState({ movieSearchResults: [] });
    }.bind(this));
  },

  componentWillUnmount: function () {
    this.changeUser.remove();
    this.updateSearch.remove();
    this.updateMovie.remove();
    this.clearSearch.remove();
  },

  _onChange: function () {
    this.setState({ currentUser: AppStore.currentUser() });
  },

  _movieSearchChange: function () {
    this.setState({ movieSearchResults: SearchStore.movieSearchResults() });
  },

  _currentMovieChange: function () {
    this.setState({ currentMovie: MovieStore.currentMovie() });
  },

  _signedIn: function () {
    return !!this.state.currentUser.username;
  },

  displaySignIn: function () {
    AppActions.displaySignIn(true);
  },

  displaySignUp: function () {
    AppActions.displaySignUp(true);
  },

  getRandom: function () {
    var router = this.context.router;
    ApiUtil.fetchRandomMovie(function (id) {
      router.push("/movies/" + id);
    });
  },

  _search: function (e) {
    if (e.target.value.length > 2) {
      ApiUtil.searchMovies({ movie: e.target.value });
    } else {
      this.setState({ movieSearchResults: [] });
    }
  },

  _searchResultList: function () {
    if (this.state.movieSearchResults.length > 0) {
      this.state.movieSearchResults.unshift(
        {id: 100000, title: "Movie", year: "release year"}
      );
    }
    return this.state.movieSearchResults.map(function (movie) {
      var link = "#/movies/" + movie.id;
      return (
        <li key={ movie.id }>
          <a href={link}>{movie.title} ({movie.year})</a>
        </li>
      );
    });
  },

  render: function () {
    var message, button1Text, button2Text,
      button1Action, button2Action, button1Class, adminAdd, adminEdit;
    if (this._signedIn()) {
      message = <p>{"Welcome, " + this.state.currentUser.username}</p>;
      button1Text = "RANDOM";
      button1Action = this.getRandom;
      button2Text = "LOG OUT";
      button2Action = ApiUtil.signOutUser;
    } else {
      message = <p>Sign Up to Leave Your Review on Hundreds of Movies!</p>;
      button1Text = "SIGN UP";
      button1Action = this.displaySignUp;
      button2Text = "LOG IN";
      button2Action = this.displaySignIn;
    }

    if (this.state.currentUser.username === "admin") {
      adminAdd = <div className="admin-buttons">
        <a href="#/movies/new">Add A Movie</a></div>;
    }

    if (this.state.currentUser.username === "admin" &&
      $('div.showpage-content').length > 0) {
        var link = "#/movies/" + this.state.currentMovie.id + "/edit";
      adminEdit = <div className="admin-buttons">
        <a href={link}>Edit Movie</a></div>;
    }
    return (
      <div className="navbar group">
      <div className="welcome-message group">{message}{adminAdd}{adminEdit}</div>
        <div className="navbar-logo-search">
          <div className="navbar-logo">
            <a className="group" href="#"><h1>BROWN</h1><h1>BANANAS</h1></a>
          </div>
          <form className="navbar-search-form group">
            <div className="navbar-searchbox">
              <div className="searchbar-input">
                <input type="text"
                onChange={this._search}
                placeholder="Search movies..." />
                <ul className="navbar-search-results">{this._searchResultList()}</ul>
              </div>
            </div>
          </form>
        </div>

        <div className="navbar-buttons">
          <ul>
            <li>
              <a href="#/movies/browse">
                <button>BROWSE</button>
              </a>
            </li>

            <li className={button1Class} onClick={button1Action}>
              <button>{button1Text}</button>
            </li>

            <li onClick={button2Action}>
              <button>{button2Text}</button>
            </li>
          </ul>
        </div>
      </div>
    );
  }

});

module.exports = Navbar;
