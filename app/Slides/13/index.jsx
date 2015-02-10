// vendor modules require
var React = require("react/addons");

// If more complex styles are needed
// create a index.scss file in the same folder
// require("./index.scss");

var Slide = React.createClass({
  render: function () {
    var slideStyle = {};

    return (
      <article className="SlideItem" data-id={this.props.id} style={slideStyle}>
        <figure className="g-cover">
          <img className="g-cover" src={require("./image.svg")} />
        </figure>
        <div className="SlideItem-text g-topLeft">
          <h2>Workflow <br/>overview</h2>
        </div>
      </article>
    );
  }
});





module.exports = Slide;