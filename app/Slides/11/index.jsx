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
        <div className="SlideItem-text g-center g-wrapper">
          <h2>Well done, <br />I have 30+ JS files.</h2>
          <h2 className="t-primary">How could I keep them in the correct <u>order</u>?</h2>
        </div>
      </article>
    );
  }
});





module.exports = Slide;