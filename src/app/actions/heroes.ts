import { Action } from '@ngrx/store';

import { Hero } from '../hero';

export const HERO_LOAD = '[Hero] Load';
export const HERO_LOADED = '[Hero] Loaded';

export const HEROES_LOAD = '[Heroes] Load';
export const HEROES_LOADED = '[Heroes] Loaded';

export class HeroLoadAction implements Action {
  type = HERO_LOAD;
}

export class HeroLoadedAction implements Action {
  type = HERO_LOADED;

  constructor(public payload: Hero) { }
}

export class HeroesLoadAction implements Action {
  type = HEROES_LOAD;
}

export class HeroesLoadedAction implements Action {
  type = HEROES_LOADED;

  constructor(public payload: Hero[]) { }
}
