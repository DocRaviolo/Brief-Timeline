import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Timeline} from "./timeline"
import {Card} from "./card";

@Injectable({
  providedIn: 'root'
})
export class TimelinesListService {

  baseAPIUrl = 'http://localhost:8080/api/timeline';

  constructor(private http:HttpClient) { }

  getTimelinesList() {
    return this.http.get<Timeline[]>(this.baseAPIUrl)
  }

  getCardList(timelineId: number) {
    return this.http.get<Card[]>(this.baseAPIUrl+'/'+ timelineId + '/card')
  }

  deleteCard() {
    return this.http.delete<Card>(this.baseAPIUrl+'/1/card/3')
  }
}
