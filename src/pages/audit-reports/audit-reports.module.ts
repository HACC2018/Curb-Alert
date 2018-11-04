import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AuditReportsPage } from './audit-reports';

@NgModule({
  declarations: [
    AuditReportsPage,
  ],
  imports: [
    IonicPageModule.forChild(AuditReportsPage),
  ],
})
export class AuditReportsPageModule {}
