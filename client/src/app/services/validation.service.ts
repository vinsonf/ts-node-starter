import { Injectable } from '@angular/core';
import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";
import {PATTERNS} from "./consts/validation.patterns";


@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor(
  ) { }

  public ValidEmail(isRequired: boolean): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return isRequired ? { incorrectMailFormat: 'Email is required.' } : null;
      }
      if (control.value.length < 4) {
        return {incorrectMailFormat: 'Please enter a valid email.'};
      }
      if (control.value.indexOf('.') === -1) {
        return {incorrectMailFormat: 'Please enter a valid email.'};
      }
      if (control.value.split('.')[1].length < 1) {
        return {incorrectMailFormat: 'Please enter a valid email.'};
      }
      if (!PATTERNS.EMAIL_REGEX.test(control.value)) {
        return {incorrectMailFormat: 'Please enter a valid email.'};
      }

      return null;
    };
  }

  public validPhoneNumber(isRequired?: boolean): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return isRequired ? { invalidPhone: 'Phone number is required.' } : null;
      }
      const strippedValue = control.value.replace(PATTERNS.NON_DECIMAL_DIGITS, '');
      if (!PATTERNS.PHONE_REGEX.test(strippedValue)) {
        return { invalidPhone: 'Phone number is invalid.' };
      }

      return null;
    };
  }

  public validZipcode(isRequired?: boolean): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return isRequired ? { noValidZip: 'Zip Code is required.' } : null;
      }
      if (!PATTERNS.ZIPCODE_FULL_REGEX.test(control.value)) {
        return {noValidZip: 'Zip Code is invalid.'};
      }

      return null;
    };
  }
}
