import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormField } from '../interfaces/form-fields.interface';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  private formFields: FormField[] = [
    {
      controlName: 'full_name',
      label: 'Full Name',
      type: 'text',
      value: '',
      validators: [Validators.required],
      errorMessage: 'Full Name is required',
    },
    {
      controlName: 'caption_text',
      label: 'Caption Text',
      type: 'textarea',
      value: '',
      validators: [],
      errorMessage: '',
    },
  ];

  constructor() {}

  getFormFields(): FormField[] {
    return this.formFields.map(field => ({ ...field }));
  }

  updateFormFields(data: Record<string, string>): void {
    this.formFields = this.formFields.map(field => ({
      ...field,
      value: data[field.controlName] ?? field.value, 
    }));
  }

  resetFormFields(): void {
    this.formFields = this.formFields.map(field => ({
      ...field,
      value: '', 
    }));
  }
}
