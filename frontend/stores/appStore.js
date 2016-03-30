var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');

var AppStore = new Store(AppDispatcher);

module.exports = AppStore;
