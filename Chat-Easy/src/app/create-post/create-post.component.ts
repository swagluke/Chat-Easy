import { PostService } from './../services/post.service';
import { Post } from '../models/post.model';
import { AuthService } from '../services/auth.service';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { autocompleteCS } from './create-post.js';

// declare var jQuery;

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss', '../shared/common.scss']
})
export class CreatePostComponent implements OnInit {
  [name: string]: any;
  postBody: string;
 
  constructor(
    public authService: AuthService,
    private postService: PostService) { }

  ngOnInit() {
     autocompleteCS();
  }

  onSubmit(): void {
    try {
      const post = new Post({
        postBody: this.postBody,
        authorKey: this.authService.currentUserUid
      });
      if (this.postBody!=undefined && this.postBody!=null) {
        this.postService.add(post);
        this.postBody = "";
      }
    } catch (e) {
      console.log("Error on submit", e);
    }
  }

  photoSelected(event: any) {
    const file: File = event.target.files[0];
    const metadata = { "content-type": file.type };
    const storageRef: firebase.storage.Reference = firebase.storage().ref().child("photos").child(file.name);
    const uploadTask: firebase.storage.UploadTask = storageRef.put(file, metadata);
    uploadTask.then((uploadSnapShot: firebase.storage.UploadTaskSnapshot) => {
      const downloadUrl = uploadSnapShot.downloadURL;
      this.postBody = downloadUrl;
    })
  }

  triggerInput(inputEl) {
    inputEl.click();
  }
}
