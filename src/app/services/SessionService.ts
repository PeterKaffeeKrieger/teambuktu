import {Router} from "@angular/router";
import {environment} from "../../environments/environment";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private loggedIn: boolean = false;
  private router: Router;

  constructor() {
  }

  public isLoggedIn(): boolean {
    if (environment.production) {
      return this.loggedIn;
    } else {
      return true;
    }
  }

  public login() {
    this.loggedIn = true;
  }

  public logout() {
    this.loggedIn = false;
  }

  setRouter(router: Router) {
    this.router = router;
  }

  checkLogin(router: Router) {
    console.log("Checking login")
    console.log(this.isLoggedIn())
    console.log(this.router.url);
    if (!this.isLoggedIn() && this.router.url != "/login") {
      console.log("redirecting to login")
      this.router.navigate(['/login']);
    }
  }
}
