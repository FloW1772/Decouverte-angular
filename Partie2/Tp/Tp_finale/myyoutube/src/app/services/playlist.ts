import { Injectable } from '@angular/core';
import { Playlist } from '../models/playlist';
import { Video } from '../models/video';


const PLAYLIST_KEY = 'myyoutube_playlists';


@Injectable({ providedIn: 'root' })
export class PlaylistService {
constructor() {}


private all(): Playlist[] {
return JSON.parse(localStorage.getItem(PLAYLIST_KEY) || '[]');
}


private save(data: Playlist[]) {
localStorage.setItem(PLAYLIST_KEY, JSON.stringify(data));
}


getByUser(userId: string): Playlist[] {
return this.all().filter(p => p.ownerId === userId);
}


create(name: string, ownerId: string): Playlist {
const p: Playlist = { id: crypto.randomUUID(), name, ownerId, videos: [] };
const list = this.all();
list.push(p);
this.save(list);
return p;
}


addVideo(playlistId: string, video: Video) {
const list = this.all();
const p = list.find(x => x.id === playlistId);
if (!p) throw new Error('Playlist introuvable');
if (!p.videos.find(v => v.id === video.id)) p.videos.push(video);
this.save(list);
}


removeVideo(playlistId: string, videoId: string) {
const list = this.all();
const p = list.find(x => x.id === playlistId);
if (!p) return;
p.videos = p.videos.filter(v => v.id !== videoId);
this.save(list);
}


delete(playlistId: string) {
const list = this.all().filter(x => x.id !== playlistId);
this.save(list);
}
}