var React = require('react');

var Trending = React.createClass({

  render: function () {

    return (
      <div className="trending">
        <ul className="group">
          <li>TRENDING ON BB</li>
          <li><a href="#/movies/57">Gravity</a></li>
          <li><a href="#/movies/91">The Dark Knight</a></li>
          <li><a href="#/movies/155">Apocalypse Now</a></li>
          <li><a href="#/movies/152">The Matrix</a></li>
        </ul>
      </div>
    );
  }

});

module.exports = Trending;
