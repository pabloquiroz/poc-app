import { Component, signal, OnInit, inject, viewChild, ViewChild, effect, computed } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';
import { InstagramScraperApi, Item} from '../interfaces';
import { CardComponent } from '../components/card/card.component';
import { DialogService  } from '../services/dialog.service';
import { FormService } from '../services/form.service';
import { FlexLayoutModule } from '@ngbracket/ngx-layout';
import { LoadingService } from '../services/loading.service';
@Component({
  selector: 'app-products',
  imports: [
    CardComponent,
    FlexLayoutModule,
  ],
  template: `
    @defer(when items.length > 0) {
      <div class="grid-container">
        @for (item of items; track item.id; let idx = $index) {
          <div class="card-container">
            <app-card 
              [title]="item.user.full_name"
              [id]="item.id"
              [imageAlt]="item.title"
              [content]="item.caption_text"
              [imageSrc]="item.user.profile_pic_url"
              (update)="onUpdate($event, item.user.full_name, item.caption_text)"
              (delete)="onDelete($event)"
            ></app-card>
          </div>
        }
      </div>
    }  @placeholder {
      <div class="container-loading">
        Loading ...
      </div>
    }
  `,
  styles: `
    .grid-container {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 16px;
    }
    .card-container {
      margin-bottom: 16px;
    }
    .container-loading {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh; 
      text-align: center;
    }
    button {
      margin-right: 8px;
    }
  `
})
export class PostComponent implements OnInit {
  readonly storageService = inject(LocalStorageService);
  readonly loadingService = inject(LoadingService);
  instagram = signal<InstagramScraperApi | null>(null);
  items: Item[] = [];

  constructor(
    private dialogService: DialogService,
    private readonly localStorageService: LocalStorageService,
    private formService: FormService
  ) {
    effect(() => {
      this.items = this.storageService.instagram()?.data.items ?? [];
      console.log('The effects is:', this.items);
    });
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.onInit();
    }, 2000); 
  }

  onInit() {
    this.storageService.loadInit();
    this.items = this.storageService.instagram()?.data.items ?? [];
    this.loadingService.loading.set(false);
  }

  onUpdate(
    id: string | number | null,
    full_name: string,
    caption_text: string
  ) {
    this.formService.updateFormFields({full_name, caption_text});

    this.dialogService.openContentDialog(
      full_name,
      caption_text,
      this.formService.getFormFields()
    ).subscribe(result => {
      if(result) {
        this.localStorageService.updateLocalData(
          `${id}`,
          result.full_name,
          result.caption_text
        );
      }
    });
  }
  
  onDelete(
    id: string | number | null
  ) {
    this.dialogService.openSimpleDialog()
    .subscribe(result => {
      if(result) {
        this.loadingService.loading.set(true);
        this.localStorageService.deleteLocalData(`${id}`);
      }
    });
  }
}
