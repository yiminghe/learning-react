import AppDispatcher from './AppDispatcher';

export default {
  change() {
    setTimeout(() => {
      AppDispatcher.handleViewAction({
        user: {
          name: `changed ${Date.now()}`,
        },
        actionType: 'update_user',
      });
    }, 1000);
  },
};
