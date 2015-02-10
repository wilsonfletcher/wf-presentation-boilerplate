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
          <h2>CSS pitfalls</h2>
          <ul>
            <li>No advanced coding features (variables, functions, ...)</li>
            <li>Repetitive</li>
          </ul>
        </div>
      </article>
    );
  }
});





module.exports = Slide;