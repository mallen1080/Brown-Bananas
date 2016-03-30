var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');

var ReviewStore = new Store(AppDispatcher);

module.exports = ReviewStore;
