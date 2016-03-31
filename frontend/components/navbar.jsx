var React = require('react');

var Navbar = React.createClass({

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

            <li>
              <button>SIGN UP
              </button>
            </li>

            <li>
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
