// vendor modules require
var React = require("react/addons"),
    Router = require("react-router"),
    Hotkey = require('react-hotkey');

// shorthands
var { Link, Navigation } = Router;
var { CSSTransitionGroup } = React.addons;

// style
require("./index.scss");

// Enable global keyboard event listening
Hotkey.activate();

// require all modules (aka slides) inside Slides folder
// in folders that do not end with _
var requireSlides = require.context("../Slides", true, /[^_]\/index$/),
    slides = requireSlides.keys().map(function (key) { return key.match(/^\.\/([^\/]+)/)[1]; }); // get ids only


var Application = React.createClass({

  mixins: [Navigation, Hotkey.Mixin('handleHotkey')],

  getInitialState: function () {
    return { verso: 'load', index: slides.indexOf(this.props.params.id) };
  },

  componentWillReceiveProps: function (newProps) {
    var newIdx = slides.indexOf(newProps.params.id),
        verso = this.state.index > newIdx ? 'back' : 'forw'
    this.setState({ verso: verso, index: newIdx });
  },

  handleHotkey: function (ev) {
    var slideIdx = this.state.index;
    if(ev.which == 37 && slideIdx > 0) { // prev
      this.transitionTo('slide', { id: slides[slideIdx-1] });
    }
    if(ev.which == 39 && slideIdx < slides.length - 1) { // next
      this.transitionTo('slide', { id: slides[slideIdx+1] });
    }
  },

  render: function() {
    var slideID = this.props.params.id,
        slideIdx = this.state.index,
        Slide, slideNext = '', slidePrev = '';
    
    if(slideIdx != -1) {
      Slide = requireSlides("./"+slideID+"/index")
    } else {
      return ( <div>Not found</div> );
    }

    if(slideIdx > 0) {
      slidePrev = ( <Link className="Application-prev" to="slide" params={{id: slides[slideIdx-1]}}/> );
    }
    if(slideIdx < slides.length - 1) {
      slideNext = ( <Link className="Application-next" to="slide" params={{id: slides[slideIdx+1]}}/> );
    }

    return (
      <div className="Application g-cover" data-slide={slideID}>
        <CSSTransitionGroup component="div" className="Application-items g-cover" transitionName={'to-'+this.state.verso}>
          <Slide key={slideID} id={slideID} />
        </CSSTransitionGroup>
        {slideNext}
        {slidePrev}
        
        <footer className="Application-footer">
          <div className="Application-info">
            <img className="g-left Application-logo" src={require("./logo.svg")} />
            Presentation title
            <time>Month 2015</time>
          </div>

          <p className="Application-page">{slideIdx+1}</p>
          <a href="" className="Application-wf">WILSON FLETCHER</a>
        </footer>
      </div>
    );
  }
});



module.exports = Application;