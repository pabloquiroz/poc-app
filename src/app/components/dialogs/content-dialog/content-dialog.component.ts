import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormComponent } from '../../forms/reactive-form/reactive-form.component';
import { FormField } from '../../../interfaces/form-fields.interface';

@Component({
  selector: 'app-content-dialog',
  imports: [
    MatDialogModule,
    MatButtonModule,
    ReactiveFormComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h2 mat-dialog-title>{{ data.title }}</h2>
    <mat-dialog-content class="mat-dialog-content">
      <app-reactive-form [fields]="data.formFields">
      </app-reactive-form>
    </mat-dialog-content>
  `,
  styles: `
    .mat-dialog-content {
      min-width: 560px;
      width: 100%;
    }

    @media (max-width: 600px) {
      .mat-dialog-content {
        min-width: auto;
        width: 100%;
        padding: 16px;
      }
    }
  `
})
export class ContentDialogComponent {
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { 
      title: string,
      content: string,
      formFields: FormField[],
  }) {}
}
