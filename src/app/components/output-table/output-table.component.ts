import { Component, OnInit } from '@angular/core';
import {LandingZones} from "../../LandingZoneData";
declare let L;

@Component({
  selector: 'app-output-table', 
  templateUrl: './output-table.component.html',
  styleUrls: ['./output-table.component.css']
})
export class OutputTableComponent implements OnInit {
  headers;
  lz;
  isCollapsed : boolean=true; 
  constructor() { 
    this.headers = ["id", "name", "elevation", "slopeRoll", "slopePitch","lat","long"];
    this.lz=LandingZones;
  }

  toggleCollapse(){
    this.isCollapsed=!this.isCollapsed; 
  }

  ngOnInit(): void {
    const map = L.map('map').setView([34, -84], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    for (var x = 0; x < this.lz.length; x++) {
      //console.log("landing zone: "+ this.lz[x].long)
      L.marker([this.lz[x].lat, this.lz[x].long]).addTo(map)
        .bindPopup(this.lz[x].name)
        .openPopup();
    }
  }

}
