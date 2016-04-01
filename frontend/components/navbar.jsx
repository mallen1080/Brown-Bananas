var React = require('react');
var AppActions = require('../actions/appActions');
var AppStore = require('../stores/appStore');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var SearchStore = require('../stores/searchStore');

var Navbar = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function () {
    return { currentUser: AppStore.currentUser() };
  },

  componentDidMount: function () {
    this.changeUser = AppStore.addListener(this._onChange);
  },

  componentWillUnmount: function () {
    this.changeUser.remove();
  },

  _onChange: function () {
    this.setState({ currentUser: AppStore.currentUser() })
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

  _search: function (e) {
    if (e.target.value.length > 2) {
      ApiUtil.searchMovies({ movie: e.target.value })
    }
  },

  _searchResultList: function () {
    return SearchStore.movieSearchResults().map(function (movie) {
      return (
        <li key={ movie.id }>{movie.title}</li>
      )
    });
  },

  render: function () {
    var message, button1Text, button2Text,
      button1Action, button2Action, button1Class

    if (this._signedIn()) {
      message = "Welcome, " + this.state.currentUser.username;
      button1Text = "";
      button1Class = "new-hover";
      button2Text = "Sign Out";
      button2Action = ApiUtil.signOutUser;
    } else {
      message = "Sign Up to Leave Reviews on Hundreds of Movies!"
      button1Text = "Sign Up";
      button1Action = this.displaySignUp;
      button2Text = "Sign In";
      button2Action = this.displaySignIn;
    }
    return (
      <div className="navbar group">
      <div className="welcome-message">{message}</div>
        <div className="navbar-logo-search">
          <div className="navbar-logo">
            <a href="#">BROWN BANANAS</a>
          </div>
          <form className="navbar-search-form group">
            <div className="navbar-searchbox">
              <div className="searchbar-input">
                <input type="text"
                onChange={this._search}
                placeholder="Search movies..." />
                <button>Search</button>
              </div>
            </div>
          </form>
        </div>

        <div className="navbar-buttons">
          <ul>
            <li>
              <button>BROWSE</button>
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
