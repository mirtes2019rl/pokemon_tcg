import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor(private httpService: HttpService, private activatedRoute: ActivatedRoute) { }
  private id: any;
  pokemon: any;

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.httpService.sendGetIdRequest(this.id).subscribe((response) => {
      this.pokemon = response;
      this.pokemon = this.pokemon.data;
      console.log(this.pokemon)
    });
  }

}
