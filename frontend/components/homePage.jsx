var React = require('react');
var MovieStore = require('../stores/movieStore');
var HomePageTableGroup = require('./homePageTableGroup');
var HomePageRecommended = require('./homePageRecommended');

var HomePage = React.createClass({

  render: function () {
    return (
      <div className="home-page-content">
        <HomePageTableGroup />
        <HomePageRecommended />
      </div>
    );
  }

});

module.exports = HomePage;
