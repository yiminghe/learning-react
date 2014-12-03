(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
/** @jsx React.DOM */

var React = (typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null);
var Router = (typeof window !== "undefined" ? window.ReactRouter : typeof global !== "undefined" ? global.ReactRouter : null);
var Route = Router.Route;
var Routes = Router.Routes;
var Redirect = Router.Redirect;
var Link = Router.Link;

var App = React.createClass({displayName: 'App',
    render: function() {
        return (
            React.createElement("div", null, 
                React.createElement("ul", null, 
                    React.createElement("li", null, React.createElement(Link, {to: "user", params: {userId: "123"}}, "Bob")), 
                    React.createElement("li", null, React.createElement(Link, {to: "user", params: {userId: "abc"}}, "Sally"))
                ), 
                React.createElement(this.props.activeRouteHandler, null)
            )
            );
    }
});

var User = React.createClass({displayName: 'User',
    render: function() {
        return (
            React.createElement("div", {className: "User"}, 
                React.createElement("h1", null, "User id: ", this.props.params.userId), 
                React.createElement("ul", null, 
                    React.createElement("li", null, React.createElement(Link, {to: "task", params: {userId: this.props.params.userId, taskId: "foo"}}, "foo task")), 
                    React.createElement("li", null, React.createElement(Link, {to: "task", params: {userId: this.props.params.userId, taskId: "bar"}}, "bar task"))
                ), 
                React.createElement(this.props.activeRouteHandler, null)
            )
            );
    }
});

var Task = React.createClass({displayName: 'Task',
    render: function() {
        return (
            React.createElement("div", {className: "Task"}, 
                React.createElement("h2", null, "User id: ", this.props.params.userId), 
                React.createElement("h3", null, "Task id: ", this.props.params.taskId)
            )
            );
    }
});

var routes = (
    React.createElement(Route, {handler: App}, 
        React.createElement(Route, {name: "user", path: "/user/:userId", handler: User}, 
            React.createElement(Route, {name: "task", path: "tasks/:taskId", handler: Task}), 
            React.createElement(Redirect, {from: "todos/:taskId", to: "task"})
        )
    )
    );

React.renderComponent(
    React.createElement(Routes, {children: routes}),
    document.body
);
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1]);
