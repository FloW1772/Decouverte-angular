import { Injectable } from '@angular/core';
import { Video } from '../models/video';


@Injectable({ providedIn: 'root' })
export class VideoService {
// For demo: static list of mock videos. Replace by API if needed.
private videos: Video[] = [
{ id: 'v1', title: 'Angular 20 — Introduction', description: 'Basics of Angular 20', url: 'https://www.youtube.com/embed/VIDEO_ID', thumbnail: '', duration: '10:21' },
{ id: 'v2', title: 'TypeScript Tips', description: 'Improve your TS skills', url: '', thumbnail: '', duration: '7:03' },
{ id: 'v3', title: 'Build MyYoutube', description: 'Demo app tutorial', url: '', thumbnail: '', duration: '12:45' }
];


constructor() {}


list() {
return [...this.videos];
}


search(q: string) {
q = q?.toLowerCase() || '';
return this.videos.filter(v => v.title.toLowerCase().includes(q) || (v.description||'').toLowerCase().includes(q));
}


get(id: string) {
return this.videos.find(v => v.id === id) || null;
}
}