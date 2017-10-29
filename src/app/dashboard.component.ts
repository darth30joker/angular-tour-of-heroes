import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Hero } from './hero';
import * as fromRoot from './reducers';
import { HeroesLoadAction } from './actions/heroes';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  public heroes$: Observable<Hero[]>;

  constructor(public store: Store<fromRoot.State>) {
    this.heroes$ = store.select(fromRoot.getHeroesState);
  }

  ngOnInit(): void {
    this.store.dispatch(new HeroesLoadAction());
  }
}
