// vendor modules require
var React = require("react/addons");

// If more complex styles are needed
// create a index.scss file in the same folder
// require("./index.scss");

var Slide = React.createClass({
  render: function () {
    var slideStyle = {
      color: '#FFF',
      backgroundColor: '#222',
    };

    return (
      <article className="SlideItem" data-id={this.props.id} style={slideStyle}>
        <div className="SlideItem-text g-center g-wrapper">
          <h1>This was yesterday</h1>
        </div>
      </article>
    );
  }
});





module.exports = Slide;