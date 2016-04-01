var React = require('react');
var AppActions = require('../actions/appActions');
var AppStore = require('../stores/appStore');

var Navbar = React.createClass({

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

  render: function () {
    if (this._signedIn()) {
    var message = "Welcome, " + this.state.currentUser.username;
    } else {
    var message = "Sign Up to Leave Reviews on Hundreds of Movies!"
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
                <input type="text" placeholder="Search movies..." />
                <button>Search</button>
              </div>
            </div>
          </form>
        </div>

        <div className="navbar-buttons">
          <ul>
            <li>
              <button>BROWSE
              </button>
            </li>

            <li onClick={this.displaySignUp}>
              <button>SIGN UP
              </button>
            </li>

            <li onClick={this.displaySignIn}>
              <button>SIGN IN
              </button>
            </li>
          </ul>
        </div>
      </div>
    );
  }

});

module.exports = Navbar;
