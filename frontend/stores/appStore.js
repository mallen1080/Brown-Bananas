var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var AppConstants = require('../constants/appConstants');

var AppStore = new Store(AppDispatcher);

var _signUpHide = true;
var _signInHide = true;
var _errors = [];
var _currentUser = {};

AppStore.signInHide = function () {
  return _signInHide;
};

AppStore.signUpHide = function () {
  return _signUpHide;
};

AppStore.errors = function () {
  return _errors;
};

AppStore.resetErrors = function () {
  _errors = [];
};

AppStore.currentUser = function () {
  return $.extend(true, {}, _currentUser);
};

AppStore.signedIn = function () {
  return !!_currentUser.username;
};

AppStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case AppConstants.DISPLAY_SIGN_IN:
      if (!_signInHide || _signUpHide) {
      _signInHide = !payload.display;
      this.__emitChange();
      }
      break;
    case AppConstants.DISPLAY_SIGN_UP:
      if (!_signUpHide || _signInHide) {
      _signUpHide = !payload.display;
      this.__emitChange();
      }
      break;
    case AppConstants.DISPLAY_ERRORS:
      _errors = payload.errors;
      this.__emitChange();
      break;
    case AppConstants.CURRENT_USER_RECEIVED:
      _currentUser = payload.user;
      _signInHide = true;
      _signUpHide = true;
      this.__emitChange();
      break;
    case AppConstants.SIGN_OUT_USER:
      _currentUser = null;
      this.__emitChange();
    }
  };



module.exports = AppStore;
