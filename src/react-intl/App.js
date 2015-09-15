const React = require('react');
const ReactIntl = require('react-intl');
const IntlMixin = ReactIntl.IntlMixin;
const Component = require('./Component');

const App = React.createClass({
  mixins: [IntlMixin],
  render() {
    return (<p>
      <Component />
    </p>);
  },
});

module.exports = App;
