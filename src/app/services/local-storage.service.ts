import { inject, Injectable, signal } from '@angular/core';
import { API } from '../constants/instagram-api';
import { InstagramScraperApiService } from './instagram-scraper-api.service';
import { InstagramScraperApi, Item } from '../interfaces';
import { v4 as uuidv4 } from 'uuid';
import { LoadingService } from './loading.service';
@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  instagram = signal<InstagramScraperApi | null>(null);
  readonly loadingService = inject(LoadingService);

  constructor(
    private readonly instagramScraperApiService: InstagramScraperApiService
  ) {}

  loadInit(): void {
    this.instagramScraperApiService.fetchData().subscribe(
      (data: InstagramScraperApi) => {
        this.setItem(data);
        this.instagram.set(this.getLocalData());
      },
      (error) => {
        console.error('Ha ocurrido un error');
      }
    );
  };

  getLocalData() {
    const data = localStorage.getItem(API);
    return data ? JSON.parse(data) : null;
  };

  createLocalData(result: any) {
    const data = this.getLocalData() || { data: { items: [] } };
    const newItem = {
      user: {
        full_name: result.full_name
      },
      caption_text: result.caption_text,
      id: uuidv4()
    };
    data.data.items.unshift(newItem);
    this.storageComplete(data);
  }

  deleteLocalData(postId: string): void {
    const data = this.getLocalData();

    if (!data?.data?.items) {
      console.error('Data not found:', data);
      return;
    }

    data.data.items = data.data.items.filter((item: Item) => item.id !== postId);

    this.storageComplete(data);
  }

  updateLocalData(postId: string, fullName: string, captionText: string): void {
    const data = this.getLocalData();
  
    if (!data?.data?.items) {
      console.error('Data not found:', data);
      return;
    }
  
    const item = data.data.items.find((item: Item) => item.id === postId);
  
    if (!item) {
      console.error('Item not found:', postId);
      return;
    }
  
    item.user.full_name = fullName;
    item.caption_text = captionText;
  
    this.storageComplete(data);
  }

  storageComplete(data: any) {
    this.setItem(data);
    this.setInstagamSignal();
    this.loadingComplete() 
  }

  setItem(data: InstagramScraperApi) {
    localStorage.setItem(API, JSON.stringify(data));
  }

  setInstagamSignal(): void {
    this.instagram.set(this.getLocalData());
  };

  loadingComplete() {
    setTimeout(() => {
      this.loadingService.loading.set(false);
    }, 1000);
  }
}
