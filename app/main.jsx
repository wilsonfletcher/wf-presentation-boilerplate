// vendor modules require
var React = require("react/addons"),
    Router = require("react-router");

// app modules require

// shorthands
var { Route, DefaultRoute, Redirect, RouteHandler, Link } = Router;


// polyfill
if(!Object.assign) {
  Object.assign = React.__spread;
}


var routes = (
  <Route name="app" path="/" handler={require("./Application")}>
    <Route name="slide" path="slide/:id" handler={require("./Application")}/>
    <Redirect from="" to="slide" params={{ id:'01' }} />
  </Route>
);


document.addEventListener("DOMContentLoaded", function(event) {
  // Add Router.HistoryLocation as a second argument to enable HTML5 history
  Router.run(routes, function (Handler, state) {
    React.render(<Handler params={state.params} query={state.query}/>, document.body);
  });
});


// export routes
module.exports = routes;