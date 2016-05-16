var React = require('react');
var ApiUtil = require('../../util/apiUtil');
var ShowPageSidebar = require('./showPageSidebar');
var ShowPageTrailer = require('./showPageTrailer');
var ShowPageInfo = require('./showPageInfo');
var ShowPageMoreInfo = require('./showPageMoreInfo');
var ShowPageReview = require('./showPageReview');

var ShowPage = React.createClass({

  componentDidMount: function () {
    ApiUtil.fetchSingleMovie(this.props.params.movieId);
  },

  componentWillReceiveProps: function (newProps) {
    ApiUtil.fetchSingleMovie(newProps.params.movieId);
  },

  render: function () {

    return (
    <div className="showpage-content group">
      <div className="showpage-sidebar">
        <ShowPageSidebar />
      </div>

      <div className="showpage-main">
        <ShowPageTrailer />
        <ShowPageInfo />
        <ShowPageMoreInfo />
        <ShowPageReview />
      </div>

    </div>
    );

  }

});

module.exports = ShowPage;
