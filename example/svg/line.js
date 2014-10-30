/** @jsx React.DOM */

var Anim = require('anim/timer');
module.exports = React.createClass({
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
        self.anim = new Anim(current, {
            x: end.x,
            y: end.y
        }, {
            easing: "swing",
            duration: this.props.duration,
            frame: function (anim, fx) {
                current[fx.prop] = fx.val;
                var path = 'M' + start.x + ' ' + start.y + ' L' + current.x + ' ' + current.y;
                self.setState({
                    pos: fx.pos,
                    path: path
                })
            }
        }).run();
    },

    componentUnMount: function () {
        this.anim.stop();
    },

    render: function () {
        var end;
        if (this.state.pos > 0.99) {
            end = <circle cx={this.props.end.x} cy={this.props.end.y} r="10" stroke="black"
            strokeWidth="5" fill="red"/>;
        }
        var x = 'js anim';
        return (
            <div>
                <div dangerouslySetInnerHTML={{__html: x}}></div>
            <svg width="400" height="400">
                <circle cx={this.props.start.x} cy={this.props.start.y} r="10" stroke="black"
                strokeWidth="5" fill="red"/>
                {end}
                <path d={this.state.path}
                stroke="red"
                strokeWidth="2"
                ></path>
            </svg>
                </div>
            );
    }

});
