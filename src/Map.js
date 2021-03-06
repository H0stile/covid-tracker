import React from "react";
import "./Map.css";
import { Map as LeafletMap, TileLayer } from "react-leaflet";
import { showDataOnMap } from "./util";

function Map({ countries, casesType, center, zoom }) {
  // Nothing will show untill we import CSS in app.js and style the map with Map.css
  return (
    <div className="map">
      <LeafletMap center={center} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> Contributors"
        />
        {/* Loop through and draw circles on the map */}
        {showDataOnMap(countries, casesType)}
      </LeafletMap>
    </div>
  );
}

export default Map;
