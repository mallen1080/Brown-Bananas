var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var ApiUtil = require('../util/apiUtil');
var MovieStore = require('../stores/movieStore');

var MovieForm = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function () {

    return {
      title: "",
      image_url: "",
      trailer_url: "",
      genre: "Action", //-----**CHANGE YOUTUBE URL IN CONTROLLER!!!!!**---
      in_theaters: "",
      on_dvd: "",
      director: "",
      actor1: "",
      actor2: "",
      description: "",
      consensus: ""
    };
  },

  componentDidMount: function () {
    this.listener = MovieStore.addListener(this._onMovieFetch);
    if (this.props.params.movieId) {
      ApiUtil.fetchSingleMovie(this.props.params.movieId);
    }
  },

  componentWillUnmount: function () {
    this.listener.remove();
  },

  componentWillReceiveProps: function (newProps) {
      ApiUtil.fetchSingleMovie(newProps.params.movieId);
  },

  _onMovieFetch: function () {
    var currentMovie = MovieStore.currentMovie();
    currentMovie.actor1 = currentMovie.actors[0];
    currentMovie.actor2 = currentMovie.actors[1];
    delete currentMovie.actors;
    delete currentMovie.reviewCounts;
    delete currentMovie.reviews;
    this.setState(currentMovie);
  },

  _genreOptions: function () {
    var genres = ["Action", "Animation", "Comedy",
      "Documentary", "Drama", "Horror", "Sci-Fi"];

    genres = genres.map(function (genre, i) {
      return (
        <option key={i}>
          {genre}
        </option>
      );
    });
    return genres;
  },

  _submitForm: function (method, movieId) {
    var newMovie = { movie: $.extend(true, {}, this.state) };

    if (!newMovie.movie.on_dvd) {
      delete newMovie.movie.on_dvd;
    }
    delete newMovie.movie.actor1;
    delete newMovie.movie.actor2;
    newMovie.movie.actors = [this.state.actor1, this.state.actor2];

    ApiUtil.createOrEditMovie(newMovie, method, movieId);
  },

  render: function () {
    var heading = this.props.params.movieId ? "Edit Movie" : "Add a Movie";
    var verb = this.props.params.movieId ? "PATCH" : "POST";
    var id = this.props.params.movieId;

    return(
      <form className="movie-form">
        <h1>{heading}</h1>
        <label>Title: </label>
        <input type="text" valueLink={this.linkState('title')} />
        <br />

        <label>Image URL: </label>
        <input type="text" valueLink={this.linkState('image_url')} />
        <br />

        <label>Trailer URL: </label>
        <input type="text" valueLink={this.linkState('trailer_url')} />
        <br />

        <label>Genre: </label>
        <select valueLink={this.linkState('genre')}>
          {this._genreOptions()}
        </select>
        <br />

        <label>Theater Release: </label>
        <input type="date" valueLink={this.linkState('in_theaters')} />
        <br />

        <label>DVD Release (optional): </label>
        <input type="date" valueLink={this.linkState('on_dvd')} />
        <br />

        <label>Director: </label>
        <input type="text" valueLink={this.linkState('director')} />
        <br />

        <label>Actor: </label>
        <input type="text" valueLink={this.linkState('actor2')} />
        <br />

        <label>Actor: </label>
        <input type="text" valueLink={this.linkState('actor1')} />
        <br />

        <label>Critics Consensus: </label>
        <textarea valueLink={this.linkState('consensus')} />
        <br />

        <label>Description: </label>
        <textarea valueLink={this.linkState('description')} />
        <br />

        <div className="movie-form-submit">
          <button onClick={this._submitForm.bind(this, verb, id)}>Submit</button>
        </div>

      </form>
    );
  }

});

module.exports = MovieForm;
