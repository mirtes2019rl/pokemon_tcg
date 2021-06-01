import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private httpService: HttpService) { }
  pokemons: any;
  pokeVar: any;
  page = 1;
  busca: string = '';
  buscador: string = '';

  ngOnInit(): void {
    this.httpService.sendGetPageRequest(this.page).subscribe((response) => {
      this.pokemons = response;
      this.pokemons = this.pokemons.data;
    });
  }

  nextPage(): void {
    this.page++;
    if (this.buscador != "") {
      this.httpService.sendGetNameRequest(this.buscador, this.page).subscribe((response) => {
        this.pokeVar = response;
        this.pokemons = this.pokeVar.data
      });
    } else {
      this.httpService.sendGetPageRequest(this.page).subscribe((response) => {
        this.pokeVar = response;
        this.pokemons = this.pokeVar.data
      });
    }
  }

  prevPage(): void {
    this.page--;
    if (this.buscador != "") {
      this.httpService.sendGetNameRequest(this.buscador, this.page).subscribe((response) => {
        this.pokeVar = response;
        this.pokemons = this.pokeVar.data
      });
    } else {
      this.httpService.sendGetPageRequest(this.page).subscribe((response) => {
        this.pokeVar = response;
        console.log(response)
        this.pokemons = this.pokeVar.data
      });
    }
  }

  search(): void {
    this.page = 1;
    this.buscador = this.busca;
    this.httpService.sendGetNameRequest(this.busca, this.page).subscribe((response) => {
      this.pokeVar = response;
      this.pokemons = this.pokeVar.data
    });
  }

  allPoke(): void {
    this.page = 1;
    this.buscador = "";
    this.httpService.sendGetPageRequest(this.page).subscribe((response) => {
      this.pokemons = response;
      this.pokemons = this.pokemons.data;
    });
  }
}
