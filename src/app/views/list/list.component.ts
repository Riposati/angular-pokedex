import { Component, OnInit } from '@angular/core';
import { PokeapiService } from 'src/app/services/pokeapi.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {

  nameFilter = "";
  selectedPkm = null;
  show = false;

  get pokemonList() {

    return this.pokeapi.pokemonList.filter(pokemon => {

      return pokemon.name.toLowerCase().indexOf(this.nameFilter.toLowerCase()) !== -1;
    })
  }

  constructor(

    private pokeapi: PokeapiService

  ) { }

  ngOnInit() {

    this.pokeapi.listAll();

    $(document).ready(function () {

      $('#pokeList').on('click', 'li', function () {

        $(this).find('img')
          .finish()
          .animate({
            'marginTop': '-20px',
            'width' : '35px',
          }, 150)
          .animate({
            'marginTop': '0',
            'width' : '32px',
          }, 150)
          .animate({
            'marginTop': '-20px',
            'width' : '35px', 
          }, 150)
          .animate({
            'marginTop': '0',
            'width' : '32px', 
          }, 150);
          // console.log('here');
      });
    });
  }

  get pkmSprite() {

    const number = ('000' + this.selectedPkm.number).slice(-3);
    return '//serebii.net/sunmoon/pokemon/' + number + ".png";
  }

  selectPokemon(pkm) {
    this.selectedPkm = pkm;
    // console.log(pkm.name);
  }
}
