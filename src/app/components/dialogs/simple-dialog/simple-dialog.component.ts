import { Component, Inject, inject } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogModule,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';

@Component({
  selector: 'app-simple-dialog',
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatDialogActions,
    MatDialogTitle,
    MatDialogContent
  ],
  template: `
    <h2 mat-dialog-title>{{ data.title }}</h2>
    <mat-dialog-content class="mat-dialog-content">
      {{ data.content }}
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button (click)="onCancel()">Cancel</button>
      <button mat-button (click)="onConfirm()">Confirm</button>
    </mat-dialog-actions>
  `,
  styles: `
    button {
      margin-right: 8px;
    }
    .mat-dialog-content {
      height: 40px;
      width: 100%;
    }
  `
})
export class SimpleDialogComponent {
  readonly dialogRef = inject(MatDialogRef<SimpleDialogComponent>);

  constructor(@Inject(MAT_DIALOG_DATA) public data: { title: string, content: string }) {}  

  onCancel(): void {
    this.dialogRef.close(false);
  }

  onConfirm(): void {
    this.dialogRef.close(true);
  }
}
