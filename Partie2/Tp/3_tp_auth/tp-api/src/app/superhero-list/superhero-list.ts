import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperheroService, Superhero } from '../superhero';

@Component({
  selector: 'app-superhero-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './superhero-list.html',
  styleUrls: ['./superhero-list.css']
})
export class SuperheroListComponent implements OnInit {
  heroes: Superhero[] = [];
  loading = true;

  constructor(private superheroService: SuperheroService) {}

  ngOnInit(): void {
    this.superheroService.getAllHeroes().subscribe({
      next: (data: Superhero[]) => {
        this.heroes = data.slice(0, 20); // afficher 20 héros
        this.loading = false;
      },
      error: (err: unknown) => {
        console.error('Erreur lors du chargement des héros :', err);
        this.loading = false;
      }
    });
  }
}
