var React = require('react');

var Footer = React.createClass({

  render: function () {

    var linkedin = "https://www.linkedin.com/in/matthew-allen-ba576447";
    var github = "https://github.com/mallen1080";
    var gmail = "mailto:matt.allen1080@gmail.com";

    return (
      <div className="footer group">
        <div className="footer-text">
          <a href="http://www.mattjallen.com">A Matt Allen Production</a>
        </div>
        <div className="footer-links">
          <ul>
            <li><a href={linkedin}><img src="linkedin.png" /></a></li>
            <li><a href={github}><img src="github.png" /></a></li>
            <li><a href={gmail}><img src="gmail.png" /></a></li>
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = Footer;
