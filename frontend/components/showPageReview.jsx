var React = require('react');
var MovieStore = require('../stores/movieStore');
var ReviewForm = require('./reviewForm');
var Paginate = require('react-paginate');
var ApiUtil = require('../util/apiUtil');

var ShowPageReview = React.createClass({

  getInitialState: function () {
    return { currentMovie: {}, page: 1 };
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

  handlePageClick: function (data) {
    this.setState({ page: data.selected });
    ApiUtil.fetchSingleMovie(
      this.state.currentMovie.id,
      data.selected + 1
    );
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

        <div className="review-paginate">
          <Paginate previousLabel={"previous"}
                     nextLabel={"next"}
                     breakLabel={<a href="">...</a>}
                     pageNum={movie.review_page_count}
                     marginPagesDisplayed={2}
                     pageRangeDisplayed={5}
                     clickCallback={this.handlePageClick}
                     containerClassName={"pagination group"}
                     subContainerClassName={"pages pagination"}
                     activeClassName={"active"} />
        </div>

        <ReviewForm />
      </div>
    );
  }

});

module.exports = ShowPageReview;
