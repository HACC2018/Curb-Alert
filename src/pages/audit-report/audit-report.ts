import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import categories from '../../data/categories';
import wasteItems from '../../data/waste-items';
@IonicPage()
@Component({
    selector: 'page-audit-report',
    templateUrl: 'audit-report.html',
})
export class AuditReportPage {

    item: any = null;
    waysteForm: {
        id: number;
        title: string;
        location: string;
        wasteTypeIds: number[];
    }[];

    


    constructor(public navCtrl: NavController, public navParams: NavParams) {
        
        this.item = this.navParams.get('myData');
        this.waysteForm = wasteItems;
    
    }


}