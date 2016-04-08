var React = require('react');
var SearchStore = require('../stores/searchStore');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var ApiUtil = require('../util/apiUtil');

var BrowsePage = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function () {
    return {
      browseResults: [],
      minRating: 0,
      maxRating: 100,
      "1": true,
      "2": true,
      "3": true,
      "4": true,
      "5": true,
      "6": true,
      "7": true };
  },

  componentDidMount: function () {
    SearchStore.addListener(this.updateBrowseResults);
    ApiUtil.browseMovies({ query: this.state });
  },

  updateBrowseResults: function () {
    this.setState({ browseResults: SearchStore.movieBrowseResults() });
  },

  submitForm: function (e) {
    var query = $.extend(true, {}, this.state);
    delete query.browseResults;
    e.preventDefault();
    ApiUtil.browseMovies({ query: query });
  },

  render: function () {

    var browseResults = this.state.browseResults.map(function (movie, i) {
      return <li key={i}>{movie.title}</li>;
    });

    return (
      <div className="browse-page">
        <form className="browse-form">
          <h2>BROWSE MOVIES</h2>
          <div className="browse-ratings">
            <label>Min Rating:</label>
            <input type="text" valueLink={this.linkState('minRating')} />

            <label>Max Rating:</label>
            <input type="text" valueLink={this.linkState('maxRating')} />
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
          </div>

          <div className="form-submit">
            <button onClick={this.submitForm}>Submit</button>
          </div>

          </form>
          
          <ul>
            {browseResults}
          </ul>

      </div>

    );
  }


});

module.exports = BrowsePage;
