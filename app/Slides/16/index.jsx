// vendor modules require
var React = require("react/addons"),
    Router = require("react-router");

// app modules require

// shorthands
var { Route, DefaultRoute, RouteHandler, Link } = Router;
var { CSSTransitionGroup } = React.addons;

// style
require("./index.scss");


var Slide = React.createClass({
  render: function () {
    var cx = React.addons.classSet;

    return (
      <article className="SlideItem" data-id={this.props.id}>
        <div className="SlideItem-text g-center g-wrapper">
          <h2>This was yesterday</h2>
          <h1 className="t-secondary">Today is even better.</h1>
        </div>
      </article>
    );
  }
});





module.exports = Slide;