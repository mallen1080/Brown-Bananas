var React = require('react');
var MovieStore = require('../../stores/movieStore');

var HomePageRecommended = React.createClass({

  recommendedList: function () {
    var theaterList = MovieStore.homePageMovies().top_rated_theaters.slice(0,2);
    var dvdList = MovieStore.homePageMovies().top_rated_dvd.slice(0,3);
    var list = theaterList.concat(dvdList);

    return (
      list.map(function (movie, i) {
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
    return (
      <div className="recommended group">
        <h1>CERTIFIED FRESH PICKS</h1>
        <div className="recommended-panel group">
          <div className="recommended-logo">
            <div className="rec-logo-container">
              <img src="fresh_banana.png" />
            </div>
            <p>Movies are Certified Fresh based on their reviews since their theater release.
            Fresh Bananas are those that receive a rating of 60% or higher. The following
            movies are the top rated in theaters and on DVD in the last year.</p>
          </div>
          <div className="recommended-list group">
            {this.recommendedList()}
          </div>
        </div>
      </div>
    );

  }


});

module.exports = HomePageRecommended;
