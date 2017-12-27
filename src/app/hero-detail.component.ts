import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import { Hero } from './hero';
import { HeroService } from './hero.service';

import { HeroLoadAction } from './actions/heroes';
import * as fromRoot from './reducers';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent {
  @Input() hero: Hero;
  private sub: any;

  public hero$: Observable<Hero>;

  constructor(private heroService: HeroService,
              private route: ActivatedRoute,
              private location: Location,
              public store: Store<fromRoot.State>) {
    this.hero$ = store.select(fromRoot.getHeroState);
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
       this.store.dispatch(new HeroLoadAction(+params['id']));
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  save(): void {
    this.heroService.update(this.hero)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
