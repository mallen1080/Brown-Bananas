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
          <div className="new-user-form-header">
            <h4>SIGN UP WITH USERNAME</h4>
            <button>x</button>
          </div>

          <p>BROWN BANANAS</p>

          <form className="new-user-form">

            <label>Username: </label>
            <input type="text" valueLink={this.linkState('username')} />
            <br />

            <label>Password: </label>
            <input type="password" valueLink={this.linkState('password')} />
            <br />

            <label>Favorite Genre: </label>
            <select valueLink={this.linkState('genre')}>
              {this._genreOptions()}
            </select>
            <br />

            <div className="new-user-form-submit">
              <button onClick={this._submitForm}>Sign Up</button>
            </div>

          </form>
        </div>
      </div>
    );
  }

});

module.exports = SignUpForm;
