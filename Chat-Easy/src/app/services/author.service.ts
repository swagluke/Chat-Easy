import { Injectable } from '@angular/core';
import { FirebaseObjectObservable, AngularFire } from "angularfire2";
import { Author } from "app/models/author.model";

@Injectable()
export class AuthorService {
  readonly authorPath = 'authors';

  public authorMapStream: FirebaseObjectObservable<Map<string, Author>>;

  constructor(private af: AngularFire) {
    this.authorMapStream = this.af.database.object(`/${this.authorPath}`);
  }

  updateAuthor(authorKey: string, displayName: string, photoUrl: string): void {
    const author = new Author({
      displayName: displayName,
      photoUrl: photoUrl
    });
    this.af.database.object(`/${this.authorPath}/${authorKey}`).set(author);
  }

}
