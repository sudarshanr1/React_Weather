var React = require('react');
var About = (props) => {
  return (
    <div>
      <h3 className="text-center page-title">About</h3>
      <p>
        This is a simple weather application built using React
      </p>
      <p>
        Following are the tools used to build this
      </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React - Javascript lib used</a>
        </li>
        <li>
          <a href="https://openweathermap.org">Open weather map - used to fetch weather info</a>
        </li>
      </ul>
    </div>
  );
}
module.exports = About;
