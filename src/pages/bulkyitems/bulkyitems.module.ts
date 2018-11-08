import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BulkyitemsPage } from './bulkyitems';

@NgModule({
  declarations: [
    BulkyitemsPage,
  ],
  imports: [
    IonicPageModule.forChild(BulkyitemsPage),
  ],
})
export class BulkyitemsPageModule {}
