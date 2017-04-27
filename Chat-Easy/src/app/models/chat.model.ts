import { Post } from './post.model';
import { Author } from './author.model';
import { FirebaseFlatSnapshot } from './firebase-flat-snapshot.model';

export class Chat extends FirebaseFlatSnapshot {
    public authorKeys: string[];
    public postBodys: string[];

    constructor(obj?: any) {
        super(obj);
        this.postBodys = obj && obj.posts || "";
        this.authorKeys = obj && obj.authorKeys || "";
    }
}

export class ChatWithPostsAndAuthors extends Chat {
    public authors: Author[];
    public posts: Post[];

    constructor(obj?: any) {
        super(obj);
        this.authors = obj && obj.authors || {};
        this.posts= obj && obj.posts || {};
    }
}