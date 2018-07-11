import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private http: HttpClient) { }

  public getSongsCollection() {
    return this.http.get('https://slider-8e5b2.firebaseio.com/slider.json')
  }
}
