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
    this.setState({ hide: AppStore.signInHide() });
  },

  _hidePage: function () {
    AppActions.displaySignIn(false);
  },

  _submitForm: function () {
    // ApiUtil.createUser(this.state);
  },

  render: function () {
    var classNm = this.state.hide ? "session-page hide" : "session-page";

    return(
      <div className={classNm}>
        <div className="new-session-form">
          <div className="form-header group">
            <h4>SIGN IN</h4>
            <button onClick={this._hidePage}>x</button>
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
