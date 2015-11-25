webpackJsonp([1,11],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(170);


/***/ },

/***/ 170:
/***/ function(module, exports) {

	'use strict';
	
	var _prevChildren, _nextChildren;
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var content = document.getElementById('__react-content');
	
	content.innerHTML = '\n<h2>diff children demo</h2>\n<div>\n<button id="action">change</button>\n</div>\n<div id="result"></div>\n';
	
	var result = document.getElementById('result');
	
	var tmp = document.createElement('div');
	
	function getNode(html) {
	  tmp.innerHTML = html;
	  return tmp.firstChild;
	}
	
	function removeNode(node) {
	  node.parentNode.removeChild(node);
	}
	
	function insertAtIndex(parent, child, index) {
	  var after = parent.childNodes[index] || null;
	  parent.insertBefore(child, after);
	}
	
	var node7 = {
	  key: '.7',
	  tag: 'div',
	  _mountIndex: 0
	};
	
	var node6 = {
	  key: '.6',
	  tag: 'div',
	  _mountIndex: 1
	};
	
	var node8 = {
	  key: '.8',
	  tag: 'div',
	  _mountIndex: 2
	};
	
	var node9 = {
	  key: '.9',
	  tag: 'div',
	  _mountIndex: 3
	};
	
	var prevChildren = (_prevChildren = {}, _defineProperty(_prevChildren, node7.key, node7), _defineProperty(_prevChildren, node6.key, node6), _defineProperty(_prevChildren, node8.key, node8), _defineProperty(_prevChildren, node9.key, node9), _prevChildren);
	
	var nodes = Object.keys(prevChildren).map(function (k) {
	  var node = prevChildren[k];
	  return '<' + node.tag + '>' + node.key + ' - ' + node.tag + '</' + node.tag + '>';
	});
	
	result.innerHTML = nodes.join('');
	
	var prevDOMChildNodes = result.childNodes;
	
	node7.dom = prevDOMChildNodes[0];
	node6.dom = prevDOMChildNodes[1];
	node8.dom = prevDOMChildNodes[2];
	node9.dom = prevDOMChildNodes[3];
	
	var newNode8 = {
	  key: '.8',
	  tag: 'p'
	};
	
	newNode8.dom = getNode('<' + newNode8.tag + '>' + newNode8.key + ' - ' + newNode8.tag + '</' + newNode8.tag + '>');
	
	var newNodeX = {
	  key: '.x',
	  tag: 'div'
	};
	
	newNodeX.dom = getNode('<' + newNodeX.tag + '>' + newNodeX.key + ' - ' + newNodeX.tag + '</' + newNodeX.tag + '>');
	
	var nextChildren = (_nextChildren = {}, _defineProperty(_nextChildren, node9.key, node9), _defineProperty(_nextChildren, node7.key, node7), _defineProperty(_nextChildren, newNode8.key, newNode8), _defineProperty(_nextChildren, newNodeX.key, newNodeX), _nextChildren);
	
	document.getElementById('action').onclick = function () {
	  document.getElementById('action').disabled = true;
	
	  var lastIndex = 0;
	  var nextIndex = 0;
	  var queue = [];
	  for (var name in nextChildren) {
	    if (!nextChildren.hasOwnProperty(name)) {
	      continue;
	    }
	    var prevChild = prevChildren && prevChildren[name];
	    var nextChild = nextChildren[name];
	    if (prevChild === nextChild) {
	      if (prevChild._mountIndex < lastIndex) {
	        queue.push({
	          type: 'move',
	          child: prevChild,
	          toIndex: nextIndex
	        });
	      }
	      lastIndex = Math.max(prevChild._mountIndex, lastIndex);
	      prevChild._mountIndex = nextIndex;
	    } else {
	      if (prevChild) {
	        // Update `lastIndex` before `_mountIndex` gets unset by unmounting.
	        lastIndex = Math.max(prevChild._mountIndex, lastIndex);
	        queue.push({
	          type: 'remove',
	          child: prevChild
	        });
	      }
	      queue.push({
	        type: 'new',
	        child: nextChild,
	        toIndex: nextIndex
	      });
	    }
	    nextIndex++;
	  }
	  // Remove children that are no longer present.
	  for (name in prevChildren) {
	    if (prevChildren.hasOwnProperty(name) && !(nextChildren && nextChildren.hasOwnProperty(name))) {
	      queue.push({
	        type: 'remove',
	        child: prevChildren[name]
	      });
	    }
	  }
	
	  queue.forEach(function (q) {
	    if (q.type === 'remove' || q.type === 'move') {
	      removeNode(q.child.dom);
	
	      if (q.type === 'remove') {
	        console.log('remove', q.child);
	      }
	    }
	  });
	
	  queue.forEach(function (q) {
	    if (q.type === 'new' || q.type === 'move') {
	      insertAtIndex(result, q.child.dom, q.toIndex);
	      console.log(q.type, q.child, 'to', q.toIndex);
	    }
	  });
	};

/***/ }

});
//# sourceMappingURL=diff-children.js.map