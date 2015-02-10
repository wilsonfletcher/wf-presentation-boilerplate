// vendor modules require
var React = require("react/addons");

// If more complex styles are needed
// create a index.scss file in the same folder
require("./index.scss");

var Slide = React.createClass({
  render: function () {
    var slideStyle = {};

    return (
      <article className="SlideItem" data-id={this.props.id} style={slideStyle}>
        <div className="SlideItem-text g-center g-wrapper t-center">
          <figure>
            <img src={require("./logo.svg")} />
          </figure>
          <h2>Thanks for listening</h2>
          <h2 className="t-primary">Any questions?</h2>
        </div>
      </article>
    );
  }
});





module.exports = Slide;