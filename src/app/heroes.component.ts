import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';

import { Hero } from './hero';
import { HeroService } from './hero.service';

import * as fromRoot from './reducers';
import { HeroesLoadAction } from './actions/heroes';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  public heroes$: Observable<Hero[]>;
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private router: Router,
              private heroService: HeroService,
              public store: Store<fromRoot.State>) {
    this.heroes$ = store.select(fromRoot.getHeroesState);
  }

  ngOnInit(): void {
    this.store.dispatch(new HeroesLoadAction());
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.create(name)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      });
  }

  delete(hero: Hero): void {
    this.heroService
        .delete(hero.id)
        .then(() => {
          this.heroes = this.heroes.filter(h => h !== hero);
          if (this.selectedHero === hero) { this.selectedHero = null; }
        });
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
