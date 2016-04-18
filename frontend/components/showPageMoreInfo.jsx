var React = require('react');

var ShowPageMoreInfo = React.createClass({

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

    if (this.state.currentMovie.title) {
      var movie = this.state.currentMovie;

      return (
        <div className="movie-show-moreinfo">
          <h2>MORE INFO</h2>
          <h4>Critics Consensus:</h4>
          <p>{movie.consensus}</p>
          <h4>Description:</h4>
          <p>{movie.description}</p>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

});

module.exports = ShowPageMoreInfo;
