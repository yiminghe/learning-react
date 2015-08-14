

const assign = require('object-assign');
let user = {
  name: 'init',
};
const AppDispatcher = require('./AppDispatcher');
const UserStore = assign({}, require('events').EventEmitter.prototype, {
  getUser() {
    return user;
  },
  addChangeListener(callback) {
    this.on('change', callback);
  },
});
AppDispatcher.register((payload) => {
  const action = payload.action;
  if (action.actionType === 'update_user') {
    user = action.user;
    UserStore.emit('change');
  }
});
module.exports = UserStore;
