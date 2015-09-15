const React = require('react');
const StrikeDash = React.createClass({
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
    return {};
  },

  componentDidMount() {
    // force repaint
    this.refs.path.getDOMNode().getBoundingClientRect();
    const style = this.refs.path.getDOMNode().style;
    const duration = this.props.duration;
    // Define our transition
    // ie11 not working...
    style.transition = style.MsTransition = style.msTransition = style.WebkitTransition = `stroke-dashoffset ${duration}s ease-in-out`;
    // Go!
    style.strokeDashoffset = '0px';
    setTimeout(this.onEnd, duration * 1000);
  },

  onEnd() {
    this.setState({
      end: 1,
    });
  },

  render() {
    let endCircle;
    const startX = this.props.start.x;
    const startY = this.props.start.y;
    const endX = this.props.end.x;
    const endY = this.props.end.y;
    const length = Math.sqrt((startX - endX) * (startX - endX) + (startY - endY) * (startY - endY));
    const style = {};
    const start = this.props.start;
    const end = this.props.end;
    const path = `M${start.x} ${start.y} L${end.x} ${end.y}`;
    // Clear any previous transition
    style.transition = style.MsTransition = style.msTransition = style.WebkitTransition = 'none';
    // Set up the starting positions
    style.strokeDasharray = length;
    style.strokeDashoffset = length;
    if (this.state.end) {
      endCircle = (<circle cx={endX} cy={endY} r="10" stroke="black"
                           strokeWidth="5" fill="red"/>);
      style.strokeDashoffset = '0';
      style.transition = style.MsTransition = style.msTransition = style.WebkitTransition = 'none';
    }

    const x = 'strike-dash anim';
    // onTransitionEnd not working...
    // https://github.com/facebook/react/issues/2187
    return (
      <div>
        <h2 dangerouslySetInnerHTML={{__html: x}}></h2>
        <svg width="400" height="400">
          <circle cx={startX} cy={startY} r="10" stroke="black"
                  strokeWidth="5" fill="red"/>
          {endCircle}
          <path d={path}
                ref="path"
                onTransitionEnd={this.onEnd}
                onWebkitTransitionEnd={this.onEnd}
                style={style}
                stroke="red"
                strokeWidth="2"
            ></path>
        </svg>
      </div>
    );
  },
});

module.exports = StrikeDash;
