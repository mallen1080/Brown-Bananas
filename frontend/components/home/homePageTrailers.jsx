var React = require('react');
var MovieStore = require('../../stores/movieStore');
var AppActions = require('../../actions/appActions');

var HomePageTrailers = React.createClass({

  _trailerComp: function (movie) {
    var url = movie.trailer_url;
    var imgId = movie.trailer_url.slice(30, 41);
    var imgLink = "http://img.youtube.com/vi/" + imgId + "/hqdefault.jpg";

    return (
      <div className="home-trailer">
        <div className="trailer-img-container" onClick={this._playTrailer.bind(this, url)}>
          <img src={imgLink} />
        </div>
        <div className="trailer-desc">
          <h6>{movie.title}</h6>
          <p>{movie.consensus}</p>
        </div>
      </div>
    );
  },

  _playTrailer: function (url) {
    AppActions.displayTrailerModal(url);
  },

  render: function () {

    return (
      <div className="home-trailers">
        <h3>TRAILERS</h3>
        <div className="home-trailers-group group">
          <div className="home-trailers-group-left">
            {this._trailerComp(MovieStore.homePageMovies().top_rated_dvd[3])}
          </div>

          <div className="home-trailers-group-right">
            {this._trailerComp(MovieStore.homePageMovies().top_rated_theaters[3])}
            {this._trailerComp(MovieStore.homePageMovies().top_rated_theaters[4])}
            {this._trailerComp(MovieStore.homePageMovies().top_rated_theaters[5])}
            {this._trailerComp(MovieStore.homePageMovies().top_rated_theaters[6])}
          </div>
        </div>
      </div>
    );
  }

});

module.exports = HomePageTrailers;
