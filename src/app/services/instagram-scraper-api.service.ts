import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HEADERS, MAIN_URL, METHOD_GET, PARAMS } from '../constants/instagram-api';
import { InstagramScraperApi } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class InstagramScraperApiService {

  constructor(private readonly httpClient: HttpClient) {}

  fetchData(): Observable<any> {
    const options = {
      method: 'GET',
      url: 'https://instagram-scraper-api2.p.rapidapi.com/v1.1/hashtag',
      params: {hashtag: 'summer'},
      headers: {
        'x-rapidapi-key': '5661faf30emshed61905c56df0eap1ab3dajsnaf32b50cf153',
        'x-rapidapi-host': 'instagram-scraper-api2.p.rapidapi.com'
      },
      withCredentials: true,
      credentials: "include"
    };
    const httpOptions = {
      params: new HttpParams({ fromObject: options.params }),
      headers: new HttpHeaders(options.headers)
    };

    return this.httpClient.get<InstagramScraperApi>(options.url, httpOptions)
  }
}
