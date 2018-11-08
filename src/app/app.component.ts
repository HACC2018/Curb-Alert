import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { NavigationBarPage } from '../pages/navigation-bar/navigation-bar';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = NavigationBarPage;
  @ViewChild(Nav) nav: Nav;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      if(platform.is('core')) {
        this.rootPage = HomePage;
      }

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

