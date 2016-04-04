var React = require('react');
var MovieStore = require('../stores/movieStore');
var ShowPageSidebar = require('./showPageSidebar');

var ShowPage = React.createClass({

  render: function () {

    return (
    <div className="show-page-main">
      <div className="show-page-sidebar">

      </div>
    </div>
    );

  }

});

// <ShowPageSidebar />
module.exports = ShowPage;
