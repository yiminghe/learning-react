var assign = require('object-assign');
var user = {
  name: 'init'
};
var AppDispatcher = require('./AppDispatcher');
var UserStore = assign({}, require('events').EventEmitter.prototype, {
  getUser: function () {
    return user;
  },
  addChangeListener: function (callback) {
    this.on('change', callback);
  }
});
AppDispatcher.register(function (payload) {
  var action = payload.action;
  if (action.actionType === 'update_user') {
    user = action.user;
    UserStore.emit('change');
  }
});
module.exports = UserStore;

