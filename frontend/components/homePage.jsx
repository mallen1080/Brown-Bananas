var React = require('react');
var MovieStore = require('../stores/movieStore');
var HomePageTableGroup = require('./homePageTableGroup');
var HomePageRecommended = require('./homePageRecommended');
var HomePageCarousel = require('./homePageCarousel');


var HomePage = React.createClass({

  render: function () {
    return (
      <div className="home-page-content">
        <HomePageCarousel />
        <HomePageTableGroup />
        <HomePageRecommended />
      </div>
    );
  }

});

module.exports = HomePage;
