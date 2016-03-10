var content = document.getElementById('__react-content');

content.innerHTML = `
<h2>diff children demo</h2>
<div>
<button id="action">change</button>
</div>
<div id="result"></div>
`;

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
  _mountIndex: 0,
};

var node6 = {
  key: '.6',
  tag: 'div',
  _mountIndex: 1,
};

var node8 = {
  key: '.8',
  tag: 'div',
  _mountIndex: 2,
};

var node9 = {
  key: '.9',
  tag: 'div',
  _mountIndex: 3,
};


var prevChildren = {
  [node7.key]: node7,
  [node6.key]: node6,
  [node8.key]: node8,
  [node9.key]: node9,
};

var nodes = Object.keys(prevChildren).map((k) => {
  var node = prevChildren[k];
  return `<${node.tag}>${node.key} - ${node.tag}</${node.tag}>`;
});

result.innerHTML = nodes.join('');

var prevDOMChildNodes = result.childNodes;

node7.dom = prevDOMChildNodes[0];
node6.dom = prevDOMChildNodes[1];
node8.dom = prevDOMChildNodes[2];
node9.dom = prevDOMChildNodes[3];

var newNode8 = {
  key: '.8',
  tag: 'p',
};

newNode8.dom = getNode(`<${newNode8.tag}>${newNode8.key} - ${newNode8.tag}</${newNode8.tag}>`);

var newNodeX = {
  key: '.x',
  tag: 'div',
};

newNodeX.dom = getNode(`<${newNodeX.tag}>${newNodeX.key} - ${newNodeX.tag}</${newNodeX.tag}>`);

var nextChildren = {
  [node9.key]: node9,
  [node7.key]: node7,
  [newNode8.key]: newNode8,
  [newNodeX.key]: newNodeX,
};

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
          toIndex: nextIndex,
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
          child: prevChild,
        });
      }
      queue.push({
        type: 'new',
        child: nextChild,
        toIndex: nextIndex,
      });
    }
    nextIndex++;
  }
// Remove children that are no longer present.
  for (const childName in prevChildren) {
    if (prevChildren.hasOwnProperty(childName) &&
      !(nextChildren && nextChildren.hasOwnProperty(childName))) {
      queue.push({
        type: 'remove',
        child: prevChildren[childName],
      });
    }
  }

  queue.forEach((q) => {
    if (q.type === 'remove' || q.type === 'move') {
      removeNode(q.child.dom);

      if (q.type === 'remove') {
        console.log('remove', q.child);
      }
    }
  });

  queue.forEach((q) => {
    if (q.type === 'new' || q.type === 'move') {
      insertAtIndex(result, q.child.dom, q.toIndex);
      console.log(q.type, q.child, 'to', q.toIndex);
    }
  });
};
