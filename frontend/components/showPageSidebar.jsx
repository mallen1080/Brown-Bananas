var React = require('react');
var MovieStore= require('../stores/movieStore');
var HomePageTable = require('./homePageTable');

var ShowPageSidebar = React.createClass({

  getInitialState: function () {
    return { selected: 0 };
  },

  _buttonClick: function (button) {
    this.setState({ selected: button });
  },

  render: function () {

    var tables = [
      <div className="sidebar-tables-theaters">
        <HomePageTable
        title="NEW TO THEATERS"
        movies={MovieStore.homePageMovies().newest_in_theaters} />

        <HomePageTable
        title="TOP BOX OFFICE"
        movies={MovieStore.homePageMovies().top_rated_theaters} />
      </div>,

      <div className="sidebar-tables-dvd">
        <HomePageTable
        title="RECENT DVD RELEASE"
        movies={MovieStore.homePageMovies().newest_on_dvd} />

        <HomePageTable
        title="TOP RENTALS"
        movies={MovieStore.homePageMovies().top_rated_dvd} />
      </div>
    ];

    return (
      <div className="sidebar-container">
        <div className="sidebar-buttons">
          <div className="sidebar-left-button"
            onClick={this._buttonClick.bind(this, 0)}>
            <p>IN THEATERS</p>
          </div>
          <div className="sidebar-right-button"
            onClick={this._buttonClick.bind(this, 1)}>
            <p>DVD</p>
          </div>
        </div>
        {tables[this.state.selected]}
      </div>
    );
  }

});

module.exports = ShowPageSidebar;
