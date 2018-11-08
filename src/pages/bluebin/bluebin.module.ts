import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BluebinPage } from './bluebin';

@NgModule({
  declarations: [
    BluebinPage,
  ],
  imports: [
    IonicPageModule.forChild(BluebinPage),
  ],
})
export class BluebinPageModule {}
