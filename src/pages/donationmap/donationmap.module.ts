import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DonationmapPage } from './donationmap';

@NgModule({
  declarations: [
    DonationmapPage,
  ],
  imports: [
    IonicPageModule.forChild(DonationmapPage),
  ],
})
export class DonationmapPageModule {}
