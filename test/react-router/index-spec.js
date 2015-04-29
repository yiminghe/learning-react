var expect = require('expect.js');
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var Simulate = TestUtils.Simulate;

describe('react-router', function () {
  var app = require('../../example/react-router/index');

  beforeEach(function (done) {
    window.location.hash = '';
    setTimeout(done, 100);
  });

  it('works', function (done) {
    var instance = app.getInstance();
    var img = TestUtils.scryRenderedDOMComponentsWithClass(instance, 'state-image')[0];
    expect(img).not.to.be.ok();
    var master = TestUtils.scryRenderedDOMComponentsWithClass(instance, 'Master')[0];
    var Alaska = TestUtils.scryRenderedDOMComponentsWithTag(master, 'a')[1];
    location.hash=Alaska.getDOMNode().getAttribute('href');
    setTimeout(function () {
      img = TestUtils.scryRenderedDOMComponentsWithClass(instance, 'state-image')[0];
      expect(img).to.be.ok();
      expect(img.props.src).to.be('http://www.50states.com/maps/alaska.gif');
      done();
    }, 1000);
  });
});