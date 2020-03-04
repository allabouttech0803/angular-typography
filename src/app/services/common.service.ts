import { Injectable } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/internal/operators/delay';
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  theme$: Observable<string>;
  constructor(private router: Router, private readonly activatedRoute: ActivatedRoute, ) { }

  public setupRouting() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log("current url", event.url);
        this.theme$ = of(event.url.replace('/', '')).pipe(delay(500));
      }
    });
  }
}
