import { Component, OnInit } from '@angular/core';
import {LandingZones} from "../../LandingZoneData";

@Component({
  selector: 'app-output-table',
  templateUrl: './output-table.component.html',
  styleUrls: ['./output-table.component.css']
})
export class OutputTableComponent implements OnInit {
  headers;
  lz;
  constructor() { 
    this.headers = ["id", "name", "elevation", "slopeRoll", "slopePitch","lat","long"];
    this.lz=LandingZones;
  }

  ngOnInit(): void {
  }

}
