import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  apiUrl = "https://api.pokemontcg.io/v2/cards";
  constructor(private httpClient: HttpClient) { }

  sendGetPageRequest(page: Number) {
    return this.httpClient.get(this.apiUrl + "?page="+ page +"&pageSize=8&orderBy=name");
  }

  sendGetNameRequest(name: String, page: Number) {
    return this.httpClient.get(this.apiUrl + "?page="+ page +"&pageSize=8&q=name:"+ name);
  }

  sendGetIdRequest(id: String) {
    return this.httpClient.get(this.apiUrl + "/"+ id);
  }
}
