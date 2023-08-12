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

 
  getAll(page:number = 1): Promise<any> {

    return lastValueFrom(this.httpClient.get<any>(`${this.baseUrl}?page=${page}`))
    
  }

  

  getById(_id: string): Observable<User> {
    return this.httpClient.get<User>(`${this.baseUrl}${_id}`)
  }


  delete(_id: string): Promise <User[]> {

    return lastValueFrom(this.httpClient.delete<User[]>(`${this.baseUrl}${_id}`))
  }

  deleteOneUserList(_id: string): Promise <any> {
    return lastValueFrom(this.httpClient.delete<any>(`${this.baseUrl}${_id}`))
  }

}