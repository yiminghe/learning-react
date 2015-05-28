'use strict';

var React = require('react');
var $ = require('jquery');
var Line = React.createClass({
  getInitialState: function () {
    return {
      path: '',
      pos: -1
    };
  },

  componentDidMount: function () {
    var self = this;
    var start = this.props.start;
    var end = this.props.end;
    var current = {
      x: start.x,
      y: start.y
    };
    self.anim = $(current);
    self.anim.animate({
      x: end.x,
      y: end.y
    }, {
      easing: 'swing',
      duration: this.props.duration * 1000,
      step: function (val, tw) {
        current[tw.prop] = val;
        var path = 'M' + start.x + ' ' + start.y + ' L' + current.x + ' ' + current.y;
        self.setState({
          pos: (tw.now - tw.start) / (tw.end - tw.end),
          path: path
        });
      }
    });
  },

  componentWillUnmount: function () {
    this.anim.stop();
  },

  render: function () {
    var end;
    if (this.state.pos > 0.99) {
      end = <circle cx={this.props.end.x} cy={this.props.end.y} r='10' stroke='black'
        strokeWidth='5' fill='red'/>;
    }
    var x = 'js anim';
    return (
      <div>
        <h2 dangerouslySetInnerHTML={{__html: x}}></h2>
        <svg width='400' height='400'>
          <circle cx={this.props.start.x} cy={this.props.start.y} r='10' stroke='black'
            strokeWidth='5' fill='red'/>
                {end}
          <path d={this.state.path}
            stroke='red'
            strokeWidth='2'
          ></path>
        </svg>
      </div>
    );
  }
});

module.exports = Line;
