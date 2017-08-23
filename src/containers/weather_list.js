import React, { Component } from 'react';
// pulling the weather data we need to import connect and map state to props
import { connect } from 'react-redux';
import Chart from '../components/chart';

export class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);

    return (
      <tr key={name}>
        <td>{name}</td>
        <td>
          <Chart data={temps} color="orange" />
        </td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

// function mapStateToProps(state) {
//   // we used weather key here because we difined it in reducers/index as weather
//   return { weather: state.weather };
// }
// ES6 syntax with desctructuring, similar to above
// weather arg is equivalent to const weather = state.weather
function mapStateToProps({ weather }) {
  return { weather };
}

// connect weather state as props to WeatherList
export default connect(mapStateToProps)(WeatherList);
