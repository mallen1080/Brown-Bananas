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
        <p>It allows an admin user to create, edit, or delete movies the UI.  To view this functionality,
          click the "Log in as Admin" button on the log in form.
        </p>
        <p>It also allows standard users to create, edit, or delete a single review, with optional text,
          per movie.  To view this, you can create an account with a username through the sign up form, or
          by clicking the "Log in as Guest" button on the log in form.
        </p>
        <p>The sum of the reviews, in total, determine each movies rating percentage.
          Movies with a rating of 60% or greater are considered to be "fresh"
          <span className="rating-img"><img src="fresh_banana.png" /></span> picks, and movies
          with a rating of less than 60% are considered to be "brown" or "rotten"
          <span className="rating-img"><img src="brown_banana.png" /></span>.
        </p>

      </div>
    );
  }

});

module.exports = AboutPage;
