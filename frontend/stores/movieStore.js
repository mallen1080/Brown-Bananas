var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');

var MovieStore = new Store(AppDispatcher);

module.exports = MovieStore;
