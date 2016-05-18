var React = require('react');
var MovieStore = require('../../stores/movieStore');

var HomePageRecents = React.createClass({

  _recentMovie: function (movie, title) {
    var link = "#/movies/";
    var imgId = movie.trailer_url.slice(30, 41);
    var imgLink1 = "http://img.youtube.com/vi/" + imgId + "/mqdefault.jpg";
    var imgLink2 = "http://img.youtube.com/vi/" + imgId + "/2.jpg";

    return (
      <div className="recent-container">
        <a href={link + movie.id}>
          <div className="recent-img">
            <img src={imgLink1} />
            <img src={imgLink2} />
          </div>
          <div className="recent-desc">
            <h3>{title}</h3>
            <p>{movie.title}</p>
          </div>
        </a>
      </div>
    );
  },

  render: function () {

    var theater = MovieStore.homePageMovies().newest_in_theaters[0];
    var dvd = MovieStore.homePageMovies().newest_on_dvd[0];

    return (
      <div className="home-page-recents group">

        {this._recentMovie(theater, "NEW IN THEATERS")}
        {this._recentMovie(dvd, "NEW ON DVD")}

      </div>
    );
  }


});

module.exports = HomePageRecents;
