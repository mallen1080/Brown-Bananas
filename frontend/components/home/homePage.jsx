var React = require('react');
var HomePageCarousel = require('./homePageCarousel');
var HomePageTableGroup = require('./homePageTableGroup');
var HomePageRecommended = require('./homePageRecommended');
var HomePageRecents = require('./homePageRecents');
var HomePageTrailers = require('./homePageTrailers');

var HomePage = React.createClass({

  render: function () {
    return (
      <div className="home-page-content">
        <div className="top group">
          <HomePageCarousel />
          <HomePageRecents />
        </div>
        <HomePageTableGroup />
        <HomePageTrailers />
        <HomePageRecommended />
      </div>
    );
  }

});

module.exports = HomePage;
