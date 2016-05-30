var React = require('react');
var MovieStore= require('../../stores/movieStore');
var HomePageTable = require('../home/homePageTable');

var ShowPageSidebar = React.createClass({

  getInitialState: function () {
    return { selected: 0 };
  },

  _buttonClick: function (button) {
    this.setState({ selected: button });
  },

  tables: function () {
    return [
      <div className="sidebar-tables-theaters">
        <HomePageTable
        klass="showpage-table"
        title="NEW TO THEATERS"
        allLink="#/movies/browse?release=theaters"
        movies={MovieStore.homePageMovies().newest_in_theaters} />

        <HomePageTable
        klass="showpage-table"
        title="TOP BOX OFFICE"
        allLink="#/movies/browse?release=theaters&certified=true"
        movies={MovieStore.homePageMovies().top_rated_theaters} />
      </div>,

      <div className="sidebar-tables-dvd">
        <HomePageTable
        klass="showpage-table"
        title="RECENT DVD RELEASE"
        allLink="#/movies/browse?"
        movies={MovieStore.homePageMovies().newest_on_dvd} />

        <HomePageTable
        klass="showpage-table"
        title="TOP RENTALS"
        allLink="#/movies/browse?certified=true"
        movies={MovieStore.homePageMovies().top_rated_dvd} />
      </div>
    ];
  },

  render: function () {

    var leftKlass = "sidebar-left-button";
    var rightKlass = "sidebar-right-button";
    if (this.state.selected === 0) {
      leftKlass += " selected";
    } else {
      rightKlass += " selected";
    }

    return (
      <div className="showpage-sidebar-content">
        <div className="sidebar-buttons group">
          <div className={leftKlass}
            onClick={this._buttonClick.bind(this, 0)}>
            <p>IN THEATERS</p>
          </div>
          <div className={rightKlass}
            onClick={this._buttonClick.bind(this, 1)}>
            <p>DVD</p>
          </div>
        </div>
        {this.tables()[this.state.selected]}
      </div>
    );
  }

});

module.exports = ShowPageSidebar;
