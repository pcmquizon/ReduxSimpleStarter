import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchWeather } from '../actions/index';
import Chart from './chart';
import GoogleMap from './googleMap';

class WeatherList extends Component {

  constructor(props) {
    super(props);
    this.renderWeatherList = this.renderWeatherList.bind(this);
  };

  renderWeatherList() {
    return this.props.weather.map((weather) => {
      const name = weather.city.name;
      const cityData = weather.list;
      const temperatureList = cityData.map((item) => {
        return item.main.temp;
      });
      const pressureList = cityData.map((item) => {
        return item.main.pressure;
      });
      const humidityList = cityData.map((item) => {
        return item.main.humidity;
      });
      const svgHeight = 100;
      const svgWidth = 200;
      const { lon, lat } = weather.city.coord;

      return(
        <tr key={name}>
          <td className="align-middle text-center"><GoogleMap lon={lon} lat={lat} /><div>{name}</div></td>
          <td className="align-middle text-center"><Chart data={temperatureList} svgHeight={svgHeight} svgWidth={svgWidth} color='red' units='K'/></td>
          <td className="align-middle text-center"><Chart data={pressureList} svgHeight={svgHeight} svgWidth={svgWidth} color='blue' units='hPa'/></td>
          <td className="align-middle text-center"><Chart data={humidityList} svgHeight={svgHeight} svgWidth={svgWidth} color='green' units='%'/></td>
        </tr>
      );
    });
  };

  render() {
    if(!this.props.weather.length) {
      return(
        <div>Search for your first city!</div>
      );
    }

    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th className="text-center">City</th>
            <th className="text-center">Temperature (K)</th>
            <th className="text-center">Pressure (hPa)</th>
            <th className="text-center">Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.renderWeatherList()}
        </tbody>
      </table>
    );
  };
};

function mapStateToProps(state) {
  return {
    weather: state.weather
  }
}

export default connect(
  mapStateToProps,
  null
)(WeatherList);
