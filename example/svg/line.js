/** @jsx React.DOM */

require(['anim/timer'], function (Anim) {
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
            self.anim = new Anim(current, {
                x: end.x,
                y: end.y
            }, {
                easing: "swing",
                duration: 5,
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
                stroke-width="2" fill="red"/>;
            }
            return (
                <svg width="400" height="400">
                    <circle cx={this.props.start.x} cy={this.props.start.y} r="10" stroke="black"
                    stroke-width="2" fill="red"/>
                {end}
                    <path d={this.state.path} style={{fill: 'white', stroke: 'red', strokeWidth: '2'}}></path>
                </svg>
                );
        }

    });

    React.renderComponent(<Line start={{x: 10, y: 10}} end={{x: 300, y: 300}}/>, document.body);
});
