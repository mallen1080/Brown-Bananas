var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
ApiUtil = require('./util/apiUtil');


var App = React.createClass({
  render: function () {
    return(
      <div><h1>YOO</h1></div>
    )
  }
});

var AppRoutes = (
  <Router>
    <Route path="/" component={App}>
    </Route>
  </Router>
);

$(
  function () {
    ReactDOM.render(AppRoutes, document.getElementById("main"));
  }
)
