import { ValidatorFn } from '@angular/forms';

export interface FormField {
  controlName: string;
  label: string;
  type: string; 
  value: string;
  validators: ValidatorFn[];
  errorMessage: string;
}
