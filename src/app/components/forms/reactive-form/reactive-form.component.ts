import { Component, Input, OnInit, inject, output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators, FormGroup } from '@angular/forms';
import { FormFieldComponent } from './form-field.component';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormFieldComponent,
    MatButtonModule,
    MatDialogModule
  ],
  template: `
    <form class="reactive-form" [formGroup]="profileForm" (ngSubmit)="onSubmit()">
    <!-- <span>{{ profileForm.valid }}</span>   -->
    <ng-container *ngFor="let field of fields">
        <app-form-field
          [form]="profileForm"
          [controlName]="field.controlName"
          [label]="field.label"
          [type]="field.type"
          [errorMessage]="field.errorMessage"
        ></app-form-field>
      </ng-container>
      <div class="dialog-actions" align="end">
        <button mat-button mat-dialog-close>Cancel</button>
        <button 
          mat-button 
          cdkFocusInitial 
          [mat-dialog-close]="profileForm.value"
          type="submit"
          [disabled]="profileForm.invalid"
        >Submit</button>
      </div>
    </form>
  `,
  styles: [`
    .reactive-form {
      min-width: 150px;
      max-width: 500px;
      width: 100%;
    }
    .error {
      color: red;
    }
  `]
})
export class ReactiveFormComponent implements OnInit {
  @Input() fields: any[] = [];

  private formBuilder = inject(FormBuilder);
  profileForm: FormGroup = this.formBuilder.group({});

  ngOnInit() {
    this.fields = this.fields || []; 
    this.createFormControls();
  }

  createFormControls() {
    this.fields.forEach(field => {
      this.profileForm.addControl(
        field.controlName,
        this.formBuilder.control(field.value || '', field.validators || [])
      );
    });
  }

  onSubmit() {
    if (this.profileForm.valid) {
      console.log(this.profileForm.value);
    } else {
      console.log('Form is invalid');
      this.profileForm.markAllAsTouched(); 
    }
  }
}