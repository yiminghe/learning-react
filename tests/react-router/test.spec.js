var expect = require('expect.js');
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var Simulate = TestUtils.Simulate;

describe('react-router', function () {
  var Main = require('../../src/react-router/Main');
  var div;
  beforeEach(function (done) {
    div = document.createElement('div');
    document.body.appendChild(div);
    window.location.hash = '';
    setTimeout(done, 100);
  });

  afterEach(function () {
    window.location.hash = '';
    React.unmountComponentAtNode(div);
    document.body.removeChild(div);
  });

  it('works', function (done) {
    var instance = React.render(<Main />, div);
    var img = TestUtils.scryRenderedDOMComponentsWithClass(instance, 'state-image')[0];
    expect(img).not.to.be.ok();
    var master = TestUtils.scryRenderedDOMComponentsWithClass(instance, 'Master')[0];
    var Alaska = TestUtils.scryRenderedDOMComponentsWithTag(master, 'a')[1];
    location.hash = Alaska.getDOMNode().getAttribute('href');
    setTimeout(function () {
      img = TestUtils.scryRenderedDOMComponentsWithClass(instance, 'state-image')[0];
      expect(img).to.be.ok();
      expect(img.props.src).to.be('http://www.50states.com/maps/alaska.gif');
      done();
    }, 1000);
  });
});