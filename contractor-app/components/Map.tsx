"use client";
import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

const position: [number, number] = [41.10702, 28.75873];

const Map = () => {
  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={true} className="h-96 w-full">
      <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position}>
        <Popup>Ofsan Yapı Mühendislik</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
