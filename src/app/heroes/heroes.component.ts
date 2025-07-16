import { Component } from '@angular/core';
import { Hero } from '../hero.model';
import { UpperCasePipe, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HEROES } from '../mock-heroes';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [UpperCasePipe, FormsModule, NgFor, NgIf, HeroDetailComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss',
})
export class HeroesComponent {

  heroes = HEROES;

  hero: Hero = {
    id: 1,
    name: 'Windstorm',
  };

  selectedHero?:Hero;
  onSelect(hero:Hero):void {
    this.selectedHero = hero;
  }
}
