import { Component, OnInit, ViewChild } from '@angular/core';
import { GoogleMap, MapInfoWindow } from '@angular/google-maps';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
    @ViewChild(GoogleMap, { static: false }) map!: GoogleMap;
    @ViewChild(MapInfoWindow, { static: false }) info!: MapInfoWindow;

  markers:any = [];
  infoContent: string = "";

  zoom = 20
  center!: google.maps.LatLngLiteral
  options: google.maps.MapOptions = {
    mapTypeId: 'roadmap',
    zoomControl: true,
    scrollwheel: true,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
  }

  constructor() { }

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition(x=>{
      this.center={
        lat: 48.914133374486255, 
        lng: 24.711184831236928
      };
      this.markers.push({
        position:{
          lat: 48.914133374486255, 
          lng: 24.711184831236928
        },
        label: {
          color: "black",
          text: "Vet Clinic"
        },
        title: "Marker Title",
        info: "Marker info",
        options: {
          animation: google.maps.Animation.DROP
        }
      });
    });
  }

}
