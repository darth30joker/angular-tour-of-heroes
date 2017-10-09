import { Action } from '@ngrx/store';

import { Hero } from './hero';

export const LOAD_ALL = 'LOAD_ALL';

export function heroesAction(heroes: Hero[] = [], action: Action) {
  switch (action.type) {
    case LOAD_ALL:
      return heroes;

    default:
      return heroes;
  }
}
