import React from 'react'
import {MapContainer , TileLayer } from "react-leaflet";
import './map.css'; 
import {showDataOnMap} from './util';
// import {Map as LeafletMap} from 'leaflet';

const Map = ({countries,casesType,center,zoom}) => {
    return (
        <div className="map">
            <MapContainer center={center} zoom={zoom}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                {showDataOnMap(countries,casesType)}
            </MapContainer>
            </div>
    );
}
export default Map;


// import React from "react";
// import {Map as LeafletMap, TileLayer } from "react-leaflet";
// import "./map.css";
// import { showDataOnMap } from "./util";

// function Map({ countries, casesType, center, zoom }) {
//   return (
//     <div className="map">
//       <LeafletMap center={center} zoom={zoom}>
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//         />
//         {showDataOnMap(countries, casesType)}
//       </LeafletMap>
//     </div>
//   );
// }

// export default Map;
