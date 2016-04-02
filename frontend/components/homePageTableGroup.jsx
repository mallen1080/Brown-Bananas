var React = require('react');
var HomePageTable = require('./homePageTable');
var MovieStore = require('../stores/movieStore');

var HomePageTableGroup = React.createClass({

  render: function () {
    return (
      <div className="home-page-tables group">
        <div className="home-page-tables-leftcol">
          <HomePageTable
          title="NEW TO THEATERS"
          movies={MovieStore.homePageMovies().newest_in_theaters} />

          <HomePageTable
          title="TOP BOX OFFICE"
          movies={MovieStore.homePageMovies().top_rated_theaters} />
        </div>

        <div className="home-page-tables-rightcol">
          <HomePageTable
          title="RECENT DVD RELEASE"
          movies={MovieStore.homePageMovies().newest_on_dvd} />

          <HomePageTable
          title="TOP RENTALS"
          movies={MovieStore.homePageMovies().top_rated_dvd} />
        </div>
      </div>
    );
  }

});

module.exports = HomePageTableGroup;
