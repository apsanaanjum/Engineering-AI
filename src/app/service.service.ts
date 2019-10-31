import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private p:HttpClient) { 
 }
 gettab(){
      return this.p.get("https://hn.algolia.com/api/v1/search_by_date?tags=story");
 }
}
