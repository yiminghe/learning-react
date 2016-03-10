import createHistory from 'history/lib/createHashHistory';
import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Router, Link } from 'react-router';
import Animate from 'rc-animate';
import '../assets/react-router-slide/index.less';

const history = createHistory();

console.log(history);

const Header = React.createClass({
  propTypes: {
    location: PropTypes.object,
  },
  onClick(e) {
    e.preventDefault();
    history.goBack();
  },
  render() {
    return (<div
      style={{
        textAlign: 'center',
        position: 'relative',
        padding: 20,
      }}
    >
      {this.props.location.pathname === '/' ? null : <a
        style={{
          position: 'absolute',
          top: 20,
          left: 20,
        }}
        href="#"
        onClick={this.onClick}
      >back</a>}

      do not use native browser nav
    </div>);
  },
});

const Page1 = React.createClass({
  render() {
    return (<div style={{ padding: 100 }}>
      page1
      &nbsp;&nbsp;
      <Link to="/page2">goto page2</Link>
    </div>);
  },
});

const Page2 = React.createClass({
  render() {
    return (<div style={{ padding: 100 }}>
      page2
    </div>);
  },
});

const App = React.createClass({
  propTypes: {
    location: PropTypes.object,
    children: PropTypes.object,
  },
  render() {
    const location = this.props.location;
    var direction = location.action === 'POP' ? 'backward' : 'forward';
    return (<div
      style={{ width: 800, border: '1px solid red', margin: 'auto', overflow: 'hidden' }}
    >
      <Header location={this.props.location}/>
      <div style={{ position: 'relative' }}>
        <Animate transitionAppear={false} transitionName={`rr-slide-horizontal-${direction}`}>
          <div key={location.pathname}>{this.props.children}</div>
        </Animate>
      </div>
    </div>);
  },
});

const rootRoutes = [{
  path: '/',
  component: App,
  indexRoute: {
    component: Page1,
  },
  childRoutes: [{
    path: 'page2',
    component: Page2,
  }],
}];

ReactDOM.render(<Router>{rootRoutes}</Router>, document.getElementById('__react-content'));
