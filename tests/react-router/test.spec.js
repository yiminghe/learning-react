var expect = require('expect.js');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var Simulate = TestUtils.Simulate;
var $ = require('jquery');

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
    ReactDOM.unmountComponentAtNode(div);
    document.body.removeChild(div);
  });

  it('works', function (done) {
    var instance = ReactDOM.render(<Main />, div);
    var img = TestUtils.scryRenderedDOMComponentsWithClass(instance, 'state-image')[0];
    expect(img).not.to.be.ok();
    var master = TestUtils.scryRenderedDOMComponentsWithClass(instance, 'Master')[0];
    var Alaska = $(master).find('a')[1];
    location.hash = Alaska.getAttribute('href');
    setTimeout(function () {
      img = TestUtils.scryRenderedDOMComponentsWithClass(instance, 'state-image')[0];
      expect(img).to.be.ok();
      expect(img.src).to.be('http://www.50states.com/maps/alaska.gif');
      done();
    }, 1000);
  });
});