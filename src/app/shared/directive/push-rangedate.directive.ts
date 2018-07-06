import { Directive } from '@angular/core';
import { AbstractControl, FormGroup, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';

/** A hero's name can't match the hero's alter ego */
export const RangeDateValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const date1 = control.get('date1');
  const date2 = control.get('date2');
  console.log('date1', date1);
  console.log('date2', date2);
  return date1 && date2 && date1.value === date2.value ? { 'rangeDateInvalid': true } : null;
};

@Directive({
  selector: '[pushRangeDate]',
  providers: [{ provide: NG_VALIDATORS, useExisting: PushRangeDateDirective, multi: true }]
})
export class PushRangeDateDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors {
    return RangeDateValidator(control)
  }
}
