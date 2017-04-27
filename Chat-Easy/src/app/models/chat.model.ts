import { FirebaseFlatSnapshot } from './firebase-flat-snapshot.model';

export class Chat extends FirebaseFlatSnapshot {
    public authorKeys: string[];
    public posts: string[];

    constructor(obj?: any) {
        super(obj);
        this.posts = obj && obj.posts || "";
        this.authorKeys = obj && obj.authorKeys || "";
    }
}