import {FormControl} from '@angular/forms';
import {restrictedE} from './restricted-emails';
import {Observable} from 'rxjs';

export class CustomValidators {
  static restrictedEmails(control: FormControl): {[key: string]: boolean} {

    if (restrictedE.includes(control.value)){
      return {restrictedEmail: true};
    }
    return null;
  }

  static uniqEmail(control: FormControl): Promise<any> | Observable<any> {
    return new Promise(resolve => {
      setTimeout(() => {
        if (control.value === 'async@mail.ru'){
          resolve({uniqEmail: true});
        }else{
          resolve(null);
        }
      }, 1000);
    });
  }
}
