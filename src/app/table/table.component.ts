import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { switchMap } from 'rxjs/operators';
import { Subscription, timer} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  subscription: any;
  data: any;
  details: any;
  Sub: any;
  laha: any;

  constructor(private s:ServiceService,private h:HttpClient) { }

  ngOnInit() {
    this.Sub = timer(0,10000).
    pipe(switchMap( () => this.h.get("https://hn.algolia.com/api/v1/search_by_date?tags=story")))
    .subscribe(resp=>
      {
        console.log(resp);
        this.data=resp;
        this.details=this.data.hits;
      })
    }
    btn(details){
      this.laha=details;
    }
}
