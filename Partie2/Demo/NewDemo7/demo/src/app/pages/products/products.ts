import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../../models/product-api';
import { DummyJsonApi } from '../../services/dummy-json-api';

@Component({
  selector: 'app-products',
  imports: [RouterLink],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {
  // On prévoit la prop publique en prévision de l'affichage
  products?: Product[]
  // Injection du Service qui interroge l'api
  private readonly dummyJsonApi: DummyJsonApi = inject(DummyJsonApi);
  
  // Fecth des produits lors de l'init du component
  ngOnInit() {
    /*
     Abonnement à l'observable pour récéption des ressources
     next (reçoit une fn => ) => succes
     error (reçoit une fn => ) => catch
     */
    this.dummyJsonApi.getProducts().subscribe({
      next: data => this.products = data.products,
      error: error => console.error(error)
    });
  }
}
