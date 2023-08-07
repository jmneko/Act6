import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, lastValueFrom } from 'rxjs';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  httpClient = inject(HttpClient);
  private baseUrl: string = "https://peticiones.online/api/users/";

  constructor() { }

 
  getAll(): Promise<any> {

    return lastValueFrom(this.httpClient.get<any>(this.baseUrl))
  }

  

  getById(_id: string): Observable<User> {
    return this.httpClient.get<any>(`${this.baseUrl}${_id}`)
  }


}