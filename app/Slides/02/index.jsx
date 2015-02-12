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
          <h2>Increase developer’s <u>productivity</u></h2>
          <figure>
            <img src={require("./image.svg")} style={imageStyle} />
          </figure>
        </div>
      </article>
    );
  }
});





module.exports = Slide;