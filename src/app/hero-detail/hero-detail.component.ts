import { Component } from '@angular/core';
import { Hero } from '../hero.model';
import { Input } from '@angular/core';
import { NgIf, UpperCasePipe } from '@angular/common';
import { FormsModule} from '@angular/forms';



@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [NgIf, UpperCasePipe, FormsModule],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.scss'
})
export class HeroDetailComponent {
  @Input() hero?: Hero;

}
