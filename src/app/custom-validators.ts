import {FormControl} from '@angular/forms';
import {restrictedE} from './restricted-emails';

export class CustomValidators {
  static restrictedEmails(control: FormControl): {[key: string]: boolean} {

    if (restrictedE.includes(control.value)){
      return {restrictedEmail: true};
    }
    return null;
  }
}
