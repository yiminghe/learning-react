const React = require('react');
var consolePolyfill = `
window.process = {
            env: {}
        };
(function(global) {
            'use strict';
            global.console = global.console || {};
            var con = global.console;
            var prop, method;
            var empty = {};
            var dummy = function() {};
            var properties = 'memory'.split(',');
            var methods = ('assert,clear,count,debug,dir,dirxml,error,exception,group,' +
                'groupCollapsed,groupEnd,info,log,markTimeline,profile,profiles,profileEnd,' +
                'show,table,time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn').split(',');
            while (prop = properties.pop())
                if (!con[prop]) con[prop] = empty;
            while (method = methods.pop())
                if (!con[method]) con[method] = dummy;
        })(typeof window === 'undefined' ? this : window);
`;

var app=`
require('./index');
`;

class Page extends React.Component {
  render() {
    return (<html>
    <head>
      <script dangerouslySetInnerHTML={{__html: consolePolyfill}}/>
      <script
        src="https://a.alipayobjects.com/??es5-shim/4.0.5/es5-shim.js,es5-shim/4.0.5/es5-sham.js,html5shiv/3.7.2/src/html5shiv.js"/>
      <script
        src="/node_modules/rc-server/node_modules/modulex/build/modulex-debug.js?nowrap"/>
    </head>
    <body>
    <div id="__react-content" dangerouslySetInnerHTML={{__html: this.props.content}}/>
    <script dangerouslySetInnerHTML={{__html: this.props.script}}/>
    <script dangerouslySetInnerHTML={{__html: app}}/>
    </body>
    </html>);
  }
}

Page.propTypes = {
  content: React.PropTypes.string,
  script: React.PropTypes.string,
};

module.exports = Page;
