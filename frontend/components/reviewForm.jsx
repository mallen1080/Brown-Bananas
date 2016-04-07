var React = require('react');
var MovieStore = require('../stores/movieStore');
var AppStore = require('../stores/appStore');
var AppActions = require('../actions/appActions');
var ApiUtil = require('../util/apiUtil');
var LinkedStateMixin = require('react-addons-linked-state-mixin');


var ReviewForm = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function () {
    return ({
      currentMovie: {},
      reviewBody: "",
      selectedButton: 0,
      loggedIn: AppStore.currentUser()
    });
  },

  componentDidMount: function () {
    this.movieListener = MovieStore.addListener(this._onChange);
    this.userListener = AppStore.addListener(this._userChange);
  },

  componentWillUnmount: function () {
    this.movieListener.remove();
    this.userListener.remove();
  },

  _onChange: function () {
    this.setState({ currentMovie: MovieStore.currentMovie() });
    if (MovieStore.currentMovie().user_review) {
    this.setState({
      reviewBody: MovieStore.currentMovie().user_review.body,
      selectedButton: MovieStore.currentMovie().user_review.value ? 1 : 2});
    } else {
      // this.setState({ reviewBody: "" });
    }
  },

  _userChange: function () {
    var movie = MovieStore.currentMovie().id;
    ApiUtil.fetchSingleMovie(movie);
    this.setState({loggedIn: AppStore.currentUser()});
  },

  _reviewButton: function (button) {
    this.setState({ selectedButton: button });
  },

  _deleteReview: function () {
    ApiUtil.deleteReview(this.state.currentMovie.user_review.id);
    this.setState({ selectedButton: 0 });
  },

  _createEditReview: function () {
    var review = {
      body: this.state.reviewBody,
      value: this.state.selectedButton === 1 ? true : false,
      movie_id: this.state.currentMovie.id
    };
    if (!this.state.loggedIn.username) {
      AppActions.displaySignIn(true);
    } else {
      if (this.state.currentMovie.user_review) {
        review.id = this.state.currentMovie.user_review.id;
        ApiUtil.editReview(review);
      } else if (this.state.selectedButton !== 0){
        ApiUtil.createReview(review);
      } else {
        alert("Select up or down to add a review!");
      }
    }
  },

  render: function () {
    var userReview = this.state.currentMovie.user_review;
    var editAddKlass, editAddContent, deleteKlass, body, selectedButton, header;
    var upKlass = "review-form-up";
    var downKlass = "review-form-down";

      if (this.state.selectedButton === 1) {
        upKlass += "-selected";
      } else if (this.state.selectedButton === 2){
        downKlass += "-selected";
      }
    if (userReview) {
      editAddContent = "Edit";
      header = "EDIT YOUR REVIEW";
    } else {
      editAddContent = "Submit";
      deleteKlass = "hide";
      header = "ADD YOUR REVIEW";
      body = "";
    }

    return (
      <div className="review-form group">
        <div className="review-form-left">
          <h3>{header}</h3>
          <textarea
            placeholder="Add a Review (optional)"
            valueLink={this.linkState('reviewBody')} />
          <div className="review-form-editdelete group">

            <div className={editAddKlass}>
              <button onClick={this._createEditReview}>{editAddContent}</button>
            </div>
            <div className={deleteKlass}>
              <button onClick={this._deleteReview}>Delete</button>
            </div>
          </div>
        </div>

        <div className="review-form-right">
          <div onClick={this._reviewButton.bind(this, 1)}
            className={upKlass}><img src="up.png" /></div>
          <div onClick={this._reviewButton.bind(this, 2)}
            className={downKlass}><img src="down.png" /></div>
        </div>
      </div>
    );
  }

});

module.exports = ReviewForm;
