import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFireAuth, FirebaseAuthState, AuthProviders, AuthMethods } from "angularfire2";
import { Router } from "@angular/router";
import 'rosefire';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {
  //private _isSignedIn = false;
  private currentUser: string;
  private rosefire: boolean = false;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router) {
    this.afAuth.subscribe((authState: FirebaseAuthState) => {
      if (authState) {
        console.log("You are signed in. All is good.");
        //this._isSignedIn = true;
        if (authState.google) {
          this.currentUser = authState.google.displayName;
        }
        else {
          this.currentUser = authState.uid;
        }
      } else {
        console.log("Not signed in.");
        this.currentUser = "";
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
      }
      return null;
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
    return this.currentUser;
  }
}