import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  // pour *ngIf et *ngFor
import { AuthService } from '../../services/auth';
import { PlaylistService } from '../../services/playlist';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.css'],
  standalone: true,          // si tu veux un composant autonome
  imports: [CommonModule]     // pour *ngIf et *ngFor
})
export class SidebarComponent implements OnInit {
  user: any = null;
  playlists: any[] = [];

  constructor(
    private auth: AuthService,
    private playlistsSvc: PlaylistService
  ) {}

  ngOnInit(): void {
    this.auth.currentUser$.subscribe(u => {
      this.user = u;
      this.refreshPlaylists();
    });
  }

  refreshPlaylists(): void {
    if (!this.user) {
      this.playlists = [];
      return;
    }
    this.playlists = this.playlistsSvc.getByUser(this.user.id);
  }
}
