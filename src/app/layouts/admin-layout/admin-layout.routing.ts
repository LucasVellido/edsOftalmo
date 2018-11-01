import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { listPatientsComponent } from 'app/list-of-patients/list-patients/list-patients.component';
import { PatientRecordComponent } from '../../list-of-patients/patient-record/patient-record.component';
import { ListFormularyComponent } from 'app/list-of-formulary/list-formulary/list-formulary.component';
import { FormularyOphtalmologistyComponent } from 'app/list-of-formulary/formulary-ophtalmologisty/formulary-ophtalmologisty.component';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'listPatients',
    //   component: listPatientsComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'formulary-ophtalmologisty',
    //         component: FormularyOphtalmologistyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'list-patients',   component: listPatientsComponent },
    { path: 'list-patients/patient-record',   component: PatientRecordComponent },
    { path: 'list-patients/patient-record:id',   component: PatientRecordComponent },
    { path: 'list-formulary',     component: ListFormularyComponent },
    { path: 'list-formulary/formulary-ophtalmologisty',     component: FormularyOphtalmologistyComponent },
    { path: 'list-formulary/formulary-ophtalmologisty/:id',     component: FormularyOphtalmologistyComponent },
    { path: 'formulary-ophtalmologisty',     component: FormularyOphtalmologistyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
];
