import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http'
import { List } from '../_models/list-item.class';
import { Observable, BehaviorSubject  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManageItemsService {

  public API_ITEMS : string = 'http://127.0.0.1:8000/api/item/';

  
  
  constructor(private http : HttpClient
    ) {}
  
    p: number = 1;
  
  getAllItems() : Observable<List[]>{
    return this.http.get<List[]>(this.API_ITEMS);
  }

  getAdd(list : List): Observable<List[]>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    }
    return this.http.post<List[]>(this.API_ITEMS, list, httpOptions)
  }

  getUpdate(list: List): Observable<List[]>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    }
    return this.http.put<List[]>(`${this.API_ITEMS}${list.id}/`, list, httpOptions);
  }

  getDelete(id) : Observable<List[]>{
    return this.http.delete<List[]>(this.API_ITEMS + id + '/');
  }

}

