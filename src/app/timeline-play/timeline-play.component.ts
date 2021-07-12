import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-timeline-play',
  templateUrl: './timeline-play.component.html',
  styleUrls: ['./timeline-play.component.css']
})
export class TimelinePlayComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  timelinePlayForm = this.formBuilder.group({
    timelineName: '',
    timelineCategory: '',
    timelineCreationDate:'',
  });

  onSubmitTimelinePlay(): void {
    this.timelinePlayForm.reset();
  }

  ngOnInit(): void {
  }

}
