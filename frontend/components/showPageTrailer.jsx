var React = require('react');
var MovieStore = require('../stores/movieStore');

var ShowPageTrailer = React.createClass({

  getInitialState: function () {
    return { currentMovie: {} };
  },

  componentDidMount: function () {
    this.movieListener = MovieStore.addListener(this._onChange);
  },

  componentWillUnmount: function () {
    this.movieListener.remove();
  },

  _onChange: function () {
    this.setState({ currentMovie: MovieStore.currentMovie() });
  },

  render: function () {
    return (
      <div className="movie-trailer-container">
        <iframe src={this.state.currentMovie.trailer_url}
        width="640" height="360"></iframe>
      </div>
    );
  }

});

module.exports = ShowPageTrailer;
