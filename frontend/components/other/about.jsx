var React = require('react');

var AboutPage = React.createClass({

  render: function () {

    return (
      <div className="about-page">
        <h1>ABOUT BROWN BANANAS</h1>
        <p>Brown Bananas is a movie review application inspired by <a href="http://www.rottentomatoes.com">
          Rotten Tomatoes</a>.  It was build using Ruby on Rails on the back-end and
          React.js on the front-end.

        </p>
      </div>
    );
  }

});

module.exports = AboutPage;
