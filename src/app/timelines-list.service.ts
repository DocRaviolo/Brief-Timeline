import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Timeline} from "./timeline"
import {Card} from "./card";

@Injectable({
  providedIn: 'root'
})
export class TimelinesListService {

  constructor(private http:HttpClient) { }

  getTimelinesList() {
    return this.http.get<Timeline[]>('http://localhost:8080/api/timeline')
  }

  getCardList() {
    return this.http.get<Card[]>('http://localhost:8080/api/timeline/1/card')
  }
}
