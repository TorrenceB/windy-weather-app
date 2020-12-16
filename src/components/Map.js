import React, { useState, useEffect } from "react";

const Map = () => {
  const windyInit = window.windyInit;
  const L = window.L;

  //   Initialize windy
  const renderMap = () => {
    const options = {
      // Required: API key
      key: "2xf6Zyr5IAe00l3tX70ew4anY6q4j8gO",
      // Put additional console output
      verbose: true,
      // Optional: Initial state of the map
      lat: 50.4,
      lon: 14.3,
      zoom: 5,
    };
    windyInit(options, (windyAPI) => {
      const { map } = windyAPI;
      L.popup().setLatLng([50.4, 14.3]).setContent("Hello World").openOn(map);
    });
  };

  useEffect(() => {
    renderMap();
  }, []);

  return <div id="windy" className="map-container"></div>;
};

export default Map;
