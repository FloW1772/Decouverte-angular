import { Component, inject, signal, OnInit } from '@angular/core';
import { Usertype } from './models/user';
import { User } from './services/user';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [JsonPipe],
  templateUrl: './app.html',
  styleUrls: ['./app.css'] // ✅ correction : styleUrls (pluriel) + tableau
})
export class App implements OnInit {
  protected readonly title = signal('NewDemo2 works!');
  users?: Usertype[];

  // A La PAPA
  // private readonly users: UserType[] = inject(User).getUsers()
  // BP : injection du User[Service]
  private readonly userService: User = inject(User);

  // 2nd Way
  // constructor(private readonly userService: User) {
  //   this.users = this.userService.getUsers();
  // }

  // 3rd Way
  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }
}
