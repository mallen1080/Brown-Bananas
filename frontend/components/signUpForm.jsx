var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var ApiUtil = require('../util/apiUtil');

var SignUpForm = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function () {
    return {
      username: "",
      password: "",
      genre: "Action"
    };
  },

  _submitForm: function () {
    ApiUtil.createUser(this.state);
  },

  _genreOptions: function () {
    var genres = ["Action", "Animation", "Comedy",
      "Documentary", "Drama", "Horror", "Sci-Fi"];

    genres = genres.map(function (genre, i) {
      return (
        <option key={i}>
          {genre}
        </option>
      );
    });
    return genres;
  },

  render: function () {
    return(
      <div className="new-user-page">
        <div className="new-user-form">
          <div className="form-header group">
            <h4>SIGN UP WITH USERNAME</h4>
            <button>x</button>
          </div>

          <div className="form-main">

            <p className="logo">BROWN BANANAS</p>

            <form>
              <div className="form-input group">
                <label>Username: </label>
                <input type="text" placeholder="username" valueLink={this.linkState('username')} />
              </div>

              <div className="form-input group">
              <label>Password: </label>
              <input type="password" placeholder="password" valueLink={this.linkState('password')} />
              </div>

              <div className="form-input group">
              <label>Favorite Genre: </label>
              <select valueLink={this.linkState('genre')}>
                {this._genreOptions()}
              </select>
              </div>

              <div className="form-submit">
                <button onClick={this._submitForm}>Sign Up</button>
              </div>

            </form>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = SignUpForm;
