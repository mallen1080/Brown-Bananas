var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var ApiUtil = require('../util/apiUtil');
var AppStore = require('../stores/appStore');
var AppActions = require('../actions/appActions');

var SignUpForm = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function () {
    return {
      username: "",
      password: "",
      genre: "Action",
      hide: true
    };
  },

    componentDidMount: function () {
      this.display = AppStore.addListener(this._changeDisplay);
    },

    componentWillUnmount: function () {
      this.display.remove();
    },

    _changeDisplay: function () {
      this.setState({ hide: AppStore.signUpHide() });
    },

    _hidePage: function (e) {
      var klass = e.target.className;
      if (klass === "user-page" || klass === "exit-button") {
      AppActions.displaySignUp(false);
      }
    },

  _submitForm: function () {
    ApiUtil.createUser(this.state);
  },

  _genreOptions: function () {
    var genres = ["Action", "Animation", "Comedy",
      "Documentary", "Drama", "Horror", "Sci-Fi"];

    genres = genres.map(function (genre, i) {
      return (
        <option key={i}>
          {genre}
        </option>
      );
    });
    return genres;
  },

  render: function () {
    var classNm = this.state.hide ? "user-page hide" : "user-page";

    return(
      <div className={classNm} onClick={this._hidePage}>
        <div className="new-user-form">
          <div className="form-header group">
            <h4>SIGN UP WITH USERNAME</h4>
            <button className="exit-button" onClick={this._hidePage}>x</button>
          </div>

          <div className="form-main">

            <p className="logo">BROWN BANANAS</p>

            <form>
              <div className="form-input group">
                <label>Username: </label>
                <input type="text" placeholder="username" valueLink={this.linkState('username')} />
              </div>

              <div className="form-input group">
              <label>Password: </label>
              <input type="password" placeholder="password" valueLink={this.linkState('password')} />
              </div>

              <div className="form-input group">
              <label>Favorite Genre: </label>
              <select valueLink={this.linkState('genre')}>
                {this._genreOptions()}
              </select>
              </div>

              <div className="form-submit">
                <button onClick={this._submitForm}>Sign Up</button>
              </div>

            </form>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = SignUpForm;
