import { Hero } from '../hero';

import * as heroes from '../actions/heroes';

export function reducer(state = [], action: heroes.HeroesLoadedAction) {
  switch(action.type) {
    case heroes.HEROES_LOADED:
      return action.payload;
    default:
      return state;
  }
}
