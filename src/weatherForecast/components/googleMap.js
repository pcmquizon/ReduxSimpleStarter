import React, { Component } from 'react';

import { GOOGLE_API_KEY } from '../config';

class GoogleMap extends Component {

  constructor(props) {
    super(props);
  };

  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon,
      },
      key: GOOGLE_API_KEY
    });
  };

  render() {
    return(
      <div ref="map" className="google-map"></div>
    );
  };
};

export default GoogleMap;
