import flux from 'flux';
const Dispatcher = flux.Dispatcher;

class AppDispatcher extends Dispatcher {
  handleViewAction(action) {
    this.dispatch({
      type: 'view_action',
      action: action,
    });
  }
}

const dispatcher = new AppDispatcher();

export default dispatcher;
