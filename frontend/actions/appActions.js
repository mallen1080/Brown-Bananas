var React = require('react');
var AppConstants = require('../constants/appConstants');
var AppDispatcher = require('../dispatcher/dispatcher');

var AppActions = {
  displaySignIn: function (display) {
    var action = {
      actionType: AppConstants.DISPLAY_SIGN_IN,
      display: display
    };
    AppDispatcher.dispatch(action);
  },

  displaySignUp: function (display) {
    var action = {
      actionType: AppConstants.DISPLAY_SIGN_UP,
      display: display
    };
    AppDispatcher.dispatch(action);
  },

  receiveErrors: function (errors) {
    var action = {
      actionType: AppConstants.DISPLAY_ERRORS,
      errors: errors
    };
    AppDispatcher.dispatch(action);
  },

  receiveCurrentUser: function (user) {
    var action = {
      actionType: AppConstants.CURRENT_USER_RECEIVED,
      user: user
    };
    AppDispatcher.dispatch(action);
  },

  signOutUser: function () {
    var action = {
      actionType: AppConstants.SIGN_OUT_USER
    };
    AppDispatcher.dispatch(action);
  }
};

module.exports = AppActions;
