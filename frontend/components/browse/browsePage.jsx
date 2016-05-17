var React = require('react');
var SearchStore = require('../../stores/searchStore');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var ApiUtil = require('../../util/apiUtil');
var ReactSlider = require('react-slider');

var BrowsePage = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function () {

    var theaters = this.props.location.query.release === "theaters";
    var genre = this.props.location.query.genre;

    return {
      browseResults: [],
      theaters: theaters,
      dvd: !theaters,
      minRating: 0,
      maxRating: 100,
      "1": genre === "1" || !genre,
      "2": genre === "2" || !genre,
      "3": genre === "3" || !genre,
      "4": genre === "4" || !genre,
      "5": genre === "5" || !genre,
      "6": genre === "6" || !genre,
      "7": genre === "7" || !genre };
  },

  componentDidMount: function () {
    this.browseListener = SearchStore.addListener(this.updateBrowseResults);
    ApiUtil.browseMovies({ query: this.state });
  },

  componentWillUnmount: function () {
    this.browseListener.remove();
  },

  updateBrowseResults: function () {
    this.setState({ browseResults: SearchStore.movieBrowseResults() });
  },

  setRelease: function (release) {
    if (release === "theaters") {
      this.setState({ theaters: true, dvd: false });
    } else {
      this.setState({ theaters: false, dvd: true });
    }
  },

  _setGenres: function (val) {
    this.setState({
      "1": val,
      "2": val,
      "3": val,
      "4": val,
      "5": val,
      "6": val,
      "7": val });
  },

  _ratingChange: function (e) {
    this.setState({ minRating: e[0], maxRating: e[1] });
  },

  browseResults: function () {
    return this.state.browseResults.map(function (movie, i) {
      var link = "#/movies/" + movie.id;
      var banana = movie.rating.percentage > 59 ?
        "fresh_banana.png" : "brown_banana.png";

      return (
        <div className="rec-list-item" key={movie.id}>
          <a href={link}>
            <div className="rec-img-container">
              <img src={movie.image_url} />
              </div>
              <p className="browse-title">{movie.title}</p>
              <span>
                <span className="rating-img"><img src={banana} /></span>
                <span className="percentage">{movie.rating.percentage}</span>
              </span>
              <p className="browse-genre">{movie.genre}</p>
          </a>
        </div>
      );
    });
  },

  submitForm: function (e) {
    e.preventDefault();
    var query = $.extend(true, {}, this.state);
    delete query.browseResults;
    ApiUtil.browseMovies({ query: query });
  },

  render: function () {
    var theaters = this.state.theaters ? "checked" : "";
    var dvd = this.state.dvd ? "checked" : "";

    return (
      <div className="browse-page">
        <div className="browse-header">
          <h2>BROWSE MOVIES</h2>
        </div>

        <form className="browse-form">

            <div className="browse-release">
              <label>In Theaters:
              <input type="radio"
                name="browse"
                defaultChecked={theaters}
                onClick={this.setRelease.bind(this, "theaters")} />
              </label>

              <label>On DVD:
              <input type="radio"
                name="browse"
                defaultChecked={dvd}
                onClick={this.setRelease.bind(this, "dvd")} />
              </label>
            </div>

            <div className="browse-ratings">
              <label>Bananameter: </label>
              <label className="percentage">{this.state.minRating}</label>
              <label className="percentage"> - {this.state.maxRating}</label>

              <ReactSlider defaultValue={[0,100]}
                withBars
                onChange={this._ratingChange}/>
            </div>

          <div className="browse-genres">
            <label>Action:
            <input type="checkbox" checkedLink={this.linkState('1')} />
            </label>

            <label>Animation:
            <input type="checkbox" checkedLink={this.linkState('2')} />
            </label>

            <label>Comedy:
            <input type="checkbox" checkedLink={this.linkState('3')} />
            </label>

            <label>Documentary:
            <input type="checkbox" checkedLink={this.linkState('4')} />
            </label>

            <label>Drama:
            <input type="checkbox" checkedLink={this.linkState('5')} />
            </label>

            <label>Horror:
            <input type="checkbox" checkedLink={this.linkState('6')} />
            </label>

            <label>Sci-Fi:
            <input type="checkbox" checkedLink={this.linkState('7')} />
            </label>

            <label className="set-genre"
              onClick={this._setGenres.bind(this, true)}>Select All</label>
            <label className="set-genre"
              onClick={this._setGenres.bind(this, false)}>Clear All</label>
          </div>

          <div className="form-submit">
            <button onClick={this.submitForm}>Search</button>
          </div>

          </form>

          <div className="browse-results group">
            {this.browseResults()}
          </div>

      </div>

    );
  }

});

module.exports = BrowsePage;
