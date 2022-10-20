import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from 'src/app/core/Client';
import { Product } from '../../core/product';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

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
    return new Observable<Product[]>((observer) => {
      observer.next([
        new Product('Hochet', 'pour les enfants', 10),
        new Product('gameboy', 'pour les geek', 20),
        new Product('cuillère', 'pour les café', 30),
        new Product('épée', 'pour les chevaliers', 40),
        new Product('sabre laser', 'pour les jedi', 50),
        new Product('manteau', 'pour l\'hiver', 60),
        new Product('porte', 'pour la maison', 70),
        new Product('avion', 'pour les riches', 80),
        new Product('table', 'pour manger', 90),
        new Product('sac à dos', 'pour les randos', 100),
      ]);
    });
  }
}
