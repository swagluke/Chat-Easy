import { Component, OnDestroy } from '@angular/core';
import { AngularFire, FirebaseListObservable, AngularFireAuth, FirebaseAuthState } from 'angularfire2';
import { AuthService } from './services/auth.service';
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  private authSubscription: Subscription;
  showSignOut = false;
  constructor(public authService: AuthService, private afAuth: AngularFireAuth) {

    this.afAuth.subscribe((auth: FirebaseAuthState) => {
      if (auth) {
        this.showSignOut = true;
      } else {
        this.showSignOut = false;
      }
    })
  }
  
    ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }
}


