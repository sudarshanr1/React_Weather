var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openweathermap');
var Weather = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false
    }
  },
  handleSearch: function(location) {
    var _this = this;
    debugger;
    this.setState({isLoading: true});
    openWeatherMap.getTemp(location).then(function(temp){
      _this.setState({
        location: location,
        temp: temp
      });
      _this.setState({isLoading: false});
    },function(error){
      alert(error);
      _this.setState({isLoading: false});
    });
  },
  render: function(){
    var _this = this;
    var {isLoading, temp, location} = this.state;
    function renderMessage() {
      if (isLoading) {
        return <h2 className="text-center">Loading...</h2>
      } else if (temp && location) {
        return <WeatherMessage state={_this.state}/>
      }
    }
    return (
      <div>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
