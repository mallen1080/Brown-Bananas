var React = require('react');
var CarouselMovie = require('./carouselMovie');
var MovieStore = require('../stores/movieStore');
var Slider = require('react-slick');


var HomePageCarousel = React.createClass({

  render: function () {
    var movie = MovieStore.homePageMovies().top_rated_theaters[0];
    var movie2 = MovieStore.homePageMovies().top_rated_theaters[1];

    var settings = {
      dots: true
    };
    return (
      <div className='carousel-container group'>
        <Slider {...settings}>
        <CarouselMovie movie={movie} />
        <CarouselMovie movie={movie2} />
        </Slider>
      </div>
    );
  }

});

// <Slider {...settings}>
//
// <img src='http://placekitten.com/g/400/200' />
//   <img src='http://placekitten.com/g/400/200' />
// </Slider>


module.exports = HomePageCarousel;
