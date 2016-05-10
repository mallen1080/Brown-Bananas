var React = require('react');
var MovieStore = require('../stores/movieStore');

var HomePageRecents = React.createClass({

  render: function () {

    var theater = MovieStore.homePageMovies().newest_in_theaters[0];
    var dvd = MovieStore.homePageMovies().newest_on_dvd[0];

    return (
      <div className="home-page-recents group">

        <div className="recent-container">
          <div className="recent-img">
            <img src={theater.image_url} />
          </div>
          <div className="recent-desc">
            <h3>NEW IN THEATERS</h3>
            <p>{theater.title}</p>
          </div>
        </div>

        <div className="recent-container">
          <div className="recent-img">
            <img src={dvd.image_url} />
          </div>
          <div className="recent-desc">
            <h3>NEW ON DVD</h3>
            <p>{dvd.title}</p>
          </div>
        </div>

      </div>
    );
  }


});

module.exports = HomePageRecents;
