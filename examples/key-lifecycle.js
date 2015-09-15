webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(190);


/***/ },

/***/ 180:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(9);


/***/ },

/***/ 190:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	__webpack_require__(191);

/***/ },

/***/ 191:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(180);
	var Component = __webpack_require__(192);
	
	var Test = React.createClass({
	  displayName: 'Test',
	
	  render: function render() {
	    var props = this.props;
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(Component, { key: props.key1, id: props.id1 }),
	      React.createElement(Component, { key: props.key2, id: props.id2 })
	    );
	  }
	});
	
	var test = React.render(React.createElement(Test, { id1: 'id1', id2: 'id2', key1: 'key1', key2: 'key2' }), document.body);
	
	setTimeout(function () {
	  console.log('*******************************');
	  test.setProps({
	    id1: 'id11',
	    id2: 'id2',
	    key1: 'key11',
	    key2: 'key2'
	  });
	}, 1000);

/***/ },

/***/ 192:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(180);
	
	var Component = React.createClass({
	  displayName: 'Component',
	
	  propTypes: {
	    id: React.PropTypes.string
	  },
	
	  getInitialState: function getInitialState() {
	    console.log(this.props.id + ' getInitialState');
	    return {};
	  },
	
	  componentWillMount: function componentWillMount() {
	    console.log(this.props.id + ' componentWillMount');
	  },
	
	  componentDidMount: function componentDidMount() {
	    console.log(this.props.id + ' componentDidMount');
	  },
	
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    console.log(this.props.id + ' componentWillReceiveProps ' + nextProps.id);
	  },
	
	  shouldComponentUpdate: function shouldComponentUpdate() {
	    console.log(this.props.id + ' shouldComponentUpdate');
	    return 1;
	  },
	
	  componentWillUpdate: function componentWillUpdate() {
	    console.log(this.props.id + ' componentWillUpdate');
	  },
	
	  componentDidUpdate: function componentDidUpdate() {
	    console.log(this.props.id + ' componentDidUpdate');
	  },
	
	  componentWillUnmount: function componentWillUnmount() {
	    console.log(this.props.id + ' componentWillUnmount');
	  },
	
	  render: function render() {
	    console.log(this.props.id + ' render');
	    return React.createElement('div', this.props);
	  }
	});
	
	module.exports = Component;

/***/ }

});
//# sourceMappingURL=key-lifecycle.js.map