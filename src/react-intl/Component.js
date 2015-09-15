const React = require('react');
const ReactIntl = require('react-intl');
const IntlMixin = ReactIntl.IntlMixin;
const FormattedMessage = ReactIntl.FormattedMessage;

const Component = React.createClass({
  mixins: [IntlMixin],
  render() {
    return (<FormattedMessage
      message={this.getIntlMessage('user.info')}
      name="Test"
      count={10000}
      time={new Date()}
      />);
  },
});

module.exports = Component;
