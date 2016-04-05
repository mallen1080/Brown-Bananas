var React = require('react');
var MovieStore = require('../stores/movieStore');

var ShowPageReview = React.createClass({

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

  _reviewList: function () {
    var list = this.state.currentMovie.reviews;
    if (list) {
      return list.map(function (review, i) {
        var banana = review.value ? "fresh_banana.png" : "brown_banana.png";

        return (
          <div key={i} className="show-review">
            <div className="review-banana">
              <img src={banana} />
            </div>
            <div className="review-content group">
              <p>"{review.body}"</p>
              <div className="review-source">
                <div className="review-author">
                  <p>by: <span>{review.author}</span></p>
                </div>
                <div className="review-created">
                  <p>{review.created_date}</p>
                </div>
              </div>
            </div>
          </div>
        );
      });
    }
  },

  render: function () {
    var movie = this.state.currentMovie;

    return (
      <div className="showpage-reviews">
        <h2>REVIEWS FOR <span>{movie.title}</span></h2>
        <div className="review-list group">
          {this._reviewList()}
        </div>
      </div>
    );
  }

});

module.exports = ShowPageReview;
