var React = require('react');
var CarouselMovie = require('./carouselMovie');
var MovieStore = require('../stores/movieStore');
var Slider = require('react-slick');


var HomePageCarousel = React.createClass({

  render: function () {
    var movies = MovieStore.homePageMovies().top_rated_theaters.slice(0,7);
    var carMovies = movies.map(function (movie, i) {
      return <CarouselMovie key={i} movie={movie} />;
    });

    var settings = {
      dots: true,
      autoplay: true,
      autoplaySpeed: 4000,
      speed: 1000
    };
    return (
      <div className="top">
        <div className='carousel-container group'>
          <Slider {...settings}>
            {carMovies}
          </Slider>
        </div>
      </div>
    );
  }

});

module.exports = HomePageCarousel;
