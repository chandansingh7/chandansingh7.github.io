import { FormControl } from '@angular/forms';

import { emailValidator, minLengthTrimmed } from './contact.validators';

describe('contact validators', () => {
  it('minLengthTrimmed rejects short trimmed values', () => {
    const control = new FormControl('  a ', minLengthTrimmed(2));
    expect(control.errors?.['minLengthTrimmed']).toBeTruthy();
    control.setValue('  ab ');
    expect(control.errors).toBeNull();
  });

  it('minLengthTrimmed ignores empty values so required can handle them', () => {
    const control = new FormControl('', minLengthTrimmed(2));
    expect(control.errors).toBeNull();
    control.setValue('   ');
    expect(control.errors).toBeNull();
  });

  it('emailValidator accepts valid email', () => {
    const control = new FormControl('', emailValidator);
    control.setValue('bad');
    expect(control.errors?.['email']).toBeTruthy();
    control.setValue('user@example.com');
    expect(control.errors).toBeNull();
  });
});
