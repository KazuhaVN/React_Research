import { Marker, Popup, useMapEvents } from "react-leaflet";
import { icon } from "leaflet";
import React from "react";
import { Converter } from "./Converter";
export default function LocationMarker(props) {
  const {
    position1,
    position2,
    setPosition1,
    setPosition2,
    setAddress1,
    setAddress2,
    choosenumber,
  } = props;
  const customIcon = icon({
    iconUrl: "placeholder.png",
    iconSize: [38, 38],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40],
  });

  useMapEvents({
    click(e) {
      choosenumber == 1 ? setPosition1(e.latlng) : setPosition2(e.latlng);
      choosenumber == 1
        ? Converter(position1.lat, position1.lng, setAddress1)
        : Converter(position2.lat, position2.lng, setAddress2);
    },
  });

  return position1 === null ? null : (
    <>
      <Marker position={position1} icon={customIcon}>
        <Popup>You are in </Popup>
      </Marker>
      <Marker position={position2} icon={customIcon}>
        <Popup>You are in </Popup>
      </Marker>
    </>
  );
}
