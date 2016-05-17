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

  _recommendedList: function () {
    var recList = MovieStore.homePageMovies().top_rated_theaters.slice(0,2);
    recList.push(MovieStore.homePageMovies().top_rated_dvd[0]);
    
    return (
      recList.map(function (movie, i) {
        var link = "#/movies/" + movie.id;
        var heading = i < 2 ? "IN THEATERS" : "ON DVD";
        var banana = movie.rating.percentage > 59 ?
          "fresh_banana.png" : "brown_banana.png";

        return (
          <div className="rec-list-item" key={movie.id}>
            <a href={link}>
            <p>{heading}</p>
              <div className="rec-img-container">
                <img src={movie.image_url} />
                </div>
                <span>
                  <span className="rating-img"><img src={banana} /></span>
                  <span className="percentage">{movie.rating.percentage}</span>
                </span>
                <p>{movie.title}</p>
            </a>
          </div>
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
          <div className="recommended-list group">
            {this._recommendedList()}
          </div>
        </div>
      </div>
    );
  }

});

module.exports = BrowseDropdown;
