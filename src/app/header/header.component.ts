import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  navLinks: any[];

  constructor() {
    this.navLinks = [
      {
        label: 'Welcome',
        link: '',
        index: 0
      },
      {
        label: 'Création client',
        link: 'client-form',
        index: 1
      },
      {
        label: 'Catalogue',
        link: 'display-catalog',
        index: 2
      }
    ];

  }

  ngOnInit() {
  }

}