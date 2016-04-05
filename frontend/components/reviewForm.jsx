var React = require('react');
var MovieStore = require('../stores/movieStore');

var ReviewForm = React.createClass({

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
      <div className="review-form group">
        <div className="review-form-left">
          <h3>ADD YOUR REVIEW</h3>
          <textarea placeholder="Add a Review (optional)" />
          <div className="review-form-editdelete group">

            <div className="review-edit">
              <button>Edit</button>
            </div>
            <div className="review-delete">
              <button>Delete</button>
            </div>
          </div>
        </div>

        <div className="review-form-right">
          <div className="review-form-up">UP</div>
          <div className="review-form-down">DOWN</div>
        </div>
      </div>
    );
  }

});

module.exports = ReviewForm;
