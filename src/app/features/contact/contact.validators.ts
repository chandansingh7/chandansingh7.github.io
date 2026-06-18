import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function minLengthTrimmed(min: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = (control.value ?? '').trim();
    if (!value) {
      return null;
    }
    return value.length >= min ? null : { minLengthTrimmed: { requiredLength: min } };
  };
}

export function emailValidator(control: AbstractControl): ValidationErrors | null {
  const value = (control.value ?? '').trim();
  if (!value) {
    return null;
  }
  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  return valid ? null : { email: true };
}
