/** @jsx React.DOM */

var React = require('react');

module.exports = React.createClass({
    getDefaultProps: function () {
        return {
            count: 0
        }
    },
    getInitialState: function () {
        return {
            count: this.props.count,
            disabled: true
        };
    },
    increase: function () {
        this.setState({
            count: this.state.count + 1
        });
    },
    componentDidMount: function () {
        this.setState({
            disabled: false
        });
    },
    render: function () {
        return (
            <div>
                <h2>count</h2>
                <div>
                    <p>{this.state.count}</p>
                    <button onClick={this.increase} disabled={this.state.disabled}>increase</button>
                </div>
            </div>
            );
    }
});