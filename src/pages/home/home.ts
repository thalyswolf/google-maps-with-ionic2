import { Component } from '@angular/core';

import { NavController, Platform } from 'ionic-angular';
declare let google;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, platform: Platform) {
    platform.ready().then(()=>{
        this.initPage();
      });
  }



  private initPage(){
    let latitudeLongitude = new google.maps.LatLng(-26.851759,-49.273573);

      let mapOption = {
      center: latitudeLongitude,
      zoom:18,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true
    };

    let element = document.getElementById('map');

    let map = new google.maps.Map(element, mapOption);
  }
}
