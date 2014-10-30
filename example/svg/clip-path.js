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
        var startX = this.props.start.x - 16;
        var startY = this.props.start.y - 16;
        var duration = this.props.duration;
        var endX = this.props.end.x + 16;
        var endY = this.props.end.y + 16;
        var style = {
        };
        // Clear any previous transition
        style.transition = style.MsTransition = style.msTransition = style.WebkitTransition = 'none';
        // Set up the starting positions
        style.WebkitClipPath = "polygon(" + startX + "px " + startY + "px," +
            startX + "px " + startY + "px, " +
            startX + "px " + startY + "px," +
            startX + "px " + startY + "px)";
        this.setState({
            style: style
        });
        setTimeout(function () {
            // Define our transition
            // ie11 not working...
            style.transition = style.MsTransition = style.msTransition = style.WebkitTransition = '-webkit-clip-path ' + duration + 's ease-in-out';
            // Go!
            style.WebkitClipPath = "polygon(" + startX + "px " + startY + "px," +
                endX + "px " + startY + "px, " +
                endX + "px " + endY + "px," +
                startX + "px " + endY + "px)";
            self.setState({
                style: style
            });
        }, 0);
    },

    render: function () {
        // do not support svg clip-path ....
        // why do we need rect??
        return (
            <div>
                <h2>clip-path anim</h2>
                <svg width="400" height="400" style={this.state.style}>
                    <rect  width="400" height="400" fill="white"></rect>
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
    }
});
