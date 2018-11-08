import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecyclemapPage } from './recyclemap';

@NgModule({
  declarations: [
    RecyclemapPage,
  ],
  imports: [
    IonicPageModule.forChild(RecyclemapPage),
  ],
})
export class RecyclemapPageModule {}
