var React = require('react');

var ShowPageInfo = React.createClass({

  getInitialState: function () {
    return { currentMovie: {} };
  },

  componentDidMount: function () {
    this.movieListener = MovieStore.addListener(this._onChange);
  },

  componentWillUnmount: function () {
    this.movieListener.remove();
  },

  _onChange: function () {
    this.setState({ currentMovie: MovieStore.currentMovie() });
  },

  render: function () {

    if (this.state.currentMovie.title) {
      var movie = this.state.currentMovie;
      var banana = movie.rating.percentage > 59 ? "fresh_banana.png" : "brown_banana.png";
      var total = movie.rating.up + movie.rating.down;
      var dvd;
      if (movie.on_dvd) {
        dvd = (<tr>
          <td>On DVD</td><td>{movie.on_dvd_parse}</td>
        </tr>);
      }

      return (
        <div className="movie-info group">
          <div className="show-img-container">
            <img src={movie.image_url} />
          </div>

          <div className="show-info-info group">
            <div className="show-rating">
              <h4>BANANAMETER</h4>
              <div className="show-rating-rating group">
                <span><img src={banana} /></span>
                <span><p className="percentage">{movie.rating.percentage}</p></span>
              </div>
              <div className="show-rating-counts">
                <p>Reviews Counted: {total}</p>
                <p>Fresh: {movie.rating.up}</p>
                <p>Brown: {movie.rating.down}</p>
              </div>
            </div>

            <div className="show-info-titletable">
              <h3>{movie.title}</h3>
              <div className="show-info-table">
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
                    {dvd}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }


});

module.exports = ShowPageInfo;
