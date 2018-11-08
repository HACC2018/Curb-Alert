import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NavigationBarDesktopPage } from './navigation-bar-desktop';

@NgModule({
  declarations: [
    NavigationBarDesktopPage,
  ],
  imports: [
    IonicPageModule.forChild(NavigationBarDesktopPage),
  ],
})
export class NavigationBarDesktopPageModule {}
