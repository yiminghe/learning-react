/** @jsx React.DOM */

module.exports = React.createClass({
    getInitialState: function () {
        var start = this.props.start;
        var end = this.props.end;
        var path = 'M' + start.x + ' ' + start.y + ' L' + end.x + ' ' + end.y;
        return {
            path: path
        };
    },

    componentDidMount: function () {
        var self = this;
        var startX = this.props.start.x;
        var startY = this.props.start.y;
        var duration = this.props.duration;
        var endX = this.props.end.x;
        var endY = this.props.end.y;
        var length = Math.sqrt((startX - endX) * (startX - endX) + (startY - endY) * (startY - endY));
        var style = {};
        // Clear any previous transition
        style.transition = style.MsTransition = style.msTransition = style.WebkitTransition = 'none';
        // Set up the starting positions
        style.strokeDasharray = length;
        style.strokeDashoffset = length;
        this.setState({
            style: style
        },function () {
            // force repaint
            self.refs.path.getDOMNode().getBoundingClientRect();
            // Define our transition
            // ie11 not working...
            style.transition = style.MsTransition = style.msTransition = style.WebkitTransition = 'stroke-dashoffset ' + duration + 's ease-in-out';
            // Go!
            style.strokeDashoffset = '0';
            self.setState({
                style: style
            });
        });

        setTimeout(function () {
            self.setState({
                end: 1
            });
        }, duration * 1000);
    },

    onEnd: function () {
        this.setState({
            end: 1
        });
    },

    render: function () {
        var end;
        if (this.state.end) {
            end = <circle cx={this.props.end.x} cy={this.props.end.y} r="10" stroke="black"
            strokeWidth="5" fill="red"/>;
        }
        var x = 'strike-dash anim';
        // onTransitionEnd not working...
        // https://github.com/facebook/react/issues/2187
        return (
            <div>
                <h2 dangerouslySetInnerHTML={{__html: x}}></h2>
                <svg width="400" height="400">
                    <circle cx={this.props.start.x} cy={this.props.start.y} r="10" stroke="black"
                    strokeWidth="5" fill="red"/>
                    {end}
                    <path d={this.state.path}
                    ref='path'
                    onTransitionEnd={this.onEnd}
                    onWebkitTransitionEnd={this.onEnd}
                    style={this.state.style}
                    stroke="red"
                    strokeWidth="2"
                    ></path>
                </svg>
            </div>
            );
    }
});
