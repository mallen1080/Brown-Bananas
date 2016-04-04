var React = require('react');

var ShowPageInfo = React.createClass({

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

    if (this.state.currentMovie.title) {
      var movie = this.state.currentMovie;
      var banana = movie.rating.percentage > 59 ? "fresh_banana.png" : "brown_banana.png";
      var total = movie.rating.up + movie.rating.down;

      return (
        <div className="movie-info group">
          <div className="show-img-container">
            <img src={movie.image_url} />
          </div>

          <div className="show-info-info">
            <div className="show-rating">
              <h4>BANANAMETER</h4>
              <div className="show-rating-rating group">
                <span><img src={banana} /></span>
                <span><p className="percentage">{movie.rating.percentage}</p></span>
              </div>
              <div className="show-rating-counts">
                <p>Reviews Counted: {total}</p>
                <p>Fresh: {movie.rating.up}</p>
                <p>Brown: {movie.rating.down}</p>
              </div>
            </div>

            <div className="show-cons">
              <p>Critics Consensus: </p>
              <p>{movie.consensus}</p>
            </div>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }


});

module.exports = ShowPageInfo;
