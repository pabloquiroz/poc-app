import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SimpleDialogComponent } from '../components/dialogs/simple-dialog/simple-dialog.component';
import { ContentDialogComponent } from '../components/dialogs/content-dialog/content-dialog.component';
import { FormField } from '../interfaces/form-fields.interface';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) {}

  openSimpleDialog(
    width: string = '560px',
    enterAnimationDuration: string = '0ms',
    exitAnimationDuration: string = '0ms',
    title: string = 'Title Simple Dialog',
    content: string = 'Content Simple Dialog'
  ) {
    const dialogRef = this.dialog.open(SimpleDialogComponent, {
      width: width,
      enterAnimationDuration,
      exitAnimationDuration,
      data: { 
        title: title,
        content: content
      }
    });

    return dialogRef.afterClosed();
  }

  openContentDialog(
    title: string = 'Title Content Dialog',
    content: string = 'Content Dialog',
    formFields: FormField[]
  ) {
    const dialogRef = this.dialog.open(ContentDialogComponent, {
      data: {
        title: title,
        content: content,
        formFields: formFields
      }
    });
    return dialogRef.afterClosed();
  }
}
