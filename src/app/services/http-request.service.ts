import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {

  constructor (private http: Http) { }

  senData(user: any) {
    const body = JSON.stringify(user);
    
    /* Pour spécifier que on envoit les données de type json */
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('https://ng2-de-http-3f793.firebaseio.com/data.json', body, {headers: headers});
  }

  getData() {
    return this.http.get('https://ng2-de-http-3f793.firebaseio.com/data.json');
  }
}
