var React = require('react');
var AppActions = require('../actions/appActions');

var Navbar = React.createClass({

  displaySignIn: function () {
    AppActions.displaySignIn(true);
  },

  displaySignUp: function () {
    AppActions.displaySignUp(true);
  },

  render: function () {
    return (
      <div className="navbar group">
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
