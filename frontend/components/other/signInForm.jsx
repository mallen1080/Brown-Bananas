var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var ApiUtil = require('../../util/apiUtil');
var AppStore = require('../../stores/appStore');
var AppActions = require('../../actions/appActions');

var SignInForm = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function () {
    return {
      username: "",
      password: "",
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
      hide: AppStore.signInHide(),
      errors: AppStore.errors(),
      password: ""
   });
  },

  _hidePage: function (e) {
    var klass = e.target.className;
    if (klass === "modal" || klass === "exit-button") {
    AppActions.displaySignIn(false);
    AppStore.resetErrors();
    }
  },

  _switchModals: function () {
    AppActions.displaySignIn(false);
    AppActions.displaySignUp(true);
  },

  _submitForm: function (guest, e) {
    e.preventDefault();
    if (guest === "guest") {
      ApiUtil.signInUser({ user:
        { username: "guest", password: "password"}});
    } else if (guest === "admin") {
      ApiUtil.signInUser({ user:
        { username: "admin", password: "yellow"}});
    } else {
      ApiUtil.signInUser({ user: this.state });
    }
  },

  render: function () {
    var classNm = this.state.hide ?
      "hide" : "modal";
    var errors = this.state.errors.map(function (error, i) {
      return <p key={i}>{error}</p>;
    });

    return(
      <div className={classNm} onClick={this._hidePage}>
        <div className="new-session-form">
          <div className="form-header group">
            <h4>LOG IN</h4>
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

              <div className="switch-modal">
                <p><span>Dont have an account? </span>
                  <span onClick={this._switchModals}>
                    Sign up here
                  </span>
                </p>
              </div>

              <div className="form-submit">
                <button onClick={this._submitForm.bind(this, false)}>Log In</button>
              </div>

              <div className="form-submit guest">
                <button onClick={this._submitForm.bind(this, "guest")}>Log in as Guest</button>
              </div>

              <div className="form-submit admin">
                <button onClick={this._submitForm.bind(this, "admin")}>Log in as Admin</button>
              </div>

              <div className="facebook">
                <a href="/auth/facebook">
                  <span>f</span>Log in with Facebook</a>
              </div>

            </form>
          </div>
        </div>
      </div>
    );
  }

});
// <img src="http://www.catholicinfertilityjourney.com/wp-content/uploads/2016/04/facebook-logo.png" />

module.exports = SignInForm;
