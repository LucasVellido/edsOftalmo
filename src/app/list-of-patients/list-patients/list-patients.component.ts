import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-list-patients',
    templateUrl: './list-patients.component.html',
    styleUrls: ['./list-patients.component.css']
})
export class listPatientsComponent implements OnInit {


    public arrayPatients = [
        {"id":1,"age":27, "status": "Em consulta","name":"Alexandre Gama", "address":"R. Qualquer"},
        {"id":2,"age":27, "status": "Em consulta","name":"Lucas dos Santos Vellido", "address":"R. Qualquer"},
        {"id":3,"age":27, "status": "Em consulta","name":"Rodrigo dos Reis", "address":"R. Qualquer"},
        {"id":4,"age":27, "status": "Alta","name":"Thiago Ventura Maskaranhas", "address":"R. Qualquer"},
        {"id":5,"age":27, "status": "Alta","name":"Jessica de Souza Berttoti", "address":"R. Qualquer"},
        {"id":6,"age":27, "status": "Alta","name":"Alex Francisco dos Impérios", "address":"R. Qualquer"},
        {"id":7,"age":27, "status": "Alta","name":"Samuel Biazotto", "address":"R. Qualquer"},

    ]

    constructor() { }

    ngOnInit() {
    }

    public openFormularyOphtalmologisty() {
        
    }

}
