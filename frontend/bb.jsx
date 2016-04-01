var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var MovieForm = require('./components/movieForm');
var Navbar = require('./components/navbar');
var SignUpForm = require('./components/signUpForm');
var SignInForm = require('./components/signInForm');
var AppStore = require('./stores/appStore');
ApiUtil = require('./util/apiUtil'); //FOR TESTING

var App = React.createClass({

  getInitialState: function () {
    return { currentUser: {} };
  },

  componendDidMount: function () {
    this.appStoreToken = AppStore.addListener(this._onChange);
  },

  componentWillUnmount: function () {
    this.appStoreToken.remove();
  },

  _onChange: function () {
    this.setState({ currentUser: AppStore.currentUser() });
  },

  render: function () {
    return(
      <div>
        <SignUpForm />
        <SignInForm />
        <div>
          <Navbar />
          {this.props.children}
        </div>
      </div>
    );
  }
});

function _checkCurrentUser(nextState, replace, callback) {
  if (!AppStore.signedIn()) {
    ApiUtil.fetchCurrentUser(callback);
  }
}

var AppRoutes = (
  <Router>
    <Route path="/" component={App} onEnter={_checkCurrentUser}>
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
