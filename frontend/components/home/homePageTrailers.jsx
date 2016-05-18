var React = require('react');
var MovieStore = require('../../stores/movieStore');
var AppActions = require('../../actions/appActions');

var HomePageTrailers = React.createClass({

  _trailerComp: function (movie) {
    var url = movie.trailer_url;
    var imgId = movie.trailer_url.slice(30, 41);
    var imgLink = "http://img.youtube.com/vi/" + imgId + "/mqdefault.jpg";

    return (
      <div className="home-trailer">
        <div className="trailer-img-container" onClick={this._playTrailer.bind(this, url)}>
          <img src={imgLink} />
          <h6>TRAILER</h6>
        </div>
        <div className="trailer-desc">
          <h5>{movie.title}</h5>
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
            {this._trailerComp(MovieStore.homePageMovies().top_rated_theaters[8])}
            {this._trailerComp(MovieStore.homePageMovies().top_rated_theaters[6])}
            {this._trailerComp(MovieStore.homePageMovies().newest_on_dvd[6])}
            {this._trailerComp(MovieStore.homePageMovies().top_rated_theaters[4])}
          </div>
        </div>
      </div>
    );
  }

});

module.exports = HomePageTrailers;
