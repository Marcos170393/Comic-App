import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  })
export class NavbarComponent implements OnInit {

  constructor(private router:Router, private _heroesService:HeroesService) { }

  ngOnInit(): void {
  }

  buscarH( termino:string ){
    this._heroesService.buscarHeroes(termino);
    this.router.navigate( ['/results', termino] )
  }

}
