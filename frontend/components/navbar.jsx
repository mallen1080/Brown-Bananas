var React = require('react');
var AppActions = require('../actions/appActions');
var AppStore = require('../stores/appStore');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var SearchStore = require('../stores/searchStore');
var PropTypes = React.PropTypes;

var Navbar = React.createClass({
  mixins: [LinkedStateMixin],
  contextTypes: {
    router: PropTypes.object.isRequired
  },

  getInitialState: function () {
    return {
      currentUser: AppStore.currentUser(),
      movieSearchResults: []
     };
  },

  componentDidMount: function () {
    this.changeUser = AppStore.addListener(this._onChange);
    this.updateSearch = SearchStore.addListener(this._movieSearchChange);
  },

  componentWillUnmount: function () {
    this.changeUser.remove();
  },

  _onChange: function () {
    console.log(AppStore.currentUser());
    this.setState({ currentUser: AppStore.currentUser() });
  },

  _movieSearchChange: function () {
    this.setState({ movieSearchResults: SearchStore.movieSearchResults() });
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
    return this.state.movieSearchResults.map(function (movie) {
      var link = "#/movies/" + movie.id;
      return (
        <li key={ movie.id }>
          <a href={link}>{movie.title} ({movie.year})</a>
        </li>
      );
    });
  },

  _browse: function (e) {
    e.preventDefault();
    alert("Coming soon!");
  },

  render: function () {
    var message, button1Text, button2Text,
      button1Action, button2Action, button1Class;

    if (this._signedIn()) {
      message = "Welcome, " + this.state.currentUser.username;
      button1Text = "RANDOM";
      button1Action = this.getRandom;
      button2Text = "LOG OUT";
      button2Action = ApiUtil.signOutUser;
    } else {
      message = "Sign Up to Leave Reviews on Hundreds of Movies!";
      button1Text = "SIGN UP";
      button1Action = this.displaySignUp;
      button2Text = "LOG IN";
      button2Action = this.displaySignIn;
    }
    return (
      <div className="navbar group">
      <div className="welcome-message">{message}</div>
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
              <button onClick={this._browse}>BROWSE</button>
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

// <img src="logo.png" />

module.exports = Navbar;
