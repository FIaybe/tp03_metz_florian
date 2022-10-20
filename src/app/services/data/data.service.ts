import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from 'src/app/core/Client';
import { environment } from 'src/environments/environment';
import { Product } from '../../core/product';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private client: HttpClient) { }

  //create methods getClient()
  getClient(): Client {
    return new Client(
      'Doe', 'John', '1 rue de la paix',
      '75000', 'Paris', 'France',
      '0612345678', 'test@email.fr', 'M',
      'test', 'test', 'test');
  }
  //create methods postClient()
  postClient(client: Client) {
    console.log(client);
  }

  //postLogin : return a boolean
  postLogin(login: string, password: string): boolean {
    if (login === 'test' && password === 'test') {
      return true;
    }
    return false;
  }

  //GetCatalogue : return a list of products
  getCatalogue(): Observable<Product[]> {
    return this.client.get<Product[]>(environment.catalogue);
  }
}
