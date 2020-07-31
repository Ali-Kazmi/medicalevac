import { Component, OnInit } from '@angular/core';
import {LandingZones} from "../../LandingZoneData";

@Component({
  selector: 'app-closest',
  templateUrl: './closest.component.html',
  styleUrls: ['./closest.component.css']
})
export class ClosestComponent implements OnInit {
  headers;
  lz;
  isCollapsed : boolean=true; 
  hideInput:boolean=true; 
  inputValue; 
  constructor() { 
    this.headers = ["id", "name", "elevation", "slopeRoll", "slopePitch","lat","long"];
    this.lz=LandingZones;
  }


  toggleCollapse(){
    this.isCollapsed=!this.isCollapsed; 
  }
  
  ngOnInit(): void {
  }

}
