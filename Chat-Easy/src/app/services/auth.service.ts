import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFireAuth, FirebaseAuthState, AuthProviders, AuthMethods } from "angularfire2";
import { Router } from "@angular/router";
import { AuthorService } from './author.service';
import 'rosefire';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {
  private _currentUserUid: string;
  private rosefire: boolean = false;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private authorService: AuthorService
  ) {
    this.afAuth.subscribe((authState: FirebaseAuthState) => {
      if (authState) {
        console.log("You are signed in. All is good.");
        if (authState.google) {
          this.authorService.updateAuthor(authState.uid, authState.google.displayName,
            authState.google.photoURL);
        } else if (authState.facebook) {
          this.authorService.updateAuthor(authState.uid, authState.facebook.displayName,
            authState.facebook.photoURL);
        } else {
           this.authorService.updateAuthor(authState.uid, authState.uid,
            null);         
        }
        this._currentUserUid = authState.uid;
      } else {
        console.log("Not signed in.");
        this._currentUserUid = "";
      }
    });
  }

  get isSignedInStream(): Observable<boolean> {
    return this.afAuth.map<FirebaseAuthState, boolean>((authState: FirebaseAuthState) => {
      return authState != null;
    });
  }

  get displayNameStream(): Observable<string> {
    return this.afAuth.map<FirebaseAuthState, string>((authState: FirebaseAuthState) => {
      if (authState && authState.google) {
        return authState.google.displayName;
      } else if (authState && authState.facebook) {
        return authState.facebook.displayName;
      } else if (authState) {
        return this._currentUserUid;
      }
      return null;
    });
  }

  signInWithFacebook(): void {
    this.afAuth.login({
      provider: AuthProviders.Facebook,
      method: AuthMethods.Popup
    }).then((authState: FirebaseAuthState) => {
      this.rosefire = false;
      this.router.navigate(['/']);
    });
  }

  signInWithGoogle(): void {
    this.afAuth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    }).then((authState: FirebaseAuthState) => {
      this.rosefire = false;
      this.router.navigate(['/']);
    });
  }

  signInWithRosefire(): void {
    Rosefire.signIn(environment.rosefireRegistryToken, (error, rfUser: RosefireUser) => {
      if (error) {
        // User not logged in!
        console.error(error);
        return;
      }
      this.afAuth.login(rfUser.token, {
        method: AuthMethods.CustomToken,
        provider: AuthProviders.Custom,
      }).then((auth: FirebaseAuthState) => {
        this.rosefire = true;
        this.router.navigate(['/']);
      });
    });
  }

  signOut(): void {
    this.afAuth.logout();
    this.router.navigate(['/signin']);
  }

  get currentUserUid(): string {
    return this._currentUserUid;
  }

  get photoUrlStream(): Observable<string> {
    return this.afAuth.map<FirebaseAuthState, string>((authState: FirebaseAuthState) => {
      if (authState && authState.google) {
        return authState.google.photoURL;
      } else if (authState && authState.facebook) {
        return authState.facebook.photoURL;
      }
      return null;
    });
  }
}