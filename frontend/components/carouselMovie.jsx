var React = require('react');
var MovieStore = require('../stores/movieStore');

var CarouselMovie = React.createClass({

  render: function () {
    var movie = this.props.movie;
    var banana = movie.rating.percentage > 59 ?
      "fresh_banana.png" : "brown_banana.png";
    var link = "#/movies/" + movie.id;
    
    return (
      <div className="carousel-movie">
        <a href={link}>
          <div className="carousel-movie-desc group">
            <div className="carousel-img-container">
              <img src={movie.image_url} />
            </div>
            <div className="carousel-movie-info">
              <h2>{movie.title}</h2>
              <div className="carousel-movie-info-contents group">
                <div className="carousel-movie-info-rating">
                  <img src={banana} />
                  <p className="percentage">{movie.rating.percentage}</p>
                </div>
                <div className="carousel-movie-info-table">
                  <table>
                    <tbody>
                      <tr>
                        <td>Lead Actor</td><td>{movie.actors[0]}</td>
                      </tr>
                      <tr>
                        <td>Supporting Actor</td><td>{movie.actors[1]}</td>
                      </tr>
                      <tr>
                        <td>Director</td><td>{movie.director}</td>
                      </tr>
                      <tr>
                        <td>Genre</td><td>{movie.genre}</td>
                      </tr>
                      <tr>
                        <td>In Theaters</td><td>{movie.in_theaters_parse}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-movie-cons">
            <h3>CRITICS CONSENSUS</h3>
            <p>{movie.consensus}</p>
          </div>
        </a>
      </div>
    );
  }

});

module.exports = CarouselMovie;
