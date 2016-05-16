var React = require('react');
var MovieStore = require('../../stores/movieStore');
var HomePageTableItem = require('./homePageTableItem');

var HomePageTable = React.createClass({

  tableRow: function (movie) {
    var link = "#/movies/" + movie.id;
    var date = movie.on_dvd_parse || movie.in_theaters_parse;
    var banana = movie.rating.percentage > 59 ?
      "fresh_banana.png" : "brown_banana.png";

    return (
      <tr key={movie.id}>
        <td className="left-col">
            <span>
              <span className="rating-img"><img src={banana} /></span>
              <span className="percentage">{movie.rating.percentage}</span>
            </span>
        </td>
        <td className="middle-col"><a href={link}>{movie.title}</a></td>
        <td className="right-col">{date}</td>
      </tr>
    );
  },

  render: function () {
    var that = this;
    var tableRows = this.props.movies.map(function (movie) {
      return <HomePageTableItem movie={movie} key={movie.id}/>;
    });

    return (
      <div className={this.props.klass}>
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
