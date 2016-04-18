var React = require('react');
var MovieStore = require('../stores/movieStore');

var ShowPageTrailer = React.createClass({

  getInitialState: function () {
    return { currentMovie: {} };
  },

  componentDidMount: function () {
    this.movieListener = MovieStore.addListener(this._movieChange);
  },

  componentWillUnmount: function () {
    this.movieListener.remove();
  },

  _movieChange: function () {
    this.setState({ currentMovie: MovieStore.currentMovie() });
  },

  render: function () {
    return (
      <div className="movie-trailer-container">
        <iframe src={this.state.currentMovie.trailer_url}
        width="760" height="425"></iframe>
      </div>
    );
  }

});

module.exports = ShowPageTrailer;
