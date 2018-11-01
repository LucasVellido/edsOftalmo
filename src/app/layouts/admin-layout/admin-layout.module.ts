import { PatientRecordComponent } from './../../list-of-patients/patient-record/patient-record.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { listPatientsComponent } from 'app/list-of-patients/list-patients/list-patients.component';
import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatTooltipModule,
} from '@angular/material';
import { ListFormularyComponent } from 'app/list-of-formulary/list-formulary/list-formulary.component';
import { FormularyOphtalmologistyComponent } from 'app/list-of-formulary/formulary-ophtalmologisty/formulary-ophtalmologisty.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatInputModule,
    MatTooltipModule,
    ReactiveFormsModule
  ],
  declarations: [
    DashboardComponent,
    listPatientsComponent,
    ListFormularyComponent,
    FormularyOphtalmologistyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    PatientRecordComponent
  ]
})

export class AdminLayoutModule {}
