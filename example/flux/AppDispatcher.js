'use strict';

var Dispatcher = require('flux').Dispatcher;
function AppDispatcher() {
  Dispatcher.apply(this, arguments);
}

AppDispatcher.prototype = Object.create(Dispatcher.prototype);

AppDispatcher.prototype.handleViewAction = function (action) {
  this.dispatch({
    type: 'view_action',
    action: action
  });
};

module.exports = new AppDispatcher();
