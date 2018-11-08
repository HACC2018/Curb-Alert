import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import categories from '../../data/categories';
import wasteItems from '../../data/waste-items';

import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';

@IonicPage()
@Component({
    selector: 'page-audit-report',
    templateUrl: 'audit-report.html',
})

export class AuditReportPage implements OnInit{

    item: any = null;
    waysteForm: {
        id: number;
        title: string;
        location: string;
        wasteTypeIds: number[];
    }[];

    categoriesCollection:{
        id: number;
        name: string;
    }[];

    auditReportForm: FormGroup;

    constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder) {

        this.item = this.navParams.get('myData');
        this.categoriesCollection = categories;
       // this.waysteForm = wasteItems;

    }
    
    ngOnInit() {
        this.auditReportForm = this.fb.group({
            test: '',
            wasteItem: this.fb.array([
               this.createItem()
            ])
        });
    }

    createItem(): FormGroup{
        return this.fb.group({
            name: '',
            category: '',
            weight: '',
            volume: ''
        });
    }


}