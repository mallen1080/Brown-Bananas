var React = require('react');
var AppActions = require('../actions/appActions');

var HomePageTableItem = React.createClass({

  getInitialState: function () {
    return { hover: false , show: false };
  },

  changeShow: function (hover) {
    var that = this;
    if (!hover) {
      this.setState({ show: false });
      window.clearTimeout(window.hoverCheck);
    } else {
      window.hoverCheck = window.setTimeout(function () {
        if (that.state.hover) {
          that.setState({ show: true });
        }
      }, 600);
    }
    that.setState({ hover: hover });
  },

  displayTrailer: function (e) {
    e.preventDefault();
    AppActions.displayTrailerModal(this.props.movie.trailer_url);
  },

  hoverComponent: function () {
    var movie = this.props.movie;
    var link = "#/movies/" + movie.id;
    var banana = movie.rating.percentage > 59 ?
      "fresh_banana.png" : "brown_banana.png";
    var actors = movie.actors.map(function (actor, i) {
      return <p key={i}>{actor}</p>;
    });
    var hoverKlass = this.state.show ? "table-hover-content" : "hide";

    return (
      <div className={hoverKlass}>
        <div className="triangle"></div>
        <div className="table-hover-top group">
          <div className="table-hover-img-container">
            <img src={movie.image_url} />
          </div>
          <div className="table-hover-top-info">
            <h4><a href={link}>{movie.title}</a></h4>
            <div className="table-hover-rating group">
              <span className="rating-img"><img src={banana} /></span>
              <span className="percentage">{movie.rating.percentage}</span>
            </div>
            <div className="table-hover-actors">
              {actors}
            </div>
          </div>
        </div>
        <p>
          <span>Critics Consensus: </span>
          <span>{movie.consensus}</span>
        </p>
        <div className="form-submit">
          <button onClick={this.displayTrailer}>Play Trailer</button>
        </div>
      </div>
    );
  },

  render: function () {
    var movie = this.props.movie;
    var link = "#/movies/" + movie.id;
    var date = movie.on_dvd_parse || movie.in_theaters_parse;
    var banana = movie.rating.percentage > 59 ?
      "fresh_banana.png" : "brown_banana.png";

    return (
      <tr onMouseEnter={this.changeShow.bind(this, true)}
        onMouseLeave={this.changeShow.bind(this, false)}>
        <td className="left-col">
            <span>
              <span className="rating-img"><img src={banana} /></span>
              <span className="percentage">{movie.rating.percentage}</span>
            </span>
        </td>
        <td className="middle-col"><a href={link}>{movie.title}</a></td>
        <td className="right-col">{date}</td>
        <td className="table-hover">{this.hoverComponent()}</td>
      </tr>
    );
  }

});

module.exports = HomePageTableItem;
