import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { BlackbinPage } from '../../pages/blackbin/blackbin';
import { GreenbinPage } from '../../pages/greenbin/greenbin';
import { BluebinPage } from '../../pages/bluebin/bluebin';
import { BulkyitemsPage } from '../../pages/bulkyitems/bulkyitems';



@Component({
selector: 'page-schedules',
templateUrl: 'schedules.html'
})
export class schedules {
    rootPage :any = GreenbinPage ;
    constructor(public navCtrl: NavController) {

    }
    opengreenbin(){
        this.rootPage = GreenbinPage ;
    }
    openblackbin(){
        this.rootPage = BlackbinPage ;
    }    
    openbluebin(){
      this.rootPage = BluebinPage ;
    }  
  openbulkyitems(){
    this.rootPage = BulkyitemsPage ;
}          

}