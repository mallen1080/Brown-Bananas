var React = require('react');
var SearchStore = require('../../stores/searchStore');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var AppActions = require('../../actions/appActions');
var ApiUtil = require('../../util/apiUtil');
var ReactSlider = require('react-slider');
var PropTypes = React.PropTypes;

var BrowsePage = React.createClass({
  mixins: [LinkedStateMixin],
  contextTypes: {
    router: PropTypes.object.isRequired
  },

  getInitialState: function () {

    var theaters = this.props.location.query.release === "theaters";
    var genre = this.props.location.query.genre;
    var minR = this.props.location.query.certified ? 60 : 0;

    return {
      browseResults: [],
      browseResultsType: 0,
      browseResultTotalCount: null,
      browseResultReturnCount: 25,
      theaters: theaters,
      dvd: !theaters,
      minRating: minR,
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

  componentWillReceiveProps: function (newProps) {
    // this.context.router.push("")
  },

  updateBrowseResults: function () {
    this.setState({
      browseResults: SearchStore.movieBrowseResults(),
      browseResultTotalCount: SearchStore.movieBrowseTotalCount(),
      browseResultReturnCount: SearchStore.movieBrowseReturnCount()
    });
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

  _moreResults: function () {
    this.submitForm();
  },

  _genreCount: function () {
    var genres = [this.state["1"], this.state["2"], this.state["3"],
      this.state["4"], this.state["5"], this.state["6"], this.state["7"]];
    var numGenres = genres.filter(function (genre) {
      return genre;
    }).length;
    if (numGenres === 7) { return "All"; }
    if (numGenres === 0) { return "None"; }
    return numGenres + " Selected";
  },

  browseResultsBlocks: function () {
    return this.state.browseResults.map(function (movie) {
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

  browseResultsList: function () {
    return this.state.browseResults.map(function (movie) {
      var link = "#/movies/" + movie.id;
      var banana = movie.rating.percentage > 59 ?
      "fresh_banana.png" : "brown_banana.png";
      var actors = movie.actors.join(", ");
      var description = movie.description.split("").slice(0,300).join("");
      if (movie.description.length > 300) { description += "..."; }

      return (
        <div className="browse-list-item group" key={movie.id}>
          <div className="rec-img-container"
            onClick={AppActions.displayTrailerModal.bind(this, movie.trailer_url)}>
            <img src={movie.image_url} />
          </div>
          <div className="browse-list-info">
            <a href={link}>
              <h3>{movie.title}</h3>
              <span>
                <span className="rating-img"><img src={banana} /></span>
                <span className="percentage">{movie.rating.percentage}</span>
              </span>
              <p>{actors}</p>
              <p>{movie.genre}</p>
              <p>Critics Consensus: {movie.consensus}</p>
              <p>Description: {description}</p>
            </a>
          </div>

        </div>
      );
    });
  },

  setBrowseResultsType: function (typeNum) {
    this.setState({ browseResultsType: typeNum });
  },

  submitForm: function (more, e) {
    e.preventDefault();
    var query = $.extend(true, {}, this.state);
    query.browseResultReturnCount = 25;
    if (more) {
      query.browseResultReturnCount += this.state.browseResultReturnCount;
    }

    delete query.browseResults;
    ApiUtil.browseMovies({ query: query });
  },

  render: function () {
    var theaters = this.state.theaters ? "checked" : "";
    var dvd = this.state.dvd ? "checked" : "";
    var rCount = this.state.browseResultReturnCount;
    var tCount = this.state.browseResultTotalCount;
    var counts = rCount ? <div className="browse-counts"> Showing {rCount} of {tCount}</div> :
      <div></div>;
    var moreClick = rCount == tCount ? function(){} : this.submitForm.bind(this, true);
    var moreClass = rCount == tCount ? "hide" : "browse-more";
    var styleButton1Klass = this.state.browseResultsType ? "browse-not-selected" : "browse-selected";
    var styleButton2Klass = !this.state.browseResultsType ? "browse-not-selected" : "browse-selected";

    return (
      <div className="browse-page">

        <form className="browse-form">
          <h2>BROWSE MOVIES</h2>
          <div className="group">
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
              <div className="browse-ratings-disp group">
                <label>{this.state.minRating}% - </label>
                <label>{this.state.maxRating}% ▾</label>
              </div>
              <div className="slider-container">
                <label>Bananameter</label>
                <ReactSlider defaultValue={[this.state.minRating,100]}
                  withBars
                  onChange={this._ratingChange}/>
              </div>
            </div>

            <div className="browse-genres">
              <div className="genres-label">
                Genres: {this._genreCount()} ▾
              </div>
              <div className="browse-genres-list">
                <div>
                  <label>
                  <input type="checkbox" checkedLink={this.linkState('1')} />
                  Action
                  </label>
                </div>

                <div>
                  <label>
                  <input type="checkbox" checkedLink={this.linkState('2')} />
                  Animation
                  </label>
                </div>

                <div>
                  <label>
                  <input type="checkbox" checkedLink={this.linkState('3')} />
                  Comedy
                  </label>
                </div>

                <div>
                  <label>
                  <input type="checkbox" checkedLink={this.linkState('4')} />
                  Documentary
                  </label>
                </div>

                <div>
                  <label>
                  <input type="checkbox" checkedLink={this.linkState('5')} />
                  Drama
                  </label>
                </div>

                <div>
                  <label>
                  <input type="checkbox" checkedLink={this.linkState('6')} />
                  Horror
                  </label>
                </div>

                <div>
                  <label>
                  <input type="checkbox" checkedLink={this.linkState('7')} />
                  Sci-Fi
                  </label>
                </div>

                <div>
                  <label className="set-genre"
                    onClick={this._setGenres.bind(this, true)}>Select All</label>
                  <label className="set-genre"
                    onClick={this._setGenres.bind(this, false)}>Clear All</label>
                </div>
              </div>
            </div>

          </div>

          <div className="form-submit">
            <button onClick={this.submitForm.bind(this, false)}>Apply</button>
          </div>

          </form>

          <div className="browse-counts-type group">
            {counts}
            <div className="browse-type-buttons">
              <button className={styleButton1Klass} onClick={this.setBrowseResultsType.bind(this, 0)}>⊞</button>
              <button className={styleButton2Klass} onClick={this.setBrowseResultsType.bind(this, 1)}>☰</button>
            </div>
          </div>

          <div className="browse-results group">
            {[this.browseResultsBlocks(),this.browseResultsList()][this.state.browseResultsType]}
          </div>

          <div className="more-container">
            <div className={moreClass} onClick={moreClick}>More</div>
          </div>

      </div>

    );
  }

});

module.exports = BrowsePage;
