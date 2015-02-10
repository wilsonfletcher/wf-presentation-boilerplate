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
          <h2>CSS post-processors</h2>
          <h4>Autoprefixer, old browser hacks,...</h4>
          <p>Automate common enhancements and bowser fixes.</p>
          <figure>
            <img src={ require("./image.svg") } />
          </figure>
        </div>
      </article>
    );
  }
});





module.exports = Slide;