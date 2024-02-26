import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonDetailResponse } from '../interface/pokemon-detail-response.interface';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.css'
})
export class PokemonDetailComponent implements OnInit{
  id: string | null = null;
  public pokemon: PokemonDetailResponse = ELEMENT_DATA;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
  }

}

const ELEMENT_DATA: PokemonDetailResponse = {
  "abilities": [
    {
      "ability": {
        "name": "blaze",
        "url": "https://pokeapi.co/api/v2/ability/66/"
      },
      "is_hidden": false,
      "slot": 1
    },
    {
      "ability": {
        "name": "solar-power",
        "url": "https://pokeapi.co/api/v2/ability/94/"
      },
      "is_hidden": true,
      "slot": 3
    }
  ],
  "base_experience": 62,
  "height": 6,
  "held_items": [],
  "id": 4,
  "is_default": true,
  "name": "charmander",
  "order": 5,
  "past_abilities": [],
  "past_types": [],
  "species": {
    "name": "charmander",
    "url": "https://pokeapi.co/api/v2/pokemon-species/4/"
  },
  "sprites": {
    "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/4.png",
    "back_female": null,
    "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/4.png",
    "back_shiny_female": null,
    "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    "front_female": null,
    "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/4.png",
    "front_shiny_female": null,
    "other": {
      "dream_world": {
        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg",
        "front_female": null
      },
      "home": {
        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/4.png",
        "front_female": null,
        "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/4.png",
        "front_shiny_female": null
      },
      "official-artwork": {
        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
        "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/4.png"
      },
      "showdown": {
        "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/4.gif",
        "back_female": null,
        "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/shiny/4.gif",
        "back_shiny_female": null,
        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/4.gif",
        "front_female": null,
        "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/4.gif",
        "front_shiny_female": null
      }
    },
  },
  "stats": [
    {
      "base_stat": 39,
      "effort": 0,
      "stat": {
        "name": "hp",
        "url": "https://pokeapi.co/api/v2/stat/1/"
      }
    },
    {
      "base_stat": 52,
      "effort": 0,
      "stat": {
        "name": "attack",
        "url": "https://pokeapi.co/api/v2/stat/2/"
      }
    },
    {
      "base_stat": 43,
      "effort": 0,
      "stat": {
        "name": "defense",
        "url": "https://pokeapi.co/api/v2/stat/3/"
      }
    },
    {
      "base_stat": 60,
      "effort": 0,
      "stat": {
        "name": "special-attack",
        "url": "https://pokeapi.co/api/v2/stat/4/"
      }
    },
    {
      "base_stat": 50,
      "effort": 0,
      "stat": {
        "name": "special-defense",
        "url": "https://pokeapi.co/api/v2/stat/5/"
      }
    },
    {
      "base_stat": 65,
      "effort": 1,
      "stat": {
        "name": "speed",
        "url": "https://pokeapi.co/api/v2/stat/6/"
      }
    }
  ],
  "types": [
    {
      "slot": 1,
      "type": {
        "name": "fire",
        "url": "https://pokeapi.co/api/v2/type/10/"
      }
    }
  ],
  "weight": 85
}
