var React = require('react');
var AppStore  = require('../stores/appStore');
var AppActions = require('../actions/appActions');

var TrailerModal = React.createClass({

  getInitialState: function () {
    return { link: "" };
  },

  componentDidMount: function () {
    this.display = AppStore.addListener(this._onChange);
  },

  componentWillUnmount: function () {
    this.display.remove();
  },

  _onChange: function () {
    this.setState({ link: AppStore.trailerModal() });
  },

  _hidePage: function (e) {
    if (e.target.className == "session-page") {
    AppActions.displayTrailerModal("");
    }
  },

  render: function () {
    var classNm = this.state.link ? "session-page" : "session-page hide";

    return (
      <div className={classNm} onClick={this._hidePage}>
        <div className="video-container">
          <iframe src={this.state.link} width="670" height="425"></iframe>
        </div>
      </div>
    );
  }


});

module.exports = TrailerModal;
