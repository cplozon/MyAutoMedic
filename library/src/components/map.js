import React from "react"
 
export default class Map extends React.Component {  
  componentDidMount() {
      const { lat, lng } = this.props.initialPosition;
    this.map = new google.maps.Map(this.refs.map, {
      center: {
          lat,
          lng
      },
      zoom: 16
    });
  }
  
  render() {
    const mapStyle = {
      width: 500,
      height: 300,
      border: '1px solid black'
    };
    
    return (
      <div ref="map" style={mapStyle}>I should be a map!
      </div>
    );
  }
}

ReactDOM.render(
  <Map />,
  document.getElementById('root')
);