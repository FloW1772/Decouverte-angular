import { Video } from './video';


export interface Playlist {
id: string;
name: string;
ownerId: string;
videos: Video[];
}