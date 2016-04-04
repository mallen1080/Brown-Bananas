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
        klass="showpage-table"
        title="NEW TO THEATERS"
        movies={MovieStore.homePageMovies().newest_in_theaters} />

        <HomePageTable
        klass="showpage-table"
        title="TOP BOX OFFICE"
        movies={MovieStore.homePageMovies().top_rated_theaters} />
      </div>,

      <div className="sidebar-tables-dvd">
        <HomePageTable
        klass="showpage-table"
        title="RECENT DVD RELEASE"
        movies={MovieStore.homePageMovies().newest_on_dvd} />

        <HomePageTable
        klass="showpage-table"
        title="TOP RENTALS"
        movies={MovieStore.homePageMovies().top_rated_dvd} />
      </div>
    ];

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
        {tables[this.state.selected]}
      </div>
    );
  }

});

module.exports = ShowPageSidebar;
