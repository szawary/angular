import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from './model/hero';
import { Users } from './model/users';
import { FootballService } from './service/football.service';
import { HeroService } from './service/hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'alapalkalmazasgyakorlas';
  myHero: Hero = new Hero;

  // felveszem a változót, típusát a model / users classba
  // szervzetem ki. Objektumok tömbje
  users: Users[] = [
    {
      id: '1es személy',
      name: 'Laszlo',
      email: 'laszlo@gmail.com',
    },
    {
      id: 2,
      name: 'Sandor',
      email: 'sandor@gmail.com',
    },
    {
      id: 3,
      name: 'Peter',
      email: 'peter@gmail.com'
    },

  ];


setHero(hero:Hero): void {
  this.myHero= hero;
}



  // Angular Observable
  listObservable: Observable<any>;

  constructor(
    private fService: FootballService,
    private hService: HeroService
  ) {
    this.hService.getAll().forEach( value => {
      console.log("All hero: ", value);
    });

    this.listObservable = hService.getAll();
/*
    this.hService.getOne(1).forEach(value =>{
      console.log("First Hero: ", value);
    });
    this.hService.add({id: 3, name: "Jack", address: "Nyíregyháza", superpower: "reading"}).forEach(value =>{
      console.log("New Hero: ", value);
    });
    this.hService.update({id: 1, name: "Lucy", address: "Nyh", superpower: "nincs"}).forEach(value =>{
      console.log("Update Hero: ", value);
    });
    this.hService.remove(2).forEach(value =>{
      console.log("Remove Hero: ", value);
    });

*/

/*

    this.listObservable = new Observable(observer => {
      let to = setTimeout(()=>{
        observer.next("Megjöttem ...");
      }, 1500);
      let to2 = setTimeout(()=>{
        observer.complete();
      }, 2000);
    });
      this.listObservable.subscribe(
        value=>console.log(value),
      error =>console.error(error),
      ()=>console.log("complete"),

    )*/
  }




}
