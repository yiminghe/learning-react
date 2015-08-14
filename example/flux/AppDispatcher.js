
const Dispatcher = require('flux').Dispatcher;

class AppDispatcher extends Dispatcher {
  handleViewAction(action) {
    this.dispatch({
      type: 'view_action',
      action: action,
    });
  }
}

module.exports = new AppDispatcher();
