import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private _listUrl = 'http://localhost:3000/users'

  constructor(private http: HttpClient) { }

  getList(){
    return this.http.get<any[]>(this._listUrl)
  }
  
  registerUser(user){
    return this.http.post<any>(this._listUrl, user)
  }

}
