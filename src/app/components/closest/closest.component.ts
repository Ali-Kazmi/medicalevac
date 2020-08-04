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
  lat;
  long; 
  isCollapsed : boolean=true; 

  hideInput:boolean=true; 
  inputValue; 
  constructor() { 
    this.headers = ["id", "name", "elevation", "slopeRoll", "slopePitch","lat","long"];
    this.lz=LandingZones;
  }


  //for the closest component, on the collapse I want it to do the following: 
  //0) validate input is lat long 
  //1) go through the lz (landing zones) and calculate the distance between this point and that one. 
  //2) store the minimum as we do step 1, changing it if we find something closer. 
  //3) 
  toggleCollapse(){
    this.isCollapsed=!this.isCollapsed; 
    console.log(this.lat);
    console.log(this.long);
  }
  
  ngOnInit(): void {
  }

}
