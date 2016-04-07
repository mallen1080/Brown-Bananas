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
        <form>
          <label>Min Rating:</label>
          <input type="text" valueLink={this.linkState('minRating')} />

          <label>Max Rating:</label>
          <input type="text" valueLink={this.linkState('maxRating')} />

          <label>Action:</label>
          <input type="checkbox" checkedLink={this.linkState('1')} />

          <label>Animation:</label>
          <input type="checkbox" checkedLink={this.linkState('2')} />

          <label>Comedy:</label>
          <input type="checkbox" checkedLink={this.linkState('3')} />

          <label>Documentary:</label>
          <input type="checkbox" checkedLink={this.linkState('4')} />

          <label>Drama:</label>
          <input type="checkbox" checkedLink={this.linkState('5')} />

          <label>Horror:</label>
          <input type="checkbox" checkedLink={this.linkState('6')} />

          <label>Sci-Fi:</label>
          <input type="checkbox" checkedLink={this.linkState('7')} />

          <button onClick={this.submitForm}>Submit</button>

          <ul>
            {browseResults}
          </ul>

        </form>
      </div>

    );
  }


});

module.exports = BrowsePage;
