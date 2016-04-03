var React = require('react');
var MovieStore = require('../stores/movieStore');

var HomePageTable = React.createClass({

  tableRow: function (movie) {
    var link = "#/movies/" + movie.id;
    var date = movie.on_dvd_parse || movie.in_theaters_parse;
    return (
      <tr key={movie.id}>
        <td className="left-col"><span>{movie.rating.percentage}</span></td>
        <td className="middle-col"><a href={link}>{movie.title}</a></td>
        <td className="right-col">{date}</td>
      </tr>
    );
  },

  render: function () {
    var that = this;
    var tableRows = this.props.movies.map(function (movie) {
      return that.tableRow(movie);
    });

    return (
      <div className="home-page-table">
        <h2>{this.props.title}</h2>
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
