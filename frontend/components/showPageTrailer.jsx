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
    var link = this.state.currentMovie.trailer_url + "?rel=0&showinfo=0&autohide=1";
    return (
      <div className="movie-trailer-container">
        <iframe src={link}
        width="760" height="425"></iframe>
      </div>
    );
  }

});

module.exports = ShowPageTrailer;
