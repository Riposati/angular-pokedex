import { Component, OnInit } from '@angular/core';
import { PokeapiService } from 'src/app/services/pokeapi.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  
  nameFilter = "";
  selectedPkm = null;
  
  get pokemonList(){

    return this.pokeapi.pokemonList.filter(pokemon => {

      return pokemon.name.toLowerCase().indexOf(this.nameFilter.toLowerCase()) !== -1;
    })
  } 

  constructor(

    private pokeapi: PokeapiService

  ) { }

  ngOnInit(){

    this.pokeapi.listAll();
  }

  get pkmSprite(){

    const number = ('000' + this.selectedPkm.number).slice(-3);
    return '//serebii.net/sunmoon/pokemon/' + number + ".png";
  }

  selectPokemon(pkm){
    this.selectedPkm = pkm;
  }

}
