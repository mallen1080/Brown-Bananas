var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var AppConstants = require('../constants/appConstants');

var AppStore = new Store(AppDispatcher);

var _signUpHide = true;
var _signInHide = true;

AppStore.signInHide = function () {
  return _signInHide;
};

AppStore.signUpHide = function () {
  return _signUpHide;
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
  }
};


module.exports = AppStore;
