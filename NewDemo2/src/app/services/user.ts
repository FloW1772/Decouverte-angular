import { Injectable } from '@angular/core';
import { Usertype } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class User {

  private readonly users: Usertype[] = [
    {id: 1, name: 'Joe', email: 'joe@bar.team'},
    {id: 1, name: 'Jane', email: 'jane@bar.team'}
    ]

  getUsers(): Usertype[] {
    return this.users;
  
}
}
