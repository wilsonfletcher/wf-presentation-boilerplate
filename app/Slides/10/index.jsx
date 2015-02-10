// vendor modules require
var React = require("react/addons");

// If more complex styles are needed
// create a index.scss file in the same folder
// require("./index.scss");

var Slide = React.createClass({
  render: function () {
    var slideStyle = {},
        imageStyle = {
          marginTop: '-4%',
          marginBottom: '-12%',
        };

    return (
      <article className="SlideItem" data-id={this.props.id} style={slideStyle}>
        <div className="SlideItem-text g-center g-wrapper">
          <h2>Dependencies downloaders</h2>
          <h4>Bower, npm</h4>
          <p>Given a library name, they download it with all required dependencies.</p>
          <figure>
            <img src={require("./image.svg")} style={imageStyle} />
          </figure>
        </div>
      </article>
    );
  }
});





module.exports = Slide;