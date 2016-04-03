var React = require('react');

var Footer = React.createClass({

  render: function () {
    return (
      <div className="footer group">
        <div className="footer-text">
          <p>A Matt Allen Production</p>
        </div>
        <div className="footer-links">
          <ul>
            <li><img src="linkedin.png" /></li>
            <li><img src="github.png" /></li>
            <li><img src="gmail.png" /></li>
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = Footer;
