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
      hide: true,
      errors: []
    };
  },

    componentDidMount: function () {
      this.display = AppStore.addListener(this._onChange);
    },

    componentWillUnmount: function () {
      this.display.remove();
    },

    _onChange: function () {
      this.setState({
        hide: AppStore.signUpHide(),
        errors: AppStore.errors(),
        password: ""
       });

    },

    _hidePage: function (e) {
      var klass = e.target.className;
      if (klass === "modal" || klass === "exit-button") {
      AppActions.displaySignUp(false);
      AppStore.resetErrors();
      }
    },

    _switchModals: function () {
      AppActions.displaySignUp(false);
      AppActions.displaySignIn(true);
    },

  _submitForm: function (e) {
    e.preventDefault();
    ApiUtil.createUser({user: this.state });
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
    var classNm = this.state.hide ? "hide" : "modal";
    var errors = this.state.errors.map(function (error, i) {
      return <p key={i}>{error}</p>;
    });

    return(
      <div className={classNm} onClick={this._hidePage}>
        <div className="new-user-form">
          <div className="form-header group">
            <h4>SIGN UP WITH USERNAME</h4>
            <button className="exit-button" onClick={this._hidePage}>x</button>
          </div>

          <div className="form-main">

            <div className="modal-logo">
              <h1>BROWN</h1><h1>BANANAS</h1>
            </div>

            <form>
              <div className="errors">{errors}</div>
              <div className="form-input group">
                <label>Username: </label>
                <input type="text"
                placeholder="username"
                valueLink={this.linkState('username')} />
              </div>

              <div className="form-input group">
                <label>Password: </label>
                <input type="password"
                  placeholder="password"
                  valueLink={this.linkState('password')} />
              </div>

              <div className="form-input group">
                <label>Favorite Genre: </label>
                <select valueLink={this.linkState('genre')}>
                  {this._genreOptions()}
                </select>
              </div>

              <div className="switch-modal">
                <p><span>Already have an account? </span>
                  <span onClick={this._switchModals}>
                    Log in here
                  </span>
                </p>
              </div>

              <div className="form-submit">
                <button onClick={this._submitForm}>Sign Up</button>
              </div>

              <div className="facebook">
                <a href="/auth/facebook">Sign up with Facebook</a>
              </div>

            </form>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = SignUpForm;
