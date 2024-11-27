import { Component, effect, inject, input } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { DialogService } from '../../services/dialog.service';
import { FormService } from '../../services/form.service';
import { LocalStorageService } from '../../services/local-storage.service';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { LoadingService } from '../../services/loading.service';
@Component({
  selector: 'app-navigation',
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    CommonModule,
    MatProgressBarModule
  ],
  template: `
    <mat-toolbar primary>
      <button mat-icon-button class="example-icon" aria-label="Example icon-button with menu icon">
        <mat-icon>menu</mat-icon>
      </button>
      <span>{{name()}}</span>
      <span [ngClass]="{'menu-spacer': isMenuSpacerActive}"></span>
      <button mat-icon-button class="example-icon favorite-icon" aria-label="Example icon-button with heart icon">
        <mat-icon (click)="reset()">refresh</mat-icon>
      </button>
      <button (click)="create()" mat-icon-button class="example-icon" aria-label="Example icon-button with share icon">
        <mat-icon>add</mat-icon>
      </button>
    </mat-toolbar>
    @if(this.loadingService.loading()) {
      <mat-progress-bar color="primary" mode="indeterminate"></mat-progress-bar>
    }

  `,
  styles: `
  `
})
export class NavigationComponent {
  name = input<string>('My App');
  isMenuSpacerActive = input<boolean>(true);
  readonly dialogService = inject(DialogService);
  readonly formService = inject(FormService);
  readonly localStorageService = inject(LocalStorageService);
  readonly loadingService = inject(LoadingService);

  constructor() {
    effect(() => {
      console.log('Loading effects NAV:', this.loadingService.loading());
    });
  }

  create() {
    this.formService.resetFormFields();
    
    this.dialogService.
      openContentDialog(
        undefined,
        undefined,
        this.formService.getFormFields()
      ).subscribe(result => {
        if(result) {
          this.loadingService.loading.set(true);
          this.localStorageService.createLocalData(result);
        }
    });
  }

  reset() {
    this.loadingService.loading.set(true);
    setTimeout(() => {
      this.localStorageService.loadInit();
      this.loadingService.loading.set(false); 
    }, 2000); 
  }
}
