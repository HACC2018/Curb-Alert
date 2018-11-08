import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GreenbinPage } from './greenbin';

@NgModule({
  declarations: [
    GreenbinPage,
  ],
  imports: [
    IonicPageModule.forChild(GreenbinPage),
  ],
})
export class GreenbinPageModule {}
