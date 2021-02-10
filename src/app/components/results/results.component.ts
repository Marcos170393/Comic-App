import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe} from '../../services/heroes.service';



@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  
})
export class ResultsComponent implements OnInit {

  constructor(private _heroesService:HeroesService, private activatedRoute:ActivatedRoute) { }

  heroes:Heroe[] = [];
  termino:string;

  ngOnInit() {
    // usamos activateRoute para que el componente pueda recibir parametros por la url
   this.activatedRoute.params.subscribe(params => {
     this.termino = params['termino'];
     this.heroes = this._heroesService.buscarHeroes(params['termino']);
   })
  }

}
