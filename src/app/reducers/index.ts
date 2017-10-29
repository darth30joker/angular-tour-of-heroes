import { Hero } from '../hero';

import * as fromHero from './hero';
import * as fromHeroes from './heroes';

export interface State {
  hero: Hero,
  heroes: Hero[];
}

export const getHeroState = (state: State) => state.hero;
export const getHeroesState = (state: State) => state.heroes;

export const reducers = {
  hero: fromHero.reducer,
  heroes: fromHeroes.reducer
}
