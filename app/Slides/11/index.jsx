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
          <h2>So, I have 30+ JS files.</h2>
          <h1 className="t-secondary">How could I keep them in the correct order?</h1>
        </div>
      </article>
    );
  }
});





module.exports = Slide;