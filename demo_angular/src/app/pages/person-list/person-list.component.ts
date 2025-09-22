import { Component } from '@angular/core';

@Component({
  selector: 'app-person-list',
  imports: [],
  templateUrl: './person-list.component.html',
  styleUrl: './person-list.component.scss'
})
export class PersonListComponent {

  // liste de personne
  //persons: String[] = ["Pierrick Nutella", "Cyril Cheddar", "Marwan Iop Cac"];


  persons: any[] = [
    { pseudo: "Pierrick Nutella", age: 68, price: 256 },
    { pseudo: "Cyril Cheddar", age: 98, price: 190 },
    { pseudo: "Marwan Iop Cac", age: 105, price: 168 },
  ];

}
