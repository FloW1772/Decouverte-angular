import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Superhero {
  id: number;
  name: string;
  slug: string;
  powerstats: {
    intelligence: number;
    strength: number;
    speed: number;
    durability: number;
    power: number;
    combat: number;
  };
  images: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class SuperheroService {
  private apiUrl = 'https://akabab.github.io/superhero-api/api';

  constructor(private http: HttpClient) {}

  getAllHeroes(): Observable<Superhero[]> {
    return this.http.get<Superhero[]>(`${this.apiUrl}/all.json`);
  }

  getHeroById(id: number): Observable<Superhero> {
    return this.http.get<Superhero>(`${this.apiUrl}/id/${id}.json`);
  }
}
