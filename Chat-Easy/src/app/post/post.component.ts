import { PostService } from '../services/post.service';
import { PostWithAuthor } from './../models/post.model';
import { AuthService } from '../services/auth.service';
import { Post } from '../models/post.model';
import { Component, OnInit, Input } from '@angular/core';
import { MdSnackBar } from "@angular/material";

export enum EditMode {
  NoEditable = 0,
  DisplayEditButton = 1,
  Editing = 2,
}

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post: PostWithAuthor;
  public editingMode: EditMode = EditMode.NoEditable;
  public isPic: boolean = false;
  public updatedPostBody: string;
  constructor(private authService: AuthService,
    private postService: PostService,
    public snackBar: MdSnackBar) { }

  ngOnInit() {
    if (this.post.postBody.indexOf("https://firebasestorage") >= 0) {
      this.isPic = true;
      // console.log("It's a pic");
    }
    else {
      this.isPic = false;
    }
    if (this.post.authorKey == this.authService.currentUserUid) {
      this.editingMode = EditMode.DisplayEditButton;
    }
  }

  enableEditing(inputEl: HTMLInputElement): void {
    setTimeout(() => {
      inputEl.focus();
    });

    inputEl.focus();
    this.updatedPostBody = this.post.postBody;
    this.editingMode = EditMode.Editing;
  }

  remove(): void {
    this.postService.remove(this.post.$key);
    const snackBarRef = this.snackBar.open("Post removed", "UNDO", {
      duration: 5000,
    });

    snackBarRef.onAction().subscribe(() => {
      console.log("TODO: Put it back!");
      const restoredPost = new Post();
      restoredPost.postBody = this.post.postBody;
      restoredPost.authorKey = this.authService.currentUserUid;
      this.postService.update(this.post.$key, restoredPost);
      this.snackBar.open("Post restored!", "", {
        duration: 3000,
      })
    })
  }

  saveEdit(): void {
    // Update the posts to the new value
    const updatedPost = new Post();
    updatedPost.postBody = this.updatedPostBody;
    updatedPost.authorKey = this.post.authorKey;
    this.postService.update(this.post.$key, updatedPost);
    this.snackBar.open("Post updated", "", {
      duration: 3000,
    });
    this.editingMode = EditMode.DisplayEditButton;
  }

  cancelEdit(): void {
    this.editingMode = EditMode.DisplayEditButton;
  }

}
