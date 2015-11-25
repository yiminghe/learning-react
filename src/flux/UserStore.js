import assign from 'object-assign';
import AppDispatcher from './AppDispatcher';
import events from 'events';
let user = {
  name: 'init',
};
const UserStore = assign({}, events.EventEmitter.prototype, {
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
export default UserStore;
