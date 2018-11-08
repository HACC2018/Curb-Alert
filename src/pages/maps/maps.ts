import { Component } from '@angular/core';


import { NavController } from 'ionic-angular';

import { RecyclemapPage } from '../../pages/recyclemap/recyclemap';
import { DonationmapPage } from '../../pages/donationmap/donationmap';



@Component({
  selector: 'page-maps',
  templateUrl: 'maps.html',
})
export class MapsPage {

    rootPage :any = RecyclemapPage ;
    constructor(public navCtrl: NavController) {

    }
    openrecyclemap(){
        this.rootPage = RecyclemapPage ;
    }
    opendonationmap(){
        this.rootPage = DonationmapPage ;
}          

}