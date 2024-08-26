import React, { useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { MapProps } from "@/types/types";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || "";

const Map: React.FC<MapProps> = ({ markers }) => {
  useEffect(() => {
    if (markers) {
      const map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        center: [-95.5022, 37.0902],
        zoom: 1,
      });

      Object.keys(markers).forEach(() => {
        new mapboxgl.Marker()
          .setLngLat([markers.lng, markers.lat])
          .setPopup(new mapboxgl.Popup().setText(markers.title))
          .addTo(map);
        map.setCenter([markers.lng, markers.lat]);
        map.setZoom(markers.zoom);
      });

      return () => map.remove();
    }
  }, [markers]);

  return <div id="map" style={{ width: "60%", height: "60vh" }} />;
};

export default Map;
