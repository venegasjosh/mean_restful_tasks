import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable() 
export class HttpService {
  
  constructor(private _http: HttpClient){
      this.getTasks();
  }

  getTasks(){
    // our http response is an Observable, store it in a variable
    let tempObservable = this._http.get('/api/tasks');
    // subscribe to the Observable and provide the code we would like to do with our data from the response
    tempObservable.subscribe(data => console.log("Got our tasks!", data));
  }

  getOneTask(id){
    let oneTaskObservable = this._http.get('/api/tasks/' + id);
  
    oneTaskObservable.subscribe(data => console.log('Got our task!', data));
  }

}

