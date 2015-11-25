import React from 'react';
import assign from 'object-assign';
const ClipPath = React.createClass({
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
    const start = this.props.start;
    const end = this.props.end;
    const path = `M${start.x} ${start.y} L${end.x} ${end.y}`;
    const startX = this.props.start.x - 16;
    const startY = this.props.start.y - 16;
    const style = {};
    // Clear any previous transition
    style.transition = style.MsTransition = style.msTransition = style.WebkitTransition = 'none';
    // Set up the starting positions
    style.WebkitClipPath = `polygon(${startX}px ${startY}px,${startX}px ${startY}px, ${startX}px ${startY}px,${startX}px ${startY}px)`;
    return {
      style: style,
      path: path,
    };
  },

  componentDidMount() {
    const startX = this.props.start.x - 16;
    const startY = this.props.start.y - 16;
    const duration = this.props.duration;
    const endX = this.props.end.x + 16;
    const endY = this.props.end.y + 16;
    setTimeout(() => {
      const style = assign({}, this.state.style);
      // Define our transition
      // ie11 not working...
      style.transition = style.MsTransition = style.msTransition = style.WebkitTransition = `-webkit-clip-path ${duration}s ease-in-out`;
      // Go!
      style.WebkitClipPath = `polygon(${startX}px ${startY}px,${endX}px ${startY}px, ${endX}px ${endY}px,${startX}px ${endY}px)`;
      this.setState({
        style: style,
      });
    }, 0);
  },

  render() {
    // do not support svg clip-path ....
    // why do we need rect??
    return (
      <div>
        <h2>clip-path anim</h2>
        <svg width="400" height="400" style={this.state.style}>
          <rect width="400" height="400" fill="white"></rect>
          <circle cx={this.props.start.x} cy={this.props.start.y} r="10" stroke="black"
                  strokeWidth="5" fill="red"/>
          <circle cx={this.props.end.x} cy={this.props.end.y} r="10" stroke="black"
                  strokeWidth="5" fill="red"/>
          <path d={this.state.path}
                stroke="red"
                strokeWidth="2"
            ></path>
        </svg>
      </div>
    );
  },
});

export default ClipPath;
