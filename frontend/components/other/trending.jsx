var React = require('react');

var Trending = React.createClass({

  render: function () {

    return (
      <div className="trending">
        <ul className="group">
          <li>TRENDING ON BB</li>
          <li>Jerry Mac</li>
          <li>The Godfather</li>
          <li>Yes Man</li>
          <li>Scarface</li>
        </ul>
      </div>
    );
  }

});

module.exports = Trending;
