import { Component } from '@angular/core';
import { Client } from 'src/core/Client';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss']
})
export class ClientFormComponent {
  display: boolean = false;
  client: Client;
  name: string = '';
  firstName: string = '';
  address: string = '';
  zipCode: string = '';
  city: string = '';
  country: string = '';
  phone: string = '';
  email: string = '';
  gender: string = '';
  login: string = '';
  password: string = '';
  passwordValidation: string = '';

  onSubmit() {
    this.client = new Client(
      this.name, this.firstName, this.address,
      this.zipCode, this.city, this.country,
      this.phone, this.email, this.gender,
      this.login, this.password, this.passwordValidation);

    this.changedisplay();

  }

  changedisplay() {
    this.display = !this.display;
  }

  change(event) {
    this.gender = event.target.value;
  }

  changeCountry(event) {
    this.country = event.target.value;
  }

}
