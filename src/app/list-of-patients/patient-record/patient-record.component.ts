import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-patient-record',
    templateUrl: './patient-record.component.html',
    styleUrls: ['./patient-record.component.scss']
})
export class PatientRecordComponent implements OnInit {

    form: FormGroup;
    
    public patient = {
        "id":5,
        "age":27,
        "dateOfBirth":27,
        "rg":"34.434.355-43",
        "name":"Jessica de Souza Berttoti",
        "street":"R. Qualquer",
        "district":"Jardim da Paineiras",
        "complement":"Apartamento 188, sala 122",
        "city":"Campinas",
        "observation":"Esse paciente consta com astigmatismo de 0,75 no olho direito sem possibilidade de círurgia",
    }

    constructor() { }

    ngOnInit() {
        this.form = new FormGroup({
            'name' : new FormControl(null, Validators.required),
            'age' : new FormControl({value: null, disabled: true}),
            'dateOfBirth' : new FormControl(null,[Validators.required]),
            'rg' : new FormControl(null, Validators.required),
            'district' : new FormControl(null, Validators.required),
            'street' : new FormControl(null, Validators.required),
            'complement' : new FormControl(null),
            'city' : new FormControl(null, Validators.required),
            'observation' : new FormControl(null),
          });

          this.form.get('dateOfBirth').valueChanges.subscribe((value)=>{
                // contaaaa
                this.form.get('age').setValue(value);
          });
    }

    public onSubmit(): void{
        console.log(this.form.value);
    }   

}
