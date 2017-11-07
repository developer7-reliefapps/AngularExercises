import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { WSSEService } from './wsse.service';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

import { News } from './News';

@Component({
    selector: 'http-requests',
    templateUrl: 'request.component.html'
})

export class RequestComponent implements OnInit{

  //url for api service
  public url: string = "http://mdm-api.humanitarian.tech/app_dev.php/api/v1";
  // Result of GET request
  public listResult: News[];

  constructor(
    private http: Http,
    private _wsseService: WSSEService){}

  ngOnInit() {
    this.getAll();
  }

  /**Methods**/

  /*GET ALL*/
  public getAll () {
    let headers = new Headers({wsse : this._wsseService.getHeaderValue()});
    console.log(this._wsseService.getHeaderValue());
    let options = new RequestOptions({headers: headers});
    console.log(options);
    return this.http.get(this.url+'/news/', options).subscribe(res => {
      this.listResult = res.json() as News[];
      console.log(this.listResult);
    });
  }

  /*GET ONE*/

  /*POST*/

  /*PUT*/

  /*DELETE*/

}
