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
          <h2>Slide text <u>underlined</u></h2>
          <p>With some additional text</p>
          <figure className="SlideItem-inlineFigure" style={{ paddingTop: '30%' }}>
            <img src={require("./image.svg")} />
          </figure>
        </div>
      </article>
    );
  }
});





module.exports = Slide;