var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var ApiUtil = require('../util/apiUtil');
var MovieStore = require('../stores/movieStore');
var AppStore = require('../stores/appStore');
var MovieActions = require('../actions/movieActions');
var PropTypes = React.PropTypes;

var MovieForm = React.createClass({
  mixins: [LinkedStateMixin],
  contextTypes: {
    router: PropTypes.object.isRequired
  },

  getInitialState: function () {

    return {
      title: "",
      image_url: "",
      trailer_url: "",
      genre: "Action",
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
    if (newProps.params.movieId) {
      ApiUtil.fetchSingleMovie(newProps.params.movieId);
    } else {
      MovieActions.clearCurrentMovie();
    }
  },

  _onMovieFetch: function () {
    var currentMovie = MovieStore.currentMovie();
    if (currentMovie.actors) {
      currentMovie.actor1 = currentMovie.actors[0];
      currentMovie.actor2 = currentMovie.actors[1];
      delete currentMovie.actors;
      delete currentMovie.reviewCounts;
      delete currentMovie.reviews;
    }
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

  _submitForm: function (method, movieId, e) {
    e.preventDefault();
    var newMovie = { movie: $.extend(true, {}, this.state) };

    if (!newMovie.movie.on_dvd) {
      delete newMovie.movie.on_dvd;
    }
    delete newMovie.movie.actor1;
    delete newMovie.movie.actor2;
    newMovie.movie.actors = [this.state.actor1, this.state.actor2];

    var router = this.context.router;
    if (AppStore.currentUser().username === "admin") {
    ApiUtil.createOrEditMovie(newMovie, method, movieId, (function (id) {
      router.push("/movies/" + id);
    }));
    }
  },

  _deleteMovie: function (e) {
    e.preventDefault();
    ApiUtil.deleteMovie(this.props.params.movieId);
  },

  render: function () {
    var movieId = this.props.params.movieId;
    var heading = movieId ? "Edit Movie" : "Add a Movie";
    var verb = movieId ? "PATCH" : "POST";
    var deletee = movieId ?
      <button onClick={this._deleteMovie}>Delete</button> : <div></div>;

    return(
      <div className="movie-form-page">
        <form className="movie-form-form">
          <h1>{heading}</h1>

          <div className="form-input group">
          <label>Title: </label>
          <input type="text" valueLink={this.linkState('title')} />
          </div>

          <div className="form-input group">
          <label>Image URL: </label>
          <input type="text" valueLink={this.linkState('image_url')} />
          </div>

          <div className="form-input group">
          <label>Trailer URL: </label>
          <input type="text" valueLink={this.linkState('trailer_url')}
            placeholder="https://www.youtube.com/watch?v=s7EdQ4FqbhY"/>
          </div>

          <div className="form-input group">
          <label>Genre: </label>
          <select valueLink={this.linkState('genre')}>
            {this._genreOptions()}
          </select>
          </div>

          <div className="form-input group">
          <label>Theater Release: </label>
          <input type="date" valueLink={this.linkState('in_theaters')} />
          </div>

          <div className="form-input group">
          <label>DVD Release (optional): </label>
          <input type="date" valueLink={this.linkState('on_dvd')} />
          </div>

          <div className="form-input group">
          <label>Director: </label>
          <input type="text" valueLink={this.linkState('director')} />
          </div>

          <div className="form-input group">
          <label>Actor: </label>
          <input type="text" valueLink={this.linkState('actor2')} />
          </div>

          <div className="form-input group">
          <label>Actor: </label>
          <input type="text" valueLink={this.linkState('actor1')} />
          </div>

          <div className="form-input group">
          <label>Critics Consensus: </label>
          <textarea valueLink={this.linkState('consensus')} />
          </div>

          <div className="form-input group">
          <label>Description: </label>
          <textarea valueLink={this.linkState('description')} />
          </div>

          <div className="form-submit">
            <button onClick={this._submitForm.bind(this, verb, movieId)}>Submit</button>
            {deletee}
          </div>

        </form>
      </div>
    );
  }

});

module.exports = MovieForm;
