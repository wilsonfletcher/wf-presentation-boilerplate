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
          <h2>Task runners</h2>
          <h4>Grunt, Gulp, Codekit, <u>Webpack</u></h4>
          <p>Repeat a set of instructions each time something occurs</p>
          <figure>
            <img src={ require("./image.svg") } />
          </figure>
        </div>
      </article>
    );
  }
});





module.exports = Slide;