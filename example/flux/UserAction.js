var AppDispatcher = require('./AppDispatcher');

module.exports = {
  change: function () {
    setTimeout(function () {
      AppDispatcher.handleViewAction({
        user: {
          name: 'changed ' + Date.now()
        },
        actionType:'update_user'
      });
    }, 1000);
  }
};