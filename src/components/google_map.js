import React, { Component } from 'react';

class GoogleMap extends Component {
  componentDidMount() {
    new google.maps.Map(this.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon,
      },
    });
  }

  render() {
    // react uses functional reference this will allow comDidMount to select
    // this element using this.map
    return <div ref={(ref) => { this.map = ref; }} />;
  }
}

export default GoogleMap;
