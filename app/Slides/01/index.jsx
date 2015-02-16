// vendor modules require
var React = require("react/addons");

// If more complex styles are needed
// create a index.scss file in the same folder
// require("./index.scss");

var Slide = React.createClass({
  render: function () {
    var slideStyle = {},
        imageStyle = {};

    return (
      <article className="SlideItem bg-secondary" data-id={this.props.id} style={slideStyle}>
        <div className="SlideItem-text g-center g-wrapper">
          <h1>Presentation title</h1>
          <h4>Presentation Subtitle</h4>
        </div>
      </article>
    );
  }
});

module.exports = Slide;