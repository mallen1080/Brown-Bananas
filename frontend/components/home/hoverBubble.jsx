var React = require('react');
var AppActions = require('../../actions/appActions');

var HoverBubble = React.createClass({

  displayTrailer: function (e) {
    e.preventDefault();
    AppActions.displayTrailerModal(this.props.movie.trailer_url);
  },

  render: function () {
    var movie = this.props.movie;
    var link = "#/movies/" + movie.id;
    var banana = movie.rating.percentage > 59 ?
      "fresh_banana.png" : "brown_banana.png";
    var actors = movie.actors.map(function (actor, i) {
      return <p key={i}>{actor}</p>;
    });
    var hoverKlass = this.props.show ? "table-hover-content" : "hide";

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
        <div className="trailer-button">
          <button onClick={this.displayTrailer}>► Play Trailer</button>
        </div>
      </div>
    );
  }

});

module.exports = HoverBubble;
