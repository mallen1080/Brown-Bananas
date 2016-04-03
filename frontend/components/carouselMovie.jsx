var React = require('react');
var MovieStore = require('../stores/movieStore');

var CarouselMovie = React.createClass({

  render: function () {
    var banana = this.props.movie.rating.percentage > 59 ? "fresh_banana.png" : "brown_banana.png";

    return (
      <div className="carousel-movie">
        <div className="carousel-movie-desc group">
          <div className="carousel-img-container">
            <img src={this.props.movie.image_url} />
          </div>
          <div className="carousel-movie-info">
            <h2>{this.props.movie.title}</h2>
            <div className="carousel-movie-info-contents group">
              <div className="carousel-movie-info-rating">
                <img src={banana} />
                <p className="percentage">{this.props.movie.rating.percentage}</p>
              </div>
              <div className="carousel-movie-info-table">
                <table>
                  <tbody>
                    <tr>
                      <td>Lead Actor</td><td>{this.props.movie.actors[0]}</td>
                    </tr>
                    <tr>
                      <td>Supporting Actor</td><td>{this.props.movie.actors[1]}</td>
                    </tr>
                    <tr>
                      <td>Director</td><td>{this.props.movie.director}</td>
                    </tr>
                    <tr>
                      <td>Genre</td><td>{this.props.movie.genre}</td>
                    </tr>
                    <tr>
                      <td>In Theaters</td><td>{this.props.movie.in_theaters_parse}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="carousel-movie-cons">
          <h3>CRITICS CONSENSUS</h3>
          <p>{this.props.movie.consensus}</p>
        </div>
      </div>
    );
  }

});

module.exports = CarouselMovie;
