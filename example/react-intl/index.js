'use strict';

var React = require('react');
var ReactIntl = require('react-intl');
var IntlMixin = ReactIntl.IntlMixin;
var FormattedMessage = ReactIntl.FormattedMessage;


var Component = React.createClass({
  mixins: [IntlMixin],
  render() {
    return <FormattedMessage
      message={this.getIntlMessage('user.info')}
      name="Test"
      count={10000}
      time = {new Date()}
    />;
  }
});

var App = React.createClass({
  mixins: [IntlMixin],
  render() {
    return <p>
      <Component />
    </p>;
  }
});

var locales = [
  {
    locales: ['en-US'],
    messages: {
      user: {
        info: 'your name: {name}，login count: {count, number}，current login time: {time, date,full}'
      }
    }
  },
  {
    locales: ['zh-CN'],
    messages: {
      user: {
        info: '你的名字是 {name}，登陆 {count, number} 次，当前登陆时间 {time, date,full}'
      }
    }
  },
  {
    locales: ['ja-JP'],
    messages: {
      user: {
        info: 'xxxxx {name}，xx {count, number}，xxxx {time, date,full}'
      }
    }
  }
];

var apps = locales.map(function (locale) {
  return <App key={locale.locales.join(',')} {...locale}/>;
});


React.render(<div>{apps}</div>, document.getElementById('__react-content'));
