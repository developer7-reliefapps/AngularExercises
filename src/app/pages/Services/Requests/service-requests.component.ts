import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/toPromise';

interface ItemsRsponse{
  results: string[];
}

interface MyJsonData {}

@Component({
  //selector: ,
  //templateUrl: '',
  //styleUrls: ['']
})
export class ServiceRequestsComponent implements OnInit {

    results: string[];
    //Change to real api path address
    private apiUrl: string = 'api/';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: HttpClient) {}

    ngOnInit(): void {

      //GET data as items (non-json)
      //Replace /api/items by /textfile/txt if needed
      this.http.get<ItemsRsponse>('/api/items').retry(3)
        .subscribe(data => {
          this.results = data.results;
        }, (err: HttpErrorResponse) => {
        if(err.error instanceof Error){
          console.log('Ane rror occured : ', err.error.message);
        } else {
          console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
        }
      });

      //GET data as json, replace somefield by real property to retrieve body
      this.http.get<MyJsonData>('/data/json', {observe: 'response'}).retry(3)
      .subscribe(resp => {
        console.log(resp.headers.get('X-Custom-header'));
        // console.log(resp.body.somefield);
        }), (err: HttpErrorResponse) => {
        if(err.error instanceof Error) {
          console.log('Ane rror occured : ', err.error.message);
        } else {
          console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
        }};

    }

    //POST requests, replace type any by corresponding type return
    public PostMethod(): any {
      this.http.post('/api/developers/add', body, {
        headers: new HttpHeaders().set('Authorization', 'my-auth-token'),
      }).retry(3)
      .subscribe(), (err: HttpErrorResponse) => {
        if(err.error instanceof Error) {
          console.log('Ane rror occured : ', err.error.message);
        } else {
          console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
        }};
    }

    //GET an array method with Promise, replace any by actual return type
    public getArray(): Promise<any[]> {
      return this.http.get(this.apiUrl)
              .toPromise()
              .then(response => response.json().data as any[])
              .catch(this.handleError);
    }

    //Handling errors
    private handleError(error: any): Promise<any> {
      console.error('An error occured',error);
      return Promise.reject(error.message || error);
    }

    //GET one element by id, replace any by the actual return type
    public getOne(id: number): Promise<any> {
      const url = `${this.apiUrl}/${id}`;
      return this.http.get(url)
              .toPromise()
              .then(response => response.json().data as any)
              .catch(this.handleError);
    }

    //PUT update one element; replace any by the actual name and return type
    public update(oh: any): Promise<any> {
      const url = `${this.apiUrl}/${oh.id}`;
      return this.http
              .put(url, JSON.stringify(oh), {headers: this.headers})
              .toPromise()
              .then(() => oh)
              .catch(this.handleError);
    }

    //CREATE one element, other methods to write to manage forms, replace any by return actual name and type
    public create(ah: any): Promise<any> {
      return this.http
              .post(this.apiUrl, JSON.stringify({ah}),
              {headers: this.headers})
              .toPromise()
              .then(res => res.json().data as any)
              .catch(this.handleError);
    }

    //DELETE one element
    public delete(id: number): Promise<void> {
      const url = `${this.apiUrl},${id}`;
      return this.http.delete(url, {headers: this.headers})
              .toPromise()
              .then(() => null)
              .catch(this.handleError);
    }
}
