import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { News } from './News';

@Component({
    selector: 'http-requests',
    templateUrl: 'request.component.html',
    styleUrls: ['./request.component.css']
})

export class RequestComponent implements OnInit{

  //url for api service
  public url: string = "http://mdm-api.humanitarian.tech/app_dev.php/api/v1";
  // Result of GET all request
  public listResult: News[];
  // Result of GET one request
  public pieceNews: News;
  // Result of method to select one news
  public selectedNews: News;
  // Object and result of PUT Method
  public toBeUpdatedNews: News;
  public httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'})};
  // News to be added
  public addedNews: News;

  constructor(private http: Http){
    this.toBeUpdatedNews = {
      title: '',
      description : '',
      content : '',
      imageUrl : '',
      private: false,
    };
    // Same values at the begining
    this.addedNews = this.toBeUpdatedNews;
  }

  ngOnInit() {
    this.getAll();
  }

  /**Methods**/

  /*GET ALL*/
  public getAll () {
    return this.http.get(this.url+'/news/public').subscribe(res => {
      this.listResult = res.json() as News[];
      console.log(this.listResult);
    });
  }

  /*GET ONE*/
  public getOne (selectedNews: News) {
    return this.http.get(this.url+'/news/public/:id').subscribe(res => {
      this.pieceNews = res.json() as News;
      console.log(this.pieceNews);
    })
  }

  /*Method to retrieve the id of a selected news*/
  public selectNews(selection: News): void {
    this.selectedNews = selection;
  }

  /*Method to undo selection*/
  public unselectNews(): void {
    this.selectedNews = null;
  }

  /*POST*/
  public addNews(news: News) {
    console.log("Add !");
    this.http.post(this.url+'/news/public', news).subscribe(res => {
      res.json() as News;
    });
    // Browser console returns Error 405 method not allowed
  }

  /*PUT*/
  public updateNews(savedNews: News) {
    this.http.put(this.url+'/news/public', savedNews);
    this.unselectNews();
  }

  /*DELETE*/
  public deleteNews(news: News) {
    console.log("Delete !");
    this.http.delete(this.url+'/news/public', news).subscribe();
    // Browser console returns Error 417 expectation failed
  }

}
