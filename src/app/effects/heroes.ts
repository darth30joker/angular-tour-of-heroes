import { Injectable } from '@angular/core';

import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { HeroService } from '../hero.service';

import * as heroes from '../actions/heroes';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class HeroesEffects {
  constructor(private service: HeroService,
              private actions$: Actions) { }

  @Effect()
  loadHero$: Observable<Action> = this.actions$
    .ofType(heroes.HERO_LOAD)
    .switchMap(() => this.service.getHero(0)
      .map(data => new heroes.HeroLoadedAction(data)));

  @Effect()
  loadHeroes$: Observable<Action> = this.actions$
    .ofType(heroes.HEROES_LOAD)
    .switchMap(() => this.service.getHeroes()
      .map(data => new heroes.HeroesLoadedAction(data)));
}
