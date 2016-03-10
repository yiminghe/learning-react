import React from 'react';
import $ from 'jquery';

const Line = React.createClass({
  propTypes: {
    start: React.PropTypes.shape({
      x: React.PropTypes.number,
      y: React.PropTypes.number,
    }),
    end: React.PropTypes.shape({
      x: React.PropTypes.number,
      y: React.PropTypes.number,
    }),
    duration: React.PropTypes.number,
  },

  getInitialState() {
    return {
      path: '',
      pos: -1,
    };
  },

  componentDidMount() {
    const self = this;
    const start = this.props.start;
    const end = this.props.end;
    const current = {
      x: start.x,
      y: start.y,
    };
    self.anim = $(current);
    self.anim.animate({
      x: end.x,
      y: end.y,
    }, {
      easing: 'swing',
      duration: this.props.duration * 1000,
      step(val, tw) {
        current[tw.prop] = val;
        const path = `M${start.x} ${start.y} L${current.x} ${current.y}`;
        self.setState({
          pos: (tw.now - tw.start) / (tw.end - tw.end),
          path,
        });
      },
    });
  },

  componentWillUnmount() {
    this.anim.stop();
  },

  render() {
    let end;
    if (this.state.pos > 0.99) {
      end = (<circle
        cx={this.props.end.x}
        cy={this.props.end.y}
        r="10"
        stroke="black"
        strokeWidth="5"
        fill="red"
      />);
    }
    const x = 'js anim';
    return (
      <div>
        <h2 dangerouslySetInnerHTML={{ __html: x }} />
        <svg width="400" height="400">
          <circle
            cx={this.props.start.x}
            cy={this.props.start.y}
            r="10"
            stroke="black"
            strokeWidth="5"
            fill="red"
          />
          {end}
          <path
            d={this.state.path}
            stroke="red"
            strokeWidth="2"
          />
        </svg>
      </div>
    );
  },
});

export default Line;
