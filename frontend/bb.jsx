var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var MovieForm = require('./components/MovieForm');
ApiUtil = require('./util/apiUtil');

var App = React.createClass({
  render: function () {
    return(
      <div>
      {this.props.children}
      </div>
    );
  }
});

var AppRoutes = (
  <Router>
    <Route path="/" component={App}>
      <Route path="movies/new" component={MovieForm} />
      <Route path="movies/:movieId/edit" component={MovieForm} />
    </Route>
  </Router>
);

$(
  function () {
    ReactDOM.render(AppRoutes, document.getElementById("main"));
  }
);
