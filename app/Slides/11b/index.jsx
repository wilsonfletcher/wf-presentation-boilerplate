// vendor modules require
var React = require("react/addons");

// If more complex styles are needed
// create a index.scss file in the same folder
// require("./index.scss");

var Slide = React.createClass({
  render: function () {
    var slideStyle = {},
        uStyle = {
          color: '#333'
        };

    return (
      <article className="SlideItem bg-primary" data-id={this.props.id} style={slideStyle}>
        <div className="SlideItem-text g-center g-wrapper">
          <h1>I want them to <u style={uStyle}>auto-reorder</u> themselves</h1>
        </div>
      </article>
    );
  }
});





module.exports = Slide;