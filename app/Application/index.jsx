// vendor modules require
var React = require("react/addons"),
    Router = require("react-router");

// app modules require

// shorthands
var { Route, DefaultRoute, RouteHandler, Link } = Router;
var { CSSTransitionGroup } = React.addons;

// style
require("./index.scss");


var Application = React.createClass({
  render: function() {
    return (
      <div className="Application g-cover">
        <RouteHandler {...this.props}/>
      </div>
    );
  },
});

module.exports = Application;