var React = require('react');
var CarouselMovie = require('./carouselMovie');
var MovieStore = require('../stores/movieStore');

var HomePageCarousel = React.createClass({

  render: function () {
    var movie = MovieStore.homePageMovies().top_rated_theaters[0];

    return <CarouselMovie movie={movie} />;
  }

});

module.exports = HomePageCarousel;
