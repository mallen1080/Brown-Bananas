var React = require('react');
var MovieStore = require('../../stores/movieStore');

var BrowseDropdown = React.createClass({

  _genreList: function (theaters) {
    var link = "#/movies/browse?";
    if (theaters) { link += "release=theaters&"; }

    return (
      ["Action",
      "Animation",
      "Comedy",
      "Documentary",
      "Drama",
      "Horror",
      "Sci-Fi"].map(function (genre, i) {
        return (
          <li key={i}>
            <a href={link + "genre=" + (i + 1)}>{genre}</a>
          </li>
        );
      })
    );
  },

  render: function () {
    var link = "#/movies/browse";

    return (
      <div className="browse-dropdown group">
        <div className="browse-dropdown-col">
          <h3><a href={link + "?release=theaters"}>MOVIES IN THEATERS</a></h3>
          <ul>
            {this._genreList(true)}
          </ul>
        </div>

        <div className="browse-dropdown-col">
          <h3><a href={link}>MOVIES ON DVD</a></h3>
          <ul>
            {this._genreList(false)}
          </ul>
        </div>

        <div className="browse-dropdown-certified">
          <h3>CERTIFIED FRESH PICKS</h3>
        </div>
      </div>
    );
  }

});

module.exports = BrowseDropdown;
