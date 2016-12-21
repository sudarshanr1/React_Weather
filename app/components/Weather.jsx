var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openweathermap');
var ErrorModal = require('ErrorModal');
var Weather = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false
    }
  },
  handleSearch: function(location) {
    var _this = this;
    this.setState({
      isLoading: true,
      errorMessage: undefined,
      location: undefined,
      temp: undefined
    });
    openWeatherMap.getTemp(location).then(function(temp){
      _this.setState({
        location: location,
        temp: temp
      });
      _this.setState({isLoading: false});
    },function(error) {
      _this.setState({
        isLoading: false,
        errorMessage: error.message
      });
    });
  },
  componentDidMount: function() {
    var location = this.props.location.query.location;
    if (location !== undefined && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },
  componentWillReceiveProps: function(newProps) {
    var location = newProps.location.query.location;
    if (location !== undefined && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },
  render: function(){
    var _this = this;
    var {isLoading, temp, location, errorMessage} = this.state;
    function renderMessage() {
      if (isLoading) {
        return <h2 className="text-center">Loading...</h2>
      } else if (temp && location) {
        return <WeatherMessage state={_this.state}/>
      }
    }
    function renderError() {
      if(typeof errorMessage === 'string') {
        return (
          <ErrorModal message={errorMessage}></ErrorModal>
        )
      }
    }
    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
});

module.exports = Weather;
