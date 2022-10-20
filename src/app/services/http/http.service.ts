import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private client: HttpClient) { }

  get(url: string): Observable<any> {
    return this.client.get(url);
  }

  post(url: string, data: any): Observable<any> {
    return this.client.post(url, data);
  }

  put(url: string, data: any): Observable<any> {
    return this.client.put(url, data);
  }

  delete(url: string): Observable<any> {
    return this.client.delete(url);
  }

}
