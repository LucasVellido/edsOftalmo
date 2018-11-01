import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';

@Component({
    selector: 'app-patient-record',
    templateUrl: './patient-record.component.html',
    styleUrls: ['./patient-record.component.scss']
})
export class PatientRecordComponent implements OnInit {

    public form: FormGroup;
    public labelBtn: string = 'SALVAR';
    public listGenders = [
        { id: 1, description: 'Masculino' },
        { id: 2, description: 'Feminino' }
    ]
    public patient: any = {};

    constructor(private http: HttpClient,
        private activatedRoute: ActivatedRoute,
        private router: Router) { }

    ngOnInit() {
        this.form = new FormGroup({
            'id': new FormControl(null),
            'name': new FormControl(null, Validators.required),
            'gender': new FormControl(null, [Validators.required]),
            'birthDate': new FormControl(null, [Validators.required]),
            'age': new FormControl({ value: null, disabled: true }),
            'rg': new FormControl(null, Validators.required),
            'neighborhood': new FormControl(null, Validators.required),
            'street': new FormControl(null, Validators.required),
            'complement': new FormControl(null),
            'city': new FormControl(null, Validators.required),
            'observations': new FormControl(null),
        });

        this.form.get('birthDate').valueChanges.subscribe((birthDate) => {
            let dateUpdated = new Date(birthDate)
            this.calculateAge(dateUpdated);
        });

        this.activatedRoute.params.subscribe((param: Params) => {
            if (param['id'] && !isNaN(+param['id'])) {
                this.http.get('http://10.10.10.154:8090/patients/' + param['id']).subscribe(resp => {
                    this.patient = resp;
                    this.form.patchValue(resp);
                    this.form.disable();
                }, error => console.error(error))
            }
        });
    }

    public onSubmit(): void {
        if (this.form.get('id').value == null) {
            /* CREATE */
            this.http.post('http://10.10.10.154:8090/patients', this.form.value).subscribe(resp => {
                this.router.navigate(['list-patients']);
            }, error => console.error(error));
        } else {
            /* UPDATE */
            this.http.put('http://10.10.10.154:8090/patients', this.form.value).subscribe(resp => {
                this.router.navigate(['list-patients']);
            }, error => console.error(error));
        }
    }

    public updatePatientRecord(): void {
        this.labelBtn = 'ATUALIZAR'
        this.form.enable();
    }

    public calculateAge(birthDate): void {
        if (birthDate) {
            let today: Date = new Date();
            let age = today.getFullYear() - new Date(birthDate).getFullYear();
            if (new Date(today.getFullYear(), today.getMonth(), new Date().getDate()) <
                new Date(today.getFullYear(), new Date(birthDate).getMonth(), new Date(birthDate).getDate()))
                age--;
            this.form.get('age').setValue(age);
        }
    }
}
