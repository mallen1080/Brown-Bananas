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
    if (e.target.className == "modal trailer") {
    AppActions.displayTrailerModal("");
    }
  },

  render: function () {
    var classNm = this.state.link ? "modal trailer" : "hide";
    var link = this.state.link;
    if (link) { link += "?rel=0&showinfo=0&autohide=1&autoplay=1"; }

    return (
      <div className={classNm} onClick={this._hidePage}>
        <div className="video-container">
          <iframe src={link} width="670" height="425"></iframe>
        </div>
      </div>
    );
  }

});

module.exports = TrailerModal;
