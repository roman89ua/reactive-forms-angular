import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomValidators} from './custom-validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  form: FormGroup;
  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.email,
        Validators.required,
        CustomValidators.restrictedEmails
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(36),
      ]),
      address: new FormGroup({
        country: new FormControl('ua', [
          Validators.required,
        ]),
        city: new FormControl('', [
          Validators.required,
        ])
      }),
      skills: new FormArray( [])
    });
  }
  submit(): void{
    console.log('Form submitted: ', this.form);
    console.log('Form data: ', this.form.value);
  }

  setCapital(): void {
    const cityMap = {
      ua: 'Kiev',
      ru: 'Moscow',
      us: 'Washington',
      by: 'Minsk'
    };
    const cityKey = this.form.get('address').get('country').value;
    const city = cityMap[cityKey];
    this.form.patchValue({address: {city}});
  }

  addSkill(): void {
    const control = new FormControl('', Validators.required);
    (this.form.get('skills') as FormArray).push(control);
  }
}
