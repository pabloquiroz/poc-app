import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-form-field',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatInputModule,
    MatFormFieldModule
  ],
  template: `
    <div [formGroup]="form">
      <mat-form-field class="form-field-full-width">
        <mat-label>{{ label }}</mat-label>
        <ng-container [ngSwitch]="type">
          <input *ngSwitchCase="'text'" [formControlName]="controlName" matInput type="text">
          <textarea *ngSwitchCase="'textarea'" [formControlName]="controlName" matInput></textarea>
          
        </ng-container>
        <div *ngIf="form.get(controlName)?.invalid && form.get(controlName)?.touched">
          <small class="error">{{ errorMessage }}</small>
        </div>
      </mat-form-field>
    </div>
  `,
  styles: [`
    .form-field-full-width {
      width: 100%;
    }

    td {
      padding-right: 8px;
    }
    .error {
      color: red;
    }
  `]
})
export class FormFieldComponent {
  @Input() form!: FormGroup;
  @Input() controlName!: string;
  @Input() label!: string;
  @Input() type: string = 'text';
  @Input() errorMessage: string = 'This field is required';
}