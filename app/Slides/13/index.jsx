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
        <figure className="g-cover">
          <img className="g-cover" src={ require("./image.svg") } />
        </figure>
        <div className="SlideItem-text g-topLeft">
          <h2>Workflow <br/>overview</h2>
        </div>
      </article>
    );
  }
});





module.exports = Slide;