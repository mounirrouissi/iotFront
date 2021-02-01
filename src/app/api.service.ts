import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from './pojos/Person';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
   baseUrl="http://localhost:9000/persons"


  gerAllPersons():Observable<Person[]> {
    return this.http.get<Person[]>(this.baseUrl);
  }

  constructor(private http:HttpClient) { }
}
