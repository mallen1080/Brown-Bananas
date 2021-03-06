var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var HashHistory = ReactRouter.hashHistory;

var Navbar = require('./components/navbar/navbar');
var Footer = require('./components/navbar/footer');
var Trending = require('./components/other/trending');
var SignUpForm = require('./components/other/signUpForm');
var SignInForm = require('./components/other/signInForm');
var MovieForm = require('./components/other/movieForm');
var HomePage = require('./components/home/homePage');
var ShowPage = require('./components/show/showPage');
var BrowsePage = require('./components/browse/browsePage');
var AboutPage = require('./components/other/about');
var TrailerModal = require('./components/other/trailerModal');

var AppStore = require('./stores/appStore');
var ApiUtil = require('./util/apiUtil');


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
        <TrailerModal />
        <div>
          <Navbar />
          <Trending />
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
      <Route path="movies/browse" component={BrowsePage} onEnter={_getHomePageMovies}/>
      <Route path="movies/:movieId" component={ShowPage} onEnter={_getHomePageMovies}/>
      <Route path="movies/:movieId/edit" component={MovieForm} onEnter={_checkAdmin}/>
      <Route path="about" component={AboutPage} onEnter={_getHomePageMovies}/>
    </Route>
  </Router>
);

$(
  function () {
    ReactDOM.render(AppRoutes, document.getElementById("main"));
  }
);
