import { AuthService } from './auth.service';
import { Author } from '../models/author.model';
import { AuthorService } from './author.service';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Post, PostWithAuthor } from '../models/post.model';
import { Injectable } from '@angular/core';
import * as firebase from "firebase";
import { Query } from "angularfire2/interfaces";
@Injectable()
export class PostService {
  readonly postsPath = "posts";
  readonly postBatchSize = 20;
  private postIncrementStream: Subject<number>;
  private isMyPostsPageStream: Subject<boolean>;
  public postsWithAuthorStream: Observable<PostWithAuthor[]>;
  public hasMorePosts = true;
  public hideLoadMoreButton = false;
  constructor(private af: AngularFire, private authorService: AuthorService, private authService: AuthService) {

    this.postIncrementStream = new BehaviorSubject<number>(this.postBatchSize);
    this.isMyPostsPageStream = new BehaviorSubject<boolean>(false);
    
    const numPostsStream: Observable<number> = this.postIncrementStream.scan(
      (previousTotal: number, currentValue: number) => {
        return previousTotal + currentValue;
      });

    const queryParameterStream: Observable<Query> = Observable.combineLatest<Query>(
      this.isMyPostsPageStream,
      numPostsStream,
      (isMyPostsPage: boolean, numPosts: number) => {
        if (isMyPostsPage) {
          return {
            orderByChild: 'authorKey',
            equalTo: this.authService.currentUserUid
          }
        } else {
          return {
            limitToLast: numPosts
          }
        }
      }
    );

    const postsStream: Observable<Post[]> = queryParameterStream.switchMap<Query, Post[]>((queryParams: Query) => {
      return this.af.database.list(this.postsPath, {
        query: queryParams
      })
    });

    this.postsWithAuthorStream = Observable.combineLatest<PostWithAuthor[]>(
      postsStream,
      this.authorService.authorMapStream,
      numPostsStream,
      (posts: Array<Post>, authorMap: Map<string, Author>, numPostsRequested: number) => {
        this.hasMorePosts = numPostsRequested <= posts.length;

        const postsWithAuthors: PostWithAuthor[] = [];
        for (let post of posts) {
          const postWithAuthor = new PostWithAuthor(post);
          postWithAuthor.author = authorMap[post.authorKey];
          postsWithAuthors.push(postWithAuthor);
        }
        return postsWithAuthors;
      }
    )
  }

  add(post: Post) {
    console.log("push the post using the standard Firebase JS API");
    firebase.database().ref().child(this.postsPath).push(post);
  }

  displayMorePosts(): void {
    this.postIncrementStream.next(this.postBatchSize);
  }

  showOnlyMyPosts(isMyPostsPage: boolean): void {
    this.isMyPostsPageStream.next(isMyPostsPage);
    this.hideLoadMoreButton = isMyPostsPage;
  }

  remove(postKeyToRemove: string): void {
    firebase.database().ref().child(this.postsPath).child(postKeyToRemove).remove();
  }

  update(postKey: string, post: Post) {
    firebase.database().ref().child(this.postsPath).child(postKey).update(post);
  }
}
