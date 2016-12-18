var React = require('react');
var WeatherMessage = (props) => {
  var {location, temp} = props.state;
  return (
    <div className="text-center">
      <h2>Its {temp} in {location}</h2>
    </div>
  );
}
module.exports = WeatherMessage;
