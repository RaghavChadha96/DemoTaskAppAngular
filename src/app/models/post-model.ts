import { Comments } from './comments-model';

export class Post {
    userId: number;
    id: number;
    title: string;
    body: string;
    comments: Comments[];
}
