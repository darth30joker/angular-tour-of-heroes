import { Hero } from '../hero';

import * as heroes from '../actions/heroes';

export function reducer(state = [], action: heroes.HeroLoadedAction) {
  switch(action.type) {
    case heroes.HERO_LOADED:
      return action.payload;
    default:
      return state;
  }
}
