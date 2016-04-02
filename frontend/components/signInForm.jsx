var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var ApiUtil = require('../util/apiUtil');
var AppStore = require('../stores/appStore');
var AppActions = require('../actions/appActions');

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
      errors: AppStore.errors()
   });
  },

  _hidePage: function (e) {
    var klass = e.target.className;
    if (klass === "session-page" || klass === "exit-button") {
    AppActions.displaySignIn(false);
    AppStore.resetErrors();
    }
  },

  _submitForm: function () {
    ApiUtil.signInUser({ user: this.state });
  },

  render: function () {
    var classNm = this.state.hide ? "session-page hide" : "session-page";
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

            <p className="logo"><img src="logo.png" /></p>

            <form>

              <div className="errors">{errors}</div>
              <div className="form-input group">
                <label>Username: </label>
                <input type="text" placeholder="username" valueLink={this.linkState('username')} />
              </div>

              <div className="form-input group">
              <label>Password: </label>
              <input type="password" placeholder="password" valueLink={this.linkState('password')} />
              </div>

              <div className="form-submit">
                <button onClick={this._submitForm}>Sign In</button>
              </div>

            </form>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = SignInForm;
