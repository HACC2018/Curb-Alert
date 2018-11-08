import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScheduleitemsPage } from './scheduleitems';

@NgModule({
  declarations: [
    ScheduleitemsPage,
  ],
  imports: [
    IonicPageModule.forChild(ScheduleitemsPage),
  ],
  exports: [
    ScheduleitemsPage
  ]
})
export class ScheduleitemsPageModule {}
