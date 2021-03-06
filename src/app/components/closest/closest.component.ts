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
  closest;
  closestDist;
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
  //3) return the index and that distance at the end by setting the class variables to this value. This is then used in the html to display results. 
  toggleCollapse(){
    this.isCollapsed=!this.isCollapsed; 

    var i;
    var closestIndex=0;
    var closestDistance=1000000000; 
    for (i = 0; i < this.lz.length; i++) {
      var thisDistance=this.distance(this.lat,this.long, this.lz[i].lat,this.lz[i].long,'M');
      if(thisDistance<closestDistance){
        closestDistance=thisDistance; 
        closestIndex=i;
        console.log(closestIndex+1,closestDistance);
      }
      
    }
    this.closest=closestIndex; 
    this.closestDist=closestDistance;
  }
  
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//:::                                                                         :::
//:::  This routine calculates the distance between two points (given the     :::
//:::  latitude/longitude of those points). It is being used to calculate     :::
//:::  the distance between two locations using GeoDataSource (TM) prodducts  :::
//:::                                                                         :::
//:::  Definitions:                                                           :::
//:::    South latitudes are negative, east longitudes are positive           :::
//:::                                                                         :::
//:::  Passed to function:                                                    :::
//:::    lat1, lon1 = Latitude and Longitude of point 1 (in decimal degrees)  :::
//:::    lat2, lon2 = Latitude and Longitude of point 2 (in decimal degrees)  :::
//:::    unit = the unit you desire for results                               :::
//:::           where: 'M' is statute miles (default)                         :::
//:::                  'K' is kilometers                                      :::
//:::                  'N' is nautical miles                                  :::
//:::                                                                         :::
//:::  Worldwide cities and other features databases with latitude longitude  :::
//:::  are available at https://www.geodatasource.com                         :::
//:::                                                                         :::
//:::  For enquiries, please contact sales@geodatasource.com                  :::
//:::                                                                         :::
//:::  Official Web site: https://www.geodatasource.com                       :::
//:::                                                                         :::
//:::               GeoDataSource.com (C) All Rights Reserved 2018            :::
//:::                                                                         :::
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

distance(lat1, lon1, lat2, lon2, unit) {
	if ((lat1 == lat2) && (lon1 == lon2)) {
		return 0;
	}
	else {
		var radlat1 = Math.PI * lat1/180;
		var radlat2 = Math.PI * lat2/180;
		var theta = lon1-lon2;
		var radtheta = Math.PI * theta/180;
		var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
		if (dist > 1) {
			dist = 1;
		}
		dist = Math.acos(dist);
		dist = dist * 180/Math.PI;
		dist = dist * 60 * 1.1515;
		if (unit=="K") { dist = dist * 1.609344 }
		if (unit=="N") { dist = dist * 0.8684 }
		return dist;
	}
}

  ngOnInit(): void {
  }


  
}
