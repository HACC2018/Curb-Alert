import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { schedules } from './schedules';

@NgModule({
  declarations: [
    schedules,
  ],
  imports: [
    IonicPageModule.forChild(schedules),
  ],
})
export class MapsPageModule {}
