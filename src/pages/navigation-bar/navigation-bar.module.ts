import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NavigationBarPage } from './navigation-bar';

@NgModule({
  declarations: [
    NavigationBarPage,
  ],
  imports: [
    IonicPageModule.forChild(NavigationBarPage),
  ],
})
export class NavigationBarPageModule {}
