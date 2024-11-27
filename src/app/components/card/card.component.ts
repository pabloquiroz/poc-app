import { Component, input, output, SimpleChanges  } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { TruncatePipe } from '../../pipes/truncate.pipe';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-card',
  imports: [
    MatCardModule,
    MatButtonModule,
    TruncatePipe,
  ],
  template: `
    <mat-card class="card" appearance="outlined">
      <mat-card-header>
        <div mat-card-avatar class="header-image"></div>
        <mat-card-title>{{ title() }}</mat-card-title>
        <mat-card-subtitle>{{ subtitle() }}</mat-card-subtitle>
      </mat-card-header>
      <img mat-card-image src="https://material.angular.io/assets/img/examples/shiba2.jpg" [alt]="imageAlt()">
      <!--<img mat-card-image [src]="imageThumbnail" [alt]="imageAlt()">-->
      <mat-card-content>
        <p>
          {{ content() | truncate:100  }}
        </p>
      </mat-card-content>
      <mat-card-actions>
        <button mat-button (click)="onUpdate()">Update</button>
        <button mat-button (click)="onDelete()">Delete</button>
      </mat-card-actions>
    </mat-card>
  `,
  styles: `
    .card {
      width: 100%;
      border-radius: 16px;
      border-color: #c4c6d0;
    }
    .header-image {
      background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');
      background-size: cover;
    }
  `
})
export class CardComponent {
  id = input.required<string>();
  imageSrc = input<string>('');
  imageThumbnail!: string;
  imageAlt = input<string>('');
  title = input<string>('Without title');
  subtitle = input<string>('');
  content = input<string>('');
  showUpdate = input<boolean>(true);
  showDelete = input<boolean>(true);

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['imageSrc']) {   
      this.imageThumbnail = this.imageSrc();
    }
  }

  update = output<string>();
  delete = output<string>();


  onUpdate() {
    this.update.emit(this.id());
  }

  onDelete() {
    this.delete.emit(this.id());
  }
}
