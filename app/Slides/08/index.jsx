// vendor modules require
var React = require("react/addons");

// If more complex styles are needed
// create a index.scss file in the same folder
// require("./index.scss");

var Slide = React.createClass({
  render: function () {
    var slideStyle = {},
        imageStyle = {
          marginBottom: '-10%',
        };

    return (
      <article className="SlideItem" data-id={this.props.id} style={slideStyle}>
        <div className="SlideItem-text g-center g-wrapper">
          <h2>Javascript frameworks</h2>
          <h4>Backbone, Angular, Ember, ...</h4>
          <p>Provide useful patters and utilities to build rich web applications.</p>
          <figure>
            <img src={require("./image.svg")} style={imageStyle} />
          </figure>
        </div>
      </article>
    );
  }
});





module.exports = Slide;