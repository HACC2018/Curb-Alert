import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import schedules from '../../data/schedules';

@IonicPage()
@Component({
  selector: 'page-scheduleitems',
  templateUrl: 'scheduleitems.html',
})
export class ScheduleitemsPage {
  item: any = null;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  

  this.item = this.navParams.get('myData');
  }

}
