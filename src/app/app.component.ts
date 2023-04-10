import { Component, OnInit } from '@angular/core';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectIsLoggedIn, selectIsLoggedOut } from './auth.selectors';
import { AuthActions } from './auth/auth-types';
import { loginReset } from './auth/auth.actions';
import { USER_LOCAL_STORAGE_KEY } from './auth/auth.effects';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  loading = true;
  isLoggedIn$: Observable<boolean>;
  isLoggedOut$: Observable<boolean>;
  isLoggedIn = false;

  constructor(private router: Router, private store: Store) {}

  ngOnInit() {
    this.configLocalStorageAuthData();
    this.configNavigationEvents();
    this.isLoggedIn$ = this.store.select(selectIsLoggedIn);
    this.isLoggedOut$ = this.store.select(selectIsLoggedOut);
  }

  private configNavigationEvents() {
    this.router.events.subscribe((event) => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.loading = true;
          break;
        }
        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          this.loading = false;
          this.setInitialPage();
          break;
        }
        default: {
          break;
        }
      }
    });
  }

  private setInitialPage() {
    if (this.isLoggedIn) {
      this.router.navigateByUrl('/courses');
    }
  }

  private configLocalStorageAuthData() {
    const user = localStorage.getItem(USER_LOCAL_STORAGE_KEY);
    if (user) {
      this.isLoggedIn = true;
      this.store.dispatch(loginReset({ user: JSON.parse(user) }));
    }
  }

  logout() {
    this.store.dispatch(AuthActions.logout());
  }
}
