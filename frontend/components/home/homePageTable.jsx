var React = require('react');
var MovieStore = require('../../stores/movieStore');
var HomePageTableItem = require('./homePageTableItem');

var HomePageTable = React.createClass({

  render: function () {
    var that = this;
    var tableRows = this.props.movies.map(function (movie) {
      return <HomePageTableItem movie={movie} key={movie.id}/>;
    });

    return (
      <div className={this.props.klass}>
        <div className="table-header">
          <h2>{this.props.title}</h2><a href={this.props.allLink}>See All</a>
        </div>
        <table>
          <tbody>
            {tableRows}
          </tbody>
        </table>
      </div>
    );

  }

});

module.exports = HomePageTable;
