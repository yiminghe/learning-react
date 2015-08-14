

const AppDispatcher = require('./AppDispatcher');

module.exports = {
  change() {
    setTimeout(() => {
      AppDispatcher.handleViewAction({
        user: {
          name: 'changed ' + Date.now(),
        },
        actionType: 'update_user',
      });
    }, 1000);
  },
};
