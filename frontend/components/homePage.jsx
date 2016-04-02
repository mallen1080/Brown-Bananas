var React = require('react');
var MovieStore = require('../stores/movieStore');
var HomePageTableGroup = require('./homePageTableGroup');

var HomePage = React.createClass({

  render: function () {
    return (
      <div className="home-page-content">
        <HomePageTableGroup />
      </div>
    );
  }

});

module.exports = HomePage;
