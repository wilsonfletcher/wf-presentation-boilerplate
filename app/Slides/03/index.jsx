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
          <h2>CSS pitfalls</h2>
          <ul>
            <li>No advanced coding features (variables, functions, ...)</li>
            <li>Repetitivity</li>
          </ul>
        </div>
      </article>
    );
  }
});





module.exports = Slide;