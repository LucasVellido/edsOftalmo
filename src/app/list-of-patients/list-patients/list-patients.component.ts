import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-list-patients',
    templateUrl: './list-patients.component.html',
    styleUrls: ['./list-patients.component.css']
})
export class listPatientsComponent implements OnInit {

    public arrayPatients: any;

    constructor(private http: HttpClient,
        private activatedRoute: ActivatedRoute,
        private router: Router) { }

    ngOnInit() {
        this.http.get('http://10.10.10.154:8090/patients').subscribe(resp => {
            this.arrayPatients = resp;
            this.arrayPatients.forEach(patient => {
                this.calculateAge(patient);
            });
            console.log(resp)
        }, error => console.error(error))
    }

    public openFormularyOphtalmologisty(idPatient) {
        this.router.navigate(['patient-record', idPatient], { relativeTo: this.activatedRoute });
    }

    public calculateAge(patient): void {
        if (patient.birthDate) {
            let today: Date = new Date();
            let age = today.getFullYear() - new Date(patient.birthDate).getFullYear();
            if (new Date(today.getFullYear(), today.getMonth(), new Date().getDate()) <
                new Date(today.getFullYear(), new Date(patient.birthDate).getMonth(), new Date(patient.birthDate).getDate()))
                age--;
            patient.age = age;
        }
         //  if(patient.birthDate){
        //   patient.age = new Date().getFullYear() - new Date(patient.birthDate).getFullYear()
        // }
    }
}
