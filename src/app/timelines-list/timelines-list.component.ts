import { Component, OnInit } from '@angular/core';
import {TimelinesListService} from "../timelines-list.service";

@Component({
  selector: 'app-timelines-list',
  templateUrl: './timelines-list.component.html',
  styleUrls: ['./timelines-list.component.css']
})
export class TimelinesListComponent implements OnInit {

  timelinesList = this.timelinesListService.getTimelinesList();

   /* [{
    id:1,
    name: "Horror Films",
    category: "Movies",
    creationDate: 2021-6-30,
    upDate: 2021-7-1,
    cardNumber: 32,
  }  ];*/

  constructor(private timelinesListService: TimelinesListService) { }

  deleteTimeline(timeline:any) {
    console.log("suppression du timeline : " + timeline.id);
  }

  ngOnInit(): void {
  }

}
