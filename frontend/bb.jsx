var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var HashHistory = ReactRouter.hashHistory;
var MovieForm = require('./components/movieForm');
var Navbar = require('./components/navbar');
var SignUpForm = require('./components/signUpForm');
var SignInForm = require('./components/signInForm');
var HomePage = require('./components/homePage');
var ShowPage = require('./components/showPage');
var Footer = require('./components/footer');
var AppStore = require('./stores/appStore');
var BrowsePage = require('./components/browsePage');
ApiUtil = require('./util/apiUtil'); //FOR TESTING

var App = React.createClass({

  getInitialState: function () {
    return { currentUser: AppStore.currentUser() };
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
          <Footer />
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

function _getHomePageMovies(nextState, replace, callback) {
  ApiUtil.fetchHomePageMovies(callback);
}

function _checkAdmin(nextState, replace, callback) {
  if (!AppStore.admin()) {
    replace('#');
  }
  callback();
}

var AppRoutes = (
  <Router history={HashHistory}>
    <Route path="/" component={App} onEnter={_checkCurrentUser}>
      <IndexRoute component={HomePage} onEnter={_getHomePageMovies}/>
      <Route path="movies/new" component={MovieForm} onEnter={_checkAdmin}/>
      <Route path="movies/browse" component={BrowsePage} />
      <Route path="movies/:movieId" component={ShowPage} onEnter={_getHomePageMovies}/>
      <Route path="movies/:movieId/edit" component={MovieForm} onEnter={_checkAdmin}/>
    </Route>
  </Router>
);

$(
  function () {
    ReactDOM.render(AppRoutes, document.getElementById("main"));
  }
);
