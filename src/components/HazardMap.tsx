"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";


const redIcon = L.icon({
  iconUrl: "/icons/marker-icon-red.png",
  shadowUrl: "/icons/marker-shadow.png",
  iconSize: [40, 60],  
  iconAnchor: [20, 60],  
  popupAnchor: [1, -45], 
  shadowSize: [50, 64],  
});


const yellowIcon = L.icon({
  iconUrl: "/icons/marker-icon-red.png",
  shadowUrl: "/icons/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const greenIcon = L.icon({
  iconUrl: "/icons/marker-icon-red.png",
  shadowUrl: "/icons/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});


interface HazardZone {
  id: string;
  name: string;
  riskLevel: "high" | "medium" | "low";
  coordinates: { lat: number; lng: number };
  alerts: number;
  type: string;
}

interface HazardReport {
  id: string;
  type: string;
  location: string;
  coordinates: { lat: number; lng: number };
  severity: "high" | "medium" | "low";
  time: string;
}

const HazardMap = () => {
  const [selectedZone, setSelectedZone] = useState<HazardZone | null>(null);
  const [selectedReport, setSelectedReport] = useState<HazardReport | null>(
    null
  );


  const hazardZones: HazardZone[] = [
    {
      id: "z1",
      name: "Chennai Coast",
      riskLevel: "high",
      coordinates: { lat: 13.0827, lng: 80.2707 },
      alerts: 8,
      type: "Tsunami Warning",
    },
    {
      id: "z2",
      name: "Visakhapatnam",
      riskLevel: "medium",
      coordinates: { lat: 17.6868, lng: 83.2185 },
      alerts: 3,
      type: "High Waves",
    },
    {
      id: "z3",
      name: "Kochi Harbor",
      riskLevel: "high",
      coordinates: { lat: 9.9312, lng: 76.2673 },
      alerts: 12,
      type: "Oil Spill",
    },
    {
      id: "z4",
      name: "Mumbai Coast",
      riskLevel: "medium",
      coordinates: { lat: 19.076, lng: 72.8777 },
      alerts: 5,
      type: "Storm Surge",
    },
    {
      id: "z5",
      name: "Goa Beaches",
      riskLevel: "low",
      coordinates: { lat: 15.2993, lng: 74.124 },
      alerts: 1,
      type: "Monitoring",
    },
    {
      id: "z6",
      name: "Paradip Port",
      riskLevel: "medium",
      coordinates: { lat: 20.3167, lng: 86.6167 },
      alerts: 4,
      type: "Cyclone Alert",
    },
    {
      id: "z7",
      name: "Kandla Port",
      riskLevel: "low",
      coordinates: { lat: 23.0336, lng: 70.2167 },
      alerts: 2,
      type: "Normal",
    },
  ];


  const recentReports: HazardReport[] = [
    {
      id: "r1",
      type: "Tsunami",
      location: "Chennai",
      coordinates: { lat: 13.05, lng: 80.25 },
      severity: "high",
      time: "2 mins",
    },
    {
      id: "r2",
      type: "Oil Spill",
      location: "Kochi",
      coordinates: { lat: 9.93, lng: 76.28 },
      severity: "high",
      time: "5 mins",
    },
    {
      id: "r3",
      type: "High Waves",
      location: "Vizag",
      coordinates: { lat: 17.7, lng: 83.22 },
      severity: "medium",
      time: "8 mins",
    },
    {
      id: "r4",
      type: "Storm",
      location: "Mumbai",
      coordinates: { lat: 19.08, lng: 72.88 },
      severity: "medium",
      time: "12 mins",
    },
  ];

  const getMarkerIcon = (level: "high" | "medium" | "low") => {
    switch (level) {
      case "high":
        return redIcon;
      case "medium":
        return yellowIcon;
      case "low":
        return greenIcon;
    }
  };

  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MapPin className="h-5 w-5 text-primary" />
          Live Hazard Map
        </CardTitle>
        <CardDescription>
          Interactive risk zones with real-time alerts
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-96 relative">
          <MapContainer
            center={[16.5, 80]} // India center
            zoom={5}
            scrollWheelZoom={true}
            className="h-full w-full rounded-lg z-0"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {/* Hazard Zones */}
            {hazardZones.map((zone) => (
              <Marker
                key={zone.id}
                position={[zone.coordinates.lat, zone.coordinates.lng]}
                icon={getMarkerIcon(zone.riskLevel)}
                eventHandlers={{
                  click: () =>
                    setSelectedZone(
                      selectedZone?.id === zone.id ? null : zone
                    ),
                }}
              >
                <Popup>
                  <strong>{zone.name}</strong>
                  <br />
                  {zone.type}
                  <br />
                  Alerts: {zone.alerts}
                </Popup>
              </Marker>
            ))}

            {/* Recent Reports */}
            {recentReports.map((report) => (
              <Marker
                key={report.id}
                position={[report.coordinates.lat, report.coordinates.lng]}
                icon={getMarkerIcon(report.severity)}
                eventHandlers={{
                  click: () =>
                    setSelectedReport(
                      selectedReport?.id === report.id ? null : report
                    ),
                }}
              >
                <Popup>
                  <strong>{report.type}</strong> – {report.location}
                  <br />
                  Severity: {report.severity.toUpperCase()}
                  <br />
                  Reported: {report.time} ago
                </Popup>
              </Marker>
            ))}
          </MapContainer>

          {/* Zone Details */}
          {selectedZone && (
            <div className="absolute bottom-4 left-4 bg-white p-3 rounded-lg shadow-lg border w-64">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium">{selectedZone.name}</h3>
                <Badge>{selectedZone.riskLevel.toUpperCase()}</Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                {selectedZone.type}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  Active Alerts: {selectedZone.alerts}
                </span>
                <Button variant="outline" size="sm">
                  View Details
                </Button>
              </div>
            </div>
          )}

          {/* Report Details */}
          {selectedReport && (
            <div className="absolute bottom-4 right-4 bg-white p-3 rounded-lg shadow-lg border w-64">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium">{selectedReport.type} Report</h3>
                <Badge>{selectedReport.severity.toUpperCase()}</Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                {selectedReport.location}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  Reported: {selectedReport.time} ago
                </span>
                <Button variant="outline" size="sm">
                  View Report
                </Button>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default HazardMap;

